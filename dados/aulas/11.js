// Módulo 11 — Segurança. Formato dos blocos: ESPEC-site.md, seção 4.
// Saídas de terminal coladas de execuções reais em _testes\chave-11-1 (01/11/2026, Python 3.12.10, Git 2.54, Gitleaks 8.30.1), com chaves FALSAS geradas na hora.
export const AULAS = {
  '11-1': {
    tempo: 45,
    video: 's2-chave-api',
    videoTipo: 'curto',
    abertura: 'Uma chave de API é como a senha do seu cartão: quem tem a chave gasta em seu nome, e existem robôs varrendo a internet atrás de chaves o tempo todo. Quatro regras simples evitam quase todo esse problema, e esta aula mostra cada uma funcionando.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Assim que um programa seu usa uma {{api|API}} paga, uma {{chave-api|chave}} entra em jogo. A chave é um texto longo, parecido com `sk-ant-api03-…`, que o seu programa manda junto com cada pedido para a API saber de quem cobrar. Se ela vazar, alguém gasta o seu crédito; se a recarga automática estiver ligada, gasta o seu cartão. No seu caso, a chave da Anthropic gasta primeiro os créditos mensais do plano Max, e isso é bom: com a recarga desligada, o prejuízo para quando o crédito acaba.'],
      ['p', 'Você vai criar a sua chave na aula 10.2, usar na 10.4 e, no projeto final, deixar um bot rodando o dia inteiro com ela. Cada um desses passos é uma chance de vazar: um arquivo que vai para o GitHub, uma página publicada com a chave dentro, um `setx` que deixa a chave no histórico do terminal. As quatro regras desta aula cobrem os quatro lugares por onde chaves vazam de verdade.'],
      ['p', 'E tem o motivo especial seu: o Claude Code no seu PC não pede confirmação. Ele pode ler o `.env`, pode fazer `git add .` com a chave dentro, pode publicar um site. Nada disso é malícia; é obediência. As regras precisam estar no lugar **antes**, porque depois ninguém vai perguntar.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'Pense na senha do seu cartão. Você não escreve a senha na carteira (o {{codigo|código}}). Não posta foto dela (o {{github|GitHub}}). Não entrega ao garçom (o site). Quem confere a senha é o banco (o {{servidor}}), longe de todo mundo. E o banco deixa você pôr um limite diário, para o estrago ter teto.'],
      ['quebra', 'Cartão clonado costuma aparecer logo no extrato, e o banco pode bloquear sozinho. Uma chave de API pode ser copiada sem deixar sinal, e quem precisa vigiar é você. Por isso, o limite de gasto é tão importante, e por isso a ordem das providências quando vaza não é a mesma do cartão: aqui, cancelar vem antes de tudo.'],
      ['h2', 'Como funciona'],
      ['h3', 'O que uma chave é, por dentro'],
      ['p', 'A chave é criada no {{console}}, o site da Anthropic para programadores. Ela identifica a sua organização e a sua conta, e cada pedido que a carrega é cobrado ali. A API não sabe quem está digitando: sabe só qual chave chegou. É por isso que "quem tem a chave gasta em seu nome" é literal. Existem chaves pessoais e chaves de serviço, para programas que rodam sozinhos; a aula 10.2 mostra a diferença. Para esta aula, basta saber que a chave é um segredo, e que segredo não se escreve onde outras pessoas leem.'],
      ['h3', 'Regra 1: fora do código'],
      ['p', 'O programa precisa da chave, mas a chave não pode estar escrita nele. A solução é guardá-la em uma {{variavel|variável de ambiente}}: um valor que o sistema guarda com um nome, e que o programa pede pelo nome. O jeito mais comum em projetos é um arquivo chamado {{env|.env}}, na pasta do projeto, com uma linha `ANTHROPIC_API_KEY=` seguida da chave. O código pede `ANTHROPIC_API_KEY` e nunca contém a chave em si. Assim, o código pode ir para o GitHub, para um colega, para o Claude, sem levar a chave junto.'],
      ['p', 'Dois detalhes que derrubam iniciantes. Primeiro: **o `.env` não é lido sozinho.** Ou o valor já está definido no sistema, ou o programa carrega o arquivo antes, com `load_dotenv()`, da biblioteca `python-dotenv`. Sem isso, o Python responde assim, de verdade:'],
      ['saida', 'Traceback (most recent call last):\n  File "<string>", line 1, in <module>\n  File "<frozen os>", line 714, in __getitem__\nKeyError: \'ANTHROPIC_API_KEY\''],
      ['p', '"KeyError" é "não achei nenhuma variável com esse nome". Não é chave errada: é chave ausente. Segundo detalhe: o Bloco de Notas pode salvar o arquivo como `.env.txt`, e esse nome nem o programa nem a lista do Git reconhecem. Ligue a exibição de extensões (aula 0.1) ou peça ao Claude para criar o arquivo vazio e cole a chave você.'],
      ['p', 'Há um jeito de gravar a variável para o Windows inteiro, com o comando `setx`. Ele tem duas armadilhas. Se você digitar `setx NOME valor`, a chave fica gravada no histórico do PowerShell, em texto puro; a forma segura é `setx ANTHROPIC_API_KEY (Read-Host "cole a chave")`, que pede a chave em uma linha que não vai para o histórico. E uma `ANTHROPIC_API_KEY` gravada para o Windows inteiro faz o próprio Claude Code, quando roda em modo de script, usar a chave em vez da sua assinatura, e os créditos mensais não pagam Claude Code. Para projetos, prefira o `.env`, um por pasta.'],
      ['h3', 'Regra 2: fora do GitHub'],
      ['p', 'O `.env` entra no {{gitignore|.gitignore}}, a lista do que o Git ignora, **antes** do primeiro `git add`. A ordem importa porque o `.gitignore` só vale para arquivo novo: o que já entrou em um commit continua sendo acompanhado, e continua no {{historico|histórico}} para sempre. Se o `.env` já foi para um commit, o conserto tem dois passos, e o primeiro não é no Git: revogue a chave (seção "Se vazar"), e só depois tire o arquivo do acompanhamento:'],
      ['saida', 'rm \'.env\''],
      ['p', 'Essa é a resposta real de `git rm --cached .env`: o arquivo sai do Git, mas fica no seu disco. Depois, `.env` no `.gitignore` e um commit. A chave antiga continua nas fotos velhas, mas já não vale nada.'],
      ['p', 'Não conte com o GitHub para avisar. Em repositório **público**, o GitHub procura segredos conhecidos e a Anthropic desativa sozinha uma chave do Claude que apareça lá, avisando por e-mail. Em repositório **privado de conta pessoal comum**, essa busca não existe. A defesa local é o {{gitleaks|Gitleaks}}, um programa gratuito que varre os arquivos e o histórico atrás de padrões de senha e chave. Ele achou, de verdade, um token falso do GitHub que coloquei em um repositório de teste:'],
      ['saida', 'INF 1 commits scanned.\nINF scanned ~58 bytes (58 bytes) in 193ms\nWRN leaks found: 1'],
      ['p', 'E aqui a honestidade importa: no mesmo teste, uma chave falsa no formato da Anthropic, dentro de um `.env` já commitado, passou pelos dois modos do Gitleaks (`git`, que olha o histórico, e `dir`, que olha os arquivos) **sem nenhum aviso**: a versão 8.30.1 não tem regra para esse formato. Gitleaks é uma rede, não uma garantia. Rode os dois modos, e procure também o começo da chave no histórico com `git log -S "sk-ant-" --oneline`, que listou na hora os dois commits onde a chave falsa esteve. A aula 11.9 monta um roteiro completo de auditoria, com uma regra extra para chaves da Anthropic.'],
      ['p', 'Mais uma defesa, específica do Claude Code: ele pode ler o `.env` se ninguém impedir. Para bloquear, peça a ele: "adicione às minhas configurações uma regra deny para `Read(./.env)` e `Read(./.env.*)`". A aula 7.4 explica essas regras.'],
      ['h3', 'Regra 3: fora do site'],
      ['p', 'Esta é a regra mais difícil, porque site e servidor parecem a mesma coisa. Não são. Tudo o que está em uma página vai inteiro para o {{navegador}} de quem visita, e qualquer visitante consegue ler o código dela, inclusive um código "escondido" ou embaralhado. Se a chave estiver na página, ela está nas mãos de todo mundo. O lugar da chave é o servidor, onde o visitante não chega. Veja o caminho de uma pergunta em um site com IA, como o tutor deste curso:'],
      ['tabela', {
        colunas: ['Etapa', 'Quem', 'O que acontece'],
        linhas: [
          ['1', 'Navegador', 'Recebe a página inteira. O visitante pode ler todo o código dela'],
          ['2', 'Página', 'Manda só a pergunta para uma função no servidor, sem chave nenhuma'],
          ['3', 'Servidor', 'Guarda a chave em uma variável de ambiente, longe do visitante. Junta a chave à pergunta e envia para a API'],
          ['4', 'API', 'Confere a chave, cobra da sua conta e responde ao servidor'],
          ['5', 'Página', 'Mostra a resposta. O visitante nunca viu a chave']
        ]
      }],
      ['p', 'Um caso real de 2026: o site Moltbook publicou uma chave no JavaScript da página e deixou o banco de dados sem regras de acesso; o resultado foi cerca de 1,5 milhão de tokens e dezenas de milhares de e-mails expostos. O fundador disse ter feito tudo por "vibe coding". A aula 15.3 mostra como escrever a função do servidor, e a 15.4, como fechar o banco.'],
      ['h3', 'Regra 4: com limite'],
      ['p', 'No Console, na página Billing, existe um limite de gasto por mês e a recarga automática. Para começar, deixe a recarga **desligada**: sem ela, o prejuízo para quando o crédito acaba, e os créditos mensais do seu plano são o teto natural. Use uma chave por projeto, para, se uma vazar, trocar só aquela sem parar o resto. E olhe o uso por chave de vez em quando: gasto em um dia em que você não usou é sinal de vazamento.'],
      ['h3', 'Se vazar: a ordem certa'],
      ['p', '{{revogar|Revogar}} é cancelar a chave no Console, para ela deixar de funcionar. Vem **primeiro**, antes de mexer no código, antes de limpar o Git, porque enquanto a chave vale alguém pode estar gastando. É a orientação da própria Anthropic. Depois: criar uma chave nova, trocar nos programas que a usavam, conferir no painel se houve uso estranho, e só então, se ainda fizer sentido, limpar o histórico do Git. Apagar a linha do código e fazer outro commit não resolve nada, porque a chave continua nas fotos antigas.'],
      ['h3', 'Quando a regra muda'],
      ['p', 'O Claude Code, no uso normal, não usa chave de API: usa o login da sua assinatura, e o gasto sai do limite do plano. A chave entra quando você escreve um programa seu (aula 10.4), quando usa o Agent SDK ou os Managed Agents, e no bot do projeto final. Uma coisa não muda nunca: a chave não se compartilha, nem com um amigo que quer "só testar". Cada pessoa cria a sua.'],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Como eu crio o arquivo .env?** É um arquivo de texto comum, chamado exatamente `.env`, na pasta do projeto, com a linha `ANTHROPIC_API_KEY=` e a chave colada depois do igual. Peça ao Claude para criar o arquivo vazio e colocá-lo no `.gitignore`, e cole a chave você mesmo, no editor.',
        '**Tem como saber se alguém usou a minha chave?** Sim. O Console mostra o uso por dia e por chave. Gasto em dia estranho: revogue na hora.',
        '**E se eu colar a chave no chat do Claude por engano?** Trate como vazamento: revogue e crie outra. Conversa é texto guardado.',
        '**Posso usar a mesma chave em dois projetos?** Pode, mas não deve: se vazar em um, os dois param. Uma por projeto.',
        '**Repositório privado não basta?** Reduz o risco. Mas quem tem acesso vê, um dia ele pode virar público com o histórico inteiro, e o GitHub não vigia repositório privado de conta pessoal.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: como a API confere a chave', blocos: [
        ['p', 'Cada pedido à API leva a chave em um cabeçalho chamado `x-api-key`. O servidor da Anthropic procura a chave na base dele, vê a que organização pertence e se ainda vale, e só então processa. Por isso revogar funciona na hora: a chave some da base, e o pedido seguinte volta com erro 401, "não autorizado".'],
        ['p', 'Chaves podem ser trocadas de tempos em tempos mesmo sem vazamento, a chamada rotação. Para uso pessoal, não é obrigatório, mas uma chave por projeto deixa a rotação fácil quando você quiser.']
      ] }],
      ['h2', 'Preveja antes de ver'],
      ['prever', {
        pergunta: 'De onde este programa pega a chave? Ela aparece no código?',
        codigo: 'import os\nfrom dotenv import load_dotenv\nimport anthropic\n\nload_dotenv()\ncliente = anthropic.Anthropic(\n    api_key=os.environ["ANTHROPIC_API_KEY"]\n)',
        linguagem: 'python',
        resposta: 'A chave não aparece. `load_dotenv()` lê o arquivo `.env` da pasta e coloca o valor no sistema; `os.environ["ANTHROPIC_API_KEY"]` pede ao sistema o valor guardado com esse nome. Assim, o código pode ir para o GitHub sem levar a chave junto. `anthropic` é a biblioteca da Anthropic, e `dotenv` é a `python-dotenv`. Sem a linha `load_dotenv()`, e sem a variável no sistema, o Python dá o `KeyError` que você viu acima.'
      }],
      ['h2', 'Pare e responda'],
      ['pergunta', {
        p: 'Você quer um tutor de IA no seu site. Onde a chave fica?',
        o: [
          ['Em um arquivo JavaScript da página, com o código embaralhado', 'Embaralhar não esconde: tudo o que vai para o navegador pode ser lido pelo visitante.'],
          ['Em uma função no servidor, lida de uma variável de ambiente', 'Isso. O navegador só fala com a sua função, que acrescenta a chave. Coloque também um limite por pessoa.'],
          ['Em uma tabela do banco de dados, consultada pela página', 'Se a página consegue ler a tabela, o visitante também consegue. O banco não resolve.']
        ],
        c: 1
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'O Claude disse: "Coloquei a chave no .env e adicionei o .env ao .gitignore. Mesmo que o .env já esteja no último commit, agora está tudo seguro." O que está errado?',
        o: [
          ['Nada: o .gitignore protege o arquivo a partir de agora, inclusive o que já foi commitado','O .gitignore só vale para arquivo novo. O .env que já está em um commit continua acompanhado, e a chave continua no histórico.'],
          ['O .gitignore não tira o que já foi commitado; a chave precisa ser revogada', 'Isso. Revogue a chave, crie outra, e tire o arquivo do Git com git rm --cached .env.'],
          ['O erro é usar .env; a chave deveria ficar em um arquivo chamado chave.txt', 'Mudar o nome não muda nada. O problema é o commit antigo.']
        ],
        c: 1
      }],
      ['h2', 'Coloque na ordem'],
      ['parsons', {
        p: 'Sua chave vazou em um repositório público. Coloque as providências na ordem.',
        linhas: ['Revogar a chave antiga', 'Criar uma chave nova', 'Trocar a chave nos seus programas', 'Conferir o uso e o gasto no painel', 'Limpar o histórico do Git, se ainda precisar'],
        notas: ['Ela para de valer agora. Programa parado é melhor que alguém gastando por você', 'Agora existe uma que vale', 'Eles voltam a funcionar', 'Alguém usou enquanto vazou?', 'A chave já não vale nada, e muitas vezes isso nem é necessário']
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"O repositório é privado, então tudo bem."', 'Privado reduz o risco, mas qualquer pessoa ou ferramenta com acesso vê. E um dia ele pode virar público, com o histórico inteiro.'],
        ['"Apaguei a linha e fiz outro commit."', 'A chave continua no histórico. Revogue a chave primeiro.'],
        ['"É só para testar, depois eu tiro."', 'Robôs não esperam. Teste com a chave em variável de ambiente desde o primeiro minuto.'],
        ['"Criei o .env, então o programa já lê a chave."', 'O .env não é lido sozinho. O programa precisa de load_dotenv(), ou a variável precisa estar no sistema. Senão, KeyError.'],
        ['"O Gitleaks não achou nada, então não tem chave."', 'Ele não conhece todos os formatos: no teste desta aula, uma chave no formato da Anthropic passou em branco. Procure também o começo da chave com git log -S "sk-ant-".']
      ]],
      ['h2', 'Tente lembrar'],
      ['lembrar', {
        p: 'Quais são as quatro regras?',
        r: ['Fora do código: em variável de ambiente ou .env.', 'Fora do GitHub: .env no .gitignore antes do primeiro add.', 'Fora do site: a chave fica no servidor.', 'Com limite de gasto, e uma chave por projeto.']
      }],
      ['lembrar', {
        p: 'A chave vazou. O que vem primeiro, e por quê?',
        r: ['Revogar a chave, no Console.', 'Porque, enquanto ela vale, alguém pode estar gastando.', 'Só depois: chave nova, trocar nos programas, conferir o uso, limpar o histórico se precisar.']
      }],
      ['h2', 'Laboratório'],
      ['lab', {
        titulo: 'Procure chaves nos seus próprios projetos',
        lugar: 'No PC, no PowerShell',
        tempo: '15 minutos',
        antes: 'Aqui nada é alterado: é só olhar. O Gitleaks já está instalado no seu PC (este curso o instalou pelo winget em 01/11/2026). Você vai rodá-lo em uma pasta de projeto sua, nos dois modos, e ler o resultado. Se ainda não tem nenhum repositório, faça depois da aula 3.3. Os comandos abaixo são para colar no PowerShell, dentro da pasta do projeto.',
        passos: [
          { faz: 'Abra o PowerShell na pasta do projeto (no {{explorador}}, clique com o botão direito em um espaço vazio e escolha "Abrir no Terminal") e confira o Gitleaks:', cola: 'gitleaks version', espera: 'Aparece um número de versão, como 8.30.1. Se aparecer "não é reconhecido", feche e abra o terminal de novo, ou instale com winget install Gitleaks.Gitleaks.' },
          { faz: 'Varra os arquivos da pasta, com os segredos mascarados:', cola: 'gitleaks dir . --redact --verbose', espera: 'No fim, "no leaks found" ou "leaks found: N". Com achados, cada um mostra a regra (RuleID), o arquivo (File) e a linha (Line), e o segredo aparece como REDACTED.' },
          { faz: 'Varra também o histórico do Git:', cola: 'gitleaks git . --redact --verbose', espera: 'A mesma saída, agora olhando todos os commits. "N commits scanned" diz quantas fotos ele abriu.' },
          { faz: 'Procure o começo de uma chave da Anthropic no histórico:', cola: 'git log -S "sk-ant-" --oneline', espera: 'Nada, no melhor caso. Se aparecer um commit, a chave esteve ali: siga a ordem da seção "Se vazar".' },
          { faz: 'Se os três passos não acharam nada, marque este passo. Se acharam uma chave que parece real, revogue-a antes de qualquer outra coisa.', espera: 'A chave antiga para de funcionar, e o achado deixa de ser perigoso.' }
        ],
        errado: 'se preferir, peça ao Claude Code: "rode gitleaks dir e gitleaks git nesta pasta com --redact, não altere nada, e me diga o tipo, o arquivo e a linha de cada achado, sem nunca mostrar o valor". Não cole a chave no chat.'
      }],
      ['h2', 'Laboratório quebrado'],
      ['quebrado', {
        titulo: 'Laboratório quebrado',
        texto: 'Alguém criou o .env com a chave certa, escreveu o programa abaixo e rodou. O Python respondeu com o erro em seguida. Descubra o motivo antes de ver a causa.',
        cola: 'import os\nimport anthropic\n\ncliente = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])',
        saida: 'Traceback (most recent call last):\n  File "app.py", line 4, in <module>\n    cliente = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])\n  File "<frozen os>", line 714, in __getitem__\nKeyError: \'ANTHROPIC_API_KEY\'',
        dica: 'A chave está certa e o .env existe. O problema está entre o arquivo e o programa: compare com o código de "Preveja antes de ver".',
        resposta: 'Falta carregar o .env. O arquivo não é lido sozinho: o programa precisa de `from dotenv import load_dotenv` e `load_dotenv()` antes de pedir a variável. "KeyError" quer dizer que o sistema não tinha nenhuma variável com aquele nome.'
      }],
      ['fontes', [
        ['Melhores práticas de chave de API, Anthropic', 'https://support.claude.com/pt/articles/9767949-melhores-praticas-de-chave-de-api-mantenha-suas-chaves-seguras-e-protegidas', 'oficial', '31/10/2026', 'pt'],
        ['Se a sua chave pode ter vazado, Anthropic', 'https://support.claude.com/en/articles/8384961-what-should-i-do-if-i-suspect-my-api-key-has-been-compromised', 'oficial', '31/10/2026'],
        ['Sobre a verificação de segredos, GitHub', 'https://docs.github.com/pt/code-security/concepts/secret-security/secret-scanning', 'oficial', '31/10/2026', 'pt'],
        ['Gitleaks', 'https://github.com/gitleaks/gitleaks', 'comunidade', '31/10/2026'],
        ['Moltbook: banco exposto com chaves e e-mails, Wiz', 'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys', 'imprensa', '31/10/2026'],
        ['Créditos de API para assinantes, Anthropic', 'https://platform.claude.com/docs/pt-BR/about-claude/api-credits-for-subscribers', 'oficial', '31/10/2026', 'pt']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['A chave fica fora do código, fora do GitHub e fora do site, e tem limite de gasto', 'Isso. São as quatro regras.'],
      ['Em um repositório privado do GitHub, a chave pode ficar escrita no código sem nenhum risco','O risco diminui, mas continua: quem tem acesso vê, e o projeto pode virar público com o histórico inteiro.'],
      ['Quando uma chave vaza, basta apagar a linha do código e fazer um novo commit', 'A chave continua no histórico. Primeiro, revogue a antiga e crie outra.']
    ], c: 0 },
    prova: [
      { p: 'Onde a chave deve ficar quando um site usa uma API?', o: [
        ['No código da página, em um arquivo separado', 'Tudo o que está na página vai para o navegador do visitante, inclusive arquivos separados.'],
        ['No servidor, em uma variável de ambiente', 'Isso. O servidor fica longe do visitante.'],
        ['Em um comentário escondido da página', 'Comentário também vai para o navegador, e qualquer um lê.']
      ], c: 1 },
      { p: 'Sua chave vazou. Qual é a prioridade?', o: [
        ['Apagar a linha do código e fazer um commit', 'Apagar não adianta, porque a chave continua no histórico.'],
        ['Esperar para ver se alguém usa a chave', 'Enquanto você espera, alguém gasta.'],
        ['Revogar a chave e criar outra', 'Isso. Só cancelar a chave resolve; o resto vem depois.']
      ], c: 2 }
    ],
    tutor: [
      ['Como eu crio o arquivo .env?', 'É um arquivo de texto comum, chamado exatamente .env, na pasta do projeto, com uma linha ANTHROPIC_API_KEY= seguida da chave. O mais importante: coloque .env no .gitignore antes do primeiro commit. Cuidado, porque o Bloco de Notas pode salvar como .env.txt, e esse nome a lista não pega. É mais fácil pedir ao Claude para criar o arquivo vazio, e você cola a chave.'],
      ['Tem como saber se alguém usou minha chave?', 'Sim. O Console mostra o uso por dia e por chave. Se aparecer gasto em um dia que você não usou, revogue a chave na hora e crie outra.'],
      ['O que é load_dotenv()?', 'Uma função da biblioteca python-dotenv que lê o arquivo .env da pasta e coloca cada linha como variável de ambiente, para o programa achar com os.environ. Sem ela, o .env fica só no disco e o programa dá KeyError.']
    ]
  }
};
