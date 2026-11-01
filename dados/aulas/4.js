// Módulo 4 — Bibliotecas. Formato dos blocos: ESPEC-site.md, seção 4.
// Saídas de terminal coladas de execuções reais em _testes\bib-4-1 (01/11/2026, Python 3.12.10, uv 0.12.19).
export const AULAS = {
  '4-1': {
    tempo: 35,
    video: 's3-biblioteca',
    videoTipo: 'curto',
    abertura: 'Um dia, o Claude vai parar e dizer: "preciso instalar uma biblioteca, posso?". Ou, pior, vai instalar sem perguntar. Esta aula ensina o que olhar antes de dizer sim, e o que conferir depois.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Quase nada em programação começa do zero. Uma {{biblioteca}} é código pronto, que alguém já escreveu e testou, e que o seu programa usa como se fosse dele. Quando ela é publicada para qualquer um {{instalar}}, é chamada de {{pacote}}. Ler uma planilha, falar com um site, desenhar um gráfico, mandar uma mensagem no Telegram: para cada uma dessas coisas existe uma biblioteca, e o Claude vai sugerir uma toda vez.'],
      ['p', 'Escolher bem economiza semanas. Escolher mal traz para dentro do seu projeto um código que você não conhece, feito por alguém que você não conhece, e que roda com os seus privilégios. A maior parte dos ataques a programadores hoje não entra pela porta da frente: entra por uma biblioteca com nome parecido com a certa, ou por uma biblioteca que foi boa e passou para as mãos erradas.'],
      ['p', 'E tem um detalhe que é só seu: o Claude Code no seu PC está em um modo que não pede confirmação. Quando ele decide instalar, instala. As cinco perguntas desta aula são o seu filtro, e a hora de usá-lo é antes de pedir, não depois.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'É como comprar o motor pronto, em vez de construir um. Você não precisa saber fundir um pistão, mas precisa saber se o motor serve no seu carro, se ainda tem peça de reposição, se muita gente usa e se o vendedor é quem diz ser. Ninguém compra um motor de um anúncio com o nome da marca escrito errado.'],
      ['quebra', 'Motor você compra uma vez. Biblioteca muda com o tempo: uma atualização pode quebrar o seu projeto, e uma versão nova pode vir de outra pessoa, com outras intenções. Por isso, além de escolher, é preciso cuidar das versões, e a aula 4.2 é sobre isso.'],
      ['h2', 'Como funciona'],
      ['h3', 'De onde vem uma biblioteca'],
      ['p', 'Em {{python|Python}}, a linguagem que você escreve neste curso, as bibliotecas ficam em um site público chamado PyPI (pypi.org). Em {{javascript|JavaScript}}, o site é o npm. Qualquer pessoa com uma conta publica ali, sem ninguém revisar antes. É isso que torna os dois sites imensos e úteis, e é isso que obriga você a olhar antes.'],
      ['p', 'Instalar é baixar esse código para o seu computador e colocá-lo em uma pasta onde o Python o encontra. O {{comando}} clássico é `pip install nome`, e o moderno é `uv pip install nome`, que faz o mesmo mais rápido e dentro de um {{ambiente-isolado}}. Veja a saída real de instalar a biblioteca `requests`, que serve para falar com sites:'],
      ['saida', ' + charset-normalizer==3.5.2\n + idna==3.20\n + requests==2.34.2\n + urllib3==2.8.0'],
      ['p', 'Você pediu uma e vieram quatro. As outras três são **dependências**: bibliotecas de que a `requests` precisa para funcionar. É normal, e é um dos motivos para olhar antes: ao instalar uma, você confia em todas as que vêm junto. O número depois do `==` é a {{versao|versão}} que foi instalada.'],
      ['p', 'O que acontece por baixo importa aqui: um pacote pode trazer um {{script}} que roda **durante a instalação**, antes de você usar qualquer coisa. É um recurso legítimo, usado para preparar arquivos, e é exatamente por onde um pacote malicioso age. Desinstalar depois tira os arquivos, mas não desfaz o que o script já fez.'],
      ['h3', 'Quando a biblioteca não está lá: ModuleNotFoundError'],
      ['p', 'Esta é a {{mensagem-de-erro}} mais comum de quem começa, e vale conhecer de cor. Rodei de propósito um programa que pede uma biblioteca que não existe no meu PC:'],
      ['saida', 'Traceback (most recent call last):\n  File "<string>", line 1, in <module>\nModuleNotFoundError: No module named \'requets\''],
      ['p', 'Em português: "não encontrei nenhum módulo chamado requets". Quase sempre isso significa uma de duas coisas: a biblioteca **não foi instalada** naquele ambiente, ou o nome está escrito errado (repare que falta um "s" em `requets`). Não é defeito da biblioteca, e não é sinal de que ela seja ruim. O conserto é instalar com o nome certo, e a aula 4.2 mostra o passo a passo, inclusive por que "instalei, mas continua dando erro" costuma ser ambiente diferente.'],
      ['h3', 'A pergunta 1 vem primeiro: é a original?'],
      ['p', 'Golpistas publicam pacotes com nomes quase iguais aos famosos (`requestss`, `python-dateutils`, `colourama`), contando com um dedo errado. E, desde que a IA passou a sugerir bibliotecas, surgiu uma variação: registrar os nomes que os modelos **inventam**. Um estudo apresentado em 2025 testou 16 modelos da época e achou que pelo menos 5,2% dos pacotes sugeridos pelos modelos comerciais não existiam, e 21,7% nos modelos abertos. O Claude não estava entre os testados, e o número de hoje pode ser outro, mas a lição fica: nome sugerido pela IA se confere, sempre.'],
      ['p', 'Como um pacote malicioso pode agir já na instalação, essa pergunta tem de vir antes de qualquer `install`. Em outubro de 2025, a campanha chamada PhantomRaven colocou 126 pacotes no npm que roubavam chaves e senhas no momento da instalação. Conferir é rápido: abra a página do pacote no PyPI e veja se o nome é exato, se o link do projeto leva ao repositório conhecido e se os downloads são de milhões, e não de dezenas. Para saber qual é a versão atual sem instalar nada, existe um comando que só pergunta ao PyPI:'],
      ['saida', 'requests (2.34.2)'],
      ['p', 'Esse é o resultado real de `pip index versions requests` em 01/11/2026. Se o nome estiver errado, o comando responde que não achou nada, e ninguém instalou nada.'],
      ['h3', 'As outras quatro perguntas'],
      ['tabela', {
        colunas: ['Pergunta', 'Onde olhar', 'Bom sinal'],
        linhas: [
          ['1. É a original?', 'Na página do pacote, no PyPI ou no npm', 'O nome é exato, o link leva ao projeto conhecido, os downloads são muitos'],
          ['2. Resolve o meu problema?', 'Na descrição, na primeira tela, e no exemplo inicial', 'Faz o que você precisa, sem um monte de coisa a mais'],
          ['3. Está viva?', 'Em "Release history" no PyPI, e na data do último commit no GitHub', 'Versão nova nos últimos meses, e perguntas respondidas na aba Issues'],
          ['4. Muita gente usa?', 'Nos downloads por mês e nas estrelas do GitHub', 'Muita gente é um sinal, não uma garantia: estrelas se compram'],
          ['5. Está bem explicada?', 'Na {{documentacao|documentação}}, o manual do projeto', 'Tem um exemplo inicial que você entende e que roda']
        ]
      }],
      ['p', 'Sobre as estrelas: um estudo de 2024 encontrou milhões de estrelas falsas no GitHub, vendidas em lotes. Elas medem popularidade, e popularidade pode ser comprada. Uma biblioteca com 40 mil estrelas e nenhuma versão há três anos está mais morta que uma com 800 estrelas e versão do mês passado. Olhe a data antes do número.'],
      ['p', 'E a {{licenca|licença}}, o documento que diz o que você pode fazer com aquele código? Para uso pessoal, quase nunca atrapalha. Se um dia você for vender algo com aquele código dentro, importa: licenças como MIT e Apache são permissivas, e outras obrigam a abrir o seu próprio código. A página do pacote mostra a licença logo no começo.'],
      ['h3', 'Por que isso importa para quem usa o Claude Code'],
      ['p', 'O Claude escolhe bem na maior parte do tempo, e também erra: às vezes sugere um pacote abandonado porque ele era o padrão quando o modelo foi treinado, às vezes inventa um nome plausível. Como no seu PC ele instala sem perguntar, o controle é seu e vem antes do pedido. Uma frase resolve: "antes de instalar qualquer biblioteca, me diga o nome exato, o link no PyPI e a data da última versão, e espere eu confirmar". Isso cabe até no `CLAUDE.md`, o arquivo de regras que a aula 7.5 ensina.'],
      ['p', 'Quando ele instalar algo que você não pediu, não entre em pânico nem apague tudo: pergunte "o que você instalou e por quê?", passe o nome pelas cinco perguntas e, se não passar, trate como incidente, do jeito que o módulo 11 ensina.'],
      ['h3', 'Quando não usar biblioteca nenhuma'],
      ['p', 'O Python já vem com dezenas de bibliotecas prontas, a chamada biblioteca padrão: ler e escrever {{json|JSON}}, abrir CSV, mexer com datas, baixar uma página simples. Para tarefa pequena, peça ao Claude "faça só com a biblioteca padrão". Menos coisa instalada é menos coisa para conferir e menos coisa para quebrar. Uma biblioteca de fora vale a pena quando ela resolve algo grande que você não quer escrever, como ler uma planilha do Excel ou desenhar um gráfico bonito.'],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Custa alguma coisa?** Não. PyPI, npm e quase todas as bibliotecas são gratuitas e de código aberto.',
        '**Instalei o pacote errado. Desinstalar resolve?** Desinstalar tira os arquivos, mas não desfaz o que um script de instalação já fez. Se o nome era suspeito, trate como vazamento: troque as chaves que estavam no PC, como a aula 11.3 ensina.',
        '**O Claude não confere isso por mim?** Confere se você pedir, e mesmo assim confira você: a página do pacote é a fonte, a resposta do Claude é uma leitura dela.',
        '**Por que a versão importa?** Porque uma versão nova pode mudar o que a antiga fazia, e o seu programa para de funcionar sem você ter mexido nele. A aula 4.2 mostra como travar a versão.',
        '**E biblioteca "oficial", de empresa grande?** Também envelhece. Olhe a data da última versão do mesmo jeito.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: os números da versão e dois casos famosos', blocos: [
        ['p', 'Uma versão como `2.34.2` tem três números: o primeiro muda quando algo quebra a compatibilidade, o segundo quando entra recurso novo, o terceiro quando é só conserto. Isso se chama versionamento semântico, e a maioria dos projetos segue. Ver o primeiro número subir é o aviso de que o seu código pode parar.'],
        ['p', 'Dois casos que viraram aula de segurança: em 2018, a biblioteca `event-stream`, do npm, usada por milhões de projetos, passou para um novo mantenedor que escondeu nela um código para roubar carteiras de criptomoeda. Em 2024, o utilitário `xz`, presente em quase todo Linux, recebeu uma porta dos fundos de um colaborador que ganhou confiança ao longo de dois anos. Nos dois, o pacote era "a original" e tinha muita gente usando. Por isso as perguntas são cinco, e por isso a aula 4.2 ensina a travar versões.']
      ] }],
      ['h2', 'Preveja antes de ver'],
      ['prever', {
        pergunta: 'Este programa usa uma biblioteca. Qual palavra você acha que é o nome dela? E o que parece que ele pede?',
        codigo: 'import requests\n\nresposta = requests.get("https://api.github.com")\nprint(resposta.status_code)',
        linguagem: 'python',
        resposta: 'O nome é `requests`, e a primeira linha traz a biblioteca para dentro do programa. A terceira linha faz um pedido a um site, e a última mostra o resultado na tela: `200`, o código que significa "deu certo". Em quatro linhas você falou com a internet, porque alguém já escreveu a parte difícil. Isso depois de instalar: sem a instalação, aparece o `ModuleNotFoundError` que você viu acima.'
      }],
      ['h2', 'Pare e responda'],
      ['pergunta', {
        p: 'O Claude sugeriu instalar `requestss`, com dois "s" no final. O que você faz?',
        o: [
          ['Instalo, porque a IA costuma acertar esses nomes', 'A IA às vezes inventa nomes de pacote, e golpistas registram esses nomes. Já houve campanha assim: a PhantomRaven, com 126 pacotes no npm.'],
          ['Confiro na página do pacote se esse é o nome certo', 'Isso. O nome certo é requests, com um s. Confira o nome, o link do projeto e a data da última versão antes de instalar.'],
          ['Instalo em uma pasta de teste, e removo depois se der problema','Um pacote malicioso pode agir já na instalação. Remover depois pode ser tarde.']
        ],
        c: 1
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'O Claude respondeu: "Recomendo a biblioteca X: ela tem 40 mil estrelas no GitHub, então é segura e bem mantida." O que está errado?',
        o: [
          ['Nada: 40 mil estrelas é prova de que muita gente confia nela e a mantém viva','Estrelas medem popularidade, podem ser compradas, e não dizem se o projeto continua vivo.'],
          ['Estrelas não provam segurança nem manutenção; falta a data da última versão', 'Isso. Peça o nome exato, o link no PyPI e a data da última versão. Segurança vem de conferir, não de contar estrelas.'],
          ['O certo seria olhar só os downloads por mês, que não podem ser falsificados','Downloads também podem ser inflados por robôs. São um sinal a mais, não a resposta.']
        ],
        c: 1
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"Tem muitas estrelas, então é segura."', 'Estrelas mostram popularidade, não segurança. Elas também podem ser compradas.'],
        ['"Vou instalar tudo o que o tutorial manda."', 'Tutorial antigo pode citar pacote abandonado ou substituído. Passe cada um pelas cinco perguntas.'],
        ['"A IA recomendou, então existe."', 'Modelos inventam nomes de pacote, e golpistas registram esses nomes. Confira na página do PyPI antes de instalar.'],
        ['"Deu ModuleNotFoundError, a biblioteca é ruim."', 'Quase sempre ela só não está instalada naquele ambiente, ou o nome está errado. Instale com o nome certo.']
      ]],
      ['h2', 'Tente lembrar'],
      ['lembrar', {
        p: 'Quais são as cinco perguntas, e qual vem primeiro?',
        r: [
          'É a original? Vem primeiro, porque um pacote malicioso pode agir já na instalação.',
          'Resolve o meu problema?',
          'Está viva? Muita gente usa?',
          'Está bem explicada?'
        ]
      }],
      ['lembrar', {
        p: 'O que significa ModuleNotFoundError, e o que quase sempre resolve?',
        r: [
          'O Python não encontrou a biblioteca com aquele nome.',
          'Quase sempre ela não foi instalada naquele ambiente, ou o nome está escrito errado.',
          'Instalar com o nome certo, no ambiente certo.'
        ]
      }],
      ['h2', 'Laboratório'],
      ['lab', {
        titulo: 'Compare duas bibliotecas de verdade',
        lugar: 'No PC, com o Claude Code, e no navegador',
        tempo: '15 minutos',
        antes: 'Aqui você não instala nada: só compara. Você vai pedir ao {{claude-code|Claude Code}} uma comparação, e depois conferir na fonte se o que ele disse bate. É o treino mais importante do curso: pegar a IA errando com a página aberta do lado.',
        passos: [
          { faz: 'Cole este pedido no Claude Code:', cola: 'Compare as bibliotecas de Python pandas e polars para ler planilhas. Para cada uma, me dê o link da página no PyPI, a data da última versão e a licença. Não instale nada.', espera: 'O Claude mostra as duas lado a lado, com um link pypi.org/project/pandas e outro pypi.org/project/polars, uma data e uma licença para cada.' },
          { faz: 'Abra os dois links no navegador.', espera: 'Abre a página de cada pacote no PyPI, com o nome no alto, a versão atual, a licença e o link do projeto.' },
          { faz: 'Compare a data e a licença da página com o que o Claude escreveu.', espera: 'Pandas aparece com licença BSD e polars com MIT. Se a data ou a licença não baterem, a página está certa, e a resposta do Claude está errada: anote isso, porque é assim que você pega um erro da IA.' },
          { faz: 'Passe as duas pelas cinco perguntas e decida qual escolheria.', espera: 'As duas passam nas cinco. A diferença fica na segunda pergunta: pandas é mais antiga e tem mais exemplos; polars é mais rápida com planilhas grandes.' }
        ],
        errado: 'se um link não abrir, ou o pacote não existir, peça ao Claude para conferir de novo, e não instale nada. Se ele instalar algo sem você pedir, pergunte "o que você instalou e por quê?" antes de seguir.'
      }],
      ['fontes', [
        ['Concise Guide for Evaluating Open Source Software, OpenSSF', 'https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software', 'oficial', '31/10/2026'],
        ['We Have a Package for You! (estudo sobre pacotes inventados, apresentado em 2025)', 'https://arxiv.org/abs/2406.10279', 'acadêmico', '31/10/2026'],
        ['Estrelas falsas no GitHub (estudo de 2024)', 'https://arxiv.org/abs/2412.13459', 'acadêmico', '31/10/2026'],
        ['PhantomRaven: 126 pacotes no npm, The Hacker News', 'https://thehackernews.com/2025/10/phantomraven-malware-found-in-126-npm.html', 'imprensa', '31/10/2026'],
        ['Instalando pacotes, guia oficial do Python', 'https://packaging.python.org/pt-br/latest/tutorials/installing-packages/', 'oficial', '31/10/2026', 'pt']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['Quanto mais estrelas e downloads uma biblioteca tem, mais segura e mais bem mantida ela é','Estrelas mostram popularidade, e não segurança nem manutenção.'],
      ['Antes de instalar, passe a biblioteca pelas cinco perguntas, começando por: é a original?', 'Isso. São as cinco perguntas, e a primeira vem primeiro.'],
      ['Se a IA sugeriu uma biblioteca, você pode instalar sem conferir o nome', 'A IA às vezes inventa nomes de pacote. Confira sempre.']
    ], c: 1 },
    prova: [
      { p: 'O que é uma biblioteca?', o: [
        ['Um site com a documentação de um programa', 'A documentação é o manual; a biblioteca é o código.'],
        ['Código pronto que você usa no seu projeto', 'Isso. Alguém já escreveu e testou, e você usa sem escrever de novo.'],
        ['Uma pasta de arquivos do Windows', 'O Windows chama algumas pastas de "biblioteca", mas aqui é outra coisa: código pronto.']
      ], c: 1 },
      { p: 'Por que conferir o nome letra por letra antes de instalar?', o: [
        ['Porque nomes curtos instalam mais rápido e ocupam menos espaço','O tamanho do nome não muda nada na instalação.'],
        ['Porque o terminal não aceita letras repetidas', 'O terminal aceita qualquer nome; o problema é outro.'],
        ['Porque golpistas publicam pacotes com nomes parecidos', 'Isso. Um nome quase igual pode ser um pacote malicioso, e ele pode agir já na instalação.']
      ], c: 2 }
    ],
    tutor: [
      ['Onde vejo a data da última versão?', 'Em Python, na página do pacote no PyPI, em "Release history". Em JavaScript, na página no npm, em "Last publish". Se a última versão for de anos atrás, desconfie.'],
      ['Licença importa para mim?', 'Para uso pessoal, quase nunca atrapalha. Se você for vender algo com aquele código, importa: licenças como MIT e Apache são permissivas, e outras obrigam a abrir o seu código. Na dúvida, peça ao Claude para explicar a licença daquele projeto.'],
      ['O que é uma dependência?', 'Uma biblioteca de que outra biblioteca precisa. Ao instalar a requests, vieram mais três. Você confia em todas ao instalar uma.']
    ]
  }
};
