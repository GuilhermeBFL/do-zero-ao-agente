# Simulador `repeticao`: "O laço girando" (aula 2.5)

Escrita em 02/11/2026. Quem programa: gerar `site\simuladores\repeticao.js` com `export function montar(el, opcoes)` no mesmo padrão de `exemplo.js` (situação original em cinza, caixa de caso, botões de momento, texto curto que muda). Bloco na aula: `['simulador', { id: 'repeticao', titulo: 'O laço girando' }]`. Sem voz. Não é simulador novo fora do plano: é um dos 8 (aula 2.5, mídia Simulador).

Todos os valores e saídas abaixo vêm de execuções reais no Python 3.12.10, em 02/11/2026 (`_testes\2-5\parcelas.py`, `tentativas.py`, `infinito.py`). O laço infinito foi rodado e interrompido com um Ctrl+C real.

## O que o aluno precisa sair sabendo

1. Um `for` sobre uma lista dá uma volta por item; a cada volta, a variável do laço recebe o próximo item.
2. Só as linhas com recuo se repetem; a linha sem recuo depois do laço roda uma vez, no fim.
3. Um `while` testa a condição antes de cada volta e para quando ela fica falsa; quem faz ela ficar falsa é uma linha do bloco que muda o valor testado.
4. Sem essa linha, o laço nunca termina, e é preciso Ctrl+C.

## Desenho (de cima para baixo; no PC, o código à esquerda e o quadro à direita)

1. **Caixa de caso** (`<select>`): "for numa lista de 3"; "while com contador"; "Laço que nunca termina". Trocar o caso volta ao Momento 0.
2. **Painel do código**: o programa do caso, em fonte monoespaçada, com número de linha e recuo visível. A linha que acabou de rodar no momento fica com fundo amarelo (`#ffd23f`) e uma seta à esquerda; as linhas do bloco que se repete têm uma barra lateral fina, para mostrar o que é "dentro do laço". No celular, o código fica em cima e não pode gerar rolagem lateral (as linhas mais longas quebram com recuo de continuação).
3. **Quadro das variáveis**, uma linha por variável, em três colunas:
   - "Antes do laço": **a situação original, em cinza** (`#9aa0b8`, a mesma do `exemplo.js`). É o Momento 0 do caso e nunca muda com os botões.
   - "Agora": o valor no momento escolhido, em destaque. Quando o valor mudou em relação ao momento anterior, ele pisca uma vez (sem piscar com `prefers-reduced-motion`) e ganha a marca "mudou".
   - Uma marca "igual ao cinza" quando o valor de agora é o mesmo do original (importa no caso 3).
4. **Linha da condição** (só nos casos com `while`): o teste feito antes da volta, escrito por extenso, por exemplo `0 < 3: True`. Verdadeiro em verde, falso em vermelho, sempre com a palavra escrita, para não depender da cor.
5. **Contador de voltas**: "Voltas: 0", "Voltas: 1" e assim por diante; no ∞ do caso 3, "Voltas: não para".
   Na coluna "Tela" das tabelas abaixo, a barra ` / ` separa linhas: cada item é uma linha da tela.
6. **A tela**: uma caixa que imita a saída do terminal e acumula as linhas impressas até o momento (sem botão de copiar).
7. **Botões**: Momento 0, Momento 1, Momento 2, Momento 3, ∞, e "Próximo passo" (vai ao seguinte; depois do ∞, volta ao 0). `aria-pressed` no momento atual. Os rótulos visíveis são "Antes", "Volta 1", "Volta 2", "Volta 3" e "Fim" (no caso 3, "Nunca chega"), com o número do momento para leitores de tela.
8. **Texto do momento** (`aria-live="polite"`), de 1 a 3 frases, da tabela abaixo.
9. **Rodapé fixo, em letra menor**: "Saídas de execuções reais no Python 3.12. O laço infinito foi interrompido com Ctrl+C."

## Os três casos

### Caso 1: for numa lista de 3 (somar parcelas)

Código (5 linhas; a 4 tem recuo de 4 espaços):

```python
parcelas = [300, 250, 450]
total = 0
for parcela in parcelas:
    total = total + parcela
print(total)
```

| Momento | Rótulo | Linha destacada | parcelas | total | parcela | Voltas | Tela | Texto |
|---|---|---|---|---|---|---|---|---|
| 0 | Antes | 2 | [300, 250, 450] | 0 | não existe | 0 | (vazia) | Antes do laço: o total começa em 0 e a variável parcela ainda não existe. A lista tem 3 itens, então serão 3 voltas. O cinza guarda este começo. |
| 1 | Volta 1 | 4 | [300, 250, 450] | 300 | 300 | 1 | (vazia) | Volta 1: parcela recebe o primeiro item, 300. A linha com recuo faz total = 0 + 300. |
| 2 | Volta 2 | 4 | [300, 250, 450] | 550 | 250 | 2 | (vazia) | Volta 2: parcela recebe 250, e total = 300 + 250 = 550. A lista não muda; só parcela e total. |
| 3 | Volta 3 | 4 | [300, 250, 450] | 1000 | 450 | 3 | (vazia) | Volta 3: o último item, 450. total = 550 + 450 = 1000. |
| ∞ | Fim | 5 | [300, 250, 450] | 1000 | 450 | 3 | `1000` | A lista acabou e o laço termina. A linha sem recuo roda uma vez e mostra 1000. Repare: parcela continua valendo 450, o último item. |

### Caso 2: while com contador (três tentativas)

Código (5 linhas; a 3 e a 4 têm recuo de 4 espaços):

```python
tentativas = 0
while tentativas < 3:
    tentativas = tentativas + 1
    print("Tentativa", tentativas)
print("Parei")
```

| Momento | Rótulo | Linha destacada | tentativas | Condição testada antes da volta | Voltas | Tela | Texto |
|---|---|---|---|---|---|---|---|
| 0 | Antes | 1 | 0 | `0 < 3: True` | 0 | (vazia) | Antes do laço: tentativas vale 0. O while testa 0 < 3, que é verdadeiro, então vai entrar no bloco. |
| 1 | Volta 1 | 4 | 1 | `0 < 3: True` | 1 | `Tentativa 1` | Volta 1: a linha 3 soma 1, e tentativas vira 1. O print mostra Tentativa 1. É essa linha que vai fazer o laço terminar. |
| 2 | Volta 2 | 4 | 2 | `1 < 3: True` | 2 | `Tentativa 1` / `Tentativa 2` | Volta 2: o teste 1 < 3 deu verdadeiro. tentativas vira 2. |
| 3 | Volta 3 | 4 | 3 | `2 < 3: True` | 3 | `Tentativa 1` / `Tentativa 2` / `Tentativa 3` | Volta 3: o teste 2 < 3 deu verdadeiro. tentativas vira 3. O próximo teste vai ser 3 < 3. |
| ∞ | Fim | 5 | 3 | `3 < 3: False` | 3 | `Tentativa 1` / `Tentativa 2` / `Tentativa 3` / `Parei` | O teste 3 < 3 é falso: o laço termina sem rodar o bloco de novo, e a linha sem recuo mostra Parei. Três voltas, porque o 3 não é menor que 3. |

### Caso 3: Laço que nunca termina (a linha que soma 1 sumiu)

Código (4 linhas; a 3 tem recuo de 4 espaços):

```python
tentativas = 0
while tentativas < 3:
    print("Tentativa", tentativas)
print("Parei")
```

| Momento | Rótulo | Linha destacada | tentativas | Condição testada antes da volta | Voltas | Tela | Texto |
|---|---|---|---|---|---|---|---|
| 0 | Antes | 1 | 0 | `0 < 3: True` | 0 | (vazia) | O mesmo começo do caso anterior, mas falta a linha que soma 1. Compare o cinza com o valor de agora a cada volta. |
| 1 | Volta 1 | 3 | 0, "igual ao cinza" | `0 < 3: True` | 1 | `Tentativa 0` | Volta 1: nenhuma linha do bloco muda tentativas. Ela continua 0, igual ao cinza. |
| 2 | Volta 2 | 3 | 0, "igual ao cinza" | `0 < 3: True` | 2 | `Tentativa 0` (2 vezes) | Volta 2: o teste é o mesmo, 0 < 3, e a resposta é a mesma, verdadeiro. |
| 3 | Volta 3 | 3 | 0, "igual ao cinza" | `0 < 3: True` | 3 | `Tentativa 0` (3 vezes) | Volta 3: no caso anterior, o laço parava aqui. Neste, a condição testa um valor que nunca muda. |
| ∞ | Nunca chega | 3 | 0, "igual ao cinza" | `0 < 3: True` | não para | as três últimas linhas `Tentativa 0` e, embaixo, o fim real do Ctrl+C (abaixo) | O laço não termina, e Parei nunca aparece. Num teste real, em cerca de 6 segundos saíram mais de 3 milhões de linhas Tentativa 0. No terminal, Ctrl+C interrompe o programa. |

Tela do ∞ no caso 3 (saída real, depois do Ctrl+C, com o nome trocado por SeuNome e a pasta encurtada):

```
Tentativa 0
Tentativa 0
Tentativa 0
Traceback (most recent call last):
  File "C:\Users\SeuNome\estudo\infinito.py", line 3, in <module>
    print("Tentativa", tentativas)
KeyboardInterrupt
```

No ∞ do caso 3, acima da tela, uma faixa fina com o texto "Ctrl+C" mostra onde a execução foi interrompida.

## Comportamento

- Abre no caso "for numa lista de 3", Momento 0.
- Trocar o caso: volta ao Momento 0, troca o código, refaz a coluna cinza (o Momento 0 do caso novo) e esvazia a tela.
- Botão de momento: destaca a linha, atualiza "Agora", a condição, o contador e a tela. Transição curta (0,3 s) só no destaque; sem animação com `prefers-reduced-motion`.
- "Próximo passo": 0 → 1 → 2 → 3 → ∞ → 0.
- O `aria-label` do quadro resume o estado em uma frase, por exemplo: "while com contador, Volta 2: tentativas vale 2; antes do laço valia 0; o teste 1 < 3 deu True; 2 voltas; a tela mostra Tentativa 1 e Tentativa 2".
- Teclado: o `select` e todos os botões alcançáveis com Tab; Enter e Espaço acionam.
- Toque: botões e alvos com pelo menos 44 × 44 px.
- Cabe em 390 × 844 sem rolagem lateral: no celular, código em cima, quadro embaixo, a tela por último; os botões de momento quebram em duas linhas se precisar.
- `montar` devolve uma função de limpeza (como o `exemplo.js`).
- Sem dependências externas; estilos no próprio arquivo, com as variáveis de cor do site quando existirem.

## Testes que o `testar-site.cjs` deve fazer

- As 15 combinações (3 casos × 5 momentos) mostram texto não vazio, o código do caso e o contador de voltas.
- A coluna "Antes do laço" (cinza) não muda ao trocar de momento.
- Caso 1, ∞: total 1000, parcela 450, tela `1000`.
- Caso 2, ∞: tentativas 3, condição `3 < 3: False`, tela termina em `Parei`.
- Caso 3, ∞: tentativas 0, "Voltas: não para", a tela termina em `KeyboardInterrupt` e não contém `Parei`.
- Em 390 px de largura, sem rolagem horizontal.

## Fontes (abertas em 02/11/2026)

- Tutorial oficial do Python, "Mais ferramentas de controle de fluxo" (for, range, break; o ponto de parada do range nunca entra): https://docs.python.org/pt-br/3/tutorial/controlflow.html
- Python Tutor, instruções do autor (um laço infinito pode derrubar a execução lá; por isso o laço infinito fica neste simulador, não no Python Tutor): https://docs.google.com/document/d/13_Bc-l2FKMgwPx4dZb0sv7eMfYMHhRVgBRShha8kgbU/
