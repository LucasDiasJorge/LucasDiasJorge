---
name: task-scope-level
description: "Use para avaliar, pontuar ou classificar o nivel de abrangencia, tamanho funcional ou escopo de uma task descrita em arquivo Markdown. Interpreta comentarios da propria tarefa que desconsideram, reduzem, adiam ou transferem criterios para outra task, ajusta seus pesos e gera um relatorio .md rastreavel. Use tambem para task scope score, refinamento, triagem ou analise de abrangencia antes da implementacao."
argument-hint: "Informe <tarefa.md> e, opcionalmente, o caminho do relatorio .md"
user-invocable: true
disable-model-invocation: false
---

# Nivel de Abrangencia da Task

## Objetivo

Classificar a abrangencia da tarefa descrita em um arquivo Markdown, considerando somente o trabalho efetivamente exigido pela propria task. Ajustar o peso de cada criterio conforme comentarios explicitos que o removam, reduzam, adiem ou transfiram para outra tarefa.

Esta skill avalia escopo, nao qualidade da especificacao, dificuldade tecnica, prazo ou qualidade da implementacao. Nao leia diff Git nem altere a task.

## Entradas

- Obrigatoria: caminho de um arquivo de tarefa com extensao `.md`.
- Opcional: caminho do relatorio. Quando omitido, use `<diretorio-da-tarefa>/<nome-da-tarefa>-scope-review.md`.

Exemplos:

```text
/task-scope-level Task.md
/task-scope-level docs/task-exemplo.md docs/reviews/task-exemplo-scope.md
```

Se o arquivo nao existir, nao for Markdown, estiver vazio ou nao contiver trabalho identificavel, retorne `Blocked`. Nao estime a abrangencia pelo titulo, branch, codigo ou conhecimento externo.

## Unidade de Analise

1. Leia a task inteira, incluindo titulos, listas, checkboxes, tabelas, blockquotes, texto entre parenteses e comentarios HTML.
2. Extraia unidades de trabalho atomicas. Divida um item quando ele exigir resultados observaveis independentes; nao fragmente passos da mesma mudanca apenas para elevar a nota.
3. Associe a cada unidade os comentarios contidos no proprio item, imediatamente abaixo dele ou em uma secao que declare explicitamente seu alcance.
4. Preserve a redacao original como evidencia e registre a interpretacao aplicada.
5. Ignore texto puramente historico, exemplos ilustrativos e contexto que nao imponham trabalho.

## Interpretacao de Comentarios

Interprete a intencao sem depender de frases exatas, mas somente quando o texto for explicito. Use estes fatores:

| Situacao declarada na task | Exemplos semanticos | Fator |
|---|---|---:|
| Ativo e obrigatorio | deve, implementar, garantir, criterio de aceite | 1,00 |
| Escopo reduzido | apenas, somente neste fluxo, versao simplificada, cobertura parcial | 0,75 |
| Opcional ou desejavel | se possivel, opcional, nice to have, pode incluir | 0,50 |
| Adiado sem destino confirmado | depois, futuro, proxima etapa, nao neste momento | 0,25 |
| Desconsiderado | este criterio sera desconsiderado, fora de escopo, cancelado, nao implementar | 0,00 |
| Transferido | retrabalhado em outra tarefa, coberto por outra task, movido para `<id>` | 0,00 |

Regras de decisao:

- Um criterio desconsiderado ou transferido tem peso zero nesta task, mesmo que seu texto original ainda esteja presente.
- A reducao afeta apenas a unidade a que o comentario se refere. Nao propague para itens vizinhos sem indicacao textual.
- Uma declaracao geral de escopo pode afetar varios itens somente quando eles forem nomeados ou estiverem claramente contidos na secao declarada.
- Quando houver mais de um modificador aplicavel, use o mais restritivo e registre todos os comentarios relevantes; nao multiplique fatores.
- Checkbox concluido (`[x]`) nao reduz abrangencia: indica estado, nao escopo.
- Texto riscado sugere remocao, mas use fator zero apenas quando o contexto confirmar cancelamento ou desconsideracao.
- Comentario ambiguo, como `ver depois`, nao autoriza fator zero. Use `0,25` e registre uma pergunta.
- Se a task disser apenas que algo foi "alterado" ou "retrabalhado", sem afirmar que saiu desta task, mantenha `1,00` e marque a ambiguidade.
- Nunca invente o conteudo, status ou identificador da outra tarefa mencionada.

## Dimensoes de Abrangencia

Pontue cada unidade ativa ou reduzida de `0` a `3` em cada dimensao. Use `0` quando a dimensao nao se aplicar.

| Dimensao | 1 | 2 | 3 |
|---|---|---|---|
| Fluxos e regras de negocio | Um comportamento direto | Variantes ou regras relacionadas | Varios fluxos, estados ou excecoes |
| Superficies afetadas | Uma superficie ou componente | Um modulo com varias partes | Multiplos modulos, camadas ou aplicacoes |
| Contratos e dados | Ajuste local sem contrato persistente | DTO, API, evento, schema ou persistencia | Multiplos contratos, migracao ou compatibilidade |
| Integracoes e dependencias | Dependencia interna simples | Uma fronteira externa ou coordenacao | Varias integracoes, times ou sistemas |
| Requisitos nao funcionais | Implicitos e usuais | Um requisito explicito relevante | Seguranca, desempenho, concorrencia ou operacao combinados |
| Validacao e entrega | Uma verificacao focada | Varios cenarios ou configuracao | Testes amplos, rollout, migracao ou observabilidade |

Para cada unidade $i$, calcule:

$$
U_i = f_i \times (F_i + S_i + C_i + I_i + N_i + V_i)
$$

Onde $f_i$ e o fator do comentario. A pontuacao bruta da task e:

$$
B = \sum_{i=1}^{n} U_i
$$

Nao duplique pontos pelo mesmo efeito em unidades diferentes. Quando varias unidades compartilharem o mesmo contrato, integracao ou requisito transversal, pontue esse aspecto apenas na unidade que o introduz e referencie-a nas demais.

## Classificacao

Converta a pontuacao bruta no nivel abaixo:

| Pontuacao bruta | Nota | Nivel | Interpretacao |
|---:|---:|---|---|
| 0 a 5,99 | 1-2 | Pontual | Mudanca isolada, poucos efeitos observaveis |
| 6 a 14,99 | 3-4 | Pequena | Escopo contido em uma area, com poucas variacoes |
| 15 a 29,99 | 5-6 | Media | Multiplos criterios ou partes coordenadas |
| 30 a 49,99 | 7-8 | Ampla | Varias superficies, contratos ou riscos relevantes |
| 50 ou mais | 9-10 | Muito ampla | Escopo transversal, multiplas fronteiras e validacao extensa |

Calcule a nota continua por interpolacao dentro da faixa e arredonde para uma casa decimal:

| Pontuacao bruta $B$ | Calculo da nota |
|---:|---|
| $0 \le B < 6$ | $1 + 2B/6$ |
| $6 \le B < 15$ | $3 + 2(B-6)/9$ |
| $15 \le B < 30$ | $5 + 2(B-15)/15$ |
| $30 \le B < 50$ | $7 + 2(B-30)/20$ |
| $B \ge 50$ | $\min(10,\ 9 + (B-50)/20)$ |

Use o nivel definido pela faixa de pontuacao bruta. A nota facilita comparacao; o nivel e a classificacao oficial.

## Checagens de Coerencia

- Uma unica unidade nao pode ser `Muito ampla` apenas por descricao vaga; falta de detalhe e incerteza, nao abrangencia comprovada.
- Muitos bullets que descrevem o mesmo resultado formam uma unica unidade.
- Um criterio com fator `0,00` deve aparecer na matriz de comentarios, mas nao soma pontos.
- Se mais de 30% das unidades tiverem comentario ambiguo, marque a confianca como `Baixa`.
- Se houver unidades atomicas claras, mas faltarem detalhes de uma dimensao, use apenas a evidencia presente e registre a limitacao; nao bloqueie toda a avaliacao.
- Nao converta a nota em estimativa de tempo, story points ou dificuldade. Essas medidas exigem contexto de equipe e implementacao.

## Contrato do Relatorio

Grave o relatorio `.md` antes de responder no chat, usando a linguagem da task e esta estrutura:

```markdown
# Abrangencia da task: <titulo>

## Identificacao
<!-- caminho da task, data da analise e caminho do relatorio -->

## Resultado
**Nivel: <Pontual|Pequena|Media|Ampla|Muito ampla>**
**Nota de abrangencia: X,X/10**
**Pontuacao bruta: X,XX**
**Confianca: Alta|Media|Baixa**

## Resumo do escopo
<!-- objetivo e principais resultados efetivamente exigidos -->

## Criterios e comentarios interpretados
<!-- tabela: unidade | trecho/comentario | interpretacao | fator | justificativa -->

## Calculo por unidade
<!-- tabela: unidade | F | S | C | I | N | V | fator | subtotal -->

## Itens sem peso nesta task
<!-- criterios desconsiderados ou transferidos e sua evidencia; se nenhum, declarar -->

## Fatores que ampliam a abrangencia
<!-- somente fatores sustentados pela task -->

## Fatores que reduzem a abrangencia
<!-- comentarios, limites e exclusoes sustentados pela task -->

## Ambiguidades e perguntas
<!-- ate 5 perguntas que podem mudar a classificacao; se nenhuma, declarar -->

## Limitacoes
```

Defina a confianca:

- `Alta`: unidades e modificadores tem referencia explicita e consistente.
- `Media`: ha lacunas locais que podem mover a pontuacao, mas nao descaracterizam o nivel.
- `Baixa`: comentarios ambiguos, contradicoes ou falta de detalhe podem mudar o nivel.

## Conclusao

1. Confirme que o relatorio existe, termina em `.md` e referencia a task analisada.
2. Recalcule subtotais, pontuacao bruta, nota e faixa do nivel.
3. Confirme que todo fator menor que `1,00` possui evidencia textual da task.
4. Remova repeticao e inferencias sem evidencias.
5. Responda no chat apenas com status, nivel, nota, confianca, caminho do relatorio e bloqueios relevantes.