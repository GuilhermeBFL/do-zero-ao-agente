// Módulo 1. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "1-1": {
    "tempo": 40,
    "video": "a1-1",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você usa o Claude no celular, no {{navegador}} e no {{claude-code|Claude Code}}, e às vezes um faz o que o outro não faz: um lê a sua {{pasta}}, o outro só conversa. Não são três Claudes: é o mesmo {{modelo}} dentro de {{programa|programas}} diferentes, e esta aula dá nome a cada peça e mostra onde uma termina e a outra começa.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quase tudo o que você vai ler sobre IA mistura quatro palavras como se fossem uma só: modelo, {{app}}, {{api|API}} e {{agente}}. Um vídeo diz que \"o Claude criou um {{site}} sozinho\", outro diz que \"o Claude não mexe nos seus {{arquivo|arquivos}}\", e os dois estão certos, porque falam de peças diferentes. Sem separar as quatro, você não sabe o que esperar de cada lugar onde usa o Claude, nem de quem é a culpa quando algo dá errado."
      ],
      [
        "p",
        "Separar muda três coisas no seu dia. A primeira é o diagnóstico. Quando a resposta vem com um fato errado, o problema costuma ser do modelo, ou do que faltou entregar a ele. Quando o Claude diz que não viu um arquivo, o problema é da peça que deveria ter lido o arquivo e não leu. Quando ele apagou algo que não devia, quem agiu foi o agente, com a {{permissao|permissão}} que você deu. Cada problema tem um conserto diferente, e o nome certo leva ao conserto certo."
      ],
      [
        "p",
        "A segunda é o custo. O app e o Claude Code entram pela sua assinatura, com {{limite-de-uso|limites de uso}}. A API é cobrada por uso, em dólar, pedido a pedido, e é o caminho para um programa seu falar com o Claude, como o {{bot}} do projeto final deste curso. Confundir as duas é o jeito mais comum de pagar duas vezes pela mesma coisa, ou de achar que algo é de graça quando não é."
      ],
      [
        "p",
        "A terceira é a segurança. Um modelo sozinho só escreve texto: ele não apaga nada, não manda e-mail, não {{instalar|instala}} programa. Quem faz essas coisas é um agente, e ele faz com as permissões que recebeu. No modo padrão de quem instala hoje, o {{modo-automatico|Auto}}, o Claude Code quase não pergunta: um revisor aprova sozinho o que parece seguro e bloqueia o que parece arriscado; se o seu estiver em {{bypass}}, quase nada é barrado. Saber que o risco mora no agente, e não no modelo, é o que faz você olhar para o lugar certo antes de pedir algo grande."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num escritório de consultoria com um especialista brilhante que trabalha numa sala fechada. Ele é o **modelo**: lê o que chega por escrito e devolve uma resposta por escrito, e só. Não sai da sala, não abre gaveta, não telefona e não lembra de você entre uma visita e outra. Para falar com ele, você vai ao balcão de atendimento e passa o pedido por uma janela de vidro: o balcão é o **app**. Empresas que mandam pedidos em lote não usam o balcão: entram pela porta de serviço, nos fundos, com um formulário padrão e um crachá que diz quem paga a conta. Essa porta é a **API**. E há um assistente que recebe uma tarefa inteira, como \"organize este arquivo morto\", pergunta ao especialista qual é o próximo passo, vai até o arquivo, abre a pasta, volta, pergunta de novo, e só para quando terminou. Esse assistente é o **agente**."
      ],
      [
        "p",
        "Repare que o especialista é o mesmo em todos os casos. O que muda é por onde o pedido entra e quem vai buscar as coisas. É exatamente o que acontece com o Claude: o app do celular, o Claude Code e um bot feito por você conversam com o mesmo especialista."
      ],
      [
        "quebra",
        "O especialista de verdade pensa, lembra do cliente e se cansa. O modelo não lembra de nada entre um pedido e outro: cada pedido leva junto toda a conversa até ali, e a aula 1.2 mostra quanto isso custa. Ele também atende milhões de pedidos ao mesmo tempo, sem fila. E as fronteiras do escritório não são tão nítidas: um app moderno pode trazer um assistente dentro dele, como o {{cowork|Cowork}}, então \"app\" e \"agente\" às vezes moram no mesmo programa."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O modelo: o cérebro que só lê e escreve texto"
      ],
      [
        "p",
        "O modelo é um programa treinado com uma quantidade enorme de texto para fazer uma coisa: receber texto e escrever a continuação mais útil. A Anthropic tem famílias de modelos, como Opus, Sonnet, Haiku e Fable, e cada família tem versões, como o Opus 5.5. Em 02/11/2026, o Opus 5.5 era o modelo padrão do Claude Code nos planos Pro, Max e Ultra, segundo a {{documentacao|documentação}} de configuração de modelos. O modelo {{rodar|roda}} nos {{servidor|servidores}} da Anthropic, computadores enormes ligados o tempo todo, e não no seu PC. Por isso nada do Claude funciona sem {{internet}}."
      ],
      [
        "p",
        "Um exemplo do começo ao fim. Você cola um parágrafo e pede \"resuma em uma frase\". O texto colado e o seu pedido chegam ao modelo, junto com instruções que o programa acrescenta. O modelo escreve a frase, pedaço por pedaço, e devolve. Agora peça \"abra a minha pasta Downloads\". O modelo, sozinho, não tem como: ele não enxerga o seu disco. O máximo que ele faz é escrever um texto dizendo o que faria. Se a pasta foi aberta de verdade, quem abriu foi outro programa, e você vai conhecê-lo daqui a pouco."
      ],
      [
        "p",
        "Por baixo, o modelo não lê letras nem palavras inteiras: lê pedacinhos de texto chamados {{token|tokens}}, e tudo o que ele enxerga num pedido se chama {{contexto}}. A aula 1.2 é inteira sobre isso. O que importa agora é a consequência: o modelo só sabe o que está no contexto daquele pedido, mais o que aprendeu no treino. Se um fato não está em nenhum dos dois, ele não sabe, mesmo que pareça saber."
      ],
      [
        "p",
        "Quando não pensar no modelo: se a sua dúvida é \"onde eu faço isso?\" ou \"por que ele não alcançou o meu arquivo?\", a resposta raramente é trocar de modelo. É trocar de lugar, ou de ferramenta."
      ],
      [
        "h3",
        "O app: a janela por onde você fala"
      ],
      [
        "p",
        "O app é o programa que você abre para conversar: o claude.ai no navegador, o app do Claude no celular e o Claude Desktop no PC. Ele mostra a conversa, guarda o histórico, deixa você anexar arquivos e escolher o modelo. Dentro dele há três modos: **Chat**, a conversa; **Cowork**, a conversa que mexe em arquivos e aplicativos; e **Code**, que é o Claude Code. A central de ajuda da Anthropic avisa que o Chat e o Cowork estão virando uma conversa só, em implantação gradual, começando pelos planos Pro, Max e Ultra: o próprio Claude decide quando precisa das ferramentas."
      ],
      [
        "p",
        "O app acrescenta coisas que o modelo não tem. Um exemplo é o {{artifact}}: uma página interativa que o Claude publica num endereço privado do claude.ai, para você ver e compartilhar. Outro é o {{conector}}: uma ligação pronta com um serviço, como a sua agenda, que você ativa nas configurações. O modelo é o mesmo; é o app que dá a ele esses recursos."
      ],
      [
        "p",
        "O glossário oficial do Claude Code tem uma palavra para cada lugar onde você acessa o Claude Code: {{superficie|superfície}}. O {{terminal}}, o {{vs-code|VS Code}}, o app Desktop e o claude.ai são superfícies, e a documentação diz que todas compartilham o mesmo mecanismo. Quando um tutorial fala em \"superfície web\", quer dizer o Claude Code aberto pelo navegador. A aula 3.8 compara as superfícies."
      ],
      [
        "p",
        "Um exemplo inteiro. No app do celular, você pergunta \"o que é a taxa Selic?\". O app junta a pergunta com as instruções dele, manda ao modelo nos servidores da Anthropic, recebe o texto e mostra na tela. Ninguém mexeu em arquivo nenhum. Depois você pede, no mesmo app, \"organize a pasta Downloads do meu PC\". O app do celular não tem uma {{ferramenta}} que alcance o seu PC, então você recebe uma lista de passos, e a pasta continua como estava."
      ],
      [
        "p",
        "Quando não usar o app: para trabalhar numa pasta de projeto no PC, com dezenas de arquivos. Dá para anexar arquivos um a um, mas o Claude Code trabalha direto na pasta, e é para isso que ele existe."
      ],
      [
        "h3",
        "A API: a porta para programas"
      ],
      [
        "p",
        "API é a porta de entrada que um programa usa para pedir algo a outro programa. A API do Claude recebe pedidos num formato combinado: qual modelo usar, o tamanho máximo da resposta e as mensagens da conversa. Devolve a resposta num formato de dados chamado {{json|JSON}}, com o texto e a contagem de tokens usados. Não há tela nem botão: é programa conversando com programa."
      ],
      [
        "p",
        "Quem usa a API paga por uso. Cada pedido é cobrado pela quantidade de tokens que entra e que sai, e quem paga é o dono da {{chave-api|chave de API}}, a senha que vai junto com cada pedido. Em 01/11/2026, a tabela oficial cobrava, no Opus 5.5, US$ 4 por milhão de {{entrada-saida|tokens de entrada}} e US$ 20 por milhão de saída. Em ordem de grandeza: uma pergunta de uma página, com uma resposta de uma página, fica na casa de 2 centavos de dólar nesse modelo. Parece pouco, e é, até um programa mal feito repetir isso mil vezes por hora. A chave se cria no {{console|Console}} da Anthropic, e o módulo 10 faz isso com calma."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, que é o projeto final deste curso. Alguém manda uma mensagem para o seu bot no {{telegram|Telegram}}. O programa do bot, que é seu e roda num servidor, recebe a mensagem, monta um pedido e manda pela API, com a sua chave. O modelo responde. O programa pega o texto e posta no Telegram. Em nenhum momento alguém abriu o app do Claude."
      ],
      [
        "p",
        "Por baixo, o app e o Claude Code também conversam com o modelo nos servidores da Anthropic. A diferença é quem paga e como. Quando você entra no Claude Code com a assinatura, o uso sai dos limites do seu plano. Quando um programa usa uma chave de API, o uso vira cobrança na conta da chave. Os créditos mensais de API que vêm no plano Max (US$ 100) e no Ultra (US$ 200) cobrem a API, mas **não** cobrem o Claude Code, segundo a página oficial desses créditos, conferida em 02/11/2026."
      ],
      [
        "p",
        "Quando não usar a API: para as suas próprias conversas do dia a dia. O app e o Claude Code já fazem isso dentro da assinatura. A API é para quando um programa precisa falar com o Claude sem você estar ali."
      ],
      [
        "h3",
        "O agente: quem age"
      ],
      [
        "p",
        "Um agente é um programa que recebe um objetivo e decide os passos até terminar, usando ferramentas: ler um arquivo, editar, rodar um {{comando}}, buscar na internet. A documentação do Claude Code descreve o trabalho em três fases que se repetem: reunir contexto, agir e verificar o resultado, até a tarefa acabar. É o {{ciclo-do-agente|ciclo do agente}}, e a aula 12.2 o acompanha passo a passo. O Claude Code é um agente."
      ],
      [
        "p",
        "O glossário oficial chama o programa em volta do modelo de {{harness}}, e resume assim: o Claude Code é o harness, e o Claude é o modelo dentro dele. O harness é quem dá acesso aos arquivos, roda os comandos, pede ou não a sua permissão, carrega o {{claude-md|CLAUDE.md}} e a memória, e mantém o ciclo andando. O modelo decide; o harness executa."
      ],
      [
        "p",
        "Um exemplo inteiro, com o que acontece por baixo. Você digita no Claude Code: \"crie resumo.md com os pontos principais de aula.txt\". O Claude Code junta o pedido com as instruções dele e manda ao modelo. O modelo responde que precisa ler `aula.txt`: é um pedido de ferramenta, não a resposta final. O Claude Code lê o arquivo no seu PC e manda o conteúdo de volta ao modelo. O modelo escreve o resumo e pede para criar `resumo.md`. O Claude Code confere a permissão (criar um arquivo na pasta não é arriscado: no Auto e em bypass, passa sem pergunta; no modo Manual, ele perguntaria) e cria o arquivo. O modelo, então, escreve \"pronto\". Tudo isso, do seu Enter até o \"pronto\", é um {{turno}}: uma rodada da conversa, com quantas idas ao modelo forem precisas no meio."
      ],
      [
        "p",
        "Antes de editar um arquivo, o Claude Code tira uma foto dele, o {{checkpoint}}, para você poder desfazer com {{rewind|/rewind}}. Isso também é trabalho do harness, não do modelo. E é por isso que o mesmo modelo, no app do celular, não organizou a sua pasta: lá não havia um harness com ferramentas que alcançassem o seu PC."
      ],
      [
        "p",
        "Por que isso importa para você: o agente age no seu computador, com as suas permissões. O modelo pode errar a ideia; o agente transforma o erro em arquivo apagado. Quando não usar um agente: para perguntas que se respondem com texto, como \"o que é Selic?\". O app responde mais rápido, e nada no seu PC fica em jogo."
      ],
      [
        "h3",
        "As quatro peças juntas"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Peça",
            "O que é",
            "Exemplo",
            "Como se paga"
          ],
          "linhas": [
            [
              "Modelo",
              "O cérebro: texto entra, texto sai",
              "Opus 5.5, Sonnet 5.5",
              "Não se paga direto: paga-se pelo app ou pela API"
            ],
            [
              "App",
              "A janela por onde você conversa",
              "claude.ai, app do celular, Claude Desktop",
              "Assinatura"
            ],
            [
              "API",
              "A porta para programas",
              "Um bot seu chamando o Claude",
              "Por token, na conta da chave"
            ],
            [
              "Agente",
              "O modelo com ferramentas, em ciclo, até terminar",
              "Claude Code, Cowork",
              "Assinatura (Claude Code) ou API (agente feito por você)"
            ]
          ]
        }
      ],
      [
        "p",
        "Um jeito de guardar: o modelo pensa, o app mostra, a API liga programas e o agente age. Quando ouvir \"o Claude fez tal coisa\", pergunte qual das quatro peças fez. Quase sempre a frase fica mais clara, e mais fácil de conferir."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**O Claude do celular é mais fraco que o do Claude Code?** Não necessariamente. Os dois podem usar o mesmo modelo. O que muda é o harness: as ferramentas, as instruções e o que entra no contexto. Nos dois, você escolhe o modelo.",
          "**Preciso pagar a API para usar o Claude Code?** Não. Você entra com a assinatura, e o uso sai dos limites do plano. A chave de API é para programas seus, e o módulo 10 mostra quando vale a pena.",
          "**O modelo aprende comigo durante a conversa?** Não. O que parece memória vem de arquivos que o harness carrega no começo, como o CLAUDE.md e a {{memoria-automatica|memória automática}}. O que a Anthropic guarda das suas conversas é outro assunto, e a aula 11.10 trata dele.",
          "**Onde cada parte roda?** O modelo, nos servidores da Anthropic. O Claude Code, no seu PC. Por isso ele mexe nos seus arquivos e, ao mesmo tempo, precisa de internet.",
          "**E se eu trocar os nomes ao pedir?** O Claude costuma entender, mas a aula 1.6 mostra como o termo certo encurta o caminho e evita uma ação que você não queria."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: de onde vem a palavra harness, e o harness para quem programa",
          "blocos": [
            [
              "p",
              "Harness, em inglês, é o arreio: o conjunto de correias que liga a força de um cavalo a uma carroça. A imagem é boa: o modelo tem a força, mas sem o arreio ela não puxa nada. Cada harness tem ferramentas e regras próprias, e por isso o mesmo modelo se comporta de um jeito no app, de outro no Claude Code e de outro num agente feito por você."
            ],
            [
              "p",
              "A Anthropic também oferece o harness separado, para quem programa: o {{agent-sdk|Agent SDK}}, uma {{biblioteca}} em {{python|Python}} e TypeScript com as mesmas ferramentas e o mesmo ciclo do Claude Code. E há os {{managed-agents|Managed Agents}}, em que a própria Anthropic roda o agente para você. As aulas 1.3, 12.6 e 12.9 voltam a eles."
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
          "pergunta": "Este é um turno do Claude Code, parecido com o que aparece na tela. O que você acha: quantas vezes o modelo foi chamado, e quem leu o arquivo de verdade?",
          "codigo": "> crie resumo.md com os pontos principais de aula.txt\n\n● Read(aula.txt)\n  ⎿  Read 42 lines\n\n● Write(resumo.md)\n  ⎿  Wrote 12 lines to resumo.md\n\n● Pronto: criei resumo.md com os 5 pontos principais.",
          "linguagem": "texto",
          "resposta": "Pelo menos três vezes. Primeiro, o Claude Code mandou o seu pedido ao modelo, que respondeu \"quero ler aula.txt\". Depois, mandou de novo, agora com o conteúdo do arquivo, e o modelo respondeu \"quero criar resumo.md\". Por fim, mandou o resultado da criação, e o modelo escreveu a frase final. A documentação de custos confirma: cada vez que o Claude usa uma ferramenta, sai outro pedido ao modelo, com o resultado. E quem leu o arquivo foi o Claude Code, no seu PC. O modelo só recebeu o texto do arquivo, por escrito, como tudo o que ele recebe."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "No app do celular, você pediu \"organize a pasta Downloads do meu PC\". O Claude respondeu com uma lista de passos e não mexeu em nada. Por quê?",
          "o": [
            [
              "O modelo usado no app do celular é mais fraco e não sabe mexer em pastas",
              "O modelo pode ser o mesmo do Claude Code. O que faltou foi uma ferramenta que alcançasse o seu PC."
            ],
            [
              "Faltou uma chave de API, que é o que libera o acesso aos arquivos do PC",
              "A chave de API serve para programas seus pagarem o uso da API; ela não dá acesso a pasta nenhuma."
            ],
            [
              "Lá não há ferramenta que alcance o seu PC, e o modelo sozinho só escreve texto",
              "Isso. O modelo só escreve; quem age é um harness com ferramentas, como o Claude Code aberto no próprio PC."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou por que o Claude Code mexe nos seus arquivos e o app do celular não. O Claude respondeu: \"O Claude Code é um modelo mais avançado que o do app; por isso ele consegue ler e editar arquivos.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o Claude Code usa um modelo maior, feito para lidar com arquivos",
              "O Claude Code não é um modelo. Ele pode usar o mesmo modelo do app; a diferença está nas ferramentas."
            ],
            [
              "Está errada: o Claude Code não é um modelo, é o harness, com as ferramentas",
              "Isso. O Claude Code é o harness, e o Claude é o modelo dentro dele. Quem lê e edita é o harness, a pedido do modelo."
            ],
            [
              "Está errada: o app do celular também edita os arquivos do PC, é só pedir",
              "Sem um harness que alcance o PC, nenhum jeito de pedir faz o app do celular editar os seus arquivos."
            ]
          ],
          "c": 1
        }
      ],
      [
        "h2",
        "Coloque na ordem"
      ],
      [
        "parsons",
        {
          "p": "Coloque na ordem o caminho de um pedido seu no Claude Code, do Enter até a resposta na tela. Neste pedido, o modelo precisa ler um arquivo antes de responder.",
          "etapas": [
            "Primeira ida ao modelo",
            "Segunda ida ao modelo"
          ],
          "linhas": [
            {
              "t": "Você digita o pedido no Claude Code e aperta Enter",
              "etapa": 0
            },
            {
              "t": "O Claude Code junta o pedido com as instruções, o CLAUDE.md e a conversa até ali",
              "etapa": 0
            },
            {
              "t": "O Claude Code manda tudo ao modelo, nos servidores da Anthropic",
              "etapa": 0
            },
            {
              "t": "O modelo responde pedindo uma ferramenta: ler o arquivo",
              "etapa": 0
            },
            {
              "t": "O Claude Code lê o arquivo no seu PC e manda o conteúdo de volta ao modelo",
              "etapa": 1
            },
            {
              "t": "O modelo escreve a resposta final, já sabendo o que tinha no arquivo",
              "etapa": 1
            },
            {
              "t": "O Claude Code mostra a resposta na tela, e o turno termina",
              "etapa": 1
            }
          ],
          "notas": [
            "Começa no app, que aqui é o Claude Code no terminal",
            "O harness monta o pedido: o modelo não lembra de nada sozinho",
            "O modelo roda nos servidores da Anthropic, não no seu PC; com a assinatura, o uso sai do limite do plano",
            "O modelo não lê o disco: ele pede a ferramenta ao harness",
            "Quem age no seu PC é o harness, com as suas permissões",
            "Mais uma ida ao modelo, agora com o arquivo no contexto",
            "Do Enter até aqui foi um turno, com duas idas ao modelo"
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
            "\"O Claude Code é um modelo da Anthropic.\"",
            "O Claude Code é o harness: o programa em volta do modelo, com ferramentas. O modelo é o Opus, o Sonnet ou outro que você escolher dentro dele."
          ],
          [
            "\"O modelo leu o meu arquivo.\"",
            "Quem leu foi o harness, no seu PC. O modelo recebeu o conteúdo por escrito, no contexto. Se o arquivo não foi lido, o modelo não sabe o que tem nele, mesmo que responda como se soubesse."
          ],
          [
            "\"Assino o Max, então a API sai de graça para tudo.\"",
            "Os créditos mensais do Max cobrem a API só até US$ 100 por mês. Quando eles acabam, os pedidos param até o ciclo seguinte, a menos que você compre mais créditos."
          ],
          [
            "\"Agente é qualquer chatbot.\"",
            "Um chatbot responde com texto. Um agente recebe um objetivo e age com ferramentas, em ciclo, até terminar. O Claude Code é agente; uma conversa simples no app, não."
          ],
          [
            "\"O Claude lembra de mim porque aprendeu comigo.\"",
            "O modelo não aprende durante a conversa. A memória vem de arquivos que o harness carrega no começo de cada {{sessao|sessão}}, como o CLAUDE.md."
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
          "p": "Quais são as quatro peças, e o que cada uma faz?",
          "r": [
            "Modelo: o cérebro; recebe texto e escreve texto, nos servidores da Anthropic.",
            "App: a janela por onde você conversa, como o claude.ai e o app do celular.",
            "API: a porta para programas, cobrada por token, com uma chave.",
            "Agente: o modelo com ferramentas, em ciclo, até terminar a tarefa."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que é o harness, e por que o Claude Code é um?",
          "r": [
            "É o programa em volta do modelo: ferramentas, permissões, memória e o ciclo.",
            "O Claude Code é o harness; o Claude é o modelo dentro dele.",
            "O modelo decide o passo; o harness executa no seu PC."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Glossário do Claude Code (harness, conector, artifact, superfície, checkpoint, turno)",
            "https://code.claude.com/docs/pt/glossary",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Como o Claude Code funciona (reunir contexto, agir, verificar; o harness)",
            "https://code.claude.com/docs/pt/how-claude-code-works",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Configuração de modelo (Opus 5.5 como padrão nos planos Pro, Max e Ultra)",
            "https://code.claude.com/docs/pt/model-config",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Gerencie custos (cada uso de ferramenta é mais um pedido ao modelo)",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Preços da API (Opus 5.5: US$ 4 de entrada e US$ 20 de saída por milhão de tokens)",
            "https://platform.claude.com/docs/pt-BR/about-claude/pricing",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Créditos de API para os planos Max, Ultra e Team (não cobrem o Claude Code)",
            "https://platform.claude.com/docs/pt-BR/about-claude/api-credits-for-subscribers",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Claude Cowork e chat são um único Claude, central de ajuda da Anthropic",
            "https://support.claude.com/pt/articles/16761823-claude-cowork-e-chat-sao-um-unico-claude",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Visão geral do Agent SDK",
            "https://code.claude.com/docs/pt/agent-sdk/overview",
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
          "O app, a API e o Claude Code são três modelos diferentes, cada um para uma tarefa",
          "Os três podem usar o mesmo modelo. São jeitos diferentes de chegar a ele."
        ],
        [
          "O modelo pensa, o app mostra, a API liga programas e o agente usa ferramentas",
          "Isso. E o mesmo modelo pode estar por trás do app, da API e do agente."
        ],
        [
          "O agente é o modelo mais avançado, e por isso só ele consegue mexer em arquivos",
          "O agente não é um modelo: é o programa em volta dele, com ferramentas, que age."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Qual destas peças age no seu computador, lendo e criando arquivos?",
        "o": [
          [
            "O modelo, que roda nos servidores da Anthropic",
            "O modelo só escreve texto; quem age é o programa em volta dele."
          ],
          [
            "A API, que é a porta de entrada para o seu PC",
            "A API é a porta para programas falarem com o modelo, e não para o modelo entrar no seu PC."
          ],
          [
            "O agente, como o Claude Code, usando ferramentas",
            "Isso. O agente usa ferramentas para agir, com as permissões que tem."
          ]
        ],
        "c": 2
      },
      {
        "p": "Como se paga o uso da API do Claude?",
        "o": [
          [
            "Por token que entra e sai, na conta da chave",
            "Isso. Quem tem a chave paga pelo que ela usa; os créditos do Max e do Ultra ajudam."
          ],
          [
            "Pela assinatura do app, que já cobre tudo isso",
            "A assinatura cobre o app e o Claude Code; a API é cobrada à parte, por token."
          ],
          [
            "Por mês, sem limite, depois da primeira chave",
            "Não existe uso sem limite na API: cada token tem preço."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "O que é harness?",
        "É o programa em volta do modelo: dá as ferramentas, cuida das permissões, carrega a memória e mantém o ciclo andando. A documentação resume assim: o Claude Code é o harness, e o Claude é o modelo dentro dele."
      ],
      [
        "Por que o Claude do celular não mexe no meu PC?",
        "Porque o app do celular não tem uma ferramenta que alcance o seu PC. O modelo só escreve texto; quem age é um harness com ferramentas, como o Claude Code aberto no próprio PC. A aula 7.12 mostra o Remote Control, que leva uma sessão do PC até o celular."
      ],
      [
        "Preciso da API para usar o Claude?",
        "Para conversar e para usar o Claude Code, não: a assinatura basta. A API é para quando um programa seu precisa falar com o Claude sem você, como um bot. O módulo 10 ensina."
      ]
    ]
  },
  "1-2": {
    "tempo": 35,
    "video": "a1-2",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Numa conversa que durou a tarde inteira, você já viu o Claude esquecer uma regra do começo, ou o limite do plano acabar mais cedo do que esperava. Não é cansaço: cada mensagem nova leva junto a conversa inteira, e esta aula mostra a conta em {{token|tokens}} e o que fazer com ela.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Toda conversa com o Claude tem um tamanho, e esse tamanho decide duas coisas que você sente sem ver: quanto cada mensagem custa e quão bem o Claude presta atenção no que importa agora. Até pouco tempo, o medo era outro: a conversa \"estourar\" e parar no meio. Esse medo ficou para trás. As boas práticas oficiais do {{claude-code|Claude Code}} puseram \"a {{janela-de-contexto|janela de contexto}} é sua principal restrição\" na lista de conselhos que não valem mais, porque a maioria dos {{modelo|modelos}} atuais aguenta 1 milhão de tokens e a conversa se resume sozinha quando chega perto do limite."
      ],
      [
        "p",
        "O que continua valendo, e é o assunto desta aula, é o custo e o foco. No plano, uma conversa gorda gasta o seu {{limite-de-uso|limite de 5 horas}} e o semanal mais depressa. Na {{api|API}}, ela vira dólar. E, quanto mais assuntos velhos ficam na conversa, mais o Claude se distrai com eles. Entender o mecanismo é o que faz você usar o {{clear|/clear}} na hora certa, colar só o trecho de que precisa em vez do PDF inteiro e desconfiar quando uma {{sessao|sessão}} de horas começa a errar coisas que acertava de manhã."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao especialista da aula 1.1, o que trabalha numa sala fechada e não lembra de nada entre um pedido e outro. Para ele responder à sua terceira pergunta, não basta passar a terceira pergunta pela janela: você precisa passar a pasta inteira da conversa, com a primeira pergunta, a primeira resposta, a segunda, a segunda resposta, e só então a nova. Ele lê tudo de novo antes de responder. A **mesa** dele, onde cabe a pasta, é a janela de contexto. Cada **folha** da pasta é cobrada. E, quando a pasta tem folhas de três assuntos diferentes, achar o que importa para a pergunta de agora fica mais difícil."
      ],
      [
        "quebra",
        "Um especialista de carne e osso cobraria igual por folha relida. O modelo, não: quando o começo da pasta é igual ao do pedido anterior, ele é relido de um {{cache}}, com desconto grande, por algum tempo. As folhas também não são páginas: um token é um pedaço de palavra. E, quando a mesa está quase cheia, o próprio Claude Code troca a pilha por um resumo, sem você pedir, coisa que nenhum consultor faria com os seus papéis."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Token: a unidade que a IA conta"
      ],
      [
        "p",
        "O modelo não lê letra por letra nem palavra por palavra. Ele quebra o texto em tokens: pedaços que podem ser uma palavra curta, parte de uma palavra, um sinal de pontuação ou um espaço. O glossário da plataforma da Anthropic diz que, nos modelos anteriores, um token valia cerca de 3,5 caracteres em inglês. A conta muda com o modelo e com o idioma, e por isso a {{documentacao|documentação}} manda usar a contagem oficial quando o número exato importa."
      ],
      [
        "p",
        "Para o dia a dia, basta uma ordem de grandeza. Um tutorial da Academy da Anthropic compara 1 milhão de tokens a cerca de três cópias do livro Moby Dick. Daí sai uma conta aproximada: uma página de texto, umas 500 palavras, fica na casa de mil tokens. Um arquivo de {{codigo|código}} de tamanho médio, na casa de 2 mil. Um relatório de 200 páginas, na casa de 200 mil."
      ],
      [
        "p",
        "Tokens importam porque são o que se paga. Na API, os {{entrada-saida|tokens de entrada e de saída}} têm preços diferentes: em 01/11/2026, o Opus 5.5 cobrava US$ 4 por milhão de tokens de entrada e US$ 20 por milhão de saída. No plano, o mesmo uso não vira dólar, mas consome os seus limites. Você não precisa contar tokens à mão: o {{comando}} {{context|/context}} mostra quanto da janela está ocupado, dividido por partes, e o {{usage|/usage}} mostra o uso do plano."
      ],
      [
        "h3",
        "Contexto e janela de contexto"
      ],
      [
        "p",
        "O {{contexto}} é tudo o que o modelo enxerga num pedido. A janela de contexto é o máximo que cabe. Em 08/11/2026, a documentação da plataforma listava janela de 1 milhão de tokens para os modelos atuais, como Opus 5.5, Sonnet 5.5, Haiku 5.5 e Fable 5.1; modelos mais antigos, como o Haiku 4.5, ficam em 200 mil."
      ],
      [
        "p",
        "Uma parte do contexto já está lá antes de você digitar qualquer coisa. A simulação oficial da janela de contexto, na documentação do Claude Code, usa números representativos para uma sessão comum. A maior parte são as {{instrucoes-do-sistema|instruções do sistema}} do Claude Code, cerca de 4.200 tokens. Depois vêm pedaços menores: o {{claude-md|CLAUDE.md}} do projeto, a {{memoria-automatica|memória automática}}, as descrições das {{skill|skills}}, o seu CLAUDE.md pessoal, informações do ambiente e os nomes das {{ferramenta|ferramentas}} {{mcp|MCP}}. Somando, perto de 8 mil tokens, só para começar."
      ],
      [
        "p",
        "Depois, cada arquivo que o Claude lê entra inteiro. Na mesma simulação, um arquivo de código lido custa 2.400 tokens, e a saída de um teste, 1.200. Você vê na tela uma linha curta, como \"Read auth.ts\"; o modelo recebe os 2.400 tokens do arquivo. É por isso que o contexto cresce mais depressa do que a conversa que você enxerga."
      ],
      [
        "h3",
        "Cada mensagem leva a conversa inteira"
      ],
      [
        "p",
        "Aqui está o centro da aula. O modelo não guarda nada entre um pedido e outro. Para ele \"lembrar\" da conversa, o Claude Code manda a conversa inteira em cada pedido. A documentação de custos diz isso com todas as letras: a conversa completa vai em cada solicitação, e, cada vez que o Claude usa uma ferramenta, sai outra solicitação com o resultado."
      ],
      [
        "p",
        "Um exemplo com números. Sua conversa está com 100 mil tokens, depois de uma manhã de trabalho. Você escreve \"obrigado!\". A palavra tem dois ou três tokens, mas o pedido leva os 100 mil junto. Agora imagine a mesma conversa com 300 mil tokens, porque você emendou três tarefas sem limpar: cada mensagem, por menor que seja, leva os 300 mil. A documentação dá o exemplo de uma pergunta de uma linha numa sessão aberta o dia todo: ela consome uso pela conversa inteira."
      ],
      [
        "p",
        "O que suaviza isso é o cache. Quando o começo do pedido é igual ao do pedido anterior, esse trecho é relido com desconto. No Opus 5.5, em 01/11/2026, a releitura do cache custava vinte vezes menos que o preço cheio de entrada. Mas o cache tem prazo. As boas práticas dizem que ele dura cerca de uma hora na assinatura e cinco minutos com uma {{chave-api|chave de API}}. Depois de uma pausa maior que isso, como o almoço, a primeira mensagem processa o contexto inteiro de novo, a preço cheio."
      ],
      [
        "p",
        "Em ordem de grandeza, pela API, no Opus 5.5: reler 100 mil tokens custa uns 2 centavos de dólar com o cache quente, e entre 40 e 80 centavos com o cache frio, porque o trecho é processado de novo e gravado outra vez no cache. Uma mensagem só não pesa. Cem mensagens numa conversa que nunca é limpa, sim. No plano, a mesma conta aparece como limite que acaba antes."
      ],
      [
        "h3",
        "Por que a conversa longa perde o foco"
      ],
      [
        "p",
        "Caber não é o mesmo que ajudar. A documentação da plataforma diz que, à medida que a contagem de tokens cresce, a precisão e a capacidade de recuperar informação caem, e dá nome ao fenômeno: {{context-rot|deterioração de contexto}}, em inglês *context rot*. Mais contexto não é automaticamente melhor: tudo o que está na janela disputa a atenção do modelo."
      ],
      [
        "p",
        "Na prática, isso aparece de três jeitos. O primeiro: assunto velho atrapalha o novo. Se a conversa tem um relatório de manhã e uma planilha à tarde, uma pergunta sobre a planilha pode puxar algo do relatório. O segundo: tentativas fracassadas ficam na pasta. As boas práticas dizem que, depois de corrigir a mesma coisa duas vezes sem sucesso, uma terceira correção só engorda uma conversa que já tem duas tentativas erradas, que o Claude continua relendo; o conselho é dar /clear e escrever um pedido melhor. O terceiro: regras dadas só na conversa podem se perder quando ela é resumida, como você vai ver logo abaixo."
      ],
      [
        "p",
        "Um exemplo inteiro. Às 9h, você pede \"responda sempre em tópicos curtos\". Às 15h, depois de três tarefas, as respostas voltam em parágrafos longos. A regra ainda pode estar lá no meio, mas disputa atenção com 300 mil tokens de outros assuntos, ou já foi resumida. O conserto não é repetir a regra mais alto: é pô-la no CLAUDE.md, que entra em toda conversa, e começar a tarefa nova numa conversa limpa."
      ],
      [
        "h3",
        "O que mudou: 1 milhão de tokens e compactação automática"
      ],
      [
        "p",
        "A {{compactacao|compactação}} é o Claude Code resumindo a conversa quando a janela chega perto do limite. Nos modelos com janela de 1 milhão, isso acontece por padrão perto de 967 mil tokens, segundo a documentação de configuração de modelos. O resumo substitui a conversa: guarda os seus pedidos, os arquivos mexidos e o que falta fazer, e deixa de fora as saídas completas e os passos intermediários. O CLAUDE.md da raiz do projeto e a memória automática são recarregados do disco; instruções que você deu só na conversa podem não sobreviver. Logo depois, o Claude Code relê até cinco dos arquivos mexidos mais recentemente."
      ],
      [
        "p",
        "Você também pode pedir a compactação: o {{compact|/compact}} resume na hora, e aceita um foco, como \"/compact mantenha as decisões sobre a planilha\". Só saiba que resumir uma conversa grande é, em si, um pedido grande, porque o Claude precisa ler tudo para resumir. E há a compactação por inatividade: na assinatura, com o cache de uma hora, uma sessão com mais de uns 200 mil tokens que fica parada é resumida pouco antes de o cache vencer. Na volta do almoço, você continua a partir de um resumo."
      ],
      [
        "p",
        "Por isso o motivo do /clear mudou. Antes, era \"limpe antes que estoure\". Hoje, quase nunca estoura. O motivo é o que as boas práticas escrevem: contexto focado dá resposta melhor e custa menos. E o /clear não custa nada: começa uma sessão nova, a anterior fica guardada, e o comando {{resume|/resume}} volta a ela se você precisar. O simulador no fim desta aula mostra quatro casos, momento a momento."
      ],
      [
        "h3",
        "O que fazer na prática"
      ],
      [
        "lista",
        [
          "**Uma tarefa, uma conversa.** Terminou o relatório e vai para a planilha? /clear. Com um nome, como `/clear relatorio`, a conversa anterior fica fácil de achar no /resume.",
          "**Duas correções erradas, recomeço.** Em vez da terceira correção, /clear e um pedido novo que já diga o que você aprendeu.",
          "**Cole o trecho, não o livro.** Se a pergunta é sobre o capítulo 3, entregue o capítulo 3. O arquivo inteiro de 200 páginas vai junto em toda mensagem seguinte, até o /clear.",
          "**Regra que vale sempre vai no CLAUDE.md.** O que está lá entra em toda conversa e é recarregado depois da compactação.",
          "**Leitura grande pode ir para um ajudante.** Um {{subagente}} lê os arquivos na janela dele e devolve só um resumo. Na simulação oficial, ele leu 6.100 tokens de arquivos e devolveu 420. Mas ele gasta tokens a mais, e as boas práticas dizem que, com janelas de 1 milhão, poupar a janela raramente justifica chamá-lo; ele compensa mais para tirar da conversa uma saída longa, como uma busca grande. A aula 1.5 apresenta o subagente.",
          "**Quando não dar /clear:** no meio de uma tarefa em que o histórico ainda importa. Aí, se a conversa engordou, use /compact com um foco."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso contar tokens?** Não. O /context mostra a ocupação da janela, dividida por partes, e o /usage mostra o uso do plano.",
          "**O /clear apaga o meu trabalho?** Não. Os arquivos continuam onde estão. A conversa anterior fica guardada no PC, e o /resume volta a ela.",
          "**No {{app}} do celular vale o mesmo?** Vale a ideia: cada mensagem leva a conversa junto. A documentação da plataforma avisa que apps de chat, como o claude.ai, também podem ir descartando o começo das conversas longas. Assunto novo, conversa nova.",
          "**Quanto custa uma conversa longa no meu plano?** Não aparece em dinheiro: aparece como limite que acaba mais cedo. O /usage mostra, e chega a apontar \"contexto longo\" quando isso passa de 10% do seu uso recente.",
          "**Se a janela é de 1 milhão, por que não colar tudo?** Porque cabe, mas custa em toda mensagem seguinte e distrai o modelo. O tamanho da janela é um teto, não uma meta."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: tokens em cada modelo, o que conta na janela e a simulação oficial",
          "blocos": [
            [
              "p",
              "A conta de caracteres por token também muda de um modelo para outro. Segundo o mesmo glossário da plataforma, os modelos a partir do Claude 4.7 quebram o texto de um jeito novo, que gera cerca de 30% mais tokens para o mesmo texto. Por isso vale guardar a ordem de grandeza, e não um número exato."
            ],
            [
              "p",
              "Tudo o que vai no pedido conta: instruções do sistema, cada mensagem, resultados de ferramentas, imagens, documentos e as definições das ferramentas. A resposta que o modelo escreve também conta, inclusive o raciocínio dele, quando o modo de pensar está ligado. O cache muda o preço, não o espaço: o trecho relido do cache continua ocupando a janela."
            ],
            [
              "p",
              "Nos modelos de 1 milhão, um pedido pode levar até 600 imagens ou páginas de PDF. E, na API, um pedido de 900 mil tokens paga a mesma tarifa por token que um de 9 mil, exceto no Haiku 5.5, que cobra mais acima de 100 mil tokens de entrada."
            ],
            [
              "p",
              "A página \"Explore a janela de contexto\", nas fontes, tem a simulação oficial passo a passo, com o que entra antes de você digitar e o que sobrevive à compactação. Ela desenha a janela com 200 mil tokens, como era antes; os números de cada parte servem do mesmo jeito. A Academy da Anthropic tem um tutorial de 20 minutos, em inglês e sem login, sobre como o contexto afeta a qualidade e o custo."
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
          "pergunta": "Você está na terceira mensagem de uma conversa nova no Claude Code. Os números abaixo são tokens. O que você acha: quantos tokens de entrada vão para o modelo quando você envia a mensagem 3?",
          "codigo": "Já carregado antes de você digitar:   8.000\nMensagem 1 (você):                       50\nResposta 1 (Claude):                    500\nMensagem 2 (você):                       50\nResposta 2 (Claude):                    500\nMensagem 3 (você):                       50",
          "linguagem": "texto",
          "resposta": "Cerca de 9.150, e não 50. Vai tudo: os 8 mil que já estavam carregados, as duas trocas anteriores (550 + 550) e a mensagem nova. A resposta 3 ainda não existe, então não entra. Na mensagem 4, vão os 9.150, mais a resposta 3 e a mensagem 4. É por isso que a mesma frase curta custa mais no fim de uma conversa longa do que no começo de uma nova. Com o cache quente, a parte repetida sai com desconto, mas sai."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Sua conversa no Claude Code passou de 300 mil tokens, e o assunto dela, um relatório, já acabou. Agora você quer ajuda com uma planilha, que não tem nada a ver com o relatório. O que faz?",
          "o": [
            [
              "Continua na mesma conversa: a janela é de 1 milhão, então ainda cabe",
              "Cabe, mas cada mensagem sobre a planilha vai levar os 300 mil tokens do relatório junto, e o assunto velho disputa a atenção do modelo."
            ],
            [
              "Usa /compact, para resumir o relatório e então começar a planilha",
              "O /compact serve para continuar a mesma tarefa com menos peso, e resumir 300 mil tokens já é um pedido grande. Para assunto novo, /clear sai mais barato."
            ],
            [
              "Usa /clear e começa a planilha numa conversa nova, sem o relatório",
              "Isso. O /clear não custa nada, a planilha não paga pelo relatório, e a conversa antiga fica guardada para o /resume."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Numa conversa que já passou de 200 mil tokens, você perguntou se um \"obrigado!\" gasta alguma coisa. O Claude respondeu: \"Gasta, sim: o pedido leva a conversa inteira junto, e não só a palavra.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: cada mensagem nova leva junto a conversa inteira",
              "Isso. Por isso a mesma frase curta custa mais no fim de uma conversa longa. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Está errada: um obrigado tem dois ou três tokens e não pesa nada",
              "A palavra tem poucos tokens, mas vai junto com a conversa inteira, e é a conversa que pesa."
            ],
            [
              "Está errada: só conta o que o Claude escreve, não o que você manda",
              "Contam a entrada e a saída. A entrada de cada mensagem é a conversa inteira, mais a mensagem nova."
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
            "\"A janela é de 1 milhão, então nunca preciso de /clear.\"",
            "A janela grande evita que a conversa pare, mas não barateia nem melhora nada. Cada mensagem relê tudo, e assunto velho atrapalha o novo. Uma tarefa, uma conversa."
          ],
          [
            "\"Mandei só um ok, então não gastei nada.\"",
            "O ok vai junto com a conversa inteira. Com o cache quente, a releitura sai com desconto; depois de uma pausa longa, sai a preço cheio."
          ],
          [
            "\"O /clear apaga o que fizemos.\"",
            "Tira a conversa da janela, não os arquivos do disco. A conversa anterior fica guardada e volta com /resume."
          ],
          [
            "\"Token é uma palavra.\"",
            "Token é um pedaço de texto: pode ser uma palavra curta, parte de uma palavra ou um sinal. Para estimar, pense em mil tokens por página."
          ],
          [
            "\"Colar o arquivo inteiro é mais seguro, para ele ter tudo.\"",
            "Ter tudo custa em toda mensagem seguinte e espalha a atenção. Entregue o trecho que importa, ou deixe o Claude ler o arquivo do disco quando precisar."
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
          "p": "Por que uma pergunta curta no fim de uma conversa longa custa mais?",
          "r": [
            "O modelo não guarda nada entre um pedido e outro.",
            "Por isso cada mensagem reenvia a conversa inteira.",
            "O cache barateia a releitura, mas vence depois de uma pausa (cerca de 1 hora no plano)."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que mudou no motivo do /clear?",
          "r": [
            "A maioria dos modelos tem janela de 1 milhão de tokens.",
            "Perto do limite da janela, a conversa se resume sozinha: é a compactação.",
            "O motivo hoje é custo e foco, e o /clear não custa nada."
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
          "id": "contexto",
          "titulo": "A janela enchendo"
        }
      ],
      [
        "fontes",
        [
          [
            "Boas práticas do Claude Code (o que você pode parar de fazer, inclusive usar subagente só para poupar a janela; reduza custo e contexto)",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Explore a janela de contexto (simulação oficial, com números representativos)",
            "https://code.claude.com/docs/pt/context-window",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Gerencie custos (a conversa completa vai em cada solicitação)",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Configuração de modelo (compactação automática perto de 967 mil tokens)",
            "https://code.claude.com/docs/pt/model-config",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Janelas de contexto, Claude Platform (1 milhão de tokens; 200 mil nos modelos mais antigos; deterioração de contexto)",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/context-windows",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Glossário da Claude Platform (o que é um token)",
            "https://platform.claude.com/docs/pt-BR/about-claude/glossary",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Preços da API (Opus 5.5 e leitura do cache)",
            "https://platform.claude.com/docs/pt-BR/about-claude/pricing",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "How context affects Claude's performance and cost, Claude Academy (20 minutos, sem login)",
            "https://academy.claude.com/tutorials/parametric-memory-and-context",
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
          "Com a janela de 1 milhão, o tamanho da conversa deixou de ser problema",
          "Deixou de ser problema de estourar, mas continua sendo de custo e de foco."
        ],
        [
          "O /clear serve para a conversa não estourar o limite da janela de contexto",
          "Hoje quase nunca estoura: o /clear serve para baixar o custo e manter o foco."
        ],
        [
          "Cada mensagem leva a conversa toda: conversa longa custa mais e perde o foco",
          "Isso. Por isso, uma tarefa por conversa, e /clear ao mudar de assunto."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Quando você envia uma mensagem curta numa conversa longa, o que vai para o modelo?",
        "o": [
          [
            "Só a mensagem nova, pois o resto já está com ele",
            "O modelo não guarda nada entre pedidos: sem a conversa junto, ele não saberia do que você fala."
          ],
          [
            "A conversa inteira, junto com a mensagem nova",
            "Isso. Por isso conversa longa custa mais, mesmo com mensagem curta."
          ],
          [
            "Um resumo da conversa, refeito a cada mensagem",
            "O resumo só acontece na compactação, perto do limite da janela, ou quando você pede /compact."
          ]
        ],
        "c": 1
      },
      {
        "p": "Por que vale dar /clear entre tarefas sem relação, se a janela é de 1 milhão?",
        "o": [
          [
            "Contexto focado custa menos e dá resposta melhor",
            "Isso. E o /clear não custa nada."
          ],
          [
            "Sem /clear, a conversa trava perto de 200 mil",
            "Os modelos atuais vão a 1 milhão, e perto do limite a conversa é compactada, não trava."
          ],
          [
            "O /clear grava as regras da conversa no CLAUDE.md",
            "O /clear não grava nada: só começa uma conversa nova, e a antiga fica guardada."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "O que é um token?",
        "Um pedaço de texto: uma palavra curta, parte de uma palavra ou um sinal. É a unidade que o modelo lê e que se paga. Para estimar, uma página de texto fica na casa de mil tokens."
      ],
      [
        "Quando uso /compact em vez de /clear?",
        "Use /clear quando for mudar de assunto: começa limpo e não custa nada. Use /compact quando a tarefa continua, mas a conversa engordou: ele resume e segue. Dê um foco ao /compact, dizendo o que manter."
      ],
      [
        "Por que o Claude esqueceu uma regra que dei de manhã?",
        "Porque ela ficou no meio de uma conversa longa, disputando atenção com muitos outros assuntos, ou foi resumida numa compactação. Regra que vale sempre vai no CLAUDE.md, que entra em toda conversa."
      ]
    ]
  },
  "1-3": {
    "tempo": 26,
    "video": "a1-3",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Um tutorial manda \"{{instalar|instalar}} o {{sdk|SDK}}\", outro manda \"usar a {{cli|CLI}}\", outro fala em \"chamar a {{api|API}}\", e parece que são três nomes para a mesma coisa. Não são: é uma porta só, usada de três jeitos, e esta aula mostra qual escolher em cada caso.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Daqui a alguns módulos, você vai pedir ao Claude coisas como \"um {{programa}} que resume os meus PDFs toda noite\" ou \"um {{bot}} que responde no {{telegram|Telegram}}\". Para isso, um programa seu precisa falar com o Claude, e os tutoriais, e o próprio Claude, vão falar em API, SDK e CLI. Se você não separa os três, instala a coisa errada, segue um tutorial que não serve para o seu caso ou não entende o que o Claude está montando para você."
      ],
      [
        "p",
        "A diferença também pesa no bolso e na segurança. Usar a API custa por uso, e tudo o que fala com ela precisa de uma credencial, algo que prove quem paga: quase sempre uma {{chave-api|chave de API}}. O SDK e a CLI são gratuitos, mas são programas que você instala e que mudam de {{versao|versão}}; um tutorial de um ano atrás pode quebrar na versão de hoje. E o {{claude-code|Claude Code}}, que você já usa, também é uma CLI, só que de um tipo bem diferente das outras."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Lembre da porta de serviço da aula 1.1, por onde programas mandam pedidos ao especialista. A **API** é essa porta, com as regras dela: bata assim, entregue o pedido neste formulário, mostre o crachá de quem paga. O **SDK** é um mordomo que você contrata para o seu programa: ele conhece as regras da porta, preenche o formulário certinho, mostra o crachá, tenta de novo se ninguém atender e traduz a resposta para o seu programa. A **CLI** é um interfone na sua mesa: você aperta o botão, fala uma frase curta e ouve a resposta, sem montar nada."
      ],
      [
        "quebra",
        "O mordomo não é uma pessoa de fora: o SDK é {{codigo|código}} que {{rodar|roda}} dentro do seu programa, e ele muda de versão; um mordomo novo pode não aceitar as ordens que o antigo aceitava. E CLI não é só interfone para a porta do Claude: é qualquer programa que você usa digitando, como o {{git|Git}}. O Claude Code é uma CLI que vai muito além de um interfone, porque ele mesmo decide os passos e age, como um {{agente}}."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "API: as regras da porta"
      ],
      [
        "p",
        "A API do Claude é um endereço na {{internet}} que aceita pedidos num formato combinado. O pedido diz qual {{modelo}} usar, o tamanho máximo da resposta e as mensagens. Vão junto a chave de API, que identifica quem paga, e a versão da API que o pedido segue. A resposta volta em {{json|JSON}}, um jeito de escrever dados em texto, com nomes e valores. Esta é a resposta de exemplo que a {{documentacao|documentação}} oficial mostra para o pedido \"Hello, Claude\":"
      ],
      [
        "saida",
        "{\n  \"model\": \"claude-opus-5-5\",\n  \"id\": \"msg_01YMmR5XodC5nTqMxLZMKaq6\",\n  \"type\": \"message\",\n  \"role\": \"assistant\",\n  \"content\": [\n    {\n      \"type\": \"text\",\n      \"text\": \"Hello! How are you doing today? Is there something I can help you with?\"\n    }\n  ],\n  \"stop_reason\": \"end_turn\",\n  \"usage\": { \"input_tokens\": 27, \"output_tokens\": 20 }\n}"
      ],
      [
        "p",
        "Só o que interessa agora: `model` é o modelo que respondeu; `content` traz o texto da resposta; `stop_reason` diz por que ele parou (\"end_turn\" quer dizer que terminou de responder); e `usage` conta os {{token|tokens}}, 27 de entrada e 20 de saída. É essa contagem que vira cobrança."
      ],
      [
        "p",
        "A API tem versões, e cada versão é um conjunto de regras. Em 21/10/2026, saiu a versão 2026-10-21, com mudanças que quebram pedidos antigos. Um exemplo: a opção `temperature`, que muitos tutoriais mandavam junto com o pedido para controlar quanto as respostas variam, passou a dar erro em qualquer pedido que o mande, mesmo com o valor padrão. É por isso que um tutorial antigo às vezes falha sem você ter feito nada de errado."
      ],
      [
        "p",
        "Quando usar a API direto, sem SDK: quase nunca, no seu caso. Só quando o programa é feito numa linguagem que não tem SDK, ou numa ferramenta que só sabe mandar pedidos pela internet. Aí o pedido vai cru, e a aula 2.9 mostra como é um pedido pela internet por dentro."
      ],
      [
        "h3",
        "SDK: o kit para o seu programa usar a porta"
      ],
      [
        "p",
        "SDK quer dizer kit de desenvolvimento de software: uma {{biblioteca}} pronta, numa {{linguagem-de-programacao|linguagem de programação}}, para usar um serviço sem montar cada pedido à mão. A Anthropic publica SDKs oficiais em sete linguagens: {{python|Python}}, TypeScript, C#, Go, Java, PHP e Ruby. O de Python se instala com o {{pip}}, pelo {{comando}} `pip install anthropic`, pede Python 3.10 ou mais novo e está na série 2.x: em 08/11/2026, a mais nova era a 2.6.0."
      ],
      [
        "p",
        "Por baixo, o SDK faz o trabalho chato: monta o pedido no formato exato, põe a chave e a versão da API, tenta de novo, até duas vezes, quando a rede falha, quando a API pede calma ou quando a resposta passa de 10 minutos sem chegar, e transforma a resposta num {{objeto}} fácil de ler. O seu código só chama `client.messages.create` e põe entre parênteses o modelo, o tamanho máximo e as mensagens. A chave, ele procura sozinho numa {{variavel|variável de ambiente}} chamada `ANTHROPIC_API_KEY`. O \"Preveja antes de ver\" desta aula mostra o que acontece quando a chave falta."
      ],
      [
        "p",
        "Cuidado com o lugar onde essa variável fica. Muito tutorial manda gravá-la no Windows inteiro, com o comando {{setx}} ou na tela de variáveis de ambiente do sistema. Aí todo programa aberto depois passa a enxergar a chave, inclusive o Claude Code, que também lê `ANTHROPIC_API_KEY`. Ao abrir, ele pergunta se deve usar essa chave; se você aceitar, o gasto do Claude Code sai da conta da chave, e não do limite da sua assinatura. A caixa \"Para ir mais fundo\" desta aula conta os outros efeitos."
      ],
      [
        "p",
        "O caminho certo é um arquivo {{env|.env}} dentro da pasta do projeto, com a linha da chave, que o seu programa carrega ao começar. A própria documentação do SDK sugere a biblioteca python-dotenv para isso. Assim a chave vale só para aquele programa, enquanto ele roda, e o Claude Code continua na sua assinatura. A aula 10.3 monta esse arquivo passo a passo."
      ],
      [
        "p",
        "Cada versão principal do SDK manda uma versão da API. A 2.0.0 do SDK de Python foi a primeira a mandar a 2026-10-21. Por isso, a regra deste curso: siga tutoriais do SDK 2.x. A aula 10.4 roda o primeiro programa de verdade."
      ],
      [
        "p",
        "Não confunda com o {{agent-sdk|Agent SDK}}. O SDK comum, que a documentação chama de Client SDK, só leva e traz pedidos: se o modelo pedir uma {{ferramenta}}, o seu programa é que executa. O Agent SDK traz pronto o ciclo do Claude Code, com as mesmas ferramentas, para você montar um agente seu em Python ou TypeScript. A aula 12.6 é dele."
      ],
      [
        "p",
        "Quando não usar um SDK: para testar uma pergunta uma vez só. Escrever um programa para isso é exagero; a CLI ou o {{playground}} do {{console|Console}} resolvem."
      ],
      [
        "h3",
        "CLI: o programa que você usa digitando"
      ],
      [
        "p",
        "CLI quer dizer interface de {{linha-de-comando|linha de comando}}: um programa que você usa digitando comandos no {{terminal}}, em vez de clicar. Você já conhece duas: o Claude Code e o Git. Estas são as respostas reais de dois comandos no {{powershell|PowerShell}}, em 02/11/2026. Para `claude --version`:"
      ],
      [
        "saida",
        "2.1.314 (Claude Code)"
      ],
      [
        "p",
        "E para `git --version`:"
      ],
      [
        "saida",
        "git version 2.54.0.windows.1"
      ],
      [
        "p",
        "Para a API do Claude, a Anthropic tem uma CLI própria, chamada {{ant}}. Com ela, um pedido vira um comando só. O exemplo da documentação oficial é `ant messages create --model claude-opus-5-5 --max-tokens 1024` seguido da mensagem. O `ant` monta o pedido a partir dessas opções e mostra a resposta inteira, no mesmo formato JSON visto acima. Para entrar, `ant auth login` abre o {{navegador}} para você fazer login no Console, sem copiar chave nenhuma."
      ],
      [
        "p",
        "O `ant` não vem instalado. A página de início rápido mostra a instalação no Mac, no Linux, no WSL e pelo Go; a página de versões no {{github|GitHub}} também traz um arquivo para Windows. Se você digitar `ant --version` num PowerShell sem ele, a resposta real começa assim:"
      ],
      [
        "saida",
        "ant : The term 'ant' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the\nspelling of the name, or if a path was included, verify that the path is correct and try again."
      ],
      [
        "p",
        "Em português: \"o termo ant não é reconhecido como nome de comando\". Quase sempre quer dizer que o programa não está instalado, ou que o Windows não sabe onde ele está. A aula 2.2 volta a essa mensagem."
      ],
      [
        "p",
        "E o Claude Code? Ele também usa a API por baixo, mas você não monta pedido nenhum: escreve em português, e ele decide os passos, lê arquivos e roda comandos. O `ant` é um interfone: um pedido por comando, e você controla cada um. O Claude Code é um agente que fala pelo interfone por você, quantas vezes precisar."
      ],
      [
        "h3",
        "Qual usar em cada caso"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Você quer",
            "Use",
            "Por quê"
          ],
          "linhas": [
            [
              "Testar uma pergunta à API, uma vez",
              "A CLI `ant` ou o playground do Console",
              "Sem escrever programa nenhum"
            ],
            [
              "Um {{script}} em Python que resume 20 arquivos toda noite",
              "O SDK de Python, com chave de API",
              "O SDK cuida do pedido, das novas tentativas e dos erros"
            ],
            [
              "Um bot que responde no Telegram",
              "O SDK, com chave de API",
              "Produto ou serviço usa chave, e não o login da assinatura"
            ],
            [
              "Que o Claude edite arquivos no seu PC enquanto você conversa",
              "O Claude Code",
              "É um agente, e entra pela assinatura"
            ],
            [
              "Um agente seu, com as ferramentas do Claude Code, num {{servidor}}",
              "O Agent SDK, com chave de API",
              "Traz o {{ciclo-do-agente|ciclo do agente}} pronto"
            ],
            [
              "Falar com o Claude numa linguagem sem SDK",
              "A API direto, pela internet",
              "É a regra da porta, sem mordomo"
            ]
          ]
        }
      ],
      [
        "p",
        "A linha do bot tem uma regra por trás. A página de conformidade legal do Claude Code diz que quem constrói produtos ou serviços com o Claude, inclusive com o Agent SDK, deve usar chave de API, e não o login de uma assinatura. A assinatura é para o seu uso individual do Claude e do Claude Code."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar os três agora?** Não. Nesta aula, nada se instala. A aula 10.4 instala o SDK de Python, e o `ant` é opcional.",
          "**Custa alguma coisa?** O SDK e a CLI são gratuitos. O que custa é o uso da API, por token, na conta da chave. Os créditos mensais dos planos Max e Ultra pagam esse uso até o valor de cada plano.",
          "**Qual a diferença entre API e chave de API?** A API é a porta; a chave é o crachá que diz quem paga. Quem tem a sua chave usa a porta em seu nome, e o módulo 11 ensina a protegê-la.",
          "**O Claude Code usa a API?** Usa, por baixo. Com a assinatura, o uso sai do limite do plano, e não da conta de uma chave, desde que a variável `ANTHROPIC_API_KEY` não esteja gravada no Windows inteiro.",
          "**E se o tutorial estiver desatualizado?** Confira as versões: SDK de Python 2.x e API 2026-10-21. Tutorial do SDK 0.x ou 1.x pode quebrar; o certo é procurar o exemplo atual na documentação."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: a chave no Windows inteiro, e o pedido cru, sem mordomo",
          "blocos": [
            [
              "p",
              "Com a `ANTHROPIC_API_KEY` gravada no Windows inteiro, há mais três efeitos no Claude Code. No modo não interativo, o `-p`, ele usa a chave sempre, sem perguntar. Os créditos de API do Max e do Ultra não cobrem o Claude Code, então uma chave que só tem esses créditos faz ele parar com a mensagem `Credit balance too low`. E o {{remote-control|Remote Control}}, que leva a {{sessao|sessão}} do PC ao celular, recusa sessões que usam chave."
            ],
            [
              "p",
              "Por baixo de tudo, o SDK e a CLI mandam um pedido pela internet a um endereço que termina em `/v1/messages`, com três {{cabecalho|cabeçalhos}}: a chave (`Authorization: Bearer` seguido da chave), a versão (`anthropic-version: 2026-10-21`) e o tipo do conteúdo. O corpo é o JSON com modelo, tamanho máximo e mensagens. É o mesmo pedido que a documentação mostra com o comando `curl`, com uma diferença: o `curl` manda a chave em outro cabeçalho, o `x-api-key`, e a API aceita os dois. A aula 2.9 explica pedido e resposta pela internet."
            ],
            [
              "p",
              "API e SDK não são coisa só da Anthropic. Quase todo serviço moderno tem uma API, e os maiores têm SDKs: o Telegram, o GitHub, o Google. A ideia desta aula vale para todos."
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
          "pergunta": "Aqui não há código para ler. O arquivo `exemplo.py` é o programa de exemplo oficial do SDK de Python, com a mensagem traduzida: ele procura a chave na variável `ANTHROPIC_API_KEY`, manda \"Olá, Claude\" ao modelo e mostra a resposta na tela. Neste PC, o SDK está instalado, mas nenhuma chave foi configurada. O que você acha que aparece quando alguém roda o comando abaixo no PowerShell?",
          "codigo": "python exemplo.py",
          "linguagem": "powershell",
          "resposta": "Um erro, e nenhum pedido sai do PC. Rodamos exatamente isso em 02/11/2026, com o SDK 2.3.0. A saída é um bloco longo de linhas técnicas, e a última, a que importa, começou assim: `TypeError: \"Could not resolve authentication method. Expected one of api_key, auth_token, or credentials to be set.` e terminou com mais uma frase técnica. Em português: \"não consegui descobrir como me identificar; esperava uma chave de API (api_key), um token de autorização (auth_token) ou credenciais\". Sem chave, o SDK desiste antes de mandar o pedido, então nada é cobrado. Com a chave no lugar, apareceria a resposta do modelo, e o pedido seria cobrado na conta dela."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você quer um programa em Python que, toda noite, leia 20 arquivos e peça ao Claude um resumo de cada um. O que usa?",
          "o": [
            [
              "O Claude Code, com a assinatura, pedindo os resumos toda noite",
              "O Claude Code é para você trabalhar com ele; para um programa que roda sozinho, o caminho é a API, com chave."
            ],
            [
              "O SDK de Python, num programa com uma chave de API para pagar o uso",
              "Isso. O SDK cuida de cada pedido, e a chave diz quem paga."
            ],
            [
              "A CLI ant, digitando à mão um comando por arquivo a cada noite",
              "Serve para testar, mas digitar 20 comandos toda noite não é um programa; o SDK automatiza."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ajuda para o seu script em Python falar com o Claude. O Claude respondeu: \"Instale o SDK com pip install anthropic. Para não escrever a chave no código, grave-a no Windows inteiro, com setx ANTHROPIC_API_KEY seguido da chave: assim ela vale em qualquer pasta e em qualquer terminal, e o SDK a lê sozinho.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o SDK não lê variável nenhuma, e a chave tem de estar no código",
              "O SDK lê a chave da variável ANTHROPIC_API_KEY sozinho. O problema é onde a variável foi gravada, e não a leitura."
            ],
            [
              "Está errada: no Windows inteiro, até o Claude Code vê a chave e pode usá-la",
              "Isso. Ao abrir, ele pergunta se deve usar a chave; se você aceitar, o uso do Claude Code sai da conta dela, e não da assinatura. O certo é um .env no projeto, carregado pelo programa, que vale só para ele."
            ],
            [
              "Está certa: assim a chave fica fora do código, e o SDK a lê sozinho em tudo",
              "Fora do código é bom, mas no Windows inteiro todo programa enxerga a chave, inclusive o Claude Code, que gasta na conta dela se você aceitar a chave."
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
            "\"SDK e API são a mesma coisa.\"",
            "A API é a porta, com as regras. O SDK é uma biblioteca que usa a porta por você, numa linguagem. Dá para usar a API sem SDK; o contrário, não."
          ],
          [
            "\"Instalei o SDK, então o Claude ficou de graça no meu programa.\"",
            "O SDK é gratuito, mas cada pedido que ele manda é cobrado na conta da chave. Sem chave, ele nem manda o pedido."
          ],
          [
            "\"CLI é o Claude Code.\"",
            "CLI é qualquer programa que você usa digitando: o Git, o ant e o Claude Code são CLIs. O Claude Code é a que decide e age sozinha, como agente."
          ],
          [
            "\"Copiei um tutorial e deu erro, então o SDK está quebrado.\"",
            "Quase sempre é versão: o tutorial é de uma versão antiga do SDK ou da API. Confira se ele usa o SDK 2.x."
          ],
          [
            "\"Vou escrever a chave direto no código, é mais simples.\"",
            "Código vai para o GitHub, para o Claude e para outras pessoas. A chave fica fora do código, num .env do projeto, e o módulo 11 explica por quê."
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
          "p": "Qual a diferença entre API, SDK e CLI?",
          "r": [
            "API: a porta com regras, por onde programas pedem algo ao Claude.",
            "SDK: uma biblioteca numa linguagem que usa a API por você.",
            "CLI: um programa que você usa digitando comandos no terminal."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Qual você usaria para um script em Python, para um teste rápido e para editar arquivos do PC?",
          "r": [
            "Script em Python: o SDK, com chave de API.",
            "Teste rápido: a CLI ant ou o playground do Console.",
            "Editar arquivos do PC: o Claude Code."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "SDKs, CLI e bibliotecas (sete linguagens, a CLI ant e as versões atuais: Python 2.6.0 e ant 2.7.1)",
            "https://platform.claude.com/docs/pt-BR/cli-sdks-libraries/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Início rápido da CLI ant (instalação, login e primeiro pedido)",
            "https://platform.claude.com/docs/pt-BR/cli-sdks-libraries/cli/quickstart",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Python SDK (instalação, uso, novas tentativas, tempo limite de 10 minutos repetido duas vezes e a dica do python-dotenv com o arquivo .env)",
            "https://platform.claude.com/docs/pt-BR/cli-sdks-libraries/sdks/python",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Migrando para a versão 2026-10-21 da API (temperature passa a dar erro; o SDK e a CLI mandam a chave em Authorization: Bearer)",
            "https://platform.claude.com/docs/pt-BR/api/migration-2026-10-21",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Visão geral do Agent SDK (comparação com o Client SDK e a CLI)",
            "https://code.claude.com/docs/pt/agent-sdk/overview",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Legal e conformidade do Claude Code (produtos usam chave de API)",
            "https://code.claude.com/docs/pt/legal-and-compliance",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Créditos de API para os planos Max, Ultra e Team (não cobrem o Claude Code; a mensagem Credit balance too low)",
            "https://platform.claude.com/docs/pt-BR/about-claude/api-credits-for-subscribers",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Autenticação do Claude Code (precedência: com ANTHROPIC_API_KEY aceita, a chave passa à frente da assinatura)",
            "https://code.claude.com/docs/pt/authentication",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Remote Control (recusa sessões autenticadas por chave de API)",
            "https://code.claude.com/docs/pt/remote-control",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Versões da CLI ant no GitHub (2.7.1, de 06/11/2026, com arquivo para Windows)",
            "https://github.com/anthropics/anthropic-cli/releases",
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
          "A API é a porta; o SDK a usa no seu programa, e a CLI, pelo terminal",
          "Isso. E o Claude Code é uma CLI que age como agente."
        ],
        [
          "API, SDK e CLI são três serviços pagos, com assinaturas separadas",
          "O que se paga é o uso da API; o SDK e a CLI são gratuitos e usam a mesma API."
        ],
        [
          "O SDK substitui a API: quem o instala não precisa mais de chave nem de API",
          "O SDK usa a API por baixo, e cada pedido precisa de chave e é cobrado."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O que é um SDK?",
        "o": [
          [
            "Uma chave para liberar a API sem pagar nada",
            "Não existe chave que libere a API sem pagar; o SDK é código, não chave."
          ],
          [
            "Um modelo menor, feito só para programas",
            "O SDK não é modelo: é a biblioteca que leva os pedidos até o modelo."
          ],
          [
            "Uma biblioteca pronta que usa a API por você",
            "Isso. Ela monta os pedidos, tenta de novo e traduz a resposta."
          ]
        ],
        "c": 2
      },
      {
        "p": "Você quer que o Claude edite arquivos do seu PC enquanto conversa com você. O que usa?",
        "o": [
          [
            "O Claude Code, uma CLI que é agente",
            "Isso. Ele decide os passos e age nos arquivos, pela assinatura."
          ],
          [
            "A CLI ant, com um comando por arquivo",
            "O ant manda pedidos à API, mas não edita arquivos do seu PC."
          ],
          [
            "O SDK de Python, numa conversa no app",
            "O SDK é para programas seus; ele não edita arquivos sozinho."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre SDK e Agent SDK?",
        "O SDK comum só leva e traz pedidos: se o modelo pedir uma ferramenta, o seu programa executa. O Agent SDK traz pronto o ciclo do Claude Code, com as ferramentas, para você montar um agente seu. A aula 12.6 mostra o Agent SDK."
      ],
      [
        "Preciso instalar o ant?",
        "Não. Ele é útil para testar a API sem escrever programa, mas o curso usa o SDK de Python a partir da aula 10.4. Se quiser o ant, a página de versões no GitHub tem um arquivo para Windows."
      ],
      [
        "Por que um tutorial antigo dá erro?",
        "Porque a API e o SDK mudam de versão, e uma versão nova pode recusar um pedido que a antiga aceitava. Em 21/10/2026 saiu a API 2026-10-21, e o SDK de Python 2.x passou a usá-la. Procure exemplos do SDK 2.x."
      ]
    ]
  },
  "1-4": {
    "tempo": 45,
    "video": "a1-4",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você digita na busca de um {{site}} e as sugestões aparecem antes de você terminar a palavra; você marca uma aula como concluída no PC e, no celular, ela aparece sem a marca. As duas coisas se explicam do mesmo jeito: um site tem uma parte na sua tela, o {{frontend}}, uma parte num {{servidor}}, o {{backend}}, e às vezes um {{banco-de-dados|banco de dados}}, e esta aula ensina a apontar cada uma.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Toda vez que você pedir ao Claude um site, um painel ou um {{aplicativo|app}}, ele vai montar uma ou mais dessas três partes, e o que você pede decide quais. \"Uma página que mostre o meu currículo\" é só frontend. \"Um formulário em que os clientes deixem o e-mail\" precisa de backend e de banco de dados, porque alguém tem de receber e guardar esses e-mails. Saber disso antes evita pedir um site \"simples\" que, na verdade, precisa de servidor, banco e cuidado com dados pessoais."
      ],
      [
        "p",
        "Ajuda também a diagnosticar. Botão fora do lugar no celular é problema de frontend. Formulário que diz \"enviado\" e o dado some é problema de backend ou de banco. E ajuda na segurança: tudo o que está no frontend chega inteiro ao {{navegador}} de quem visita, então segredo, como uma {{chave-api|chave de API}}, nunca mora ali. Esse erro já expôs bancos de dados inteiros de apps feitos às pressas, e o módulo 15 conta um caso real."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num restaurante. O **salão** é o frontend: as mesas, o cardápio, a decoração, tudo o que o cliente vê e toca. A **cozinha** é o backend: fica nos fundos, o cliente não entra, e é lá que os pedidos são conferidos (tem esse prato? a comanda está paga?) e preparados. A **despensa** é o banco de dados: onde os ingredientes ficam guardados, organizados em prateleiras, para a cozinha achar rápido. O **garçom** leva o pedido do salão à cozinha e traz o prato de volta, e esse vai e vem é o que a {{internet}} faz entre o seu navegador e o servidor."
      ],
      [
        "quebra",
        "Num site, o salão não fica no restaurante: o servidor manda uma cópia do salão para a sua casa, e quem arruma as mesas é o seu navegador. Por isso cada visitante tem o próprio salão, e o que você muda no seu não muda no dos outros. Há também restaurantes sem cozinha, que só entregam pratos prontos e sempre iguais: são os sites estáticos, e o site deste curso é um deles. E a despensa de um site não só guarda: ela responde a perguntas, como \"quais artigos começam com sel?\", em milésimos de segundo. Se você leu a aula 0.6, lá a cozinha era o servidor inteiro; aqui ela se divide: quem confere e prepara os pedidos é o backend, e a despensa, o banco de dados, muitas vezes fica em outro servidor."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Frontend: o que roda no seu navegador"
      ],
      [
        "p",
        "O frontend é feito de três linguagens que você viu na aula 0.3: o {{html|HTML}} diz o que cada coisa é, o {{css|CSS}} diz como ela aparece, e o {{javascript|JavaScript}} diz como ela se comporta quando você toca. Esses arquivos ficam num servidor e são baixados pelo navegador quando você abre o site. A partir daí, tudo acontece no seu aparelho: o navegador lê os arquivos e desenha a página."
      ],
      [
        "p",
        "O site deste curso é um bom exemplo. O arquivo principal, o `index.html`, é curto. Estas são, de verdade, as linhas do meio dele:"
      ],
      [
        "saida",
        "<div id=\"app\"></div>\n<noscript>Este curso precisa de JavaScript para funcionar.</noscript>\n<script type=\"module\" src=\"app.js\"></script>"
      ],
      [
        "p",
        "Não há uma linha de aula ali. A primeira linha é uma caixa vazia chamada \"app\". A terceira manda o navegador baixar o `app.js`, o JavaScript do curso, que busca os outros arquivos, com o texto das aulas, e monta a página dentro da caixa. A do meio só aparece se o JavaScript estiver desligado. Você vai ver isso com os próprios olhos no laboratório."
      ],
      [
        "p",
        "E o seu progresso? O botão \"Marcar como concluída\" grava a marca no próprio navegador, num armazenamento que cada navegador tem para os sites. Ela não vai para servidor nenhum. Por isso, no celular, ou numa janela anônima do PC, a aula aparece sem a marca: é outro navegador, com outro armazenamento. A página \"Como funciona\", no menu do site, diz isso numa linha: o progresso fica salvo em cada aparelho. A aula 15.8 vai ligar o site a um banco de dados justamente para resolver isso."
      ],
      [
        "p",
        "Por que importa para você: o frontend é público. Qualquer pessoa vê os arquivos com um atalho, Ctrl+U, e as {{devtools|ferramentas do desenvolvedor}}, que abrem com F12, mostram ainda mais. Nada que precise ficar escondido pode estar ali."
      ],
      [
        "h3",
        "Backend: o que roda no servidor"
      ],
      [
        "p",
        "O backend é um {{programa}} que {{rodar|roda}} num servidor, longe do visitante. Ele recebe pedidos, aplica as regras, consulta o banco de dados e devolve uma resposta. O visitante nunca vê o {{codigo|código}} dele, e por isso é ali que moram os segredos: a chave de uma API, a senha do banco, a regra de quem pode ver o quê. Ele pode ser escrito em {{python|Python}}, em JavaScript ou em várias outras linguagens; para o navegador, tanto faz, porque só chega a resposta."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, que o laboratório desta aula refaz. Na Wikipédia em português, você digita \"selic\" na caixa de busca, devagar. A cada letra, o JavaScript da página manda um pedido ao servidor, que em português seria \"me dê até 10 títulos que combinem com sel\". O backend recebe, procura e devolve uma lista em {{json|JSON}}. O JavaScript pega a lista e desenha as sugestões embaixo da caixa. No nosso teste, em 02/11/2026, digitando uma letra por segundo, saíram cinco pedidos, um por letra, com nomes como `title?q=s&limit=10`, `title?q=se&limit=10` e assim por diante, até `title?q=selic&limit=10`. O começo da resposta ao último foi este:"
      ],
      [
        "saida",
        "{\"pages\":[{\"id\":163382,\"key\":\"Taxa_Selic\",\"title\":\"Taxa Selic\",\"excerpt\":\"Selic\",\"matched_title\":\"Selic\",\"anchor\":null,\"description\":\"Taxa de juros do Brasil\",\"thumbnail\":null},"
      ],
      [
        "p",
        "Na tela, a primeira sugestão foi \"Taxa Selic (Redirecionado de Selic)\". O frontend só desenhou; quem achou foi o backend."
      ],
      [
        "p",
        "Nem todo site tem um backend programado. O site deste curso não tem: o servidor só entrega arquivos prontos, iguais para todo mundo. Isso é um {{site-estatico|site estático}}, e ele é barato, rápido e difícil de invadir. A exceção é o Tutor com código de convite: quando estiver ligado, cada pergunta vai a uma {{funcao-servidor|função no servidor}}, que guarda a chave da API longe do navegador. Sem o código, o Tutor usa respostas prontas, que já vieram com o frontend."
      ],
      [
        "h3",
        "Banco de dados: onde os dados ficam guardados"
      ],
      [
        "p",
        "O banco de dados é um programa que guarda dados organizados e responde a buscas. A imagem mais próxima é uma planilha com várias abas: cada aba é uma tabela, cada linha é um registro e cada coluna é um campo. A diferença é que o banco aguenta milhares de pessoas lendo e gravando ao mesmo tempo, aplica regras (este campo é obrigatório, este usuário só vê as próprias linhas) e acha um registro entre milhões sem ler um por um."
      ],
      [
        "p",
        "Na Wikipédia, os artigos ficam em bancos de dados: a página técnica da Wikimedia diz que o MariaDB é o principal sistema de banco de dados dos sites dela. A busca enquanto você digita usa outro tipo de banco, um índice feito só para achar texto depressa. Num app seu, no módulo 15, o banco vai ser o do Supabase, e a aula 15.4 mostra como criar uma tabela sem deixá-la aberta para o mundo."
      ],
      [
        "p",
        "Quando não precisa de banco: site que só mostra conteúdo, igual para todos, como um currículo, um cardápio ou este curso. Quando precisa: sempre que algo digitado por alguém tem de ser guardado e visto depois, por essa pessoa ou por outra."
      ],
      [
        "h3",
        "As três partes, de uma vez"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Parte",
            "Onde roda",
            "O que faz",
            "Quem vê"
          ],
          "linhas": [
            [
              "Frontend",
              "No navegador de quem visita",
              "Desenha a página e reage aos toques",
              "Qualquer visitante, inteiro"
            ],
            [
              "Backend",
              "Num servidor",
              "Recebe pedidos, aplica regras e guarda segredos",
              "Só quem cuida do site"
            ],
            [
              "Banco de dados",
              "Num servidor, em geral separado",
              "Guarda os dados e responde a buscas",
              "Só o backend, se estiver bem configurado"
            ]
          ]
        }
      ],
      [
        "p",
        "O caminho completo de um pedido, no restaurante e no site: você toca no salão (frontend), o garçom leva o pedido (a internet), a cozinha confere e prepara (backend), busca o que precisa na despensa (banco de dados), e o prato volta à sua mesa, onde o salão o arruma na tela."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Todo site tem backend?** Não. Site estático, como este curso, só tem frontend e um servidor que entrega arquivos. Backend entra quando algo precisa ser recebido, conferido ou guardado.",
          "**O F12 mostra o código do backend?** Não. Mostra o que chegou ao navegador: os arquivos do frontend, os pedidos que ele fez e as respostas. O código do backend fica no servidor.",
          "**Se eu mudar o texto de um site pelo F12, ele muda para todo mundo?** Não. Muda só na sua cópia, e some quando você recarrega a página. A aula 2.12 brinca com isso.",
          "**Planilha é banco de dados?** Parece na forma, mas não foi feita para muita gente gravando ao mesmo tempo, com regras de acesso. Para um controle só seu, a planilha basta.",
          "**Preciso aprender a programar backend?** Não neste curso. Você vai pedir ao Claude e conferir o resultado; a aula 15.3b ensina a ler uma consulta ao banco, sem escrever."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: full stack, API e onde cada parte fica",
          "blocos": [
            [
              "p",
              "Quem faz as três partes é chamado de desenvolvedor full stack. A conversa entre o frontend e o backend costuma ser uma {{api|API}}, no mesmo sentido da aula 1.3: o `title?q=selic` da Wikipédia é um pedido à API de busca dela, com regras públicas, que qualquer programa pode usar."
            ],
            [
              "p",
              "Hospedar um frontend estático costuma ser de graça, em serviços como o {{github|GitHub}} Pages. Backend e banco pedem um servidor ligado o tempo todo; os planos grátis da Vercel e do Supabase, que o módulo 15 usa, têm limites, e a aula 15.6 mostra quais."
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
          "pergunta": "Esta é uma página inteira, só com HTML. O que você acha que acontece quando alguém digita o nome e clica em \"Confirmar presença\"?",
          "codigo": "<h1>Lista de presença</h1>\n<p>Reunião de sexta, às 10h</p>\n<input placeholder=\"Seu nome\">\n<button>Confirmar presença</button>",
          "linguagem": "html",
          "resposta": "Nada é guardado. O botão aparece e pode ser clicado, mas não há para onde mandar o nome: é só frontend. Quem recarregar a página vê a caixa vazia de novo, e ninguém mais vê o nome que você digitou. Para a lista funcionar de verdade, faltam duas partes: um backend que receba o nome e um banco de dados que o guarde, para todo mundo ver depois. Mexer no frontend muda só a aparência, como os botões abaixo mostram.",
          "vivo": [
            [
              "Trocar o texto do botão",
              "<h1>Lista de presença</h1>\n<p>Reunião de sexta, às 10h</p>\n<input placeholder=\"Seu nome\">\n<button>Vou!</button>"
            ],
            [
              "Tirar a caixa do nome",
              "<h1>Lista de presença</h1>\n<p>Reunião de sexta, às 10h</p>\n<button>Confirmar presença</button>"
            ],
            [
              "Trocar o título",
              "<h1>Quem vem na sexta?</h1>\n<p>Reunião de sexta, às 10h</p>\n<input placeholder=\"Seu nome\">\n<button>Confirmar presença</button>"
            ],
            [
              "Voltar ao original",
              "<h1>Lista de presença</h1>\n<p>Reunião de sexta, às 10h</p>\n<input placeholder=\"Seu nome\">\n<button>Confirmar presença</button>"
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
          "p": "Você pediu ao Claude \"um site em que meus clientes deixem o e-mail para receber novidades\". Do que esse site precisa, além do HTML e do CSS?",
          "o": [
            [
              "De um {{dominio|domínio}} próprio, para os e-mails não se perderem no caminho",
              "O domínio é o endereço do site. Ele não recebe nem guarda e-mail de formulário nenhum."
            ],
            [
              "De um backend que receba o e-mail e de um banco que o guarde",
              "Isso. Sem as duas partes, o formulário aparece, mas o e-mail some. E, como é dado pessoal, a aula 11.8 fala da {{lgpd|LGPD}}, a lei brasileira de proteção de dados pessoais."
            ],
            [
              "De mais JavaScript na página, para o navegador guardar a lista",
              "O navegador guardaria a lista só no aparelho de cada visitante, e você nunca a veria. Precisa de backend e banco."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu para o seu site usar a API do Claude. O Claude respondeu: \"Antes de mexer, pensei em onde a chave ficaria escondida. Pus a sua chave de API no arquivo script.js, que roda no navegador de quem visita, e não no HTML, que qualquer um vê. Assim, só o site tem acesso a ela.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o script.js também chega inteiro ao navegador, e qualquer um vê a chave",
              "Isso. Todo arquivo do frontend chega inteiro a quem visita, o HTML e o JavaScript. A chave tem de ficar no backend, numa função no servidor."
            ],
            [
              "Está errada: o script.js roda no servidor, e não no navegador de quem visita",
              "Um arquivo .js carregado pela página roda no navegador, como o Claude disse. O erro está em achar que isso esconde a chave."
            ],
            [
              "Está certa: o JavaScript fica embaralhado, e ninguém consegue ler a chave",
              "Mesmo embaralhado, o código chega inteiro ao navegador, e a chave aparece no texto dele ou nos pedidos que ele faz."
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
            "\"Se aparece na tela, está no servidor.\"",
            "O que aparece na tela foi montado pelo seu navegador, a partir de arquivos que o servidor mandou. O servidor só entregou as peças."
          ],
          [
            "\"Site sem banco de dados não funciona.\"",
            "Funciona, se ele só mostra conteúdo, igual para todos. O banco entra quando é preciso guardar algo que alguém digitou."
          ],
          [
            "\"Escondi a chave no JavaScript da página.\"",
            "Tudo o que está no frontend chega a quem visita. Segredo mora no backend."
          ],
          [
            "\"Mudei o texto pelo F12 e consertei o site.\"",
            "Você mudou a sua cópia, no seu navegador. Recarregou, voltou. Para mudar de verdade, é preciso mudar o arquivo no servidor."
          ],
          [
            "\"Marquei a aula no PC, então ela está marcada no celular.\"",
            "O progresso deste curso fica no navegador de cada aparelho. Sem um banco de dados no meio, os dois não se falam. A aula 15.8 resolve isso."
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
          "p": "O que faz cada uma das três partes, e onde roda?",
          "r": [
            "Frontend: desenha a página, no navegador de quem visita.",
            "Backend: recebe pedidos, aplica regras e guarda segredos, num servidor.",
            "Banco de dados: guarda os dados e responde a buscas, atrás do backend."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que a marca de aula concluída não aparece no celular?",
          "r": [
            "A marca fica gravada no navegador do aparelho onde você marcou.",
            "O site do curso é estático: não tem banco de dados para o progresso.",
            "Cada aparelho guarda o seu; a aula 15.8 liga os dois a um banco."
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
          "titulo": "Aponte as três partes em dois sites",
          "lugar": "No navegador do PC (Edge ou Chrome); uma parte dá para fazer no celular",
          "tempo": "20 minutos",
          "antes": "Você vai olhar dois sites com outros olhos. Primeiro, o deste curso, que é quase todo frontend. Depois, a Wikipédia, onde dá para ver o frontend pedindo coisas ao backend enquanto você digita. Não precisa {{instalar|instalar}} nada, nem abrir o {{claude-code|Claude Code}}: só o navegador do PC. As ferramentas do desenvolvedor aparecem de leve, só para olhar; a aula 2.12 explica o que há nelas. Pelo celular: dá para fazer os passos 1 a 4 e ver as sugestões da Wikipédia aparecendo, mas não os pedidos, porque o navegador do celular não tem F12. Testado em 02/11/2026: o código da página do curso, a marca de concluída e os pedidos e respostas da Wikipédia foram conferidos de verdade; a tela do F12 e a janela anônima não foram abertas no teste (não testado), e os nomes das abas vêm da {{documentacao|documentação}} do Edge em português.",
          "passos": [
            {
              "faz": "Abra este curso no navegador do PC, pelo mesmo endereço que aparece na barra do navegador do celular.",
              "espera": "Aparece a página inicial do curso."
            },
            {
              "faz": "Entre numa aula que você já leu, como a 0.3.",
              "espera": "A aula aparece, com o texto e os exercícios."
            },
            {
              "faz": "Role até o fim da aula.",
              "espera": "Lá no fim, aparece o botão \"Marcar como concluída\" (ou \"Desmarcar aula\", se você já tinha marcado)."
            },
            {
              "faz": "Clique em \"Marcar como concluída\", se ainda não tiver marcado.",
              "espera": "Aparece \"Aula concluída.\" e, ao lado, o botão \"Desmarcar aula\". A marca foi gravada no seu navegador."
            },
            {
              "faz": "Aperte Ctrl+U.",
              "saida": "<div id=\"app\"></div>\n<noscript>Este curso precisa de JavaScript para funcionar.</noscript>\n<script type=\"module\" src=\"app.js\"></script>",
              "espera": "Abre uma aba nova com o código da página: um arquivo curto, sem o texto da aula, com as linhas acima no meio. O texto que você leu chegou depois, em outros arquivos, e o JavaScript montou a página no seu navegador. Isto é frontend."
            },
            {
              "faz": "Feche a aba do código.",
              "espera": "Você volta à aba da aula."
            },
            {
              "faz": "Clique na barra de endereço, no alto da janela.",
              "espera": "O endereço inteiro da aula fica selecionado, com fundo azul."
            },
            {
              "faz": "Aperte Ctrl+C.",
              "espera": "O endereço da aula fica copiado. Nada muda na tela."
            },
            {
              "faz": "Abra uma janela anônima com Ctrl+Shift+N. No Edge, ela se chama InPrivate; no Chrome, anônima.",
              "espera": "Abre uma janela nova, de cor escura, avisando que é anônima ou InPrivate."
            },
            {
              "faz": "Na barra de endereço da janela anônima, cole o endereço com Ctrl+V.",
              "espera": "O endereço da aula aparece na barra."
            },
            {
              "faz": "Aperte Enter.",
              "espera": "A mesma aula aparece, mas com o botão \"Marcar como concluída\", sem a sua marca. A janela anônima tem um armazenamento separado, como se fosse outro aparelho. O progresso mora no navegador, não num banco de dados do site."
            },
            {
              "faz": "Feche a janela anônima.",
              "espera": "Sobra a janela normal, com a aula aberta."
            },
            {
              "faz": "Na janela normal, abra a Wikipédia em português:",
              "cola": "https://pt.wikipedia.org",
              "espera": "A página inicial da Wikipédia, com a caixa \"Pesquisar na Wikipédia\" no alto."
            },
            {
              "faz": "Aperte F12.",
              "espera": "Abre um painel ao lado ou embaixo da página: as ferramentas do desenvolvedor. Se o Edge perguntar se você quer abrir as ferramentas, confirme."
            },
            {
              "faz": "Nas abas do alto do painel, clique em Rede (em inglês, Network). Se ela não estiver à vista, procure no botão de mais ferramentas, a seta ou o sinal de mais.",
              "espera": "A ferramenta Rede abre, com a lista quase vazia: ela só registra o que acontece depois de aberta."
            },
            {
              "faz": "Na fileira de filtros, clique em Fetch/XHR.",
              "espera": "A lista passa a mostrar só os pedidos que o JavaScript da página faz enquanto você usa o site."
            },
            {
              "faz": "Clique na caixa \"Pesquisar na Wikipédia\".",
              "espera": "O cursor pisca dentro da caixa."
            },
            {
              "faz": "Digite selic devagar, uma letra por segundo.",
              "espera": "Embaixo da caixa aparecem sugestões, e a primeira é \"Taxa Selic (Redirecionado de Selic)\". Na lista da Rede surge uma linha a cada letra: title?q=s&limit=10, title?q=se&limit=10 e assim por diante, até title?q=selic&limit=10. Cada linha é o frontend pedindo ao backend."
            },
            {
              "faz": "Na lista da Rede, clique na última linha, title?q=selic&limit=10.",
              "espera": "Ao lado da lista, abre um painel com abas como {{cabecalho|Cabeçalhos}}, Visualização e Resposta (em inglês, Headers, Preview e Response)."
            },
            {
              "faz": "Clique na aba Resposta (em inglês, Response).",
              "saida": "{\"pages\":[{\"id\":163382,\"key\":\"Taxa_Selic\",\"title\":\"Taxa Selic\",\"excerpt\":\"Selic\",\"matched_title\":\"Selic\",\"anchor\":null,\"description\":\"Taxa de juros do Brasil\",\"thumbnail\":null},",
              "espera": "Aparece a resposta do backend, em JSON, começando como o trecho acima: a lista de títulos que ele achou. Os números e a ordem podem mudar com o tempo, porque os artigos mudam. Quem guardou os títulos foi o banco de dados; quem procurou foi o backend; quem desenhou as sugestões foi o frontend."
            },
            {
              "faz": "Aperte F12 de novo para fechar o painel.",
              "espera": "A página volta ao normal. Nada do que você olhou mudou o site para mais ninguém."
            }
          ],
          "errado": "se você só estudou pelo celular e não sabe o endereço no PC, abra o curso no celular, toque na barra de endereço, use o botão de compartilhar e mande o link para você mesmo; depois, abra esse link no PC. Se o Ctrl+U não abrir nada, clique com o botão direito numa parte vazia da página e escolha a opção de exibir o código-fonte. Se a lista da Rede ficar vazia ao digitar, confira se o filtro Fetch/XHR está marcado e se o painel já estava aberto antes de você digitar; apague o texto da caixa e digite de novo, devagar. Se você digitar rápido, saem menos pedidos, às vezes um só, e tudo bem. Se a marca de concluída aparecer na janela anônima, confira se a janela é mesmo anônima: ela avisa isso no alto. E se a busca da Wikipédia tiver mudado de jeito, a ideia continua a mesma; a aula 2.12 mostra como achar o pedido certo.",
          "naoTestado": "A tela do F12 (os nomes das abas Rede, Fetch/XHR, Cabeçalhos, Visualização e Resposta), o Ctrl+U, a cópia do endereço pela barra e a janela anônima não foram abertos no teste. Os pedidos e as respostas da Wikipédia, o código da página do curso e a marca de concluída sumindo num armazenamento limpo foram conferidos de verdade em 02/11/2026."
        }
      ],
      [
        "fontes",
        [
          [
            "Introdução ao lado servidor, MDN (código do cliente, do servidor e banco de dados)",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "O que são as ferramentas de desenvolvimento do navegador, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Inspecionar atividade de rede, Microsoft Edge DevTools (ferramenta Rede, Cabeçalhos, Visualização, Resposta)",
            "https://learn.microsoft.com/pt-br/microsoft-edge/devtools/network/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "MariaDB na Wikimedia, Wikitech (o principal banco de dados dos sites da Wikimedia)",
            "https://wikitech.wikimedia.org/wiki/MariaDB",
            "oficial",
            "02/11/2026"
          ],
          [
            "Extensão CirrusSearch, MediaWiki (a busca da Wikipédia, num índice de busca)",
            "https://www.mediawiki.org/wiki/Extension:CirrusSearch",
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
          "Frontend é o código bonito, e backend é o código feio que ninguém quer ver",
          "A diferença não é de beleza: é de onde roda e de quem vê."
        ],
        [
          "Todo site precisa das três partes, senão não consegue abrir no navegador",
          "Site estático, como este curso, abre só com frontend e um servidor de arquivos."
        ],
        [
          "Frontend roda no navegador, backend no servidor e o banco guarda os dados",
          "Isso. E segredo nunca mora no frontend, porque ele chega inteiro a quem visita."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Onde roda o frontend de um site?",
        "o": [
          [
            "No servidor da empresa que é dona do site",
            "No servidor ficam os arquivos e o backend; o frontend roda no navegador de quem visita."
          ],
          [
            "No navegador de quem está visitando o site",
            "Isso. O navegador baixa os arquivos e desenha a página."
          ],
          [
            "No banco de dados, ao lado dos dados",
            "O banco guarda dados; ele não desenha página nenhuma."
          ]
        ],
        "c": 1
      },
      {
        "p": "Um formulário diz \"enviado\", mas o dado some. Onde costuma estar o problema?",
        "o": [
          [
            "No backend ou no banco de dados",
            "Isso. Quem recebe e guarda o dado são eles; o frontend só mostrou a mensagem."
          ],
          [
            "No CSS que desenha esse formulário",
            "O CSS muda a aparência; não recebe nem guarda dado nenhum."
          ],
          [
            "No navegador de quem o preencheu",
            "O navegador só mandou o pedido; guardar é trabalho do backend e do banco."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Todo site tem backend?",
        "Não. Um site estático, como este curso, só tem frontend e um servidor que entrega arquivos. Backend entra quando algo precisa ser recebido, conferido ou guardado, como um formulário ou um login."
      ],
      [
        "Por que a chave de API não pode ficar no JavaScript?",
        "Porque o JavaScript da página chega inteiro ao navegador de quem visita. Qualquer pessoa pode abrir os arquivos e copiar a chave. Ela tem de ficar no backend, numa função no servidor."
      ],
      [
        "O F12 é perigoso?",
        "Não. Ele só mostra e mexe na sua cópia da página, no seu navegador. Recarregou, voltou ao normal. O cuidado é outro: não cole no console comandos que um site ou um estranho mandar você colar."
      ]
    ]
  },
  "1-5": {
    "tempo": 25,
    "video": "a1-5",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já {{instalar|instalou}} coisas com nomes como {{skill}}, {{plugin}} e {{conector}} sem saber direito a diferença, e às vezes uma delas fez algo que você não pediu. São cinco peças que se encaixam no {{claude-code|Claude Code}}, e esta aula dá a primeira ideia de cada uma, para os módulos 7, 8 e 9 aprofundarem.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quase todo tutorial avançado de Claude Code fala em skill, {{mcp|MCP}}, {{hook}}, plugin e {{subagente}}, e muita gente instala os cinco sem saber o que cada um faz. O resultado é conhecido: uma skill que nunca dispara, um conector ligado sem motivo, um plugin que traz junto um {{programa}} que {{rodar|roda}} sozinho em toda conversa. Com o mapa das cinco peças, você sabe o que pedir, o que instalar e o que olhar antes de instalar."
      ],
      [
        "p",
        "A segunda razão é segurança. Das cinco peças, quatro podem fazer o seu computador rodar alguma coisa, e uma delas, o plugin, pode trazer as outras todas de uma vez. No {{modo-automatico|Auto}}, o modo padrão, um revisor bloqueia o que parece arriscado, mas o que ele deixa passar roda sem perguntar; em {{bypass}}, quase nada é barrado. Saber qual peça executa o quê, e com que {{privilegios|privilégios}}, é o que separa \"instalei uma coisa útil\" de \"deixei um programa desconhecido rodando no meu nome\"."
      ],
      [
        "p",
        "A terceira é economia. Cada peça ocupa {{contexto}} de um jeito diferente: umas carregam um pouco em toda conversa, outras só quando usadas, outras nada. A aula 1.2 mostrou que contexto é custo e foco; aqui você vê de onde vem uma parte dele."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense no Claude Code como o estagiário da aula 0.0: um funcionário novo no seu escritório, imagem que a aula 8.1 vai retomar. A **skill** é um manual de procedimento na estante: ele só abre quando a tarefa pede. O **MCP** é a tomada que liga o funcionário a sistemas de fora, como a agenda e o e-mail, e o **conector** é uma tomada que já vem instalada pela administração do prédio. O **hook** é um sensor automático: toda vez que alguém sai da sala, a luz apaga, sem ninguém decidir. O **plugin** é uma caixa entregue por um fornecedor, com manuais, tomadas e sensores dentro, instalados de uma vez. E o **subagente** é um colega mandado para outra sala fazer uma pesquisa: ele volta só com o resumo, e a mesa do funcionário fica limpa."
      ],
      [
        "quebra",
        "Um manual de papel não faz nada sozinho; uma skill pode trazer programas que o Claude roda, então ela também age. A caixa do fornecedor, ao ser aberta, já liga tudo o que tem dentro, com as suas {{permissao|permissões}}, e você não vê os fios. O sensor do prédio é fixo, mas um hook roda qualquer {{comando}} que estiver escrito nele. E o colega não é de graça: cada subagente gasta os próprios {{token|tokens}}."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Skill: o manual que o Claude abre quando a tarefa pede"
      ],
      [
        "p",
        "Uma skill é uma pasta com um arquivo chamado `SKILL.md`, com um nome, uma descrição e as instruções de um jeito de fazer. No começo de cada conversa, o Claude Code carrega só o nome e a descrição de cada skill instalada. Quando o seu pedido combina com uma descrição, ele abre o resto. Você também pode chamar pelo nome, com uma barra: `/resumo`, por exemplo."
      ],
      [
        "p",
        "Um exemplo inteiro. Você tem uma skill \"resumo\", cuja descrição diz \"escreve resumo de aula em {{html|HTML}}, com um exercício no meio; use quando pedirem resumo de aula\". Você pede \"faça o resumo da aula de ontem\". O Claude vê que o pedido combina, abre o `SKILL.md`, segue as instruções e entrega o HTML do seu jeito, como da última vez."
      ],
      [
        "p",
        "O ponto que muda tudo: **skill também executa**. A pasta pode trazer {{script|scripts}} que o Claude roda e pode liberar {{ferramenta|ferramentas}} sem pedir a sua confirmação enquanto a skill trabalha. Instalar uma skill de um estranho é instalar um programa. A aula 8.1 mostra casos reais, e a 8.6 ensina a avaliar uma antes de instalar."
      ],
      [
        "p",
        "Quando não usar: tarefa de uma vez só, que se resolve com um pedido direto; e regra que vale em toda conversa, como \"responda em português\", que vai no {{claude-md|CLAUDE.md}}, lido sempre."
      ],
      [
        "h3",
        "MCP e conector: a tomada para sistemas de fora"
      ],
      [
        "p",
        "O MCP é um padrão aberto para ligar uma IA a ferramentas e dados de fora. Do outro lado da tomada fica um {{servidor}} MCP, um programa que oferece ações, como \"criar evento\" ou \"ler e-mail\", além de dados e pedidos prontos. Esse servidor pode rodar na {{internet}}, numa empresa ou no seu próprio PC; um servidor local é um programa que o Claude Code liga na sua máquina."
      ],
      [
        "p",
        "O conector é um servidor MCP que você liga pela sua conta do claude.ai, em Personalizar e depois Conectores, fazendo login no serviço. É um MCP gerido: você não instala nada, só autoriza. O glossário oficial do Claude Code diz que, quando você entra no Claude Code com essa conta, os seus conectores aparecem no {{mcp-comando|/mcp}} ao lado dos servidores que você adicionou no PC. A central de ajuda avisa que cada serviço conectado processa os dados na própria infraestrutura, sob os termos dele."
      ],
      [
        "p",
        "Um exemplo inteiro. Com o conector da agenda ligado, você pede \"marque reunião amanhã às 10h\". O Claude vê, entre as ferramentas do conector, uma que cria eventos, e a chama com data, hora e título. O serviço cria o evento e devolve a confirmação. Sem o conector, o Claude só conseguiria escrever \"abra a sua agenda e crie o evento\"."
      ],
      [
        "p",
        "Quando não usar: para ler uma pasta do seu PC, o Claude Code já alcança sozinho, sem MCP. E ligue só o que você usa: cada servidor é mais uma porta aberta para os seus dados. O módulo 9 ensina a configurar e a escolher."
      ],
      [
        "h3",
        "Hook: o sensor que dispara sempre"
      ],
      [
        "p",
        "Um hook é uma ação que o Claude Code roda sozinho num momento fixo: antes de uma ferramenta rodar, depois de um arquivo ser editado, no começo da {{sessao|sessão}}, quando o Claude termina de responder. A ação pode ser um comando, um pedido a um {{site}}, uma ferramenta MCP, um pedido ao próprio {{modelo}} ou um subagente. O que define o hook é que o disparo é fixo: ele dispara no evento, sem o modelo decidir se quer. O resultado é sempre igual quando a ação é um comando ou um pedido a um site; quando é um pedido a um modelo ou um subagente, quem decide o que fazer é esse outro modelo."
      ],
      [
        "p",
        "Um exemplo inteiro, o da {{documentacao|documentação}} oficial. Você quer que todo arquivo editado pelo Claude saia formatado do mesmo jeito. Põe no {{settings-json|arquivo de configurações}} do projeto um hook para o momento \"depois de usar uma ferramenta\", filtrado para as ferramentas de editar e de criar arquivos, que roda um formatador: um programa que arruma a aparência do texto do arquivo, como recuos, espaços e aspas, sem mudar o que ele faz. Daí em diante, cada edição dispara o formatador, sem você pedir e sem o Claude poder esquecer. O \"Preveja antes de ver\" desta aula mostra esse hook."
      ],
      [
        "p",
        "Por que importa: a página oficial sobre como estender o Claude Code diz que uma instrução como \"nunca edite o {{env|.env}}\", escrita no CLAUDE.md ou numa skill, é um pedido, e não uma garantia; um hook que roda um comando para bloquear a edição é garantia. O outro lado: um hook roda comandos com as suas permissões, e pode ter vindo dentro de um plugin que você instalou. O comando {{hooks-comando|/hooks}} mostra os que estão ligados. A aula 7.6 cria um."
      ],
      [
        "p",
        "Quando não usar: quando a ação precisa de julgamento, como revisar um texto. Isso é skill. Hook é para o que tem de acontecer sempre igual."
      ],
      [
        "h3",
        "Plugin: a caixa que traz várias peças de uma vez"
      ],
      [
        "p",
        "Um plugin é um {{pacote}} que junta skills, hooks, subagentes e servidores MCP numa instalação só. Ele vem de um marketplace, um catálogo de plugins, e as skills dele ganham o nome do plugin na frente, como `meu-plugin:revisar`, para não brigar com as suas. É assim que se distribui uma configuração inteira para outra pessoa, ou para outro projeto."
      ],
      [
        "p",
        "A frase mais importante da página de segurança de plugins é a primeira: um plugin que você instala pode executar {{codigo|código}} arbitrário na sua máquina com os seus privilégios de usuário. Os hooks dele rodam como comandos, os servidores MCP dele rodam como programas no seu PC, e os programas que ele traz ficam ao alcance do Claude. O aviso que o próprio Claude Code mostra antes de instalar diz que a Anthropic não controla o que vem dentro dos plugins e não consegue garantir que funcionem como prometido, nem que não vão mudar."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, do jeito seguro. Antes de instalar, você digita {{plugin-comando|/plugin}}, escolhe o plugin e lê a seção que lista o que ele vai instalar: comandos, skills, hooks e servidores. Ela diz que existe um hook, mas não o que ele roda; por isso você abre a página do plugin e lê o arquivo de hooks. Só então decide. A aula 7.7 faz isso com calma."
      ],
      [
        "p",
        "Quando não usar: para ter uma skill só, instale só a skill. E não instale um plugin \"para ver o que tem dentro\": ao ser instalado, em geral ele já fica ligado."
      ],
      [
        "h3",
        "Subagente: o ajudante que trabalha em outra sala"
      ],
      [
        "p",
        "Um subagente é um assistente que o Claude chama para uma parte do trabalho. Ele roda na própria {{janela-de-contexto|janela de contexto}}, com instruções, ferramentas e permissões dele, faz a tarefa e devolve só um resumo para a conversa principal. O Claude Code já vem com vários. Os três principais são o Explore, que só lê e pesquisa; o Plan, que junta contexto antes de um plano; e um de uso geral. Os outros são auxiliares, que em geral ele chama sozinho em situações específicas; a caixa \"Para ir mais fundo\" desta aula dá os nomes. Uma variação, o {{fork}}, começa com uma cópia da conversa até ali, em vez de começar do zero."
      ],
      [
        "p",
        "Um exemplo com os números da simulação oficial da janela de contexto. Você pede para pesquisar como o seu projeto trata um assunto, em vários arquivos. O subagente lê 6.100 tokens de arquivos na janela dele e devolve um resultado de 420 tokens. A sua conversa recebe só os 420, e continua leve."
      ],
      [
        "p",
        "Por que importa: o subagente mantém a sua conversa focada e deixa o trabalho correr em paralelo. Mas as boas práticas avisam: cada subagente custa tokens a mais, e entregar a mesma tarefa a um subagente não deixa a resposta melhor. A aula 7.8 mostra quando vale."
      ],
      [
        "p",
        "Quando não usar: tarefa curta, que se resolve na própria conversa em um ou dois passos."
      ],
      [
        "h3",
        "As cinco lado a lado"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Peça",
            "Em uma frase",
            "Quem dispara",
            "Pode rodar algo no seu PC?",
            "Aula que aprofunda"
          ],
          "linhas": [
            [
              "Skill",
              "Manual de um jeito de fazer",
              "O Claude, pela descrição, ou você, pelo nome",
              "Sim: scripts e ferramentas liberadas",
              "8.1 a 8.6"
            ],
            [
              "MCP e conector",
              "Tomada para sistemas de fora",
              "O Claude, ao usar uma ferramenta do servidor",
              "Sim: um servidor local roda no PC; um remoto age no serviço",
              "9.1 a 9.5"
            ],
            [
              "Hook",
              "Sensor que dispara sempre num momento",
              "O próprio Claude Code, no evento",
              "Sim: comandos com as suas permissões",
              "7.6"
            ],
            [
              "Plugin",
              "Caixa com várias das peças acima",
              "Você, ao instalar; depois, cada peça de dentro",
              "Sim: tudo o que traz roda com os seus privilégios",
              "7.7"
            ],
            [
              "Subagente",
              "Ajudante em outra sala, que volta com um resumo",
              "O Claude ou você",
              "Sim: usa ferramentas, conforme as permissões",
              "7.8"
            ]
          ]
        }
      ],
      [
        "p",
        "Repare na quarta coluna: a resposta é \"sim\" em todas. Nenhuma das cinco é \"só texto\". E o custo de contexto varia: as descrições das skills e os nomes das ferramentas MCP entram em toda conversa; um hook não ocupa nada, a não ser que devolva texto; um subagente ocupa a janela dele, não a sua."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso de alguma dessas peças para usar o Claude Code?** Não. Ele funciona sem nenhuma. Cada peça entra quando aparece um motivo: um jeito de fazer que se repete, um sistema de fora, algo que tem de acontecer sempre.",
          "**Custa dinheiro?** Não diretamente. Custa contexto e tokens: descrições em toda conversa, e subagentes gastando os deles.",
          "**Como vejo o que tenho instalado?** No Claude Code: {{comando-skills|/skills}} lista as skills, /mcp os servidores e conectores, /hooks os hooks e /plugin os plugins.",
          "**Conector e MCP são coisas diferentes?** Conector é um servidor MCP ligado pela sua conta do claude.ai. A tomada é a mesma; muda quem instalou.",
          "**Qual é a mais arriscada?** A que traz mais coisas de uma vez sem você ver: o plugin. Depois, qualquer skill ou servidor de um estranho. Os hooks disparam sem perguntar em qualquer modo. O resto depende do modo: no Auto, o revisor só bloqueia o que parece perigoso; em bypass, quase nada é barrado."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: de onde vêm os nomes",
          "blocos": [
            [
              "p",
              "Hook, em inglês, é gancho: um ponto do programa onde dá para pendurar uma ação sua. Plugin vem de \"plug in\", plugar. MCP quer dizer Model Context Protocol, protocolo de contexto para modelos: um padrão aberto, publicado pela Anthropic em 2024 e adotado por outras empresas. E skill é habilidade."
            ],
            [
              "p",
              "Os subagentes auxiliares que vêm com o Claude Code eram três em 02/11/2026: o claude, para o que não cabe nos outros; o statusline-setup, que configura a linha de status do {{terminal}}; e o claude-code-guide, que responde perguntas sobre o próprio Claude Code."
            ],
            [
              "p",
              "Há também peças vizinhas que você vai encontrar: o estilo de saída, que muda o jeito de o Claude responder em toda a sessão; as equipes de {{agente|agentes}}, várias sessões coordenadas, ainda experimentais; e os workflows, scripts que rodam muitos subagentes de uma vez. Os módulos 7 e 12 tratam delas."
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
          "pergunta": "Não precisa ler código aqui. Abaixo está o hook do exemplo da documentação oficial, traduzido em três linhas de português (o original é um trecho do arquivo de configurações, que a aula 7.6 mostra). O que você acha: quem decide quando ele roda, e o que acontece se o Claude editar três arquivos seguidos?",
          "codigo": "Quando:  depois de usar uma ferramenta (PostToolUse)\nFiltro:  só as ferramentas de editar e de criar arquivos (Edit e Write)\nAção:    rodar o formatador no arquivo que acabou de mudar",
          "linguagem": "texto",
          "resposta": "Quem decide é o evento, e não o modelo. Cada vez que a ferramenta de editar ou a de criar arquivos termina, o Claude Code roda o formatador naquele arquivo: três edições, três vezes, sem ninguém pedir e sem o Claude poder esquecer. Repare também na terceira linha: ela roda um programa no seu PC, com as suas permissões. No original, essa linha é um comando escrito por quem fez o hook, e é ela que vale ler antes de instalar um plugin que traga hooks, porque o que estiver escrito ali vai rodar."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você quer que, toda vez que o Claude editar um arquivo, um formatador rode sozinho, sem depender de ele lembrar. Qual peça usa?",
          "o": [
            [
              "Uma skill de formatação, com a regra escrita nas instruções",
              "A skill depende de o Claude decidir abri-la e seguir a regra. Pode não disparar, e aí o formatador não roda."
            ],
            [
              "Um hook depois de cada edição, que roda o formatador",
              "Isso. O hook dispara no evento, toda vez, sem o modelo decidir."
            ],
            [
              "Uma linha no CLAUDE.md dizendo para sempre formatar",
              "O CLAUDE.md é lido em toda conversa, mas é um pedido, não uma garantia. Numa sessão longa, ele pode esquecer."
            ],
            [
              "Um subagente revisor, chamado no fim de cada tarefa",
              "Ele custa tokens a mais, e quem decide chamá-lo é o Claude. Para algo que tem de acontecer sempre igual, não serve."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu um plugin e o Claude respondeu: \"Instalei o plugin que você pediu. Fique tranquilo: plugins só trazem instruções em texto, como as skills, então nada roda no seu PC sem você mandar.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: plugin não traz instruções em texto, só conectores ligados à sua conta",
              "Plugin pode trazer skills, que são instruções, além de hooks, subagentes e servidores MCP; conector é outra peça, ligada pela conta do claude.ai. O erro do Claude está em dizer que nada roda."
            ],
            [
              "Está certa: plugin e skill são só texto, e o Claude segue se quiser",
              "Skill também executa, e plugin pode trazer hooks e servidores que rodam sozinhos, com as suas permissões."
            ],
            [
              "Está errada: plugin pode trazer hooks e servidores que rodam sozinhos no seu PC",
              "Isso. E a skill também executa. A documentação diz que um plugin pode rodar código arbitrário no seu PC."
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
            "\"Skill é só um texto de instruções.\"",
            "Uma skill pode trazer scripts e liberar ferramentas. Trate como um programa: leia antes de instalar."
          ],
          [
            "\"Conector e MCP são coisas diferentes.\"",
            "Conector é um servidor MCP ligado pela sua conta do claude.ai. Aparece no /mcp do Claude Code junto com os outros."
          ],
          [
            "\"Escrevi no CLAUDE.md, então sempre acontece.\"",
            "O CLAUDE.md é um pedido que o Claude costuma seguir. O que tem de acontecer sempre, sem exceção, é trabalho de hook."
          ],
          [
            "\"Mandar para um subagente deixa a resposta melhor.\"",
            "Delegar não melhora a resposta e custa tokens a mais. O subagente serve para isolar leituras grandes e trabalhar em paralelo."
          ],
          [
            "\"O plugin está num marketplace, então é seguro.\"",
            "O nome do marketplace diz quem publica o catálogo, não o que cada plugin faz. Leia o que ele instala antes de instalar."
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
          "p": "Skill, MCP e hook: o que cada um faz?",
          "r": [
            "Skill: um manual de um jeito de fazer, aberto quando a tarefa pede; pode rodar scripts.",
            "MCP: liga o Claude a sistemas de fora; conector é um MCP ligado pela conta do claude.ai.",
            "Hook: roda sozinho num momento fixo, sem o modelo decidir."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Plugin e subagente: o que são, e qual o cuidado com cada um?",
          "r": [
            "Plugin: um pacote com skills, hooks, subagentes e servidores, que roda com os seus privilégios.",
            "Cuidado com o plugin: ler o que ele instala, inclusive os hooks, antes de instalar.",
            "Subagente: um ajudante com contexto próprio, que volta com um resumo e gasta tokens a mais."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Estender o Claude Code (quando usar CLAUDE.md, skills, subagentes, hooks, MCP e plugins)",
            "https://code.claude.com/docs/pt/features-overview",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Segurança e confiança de plugins (código arbitrário com os seus privilégios)",
            "https://code.claude.com/docs/pt/plugins/security",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Glossário do Claude Code (skill, hook, plugin, subagente, conector)",
            "https://code.claude.com/docs/pt/glossary",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Automatizar ações com hooks (o exemplo do formatador)",
            "https://code.claude.com/docs/pt/hooks-guide",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Criar subagentes personalizados (os que já vêm: Explore, Plan, uso geral e três auxiliares)",
            "https://code.claude.com/docs/pt/sub-agents",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Boas práticas do Claude Code (subagentes custam tokens; regra no CLAUDE.md é pedido; hook prompt ou agent não é determinístico)",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Explore a janela de contexto (o subagente que lê 6.100 tokens e devolve 420)",
            "https://code.claude.com/docs/pt/context-window",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Use connectors to extend Claude's capabilities (conectores; texto em português), central de ajuda da Anthropic",
            "https://support.claude.com/pt/articles/11176164-use-connectors-to-extend-claude-s-capabilities",
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
          "Skill, MCP, hook, plugin e subagente são só nomes diferentes para a mesma extensão",
          "Cada um faz uma coisa: ensinar, conectar, disparar sempre, empacotar e delegar."
        ],
        [
          "Cada peça faz uma coisa, e todas podem rodar algo no PC: olhe antes de instalar",
          "Isso. Nenhuma é só texto, e o plugin pode trazer todas de uma vez."
        ],
        [
          "Só os plugins rodam programas no PC; as skills, os hooks e os conectores são só texto",
          "Skills trazem scripts, hooks rodam comandos e servidores MCP podem rodar no PC."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Qual destas peças dispara sempre, num momento fixo, sem o modelo decidir?",
        "o": [
          [
            "A skill, que vem numa pasta com um SKILL.md",
            "A skill abre quando o Claude acha que a descrição combina, ou quando você a chama."
          ],
          [
            "O subagente, que trabalha na própria janela",
            "Quem decide chamar o subagente é o Claude, ou você."
          ],
          [
            "O hook, que mora no arquivo de configurações",
            "Isso. Ele roda no evento, toda vez."
          ]
        ],
        "c": 2
      },
      {
        "p": "O que é um conector do claude.ai?",
        "o": [
          [
            "Um servidor MCP que você liga pela sua conta",
            "Isso. Você liga nas configurações e ele aparece também no /mcp do Claude Code."
          ],
          [
            "Uma skill que já vem pronta dentro do app",
            "Skill é um manual de um jeito de fazer; conector liga o Claude a um serviço."
          ],
          [
            "Um plugin que só roda no app do celular, sem o PC",
            "Conector não é plugin, e funciona no app e no Claude Code."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre skill e hook?",
        "A skill é um manual que o Claude abre quando a tarefa combina com a descrição, e ele decide como aplicar. O hook dispara sozinho num momento fixo, sem o modelo decidir se ele roda. Para o que exige julgamento, skill; para o que tem de acontecer sempre, hook."
      ],
      [
        "Por que plugin é mais arriscado?",
        "Porque traz várias peças de uma vez, e algumas rodam sozinhas: hooks como comandos, servidores MCP como programas no seu PC. A documentação diz que um plugin pode executar código arbitrário com os seus privilégios. Leia o que ele instala antes."
      ],
      [
        "Quando vale um subagente?",
        "Quando uma tarefa lê muita coisa e você só precisa do resultado, ou quando dá para trabalhar em paralelo. Ele usa a própria janela de contexto e devolve um resumo. Para tarefa curta, não vale: custa tokens a mais."
      ]
    ]
  },
  "1-6": {
    "tempo": 25,
    "video": "a1-6",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você pediu ao Claude \"salve no {{github|GitHub}}\" e ele fez outra coisa: guardou só no PC, ou criou um {{repositorio|repositório}} que você não queria. O pedido estava claro para você, mas a frase cabia em três ações diferentes, e esta aula mostra como o termo certo encurta o caminho, e como usar o glossário do curso para achá-lo.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O Claude entende português do dia a dia, e isso engana. Como ele quase sempre entende alguma coisa, parece que a palavra exata não importa. Importa, por três motivos. O primeiro é precisão: um pedido vago cabe em várias ações, e o Claude escolhe uma, que pode não ser a sua. O segundo é segurança: no {{modo-automatico|Auto}}, o modo padrão, o {{claude-code|Claude Code}} quase não pergunta (um revisor só bloqueia o que parece arriscado), e em {{bypass}} quase nada é barrado; então a escolha dele costuma virar ação sem você ver. O terceiro é custo: cada ida e volta para corrigir um mal-entendido engorda a conversa, e a aula 1.2 mostrou que conversa longa custa mais e perde o foco."
      ],
      [
        "p",
        "O termo certo também muda o que você consegue conferir. Se você pediu \"faça o {{push}}\", sabe exatamente o que olhar: o {{commit}} apareceu no {{site}} do GitHub? Se pediu \"salve lá\", não sabe nem o que procurar. Este curso tem um glossário justamente para isso: cada palavra técnica vem explicada no ponto em que aparece, e todas ficam reunidas numa página para você consultar quando for pedir algo."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa loja de autopeças. Você chega e pede \"aquela peça redonda que fica perto do motor\". O vendedor entende alguma coisa, mas volta com três opções, pergunta o ano do carro, e talvez você saia com a peça errada. Agora você pede \"a correia dentada do motor 1.0, ano 2018\". Ele traz a certa de primeira, e você confere na caixa se é aquela mesma. O glossário do curso é o catálogo de peças: com ele, você deixa de descrever a forma e passa a dizer o nome."
      ],
      [
        "quebra",
        "O vendedor, na dúvida, pergunta. O Claude, muitas vezes, não pergunta: escolhe a interpretação mais provável e age, e, no Auto ou em bypass, em geral age sem pedir confirmação. Então o pedido vago não é só mais lento; pode virar a ação errada. E o nome certo não basta sozinho: além de \"correia dentada\", o vendedor precisa do modelo do carro. No pedido ao Claude, isso é dizer onde (qual pasta, qual repositório) e como você vai conferir."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Como o glossário aparece nas aulas"
      ],
      [
        "p",
        "Toda palavra técnica aparece sublinhada com pontinhos na primeira vez em que surge em cada aula, como {{modelo}} ou {{contexto}} nesta frase. Num PC com tela larga, a explicação fica na margem direita, ao lado do parágrafo, e você lê sem clicar em nada. Numa tela mais estreita, como a do celular ou uma janela de PC encolhida, a margem não cabe: a explicação fica escondida e abre quando você toca ou clica na palavra; outro toque fecha. Pelo teclado, chegue à palavra com Tab e aperte a barra de espaço."
      ],
      [
        "p",
        "Em geral, só a primeira vez é marcada; numa aula ou noutra, uma palavra importante volta marcada mais adiante. Quando a palavra volta três parágrafos depois sem marca, ela aparece como texto comum, para a aula não virar um mar de sublinhados. Se esqueceu o que era, role até a primeira aparição, ou use a página do glossário."
      ],
      [
        "p",
        "A página \"Glossário\" reúne todos os verbetes do curso em ordem alfabética, com uma caixa \"Filtrar palavras\" no alto: digite parte de uma palavra, e só ficam os verbetes que a contêm, no nome ou na definição. No PC, ela está no menu de cima. No celular, a barra de baixo não tem o Glossário: use \"Buscar\". A busca procura nos títulos das aulas, no texto das aulas prontas e no glossário, e os verbetes aparecem marcados com \"Glossário:\" antes da definição. Tocar num deles abre a página do glossário já no verbete, destacado. No PC, a busca também abre com Ctrl+K."
      ],
      [
        "p",
        "Cada verbete diz o sentido que a palavra tem neste curso. Isso importa porque várias palavras mudam de sentido conforme o assunto, como você vai ver logo abaixo."
      ],
      [
        "h3",
        "Por que o termo certo muda a resposta"
      ],
      [
        "p",
        "O modelo só recebe texto, e um texto vago cabe em várias leituras. Diante disso, ele escolhe a leitura mais provável para o que está no contexto. Às vezes acerta. Quando erra, o erro não parece erro: parece uma resposta confiante para outra pergunta."
      ],
      [
        "p",
        "O exemplo inteiro, com \"salve no GitHub\". Numa pasta que ainda não tem {{git|Git}}, essa frase pode significar pelo menos quatro coisas. Primeiro, só gravar os arquivos no disco, que já estão gravados. Segundo, criar um repositório Git no PC e fazer um commit, uma foto que fica só no seu computador. Terceiro, criar um repositório no site do GitHub, que pode ser público ou privado, e mandar os arquivos para lá. Quarto, mandar para um repositório que já existe, mas que o Claude não sabe qual é. Cada leitura dá um resultado diferente, e a terceira tem um risco a mais: a página de ajuda do GitHub diz que, ao criar um repositório, você escolhe a visibilidade, e um repositório público fica aberto para qualquer pessoa ver."
      ],
      [
        "p",
        "Agora o pedido com os termos: \"crie um repositório privado no GitHub chamado estudo, faça o primeiro commit com os arquivos desta pasta e o push\". Não sobra o que adivinhar: o quê (repositório, commit, push), onde (no GitHub, com esta pasta), e a condição que importa (privado). E você sabe o que conferir: abrir o GitHub e ver o repositório \"estudo\", com o cadeado de privado e os arquivos dentro. A aula 3.3 faz isso no seu PC."
      ],
      [
        "p",
        "O mesmo vale fora do Git. \"Arruma o site\" pode ser qualquer coisa; \"o botão Comprar não aparece no celular: confira o {{css|CSS}} do {{frontend}}\" já diz em que parte procurar, com os termos da aula 1.4. \"O Claude está esquecendo as coisas\" vira \"a conversa passou de 300 mil {{token|tokens}} de contexto: vou dar {{clear|/clear}}\", com os da aula 1.2. \"{{instalar|Instala}} aquela coisa do Gmail\" vira \"ligue o {{conector}} do Gmail no claude.ai\", com os da aula 1.5."
      ],
      [
        "h3",
        "Um jeito de montar o pedido com os termos"
      ],
      [
        "p",
        "Um pedido preciso costuma ter quatro partes. A **ação**, com o verbo certo: criar, fazer o commit, fazer o push, publicar, instalar. O **objeto**, com o nome certo: repositório, {{branch}}, arquivo .md, conector, {{skill}}. O **lugar**: nesta pasta, no GitHub, no PC, no claude.ai. E a **conferência**: como você vai saber que deu certo, como \"me mostre a saída exata do git status\". Nem todo pedido precisa das quatro; os que mexem em coisa importante, sim."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Pedido vago",
            "Pedido com os termos",
            "O que mudou"
          ],
          "linhas": [
            [
              "Salve no GitHub",
              "Faça o commit das mudanças e o push para o GitHub",
              "Diz as duas ações e para onde vai"
            ],
            [
              "Coloca o site no ar",
              "Publique a pasta site no GitHub Pages e me dê o link",
              "Diz o que publicar, onde e o que devolver"
            ],
            [
              "Deixa o Claude lembrar disso",
              "Acrescente esta regra ao {{claude-md|CLAUDE.md}} do projeto",
              "Diz o arquivo certo, lido em toda conversa"
            ],
            [
              "Liga o Claude na minha agenda",
              "Ligue o conector da Agenda no claude.ai, só para leitura",
              "Diz a peça e o limite de acesso"
            ],
            [
              "O Claude está perdido",
              "Dê /clear e recomece com este pedido",
              "Diz a ação e por quê: contexto poluído"
            ]
          ]
        }
      ],
      [
        "h3",
        "Quando você não sabe o termo"
      ],
      [
        "p",
        "Não saber o nome é normal, e há três saídas. A primeira: descreva o resultado que você quer, não o caminho. \"Quero que o meu trabalho fique guardado na {{internet}}, num lugar que só eu veja\" é melhor do que um termo usado errado. A segunda: pergunte antes de pedir. \"Qual é o nome certo do que eu quero fazer, e o que você faria?\" faz o Claude explicar antes de agir. A terceira: procure no glossário pela parte que você lembra; o filtro acha palavras dentro das definições também."
      ],
      [
        "p",
        "O que não fazer: usar um termo técnico errado com confiança. Pedir \"faça o {{merge}}\" quando você queria o push leva o Claude a juntar dois caminhos de trabalho, uma ação diferente, e ele vai obedecer. Na dúvida, descreva."
      ],
      [
        "h3",
        "Palavras que mudam de sentido"
      ],
      [
        "p",
        "Algumas palavras do curso querem dizer uma coisa num assunto e outra em outro. As mais traiçoeiras:"
      ],
      [
        "lista",
        [
          "**Token.** Na IA, é um pedaço de texto, a unidade que o modelo lê e que se paga. Em segurança, um {{token-de-acesso|token de acesso}} é uma senha longa que um {{programa}} usa para provar quem é. Confundir os dois é pedir \"conte os tokens\" e receber uma conversa sobre senhas, ou o contrário.",
          "**Servidor.** Pode ser o computador ligado o tempo todo que entrega um site, ou um programa, como um servidor {{mcp|MCP}}, que pode {{rodar}} no seu próprio PC.",
          "**Cliente.** No dia a dia, quem compra de você. No MCP, o programa que pede, como o Claude Code.",
          "**API e chave de API.** A API é a porta; a chave é o crachá de quem paga. \"Me passa a API\" e \"me passa a chave\" são pedidos muito diferentes, e o segundo nunca se manda por mensagem.",
          "**Agente.** No curso, um programa que age com {{ferramenta|ferramentas}}, em ciclo, até terminar. Não é qualquer chatbot."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso decorar o glossário?** Não. Ele existe para ser consultado na hora de pedir. Com o uso, os termos que você mais usa ficam.",
          "**E se a palavra não estiver no glossário?** Use a busca, que procura também no texto das aulas, pergunte ao Tutor da aula ou peça ao Claude \"explique este termo e me dê um exemplo\".",
          "**Posso misturar português e inglês no pedido?** Pode. Commit, push e branch são nomes de coisas, e o Claude entende. O importante é a palavra apontar para a coisa certa.",
          "**Se eu usar o termo errado, o Claude corrige?** Às vezes. Muitas vezes ele segue o termo, porque não tem como saber que você queria outra coisa. Peça para ele dizer o que vai fazer antes de fazer, quando a ação mexe em algo importante.",
          "**O glossário funciona sem internet?** As explicações vêm junto com a aula: se a aula abriu, as notas abrem."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: os glossários oficiais e os nomes antigos",
          "blocos": [
            [
              "p",
              "A Anthropic mantém dois glossários, os dois em português: o do Claude Code, com termos como {{harness}}, {{turno}}, {{compactacao|compactação}} e conector, e o da plataforma, com termos de modelo, como token e {{janela-de-contexto|janela de contexto}}. Os links estão nas fontes."
            ],
            [
              "p",
              "O glossário do Claude Code tem também uma tabela de termos que mudaram de nome, útil quando você lê um tutorial antigo: o que se chamava \"modo headless\" hoje é \"modo não interativo\", com o mesmo `-p`; os \"{{comando|comandos}} personalizados\" viraram skills, e os arquivos antigos continuam funcionando; e \"slash commands\" virou só \"comandos\". Se um tutorial usa o nome antigo, procure pelo novo."
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
          "pergunta": "Os dois pedidos abaixo são feitos numa pasta que ainda não tem Git. O que você acha que o Claude faz com cada um?",
          "codigo": "Pedido A: salve meu trabalho no GitHub\n\nPedido B: crie um repositório privado no GitHub chamado estudo,\n          faça o primeiro commit com os arquivos desta pasta e o push",
          "linguagem": "texto",
          "resposta": "Com o pedido A, ele precisa adivinhar. Pode criar o Git na pasta e fazer só um commit, que fica no PC; pode criar um repositório no GitHub, e aí escolher sozinho se é público ou privado; pode perguntar o que você quer. Você só descobre depois, conferindo. Com o pedido B, não há o que adivinhar: ele cria o Git na pasta, faz o commit, cria o repositório privado \"estudo\" no GitHub e manda os arquivos com o push. E você sabe o que conferir: o repositório no site, com o cadeado de privado e os arquivos dentro."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você já fez commits no PC e quer que o Claude os mande para o repositório do GitHub que já está ligado à pasta. Qual pedido é o mais preciso?",
          "o": [
            [
              "Faça o merge do que fizemos hoje com o GitHub",
              "Merge junta dois caminhos de trabalho e não manda nada ao GitHub: é o termo errado dito com confiança, e o Claude obedeceria."
            ],
            [
              "Faça o push dos commits desta pasta para o GitHub",
              "Isso. Diz a ação (push), o que vai (os commits já feitos) e para onde (o repositório do GitHub ligado à pasta)."
            ],
            [
              "Salve tudo o que fizemos hoje lá no GitHub",
              "Cabe em várias leituras: pode virar um commit novo, um push ou até um repositório novo."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se token e token de acesso são a mesma coisa. O Claude respondeu: \"Olhei com cuidado: não são, e vale separar. Token, na IA, é um pedaço de texto que o modelo lê e que entra na conta de uso. Token de acesso é uma senha longa que um programa usa para provar quem é, e se guarda como senha.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: token é sempre uma palavra inteira, e nunca um pedaço",
              "Token de IA é um pedaço de texto, que pode ser parte de uma palavra, como a resposta disse."
            ],
            [
              "Está errada: o token de acesso também é cobrado na conta de uso",
              "O token de acesso não é contado nem cobrado: é uma credencial. Só o token de IA entra na conta de uso."
            ],
            [
              "Está certa: são duas coisas diferentes, que dividem o mesmo nome",
              "Isso. Um se conta e se paga; o outro se protege como senha. O tom cuidadoso não diz nada: o que vale é conferir o conteúdo."
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
            "\"Quanto mais curto o pedido, melhor.\"",
            "Curto e vago obriga o Claude a adivinhar. Curto e preciso é ótimo: \"faça o push para o GitHub\" tem seis palavras e não deixa dúvida."
          ],
          [
            "\"Usei a palavra técnica, então ele entendeu o que eu queria.\"",
            "Ele entendeu a palavra. Se a palavra não era a do que você queria, ele faz certinho a coisa errada."
          ],
          [
            "\"Se eu errar o termo, o Claude corrige.\"",
            "Às vezes. Muitas vezes ele segue o termo. Quando a ação é importante, peça para ele dizer o que vai fazer antes."
          ],
          [
            "\"Salvar e fazer commit são a mesma coisa.\"",
            "Salvar grava o arquivo no disco. O commit guarda uma foto no histórico do Git. E nenhum dos dois manda nada para o GitHub: isso é o push."
          ],
          [
            "\"O glossário é para quem está começando.\"",
            "É para quem vai pedir algo. Até quem programa há anos confere o nome certo antes de pedir uma ação que não tem volta."
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
          "p": "Como o glossário aparece no PC e no celular?",
          "r": [
            "A palavra técnica vem sublinhada na primeira vez em que aparece em cada aula.",
            "No PC de tela larga, a explicação fica na margem; em tela estreita, abre ao toque.",
            "A página Glossário tem um filtro, e a busca também acha os verbetes."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que \"crie um repositório privado e faça o push\" funciona melhor que \"salve no GitHub\"?",
          "r": [
            "A frase vaga cabe em várias ações, e o Claude escolhe uma sozinho.",
            "No Auto, o padrão, ou em bypass, ele costuma agir sem perguntar.",
            "O termo certo diz o que fazer, onde, e mostra o que conferir depois."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Glossário do Claude Code (com a tabela de termos renomeados)",
            "https://code.claude.com/docs/pt/glossary",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Glossário da Claude Platform (token, janela de contexto)",
            "https://platform.claude.com/docs/pt-BR/about-claude/glossary",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Criar um repositório, GitHub (a escolha entre público e privado)",
            "https://docs.github.com/pt/repositories/creating-and-managing-repositories/creating-a-new-repository",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Boas práticas do Claude Code (diga ao Claude o que ele não consegue ver)",
            "https://code.claude.com/docs/pt/best-practices",
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
          "O termo certo diz ao Claude o que fazer e onde, e mostra o que conferir",
          "Isso. E o glossário está ali para achar o termo na hora de pedir."
        ],
        [
          "O Claude entende qualquer jeito de pedir, então o termo exato pouco importa",
          "Ele entende alguma coisa, e às vezes outra coisa. E, no Auto ou em bypass, costuma agir sem perguntar."
        ],
        [
          "O glossário serve para decorar os termos antes de começar a usar o Claude",
          "Não precisa decorar: o glossário é para consultar quando você vai pedir algo."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Num celular, como você vê a explicação de uma palavra sublinhada?",
        "o": [
          [
            "Ela aparece sozinha na margem da tela",
            "A margem só aparece em telas largas, como a de um PC; no celular, a nota fica escondida."
          ],
          [
            "Tocando na palavra, que abre a nota",
            "Isso. Outro toque fecha. A busca também acha os verbetes do glossário."
          ],
          [
            "Só pela página Glossário, no menu",
            "No celular, o menu de cima some; e a nota abre direto na palavra, ao toque."
          ]
        ],
        "c": 1
      },
      {
        "p": "Qual a diferença entre token e token de acesso?",
        "o": [
          [
            "O token é um pedaço de texto; o de acesso é uma senha",
            "Isso. Um se conta e se paga; o outro se protege."
          ],
          [
            "Os dois são senhas: uma é da IA, e a outra é do GitHub",
            "O token de IA não é senha: é um pedaço de texto que o modelo lê."
          ],
          [
            "Os dois são a mesma unidade, contada de jeito diferente",
            "São coisas diferentes: um é texto, e o outro é credencial."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Como acho uma palavra no glossário pelo celular?",
        "Toque em \"Buscar\", na barra de baixo, e digite a palavra. Os verbetes do glossário aparecem com \"Glossário:\" antes da definição; tocar num deles abre a página do glossário já no verbete."
      ],
      [
        "E se eu não souber o nome do que quero?",
        "Descreva o resultado que você quer, e não o caminho. Ou pergunte primeiro ao Claude: \"qual é o nome certo do que eu quero fazer, e o que você faria?\". Assim ele explica antes de agir."
      ],
      [
        "Por que o Claude não pergunta quando o pedido é vago?",
        "Porque ele tenta ser útil e escolhe a leitura mais provável. Às vezes pergunta, às vezes não. Por isso, nos pedidos que mexem em algo importante, diga a ação, o lugar e como você vai conferir."
      ]
    ]
  }
};
