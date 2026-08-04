# Fluxo de uso das skills e do agente .NET

Este repositório mantém as customizações pessoais do Copilot em formato de workspace:

- Skills: `.github/skills/<nome>/SKILL.md`
- Agente .NET: `.github/agents/dotnet-clean-architecture.agent.md`

## Quando usar cada customização

| Customização | Use quando | Saída esperada |
| --- | --- | --- |
| `/task-scope-level` | Antes de implementar, para medir a abrangência de uma task Markdown. | Relatório `.md` com nível, nota, fatores de escopo e ambiguidades. |
| `Senior .NET Clean Architecture` | Durante implementação, refatoração, revisão ou debug de soluções C#/.NET com Clean Architecture. | Código ou análise orientada por SOLID, fronteiras de arquitetura e validação focada. |
| `/implementation-review-score` | Depois da implementação, para auditar o diff da branch contra uma task Markdown. | Relatório `.md` com nota de 0 a 10, evidências, achados e esforço de correção. |
| `/session-learning-roadmap` | Ao finalizar uma sessão relevante, para consolidar aprendizados usando o histórico local do Copilot. | Roadmap `.md` com decisões, dificuldades, tópicos praticados e exercícios. |

## Fluxo recomendado

### 1. Refinar o tamanho da task

Execute a skill de abrangência antes de começar a implementação:

```text
/task-scope-level docs/tasks/task-exemplo.md docs/reviews/task-exemplo-scope.md
```

Use o resultado para ajustar expectativa de escopo, separar critérios fora da task e identificar perguntas que podem mudar a classificação.

### 2. Implementar com o agente .NET

Selecione o agente `Senior .NET Clean Architecture` no Copilot Chat quando a tarefa envolver C#/.NET, arquitetura limpa, SOLID, domínio, APIs, persistência ou testes.

Prompt recomendado:

```text
Use o agente Senior .NET Clean Architecture.
Implemente a task docs/tasks/task-exemplo.md.
Preserve os contratos públicos, siga os padrões existentes do repositório e valide com o menor teste/build focado possível.
```

Durante a implementação, prefira prompts que informem comportamento esperado, restrições, camada afetada e validação desejada. O agente foi desenhado para decompor o problema, localizar o ponto controlador, propor trade-offs quando houver tensão arquitetural real e validar logo após a primeira alteração substantiva.

### 3. Revisar a implementação contra a task

Após implementar, rode a revisão de implementação:

```text
/implementation-review-score docs/tasks/task-exemplo.md main docs/reviews/task-exemplo-implementation-review.md
```

Neste repositório, passe `main` explicitamente como branch base. A skill usa `master` quando a base é omitida, mas este repositório tem `main` como branch padrão.

### 4. Registrar aprendizado da sessão

Quando a sessão tiver decisões ou correções que valham reaproveitamento:

```text
/session-learning-roadmap sessao atual docs/learning-roadmaps/YYYY-MM-DD-task-exemplo.md
```

Essa skill depende do histórico local indexado do Copilot. Se o índice local não estiver disponível, ela deve informar o bloqueio em vez de inventar dados.

## Sequência curta para o dia a dia

```text
/task-scope-level <task.md> <relatorio-scope.md>
```

```text
Use o agente Senior .NET Clean Architecture para implementar <task.md>.
```

```text
/implementation-review-score <task.md> main <relatorio-review.md>
```

```text
/session-learning-roadmap sessao atual <roadmap.md>
```

## Manutenção

- Edite as skills em `.github/skills/<nome>/SKILL.md` quando quiser versionar mudanças para este workspace.
- Edite o agente em `.github/agents/dotnet-clean-architecture.agent.md` quando quiser ajustar o comportamento do especialista .NET neste repositório.
- Mantenha descrições de frontmatter claras, porque elas são a superfície de descoberta do Copilot.
- Evite transformar preferências pontuais em instruções sempre ativas; use skills para fluxos específicos e agente para contexto especializado.