---
name: session-learning-roadmap
description: "Use quando o usuario pedir para resumir uma sessao do Copilot, consolidar aprendizados, registrar o que foi feito ou gerar um roadmap de aprendizagem em arquivo Markdown com base no historico real da sessao."
argument-hint: "Informe 'sessao atual', um ID ou tema de sessao e, opcionalmente, o caminho de saida"
user-invocable: true
disable-model-invocation: false
---

# Roadmap de aprendizagem da sessão

Gere um registro de aprendizagem verificável a partir de uma sessão do Copilot usando `#tool:sessionStoreSql`. O resultado deve refletir o trabalho realizado, as decisões tomadas e uma sequência prática para consolidar o conhecimento.

## Pré-requisito

Esta skill requer a ferramenta `sessionStoreSql` e a configuração `github.copilot.chat.localIndex.enabled` habilitada. Se a ferramenta não estiver disponível, informe o pré-requisito e não invente dados da sessão.

## Procedimento

1. Determine a sessão solicitada:
   - Para um ID, consulte `sessions.id` diretamente.
   - Para a sessão atual ou mais recente, liste até 10 sessões por `updated_at DESC` e escolha a candidata compatível com o workspace, branch e assunto atuais.
   - Para um tema, pesquise o índice de sessões e apresente opções quando houver ambiguidade relevante.
   - Escape aspas simples em valores SQL duplicando-as.
2. Confirme com o usuário somente quando não for possível identificar uma sessão com segurança.
3. Colete evidências da sessão selecionada:
   - Metadados de `sessions`: `id`, `summary`, `repository`, `branch`, `agent_name`, `created_at` e `updated_at`.
   - Conversa de `turns`: `turn_index`, `user_message`, `assistant_response` e `timestamp`, sempre em ordem crescente.
   - Resumos de `checkpoints`: use apenas colunas suportadas pelo backend ativo.
   - Arquivos e ferramentas de `session_files` e referências de `session_refs`.
4. Consulte a contagem de turnos antes de carregá-los. Quando houver mais de 100, leia em páginas com `LIMIT 100 OFFSET <n>` até cobrir a sessão inteira.
5. Use mensagens e checkpoints para entender o trabalho. Use caminhos de arquivos e referências apenas como evidência complementar; não deduza alterações somente pelo nome de um arquivo.
6. Separe claramente fatos observados de inferências. Omita seções sem evidência e registre limitações causadas por respostas truncadas, histórico incompleto ou ausência de validação.
7. Produza um roadmap proporcional ao conteúdo real, ordenado de fundamentos para aplicação. Cada etapa deve conter objetivo, tópicos, exercício prático e critério de conclusão.
8. Grave o resultado no caminho informado. Sem caminho explícito, use `docs/learning-roadmaps/YYYY-MM-DD-<assunto>.md` na raiz do workspace, com nome de arquivo ASCII em kebab-case. Não sobrescreva arquivos: acrescente um sufixo numérico quando necessário.
9. Ao concluir, informe o arquivo criado, a sessão analisada e qualquer limitação relevante.

## Estrutura do arquivo

```markdown
# Roadmap de aprendizagem: <assunto>

## Sessão
- ID: `<id>`
- Data: <intervalo>
- Repositório/branch: <valor ou não identificado>

## O que foi feito
<resultados observáveis em ordem lógica>

## Conhecimentos praticados
| Tema | Aplicação na sessão | Evidência |
| --- | --- | --- |

## Decisões e trade-offs
<decisões, alternativas e motivos documentados>

## Dificuldades e correções
<erros, mudanças de entendimento e como foram resolvidos>

## Roadmap de aprendizagem
### 1. <etapa>
- Objetivo: <resultado de aprendizagem>
- Tópicos: <conteúdo necessário>
- Exercício: <prática baseada no trabalho da sessão>
- Conclusão: <evidência verificável de domínio>

## Referências da sessão
<arquivos, testes, comandos, PRs, issues ou commits relevantes>

## Limitações
<lacunas de evidência, somente quando existirem>
```

## Critérios de qualidade

- Não trate respostas planejadas pelo agente como trabalho concluído sem evidência posterior.
- Não transforme toda interação em tópico de estudo; preserve apenas conhecimentos úteis e reutilizáveis.
- Não exponha segredos, tokens, credenciais, dados pessoais ou conteúdo sensível encontrado no histórico.
- Prefira um roadmap curto e executável a uma trilha extensa sem relação direta com a sessão.