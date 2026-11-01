// Módulo 8 — Skills. Formato dos blocos: ESPEC-site.md, seção 4.
export const AULAS = {
  '8-1': {
    tempo: 45,
    video: 'c3-skill-mcp',
    videoTipo: 'conversa',
    abertura: 'Skill e MCP aparecem juntos em quase todo tutorial, e parecem a mesma coisa. Não são: um ensina, o outro conecta. Você tem cerca de trinta skills instaladas e vários conectores ligados, e esta aula explica o que cada um deles faz quando você pede algo.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Sem essa distinção, você instala a coisa errada e não entende por que nada acontece. Precisa que o Claude faça uma tarefa **do seu jeito**, sempre igual? É {{skill}}. Precisa que ele **alcance** um sistema de fora, como a agenda, o e-mail ou um banco de dados? É {{mcp|MCP}}. Precisa dos dois? Então são os dois, e eles se completam.'],
      ['p', 'A distinção também é de segurança. Uma skill de um estranho traz instruções que o Claude vai seguir, e às vezes programas que ele vai {{rodar}}. Um {{servidor}} MCP de um estranho ganha acesso real aos seus dados. Como o seu Claude Code não pede confirmação, saber o que cada um pode fazer é o que separa "instalei uma coisa útil" de "dei a chave de casa para alguém".'],
      ['p', 'E tem o custo. Cada skill instalada e cada servidor ligado ocupam um pouco do {{contexto}} em toda conversa, mesmo quando não são usados. Com muitos, o Claude Code começa a esconder descrições, e uma skill que você instalou pode simplesmente nunca disparar. Entender o mecanismo é o que permite arrumar isso, e a aula 8.8 vai fundo nesse problema.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'Pense no Claude como um funcionário novo: inteligente, mas sem conhecer o seu jeito de trabalhar nem ter as chaves de nada. A **skill** é o manual que você entrega a ele: "quando pedirem resumo de aula, faça assim, com um exercício no meio". O **MCP** é a tomada que liga esse funcionário à agenda, ao e-mail e ao Obsidian, que ele não alcançaria sozinho. Manual sem tomada: ele sabe o que fazer e não alcança. Tomada sem manual: ele alcança e faz do jeito dele.'],
      ['quebra', 'Um manual comum é lido inteiro, no primeiro dia. A skill é aberta só quando a tarefa pede, para não ocupar espaço no contexto: o Claude lê de início apenas o nome e uma frase de cada uma. E uma tomada só leva corrente: o servidor MCP pode executar ações de verdade, como enviar um e-mail. A skill também pode agir, quando traz {{script|scripts}} ou libera ferramentas. Nenhum dos dois é "só texto".'],
      ['h2', 'Como funciona'],
      ['h3', 'Uma skill por dentro'],
      ['p', 'Uma skill é uma pasta com um arquivo chamado `SKILL.md`. O topo do arquivo, entre duas linhas de traços, traz o **nome** e a **descrição**. O resto são as instruções, em texto comum, do jeito que você escreveria para uma pessoa. A pasta pode ter mais coisas: arquivos de referência que o Claude só abre se precisar, modelos de documento e scripts, pequenos programas que a skill manda rodar. As suas skills pessoais ficam em `.claude\\skills\\`, dentro da sua pasta de usuário, uma pasta por skill. Skills de um projeto só ficam em `.claude\\skills\\` dentro da pasta daquele projeto.'],
      ['p', 'Você vai ler uma agora, no exercício abaixo. Repare na descrição: ela diz o que a skill faz **e** quando usar. Essa frase é a parte mais importante do arquivo, e a próxima seção explica por quê.'],
      ['h3', 'Como o Claude decide abrir uma skill'],
      ['p', 'No começo de cada conversa, o Claude Code não lê as suas trinta skills inteiras. Ele carrega só o nome e a descrição de cada uma, uma lista curta. Quando você faz um pedido, ele compara o pedido com essa lista. Se uma descrição combinar, ele abre o `SKILL.md` daquela skill e segue as instruções. Se nenhuma combinar, nenhuma é aberta, e ele responde do jeito padrão. O nome disso é divulgação progressiva: mostrar pouco no começo, e o resto só quando precisa.'],
      ['p', 'É por isso que a descrição decide tudo. "Ajuda com textos" não combina com quase nada. "Escreve resumo de aula em HTML; use quando o usuário pedir resumo, síntese ou revisão de uma aula" combina exatamente com o jeito como você pede. A aula 8.4 é inteira sobre a skill que não dispara, e quase sempre a causa está nessa frase.'],
      ['p', 'Há um limite que poucos conhecem. Essa lista de nomes e descrições ocupa contexto, e o Claude Code reserva para ela só uma fatia pequena, em torno de 1% da janela. Quando as skills instaladas passam disso, ele começa a **cortar descrições**, começando pelas menos usadas, e uma skill sem descrição na lista só dispara se você chamar pelo nome. Com trinta skills, você provavelmente já está nesse caso. O comando `/skill-doctor` mostra quanto cada skill custa e se ela está sendo usada; ele não funciona pelo Remote Control, então é tarefa para quando você estiver no PC. A aula 8.8 resolve isso com calma.'],
      ['h3', 'O que uma skill pode fazer além de ensinar'],
      ['p', 'Aqui está a parte que muda como você instala. Uma skill pode trazer scripts e mandar o Claude rodá-los. Pode trazer um {{hook}}, um programa que roda sozinho em certos momentos da conversa. Pode liberar ferramentas. Na pesquisa que preparou este curso, uma skill popular da comunidade instalava um programa no PC inteiro sem avisar, outra injetava um texto de instruções em toda conversa por meio de um hook, e uma terceira, com mais de um milhão de instalações no diretório, apontava o comando de instalação para outro dono e terminava com um anúncio.'],
      ['p', 'Por isso a regra: **instalar uma skill é instalar um programa**. Antes, leia o `SKILL.md` e abra a pasta de scripts; se não entender, peça ao Claude "resuma o que cada arquivo desta skill faz e o que ela executa". E "oficial" não quer dizer "atual": uma pasta de skill pode ficar meses sem mudança dentro de um repositório que recebe commits todo dia. Olhe a data da pasta, não a do repositório. A aula 8.6 transforma isso em um roteiro de avaliação.'],
      ['h3', 'O MCP por dentro: cliente, servidor e o que ele oferece'],
      ['p', 'MCP significa Model Context Protocol, um padrão aberto, criado pela Anthropic, para ligar uma IA a ferramentas e dados de fora. A documentação oficial compara com uma porta USB-C: um encaixe único, em que qualquer aplicativo compatível liga em qualquer ferramenta compatível, sem adaptador feito à mão para cada par. O aplicativo que você usa, como o Claude Code ou o app do Claude, é o **cliente**: ele pede. O **servidor** MCP é o programa que atende, e pode rodar na internet, na máquina de uma empresa, ou no seu próprio PC.'],
      ['p', 'Um servidor oferece três tipos de coisa. **Ferramentas**: ações que a IA pode pedir, como "criar evento" ou "ler e-mail". **Recursos**: dados que ela pode ler, como a lista de notas de um cofre. **Prompts**: pedidos prontos, parametrizados, que o servidor sugere. Quase todo tutorial só fala das ferramentas, mas os outros dois existem e aparecem na aula 9.1.'],
      ['p', 'Os {{conector|conectores}} do claude.ai, como Gmail, Agenda e Drive, são servidores MCP geridos pela Anthropic: você liga nas configurações, faz o login no serviço, e pronto. Um servidor local, que roda no seu PC, você adiciona pelo comando `claude mcp add` e acompanha pelo comando `/mcp`, como a aula 9.2 mostra. Para achar servidores, comece pelo diretório de conectores do claude.ai e pelo Registro oficial do MCP; muitos servidores "de referência" antigos foram arquivados, e estar listado no registro **não prova** que o servidor é seguro.'],
      ['h3', 'Skill e MCP juntos'],
      ['p', 'Um exemplo completo. Você quer que o Claude crie eventos na sua agenda sempre com um lembrete dois dias antes. O conector da Agenda, que é MCP, dá a ele a ferramenta "criar evento". Mas ele não sabe da sua regra dos dois dias, e vai esquecer na terceira vez. Uma skill chamada `agendar`, com a descrição "cria eventos na agenda; use quando o usuário pedir para marcar, agendar ou lembrar de algo", e com a regra do lembrete nas instruções, resolve: a skill dispara, lê a regra, e usa a ferramenta do MCP para criar o evento do seu jeito. O projeto final deste curso é feito dessas duplas.'],
      ['h3', 'Custo e contexto'],
      ['p', 'Cada skill custa a sua descrição em toda conversa, e o corpo inteiro quando dispara. Cada servidor MCP costumava custar a definição de todas as suas ferramentas logo no início, e a frase "MCP come o seu contexto" vinha daí. Hoje o Claude Code adia essas definições por padrão: carrega só o nome dos servidores e busca a definição da ferramenta quando ela é chamada. O comando `/context` mostra, em uma tela, quanto skills, servidores e conversa estão ocupando. A regra prática continua: ligue só o que usa, e desligue o resto.'],
      ['h3', 'Quando não usar nenhum dos dois'],
      ['p', 'Tarefa de uma vez só não precisa de skill: peça direto. Regra que vale em **toda** conversa, como "responda em português" ou "nunca instale sem avisar", não é skill: é `CLAUDE.md`, o arquivo de regras que a aula 7.5 ensina, lido sempre. Skill é para o que se repete e tem um jeito certo de fazer. E MCP só quando o Claude precisa alcançar algo que não está no seu PC nem na conversa; para ler uma pasta de arquivos, ele já alcança sozinho.'],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Preciso instalar algo para ter uma skill?** Não. É uma pasta com um arquivo de texto. Criar, você pode pedir ao Claude; apagar, é apagar a pasta.',
        '**E para ter um MCP?** Um conector se liga nas configurações do claude.ai. Um servidor local se adiciona com `claude mcp add`, e a aula 9.2 mostra.',
        '**Custa dinheiro?** Não diretamente. Custa contexto, e contexto é o que faz uma conversa ficar mais cara e mais dispersa. Por isso, poucos e bons.',
        '**Instalei uma skill e me arrependi. E agora?** Apague a pasta dela em `.claude\\skills\\`. Se ela trazia scripts que rodaram, trate como a aula 11.5 ensina.',
        '**Skill é a mesma coisa que plugin?** Não. Um {{plugin}} é um pacote que pode trazer skills, servidores MCP, hooks e comandos de uma vez. A aula 7.7 fala dele, e o cuidado é o mesmo.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: de onde vieram os dois', blocos: [
        ['p', 'O MCP foi publicado pela Anthropic em novembro de 2024, como padrão aberto, e em 2025 passou a ser adotado também por outras empresas de IA. É por isso que um mesmo servidor serve ao Claude, ao Codex e a outros aplicativos: a tomada é a mesma.'],
        ['p', 'As skills chegaram ao Claude Code em 2025 como um formato simples de pasta e arquivo Markdown, justamente para qualquer pessoa conseguir escrever uma sem programar. O formato também foi publicado como padrão aberto, e por isso há skills da comunidade que funcionam em mais de um agente.'],
        ['p', 'Um servidor MCP local conversa com o cliente por texto, pela entrada e saída do programa; um remoto conversa pela internet, com login. É só isso que muda; as três coisas oferecidas são as mesmas.']
      ] }],
      ['h2', 'Preveja antes de ver'],
      ['prever', {
        pergunta: 'Leia esta skill. Em que situação você acha que o Claude vai abrir?',
        codigo: '---\nname: resumo\ndescription: Escreve resumo de aula em HTML, com um exercício no meio. Use quando o usuário pedir resumo, síntese ou revisão de uma aula.\n---\n\n# Passos\n1. Leia o material da aula.\n2. Escreva um resumo em HTML.\n3. Coloque um exercício no meio.',
        linguagem: 'markdown',
        resposta: 'Quando você pedir um resumo, uma síntese ou uma revisão de aula. O Claude lê primeiro só o nome e a descrição, e é a descrição que faz a skill disparar. Repare que ela diz o que a skill faz e quando usar, com as palavras que você usa. Se estivesse escrito "ajuda com textos", ela quase nunca seria aberta.'
      }],
      ['tabela', {
        colunas: ['', 'Skill', 'MCP'],
        linhas: [
          ['Em uma frase', 'Saber como fazer', 'Poder alcançar'],
          ['O que é', 'Pasta com instruções, e às vezes scripts', 'Programa que oferece ferramentas, recursos e prompts'],
          ['Onde fica', '.claude\\skills\\ (pessoal) ou na pasta do projeto', 'Na internet, em uma empresa, ou no seu PC'],
          ['Use quando', 'Repete sempre o mesmo jeito de fazer', 'Precisa de um sistema de fora'],
          ['Principal risco', 'Instruções e scripts de um estranho', 'Acesso real a dados e ações']
        ]
      }],
      ['h2', 'Pare e responda'],
      ['pergunta', {
        p: 'Você quer que o Claude crie eventos na sua agenda, sempre com um lembrete de dois dias antes. Do que você precisa?',
        o: [
          ['Só de uma skill, com a regra do lembrete escrita nas instruções','A skill ensina o lembrete de dois dias, mas sozinha não consegue chegar até a agenda.'],
          ['Só de um MCP, ligado à sua agenda pelo conector do claude.ai','O MCP cria o evento, mas não sabe da sua regra do lembrete, a não ser que você repita a cada pedido.'],
          ['Dos dois: o MCP alcança, e a skill ensina a regra', 'Isso. Eles se completam.']
        ],
        c: 2
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'O Claude disse: "Instalei a skill que você pediu, do GitHub. Como skill é só um arquivo de texto, não há risco nenhum." O que está errado?',
        o: [
          ['Nada: skill é um arquivo Markdown, e Markdown não executa nada', 'A skill pode trazer scripts e hooks que o Claude roda com os seus privilégios. Não é só texto.'],
          ['Skill pode trazer scripts e hooks, então instalar é como instalar um programa', 'Isso. Leia o SKILL.md e a pasta de scripts antes, ou peça um resumo do que cada arquivo executa.'],
          ['O erro é ter instalado do GitHub, porque skill só pode vir do diretório oficial', 'A origem não é o problema em si; a Anthropic publica skills no GitHub. O problema é instalar sem ler.']
        ],
        c: 1
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"Minha skill não funciona."', 'Comece pela descrição: ela precisa ter as palavras que você usa ao pedir. Com muitas skills instaladas, o Claude Code corta descrições, e a skill some da lista: o `/skill-doctor` mostra.'],
        ['"Quanto mais servidores MCP, melhor."', 'Cada um amplia o que pode dar errado e o que a IA alcança. Ligue só o que usa.'],
        ['"Achei uma skill legal e instalei."', 'Skill traz instruções, e às vezes scripts, que o Claude vai seguir. Trate como instalar um programa: leia os arquivos antes, ou peça ao Claude para resumir o que eles fazem.'],
        ['"Está no Registro MCP, então é seguro."', 'O registro é um catálogo, não uma auditoria. Prefira o servidor da própria empresa do serviço, e leia o que ele pede de acesso.']
      ]],
      ['h2', 'Tente lembrar'],
      ['lembrar', {
        p: 'Quando você cria uma skill, e quando procura um MCP?',
        r: [
          'Repete sempre o mesmo jeito de fazer: skill.',
          'Precisa alcançar um sistema de fora: MCP, e muitas vezes já existe um pronto.',
          'Regra para toda conversa não é nenhum dos dois: é CLAUDE.md.'
        ]
      }],
      ['lembrar', {
        p: 'O que o Claude lê de uma skill no começo da conversa, e o que faz uma skill disparar?',
        r: [
          'Só o nome e a descrição de cada skill.',
          'A descrição, quando combina com o pedido, faz ele abrir o SKILL.md inteiro.',
          'Com skills demais, descrições são cortadas e a skill só dispara pelo nome.'
        ]
      }],
      ['h2', 'Laboratório'],
      ['lab', {
        titulo: 'Sua primeira skill, em dez minutos',
        lugar: 'No PC, com o Claude Code',
        tempo: '15 minutos',
        antes: 'Skill funciona no {{claude-code|Claude Code}}. Abra o programa em qualquer pasta. Você vai pedir ao Claude para criar a skill, ler o arquivo que ele escreveu, e ver se ela dispara sozinha em uma conversa nova. A aula 8.3 faz uma skill maior, com scripts; aqui é só para ver o mecanismo. Se o Claude pedir permissão para criar arquivos, aceite.',
        passos: [
          { faz: 'Peça para o Claude criar a skill, explicando cada parte:', cola: 'Crie uma skill pessoal chamada revisar-email, que deixa meus e-mails curtos e diretos. Antes de criar, me explique o que você vai escrever na descrição e por quê. No fim, me diga o caminho completo do arquivo.', espera: 'Ele explica a descrição, cria a pasta e mostra um caminho parecido com C:\\Users\\SeuNome\\.claude\\skills\\revisar-email\\SKILL.md.' },
          { faz: 'Abra o SKILL.md no VS Code ou no Bloco de Notas, e leia tudo.', espera: 'No topo, entre traços, estão o nome e a descrição. Abaixo, as instruções. Não há scripts, porque esta skill só ensina.' },
          { faz: 'Digite /clear e cole este pedido, sem citar o nome da skill:', cola: 'Deixe este e-mail curto e direto: Prezado, venho por meio deste informar que, conforme conversamos na reunião de terça-feira, estarei ausente na próxima sexta-feira em razão de um compromisso previamente agendado, motivo pelo qual solicito a gentileza de remarcarmos a apresentação para a semana seguinte, em data e horário de sua conveniência.', espera: 'O Claude avisa que está usando a skill revisar-email e devolve um e-mail de duas ou três linhas.' },
          { faz: 'Se ela não disparou, digite /skills para ver se está na lista, e peça para melhorar a descrição:', cola: 'A skill revisar-email não disparou quando pedi para deixar um e-mail mais curto. Melhore a descrição usando as palavras que eu uso ao pedir.', espera: 'Na segunda tentativa ela costuma disparar. Se ainda não disparar, chame direto com /revisar-email: tarefa simples demais às vezes não dispara mesmo com descrição boa, e isso é assunto da aula 8.4.' }
        ],
        errado: 'se o Claude disser que não encontrou a skill, feche e abra o Claude Code de novo, e confira se a pasta está em .claude\\skills dentro da sua pasta de usuário. Se /skills mostrar a skill sem descrição, você já está no caso das descrições cortadas: a aula 8.8 resolve.'
      }],
      ['fontes', [
        ['Skills, documentação do Claude Code', 'https://code.claude.com/docs/pt/skills', 'oficial', '31/10/2026', 'pt'],
        ['MCP no Claude Code', 'https://code.claude.com/docs/pt/mcp', 'oficial', '31/10/2026', 'pt'],
        ['O que é o MCP', 'https://modelcontextprotocol.io/docs/getting-started/intro', 'oficial', '31/10/2026'],
        ['Registro oficial de servidores MCP (em versão de teste; estar na lista não prova que é seguro)','https://registry.modelcontextprotocol.io/', 'oficial', '31/10/2026'],
        ['Custos e contexto no Claude Code', 'https://code.claude.com/docs/pt/costs', 'oficial', '31/10/2026', 'pt']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['Skill e MCP são dois nomes para quase a mesma ferramenta, e tanto faz qual usar','Parecem, mas fazem trabalhos diferentes: um ensina e o outro conecta.'],
      ['O MCP é o manual que ensina, e a skill é a tomada que conecta', 'É o contrário: a skill é o manual, e o MCP é a tomada.'],
      ['A skill ensina como fazer, e o MCP conecta o Claude a sistemas de fora', 'Isso. E os dois podem trabalhar juntos.']
    ], c: 2 },
    prova: [
      { p: 'O que a skill faz?', o: [
        ['Liga o Claude à sua agenda e ao seu e-mail', 'Quem liga o Claude a sistemas de fora é o MCP.'],
        ['Ensina o seu jeito de fazer uma tarefa', 'Isso. A skill é um manual, aberto quando a tarefa pede.'],
        ['Deixa o modelo mais rápido e mais barato', 'A skill ocupa contexto; não acelera nem barateia o modelo.']
      ], c: 1 },
      { p: 'Como o Claude sabe a hora de abrir uma skill?', o: [
        ['Pelo tamanho do arquivo da skill', 'O tamanho não entra na decisão.'],
        ['Ele abre todas as skills, em toda conversa','Abrir todas gastaria contexto demais; ele lê só nome e descrição.'],
        ['Pela descrição no topo do arquivo', 'Isso. Se a descrição combinar com o pedido, ele abre o resto.']
      ], c: 2 }
    ],
    tutor: [
      ['Onde ficam as minhas skills?', 'As pessoais ficam em .claude\\skills, dentro da sua pasta de usuário, e cada uma tem a sua pasta, com um arquivo SKILL.md. Skills de um projeto só ficam em .claude\\skills, dentro da pasta daquele projeto.'],
      ['Como saber se um MCP é seguro?', 'Veja três coisas: quem publicou, o que ele consegue acessar, e se ele executa algo no seu PC. Prefira o servidor oficial da própria empresa do serviço. Quando tiver dúvida, peça ao Claude para ler o código e resumir o que ele faz, antes de instalar.'],
      ['Qual a diferença entre skill e CLAUDE.md?', 'O CLAUDE.md é lido em toda conversa: serve para regras que valem sempre. A skill é aberta só quando a tarefa combina com a descrição: serve para um jeito de fazer que se repete.']
    ]
  }
};
