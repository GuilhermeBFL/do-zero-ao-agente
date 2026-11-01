// Módulo 3 — Git, GitHub e VS Code. Formato dos blocos: ESPEC-site.md, seção 4.
// Saídas de terminal coladas de execuções reais em _testes\git-3-1 (01/11/2026), com o nome trocado por SeuNome.
export const AULAS = {
  '3-1': {
    tempo: 45,
    video: 'c2-git',
    videoTipo: 'conversa',
    abertura: 'Se você já salvou um arquivo como trabalho_final_AGORA_VAI, você já precisava do Git. Esta aula explica o que ele é e o que cada comando faz por baixo; os comandos aparecem para você reconhecer, porque quem digita pode ser o Claude.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'O {{git|Git}} é um programa que guarda o histórico de uma pasta. Em vez de vinte arquivos com nomes parecidos, você tem uma pasta só, com todas as versões guardadas dentro, e pode voltar a qualquer uma delas. Quase todo projeto de programação do mundo usa Git, e o {{claude-code|Claude Code}} também: quando você pede uma mudança grande, ele costuma fazer um {{commit}} antes, para ter para onde voltar.'],
      ['p', 'Para quem não lê código, o Git é ainda mais importante do que para quem lê. Você vai pedir ao Claude mudanças que não consegue conferir linha por linha. A rede de segurança é o histórico: se a mudança quebrou alguma coisa, você volta à versão anterior em um comando, sem precisar entender o que deu errado. Sem Git, "voltar" significa torcer para ter uma cópia em algum lugar.'],
      ['p', 'Ele funciona melhor com arquivos de texto, como {{codigo|código}}, {{markdown|Markdown}} e {{html|HTML}}, porque consegue mostrar exatamente que linha mudou. Em Word e Excel, ele guarda as versões, mas só diz "mudou", sem mostrar o quê. E ele não foi feito para arquivos enormes: os vídeos deste curso, por exemplo, ficam fora do repositório de propósito.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'Imagine que, a cada avanço, você tira uma foto da pasta inteira e escreve no verso o que mudou: "primeira versão", "exemplo numérico", "gráfico novo". Essa foto é o {{commit}}. O álbum com todas as fotos, em ordem, é o {{historico|histórico}}. A pasta que você fotografa é o {{repositorio|repositório}}. Se algo der errado, você abre o álbum, escolhe uma foto antiga e a pasta volta a ficar exatamente como estava naquele dia.'],
      ['quebra', 'Foto dá ideia de algo pesado, e não é: um arquivo que não mudou não é copiado de novo, porque o Git só aponta para a versão que já guardou. Mil fotos de uma pasta que quase não muda ocupam pouco mais que a pasta. E a foto só existe se você tirar: o que ficou sem commit pode se perder. O Git não fotografa sozinho.'],
      ['h2', 'Como funciona'],
      ['h3', 'O repositório: uma pasta com memória'],
      ['p', 'Qualquer pasta vira um repositório com um comando, `git init`. O que ele faz é criar, dentro da pasta, uma subpasta escondida chamada `.git`. É ali que ficam todas as fotos, o álbum, os nomes dos caminhos paralelos, tudo. Os seus arquivos continuam onde estavam e abrem do mesmo jeito. Se você apagar a pasta `.git`, a pasta volta a ser uma pasta comum, e o histórico some. Por isso a regra: não mexa na `.git`. Quem mexe nela é o Git.'],
      ['p', 'O Git {{rodar|roda}} no seu computador, sem internet. Ele é um {{comando}} do {{terminal}}, a janela em que você conversa com o computador por texto, e não tem janela própria: o VS Code e o Claude Code é que mostram o resultado de um jeito bonito. Se você rodar um comando do Git fora de um repositório, ele avisa na hora. Esta é a saída real:'],
      ['saida', 'fatal: not a git repository (or any of the parent directories): .git'],
      ['p', 'Em português: "não é um repositório Git (nem esta pasta nem as de cima)". Quase sempre significa que você está na pasta errada.'],
      ['h3', 'Os três lugares: a pasta, a área de preparação e o álbum'],
      ['p', 'Aqui está a parte que confunde todo mundo, então vamos devagar. O Git enxerga três lugares. O primeiro é a **pasta** em si, onde você e o Claude editam. O segundo é a **área de preparação**, uma lista de "o que vai entrar na próxima foto". O terceiro é o **álbum**, com as fotos já tiradas. Um arquivo salvo no disco está só no primeiro lugar. Para chegar ao álbum, ele passa pela lista.'],
      ['p', 'O comando `git status` mostra em que lugar cada arquivo está, e não muda nada. Veja a saída real de um repositório recém-criado, com um arquivo novo chamado `estudo.md` que ainda não entrou em foto nenhuma:'],
      ['saida', 'On branch main\n\nNo commits yet\n\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\testudo.md\n\nnothing added to commit but untracked files present (use "git add" to track)'],
      ['p', 'Linha por linha: "On branch main" diz em que caminho você está (já chegamos lá). "No commits yet" diz que o álbum está vazio. "Untracked files" lista os arquivos que o Git **ainda não acompanha**: ele vê que existem, mas não vai fotografar. E a última linha explica o que fazer: use `git add` para começar a acompanhar.'],
      ['p', 'O `git add .` coloca na lista de preparação tudo o que mudou na pasta. O ponto significa "tudo nesta pasta". Ele **não escolhe** nada: leva o que mudou, inclusive o que você não queria, como um arquivo com senha. É por isso que a lista do que deve ficar de fora, o {{gitignore|.gitignore}}, vem antes do primeiro `git add`, e a aula 3.6 é inteira sobre isso.'],
      ['p', 'O `git commit -m "Primeira versão"` tira a foto do que está na lista. O `-m` é a frase que vai no verso. A saída real:'],
      ['saida', '[main (root-commit) f793b0f] Primeira versão\n 1 file changed, 3 insertions(+)\n create mode 100644 estudo.md'],
      ['p', 'O `f793b0f` é o nome da foto, que o Git inventa a partir do conteúdo. "1 file changed, 3 insertions" diz que um arquivo mudou, com três linhas acrescentadas. Agora edite o `estudo.md` e rode `git status` de novo:'],
      ['saida', 'On branch main\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\tmodified:   estudo.md\n\nno changes added to commit (use "git add" and/or "git commit -a")'],
      ['p', 'Mudou o aviso: agora é "modified", porque o Git já conhece o arquivo e viu que ele mudou. "Changes not staged for commit" é a tradução de "mudanças que ainda não estão na lista da próxima foto". O caminho é o mesmo: `git add .` e depois `git commit -m "Exemplo numérico"`.'],
      ['h3', 'O commit por dentro'],
      ['p', 'Cada commit guarda quatro coisas: a foto da pasta inteira naquele momento, quem tirou (nome e e-mail, que você configura uma vez), a data, e a frase do verso. E recebe um nome, uma sequência de letras e números como `5526a28`, calculada a partir do conteúdo: se qualquer letra da foto mudar, o nome muda. É por esse nome que você volta a uma versão antiga.'],
      ['p', 'O álbum se lê com `git log --oneline`, que mostra uma linha por foto, com a mais nova no alto. Saída real depois de três commits:'],
      ['saida', 'c96902d Gráfico novo\n5526a28 Exemplo numérico\nf793b0f Primeira versão'],
      ['p', 'Repare que a frase do verso importa. "Gráfico novo" diz o que aconteceu; "mudanças" ou "aaa" não dizem nada, e daqui a um mês você não vai saber a que foto voltar. Quando o Claude faz commit por você, peça frases assim: curtas, dizendo o que mudou.'],
      ['h3', 'GitHub: a cópia na internet'],
      ['p', 'Tudo até aqui aconteceu no seu computador. O {{github|GitHub}} é outra coisa: um site, de outra empresa (hoje é da Microsoft), que guarda uma cópia do seu álbum em um {{servidor}} ligado o tempo todo. A conta é gratuita e os repositórios podem ser privados de graça. Mandar as fotos para lá é o {{push}}. Trazer de lá para o PC é o {{pull}}. Se o seu computador queimar, a cópia continua no site; se você trabalha em dois computadores, cada um puxa as fotos do outro pelo site.'],
      ['p', 'O repositório precisa saber para onde mandar. Esse endereço se chama **remote**, e por convenção leva o apelido `origin`. Sem ele, o `git push` responde assim, de verdade:'],
      ['saida', 'fatal: No configured push destination.\nEither specify the URL from the command-line or configure a remote repository using\n\n    git remote add <name> <url>\n\nand then push using the remote name\n\n    git push <name>'],
      ['p', 'Ou seja: "não sei para onde mandar; configure um remote". Na primeira vez, o comando completo é `git push -u origin main`, que manda as fotos e já grava que, daqui em diante, `git push` sozinho basta. A aula 3.3 faz isso no seu PC, e o Claude pode digitar por você.'],
      ['p', 'Uma confusão comum: o GitHub não é cópia automática. Ele só tem o que você mandou com push. Commit sem push é foto que existe só no seu PC.'],
      ['h3', 'Branch e merge: testar sem medo'],
      ['p', 'Quer experimentar uma ideia sem mexer na versão que funciona? Crie uma {{branch}}, um caminho paralelo. Por baixo, uma branch é só um nome apontando para uma foto, então criar uma custa nada e leva um instante. O comando `git switch -c ideia-nova` cria o caminho e já muda para ele. Dali em diante, as fotos novas vão para `ideia-nova`, e o caminho principal, chamado `main`, fica exatamente como estava.'],
      ['p', 'Deu certo? Você volta para a `main` com `git switch main` e junta os dois caminhos com `git merge ideia-nova`. Isso é o {{merge}}. Quando a `main` não mudou enquanto você trabalhava, o Git só avança o ponteiro, e a saída real é esta:'],
      ['saida', 'Updating c96902d..8ed95ff\nFast-forward\n estudo.md | 2 ++\n 1 file changed, 2 insertions(+)'],
      ['p', '"Fast-forward" quer dizer "avancei direto, sem conflito". Deu errado? Você joga a branch fora, e a `main` continua intacta. E quando os dois caminhos mudaram a mesma linha, o Git para e pede que você escolha: é o conflito, que a aula 3.4 ensina a resolver com calma. Repositórios antigos chamam o caminho principal de `master` em vez de `main`; é só o nome.'],
      ['h3', 'Por que isso importa para quem usa o Claude Code'],
      ['p', 'O Claude Code roda esses comandos por você quando você pede "faça um commit" ou "mande para o GitHub". Entender o que cada um faz muda a sua posição: você deixa de aceitar "pronto, salvei" e passa a saber conferir. Se ele disse "fiz o commit", está no seu PC. Se disse "fiz o push", está no GitHub. Se disse "criei uma branch", a `main` não foi tocada.'],
      ['p', 'O Claude Code também tira fotos automáticas dos seus arquivos antes de mexer neles, os {{checkpoint|checkpoints}}, que você desfaz com `/rewind`. Elas ajudam no dia a dia, mas não substituem o Git: duram cerca de 30 dias, não cobrem tudo o que um comando altera, e não vão para lugar nenhum. A aula 7.15 mostra os limites. A regra prática é: antes de um pedido grande, commit.'],
      ['h3', 'A regra de ouro'],
      ['p', 'Nunca coloque senha ou {{chave-api|chave de API}} em um commit. Apagar depois não resolve: a chave continua nas fotos antigas, e qualquer pessoa com acesso ao repositório consegue abrir o álbum. A proteção vem antes, com o `.gitignore`, e ele só vale para arquivo **novo**: o que já entrou em uma foto continua sendo acompanhado, mesmo que você o coloque na lista depois.'],
      ['p', 'Se a chave já foi para um commit, a ordem certa é: primeiro {{revogar}} a chave, ou seja, cancelá-la no site de onde ela veio; depois criar outra; depois trocar nos programas que usavam; e só então, se ainda fizer sentido, limpar o histórico. Em repositório **público**, a Anthropic desativa sozinha uma chave do Claude que apareça no GitHub e avisa por e-mail. Em repositório privado de conta pessoal comum, o GitHub não procura segredos: a defesa é sua. O módulo 11 trata disso inteiro.'],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Preciso instalar o Git?** Para o Claude Code rodar esses comandos, o Git precisa estar no PC. A aula 3.3 confere se já está e instala se não estiver. É gratuito.',
        '**Custa alguma coisa?** Não. O Git é gratuito e de código aberto. A conta do GitHub também, inclusive com repositórios privados.',
        '**E se eu errar um comando?** Depois de um commit, nada se perde: você volta à foto. O comando mais perigoso é o que apaga mudanças que ainda não foram fotografadas. A aula 3.9 ensina a voltar no tempo com segurança.',
        '**Onde ficam as fotos?** Na pasta escondida `.git`, dentro do repositório. Não abra nem apague nada ali.',
        '**O que é o "origin"?** O apelido do endereço do GitHub para o qual o seu repositório manda as fotos. Você só vai ver esse nome em mensagens de erro.',
        '**Posso usar o Git em uma pasta com Word e Excel?** Pode, e ele guarda as versões. Só não vai mostrar o que mudou dentro do arquivo, porque esses formatos não são texto puro.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: de onde veio o Git e por que os nomes são estranhos', blocos: [
        ['p', 'O Git foi criado em 2005 por Linus Torvalds, o criador do Linux, para organizar milhares de pessoas trabalhando no mesmo código. Por isso ele é tão bom em caminhos paralelos e em juntar trabalho de gente diferente, e por isso a terminologia parece feita para engenheiros: era.'],
        ['p', 'O nome de cada commit, como `f793b0f`, é o começo de uma sequência de 40 caracteres calculada a partir do conteúdo, um "hash". Dois commits com conteúdo diferente nunca têm o mesmo nome, e um commit alterado por fora ganha outro nome na hora. É isso que faz o histórico ser confiável.'],
        ['p', 'O GitHub não é o único site do tipo: GitLab e Bitbucket fazem o mesmo. Este curso usa o GitHub porque é onde o Claude Code e a maioria dos projetos abertos estão.']
      ] }],
      ['h2', 'Preveja antes de ver'],
      ['prever', {
        pergunta: 'Este é o resultado de um comando do Git. O que você acha que esta lista mostra?',
        codigo: 'c96902d Gráfico novo\n5526a28 Exemplo numérico\nf793b0f Primeira versão',
        linguagem: 'texto',
        resposta: 'É o álbum: cada linha é um commit, com o mais novo no alto. O código à esquerda é o nome daquela foto, e é por ele que você volta a uma versão antiga. A frase à direita é o verso da foto. O comando é `git log --oneline`.'
      }],
      ['h2', 'Coloque na ordem'],
      ['parsons', {
        p: 'Coloque os comandos na ordem certa para salvar e enviar o seu trabalho.',
        linhas: ['git status', 'git add .', 'git commit -m "gráfico novo"', 'git push'],
        notas: ['Só olha: mostra o que mudou desde a última foto', 'Coloca na lista da próxima foto tudo o que mudou', 'Tira a foto, com a frase do verso', 'Manda as fotos para o GitHub']
      }],
      ['h2', 'Pare e responda'],
      ['pergunta', {
        p: 'Você colocou sua chave em um commit, percebeu e apagou a linha em um commit novo. O que acontece?',
        o: [
          ['A chave sumiu de vez, porque o arquivo atual não tem mais ela e o commit novo substitui o antigo','O arquivo atual não tem, mas o commit antigo continua no histórico, e qualquer um com acesso consegue ver.'],
          ['A chave continua no histórico, então precisa ser revogada e trocada', 'Isso. Primeiro revogue a antiga, depois crie outra. Só limpar o histórico não basta.'],
          ['O GitHub detecta o problema e apaga a chave sozinho', 'Não apaga: o commit continua lá. Em repositório público ele pode bloquear o envio ou avisar. Em repositório privado de conta pessoal comum, essa verificação não existe.']
        ],
        c: 1
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'Você pediu "salve o meu trabalho" e o Claude respondeu: "Pronto, fiz o commit com a mensagem Gráfico novo. Seu trabalho já está guardado no GitHub." O que está errado?',
        o: [
          ['Nada: commit é justamente o que manda o trabalho para o GitHub', 'O commit tira a foto no seu computador. Quem manda para o GitHub é o push.'],
          ['O commit ficou só no PC; sem push, nada foi para o GitHub', 'Isso. Peça "faça o push" ou confira com git status, que diz se há commits ainda não enviados.'],
          ['A mensagem do commit está errada, porque deveria ser em inglês', 'A frase do verso pode ser em qualquer língua. O erro é outro.']
        ],
        c: 1
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"Salvei o arquivo, então está no Git."', 'Salvar grava no disco. Para o Git guardar, precisa de `git add` e `git commit`.'],
        ['"Fiz o commit, então está no GitHub."', 'O commit fica no seu computador. Só o `git push` manda para o GitHub.'],
        ['"Apaguei a senha do arquivo, então sumiu."', 'A senha continua nas fotos antigas. Revogue a senha primeiro, depois cuide do histórico.'],
        ['"Vou decorar todos os comandos."', 'Os do dia a dia são quatro, e o Claude pode rodá-los. Entender o que cada um faz vale mais que decorar.'],
        ['"O git add . escolhe o que é importante."', 'Ele leva tudo o que mudou na pasta, sem escolher. Quem escolhe o que fica de fora é o .gitignore, e antes.']
      ]],
      ['h2', 'Tente lembrar'],
      ['lembrar', {
        p: 'Qual é a diferença entre commit e push?',
        r: [
          'O commit tira a foto e guarda no seu computador.',
          'O push envia as fotos para o GitHub.',
          'Dá para fazer vários commits antes de um push.'
        ]
      }],
      ['lembrar', {
        p: 'Quais são os três lugares que o Git enxerga, e qual comando leva o arquivo de um para o outro?',
        r: [
          'A pasta, onde você edita.',
          'A área de preparação, a lista da próxima foto: git add leva para lá.',
          'O álbum, com as fotos tiradas: git commit leva para lá.'
        ]
      }],
      ['h2', 'Laboratório'],
      ['lab', {
        titulo: 'Seu primeiro repositório, sem terminal',
        lugar: 'No navegador, no site do GitHub',
        tempo: '20 minutos',
        antes: 'Você vai fazer tudo no site do GitHub, seguindo o guia oficial Hello World, que existe em português. Ali, o commit já nasce no site, então não tem push. Vai aparecer um {{pull-request|pull request}}: um pedido para juntar uma branch ao caminho principal, com espaço para revisar antes. Apesar do nome, é diferente do pull. E o {{readme|README}} é o arquivo que apresenta o projeto. Se você já tem conta no GitHub, pule o primeiro passo.',
        link: ['Abrir o guia oficial do GitHub, em português', 'https://docs.github.com/pt/get-started/using-github/hello-world'],
        passos: [
          { faz: 'Crie uma conta gratuita no GitHub, se ainda não tiver.', espera: 'Você entra no site com o seu nome de usuário, e o endereço da sua página é github.com/SeuNome.' },
          { faz: 'Siga o guia e crie um repositório chamado hello-world, marcando a opção de criar um README.', espera: 'Aparece a página do projeto, com um arquivo README.md e um commit chamado Initial commit.' },
          { faz: 'Crie uma branch chamada readme-edits, pelo menu de branches, acima da lista de arquivos.', espera: 'O nome readme-edits aparece no botão de branch, e a página avisa que ela foi criada a partir da main.' },
          { faz: 'Abra o README.md nessa branch, clique no lápis, escreva uma frase e faça o commit pelo botão verde.', espera: 'O commit aparece só em readme-edits. Se você trocar para main, a frase não está lá.' },
          { faz: 'Abra um pull request de readme-edits para main.', espera: 'O GitHub mostra a sua frase em verde, na aba de arquivos alterados.' },
          { faz: 'Faça o merge do pull request.', espera: 'A main agora tem a sua frase, e o GitHub oferece apagar a branch readme-edits.' }
        ],
        errado: 'se o site estiver diferente do guia, procure o nome do botão na página, porque os lugares mudam de vez em quando, ou pergunte ao tutor "onde fica o botão de branch?".'
      }],
      ['h2', 'Laboratório quebrado'],
      ['quebrado', {
        titulo: 'Laboratório quebrado',
        texto: 'Alguém criou um arquivo novo, grafico.html, e tentou fazer o commit. O Git respondeu com o texto abaixo e o commit não aconteceu. Descubra o motivo antes de ver a causa.',
        saida: 'On branch main\nUntracked files:\n  (use "git add <file>..." to include in what will be committed)\n\tgrafico.html\n\nnothing added to commit but untracked files present (use "git add" to track)',
        dica: 'Olhe a última linha e a palavra "untracked", que você já viu nesta aula. O problema está no passo que vem antes do commit.',
        resposta: 'Faltou o `git add`. O Git viu um arquivo novo, mas ninguém disse que ele entra na foto: "nothing added to commit" é "nada foi adicionado à foto", e "untracked files present" é "há arquivos que ainda não acompanho". O conserto é `git add .` e depois o commit de novo.'
      }],
      ['fontes', [
        ['Pro Git, em português', 'https://git-scm.com/book/pt-br/v2', 'oficial', '31/10/2026', 'pt'],
        ['Hello World do GitHub', 'https://docs.github.com/pt/get-started/using-github/hello-world', 'oficial', '31/10/2026', 'pt'],
        ['Sobre a verificação de segredos, GitHub', 'https://docs.github.com/pt/code-security/concepts/secret-security/secret-scanning', 'oficial', '31/10/2026', 'pt'],
        ['Checkpoints do Claude Code', 'https://code.claude.com/docs/pt/checkpointing', 'oficial', '31/10/2026', 'pt'],
        ['Learn Git Branching', 'https://learngitbranching.js.org/?locale=pt_BR', 'comunidade', '31/10/2026', 'pt']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['O Git guarda as fotos no seu PC, e o GitHub guarda uma cópia na internet', 'Isso. E o push é o que leva as fotos de um para o outro.'],
      ['O Git e o GitHub são dois nomes para o mesmo site, onde ficam os projetos', 'O Git é um programa que roda no seu computador. O GitHub é o site.'],
      ['O commit envia o trabalho para o GitHub, e o push guarda no seu computador', 'É o contrário: o commit fica no computador, e quem envia é o push.']
    ], c: 0 },
    prova: [
      { p: 'O que é um commit?', o: [
        ['Um backup automático na nuvem, feito a cada vez que você salva','O commit não é automático nem vai para a nuvem sozinho: fica no seu PC até o push.'],
        ['Uma foto do projeto, com uma frase do que mudou', 'Isso. A foto da pasta inteira naquele momento, com o verso escrito.'],
        ['Um programa para editar arquivos de código, como o VS Code','O Git não edita arquivos; ele guarda versões deles.']
      ], c: 1 },
      { p: 'Git e GitHub são a mesma coisa?', o: [
        ['Sim, são dois nomes para o mesmo programa', 'São coisas diferentes, de empresas diferentes.'],
        ['Não: o Git roda no seu PC, e o GitHub é um site', 'Isso. O Git funciona sem internet; o GitHub guarda uma cópia do álbum.'],
        ['Não: o GitHub roda no seu PC, e o Git é um site', 'É o contrário.']
      ], c: 1 }
    ],
    tutor: [
      ['Qual a diferença entre add e commit?', 'Pense na foto. O git add é arrumar quem entra na imagem, e o git commit é o clique. Por isso, primeiro vem o add, e depois o commit.'],
      ['O que acontece se eu apagar a pasta?', 'Depende do push. Se você já tinha feito push, o GitHub tem uma cópia, e dá para baixar de novo. O que não foi enviado se perde junto com a pasta.'],
      ['O checkpoint do Claude Code não resolve?', 'Ajuda no dia a dia, mas dura cerca de 30 dias, não cobre tudo e não sai do seu PC. Para guardar de verdade, commit; para ter cópia fora, push.']
    ]
  }
};
