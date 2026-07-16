// Generates assets/streak-stats.svg from the GitHub GraphQL contributions API.
// Run via .github/workflows/update-streak.yml (or locally with GH_TOKEN set).
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const USERNAME = process.env.GH_USERNAME || 'LucasDiasJorge';
const TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const OUTPUT_PATH = fileURLToPath(new URL('../assets/streak-stats.svg', import.meta.url));

if (!TOKEN) {
  throw new Error('GH_TOKEN (or GITHUB_TOKEN) env var is required to query the GitHub GraphQL API.');
}

async function graphql(query, variables) {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      'User-Agent': 'streak-stats-generator',
    },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (json.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(json.errors)}`);
  }
  return json.data;
}

async function fetchContributionYears() {
  const data = await graphql(
    `query($login: String!) {
      user(login: $login) {
        contributionsCollection { contributionYears }
      }
    }`,
    { login: USERNAME }
  );
  return data.user.contributionsCollection.contributionYears;
}

async function fetchYearDays(year) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;
  const data = await graphql(
    `query($login: String!, $from: DateTime!, $to: DateTime!) {
      user(login: $login) {
        contributionsCollection(from: $from, to: $to) {
          contributionCalendar {
            weeks { contributionDays { date contributionCount } }
          }
        }
      }
    }`,
    { login: USERNAME, from, to }
  );
  return data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
    (w) => w.contributionDays.map((d) => ({ date: d.date, count: d.contributionCount }))
  );
}

function computeStreaks(days) {
  // days sorted ascending by date, each { date, count }
  let longest = 0;
  let longestStart = null;
  let longestEnd = null;
  let run = 0;
  let runStart = null;
  let total = 0;

  for (const d of days) {
    total += d.count;
    if (d.count > 0) {
      if (run === 0) runStart = d.date;
      run++;
      if (run > longest) {
        longest = run;
        longestStart = runStart;
        longestEnd = d.date;
      }
    } else {
      run = 0;
      runStart = null;
    }
  }

  // Current streak: walk back from the end. If the very last day (today, UTC)
  // has no contributions yet, that's fine — the day isn't over — so skip it
  // instead of breaking the streak.
  const todayISO = new Date().toISOString().slice(0, 10);
  let i = days.length - 1;
  if (days[i] && days[i].date === todayISO && days[i].count === 0) {
    i--;
  }
  let current = 0;
  let currentEnd = days[i] ? days[i].date : null;
  let currentStart = currentEnd;
  for (; i >= 0; i--) {
    if (days[i].count > 0) {
      current++;
      currentStart = days[i].date;
    } else {
      break;
    }
  }
  if (current === 0) {
    currentStart = null;
    currentEnd = null;
  }

  return {
    total,
    current,
    currentStart,
    currentEnd,
    longest,
    longestStart,
    longestEnd,
  };
}

function formatDate(iso) {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

function formatRange(startISO, endISO) {
  if (!startISO || !endISO) return 'No streak yet';
  if (startISO === endISO) return formatDate(startISO);
  return `${formatDate(startISO)} - ${formatDate(endISO)}`;
}

function renderSVG(stats) {
  const width = 495;
  const height = 195;
  const colWidth = width / 3;

  const col = (index, label, value, range, accent = false) => {
    const cx = colWidth * index + colWidth / 2;
    const valueClass = accent ? 'stat stat-accent' : 'stat';
    const fire = accent ? '🔥 ' : '';
    return `
      <g text-anchor="middle">
        <text x="${cx}" y="52" class="label">${fire}${label}</text>
        <text x="${cx}" y="104" class="${valueClass}">${value}</text>
        <text x="${cx}" y="132" class="range">${range}</text>
      </g>`;
  };

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Commit streak stats">
  <style>
    .bg { fill: #0d1117; stroke: #30363d; stroke-width: 1; }
    .label { font: 600 14px 'Segoe UI', Ubuntu, Sans-Serif; fill: #8b949e; }
    .stat { font: 700 34px 'Segoe UI', Ubuntu, Sans-Serif; fill: #c9d1d9; }
    .stat-accent { fill: #f0883e; }
    .range { font: 400 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #6e7681; }
    .divider { stroke: #30363d; stroke-width: 1; }
    .footer { font: 400 11px 'Segoe UI', Ubuntu, Sans-Serif; fill: #484f58; }
  </style>
  <rect class="bg" x="0.5" y="0.5" width="${width - 1}" height="${height - 1}" rx="10"/>
  <line class="divider" x1="${colWidth}" y1="30" x2="${colWidth}" y2="145"/>
  <line class="divider" x1="${colWidth * 2}" y1="30" x2="${colWidth * 2}" y2="145"/>
  ${col(0, 'Total Contributions', stats.total.toLocaleString('en-US'), 'all time')}
  ${col(1, 'Current Streak', stats.current, formatRange(stats.currentStart, stats.currentEnd), true)}
  ${col(2, 'Longest Streak', stats.longest, formatRange(stats.longestStart, stats.longestEnd))}
  <text x="${width / 2}" y="172" text-anchor="middle" class="footer">@${USERNAME} · updated ${new Date().toISOString().slice(0, 10)}</text>
</svg>`;
}

async function main() {
  const years = await fetchContributionYears();
  const allDays = [];
  for (const year of years) {
    const days = await fetchYearDays(year);
    allDays.push(...days);
  }
  allDays.sort((a, b) => (a.date < b.date ? -1 : 1));

  const stats = computeStreaks(allDays);
  const svg = renderSVG(stats);

  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, svg, 'utf8');
  console.log(
    `Wrote ${OUTPUT_PATH} — total=${stats.total} current=${stats.current} longest=${stats.longest}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
