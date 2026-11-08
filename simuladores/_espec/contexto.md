# Simulador `contexto`: "A janela enchendo" (aula 1.2; reaproveitado na 5.3)

Escrita em 02/11/2026. Quem programa: gerar `site\simuladores\contexto.js` com `export function montar(el, opcoes)` no mesmo padrão de `exemplo.js` (situação original em cinza, caixa de caso, botões de momento, texto curto que muda). Bloco na aula: `['simulador', { id: 'contexto', titulo: 'A janela enchendo' }]`. Sem voz.

## O que o aluno precisa sair sabendo

1. Antes de ele digitar, a janela já tem cerca de 8 mil tokens.
2. Cada mensagem leva a janela inteira junto: o tamanho do pedido cresce com a conversa, mesmo que a mensagem seja curta.
3. A janela de 1 milhão quase nunca enche; o que pesa é o custo de cada pedido e o foco (quanto do que vai no pedido é do assunto atual).
4. `/clear` volta ao começo e não custa nada; colar um arquivo enorme pesa em toda mensagem seguinte.

## Desenho (de cima para baixo)

1. **Caixa de caso** (`<select>`): Conversa curta; Conversa longa; /clear no meio; Arquivo grande colado. Trocar o caso volta ao Momento 0.
2. **Barra "A janela (até 1 milhão de tokens)"**: horizontal, largura total = 1.000.000 tokens. Duas marcas fixas: linha tracejada em 200 mil ("janela dos modelos antigos") e linha cheia em 967 mil ("compactação automática"). O preenchimento é feito por segmentos coloridos (ver legenda). Todo segmento maior que zero tem pelo menos 4 px, para a base de 8 mil aparecer.
3. **Barra "O pedido de agora (escala até 300 mil)"**: mesma composição de cores, mas em escala de 0 a 300 mil, para que a diferença entre 11 mil e 280 mil fique visível. É o tamanho do último pedido enviado ao modelo.
4. **Original em cinza**: em cada barra, uma faixa cinza fixa (cor `#9aa0b8`, a mesma do `exemplo.js`) logo acima do preenchimento colorido, marcando o Momento 0 do caso (8 mil tokens). Ela nunca muda com os botões.
5. **Quatro cartões de números** (em coluna no celular, em linha no PC):
   - Janela agora (tokens)
   - Enviado no último pedido (tokens)
   - Somado desde o Momento 0 (tokens)
   - Custo do último pedido pela API, Opus 5.5: "cache quente" e "cache frio" (dois valores)
6. **Medidor de foco**: "Do que vai no pedido, X% é do assunto atual" (a base de instruções fica fora da conta). Barra pequena, verde a partir de 80%, amarela de 40% a 79%, vermelha abaixo de 40%; o número sempre escrito, para não depender da cor.
7. **Botões**: Momento 0, Momento 1, Momento 2, Momento 3, ∞, e "Próximo passo" (vai ao seguinte; depois do ∞, volta ao 0). `aria-pressed` no momento atual.
8. **Texto do momento** (`aria-live="polite"`), de 2 a 3 frases, da tabela abaixo.
9. **Rodapé fixo, em letra menor**: "Ordem de grandeza. Base: simulação oficial da janela de contexto do Claude Code (números representativos), preços do Opus 5.5 em 01/11/2026 e compactação perto de 967 mil tokens (documentação conferida em 02/11/2026). Para simplificar, cada momento junta as idas ao modelo de um turno; na vida real, cada ferramenta usada é mais uma ida, e cada ida leva a janela inteira."

### Legenda de cores dos segmentos

| Segmento | Cor sugerida | O que é |
|---|---|---|
| Base | azul acinzentado `#6c7bd0` | Instruções do sistema, CLAUDE.md, memória, descrições de skills, nomes de ferramentas MCP |
| Assunto atual | amarelo `#ffd23f` | O que é da tarefa de agora |
| Assuntos antigos | laranja com listras `#e07a3f` | Tarefas anteriores na mesma conversa |
| Arquivo colado (resto) | rosa `#e05a8a` | A parte do arquivo grande que não importa para a pergunta |
| Resumo da compactação | cinza com listras `#7a7f95` | O resumo que substitui a conversa no ∞ da conversa longa |

A legenda aparece em texto (cor + nome) logo abaixo da segunda barra, e cada segmento tem `title` com nome e tokens.

## Base comum: o que já está na janela antes de digitar (Momento 0 de todos os casos)

Números representativos da simulação oficial (`code.claude.com/docs/pt/context-window`), somados e arredondados: **8.000 tokens**.

| Parte | Tokens |
|---|---|
| Instruções do sistema | 4.200 |
| CLAUDE.md do projeto | 1.800 |
| Memória automática | 680 |
| Descrições das skills | 450 |
| CLAUDE.md pessoal | 320 |
| Informações do ambiente | 280 |
| Nomes das ferramentas MCP | 120 |
| **Total** | **7.850, mostrado como 8 mil** |

Um toque (ou foco + Enter) no segmento Base abre esta tabela num balão.

## Preços usados (Opus 5.5, US$ por milhão de tokens, conferidos em 01/11/2026 na página de preços da plataforma)

- Entrada, preço cheio: 4. Usado como "cache frio".
- Leitura do cache: 0,20. Usado como "cache quente".
- Gravar no cache: 5 (5 minutos) ou 8 (1 hora). Não entra nos cartões; o rodapé do caso "Arquivo grande" avisa que o frio real pode sair 25% a 100% acima.
- Cache: cerca de 1 hora na assinatura e 5 minutos com chave de API (boas práticas, 02/11/2026).
- Na assinatura não há conta em dólar: o mesmo uso sai dos limites de 5 horas e semanal. Os cartões dizem "pela API"; o texto do Momento 1 de cada caso lembra isso uma vez.

Fórmulas: custo quente = tokens enviados × 0,20 / 1.000.000; custo frio = tokens enviados × 4 / 1.000.000. Mostrar com 2 algarismos significativos e "US$".

## Os quatro casos

Cada linha traz: segmentos da janela (base / assunto atual / antigos / colado / resumo), janela agora, enviado no último pedido, somado, custo do último pedido (quente; frio), foco e o texto do momento.

### Caso 1: Conversa curta (uma tarefa, três pedidos)

| Momento | Segmentos | Janela | Último pedido | Somado | Custo (quente; frio) | Foco | Texto |
|---|---|---|---|---|---|---|---|
| 0 | base 8.000 | 8.000 | nenhum | 0 | – | – | Antes de você digitar, a janela já tem uns 8 mil tokens: instruções do sistema, CLAUDE.md, memória e listas de skills e ferramentas. Tudo isso vai em todo pedido. A faixa cinza guarda este começo para comparar. |
| 1 | base 8.000; atual 3.050 | 11.050 | 10.450 | 10.450 | US$ 0,0021; US$ 0,042 | 100% | Você pede "resuma aula.md". O Claude lê o arquivo (2.400 tokens) e responde. O pedido levou a base, o arquivo e a pergunta. No plano, isso não vira dólar: sai do seu limite. |
| 2 | base 8.000; atual 3.600 | 11.600 | 11.100 | 21.550 | US$ 0,0022; US$ 0,044 | 100% | "Agora em tópicos": 50 tokens seus, mas o pedido leva 11.100, porque a conversa vai junto. Cresce devagar, porque é uma tarefa só. |
| 3 | base 8.000; atual 4.350 | 12.350 | 11.650 | 33.200 | US$ 0,0023; US$ 0,047 | 100% | Terceiro pedido. A janela usou pouco mais de 1% do milhão. Três pedidos somaram uns 33 mil tokens enviados: de menos de 1 a uns 13 centavos de dólar pela API. |
| ∞ | base 8.000 | 8.000 | nenhum | 33.200 | – | – | Tarefa pronta, /clear. A janela volta ao cinza, e o /clear não custa nada. A próxima tarefa não paga por esta. |

### Caso 2: Conversa longa (três assuntos na mesma conversa, sem /clear; 10 pedidos por assunto)

| Momento | Segmentos | Janela | Último pedido | Somado | Custo (quente; frio) | Foco | Texto |
|---|---|---|---|---|---|---|---|
| 0 | base 8.000 | 8.000 | nenhum | 0 | – | – | O mesmo começo: 8 mil tokens antes de digitar. Desta vez, você vai emendar três assuntos sem limpar. |
| 1 | base 8.000; atual 52.000 | 60.000 | 58.000 | 330.000 | US$ 0,012; US$ 0,23 | 100% | Fim do assunto 1, um relatório, depois de 10 pedidos e 4 arquivos lidos. Cada pedido levou a conversa toda: somados, já foram uns 330 mil tokens. |
| 2 | base 8.000; antigos 52.000; atual 90.000 | 150.000 | 145.000 | 1.380.000 | US$ 0,029; US$ 0,58 | 63% | Assunto 2, uma planilha, na mesma conversa. Cada pedido sobre a planilha leva o relatório junto: um terço do que vai no pedido é assunto velho, disputando a atenção. |
| 3 | base 8.000; antigos 142.000; atual 130.000 | 280.000 | 280.000 | 3.530.000 | US$ 0,056; US$ 1,12 | 48% | Assunto 3: uma pergunta de uma linha leva 280 mil tokens. Depois de uma pausa longa, paga a preço cheio. Na assinatura, uma sessão parada com mais de uns 200 mil é resumida antes de o cache vencer. |
| ∞ | base 8.000; resumo 115.000; atual 25.000 | 148.000 | 148.000 | – | – | resumo | Se você nunca limpar, perto de 967 mil o Claude Code compacta: troca a conversa por um resumo e relê até 5 arquivos. A conversa segue, mas detalhes e regras dadas só nela podem ter sumido. |

Notas do caso 2: "atual 25.000" no ∞ são os até 5 arquivos relidos (cada um com até 5.000 tokens). O resumo de 115 mil vem da proporção que a simulação oficial usa (12% do que foi resumido, sobre uns 950 mil). Cartão "Somado" no ∞ mostra "segue somando" em vez de número.

### Caso 3: /clear no meio (os mesmos três assuntos, com /clear entre eles)

| Momento | Segmentos | Janela | Último pedido | Somado | Custo (quente; frio) | Foco | Texto |
|---|---|---|---|---|---|---|---|
| 0 | base 8.000 | 8.000 | nenhum | 0 | – | – | Os mesmos três assuntos da conversa longa, mas com /clear entre um e outro. Compare os números. |
| 1 | base 8.000; atual 52.000 | 60.000 | 58.000 | 330.000 | US$ 0,012; US$ 0,23 | 100% | Fim do relatório: igual à conversa longa até aqui. Agora, /clear. |
| 2 | base 8.000; atual 90.000 | 98.000 | 93.000 | 860.000 | US$ 0,019; US$ 0,37 | 100% | A planilha começou do cinza, sem o relatório. Somado: 860 mil, contra 1,38 milhão sem o /clear. E tudo o que vai no pedido é do assunto atual. |
| 3 | base 8.000; atual 130.000 | 138.000 | 138.000 | 1.590.000 | US$ 0,028; US$ 0,55 | 100% | A mesma pergunta de uma linha leva 138 mil, metade dos 280 mil. Somado: 1,59 milhão, menos da metade dos 3,53 milhões da conversa longa. |
| ∞ | base 8.000 | 8.000 | nenhum | 1.590.000 | – | – | Cada assunto novo começa no cinza. A janela nunca chega perto da compactação, e as conversas antigas ficam guardadas: /resume volta a elas. |

### Caso 4: Arquivo grande colado (relatório de 200 páginas, perguntas sobre o capítulo 3)

| Momento | Segmentos | Janela | Último pedido | Somado | Custo (quente; frio) | Foco | Texto |
|---|---|---|---|---|---|---|---|
| 0 | base 8.000 | 8.000 | nenhum | 0 | – | – | Você vai colar um relatório inteiro, umas 200 páginas, para perguntar só sobre o capítulo 3. Uma página fica na casa de mil tokens. |
| 1 | base 8.000; colado 190.000; atual 10.850 | 208.850 | 208.050 | 208.050 | primeira vez, sem cache; US$ 0,83 | 5% | Colou tudo e perguntou. O pedido levou 208 mil tokens, e só uns 10 mil são do capítulo 3. Na primeira vez não há cache: preço cheio, e gravar no cache ainda soma de 25% a 100%. |
| 2 | base 8.000; colado 190.000; atual 11.700 | 209.700 | 208.900 | 416.950 | US$ 0,042; US$ 0,84 | 5% | Segunda pergunta, curta. Leva os 200 mil de novo. Com o cache quente, sai barato; mas 95% do que vai no pedido não tem nada a ver com ela. |
| 3 | base 8.000; colado 190.000; atual 12.500 | 210.500 | 209.750 | 626.700 | US$ 0,042; US$ 0,84 | 5% | Terceira pergunta, depois do almoço. Pela API, o cache de 5 minutos já venceu: preço cheio outra vez. Na assinatura, a sessão passou de 200 mil e pode ter sido resumida na pausa. |
| ∞ | base 8.000; atual 11.000 | 19.000 | 19.000 | – | US$ 0,0038; US$ 0,076 | 100% | O conserto: /clear e cole só o capítulo 3. Cada pergunta passa a levar uns 19 mil tokens, onze vezes menos, e tudo é do assunto. Ou deixe o Claude ler o arquivo do disco, ou um subagente resumir. |

## Comportamento

- Abre no caso "Conversa curta", Momento 0.
- Trocar o caso: volta ao Momento 0 e redesenha as duas faixas cinza (sempre 8 mil).
- Botão de momento: anima as barras (transição de 0,45 s em degraus, como no `exemplo.js`; sem animação com `prefers-reduced-motion`).
- "Próximo passo": 0 → 1 → 2 → 3 → ∞ → 0.
- O `aria-label` da área das barras resume o estado em uma frase, por exemplo: "Conversa longa, Momento 3: janela com 280 mil tokens; último pedido de 280 mil; foco de 48%; original em 8 mil".
- Teclado: o `select` e todos os botões alcançáveis com Tab; Enter e Espaço acionam; o balão da Base abre com Enter e fecha com Esc.
- Toque: botões e alvos com pelo menos 44 × 44 px.
- Cabe em 390 × 844 sem rolagem lateral: no celular, os cartões ficam em coluna, as legendas das marcas de 200 mil e 967 mil passam para baixo da barra, e os rótulos de tokens usam "mil" (280 mil) em vez do número inteiro.
- `montar` devolve uma função de limpeza (como o `exemplo.js`).
- Sem dependências externas; estilos no próprio arquivo, com as variáveis de cor do site quando existirem.

## Testes que o `testar-site.cjs` deve fazer

- As 20 combinações (4 casos × 5 momentos) mostram texto não vazio e os quatro cartões.
- A faixa cinza fica em 8 mil em todos os casos e momentos.
- "Conversa curta" no ∞ e "/clear no meio" no ∞ voltam a 8 mil na janela.
- "Conversa longa", Momento 3: janela 280 mil e foco 48%.
- Em 390 px de largura, sem rolagem horizontal.

## Fontes (todas abertas em 02/11/2026)

- Explore a janela de contexto (simulação oficial; números representativos; janela desenhada com 200 mil; resumo em 12%): https://code.claude.com/docs/pt/context-window
- Boas práticas (1 milhão de tokens; compactação sozinha; /clear não custa nada; cache de 1 hora na assinatura e 5 minutos com chave; compactação por inatividade acima de uns 200 mil): https://code.claude.com/docs/pt/best-practices
- Gerencie custos (a conversa completa vai em cada solicitação; cada uso de ferramenta é outra solicitação): https://code.claude.com/docs/pt/costs
- Configuração de modelo (compactação automática perto de 967 mil nos modelos de 1 milhão): https://code.claude.com/docs/pt/model-config
- Preços (Opus 5.5: entrada 4, leitura de cache 0,20, gravação 5 e 8, saída 20): https://platform.claude.com/docs/pt-BR/about-claude/pricing
- Janelas de contexto (1 milhão nos modelos atuais; deterioração de contexto): https://platform.claude.com/docs/pt-BR/build-with-claude/context-windows

## Diferença em relação à simulação oficial

A oficial acompanha uma sessão só, com eventos (leituras, regras, hooks, subagente, /compact) e janela de 200 mil. Esta compara quatro jeitos de usar a conversa, na janela de 1 milhão, e acrescenta o que a oficial não mostra: o tamanho de cada pedido, o somado, o custo em ordem de grandeza e o foco. Os números da base e o resumo de 12% vêm da oficial.
