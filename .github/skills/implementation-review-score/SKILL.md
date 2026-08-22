---
name: implementation-review-score
description: "Use para revisar, avaliar ou dar uma nota de 0 a 10 para a implementacao de uma tarefa descrita em arquivo Markdown, comparando a branch atual com master e gerando um relatorio .md com evidencias, achados, patches sugeridos e esforco de correcao. Use tambem para code review por task, implementation score, review da feature ou auditoria do diff da branch."
argument-hint: "Informe <tarefa.md> e, opcionalmente, a branch base e o caminho do relatorio .md"
user-invocable: true
disable-model-invocation: false
---

# Avaliacao de Implementacao por Tarefa

## Objetivo

Avaliar o estado atual de uma implementacao contra uma tarefa escrita em Markdown, usando evidencias do diff entre a branch atual e a base. Produzir uma nota rastreavel de 0 a 10 e salvar a revisao em um arquivo Markdown.

Esta skill faz somente revisao. Nao altere a implementacao nem aplique os patches sugeridos sem um pedido posterior explicito.

## Entradas

- Obrigatoria: caminho de um arquivo de tarefa com extensao `.md`.
- Opcional: branch base. Use `master` quando omitida.
- Opcional: caminho do relatorio. Quando omitido, use `<diretorio-da-tarefa>/<nome-da-tarefa>-implementation-review.md`.

Exemplo:

```text
/implementation-review-score Task.md
/implementation-review-score docs/task-exemplo.md master docs/reviews/task-exemplo.md
```

Se a tarefa nao existir, nao for Markdown ou nao permitir identificar objetivo e criterios verificaveis, retorne `Blocked` e solicite a informacao ausente. Nunca deduza requisitos apenas pelo nome da branch ou dos arquivos.

## Escopo da Evidencia

1. Leia a tarefa inteira e extraia objetivo, criterios de aceite, restricoes, casos de erro e itens fora de escopo.
2. Localize a raiz Git e identifique branch atual, `HEAD`, status do working tree e base solicitada.
3. Resolva a base nesta ordem: referencia local exata e, depois, `origin/<base>`. Nao execute `fetch`, `pull`, checkout ou outra operacao que altere o repositorio sem autorizacao.
4. Calcule o merge-base entre a base resolvida e `HEAD`.
5. Colete separadamente:
   - diff commitado: merge-base ate `HEAD`;
   - alteracoes locais rastreadas: `HEAD` ate o working tree;
   - arquivos nao rastreados listados por `git ls-files --others --exclude-standard`.
6. Avalie por padrao o snapshot atual completo: diff commitado, alteracoes locais e arquivos nao rastreados relevantes. Declare no relatorio exatamente o que foi incluido.
7. Inspecione apenas arquivos alterados e dependencias, contratos, configuracoes ou testes diretamente necessarios para confirmar o comportamento.
8. Nao atribua a esta implementacao defeitos preexistentes fora do diff, salvo quando ela os agravar ou passar a depender deles.

Use comandos Git equivalentes a estes, adaptados ao shell atual:

```text
git rev-parse --show-toplevel
git branch --show-current
git status --short
git merge-base <base-ref> HEAD
git diff --find-renames --name-status <merge-base> HEAD
git diff --find-renames --stat <merge-base> HEAD
git diff --check <merge-base> HEAD
git diff --find-renames <merge-base>
git ls-files --others --exclude-standard
```

Se a base nao existir ou nao houver merge-base, retorne `Blocked`; nao substitua silenciosamente por `main` ou outra referencia.

## Procedimento

### 1. Transformar a tarefa em criterios

Crie uma matriz temporaria com `Criterio | Evidencia esperada | Estado`. Use somente os estados:

- `Atendido`: comportamento e validacao sustentam o criterio.
- `Parcial`: parte relevante esta ausente ou contraditoria.
- `Nao atendido`: o diff nao entrega o criterio.
- `Nao verificavel`: falta evidencia executavel, ambiente ou decisao de produto.
- `Fora de escopo`: a propria tarefa exclui o item.

Ausencia de evidencia nao equivale automaticamente a defeito. Registre a limitacao e reduza apenas a categoria cuja confianca foi afetada.

### 2. Revisar o diff

Para cada criterio, siga o fluxo desde a entrada publica ate o efeito observavel e os testes. Procure regressao funcional, contrato quebrado, tratamento de erro, seguranca, desempenho, concorrencia, compatibilidade, testabilidade e aderencia aos padroes locais.

Priorize comportamento e risco. Nao reporte preferencia estilistica sem impacto demonstravel. Nao premie complexidade, quantidade de arquivos ou abstracoes sem necessidade.

### 3. Validar

- Descubra os comandos ja estabelecidos no repositorio para build, testes, lint, analyzers ou typecheck.
- Execute primeiro a validacao focada mais barata e depois amplie somente quando o risco justificar.
- Nao instale nem atualize dependencias durante a revisao sem autorizacao.
- Registre comando, resultado e limitacao. Nao declare que algo passou se nao foi executado.

### 4. Registrar achados

Liste no maximo 10 achados, em ordem de severidade: `Critico`, `Alto`, `Medio`, `Baixo`.

Cada achado deve conter:

- titulo e severidade;
- criterio da tarefa afetado;
- impacto observavel;
- evidencia em arquivo e linha, com extrato curto quando necessario;
- reproducao ou verificacao objetiva;
- correcao minima recomendada.

Para achados `Critico` ou `Alto`, inclua um patch sugerido em unified diff quando houver uma correcao local segura. Nao invente patch para decisao arquitetural ou de produto ainda aberta.

## Rubrica de Pontuacao

Pontue cada categoria de 0 a 10, aceitando uma casa decimal. Use os pesos fixos:

| Categoria | Peso | O que avaliar |
|---|---:|---|
| Organizacao do codigo | 20% | Coesao, responsabilidades, limites e aderencia a arquitetura local |
| Clareza e legibilidade | 10% | Intencao, fluxo, nomes, tratamento explicito e complexidade acidental |
| Seguranca | 20% | Entrada, autorizacao, dados sensiveis, injecao, exposicao e defaults seguros |
| Eficiencia e performance | 20% | I/O, consultas, alocacoes, concorrencia, limites e escala esperada |
| Testabilidade | 10% | Isolamento, determinismo e cobertura dos comportamentos e erros relevantes |
| Manutenibilidade e extensao | 20% | Acoplamento, compatibilidade, evolucao previsivel e ausencia de duplicacao nociva |

Use estas ancoras em todas as categorias:

| Nota | Ancora |
|---:|---|
| 0 | Ausente ou causa falha sistemica/risco inaceitavel |
| 2 | Deficiencias graves impedem uso confiavel |
| 4 | Entrega fragil, com lacunas importantes |
| 6 | Adequada para o escopo, mas com riscos ou lacunas moderadas |
| 8 | Solida, validada e com problemas apenas menores |
| 10 | Excepcional para o escopo, com evidencia forte e sem lacuna relevante |

Calcule a nota geral, sem arredondamentos intermediarios:

$$
\text{Nota geral} = \frac{20O + 10C + 20S + 20P + 10T + 20M}{100}
$$

Arredonde somente o resultado final para uma casa decimal. Explique cada nota com evidencia; nao derive a nota apenas da quantidade de achados e nao conte o mesmo defeito varias vezes.

Aplique estes limites de coerencia:

- criterio de aceite central nao atendido: nota geral maxima `5,0`;
- falha de build ou teste causada pelo diff: nota geral maxima `5,0`;
- vulnerabilidade critica reproduzivel: nota geral maxima `4,0`;
- use `10` somente quando houver evidencia positiva, nao apenas ausencia de problema encontrado.

Quando um limite reduzir a media ponderada, mostre a media calculada e a nota final limitada.

## Contrato do Relatorio

Grave o arquivo `.md` solicitado antes de responder no chat. Use a linguagem da tarefa, salvo pedido diferente, e esta estrutura:

```markdown
# Revisao da implementacao: <titulo da tarefa>

## Identificacao
<!-- tarefa, repositorio, branch, HEAD, base resolvida, merge-base, data e escopo do working tree -->

## Resumo executivo
<!-- 3 a 5 frases: objetivo, fluxo implementado, resultado e risco principal -->

## Cobertura da tarefa
<!-- tabela: criterio | estado | evidencia | observacao -->

## Decisao tecnica e alternativas
<!-- adequacao da abordagem atual e ate 2 alternativas realmente viaveis, com pros, contras e gatilho de adocao -->

## Nota
<!-- tabela: categoria | peso | nota | justificativa; formula, media e eventual limite aplicado -->

**Nota final: X,X/10**

## Checklist
<!-- tabela: verificacao | Sim/Nao/N/A | comentario curto | evidencia -->

## Achados priorizados
<!-- ate 10; se nenhum, declarar explicitamente -->

## Patches sugeridos
<!-- somente para achados criticos/altos corrigiveis localmente; nao aplicar -->

## Registro tecnico para o diario
<!-- 200 a 400 palavras no total, com subsecoes Leigo, Desenvolvedor e Especialista -->

## Esforco de correcao
<!-- Pequeno: ate 1 arquivo; Medio: modulo; Grande: multiplos modulos ou arquitetura. Sem estimativa de tempo. -->

## Perguntas de follow-up
<!-- ate 5 perguntas que resolvam lacunas reais; se nao houver, declarar nenhuma -->

## Validacoes executadas
<!-- comando | resultado | evidencia ou limitacao -->

## Limitacoes e riscos residuais
```

O checklist deve cobrir, quando aplicavel: criterios de aceite, build, testes, arquitetura, validacao de entrada, erros, seguranca, desempenho, observabilidade, compatibilidade e documentacao/configuracao.

## Conclusao

1. Confirme que o relatorio existe, termina em `.md` e menciona o caminho da tarefa.
2. Verifique que todos os achados citam evidencia rastreavel e que a aritmetica da nota confere.
3. Remova repeticao, secoes vazias e alternativas especulativas sem perder riscos, decisoes ou evidencias.
4. Responda no chat apenas com status, nota final, caminho do relatorio, validacoes e bloqueios relevantes.