// Módulo 2. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "2-1": {
    "tempo": 30,
    "video": "a2-1",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já pediu uma tarefa ao Claude e recebeu de volta um {{arquivo}} terminado em .py, cheio de linhas de {{codigo|código}} que não sabia ler. Esta aula mostra a ideia que está por trás de qualquer {{programa}}: uma lista de instruções, em ordem, que o computador segue ao pé da letra.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Daqui para a frente, boa parte do que o {{claude-code|Claude Code}} faz por você é escrever {{programa|programas}}: um {{script}} que renomeia arquivos, uma planilha que se atualiza sozinha, um {{bot}} que responde mensagens. Você não vai escrever esses programas do zero, e não precisa. Mas precisa saber o que um programa é, para conferir o que recebeu, entender por que ele falhou e pedir a mudança certa."
      ],
      [
        "p",
        "A ideia central é uma só, e o resto do módulo se apoia nela: um programa é uma lista de instruções, escrita em ordem, que o computador segue de cima para baixo, uma de cada vez, sem pular nenhuma e sem adivinhar nada. Quando você entende isso, metade dos erros que vai ver daqui para a frente fica óbvia: uma instrução no lugar errado, um nome escrito de outro jeito, uma coisa usada antes de existir."
      ],
      [
        "p",
        "Isso vale também para quem só lê. Quando o Claude disser \"mudei a linha 12 para calcular o desconto antes do frete\", você vai entender por que a ordem importa. Quando ele disser \"o programa parou na linha 3\", você vai saber que as linhas 1 e 2 já fizeram o que mandavam. E quando a explicação dele não bater com o {{codigo|código}}, você vai ter como desconfiar."
      ],
      [
        "p",
        "Nesta aula você ainda não {{rodar|roda}} nada no seu PC. Vai ler programas curtos, prever o que fazem e colocar linhas na ordem certa. Nada para {{instalar}}, nada para pagar. Os resultados que aparecem aqui foram tirados de execuções reais, no {{python|Python}} 3.12."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Um programa é uma receita. A receita lista os passos em ordem: aqueça a frigideira, quebre o ovo, espere a clara firmar, sirva. Quem segue a receita faz um passo de cada vez, na ordem em que estão escritos. Se a ordem for trocada e a receita mandar servir antes de quebrar o ovo, o resultado não faz sentido. E a receita usa ingredientes que foram separados antes: ninguém bate os ovos se os ovos ainda não estão na bancada."
      ],
      [
        "p",
        "No programa é igual. Cada linha é um passo. Os ingredientes são valores guardados com um nome, como `preco = 200`, e uma linha só pode usar um ingrediente que alguma linha de cima já separou."
      ],
      [
        "quebra",
        "Um cozinheiro de verdade preenche as lacunas da receita: \"sal a gosto\" vira uma pitada, \"forno médio\" vira 180 graus, e, se faltar um ovo, ele improvisa. O computador não faz nada disso. Ele não tem bom senso, não entende a intenção e não completa o que faltou: segue o texto exatamente como está, e para com uma {{mensagem-de-erro}} quando o texto não diz o suficiente. E há uma diferença na outra direção: um programa repete um passo mil vezes sem cansar e toma decisões sozinho, como \"se a compra passar de 200 reais, o frete é grátis\". As aulas 2.4 e 2.5 tratam disso."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Uma instrução por linha, de cima para baixo"
      ],
      [
        "p",
        "Veja um programa inteiro em Python, a {{linguagem-de-programacao|linguagem de programação}} que você vai ler neste módulo. Ele calcula o reajuste de um aluguel de 1.000 reais com 5% de aumento. São quatro linhas, e a tabela mostra o que cada uma faz:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código",
            "O que o computador faz"
          ],
          "linhas": [
            [
              "1",
              "`valor = 1000`",
              "Guarda o número 1000 com o nome `valor`."
            ],
            [
              "2",
              "`reajuste = 0.05`",
              "Guarda 0.05, que é 5%, com o nome `reajuste`. Em Python, o decimal se escreve com ponto."
            ],
            [
              "3",
              "`novo = valor * (1 + reajuste)`",
              "Faz a conta 1000 vezes 1,05. O asterisco é o sinal de multiplicar. O resultado fica guardado com o nome `novo`."
            ],
            [
              "4",
              "`print(novo)`",
              "Mostra na tela o valor guardado em `novo`."
            ]
          ]
        }
      ],
      [
        "p",
        "Rodando esse programa de verdade, a tela mostra uma linha só:"
      ],
      [
        "saida",
        "1050.0"
      ],
      [
        "p",
        "Repare no `.0` do final. A conta usou um número com casas decimais, o 0.05, e por isso o resultado vem como número decimal, que o Python mostra com pelo menos uma casa depois do ponto (só valores enormes ou minúsculos saem em outro formato, como `1e+16`). Não é erro, e a aula 2.3 explica os tipos de valor."
      ],
      [
        "p",
        "O que acontece por baixo: quem lê o arquivo e executa as instruções é o {{interpretador}} do Python, um programa instalado no seu PC. Antes de começar, ele confere se o texto inteiro segue as regras da linguagem; se uma linha estiver escrita de um jeito que ele não reconhece, ele avisa e não roda nada. Passada essa conferência, ele executa a linha 1, depois a 2, depois a 3, sempre na ordem escrita. Ele não reorganiza as linhas para \"chegar ao resultado\": o objetivo do programa só existe na cabeça de quem escreveu."
      ],
      [
        "p",
        "Por que isso importa para você: quando um programa do Claude para com erro na linha 40, as linhas de 1 a 39 já rodaram. Se uma delas criou um arquivo ou mandou uma mensagem, isso já aconteceu, mesmo que o resto tenha falhado. Saber onde o programa parou diz o que foi feito e o que faltou."
      ],
      [
        "p",
        "Quando essa leitura não basta: nem todo programa roda uma vez e termina. Um {{site}} ou um bot ficam ligados esperando, e só executam um trecho quando alguém clica ou manda uma mensagem. Mesmo assim, cada trecho que roda segue a mesma regra, de cima para baixo."
      ],
      [
        "h3",
        "A ordem muda o resultado"
      ],
      [
        "p",
        "Agora pegue o mesmo programa e leve o `print(novo)` para a primeira linha, antes de tudo. Esta é a saída real:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\reajuste.py\", line 1, in <module>\n    print(novo)\n          ^^^^\nNameError: name 'novo' is not defined"
      ],
      [
        "p",
        "Esse texto é um {{traceback|Traceback}}, o relatório de erro do Python, e se lê de baixo para cima. A última linha diz o tipo e a causa: {{nameerror|NameError}}, \"o nome `novo` não está definido\". A linha de cima mostra o trecho que falhou, e os acentos circunflexos `^^^^` apontam o nome exato. Mais acima, `line 1` diz em que linha do arquivo. Traduzindo: na linha 1, o computador recebeu a ordem de mostrar `novo`, mas ninguém tinha criado `novo` ainda. É a receita mandando servir o ovo antes de quebrá-lo."
      ],
      [
        "p",
        "O mesmo acontece com qualquer linha fora do lugar. No programa do desconto, que você vai montar daqui a pouco, a linha `final = preco - desconto` usa dois nomes. Se ela vier antes da linha que cria `desconto`, o Python para ali, com `NameError: name 'desconto' is not defined`. Daí sai a regra prática que vale para todo o módulo: **uma linha só pode usar um nome que uma linha de cima já criou.**"
      ],
      [
        "p",
        "Nem toda troca de ordem dá erro, e esse é o caso mais perigoso: às vezes o programa roda até o fim, sem reclamar, e mostra um número errado. A aula 2.3 mostra um exemplo assim. Por isso, conferir a ordem vale mesmo quando não aparece mensagem nenhuma."
      ],
      [
        "h3",
        "O computador não adivinha"
      ],
      [
        "p",
        "A segunda regra é que o computador lê ao pé da letra. Três exemplos que pegam quem está começando, todos testados:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Você escreve",
            "O que aparece",
            "Por quê"
          ],
          "linhas": [
            [
              "`print(novo)`",
              "`1050.0`",
              "Sem aspas, `novo` é um nome: o Python mostra o valor guardado nele."
            ],
            [
              "`print(\"novo\")`",
              "`novo`",
              "Entre aspas é texto, exatamente como está escrito. O Python mostra a palavra."
            ],
            [
              "`reajuste = 0,05`",
              "`SyntaxError`",
              "Com vírgula, não é o número 0,05. O Python para antes de rodar a primeira linha."
            ]
          ]
        }
      ],
      [
        "p",
        "O terceiro caso merece atenção, porque no Brasil a vírgula é o separador decimal. Para o Python, a vírgula separa itens, e `05`, com zero na frente, nem é um número válido. Esta é a saída real, inteira, do programa do reajuste com `0,05` na linha 2:"
      ],
      [
        "saida",
        "  File \"C:\\Users\\SeuNome\\estudo\\reajuste.py\", line 2\n    reajuste = 0,05\n                 ^\nSyntaxError: leading zeros in decimal integer literals are not permitted; use an 0o prefix for octal integers"
      ],
      [
        "p",
        "A última linha diz \"zeros à esquerda não são permitidos em números inteiros; use o prefixo 0o para números octais\". A sugestão do fim fala de octal, um jeito de escrever números que você não vai usar: o conserto aqui é trocar a vírgula por ponto. Repare que não há a linha `Traceback` nem o resultado de nenhuma conta. Erro de escrita, o {{syntaxerror|SyntaxError}}, é pego na conferência que o interpretador faz antes de começar: nenhuma linha roda, nem a primeira."
      ],
      [
        "p",
        "Maiúsculas e minúsculas também contam: `Novo` e `novo` são dois nomes diferentes. E o computador não completa nada: se você esquecer de fechar um parêntese, ele não supõe onde ia o parêntese; ele para e avisa. Isso parece chato, mas é o que torna o programa confiável: rodando hoje ou daqui a um ano, as mesmas linhas com os mesmos valores dão o mesmo resultado."
      ],
      [
        "h3",
        "Linguagem, interpretador e arquivo"
      ],
      [
        "p",
        "Um programa em Python é um arquivo de texto comum, com a {{extensao|extensão}} `.py`, como `reajuste.py`. Você pode abri-lo no Bloco de Notas e ler. A linguagem é o conjunto de regras desse texto: palavras como `print`, sinais como `=` e `*`, e o jeito de escrever números e textos. Existem centenas de linguagens; o {{javascript|JavaScript}}, que roda dentro das páginas, você vai aprender a ler na aula 2.10. Todas seguem a mesma ideia desta aula: instruções em ordem."
      ],
      [
        "p",
        "Para rodar o arquivo, alguém precisa digitar no {{terminal}} o {{comando}} `python reajuste.py`. Esse alguém pode ser você, como a aula 2.2 ensina, ou o Claude Code, quando você pede \"rode o programa\". Em qualquer caso, o que acontece é o mesmo: o interpretador abre o arquivo e executa as linhas na ordem."
      ],
      [
        "p",
        "Por que Python neste curso: é das linguagens mais fáceis de ler, porque usa poucas pontuações e muitas palavras, e é a mais usada para dados, automação e programas que conversam com a IA. Quando não usar Python: para a parte visível de um site, o {{navegador}} entende {{html|HTML}}, {{css|CSS}} e JavaScript, não Python. O módulo 15 trata disso."
      ],
      [
        "h3",
        "As quatro ideias que todo programa combina"
      ],
      [
        "p",
        "Quase todo programa, do script de três linhas ao {{agente}} do projeto final, combina quatro ideias. Cada uma tem uma aula neste módulo:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Ideia",
            "Em Python",
            "Exemplo do seu dia",
            "Aula"
          ],
          "linhas": [
            [
              "Guardar um valor com um nome",
              "`taxa = 0.05`",
              "A taxa de um contrato",
              "2.3"
            ],
            [
              "Decidir",
              "`if total >= 200:`",
              "Frete grátis acima de 200 reais",
              "2.4"
            ],
            [
              "Repetir",
              "`for parcela in parcelas:`",
              "Somar todas as parcelas",
              "2.5"
            ],
            [
              "Dar nome a um grupo de passos",
              "`def reajustar(valor, taxa):`",
              "Uma conta que você usa sempre",
              "2.6"
            ]
          ]
        }
      ],
      [
        "p",
        "Você não precisa entender a segunda coluna agora. O ponto é que, por mais complicado que um programa pareça, ele é feito dessas peças, empilhadas em ordem. Até um programa que conversa com o Claude é uma lista assim: preparar o pedido, enviar, mostrar a resposta. No \"Preveja antes de ver\" há um desses, opcional, para você ler sem medo."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Para esta aula, não. Para rodar Python no PC, ele precisa estar instalado; o laboratório da aula 2.2 confere, com o comando `python --version`, e, se faltar, instala.",
          "**Preciso decorar os comandos do Python?** Não. Quem escreve é o Claude. O seu trabalho é ler: seguir a ordem, reconhecer os nomes e perceber quando algo está fora do lugar.",
          "**E se eu errar a ordem?** O Python avisa com uma mensagem de erro, dizendo a linha, e para. Nada quebra no seu PC por causa disso.",
          "**Por que tanto inglês?** As palavras da linguagem, como `print`, são em inglês. Os nomes que você cria, como `valor` e `reajuste`, podem ser em português; acentos funcionam, mas o costume é escrever sem.",
          "**Programa e script são a mesma coisa?** Quase. Script é o nome que se dá a um programa pequeno, que faz uma tarefa só. Tudo nesta aula vale para os dois."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: algoritmo e bug",
          "blocos": [
            [
              "p",
              "Algoritmo é a sequência de passos para resolver um problema, antes de virar código numa linguagem. A palavra vem do nome de al-Khwarizmi, matemático persa do século 9, cujos livros levaram à Europa o jeito de fazer contas com os algarismos que usamos hoje. A receita do ovo frito é um algoritmo; o programa é esse algoritmo escrito para o computador."
            ],
            [
              "p",
              "Bug é o nome popular de um defeito no programa. A palavra já era usada para defeitos em máquinas antes dos computadores, mas ficou famosa por causa de uma mariposa achada dentro de um computador da Universidade Harvard em 1947 e colada no caderno de registro da equipe. Hoje, quase todo bug é uma instrução escrita diferente do que se queria: a ordem errada, um nome trocado, uma conta mal feita."
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
          "pergunta": "O que você acha que aparece na tela quando este programa roda?",
          "codigo": "valor = 1000\nreajuste = 0.05\nnovo = valor * (1 + reajuste)\nprint(novo)",
          "linguagem": "python",
          "resposta": "Aparece `1050.0`: o aluguel de 1.000 com 5% de reajuste. As três primeiras linhas só guardam valores e fazem a conta, sem mostrar nada; quem escreve na tela é o `print`, na última linha. Toque nos botões para ver o que muda; cada saída foi tirada de uma execução real.",
          "vivo": [
            [
              "Trocar 5% por 10%",
              "valor = 1000\nreajuste = 0.10\nnovo = valor * (1 + reajuste)\nprint(novo)",
              "1100.0"
            ],
            [
              "Pôr aspas no print",
              "valor = 1000\nreajuste = 0.05\nnovo = valor * (1 + reajuste)\nprint(\"novo\")",
              "novo"
            ],
            [
              "Levar o print para o topo",
              "print(novo)\nvalor = 1000\nreajuste = 0.05\nnovo = valor * (1 + reajuste)",
              "Traceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\reajuste.py\", line 1, in <module>\n    print(novo)\n          ^^^^\nNameError: name 'novo' is not defined"
            ],
            [
              "Voltar ao original",
              "valor = 1000\nreajuste = 0.05\nnovo = valor * (1 + reajuste)\nprint(novo)",
              "1050.0"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "Opcional, só para ler. Este programa manda uma pergunta ao Claude e mostra a resposta. A linha que começa com `system=` traz as {{instrucoes-do-sistema|instruções do sistema}}, o papel que o Claude deve assumir. O que você acha que muda se o texto dessa linha virar \"Responda como um economista, em uma frase, com um exemplo em reais.\"?",
          "codigo": "import anthropic\n\ncliente = anthropic.Anthropic()\n\nresposta = cliente.messages.create(\n    model=\"claude-opus-5-5\",\n    max_tokens=16000,\n    system=\"Responda como um professor paciente, em duas frases.\",\n    messages=[{\"role\": \"user\", \"content\": \"O que são juros compostos?\"}],\n)\n\nfor bloco in resposta.content:\n    if bloco.type == \"text\":\n        print(bloco.text)",
          "linguagem": "python",
          "resposta": "Muda o jeito da resposta, não a pergunta: em vez de duas frases de professor, vem uma frase só, com um exemplo em reais. O resto do programa continua igual e na mesma ordem: criar o cliente, enviar o pedido, mostrar o texto que voltou. Há uma diferença importante em relação ao programa do reajuste: aquele mostra `1050.0` toda vez, e este pode responder com palavras diferentes a cada vez que roda, porque quem escreve a resposta é o {{modelo}}. Você não precisa entender cada linha agora; a aula 2.6 ensina a ler a linha do `cliente.messages.create`. Este programa não foi rodado para escrever esta aula, porque precisa de uma {{chave-api|chave de API}}: ele roda de verdade na aula 10.4."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Um programa tem estas quatro linhas, nesta ordem: `final = preco - desconto`, depois `preco = 200`, depois `desconto = 20` e, por fim, `print(final)`. O que acontece quando ele roda?",
          "o": [
            [
              "Mostra 180, porque o Python lê o arquivo todo antes e já acha os dois valores",
              "Antes de rodar, o Python só confere se o texto segue as regras. Na hora de executar, vai linha a linha, e na linha 1 os nomes ainda não existem."
            ],
            [
              "Para na linha 1 com NameError, porque `preco` e `desconto` ainda não existem",
              "Isso. A saída real termina em `NameError: name 'preco' is not defined`. A linha 1 usa nomes que só serão criados depois."
            ],
            [
              "Mostra 0, porque `preco` e `desconto` começam valendo zero no Python",
              "Em Python, um nome não começa vazio nem valendo zero: usar um nome que ninguém criou é erro."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ao Claude para explicar um programa, e ele respondeu: \"O Python lê o arquivo inteiro primeiro, entende o objetivo e depois executa as linhas na ordem que fizer mais sentido.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Ele executa na ordem escrita, de cima para baixo, sem reorganizar",
              "Isso. Antes de começar ele confere se o texto segue as regras, mas não entende objetivo nem muda a ordem: é por isso que a ordem errada dá erro."
            ],
            [
              "Está correta: o Python reorganiza as linhas para chegar ao resultado",
              "Se reorganizasse, o `print(novo)` no topo funcionaria. A saída real mostra NameError na linha 1."
            ],
            [
              "O erro é dizer que ele lê o arquivo: ele só enxerga uma linha por vez",
              "Ele lê, sim, o arquivo inteiro antes, para conferir a escrita: é assim que um SyntaxError impede até a primeira linha de rodar. O erro está em outra parte."
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
          "p": "Primeiro, uma receita. Ponha os passos do ovo frito na ordem em que precisam acontecer, dentro de cada etapa.",
          "linhas": [
            {
              "t": "Aquecer a frigideira com um fio de óleo",
              "etapa": 0
            },
            {
              "t": "Quebrar o ovo dentro da frigideira",
              "etapa": 1
            },
            {
              "t": "Esperar a clara ficar branca",
              "etapa": 1
            },
            {
              "t": "Tirar o ovo com a espátula",
              "etapa": 2
            },
            {
              "t": "Servir no prato",
              "etapa": 2
            }
          ],
          "notas": [
            "Vem primeiro: o ovo precisa cair numa frigideira já quente.",
            "Só dá para quebrar o ovo na frigideira depois de ela estar pronta.",
            "Depende do anterior: sem ovo na frigideira, não há clara para firmar.",
            "Só se tira o que já está pronto.",
            "O último passo usa o resultado de todos os outros."
          ],
          "etapas": [
            "Preparar",
            "Fritar",
            "Servir"
          ]
        }
      ],
      [
        "parsons",
        {
          "p": "Agora, um programa de quatro linhas que calcula um preço com 10% de desconto. Ordene dentro de cada etapa e lembre a regra: cada linha só pode usar um nome que uma linha de cima já criou.",
          "linhas": [
            {
              "t": "preco = 200",
              "etapa": 0
            },
            {
              "t": "desconto = preco * 0.1",
              "etapa": 0
            },
            {
              "t": "final = preco - desconto",
              "etapa": 0
            },
            {
              "t": "print(final)",
              "etapa": 1
            }
          ],
          "notas": [
            "Cria o nome `preco`, que as outras linhas usam. Não depende de nada.",
            "Usa `preco`, que já existe, e guarda 20.0 em `desconto`.",
            "Usa `preco` e `desconto`, os dois já criados, e guarda 180.0 em `final`.",
            "Mostra o resultado. A saída real é `180.0`."
          ],
          "etapas": [
            "Calcular",
            "Mostrar"
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
            "\"O computador entende o que eu quis dizer.\"",
            "Ele segue o texto ao pé da letra. Se a ordem ou a escrita estiver errada, ele para com um erro ou, pior, faz exatamente o que está escrito e entrega um resultado errado."
          ],
          [
            "\"Posso usar um valor e criar o nome depois.\"",
            "Não pode. A linha que usa o nome roda antes de ele existir, e o Python para com NameError. Crie primeiro, use depois."
          ],
          [
            "\"Escrevi 0,05 e ele entendeu cinco por cento.\"",
            "Em Python, decimal é com ponto: `0.05`. Com `0,05` a saída real é um SyntaxError e nenhuma linha roda, porque `05`, com zero na frente, não é um número válido. Já `19,90` o Python aceita sem reclamar e guarda um par de números, (19, 90): esse é o caso perigoso, porque o erro só aparece na conta."
          ],
          [
            "\"Com aspas ou sem aspas, o print mostra o mesmo.\"",
            "`print(\"novo\")` mostra a palavra novo; `print(novo)` mostra o valor guardado com esse nome. As aspas mudam tudo."
          ],
          [
            "\"Deu erro na linha 10, então nada rodou.\"",
            "Depende do erro. Erro de escrita, como o SyntaxError, impede tudo. Erro durante a execução, como o NameError, aparece quando a linha 10 roda, e as linhas de 1 a 9 já fizeram o que mandavam."
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
          "p": "O que é um programa, e em que ordem o computador segue as instruções?",
          "r": [
            "Uma lista de instruções escrita num arquivo de texto.",
            "O computador segue de cima para baixo, uma linha de cada vez.",
            "Ele não adivinha nem reorganiza: faz exatamente o que está escrito."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que quer dizer `NameError: name 'novo' is not defined`, e qual é a causa mais comum?",
          "r": [
            "O Python não achou nada guardado com o nome novo.",
            "Quase sempre, uma linha usou o nome antes da linha que o cria.",
            "Ou o nome foi escrito de outro jeito, com outra letra ou maiúscula."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Uma introdução informal ao Python, tutorial oficial",
            "https://docs.python.org/pt-br/3/tutorial/introduction.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Erros e exceções, tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/errors.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "CS50's Introduction to Programming with Python (CS50P), Harvard",
            "https://cs50.harvard.edu/python/",
            "acadêmico",
            "02/11/2026"
          ],
          [
            "SDK de Python da Anthropic (o exemplo com client.messages.create)",
            "https://platform.claude.com/docs/pt-BR/cli-sdks-libraries/sdks/python",
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
          "Um programa só descreve o objetivo, e o computador escolhe a melhor ordem para chegar lá",
          "O computador não conhece o objetivo: executa as linhas na ordem escrita, e a ordem errada dá erro ou resultado errado."
        ],
        [
          "Um programa é uma lista de instruções que o computador segue em ordem, ao pé da letra",
          "Isso. De cima para baixo, uma linha de cada vez, sem adivinhar nada."
        ],
        [
          "Um programa só funciona em inglês, porque o computador não entende o português",
          "As palavras da linguagem são em inglês, mas os nomes que você cria podem ser em português. O que importa é a ordem e a escrita exata."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Por que `print(novo)` na primeira linha dá erro, se `novo` é criado na linha 4?",
        "o": [
          [
            "Porque o Python roda de cima para baixo, e `novo` ainda não existe",
            "Isso. Na hora em que a linha 1 roda, ninguém criou `novo`: NameError."
          ],
          [
            "Porque o `print` só pode aparecer na última linha de um programa, depois das contas",
            "O `print` pode aparecer em qualquer linha, quantas vezes quiser. O problema é usar um nome antes de ele existir."
          ],
          [
            "Porque `novo` é uma palavra reservada do Python e não pode ser usada como nome",
            "`novo` é um nome comum, criado pelo programa. Funciona da linha 4 em diante."
          ]
        ],
        "c": 0
      },
      {
        "p": "O que aparece na tela com `print(\"valor\")`?",
        "o": [
          [
            "O número guardado com o nome valor, sem as aspas",
            "Para mostrar o número, o nome vai sem aspas: `print(valor)`."
          ],
          [
            "Um erro, se nenhuma linha antes criou o nome valor",
            "Com aspas não há nome nenhum sendo usado, só texto: funciona mesmo que `valor` não exista."
          ],
          [
            "A palavra valor, porque entre aspas o Python mostra texto",
            "Isso. Entre aspas é texto, e o Python mostra exatamente o que está escrito."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Por que o resultado veio com .0 no final?",
        "Porque a conta usou um número decimal, como 0.05, e o resultado de uma conta com decimal também é decimal. O Python mostra esse tipo de número com pelo menos uma casa depois do ponto: 1050.0 é o mesmo que 1050. A aula 2.3 explica os tipos de valor."
      ],
      [
        "O que é um interpretador?",
        "É o programa que lê o seu arquivo .py e executa as instruções, uma linha de cada vez. Quando você digita python reajuste.py no terminal, é o interpretador do Python que abre o arquivo, confere se ele está bem escrito e roda as linhas na ordem."
      ],
      [
        "Se der erro no meio, o que já rodou fica feito?",
        "Fica. Se o erro aparece na linha 10 durante a execução, as linhas de 1 a 9 já fizeram o que mandavam, inclusive criar arquivos ou enviar coisas. A exceção é o erro de escrita, o SyntaxError: ele é pego antes de começar, e nada roda."
      ]
    ]
  },
  "2-2": {
    "tempo": 50,
    "video": "a2-2",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já viu o {{claude-code|Claude Code}} {{rodar}} um {{comando}}, aparecer um texto vermelho em inglês, e ficou sem saber se aquilo era grave. Esta aula ensina a andar pelo {{terminal}} do Windows e a reconhecer os três tropeços que mais aparecem, antes de pedir ajuda.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O terminal é a janela onde você conversa com o computador por texto. O Claude Code mora nele, e quase tudo o que o Claude faz no seu PC, como criar uma {{pasta}}, rodar um {{programa}} ou {{instalar}} uma {{biblioteca}}, acontece ali, por comandos. Quando ele diz \"rodei `python relatorio.py` e deu erro\", o erro saiu do terminal. Entender o terminal é entender o que o Claude está fazendo por você, e conferir."
      ],
      [
        "p",
        "Você não vai virar especialista, e não precisa. Precisa de quatro coisas: saber em que pasta está, ver o que tem nela, mudar de pasta e rodar um comando. E reconhecer três tropeços que respondem por boa parte dos erros de quem começa: o {{caminho}} com espaço sem aspas, o comando que o Windows não encontra e a pasta errada. Com isso, você lê a {{mensagem-de-erro}} e diz ao Claude o que corrigir."
      ],
      [
        "p",
        "Você também vai conhecer o {{codigo-de-saida|código de saída}}, um número que todo programa devolve ao terminar: 0 quer dizer que deu certo. Ele volta mais tarde no curso: os {{hook|hooks}} do Claude Code, na aula 7.6, e a {{integracao-continua|integração contínua}}, na aula 16.6, decidem o que fazer olhando para esse número."
      ],
      [
        "p",
        "O {{powershell|PowerShell}} vem com o Windows 11. O único programa que talvez falte é o {{python|Python}}, que as próximas aulas usam: o laboratório confere se ele está no PC e, se não estiver, instala. Nada para pagar, e nada do que você vai digitar apaga arquivos seus."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense no seu disco como um prédio, e em cada pasta como uma sala. Abrir o terminal é entrar no prédio com um porteiro que só entende ordens escritas. Você está sempre em alguma sala, e a placa na porta, que o terminal mostra antes do cursor, diz qual é. Você pode pedir: \"diga o que tem nesta sala\", \"vamos para a sala Projetos\", \"ligue a calculadora do corredor\". Para achar a calculadora, o porteiro procura numa lista de corredores que conhece; se ela não estiver em nenhum, ele diz que não conhece essa máquina. E, ao fim de cada ordem, entrega um recibo com um número: 0 se deu tudo certo, outro se algo falhou."
      ],
      [
        "quebra",
        "Num prédio de verdade você anda de sala em sala; no terminal, você salta direto para qualquer sala digitando o endereço completo. O porteiro é mais literal do que qualquer pessoa: um espaço no meio do nome da sala, sem aspas, faz ele achar que você disse duas coisas. E o recibo não explica nada, só traz o número; a explicação vem na mensagem de erro."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Abrir o PowerShell e ler a linha do cursor"
      ],
      [
        "p",
        "Aperte a tecla Windows junto com X e escolha **Terminal** (em alguns PCs, **Windows PowerShell**). No Windows 11, o Terminal abre o PowerShell por padrão. Aparece uma janela com uma linha parecida com esta, e o cursor piscando depois do sinal de maior:"
      ],
      [
        "saida",
        "PS C:\\Users\\SeuNome>"
      ],
      [
        "p",
        "Essa linha é o {{prompt-terminal|prompt do terminal}}, a placa na porta. Ela não tem nada a ver com o {{prompt}} que você escreve para a IA: é a mesma palavra em inglês, usada para \"o terminal está pronto, esperando uma ordem\". `PS` quer dizer PowerShell. `C:\\Users\\SeuNome` é a {{pasta-atual}}, a sala onde você está; ao abrir, costuma ser a sua pasta de usuário. E o `>` marca onde você digita. Depois de digitar um comando, aperte Enter para enviá-lo."
      ],
      [
        "p",
        "Se a linha aparecer sem o `PS` no começo, como `C:\\Users\\SeuNome>`, você abriu o Prompt de Comando, o CMD, um terminal mais antigo com outros comandos. Feche e abra o PowerShell."
      ],
      [
        "h3",
        "Onde estou e o que tem aqui"
      ],
      [
        "p",
        "O comando `Get-Location` responde \"em que pasta estou\". Esta é a saída real, com a pasta de teste do laboratório:"
      ],
      [
        "saida",
        "Path\n----\nC:\\Users\\SeuNome\\terminal-teste"
      ],
      [
        "p",
        "O comando `Get-ChildItem` lista o que tem na pasta atual. Ele tem dois apelidos, `ls` e `dir`, que fazem exatamente o mesmo; a maioria das pessoas digita `ls`, que é mais curto. Saída real de `ls` na pasta de teste, que tem uma pasta dentro:"
      ],
      [
        "saida",
        "    Directory: C:\\Users\\SeuNome\\terminal-teste\n\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----         02-Nov-26   4:38 AM                Meus Projetos"
      ],
      [
        "p",
        "Linha por linha: `Directory` diz de que pasta é a lista. Na tabela, a coluna `Mode` começa com `d` quando o item é uma pasta (de *directory*, diretório) e com `-` quando é um arquivo. `LastWriteTime` é a data da última alteração, no formato de data configurado no seu Windows. `Length` é o tamanho em bytes, e fica vazio para pastas. `Name` é o nome. Uma pasta vazia não mostra nada: o `ls` simplesmente volta ao prompt."
      ],
      [
        "p",
        "Os comandos próprios do PowerShell se chamam {{cmdlet|cmdlets}} e têm nomes de verbo e substantivo, como `Get-Location` e `Set-Location`. Os {{alias|apelidos}} curtos, como `ls`, `cd` e `pwd`, apontam para eles. Nas mensagens de erro, mais abaixo, a primeira linha às vezes traz o nome verdadeiro (`Set-Location : ...`) e às vezes o que você digitou (`cd : ...`); a linha `+ CategoryInfo` sempre traz o verdadeiro."
      ],
      [
        "h3",
        "Mudar de pasta"
      ],
      [
        "p",
        "O `cd` (de *change directory*, mudar de diretório) leva você para outra pasta. Há três jeitos de dizer para onde:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Comando",
            "Para onde vai"
          ],
          "linhas": [
            [
              "`cd Projetos`",
              "Para a pasta Projetos que está **dentro** da pasta atual. É um {{caminho-relativo|caminho relativo}}: depende de onde você está."
            ],
            [
              "`cd ..`",
              "Sobe uma pasta: de `C:\\Users\\SeuNome\\terminal-teste` para `C:\\Users\\SeuNome`. Os dois pontos querem dizer \"a pasta de cima\"."
            ],
            [
              "`cd C:\\Users\\SeuNome\\Documents`",
              "Para esse endereço exato, de qualquer lugar. É um caminho completo, que começa pela letra do disco."
            ],
            [
              "`cd $HOME`",
              "Volta para a sua pasta de usuário. `$HOME` é um nome que o PowerShell troca pelo caminho dela."
            ]
          ]
        }
      ],
      [
        "p",
        "Quando o `cd` dá certo, ele não escreve nada. O silêncio é o sucesso; o que muda é o prompt, que passa a mostrar a pasta nova: olhe a placa na porta."
      ],
      [
        "p",
        "Um atalho que evita erros: digite o começo do nome da pasta e aperte a tecla Tab. O PowerShell completa o nome para você, e, se o nome tiver espaço, já põe as aspas. Na pasta de teste, `cd Meu` seguido de Tab vira `cd '.\\Meus Projetos'`. O `.\\` quer dizer \"aqui, na pasta atual\"."
      ],
      [
        "h3",
        "Rodar um comando ou um programa"
      ],
      [
        "p",
        "Todo comando tem um nome e, muitas vezes, {{argumento|argumentos}}, separados por espaço. Em `python --version`, o nome é `python` e o argumento é `--version`, que pede ao programa só o número da versão. Saída real:"
      ],
      [
        "saida",
        "Python 3.12.10"
      ],
      [
        "p",
        "Para rodar um programa seu, o argumento é o nome do arquivo: `python ola.py` pede ao Python que abra o arquivo `ola.py` **na pasta atual** e execute as linhas dele, como a aula 2.1 explicou. No laboratório, o `ola.py` tem uma linha só, e a saída real é `Oi, terminal`. Guarde duas coisas: o espaço separa os argumentos, e o terminal precisa achar o programa `python` em algum lugar do PC. Os três tropeços saem daí."
      ],
      [
        "h3",
        "Tropeço 1: caminho com espaço, sem aspas"
      ],
      [
        "p",
        "Pastas com espaço no nome são comuns no Windows: \"Meus Projetos\", \"Meus Documentos\", \"OneDrive - Pessoal\". Agora digite `cd Meus Projetos`, sem aspas. Para o PowerShell, o espaço separa argumentos, então ele entende que você mandou o `cd` com duas coisas: `Meus` e `Projetos`. O `cd` aceita um caminho só, e reclama do que sobrou. Saída real:"
      ],
      [
        "saida",
        "Set-Location : A positional parameter cannot be found that accepts argument 'Projetos'.\nAt line:1 char:1\n+ cd Meus Projetos\n+ ~~~~~~~~~~~~~~~~\n    + CategoryInfo          : InvalidArgument: (:) [Set-Location], ParameterBindingException\n    + FullyQualifiedErrorId : PositionalParameterNotFound,Microsoft.PowerShell.Commands.SetLocationCommand"
      ],
      [
        "p",
        "Como ler: a primeira linha é a que importa, \"não foi encontrado um parâmetro que aceite o argumento 'Projetos'\", ou seja, \"sobrou um Projetos\". `At line:1 char:1` e a fileira de `~` mostram onde está o problema no que você digitou. As linhas com `+ CategoryInfo` e `+ FullyQualifiedErrorId` são detalhes técnicos; pode pular. E nada mudou: você continua na mesma pasta."
      ],
      [
        "p",
        "O conserto é pôr o caminho entre aspas: `cd \"Meus Projetos\"`. Aspas duplas e simples servem para um caminho, com uma diferença: dentro das aspas duplas, nomes como `$HOME` são trocados pelo valor; dentro das simples, ficam como estão. Por isso o laboratório usa `\"$HOME\\terminal-teste\"`, com aspas duplas."
      ],
      [
        "p",
        "Com o Claude: quando ele escrever um comando com um caminho que tem espaço, confira se o caminho está entre aspas."
      ],
      [
        "h3",
        "Tropeço 2: o comando que o Windows não encontra"
      ],
      [
        "p",
        "Digite o nome errado, `pyhton ola.py`, com as letras trocadas. Saída real:"
      ],
      [
        "saida",
        "pyhton : The term 'pyhton' is not recognized as the name of a cmdlet, function, script file, or operable program.\nCheck the spelling of the name, or if a path was included, verify that the path is correct and try again.\nAt line:1 char:1\n+ pyhton ola.py\n+ ~~~~~~\n    + CategoryInfo          : ObjectNotFound: (pyhton:String) [], CommandNotFoundException\n    + FullyQualifiedErrorId : CommandNotFoundException"
      ],
      [
        "p",
        "A primeira linha diz: \"o termo 'pyhton' não é reconhecido como nome de cmdlet, função, arquivo de {{script}} ou programa\". A segunda sugere conferir a grafia. Quando você vê \"is not recognized\", há duas causas possíveis: o nome digitado errado, como aqui, ou o programa não estar instalado, ou estar num lugar onde o terminal não procura. A segunda causa é o {{path|PATH}}."
      ],
      [
        "h3",
        "O PATH: a lista de pastas onde o Windows procura programas"
      ],
      [
        "p",
        "Quando você digita `python`, o PowerShell primeiro confere se é um comando dele mesmo, como um cmdlet ou um apelido. Se não for, ele percorre, em ordem, uma lista de pastas procurando um programa com esse nome, o `python.exe`. Essa lista é o PATH, uma {{variavel|variável de ambiente}} do Windows: as pastas ficam separadas por ponto e vírgula, e a primeira que tiver o programa ganha. São os corredores que o porteiro conhece."
      ],
      [
        "p",
        "Para ver em que pasta o Windows achou o Python, use `(Get-Command python).Source`. Saída real, no PC em que esta aula foi escrita:"
      ],
      [
        "saida",
        "C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe"
      ],
      [
        "p",
        "E `($env:Path -split \";\").Count` conta as pastas da lista; naquele PC, eram algumas dezenas. O seu número vai ser outro, e não importa: o que importa é que, se a pasta de um programa não está na lista, o terminal não acha o programa, mesmo instalado."
      ],
      [
        "p",
        "O caso clássico: você instala um programa, ou o Claude instala, e o terminal que já estava aberto continua dizendo \"is not recognized\". Cada terminal lê o PATH na hora em que abre; o instalador acrescenta a pasta dele à lista, mas só os terminais abertos **depois** enxergam. O conserto é fechar o terminal e abrir outro. Se ainda não reconhecer, o instalador não acrescentou a pasta; o guia de terminal do Claude Code mostra esse caso com o próprio `claude`."
      ],
      [
        "p",
        "Uma variação comum no Windows: digitar `python3`, como mandam tutoriais feitos para Mac e Linux. No Windows, esse nome aponta para um atalho da Microsoft Store, e a saída real começa com `Python was not found; run without arguments to install from the Microsoft Store`. O nome é que está errado: use `python`."
      ],
      [
        "p",
        "Quando não mexer: não edite o PATH à mão. Uma lista estragada faz comandos sumirem de uma vez. Se precisar, peça ao Claude para explicar a mudança antes."
      ],
      [
        "h3",
        "Tropeço 3: a pasta errada"
      ],
      [
        "p",
        "O `python ola.py` procura o arquivo só na pasta atual. Se você estiver uma pasta acima, a saída real é esta (o `2` da última linha é o código de saída, explicado logo abaixo):"
      ],
      [
        "saida",
        "C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe: can't open file 'C:\\\\Users\\\\SeuNome\\\\terminal-teste\\\\ola.py': [Errno 2] No such file or directory\n2"
      ],
      [
        "p",
        "Quem reclama agora é o Python, não o PowerShell: \"não consegui abrir o arquivo; esse arquivo ou pasta não existe\". A parte mais útil é o caminho entre aspas, que mostra onde ele procurou. Compare com onde o arquivo está, e a causa aparece. As barras dobradas, `\\\\`, são só o jeito de o Python escrever uma barra dentro de um texto; no disco, é uma barra só."
      ],
      [
        "p",
        "O `cd` para uma pasta que não existe ali dá uma mensagem parecida, do PowerShell. A primeira linha da saída real de `cd Projetos`, na pasta de teste, é `cd : Cannot find path 'C:\\Users\\SeuNome\\terminal-teste\\Projetos' because it does not exist.` Compare com o tropeço 1: lá, a pasta existia e o problema era o espaço."
      ],
      [
        "p",
        "O conserto: `Get-Location` para ver onde você está, `ls` para ver se o arquivo está ali, `cd` para a pasta certa. Isso importa com o Claude porque o Claude Code trabalha na pasta em que você o abriu: aberto na pasta errada, ele cria e procura arquivos no lugar errado."
      ],
      [
        "h3",
        "O código de saída: 0 quer dizer que deu certo"
      ],
      [
        "p",
        "Todo programa, ao terminar, devolve um número para quem o chamou: o código de saída. A regra é a mesma em todo sistema: **0 quer dizer que deu certo**; qualquer outro número quer dizer que algo falhou, e o que cada número significa depende do programa. No PowerShell, a variável `$LASTEXITCODE` guarda o código do último programa que rodou, como `python`, `git` ou `claude`. Saídas reais de `python ola.py; $LASTEXITCODE`, primeiro na pasta certa, depois na errada:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Situação",
            "O que aparece",
            "Código"
          ],
          "linhas": [
            [
              "Na pasta do arquivo",
              "`Oi, terminal`",
              "`0`"
            ],
            [
              "Uma pasta acima",
              "`can't open file`, com o caminho",
              "`2`"
            ],
            [
              "Digitando `python3`",
              "`Python was not found`",
              "`9009`"
            ]
          ]
        }
      ],
      [
        "p",
        "O ponto e vírgula separa dois comandos numa linha só. Os comandos do próprio PowerShell, como o `cd`, não mexem no `$LASTEXITCODE`; para eles existe `$?`, que vale `True` se o último comando deu certo e `False` se falhou. Depois do `cd Meus Projetos` sem aspas, a saída real de `$?` é `False`."
      ],
      [
        "p",
        "Por que isso importa: pessoas leem a mensagem; programas leem o número. Um hook do Claude Code é um programa que roda sozinho em certos momentos; pela documentação oficial, se ele terminar com o código 2 logo antes de rodar uma ferramenta, o Claude Code bloqueia essa chamada; depois dela, o 2 só leva o aviso ao Claude. Na integração contínua, o {{github|GitHub}} roda testes a cada envio, e qualquer código diferente de 0 marca falha."
      ],
      [
        "p",
        "Um cuidado: 0 quer dizer que o programa não relatou falha, não que o resultado está certo. Um programa pode terminar com 0 e mostrar um número errado, se a conta dele estiver errada. O código de saída é o recibo da execução, não a garantia do conteúdo."
      ],
      [
        "h3",
        "Quando quem digita é o Claude"
      ],
      [
        "p",
        "O Claude Code no Windows roda comandos pelo PowerShell; com o {{git|Git}} instalado, também pelo {{bash|Bash}} do Git Bash, outro shell. No Bash, `ls`, `cd` e `pwd` também existem e as três armadilhas são as mesmas; só o texto das mensagens muda. Se o seu Claude Code estiver no modo bypass, ele roda comandos sem pedir confirmação; no padrão Auto, um revisor automático bloqueia o que parece arriscado e avisa na tela. Nos dois, ler o que voltou do terminal é o seu jeito de saber o que aconteceu. Quando ele relatar um erro, peça a saída exata, sem resumo, e confira em que pasta ele estava, qual comando rodou e o que a mensagem diz."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** O PowerShell e o Terminal vêm com o Windows 11. Para o laboratório, só o Python: o passo 2 confere se ele já está no PC, e os passos 3 a 5 instalam, se faltar. As aulas 2.7, 2.9, 2.11 e 2.12 contam com ele.",
          "**Posso estragar o PC digitando errado?** Os comandos desta aula só olham, mudam de pasta e criam uma pasta de teste. Perigosos são os que apagam ou movem, como `Remove-Item`, `rm` e `del`, e comandos colados da {{internet}} sem você saber o que fazem: peça ao Claude para explicar antes.",
          "**Terminal, PowerShell, CMD e Bash: qual é qual?** O Terminal é a janela. PowerShell, CMD e Bash são shells, os programas que interpretam o que você digita nela.",
          "**Por que as mensagens estão em inglês?** O PowerShell segue o idioma do Windows; num Windows em português, as dele podem vir traduzidas. As do Python vêm sempre em inglês.",
          "**Como copio uma mensagem para o Claude?** Selecione com o mouse e aperte Ctrl+Shift+C, ou Ctrl+C. Sem nada selecionado, o Ctrl+C interrompe o comando que está rodando."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: versões, apelidos, ajuda e atalhos",
          "blocos": [
            [
              "p",
              "O Windows traz o Windows PowerShell 5.1. Existe também o PowerShell 7, um programa à parte, instalado separado. As mensagens desta aula são do 5.1; no 7, os comandos são os mesmos e as mensagens de erro são parecidas, só mais curtas. No Mac e no Linux, `pwd`, `ls` e `cd` têm os mesmos nomes, e o comando desconhecido aparece como `command not found`."
            ],
            [
              "p",
              "Para ver o nome verdadeiro por trás de um apelido, use `Get-Alias`. Saída real de `Get-Alias ls, cd, pwd, dir`, com as colunas vazias cortadas:"
            ],
            [
              "saida",
              "CommandType     Name\n-----------     ----\nAlias           ls -> Get-ChildItem\nAlias           cd -> Set-Location\nAlias           pwd -> Get-Location\nAlias           dir -> Get-ChildItem"
            ],
            [
              "p",
              "Todo cmdlet tem ajuda embutida: `Get-Help Set-Location` mostra o que ele faz e os argumentos que aceita. A seta para cima repete os comandos anteriores, para você não digitar de novo, e `cls` limpa a tela. E, no PowerShell, `cd ~` funciona como `cd $HOME`."
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
          "pergunta": "Você está em `PS C:\\Users\\SeuNome\\terminal-teste>`. Dentro dela há a pasta `Meus Projetos`, e o arquivo `ola.py` está dentro de `Meus Projetos`. Você roda os quatro comandos abaixo, um de cada vez, nesta ordem. O que você acha que acontece em cada um?",
          "codigo": "python ola.py\ncd Meus Projetos\ncd \"Meus Projetos\"\npython ola.py",
          "linguagem": "powershell",
          "resposta": "Primeiro, o Python reclama `can't open file`: o arquivo não está na pasta atual (tropeço 3). Segundo, o PowerShell reclama que sobrou o argumento `'Projetos'`, e você não sai do lugar (tropeço 1). Terceiro, nada é impresso, e o prompt passa a terminar em `terminal-teste\\Meus Projetos>`. Quarto, aparece `Oi, terminal`: agora o arquivo está na pasta atual. Todas essas saídas foram tiradas de execuções reais, e estão completas nesta aula."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você pediu ao Claude para rodar um relatório e voltou esta mensagem: `python.exe: can't open file 'C:\\\\Users\\\\SeuNome\\\\relatorio.py': [Errno 2] No such file or directory`. Qual é a causa mais provável?",
          "o": [
            [
              "O comando rodou numa pasta onde o arquivo não está",
              "Isso. Quem reclama é o próprio Python, que procurou o arquivo no caminho mostrado e não achou. Confira a pasta com Get-Location."
            ],
            [
              "O Python não está instalado neste PC, ou está desatualizado",
              "Se não estivesse, a resposta viria antes de qualquer arquivo, com \"is not recognized\" ou \"Python was not found\". Aqui, o Python rodou e não achou o arquivo."
            ],
            [
              "Faltaram aspas em volta do nome do arquivo no comando",
              "O nome `relatorio.py` não tem espaço. Sem aspas num caminho com espaço, a mensagem mostraria o caminho cortado no espaço."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"O comando `pyhton relatorio.py` deu 'is not recognized as the name of a cmdlet'. Isso quer dizer que o arquivo relatorio.py não existe nesta pasta; vou procurar em outra.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: a mensagem diz que o arquivo não foi encontrado",
              "A mensagem fala do termo `pyhton`, o nome do programa, e não do arquivo. Arquivo não encontrado é o `can't open file`."
            ],
            [
              "O problema é o nome do programa, pyhton, e não o arquivo relatorio.py",
              "Isso. As letras estão trocadas: o certo é `python`. O arquivo nem chegou a ser procurado."
            ],
            [
              "O problema é de aspas: o nome do arquivo precisava vir com aspas em volta",
              "Aspas só fazem diferença quando o caminho tem espaço, e o erro de aspas é outro. Aqui, o nome do programa está escrito errado."
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
            "\"Apareceu texto vermelho, então estraguei alguma coisa.\"",
            "Quase sempre o comando só não rodou. Leia a primeira linha do erro do PowerShell, ou a última de um erro do Python, e você acha a causa. Nada foi apagado."
          ],
          [
            "\"Instalei, mas o terminal não reconhece; a instalação falhou.\"",
            "O terminal lê o PATH quando abre. Feche e abra outro antes de concluir qualquer coisa."
          ],
          [
            "\"O cd não respondeu nada, então não funcionou.\"",
            "No cd, o silêncio é o sucesso. Olhe o prompt: ele mostra a pasta nova."
          ],
          [
            "\"Código de saída 0 quer dizer que o resultado está certo.\"",
            "Quer dizer que o programa não relatou falha. Se a conta dele estiver errada, ele termina com 0 e mostra o número errado."
          ],
          [
            "\"Tutorial manda python3, então eu digito python3.\"",
            "No Windows, `python3` costuma abrir um atalho da Microsoft Store e dar \"Python was not found\". Use `python`."
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
          "p": "Quais são os três tropeços desta aula, e o que resolve cada um?",
          "r": [
            "Caminho com espaço sem aspas: pôr o caminho entre aspas.",
            "Comando não reconhecido: conferir o nome; se estiver certo, abrir outro terminal ou instalar (é o PATH).",
            "Pasta errada: ver onde está com Get-Location e ir para a pasta certa com cd."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que é o código de saída, e o que quer dizer o 0?",
          "r": [
            "O número que um programa devolve ao terminar.",
            "0 quer dizer que deu certo; outro número, que algo falhou.",
            "No PowerShell, $LASTEXITCODE mostra o do último programa, e $? diz True ou False."
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
          "titulo": "Ande pelo terminal e provoque os três tropeços",
          "lugar": "No PC, no PowerShell",
          "tempo": "15 minutos, mais 5 se precisar instalar o Python",
          "antes": "Desta vez quem digita é você, colando comandos no PowerShell, sem o Claude. Você vai criar uma pasta de teste chamada terminal-teste na sua pasta de usuário, com uma pasta de nome com espaço dentro e um programa Python de uma linha, e vai provocar de propósito os três tropeços da aula. Antes, o passo 2 confere se o Python está no seu PC; se não estiver, os passos 3 a 5 instalam, e é aqui que o Python entra para o resto do módulo. Nada aqui apaga ou altera arquivos seus. Pelo app: não dá, porque o terminal é do PC; no celular, leia os passos e compare as saídas. Todos os comandos foram rodados de verdade no Windows 11, com o Windows PowerShell 5.1 e o Python 3.12, e as saídas abaixo são reais, com o nome trocado por SeuNome. A data da listagem aparece no formato do seu Windows.",
          "passos": [
            {
              "faz": "Aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >, como `PS C:\\Users\\SeuNome>`. Se não aparecer o PS, você abriu o Prompt de Comando: feche e tente de novo."
            },
            {
              "faz": "Confira se o Python está instalado:",
              "cola": "python --version",
              "saida": "Python 3.12.10",
              "espera": "Aparece Python seguido de um número de versão; o seu pode ser outro. Se apareceu, pule para o passo 6. Se aparecer \"is not recognized\" ou uma linha que começa com \"Python was not found\", o Python não está instalado: faça os passos 3 a 5."
            },
            {
              "faz": "Só se o passo 2 não mostrou a versão: instale o Python 3.12 com o {{winget}}, o instalador de programas do Windows. Se preferir o {{site}}, abra python.org/downloads/release/python-31210, baixe o Windows installer (64-bit), **marque Add python.exe to PATH** na primeira tela e clique em Install Now.",
              "cola": "winget install Python.Python.3.12",
              "espera": "O winget baixa o instalador oficial do python.org e instala, já acrescentando o Python ao PATH. Na primeira vez, ele pode pedir para aceitar os termos das fontes: digite Y e aperte Enter. Se o Windows perguntar se o programa pode fazer alterações, clique em Sim. O winget costuma terminar com \"Successfully installed\". Não testado: o Python 3.12 já estava instalado no PC em que esta aula foi escrita, e instalar de novo mudaria o PC.",
              "naoTestado": "Instalar o Python mudaria o PC do teste, que já tinha o Python 3.12.10. O comando e a opção de PATH foram conferidos no manifesto do pacote Python.Python.3.12 do winget (PrependPath=1) em 02/11/2026."
            },
            {
              "faz": "Só se instalou no passo 3: feche o Terminal e abra outro, como no passo 1.",
              "espera": "Abre um terminal novo. É ele que enxerga o Python: cada terminal lê o PATH na hora em que abre, e o que já estava aberto não vê a pasta nova."
            },
            {
              "faz": "Só se instalou: confira de novo no terminal novo.",
              "cola": "python --version",
              "saida": "Python 3.12.10",
              "espera": "Aparece Python 3.12 seguido de um número. Se ainda aparecer \"is not recognized\", veja \"Se der errado\"."
            },
            {
              "faz": "Crie a pasta de teste, já com uma pasta de nome com espaço dentro:",
              "cola": "mkdir \"$HOME\\terminal-teste\\Meus Projetos\"",
              "saida": "    Directory: C:\\Users\\SeuNome\\terminal-teste\n\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----         02-Nov-26   4:38 AM                Meus Projetos",
              "espera": "Uma tabela com uma linha só: a pasta Meus Projetos, com `d-----` na coluna Mode."
            },
            {
              "faz": "Entre na pasta de teste:",
              "cola": "cd \"$HOME\\terminal-teste\"",
              "espera": "Nada é impresso. O prompt passa a terminar em `terminal-teste>`."
            },
            {
              "faz": "Veja o que tem nela:",
              "cola": "ls",
              "espera": "A mesma tabela do passo 6, com a pasta Meus Projetos."
            },
            {
              "faz": "Tente entrar em Meus Projetos sem aspas, de propósito:",
              "cola": "cd Meus Projetos",
              "saida": "Set-Location : A positional parameter cannot be found that accepts argument 'Projetos'.\nAt line:1 char:1\n+ cd Meus Projetos\n+ ~~~~~~~~~~~~~~~~\n    + CategoryInfo          : InvalidArgument: (:) [Set-Location], ParameterBindingException\n    + FullyQualifiedErrorId : PositionalParameterNotFound,Microsoft.PowerShell.Commands.SetLocationCommand",
              "espera": "O erro do tropeço 1. O prompt não muda: você continua em terminal-teste."
            },
            {
              "faz": "Agora entre com aspas:",
              "cola": "cd \"Meus Projetos\"",
              "espera": "Nada é impresso, e o prompt passa a terminar em `terminal-teste\\Meus Projetos>`."
            },
            {
              "faz": "Crie um programa de uma linha nesta pasta:",
              "cola": "Set-Content ola.py 'print(\"Oi, terminal\")'",
              "espera": "Nada é impresso. Se rodar `ls`, aparece o arquivo ola.py, com 23 na coluna Length."
            },
            {
              "faz": "Rode o programa e, na mesma linha, peça o código de saída:",
              "cola": "python ola.py; $LASTEXITCODE",
              "saida": "Oi, terminal\n0",
              "espera": "A frase do programa e, embaixo, 0: deu certo."
            },
            {
              "faz": "Suba uma pasta:",
              "cola": "cd ..",
              "espera": "O prompt volta a terminar em `terminal-teste>`."
            },
            {
              "faz": "Rode o mesmo programa daqui, da pasta errada:",
              "cola": "python ola.py; $LASTEXITCODE",
              "saida": "C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe: can't open file 'C:\\\\Users\\\\SeuNome\\\\terminal-teste\\\\ola.py': [Errno 2] No such file or directory\n2",
              "espera": "O erro do tropeço 3 e o código 2: o Python procurou o ola.py em terminal-teste e não achou."
            },
            {
              "faz": "Erre o nome do programa:",
              "cola": "pyhton ola.py",
              "saida": "pyhton : The term 'pyhton' is not recognized as the name of a cmdlet, function, script file, or operable program.\nCheck the spelling of the name, or if a path was included, verify that the path is correct and try again.\nAt line:1 char:1\n+ pyhton ola.py\n+ ~~~~~~\n    + CategoryInfo          : ObjectNotFound: (pyhton:String) [], CommandNotFoundException\n    + FullyQualifiedErrorId : CommandNotFoundException",
              "espera": "O erro do tropeço 2: \"is not recognized\"."
            },
            {
              "faz": "Veja em que pasta do PATH o Windows acha o Python:",
              "cola": "(Get-Command python).Source",
              "saida": "C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe",
              "espera": "O caminho do python.exe que o Windows encontrou; o seu pode ser diferente."
            }
          ],
          "naoTestado": "Os passos 3 e 4 (instalar o Python e abrir um terminal novo) não foram rodados: o Python 3.12.10 já estava instalado no PC do teste. Todos os outros passos, e a mensagem do python3, foram rodados de verdade no Windows PowerShell 5.1 em 02/11/2026.",
          "errado": "se você digitou `python3`, a resposta é \"Python was not found; run without arguments to install from the Microsoft Store\": no Windows, o nome é `python`. Se o passo 5 ainda disser que `python` não é reconhecido, o Python foi instalado sem entrar no PATH. Pelo instalador do site, rode-o de novo, escolha Modify e, em Advanced Options, marque Add Python to environment variables; depois abra outro terminal. Se continuar, peça ao Claude Code: \"confira se o Python está instalado neste PC e em que pasta, e me explique por que o terminal não acha o python, sem mudar nada por conta própria\". Se algum comando colado der um erro diferente dos mostrados aqui, confira se ele foi colado inteiro, com as aspas. Para apagar a pasta de teste no fim, apague terminal-teste pelo Explorador: ela vai para a Lixeira."
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
          "texto": "Alguém estava na pasta terminal-teste do laboratório, onde só há a pasta Meus Projetos (o ola.py está dentro dela), e tentou de três jeitos ver ou rodar o ola.py. Os três comandos falharam, e cada um caiu num tropeço diferente da aula: caminho com espaço sem aspas, comando que não existe ou pasta errada. Para cada comando, pense em qual dos três tropeços é a causa antes de ver a resposta. Cuidado: uma das mensagens parece de outro tropeço. Para reproduzir, cole os três de uma vez, na pasta terminal-teste: eles só leem, não mudam nada.",
          "cola": "Get-Content ola.py\npython $HOME\\terminal-teste\\Meus Projetos\\ola.py\nexecutar ola.py",
          "saida": "PS C:\\Users\\SeuNome\\terminal-teste> Get-Content ola.py\nGet-Content : Cannot find path 'C:\\Users\\SeuNome\\terminal-teste\\ola.py' because it does not exist.\nAt line:1 char:1\n+ Get-Content ola.py\n+ ~~~~~~~~~~~~~~~~~~\n    + CategoryInfo          : ObjectNotFound: (C:\\Users\\SeuNome\\terminal-teste\\ola.py:String) [Get-Content], ItemNotFoundException\n    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand\n\nPS C:\\Users\\SeuNome\\terminal-teste> python $HOME\\terminal-teste\\Meus Projetos\\ola.py\nC:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\python.exe: can't open file 'C:\\\\Users\\\\SeuNome\\\\terminal-teste\\\\Meus': [Errno 2] No such file or directory\nPS C:\\Users\\SeuNome\\terminal-teste> executar ola.py\nexecutar : The term 'executar' is not recognized as the name of a cmdlet, function, script file, or operable program.\nCheck the spelling of the name, or if a path was included, verify that the path is correct and try again.\nAt line:1 char:1\n+ executar ola.py\n+ ~~~~~~~~\n    + CategoryInfo          : ObjectNotFound: (executar:String) [], CommandNotFoundException\n    + FullyQualifiedErrorId : CommandNotFoundException",
          "dica": "Em cada mensagem, olhe duas áreas: o começo da primeira linha, que diz quem reclamou (um cmdlet do PowerShell, o python.exe ou o próprio nome digitado), e o texto entre aspas simples, que é exatamente o caminho ou o nome que ele recebeu. Compare esse texto com o comando que foi digitado.",
          "resposta": "Primeiro comando: **pasta errada**. O `Get-Content` procurou o ola.py em terminal-teste, e o arquivo está dentro de Meus Projetos; o conserto é entrar antes com `cd \"Meus Projetos\"`. Segundo: **caminho com espaço sem aspas**, e é ele que parece outro tropeço. Quem reclama é o Python, com o mesmo `can't open file` da pasta errada, mas o caminho entre aspas para em `Meus`: o espaço cortou o caminho em dois argumentos, e o Python tentou abrir um arquivo chamado Meus. O conserto é `python \"$HOME\\terminal-teste\\Meus Projetos\\ola.py\"`, com aspas duplas. Terceiro: **comando que não existe**. `executar` não é um programa nem um cmdlet, e o Windows responde \"is not recognized\"; quem roda um arquivo .py é o `python`. A lição: o mesmo tropeço muda de mensagem conforme quem recebe o comando, e o texto entre aspas mostra o que de fato chegou."
        }
      ],
      [
        "fontes",
        [
          [
            "Guia de terminal para novos usuários, Claude Code",
            "https://code.claude.com/docs/pt/terminal-guide",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "about_Quoting_Rules: aspas simples e duplas no PowerShell 5.1",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_quoting_rules?view=powershell-5.1",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "about_Automatic_Variables: $? e $LASTEXITCODE",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_automatic_variables?view=powershell-5.1",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "about_Environment_Variables: a variável PATH",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-5.1",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Referência de hooks do Claude Code (o código de saída 2 bloqueia no PreToolUse, logo antes da ferramenta; no PermissionRequest, não)",
            "https://code.claude.com/docs/pt/hooks",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Definindo códigos de saída para ações, GitHub",
            "https://docs.github.com/pt/actions/how-tos/create-and-publish-actions/set-exit-codes",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Python Releases for Windows (o instalador do Python 3.12), python.org",
            "https://www.python.org/downloads/windows/",
            "oficial",
            "02/11/2026"
          ],
          [
            "Comando install do winget, Microsoft Learn",
            "https://learn.microsoft.com/pt-br/windows/package-manager/winget/install",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "The Shell, Missing Semester (MIT)",
            "https://missing.csail.mit.edu/2020/course-shell/",
            "acadêmico",
            "02/11/2026"
          ],
          [
            "Configuração avançada, Claude Code (no Windows: PowerShell sempre; com o Git, também o Git Bash)",
            "https://code.claude.com/docs/pt/setup",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modos de permissão, Claude Code (no Auto, o classificador bloqueia o que parece arriscado)",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Python 3.12.10, a última versão 3.12 com instalador para Windows (Windows installer 64-bit), python.org",
            "https://www.python.org/downloads/release/python-31210/",
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
          "O terminal só serve para quem programa; quem usa o Claude Code não precisa olhar para ele",
          "É no terminal que aparecem os comandos e os erros do Claude Code. Ler o que voltou é o seu jeito de conferir o que ele fez."
        ],
        [
          "Aspas no caminho, PATH em dia e pasta certa evitam a maioria dos erros; código 0 é sucesso",
          "Isso. Os três tropeços e o código de saída cobrem boa parte do que aparece no começo."
        ],
        [
          "Quando aparece um erro em vermelho, o mais seguro é fechar o terminal e começar tudo de novo",
          "Fechar só resolve o caso do PATH, depois de instalar algo. Nos outros, a mensagem diz a causa: leia antes."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O que fazer quando `cd Meus Projetos` responde \"A positional parameter cannot be found\"?",
        "o": [
          [
            "Criar de novo a pasta Meus Projetos, porque ela não existe",
            "Se não existisse, a mensagem seria \"Cannot find path\". Aqui o problema é o espaço."
          ],
          [
            "Pôr o caminho entre aspas, como em `cd \"Meus Projetos\"`, e repetir",
            "Isso. Sem aspas, o espaço divide o caminho em dois argumentos."
          ],
          [
            "Abrir outro terminal, para ele ler o PATH atualizado de novo",
            "O PATH é a lista onde se procuram programas, não pastas. O erro é do espaço sem aspas."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você instalou um programa e o terminal, que já estava aberto, diz \"is not recognized\". O que tentar primeiro?",
        "o": [
          [
            "Fechar e abrir outro terminal, que lê o PATH atualizado",
            "Isso. Cada terminal lê o PATH ao abrir; o que já estava aberto não vê a pasta nova."
          ],
          [
            "Pôr o nome do programa entre aspas e rodar o comando de novo",
            "Aspas resolvem espaço em caminho, não programa que o terminal não acha."
          ],
          [
            "Desinstalar e instalar de novo, porque a instalação falhou",
            "Pode não ter falhado: o terminal antigo só não enxerga a mudança. Abra outro antes de reinstalar."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "O que é o PATH, em uma frase?",
        "É a lista de pastas onde o Windows procura um programa quando você digita o nome dele, como python. Se a pasta do programa não está na lista, o terminal responde que não reconhece o comando, mesmo com o programa instalado."
      ],
      [
        "Por que o cd não mostra nada?",
        "Porque, no cd, o silêncio quer dizer que deu certo. O que muda é o prompt, a linha antes do cursor, que passa a mostrar a pasta nova. Se der errado, aí sim aparece uma mensagem."
      ],
      [
        "Qual a diferença entre $LASTEXITCODE e $?",
        "O $LASTEXITCODE guarda o número que o último programa externo devolveu, como python ou git: 0 é sucesso. O $? diz True ou False para o último comando de qualquer tipo, inclusive os do próprio PowerShell, como o cd."
      ]
    ]
  },
  "2-3": {
    "tempo": 30,
    "video": "a2-3",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você abriu um {{programa}} que o Claude escreveu, viu `total = preco + 10` e não soube dizer quanto valia `total`. Esta aula ensina a rastrear um programa linha por linha, anotando o valor de cada {{variavel-python|variável}}, do jeito que o computador faz.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quase tudo o que um programa usa fica guardado em variáveis: o valor de um contrato, a taxa, a pergunta que você quer fazer ao Claude, a resposta que ele devolveu, o total das parcelas. Uma variável é um nome que guarda um valor. Para ler qualquer programa, você precisa acompanhar, a cada linha, qual nome guarda qual valor. Isso se chama rastrear, e é a habilidade que esta aula treina."
      ],
      [
        "p",
        "Rastrear é ver a máquina por baixo: os nomes, os valores e a ordem em que eles mudam. Parece simples, e é das ideias que mais confundem quem começa, porque o sinal de igual da programação não quer dizer o que quer dizer na matemática, e porque um valor guardado não se atualiza sozinho. Os dois enganos produzem o tipo de erro mais traiçoeiro: o programa {{rodar|roda}} até o fim, sem reclamar, e mostra o número errado."
      ],
      [
        "p",
        "Para você, que não escreve o {{codigo|código}}, rastrear serve para conferir. Quando o Claude disser \"o problema era que a taxa ainda valia 5% na hora da conta\", você vai conseguir seguir o raciocínio. E quando um resultado vier estranho sem {{mensagem-de-erro}} nenhuma, você vai saber procurar a linha em que o valor mudou, ou deixou de mudar."
      ],
      [
        "p",
        "Nada para {{instalar}} nem pagar. No fim da aula, um {{site}} gratuito, o {{python-tutor|Python Tutor}}, desenha cada passo de um programa para você ver; sem {{internet}}, os mesmos passos estão descritos em texto."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Uma variável é como uma célula com nome numa planilha. No Excel, você pode dar à célula B2 o nome `preco` e escrever 100 nela. Depois, em outra célula chamada `total`, escreve `=preco+10`, e aparece 110. Em {{python|Python}}, `preco = 100` cria a célula com nome e põe 100 dentro; `total = preco + 10` cria outra, com 110. Ler um programa é como olhar a planilha e saber o que está em cada célula."
      ],
      [
        "quebra",
        "Na planilha, `total` guarda a fórmula: se você trocar o preço para 500, o total vira 510 na hora. Em Python, não. A linha `total = preco + 10` faz a conta uma vez, quando roda, e guarda só o resultado, 110. Se o preço mudar depois, o total continua 110 até que alguma linha refaça a conta. É exatamente aqui que muita gente erra a leitura, e esta aula volta a esse ponto com um exemplo real."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O sinal de igual guarda, não compara"
      ],
      [
        "p",
        "Em Python, o `=` não pergunta se os dois lados são iguais. Ele manda guardar: calcule o que está à direita e guarde o resultado com o nome que está à esquerda. Isso se chama {{atribuicao|atribuição}}. A ordem de leitura é da direita para a esquerda: primeiro a conta, depois a etiqueta."
      ],
      [
        "p",
        "Por isso uma linha como `saldo = saldo - 200`, que na matemática não faz sentido, em Python é comum. Ela quer dizer: pegue o valor que `saldo` tem agora, tire 200 e guarde o resultado de novo com o nome `saldo`. O valor antigo é substituído. Quando o programa precisa perguntar se dois valores são iguais, usa outro sinal, o `==`, com dois iguais, que a aula 2.4 explica."
      ],
      [
        "h3",
        "Rastrear: uma tabela com o valor de cada nome"
      ],
      [
        "p",
        "O jeito mais seguro de ler um programa com variáveis é fazer o que o computador faz: ir linha por linha e anotar, numa tabela, o valor de cada nome depois de cada linha. Veja um programa de quatro linhas que mexe num saldo, rastreado assim:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código",
            "saldo depois da linha"
          ],
          "linhas": [
            [
              "1",
              "`saldo = 1000`",
              "1000"
            ],
            [
              "2",
              "`saldo = saldo - 200`",
              "800 (1000 menos 200)"
            ],
            [
              "3",
              "`saldo = saldo * 2`",
              "1600 (800 vezes 2)"
            ],
            [
              "4",
              "`print(saldo)`",
              "continua 1600, e aparece na tela"
            ]
          ]
        }
      ],
      [
        "p",
        "A saída real é `1600`. Repare em duas regras do rastreio. Primeira: em cada linha, só muda o nome que está à esquerda do `=`; os outros ficam como estavam. Segunda: a conta da direita usa o valor que o nome tem **naquele momento**, não o primeiro valor nem o último. Na linha 3, `saldo` vale 800, e não 1000."
      ],
      [
        "p",
        "O que acontece por baixo: enquanto o programa roda, o Python mantém uma lista de nomes, e cada nome aponta para um valor guardado na memória do computador. Atribuir é criar um nome nessa lista ou fazê-lo apontar para um valor novo. Quando o programa termina, a lista inteira some. Nada fica guardado no PC, a não ser que o programa grave num arquivo, assunto da aula 2.7."
      ],
      [
        "h3",
        "A variável não acompanha as outras"
      ],
      [
        "p",
        "Agora o caso em que a planilha e o Python se separam. Rastreie este programa:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código",
            "preco",
            "total"
          ],
          "linhas": [
            [
              "1",
              "`preco = 100`",
              "100",
              "ainda não existe"
            ],
            [
              "2",
              "`total = preco + 10`",
              "100",
              "110"
            ],
            [
              "3",
              "`preco = 500`",
              "500",
              "110"
            ],
            [
              "4",
              "`print(total)`",
              "500",
              "110, que aparece na tela"
            ]
          ]
        }
      ],
      [
        "p",
        "A saída real é `110`. Na linha 2, o Python calculou 100 mais 10 e guardou o número 110 em `total`; ele não guardou \"preço mais dez\". Na linha 3, só o nome da esquerda, `preco`, mudou. O `total` ficou com o valor que recebeu na linha 2. Se a intenção era mostrar 510, falta refazer a conta depois de mudar o preço: com as linhas na ordem `preco = 100`, `preco = 500`, `total = preco + 10`, a saída real é `510`."
      ],
      [
        "p",
        "Por que isso importa: esse é o bug silencioso que a aula 2.1 prometeu. O programa não dá erro nenhum, roda até o fim e mostra um número que parece razoável. Num programa que calcula parcelas, mudar a taxa no meio sem recalcular a parcela produz um valor errado com cara de certo. Quando o resultado não bater, rastreie: procure a linha em que o valor foi calculado e confira o que valiam os nomes naquele momento."
      ],
      [
        "h3",
        "Tipos: número inteiro, número decimal e texto"
      ],
      [
        "p",
        "Todo valor tem um {{tipo-de-dado|tipo}}, e o tipo decide o que as operações fazem. Os três que você mais vai ver:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Tipo",
            "Nome em Python",
            "Exemplos",
            "Detalhe"
          ],
          "linhas": [
            [
              "Número inteiro",
              "`int`",
              "`100`, `-3`, `2026`",
              "Sem ponto decimal."
            ],
            [
              "Número decimal",
              "`float`",
              "`0.05`, `50.0`",
              "Com ponto, nunca com vírgula. A divisão com `/` sempre dá decimal."
            ],
            [
              "Texto",
              "`str`",
              "`\"Resuma este contrato\"`, `\"10\"`",
              "Entre aspas, simples ou duplas. Também chamado de {{string}}."
            ]
          ]
        }
      ],
      [
        "p",
        "Um exemplo com dinheiro, do começo ao fim: um conversor de moeda com `reais = 250`, `cotacao = 5` (uma cotação de exemplo) e `dolares = reais / cotacao`. A saída real de `print(dolares)` é `50.0`, com o `.0`, porque a divisão sempre produz um decimal, mesmo quando a conta é exata."
      ],
      [
        "p",
        "O tipo muda o sentido do sinal de mais. Com números, `+` soma. Com textos, `+` cola um no outro: `\"10\" + \"5\"` dá `105`, saída real, e não 15, porque as aspas fazem de `\"10\"` um texto que só parece número. E misturar os dois tipos dá erro. Este é o resultado real de `\"Total: \" + total`, com `total` valendo 110:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\juntar.py\", line 2, in <module>\n    print(\"Total: \" + total)\n          ~~~~~~~~~~^~~~~~~\nTypeError: can only concatenate str (not \"int\") to str"
      ],
      [
        "p",
        "A última linha diz: \"só dá para concatenar (colar) texto com texto, não com número inteiro\". O jeito simples de mostrar um texto e um número juntos é separar por vírgula dentro do `print`: `print(\"Total:\", total)` mostra `Total: 110`, saída real, com um espaço posto pelo próprio `print`."
      ],
      [
        "h3",
        "Nomes: as regras e o que muda com uma letra"
      ],
      [
        "p",
        "Um nome de variável pode ter letras, números e o sublinhado `_`, mas não pode começar com número nem ter espaço. Para nomes de duas palavras, o costume do Python é o sublinhado: `taxa_mensal`. Com espaço, como em `taxa mensal = 2`, o Python para antes de rodar a primeira linha, com `SyntaxError: invalid syntax`, saída real."
      ],
      [
        "p",
        "Maiúsculas e minúsculas fazem dois nomes diferentes. Se o programa cria `total` e depois tenta mostrar `Total`, a saída real é esta:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\maiuscula.py\", line 2, in <module>\n    print(Total)\n          ^^^^^\nNameError: name 'Total' is not defined. Did you mean: 'total'?"
      ],
      [
        "p",
        "Repare no final da última linha: `Did you mean: 'total'?`, \"você quis dizer total?\". Desde a versão 3.10, o Python sugere o nome parecido quando acha um. É uma pista valiosa: quase sempre a sugestão é a causa. E, para ler programas, vale a regra de que bons nomes dizem o que guardam: `taxa_mensal` explica mais do que `t`. Quando o Claude usar nomes de uma letra num programa que você vai manter, peça nomes que digam o que é cada coisa."
      ],
      [
        "h3",
        "Variáveis num programa que conversa com a IA"
      ],
      [
        "p",
        "Um programa que fala com o Claude guarda tudo em variáveis também. O pedido, por exemplo, é um texto: `pedido = \"Resuma este contrato em 3 linhas\"`. Depois disso, `print(pedido)` mostra a frase, e `print(\"pedido\")` mostra só a palavra pedido; as duas saídas foram conferidas. No programa da aula 2.1, a variável `resposta` guarda o que o Claude devolveu, e a aula 2.7 mostra o que tem dentro dela. Entender que cada coisa tem um nome, e que o nome guarda o valor do momento, é o que permite ler esses programas sem medo."
      ],
      [
        "h3",
        "O Python Tutor: ver cada passo"
      ],
      [
        "p",
        "O Python Tutor é um site gratuito que roda um programa pequeno e desenha cada passo: uma seta mostra a linha que acabou de rodar e a próxima, e um quadro chamado Global frame mostra cada nome com o valor que ele guarda naquele momento. É a tabela de rastreio desenhada pelo próprio computador. O laboratório desta aula abre nele o programa do preço e do total, já carregado."
      ],
      [
        "p",
        "Quando não usar: o site só roda programas pequenos, sem internet e sem arquivos. As próprias páginas do autor discordam sobre o limite: uma fala em cerca de 100 passos, outra em até 1.000; este curso usa o número menor. E o site registra o código, os cliques e o endereço de internet de quem usa, e o autor pede que ninguém mande informação confidencial. Por isso, lá só entra código de exemplo, como os desta aula, nunca um programa com dado de cliente ou com uma {{chave-api|chave de API}}."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. Os programas desta aula são para ler, e o Python Tutor roda no {{navegador}}.",
          "**Esta variável é a mesma \"variável de ambiente\" das chaves?** Não. A variável de ambiente é guardada pelo Windows, fora do programa, e a aula 10.3 trata dela. A variável desta aula vive dentro do programa e some quando ele termina.",
          "**Posso dar qualquer nome?** Quase: letras, números e sublinhado, sem começar com número, sem espaço. Acentos funcionam no Python 3, mas o costume é escrever sem.",
          "**E se eu usar um nome que não existe?** O Python para com NameError, como na aula 2.1, e muitas vezes sugere o nome parecido.",
          "**Os valores ficam guardados depois que o programa termina?** Não. Para guardar, o programa precisa gravar num arquivo, como mostra a aula 2.7."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: etiqueta, não caixa",
          "blocos": [
            [
              "p",
              "A planilha ajuda a começar, mas a imagem mais fiel do Python é a de uma etiqueta presa a um valor. `b = a` não copia o valor para outra caixa: cola uma segunda etiqueta no mesmo valor. Com números e textos, isso não faz diferença visível. Com listas, que a aula 2.7 apresenta, faz: depois de `a = [100]`, `b = a` e `b.append(200)`, o `print(a)` mostra `[100, 200]`, saída real. As duas etiquetas apontam para a mesma lista."
            ],
            [
              "p",
              "Para perguntar o tipo de um valor, existe a {{funcao|função}} `type`. A saída real de `print(type(50.0), type(50), type(\"50\"))` é `<class 'float'> <class 'int'> <class 'str'>`: decimal, inteiro e texto."
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
          "pergunta": "Rastreie este programa linha por linha. O que você acha que aparece na tela?",
          "codigo": "preco = 100\ntotal = preco + 10\npreco = 500\nprint(total)",
          "linguagem": "python",
          "resposta": "Aparece `110`. Na linha 2, `total` recebeu o resultado da conta com o preço daquele momento, 100. A linha 3 mudou só o `preco`; o `total` não acompanha. Toque nos botões para ver as variações; cada saída foi tirada de uma execução real.",
          "vivo": [
            [
              "Mostrar o preço",
              "preco = 100\ntotal = preco + 10\npreco = 500\nprint(preco)",
              "500"
            ],
            [
              "Refazer a conta depois",
              "preco = 100\npreco = 500\ntotal = preco + 10\nprint(total)",
              "510"
            ],
            [
              "Mostrar com um rótulo",
              "preco = 100\ntotal = preco + 10\npreco = 500\nprint(\"Total:\", total)",
              "Total: 110"
            ],
            [
              "Voltar ao original",
              "preco = 100\ntotal = preco + 10\npreco = 500\nprint(total)",
              "110"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "Um conversor de moeda, com uma cotação de exemplo. O que você acha que aparece na tela, e com que cara o número aparece?",
          "codigo": "reais = 250\ncotacao = 5\ndolares = reais / cotacao\nprint(dolares)",
          "linguagem": "python",
          "resposta": "Aparece `50.0`. A conta é 250 dividido por 5, e a divisão com `/` sempre dá um número decimal em Python, mesmo exata; por isso o `.0`. Toque nos botões para trocar os valores.",
          "vivo": [
            [
              "Cotação 4",
              "reais = 250\ncotacao = 4\ndolares = reais / cotacao\nprint(dolares)",
              "62.5"
            ],
            [
              "300 reais",
              "reais = 300\ncotacao = 5\ndolares = reais / cotacao\nprint(dolares)",
              "60.0"
            ],
            [
              "Voltar ao original",
              "reais = 250\ncotacao = 5\ndolares = reais / cotacao\nprint(dolares)",
              "50.0"
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
          "p": "Rastreie: `meses = 12`, depois `meses = meses - 2`, depois `total = meses * 300`, e por fim `print(total)`. O que aparece?",
          "o": [
            [
              "3600, porque meses vale 12 desde a primeira linha",
              "Esse seria o valor se a linha 2 não existisse. Ela tirou 2 de meses antes da conta, e a conta usa o valor do momento."
            ],
            [
              "Um erro, porque meses aparece dos dois lados",
              "Usar o nome dos dois lados do = é comum: a direita é calculada primeiro, com o valor atual, e o resultado substitui o antigo."
            ],
            [
              "3000, porque meses já vale 10 quando a conta é feita",
              "Isso. Na linha 3, meses vale 10, e 10 vezes 300 dá 3000. A saída real é 3000."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude explicou o programa do preço e do total assim: \"Como o total depende do preço, ele é atualizado sozinho quando a linha 3 muda o preço para 500; por isso o programa mostra 510.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o total acompanha o preço, como numa planilha",
              "Em Python, o total guardou o resultado da conta, 110, e não a fórmula. A saída real é 110."
            ],
            [
              "Está errada: o total guardou 110 na linha 2 e continua 110",
              "Isso. A variável guarda o valor do momento em que a linha rodou. Para dar 510, a conta precisa ser refeita depois."
            ],
            [
              "Está errada: o programa para com erro, porque o preço mudou de valor",
              "Mudar o valor de um nome é normal em Python e não dá erro. O programa roda e mostra 110."
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
            "\"O = quer dizer que os dois lados são iguais.\"",
            "Em Python, o = guarda: calcula a direita e põe o resultado no nome da esquerda. Para comparar, existe o ==, da aula 2.4."
          ],
          [
            "\"Se eu mudar o preço, o total muda junto.\"",
            "Só se alguma linha refizer a conta depois. A variável guarda o resultado, não a fórmula."
          ],
          [
            "\"Total e total são o mesmo nome.\"",
            "São dois nomes diferentes. O Python dá NameError e, muitas vezes, sugere o nome certo com \"Did you mean\"."
          ],
          [
            "\"Número entre aspas continua sendo número.\"",
            "Entre aspas é texto: \"10\" + \"5\" dá 105. Para fazer conta, o número vai sem aspas."
          ],
          [
            "\"Posso colar meu programa de verdade no Python Tutor.\"",
            "O site registra o código e o endereço de quem usa. Só código de exemplo, nunca dado de cliente ou chave."
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
          "p": "O que acontece, por baixo, quando o Python roda `total = preco + 10`?",
          "r": [
            "Primeiro ele calcula o lado direito, com o valor que preco tem naquele momento.",
            "Depois guarda o resultado com o nome total.",
            "Se preco mudar depois, total não muda sozinho."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Como se rastreia um programa com variáveis?",
          "r": [
            "Indo linha por linha, de cima para baixo.",
            "Anotando numa tabela o valor de cada nome depois de cada linha.",
            "Em cada linha, só muda o nome que está à esquerda do =."
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
          "titulo": "O programa passo a passo no Python Tutor",
          "lugar": "No navegador, no PC ou no celular",
          "tempo": "5 minutos",
          "antes": "O Python Tutor roda o programa do preço e do total e desenha cada passo: é o rastreio feito pelo próprio computador. O botão abaixo abre o site com o programa já carregado, numa aba nova. Precisa de internet. O site registra o código, os cliques e o endereço de quem usa: lá, só código de exemplo como este. Sem internet, ou se o site estiver fora do ar, os passos abaixo descrevem o que cada tela mostra, e dá para fazer a aula só com eles. Testado no navegador do PC em 02/11/2026; no celular, a página é larga e pode pedir que você deite o aparelho, e não foi testada.",
          "link": [
            "Abrir no Python Tutor",
            "https://pythontutor.com/visualize.html#code=preco%20%3D%20100%0Atotal%20%3D%20preco%20%2B%2010%0Apreco%20%3D%20500%0Aprint%28total%29&mode=display&py=311&curInstr=0"
          ],
          "embed": "https://pythontutor.com/iframe-embed.html#code=preco%20%3D%20100%0Atotal%20%3D%20preco%20%2B%2010%0Apreco%20%3D%20500%0Aprint%28total%29&py=311&curInstr=0",
          "passos": [
            {
              "faz": "Toque em \"Abrir no Python Tutor\".",
              "espera": "Abre a página com as quatro linhas do programa. A seta vermelha, que marca a próxima linha a rodar, aponta a linha 1. Embaixo, \"Step 1 of 4\". O quadro Frames ainda está vazio: nada rodou."
            },
            {
              "faz": "Toque em Next uma vez.",
              "espera": "A linha 1 rodou. Em Frames aparece \"Global frame\" com `preco` valendo 100. Embaixo, \"Step 2 of 4\"."
            },
            {
              "faz": "Toque em Next de novo.",
              "espera": "A linha 2 rodou. Aparece `total` valendo 110, embaixo de `preco`, que continua 100. \"Step 3 of 4\"."
            },
            {
              "faz": "Toque em Next mais uma vez.",
              "espera": "A linha 3 rodou. `preco` mudou para 500, e `total` continua 110: o momento em que a planilha e o Python se separam. \"Step 4 of 4\"."
            },
            {
              "faz": "Toque em Next pela última vez.",
              "espera": "A linha 4 rodou. Em \"Print output\" aparece 110, e embaixo, \"Done running (4 steps)\"."
            },
            {
              "faz": "Toque em Prev uma vez.",
              "espera": "Você volta um passo no tempo: a seta vermelha volta a apontar a linha 4, que ainda vai rodar, o \"Print output\" fica vazio e aparece de novo \"Step 4 of 4\". `preco` continua 500, e `total`, 110."
            },
            {
              "faz": "Toque em Next mais uma vez.",
              "espera": "Você avança de novo, e o 110 reaparece em \"Print output\". Dá para ir e voltar quantas vezes quiser."
            }
          ],
          "naoTestado": "No celular, a página não foi testada: ela é larga e pode pedir que você deite o aparelho. No navegador do PC, os passos foram feitos de verdade em 02/11/2026.",
          "errado": "se a página abrir com o código num editor, sem a seta, toque no botão que fica logo abaixo do código para visualizar a execução. Se o site não abrir, siga os passos pelo texto: eles são o roteiro completo. Se quiser outro programa no site, use só código de exemplo."
        }
      ],
      [
        "fontes",
        [
          [
            "Uma introdução informal ao Python (o sinal de igual e o NameError), tutorial oficial",
            "https://docs.python.org/pt-br/3/tutorial/introduction.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Python Tutor",
            "https://pythontutor.com/",
            "comunidade",
            "02/11/2026"
          ],
          [
            "Python Tutor: instruções, recursos não suportados (cerca de 100 passos) e política de privacidade, documento do autor ligado na página inicial do site",
            "https://docs.google.com/document/d/13_Bc-l2FKMgwPx4dZb0sv7eMfYMHhRVgBRShha8kgbU/edit",
            "comunidade",
            "02/11/2026"
          ],
          [
            "Python Tutor para assistentes de IA: links com código, embed e o limite de 1.000 passos",
            "https://pythontutor.com/for-ai-assistants.html",
            "comunidade",
            "02/11/2026"
          ],
          [
            "CS50's Introduction to Programming with Python, semana 0 (funções e variáveis), Harvard",
            "https://cs50.harvard.edu/python/",
            "acadêmico",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Uma variável funciona como uma fórmula de planilha, que se recalcula quando os valores mudam",
          "Em Python, a variável guarda o resultado da conta no momento em que a linha roda. Mudar um valor depois não refaz a conta."
        ],
        [
          "O sinal de igual compara os dois lados da linha e diz se eles são mesmo iguais",
          "O = guarda o valor da direita no nome da esquerda. Quem compara é o ==."
        ],
        [
          "Uma variável guarda o valor do momento; rastrear é anotar esses valores linha a linha",
          "Isso. Nome, valor e ordem: a máquina por baixo."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Depois de `x = 5` e `x = x * 2`, quanto vale `x`?",
        "o": [
          [
            "Vale 10: a conta usa o 5, e o resultado substitui o valor antigo",
            "Isso. A direita é calculada com o valor atual, 5, e o resultado substitui o antigo."
          ],
          [
            "Vale 5: a linha 2 faz a conta, mas não guarda o resultado em x",
            "O valor antigo foi substituído pela linha 2: x passou a guardar 5 vezes 2."
          ],
          [
            "Dá erro, porque x aparece dos dois lados do sinal de igual",
            "É normal em Python: primeiro se calcula a direita, depois se guarda no nome."
          ]
        ],
        "c": 0
      },
      {
        "p": "Com `total` valendo 110, o que mostra `print(\"Total:\", total)`?",
        "o": [
          [
            "Total:, total",
            "O nome sem aspas é trocado pelo valor; só o texto entre aspas aparece como está."
          ],
          [
            "Total: 110",
            "Isso. O texto aparece como está, o nome vira o valor, e o print põe um espaço entre os dois."
          ],
          [
            "Total: total",
            "Sem aspas, total é um nome, e o print mostra o valor guardado nele, 110."
          ]
        ],
        "c": 1
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre = e ==?",
        "O = guarda: calcula o que está à direita e põe o resultado no nome da esquerda. O == compara: pergunta se os dois lados são iguais e responde True ou False. A aula 2.4 usa o == nas condições."
      ],
      [
        "Por que a divisão deu 50.0 e não 50?",
        "Porque em Python a divisão com / sempre produz um número decimal, mesmo quando a conta é exata. 50.0 e 50 valem o mesmo; só o tipo é diferente."
      ],
      [
        "O que é rastrear um programa?",
        "É ler o programa como o computador lê: linha por linha, anotando o valor de cada nome depois de cada linha. Com isso você descobre o que aparece na tela e em que linha um valor ficou errado."
      ]
    ]
  },
  "2-4": {
    "tempo": 25,
    "video": "a2-4",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você pediu ao Claude uma regra como \"frete grátis acima de 200 reais\" e quis saber se o {{codigo|código}} faz isso mesmo, inclusive para uma compra de exatamente 200. Esta aula ensina a ler uma {{condicao|condição}} e a prever qual caminho o {{programa}} segue.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Programas tomam decisões: se uma condição for verdadeira, fazem uma coisa; se não for, fazem outra. Toda regra de negócio vira uma condição: desconto por faixa de valor, multa quando o pagamento atrasa, frete grátis acima de um valor, aviso quando a resposta da IA vem vazia. Ler condições é conferir se a regra que está no código é a regra que você pediu."
      ],
      [
        "p",
        "E os erros de condição são dos mais perigosos, porque quase nunca aparecem como {{mensagem-de-erro}}. Eles aparecem como uma decisão errada: a compra de exatamente 200 reais pagando frete, a faixa de 10% que nunca é usada, a mensagem de \"aprovado\" que aparece para todo mundo. O programa {{rodar|roda}}, termina e entrega o resultado com cara de certo. Só quem lê a condição percebe."
      ],
      [
        "p",
        "Nesta aula você vai aprender a prever qual caminho um programa segue, olhando três coisas: a comparação (é maior, é maior ou igual, é igual?), a ordem das condições e o recuo, os espaços no começo da linha, que em {{python|Python}} dizem quais linhas pertencem a qual caminho. Tudo com saídas reais, tiradas do Python 3.12. Nada para {{instalar}} nem pagar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Uma condição é uma bifurcação na estrada com uma placa: \"compras de 200 reais ou mais, à esquerda, sem frete; as demais, à direita, com frete de 30\". O programa chega à bifurcação, lê a placa, compara com o valor que está levando e segue por um caminho só. Logo adiante, os dois caminhos voltam a se juntar, e o programa continua pela mesma estrada."
      ],
      [
        "quebra",
        "O motorista pode hesitar, voltar e tentar o outro lado; o programa decide em um instante e nunca volta para testar o caminho que não pegou. A placa do programa também é literal: \"200 ou mais\" e \"mais de 200\" são placas diferentes, e uma compra de exatamente 200 segue caminhos opostos em cada uma. E, numa estrada com várias saídas em sequência, o programa pega a primeira placa que serve, mesmo que uma mais adiante servisse melhor."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "if e else: dois caminhos"
      ],
      [
        "p",
        "Este é o programa do frete, linha por linha. O recuo, os quatro espaços no começo das linhas 3 e 5, faz parte do código:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código",
            "O que faz"
          ],
          "linhas": [
            [
              "1",
              "`total = 250`",
              "Guarda o valor da compra."
            ],
            [
              "2",
              "`if total >= 200:`",
              "Pergunta: o total é maior ou igual a 200? `if` quer dizer \"se\"."
            ],
            [
              "3",
              "`    frete = 0`",
              "Só roda se a resposta da linha 2 for sim."
            ],
            [
              "4",
              "`else:`",
              "\"Senão\": o caminho para quando a resposta for não."
            ],
            [
              "5",
              "`    frete = 30`",
              "Só roda se a resposta da linha 2 for não."
            ],
            [
              "6",
              "`print(total + frete)`",
              "Sem recuo: roda sempre, depois de qualquer um dos caminhos."
            ]
          ]
        }
      ],
      [
        "p",
        "Rastreie com `total = 250`. Na linha 2, 250 é maior ou igual a 200: sim. O programa entra no bloco do `if`, roda a linha 3 e guarda 0 em `frete`. O `else` e a linha 5 são pulados inteiros. Na linha 6, os caminhos se juntam, e a saída real é `250`. Com `total = 150`, a resposta da linha 2 é não: o programa pula a linha 3, entra no `else`, guarda 30, e a saída real é `180`."
      ],
      [
        "p",
        "Dois detalhes de escrita que o Python exige: os dois pontos no fim da linha do `if` e do `else`, que abrem o bloco, e o recuo das linhas de dentro. Sem os dois pontos, a saída real é `SyntaxError: expected ':'`, e nenhuma linha roda. O `else` é opcional: um `if` sozinho quer dizer \"se for verdade, faça isto; se não, siga em frente\"."
      ],
      [
        "h3",
        "Comparações: a pergunta que vira True ou False"
      ],
      [
        "p",
        "A pergunta da linha 2 é uma comparação, e toda comparação tem uma resposta de dois valores possíveis: `True`, verdadeiro, ou `False`, falso. Esse tipo de valor se chama {{booleano}}. Os sinais de comparação são estes:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Sinal",
            "Pergunta",
            "Exemplo",
            "Resposta"
          ],
          "linhas": [
            [
              "`>`",
              "É maior que?",
              "`200 > 200`",
              "`False`"
            ],
            [
              "`>=`",
              "É maior ou igual a?",
              "`200 >= 200`",
              "`True`"
            ],
            [
              "`<`",
              "É menor que?",
              "`150 < 200`",
              "`True`"
            ],
            [
              "`<=`",
              "É menor ou igual a?",
              "`200 <= 200`",
              "`True`"
            ],
            [
              "`==`",
              "É igual a?",
              "`\"sim\" == \"Sim\"`",
              "`False`"
            ],
            [
              "`!=`",
              "É diferente de?",
              "`\"sim\" != \"Sim\"`",
              "`True`"
            ]
          ]
        }
      ],
      [
        "p",
        "A diferença entre `>` e `>=` é a pergunta que mais importa nas regras de negócio. A saída real de `print(200 >= 200, 200 > 200, 199.90 >= 200)` é `True False False`. No programa do frete, trocar `>=` por `>` muda o caminho de uma compra de exatamente 200: com `>=`, a saída real é `200`, sem frete; com `>`, é `230`, com frete. Nenhum dos dois dá erro. Quando a regra disser \"acima de\", pergunte ao Claude, com essas palavras, o que acontece com o valor exato do limite."
      ],
      [
        "p",
        "Para perguntar se dois valores são iguais, o sinal é `==`, com dois iguais. Um só, `=`, é a {{atribuicao|atribuição}} da aula 2.3, que guarda. Se você escrever `if total = 200:`, o Python nem começa. Saída real:"
      ],
      [
        "saida",
        "  File \"C:\\Users\\SeuNome\\estudo\\igual.py\", line 2\n    if total = 200:\n       ^^^^^^^^^^^\nSyntaxError: invalid syntax. Maybe you meant '==' or ':=' instead of '='?"
      ],
      [
        "p",
        "A última linha até sugere: \"talvez você quisesse `==`\". E a comparação de textos é exata, letra por letra: com `resposta = \"sim\"`, a condição `resposta == \"Sim\"` é falsa, porque o S maiúsculo é outra letra, e um programa que testa assim responde \"Não confirmado\" para quem digitou \"sim\". Saída real."
      ],
      [
        "h3",
        "O recuo diz o que pertence a cada caminho"
      ],
      [
        "p",
        "Em Python, as linhas de um bloco são as que têm o mesmo {{recuo}} logo depois da linha com dois pontos. O costume é usar quatro espaços. O recuo não é enfeite: ele decide o que roda em cada caminho. Compare dois programas com `nota = 4` que só diferem no recuo da última linha:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Programa A",
            "Programa B"
          ],
          "linhas": [
            [
              "1",
              "`nota = 4`",
              "`nota = 4`"
            ],
            [
              "2",
              "`if nota >= 6:`",
              "`if nota >= 6:`"
            ],
            [
              "3",
              "`    print(\"Aprovado\")`",
              "`    print(\"Aprovado\")`"
            ],
            [
              "4",
              "`print(\"Fim\")`",
              "`    print(\"Fim\")`"
            ],
            [
              "Saída real",
              "`Fim`",
              "nada: nenhuma linha aparece"
            ]
          ]
        }
      ],
      [
        "p",
        "No programa A, `print(\"Fim\")` está fora do bloco e roda sempre. No B, ele está dentro do `if`, e como a nota 4 não passa na condição, nada aparece. Quatro espaços de diferença, nenhum erro, e o comportamento mudou. Com `nota = 7`, o programa A mostra `Aprovado` e depois `Fim`."
      ],
      [
        "p",
        "Esquecer o recuo de vez dá erro antes de rodar. Saída real de um `if` cuja linha de dentro ficou sem recuo:"
      ],
      [
        "saida",
        "  File \"C:\\Users\\SeuNome\\estudo\\semrecuo.py\", line 3\n    print(\"Aprovado\")\n    ^^^^^\nIndentationError: expected an indented block after 'if' statement on line 2"
      ],
      [
        "p",
        "\"Esperava um bloco com recuo depois do if da linha 2.\" Por que isso importa para você: quando o Claude disser \"movi o print para dentro do if\", ele mudou o recuo de uma linha, e isso muda quando ela roda. Nas outras linguagens, como o {{javascript|JavaScript}} da aula 2.10, os blocos são marcados com chaves; em Python, com o recuo."
      ],
      [
        "h3",
        "elif: várias faixas, e a primeira que serve ganha"
      ],
      [
        "p",
        "Quando há mais de dois caminhos, entra o `elif`, que quer dizer \"senão, se\". Este programa dá desconto por faixa:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código"
          ],
          "linhas": [
            [
              "1",
              "`valor = 1200`"
            ],
            [
              "2",
              "`if valor > 1000:`"
            ],
            [
              "3",
              "`    desconto = 0.10`"
            ],
            [
              "4",
              "`elif valor > 500:`"
            ],
            [
              "5",
              "`    desconto = 0.05`"
            ],
            [
              "6",
              "`else:`"
            ],
            [
              "7",
              "`    desconto = 0`"
            ],
            [
              "8",
              "`print(valor * (1 - desconto))`"
            ]
          ]
        }
      ],
      [
        "p",
        "O Python testa as condições de cima para baixo e roda **só o bloco da primeira que for verdadeira**; as outras nem são testadas. Com 1.200, a linha 2 já é verdadeira: 10% de desconto, saída real `1080.0`. Com 800, a linha 2 é falsa e a 4 é verdadeira: 5%, saída real `760.0`. Com 300, nenhuma é verdadeira, e vale o `else`: saída real `300`."
      ],
      [
        "p",
        "Agora a armadilha: troque a ordem, testando primeiro `valor > 500` e depois `valor > 1000`. Com 1.200, a primeira condição, `1200 > 500`, já é verdadeira, e o programa dá 5%. A faixa de 10% nunca mais é usada, porque todo valor acima de 1.000 também passa de 500. A saída real é `1140.0`, sem erro nenhum. Regra para ler faixas: a condição mais exigente vem primeiro."
      ],
      [
        "h3",
        "Juntando condições: and e or"
      ],
      [
        "p",
        "Às vezes a regra tem duas partes. `and` quer dizer \"e\": as duas precisam ser verdadeiras. `or` quer dizer \"ou\": basta uma. Com `valor = 800` e `cliente_novo = False`, a condição `valor > 500 and cliente_novo` é falsa, porque a segunda parte falha, e a saída real é `Sem brinde`; já `valor > 500 or cliente_novo` é verdadeira, e aparece `Frete grátis`. Com `cliente_novo = True`, a primeira vira verdadeira e a saída real é `Ganha brinde`."
      ],
      [
        "h3",
        "Uma condição no programa que fala com a IA"
      ],
      [
        "p",
        "O programa da aula 2.1 tem uma condição no fim: `if bloco.type == \"text\":`. A resposta do Claude chega em pedaços, e nem todo pedaço é texto para mostrar. A condição faz o programa imprimir só os pedaços do tipo texto e pular os outros. É o mesmo `if` desta aula, com `==` comparando um texto, aplicado a uma resposta de IA."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. Os programas são para ler, e as saídas foram tiradas de execuções reais.",
          "**Quantos elif posso ter?** Quantos a regra pedir. O `else` é opcional e, se existir, vem por último.",
          "**E se nenhuma condição for verdadeira e não houver else?** Nenhum bloco roda, e o programa segue para a próxima linha sem recuo.",
          "**Espaço ou Tab no recuo?** O padrão do Python é quatro espaços. Quem escreve é o Claude ou o editor; para você, o que importa é ver quais linhas estão mais para dentro.",
          "**Se duas condições forem verdadeiras, as duas rodam?** Numa sequência de if, elif e else, não: só a primeira verdadeira. Dois if separados, um embaixo do outro, são duas perguntas independentes, e os dois podem rodar."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o que o Python considera verdadeiro",
          "blocos": [
            [
              "p",
              "Uma condição não precisa ser uma comparação. `if resposta:` pergunta se `resposta` tem alguma coisa. Texto vazio, `\"\"`, e o número 0 contam como falso; qualquer texto não vazio, até `\" \"` ou `\"0\"`, e qualquer número diferente de zero contam como verdadeiro. Num teste real, com `resposta = \"\"`, o programa mostrou `Resposta vazia`, e com `parcelas = 0`, `Nenhuma parcela`. Os programas do Claude usam muito esse atalho para conferir se veio alguma resposta."
            ],
            [
              "p",
              "Existe ainda o `not`, que inverte: `not cliente_novo` é verdadeiro quando `cliente_novo` é falso. E a documentação oficial do Python lembra que as partes `elif` podem ser zero ou mais, e que o `else` é opcional."
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
          "pergunta": "Rastreie o programa do frete. O que você acha que aparece na tela?",
          "codigo": "total = 250\nif total >= 200:\n    frete = 0\nelse:\n    frete = 30\nprint(total + frete)",
          "linguagem": "python",
          "resposta": "Aparece `250`. Como 250 é maior ou igual a 200, o programa entra no `if`, o frete fica 0, e o `else` é pulado. Toque nos botões para mudar o valor e o sinal; cada saída foi tirada de uma execução real.",
          "vivo": [
            [
              "Compra de 150",
              "total = 150\nif total >= 200:\n    frete = 0\nelse:\n    frete = 30\nprint(total + frete)",
              "180"
            ],
            [
              "Compra de exatamente 200",
              "total = 200\nif total >= 200:\n    frete = 0\nelse:\n    frete = 30\nprint(total + frete)",
              "200"
            ],
            [
              "200 com o sinal >",
              "total = 200\nif total > 200:\n    frete = 0\nelse:\n    frete = 30\nprint(total + frete)",
              "230"
            ],
            [
              "Voltar ao original",
              "total = 250\nif total >= 200:\n    frete = 0\nelse:\n    frete = 30\nprint(total + frete)",
              "250"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "Repare no recuo de cada linha. Com a nota 4, o que você acha que aparece na tela?",
          "codigo": "nota = 4\nif nota >= 6:\n    print(\"Aprovado\")\nprint(\"Fim\")",
          "linguagem": "python",
          "resposta": "Aparece só `Fim`. A nota 4 não passa em `nota >= 6`, então a linha com recuo, `print(\"Aprovado\")`, é pulada; a última linha não tem recuo, fica fora do bloco e roda sempre. Se o `print(\"Fim\")` também tivesse recuo, não apareceria nada: a saída real fica vazia.",
          "vivo": [
            [
              "Nota 7",
              "nota = 7\nif nota >= 6:\n    print(\"Aprovado\")\nprint(\"Fim\")",
              "Aprovado\nFim"
            ],
            [
              "Voltar ao original",
              "nota = 4\nif nota >= 6:\n    print(\"Aprovado\")\nprint(\"Fim\")",
              "Fim"
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
          "p": "Um programa dá desconto por faixa. Ele testa primeiro `if valor > 500:` (5% de desconto) e depois `elif valor > 1000:` (10%). Para uma compra de 1.200, que desconto sai?",
          "o": [
            [
              "5%, porque só roda o bloco da primeira condição verdadeira, a de 500",
              "Isso. 1.200 já passa de 500, e o elif nem chega a ser testado. A saída real desse programa é 1140.0."
            ],
            [
              "10%, porque 1.200 passa de 1.000, que é a faixa maior de todas",
              "O Python não procura a melhor faixa: ele para na primeira condição verdadeira, e a de 500 vem antes."
            ],
            [
              "15%, porque as duas condições são verdadeiras ao mesmo tempo",
              "Numa sequência de if e elif, só um bloco roda. Os descontos não se somam."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude explicou: \"Com `if total >= 200:`, uma compra de exatamente 200 reais fica com frete grátis, e uma de 199,90 paga os 30 reais de frete.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: com o >=, a compra de 200 ainda paga frete",
              "O >= quer dizer \"maior ou igual\": 200 passa. Quem deixaria 200 de fora é o >."
            ],
            [
              "Está errada: 199,90 é arredondado e também fica sem frete",
              "O Python não arredonda numa comparação: 199.90 >= 200 é False, saída real, e a compra paga frete."
            ],
            [
              "Está certa: o >= inclui o 200, e 199,90 fica abaixo dele",
              "Isso. A saída real com 200 é 200, e com 199.90 é 229.9. Conferir também é reconhecer quando a resposta está certa."
            ]
          ],
          "c": 2
        }
      ],
      [
        "h2",
        "Coloque na ordem"
      ],
      [
        "parsons",
        {
          "p": "Um programa novo, que não apareceu acima: a análise de crédito. Pontuação de 700 ou mais é aprovada; de 500 a 699, vai para análise; abaixo de 500, é recusada; no fim, o programa mostra a decisão. Cuide da ordem dentro de cada etapa, de qual decisão fica em qual caminho e do recuo de cada linha.",
          "linhas": [
            {
              "t": "score = 650",
              "recuo": 0,
              "etapa": 0
            },
            {
              "t": "if score >= 700:",
              "recuo": 0,
              "etapa": 1
            },
            {
              "t": "decisao = \"Aprovado\"",
              "recuo": 1,
              "etapa": 1
            },
            {
              "t": "elif score >= 500:",
              "recuo": 0,
              "etapa": 1
            },
            {
              "t": "decisao = \"Em análise\"",
              "recuo": 1,
              "etapa": 1
            },
            {
              "t": "else:",
              "recuo": 0,
              "etapa": 1
            },
            {
              "t": "decisao = \"Recusado\"",
              "recuo": 1,
              "etapa": 1
            },
            {
              "t": "print(decisao)",
              "recuo": 0,
              "etapa": 2
            }
          ],
          "notas": [
            "Guarda a pontuação. Vem antes porque as condições usam score.",
            "A faixa mais exigente vem primeiro, com dois pontos para abrir o bloco.",
            "Com recuo, logo abaixo do if: só roda com 700 ou mais.",
            "Senão, se: só é testado quando a pontuação ficou abaixo de 700.",
            "Com recuo: roda com pontuação de 500 a 699, como os 650 daqui.",
            "Sem recuo, alinhado com o if: o caminho de quem não passou em nenhuma faixa.",
            "Com recuo: só roda abaixo de 500.",
            "Sem recuo: roda sempre, depois de qualquer caminho. A saída real é Em análise; com 800, Aprovado; com 499, Recusado."
          ],
          "etapas": [
            "Guardar a pontuação",
            "Escolher o caminho",
            "Mostrar a decisão"
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
            "\"Acima de 200 inclui o 200.\"",
            "Depende do sinal. Com `>`, 200 fica de fora; com `>=`, entra. Confira o limite e pergunte ao Claude o que acontece com o valor exato."
          ],
          [
            "\"Usei = para comparar.\"",
            "O = guarda; quem compara é o ==. Dentro de um if, o = dá SyntaxError, com a sugestão \"Maybe you meant '=='\"."
          ],
          [
            "\"O recuo é só para deixar bonito.\"",
            "Em Python, o recuo decide o que pertence a cada caminho. Uma linha a mais ou a menos para dentro muda o resultado sem dar erro."
          ],
          [
            "\"Se duas condições são verdadeiras, as duas rodam.\"",
            "Numa sequência de if, elif e else, só a primeira verdadeira roda. Por isso a ordem das faixas importa."
          ],
          [
            "\"sim e Sim são a mesma resposta.\"",
            "Para o ==, não: a comparação de textos é exata, letra por letra, com maiúsculas."
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
          "p": "Como o Python escolhe o caminho numa sequência de if, elif e else?",
          "r": [
            "Testa as condições de cima para baixo.",
            "Roda só o bloco da primeira condição verdadeira.",
            "Se nenhuma for verdadeira, roda o else, se houver."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Para que serve o recuo em Python?",
          "r": [
            "Diz quais linhas pertencem ao if, ao elif ou ao else.",
            "A linha sem recuo depois do bloco roda sempre.",
            "Recuo errado muda o sentido sem aviso, ou dá IndentationError."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Mais ferramentas de controle de fluxo: instruções if, tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/controlflow.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Tipos embutidos: comparações e valores verdadeiros, documentação oficial do Python",
            "https://docs.python.org/pt-br/3/builtins/stdtypes.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "CS50's Introduction to Programming with Python, semana 1 (condicionais), Harvard",
            "https://cs50.harvard.edu/python/",
            "acadêmico",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "O programa testa todas as condições, uma por uma, e escolhe a que dá o melhor resultado",
          "O Python não procura o melhor resultado: testa de cima para baixo e para na primeira condição verdadeira."
        ],
        [
          "O sinal decide, a primeira condição verdadeira ganha e o recuo marca cada caminho",
          "Isso. Sinal, ordem e recuo: as três coisas que você confere ao ler uma condição."
        ],
        [
          "O recuo só serve para organizar o código, e o Python o ignora na hora de rodar o programa",
          "O Python usa o recuo para saber o que pertence a cada caminho. Mudar o recuo muda o resultado."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O programa do frete foi escrito com `if total > 200:` no lugar de `if total >= 200:`. Com `total = 200`, o que ele mostra?",
        "o": [
          [
            "200: 200 > 200 é verdadeiro, e a compra fica sem frete",
            "200 não é maior que 200: a comparação > dá False."
          ],
          [
            "Um erro, porque o total é igual ao limite usado no if",
            "Comparar com o valor exato do limite é normal e não dá erro."
          ],
          [
            "230: 200 > 200 é falso, e o programa entra no else, com frete",
            "Isso. Com >, o limite fica de fora. A saída real é 230."
          ]
        ],
        "c": 2
      },
      {
        "p": "Num if, qual é a diferença entre uma linha com recuo logo abaixo e a linha sem recuo depois do bloco?",
        "o": [
          [
            "A de dentro só roda se a condição for verdadeira; a de fora, sempre",
            "Isso. O recuo marca o que pertence ao if."
          ],
          [
            "As duas rodam sempre; o recuo só deixa o código mais fácil de ler e conferir",
            "O recuo muda o comportamento: a linha de dentro só roda quando a condição é verdadeira."
          ],
          [
            "A sem recuo só roda quando a condição do if for falsa, como num else",
            "Para rodar só quando é falsa, a linha precisaria estar dentro de um else. Sem recuo, ela roda sempre."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre > e >=?",
        "O > pergunta \"é maior que?\", e o valor exato do limite fica de fora: 200 > 200 é False. O >= pergunta \"é maior ou igual?\", e o limite entra: 200 >= 200 é True. Em regras de negócio, essa diferença decide o caminho de quem está exatamente no limite."
      ],
      [
        "Por que a ordem dos elif importa?",
        "Porque o Python para na primeira condição verdadeira. Se a faixa mais larga vier antes, como valor > 500, ela pega também os valores que deveriam cair na faixa mais exigente, como valor > 1000. Leia faixas da mais exigente para a menos exigente."
      ],
      [
        "O que é um booleano?",
        "É o tipo de valor que só tem duas possibilidades: True, verdadeiro, e False, falso. Toda comparação, como total >= 200, produz um booleano, e é ele que o if usa para escolher o caminho."
      ]
    ]
  },
  "2-5": {
    "tempo": 30,
    "video": "a2-5",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você pediu ao Claude para mandar três perguntas à IA, uma de cada vez, e recebeu um {{programa}} com uma linha `for` que você não sabia quantas vezes {{rodar|rodava}}. Esta aula ensina a prever quantas vezes um {{laco|laço}} gira, o que muda a cada volta e como reconhecer o laço que nunca para.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Repetir é onde o programa ganha do trabalho manual. Somar as 36 parcelas de um contrato, conferir 300 linhas de uma planilha, mandar dez perguntas ao Claude, tentar de novo até a conexão voltar: tudo isso é um laço, um bloco de {{codigo|código}} que se repete. Você escreve o passo uma vez, e o computador o executa quantas vezes for preciso, sem cansar e sem pular nenhuma."
      ],
      [
        "p",
        "Ler um laço é responder duas perguntas: quantas vezes ele roda e o que muda a cada volta. Errar a primeira dá uma parcela a menos, ou a mais, num cálculo. Errar a segunda dá o total que zera a cada volta. E há um terceiro risco: o laço que nunca termina. Num programa comum, ele trava o {{terminal}}. Num programa que chama a IA a cada volta, ele pode gastar dinheiro a cada volta, porque cada chamada é cobrada."
      ],
      [
        "p",
        "Isso importa mais do que parece para quem vai usar agentes. Um {{agente}} é, por dentro, um laço: reunir contexto, agir, verificar o resultado e repetir até terminar, o {{ciclo-do-agente|ciclo do agente}} que o módulo 12 detalha. Entender o laço pequeno desta aula é o primeiro passo para entender por que um agente às vezes \"fica rodando\"."
      ],
      [
        "p",
        "Nada para {{instalar}} nem pagar. As saídas foram tiradas de execuções reais, no {{python|Python}} 3.12, e no fim da aula um simulador mostra o laço girando, volta por volta."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Um laço é a esteira do caixa do supermercado. Os itens passam um de cada vez, e com cada um o caixa faz o mesmo gesto: passa no leitor e soma ao total. Ele não precisa saber de antemão quantos itens são; faz o gesto até a esteira esvaziar e, aí, fecha a conta. O `for` do Python é isso: uma volta para cada item de uma lista. Há também o caixa que trabalha com uma regra em vez de uma esteira, \"continue enquanto o cliente ainda tiver crédito\": é o `while`, que repete enquanto uma condição for verdadeira."
      ],
      [
        "quebra",
        "O caixa percebe quando a esteira travou, estranha, chama alguém. O programa não percebe nada: se a regra do `while` nunca deixar de ser verdadeira, ele gira para sempre, sem cansar e sem avisar. E o caixa pode pular um item de vez em quando; o programa faz exatamente o mesmo bloco em toda volta, com o valor daquele item."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "for: uma volta para cada item da lista"
      ],
      [
        "p",
        "Este programa manda três pedidos, um por volta. A primeira linha cria uma {{lista}}, um valor que guarda vários itens em ordem, entre colchetes e separados por vírgula (a aula 2.7 detalha):"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código",
            "O que faz"
          ],
          "linhas": [
            [
              "1",
              "`pedidos = [\"Resuma o contrato\", \"Traduza o e-mail\", \"Liste os riscos\"]`",
              "Guarda a lista com três pedidos."
            ],
            [
              "2",
              "`for pedido in pedidos:`",
              "\"Para cada pedido na lista\": a cada volta, `pedido` recebe o próximo item."
            ],
            [
              "3",
              "`    print(\"Enviando:\", pedido)`",
              "Com recuo: é o bloco que se repete, uma vez por item."
            ],
            [
              "4",
              "`print(\"Fim\")`",
              "Sem recuo: roda uma vez só, depois da última volta."
            ]
          ]
        }
      ],
      [
        "p",
        "Saída real:"
      ],
      [
        "saida",
        "Enviando: Resuma o contrato\nEnviando: Traduza o e-mail\nEnviando: Liste os riscos\nFim"
      ],
      [
        "p",
        "Três itens, três {{iteracao|voltas}}. Na primeira volta, `pedido` vale \"Resuma o contrato\"; na segunda, \"Traduza o e-mail\"; na terceira, \"Liste os riscos\". Depois da última, o laço acaba e o programa segue para a linha sem recuo. A regra de contagem do `for` sobre uma lista é simples: uma volta por item. Com quatro pedidos na lista, saem quatro linhas \"Enviando\"; com a lista vazia, `[]`, o bloco não roda nenhuma vez, e a saída real é só `Fim`."
      ],
      [
        "p",
        "O recuo decide o que repete, como decidia o que pertencia ao `if` na aula 2.4. Se o `print(\"Fim\")` também tiver recuo, ele entra no bloco e aparece três vezes, uma depois de cada pedido; saída real conferida. Quando o Claude disser \"pus o aviso dentro do laço\", isso quer dizer que o aviso vai se repetir."
      ],
      [
        "h3",
        "O acumulador: o total que cresce a cada volta"
      ],
      [
        "p",
        "O uso mais comum de um laço é somar. Este programa soma três parcelas. Rastreie volta por volta:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Momento",
            "parcela",
            "total depois"
          ],
          "linhas": [
            [
              "Antes do laço (`total = 0`)",
              "ainda não existe",
              "0"
            ],
            [
              "Volta 1",
              "300",
              "300"
            ],
            [
              "Volta 2",
              "250",
              "550"
            ],
            [
              "Volta 3",
              "450",
              "1000"
            ],
            [
              "Depois do laço (`print(total)`)",
              "450, o último item",
              "1000, que aparece na tela"
            ]
          ]
        }
      ],
      [
        "p",
        "O código do bloco é uma linha só, `total = total + parcela`, a mesma {{atribuicao|atribuição}} da aula 2.3: pega o total de agora, soma a parcela desta volta e guarda de novo em `total`. Essa {{variavel-python|variável}} que cresce a cada volta se chama {{acumulador}}. A saída real é `1000`. Repare que, depois do laço, `parcela` continua valendo 450, o último item."
      ],
      [
        "p",
        "Dois erros de leitura que esse programa ensina. Se o `print(total)` tiver recuo, ele roda em toda volta e mostra os totais parciais: `300`, `550` e `1000`, saída real. E se a linha `total = 0` estiver dentro do laço, o total é zerado no começo de cada volta, e o programa mostra `450`, só a última parcela, saída real e sem erro nenhum. É o bug silencioso da aula 2.3, agora girando."
      ],
      [
        "h3",
        "range: repetir um número de vezes"
      ],
      [
        "p",
        "Quando não há lista, mas um número de repetições, o Python usa o `range`. `for mes in range(1, 4):` faz `mes` valer 1, depois 2, depois 3, e a saída real de `print(\"Mês\", mes)` dentro dele é `Mês 1`, `Mês 2` e `Mês 3`. Três voltas, não quatro: o número de parada nunca entra. A documentação oficial diz isso com todas as letras, e é o tropeço mais comum com `range`."
      ],
      [
        "p",
        "A regra de contagem: `range(a, b)` dá `b - a` voltas. `range(1, 13)` dá 12 voltas, de 1 a 12, conferido. E `range(3)`, com um número só, começa do zero: a saída real é `0`, `1` e `2`. Por isso, num programa que conta meses de 1 a 12, procure `range(1, 13)`; se aparecer `range(1, 12)`, falta dezembro."
      ],
      [
        "h3",
        "while: repetir enquanto a condição for verdadeira"
      ],
      [
        "p",
        "O `while` (\"enquanto\") repete o bloco enquanto uma condição, como as da aula 2.4, for verdadeira. Antes de cada volta, ele testa a condição de novo. Este programa tenta três vezes:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código"
          ],
          "linhas": [
            [
              "1",
              "`tentativas = 0`"
            ],
            [
              "2",
              "`while tentativas < 3:`"
            ],
            [
              "3",
              "`    tentativas = tentativas + 1`"
            ],
            [
              "4",
              "`    print(\"Tentativa\", tentativas)`"
            ],
            [
              "5",
              "`print(\"Parei\")`"
            ]
          ]
        }
      ],
      [
        "p",
        "Rastreie: antes da primeira volta, `tentativas` vale 0, e 0 < 3 é verdadeiro. Na volta 1, ela vira 1 e aparece \"Tentativa 1\". Volta 2: vira 2. Volta 3: vira 3. No teste seguinte, 3 < 3 é falso, e o laço termina. Saída real: `Tentativa 1`, `Tentativa 2`, `Tentativa 3` e `Parei`. A linha 3 é a que faz o laço terminar um dia: ela faz subir o {{contador}}, `tentativas`, que se aproxima do limite a cada volta."
      ],
      [
        "p",
        "Trocar `<` por `<=` dá uma volta a mais: a saída real vai até `Tentativa 4`. E, se `tentativas` já começar valendo 5, a condição é falsa logo no primeiro teste, o bloco não roda nenhuma vez, e a saída real é só `Parei`."
      ],
      [
        "p",
        "O `while` brilha quando você não sabe quantas voltas vão ser. Quantos meses um saldo de 1.000 reais leva para dobrar, a 10% ao mês? O programa `while saldo < 2000:` multiplica o saldo por 1,1 e soma um mês a cada volta. A saída real é `8`: depois de 7 meses o saldo é 1.948,72, ainda abaixo de 2.000, e no oitavo chega a 2.143,59. A 20% ao mês, a saída real é `4`. Ninguém escreveu esses números no código: o laço descobriu girando."
      ],
      [
        "h3",
        "O laço que nunca termina"
      ],
      [
        "p",
        "Agora tire a linha 3 do programa das tentativas, a que soma 1. A condição `tentativas < 3` testa uma variável que ninguém muda; ela continua 0 para sempre, a condição nunca fica falsa, e o programa repete \"Tentativa 0\" sem parar. Isso é o {{laco-infinito|laço infinito}}. Num teste real, gravando num arquivo, saíram mais de 3 milhões de linhas em cerca de 6 segundos; na tela, é mais lento, mas não para."
      ],
      [
        "p",
        "Para parar um programa assim no terminal, aperte Ctrl+C. O Python interrompe onde estiver e mostra um {{traceback|Traceback}} que termina em {{keyboardinterrupt|KeyboardInterrupt}}, \"interrupção pelo teclado\". Este é o fim da saída real, depois do Ctrl+C:"
      ],
      [
        "saida",
        "Tentativa 0\nTentativa 0\nTentativa 0\nTraceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\infinito.py\", line 3, in <module>\n    print(\"Tentativa\", tentativas)\nKeyboardInterrupt"
      ],
      [
        "p",
        "A linha citada no Traceback, aqui a 3, é só onde o programa estava no instante do Ctrl+C; pode ser a 2 ou a 3. Não é erro do Python: foi você quem parou. No {{claude-code|Claude Code}}, a tecla para interromper o Claude é Esc, segundo o guia oficial de terminal."
      ],
      [
        "p",
        "Como reconhecer o risco lendo: dentro de todo `while`, procure a linha que muda o que a condição testa. Se ela não existir, ou se mudar na direção errada, o laço não termina. E desconfie em dobro de laços que chamam a IA ou mandam mensagens: cada volta é uma chamada, e cada chamada pode custar."
      ],
      [
        "h3",
        "break: sair antes do fim"
      ],
      [
        "p",
        "Às vezes o laço deve parar assim que achar o que procura. A palavra `break` sai do laço na hora, mesmo que ainda haja itens. Num teste com a lista de respostas `[\"\", \"\", \"Contrato resumido\", \"Outra resposta\"]`, um `for` que para na primeira resposta não vazia mostra `Primeira resposta: Contrato resumido` e depois `Fim`, saída real: a quarta resposta nem é olhada. É comum em programas que tentam várias vezes e param no primeiro sucesso."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. Os programas são para ler, e o simulador roda no próprio {{site}}.",
          "**Quando usar for e quando usar while?** O `for` quando há uma lista ou um número de voltas conhecido. O `while` quando o fim depende de uma condição, como \"até o saldo dobrar\".",
          "**O laço infinito estraga o PC?** Não. Ele ocupa o processador e enche a tela até você apertar Ctrl+C. O risco real é quando cada volta faz algo que custa ou que fica feito, como chamar uma {{api|API}} ou mandar uma mensagem.",
          "**Quantas voltas um laço aguenta?** Milhões, num programa simples. O limite prático é o tempo e o que cada volta faz.",
          "**Um laço pode ficar dentro de outro?** Pode, e as voltas se multiplicam: 3 clientes com 4 parcelas cada dão 12 execuções do bloco de dentro, número conferido num teste real."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o laço do agente",
          "blocos": [
            [
              "p",
              "O Claude Code, quando trabalha numa tarefa, faz um laço parecido com o `while`: enquanto a tarefa não estiver pronta, ele lê, age e confere. A condição de parada é ele julgar que terminou, ou você interromper. É por isso que um pedido mal definido pode render muitas voltas e muito consumo: a condição de \"pronto\" estava vaga. A aula 6.1 ensina a escrever o \"pronto quando\", e o módulo 12 mostra o ciclo por dentro."
            ],
            [
              "p",
              "No Python Tutor, o site da aula 2.3, laços curtos funcionam bem, mas o autor avisa que um laço infinito pode derrubar a execução sem mostrar os passos. Para ver o laço girando com segurança, use o simulador desta aula."
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
          "pergunta": "Quantas vezes aparece \"Enviando\", e quantas vezes aparece \"Fim\"?",
          "codigo": "pedidos = [\"Resuma o contrato\", \"Traduza o e-mail\", \"Liste os riscos\"]\nfor pedido in pedidos:\n    print(\"Enviando:\", pedido)\nprint(\"Fim\")",
          "linguagem": "python",
          "resposta": "\"Enviando\" aparece três vezes, uma por item da lista, e \"Fim\" aparece uma vez só, porque está sem recuo, fora do laço. Toque nos botões para mudar a lista e o recuo; cada saída foi tirada de uma execução real.",
          "vivo": [
            [
              "Quatro pedidos",
              "pedidos = [\"Resuma o contrato\", \"Traduza o e-mail\", \"Liste os riscos\", \"Revise a proposta\"]\nfor pedido in pedidos:\n    print(\"Enviando:\", pedido)\nprint(\"Fim\")",
              "Enviando: Resuma o contrato\nEnviando: Traduza o e-mail\nEnviando: Liste os riscos\nEnviando: Revise a proposta\nFim"
            ],
            [
              "Fim com recuo",
              "pedidos = [\"Resuma o contrato\", \"Traduza o e-mail\", \"Liste os riscos\"]\nfor pedido in pedidos:\n    print(\"Enviando:\", pedido)\n    print(\"Fim\")",
              "Enviando: Resuma o contrato\nFim\nEnviando: Traduza o e-mail\nFim\nEnviando: Liste os riscos\nFim"
            ],
            [
              "Lista vazia",
              "pedidos = []\nfor pedido in pedidos:\n    print(\"Enviando:\", pedido)\nprint(\"Fim\")",
              "Fim"
            ],
            [
              "Voltar ao original",
              "pedidos = [\"Resuma o contrato\", \"Traduza o e-mail\", \"Liste os riscos\"]\nfor pedido in pedidos:\n    print(\"Enviando:\", pedido)\nprint(\"Fim\")",
              "Enviando: Resuma o contrato\nEnviando: Traduza o e-mail\nEnviando: Liste os riscos\nFim"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "Rastreie volta por volta. O que você acha que aparece na tela?",
          "codigo": "parcelas = [300, 250, 450]\ntotal = 0\nfor parcela in parcelas:\n    total = total + parcela\nprint(total)",
          "linguagem": "python",
          "resposta": "Aparece `1000`: o total começa em 0 e recebe 300, depois 250, depois 450. Só o resultado final aparece, porque o `print` está fora do laço. Toque nos botões para ver o que muda com o recuo de cada linha.",
          "vivo": [
            [
              "print dentro do laço",
              "parcelas = [300, 250, 450]\ntotal = 0\nfor parcela in parcelas:\n    total = total + parcela\n    print(total)",
              "300\n550\n1000"
            ],
            [
              "total = 0 dentro do laço",
              "parcelas = [300, 250, 450]\nfor parcela in parcelas:\n    total = 0\n    total = total + parcela\nprint(total)",
              "450"
            ],
            [
              "Voltar ao original",
              "parcelas = [300, 250, 450]\ntotal = 0\nfor parcela in parcelas:\n    total = total + parcela\nprint(total)",
              "1000"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "Um saldo de 1.000 reais rende 10% ao mês. Quantos meses o laço conta até o saldo passar de 2.000?",
          "codigo": "saldo = 1000\nmeses = 0\nwhile saldo < 2000:\n    saldo = saldo * 1.1\n    meses = meses + 1\nprint(meses)",
          "linguagem": "python",
          "resposta": "Aparece `8`. Depois de 7 meses o saldo é 1.948,72, ainda abaixo de 2.000, e o laço dá mais uma volta; no oitavo mês chega a 2.143,59, a condição fica falsa e o laço para. Ninguém escreveu o 8 no código: o laço descobriu.",
          "vivo": [
            [
              "20% ao mês",
              "saldo = 1000\nmeses = 0\nwhile saldo < 2000:\n    saldo = saldo * 1.2\n    meses = meses + 1\nprint(meses)",
              "4"
            ],
            [
              "Mostrar cada mês",
              "saldo = 1000\nmeses = 0\nwhile saldo < 2000:\n    saldo = saldo * 1.1\n    meses = meses + 1\n    print(meses, round(saldo, 2))",
              "1 1100.0\n2 1210.0\n3 1331.0\n4 1464.1\n5 1610.51\n6 1771.56\n7 1948.72\n8 2143.59"
            ],
            [
              "Voltar ao original",
              "saldo = 1000\nmeses = 0\nwhile saldo < 2000:\n    saldo = saldo * 1.1\n    meses = meses + 1\nprint(meses)",
              "8"
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
          "p": "Um programa tem `for mes in range(1, 13):` e, dentro do laço, uma linha que mostra o mês. Quantas linhas aparecem?",
          "o": [
            [
              "13, uma para cada número de 1 a 13, contando os dois extremos",
              "O número de parada nunca entra no range: o último mês é o 12."
            ],
            [
              "12, de 1 a 12, porque o número de parada, 13, não entra",
              "Isso. range(a, b) dá b menos a voltas: 13 menos 1, doze. Conferido num teste real."
            ],
            [
              "11, porque o range pula o primeiro e também o último",
              "O primeiro número entra; só o de parada fica de fora. São 12 voltas."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O programa tem três linhas: `tentativas = 0`, depois `while tentativas < 3:` e, com recuo, `print(\"Tentativa\", tentativas)`. O Claude explicou: \"Este laço roda três vezes e mostra Tentativa 0, Tentativa 1 e Tentativa 2.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o while conta de 0 a 2 sozinho, uma vez por volta",
              "O while não conta nada sozinho: só repete enquanto a condição for verdadeira. Quem conta é uma linha que soma 1, e ela não está lá."
            ],
            [
              "Está errada: são quatro voltas, porque o 3 também entra no laço",
              "O < deixa o 3 de fora. Mas o problema é outro: tentativas nunca chega a 3."
            ],
            [
              "Está errada: nada muda tentativas, e o laço nunca termina",
              "Isso. tentativas fica 0 para sempre, e o programa repete \"Tentativa 0\" até alguém apertar Ctrl+C."
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
            "\"range(1, 4) vai de 1 a 4.\"",
            "Vai de 1 a 3. O número de parada nunca entra: range(a, b) dá b menos a voltas."
          ],
          [
            "\"O while para sozinho depois de um tempo.\"",
            "Só para quando a condição fica falsa. Se nada muda o que ela testa, ele gira até o Ctrl+C."
          ],
          [
            "\"Pus total = 0 dentro do laço e o total saiu errado.\"",
            "Dentro do laço, o total é zerado a cada volta e sobra só a última parcela. O ponto de partida vem antes do laço."
          ],
          [
            "\"A linha logo depois do for roda a cada volta.\"",
            "Só as linhas com recuo repetem. A primeira linha sem recuo roda uma vez, depois da última volta."
          ],
          [
            "\"Um laço com chamadas à IA custa como uma chamada só.\"",
            "Cada volta faz uma chamada, e cada chamada é cobrada. Leia a condição de parada antes de rodar."
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
          "p": "Como saber quantas vezes um for roda?",
          "r": [
            "Num for sobre uma lista, uma volta por item.",
            "Com range(a, b), são b menos a voltas: o b não entra.",
            "Só as linhas com recuo repetem; a primeira linha sem recuo roda uma vez."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que um while pode nunca terminar, e como parar o programa?",
          "r": [
            "Ele repete enquanto a condição for verdadeira.",
            "Se nenhuma linha do bloco muda o que a condição testa, ela nunca fica falsa.",
            "No terminal, Ctrl+C interrompe o programa; no Claude Code, Esc interrompe o Claude."
          ]
        }
      ],
      [
        "h2",
        "Simulador"
      ],
      [
        "simulador",
        {
          "id": "repeticao",
          "titulo": "O laço girando"
        }
      ],
      [
        "fontes",
        [
          [
            "Mais ferramentas de controle de fluxo: for, range e break, tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/controlflow.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "CS50's Introduction to Programming with Python, semana 2 (laços), Harvard",
            "https://cs50.harvard.edu/python/",
            "acadêmico",
            "02/11/2026"
          ],
          [
            "Guia de terminal para novos usuários, Claude Code (Esc interrompe o Claude)",
            "https://code.claude.com/docs/pt/terminal-guide",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Python Tutor: instruções e recursos não suportados (laço infinito), documento do autor ligado na página inicial do site",
            "https://docs.google.com/document/d/13_Bc-l2FKMgwPx4dZb0sv7eMfYMHhRVgBRShha8kgbU/edit",
            "comunidade",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "for roda uma vez por item, while enquanto a condição valer; só o que tem recuo repete",
          "Isso. Contar as voltas, ver o que muda em cada uma e achar a linha que faz o laço terminar."
        ],
        [
          "Um laço roda até o computador perceber que já fez o suficiente e então para sozinho",
          "O computador não percebe nada: o for para quando a lista acaba, e o while quando a condição fica falsa. Sem isso, gira para sempre."
        ],
        [
          "O for e o while são iguais, e escolher entre os dois é só uma questão de estilo pessoal",
          "O for percorre uma lista ou um range; o while depende de uma condição. Cada um serve a um tipo de repetição."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Com `parcelas = [300, 250, 450]`, quantas vezes roda o bloco de `for parcela in parcelas:`?",
        "o": [
          [
            "Uma vez só, recebendo a lista inteira de uma vez",
            "O for entrega um item por volta, não a lista inteira de uma vez."
          ],
          [
            "Quatro vezes, contando a volta que fecha o laço",
            "Não existe volta extra: depois do último item, o laço simplesmente acaba."
          ],
          [
            "Três vezes, uma para cada parcela da lista, em ordem",
            "Isso. Uma volta por item da lista."
          ]
        ],
        "c": 2
      },
      {
        "p": "Num `while`, o que faz o laço terminar?",
        "o": [
          [
            "A condição ficar falsa, graças a uma linha do bloco",
            "Isso. Sem essa linha, o laço é infinito."
          ],
          [
            "O Python perceber que o laço já rodou vezes demais e parar",
            "O Python não tem esse limite: um while com condição sempre verdadeira gira até o Ctrl+C."
          ],
          [
            "Chegar ao fim do arquivo, que encerra todos os laços abertos",
            "O fim do arquivo não encerra um while: o bloco se repete enquanto a condição for verdadeira."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Por que range(1, 4) não inclui o 4?",
        "Porque o range para antes do número de parada: range(1, 4) gera 1, 2 e 3. A vantagem é que a conta de voltas fica fácil: b menos a. Para incluir o 4, seria range(1, 5)."
      ],
      [
        "O que é um acumulador?",
        "É uma variável que começa antes do laço, em geral com 0, e recebe um valor a mais a cada volta, como total = total + parcela. No fim do laço, ela guarda a soma de tudo."
      ],
      [
        "Meu programa não para. O que faço?",
        "No terminal, aperte Ctrl+C: o Python interrompe e mostra KeyboardInterrupt. Depois, leia o while e procure a linha que deveria mudar o que a condição testa; quase sempre ela está faltando ou fora do recuo."
      ]
    ]
  },
  "2-6": {
    "tempo": 28,
    "video": "a2-6",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você viu no {{codigo|código}} do Claude uma linha que começa com `cliente.messages.create(` e continua por várias linhas cheias de nomes com sinal de igual, e não soube o que entrava nem o que saía dali. Esta aula ensina a ler uma {{funcao|função}}: o que entra, o que sai e o que a {{assinatura}} dela promete.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Uma função é um grupo de passos com um nome. Em vez de repetir a conta do reajuste em dez lugares do {{programa}}, alguém escreve a conta uma vez, dá a ela o nome `reajustar` e depois só chama esse nome, passando os valores da vez. Quase todo programa que o Claude escreve é um punhado de funções chamando umas às outras."
      ],
      [
        "p",
        "E você já usa funções sem saber: o `print` das aulas anteriores é uma função. As {{biblioteca|bibliotecas}} do módulo 4 são, no fundo, coleções de funções prontas, e falar com o Claude por um programa, na aula 10.4, é chamar uma função do {{sdk|SDK}} da Anthropic. Ler funções é o que permite ler a {{documentacao|documentação}} de uma biblioteca e conferir o código que usa essa biblioteca."
      ],
      [
        "p",
        "Para quem só lê, três perguntas resolvem quase tudo: o que entra na função, o que sai dela e o que ela faz no meio. Os erros mais comuns, como passar os valores na ordem errada, esquecer um valor ou mostrar o resultado em vez de devolvê-lo, aparecem quando uma dessas três respostas não bate com o que você esperava. Alguns dão {{mensagem-de-erro}}; outros dão um número errado, em silêncio."
      ],
      [
        "p",
        "Nada para {{instalar}} nem pagar. As saídas desta aula foram tiradas de execuções reais, no {{python|Python}} 3.12, menos a chamada ao Claude, que precisa de uma {{chave-api|chave de API}} e {{rodar|roda}} de verdade na aula 10.4."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Uma função do Python é como uma função do Excel. Quando você escreve `=PGTO(taxa; nper; vp)` numa célula, você não vê a conta das parcelas: você põe os valores na ordem que a função pede, e ela devolve um número, que aparece na célula. Em Python é igual: `reajustar(2000, 0.05)` recebe os valores entre parênteses, faz a conta lá dentro e devolve o resultado para quem chamou. O nome diz o que ela faz, os parênteses levam o que entra, e o resultado é o que sai."
      ],
      [
        "quebra",
        "A função do Excel só devolve um valor para a célula. A do Python pode, além disso, fazer coisas pelo caminho: mostrar texto na tela, criar um arquivo, mandar uma mensagem, chamar a IA. E pode não devolver nada. Outra diferença: no Excel você usa as funções que já existem; em Python, criar a sua é uma linha com `def`, e é o que o Claude faz o tempo todo. Por fim, o Excel em português separa os valores com ponto e vírgula; o Python, com vírgula."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Definir e chamar"
      ],
      [
        "p",
        "Este é um programa com uma função que reajusta um valor por uma taxa:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código",
            "O que faz"
          ],
          "linhas": [
            [
              "1",
              "`def reajustar(valor, taxa):`",
              "Define uma função chamada `reajustar`, que recebe dois valores. `def` vem de *define*."
            ],
            [
              "2",
              "`    novo = valor * (1 + taxa)`",
              "Com recuo: faz parte da função. Faz a conta com os valores recebidos."
            ],
            [
              "3",
              "`    return novo`",
              "Devolve o resultado para quem chamou a função."
            ],
            [
              "5",
              "`aluguel = reajustar(2000, 0.05)`",
              "Chama a função com 2000 e 0.05 e guarda o que ela devolver em `aluguel`."
            ],
            [
              "6",
              "`print(aluguel)`",
              "Mostra o resultado."
            ]
          ]
        }
      ],
      [
        "p",
        "A saída real é `2100.0`. Agora a ordem em que as coisas acontecem, que é o que confunde. As linhas de 1 a 3 **não fazem conta nenhuma** quando o programa passa por elas: só ensinam ao Python a receita, com o nome `reajustar`. Um arquivo só com essas três linhas roda e não mostra nada, saída real conferida. A conta acontece na linha 5, quando a função é **chamada**: o Python pula para dentro dela com `valor` valendo 2000 e `taxa` valendo 0.05, roda as linhas 2 e 3, e o `return` leva o 2100.0 de volta para a linha 5, onde ele é guardado em `aluguel`."
      ],
      [
        "p",
        "O ganho está em chamar de novo. `reajustar(1500, 0.05)` dá `1575.0`, saída real, com a mesma receita e outros valores. Se a regra do reajuste mudar, muda num lugar só. Por isso o Claude organiza programas em funções, e por isso, quando ele diz \"corrigi a função reajustar\", a correção vale para todo lugar que a chama."
      ],
      [
        "h3",
        "O que entra: parâmetros e argumentos"
      ],
      [
        "p",
        "Os nomes entre parênteses no `def`, `valor` e `taxa`, são os {{parametro|parâmetros}}: as vagas da função. Os valores que você põe na chamada, 2000 e 0.05, são os {{argumento|argumentos}}: o que ocupa as vagas naquela vez. Sem nome, os argumentos ocupam as vagas na ordem: o primeiro vai para `valor`, o segundo para `taxa`."
      ],
      [
        "p",
        "E é aí que mora o erro silencioso. Com a ordem trocada, `reajustar(0.05, 2000)`, o Python não reclama: põe 0.05 em `valor` e 2000 em `taxa`, e a saída real é `100.05000000000001`, um número absurdo sem mensagem nenhuma. O número feio do final, aliás, é o jeito de o computador guardar decimais, assunto para outra hora. Já esquecer um argumento dá erro na hora. Saída real de `reajustar(2000)`:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\reajustar.py\", line 5, in <module>\n    aluguel = reajustar(2000)\n              ^^^^^^^^^^^^^^^\nTypeError: reajustar() missing 1 required positional argument: 'taxa'"
      ],
      [
        "p",
        "A última linha é clara: \"falta 1 argumento posicional obrigatório: 'taxa'\". Posicional quer dizer \"passado pela posição, sem nome\"."
      ],
      [
        "h3",
        "Argumentos com nome e valores padrão"
      ],
      [
        "p",
        "Para não depender da ordem, dá para passar cada argumento com o nome da vaga: `reajustar(taxa=0.05, valor=2000)`. A ordem deixa de importar, e a saída real é `2100.0`. Isso se chama {{argumento-nomeado|argumento com nome}}, e é o que você vai ver em quase toda chamada de biblioteca, porque deixa claro qual valor é qual."
      ],
      [
        "p",
        "Uma vaga também pode ter um valor padrão, que vale quando ninguém passa nada para ela. Com `def converter(reais, cotacao=5):` e o corpo `return reais / cotacao`, a chamada `converter(250)` usa a cotação 5 e devolve `50.0`; `converter(250, cotacao=4)` troca o padrão e devolve `62.5`. As duas saídas são reais. Na assinatura, o `=5` depois do parâmetro avisa: este é opcional."
      ],
      [
        "h3",
        "O que sai: return, e a diferença para o print"
      ],
      [
        "p",
        "O {{retorno}} é o que a função devolve a quem a chamou, com a palavra `return`. O `print` é outra coisa: só mostra na tela, e o valor não volta para o programa. Veja uma função que usa `print` no lugar de `return`:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Linha",
            "Código"
          ],
          "linhas": [
            [
              "1",
              "`def com_desconto(preco):`"
            ],
            [
              "2",
              "`    print(preco * 0.9)`"
            ],
            [
              "4",
              "`final = com_desconto(200)`"
            ],
            [
              "5",
              "`print(final)`"
            ]
          ]
        }
      ],
      [
        "p",
        "A saída real tem duas linhas: `180.0` e depois `None`. O 180.0 foi mostrado pelo `print` de dentro da função; mas a função não devolveu nada, e, quando uma função não tem `return`, ela devolve `None`, o valor que quer dizer \"nada\" em Python. Então `final` guardou `None`, e a linha 5 mostrou isso. Trocando o `print` de dentro por `return preco * 0.9`, a saída real passa a ser só `180.0`, e `final` guarda o número para ser usado depois."
      ],
      [
        "p",
        "Outro detalhe do `return`: ele encerra a função na hora. Uma linha escrita depois dele, dentro da função, nunca roda. Num teste real, um `print(\"Convertido!\")` posto depois do `return` não apareceu nenhuma vez. Por que isso importa para você: quando o resultado de um programa vier `None` onde deveria haver um número, procure a função que deveria devolvê-lo e confira se ela tem `return`."
      ],
      [
        "h3",
        "Ler a assinatura: tipos do que entra e do que sai"
      ],
      [
        "p",
        "A primeira linha da função, com o nome e os parâmetros, é a assinatura: o contrato que diz o que ela recebe e o que devolve. Muitas vezes ela vem com {{anotacao-de-tipo|anotações de tipo}}, como esta:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Pedaço da assinatura",
            "Como ler"
          ],
          "linhas": [
            [
              "`def reajustar(`",
              "Uma função chamada reajustar."
            ],
            [
              "`valor: float,`",
              "Recebe `valor`, que deve ser um número decimal."
            ],
            [
              "`taxa: float = 0.05`",
              "Recebe `taxa`, também decimal; se não vier, vale 0.05."
            ],
            [
              "`) -> float:`",
              "A seta diz o que sai: um número decimal."
            ]
          ]
        }
      ],
      [
        "p",
        "Os tipos são os da aula 2.3: `int` para inteiro, `float` para decimal, `str` para texto, e `bool` para o verdadeiro ou falso da aula 2.4. Também aparecem `list`, para lista, `None`, para \"não devolve nada\", e nomes de coisas da própria biblioteca, como `Message`. Com essa assinatura, `reajustar(2000)` devolve `2100.0` e `reajustar(2000, taxa=0.10)` devolve `2200.0`, saídas reais."
      ],
      [
        "p",
        "Um cuidado: as anotações são um aviso para quem lê, e para o editor de código, não uma trava. A documentação do Python diz que elas não afetam o comportamento da função. Se alguém passar um texto, `reajustar(\"2000\")`, o Python aceita a chamada e o erro só aparece lá dentro, na conta. Saída real:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Users\\SeuNome\\estudo\\tipos.py\", line 6, in <module>\n    print(reajustar(\"2000\"))\n          ^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\estudo\\tipos.py\", line 2, in reajustar\n    return valor * (1 + taxa)\n           ~~~~~~^~~~~~~~~~~~\nTypeError: can't multiply sequence by non-int of type 'float'"
      ],
      [
        "p",
        "Repare que o {{traceback|Traceback}} tem dois andares: a linha 6, onde a função foi chamada, e a linha 2, dentro de `reajustar`, onde a conta falhou. Leia de baixo para cima, como sempre: a última linha diz que não dá para multiplicar um texto por um decimal. A causa, porém, está no andar de cima, no argumento errado."
      ],
      [
        "h3",
        "Método: a função que vem depois do ponto"
      ],
      [
        "p",
        "Alguns valores trazem as próprias funções. Um texto, por exemplo, sabe virar maiúsculas. Com `contrato = \"contrato de cessão\"`, a chamada `contrato.upper()` devolve `CONTRATO DE CESSÃO`, e `contrato.replace(\"cessão\", \"compra\")` devolve `contrato de compra`; depois das duas, `print(contrato)` ainda mostra `contrato de cessão`, porque elas devolvem um texto novo e não mexem no original. Saídas reais."
      ],
      [
        "p",
        "Uma função que pertence a um valor se chama {{metodo|método}}, e o ponto é o jeito de chegar a ela: `contrato.upper()` se lê \"do contrato, use a função upper\". O valor que carrega métodos se chama {{objeto}}. Ler código de biblioteca é, em boa parte, ler cadeias de pontos assim."
      ],
      [
        "h3",
        "Lendo a chamada ao Claude"
      ],
      [
        "p",
        "Agora você tem tudo para ler a linha da aula 2.1. Ela é assim: `resposta = cliente.messages.create(model=\"claude-opus-5-5\", max_tokens=16000, system=\"Responda como um professor paciente, em duas frases.\", messages=[{\"role\": \"user\", \"content\": \"O que são juros compostos?\"}])`, só que quebrada em várias linhas para caber na tela. Pedaço por pedaço:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Pedaço",
            "Como ler"
          ],
          "linhas": [
            [
              "`cliente`",
              "Um objeto, criado antes por `anthropic.Anthropic()`, que sabe falar com a {{api|API}}."
            ],
            [
              "`.messages`",
              "Uma parte do cliente: a das mensagens."
            ],
            [
              "`.create(`",
              "O método que cria uma mensagem nova. Em português: `cliente.mensagens.criar(`."
            ],
            [
              "`model=\"claude-opus-5-5\"`",
              "Argumento com nome: qual {{modelo}} vai responder."
            ],
            [
              "`max_tokens=16000`",
              "O teto de tamanho da resposta, em {{token|tokens}}. É um limite, não o gasto."
            ],
            [
              "`system=`",
              "As {{instrucoes-do-sistema|instruções do sistema}}: o papel do Claude. Opcional."
            ],
            [
              "`messages=` e a lista com a pergunta",
              "A conversa: aqui, uma mensagem do usuário com a pergunta."
            ],
            [
              "`resposta =`",
              "O que o método devolve fica guardado aqui."
            ]
          ]
        }
      ],
      [
        "p",
        "No código-fonte do SDK de Python, a assinatura desse método começa com `def create(self, *, max_tokens: int, messages: Iterable[MessageParam], model: ModelParam,`, segue com cerca de vinte parâmetros opcionais, como o `system`, e, na versão que devolve a resposta inteira de uma vez, termina com `-> Message`. O `self` é o próprio objeto e você não passa. O `*` sozinho quer dizer: daqui em diante, todo argumento vai com nome. Por isso a ordem de `model`, `max_tokens` e `messages` não importa. Esses três não têm valor padrão: são obrigatórios. `system` tem padrão: é opcional. E a seta diz que sai uma `Message`, um objeto com a resposta, cujo texto o programa da aula 2.1 lê em `resposta.content`."
      ],
      [
        "p",
        "Um aviso que vale para a aula 10.4: tutoriais antigos passam também um argumento `temperature`. Na versão da API de 21/10/2026, a documentação oficial diz que enviar `temperature`, `top_p` ou `top_k` direto para a API devolve um erro 400. E no SDK de Python 2.x, que já usa essa versão, esses argumentos nem existem mais: o Python para antes de enviar o pedido, com um erro que diz \"argumento com nome inesperado\", `TypeError: Messages.create() got an unexpected keyword argument 'temperature'` (teste real com o SDK 2.3.0 e o 2.6.0, em 08/11/2026). Ler a assinatura e a documentação atual evita copiar um argumento que não existe mais."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não para esta aula. Para rodar a chamada ao Claude, a biblioteca `anthropic` e uma chave, na aula 10.4.",
          "**Função e método são diferentes?** Método é uma função que pertence a um objeto e se chama com ponto, como `contrato.upper()`. Fora isso, funcionam igual: recebem argumentos e devolvem um valor.",
          "**Toda função precisa de return?** Não. Sem `return`, ela devolve `None`. Funções que só fazem algo, como mostrar texto ou gravar um arquivo, muitas vezes não devolvem nada.",
          "**Por que algumas chamadas têm argumentos com nome e outras não?** Os dois jeitos funcionam quando a função permite. Com nome é mais claro e não depende da ordem; algumas funções, como o `create` do SDK, exigem nome.",
          "**Onde vejo a assinatura de uma função de biblioteca?** Na documentação da biblioteca, ou pedindo ao Claude: \"mostre a assinatura desta função e diga o que entra e o que sai\"."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: as funções que já vêm com o Python",
          "blocos": [
            [
              "p",
              "O Python traz dezenas de funções prontas, chamadas de embutidas. `print` é uma. `len` conta o tamanho: `len(\"Resuma este contrato\")` devolve `20`, o número de caracteres, espaços incluídos. `round` arredonda: `round(2143.5888, 2)` devolve `2143.59`. `type`, da aula 2.3, diz o tipo. As três saídas são reais."
            ],
            [
              "p",
              "Funções de bibliotecas se chamam com o nome da biblioteca e um ponto, como `requests.get(\"https://api.github.com\")`, que você vai usar na aula 4.1: é a função `get` do módulo `requests`. A leitura é a mesma desta aula: o que entra, o que sai e o que a assinatura promete."
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
          "pergunta": "O que você acha que aparece na tela? E em que linha a conta acontece de verdade?",
          "codigo": "def reajustar(valor, taxa):\n    novo = valor * (1 + taxa)\n    return novo\n\naluguel = reajustar(2000, 0.05)\nprint(aluguel)",
          "linguagem": "python",
          "resposta": "Aparece `2100.0`. A conta só acontece na linha 5, quando `reajustar` é chamada com 2000 e 0.05; as linhas de 1 a 3 só definem a receita. Toque nos botões para ver o que muda; cada saída foi tirada de uma execução real.",
          "vivo": [
            [
              "Taxa de 10%",
              "def reajustar(valor, taxa):\n    novo = valor * (1 + taxa)\n    return novo\n\naluguel = reajustar(2000, 0.10)\nprint(aluguel)",
              "2200.0"
            ],
            [
              "Trocar a ordem dos valores",
              "def reajustar(valor, taxa):\n    novo = valor * (1 + taxa)\n    return novo\n\naluguel = reajustar(0.05, 2000)\nprint(aluguel)",
              "100.05000000000001"
            ],
            [
              "Com nomes, em outra ordem",
              "def reajustar(valor, taxa):\n    novo = valor * (1 + taxa)\n    return novo\n\naluguel = reajustar(taxa=0.05, valor=2000)\nprint(aluguel)",
              "2100.0"
            ],
            [
              "Voltar ao original",
              "def reajustar(valor, taxa):\n    novo = valor * (1 + taxa)\n    return novo\n\naluguel = reajustar(2000, 0.05)\nprint(aluguel)",
              "2100.0"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "Esta função mostra o preço com desconto. O que você acha que aparece na tela, nas duas linhas?",
          "codigo": "def com_desconto(preco):\n    print(preco * 0.9)\n\nfinal = com_desconto(200)\nprint(final)",
          "linguagem": "python",
          "resposta": "Aparece `180.0` e, embaixo, `None`. O primeiro vem do `print` de dentro da função. Mas a função não tem `return`, então devolve `None`, que fica guardado em `final` e é mostrado pela última linha.",
          "vivo": [
            [
              "Trocar o print por return",
              "def com_desconto(preco):\n    return preco * 0.9\n\nfinal = com_desconto(200)\nprint(final)",
              "180.0"
            ],
            [
              "Voltar ao original",
              "def com_desconto(preco):\n    print(preco * 0.9)\n\nfinal = com_desconto(200)\nprint(final)",
              "180.0\nNone"
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
          "p": "Uma função foi definida como `def converter(reais, cotacao=5):` e devolve `reais / cotacao`. O que devolve `converter(250, cotacao=4)`?",
          "o": [
            [
              "50.0, porque o padrão 5 tem prioridade sobre o argumento",
              "O padrão só vale quando ninguém passa nada para a vaga. Aqui a chamada passou 4."
            ],
            [
              "62.5, porque o argumento com nome troca o padrão",
              "Isso. 250 dividido por 4. A saída real é 62.5."
            ],
            [
              "Um erro, porque cotacao já tinha valor na assinatura",
              "Ter padrão quer dizer que a vaga é opcional, não que é fixa. Passar outro valor é permitido."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude explicou: \"Na chamada `cliente.messages.create`, os argumentos model, max_tokens e messages precisam vir exatamente nessa ordem; se você trocar a ordem, a chamada dá erro.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: toda função depende da ordem dos argumentos",
              "Só os argumentos sem nome dependem da ordem. Com nome, cada valor vai para a vaga certa, em qualquer ordem."
            ],
            [
              "Está errada: só o model precisa vir antes dos outros dois argumentos",
              "Nenhum deles precisa vir primeiro: todos vão com nome."
            ],
            [
              "Está errada: com argumentos com nome, a ordem deles não importa",
              "Isso. O `*` na assinatura do create exige nome em todos, e com nome a ordem é livre."
            ]
          ],
          "c": 2
        }
      ],
      [
        "h2",
        "Coloque na ordem"
      ],
      [
        "parsons",
        {
          "p": "Monte o programa: primeiro defina a função que converte reais em dólares, depois use-a. Cuide da ordem dentro de cada etapa e do recuo.",
          "etapas": [
            "Definir a função",
            "Usar a função"
          ],
          "linhas": [
            {
              "t": "def converter(reais, cotacao):",
              "recuo": 0,
              "etapa": 0
            },
            {
              "t": "dolares = reais / cotacao",
              "recuo": 1,
              "etapa": 0
            },
            {
              "t": "return dolares",
              "recuo": 1,
              "etapa": 0
            },
            {
              "t": "valor = converter(250, cotacao=5)",
              "recuo": 0,
              "etapa": 1
            },
            {
              "t": "print(valor)",
              "recuo": 0,
              "etapa": 1
            }
          ],
          "notas": [
            "A assinatura: o nome e as duas vagas, com dois pontos no fim.",
            "Com recuo, dentro da função: faz a conta com os valores recebidos.",
            "Com recuo e por último: devolve o resultado. Uma linha depois dele nunca rodaria.",
            "Sem recuo: chama a função com 250 e a cotação 5, e guarda o que ela devolve.",
            "Mostra o resultado. A saída real é 50.0."
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
            "\"Escrevi o def, então a função já rodou.\"",
            "O def só define a receita. Nada acontece até alguma linha chamar a função pelo nome, com parênteses."
          ],
          [
            "\"print e return dão no mesmo.\"",
            "O print só mostra na tela. Quem devolve o valor para o programa é o return; sem ele, a função devolve None."
          ],
          [
            "\"A ordem dos argumentos nunca importa.\"",
            "Sem nome, importa: reajustar(0.05, 2000) dá 100.05000000000001, sem erro. Com nome, não importa."
          ],
          [
            "\"A anotação de tipo impede o tipo errado.\"",
            "Ela é um aviso para quem lê. O Python aceita a chamada, e o erro só aparece lá dentro, se aparecer."
          ],
          [
            "\"Escrevi o nome da função e ela não fez nada.\"",
            "Sem parênteses, o nome só aponta para a receita. `print(reajustar)` mostra algo como `<function reajustar at 0x000001FB4D69A340>`, saída real, sem conta nenhuma. Quem chama é `reajustar(2000, 0.05)`, com os parênteses e os argumentos."
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
          "p": "O que entra e o que sai de uma função?",
          "r": [
            "Entram os argumentos, que ocupam os parâmetros da assinatura.",
            "Sai o valor do return, que volta para a linha que chamou.",
            "Sem return, sai None."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Como se lê a linha que chama o Claude, com `cliente.messages.create` e argumentos com nome?",
          "r": [
            "cliente é o objeto; messages é uma parte dele; create é o método.",
            "Os argumentos vão com nome, então a ordem não importa.",
            "O que o método devolve, uma Message, fica guardado em resposta."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Mais ferramentas de controle de fluxo: definindo funções, argumentos nomeados, valores padrão e anotações, tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/controlflow.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "SDK de Python da Anthropic (uso de client.messages.create)",
            "https://platform.claude.com/docs/pt-BR/cli-sdks-libraries/sdks/python",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Código-fonte do método create, SDK de Python da Anthropic",
            "https://github.com/anthropics/anthropic-sdk-python/blob/main/src/anthropic/resources/messages/messages.py",
            "oficial",
            "02/11/2026"
          ],
          [
            "Migrando para a versão 2026-10-21 da API (temperature, top_p e top_k: erro 400 na API; o SDK e a CLI não têm mais os três)",
            "https://platform.claude.com/docs/pt-BR/api/migration-2026-10-21",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "CS50's Introduction to Programming with Python, semana 0 (funções), Harvard",
            "https://cs50.harvard.edu/python/",
            "acadêmico",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Uma função é um trecho que roda assim que o programa passa pela linha do def",
          "O def só define. A função roda quando é chamada pelo nome, com os argumentos entre parênteses."
        ],
        [
          "Entram os argumentos, sai o return, e a assinatura diz o que entra e o que sai",
          "Isso. Entrada, saída e o contrato da assinatura: as três coisas que você lê em toda função."
        ],
        [
          "Uma função só serve para mostrar resultados na tela, do mesmo jeito que o print",
          "Mostrar é uma das coisas que ela pode fazer. O principal é devolver um valor para o programa usar, com return."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Uma função não tem `return`. O que ela devolve para quem a chamou?",
        "o": [
          [
            "O último valor que ela mostrou com print",
            "O print só mostra na tela; não devolve nada ao programa."
          ],
          [
            "Um erro, porque toda função precisa de return",
            "Funções sem return são comuns e não dão erro."
          ],
          [
            "None, o valor que quer dizer \"nada\"",
            "Isso. É por isso que `final` guardou None no exemplo do desconto."
          ]
        ],
        "c": 2
      },
      {
        "p": "Na assinatura `def reajustar(valor: float, taxa: float = 0.05) -> float:`, o que quer dizer o `-> float`?",
        "o": [
          [
            "Que a função devolve um número decimal a quem a chamou",
            "Isso. A seta mostra o tipo do que sai."
          ],
          [
            "Que a taxa precisa ser um número maior que zero",
            "A seta não fala de nenhum parâmetro: ela diz o tipo do que a função devolve."
          ],
          [
            "Que a função recusa argumento que não seja decimal",
            "As anotações são um aviso, não uma trava: o Python não recusa a chamada por causa delas."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre parâmetro e argumento?",
        "Parâmetro é a vaga, o nome que aparece no def, como valor e taxa. Argumento é o que ocupa a vaga numa chamada, como 2000 e 0.05. A mesma função tem sempre os mesmos parâmetros, e argumentos diferentes a cada chamada."
      ],
      [
        "Por que o programa mostrou None?",
        "Porque alguma função que deveria devolver um valor não tem return, e uma função sem return devolve None. Procure a função de onde veio aquele valor e confira se ela usa print onde deveria usar return."
      ],
      [
        "O que é o asterisco na assinatura do create?",
        "Um * sozinho na lista de parâmetros quer dizer que, dali em diante, todos os argumentos precisam ser passados com nome. Por isso, na chamada ao Claude, model, max_tokens e messages vão com nome, em qualquer ordem."
      ]
    ]
  },
  "2-7": {
    "tempo": 40,
    "video": "a2-7",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já pediu ao Claude os dados de um {{site}} e recebeu um bloco cheio de chaves, colchetes e aspas, ou abriu um arquivo {{json|.json}} que parecia uma bagunça. Esta aula ensina a ler esse bloco como quem lê uma ficha de cadastro, achando o valor que importa em segundos.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quase todo dado que circula entre {{programa|programas}} hoje viaja num formato chamado {{json|JSON}}. A resposta da {{api|API}} do Claude vem em JSON. A do {{github|GitHub}}, a do {{bot}} do Telegram e a da previsão do tempo também. O arquivo de configurações do {{claude-code|Claude Code}}, o {{settings-json|settings.json}}, é JSON. E, dentro de um programa em {{python|Python}}, esse texto vira duas estruturas que você vai encontrar em todo {{codigo|código}}: a {{lista}} e o {{dicionario|dicionário}}."
      ],
      [
        "p",
        "Saber ler os três muda o que você consegue conferir sozinho. Quando o Claude disser \"a API devolveu 30 itens e o primeiro é o contrato da Ana\", você abre a resposta e confere. Quando um programa parar com {{keyerror|KeyError}}, você sabe que ele procurou um nome que não estava na ficha. E quando abrir o `settings.json` e vir uma linha como `\"defaultMode\": \"bypassPermissions\"`, vai saber o que ela diz: a chave `defaultMode` guarda o modo de {{permissao|permissão}} com que o Claude Code começa."
      ],
      [
        "p",
        "Esta aula também é a ponte para o resto do módulo. A aula 2.9 faz um pedido de verdade a um site e recebe JSON de volta; a 2.12 mostra, na aba Rede do {{navegador}}, cada pedido de uma página e o código que voltou. Aqui, o exemplo lê um {{arquivo}}, coisa que o {{python-tutor|Python Tutor}} da aula 2.3 não faz; por isso esta aula usa o Prever e {{rodar|roda}} no seu PC."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num escritório antigo, de papel. O **dicionário** é uma ficha de cadastro: cada linha tem um rótulo e um valor ao lado, como Nome: Ana, Valor: 50.000, Parcelas: 12. Você não lê a ficha inteira para achar o valor; vai direto ao rótulo. A **lista** é uma pasta com folhas numeradas, em ordem: a folha 0, a folha 1, a folha 2. E o **JSON** é a ficha preenchida num formulário padrão, que pode ir pelo correio para qualquer outro escritório, onde vai ser entendida do mesmo jeito. Uma ficha pode ter uma pasta presa nela, e uma pasta pode ter fichas dentro: é assim que as respostas de API ganham camadas."
      ],
      [
        "quebra",
        "Três diferenças importam. A numeração da pasta começa no zero, não no um: a primeira folha é a 0. Na ficha, cada rótulo aparece uma vez só; se o mesmo rótulo for escrito duas vezes, vale o último. E o JSON, ao contrário de uma ficha de papel, é só texto: para o Python usar, ele precisa primeiro ler esse texto e montar o dicionário na memória, e esse passo tem nome, que você vai ver adiante."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "A lista: valores em ordem, numerados a partir do zero"
      ],
      [
        "p",
        "Uma lista guarda vários valores em ordem, entre colchetes e separados por vírgula. Um exemplo do seu mundo: as três primeiras parcelas de um financiamento, `parcelas = [1200, 1180, 1160]`. O nome `parcelas` é uma {{variavel-python|variável}}, como na aula 2.3, só que agora ela guarda três valores em vez de um."
      ],
      [
        "p",
        "Para pegar um item, você escreve o nome da lista e, entre colchetes, a posição dele, o {{indice|índice}}. E aqui está a pegadinha número um da programação: a contagem começa no zero. `parcelas[0]` é 1200, a primeira; `parcelas[1]` é 1180; `parcelas[2]` é 1160. Existe um atalho para o fim: `parcelas[-1]` é a última, seja qual for o tamanho da lista. E `len(parcelas)` conta os itens: 3."
      ],
      [
        "p",
        "O que acontece se você pedir uma posição que não existe? Uma lista de três itens tem as posições 0, 1 e 2. Pedir `parcelas[3]` faz o Python parar e avisar. Saída real:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"<string>\", line 1, in <module>\nIndexError: list index out of range"
      ],
      [
        "p",
        "Em português: \"índice de lista fora do alcance\". A aula 2.8 ensina a ler esse bloco inteiro; por ora, basta a última linha. Listas também crescem: `parcelas.append(1140)` acrescenta um item no fim, e a lista passa a ter quatro. E a repetição da aula 2.5, `for p in parcelas:`, passa por cada item, em ordem."
      ],
      [
        "p",
        "Quando usar: quando a ordem importa ou quando os itens são do mesmo tipo, como uma fila de parcelas, uma lista de nomes de arquivo, os tópicos de um {{repositorio|repositório}}. Quando não usar: quando cada valor tem um significado diferente. Guardar um cliente como `[\"Ana\", 50000, 12]` obriga você a lembrar que a posição 1 é o valor e a 2 são as parcelas; para isso existe o dicionário."
      ],
      [
        "h3",
        "O dicionário: valores com nome"
      ],
      [
        "p",
        "Um dicionário guarda pares de chave e valor, entre chaves `{ }`. A chave é o rótulo; o valor é o que está escrito ao lado. `contrato = {\"cliente\": \"Ana\", \"valor\": 50000, \"parcelas\": 12}` tem três pares. Para ler um valor, você usa a chave entre colchetes: `contrato[\"cliente\"]` devolve `Ana`, e `contrato[\"parcelas\"]` devolve `12`. Repare que não há posição: num dicionário, você acha pelo nome."
      ],
      [
        "p",
        "As chaves são únicas e exatas. `\"cliente\"` e `\"Cliente\"` são chaves diferentes, e acento conta. Se o mesmo rótulo for escrito duas vezes, como em `{\"a\": 1, \"a\": 2}`, o Python guarda só o último: o resultado é `{'a': 2}`. E se você pedir uma chave que não existe, o programa para com o `KeyError`. Saída real, pedindo `\"License\"`, com L maiúsculo, num dicionário que só tem `\"license\"`:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"<string>\", line 1, in <module>\nKeyError: 'License'"
      ],
      [
        "p",
        "Quando a chave pode não existir, há um jeito educado de perguntar: `contrato.get(\"avalista\")` devolve `None`, a palavra do Python para \"nada\", em vez de parar o programa; e `contrato.get(\"avalista\", \"sem avalista\")` devolve o texto que você escolheu. Os valores podem ser de qualquer tipo: texto, número, `True` ou `False`, outra lista, outro dicionário."
      ],
      [
        "p",
        "Quando usar: para uma coisa com várias características, como um cliente, um contrato, um repositório. Quando não usar: para uma sequência de coisas iguais, em que a ordem importa, porque aí o certo é a lista. E nunca para guardar segredo escrito no código: a {{chave-api|chave de API}} vai num arquivo `.env`, como a aula 11.1 ensina."
      ],
      [
        "h3",
        "Um dentro do outro: lendo o caminho"
      ],
      [
        "p",
        "A força das duas estruturas aparece quando uma entra na outra. Esta é uma resposta da API do Claude, no formato que a documentação oficial mostra (conferida em 02/11/2026):"
      ],
      [
        "saida",
        "{\n  \"id\": \"msg_01XFDUDYJgAACzvnptvVoYEL\",\n  \"type\": \"message\",\n  \"role\": \"assistant\",\n  \"content\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"Hello!\"\n    }\n  ],\n  \"model\": \"claude-opus-5-5\",\n  \"stop_reason\": \"end_turn\",\n  \"stop_sequence\": null,\n  \"usage\": {\n    \"input_tokens\": 12,\n    \"output_tokens\": 6\n  }\n}"
      ],
      [
        "p",
        "Como achar o texto que o Claude escreveu? Siga o caminho, um passo de cada vez. O bloco todo abre com `{`: é um dicionário, que no programa vamos chamar de `resposta`. A chave `\"content\"` guarda um valor que abre com `[`: uma lista. O primeiro item dessa lista, o da posição 0, abre com `{`: outro dicionário. Dentro dele, a chave `\"text\"` guarda `\"Hello!\"`. Escrito em Python, o caminho é `resposta[\"content\"][0][\"text\"]`: chave, posição, chave. Do mesmo jeito, `resposta[\"usage\"][\"output_tokens\"]` dá 6, o número de {{token|tokens}} que o Claude escreveu, que é parte do que se paga. Os dois caminhos foram rodados de verdade e devolveram `Hello!` e `6`."
      ],
      [
        "p",
        "Essa é a habilidade inteira desta aula: olhar o primeiro sinal de cada camada. `{` quer dizer \"procure por nome\"; `[` quer dizer \"procure por posição\". Ler da esquerda para a direita, uma camada por vez, funciona em qualquer resposta, por maior que seja."
      ],
      [
        "p",
        "Por que o texto fica dentro de uma lista, se veio uma frase só? Porque uma resposta pode ter vários blocos: um de pensamento, em que o Claude raciocina antes de responder; um de texto; outro pedindo para usar uma {{ferramenta}}; outro de texto de novo. A lista guarda os blocos em ordem. Nos modelos atuais, quando o Claude pensa, o bloco de pensamento vem primeiro, de tipo `\"thinking\"` e sem a chave `\"text\"`: ali, `[0][\"text\"]` daria o `KeyError` desta aula. Por isso um programa bem feito procura o bloco de tipo `\"text\"`, em vez de supor que ele é sempre o primeiro."
      ],
      [
        "h3",
        "JSON: a ficha em forma de texto"
      ],
      [
        "p",
        "JSON quer dizer JavaScript Object Notation, notação de objetos do {{javascript|JavaScript}}, a linguagem em que ele nasceu. Mas hoje ele é de todo mundo: Python, JavaScript, planilhas e o próprio Claude leem e escrevem JSON. Ele é texto puro, com poucos tipos de peça: objeto entre chaves, que vira dicionário no Python; lista entre colchetes; {{string|texto}} entre aspas duplas; números; e as palavras `true`, `false` e `null`."
      ],
      [
        "p",
        "Parece Python, e quase é, mas há quatro diferenças que derrubam muita gente. No JSON, texto só vai entre aspas duplas; no Python, aspas simples também valem. No JSON, verdadeiro e falso são `true` e `false`, com letra minúscula; no Python, `True` e `False`. O \"nada\" do JSON é `null`; o do Python, `None`. E o JSON não aceita vírgula depois do último item, nem comentário."
      ],
      [
        "p",
        "Para o Python usar um JSON, ele precisa ler o texto e montar o dicionário na memória. Quem faz isso é a {{biblioteca}} `json`, que já vem com o Python, sem {{instalar}} nada. `json.loads(texto)` lê um texto; `json.load(arquivo)` lê direto de um arquivo aberto. O caminho contrário, do dicionário para o texto, é `json.dumps(dados)`. Veja o que o Python 3.12 respondeu, de verdade, a quatro textos, três deles escritos do jeito errado:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "O texto lido",
            "O que o Python respondeu"
          ],
          "linhas": [
            [
              "`{'cliente': 'Ana', 'valor': 50000}`, com aspas simples",
              "`Expecting property name enclosed in double quotes: line 1 column 2 (char 1)`"
            ],
            [
              "`{\"cliente\": \"Ana\", \"valor\": 50000,}`, com vírgula sobrando",
              "`Expecting property name enclosed in double quotes: line 1 column 35 (char 34)`"
            ],
            [
              "`{\"cliente\": \"Ana\", \"pago\": True}`, com True maiúsculo",
              "`Expecting value: line 1 column 28 (char 27)`"
            ],
            [
              "`{\"cliente\": \"Ana\", \"pago\": true, \"obs\": null}`",
              "Leu sem erro: `{'cliente': 'Ana', 'pago': True, 'obs': None}`"
            ]
          ]
        }
      ],
      [
        "p",
        "As três mensagens de erro são do tipo `JSONDecodeError`, \"erro ao decodificar JSON\", e todas dizem a linha e a coluna onde a leitura travou. Na última linha da tabela, repare na tradução automática: o `true` virou `True`, e o `null` virou `None`. E perceba que a mensagem da vírgula sobrando é igual à das aspas simples: depois da vírgula, o Python esperava mais um nome entre aspas duplas. A mensagem diz onde travou; o motivo, às vezes, você deduz."
      ],
      [
        "p",
        "Mais um detalhe que pega no Windows: os acentos. O JSON quase sempre é gravado em {{utf8|UTF-8}}, e o Python no Windows, se você não disser nada, lê arquivos com outra {{codificacao|codificação}}, outra tabela de letras para bytes. Teste real, com um arquivo que contém `{\"cliente\": \"João\", \"ação\": \"reajuste\"}`: lido sem dizer nada, saiu `{\"cliente\": \"JoÃ£o\", \"aÃ§Ã£o\": \"reajuste\"}`; lido com `encoding=\"utf-8\"`, saiu certo. Por isso todo programa desta aula abre o arquivo com `open(\"arquivo.json\", encoding=\"utf-8\")`. Se o Claude esquecer essa parte e os acentos saírem estranhos, você já sabe o que pedir."
      ],
      [
        "h3",
        "Do arquivo ao valor: um caso do começo ao fim"
      ],
      [
        "p",
        "Juntando tudo, num caso real, que é o do laboratório. A API do GitHub responde, para qualquer pessoa e sem chave, os dados públicos de um {{repositorio|repositório}}. A resposta para o repositório da pandas, a biblioteca de planilhas que a aula 4.1 vai usar como exemplo, foi salva num arquivo `pandas.json` de cerca de 6.500 caracteres, numa linha só, que começa com `{\"id\":858127,\"node_id\":`. Uma linha só não é defeito: o JSON não precisa de quebras de linha, e o Python não liga para elas."
      ],
      [
        "p",
        "O programa que lê esse arquivo tem quatro partes. Traz a biblioteca com `import json`. Abre o arquivo com `with open(\"pandas.json\", encoding=\"utf-8\") as arquivo:`, um jeito de abrir que fecha o arquivo sozinho no fim. Transforma o texto em dicionário com `dados = json.load(arquivo)`. E mostra os valores com `print`; o primeiro deles usa `type(dados).__name__`, que pergunta ao Python o tipo do valor e devolve só o nome desse tipo. Cada `print` segue um caminho, do jeito que você aprendeu: `dados[\"full_name\"]` é uma chave só; `dados[\"owner\"][\"login\"]` entra no dicionário do dono e pega o nome de usuário; `dados[\"license\"][\"name\"]` faz o mesmo com a {{licenca|licença}}; `dados[\"topics\"][0]` entra na lista de tópicos e pega o primeiro. A saída real, em 02/11/2026:"
      ],
      [
        "saida",
        "Tipo do que veio: dict\nNome completo: pandas-dev/pandas\nDescrição: Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more\nLinguagem: Python\nEstrelas: 50286\nDono: pandas-dev\nLicença: BSD 3-Clause \"New\" or \"Revised\" License\nTópicos: ['alignment', 'data-analysis', 'data-science', 'flexible', 'pandas', 'python']\nPrimeiro tópico: alignment\nQuantos tópicos: 6"
      ],
      [
        "p",
        "Três coisas para notar. A primeira linha diz `dict`: o JSON virou um dicionário. A linha dos tópicos mostra a lista inteira com colchetes e aspas simples, porque é assim que o Python escreve uma lista na tela, mesmo que ela tenha vindo de um JSON com aspas duplas. E o número de estrelas muda todo dia: quando você rodar, vai ser outro."
      ],
      [
        "p",
        "E se o repositório não tiver tópicos? O do próprio Python, `python/cpython`, devolveu em 02/11/2026 a lista vazia, `\"topics\":[]`. Nesse caso, `dados[\"topics\"][0]` dá o `IndexError` que você viu acima, porque uma lista vazia não tem nem a posição 0. É o tipo de caso que um programa precisa prever, e que agora você sabe reconhecer."
      ],
      [
        "h3",
        "Por que isso importa para você"
      ],
      [
        "p",
        "O Claude escreve esse tipo de código num piscar de olhos. O seu papel é outro: saber se o caminho faz sentido, reconhecer o erro quando o caminho não existe e conferir a resposta na fonte. Quando ele disser \"o campo de licença está em `dados[\"licence\"]`\", você abre o JSON e vê que a chave é `license`, com s. Quando um programa dele parar com `KeyError: 'data'`, você abre a resposta e procura a chave `data`; se ela não estiver lá, a API mudou ou devolveu um erro, e é isso que você pergunta a ele."
      ],
      [
        "p",
        "Quando não usar JSON: para tabelas grandes que vão para o Excel, o {{csv|CSV}} é mais simples; para anotações que pessoas leem e editam, {{markdown|Markdown}}; e para arquivos de configuração que precisam de comentários, porque o JSON não aceita comentário nenhum."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. A biblioteca `json` vem com o Python. Só o próprio Python precisa estar instalado: se `python --version` responder com um número, como `Python 3.12.10`, está.",
          "**Por que a contagem começa no zero?** Herança das linguagens antigas, em que o número era a distância a partir do começo: o primeiro item está a zero passos do início. Quase todas as linguagens de hoje seguem isso, inclusive o JavaScript.",
          "**JSON e dicionário são a mesma coisa?** Não. O JSON é texto, que viaja entre programas e fica em arquivos. O dicionário é a estrutura que o Python monta na memória depois de ler esse texto. `json.load` vai do texto para o dicionário; `json.dumps`, do dicionário para o texto.",
          "**E se o JSON for enorme?** O caminho é o mesmo. Para olhar a estrutura, `python -m json.tool arquivo.json` mostra o arquivo com recuos, uma chave por linha; o laboratório usa esse {{comando}}.",
          "**Custa alguma coisa pedir dados ao GitHub?** Não, para dados públicos. Sem login, o limite é de 60 pedidos por hora para cada endereço de {{internet}}, segundo a documentação do GitHub (conferida em 02/11/2026); o laboratório usa um."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: tupla, conjunto e JSON Lines",
          "blocos": [
            [
              "p",
              "O Python tem mais dois parentes da lista. A tupla, escrita com parênteses, como `(1200, 1180)`, é uma lista que não pode mudar depois de criada. O conjunto, escrito com chaves e sem pares, como `{\"ana\", \"bia\"}`, guarda valores sem repetição e sem ordem. Você vai ver os dois em código do Claude; para ler JSON, lista e dicionário bastam."
            ],
            [
              "p",
              "Alguns serviços gravam um JSON por linha, num formato chamado JSON Lines, com a {{extensao|extensão}} `.jsonl`: cada linha é um registro completo. É comum em registros de uso e em resultados de lotes de pedidos. Para ler, o programa lê linha por linha e passa cada uma pelo `json.loads`."
            ],
            [
              "p",
              "Ao gravar um JSON com acentos, `json.dumps` troca cada letra acentuada por um código, como `\\u00e7` no lugar de ç, a menos que você peça `ensure_ascii=False`. Os dois jeitos são JSON válido; o segundo é o legível. Teste real: `\"ação\"` saiu `\"a\\u00e7\\u00e3o\"` no primeiro jeito e `\"ação\"` no segundo."
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
          "pergunta": "O que você acha que aparece na tela? São duas linhas.",
          "codigo": "pedido = {\"cliente\": \"Ana\", \"itens\": [\"caderno\", \"caneta\", \"mochila\"], \"pago\": True}\n\nprint(pedido[\"itens\"][1])\nprint(len(pedido[\"itens\"]))",
          "linguagem": "python",
          "resposta": "Aparece `caneta` e, embaixo, `3` (saída real). O caminho `pedido[\"itens\"]` entra no dicionário e pega a lista; o `[1]` pega o segundo item, porque a contagem começa no zero. E `len` conta os itens da lista: três. Quem respondeu `caderno` contou a partir do um, o engano mais comum de todos. Use os botões para trocar a posição pedida e ver a saída real de cada mudança: o `[0]` pega o primeiro item, e o `[-1]`, o último.",
          "vivo": [
            [
              "Trocar [1] por [0]",
              "pedido = {\"cliente\": \"Ana\", \"itens\": [\"caderno\", \"caneta\", \"mochila\"], \"pago\": True}\n\nprint(pedido[\"itens\"][0])\nprint(len(pedido[\"itens\"]))",
              "caderno\n3"
            ],
            [
              "Trocar [1] por [-1]",
              "pedido = {\"cliente\": \"Ana\", \"itens\": [\"caderno\", \"caneta\", \"mochila\"], \"pago\": True}\n\nprint(pedido[\"itens\"][-1])\nprint(len(pedido[\"itens\"]))",
              "mochila\n3"
            ],
            [
              "Voltar ao original",
              "pedido = {\"cliente\": \"Ana\", \"itens\": [\"caderno\", \"caneta\", \"mochila\"], \"pago\": True}\n\nprint(pedido[\"itens\"][1])\nprint(len(pedido[\"itens\"]))",
              "caneta\n3"
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
          "p": "Na resposta da API do Claude mostrada na aula, qual caminho dá o número de tokens que o Claude escreveu?",
          "o": [
            [
              "`resposta[\"usage\"][\"output_tokens\"]`",
              "Isso. `usage` é um dicionário, e dentro dele a chave `output_tokens` guarda o 6."
            ],
            [
              "`resposta[\"content\"][0][\"output_tokens\"]`",
              "Dentro de `content` estão os blocos da resposta, com `type` e `text`. A contagem fica em outra chave do primeiro nível, `usage`."
            ],
            [
              "`resposta[\"usage\"][\"tokens_out\"]`",
              "Dentro de `usage` a chave se chama `output_tokens`. Uma chave `tokens_out` não existe ali, e pedir por ela daria KeyError."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ao Claude o primeiro tópico do repositório. Ele respondeu: \"Use `dados[\"topics\"][0]`. Lista começa no zero.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o primeiro item fica na posição 1, `dados[\"topics\"][1]`",
              "Em Python, a contagem começa no zero. A posição 1 é a segunda."
            ],
            [
              "Está certa: o primeiro tópico é o `dados[\"topics\"][0]`",
              "Isso. Curta e certa: conferir também é reconhecer quando a resposta está boa. O único cuidado extra é a lista vazia, como a do python/cpython, em que nem a posição 0 existe e o resultado é IndexError."
            ],
            [
              "Está errada: tópicos se pedem pelo nome, `dados[\"topics\"][\"primeiro\"]`",
              "`topics` guarda uma lista, que abre com colchete: procura-se pela posição, e não pelo nome."
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
            "\"A primeira posição da lista é a 1.\"",
            "É a 0. A posição 1 é a segunda, e `lista[-1]` é a última."
          ],
          [
            "\"A chave está lá, mas dá KeyError.\"",
            "Confira letra por letra: maiúscula, acento e espaço contam. `\"License\"` e `\"license\"` são chaves diferentes."
          ],
          [
            "\"Escrevi o JSON com aspas simples e deu erro.\"",
            "JSON só aceita aspas duplas. Aspas simples são coisa do Python, não do JSON."
          ],
          [
            "\"O JSON já é um dicionário.\"",
            "É texto. Vira dicionário depois de passar por `json.load` ou `json.loads`."
          ],
          [
            "\"Os acentos saíram como Ã£ e Ã§.\"",
            "O arquivo foi lido sem `encoding=\"utf-8\"`. No Windows, sempre informe a codificação ao abrir o arquivo."
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
          "p": "Como você lê o caminho `resposta[\"content\"][0][\"text\"]`?",
          "r": [
            "`resposta` é um dicionário: `[\"content\"]` procura pela chave.",
            "O valor de `content` é uma lista: `[0]` pega o primeiro item, porque a contagem começa no zero.",
            "Esse item é outro dicionário: `[\"text\"]` pega o texto."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são as diferenças entre um JSON e um dicionário escrito em Python?",
          "r": [
            "O JSON é texto; o dicionário é o que o Python monta na memória ao ler esse texto.",
            "JSON só aceita aspas duplas e não aceita vírgula sobrando nem comentário.",
            "true, false e null do JSON viram True, False e None no Python."
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
          "titulo": "Leia um JSON de verdade",
          "lugar": "No PC, no PowerShell (ou com o Claude Code)",
          "tempo": "15 minutos",
          "antes": "Você vai baixar a resposta real da API do GitHub sobre o repositório da pandas, salvar num arquivo e ler esse arquivo com o programa da seção \"Do arquivo ao valor\". Precisa de internet e do Python, que entra no seu PC no laboratório da aula 2.2: se `python --version` não responder com um número, faça antes os passos de instalação de lá. Tudo acontece no {{powershell|PowerShell}}, com comandos prontos para colar. Se preferir o {{claude-code|Claude Code}}, peça a ele cada passo com as mesmas palavras e acrescente \"me mostre a saída exata, sem resumir\"; se ele pedir permissão, aceite (caminho não testado). Pelo app do Claude, no celular: dá para colar o JSON numa conversa e perguntar o caminho de cada valor, mas não dá para rodar o programa no seu PC. Os comandos foram rodados de verdade em 02/11/2026, no Windows 11, com Python 3.12; o número de estrelas vai ser outro quando você rodar.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando, que cria a pasta do laboratório e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\json-teste | Out-Null; Set-Location C:\\Projetos\\json-teste",
              "espera": "Nada aparece além do cursor, que agora mostra o caminho C:\\Projetos\\json-teste."
            },
            {
              "faz": "Cole este comando, que pede ao GitHub os dados do repositório da pandas e salva a resposta no arquivo pandas.json.",
              "cola": "Invoke-WebRequest https://api.github.com/repos/pandas-dev/pandas -OutFile pandas.json -UseBasicParsing",
              "espera": "Pode aparecer por um instante uma barra de progresso; depois, só o cursor. O arquivo pandas.json está na pasta."
            },
            {
              "faz": "Cole este comando, que mostra as 12 primeiras linhas do arquivo, organizadas com recuo.",
              "cola": "python -m json.tool pandas.json | Select-Object -First 12",
              "saida": "{\n    \"id\": 858127,\n    \"node_id\": \"MDEwOlJlcG9zaXRvcnk4NTgxMjc=\",\n    \"name\": \"pandas\",\n    \"full_name\": \"pandas-dev/pandas\",\n    \"private\": false,\n    \"owner\": {\n        \"login\": \"pandas-dev\",\n        \"id\": 21206976,\n        \"node_id\": \"MDEyOk9yZ2FuaXphdGlvbjIxMjA2OTc2\",\n        \"avatar_url\": \"https://avatars.githubusercontent.com/u/21206976?v=4\",\n        \"gravatar_id\": \"\",",
              "espera": "O começo do JSON: uma chave `{` abrindo o dicionário, um par por linha e a chave \"owner\" abrindo outro dicionário dentro do primeiro. O arquivo de verdade é uma linha só; o json.tool só reorganiza a exibição."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria o arquivo ler.py com o programa. Se o {{terminal}} avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\nimport json\n\nwith open(\"pandas.json\", encoding=\"utf-8\") as arquivo:\n    dados = json.load(arquivo)\n\nprint(\"Tipo do que veio:\", type(dados).__name__)\nprint(\"Nome completo:\", dados[\"full_name\"])\nprint(\"Descrição:\", dados[\"description\"])\nprint(\"Linguagem:\", dados[\"language\"])\nprint(\"Estrelas:\", dados[\"stargazers_count\"])\nprint(\"Dono:\", dados[\"owner\"][\"login\"])\nprint(\"Licença:\", dados[\"license\"][\"name\"])\nprint(\"Tópicos:\", dados[\"topics\"])\nprint(\"Primeiro tópico:\", dados[\"topics\"][0])\nprint(\"Quantos tópicos:\", len(dados[\"topics\"]))\n'@ | Set-Content -Encoding utf8 ler.py",
              "espera": "Nada aparece além do cursor. O arquivo ler.py está na pasta."
            },
            {
              "faz": "Rode o programa.",
              "cola": "python ler.py",
              "saida": "Tipo do que veio: dict\nNome completo: pandas-dev/pandas\nDescrição: Flexible and powerful data analysis / manipulation library for Python, providing labeled data structures similar to R data.frame objects, statistical functions, and much more\nLinguagem: Python\nEstrelas: 50286\nDono: pandas-dev\nLicença: BSD 3-Clause \"New\" or \"Revised\" License\nTópicos: ['alignment', 'data-analysis', 'data-science', 'flexible', 'pandas', 'python']\nPrimeiro tópico: alignment\nQuantos tópicos: 6",
              "espera": "As dez linhas, iguais às da aula, com outro número de estrelas."
            },
            {
              "faz": "Agora erre de propósito. Este comando pede a chave \"License\", com L maiúsculo. O `python -c` roda o código que vem entre aspas direto, sem criar arquivo: aqui, uma linha que abre o pandas.json e pede essa chave.",
              "cola": "python -c \"import json; dados = json.load(open('pandas.json', encoding='utf-8')); print(dados['License'])\"",
              "saida": "Traceback (most recent call last):\n  File \"<string>\", line 1, in <module>\nKeyError: 'License'",
              "espera": "O programa para com KeyError: a ficha não tem esse rótulo, porque a chave certa é \"license\", com l minúsculo."
            },
            {
              "faz": "Pergunte do jeito educado, com get e um texto para quando a chave não existir.",
              "cola": "python -c \"import json; dados = json.load(open('pandas.json', encoding='utf-8')); print(dados.get('License', 'não achei'))\"",
              "saida": "não achei",
              "espera": "Aparece \"não achei\", e o programa não para."
            }
          ],
          "naoTestado": "O caminho pelo Claude Code, pedindo cada passo a ele, não foi rodado: exige o Claude Code interativo. Os comandos do PowerShell e todas as saídas do Python foram rodados de verdade em 02/11/2026.",
          "errado": "se o PowerShell disser que não reconhece `python`, ou falar da Microsoft Store, o Python não está instalado ou não está no {{path|PATH}}: siga os passos de instalação do laboratório da aula 2.2. Se aparecer `FileNotFoundError`, o terminal está em outra pasta: rode de novo o passo 2. Se o passo 3 responder com um erro em vermelho que fala em \"rate limit\", você passou de 60 pedidos na hora: espere a hora virar. Se os acentos saírem estranhos na tela, confira se o ler.py tem `encoding=\"utf-8\"` na linha do `open`."
        }
      ],
      [
        "fontes",
        [
          [
            "Estruturas de dados (listas e dicionários), tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/datastructures.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "json: codificador e decodificador JSON (tabela JSON para Python, ensure_ascii, json.tool), documentação do Python",
            "https://docs.python.org/pt-br/3/library/json.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Trabalhando com JSON (aspas duplas obrigatórias), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/JSON",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Introdução ao JSON, json.org",
            "https://www.json.org/json-pt.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Usando a Messages API (formato da resposta), Anthropic",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/working-with-messages",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Limites de taxa para a API REST (60 pedidos por hora sem login), GitHub",
            "https://docs.github.com/pt/rest/using-the-rest-api/rate-limits-for-the-rest-api",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pontos de extremidade da API REST para repositórios (Get a repository), GitHub; a descrição de cada endpoint continua em inglês",
            "https://docs.github.com/pt/rest/repos/repos",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Pensamento, Claude Platform (nos modelos Claude 5, o pensamento já vem ligado e devolve um bloco thinking)",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/thinking",
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
          "O JSON é texto que vira listas e dicionários, lidos por posição e por nome, camada a camada",
          "Isso. Colchete pede posição, chave pede nome, e o caminho se lê uma camada por vez."
        ],
        [
          "O JSON é um tipo de planilha, e o Python lê cada uma das linhas como uma lista",
          "O JSON não tem linhas e colunas: tem dicionários e listas, uns dentro dos outros. Tabela simples é trabalho do CSV."
        ],
        [
          "Lista e dicionário são a mesma estrutura, com um nome diferente em cada linguagem",
          "São estruturas diferentes: a lista guarda em ordem e se lê por posição; o dicionário guarda com nome e se lê pela chave."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O que `parcelas[0]` devolve, se `parcelas = [1200, 1180, 1160]`?",
        "o": [
          [
            "1160: o índice 0 conta a partir do fim da lista",
            "Quem conta a partir do fim é o índice negativo: `parcelas[-1]` é 1160. O 0 é o começo."
          ],
          [
            "1200: a contagem começa no zero, e o 0 é o primeiro",
            "Isso. A posição 0 é a primeira."
          ],
          [
            "Um erro, porque a primeira posição de uma lista é a 1",
            "Existe a posição 0: em Python, é justamente a primeira."
          ]
        ],
        "c": 1
      },
      {
        "p": "Um programa parou com `KeyError: 'data'` ao ler uma resposta de API. O que isso quer dizer?",
        "o": [
          [
            "O dicionário não tem uma chave \"data\" com esse nome exato, letra por letra",
            "Isso. Confira a resposta: a chave pode ter outro nome, ou a API pode ter devolvido um erro."
          ],
          [
            "A lista da resposta tem menos itens do que o programa esperava ter",
            "Item que falta numa lista dá IndexError. KeyError é chave que falta num dicionário."
          ],
          [
            "O arquivo JSON foi gravado com aspas simples em vez de duplas",
            "Aspas simples dariam JSONDecodeError na leitura, antes de qualquer chave ser procurada."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre colchete e chave?",
        "Colchete abre uma lista, que você lê por posição: [0], [1]. Chave abre um dicionário, que você lê pelo nome: [\"cliente\"]. Num caminho como resposta[\"content\"][0][\"text\"], cada pedaço diz em que tipo você está entrando."
      ],
      [
        "Por que meu programa deu KeyError?",
        "Porque procurou num dicionário uma chave que não está lá com aquele nome exato. Abra o JSON, ache a chave e compare letra por letra. Se a chave pode faltar, use .get(\"chave\", \"valor padrão\")."
      ],
      [
        "Como vejo um JSON grande de um jeito legível?",
        "No terminal, python -m json.tool arquivo.json mostra uma chave por linha, com recuo. No navegador, abrir o endereço da API também mostra o JSON, e alguns navegadores oferecem uma opção para formatar."
      ]
    ]
  },
  "2-8": {
    "tempo": 33,
    "video": "a2-8",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O {{programa}} parou, a tela encheu de inglês, e o primeiro impulso foi colar tudo no Claude e escrever \"deu erro\". Esta aula ensina a achar, em poucos segundos, a linha e o tipo do erro num {{traceback}}, e a reconhecer o {{codigo|código}} que esconde o erro em vez de resolvê-lo.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Uma {{mensagem-de-erro|mensagem de erro}} do {{python|Python}} parece um muro de texto, mas é um relatório organizado: diz o que deu errado, em que {{arquivo}}, em que linha e por qual caminho o programa chegou lá. Quem aprende a ler esse relatório resolve sozinho boa parte dos problemas, e leva ao Claude, nos outros, uma pergunta precisa, em vez de \"não funciona\"."
      ],
      [
        "p",
        "Isso importa mais para quem não lê código, e não menos. Quando o Claude diz \"corrigi\", você confere {{rodar|rodando}} de novo e lendo a última linha da saída. Quando ele ataca o sintoma errado, você percebe, porque sabe qual era o tipo do erro. E quando ele \"resolve\" um erro escondendo a mensagem, o que acontece mais do que deveria, você reconhece o truque no arquivo, mesmo sem saber escrever uma linha."
      ],
      [
        "p",
        "Todo exemplo desta aula foi rodado de verdade no Python 3.12, no Windows, e as saídas estão como apareceram, só com o caminho da pasta encurtado. As mensagens estão em inglês porque o Python só fala inglês; as traduções vêm ao lado. Nas versões mais novas do Python, a mesma mensagem pode vir colorida, com as mesmas partes na mesma ordem."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense no laudo de um acidente de trânsito. No fim do laudo vem a conclusão do perito: o que aconteceu, uma colisão, e a causa imediata, o freio que falhou. Acima dela, o trajeto do carro, rua por rua, da garagem até o local. O {{traceback}} é esse laudo. A última linha é a conclusão, com o tipo do erro e a explicação; as linhas de cima são o trajeto, arquivo por arquivo e linha por linha, até o ponto em que o programa bateu. Por isso ele se lê de baixo para cima: primeiro a conclusão, depois o caminho."
      ],
      [
        "quebra",
        "No trânsito, o local da batida costuma ser o lugar do problema. No programa, nem sempre: a linha apontada é onde o Python percebeu o erro, e a causa pode estar antes, numa linha que criou um valor errado e passou adiante. Além disso, o trajeto pode passar por ruas que não são suas, dentro de {{biblioteca|bibliotecas}} que você não escreveu; o que importa é a última rua que é sua."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "As três partes de um traceback"
      ],
      [
        "p",
        "Comece por um caso inteiro. O arquivo `parcelas.py` calcula o valor de uma parcela dividindo o total pelo número de meses. Ele tem duas {{funcao|funções}}, como as da aula 2.6: `valor_parcela` faz a conta, e `resumo` monta a frase com uma {{f-string}}, o texto com `f` antes das aspas, na linha 6: o que está entre chaves é trocado pelo valor, e o `:.2f` pede duas casas decimais. A aula 2.11 volta a ela com calma. Depois, pede dois resumos: um em 12 meses e outro em 0 meses, por engano. Este é o arquivo, mostrado no {{terminal}} com `Get-Content parcelas.py`:"
      ],
      [
        "saida",
        "def valor_parcela(total, meses):\n    return total / meses\n\ndef resumo(total, meses):\n    parcela = valor_parcela(total, meses)\n    return f\"{meses}x de R$ {parcela:.2f}\"\n\nprint(resumo(12000, 12))\nprint(resumo(12000, 0))\nprint(\"Fim do relatório\")"
      ],
      [
        "p",
        "Rodando com `python parcelas.py`, a saída real é esta:"
      ],
      [
        "saida",
        "12x de R$ 1000.00\nTraceback (most recent call last):\n  File \"C:\\Projetos\\erros\\parcelas.py\", line 9, in <module>\n    print(resumo(12000, 0))\n          ^^^^^^^^^^^^^^^^\n  File \"C:\\Projetos\\erros\\parcelas.py\", line 5, in resumo\n    parcela = valor_parcela(total, meses)\n              ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Projetos\\erros\\parcelas.py\", line 2, in valor_parcela\n    return total / meses\n           ~~~~~~^~~~~~~\nZeroDivisionError: division by zero"
      ],
      [
        "p",
        "A primeira linha, `12x de R$ 1000.00`, não é erro: é o primeiro resumo, que deu certo. O programa roda em ordem, linha por linha, e só para quando bate no erro. Por isso a última linha do arquivo, a do \"Fim do relatório\", nunca apareceu: o programa parou antes."
      ],
      [
        "p",
        "Daí para baixo vem o relatório, em três partes. O cabeçalho, `Traceback (most recent call last):`, quer dizer \"rastro, com a chamada mais recente por último\": avisa que a ordem é de cima para baixo no tempo e que o fim é o mais importante. O meio é o trajeto: cada parada diz um arquivo, um número de linha e onde o programa estava (`in <module>` é o corpo do arquivo, fora de função; `in resumo` é dentro da função `resumo`), seguido da linha de código e, embaixo dela, sinais `^` ou `~` apontando o trecho exato. A última linha é a conclusão: o tipo do erro, antes dos dois-pontos, e a explicação, depois."
      ],
      [
        "p",
        "Agora leia de baixo para cima. Conclusão: `ZeroDivisionError: division by zero`, \"erro de divisão por zero\". Logo acima, o lugar onde explodiu: linha 2, dentro de `valor_parcela`, na conta `total / meses`, com o `^` embaixo da barra de divisão. Subindo mais, quem chamou essa função foi a linha 5, dentro de `resumo`. E quem chamou `resumo` foi a linha 9, com `resumo(12000, 0)`. Aí está a causa: o zero veio da linha 9. A conta da linha 2 está certa; quem mandou o valor errado foi a 9."
      ],
      [
        "p",
        "Esse é o ponto que a analogia já avisou: o lugar da explosão, a linha 2, e o lugar da causa, a linha 9, são diferentes. Ler o trajeto inteiro, de baixo para cima, é o que liga um ao outro."
      ],
      [
        "h3",
        "Os erros que você mais vai ver"
      ],
      [
        "p",
        "Meia dúzia de tipos responde pela maioria dos erros de quem começa, e cada um tem uma primeira coisa a conferir. Todas as saídas abaixo são reais."
      ],
      [
        "p",
        "**NameError**, \"erro de nome\": o programa usou um nome que não existe. Quase sempre é erro de digitação, e o Python 3.12 até sugere o nome parecido:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\nome.py\", line 2, in <module>\n    print(totl)\n          ^^^^\nNameError: name 'totl' is not defined. Did you mean: 'total'?"
      ],
      [
        "p",
        "Em português: \"o nome totl não está definido. Você quis dizer total?\". Primeira coisa a conferir: a grafia, letra por letra, e se a {{variavel-python|variável}} foi criada antes dessa linha."
      ],
      [
        "p",
        "**TypeError**, \"erro de tipo\": o programa juntou coisas de tipos que não combinam, como texto e número:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\tipo.py\", line 2, in <module>\n    print(\"Total: \" + total)\n          ~~~~~~~~~~^~~~~~~\nTypeError: can only concatenate str (not \"int\") to str"
      ],
      [
        "p",
        "Em português: \"só dá para juntar texto com texto, e não com número inteiro\". O `+` entre `\"Total: \"` e o número 12000 não sabe o que fazer. Primeira coisa a conferir: de onde veio cada valor. Um número que chegou como texto, lido de um arquivo, de um {{json|JSON}} ou de uma pergunta ao usuário, é a causa mais comum, e a aula 2.11 mostra um caso."
      ],
      [
        "p",
        "**IndentationError**, \"erro de {{recuo}}\": em Python, os espaços no começo da linha dizem o que está dentro de um `if`, de um `for` ou de uma função. Se o recuo falta ou sobra, o Python nem começa a rodar:"
      ],
      [
        "saida",
        "  File \"C:\\Projetos\\erros\\recuo.py\", line 3\n    print(\"Saldo positivo\")\n    ^^^^^\nIndentationError: expected an indented block after 'if' statement on line 2"
      ],
      [
        "p",
        "Em português: \"esperava um bloco recuado depois do if da linha 2\". Repare em duas diferenças: não há a linha `Traceback`, e nenhum resultado apareceu antes do erro. Esse tipo de erro, como o {{syntaxerror|SyntaxError}}, o erro de escrita, é achado na leitura do arquivo, antes de a primeira linha rodar. Primeira coisa a conferir: a linha apontada e a de cima. O mesmo vale para um parêntese aberto e nunca fechado, que dá `SyntaxError: '(' was never closed` e aponta a linha onde ele abriu."
      ],
      [
        "p",
        "**FileNotFoundError**, \"arquivo não encontrado\":"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\arquivo.py\", line 1, in <module>\n    with open(\"dados.json\", encoding=\"utf-8\") as arquivo:\n         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nFileNotFoundError: [Errno 2] No such file or directory: 'dados.json'"
      ],
      [
        "p",
        "Em português: \"não existe esse arquivo ou pasta: dados.json\". Duas causas respondem por quase tudo: o terminal está aberto em outra pasta, e o caminho aparece antes do cursor, como a aula 2.2 mostrou; ou o nome é outro, como `dados.json.txt`, com a {{extensao|extensão}} escondida pelo Windows. Primeira coisa a conferir: em que pasta você está e o nome exato do arquivo."
      ],
      [
        "p",
        "**ModuleNotFoundError**, \"módulo não encontrado\": o programa pediu uma biblioteca que não está {{instalar|instalada}}:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\modulo.py\", line 1, in <module>\n    import requests\nModuleNotFoundError: No module named 'requests'"
      ],
      [
        "p",
        "Em português: \"não há módulo chamado requests\". Quase sempre a biblioteca não foi instalada naquele ambiente, ou o nome está escrito errado. Não é sinal de que a biblioteca seja ruim. Primeira coisa a conferir: o nome, letra por letra, e se ela foi instalada; a aula 4.1 mostra como instalar com segurança."
      ],
      [
        "p",
        "E dois que você já conhece da aula 2.7: **KeyError**, chave que não existe num dicionário, e **IndexError**, posição que não existe numa lista. A tabela junta todos, para consulta:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Tipo",
            "Em português",
            "Primeira coisa a conferir"
          ],
          "linhas": [
            [
              "NameError",
              "Esse nome não existe",
              "A grafia e se a variável foi criada antes"
            ],
            [
              "TypeError",
              "Tipos que não combinam",
              "De onde veio cada valor; número que chegou como texto"
            ],
            [
              "IndentationError",
              "Recuo errado",
              "A linha apontada e a de cima"
            ],
            [
              "SyntaxError",
              "Erro de escrita",
              "Parêntese, aspas ou dois-pontos faltando"
            ],
            [
              "FileNotFoundError",
              "Arquivo não encontrado",
              "A pasta do terminal e o nome exato"
            ],
            [
              "ModuleNotFoundError",
              "Biblioteca não encontrada",
              "Se foi instalada e se o nome está certo"
            ],
            [
              "KeyError",
              "Chave que não existe",
              "A chave, letra por letra, no dicionário"
            ],
            [
              "IndexError",
              "Posição que não existe",
              "O tamanho da lista; ela pode estar vazia"
            ],
            [
              "ZeroDivisionError",
              "Divisão por zero",
              "De onde veio o zero"
            ]
          ]
        }
      ],
      [
        "h3",
        "Quando o trajeto passa por dentro de uma biblioteca"
      ],
      [
        "p",
        "Muitas vezes o trajeto do traceback entra em arquivos que não são seus. Veja um programa que tenta ler, com a biblioteca `json`, um texto escrito com aspas simples, o erro da aula 2.7. A saída real tem quatro paradas:"
      ],
      [
        "saida",
        "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\json_aspas.py\", line 4, in <module>\n    dados = json.loads(resposta)\n            ^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\json\\__init__.py\", line 346, in loads\n    return _default_decoder.decode(s)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\json\\decoder.py\", line 338, in decode\n    obj, end = self.raw_decode(s, idx=_w(s, 0).end())\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\json\\decoder.py\", line 354, in raw_decode\n    obj, end = self.scan_once(s, idx)\n               ^^^^^^^^^^^^^^^^^^^^^^\njson.decoder.JSONDecodeError: Expecting property name enclosed in double quotes: line 1 column 2 (char 1)"
      ],
      [
        "p",
        "De baixo para cima. A conclusão é `json.decoder.JSONDecodeError`, o erro de leitura de JSON, travado na coluna 2 da linha 1 do texto. As três paradas logo acima estão na pasta `Lib\\json`, onde mora a biblioteca `json`, que veio com o Python. Você não escreveu esses arquivos e não deve mexer neles: o erro não é deles, eles só reclamaram do texto que receberam. Subindo até a primeira parada que é um arquivo seu, aparece `json_aspas.py`, linha 4, `dados = json.loads(resposta)`. É aí que você começa; e a causa, como no caso das parcelas, está numa linha de antes, onde o texto foi escrito com aspas simples."
      ],
      [
        "p",
        "A regra prática: pule as paradas que estão na pasta do Python, aquela com `AppData\\Local\\Programs\\Python` no caminho, ou numa pasta de bibliotecas instaladas, com `site-packages` ou `.venv` no caminho, e procure a última parada que é um arquivo do seu projeto."
      ],
      [
        "h3",
        "Antes de perguntar ao Claude"
      ],
      [
        "p",
        "Com o relatório lido, a pergunta muda de qualidade. Em vez de \"deu erro\", você manda o {{comando}} que rodou, o traceback inteiro, copiado sem cortar, e uma frase com o que esperava. Algo como: \"Rodei `python parcelas.py` e deu este erro. Esperava dois resumos. Acho que o problema vem da linha 9, que passa 0 meses.\" Mesmo que o seu palpite esteja errado, o Claude agora sabe onde olhar, e você sabe conferir a resposta dele."
      ],
      [
        "lista",
        [
          "**1.** Leia a última linha e anote o tipo do erro.",
          "**2.** Suba até a primeira parada que é um arquivo seu e anote o número da linha.",
          "**3.** Olhe essa linha e as de antes, procurando de onde veio cada valor.",
          "**4.** Só então pergunte, colando o comando e o traceback inteiro. Não corte linhas para \"economizar\": as que parecem inúteis são o trajeto."
        ]
      ],
      [
        "h3",
        "O erro engolido: quando o código esconde a mensagem"
      ],
      [
        "p",
        "Existe um jeito de um programa \"nunca dar erro\": mandar o Python ignorar todos eles. Isso se escreve com um par de palavras, {{try-except|try e except}}. O `try` diz \"tente este trecho\"; o `except` diz \"se der qualquer erro, faça isto\". Quando o \"isto\" é `pass`, a palavra do Python para \"não faça nada\", o erro some sem deixar rastro. É o padrão `except: pass`, e ele aparece em código escrito às pressas, inclusive pela IA, quando o pedido foi só \"faça funcionar\"."
      ],
      [
        "p",
        "Um caso real. Este programa tenta ler um arquivo de configuração, mas o arquivo não existe na pasta. O arquivo, com `Get-Content config.py`:"
      ],
      [
        "saida",
        "import json\n\ntry:\n    with open(\"config.json\", encoding=\"utf-8\") as arquivo:\n        config = json.load(arquivo)\nexcept:\n    pass\n\nprint(\"Configuração carregada.\")\nprint(\"Modo:\", config[\"modo\"])"
      ],
      [
        "p",
        "A saída real de `python config.py`:"
      ],
      [
        "saida",
        "Configuração carregada.\nTraceback (most recent call last):\n  File \"C:\\Projetos\\erros\\config.py\", line 10, in <module>\n    print(\"Modo:\", config[\"modo\"])\n                   ^^^^^^\nNameError: name 'config' is not defined"
      ],
      [
        "p",
        "Repare no que aconteceu. A leitura falhou na linha 4, com um `FileNotFoundError`, mas o `except: pass` engoliu o erro. O programa seguiu e imprimiu, todo contente, \"Configuração carregada.\", o que é mentira. Só na linha 10, quando precisou do `config`, ele parou, com um `NameError` que fala de outra coisa: \"o nome config não está definido\". O erro de verdade sumiu, e o que sobrou aponta para o lugar errado. Imagine isso num programa de 300 linhas."
      ],
      [
        "p",
        "Pior ainda: se o programa não usar o valor depois, nada aparece. O exemplo da seção \"Preveja antes de ver\", logo abaixo, divide por zero dentro de um `try` com `except: pass`, e a tela fica em branco. E o {{codigo-de-saida|código de saída}}, aquele número que a aula 2.2 mostrou com `$LASTEXITCODE`, sai 0, o de \"deu certo\"; conferido de verdade. Um robô que olhe só esse número, como os {{hook|hooks}} da aula 7.6, também vai achar que deu certo."
      ],
      [
        "p",
        "O jeito certo é tratar só o erro que você espera, e dizer o que aconteceu. A versão corrigida troca `except:` por `except FileNotFoundError:` e, em vez de `pass`, avisa na tela e usa um valor padrão, `config = {\"modo\": \"padrão\"}`. Saída real:"
      ],
      [
        "saida",
        "Não achei o config.json nesta pasta.\nModo: padrão"
      ],
      [
        "p",
        "Agora o programa conta a verdade, e um erro de outro tipo, como um JSON mal escrito dentro do arquivo, continua aparecendo, em vez de ser engolido. O guia de estilo oficial do Python, o PEP 8, recomenda exatamente isso: citar o erro específico sempre que possível, em vez de um `except` vazio."
      ],
      [
        "p",
        "Como reconhecer sem ler código: procure no arquivo a palavra `except` seguida de dois-pontos e, logo abaixo, `pass`; ou `except Exception:` seguido de `pass`. Quando achar, pergunte ao Claude: \"o que acontece se der erro aqui? Quero ver a mensagem, não escondê-la\". E quando ele disser \"corrigi o erro\" e o código novo tiver um `try` em volta do trecho que falhava, desconfie: ele pode ter escondido em vez de corrigir."
      ],
      [
        "p",
        "Quando o `try` é bom: quando você sabe qual erro pode acontecer e tem um plano para ele, como \"se o arquivo não existir, use um valor padrão e avise\" ou \"se a {{internet}} cair, tente de novo daqui a pouco\". Tratar um erro específico, com um plano, é programação cuidadosa; engolir todos, sem plano, é esconder."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso decorar os tipos de erro?** Não. Saber que a última linha traz o tipo, e ter a tabela acima à mão, basta. Com o tempo, os mais comuns ficam de cabeça.",
          "**E se a mensagem tiver 50 linhas?** O método é o mesmo: última linha primeiro, depois a última parada que é um arquivo seu. A maioria das linhas de um traceback longo está dentro de bibliotecas.",
          "**O erro pode estar numa linha que não aparece no traceback?** Pode. O traceback mostra o caminho até a explosão; a linha que criou o valor errado pode ter rodado antes e não estar no caminho. Por isso, depois de achar a linha, olhe de onde veio cada valor dela.",
          "**Posso colar o traceback no Claude?** Deve. Só confira antes se nenhuma linha mostra uma chave ou uma senha, por exemplo dentro de um endereço.",
          "**Erro em {{javascript|JavaScript}} é igual?** Parecido, mas na ordem inversa: o lugar do erro vem primeiro, e o caminho vem embaixo. A aula 2.10 mostra."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: avisos, raise e a pilha de chamadas",
          "blocos": [
            [
              "p",
              "Nem toda mensagem é erro. Um aviso, o warning, aparece, o programa segue e o código de saída continua 0. Avisos dizem \"isto vai parar de funcionar um dia\" ou \"isto é estranho\"; vale ler, mas eles não param nada."
            ],
            [
              "p",
              "Um programa também pode criar o próprio erro, com a palavra `raise`, como em `raise ValueError(\"o número de meses precisa ser maior que zero\")`. É o jeito certo de parar quando um valor não faz sentido, com uma mensagem que explica. Em código do Claude, um `raise` com mensagem clara é bom sinal."
            ],
            [
              "p",
              "O trajeto do traceback tem um nome técnico: pilha de chamadas, ou call stack. Cada função chamada entra na pilha; quando termina, sai. O traceback é uma foto dessa pilha no instante do erro. E um `except` vazio também pega o Ctrl+C, que você usa para interromper um programa, o que o PEP 8 cita como mais um motivo para evitá-lo."
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
          "pergunta": "O que você acha que aparece na tela quando este programa roda?",
          "codigo": "try:\n    total = 12000\n    parcela = total / 0\n    print(\"Parcela:\", parcela)\nexcept:\n    pass",
          "linguagem": "python",
          "resposta": "Nada. A tela fica em branco (saída real), e o código de saída é 0, o de \"deu certo\". A divisão por zero na linha 3 causa um `ZeroDivisionError`, o `except` pega o erro, e o `pass` manda não fazer nada. O `print` da linha 4 nunca roda, porque o programa saiu do `try` no momento do erro. O erro não foi resolvido: foi escondido. Use os botões para ver as duas alternativas; a saída real de cada uma aparece embaixo do código.",
          "vivo": [
            [
              "Tirar o try e o except",
              "total = 12000\nparcela = total / 0\nprint(\"Parcela:\", parcela)",
              "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\engolido_sem_try.py\", line 2, in <module>\n    parcela = total / 0\n              ~~~~~~^~~\nZeroDivisionError: division by zero"
            ],
            [
              "Avisar em vez de calar",
              "try:\n    total = 12000\n    parcela = total / 0\n    print(\"Parcela:\", parcela)\nexcept Exception as erro:\n    print(\"Deu erro:\", erro)",
              "Deu erro: division by zero"
            ],
            [
              "Voltar ao original",
              "try:\n    total = 12000\n    parcela = total / 0\n    print(\"Parcela:\", parcela)\nexcept:\n    pass",
              ""
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
          "p": "Um traceback termina assim: a última parada é `File \"C:\\Projetos\\relatorio.py\", line 14, in <module>`, e a última linha é `TypeError: can only concatenate str (not \"int\") to str`. O que você faz primeiro?",
          "o": [
            [
              "Abro a linha 14 do relatorio.py e procuro texto somado a número",
              "Isso. O tipo diz o que procurar, texto mais número, e a parada diz onde."
            ],
            [
              "Reinstalo o Python, porque o erro cita um caminho do meu PC",
              "File e o caminho são só o endereço da parada. O tipo do erro está na última linha, e é de código, não de instalação."
            ],
            [
              "Procuro na internet a primeira linha, \"Traceback (most recent call last)\"",
              "Essa linha é só o cabeçalho, igual em todo erro. O que identifica o problema é a última linha."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O seu relatório parava com um erro, e o Claude respondeu: \"Encontrei a causa: a divisão da linha 3 falhava quando o número de meses vinha zerado. Para o relatório não parar no meio, pus esse trecho dentro de um try com except: pass. Testei de novo, com os mesmos dados, e agora ele roda até o fim, sem nenhuma mensagem de erro. Se quiser, explico cada linha.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: se não aparece mais mensagem, o problema foi resolvido",
              "Sem mensagem não quer dizer sem problema. O except: pass só tirou a mensagem da tela; a causa continua lá."
            ],
            [
              "Está errada: o erro foi escondido, e não corrigido; a causa continua",
              "Isso. A resposta é cuidadosa e até acha a causa, mas não a trata. Peça a correção dela; se for preciso tratar um erro, que seja um específico, com aviso na tela."
            ],
            [
              "Está errada só no alcance: o try devia cobrir o relatório inteiro, não um trecho",
              "Envolver mais linhas só esconde mais erros: um except que pega todos e não avisa continua escondendo a causa."
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
            "\"Li a primeira linha e não entendi nada.\"",
            "A primeira linha, a do Traceback, é igual em todo erro. Comece pela última: ela diz o tipo e a causa."
          ],
          [
            "\"A linha apontada é sempre a culpada.\"",
            "É onde o Python percebeu o problema. A causa pode estar numa linha de cima no trajeto, como a que passou o valor errado."
          ],
          [
            "\"O erro está dentro da biblioteca json.\"",
            "As paradas dentro da pasta do Python só reclamam do que receberam. Procure a última parada que é um arquivo seu."
          ],
          [
            "\"Deu erro\", como pergunta ao Claude.",
            "Mande o comando, o traceback inteiro e o que você esperava. Sem isso, ele chuta."
          ],
          [
            "\"Coloquei um try e o erro sumiu.\"",
            "Sumir da tela não é resolver. Um except que pega tudo e não avisa esconde a causa e pode deixar o programa dizendo que deu certo."
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
          "p": "Em que ordem você lê um traceback, e o que procura em cada parte?",
          "r": [
            "A última linha primeiro: o tipo do erro e a explicação.",
            "Depois, subindo, a primeira parada que é um arquivo seu: o arquivo e a linha.",
            "Por fim, o resto do trajeto, para achar de onde veio o valor errado."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que faz um except: pass, e por que é perigoso?",
          "r": [
            "Pega qualquer erro do trecho do try e não faz nada.",
            "A mensagem some, e o programa segue como se tivesse dado certo, com código de saída 0.",
            "O certo é tratar só o erro esperado, com um aviso ou um plano."
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
          "texto": "Um colega rodou o programa abaixo, que lê a resposta de uma API guardada num texto, recebeu o erro mostrado e escreveu ao Claude: \"a biblioteca json está com defeito\". Antes de ver a causa, ache o tipo do erro e a linha do arquivo dele. Para reproduzir no PowerShell, numa pasta de teste, cole o bloco inteiro de uma vez.",
          "cola": "@'\nimport json\n\nresposta = \"{'cliente': 'Ana', 'valor': 50000}\"\ndados = json.loads(resposta)\nprint(dados[\"cliente\"])\n'@ | Set-Content -Encoding utf8 json_aspas.py\npython json_aspas.py",
          "saida": "Traceback (most recent call last):\n  File \"C:\\Projetos\\erros\\json_aspas.py\", line 4, in <module>\n    dados = json.loads(resposta)\n            ^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\json\\__init__.py\", line 346, in loads\n    return _default_decoder.decode(s)\n           ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\json\\decoder.py\", line 338, in decode\n    obj, end = self.raw_decode(s, idx=_w(s, 0).end())\n               ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Users\\SeuNome\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\json\\decoder.py\", line 354, in raw_decode\n    obj, end = self.scan_once(s, idx)\n               ^^^^^^^^^^^^^^^^^^^^^^\njson.decoder.JSONDecodeError: Expecting property name enclosed in double quotes: line 1 column 2 (char 1)",
          "dica": "O erro não está nos três arquivos da pasta Lib\\json: eles só reclamam do texto que receberam. Ele está entre as linhas 3 e 4 do json_aspas.py: compare o texto da linha 3 com o que a última linha da mensagem diz que esperava.",
          "resposta": "O tipo é `JSONDecodeError`, erro ao ler JSON, e a primeira parada que é do colega é a linha 4, `dados = json.loads(resposta)`. A causa está na linha 3: o texto usa aspas simples, e JSON só aceita aspas duplas. \"Expecting property name enclosed in double quotes: line 1 column 2\" é \"esperava um nome entre aspas duplas na coluna 2\", bem onde está a primeira aspa simples. A biblioteca está certa. O conserto é escrever o texto com aspas duplas, `'{\"cliente\": \"Ana\", \"valor\": 50000}'`, ou, se o texto vier de outro programa, pedir que ele grave JSON de verdade, com `json.dumps`."
        }
      ],
      [
        "fontes",
        [
          [
            "Erros e exceções (a última linha diz o que aconteceu), tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/errors.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Exceções embutidas (a lista de todos os tipos), documentação do Python",
            "https://docs.python.org/pt-br/3/builtins/exceptions.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "PEP 8, recomendações de programação (citar o erro específico em vez de um except vazio)",
            "https://peps.python.org/pep-0008/",
            "oficial",
            "02/11/2026"
          ],
          [
            "CS50P, semana 3: exceções (try, except e pass), Harvard",
            "https://cs50.harvard.edu/python/weeks/3/",
            "acadêmico",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Quando o programa der erro, cole a primeira linha da mensagem no Claude",
          "A primeira linha é igual em todo erro. Mande o traceback inteiro, depois de ler a última linha."
        ],
        [
          "Um programa bem feito usa try e except para nunca mostrar mensagem de erro",
          "Esconder todos os erros faz o programa mentir. Bem feito é tratar só o erro esperado, com um aviso."
        ],
        [
          "Leia o erro de baixo para cima, ache a sua linha e nunca o esconda",
          "Isso. Tipo, linha e causa, nessa ordem, e nada de except: pass."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Qual linha de um traceback do Python diz o tipo do erro?",
        "o": [
          [
            "A primeira, que começa com a palavra Traceback",
            "Essa é só o cabeçalho, igual em todo erro."
          ],
          [
            "A última, com o tipo antes dos dois-pontos",
            "Isso. O tipo vem antes dos dois-pontos, e a explicação depois."
          ],
          [
            "A linha com os sinais ^ embaixo do código",
            "Esses sinais apontam o trecho do código, não o tipo do erro."
          ]
        ],
        "c": 1
      },
      {
        "p": "O que `ModuleNotFoundError: No module named 'requests'` quase sempre quer dizer?",
        "o": [
          [
            "A biblioteca está com defeito e precisa ser trocada",
            "Quase nunca. O Python só não achou a biblioteca com esse nome."
          ],
          [
            "O arquivo do seu programa não foi encontrado nesta pasta",
            "Arquivo que falta dá outro erro, como o FileNotFoundError."
          ],
          [
            "Ela não foi instalada, ou o nome dela está escrito errado no import",
            "Isso. Instalar com o nome certo, no ambiente certo, resolve."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Por onde começo a ler um erro?",
        "Pela última linha: ela diz o tipo e a explicação. Depois, suba até a primeira parada que é um arquivo seu e olhe aquela linha e as de antes. As paradas dentro da pasta do Python ou de bibliotecas quase nunca são o problema."
      ],
      [
        "O que é except: pass?",
        "Um trecho que manda o Python ignorar qualquer erro e não fazer nada. O erro some da tela, mas a causa continua, e o programa pode seguir como se tivesse dado certo. Peça sempre para tratar só o erro esperado, com um aviso."
      ],
      [
        "O que mando para o Claude quando dá erro?",
        "O comando que você rodou, o traceback inteiro, sem cortar, e uma frase com o que esperava. Se tiver um palpite de linha, diga também. Antes de colar, confira se não há chave ou senha no meio."
      ]
    ]
  },
  "2-9": {
    "tempo": 45,
    "video": "a2-9",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já abriu um link e deu de cara com um \"404\", ou viu o {{claude-code|Claude Code}} parar com \"API Error\" e um número, e não soube se o problema era seu ou do outro lado. Esta aula mostra o pedido que o {{navegador}} e os seus {{programa|programas}} fazem a um {{servidor}} da web, o que quer dizer cada número, como 401, 404 e 500, e de que lado está o problema em cada um.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O {{http|HTTP}} é a língua da web, a parte da {{internet}} feita de navegadores, {{site|sites}} e da maioria das APIs: as regras de como um programa pede alguma coisa a outro e de como a resposta volta. Nem tudo na internet fala HTTP: o e-mail e o {{dns|DNS}} da aula 0.6 usam outras regras. O navegador fala HTTP para abrir cada página de um site. O Claude Code fala HTTP com os servidores da Anthropic a cada mensagem sua. E cada {{api|API}} que você vai usar neste curso, a do Claude, a do {{github|GitHub}}, a do Telegram, a do Supabase, é uma porta que entende HTTP."
      ],
      [
        "p",
        "Você não vai escrever HTTP à mão. Mas vai ler o resultado dele o tempo todo, principalmente quando dá errado. \"Erro 401\" e \"erro 500\" parecem a mesma coisa para quem não sabe, e são opostos: um diz que o problema está do seu lado, a chave; o outro, que está do lado deles, o servidor. Saber isso é a diferença entre passar uma hora mexendo num {{codigo|código}} que estava certo e esperar cinco minutos para tentar de novo."
      ],
      [
        "p",
        "A aula termina com um laboratório em que você faz um pedido de verdade, com um programa em {{python|Python}} de vinte linhas, e recebe um 200, o \"deu certo\", e um 404, o \"não achei\", de propósito. Para isso ele usa a {{urllib}}, uma {{biblioteca}} que já vem com o Python: não é preciso {{instalar}} nada. A biblioteca mais famosa para essa tarefa, a `requests`, recomendada pela própria documentação do Python, é mais confortável de usar, mas precisa ser instalada, e a aula 4.1 ensina a instalar uma biblioteca com segurança."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense no balcão de um cartório. Você chega com um formulário preenchido. No alto, uma palavra diz o que você quer: \"consultar\" ou \"registrar\". Logo abaixo, o endereço do balcão e do documento: \"balcão de imóveis, matrícula 1234\". Presos ao formulário vão os seus dados de identificação e, se for registro, os papéis a registrar. O atendente lê, faz o que pode e devolve uma resposta com um carimbo: \"feito\", \"não existe essa matrícula\", \"falta identificação\" ou \"o sistema do cartório caiu\". Junto com o carimbo, quando há, vem o documento pedido."
      ],
      [
        "p",
        "Cada peça tem um nome técnico. O formulário é o **pedido**. A palavra do alto é o {{metodo-http|método}}: GET para consultar, POST para registrar. O endereço é a {{url|URL}}. Os dados de identificação são os {{cabecalho|cabeçalhos}}. Os papéis a registrar são o **corpo** do pedido. O carimbo é o {{codigo-de-status|código de status}}: 200, 404, 401, 500. E o documento devolvido é o corpo da resposta, quase sempre em {{json|JSON}}, como na aula 2.7."
      ],
      [
        "quebra",
        "O atendente de verdade se lembra de você entre um pedido e outro; o HTTP, não. Cada pedido chega como se fosse o primeiro, e por isso a identificação, como a {{chave-api|chave de API}}, vai em todos eles. O cartório atende uma pessoa por vez, e o servidor atende milhares ao mesmo tempo, em milissegundos. E o formulário de papel passa só pela sua mão e pela do atendente; o pedido HTTP atravessa vários computadores no caminho, e só não é lido por eles porque vai lacrado, no {{https|HTTPS}}."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O pedido, por dentro"
      ],
      [
        "p",
        "Um pedido HTTP é texto. Este é o pedido real que o programa do laboratório manda ao GitHub, capturado com o modo de depuração do Python, uma linha por item:"
      ],
      [
        "saida",
        "GET /repos/psf/requests HTTP/1.1\nAccept-Encoding: identity\nHost: api.github.com\nUser-Agent: Python-urllib/3.12\nConnection: close"
      ],
      [
        "p",
        "Linha por linha. `GET` é o método: \"quero ler\". `/repos/psf/requests` é o caminho, o documento pedido: o {{repositorio|repositório}} `requests`, do dono `psf`. `HTTP/1.1` é a versão das regras. Daí para baixo vêm os cabeçalhos, sempre no formato `nome: valor`. `Host: api.github.com` diz a que servidor o pedido se dirige; `User-Agent: Python-urllib/3.12` diz quem está pedindo, um programa Python; os outros dois são detalhes de transporte. Um pedido GET não tem corpo: não há nada a entregar, só a perguntar."
      ],
      [
        "p",
        "O endereço completo, `https://api.github.com/repos/psf/requests`, junta três partes. `https://` é o protocolo, as regras da conversa, aqui na versão lacrada. `api.github.com` é o nome do servidor. E `/repos/psf/requests` é o caminho dentro dele. Às vezes vem uma quarta parte, depois de um `?`, como `?per_page=5`, com opções: \"me mande cinco por página\". Essa parte fica gravada no histórico do navegador e nos registros dos servidores, e por isso nunca deve levar senha nem chave."
      ],
      [
        "h3",
        "GET e POST: ler e enviar"
      ],
      [
        "p",
        "O método diz a intenção do pedido. Os dois que você mais vai ver são o GET e o POST. O **GET** pede para ler: uma página, uma imagem, os dados de um repositório. Ele não muda nada no servidor e pode ser repetido à vontade; cada vez que você recarrega uma página, o navegador faz um GET de novo. O **POST** envia algo para o servidor processar: um formulário, um pagamento, uma mensagem. Ele leva um corpo, quase sempre em JSON, e costuma criar ou mudar alguma coisa lá."
      ],
      [
        "p",
        "Um exemplo que você vai usar no módulo 10: mandar uma pergunta ao Claude pela API é um POST para `https://api.anthropic.com/v1/messages`, com um corpo em JSON que diz o {{modelo}} e a sua mensagem, e com a chave num cabeçalho chamado `x-api-key`. A resposta vem em JSON, no formato que a aula 2.7 ensinou a ler. A documentação oficial avisa que essa API é sem estado: a cada pedido, o programa reenvia a conversa inteira; só um recurso ainda em teste guarda a conversa no servidor. É o HTTP sem memória, na prática."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Método",
            "Intenção",
            "Exemplo"
          ],
          "linhas": [
            [
              "GET",
              "Ler, sem mudar nada",
              "Abrir uma página; consultar um repositório"
            ],
            [
              "POST",
              "Enviar algo para processar ou criar",
              "Mandar uma mensagem ao Claude; enviar um formulário"
            ],
            [
              "PUT e PATCH",
              "Alterar algo que já existe",
              "Mudar o e-mail de um cadastro"
            ],
            [
              "DELETE",
              "Apagar",
              "Excluir um arquivo guardado num serviço"
            ]
          ]
        }
      ],
      [
        "p",
        "Quando não usar GET: para mandar dados que mudam alguma coisa, ou que são sensíveis, porque tudo vai no endereço. Quando não usar POST: para só consultar; um POST repetido pode criar duas vezes a mesma coisa, como dois pedidos de compra."
      ],
      [
        "h3",
        "A resposta: o carimbo e o documento"
      ],
      [
        "p",
        "A resposta volta no mesmo formato: uma primeira linha com o carimbo, os cabeçalhos e, por fim, o corpo. Estas são a primeira linha e alguns dos cabeçalhos reais da resposta do GitHub ao pedido acima, em 02/11/2026:"
      ],
      [
        "saida",
        "HTTP/1.1 200 OK\nContent-Type: application/json; charset=utf-8\nServer: github.com\nX-RateLimit-Limit: 60\nX-RateLimit-Remaining: 43\nX-RateLimit-Used: 17\nContent-Length: 6016"
      ],
      [
        "p",
        "`200 OK` é o carimbo de \"deu certo\". `Content-Type: application/json; charset=utf-8` avisa que o corpo é JSON, em UTF-8, a codificação da aula 2.7. `Server` diz o nome do servidor. E os três `X-RateLimit` contam o seu limite: sem login, o GitHub aceita 60 pedidos por hora de cada endereço de internet, segundo a documentação dele, e esta resposta avisa que restavam 43. Esse tipo de regra, o {{limite-de-pedidos|limite de pedidos}}, existe em quase toda API, inclusive na do Claude, e é a causa do erro 429. Depois dos cabeçalhos vem o corpo: os 6 mil caracteres de JSON com os dados do repositório, como diz o `Content-Length`."
      ],
      [
        "h3",
        "Os códigos de status: de que lado está o problema"
      ],
      [
        "p",
        "O código de status tem três dígitos, e o primeiro diz a família. Saber a família já responde à pergunta mais importante, \"de quem é o problema?\":"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Família",
            "Quer dizer",
            "De quem é o problema"
          ],
          "linhas": [
            [
              "1xx",
              "Informação: ainda processando",
              "De ninguém; é raro de ver"
            ],
            [
              "2xx",
              "Deu certo",
              "Não há problema"
            ],
            [
              "3xx",
              "Mudou de endereço, ou não mudou desde a última vez",
              "De ninguém; o navegador resolve sozinho"
            ],
            [
              "4xx",
              "O pedido tem algum problema",
              "Seu: endereço, chave, dados ou ritmo"
            ],
            [
              "5xx",
              "O servidor falhou ao atender",
              "Deles: espere e tente de novo"
            ]
          ]
        }
      ],
      [
        "p",
        "E os códigos que você mais vai encontrar, com o que fazer em cada um. Os significados seguem a documentação da Mozilla e a da API do Claude, conferidas em 02/11/2026:"
      ],
      [
        "lista",
        [
          "**200 OK:** deu certo, e o que você pediu está no corpo da resposta. O **201 Created** é o primo do POST: \"deu certo, e criei o que você mandou\".",
          "**304 Not Modified:** \"não mudou\". O navegador já guarda uma cópia e pergunta se ela ainda vale; o servidor diz que sim, sem mandar o arquivo de novo. Aparece ao recarregar uma página, e não é erro.",
          "**401 Unauthorized:** apesar do nome, quer dizer \"não sei quem você é\". A chave faltou, está errada, expirou ou foi revogada. Na API do Claude, vem com o tipo `authentication_error`. Confira a chave, não o código.",
          "**403 Forbidden:** \"sei quem você é, mas você não pode\". A chave vale, mas não tem permissão para aquilo. O GitHub também usa o 403 para o limite de pedidos estourado.",
          "**404 Not Found:** \"não achei\". O endereço está errado, a coisa não existe, ou é privada e o servidor prefere não dizer que existe. Confira cada letra do endereço.",
          "**429 Too Many Requests:** \"pedidos demais em pouco tempo\". Você bateu no limite. Espere; se a resposta trouxer o cabeçalho `retry-after`, ele diz quanto tempo.",
          "**500 Internal Server Error:** \"deu um problema aqui dentro\". O defeito é do servidor, não do seu pedido. Tente de novo daqui a pouco.",
          "**503 e 529:** \"estou sobrecarregado ou em manutenção\". O 529 é próprio da API do Claude, para quando ela está sobrecarregada. A receita é a do 500: esperar e tentar de novo."
        ]
      ],
      [
        "p",
        "A regra que sai daí: diante de um 4xx, mexer no seu lado pode resolver, seja a chave, o endereço, os dados ou o ritmo. Diante de um 5xx, mexer no seu código não adianta; o que adianta é esperar e tentar de novo, com intervalos crescentes. O {{sdk|kit oficial}} do Claude, segundo a documentação, já repete sozinho os erros passageiros, duas vezes, antes de desistir."
      ],
      [
        "h3",
        "Cabeçalhos: o que vai preso ao formulário"
      ],
      [
        "p",
        "Os cabeçalhos são as linhas `nome: valor` que acompanham o pedido e a resposta. Você não precisa decorar nenhum, mas quatro aparecem sempre. `Content-Type` diz o tipo do corpo: `application/json` para JSON, `text/html` para uma página. `User-Agent` diz que programa fez o pedido; o navegador manda um texto longo com o nome e a versão dele. `Authorization`, ou um nome próprio do serviço, como o `x-api-key` da Anthropic, carrega a credencial. E `Accept` diz que formato você aceita receber."
      ],
      [
        "p",
        "O ponto de segurança está aí: a {{chave-api|chave de API}} viaja num cabeçalho, em todo pedido, porque o HTTP não lembra de você. Por isso ela precisa de HTTPS, que lacra o pedido inteiro, cabeçalhos incluídos, e nunca deve ir na URL, onde ficaria gravada em registros e históricos. Quando um tutorial antigo mostrar algo como `?api_key=` no endereço, desconfie."
      ],
      [
        "h3",
        "O que é uma API REST"
      ],
      [
        "p",
        "Muitas APIs se apresentam como {{api-rest|API REST}}. REST não é um programa nem uma lei: é um estilo de organizar uma API em cima do HTTP, com três ideias. Cada coisa tem um endereço próprio, como um substantivo: `/repos/psf/requests` é um repositório; `/repos/psf/requests/issues` é a lista de problemas abertos nele. O método diz o verbo: GET nesse endereço lê, POST nele cria um problema novo. E nenhum pedido depende de outro: cada um leva tudo o que é preciso, inclusive a identificação."
      ],
      [
        "p",
        "Na prática, isso dá à documentação de uma API a cara de um cardápio: uma lista de {{endpoint|endpoints}}, cada um com método, endereço, o que mandar e o que volta. A documentação do GitHub lista \"Get a repository\" como `GET /repos/{owner}/{repo}`, em que `{owner}` é o dono e `{repo}` é o nome, e é exatamente esse o endpoint do laboratório. Nem toda API segue o estilo à risca, mas o cardápio se lê do mesmo jeito."
      ],
      [
        "h3",
        "Um caso do começo ao fim, em Python"
      ],
      [
        "p",
        "O programa do laboratório, `pedido.py`, faz um GET e conta o que veio. Ele recebe o nome do repositório no próprio {{comando}}, como em `python pedido.py psf/requests`: o que vem depois do nome do arquivo chega ao programa numa lista chamada `sys.argv`, e `sys.argv[1]` é o primeiro item depois do nome. Com o repositório certo, a saída real foi esta:"
      ],
      [
        "saida",
        "Pedido: GET https://api.github.com/repos/psf/requests\nStatus: 200 OK\nTipo do conteúdo: application/json; charset=utf-8\nPedidos que ainda restam nesta hora: 42\nNome: psf/requests\nEstrelas: 54813"
      ],
      [
        "p",
        "Com um nome que não existe, `psf/requestss`, com dois \"s\", a saída real foi:"
      ],
      [
        "saida",
        "Pedido: GET https://api.github.com/repos/psf/requestss\nStatus: 404 Not Found\nMensagem do servidor: Not Found"
      ],
      [
        "p",
        "Os dois são respostas completas do servidor; só o carimbo muda. No 404, o corpo também é JSON; o GitHub devolveu, de verdade, `{\"message\":\"Not Found\",\"documentation_url\":\"https://docs.github.com/rest/repos/repos#get-a-repository\",\"status\":\"404\"}`."
      ],
      [
        "p",
        "Um detalhe da `urllib`: diante de um 4xx ou 5xx, ela não devolve a resposta do jeito normal; ela levanta um erro, o `HTTPError`. Sem tratamento, o programa para com um {{traceback}} de sete paradas, quase todas dentro da biblioteca, terminando em `urllib.error.HTTPError: HTTP Error 404: Not Found`. Por isso o programa tem um `try` com `except urllib.error.HTTPError`, que trata esse erro específico, como a aula 2.8 recomenda, e mostra o código e a mensagem do servidor. A `requests` se comporta diferente: devolve a resposta com o código dentro, e o programa é que confere o número."
      ],
      [
        "p",
        "E o 401? Dá para provocar um sem chave nenhuma: um POST para o endereço do GitHub que cria repositórios, `https://api.github.com/user/repos`. A resposta real:"
      ],
      [
        "saida",
        "Status: 401 Unauthorized\nCorpo da resposta: {\n  \"message\": \"Requires authentication\",\n  \"documentation_url\": \"https://docs.github.com/rest\",\n  \"status\": \"401\"\n}"
      ],
      [
        "p",
        "\"Requires authentication\" é \"exige autenticação\". O servidor não disse que o endereço não existe: disse que não sabe quem você é. Com uma chave válida e um nome no corpo, o pedido criaria um repositório. É o mesmo 401 que o seu {{bot}} vai receber se a chave do Claude estiver errada ou tiver sido revogada."
      ],
      [
        "h3",
        "Por que isso importa para você"
      ],
      [
        "p",
        "Quando o Claude disser \"a API está fora do ar\", pergunte qual foi o código. Se foi 401, a API está no ar e recusou a chave. Se foi 404, o endereço pode estar errado. Se foi 429, você bateu no limite, e mexer no código não adianta. Se foi 500 ou 529, aí sim, o problema é do lado deles. E quando ele sugerir \"colocar a chave na URL para simplificar\", você já sabe responder."
      ],
      [
        "p",
        "Quando não usar HTTP direto: quando o serviço oferece um kit oficial, como o SDK do Claude, use o kit; ele monta os cabeçalhos, trata os erros e repete o que é passageiro. Escrever o pedido à mão, como no laboratório, serve para entender o que o kit faz por baixo, e para ler os erros dele quando aparecerem."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar algo para o laboratório?** Não. A `urllib` e a `json` vêm com o Python. Só é preciso internet.",
          "**Custa alguma coisa?** Não. A API do GitHub é gratuita para dados públicos, com o limite de 60 pedidos por hora sem login, conferido na documentação em 02/11/2026. O laboratório gasta quatro.",
          "**Um GET pode estragar alguma coisa?** Não deveria: pela regra, GET só lê. O cuidado é com POST, PUT e DELETE, que mudam coisas, e com os pedidos feitos com a sua chave, que gastam em seu nome.",
          "**E o navegador, faz isso também?** O tempo todo. Abrir uma página dispara vários GETs, um para cada imagem, fonte e {{script}}. A aula 2.12 mostra todos eles, um por linha, na aba Rede do navegador.",
          "**E o cadeado do navegador?** É o HTTPS da aula 0.6. O que ele acrescenta aqui: o lacre cobre o pedido inteiro, inclusive os cabeçalhos, e é por isso que a chave pode viajar num cabeçalho sem ser lida no caminho."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: HTTP/2, idempotência e o 418",
          "blocos": [
            [
              "p",
              "O HTTP/1.1 do laboratório manda texto. As versões 2 e 3, usadas pela maioria dos sites grandes, mandam a mesma informação em binário e aproveitam melhor a conexão, mas os métodos, os cabeçalhos e os códigos de status são os mesmos. O que você aprendeu vale para as três."
            ],
            [
              "p",
              "Os engenheiros têm uma palavra para \"repetir não muda o resultado\": idempotente. GET, PUT e DELETE são idempotentes; POST não é. Por isso um programa pode repetir um GET sem medo, e precisa de cuidado para repetir um POST."
            ],
            [
              "p",
              "Para testar códigos sem depender de erro de verdade, existe o httpbin.org, um serviço de teste: um GET em `https://httpbin.org/status/500` responde sempre 500. Teste real em 02/11/2026: `Status: 500 Internal Server Error`. E um código de brincadeira: o 418, \"I'm a teapot\", \"sou uma chaleira\", nasceu de uma piada de 1º de abril de 1998 e ainda aparece em alguns servidores."
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
          "pergunta": "Este programa pede um repositório que não existe. O que você acha que aparece na tela?",
          "codigo": "import urllib.request\nimport urllib.error\n\ntry:\n    resposta = urllib.request.urlopen(\"https://api.github.com/repos/python/nao-existe\")\n    print(resposta.status)\nexcept urllib.error.HTTPError as erro:\n    print(\"O servidor respondeu:\", erro.code, erro.reason)",
          "linguagem": "python",
          "resposta": "Aparece `O servidor respondeu: 404 Not Found` (saída real). O servidor respondeu, e a resposta foi \"não achei\". Como a `urllib` transforma um 404 em erro, o `print(resposta.status)` da linha 6 nunca {{rodar|roda}}; quem roda é o `except`, que pega esse erro específico e mostra o código e o motivo. Sem o `try`, a tela mostraria um traceback terminando em `urllib.error.HTTPError: HTTP Error 404: Not Found`. Toque no primeiro botão para pedir um repositório que existe: aí a linha 6 roda, e o que aparece é só o código, 200.",
          "vivo": [
            [
              "Pedir python/cpython, que existe",
              "import urllib.request\nimport urllib.error\n\ntry:\n    resposta = urllib.request.urlopen(\"https://api.github.com/repos/python/cpython\")\n    print(resposta.status)\nexcept urllib.error.HTTPError as erro:\n    print(\"O servidor respondeu:\", erro.code, erro.reason)",
              "200"
            ],
            [
              "Voltar ao original",
              "import urllib.request\nimport urllib.error\n\ntry:\n    resposta = urllib.request.urlopen(\"https://api.github.com/repos/python/nao-existe\")\n    print(resposta.status)\nexcept urllib.error.HTTPError as erro:\n    print(\"O servidor respondeu:\", erro.code, erro.reason)",
              "O servidor respondeu: 404 Not Found"
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
          "p": "O seu bot chamou a API do Claude e recebeu um erro 401 com o tipo authentication_error. Qual é a causa mais provável?",
          "o": [
            [
              "A chave de API está ausente, errada, expirada ou foi revogada",
              "Isso. 401 é \"não sei quem você é\": confira a chave e como o programa a carrega."
            ],
            [
              "Os servidores da Anthropic caíram e estão fora do ar agora",
              "Problema do lado deles vem como 500 ou 529. O 401 mostra que o servidor respondeu e recusou a identificação."
            ],
            [
              "O endereço da API foi digitado com uma letra errada",
              "Endereço errado costuma dar 404, \"não achei\". O 401 diz que o servidor achou o endereço e não reconheceu você."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O seu programa recebeu um 500 do servidor, e o Claude respondeu: \"O 500 é da família 5xx: a falha foi do lado do servidor, e não do seu pedido. Antes de mexer no código, vou esperar um minuto e tentar de novo; se continuar falhando, confiro a página de status do serviço e só então procuro outra causa.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: todo código de erro mostra que o pedido estava errado",
              "Só a família 4xx aponta problema no pedido. A 5xx aponta falha do servidor, como a resposta disse."
            ],
            [
              "Está certa: 500 é do servidor; o certo é esperar e tentar de novo",
              "Isso. A resposta está certa, e mexer no código agora seria perder tempo com uma falha do lado deles. Duvidar também é reconhecer quando está certo."
            ],
            [
              "Está errada: 500 quer dizer que a chave expirou e precisa ser trocada",
              "Chave com problema dá 401. O 500 é falha interna do servidor."
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
            "\"Deu 401, o servidor caiu.\"",
            "O servidor respondeu, e recusou a identificação. Confira a chave e se o programa a está carregando."
          ],
          [
            "\"Deu 500, vou mexer no meu código.\"",
            "A família 5xx é falha do servidor. Espere e tente de novo; mexer no código não adianta."
          ],
          [
            "\"Vou pôr a chave na URL, é mais fácil.\"",
            "A URL fica gravada em históricos e registros. A chave vai num cabeçalho, sempre com HTTPS."
          ],
          [
            "\"Deu 404, a internet caiu.\"",
            "Sem internet não há resposta nenhuma: o erro é de conexão. O 404 é uma resposta do servidor dizendo que não achou o endereço."
          ],
          [
            "\"Recarreguei 100 vezes e agora dá 403.\"",
            "Você passou do limite de pedidos. No GitHub, sem login, são 60 por hora; espere a janela virar."
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
          "p": "Quais são as peças de um pedido HTTP?",
          "r": [
            "O método, como GET para ler ou POST para enviar.",
            "O endereço, a URL.",
            "Os cabeçalhos, como o tipo do conteúdo e a chave.",
            "O corpo, quando há algo a enviar, quase sempre em JSON."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que dizem 401, 404, 429 e 500, e de que lado está cada problema?",
          "r": [
            "401: não sei quem você é; é a chave, do seu lado.",
            "404: não achei; confira o endereço, do seu lado.",
            "429: pedidos demais; você bateu no limite e precisa esperar.",
            "500: falha do servidor; do lado deles, tente de novo depois."
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
          "titulo": "Faça pedidos de verdade",
          "lugar": "No PC, no PowerShell e no navegador",
          "tempo": "15 minutos",
          "antes": "Você vai pedir ao GitHub os dados de um repositório, primeiro pelo navegador e depois por um programa Python de vinte linhas, e vai receber um 200 e um 404 de propósito. Não precisa instalar nada além do Python: o programa usa a `urllib`, que vem com ele. O Python entra no seu PC no laboratório da aula 2.2; se `python --version` não responder com um número, faça antes os passos de instalação de lá. Precisa também de internet. Os comandos são para o {{powershell|PowerShell}}, prontos para colar. Se preferir, peça cada passo ao {{claude-code|Claude Code}} com as mesmas palavras e \"me mostre a saída exata, sem resumir\"; se ele pedir permissão, aceite (caminho não testado). Pelo app do Claude: o passo 3 dá para fazer no navegador do celular; o resto exige o PC. Os comandos e as saídas foram rodados de verdade em 02/11/2026, no Windows 11, com Python 3.12; o número de estrelas e o de pedidos restantes vão ser outros quando você rodar.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando, que cria a pasta do laboratório e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\http-teste | Out-Null; Set-Location C:\\Projetos\\http-teste",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\http-teste."
            },
            {
              "faz": "No navegador, abra este endereço.",
              "cola": "https://api.github.com/repos/psf/requests",
              "espera": "Aparece um texto em JSON, com \"full_name\": \"psf/requests\" perto do começo. O navegador fez um GET e mostrou o corpo da resposta, sem enfeite; alguns navegadores oferecem uma opção para formatar."
            },
            {
              "faz": "De volta ao PowerShell, cole este bloco inteiro de uma vez. Ele cria o arquivo pedido.py. Se o {{terminal}} avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\nimport json\nimport sys\nimport urllib.error\nimport urllib.request\n\nrepositorio = sys.argv[1]\nendereco = \"https://api.github.com/repos/\" + repositorio\nprint(\"Pedido: GET\", endereco)\n\ntry:\n    with urllib.request.urlopen(endereco, timeout=15) as resposta:\n        print(\"Status:\", resposta.status, resposta.reason)\n        print(\"Tipo do conteúdo:\", resposta.headers[\"Content-Type\"])\n        print(\"Pedidos que ainda restam nesta hora:\", resposta.headers[\"X-RateLimit-Remaining\"])\n        dados = json.load(resposta)\n        print(\"Nome:\", dados[\"full_name\"])\n        print(\"Estrelas:\", dados[\"stargazers_count\"])\nexcept urllib.error.HTTPError as erro:\n    print(\"Status:\", erro.code, erro.reason)\n    print(\"Mensagem do servidor:\", json.load(erro)[\"message\"])\n'@ | Set-Content -Encoding utf8 pedido.py",
              "espera": "Só o cursor. O arquivo pedido.py está na pasta."
            },
            {
              "faz": "Faça o pedido para o repositório que existe.",
              "cola": "python pedido.py psf/requests",
              "saida": "Pedido: GET https://api.github.com/repos/psf/requests\nStatus: 200 OK\nTipo do conteúdo: application/json; charset=utf-8\nPedidos que ainda restam nesta hora: 42\nNome: psf/requests\nEstrelas: 54813",
              "espera": "Status: 200 OK, o tipo do conteúdo em JSON, quantos pedidos ainda restam na hora e os dados do repositório."
            },
            {
              "faz": "Agora peça um repositório que não existe, com dois \"s\".",
              "cola": "python pedido.py psf/requestss",
              "saida": "Pedido: GET https://api.github.com/repos/psf/requestss\nStatus: 404 Not Found\nMensagem do servidor: Not Found",
              "espera": "Status: 404 Not Found e a mensagem do servidor, Not Found. O servidor respondeu; só não achou."
            },
            {
              "faz": "Repita o pedido do passo 5 e compare a linha \"Pedidos que ainda restam nesta hora\".",
              "cola": "python pedido.py psf/requests",
              "espera": "O número caiu: cada pedido, inclusive o do navegador e o do 404, gasta um dos 60 da hora. Esse é o limite de pedidos, contado pelo servidor e informado num cabeçalho."
            }
          ],
          "naoTestado": "O caminho pelo Claude Code, pedindo cada passo a ele, não foi rodado: exige o Claude Code interativo. Os comandos do PowerShell e as saídas do Python foram rodados de verdade em 02/11/2026; o 404 e o 401 de novo em 08/11/2026.",
          "errado": "se aparecer `IndexError: list index out of range` apontando a linha `repositorio = sys.argv[1]`, faltou o nome do repositório depois de `pedido.py`: rode o comando inteiro, como no passo 5. Se aparecer um erro com `URLError`, o PC está sem internet ou algum bloqueio impediu o Python de sair. Se aparecer `Status: 403` ou `Status: 429`, com uma mensagem do servidor que fala em `rate limit exceeded`, você passou de 60 pedidos na hora; espere a hora virar. Se o PowerShell não reconhecer `python`, o Python não está instalado ou não está no {{path|PATH}}: siga os passos de instalação do laboratório da aula 2.2."
        }
      ],
      [
        "fontes",
        [
          [
            "Uma visão geral do HTTP (cliente e servidor, sem estado), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Overview",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Métodos de requisição HTTP, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Methods",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Códigos de status de respostas HTTP, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Cabeçalhos HTTP, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Headers",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Erros da Claude API (401, 429, 500, 529 e repetição automática no SDK), Anthropic",
            "https://platform.claude.com/docs/pt-BR/api/errors",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Usando a Messages API (POST, cabeçalho x-api-key, API sem estado; as threads de mensagens, em beta, guardam a conversa), Anthropic",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/working-with-messages",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Limites de taxa para a API REST (60 por hora sem login; 403 ou 429 ao estourar), GitHub",
            "https://docs.github.com/pt/rest/using-the-rest-api/rate-limits-for-the-rest-api",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Pontos de extremidade da API REST para repositórios (Get a repository), GitHub; a descrição de cada endpoint continua em inglês",
            "https://docs.github.com/pt/rest/repos/repos",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "urllib.request (recomenda a Requests para uso de alto nível), documentação do Python",
            "https://docs.python.org/pt-br/3/library/urllib.request.html",
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
          "HTTP é a conexão com a internet, e um código de erro avisa que essa conexão caiu",
          "HTTP são as regras da conversa. Um código de erro é uma resposta, e só existe porque a conexão funcionou."
        ],
        [
          "Os códigos de erro são todos parecidos, e a solução é sempre mexer no seu código",
          "Os 4xx apontam o seu lado, e os 5xx o lado do servidor; nos 5xx, mexer no código não adianta."
        ],
        [
          "O pedido leva método, endereço e cabeçalhos, e o código diz de quem é a culpa",
          "Isso. 4xx, do seu lado; 5xx, do lado deles."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Qual método você usa para só ler dados, sem mudar nada no servidor?",
        "o": [
          [
            "POST, que pede ao servidor os dados guardados lá",
            "O POST envia algo para o servidor processar, e costuma criar ou mudar coisas."
          ],
          [
            "PUT, que traz os dados do servidor para o PC",
            "O PUT altera algo que já existe no servidor; não é o de ler."
          ],
          [
            "GET, que lê e pode ser repetido sem mudar nada",
            "Isso. O GET lê e pode ser repetido sem mudar nada."
          ]
        ],
        "c": 2
      },
      {
        "p": "O que quer dizer o código 404?",
        "o": [
          [
            "O servidor não achou o endereço ou a coisa que foi pedida",
            "Isso. Confira o endereço, letra por letra."
          ],
          [
            "A internet do seu computador caiu no meio do pedido",
            "Sem conexão não há resposta nenhuma; o 404 é uma resposta do servidor."
          ],
          [
            "A chave de API está errada ou não foi enviada junto",
            "Chave com problema dá 401."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre 401 e 403?",
        "O 401 diz \"não sei quem você é\": a chave faltou ou está errada. O 403 diz \"sei quem você é, mas você não pode\": a chave vale, mas não tem permissão. No GitHub, o 403 também aparece quando você passa do limite de pedidos."
      ],
      [
        "O que faço com um erro 500?",
        "Espere um pouco e tente de novo. O 500 é falha do servidor, não do seu pedido, então mexer no código não adianta. Se continuar por muito tempo, procure a página de status do serviço."
      ],
      [
        "Por que a chave vai num cabeçalho e não na URL?",
        "Porque a URL fica gravada no histórico do navegador e nos registros dos servidores. O cabeçalho viaja lacrado pelo HTTPS e não fica nesses lugares. Endereço com ?api_key= é sinal de tutorial antigo ou descuidado."
      ]
    ]
  },
  "2-10": {
    "tempo": 25,
    "video": "a2-10",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "O Claude montou uma página para você e, ao abrir o arquivo, metade era um {{codigo|código}} em {{javascript|JavaScript}}, cheio de chaves, `const` e `=>`, que não se parece com o {{python|Python}} das últimas aulas. Esta aula mostra que as ideias são as mesmas, com outra grafia, e ensina a reconhecê-las sem escrever uma linha.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O JavaScript é a linguagem que {{rodar|roda}} dentro das páginas da {{internet}}. Todo botão que responde, toda busca que filtra enquanto você digita, todo exercício deste curso é JavaScript. E fora do {{navegador}}, com o {{node|Node.js}}, ele roda {{programa|programas}} no {{terminal}}, inclusive muitas das ferramentas que se instalam pelo {{npm}}."
      ],
      [
        "p",
        "Neste curso, você escreve só Python até o módulo 15. Mas vai ler JavaScript muito antes disso: quando o Claude montar uma página, quando abrir o {{devtools|F12}} na aula 2.12 e vir um erro vermelho no Console, quando um arquivo `package.json` aparecer num projeto. Ler, aqui, é reconhecer as cinco ideias que você já viu em Python, {{variavel-python|variável}}, condição, repetição, {{funcao|função}} e dados em {{json|JSON}}, e saber onde o JavaScript se comporta diferente, porque é aí que os erros se escondem."
      ],
      [
        "p",
        "Todos os exemplos desta aula foram rodados de verdade com o Node.js 24, no Windows, em 02/11/2026, e as saídas estão como apareceram. Para rodar um arquivo de JavaScript no terminal, o {{comando}} é `node nome.js`, do mesmo jeito que `python nome.py`."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num contrato escrito em português e no mesmo contrato traduzido para o espanhol. As cláusulas são as mesmas: as partes, o objeto, o preço, o prazo, a multa. Muda a grafia: \"prazo\" vira \"plazo\", \"multa\" continua \"multa\", e a pontuação tem suas manias, como o ponto de interrogação de cabeça para baixo no começo da pergunta. Quem lê bem o contrato em português lê a versão em espanhol devagar, reconhecendo cada cláusula pelo lugar e pelo formato. Python e JavaScript são assim: as mesmas cláusulas, outra grafia."
      ],
      [
        "quebra",
        "Entre português e espanhol existem os falsos amigos: \"exquisito\" quer dizer delicioso, não estranho. Entre Python e JavaScript também, e eles são mais perigosos que no contrato: em vários casos o JavaScript não reclama, segue em frente com um valor estranho e deixa o erro aparecer longe da causa. A seção dos falsos amigos, mais abaixo, mostra os cinco que mais enganam."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Onde o JavaScript vive"
      ],
      [
        "p",
        "Em dois lugares. O primeiro é o navegador: toda página pode trazer {{script|scripts}} em JavaScript, que o navegador baixa e roda no seu computador. Lá, o JavaScript enxerga a página como uma árvore de peças, o {{dom|DOM}}, e pode ler e mudar qualquer uma delas: trocar um texto, esconder um botão, mostrar a resposta de um exercício. O segundo lugar é o terminal, com o Node.js, um programa que roda JavaScript fora do navegador, usando o mesmo motor do Chrome, segundo a documentação do próprio Node. Com o Node, JavaScript vira uma linguagem de programas comuns, como o Python."
      ],
      [
        "p",
        "Uma diferença de segurança importa aqui. O JavaScript de uma página roda dentro de uma caixa fechada do navegador: não lê os seus arquivos nem roda comandos no seu PC. O Node não tem essa caixa: um script de Node roda com as mesmas permissões que você, como um programa Python. Por isso a regra que a aula 4.1 ensina, conferir um {{pacote}} antes de {{instalar}}, vale igual para o npm."
      ],
      [
        "p",
        "Precisa instalar algo para ler? Não. Para rodar fora do navegador, o Node.js, que você confere com `node --version`; no PC em que esta aula foi testada, a resposta foi `v24.18.0`. Para rodar no navegador, nada: ele já vem com JavaScript."
      ],
      [
        "h3",
        "As mesmas ideias, lado a lado"
      ],
      [
        "p",
        "O mesmo programa nas duas linguagens: some as três parcelas de uma lista e mostre o total. Primeiro em Python, como você leu nas aulas 2.3 a 2.5, mostrado no terminal com `Get-Content soma.py`:"
      ],
      [
        "saida",
        "parcelas = [1200, 1180, 1160]\ntotal = 0\nfor p in parcelas:\n    total = total + p\nprint(\"Total:\", total)"
      ],
      [
        "p",
        "Agora o mesmo programa em JavaScript, com `Get-Content soma.js`:"
      ],
      [
        "saida",
        "const parcelas = [1200, 1180, 1160];\nlet total = 0;\nfor (const p of parcelas) {\n  total = total + p;\n}\nconsole.log(\"Total:\", total);"
      ],
      [
        "p",
        "Rodando cada um, com `python soma.py` e `node soma.js`, a saída real é idêntica nas duas linguagens: `Total: 3540`. Compare linha por linha. A lista é igual, com colchetes. A {{variavel-python|variável}} ganha uma palavra na frente, `const` ou `let`, e cada linha pode terminar com ponto e vírgula. A repetição troca `for p in parcelas:` por `for (const p of parcelas)`, com parênteses, e o bloco de dentro, que em Python é marcado pelo recuo, em JavaScript fica entre chaves `{ }`. E o `print` vira `console.log`."
      ],
      [
        "p",
        "Essa é a maior diferença visual entre as duas: em Python, o recuo manda; em JavaScript, mandam as chaves, e o recuo só ajuda a leitura. Um JavaScript sem recuo nenhum roda igual; um Python sem recuo dá o `IndentationError` da aula 2.8. A tabela junta as grafias mais comuns:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Ideia",
            "Python",
            "JavaScript"
          ],
          "linhas": [
            [
              "Variável que pode mudar",
              "`total = 0`",
              "`let total = 0;`"
            ],
            [
              "Variável que não muda",
              "`TAXA = 0.05`, maiúscula por costume",
              "`const taxa = 0.05;`"
            ],
            [
              "Mostrar na tela",
              "`print(\"Total:\", total)`",
              "`console.log(\"Total:\", total);`"
            ],
            [
              "Comentário",
              "`# uma nota`",
              "`// uma nota`"
            ],
            [
              "Condição",
              "`if saldo >= 1000:`",
              "`if (saldo >= 1000) {`"
            ],
            [
              "E, ou, não",
              "`and`, `or`, `not`",
              "`&&`, `||`, `!`"
            ],
            [
              "Igual e diferente",
              "`==` e `!=`",
              "`===` e `!==`"
            ],
            [
              "Repetição por item",
              "`for p in parcelas:`",
              "`for (const p of parcelas) {`"
            ],
            [
              "Função",
              "`def reajustar(valor, pct):`",
              "`function reajustar(valor, pct) {`"
            ],
            [
              "Tamanho da lista",
              "`len(parcelas)`",
              "`parcelas.length`"
            ],
            [
              "Verdadeiro e falso",
              "`True` e `False`",
              "`true` e `false`"
            ],
            [
              "Nada",
              "`None`",
              "`null` e `undefined`"
            ],
            [
              "Lista",
              "`[1, 2, 3]`",
              "`[1, 2, 3]`, chamada de {{array}}"
            ],
            [
              "Dicionário",
              "`{\"nome\": \"Ana\"}`",
              "`{ nome: \"Ana\" }`, chamado de {{objeto-js|objeto}}"
            ]
          ]
        }
      ],
      [
        "h3",
        "Condição e função em JavaScript"
      ],
      [
        "p",
        "Um trecho que junta condição e função, do tipo que aparece numa página feita pelo Claude, mostrado com `Get-Content credito.js`:"
      ],
      [
        "saida",
        "function reajustar(valor, porcentagem) {\n  return valor * (1 + porcentagem / 100);\n}\n\nconst saldo = 1500;\nconst nome = \"Ana\";\n\nif (saldo >= 1000 && nome !== \"\") {\n  console.log(`${nome} pode pedir o empréstimo`);\n} else {\n  console.log(\"Saldo insuficiente\");\n}\nconsole.log(reajustar(2500, 4.5).toFixed(2));"
      ],
      [
        "p",
        "A saída real de `node credito.js` são duas linhas: `Ana pode pedir o empréstimo` e `2612.50`. Leia como em Python. A {{funcao|função}} começa com `function` em vez de `def`, e o que ela faz fica entre chaves; o `return` é igual. A condição vai entre parênteses, e `&&` é o `and` do Python: as duas coisas precisam ser verdade. O `!==` é \"diferente de\", na versão estrita, que você vai entender nos falsos amigos."
      ],
      [
        "p",
        "Duas grafias novas aparecem aí. O texto entre crases, com `${nome}` dentro, é o primo da {{f-string}} do Python, que você viu no `parcelas.py` da aula 2.8: o que está entre `${ }` é trocado pelo valor. E o `.toFixed(2)` mostra o número com duas casas decimais, como o `:.2f` daquela mesma linha do Python. Em código moderno você ainda vai ver a função escrita com uma flecha: `const reajustar = (valor, porcentagem) => valor * (1 + porcentagem / 100);` faz exatamente o mesmo, e também deu `2612.50` no teste. Leia a flecha como \"recebe isto e devolve aquilo\"."
      ],
      [
        "h3",
        "Objetos e JSON: a parte mais familiar"
      ],
      [
        "p",
        "O dicionário do Python, em JavaScript, se chama objeto, e a lista se chama array. A grafia é quase igual, com duas facilidades: as chaves podem ir sem aspas, como em `{ nome: \"Ana\", saldo: 1500 }`, e o valor pode ser lido com ponto, `cliente.nome`, além do jeito do Python, `cliente[\"nome\"]`. O caminho da aula 2.7, `resposta[\"content\"][0][\"text\"]`, em JavaScript costuma aparecer como `resposta.content[0].text`."
      ],
      [
        "p",
        "E o JSON se sente em casa: ele nasceu do JavaScript, e o nome quer dizer justamente \"notação de objetos do JavaScript\". Ler um texto JSON é `JSON.parse(texto)`, o `json.loads` do Python; transformar um objeto em texto JSON é `JSON.stringify(objeto)`, o `json.dumps`. Teste real: depois de `const pedido = JSON.parse('{\"cliente\": \"Ana\", \"itens\": [\"caderno\", \"caneta\"], \"pago\": true}')`, a linha `console.log(pedido.itens[1], pedido.itens.length, pedido.pago)` mostrou `caneta 2 true`; e `JSON.stringify({ nome: \"Ana\", saldo: 1500 })` mostrou `{\"nome\":\"Ana\",\"saldo\":1500}`, já com as aspas duplas que o JSON exige."
      ],
      [
        "h3",
        "Os cinco falsos amigos"
      ],
      [
        "p",
        "Aqui mora o motivo de ler com atenção. Em cada caso abaixo, o Python para com um erro ou responde o esperado, e o JavaScript segue em frente com um resultado estranho. Os resultados são reais, do Node 24 e do Python 3.12:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "O que o código faz",
            "Python",
            "JavaScript"
          ],
          "linhas": [
            [
              "Soma texto e número: `\"2\" + 1`",
              "Para com TypeError",
              "Dá `21`: junta como texto"
            ],
            [
              "Lê uma chave que não existe",
              "Para com KeyError",
              "Dá `undefined`, sem aviso"
            ],
            [
              "Lê uma posição que não existe",
              "Para com IndexError",
              "Dá `undefined`, sem aviso"
            ],
            [
              "Compara `\"1\"` com `1` usando `==`",
              "Dá `False`",
              "Dá `true`; com `===`, dá `false`"
            ],
            [
              "Testa uma lista vazia num `if`",
              "Conta como falso",
              "Conta como verdadeiro"
            ]
          ]
        }
      ],
      [
        "p",
        "O mais traiçoeiro é o {{undefined}}. Num objeto `cliente` que tem `nome` e `saldo`, `cliente.idade` não para nada: devolve `undefined`, que quer dizer \"não definido\", e o programa continua. O erro só aparece depois, quando alguém tenta usar esse valor. Teste real: a linha `console.log(cliente.idade.toFixed(0));`, que tenta formatar a idade inexistente, parou o Node com:"
      ],
      [
        "saida",
        "C:\\Projetos\\js\\chave.js:2\nconsole.log(cliente.idade.toFixed(0));\n                          ^\n\nTypeError: Cannot read properties of undefined (reading 'toFixed')\n    at Object.<anonymous> (C:\\Projetos\\js\\chave.js:2:27)\n    at Module._compile (node:internal/modules/cjs/loader:1871:14)\n    at Object..js (node:internal/modules/cjs/loader:2002:10)\n    at Module.load (node:internal/modules/cjs/loader:1594:32)\n    at Module._load (node:internal/modules/cjs/loader:1396:12)\n    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)\n    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)\n    at node:internal/main/run_main_module:33:47\n\nNode.js v24.18.0"
      ],
      [
        "p",
        "Leia: \"não consigo ler propriedades de `undefined` (lendo toFixed)\". A mensagem fala do `toFixed`, mas a causa é a chave `idade`, que não existe. Repare também no formato: o Node mostra primeiro o arquivo e a linha, `chave.js:2`, a linha de código com um `^` embaixo e o tipo do erro; as linhas com `at`, embaixo, são o trajeto, com o mais recente em cima, e quase todas estão dentro do próprio Node. É a ordem inversa do {{traceback}} do Python, que deixa o mais recente por último. Em JavaScript, o lugar do erro vem primeiro."
      ],
      [
        "p",
        "O `==` merece destaque. Ele compara de um jeito frouxo, convertendo os tipos antes: `\"1\" == 1` dá `true`. O `===` compara de um jeito estrito, sem converter: `\"1\" === 1` dá `false`. Código moderno usa quase sempre `===`, e quando você vir `==` num trecho que compara um valor vindo de um formulário, vale perguntar ao Claude se é de propósito."
      ],
      [
        "h3",
        "Por que isso importa para você"
      ],
      [
        "p",
        "Ler JavaScript não é para você corrigir o código à mão. É para reconhecer o que o Claude fez e fazer a pergunta certa: \"esta função `reajustar` recebe o valor e a porcentagem, certo?\"; \"este `if` mostra a mensagem só quando o saldo passa de mil?\"; \"por que aqui é `==` e não `===`?\". E, quando um erro vermelho aparecer no Console do navegador, reconhecer o tipo, a linha e o arquivo, como a aula 2.12 vai mostrar."
      ],
      [
        "p",
        "Quando não precisa ler: se o Claude fez um script em Python, nada disto entra. E num projeto grande de {{site}}, você não vai ler arquivo por arquivo; vai ler o trecho que o erro aponta. Uma variação que você vai encontrar é o TypeScript, que é JavaScript com o tipo de cada valor escrito ao lado, como em `valor: number`; para ler, ignore a parte depois dos dois-pontos."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso aprender a escrever JavaScript agora?** Não. Até o módulo 15, só ler. Quem escreve é o Claude; o seu trabalho é reconhecer o que ele fez.",
          "**JavaScript tem a ver com Java?** Não. Os nomes se parecem por uma decisão de marketing dos anos 1990, e as linguagens são diferentes.",
          "**Onde vejo o JavaScript de uma página?** No F12, nas abas Elementos e Fontes. A aula 2.12 mostra como abrir.",
          "**Custa alguma coisa?** Não. O Node.js é gratuito, e o navegador já traz JavaScript.",
          "**E se eu errar lendo?** Nada quebra: ler é seguro. O cuidado é na hora de rodar um script de Node que você não conhece, porque ele tem as suas permissões no PC."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: var, ponto e vírgula e await",
          "blocos": [
            [
              "p",
              "Em código antigo você vai ver `var` no lugar de `let`. Os dois criam variáveis, mas o `var` tem regras confusas, como deixar usar a variável antes da linha que a cria; a MDN recomenda `let` sempre que possível, e `const` para o que não recebe outro valor. Ver `var` é sinal de código antigo, não de erro."
            ],
            [
              "p",
              "O ponto e vírgula no fim da linha é opcional na maioria dos casos: o JavaScript tenta colocar sozinho. Alguns projetos usam, outros não; os dois estilos funcionam."
            ],
            [
              "p",
              "As palavras `async` e `await`, muito comuns em código que faz pedidos de rede, marcam trechos que esperam uma resposta sem travar a página. Quando você vir `await fetch(endereço)`, leia como \"faça este pedido {{http|HTTP}} e espere a resposta\", o mesmo trabalho do `urlopen` da aula 2.9."
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
          "pergunta": "O que você acha que este programa em JavaScript mostra na tela?",
          "codigo": "const parcelas = [1200, 1180, 1160];\nlet total = 0;\nfor (const p of parcelas) {\n  total = total + p;\n}\nconsole.log(\"Total:\", total);",
          "linguagem": "javascript",
          "resposta": "Mostra `Total: 3540` (saída real de `node soma.js`), igual ao programa em Python. A lista tem três parcelas; o `for (const p of parcelas)` passa por cada uma, e a linha de dentro soma ao total. O `let` avisa que `total` vai mudar; o `const` avisa que `parcelas` vai ser sempre a mesma lista, e que `p` não muda dentro de cada volta. O primeiro botão põe aspas numa parcela: ela vira texto, e o `+` passa a juntar em vez de somar, 2380 com \"1160\" dá \"23801160\", sem erro nenhum. É o primeiro falso amigo da tabela acima.",
          "vivo": [
            [
              "Trocar 1160 por \"1160\", com aspas",
              "const parcelas = [1200, 1180, \"1160\"];\nlet total = 0;\nfor (const p of parcelas) {\n  total = total + p;\n}\nconsole.log(\"Total:\", total);",
              "Total: 23801160"
            ],
            [
              "Acrescentar a parcela 1140",
              "const parcelas = [1200, 1180, 1160, 1140];\nlet total = 0;\nfor (const p of parcelas) {\n  total = total + p;\n}\nconsole.log(\"Total:\", total);",
              "Total: 4680"
            ],
            [
              "Voltar ao original",
              "const parcelas = [1200, 1180, 1160];\nlet total = 0;\nfor (const p of parcelas) {\n  total = total + p;\n}\nconsole.log(\"Total:\", total);",
              "Total: 3540"
            ]
          ]
        }
      ],
      [
        "prever",
        {
          "pergunta": "E este? São três linhas na tela.",
          "codigo": "const cliente = { nome: \"Ana\", saldo: 1500 };\nconsole.log(\"2\" + 1);\nconsole.log(cliente.idade);\nconsole.log(cliente[\"nome\"]);",
          "linguagem": "javascript",
          "resposta": "Aparece `21`, depois `undefined` e depois `Ana` (saída real de `node falsos.js`). O `\"2\" + 1` junta texto com número como texto, em vez de parar com erro, como o Python faria. O `cliente.idade` não existe, e o JavaScript devolve `undefined` em silêncio, onde o Python pararia com KeyError. E `cliente[\"nome\"]` lê do mesmo jeito que um dicionário do Python. As duas primeiras linhas são falsos amigos: nada para, e o valor estranho segue adiante. Com os botões, você conserta um falso amigo de cada vez e vê a saída real mudar só na linha dele.",
          "vivo": [
            [
              "Trocar \"2\" + 1 por 2 + 1",
              "const cliente = { nome: \"Ana\", saldo: 1500 };\nconsole.log(2 + 1);\nconsole.log(cliente.idade);\nconsole.log(cliente[\"nome\"]);",
              "3\nundefined\nAna"
            ],
            [
              "Trocar cliente.idade por cliente.saldo",
              "const cliente = { nome: \"Ana\", saldo: 1500 };\nconsole.log(\"2\" + 1);\nconsole.log(cliente.saldo);\nconsole.log(cliente[\"nome\"]);",
              "21\n1500\nAna"
            ],
            [
              "Voltar ao original",
              "const cliente = { nome: \"Ana\", saldo: 1500 };\nconsole.log(\"2\" + 1);\nconsole.log(cliente.idade);\nconsole.log(cliente[\"nome\"]);",
              "21\nundefined\nAna"
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
          "p": "Qual linha em Python faz o mesmo que `if (saldo >= 1000 && ativo) {`?",
          "o": [
            [
              "`if saldo >= 1000 and ativo:`",
              "Isso. `&&` é and; os parênteses e a chave dão lugar aos dois-pontos e ao recuo."
            ],
            [
              "`if saldo >= 1000 or ativo:`",
              "`||` é que seria o or. O `&&` exige as duas condições: é o and."
            ],
            [
              "`if saldo >= 1000 & ativo:`",
              "Em Python, o \"e\" das condições se escreve and. O & é outro operador e muda o sentido da linha."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou o que o JavaScript faz ao ler uma chave que não existe, e o Claude respondeu: \"Igual ao Python: o programa para na hora com um erro dizendo que a chave não existe.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: as duas linguagens param na hora com um erro de chave",
              "O Python para com KeyError; o JavaScript não para: devolve `undefined` e segue."
            ],
            [
              "Está errada: o JavaScript devolve `undefined` e segue",
              "Isso. O erro, se vier, aparece depois, quando alguém tenta usar o `undefined`."
            ],
            [
              "Está errada: em JavaScript, a chave que falta vale 0",
              "Não vem 0, vem `undefined`, que quer dizer \"não definido\"."
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
            "\"JavaScript é a mesma coisa que Java.\"",
            "São linguagens diferentes; o nome parecido foi marketing."
          ],
          [
            "\"Se não deu erro, a chave existe.\"",
            "Em JavaScript, chave que falta devolve `undefined`, sem erro. Confira o valor, e não só a ausência de mensagem."
          ],
          [
            "\"== e === são a mesma coisa.\"",
            "O == converte os tipos antes de comparar, e \"1\" == 1 dá true. O === compara sem converter."
          ],
          [
            "\"O recuo do JavaScript é obrigatório, como no Python.\"",
            "Em JavaScript, quem marca o bloco são as chaves. O recuo só ajuda a ler."
          ],
          [
            "\"JavaScript só roda no navegador.\"",
            "Com o Node.js, roda no terminal, com as suas permissões no PC."
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
          "p": "Como mudam, do Python para o JavaScript, a variável, o bloco e o \"mostrar na tela\"?",
          "r": [
            "Variável: o JavaScript usa let para o que muda e const para o que não recebe outro valor.",
            "Bloco: o Python usa dois-pontos e recuo; o JavaScript usa chaves.",
            "Na tela: print no Python, console.log no JavaScript."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que o JavaScript esconde erros que o Python mostra?",
          "r": [
            "Chave ou posição que não existe devolve `undefined`, em vez de parar.",
            "\"2\" + 1 vira \"21\", em vez de dar erro de tipo.",
            "O erro aparece depois, longe da causa, quando o valor estranho é usado."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "O que é JavaScript?, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/What_is_JavaScript",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Armazenando as informações que você precisa: variáveis (let, const e var), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Variables",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Comparações de igualdade e uniformidade (== e ===), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Trabalhando com JSON (JSON.parse e JSON.stringify), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/JSON",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Introduction to Node.js (o motor V8 fora do navegador)",
            "https://nodejs.org/learn/getting-started/introduction-to-nodejs",
            "oficial",
            "02/11/2026"
          ],
          [
            "const, MDN (a variável não pode receber outro valor, mas o conteúdo de uma lista pode mudar)",
            "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const",
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
          "JavaScript é uma linguagem à parte, com ideias que o Python não tem",
          "As ideias são as mesmas; mudam a grafia e alguns comportamentos."
        ],
        [
          "Para ler JavaScript, basta trocar cada print do Python por console.log",
          "A troca do print é só uma; blocos com chaves, === e `undefined` mudam a leitura."
        ],
        [
          "Mesmas ideias do Python, outra grafia, e mais erros que passam em silêncio",
          "Isso. Mesmas cláusulas, outra grafia, e atenção aos falsos amigos."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Em JavaScript, o que marca o começo e o fim de um bloco, como o de dentro de um if?",
        "o": [
          [
            "O recuo, como acontece no Python",
            "Em JavaScript, o recuo só ajuda a ler."
          ],
          [
            "As chaves, { no começo e } no fim",
            "Isso. O recuo é só para facilitar a leitura."
          ],
          [
            "As palavras begin e end, em inglês",
            "Essas são de outras linguagens. Em JavaScript, são as chaves."
          ]
        ],
        "c": 1
      },
      {
        "p": "O que `cliente.idade` devolve em JavaScript, se o objeto não tem a chave idade?",
        "o": [
          [
            "Devolve `undefined` e o programa segue",
            "Isso. Sem erro: o valor \"não definido\" segue adiante."
          ],
          [
            "Um erro que para o programa naquela mesma linha",
            "Esse seria o KeyError do Python. O JavaScript devolve `undefined` e segue."
          ],
          [
            "O número zero, o valor padrão de toda chave",
            "Não há valor padrão zero: vem `undefined`."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre let e const?",
        "Os dois criam variáveis. let é para o que vai mudar, como um total que cresce numa repetição; const é para o nome que não recebe outro valor depois de criado; uma lista em const ainda pode ganhar itens, só não pode ser trocada por outra. Em código antigo, você vai ver var, que faz o papel do let com regras mais confusas."
      ],
      [
        "O que é `undefined`?",
        "É o valor que o JavaScript devolve quando algo não existe ou não foi definido, como uma chave que falta num objeto. Ele não para o programa: segue adiante, e o erro aparece depois, quando alguém tenta usar o valor."
      ],
      [
        "Por que o Claude usa === e não ==?",
        "Porque === compara sem converter os tipos: \"1\" === 1 dá false. O == converte antes, e \"1\" == 1 dá true, o que esconde erros. Código moderno usa === quase sempre."
      ]
    ]
  },
  "2-11": {
    "tempo": 45,
    "video": "a2-11",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já recebeu do Claude um {{programa}} que funcionava e, ao pedir \"só um ajuste\", recebeu de volta algo que não funcionava mais, sem saber o que tinha mudado no {{codigo|código}}. Esta aula ensina o jeito de mexer num programa pronto que evita isso: uma mudança de cada vez, {{rodar|rodando}} depois de cada uma.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui você leu pedaços de código: uma {{variavel-python|variável}}, um `if`, um `for`, uma {{funcao|função}}, um {{json|JSON}}, uma {{mensagem-de-erro|mensagem de erro}}. Agora junta tudo num programa inteiro, de catorze linhas, que faz uma coisa útil: calcula o reajuste de um valor por um índice, como um aluguel corrigido pelo índice acumulado em 12 meses. Você não vai escrevê-lo: ele vem pronto. O seu trabalho é o de quem cuida de um programa feito por outra pessoa, ou pelo Claude: ler, prever, mudar uma coisa, rodar e conferir."
      ],
      [
        "p",
        "Esse é o trabalho que você mais vai fazer daqui para a frente. Quase nunca se começa do zero; quase sempre se parte de algo que funciona e se ajusta. E a maior fonte de dor de quem não lê código é pedir cinco mudanças de uma vez, ver o programa quebrar e não saber qual das cinco quebrou. A regra desta aula resolve isso sem exigir que você leia tudo."
      ],
      [
        "p",
        "O mesmo programa vai voltar duas vezes no curso. Na aula 10.4, ele ganha uma parte que chama o Claude pela {{api|API}}, para explicar o reajuste em português. Na aula 16.1, ele ganha testes, programas que conferem sozinhos se a conta continua certa. Guarde a pasta do laboratório: é o começo de um projeto que cresce com você."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num carro na oficina com um barulho estranho. O mecânico bom não troca, de uma vez, os freios, o escapamento e a suspensão: troca uma peça, dá uma volta no quarteirão e escuta. Se o barulho sumiu, achou; se não, desfaz e tenta a próxima. É mais lento por peça e muito mais rápido no total, porque cada volta no quarteirão diz alguma coisa. Mexer num programa é igual: uma mudança, uma rodada, uma conferência."
      ],
      [
        "quebra",
        "No carro, cada volta no quarteirão custa tempo e gasolina; num programa, rodar de novo custa um segundo, então não há desculpa para pular a conferência. Por outro lado, o carro avisa com barulho, e o programa às vezes erra calado: dá um número errado sem mensagem nenhuma. Por isso a conferência é ler a saída e comparar com o que você previu, e não só ver se apareceu erro."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Leia o mapa antes de mexer"
      ],
      [
        "p",
        "Este é o programa, o arquivo `reajuste.py`, mostrado no {{terminal}} com `Get-Content reajuste.py`:"
      ],
      [
        "saida",
        "# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = 4.5  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")"
      ],
      [
        "p",
        "Antes de mudar qualquer coisa, divida em partes. As linhas 2 e 3 são as **entradas**: o valor atual, 2.500 reais, e o índice, 4,5%, um número de exemplo, e não o índice de verdade de mês nenhum. O que vem depois do `#` na linha 3 é um comentário: o {{python|Python}} ignora, e ele serve para quem lê. As linhas 5 e 6 são a **regra**: a função `reajustar` recebe um valor e uma porcentagem e devolve o valor corrigido. As linhas 8 e 9 são a **conta**: usam a função e calculam o aumento. E as linhas 11 a 14 são a **saída**: o que aparece na tela."
      ],
      [
        "p",
        "Essa divisão é o mapa que guia cada mudança. Quer outro valor? Mexa na entrada. Quer outra fórmula? Mexa na regra. Quer outro texto na tela? Mexa na saída. Quase sempre, uma mudança boa mexe numa parte só. Rodando com `python reajuste.py`, a saída real é:"
      ],
      [
        "saida",
        "Valor atual: R$ 2500.00\nÍndice: 4.5%\nNovo valor: R$ 2612.50\nAumento: R$ 112.50"
      ],
      [
        "p",
        "A conta confere: 2.500 vezes 1,045 dá 2.612,50, e o aumento é 112,50. O programa usa ponto como separador decimal, do jeito americano, porque é assim que o Python escreve números; trocar para o jeito brasileiro é uma mudança possível, e das mais pedidas."
      ],
      [
        "p",
        "As linhas de saída usam a {{f-string}}, que apareceu de passagem nas aulas 2.8 e 2.10 e aqui ganha explicação: um texto com um `f` antes das aspas, em que o que está entre chaves é trocado pelo valor. `f\"Novo valor: R$ {novo_valor:.2f}\"` mostra o texto e, no lugar das chaves, o novo valor com duas casas decimais; é o `:.2f` que diz \"duas casas\". Sem ele, apareceria `2612.5`."
      ],
      [
        "h3",
        "Uma mudança de cada vez"
      ],
      [
        "p",
        "A regra tem quatro passos, e vale tanto para quando você mexe quanto para quando pede ao Claude: 1) diga, antes, o que espera ver na tela; 2) mude uma coisa só; 3) rode; 4) compare a saída com o que você previu. Se bateu, a mudança está boa, e você segue para a próxima. Se não bateu, você sabe exatamente qual mudança causou a diferença, porque foi a única."
      ],
      [
        "p",
        "Primeira mudança, numa entrada: o valor atual passa de 2.500 para 3.200. Previsão: o novo valor é 3.200 vezes 1,045, que dá 3.344, e o aumento, 144. Saída real depois da mudança:"
      ],
      [
        "saida",
        "Valor atual: R$ 3200.00\nÍndice: 4.5%\nNovo valor: R$ 3344.00\nAumento: R$ 144.00"
      ],
      [
        "p",
        "Bateu. Segunda mudança, na outra entrada: o índice passa de 4,5 para menos 1,2, como num ano de deflação, em que o índice acumulado fica negativo. Previsão: 3.200 vezes 0,988, que dá 3.161,60, uma queda de 38,40. Saída real:"
      ],
      [
        "saida",
        "Valor atual: R$ 3200.00\nÍndice: -1.2%\nNovo valor: R$ 3161.60\nAumento: R$ -38.40"
      ],
      [
        "p",
        "A conta está certa, mas a última linha diz \"Aumento: R$ -38.40\", um aumento negativo. Ninguém escreveria assim num relatório. Isso não é erro do Python: é uma regra que faltava. E é o que a analogia avisou: o programa não reclamou, só disse uma coisa esquisita, e quem percebe é quem lê a saída."
      ],
      [
        "p",
        "Terceira mudança, na saída: se o aumento for negativo, escrever \"Redução\" com o valor positivo. Isso é uma condição, como as da aula 2.4. A última linha do programa vira quatro, mostradas aqui com `Get-Content reajuste.py | Select-Object -Last 4`:"
      ],
      [
        "saida",
        "if aumento >= 0:\n    print(f\"Aumento: R$ {aumento:.2f}\")\nelse:\n    print(f\"Redução: R$ {-aumento:.2f}\")"
      ],
      [
        "p",
        "O `-aumento` troca o sinal: menos com menos dá mais. Saída real:"
      ],
      [
        "saida",
        "Valor atual: R$ 3200.00\nÍndice: -1.2%\nNovo valor: R$ 3161.60\nRedução: R$ 38.40"
      ],
      [
        "p",
        "Três mudanças, três rodadas, três conferências. Se você tivesse pedido as três de uma vez e a saída viesse errada, não saberia qual das três errou."
      ],
      [
        "h3",
        "Mudar a regra: o erro que não dá erro"
      ],
      [
        "p",
        "Mudanças na regra são as mais perigosas, porque o programa continua rodando e só o número fica errado. Um exemplo clássico: esquecer de dividir a porcentagem por 100, escrevendo `valor * (1 + porcentagem)`. Com o valor de 2.500 e o índice de 4,5, a saída real é:"
      ],
      [
        "saida",
        "Valor atual: R$ 2500.00\nÍndice: 4.5%\nNovo valor: R$ 13750.00\nAumento: R$ 11250.00"
      ],
      [
        "p",
        "Nenhuma mensagem de erro, e um aluguel que mais que quintuplicou. A previsão feita antes, \"por volta de 2.600\", é o que denuncia o problema na hora. Por isso o passo 1 da regra, prever, não é enfeite: é ele que transforma \"rodou\" em \"está certo\"."
      ],
      [
        "h3",
        "Pedir um valor a quem usa: input e o texto que parece número"
      ],
      [
        "p",
        "Uma mudança natural é fazer o programa perguntar o índice, em vez de deixá-lo escrito no código. Para isso, o Python tem o `input`: `input(\"Índice em %: \")` mostra a pergunta, espera a pessoa digitar e apertar Enter, e devolve o que ela digitou. O detalhe que derruba todo mundo: o `input` devolve sempre texto, uma {{string}}, mesmo que a pessoa digite um número. O texto `\"4.5\"` não é o número 4,5, e conta com texto dá o `TypeError` da aula 2.8."
      ],
      [
        "p",
        "Para transformar o texto em número com casas decimais, existe o {{float}}: `float(\"4.5\")` dá o número 4.5. Por isso a linha certa é `indice = float(input(\"Índice em %: \"))`: primeiro pergunta, depois converte. Com essa linha, digitando 4.5, a saída real traz `Novo valor: R$ 2612.50`. E se a pessoa digitar `4,5`, com vírgula, do jeito brasileiro? O `float` não entende vírgula, e o programa para. Saída real, com o `4,5` que a pessoa digitou aparecendo depois da pergunta:"
      ],
      [
        "saida",
        "Índice em %: 4,5\nTraceback (most recent call last):\n  File \"C:\\Projetos\\reajuste\\reajuste.py\", line 3, in <module>\n    indice = float(input(\"Índice em %: \"))\n             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nValueError: could not convert string to float: '4,5'"
      ],
      [
        "p",
        "Em português: \"não consegui converter o texto em número: 4,5\". É um `ValueError`, \"erro de valor\": o tipo certo, texto, com um conteúdo que não serve. Num programa feito para brasileiros, uma mudança a pedir seria aceitar as duas formas, trocando a vírgula por ponto antes de converter. É mais uma mudança, e, pela regra, vem depois, sozinha. O laboratório quebrado, no fim da aula, mostra o que acontece quando o `float` é esquecido."
      ],
      [
        "h3",
        "Como pedir mudanças ao Claude"
      ],
      [
        "p",
        "Quase sempre quem vai editar é o Claude, e a regra vira o jeito de pedir. Um pedido por vez, com o limite e a conferência: \"No reajuste.py, mude só o valor atual para 3200. Não mexa em mais nada. Rode e me mostre a saída exata.\" O \"não mexa em mais nada\" importa, porque modelos gostam de melhorar o que ninguém pediu, e uma melhoria não pedida é uma segunda mudança escondida. O \"me mostre a saída exata\" deixa a conferência com você, e não com o resumo dele."
      ],
      [
        "p",
        "Depois de cada mudança que funcionou, guarde a versão. No módulo 3, isso vai ser um {{commit}} no {{git|Git}}; por enquanto, uma cópia do arquivo com outro nome basta. Assim, se a próxima mudança der errado, você volta para a última que funcionava, em vez de tentar desfazer de memória."
      ],
      [
        "p",
        "Quando não seguir a regra ao pé da letra: numa mudança grande de propósito, como \"transforme este programa numa página com botões\", não dá para ir de linha em linha. Aí a regra vira: um pedido grande por vez, com uma previsão clara do resultado, como \"uma página com dois campos e um botão que mostra o novo valor\", e a conferência no fim, antes do próximo pedido."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso {{instalar}} algo?** Só o Python, que entra no seu PC no laboratório da aula 2.2. O programa não usa nenhuma {{biblioteca}} de fora.",
          "**E se eu estragar o arquivo?** O {{comando}} do laboratório recria o arquivo original em um segundo. Por isso o laboratório começa por ele.",
          "**Posso usar o Bloco de Notas para mudar o código?** Pode, para mudanças pequenas, como trocar um número. Só cuide de manter os espaços do começo das linhas, que em Python fazem parte do código, como a aula 2.8 mostrou. Para mudanças maiores, peça ao Claude.",
          "**Por que o resultado sai com ponto, e não com vírgula?** Porque o Python escreve números do jeito americano. Mostrar 2.612,50 é possível, e é uma boa mudança para pedir ao Claude depois do laboratório, sozinha.",
          "**Por que guardar este programa?** Porque ele volta na aula 10.4, chamando o Claude, e na 16.1, com testes."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: centavos que somem e o tipo Decimal",
          "blocos": [
            [
              "p",
              "O computador guarda números com casas decimais em binário, e alguns valores simples não cabem exatos: `0.1 + 0.2` dá `0.30000000000000004`, no Python e no {{javascript|JavaScript}}, em teste real. Na maioria das contas, o `:.2f` arredonda e ninguém percebe. Em contabilidade, em que um centavo errado em mil linhas vira problema, o Python tem o tipo `Decimal`, que faz contas decimais exatas; a documentação oficial o recomenda para aplicações contábeis."
            ],
            [
              "p",
              "Para mostrar o número no padrão brasileiro, um caminho simples é formatar com separador de milhar e depois trocar ponto por vírgula, com cuidado para não trocar duas vezes. É uma mudança típica para pedir ao Claude, com a regra: sozinha, com a previsão \"2.612,50\"."
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
          "pergunta": "Este é o programa da aula. O que você acha que aparece na tela? Depois de ver a resposta, use os botões para fazer uma mudança de cada vez.",
          "codigo": "# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = 4.5  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")",
          "linguagem": "python",
          "resposta": "Aparecem quatro linhas: `Valor atual: R$ 2500.00`, `Índice: 4.5%`, `Novo valor: R$ 2612.50` e `Aumento: R$ 112.50` (saída real). A função multiplica 2.500 por 1 mais 4,5 dividido por 100, ou seja, por 1,045, e o `:.2f` mostra duas casas decimais. Cada botão abaixo parte do programa original, com 2.500 e 4,5, faz uma mudança só e mostra, embaixo do código, a saída real depois dela. Por isso o botão do índice dá 2.470,00, e não os 3.161,60 do texto, que somou as duas mudanças.",
          "vivo": [
            [
              "Trocar o valor para 3200",
              "# Calculadora de reajuste\nvalor_atual = 3200.00\nindice = 4.5  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")",
              "Valor atual: R$ 3200.00\nÍndice: 4.5%\nNovo valor: R$ 3344.00\nAumento: R$ 144.00"
            ],
            [
              "Trocar só o índice para -1.2",
              "# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = -1.2  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")",
              "Valor atual: R$ 2500.00\nÍndice: -1.2%\nNovo valor: R$ 2470.00\nAumento: R$ -30.00"
            ],
            [
              "Esquecer de dividir por 100",
              "# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = 4.5  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")",
              "Valor atual: R$ 2500.00\nÍndice: 4.5%\nNovo valor: R$ 13750.00\nAumento: R$ 11250.00"
            ],
            [
              "Voltar ao original",
              "# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = 4.5  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")",
              "Valor atual: R$ 2500.00\nÍndice: 4.5%\nNovo valor: R$ 2612.50\nAumento: R$ 112.50"
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
          "p": "Você quer que o programa use 3.200 como valor atual e mostre o resultado com vírgula. Qual é o jeito certo de pedir ao Claude?",
          "o": [
            [
              "Pedir as duas mudanças juntas, numa frase só, para ganhar tempo",
              "Se o resultado vier errado, você não vai saber qual das duas errou."
            ],
            [
              "Pedir primeiro só o valor, rodar e conferir; depois, a vírgula",
              "Isso. Uma mudança, uma rodada, uma conferência, e depois a próxima."
            ],
            [
              "Pedir primeiro a vírgula, porque é a mudança mais difícil das duas",
              "A ordem importa menos do que fazer uma de cada vez, conferindo entre elas."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ao Claude \"mude o índice para -1.2\" e ele respondeu: \"Feito. Mudei o índice e, aproveitando, troquei o nome da função para calcular_reajuste e arredondei o resultado. Rodei e está tudo certo.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: fez o que pedi e, de quebra, ainda melhorou o programa",
              "Ele fez três mudanças onde você pediu uma. Se algo quebrar, não dá para saber qual foi."
            ],
            [
              "Está errada só porque o nome novo da função ficou comprido demais",
              "O problema não é o nome em si: são as mudanças não pedidas, que escondem a origem de qualquer erro."
            ],
            [
              "Está errada: fez mudanças que não pedi; quero só a do índice e a saída exata",
              "Isso. Peça para desfazer as outras e mostrar a saída real, para você conferir."
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
            "\"Pedi cinco ajustes de uma vez e agora não funciona.\"",
            "Volte à última versão que funcionava e refaça um ajuste por vez, rodando depois de cada um."
          ],
          [
            "\"Rodou sem erro, então está certo.\"",
            "Erro de regra não dá mensagem. Compare a saída com a sua previsão: 13.750 num aluguel de 2.500 denuncia na hora."
          ],
          [
            "\"O input devolve um número.\"",
            "Devolve texto, sempre. Para fazer conta, converta com float, ou com int para números inteiros."
          ],
          [
            "\"Digitei 4,5 e deu ValueError.\"",
            "O float só entende ponto. Digite 4.5, ou peça ao Claude para aceitar vírgula também."
          ],
          [
            "\"O Claude melhorou umas coisas a mais, que bom.\"",
            "Melhoria não pedida é mudança escondida. Peça sempre \"não mexa em mais nada\"."
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
          "p": "Quais são os quatro passos para mudar um programa pronto?",
          "r": [
            "Prever o que deve aparecer na tela.",
            "Mudar uma coisa só.",
            "Rodar.",
            "Comparar a saída com a previsão antes de seguir."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que um input seguido de uma conta costuma dar erro, e como se resolve?",
          "r": [
            "O input devolve sempre texto, mesmo quando a pessoa digita um número.",
            "Texto numa conta dá TypeError.",
            "Converter o texto com float, em volta do input, resolve; vírgula no lugar do ponto ainda dá ValueError."
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
          "titulo": "Mude um programa, uma coisa de cada vez",
          "lugar": "No PC, no PowerShell e no Bloco de Notas (e no Claude Code, nos passos 13 a 15)",
          "tempo": "20 minutos",
          "antes": "Você vai criar o reajuste.py com um comando pronto, rodar, fazer duas mudanças no Bloco de Notas, prevendo o resultado antes de cada uma, e pedir a terceira ao {{claude-code|Claude Code}}, do jeito desta aula. Precisa do Claude Code instalado, como a aula 0.0 ensina, e do Python, que entra no seu PC no laboratório da aula 2.2: se `python --version` não responder com um número, faça antes os passos de instalação de lá. Os comandos e as saídas foram rodados de verdade em 02/11/2026, no Windows 11, com Python 3.12. A edição no Bloco de Notas e os passos com o Claude Code não foram testados de ponta a ponta: como o Claude conversa, as frases e o código exato podem variar, e a saída mostrada no passo 14 é a do programa certo, rodado à parte. Pelo app do Claude: dá para colar o programa numa conversa e pedir a mesma mudança, mas não rodá-lo no seu PC. Guarde a pasta no fim: o programa volta nas aulas 10.4 e 16.1.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando, que cria a pasta e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\reajuste | Out-Null; Set-Location C:\\Projetos\\reajuste",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\reajuste."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria o reajuste.py. Se o {{terminal}} avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\n# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = 4.5  # porcentagem acumulada em 12 meses (exemplo)\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\naumento = novo_valor - valor_atual\n\nprint(f\"Valor atual: R$ {valor_atual:.2f}\")\nprint(f\"Índice: {indice}%\")\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\nprint(f\"Aumento: R$ {aumento:.2f}\")\n'@ | Set-Content -Encoding utf8 reajuste.py",
              "espera": "Só o cursor. O arquivo reajuste.py está na pasta."
            },
            {
              "faz": "Rode o programa.",
              "cola": "python reajuste.py",
              "saida": "Valor atual: R$ 2500.00\nÍndice: 4.5%\nNovo valor: R$ 2612.50\nAumento: R$ 112.50",
              "espera": "As quatro linhas, com Novo valor: R$ 2612.50."
            },
            {
              "faz": "Abra o arquivo no Bloco de Notas.",
              "cola": "notepad reajuste.py",
              "espera": "O Bloco de Notas abre com o programa."
            },
            {
              "faz": "No Bloco de Notas, na linha 2, troque 2500.00 por 3200.00, sem mexer em mais nada.",
              "espera": "A linha 2 fica `valor_atual = 3200.00`; o resto do arquivo continua igual."
            },
            {
              "faz": "Salve com Ctrl+S.",
              "espera": "O arquivo é salvo. Antes de rodar, preveja o novo valor: 3.200 vezes 1,045."
            },
            {
              "faz": "Rode de novo.",
              "cola": "python reajuste.py",
              "saida": "Valor atual: R$ 3200.00\nÍndice: 4.5%\nNovo valor: R$ 3344.00\nAumento: R$ 144.00",
              "espera": "Novo valor: R$ 3344.00 e Aumento: R$ 144.00. Se bateu com a previsão, a mudança está boa."
            },
            {
              "faz": "No Bloco de Notas, na linha 3, troque 4.5 por -1.2.",
              "espera": "A linha 3 começa com `indice = -1.2`; o comentário depois do # pode ficar como está."
            },
            {
              "faz": "Salve com Ctrl+S.",
              "espera": "O arquivo é salvo. Antes de rodar, preveja: o valor vai subir ou cair? A previsão certa é uma queda."
            },
            {
              "faz": "Rode de novo.",
              "cola": "python reajuste.py",
              "saida": "Valor atual: R$ 3200.00\nÍndice: -1.2%\nNovo valor: R$ 3161.60\nAumento: R$ -38.40",
              "espera": "Novo valor: R$ 3161.60 e a linha estranha Aumento: R$ -38.40. A conta está certa; falta uma regra."
            },
            {
              "faz": "Feche o Bloco de Notas.",
              "espera": "Fica só o PowerShell, ainda na pasta C:\\Projetos\\reajuste."
            },
            {
              "faz": "No PowerShell, abra o Claude Code nesta mesma pasta.",
              "cola": "claude",
              "espera": "Na primeira vez nesta pasta, o Claude Code pergunta se você confia nela: confirme. Depois, ele mostra a pasta C:\\Projetos\\reajuste no alto da tela, com uma caixa para você escrever."
            },
            {
              "faz": "Cole este pedido na caixa do Claude Code. Se ele pedir permissão para editar ou rodar, aceite.",
              "cola": "No arquivo reajuste.py desta pasta, faça uma mudança só: quando o aumento for negativo, mostre \"Redução\" com o valor positivo, em vez de \"Aumento\" com sinal de menos. Não mexa em mais nada. Depois rode python reajuste.py e me mostre a saída exata, sem resumir.",
              "saida": "Valor atual: R$ 3200.00\nÍndice: -1.2%\nNovo valor: R$ 3161.60\nRedução: R$ 38.40",
              "espera": "O Claude mostra a mudança, em geral um if e um else no fim do arquivo, e a saída termina em Redução: R$ 38.40. Se ele mexeu em outra coisa, peça para desfazer."
            },
            {
              "faz": "Saia do Claude Code, para o terminal voltar a ser o PowerShell: digite este comando na caixa dele e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha, e volta a linha do PowerShell, terminando em `C:\\Projetos\\reajuste>`. Sem isso, o comando do próximo passo iria para a caixa do Claude, e não para o PowerShell."
            },
            {
              "faz": "No PowerShell, guarde a versão que funciona com uma cópia de outro nome.",
              "cola": "Copy-Item reajuste.py reajuste_v1.py",
              "espera": "Nada aparece, e a pasta agora tem reajuste.py e reajuste_v1.py. No módulo 3, isso vira um commit."
            }
          ],
          "naoTestado": "A edição no Bloco de Notas (passos 6, 7, 9 e 10) e os passos com o Claude Code (13 a 15) não foram rodados de ponta a ponta: exigem a tela do Windows e o Claude Code interativo. Os comandos do PowerShell e todas as saídas do Python, inclusive a do passo 14, foram rodados de verdade em 02/11/2026, com o programa já mudado à parte.",
          "errado": "se aparecer `can't open file` com o caminho do reajuste.py e `[Errno 2] No such file or directory`, o terminal está em outra pasta: rode o passo 2 de novo. Se aparecer `IndentationError`, um espaço do começo de alguma linha foi apagado no Bloco de Notas: recrie o arquivo com o passo 3 e refaça a mudança. Se o PowerShell não reconhecer `python`, ou falar da Microsoft Store, o Python não está instalado ou não está no {{path|PATH}}: siga os passos de instalação do laboratório da aula 2.2. Se o `Copy-Item` do último passo responder com texto do Claude, você ainda estava dentro do Claude Code: digite `/exit` e cole de novo. Se o Claude mudar mais do que o pedido, diga: \"desfaça tudo, menos a mudança que eu pedi\"."
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
          "texto": "Alguém mudou o programa para perguntar o índice, em vez de deixá-lo escrito no código, rodou e digitou 4.5. Veio o erro abaixo. Antes de ver a causa, ache a linha em que o problema começa e pense no porquê. Para reproduzir no PowerShell, na pasta do laboratório, cole o bloco e, quando aparecer a pergunta, digite 4.5 e aperte Enter.",
          "cola": "@'\n# Calculadora de reajuste\nvalor_atual = 2500.00\nindice = input(\"Índice em %: \")\n\ndef reajustar(valor, porcentagem):\n    return valor * (1 + porcentagem / 100)\n\nnovo_valor = reajustar(valor_atual, indice)\nprint(f\"Novo valor: R$ {novo_valor:.2f}\")\n'@ | Set-Content -Encoding utf8 quebrado.py\npython quebrado.py",
          "saida": "Índice em %: 4.5\nTraceback (most recent call last):\n  File \"C:\\Projetos\\reajuste\\quebrado.py\", line 8, in <module>\n    novo_valor = reajustar(valor_atual, indice)\n                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"C:\\Projetos\\reajuste\\quebrado.py\", line 6, in reajustar\n    return valor * (1 + porcentagem / 100)\n                        ~~~~~~~~~~~~^~~~~\nTypeError: unsupported operand type(s) for /: 'str' and 'int'",
          "dica": "A mensagem aponta a linha 6, dentro da função, mas a função não mudou e funcionava antes. O erro começa na linha 3, onde o índice é criado: compare o que o input devolve com o que a conta da linha 6 precisa.",
          "resposta": "A linha 3 guarda em `indice` o que o `input` devolve, e o `input` devolve sempre texto: `\"4.5\"`, e não o número 4,5. A conta da linha 6 tenta dividir esse texto por 100, e a última linha diz isso: \"tipos que não combinam para a divisão: str e int\", texto e número inteiro. O trajeto, lido de baixo para cima, leva da explosão, na linha 6, à chamada, na linha 8, e de lá à origem do valor, na linha 3. O conserto é converter na entrada: `indice = float(input(\"Índice em %: \"))`."
        }
      ],
      [
        "fontes",
        [
          [
            "Uma introdução informal ao Python (números e textos), tutorial oficial",
            "https://docs.python.org/pt-br/3/tutorial/introduction.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Entrada e saída (f-strings e formatação com casas decimais), tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/inputoutput.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Funções embutidas (input e float), documentação do Python",
            "https://docs.python.org/pt-br/3/builtins/functions.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Aritmética de ponto flutuante: problemas e limitações (Decimal para aplicações contábeis), tutorial oficial do Python",
            "https://docs.python.org/pt-br/3/tutorial/floatingpoint.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Revisiting Rock Paper Scissors (o mesmo projeto, retomado com o que se aprendeu depois), The Odin Project",
            "https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors",
            "comunidade",
            "02/11/2026"
          ],
          [
            "Segurança, Claude Code (o diálogo de confiança aparece na primeira vez em cada pasta)",
            "https://code.claude.com/docs/pt/security",
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
          "Se o programa rodou sem mensagem de erro, a mudança está certa",
          "Erro de regra não dá mensagem: só a comparação com a previsão mostra."
        ],
        [
          "Peça todas as mudanças ao Claude de uma vez e confira tudo só no fim",
          "Se der errado, você não vai saber qual mudança causou o problema."
        ],
        [
          "Uma mudança por vez, prevendo antes e conferindo a saída depois",
          "Isso. Prever, mudar uma coisa, rodar e comparar."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "O que o input do Python devolve quando a pessoa digita 4.5?",
        "o": [
          [
            "O número 4,5, pronto para entrar direto na conta",
            "Parece, mas o input devolve sempre texto."
          ],
          [
            "O texto \"4.5\", que ainda precisa virar número com float",
            "Isso. Para fazer conta, converta com float."
          ],
          [
            "Um erro, porque o input não aceita o ponto decimal",
            "O input aceita qualquer coisa digitada; quem não aceita vírgula é o float."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você mudou o valor e o índice ao mesmo tempo, e o resultado saiu errado. Qual o melhor próximo passo?",
        "o": [
          [
            "Voltar à versão anterior e refazer uma mudança de cada vez",
            "Isso. Assim você descobre qual das duas causou o erro."
          ],
          [
            "Fazer uma terceira mudança, para compensar o erro das outras",
            "Uma terceira mudança deixa ainda mais difícil achar a causa."
          ],
          [
            "Apagar o programa inteiro e pedir um novo ao Claude, do zero",
            "Você perderia o que funcionava. Voltar à última versão boa é mais rápido."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Por que uma mudança de cada vez?",
        "Porque, se a saída sair errada, você sabe exatamente o que causou: foi a única coisa que mudou. Com cinco mudanças juntas, você teria cinco suspeitos. Rodar de novo custa um segundo."
      ],
      [
        "O que é o :.2f?",
        "É a formatação de duas casas decimais dentro de uma f-string. f\"{2612.5:.2f}\" mostra 2612.50. Sem ele, o Python mostraria 2612.5."
      ],
      [
        "Por que deu ValueError quando digitei 4,5?",
        "Porque o float só entende ponto como separador decimal. Digite 4.5, ou peça ao Claude que o programa troque a vírgula por ponto antes de converter, como uma mudança separada."
      ]
    ]
  },
  "2-12": {
    "tempo": 45,
    "video": "a2-12",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O Claude disse \"pronto, a página está funcionando\", você abriu e a foto não apareceu, ou o botão não fez nada. Esta aula ensina a abrir o raio-X do {{navegador}}, as {{devtools|ferramentas do desenvolvedor}}, e achar com os próprios olhos o elemento, o erro vermelho e o pedido que falhou.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Todo navegador de computador, o Chrome e o Edge inclusive, traz um painel escondido, aberto pela tecla F12, chamado {{devtools|ferramentas do desenvolvedor}}. Ele mostra a página por dentro: as peças de {{html|HTML}} de que ela é feita, os erros que o {{javascript|JavaScript}} encontrou e cada pedido que a página fez à {{internet}}, com o {{codigo-de-status|código de status}} da aula 2.9. É a mesma ferramenta que os programadores usam o dia inteiro, e não exige {{instalar}} nada."
      ],
      [
        "p",
        "Para quem não lê {{codigo|código}}, ela é o jeito de conferir sem depender da palavra do Claude. \"Funcionou\" vira uma pergunta que você responde sozinho: tem erro vermelho no Console? Algum pedido saiu com 404 na aba Rede? E, quando houver, você leva ao Claude o recado exato: \"a imagem foto.jpg deu 404\" vale mais que \"a foto não aparece\". Para quem mexe em páginas de venda toda semana, isso economiza conversas inteiras."
      ],
      [
        "p",
        "O F12 também mostra uma coisa que muita gente não sabe: qualquer texto de qualquer página pode ser mudado na sua tela, em segundos. Saber disso protege você de um golpe comum, e a seção sobre editar a página explica."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "O F12 é um raio-X da página. Por fora, você vê o paciente: o título, a foto, o botão. No raio-X aparece o esqueleto, a estrutura que segura tudo, que é a aba Elementos. Aparece também a ficha de queixas, com o que doeu e onde, que é o Console. E aparece o registro de tudo o que entrou e saiu do corpo, o que foi pedido e o que chegou, que é a aba Rede."
      ],
      [
        "quebra",
        "Um raio-X de verdade só olha; o F12 deixa você desenhar no filme. Você pode mudar um texto, apagar um botão, trocar uma cor, e a página muda na hora. Mas a mudança fica só na sua tela, na cópia que o seu navegador montou: ninguém mais vê, e ela some quando você recarrega a página. Para mudar a página de verdade, é preciso mudar o arquivo, e isso o Claude faz."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Abrir o raio-X"
      ],
      [
        "p",
        "No Chrome ou no Edge, no computador, há três jeitos: a tecla F12; o atalho Ctrl+Shift+I; ou clicar com o botão direito em qualquer parte da página e escolher Inspecionar. O painel abre ao lado ou embaixo da página, com abas no alto. No Edge em português, as três que importam se chamam Elementos, Console e Rede, segundo a documentação da Microsoft; o Chrome usa os mesmos nomes quando está em português, ou Elements, Console e Network, em inglês. Se uma aba não aparecer, ela está guardada no botão de mais ferramentas, ao lado das abas."
      ],
      [
        "p",
        "No celular não há F12: os navegadores de celular não trazem esse painel. Existe um jeito de inspecionar um celular ligado ao PC por cabo, a depuração remota, mas é coisa para depois. O que você pode fazer no PC é imitar uma tela de celular: no painel, o botão de emulação de dispositivo, com o desenho de um celular e um tablet, mostra a página na largura de um aparelho. A documentação da Microsoft avisa que é uma aproximação: a página não {{rodar|roda}} num celular de verdade."
      ],
      [
        "h3",
        "Elementos: o esqueleto da página"
      ],
      [
        "p",
        "A aba Elementos mostra o HTML da página como uma árvore, com triângulos para abrir e fechar cada parte. Passe o mouse por uma linha, e a peça correspondente fica destacada na página. O caminho contrário é ainda mais útil: o Inspecionar do botão direito, ou o botão de seta no canto do painel, deixa você clicar numa peça da página, e a árvore pula direto para o {{elemento-html|elemento}} dela."
      ],
      [
        "p",
        "Um exemplo inteiro, com a página de teste do laboratório, uma loja de um produto só. Clique com o botão direito na área da foto que não apareceu e escolha Inspecionar. A árvore mostra `<img src=\"foto.jpg\" alt=\"Foto do caderno\" width=\"200\">`. O `src` é o endereço da imagem: o navegador procurou um arquivo `foto.jpg` na mesma pasta da página. O `alt` é o texto que aparece no lugar da foto quando ela não carrega, e que os leitores de tela leem para quem não enxerga. Agora você sabe exatamente o que pedir: \"a página procura foto.jpg na pasta dela; confira se o arquivo existe com esse nome\"."
      ],
      [
        "imagem",
        {
          "src": "img/aulas/2-12-pagina.png",
          "alt": "A página de teste aberta no Chrome: o título Caderno universitário; no lugar da foto, um ícone de imagem quebrada com o texto Foto do caderno; a frase Preço: carregando; e o botão Comprar.",
          "legenda": "A página do laboratório no Chrome, com 390 px de largura. No lugar da foto, o ícone de imagem quebrada e o texto do `alt`; o preço parado em \"carregando\". Captura real, Chrome 157, 08/11/2026.",
          "largura": 390,
          "altura": 187
        }
      ],
      [
        "p",
        "Um detalhe que confunde: a aba Elementos mostra a página como ela está agora, e não o arquivo original. Se o JavaScript mudou um texto depois de a página carregar, a árvore mostra o texto novo. O arquivo original, do jeito que veio do {{servidor}}, aparece com Ctrl+U, o \"ver código-fonte\", em outra aba. Essa versão viva da página, guardada na memória do navegador, tem nome: {{dom|DOM}}."
      ],
      [
        "h3",
        "Editar na hora: útil, e some ao recarregar"
      ],
      [
        "p",
        "Dê dois cliques num texto dentro da árvore, apague, digite outro e aperte Enter: a página muda na hora. Dá para mudar o título, o preço, a cor; dá para apagar um elemento inteiro com a tecla Delete, como mostra a documentação da Microsoft. Serve para testar uma ideia antes de pedir ao Claude (\"como fica o título com duas palavras a menos?\") e para tirar um print de como você quer que fique."
      ],
      [
        "p",
        "E serve para entender por que um print não prova nada. Em dez segundos, qualquer pessoa troca o saldo de uma página de banco, o valor de um comprovante ou o resultado de uma consulta, tira um print e manda. A página parece verdadeira porque é a página verdadeira, editada só na tela de quem tirou o print. Quando alguém mandar um print como prova de pagamento, a prova é o extrato, não a imagem."
      ],
      [
        "p",
        "Ao recarregar com F5, tudo volta ao original, porque o navegador busca de novo o arquivo no servidor e monta a página do zero. Nada do que você editou foi salvo em lugar nenhum, nem no seu PC, nem no {{site}}. Quando não usar: para \"consertar\" uma página. A edição no F12 é um rascunho na sua tela; o conserto de verdade é no arquivo."
      ],
      [
        "h3",
        "Console: a ficha de queixas"
      ],
      [
        "p",
        "O {{console-navegador|Console}} mostra as mensagens da página: avisos em amarelo e erros em vermelho, cada um com o arquivo e a linha num link à direita. Na página de teste, aberta numa versão recente do Chrome, ele registrou estes três erros reais:"
      ],
      [
        "saida",
        "Uncaught ReferenceError: precoo is not defined\n    at erro.html:14:67\nFailed to load resource: the server responded with a status of 404 (File not found)\nFailed to load resource: the server responded with a status of 404 (File not found)"
      ],
      [
        "p",
        "Leia como na aula 2.8, procurando o tipo e o lugar. O primeiro é um `ReferenceError`, \"erro de referência\": o JavaScript usou o nome `precoo`, com dois \"o\", que não existe, na linha 14, coluna 67, do arquivo `erro.html`. É o primo do `NameError` do {{python|Python}}, e o \"Uncaught\" na frente quer dizer \"ninguém tratou esse erro\". Por causa dele, o preço ficou em \"carregando\" para sempre. Os outros dois dizem \"falhou ao carregar um recurso: o servidor respondeu com 404\". Um é a foto; o outro é o `favicon.ico`, o iconezinho da aba, que o navegador procura sozinho em todo site. Esse segundo 404 é inofensivo: a página nem pediu ícone."
      ],
      [
        "p",
        "O Console também aceita {{comando|comandos}} em JavaScript, digitados embaixo das mensagens. Você não precisa disso, e há um cuidado importante: nunca cole no Console um código que alguém mandou, mesmo que a mensagem prometa um desconto ou um prêmio. O código roda dentro da página aberta, com você já logado no site, e pode agir como se fosse você. Os navegadores podem até mostrar um aviso e pedir confirmação antes de deixar colar; se alguém pedir que você confirme, desconfie."
      ],
      [
        "h3",
        "Rede: tudo o que entrou e saiu"
      ],
      [
        "p",
        "A aba Rede lista cada pedido que a página fez, um por linha, com o nome, o código de status, o tipo e o tempo. Ela só registra com o painel aberto: a documentação da Microsoft diz com todas as letras que a ferramenta só registra a atividade depois que você a abre. Por isso, abra a aba e recarregue a página com F5 para ver a lista desde o começo."
      ],
      [
        "p",
        "Na página de teste, na primeira vez que ela abriu, os pedidos reais foram três: `erro.html`, com status 200, o documento; `foto.jpg`, com 404, que aparece em vermelho; e `favicon.ico`, também 404. Depois de um F5, o `erro.html` costuma voltar com 304, o \"não mudou\" da aula 2.9: o navegador perguntou se o arquivo tinha mudado e, como não tinha, usou a cópia que já guardava. O `favicon.ico` pode nem ser pedido de novo. Clique numa linha e aparecem os detalhes: em Cabeçalhos, o endereço completo, o método GET e o código de status, os mesmos da aula 2.9; em Resposta, o que o servidor devolveu; em Visualização, a resposta formatada, o lugar mais confortável para ler um {{json|JSON}}. Os botões de filtro no alto separam por tipo: Fetch/XHR mostra só os pedidos feitos pelo JavaScript, como as chamadas a uma {{api|API}}; Img, só as imagens."
      ],
      [
        "p",
        "O servidor também registra cada pedido do lado dele. No laboratório, a página é servida por um servidor de teste do próprio Python, e a janela dele mostrou, de verdade:"
      ],
      [
        "saida",
        "127.0.0.1 - - [02/Nov/2026 04:44:38] \"GET /erro.html HTTP/1.1\" 200 -\n127.0.0.1 - - [02/Nov/2026 04:44:38] code 404, message File not found\n127.0.0.1 - - [02/Nov/2026 04:44:38] \"GET /foto.jpg HTTP/1.1\" 404 -\n127.0.0.1 - - [02/Nov/2026 04:44:38] code 404, message File not found\n127.0.0.1 - - [02/Nov/2026 04:44:38] \"GET /favicon.ico HTTP/1.1\" 404 -"
      ],
      [
        "p",
        "É a mesma história contada pelos dois lados: o navegador pediu três coisas, e o servidor achou uma e não achou duas."
      ],
      [
        "h3",
        "Um caso do começo ao fim"
      ],
      [
        "p",
        "Junte tudo num caso que você ainda vai viver. O Claude publicou uma página nova e disse \"funcionou\". Você abre, e a foto do produto não aparece. Primeiro: F12, aba Console. Há uma linha vermelha, \"Failed to load resource\" com 404, e o nome da foto no link à direita. Segundo: aba Rede, F5. A linha da foto está em vermelho, com 404; em Cabeçalhos, o endereço pedido termina em `/imagens/foto.jpg`. Terceiro: Inspecionar na foto, e a aba Elementos mostra `<img src=\"imagens/foto.jpg\">`. Agora o recado ao Claude é preciso: \"a página pede imagens/foto.jpg e o servidor responde 404; confira se a pasta e o arquivo existem com esses nomes exatos, inclusive maiúsculas e minúsculas\". Quase sempre a causa é um nome que difere numa letra, como `Foto.JPG`, ou uma pasta que não foi publicada."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar algo?** Não. O F12 vem no Chrome, no Edge e nos outros navegadores de computador.",
          "**Posso estragar um site mexendo no F12?** Não. Tudo o que você muda fica na sua tela e some ao recarregar. O site nem fica sabendo.",
          "**E no celular?** Não há F12. No PC, a emulação de dispositivo mostra a página na largura de um celular, como aproximação.",
          "**Por que tem erro vermelho em quase todo site grande?** Porque sites grandes carregam muita coisa de terceiros, como anúncios e medidores, e alguma sempre falha. Erro vermelho num site alheio não é problema seu; na sua página, vale ler cada um.",
          "**O 404 do favicon.ico é problema?** Não. É o navegador procurando o ícone da aba. Se quiser, peça ao Claude para pôr um ícone, e o 404 some."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: Fontes, Lighthouse e a coluna Iniciador",
          "blocos": [
            [
              "p",
              "A aba Fontes mostra os arquivos que a página carregou, e clicar no link de um erro do Console abre o arquivo exatamente na linha do problema. É onde os programadores param o JavaScript no meio da execução para olhar por dentro; você não precisa disso para ler erros."
            ],
            [
              "p",
              "O Lighthouse, que fica no F12 do Chrome e do Edge, audita a página e dá notas de desempenho, acessibilidade e boas práticas, com uma lista do que melhorar. É um bom segundo par de olhos para as páginas que o Claude fizer."
            ],
            [
              "p",
              "Na aba Rede, a coluna Iniciador diz quem fez cada pedido: clicar nela leva à linha do código que pediu aquele arquivo. Quando um pedido estranho aparece, é ela que diz de onde ele veio."
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
          "pergunta": "Esta é uma página com um preço. No F12, você deu dois cliques no preço e trocou 25 por 1. O que você acha que acontece quando aperta F5 para recarregar?",
          "codigo": "<h1>Caderno universitário</h1>\n<p>Preço: R$ 25</p>\n<button>Comprar</button>",
          "linguagem": "html",
          "resposta": "A página volta a mostrar R$ 25. A edição no F12 mudou só a cópia que o navegador montou na sua tela; o F5 busca o arquivo de novo no servidor e monta tudo do zero. Ninguém mais viu o preço de 1 real, e nada foi salvo. Use os botões para simular as edições e o recarregar.",
          "vivo": [
            [
              "Editar o preço no F12",
              "<h1>Caderno universitário</h1>\n<p>Preço: R$ 1</p>\n<button>Comprar</button>"
            ],
            [
              "Apagar o botão no F12",
              "<h1>Caderno universitário</h1>\n<p>Preço: R$ 25</p>"
            ],
            [
              "Recarregar a página (F5)",
              "<h1>Caderno universitário</h1>\n<p>Preço: R$ 25</p>\n<button>Comprar</button>"
            ]
          ]
        }
      ],
      [
        "imagem",
        {
          "src": "img/aulas/2-12-console.png",
          "alt": "Captura A: uma barra de ferramentas com top, Filtro, Níveis padrão e Nenhum problema; embaixo, três mensagens em vermelho. A primeira: Uncaught ReferenceError: precoo is not defined, at erro.html:14:67, com o link erro.html:14 à direita. A segunda: Failed to load resource: the server responded with a status of 404 (File not found), com o link foto.jpg:1. A terceira: a mesma frase, com o link favicon.ico:1.",
          "legenda": "Captura A, para o Preveja logo abaixo: uma aba do F12 da página do laboratório, num Chrome com 390 px de largura, aberta depois da página. A fileira com os nomes das abas foi cortada de propósito. Chrome 157, 08/11/2026.",
          "largura": 390,
          "altura": 210
        }
      ],
      [
        "imagem",
        {
          "src": "img/aulas/2-12-rede.png",
          "alt": "Captura B: botões de gravar e de limpar, as caixas Manter registro e Desativar cache, a lista Sem limitação, a caixa Filtro e os botões Todos, Fetch/XHR, Doc, CSS, JS, Fonte, Img, Mídia, Manifesto, Soquete, Wasm e Outro; um gráfico de tempo de 0 a 100 ms; e uma tabela com as colunas Nome, Status, Tipo, Iniciador, Tamanho e Hora. Linha 1: erro.html, status 304, iniciador Outro. Linha 2, em vermelho: foto.jpg, status 404, iniciador erro.html:9. No rodapé: 2 solicitações, 440 B transferidos.",
          "legenda": "Captura B: outra aba do F12 da mesma página, aberta antes de um F5. A fileira das abas também foi cortada. Chrome 157, 08/11/2026.",
          "largura": 390,
          "altura": 392
        }
      ],
      [
        "prever",
        {
          "pergunta": "As capturas A e B, logo acima, são de duas abas do F12 da mesma página, a do laboratório, num Chrome com 390 px de largura. A fileira com os nomes das abas foi cortada. Qual aba é cada captura? E em qual delas você confirma que o servidor respondeu 404 para a foto?",
          "resposta": "A captura A é do Console: cada linha é uma {{mensagem-de-erro|mensagem de erro}}, em vermelho, com o arquivo e a linha num link à direita. A de cima é o erro do JavaScript, `Uncaught ReferenceError: precoo is not defined`, na linha 14 do `erro.html`: por isso o preço ficou em \"carregando\". A captura B é da aba Rede: cada linha é um pedido, com o nome, o código de status e, na coluna Iniciador, quem pediu. A `foto.jpg` está em vermelho, com 404; o `erro.html` veio com 304, \"não mudou\", porque a lista foi gravada num F5. O 404 aparece nas duas, de jeitos diferentes: no Console, como recado (\"falhou ao carregar um recurso\"); na Rede, como o próprio pedido, e é lá que você confirma o 404 e, clicando na linha, vê em Cabeçalhos o endereço pedido. Conclusão: a página tem dois problemas, e cada um pede um conserto diferente: um nome errado no JavaScript, `precoo`, na linha 14, e um arquivo, `foto.jpg`, que o servidor não tem."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você abriu o F12 na aba Rede com a página já carregada, e a lista de pedidos está vazia. O que isso quer dizer?",
          "o": [
            [
              "A aba só registra com o painel aberto: recarregue a página com F5",
              "Isso. A Rede só grava o que acontece depois que você a abre; com F5, cada pedido aparece numa linha, com o código de status."
            ],
            [
              "O servidor não respondeu a nenhum pedido, e a página falhou ao abrir",
              "Se o servidor não tivesse respondido, a página nem teria aparecido. A lista está vazia porque a aba não estava aberta."
            ],
            [
              "Os pedidos ficam na aba Elementos, com o código de cada um",
              "Elementos mostra o HTML, com o endereço da foto no src, mas não os pedidos nem o que o servidor respondeu."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você trocou o título da página no F12, mandou um print ao Claude e perguntou se a mudança estava no ar. Ele respondeu: \"Não está. O F12 mudou só a cópia da página na sua tela. Para publicar, mude o arquivo e publique de novo.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o F12 salva as edições direto no servidor do site, na hora",
              "O F12 não salva nada: a edição fica só na tela de quem editou e some ao recarregar."
            ],
            [
              "Está certa: a edição do F12 fica só na minha tela, até eu recarregar",
              "Isso. A resposta está certa: para publicar, é preciso mudar o arquivo e publicar de novo, e o print não prova nada."
            ],
            [
              "Está errada: quem usa o mesmo navegador também vê a mudança",
              "Ninguém mais vê, nem no mesmo navegador: a mudança existe só na aba de quem editou."
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
            "\"Mudei o preço no F12 e salvei a página.\"",
            "O F12 não salva no site. A mudança some ao recarregar; para mudar de verdade, mude o arquivo."
          ],
          [
            "\"A aba Rede está vazia, então a página não pediu nada.\"",
            "Ela só registra com o painel aberto. Abra a aba e recarregue com F5."
          ],
          [
            "\"Tem um 404 do favicon.ico, a página está quebrada.\"",
            "É o navegador procurando o ícone da aba. É inofensivo."
          ],
          [
            "\"Recebi um print com o saldo, então o pagamento caiu.\"",
            "Qualquer página pode ser editada na tela em segundos. Confira no extrato, não no print."
          ],
          [
            "\"Colei no Console o código que me mandaram.\"",
            "Código colado no Console roda com a sua sessão naquela página. Nunca cole código de estranhos."
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
          "p": "O que cada uma das três abas do F12 mostra?",
          "r": [
            "Elementos: o HTML da página como uma árvore, do jeito que está agora.",
            "Console: as mensagens, com os erros em vermelho e o arquivo e a linha de cada um.",
            "Rede: cada pedido da página, com o código de status."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que acontece com uma edição feita no F12?",
          "r": [
            "Muda a página só na sua tela, na hora.",
            "Ninguém mais vê, e nada é salvo.",
            "Some ao recarregar com F5."
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
          "titulo": "Ache os defeitos de uma página",
          "lugar": "No PC, com o Chrome ou o Edge e o PowerShell",
          "tempo": "20 minutos",
          "antes": "Você vai criar uma página de teste com dois defeitos plantados, servi-la no seu próprio PC com o servidor de teste do Python e achar os defeitos nas três abas do F12. A página precisa ser aberta por um servidor, e não com dois cliques no arquivo, porque só assim a foto que falta vira um 404 de verdade. O servidor fica preso ao endereço 127.0.0.1, o próprio PC, e não aparece para outros aparelhos da rede; a documentação do Python avisa que ele é só para teste, nunca para um site de verdade. Precisa do Chrome ou do Edge no computador, e do Python, que entra no seu PC no laboratório da aula 2.2: se `python --version` não responder com um número, faça antes os passos de instalação de lá. No celular, não há F12. A página, o servidor, as mensagens do Console, os códigos da Rede e o registro do servidor foram conferidos de verdade em 02/11/2026, com Python 3.12 e uma versão recente do Chrome, por {{programa}}; os cliques no painel foram escritos a partir da documentação da Microsoft e não foram testados à mão.",
          "naoTestado": "Os cliques no painel do F12 (passos 6 a 16) não foram feitos à mão: foram escritos a partir da documentação da Microsoft. Conferidos de verdade em 02/11/2026, por automação no Chrome 156: a página, as três mensagens do Console, os códigos da Rede e o registro do servidor; o servidor e a mensagem de desligar foram rodados no PowerShell com Python 3.12. Em 08/11/2026, a abertura com dois recarregamentos foi refeita por automação no Chrome 157: o registro do passo 17 é dessa execução, com o 304 do erro.html a cada recarregar.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando, que cria a pasta e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\f12-teste | Out-Null; Set-Location C:\\Projetos\\f12-teste",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\f12-teste."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria a página erro.html. Se o {{terminal}} avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\n<!doctype html>\n<html lang=\"pt-BR\">\n<head>\n  <meta charset=\"utf-8\">\n  <title>Loja de teste</title>\n</head>\n<body>\n  <h1>Caderno universitário</h1>\n  <img src=\"foto.jpg\" alt=\"Foto do caderno\" width=\"200\">\n  <p id=\"preco\">Preço: carregando</p>\n  <button>Comprar</button>\n  <script>\n    const preco = 25;\n    document.getElementById(\"preco\").textContent = \"Preço: R$ \" + precoo;\n  </script>\n</body>\n</html>\n'@ | Set-Content -Encoding utf8 erro.html",
              "espera": "Só o cursor. O arquivo erro.html está na pasta; a foto.jpg, de propósito, não existe."
            },
            {
              "faz": "Ligue o servidor de teste. Esta janela fica ocupada enquanto ele estiver ligado.",
              "cola": "python -m http.server 8000 --bind 127.0.0.1",
              "saida": "Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ...",
              "espera": "Essa linha aparece, e o cursor não volta: o servidor está esperando pedidos."
            },
            {
              "faz": "No Chrome ou no Edge, abra o endereço da página.",
              "cola": "http://127.0.0.1:8000/erro.html",
              "espera": "A página abre com o título Caderno universitário, um ícone de imagem quebrada ou o texto \"Foto do caderno\" no lugar da foto, a frase \"Preço: carregando\" e um botão."
            },
            {
              "faz": "Aperte F12.",
              "espera": "O painel das ferramentas do desenvolvedor abre ao lado ou embaixo da página, com abas no alto."
            },
            {
              "faz": "Clique na aba Console.",
              "espera": "Três linhas vermelhas: Uncaught ReferenceError: precoo is not defined, com erro.html:14 à direita, e duas \"Failed to load resource\" com 404, uma da foto.jpg e outra do favicon.ico."
            },
            {
              "faz": "Clique na aba Rede (Network).",
              "espera": "A aba abre vazia ou quase: ela só registra os pedidos feitos com o painel aberto."
            },
            {
              "faz": "Aperte F5 para recarregar a página.",
              "espera": "Uma lista com erro.html e foto.jpg, esta com 404, em vermelho. O erro.html vem com 304, \"não mudou\", ou com 200: o navegador perguntou ao servidor se a página tinha mudado desde a primeira vez e, como não tinha, usou a cópia guardada. O favicon.ico, também 404, pode aparecer ou não."
            },
            {
              "faz": "Clique na linha foto.jpg.",
              "espera": "Abrem os detalhes desse pedido, com abas próprias."
            },
            {
              "faz": "Nos detalhes, clique em Cabeçalhos (Headers).",
              "espera": "O endereço completo, http://127.0.0.1:8000/foto.jpg, o método GET e o código de status 404 File not found."
            },
            {
              "faz": "Na página, clique com o botão direito no lugar da foto.",
              "espera": "Abre o menu do botão direito do navegador."
            },
            {
              "faz": "No menu, escolha Inspecionar.",
              "espera": "A aba Elementos abre com a linha <img src=\"foto.jpg\" alt=\"Foto do caderno\" width=\"200\"> destacada."
            },
            {
              "faz": "Na árvore, dê dois cliques no texto \"Preço: carregando\".",
              "espera": "O texto fica selecionado, pronto para ser trocado."
            },
            {
              "faz": "Digite Preço: R$ 25 e aperte Enter.",
              "espera": "A página mostra Preço: R$ 25. Você consertou a tela, não o arquivo."
            },
            {
              "faz": "Aperte F5.",
              "espera": "O preço volta a \"carregando\": a edição sumiu, e o erro do Console voltou."
            },
            {
              "faz": "Clique na janela do PowerShell, onde o servidor está ligado, para trazê-la para a frente.",
              "saida": "127.0.0.1 - - [08/Nov/2026 03:20:18] \"GET /erro.html HTTP/1.1\" 200 -\n127.0.0.1 - - [08/Nov/2026 03:20:18] code 404, message File not found\n127.0.0.1 - - [08/Nov/2026 03:20:18] \"GET /foto.jpg HTTP/1.1\" 404 -\n127.0.0.1 - - [08/Nov/2026 03:20:18] code 404, message File not found\n127.0.0.1 - - [08/Nov/2026 03:20:18] \"GET /favicon.ico HTTP/1.1\" 404 -\n127.0.0.1 - - [08/Nov/2026 03:20:19] \"GET /erro.html HTTP/1.1\" 304 -\n127.0.0.1 - - [08/Nov/2026 03:20:19] code 404, message File not found\n127.0.0.1 - - [08/Nov/2026 03:20:19] \"GET /foto.jpg HTTP/1.1\" 404 -\n127.0.0.1 - - [08/Nov/2026 03:20:20] \"GET /erro.html HTTP/1.1\" 304 -\n127.0.0.1 - - [08/Nov/2026 03:20:20] code 404, message File not found\n127.0.0.1 - - [08/Nov/2026 03:20:20] \"GET /foto.jpg HTTP/1.1\" 404 -",
              "espera": "Uma linha por pedido, contando do lado do servidor a mesma história da aba Rede. Na primeira abertura, 200 para erro.html e 404 para foto.jpg e favicon.ico; em cada F5 que você deu, 304 para erro.html, porque ela não mudou, e 404 de novo para foto.jpg. A data, a hora e o número de linhas vão ser outros."
            },
            {
              "faz": "Com a janela do PowerShell na frente, aperte Ctrl+C para desligar o servidor.",
              "saida": "Keyboard interrupt received, exiting.",
              "espera": "Essa linha aparece, e o cursor volta. Se você apertar F5 no navegador agora, ele avisa que não conseguiu se conectar."
            }
          ],
          "errado": "se a página não abrir no passo 5, confira se o servidor ainda está ligado na janela do PowerShell e se o endereço tem a {{porta}} 8000. Se a aba Rede estiver vazia, recarregue com F5 com ela aberta. Se você deixou outro servidor de teste ligado em outra janela, desligue-o com Ctrl+C antes: no Windows, dois servidores na mesma porta não dão erro (testado), e a página pode vir do servidor errado. Se o Windows perguntar se deve permitir o Python na rede, o comando ficou sem o `--bind 127.0.0.1`: escolha cancelar, desligue o servidor com Ctrl+C e rode o passo 4 de novo, inteiro."
        }
      ],
      [
        "fontes",
        [
          [
            "O que são as ferramentas de desenvolvimento do navegador, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Visão geral do DevTools (F12, Ctrl+Shift+I, Inspecionar; ferramentas Elementos, Console e Rede), Microsoft",
            "https://learn.microsoft.com/pt-br/microsoft-edge/devtools/overview",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Introdução à exibição e alteração do DOM (editar texto com dois cliques, apagar com Delete), Microsoft",
            "https://learn.microsoft.com/pt-br/microsoft-edge/devtools/dom/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Corrigir erros do JavaScript relatados no console (Failed to load resource: 404; link para a linha), Microsoft",
            "https://learn.microsoft.com/pt-br/microsoft-edge/devtools/console/console-debug-javascript",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Inspecionar atividade de rede (só registra com o painel aberto; Cabeçalhos, Visualização, Resposta), Microsoft",
            "https://learn.microsoft.com/pt-br/microsoft-edge/devtools/network/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Emular dispositivos móveis (uma aproximação, não um celular de verdade), Microsoft",
            "https://learn.microsoft.com/pt-br/microsoft-edge/devtools/device-mode/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "http.server (não use em produção; --bind 127.0.0.1), documentação do Python; nesta página, a versão pt-br ainda tem o texto em inglês",
            "https://docs.python.org/pt-br/3/library/http.server.html",
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
          "O F12 conserta a página, e tudo o que você muda nele fica salvo no site para todos",
          "O F12 não salva nada no site: a edição fica na sua tela e some ao recarregar."
        ],
        [
          "O F12 mostra elementos, erros e pedidos, e o que se edita nele fica só na tela",
          "Isso. Elementos, Console e Rede para conferir, e edição só como rascunho."
        ],
        [
          "O F12 é só para programadores, e quem não lê código não consegue tirar nada dele",
          "Achar o erro vermelho e o 404 não exige ler código, e é o que permite conferir o \"funcionou\"."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Em que aba do F12 aparece o erro vermelho do JavaScript, com o arquivo e a linha?",
        "o": [
          [
            "Rede, na lista de pedidos com o código de status",
            "A Rede mostra os pedidos e os códigos de status."
          ],
          [
            "Elementos, ao lado da linha do HTML com o erro",
            "Elementos mostra o HTML da página."
          ],
          [
            "Console, com o link para o arquivo e a linha",
            "Isso. Erros em vermelho, com o link para o arquivo e a linha."
          ]
        ],
        "c": 2
      },
      {
        "p": "Você trocou um texto da página pela aba Elementos. O que acontece ao apertar F5?",
        "o": [
          [
            "O texto volta ao original, porque a edição era só na sua tela",
            "Isso. O navegador busca o arquivo de novo e monta a página do zero."
          ],
          [
            "O texto novo continua, porque o navegador guardou a sua edição",
            "O navegador não guarda edições do F12: elas somem ao recarregar."
          ],
          [
            "O site passa a mostrar o texto novo para todos os visitantes",
            "Nada chega ao site. Só a sua aba viu a mudança."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Como abro o F12 no Edge?",
        "Aperte F12, ou Ctrl+Shift+I, ou clique com o botão direito na página e escolha Inspecionar. As abas que importam são Elementos, Console e Rede."
      ],
      [
        "Por que a aba Rede está vazia?",
        "Porque ela só registra os pedidos feitos com o painel aberto. Deixe a aba Rede aberta e recarregue a página com F5: a lista aparece desde o primeiro pedido."
      ],
      [
        "Um print pode ser falso?",
        "Pode, e é fácil. Qualquer texto de qualquer página pode ser trocado na tela pelo F12 em segundos, e o print sai perfeito. Para conferir um pagamento ou um saldo, use o extrato ou o sistema, não a imagem."
      ]
    ]
  }
};
