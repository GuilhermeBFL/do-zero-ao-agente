// Módulo 4 — Bibliotecas. Formato dos blocos: ESPEC-site.md, seção 4.
// Saídas de execuções reais em 01/11/2026 (Git 2.54, Python 3.12.10, uv 0.12.19, Gitleaks 8.30.1; pip 25.0.1), em .venv novo.
export const AULAS = {
  '4-1': {
    tempo: 35,
    video: 's3-biblioteca',
    videoTipo: 'curto',
    abertura: 'Você pediu uma tarefa simples ao Claude e, no meio do caminho, ele quis {{instalar}} uma {{biblioteca}} de nome estranho, ou instalou sem perguntar. Esta aula ensina o que olhar antes de dizer sim, e o que conferir depois.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Quase nada em programação começa do zero. Uma biblioteca é {{codigo|código}} pronto, que alguém já escreveu e testou, e que o seu programa usa como se fosse dele. Quando ela é publicada para qualquer um instalar, é chamada de {{pacote}}. Ler uma planilha, falar com um site, desenhar um gráfico, mandar uma mensagem no {{telegram|Telegram}}: para cada uma dessas coisas existe uma biblioteca, e o Claude vai sugerir uma toda vez.'],
      ['p', 'Escolher bem economiza semanas. Escolher mal traz para dentro do seu projeto um código que você não conhece, feito por alguém que você não conhece, e que {{rodar|roda}} com os seus {{privilegios|privilégios}}. Boa parte dos ataques a programadores hoje não entra pela porta da frente: entra por uma biblioteca com nome parecido com a certa, ou por uma biblioteca que foi boa e passou para as mãos erradas.'],
      ['p', 'E tem um detalhe que muda tudo: se o seu {{claude-code|Claude Code}} estiver num modo que não pede confirmação, como o {{modo-automatico|automático}} ou o {{bypass}}, quando ele decide instalar, instala. As cinco perguntas desta aula são o seu filtro, e a hora de usá-lo é antes de pedir, não depois.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'É como comprar o motor pronto, em vez de construir um. Você não precisa saber fundir um pistão, mas precisa saber se o motor serve no seu carro, se ainda tem peça de reposição, se muita gente usa e se o vendedor é quem diz ser. Ninguém compra um motor de um anúncio com o nome da marca escrito errado.'],
      ['quebra', 'Motor você compra uma vez. Biblioteca muda com o tempo: uma atualização pode quebrar o seu projeto, e uma versão nova pode vir de outra pessoa, com outras intenções. Por isso, além de escolher, é preciso cuidar das versões, e a aula 4.2 é sobre isso.'],
      ['h2', 'Como funciona'],
      ['h3', 'De onde vem uma biblioteca'],
      ['p', 'Em {{python|Python}}, a linguagem que você escreve neste curso, as bibliotecas ficam em um site público chamado {{pypi|PyPI}} (pypi.org). Em {{javascript|JavaScript}}, o site é o {{npm}}. Qualquer pessoa com uma conta publica ali, sem ninguém revisar antes. É isso que torna os dois sites imensos e úteis, e é isso que obriga você a olhar antes.'],
      ['p', 'Instalar é baixar esse código para o seu computador e colocá-lo em uma pasta onde o Python o encontra. O {{comando}} clássico é `pip install nome`, do {{pip}}, e o moderno é `uv pip install nome`, do {{uv}}, que faz o mesmo mais rápido e dentro de um {{ambiente-isolado}}. Só que o uv exige o ambiente criado antes: primeiro `uv venv`, que cria a pasta `.venv` com o ambiente, e só depois o `install`. Os três nomes são a mesma coisa: ambiente isolado, a pasta `.venv` e, em inglês, {{ambiente-virtual|virtual environment}}, que é o "venv" do nome e o que aparece nas mensagens. Sem o ambiente, a resposta real é esta:'],
      ['saida', 'error: No virtual environment found; run `uv venv` to create an environment, or pass `--system` to install into a non-virtual environment'],
      ['p', 'Em português: "não achei nenhum ambiente; rode `uv venv` para criar um". Com o ambiente criado, `uv pip install requests`, rodado na mesma pasta, acha o `.venv` sozinho. Veja a saída real de instalar a biblioteca `requests`, que serve para falar com sites, num ambiente novo:'],
      ['saida', 'Resolved 5 packages in 1.20s\nInstalled 5 packages in 40ms\n + certifi==2026.10.23\n + charset-normalizer==3.5.2\n + idna==3.20\n + requests==2.34.2\n + urllib3==2.8.0'],
      ['p', 'Você pediu uma e vieram cinco pacotes: a `requests` e quatro {{dependencia|dependências}}, bibliotecas de que ela precisa para funcionar. "Resolved 5 packages" é o uv calculando quais versões combinam entre si; "Installed 5 packages" é a cópia para o ambiente. Quando ele precisa baixar algo que ainda não estava guardado no PC, aparece também uma linha "Prepared". Vir mais de um pacote é normal, e é um dos motivos para olhar antes: ao instalar uma biblioteca, você confia em todas as que vêm junto. O número depois do `==` é a {{versao|versão}} que foi instalada.'],
      ['p', 'Usar a biblioteca depois disso é uma linha: `requests.get("https://...")` pede uma página a um site e devolve a resposta. Dentro dela vem um código de status, um número que diz como foi: 200 significa "deu certo", 404 significa "não achei". A aula 2.9 explicou esses códigos, e você vai vê-los de novo no exercício abaixo.'],
      ['p', 'O que acontece por baixo importa aqui, porque um pacote pode rodar código antes de você usá-lo. Em Python, quando o PyPI tem o pacote já montado, a chamada wheel, instalar só copia arquivos. Quando só existe o código-fonte, a sdist, o pip precisa montar o pacote antes, e essa montagem roda código do próprio pacote, **durante a instalação**. No npm, um pacote pode trazer {{script|scripts}} que rodam na instalação. E mesmo uma instalação que só copia pode deixar código pronto para rodar sozinho: um arquivo `.pth` roda toda vez que o Python abre, e o `import` roda o código da biblioteca na primeira vez que o seu programa a usa. São recursos legítimos, e são exatamente por onde um pacote malicioso age. Desinstalar depois tira os arquivos, mas não desfaz o que já rodou.'],
      ['h3', 'Quando a biblioteca não está lá: ModuleNotFoundError'],
      ['p', 'Esta é a {{mensagem-de-erro}} mais comum de quem começa, e vale conhecer de cor. É um teste real, no Python 3.12: um programa de uma linha que pede uma biblioteca que não está instalada.'],
      ['saida', 'Traceback (most recent call last):\n  File "<string>", line 1, in <module>\nModuleNotFoundError: No module named \'requets\''],
      ['p', 'Todo erro do Python vem nesse formato, o {{traceback|Traceback}}, e se lê de baixo para cima. Leia a última linha primeiro: ela diz o tipo do erro e a causa. As linhas de cima são o caminho até o erro: que arquivo e que linha. Aqui, `File "<string>", line 1` quer dizer "linha 1 de um programa digitado direto no comando". Num programa seu, aparece o caminho do arquivo e o número da linha, e às vezes uma linha de `~` e `^` embaixo do trecho, apontando o ponto exato do erro.'],
      ['p', 'A última linha, em português: "não encontrei nenhum {{modulo-python|módulo}} chamado requets". Quase sempre isso significa uma de duas coisas: a biblioteca **não foi instalada** naquele ambiente, ou o nome está escrito errado (repare que falta um "s" em `requets`). Não é defeito da biblioteca, e não é sinal de que ela seja ruim. O conserto é instalar com o nome certo, e a aula 4.2 mostra o passo a passo, inclusive por que "instalei, mas continua dando erro" costuma ser ambiente diferente.'],
      ['h3', 'A pergunta 1 vem primeiro: é a original?'],
      ['p', 'Golpistas publicam pacotes com nomes quase iguais aos famosos, no estilo de `requestss` ou `colourama` (este, um caso real de 2018), contando com um dedo errado. E, desde que a IA passou a sugerir bibliotecas, surgiu uma variação: registrar os nomes que os {{modelo|modelos}} **inventam**. Um estudo apresentado em 2025 testou 16 modelos da época e achou que pelo menos 5,2% dos pacotes sugeridos pelos modelos comerciais não existiam, e 21,7% nos {{modelo-aberto|modelos abertos}}. O Claude não estava entre os testados, e o número de hoje pode ser outro, mas a lição fica: nome sugerido pela IA se confere, sempre.'],
      ['p', 'Como um pacote malicioso pode agir já na instalação, essa pergunta tem de vir antes de qualquer `install`. Em outubro de 2025, a campanha chamada PhantomRaven colocou 126 pacotes no npm que roubavam chaves e senhas no momento da instalação. Conferir é rápido: abra a página do pacote no PyPI e veja se o nome é exato, se o link do projeto leva ao repositório conhecido e se o pacote não apareceu semana passada. A página do PyPI não mostra downloads; para isso existe o pypistats.org, que conta os downloads por mês de cada pacote. Muitos downloads ajudam, mas também podem ser inflados por robôs, então são um sinal a mais, não a prova.'],
      ['p', 'Para ver qual é a versão atual sem instalar nada, existe um comando que só pergunta ao PyPI. Estas são as três primeiras linhas da saída real de `pip index versions requests`, em 01/11/2026; a lista de versões foi cortada aqui, e o "…" marca o corte:'],
      ['saida', 'WARNING: pip index is currently an experimental command. It may be removed/changed in a future release without prior warning.\nrequests (2.34.2)\nAvailable versions: 2.34.2, 2.34.1, 2.34.0, 2.33.1, 2.33.0, 2.32.5, 2.32.4, …'],
      ['p', 'A primeira linha avisa que o comando ainda é experimental e pode mudar. A segunda traz a versão atual, e a terceira, todas as versões já publicadas, mais de 150 no caso da `requests`. No fim, a saída completa ainda tem duas linhas com `[notice]`, que só avisam que existe um pip mais novo. Com um nome que não existe, como `requestss`, a resposta é `ERROR: No matching distribution found for requestss`, e ninguém instalou nada. Mas repare no limite: o comando prova que o nome **existe** no PyPI, não que é o original. Um golpista que registrou um nome parecido também aparece ali, com versão e tudo. Quem confirma a origem é a página do pacote: o link do projeto e a data em que ele apareceu.'],
      ['h3', 'As outras quatro perguntas'],
      ['tabela', {
        colunas: ['Pergunta', 'Onde olhar', 'Bom sinal'],
        linhas: [
          ['1. É a original?', 'Na página do pacote, no PyPI ou no npm', 'O nome é exato e o link leva ao projeto conhecido'],
          ['2. Resolve o meu problema?', 'Na descrição, na primeira tela, e no exemplo inicial', 'Faz o que você precisa, sem um monte de coisa a mais'],
          ['3. Está viva?', 'Em "Release history" no PyPI, e na data do último {{commit}} no {{github|GitHub}}', 'Versão nova nos últimos meses, e perguntas respondidas na aba {{issues|Issues}}'],
          ['4. Muita gente usa?', 'Nos downloads por mês, no pypistats.org, e nas {{estrelas}} do GitHub', 'Números altos e estáveis; são um sinal, não uma garantia'],
          ['5. Está bem explicada?', 'Na {{documentacao|documentação}}, o manual do projeto', 'Tem um exemplo inicial que você entende e que roda']
        ]
      }],
      ['p', 'Um exemplo inteiro, com a `pandas`, a biblioteca mais usada para ler planilhas em Python. **É a original?** O nome é exato, `pandas`, e na página do PyPI o link do código leva a github.com/pandas-dev/pandas, o {{repositorio|repositório}} conhecido. **Resolve o meu problema?** A descrição fala em estruturas de dados para análise, e o exemplo inicial lê um arquivo {{csv|CSV}}, uma tabela em texto, em uma linha. Para planilhas `.xlsx` do Excel, a página de instalação da pandas avisa que ela precisa de outra biblioteca, a `openpyxl`; é uma dependência opcional, que não vem sozinha. **Está viva?** Em 01/11/2026, a última versão era a 3.1.0, publicada em 22/10/2026, e o repositório recebeu commit no próprio dia 01/11/2026 (conferido). **Muita gente usa?** O pypistats.org mostrava cerca de 547 milhões de downloads no último mês, e o GitHub, perto de 50 mil estrelas, os dois conferidos em 01/11/2026. **Está bem explicada?** A documentação tem um guia chamado "10 minutes to pandas", com exemplos que rodam. Passou nas cinco, e a licença, BSD, é permissiva. Tempo gasto: uns cinco minutos, quase todos na página do PyPI.'],
      ['p', 'Sobre as estrelas: um estudo de 2024 encontrou milhões de estrelas falsas no GitHub, vendidas em lotes. Elas medem popularidade, e popularidade pode ser comprada. Uma biblioteca com 40 mil estrelas e nenhuma versão há três anos está mais morta que uma com 800 estrelas e versão do mês passado. Olhe a data antes do número.'],
      ['p', 'E a {{licenca|licença}}, o documento que diz o que você pode fazer com aquele código? Para uso pessoal, quase nunca atrapalha. Se um dia você for vender algo com aquele código dentro, importa: licenças como MIT e Apache são permissivas, e outras obrigam a abrir o seu próprio código. Na página do PyPI, a licença fica no bloco "License expression" ou, em pacotes que ainda usam o campo antigo, "License": no PC, na coluna lateral; no celular, na aba "Metadata".'],
      ['h3', 'Por que isso importa para quem usa o Claude Code'],
      ['p', 'O Claude escolhe bem na maior parte do tempo, e também erra: às vezes sugere um pacote abandonado porque ele era o padrão quando o modelo foi treinado, às vezes inventa um nome plausível. Num modo que não pede confirmação, ele instala sem perguntar, então o controle é seu e vem antes do pedido. Uma frase resolve: "antes de instalar qualquer biblioteca, me diga o nome exato, o link no PyPI e a data da última versão, e espere eu confirmar". Isso cabe até no {{claude-md|CLAUDE.md}}, o arquivo de regras que a aula 7.5 ensina.'],
      ['p', 'Quando ele instalar algo que você não pediu, não entre em pânico nem apague tudo: pergunte "o que você instalou e por quê?", passe o nome pelas cinco perguntas e, se não passar, trate como incidente, do jeito que o módulo 11 ensina.'],
      ['h3', 'Quando não usar biblioteca nenhuma'],
      ['p', 'O Python já vem com dezenas de bibliotecas prontas, a chamada biblioteca padrão: ler e escrever {{json|JSON}}, abrir CSV, mexer com datas, baixar uma página simples. Para tarefa pequena, peça ao Claude "faça só com a biblioteca padrão". Menos coisa instalada é menos coisa para conferir e menos coisa para quebrar. Uma biblioteca de fora vale a pena quando ela resolve algo grande que você não quer escrever, como ler uma planilha do Excel ou desenhar um gráfico bonito.'],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Custa alguma coisa?** Não. PyPI, npm e quase todas as bibliotecas são gratuitas e de {{codigo-aberto|código aberto}}.',
        '**Instalei o pacote errado. Desinstalar resolve?** Desinstalar tira os arquivos, mas não desfaz o que um script de instalação já fez. Se o nome era suspeito, trate como vazamento: revogue primeiro as chaves que estavam no PC, e só depois crie outras, como a aula 11.3 ensina.',
        '**O Claude não confere isso por mim?** Confere se você pedir, e mesmo assim confira você: a página do pacote é a fonte, a resposta do Claude é uma leitura dela.',
        '**Por que a versão importa?** Porque uma versão nova pode mudar o que a antiga fazia, e o seu programa para de funcionar sem você ter mexido nele. A aula 4.2 mostra como travar a versão.',
        '**E biblioteca "oficial", de empresa grande?** Também envelhece. Olhe a data da última versão do mesmo jeito.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: os números da versão e dois casos famosos', blocos: [
        ['p', 'Uma versão como `2.34.2` tem três números: o primeiro muda quando algo quebra a compatibilidade, o segundo quando entra recurso novo, o terceiro quando é só conserto. Isso se chama versionamento semântico. A maioria das bibliotecas segue esse padrão, mas não todas: a `certifi`, que veio junto com a `requests` lá em cima, usa a data, como em `2026.10.23`. Ver o primeiro número subir, numa biblioteca que segue o padrão, é o aviso de que o seu código pode parar.'],
        ['p', 'Dois casos que viraram aula de segurança: em 2018, a biblioteca `event-stream`, do npm, muito usada, passou para um novo mantenedor, que acrescentou a ela uma dependência com código escondido para roubar carteiras de criptomoeda de um aplicativo específico, segundo o relato do próprio npm. Em 2024, o `xz`, um utilitário de compressão muito usado no Linux, apareceu com uma porta dos fundos nas versões 5.6.0 e 5.6.1, posta por quem tinha ganhado a confiança do projeto, e foi descoberta por um engenheiro que estranhou logins lentos. Nos dois, o pacote era "a original" e tinha muita gente usando. Por isso as perguntas são cinco, e por isso a aula 4.2 ensina a travar versões.']
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
          ['Confiro na página do pacote se esse é o nome certo', 'Isso. O nome certo é requests, com um s. Confira o nome, o link do projeto e a data da última versão antes de instalar.'],
          ['Instalo, porque a IA costuma acertar esses nomes', 'A IA às vezes inventa nomes de pacote, e golpistas registram esses nomes. Já houve campanha assim: a PhantomRaven, com 126 pacotes no npm.'],
          ['Instalo em uma pasta de teste, e removo depois se der problema','Um pacote malicioso pode agir já na instalação. Remover depois pode ser tarde.']
        ],
        c: 0
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'O Claude respondeu: "Recomendo a biblioteca X: ela tem 40 mil estrelas no GitHub, então é segura e bem mantida." Essa resposta está certa? Se não, o que está errado?',
        o: [
          ['Está correta: tantas estrelas mostram que muita gente revisou o código dela', 'Dar estrela não é revisar: é um clique, que pode até ser comprado. Estrelas medem popularidade, e não dizem se o projeto continua vivo.'],
          ['O erro é citar estrelas: o certo eram os downloads, que provam a segurança', 'Downloads também não provam segurança: medem uso, e podem ser inflados por robôs. O que falta é a data da última versão e conferir se é a original.'],
          ['Estrelas não provam segurança nem manutenção; falta a data da versão', 'Isso. Peça o nome exato, o link no PyPI e a data da última versão. Segurança vem de conferir, não de contar estrelas.']
        ],
        c: 2
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
        antes: 'Aqui você não instala nada: só compara. Você vai pedir ao {{claude-code|Claude Code}} uma comparação e depois conferir na fonte se o que ele disse bate. É o treino mais importante do curso: pegar a IA errando com a página aberta do lado. Pelo app: o primeiro passo dá para fazer no app do Claude, no celular ou na web, com o mesmo pedido, e o resto é no navegador do celular. As páginas do PyPI e do pypistats foram conferidas em 01/11/2026. O passo com o Claude Code foi escrito a partir do que ele costuma fazer; como ele conversa, as frases exatas podem variar. Não foi rodado de ponta a ponta antes de publicar.',
        passos: [
          { faz: 'Cole este pedido no Claude Code. Se ele pedir permissão para buscar na internet, aceite.', cola: 'Compare as bibliotecas de Python pandas e polars para ler planilhas. Para cada uma, me dê o link da página no PyPI, a data da última versão e a licença. Não instale nada.', espera: 'O Claude mostra as duas lado a lado, com um link pypi.org/project/pandas e outro pypi.org/project/polars, uma data e uma licença para cada.' },
          { faz: 'Abra no {{navegador}} o link do pandas, pypi.org/project/pandas.', espera: 'Abre a página do pacote no PyPI, com o nome no alto, a versão atual, a data dela e os links do projeto. A licença fica no bloco "License expression" (em pacotes que ainda usam o campo antigo, "License"): na coluna lateral, no PC; na aba "Metadata", no celular.' },
          { faz: 'Compare a data e a licença da página com o que o Claude escreveu sobre o pandas.', espera: 'O pandas mostra BSD-3-Clause no bloco "License expression": uma licença BSD. Se a data ou a licença não baterem, a página está certa e a resposta do Claude está errada: anote, porque é assim que você pega um erro da IA.' },
          { faz: 'Abra no navegador o link do polars, pypi.org/project/polars.', espera: 'Abre a página do polars no PyPI, no mesmo formato da do pandas, com uma diferença: aqui a licença fica no bloco "License", o do campo antigo, que muitos pacotes ainda usam.' },
          { faz: 'Compare a data e a licença da página com o que o Claude escreveu sobre o polars.', espera: 'O polars mostra, no bloco "License", MIT License, seguido do nome do autor: uma licença MIT. De novo, o que vale é a página.' },
          { faz: 'Abra pypistats.org/packages/pandas e olhe o número de downloads do último mês.', espera: 'Aparece "Downloads last month" com um número na casa das centenas de milhões, e um gráfico por dia.' },
          { faz: 'Abra pypistats.org/packages/polars e compare com o pandas.', espera: 'O polars tem bem menos downloads, na casa das dezenas de milhões, e ainda assim muita gente usa. Os dois números são sinal, não prova.' },
          { faz: 'Escolha uma das duas, pensando nas cinco perguntas.', espera: 'As duas passam nas cinco. A diferença fica na segunda pergunta: pandas é mais antiga e tem mais exemplos; polars é mais rápida com planilhas grandes.' }
        ],
        errado: 'se um link não abrir, ou o pacote não existir, peça ao Claude para conferir de novo, e não instale nada. Se ele instalar algo sem você pedir, pergunte "o que você instalou e por quê?" antes de seguir.'
      }],
      ['fontes', [
        ['Concise Guide for Evaluating Open Source Software, OpenSSF', 'https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software', 'comunidade', '31/10/2026'],
        ['PyPI Stats da pandas (cerca de 547 milhões de downloads no último mês)', 'https://pypistats.org/packages/pandas', 'comunidade', '01/11/2026'],
        ['Página da pandas no PyPI (licença no bloco "License expression": BSD-3-Clause)', 'https://pypi.org/project/pandas/', 'oficial', '02/11/2026'],
        ['Página da polars no PyPI (licença no bloco "License": MIT License)', 'https://pypi.org/project/polars/', 'oficial', '02/11/2026'],
        ['Repositório da pandas no GitHub (perto de 50 mil estrelas; commit em 01/11/2026)', 'https://github.com/pandas-dev/pandas', 'comunidade', '01/11/2026'],
        ['Instalação da pandas (openpyxl para arquivos .xlsx)', 'https://pandas.pydata.org/docs/getting_started/install.html', 'oficial', '01/11/2026'],
        ['Formatos de pacote: wheel e sdist, guia oficial do Python', 'https://packaging.python.org/pt-br/latest/discussions/package-formats/', 'oficial', '01/11/2026', 'pt'],
        ['Scripts do npm (preinstall, install e postinstall)', 'https://docs.npmjs.com/cli/v11/using-npm/scripts/', 'oficial', '01/11/2026'],
        ['Módulo site e arquivos .pth, documentação do Python', 'https://docs.python.org/pt-br/3/library/site.html', 'oficial', '01/11/2026', 'pt'],
        ['Details about the event-stream incident, npm (27/11/2018)', 'https://blog.npmjs.org/post/180565383195/details-about-the-event-stream-incident', 'oficial', '01/11/2026'],
        ['Backdoor in upstream xz/liblzma, Andres Freund, lista oss-security (29/03/2024)', 'https://www.openwall.com/lists/oss-security/2024/03/29/4', 'comunidade', '01/11/2026'],
        ['The great big open-source census (cita o caso colourama, de 2018), The Register', 'https://www.theregister.com/software/2020/02/20/the-great-big-open-source-census-most-used-libraries-revealed-plus-10-things-developers-should-be-doing-to-keep-their-code-secure/907138', 'imprensa', '01/11/2026'],
        ['We Have a Package for You! (estudo sobre pacotes inventados, apresentado em 2025)', 'https://arxiv.org/abs/2406.10279', 'acadêmico', '31/10/2026'],
        ['Estrelas falsas no GitHub (estudo de 2024)', 'https://arxiv.org/abs/2412.13459', 'acadêmico', '31/10/2026'],
        ['PhantomRaven: 126 pacotes no npm, The Hacker News', 'https://thehackernews.com/2025/10/phantomraven-malware-found-in-126-npm.html', 'imprensa', '31/10/2026'],
        ['Instalando pacotes, guia oficial do Python', 'https://packaging.python.org/pt-br/latest/tutorials/installing-packages/', 'oficial', '31/10/2026', 'pt']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['Quanto mais estrelas e downloads uma biblioteca tem, mais segura e mais bem mantida ela é','Estrelas mostram popularidade, e não segurança nem manutenção; downloads também podem ser inflados.'],
      ['Antes de instalar, passe a biblioteca pelas cinco perguntas, começando por: é a original?', 'Isso. São as cinco perguntas, e a primeira vem primeiro.'],
      ['Se o nome sugerido pela IA aparece no PyPI, a biblioteca é a original e pode ser instalada', 'Aparecer no PyPI prova que o nome existe, não que é o original: golpistas registram nomes parecidos e nomes que a IA inventa.']
    ], c: 1 },
    prova: [
      { p: 'O que é uma biblioteca?', o: [
        ['Um site com a documentação de um programa', 'A documentação é o manual; a biblioteca é o código.'],
        ['Um programa que você instala para escrever código', 'Programa para escrever código é um editor, como o VS Code. A biblioteca é código pronto que o seu programa usa.'],
        ['Código pronto que você usa no seu projeto', 'Isso. Alguém já escreveu e testou, e você usa sem escrever de novo.']
      ], c: 2 },
      { p: 'Por que conferir o nome letra por letra antes de instalar?', o: [
        ['Porque um nome errado instala uma versão antiga da mesma biblioteca', 'Um nome diferente é outro pacote, de outro dono, e não outra versão do mesmo. É assim que o golpe funciona.'],
        ['Porque golpistas publicam pacotes com nomes parecidos', 'Isso. Um nome quase igual pode ser um pacote malicioso, e ele pode agir já na instalação.'],
        ['Porque o pip para no meio e deixa o ambiente quebrado se o nome falhar', 'Se o nome não existir, o pip só avisa que não achou e não instala nada. O perigo é o nome que existe e é de outra pessoa.']
      ], c: 1 }
    ],
    tutor: [
      ['Onde vejo a data da última versão?', 'Em Python, na página do pacote no PyPI, em "Release history". Em JavaScript, na página no npm, em "Last publish". Se a última versão for de anos atrás, desconfie.'],
      ['Licença importa para mim?', 'Para uso pessoal, quase nunca atrapalha. Se você for vender algo com aquele código, importa: licenças como MIT e Apache são permissivas, e outras obrigam a abrir o seu código. Na dúvida, peça ao Claude para explicar a licença daquele projeto.'],
      ['O que é uma dependência?', 'Uma biblioteca de que outra biblioteca precisa. Ao instalar a requests, vieram mais quatro: certifi, charset-normalizer, idna e urllib3. Você confia em todas ao instalar uma.']
    ]
  }
};
