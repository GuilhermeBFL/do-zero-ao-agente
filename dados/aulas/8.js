// Módulo 8 — Skills. Formato dos blocos: ESPEC-site.md, seção 4.
export const AULAS = {
  '8-1': {
    tempo: 45,
    video: 'c3-skill-mcp',
    videoTipo: 'conversa',
    abertura: 'Você instalou uma {{skill}} que nunca disparou, ou ligou um {{conector}} e não soube dizer o que ele faz quando você pede algo. Skill e {{mcp|MCP}} aparecem juntos em quase todo tutorial, mas um ensina e o outro conecta, e esta aula mostra a diferença por dentro.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Sem essa distinção, você instala a coisa errada e não entende por que nada acontece. Precisa que o Claude faça uma tarefa **do seu jeito**, sempre igual? É skill. Precisa que ele **alcance** um sistema de fora, como a agenda, o e-mail ou um {{banco-de-dados|banco de dados}}? É MCP. Precisa dos dois? Então são os dois, e eles se completam.'],
      ['p', 'A distinção também é de segurança. Uma skill de um estranho traz instruções que o Claude vai seguir, e às vezes programas que ele vai {{rodar}}. Um {{servidor}} MCP de um estranho ganha acesso real aos seus dados. Num modo que não pede confirmação, ninguém para no meio para perguntar, e saber o que cada um pode fazer é o que separa "instalei uma coisa útil" de "dei a chave de casa para alguém".'],
      ['p', 'E tem o custo. Cada skill instalada e cada servidor ligado ocupam um pouco do {{contexto}} em toda conversa, mesmo quando não são usados. As descrições das skills têm uma cota própria, em torno de 1% da janela de contexto; com skills demais, o {{claude-code|Claude Code}} começa a cortar essas descrições, e uma skill que você instalou pode quase nunca disparar. Os servidores MCP não entram nessa cota. Entender o mecanismo é o que permite arrumar isso, e a aula 8.8 vai fundo nesse problema.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'Pense no Claude como um funcionário novo: inteligente, mas sem conhecer o seu jeito de trabalhar nem ter as chaves de nada. A **skill** é o manual que você entrega a ele: "quando pedirem resumo de aula, faça assim, com um exercício no meio". O **MCP** é a tomada que liga esse funcionário à agenda e ao e-mail, que ele não alcançaria sozinho. Manual sem tomada: ele sabe o que fazer e não alcança. Tomada sem manual: ele alcança e faz do jeito dele.'],
      ['quebra', 'Um manual comum é lido inteiro, no primeiro dia. A skill é aberta só quando a tarefa pede, para não ocupar espaço no contexto: o Claude lê de início apenas o nome e uma frase de cada uma. E uma tomada só leva corrente: o servidor MCP pode executar ações de verdade, como enviar um e-mail. A skill também pode agir, quando traz {{script|scripts}} ou libera ferramentas. Nenhum dos dois é "só texto".'],
      ['h2', 'Como funciona'],
      ['h3', 'Uma skill por dentro'],
      ['p', 'Uma skill é uma pasta com um arquivo chamado `SKILL.md`, escrito em {{markdown|Markdown}}, texto simples com marcações leves. O topo do arquivo, entre duas linhas de traços, traz o **nome** e a **descrição**. O resto são as instruções, em texto comum, do jeito que você escreveria para uma pessoa. A pasta pode ter mais coisas: arquivos de referência que o Claude só abre se precisar, modelos de documento e scripts, pequenos programas que a skill manda rodar. As suas skills pessoais ficam em `.claude\\skills\\`, dentro da sua pasta de usuário, uma pasta por skill. Skills de um projeto só ficam em `.claude\\skills\\` dentro da pasta daquele projeto.'],
      ['p', 'Um exemplo de topo bem escrito: `name: resumo` e, na linha de baixo, `description: Escreve resumo de aula em HTML, com um exercício no meio. Use quando o usuário pedir resumo, síntese ou revisão de uma aula.` Repare que a descrição diz o que a skill faz **e** quando usar. Essa frase é a parte mais importante do arquivo, e a próxima seção explica por quê.'],
      ['h3', 'Como o Claude decide abrir uma skill'],
      ['p', 'No começo de cada conversa, o Claude Code não lê as skills instaladas inteiras. Ele carrega só o nome e a descrição de cada uma, uma lista curta. Quando você faz um pedido, ele compara o pedido com essa lista. Se uma descrição combinar, ele abre o `SKILL.md` daquela skill e segue as instruções. Se nenhuma combinar, nenhuma é aberta, e ele responde do jeito padrão. O nome disso é divulgação progressiva: mostrar pouco no começo, e o resto só quando precisa.'],
      ['p', 'É por isso que a descrição decide tudo. "Ajuda com textos" não combina com quase nada. "Escreve resumo de aula em {{html|HTML}}; use quando o usuário pedir resumo, síntese ou revisão de uma aula" combina exatamente com o jeito como você pede. A aula 8.4 é inteira sobre a skill que não dispara, e quase sempre a causa está nessa frase.'],
      ['p', 'Há um limite que poucos conhecem. Essa lista de nomes e descrições ocupa contexto, e o Claude Code reserva para ela só uma fatia pequena, em torno de 1% da {{janela-de-contexto|janela de contexto}}. Quando as skills instaladas passam disso, ele começa a **cortar descrições**, começando pelas que você menos usa. O nome continua na lista; só a descrição é cortada. E uma skill sem descrição quase só dispara se você chamar pelo nome, digitando `/nome-da-skill` no começo do pedido: sem a descrição, falta justamente o que o Claude usa para casar a skill com o seu pedido. Para conferir o corte, o {{comando}} `/doctor` estima quanto a lista ocupa, e a linha Skills do {{context|/context}} mostra o tamanho que de fato chega ao modelo (descrição pela documentação; não rodado aqui). Para decidir o que desligar, o {{skill-doctor|/skill-doctor}} mostra quanto cada skill custa e se ela está sendo usada (descrição pela documentação; não rodado aqui); ele não funciona pelo {{remote-control|Remote Control}}, então é tarefa para quando você estiver no PC.'],
      ['h3', 'O que uma skill pode fazer além de ensinar'],
      ['p', 'Aqui está a parte que muda como você instala. Uma skill pode trazer scripts e mandar o Claude rodá-los. Pode trazer um {{hook}}, um programa que roda sozinho em certos momentos da conversa. Pode liberar ferramentas: o topo da skill pode dar ao Claude permissão para usar certas ferramentas, como rodar comandos, sem perguntar a você enquanto a skill trabalha. Três casos reais, conferidos em 01/11/2026 nos próprios repositórios, no {{github|GitHub}}. A skill `defuddle`, do {{repositorio|repositório}} kepano/obsidian-skills, manda rodar `npm install -g defuddle`, que usa o {{npm}} para instalar um programa no PC inteiro, sem perguntar antes. O {{plugin}} superpowers, do repositório obra/superpowers, traz um hook de início de sessão que injeta uma skill inteira em toda conversa, e isso não aparece no `SKILL.md`. E a skill `reddit-automation`, do repositório flowkit-labs/skills, ensina um comando de instalação que baixa de um repositório de outro dono, e não do autor anunciado, e termina com um anúncio. No skills.sh, um diretório de skills da comunidade com contador de instalações, ela aparecia com 1,2 milhão, um sinal fraco que não prova nada sobre a skill.'],
      ['p', 'Por isso a regra: **instalar uma skill é instalar um programa**. Antes, leia o `SKILL.md`, abra a pasta de scripts e, num plugin, a pasta `hooks`; se não entender, peça ao Claude "resuma o que cada arquivo desta skill faz e o que ela executa". E "oficial" não quer dizer "atual": uma pasta de skill pode ficar meses sem mudança dentro de um repositório que continua recebendo {{commit|commits}}. Em 01/11/2026, a pasta `pdf` do repositório oficial `anthropics/skills` não mudava desde 06/02/2026, enquanto o repositório recebeu commits em outubro. Olhe a data da pasta, não a do repositório: no GitHub, abra a pasta, e ao lado de cada arquivo aparece a data do último commit que mexeu nele. A aula 8.6 transforma isso em um roteiro de avaliação.'],
      ['h3', 'O MCP por dentro: cliente, servidor e o que ele oferece'],
      ['p', 'MCP significa Model Context Protocol, um padrão aberto, criado pela Anthropic, para ligar uma IA a ferramentas e dados de fora. É um encaixe padrão: qualquer aplicativo compatível liga em qualquer ferramenta compatível, sem adaptador feito à mão para cada par. O aplicativo que você usa, como o Claude Code ou o app do Claude, é o **cliente**: ele pede. O **servidor** MCP é o programa que atende, e pode rodar na internet, na máquina de uma empresa, ou no seu próprio PC.'],
      ['p', 'Um servidor oferece três tipos de coisa. **Ferramentas**: ações que a IA pode pedir, como "criar evento" ou "ler e-mail". **Recursos**: dados que ela pode ler, como a lista de notas de um cofre. **Prompts**: pedidos prontos, com lacunas para você preencher, que o servidor sugere; {{prompt}} é o nome de qualquer pedido que você escreve para a IA. Quase todo tutorial só fala das ferramentas, mas os outros dois existem e aparecem na aula 9.1.'],
      ['p', 'Os conectores do claude.ai, como Gmail, Agenda e Drive, são servidores MCP remotos que você liga pelas configurações, em Personalizar e depois Conectores, fazendo o login no serviço. A central de ajuda da Anthropic (support.claude.com) avisa que cada serviço conectado processa os dados na própria infraestrutura, sob os termos dele. Um servidor local, que roda no seu PC, você adiciona pelo comando `claude mcp add` e acompanha pelo comando {{mcp-comando|/mcp}}, como a aula 9.2 mostra. Para achar servidores, comece pelo diretório de conectores do claude.ai e pelo {{registro-mcp|Registro oficial do MCP}}; muitos servidores "de referência" antigos foram arquivados, e estar listado no registro **não prova** que o servidor é seguro.'],
      ['p', 'Um caso só com MCP, do começo ao fim. Com o conector da Agenda ligado, você pede "crie um evento amanhã às 10h: reunião com o contador". O Claude vê, na lista de ferramentas do conector, uma que cria eventos, e a chama com a data, o horário e o título; se o seu modo de permissão pedir, você aprova antes. O conector cria o evento na sua agenda, devolve a confirmação, e o Claude responde com o que marcou. O que ele não faz sem uma skill: seguir as suas regras de sempre, como pôr um lembrete dois dias antes ou usar o seu padrão de título. A cada pedido, ele faz do jeito padrão, a não ser que você repita a regra.'],
      ['h3', 'Skill e MCP juntos'],
      ['p', 'Um exemplo completo. Você quer que o Claude crie eventos na sua agenda sempre com um lembrete dois dias antes. O conector da Agenda, que é MCP, dá a ele a ferramenta "criar evento". Mas ele não sabe da sua regra dos dois dias, e vai esquecer na terceira vez. Uma skill chamada `agendar`, com a descrição "cria eventos na agenda; use quando o usuário pedir para marcar, agendar ou lembrar de algo", e com a regra do lembrete nas instruções, resolve: a skill dispara, lê a regra, e usa a ferramenta do MCP para criar o evento do seu jeito. O projeto final deste curso é feito dessas duplas.'],
      ['h3', 'Custo e contexto'],
      ['p', 'Cada skill custa a sua descrição em toda conversa, e o corpo inteiro quando dispara. Cada servidor MCP costumava custar a definição de todas as suas ferramentas logo no início, e a frase "MCP come o seu contexto" vinha daí. Hoje o Claude Code adia essas definições por padrão: só os nomes das ferramentas e as instruções de cada servidor entram no contexto, e a definição completa de uma ferramenta só chega quando ela é usada. O comando `/context` mostra, em uma tela, quanto skills, servidores e conversa estão ocupando (descrição pela documentação; não rodado aqui). A regra prática continua: ligue só o que usa, e desligue o resto.'],
      ['h3', 'Quando não usar nenhum dos dois'],
      ['p', 'Tarefa de uma vez só não precisa de skill: peça direto. Regra que vale em **toda** conversa, como "responda em português" ou "nunca instale sem avisar", não é skill: é o {{claude-md|CLAUDE.md}}, o arquivo de regras que a aula 7.5 ensina, lido sempre. Skill é para o que se repete e tem um jeito certo de fazer. E MCP só quando o Claude precisa alcançar algo que não está no seu PC nem na conversa; para ler uma pasta de arquivos, ele já alcança sozinho.'],
      ['h3', 'Skill e MCP lado a lado'],
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
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Preciso instalar algo para ter uma skill?** Não. É uma pasta com um arquivo de texto. Criar, você pode pedir ao Claude; apagar, é apagar a pasta.',
        '**E para ter um MCP?** Um conector se liga nas configurações do claude.ai. Um servidor local se adiciona com `claude mcp add`, e a aula 9.2 mostra.',
        '**Custa dinheiro?** Não diretamente. Custa contexto, e contexto é o que faz uma conversa ficar mais cara e mais dispersa. Por isso, poucos e bons.',
        '**Instalei uma skill e me arrependi. E agora?** Apague a pasta dela em `.claude\\skills\\`. Se ela trazia scripts que rodaram, trate como a aula 11.5 ensina.',
        '**Skill é a mesma coisa que plugin?** Não. Um {{plugin}} é um {{pacote}} que pode trazer skills, servidores MCP, hooks e comandos de uma vez. A aula 7.7 fala dele, e o cuidado é o mesmo.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: de onde vieram os dois', blocos: [
        ['p', 'O MCP foi publicado pela Anthropic em novembro de 2024, como padrão aberto, e em 2025 passou a ser adotado também por outras empresas de IA. É por isso que um mesmo servidor serve ao Claude, ao {{codex|Codex}} e a outros aplicativos: a tomada é a mesma.'],
        ['p', 'As skills chegaram ao Claude Code em 2025 como um formato simples de pasta e arquivo Markdown, justamente para qualquer pessoa conseguir escrever uma sem programar. O formato também foi publicado como padrão aberto, e por isso há skills da comunidade que funcionam em mais de um {{agente}}.'],
        ['p', 'Um servidor MCP local conversa com o cliente por texto, pela entrada e saída do programa; um remoto conversa pela internet, em geral com login. É só isso que muda; as três coisas oferecidas são as mesmas.']
      ] }],
      ['h2', 'Preveja antes de ver'],
      ['prever', {
        pergunta: 'Esta skill está instalada. Você pede "deixe este e-mail mais curto", sem citar o nome dela. Você acha que ela vai abrir?',
        codigo: '---\nname: textos\ndescription: Ajuda com textos.\n---\n\n# Passos\n1. Deixe o texto curto e direto.\n2. Tire as frases feitas.\n3. Mostre o antes e o depois.',
        linguagem: 'markdown',
        resposta: 'Quase nunca. O Claude decide pela descrição, e "Ajuda com textos" não diz o que a skill faz de diferente nem quando usar: não tem nenhuma das palavras do seu pedido, como "e-mail", "curto" ou "encurtar". As instruções lá embaixo são boas, mas ele só as lê se abrir a skill. Com uma descrição como "Deixa e-mails e mensagens curtos e diretos; use quando o usuário pedir para encurtar, resumir ou revisar um e-mail", ela dispararia. Chamando pelo nome, com /textos, ela abre de qualquer jeito.'
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
        p: 'O Claude disse: "Antes de instalar a skill que você pediu, do GitHub, li os arquivos dela: além do SKILL.md, ela traz um script que roda um comando de instalação no seu PC. Instalar uma skill é como instalar um programa. Quer que eu resuma o que o script faz antes de seguir?" Essa resposta está certa? Se não, o que está errado?',
        o: [
          ['Está errada: skill é só texto, e não há o que conferir antes', 'Uma skill pode trazer scripts, hooks e liberar ferramentas: muda também o que o Claude executa, com os seus {{privilegios|privilégios}}. Ler antes era o certo.'],
          ['Está correta: skill pode trazer scripts, e ler antes é o certo', 'Isso. O Claude leu os arquivos, achou o script e parou para você decidir. Conferir também é reconhecer quando a resposta está certa.'],
          ['Está errada: skill de fora deveria vir dos conectores do claude.ai', 'Conector é outra coisa, um servidor MCP. E a origem sozinha não resolve: skills de repositórios conhecidos também trazem scripts. O Claude fez o que devia.']
        ],
        c: 1
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"Minha skill não funciona."', 'Comece pela descrição: ela precisa ter as palavras que você usa ao pedir. Com muitas skills instaladas, o Claude Code corta descrições: o nome fica na lista, mas sem a descrição ela quase só dispara pelo nome. O `/doctor` e a linha Skills do `/context` mostram o corte.'],
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
          'Com skills demais, as descrições são cortadas (o nome fica), e a skill quase só dispara pelo nome.'
        ]
      }],
      ['h2', 'Laboratório'],
      ['lab', {
        titulo: 'Veja uma skill disparar',
        lugar: 'No PC, com o Claude Code',
        tempo: '15 minutos',
        antes: 'Skills funcionam no {{claude-code|Claude Code}} e também no app do Claude, em todos os planos: lá, em Personalizar › Skills, você envia a pasta da skill compactada num arquivo ZIP, com a execução de código ligada. Aqui o caminho é o Claude Code. Você vai pedir ao Claude uma skill pequena, ler o arquivo que ele escreveu e ver se ela dispara sozinha numa conversa nova. A aula 8.3 faz uma skill de verdade, pedindo ao Claude; a 8.9, opcional, traz scripts. Aqui é só para ver o mecanismo. Este laboratório foi escrito a partir do que o Claude Code costuma fazer; como ele conversa, as frases exatas podem variar. Não foi rodado de ponta a ponta antes de publicar.',
        passos: [
          { faz: 'Abra o Claude Code em qualquer pasta.', espera: 'O Claude Code fica esperando um pedido.' },
          { faz: 'Cole este pedido. Se ele pedir permissão para criar arquivos, aceite.', cola: 'Crie uma skill pessoal chamada revisar-email, que deixa meus e-mails curtos e diretos. Antes de criar, me explique o que você vai escrever na descrição e por quê. No fim, me diga o caminho completo do arquivo.', espera: 'Ele explica a descrição, cria a pasta e mostra o {{caminho}} do arquivo: dentro da sua pasta de usuário, a pasta `.claude`, depois `skills`, depois `revisar-email`, e o arquivo `SKILL.md`.' },
          { faz: 'Abra o {{explorador}} com a tecla Windows + E.', espera: 'Abre uma janela do Explorador, com a barra de endereço no alto.' },
          { faz: 'Cole este endereço na barra de endereço do Explorador e aperte Enter (se preferir, peça ao Claude "abra o SKILL.md"):', cola: '%USERPROFILE%\\.claude\\skills\\revisar-email', espera: 'Aparece a pasta com o arquivo SKILL.md dentro, e nada mais: esta skill não traz scripts.' },
          { faz: 'Abra o SKILL.md no {{vs-code|VS Code}} ou no Bloco de Notas.', espera: 'O arquivo abre: um texto curto, com algumas linhas entre traços no topo.' },
          { faz: 'Leia o arquivo inteiro.', espera: 'No topo, entre traços, estão o nome e a descrição. Abaixo, as instruções, em texto comum.' },
          { faz: 'Digite /reload-skills e aperte Enter.', espera: 'O Claude Code relê as pastas de skills. Se a pasta .claude\\skills não existia quando você abriu o Claude Code, é este comando que faz ele enxergar a skill nova; se já existia, nada muda, e tudo bem. Fechar e abrir o Claude Code de novo tem o mesmo efeito.' },
          { faz: 'Digite {{clear|/clear}} e aperte Enter.', espera: 'A conversa recomeça vazia; a skill continua instalada.' },
          { faz: 'Cole este pedido, sem citar o nome da skill:', cola: 'Deixe este e-mail curto e direto: Prezado, venho por meio deste informar que, conforme conversamos na reunião de terça-feira, estarei ausente na próxima sexta-feira em razão de um compromisso previamente agendado, motivo pelo qual solicito a gentileza de remarcarmos a apresentação para a semana seguinte, em data e horário de sua conveniência.', espera: 'O Claude avisa que está usando a skill revisar-email e devolve um e-mail de duas ou três linhas.' },
          { faz: 'Se ela não disparou, digite {{comando-skills|/skills}} e aperte Enter.', espera: 'Aparece a lista de skills, e revisar-email deve estar nela, com a descrição (descrição pela documentação; não rodado aqui).' },
          { faz: 'Ainda sem disparar, cole este pedido:', cola: 'A skill revisar-email não disparou quando pedi para deixar um e-mail mais curto. Melhore a descrição usando as palavras que eu uso ao pedir.', espera: 'Na segunda tentativa ela costuma disparar. Se ainda não disparar, chame direto com /revisar-email: tarefa simples demais às vezes não dispara mesmo com descrição boa, e isso é assunto da aula 8.4.' }
        ],
        errado: 'se o Claude disser que não encontrou a skill, digite /reload-skills (ou feche e abra o Claude Code de novo) e confira se a pasta está em .claude\\skills dentro da sua pasta de usuário. Se /skills mostrar a skill sem descrição, o problema costuma estar no topo do arquivo: o cabeçalho entre os traços está malformado, e o Claude Code carrega a skill com o cabeçalho vazio, sem a descrição que você escreveu. Peça ao Claude "confira o cabeçalho do SKILL.md da revisar-email". Já o corte de descrições por excesso de skills se confere de outro jeito: com /doctor, ou na linha Skills do /context.'
      }],
      ['fontes', [
        ['Skills, documentação do Claude Code (descrições cortadas: o nome fica; /doctor, /context, /skill-doctor, /reload-skills, cabeçalho malformado)', 'https://code.claude.com/docs/pt/skills', 'oficial', '01/11/2026', 'pt'],
        ['Pasta pdf do repositório anthropics/skills (sem mudança desde 06/02/2026)', 'https://github.com/anthropics/skills/tree/main/skills/pdf', 'oficial', '01/11/2026'],
        ['MCP no Claude Code', 'https://code.claude.com/docs/pt/mcp', 'oficial', '31/10/2026', 'pt'],
        ['O que é o MCP', 'https://modelcontextprotocol.io/docs/getting-started/intro', 'oficial', '31/10/2026'],
        ['Registro oficial de servidores MCP (em versão de teste; estar na lista não prova que é seguro)','https://registry.modelcontextprotocol.io/', 'oficial', '31/10/2026'],
        ['Custos no Claude Code (o que um servidor MCP ocupa antes de ser usado)', 'https://code.claude.com/docs/pt/costs', 'oficial', '01/11/2026', 'pt'],
        ['Use conectores para estender os recursos do Claude, Anthropic', 'https://support.claude.com/pt/articles/11176164-use-conectores-para-estender-os-recursos-do-claude', 'oficial', '01/11/2026', 'pt'],
        ['Use skills in Claude, Anthropic (Customize › Skills, envio da pasta em ZIP; planos Free, Pro, Max, Ultra, Team e Enterprise; exige a execução de código ligada)', 'https://support.claude.com/en/articles/12512180-using-skills-in-claude', 'oficial', '02/11/2026'],
        ['Skill defuddle, repositório kepano/obsidian-skills', 'https://github.com/kepano/obsidian-skills', 'comunidade', '01/11/2026'],
        ['Plugin superpowers, repositório obra/superpowers (pasta hooks)', 'https://github.com/obra/superpowers', 'comunidade', '01/11/2026'],
        ['Skill reddit-automation, repositório flowkit-labs/skills', 'https://github.com/flowkit-labs/skills', 'comunidade', '01/11/2026'],
        ['reddit-automation no diretório skills.sh (contador de instalações: sinal fraco)', 'https://www.skills.sh/flowkit-labs/skills/reddit-automation', 'comunidade', '01/11/2026']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['A skill ensina como fazer, e o MCP conecta o Claude a sistemas de fora', 'Isso. E os dois podem trabalhar juntos.'],
      ['Skill e MCP fazem o mesmo trabalho; a skill roda no seu PC e o MCP, na internet', 'Fazem trabalhos diferentes: um ensina e o outro conecta. E um servidor MCP também pode rodar no seu PC.'],
      ['O MCP é o manual que ensina, e a skill é a tomada que conecta', 'É o contrário: a skill é o manual, e o MCP é a tomada.']
    ], c: 0 },
    prova: [
      { p: 'O que a skill faz?', o: [
        ['Ensina o seu jeito de fazer uma tarefa', 'Isso. A skill é um manual, aberto quando a tarefa pede.'],
        ['Liga o Claude à sua agenda e ao seu e-mail', 'Quem liga o Claude a sistemas de fora é o MCP.'],
        ['Deixa o modelo mais rápido e mais barato', 'A skill ocupa contexto; não acelera nem barateia o modelo.']
      ], c: 0 },
      { p: 'Como o Claude sabe a hora de abrir uma skill?', o: [
        ['Pela ordem em que as skills foram instaladas, da mais nova à mais antiga', 'A ordem de instalação não entra na decisão; o que conta é a descrição combinar com o pedido.'],
        ['Ele abre todas as skills, em toda conversa','Abrir todas gastaria contexto demais; ele lê só nome e descrição.'],
        ['Pelo nome e pela descrição no topo do arquivo', 'Isso. Se a descrição combinar com o pedido, ele abre o resto.']
      ], c: 2 }
    ],
    tutor: [
      ['Onde ficam as minhas skills?', 'As pessoais ficam em .claude\\skills, dentro da sua pasta de usuário, e cada uma tem a sua pasta, com um arquivo SKILL.md. Skills de um projeto só ficam em .claude\\skills, dentro da pasta daquele projeto.'],
      ['Como saber se um MCP é seguro?', 'Veja três coisas: quem publicou, o que ele consegue acessar, e se ele executa algo no seu PC. Prefira o servidor oficial da própria empresa do serviço. Quando tiver dúvida, peça ao Claude para ler o código e resumir o que ele faz, antes de instalar.'],
      ['Qual a diferença entre skill e CLAUDE.md?', 'O CLAUDE.md é lido em toda conversa: serve para regras que valem sempre. A skill é aberta só quando a tarefa combina com a descrição: serve para um jeito de fazer que se repete.']
    ]
  }
};
