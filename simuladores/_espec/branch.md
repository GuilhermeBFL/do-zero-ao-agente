# Simulador `branch`: "Dois caminhos" (aulas 3.4 e 3.9)

Especificação para quem for programar `site\simuladores\branch.js`. Segue o padrão da ESPEC-site.md, seção 7, e o simulador de exemplo (`site\simuladores\exemplo.js`): situação original em cinza, caixa de escolha do caso, botões "Momento 0, 1, 2… ∞" e "Próximo passo", e um texto curto que explica o que mudou em cada momento. Sem voz. Toque e teclado. Escrita em 02/11/2026, junto com os rascunhos das aulas 3-4 e 3-9.

Todas as mensagens do Git que aparecem nos textos abaixo foram vistas de verdade nos testes de `_testes\3-4\` e `_testes\3-9\` (Git 2.54). Não invente outras.

## 1. Uso nas aulas

```js
// aula 3-4 (mídia Simulador)
['simulador', { id: 'branch', titulo: 'Dois caminhos', casos: ['fast-forward', 'sem-conflito', 'conflito'] }]
// aula 3-9 (caso novo, sem simulador novo)
['simulador', { id: 'branch', titulo: 'Voltar no tempo', casos: ['restore', 'revert', 'reset'] }]
```

`montar(el, opcoes)`: se o site passar o objeto do bloco como `opcoes`, o simulador mostra só os casos de `opcoes.casos`, na ordem dada, e começa pelo primeiro (ou por `opcoes.caso`, se vier). Sem `opcoes.casos`, mostra os seis casos. **Conferir no `app.js` se o bloco é passado como `opcoes`; se não for, passar.** O campo `casos` é opcional e não quebra nada se o site ignorá-lo.

## 2. O que o desenho mostra

Duas áreas, lado a lado no PC e uma embaixo da outra em 390 px de largura (sem rolagem lateral):

1. **O álbum** (SVG, `viewBox` de uns 640 x 220, largura 100%): commits como círculos numa linha do tempo, da esquerda (mais antigo) para a direita (mais novo). Cada commit tem um rótulo curto embaixo ("Página inicial", "Botão verde"). Uma segunda linha, acima, para o galho da branch. Ligações entre um commit e o pai dele; o commit de junção tem duas ligações (dois pais).
2. **Os post-its** (as branches): etiquetas retangulares presas ao commit para onde apontam, com o nome (`main` em amarelo, a branch em azul). Uma seta pequena com a palavra **HEAD** aponta para o post-it em que você está.
3. **A pasta agora** (painel de texto, fonte monoespaçada): as 3 a 5 linhas do `index.html` naquele momento, com a linha que mudou destacada. No caso de conflito, as marcas `<<<<<<< HEAD`, `=======` e `>>>>>>> preco-promo` aparecem em vermelho.
4. **Mudança sem foto** (só nos casos de voltar): uma etiqueta amarela "sem commit" no painel da pasta quando há edição não commitada.

**Situação original em cinza:** o estado do Momento 0 de cada caso fica desenhado em cinza claro (`#9aa0b8`, como no exemplo), por trás do estado atual, em todos os momentos. Assim o aluno vê o que mudou em relação ao começo: um post-it que andou, um commit novo, um commit que saiu do caminho.

Cores: `main` amarelo `#ffd23f`; branch azul; conflito e "perdido de vez" em vermelho; commit que saiu do log (mas está no reflog) tracejado. Contraste AA nos dois temas (`html[data-tema="noite"]`). Nada de cor sozinha carregando significado: cada estado também tem texto ("perdido de vez", "no reflog", "conflito").

## 3. Os casos e os momentos

Cada momento: o que o desenho faz e o texto curto (até 2 frases). O último momento de cada caso é o "∞".

### 3.1 `fast-forward`: "Só a branch andou (fast-forward)"

| Momento | Desenho | Texto |
|---|---|---|
| 0 | Commit A "Página inicial"; post-it `main` em A; HEAD em `main`. Pasta: título antigo. | A versão que funciona, com o post-it main. |
| 1 | Post-it `titulo-novo` aparece em A, ao lado do `main`; HEAD passa para ele. Pasta igual. | `git switch -c titulo-novo`: um post-it novo na mesma foto. Nada foi copiado. |
| 2 | Commit B "Título novo" à direita de A; `titulo-novo` anda para B; `main` fica em A. Pasta: título novo (linha destacada). | O commit vai para a branch. A main continua na foto antiga. |
| 3 | HEAD volta para `main`. Pasta: título antigo de novo. | `git switch main`: a pasta mostra a foto da main. O título novo está guardado em B. |
| ∞ | Post-it `main` desliza de A para B; nenhum commit novo; depois `titulo-novo` some (git branch -d). Pasta: título novo. | `git merge titulo-novo` responde Fast-forward: o post-it main só avançou. O histórico continua reto. |

### 3.2 `sem-conflito`: "Os dois andaram, em lugares diferentes"

| Momento | Desenho | Texto |
|---|---|---|
| 0 | A "Página inicial"; `main` em A. Pasta: 5 linhas (título, descrição, preço, frase, botão). | O começo, com uma página de cinco linhas. |
| 1 | Galho de cima: B "Botão verde"; post-it `botao-verde` em B. Pasta: linha 5 destacada. | Na branch, o botão muda de cor. |
| 2 | HEAD em `main`; linha de baixo: C "Descrição mais concreta"; `main` em C. Pasta: linha 2 destacada, botão antigo. | Na main, muda a descrição. Agora são dois galhos. |
| ∞ | Commit M "Merge branch 'botao-verde'" à direita, com duas ligações (para B e para C); `main` em M. Pasta: linhas 2 e 5 novas. | `git merge --no-edit botao-verde`: "Merge made by the 'ort' strategy." Uma foto nova, com dois pais, junta as duas mudanças. |

### 3.3 `conflito`: "Os dois mudaram a mesma linha"

| Momento | Desenho | Texto |
|---|---|---|
| 0 | A com preço R$ 49; `main` em A. | O começo: preço R$ 49. |
| 1 | Galho de cima: B "Preço de lançamento: R$ 39"; post-it `preco-promo` em B. | Na branch, o preço vira R$ 39. |
| 2 | Linha de baixo: C "Reajuste: R$ 59"; `main` em C; HEAD em `main`. | Na main, o mesmo preço vira R$ 59. |
| 3 | Um círculo tracejado vermelho à direita, sem rótulo, com a etiqueta "esperando você"; pasta com as marcas em vermelho (R$ 59 entre `<<<<<<< HEAD` e `=======`, R$ 39 entre `=======` e `>>>>>>> preco-promo`). | `CONFLICT (content): Merge conflict in index.html`. O Git não escolhe: mostra os dois lados e espera. |
| 4 | Pasta limpa, com R$ 39; etiqueta "git add feito"; o círculo continua tracejado. | Você ficou com R$ 39 e apagou as três marcas. O `git add` avisa: "All conflicts fixed but you are still merging." |
| ∞ | O círculo vira o commit M "Junta preco-promo", com dois pais; `main` em M. | O commit fecha a junção. Se tivesse desistido, `git merge --abort` voltaria ao Momento 2. |

### 3.4 `restore`: "Voltar: jogar fora o que não virou foto" (aula 3.9)

| Momento | Desenho | Texto |
|---|---|---|
| 0 | A, B, C, D na linha da main ("Página inicial", "Botão verde", "Preço de lançamento", "Rodapé com contato"); `main` em D. Pasta: igual a D. | Quatro fotos; a pasta está igual à última. |
| 1 | Nenhum commit novo. Pasta em vermelho com "Preço: R$ 0" e a etiqueta "sem commit". | O Claude estragou o arquivo, mas não fez commit. O álbum não mudou. |
| ∞ | Pasta volta a ser igual a D; a versão estragada aparece riscada, com "perdida de vez". | `git restore index.html`: o arquivo volta à última foto. O que não tinha foto some, e o Git não guarda cópia. |

### 3.5 `revert`: "Voltar: desfazer um commit com outro commit" (aula 3.9)

| Momento | Desenho | Texto |
|---|---|---|
| 0 | A, B, C, D; `main` em D. | Quatro fotos. |
| 1 | Commit E "Novo layout da página" (em vermelho); `main` em E. Pasta estragada. | O Claude estragou e fez commit. |
| ∞ | Commit F "Revert \"Novo layout da página\"" depois de E; `main` em F; E continua no álbum. Pasta igual a D. | `git revert HEAD`: uma foto nova, o contrário de E. Nada some do histórico, por isso serve mesmo depois do push. |

### 3.6 `reset`: "Voltar: arrancar a última foto (o perigoso)" (aula 3.9)

| Momento | Desenho | Texto |
|---|---|---|
| 0 | A, B, C, D; `main` em D. Pasta com uma linha amarela "sem commit": uma frase que você escreveu e não fotografou. | Você tem uma mudança sem foto na pasta. |
| 1 | Commit E "Deixa o visual mais limpo" (em vermelho), que mexe em outro arquivo; `main` em E. A linha amarela continua. | O Claude fez um commit ruim em outro arquivo. Sua mudança sem foto segue lá. |
| 2 | `main` volta para D; E fica tracejado, fora da linha, com a etiqueta "no reflog"; a linha amarela some, com "perdida de vez". | `git reset --hard HEAD~1` responde "HEAD is now at", seguido da foto D. O commit ruim saiu do log, e a sua mudança sem foto foi junto. |
| ∞ | Um painel "reflog" lista: `HEAD@{0}: reset: moving to HEAD~1`, `HEAD@{1}: commit: Deixa o visual mais limpo`. E pode voltar com `git reset --hard 'HEAD@{1}'`; a linha amarela não volta. | O reflog guarda os commits que saíram do log. O que nunca virou commit, nem o reflog tem. |

## 4. Interação e acessibilidade

- Caixa "Caso:" (`<select>`, 44 px de altura) com os nomes da seção 3 (filtrados por `opcoes.casos`). Trocar o caso volta ao Momento 0.
- Botões "Momento 0", "Momento 1"… e "∞" (com `aria-pressed`), mais "Próximo passo", que avança e, no ∞, volta ao 0. Cada caso tem de 3 a 6 momentos.
- Texto do momento num `<p aria-live="polite">`. O SVG tem `role="img"` e um `aria-label` que descreve o estado em palavras ("main em D; E fora do log, no reflog; mudança sem commit perdida").
- Toque mínimo de 44 px; `prefers-reduced-motion` desliga o deslizar dos post-its (troca seca).
- Funciona sem rede (nada externo) e sem rolagem lateral em 390 px: o álbum encolhe pelo `viewBox`, e o painel da pasta fica embaixo.

## 5. Dados sugeridos

Um objeto por caso, com uma lista de momentos; cada momento descreve o estado inteiro (não diferenças), para o botão "Momento N" pular direto:

```js
{ id: 'conflito', nome: 'Os dois mudaram a mesma linha',
  momentos: [
    { commits: [{ id: 'A', rotulo: 'Página inicial', linha: 0 }],
      postits: [{ nome: 'main', em: 'A' }], head: 'main',
      pasta: ['<h1>Curso de Finanças</h1>', '<p>Preço: R$ 49</p>', '<button>Comprar</button>'], destaque: [],
      texto: 'O começo: preço R$ 49.' },
    // …
  ] }
```

## 6. Testes

- `testar-aulas.cjs` já exercita o bloco `simulador`: conferir que, nas aulas 3-4 e 3-9, cada caso abre, cada botão de momento muda o texto e o `aria-label`, e o "Próximo passo" volta ao 0 depois do ∞.
- Conferir no navegador em 390x844 e 1280x800, nos dois temas.
- Conferir que os textos não usam reticências de três pontos (regra de texto do curso): onde o Git imprime "HEAD is now at", não completar com "…".
