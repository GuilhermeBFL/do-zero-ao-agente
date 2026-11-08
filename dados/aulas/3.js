// Módulo 3. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "3-1": {
    "tempo": 45,
    "video": "c2-git",
    "videoTipo": "conversa",
    "abertura": "Se você já salvou um arquivo como trabalho_final_AGORA_VAI, você já precisava do {{git|Git}}. Esta aula explica o que ele é e o que cada {{comando}} faz por baixo; os comandos aparecem para você reconhecer, porque quem digita pode ser o Claude.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O Git é um programa que guarda o {{historico|histórico}} de uma pasta. Em vez de vinte arquivos com nomes parecidos, você tem uma pasta só, com todas as versões guardadas dentro, e pode voltar a qualquer uma delas. Quase todo projeto de programação do mundo usa Git, e o {{claude-code|Claude Code}} sabe usar também. Ele tira {{checkpoint|checkpoints}} automáticos dos arquivos que edita, mas {{commit}} só quando você pede; por isso a regra é pedir um commit antes de um pedido grande."
      ],
      [
        "p",
        "Para quem não lê {{codigo|código}}, o Git é ainda mais importante do que para quem lê. Você vai pedir ao Claude mudanças que não consegue conferir linha por linha. A rede de segurança é o histórico: se a mudança quebrou alguma coisa, você volta à versão anterior em um comando, sem precisar entender o que deu errado. Sem Git, \"voltar\" significa torcer para ter uma cópia em algum lugar."
      ],
      [
        "p",
        "Ele funciona melhor com arquivos de texto, como código, {{markdown|Markdown}} e {{html|HTML}}, porque consegue mostrar exatamente que linha mudou. Em Word e Excel, ele guarda as versões, mas só diz \"mudou\", sem mostrar o quê. E ele não foi feito para arquivos enormes: vídeos de um curso, por exemplo, ficam fora do {{repositorio|repositório}}, a pasta que o Git acompanha."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Imagine que, a cada avanço, você tira uma foto da pasta inteira e escreve no verso o que mudou: \"primeira versão\", \"exemplo numérico\", \"gráfico novo\". Essa foto é o {{commit}}. O álbum com todas as fotos, em ordem, é o histórico. A pasta que você fotografa é o repositório. Se algo der errado, você abre o álbum, escolhe uma foto antiga e a pasta volta a ficar exatamente como estava naquele dia."
      ],
      [
        "quebra",
        "Foto dá ideia de algo pesado, e não é: um arquivo que não mudou não é copiado de novo, porque o Git só aponta para a versão que já guardou. Mil fotos de uma pasta que quase não muda ocupam pouco mais que a pasta. E a foto só existe se você tirar: o que ficou sem commit pode se perder. O Git não fotografa sozinho."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O repositório: uma pasta com memória"
      ],
      [
        "p",
        "O Git {{rodar|roda}} no seu computador, sem internet, e não tem janela própria: ele é um comando do {{terminal}}, a janela em que você conversa com o computador por texto. Você digita ali, ou pede ao Claude, que digita por você, e a resposta aparece em texto, como as saídas desta aula. O {{vs-code|VS Code}} e o Claude Code é que mostram o resultado de um jeito bonito."
      ],
      [
        "p",
        "Qualquer pasta vira um repositório com um comando: `git init -b main`. O `-b main` dá o nome `main` ao caminho principal, o mesmo nome que o {{github|GitHub}} usa. Sem ele, o Git instalado no Windows costuma chamar o caminho principal de `master`; se acontecer, `git branch -M main` troca o nome, de preferência antes do primeiro envio ao GitHub. A resposta real é uma linha, com o caminho da sua pasta no lugar deste:"
      ],
      [
        "saida",
        "Initialized empty Git repository in C:/Users/SeuNome/estudo/.git/"
      ],
      [
        "p",
        "O que o comando fez foi criar, dentro da pasta, uma subpasta escondida chamada `.git`. É ali que ficam todas as fotos, o álbum, os nomes dos caminhos paralelos, tudo. Os seus arquivos continuam onde estavam e abrem do mesmo jeito. Se você apagar a pasta `.git`, a pasta volta a ser uma pasta comum, e o histórico some. Por isso a regra: não mexa na `.git`. Quem mexe nela é o Git."
      ],
      [
        "p",
        "Quando não usar um repositório: numa pasta de vídeos ou de fotos em lote, com arquivos de muitos megas que mudam sempre, porque cada versão nova ocupa espaço de novo; e numa pasta que outro programa já sincroniza ao mesmo tempo, como uma pasta do OneDrive, onde dois programas mexendo nos mesmos arquivos podem se atrapalhar. Para esses casos, a cópia da {{nuvem}} já basta. Para saber se uma pasta é sincronizada, olhe o caminho dela: se tiver \"OneDrive\" no nome, é."
      ],
      [
        "p",
        "Se você rodar um comando do Git fora de um repositório, ele avisa na hora. Esta é a saída real:"
      ],
      [
        "saida",
        "fatal: not a git repository (or any of the parent directories): .git"
      ],
      [
        "p",
        "Em português: \"não é um repositório Git (nem esta pasta nem as de cima)\". Quase sempre significa que você está na pasta errada."
      ],
      [
        "h3",
        "Os três lugares: a pasta, a área de preparação e o álbum"
      ],
      [
        "p",
        "Aqui está a parte que confunde todo mundo, então vamos devagar. O Git enxerga três lugares. O primeiro é a **pasta** em si, onde você e o Claude editam. O segundo é a **área de preparação**, uma lista de \"o que vai entrar na próxima foto\". O terceiro é o **álbum**, com as fotos já tiradas. Um arquivo salvo no disco está só no primeiro lugar. Para chegar ao álbum, ele passa pela lista."
      ],
      [
        "p",
        "O comando `git status` mostra em que lugar cada arquivo está, e não muda nada. Veja a saída real de um repositório recém-criado, com um arquivo novo chamado `estudo.md` que ainda não entrou em foto nenhuma:"
      ],
      [
        "saida",
        "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\testudo.md\n\nnothing added to commit but untracked files present (use \"git add\" to track)"
      ],
      [
        "p",
        "Linha por linha: \"On branch main\" diz em que caminho você está. \"No commits yet\" diz que o álbum está vazio. \"Untracked files\" lista os arquivos que o Git **ainda não acompanha**: ele vê que existem, mas não vai fotografar. E a última linha explica o que fazer: use `git add` para começar a acompanhar."
      ],
      [
        "p",
        "O `git add .` coloca na lista de preparação tudo o que mudou na pasta. O ponto significa \"tudo nesta pasta\". Ele **não escolhe** nada: leva o que mudou, inclusive o que você não queria, como um arquivo com senha. É por isso que a lista do que deve ficar de fora, o {{gitignore|.gitignore}}, vem antes do primeiro `git add`, e a aula 3.6 é inteira sobre isso."
      ],
      [
        "p",
        "O `git commit -m \"Primeira versão\"` tira a foto. Ela registra todos os arquivos acompanhados, cada um no estado em que está na lista de preparação; o que mudou e não entrou na lista sai como estava na foto anterior. O `-m` é a frase do verso. A saída real:"
      ],
      [
        "saida",
        "[main (root-commit) f793b0f] Primeira versão\n 1 file changed, 3 insertions(+)\n create mode 100644 estudo.md"
      ],
      [
        "p",
        "O `f793b0f` é o nome da foto, que o Git inventa a partir do conteúdo. \"1 file changed, 3 insertions\" diz que um arquivo mudou, com três linhas acrescentadas. E `create mode 100644 estudo.md` avisa que o arquivo entrou no álbum pela primeira vez; o número é o tipo do arquivo, o de um arquivo comum. Suponha que, depois disso, você editou o `estudo.md` e rodou `git status` de novo:"
      ],
      [
        "saida",
        "On branch main\nChanges not staged for commit:\n  (use \"git add <file>...\" to update what will be committed)\n  (use \"git restore <file>...\" to discard changes in working directory)\n\tmodified:   estudo.md\n\nno changes added to commit (use \"git add\" and/or \"git commit -a\")"
      ],
      [
        "p",
        "Mudou o aviso: agora é \"modified\", porque o Git já conhece o arquivo e viu que ele mudou. \"Changes not staged for commit\" é a tradução de \"mudanças que ainda não estão na lista da próxima foto\". O caminho é o mesmo: `git add .` e depois `git commit -m \"Exemplo numérico\"`. A linha do `git restore` ensina o contrário: jogar fora a mudança, voltando o arquivo ao que está na lista de preparação, que aqui é igual à última foto; o que não foi guardado se perde. E o `git commit -a`, da última linha, faz o add e o commit de uma vez, só para arquivos que o Git já acompanha."
      ],
      [
        "p",
        "Quando não usar esse caminho: para um arquivo que não deve ser acompanhado, como uma planilha pessoal que só por acaso está na pasta, e, acima de tudo, para segredos, como senhas e chaves. Esses ficam de fora da lista desde o começo, pelo `.gitignore`, visto acima."
      ],
      [
        "h3",
        "O commit por dentro"
      ],
      [
        "p",
        "Cada commit guarda cinco coisas: a foto da pasta inteira naquele momento, quem tirou (nome e e-mail, que você configura uma vez), a data, a frase do verso e o nome da foto anterior, chamada de pai. É o pai que põe o álbum em ordem: cada foto aponta para a de antes, e só a primeira não tem pai. E cada commit recebe um nome, uma sequência de letras e números como `5526a28`, calculada a partir do conteúdo: se qualquer letra da foto mudar, o nome muda. É por esse nome que você volta a uma versão antiga."
      ],
      [
        "p",
        "O álbum se lê com `git log --oneline`, que mostra uma linha por foto, com a mais nova no alto. Saída real depois de três commits, a que o Claude vê ao rodar o comando; num terminal, a linha de cima traz também `(HEAD -> main)`:"
      ],
      [
        "saida",
        "c96902d Gráfico novo\n5526a28 Exemplo numérico\nf793b0f Primeira versão"
      ],
      [
        "p",
        "Repare que a frase do verso importa. \"Gráfico novo\" diz o que aconteceu; \"mudanças\" ou \"aaa\" não dizem nada, e daqui a um mês você não vai saber a que foto voltar. Quando o Claude faz commit por você, peça frases assim: curtas, dizendo o que mudou."
      ],
      [
        "h3",
        "GitHub: a cópia na internet"
      ],
      [
        "p",
        "Tudo até aqui aconteceu no seu computador. O GitHub é outra coisa: um site, de outra empresa (hoje é da Microsoft), que guarda uma cópia do seu álbum em um {{servidor}} ligado o tempo todo. A conta é gratuita e os repositórios podem ser privados de graça. Mandar as fotos para lá é o {{push}}. Trazer de lá para o PC é o {{pull}}. Se o seu computador queimar, a cópia continua no site; se você trabalha em dois computadores, cada um puxa as fotos do outro pelo site."
      ],
      [
        "p",
        "O repositório precisa saber para onde mandar. Esse endereço se chama **remote**, e por convenção leva o apelido {{origin}}. Sem ele, o `git push` responde assim, de verdade:"
      ],
      [
        "saida",
        "fatal: No configured push destination.\nEither specify the URL from the command-line or configure a remote repository using\n\n    git remote add <name> <url>\n\nand then push using the remote name\n\n    git push <name>"
      ],
      [
        "p",
        "Ou seja: \"não sei para onde mandar; configure um remote\". O comando que grava o endereço com o apelido `origin` é `git remote add origin <endereço do repositório>`, com o endereço que o GitHub mostra quando você cria o repositório lá; ele não responde nada quando dá certo, e a aula 3.3 faz isso no seu PC. Na primeira vez, o envio completo é `git push -u origin main`, que manda as fotos e já grava que, daqui em diante, `git push` sozinho basta. Depois disso, o `git status` passa a comparar o seu PC com o GitHub; com tudo enviado, a saída real é esta:"
      ],
      [
        "saida",
        "On branch main\nYour branch is up to date with 'origin/main'.\n\nnothing to commit, working tree clean"
      ],
      [
        "p",
        "Em português: \"seu caminho está em dia com o main do origin; nada para fotografar, a pasta está limpa\". O Claude pode digitar esses comandos por você."
      ],
      [
        "p",
        "Quando não usar o GitHub: para arquivo com dado de cliente, documento pessoal ou qualquer coisa que não pode sair do seu PC, mesmo em repositório privado, porque privado quer dizer \"só quem tem acesso\", e o acesso pode mudar. E num projeto pequeno que só você usa, em um computador só, o Git local já guarda o histórico; o GitHub pode esperar até você precisar de uma cópia fora."
      ],
      [
        "h3",
        "Branch e merge: testar sem medo"
      ],
      [
        "p",
        "Quer experimentar uma ideia sem mexer na versão que funciona? Crie uma {{branch}}, um caminho paralelo. Por baixo, uma branch é só um nome apontando para uma foto, então criar uma custa nada e leva um instante. O comando `git switch -c ideia-nova` cria o caminho e já muda para ele. Dali em diante, as fotos novas vão para `ideia-nova`, e o caminho principal, chamado `main`, fica exatamente como estava."
      ],
      [
        "p",
        "Deu certo? Você volta para a `main` com `git switch main` e junta os dois caminhos com `git merge ideia-nova`. Isso é o {{merge}}. Quando a `main` não mudou enquanto você trabalhava, o Git não precisa juntar nada: ele só move o nome `main` da foto antiga para a foto mais nova de `ideia-nova`. A saída real é esta:"
      ],
      [
        "saida",
        "Updating c96902d..8ed95ff\nFast-forward\n estudo.md | 2 ++\n 1 file changed, 2 insertions(+)"
      ],
      [
        "p",
        "\"Fast-forward\" quer dizer \"avancei direto, sem conflito\", e \"c96902d..8ed95ff\" mostra o nome saindo de uma foto para a outra. Deu errado? Você joga a branch fora, e a `main` continua intacta. E quando os dois caminhos mudaram a mesma linha, o Git para e pede que você escolha: é o conflito, que a aula 3.4 ensina a resolver com calma."
      ],
      [
        "p",
        "Quando não usar uma branch: mudança pequena e segura, como corrigir uma palavra, vai direto na `main`, com um commit. E, enquanto você aprende, uma branch de cada vez: várias abertas viram mais chance de conflito na hora de juntar."
      ],
      [
        "h3",
        "Por que isso importa para quem usa o Claude Code"
      ],
      [
        "p",
        "O Claude Code roda esses comandos por você quando você pede \"faça um commit\" ou \"mande para o GitHub\". Entendendo cada um, você deixa de aceitar \"pronto, salvei\" e passa a conferir. Se ele disse \"fiz o commit\", está no seu PC. Se disse \"fiz o push\", está no GitHub. Se disse \"criei uma branch\", a `main` não foi tocada."
      ],
      [
        "p",
        "E os {{checkpoint|checkpoints}}, as fotos automáticas que o Claude Code tira a cada pedido seu e que você desfaz com {{rewind|/rewind}}? Ajudam no dia a dia, mas não substituem o Git. Duram cerca de 30 dias. Voltam o que o Claude editou com as ferramentas de edição dele e, num arquivo que ele já editou, também o que um comando mudou depois; mas um arquivo que só um comando ou um {{script}} mudou fica de fora, e as edições de {{subagente|subagentes}}, em geral, não voltam. E não saem do seu PC. A própria documentação do Claude Code diz que eles não substituem o controle de versão, e a aula 7.15 mostra os limites com calma."
      ],
      [
        "h3",
        "A regra de ouro"
      ],
      [
        "p",
        "Nunca coloque senha ou {{chave-api|chave de API}} em um commit. Apagar depois não resolve: a chave continua nas fotos antigas, e qualquer pessoa com acesso ao repositório consegue abrir o álbum. A proteção vem antes, com o `.gitignore`, e ele só vale para arquivo **novo**: o que já entrou em uma foto continua sendo acompanhado, mesmo que você o coloque na lista depois."
      ],
      [
        "p",
        "Se a chave já foi para um commit, a ordem certa é: primeiro {{revogar}} a chave, ou seja, cancelá-la no site de onde ela veio; depois criar outra; depois trocar nos programas que usavam; depois conferir o gasto, para ver se alguém usou a chave enquanto ela estava exposta; e só então, se ainda fizer sentido, limpar o histórico. O que o GitHub e a Anthropic fazem sozinhos depende de o repositório ser público ou privado, e a aula 11.1 explica."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar o Git?** Para o Claude Code rodar esses comandos, o Git precisa estar no PC. A aula 3.3 confere se já está e instala se não estiver.",
          "**Custa alguma coisa?** Não. O Git é gratuito e de {{codigo-aberto|código aberto}}. A conta do GitHub também, inclusive com repositórios privados.",
          "**E se eu errar um comando?** Depois de um commit, nada se perde: você volta à foto. O comando mais perigoso é o que apaga mudanças que ainda não foram fotografadas. A aula 3.9 ensina a voltar no tempo com segurança.",
          "**Onde ficam as fotos?** Na pasta escondida `.git`, dentro do repositório. Não abra nem apague nada ali.",
          "**O que é o \"origin\"?** O apelido do endereço do GitHub para o qual o seu repositório manda as fotos, como no `git push -u origin main` visto acima.",
          "**Posso usar o Git em uma pasta com Word e Excel?** Pode, e ele guarda as versões. Só não vai mostrar o que mudou dentro do arquivo, porque esses formatos não são texto puro."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: de onde veio o Git e por que os nomes são estranhos",
          "blocos": [
            [
              "p",
              "O Git foi criado em 2005 por Linus Torvalds, o criador do Linux, para organizar milhares de pessoas trabalhando no mesmo código. Por isso ele é tão bom em caminhos paralelos e em juntar trabalho de gente diferente, e por isso a terminologia parece feita para engenheiros: era."
            ],
            [
              "p",
              "O nome de cada commit, como `f793b0f`, é o começo de uma sequência de 40 caracteres no formato comum, calculada a partir do conteúdo, um \"hash\". Dois commits com conteúdo diferente, na prática, nunca têm o mesmo nome, e um commit alterado por fora ganha outro nome na hora. É isso que faz o histórico ser confiável."
            ],
            [
              "p",
              "O GitHub não é o único site do tipo: GitLab e Bitbucket fazem o mesmo. Este curso usa o GitHub porque é onde o Claude Code e a maioria dos projetos abertos estão."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Num repositório novo, criado com `git init -b main`, você criou o arquivo `estudo.md` e rodou os dois comandos abaixo. O que você acha que o `git status` mostra agora?",
          "codigo": "git add .\ngit status",
          "linguagem": "texto",
          "resposta": "O arquivo mudou de lugar: saiu só da pasta e entrou na lista da próxima foto. A saída real diz `Changes to be committed:`, \"mudanças que vão entrar na foto\", e embaixo `new file:   estudo.md`, \"arquivo novo\". O \"Untracked files\" sumiu, porque agora o Git acompanha o arquivo. E \"No commits yet\" continua, porque a foto ainda não foi tirada: falta o `git commit`. A linha `(use \"git rm --cached <file>...\" to unstage)` ensina a tirar o arquivo da lista, se você mudar de ideia."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você colocou sua chave em um commit, percebeu e apagou a linha em um commit novo. O que acontece?",
          "o": [
            [
              "A chave sumiu de vez, porque o arquivo atual não tem mais ela e o commit novo substitui o antigo",
              "O arquivo atual não tem, mas o commit antigo continua no histórico, e qualquer um com acesso consegue ver."
            ],
            [
              "O GitHub detecta o problema e apaga a chave sozinho",
              "Não apaga: o commit continua lá. Em repositório público, o GitHub pode avisar; em repositório privado de conta pessoal comum, ele nem procura."
            ],
            [
              "A chave continua no histórico, então precisa ser revogada e trocada",
              "Isso. Primeiro revogue a antiga, depois crie outra. Só limpar o histórico não basta."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu \"salve o meu trabalho\" e o Claude respondeu: \"Pronto, fiz o commit com a mensagem Gráfico novo. Seu trabalho já está guardado no GitHub.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "O commit ficou só no PC; sem push, nada foi para o GitHub",
              "Isso. Peça \"faça o push\" e confira no site do GitHub se o commit apareceu lá."
            ],
            [
              "Está correta: o commit é a foto, e a foto já fica guardada no site",
              "O commit é a foto, mas ela fica no seu PC. Só o push leva as fotos ao GitHub."
            ],
            [
              "O erro é a mensagem: \"Gráfico novo\" não diz em que arquivo a mudança foi feita",
              "Os nomes dos arquivos já ficam guardados no próprio commit; a frase serve para dizer o que mudou, e \"Gráfico novo\" diz. O erro é outro."
            ]
          ],
          "c": 0
        }
      ],
      [
        "h2",
        "Coloque na ordem"
      ],
      [
        "parsons",
        {
          "p": "Coloque os comandos na ordem certa: primeiro veja o que mudou, depois guarde a foto e, por fim, envie para o GitHub.",
          "linhas": [
            "git status",
            "git add .",
            "git commit -m \"gráfico novo\"",
            "git push"
          ],
          "notas": [
            "Olhe antes de adicionar, para saber o que vai entrar na foto",
            "Coloca na lista da próxima foto tudo o que mudou",
            "Tira a foto, com a frase do verso",
            "Manda as fotos para o GitHub"
          ]
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Salvei o arquivo, então está no Git.\"",
            "Salvar grava no disco. Para o Git guardar, precisa de `git add` e `git commit`."
          ],
          [
            "\"Fiz o commit, então está no GitHub.\"",
            "O commit fica no seu computador. Só o `git push` manda para o GitHub."
          ],
          [
            "\"Apaguei a senha do arquivo, então sumiu.\"",
            "A senha continua nas fotos antigas. Revogue a senha primeiro, depois cuide do histórico."
          ],
          [
            "\"Vou decorar todos os comandos.\"",
            "Os do dia a dia são quatro, e o Claude pode rodá-los. Entender o que cada um faz vale mais que decorar."
          ],
          [
            "\"O git add . escolhe o que é importante.\"",
            "Ele leva tudo o que mudou na pasta, sem escolher. Quem escolhe o que fica de fora é o .gitignore, e antes."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "Qual é a diferença entre commit e push?",
          "r": [
            "O commit tira a foto e guarda no seu computador.",
            "O push envia as fotos para o GitHub.",
            "Dá para fazer vários commits antes de um push."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são os três lugares que o Git enxerga, e qual comando leva o arquivo de um para o outro?",
          "r": [
            "A pasta, onde você edita.",
            "A área de preparação, a lista da próxima foto: git add leva para lá.",
            "O álbum, com as fotos tiradas: git commit leva para lá."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "Veja os três lugares (curto e opcional)",
          "lugar": "No PC, com o Claude Code",
          "tempo": "10 minutos",
          "antes": "Você vai ver com os próprios olhos os dois primeiros lugares desta aula, a pasta e a lista de preparação; a foto e o álbum ficam para a aula 3.3, que faz a rotina inteira. Quem digita os comandos é o {{claude-code|Claude Code}}; o seu trabalho é comparar cada saída com as que a aula mostrou. Precisa do Claude Code instalado, como a aula 0.0 ensina, e do Git no PC; se o Git ainda não estiver instalado, a aula 3.3 resolve, e este laboratório pode esperar até lá. Pelo app: não dá, porque o Git roda no seu PC, dentro da pasta do projeto. Os comandos foram rodados de verdade para escrever esta aula. A parte com o Claude Code foi escrita a partir do que ele costuma fazer; como ele conversa, as frases exatas podem variar. Não foi rodada de ponta a ponta antes de publicar.",
          "passos": [
            {
              "faz": "Crie uma pasta nova e vazia fora do OneDrive, como C:\\Projetos\\git-teste. Se o caminho tiver \"OneDrive\" no nome, a pasta está sincronizada: escolha outro lugar.",
              "espera": "A pasta existe e está vazia."
            },
            {
              "faz": "Abra o Claude Code dentro dessa pasta.",
              "espera": "O Claude Code fica esperando um pedido, dentro da pasta vazia."
            },
            {
              "faz": "Cole este pedido. Se ele pedir permissão para rodar comandos ou criar arquivos, aceite.",
              "cola": "Rode git init -b main nesta pasta e me mostre a saída exata, sem resumir.",
              "espera": "Uma linha que começa com \"Initialized empty Git repository in\", seguida do caminho da sua pasta e terminando em .git/."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Crie nesta pasta um arquivo estudo.md com três linhas sobre juros compostos. Não rode nenhum comando do Git.",
              "espera": "O arquivo estudo.md aparece na pasta."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Rode git status e me mostre a saída exata, sem resumir.",
              "espera": "A mesma saída da seção \"Os três lugares\": \"No commits yet\", \"Untracked files\" e estudo.md embaixo. O arquivo está só na pasta."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Rode git add . e me mostre a saída exata, sem resumir.",
              "espera": "Em geral não aparece nada: o git add trabalha calado. No Windows pode aparecer um aviso com \"LF will be replaced by CRLF\", que fala só do jeito de quebrar linhas e não é erro."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Rode git status de novo e me mostre a saída exata, sem resumir.",
              "espera": "Agora aparece \"Changes to be committed\" e \"new file: estudo.md\", a resposta do \"Preveja antes de ver\": o arquivo está na lista da próxima foto. Pare aqui: a foto (commit) e o envio (push) ficam para a aula 3.3, que faz a rotina inteira numa pasta sua de verdade."
            }
          ],
          "errado": "se o comando git não for reconhecido (\"git : The term 'git' is not recognized\" ou parecido), o Git não está instalado no PC: a aula 3.3 instala e configura. Se o git status disser \"nothing to commit\" logo depois de criar o arquivo, o Claude criou o arquivo em outra pasta: peça \"me diga o caminho completo do estudo.md\" e confira se é a pasta do repositório."
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado",
          "texto": "Alguém criou uma pasta, escreveu nela o arquivo estudo.md, abriu o terminal e rodou `git add .` e, depois, o commit abaixo. Os dois responderam com o mesmo texto, e nada foi guardado. Descubra o motivo antes de ver a causa.",
          "cola": "git commit -m \"Primeira versão\"",
          "saida": "fatal: not a git repository (or any of the parent directories): .git",
          "dica": "O erro está antes do commit: na pasta em que o comando foi rodado. Leia a mensagem procurando o que o Git diz que não encontrou nela, nem nas de cima.",
          "resposta": "A pasta ainda não é um repositório: faltou o `git init -b main`, ou o terminal está aberto em outra pasta. \"not a git repository\" é \"não é um repositório Git\", e o \"(or any of the parent directories)\" diz que ele procurou a pasta escondida `.git` aqui e em todas as de cima, sem achar. O conserto é conferir a pasta (o caminho aparece antes do cursor) e, se for a certa, rodar `git init -b main` antes do add e do commit."
        }
      ],
      [
        "fontes",
        [
          [
            "Pro Git, em português",
            "https://git-scm.com/book/pt-br/v2",
            "oficial",
            "31/10/2026",
            "pt"
          ],
          [
            "Pro Git 3.1, Branches em poucas palavras (o que um commit guarda, inclusive o pai)",
            "https://git-scm.com/book/pt-br/v2/Ramifica%c3%a7%c3%a3o-Branching-no-Git-Branches-em-Poucas-Palavras",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Pro Git 2.5, Trabalhando com repositórios remotos (o nome origin)",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Trabalhando-com-Reposit%c3%b3rios-Remotos",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Definir o endereço de e-mail do commit (endereço no-reply), GitHub",
            "https://docs.github.com/pt/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Sobre a verificação de segredos, GitHub",
            "https://docs.github.com/pt/code-security/concepts/secret-security/secret-scanning",
            "oficial",
            "31/10/2026",
            "pt"
          ],
          [
            "Checkpoints do Claude Code (limites: arquivo mudado só por comandos, edições de subagentes e mudanças externas)",
            "https://code.claude.com/docs/pt/checkpointing",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Learn Git Branching",
            "https://learngitbranching.js.org/?locale=pt_BR",
            "comunidade",
            "31/10/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O Git e o GitHub são dois nomes para o mesmo site, onde ficam os projetos",
          "O Git é um programa que roda no seu computador. O GitHub é o site."
        ],
        [
          "O Git guarda as fotos no seu PC, e o GitHub guarda uma cópia na internet",
          "Isso. E o push é o que leva as fotos de um para o outro."
        ],
        [
          "O commit envia o trabalho para o GitHub, e o push guarda no seu computador",
          "É o contrário: o commit fica no computador, e quem envia é o push."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O que é um commit?",
        "o": [
          [
            "O envio do projeto para o GitHub, feito pelo Git",
            "Enviar é o push. O commit fica no seu PC até você mandar as fotos com o push."
          ],
          [
            "Uma foto do projeto, com uma frase do que mudou",
            "Isso. A foto da pasta inteira naquele momento, com o verso escrito."
          ],
          [
            "Uma cópia de segurança que o Git faz sozinho a cada salvamento",
            "O Git não fotografa sozinho: a foto só existe quando alguém roda git commit. Quem tira fotos automáticas é o checkpoint do Claude Code, que não substitui o commit."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você rodou git add . e ainda não rodou git commit. Onde está o arquivo novo?",
        "o": [
          [
            "Na lista da próxima foto, a área de preparação",
            "Isso. O add leva para a lista; a foto só existe depois do commit."
          ],
          [
            "No álbum, já fotografado e com a frase do verso",
            "Ainda não: sem o commit, não há foto nem frase. O arquivo está na lista da próxima foto."
          ],
          [
            "No GitHub, esperando a próxima sincronização da pasta",
            "Nada vai ao GitHub sem commit e push. O arquivo está no seu PC, na lista da próxima foto."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre add e commit?",
        "Pense na foto. O git add é arrumar quem entra na imagem, e o git commit é o clique. Por isso, primeiro vem o add, e depois o commit."
      ],
      [
        "O que acontece se eu apagar a pasta?",
        "Depende do push. Se você já tinha feito push, o GitHub tem uma cópia, e dá para baixar de novo. O que não foi enviado se perde junto com a pasta."
      ],
      [
        "O checkpoint do Claude Code não resolve?",
        "Ajuda no dia a dia, mas dura cerca de 30 dias, não volta um arquivo que só comandos e scripts mudaram e não sai do seu PC. Para guardar de verdade, commit; para ter cópia fora, push."
      ]
    ]
  },
  "3-2": {
    "tempo": 54,
    "video": "a3-2",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Alguém já te mandou o link de um {{repositorio|repositório}} do {{github|GitHub}} e você abriu uma página cheia de nomes estranhos, sem saber onde clicar. Esta aula cria um repositório de verdade só com o {{navegador}} e explica, uma por uma, as peças que aparecem no caminho.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 3.1 mostrou o {{git|Git}} trabalhando no seu PC e o GitHub como a cópia do álbum na internet. Esta aula olha o GitHub pelo outro lado: pelo site, sem {{terminal}} nenhum. Tudo aqui se faz clicando, no PC ou no navegador do celular, e você não precisa ter o Git instalado."
      ],
      [
        "p",
        "Isso serve para três coisas que você vai fazer de verdade. A primeira é guardar um projeto seu com {{historico|histórico}}, fora do PC, em poucos cliques. A segunda é avaliar um projeto de outra pessoa antes de usar: uma {{skill}} que um amigo mandou, um {{servidor}} {{mcp|MCP}} que apareceu num vídeo, uma {{biblioteca}}. A página do repositório diz se o projeto está vivo, quem mantém, se você pode usar e que problemas as pessoas estão relatando. A terceira é conferir o que o {{claude-code|Claude Code}} fez: quando ele diz \"criei o repositório e mandei os arquivos\", é no site que você confere se o repositório é privado, se os arquivos certos foram e se nada que devia ficar de fora foi junto."
      ],
      [
        "p",
        "Ao longo da aula aparecem as peças que todo repositório tem: o {{readme|README}}, a lista de arquivos ignorados, a {{licenca|licença}}, a página de {{commit|commits}}, as {{issues}} e o botão que oferece {{clonar}} ou baixar um {{zip|ZIP}}. No fim, você vai saber o que o Claude Code faz quando você pede \"crie um repositório\", e como pedir para ele não tomar decisões que deveriam ser suas."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Continue com o álbum de fotos da aula 3.1. Criar um repositório no GitHub é colocar esse álbum numa estante de biblioteca. O **README** é a capa, que diz do que o álbum trata. A **licença** é a etiqueta com as regras de cópia: pode xerocar, não pode, pode desde que cite. O **{{gitignore|.gitignore}}** é o aviso de \"o que não entra no álbum\". A **página de commits** é a lista de todas as fotos, na ordem. As **issues** são o caderno de pedidos ao lado da estante, onde qualquer leitor anota \"a foto 12 está borrada\". **Público ou privado** é a estante aberta ao público ou trancada, com chave só para quem você chamar. E **clonar** é levar para casa uma cópia do álbum inteiro, com todas as fotos; baixar o **ZIP** é tirar uma cópia só da última página."
      ],
      [
        "quebra",
        "Numa biblioteca, ninguém escreve no livro da estante; no GitHub, quem tem acesso edita direto no site, e cada edição salva vira uma foto nova no álbum. E a estante trancada não é um cofre: \"privado\" quer dizer \"só quem tem acesso\", e o acesso pode mudar, por um convite, por uma senha vazada ou por você mesmo, ao tornar o repositório público. Tudo o que já está no álbum aparece junto."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Criar o repositório: as escolhas da primeira tela"
      ],
      [
        "p",
        "No GitHub, com a sua conta aberta, o caminho é o botão **+** no canto de cima, à direita, e depois **New repository** (a documentação em português chama de \"Novo repositório\"). A tela pede, em ordem: o dono, que é a sua conta; o nome do repositório; uma descrição opcional; a {{visibilidade}}, pública ou privada; e três caixas opcionais: criar um README, escolher um modelo de .gitignore e escolher uma licença. No fim, o botão **Create repository**, \"Criar repositório\"."
      ],
      [
        "p",
        "O nome aceita até 100 caracteres, com letras sem acento, números, ponto, hífen e sublinhado. Sem espaço e sem acento, então \"Relatório Mensal\" vira algo como `relatorio-mensal`. O nome vai parar no endereço do repositório, que fica assim: `github.com/SeuNome/relatorio-mensal`."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, que é o laboratório desta aula: você cria `ola-mundo`, privado, marca o README e escolhe o modelo de .gitignore chamado {{python|Python}}, sem licença. O GitHub abre a página do repositório com dois arquivos, `README.md` e `.gitignore`, o README aparece logo abaixo da lista de arquivos, e um contador mostra que já existe **1 commit**. Por baixo, o site fez no computador dele o mesmo que você faria no seu com `git init` e um primeiro commit, na {{branch}} `main`. É um commit como os da aula 3.1, com nome, data e autor."
      ],
      [
        "p",
        "Quando não marcar nenhuma das três caixas: quando você vai mandar para lá uma pasta que já existe no seu PC, o caminho da aula 3.3. A própria documentação do GitHub pede: para evitar erros, não crie o repositório com README, licença ou .gitignore nesse caso. Se criar, o GitHub fica com um commit que o seu PC não tem, e o primeiro envio é recusado. A aula 3.3 mostra a mensagem e o conserto."
      ],
      [
        "h3",
        "Público ou privado"
      ],
      [
        "p",
        "Um repositório **público** pode ser visto por qualquer pessoa na internet: ela lê os arquivos, baixa, vê o histórico inteiro. Ver não é alterar: só muda alguma coisa quem você der permissão. Um repositório **privado** só pode ser visto por você e por quem você convidar. No plano gratuito do GitHub, os repositórios privados são ilimitados. Essa escolha é a {{visibilidade}} do repositório, e dá para mudar depois, em Settings, na área de perigo do fim da página."
      ],
      [
        "p",
        "A regra prática: comece privado, sempre. Torne público só o que foi feito para os outros verem, como uma skill para dividir com amigos, um portfólio ou um site publicado pelo GitHub Pages. E antes de tornar público, lembre que o histórico inteiro vai junto: um arquivo com senha que entrou num commit antigo e saiu depois continua lá, na foto velha. A aula 3.6 ensina a não deixar isso acontecer, e a aula 11.1 diz o que fazer se aconteceu."
      ],
      [
        "h3",
        "README: a capa do projeto"
      ],
      [
        "p",
        "O README é um arquivo de texto, quase sempre `README.md`, escrito em {{markdown|Markdown}}. O GitHub reconhece o arquivo sozinho e mostra o conteúdo dele na página principal, logo abaixo da lista de arquivos. Por isso, ele costuma ser a primeira coisa que um visitante lê. A documentação do GitHub sugere quatro respostas: o que o projeto faz e por que é útil, como começar a usar, onde pedir ajuda e quem mantém."
      ],
      [
        "p",
        "Para você, o README tem dois usos. Num projeto de outra pessoa, é por ele que você decide se vale a pena continuar lendo: um README vazio ou de três anos atrás é sinal fraco. Num projeto seu, é o recado para você mesmo daqui a seis meses: \"este repositório guarda o site da landing page; para publicar, peça ao Claude para {{rodar}} tal coisa\". Peça ao Claude um README curto em todo projeto novo. Quando não usar: README não é lugar de senha, endereço de cliente ou qualquer dado que não possa aparecer numa página pública, porque é o arquivo mais visível de todos."
      ],
      [
        "h3",
        ".gitignore por modelo"
      ],
      [
        "p",
        "O .gitignore é a lista de arquivos novos que o Git não deve acompanhar. Na criação do repositório, o GitHub oferece modelos prontos, um por linguagem, tirados do repositório público `github/gitignore`. O modelo Python, por exemplo, tem cerca de 220 linhas, e entre elas estão `__pycache__/`, a pasta de rascunhos que o Python gera sozinho, `.venv`, a pasta das bibliotecas instaladas, e o {{env|.env}}, o arquivo onde ficam as chaves."
      ],
      [
        "p",
        "Começar com esse modelo protege o primeiro commit: se mais tarde você ou o Claude colocarem um `.env` na pasta, ele já nasce ignorado. Só que o .gitignore vale apenas para arquivo novo; o que já entrou numa foto continua sendo acompanhado. A aula 3.6 é inteira sobre isso. Quando o modelo não serve: numa pasta de anotações em Markdown, o modelo Python não atrapalha, mas também não ajuda; uma lista curta feita por você, como a da aula 3.6, explica melhor o que está sendo protegido."
      ],
      [
        "h3",
        "Licença: quem pode usar o que você publicou"
      ],
      [
        "p",
        "Sem licença, valem as regras padrão de direito autoral: segundo a documentação do GitHub, ninguém pode reproduzir, distribuir ou criar trabalhos derivados do seu {{codigo|código}}. Ou seja, um repositório público sem licença pode ser lido, mas não pode ser reaproveitado legalmente. Há uma ressalva, na mesma página: ao publicar um repositório público, você aceita os Termos de Serviço do GitHub, que dão aos outros usuários o direito de ver o repositório e de fazer uma cópia dele dentro do próprio GitHub; fora disso, vale a regra acima. Escolher uma licença é dizer o que os outros podem fazer. A MIT, por exemplo, deixa qualquer pessoa usar, copiar e alterar, desde que mantenha o aviso com o seu nome. O site `choosealicense.com`, feito pelo GitHub, compara as opções. O próprio GitHub avisa que não é conselho jurídico."
      ],
      [
        "p",
        "Duas situações em que isso importa para você. Num repositório privado, a licença quase não faz diferença, porque ninguém de fora vê o código; por isso o laboratório deixa sem. E num projeto de outra pessoa, a licença diz se você pode copiar aquele código para um projeto da sua empresa: sem licença, a resposta é não."
      ],
      [
        "h3",
        "Editar pelo site: cada salvamento é um commit"
      ],
      [
        "p",
        "Dentro de um arquivo, o ícone de lápis abre a edição no próprio navegador. Você muda o texto e clica em **Commit changes**, \"Confirmar alterações\". Abre uma caixa que pede a mensagem do commit, a frase do verso da foto, e pergunta onde guardar: direto na `main` ou numa branch nova, com um pedido para juntar depois, o {{pull-request|pull request}}. Confirmou, e a foto foi tirada no computador do GitHub. O seu PC só fica sabendo quando trouxer as fotos de lá, com um {{pull}}."
      ],
      [
        "p",
        "Isso é ótimo para corrigir uma palavra no README pelo celular, no meio da viagem. Não é bom para mudar muitos arquivos de uma vez, nem para nada que precise ser testado antes: aí o caminho é o PC, com o Claude Code e as aulas 3.3 e 3.4."
      ],
      [
        "h3",
        "A página de commits: o álbum no site"
      ],
      [
        "p",
        "Acima da lista de arquivos aparece um contador com um relógio, como \"3 Commits\". Clicando, você vê a lista de todas as fotos, da mais nova para a mais antiga, com a mensagem, o autor, a data e o começo do nome de cada commit, como `f793b0f`. Clicando num commit, o GitHub mostra o que mudou: linhas em vermelho saíram, linhas em verde entraram. A aula 3.5 ensina a ler essa comparação com calma."
      ],
      [
        "p",
        "É aqui que você confere o trabalho do Claude sem ler código: se ele disse \"mandei a correção do preço\", a página de commits tem que mostrar um commit novo, com uma mensagem que fala do preço e uma mudança no arquivo da página. Se não aparece, o envio não aconteceu. Num projeto de outra pessoa, a data do último commit diz se alguém ainda cuida dele."
      ],
      [
        "h3",
        "Issues: o caderno de pedidos"
      ],
      [
        "p",
        "A aba **Issues** guarda relatos de problemas, pedidos e ideias. Cada issue tem um título, uma descrição, comentários e, às vezes, etiquetas coloridas, como `bug`. Você abre uma com **New issue** e fecha quando o assunto acabou. Num projeto seu, as issues viram uma lista de tarefas com histórico: \"o botão some no celular\" fica registrado, com a data e a discussão. Num projeto de outra pessoa, são o primeiro lugar para ver se o erro que você encontrou já é conhecido. A aula 3.5 ensina a procurar e a reconhecer um bom relato."
      ],
      [
        "h3",
        "Clonar ou baixar o ZIP"
      ],
      [
        "p",
        "O botão verde **Code**, acima da lista de arquivos, oferece duas saídas. **Clonar** é baixar o repositório inteiro, com todas as versões de cada arquivo, já ligado ao endereço de origem: depois, um pull traz o que mudou lá, e um {{push}} manda o que você mudou aqui. O {{comando}} é `git clone` seguido do endereço que o botão mostra. Esse é o significado de {{clonar}}. **Download ZIP** baixa só um instantâneo dos arquivos, sem histórico e sem ligação nenhuma: é uma pasta comum, sem a pasta escondida `.git`."
      ],
      [
        "p",
        "Exemplo: um amigo manda a skill dele. Se você só quer olhar o que tem dentro, antes de decidir instalar, o ZIP basta, e é o mais seguro, porque nada fica ligado a nada. Se você quer acompanhar as atualizações, ou pedir ao Claude para melhorar a skill e devolver, clone. Num repositório privado, os dois caminhos só funcionam para quem tem acesso."
      ],
      [
        "h3",
        "O que o Claude Code faz quando você pede \"crie um repositório\""
      ],
      [
        "p",
        "O pedido é ambíguo. \"Repositório\" pode ser só local, com `git init` na pasta, ou um repositório novo no GitHub. Quando o pedido envolve o GitHub, o Claude costuma usar o {{gh-cli|GitHub CLI}}, o programa `gh`. A documentação de boas práticas do Claude Code diz que, com o `gh` instalado e com login feito, o Claude abre pull requests e lê comentários de revisão sem nenhuma explicação sua. Para criar, o comando é `gh repo create`. A ajuda dele, rodada de verdade, diz que, sem perguntas na tela, ele precisa receber uma de três opções, `--public`, `--private` ou `--internal`; que `--source` usa uma pasta do seu PC como origem; e que `--push` manda os commits dessa pasta para o repositório novo."
      ],
      [
        "p",
        "Ou seja: se você não disser, quem escolhe entre público e privado é o Claude. Diga sempre. Um pedido seguro tem quatro partes: \"Crie um repositório **privado** no GitHub chamado relatorio-mensal, com o conteúdo desta pasta. Antes do primeiro commit, confira se há arquivo com senha ou chave e coloque no .gitignore. No fim, me dê o endereço.\" Se o `gh` não estiver instalado ou estiver sem login, o Claude vai dizer isso; o caminho então é criar o repositório vazio pelo site, como nesta aula, e entregar o endereço para ele, como na aula 3.3. Para conferir, abra o endereço: ao lado do nome do repositório aparece a etiqueta **Private** ou **Public**."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Para esta aula, não: é tudo no navegador. Para o Claude criar repositórios por você, o `gh` precisa estar no PC; o comando oficial para instalar é `winget install --id GitHub.cli --source winget`, e o login se faz uma vez com `gh auth login`, por você.",
          "**Custa?** Não. A conta gratuita do GitHub tem repositórios privados ilimitados, com um conjunto menor de recursos que os planos pagos.",
          "**E se eu errar o nome ou a visibilidade?** Os dois mudam depois, em Settings. Apagar o repositório também é em Settings, na área de perigo, e não tem volta.",
          "**Funciona no celular?** Funciona: o site do GitHub abre no navegador do celular, e existe o app GitHub Mobile. Para ler e corrigir uma palavra, basta; para trabalho grande, use o PC.",
          "**Preciso de conta para ver projetos dos outros?** Para ver repositórios públicos, não. Para criar, editar ou abrir uma issue, sim."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: os nomes em português e em inglês",
          "blocos": [
            [
              "p",
              "A documentação do GitHub em português traduz os nomes da tela: \"Novo repositório\", \"Confirmar alterações\", \"Mesclar solicitação de pull\". Mas o site costuma aparecer em inglês: New repository, Commit changes, {{merge|Merge}} pull request. Esta aula dá os dois. A documentação também chama issues de \"problemas\" e pull requests de \"solicitações de pull\"; no dia a dia, quase todo mundo fala os nomes em inglês."
            ],
            [
              "p",
              "O README pode ficar em três lugares: na raiz do repositório, na pasta `docs` ou na pasta escondida `.github`. Se houver mais de um, o GitHub mostra o da `.github` primeiro. Um repositório público com o mesmo nome do seu usuário, como `SeuNome/SeuNome`, tem o README exibido na sua página de perfil."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Este é o README.md do repositório, em Markdown. O que você acha que aparece na página do repositório, abaixo da lista de arquivos?",
          "codigo": "# Olá, mundo\n\nMeu primeiro repositório, criado pelo navegador.\n\n- Sem terminal\n- Sem instalar nada",
          "linguagem": "markdown",
          "resposta": "Um título grande, \"Olá, mundo\", uma frase comum e uma lista com dois itens marcados por bolinhas. As marcações não aparecem: o `#` só diz que a linha é título, e o `-` diz que é item de lista. O GitHub lê o Markdown e mostra o resultado formatado; para ver as marcações, você abre o arquivo e escolhe ver o código.",
          "vivo": [
            [
              "Trocar o título",
              "# Relatório mensal\n\nMeu primeiro repositório, criado pelo navegador.\n\n- Sem terminal\n- Sem instalar nada"
            ],
            [
              "Tirar a lista",
              "# Olá, mundo\n\nMeu primeiro repositório, criado pelo navegador."
            ],
            [
              "Voltar ao original",
              "# Olá, mundo\n\nMeu primeiro repositório, criado pelo navegador.\n\n- Sem terminal\n- Sem instalar nada"
            ]
          ]
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você vai mandar para o GitHub uma pasta de estudos que já existe no seu PC. Ao criar o repositório no site, o que marca na primeira tela?",
          "o": [
            [
              "README, .gitignore e licença, para o repositório já nascer completo",
              "Aí o GitHub fica com um commit que o seu PC não tem, e o primeiro envio é recusado. Para pasta que já existe, o repositório nasce vazio."
            ],
            [
              "Só o README, porque sem ele o GitHub não aceita o primeiro envio da pasta",
              "O GitHub aceita o envio para um repositório vazio. E o README criado no site causaria o mesmo problema: um commit lá que não existe aqui."
            ],
            [
              "Nenhuma das três caixas: o repositório nasce vazio e depois recebe a pasta do PC",
              "Isso. A documentação do GitHub pede exatamente isso para evitar erros. O README e o .gitignore você cria na pasta, antes do envio."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Criei o repositório relatorios no GitHub e mandei todos os arquivos da pasta. Ele é privado, então o .env com a sua chave, que estava na pasta, não é problema: só você vê.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: num repositório privado, a chave não corre risco nenhum",
              "Privado quer dizer só quem tem acesso, e o acesso muda. Além disso, o GitHub não procura segredos em repositório privado de conta pessoal comum."
            ],
            [
              "Está errada: o .env não devia ter ido; privado não é cofre, e a chave se {{revogar|revoga}}",
              "Isso. A chave está no histórico. Primeiro revogue, depois tire o arquivo do Git e coloque no .gitignore, como nas aulas 3.6 e 11.1."
            ],
            [
              "Está errada: o GitHub apaga sozinho todo .env enviado, então a chave nem chegou lá",
              "O GitHub não apaga arquivo seu, e, em repositório privado de conta pessoal comum, nem procura chaves. O .env foi, está no histórico, e esse é o problema."
            ]
          ],
          "c": 1
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Criei no site com README e agora o envio do PC é recusado.\"",
            "O repositório do site tem um commit que o seu PC não tem. Para uma pasta que já existe, crie o repositório vazio. Se já criou, a aula 3.3 mostra a mensagem e o conserto."
          ],
          [
            "\"É privado, então posso guardar qualquer coisa.\"",
            "Privado é \"só quem tem acesso\", e o acesso pode mudar. Senha, chave e dado de cliente não entram em repositório nenhum."
          ],
          [
            "\"Baixei o ZIP e agora vou mandar as mudanças de volta.\"",
            "O ZIP não tem histórico nem ligação com o repositório. Para devolver mudanças, clone."
          ],
          [
            "\"Repositório sem licença é livre para usar.\"",
            "É o contrário: sem licença, valem as regras padrão de direito autoral, e ninguém pode reaproveitar o código."
          ],
          [
            "\"Pedi ao Claude para criar o repositório; ele escolhe o certo.\"",
            "Se você não disser público ou privado, quem escolhe é ele. Diga \"privado\" no pedido e confira a etiqueta ao lado do nome."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "Qual é a diferença entre clonar um repositório e baixar o ZIP?",
          "r": [
            "Clonar traz o repositório inteiro, com todas as versões.",
            "O clone fica ligado ao endereço de origem: pull traz, push manda.",
            "O ZIP é só um instantâneo dos arquivos atuais, sem histórico e sem ligação."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que peças aparecem ao criar um repositório pelo site, e para que serve cada uma?",
          "r": [
            "README: a capa, que diz o que é o projeto e como usar.",
            ".gitignore: a lista do que o Git não deve acompanhar, como o .env.",
            "Licença: diz o que os outros podem fazer com o código.",
            "Visibilidade: público, qualquer um vê; privado, só quem você convidar."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "Seu primeiro repositório, só com o navegador",
          "lugar": "No navegador, no PC ou no celular",
          "tempo": "30 minutos",
          "antes": "Você vai criar um repositório privado no GitHub, mudar o README numa branch, juntar a mudança com um pull request, ver a página de commits e abrir uma issue. É o tutorial oficial \"Olá, Mundo\" do GitHub, com as peças desta aula no caminho. Precisa de uma conta no GitHub; se ainda não tem, crie em github.com antes de começar: criar a conta e entrar nela é com você. Não precisa do Git nem do Claude Code. Não testado: os passos exigem conta e foram escritos a partir da documentação do GitHub em português, conferida em 02/11/2026. O site pode mostrar os botões em inglês; cada passo dá os dois nomes.",
          "naoTestado": "Exige conta no GitHub. Os nomes dos botões vêm da documentação do GitHub em português (tutorial Olá, Mundo e criação de repositório), conferida em 02/11/2026.",
          "passos": [
            {
              "faz": "Entre no GitHub, em github.com, com a sua conta. Entrar é com você.",
              "espera": "Abre a sua página inicial do GitHub, com a sua foto ou ícone no canto de cima à direita."
            },
            {
              "faz": "Clique no **+**, no canto de cima à direita.",
              "espera": "Abre um menu pequeno, com New repository entre as opções."
            },
            {
              "faz": "Escolha **New repository** (Novo repositório).",
              "espera": "Abre a tela de criação, com o campo do nome e a escolha entre público e privado."
            },
            {
              "faz": "No campo do nome, escreva ola-mundo.",
              "espera": "O nome aparece no campo. Nada foi criado ainda."
            },
            {
              "faz": "Escolha **Private**.",
              "espera": "A opção Private fica marcada no lugar de Public."
            },
            {
              "faz": "Marque a opção de criar o README.",
              "espera": "A opção do README fica marcada."
            },
            {
              "faz": "Em .gitignore, escolha o modelo **Python**.",
              "espera": "O campo do .gitignore passa a mostrar Python."
            },
            {
              "faz": "Na licença, não escolha nada.",
              "espera": "O campo da licença continua sem licença. Nada foi criado ainda."
            },
            {
              "faz": "Clique em **Create repository** (Criar repositório).",
              "espera": "Abre a página do repositório, com a etiqueta Private ao lado do nome, dois arquivos, README.md e .gitignore, o README exibido abaixo da lista e um contador de 1 commit."
            },
            {
              "faz": "Clique no arquivo .gitignore.",
              "espera": "Uma lista longa, com linhas como __pycache__/, .venv e .env: é o modelo Python que protege o primeiro commit."
            },
            {
              "faz": "Volte à página do repositório, clicando no nome ola-mundo, no alto.",
              "espera": "A lista de arquivos de novo, com um botão que mostra main logo acima dela."
            },
            {
              "faz": "Clique no botão que mostra main.",
              "espera": "Abre uma caixa com a lista de branches e um campo para procurar ou criar uma."
            },
            {
              "faz": "No campo dessa caixa, escreva readme-edits.",
              "espera": "Aparece a opção de criar a branch readme-edits a partir da main."
            },
            {
              "faz": "Clique na opção de criar a branch.",
              "espera": "O botão passa a mostrar readme-edits: você está na branch nova, e a main não mudou."
            },
            {
              "faz": "Clique no arquivo README.md.",
              "espera": "O conteúdo do README aparece, com um ícone de lápis em cima do texto."
            },
            {
              "faz": "Clique no ícone de lápis.",
              "espera": "O texto do README abre para edição, no próprio navegador."
            },
            {
              "faz": "No fim do texto, acrescente uma linha qualquer, como \"Primeiro repositório, feito pelo navegador\".",
              "espera": "A linha nova aparece no editor. Ainda não foi salva."
            },
            {
              "faz": "Clique em **Commit changes** (Confirmar alterações).",
              "espera": "Abre uma caixa que pede a mensagem do commit, com a opção de salvar na branch readme-edits."
            },
            {
              "faz": "No campo da mensagem, escreva \"Explica o que é este repositório\".",
              "espera": "A mensagem aparece no campo."
            },
            {
              "faz": "Clique no botão **Commit changes** da caixa, para confirmar.",
              "espera": "A edição é salva como um commit na branch readme-edits. Em geral, aparece um aviso amarelo com o botão Compare & pull request; às vezes ele só aparece na página principal do repositório. Se não aparecer em lugar nenhum, veja o Se der errado."
            },
            {
              "faz": "Clique em **Compare & pull request**.",
              "espera": "Abre a tela de abrir o pull request, com o título já preenchido pela sua mensagem."
            },
            {
              "faz": "Clique em **Create pull request** (Criar solicitação de pull).",
              "espera": "Abre a página do pull request, com a sua mensagem e as abas Conversation, Commits e Files changed."
            },
            {
              "faz": "Clique na aba **Files changed** (Arquivos alterados).",
              "espera": "A linha que você acrescentou aparece em verde, com um + na frente. A aula 3.5 ensina a ler essa tela."
            },
            {
              "faz": "Volte à aba **Conversation**.",
              "espera": "A conversa do pull request, com o botão verde Merge pull request mais abaixo."
            },
            {
              "faz": "Clique em **Merge pull request** (Mesclar solicitação de pull).",
              "espera": "Aparece o botão Confirm merge, pedindo a confirmação."
            },
            {
              "faz": "Clique em **Confirm merge** (Confirmar mesclagem).",
              "espera": "O pull request fica roxo, com a palavra Merged. Aparece um botão para apagar a branch."
            },
            {
              "faz": "Clique em **Delete branch** (Excluir ramo).",
              "espera": "A branch readme-edits é apagada. O trabalho dela já está na main."
            },
            {
              "faz": "Volte à página principal do repositório, clicando no nome ola-mundo, no alto.",
              "espera": "O README da main já mostra a linha nova. A branch readme-edits sumiu da lista; o trabalho dela ficou na main."
            },
            {
              "faz": "Clique no contador de commits, o que tem um relógio, acima da lista de arquivos.",
              "espera": "A lista de fotos do álbum: o primeiro commit, o da sua edição e o do merge, cada um com mensagem, autor e data."
            },
            {
              "faz": "Clique na aba **Issues**.",
              "espera": "A lista de issues, ainda vazia, com o botão New issue."
            },
            {
              "faz": "Clique em **New issue**.",
              "espera": "Abre o formulário, com os campos de título e de descrição."
            },
            {
              "faz": "No título, escreva \"Escrever o README completo\".",
              "espera": "O título aparece no campo. A descrição pode ficar vazia."
            },
            {
              "faz": "Clique em **Create** ou em **Submit new issue**.",
              "espera": "A issue aparece aberta, com um número, como #2, porque issues e pull requests dividem a mesma numeração."
            }
          ],
          "errado": "se não aparecer a opção de criar a branch, confira se você escreveu o nome no campo do botão main, e não na busca de arquivos. Se o aviso amarelo do passo 20 não aparecer, faça o caminho do tutorial oficial: abra a aba Pull requests, clique em New pull request, deixe main em base, escolha readme-edits em compare e clique em Create pull request; abre a mesma tela do passo 21, e você segue a partir do passo 22. Se o botão Merge pull request estiver cinza, role a página: ele fica no fim da conversa. Se o repositório nasceu público por engano, vá em Settings, no fim da página, e mude a visibilidade para privado. Se você não tem a aba Issues, ela pode estar desligada em Settings, na seção Features."
        }
      ],
      [
        "fontes",
        [
          [
            "Olá, Mundo (tutorial oficial), GitHub",
            "https://docs.github.com/pt/get-started/using-github/hello-world",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Criar um repositório (nome, visibilidade, README, .gitignore e licença), GitHub",
            "https://docs.github.com/pt/repositories/creating-and-managing-repositories/creating-a-new-repository",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Sobre repositórios (público, privado, privados ilimitados no plano gratuito), GitHub",
            "https://docs.github.com/pt/repositories/creating-and-managing-repositories/about-repositories",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Sobre o arquivo README do repositório, GitHub",
            "https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Licenciar um repositório, GitHub",
            "https://docs.github.com/pt/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Modelos de .gitignore (Python.gitignore com .env e .venv), GitHub",
            "https://github.com/github/gitignore",
            "oficial",
            "02/11/2026"
          ],
          [
            "Clonar um repositório, GitHub",
            "https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Baixar arquivos do GitHub (ZIP é um instantâneo, sem controle de versão), GitHub",
            "https://docs.github.com/pt/repositories/working-with-files/using-files/downloading-files-from-github",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Adicionar código local ao GitHub (não inicializar com README, licença ou .gitignore), GitHub",
            "https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "gh repo create (manual do GitHub CLI)",
            "https://cli.github.com/manual/gh_repo_create",
            "oficial",
            "02/11/2026"
          ],
          [
            "Boas práticas do Claude Code (com o gh instalado, o Claude abre pull requests), Anthropic",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Escolha uma licença (choosealicense.com), GitHub",
            "https://choosealicense.com/",
            "oficial",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O GitHub serve só para quem programa, e cada repositório precisa nascer com README e licença",
          "Repositório pode nascer vazio, e é o certo quando você vai mandar uma pasta do PC. E o site serve para qualquer projeto com histórico."
        ],
        [
          "Pelo site, você cria, lê e confere um repositório: capa, regras, fotos, pedidos e quem vê",
          "Isso. README, licença, commits, issues e visibilidade, tudo sem terminal."
        ],
        [
          "Repositório privado é seguro para qualquer arquivo, e o ZIP continua ligado a ele",
          "Privado é só quem tem acesso, e o acesso muda. E o ZIP é um instantâneo solto, sem histórico."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você quer só olhar os arquivos de uma skill que um amigo publicou, sem ficar ligado ao repositório dele. O que faz?",
        "o": [
          [
            "Baixa o ZIP pelo botão Code",
            "Isso. O ZIP é um instantâneo dos arquivos, sem histórico e sem ligação nenhuma."
          ],
          [
            "Clona o repositório com git clone",
            "O clone traz tudo e fica ligado ao endereço de origem; para só olhar, é mais do que precisa."
          ],
          [
            "Abre uma issue pedindo os arquivos",
            "Issue é para relatar problema ou pedido. Os arquivos já estão na página, no botão Code."
          ]
        ],
        "c": 0
      },
      {
        "p": "Um repositório público no GitHub não tem licença. O que isso quer dizer?",
        "o": [
          [
            "Que qualquer um pode copiar e reaproveitar o código à vontade",
            "É o contrário: sem licença, valem as regras padrão de direito autoral."
          ],
          [
            "Que o GitHub esconde o repositório até alguém escolher licença",
            "O GitHub não esconde nada: o repositório público continua visível."
          ],
          [
            "Que dá para ler o código, mas não reaproveitar legalmente",
            "Isso. Sem licença, ninguém pode reproduzir, distribuir ou criar derivados; os Termos do GitHub só garantem aos outros ver o repositório e copiá-lo dentro do próprio GitHub."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Público ou privado: qual escolho?",
        "Comece privado, sempre. Torne público só o que foi feito para os outros verem, e lembre que o histórico inteiro vai junto, inclusive commits antigos. Dá para mudar depois em Settings."
      ],
      [
        "Por que o envio do PC foi recusado?",
        "Quase sempre porque o repositório foi criado no site com README, .gitignore ou licença: lá existe um commit que o seu PC não tem. Para pasta que já existe, crie vazio. A aula 3.3 mostra a mensagem e o conserto."
      ],
      [
        "O que o Claude usa para criar repositório no GitHub?",
        "Em geral, o GitHub CLI, o programa gh, com o comando gh repo create. Sem perguntas na tela, ele precisa de --public ou --private: por isso, diga sempre \"privado\" no pedido e confira a etiqueta ao lado do nome do repositório."
      ]
    ]
  },
  "3-3": {
    "tempo": 50,
    "video": "a3-3",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já pediu ao {{claude-code|Claude Code}} \"salva no {{github|GitHub}}\" e ficou sem saber o que ele fez, ou tem uma pasta importante no PC que nunca teve cópia com {{historico|histórico}}. Esta aula faz o caminho inteiro com as suas mãos: o {{git|Git}} instalado, o seu nome configurado, uma pasta que já existe virando {{repositorio|repositório}}, um {{commit}} com mensagem que diz o porquê e o primeiro {{push}}.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 3.1 explicou o que cada {{comando}} faz, e a 3.2 mostrou o GitHub pelo site. Agora é a rotina de verdade, no seu PC, numa pasta de verdade. São os mesmos quatro comandos do dia a dia, `git status`, `git add`, `git commit` e `git push`, mais três que só aparecem uma vez: o que diz ao Git quem você é, o que transforma a pasta em repositório e o que grava o endereço do GitHub."
      ],
      [
        "p",
        "Por que fazer você mesmo, se o Claude faz? Porque é você quem decide o que entra na foto. O Claude {{rodar|roda}} `git add` e `git commit` quando você pede, mas quem sabe que aquela planilha tem dados de um cliente, ou que aquele arquivo tem uma senha, é você. Fazendo uma vez com as próprias mãos, você passa a ler o que o Claude mostra e a perceber quando algo entrou sem querer. E passa a pedir commits melhores: com a mensagem certa, o histórico vira um diário que você e o próprio Claude conseguem ler meses depois."
      ],
      [
        "p",
        "A regra que esta aula põe em prática vem da 3.1: commit antes de cada pedido grande ao Claude, e push no fim do dia. O commit é o ponto de volta no seu PC; o push é a cópia fora dele, que sobrevive a um PC queimado ou roubado."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "A analogia é a mesma da aula 3.1: cada commit é uma foto da pasta, com uma frase no verso, guardada num álbum. Esta aula acrescenta duas peças. A primeira é um **carimbo com o seu nome**, que o Git bate no verso de toda foto: é o `git config`, feito uma vez por PC. A segunda é o **endereço da segunda via do álbum**, anotado uma vez por repositório: é o `git remote add`. Com o carimbo e o endereço prontos, o dia a dia é olhar a mesa (`status`), escolher o que entra na foto (`add`), tirar a foto e escrever o verso (`commit`) e mandar a segunda via (`push`)."
      ],
      [
        "quebra",
        "Um carimbo de verdade prova alguma coisa; o do Git, não. Ele aceita qualquer nome e qualquer e-mail, sem conferir se são seus, e o e-mail fica visível em cada commit para quem vê o repositório. E anotar o endereço não manda nada: a segunda via só é atualizada quando você roda o push, nunca sozinha."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Antes de tudo: o Git está instalado?"
      ],
      [
        "p",
        "O teste é pedir a versão. No {{powershell|PowerShell}}, `git --version` responde com uma linha só. Esta é a saída real no PC em que a aula foi testada:"
      ],
      [
        "saida",
        "git version 2.54.0.windows.1"
      ],
      [
        "p",
        "Se aparecer um número, está instalado, e o número exato não importa para esta aula. Se o Git não estiver instalado, a resposta é esta, também real, num PowerShell sem o Git no caminho:"
      ],
      [
        "saida",
        "git : The term 'git' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.\nAt line:1 char:1\n+ git --version\n+ ~~~\n    + CategoryInfo          : ObjectNotFound: (git:String) [], CommandNotFoundException\n    + FullyQualifiedErrorId : CommandNotFoundException"
      ],
      [
        "p",
        "Em português: \"o termo git não é reconhecido como nome de um comando\". Para instalar, o caminho oficial é a página `git-scm.com/install/windows`, que em 02/11/2026 oferecia a versão 2.56.0, de 26/10/2026. A mesma página dá o comando do {{winget}}, `winget install --id Git.Git -e --source winget`, com um aviso: o pacote do winget não é mantido pelo projeto do Git para Windows e pode chegar atrasado. As opções padrão do instalador servem. Depois de instalar, feche o {{terminal}} e abra outro, porque só os terminais novos enxergam o programa."
      ],
      [
        "p",
        "Um detalhe que confunde: o Claude Code funciona sem o Git. A documentação de instalação diz que, no Windows, o Git é opcional para o próprio Claude Code, que usa o PowerShell quando o Git não está lá. Mas para ele rodar `git commit` por você, o Git precisa estar instalado. Com o Git para Windows instalado, o Claude Code passa a usar também o Git Bash, que vem junto."
      ],
      [
        "h3",
        "O carimbo: seu nome e seu e-mail, uma vez por PC"
      ],
      [
        "p",
        "O commit grava quem tirou a foto. Se o Git ainda não sabe, o primeiro commit para com esta mensagem, real, com o nome do usuário e do PC trocados:"
      ],
      [
        "saida",
        "Author identity unknown\n\n*** Please tell me who you are.\n\nRun\n\n  git config --global user.email \"you@example.com\"\n  git config --global user.name \"Your Name\"\n\nto set your account's default identity.\nOmit --global to set the identity only in this repository.\n\nfatal: unable to auto-detect email address (got 'SeuNome@SEU-PC.(none)')"
      ],
      [
        "p",
        "Em português: \"autor desconhecido; diga quem você é\". A própria mensagem dá os dois comandos. Com `--global`, a configuração vale para todos os repositórios deste PC, e você faz uma vez só. Os dois comandos não respondem nada quando dão certo. Para conferir, pergunte o nome de volta:"
      ],
      [
        "saida",
        "PS> git config --global user.name\nSeu Nome"
      ],
      [
        "p",
        "Cuidado com o e-mail: ele vai dentro de cada commit, e quem vê o repositório no GitHub vê o e-mail. Se não quiser expor o seu, use o endereço sem resposta que o GitHub oferece, na página Emails das configurações da sua conta, aquele que termina em `users.noreply.github.com`. Quando não usar `--global`: num PC dividido com outra pessoa. Aí rode os mesmos comandos sem o `--global`, dentro do repositório, e a configuração vale só para ele, como a própria mensagem explica."
      ],
      [
        "h3",
        "A pasta que já existe vira repositório"
      ],
      [
        "p",
        "O plano desta aula é trabalhar numa **cópia** de uma pasta real sua, como uma pasta de estudos, fora do {{nuvem|OneDrive}}. Cópia porque, se algo der errado, a original continua intacta. No teste, a pasta tinha três arquivos e uma subpasta: `resumo-juros.md`, `exercicios.md`, `notas.csv` e `rascunhos`. Dentro dela, `git init -b main` respondeu, com o caminho encurtado:"
      ],
      [
        "saida",
        "Initialized empty Git repository in C:/Users/SeuNome/estudos/.git/"
      ],
      [
        "p",
        "Os arquivos não mudaram nada; só nasceu a pasta escondida `.git`, o álbum vazio. O passo seguinte, antes de qualquer `add`, é olhar a mesa com `git status`:"
      ],
      [
        "saida",
        "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\texercicios.md\n\tnotas.csv\n\trascunhos/\n\tresumo-juros.md\n\nnothing added to commit but untracked files present (use \"git add\" to track)"
      ],
      [
        "p",
        "Repare em `rascunhos/`, com a barra no fim: o Git mostra uma subpasta nova como uma linha só, sem listar o que tem dentro. Ela vai inteira no próximo `git add .`. Este é o momento de ler a lista com calma e perguntar, arquivo por arquivo: isto pode ir para uma foto que fica para sempre no histórico? Se aparecer {{env|`.env`}}, um arquivo com senha, uma planilha com dados de clientes, pare aqui e monte o {{gitignore|.gitignore}} antes, como ensina a aula 3.6."
      ],
      [
        "p",
        "Não é exagero. Em outubro de 2026, o próprio Claude Code mudou as mensagens de erro de um recurso de revisão de {{codigo|código}} para parar de sugerir `git add .`, porque a sugestão podia levar para o commit arquivos não acompanhados como o `.env`. Se até a ferramenta mudou a dica, vale para você: `git add .` não escolhe nada, leva tudo o que mudou."
      ],
      [
        "h3",
        "Escolher o que entra: um arquivo ou tudo"
      ],
      [
        "p",
        "O `git add` aceita um arquivo só, pelo nome, ou tudo, com o ponto. No teste, primeiro entrou só o resumo, com `git add resumo-juros.md`, e o commit fotografou só ele. Depois, com o resto conferido, `git add .` levou os outros, e o `git status` mostrou a lista da próxima foto:"
      ],
      [
        "saida",
        "On branch main\nChanges to be committed:\n  (use \"git restore --staged <file>...\" to unstage)\n\tnew file:   exercicios.md\n\tnew file:   notas.csv\n\tnew file:   rascunhos/ideia.txt\n\n"
      ],
      [
        "p",
        "\"Changes to be committed\" quer dizer \"mudanças que vão entrar na foto\". Agora a subpasta aparece aberta, com o arquivo de dentro. Essa lista é a {{area-de-preparacao|área de preparação}} da aula 3.1. Se algo entrou sem querer, a linha de cima ensina a tirar: `git restore --staged` seguido do nome. Antes do primeiro commit do repositório, o comando é outro, `git rm --cached` seguido do nome, e o próprio `git status` mostra qual usar. Os dois tiram o arquivo da lista sem apagar nada do disco."
      ],
      [
        "h3",
        "O commit, e a mensagem que diz o porquê"
      ],
      [
        "p",
        "Com a lista certa, o commit. Saída real:"
      ],
      [
        "saida",
        "[main 68a8758] Acrescenta exercícios, notas e rascunhos\n 3 files changed, 9 insertions(+)\n create mode 100644 exercicios.md\n create mode 100644 notas.csv\n create mode 100644 rascunhos/ideia.txt"
      ],
      [
        "p",
        "Agora um caso de todo dia: você descobre que o exercício 3 estava com a taxa errada, ao ano em vez de ao mês, e corrige o arquivo. Antes do `add`, o comando `git diff` mostra exatamente o que mudou desde a última foto. Saída real:"
      ],
      [
        "saida",
        "diff --git a/exercicios.md b/exercicios.md\nindex ecfeea5..8058ed4 100644\n--- a/exercicios.md\n+++ b/exercicios.md\n@@ -2,4 +2,4 @@\n \n 1. R$ 1.000 a 1% ao mês por 12 meses\n 2. R$ 5.000 a 10% ao ano por 3 anos\n-3. R$ 2.000 a 2% ao ano por 6 meses\n+3. R$ 2.000 a 2% ao mês por 6 meses"
      ],
      [
        "p",
        "As quatro primeiras linhas dizem qual arquivo está sendo comparado. O `@@ -2,4 +2,4 @@` diz que o trecho mostrado começa na linha 2. Depois vem o trecho: linhas com espaço na frente não mudaram e estão ali só para você se localizar; a linha com `-` saiu, e a linha com `+` entrou no lugar. Essa comparação é o {{diff}}, e ela aparece de novo no GitHub e no {{vs-code|VS Code}}, em vermelho e verde."
      ],
      [
        "p",
        "Repare: o diff já mostra **o quê** mudou. Por isso a mensagem do commit tem um trabalho diferente, que é dizer **por quê**. Compare três mensagens para essa mesma correção. \"Atualiza exercicios.md\" repete o que o diff já diz. \"Ajustes\" não diz nada. \"Corrige o exercício 3: a taxa é ao mês, como no enunciado da lista\" diz o motivo, e daqui a um mês você sabe, sem abrir nada, por que aquela linha mudou. O livro Pro Git recomenda uma primeira linha curta, de até uns 50 caracteres, e, quando precisar, uma explicação maior depois de uma linha em branco, com a motivação da mudança. O exemplo bom acima passa disso, com 66: é uma recomendação, não uma trava, e o Git aceita a linha de qualquer tamanho. No dia a dia, uma linha que diz o porquê já resolve. O histórico do teste ficou assim:"
      ],
      [
        "saida",
        "7ab2d51 Corrige o exercício 3: a taxa é ao mês, como no enunciado da lista\n68a8758 Acrescenta exercícios, notas e rascunhos\n3cc6494 Primeira versão do resumo de juros"
      ],
      [
        "p",
        "Isso também vale para o Claude. Ele lê o `git log` para entender um projeto. Peça commits assim: \"faça o commit com uma mensagem que diga o porquê da mudança, não só o que mudou\"."
      ],
      [
        "h3",
        "O endereço da segunda via: git remote add"
      ],
      [
        "p",
        "Para o push, o repositório precisa de um endereço, o {{remote}}. Primeiro crie no GitHub um repositório **vazio** e privado, sem {{readme|README}}, sem .gitignore e sem {{licenca|licença}}, como explicou a aula 3.2. A página que abre mostra o endereço HTTPS, algo como `https://github.com/SeuNome/estudos.git`. Com ele, `git remote add origin` seguido do endereço grava o apelido {{origin}}. O comando não responde nada; para conferir, `git remote -v` mostra o endereço, uma vez para trazer e outra para mandar. Saídas reais:"
      ],
      [
        "saida",
        "PS> git remote add origin https://github.com/SeuNome/estudos.git\nPS> git remote -v\norigin\thttps://github.com/SeuNome/estudos.git (fetch)\norigin\thttps://github.com/SeuNome/estudos.git (push)"
      ],
      [
        "p",
        "Se você rodar o `remote add` de novo, o Git avisa que o apelido já existe, com `error: remote origin already exists.`, e não muda nada. Para corrigir um endereço errado, o comando é `git remote set-url origin` seguido do endereço certo."
      ],
      [
        "h3",
        "O primeiro envio: git push -u origin main"
      ],
      [
        "p",
        "O envio da primeira vez é `git push -u origin main`: manda a {{branch}} `main` para o `origin` e, com o `-u`, grava que daqui em diante `git push` sozinho basta. Para escrever esta aula, o envio foi testado contra uma cópia de teste no próprio PC, porque o envio ao GitHub de verdade exige a sua conta e não foi testado. A saída real foi esta, com o caminho encurtado:"
      ],
      [
        "saida",
        "To C:/Users/SeuNome/github-de-mentira/estudos.git\n * [new branch]      main -> main\nbranch 'main' set up to track 'origin/main'."
      ],
      [
        "p",
        "Com o GitHub, a linha `To` mostra o endereço do GitHub. No seu terminal, antes dela aparecem também linhas de progresso, como `Enumerating objects`: o Git só as mostra quando a saída vai para um terminal aberto na tela, e por isso elas não estão na saída acima, que foi gravada por um programa. No primeiro envio, o Git para Windows abre uma janela para você entrar na sua conta do GitHub; entrar é com você, e o Git guarda a autorização para as próximas vezes. As duas últimas linhas são as que importam: `[new branch] main -> main` diz que a branch chegou lá, e a última confirma a ligação. Daí em diante, com nada novo para mandar, `git push` responde `Everything up-to-date`, \"tudo em dia\"."
      ],
      [
        "p",
        "O erro mais comum do primeiro envio acontece quando o repositório foi criado no site com README. O GitHub tem um commit que o seu PC não tem, e recusa. Saída real, com o endereço encurtado:"
      ],
      [
        "saida",
        "To C:/Users/SeuNome/github-de-mentira/rejeitado.git\n ! [rejected]        main -> main (fetch first)\nerror: failed to push some refs to 'C:/Users/SeuNome/github-de-mentira/rejeitado.git'\nhint: Updates were rejected because the remote contains work that you do not\nhint: have locally. This is usually caused by another repository pushing to\nhint: the same ref. If you want to integrate the remote changes, use\nhint: 'git pull' before pushing again.\nhint: See the 'Note about fast-forwards' in 'git push --help' for details."
      ],
      [
        "p",
        "Em português: \"recusado, porque o outro lado tem trabalho que você não tem aqui; traga antes de mandar\". No teste, `git pull --rebase origin main` trouxe o commit do README e recolocou o seu commit depois dele, respondendo `Successfully rebased and updated refs/heads/main.`; em seguida, o mesmo `git push -u origin main` passou. Se a sua pasta também tiver um `README.md`, o pull para no meio, com `CONFLICT (add/add): Merge conflict in README.md`, e a mensagem sugere, entre outras saídas, `git rebase --skip`. Não use: no teste, o `--skip` jogou fora o seu commit, e os arquivos dele sumiram da pasta. Use `git rebase --abort`, que no teste deixou tudo como antes do pull. Se preferir não mexer nisso, apague o repositório do site e crie de novo, vazio."
      ],
      [
        "h3",
        "E quando quem digita é o Claude?"
      ],
      [
        "p",
        "Tudo acima vale quando você pede \"faça o commit e mande para o GitHub\". A diferença é que você confere em vez de digitar. Um bom pedido: \"Rode git status e me mostre a lista. Não use git add ponto: adicione os arquivos pelo nome, deixando de fora qualquer coisa com senha ou chave. Faça o commit com uma mensagem que diga o porquê e depois o push. Me mostre a saída exata de cada comando.\" Com as saídas na tela, você sabe ler cada uma: a lista do status, a linha do commit com o nome da foto e a linha `main -> main` do push."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Só o Git, se o `git --version` não responder com um número. É gratuito.",
          "**Custa?** Nada. O Git é gratuito, e o repositório privado no GitHub também.",
          "**E se eu errar a mensagem do commit?** Antes do push, dá para corrigir a mensagem do último commit; peça ao Claude: \"corrija a mensagem do último commit, que ainda não foi enviado\". Depois do push, deixe como está e capriche na próxima.",
          "**De quanto em quanto tempo faço commit?** A cada passo que funciona, e sempre antes de um pedido grande ao Claude. O push pode esperar o fim do dia.",
          "**Posso fazer isso numa pasta do OneDrive?** Melhor não: dois programas mexendo nos mesmos arquivos ao mesmo tempo podem se atrapalhar, como disse a aula 3.1. Use uma pasta fora dele, como C:\\Projetos."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o -u, o master e o histórico do PowerShell",
          "blocos": [
            [
              "p",
              "O `-u` é a forma curta de `--set-upstream`: ele liga a sua `main` à `main` do `origin`. É por isso que, depois, o `git status` passa a dizer se você está em dia com o GitHub, e o `git push` sozinho sabe para onde mandar."
            ],
            [
              "p",
              "No Git instalado no Windows, a configuração geral do sistema costuma definir `master` como nome do primeiro caminho. No PC do teste, a linha estava no arquivo de configuração do próprio Git, com o valor `master`. Por isso esta aula usa sempre `git init -b main`, e o laboratório quebrado mostra o que acontece sem o `-b main`."
            ],
            [
              "p",
              "O PowerShell guarda o histórico do que você digita. Nunca escreva uma senha ou uma chave num comando, nem mesmo num `git config`: ela fica no histórico do terminal. A aula 11.1 mostra o jeito seguro de lidar com chaves."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Você editou um arquivo de notas e rodou `git diff`. Esta é a saída. O que você acha que mudou no arquivo?",
          "codigo": "--- a/notas.csv\n+++ b/notas.csv\n@@ -1,3 +1,3 @@\n aluno;nota\n-Ana;8\n+Ana;9\n Bruno;7",
          "linguagem": "texto",
          "resposta": "Só a nota da Ana: a linha `Ana;8` saiu (o `-`) e a linha `Ana;9` entrou no lugar (o `+`). As linhas com espaço na frente, `aluno;nota` e `Bruno;7`, não mudaram e estão ali para você se localizar. O diff mostra o quê; a mensagem do commit diria o porquê, como \"Corrige a nota da Ana: a prova foi recorrigida\".",
          "vivo": [
            [
              "Ana sai da lista",
              "--- a/notas.csv\n+++ b/notas.csv\n@@ -1,3 +1,2 @@\n aluno;nota\n-Ana;8\n Bruno;7"
            ],
            [
              "Entra a Carla",
              "--- a/notas.csv\n+++ b/notas.csv\n@@ -1,3 +1,4 @@\n aluno;nota\n Ana;8\n Bruno;7\n+Carla;9"
            ],
            [
              "Voltar ao original",
              "--- a/notas.csv\n+++ b/notas.csv\n@@ -1,3 +1,3 @@\n aluno;nota\n-Ana;8\n+Ana;9\n Bruno;7"
            ]
          ]
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você corrigiu a taxa do exercício 3, que estava ao ano e no enunciado é ao mês. Qual mensagem de commit diz o porquê?",
          "o": [
            [
              "Atualiza exercicios.md com a correção da taxa do exercício 3",
              "Diz o arquivo e o quê, e isso o diff já mostra. Falta o motivo: por que a taxa estava errada."
            ],
            [
              "Corrige o exercício 3: a taxa é mensal no enunciado",
              "Isso. Curta, diz o que foi feito e por quê. Daqui a um mês, você entende sem abrir o diff."
            ],
            [
              "Ajustes finais na lista de exercícios, versão revisada",
              "Não diz o que mudou nem por quê. No meio de vinte commits parecidos, você não acha este."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Rodei git init -b main e git add . nesta pasta. Antes do commit, conferi o git status e vi que entrou o arquivo .env. Tirei ele da lista com git rm --cached .env e coloquei .env no .gitignore. Pode seguir com o commit.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: sem commit, tirar o .env da lista e ignorá-lo resolve o problema",
              "Isso. Nada foi fotografado nem enviado, e o Claude conferiu o git status antes do commit, que era o passo certo."
            ],
            [
              "Está errada: o git rm --cached apaga o .env do disco, e a chave se perde",
              "Ele só tira da lista da próxima foto. O arquivo continua no disco, do jeito que estava."
            ],
            [
              "Está errada: a chave já vazou com o git add e precisa ser {{revogar|revogada}} agora",
              "O add só pôs o arquivo na lista, no seu PC. Sem commit e sem push, nada foi para o histórico nem saiu do computador."
            ]
          ],
          "c": 0
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Fiz o commit e o GitHub não mudou.\"",
            "O commit fica no PC. Falta o push. Depois dele, recarregue a página do repositório."
          ],
          [
            "\"Apareceu Author identity unknown.\"",
            "O Git não sabe quem você é. Rode os dois git config --global da mensagem, uma vez, e repita o commit."
          ],
          [
            "\"Apareceu src refspec main does not match any.\"",
            "Não existe branch main no seu PC, quase sempre porque o git init foi sem -b main e o caminho nasceu master. O laboratório quebrado mostra o conserto."
          ],
          [
            "\"O push foi recusado com rejected (fetch first).\"",
            "O repositório do GitHub tem um commit que o seu PC não tem, como um README criado no site. Traga com git pull --rebase origin main e mande de novo. Se ele parar com CONFLICT, git rebase --abort, nunca --skip."
          ],
          [
            "\"git add . é seguro, ele sabe o que é importante.\"",
            "Ele leva tudo o que mudou, inclusive o .env. Leia o git status antes, e monte o .gitignore antes do primeiro add."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "Quais comandos levam uma pasta que já existe até o GitHub, na primeira vez, e em que ordem?",
          "r": [
            "git init -b main, para a pasta virar repositório.",
            "git status e depois git add, conferindo a lista antes.",
            "git commit -m com a mensagem que diz o porquê.",
            "git remote add origin com o endereço, e git push -u origin main."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que uma boa mensagem de commit diz, e por quê?",
          "r": [
            "Diz o porquê da mudança, porque o quê o diff já mostra.",
            "Começa com uma linha curta, de até uns 50 caracteres.",
            "Serve para você e para o Claude acharem a mudança depois."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "Uma pasta sua, do PC até o GitHub",
          "lugar": "No PC, no PowerShell; dois passos no navegador",
          "tempo": "20 minutos",
          "antes": "Você vai transformar a cópia de uma pasta real sua em repositório e mandá-la para um repositório privado no GitHub. Escolha uma pasta sem segredos, como anotações ou estudos: nada de senha, chave ou dado de cliente. Precisa de uma conta no GitHub; entrar nela é com você. Os comandos são para colar no PowerShell. Se preferir que o Claude Code digite, cole cada comando com o pedido \"rode isto e me mostre a saída exata, sem resumir\"; se ele pedir permissão, aceite. A exceção são os dois comandos do nome e do e-mail, que fazem uma pergunta e por isso vão direto no PowerShell. Pelo app: no {{app-desktop|app desktop}} do Claude, aba Code, ambiente Local, use Open folder em C:\\Projetos\\estudos-git depois do passo 1 e peça cada comando do mesmo jeito; os do nome e do e-mail continuam no PowerShell, e o login no GitHub continua no navegador (caminho não testado). Pelo celular, não dá: os comandos rodam no seu PC. Os comandos do Git foram rodados de verdade em 02/11/2026, com as saídas mostradas na aula. Não testado: o envio ao GitHub e a janela de login, que exigem conta.",
          "naoTestado": "O envio ao GitHub e a página do repositório (passos 14, 16 e 17) exigem conta e login no GitHub. Os outros comandos foram rodados de verdade em 02/11/2026 (Git 2.54), os de nome e e-mail num PowerShell 5.1 limpo, com um arquivo de configuração de teste, e o push foi testado contra um repositório vazio no próprio PC.",
          "passos": [
            {
              "faz": "No {{explorador}}, copie uma pasta sua sem segredos para C:\\Projetos e dê à cópia o nome estudos-git. Se o caminho tiver \"OneDrive\", escolha outro lugar.",
              "espera": "A pasta C:\\Projetos\\estudos-git existe, com os mesmos arquivos da original. A original não muda em nada neste laboratório."
            },
            {
              "faz": "Na pasta da cópia, aberta no Explorador, clique com o botão direito num espaço vazio e escolha \"Abrir no Terminal\".",
              "espera": "Abre o mesmo Terminal da aula 2.2, com o PowerShell, mas já dentro da pasta: o caminho C:\\Projetos\\estudos-git aparece antes do cursor."
            },
            {
              "faz": "Confira se o Git está instalado:",
              "cola": "git --version",
              "saida": "git version 2.54.0.windows.1",
              "espera": "Uma linha com \"git version\" e um número. Se aparecer \"is not recognized\", veja o Se der errado."
            },
            {
              "faz": "Confira se o Git já sabe o seu nome:",
              "cola": "git config --global user.name",
              "espera": "Aparece o seu nome: os quatro próximos passos já estão feitos, então só marque cada um. Se não aparecer nada, faça os quatro."
            },
            {
              "faz": "Ensine o seu nome ao Git. Este comando faz uma pergunta, por isso cole no PowerShell, e não no Claude Code:",
              "cola": "git config --global user.name (Read-Host 'Seu nome')",
              "espera": "O PowerShell mostra \"Seu nome:\" e fica esperando, com o cursor piscando."
            },
            {
              "faz": "Escreva o seu nome, do jeito que quer que apareça nos commits, e aperte Enter.",
              "espera": "Nada aparece: o comando trabalha calado quando dá certo."
            },
            {
              "faz": "Agora o e-mail, também no PowerShell. Para não expor o seu, você pode usar o endereço no-reply da página Emails do GitHub:",
              "cola": "git config --global user.email (Read-Host 'Seu e-mail')",
              "espera": "O PowerShell mostra \"Seu e-mail:\" e fica esperando."
            },
            {
              "faz": "Escreva o e-mail e aperte Enter.",
              "espera": "Nada aparece. Para conferir, git config --global user.email mostra o e-mail gravado."
            },
            {
              "faz": "Transforme a pasta em repositório:",
              "cola": "git init -b main",
              "espera": "Uma linha que começa com \"Initialized empty Git repository in\" e termina com o caminho da pasta e .git/."
            },
            {
              "faz": "Olhe a mesa antes de qualquer add:",
              "cola": "git status",
              "espera": "A lista \"Untracked files\" com os seus arquivos, e subpastas com uma barra no fim. Leia nome por nome. Se aparecer algo com senha, chave ou dado de cliente, pare e faça a aula 3.6 antes de continuar."
            },
            {
              "faz": "O ponto leva tudo, sem escolher, e por isso a aula manda o Claude adicionar os arquivos pelo nome. Aqui é diferente: você mesmo leu a lista inteira no passo anterior, e nada ali é segredo. Só por isso, coloque tudo na lista da próxima foto com o ponto:",
              "cola": "git add .",
              "espera": "Em geral não aparece nada. Pode aparecer um aviso com \"LF will be replaced by CRLF\", que fala só do jeito de quebrar linhas e não é erro."
            },
            {
              "faz": "Confira a lista:",
              "cola": "git status",
              "espera": "\"Changes to be committed\" e uma linha \"new file:\" para cada arquivo. Se algo não devia estar ali, tire com git rm --cached seguido do nome."
            },
            {
              "faz": "Tire a primeira foto, com uma mensagem que diga o porquê:",
              "cola": "git commit -m \"Primeira versão dos estudos, antes de reorganizar as pastas\"",
              "espera": "Uma linha como \"[main (root-commit) 3cc6494] Primeira versão dos estudos, antes de reorganizar as pastas\", com outro nome de sete letras e números, e depois a contagem de arquivos e linhas."
            },
            {
              "faz": "No {{navegador}}, crie no GitHub um repositório privado chamado estudos-git, sem README, sem .gitignore e sem licença, como na aula 3.2.",
              "espera": "Abre uma página de configuração rápida com o endereço HTTPS do repositório, terminado em estudos-git.git."
            },
            {
              "faz": "Grave o endereço, trocando SeuNome pelo seu usuário do GitHub:",
              "cola": "git remote add origin https://github.com/SeuNome/estudos-git.git",
              "espera": "Nada aparece. Para conferir, git remote -v mostra o endereço duas vezes, com (fetch) e (push)."
            },
            {
              "faz": "Mande a primeira cópia:",
              "cola": "git push -u origin main",
              "espera": "Na primeira vez, abre uma janela para você entrar no GitHub; entrar é com você. Depois, linhas de progresso e, no fim, \"[new branch] main -> main\" e \"branch 'main' set up to track 'origin/main'.\" Este passo não foi testado com o GitHub."
            },
            {
              "faz": "Recarregue a página do repositório no navegador.",
              "espera": "Os seus arquivos aparecem, com a etiqueta Private ao lado do nome e o contador de 1 commit com a sua mensagem."
            }
          ],
          "errado": "se o git não for reconhecido, instale pela página git-scm.com/install/windows ou com `winget install --id Git.Git -e --source winget`, feche o terminal e abra outro. Se o commit responder `Author identity unknown`, faça os passos 5 a 8 e repita. Se o push responder `src refspec main does not match any`, o laboratório quebrado desta aula mostra a causa e o conserto. Se responder `[rejected]` com `(fetch first)`, o repositório foi criado com README: rode `git pull --rebase origin main` e repita o push. Se o pull parar com `CONFLICT`, rode `git rebase --abort`, que volta tudo como estava, e apague e crie de novo o repositório do site, vazio; nunca `git rebase --skip`, que joga fora o seu commit. Se aparecer `error: remote origin already exists.`, o endereço já foi gravado; `git remote -v` mostra qual, e `git remote set-url origin` seguido do endereço certo corrige."
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado",
          "texto": "Alguém rodou, nesta ordem, `git init`, `git add .`, `git commit -m \"Primeira versão do resumo\"` e `git remote add origin` com o endereço do GitHub. O commit deu certo. Mas o envio, `git push -u origin main`, respondeu com o erro abaixo, e nada chegou ao GitHub. Descubra o motivo antes de ver a causa.",
          "saida": "error: src refspec main does not match any\nerror: failed to push some refs to 'https://github.com/SeuNome/resumo.git'",
          "dica": "O erro não está no endereço nem na internet: o Git nem chegou a falar com o GitHub. Compare o primeiro comando da lista com o desta aula, e o nome que o push mandou enviar.",
          "resposta": "Faltou o `-b main` no `git init`. No Git para Windows, sem ele, o caminho principal nasce com o nome `master`, e a saída do commit já entregava: `[master (root-commit) 650f2a3] Primeira versão do resumo`. \"src refspec main does not match any\" quer dizer \"não existe aqui nada chamado main para enviar\". O conserto, testado: `git branch -M main` troca o nome do caminho para `main`, e o mesmo `git push -u origin main` passa, terminando com `branch 'main' set up to track 'origin/main'.`"
        }
      ],
      [
        "fontes",
        [
          [
            "Pro Git 1.6, Configuração inicial do Git (user.name e user.email)",
            "https://git-scm.com/book/pt-br/v2/Primeiros-Passos-Configura%c3%a7%c3%a3o-inicial-do-Git",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 2.1, Obtendo um repositório Git",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Obtendo-um-Reposit%c3%b3rio-Git",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 2.2, Gravando alterações no repositório (status, add, diff, commit)",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Gravando-Altera%c3%a7%c3%b5es-no-Reposit%c3%b3rio",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 2.5, Trabalhando com repositórios remotos",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Trabalhando-com-Reposit%c3%b3rios-Remotos",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 5.2, Contribuindo com um projeto (mensagem de commit: linha de até 50 caracteres e a motivação)",
            "https://git-scm.com/book/pt-br/v2/Git-Distribu%c3%addo-Contribuindo-com-um-Projeto",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Instalar o Git no Windows (versão 2.56.0 e comando do winget)",
            "https://git-scm.com/install/windows",
            "oficial",
            "02/11/2026"
          ],
          [
            "Adicionar código local ao GitHub (repositório vazio; git init -b main; git push -u origin main), GitHub",
            "https://docs.github.com/pt/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Definir o endereço de e-mail do commit (endereço no-reply), GitHub",
            "https://docs.github.com/pt/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Configuração avançada do Claude Code (Git opcional no Windows; Git Bash e PowerShell)",
            "https://code.claude.com/docs/pt/setup",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code, versão 2.1.299 (ultrareview deixa de sugerir git add .)",
            "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
            "oficial",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Olhe a lista antes do add, tire a foto com o porquê no verso e mande a segunda via com o push",
          "Isso. Status, add, commit com mensagem que explica, e push; o nome e o endereço, uma vez só."
        ],
        [
          "Use sempre git add . e deixe a mensagem do commit para o Claude, que conhece o projeto melhor que você",
          "O git add . leva tudo, inclusive segredos, e a mensagem precisa do porquê, que muitas vezes só você sabe."
        ],
        [
          "O git remote add já manda os arquivos para o GitHub, e o push só confirma o envio",
          "O remote add só grava o endereço. Quem manda as fotos é o push."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O primeiro commit respondeu \"Author identity unknown\". O que falta?",
        "o": [
          [
            "Fazer login no GitHub pelo navegador, com a sua conta e senha",
            "O commit é no PC e não fala com o GitHub. O que falta é o Git saber quem você é."
          ],
          [
            "Configurar o seu nome e o seu e-mail no Git com git config --global",
            "Isso. Uma vez por PC, e o commit passa a funcionar."
          ],
          [
            "Rodar git init de novo na mesma pasta, para recriar o repositório",
            "A pasta já é repositório. O problema é o carimbo com o seu nome, que ainda não existe."
          ]
        ],
        "c": 1
      },
      {
        "p": "Para que serve git remote add origin seguido de um endereço?",
        "o": [
          [
            "Para mandar os commits ao GitHub na hora, sem precisar do push",
            "Ele só grava o endereço. Quem manda é o push."
          ],
          [
            "Para criar um repositório vazio no site do GitHub",
            "O repositório é criado no site ou pelo gh. O remote add só anota onde ele está."
          ],
          [
            "Para gravar o endereço do repositório com o apelido origin",
            "Isso. Uma vez por repositório; depois, o push usa esse endereço."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre git diff e git status?",
        "O git status diz quais arquivos mudaram e em que lugar cada um está: só na pasta, na lista da próxima foto, ou já fotografado. O git diff mostra o que mudou dentro de cada arquivo, linha por linha, com - para o que saiu e + para o que entrou."
      ],
      [
        "Por que o push foi recusado?",
        "Se a mensagem diz rejected e fetch first, o GitHub tem um commit que o seu PC não tem, quase sempre um README criado no site. Rode git pull --rebase origin main e mande de novo; se ele parar com CONFLICT, git rebase --abort volta tudo como estava, e o git rebase --skip, que a mensagem também sugere, jogaria fora o seu commit. Se a mensagem diz src refspec main does not match any, o seu caminho se chama master: git branch -M main resolve."
      ],
      [
        "Preciso digitar tudo isso sempre?",
        "Não. O nome e o e-mail são uma vez por PC, e o init e o remote add, uma vez por repositório. No dia a dia ficam status, add, commit e push, e o Claude pode digitar; o seu trabalho é ler a lista do status e conferir a mensagem."
      ]
    ]
  },
  "3-4": {
    "tempo": 47,
    "video": "a3-4",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já quis testar uma ideia no site sem estragar a versão que funciona, e acabou com um \"index_teste2.html\" esquecido na pasta. Esta aula mostra a {{branch}}, o caminho paralelo do {{git|Git}}, o {{merge}}, que junta os caminhos, e o que fazer com calma quando os dois mexeram na mesma linha: o {{conflito}}.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 3.1 apresentou a branch como um caminho paralelo e mostrou o merge mais simples. Esta aula faz os três casos que você vai encontrar: o merge em que só um caminho andou, o merge em que os dois andaram sem se atrapalhar e o merge em que os dois mexeram no mesmo lugar. O terceiro é o conflito, e é ele que assusta. Depois desta aula, ele vira uma pergunta simples: qual das duas versões fica?"
      ],
      [
        "p",
        "Para você, isso importa por três motivos. Primeiro, testar sem medo: \"crie uma branch e experimente um layout novo\" deixa a versão que funciona intacta, e jogar a ideia fora custa um {{comando}}. Segundo, o {{claude-code|Claude Code}} trabalha com branches: quando ele abre um {{pull-request|pull request}}, como na aula 3.5, o trabalho dele está numa branch esperando o merge. Terceiro, conflitos acontecem mesmo sem ninguém errar: basta você corrigir uma palavra pelo site do {{github|GitHub}} enquanto o Claude muda a mesma linha no PC, ou duas {{sessao|sessões}} do Claude mexerem no mesmo arquivo."
      ],
      [
        "p",
        "E num conflito, a decisão é sua. O Claude sabe resolver a parte técnica, mas, se uma branch diz que o preço é R$ 59 e a outra diz R$ 39, qual fica é uma decisão de negócio. O Git, de propósito, não escolhe: ele para e mostra os dois lados."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao álbum da aula 3.1 e imagine **post-its com nomes** colados nas fotos. O post-it `main` marca a última foto da versão que funciona. Criar uma branch é colar um post-it novo, digamos `preco-promo`, na mesma foto em que está o `main`. Cada foto nova tirada nesse caminho faz o post-it dele andar para a foto nova; os outros post-its ficam onde estavam. Juntar os caminhos tem três desfechos. Se o `main` não andou, basta passar o post-it dele para a frente, até a foto mais nova. Se os dois andaram em partes diferentes da pasta, o Git monta uma foto nova que combina as duas. E se os dois mudaram o mesmo pedaço, o Git não inventa: põe as duas versões lado a lado na mesa e espera você escolher."
      ],
      [
        "quebra",
        "Num álbum de papel, as fotos ficam em fila; no Git, o álbum tem galhos, e a foto que junta dois caminhos tem duas fotos anteriores, e não uma. E o Git não compara pedaços do jeito que você compararia: se as duas mudanças só encostam uma na outra, em linhas vizinhas, ele também para e pergunta, mesmo sem nenhuma linha mudada pelos dois."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Criar uma branch e trabalhar nela"
      ],
      [
        "p",
        "Os exemplos desta aula usam uma página pequena, `index.html`, com um título, um preço e um botão. Com a `main` limpa, `git switch -c titulo-novo` cria a branch e já entra nela; a resposta real é `Switched to a new branch 'titulo-novo'`. Você muda o título e faz o {{commit}} normalmente. Repare no nome entre colchetes na saída real:"
      ],
      [
        "saida",
        "[titulo-novo c2a9452] Título novo, mais claro para iniciantes\n 1 file changed, 1 insertion(+), 1 deletion(-)"
      ],
      [
        "p",
        "O commit foi para `titulo-novo`, não para a `main`. O comando `git branch` lista os caminhos e marca com asterisco aquele em que você está:"
      ],
      [
        "saida",
        "  main\n* titulo-novo"
      ],
      [
        "p",
        "Agora a parte que surpreende quem começa: trocar de caminho muda os arquivos da pasta. Com `git switch main`, que responde `Switched to branch 'main'`, o `index.html` volta a ter o título antigo, na hora. O título novo não se perdeu: está guardado na foto da branch, e volta quando você voltar para ela. Por isso uma branch não é uma pasta: é um nome apontando para uma foto, e a pasta mostra a foto do caminho em que você está."
      ],
      [
        "p",
        "Por esse mesmo motivo, o Git não deixa trocar de caminho se a troca fosse apagar uma mudança que ainda não virou foto. Saída real, com uma edição sem commit no `index.html`:"
      ],
      [
        "saida",
        "error: Your local changes to the following files would be overwritten by checkout:\n\tindex.html\nPlease commit your changes or stash them before you switch branches.\nAborting"
      ],
      [
        "p",
        "Em português: \"as suas mudanças seriam sobrescritas; faça commit ou guarde antes de trocar\". A regra prática: commit antes de trocar de caminho. O \"guardar\" da mensagem é o `git stash`, que a aula 3.9 mostra."
      ],
      [
        "h3",
        "Caso 1: só a branch andou (fast-forward)"
      ],
      [
        "p",
        "De volta à `main`, que não mudou desde que a branch nasceu, `git merge titulo-novo` responde:"
      ],
      [
        "saida",
        "Updating d4ca061..c2a9452\nFast-forward\n index.html | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)"
      ],
      [
        "p",
        "É o {{fast-forward}}, o caso que a aula 3.1 já mostrou: o Git só passou o post-it `main` para a frente, sem criar foto nova. O {{historico|histórico}} continua uma linha reta. Com o trabalho junto, a branch pode sair: `git branch -d titulo-novo` responde `Deleted branch titulo-novo (was c2a9452).` Apagar o post-it não apaga a foto, que agora também é da `main`."
      ],
      [
        "h3",
        "Caso 2: os dois andaram, em lugares diferentes"
      ],
      [
        "p",
        "Agora uma página de cinco linhas: título, descrição, preço, uma frase e o botão. Na branch `botao-verde`, o botão ganha uma cor; enquanto isso, na `main`, a descrição muda. As duas mudanças estão longe uma da outra, com duas linhas intactas entre elas. O merge foi {{rodar|rodado}} com `git merge --no-edit botao-verde`, e a saída real foi:"
      ],
      [
        "saida",
        "Auto-merging index.html\nMerge made by the 'ort' strategy.\n index.html | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)"
      ],
      [
        "p",
        "\"Auto-merging\" é o Git juntando sozinho; \"Merge made by the 'ort' strategy\" diz que deu certo, e `ort` é só o nome do método que ele usa. Desta vez ele criou uma foto nova, a de junção, que tem duas fotos anteriores. O `git log --oneline --graph` desenha os galhos com barras:"
      ],
      [
        "saida",
        "*   6d383a0 Merge branch 'botao-verde'\n|\\  \n| * 27c8935 Botão verde, que chama mais atenção\n* | a66b78d Descrição mais concreta\n|/  \n* ca10cc2 Página inicial"
      ],
      [
        "p",
        "Leia de baixo para cima: a página inicial, depois os dois caminhos lado a lado, um em cada coluna, e no alto a foto que junta os dois. O arquivo final tem a descrição nova e o botão verde. E o `--no-edit`? Sem ele, o Git abre um editor de texto para você confirmar a frase da foto de junção, e quem nunca viu esse editor fica preso nele. Com `--no-edit`, ele aceita a frase padrão, `Merge branch 'botao-verde'`."
      ],
      [
        "h3",
        "Caso 3: os dois mudaram a mesma linha (conflito)"
      ],
      [
        "p",
        "Agora o preço. Na branch `preco-promo`, alguém pôs R$ 39, o preço de lançamento. Na `main`, alguém pôs R$ 59, um reajuste. Os dois mudaram a mesma linha. O merge responde, de verdade:"
      ],
      [
        "saida",
        "Auto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result."
      ],
      [
        "p",
        "Em português: \"conflito de conteúdo no index.html; a junção automática falhou; resolva os conflitos e depois faça o commit\". Nada se perdeu, e o merge ficou pela metade, esperando você. O `git status` confirma:"
      ],
      [
        "saida",
        "On branch main\nYou have unmerged paths.\n  (fix conflicts and run \"git commit\")\n  (use \"git merge --abort\" to abort the merge)\n\nUnmerged paths:\n  (use \"git add <file>...\" to mark resolution)\n\tboth modified:   index.html\n\nno changes added to commit (use \"git add\" and/or \"git commit -a\")"
      ],
      [
        "p",
        "\"both modified\" é \"os dois modificaram\". E o arquivo agora tem as duas versões, cercadas por três linhas que o Git escreveu:"
      ],
      [
        "saida",
        "<h1>Curso de Finanças</h1>\n<p>Aprenda juros compostos do zero, com exemplos.</p>\n<<<<<<< HEAD\n<p>Preço: R$ 59</p>\n=======\n<p>Preço: R$ 39</p>\n>>>>>>> preco-promo\n<p>Aulas curtas, no celular.</p>\n<button class=\"verde\">Comprar</button>"
      ],
      [
        "p",
        "Leia assim. Entre `<<<<<<< HEAD` e `=======` está a versão do caminho em que você está, a `main`; {{head|HEAD}} é o nome que o Git dá ao ponto em que você está agora. Entre `=======` e `>>>>>>> preco-promo` está a versão que está chegando, da branch que você mandou juntar. O resto do arquivo, acima e abaixo, juntou sem problema."
      ],
      [
        "h3",
        "Resolver: escolher, apagar as marcas, add e commit"
      ],
      [
        "p",
        "Resolver é editar o arquivo para ele ficar como deve ser: escolher uma versão, ou combinar as duas, e apagar as três linhas de marcação. Dá para fazer no Bloco de Notas, no {{vs-code|VS Code}}, que mostra botões para aceitar um lado ou o outro (aula 3.7), ou pedindo ao Claude: \"resolva o conflito do index.html mantendo o preço de lançamento, R$ 39, e apague as marcas\". Depois, `git add index.html` avisa ao Git que o conflito acabou, e o `git status` muda:"
      ],
      [
        "saida",
        "On branch main\nAll conflicts fixed but you are still merging.\n  (use \"git commit\" to conclude merge)\n\nChanges to be committed:\n\tmodified:   index.html"
      ],
      [
        "p",
        "\"Todos os conflitos resolvidos, mas você ainda está no meio do merge; faça o commit para concluir.\" O commit fecha a junção. Saída real:"
      ],
      [
        "saida",
        "[main 183d7c8] Junta preco-promo: fica R$ 39 até o fim do mês, depois volta o reajuste"
      ],
      [
        "p",
        "Repare que, diferente de um commit comum, a saída não traz a contagem de arquivos mudados. Depois dele, o `git log --oneline --graph` desenha os dois galhos se juntando nessa foto, como no caso 2. Atenção a um detalhe que derruba muita gente: o `git add` não confere se as marcas foram apagadas. Ele aceita o arquivo do jeito que estiver, inclusive com `<<<<<<<` no meio, e a página vai ao ar com as marcas. O laboratório quebrado desta aula é exatamente esse caso. Se você tentar o commit antes do `add`, o Git recusa, e essa recusa é real:"
      ],
      [
        "saida",
        "error: Committing is not possible because you have unmerged files.\nhint: Fix them up in the work tree, and then use 'git add/rm <file>'\nhint: as appropriate to mark resolution and make a commit.\nfatal: Exiting because of an unresolved conflict.\nU\tindex.html"
      ],
      [
        "h3",
        "Desistir no meio: git merge --abort"
      ],
      [
        "p",
        "Se o conflito apareceu e você não quer decidir agora, `git merge --abort` desfaz a tentativa de junção. Ele não responde nada; depois dele, o `git status` diz `nothing to commit, working tree clean`, e o arquivo volta a ser exatamente o da `main` antes do merge. A branch continua lá, com o trabalho dela, para você juntar outro dia."
      ],
      [
        "h3",
        "Linhas vizinhas também dão conflito"
      ],
      [
        "p",
        "No primeiro teste desta aula, numa página de três linhas, uma branch mudou o botão e a `main` acrescentou uma frase logo abaixo do botão. Nenhuma linha foi mudada pelos dois, e mesmo assim o merge deu `CONFLICT`. O arquivo ficou assim:"
      ],
      [
        "saida",
        "<h1>Finanças para quem começa do zero</h1>\n<p>Preço: R$ 49</p>\n<<<<<<< HEAD\n<button>Comprar</button>\n<p>Dúvidas: contato pelo site</p>\n=======\n<button class=\"verde\">Comprar</button>\n>>>>>>> botao-verde"
      ],
      [
        "p",
        "O Git compara blocos de linhas. Quando as duas mudanças encostam, ele não arrisca adivinhar a ordem e pergunta. A resposta aqui é combinar: o botão verde e, embaixo, a frase do contato. Quanto mais tempo uma branch fica separada, mais coisas encostam, e mais conflitos aparecem. Por isso a dica: branches curtas, juntadas logo."
      ],
      [
        "h3",
        "Branch e conflito com o Claude Code"
      ],
      [
        "p",
        "Tudo isso vale quando quem digita é o Claude. Um pedido seguro: \"crie uma branch chamada layout-novo, faça as mudanças nela e não faça merge sem me perguntar\". Para juntar: \"faça o merge da layout-novo na main; se der conflito, me mostre as duas versões de cada trecho e espere eu escolher\". Assim, a parte técnica fica com ele, e a decisão fica com você. Depois, confira com `git log --oneline --graph`."
      ],
      [
        "p",
        "Quando não usar branch: para uma mudança pequena e segura, como corrigir uma palavra, um commit direto na `main` basta. E, enquanto você aprende, uma branch de cada vez: cada branch aberta é mais um caminho para lembrar e mais chance de conflito."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Só o Git, como na aula 3.3. Branch e merge fazem parte dele.",
          "**Custa?** Nada. E criar uma branch não copia arquivos: é só um nome novo apontando para uma foto.",
          "**E se eu me perder no meio de um conflito?** `git merge --abort` volta tudo a como estava antes do merge.",
          "**Apagar uma branch apaga o trabalho?** O `git branch -d` só apaga branch já juntada. Se não foi, ele recusa com `error: the branch 'ideia-abandonada' is not fully merged` e ensina o `-D`, que apaga mesmo assim. Use o `-D` só quando quiser jogar a ideia fora.",
          "**Como sei em que branch estou?** A primeira linha do `git status` diz, como `On branch main`. O VS Code e o Claude Code também mostram."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: HEAD, a foto de junção e o rebase",
          "blocos": [
            [
              "p",
              "HEAD é um ponteiro para o ponteiro: ele aponta para a branch em que você está, e a branch aponta para a foto. Trocar de branch é mudar para onde o HEAD aponta. Por isso, no conflito, `HEAD` quer dizer \"a versão do caminho em que eu estou\"."
            ],
            [
              "p",
              "A foto de junção, o merge commit, é a única com dois pais. É por eles que o `git log --graph` sabe desenhar os galhos. No fast-forward não há foto de junção, e o histórico fica reto."
            ],
            [
              "p",
              "Existe outro jeito de juntar, o rebase, que regrava as fotos de uma branch como se ela tivesse começado depois. A aula 3.3 usou um rebase sem dizer o nome, no `git pull --rebase`. Ele deixa o histórico reto, mas muda o nome das fotos regravadas: nunca use em fotos que outras pessoas já baixaram."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Alguém publicou o index.html no meio de um conflito, sem resolver. O que você acha que a página mostra no {{navegador}}?",
          "codigo": "<h1>Curso de Finanças</h1>\n<<<<<<< HEAD\n<p>Preço: R$ 59</p>\n=======\n<p>Preço: R$ 39</p>\n>>>>>>> preco-promo\n<button>Comprar</button>",
          "linguagem": "html",
          "resposta": "O título, depois o texto `<<<<<<< HEAD` como se fosse uma frase, os dois preços, R$ 59 e R$ 39, um embaixo do outro, as linhas `=======` e `>>>>>>> preco-promo` também como texto, e o botão. O navegador não sabe que aquilo é marca de conflito: mostra tudo. Resolver é deixar uma linha de preço e apagar as três de marcação; use os botões para ver os dois desfechos.",
          "vivo": [
            [
              "Ficar com o da main",
              "<h1>Curso de Finanças</h1>\n<p>Preço: R$ 59</p>\n<button>Comprar</button>"
            ],
            [
              "Ficar com o da branch",
              "<h1>Curso de Finanças</h1>\n<p>Preço: R$ 39</p>\n<button>Comprar</button>"
            ],
            [
              "Voltar ao conflito",
              "<h1>Curso de Finanças</h1>\n<<<<<<< HEAD\n<p>Preço: R$ 59</p>\n=======\n<p>Preço: R$ 39</p>\n>>>>>>> preco-promo\n<button>Comprar</button>"
            ]
          ]
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você estava na main e rodou git merge preco-promo. O arquivo mostra <<<<<<< HEAD, a linha com R$ 59, =======, a linha com R$ 39 e >>>>>>> preco-promo. Qual é a linha da main?",
          "o": [
            [
              "A de R$ 59, a que fica entre <<<<<<< HEAD e =======",
              "Isso. HEAD é o caminho em que você está, a main. Depois do ======= vem a versão que está chegando."
            ],
            [
              "A de R$ 39, entre ======= e >>>>>>> preco-promo",
              "Essa é a versão que está chegando, da branch preco-promo, como diz o nome na última marca."
            ],
            [
              "Nenhuma: as duas linhas vêm da branch preco-promo",
              "Uma de cada: a de cima é a do caminho em que você está, a de baixo é a da branch que chega."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Resolvi o conflito do index.html com cuidado. Comparei as duas versões e, como você pediu, fiquei com R$ 39 e apaguei a linha de R$ 59. Para não arriscar, não mexi em mais nada do arquivo. Depois rodei git add e git commit, e o merge terminou.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: o git add e o commit conferem que o conflito acabou",
              "O git add aceita o arquivo do jeito que estiver. Ele não procura as marcas."
            ],
            [
              "Está errada: as três linhas de marcação ficaram no arquivo, e o Git não confere",
              "Isso. \"Não mexi em mais nada\" inclui <<<<<<<, ======= e >>>>>>>, que vão aparecer na página. O cuidado da resposta não muda o erro."
            ],
            [
              "Está errada: faltou o git merge --abort antes do commit, para fechar o merge",
              "O --abort cancela o merge inteiro. Quem fecha a junção é o commit, depois das marcas apagadas."
            ]
          ],
          "c": 1
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Branch é uma cópia da pasta.\"",
            "É um nome apontando para uma foto. A pasta mostra a foto do caminho em que você está, e muda quando você troca de caminho."
          ],
          [
            "\"O Git escolhe a versão mais nova no conflito.\"",
            "Ele não escolhe nada: mostra as duas e espera. Qual fica é decisão sua."
          ],
          [
            "\"Rodei git add, então o conflito está resolvido.\"",
            "O add não confere as marcas. Confira o arquivo antes: git diff --check acusa marcas esquecidas antes do add; depois dele, só git diff --cached --check acusa."
          ],
          [
            "\"Só dá conflito quando os dois mudam a mesma linha.\"",
            "Linhas vizinhas também dão, porque o Git compara blocos. Branches curtas evitam a maioria."
          ],
          [
            "\"Deu conflito, vou apagar tudo e baixar de novo.\"",
            "Não precisa. git merge --abort volta ao estado de antes, sem perder nada."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "O que significam as três linhas que o Git escreve num conflito?",
          "r": [
            "<<<<<<< HEAD abre a versão do caminho em que você está.",
            "======= separa as duas versões.",
            ">>>>>>> e o nome da branch fecham a versão que está chegando."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são os passos para resolver um conflito?",
          "r": [
            "Escolher a versão certa, ou combinar as duas, no arquivo.",
            "Apagar as três linhas de marcação.",
            "git add no arquivo e git commit para concluir.",
            "Se quiser desistir, git merge --abort volta tudo."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "Crie um conflito de propósito, e resolva",
          "lugar": "No PC, no PowerShell",
          "tempo": "20 minutos",
          "antes": "Você vai montar uma página de teste, criar uma branch com um preço de lançamento, mudar o preço na main para outro valor e juntar os dois: vai dar conflito, de propósito. Depois você resolve no Bloco de Notas e conclui o merge. Precisa do Git instalado e configurado, como na aula 3.3; nada aqui vai para o GitHub. Os comandos são para colar no {{powershell|PowerShell}}: abra o {{terminal|Terminal}} como na aula 2.2, com a tecla Windows junto com X, e escolha Terminal. Se preferir que o Claude Code digite, cole cada comando com \"rode isto e me mostre a saída exata\"; se ele pedir permissão, aceite. Pelo app: no {{app-desktop|app desktop}} do Claude, aba Code, ambiente Local, use Open folder em C:\\Projetos e peça cada comando do mesmo jeito; o Bloco de Notas é igual (caminho não testado). Pelo celular, não dá: o Git roda no seu PC. Este laboratório foi rodado de ponta a ponta no Windows PowerShell 5.1, em 02/11/2026; os nomes das fotos no seu PC vão ser outros.",
          "naoTestado": "O caminho pelo app desktop (aba Code, ambiente Local) não foi rodado: exige o app aberto numa sessão interativa. Os comandos do PowerShell foram rodados de ponta a ponta no Windows PowerShell 5.1 em 02/11/2026.",
          "passos": [
            {
              "faz": "Crie a pasta, a página e a primeira foto: cole o bloco inteiro.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\git-conflito | Out-Null\nSet-Location C:\\Projetos\\git-conflito\ngit init -b main\nSet-Content -Path index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Aprenda juros do zero.</p>', '<p>Preço: R$ 49</p>', '<p>Aulas curtas, no celular.</p>', '<button>Comprar</button>'\ngit add .\ngit commit -m 'Página inicial'",
              "espera": "Uma linha \"Initialized empty Git repository\" e outra que começa com \"[main (root-commit)\", com \"1 file changed, 5 insertions(+)\"."
            },
            {
              "faz": "Crie a branch do preço de lançamento:",
              "cola": "git switch -c preco-promo",
              "espera": "Switched to a new branch 'preco-promo'"
            },
            {
              "faz": "Mude o preço para R$ 39, nesta branch:",
              "cola": "Set-Content -Path index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Aprenda juros do zero.</p>', '<p>Preço: R$ 39</p>', '<p>Aulas curtas, no celular.</p>', '<button>Comprar</button>'",
              "espera": "Nada aparece. O arquivo foi reescrito com o preço novo."
            },
            {
              "faz": "Tire a foto:",
              "cola": "git commit -am 'Preço de lançamento: R$ 39'",
              "espera": "Uma linha que começa com \"[preco-promo\", e \"1 file changed, 1 insertion(+), 1 deletion(-)\"."
            },
            {
              "faz": "Volte para a main:",
              "cola": "git switch main",
              "espera": "Switched to branch 'main'. Se abrir o arquivo agora, o preço é R$ 49 de novo."
            },
            {
              "faz": "Mude o preço para R$ 59, na main:",
              "cola": "Set-Content -Path index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Aprenda juros do zero.</p>', '<p>Preço: R$ 59</p>', '<p>Aulas curtas, no celular.</p>', '<button>Comprar</button>'",
              "espera": "Nada aparece."
            },
            {
              "faz": "Tire a foto:",
              "cola": "git commit -am 'Reajuste: R$ 59'",
              "espera": "Uma linha que começa com \"[main\", e \"1 file changed, 1 insertion(+), 1 deletion(-)\"."
            },
            {
              "faz": "Junte a branch na main:",
              "cola": "git merge --no-edit preco-promo",
              "saida": "Auto-merging index.html\nCONFLICT (content): Merge conflict in index.html\nAutomatic merge failed; fix conflicts and then commit the result.",
              "espera": "Exatamente estas três linhas: o conflito que você criou de propósito."
            },
            {
              "faz": "Abra o arquivo no Bloco de Notas:",
              "cola": "notepad index.html",
              "espera": "O arquivo aparece com <<<<<<< HEAD, a linha de R$ 59, =======, a linha de R$ 39 e >>>>>>> preco-promo."
            },
            {
              "faz": "No Bloco de Notas, fique com o preço de lançamento: apague a linha de R$ 59 e as três linhas de marcação, as que começam com <<<<<<<, ======= e >>>>>>>.",
              "espera": "Sobram cinco linhas, com o preço R$ 39 e nenhuma marca."
            },
            {
              "faz": "Salve com Ctrl+S.",
              "espera": "O arquivo é gravado no disco, com o mesmo nome."
            },
            {
              "faz": "Feche o Bloco de Notas.",
              "espera": "A janela fecha, e você volta ao PowerShell."
            },
            {
              "faz": "Avise o Git de que o conflito acabou:",
              "cola": "git add index.html",
              "espera": "Nada aparece."
            },
            {
              "faz": "Confira:",
              "cola": "git status",
              "espera": "\"All conflicts fixed but you are still merging.\" e, embaixo, \"modified: index.html\"."
            },
            {
              "faz": "Conclua o merge:",
              "cola": "git commit -m 'Junta preco-promo: fica o preço de lançamento, R$ 39'",
              "espera": "Uma linha que começa com \"[main\" e a sua mensagem, sem contagem de arquivos."
            },
            {
              "faz": "Veja os galhos:",
              "cola": "git log --oneline --graph",
              "espera": "No alto, a sua foto de junção; abaixo, dois galhos lado a lado, o do reajuste e o do preço de lançamento; e embaixo, a página inicial."
            }
          ],
          "errado": "se o merge responder `Already up to date.`, as mudanças de preço não entraram nas fotos: confira com `Get-Content index.html` e repita os passos 3 a 7. Se o commit do passo 15 responder `error: Committing is not possible because you have unmerged files.`, faltou o `git add index.html` do passo 13. Se você se perdeu no meio, `git merge --abort` desfaz a tentativa de junção, e você pode repetir a partir do passo 8. Se o Bloco de Notas mostrar letras estranhas no lugar de \"ç\", feche sem salvar e peça ao Claude Code: \"resolva o conflito do index.html mantendo R$ 39 e apagando as marcas\"; se ele pedir permissão, aceite."
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado",
          "texto": "Depois de um merge com conflito, alguém editou o index.html, rodou `git add index.html` e `git commit -m \"Resolve o conflito\"`. O commit passou sem erro. Mas a página publicada mostra linhas estranhas. Abaixo, o arquivo como ficou depois do commit, do jeito que o `Get-Content index.html` mostra. Descubra o que deu errado antes de ver a causa.",
          "saida": "<h1>Curso de Finanças</h1>\n<p>Aprenda juros do zero.</p>\n<<<<<<< HEAD\n<p>Preço: R$ 59</p>\n=======\n<p>Preço: R$ 39</p>\n>>>>>>> preco-promo\n<p>Aulas curtas, no celular.</p>\n<button>Comprar</button>",
          "dica": "Os comandos deram certo; o problema está no conteúdo do index.html. Leia o arquivo de cima para baixo, como o navegador leria, e procure o que não deveria estar numa página.",
          "resposta": "As marcas de conflito ficaram no arquivo. O `git add` aceita o arquivo do jeito que estiver e não procura `<<<<<<<`, então o commit passou com elas. A linha 4, entre `<<<<<<< HEAD` e `=======`, é a versão da main, R$ 59; a linha 6, entre `=======` e `>>>>>>> preco-promo`, é a da branch, R$ 39. O conserto: decidir o preço, apagar a outra linha e as três marcas, e fazer `git add` e um commit novo. Para achar marcas esquecidas depois do commit, `git diff --check HEAD~1` compara a pasta com a foto anterior (o `HEAD` é a última foto, e o `HEAD~1`, a foto logo antes dela; a aula 3.9 volta a esse nome) e, no teste, respondeu `index.html:3: leftover conflict marker`, e o mesmo para as linhas 5 e 7."
        }
      ],
      [
        "h2",
        "Simulador"
      ],
      [
        "simulador",
        {
          "id": "branch",
          "titulo": "Dois caminhos",
          "casos": [
            "fast-forward",
            "sem-conflito",
            "conflito"
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Pro Git 3.2, Ramificação e mesclagem básicas (conflitos e marcas)",
            "https://git-scm.com/book/pt-br/v2/Ramifica%c3%a7%c3%a3o-Branching-no-Git-Ramifica%c3%a7%c3%a3o-Branching-e-Mesclagem-Merging-B%c3%a1sicas",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 3.1, Branches em poucas palavras (branch é um ponteiro; HEAD)",
            "https://git-scm.com/book/pt-br/v2/Ramifica%c3%a7%c3%a3o-Branching-no-Git-Branches-em-Poucas-Palavras",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 3.3, Gerenciamento de branches (git branch -d e -D)",
            "https://git-scm.com/book/pt-br/v2/Ramifica%c3%a7%c3%a3o-Branching-no-Git-Gerenciamento-de-Branches",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Resolver conflitos de merge no VS Code (Accept Current, Accept Incoming, Accept Both), Microsoft",
            "https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts",
            "oficial",
            "02/11/2026"
          ],
          [
            "Olá, Mundo (o GitHub impede a mesclagem enquanto há conflito), GitHub",
            "https://docs.github.com/pt/get-started/using-github/hello-world",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Learn Git Branching (exercícios visuais de branch e merge)",
            "https://learngitbranching.js.org/?locale=pt_BR",
            "comunidade",
            "02/11/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Branch é uma cópia da pasta, e o Git resolve sozinho quando duas cópias mudam o mesmo arquivo",
          "Branch é um nome apontando para uma foto. E, quando os dois mexem no mesmo lugar, o Git para e pergunta."
        ],
        [
          "Conflito é sinal de erro grave: o melhor é apagar a branch e começar de novo do zero",
          "Conflito é normal e tem saída simples: escolher, apagar as marcas, add e commit, ou git merge --abort."
        ],
        [
          "Branch testa sem medo; o merge junta, e no conflito você escolhe e apaga as marcas",
          "Isso. O Git junta o que dá e, no que não dá, mostra os dois lados para você decidir."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Você criou uma branch, fez um commit nela e voltou para a main, que não mudou. O que acontece no git merge?",
        "o": [
          [
            "Fast-forward: o nome main só avança até o commit da branch",
            "Isso. Sem foto de junção, e o histórico continua reto."
          ],
          [
            "Um conflito, porque o arquivo mudou na branch e não na main",
            "Conflito exige mudanças nos dois caminhos. Aqui só a branch andou."
          ],
          [
            "O Git cria uma nova foto de junção, com dois pais",
            "A foto de junção só aparece quando os dois caminhos andaram."
          ]
        ],
        "c": 0
      },
      {
        "p": "No meio de um conflito, você quer desistir e voltar ao estado de antes do merge. Que comando usa?",
        "o": [
          [
            "git branch -d, que apaga a branch do conflito",
            "Esse comando apaga a branch, e só se ela já tiver sido juntada. Não desfaz o merge pela metade."
          ],
          [
            "git merge --abort, que cancela a junção",
            "Isso. Desfaz a tentativa de junção, e a branch continua lá para outro dia."
          ],
          [
            "git commit, que fecha o merge do jeito que está",
            "O Git recusa o commit enquanto há arquivo em conflito sem git add, e fechar com marcas seria pior."
          ]
        ],
        "c": 1
      }
    ],
    "tutor": [
      [
        "O que é HEAD?",
        "É o nome que o Git dá ao ponto em que você está agora: a branch atual e a última foto dela. Num conflito, a versão depois de <<<<<<< HEAD é a do caminho em que você está."
      ],
      [
        "Por que deu conflito se ninguém mudou a mesma linha?",
        "Porque o Git compara blocos: mudanças em linhas vizinhas também viram conflito, e ele prefere perguntar a adivinhar a ordem. Combine as duas versões, apague as marcas, add e commit."
      ],
      [
        "Posso pedir ao Claude para resolver?",
        "Pode, e ele resolve a parte técnica. Mas diga qual versão fica, ou peça que ele mostre os dois lados e espere você escolher. Depois, confira o arquivo: nenhuma linha com <<<<<<<, ======= ou >>>>>>> pode sobrar."
      ]
    ]
  },
  "3-5": {
    "tempo": 37,
    "video": "a3-5",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O {{claude-code|Claude Code}} respondeu \"abri um {{pull-request|pull request}}\", com um link, e você não soube o que conferir naquela página; ou você achou um erro nele e ficou na dúvida se já era conhecido. Esta aula ensina a ler um pull request sem ler {{codigo|código}} e a reconhecer uma {{issues|issue}} que tem o necessário.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Um pull request é um pedido para juntar uma {{branch}} na `main`, com espaço para conferir antes. Você vai receber pedidos assim do Claude: nas {{sessao-na-nuvem|sessões na nuvem}}, que a aula 3.8 apresenta, ele trabalha numa branch e você cria o pull request quando a sessão termina; no PC, com o programa `gh` instalado, ele mesmo abre o pedido; e, mais adiante no curso, ele pode revisar pull requests sozinho pelo {{github|GitHub}} Actions. Em todos os casos, a pergunta é a mesma: aceito ou não? Para responder sem ler código, você precisa saber onde olhar."
      ],
      [
        "p",
        "A issue é o outro lado. Quando o Claude Code, uma {{skill}} ou uma {{biblioteca}} dá erro, há grande chance de outra pessoa já ter visto o mesmo erro e relatado. Procurar antes economiza horas: às vezes a issue já tem a solução, ou diz que a versão nova corrigiu. E, se ninguém relatou, saber escrever um relato com o mínimo necessário faz o erro ser corrigido mais depressa. Esse jeito de relatar volta nas aulas 7.18, 9.4 e 13.2, e serve também para quando você pede ajuda ao próprio Claude."
      ],
      [
        "p",
        "As duas coisas acontecem no site do {{github|GitHub}}, pelo {{navegador}}, e para ler projetos públicos você nem precisa de conta. O laboratório usa o {{repositorio|repositório}} público do Claude Code, onde a Anthropic recebe os relatos de erro."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa minuta de contrato com o controle de alterações do Word ligado. O **pull request** é a minuta: o texto atual com as mudanças propostas marcadas, o que sai riscado em vermelho e o que entra em verde. Os **comentários na margem** são a revisão: \"por que este valor?\", \"troque esta palavra\". Os **{{checks}}** são as conferências automáticas que {{rodar|rodam}} sozinhas, como um corretor que confere a ortografia antes de você ler. E o **{{merge}}** é aceitar todas as alterações: a partir daí, a minuta vira o contrato. A **issue** é a nota de pendência presa na capa da pasta: \"a cláusula 3 está com o valor errado\". Ela existe antes de alguém mexer no texto, e às vezes é ela que dá origem à minuta."
      ],
      [
        "quebra",
        "A minuta do Word fica parada até alguém mexer; o pull request é vivo. Cada {{commit}} novo na branch entra no pedido na hora, e os checks rodam de novo. Os checks não são pessoas lendo com atenção: são programas que conferem só o que foram programados para conferir. E aceitar a revisão não é o mesmo que aceitar a minuta: no GitHub, aprovar e juntar são dois botões diferentes."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "A página de um pull request"
      ],
      [
        "p",
        "Todo pull request tem um número, como `#7`, e um estado, numa etiqueta colorida logo abaixo do título: **Open**, em verde, esperando decisão; **Draft**, em cinza, um rascunho, que não pode ser juntado; **Merged**, em roxo, já juntado; **Closed**, em vermelho, recusado ou abandonado. Uma frase diz quem quer juntar quantos commits, de que branch, em qual: algo como \"quer juntar 1 commit na main a partir de preco-promo\"."
      ],
      [
        "p",
        "Abaixo, as abas. A documentação do GitHub em português chama de **Conversa**, **Commits**, **Verificações** e **Arquivos alterados**; no site, costumam aparecer em inglês: Conversation, Commits, Checks e Files changed. A Conversa reúne a descrição, a linha do tempo, os comentários e as revisões. Commits lista as fotos da branch. Verificações mostra os testes automáticos. Arquivos alterados mostra as diferenças que você confere."
      ],
      [
        "h3",
        "Primeiro, a descrição: o que o Claude diz que fez"
      ],
      [
        "p",
        "Comece pela aba Conversa, pela descrição. Um bom pull request do Claude diz o que mudou, por quê, como ele conferiu e o que não conseguiu confirmar. Compare com o que você pediu. Você pediu \"troque o preço para R$ 39\" e a descrição fala em \"refatorei o layout e troquei o preço\"? Refatorar é reorganizar o código por dentro, em tese sem mudar o que a página faz; só que esse \"refatorei o layout\" não foi pedido, pode ter mexido em arquivos que você nem citou, e é ali que mora o risco. Se a descrição for vaga, peça: \"reescreva a descrição do pull request dizendo arquivo por arquivo o que mudou e por quê\"."
      ],
      [
        "h3",
        "Depois, Arquivos alterados: o diff no site"
      ],
      [
        "p",
        "É a mesma comparação da aula 3.3, o {{diff}}, com cores: linhas em vermelho, com `-`, saem; linhas em verde, com `+`, entram. No topo aparece quantos arquivos mudaram e quantas linhas entraram e saíram. Pelo ícone de engrenagem, dá para ver as versões lado a lado em vez de uma embaixo da outra, e a caixa **Viewed**, \"Visualizado\", no cabeçalho de cada arquivo, recolhe o que você já conferiu."
      ],
      [
        "p",
        "O que dá para julgar sem ler código. **Quais arquivos**: você pediu para mudar a página e apareceu um `.env` ou um arquivo de configuração? Pare. **Quanto mudou**: trocar um preço muda uma linha; se mudaram 40 arquivos e 900 linhas, algo foi além do pedido. **O que foi apagado**: arquivos inteiros em vermelho merecem pergunta. **O que dá para ler**: textos da página, preços, títulos e nomes aparecem como você os conhece. Para o resto, peça ao Claude: \"explique em uma linha cada arquivo deste pull request\"."
      ],
      [
        "h3",
        "Comentar e revisar"
      ],
      [
        "p",
        "Passando o mouse sobre o número de uma linha, aparece um ícone azul de comentário: você escreve ali, preso àquela linha. O primeiro comentário pode começar uma revisão, com **Start a review**, \"Iniciar uma revisão\"; os comentários ficam pendentes, só para você, até o envio. No fim, o botão **Review changes**, \"Revisar alterações\", pede um resumo e um tipo de revisão: **Comment**, um comentário geral; **Approve**, \"Aprovar\"; ou **Request changes**, \"Solicitar alterações\", que diz que os pontos precisam ser resolvidos antes do merge. Depois, **Submit review**."
      ],
      [
        "p",
        "Por que isso importa para você: com o `gh` instalado e com login, o Claude lê os comentários de revisão sozinho, segundo a documentação de boas práticas. Um comentário preso à linha certa, como \"aqui o preço tem que ser R$ 39, não R$ 49\", vira uma instrução precisa para a próxima rodada: \"leia os comentários do pull request 7 e corrija\"."
      ],
      [
        "h3",
        "Verificações: os checks"
      ],
      [
        "p",
        "Os checks são programas que rodam sozinhos a cada mudança do pull request: testes, montagem do site, conferências de estilo. Cada um termina com um sinal: verde, quando passou; vermelho, quando falhou; amarelo, enquanto roda. Se um check for obrigatório numa branch protegida, ele precisa passar antes do merge; um check que falhou e não é obrigatório não bloqueia, mas quase sempre merece uma olhada no detalhe. Num repositório novo seu, é normal não haver check nenhum, e a aba fica vazia."
      ],
      [
        "p",
        "Cuidado com o verde. Ele diz que os testes que existem passaram, não que o pedido foi atendido. Sem teste nenhum, tudo passa. Se um check falhar, abra o detalhe e peça ao Claude: \"leia o erro do check que falhou e me explique antes de corrigir\". As sessões na nuvem do Claude Code ainda oferecem um recurso que observa o pull request e corrige falhas de check e comentários de revisão conforme chegam."
      ],
      [
        "h3",
        "Juntar: o merge pelo site"
      ],
      [
        "p",
        "Com tudo conferido, o botão **Merge pull request**, \"Mesclar solicitação de pull\", e depois **Confirm merge**, \"Confirmar mesclagem\". O pedido fica roxo, Merged, e aparece a opção de apagar a branch, que já não faz falta. Se as duas branches mexeram na mesma linha, o GitHub impede o merge até o {{conflito}} ser resolvido, como na aula 3.4. Depois do merge, a `main` do GitHub mudou, mas a do seu PC, não: um `git pull` traz a novidade."
      ],
      [
        "h3",
        "Antes de relatar: procure a issue"
      ],
      [
        "p",
        "A aba **Issues** tem uma barra de busca que já vem com um filtro, `is:issue state:open`, ou seja, \"issues abertas\". Você acrescenta filtros e palavras. Os {{rotulo|rótulos}} são etiquetas que os mantenedores põem nas issues, e o repositório do Claude Code tem dezenas, como `bug`, `platform:windows`, `area:vscode`, `duplicate`, `needs-info` e `has repro`. Uma busca como `is:issue state:open label:bug label:platform:windows` mostra só os erros abertos marcados como Windows; em 02/11/2026, eram cerca de 2,8 mil. Acrescentando uma palavra do seu erro, como {{powershell|`PowerShell`}}, a lista encolhe para o que interessa."
      ],
      [
        "p",
        "Leia os títulos, abra os mais parecidos e confira três coisas: se a versão relatada é parecida com a sua, se alguém achou um jeito de contornar, e se a issue foi marcada como duplicada de outra. Troque `state:open` por `state:closed` para ver as fechadas: às vezes o erro já foi corrigido numa versão nova, e a solução é atualizar. Achou a sua? Não comente \"+1\": use a reação de polegar para cima, que conta sem encher a conversa de avisos, e comente só se tiver informação nova."
      ],
      [
        "h3",
        "O relato mínimo: o que uma issue precisa ter"
      ],
      [
        "p",
        "O próprio repositório do Claude Code dá o roteiro. O modelo de relato de erro dele pede, antes de tudo, três confirmações: que você procurou nas issues existentes, que o relato trata de um erro só e que você está na versão mais recente. Depois, os campos obrigatórios: o que está errado, o que deveria acontecer, os passos para reproduzir, se o erro é uma regressão, ou seja, algo que funcionava antes, a versão do Claude Code (o modelo manda rodar `claude --version` e colar a saída), a plataforma de {{api|API}}, o sistema operacional e o {{terminal}}. Mensagens de erro, o {{modelo|modelo de IA}} usado e a última versão que funcionava são opcionais, mas ajudam muito."
      ],
      [
        "p",
        "Tudo isso cabe em quatro perguntas, que valem para qualquer projeto: **o que você fez**, em passos que outra pessoa consiga repetir; **o que esperava** que acontecesse; **o que aconteceu**, com a mensagem de erro exata, copiada como texto; e **em que ambiente**: versão do programa, sistema e terminal. E o relato mínimo também é o que **não** entra: a história de como você chegou ali, opiniões sobre o produto, a tela inteira num print quando o texto do erro basta, e, acima de tudo, chave, senha, e-mail ou caminho com o seu nome. Uma issue em repositório público fica visível para qualquer pessoa."
      ],
      [
        "p",
        "Dentro do Claude Code, existe outro caminho: o {{comando}} `/bug` relata um erro direto para a Anthropic, com o contexto da sessão, e mostra uma tela de consentimento para você escolher quanto da conversa vai junto antes de enviar. A issue no GitHub é pública e serve para ver e discutir; o `/bug` é privado e vai para a equipe. E pergunta de uso, como \"como faço tal coisa\", não é issue: o repositório do Claude Code aponta para a documentação e para a comunidade no Discord."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso de conta?** Para ler pull requests e issues de projetos públicos, não. Para comentar, revisar, abrir issue ou fazer merge, sim.",
          "**Custa?** Nada. Pull requests e issues fazem parte do GitHub gratuito.",
          "**E se eu fizer merge de algo errado?** A `main` muda, mas nada se perde: a aula 3.9 ensina a desfazer um commit com outro, o {{git-revert|revert}}. E o pull request continua lá, com o histórico da conversa.",
          "**Preciso entender o código para aprovar?** Não para tudo. Arquivos, tamanho, apagados e textos visíveis você julga. O que exige ler código, peça ao Claude para explicar, ou a um segundo leitor, como a aula 16.6 ensina.",
          "**Posso abrir issue em português?** Num projeto brasileiro, sim. No repositório do Claude Code, os relatos são em inglês; peça ao Claude para traduzir o seu relato, e confira se a mensagem de erro ficou exatamente igual."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: rascunho, número compartilhado e a aba Descobertas",
          "blocos": [
            [
              "p",
              "Um pull request em rascunho, Draft, serve para mostrar trabalho em andamento sem pedir revisão; ele não pode ser juntado até alguém marcar como pronto para revisão. O Claude pode abrir assim, se você pedir \"abra como rascunho\"."
            ],
            [
              "p",
              "Issues e pull requests dividem a mesma numeração: se a última issue é a #5, o próximo pull request vira #6. E escrever `#5` num comentário vira um link para a issue 5. Para o pull request fechar a issue quando for juntado, ele tem de ir para a branch padrão, a `main`, e o GitHub precisa saber qual issue é, de um destes três jeitos, segundo a documentação: uma palavra-chave em inglês antes do número na descrição, como `Closes #5`, `Fixes #5` ou `Resolves #5`; a mesma palavra-chave na mensagem de um dos commits; ou à mão, no item Development (Desenvolvimento) da barra da direita. Escrever \"fecha a #5\", em português, só cria o link."
            ],
            [
              "p",
              "A documentação do GitHub lista ainda uma quinta aba, Descobertas, com resultados automáticos de análise de código."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Você pediu ao Claude \"troque o preço para R$ 39\" e ele abriu um pull request. Esta é a aba Arquivos alterados. O que você acha que este pedido muda, e você aceitaria?",
          "codigo": "index.html\n <h1>Curso de Finanças</h1>\n-<p>Preço: R$ 49</p>\n+<p>Preço: R$ 39</p>\n <button>Comprar</button>",
          "linguagem": "texto",
          "resposta": "Um arquivo só, o index.html, e uma linha: o preço de R$ 49 sai (vermelho, `-`) e o de R$ 39 entra (verde, `+`). As linhas com espaço na frente não mudaram. É exatamente o pedido, então pode aceitar. Agora toque em \"Mostrar o segundo arquivo\" e veja o caso que não pode ser aceito.",
          "vivo": [
            [
              "Mostrar o segundo arquivo",
              "index.html\n <h1>Curso de Finanças</h1>\n-<p>Preço: R$ 49</p>\n+<p>Preço: R$ 39</p>\n <button>Comprar</button>\n\n.env\n+ANTHROPIC_API_KEY=chave-falsa-do-exemplo"
            ],
            [
              "Voltar ao original",
              "index.html\n <h1>Curso de Finanças</h1>\n-<p>Preço: R$ 49</p>\n+<p>Preço: R$ 39</p>\n <button>Comprar</button>"
            ]
          ]
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Esta issue tem o necessário? Título: \"[BUG] Claude Code trava\". Descrição: \"Desde ontem o Claude Code não funciona direito no meu PC. Já reinstalei duas vezes e nada. Muito frustrante, preciso disso para o trabalho!\"",
          "o": [
            [
              "Tem o necessário: diz o que acontece e que reinstalar não resolveu",
              "\"Não funciona direito\" não diz o que acontece. Quem lê não consegue repetir nem procurar o erro."
            ],
            [
              "Falta o principal: passos, o esperado, o erro exato, versão e sistema",
              "Isso. Sem esses quatro pontos, ninguém reproduz. A frustração e o \"preciso para o trabalho\" podem sair."
            ],
            [
              "Falta só um print da tela inteira, que mostra tudo sem texto",
              "Um print não diz o que você fez antes, nem a versão. E o texto do erro, copiado, vale mais que a imagem."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Pronto: pull request #7 aberto. Muda uma linha do index.html, R$ 49 vira R$ 39, e os checks passaram. Não fiz o merge.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: abrir o pull request já muda a main, porque ele é o envio",
              "Abrir o pedido não junta nada. A main só muda no merge."
            ],
            [
              "Está errada: com os checks verdes, o GitHub já faz o merge sozinho",
              "O GitHub não junta sozinho por causa de checks verdes. Alguém precisa clicar em Merge pull request."
            ],
            [
              "Está correta: sem merge, a main não mudou, e dá para conferir",
              "Isso. A main continua com R$ 49 até o merge. Confira a aba Arquivos alterados e decida."
            ]
          ],
          "c": 2
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"O Claude abriu o pull request, então já está no ar.\"",
            "O pull request é só o pedido. A main, e o site que sai dela, só mudam depois do merge."
          ],
          [
            "\"Checks verdes querem dizer que está certo.\"",
            "Querem dizer que os testes que existem passaram. Sem teste nenhum, tudo passa. Confira os arquivos e o tamanho da mudança."
          ],
          [
            "\"Vou comentar +1 na issue para dar força.\"",
            "Use a reação de polegar para cima. Comente só se tiver informação nova, como outra versão ou outro sistema com o mesmo erro."
          ],
          [
            "\"Colei o log inteiro e o meu arquivo de configuração na issue.\"",
            "Issue pública fica visível para todos. Corte para o trecho do erro e tire chaves, e-mails e caminhos com o seu nome."
          ],
          [
            "\"Achei uma issue fechada igual à minha, então não tem solução.\"",
            "Fechada muitas vezes quer dizer corrigida numa versão nova. Leia o fim da conversa e confira a sua versão com claude --version."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "O que cada aba de um pull request mostra?",
          "r": [
            "Conversa: a descrição, os comentários e as revisões.",
            "Commits: as fotos da branch.",
            "Verificações: os testes automáticos, verde ou vermelho.",
            "Arquivos alterados: o diff, o que sai e o que entra."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são as quatro perguntas de um relato de erro mínimo?",
          "r": [
            "O que você fez, em passos que outra pessoa repete.",
            "O que esperava que acontecesse.",
            "O que aconteceu, com a mensagem de erro exata.",
            "Em que ambiente: versão, sistema e terminal."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "Procure uma issue no repositório do Claude Code",
          "lugar": "No navegador, no PC ou no celular",
          "tempo": "15 minutos",
          "antes": "Você vai procurar erros conhecidos no repositório público do Claude Code, ler uma issue com o olhar desta aula e, no fim, abrir um pull request de outra pessoa só para reconhecer as abas. Não precisa de conta, e nada é alterado: é só leitura. Parte conferida: em 02/11/2026, a busca, os rótulos e a contagem foram conferidos sem login pela API pública do GitHub. Não testado: os cliques, que não foram feitos num navegador; os nomes podem aparecer em inglês.",
          "naoTestado": "Os cliques não foram feitos num navegador. As páginas, os rótulos (bug, platform:windows) e a busca foram conferidos sem login, pela API pública do GitHub, em 02/11/2026.",
          "passos": [
            {
              "faz": "Abra github.com/anthropics/claude-code/issues no navegador.",
              "espera": "A lista de issues abertas, com uma barra de busca que já mostra is:issue state:open."
            },
            {
              "faz": "Clique na barra de busca e apague o que está escrito nela.",
              "espera": "A barra de busca fica vazia."
            },
            {
              "faz": "Cole na barra o filtro abaixo:",
              "cola": "is:issue state:open label:bug label:platform:windows",
              "espera": "O filtro aparece inteiro na barra, com os dois-pontos."
            },
            {
              "faz": "Aperte Enter.",
              "espera": "Só issues abertas com os rótulos bug e platform:windows. Em 02/11/2026 eram cerca de 2,8 mil."
            },
            {
              "faz": "Clique no fim do filtro, dê um espaço e escreva PowerShell.",
              "espera": "A barra mostra o filtro com a palavra PowerShell no fim."
            },
            {
              "faz": "Aperte Enter.",
              "espera": "A lista encolhe para os erros que citam o PowerShell."
            },
            {
              "faz": "Abra uma issue da lista, a que parecer mais clara pelo título.",
              "espera": "A página da issue, com o relato no topo, os rótulos na lateral e os comentários embaixo."
            },
            {
              "faz": "Procure no relato as quatro perguntas desta aula: o que a pessoa fez, o que esperava, o que aconteceu e em que ambiente.",
              "espera": "Num relato feito pelo modelo do repositório, você encontra seções como What's Wrong?, What Should Happen?, Steps to Reproduce e Claude Code Version."
            },
            {
              "faz": "Olhe os rótulos da issue, na lateral, em Labels, e procure needs-info ou needs-repro.",
              "espera": "Você vê a lista de rótulos da issue. Se aparece needs-info ou needs-repro, os mantenedores pediram mais dados: compare com o ponto que você achou que faltava no passo anterior. Se não aparece, ninguém marcou falta de informação."
            },
            {
              "faz": "Volte à lista de issues.",
              "espera": "A lista de antes, com o seu filtro ainda na barra de busca."
            },
            {
              "faz": "Na barra de busca, troque state:open por state:closed.",
              "espera": "O filtro passa a dizer state:closed."
            },
            {
              "faz": "Aperte Enter.",
              "espera": "Aparecem as issues fechadas, muitas corrigidas em versões novas."
            },
            {
              "faz": "Clique na aba Pull requests do mesmo repositório.",
              "espera": "A lista de pull requests abertos, cada um com título, número e autor."
            },
            {
              "faz": "Abra qualquer pull request da lista.",
              "espera": "A página do pull request, com o estado colorido abaixo do título e as abas Conversation, Commits, Checks e Files changed."
            },
            {
              "faz": "Clique na aba Files changed.",
              "espera": "O diff em vermelho e verde, com a contagem de arquivos e linhas no topo. Só olhe: sem conta, você não consegue comentar nem aprovar."
            }
          ],
          "errado": "se a busca não devolver nada, confira se o filtro foi colado inteiro, com os dois-pontos e sem espaço depois deles. Se o GitHub pedir login para ver a página, volte ao endereço do passo 1: a leitura de repositório público não exige conta. Se a página estiver em inglês e você se perder, use a tradução do navegador, mas copie mensagens de erro sempre do original."
        }
      ],
      [
        "fontes",
        [
          [
            "Solicitações de pull (abas Conversa, Commits, Verificações e Arquivos alterados; rascunho), GitHub",
            "https://docs.github.com/pt/pull-requests/reference/pull-requests",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Vincular uma pull request a um problema (palavras-chave close, fix e resolve; só na branch padrão), GitHub",
            "https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Revisar alterações propostas em um pull request, GitHub",
            "https://docs.github.com/pt/pull-requests/how-tos/review-pull-requests/reviewing-proposed-changes-in-a-pull-request",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Verificações de status (checks obrigatórios e sucesso ou falha), GitHub",
            "https://docs.github.com/pt/pull-requests/reference/status-checks",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Sobre problemas (issues), GitHub",
            "https://docs.github.com/pt/issues/tracking-your-work-with-issues/learning-about-issues/about-issues",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Filtrando e pesquisando problemas e pull requests (is:issue, state:open, label:), GitHub",
            "https://docs.github.com/pt/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Issues do Claude Code (modelo de relato de erro e rótulos), Anthropic",
            "https://github.com/anthropics/claude-code/issues",
            "oficial",
            "02/11/2026"
          ],
          [
            "Comandos do Claude Code (/bug e /feedback, com tela de consentimento), Anthropic",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Boas práticas do Claude Code (com o gh, o Claude abre pull requests e lê comentários de revisão), Anthropic",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Claude Code na nuvem (criar pull request ao fim da sessão; corrigir falhas de check), Anthropic",
            "https://code.claude.com/docs/pt/claude-code-on-the-web",
            "oficial",
            "02/11/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Confira descrição, arquivos e checks antes do merge, e procure a issue antes de relatar",
          "Isso. E, se precisar relatar: o que fez, o que esperava, o que aconteceu e em que ambiente."
        ],
        [
          "Checks verdes bastam para aprovar, e uma boa issue conta a história toda, com todos os detalhes",
          "Checks só conferem o que foram programados para conferir. E a issue boa corta o que não importa."
        ],
        [
          "O pull request já muda a main, então o merge serve só para registrar o que foi feito",
          "É o contrário: a main só muda no merge. O pull request é o pedido, com espaço para conferir."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Num pull request do Claude, em qual aba você vê exatamente quais linhas saem e quais entram?",
        "o": [
          [
            "Commits, com as fotos da branch",
            "Commits lista as fotos da branch, com as mensagens. As linhas aparecem em Arquivos alterados."
          ],
          [
            "Verificações, com os testes",
            "Verificações mostra os testes automáticos, não o diff."
          ],
          [
            "Arquivos alterados, o diff",
            "Isso. Vermelho com - sai, verde com + entra."
          ]
        ],
        "c": 2
      },
      {
        "p": "Você achou um erro no Claude Code. O que faz primeiro?",
        "o": [
          [
            "Procura nas issues abertas e fechadas se o erro já é conhecido",
            "Isso. Pode já ter solução, contorno ou correção numa versão nova."
          ],
          [
            "Abre uma issue nova, colando o log inteiro e a configuração do PC",
            "Antes, procure. E, se for relatar, corte o log para o trecho do erro e tire dados pessoais."
          ],
          [
            "Comenta +1 na primeira issue que tiver um título parecido",
            "Sem ler, pode nem ser o mesmo erro. E +1 se faz com a reação de polegar, não com comentário."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "O que confiro num pull request sem ler código?",
        "Quatro coisas: a descrição bate com o que você pediu? Os arquivos mudados são os esperados, sem .env nem configuração? O tamanho faz sentido? Os textos visíveis, como preços e títulos, estão certos? O resto, peça ao Claude para explicar arquivo por arquivo."
      ],
      [
        "Checks vermelhos: o que faço?",
        "Abra o detalhe do check que falhou e peça ao Claude para ler o erro e explicar antes de corrigir. Se o check for obrigatório, o merge fica bloqueado até ele passar."
      ],
      [
        "Issue no GitHub ou /bug?",
        "A issue é pública: serve para ver se o erro é conhecido e discutir. O /bug, dentro do Claude Code, vai direto para a Anthropic, com o contexto da sessão que você escolher incluir. Em nenhum dos dois cole chave, senha ou dado pessoal."
      ]
    ]
  },
  "3-6": {
    "tempo": 26,
    "video": "a3-6",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já viu o {{git|Git}} listar um arquivo que você jurava ter mandado ignorar, ou ficou na dúvida se a sua {{chave-api|chave}} foi para o {{github|GitHub}} junto com o resto. Esta aula monta o {{gitignore|.gitignore}} do jeito certo, mostra por que ele só vale para arquivo novo e mostra três armadilhas do Windows que fazem a lista parecer certa sem funcionar.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A regra de ouro da aula 3.1 é: nunca coloque senha ou chave de {{api|API}} num {{commit}}. Apagar depois não resolve, porque a chave continua nas fotos antigas. A defesa que vem antes é o .gitignore, a lista de arquivos que o Git não deve acompanhar. Com o `.env` na lista, o `git add .`, que leva tudo, deixa a chave de fora sem você precisar lembrar."
      ],
      [
        "p",
        "Você vai precisar disso logo. A partir do módulo 10, seus projetos vão ter um arquivo {{env|.env}} com uma chave de API. O {{claude-code|Claude Code}} cria pastas que não devem ir para o {{repositorio|repositório}}, como `.venv`, com as {{biblioteca|bibliotecas}} instaladas, e `__pycache__`, com rascunhos que o {{python|Python}} gera sozinho. E as suas pastas de trabalho têm arquivos que não são para ninguém ver, como uma planilha com dados de clientes. A lista certa, criada antes do primeiro commit, cuida de tudo isso."
      ],
      [
        "p",
        "O problema é que a lista falha em silêncio. Se ela tiver o nome errado, a {{codificacao|codificação}} errada, ou se o arquivo protegido tiver um nome um pouco diferente, nada avisa: o Git simplesmente acompanha o arquivo. Por isso, esta aula ensina a montar a lista e, principalmente, a conferir se ela funciona. Todas as saídas foram {{rodar|rodadas}} de verdade, com chaves falsas criadas só para o teste. A aula 11.1 continua daqui, com o {{gitleaks|Gitleaks}} e o que fazer se uma chave vazar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num segurança na porta de uma festa, com uma **lista de barrados**. A festa é o que o Git acompanha; a lista é o .gitignore. O segurança confere cada pessoa **que chega**, ou seja, cada arquivo novo, e barra quem está na lista. Mas quem **já entrou** antes de a lista existir continua lá dentro: o .gitignore não expulsa ninguém. Para tirar alguém que já está dentro, você precisa acompanhá-lo até a saída, e esse é o `git rm --cached`. E o segurança confere o nome exato: quem chega com outro nome no documento, como `.env.txt` em vez de `.env`, passa. Se a lista estiver escrita numa língua que ele não lê, ou guardada numa pasta com o nome errado, é como se não existisse."
      ],
      [
        "quebra",
        "Na festa, quem é barrado vai embora; no Git, o arquivo ignorado continua na sua pasta, inteiro, só não entra nas fotos. E acompanhar alguém até a saída hoje não apaga as fotos de ontem: o arquivo que já entrou num commit continua no {{historico|histórico}}, com a chave dentro. Por isso, chave que entrou numa foto se {{revogar|revoga}}, mesmo depois de sair."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "A lista: uma regra por linha"
      ],
      [
        "p",
        "O .gitignore é um arquivo de texto comum, chamado exatamente `.gitignore`, sem nada depois, na pasta principal do repositório. A documentação do GitHub manda colocar na raiz e fazer commit dele, para que a regra valha para quem baixar o projeto. Este é o arquivo usado no teste:"
      ],
      [
        "saida",
        "# Segredos: nunca no Git\n.env\n\n# Coisas que o Python gera sozinho\n.venv/\n__pycache__/\n\n# Registros de execução\n*.log"
      ],
      [
        "p",
        "Linha por linha. O `#` começa um comentário, que o Git ignora e que serve para você lembrar por que cada regra existe. `.env` pega o arquivo com esse nome exato. `.venv/`, com a barra no fim, pega uma pasta inteira e tudo o que tem dentro. `*.log` usa o asterisco, que quer dizer \"qualquer coisa\": pega `execucao.log`, `erro.log` e qualquer outro arquivo terminado em `.log`. Linhas em branco não fazem nada e só deixam a lista legível."
      ],
      [
        "p",
        "Veja o efeito. Antes da lista, numa pasta com o programa, o `.env`, a `.venv`, a `__pycache__` e um registro de execução, o `git status` mostrava tudo:"
      ],
      [
        "saida",
        "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\t.env\n\t.venv/\n\t__pycache__/\n\tapp.py\n\texecucao.log\n\nnothing added to commit but untracked files present (use \"git add\" to track)"
      ],
      [
        "p",
        "Depois da lista, o mesmo {{comando}} mostrou só o que deve entrar, mais a própria lista:"
      ],
      [
        "saida",
        "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\t.gitignore\n\tapp.py\n\nnothing added to commit but untracked files present (use \"git add\" to track)"
      ],
      [
        "p",
        "Os arquivos ignorados continuam na pasta, intactos; o Git só parou de oferecê-los. Agora um `git add .` é seguro: ele leva o programa e a lista, e mais nada."
      ],
      [
        "h3",
        "Conferir se a regra funciona"
      ],
      [
        "p",
        "Não confie na lista sem conferir. O comando `git check-ignore -v` seguido de nomes de arquivos diz, para cada um, qual linha da lista o pegou. Saída real:"
      ],
      [
        "saida",
        ".gitignore:2:.env\t.env\n.gitignore:9:*.log\texecucao.log\n.gitignore:5:.venv/\t.venv/pyvenv.cfg"
      ],
      [
        "p",
        "Leia assim: \"no arquivo .gitignore, linha 2, a regra .env pegou o arquivo .env\". Se um arquivo **não** está sendo ignorado, o comando não responde nada. Outra conferência é o `git status --ignored`, que acrescenta uma seção com o que está sendo ignorado:"
      ],
      [
        "saida",
        "Ignored files:\n  (use \"git add -f <file>...\" to include in what will be committed)\n\t.env\n\t.venv/\n\t__pycache__/\n\texecucao.log"
      ],
      [
        "p",
        "A linha entre parênteses ensina a furar a lista, com `git add -f`, de \"forçar\". No teste, `git add -f .env` colocou o `.env` na lista da próxima foto, mesmo ignorado. Esse comando existe para casos raros, e nunca deve ser usado com segredo. Se o Claude sugerir um `-f`, pergunte por quê."
      ],
      [
        "h3",
        "O .gitignore só vale para arquivo novo"
      ],
      [
        "p",
        "Esta é a regra que mais engana. No teste, o `.env` entrou no primeiro commit, junto com o programa, e só depois o .gitignore ganhou a linha `.env`. Quando o `.env` mudou, o `git status` respondeu:"
      ],
      [
        "saida",
        "On branch main\nChanges not staged for commit:\n  (use \"git add <file>...\" to update what will be committed)\n  (use \"git restore <file>...\" to discard changes in working directory)\n\tmodified:   .env\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\t.gitignore\n\nno changes added to commit (use \"git add\" and/or \"git commit -a\")"
      ],
      [
        "p",
        "\"modified: .env\": o Git continua acompanhando o arquivo, porque ele já estava na festa. Para tirá-lo, `git rm --cached .env`, que respondeu `rm '.env'`. O nome assusta, mas o `--cached` quer dizer \"só do Git\": o arquivo continua no disco. O `git status` seguinte mostra `deleted: .env` em \"Changes to be committed\", o que também assusta: é a próxima foto que não vai ter o `.env`, não a sua pasta. O commit confirmou, com a linha `delete mode 100644 .env`, e depois o `git status --ignored --short` mostrou `!! .env`: o arquivo existe na pasta, e agora é ignorado."
      ],
      [
        "p",
        "Mas o histórico guarda o passado. O comando `git log --oneline -- .env`, que lista os commits que mexeram nesse arquivo, respondeu:"
      ],
      [
        "saida",
        "b1756c3 Tira o .env do Git e passa a ignorá-lo\nea83bc0 Primeira versão"
      ],
      [
        "p",
        "A foto `ea83bc0` tem o `.env`, com a chave dentro, para sempre. Por isso a ordem certa, quando uma chave entrou num commit, é: primeiro revogar a chave, no site de onde ela veio; depois criar outra; depois trocar nos programas; e só então tirar o arquivo do Git, como acima. A aula 11.1 detalha cada passo e mostra o Gitleaks procurando chaves no histórico."
      ],
      [
        "h3",
        "Armadilha 1: o .env.txt do Bloco de Notas"
      ],
      [
        "p",
        "O Bloco de Notas pode salvar o arquivo como `.env.txt` em vez de `.env`, e o Windows esconde o `.txt` se as {{extensao|extensões}} estiverem ocultas. A regra `.env` pega só o nome exato. No teste, com um `.env.txt` na pasta, o `git check-ignore -v .env.txt` não respondeu nada, e o `git status` listou o `.env.txt` como arquivo novo, pronto para entrar. Um `git add .` depois disso levou a chave:"
      ],
      [
        "saida",
        "On branch main\n\nNo commits yet\n\nChanges to be committed:\n  (use \"git rm --cached <file>...\" to unstage)\n\tnew file:   .env.txt\n\tnew file:   .gitignore\n\tnew file:   app.py\n"
      ],
      [
        "p",
        "O conserto: ligar a exibição de extensões no {{explorador|Explorador}}, como na aula 0.1, e renomear o arquivo para `.env`. Se ele já entrou na lista da próxima foto, como acima, e ainda não houve commit, `git rm --cached .env.txt` tira da lista; no teste, respondeu `rm '.env.txt'`. O mais simples, para não cair nisso: peça ao Claude para criar o `.env` vazio e cole a chave você, no editor."
      ],
      [
        "h3",
        "Armadilha 2: a lista com o nome errado"
      ],
      [
        "p",
        "O mesmo Bloco de Notas pode salvar a lista como `.gitignore.txt`. Aí o Git nem sabe que a lista existe: ele só procura um arquivo chamado exatamente `.gitignore`. O laboratório quebrado desta aula é esse caso, para você reconhecer na saída do `git status`."
      ],
      [
        "h3",
        "Armadilha 3: o echo do PowerShell grava em outra codificação"
      ],
      [
        "p",
        "Este foi um achado do teste, e é o mais traiçoeiro. No Windows {{powershell|PowerShell}} 5.1, o que vem com o Windows 11, o comando `echo \".env\" > .gitignore` cria o arquivo com o nome certo e o texto certo, mas numa codificação chamada UTF-16, que o Git não lê como lista. O arquivo começa com dois bytes invisíveis, `FF FE`, e o `git status` continuou mostrando o `.env` como se a lista não existisse. Pelo Bloco de Notas, o arquivo parece perfeito."
      ],
      [
        "p",
        "O jeito seguro no PowerShell é `Set-Content` com `-Encoding utf8`, que no teste gravou uma lista que o Git leu na hora, inclusive uma regra com acento:"
      ],
      [
        "saida",
        "PS> Set-Content -Path .gitignore -Encoding utf8 -Value '.env'\nPS> Add-Content -Path .gitignore -Encoding utf8 -Value 'relatório.xlsx'\nPS> git check-ignore -v relatório.xlsx\n.gitignore:2:relatório.xlsx\t\"relat\\303\\263rio.xlsx\""
      ],
      [
        "p",
        "O primeiro cria a lista com a linha `.env`; o segundo acrescenta uma linha no fim, sem apagar o resto. A resposta do `check-ignore` diz a linha da lista que pegou o arquivo; o nome aparece com números no lugar do `ó` porque o Git escreve assim as letras acentuadas, e isso não é erro. Não esqueça o `-Encoding utf8`: sem ele, o `Set-Content` do 5.1 grava na codificação antiga do Windows. Uma regra só com letras sem acento, como `.env`, funciona igual; mas, no teste, a regra `relatório.xlsx` gravada assim não pegou o arquivo, o `check-ignore` não respondeu nada, e o `git status` continuou listando a planilha como arquivo novo, sem aviso nenhum. Também funcionam: criar a lista pelo {{vs-code|VS Code}}, pelo Bloco de Notas do Windows 11, que salva em {{utf8|UTF-8}}, cuidando do nome, ou pedir ao Claude. E depois de criar, por qualquer caminho, confira com `git check-ignore -v .env`."
      ],
      [
        "h3",
        "O que entra na sua lista"
      ],
      [
        "p",
        "Para os projetos deste curso, a lista básica tem: `.env`, para as chaves; `.venv/` e `__pycache__/`, que o Python gera; `*.log`, os registros de execução; e `node_modules/`, a pasta de bibliotecas de projetos em JavaScript, que aparece no módulo 15. Acrescente o que for seu: a planilha com dados de clientes, a pasta de vídeos grandes. Para um ponto de partida maior, o GitHub mantém modelos por linguagem no repositório `github/gitignore`, os mesmos da aula 3.2."
      ],
      [
        "p",
        "Um detalhe do Claude Code: na primeira vez que ele grava o arquivo de configurações pessoais de um projeto, o `.claude/settings.local.json`, ele mesmo acrescenta esse arquivo a uma lista de ignorados que vale para todos os repositórios do PC, segundo a documentação de configurações. Já o `.claude/settings.json`, sem o \"local\", é feito para ir no commit e ser dividido com quem usa o projeto."
      ],
      [
        "p",
        "O pedido que resume a aula, para fazer antes do primeiro commit de qualquer projeto: \"Crie o .gitignore com .env, .venv/, __pycache__/ e *.log. Depois rode git status --ignored e git check-ignore -v .env e me mostre a saída exata.\""
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar ou pagar alguma coisa?** Não. O .gitignore é um arquivo de texto, e o Git, que é gratuito, já sabe ler.",
          "**E se eu puser algo na lista por engano?** O arquivo só deixa de aparecer no `git status`; nada é apagado. Tire a linha da lista, e ele volta a aparecer.",
          "**O .gitignore protege a pasta no meu PC?** Não. Ele só decide o que entra nas fotos. Quem lê a pasta, como o Claude ou um programa, continua lendo. A aula 11.1 mostra como impedir o Claude de ler o .env.",
          "**Preciso de um .gitignore em cada pasta?** Não. Um só, na pasta principal, vale para todas as subpastas."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: listas que valem só para você",
          "blocos": [
            [
              "p",
              "Além do .gitignore do repositório, existem dois outros lugares para regras, segundo a documentação do GitHub. Uma lista global, que vale para todos os repositórios do PC, no arquivo `ignore` dentro da pasta `.config\\git` da sua {{pasta-pessoal|pasta de usuário}}; é nela que o Claude Code põe o `settings.local.json`. E o arquivo `.git\\info\\exclude`, dentro de um repositório, que vale só para a sua cópia e não vai no commit."
            ],
            [
              "p",
              "Uma regra que começa com `!` abre uma exceção: com `*.log` e depois `!importante.log`, todos os registros são ignorados, menos esse. E uma regra que começa com `/`, como `/rascunho.md`, vale só para a pasta principal, não para subpastas."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "A pasta tem app.py, .env, .env.txt, execucao.log, notas.md e a pasta .venv. O .gitignore é este. O que você acha que o git status lista como arquivo novo?",
          "codigo": "# .gitignore\n.env\n*.log\n.venv/",
          "linguagem": "texto",
          "resposta": "Aparecem `.gitignore`, `app.py`, `notas.md` e o `.env.txt`. Ficam de fora o `.env`, pela regra de nome exato, o `execucao.log`, pelo `*.log`, e a pasta `.venv`, pela regra com barra. O `.env.txt` passa porque o nome não é exatamente `.env`: é a armadilha do Bloco de Notas. Toque no botão para ver a lista que fecha esse buraco.",
          "vivo": [
            [
              "Acrescentar .env.txt",
              "# .gitignore\n.env\n.env.txt\n*.log\n.venv/"
            ],
            [
              "Voltar ao original",
              "# .gitignore\n.env\n*.log\n.venv/"
            ]
          ]
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "O .env já estava num commit. Hoje você acrescentou .env ao .gitignore e, depois, mudou o .env. O que o git status mostra?",
          "o": [
            [
              "Nada sobre o .env, porque agora ele passa a ser ignorado",
              "O .gitignore só vale para arquivo novo. O .env já estava sendo acompanhado."
            ],
            [
              "modified: .env, porque o Git continua acompanhando o arquivo",
              "Isso. A chave está na foto antiga: primeiro revogue a chave; depois, git rm --cached .env e um commit."
            ],
            [
              "Um aviso de que o .env está na lista e foi bloqueado",
              "O Git não avisa nada: ele simplesmente continua acompanhando o arquivo, em silêncio."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Criei o .gitignore com a linha .env e conferi a pasta antes do add. O seu arquivo de chave se chama .env.txt; como a regra .env cobre qualquer arquivo que comece com .env, ele já está protegido, e você pode seguir com cuidado.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: a regra .env pega só o nome exato; o .env.txt continua aparecendo",
              "Isso. No teste, git check-ignore -v .env.txt não respondeu nada. Renomeie o arquivo para .env, ou acrescente a linha .env.txt."
            ],
            [
              "Está errada: o .gitignore só vale depois do primeiro commit, e ainda não houve",
              "Ele vale desde já, para todo arquivo novo, inclusive antes do primeiro commit. O erro está na regra, que não pega o nome .env.txt."
            ],
            [
              "Está correta: no .gitignore, a regra .env vale para tudo que começa com .env",
              "Para pegar tudo que começa com .env, a regra teria de ter asterisco. Sem ele, só o nome exato."
            ]
          ],
          "c": 0
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Pus o .env no .gitignore depois do commit, então está resolvido.\"",
            "O .gitignore só vale para arquivo novo. Revogue a chave, tire o arquivo com git rm --cached .env e faça um commit."
          ],
          [
            "\"git rm --cached apagou o meu .env.\"",
            "Não apagou: ele tira o arquivo só do Git. O arquivo continua na pasta; confira com git status --ignored."
          ],
          [
            "\"A regra .env protege também o .env.txt.\"",
            "A regra pega o nome exato. Ligue as extensões no Explorador e renomeie o arquivo."
          ],
          [
            "\"Criei a lista com echo no PowerShell e ela não funciona.\"",
            "O Windows PowerShell 5.1 grava em UTF-16, que o Git não lê. Recrie com Set-Content -Encoding utf8, pelo VS Code ou pedindo ao Claude."
          ],
          [
            "\"O .gitignore apaga o arquivo do histórico.\"",
            "Não apaga nada do passado. O que já entrou num commit continua nas fotos antigas."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "O .env já entrou num commit. O que fazer, e em que ordem?",
          "r": [
            "Revogar a chave primeiro e criar outra.",
            "Tirar o arquivo do Git com git rm --cached .env.",
            "Pôr .env no .gitignore e fazer um commit.",
            "Lembrar que a foto antiga continua com a chave velha, já sem valor."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são as três armadilhas do Windows que fazem a lista falhar em silêncio?",
          "r": [
            "O arquivo da chave salvo como .env.txt, que a regra .env não pega.",
            "A lista salva como .gitignore.txt, que o Git nem procura.",
            "A lista criada com echo no PowerShell 5.1, em UTF-16, que o Git não lê."
          ]
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado",
          "texto": "Alguém criou, pelo Bloco de Notas, a lista de ignorados com a linha .env, na pasta do projeto. Antes do primeiro add, conferiu com `git status`, que respondeu o que está abaixo. O .env continua aparecendo como arquivo a acompanhar. Descubra o motivo antes de ver a causa.",
          "saida": "On branch main\n\nNo commits yet\n\nUntracked files:\n  (use \"git add <file>...\" to include in what will be committed)\n\t.env\n\t.gitignore.txt\n\tapp.py\n\nnothing added to commit but untracked files present (use \"git add\" to track)",
          "dica": "A regra .env está certa, e o Git funciona. O problema está no próprio arquivo da lista de ignorados: procure-o na saída do git status.",
          "resposta": "A lista foi salva como `.gitignore.txt`, e o Git só lê um arquivo chamado exatamente `.gitignore`. Para ele, a lista não existe, e o `.env` aparece como qualquer arquivo novo. O conserto, testado no PowerShell: `Rename-Item .gitignore.txt .gitignore`. Depois disso, o `git status` passou a listar só `.gitignore` e `app.py`, e `git check-ignore -v .env` respondeu `.gitignore:1:.env`, com o nome do arquivo no fim. Para não repetir: ligue a exibição de extensões no Explorador, como na aula 0.1."
        }
      ],
      [
        "fontes",
        [
          [
            "Ignorar arquivos (.gitignore na raiz; git rm --cached; lista global; .git/info/exclude), GitHub",
            "https://docs.github.com/pt/get-started/git-basics/ignoring-files",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 2.2, Gravando alterações no repositório (Ignorando arquivos e padrões)",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Gravando-Altera%c3%a7%c3%b5es-no-Reposit%c3%b3rio",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Modelos de .gitignore, GitHub",
            "https://github.com/github/gitignore",
            "oficial",
            "02/11/2026"
          ],
          [
            "Arquivos de configurações do Claude Code (settings.local.json fica fora do git), Anthropic",
            "https://code.claude.com/docs/pt/settings",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Removendo dados confidenciais de um repositório (revogar primeiro), GitHub",
            "https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Sobre a verificação de segredos (não vale para repositório privado de conta pessoal comum), GitHub",
            "https://docs.github.com/pt/code-security/concepts/secret-security/secret-scanning",
            "oficial",
            "02/11/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O .gitignore apaga do histórico tudo o que entra nele, então pode ser criado a qualquer hora",
          "Ele não apaga nada do passado e só vale para arquivo novo. Por isso vem antes do primeiro add."
        ],
        [
          "Basta uma linha .env para proteger qualquer arquivo com chave, tenha ele o nome que tiver",
          "A regra pega o nome exato. O .env.txt passa, e a lista com nome ou codificação errada nem é lida."
        ],
        [
          "A lista vem antes do primeiro add, vale só para arquivo novo e precisa ser conferida",
          "Isso. Monte, confira com check-ignore e, se algo já entrou, revogue e tire com git rm --cached."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Você rodou git rm --cached .env. O que aconteceu com o arquivo .env na sua pasta?",
        "o": [
          [
            "Foi apagado da pasta e também do histórico",
            "Não foi apagado de lugar nenhum: o --cached tira só do Git, e o histórico antigo fica como está."
          ],
          [
            "Continua na pasta, mas sai das próximas fotos",
            "Isso. Com .env no .gitignore, ele passa a ser ignorado."
          ],
          [
            "Foi para a lixeira do Windows, para recuperar depois",
            "O Git não usa a lixeira, e aqui nem apagou: o arquivo continua na pasta."
          ]
        ],
        "c": 1
      },
      {
        "p": "Como conferir se o Git está ignorando o .env?",
        "o": [
          [
            "git check-ignore -v .env, que mostra a linha da lista que o pegou",
            "Isso. Se não responder nada, o arquivo não está sendo ignorado."
          ],
          [
            "Abrir o .gitignore no Bloco de Notas e ver se a regra está lá",
            "A linha pode estar lá e não funcionar: nome errado da lista ou codificação errada. Só o Git confirma."
          ],
          [
            "git log --oneline, que lista os arquivos que estão ignorados",
            "O git log lista commits, não arquivos ignorados."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Por que o .gitignore não pegou meu arquivo?",
        "Quatro causas comuns: o arquivo já estava num commit (o .gitignore só vale para arquivo novo); o nome é diferente, como .env.txt; a lista se chama .gitignore.txt; ou a lista foi criada com echo no PowerShell 5.1, em UTF-16. Rode git check-ignore -v com o nome do arquivo para descobrir."
      ],
      [
        "Posso usar .env* para pegar tudo?",
        "Pode, mas pega também o .env.example, o modelo sem chave que muitos projetos colocam no commit de propósito. Prefira a regra exata e renomeie o arquivo para .env."
      ],
      [
        "Tirei o .env do Git. Preciso revogar a chave?",
        "Se ele entrou em algum commit, sim, e antes de tudo: a chave continua na foto antiga. Revogue, crie outra, troque nos programas e confira o gasto. A aula 11.1 mostra o passo a passo."
      ]
    ]
  },
  "3-7": {
    "tempo": 51,
    "video": "a3-7",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O {{claude-code|Claude Code}} respondeu \"alterei três arquivos\" e você quis ver o que mudou, ou passou a tarde pulando entre o {{explorador|Explorador}}, o Bloco de Notas e o {{terminal}}. O {{vs-code|VS Code}} junta tudo numa janela só, e esta aula mostra só o mínimo: abrir a pasta, editar, usar o terminal de dentro e ver o que mudou.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui, o módulo 3 usou o terminal para tudo: o `git status` diz que arquivo mudou, o `git diff` mostra as linhas. Funciona, mas é texto puro. O VS Code é um editor gratuito da Microsoft que mostra a mesma coisa com cores e cliques: a árvore de pastas à esquerda, o arquivo aberto no meio, o terminal embaixo, e uma aba que lista tudo o que mudou desde o último {{commit}}, com as linhas que saíram em vermelho e as que entraram em verde."
      ],
      [
        "p",
        "Para quem não lê {{codigo|código}}, isso muda o jeito de conferir o Claude. Quando ele mexe em três arquivos, você abre a aba de mudanças e vê, arquivo por arquivo, o que saiu e o que entrou, sem pedir nada. Quando dá um {{conflito}} como o da aula 3.4, o VS Code põe botões em cima das marcas: aceitar uma versão, a outra ou as duas. E o Claude Code tem uma extensão para o VS Code, que mostra as edições dele lado a lado com o original."
      ],
      [
        "p",
        "Esta aula é o mínimo de propósito. O VS Code tem centenas de recursos; aqui ficam os cinco que você vai usar toda semana: abrir uma pasta, editar e salvar, o terminal integrado, a aba de mudanças do {{git|Git}} e a extensão do Claude Code. O resto você descobre quando precisar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa **mesa de trabalho bem arrumada**. À esquerda, o **armário de pastas**: o Explorer, com a árvore de arquivos do projeto. No centro, a **folha em que você está escrevendo**: o editor, com o arquivo aberto. Embaixo, o **interfone** com o computador: o terminal integrado, o mesmo {{powershell|PowerShell}} de sempre, já na pasta certa. Num canto, a **bandeja \"mudou desde a última foto\"**: a aba Source Control, que lista o que o Git vê de diferente. E, sentado ao lado, o **assistente**: a extensão do Claude Code, que faz mudanças e mostra cada uma ao lado do original."
      ],
      [
        "quebra",
        "Numa mesa de verdade, o que você escreve na folha já está no papel; no VS Code, o que você digita só vai para o arquivo quando você salva, e, até lá, o Git e o Claude não veem nada. E o VS Code não guarda uma cópia própria dos arquivos: ele abre os arquivos de verdade da pasta. Apagar um arquivo pelo Explorer do VS Code tira o arquivo da pasta de verdade; por padrão, ele vai para a Lixeira do Windows, como quando você apaga pelo Explorador."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Está instalado?"
      ],
      [
        "p",
        "O teste é o mesmo do Git: pedir a versão no PowerShell. No PC em que a aula foi testada, `code --version` respondeu três linhas, a versão, um código que identifica a montagem e o tipo de processador:"
      ],
      [
        "saida",
        "1.136.1\na44adf7f53e00964ab890f9f8758a334f1fc15bc\nx64"
      ],
      [
        "p",
        "Se aparecer `The term 'code' is not recognized`, o VS Code não está instalado, ou foi instalado depois de o terminal abrir. Para instalar, a página oficial é `code.visualstudio.com/download`. A documentação do VS Code oferece dois instaladores para Windows: o de usuário, que instala só para a sua conta e não pede administrador, e o de sistema, que instala para todos e pede. O de usuário basta. O instalador coloca o {{comando}} `code` no caminho do sistema; depois, feche o terminal e abra outro, como manda a documentação. Esta aula não instalou nada: só conferiu a versão."
      ],
      [
        "h3",
        "Abrir a pasta, não o arquivo"
      ],
      [
        "p",
        "O VS Code trabalha melhor com uma **pasta** aberta, não com um arquivo solto. O caminho é o menu **File**, depois **Open Folder** (se o VS Code estiver em português, Arquivo e Abrir Pasta), e escolher a pasta do projeto, como a `C:\\Projetos\\git-conflito` da aula 3.4. Outro caminho: no PowerShell, dentro da pasta, o comando `code .`, em que o ponto quer dizer \"esta pasta\"."
      ],
      [
        "p",
        "Na primeira vez que você abre uma pasta, o VS Code pergunta se você confia nos autores dos arquivos dela. É a confiança no espaço de trabalho. Numa pasta sua, confie. Numa pasta baixada da internet, que você ainda não conhece, recuse: o VS Code abre em Modo Restrito, que, segundo a documentação, desliga {{agente|agentes de IA}}, o terminal, tarefas, depuração, configurações da pasta e extensões. É uma proteção contra projetos que tentam {{rodar}} alguma coisa assim que são abertos."
      ],
      [
        "p",
        "Por que pasta e não arquivo: com a pasta aberta, o Explorer mostra a árvore, o terminal abre já dentro dela e a aba do Git encontra o {{repositorio|repositório}}. Com um arquivo solto, nada disso funciona."
      ],
      [
        "h3",
        "Editar e salvar"
      ],
      [
        "p",
        "Um clique no arquivo, no Explorer, abre o arquivo numa aba. Você muda o texto, e uma bolinha aparece no nome da aba: quer dizer \"mudado e não salvo\". `Ctrl+S` salva, e a bolinha some. Isso importa mais do que parece: enquanto a bolinha estiver lá, o arquivo no disco é o antigo, e o Git e o Claude veem a versão antiga. Existe a opção de salvar sozinho, no menu File, chamada Auto Save, que vem desligada."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: você abre o `index.html` da aula 3.4, troca `R$ 39` por `R$ 45`, vê a bolinha, aperta `Ctrl+S`. Nesse instante, o arquivo mudou no disco, e duas coisas acontecem sozinhas: a aba do Git ganha um número 1, e o nome do arquivo ganha uma letra ao lado. É a próxima seção."
      ],
      [
        "h3",
        "O terminal integrado"
      ],
      [
        "p",
        "O menu **Terminal**, depois **New Terminal**, abre um terminal na parte de baixo da janela. O atalho aparece ao lado do item, no próprio menu, e o nome da tecla muda conforme o teclado: o da documentação vale para o teclado americano. O menu é o caminho que não falha. No Windows, em geral, é o PowerShell, e, segundo a documentação, ele começa na pasta principal do espaço de trabalho: o caminho antes do cursor já é o da pasta do projeto. Tudo o que você fez nas aulas 3.3 e 3.4 funciona ali, igual. Um `git status` nesse terminal, depois da troca de preço, mostra `modified:   index.html`, a mesma saída da aula 3.3."
      ],
      [
        "p",
        "O terminal integrado não é um terminal especial: é o mesmo programa, só que dentro da janela. A vantagem é não precisar abrir o terminal na pasta certa. O ícone de lixeira, no canto do painel, fecha o terminal; o `x` só esconde o painel."
      ],
      [
        "h3",
        "Source Control: o que mudou desde a última foto"
      ],
      [
        "p",
        "A aba **Source Control**, aberta pelo ícone de ramificação na barra da esquerda ou com `Ctrl+Shift+G`, é o `git status` com cliques. Ela lista os arquivos mudados, cada um com uma letra: **U** para um arquivo novo, que o Git ainda não acompanha, e **M** para um arquivo modificado. Clicando no nome, o VS Code abre a comparação, o {{diff}}, com a versão da última foto de um lado e a atual do outro, em vermelho e verde. É o jeito mais rápido de conferir o trabalho do Claude: um clique por arquivo."
      ],
      [
        "p",
        "Os botões fazem os comandos que você já conhece. O **+** ao lado de um arquivo, Stage Changes, é o `git add`: o arquivo sobe para a lista Staged Changes, a próxima foto, que é a {{area-de-preparacao|área de preparação}} da aula 3.1. A caixa de mensagem no topo e o botão **Commit** fazem o `git commit -m`. A documentação do VS Code avisa duas coisas: a aba usa o Git instalado no PC, então sem o Git ela não funciona; e o commit só registra a foto no {{historico|histórico}} do seu PC, sem mandar nada para um {{servidor}}. O envio ao {{github|GitHub}} continua sendo o {{push}}; nesta fase, use o `git push` no terminal, cuja saída você já sabe ler."
      ],
      [
        "p",
        "No conflito, o VS Code mostra, em cima das marcas, as opções Accept Current Change, Accept Incoming Change, Accept Both Changes e Compare Changes. Num {{merge}}, segundo a documentação, Current é a versão da {{branch}} em que você está, a do `<<<<<<< HEAD`, e Incoming é a da branch que está chegando. Clicar numa delas apaga as marcas e deixa a versão escolhida. Depois, salvar, `+` e Commit, como na aula 3.4."
      ],
      [
        "h3",
        "A paleta de comandos"
      ],
      [
        "p",
        "Tudo o que o VS Code faz tem um nome, e `Ctrl+Shift+P` abre a {{paleta-de-comandos|paleta de comandos}}, uma caixa de busca por esses nomes. Digite \"git init\" e aparece Git: Initialize Repository; digite \"Claude\" e aparecem os comandos da extensão do Claude Code. Quando não achar um botão, procure ali."
      ],
      [
        "h3",
        "A extensão do Claude Code"
      ],
      [
        "p",
        "A extensão oficial se instala pela aba de extensões, `Ctrl+Shift+X`: busque \"Claude Code\" e clique em Install. Antes de instalar, confira o publicador, que tem de ser **Anthropic**, e o identificador, `anthropic.claude-code`. Extensão é programa: uma com nome parecido e publicador desconhecido pode ser falsa, e a aula 11.5 mostra um caso real. A documentação pede o VS Code 1.94.0 ou mais novo. No PC de teste, `code --list-extensions` listou `anthropic.claude-code`: estava instalada."
      ],
      [
        "p",
        "Para abrir: o ícone de faísca, no canto de cima à direita quando há um arquivo aberto, ou o item **✻ Claude Code** na barra de baixo, ou a paleta, com \"Claude Code: Open in New Tab\". O painel conversa como o Claude Code do terminal, com três diferenças úteis. No modo Manual, o que pede permissão antes de editar arquivos e de rodar a maioria dos comandos, quando o Claude quer editar um arquivo, o painel mostra a comparação lado a lado do original com a mudança proposta e pede permissão, e dá para aceitar ou recusar cada mudança separadamente; é assim que a documentação descreve. No {{modo-automatico|modo automático}}, que a documentação dá como o inicial nas versões recentes, no de editar sem perguntar (Edit automatically) e no {{bypass}}, a maioria das edições entra direto, sem pergunta: você confere depois, na aba Source Control. Só alguns caminhos protegidos, como a pasta `.git`, ainda passam por uma conferência nesses modos, menos no bypass. Com `@` e o nome de um arquivo, você aponta exatamente o que ele deve ler. E no modo de planejamento, o plano abre como um documento em que você comenta antes de ele começar."
      ],
      [
        "p",
        "Duas coisas que a documentação esclarece. O histórico de conversas e as configurações do arquivo `settings.json` são os mesmos da versão do terminal: uma conversa começada no painel continua no terminal com `claude --resume`. Mas a extensão traz a própria cópia do Claude Code para o painel e não coloca o comando `claude` no caminho do sistema: para digitar `claude` no terminal integrado, o Claude Code precisa estar instalado do jeito normal, como na aula 0.0."
      ],
      [
        "h3",
        "Quando não usar"
      ],
      [
        "p",
        "Para dar uma olhada rápida num arquivo, o Bloco de Notas basta. No celular, o VS Code não existe; lá o caminho é o app do Claude, como mostra a aula 3.8. E o VS Code não substitui o terminal do Claude Code: muita gente usa os dois, o Claude no terminal fazendo o trabalho e o VS Code aberto ao lado, só para ver as mudanças."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar?** O VS Code, se o `code --version` não responder, e a extensão, se quiser o painel do Claude. Os dois são gratuitos.",
          "**Custa?** O VS Code é gratuito. O Claude no painel gasta do mesmo limite do seu plano que o Claude no terminal.",
          "**E se eu apagar um arquivo sem querer pelo Explorer?** Se ele estava num commit, `git restore` seguido do nome traz de volta a versão da última foto; a aula 3.9 mostra. Se nunca entrou num commit, procure na Lixeira do Windows.",
          "**Preciso usar a aba Source Control?** Não. O terminal faz tudo. A aba só deixa a conferência mais rápida e visual.",
          "**O VS Code fica em português?** Dá para instalar um pacote de idioma pela aba de extensões. Esta aula dá os nomes em inglês, que é como ele vem."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: ver um arquivo de um commit antigo e as letras do Explorer",
          "blocos": [
            [
              "p",
              "As letras U e M aparecem também ao lado do nome no Explorer, e a pasta que contém um arquivo mudado ganha um ponto colorido. É o mesmo aviso da aba Source Control, espalhado pela árvore."
            ],
            [
              "p",
              "O livro Pro Git, em português, tem um apêndice sobre o Git no Visual Studio Code, com a lista do que a aba Source Control faz: ver as mudanças, fazer commit, trocar de branch, resolver conflitos. Ele confirma a regra desta aula: a aba é uma interface para o mesmo Git do terminal."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Esta é a aba Source Control de um projeto. O que você acha que aconteceu com cada arquivo desde a última foto?",
          "codigo": "Changes\n  index.html    M\n  sobre.html    U",
          "linguagem": "texto",
          "resposta": "O `index.html` já estava numa foto e foi modificado: M. O `sobre.html` é novo, e o Git ainda não o acompanha: U. No terminal, o `git status` diria `modified: index.html` e listaria `sobre.html` em \"Untracked files\". Toque no botão para ver o que muda depois de clicar no + do index.html.",
          "vivo": [
            [
              "Clicar no + do index.html",
              "Staged Changes\n  index.html    M\nChanges\n  sobre.html    U"
            ],
            [
              "Voltar ao original",
              "Changes\n  index.html    M\n  sobre.html    U"
            ]
          ]
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Na aba Source Control, você clicou no + ao lado de index.html. O que isso equivale a fazer no terminal?",
          "o": [
            [
              "git commit -m, que tira a foto só desse arquivo, sem os outros",
              "A foto só é tirada no botão Commit, depois de escrever a mensagem. O + só prepara."
            ],
            [
              "git push, que manda o arquivo agora mesmo para o GitHub",
              "Nada vai para o GitHub pelo +. Nem o Commit do VS Code manda: ele registra só no seu PC."
            ],
            [
              "git add index.html, que põe o arquivo na próxima foto",
              "Isso. O arquivo sobe para Staged Changes, a área de preparação."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Instalei a extensão do Claude Code no VS Code. Agora você pode abrir o terminal integrado e digitar claude, porque a extensão já coloca esse comando no caminho do sistema.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: a extensão põe o claude só no terminal integrado, não no de fora",
              "Ela não põe em nenhum dos dois: a cópia que vem com a extensão serve só ao painel. O terminal integrado é o mesmo PowerShell de fora."
            ],
            [
              "Está errada: a extensão não põe o claude no caminho; falta a instalação normal",
              "Isso. Para digitar claude no terminal, instale o Claude Code do jeito normal, como na aula 0.0."
            ],
            [
              "Está correta: a extensão instala também o comando claude no terminal",
              "A documentação diz o contrário: a extensão tem a própria cópia, só para o painel, e não põe o claude no caminho do sistema."
            ]
          ],
          "c": 1
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Abri o arquivo e a aba do Git está vazia.\"",
            "Abra a pasta, com File e Open Folder. Com um arquivo solto, o VS Code não acha o repositório."
          ],
          [
            "\"Editei, mas o Git e o Claude não viram a mudança.\"",
            "A bolinha na aba diz que não salvou. Ctrl+S grava no disco."
          ],
          [
            "\"Fiz commit pelo VS Code, então está no GitHub.\"",
            "O commit do VS Code é igual ao do terminal: fica no PC. Falta o push."
          ],
          [
            "\"Confio em qualquer pasta que abro.\"",
            "Pasta baixada da internet pode tentar rodar coisas ao abrir. Para essas, recuse e use o Modo Restrito."
          ],
          [
            "\"Instalei a primeira extensão com Claude no nome.\"",
            "Confira o publicador, Anthropic, e o identificador, anthropic.claude-code. Extensão é programa."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "Quais são as quatro áreas do VS Code que esta aula usa, e o que cada uma faz?",
          "r": [
            "Explorer: a árvore de pastas e arquivos do projeto.",
            "Editor: o arquivo aberto; a bolinha na aba é mudança não salva.",
            "Terminal integrado: o PowerShell, já na pasta do projeto.",
            "Source Control: o que mudou desde o último commit, com add e commit por botões."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Como conferir que a extensão do Claude Code é a oficial?",
          "r": [
            "O publicador é Anthropic.",
            "O identificador é anthropic.claude-code.",
            "Instalada pela aba de extensões do próprio VS Code."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "A pasta da aula 3.4 no VS Code",
          "lugar": "No PC, no VS Code",
          "tempo": "30 minutos",
          "antes": "Você vai abrir no VS Code o repositório do laboratório da aula 3.4, a pasta C:\\Projetos\\git-conflito, mudar um preço, ver a mudança na aba Source Control, fazer um commit por botões, conferir no terminal integrado e abrir o painel do Claude Code. Se não fez a aula 3.4, o passo 3 cria essa pasta, com a mesma página de R$ 39, por um comando. Precisa do Git instalado e configurado, como na aula 3.3. Pelo app: não dá, porque o laboratório é a própria janela do VS Code no PC; no celular, leia os passos. Não testado: os cliques na janela do VS Code não foram feitos para escrever esta aula; foram conferidos a versão (1.136.1) e a lista de extensões, em 02/11/2026, e o comando do passo 3 foi rodado no Windows PowerShell 5.1 em 08/11/2026. Os nomes dos menus estão em inglês, como o VS Code vem.",
          "naoTestado": "Os passos na janela do VS Code não foram clicados. Conferidos em 02/11/2026: code --version (1.136.1) e code --list-extensions, que listou anthropic.claude-code. O bloco do passo 3 foi rodado no Windows PowerShell 5.1 em 08/11/2026, numa pasta de teste.",
          "passos": [
            {
              "faz": "Abra o Terminal como na aula 2.2: tecla Windows junto com X, e escolha Terminal.",
              "espera": "Abre o PowerShell, com o cursor piscando depois do caminho da sua pasta."
            },
            {
              "faz": "Confira se o VS Code está instalado:",
              "cola": "code --version",
              "saida": "1.136.1\na44adf7f53e00964ab890f9f8758a334f1fc15bc\nx64",
              "espera": "Três linhas, a primeira com a versão. Se aparecer \"is not recognized\", veja o Se der errado."
            },
            {
              "faz": "Só se você não tem a pasta C:\\Projetos\\git-conflito da aula 3.4: cole o bloco inteiro, que cria a pasta, a página com o preço de R$ 39 e o primeiro commit. Se já tem a pasta, só marque este passo.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\git-conflito | Out-Null\nSet-Location C:\\Projetos\\git-conflito\ngit init -b main\nSet-Content -Path index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Aprenda juros do zero.</p>', '<p>Preço: R$ 39</p>', '<p>Aulas curtas, no celular.</p>', '<button>Comprar</button>'\ngit add .\ngit commit -m 'Página com o preço de lançamento, R$ 39'",
              "espera": "Uma linha \"Initialized empty Git repository in C:/Projetos/git-conflito/.git/\" e outra que começa com \"[main (root-commit)\", com \"1 file changed, 5 insertions(+)\" e \"create mode 100644 index.html\"."
            },
            {
              "faz": "Abra o VS Code pelo menu Iniciar.",
              "espera": "Abre a janela do VS Code, em geral com uma tela de boas-vindas."
            },
            {
              "faz": "No menu File, escolha Open Folder.",
              "espera": "Abre a janela do Windows para escolher uma pasta."
            },
            {
              "faz": "Escolha a pasta C:\\Projetos\\git-conflito.",
              "espera": "A janela de escolha fecha, e o VS Code pergunta se você confia nos autores dos arquivos dessa pasta."
            },
            {
              "faz": "A pasta é sua: escolha a opção de confiar nos autores (Yes, I trust the authors).",
              "espera": "A árvore com o index.html aparece à esquerda, no Explorer."
            },
            {
              "faz": "Clique no index.html, no Explorer.",
              "espera": "O arquivo abre numa aba, no centro, com as cinco linhas da página."
            },
            {
              "faz": "Troque o preço R$ 39 por R$ 45, sem salvar.",
              "espera": "Uma bolinha aparece no nome da aba: mudado e não salvo."
            },
            {
              "faz": "Aperte Ctrl+S.",
              "espera": "A bolinha some. O ícone de Source Control, na barra da esquerda, ganha um número 1."
            },
            {
              "faz": "Aperte Ctrl+Shift+G para abrir a aba Source Control.",
              "espera": "O index.html aparece em Changes, com a letra M."
            },
            {
              "faz": "Clique no nome index.html, dentro da aba Source Control.",
              "espera": "Abre a comparação: a linha de R$ 39 em vermelho, de um lado, e a de R$ 45 em verde, do outro."
            },
            {
              "faz": "No menu Terminal, escolha New Terminal.",
              "espera": "Um PowerShell abre embaixo, com C:\\Projetos\\git-conflito antes do cursor."
            },
            {
              "faz": "No terminal integrado, confira o que o Git vê:",
              "cola": "git status",
              "espera": "A mesma informação da aba: \"modified: index.html\" em \"Changes not staged for commit\"."
            },
            {
              "faz": "Na aba Source Control, clique no + que aparece ao lado do index.html quando o mouse passa sobre ele.",
              "espera": "O arquivo sobe para Staged Changes: é o git add."
            },
            {
              "faz": "Na caixa de mensagem do topo da aba, escreva \"Testa o preço de R$ 45 pelo VS Code\".",
              "espera": "A mensagem aparece na caixa, acima do botão Commit."
            },
            {
              "faz": "Clique em Commit.",
              "espera": "A lista de mudanças fica vazia: a foto foi tirada, só no seu PC."
            },
            {
              "faz": "No terminal integrado, veja o álbum:",
              "cola": "git log --oneline -3",
              "espera": "No alto, o commit com a sua mensagem, feito pelos botões."
            },
            {
              "faz": "Aperte Ctrl+Shift+X.",
              "espera": "Abre a aba de extensões, com uma caixa de busca no topo."
            },
            {
              "faz": "Na caixa de busca, escreva Claude Code.",
              "espera": "Aparece a extensão Claude Code. Confira o publicador, Anthropic, e o identificador, anthropic.claude-code."
            },
            {
              "faz": "Se ela ainda não estiver instalada, clique em Install.",
              "espera": "O botão Install some, e a extensão fica instalada. Se ela já estava instalada, só marque este passo."
            },
            {
              "faz": "Clique no item ✻ Claude Code, na barra de baixo (ou no ícone de faísca, no canto de cima à direita).",
              "espera": "Abre o painel do Claude Code, com uma caixa para escrever."
            },
            {
              "faz": "Cole a pergunta no painel e aperte Enter:",
              "cola": "O que mudou no último commit desta pasta?",
              "espera": "O Claude responde que o preço mudou de R$ 39 para R$ 45 no index.html, como você fez. Se ele pedir permissão para rodar comandos, aceite."
            }
          ],
          "errado": "se o `code` não for reconhecido, instale o VS Code pela página code.visualstudio.com/download, feche o PowerShell e abra outro. Se a aba Source Control disser que a pasta não tem repositório, você abriu outra pasta: abra a que tem a pasta escondida .git, como a da aula 3.4. Se ela pedir o Git, instale como na aula 3.3 e reabra o VS Code. Se a extensão não aparecer depois de instalar, abra a paleta com Ctrl+Shift+P e rode Developer: Reload Window, como sugere a documentação. Se o commit pelos botões reclamar de nome e e-mail, faça os passos do nome e do e-mail (5 a 8) do laboratório da aula 3.3."
        }
      ],
      [
        "fontes",
        [
          [
            "Instalar o VS Code no Windows (instalador de usuário e de sistema; reiniciar o terminal), Microsoft",
            "https://code.visualstudio.com/docs/setup/windows",
            "oficial",
            "02/11/2026"
          ],
          [
            "Source Control no VS Code (Ctrl+Shift+G; usa o Git instalado; commit só no PC), Microsoft",
            "https://code.visualstudio.com/docs/sourcecontrol/overview",
            "oficial",
            "02/11/2026"
          ],
          [
            "Primeiros passos com Git no VS Code (letras U e M; + e Commit), Microsoft",
            "https://code.visualstudio.com/docs/sourcecontrol/quickstart",
            "oficial",
            "02/11/2026"
          ],
          [
            "Resolver conflitos de merge no VS Code (Current e Incoming), Microsoft",
            "https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts",
            "oficial",
            "02/11/2026"
          ],
          [
            "Terminal integrado do VS Code, Microsoft",
            "https://code.visualstudio.com/docs/terminal/getting-started",
            "oficial",
            "02/11/2026"
          ],
          [
            "Confiança no espaço de trabalho (Modo Restrito), Microsoft",
            "https://code.visualstudio.com/docs/editing/workspaces/workspace-trust",
            "oficial",
            "02/11/2026"
          ],
          [
            "Extensão do Claude Code para VS Code (instalação, painel, diffs, histórico compartilhado, PATH), Anthropic",
            "https://code.claude.com/docs/pt/vs-code",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git, apêndice A: Git no Visual Studio Code",
            "https://git-scm.com/book/pt-br/v2/Appendix-A:-O-Git-em-Outros-Ambientes-Git-no-Visual-Studio-Code",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Baixar o VS Code, Microsoft",
            "https://code.visualstudio.com/download",
            "oficial",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O VS Code substitui o Git: o commit pelos botões já guarda o projeto no GitHub",
          "Os botões usam o mesmo Git do PC, e o commit fica no PC. O GitHub só recebe com o push."
        ],
        [
          "Abra a pasta, salve com Ctrl+S, veja as mudanças em Source Control e use o terminal de dentro",
          "Isso. É o mesmo Git e o mesmo PowerShell, numa janela só, com cores e botões."
        ],
        [
          "A extensão do Claude Code basta: com ela, o comando claude passa a funcionar em qualquer terminal",
          "A extensão serve o painel e não põe o claude no caminho do sistema. O terminal precisa da instalação normal."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você editou um arquivo no VS Code, e a aba Source Control continua vazia. Qual a causa mais provável?",
        "o": [
          [
            "O arquivo não foi salvo: a bolinha continua no nome da aba",
            "Isso. Sem Ctrl+S, o disco tem a versão antiga, e o Git não vê mudança."
          ],
          [
            "O VS Code só mostra as mudanças depois do push",
            "A aba mostra o que mudou desde o último commit, sem push nenhum."
          ],
          [
            "Falta instalar a extensão do Claude Code no VS Code",
            "A aba Source Control é do próprio VS Code e usa o Git. A extensão do Claude não tem nada a ver."
          ]
        ],
        "c": 0
      },
      {
        "p": "Num conflito, o VS Code mostra Accept Current Change e Accept Incoming Change. Num merge, qual é a Current?",
        "o": [
          [
            "A versão que está chegando, da outra branch do merge",
            "Essa é a Incoming."
          ],
          [
            "A versão do GitHub, sempre a mais recente das duas",
            "O conflito é entre duas branches no seu PC. O GitHub não entra aqui."
          ],
          [
            "A versão da branch em que você está, a do HEAD",
            "Isso. É a que aparece depois de <<<<<<< HEAD."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Preciso do VS Code para usar o Claude Code?",
        "Não. O Claude Code funciona no terminal. O VS Code ajuda a ver o que mudou, com cores, e a extensão dá um painel que mostra as edições lado a lado com o original; só no modo Manual ela pede permissão antes de aplicar."
      ],
      [
        "O que é a bolinha no nome da aba?",
        "Mudança não salva. Enquanto ela estiver lá, o arquivo no disco é o antigo, e nem o Git nem o Claude veem a sua edição. Ctrl+S salva."
      ],
      [
        "Como sei se a extensão do Claude é a verdadeira?",
        "Na aba de extensões, o publicador tem de ser Anthropic e o identificador, anthropic.claude-code. Extensão é programa: uma com publicador desconhecido pode ser falsa."
      ]
    ]
  },
  "3-8": {
    "tempo": 27,
    "video": "a3-8",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já ficou longe do PC, só com o celular, com uma ideia para o projeto e sem saber se dava para pedir ao {{claude-code|Claude Code}} dali. Ou abriu o app do Claude, o {{vs-code|VS Code}} e o {{terminal}} e não entendeu se eram o mesmo Claude; esta aula põe tudo numa tabela: onde ele {{rodar|roda}} em cada caso, o que precisa estar ligado, o que ele enxerga e quanto custa.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O Claude Code não mora num lugar só. Você pode falar com ele pelo terminal, pelo VS Code, pelo app do Claude no computador, pelo {{navegador}} e pelo app do celular. A documentação oficial diz que o mecanismo por baixo é o mesmo em todos os lugares, e que cada um é ajustado para um jeito de trabalhar. Para quem usa o Claude no PC na maior parte do tempo, mas passa dias só com o celular, escolher o lugar certo é a diferença entre conseguir trabalhar e ficar esperando voltar para casa."
      ],
      [
        "p",
        "Quatro perguntas decidem a escolha, e esta aula responde cada uma para cada caminho. **Onde o Claude roda**: no seu PC ou num computador da Anthropic, na {{nuvem}}? **O que precisa estar ligado**: o seu PC, com o Claude Code aberto, ou nada? **O que ele enxerga**: os arquivos do seu PC, com as suas ferramentas e os seus {{servidor|servidores}} {{mcp|MCP}}, ou só uma cópia do {{repositorio|repositório}} que está no {{github|GitHub}}? E **quanto custa**: tudo sai do limite do seu plano, ou alguma coisa cobra à parte?"
      ],
      [
        "p",
        "Não precisa decorar. No fim da aula há uma lista de situações com a escolha certa para cada uma, e a pergunta de \"Pare e responda\" é exatamente isso: um caso, e você escolhe onde."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao **estagiário muito rápido** da aula 0.0, que trabalha numa sala do seu escritório: ele é o Claude Code, e o jeito de trabalhar dele é sempre o mesmo. O que muda é em que escritório ele está e como você fala com ele. No **terminal**, você está no seu escritório, ao lado dele, falando direto. No **VS Code** e no **app do computador**, você continua no mesmo escritório, mas numa mesa com uma tela grande, onde cada mudança dele aparece desenhada, ao lado do original. No **{{remote-control|Remote Control}}**, você está longe e telefona para ele, que continua **no seu escritório**, com as suas pastas e ferramentas: o escritório precisa estar aberto. Na **nuvem**, ele trabalha num **escritório alugado**, com uma cópia das pastas que você mandou pelo GitHub: funciona com o seu escritório fechado, mas lá não estão os seus arquivos."
      ],
      [
        "quebra",
        "Um estagiário ao telefone faz o que entendeu, e você só vê o resultado quando volta; no Remote Control, você acompanha pelo celular cada passo que ele dá no PC, na hora, e quem entrar na sua conta dirige o seu PC do mesmo jeito. E o escritório alugado não é um trabalho separado para sempre: o que o Claude faz na nuvem volta como uma {{branch}} no GitHub, que você junta ao seu projeto com um {{pull-request|pull request}}, como na aula 3.5."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "A tabela: onde roda, o que precisa estar ligado, o que enxerga"
      ],
      [
        "p",
        "A documentação oficial tem uma página de plataformas com uma tabela de onde usar o Claude Code e outra de como trabalhar longe do terminal. A tabela abaixo junta as duas, com a coluna que mais importa para quem viaja: precisa do PC ligado? Ela vem da página do celular, que diz: se o computador estiver desligado, use {{sessao-na-nuvem|sessões na nuvem}}; o Remote Control e o {{dispatch|Dispatch}} dirigem a sua própria máquina, que precisa ficar ligada."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Onde",
            "O Claude roda em",
            "Precisa do PC ligado?",
            "Enxerga os arquivos do PC?",
            "Melhor para"
          ],
          "linhas": [
            [
              "Terminal",
              "Seu PC",
              "Sim",
              "Sim",
              "Tudo no PC; é o mais completo"
            ],
            [
              "VS Code, com a extensão",
              "Seu PC",
              "Sim",
              "Sim",
              "Ver cada edição ao lado do original, com cores"
            ],
            [
              "{{app-desktop|App desktop}}, aba Code, ambiente Local",
              "Seu PC",
              "Sim",
              "Sim",
              "Janelas e botões, sem terminal"
            ],
            [
              "Navegador, claude.ai/code (sessão na nuvem)",
              "Computador da Anthropic",
              "Não",
              "Não: só o repositório do GitHub",
              "Tarefa longa que segue sem você"
            ],
            [
              "Celular, aba Code, sessão na nuvem",
              "Computador da Anthropic",
              "Não",
              "Não: só o repositório do GitHub",
              "Começar e acompanhar longe do PC"
            ],
            [
              "Celular ou navegador, Remote Control",
              "Seu PC",
              "Sim, com o Claude Code aberto",
              "Sim",
              "Continuar de longe o que começou no PC"
            ],
            [
              "Celular, Dispatch",
              "Seu PC, pelo app desktop",
              "Sim, com o app desktop aberto",
              "Sim",
              "Mandar uma tarefa e deixar o app decidir"
            ]
          ]
        }
      ],
      [
        "p",
        "A documentação acrescenta um detalhe que ajuda: configurações, a memória do projeto e os servidores MCP são compartilhados entre os caminhos que rodam no seu PC. Terminal, VS Code e app desktop leem os mesmos arquivos. A nuvem é outra máquina, e lê bem menos."
      ],
      [
        "h3",
        "Terminal: o mais completo"
      ],
      [
        "p",
        "É o que você já usa. A documentação o chama de superfície mais completa: alguns recursos só existem ali, como rodar o Claude dentro de um {{script}}. Tudo roda no seu PC, com acesso a todos os arquivos e ferramentas. Use para o trabalho de verdade, no PC. Não serve quando você não está no PC, e é o menos visual: as mudanças aparecem como texto."
      ],
      [
        "h3",
        "VS Code e app desktop: o mesmo Claude, com janelas"
      ],
      [
        "p",
        "A extensão do VS Code, da aula 3.7, mostra cada edição lado a lado com o original e divide o histórico de conversas com o terminal; só no modo Manual ela pede permissão antes de aplicar, e nos outros você confere depois. O app do Claude para Windows tem uma aba **Code**, que é o Claude Code com janelas e botões: a documentação destaca a visualização das diferenças arquivo por arquivo, sessões em paralelo e, para quem não gosta de terminal, o mesmo mecanismo numa interface gráfica. No app, um seletor escolhe onde o Claude roda: **Local**, no seu PC, ou **Nuvem**, na Anthropic, entre outras opções. E dá para pular de um para o outro: no terminal, o {{comando}} `/desktop` continua a sessão atual no app, e, nas versões recentes, `claude --desktop` abre o app na pasta em que você está."
      ],
      [
        "p",
        "Quando usar: quando você quer ver cada mudança com calma, em cores, ou prefere clicar a digitar. Quando não: longe do PC, porque os dois rodam nele."
      ],
      [
        "h3",
        "Nuvem: claude.ai/code e a aba Code do celular"
      ],
      [
        "p",
        "Uma {{sessao-na-nuvem|sessão na nuvem}} roda num computador da Anthropic, não no seu. Segundo a documentação, ela continua depois que você fecha o notebook, e você acompanha de qualquer aparelho. Para trabalhar, ela precisa do seu {{codigo|código}}, e o caminho normal é o GitHub: você liga a sua conta do GitHub uma vez, e a máquina na nuvem copia o repositório do GitHub: pelo celular ou pelo site, na branch que você escolher; pelo terminal, com `claude --cloud`, na branch em que você está. Por isso a regra da documentação: faça o {{push}} antes, porque a nuvem não vê os {{commit|commits}} que ficaram só no PC. Quando termina, o trabalho fica numa branch, e você cria o pull request para conferir e juntar."
      ],
      [
        "p",
        "Daí vem o limite mais importante: a nuvem **não enxerga o seu PC**. As anotações do Obsidian, os arquivos fora do repositório, os servidores MCP que rodam no seu computador e o {{env|`.env`}}, que nunca vai para o GitHub, nada disso está lá. Para tarefas que precisam disso, a nuvem não serve. Do terminal, dá para mandar trabalho para a nuvem com `claude --cloud` seguido do pedido, e trazer uma sessão da nuvem para o terminal com `claude --teleport` ou `/teleport`. A transferência, pela {{linha-de-comando|linha de comando}}, é de mão única: da nuvem para o terminal, não o contrário."
      ],
      [
        "p",
        "Quando usar: tarefa longa, num projeto que está no GitHub, que pode seguir sem você olhando, inclusive com o PC desligado. Quando não: quando o trabalho depende de arquivos ou ferramentas do seu PC, ou quando a pasta nem é um repositório."
      ],
      [
        "h3",
        "Celular: o app do Claude, aba Code"
      ],
      [
        "p",
        "O Claude Code não tem um app de celular separado: tudo fica na aba **Code** do app do Claude, para iPhone e Android, com a mesma conta. Dali você abre quatro coisas: sessões na nuvem, como acima; os projetos, uma conversa em que o Claude toca, na nuvem, várias frentes de um mesmo trabalho e avisa quais terminaram; o Remote Control, para dirigir uma sessão que está rodando no seu PC; e o {{dispatch|Dispatch}}, que manda uma tarefa para o app desktop no seu PC. No terminal do PC, o comando `/mobile` mostra um código QR que abre a loja certa para baixar o app."
      ],
      [
        "p",
        "O celular tem limites, segundo a documentação. Comandos que só existem no terminal, como `/plugin` e `/resume`, não funcionam pelo app. E o app não deixa escolher o modo de permissão que libera tudo sem perguntar: na nuvem, os modos são aceitar edições, planejar e automático; no Remote Control, também o Manual, o que pede permissão antes de editar arquivos e de rodar a maioria dos comandos. É uma proteção: pelo celular, você não liga o modo mais arriscado."
      ],
      [
        "h3",
        "Remote Control: o seu PC, pelo celular"
      ],
      [
        "p",
        "O {{remote-control|Remote Control}} liga o app do celular, ou o claude.ai no navegador de outro computador, a uma sessão do Claude Code que está rodando no seu PC. A execução e os arquivos continuam no PC; o celular vira o telefone para o escritório. Você começa de dois jeitos: no terminal, dentro da pasta do projeto, `claude remote-control`, que na primeira vez pergunta `Enable Remote Control? (y/n)`, mostra um endereço e, apertando a barra de espaço, um código QR; ou, numa sessão já aberta, o comando `/remote-control`, que também aceita a forma curta `/rc`. No celular, a sessão aparece na aba Code. Com o Remote Control ativo, o Claude pode mandar avisos para o celular quando termina uma tarefa longa ou precisa de uma decisão sua."
      ],
      [
        "p",
        "As regras que a documentação deixa claras. O processo no PC precisa continuar rodando: fechou o terminal, a sessão fica fora do ar. Se o notebook dormir ou a internet cair, ela se reconecta sozinha quando o PC volta; mas, enquanto ele dorme, nada roda. No modo iniciado por `claude remote-control`, sem rede por cerca de 10 minutos, o processo desiste e encerra. Funciona nos planos Pro, Max, Ultra, Team e Enterprise, e **não aceita {{chave-api|chave de API}}**: se uma `ANTHROPIC_API_KEY` estiver em uso, ele recusa com `Remote Control requires claude.ai subscription auth.`. E, enquanto está conectado, a conversa fica guardada nos servidores da Anthropic para sincronizar os aparelhos; a execução continua no PC."
      ],
      [
        "p",
        "O cuidado de segurança: quem entra na sua conta do claude.ai pode dirigir o seu PC pelo Remote Control. Por isso existe a opção **Require trusted devices**, \"exigir dispositivos confiáveis\", em fase beta, desligada por padrão nos planos Pro, Max e Ultra, que você liga nas configurações da conta. Com ela, só aparelhos cadastrados depois de um login recente veem e controlam as sessões. Se o seu PC está num modo em que o Claude não pede confirmação, ligue. A aula 11.7 volta a esse assunto."
      ],
      [
        "h3",
        "Dispatch: um recado para o app desktop"
      ],
      [
        "p",
        "O Dispatch é o caminho mais curto: no app do celular, você manda uma tarefa, e o app desktop no seu PC cria uma sessão para fazê-la e avisa quando termina ou precisa de aprovação. Exige um plano Pro, Max ou Ultra, e o PC ligado com o app desktop aberto. Use quando a tarefa é simples e você não quer configurar nada; para acompanhar de perto, o Remote Control dá mais controle."
      ],
      [
        "h3",
        "Quanto custa cada um"
      ],
      [
        "p",
        "A resposta curta: o mesmo limite do plano, em todos os caminhos. O terminal, o VS Code, o app desktop, o Remote Control e o Dispatch usam o login da sua assinatura e gastam das mesmas barras de uso que o comando {{usage|/usage}} mostra. Sobre a nuvem, a documentação é explícita: a sessão conta para os {{limite-de-uso|limites de uso}} do seu plano, junto com o resto do seu uso, e não há cobrança separada pela máquina na nuvem."
      ],
      [
        "p",
        "Duas coisas que confundem. Os créditos mensais de {{api|API}} que vêm com os planos Max e Ultra **não cobrem o Claude Code**: a página oficial lista o Claude Code entre o que não é coberto. Eles servem para os seus programas que chamam a API, como o assistente do projeto final. E o {{uso-extra|uso extra}}, os créditos de uso para continuar depois de bater o limite, é cobrado à parte e só funciona se você ligar; nenhum dos caminhos desta aula liga sozinho. O que realmente muda o gasto não é a janela, é o volume: cinco sessões na nuvem ao mesmo tempo gastam o limite cinco vezes mais depressa que uma."
      ],
      [
        "h3",
        "Como escolher: situação por situação"
      ],
      [
        "lista",
        [
          "**No PC, trabalho de verdade nos seus arquivos**: terminal, ou o VS Code se quiser ver cada mudança em cores, ao lado do original.",
          "**Saiu de casa no meio de uma tarefa no PC**: Remote Control, deixando o PC ligado e o Claude Code aberto.",
          "**Viagem, PC desligado, projeto no GitHub**: sessão na nuvem pela aba Code do celular.",
          "**Tarefa longa que pode seguir sozinha**: nuvem, e você acompanha pelo celular.",
          "**O trabalho precisa de arquivos ou ferramentas do PC**, como o cofre de anotações ou um servidor MCP local: só os caminhos que rodam no PC, ou seja, terminal, VS Code, app desktop ou Remote Control.",
          "**A pasta não está no GitHub**: os caminhos do PC; para a nuvem, primeiro o push, como na aula 3.3.",
          "**Uma tarefa simples, sem querer configurar nada, com o PC ligado**: Dispatch."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** No celular, o app do Claude. No PC, o app desktop é opcional; o terminal você já tem.",
          "**Algum caminho custa mais?** Não por ser outro caminho: todos usam o limite do plano. Gasta mais quem pede mais, ou abre várias sessões ao mesmo tempo.",
          "**Posso começar no celular e terminar no PC?** Sim. Uma sessão na nuvem vem para o terminal com `claude --teleport`. No Remote Control, a sessão já é a do PC: é só voltar a ela.",
          "**E se o PC desligar no meio do Remote Control?** A sessão fica fora do ar até ele voltar. Para trabalhar com o PC desligado, só a nuvem.",
          "**A nuvem vê o meu .env?** Não, porque ele não vai para o GitHub, e não deve ir. Se a tarefa na nuvem precisar de uma chave, a documentação de ambientes na nuvem mostra como cadastrar {{variavel|variáveis de ambiente}} lá; isso é assunto do módulo 11."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: outros jeitos de trabalhar longe do terminal",
          "blocos": [
            [
              "p",
              "A página de plataformas lista mais caminhos. O Channels manda mensagens de um app de conversa, como o Telegram, para uma sessão no seu PC; a aula 14.2 testa. As tarefas agendadas rodam um pedido em horário fixo, no PC ou na nuvem. E o Claude no Slack responde a menções num canal e devolve pull requests, nos planos Pro, Max e Ultra, usando as sessões na nuvem."
            ],
            [
              "p",
              "O `claude --cloud` tem um detalhe: se o repositório não tem endereço do GitHub, ou se o app do Claude no GitHub não está instalado nele, o Claude Code empacota o repositório do seu PC e manda para a sessão na nuvem, em vez de copiar do GitHub. A documentação lista limites de tamanho para isso."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Você está no PC, na pasta do projeto, e vai sair de casa. Roda este comando no terminal. O que você acha que acontece, e o que precisa continuar ligado?",
          "codigo": "claude remote-control",
          "linguagem": "texto",
          "resposta": "Na primeira vez, ele explica o que faz e pergunta `Enable Remote Control? (y/n)`. Respondendo y, ele fica rodando no terminal, esperando conexões, e mostra um endereço; a barra de espaço mostra um código QR para abrir no celular. A sessão aparece na aba Code do app do Claude. O PC e esse terminal precisam continuar ligados: fechou, a sessão sai do ar. Descrito pela documentação; não foi rodado para esta aula, porque exige login e sessão interativa."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Amanhã você viaja cedo e o PC fica desligado. No caminho, quer pedir ao Claude para corrigir um texto do site, que está num repositório do GitHub. Onde?",
          "o": [
            [
              "Remote Control, pelo app, para usar o seu PC de longe",
              "O Remote Control dirige o seu PC, que estará desligado. A sessão ficaria fora do ar."
            ],
            [
              "Sessão na nuvem, pela aba Code do app do celular",
              "Isso. Roda num computador da Anthropic, copia o repositório do GitHub e não depende do PC."
            ],
            [
              "Extensão do VS Code, aberta pelo navegador do celular",
              "A extensão roda no VS Code do PC. No celular, o caminho é o app do Claude."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Pode desligar o PC: com o Remote Control, a sessão continua rodando na nuvem, e eu sigo lendo as suas anotações que estão no PC.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o Remote Control roda no PC; desligado, a sessão fica fora do ar",
              "Isso. Para trabalhar com o PC desligado, só a nuvem, e ela não lê as anotações do PC."
            ],
            [
              "Está correta: o Remote Control guarda a sessão na nuvem e roda lá",
              "A conversa fica guardada para sincronizar, mas a execução e os arquivos ficam no PC."
            ],
            [
              "Está errada só sobre as anotações; o resto da resposta está certo",
              "O resto também está errado: com o PC desligado, nada roda pelo Remote Control."
            ]
          ],
          "c": 0
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"Na nuvem, o Claude vê os arquivos do meu PC.\"",
            "Ele vê só a cópia do repositório do GitHub. Arquivos fora do repositório, o .env e servidores MCP do PC não estão lá."
          ],
          [
            "\"O Remote Control funciona com o PC desligado.\"",
            "Ele dirige o PC. Desligado, ou com o terminal fechado, a sessão sai do ar."
          ],
          [
            "\"Pelo celular, o Claude gasta os créditos de API.\"",
            "Os créditos de API não cobrem o Claude Code. Todos os caminhos gastam o limite do plano."
          ],
          [
            "\"Esqueci o push, mas a nuvem vê meu último commit.\"",
            "A nuvem copia o repositório do GitHub. Commit que ficou só no PC não chega lá: faça o push antes."
          ],
          [
            "\"Vou ligar o modo que não pergunta nada pelo celular.\"",
            "O app não oferece esse modo, de propósito. E com o Remote Control ligado, ative os dispositivos confiáveis."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "Em quais caminhos o PC precisa ficar ligado, e em qual não precisa?",
          "r": [
            "Terminal, VS Code e app desktop rodam no PC.",
            "Remote Control e Dispatch dirigem o PC, que precisa ficar ligado.",
            "A sessão na nuvem roda na Anthropic e segue com o PC desligado.",
            "Na nuvem, o Claude só vê o repositório do GitHub."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quem paga o Claude Code em cada caminho?",
          "r": [
            "Todos gastam o limite do plano, inclusive a nuvem, sem cobrança separada pela máquina.",
            "Os créditos de API não cobrem o Claude Code.",
            "O uso extra é cobrado à parte e só se você ligar."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Plataformas e integrações (onde executar o Claude Code; trabalhar longe do terminal), Anthropic",
            "https://code.claude.com/docs/pt/platforms",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Claude Code no celular (computador desligado: use a nuvem; Remote Control e Dispatch precisam da máquina ligada; modos de permissão no app), Anthropic",
            "https://code.claude.com/docs/pt/mobile",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Remote Control (como iniciar; processo local rodando; 10 minutos sem rede; sem chave de API; dispositivos confiáveis), Anthropic",
            "https://code.claude.com/docs/pt/remote-control",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Claude Code na nuvem (limite do plano, sem cobrança separada pela VM; GitHub; --cloud e --teleport), Anthropic",
            "https://code.claude.com/docs/pt/claude-code-on-the-web",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "App desktop do Claude, aba Code (ambiente Local ou Nuvem; diffs), Anthropic",
            "https://code.claude.com/docs/pt/desktop",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Extensão do Claude Code para VS Code, Anthropic",
            "https://code.claude.com/docs/pt/vs-code",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Comandos do Claude Code (/remote-control, /desktop, /mobile, /teleport), Anthropic",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Gerenciar custos (/usage e créditos de uso), Anthropic",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Créditos de API para os planos Max, Ultra e Team (não cobrem o Claude Code), Anthropic",
            "https://platform.claude.com/docs/pt-BR/about-claude/api-credits-for-subscribers",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code, versão 2.1.285 (claude --desktop)",
            "https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md",
            "oficial",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O Claude é o mesmo em todo lugar; muda onde ele roda, o que precisa estar ligado e o que ele vê",
          "Isso. No PC, ele vê tudo e o PC fica ligado; na nuvem, segue sozinho, mas só vê o GitHub."
        ],
        [
          "Cada caminho é um Claude diferente, com preço próprio; o do celular sai mais barato que o terminal",
          "O mecanismo é o mesmo, e todos gastam o mesmo limite do plano."
        ],
        [
          "O Remote Control leva o trabalho do PC para a nuvem, e por isso o PC pode ficar desligado",
          "O Remote Control dirige o PC, que precisa ficar ligado. Quem roda na nuvem é a sessão na nuvem."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Você precisa que o Claude leia arquivos que estão só no seu PC, fora de qualquer repositório, e você está longe de casa com o PC ligado. Qual caminho?",
        "o": [
          [
            "Sessão na nuvem, pela aba Code do app",
            "A nuvem só vê o repositório do GitHub. Arquivos fora dele não chegam lá."
          ],
          [
            "Remote Control, pelo app do celular",
            "Isso. A sessão roda no PC, com acesso aos arquivos dele, e você dirige de longe."
          ],
          [
            "claude --teleport, pelo navegador",
            "O teleport traz uma sessão da nuvem para o terminal do PC; não leva nada do PC para longe."
          ]
        ],
        "c": 1
      },
      {
        "p": "Uma sessão na nuvem do Claude Code, no plano Max, é paga como?",
        "o": [
          [
            "Pelos créditos mensais de API que vêm com o plano Max",
            "Os créditos de API não cobrem o Claude Code."
          ],
          [
            "Por hora de máquina na nuvem, cobrada à parte, no cartão",
            "A documentação diz que não há cobrança separada pela máquina na nuvem."
          ],
          [
            "Pelo limite de uso do plano, como todo o Claude Code",
            "Isso. Conta nas mesmas barras do /usage."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre Remote Control e sessão na nuvem?",
        "No Remote Control, o Claude roda no seu PC, com acesso aos seus arquivos, e o celular só dirige; o PC precisa ficar ligado. Na sessão na nuvem, ele roda num computador da Anthropic, com uma cópia do repositório do GitHub; o PC pode desligar, mas os arquivos dele não estão lá."
      ],
      [
        "O celular gasta mais do meu plano?",
        "Não por ser o celular. Todos os caminhos gastam o mesmo limite do plano. Gasta mais quem pede mais, ou abre várias sessões ao mesmo tempo."
      ],
      [
        "Preciso de GitHub para usar pelo celular?",
        "Para a sessão na nuvem, em geral sim: ela copia o repositório do GitHub. Para o Remote Control e o Dispatch, não: eles usam o PC, que tem os arquivos."
      ]
    ]
  },
  "3-9": {
    "tempo": 49,
    "video": "a3-9",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O {{claude-code|Claude Code}} mexeu no site, a página quebrou, e você não sabe se dá para voltar sem perder o que estava bom. Esta aula mostra os jeitos de voltar no tempo com o {{git|Git}}, qual deles apaga trabalho de vez e como achar em que {{commit}} uma coisa mudou.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A regra da aula 3.1 é fazer commit antes de cada pedido grande ao Claude. Esta aula é a outra metade da regra: como voltar quando o pedido deu errado. Sem ela, o Git vira uma cópia de segurança que você não sabe usar. Com ela, \"o Claude estragou o site\" deixa de ser um susto e vira uma pergunta com resposta: a mudança ruim já virou commit ou não? Já foi para o {{github|GitHub}} ou não? Para cada resposta, há um {{comando}}, e só um deles é perigoso."
      ],
      [
        "p",
        "Antes de voltar, muitas vezes é preciso achar. \"Em que dia o preço mudou?\", \"quem trocou o título?\", \"qual foi o último commit em que o botão funcionava?\" são perguntas que o {{historico|histórico}} responde em segundos, se você souber perguntar, ou pedir ao Claude para perguntar. A aula começa por aí."
      ],
      [
        "p",
        "E existe o atalho do próprio Claude Code: o {{checkpoint}}, que você desfaz com {{rewind|/rewind}}. Ele ajuda muito, mas não cobre tudo, e a aula compara os dois no fim, para você saber quando cada um serve."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao álbum de fotos da aula 3.1, com a mesa de trabalho ao lado, onde está o rascunho que ainda não virou foto. Voltar no tempo tem quatro gestos. **{{git-restore|Restore}}** é rasgar o rascunho da mesa e voltar ao que mostra a última foto: o rascunho nunca foi fotografado, então some. **{{git-revert|Revert}}** é colar no álbum uma foto nova, que desfaz a anterior: nada é arrancado, e quem olhar o álbum vê o erro e o conserto. **{{git-reset|Reset --hard}}** é arrancar as últimas páginas do álbum e, de quebra, varrer a mesa: o rascunho vai junto. **{{git-stash|Stash}}** é guardar o rascunho numa gaveta e deixar a mesa limpa, para pegar de volta depois. E existe o **caderninho do fotógrafo**, o {{reflog}}, que anota cada vez que você mexeu nas páginas, inclusive as arrancadas."
      ],
      [
        "quebra",
        "Página arrancada de um álbum de papel vai para o lixo na hora; no Git, o commit arrancado pelo reset continua guardado por um tempo, e o caderninho diz onde está. Já o rascunho que nunca virou foto não está em caderninho nenhum: o Git nunca o viu. E o álbum desta analogia é o do seu PC: se você já mandou as páginas para o GitHub, arrancá-las aqui não as tira de lá, e os dois álbuns passam a discordar."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Antes de voltar: ache onde mudou"
      ],
      [
        "p",
        "Os exemplos usam uma página pequena, com quatro commits. O `git log --oneline` mostra o álbum, do mais novo para o mais antigo:"
      ],
      [
        "saida",
        "de516d5 Rodapé com contato\nc2eca91 Preço de lançamento: R$ 39 até o fim do mês\n29ada4f Botão verde, que chama mais atenção\n8fb1373 Página inicial"
      ],
      [
        "p",
        "Aqui as mensagens são boas, e dá para achar a mudança de preço lendo. Mas, com cinquenta commits de mensagem vaga, ler não basta. O `git log -S` procura no conteúdo: ele lista os commits em que um texto apareceu ou sumiu. No {{powershell|PowerShell}}, use aspas simples quando o texto tiver cifrão, que é um caractere especial ali. O comando `git log -S 'R$ 39' --oneline` respondeu:"
      ],
      [
        "saida",
        "c2eca91 Preço de lançamento: R$ 39 até o fim do mês"
      ],
      [
        "p",
        "O preço R$ 39 entrou nesse commit. Com `git log -S 'R$ 49' --oneline`, aparecem dois: `c2eca91` e `8fb1373`, porque o R$ 49 entrou na página inicial e saiu na mudança de preço. E `git log -S 'Preço' --oneline` mostra só `8fb1373`: a palavra \"Preço\" entrou na página inicial e, depois, nunca mais mudou de quantidade. O `-S` conta quantas vezes o texto aparece; ele não acha um commit em que a linha mudou, mas o texto procurado continuou lá."
      ],
      [
        "p",
        "Achado o commit, o `git show` com o nome dele mostra quem fez, quando e o que mudou. Saída real:"
      ],
      [
        "saida",
        "commit c2eca91c9327e2e9212ee79410c6a31829106848\nAuthor: SeuNome <voce@exemplo.com>\nDate:   Tue Oct 27 09:05:00 2026 -0300\n\n    Preço de lançamento: R$ 39 até o fim do mês\n\ndiff --git a/index.html b/index.html\nindex 3d0a85a..ba9cc23 100644\n--- a/index.html\n+++ b/index.html\n@@ -1,4 +1,4 @@\n <h1>Curso de Finanças</h1>\n <p>Aprenda juros compostos do zero.</p>\n-<p>Preço: R$ 49</p>\n+<p>Preço: R$ 39</p>\n <button class=\"verde\">Comprar</button>"
      ],
      [
        "p",
        "Outro jeito de perguntar é linha por linha: o `git blame index.html` diz, para cada linha do arquivo, o último commit que a mudou, o autor e a data:"
      ],
      [
        "saida",
        "^8fb1373 (SeuNome 2026-10-20 10:12:00 -0300 1) <h1>Curso de Finanças</h1>\n^8fb1373 (SeuNome 2026-10-20 10:12:00 -0300 2) <p>Aprenda juros compostos do zero.</p>\nc2eca91c (SeuNome 2026-10-27 09:05:00 -0300 3) <p>Preço: R$ 39</p>\n29ada4f2 (SeuNome 2026-10-22 15:40:00 -0300 4) <button class=\"verde\">Comprar</button>\nde516d5d (SeuNome 2026-10-30 18:21:00 -0300 5) <p>Dúvidas: contato pelo site</p>"
      ],
      [
        "p",
        "A linha 3, a do preço, foi mudada pela última vez em 27/10, no `c2eca91`. O `^` na frente de `8fb1373` marca o primeiro commit do álbum. Você não precisa digitar nada disso: o pedido \"em que commit o preço da página mudou? Use git log -S e me mostre a saída exata\" faz o Claude {{rodar}} e mostrar. O seu trabalho é ler a resposta."
      ],
      [
        "h3",
        "Restore: jogar fora o que ainda não virou commit"
      ],
      [
        "p",
        "Primeiro caso: o Claude estragou o `index.html`, e não fez commit. O `git status` mostra `modified: index.html`, e o `git diff --stat`, o tamanho do estrago:"
      ],
      [
        "saida",
        " index.html | 5 +----\n 1 file changed, 1 insertion(+), 4 deletions(-)"
      ],
      [
        "p",
        "O conserto é `git restore index.html`, que o próprio `git status` sugere na linha `(use \"git restore <file>...\" to discard changes in working directory)`, ou seja, \"use git restore com o nome do arquivo para descartar as mudanças na pasta\". Ele não responde nada; depois dele, o `git status` diz `nothing to commit, working tree clean`, e o arquivo voltou a ser o da última foto. O `git restore` é rápido e certeiro, mas apaga de vez a mudança descartada: o Git nunca a guardou. Antes de rodar, tenha certeza de que nada ali presta."
      ],
      [
        "p",
        "Um caso que engana: o `git restore` copia o arquivo da lista da próxima foto, a {{area-de-preparacao|área de preparação}}, e não do último commit. Sem `git add`, as duas são iguais, e tudo funciona como acima. Mas, se o estrago já passou por um `git add`, o que o Claude costuma fazer, ele não muda nada: no teste, depois de um `git add` e do `git restore index.html`, o `git status --short` continuou mostrando `M  index.html`, com o M na primeira coluna, a da lista, e o arquivo continuou estragado. O comando para esse caso é `git restore --staged --worktree index.html`, que tira a mudança da lista e da pasta: no teste, ele não respondeu nada, e o `git status` seguinte disse `nothing to commit, working tree clean`, com o arquivo de volta à última foto."
      ],
      [
        "p",
        "O restore também traz de volta um arquivo como ele era num commit antigo, sem mexer no resto. No teste, `git restore --source=8fb1373 index.html` deixou o arquivo exatamente como na página inicial, com o preço de R$ 49, e o `git status` passou a mostrar essa volta como uma mudança, pronta para um commit novo, se você quiser ficar com ela."
      ],
      [
        "h3",
        "Revert: desfazer um commit com outro commit"
      ],
      [
        "p",
        "Segundo caso: o Claude estragou e fez commit, com a mensagem \"Novo layout da página\". O conserto seguro é o `git revert`: ele cria um commit novo, o contrário do commit ruim. Com `git revert --no-edit HEAD`, em que {{head|HEAD}} é o último commit e o `--no-edit` aceita a mensagem padrão sem abrir editor, a saída real foi:"
      ],
      [
        "saida",
        "[main a65356a] Revert \"Novo layout da página\"\n Date: Sat Oct 31 11:30:00 2026 -0300\n 1 file changed, 4 insertions(+), 1 deletion(-)"
      ],
      [
        "p",
        "E o álbum ficou assim:"
      ],
      [
        "saida",
        "a65356a Revert \"Novo layout da página\"\n469ba1b Novo layout da página\nde516d5 Rodapé com contato\nc2eca91 Preço de lançamento: R$ 39 até o fim do mês\n29ada4f Botão verde, que chama mais atenção\n8fb1373 Página inicial"
      ],
      [
        "p",
        "O commit ruim continua no álbum, e logo acima está o que o desfaz. O arquivo voltou a ser o de antes do erro. Por que isso é o seguro: nada foi arrancado, então, se você já tinha feito {{push}}, basta mandar o revert também, e o GitHub fica igual ao seu PC. É o comando para \"desfiz, e quero que fique registrado\". Dá para reverter um commit mais antigo, pelo nome; se os commits depois dele mexeram nas mesmas linhas, aparece um {{conflito}}, e você resolve como na aula 3.4."
      ],
      [
        "h3",
        "Reset --hard: arrancar páginas (o perigoso)"
      ],
      [
        "p",
        "Terceiro caso: um commit \"Faixa de promoção\" que você quer simplesmente apagar. O `git reset` com `--hard` volta o nome da {{branch}} para trás e deixa a pasta igual àquele ponto. O `HEAD~1` quer dizer \"uma foto antes do HEAD\". Saída real de `git reset --hard HEAD~1`:"
      ],
      [
        "saida",
        "HEAD is now at a65356a Revert \"Novo layout da página\""
      ],
      [
        "p",
        "O commit da faixa sumiu do `git log`. O perigo está no `--hard`: além de arrancar o commit, ele apaga todas as mudanças sem commit nos arquivos que o Git acompanha, em toda a pasta, sem perguntar. Arquivos novos que nunca passaram por `git add` ficam: no teste, um `ideias.txt` sem commit continuou na pasta depois do reset. Já um arquivo novo que passou por `git add`, como acontece depois de um `git add .` do Claude, é apagado da pasta: em outro teste, com dois arquivos novos, o `novo-staged.txt`, que tinha passado por `git add`, sumiu, e só o `novo-solto.txt` ficou. Duas regras: nunca rode `reset --hard` com mudança sem commit na pasta, e nunca rode em commits que já foram para o GitHub; para esses, use o revert."
      ],
      [
        "h3",
        "Reflog: o caderninho que acha o que foi arrancado"
      ],
      [
        "p",
        "O commit arrancado pelo reset não some na hora. O reflog registra cada vez que a branch mudou de lugar. Depois de arrancar a \"Faixa de promoção\", `git reflog -3` mostrou:"
      ],
      [
        "saida",
        "a65356a HEAD@{0}: reset: moving to HEAD~1\nb4472f7 HEAD@{1}: commit: Faixa de promoção\na65356a HEAD@{2}: revert: Revert \"Novo layout da página\""
      ],
      [
        "p",
        "Leia de cima para baixo: agora (`HEAD@{0}`) você está depois do reset; um passo antes (`HEAD@{1}`), estava no commit da faixa, o `b4472f7`; dois passos antes (`HEAD@{2}`), no revert. Repare que o `HEAD@{0}` e o `HEAD@{2}` têm o mesmo nome, `a65356a`, o mesmo do `HEAD is now at` acima: o reset levou a branch de volta à foto em que ela estava antes da faixa. Para trazer a faixa de volta, `git reset --hard 'HEAD@{1}'` respondeu `HEAD is now at b4472f7 Faixa de promoção`, e o commit voltou ao `git log`. As aspas simples são obrigatórias no PowerShell, porque as chaves têm significado especial ali: sem elas, o PowerShell entende o `{1}` como um bloco de comandos e entrega ao Git outra coisa, e o Git reclama de uma opção que não conhece. No Windows PowerShell 5.1, a resposta real começa assim e continua com uma lista longa de opções, cortada aqui:"
      ],
      [
        "saida",
        "error: unknown switch `e'\nusage: git reset [--mixed | --soft | --hard | --merge | --keep] [-q] [<commit>]\n   or: git reset [-q] [<tree-ish>] [--] <pathspec>...\n   or: git reset [-q] [--pathspec-from-file [--pathspec-file-nul]] [<tree-ish>]\n   or: git reset --patch [<tree-ish>] [--] [<pathspec>...]\n   or: DEPRECATED: git reset [-q] [--stdin [-z]] [<tree-ish>]"
      ],
      [
        "p",
        "O reflog tem limites. Ele fica só no seu PC. E guarda por um tempo: segundo a documentação do Git, as entradas de commits que saíram de todo caminho expiram, por padrão, em 30 dias. E, acima de tudo, ele só conhece commits: o que nunca virou commit não aparece nele."
      ],
      [
        "h3",
        "Stash: a gaveta"
      ],
      [
        "p",
        "Às vezes você não quer jogar fora nem guardar num commit: quer só tirar da mesa por um tempo, por exemplo para trocar de branch, como na mensagem de erro da aula 3.4. O `git stash` guarda as mudanças sem commit e deixa a pasta limpa. Saída real, com a faixa de volta e uma frase nova sem commit no `index.html`:"
      ],
      [
        "saida",
        "Saved working directory and index state WIP on main: b4472f7 Faixa de promoção"
      ],
      [
        "p",
        "\"WIP\" é \"trabalho em andamento\". O `git stash list` mostra a gaveta, com a linha `stash@{0}: WIP on main: b4472f7 Faixa de promoção`, e o `git stash pop` devolve as mudanças à pasta e esvazia a gaveta, terminando com a linha `Dropped refs/stash@{0}` e um código entre parênteses. Se o que volta da gaveta bater de frente com uma mudança feita depois, o pop dá conflito, como na aula 3.4, e avisa `The stash entry is kept in case you need it again.`: a gaveta fica guardada até você resolver. Um cuidado: por padrão, a gaveta guarda mudanças em arquivos que o Git já acompanha e arquivos novos que já passaram por `git add`; os arquivos novos que nunca passaram por `git add` ficam na pasta, fora da gaveta."
      ],
      [
        "h3",
        "Checkpoint do Claude Code ou Git?"
      ],
      [
        "p",
        "O Claude Code tira um checkpoint antes de cada pedido seu que começa um turno, e o `/rewind`, ou `Esc` duas vezes com a caixa de texto vazia, abre o menu para voltar. A documentação lista as opções: restaurar {{codigo|código}} e conversa, só a conversa ou só o código, além de resumir parte da conversa. É o jeito mais rápido de desfazer o que o Claude acabou de fazer nesta sessão. Mas a mesma documentação lista os limites: um arquivo mudado só por comandos do {{terminal}} não é rastreado; edições de {{subagente|subagentes}} em geral não voltam; mudanças que você fez fora do Claude Code normalmente não são capturadas; e os arquivos guardados são apagados cerca de 30 dias depois. E diz, com todas as letras, que o checkpoint não substitui o controle de versão."
      ],
      [
        "tabela",
        {
          "colunas": [
            "",
            "Checkpoint (/rewind)",
            "Git"
          ],
          "linhas": [
            [
              "Quem tira a foto",
              "O Claude Code, sozinho, a cada pedido",
              "Você, ou o Claude quando você pede"
            ],
            [
              "O que cobre",
              "O que o Claude editou com as ferramentas dele",
              "A pasta inteira, de quem quer que tenha mudado"
            ],
            [
              "Quanto dura",
              "Cerca de 30 dias",
              "Para sempre, enquanto o {{repositorio|repositório}} existir"
            ],
            [
              "Onde fica",
              "Só no seu PC",
              "No PC e, com push, no GitHub"
            ],
            [
              "Melhor para",
              "Desfazer o último pedido, agora",
              "Qualquer volta, de qualquer dia"
            ]
          ]
        }
      ],
      [
        "h3",
        "Qual usar: o resumo"
      ],
      [
        "lista",
        [
          "**A mudança ruim não virou commit**: `git restore` no arquivo; se ela já passou por `git add`, `git restore --staged --worktree`. Perde de vez a mudança descartada, e é isso que você quer.",
          "**A mudança ruim virou commit, enviado ou não**: `git revert`. Nada se perde, e o histórico mostra o erro e o conserto.",
          "**Commits ruins só no PC, e nada sem commit na pasta**: `git reset --hard`. Os commits arrancados ficam no reflog por um tempo.",
          "**Quer tirar o trabalho da mesa sem decidir agora**: `git stash`, e depois `git stash pop`.",
          "**Arrancou o que não devia**: `git reflog` e `git reset --hard` com o `HEAD@{n}` certo, entre aspas simples.",
          "**O Claude acabou de errar nesta sessão, só com as ferramentas dele**: o `/rewind` é o mais rápido."
        ]
      ],
      [
        "p",
        "E o pedido que protege você de um reset apressado, inclusive quando o Claude Code roda comandos sem pedir confirmação: \"Antes de qualquer git reset, me mostre o git status e o git log --oneline -5 e diga o que vai se perder. Prefira git revert.\" A aula 7.5 ensina a deixar esse tipo de regra escrita para todas as sessões."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar ou pagar alguma coisa?** Não: tudo isso já vem no Git, que é gratuito.",
          "**E se eu rodar o comando errado?** Se foi um reset, o reflog quase sempre traz os commits de volta. Se foi um restore ou um reset com mudanças sem commit, o que não tinha commit se perdeu para o Git; o `/rewind` pode ajudar, se quem fez a mudança foi o Claude nesta sessão.",
          "**Posso voltar o site inteiro para como estava na semana passada?** Pode, sem apagar nada: peça \"faça git revert de todos os commits depois do c2eca91\". Cada um vira um commit novo de desfazer.",
          "**E o que já está no GitHub?** Use revert e mande com push. Reset em commits já enviados faz o seu PC e o GitHub discordarem, e o push seguinte é recusado."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o reset sem --hard e a última chance do git add",
          "blocos": [
            [
              "p",
              "O reset tem modos mais brandos. Com `--soft`, ele volta o nome da branch, mas deixa as mudanças daqueles commits na lista da próxima foto: serve para refazer os últimos commits em um só. Sem modo nenhum, deixa as mudanças na pasta, fora da lista. Só o `--hard` apaga."
            ],
            [
              "p",
              "Uma última chance: se a mudança sem commit tinha passado por um `git add` antes do reset, o Git chegou a guardar uma cópia do arquivo, solta, sem commit. No teste, depois de um `git add` e um `git reset --hard`, o comando `git fsck --lost-found` respondeu `dangling blob d7c962c60dd4f20c99da4c3c7363c39f6712aa82`, \"objeto solto\", e `git show` com esse nome mostrou o texto perdido inteiro. Num repositório com mais vaivém, como o desta aula, depois de resets e stashes, aparecem várias linhas, algumas com `dangling commit`; o texto perdido está numa das que dizem `blob`. Sem o `git add`, não há cópia nenhuma."
            ],
            [
              "p",
              "O `git clean` apaga arquivos novos que o Git não acompanha, os que o reset deixa. Com `-n`, ele só mostra o que apagaria, sem apagar: no teste, `git clean -n` respondeu `Would remove ideias.txt`. Sem o `-n`, apaga de vez."
            ]
          ]
        }
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "A pasta tem uma mudança sem commit no index.html, que você quer guardar, e o último commit é ruim. Qual destes três comandos você acha que perde trabalho de vez, e qual é o seguro?",
          "codigo": "git restore index.html\ngit revert HEAD\ngit reset --hard HEAD~1",
          "linguagem": "texto",
          "resposta": "Dois perdem a sua mudança sem commit. O `git restore index.html` descarta exatamente essa mudança, por definição. O `git reset --hard HEAD~1` arranca o commit ruim e apaga todas as mudanças sem commit dos arquivos acompanhados, a sua inclusive. O `git revert HEAD` desfaz só o commit ruim, com um commit novo; se a sua mudança estiver no mesmo arquivo que o commit ruim mexeu, o Git recusa, com `error: Your local changes to the following files would be overwritten by merge:` e `fatal: revert failed`, e pede que você guarde antes, com commit ou stash. Nada se perde nessa recusa. O seguro é guardar a mudança e depois reverter."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "O Claude fez um commit que quebrou a página, e você já tinha feito push para o GitHub. Qual comando desfaz sem bagunçar o histórico do GitHub?",
          "o": [
            [
              "git revert HEAD, que cria um commit novo para desfazer o ruim",
              "Isso. Depois é só fazer o push do revert, e o GitHub fica igual ao seu PC."
            ],
            [
              "git reset --hard HEAD~1, que arranca o commit ruim do álbum",
              "Arranca no PC, mas o commit já está no GitHub: os dois passam a discordar, e o push é recusado."
            ],
            [
              "git restore index.html, que volta o arquivo à última foto",
              "A última foto é a ruim: o restore só descarta mudanças sem commit. Não desfaz commit nenhum."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Guardei as suas mudanças sem commit com git stash, rodei o git reset --hard e devolvi tudo com git stash pop. Nada se perdeu.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o reset --hard apaga também o que está na gaveta do stash",
              "A gaveta fica fora da pasta e do álbum: o reset não mexe nela."
            ],
            [
              "Está correta: o reset não alcança a gaveta, e o pop devolve tudo",
              "Isso. A gaveta fica fora da pasta e do álbum, e o reset não mexe nela. Se o pop desse conflito, a gaveta seria mantida até você resolver."
            ],
            [
              "Está errada: o stash guarda só arquivos novos, não mudanças em arquivos",
              "É quase o contrário: por padrão, ele guarda mudanças em arquivos acompanhados, como o index.html, e deixa de fora os novos que nunca passaram por git add."
            ]
          ],
          "c": 1
        }
      ],
      [
        "h2",
        "Erros comuns"
      ],
      [
        "erros",
        [
          [
            "\"O git restore desfaz o último commit.\"",
            "O restore só descarta mudanças sem commit. Para desfazer um commit, revert."
          ],
          [
            "\"O reset --hard é o jeito normal de desfazer.\"",
            "É o perigoso: apaga as mudanças sem commit, sem perguntar. O normal é o revert."
          ],
          [
            "\"Depois do reset, o commit sumiu para sempre.\"",
            "Ele fica no reflog por um tempo. git reflog mostra, e git reset --hard com HEAD@{n} entre aspas traz de volta."
          ],
          [
            "\"O /rewind volta qualquer coisa.\"",
            "Ele não volta arquivos mudados só por comandos, nem mudanças feitas fora do Claude Code, e dura cerca de 30 dias. O Git não tem esses limites."
          ],
          [
            "\"HEAD@{1} deu erro no PowerShell, então o reflog não funciona.\"",
            "É o PowerShell lendo as chaves. Ponha entre aspas simples: 'HEAD@{1}'."
          ]
        ]
      ],
      [
        "h2",
        "Tente lembrar"
      ],
      [
        "lembrar",
        {
          "p": "Quando usar restore, revert e reset, e qual deles perde trabalho?",
          "r": [
            "Restore: mudança sem commit; ela se perde de vez, de propósito.",
            "Revert: commit ruim, enviado ou não; nada se perde.",
            "Reset --hard: arranca commits e apaga as mudanças sem commit dos arquivos acompanhados.",
            "O que nunca virou commit, nem o reflog traz."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Como achar em que commit uma coisa mudou?",
          "r": [
            "git log -S com o texto, entre aspas simples, lista onde ele entrou ou saiu.",
            "git show com o nome do commit mostra autor, data e o {{diff}}.",
            "git blame no arquivo diz o último commit de cada linha."
          ]
        }
      ],
      [
        "h2",
        "Laboratório"
      ],
      [
        "lab",
        {
          "titulo": "Em que commit o preço mudou? E desfaça um estrago",
          "lugar": "No PC, no PowerShell e no Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai criar uma página com quatro commits, perguntar ao Claude em que commit o preço mudou, conferir você mesmo, e depois desfazer dois estragos: um sem commit, com restore, e um com commit, com revert. Precisa do Git instalado e configurado, como na aula 3.3, e do Claude Code, como na aula 0.0. Nada vai para o GitHub. Pelo app: no {{app-desktop|app desktop}} do Claude, aba Code, ambiente Local, use Open folder em C:\\Projetos\\git-tempo depois do passo 2 e faça ali o pedido do passo 5, no lugar dos passos 4 a 6; os outros comandos continuam no PowerShell (caminho não testado). Pelo celular, não dá: o Git roda no seu PC. Os comandos do Git foram rodados de ponta a ponta no Windows PowerShell 5.1, em 02/11/2026; os nomes das fotos no seu PC vão ser outros. Não testado: o passo em que o Claude Code responde, que exige sessão interativa.",
          "naoTestado": "Os passos 4 a 6, com o Claude Code, não foram rodados: exigem sessão interativa. Os comandos do Git foram rodados de ponta a ponta no Windows PowerShell 5.1 em 02/11/2026.",
          "passos": [
            {
              "faz": "Abra o Terminal como na aula 2.2: tecla Windows junto com X, e escolha Terminal.",
              "espera": "Abre o PowerShell, com o cursor piscando depois do caminho da sua pasta."
            },
            {
              "faz": "Crie a pasta, a página e os quatro commits: cole o bloco inteiro.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\git-tempo | Out-Null\nSet-Location C:\\Projetos\\git-tempo\ngit init -b main\nSet-Content index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Preço: R$ 49</p>', '<button>Comprar</button>'; git add .; git commit -m 'Página inicial'\nSet-Content index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Preço: R$ 49</p>', '<button class=\"verde\">Comprar</button>'; git commit -am 'Botão verde, que chama mais atenção'\nSet-Content index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Preço: R$ 39</p>', '<button class=\"verde\">Comprar</button>'; git commit -am 'Preço de lançamento: R$ 39 até o fim do mês'\nSet-Content index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Preço: R$ 39</p>', '<button class=\"verde\">Comprar</button>', '<p>Dúvidas: contato pelo site</p>'; git commit -am 'Rodapé com contato'",
              "espera": "Uma linha \"Initialized empty Git repository\" e quatro saídas de commit, a primeira com \"(root-commit)\"."
            },
            {
              "faz": "Veja o álbum:",
              "cola": "git log --oneline",
              "saida": "371588f Rodapé com contato\n400ad5b Preço de lançamento: R$ 39 até o fim do mês\nc2cf6ee Botão verde, que chama mais atenção\nf2017fc Página inicial",
              "espera": "Quatro linhas, a mais nova no alto. Os nomes de sete letras e números vão ser outros."
            },
            {
              "faz": "Abra o Claude Code nesta mesma pasta:",
              "cola": "claude",
              "espera": "O Claude Code abre no lugar do PowerShell, na pasta C:\\Projetos\\git-tempo, com a caixa para escrever o pedido."
            },
            {
              "faz": "Cole o pedido no Claude Code e aperte Enter:",
              "cola": "Em que commit o preço da página mudou? Use git log -S e me mostre a saída exata, sem resumir.",
              "espera": "O Claude roda um git log -S com o preço e mostra a linha do commit \"Preço de lançamento: R$ 39 até o fim do mês\". Se ele pedir permissão para rodar comandos, aceite. Este passo não foi testado."
            },
            {
              "faz": "Feche o Claude Code para voltar ao PowerShell: digite /exit e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha, e o cursor do PowerShell volta, ainda na pasta C:\\Projetos\\git-tempo. Os próximos comandos vão aqui, no PowerShell."
            },
            {
              "faz": "Confira você mesmo, no PowerShell:",
              "cola": "git log -S 'R$ 39' --oneline",
              "espera": "Uma linha só: a do commit \"Preço de lançamento: R$ 39 até o fim do mês\", o mesmo que o Claude apontou."
            },
            {
              "faz": "Veja quem mudou cada linha:",
              "cola": "git blame index.html",
              "espera": "Quatro linhas; a do preço aponta para o commit do preço de lançamento, com o seu nome e a data de hoje."
            },
            {
              "faz": "Faça de conta que o Claude estragou a página, sem commit:",
              "cola": "Set-Content index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Preço: R$ 0</p>'",
              "espera": "Nada aparece. O arquivo agora tem duas linhas e preço zero."
            },
            {
              "faz": "Confira o estrago:",
              "cola": "git status --short",
              "espera": " M index.html: o arquivo foi modificado e não tem commit."
            },
            {
              "faz": "Jogue o estrago fora:",
              "cola": "git restore index.html",
              "espera": "Nada aparece. O git status --short, se você rodar, não mostra mais nada: o arquivo voltou à última foto."
            },
            {
              "faz": "Agora faça de conta que o estrago virou commit:",
              "cola": "Set-Content index.html -Encoding utf8 -Value '<h1>Curso de Finanças</h1>', '<p>Preço: R$ 0</p>'; git commit -am 'Novo layout da página'",
              "espera": "Uma linha que começa com \"[main\" e termina com \"Novo layout da página\"."
            },
            {
              "faz": "Desfaça com um commit novo:",
              "cola": "git revert --no-edit HEAD",
              "espera": "Uma linha com Revert \"Novo layout da página\", uma linha Date e \"1 file changed, 3 insertions(+), 1 deletion(-)\"."
            },
            {
              "faz": "Veja o álbum de novo:",
              "cola": "git log --oneline -3",
              "espera": "No alto, o Revert; logo abaixo, o commit ruim, que continua registrado; e o rodapé. A página voltou a ser a de antes do estrago."
            }
          ],
          "errado": "se o git log -S não responder nada, confira as aspas simples e o espaço entre R$ e 39. Se o revert responder `error: Your local changes to the following files would be overwritten by merge:` e terminar com `fatal: revert failed`, sobrou alguma edição sem commit no mesmo arquivo: rode git status, e guarde com git stash ou descarte com git restore antes de repetir. Se o revert abrir um editor de texto, faltou o --no-edit: no editor que o Git para Windows abre por padrão, o Vim, aperte Esc, digite :q! e aperte Enter (o Esc sai do modo de digitação, se você tiver digitado algo, e o ponto de exclamação fecha sem gravar o que foi digitado). Se abriu outro editor, como o Bloco de Notas, só feche a janela, sem mudar nada. O editor fecha e o revert termina sozinho, com a frase padrão, igual à do --no-edit. Não repita o comando: um segundo revert desfaria o primeiro, com a mensagem Reapply, e a página voltaria quebrada. Confira com git log --oneline -3: no alto deve estar o Revert."
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado",
          "texto": "Você tinha reescrito a descrição da página no index.html, sem commit. Pediu ao Claude um visual mais limpo, e ele fez um commit no estilo.css que deixou o texto branco no fundo branco. Para desfazer o estrago, alguém rodou git reset --hard HEAD~1. O site voltou ao normal, mas a sua descrição nova sumiu. Abaixo, a saída do reset, do git status e do git reflog, nesta ordem. O que ainda dá para recuperar?",
          "saida": "HEAD is now at 33c6415 Página inicial com estilo\n\nPS> git status\nOn branch main\nnothing to commit, working tree clean\n\nPS> git reflog\n33c6415 HEAD@{0}: reset: moving to HEAD~1\ne3bf94c HEAD@{1}: commit: Deixa o visual mais limpo\n33c6415 HEAD@{2}: commit (initial): Página inicial com estilo",
          "dica": "O problema está na palavra --hard e no que estava na pasta antes do comando. Procure, nas três linhas do reflog, alguma que guarde a descrição nova.",
          "resposta": "O `--hard` voltou o álbum e a pasta. A descrição nova nunca virou commit, nem passou por `git add`, então o Git nunca a guardou: ela não aparece no reflog, e o \"nothing to commit\" confirma que sumiu da pasta. Para o Git, está perdida de vez. O que dá para recuperar é o commit ruim, `e3bf94c`, no `HEAD@{1}`, com `git reset --hard 'HEAD@{1}'`, e ninguém quer esse. O comando certo era o revert: `git revert HEAD` desfaz só o commit do estilo.css e deixa a descrição sem commit no index.html intacta. Ou guardar antes, com `git stash`. Duas chances fora do Git: se quem escreveu a descrição foi o Claude, nesta sessão, com as ferramentas de edição dele, o `/rewind` pode restaurá-la; e, se ela tivesse passado por `git add`, o `git fsck --lost-found` a acharia, como mostra a caixa \"Para ir mais fundo\"."
        }
      ],
      [
        "h2",
        "Simulador"
      ],
      [
        "simulador",
        {
          "id": "branch",
          "titulo": "Voltar no tempo",
          "casos": [
            "restore",
            "revert",
            "reset"
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Pro Git 2.4, Desfazendo coisas (restore)",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Desfazendo-Coisas",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 7.7, Reset desmistificado (--soft, padrão e --hard)",
            "https://git-scm.com/book/pt-br/v2/Ferramentas-do-Git-Reset-Desmistificado",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 7.3, Fazendo stash e limpando",
            "https://git-scm.com/book/pt-br/v2/Ferramentas-do-Git-Fazendo-Stash-e-Limpando",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 7.5, Pesquisando (git log -S)",
            "https://git-scm.com/book/pt-br/v2/Ferramentas-do-Git-Pesquisando-Searching",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pro Git 10.7, Manutenção e recuperação de dados (reflog e fsck)",
            "https://git-scm.com/book/pt-br/v2/Git-Internals-Por-Dentro-do-Git-Manuten%c3%a7%c3%a3o-e-Recupera%c3%a7%c3%a3o-de-Dados",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "git gc: expiração do reflog (30 dias para entradas inalcançáveis, 90 para as demais)",
            "https://git-scm.com/docs/git-gc",
            "oficial",
            "02/11/2026"
          ],
          [
            "git reflog",
            "https://git-scm.com/docs/git-reflog",
            "oficial",
            "02/11/2026"
          ],
          [
            "Checkpoints do Claude Code (/rewind; limites; não substitui o controle de versão), Anthropic",
            "https://code.claude.com/docs/pt/checkpointing",
            "oficial",
            "02/11/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Ache o commit com log -S; sem commit, restore; com commit, revert; reset só com cuidado",
          "Isso. E o reflog acha commits arrancados, mas nunca o que não virou commit."
        ],
        [
          "O reset --hard é o desfazer do Git e não perde nada, porque o reflog guarda tudo para sempre",
          "O reflog guarda commits, não mudanças sem commit, e só por um tempo. O reset --hard apaga o que não tinha commit."
        ],
        [
          "O /rewind do Claude Code substitui o Git para voltar no tempo, em qualquer caso",
          "A própria documentação diz que não substitui: ele não cobre mudanças feitas só por comandos nem fora do Claude, e dura cerca de 30 dias."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Que comando lista os commits em que o texto R$ 39 entrou ou saiu da página?",
        "o": [
          [
            "git blame index.html, procurando o R$ 39",
            "O blame mostra só o último commit de cada linha que existe hoje. Não lista todos os commits em que o texto entrou ou saiu."
          ],
          [
            "git log -S 'R$ 39' --oneline, que busca no conteúdo",
            "Isso. O -S procura no conteúdo dos commits."
          ],
          [
            "git status 'R$ 39', que olha a pasta agora",
            "O status mostra o estado da pasta agora, não o histórico."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você rodou git reset --hard HEAD~1 e percebeu que o commit arrancado era bom. O que faz?",
        "o": [
          [
            "Nada: o commit arrancado pelo reset some de vez do Git",
            "Ele fica no reflog por um tempo. Dá para trazer de volta."
          ],
          [
            "git restore no arquivo, que traz o commit arrancado",
            "O restore mexe em arquivos, não traz commits arrancados."
          ],
          [
            "git reflog, e depois reset --hard para 'HEAD@{1}'",
            "Isso. No PowerShell, com aspas simples: 'HEAD@{1}'."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre revert e reset?",
        "O revert desfaz um commit criando outro, o contrário dele: nada some, e serve até depois do push. O reset volta a branch para trás e, com --hard, apaga também as mudanças sem commit. Na dúvida, revert."
      ],
      [
        "Perdi uma mudança com reset --hard. Tem volta?",
        "Se ela tinha virado commit, sim: git reflog mostra, e git reset --hard com o HEAD@{n} certo, entre aspas simples, traz. Se nunca virou commit, o Git não tem cópia; se passou por git add, o git fsck --lost-found pode achar; se foi o Claude quem fez, nesta sessão, tente o /rewind."
      ],
      [
        "Quando uso o /rewind em vez do Git?",
        "Para desfazer rápido o que o Claude acabou de fazer nesta sessão, com as ferramentas de edição dele. Para qualquer outra volta, de outro dia, de mudança feita por comandos ou por você, use o Git."
      ]
    ]
  }
};
