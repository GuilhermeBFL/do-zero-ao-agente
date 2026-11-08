// Módulo 4. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "4-1": {
    "tempo": 35,
    "video": "s3-biblioteca",
    "videoTipo": "curto",
    "abertura": "Você pediu uma tarefa simples ao Claude e, no meio do caminho, ele quis {{instalar}} uma {{biblioteca}} de nome estranho, ou instalou sem perguntar. Esta aula ensina o que olhar antes de dizer sim, e o que conferir depois.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quase nada em programação começa do zero. Uma biblioteca é {{codigo|código}} pronto, que alguém já escreveu e testou, e que o seu programa usa como se fosse dele. Quando ela é publicada para qualquer um instalar, é chamada de {{pacote}}. Ler uma planilha, falar com um site, desenhar um gráfico, mandar uma mensagem no {{telegram|Telegram}}: para cada uma dessas coisas existe uma biblioteca, e o Claude vai sugerir uma toda vez."
      ],
      [
        "p",
        "Escolher bem economiza semanas. Escolher mal traz para dentro do seu projeto um código que você não conhece, feito por alguém que você não conhece, e que {{rodar|roda}} com os seus {{privilegios|privilégios}}. Boa parte dos ataques a programadores hoje não entra pela porta da frente: entra por uma biblioteca com nome parecido com a certa, ou por uma biblioteca que foi boa e passou para as mãos erradas."
      ],
      [
        "p",
        "E tem um detalhe que muda tudo: se o seu {{claude-code|Claude Code}} estiver num modo que não pede confirmação, como o {{modo-automatico|automático}} ou o {{bypass}}, quando ele decide instalar, instala. As cinco perguntas desta aula são o seu filtro, e a hora de usá-lo é antes de pedir, não depois."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "É como comprar o motor pronto, em vez de construir um. Você não precisa saber fundir um pistão, mas precisa saber se o motor serve no seu carro, se ainda tem peça de reposição, se muita gente usa e se o vendedor é quem diz ser. Ninguém compra um motor de um anúncio com o nome da marca escrito errado."
      ],
      [
        "quebra",
        "Motor você compra uma vez. Biblioteca muda com o tempo: uma atualização pode quebrar o seu projeto, e uma versão nova pode vir de outra pessoa, com outras intenções. Por isso, além de escolher, é preciso cuidar das versões, e a aula 4.2 é sobre isso."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "De onde vem uma biblioteca"
      ],
      [
        "p",
        "Em {{python|Python}}, a linguagem que você escreve neste curso, as bibliotecas ficam em um site público chamado {{pypi|PyPI}} (pypi.org). Em {{javascript|JavaScript}}, o site é o {{npm}}. Qualquer pessoa com uma conta publica ali, sem ninguém revisar antes. É isso que torna os dois sites imensos e úteis, e é isso que obriga você a olhar antes."
      ],
      [
        "p",
        "Instalar é baixar esse código para o seu computador e colocá-lo em uma pasta onde o Python o encontra. O {{comando}} clássico é `pip install nome`, do {{pip}}, e o moderno é `uv pip install nome`, do {{uv}}, que faz o mesmo mais rápido e dentro de um {{ambiente-isolado}}. Só que o uv exige o ambiente criado antes: primeiro `uv venv`, que cria a pasta `.venv` com o ambiente, e só depois o `install`. Os três nomes são a mesma coisa: ambiente isolado, a pasta `.venv` e, em inglês, {{ambiente-virtual|virtual environment}}, que é o \"venv\" do nome e o que aparece nas mensagens. Sem o ambiente, a resposta real é esta:"
      ],
      [
        "saida",
        "error: No virtual environment found; run `uv venv` to create an environment, or pass `--system` to install into a non-virtual environment"
      ],
      [
        "p",
        "Em português: \"não achei nenhum ambiente; rode `uv venv` para criar um\". Com o ambiente criado, `uv pip install requests`, rodado na mesma pasta, acha o `.venv` sozinho. Veja a saída real de instalar a biblioteca `requests`, que serve para falar com sites, num ambiente novo:"
      ],
      [
        "saida",
        "Resolved 5 packages in 1.20s\nInstalled 5 packages in 40ms\n + certifi==2026.10.23\n + charset-normalizer==3.5.2\n + idna==3.20\n + requests==2.34.2\n + urllib3==2.8.0"
      ],
      [
        "p",
        "Você pediu uma e vieram cinco pacotes: a `requests` e quatro {{dependencia|dependências}}, bibliotecas de que ela precisa para funcionar. \"Resolved 5 packages\" é o uv calculando quais versões combinam entre si; \"Installed 5 packages\" é a cópia para o ambiente. Quando ele precisa baixar algo que ainda não estava guardado no PC, aparece também uma linha \"Prepared\". Vir mais de um pacote é normal, e é um dos motivos para olhar antes: ao instalar uma biblioteca, você confia em todas as que vêm junto. O número depois do `==` é a {{versao|versão}} que foi instalada."
      ],
      [
        "p",
        "Usar a biblioteca depois disso é uma linha: `requests.get(\"https://...\")` pede uma página a um site e devolve a resposta. Dentro dela vem um código de status, um número que diz como foi: 200 significa \"deu certo\", 404 significa \"não achei\". A aula 2.9 explicou esses códigos, e você vai vê-los de novo no exercício abaixo."
      ],
      [
        "p",
        "O que acontece por baixo importa aqui, porque um pacote pode rodar código antes de você usá-lo. Em Python, quando o PyPI tem o pacote já montado, a chamada wheel, instalar só copia arquivos. Quando só existe o código-fonte, a sdist, o pip precisa montar o pacote antes, e essa montagem roda código do próprio pacote, **durante a instalação**. No npm, um pacote pode trazer {{script|scripts}} que rodam na instalação. E mesmo uma instalação que só copia pode deixar código pronto para rodar sozinho: um arquivo `.pth` roda toda vez que o Python abre, e o `import` roda o código da biblioteca na primeira vez que o seu programa a usa. São recursos legítimos, e são exatamente por onde um pacote malicioso age. Desinstalar depois tira os arquivos, mas não desfaz o que já rodou."
      ],
      [
        "h3",
        "Quando a biblioteca não está lá: ModuleNotFoundError"
      ],
      [
        "p",
        "Esta é a {{mensagem-de-erro}} mais comum de quem começa, e vale conhecer de cor. É um teste real, no Python 3.12: um programa de uma linha que pede uma biblioteca que não está instalada."
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"<string>\", line 1, in <module>\nModuleNotFoundError: No module named 'requets'"
      ],
      [
        "p",
        "Todo erro do Python vem nesse formato, o {{traceback|Traceback}}, e se lê de baixo para cima. Leia a última linha primeiro: ela diz o tipo do erro e a causa. As linhas de cima são o caminho até o erro: que arquivo e que linha. Aqui, `File \"<string>\", line 1` quer dizer \"linha 1 de um programa digitado direto no comando\". Num programa seu, aparece o caminho do arquivo e o número da linha, e às vezes uma linha de `~` e `^` embaixo do trecho, apontando o ponto exato do erro."
      ],
      [
        "p",
        "A última linha, em português: \"não encontrei nenhum {{modulo-python|módulo}} chamado requets\". Quase sempre isso significa uma de duas coisas: a biblioteca **não foi instalada** naquele ambiente, ou o nome está escrito errado (repare que falta um \"s\" em `requets`). Não é defeito da biblioteca, e não é sinal de que ela seja ruim. O conserto é instalar com o nome certo, e a aula 4.2 mostra o passo a passo, inclusive por que \"instalei, mas continua dando erro\" costuma ser ambiente diferente."
      ],
      [
        "h3",
        "A pergunta 1 vem primeiro: é a original?"
      ],
      [
        "p",
        "Golpistas publicam pacotes com nomes quase iguais aos famosos, no estilo de `requestss` ou `colourama` (este, um caso real de 2018), contando com um dedo errado. E, desde que a IA passou a sugerir bibliotecas, surgiu uma variação: registrar os nomes que os {{modelo|modelos}} **inventam**. Um estudo apresentado em 2025 testou 16 modelos da época e achou que pelo menos 5,2% dos pacotes sugeridos pelos modelos comerciais não existiam, e 21,7% nos {{modelo-aberto|modelos abertos}}. O Claude não estava entre os testados, e o número de hoje pode ser outro, mas a lição fica: nome sugerido pela IA se confere, sempre."
      ],
      [
        "p",
        "Como um pacote malicioso pode agir já na instalação, essa pergunta tem de vir antes de qualquer `install`. Em outubro de 2025, a campanha chamada PhantomRaven colocou 126 pacotes no npm que roubavam chaves e senhas no momento da instalação. Conferir é rápido: abra a página do pacote no PyPI e veja se o nome é exato, se o link do projeto leva ao repositório conhecido e se o pacote não apareceu semana passada. A página do PyPI não mostra downloads; para isso existe o pypistats.org, que conta os downloads por mês de cada pacote. Muitos downloads ajudam, mas também podem ser inflados por robôs, então são um sinal a mais, não a prova."
      ],
      [
        "p",
        "Para ver qual é a versão atual sem instalar nada, existe um comando que só pergunta ao PyPI. Estas são as três primeiras linhas da saída real de `pip index versions requests`, em 01/11/2026; a lista de versões foi cortada aqui, e o \"…\" marca o corte:"
      ],
      [
        "saida",
        "WARNING: pip index is currently an experimental command. It may be removed/changed in a future release without prior warning.\nrequests (2.34.2)\nAvailable versions: 2.34.2, 2.34.1, 2.34.0, 2.33.1, 2.33.0, 2.32.5, 2.32.4, …"
      ],
      [
        "p",
        "A primeira linha avisa que o comando ainda é experimental e pode mudar. A segunda traz a versão atual, e a terceira, todas as versões já publicadas, mais de 150 no caso da `requests`. No fim, a saída completa ainda tem duas linhas com `[notice]`, que só avisam que existe um pip mais novo. Com um nome que não existe, como `requestss`, a resposta é `ERROR: No matching distribution found for requestss`, e ninguém instalou nada. Mas repare no limite: o comando prova que o nome **existe** no PyPI, não que é o original. Um golpista que registrou um nome parecido também aparece ali, com versão e tudo. Quem confirma a origem é a página do pacote: o link do projeto e a data em que ele apareceu."
      ],
      [
        "h3",
        "As outras quatro perguntas"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Pergunta",
            "Onde olhar",
            "Bom sinal"
          ],
          "linhas": [
            [
              "1. É a original?",
              "Na página do pacote, no PyPI ou no npm",
              "O nome é exato e o link leva ao projeto conhecido"
            ],
            [
              "2. Resolve o meu problema?",
              "Na descrição, na primeira tela, e no exemplo inicial",
              "Faz o que você precisa, sem um monte de coisa a mais"
            ],
            [
              "3. Está viva?",
              "Em \"Release history\" no PyPI, e na data do último {{commit}} no {{github|GitHub}}",
              "Versão nova nos últimos meses, e perguntas respondidas na aba {{issues|Issues}}"
            ],
            [
              "4. Muita gente usa?",
              "Nos downloads por mês, no pypistats.org, e nas {{estrelas}} do GitHub",
              "Números altos e estáveis; são um sinal, não uma garantia"
            ],
            [
              "5. Está bem explicada?",
              "Na {{documentacao|documentação}}, o manual do projeto",
              "Tem um exemplo inicial que você entende e que roda"
            ]
          ]
        }
      ],
      [
        "p",
        "Um exemplo inteiro, com a `pandas`, a biblioteca mais usada para ler planilhas em Python. **É a original?** O nome é exato, `pandas`, e na página do PyPI o link do código leva a github.com/pandas-dev/pandas, o {{repositorio|repositório}} conhecido. **Resolve o meu problema?** A descrição fala em estruturas de dados para análise, e o exemplo inicial lê um arquivo {{csv|CSV}}, uma tabela em texto, em uma linha. Para planilhas `.xlsx` do Excel, a página de instalação da pandas avisa que ela precisa de outra biblioteca, a `openpyxl`; é uma dependência opcional, que não vem sozinha. **Está viva?** Em 01/11/2026, a última versão era a 3.1.0, publicada em 22/10/2026, e o repositório recebeu commit no próprio dia 01/11/2026 (conferido). **Muita gente usa?** O pypistats.org mostrava cerca de 547 milhões de downloads no último mês, e o GitHub, perto de 50 mil estrelas, os dois conferidos em 01/11/2026. **Está bem explicada?** A documentação tem um guia chamado \"10 minutes to pandas\", com exemplos que rodam. Passou nas cinco, e a licença, BSD, é permissiva. Tempo gasto: uns cinco minutos, quase todos na página do PyPI."
      ],
      [
        "p",
        "Sobre as estrelas: um estudo de 2024 encontrou milhões de estrelas falsas no GitHub, vendidas em lotes. Elas medem popularidade, e popularidade pode ser comprada. Uma biblioteca com 40 mil estrelas e nenhuma versão há três anos está mais morta que uma com 800 estrelas e versão do mês passado. Olhe a data antes do número."
      ],
      [
        "p",
        "E a {{licenca|licença}}, o documento que diz o que você pode fazer com aquele código? Para uso pessoal, quase nunca atrapalha. Se um dia você for vender algo com aquele código dentro, importa: licenças como MIT e Apache são permissivas, e outras obrigam a abrir o seu próprio código. Na página do PyPI, a licença fica no bloco \"License expression\" ou, em pacotes que ainda usam o campo antigo, \"License\": no PC, na coluna lateral; no celular, na aba \"Metadata\"."
      ],
      [
        "h3",
        "Por que isso importa para quem usa o Claude Code"
      ],
      [
        "p",
        "O Claude escolhe bem na maior parte do tempo, e também erra: às vezes sugere um pacote abandonado porque ele era o padrão quando o modelo foi treinado, às vezes inventa um nome plausível. Num modo que não pede confirmação, ele instala sem perguntar, então o controle é seu e vem antes do pedido. Uma frase resolve: \"antes de instalar qualquer biblioteca, me diga o nome exato, o link no PyPI e a data da última versão, e espere eu confirmar\". Isso cabe até no {{claude-md|CLAUDE.md}}, o arquivo de regras que a aula 7.5 ensina."
      ],
      [
        "p",
        "Quando ele instalar algo que você não pediu, não entre em pânico nem apague tudo: pergunte \"o que você instalou e por quê?\", passe o nome pelas cinco perguntas e, se não passar, trate como incidente, do jeito que o módulo 11 ensina."
      ],
      [
        "h3",
        "Quando não usar biblioteca nenhuma"
      ],
      [
        "p",
        "O Python já vem com dezenas de bibliotecas prontas, a chamada biblioteca padrão: ler e escrever {{json|JSON}}, abrir CSV, mexer com datas, baixar uma página simples. Para tarefa pequena, peça ao Claude \"faça só com a biblioteca padrão\". Menos coisa instalada é menos coisa para conferir e menos coisa para quebrar. Uma biblioteca de fora vale a pena quando ela resolve algo grande que você não quer escrever, como ler uma planilha do Excel ou desenhar um gráfico bonito."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Custa alguma coisa?** Não. PyPI, npm e quase todas as bibliotecas são gratuitas e de {{codigo-aberto|código aberto}}.",
          "**Instalei o pacote errado. Desinstalar resolve?** Desinstalar tira os arquivos, mas não desfaz o que um script de instalação já fez. Se o nome era suspeito, trate como vazamento: revogue primeiro as chaves que estavam no PC, e só depois crie outras, como a aula 11.3 ensina.",
          "**O Claude não confere isso por mim?** Confere se você pedir, e mesmo assim confira você: a página do pacote é a fonte, a resposta do Claude é uma leitura dela.",
          "**Por que a versão importa?** Porque uma versão nova pode mudar o que a antiga fazia, e o seu programa para de funcionar sem você ter mexido nele. A aula 4.2 mostra como travar a versão.",
          "**E biblioteca \"oficial\", de empresa grande?** Também envelhece. Olhe a data da última versão do mesmo jeito."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: os números da versão e dois casos famosos",
          "blocos": [
            [
              "p",
              "Uma versão como `2.34.2` tem três números: o primeiro muda quando algo quebra a compatibilidade, o segundo quando entra recurso novo, o terceiro quando é só conserto. Isso se chama versionamento semântico. A maioria das bibliotecas segue esse padrão, mas não todas: a `certifi`, que veio junto com a `requests` lá em cima, usa a data, como em `2026.10.23`. Ver o primeiro número subir, numa biblioteca que segue o padrão, é o aviso de que o seu código pode parar."
            ],
            [
              "p",
              "Dois casos que viraram aula de segurança: em 2018, a biblioteca `event-stream`, do npm, muito usada, passou para um novo mantenedor, que acrescentou a ela uma dependência com código escondido para roubar carteiras de criptomoeda de um aplicativo específico, segundo o relato do próprio npm. Em 2024, o `xz`, um utilitário de compressão muito usado no Linux, apareceu com uma porta dos fundos nas versões 5.6.0 e 5.6.1, posta por quem tinha ganhado a confiança do projeto, e foi descoberta por um engenheiro que estranhou logins lentos. Nos dois, o pacote era \"a original\" e tinha muita gente usando. Por isso as perguntas são cinco, e por isso a aula 4.2 ensina a travar versões."
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
          "pergunta": "Este programa usa uma biblioteca. Qual palavra você acha que é o nome dela? E o que parece que ele pede?",
          "codigo": "import requests\n\nresposta = requests.get(\"https://api.github.com\")\nprint(resposta.status_code)",
          "linguagem": "python",
          "resposta": "O nome é `requests`, e a primeira linha traz a biblioteca para dentro do programa. A terceira linha faz um pedido a um site, e a última mostra o resultado na tela: `200`, o código que significa \"deu certo\". Em quatro linhas você falou com a internet, porque alguém já escreveu a parte difícil. Isso depois de instalar: sem a instalação, aparece o `ModuleNotFoundError` que você viu acima."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "O Claude sugeriu instalar `requestss`, com dois \"s\" no final. O que você faz?",
          "o": [
            [
              "Confiro na página do pacote se esse é o nome certo",
              "Isso. O nome certo é requests, com um s. Confira o nome, o link do projeto e a data da última versão antes de instalar."
            ],
            [
              "Instalo, porque a IA costuma acertar esses nomes",
              "A IA às vezes inventa nomes de pacote, e golpistas registram esses nomes. Já houve campanha assim: a PhantomRaven, com 126 pacotes no npm."
            ],
            [
              "Instalo em uma pasta de teste, e removo depois se der problema",
              "Um pacote malicioso pode agir já na instalação. Remover depois pode ser tarde."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Recomendo a biblioteca X: ela tem 40 mil estrelas no GitHub, então é segura e bem mantida.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: tantas estrelas mostram que muita gente revisou o código dela",
              "Dar estrela não é revisar: é um clique, que pode até ser comprado. Estrelas medem popularidade, e não dizem se o projeto continua vivo."
            ],
            [
              "O erro é citar estrelas: o certo eram os downloads, que provam a segurança",
              "Downloads também não provam segurança: medem uso, e podem ser inflados por robôs. O que falta é a data da última versão e conferir se é a original."
            ],
            [
              "Estrelas não provam segurança nem manutenção; falta a data da versão",
              "Isso. Peça o nome exato, o link no PyPI e a data da última versão. Segurança vem de conferir, não de contar estrelas."
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
            "\"Tem muitas estrelas, então é segura.\"",
            "Estrelas mostram popularidade, não segurança. Elas também podem ser compradas."
          ],
          [
            "\"Vou instalar tudo o que o tutorial manda.\"",
            "Tutorial antigo pode citar pacote abandonado ou substituído. Passe cada um pelas cinco perguntas."
          ],
          [
            "\"A IA recomendou, então existe.\"",
            "Modelos inventam nomes de pacote, e golpistas registram esses nomes. Confira na página do PyPI antes de instalar."
          ],
          [
            "\"Deu ModuleNotFoundError, a biblioteca é ruim.\"",
            "Quase sempre ela só não está instalada naquele ambiente, ou o nome está errado. Instale com o nome certo."
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
          "p": "Quais são as cinco perguntas, e qual vem primeiro?",
          "r": [
            "É a original? Vem primeiro, porque um pacote malicioso pode agir já na instalação.",
            "Resolve o meu problema?",
            "Está viva? Muita gente usa?",
            "Está bem explicada?"
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que significa ModuleNotFoundError, e o que quase sempre resolve?",
          "r": [
            "O Python não encontrou a biblioteca com aquele nome.",
            "Quase sempre ela não foi instalada naquele ambiente, ou o nome está escrito errado.",
            "Instalar com o nome certo, no ambiente certo."
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
          "titulo": "Compare duas bibliotecas de verdade",
          "lugar": "No PC, com o Claude Code, e no navegador",
          "tempo": "15 minutos",
          "antes": "Aqui você não instala nada: só compara. Você vai pedir ao {{claude-code|Claude Code}} uma comparação e depois conferir na fonte se o que ele disse bate. É o treino mais importante do curso: pegar a IA errando com a página aberta do lado. Pelo app: o primeiro passo dá para fazer no app do Claude, no celular ou na web, com o mesmo pedido, e o resto é no navegador do celular. As páginas do PyPI e do pypistats foram conferidas em 01/11/2026. O passo com o Claude Code foi escrito a partir do que ele costuma fazer; como ele conversa, as frases exatas podem variar. Não foi rodado de ponta a ponta antes de publicar.",
          "passos": [
            {
              "faz": "Cole este pedido no Claude Code. Se ele pedir permissão para buscar na internet, aceite.",
              "cola": "Compare as bibliotecas de Python pandas e polars para ler planilhas. Para cada uma, me dê o link da página no PyPI, a data da última versão e a licença. Não instale nada.",
              "espera": "O Claude mostra as duas lado a lado, com um link pypi.org/project/pandas e outro pypi.org/project/polars, uma data e uma licença para cada."
            },
            {
              "faz": "Abra no {{navegador}} o link do pandas, pypi.org/project/pandas.",
              "espera": "Abre a página do pacote no PyPI, com o nome no alto, a versão atual, a data dela e os links do projeto. A licença fica no bloco \"License expression\" (em pacotes que ainda usam o campo antigo, \"License\"): na coluna lateral, no PC; na aba \"Metadata\", no celular."
            },
            {
              "faz": "Compare a data e a licença da página com o que o Claude escreveu sobre o pandas.",
              "espera": "O pandas mostra BSD-3-Clause no bloco \"License expression\": uma licença BSD. Se a data ou a licença não baterem, a página está certa e a resposta do Claude está errada: anote, porque é assim que você pega um erro da IA."
            },
            {
              "faz": "Abra no navegador o link do polars, pypi.org/project/polars.",
              "espera": "Abre a página do polars no PyPI, no mesmo formato da do pandas, com uma diferença: aqui a licença fica no bloco \"License\", o do campo antigo, que muitos pacotes ainda usam."
            },
            {
              "faz": "Compare a data e a licença da página com o que o Claude escreveu sobre o polars.",
              "espera": "O polars mostra, no bloco \"License\", MIT License, seguido do nome do autor: uma licença MIT. De novo, o que vale é a página."
            },
            {
              "faz": "Abra pypistats.org/packages/pandas e olhe o número de downloads do último mês.",
              "espera": "Aparece \"Downloads last month\" com um número na casa das centenas de milhões, e um gráfico por dia."
            },
            {
              "faz": "Abra pypistats.org/packages/polars e compare com o pandas.",
              "espera": "O polars tem bem menos downloads, na casa das dezenas de milhões, e ainda assim muita gente usa. Os dois números são sinal, não prova."
            },
            {
              "faz": "Escolha uma das duas, pensando nas cinco perguntas.",
              "espera": "As duas passam nas cinco. A diferença fica na segunda pergunta: pandas é mais antiga e tem mais exemplos; polars é mais rápida com planilhas grandes."
            }
          ],
          "errado": "se um link não abrir, ou o pacote não existir, peça ao Claude para conferir de novo, e não instale nada. Se ele instalar algo sem você pedir, pergunte \"o que você instalou e por quê?\" antes de seguir."
        }
      ],
      [
        "fontes",
        [
          [
            "Concise Guide for Evaluating Open Source Software, OpenSSF",
            "https://best.openssf.org/Concise-Guide-for-Evaluating-Open-Source-Software",
            "comunidade",
            "31/10/2026"
          ],
          [
            "PyPI Stats da pandas (cerca de 547 milhões de downloads no último mês)",
            "https://pypistats.org/packages/pandas",
            "comunidade",
            "01/11/2026"
          ],
          [
            "Página da pandas no PyPI (licença no bloco \"License expression\": BSD-3-Clause)",
            "https://pypi.org/project/pandas/",
            "oficial",
            "02/11/2026"
          ],
          [
            "Página da polars no PyPI (licença no bloco \"License\": MIT License)",
            "https://pypi.org/project/polars/",
            "oficial",
            "02/11/2026"
          ],
          [
            "Repositório da pandas no GitHub (perto de 50 mil estrelas; commit em 01/11/2026)",
            "https://github.com/pandas-dev/pandas",
            "comunidade",
            "01/11/2026"
          ],
          [
            "Instalação da pandas (openpyxl para arquivos .xlsx)",
            "https://pandas.pydata.org/docs/getting_started/install.html",
            "oficial",
            "01/11/2026"
          ],
          [
            "Formatos de pacote: wheel e sdist, guia oficial do Python",
            "https://packaging.python.org/pt-br/latest/discussions/package-formats/",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Scripts do npm (preinstall, install e postinstall)",
            "https://docs.npmjs.com/cli/v11/using-npm/scripts/",
            "oficial",
            "01/11/2026"
          ],
          [
            "Módulo site e arquivos .pth, documentação do Python",
            "https://docs.python.org/pt-br/3/library/site.html",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Details about the event-stream incident, npm (27/11/2018)",
            "https://blog.npmjs.org/post/180565383195/details-about-the-event-stream-incident",
            "oficial",
            "01/11/2026"
          ],
          [
            "Backdoor in upstream xz/liblzma, Andres Freund, lista oss-security (29/03/2024)",
            "https://www.openwall.com/lists/oss-security/2024/03/29/4",
            "comunidade",
            "01/11/2026"
          ],
          [
            "The great big open-source census (cita o caso colourama, de 2018), The Register",
            "https://www.theregister.com/software/2020/02/20/the-great-big-open-source-census-most-used-libraries-revealed-plus-10-things-developers-should-be-doing-to-keep-their-code-secure/907138",
            "imprensa",
            "01/11/2026"
          ],
          [
            "We Have a Package for You! (estudo sobre pacotes inventados, apresentado em 2025)",
            "https://arxiv.org/abs/2406.10279",
            "acadêmico",
            "31/10/2026"
          ],
          [
            "Estrelas falsas no GitHub (estudo de 2024)",
            "https://arxiv.org/abs/2412.13459",
            "acadêmico",
            "31/10/2026"
          ],
          [
            "PhantomRaven: 126 pacotes no npm, The Hacker News",
            "https://thehackernews.com/2025/10/phantomraven-malware-found-in-126-npm.html",
            "imprensa",
            "31/10/2026"
          ],
          [
            "Instalando pacotes, guia oficial do Python",
            "https://packaging.python.org/pt-br/latest/tutorials/installing-packages/",
            "oficial",
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
          "Quanto mais estrelas e downloads uma biblioteca tem, mais segura e mais bem mantida ela é",
          "Estrelas mostram popularidade, e não segurança nem manutenção; downloads também podem ser inflados."
        ],
        [
          "Antes de instalar, passe a biblioteca pelas cinco perguntas, começando por: é a original?",
          "Isso. São as cinco perguntas, e a primeira vem primeiro."
        ],
        [
          "Se o nome sugerido pela IA aparece no PyPI, a biblioteca é a original e pode ser instalada",
          "Aparecer no PyPI prova que o nome existe, não que é o original: golpistas registram nomes parecidos e nomes que a IA inventa."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O que é uma biblioteca?",
        "o": [
          [
            "Um site com a documentação de um programa",
            "A documentação é o manual; a biblioteca é o código."
          ],
          [
            "Um programa que você instala para escrever código",
            "Programa para escrever código é um editor, como o VS Code. A biblioteca é código pronto que o seu programa usa."
          ],
          [
            "Código pronto que você usa no seu projeto",
            "Isso. Alguém já escreveu e testou, e você usa sem escrever de novo."
          ]
        ],
        "c": 2
      },
      {
        "p": "Por que conferir o nome letra por letra antes de instalar?",
        "o": [
          [
            "Porque um nome errado instala uma versão antiga da mesma biblioteca",
            "Um nome diferente é outro pacote, de outro dono, e não outra versão do mesmo. É assim que o golpe funciona."
          ],
          [
            "Porque golpistas publicam pacotes com nomes parecidos",
            "Isso. Um nome quase igual pode ser um pacote malicioso, e ele pode agir já na instalação."
          ],
          [
            "Porque o pip para no meio e deixa o ambiente quebrado se o nome falhar",
            "Se o nome não existir, o pip só avisa que não achou e não instala nada. O perigo é o nome que existe e é de outra pessoa."
          ]
        ],
        "c": 1
      }
    ],
    "tutor": [
      [
        "Onde vejo a data da última versão?",
        "Em Python, na página do pacote no PyPI, em \"Release history\". Em JavaScript, na página no npm, em \"Last publish\". Se a última versão for de anos atrás, desconfie."
      ],
      [
        "Licença importa para mim?",
        "Para uso pessoal, quase nunca atrapalha. Se você for vender algo com aquele código, importa: licenças como MIT e Apache são permissivas, e outras obrigam a abrir o seu código. Na dúvida, peça ao Claude para explicar a licença daquele projeto."
      ],
      [
        "O que é uma dependência?",
        "Uma biblioteca de que outra biblioteca precisa. Ao instalar a requests, vieram mais quatro: certifi, charset-normalizer, idna e urllib3. Você confia em todas ao instalar uma."
      ]
    ]
  },
  "4-2": {
    "tempo": 44,
    "video": "a4-2",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você pediu ao Claude para {{instalar}} uma {{biblioteca}}, tudo funcionou, e semanas depois o mesmo {{programa}} parou com um erro sem ninguém ter mexido nele; ou funcionou no seu PC e falhou no de outra pessoa. Esta aula mostra onde a instalação vai parar, o que o número da {{versao|versão}} quer dizer e os dois arquivos que fazem uma instalação se repetir igual.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 4.1 ensinou a escolher uma biblioteca. Esta ensina a instalar de um jeito que dure. Instalar não é só baixar: é decidir onde a biblioteca fica (num lugar só deste projeto ou no {{python|Python}} do PC inteiro), qual versão entra e se, daqui a um mês, a mesma instalação vai trazer a mesma coisa. Quem faz esse trabalho é o {{gerenciador-de-pacotes|gerenciador de pacotes}}: o {{pip}}, o {{uv}} ou o {{npm}}."
      ],
      [
        "p",
        "Três problemas reais saem daqui. O programa que funcionava quebra porque, numa reinstalação, uma biblioteca veio numa versão mais nova. O famoso \"instalei e continua dando erro\" acontece porque a biblioteca foi para um Python e o programa {{rodar|rodou}} em outro. E o projeto que você manda a um colega instala versões diferentes no PC dele. Os três se resolvem com três peças: um ambiente só do projeto, uma ficha com o que ele pede e uma trava com o que foi instalado."
      ],
      [
        "p",
        "Para quem usa o {{claude-code|Claude Code}}, isso pesa ainda mais. Ele instala bibliotecas o tempo todo e, num modo que não pede confirmação, instala sem perguntar. Sabendo ler a ficha e a trava, você confere o que ele fez sem ler {{codigo|código}}, e sabe pedir do jeito certo. E tem um lado de segurança: a trava impede que uma versão nova, que ninguém revisou, entre no seu projeto sem você pedir."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa compra de mercado. A {{ficha-do-projeto|ficha do projeto}} é a lista de compras: \"arroz tipo 1, pacote de 5 kg ou maior\". Ela diz o que você precisa e aceita várias opções: qualquer marca que atenda serve. O {{arquivo-de-trava|arquivo de trava}} é a nota fiscal da compra que deu certo: \"arroz da marca tal, 5 kg, código de barras tal\", item por item, inclusive o que veio junto sem estar na lista. Com a lista na mão, cada ida ao mercado pode trazer algo um pouco diferente; com a nota, quem for depois compra exatamente o mesmo. E cada projeto guarda as compras no próprio armário, o {{ambiente-isolado|ambiente isolado}}, para os mantimentos de um não se misturarem com os de outro."
      ],
      [
        "quebra",
        "A nota fiscal não prova que o produto é igual por dentro; o arquivo de trava prova: ele guarda o {{hash}} de cada pacote, uma impressão digital do conteúdo, e o instalador recusa um {{arquivo}} que não bata. Outra diferença: no mercado, quem escreve a lista é você; aqui, quem escreve a lista e a nota é o gerenciador, quando você pede para adicionar uma biblioteca. E o mercado pode parar de vender um produto, enquanto no {{pypi|PyPI}} e no npm as versões antigas costumam continuar disponíveis por anos, e é isso que faz a nota servir."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Três gerenciadores, o mesmo trabalho"
      ],
      [
        "p",
        "O gerenciador de pacotes é o programa que conversa com o {{site}} das bibliotecas (o PyPI, para Python, e o registro do npm, para {{javascript|JavaScript}}), baixa o {{pacote}} certo, coloca numa {{pasta}} onde o seu programa o encontra e anota o que fez. Você vai ver três:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Gerenciador",
            "Para",
            "Ficha",
            "Trava",
            "Onde instala"
          ],
          "linhas": [
            [
              "pip",
              "Python; vem junto com ele",
              "Não cria sozinho",
              "Não tem uma oficial; o mais perto é o `requirements.txt`",
              "No Python que rodou o {{comando}}"
            ],
            [
              "uv",
              "Python; instala-se à parte",
              "`pyproject.toml`",
              "`uv.lock`",
              "Na pasta `.venv` do projeto"
            ],
            [
              "npm",
              "JavaScript; vem com o {{node|Node.js}}",
              "`package.json`",
              "`package-lock.json`",
              "Na pasta `node_modules` do projeto"
            ]
          ]
        }
      ],
      [
        "p",
        "Este curso usa o uv nos projetos em Python porque ele faz sozinho as três coisas desta aula: cria o ambiente, escreve a ficha e grava a trava. O pip continua importante: é o que vem com o Python, é o que os tutoriais antigos usam e é o que o Claude às vezes sugere. O npm aparece quando o projeto é um site em JavaScript, no módulo 15; você não escreve JavaScript, mas vai rodar `npm install` e ler os arquivos que ele cria."
      ],
      [
        "p",
        "O uv não vem com o Python: você instala uma vez, pelo {{winget}}, como mostra o laboratório. Ele também passou pelas cinco perguntas da 4.1: é de {{codigo-aberto|código aberto}}, da empresa Astral, o nome é exato, o link do PyPI leva ao {{repositorio|repositório}} dela no {{github|GitHub}}, github.com/astral-sh/uv, e a versão mais nova era a 0.13.7, de 03/11/2026 (conferido em 08/11/2026)."
      ],
      [
        "h3",
        "O ambiente isolado: uma pasta de bibliotecas por projeto"
      ],
      [
        "p",
        "Sem ambiente isolado, `pip install` põe a biblioteca no Python do PC inteiro. Funciona até o dia em que dois projetos precisam de versões diferentes da mesma biblioteca: só cabe uma, e instalar a do projeto B quebra o projeto A. O ambiente isolado resolve isso com uma pasta, em geral chamada `.venv`, dentro do projeto, com um Python e as bibliotecas só daquele projeto. Ambiente isolado, `.venv` e {{ambiente-virtual|ambiente virtual}} são três nomes para a mesma coisa, como a 4.1 avisou."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, com o uv. Numa pasta nova, `uv init --bare` cria a ficha, e `uv add requests` faz o resto: cria a `.venv`, escolhe as versões, instala e anota. Esta é a saída real, numa pasta nova, em 08/11/2026; a primeira linha mostra o {{caminho}} do Python do seu PC:"
      ],
      [
        "saida",
        "Using CPython 3.12.10 interpreter at: C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe\nCreating virtual environment at: .venv\nResolved 6 packages in 314ms\nPrepared 5 packages in 96ms\nInstalled 5 packages in 25ms\n + certifi==2026.10.23\n + charset-normalizer==3.5.2\n + idna==3.20\n + requests==2.34.2\n + urllib3==2.8.0"
      ],
      [
        "p",
        "Linha por linha: \"Using CPython 3.12.10\" é o Python do PC que serviu de base (CPython é o nome do Python oficial). \"Creating virtual environment at: .venv\" é a pasta nova. \"Resolved 6 packages\" conta a `requests`, as quatro {{dependencia|dependências}} dela e o próprio projeto. \"Prepared\" é o download, e \"Installed 5 packages\" é a cópia para dentro da `.venv`. Nada foi para o Python do PC."
      ],
      [
        "p",
        "Para rodar um programa com as bibliotecas da `.venv`, o jeito do uv é `uv run app.py`: ele acha a `.venv` da pasta e usa o Python de lá. Já `python app.py` usa o Python do PC, que não tem a `requests`, e o resultado é o `ModuleNotFoundError` da aula 4.1. É por isso que \"instalei e continua dando erro\" quase sempre é ambiente diferente: a biblioteca está num Python, e o programa rodou em outro."
      ],
      [
        "p",
        "O caminho antigo, com o pip, tem dois passos: `python -m venv .venv` cria a pasta, e `.venv\\Scripts\\python -m pip install requests` instala dentro dela. Muitos tutoriais mandam \"ativar\" o ambiente antes, com `.venv\\Scripts\\Activate.ps1`, e num Windows comum isso falha com esta mensagem real, aqui com o caminho de uma pasta C:\\Projetos\\versoes:"
      ],
      [
        "saida",
        ".venv\\Scripts\\Activate.ps1 : File C:\\Projetos\\versoes\\.venv\\Scripts\\activate.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.\nAt line:1 char:1\n+ .venv\\Scripts\\Activate.ps1\n+ ~~~~~~~~~~~~~~~~~~~~~~~~~~\n    + CategoryInfo          : SecurityError: (:) [], PSSecurityException\n    + FullyQualifiedErrorId : UnauthorizedAccess"
      ],
      [
        "p",
        "Em português: \"o arquivo activate.ps1 não pode ser carregado porque rodar {{script|scripts}} está desativado neste sistema\". É a {{politica-de-execucao|política de execução}} do {{powershell|PowerShell}}, uma regra de segurança que, no Windows comum, bloqueia scripts `.ps1`. As fontes aqui discordam no conselho: a {{documentacao|documentação}} do Python sugere liberar os scripts do seu usuário com o comando `Set-ExecutionPolicy`, enquanto o uv dispensa a ativação. Liberar é mexer numa regra de segurança do Windows; com o uv, você não precisa, porque o `uv run` já usa a `.venv`. Com o pip, chamar `.venv\\Scripts\\python` direto também dispensa a ativação."
      ],
      [
        "p",
        "Quando não usar ambiente isolado: num {{script}} de uma tela que só usa a biblioteca padrão do Python, a que já vem com ele, não há o que isolar. E a `.venv` não viaja: ela tem caminhos do seu PC lá dentro, então não se copia para outro computador e não vai para o {{git|Git}}. O uv já põe dentro dela um arquivo `.gitignore` com um `*`, que manda o Git ignorar tudo ali. Quem vai para o Git são a ficha e a trava, e com as duas o comando `uv sync` recria a `.venv` em qualquer PC."
      ],
      [
        "h3",
        "O que a versão quer dizer, e a faixa que a ficha aceita"
      ],
      [
        "p",
        "Uma versão como `2.34.2` segue, na maioria das bibliotecas, o {{versionamento-semantico|versionamento semântico}} da caixa \"Para ir mais fundo\" da 4.1: o primeiro número sobe quando algo quebra a compatibilidade, o segundo quando entra recurso novo, o terceiro quando é só conserto. É uma promessa de quem publica, e não uma garantia: às vezes um conserto quebra alguma coisa sem querer."
      ],
      [
        "p",
        "A ficha quase nunca guarda uma versão só. Ela guarda uma {{faixa-de-versoes|faixa de versões}}, e as formas que você mais vai ver são estas:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Escrito assim",
            "Onde aparece",
            "Quer dizer"
          ],
          "linhas": [
            [
              "`requests>=2.34.2`",
              "No `pyproject.toml`, escrito pelo `uv add`",
              "A 2.34.2 ou qualquer mais nova, até uma 3.0"
            ],
            [
              "`requests==2.34.2`",
              "No `requirements.txt`, ou em quem quer fixar",
              "Só a 2.34.2"
            ],
            [
              "`urllib3<3,>=1.26`",
              "Nas exigências da própria `requests`",
              "Da 1.26 em diante, mas abaixo da 3"
            ],
            [
              "`\"dayjs\": \"^1.11.23\"`",
              "No `package.json`, escrito pelo `npm install`",
              "A 1.11.23 ou mais nova, mas abaixo da 2.0.0"
            ]
          ]
        }
      ],
      [
        "p",
        "Repare na diferença: o `>=` que o uv escreve aceita até uma versão que quebra, e o `^` do npm para antes dela. As dependências também têm faixas: ao instalar a `requests` com o pip, a saída real mostra `Collecting urllib3<3,>=1.26 (from requests)`, a faixa que a própria `requests` exige. Por isso a faixa sozinha não repete uma instalação: hoje, `>=2.34.2` dá a 2.34.2; no mês que vem, pode dar uma 2.35. Quem fixa a versão exata é a trava."
      ],
      [
        "h3",
        "A ficha do projeto: pyproject.toml e package.json"
      ],
      [
        "p",
        "A ficha do projeto é um arquivo de texto que diz quem é o projeto e do que ele precisa. Em Python, é o `pyproject.toml`. Esta é a ficha real do exemplo, depois do `uv add requests`:"
      ],
      [
        "codigo",
        {
          "texto": "[project]\nname = \"versoes\"\nversion = \"0.1.0\"\nrequires-python = \">=3.12\"\ndependencies = [\n    \"requests>=2.34.2\",\n]",
          "linguagem": "texto",
          "rotulo": "pyproject.toml"
        }
      ],
      [
        "p",
        "As linhas `name` e `version` são o nome e a versão do **seu** projeto, e não da biblioteca. A `requires-python` é a versão mínima do Python, tirada do Python do seu PC. E `dependencies` é a lista de compras: só o que você pediu, com a faixa. As quatro dependências da `requests` não aparecem aqui, porque quem pediu foi a `requests`, e não você."
      ],
      [
        "p",
        "Em JavaScript, a ficha é o `package.json`. O comando `npm init -y` cria a ficha, e o `npm install dayjs` acrescenta a biblioteca, uma pequena biblioteca de datas. Este é o arquivo real depois dos dois comandos:"
      ],
      [
        "codigo",
        {
          "texto": "{\n  \"name\": \"site-npm\",\n  \"version\": \"1.0.0\",\n  \"description\": \"\",\n  \"main\": \"index.js\",\n  \"scripts\": {\n    \"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"\n  },\n  \"keywords\": [],\n  \"author\": \"\",\n  \"license\": \"ISC\",\n  \"type\": \"commonjs\",\n  \"dependencies\": {\n    \"dayjs\": \"^1.11.23\"\n  }\n}",
          "linguagem": "json",
          "rotulo": "package.json"
        }
      ],
      [
        "p",
        "A parte que importa aqui é `dependencies`, com a faixa `^1.11.23`. O `scripts` guarda atalhos que o `npm run` executa, e a aula 4.4 volta a ele. A saída real do `npm install dayjs` foi curta: `added 1 package, and audited 2 packages in 1s` e `found 0 vulnerabilities`, que quer dizer \"nenhuma falha conhecida nessas versões\". E o `npm install` sem nome lê a ficha e instala tudo o que está nela, na pasta {{node-modules|node_modules}}."
      ],
      [
        "h3",
        "O arquivo de trava: uv.lock e package-lock.json"
      ],
      [
        "p",
        "O arquivo de trava é a nota fiscal. O gerenciador escreve sozinho, a cada instalação, a versão exata de cada pacote, inclusive das dependências, o lugar de onde ele veio e o hash do arquivo. O `uv.lock` do exemplo tem 187 linhas, quase todas endereços e hashes. Filtrando só os nomes e as versões, com o comando `Select-String -Path uv.lock -Pattern '^name = |^version = '`, a saída real é esta:"
      ],
      [
        "saida",
        "version = 1\nname = \"certifi\"\nversion = \"2026.10.23\"\nname = \"charset-normalizer\"\nversion = \"3.5.2\"\nname = \"idna\"\nversion = \"3.20\"\nname = \"requests\"\nversion = \"2.34.2\"\nname = \"urllib3\"\nversion = \"2.8.0\"\nname = \"versoes\"\nversion = \"0.1.0\""
      ],
      [
        "p",
        "A primeira linha é a versão do {{formato}} do próprio arquivo. Depois vem cada pacote, com o nome e a versão exata, e no fim o próprio projeto. No arquivo inteiro, cada pacote traz também `source`, o endereço do PyPI, e, para cada arquivo que pode ser baixado, um `hash` que começa com `sha256:` e segue com 64 letras e números. No npm, o `package-lock.json` faz o mesmo: para a dayjs, guarda `\"version\": \"1.11.23\"`, o endereço do pacote em `resolved` e a impressão digital em `integrity`."
      ],
      [
        "p",
        "Três regras de uso. **Primeira:** a trava vai para o Git, junto com a ficha; a documentação do uv e a do npm dizem isso com todas as letras. **Segunda:** ninguém edita a trava à mão. Quem muda a trava é o gerenciador, quando você adiciona (`uv add`), remove (`uv remove`) ou atualiza uma biblioteca. **Terceira:** para instalar exatamente o que está na trava, num PC novo ou depois de apagar a `.venv`, use `uv sync`; no npm, `npm ci`, que só instala a partir da trava e recusa trabalhar sem ela. Estas são as primeiras linhas da saída real do `npm ci` numa pasta sem a trava; depois delas, a mensagem lista as opções do comando:"
      ],
      [
        "saida",
        "npm error code EUSAGE\nnpm error\nnpm error The `npm ci` command can only install with an existing package-lock.json or\nnpm error npm-shrinkwrap.json with lockfileVersion >= 1. Run an install with npm@5 or\nnpm error later to generate a package-lock.json file, then try again."
      ],
      [
        "p",
        "O uv tem a mesma proteção: `uv sync --locked` instala pela trava e para com erro se ela faltar ou não combinar com a ficha. Numa pasta sem a trava, a resposta real é esta:"
      ],
      [
        "saida",
        "error: Unable to find lockfile at `uv.lock`, but `--locked` was provided. To create a lockfile, run `uv lock` or `uv sync` without the flag."
      ],
      [
        "h3",
        "Instalar é deixar código rodar"
      ],
      [
        "p",
        "A aula 4.1 mostrou que um pacote pode rodar código já na instalação. A trava ajuda de dois jeitos: com ela, uma versão nova não entra sem você pedir, e o hash impede que o arquivo seja trocado no caminho. No módulo 11, você vai ver casos de versões novas de pacotes famosos publicadas com código malicioso; quem instalava pela trava continuava na versão antiga, que era boa."
      ],
      [
        "p",
        "O npm 11.16, a versão do PC em que esta aula foi testada, passou a avisar quando um pacote traz script de instalação que ninguém revisou. Saída real de `npm install esbuild`, um pacote conhecido que, ao ser instalado, baixa um programa:"
      ],
      [
        "saida",
        "added 2 packages, and audited 3 packages in 2s\n\nfound 0 vulnerabilities\nnpm warn allow-scripts 1 package has install scripts not yet covered by allowScripts:\nnpm warn allow-scripts   esbuild@0.28.2 (postinstall: node install.js)\nnpm warn allow-scripts\nnpm warn allow-scripts Run `npm approve-scripts --allow-scripts-pending` to review, or `npm approve-scripts <pkg>` to allow."
      ],
      [
        "p",
        "Em português: \"1 pacote tem scripts de instalação que ainda não estão na lista dos permitidos\", e o script é `node install.js`, que rodou depois da instalação (postinstall). Repare na ordem: o aviso chega depois de o script rodar. A documentação do npm diz que, por enquanto, essa lista é só um aviso, e que uma versão futura vai bloquear os scripts que ninguém revisou. Hoje, ele serve para você saber o que rodou no seu PC."
      ],
      [
        "h3",
        "Por que isso importa para quem usa o Claude Code"
      ],
      [
        "p",
        "Quando o Claude precisa de uma biblioteca, ele às vezes roda `pip install` no Python do PC inteiro, sem ambiente. Peça do jeito certo, e a frase cabe no {{claude-md|CLAUDE.md}} da aula 7.5: \"neste projeto, instale bibliotecas com `uv add` e rode programas com `uv run`; nunca use `pip install` fora da `.venv`\". Depois que ele instalar algo, o {{diff|git diff}} das aulas do módulo 3 mostra exatamente o que mudou no `pyproject.toml` e no `uv.lock`: uma linha nova na ficha e um bloco novo na trava para cada pacote que entrou."
      ],
      [
        "p",
        "E desconfie de uma sugestão comum: \"apague o arquivo de trava e instale de novo\" para resolver um erro. Às vezes resolve, porque traz versões novas; mas troca todas as versões de uma vez, sem você ver o que mudou. O \"Preveja antes de ver\", logo abaixo, mostra o que acontece."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** O uv, uma vez, pelo laboratório. O pip já vem com o Python, e o npm, com o Node.js.",
          "**Custa?** Não. O uv, o pip e o npm são gratuitos, e as bibliotecas do PyPI e do npm também.",
          "**E se eu apagar a .venv sem querer?** Nada se perde: `uv sync` recria a pasta a partir da ficha e da trava, com as mesmas versões.",
          "**Uma .venv por projeto não ocupa espaço demais?** Ocupa algum, e o uv economiza: ele guarda uma cópia de cada pacote baixado numa pasta de {{cache}} e reaproveita nos outros projetos, sem baixar de novo.",
          "**Devo pôr o uv.lock no Git?** Sim, junto com o `pyproject.toml`. A `.venv`, não.",
          "**E o requirements.txt que aparece em tanto tutorial?** É o jeito antigo do pip: uma lista com `==`, gerada por `pip freeze > requirements.txt`. Serve como trava simples, sem hash. Num projeto do uv, `uv add -r requirements.txt` traz as bibliotecas dele para a ficha."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: atualizar de propósito e travar num dia passado",
          "blocos": [
            [
              "p",
              "Para ver o que tem versão nova sem mudar nada, `uv tree --outdated` mostra a árvore com a versão mais nova ao lado de cada pacote. Saída real num projeto travado em junho de 2025: `requests v2.32.3 (latest: v2.34.2)`, e o mesmo para cada dependência. Para atualizar de propósito, `uv lock --upgrade-package requests` sobe só a `requests` (dentro da faixa da ficha) e o que for preciso para ela, e `uv lock --upgrade` sobe tudo. Depois, `uv sync` instala, e o `git diff` do `uv.lock` mostra o que mudou."
            ],
            [
              "p",
              "A opção `--exclude-newer` faz o uv fingir que é outro dia: `uv add requests --exclude-newer 2025-06-01` escolhe as versões que existiam até aquela data. Foi assim que esta aula montou o projeto antigo do \"Preveja antes de ver\": com essa opção e, depois, tirando da trava, à mão, as duas linhas que registravam a data, para ela ficar igual à de um projeto criado naquele dia. Foi a única vez que uma trava foi editada à mão nesta aula, e só para montar o exemplo."
            ],
            [
              "p",
              "A trava não é invenção do uv nem do npm: quase todo gerenciador moderno tem uma, e o Python aprovou em 2025 um formato padrão de trava, o `pylock.toml` (PEP 751), para gerenciadores diferentes lerem o mesmo arquivo."
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
          "pergunta": "Para esta aula, criamos um projeto que travou as versões como se fosse 1º de junho de 2025. A ficha diz `requests>=2.32.3`, e a trava guarda `requests` 2.32.3. Numa pasta só com esses dois arquivos, sem a `.venv`, você roda os dois comandos abaixo, e o segundo mostra a versão da `requests` que ficou instalada. O que você acha que aparece no fim? E se, depois, alguém apagar o uv.lock e rodar tudo de novo?",
          "codigo": "uv sync\nuv run python -c \"import requests; print(requests.__version__)\"",
          "linguagem": "powershell",
          "resposta": "Com a trava, aparece `2.32.3`: o `uv sync` instala exatamente o que está no uv.lock, a versão de junho de 2025, mesmo existindo outras mais novas. Sem a trava, o uv escolhe tudo de novo, dentro da faixa da ficha (`>=2.32.3`), e pega a versão mais nova de cada pacote: a `requests` pula para a 2.34.2, e as quatro dependências também mudam. Não aparece nenhum aviso de \"atenção, mudou\": só as linhas com `-` (o que saiu) e `+` (o que entrou), e um uv.lock novo, gravado em silêncio. Se o programa dependia de algo que mudou nesse meio-tempo, ele quebra sem ninguém ter mexido nele. Use os botões para ver as duas saídas reais.",
          "vivo": [
            [
              "Rodar com a trava, como veio",
              "uv sync\nuv run python -c \"import requests; print(requests.__version__)\"",
              "Using CPython 3.12.10 interpreter at: C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe\nCreating virtual environment at: .venv\nResolved 6 packages in 1ms\nInstalled 5 packages in 28ms\n + certifi==2025.4.26\n + charset-normalizer==3.4.2\n + idna==3.10\n + requests==2.32.3\n + urllib3==2.4.0\n2.32.3"
            ],
            [
              "Depois, apagar a trava e rodar de novo",
              "Remove-Item uv.lock\nuv sync\nuv run python -c \"import requests; print(requests.__version__)\"",
              "Resolved 6 packages in 8ms\nUninstalled 5 packages in 18ms\nInstalled 5 packages in 28ms\n - certifi==2025.4.26\n + certifi==2026.10.23\n - charset-normalizer==3.4.2\n + charset-normalizer==3.5.2\n - idna==3.10\n + idna==3.20\n - requests==2.32.3\n + requests==2.34.2\n - urllib3==2.4.0\n + urllib3==2.8.0\n2.34.2"
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
          "p": "Você vai mandar o projeto versoes para um colega rodar no PC dele. O que ele precisa receber para instalar exatamente as mesmas versões que você tem?",
          "o": [
            [
              "A pasta .venv inteira, que já tem todas as bibliotecas instaladas",
              "A .venv tem caminhos do seu PC lá dentro e não funciona em outro computador. Ela se recria a partir da ficha e da trava."
            ],
            [
              "Só o pyproject.toml, porque ele já lista as bibliotecas do projeto",
              "A ficha guarda faixas, como >=2.34.2. Sem a trava, o uv do colega escolhe de novo e pode pegar versões mais novas."
            ],
            [
              "O pyproject.toml e o uv.lock; com os dois, ele roda uv sync",
              "Isso. A ficha diz o que o projeto pede, a trava diz a versão exata de cada pacote, e o uv sync monta a .venv igual à sua."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou como manter o projeto seguro com o tempo, e o Claude respondeu: \"Versão nova traz correção de segurança. Então, de vez em quando, apague o uv.lock e rode uv sync: o projeto fica sempre com as versões mais novas.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: a versão mais nova sempre é a mais segura, então vale apagar a trava",
              "Versão nova também pode quebrar o programa, ou até trazer código malicioso, como o módulo 11 vai mostrar. Atualizar é bom; às cegas, não."
            ],
            [
              "Apagar a trava troca tudo sem revisão; atualize de propósito e confira o que mudou",
              "Isso. uv lock --upgrade-package (ou --upgrade) atualiza de propósito, e o git diff do uv.lock mostra cada versão que mudou antes de você seguir."
            ],
            [
              "O erro é o uv sync: sem o uv.lock, ele não instala nada e o projeto para",
              "Sem a trava, o uv sync cria uma nova e instala as versões mais novas da faixa, como o Preveja mostrou. O problema é justamente que ele instala, sem avisar."
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
            "\"Instalei, mas continua dando ModuleNotFoundError.\"",
            "Quase sempre a biblioteca está num Python e o programa rodou em outro. Num projeto do uv, rode com `uv run arquivo.py`, que usa a `.venv`."
          ],
          [
            "\"Vou apagar o uv.lock para resolver o erro.\"",
            "Apagar a trava faz o uv escolher todas as versões de novo, sem você ver o que mudou. Para atualizar, use `uv lock --upgrade-package nome` e confira o `git diff`."
          ],
          [
            "\"Vou mandar a pasta com a .venv para o meu colega.\"",
            "A `.venv` só funciona no PC em que foi criada. Mande a ficha e a trava; ele roda `uv sync`."
          ],
          [
            "\"A ativação deu erro de scripts; vou liberar a política de execução.\"",
            "Dá para liberar, mas é mexer numa regra de segurança do Windows. Com o uv, você não precisa ativar: `uv run` já usa a `.venv`."
          ],
          [
            "\"O pip install funcionou, então a biblioteca está no projeto.\"",
            "Sem ambiente, `pip install` põe a biblioteca no Python do PC inteiro, fora da ficha e da trava. No projeto, use `uv add`."
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
          "p": "Qual é a diferença entre a ficha do projeto e o arquivo de trava?",
          "r": [
            "A ficha (pyproject.toml, package.json) lista o que o projeto pede, com uma faixa de versões.",
            "A trava (uv.lock, package-lock.json) guarda a versão exata de cada pacote, dependências inclusive, com o hash.",
            "As duas vão para o Git, e quem escreve as duas é o gerenciador."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Num projeto do uv, por que rodar com uv run, e não com python?",
          "r": [
            "uv run usa o Python da .venv, onde estão as bibliotecas do projeto.",
            "python sozinho usa o Python do PC inteiro, que pode não ter a biblioteca: dá ModuleNotFoundError."
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
          "titulo": "Seu primeiro projeto com ficha e trava",
          "lugar": "No PC, com o PowerShell",
          "tempo": "15 minutos",
          "antes": "Você vai criar um projeto em Python com o uv, adicionar a biblioteca `requests`, ler a ficha e a trava que ele escreve e rodar um programa que pergunta ao PyPI qual é a versão mais nova da `requests`. Precisa do Python, que entrou no seu PC no laboratório da aula 2.2 (se `python --version` não responder com um número, faça antes os passos de lá), e de {{internet}}, porque o uv baixa as bibliotecas. Se o uv ainda não estiver no PC, o laboratório instala, pelo winget. Os comandos são para colar no PowerShell; se preferir, peça ao {{claude-code|Claude Code}} para rodar cada um e mostrar a saída exata, e, se ele pedir {{permissao|permissão}}, aceite. Pelo {{app}} do Claude: não dá, porque o uv roda no seu PC.",
          "naoTestado": "Os passos 3 e 4 (instalar o uv pelo winget e reabrir o PowerShell) não foram feitos, porque o uv já estava no PC do teste. Os outros passos foram rodados de verdade em 08/11/2026, no Windows PowerShell 5.1, com Python 3.12.10 e uv 0.13.7, numa pasta de teste; a saída do passo 7 é de uma execução sem o cache do uv, como a de quem instala pela primeira vez.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha {{terminal|Terminal}} (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Confira se o uv já está no PC.",
              "cola": "uv --version",
              "saida": "uv 0.13.7 (316c827e0 2026-11-03 x86_64-pc-windows-msvc)",
              "espera": "Uma linha com \"uv\" e um número de versão, talvez mais novo que este. Se apareceu, pule os passos 3 e 4. Se apareceu \"The term 'uv' is not recognized\", o uv ainda não está instalado: siga o passo 3."
            },
            {
              "faz": "Só se o uv não estava instalado: instale-o pelo winget, o instalador de programas da Microsoft. Se ele pedir para aceitar os termos da fonte, responda Y.",
              "cola": "winget install --id=astral-sh.uv -e",
              "espera": "O winget baixa o uv, da Astral, e termina com uma linha de instalação concluída, como \"Successfully installed\". Não testado: o uv já estava no PC do teste."
            },
            {
              "faz": "Só se você fez o passo 3: feche esta janela do PowerShell, abra outra e rode o passo 2 de novo.",
              "espera": "Agora aparece a versão. O PowerShell só enxerga um programa novo numa janela aberta depois da instalação. Não testado, pelo mesmo motivo do passo 3."
            },
            {
              "faz": "Cole este comando, que cria a pasta do projeto e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\versoes | Out-Null; Set-Location C:\\Projetos\\versoes",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\versoes."
            },
            {
              "faz": "Crie a ficha do projeto.",
              "cola": "uv init --bare",
              "saida": "Initialized project `versoes`",
              "espera": "Essa linha aparece, e a pasta ganha o arquivo pyproject.toml, ainda com a lista de dependências vazia."
            },
            {
              "faz": "Adicione a biblioteca requests.",
              "cola": "uv add requests",
              "saida": "Using CPython 3.12.10 interpreter at: C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe\nCreating virtual environment at: .venv\nResolved 6 packages in 314ms\nPrepared 5 packages in 96ms\nInstalled 5 packages in 25ms\n + certifi==2026.10.23\n + charset-normalizer==3.5.2\n + idna==3.20\n + requests==2.34.2\n + urllib3==2.8.0",
              "espera": "O uv cria a .venv, instala a requests e as quatro dependências dela e mostra cada uma com a versão. Os números podem ser mais novos que estes."
            },
            {
              "faz": "Leia a ficha.",
              "cola": "Get-Content pyproject.toml",
              "saida": "[project]\nname = \"versoes\"\nversion = \"0.1.0\"\nrequires-python = \">=3.12\"\ndependencies = [\n    \"requests>=2.34.2\",\n]",
              "espera": "A lista dependencies agora tem a requests, com a faixa >= e a versão que entrou."
            },
            {
              "faz": "Veja as versões que a trava guardou, em forma de árvore.",
              "cola": "uv tree",
              "saida": "Resolved 6 packages in 1ms\nversoes v0.1.0\n└── requests v2.34.2\n    ├── certifi v2026.10.23\n    ├── charset-normalizer v3.5.2\n    ├── idna v3.20\n    └── urllib3 v2.8.0",
              "espera": "A requests embaixo do projeto, e as quatro dependências embaixo dela, cada uma com a versão exata que está no uv.lock."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria o programa app.py. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\nimport requests\n\nresposta = requests.get(\"https://pypi.org/pypi/requests/json\", timeout=10)\nprint(resposta.status_code)\nprint(\"Versão mais nova da requests:\", resposta.json()[\"info\"][\"version\"])\n'@ | Set-Content -Encoding utf8 app.py",
              "espera": "Só o cursor. O arquivo app.py está na pasta."
            },
            {
              "faz": "Rode o programa pelo uv.",
              "cola": "uv run app.py",
              "saida": "200\nVersão mais nova da requests: 2.34.2",
              "espera": "O código 200, que quer dizer \"deu certo\", e a versão mais nova da requests no PyPI, que pode ser outra no dia em que você rodar. O programa usou a requests da .venv."
            },
            {
              "faz": "Liste o que ficou na pasta, inclusive o que é escondido.",
              "cola": "Get-ChildItem -Force -Name",
              "saida": ".venv\napp.py\npyproject.toml\nuv.lock",
              "espera": "A .venv, com as bibliotecas, que não vai para o Git; o seu programa; e a ficha e a trava, que vão."
            }
          ],
          "errado": "se `uv add` responder \"error: No `pyproject.toml` found in current directory or any parent directory\", você está fora da pasta do projeto ou pulou o passo 6: rode o passo 5 de novo e depois o 6. Se `uv --version` continuar com \"is not recognized\" depois de instalar, feche todas as janelas do PowerShell e abra uma nova; se mesmo assim não aparecer, mostre a mensagem inteira ao Claude. Se `uv run app.py` mostrar um erro de conexão, confira a internet: o programa pede uma página ao PyPI. E, se você rodou `python app.py` em vez de `uv run app.py`, o erro é o do laboratório quebrado logo abaixo."
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
          "texto": "Alguém criou um projeto para imprimir uma tabela de saldos com a biblioteca tabulate. O uv disse que instalou, mas o programa reclama que a biblioteca não existe. O bloco abaixo reproduz tudo numa pasta nova, C:\\Projetos\\relatorio: cria o projeto, adiciona a tabulate, escreve o relatorio.py e roda o programa. Cole no PowerShell e descubra o motivo antes de ver a causa.",
          "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\relatorio | Out-Null; Set-Location C:\\Projetos\\relatorio\nuv init --bare\nuv add tabulate\n@'\nfrom tabulate import tabulate\n\nlinhas = [[\"Janeiro\", 1000.0], [\"Fevereiro\", 1050.0], [\"Março\", 1102.5]]\nprint(tabulate(linhas, headers=[\"Mês\", \"Saldo\"]))\n'@ | Set-Content -Encoding utf8 relatorio.py\npython relatorio.py",
          "saida": "Initialized project `relatorio`\nUsing CPython 3.12.10 interpreter at: C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe\nCreating virtual environment at: .venv\nResolved 2 packages in 434ms\nPrepared 1 package in 30ms\nInstalled 1 package in 9ms\n + tabulate==0.10.0\nTraceback (most recent call last):\n  File \"C:\\Projetos\\relatorio\\relatorio.py\", line 1, in <module>\n    from tabulate import tabulate\n    ^^^^^^^^^^^^^^^^^^^^^^^^^^^\nModuleNotFoundError: No module named 'tabulate'",
          "dica": "A instalação deu certo: \"Installed 1 package\" e \"+ tabulate\" estão lá. O erro está na última linha do bloco, a que roda o programa. Compare com o comando que o laboratório usou para rodar o app.py e pense em qual Python cada um usa.",
          "resposta": "O `uv add` instalou a tabulate na `.venv` da pasta, e a última linha rodou `python relatorio.py`, que usa o Python do PC inteiro, onde a tabulate não existe. São dois Pythons, cada um com a sua lista de bibliotecas. O conserto é rodar pelo uv, que usa o Python da `.venv`: `uv run relatorio.py`. A saída real foi a tabela, com as colunas Mês e Saldo e uma linha por mês, de Janeiro (1000) a Março (1102.5). Chamar o Python da `.venv` direto, `.venv\\Scripts\\python relatorio.py`, também funciona. O que não resolve: `pip install tabulate` sem ambiente, que poria a biblioteca no Python do PC, fora da ficha e da trava, e deixaria dois lugares para confundir depois."
        }
      ],
      [
        "fontes",
        [
          [
            "Instalando o uv (winget, instalador próprio e pip), Astral",
            "https://docs.astral.sh/uv/getting-started/installation/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Estrutura de um projeto do uv (a .venv fica fora do Git; o uv.lock vai para o Git e não se edita à mão), Astral",
            "https://docs.astral.sh/uv/concepts/projects/layout/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Travar e sincronizar (uv lock, uv sync, --locked e --frozen), Astral",
            "https://docs.astral.sh/uv/concepts/projects/sync/",
            "oficial",
            "08/11/2026"
          ],
          [
            "uv no PyPI (versão 0.13.7, de 03/11/2026)",
            "https://pypi.org/project/uv/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Escrevendo seu pyproject.toml, guia oficial do Python",
            "https://packaging.python.org/pt-br/latest/guides/writing-pyproject-toml/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Instalar pacotes usando pip e ambientes virtuais, guia oficial do Python",
            "https://packaging.python.org/pt-br/latest/guides/installing-using-pip-and-virtual-environments/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "venv, documentação do Python (ativar no PowerShell e a sugestão de mudar a política de execução)",
            "https://docs.python.org/pt-br/3/library/venv.html",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Sobre as políticas de execução, Microsoft",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "package.json, documentação do npm",
            "https://docs.npmjs.com/cli/v11/configuring-npm/package-json/",
            "oficial",
            "08/11/2026"
          ],
          [
            "package-lock.json (feito para ir ao repositório), documentação do npm",
            "https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json/",
            "oficial",
            "08/11/2026"
          ],
          [
            "npm ci (instala só a partir da trava), documentação do npm",
            "https://docs.npmjs.com/cli/v11/commands/npm-ci/",
            "oficial",
            "08/11/2026"
          ],
          [
            "npm approve-scripts (por enquanto, só aviso; uma versão futura vai bloquear), documentação do npm",
            "https://docs.npmjs.com/cli/v11/commands/npm-approve-scripts/",
            "oficial",
            "08/11/2026"
          ],
          [
            "About semantic versioning (o ^ e o ~ do npm), documentação do npm",
            "https://docs.npmjs.com/about-semantic-versioning/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Versionamento Semântico 2.0.0",
            "https://semver.org/lang/pt-BR/",
            "comunidade",
            "08/11/2026",
            "pt"
          ],
          [
            "PEP 751, o formato padrão de trava do Python (pylock.toml)",
            "https://peps.python.org/pep-0751/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Shipping code (faixas de versão, travas e reprodutibilidade), The Missing Semester, MIT, 2026",
            "https://missing.csail.mit.edu/2026/shipping-code/",
            "acadêmico",
            "08/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Instale no ambiente do projeto e guarde a ficha e a trava no Git, para repetir a instalação igual",
          "Isso. Ambiente isolado, ficha e trava: as três peças da aula."
        ],
        [
          "A ficha do projeto já basta para repetir uma instalação, porque lista todas as bibliotecas",
          "A ficha guarda faixas e só o que você pediu. Quem fixa a versão exata de cada pacote, dependências inclusive, é a trava."
        ],
        [
          "Instalar no Python do PC inteiro é mais simples, e cada projeto acha as bibliotecas sozinho",
          "É mais simples até dois projetos precisarem de versões diferentes da mesma biblioteca: só cabe uma, e uma instalação quebra o outro projeto."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O que o arquivo de trava (uv.lock ou package-lock.json) guarda?",
        "o": [
          [
            "A lista do que o projeto pede, com a faixa de versões aceita",
            "Essa é a ficha do projeto, o pyproject.toml ou o package.json."
          ],
          [
            "A versão exata de cada pacote, dependências inclusive, com o hash",
            "Isso. É a nota fiscal da instalação, que permite repeti-la igual."
          ],
          [
            "As próprias bibliotecas, já instaladas e prontas para usar no programa",
            "As bibliotecas ficam na .venv ou na node_modules. A trava só descreve o que foi instalado."
          ]
        ],
        "c": 1
      },
      {
        "p": "O uv disse \"Installed\", mas python app.py dá ModuleNotFoundError. Qual é a causa mais provável?",
        "o": [
          [
            "A biblioteca veio com defeito, e é melhor trocar por outra do PyPI",
            "O ModuleNotFoundError quase nunca é defeito da biblioteca. Aqui, ela está instalada, só que em outro lugar."
          ],
          [
            "Faltou apagar o uv.lock para o uv instalar a versão mais nova de novo",
            "A trava não tem nada a ver com esse erro. Apagá-la só troca as versões."
          ],
          [
            "A biblioteca está na .venv, e python usou o Python do PC inteiro",
            "Isso. O conserto é rodar com uv run app.py, que usa o Python da .venv."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre uv add e uv sync?",
        "O uv add acrescenta uma biblioteca: escreve na ficha, atualiza a trava e instala. O uv sync não muda a lista: lê a ficha e a trava e deixa a .venv igual ao que elas dizem. Use uv add quando quiser uma biblioteca nova, e uv sync para montar o projeto num PC novo ou depois de apagar a .venv."
      ],
      [
        "Posso usar pip e uv no mesmo projeto?",
        "Pode, mas confunde. A documentação do uv não recomenda mexer na .venv do projeto com pip install, porque o que entra assim fica fora da ficha e da trava. Num projeto do uv, use uv add e uv run."
      ],
      [
        "Como atualizo uma biblioteca de propósito?",
        "Rode uv lock --upgrade-package nome, depois uv sync, e confira no git diff do uv.lock o que mudou. Rode o programa para ver se continua funcionando antes de fazer o commit."
      ]
    ]
  },
  "4-3": {
    "tempo": 22,
    "video": "a4-3",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "O Claude escreveu \"vou usar FastAPI com Pydantic e testar com pytest\", e você aceitou sem saber o que cada nome faz. Esta aula é um catálogo das {{biblioteca|bibliotecas}} de {{python|Python}} que mais aparecem nos seus projetos, com o que cada uma faz, quando usar, qual a alternativa e um exemplo que rodou de verdade.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O Claude escolhe bibliotecas o tempo todo, e quase sempre as mesmas: umas quinze cobrem a maior parte do que você vai pedir. Conhecendo essas fichas, você entende o plano dele antes de ele começar (\"vou ler a planilha com a pandas e fazer o gráfico com a matplotlib\"), questiona a escolha quando ela não combina (\"pandas para somar dez números?\") e reconhece quando ele troca uma biblioteca por outra no meio do caminho."
      ],
      [
        "p",
        "As fichas também poupam tempo com as aulas anteriores. As cinco perguntas da 4.1 continuam valendo para cada nome desta aula, e o jeito de {{instalar}} é o da 4.2: `uv add nome` dentro do projeto, e `uv run arquivo.py` para {{rodar|rodar}}. Aqui, a pergunta é outra: das bibliotecas boas e conhecidas, qual serve para qual trabalho."
      ],
      [
        "p",
        "Você não precisa decorar nada. A ideia é que, ao ver um nome no {{codigo|código}} ou na conversa, você saiba em que gaveta ele mora: falar com sites, mexer em tabelas, guardar segredo, conferir dados, responder pedidos ou testar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Na aula 4.1, biblioteca era comprar o motor pronto. Esta aula é o catálogo da loja de autopeças. Cada página é uma ficha: para que serve a peça, em que situação ela encaixa, qual a peça equivalente de outra marca e uma foto dela montada. Ninguém decora o catálogo; você aprende a achar a página certa quando o mecânico, aqui o Claude, diz \"vou usar a peça tal\", e a perceber quando a peça não combina com o carro."
      ],
      [
        "quebra",
        "Peça de carro não muda depois de fabricada; biblioteca lança {{versao|versão}} nova todo mês, e a ficha envelhece. As versões e as datas desta aula são de 08/11/2026: confira de novo antes de confiar nelas. E uma peça vem sozinha, enquanto uma biblioteca traz outras junto: no teste desta aula, instalar oito destas bibliotecas de uma vez trouxe 36 pacotes ao todo."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Como ler uma ficha"
      ],
      [
        "p",
        "Cada ficha tem quatro partes. **O que faz**, em uma frase. **Quando usar**, com o caso típico do seu dia, e quando não usar. **Alternativa**, que pode ser outra biblioteca ou o que já vem com o Python. E **Exemplo**, um {{programa}} curto que rodou de verdade num projeto do uv, com a saída real logo abaixo. A versão, a data e a {{licenca|licença}} de cada uma vêm do {{pypi|PyPI}}, consultado em 08/11/2026."
      ],
      [
        "h3",
        "requests: falar com sites e APIs"
      ],
      [
        "p",
        "**O que faz:** pede páginas e dados a um {{servidor}} pela {{internet}} e entrega a resposta pronta para usar. **Quando usar:** quando o programa precisa buscar dados de uma {{api|API}}, como a do PyPI, a do {{github|GitHub}} ou a do Banco Central. **Quando não usar:** para centenas de pedidos ao mesmo tempo, em que ela vai um por um. **Alternativa:** a `httpx`, com quase o mesmo jeito de escrever e capaz de fazer vários pedidos de uma vez; ou a `urllib`, que já vem com o Python e a aula 2.9 usou. Versão 2.34.2, de 14/05/2026, licença Apache-2.0."
      ],
      [
        "codigo",
        {
          "texto": "import requests\n\nresposta = requests.get(\"https://pypi.org/pypi/pandas/json\", timeout=10)\nprint(resposta.status_code, resposta.headers[\"Content-Type\"])\nprint(\"Versão atual da pandas:\", resposta.json()[\"info\"][\"version\"])",
          "linguagem": "python",
          "rotulo": "req.py"
        }
      ],
      [
        "saida",
        "200 application/json\nVersão atual da pandas: 3.1.1"
      ],
      [
        "p",
        "O `200` é o \"deu certo\" da aula 2.9, o `application/json` avisa que a resposta veio em {{json|JSON}}, e o `.json()` transforma esse texto num {{dicionario|dicionário}} do Python. O `timeout=10` manda desistir depois de 10 segundos, para o programa não ficar parado para sempre se o {{site}} não responder."
      ],
      [
        "h3",
        "pandas: tabelas"
      ],
      [
        "p",
        "**O que faz:** lê tabelas de {{csv|CSV}}, Excel e outras fontes, e filtra, agrupa, soma e cruza as linhas em poucas palavras. **Quando usar:** extrato, planilha de gastos, série de preços, qualquer tabela que você abriria no Excel para fazer contas. **Quando não usar:** para somar meia dúzia de números, que o Python faz sozinho, ou para tabelas de milhões de linhas, em que ela fica lenta. **Alternativa:** a `polars`, mais rápida em tabelas grandes, que o laboratório da 4.1 comparou com a pandas; ou o {{modulo-python|módulo}} `csv`, que já vem com o Python e lê o {{arquivo}} linha por linha. Versão 3.1.1, de 04/11/2026, licença BSD-3-Clause."
      ],
      [
        "codigo",
        {
          "texto": "import pandas as pd\n\ngastos = pd.read_csv(\"gastos.csv\")\nprint(gastos.groupby(\"categoria\")[\"valor\"].sum())",
          "linguagem": "python",
          "rotulo": "gastos.py"
        }
      ],
      [
        "saida",
        "categoria\nLazer          95.0\nMercado       640.5\nTransporte     80.5\nName: valor, dtype: float64"
      ],
      [
        "p",
        "O `gastos.csv` tinha seis linhas, com as colunas `data`, `categoria` e `valor`. O `groupby(\"categoria\")` junta as linhas de mesma categoria, e o `[\"valor\"].sum()` soma a coluna valor de cada grupo: três mercados davam 640,5. A última linha só descreve o resultado: a coluna se chama valor, e os números são decimais (`float64`). O `as pd` é um apelido: daí em diante, `pd` quer dizer `pandas`."
      ],
      [
        "h3",
        "openpyxl: arquivos do Excel"
      ],
      [
        "p",
        "**O que faz:** lê e escreve arquivos `.xlsx`, com abas, fórmulas e formatação. **Quando usar:** quando a saída precisa ser uma planilha de verdade, com a fórmula na célula, ou quando a pandas precisa abrir um Excel, porque ela usa a openpyxl por baixo, como uma {{dependencia|dependência}} opcional, que não vem junto. **Alternativa:** a `xlsxwriter`, que só escreve, mas escreve bem; ou salvar em CSV, que o Excel também abre. Versão 3.1.5, de 28/06/2024, licença MIT."
      ],
      [
        "p",
        "Repare na data: a última versão é de mais de dois anos antes desta aula. A pergunta 3 da 4.1, \"está viva?\", pede para olhar com calma: numa biblioteca que faz uma coisa só, e faz bem, poucas versões novas nem sempre é abandono, mas é o sinal para conferir o {{repositorio|repositório}} antes. Veja o que acontece quando um programa pede à pandas um `.xlsx` sem a openpyxl instalada; estas são as últimas linhas da saída real:"
      ],
      [
        "saida",
        "  File \"C:\\Projetos\\fichas\\.venv\\Lib\\site-packages\\pandas\\compat\\_optional.py\", line 161, in import_optional_dependency\n    raise ImportError(msg) from err\nImportError: `Import openpyxl` failed.  Use pip, conda, or your preferred package management tool to install the openpyxl package."
      ],
      [
        "p",
        "Em português: \"a importação da openpyxl falhou; instale o {{pacote}} openpyxl\". Num projeto do uv, o conserto é `uv add openpyxl`, e o mesmo programa passou a mostrar as duas linhas da planilha."
      ],
      [
        "h3",
        "matplotlib: gráficos"
      ],
      [
        "p",
        "**O que faz:** desenha gráficos de linha, barra, pizza e dispersão e salva como imagem. **Quando usar:** para um gráfico num relatório, num slide ou num PDF. **Quando não usar:** quando o gráfico vai dentro de uma página {{html|HTML}} e precisa responder ao toque; aí a escolha costuma ser uma biblioteca de {{javascript|JavaScript}}, como a Chart.js da aula 4.4. **Alternativa:** a `plotly`, que faz gráficos interativos em HTML; ou a `seaborn`, que faz gráficos de estatística por cima da matplotlib. Versão 3.11.2, de 11/09/2026, com licença própria, baseada na do Python e permissiva."
      ],
      [
        "codigo",
        {
          "texto": "import matplotlib.pyplot as plt\n\nmeses = [\"Jan\", \"Fev\", \"Mar\", \"Abr\"]\nsaldo = [1000, 1050, 1102.5, 1157.63]\n\nplt.plot(meses, saldo, marker=\"o\")\nplt.title(\"Saldo com 5% ao mês\")\nplt.savefig(\"saldo.png\")\nprint(\"Gráfico salvo em saldo.png\")",
          "linguagem": "python",
          "rotulo": "grafico.py"
        }
      ],
      [
        "saida",
        "Gráfico salvo em saldo.png"
      ],
      [
        "p",
        "O programa não abre janela: o `savefig` grava a imagem `saldo.png` na {{pasta}}, com 22 KB no teste, uma linha subindo de 1.000 a 1.157,63 com um ponto em cada mês."
      ],
      [
        "h3",
        "python-dotenv: ler o arquivo .env"
      ],
      [
        "p",
        "**O que faz:** lê o arquivo {{env|.env}} da pasta e coloca cada linha `NOME=valor` nas variáveis de ambiente do programa. **Quando usar:** sempre que o programa precisar de uma {{chave-api|chave de API}} ou de outro segredo que não pode ficar escrito no código. **Quando não usar:** num servidor de {{hospedagem}}, onde as variáveis costumam vir do painel do serviço, e não de um arquivo. **Alternativa:** definir a {{variavel|variável de ambiente}} no Windows, com os cuidados que o módulo 10 vai mostrar. Versão 1.2.4, de 01/10/2026, licença BSD-3-Clause."
      ],
      [
        "p",
        "O ponto que mais confunde: o `.env` **não é lido sozinho**. Com o arquivo na pasta e sem a biblioteca, o programa abaixo dá erro. No teste, o `.env` tinha uma linha só, `CHAVE_TESTE=valor-falso-de-exemplo`, e o programa mostra só o tamanho da chave, nunca o valor, como todo programa com segredo deve fazer:"
      ],
      [
        "codigo",
        {
          "texto": "import os\nfrom dotenv import load_dotenv\n\nload_dotenv()\nchave = os.environ[\"CHAVE_TESTE\"]\nprint(\"Chave carregada, com\", len(chave), \"caracteres\")",
          "linguagem": "python",
          "rotulo": "com_dotenv.py"
        }
      ],
      [
        "saida",
        "Chave carregada, com 22 caracteres"
      ],
      [
        "p",
        "Sem as duas linhas da `dotenv`, a mesma leitura deu o erro {{keyerror|KeyError}}, com a linha `KeyError: 'CHAVE_TESTE'`, o \"não achei nada com esse nome\". E o `.env` precisa estar no {{gitignore|.gitignore}} antes do primeiro {{commit}}, como a aula 3.6 ensinou."
      ],
      [
        "h3",
        "Pydantic: conferir o formato dos dados"
      ],
      [
        "p",
        "**O que faz:** confere se os dados vieram no formato combinado: este campo é texto, aquele é número inteiro, este outro é obrigatório. Quando dá para converter, converte (o texto \"35\" vira o número 35); quando não dá, para com um erro que diz qual campo e por quê. **Quando usar:** com dados que vêm de fora, como uma resposta de API, um formulário ou um arquivo de outra pessoa. A FastAPI, a próxima ficha, usa a Pydantic por baixo. **Quando não usar:** em dados que o próprio programa criou e já conhece. **Alternativa:** as `dataclasses`, que já vêm com o Python e organizam os campos, mas não conferem nada. Versão 2.14.3, de 05/11/2026, licença MIT."
      ],
      [
        "codigo",
        {
          "texto": "from pydantic import BaseModel, ValidationError\n\nclass Cliente(BaseModel):\n    nome: str\n    idade: int\n\ntry:\n    cliente = Cliente(nome=\"Ana\", idade=\"trinta e cinco\")\n    print(cliente)\nexcept ValidationError as erro:\n    print(erro)",
          "linguagem": "python",
          "rotulo": "cliente.py"
        }
      ],
      [
        "saida",
        "1 validation error for Cliente\nidade\n  Input should be a valid integer, unable to parse string as an integer [type=int_parsing, input_value='trinta e cinco', input_type=str]\n    For further information visit https://errors.pydantic.dev/2.14/v/int_parsing"
      ],
      [
        "p",
        "A `class Cliente` descreve o formato, com as {{anotacao-de-tipo|anotações de tipo}} da aula 2.6: `nome` é texto (`str`) e `idade` é número inteiro (`int`). Em português, o erro diz: \"1 erro de validação em Cliente, no campo idade: deveria ser um número inteiro, e não deu para converter o texto\". Com `idade=\"35\"`, a saída real foi `nome='Ana' idade=35`: o texto virou número. Sem o `nome`, o erro foi `Field required`, \"campo obrigatório\"."
      ],
      [
        "h3",
        "FastAPI: criar a sua própria API"
      ],
      [
        "p",
        "**O que faz:** transforma funções do Python numa API, o lado que **responde** aos pedidos, enquanto a `requests` é o lado que pede. **Quando usar:** quando outro programa, uma página ou um {{bot}} precisa pedir algo ao seu código pela internet, como uma calculadora de juros que um site consulta. **Quando não usar:** num site só de páginas prontas, que não precisa de código no servidor, ou quando você só quer buscar dados de outros (aí é a `requests`). **Alternativa:** a `Flask`, mais antiga e simples; ou o `Django`, que vem com login, painel de administração e {{banco-de-dados|banco de dados}}. Versão 0.162.2, de 07/11/2026, licença MIT, e a {{documentacao|documentação}} tem versão em português."
      ],
      [
        "codigo",
        {
          "texto": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/juros\")\ndef juros(valor: float, taxa: float, meses: int):\n    return {\"valor_final\": round(valor * (1 + taxa) ** meses, 2)}",
          "linguagem": "python",
          "rotulo": "main.py"
        }
      ],
      [
        "p",
        "A linha com `@` diz: \"quando alguém pedir o endereço `/juros`, rode esta {{funcao|função}}\". Para ligar o servidor, a FastAPI precisa de outra biblioteca, a `uvicorn` (`uv run uvicorn main:app`). No teste, o pedido `/juros?valor=1000&taxa=0.01&meses=12` voltou com `{\"valor_final\":1126.83}`, mil reais a 1% ao mês por um ano. Com a taxa escrita \"um por cento\", a resposta veio com o código 422 e o detalhe do erro, conferido pela Pydantic:"
      ],
      [
        "saida",
        "{\"detail\":[{\"type\":\"float_parsing\",\"loc\":[\"query\",\"taxa\"],\"msg\":\"Input should be a valid number, unable to parse string as a number\",\"input\":\"um por cento\"}]}"
      ],
      [
        "p",
        "Um detalhe de versão que a 4.2 ajuda a ler: a FastAPI ainda está na \"versão zero\" (0.162). Pelo versionamento semântico, versão que começa com 0 pode mudar qualquer coisa a qualquer momento. Na prática, ela é muito usada e estável, mas é mais um motivo para o projeto ter a trava. E o endereço `/docs` do servidor abre uma página de documentação gerada sozinha, em que dá para testar cada endereço."
      ],
      [
        "h3",
        "pytest: testes que conferem o código sozinhos"
      ],
      [
        "p",
        "**O que faz:** roda funções de teste, cada uma conferindo uma resposta esperada, e mostra quais passaram e quais falharam, com o motivo. **Quando usar:** para guardar a prova de que uma conta continua certa depois de cada mudança, sua ou do Claude. **Quando não usar:** como garantia total: o teste só confere o que alguém mandou conferir, e a aula 16.1b mostra um teste que não testa nada. **Alternativa:** o módulo `unittest`, que já vem com o Python, com um jeito de escrever mais longo. Versão 9.2.0, de 27/10/2026, licença MIT. O exemplo está no \"Preveja antes de ver\", logo abaixo."
      ],
      [
        "h3",
        "Outras que você vai ver"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Biblioteca",
            "Para quê",
            "Onde aparece no curso"
          ],
          "linhas": [
            [
              "anthropic",
              "O kit oficial para o seu programa conversar com o Claude pela API",
              "Módulo 10"
            ],
            [
              "httpx",
              "Pedidos a sites, como a requests, inclusive vários de uma vez",
              "Aqui, como alternativa"
            ],
            [
              "beautifulsoup4",
              "Ler o HTML de uma página e achar as partes que interessam",
              "Aula 4.5"
            ],
            [
              "playwright",
              "Abrir e controlar um {{navegador}} de verdade pelo código",
              "Aula 4.5"
            ],
            [
              "uvicorn",
              "O servidor que liga uma API feita com a FastAPI",
              "Aqui, junto com a FastAPI"
            ]
          ]
        }
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar todas agora?** Não. Instale cada uma quando um projeto pedir, com `uv add nome` dentro da pasta dele.",
          "**Custa?** Não. Todas desta aula são gratuitas e de {{codigo-aberto|código aberto}}; as licenças (MIT, BSD, Apache e a da matplotlib) deixam usar até em projeto comercial.",
          "**E se o Claude escolher outra?** Passe o nome pelas cinco perguntas da 4.1 e pergunte \"por que esta, e não a de sempre?\". Às vezes a resposta é boa; às vezes ele só escolheu a primeira que lembrou.",
          "**Qual eu aprendo primeiro?** Nenhuma \"se aprende\" neste curso: quem escreve o código é o Claude. O que vale é reconhecer a ficha, e a pandas e a python-dotenv são as que mais vão aparecer."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o que vem junto, e onde conferir as fichas",
          "blocos": [
            [
              "p",
              "No teste desta aula, `uv add requests pandas pydantic fastapi httpx pytest python-dotenv matplotlib` instalou 36 pacotes. A pandas trouxe a `numpy`, que faz as contas por baixo; a matplotlib trouxe a `pillow`, que grava as imagens; a FastAPI trouxe a `starlette`, que cuida da parte de servidor, além da Pydantic. O {{comando}} `uv tree` mostra quem trouxe quem, e é por ele que você descobre por que um pacote de nome estranho apareceu no projeto."
            ],
            [
              "p",
              "Para conferir uma ficha por conta própria, abra a página da biblioteca no PyPI: a versão e a data ficam no alto, a licença na coluna lateral (no celular, na aba Metadata) e o link do projeto leva ao repositório. A pergunta \"está viva?\" se responde em \"Release history\"."
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
          "pergunta": "O arquivo reajuste.py tem uma função que reajusta um valor por uma taxa, e o test_reajuste.py tem dois testes para ela. Os dois arquivos estão no mesmo projeto, com a pytest instalada, e o comando da última linha roda os testes. O que você acha que aparece? E se alguém tirar o `1 +` da conta?",
          "codigo": "# reajuste.py\ndef reajustar(valor, taxa):\n    return round(valor * (1 + taxa), 2)\n\n# test_reajuste.py\nfrom reajuste import reajustar\n\n\ndef test_reajuste_de_5_por_cento():\n    assert reajustar(1000, 0.05) == 1050.0\n\n\ndef test_sem_reajuste():\n    assert reajustar(1000, 0) == 1000.0\n\n# no PowerShell, na pasta do projeto:\n# uv run pytest -q",
          "linguagem": "python",
          "resposta": "Com a conta certa, aparecem dois pontos, um por teste que passou, e o resumo `2 passed`. O `assert` quer dizer \"confira que isto é verdade\": 1.000 reajustado em 5% tem de dar 1.050, e sem reajuste tem de continuar 1.000. Sem o `1 +`, a função passa a devolver só o reajuste, e não o valor reajustado: os dois testes falham, e a pytest mostra cada um com a linha do `assert` e o valor que veio no lugar do esperado (`50.0` em vez de `1050.0`, `0` em vez de `1000.0`). É assim que um teste pega um erro que você não veria lendo o código. Use os botões para ver as duas saídas reais.",
          "vivo": [
            [
              "Rodar os testes com a conta certa",
              "# reajuste.py\ndef reajustar(valor, taxa):\n    return round(valor * (1 + taxa), 2)\n\n# test_reajuste.py\nfrom reajuste import reajustar\n\n\ndef test_reajuste_de_5_por_cento():\n    assert reajustar(1000, 0.05) == 1050.0\n\n\ndef test_sem_reajuste():\n    assert reajustar(1000, 0) == 1000.0\n\n# no PowerShell, na pasta do projeto:\n# uv run pytest -q",
              "..                                                                       [100%]\n2 passed in 0.02s"
            ],
            [
              "Tirar o 1 + da conta e rodar de novo",
              "# reajuste.py\ndef reajustar(valor, taxa):\n    return round(valor * taxa, 2)\n\n# test_reajuste.py\nfrom reajuste import reajustar\n\n\ndef test_reajuste_de_5_por_cento():\n    assert reajustar(1000, 0.05) == 1050.0\n\n\ndef test_sem_reajuste():\n    assert reajustar(1000, 0) == 1000.0\n\n# no PowerShell, na pasta do projeto:\n# uv run pytest -q",
              "FF                                                                       [100%]\n================================== FAILURES ===================================\n________________________ test_reajuste_de_5_por_cento _________________________\n\n    def test_reajuste_de_5_por_cento():\n>       assert reajustar(1000, 0.05) == 1050.0\nE       assert 50.0 == 1050.0\nE        +  where 50.0 = reajustar(1000, 0.05)\n\ntest_reajuste.py:5: AssertionError\n______________________________ test_sem_reajuste ______________________________\n\n    def test_sem_reajuste():\n>       assert reajustar(1000, 0) == 1000.0\nE       assert 0 == 1000.0\nE        +  where 0 = reajustar(1000, 0)\n\ntest_reajuste.py:9: AssertionError\n=========================== short test summary info ===========================\nFAILED test_reajuste.py::test_reajuste_de_5_por_cento - assert 50.0 == 1050.0\nFAILED test_reajuste.py::test_sem_reajuste - assert 0 == 1000.0\n2 failed in 0.15s"
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
          "p": "Você quer somar os gastos de um extrato em CSV por categoria e depois fazer um gráfico de barras para pôr num PDF. Que par de bibliotecas faz esse trabalho?",
          "o": [
            [
              "A requests, para ler o arquivo, e a pytest, para conferir",
              "A requests pede dados a sites, e a pytest roda testes. Nenhuma das duas soma tabela nem desenha gráfico."
            ],
            [
              "A pandas, para somar por categoria, e a matplotlib, para o gráfico",
              "Isso. A pandas lê o CSV e agrupa por categoria; a matplotlib desenha e salva a imagem."
            ],
            [
              "A Pydantic, para somar, e a FastAPI, para mostrar o gráfico",
              "A Pydantic confere o formato dos dados, e a FastAPI cria uma API. Somar tabela e desenhar gráfico é trabalho de outras fichas."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu para ler extrato.xlsx com a pandas, e o Claude respondeu: \"Além da pandas, instale a openpyxl: é ela que a pandas usa por baixo para abrir arquivos do Excel. Rode uv add openpyxl.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: a pandas abre arquivos .xlsx sozinha, sem nenhuma outra biblioteca",
              "Não abre: sem a openpyxl, a pandas para com o ImportError que a ficha mostrou e pede para instalar o pacote."
            ],
            [
              "Errado: o certo é trocar a pandas pela openpyxl, que faz tudo o que ela faz",
              "A openpyxl lê e escreve o arquivo, mas não agrupa nem soma como a pandas. Uma não substitui a outra; aqui, as duas trabalham juntas."
            ],
            [
              "Está certa: a pandas precisa da openpyxl para abrir arquivos .xlsx",
              "Isso. A resposta está certa: é uma dependência opcional, que não vem junto, e uv add openpyxl resolve no projeto."
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
            "\"A pandas abre Excel sozinha.\"",
            "Para `.xlsx`, ela precisa da openpyxl, que não vem junto. Sem ela, o erro diz para instalar o pacote."
          ],
          [
            "\"Pus a chave no .env, então o programa já enxerga.\"",
            "O `.env` não é lido sozinho: o programa precisa chamar `load_dotenv()`, da python-dotenv. Sem isso, dá `KeyError`."
          ],
          [
            "\"A FastAPI faz o site.\"",
            "Ela faz a API, o lado que responde aos pedidos. A página que as pessoas veem é outra coisa, feita em HTML, no módulo 15."
          ],
          [
            "\"Os testes passaram, então o programa está certo.\"",
            "O teste só confere o que alguém mandou conferir. Uma conta que nenhum teste olha pode estar errada."
          ],
          [
            "\"Vou instalar a pandas para somar dez números.\"",
            "Para tarefa pequena, o Python sozinho resolve. Menos biblioteca é menos coisa para conferir e para quebrar."
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
          "p": "Para que servem a pandas, a FastAPI e a pytest?",
          "r": [
            "pandas: tabelas, para ler, agrupar e somar dados de CSV ou Excel.",
            "FastAPI: criar uma API, o lado que responde aos pedidos.",
            "pytest: rodar testes que conferem o código sozinhos."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que a python-dotenv faz, e o que acontece sem ela?",
          "r": [
            "Com load_dotenv(), ela lê o arquivo .env e põe cada NOME=valor nas variáveis do programa.",
            "Sem carregar o .env, os.environ não acha o nome e dá KeyError."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Requests, documentação oficial",
            "https://requests.readthedocs.io/en/latest/",
            "oficial",
            "08/11/2026"
          ],
          [
            "HTTPX, documentação oficial",
            "https://www.python-httpx.org/",
            "oficial",
            "08/11/2026"
          ],
          [
            "10 minutes to pandas, documentação da pandas",
            "https://pandas.pydata.org/docs/user_guide/10min.html",
            "oficial",
            "08/11/2026"
          ],
          [
            "Instalação da pandas (openpyxl para .xlsx, como dependência opcional)",
            "https://pandas.pydata.org/docs/getting_started/install.html",
            "oficial",
            "08/11/2026"
          ],
          [
            "openpyxl, documentação oficial",
            "https://openpyxl.readthedocs.io/en/stable/",
            "oficial",
            "08/11/2026"
          ],
          [
            "openpyxl no PyPI (versão 3.1.5, de 28/06/2024)",
            "https://pypi.org/project/openpyxl/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Matplotlib, primeiros passos",
            "https://matplotlib.org/stable/users/getting_started/",
            "oficial",
            "08/11/2026"
          ],
          [
            "python-dotenv no PyPI (load_dotenv)",
            "https://pypi.org/project/python-dotenv/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Pydantic, primeiros passos",
            "https://pydantic.dev/docs/validation/latest/get-started/",
            "oficial",
            "08/11/2026"
          ],
          [
            "FastAPI, documentação em português",
            "https://fastapi.tiangolo.com/pt/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "FastAPI, primeiros passos (uvicorn e a página /docs)",
            "https://fastapi.tiangolo.com/pt/tutorial/first-steps/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Flask, documentação oficial",
            "https://flask.palletsprojects.com/en/stable/",
            "oficial",
            "08/11/2026"
          ],
          [
            "pytest, primeiros passos",
            "https://docs.pytest.org/en/stable/getting-started.html",
            "oficial",
            "08/11/2026"
          ],
          [
            "unittest, documentação do Python",
            "https://docs.python.org/pt-br/3/library/unittest.html",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "dataclasses, documentação do Python",
            "https://docs.python.org/pt-br/3/library/dataclasses.html",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "csv, documentação do Python",
            "https://docs.python.org/pt-br/3/library/csv.html",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Plotly para Python",
            "https://plotly.com/python/",
            "oficial",
            "08/11/2026"
          ],
          [
            "anthropic no PyPI (o kit oficial de Python para a API do Claude)",
            "https://pypi.org/project/anthropic/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Versionamento Semântico 2.0.0 (a versão zero pode mudar a qualquer momento)",
            "https://semver.org/lang/pt-BR/",
            "comunidade",
            "08/11/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Saber o que cada biblioteca comum faz, e a alternativa, ajuda a conferir o Claude",
          "Isso. É um catálogo para reconhecer, não para decorar."
        ],
        [
          "É preciso decorar as bibliotecas desta aula, porque o Claude não sabe escolher sozinho",
          "O Claude escolhe bem na maior parte do tempo. Você precisa reconhecer as fichas para conferir, não decorar."
        ],
        [
          "Quanto mais bibliotecas um projeto tem, mais completo e mais seguro ele fica",
          "É o contrário: cada biblioteca traz outras junto e é mais código para conferir. Para tarefa pequena, o Python sozinho resolve."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Qual biblioteca confere se os dados vieram no formato certo, como a idade ser um número inteiro?",
        "o": [
          [
            "A Pydantic, que confere cada campo do modelo",
            "Isso. Ela confere cada campo, converte o que dá e diz qual campo falhou."
          ],
          [
            "A requests, que já confere a resposta quando ela chega",
            "A requests só busca a resposta. Conferir o formato dos campos é o trabalho da Pydantic."
          ],
          [
            "A pandas, porque toda tabela tem o tipo de cada coluna",
            "A pandas mostra o tipo da coluna, mas não para com erro quando um dado vem no formato errado, como a Pydantic faz."
          ]
        ],
        "c": 0
      },
      {
        "p": "O programa usa os.environ[\"CHAVE\"] e dá KeyError, mesmo com o arquivo .env na pasta. O que falta?",
        "o": [
          [
            "Pôr o .env no .gitignore, porque só assim o Python lê o arquivo",
            "O .gitignore protege o arquivo do Git, mas não faz o Python ler nada. O que falta é carregar o arquivo."
          ],
          [
            "Renomear o .env para env.txt, que é o nome que o Python procura",
            "O Python não procura arquivo nenhum sozinho, com nome nenhum. Quem lê o .env é a python-dotenv."
          ],
          [
            "Chamar load_dotenv(), da python-dotenv, antes de ler a variável",
            "Isso. O .env não é lido sozinho: load_dotenv() põe cada linha nas variáveis do programa."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre a requests e a FastAPI?",
        "São os dois lados da mesma conversa. A requests pede: o seu programa busca dados no servidor de alguém. A FastAPI responde: ela transforma o seu programa no servidor que outros consultam."
      ],
      [
        "Por que a pandas precisa da openpyxl?",
        "Porque ler o formato .xlsx é um trabalho à parte, e a pandas deixa isso com a openpyxl. Ela é uma dependência opcional: só quem lê Excel precisa, por isso não vem junto. No projeto, uv add openpyxl resolve."
      ],
      [
        "Essas versões vão mudar?",
        "Vão, e rápido: as desta aula são de 08/11/2026. Para saber a atual, abra a página da biblioteca no PyPI. No seu projeto, a versão que vale é a que está no uv.lock, como a aula 4.2 mostrou."
      ]
    ]
  },
  "4-4": {
    "tempo": 22,
    "video": "a4-4",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "O Claude montou um {{site}} para você, falou em React, Vite e Tailwind, e apareceu uma {{pasta}} node_modules com milhares de arquivos. Esta aula é o catálogo das {{biblioteca|bibliotecas}} de {{javascript|JavaScript}} que mais aparecem em projetos de site, para você reconhecer cada peça sem escrever uma linha de JavaScript.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Páginas de venda, guias de estudo em {{html|HTML}}, simuladores, painéis: tudo o que roda no {{navegador}} acaba passando por JavaScript, e o Claude escolhe as bibliotecas sozinho. Neste curso você não escreve JavaScript até o módulo 15, mas vai ver esses nomes em toda conversa sobre site. Conhecendo as fichas, você entende o plano dele (\"vou criar um projeto com Vite e React e estilizar com Tailwind\") e consegue perguntar se é o tamanho certo para o trabalho."
      ],
      [
        "p",
        "É aqui que mora uma das decisões mais caras de um projeto de site: um {{arquivo}} HTML só, que abre com dois cliques e funciona sem {{internet}}, ou um projeto com o {{npm}}, com centenas de {{dependencia|dependências}} e uma etapa de montagem antes de publicar. As duas servem; cada uma tem um preço. A aula ensina a reconhecer qual o Claude escolheu, e por quê."
      ],
      [
        "p",
        "E as regras das aulas anteriores continuam valendo. As cinco perguntas da 4.1 servem para qualquer {{pacote}} do npm, e a ficha e a trava da 4.2 são o `package.json` e o `package-lock.json`. A pasta {{node-modules|node_modules}} é a `.venv` do JavaScript: não vai para o {{git|Git}} e se recria com `npm install`."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "É o mesmo catálogo da loja de autopeças da aula 4.3, numa outra seção: a das peças para os carros que rodam no navegador. Cada ficha diz para que serve a peça, em que situação ela encaixa, qual a peça equivalente de outra marca e mostra a peça montada. Você não precisa saber fabricar nenhuma; precisa reconhecer a página certa quando o mecânico, o Claude, disser \"vou usar esta\"."
      ],
      [
        "quebra",
        "Nesta seção da loja, os modelos mudam muito mais rápido: nomes que eram padrão há cinco anos hoje são raros, e as versões novas saem toda semana; as desta aula são de 08/11/2026. E há um jeito de usar a peça que não existe em autopeças: pegá-la emprestada, por um endereço na internet, sem {{instalar}} nada, como mostra a primeira seção abaixo."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Duas formas de usar uma biblioteca de JavaScript"
      ],
      [
        "p",
        "**Direto na página, por um endereço.** Uma linha no HTML busca a biblioteca num {{cdn|CDN}}, uma rede de {{servidor|servidores}} que entrega arquivos públicos, como o jsDelivr. É o jeito dos guias de um arquivo só: nada para instalar, nenhuma pasta nova. O preço: a página precisa de internet para buscar a biblioteca, e o endereço precisa trazer o número da {{versao|versão}}. Sem número, ele entrega a mais nova: no teste desta aula, `https://cdn.jsdelivr.net/npm/chart.js` devolveu a Chart.js 4.6.1, e no mês que vem pode devolver outra. A versão escrita no endereço faz o papel da trava da 4.2."
      ],
      [
        "codigo",
        {
          "texto": "<script src=\"https://cdn.jsdelivr.net/npm/chart.js@4.6.1/dist/chart.umd.min.js\"></script>",
          "linguagem": "html",
          "rotulo": "guia.html"
        }
      ],
      [
        "p",
        "**Num projeto com o npm.** O `npm install` baixa as bibliotecas para a `node_modules`, a ficha e a trava registram as versões, e uma {{ferramenta}} junta tudo numa versão enxuta para publicar, a etapa chamada {{build}}. É o jeito dos sites maiores, com muitas páginas e partes que conversam. O preço: centenas de pacotes no projeto, que você confia ao instalar, e um passo a mais antes de publicar. Esse JavaScript {{rodar|roda}} no navegador de quem visita; já o {{node|Node.js}} roda JavaScript no seu PC, e é ele que traz o npm."
      ],
      [
        "p",
        "Quando não usar o projeto com npm: para um guia, uma página de venda simples ou um simulador de uma tela, um arquivo HTML com {{css|CSS}} próprio, e no máximo uma biblioteca por endereço, costuma bastar, e abre até sem internet se for autocontido, como a aula 0.3 mostrou."
      ],
      [
        "h3",
        "React: a página montada em peças"
      ],
      [
        "p",
        "**O que faz:** monta a interface em {{componente|componentes}}, peças com nome que se repetem e se atualizam sozinhas quando um dado muda, como um carrinho que recalcula o total. **Quando usar:** em aplicativos com muitas telas, login, filtros e dados que mudam na tela. **Quando não usar:** numa landing page ou num guia de estudo; HTML e CSS dão conta, com menos peças para conferir. **Alternativa:** a `Svelte` ou a `Vue`, que fazem o mesmo trabalho com outro jeito de escrever; ou HTML puro. Versão 19.3.1, de 14/10/2026, {{licenca|licença}} MIT, com {{documentacao|documentação}} oficial em português."
      ],
      [
        "codigo",
        {
          "texto": "function Botao({ texto }) {\n  return <button className=\"botao\">{texto}</button>;\n}\n\n// usado assim:\n<Botao texto=\"Comprar\" />",
          "linguagem": "javascript",
          "rotulo": "Botao.jsx"
        }
      ],
      [
        "p",
        "Parece HTML dentro de JavaScript, e é essa a ideia: o formato se chama JSX. A {{funcao|função}} `Botao` recebe um texto e devolve um botão; depois, `<Botao texto=\"Comprar\" />` usa a peça pronta, quantas vezes for preciso. Repare no `className`: no React, o `class` do HTML se escreve assim."
      ],
      [
        "h3",
        "Next.js: o React com páginas e servidor"
      ],
      [
        "p",
        "**O que faz:** é um {{framework}}, uma estrutura pronta em cima do React que já resolve o que todo site maior precisa: cada arquivo numa pasta vira uma página, parte do {{codigo|código}} pode rodar no servidor, e publicar na Vercel, a empresa que mantém o Next.js, leva poucos cliques. **Quando usar:** num site com várias páginas, login e {{banco-de-dados|banco de dados}}, como os do módulo 15. **Quando não usar:** numa página única. **Alternativa:** o `Astro`, feito para sites de conteúdo, que manda pouco JavaScript ao navegador; ou o Vite com React, quando só a parte da página importa. Versão 16.4.5, de 03/11/2026, licença MIT."
      ],
      [
        "p",
        "Uma confusão comum: Next.js e React não concorrem. O Next.js **usa** o React; escolher o Next.js é escolher o React com um conjunto de decisões já tomadas."
      ],
      [
        "h3",
        "Vite: a oficina enquanto você trabalha"
      ],
      [
        "p",
        "**O que faz:** liga um {{servidor-local|servidor local}} que atualiza a página no navegador assim que um arquivo muda, e, na hora de publicar, faz o build: junta e enxuga os arquivos na pasta `dist`. **Quando usar:** em qualquer projeto de site com npm que não use o Next.js, que já traz a ferramenta dele. **Quando não usar:** num HTML de um arquivo só, que não tem nada para juntar. **Alternativa:** a ferramenta própria do Next.js, nos projetos dele. Versão 8.3.6, de 05/11/2026, licença MIT."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, rodado para esta aula. O {{comando}} `npm create vite@latest meu-site -- --template react` criou o projeto, com a mensagem final real \"Done. Now run:\" seguida de três comandos: `cd meu-site`, `npm install` e `npm run dev`. O `npm install` respondeu `added 24 packages, and audited 25 packages in 6s`. E a ficha que o Vite escreveu tem esta parte, a dos atalhos:"
      ],
      [
        "codigo",
        {
          "texto": "\"scripts\": {\n  \"dev\": \"vite\",\n  \"build\": \"vite build\",\n  \"lint\": \"oxlint\",\n  \"preview\": \"vite preview\"\n}",
          "linguagem": "json",
          "rotulo": "package.json"
        }
      ],
      [
        "p",
        "Cada linha é um atalho: `npm run dev` roda `vite`, `npm run build` roda `vite build`, e assim por diante. O \"Preveja antes de ver\", mais abaixo, mostra o que os dois principais fazem."
      ],
      [
        "h3",
        "Tailwind CSS: o visual escrito no próprio HTML"
      ],
      [
        "p",
        "**O que faz:** em vez de um arquivo de CSS separado, o visual vai em classes curtas no próprio HTML: `bg-blue-600` é fundo azul, `text-white` é letra branca, `px-4` é espaço dos lados, `rounded-lg` são cantos arredondados. Na montagem, o Tailwind gera só o CSS das classes que a página usa. **Quando usar:** em projetos com npm em que o Claude vai ajustar o visual muitas vezes, porque cada mudança fica na linha do {{elemento-html|elemento}}. **Quando não usar:** num guia de um arquivo só, em que um CSS próprio, curto, é mais simples de ler. **Alternativa:** CSS comum, ou a `Bootstrap`, que traz componentes prontos. Versão 4.3.5, de 06/11/2026, licença MIT."
      ],
      [
        "codigo",
        {
          "texto": "<button class=\"bg-blue-600 text-white px-4 py-2 rounded-lg\">Comprar</button>",
          "linguagem": "html"
        }
      ],
      [
        "p",
        "Existe um jeito de usar o Tailwind por endereço, sem projeto, o Play CDN; a própria documentação avisa que ele é feito só para testar, e não para o site publicado. Se o Claude colocar o Tailwind assim numa página que vai para o ar, peça para trocar por CSS comum ou por um projeto com build."
      ],
      [
        "h3",
        "TypeScript: JavaScript com tipos"
      ],
      [
        "p",
        "**O que faz:** acrescenta ao JavaScript o tipo de cada valor, como as {{anotacao-de-tipo|anotações de tipo}} do {{python|Python}} que a aula 2.6 mostrou, e confere tudo antes de rodar. Diferente do Python, em que a anotação é só um aviso, no TypeScript a conferência barra o erro. **Quando usar:** em projetos médios e grandes; o Claude costuma escolher TypeScript sozinho, e os arquivos terminam em `.ts` ou `.tsx`. **Quando não usar:** num {{script}} de uma página. **Alternativa:** JavaScript puro. Versão 7.0.2, de 08/07/2026, licença Apache-2.0."
      ],
      [
        "codigo",
        {
          "texto": "function reajustar(valor: number, taxa: number): number {\n  return valor * (1 + taxa);\n}\n\nconsole.log(reajustar(\"1000\", 0.05));",
          "linguagem": "javascript",
          "rotulo": "reajuste.ts"
        }
      ],
      [
        "saida",
        "reajuste.ts(5,23): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'."
      ],
      [
        "p",
        "É a saída real do conferidor do TypeScript, o `tsc`. Em português: \"na linha 5, coluna 23, o {{argumento}} é um texto (`string`), e o {{parametro|parâmetro}} pede um número (`number`)\". O `\"1000\"`, entre aspas, é texto. Em JavaScript puro, o mesmo código rodaria sem reclamar e daria um resultado sem sentido."
      ],
      [
        "h3",
        "Chart.js: gráficos na página"
      ],
      [
        "p",
        "**O que faz:** desenha gráficos de linha, barra e pizza dentro da página, interativos: passar o dedo ou o mouse mostra o valor de cada ponto. **Quando usar:** num guia de estudo ou num painel em HTML, inclusive de um arquivo só, pelo endereço com a versão. **Quando não usar:** num relatório em PDF, em que uma imagem basta; aí a matplotlib da aula 4.3 resolve. **Alternativa:** a `Plotly`, que também tem versão para Python, ou a `ECharts`, para painéis grandes. Versão 4.6.1, de 22/10/2026, licença MIT."
      ],
      [
        "h3",
        "GSAP: animações, grátis com licença própria"
      ],
      [
        "p",
        "**O que faz:** anima elementos da página: entradas, movimentos guiados pela rolagem, sequências. **Quando usar:** em páginas de apresentação em que o movimento conta a história. **Quando não usar:** para um efeito simples de passar o mouse, que o CSS faz sozinho. **Alternativa:** as animações do próprio CSS, ou a biblioteca `Motion`. Versão 3.15.1, de 04/11/2026. A licença merece um parágrafo: a GSAP é grátis para todos, inclusive em uso comercial, mas não é de {{codigo-aberto|código aberto}}. A licença padrão, da Webflow, dona da GSAP, proíbe usá-la para construir uma ferramenta de criar animações sem código que concorra com a da Webflow. Para um site seu ou de um cliente, não atrapalha; é o tipo de detalhe que a pergunta da licença, na 4.1, existe para pegar."
      ],
      [
        "h3",
        "Outras que você vai ver"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Biblioteca",
            "Para quê",
            "Parente em Python"
          ],
          "linhas": [
            [
              "Express",
              "Criar um servidor em JavaScript que responde a pedidos",
              "A FastAPI, da aula 4.3"
            ],
            [
              "Zod",
              "Conferir o formato dos dados",
              "A Pydantic, da aula 4.3"
            ],
            [
              "supabase-js",
              "Ler e gravar no banco de dados do Supabase",
              "A supabase, da aula 4.5"
            ],
            [
              "Playwright",
              "Controlar um navegador de verdade pelo código",
              "A playwright, da aula 4.5"
            ],
            [
              "Astro e Svelte",
              "Sites e páginas com menos JavaScript",
              "Nenhum direto"
            ]
          ]
        }
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Só se o projeto usar npm: o Node.js, que já traz o npm. O comando `node --version`, da aula 2.10, diz se ele está no PC. Biblioteca por endereço não instala nada.",
          "**Custa?** As bibliotecas desta aula são gratuitas. A GSAP é grátis, mas com licença própria. Publicar o site pode custar, e o módulo 15 mostra as opções grátis.",
          "**Por que a node_modules tem milhares de arquivos?** Porque cada biblioteca traz as dependências dela, e elas trazem outras. Só o projeto do Vite com React deste exemplo instalou 24 pacotes. Ela não vai para o Git, e `npm install` a recria.",
          "**Tenho de aprender JavaScript agora?** Não. Até o módulo 15, você só lê, e o objetivo é reconhecer as peças e as escolhas."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o que o build faz, e o devDependencies",
          "blocos": [
            [
              "p",
              "O build pega os arquivos que o Claude escreveu, em JSX ou TypeScript, que o navegador não entende do jeito que estão, traduz para JavaScript comum, junta tudo em poucos arquivos, tira espaços e comentários e dá a cada arquivo um nome com um pedaço de {{hash}}, como `index-DSXtc1GT.js`. Esse pedaço muda quando o conteúdo muda, e é assim que o navegador sabe que precisa baixar a versão nova, em vez de usar a que guardou."
            ],
            [
              "p",
              "No `package.json` do Vite, as bibliotecas vêm em duas listas: `dependencies` (o React, que vai para o site) e `devDependencies` (o próprio Vite e o conferidor `oxlint`, que só trabalham no seu PC durante o desenvolvimento). As duas entram na trava; só a primeira chega ao navegador de quem visita."
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
          "pergunta": "Este é o trecho de atalhos do package.json que o Vite criou, num projeto com React já instalado. O que você acha que acontece quando você roda `npm run dev` na pasta do projeto? E `npm run build`?",
          "codigo": "\"scripts\": {\n  \"dev\": \"vite\",\n  \"build\": \"vite build\",\n  \"lint\": \"oxlint\",\n  \"preview\": \"vite preview\"\n}",
          "linguagem": "json",
          "resposta": "O `npm run dev` liga o servidor local do Vite: em menos de um segundo aparece \"ready\" e o endereço `http://localhost:5173/`, que é o {{localhost}}, o próprio PC, na {{porta}} 5173, e que você abre no navegador; o {{terminal}} fica ocupado enquanto ele estiver ligado, e cada arquivo salvo atualiza a página. O \"use --host to expose\" lembra que, por padrão, só o seu PC enxerga essa página. Já o `npm run build` não liga nada: ele monta a versão de publicar, lista cada arquivo criado na pasta `dist`, com o tamanho, e termina com \"built\". É essa pasta que vai para a {{hospedagem}}. Use os botões para ver as duas saídas reais.",
          "vivo": [
            [
              "Rodar npm run dev",
              "\"scripts\": {\n  \"dev\": \"vite\",\n  \"build\": \"vite build\",\n  \"lint\": \"oxlint\",\n  \"preview\": \"vite preview\"\n}\n\nPS> npm run dev",
              "> meu-site@0.0.0 dev\n> vite\n\n\n  VITE v8.3.6  ready in 207 ms\n\n  ➜  Local:   http://localhost:5173/\n  ➜  Network: use --host to expose"
            ],
            [
              "Rodar npm run build",
              "\"scripts\": {\n  \"dev\": \"vite\",\n  \"build\": \"vite build\",\n  \"lint\": \"oxlint\",\n  \"preview\": \"vite preview\"\n}\n\nPS> npm run build",
              "> meu-site@0.0.0 build\n> vite build\n\nvite v8.3.6 building client environment for production...\ntransforming...\n✓ 20 modules transformed.\nrendering chunks...\ncomputing gzip size...\ndist/index.html                   0.45 kB │ gzip:  0.29 kB\ndist/assets/react-CHdo91hT.svg    4.12 kB │ gzip:  2.06 kB\ndist/assets/vite-BF8QNONU.svg     8.70 kB │ gzip:  1.60 kB\ndist/assets/hero-CLDdwZDr.png    13.05 kB\ndist/assets/index-DykytF2W.css    4.10 kB │ gzip:  1.47 kB\ndist/assets/index-DSXtc1GT.js   222.44 kB │ gzip: 69.28 kB\n\n✓ built in 900ms"
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
          "p": "Você quer um gráfico interativo num guia de estudo em HTML, de um arquivo só, que vai ser aberto no celular com internet. Qual escolha encaixa melhor?",
          "o": [
            [
              "A Chart.js por um endereço de CDN, com o número da versão no endereço",
              "Isso. Uma linha no HTML, nada para instalar, e a versão fixa no endereço faz o papel da trava."
            ],
            [
              "Um projeto com Next.js, publicado na Vercel, com página própria",
              "Funciona, mas é peça demais para um gráfico: páginas, servidor e build para um arquivo que podia ser só HTML."
            ],
            [
              "A matplotlib, que desenha o gráfico e o põe dentro da página",
              "A matplotlib é do Python e gera uma imagem, sem interação. Para tocar e ver o valor, a ficha é a Chart.js."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu um gráfico no seu guia, e o Claude respondeu: \"Coloquei a Chart.js pelo endereço https://cdn.jsdelivr.net/npm/chart.js, sem número de versão, para pegar sempre a mais nova. Assim o guia também funciona sem internet.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: sem versão, o guia fica atualizado e abre em qualquer lugar",
              "Sem versão, a biblioteca pode mudar sozinha e quebrar o gráfico. E nada vindo de um endereço da internet carrega sem internet."
            ],
            [
              "O erro é o CDN: a Chart.js só funciona instalada com npm install",
              "A Chart.js funciona por endereço, sem instalar nada. Os erros da resposta são a falta de versão e a promessa de abrir sem internet."
            ],
            [
              "Sem versão, a biblioteca muda sozinha; e o CDN exige internet",
              "Isso. Peça o endereço com a versão, como chart.js@4.6.1, e, se o guia precisar abrir sem internet, peça a biblioteca dentro do próprio arquivo."
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
            "\"A node_modules precisa ir para o Git.\"",
            "Não vai: é pesada e se recria com `npm install`, a partir da ficha e da trava. Ela entra no `.gitignore`."
          ],
          [
            "\"Next.js ou React: qual dos dois?\"",
            "Não é um ou outro: o Next.js usa o React. A pergunta certa é se o site precisa de páginas, servidor e login."
          ],
          [
            "\"O Tailwind pelo endereço serve para o site publicado.\"",
            "O Play CDN é só para testar, diz a própria documentação. No site publicado, use um projeto com build ou CSS comum."
          ],
          [
            "\"Todo site precisa de React.\"",
            "Guia, landing page e simulador de uma tela funcionam com HTML e CSS, com menos coisa para conferir."
          ],
          [
            "\"Endereço de CDN sem versão pega sempre a melhor.\"",
            "Pega a mais nova, que pode mudar o comportamento sem aviso. Ponha a versão no endereço."
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
          "p": "O que fazem o React, o Vite e o Tailwind?",
          "r": [
            "React: monta a página em componentes, peças que se repetem e se atualizam.",
            "Vite: servidor local que atualiza a página ao salvar, e o build para publicar.",
            "Tailwind: o visual em classes curtas no próprio HTML."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são as duas formas de usar uma biblioteca de JavaScript, e o cuidado de cada uma?",
          "r": [
            "Por endereço de CDN, numa linha do HTML: precisa de internet e da versão no endereço.",
            "Num projeto com npm: ficha, trava e node_modules, com build antes de publicar."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "React, documentação oficial em português",
            "https://pt-br.react.dev/learn",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Next.js, documentação",
            "https://nextjs.org/docs",
            "oficial",
            "08/11/2026"
          ],
          [
            "Vite, guia",
            "https://vite.dev/guide/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Tailwind CSS, instalação com o Vite",
            "https://tailwindcss.com/docs/installation/using-vite",
            "oficial",
            "08/11/2026"
          ],
          [
            "Tailwind CSS, Play CDN (\"designed for development purposes only\")",
            "https://tailwindcss.com/docs/installation/play-cdn",
            "oficial",
            "08/11/2026"
          ],
          [
            "TypeScript, documentação em português",
            "https://www.typescriptlang.org/pt/docs/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Chart.js, primeiros passos",
            "https://www.chartjs.org/docs/latest/getting-started/",
            "oficial",
            "08/11/2026"
          ],
          [
            "GSAP Standard License (grátis, inclusive comercial; não pode concorrer com o construtor de animações da Webflow)",
            "https://gsap.com/community/standard-license/",
            "oficial",
            "08/11/2026"
          ],
          [
            "jsDelivr, documentação (endereços com e sem versão)",
            "https://www.jsdelivr.com/documentation",
            "oficial",
            "08/11/2026"
          ],
          [
            "JavaScript, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
            "comunidade",
            "08/11/2026",
            "pt"
          ],
          [
            "Express, documentação em português",
            "https://expressjs.com/pt-br/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Zod, documentação",
            "https://zod.dev/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Astro",
            "https://astro.build/",
            "oficial",
            "08/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Todo site precisa de React, Next.js e Tailwind, porque é o que o Claude usa",
          "O Claude usa quando o projeto pede. Para um guia ou uma página simples, HTML e CSS bastam."
        ],
        [
          "Reconheça cada peça e se o trabalho pede um HTML só ou um projeto inteiro com npm",
          "Isso. A ficha diz o que a peça faz; a escolha certa depende do tamanho do trabalho."
        ],
        [
          "Biblioteca de JavaScript é sempre por endereço de CDN, para não precisar instalar nada",
          "Por endereço serve para páginas simples. Sites maiores usam projeto com npm, ficha, trava e build."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Qual é a relação entre o Next.js e o React?",
        "o": [
          [
            "O Next.js é um framework que usa o React, com páginas e servidor prontos",
            "Isso. Escolher o Next.js é escolher o React com várias decisões já tomadas."
          ],
          [
            "São concorrentes: um projeto escolhe o Next.js ou o React",
            "Não são concorrentes: o Next.js é construído em cima do React."
          ],
          [
            "O React é a versão nova do Next.js, que deixou de ser atualizado",
            "O Next.js continua sendo atualizado, e os dois trabalham juntos."
          ]
        ],
        "c": 0
      },
      {
        "p": "O Claude pôs no guia uma biblioteca pelo endereço https://cdn.jsdelivr.net/npm/chart.js@4.6.1/dist/chart.umd.min.js. O que o @4.6.1 garante?",
        "o": [
          [
            "Que o guia vai abrir também sem internet, no celular ou no PC",
            "Nada que vem de um endereço da internet carrega sem internet. O @4.6.1 fixa a versão, não guarda a biblioteca."
          ],
          [
            "Que a biblioteca foi conferida e não tem nenhuma falha conhecida",
            "O número só diz qual versão vem. Conferir a biblioteca é o trabalho das cinco perguntas da 4.1."
          ],
          [
            "Que vem sempre a mesma versão, sem mudar sozinha com o tempo",
            "Isso. A versão no endereço faz o papel da trava da aula 4.2."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre o Node.js e o JavaScript da página?",
        "É a mesma linguagem em dois lugares. O JavaScript da página roda no navegador de quem visita. O Node.js roda JavaScript no seu PC, no terminal, e é ele que traz o npm e faz o Vite funcionar."
      ],
      [
        "Quando vale um projeto com npm, e não um HTML só?",
        "Quando o site tem várias páginas, login, dados que mudam na tela ou muita gente mexendo. Para um guia, uma página de venda ou um simulador de uma tela, um HTML com CSS próprio costuma bastar e dá menos trabalho para conferir."
      ],
      [
        "O que é o build?",
        "É a montagem antes de publicar: traduz o código para JavaScript comum, junta tudo em poucos arquivos e enxuga. No Vite, npm run build faz isso e grava o resultado na pasta dist, que é o que vai para a hospedagem."
      ]
    ]
  },
  "4-5": {
    "tempo": 24,
    "video": "a4-5",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você quer guardar os dados de um projeto num lugar seguro, tirar um print de um {{site}} toda manhã ou copiar uma tabela de uma página, e o Claude oferece uma {{biblioteca}} diferente para cada coisa. Esta aula é o catálogo das bibliotecas de dados e automação, com os cuidados que vêm junto: copiar dados do site de outra pessoa tem regras, e algumas delas são lei.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Boa parte do que você vai pedir ao Claude daqui para a frente é automação: um relatório que se monta sozinho, um preço que se confere todo dia, um formulário que grava num banco, um print de página para comparar com o modelo aprovado. As três fichas desta aula cobrem quase tudo isso: a Supabase, para guardar dados; a dupla requests e Beautiful Soup, para ler páginas; e a Playwright, para dirigir um {{navegador}} de verdade."
      ],
      [
        "p",
        "Saber qual é qual evita dois erros caros. O primeiro é técnico: usar a {{ferramenta}} pesada quando a leve resolvia, ou a leve numa página que ela não consegue ler, e achar que o site está quebrado. O segundo é de outra natureza: copiar dados de um site sem olhar se há um jeito oficial de pegar, se o dono permite e se os dados são de pessoas. Para quem tem uma empresa, esse segundo erro pode virar problema com a {{lgpd|LGPD}}."
      ],
      [
        "p",
        "Como nas fichas de {{python|Python}} da aula 4.3, cada biblioteca vem com o que faz, quando usar, a alternativa e um exemplo que {{rodar|rodou}} de verdade. Esta aula acrescenta uma parte que as outras não tinham: os cuidados."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "É o mesmo catálogo de autopeças das aulas 4.3 e 4.4, agora na seção das ferramentas que trabalham sozinhas: o depósito onde as peças ficam guardadas e organizadas, que é a Supabase; a pinça que pega uma peça na prateleira, que é a dupla requests e Beautiful Soup; e o braço mecânico que opera a máquina inteira, apertando botões como uma pessoa faria, que é a Playwright."
      ],
      [
        "quebra",
        "Um catálogo de autopeças não fala de lei, e esta seção precisa falar. A pinça e o braço mecânico trabalham em prateleiras dos outros: cada site tem dono, regras de uso e, às vezes, dados de pessoas. Por isso cada ficha aqui ganha uma parte a mais, e a aula termina com uma lista de cuidados que vale para todas."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Antes de tudo: existe um jeito oficial?"
      ],
      [
        "p",
        "Muitos dados que parecem pedir uma {{raspagem}} já são publicados num formato feito para programas. O Banco Central, por exemplo, publica as séries de juros, câmbio e inflação no portal de dados abertos, por uma {{api|API}} que a `requests` da aula 4.3 lê em três linhas. Uma API oficial não quebra quando o site muda de visual, tem regras claras e não depende de você adivinhar onde o dado está na página. Por isso a ordem é: API ou {{arquivo}} para baixar primeiro; ler a página só quando não houver outro caminho."
      ],
      [
        "h3",
        "Supabase: um banco de dados com API pronta"
      ],
      [
        "p",
        "**O que faz:** é um serviço na {{nuvem}} que entrega um {{banco-de-dados|banco de dados}} (o Postgres) com {{login}} de usuários, guarda de arquivos e uma API gerada sozinha. As bibliotecas `supabase`, para Python, e `supabase-js`, para {{javascript|JavaScript}}, conversam com ele. **Quando usar:** num site ou aplicativo que precisa guardar dados de várias pessoas, como os do módulo 15. **Quando não usar:** para dados só seus, num PC só, em que um arquivo resolve. **Alternativa:** o SQLite, um banco que mora num arquivo e cujo {{modulo-python|módulo}} `sqlite3` já vem com o Python; ou uma planilha em {{csv|CSV}}. Versões: `supabase` 2.34.1, de 06/11/2026, e `supabase-js` 2.119.0, de 04/11/2026, as duas com {{licenca|licença}} MIT."
      ],
      [
        "p",
        "O plano grátis, conferido na página de preços em 08/11/2026, permite 2 projetos ativos, com 500 MB de banco cada, e pausa o projeto depois de uma semana sem uso; dá para religar quando precisar. O exemplo abaixo lê a tabela `gastos` de um projeto. **Não foi rodado** para esta aula, porque exige um projeto no Supabase, que o módulo 15 cria com você:"
      ],
      [
        "codigo",
        {
          "texto": "import os\nfrom supabase import create_client\n\nsupabase = create_client(os.environ[\"SUPABASE_URL\"], os.environ[\"SUPABASE_KEY\"])\nresposta = supabase.table(\"gastos\").select(\"*\").execute()\nprint(resposta.data)",
          "linguagem": "python",
          "rotulo": "ler_gastos.py"
        }
      ],
      [
        "p",
        "O endereço e a chave vêm das {{variavel|variáveis de ambiente}}, nunca escritos no {{codigo|código}}, como a ficha da python-dotenv mostrou. E aqui mora o cuidado principal desta ficha: o Supabase tem dois tipos de {{chave-api|chave}}. A chave publicável (`sb_publishable_`) pode ir para o site, porque o que ela alcança é limitado pelas regras de acesso do banco, a {{rls|RLS}}. A chave secreta (`sb_secret_`) passa por cima dessas regras: a {{documentacao|documentação}} manda nunca colocá-la num navegador, num aplicativo distribuído ou no {{git|Git}}. A aula 15.4 conta um caso real de site que expôs o banco inteiro por falta dessas regras."
      ],
      [
        "h3",
        "requests e Beautiful Soup: ler uma página"
      ],
      [
        "p",
        "**O que faz:** a `requests` baixa o {{html|HTML}} da página, e a `beautifulsoup4`, a Beautiful Soup, lê esse HTML e acha as partes que interessam, pelo nome da marcação e da classe, como \"todo `small` com a classe `author` dentro de um `div` com a classe `quote`\". **Quando usar:** para dado público, sem API, numa página que chega pronta do {{servidor}}. **Quando não usar:** em página montada por JavaScript depois de abrir (a próxima ficha), em dados de pessoas e em sites que proíbem. **Alternativa:** para tabelas simples, a própria pandas tem uma leitura de tabelas de HTML; para raspagens grandes, existem ferramentas inteiras dedicadas a isso, com o risco jurídico crescendo junto com o volume. {{versao|Versão}} 4.15.0, de 07/06/2026, licença MIT, com documentação em português."
      ],
      [
        "p",
        "O exemplo usa o toscrape.com, um site feito para quem aprende a raspar, com citações de pessoas famosas. O {{programa}} conta as citações da primeira página e mostra o autor das três primeiras; a saída real está no \"Preveja antes de ver\", mais abaixo, com uma surpresa:"
      ],
      [
        "codigo",
        {
          "texto": "import requests\nfrom bs4 import BeautifulSoup\n\nresposta = requests.get(\"https://quotes.toscrape.com/\", timeout=10)\npagina = BeautifulSoup(resposta.text, \"html.parser\")\nautores = pagina.select(\"div.quote small.author\")\nprint(resposta.status_code, \"-\", len(autores), \"citações\")\nfor autor in autores[:3]:\n    print(autor.get_text())",
          "linguagem": "python",
          "rotulo": "raspar.py"
        }
      ],
      [
        "p",
        "O `select` usa o mesmo jeito de apontar partes da página que o {{css|CSS}} usa, e você consegue descobrir esses nomes sozinho: é a aba Elementos do F12, da aula 2.12. Clique com o botão direito numa citação, escolha Inspecionar, e a árvore mostra o `div` com a classe `quote`."
      ],
      [
        "h3",
        "Playwright: um navegador que o código dirige"
      ],
      [
        "p",
        "**O que faz:** abre um navegador de verdade (Chrome, Edge ou Firefox), com ou sem janela, e faz pelo código o que uma pessoa faria: abre endereços, espera a página terminar, clica, preenche, lê o que aparece e tira print. **Quando usar:** em página que se monta com JavaScript, para tirar print de um site, e para testar o seu próprio site, como a aula 6.5 e o módulo 16 vão mostrar. **Quando não usar:** quando a `requests` resolve, porque um navegador inteiro é mais lento e pesado; e nunca para entrar com a sua senha em banco ou em conta pessoal. **Alternativa:** o Selenium, mais antigo, que faz o mesmo trabalho. Versão 1.64.1 para Python, de 22/10/2026, licença Apache-2.0; a de JavaScript estava na 1.65.0."
      ],
      [
        "codigo",
        {
          "texto": "from playwright.sync_api import sync_playwright\n\nwith sync_playwright() as p:\n    navegador = p.chromium.launch(channel=\"chrome\")\n    pagina = navegador.new_page()\n    pagina.goto(\"https://quotes.toscrape.com/js/\")\n    autores = pagina.locator(\"div.quote small.author\").all_inner_texts()\n    print(len(autores), \"citações\")\n    print(autores[:3])\n    pagina.screenshot(path=\"pagina.png\")\n    navegador.close()",
          "linguagem": "python",
          "rotulo": "navegar.py"
        }
      ],
      [
        "saida",
        "10 citações\n['Albert Einstein', 'J.K. Rowling', 'Albert Einstein']"
      ],
      [
        "p",
        "Repare no endereço: `/js/`, uma versão da página em que as citações só aparecem depois que o JavaScript roda. A Playwright esperou, achou as 10 e ainda gravou um print, `pagina.png`. O `channel=\"chrome\"` manda usar o Chrome que já está no PC. Sem ele, a Playwright usa navegadores próprios, que se baixam uma vez com o {{comando}} `playwright install`, e a documentação avisa que, a cada atualização da biblioteca, pode ser preciso rodar esse comando de novo."
      ],
      [
        "h3",
        "Os cuidados de quem lê páginas dos outros"
      ],
      [
        "p",
        "**1. Procure o jeito oficial primeiro.** API, arquivo para baixar, ou uma conversa com o dono do site."
      ],
      [
        "p",
        "**2. Confira o que o dono pede aos robôs.** Quase todo site tem, no endereço `/robots.txt`, o {{robots-txt|robots.txt}}: a lista do que os robôs podem visitar. As primeiras linhas reais do site do Banco Central, pedidas com `curl.exe -s https://www.bcb.gov.br/robots.txt`:"
      ],
      [
        "saida",
        "User-agent: *\nAllow: /\nDisallow: /*/_catalogs\nDisallow: /*/Lists/\nDisallow: /*/lists/\nDisallow: /*/Forms/\nDisallow: /*/forms/\nDisallow:/*/_layouts/"
      ],
      [
        "p",
        "Em português: \"para qualquer robô (`*`), pode visitar tudo (`Allow: /`), menos estas pastas (`Disallow`)\". A norma que define o robots.txt diz que ele não é uma trava de acesso: é o pedido do dono, e respeitá-lo é o mínimo."
      ],
      [
        "p",
        "**3. Leia os termos de uso.** Muitos sites proíbem a raspagem nos termos, e descumprir pode render bloqueio, conta cancelada ou processo, conforme o caso."
      ],
      [
        "p",
        "**4. Identifique-se e vá devagar.** Há sites que recusam quem não diz quem é. No teste desta aula, a Wikipédia respondeu assim a um pedido da `requests` sem identificação, e aceitou o mesmo pedido com um {{cabecalho}} {{user-agent|User-Agent}} que dizia o nome do programa e um e-mail de contato:"
      ],
      [
        "saida",
        "403 Please set a user-agent and respect our robot policy https://w.wiki/4wJS. See also https://phabricator.wikimed\n200 text/html; charset=UTF-8"
      ],
      [
        "p",
        "A primeira linha é o código 403, \"proibido\", com o pedido do site: \"defina um user-agent e respeite a nossa política de robôs\". A segunda, depois de se identificar, é o 200. Ir devagar quer dizer deixar um intervalo entre os pedidos, para não pesar no servidor de ninguém; quem pede demais costuma receber o código 429, o \"{{limite-de-pedidos|limite de pedidos}}\", ou um bloqueio."
      ],
      [
        "p",
        "**5. Dado de pessoa é dado pessoal, mesmo público.** A LGPD diz que tratar dado pessoal de acesso público deve respeitar a finalidade, a boa-fé e o interesse público que justificaram ele estar disponível (art. 7º, § 3º). Nome, telefone e e-mail num site não viram livres por estarem lá. A lei não vale para o uso por pessoa física com fim só particular e não econômico (art. 4º, I); numa empresa, vale. A aula 11.8 aprofunda; aqui, a regra prática é não raspar dado de pessoas."
      ],
      [
        "p",
        "**6. Nada de senha nem de desafio anti-robô.** Não automatize o login com a sua senha em banco ou conta pessoal, e não tente passar por aqueles testes de \"não sou um robô\": eles existem justamente para dizer que o dono não quer automação ali."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso {{instalar}} alguma coisa?** As bibliotecas, com `uv add` no projeto: `requests`, `beautifulsoup4`, `playwright`, `supabase`. A Playwright pode usar o Chrome que você já tem.",
          "**Custa?** As bibliotecas, não. O Supabase tem plano grátis com limites; acima deles, é pago.",
          "**Raspar site é crime?** Depende do site, dos termos, do dado e do uso, e a resposta varia de caso para caso. Os seis cuidados acima reduzem muito o risco; para uso na empresa, com dados de pessoas, a conversa é com um advogado.",
          "**E se o site mudar?** A raspagem quebra: basta o site trocar o nome de uma classe. É mais um motivo para preferir a API, que é feita para não mudar sem aviso."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o print comparado e o SQLite",
          "blocos": [
            [
              "p",
              "Um uso da Playwright que vale para quem pede sites ao Claude: tirar um print da página pronta e comparar com o modelo aprovado. Em vez de confiar no \"ficou igual ao mock\", você põe as duas imagens lado a lado. É um dos hábitos de conferência que a aula 6.5 apresenta."
            ],
            [
              "p",
              "O SQLite é um banco de dados inteiro dentro de um arquivo só, sem servidor e sem conta. Para guardar o histórico de um robô que roda no seu PC, ele costuma ser melhor que o Supabase: nada para configurar, nada exposto na {{internet}}. O Supabase passa a valer quando várias pessoas ou um site publicado precisam dos mesmos dados."
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
          "pergunta": "Este é o programa da ficha da Beautiful Soup, que conta as citações da primeira página do quotes.toscrape.com e mostra os três primeiros autores. O que você acha que ele mostra? E se trocar o endereço pelo da versão `/js/`, a mesma página, só que montada por JavaScript?",
          "codigo": "import requests\nfrom bs4 import BeautifulSoup\n\nresposta = requests.get(\"https://quotes.toscrape.com/\", timeout=10)\npagina = BeautifulSoup(resposta.text, \"html.parser\")\nautores = pagina.select(\"div.quote small.author\")\nprint(resposta.status_code, \"-\", len(autores), \"citações\")\nfor autor in autores[:3]:\n    print(autor.get_text())",
          "linguagem": "python",
          "resposta": "Na página comum, `200 - 10 citações`, e os três primeiros autores: Albert Einstein, J.K. Rowling e Albert Einstein de novo. Na versão `/js/`, a resposta também é 200, \"deu certo\", mas com 0 citações. O servidor respondeu, e a `requests` trouxe o HTML que ele mandou; só que nessa versão o HTML chega quase vazio, e quem coloca as citações é o JavaScript, depois, dentro do navegador. A `requests` não roda JavaScript: ela vê a página antes de montada. Foi por isso que a ficha da Playwright, que abre um navegador de verdade e espera, achou as 10 no mesmo endereço. Use os botões para ver as duas saídas reais.",
          "vivo": [
            [
              "Rodar na página comum",
              "import requests\nfrom bs4 import BeautifulSoup\n\nresposta = requests.get(\"https://quotes.toscrape.com/\", timeout=10)\npagina = BeautifulSoup(resposta.text, \"html.parser\")\nautores = pagina.select(\"div.quote small.author\")\nprint(resposta.status_code, \"-\", len(autores), \"citações\")\nfor autor in autores[:3]:\n    print(autor.get_text())",
              "200 - 10 citações\nAlbert Einstein\nJ.K. Rowling\nAlbert Einstein"
            ],
            [
              "Trocar pela versão /js/",
              "import requests\nfrom bs4 import BeautifulSoup\n\nresposta = requests.get(\"https://quotes.toscrape.com/js/\", timeout=10)\npagina = BeautifulSoup(resposta.text, \"html.parser\")\nautores = pagina.select(\"div.quote small.author\")\nprint(resposta.status_code, \"-\", len(autores), \"citações\")\nfor autor in autores[:3]:\n    print(autor.get_text())",
              "200 - 0 citações"
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
          "p": "Você quer acompanhar a taxa Selic todo dia num relatório. O que tentar primeiro?",
          "o": [
            [
              "A API de dados abertos do Banco Central, lida com a requests",
              "Isso. Dado oficial, num formato feito para programas, que não quebra quando o site muda de visual."
            ],
            [
              "Uma Playwright que abre o site do Banco Central e tira um print da página",
              "Funciona, mas é o caminho mais pesado e frágil, e o print não vira número para o relatório. O Banco Central publica a série numa API."
            ],
            [
              "A Beautiful Soup lendo a página de notícias do Banco Central todo dia",
              "Ler a página é o último recurso, e quebra quando o site muda. Antes, procure a API ou o arquivo para baixar."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Seu programa com a requests trouxe 0 itens de uma página que, no navegador, mostra uma lista cheia. O Claude respondeu: \"Essa página monta a lista com JavaScript depois de abrir, e a requests não roda JavaScript. Use a Playwright, que abre um navegador de verdade e espera a página terminar.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: 0 itens com o código 200 quer dizer que o site está fora do ar",
              "Com o site fora do ar, não viria 200. O servidor respondeu; o que faltou foi o JavaScript montar a lista."
            ],
            [
              "Errado: bastava pôr um timeout maior na requests para a lista carregar",
              "O timeout só diz quanto esperar pela resposta do servidor. A lista não chega nunca pela requests, porque quem a monta é o JavaScript."
            ],
            [
              "Está certa: a lista nasce no navegador, e a requests não roda JavaScript",
              "Isso. A resposta está certa: a Playwright espera a página terminar e vê o que a pessoa vê, como na ficha."
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
            "\"Se está na internet, posso copiar e usar como quiser.\"",
            "O site tem dono e termos de uso, e dado de pessoa continua protegido pela LGPD mesmo sendo público."
          ],
          [
            "\"A requests trouxe a página vazia; o site está quebrado.\"",
            "Provavelmente a página se monta com JavaScript. Confira com a Playwright, ou procure a API que a própria página usa."
          ],
          [
            "\"Vou pôr a chave secreta do Supabase no site, para funcionar.\"",
            "A secreta passa por cima das regras de acesso e nunca vai para o navegador nem para o Git. No site, só a publicável."
          ],
          [
            "\"Vou fazer mil pedidos por minuto, que é mais rápido.\"",
            "O site bloqueia, ou responde 429, e você pesa no servidor de alguém. Deixe um intervalo entre os pedidos."
          ],
          [
            "\"Vou automatizar o login no banco com a minha senha.\"",
            "Senha em programa é risco de vazamento, e o banco pode bloquear a conta. Use o extrato que o banco oferece para baixar."
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
          "p": "Antes de ler as páginas de um site com um programa, o que conferir?",
          "r": [
            "Se existe uma API ou um arquivo oficial para baixar.",
            "O robots.txt e os termos de uso do site.",
            "Se há dado de pessoas: aí entra a LGPD.",
            "Identificar-se e ir devagar, com intervalo entre os pedidos."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quando usar a requests com a Beautiful Soup, e quando usar a Playwright?",
          "r": [
            "requests e Beautiful Soup: página que chega pronta do servidor; mais leve e rápido.",
            "Playwright: página montada por JavaScript, print de tela ou teste do seu próprio site."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Portal de Dados Abertos do Banco Central",
            "https://dadosabertos.bcb.gov.br/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Supabase, biblioteca de Python",
            "https://supabase.com/docs/reference/python/introduction",
            "oficial",
            "08/11/2026"
          ],
          [
            "Supabase, preços (2 projetos ativos, 500 MB, pausa após 1 semana sem uso)",
            "https://supabase.com/pricing",
            "oficial",
            "08/11/2026"
          ],
          [
            "Supabase, chaves de API (publicável e secreta)",
            "https://supabase.com/docs/guides/getting-started/api-keys",
            "oficial",
            "08/11/2026"
          ],
          [
            "Supabase, Row Level Security",
            "https://supabase.com/docs/guides/database/postgres/row-level-security",
            "oficial",
            "08/11/2026"
          ],
          [
            "sqlite3, documentação do Python",
            "https://docs.python.org/pt-br/3/library/sqlite3.html",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Documentação da Beautiful Soup, em português",
            "https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Toscrape, sites feitos para praticar raspagem",
            "https://toscrape.com/",
            "comunidade",
            "08/11/2026"
          ],
          [
            "Playwright para Python, instalação",
            "https://playwright.dev/python/docs/intro",
            "oficial",
            "08/11/2026"
          ],
          [
            "Playwright, navegadores (playwright install e channel=\"chrome\")",
            "https://playwright.dev/python/docs/browsers",
            "oficial",
            "08/11/2026"
          ],
          [
            "Selenium, documentação em português",
            "https://www.selenium.dev/pt-br/documentation/",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Introdução ao robots.txt, Google",
            "https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=pt-br",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "RFC 9309, Robots Exclusion Protocol (não é autorização de acesso)",
            "https://www.rfc-editor.org/rfc/rfc9309.html",
            "oficial",
            "08/11/2026"
          ],
          [
            "Política de robôs da Wikimedia (o endereço do erro 403)",
            "https://wikitech.wikimedia.org/wiki/Robot_policy",
            "oficial",
            "08/11/2026"
          ],
          [
            "Lei Geral de Proteção de Dados, Lei 13.709/2018 (art. 4º, I, e art. 7º, §§ 3º e 4º)",
            "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm",
            "oficial",
            "08/11/2026",
            "pt"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Com a Playwright dá para ler qualquer site, então ela deve ser sempre a primeira escolha",
          "A Playwright é a mais pesada das três. A primeira escolha é a API oficial; a Playwright fica para página que só se monta com JavaScript."
        ],
        [
          "Dado publicado na internet é público, e por isso pode ser copiado e usado sem nenhuma regra",
          "O site tem termos, o robots.txt diz o que o dono pede, e dado de pessoa continua protegido pela LGPD."
        ],
        [
          "Escolha a ferramenta pelo trabalho, procure a API primeiro e respeite site, termos e LGPD",
          "Isso. Supabase guarda, requests e Beautiful Soup leem, Playwright dirige um navegador, e os cuidados valem para todas."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Qual chave do Supabase pode ir no código de um site publicado?",
        "o": [
          [
            "A publicável, porque as regras de acesso do banco limitam o que ela alcança",
            "Isso. A secreta passa por cima dessas regras e nunca vai para o navegador nem para o Git."
          ],
          [
            "A secreta, desde que o repositório do site seja privado no GitHub",
            "Repositório privado não esconde o que o navegador recebe: quem visita o site vê o código. A secreta fica só no servidor."
          ],
          [
            "Nenhuma das duas, porque o Supabase só funciona a partir do Python",
            "Existe a supabase-js, feita para o JavaScript da página, e ela usa a chave publicável."
          ]
        ],
        "c": 0
      },
      {
        "p": "O que o arquivo robots.txt de um site diz?",
        "o": [
          [
            "A senha que os programas usam para entrar nas páginas do site",
            "O robots.txt não tem senha nenhuma. É uma lista pública do que os robôs podem visitar."
          ],
          [
            "Quais partes do site os robôs podem visitar, segundo o dono",
            "Isso. Não é uma trava de acesso, é o pedido do dono, e respeitar é o mínimo."
          ],
          [
            "Quais dados pessoais o site guarda e como usa cada um",
            "Quem diz isso é a política de privacidade. O robots.txt só diz o que os robôs podem visitar."
          ]
        ],
        "c": 1
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre a Beautiful Soup e a Playwright?",
        "A Beautiful Soup lê um HTML que você já tem, em geral baixado com a requests, sem rodar nada. A Playwright abre um navegador de verdade, roda o JavaScript da página e espera ela terminar. A primeira é leve e rápida; a segunda vê o que a pessoa vê."
      ],
      [
        "Posso raspar o site de um concorrente?",
        "Depende dos termos de uso do site, do que você vai coletar e do uso. Comece procurando um dado oficial, leia o robots.txt e os termos, e não colete dados de pessoas. Se for para a empresa, vale ouvir um advogado antes."
      ],
      [
        "O Supabase é o mesmo que um Excel na nuvem?",
        "Parece, mas faz mais: guarda dados de muitas pessoas ao mesmo tempo, tem login, regras de quem lê o quê e uma API pronta para o site usar. Para dados só seus, num PC só, um CSV ou o SQLite costumam bastar."
      ]
    ]
  },
  "4-6": {
    "tempo": 22,
    "video": "a4-6",
    "videoTipo": "curto",
    "opcional": true,
    "abertura": "Você já viu um vídeo ou um post dizendo \"monte seu {{agente}} com LangGraph\" ou \"CrewAI é melhor\", e ficou sem saber se precisava de um desses. Esta aula opcional dá o mapa para decidir entre o {{agent-sdk|Agent SDK}}, o LangGraph, o CrewAI ou nada disso, e mostra que o principal vem antes de qualquer nome.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Agente é o assunto do momento, e cada semana surge um {{framework}} novo prometendo facilitar. Para quem ainda não montou nenhum, a comparação vira decorar nomes: qual tem mais {{estrelas}}, qual o influenciador usa. Esta aula faz o contrário. Primeiro, mostra o que todo agente tem por baixo, com ou sem framework. Depois, dá uma ficha curta de cada opção, no mesmo formato das aulas 4.3 a 4.5, e termina com uma tabela de decisão."
      ],
      [
        "p",
        "Ela é opcional por um motivo declarado: o {{ciclo-do-agente|ciclo do agente}}, que é o que importa, é ensinado com calma na aula 12.2, depois que você já tiver usado {{ferramenta|ferramentas}}, a {{api|API}} e o {{claude-code|Claude Code}} por dentro. Quem pular esta aula não perde nada no caminho principal; quem ler agora chega à 12.2 sabendo onde cada nome se encaixa, e com um filtro para os anúncios de \"framework definitivo\"."
      ],
      [
        "p",
        "Há também um motivo prático. Quando o Claude sugerir \"vou montar isso com LangGraph\", você vai poder perguntar se precisa: às vezes um {{laco|laço}} de vinte linhas faz o mesmo, mais barato e mais fácil de conferir."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Na aula 0.0, o Claude Code era um estagiário que trabalha nos seus arquivos. Um framework de agentes é um escritório já montado para estagiários: mesas, quadro de tarefas, regras de quem aprova o quê, um {{arquivo}} onde fica o que já foi feito. O **Agent SDK** é contratar o mesmo estagiário do Claude Code para trabalhar dentro de um {{programa}} seu, com a mesa e as ferramentas que ele já conhece. O **LangGraph** é um quadro de processos em que você desenha cada etapa e para onde o trabalho vai depois dela. O **CrewAI** é um escritório organizado por cargos, com um pesquisador, um redator e um revisor, cada um com o seu papel. E **nada de framework** é você escrevendo a rotina do estagiário numa folha só: é curta, e você enxerga cada passo."
      ],
      [
        "quebra",
        "Um estagiário lembra do que fez ontem; o {{modelo}} não guarda nada entre uma volta e outra, e só \"lembra\" porque o programa devolve a conversa inteira a cada pedido. Outra diferença: no escritório, trocar de estagiário é um transtorno; no LangGraph e no CrewAI, trocar o modelo de uma empresa pelo de outra é mudar uma linha, enquanto o Agent SDK foi feito para o Claude."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O que todo agente tem por baixo: o ciclo"
      ],
      [
        "p",
        "Todo agente repete o mesmo ciclo, que a {{documentacao|documentação}} do Claude Code em português descreve em três fases, reunir contexto, tomar ação e verificar resultados, e que este curso resume como reunir contexto, agir e verificar. O programa entrega ao modelo o pedido e o que já aconteceu; o modelo decide se usa uma ferramenta (ler um arquivo, buscar na {{internet}}, consultar um saldo) ou se já pode responder; se usou uma ferramenta, o programa {{rodar|roda}} a ferramenta de verdade, junta o resultado ao histórico e pergunta de novo. A volta se repete até o modelo responder, ou até um limite de voltas."
      ],
      [
        "p",
        "No {{codigo|código}}, isso é um laço `while`, como os da aula 2.5. O \"Preveja antes de ver\", mais abaixo, mostra um ciclo inteiro de mentira, com um \"modelo\" que segue regras fixas, sem IA nenhuma, só para você ver as voltas. O que um framework faz é escrever esse laço por você e acrescentar o que dá trabalho fazer à mão: ferramentas prontas, memória entre conversas, pausas para uma pessoa aprovar, registro de cada passo e retomada depois de uma falha."
      ],
      [
        "h3",
        "Nada de framework: a API e um laço"
      ],
      [
        "p",
        "**O que é:** o seu programa chama a API do Claude, descreve as ferramentas que o modelo pode pedir e escreve o laço. **Quando usar:** em agentes pequenos, quando você quer ver cada pedido e cada resposta, e quando o custo importa. **Quando não usar:** quando o agente precisa de muitas ferramentas de arquivo e de {{terminal}}, que você teria de escrever do zero. É o ponto de partida que a própria Anthropic recomenda: o texto \"Building effective agents\", de 19/12/2024, sugere começar pela API direto, porque muitos padrões cabem em poucas linhas, e avisa que frameworks criam camadas que escondem os pedidos e as respostas de verdade, o que dificulta achar erros. O mesmo texto diz que, ao usar um framework, é preciso entender o código por baixo. O módulo 10 e o projeto final do curso seguem esse caminho."
      ],
      [
        "h3",
        "Claude Agent SDK: o Claude Code como biblioteca"
      ],
      [
        "p",
        "**O que é:** a {{biblioteca}} da Anthropic, para {{python|Python}} e TypeScript, que entrega ao seu programa as mesmas ferramentas, o mesmo ciclo e o mesmo cuidado com o {{contexto}} do Claude Code. Por baixo, ela roda o próprio Claude Code como um processo separado, um por {{sessao|sessão}} de agente. **Quando usar:** quando o seu agente precisa ler e escrever arquivos, rodar comandos e se organizar como o Claude Code faz, só que dentro de um programa seu. **Quando não usar:** num {{bot}} que só responde mensagens, em que a API com ferramentas faz o trabalho com menos máquina; a aula 17.2 compara os dois. O {{pacote}} se chama `claude-agent-sdk`, estava na {{versao|versão}} 0.2.179, de 06/11/2026, tem {{licenca|licença}} MIT, e o uso segue os Termos Comerciais da Anthropic."
      ],
      [
        "p",
        "Três detalhes da documentação que pesam. Peso: a página de {{hospedagem}} sugere começar com 1 GiB de memória, 5 GiB de {{disco}} e 1 processador por agente, e avisa que a memória cresce com o tamanho da sessão. Conta: para um produto, a autenticação é por {{chave-api|chave de API}}; a Anthropic não permite, sem aprovação, oferecer o {{login}} do claude.ai num produto feito com o Agent SDK. E freio: a sessão não tem tempo máximo sozinha, então a documentação manda definir `max_turns`, o limite de voltas; e o modo de {{permissao|permissão}} precisa ser escolhido: desde a versão 2.1.302 do Claude Code, uma sessão do SDK sem modo definido começa no Manual em alguns casos, como numa instalação nova, e, sem ninguém para aprovar, o que pediria aprovação não acontece."
      ],
      [
        "h3",
        "LangGraph: o trabalho desenhado em etapas"
      ],
      [
        "p",
        "**O que é:** a documentação o define como uma estrutura de baixo nível para agentes de longa duração que guardam estado. Você descreve o trabalho como um desenho de etapas ligadas por setas, um grafo: algumas etapas são código fixo, outras são decisões do modelo. Ele guarda o estado a cada passo, então dá para pausar para uma pessoa revisar e retomar depois de uma falha. Funciona com modelos de várias empresas e não exige a biblioteca LangChain, da mesma empresa. **Quando usar:** num fluxo com etapas conhecidas, pontos de aprovação e trabalho que leva horas e precisa sobreviver a uma queda. **Quando não usar:** num agente simples, em que o desenho dá mais trabalho que o problema. Versão 1.2.20, de 05/11/2026, licença MIT."
      ],
      [
        "h3",
        "CrewAI: uma equipe de agentes com papéis"
      ],
      [
        "p",
        "**O que é:** monta \"equipes\" (crews) de agentes, cada um com um papel, um objetivo e tarefas, que trabalham em sequência ou com um coordenador, e \"fluxos\" (flows) para organizar as etapas e guardar o estado. **Quando usar:** quando a tarefa se divide naturalmente em papéis, como pesquisar, escrever e revisar. **Quando não usar:** quando um agente só resolve: cada agente a mais é mais uma rodada de pedidos ao modelo, e o custo cresce junto. Versão 1.15.37, de 07/11/2026, licença MIT. Um detalhe que a 4.2 ensina a ler: a ficha dela no {{pypi|PyPI}} exige Python da 3.10 em diante, mas abaixo da 3.14, uma {{faixa-de-versoes|faixa de versões}} que pode não combinar com um Python muito novo."
      ],
      [
        "h3",
        "Outros nomes que aparecem"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Nome",
            "De quem",
            "Em uma linha"
          ],
          "linhas": [
            [
              "OpenAI Agents SDK",
              "OpenAI",
              "O kit de agentes da OpenAI, parecido em espírito com o Agent SDK; pacote `openai-agents`, versão 0.24.0"
            ],
            [
              "Pydantic AI",
              "A equipe da Pydantic",
              "Agentes com a conferência de dados da Pydantic, da aula 4.3"
            ],
            [
              "smolagents",
              "Hugging Face",
              "Uma biblioteca pequena, boa para estudar como o ciclo funciona"
            ]
          ]
        }
      ],
      [
        "h3",
        "Como decidir"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Se o seu caso é",
            "Comece por"
          ],
          "linhas": [
            [
              "Um bot que responde e usa duas ou três ferramentas",
              "Nada de framework: a API e um laço"
            ],
            [
              "Um agente que mexe em arquivos e roda comandos, como o Claude Code",
              "O Agent SDK"
            ],
            [
              "Um fluxo longo, com etapas fixas, {{aprovacao-humana|aprovação humana}} e retomada",
              "O LangGraph"
            ],
            [
              "Uma tarefa que se divide em papéis bem diferentes",
              "O CrewAI, e só se um agente não der conta"
            ],
            [
              "Ainda não sabe o que o agente vai fazer",
              "Nenhum: defina a tarefa primeiro"
            ]
          ]
        }
      ],
      [
        "p",
        "A regra de fundo é a mesma das bibliotecas da 4.1: cada camada a mais é código de outra pessoa que você confia sem ler. Um framework se justifica quando resolve algo grande que você não quer escrever, e não porque está na moda."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso {{instalar}} algum agora?** Não. Esta aula é para reconhecer e decidir. O Agent SDK aparece no módulo 12, e o projeto final do curso começa pela API.",
          "**Custa?** Os frameworks são gratuitos. Quem cobra é o modelo, por {{token}}, e um agente faz muitos pedidos por tarefa. Com equipes de agentes, a conta multiplica.",
          "**A minha assinatura do Claude cobre um agente meu?** Para um produto, o caminho é a chave de API, como a documentação do Agent SDK diz. O módulo 10 mostra a chave e os créditos.",
          "**Qual framework eu aprendo primeiro?** Nenhum antes do ciclo. Entendido o ciclo, na 12.2, a escolha vira uma decisão de uma linha da tabela acima."
        ]
      ],
      [
        "h2",
        "Preveja antes de ver"
      ],
      [
        "prever",
        {
          "pergunta": "Este programa é um agente de mentira: a {{funcao|função}} `modelo` segue regras fixas, no lugar da IA, e a ferramenta `ler_saldo` devolve um saldo inventado. O laço repete o ciclo até o \"modelo\" responder ou até 3 voltas. O que você acha que aparece na tela? E se a ferramenta falhar e devolver \"erro: sem conexão\"?",
          "codigo": "def modelo(historico):\n    ultimo = historico[-1]\n    if ultimo.startswith(\"saldo =\"):\n        return \"responder\", \"Seu saldo é \" + ultimo[8:]\n    return \"usar ferramenta\", \"ler_saldo\"\n\n\ndef ler_saldo():\n    return \"saldo = 1050.0\"\n\n\nhistorico = [\"pedido: qual é o meu saldo?\"]\nacao = \"\"\nvoltas = 0\nwhile acao != \"responder\" and voltas < 3:\n    voltas = voltas + 1\n    acao, detalhe = modelo(historico)\n    print(f\"Volta {voltas}: {acao} -> {detalhe}\")\n    if acao == \"usar ferramenta\":\n        historico.append(ler_saldo())\nprint(\"Fim depois de\", voltas, \"voltas\")",
          "linguagem": "python",
          "resposta": "Com a ferramenta funcionando, são duas voltas. Na primeira, o \"modelo\" vê só o pedido e decide usar a ferramenta (agir); o programa roda `ler_saldo` e junta o resultado ao histórico (reunir contexto). Na segunda, o \"modelo\" vê o saldo e responde (verificar e terminar). Com a ferramenta falhando, o \"modelo\" nunca vê um saldo e pede a ferramenta de novo a cada volta: quem para o ciclo é o limite de 3 voltas. Sem o `voltas < 3`, o teste desta aula seguiu pedindo a ferramenta sem parar. É por isso que o Agent SDK tem o `max_turns`: com IA de verdade, cada volta é um pedido pago. Use os botões para ver as duas saídas reais.",
          "vivo": [
            [
              "Rodar com a ferramenta funcionando",
              "def modelo(historico):\n    ultimo = historico[-1]\n    if ultimo.startswith(\"saldo =\"):\n        return \"responder\", \"Seu saldo é \" + ultimo[8:]\n    return \"usar ferramenta\", \"ler_saldo\"\n\n\ndef ler_saldo():\n    return \"saldo = 1050.0\"\n\n\nhistorico = [\"pedido: qual é o meu saldo?\"]\nacao = \"\"\nvoltas = 0\nwhile acao != \"responder\" and voltas < 3:\n    voltas = voltas + 1\n    acao, detalhe = modelo(historico)\n    print(f\"Volta {voltas}: {acao} -> {detalhe}\")\n    if acao == \"usar ferramenta\":\n        historico.append(ler_saldo())\nprint(\"Fim depois de\", voltas, \"voltas\")",
              "Volta 1: usar ferramenta -> ler_saldo\nVolta 2: responder -> Seu saldo é 1050.0\nFim depois de 2 voltas"
            ],
            [
              "Fazer a ferramenta falhar",
              "def modelo(historico):\n    ultimo = historico[-1]\n    if ultimo.startswith(\"saldo =\"):\n        return \"responder\", \"Seu saldo é \" + ultimo[8:]\n    return \"usar ferramenta\", \"ler_saldo\"\n\n\ndef ler_saldo():\n    return \"erro: sem conexão\"\n\n\nhistorico = [\"pedido: qual é o meu saldo?\"]\nacao = \"\"\nvoltas = 0\nwhile acao != \"responder\" and voltas < 3:\n    voltas = voltas + 1\n    acao, detalhe = modelo(historico)\n    print(f\"Volta {voltas}: {acao} -> {detalhe}\")\n    if acao == \"usar ferramenta\":\n        historico.append(ler_saldo())\nprint(\"Fim depois de\", voltas, \"voltas\")",
              "Volta 1: usar ferramenta -> ler_saldo\nVolta 2: usar ferramenta -> ler_saldo\nVolta 3: usar ferramenta -> ler_saldo\nFim depois de 3 voltas"
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
          "p": "Você quer um agente que leia os arquivos de uma {{pasta}}, rode comandos e corrija um {{script}}, como o Claude Code faz, só que dentro de um programa seu. Qual ficha encaixa melhor?",
          "o": [
            [
              "O CrewAI, com uma equipe de cinco agentes, cada um com um papel",
              "Uma equipe não resolve o que falta aqui: ferramentas de arquivo e de terminal. E cada papel a mais é mais custo."
            ],
            [
              "A API com um laço simples, sem nenhuma ferramenta de arquivo",
              "Sem ferramentas de arquivo e de terminal, o agente não lê a pasta nem roda comandos; você teria de escrever todas."
            ],
            [
              "O Agent SDK, que traz as ferramentas e o ciclo do Claude Code",
              "Isso. É o Claude Code como biblioteca: ler, escrever, rodar comandos, com permissões e limite de voltas."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você quer um bot que responda dúvidas simples no {{telegram|Telegram}}, e o Claude respondeu: \"Use o CrewAI com uma equipe de quatro agentes. Quanto mais agentes, mais inteligente a resposta, e o custo é o mesmo de um agente só.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Cada agente faz os próprios pedidos ao modelo: o custo multiplica",
              "Isso. E para um bot simples, a API com um laço curto resolve, com menos custo e mais fácil de conferir."
            ],
            [
              "Está certa: dividir em papéis sempre melhora a resposta, sem custo a mais",
              "Cada agente é mais uma rodada de pedidos pagos. Dividir em papéis só compensa quando a tarefa se divide de verdade."
            ],
            [
              "O erro é o Telegram: o CrewAI só funciona com bots do WhatsApp",
              "O CrewAI não depende do aplicativo de mensagens. O erro da resposta é dizer que mais agentes não custam mais."
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
            "\"Preciso escolher um framework antes de entender agentes.\"",
            "É o contrário: primeiro o ciclo (reunir contexto, agir, verificar), na aula 12.2. O framework é só quem escreve o laço por você."
          ],
          [
            "\"Mais agentes, resposta melhor.\"",
            "Mais agentes são mais pedidos ao modelo e mais coisa para conferir. Só compensa quando a tarefa se divide em papéis de verdade."
          ],
          [
            "\"Vou usar o login da minha assinatura no produto feito com o Agent SDK.\"",
            "A documentação pede chave de API para produtos, e não permite oferecer o login do claude.ai sem aprovação."
          ],
          [
            "\"O Agent SDK é tão leve quanto uma chamada à API.\"",
            "Ele roda o Claude Code inteiro por sessão; a sugestão da documentação é começar com 1 GiB de memória por agente."
          ],
          [
            "\"Meu agente não precisa de limite de voltas.\"",
            "Sem limite, uma ferramenta que falha deixa o ciclo girando, e com IA de verdade cada volta é paga. Defina o máximo de voltas."
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
          "p": "Que ciclo todo agente repete, com ou sem framework?",
          "r": [
            "Reunir contexto: o programa entrega ao modelo o pedido e o que já aconteceu.",
            "Agir: o modelo pede uma ferramenta, e o programa a roda de verdade.",
            "Verificar: o modelo olha o resultado e decide se responde ou dá mais uma volta, até um limite."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quando cada opção faz sentido?",
          "r": [
            "Nada de framework, a API e um laço: agente pequeno, que você quer ver por dentro.",
            "Agent SDK: agente que mexe em arquivos e roda comandos, como o Claude Code.",
            "LangGraph: fluxo longo, com etapas fixas, aprovação e retomada.",
            "CrewAI: tarefa que se divide em papéis bem diferentes."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Visão geral do Agent SDK (as ferramentas e o ciclo do Claude Code; chave de API para produtos)",
            "https://code.claude.com/docs/pt/agent-sdk/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Hospedar o Agent SDK (um processo por sessão; 1 GiB de memória, 5 GiB de disco e 1 processador por agente; max_turns)",
            "https://code.claude.com/docs/pt/agent-sdk/hosting",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como o Claude Code funciona (reunir contexto, agir, verificar)",
            "https://code.claude.com/docs/pt/how-claude-code-works",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "claude-agent-sdk no PyPI (versão 0.2.179, de 06/11/2026)",
            "https://pypi.org/project/claude-agent-sdk/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Changelog do Claude Code (2.1.302, de 16/10/2026: sessões do SDK sem modo definido começam no Manual em alguns casos)",
            "https://code.claude.com/docs/en/changelog",
            "oficial",
            "08/11/2026"
          ],
          [
            "Building effective agents (comece pela API; frameworks escondem pedidos e respostas), Anthropic, 19/12/2024",
            "https://www.anthropic.com/research/building-effective-agents",
            "oficial",
            "08/11/2026"
          ],
          [
            "Uso de ferramentas com o Claude, documentação da plataforma",
            "https://platform.claude.com/docs/pt-BR/agents-and-tools/tool-use/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "LangGraph, visão geral (não exige a LangChain)",
            "https://docs.langchain.com/oss/python/langgraph/overview",
            "oficial",
            "08/11/2026"
          ],
          [
            "langgraph no PyPI (versão 1.2.20, de 05/11/2026)",
            "https://pypi.org/project/langgraph/",
            "oficial",
            "08/11/2026"
          ],
          [
            "CrewAI, documentação",
            "https://docs.crewai.com/",
            "oficial",
            "08/11/2026"
          ],
          [
            "crewai no PyPI (versão 1.15.37, de 07/11/2026; Python da 3.10 até antes da 3.14)",
            "https://pypi.org/project/crewai/",
            "oficial",
            "08/11/2026"
          ],
          [
            "OpenAI Agents SDK, documentação",
            "https://openai.github.io/openai-agents-python/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Pydantic AI, documentação",
            "https://pydantic.dev/docs/ai/overview/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Hugging Face Agents Course (fundamentos antes dos frameworks)",
            "https://huggingface.co/learn/agents-course/unit0/introduction",
            "comunidade",
            "08/11/2026"
          ],
          [
            "AI Agents for Beginners, Microsoft",
            "https://github.com/microsoft/ai-agents-for-beginners",
            "oficial",
            "08/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O framework mais popular é sempre a melhor escolha, porque tem mais exemplos e mais gente usando",
          "Popularidade não diz se ele serve ao seu caso. A escolha vem do que o agente precisa fazer."
        ],
        [
          "Todo agente repete o mesmo ciclo; o framework só escreve o laço e traz peças prontas",
          "Isso. Entendido o ciclo, a escolha entre nada, Agent SDK, LangGraph e CrewAI vira uma decisão pelo caso."
        ],
        [
          "Sem um framework, não dá para fazer um agente de verdade, só um programa simples",
          "Dá, e é o que a própria Anthropic sugere para começar: a API e um laço resolvem muitos casos."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O que um framework de agentes faz por você?",
        "o": [
          [
            "Escreve o laço do ciclo e traz peças prontas, como memória e pausas",
            "Isso. O ciclo continua o mesmo; o framework poupa o trabalho de escrevê-lo e de montar as peças em volta."
          ],
          [
            "Deixa o modelo mais inteligente, porque troca a IA por uma versão treinada para agentes",
            "O framework não muda o modelo. Ele organiza as voltas e as ferramentas em volta do mesmo modelo."
          ],
          [
            "Elimina o custo dos pedidos ao modelo, porque guarda as respostas que já vieram",
            "Cada volta continua sendo um pedido ao modelo, e quem cobra é o modelo. Alguns frameworks até aumentam o número de pedidos."
          ]
        ],
        "c": 0
      },
      {
        "p": "Por que um agente precisa de limite de voltas?",
        "o": [
          [
            "Porque o modelo fica mais lento a partir da terceira volta do ciclo",
            "O limite não tem a ver com velocidade. Ele existe para o ciclo não girar sem fim."
          ],
          [
            "Porque uma ferramenta que falha deixa o ciclo girando, e cada volta é paga",
            "Isso. Foi o que o Preveja mostrou: com a ferramenta falhando, só o limite parou o ciclo."
          ],
          [
            "Porque a API do Claude recusa conversas com mais de três pedidos",
            "A API não tem esse limite. Quem precisa decidir o máximo de voltas é o programa."
          ]
        ],
        "c": 1
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre o Agent SDK e a API do Claude?",
        "A API é a porta direta para o modelo: você descreve as ferramentas e escreve o laço. O Agent SDK traz o Claude Code inteiro como biblioteca, com as ferramentas de arquivo e de terminal, permissões e sessões, mas pesa mais: um processo e cerca de 1 GiB de memória por agente."
      ],
      [
        "Preciso aprender LangGraph para fazer um agente?",
        "Não. Muitos agentes cabem num laço com a API. O LangGraph vale quando o trabalho tem etapas fixas, aprovação humana e precisa sobreviver a uma falha. A aula 12.2 ensina o ciclo, que vale para qualquer um deles."
      ],
      [
        "Por que esta aula é opcional?",
        "Porque comparar frameworks antes de entender o ciclo do agente vira decorar nomes. O ciclo vem na 12.2, e quem pular esta aula não perde nada no caminho principal."
      ]
    ]
  }
};
