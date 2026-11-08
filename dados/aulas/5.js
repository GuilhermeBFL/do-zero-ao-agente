// Módulo 5. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "5-1": {
    "tempo": 30,
    "video": "a5-1",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já perguntou ao Claude sobre algo da semana passada e recebeu uma resposta desatualizada, ou fez a mesma pergunta duas vezes e ganhou duas respostas diferentes. As duas coisas têm a mesma origem, o jeito como um {{modelo}} é feito e como ele escreve, e esta aula abre essa peça por dentro.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O módulo 1 separou as peças: o {{modelo}} é o cérebro, o {{app}} é a janela, a {{api|API}} é a porta para programas e o {{agente}} é quem age. Este módulo abre a primeira peça. Não é preciso matemática: basta entender duas fases. O {{treino}}, que acontece uma vez, antes de você usar, e o uso, que acontece a cada mensagem. Com essas duas ideias, quase todo comportamento estranho do Claude passa a ter explicação."
      ],
      [
        "p",
        "Três exemplos do seu dia. O primeiro: você pergunta a taxa Selic de hoje e recebe um número antigo. O modelo aprendeu com textos até uma data, e o que veio depois ele não leu; a solução é dar a fonte ou deixar que ele busque. O segundo: você pede um nome para o seu {{bot}} três vezes e recebe três nomes. Não é defeito: cada resposta é escrita na hora, com uma parte de sorteio, e isso muda o jeito de conferir. O terceiro: você ensinou uma preferência numa conversa e, na seguinte, ele não lembra. O modelo não aprende com você enquanto conversa; o que parece memória é texto que volta ao {{contexto}}, como o {{claude-md|CLAUDE.md}}."
      ],
      [
        "p",
        "Entender o modelo também protege. Ele escreve com a mesma segurança quando acerta e quando erra, porque não consulta uma lista de fatos: ele produz o texto mais plausível para aquele pedido. A aula 5.2 mostra o que isso causa; esta mostra de onde vem."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao especialista da aula 1.1, o que trabalha numa sala fechada e recebe os pedidos por uma janela de vidro. Como ele ficou tão bom? Antes de o escritório abrir, ele passou anos numa biblioteca gigantesca, lendo quase tudo o que havia: livros, {{site|sites}}, manuais, {{codigo|código}}, em muitas línguas. Ele não levou os livros para a sala. O que ficou foi o jeito de continuar qualquer texto de forma convincente. Depois veio a residência: pessoas experientes davam tarefas, comparavam duas respostas dele e diziam qual era melhor, seguindo um manual de valores escrito, até ele virar um assistente útil e honesto, e não só alguém que completa frases. A biblioteca fechou numa data, e nada do que foi publicado depois passou pelos olhos dele. Então o escritório abriu. A cada visita, ele lê a pasta que você passa pela janela, escreve a resposta palavra por palavra e, quando você sai, não anota nada sobre você."
      ],
      [
        "quebra",
        "Não existe biblioteca nem fichário dentro da sala: o que sobrou do treino são bilhões de números ajustados, e não frases guardadas. Por isso ele não \"consulta\" um fato: ele o produz, e pode produzir um que nunca leu. A residência também não foi feita só por pessoas avaliando uma resposta de cada vez; parte dela usa o manual escrito e outros modelos. E ele atende milhões de visitas ao mesmo tempo, em cópias idênticas, sem cansar e sem lembrar de nenhuma."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Um programa que continua texto"
      ],
      [
        "p",
        "Tecnicamente, o Claude é um {{llm|modelo de linguagem grande}}, em inglês *large language model*, ou LLM. O glossário da plataforma da Anthropic define assim: modelos de IA com muitos {{parametros-do-modelo|parâmetros}}, treinados com grandes quantidades de texto, capazes de responder, resumir e escrever. A tarefa básica de um modelo desses é uma só: receber um texto e prever o que vem depois."
      ],
      [
        "p",
        "Um exemplo do começo ao fim. O texto que chega é \"O Copom decidiu manter a taxa Selic\". O modelo calcula, para cada {{token}} possível, a chance de ele ser o próximo: \"em\" tem chance alta, \"inalterada\" também, \"banana\" quase nenhuma. Ele escolhe um, acrescenta ao texto e repete a conta com o texto um pouco maior. Token por token, sai uma frase, depois um parágrafo. Quando ele escolhe o sinal de \"terminei\", a resposta acaba. É por isso que, no app, você vê as palavras aparecendo aos poucos: elas estão sendo escritas naquele momento."
      ],
      [
        "p",
        "Por que isso importa: o modelo não tem uma gaveta de respostas prontas. Cada resposta é montada na hora, a partir do que está no contexto e do que ele aprendeu no treino. E não use essa ideia para subestimá-lo. Um tutorial da Academy da Anthropic resume: ele escreve uma palavra de cada vez, mas não pensa uma palavra de cada vez. Uma pesquisa da Anthropic de 2025 viu o Claude escolher a rima antes de começar a escrever o verso que termina nela."
      ],
      [
        "h3",
        "Treino, parte 1: ler quase tudo para prever a próxima palavra"
      ],
      [
        "p",
        "A primeira fase se chama {{pre-treino|pré-treino}}. O modelo começa como um arquivo enorme de números sem sentido. Ele recebe um trecho de texto, tenta prever o próximo token, compara com o token que estava lá de verdade e ajusta um pouquinho os números para errar menos da próxima vez. Isso se repete uma quantidade gigantesca de vezes, sobre uma montanha de texto. Segundo a página de transparência da Anthropic, entram informação pública da internet, conjuntos de dados públicos e privados, dados que usuários permitiram usar e dados sintéticos, criados por outros modelos."
      ],
      [
        "p",
        "O que acontece por baixo é uma espécie de compressão. Para prever bem a próxima palavra em textos de economia, o modelo precisa captar o que é juros, o que costuma vir depois de \"a inflação acumulada em doze meses\", como um contrato se organiza. Ninguém escreve essas regras: elas aparecem nos números, de tanto ajustar. A consequência prática é que ele aprende muito bem o que aparece muitas vezes e mal o que aparece pouco. O ano de criação do Banco Central está em milhares de textos; o telefone de uma loja de bairro, em quase nenhum."
      ],
      [
        "p",
        "O resultado do pré-treino ainda não é um assistente. O glossário da Anthropic avisa que um modelo só pré-treinado não é bom em responder perguntas nem em seguir instruções. Diante de \"Qual é a capital da França?\", ele pode continuar com \"Qual é a capital da Alemanha?\", porque, numa lista de perguntas de prova, é isso que costuma vir em seguida. Prever bem não é o mesmo que ajudar."
      ],
      [
        "p",
        "Esse treino custa caro e é feito uma vez por modelo, nos computadores da Anthropic. Você não paga o treino: paga o uso, em limite do plano ou em tokens da API, como a aula 5.5 calcula."
      ],
      [
        "h3",
        "Treino, parte 2: o pós-treino transforma o modelo em assistente"
      ],
      [
        "p",
        "A segunda fase é o {{pos-treino|pós-treino}}. Uma das técnicas, descrita no mesmo glossário, é o {{rlhf|RLHF}}, aprendizado por reforço com retorno humano: pessoas recebem duas ou mais respostas para o mesmo pedido e dizem qual é melhor, e o modelo é ajustado para preferir respostas parecidas com as mais bem avaliadas. A Anthropic acrescenta um documento escrito, a {{constituicao|constituição do Claude}}, com os valores e o comportamento que ela quer; segundo a empresa, esse texto molda diretamente o comportamento do modelo no treino."
      ],
      [
        "p",
        "É no pós-treino que aparecem o jeito de conversar, a recusa a pedidos perigosos, o formato das respostas, a vontade de ajudar e o uso de {{ferramenta|ferramentas}}. A meta que a Anthropic declara cabe em três palavras: útil, honesto e inofensivo."
      ],
      [
        "p",
        "Por que isso importa: os vícios também nascem aqui. Se o treino premia quem sempre responde alguma coisa, o modelo aprende a chutar em vez de dizer \"não sei\", e a aula 5.2 mostra como isso vira resposta inventada. Se quem avaliava preferia respostas que concordavam com ele, o modelo pode aprender a concordar demais, e a aula 5.7 mostra como reconhecer isso."
      ],
      [
        "h3",
        "A data de corte: a biblioteca fechou"
      ],
      [
        "p",
        "O treino usa textos até uma data, a {{data-de-corte|data de corte}}. Em 08/11/2026, a página de modelos da plataforma listava junho de 2026 como data de corte dos quatro modelos atuais, Fable 5.1, Opus 5.5, Sonnet 5.5 e Haiku 5.5, tanto para os dados de treino quanto para o \"conhecimento confiável\", que é até onde o conhecimento do modelo é mais completo."
      ],
      [
        "p",
        "Um exemplo inteiro. Você pergunta, sem busca na web: \"qual foi a última decisão do Copom?\". O modelo só leu até junho. Na melhor das hipóteses, ele diz que não conhece decisões recentes. Na pior, escreve a decisão de junho como se fosse a de ontem, com toda a segurança. Agora faça a mesma pergunta no {{claude-code|Claude Code}} ou no app com a {{busca-na-web|busca na web}} ligada: o modelo pede uma busca, a ferramenta traz páginas atuais para o contexto, e ele responde a partir delas. O modelo é o mesmo; o que mudou foi o que chegou à mesa dele."
      ],
      [
        "p",
        "Quando a data de corte importa: preço, taxa, versão de programa, lei que mudou, notícia, e o próprio Claude. Um recurso do Claude Code lançado no mês passado pode ser desconhecido pelo modelo, e é por isso que este curso manda conferir na {{documentacao|documentação}}. Quando não importa: matemática, gramática, conceitos estáveis de economia, o básico de {{python|Python}}."
      ],
      [
        "h3",
        "Parâmetros: o que sobrou do treino"
      ],
      [
        "p",
        "Os números que o treino ajustou se chamam parâmetros, ou pesos. São eles o modelo: um arquivo gigantesco de números, que {{rodar|roda}} nos {{servidor|servidores}} da Anthropic. Quantos são, a Anthropic não publica. Um {{modelo-aberto|modelo aberto}} é aquele cujos pesos qualquer pessoa pode baixar e rodar no próprio computador; o Claude não é aberto."
      ],
      [
        "p",
        "Uma distinção ajuda muito: o que está nos pesos é a memória do treino, fixa; o que está no contexto é a memória de trabalho, nome que o próprio glossário da plataforma usa. Você não acrescenta nada aos pesos conversando. Para o modelo saber algo seu, o caminho é pôr no contexto: colar o documento, deixar o Claude Code ler o arquivo, escrever no CLAUDE.md. E as suas conversas? Na central de privacidade da Anthropic, a opção \"Ajude a melhorar nossos modelos de IA\", em Configurações e Privacidade, decide se conversas e sessões de programação novas podem entrar em treinos futuros. Ligada ou não, o modelo que você usa hoje não muda por causa delas."
      ],
      [
        "h3",
        "O uso: o que acontece quando você aperta Enter"
      ],
      [
        "p",
        "A segunda fase da vida do modelo é o uso, que os técnicos chamam de {{inferencia|inferência}}. Quando você aperta Enter no Claude Code, ele monta um pedido com as {{instrucoes-do-sistema|instruções do sistema}}, o CLAUDE.md, a {{memoria-automatica|memória automática}}, a conversa até ali e a sua mensagem, como a aula 1.2 mostrou. Tudo vira tokens. O modelo lê o pacote inteiro e começa a escrever, token por token."
      ],
      [
        "p",
        "Nos modelos atuais, a escrita pode começar por um trecho de {{pensamento}}: o modelo raciocina antes de responder e decide quanto pensar conforme o nível de {{esforco|esforço}}, que a aula 5.4 apresenta. Se ele precisa de algo de fora, escreve um pedido de ferramenta, como \"leia este arquivo\". Quem executa é o programa em volta, o {{harness}}, que devolve o resultado; o modelo lê e continua. Repare: em nenhum momento o modelo saiu da sala. Quem leu o arquivo foi o Claude Code."
      ],
      [
        "h3",
        "Por que a mesma pergunta dá respostas diferentes"
      ],
      [
        "p",
        "Na hora de escolher cada token, o modelo não pega sempre o mais provável: há uma parte de sorteio, que respeita as chances. Por isso \"me dê um nome para o bot\" sai diferente a cada vez, e \"quanto é 17 vezes 23?\" quase sempre sai igual: quando uma resposta tem chance muito maior que as outras, o sorteio quase sempre cai nela. Durante anos, quem usava a API controlava esse sorteio com a {{temperatura}}. Na versão da API de 21/10/2026, esse ajuste foi removido: mandar temperatura dá erro, e o comportamento se orienta pelo pedido. Mesmo antes, o glossário da plataforma avisava que nem a temperatura zero deixava as respostas totalmente iguais."
      ],
      [
        "p",
        "Por que importa: para criar, a variação ajuda, porque você pede três versões e escolhe. Para fatos, ela é um sinal. Se você faz a mesma pergunta factual em duas conversas novas e recebe respostas diferentes, pelo menos uma está errada. O contrário não vale: duas respostas iguais não provam que estão certas."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**O Claude aprende com as minhas conversas?** Não durante a conversa: o modelo é fixo. O que parece memória é texto devolvido ao contexto, como a conversa, o CLAUDE.md e a memória automática. Treinos futuros podem usar conversas, conforme a opção de privacidade.",
          "**Preciso instalar alguma coisa?** Não. O modelo roda nos servidores da Anthropic; o app e o Claude Code só mandam o pedido e mostram a resposta.",
          "**Custa?** O treino é custo da Anthropic. O seu custo é o uso: o limite do plano, ou tokens pela API.",
          "**Se ele só prevê a próxima palavra, como resolve problemas difíceis?** Para prever bem textos difíceis, ele precisou aprender muito sobre o assunto. Mas a mesma pesquisa de 2025 mostrou que a explicação que ele dá de como fez uma conta pode não bater com o que ele fez por dentro. Trate \"eu calculei assim\" como mais um texto, e peça uma verificação de verdade, como a aula 6.5 ensina.",
          "**Claude, Opus e Claude Code são a mesma coisa?** Claude é a família; Opus 5.5 é um modelo dela; o Claude Code é o programa em volta, que dá ferramentas ao modelo."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: tokens, atenção e onde ler mais",
          "blocos": [
            [
              "p",
              "O jeito de quebrar o texto em tokens muda de um modelo para outro. Segundo a página de preços da plataforma, os modelos a partir do Claude 4.7 usam um tokenizador novo, que gera cerca de 30% mais tokens para o mesmo texto."
            ],
            [
              "p",
              "Por dentro, os modelos atuais são de um tipo chamado transformer. A peça central dele é a atenção: para prever o próximo token, cada token \"olha\" para os outros do contexto e pesa quais importam. A aula 5.3 volta a isso, porque é a atenção que explica por que contexto demais atrapalha."
            ],
            [
              "p",
              "Nas fontes, em inglês: o artigo da Anthropic de 2022 sobre RLHF e a pesquisa de 2025 que acompanhou o raciocínio do Claude por dentro, com o caso da rima e o caso da conta explicada de um jeito e feita de outro."
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
          "pergunta": "Este programa imita, em miniatura, as duas fases. No treino, ele lê três frases e conta que palavra veio depois de \"taxa\". No uso, mostra as chances de cada uma. O que você acha que ele imprime?",
          "codigo": "# Treino: o \"modelo\" lê as frases e conta que palavra veio depois de \"taxa\"\nfrases = [\n    [\"a\", \"taxa\", \"subiu\", \"hoje\"],\n    [\"a\", \"taxa\", \"caiu\", \"ontem\"],\n    [\"a\", \"taxa\", \"subiu\", \"de\", \"novo\"],\n]\ncontagem = {}\nfor frase in frases:\n    seguinte = frase[2]  # a palavra logo depois de \"taxa\"\n    contagem[seguinte] = contagem.get(seguinte, 0) + 1  # sem a palavra ainda, começa do 0\n\n# Uso: as chances de cada palavra vir depois de \"taxa\"\nfor palavra in contagem:\n    print(f\"taxa -> {palavra}: {contagem[palavra]} de {len(frases)}\")",
          "linguagem": "python",
          "resposta": "Duas linhas: \"taxa -> subiu: 2 de 3\" e \"taxa -> caiu: 1 de 3\". Em duas das três frases, \"subiu\" veio depois de \"taxa\"; em uma, \"caiu\". O treino foi a contagem, feita uma vez; o uso foi consultar as chances. Use os botões: com uma frase a mais no treino, as chances mudam; com uma palavra trocada, aparece uma opção nova. Um modelo de verdade não conta pares de palavras: ele ajusta bilhões de números e olha o contexto inteiro, não só a palavra anterior. Mas a ideia é a mesma: o que ele \"sabe\" vem do texto do treino, e o que ele responde é uma escolha entre continuações, cada uma com a sua chance.",
          "vivo": [
            [
              "Acrescentar \"a taxa caiu hoje\" ao treino",
              "# Treino: o \"modelo\" lê as frases e conta que palavra veio depois de \"taxa\"\nfrases = [\n    [\"a\", \"taxa\", \"subiu\", \"hoje\"],\n    [\"a\", \"taxa\", \"caiu\", \"ontem\"],\n    [\"a\", \"taxa\", \"subiu\", \"de\", \"novo\"],\n    [\"a\", \"taxa\", \"caiu\", \"hoje\"],\n]\ncontagem = {}\nfor frase in frases:\n    seguinte = frase[2]  # a palavra logo depois de \"taxa\"\n    contagem[seguinte] = contagem.get(seguinte, 0) + 1  # sem a palavra ainda, começa do 0\n\n# Uso: as chances de cada palavra vir depois de \"taxa\"\nfor palavra in contagem:\n    print(f\"taxa -> {palavra}: {contagem[palavra]} de {len(frases)}\")",
              "taxa -> subiu: 2 de 4\ntaxa -> caiu: 2 de 4"
            ],
            [
              "Trocar \"caiu\" por \"disparou\"",
              "# Treino: o \"modelo\" lê as frases e conta que palavra veio depois de \"taxa\"\nfrases = [\n    [\"a\", \"taxa\", \"subiu\", \"hoje\"],\n    [\"a\", \"taxa\", \"disparou\", \"ontem\"],\n    [\"a\", \"taxa\", \"subiu\", \"de\", \"novo\"],\n]\ncontagem = {}\nfor frase in frases:\n    seguinte = frase[2]  # a palavra logo depois de \"taxa\"\n    contagem[seguinte] = contagem.get(seguinte, 0) + 1  # sem a palavra ainda, começa do 0\n\n# Uso: as chances de cada palavra vir depois de \"taxa\"\nfor palavra in contagem:\n    print(f\"taxa -> {palavra}: {contagem[palavra]} de {len(frases)}\")",
              "taxa -> subiu: 2 de 3\ntaxa -> disparou: 1 de 3"
            ],
            [
              "Voltar ao original",
              "# Treino: o \"modelo\" lê as frases e conta que palavra veio depois de \"taxa\"\nfrases = [\n    [\"a\", \"taxa\", \"subiu\", \"hoje\"],\n    [\"a\", \"taxa\", \"caiu\", \"ontem\"],\n    [\"a\", \"taxa\", \"subiu\", \"de\", \"novo\"],\n]\ncontagem = {}\nfor frase in frases:\n    seguinte = frase[2]  # a palavra logo depois de \"taxa\"\n    contagem[seguinte] = contagem.get(seguinte, 0) + 1  # sem a palavra ainda, começa do 0\n\n# Uso: as chances de cada palavra vir depois de \"taxa\"\nfor palavra in contagem:\n    print(f\"taxa -> {palavra}: {contagem[palavra]} de {len(frases)}\")",
              "taxa -> subiu: 2 de 3\ntaxa -> caiu: 1 de 3"
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
          "p": "No app do Claude, com a busca na web desligada, você pergunta qual foi a decisão do Copom de ontem. A resposta vem com um número e um tom confiante. O que explica melhor o risco dessa resposta?",
          "o": [
            [
              "O modelo consultou um arquivo de notícias da Anthropic que ficou desatualizado",
              "O modelo não consulta arquivo nenhum: ele escreve a partir do que aprendeu no treino e do que está no contexto."
            ],
            [
              "O modelo buscou a notícia sozinho, mas o site oficial estava fora do ar",
              "Com a busca desligada, ninguém buscou nada. E quem busca é uma ferramenta do programa, não o modelo sozinho."
            ],
            [
              "O treino parou numa data, e o modelo não leu nada publicado depois",
              "Isso. Sem busca, ele só tem o treino; o número pode ser de meses atrás, escrito com a mesma segurança."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ao Claude, no app, que respondesse sempre em tópicos. Ele respondeu: \"Combinado! A cada conversa eu aprendo um pouco mais sobre você, e os meus pesos vão se ajustando ao seu jeito. Em poucos dias, você nem vai precisar pedir.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: cada conversa ajusta um pouco os pesos do modelo para aquela pessoa",
              "Os pesos não mudam com o uso. Eles foram fixados no treino, e o modelo que você usa hoje é o mesmo amanhã."
            ],
            [
              "Está errada: os pesos não mudam com a conversa; o que lembra é texto devolvido ao contexto",
              "Isso. A preferência só vale onde ela voltar ao contexto em cada conversa, como o CLAUDE.md ou a memória automática."
            ],
            [
              "Está errada: os pesos se ajustam, mas só depois que a conversa é encerrada",
              "Nem durante nem depois da conversa: o uso não muda os pesos. Conversas só podem entrar num treino futuro, de outro modelo."
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
            "\"Ele procura a resposta num banco de dados.\"",
            "Ele escreve a resposta na hora, token por token, a partir do treino e do contexto. Não existe uma resposta guardada para ele copiar, e por isso ele pode escrever algo que nunca leu."
          ],
          [
            "\"Respondeu com segurança, então sabe.\"",
            "O tom é o mesmo quando ele acerta e quando erra, porque o tom também é texto previsto. Segurança na frase não é evidência."
          ],
          [
            "\"Ele aprende comigo enquanto a gente conversa.\"",
            "Os pesos não mudam durante o uso. O que volta na conversa seguinte é o que estiver no contexto: CLAUDE.md, memória automática, instruções de projeto."
          ],
          [
            "\"Ele sabe as notícias de hoje.\"",
            "Sem busca, ele sabe até a data de corte. Para o que muda, dê a fonte ou deixe a ferramenta buscar."
          ],
          [
            "\"Perguntei duas vezes e veio igual, então está certo.\"",
            "Respostas iguais só mostram que a escolha mais provável foi a mesma. Para fato importante, confira na fonte."
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
          "p": "Quais são as duas fases do treino, e o que cada uma ensina ao modelo?",
          "r": [
            "Pré-treino: prever a próxima palavra numa montanha de texto.",
            "Pós-treino: virar assistente, com respostas comparadas por pessoas e um manual de valores.",
            "As duas acontecem antes do uso: conversar não muda o modelo."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que a mesma pergunta pode ter respostas diferentes, e o que isso significa na hora de conferir?",
          "r": [
            "Cada token é escolhido com uma parte de sorteio, que respeita as chances.",
            "Respostas diferentes para o mesmo fato: pelo menos uma está errada.",
            "Respostas iguais não provam que estão certas."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Glossário da Claude Platform (LLM, pré-treino, ajuste fino, RLHF, temperatura, tokens, janela de contexto como memória de trabalho)",
            "https://platform.claude.com/docs/pt-BR/about-claude/glossary",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Visão geral dos modelos (data de corte de junho de 2026 nos modelos atuais)",
            "https://platform.claude.com/docs/pt-BR/models/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Transparency Hub, Anthropic (dados de treino e pós-treino de cada modelo)",
            "https://www.anthropic.com/transparency",
            "oficial",
            "08/11/2026"
          ],
          [
            "Claude's Constitution, Anthropic (o documento de valores usado no treino)",
            "https://www.anthropic.com/constitution",
            "oficial",
            "08/11/2026"
          ],
          [
            "Como faço para alterar minhas configurações de privacidade de melhoria de modelo?, central de privacidade da Anthropic",
            "https://privacy.claude.com/pt/articles/12109829-como-faco-para-alterar-minhas-configuracoes-de-privacidade-de-melhoria-de-modelo",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Migrando para a versão 2026-10-21 da API (temperatura removida)",
            "https://platform.claude.com/docs/pt-BR/api/migration-2026-10-21",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "What happens when you talk to AI?, Claude Academy (5 minutos, em inglês)",
            "https://academy.claude.com/tutorials/what-happens-when-you-talk-to-ai",
            "oficial",
            "08/11/2026"
          ],
          [
            "Tracing the thoughts of a large language model, Anthropic, 2025 (a rima planejada antes e a conta explicada de outro jeito)",
            "https://www.anthropic.com/research/tracing-thoughts-language-model",
            "oficial",
            "08/11/2026"
          ],
          [
            "Training a Helpful and Harmless Assistant with RLHF, Bai e outros, 2022",
            "https://arxiv.org/abs/2204.05862",
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
          "O modelo guarda os fatos que leu e os consulta quando você faz uma pergunta",
          "Ele não consulta uma lista de fatos: o que ficou do treino são números, e a resposta é escrita na hora."
        ],
        [
          "O modelo aprendeu com texto até uma data e escreve cada resposta na hora, por previsão",
          "Isso. Treino uma vez, com data de corte; uso a cada mensagem, token por token, com uma parte de sorteio."
        ],
        [
          "O modelo aprende com cada conversa e melhora quanto mais você o usa",
          "Os pesos não mudam com o uso. O que muda entre conversas é o que você põe no contexto."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O que o pré-treino ensina a um modelo de linguagem?",
        "o": [
          [
            "A seguir instruções como um assistente",
            "Isso vem no pós-treino. O modelo só pré-treinado tende a continuar o texto, não a obedecer."
          ],
          [
            "A buscar notícias atuais na internet",
            "Buscar é trabalho de uma ferramenta, na hora do uso. O treino termina numa data."
          ],
          [
            "A prever a próxima palavra do texto",
            "Isso. É uma montanha de texto e um ajuste de números para errar cada vez menos a próxima palavra."
          ]
        ],
        "c": 2
      },
      {
        "p": "Você quer que o Claude Code siga sempre a mesma regra de formato num projeto. Onde a regra deve ficar?",
        "o": [
          [
            "No CLAUDE.md, que volta ao contexto em toda conversa",
            "Isso. O modelo não aprende conversando; ele segue o que está no contexto, e o CLAUDE.md entra em toda conversa."
          ],
          [
            "Numa conversa longa, repetida até o modelo aprender",
            "Repetir não muda os pesos. Na conversa seguinte, a regra some se não estiver num lugar que volta ao contexto."
          ],
          [
            "Na opção de privacidade que libera conversas para treino",
            "Essa opção decide treinos futuros de outros modelos, não o comportamento do modelo que você usa agora."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "O que é a data de corte?",
        "É a data até onde vão os textos do treino. Em 08/11/2026, a dos modelos atuais era junho de 2026. O que aconteceu depois, o modelo não leu: para isso, dê a fonte ou use a busca na web."
      ],
      [
        "Por que ele inventa com tanta segurança?",
        "Porque o tom também é previsto, como o resto do texto. O modelo escreve a continuação mais plausível; quando ele não sabe, a continuação plausível pode ser falsa. A aula 5.2 mostra como pedir e como conferir."
      ],
      [
        "O Claude é o mesmo no celular e no Claude Code?",
        "O modelo pode ser o mesmo. O que muda é o programa em volta: o Claude Code dá ferramentas para ler arquivos e rodar comandos; o app do celular tem outras. A resposta muda com o que cada um coloca no contexto."
      ]
    ]
  },
  "5-2": {
    "tempo": 45,
    "video": "a5-2",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já recebeu do Claude um número, uma citação ou o nome de uma lei que parecia perfeito e, quando foi conferir, não existia ou dizia outra coisa. Isso tem nome, {{alucinacao|alucinação}}, e esta aula mostra de onde vem, quando aparece e como pedir de um jeito que deixa o erro à vista.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Na aula 5.1, você viu que o {{modelo}} escreve cada resposta na hora, prevendo o texto mais plausível. Quase sempre, o mais plausível é o certo. Às vezes não é, e o texto errado sai com a mesma cara do certo: mesma segurança, mesmo formato, número com vírgula no lugar, artigo com parágrafo e inciso. É isso que torna a alucinação perigosa: ela não parece erro."
      ],
      [
        "p",
        "As zonas de risco são justamente as que mais pesam: um número de planilha, o artigo de uma lei, uma cláusula de contrato, uma referência num trabalho da faculdade. Em novembro de 2023, a imprensa noticiou que o Conselho Nacional de Justiça investigava um juiz federal que assinou uma decisão com jurisprudência do Superior Tribunal de Justiça que não existia, produzida com a ajuda de um {{bot|chatbot}}. O juiz atribuiu o erro a um servidor do gabinete. Ninguém conferiu antes de assinar."
      ],
      [
        "p",
        "Esta aula não ensina a desconfiar de tudo, o que tornaria a IA inútil. Ensina três coisas: reconhecer onde o risco é alto, pedir de um jeito que diminui a chance de invenção e conferir em dois minutos o que importa. O laboratório mostra o método funcionando no seu PC."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao especialista da sala fechada. Na residência, além de comparar as respostas dele, os avaliadores aplicavam provas, e em muitas delas a resposta em branco valia zero, enquanto um chute às vezes acertava. Ele aprendeu a lição que todo aluno aprende: na dúvida, escreva alguma coisa. Agora, no escritório, você pergunta o telefone de um fornecedor pequeno que ele viu citado uma vez. Ele reconhece o nome, sabe que um celular tem onze dígitos e começa com o código de área, e escreve um número com toda a cara de verdadeiro. Não é má-fé: é o hábito da prova."
      ],
      [
        "quebra",
        "O aluno sabe que está chutando; o modelo não mostra nenhum sinal de \"isto é chute\", e o chute sai no mesmo tom da certeza. Também não há intenção de enganar: não é mentira, é texto plausível. E, diferente do aluno, o modelo tem um freio por dentro: uma pesquisa da Anthropic achou no Claude um circuito que responde \"não sei\" por padrão. O chute aparece quando esse freio se solta na hora errada, como você vai ver logo abaixo."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O que conta como alucinação"
      ],
      [
        "p",
        "A página da Anthropic sobre o tema define alucinação como texto factualmente incorreto ou inconsistente com o {{contexto}} fornecido. São dois tipos, e vale separar. O primeiro é errar sobre o mundo: uma data, um número, uma lei, um livro, o nome de um {{pacote}}. O segundo é errar sobre o que você entregou: você passa um contrato, e a resposta diz que ele prevê uma multa que ele não prevê. O segundo surpreende mais, porque o texto certo estava ali, na mesa."
      ],
      [
        "p",
        "Alucinação também não é o mesmo que opinião ruim ou {{codigo|código}} que não funciona. Se o Claude escolheu um caminho pior para resolver um problema, isso é uma decisão discutível, não um fato inventado. A alucinação é específica: algo afirmado como fato, que não existe ou não é o que a fonte diz."
      ],
      [
        "h3",
        "Por que acontece"
      ],
      [
        "p",
        "A primeira razão vem do pré-treino. O modelo aprende bem o que aparece muitas vezes nos textos e mal o que aparece pouco. Um estudo de 2025, de pesquisadores da OpenAI e da Georgia Tech, usa o exemplo dos aniversários: o formato de uma data aparece em toda parte, mas o aniversário de uma pessoa pouco conhecida aparece uma vez, ou nenhuma. O modelo aprende o formato e não o valor, e na hora de responder o formato vem preenchido com um valor plausível."
      ],
      [
        "p",
        "A segunda razão vem da avaliação. O mesmo estudo argumenta que a maior parte dos testes usados para medir modelos, os {{benchmark|benchmarks}}, dá ponto para a resposta certa e zero para \"não sei\", como uma prova sem desconto por erro. Com essa régua, chutar sempre rende mais do que admitir a dúvida, e os modelos acabam otimizados para ser bons fazedores de prova."
      ],
      [
        "p",
        "A terceira razão aparece por dentro. Na pesquisa de 2025 citada na aula 5.1, a Anthropic achou no Claude um circuito que, por padrão, responde que não tem informação suficiente. Quando ele reconhece o assunto, como o nome de um jogador famoso, esse freio é desligado e a resposta sai. A alucinação aparece quando o reconhecimento falha para o lado errado: o nome parece conhecido, o freio se solta, mas o modelo não sabe mais nada sobre aquilo. O resultado, nas palavras da pesquisa, é uma resposta plausível, mas falsa."
      ],
      [
        "p",
        "Por fim, o contexto. Um tutorial da Academy da Anthropic resume que, quando um modelo produz informação incorreta, em geral é efeito de contexto ausente, incorreto ou de baixa qualidade. Traduzindo: boa parte das invenções some quando a fonte certa está na mesa."
      ],
      [
        "h3",
        "Onde ela mais aparece"
      ],
      [
        "lista",
        [
          "**Números exatos, datas e valores:** a taxa de um mês específico, o valor de uma multa, o ano de uma lei.",
          "**Citações e referências:** a frase exata de um autor, a página de um livro, o título e o link de um artigo científico.",
          "**Leis, artigos e decisões:** número de artigo, inciso, jurisprudência.",
          "**Nomes técnicos:** o nome de uma {{biblioteca}}, de um {{comando}} ou de uma opção de programa. A aula 4.1 mostrou o estudo em que pelo menos 5,2% dos pacotes sugeridos pelos modelos comerciais testados não existiam.",
          "**O que veio depois da {{data-de-corte|data de corte}},** inclusive novidades do próprio Claude.",
          "**Perguntas com premissa falsa,** como \"o que diz o artigo 12?\", quando o texto só tem dez artigos.",
          "**Pedidos de quantidade,** como \"me dê dez exemplos\", quando só existem três."
        ]
      ],
      [
        "p",
        "O risco é baixo quando você pede para explicar um conceito estável, reescrever um texto seu, dar ideias ou resumir um documento curto que está na mesa. Nesses casos, conferir tudo seria desperdício."
      ],
      [
        "h3",
        "Como pedir para errar menos"
      ],
      [
        "p",
        "A {{documentacao|documentação}} da Anthropic lista técnicas que reduzem alucinação. Quatro delas cabem em qualquer pedido seu:"
      ],
      [
        "lista",
        [
          "**Dê permissão para não saber.** Diga com todas as letras: \"se não souber, ou se a informação não estiver no documento, diga que não sabe\". A documentação afirma que isso pode reduzir drasticamente as informações falsas.",
          "**Entregue a fonte e limite a resposta a ela.** \"Use só o documento abaixo, não o seu conhecimento geral.\" É a ideia da aula 5.1: o que está no contexto vence o que está nos pesos.",
          "**Peça a citação literal.** \"Para cada afirmação, copie entre aspas o trecho exato do documento.\" Em documentos longos, a documentação sugere pedir primeiro os trechos e só depois a análise, baseada neles.",
          "**Peça para retirar o que não tem prova.** \"Revise a resposta: se não achar um trecho que sustente uma afirmação, apague a afirmação.\""
        ]
      ],
      [
        "p",
        "Juntando as quatro, um pedido sobre o regulamento do laboratório desta aula fica assim:"
      ],
      [
        "codigo",
        {
          "texto": "Leia o arquivo regulamento.txt e responda às perguntas abaixo usando só o que está nele.\nPara cada resposta, copie entre aspas o trecho exato do arquivo que a sustenta.\nSe a resposta não estiver no arquivo, escreva \"não está no regulamento\".\nNão complete com o que você acha.",
          "linguagem": "texto",
          "rotulo": "pedido"
        }
      ],
      [
        "p",
        "Duas técnicas a mais, para quando o assunto pesa: fazer a mesma pergunta em duas conversas novas e comparar, porque respostas diferentes para o mesmo fato denunciam que pelo menos uma está errada; e pedir uma segunda passada, como \"confira cada número da sua resposta contra a planilha\". A documentação fecha com um aviso: essas técnicas reduzem muito as alucinações, mas não as eliminam. Informação crítica, você valida."
      ],
      [
        "h3",
        "Como conferir em dois minutos"
      ],
      [
        "p",
        "Conferir não é refazer o trabalho: é checar os pontos que, se estiverem errados, causam prejuízo. Para cada tipo, há um teste rápido. Vamos usar como exemplo o regulamento fictício do laboratório desta aula:"
      ],
      [
        "codigo",
        {
          "texto": "REGULAMENTO INTERNO DO CONDOMÍNIO EDIFÍCIO AURORA\n(texto fictício, criado para um laboratório do curso)\n\nArt. 1º O horário de silêncio é das 22h às 7h, todos os dias.\nArt. 2º A taxa condominial vence no dia 10 de cada mês.\nArt. 3º O atraso no pagamento gera multa de 2% sobre o valor em atraso, mais juros de 1% ao mês.\nArt. 4º Mudanças só podem ser feitas de segunda a sábado, das 8h às 18h, com aviso à portaria.\nArt. 5º O salão de festas deve ser reservado com pelo menos 15 dias de antecedência.\nArt. 6º A piscina funciona das 8h às 22h, e crianças menores de 12 anos só entram acompanhadas.\nArt. 7º As vagas de garagem não podem ser alugadas a quem não mora no prédio.\nArt. 8º Obras barulhentas só são permitidas de segunda a sexta, das 9h às 17h.\nArt. 9º O lixo reciclável vai para o contêiner azul, no subsolo.\nArt. 10. Os casos não previstos neste regulamento serão decididos em assembleia.",
          "linguagem": "texto",
          "rotulo": "regulamento.txt"
        }
      ],
      [
        "p",
        "Citação de um documento seu: procure o trecho exato no arquivo, com Ctrl+F no Bloco de Notas, ou com o {{cmdlet}} {{select-string|Select-String}} no {{powershell|PowerShell}}. O comando abaixo procura um trecho que a IA citou como sendo do artigo 1º:"
      ],
      [
        "codigo",
        {
          "texto": "Select-String -Path .\\regulamento.txt -Pattern \"das 22h às 7h\" -SimpleMatch",
          "linguagem": "powershell"
        }
      ],
      [
        "saida",
        "regulamento.txt:4:Art. 1º O horário de silêncio é das 22h às 7h, todos os dias."
      ],
      [
        "p",
        "A resposta mostra o arquivo, o número da linha e a linha inteira. Se nada aparece, o trecho não está lá do jeito que foi citado: ou a IA mudou as palavras, ou inventou. Leia o artigo para saber qual dos dois. Para um link, abra e confira se a página existe e se diz o que a resposta afirma. Para um nome de pacote, confira no {{pypi|PyPI}}, como a aula 4.1 ensinou. Para uma conta, refaça com um programa, ou peça ao {{claude-code|Claude Code}} que {{rodar|rode}} a conta em vez de fazê-la de cabeça."
      ],
      [
        "p",
        "Por que isso importa: o tempo de conferir é pequeno perto do custo de um número errado num relatório ou de uma citação inventada num trabalho. Quando não conferir: no que é rascunho, ideia ou texto que você mesmo vai reler com atenção."
      ],
      [
        "h3",
        "Busca na web e citações ajudam, mas não blindam"
      ],
      [
        "p",
        "Com a {{busca-na-web|busca na web}} ligada, a resposta vem com links. Isso melhora muito, porque a fonte entra no contexto. Mas o modelo ainda pode resumir errado uma página certa, ou juntar duas fontes num fato que nenhuma das duas afirma. Abra o link quando o fato importar. Na {{api|API}}, existe um recurso de citações que devolve, junto com a resposta, o trecho exato do documento que a sustenta; a aula 10.9 mostra esse recurso."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Por que ele não diz simplesmente que não sabe?** Às vezes diz, principalmente quando você deixa claro que \"não sei\" é uma resposta aceita. Quando não diz, é a mistura do treino que premiou o chute com o freio do \"não sei\" que se soltou na hora errada.",
          "**Se eu perguntar \"tem certeza?\", ele corrige?** Às vezes corrige um erro; às vezes troca uma resposta certa por uma errada, só porque você pareceu duvidar. Um estudo da Anthropic de 2023, com os assistentes da época, viu isso acontecer com frequência. A aula 5.7 volta a esse efeito. Melhor do que perguntar \"tem certeza?\" é pedir a fonte.",
          "**Custa alguma coisa conferir?** Não. Select-String e Ctrl+F são de graça; pedir a citação literal só deixa a resposta um pouco maior.",
          "**Isso vale no app do celular?** Vale igual. Anexe ou cole o documento, peça as citações e procure o trecho com a busca do leitor de arquivos."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o freio do \"não sei\" e as provas que premiam o chute",
          "blocos": [
            [
              "p",
              "Na pesquisa da Anthropic que olha o modelo por dentro, os pesquisadores fizeram o teste ao contrário: ligaram à força a parte do modelo que diz \"conheço este assunto\" enquanto perguntavam sobre um nome inventado. O modelo passou a afirmar, com consistência, um fato falso sobre a pessoa. É a alucinação produzida de propósito, o que reforça a explicação do freio que se solta."
            ],
            [
              "p",
              "O estudo de 2025 sobre por que os modelos alucinam propõe que a solução não é criar mais um teste de alucinação, e sim mudar a nota dos testes que já existem, para que um erro confiante valha menos que um \"não sei\". Enquanto os testes premiarem o chute, os modelos vão ser treinados para chutar."
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
          "pergunta": "Você pediu ao Claude uma resposta com citações do regulamento mostrado acima, e ele trouxe três trechos. O comando abaixo procura o primeiro no arquivo. O que você acha que aparece? E com os outros dois, nos botões?",
          "codigo": "Select-String -Path .\\regulamento.txt -Pattern \"crianças menores de 12 anos\" -SimpleMatch",
          "linguagem": "powershell",
          "resposta": "Com o primeiro trecho, aparece a linha 9, o artigo 6º, porque o trecho está lá, letra por letra. O segundo, \"não podem ser alugadas para quem não mora\", não aparece, embora o artigo 7º diga quase isso: o arquivo tem \"a quem\", e não \"para quem\". O Select-String só acha o texto exato, então \"nada apareceu\" quer dizer \"não está escrito assim\", e você lê o artigo para ver se foi só uma troca de palavras. O terceiro, \"animais de estimação\", também não aparece, e aí não é troca de palavras: o regulamento não fala de animais. Essa citação foi inventada.",
          "vivo": [
            [
              "Procurar o 2º trecho",
              "Select-String -Path .\\regulamento.txt -Pattern \"não podem ser alugadas para quem não mora\" -SimpleMatch",
              ""
            ],
            [
              "Procurar o 3º trecho",
              "Select-String -Path .\\regulamento.txt -Pattern \"animais de estimação\" -SimpleMatch",
              ""
            ],
            [
              "Voltar ao 1º trecho",
              "Select-String -Path .\\regulamento.txt -Pattern \"crianças menores de 12 anos\" -SimpleMatch",
              "regulamento.txt:9:Art. 6º A piscina funciona das 8h às 22h, e crianças menores de 12 anos só entram acompanhadas."
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
          "p": "Você vai usar num relatório um número que o Claude deu: \"a inadimplência média do setor em 2024 foi de 4,7%\". Ele não citou fonte. Qual é o melhor próximo passo?",
          "o": [
            [
              "Perguntar \"tem certeza?\" e usar o número se ele confirmar",
              "Confirmar não é prova: ele pode confirmar um número inventado, ou trocar um número certo por outro só porque você duvidou. Peça a fonte."
            ],
            [
              "Pedir a fonte e achar o número no documento original de onde ele saiu",
              "Isso. Número exato sem fonte é zona de risco; conferir é achar o número no documento de onde ele veio."
            ],
            [
              "Refazer a pergunta numa conversa nova e usar se as duas baterem",
              "Respostas iguais não provam que estão certas: a mesma chance mais alta pode levar ao mesmo número errado."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você entregou ao Claude o regulamento mostrado nesta aula e perguntou qual é a regra para animais de estimação. Ele respondeu: \"Não encontrei nenhuma regra sobre animais no regulamento que você mandou. O artigo 10 diz que os casos não previstos são decididos em assembleia.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: ele deveria ter dito a regra que os condomínios costumam adotar",
              "Completar com o que \"costuma ser\" é justamente inventar. Você perguntou o que está no regulamento."
            ],
            [
              "Está errada: sem uma citação literal entre aspas, a resposta não serve",
              "Ele indicou o artigo 10 pelo número, e o que disse confere com o arquivo. Sem aspas, há menos para conferir, mas a resposta não fica errada por isso."
            ],
            [
              "Está certa: não há regra sobre animais, e ele apontou o artigo que cobre o caso",
              "Isso. Admitir que a informação não está no documento é o comportamento que você quer. Conferir também é reconhecer quando a resposta está certa."
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
            "\"Ele citou a lei com número e tudo, então existe.\"",
            "O formato certo é justamente o que o modelo aprende melhor. Número de artigo, inciso e data podem sair perfeitos e falsos. Abra a lei."
          ],
          [
            "\"Se fosse inventado, ele avisaria.\"",
            "O chute sai no mesmo tom da certeza. Quem cria o aviso é o seu pedido: \"se não souber, diga que não sabe\"."
          ],
          [
            "\"Ele leu o documento, então não inventa.\"",
            "Inventar sobre o documento que está na mesa também acontece. Peça o trecho exato e procure no arquivo."
          ],
          [
            "\"Não achei o trecho com o Select-String, então a IA inventou.\"",
            "Pode ter sido só uma troca de palavras. \"Nada apareceu\" quer dizer \"não está escrito assim\": leia o artigo antes de concluir."
          ],
          [
            "\"Vou conferir tudo, sempre.\"",
            "Conferir tudo torna a IA inútil. Confira o que, errado, causaria prejuízo: números, citações, leis, nomes técnicos."
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
          "p": "Por que um modelo inventa em vez de dizer que não sabe?",
          "r": [
            "O treino ensina o formato de um fato melhor do que o valor de um fato raro.",
            "Os testes que medem modelos premiam o chute e dão zero ao \"não sei\".",
            "Por dentro, o freio do \"não sei\" pode se soltar quando o assunto parece conhecido."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que quatro coisas você põe no pedido para diminuir a invenção?",
          "r": [
            "Permissão para dizer \"não sei\".",
            "A fonte, com a ordem de usar só ela.",
            "A citação literal de cada afirmação.",
            "A ordem de apagar o que não tiver trecho que sustente."
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
          "titulo": "Pegue a IA errando (ou acertando) num regulamento",
          "lugar": "No PC, com o Claude Code e o PowerShell",
          "tempo": "20 minutos",
          "antes": "Você vai criar o regulamento fictício desta aula, fazer ao Claude três pedidos armados para provocar invenção e conferir as citações no próprio arquivo. O objetivo não é que ele erre: é você ver o método funcionar. Se ele acertar tudo, ótimo, você viu as técnicas desta aula trabalhando; se errar, você pegou o erro antes de ele ir para um documento. Precisa do {{claude-code|Claude Code}}, como a aula 0.0 ensina, e do PowerShell. Pelo {{app}}: crie o arquivo com os passos 1 a 3, anexe o regulamento.txt numa conversa nova, faça os mesmos pedidos e confira as citações com Ctrl+F no Bloco de Notas. Os comandos do PowerShell e a saída do Select-String foram rodados de verdade em 08/11/2026; as respostas do Claude não foram, porque dependem do Claude Code aberto numa conversa e mudam a cada vez. Não testado de ponta a ponta.",
          "naoTestado": "As respostas do Claude Code (passos 5, 6 e 10) não foram rodadas: exigem o Claude Code interativo, e o texto delas muda a cada vez. Os comandos do PowerShell (passos 2, 3, 8 e 9) e a saída do Select-String foram rodados de verdade em 08/11/2026, no Windows PowerShell 5.1, numa pasta de teste.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando, que cria a pasta C:\\Projetos\\alucinacao e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\alucinacao | Out-Null; Set-Location C:\\Projetos\\alucinacao",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\alucinacao."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria, dentro de C:\\Projetos\\alucinacao, o arquivo regulamento.txt, com os acentos gravados em UTF-8; se o arquivo já existir ali, é substituído por este. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\nREGULAMENTO INTERNO DO CONDOMÍNIO EDIFÍCIO AURORA\n(texto fictício, criado para um laboratório do curso)\n\nArt. 1º O horário de silêncio é das 22h às 7h, todos os dias.\nArt. 2º A taxa condominial vence no dia 10 de cada mês.\nArt. 3º O atraso no pagamento gera multa de 2% sobre o valor em atraso, mais juros de 1% ao mês.\nArt. 4º Mudanças só podem ser feitas de segunda a sábado, das 8h às 18h, com aviso à portaria.\nArt. 5º O salão de festas deve ser reservado com pelo menos 15 dias de antecedência.\nArt. 6º A piscina funciona das 8h às 22h, e crianças menores de 12 anos só entram acompanhadas.\nArt. 7º As vagas de garagem não podem ser alugadas a quem não mora no prédio.\nArt. 8º Obras barulhentas só são permitidas de segunda a sexta, das 9h às 17h.\nArt. 9º O lixo reciclável vai para o contêiner azul, no subsolo.\nArt. 10. Os casos não previstos neste regulamento serão decididos em assembleia.\n'@ | Set-Content -Encoding utf8 regulamento.txt",
              "espera": "Só o cursor. O arquivo regulamento.txt está na pasta, com os 10 artigos mostrados nesta aula."
            },
            {
              "faz": "Digite claude e aperte Enter, para abrir o Claude Code nessa pasta.",
              "espera": "O Claude Code fica esperando um pedido, já dentro de C:\\Projetos\\alucinacao."
            },
            {
              "faz": "Cole este pedido. Ele pergunta algo que o Claude não tem como saber sem o arquivo.",
              "cola": "Sem abrir nenhum arquivo e sem buscar na internet, me diga: qual é a multa por atraso no Condomínio Edifício Aurora?",
              "espera": "O esperado é ele dizer que não tem essa informação, ou que precisa ver o regulamento. Se ele der um número, anote: é invenção, porque ele não leu nada. Se ele abrir o arquivo mesmo assim, anote também: desobedeceu, mas não inventou."
            },
            {
              "faz": "Cole este pedido, que usa as técnicas da aula: fonte, citação literal e permissão para não saber. Se ele pedir permissão para ler o arquivo, aceite.",
              "cola": "Leia o arquivo regulamento.txt e responda usando só o que está nele. (1) Qual é a multa por atraso? (2) Qual é o horário de silêncio? (3) Qual é a regra para animais de estimação? Para cada resposta, copie entre aspas o trecho exato do arquivo. Se a resposta não estiver no arquivo, escreva \"não está no regulamento\".",
              "espera": "Respostas 1 e 2 com um trecho entre aspas cada uma; a 3 com \"não está no regulamento\", porque o arquivo não fala de animais. Se ele trouxer uma regra para animais, você pegou uma invenção."
            },
            {
              "faz": "Abra uma segunda janela do PowerShell, do mesmo jeito do passo 1, sem fechar a do Claude Code.",
              "espera": "Uma janela nova, com PS e >. A primeira continua com o Claude Code aberto."
            },
            {
              "faz": "Na janela nova, cole este comando para entrar na pasta do laboratório.",
              "cola": "Set-Location C:\\Projetos\\alucinacao",
              "espera": "O cursor mostra C:\\Projetos\\alucinacao."
            },
            {
              "faz": "Cole este comando, que procura o trecho do horário de silêncio. Se o trecho que o Claude citou for diferente, troque o texto entre aspas pelo trecho dele.",
              "cola": "Select-String -Path .\\regulamento.txt -Pattern \"das 22h às 7h\" -SimpleMatch",
              "saida": "regulamento.txt:4:Art. 1º O horário de silêncio é das 22h às 7h, todos os dias.",
              "espera": "A linha 4, com o artigo 1º. Se nada aparecer com o trecho dele, o trecho não está no arquivo do jeito que ele citou: leia o artigo 1º e veja se foi troca de palavras ou invenção. Faça o mesmo com o trecho da multa."
            },
            {
              "faz": "Volte à janela do Claude Code e cole este pedido, que tem uma premissa falsa: o regulamento só tem 10 artigos.",
              "cola": "No regulamento.txt, o que diz o artigo 12, sobre a piscina?",
              "espera": "O esperado é ele dizer que não existe artigo 12 e, talvez, apontar o artigo 6º, que fala da piscina. Se ele descrever um artigo 12, você pegou uma invenção."
            },
            {
              "faz": "Anote o placar dos passos 5, 6 e 10: quantas respostas ele acertou e quantas inventou.",
              "espera": "Um placar como \"3 de 3\" ou \"2 de 3\". Qualquer resultado serve: o que fica é o hábito de pedir citação e conferir."
            }
          ],
          "errado": "Se o Select-String responder com uma mensagem vermelha que começa com \"Select-String : Cannot find path\", a janela não está na pasta do laboratório: cole de novo o comando do passo 8. Se a linha aparecer com letras estranhas no lugar dos acentos, o arquivo foi gravado sem o -Encoding utf8: refaça o passo 3, colando o bloco inteiro. Se o PowerShell não reconhecer o claude, o Claude Code não está instalado ou não está no PATH: a aula 0.0 mostra como resolver. Se o Claude Code disser que não acha o regulamento.txt, ele foi aberto em outra pasta: feche com /exit, cole o comando do passo 8 e abra de novo."
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
          "texto": "Um colega pediu ao Claude um resumo do regulamento, com citações, para mandar ao síndico. A resposta foi esta: silêncio, \"das 22h às 7h\" (art. 1º); multa, \"multa de 10% sobre o valor em atraso\" (art. 3º); salão, \"pelo menos 15 dias de antecedência\" (art. 5º). Antes de o e-mail sair, você confere as três citações. O bloco abaixo prepara o cenário: cria (ou recria) a pasta C:\\Projetos\\alucinacao, grava nela o mesmo regulamento.txt do laboratório, substituindo o que houver lá, e procura as três citações no arquivo. Descubra o problema antes de ver a causa.",
          "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\alucinacao | Out-Null; Set-Location C:\\Projetos\\alucinacao\n@'\nREGULAMENTO INTERNO DO CONDOMÍNIO EDIFÍCIO AURORA\n(texto fictício, criado para um laboratório do curso)\n\nArt. 1º O horário de silêncio é das 22h às 7h, todos os dias.\nArt. 2º A taxa condominial vence no dia 10 de cada mês.\nArt. 3º O atraso no pagamento gera multa de 2% sobre o valor em atraso, mais juros de 1% ao mês.\nArt. 4º Mudanças só podem ser feitas de segunda a sábado, das 8h às 18h, com aviso à portaria.\nArt. 5º O salão de festas deve ser reservado com pelo menos 15 dias de antecedência.\nArt. 6º A piscina funciona das 8h às 22h, e crianças menores de 12 anos só entram acompanhadas.\nArt. 7º As vagas de garagem não podem ser alugadas a quem não mora no prédio.\nArt. 8º Obras barulhentas só são permitidas de segunda a sexta, das 9h às 17h.\nArt. 9º O lixo reciclável vai para o contêiner azul, no subsolo.\nArt. 10. Os casos não previstos neste regulamento serão decididos em assembleia.\n'@ | Set-Content -Encoding utf8 regulamento.txt\nforeach ($c in \"das 22h às 7h\", \"multa de 10% sobre o valor em atraso\", \"pelo menos 15 dias de antecedência\") { if (Select-String -Path .\\regulamento.txt -Pattern $c -SimpleMatch -Quiet) { \"ENCONTRADA: $c\" } else { \"NÃO ENCONTRADA: $c\" } }",
          "saida": "ENCONTRADA: das 22h às 7h\nNÃO ENCONTRADA: multa de 10% sobre o valor em atraso\nENCONTRADA: pelo menos 15 dias de antecedência",
          "dica": "Uma das três citações não está no arquivo do jeito que foi escrita. Abra o artigo que ela diz citar e compare número por número, não só palavra por palavra.",
          "resposta": "A citação da multa foi inventada. O artigo 3º diz \"multa de 2% sobre o valor em atraso, mais juros de 1% ao mês\", e a resposta trocou o 2% por 10%: um número plausível, no formato certo, com o artigo certo ao lado, e falso. Não foi troca de palavras: mudou o número, que é justamente o que importa. O conserto é corrigir para 2% antes de mandar e, da próxima vez, pedir a segunda passada da documentação: \"para cada citação, confirme que o trecho existe no arquivo; se não existir, apague a afirmação\". Se quiser ver a citação certa encontrada, procure \"multa de 2% sobre o valor em atraso\" com o Select-String: aparece a linha 6, com o artigo 3º."
        }
      ],
      [
        "fontes",
        [
          [
            "Reduzir alucinações, Claude Platform (permitir \"não sei\", citações diretas, verificar com citações; não eliminam)",
            "https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-hallucinations",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Why Language Models Hallucinate, Kalai e outros, 2025 (aniversários e testes que premiam o chute)",
            "https://arxiv.org/abs/2509.04664",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "Tracing the thoughts of a large language model, Anthropic, 2025 (o circuito do \"não sei\" e a resposta plausível, mas falsa)",
            "https://www.anthropic.com/research/tracing-thoughts-language-model",
            "oficial",
            "08/11/2026"
          ],
          [
            "How context affects Claude's performance and cost, Claude Academy (erro como efeito de contexto ausente ou ruim)",
            "https://academy.claude.com/tutorials/parametric-memory-and-context",
            "oficial",
            "08/11/2026"
          ],
          [
            "Can you trust what AI tells you?, Claude Academy (5 minutos, em inglês)",
            "https://academy.claude.com/tutorials/can-you-trust-what-ai-tells-you",
            "oficial",
            "08/11/2026"
          ],
          [
            "Towards Understanding Sycophancy in Language Models, Sharma e outros, Anthropic, 2023 (assistentes que admitem erros que não cometeram quando o usuário duvida)",
            "https://arxiv.org/abs/2310.13548",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "IA é usada por juiz, que sentencia com informações falsas; CNJ investiga, Olhar Digital, 13/11/2023",
            "https://olhardigital.com.br/2023/11/13/pro/ia-e-usada-por-juiz-que-sentencia-com-informacoes-falsas-cnj-investiga/",
            "imprensa",
            "08/11/2026",
            "pt"
          ],
          [
            "We Have a Package for You! (estudo sobre pacotes inventados, apresentado em 2025)",
            "https://arxiv.org/abs/2406.10279",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "Citações, Claude Platform (o trecho exato devolvido com a resposta)",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/citations",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Select-String, Microsoft (procurar texto em arquivos no PowerShell)",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.utility/select-string?view=powershell-5.1",
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
          "A IA inventa quando está com defeito, e os modelos novos já resolveram",
          "Não é defeito ocasional: vem do treino e da avaliação, e a própria documentação avisa que até os modelos mais avançados ainda erram assim."
        ],
        [
          "A IA chuta o plausível quando não sabe; dê a fonte, peça o trecho e confira",
          "Isso. Treino e testes premiam o chute; fonte, citação literal e conferência põem o erro à vista."
        ],
        [
          "A IA só inventa quando não recebe documento, então basta sempre anexar a fonte",
          "Ajuda muito, mas ela também inventa sobre o documento que está na mesa. Por isso a citação literal e a conferência."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Qual destas respostas do Claude tem mais risco de ser alucinação?",
        "o": [
          [
            "Uma explicação do que é juro composto",
            "Conceito estável, que aparece em muitos textos: risco baixo."
          ],
          [
            "O número do artigo de lei sobre um tema",
            "Isso. Número exato de artigo é zona de risco: o formato sai perfeito, o valor pode ser inventado."
          ],
          [
            "Um resumo de um parágrafo que você colou",
            "Texto curto que está na mesa: risco baixo, e fácil de conferir."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você procurou com o Select-String um trecho que a IA citou, e nada apareceu. O que isso prova?",
        "o": [
          [
            "Que a IA inventou o conteúdo do trecho",
            "Ainda não: pode ter sido só uma troca de palavras. Leia o artigo citado antes de concluir."
          ],
          [
            "Que o arquivo está gravado sem acentos",
            "Com acento errado, a linha costuma aparecer com letras estranhas; nada aparecer é outra coisa."
          ],
          [
            "Que o trecho não está escrito assim",
            "Isso. O Select-String acha só o texto exato. Agora leia o artigo para ver se foi troca de palavras ou invenção."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "O que é alucinação?",
        "É quando a IA afirma como fato algo que não existe ou não é o que a fonte diz, como um número, uma lei ou uma citação. O texto sai com a mesma segurança de uma resposta certa, por isso é perigoso."
      ],
      [
        "Como peço para ele não inventar?",
        "Quatro coisas no pedido: diga que \"não sei\" é aceito; entregue a fonte e mande usar só ela; peça o trecho exato entre aspas para cada afirmação; e peça para apagar o que não tiver trecho que sustente."
      ],
      [
        "Preciso conferir tudo o que ele diz?",
        "Não. Confira o que, errado, causaria prejuízo: números, citações, leis, referências e nomes técnicos. Explicações de conceitos e rascunhos podem passar sem conferência."
      ]
    ]
  },
  "5-3": {
    "tempo": 35,
    "video": "a5-3",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "A sua conversa com o {{claude-code|Claude Code}} passou a manhã inteira numa tarefa, ele começou a repetir um erro que você já tinha corrigido, e você ficou na dúvida entre insistir, compactar ou começar de novo. Esta aula mostra o que cada saída faz com o que está no {{contexto}} e como escolher pelo motivo certo: custo e foco.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 1.2 mostrou o mecanismo: cada mensagem leva a conversa inteira, a conversa longa custa mais e perde o foco, e a janela de 1 milhão de {{token|tokens}} quase nunca enche. Esta aula é sobre a decisão. Quando a conversa engordou, você tem pelo menos quatro saídas: seguir, compactar, compactar dizendo o que importa, ou limpar e recomeçar com um bilhete. Cada uma faz uma coisa diferente com o que está na mesa, e cada uma tem um custo."
      ],
      [
        "p",
        "Escolher errado sai caro de três jeitos. Insistir numa conversa de 400 mil tokens faz cada mensagem pagar por tudo o que ficou para trás, inclusive as tentativas que deram errado. Compactar na hora errada é um pedido grande, e a regra que você deu só na conversa pode não sobreviver ao resumo. E limpar sem anotar nada obriga você a explicar tudo de novo. Escolher certo economiza limite do plano e dá respostas melhores, porque o Claude passa a olhar só para o que importa."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte à mesa do especialista, da aula 1.2: a cada pedido, você passa pela janela a pasta inteira da conversa, e ele relê tudo. Agora a pasta está grossa. Você pode continuar passando a pasta grossa. Pode pedir que alguém troque a pasta por um resumo de poucas páginas, escolhendo sozinho o que entra, ou seguindo a sua lista do que não pode faltar. Ou pode tirar a pasta da mesa e começar outra, depois de escrever um bilhete com o que foi decidido. E há o quadro na parede, com as regras do {{claude-md|CLAUDE.md}}: ele não está na pasta, e o especialista o lê em todo pedido, com pasta grossa, resumida ou nova."
      ],
      [
        "quebra",
        "Quem escreve o resumo não é um ajudante à parte: é o próprio modelo, que precisa ler a pasta inteira para resumir, e isso custa. A pasta antiga também não vai para o lixo: a conversa fica guardada no seu PC, e o comando {{resume|/resume}} a traz de volta. E uma pessoa perguntaria o que importa antes de resumir; o modelo adivinha, a menos que você diga."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Por baixo: por que a pasta grossa atrapalha"
      ],
      [
        "p",
        "A peça central dos modelos atuais se chama {{atencao|atenção}}. Para escrever o próximo token, cada token do contexto \"olha\" para os outros e pesa quais importam. Um texto de engenharia da Anthropic, de 2025, descreve assim: com n tokens, são n ao quadrado relações entre pares, e o modelo tem um orçamento de atenção limitado, que cada token novo consome um pouco. Dobrar o contexto quadruplica as relações a pesar."
      ],
      [
        "p",
        "O efeito tem nome, {{context-rot|deterioração de contexto}}: a documentação da plataforma diz que, à medida que os tokens crescem, a precisão e a capacidade de achar uma informação caem, e que mais contexto não é automaticamente melhor. O mesmo texto da Anthropic chama o contexto de recurso finito, com retorno decrescente. Traduzindo para a mesa: numa pasta de 400 mil tokens com uma regra de uma linha no meio, a regra continua lá, mas disputa atenção com todo o resto."
      ],
      [
        "p",
        "Por que isso importa: o problema da conversa longa não é \"acabar o espaço\". É gastar atenção e dinheiro com o que não ajuda mais. Por isso as saídas abaixo não servem para liberar espaço: servem para deixar na mesa só o que importa."
      ],
      [
        "h3",
        "Os sinais de que está na hora"
      ],
      [
        "lista",
        [
          "**Você corrigiu a mesma coisa duas vezes e continua errado.** As boas práticas oficiais dizem que a terceira correção só engorda uma conversa que já tem duas tentativas fracassadas, que o Claude continua relendo.",
          "**Ele esqueceu uma regra que você deu na conversa,** ou mistura um assunto antigo com o atual.",
          "**A tarefa mudou.** Terminou o relatório e vai para a planilha: assunto novo.",
          "**Você vai parar por mais de uma hora.** Na assinatura, o {{cache}} dura cerca de uma hora; com uma {{chave-api|chave de API}}, cinco minutos. Depois disso, a primeira mensagem relê a conversa inteira a preço cheio.",
          "**O {{context|/context}} mostra a conversa dominando a janela,** ou o {{usage|/usage}} aponta \"contexto longo\", o que ele faz quando isso passa de 10% do seu uso."
        ]
      ],
      [
        "h3",
        "As saídas, uma por uma"
      ],
      [
        "p",
        "**Seguir.** Não custa nada agora, e é a escolha certa quando tudo o que está na conversa ainda é útil e ela não é enorme. O custo vem depois: cada mensagem leva a conversa inteira. E seguir não quer dizer que nada vai acontecer. Na assinatura, uma sessão com mais de uns 200 mil tokens que fica parada é compactada sozinha pouco antes de o cache vencer; e, perto de 967 mil, a {{compactacao|compactação}} automática roda no meio do que estiver acontecendo. Nos dois casos, o resumo sai sem o foco que você daria."
      ],
      [
        "p",
        "**{{compact|/compact}}.** O Claude Code manda um pedido à parte, com a conversa inteira, e o modelo escreve um resumo estruturado. Na simulação oficial da documentação, o resumo guarda os seus pedidos e a intenção, os conceitos técnicos, os arquivos examinados com os trechos importantes, os erros e como foram corrigidos, o que está pendente e o trabalho atual; as saídas completas de comandos e o raciocínio intermediário vão embora. Depois, o Claude Code relê até cinco dos arquivos mexidos mais recentemente. Quanto ao custo: com o cache quente, a leitura da conversa sai por uma fração do preço cheio, e o tempo vai quase todo em escrever o resumo, que é texto de saída; depois de uma pausa longa, sem cache, a leitura sai a preço cheio. Por isso a documentação recomenda compactar numa pausa natural do trabalho, entre etapas, e não deixar para a compactação automática no meio de uma."
      ],
      [
        "p",
        "**/compact com foco.** O mesmo, mas você diz o que não pode faltar, como em `/compact mantenha a regra de responder em tópicos, as decisões sobre a taxa e o que falta testar`. Nas palavras da documentação, o resumo passa a manter o que você escolhe, em vez do que a compactação automática acha importante. É a saída para quando a tarefa continua e o histórico ainda importa, mas a conversa ficou pesada."
      ],
      [
        "p",
        "**{{clear|/clear}} com um bilhete.** O /clear não custa nada: começa uma {{sessao|sessão}} nova, com o contexto vazio, e a antiga fica guardada para o /resume. O CLAUDE.md e a {{memoria-automatica|memória automática}} voltam sozinhos; nada da conversa volta. Se a tarefa continua, escreva antes o bilhete: peça ao Claude que grave num arquivo, como NOTAS.md, as decisões, as regras de formato e o próximo passo. Depois, /clear e \"leia NOTAS.md e continue\". As boas práticas oficiais usam o mesmo padrão com um arquivo de especificação: escrever primeiro e construir depois, numa sessão nova, com contexto limpo. O bilhete custa um pedido pequeno, e a conversa nova começa com poucos milhares de tokens."
      ],
      [
        "p",
        "**Resumir só um trecho.** O comando {{rewind|/rewind}} abre a lista dos seus pedidos; escolhendo um deles, as opções \"Summarize from here\" e \"Summarize up to here\" resumem só a parte depois ou antes daquele ponto. Serve para quando uma longa caça a um erro, cheia de saídas de teste, tomou o meio da conversa, e você quer manter intactas as instruções do começo. A aula 7.15 mostra o /rewind com calma."
      ],
      [
        "p",
        "Duas ajudas menores: o {{btw|/btw}} responde a uma pergunta rápida sem acrescentar nada à conversa, e um {{subagente}} lê arquivos grandes na janela dele e devolve só um resumo, como a aula 1.2 mostrou."
      ],
      [
        "h3",
        "O que sobrevive à compactação"
      ],
      [
        "p",
        "A documentação do Claude Code tem uma tabela do que acontece com cada peça depois de um /compact ou de uma compactação automática. Resumida para o seu dia a dia:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "O que estava na janela",
            "Depois da compactação"
          ],
          "linhas": [
            [
              "Instruções do sistema e estilo de saída",
              "Continuam valendo"
            ],
            [
              "CLAUDE.md da raiz do projeto e memória automática",
              "Recarregados do disco"
            ],
            [
              "Descrições das skills",
              "Reconstruídas e recarregadas"
            ],
            [
              "Arquivos que o Claude leu ou editou",
              "Até cinco relidos, os modificados mais recentemente; um arquivo com mais de 5 mil tokens volta só pelo nome"
            ],
            [
              "Regras e decisões dadas só na conversa",
              "Entram no resumo se o resumo as guardar; podem se perder"
            ],
            [
              "Saídas completas de comandos e testes",
              "Somem; fica, no máximo, uma linha no resumo"
            ]
          ]
        }
      ],
      [
        "p",
        "A moral está na quinta linha. Regra que precisa valer sempre vai no CLAUDE.md, e não na conversa: ele é recarregado do disco depois de toda compactação. Um detalhe que pega muita gente: se você editar o CLAUDE.md no meio da sessão, a mudança só passa a valer depois de um /clear, de um /compact ou de abrir o Claude Code de novo, porque ele é lido no começo da sessão."
      ],
      [
        "h3",
        "A regra de bolso"
      ],
      [
        "lista",
        [
          "**Mudou de assunto:** /clear. Com um nome, como `/clear relatorio`, a conversa fica fácil de achar no /resume.",
          "**Mesma tarefa, conversa pesada, histórico ainda útil:** /compact com foco, numa pausa entre etapas.",
          "**Duas correções erradas:** /clear e um pedido novo que já diga o que você aprendeu.",
          "**Vai parar e continuar amanhã:** bilhete no NOTAS.md e /clear. A documentação lembra que, se você não precisa do histórico, uma sessão nova custa menos.",
          "**Regra que vale sempre:** CLAUDE.md, e não a conversa.",
          "**No {{app}} do celular ou no claude.ai:** não há /clear nem /compact; o equivalente é abrir uma conversa nova. A documentação da plataforma avisa que apps de chat podem ir descartando o começo das conversas longas, o mais antigo primeiro."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**O /compact apaga a conversa?** Não do seu PC: a transcrição continua guardada. Mas o modelo passa a ver só o resumo.",
          "**Errei e dei /clear. Perdi tudo?** Não. O /resume volta à conversa anterior, e os arquivos no disco não mudam.",
          "**Posso deixar a compactação automática resolver?** Pode, mas ela roda sem o seu foco e, perto de 967 mil, no meio de uma tarefa. Compactar você mesmo, numa pausa, guarda o que você escolhe.",
          "**O bilhete não é a mesma coisa que o CLAUDE.md?** Não. O bilhete guarda o estado de uma tarefa e pode ser apagado depois. O CLAUDE.md guarda regras que valem para o projeto inteiro.",
          "**Preciso fazer isso toda hora?** Não. Numa conversa curta e focada, siga. As saídas são para quando a conversa engordou ou mudou de assunto."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o meio da pasta, compactar mais cedo e instruções de compactação",
          "blocos": [
            [
              "p",
              "Um estudo de 2023, chamado \"Lost in the Middle\", mediu que os modelos daquela época achavam uma informação com mais facilidade no começo ou no fim de um texto longo do que no meio. Os modelos atuais lidam melhor com contexto longo, mas a lição de pôr o que importa num lugar fixo, como o CLAUDE.md, continua valendo."
            ],
            [
              "p",
              "O comando {{autocompact|/autocompact}} muda o ponto em que a compactação automática roda: `/autocompact 500k` faz o Claude Code compactar quando a janela chega a 500 mil tokens, e não perto de 967 mil."
            ],
            [
              "p",
              "Você também pode pôr no CLAUDE.md uma seção chamada \"Compact Instructions\", com o que todo resumo deve manter. A documentação cita essa seção como um jeito de controlar o que a compactação preserva."
            ],
            [
              "p",
              "Programas que conversam com o Claude pela API também têm compactação, feita do lado do {{servidor}} e ainda em fase de testes; o módulo 10 apresenta a API."
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
          "pergunta": "Ao meio-dia, a sua conversa tem 420 mil tokens. O programa abaixo soma os tokens de entrada das próximas 20 mensagens em três caminhos: seguir na mesma conversa, compactar (sobram uns 66 mil: a base, o resumo e quatro arquivos relidos) e limpar com um bilhete (sobram uns 13 mil: a base, o NOTAS.md e um arquivo). O custo usa a leitura do cache do Opus 5.5, US$ 0,20 por milhão, em 08/11/2026. O que você acha que ele imprime?",
          "codigo": "# Tokens de entrada das próximas 20 mensagens, em três caminhos\nmensagens = 20\ncresce = 1000  # cada troca nova soma uns mil tokens à conversa\n\ndef somar(inicio):\n    total = 0\n    for i in range(mensagens):\n        total = total + inicio + i * cresce  # cada pedido leva tudo o que já está na janela\n    return total\n\nseguir = somar(420000)    # a conversa da manhã inteira vai junto\ncompactar = somar(66540)  # base + resumo + 4 arquivos relidos\nlimpar = somar(13500)     # base + NOTAS.md + 1 arquivo\n\nprint(f\"Seguir:    {seguir} tokens, US$ {seguir * 0.20 / 1000000:.2f}\")\nprint(f\"Compactar: {compactar} tokens, US$ {compactar * 0.20 / 1000000:.2f}\")\nprint(f\"Limpar:    {limpar} tokens, US$ {limpar * 0.20 / 1000000:.2f}\")",
          "linguagem": "python",
          "resposta": "Seguir soma 8.590.000 tokens, uns US$ 1,72 com o cache quente; compactar, 1.520.800, uns US$ 0,30; limpar com o bilhete, 460.000, uns US$ 0,09. O Python escreve os números sem separador de milhar e com ponto no lugar da vírgula. A diferença vem de uma linha só: cada pedido leva tudo o que já está na janela. Repare no que o programa não conta: o pedido do próprio /compact, que lê a conversa inteira e escreve o resumo, e o pedido que escreve o bilhete. Com o cache frio, depois de uma pausa, os mesmos tokens custariam vinte vezes mais, e no plano a mesma conta aparece como limite. Use os botões: com 50 mensagens, a distância cresce; com uma conversa menor, de 200 mil, seguir pesa menos, e a decisão fica menos óbvia.",
          "vivo": [
            [
              "Trocar para 50 mensagens",
              "# Tokens de entrada das próximas 50 mensagens, em três caminhos\nmensagens = 50\ncresce = 1000  # cada troca nova soma uns mil tokens à conversa\n\ndef somar(inicio):\n    total = 0\n    for i in range(mensagens):\n        total = total + inicio + i * cresce  # cada pedido leva tudo o que já está na janela\n    return total\n\nseguir = somar(420000)    # a conversa da manhã inteira vai junto\ncompactar = somar(66540)  # base + resumo + 4 arquivos relidos\nlimpar = somar(13500)     # base + NOTAS.md + 1 arquivo\n\nprint(f\"Seguir:    {seguir} tokens, US$ {seguir * 0.20 / 1000000:.2f}\")\nprint(f\"Compactar: {compactar} tokens, US$ {compactar * 0.20 / 1000000:.2f}\")\nprint(f\"Limpar:    {limpar} tokens, US$ {limpar * 0.20 / 1000000:.2f}\")",
              "Seguir:    22225000 tokens, US$ 4.45\nCompactar: 4552000 tokens, US$ 0.91\nLimpar:    1900000 tokens, US$ 0.38"
            ],
            [
              "Começar com uma conversa de 200 mil",
              "# Tokens de entrada das próximas 20 mensagens, em três caminhos\nmensagens = 20\ncresce = 1000  # cada troca nova soma uns mil tokens à conversa\n\ndef somar(inicio):\n    total = 0\n    for i in range(mensagens):\n        total = total + inicio + i * cresce  # cada pedido leva tudo o que já está na janela\n    return total\n\nseguir = somar(200000)    # uma conversa menor, de 200 mil\ncompactar = somar(66540)  # base + resumo + 4 arquivos relidos\nlimpar = somar(13500)     # base + NOTAS.md + 1 arquivo\n\nprint(f\"Seguir:    {seguir} tokens, US$ {seguir * 0.20 / 1000000:.2f}\")\nprint(f\"Compactar: {compactar} tokens, US$ {compactar * 0.20 / 1000000:.2f}\")\nprint(f\"Limpar:    {limpar} tokens, US$ {limpar * 0.20 / 1000000:.2f}\")",
              "Seguir:    4190000 tokens, US$ 0.84\nCompactar: 1520800 tokens, US$ 0.30\nLimpar:    460000 tokens, US$ 0.09"
            ],
            [
              "Voltar ao original",
              "# Tokens de entrada das próximas 20 mensagens, em três caminhos\nmensagens = 20\ncresce = 1000  # cada troca nova soma uns mil tokens à conversa\n\ndef somar(inicio):\n    total = 0\n    for i in range(mensagens):\n        total = total + inicio + i * cresce  # cada pedido leva tudo o que já está na janela\n    return total\n\nseguir = somar(420000)    # a conversa da manhã inteira vai junto\ncompactar = somar(66540)  # base + resumo + 4 arquivos relidos\nlimpar = somar(13500)     # base + NOTAS.md + 1 arquivo\n\nprint(f\"Seguir:    {seguir} tokens, US$ {seguir * 0.20 / 1000000:.2f}\")\nprint(f\"Compactar: {compactar} tokens, US$ {compactar * 0.20 / 1000000:.2f}\")\nprint(f\"Limpar:    {limpar} tokens, US$ {limpar * 0.20 / 1000000:.2f}\")",
              "Seguir:    8590000 tokens, US$ 1.72\nCompactar: 1520800 tokens, US$ 0.30\nLimpar:    460000 tokens, US$ 0.09"
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
          "p": "Você está no meio da mesma tarefa. A conversa tem 450 mil tokens, metade são saídas de testes antigos, e você ainda precisa das decisões tomadas de manhã. O que faz?",
          "o": [
            [
              "Usa /compact dizendo o que manter: as decisões e o que falta testar",
              "Isso. A tarefa continua e o histórico importa: o resumo com foco guarda o que você escolheu e solta as saídas antigas."
            ],
            [
              "Segue na mesma conversa, porque a janela de 1 milhão ainda tem bastante espaço",
              "Cabe, mas cada mensagem paga os 450 mil, e as saídas antigas disputam a atenção. Espaço não é o problema."
            ],
            [
              "Dá /clear e pede de novo, sem anotar nada, para começar do zero",
              "Começa limpo, mas joga fora as decisões que você ainda precisa. Sem bilhete, você explica tudo de novo."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Antes de compactar, você perguntou se a regra \"responda em tópicos\", que deu na conversa às 9h, vai sobreviver. O Claude respondeu: \"Pode compactar sem medo. O resumo guarda tudo o que você me disse nesta conversa, inclusive essa regra, e eu continuo seguindo do mesmo jeito.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o resumo da compactação guarda tudo o que foi dito na conversa",
              "O resumo não guarda tudo: as saídas completas vão embora, e uma regra dada só na conversa pode ficar de fora."
            ],
            [
              "Está errada: só o CLAUDE.md volta com certeza; a regra dita na conversa pode se perder",
              "Isso. Para a regra sobreviver, ponha no CLAUDE.md, ou peça no /compact que ela seja mantida."
            ],
            [
              "Está errada: depois da compactação, o modelo esquece também o CLAUDE.md",
              "É o contrário: o CLAUDE.md da raiz é recarregado do disco depois de toda compactação."
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
            "\"O /compact é de graça, como o /clear.\"",
            "O /clear não custa nada; o /compact é um pedido que lê a conversa inteira e escreve um resumo. Com o cache quente, a leitura sai por uma fração; depois de uma pausa longa, sai a preço cheio."
          ],
          [
            "\"Depois do /compact, ele lembra de tudo.\"",
            "Ele lembra do resumo. Saídas completas somem, e regras dadas só na conversa podem ficar de fora. Diga o que manter, ou ponha a regra no CLAUDE.md."
          ],
          [
            "\"Vou insistir até ele acertar.\"",
            "Depois de duas correções erradas, a terceira só engorda a conversa com mais uma tentativa fracassada. /clear e um pedido melhor."
          ],
          [
            "\"Editei o CLAUDE.md, então já está valendo.\"",
            "Ele é lido no começo da sessão. A edição só vale depois de /clear, de /compact ou de abrir o Claude Code de novo."
          ],
          [
            "\"Janela de 1 milhão: posso deixar tudo na mesma conversa.\"",
            "Caber não é ajudar. Cada mensagem paga a conversa inteira, e o que não importa mais disputa a atenção."
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
          "p": "O que sobrevive com certeza a uma compactação, e o que pode se perder?",
          "r": [
            "Com certeza: instruções do sistema, CLAUDE.md da raiz e memória automática, recarregados.",
            "Até cinco arquivos recentes são relidos; os grandes voltam só pelo nome.",
            "Pode se perder: a regra dada só na conversa; as saídas completas somem."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quando usar /clear e quando usar /compact com foco?",
          "r": [
            "/clear: assunto novo, ou duas correções erradas; com bilhete, se a tarefa continua.",
            "/compact com foco: mesma tarefa, histórico ainda útil, conversa pesada.",
            "O /clear não custa nada; o /compact é um pedido grande."
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
          "id": "compactar",
          "titulo": "O que sobra depois"
        }
      ],
      [
        "fontes",
        [
          [
            "Boas práticas do Claude Code (duas correções e /clear; /clear não custa nada; cache de uma hora e de cinco minutos; compactação por inatividade; especificação e sessão nova)",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Explore a janela de contexto (o que sobrevive à compactação; compactar com foco; resumir parte da conversa)",
            "https://code.claude.com/docs/pt/context-window",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code funciona (instruções do início podem se perder; seção Compact Instructions)",
            "https://code.claude.com/docs/pt/how-claude-code-works",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code usa prompt caching (custo do /compact; CLAUDE.md editado só vale depois; compactar numa pausa natural)",
            "https://code.claude.com/docs/pt/prompt-caching",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Checkpointing (Summarize from here e Summarize up to here)",
            "https://code.claude.com/docs/pt/checkpointing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Configuração de modelo (compactação perto de 967 mil; /autocompact)",
            "https://code.claude.com/docs/pt/model-config",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Janelas de contexto, Claude Platform (deterioração de contexto; apps de chat descartam o mais antigo primeiro)",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/context-windows",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Preços da API (leitura do cache do Opus 5.5)",
            "https://platform.claude.com/docs/pt-BR/about-claude/pricing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Effective context engineering for AI agents, Anthropic, 2025 (orçamento de atenção; n ao quadrado relações)",
            "https://www.anthropic.com/research/effective-context-engineering-for-ai-agents",
            "oficial",
            "08/11/2026"
          ],
          [
            "Lost in the Middle: How Language Models Use Long Contexts, Liu e outros, 2023",
            "https://arxiv.org/abs/2307.03172",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "How context affects Claude's performance and cost, Claude Academy (20 minutos, em inglês)",
            "https://academy.claude.com/tutorials/parametric-memory-and-context",
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
          "Conversa pesada: siga, compacte com foco ou limpe com bilhete",
          "Isso. Cada saída faz uma coisa com a mesa; a regra que vale sempre vai no CLAUDE.md."
        ],
        [
          "Quando a janela enche, use /compact, a única saída que não perde nada",
          "O /compact perde as saídas completas e pode perder regras ditas na conversa; e a janela de 1 milhão quase nunca enche."
        ],
        [
          "Use /clear o tempo todo: é de graça, e a conversa antiga sempre atrapalha",
          "De graça, sim; mas no meio de uma tarefa o histórico ainda ajuda, e limpar sem bilhete obriga a explicar tudo de novo."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Você terminou um relatório e vai começar uma planilha sem relação com ele. O que faz?",
        "o": [
          [
            "/compact, para resumir o relatório",
            "Resumir um assunto que acabou é pagar um pedido grande à toa. Assunto novo pede conversa nova."
          ],
          [
            "/clear, e começa a planilha limpa",
            "Isso. Não custa nada, e a planilha não paga pelo relatório. A conversa antiga fica no /resume."
          ],
          [
            "Segue, porque ainda cabe na janela",
            "Cabe, mas cada mensagem sobre a planilha leva o relatório junto, e ele disputa a atenção."
          ]
        ],
        "c": 1
      },
      {
        "p": "Qual destes continua valendo com certeza depois de uma compactação?",
        "o": [
          [
            "A regra que você deu no começo da conversa",
            "Pode ficar de fora do resumo. Só o que é recarregado do disco volta com certeza."
          ],
          [
            "A saída completa do teste mais recente",
            "Saídas completas de comandos somem na compactação; fica, no máximo, uma linha no resumo."
          ],
          [
            "O CLAUDE.md que está na raiz do projeto",
            "Isso. Ele é recarregado do disco depois de toda compactação."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre /clear e /compact?",
        "O /clear começa uma conversa nova, vazia, e não custa nada; a antiga fica guardada para o /resume. O /compact troca a conversa por um resumo e segue na mesma sessão; é um pedido grande, porque o modelo lê tudo para resumir."
      ],
      [
        "Como faço uma regra sobreviver à compactação?",
        "Ponha a regra no CLAUDE.md da raiz do projeto: ele é recarregado do disco depois de toda compactação. Se ela só existe na conversa, peça no /compact que ela seja mantida, como em /compact mantenha a regra de responder em tópicos."
      ],
      [
        "O que escrevo no bilhete antes do /clear?",
        "As decisões tomadas, as regras de formato, os arquivos que importam e o próximo passo. Peça ao Claude que grave isso num arquivo, como NOTAS.md, e depois do /clear diga \"leia NOTAS.md e continue\"."
      ]
    ]
  },
  "5-4": {
    "tempo": 30,
    "video": "a5-4",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você abre o {{model|/model}} no {{claude-code|Claude Code}}, ou o seletor do {{app}}, e vê Opus, Sonnet, Haiku e Fable, sem saber se vale trocar ou se o padrão já serve. Esta aula compara os {{modelo|modelos}} pelo que importa para você, a tarefa e o custo, com a tabela e a data de cada número.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Escolher modelo parece detalhe técnico, mas mexe em duas coisas que você sente. No plano, um modelo mais pesado gasta mais do seu {{limite-de-uso|limite}} a cada pedido; o tutorial da Academy da Anthropic sobre o tema resume que usar um modelo pesado numa tarefa simples gasta o limite sem ganho real. Na {{api|API}}, que você vai usar no bot do projeto final, o modelo multiplica a conta: em 08/11/2026, o {{token}} de entrada do Haiku 5.5 custava um quarenta avos do token de entrada do Opus 5.5."
      ],
      [
        "p",
        "O caminho contrário também custa. Um modelo leve demais numa tarefa difícil erra mais, e cada erro vira retrabalho e conversa mais longa, que a aula 5.3 mostrou ser cara. A boa notícia: para a maior parte do seu uso, o padrão do Claude Code serve. O que esta aula ensina é reconhecer as exceções, nos dois sentidos, e uma alavanca que costuma vir antes de trocar de modelo: o {{esforco|esforço}}."
      ],
      [
        "p",
        "Uma última razão: os nomes mudam a cada poucos meses. A tabela desta aula vai envelhecer; o método de escolha, não. Por isso cada número vem com data e fonte, para você saber onde conferir de novo."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao escritório de consultoria da aula 1.1. Ele não tem um especialista só: tem uma equipe, e todos leem a mesma pasta pela mesma janela. O Haiku é o analista rápido que dá conta de volume, como separar mil documentos por tipo, e cobra pouco pela hora. O Sonnet é o analista experiente do dia a dia. O Opus é o consultor sênior, que encara tarefas longas e complicadas, e é quem atende você quando ninguém escolhe outro. O Fable é o sócio, chamado para os projetos mais difíceis e longos: o mais lento e o mais caro. O preço da hora de cada um é o preço por token. E o esforço é quanto tempo cada um pensa antes de responder, que você pode pedir mais longo ou mais curto."
      ],
      [
        "quebra",
        "Num escritório, o cargo diz quase tudo. Aqui, a versão importa tanto quanto a família: o Opus 5.5 custa menos que o Opus 5, da versão anterior, e um modelo novo pode mudar a comparação de uma hora para outra. O preço também não é por hora, é por token, e um modelo mais caro às vezes resolve com menos tokens, ou pensa mais e gasta mais. E a pasta não muda de tamanho de um para outro: os quatro modelos atuais leem até 1 milhão de tokens."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Os quatro modelos atuais, lado a lado"
      ],
      [
        "p",
        "Em 08/11/2026, a página de modelos da plataforma da Anthropic listava quatro modelos atuais. A tabela junta o que ela diz de cada um com a página de preços, em dólares por milhão de tokens. Todos têm {{janela-de-contexto|janela de contexto}} de 1 milhão de tokens, escrevem até 128 mil tokens por resposta, aceitam texto e imagem e têm junho de 2026 como {{data-de-corte|data de corte}}."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Modelo",
            "Para que a Anthropic indica",
            "Velocidade",
            "Entrada",
            "Saída"
          ],
          "linhas": [
            [
              "Fable 5.1",
              "Raciocínio exigente e trabalho de agente de longa duração",
              "A mais lenta",
              "US$ 10",
              "US$ 50"
            ],
            [
              "Opus 5.5",
              "Programação com agentes e trabalho de conhecimento de longa duração",
              "Moderada",
              "US$ 4",
              "US$ 20"
            ],
            [
              "Sonnet 5.5",
              "A melhor combinação de velocidade e inteligência",
              "Rápida",
              "US$ 2",
              "US$ 10"
            ],
            [
              "Haiku 5.5",
              "Muito volume com resposta rápida: classificar, extrair, encaminhar",
              "A mais rápida",
              "US$ 0,10 até 100 mil tokens no pedido; US$ 0,50 acima",
              "US$ 0,50; US$ 2,50 acima de 100 mil"
            ]
          ]
        }
      ],
      [
        "p",
        "Duas leituras rápidas da tabela. A primeira: a saída custa cinco vezes a entrada em todos eles, então uma resposta longa pesa mais do que uma pergunta longa. A segunda: do Haiku ao Fable, o preço da entrada vai de 10 centavos a 10 dólares por milhão, cem vezes. O Haiku tem uma pegadinha: acima de 100 mil tokens no pedido, o preço dele quintuplica, e uma conversa longa no Haiku deixa de ser tão barata."
      ],
      [
        "h3",
        "Para que serve cada um, na prática"
      ],
      [
        "p",
        "A matriz de escolha da {{documentacao|documentação}} diz que a maioria dos trabalhos começa no Opus 5.5. Traduzindo para o seu dia, com exemplos do mesmo tipo dos que o tutorial da Academy usa:"
      ],
      [
        "lista",
        [
          "**Haiku 5.5:** classificar 2 mil linhas de uma planilha em \"em dia\" e \"atrasada\", extrair a data de vencimento de cem boletos, resumir mensagens curtas. Volume, regra clara, resposta curta.",
          "**Sonnet 5.5:** escrever e revisar um texto, analisar uma planilha, gerar {{codigo|código}} do dia a dia, um assistente que responde rápido.",
          "**Opus 5.5:** tarefas longas no Claude Code, com muitos arquivos e etapas; análise que exige juntar muitas peças. É o padrão do Claude Code nos planos Pro, Max e Ultra, segundo a página de configuração de modelos, conferida em 08/11/2026.",
          "**Fable 5.1:** projeto de horas a partir de uma ideia ainda vaga, em que você descreve o resultado e deixa o modelo planejar; ou quando o Opus, com esforço alto, ainda não deu conta."
        ]
      ],
      [
        "p",
        "As fontes oficiais divergem num ponto, e vale saber por quê. O tutorial da Academy, pensado para quem usa o app, sugere começar pelo Sonnet quando você não sabe qual escolher. A documentação da plataforma, pensada para quem programa com a API, sugere o Opus 5.5 para a maioria dos trabalhos, e o Claude Code já vem nele. As duas concordam no que importa: comece por um modelo do meio e só suba ou desça com motivo."
      ],
      [
        "h3",
        "No plano: limite, não dólar"
      ],
      [
        "p",
        "Na assinatura, a escolha não aparece na fatura: aparece no limite. Os modelos mais pesados consomem o limite mais depressa. O Fable tem regras próprias: em 08/11/2026, a página de planos dizia que, no Pro, ele é pago com {{uso-extra|créditos de uso}}; no Max, está incluído até a metade do limite semanal; no Ultra, até 50% dos limites semanais. A página de configuração do Claude Code acrescenta que o seletor do /model mostra \"Requer créditos de uso\" na linha do Fable quando o seu plano cobra assim, e que, numa sessão interativa, o Claude Code pode pedir o seu consentimento antes de usar esses créditos. No plano grátis do claude.ai, só entram o Sonnet e o Haiku."
      ],
      [
        "h3",
        "Como trocar de modelo"
      ],
      [
        "p",
        "No Claude Code, o comando /model abre um seletor. Enter troca e guarda como padrão; a tecla s troca só para a {{sessao|sessão}} atual. Também dá para escrever o nome direto, como `/model sonnet`, ou abrir o Claude Code já com outro modelo, com `claude --model haiku`. Os nomes curtos, chamados {{alias-de-modelo|apelidos}}, apontam para a versão mais recente de cada família: opus, sonnet, haiku e fable. Há ainda o opusplan, que usa o Opus para planejar e o Sonnet para executar. Para saber qual modelo está em uso, o comando {{status|/status}} mostra. No app, o seletor de modelo fica junto da caixa de mensagem."
      ],
      [
        "p",
        "Um cuidado que a documentação de {{cache}} explica: cada modelo tem o próprio cache. Trocar de modelo no meio de uma conversa faz o pedido seguinte reler a conversa inteira sem desconto, e por isso o Claude Code chega a pedir confirmação quando o cache ainda está quente. A recomendação oficial é escolher o modelo no começo da sessão."
      ],
      [
        "h3",
        "O esforço: a alavanca antes de trocar"
      ],
      [
        "p",
        "O esforço decide quanto o modelo pensa antes de responder, dentro do mesmo modelo. Os níveis são low, medium, high, xhigh e max. No Claude Code, em 08/11/2026, o padrão era medium no Opus 5.5, no Sonnet 5.5 e no Haiku 5.5, e high no Fable; o comando {{effort|/effort}} muda o nível, e a palavra ultrathink no pedido sobe o esforço só naquele turno. A documentação de escolha de modelo diz que ajustar o esforço costuma ser uma alavanca melhor do que trocar de modelo, e, nos modelos 5.5, mudar o esforço não joga fora o cache. A aula 7.17 mostra esses controles no seu PC."
      ],
      [
        "h3",
        "Versões, apelidos e aposentadoria"
      ],
      [
        "p",
        "Cada modelo tem um nome fixo na API, como claude-opus-5-5, que aponta sempre para a mesma versão. Os modelos antigos continuam disponíveis por um tempo e depois são aposentados: em 08/11/2026, a página de descontinuações marcava o Sonnet 4.5 para sair da API em 30/11/2026, com o Sonnet 5.5 como substituto recomendado. Tutorial antigo que manda usar um modelo aposentado vai dar erro. Quando você ler \"Claude 3.5 Sonnet\" num vídeo, saiba que é um modelo de outra época."
      ],
      [
        "h3",
        "E os modelos de outras empresas?"
      ],
      [
        "p",
        "Existem outros: o GPT, da OpenAI, o Gemini, do Google, e {{modelo-aberto|modelos abertos}}, que qualquer um pode baixar. O módulo 13 põe outra IA para trabalhar junto com o Claude. Para comparar, desconfie de rankings: eles medem desempenho em {{benchmark|benchmarks}}, que, como a aula 5.2 mostrou, podem premiar o chute, e mudam a cada mês. A documentação da Anthropic recomenda outro caminho: testar com os seus pedidos e os seus dados reais, comparando precisão, qualidade e casos difíceis. A aula 6.9 transforma isso em método, com cinco casos."
      ],
      [
        "h3",
        "Um jeito de decidir em trinta segundos"
      ],
      [
        "lista",
        [
          "**É simples, repetitivo e em volume?** Haiku 5.5.",
          "**É trabalho do dia a dia?** Fique no padrão, ou no Sonnet 5.5 se quiser mais rapidez.",
          "**É longo, com várias etapas, ou o padrão errou duas vezes?** Antes de trocar, suba o esforço; depois, Opus 5.5 com esforço alto.",
          "**Ainda não deu, e vale gastar?** Fable 5.1, sabendo que, no plano, ele pesa no limite semanal ou cobra créditos de uso."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso trocar de modelo toda hora?** Não. O padrão serve para a maior parte do uso. Troque com motivo, de preferência no começo da sessão.",
          "**O Fable é sempre melhor?** É o mais capaz, mas o mais lento e o mais caro. Numa tarefa simples, você paga mais e espera mais pelo mesmo resultado.",
          "**Trocar de modelo apaga a conversa?** Não. A conversa continua; só o cache recomeça, e o pedido seguinte sai mais caro.",
          "**Isso custa algo no meu plano?** Não em dinheiro, salvo o Fable nos planos que cobram créditos de uso. O resto aparece como limite consumido mais depressa ou mais devagar."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: cache, lote e modo rápido",
          "blocos": [
            [
              "p",
              "Na API, ler do cache custa uma fração da entrada: em 08/11/2026, 5% no Opus 5.5 e no Sonnet 5.5, 2,5% no Fable 5.1 e 10% nos outros. Pedidos em {{lote}}, processados sem pressa, saem pela metade do preço. A aula 10.5 faz essas contas."
            ],
            [
              "p",
              "O {{modo-rapido|modo rápido}} deixa o Opus até 2,5 vezes mais rápido, com a mesma qualidade e um preço maior: no Opus 5.5, US$ 8 por milhão de tokens de entrada e US$ 40 de saída, em 08/11/2026. Nos planos de assinatura, ele só roda com créditos de uso, mesmo que ainda sobre limite do plano."
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
          "pergunta": "Um programa seu manda, pela API, um pedido de 50 mil tokens e recebe 5 mil de volta. O código abaixo calcula o custo com os preços do Opus 5.5, de 08/11/2026. O que você acha que ele imprime? E se trocar o modelo, nos botões?",
          "codigo": "# Uma tarefa pela API: o programa manda 50 mil tokens e recebe 5 mil de volta\nentrada = 50000\nsaida = 5000\n\n# Opus 5.5: dólares por milhão de tokens de entrada e de saída (08/11/2026)\npreco_entrada = 4\npreco_saida = 20\n\ncusto = entrada * preco_entrada / 1000000 + saida * preco_saida / 1000000\nprint(f\"Uma vez: US$ {custo:.4f}\")\nprint(f\"Mil vezes: US$ {custo * 1000:.2f}\")",
          "linguagem": "python",
          "resposta": "Com o Opus 5.5, \"Uma vez: US$ 0.3000\" e \"Mil vezes: US$ 300.00\": 50 mil tokens a US$ 4 por milhão dão 20 centavos, e 5 mil a US$ 20 por milhão dão mais 10. O Python usa ponto no lugar da vírgula. Nos botões, o mesmo trabalho, mil vezes, custa US$ 150 com o Sonnet 5.5, US$ 7,50 com o Haiku 5.5 e US$ 750 com o Fable 5.1. A conta é a mesma; só mudam os dois preços. O pedido de 50 mil fica abaixo dos 100 mil do Haiku; acima disso, o preço dele quintuplicaria. A pergunta que decide não é qual é o mais barato, e sim qual é o mais barato que faz a tarefa bem, e isso só um teste com casos reais responde. A aula 5.5 aprofunda essa conta.",
          "vivo": [
            [
              "Trocar pelo Sonnet 5.5",
              "# Uma tarefa pela API: o programa manda 50 mil tokens e recebe 5 mil de volta\nentrada = 50000\nsaida = 5000\n\n# Sonnet 5.5: dólares por milhão de tokens de entrada e de saída (08/11/2026)\npreco_entrada = 2\npreco_saida = 10\n\ncusto = entrada * preco_entrada / 1000000 + saida * preco_saida / 1000000\nprint(f\"Uma vez: US$ {custo:.4f}\")\nprint(f\"Mil vezes: US$ {custo * 1000:.2f}\")",
              "Uma vez: US$ 0.1500\nMil vezes: US$ 150.00"
            ],
            [
              "Trocar pelo Haiku 5.5",
              "# Uma tarefa pela API: o programa manda 50 mil tokens e recebe 5 mil de volta\nentrada = 50000\nsaida = 5000\n\n# Haiku 5.5: dólares por milhão de tokens de entrada e de saída (08/11/2026)\npreco_entrada = 0.10\npreco_saida = 0.50\n\ncusto = entrada * preco_entrada / 1000000 + saida * preco_saida / 1000000\nprint(f\"Uma vez: US$ {custo:.4f}\")\nprint(f\"Mil vezes: US$ {custo * 1000:.2f}\")",
              "Uma vez: US$ 0.0075\nMil vezes: US$ 7.50"
            ],
            [
              "Trocar pelo Fable 5.1",
              "# Uma tarefa pela API: o programa manda 50 mil tokens e recebe 5 mil de volta\nentrada = 50000\nsaida = 5000\n\n# Fable 5.1: dólares por milhão de tokens de entrada e de saída (08/11/2026)\npreco_entrada = 10\npreco_saida = 50\n\ncusto = entrada * preco_entrada / 1000000 + saida * preco_saida / 1000000\nprint(f\"Uma vez: US$ {custo:.4f}\")\nprint(f\"Mil vezes: US$ {custo * 1000:.2f}\")",
              "Uma vez: US$ 0.7500\nMil vezes: US$ 750.00"
            ],
            [
              "Voltar ao Opus 5.5",
              "# Uma tarefa pela API: o programa manda 50 mil tokens e recebe 5 mil de volta\nentrada = 50000\nsaida = 5000\n\n# Opus 5.5: dólares por milhão de tokens de entrada e de saída (08/11/2026)\npreco_entrada = 4\npreco_saida = 20\n\ncusto = entrada * preco_entrada / 1000000 + saida * preco_saida / 1000000\nprint(f\"Uma vez: US$ {custo:.4f}\")\nprint(f\"Mil vezes: US$ {custo * 1000:.2f}\")",
              "Uma vez: US$ 0.3000\nMil vezes: US$ 300.00"
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
          "p": "Você vai pedir ao Claude um programa que lê 2 mil linhas de cobranças e marca cada uma como \"em dia\" ou \"atrasada\", pela API, todo mês. Qual modelo o programa deve testar primeiro?",
          "o": [
            [
              "O Opus 5.5, porque é o modelo padrão do próprio Claude Code",
              "O padrão do Claude Code vale para as suas sessões, não para o programa. Numa regra clara em volume, ele cobra 40 vezes mais na entrada, sem ganho."
            ],
            [
              "O Fable 5.1, porque é o mais capaz e erra menos",
              "Capacidade sobra; o custo da entrada é cem vezes o do Haiku, para uma tarefa que não precisa disso."
            ],
            [
              "O Haiku 5.5, e sobe de modelo só se os testes falharem",
              "Isso. Tarefa simples, repetitiva e em volume é o caso do Haiku; a documentação sugere começar por ele e subir só se precisar."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "A sua conversa no Claude Code está em 500 mil tokens, com o Opus 5.5. Você perguntou como gastar menos, e o Claude respondeu: \"Troque agora para o Haiku 5.5, com /model haiku. Ele custa um quarenta avos do Opus, e a conversa continua do mesmo jeito, então a economia começa já na próxima mensagem.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: acima de 100 mil tokens o Haiku custa mais, e a troca zera o cache",
              "Isso. Acima de 100 mil, o Haiku cobra cinco vezes o preço básico; com 500 mil no pedido, a economia encolhe, e o próximo pedido relê tudo sem desconto. Aqui, a aula 5.3 sugere antes compactar ou limpar com bilhete."
            ],
            [
              "Está certa: o Haiku custa um quarenta avos do Opus, e a conversa segue do mesmo jeito",
              "A conta não vale aqui: com 500 mil tokens no pedido, o Haiku cobra o preço de acima de 100 mil, e a troca de modelo faz o próximo pedido reler tudo sem cache."
            ],
            [
              "Está errada: o Haiku não aceita conversas com mais de 200 mil tokens no pedido",
              "Os quatro modelos atuais, inclusive o Haiku 5.5, têm janela de 1 milhão de tokens."
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
            "\"O modelo mais caro é sempre o melhor para mim.\"",
            "Numa tarefa simples, ele custa mais e demora mais pelo mesmo resultado. Comece no meio e suba com motivo."
          ],
          [
            "\"Vou trocar para o Haiku no meio da conversa para economizar.\"",
            "Trocar de modelo zera o cache, e acima de 100 mil tokens no pedido o Haiku custa cinco vezes mais. Escolha no começo da sessão."
          ],
          [
            "\"O nome da família diz tudo.\"",
            "A versão importa: o Opus 5.5 custa menos que o Opus 5, e tutoriais antigos falam de modelos que já saíram."
          ],
          [
            "\"Vi num ranking que o modelo X ganhou, então vou trocar.\"",
            "Ranking mede benchmark e muda todo mês. Teste com os seus pedidos e os seus dados."
          ],
          [
            "\"Errou, então troco de modelo.\"",
            "Antes, olhe o pedido e o contexto, e tente subir o esforço. Trocar de modelo é a última alavanca, não a primeira."
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
          "p": "Para que serve cada um dos quatro modelos atuais?",
          "r": [
            "Haiku 5.5: volume, regra clara, resposta rápida e barata.",
            "Sonnet 5.5: dia a dia, rápido e capaz.",
            "Opus 5.5: tarefas longas e complexas; é o padrão do Claude Code.",
            "Fable 5.1: o mais capaz, mais lento e mais caro, para o que o Opus não resolveu."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Antes de trocar de modelo no meio de uma conversa, o que considerar?",
          "r": [
            "Trocar de modelo zera o cache: o próximo pedido relê tudo sem desconto.",
            "Subir o esforço costuma resolver antes de trocar.",
            "No Haiku, acima de 100 mil tokens no pedido, o preço quintuplica."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Visão geral dos modelos, Claude Platform (descrição, velocidade, janela, saída máxima e data de corte dos modelos atuais)",
            "https://platform.claude.com/docs/pt-BR/models/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Preços, Claude Platform (entrada, saída, cache e Haiku acima de 100 mil tokens)",
            "https://platform.claude.com/docs/pt-BR/about-claude/pricing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Escolhendo o modelo certo, Claude Platform (a maioria começa no Opus 5.5; esforço antes de trocar; testar com dados reais)",
            "https://platform.claude.com/docs/pt-BR/about-claude/models/choosing-a-model",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Configuração de modelo, Claude Code (padrão por plano, apelidos, /model, esforço, Fable com créditos de uso)",
            "https://code.claude.com/docs/pt/model-config",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code usa prompt caching (trocar de modelo relê tudo sem cache; esforço nos modelos 5.5)",
            "https://code.claude.com/docs/pt/prompt-caching",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Acelere respostas com modo rápido, Claude Code (até 2,5 vezes; US$ 8 e US$ 40 no Opus 5.5; só com créditos de uso)",
            "https://code.claude.com/docs/pt/fast-mode",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Descontinuações de modelos, Claude Platform (Sonnet 4.5 sai em 30/11/2026)",
            "https://platform.claude.com/docs/pt-BR/about-claude/model-deprecations",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Planos e preços do Claude (Fable no Pro, no Max e no Ultra; modelos do plano grátis)",
            "https://claude.com/pricing",
            "oficial",
            "08/11/2026"
          ],
          [
            "Choosing the right Claude model: Haiku, Sonnet, Opus, or Fable, Claude Academy (5 minutos, em inglês)",
            "https://academy.claude.com/tutorials/choosing-the-right-claude-model",
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
          "Escolha o modelo mais caro que o plano permitir, porque ele erra menos",
          "Mais caro não é melhor para toda tarefa: no simples, só gasta mais limite e mais tempo."
        ],
        [
          "Escolha pela tarefa e pelo custo, e suba o esforço antes de trocar de modelo",
          "Isso. Haiku para volume, padrão para o dia a dia, Fable para o que ainda não deu, sempre com data e teste."
        ],
        [
          "Escolha pelo ranking do mês, porque os modelos mudam muito depressa",
          "Ranking mede benchmark, que pode premiar o chute, e muda todo mês. O que decide é o teste com os seus casos."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Na API, quanto custa a saída em relação à entrada, nos quatro modelos atuais?",
        "o": [
          [
            "O mesmo preço da entrada",
            "Não: em todos eles, a saída custa mais que a entrada."
          ],
          [
            "Cinco vezes a entrada",
            "Isso. Por isso uma resposta longa pesa mais que uma pergunta longa."
          ],
          [
            "Metade do preço da entrada",
            "É o contrário: a saída é a parte mais cara."
          ]
        ],
        "c": 1
      },
      {
        "p": "O modelo padrão errou duas vezes numa tarefa longa no Claude Code. O que tentar antes de trocar para o Fable?",
        "o": [
          [
            "Subir o esforço com /effort",
            "Isso. A documentação diz que ajustar o esforço costuma ser uma alavanca melhor do que trocar de modelo."
          ],
          [
            "Trocar para o Haiku 5.5",
            "O Haiku é para volume e regra clara; numa tarefa longa que já está difícil, piora."
          ],
          [
            "Repetir o mesmo pedido",
            "Repetir o mesmo pedido tende a repetir o erro. Mude o que dá ao modelo mais condição de acertar."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual modelo eu uso no dia a dia?",
        "O padrão do Claude Code, o Opus 5.5, serve para a maior parte do uso. Troque com motivo: Haiku para volume e regra clara, Sonnet para mais rapidez, Fable quando o Opus com esforço alto ainda não resolveu."
      ],
      [
        "O que é o esforço?",
        "É quanto o modelo pensa antes de responder, dentro do mesmo modelo: low, medium, high, xhigh e max. No Claude Code, o comando /effort muda o nível. Subir o esforço costuma resolver antes de trocar de modelo."
      ],
      [
        "Por que não trocar de modelo no meio da conversa?",
        "Porque cada modelo tem o próprio cache. O pedido seguinte relê a conversa inteira sem desconto. Se precisar trocar, troque no começo da sessão, ou depois de um /clear."
      ]
    ]
  },
  "5-5": {
    "tempo": 44,
    "video": "a5-5",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você vê no {{usage|/usage}} do {{claude-code|Claude Code}} uma linha com dólares e milhares de {{token|tokens}}, ou começa a planejar um {{bot}} que chama a {{api|API}}, e não sabe dizer se aquilo é muito ou pouco. Esta aula ensina a fazer a conta de um pedido na ponta do lápis, com os preços oficiais e um texto medido de verdade.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui, você viu as peças soltas. A aula 1.2 mostrou que tudo é medido em tokens, a 5.3 mostrou que cada mensagem leva a conversa inteira, e a 5.4 deu o preço de cada {{modelo}} por milhão de tokens. Falta juntar tudo numa conta que você faz sozinho: quantos tokens tem este texto, quantos a resposta vai ter, quanto o {{cache}} desconta e quanto isso dá em dinheiro, ou em limite do plano. É a conta que separa \"uns centavos\" de \"dezenas de dólares por mês\"."
      ],
      [
        "p",
        "Ela decide coisas concretas. No plano, explica por que uma {{sessao|sessão}} gasta o limite mais depressa que outra, e o que mudar. Na API, diz antes de você pôr um {{programa}} para {{rodar}} mil vezes se a conta do mês vai dar 2 ou 200 dólares; o bot do projeto final vai usar uma {{chave-api|chave de API}}, e lá cada token vira cobrança. E diante de uma promessa como \"esta {{skill}} economiza 65%\", ela permite perguntar: 65% de qual parte da conta? A aula 5.6 usa essa pergunta."
      ],
      [
        "p",
        "Não é matemática difícil: são quatro multiplicações e uma soma. O difícil é não esquecer nenhuma parcela e não usar a régua errada para contar os tokens. Esta aula mostra as parcelas, a régua para o português e, no laboratório, como medir os seus números de verdade."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Na aula 5.4, cada consultor do escritório tinha um preço por hora, que fazia o papel do preço por token. Para fazer a conta de verdade, troque a hora pela página. O especialista cobra por página que lê na pasta e por página que escreve na resposta, e a página escrita custa cinco vezes a lida. A cada visita, ele relê a pasta inteira, desde a primeira folha, e cobra a leitura de novo. Mas ele tem boa memória de curto prazo: as páginas que releu há pouco saem com um desconto enorme, porque ele só passa os olhos. Na primeira vez que uma página entra na pasta, ele tira uma cópia para a gaveta de consulta rápida, e essa cópia sai um pouco mais cara que uma leitura normal. E o rascunho que ele escreve antes de responder, mesmo que você só veja um resumo dele, entra na conta como página escrita."
      ],
      [
        "quebra",
        "Token não é página nem palavra: é um pedaço de palavra, e o mesmo texto vira mais tokens em português do que em inglês. O desconto da gaveta tem prazo, de cinco minutos ou de uma hora, e qualquer mudança no começo da pasta, como trocar de modelo, faz o especialista reler tudo a preço cheio. E, no plano de assinatura, ninguém manda fatura por página: a mesma conta aparece como limite consumido."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Quantos tokens tem um texto"
      ],
      [
        "p",
        "A {{documentacao|documentação}} da Anthropic não dá uma regra única, e explica por quê: quantos caracteres cabem num token depende do modelo e da língua. Ela dá um ponto de partida. Nos modelos antigos, um token valia cerca de 3,5 caracteres em inglês; os modelos a partir do Claude 4.7, que incluem os quatro atuais, usam um {{tokenizador}} novo, que gera cerca de 30% mais tokens para o mesmo texto."
      ],
      [
        "p",
        "Para o português não há número oficial, então medimos. Em 08/11/2026, com o Opus 5.5 dentro do Claude Code, o glossário da documentação da Anthropic em português, com 10.778 caracteres e 1.653 palavras, ocupou cerca de 4.180 tokens: 2,6 caracteres por token, ou 2,5 tokens por palavra. A versão em inglês do mesmo glossário, com 9.602 caracteres, ocupou cerca de 2.900 tokens. O mesmo conteúdo custou uns 44% a mais em português. A medição foi feita pela diferença na conta de tokens antes e depois de o Claude Code ler cada arquivo, o mesmo método do laboratório, e tem margem de alguns por cento."
      ],
      [
        "p",
        "Daí a régua desta aula, para ordem de grandeza: em português, divida o número de caracteres por 2,5, contando espaços e pontuação. Uma página de contrato, com uns 3 mil caracteres, dá perto de 1.200 tokens; um contrato de 10 páginas, uns 12 mil. Para a conta exata, existe a {{contagem-de-tokens|contagem de tokens}} da API, gratuita, que o módulo 10 mostra; ela exige chave de API."
      ],
      [
        "p",
        "Por que importa: quase todo erro de estimativa vem de usar a régua errada. \"Uma palavra, um token\" daria 1.653 tokens para o glossário, menos da metade do medido. A régua do inglês dos modelos antigos daria uns 3.100, um quarto a menos. Orçamento feito com régua baixa sai baixo."
      ],
      [
        "h3",
        "As quatro linhas da conta"
      ],
      [
        "p",
        "Todo pedido ao modelo tem duas metades, os {{entrada-saida|tokens de entrada e de saída}}, e o cache divide a entrada em três. Ficam quatro linhas, cada uma com o seu preço:"
      ],
      [
        "lista",
        [
          "**Entrada nova:** o que o modelo lê pela primeira vez, a preço cheio. No Opus 5.5, US$ 4 por milhão de tokens, em 08/11/2026.",
          "**Gravação no cache:** a entrada que fica guardada para os próximos pedidos. Custa 1,25 vez o preço da entrada, se o cache dura cinco minutos, ou 2 vezes, se dura uma hora.",
          "**Leitura do cache:** a entrada repetida, relida da gaveta. No Opus 5.5 e no Sonnet 5.5, 5% do preço da entrada; nos outros modelos atuais, de 2,5% a 10%.",
          "**Saída:** tudo o que o modelo escreve, inclusive o {{pensamento}}. Custa cinco vezes a entrada em todos os modelos atuais."
        ]
      ],
      [
        "p",
        "Dois detalhes pegam quem está começando. O primeiro: o pensamento é cobrado inteiro como saída, mesmo quando você vê só um resumo dele; a página de preços do pensamento diz isso com todas as letras. O segundo: no Claude Code, a entrada não é só a sua mensagem. Cada pedido leva as {{instrucoes-do-sistema|instruções do sistema}}, as definições das {{ferramenta|ferramentas}}, o {{claude-md|CLAUDE.md}}, a conversa inteira e os resultados das ferramentas. A sua frase de dez palavras costuma ser a menor parte."
      ],
      [
        "h3",
        "O cache: o desconto que domina a conta"
      ],
      [
        "p",
        "Como cada pedido repete quase tudo do anterior, a maior parte da entrada de uma conversa longa vem do cache. A documentação do Claude Code explica: a cada mensagem, ele reenvia o {{contexto}} completo, e a API reaproveita o começo que não mudou, cobrando a releitura pela taxa do cache. Quanto dura o desconto depende de como você paga: no plano, dentro do uso incluído, a conversa principal usa o cache de uma hora; com chave de API ou com {{uso-extra|créditos de uso}}, o de cinco minutos."
      ],
      [
        "p",
        "Um exemplo com números. Uma conversa de 100 mil tokens no Opus 5.5: sem cache, cada mensagem nova pagaria 100 mil tokens a US$ 4 por milhão, 40 centavos só de entrada. Com o cache quente, paga 100 mil a US$ 0,20 por milhão, 2 centavos, mais a parte nova. Se você sair para almoçar e o cache esfriar, a primeira mensagem de volta grava tudo de novo e custa mais que os 40 centavos. É também por isso que trocar de modelo no meio da conversa sai caro, como a aula 5.4 avisou: cada modelo tem o próprio cache, e o desconto recomeça do zero."
      ],
      [
        "h3",
        "O caminho completo de um caso"
      ],
      [
        "p",
        "Você quer um programa que lê 40 contratos de 10 páginas e devolve, de cada um, um resumo de meia página, pela API, com o Sonnet 5.5. A conta sai em cinco passos."
      ],
      [
        "lista",
        [
          "**Entrada por contrato:** 10 páginas de 3 mil caracteres são 30 mil caracteres; divididos por 2,5, uns 12 mil tokens. Some a instrução, umas 300 palavras, perto de 750 tokens: arredonde para 13 mil.",
          "**Saída por contrato:** meia página, uns 1.500 caracteres, dá 600 tokens. Com algum pensamento antes da resposta, conte o dobro: 1.200.",
          "**Custo por contrato:** 13 mil tokens a US$ 2 por milhão dão US$ 0,026; 1.200 a US$ 10 por milhão dão US$ 0,012. Total: perto de 4 centavos.",
          "**Custo do lote:** 40 contratos, perto de US$ 1,50. Não há cache a contar, porque cada contrato é diferente; só a instrução se repetiria, e ela é pequena.",
          "**Margem:** dobre, para cobrir pedidos refeitos, respostas mais longas e os seus testes. Uns US$ 3. A ordem de grandeza é de alguns dólares, e não de centavos nem de centenas."
        ]
      ],
      [
        "p",
        "No Haiku 5.5, a mesma conta dá uns 8 centavos para os 40, antes da margem. Só um teste com contratos de verdade diz se o resumo dele serve; a aula 5.4 mostrou como decidir isso."
      ],
      [
        "h3",
        "No plano, a conta vira limite"
      ],
      [
        "p",
        "Na assinatura, nada disso aparece na fatura: aparece como {{limite-de-uso|limite}} consumido. Mesmo assim, o Claude Code faz a conta em dólares e a mostra no /usage. O bloco Session, no topo, traz o custo estimado da sessão e o uso por modelo, nas mesmas quatro linhas. A página de custos da documentação mostra este exemplo:"
      ],
      [
        "codigo",
        {
          "texto": "Total cost:            $0.55\nTotal duration (API):  6m 20s\nTotal duration (wall): 6h 33m 10s\nTotal code changes:    0 lines added, 0 lines removed\nUsage by model:\n   claude-sonnet-4-6:  1.2k input, 5.3k output, 940.0k cache read, 50.0k cache write ($0.55)",
          "linguagem": "texto",
          "rotulo": "exemplo da documentação"
        }
      ],
      [
        "p",
        "Leia a última linha: 1,2 mil tokens de entrada nova, 5,3 mil de saída, 940 mil lidos do cache e 50 mil gravados, que somam US$ 0,55 com os preços do Sonnet 4.6, um modelo anterior. A documentação avisa que o Claude Code calcula essa figura no seu PC, pelo preço de tabela, e que, para quem assina Pro, Max ou Ultra, ela não é cobrança: serve para comparar sessões. Os totais zeram a cada {{clear|/clear}}. Na mesma tela, quem assina vê as barras do limite e um detalhamento do que mais consumiu, como skills e servidores {{mcp|MCP}}."
      ],
      [
        "p",
        "Para ver o tamanho da janela num momento qualquer, o comando {{context|/context}} mostra quantos tokens ela já tem ocupados, no total e por categoria. O laboratório usa o /context para medir um arquivo e o /usage para ver a conta."
      ],
      [
        "h3",
        "A ordem de grandeza: quando a conta importa"
      ],
      [
        "p",
        "Para ter uma régua: em 08/11/2026, a página de custos do Claude Code dizia que, em empresas, o custo médio fica perto de US$ 13 por desenvolvedor por dia de uso, entre US$ 150 e US$ 250 por mês, e abaixo de US$ 30 por dia para 90% dos usuários, pagando pela API. Num plano de assinatura, o valor é fixo, e esse mesmo uso vira limite."
      ],
      [
        "p",
        "Quando a conta importa: antes de pôr um programa para rodar em volume, antes de escolher o modelo de um bot e quando o limite do plano acaba antes do fim da semana. Quando não importa: numa conversa de dez minutos no {{app}}, em que pensar nos tokens custa mais atenção do que economiza."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso contar tokens toda vez?** Não. Faça a conta antes de algo que vai se repetir muito, e confira de vez em quando no /usage. No dia a dia, a régua dos 2,5 caracteres basta.",
          "**Os dólares do /usage vão para a minha fatura?** Não, se você usa o plano dentro do limite: são uma estimativa pelo preço de tabela. Só os créditos de uso, se você os ligar, são cobrados à parte.",
          "**E se eu errar a estimativa?** Por isso a margem do quinto passo. Antes de rodar em volume, rode com cinco casos, olhe o uso real e multiplique.",
          "**Por que o português gasta mais?** O tokenizador guarda pedaços prontos para as sequências de letras mais frequentes no texto em que foi montado; palavras comuns em inglês tendem a virar um pedaço só, e as do português se partem mais. A documentação só diz que depende da língua; a medição desta aula mostra o tamanho da diferença num texto."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: cache de uma hora ou de cinco minutos, lote e busca na web",
          "blocos": [
            [
              "p",
              "A gravação no cache de cinco minutos custa 1,25 vez a entrada; a de uma hora, 2 vezes. A página de preços faz a conta do empate: com a leitura a 10% da entrada, o cache de cinco minutos compensa a partir de uma releitura, e o de uma hora, a partir de duas. No Opus 5.5 e no Sonnet 5.5, com a leitura a 5%, ele compensa ainda mais cedo."
            ],
            [
              "p",
              "Pedidos que podem esperar vão em {{lote}}, pela metade do preço, e os descontos de lote e de cache se somam. A busca na web, quando um programa a usa pela API, cobra à parte: US$ 10 a cada mil buscas, mais os tokens das páginas que entram no contexto, em 08/11/2026."
            ],
            [
              "p",
              "Quem usa a API recebe os quatro números em toda resposta, nos campos input_tokens, output_tokens, cache_read_input_tokens e cache_creation_input_tokens; o pensamento aparece separado em output_tokens_details. O módulo 10 lê esses campos num programa seu."
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
          "pergunta": "O programa abaixo refaz, em Python, a conta do exemplo do /usage mostrado acima, com os preços do Sonnet 4.6, o modelo do exemplo. O que você acha que ele imprime? Qual das quatro linhas pesa mais?",
          "codigo": "# Uma sessão do Claude Code, com os números do /usage (exemplo da documentação)\nentrada = 1200      # tokens novos de entrada, a preço cheio\nsaida = 5300        # tokens de saída, inclusive o pensamento\nleitura = 940000    # tokens relidos do cache\ngravacao = 50000    # tokens gravados no cache\n\n# Sonnet 4.6, o modelo do exemplo: dólares por milhão de tokens (08/11/2026)\np_entrada = 3\np_saida = 15\np_leitura = 0.30\np_gravacao = 3.75\n\nprint(f\"Entrada nova:   US$ {entrada * p_entrada / 1000000:.4f}\")\nprint(f\"Saída:          US$ {saida * p_saida / 1000000:.4f}\")\nprint(f\"Leitura cache:  US$ {leitura * p_leitura / 1000000:.4f}\")\nprint(f\"Gravação cache: US$ {gravacao * p_gravacao / 1000000:.4f}\")\ntotal = (entrada * p_entrada + saida * p_saida + leitura * p_leitura + gravacao * p_gravacao) / 1000000\nprint(f\"Total:          US$ {total:.4f}\")",
          "linguagem": "python",
          "resposta": "Entrada nova, US$ 0.0036; saída, 0.0795; leitura do cache, 0.2820; gravação, 0.1875; total, US$ 0.5526, os mesmos US$ 0,55 do /usage. A linha mais pesada é a leitura do cache, mesmo custando um décimo da entrada, porque são 940 mil tokens: numa sessão de {{agente}}, o que pesa é reler o contexto, e não a sua pergunta. Use os botões. Sem cache, os mesmos tokens custariam US$ 3,05, mais de cinco vezes. No Sonnet 5.5, com a leitura do cache a 5% da entrada, US$ 0,27. No Opus 5.5, US$ 0,55, praticamente o que o Sonnet 4.6 cobrava. O Python escreve com ponto no lugar da vírgula.",
          "vivo": [
            [
              "Tirar o cache",
              "# Uma sessão do Claude Code, com os números do /usage (exemplo da documentação)\nentrada = 1200      # tokens novos de entrada, a preço cheio\nsaida = 5300        # tokens de saída, inclusive o pensamento\nleitura = 940000    # tokens relidos do cache\ngravacao = 50000    # tokens gravados no cache\n\n# Sonnet 4.6, sem cache: dólares por milhão de tokens (08/11/2026)\n# sem cache, a leitura e a gravação pagam o preço cheio da entrada\np_entrada = 3\np_saida = 15\np_leitura = 3\np_gravacao = 3\n\nprint(f\"Entrada nova:   US$ {entrada * p_entrada / 1000000:.4f}\")\nprint(f\"Saída:          US$ {saida * p_saida / 1000000:.4f}\")\nprint(f\"Leitura cache:  US$ {leitura * p_leitura / 1000000:.4f}\")\nprint(f\"Gravação cache: US$ {gravacao * p_gravacao / 1000000:.4f}\")\ntotal = (entrada * p_entrada + saida * p_saida + leitura * p_leitura + gravacao * p_gravacao) / 1000000\nprint(f\"Total:          US$ {total:.4f}\")",
              "Entrada nova:   US$ 0.0036\nSaída:          US$ 0.0795\nLeitura cache:  US$ 2.8200\nGravação cache: US$ 0.1500\nTotal:          US$ 3.0531"
            ],
            [
              "Trocar pelo Sonnet 5.5",
              "# Uma sessão do Claude Code, com os números do /usage (exemplo da documentação)\nentrada = 1200      # tokens novos de entrada, a preço cheio\nsaida = 5300        # tokens de saída, inclusive o pensamento\nleitura = 940000    # tokens relidos do cache\ngravacao = 50000    # tokens gravados no cache\n\n# Sonnet 5.5: dólares por milhão de tokens (08/11/2026)\np_entrada = 2\np_saida = 10\np_leitura = 0.10\np_gravacao = 2.50\n\nprint(f\"Entrada nova:   US$ {entrada * p_entrada / 1000000:.4f}\")\nprint(f\"Saída:          US$ {saida * p_saida / 1000000:.4f}\")\nprint(f\"Leitura cache:  US$ {leitura * p_leitura / 1000000:.4f}\")\nprint(f\"Gravação cache: US$ {gravacao * p_gravacao / 1000000:.4f}\")\ntotal = (entrada * p_entrada + saida * p_saida + leitura * p_leitura + gravacao * p_gravacao) / 1000000\nprint(f\"Total:          US$ {total:.4f}\")",
              "Entrada nova:   US$ 0.0024\nSaída:          US$ 0.0530\nLeitura cache:  US$ 0.0940\nGravação cache: US$ 0.1250\nTotal:          US$ 0.2744"
            ],
            [
              "Trocar pelo Opus 5.5",
              "# Uma sessão do Claude Code, com os números do /usage (exemplo da documentação)\nentrada = 1200      # tokens novos de entrada, a preço cheio\nsaida = 5300        # tokens de saída, inclusive o pensamento\nleitura = 940000    # tokens relidos do cache\ngravacao = 50000    # tokens gravados no cache\n\n# Opus 5.5: dólares por milhão de tokens (08/11/2026)\np_entrada = 4\np_saida = 20\np_leitura = 0.20\np_gravacao = 5\n\nprint(f\"Entrada nova:   US$ {entrada * p_entrada / 1000000:.4f}\")\nprint(f\"Saída:          US$ {saida * p_saida / 1000000:.4f}\")\nprint(f\"Leitura cache:  US$ {leitura * p_leitura / 1000000:.4f}\")\nprint(f\"Gravação cache: US$ {gravacao * p_gravacao / 1000000:.4f}\")\ntotal = (entrada * p_entrada + saida * p_saida + leitura * p_leitura + gravacao * p_gravacao) / 1000000\nprint(f\"Total:          US$ {total:.4f}\")",
              "Entrada nova:   US$ 0.0048\nSaída:          US$ 0.1060\nLeitura cache:  US$ 0.1880\nGravação cache: US$ 0.2500\nTotal:          US$ 0.5488"
            ],
            [
              "Voltar ao original",
              "# Uma sessão do Claude Code, com os números do /usage (exemplo da documentação)\nentrada = 1200      # tokens novos de entrada, a preço cheio\nsaida = 5300        # tokens de saída, inclusive o pensamento\nleitura = 940000    # tokens relidos do cache\ngravacao = 50000    # tokens gravados no cache\n\n# Sonnet 4.6, o modelo do exemplo: dólares por milhão de tokens (08/11/2026)\np_entrada = 3\np_saida = 15\np_leitura = 0.30\np_gravacao = 3.75\n\nprint(f\"Entrada nova:   US$ {entrada * p_entrada / 1000000:.4f}\")\nprint(f\"Saída:          US$ {saida * p_saida / 1000000:.4f}\")\nprint(f\"Leitura cache:  US$ {leitura * p_leitura / 1000000:.4f}\")\nprint(f\"Gravação cache: US$ {gravacao * p_gravacao / 1000000:.4f}\")\ntotal = (entrada * p_entrada + saida * p_saida + leitura * p_leitura + gravacao * p_gravacao) / 1000000\nprint(f\"Total:          US$ {total:.4f}\")",
              "Entrada nova:   US$ 0.0036\nSaída:          US$ 0.0795\nLeitura cache:  US$ 0.2820\nGravação cache: US$ 0.1875\nTotal:          US$ 0.5526"
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
          "p": "Você vai mandar pela API um contrato de 30 mil tokens e pedir um resumo de mil tokens, com o Opus 5.5, uma vez só, sem cache. Quanto custa, mais ou menos?",
          "o": [
            [
              "Uns 3 centavos de dólar, porque o contrato sai pelo preço do cache",
              "O cache só desconta o que um pedido anterior já gravou. Num pedido único, a entrada paga o preço cheio: 30 mil a US$ 4 por milhão, 12 centavos."
            ],
            [
              "Uns 14 centavos de dólar: 12 da entrada e 2 da saída",
              "Isso. 30 mil tokens a US$ 4 por milhão dão US$ 0,12; mil a US$ 20 por milhão, US$ 0,02."
            ],
            [
              "Uns 62 centavos de dólar, porque a saída custa cinco vezes mais",
              "O \"cinco vezes\" vale por token, e a saída aqui é pequena: 2 centavos. Os 62 viriam de cobrar os 31 mil tokens a preço de saída."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou como estimar os tokens de um contrato de 5 mil palavras em português. O Claude respondeu: \"Boa pergunta, e vale ser cuidadoso. Em português, cada palavra conta mais ou menos como um token, e espaços e pontuação não entram. Então o contrato tem perto de 5 mil tokens, e você pode usar esse número com segurança para orçar o envio pela API.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: para orçar, uma palavra por token é a régua que a documentação recomenda",
              "A documentação não dá essa régua: diz que depende do modelo e da língua, e manda usar a contagem de tokens para o número exato."
            ],
            [
              "Está errada: espaços e pontuação contam, mas uma palavra ainda vale um token",
              "Espaços e pontuação entram na conta, mas o erro maior é outro: uma palavra em português vira, em média, mais de dois tokens."
            ],
            [
              "Está errada: a medição desta aula deu perto de 2,5 tokens por palavra, em média, no português",
              "Isso. O contrato ficaria perto de 12 mil tokens, e um orçamento feito com 5 mil sairia baixo pela metade."
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
            "\"Uma palavra é um token.\"",
            "Em português, a medição desta aula deu 2,5 tokens por palavra. Para ordem de grandeza, divida os caracteres por 2,5."
          ],
          [
            "\"Só a minha pergunta entra na conta.\"",
            "Cada pedido leva instruções do sistema, ferramentas, CLAUDE.md, a conversa inteira e os resultados das ferramentas. A sua frase costuma ser a menor parte."
          ],
          [
            "\"Vi só um resumo do pensamento, então paguei pouco.\"",
            "O pensamento é cobrado inteiro, como saída, mesmo que apareça resumido."
          ],
          [
            "\"O /usage mostrou US$ 3, então isso vem na fatura.\"",
            "Dentro do plano, é uma estimativa pelo preço de tabela, para comparar sessões. Cobrança à parte, só nos créditos de uso, se você os ligar."
          ],
          [
            "\"Usei a régua de um tutorial antigo.\"",
            "Os modelos a partir do Claude 4.7 geram cerca de 30% mais tokens para o mesmo texto. A conta feita com a régua antiga sai baixa."
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
          "p": "Como estimar os tokens de um texto em português, e como conferir?",
          "r": [
            "Divida os caracteres por 2,5, contando espaços e pontuação.",
            "É ordem de grandeza: a medição desta aula deu 2,6 caracteres por token.",
            "Para conferir, meça com o /context ou com a contagem de tokens da API."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são as quatro linhas da conta de um pedido, da mais cara para a mais barata por token?",
          "r": [
            "Saída, inclusive o pensamento: cinco vezes a entrada.",
            "Gravação no cache: 1,25 ou 2 vezes a entrada.",
            "Entrada nova: o preço cheio.",
            "Leitura do cache: uma fração, 5% no Opus 5.5."
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
          "titulo": "Meça um texto de verdade e faça a conta",
          "lugar": "No PC, com o PowerShell, o Python e o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai {{baixar}} o glossário da documentação da Anthropic, em português, estimar os tokens dele pela régua desta aula, medir quantos tokens ele ocupa de verdade no {{claude-code|Claude Code}} e calcular quanto custaria mandá-lo cem vezes pela API. Precisa do {{python|Python}}, que a aula 2.2 instalou, e do Claude Code, como a aula 0.0 ensina. Nada aqui gasta dinheiro: no plano, a leitura do arquivo consome um pouco do limite, como qualquer pedido. Pelo app: não dá para medir, porque o app não mostra os tokens; a conta do passo 6 funciona com qualquer número. Os comandos do {{powershell|PowerShell}} e do Python foram rodados de verdade em 08/11/2026; os passos dentro do Claude Code não foram, porque exigem o Claude Code aberto numa conversa. Não testado de ponta a ponta.",
          "naoTestado": "Os passos 7 a 13 (Claude Code, /context, /usage e a calculadora com o número medido) não foram rodados: exigem o Claude Code interativo. O valor esperado, perto de 4.200 tokens, vem da medição feita em 08/11/2026 com o Opus 5.5 pelo mesmo método, descrita na aula. Os passos 1 a 6 foram rodados de verdade no Windows PowerShell 5.1 e no Python 3.12, numa pasta de teste.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando, que cria a pasta C:\\Projetos\\tokens e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\tokens | Out-Null; Set-Location C:\\Projetos\\tokens",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\tokens."
            },
            {
              "faz": "Cole este comando, que baixa o glossário da documentação oficial para a pasta C:\\Projetos\\tokens, com o nome glossario-pt.md. Ele usa o {{cmdlet}} {{invoke-webrequest|Invoke-WebRequest}}; se já houver um arquivo com esse nome ali, ele é substituído.",
              "cola": "Invoke-WebRequest -UseBasicParsing https://platform.claude.com/docs/pt-BR/about-claude/glossary.md -OutFile glossario-pt.md",
              "espera": "Pode aparecer uma barra de progresso por um instante; depois, só o cursor. O arquivo glossario-pt.md está na pasta."
            },
            {
              "faz": "Cole este comando, que conta os caracteres e as palavras do arquivo.",
              "cola": "$t = Get-Content .\\glossario-pt.md -Raw -Encoding UTF8; \"$($t.Length) caracteres, $(($t -split '\\s+' | Where-Object { $_ }).Count) palavras\"",
              "saida": "10778 caracteres, 1653 palavras",
              "espera": "Uma linha com os dois números; se a página da documentação tiver mudado, eles serão um pouco diferentes. Faça a estimativa: caracteres divididos por 2,5. Com 10.778, dá perto de 4.300 tokens."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria, na pasta C:\\Projetos\\tokens, a calculadora custo.py, com os preços de 08/11/2026; se já existir um custo.py ali, ele é substituído. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\n# custo.py: estima o custo de um pedido pela API do Claude\n# Uso: python custo.py modelo tokens_de_entrada tokens_de_saida [vezes]\n# Preços em dólares por milhão de tokens, conferidos em 08/11/2026\nimport sys\n\nprecos = {\n    \"haiku\": (0.10, 0.50),\n    \"sonnet\": (2, 10),\n    \"opus\": (4, 20),\n    \"fable\": (10, 50),\n}\n\ndef numero(texto):\n    texto = texto.lower().replace(\",\", \".\")\n    if texto.endswith(\"k\"):\n        return float(texto[:-1]) * 1000\n    return float(texto)\n\nmodelo = sys.argv[1]\nentrada = numero(sys.argv[2])\nsaida = numero(sys.argv[3])\nvezes = int(sys.argv[4]) if len(sys.argv) > 4 else 1\n\np_entrada, p_saida = precos[modelo]\nif modelo == \"haiku\" and entrada > 100000:\n    p_entrada, p_saida = 0.50, 2.50  # acima de 100 mil tokens, o Haiku custa mais\n\ncusto = entrada * p_entrada / 1000000 + saida * p_saida / 1000000\nprint(f\"Modelo: {modelo}\")\nprint(f\"Uma vez: US$ {custo:.4f}\")\nprint(f\"{vezes} vezes: US$ {custo * vezes:.2f}\")\n'@ | Set-Content -Encoding utf8 custo.py",
              "espera": "Só o cursor. O arquivo custo.py está na pasta."
            },
            {
              "faz": "Cole este comando, que calcula o custo de mandar o glossário cem vezes ao Sonnet 5.5, pedindo uma resposta de 500 tokens a cada vez.",
              "cola": "python custo.py sonnet 4300 500 100",
              "saida": "Modelo: sonnet\nUma vez: US$ 0.0136\n100 vezes: US$ 1.36",
              "espera": "Três linhas: pouco mais de 1 centavo por vez, US$ 1,36 pelas cem. Se quiser comparar, cole de novo trocando sonnet por haiku, opus ou fable, sempre em minúsculas."
            },
            {
              "faz": "Digite claude e aperte Enter, para abrir o Claude Code nessa pasta.",
              "espera": "O Claude Code fica esperando um pedido, dentro de C:\\Projetos\\tokens."
            },
            {
              "faz": "Digite /context e aperte Enter.",
              "espera": "Um quadro com o uso da janela, no total e por categoria. Anote só o total de tokens ocupados. Se o quadro continuar aberto, aperte Esc."
            },
            {
              "faz": "Cole este pedido. Se ele pedir permissão para ler o arquivo, aceite.",
              "cola": "Leia o arquivo glossario-pt.md inteiro, de uma vez, e responda só com a palavra OK.",
              "espera": "Ele lê o arquivo e responde OK."
            },
            {
              "faz": "Digite /context de novo e aperte Enter.",
              "espera": "Um total maior. Subtraia dele o número que você anotou no passo 8. A diferença é o que a leitura acrescentou: o arquivo, mais algumas centenas de tokens do pedido e da resposta. Na medição desta aula, o arquivo deu perto de 4.200. Compare com a sua estimativa do passo 4."
            },
            {
              "faz": "Digite /usage e aperte Enter.",
              "espera": "No topo, o bloco Session, com o custo estimado em dólares e o uso por modelo em quatro números: input, output, cache read e cache write. Se você assina um plano, as barras de limite aparecem na mesma tela, e esse custo não é cobrado. Aperte Esc para fechar."
            },
            {
              "faz": "Digite /exit e aperte Enter, para sair do Claude Code.",
              "espera": "Volta a linha do PowerShell, ainda em C:\\Projetos\\tokens."
            },
            {
              "faz": "Cole o comando da calculadora de novo, trocando 4300 pelo número que você mediu no passo 10.",
              "cola": "python custo.py sonnet 4300 500 100",
              "espera": "O custo muda pouco se a sua estimativa ficou perto do medido. É esse o objetivo: estimar sem medir e, de vez em quando, medir para conferir a régua."
            }
          ],
          "errado": "Se o passo 3 terminar com uma mensagem vermelha sobre a conexão, confira a internet e cole o comando de novo. Se o passo 4 mostrar um número muito menor que 10 mil, o arquivo não baixou inteiro: refaça o passo 3. Se a calculadora não rodar e aparecer uma mensagem dizendo que o Python não foi encontrado, a aula 2.2 mostra como instalar. Se ela terminar com KeyError e o nome do modelo, como KeyError: 'Sonnet', o nome foi escrito com maiúscula ou de outro jeito: use haiku, sonnet, opus ou fable, em minúsculas. Se o Claude Code disser que não acha o glossario-pt.md, ele foi aberto em outra pasta: saia com /exit, cole o comando do passo 2 e abra de novo."
        }
      ],
      [
        "fontes",
        [
          [
            "Glossário, Claude Platform (tokens; tokenizador dos modelos a partir do Claude 4.7, com cerca de 30% mais tokens; 3,5 caracteres por token em inglês nos modelos anteriores)",
            "https://platform.claude.com/docs/pt-BR/about-claude/glossary",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Preços, Claude Platform (entrada, saída, gravação e leitura do cache por modelo; empate do cache; lote; busca na web)",
            "https://platform.claude.com/docs/pt-BR/about-claude/pricing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Direcionando o pensamento, Claude Platform (o pensamento é cobrado inteiro como saída, não o resumo visível)",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/thinking-steering-and-cost",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Contagem de tokens, Claude Platform (gratuita, é uma estimativa, recontar com o modelo que você vai usar)",
            "https://platform.claude.com/docs/pt-BR/build-with-claude/token-counting",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Gerencie custos de forma eficaz, Claude Code (bloco Session do /usage, exemplo de US$ 0,55, custo médio em empresas)",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code usa prompt caching (cada mensagem reenvia o contexto; cache de uma hora no plano e de cinco minutos com chave de API)",
            "https://code.claude.com/docs/pt/prompt-caching",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Explore a janela de contexto, Claude Code (o /context mostra o uso real da janela por categoria)",
            "https://code.claude.com/docs/pt/context-window",
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
          "O custo de um pedido depende só do tamanho da pergunta, multiplicado pelo preço do modelo",
          "A pergunta costuma ser a menor parte: a entrada leva instruções, ferramentas e a conversa inteira, e a saída custa cinco vezes mais."
        ],
        [
          "Some entrada nova, cache e saída, cada uma ao seu preço, contando com a régua certa",
          "Isso. Quatro linhas, a régua dos 2,5 caracteres para o português, e o /context ou o /usage para conferir."
        ],
        [
          "No plano de assinatura não há custo, então contar tokens só importa para quem programa",
          "No plano, a mesma conta aparece como limite consumido, e entender a conta explica por que o limite acaba mais cedo."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Numa sessão longa do Claude Code, qual parcela da entrada costuma ser a maior?",
        "o": [
          [
            "A leitura do cache, com o contexto relido",
            "Isso. Cada pedido repete quase tudo do anterior, e essa parte vem do cache, a uma fração do preço, mas em grande quantidade."
          ],
          [
            "A sua mensagem nova, a preço cheio",
            "A sua mensagem costuma ser a menor parte: o pedido leva também instruções, ferramentas e a conversa inteira."
          ],
          [
            "A gravação no cache, a cada mensagem",
            "Gravação só acontece com conteúdo novo, ou quando o cache esfria. Numa sessão com o cache quente, ela é pequena perto da leitura."
          ]
        ],
        "c": 0
      },
      {
        "p": "Um texto em português tem 25 mil caracteres. Pela régua desta aula, quantos tokens ele ocupa, mais ou menos?",
        "o": [
          [
            "Uns 25 mil tokens, um para cada caractere",
            "Um token junta vários caracteres: em português, perto de 2,5."
          ],
          [
            "Uns 4 mil tokens, um para cada palavra escrita",
            "Uma palavra em português vira, em média, mais de dois tokens. Por palavra, a conta sai baixa."
          ],
          [
            "Uns 10 mil, um token a cada 2,5 caracteres",
            "Isso. 25 mil divididos por 2,5 dão 10 mil, como ordem de grandeza."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como estimo os tokens de um texto?",
        "Em português, divida os caracteres por 2,5, contando espaços e pontuação. É ordem de grandeza. Para conferir, peça ao Claude Code que leia o arquivo e compare o /context antes e depois; pela API, a contagem de tokens dá o número exato, e é gratuita."
      ],
      [
        "Por que o /usage mostra dólares se eu assino um plano?",
        "O Claude Code calcula no seu PC quanto a sessão custaria pelo preço de tabela da API. Dentro do plano, isso não é cobrado: serve para comparar sessões. O que conta para você são as barras de limite, na mesma tela."
      ],
      [
        "O que pesa mais na conta de uma conversa longa?",
        "A releitura do contexto. Cada pedido reenvia a conversa inteira; com o cache quente, ela sai por uma fração do preço, mas são centenas de milhares de tokens. Por isso conversa enxuta e cache quente economizam mais do que encurtar a sua pergunta."
      ]
    ]
  },
  "5-6": {
    "tempo": 30,
    "video": "a5-6",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já viu no celular um vídeo prometendo que uma {{skill}} corta 65% do gasto com IA, que um {{repositorio|repositório}} com 100 mil {{estrelas}} vai mudar o seu trabalho, ou que dá para faturar alto com uma agência de IA, e ficou na dúvida se era verdade. Esta aula ensina a ler esses números: o que cada um mede, o que ele esconde e as perguntas que separam a dica útil do golpe.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O que circula sobre IA nas redes mistura três coisas: técnicas que funcionam, números verdadeiros numa condição estreita e golpes. Por fora, as três têm a mesma cara: um número grande, uma tela bonita, alguém falando com segurança. Os casos desta aula são reais, e cada um foi conferido nas fontes em 08/11/2026."
      ],
      [
        "p",
        "Para você, o custo de acreditar errado é concreto. Dinheiro, num curso de renda que não entrega. Tempo, num método \"10 vezes mais rápido\" que deixa você mais lento. E segurança, que é o pior: uma skill ou um {{plugin}} instalado roda com os seus privilégios e, se o seu {{claude-code|Claude Code}} estiver no modo {{bypass}}, o que ele executa não pede confirmação. A aula 4.1 mostrou que estrela não é segurança. Esta aula generaliza a lição: nenhum número sozinho decide."
      ],
      [
        "p",
        "Não é para desconfiar de tudo, o que travaria você. Dica boa e barata se testa em cinco minutos. O que esta aula ensina é saber que pergunta fazer a cada tipo de número, em um minuto, antes de {{instalar}}, comprar ou mudar o jeito de trabalhar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Você conhece de perto um mundo em que número de vitrine tem regra: o dos fundos de investimento. Quando o material de divulgação de um fundo compara a rentabilidade com a de outro, a Resolução 175 da CVM obriga a mostrar as datas, os períodos, a fonte dos dados e o critério da comparação. Quando mostra rentabilidade passada, obriga um aviso em destaque: a rentabilidade obtida no passado não representa garantia de resultados futuros. O regulador faz as perguntas pelo investidor. Agora imagine o mesmo folheto sem regra nenhuma: \"300% ao ano\", sem período, sem o CDI ao lado, sem aviso. É assim que chegam os números sobre IA: 65% de economia, 1,3 milhão de instalações, 10 vezes mais rápido. A regra da CVM vira a sua lista de perguntas: medido por quem, em que período, comparado com quê, e o que garante que vai se repetir com você."
      ],
      [
        "quebra",
        "No fundo de investimento há regulador, regra escrita e punição; nas redes, quase nada disso. O mais perto, no Brasil, é o Código de Defesa do Consumidor, que proíbe publicidade enganosa e põe em quem anuncia o dever de provar o que diz, mas um post que se apresenta como opinião, ou um contador de {{site}}, raramente vira caso. E nem todo número de IA é promessa de resultado: estrelas e instalações são contadores de atenção, que podem crescer sem ninguém mentir sobre nada, e a pergunta certa para eles é outra."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Quatro tipos de número, quatro perguntas"
      ],
      [
        "p",
        "Quase todo número que circula sobre IA cai num de quatro tipos. Cada tipo mede uma coisa, esconde outra e pede uma pergunta própria:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Tipo",
            "Exemplo",
            "O que mede de verdade",
            "A primeira pergunta"
          ],
          "linhas": [
            [
              "Popularidade",
              "\"1,3 milhão de instalações\", \"100 mil estrelas\"",
              "Atenção: quantas vezes alguém clicou ou baixou",
              "Os números fecham entre si?"
            ],
            [
              "Economia",
              "\"Corta 65% dos tokens\"",
              "Uma fatia da conta, numa condição",
              "65% de qual parte, em que tarefa?"
            ],
            [
              "Velocidade",
              "\"10 vezes mais rápido\"",
              "Em geral, uma impressão",
              "Medido por quem, contra o quê?"
            ],
            [
              "Renda",
              "\"Fature R$ 30 mil por mês\"",
              "O que o vendedor quer que você imagine",
              "Quem ganha se eu acreditar?"
            ]
          ]
        }
      ],
      [
        "h3",
        "Popularidade: estrelas e instalações medem atenção"
      ],
      [
        "p",
        "A aula 4.1 mostrou que estrela é um clique, e que clique pode ser comprado. Instalação parece mais sólida, porque alguém teria usado. Mas o contador é do site que o mostra, e cada site conta do seu jeito: o skills.sh, um diretório de skills da comunidade, não diz como conta. A regra prática é cruzar números que deveriam andar juntos."
      ],
      [
        "p",
        "Um caso conferido em 08/11/2026. A skill reddit-automation, do repositório flowkit-labs/skills, aparecia no skills.sh com 1,3 milhão de instalações. No {{github|GitHub}}, o mesmo repositório tinha 31 estrelas e tinha sido criado e atualizado pela última vez no mesmo dia, 12/08/2026, com cinco segundos de diferença. Um milhão de pessoas instalando, trinta e uma dando estrela, num projeto que nunca recebeu uma correção: os números não fecham. Isso não prova fraude, porque o contador pode somar instalações automáticas, por exemplo. Prova que o número não serve de garantia."
      ],
      [
        "p",
        "O contrário também engana. O repositório gsd-build/get-shit-done, de um método popular para organizar projetos com agentes, tinha 64 mil estrelas em 08/11/2026 e era um {{repositorio-arquivado|repositório arquivado}}, sem mudança desde 31/05/2026. Tutorial antigo que manda instalá-lo aponta para um projeto parado. Estrela mede o passado; para saber se o projeto está vivo, olhe a data da última atualização e se ele foi arquivado."
      ],
      [
        "h3",
        "Economia: \"65%\" de quê?"
      ],
      [
        "p",
        "A skill caveman ficou famosa com uma promessa simples: fazer o {{agente}} escrever como um homem das cavernas, em frases curtas e sem artigos, e economizar 65% dos {{token|tokens}}. Em julho de 2026, a JetBrains, empresa que faz programas para programadores, testou a promessa no Claude Code, em 82 tarefas reais de programação, com e sem a skill, ligada à força em todas as respostas. A economia medida nos tokens de saída foi de 8,5%, e no custo, perto de 10% no melhor caso. A qualidade não mudou de forma detectável. A explicação do próprio teste: os 65% vêm de respostas de conversa, em prosa; num agente, o que domina a saída é {{codigo|código}}, {{comando|comandos}} e mensagens de erro, que a skill, de propósito, deixa como estão."
      ],
      [
        "p",
        "As fontes discordam, e vale dizer isso. Um artigo acadêmico de junho de 2026, com pesquisadores da Adobe entre os autores, mediu respostas comprimidas custando de 1,4 a 2,4 vezes menos na maioria dos {{modelo|modelos}} testados pela {{api|API}}, mas em outra situação: perguntas de teste com resposta conferível, como problemas de matemática e de múltipla escolha, e não sessões de agente. O mesmo artigo achou o contrário quando se comprime a entrada: o custo sobe, porque o modelo compensa escrevendo respostas mais longas, enquanto a precisão despenca. As duas medidas podem estar certas; o que muda é a condição."
      ],
      [
        "p",
        "A conta da aula 5.5 explica a diferença. Numa sessão de agente, a saída é uma fatia pequena da conta, e o que pesa é reler o {{contexto}}. Mesmo que os 65% valessem para toda a saída, a conta inteira cairia pouco, e o Preveja abaixo faz essa conta. Se você quer respostas mais curtas sem instalar nada, o Claude Code tem de fábrica o {{estilo-de-saida|estilo de saída}} Concise, que se liga com /output-style concise."
      ],
      [
        "h3",
        "Velocidade: \"10 vezes mais rápido\" contra a medida séria"
      ],
      [
        "p",
        "Título de vídeo com \"10x\" é comum; medida séria é rara e bem mais modesta. O METR, uma organização de pesquisa, publicou em julho de 2025 um experimento com 16 programadores experientes, em 246 tarefas reais dos próprios projetos. Com as ferramentas de IA do início de 2025, eles levaram 19% mais tempo. O detalhe que importa para você: antes, eles esperavam ficar 24% mais rápidos e, depois, ainda achavam que tinham ficado 20% mais rápidos. A sensação de velocidade não é uma medida."
      ],
      [
        "p",
        "Em fevereiro de 2026, o METR publicou dados do fim de 2025: uma estimativa de 18% mais rápido para quem participou de novo e de 4% para os novatos, com margens que incluem o zero. O próprio METR chama esses dados de evidência muito fraca, porque os programadores que mais gostam de IA se recusaram a trabalhar sem ela, o que distorce a amostra. Resumo honesto: as ferramentas provavelmente ajudam mais hoje, ninguém mediu bem quanto, e nada indica dez vezes. Quem escreve \"10x\" está contando uma impressão."
      ],
      [
        "h3",
        "Renda: quem ganha é quem vende"
      ],
      [
        "p",
        "A promessa de renda com IA tem um padrão: agência de IA, time de agentes, renda passiva, sempre com um print de faturamento e um curso no fim. Nos Estados Unidos, a FTC, a agência federal de defesa do consumidor, lançou em setembro de 2024 a operação AI Comply contra esse tipo de esquema. Num dos casos, o Ascend Ecom prometia renda passiva de milhares de dólares por mês com lojas online movidas a IA, e a FTC o acusou de ter tirado pelo menos US$ 25 milhões de consumidores. Em outro, o FBA Machine vendia o negócio como sem risco, e as perdas passavam de US$ 15,9 milhões. Na data do anúncio, eram acusações, e os processos estavam em andamento."
      ],
      [
        "p",
        "No Brasil, vale a regra geral do Código de Defesa do Consumidor: é proibida a publicidade inteira ou parcialmente falsa, ou que leve o consumidor ao erro, inclusive por omissão (art. 37), e quem anuncia é que tem de provar que a informação é verdadeira (art. 38)."
      ],
      [
        "p",
        "Duas pistas aparecem quase sempre. O \"comenta EU QUERO que eu te mando o link\" é captação de contato: quem comenta entra numa lista de venda, e o material prometido costuma ser a porta de entrada. E o print de faturamento prova pouco: não diz o custo, não diz de onde veio o dinheiro, e a aula 2.12 mostrou que qualquer texto de uma página se edita na tela em dez segundos. Renda vem de cliente que paga por um problema resolvido. Quando a renda de quem ensina vem de quem quer aprender a ter renda, desconfie."
      ],
      [
        "h3",
        "Golpes que usam a fama da IA"
      ],
      [
        "p",
        "O último tipo nem precisa de número: usa a curiosidade. Em 31/03/2026, a Anthropic publicou por engano o código do Claude Code junto com um {{pacote}} do programa. Logo depois, um repositório no GitHub, bem colocado no Google para quem procurava o código vazado, prometia o Claude Code com recursos de empresa destravados e sem limite de uso. Quem {{baixar|baixava}} recebia um programa que instalava o Vidar, um {{malware}} que rouba senhas e dados do {{navegador}}. A lição vale para todo \"grátis\", \"destravado\" e \"premium liberado\": o que você ganharia é exatamente o que o golpista sabe que você quer. Instale só do endereço oficial, como a aula 7.1 mostra; a aula 11.5 volta a esses casos."
      ],
      [
        "h3",
        "As cinco perguntas antes de acreditar"
      ],
      [
        "lista",
        [
          "**Quem mediu?** O próprio vendedor, alguém independente ou ninguém? Número do próprio projeto vale como anúncio.",
          "**Comparado com quê, em que condição?** 65% de qual parte da conta, em que tipo de tarefa? Dez vezes mais rápido que o quê? É o que a CVM exige de um fundo, aplicado à IA.",
          "**Os números fecham entre si?** Instalações contra estrelas, estrelas contra a data da última atualização, faturamento contra custo.",
          "**Quem ganha se eu acreditar?** A venda de um curso, um contato para a lista, a instalação de algo no seu PC.",
          "**O que eu perco se for falso?** Ler um post não custa nada; instalar algo que roda no seu PC, ou pagar um curso, custa."
        ]
      ],
      [
        "p",
        "Quando as fontes discordam, como no caso dos 65%, não escolha a que você prefere: diga que discordam e procure a condição de cada uma. Quase sempre as duas estão certas, cada uma no seu cenário, e o seu cenário decide. E quando não usar a lista: para uma dica que não custa nada e se testa em minutos, como pedir ao Claude que faça perguntas antes de começar uma tarefa, teste e pronto. A lista é para o que custa dinheiro, muito tempo ou segurança."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Então nenhum influenciador presta?** Presta, e muitos ensinam bem. O ponto não é a pessoa: é que número sem medida não decide. Dica que você testa barato dispensa prova; promessa que custa caro precisa dela.",
          "**Como sei se uma skill é segura?** Esta aula dá o primeiro filtro. O módulo 8 ensina a ler uma skill antes de instalar, e a aula 11.5 trata das maliciosas.",
          "**E se eu já instalei ou comprei?** Instalou algo que não reconhece: desinstale e, se entregou uma {{chave-api|chave de API}}, revogue a chave primeiro e só depois crie outra, como a aula 11.1 mostra. Comprou: guarde os prints da oferta; o Procon e o consumidor.gov.br recebem reclamações.",
          "**Custa alguma coisa conferir?** Não. As cinco perguntas cabem na cabeça, e ver estrelas, data da última atualização e se o projeto foi arquivado é abrir a página do repositório."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: por que o \"achei mais rápido\" engana, e como ler um repositório",
          "blocos": [
            [
              "p",
              "O METR não diz com certeza por que a sensação e a medida se afastaram tanto. A lição prática não depende disso: até programadores experientes erraram feio ao avaliar a própria velocidade. Para saber se uma ferramenta ajuda você, cronometre a mesma tarefa com e sem ela, em vez de confiar na impressão. E lembre do filtro do que chega até você: nas redes, aparece quem diz que ganhou, e não quem tentou e desistiu."
            ],
            [
              "p",
              "Para ler um repositório no GitHub, não é preciso conta. O número de estrelas fica no alto, à direita; a data da última mudança aparece na lista de arquivos; um repositório arquivado mostra uma faixa avisando que foi arquivado pelo dono e que agora é só para leitura."
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
          "pergunta": "A sessão da aula 5.5 custou US$ 0,55, somando quatro linhas. O programa abaixo aplica a promessa de 65% de economia só à saída, como se a skill cumprisse o que promete. O que você acha que ele imprime?",
          "codigo": "# A sessão da aula 5.5, com os preços do Sonnet 4.6 (dólares por milhão de tokens)\nentrada = 1200 * 3        # entrada nova\nsaida = 5300 * 15         # saída, inclusive o pensamento\nleitura = 940000 * 0.30   # leitura do cache\ngravacao = 50000 * 3.75   # gravação no cache\nantes = (entrada + saida + leitura + gravacao) / 1000000\n\n# A promessa: cortar 65% dos tokens. Aqui, o corte vale só para a saída\nsaida = saida * 0.35\ndepois = (entrada + saida + leitura + gravacao) / 1000000\n\nprint(f\"Antes:  US$ {antes:.4f}\")\nprint(f\"Depois: US$ {depois:.4f}\")\nprint(f\"Economia na conta inteira: {(1 - depois / antes) * 100:.1f}%\")",
          "linguagem": "python",
          "resposta": "Antes, US$ 0.5526; depois, US$ 0.5009; economia na conta inteira de 9,4%. Mesmo cortando 65% da saída, a conta cai menos de um décimo, porque a saída era só 14% dela. É quase o \"perto de 10% no melhor caso\" que a JetBrains mediu. Use os botões: o mesmo corte na entrada nova economiza 0,4%, porque ela é minúscula; na leitura do cache, 33,2%, porque é ela que pesa. Quem quer gastar menos num agente mexe no contexto, como a aula 5.3 mostrou, e não no jeito de o modelo falar.",
          "vivo": [
            [
              "Cortar 65% da entrada nova",
              "# A sessão da aula 5.5, com os preços do Sonnet 4.6 (dólares por milhão de tokens)\nentrada = 1200 * 3        # entrada nova\nsaida = 5300 * 15         # saída, inclusive o pensamento\nleitura = 940000 * 0.30   # leitura do cache\ngravacao = 50000 * 3.75   # gravação no cache\nantes = (entrada + saida + leitura + gravacao) / 1000000\n\n# A promessa: cortar 65% dos tokens. Aqui, o corte vale só para a entrada nova\nentrada = entrada * 0.35\ndepois = (entrada + saida + leitura + gravacao) / 1000000\n\nprint(f\"Antes:  US$ {antes:.4f}\")\nprint(f\"Depois: US$ {depois:.4f}\")\nprint(f\"Economia na conta inteira: {(1 - depois / antes) * 100:.1f}%\")",
              "Antes:  US$ 0.5526\nDepois: US$ 0.5503\nEconomia na conta inteira: 0.4%"
            ],
            [
              "Cortar 65% da leitura do cache",
              "# A sessão da aula 5.5, com os preços do Sonnet 4.6 (dólares por milhão de tokens)\nentrada = 1200 * 3        # entrada nova\nsaida = 5300 * 15         # saída, inclusive o pensamento\nleitura = 940000 * 0.30   # leitura do cache\ngravacao = 50000 * 3.75   # gravação no cache\nantes = (entrada + saida + leitura + gravacao) / 1000000\n\n# A promessa: cortar 65% dos tokens. Aqui, o corte vale só para a leitura do cache\nleitura = leitura * 0.35\ndepois = (entrada + saida + leitura + gravacao) / 1000000\n\nprint(f\"Antes:  US$ {antes:.4f}\")\nprint(f\"Depois: US$ {depois:.4f}\")\nprint(f\"Economia na conta inteira: {(1 - depois / antes) * 100:.1f}%\")",
              "Antes:  US$ 0.5526\nDepois: US$ 0.3693\nEconomia na conta inteira: 33.2%"
            ],
            [
              "Voltar ao original",
              "# A sessão da aula 5.5, com os preços do Sonnet 4.6 (dólares por milhão de tokens)\nentrada = 1200 * 3        # entrada nova\nsaida = 5300 * 15         # saída, inclusive o pensamento\nleitura = 940000 * 0.30   # leitura do cache\ngravacao = 50000 * 3.75   # gravação no cache\nantes = (entrada + saida + leitura + gravacao) / 1000000\n\n# A promessa: cortar 65% dos tokens. Aqui, o corte vale só para a saída\nsaida = saida * 0.35\ndepois = (entrada + saida + leitura + gravacao) / 1000000\n\nprint(f\"Antes:  US$ {antes:.4f}\")\nprint(f\"Depois: US$ {depois:.4f}\")\nprint(f\"Economia na conta inteira: {(1 - depois / antes) * 100:.1f}%\")",
              "Antes:  US$ 0.5526\nDepois: US$ 0.5009\nEconomia na conta inteira: 9.4%"
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
          "p": "Um vídeo diz: \"Esta skill tem 1,3 milhão de instalações e corta 65% dos tokens. Comenta SKILL que eu mando o link.\" Você abre o repositório no GitHub: 31 estrelas, criado e atualizado pela última vez no mesmo dia, três meses atrás. Qual é a leitura mais sólida?",
          "o": [
            [
              "1,3 milhão de instalações compensam as poucas estrelas; pode instalar com tranquilidade",
              "Instalação é contador de site, que não diz como conta. Com 31 estrelas e nenhuma atualização, o número não serve de garantia."
            ],
            [
              "As poucas estrelas provam que é golpe; vale denunciar o vídeo e bloquear o perfil",
              "Os números não fecham, mas isso não prova fraude: o contador pode somar instalações automáticas. A conclusão segura é não usar o número como garantia."
            ],
            [
              "Os números não fecham, e quem mede é o próprio anúncio: não decida a instalação por eles",
              "Isso. Instalações contra estrelas e contra a data não batem, e a economia não tem medida independente. Se ainda quiser a skill, leia antes o que ela faz."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou ao Claude se uma skill que \"economiza 65% dos tokens\" vai cortar pela metade o seu gasto com o Claude Code. Ele respondeu: \"Não. Numa sessão de agente, a saída é uma parte pequena da conta; o que pesa é reler o contexto. Um teste independente mediu perto de 10% de economia, no melhor caso.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: a saída pesa pouco, e o teste com agente mediu perto de 10%",
              "Isso. É a conta do Preveja e o resultado do teste da JetBrains. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Está errada: se a skill corta 65% da saída, a conta inteira cai os mesmos 65%",
              "A economia vale só para a fatia da saída. Numa sessão em que a saída é 14% da conta, cortar 65% dela economiza perto de 9%."
            ],
            [
              "Está errada: o artigo acadêmico mediu respostas até 2,4 vezes mais baratas",
              "O artigo mediu outra condição, perguntas de teste com resposta conferível, e não sessões de agente. No Claude Code, vale a medida feita com agente."
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
            "\"Tem 1 milhão de instalações, então é seguro.\"",
            "Instalação é contador de site, e cada site conta de um jeito. Cruze com estrelas, data da última atualização e quem publica, e leia antes de instalar."
          ],
          [
            "\"Se fosse mentira, seria proibido.\"",
            "Publicidade enganosa é proibida pelo Código de Defesa do Consumidor, mas post que se diz opinião e contador de site raramente viram caso. A pergunta continua sendo sua."
          ],
          [
            "\"Senti que fiquei mais rápido, então fiquei.\"",
            "No estudo do METR, os programadores levaram 19% mais tempo e acharam que tinham ganhado 20%. Sensação não é medida."
          ],
          [
            "\"As fontes discordam, então nenhuma vale.\"",
            "Quase sempre cada uma mediu uma condição. Ache a condição de cada uma e veja qual parece com o seu caso."
          ],
          [
            "\"Comentei a palavra e ganhei o material: foi de graça.\"",
            "Você pagou com o seu contato. O material costuma ser a porta de entrada de uma venda."
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
          "p": "Quais são as perguntas antes de acreditar num número sobre IA?",
          "r": [
            "Quem mediu, comparado com quê e em que condição.",
            "Os números fecham entre si?",
            "Quem ganha se eu acreditar?",
            "O que eu perco se for falso?"
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que \"65% de economia\" pode ser verdade e ainda assim enganar?",
          "r": [
            "Pode valer numa condição estreita, como respostas de conversa em prosa.",
            "Num agente, a saída é uma fatia pequena; o que pesa é reler o contexto.",
            "O teste com agente mediu 8,5% da saída e perto de 10% do custo."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Resolução CVM 175, Parte Geral, arts. 58 e 59 (comparação com datas, períodos, fonte e critério; aviso de que rentabilidade passada não garante resultados futuros)",
            "https://conteudo.cvm.gov.br/export/sites/cvm/legislacao/resolucoes/anexos/100/resol175consolid_ParteGeral.pdf",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Código de Defesa do Consumidor, Lei 8.078/1990, arts. 37 e 38 (publicidade enganosa e ônus da prova de quem anuncia)",
            "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Does Speaking to Agents Like Cavemen Really Save 65% of Tokens? We Test, JetBrains, julho de 2026 (8,5% da saída, perto de 10% do custo, qualidade igual)",
            "https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/",
            "comunidade",
            "08/11/2026"
          ],
          [
            "CAVEWOMAN: How Large Language Models Behave Under Linguistic Input and Output Compression, Adeyemi e outros, 2026",
            "https://arxiv.org/abs/2606.24083",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity, METR, 10/07/2025",
            "https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "We are Changing our Developer Productivity Experiment Design, METR, 24/02/2026 (dados do fim de 2025, evidência muito fraca)",
            "https://metr.org/blog/2026-02-24-uplift-update/",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "FTC Announces Crackdown on Deceptive AI Claims and Schemes, FTC, 25/09/2024 (Operation AI Comply)",
            "https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes",
            "oficial",
            "08/11/2026"
          ],
          [
            "Claude Code leak used to push infostealer malware on GitHub, BleepingComputer",
            "https://www.bleepingcomputer.com/news/security/claude-code-leak-used-to-push-infostealer-malware-on-github/",
            "imprensa",
            "08/11/2026"
          ],
          [
            "reddit-automation no skills.sh (contador de instalações; 1,3 milhão em 08/11/2026)",
            "https://www.skills.sh/flowkit-labs/skills/reddit-automation",
            "comunidade",
            "08/11/2026"
          ],
          [
            "Repositório flowkit-labs/skills no GitHub (31 estrelas; criado e atualizado em 12/08/2026)",
            "https://github.com/flowkit-labs/skills",
            "comunidade",
            "08/11/2026"
          ],
          [
            "Repositório gsd-build/get-shit-done no GitHub (arquivado; 64 mil estrelas)",
            "https://github.com/gsd-build/get-shit-done",
            "comunidade",
            "08/11/2026"
          ],
          [
            "Estilos de saída, Claude Code (o estilo Concise)",
            "https://code.claude.com/docs/pt/output-styles",
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
          "Um número sobre IA só vale quando se sabe quem mediu, em que condição e comparado com quê",
          "Isso. É o que a CVM exige de um fundo, e é o que você pergunta sozinho diante de estrelas, economia, velocidade e renda."
        ],
        [
          "Números grandes nas redes sobre IA quase sempre são inventados, e o melhor é ignorar todos",
          "Muitos são verdadeiros numa condição estreita, e dicas boas circulam junto. Ignorar tudo joga fora o útil; o certo é perguntar."
        ],
        [
          "Quanto mais estrelas e instalações uma skill tem, mais segura e testada ela costuma ser",
          "Estrelas e instalações medem atenção, e podem nem fechar entre si. Segurança se confere lendo o que a skill faz."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Uma skill promete \"65% de economia\". Qual pergunta vem primeiro?",
        "o": [
          [
            "Quantas estrelas ela tem no GitHub?",
            "Estrelas medem atenção, e não dizem nada sobre a economia prometida."
          ],
          [
            "65% de qual parte da conta, e em que tarefa?",
            "Isso. Num agente, a saída é uma fatia pequena: 65% dela pode virar menos de 10% da conta."
          ],
          [
            "Quem mais já comentou pedindo o link?",
            "Comentários medem engajamento e captam contatos; não medem a economia."
          ]
        ],
        "c": 1
      },
      {
        "p": "No estudo do METR de 2025, o que aconteceu com os programadores que usaram IA?",
        "o": [
          [
            "Ficaram 19% mais lentos, achando que estavam 20% mais rápidos",
            "Isso. A sensação de ganho foi o oposto da medida."
          ],
          [
            "Ficaram dez vezes mais rápidos, como os vídeos costumam prometer",
            "Nenhuma medida séria chegou perto disso. O estudo de 2025 mediu o contrário: mais tempo."
          ],
          [
            "Ficaram 24% mais rápidos, exatamente como esperavam antes",
            "Os 24% eram a expectativa antes do estudo. A medida deu 19% mais tempo."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Como sei se um número sobre IA é confiável?",
        "Faça as perguntas que a CVM faz por um investidor: quem mediu, em que condição, comparado com quê. Veja se os números fecham entre si, quem ganha se você acreditar e o que você perde se for falso."
      ],
      [
        "Instalações não provam que a skill funciona?",
        "Não. O contador é do site, e cada site conta de um jeito. Cruze com as estrelas, a data da última atualização e quem publica, e leia o que a skill faz antes de instalar."
      ],
      [
        "A skill caveman economiza ou não?",
        "Economiza pouco num agente. O teste da JetBrains, em 82 tarefas no Claude Code, mediu 8,5% dos tokens de saída e perto de 10% do custo, no melhor caso, sem perda de qualidade. Os 65% valem para respostas de conversa em prosa."
      ]
    ]
  },
  "5-7": {
    "tempo": 26,
    "video": "a5-7",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O Claude errou, você respondeu \"está errado, tenta de novo\", e a segunda resposta veio errada de outro jeito, ou igual. Esta aula ensina a perguntar primeiro por que ele errou, porque cada uma das quatro causas tem um conserto diferente, e repetir o pedido não conserta nenhuma.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quando uma resposta vem errada, o reflexo é pedir de novo, talvez com um \"presta atenção\". Às vezes funciona, porque cada resposta é escrita na hora, com uma parte de sorteio, como a aula 5.1 mostrou. Mas, se a causa continua lá, a segunda tentativa erra pelo mesmo motivo, e a terceira só engorda a conversa, como a aula 5.3 avisou. O que resolve é descobrir o que faltou e consertar exatamente isso."
      ],
      [
        "p",
        "A Academy da Anthropic, no curso sobre capacidades e limites da IA, descreve quatro propriedades de todo {{modelo}} de linguagem e recomenda, diante de uma resposta inesperada, dizer qual delas está em jogo e aplicar um conserto dirigido, em vez de só tentar de novo. Esta aula transforma essas quatro propriedades em quatro causas de erro, cada uma com um sinal que você reconhece e um conserto que você aplica em segundos."
      ],
      [
        "p",
        "Há também uma quinta armadilha, que se disfarça de acerto: a {{bajulacao|bajulação}}, quando o Claude concorda com você porque você sugeriu a resposta. Ela é perigosa justamente porque não parece erro. Você termina a conversa mais confiante, e errado."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao especialista da sala fechada, das aulas anteriores. Quando ele erra, é por um de quatro motivos. Primeiro, ele nunca leu sobre o assunto: a biblioteca fechou antes, ou o dado é seu e nunca passou pela janela. Segundo, a página estava na pasta, mas a pasta engordou tanto que ela ficou soterrada, ou foi trocada por um resumo que não a guardou. Terceiro, o bilhete que você passou pela janela dizia uma coisa e você queria outra: ele fez bem feito o que estava escrito. Quarto, ele não sabia e, no hábito da prova, escreveu algo com toda a cara de verdade. E existe o vício de quem quer agradar o cliente: se você passa o bilhete dizendo \"acho que é X, né?\", ele tende a concordar."
      ],
      [
        "quebra",
        "Um especialista de verdade sabe por que errou e pode contar. O modelo não sabe com segurança: a explicação que ele dá do próprio erro é mais um texto escrito na hora, que pode não bater com o que aconteceu por dentro. E as causas se misturam, o que a Academy chama de propriedades que colidem; uma conversa longa, por exemplo, enfraquece uma instrução dada no começo, como a aula 5.3 mostrou. Por isso o diagnóstico é seu, a partir dos sinais, e não uma confissão dele."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "As quatro causas"
      ],
      [
        "p",
        "A tabela junta as quatro propriedades da Academy, com o nome em inglês que ela usa, ao sinal típico de cada causa e ao conserto:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Causa",
            "Propriedade (Academy)",
            "Sinal típico",
            "Conserto"
          ],
          "linhas": [
            [
              "Faltou conhecimento",
              "Knowledge",
              "Erra o que é recente, raro ou seu, e o que ele nunca viu",
              "Traga a fonte"
            ],
            [
              "A memória de trabalho falhou",
              "Working memory",
              "Já tinha feito certo e parou; esquece uma regra do começo",
              "Encurte ou abra outra conversa"
            ],
            [
              "A instrução não conduziu",
              "Steerability",
              "Bem feito, mas não o que você queria; erra igual a cada tentativa",
              "Reescreva o pedido e dê um exemplo"
            ],
            [
              "Saiu algo plausível e falso",
              "Next token prediction",
              "Número, citação ou nome exato, com cara perfeita, sem fonte",
              "Exija verificação"
            ]
          ]
        }
      ],
      [
        "h3",
        "Faltou conhecimento: traga a fonte"
      ],
      [
        "p",
        "O modelo sabe o que estava no treino, até a {{data-de-corte|data de corte}}, e o que está no {{contexto}}. O que não está em nenhum dos dois, ele não tem como saber. Exemplos: a taxa Selic desta semana, um recurso do {{claude-code|Claude Code}} lançado no mês passado, a planilha de cobranças que só existe no seu PC. O sinal é o erro sobre fato recente, raro ou seu."
      ],
      [
        "p",
        "O conserto é pôr a informação na mesa: colar o documento, mandar o Claude Code ler o arquivo, ligar a {{busca-na-web|busca na web}}. Reescrever o pedido não ajuda, porque o problema não é o pedido. Também não adianta trocar de modelo: o mais capaz também não leu a sua planilha."
      ],
      [
        "h3",
        "A memória de trabalho falhou: encurte"
      ],
      [
        "p",
        "A {{janela-de-contexto|janela de contexto}} é a memória de trabalho do modelo, nas palavras do glossário da Anthropic. Ela é grande, mas não é atenção infinita: a aula 5.3 mostrou que, numa conversa longa, o que importa disputa espaço com todo o resto, e que uma regra dada só na conversa pode sumir numa {{compactacao|compactação}}. O sinal é o erro de quem já sabia: ele seguia a regra de formato e parou, voltou a usar um nome que você corrigiu, misturou o assunto antigo com o novo."
      ],
      [
        "p",
        "O conserto é encurtar a mesa: {{compact|/compact}} dizendo o que manter, ou um bilhete e {{clear|/clear}}, ou uma conversa nova. Regra que precisa valer sempre vai no {{claude-md|CLAUDE.md}}, que volta em toda conversa. Repetir a regra no fim de uma conversa enorme ajuda pouco e engorda a conversa."
      ],
      [
        "h3",
        "A instrução não conduziu: reescreva e mostre"
      ],
      [
        "p",
        "A Academy descreve o modelo como bem dirigível, mas avisa que ele segue o padrão do que você escreveu, e não a intenção que ficou na sua cabeça. \"Faça um resumo do contrato\" pode virar três páginas quando você queria cinco linhas; \"deixe a planilha melhor\" pode mudar as cores quando você queria fórmulas certas. O sinal é a resposta bem feita, mas não a que você queria, e errada do mesmo jeito a cada tentativa, porque o pedido continua o mesmo."
      ],
      [
        "p",
        "O conserto é reescrever o pedido: o que você quer, para quê, em que formato, e como saber que ficou pronto. Quando o formato importa, um exemplo vale mais que um parágrafo de explicação: \"faça como este modelo de cinco linhas\". O módulo 6 é inteiro sobre isso."
      ],
      [
        "h3",
        "Saiu algo plausível e falso: exija verificação"
      ],
      [
        "p",
        "É a {{alucinacao|alucinação}} da aula 5.2: o modelo escreve o texto mais provável, e às vezes o mais provável é um número inventado, uma citação que não existe ou o nome de uma opção de {{programa}} que nunca existiu. O sinal é um detalhe exato e conferível, com formato perfeito e sem fonte, justamente nas zonas de risco: números, citações, leis, nomes técnicos."
      ],
      [
        "p",
        "O conserto não é pedir de novo, porque a segunda resposta pode trazer outro número inventado. É exigir verificação: pedir a fonte e o trecho exato, mandar o Claude Code {{rodar}} a conta em vez de fazê-la de cabeça, procurar a citação no arquivo, testar o {{comando}}. Quando o assunto pesa, confira você mesmo, como a aula 5.2 mostrou."
      ],
      [
        "h3",
        "As quatro perguntas, na ordem"
      ],
      [
        "p",
        "Na hora do erro, faça quatro perguntas, da mais barata para a mais cara de consertar:"
      ],
      [
        "lista",
        [
          "**Ele tinha a informação?** Se ela não estava no treino nem na mesa, faltou conhecimento.",
          "**A informação ainda estava visível?** Se estava, mas a conversa é longa ou foi compactada, foi a memória de trabalho.",
          "**Eu disse com clareza o que queria?** Se o pedido admite outra leitura, a instrução não conduziu.",
          "**Tudo isso estava certo, e ainda saiu errado?** Então é algo plausível e falso: exija verificação."
        ]
      ],
      [
        "p",
        "Um caso do começo ao fim. Você pediu um resumo do regulamento do condomínio, que estava na pasta, e a resposta disse que a multa por atraso é de 10%. O regulamento diz 2%. Primeira pergunta: ele tinha a informação? Tinha, o arquivo estava ali. Segunda: estava visível? A conversa tinha só três mensagens. Terceira: o pedido era claro? Você pediu a multa, com todas as letras. Sobra a quarta: saiu um número plausível e falso. O conserto é pedir o trecho exato do artigo 3º e conferir no arquivo. Agora mude um detalhe: a mesma pergunta, numa conversa de 400 mil {{token|tokens}}, em que o regulamento foi lido de manhã e a conversa já foi compactada duas vezes. Aí a segunda pergunta muda de resposta: o mais provável é que o arquivo não esteja mais na mesa. O conserto é outro: conversa nova e \"leia o regulamento.txt de novo\". O mesmo sintoma pode ter causas diferentes, e são as perguntas que separam uma da outra."
      ],
      [
        "h3",
        "A quinta armadilha: a bajulação"
      ],
      [
        "p",
        "Bajulação é a tendência de a IA concordar com o que você sugeriu, mesmo quando você está errado. Ela nasce no {{pos-treino|pós-treino}}, que a aula 5.1 apresentou: pessoas comparavam respostas e escolhiam as melhores, e gente tende a preferir quem concorda. Um estudo da Anthropic de 2023 testou cinco assistentes da época e encontrou a bajulação em todos; viu também que pessoas, e os modelos treinados para imitar a preferência delas, às vezes preferiam uma resposta bajuladora bem escrita a uma resposta correta. A conclusão do estudo é que a bajulação é um comportamento geral desses assistentes."
      ],
      [
        "p",
        "Os sinais: você sugeriu a resposta (\"o erro é na fórmula, né?\") e ele concordou na hora; você perguntou \"tem certeza?\" e ele trocou uma resposta que estava certa; você mostrou uma ideia e só recebeu elogios. O conserto é não entregar a sua aposta: pergunte de forma neutra (\"onde está o erro?\"), peça para ele apontar o que pode estar errado na sua ideia, e peça a fonte em vez de confirmação. Para conferir uma conclusão importante, abra uma conversa nova e faça a pergunta sem dizer o que você acha."
      ],
      [
        "h3",
        "Quando não diagnosticar"
      ],
      [
        "p",
        "Num rascunho, numa lista de ideias ou num texto que você vai reescrever, pedir de novo é mais barato que diagnosticar, e a variação até ajuda. O diagnóstico vale quando o erro se repete, quando a resposta vai para um documento ou para um cliente, e quando você já corrigiu duas vezes sem sucesso."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Posso perguntar ao Claude por que ele errou?** Pode, e às vezes a resposta ajuda, mas trate como hipótese: a explicação que o modelo dá do próprio raciocínio pode não bater com o que ele fez, como a pesquisa citada na aula 5.1 mostrou. Confira pelos sinais.",
          "**E se forem duas causas juntas?** Acontece muito. Conserte primeiro a mais barata: ponha a fonte na mesa e encurte a conversa antes de reescrever tudo.",
          "**Trocar de modelo resolve?** Raramente é o primeiro conserto. Um modelo mais capaz não sabe o que não leu, também sofre com conversa longa e também segue o que você escreveu. A aula 5.4 mostrou que subir o {{esforco|esforço}} costuma vir antes.",
          "**Isso vale no {{app}} do celular?** Vale igual. A diferença é o conserto da memória: no app, o equivalente ao /clear é abrir uma conversa nova."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: contar os erros por tipo",
          "blocos": [
            [
              "p",
              "Quem constrói {{agente|agentes}} usa a mesma ideia em escala, com o nome de análise de erros: juntar as falhas de muitos casos, separar por tipo e atacar primeiro o tipo mais comum. O curso Agentic AI, da DeepLearning.AI, tem uma aula sobre isso. Para você, a versão de bolso é anotar, durante uma semana, a causa de cada erro que o Claude cometeu. Se a maioria for falta de conhecimento, o seu hábito a mudar é trazer a fonte; se for instrução, é escrever pedidos com exemplo."
            ],
            [
              "p",
              "No curso da Academy, a parte que trata das causas misturadas se chama \"When Properties Collide\", quando as propriedades colidem, e ensina a dar nome a cada propriedade em jogo antes de consertar. Um caso que você já conhece, da aula 5.3: numa conversa longa, a memória de trabalho enche, e a instrução dada no começo perde força. É por isso que a regra fixa vai no CLAUDE.md, e não numa mensagem de três horas atrás."
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
          "pergunta": "Você suspeita que a fórmula de juros da sua planilha está errada, mas não tem certeza. Compare dois pedidos. Pedido A: \"A fórmula da coluna D está errada, né? Acho que deveria ser juros simples.\" Pedido B: \"Confira a fórmula da coluna D. Ela calcula juros compostos de 1% ao mês? Mostre a conta de uma linha.\" O que você acha que acontece com cada um?",
          "resposta": "O pedido A empurra para o sim: você entregou a sua aposta, e a tendência à bajulação faz o Claude concordar que está errada e \"corrigir\" para juros simples, mesmo que a fórmula estivesse certa. O pedido B é neutro, diz o que a fórmula deveria fazer e pede uma verificação concreta, a conta de uma linha, que você confere. Ele também resolve outra causa possível: se o problema fosse instrução vaga, o B já diz o critério. Não é garantia de acerto, mas troca a confirmação por uma prova."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você trabalha há três horas com o Claude Code numa planilha. De manhã, pediu que ele sempre arredondasse para duas casas, e ele obedecia. Agora, depois de duas compactações automáticas, os números voltaram com quatro casas. Qual é a causa mais provável, e o conserto?",
          "o": [
            [
              "Faltou conhecimento: traga um manual de arredondamento para o contexto",
              "Ele sabia arredondar e fez certo por horas. Não falta conhecimento; falta a regra na mesa."
            ],
            [
              "Memória de trabalho: a regra sumiu; ponha no CLAUDE.md ou recomece",
              "Isso. Regra dada só na conversa pode sumir na compactação. No CLAUDE.md, ela volta em toda conversa."
            ],
            [
              "Algo plausível e falso: peça a fonte de cada número com quatro casas",
              "Os números podem até estar certos; o que mudou foi o formato. O sinal é de quem já sabia e parou."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"O Claude errou o valor da multa do contrato que eu colei há duas mensagens. Deve ser falta de memória, porque a conversa já está longa, né?\" O Claude respondeu: \"Exatamente, é falta de memória. Conversas longas fazem o modelo esquecer. Abra uma conversa nova e cole o contrato de novo.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: conversa longa faz o modelo esquecer, e conversa nova resolve o problema",
              "O contrato foi colado há duas mensagens: ainda está bem visível. A resposta só repetiu a sua aposta."
            ],
            [
              "Está errada: ele só confirmou a sua aposta; com o contrato à vista, é plausível e falso",
              "Isso. Foi bajulação: você entregou o diagnóstico e ele confirmou. Peça o trecho exato da multa e confira."
            ],
            [
              "Está errada: a causa é falta de conhecimento, porque contratos não estão nos dados do treino",
              "O contrato estava na mesa, colado na conversa. Não falta informação; o valor saiu errado mesmo assim."
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
            "\"Errou, então peço de novo até acertar.\"",
            "Se a causa continua, a nova tentativa erra pelo mesmo motivo. Descubra qual das quatro causas é e conserte exatamente ela."
          ],
          [
            "\"Ele concordou comigo, então eu estava certo.\"",
            "Concordar pode ser bajulação, principalmente se você sugeriu a resposta. Pergunte de forma neutra e peça a fonte."
          ],
          [
            "\"Vou trocar para um modelo mais caro.\"",
            "Nenhum modelo sabe o que não leu nem adivinha a intenção que você não escreveu. Traga a fonte e reescreva o pedido antes."
          ],
          [
            "\"Ele explicou por que errou, então agora sei a causa.\"",
            "A explicação do modelo é mais um texto escrito na hora. Use como hipótese e confira pelos sinais."
          ],
          [
            "\"Repito a regra no fim da conversa e pronto.\"",
            "Numa conversa longa, a regra disputa atenção e pode sumir na próxima compactação. Regra fixa vai no CLAUDE.md."
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
          "p": "Quais são as quatro causas de erro, cada uma com o seu conserto?",
          "r": [
            "Faltou conhecimento: traga a fonte.",
            "A memória de trabalho falhou: encurte ou abra outra conversa.",
            "A instrução não conduziu: reescreva e dê um exemplo.",
            "Saiu algo plausível e falso: exija verificação."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que é a bajulação, e como evitar?",
          "r": [
            "A IA tende a concordar com o que você sugeriu, mesmo que esteja errado.",
            "Não entregue a sua aposta: pergunte de forma neutra.",
            "Peça a fonte em vez de confirmação, ou repita a pergunta numa conversa nova."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "The 4 Properties of AI, Claude Academy (7 minutos, em inglês: next token prediction, knowledge, working memory, steerability)",
            "https://academy.claude.com/tutorials/the-4-properties-of-ai",
            "oficial",
            "08/11/2026"
          ],
          [
            "AI capabilities and limitations, Claude Academy (curso de 13 aulas, em inglês; parte \"When Properties Collide\")",
            "https://academy.claude.com/courses/ai-capabilities-and-limitations",
            "oficial",
            "08/11/2026"
          ],
          [
            "Towards Understanding Sycophancy in Language Models, Sharma e outros, Anthropic, 2023",
            "https://arxiv.org/abs/2310.13548",
            "acadêmico",
            "08/11/2026"
          ],
          [
            "Glossário, Claude Platform (janela de contexto como memória de trabalho; pré-treino; RLHF)",
            "https://platform.claude.com/docs/pt-BR/about-claude/glossary",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Reduzir alucinações, Claude Platform (permitir \"não sei\", citar o trecho, verificar)",
            "https://platform.claude.com/docs/pt-BR/test-and-evaluate/strengthen-guardrails/reduce-hallucinations",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Explore a janela de contexto, Claude Code (o que sobrevive à compactação)",
            "https://code.claude.com/docs/pt/context-window",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Agentic AI, DeepLearning.AI (aula \"Error analysis and prioritizing next steps\"; vídeos abertos, certificado pago)",
            "https://www.deeplearning.ai/courses/agentic-ai",
            "comunidade",
            "08/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Quando a IA erra, troque para um modelo mais capaz e repita o mesmo pedido",
          "Modelo mais capaz não sabe o que não leu nem adivinha o que você não escreveu. E repetir mantém a causa."
        ],
        [
          "Quando a IA erra, pergunte a ela por que errou e siga a explicação que ela der",
          "A explicação do modelo é mais um texto, que pode não bater com o que aconteceu. O diagnóstico é seu, pelos sinais."
        ],
        [
          "Diagnostique a causa, conserte só ela, e desconfie quando a IA só concorda com você",
          "Isso. Quatro causas, quatro consertos, e a bajulação como armadilha que se disfarça de acerto."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "O Claude não soube a decisão do Copom de ontem e deu um número antigo. Qual é o conserto?",
        "o": [
          [
            "Trazer a fonte: colar a notícia ou ligar a busca",
            "Isso. Faltou conhecimento: o fato é posterior à data de corte, e só a fonte na mesa resolve."
          ],
          [
            "Reescrever o pedido com mais detalhes sobre o formato",
            "O pedido não é o problema: nenhum formato faz o modelo saber um fato que ele nunca leu."
          ],
          [
            "Abrir uma conversa nova e perguntar de novo",
            "Conversa nova resolve memória de trabalho. Aqui, sem fonte, ele vai errar de novo do mesmo jeito."
          ]
        ],
        "c": 0
      },
      {
        "p": "Você escreveu \"esta fórmula está errada, né?\" e o Claude concordou na hora. Que risco isso tem?",
        "o": [
          [
            "Nenhum, porque ele conferiu a fórmula antes de responder",
            "Nada garante que ele conferiu. Concordar na hora com a sua sugestão é o sinal clássico da bajulação."
          ],
          [
            "De ele só ter concordado com a sua sugestão",
            "Isso. Pergunte de forma neutra, como \"a fórmula calcula juros compostos de 1%?\", e peça a conta de uma linha."
          ],
          [
            "De a memória de trabalho ter apagado a fórmula",
            "A fórmula estava na mesa. O risco aqui está na pergunta, que empurrou a resposta para o sim."
          ]
        ],
        "c": 1
      }
    ],
    "tutor": [
      [
        "Como sei por que o Claude errou?",
        "Faça quatro perguntas, na ordem: ele tinha a informação? Ela ainda estava visível? Eu disse com clareza o que queria? Se tudo isso estava certo, é algo plausível e falso, e o conserto é exigir verificação."
      ],
      [
        "O que é bajulação?",
        "É a tendência de a IA concordar com o que você sugeriu, mesmo quando você está errado. Vem do treino, porque pessoas preferem respostas que concordam com elas. Para evitar, pergunte de forma neutra e peça a fonte em vez de confirmação."
      ],
      [
        "Pedir de novo não resolve?",
        "Às vezes, num rascunho. Mas, se a causa continua, a nova resposta erra pelo mesmo motivo. Descubra a causa e conserte só ela: traga a fonte, encurte a conversa, reescreva o pedido ou exija verificação."
      ]
    ]
  }
};
