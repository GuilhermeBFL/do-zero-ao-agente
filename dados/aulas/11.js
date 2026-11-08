// Módulo 11 — Segurança. Formato dos blocos: ESPEC-site.md, seção 4.
// Saídas de execuções reais em 01/11/2026 (Git 2.54, Python 3.12.10, uv 0.12.19, Gitleaks 8.30.1), com o nome trocado por SeuNome e caminhos encurtados para C:\Users\SeuNome\projeto.
// SDK de Python anthropic 2.3.0: anthropic.Anthropic(api_key=...) continua sendo o jeito de criar o cliente, e criar o cliente não chama a rede.
export const AULAS = {
  '11-1': {
    tempo: 45,
    video: 's2-chave-api',
    videoTipo: 'curto',
    abertura: 'Você já colou uma {{chave-api|chave}} num arquivo "só para testar", ou viu o Claude escrever a chave direto no {{codigo|código}} para o programa funcionar. Quem tem essa chave gasta em seu nome, e esta aula mostra as quatro regras que impedem isso, cada uma funcionando.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Assim que um programa seu usa uma {{api|API}} paga, uma chave entra em jogo. A chave é um texto longo, parecido com `sk-ant-api03-…`, que o seu programa manda junto com cada pedido para a API saber de quem cobrar. Se ela vazar, alguém gasta o seu crédito; se a recarga automática estiver ligada, gasta o seu cartão. A chave gasta os créditos mensais de API (quando o plano os inclui; a aula 10.8 explica quais e quanto); o Claude Code, no uso normal, não usa chave nem esses créditos: usa a assinatura. Com a recarga desligada, o prejuízo para quando o crédito acaba.'],
      ['p', 'Você vai criar a sua chave na aula 10.2, usar na 10.4 e, no projeto final, deixar um {{bot}} {{rodar|rodando}} o dia inteiro com ela. Cada um desses passos é uma chance de vazar: um arquivo que vai para o GitHub, uma página publicada com a chave dentro, um {{setx}} que deixa a chave no histórico do {{terminal}}. As quatro regras desta aula cobrem os quatro lugares por onde chaves vazam de verdade.'],
      ['p', 'E há um motivo a mais: num modo que não pede confirmação, o {{claude-code|Claude Code}} pode ler o `.env`, fazer `git add .` com a chave dentro e publicar um site sem parar para perguntar. Nada disso é malícia; é obediência, e por isso as regras precisam estar no lugar **antes**.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'Pense na senha do seu cartão. Você não escreve a senha na carteira (o código). Não posta foto dela (o {{github|GitHub}}). Não entrega ao garçom (a página do site, que vai para o {{navegador}} de qualquer visitante). Quem confere a senha é o banco (a API). Entre você e o banco há o caixa eletrônico (o seu {{servidor}}), que fica longe do garçom: é ali, e só ali, que a senha é digitada. E o banco deixa você pôr um limite diário, para o estrago ter teto.'],
      ['quebra', 'Cartão clonado costuma aparecer logo no extrato, e o banco pode bloquear sozinho. Uma chave de API pode ser copiada sem deixar sinal, e quem precisa vigiar é você. Por isso, o limite de gasto é tão importante, e por isso a ordem das providências quando vaza não é a mesma do cartão: aqui, cancelar vem antes de tudo.'],
      ['h2', 'Como funciona'],
      ['h3', 'O que uma chave é, por dentro'],
      ['p', 'A chave é criada no {{console}}, o site da Anthropic para programadores. Ela identifica a sua organização e a sua conta, e cada pedido que a carrega é cobrado ali. A API não sabe quem está digitando: sabe só qual chave chegou. É por isso que "quem tem a chave gasta em seu nome" é literal. Existem chaves pessoais e chaves de serviço, para programas que rodam sozinhos; a aula 10.2 mostra a diferença. Para esta aula, basta saber que a chave é um segredo, e que segredo não se escreve onde outras pessoas leem.'],
      ['h3', 'Regra 1: fora do código'],
      ['p', 'O programa precisa da chave, mas a chave não pode estar escrita nele. A solução é guardá-la em uma {{variavel|variável de ambiente}}: um valor que o sistema guarda com um nome, e que o programa pede pelo nome. O jeito mais comum em projetos é um arquivo chamado {{env|.env}}, na pasta do projeto, com uma linha `ANTHROPIC_API_KEY=` seguida da chave. O código pede `ANTHROPIC_API_KEY` e nunca contém a chave em si. Assim, o código pode ir para o GitHub, para um colega, para o Claude, sem levar a chave junto.'],
      ['p', 'Dois detalhes que derrubam iniciantes. Primeiro: **o `.env` não é lido sozinho.** Ou o valor já está definido no sistema, ou o programa carrega o arquivo antes, com `load_dotenv()`, da {{biblioteca}} `python-dotenv`. Ela não vem com o Python: instala-se com `uv pip install python-dotenv`. Repare nos nomes: o pacote se chama `python-dotenv`, e no código ele aparece como `dotenv`. Um pacote chamado só `dotenv` também existe no {{pypi|PyPI}}: é um pacote antigo e descontinuado, de outro dono, que hoje só redireciona para o `python-dotenv`. Instale o `python-dotenv` direto; conferir o nome é a lição da aula 4.1. Sem carregar o arquivo, o {{python|Python}} responde assim, de verdade:'],
      ['saida', 'Traceback (most recent call last):\n  File "<string>", line 1, in <module>\n  File "<frozen os>", line 714, in __getitem__\nKeyError: \'ANTHROPIC_API_KEY\''],
      ['p', 'Leia esse {{traceback|Traceback}}, o relatório de erro do Python, de baixo para cima: {{keyerror|KeyError}} é "não achei nenhuma variável com esse nome". Não é chave errada: é chave ausente. Segundo detalhe: o Bloco de Notas pode salvar o arquivo como `.env.txt`, e esse nome nem o programa nem a lista do Git reconhecem. Ligue a exibição de extensões (aula 0.1) ou peça ao Claude para criar o arquivo vazio e cole a chave você.'],
      ['p', 'Existe também o {{comando}} `setx`, que grava a variável para o seu usuário do Windows, em texto puro, no registro do sistema. Para projetos, prefira o `.env`, um por pasta; as armadilhas do `setx` estão na caixa logo abaixo, que você pode pular.'],
      ['fundo', { titulo: 'Para ir mais fundo: as armadilhas do setx', blocos: [
        ['p', 'Se você digitar `setx NOME valor`, a chave fica gravada no histórico do {{powershell|PowerShell}}, em texto puro. A forma mais segura é `setx ANTHROPIC_API_KEY (Read-Host "cole a chave")`, que pede a chave numa linha à parte, fora do histórico. Só que o `Read-Host` mostra a chave na tela enquanto você cola: faça isso sem ninguém olhando e limpe a tela depois, com `cls`.'],
        ['p', 'O `setx` só vale nos terminais abertos depois dele: no terminal em que você rodou, a variável ainda não existe. E ele grava para o seu usuário, não para o Windows inteiro, em texto puro no registro: qualquer programa que rode como você consegue ler.'],
        ['p', 'Por fim, uma `ANTHROPIC_API_KEY` gravada assim faz o próprio Claude Code, quando roda em {{modo-script|modo de script}}, usar a chave em vez da sua assinatura. Quem paga? A chave gasta os créditos comprados da organização dela, porque os créditos mensais que vêm com um plano não cobrem o Claude Code. Sem créditos e com a recarga desligada, os pedidos param com um aviso de saldo baixo, e nada vai para o cartão.']
      ] }],
      ['h3', 'Regra 2: fora do GitHub'],
      ['p', 'O `.env` entra no {{gitignore|.gitignore}}, a lista do que o {{git|Git}} ignora, **antes** do primeiro `git add`. A ordem importa porque o `.gitignore` só vale para arquivo novo: o que já entrou em um {{commit}} continua sendo acompanhado, e continua no {{historico|histórico}} para sempre. Se o `.env` já foi para um commit, o conserto tem dois passos, e o primeiro não é no Git: revogue a chave (seção "Se vazar"), e só depois tire o arquivo do acompanhamento com `git rm --cached .env`. A resposta real desse comando é uma linha:'],
      ['saida', 'rm \'.env\''],
      ['p', 'O arquivo sai do Git, mas fica no seu disco. Depois, `.env` no `.gitignore` e um commit. A chave antiga continua nas fotos velhas, mas já não vale nada.'],
      ['p', 'Não conte com o GitHub para avisar. Em {{repositorio|repositório}} **público**, o GitHub procura segredos conhecidos e a Anthropic desativa sozinha uma chave do Claude que apareça lá, avisando por e-mail. Em repositório **privado de conta pessoal comum**, essa busca não existe. A defesa local é o {{gitleaks|Gitleaks}}, um programa gratuito que varre os arquivos e o histórico atrás de padrões de senha e chave. Ele tem dois modos: `git`, que olha o histórico, e `dir`, que olha os arquivos da pasta. Veja o modo `git` achando, de verdade, uma chave falsa no formato da Anthropic, gerada só para o teste. O repositório tinha dois commits: no primeiro, o `.env` entrou junto com o programa; no segundo, ele saiu do acompanhamento com `git rm --cached` e entrou no `.gitignore`, o conserto visto acima. O comando foi `gitleaks git . --redact --verbose --no-banner`:'],
      ['saida', 'Finding:     ANTHROPIC_API_KEY=REDACTED\nSecret:      REDACTED\nRuleID:      anthropic-api-key\nEntropy:     5.402674\nFile:        .env\nLine:        1\nCommit:      d6a523c86a76588f0d5ba4a184cb0e25441826eb\nAuthor:      SeuNome\nEmail:       voce@exemplo.com\nDate:        2026-11-01T19:16:18Z\nFingerprint: d6a523c86a76588f0d5ba4a184cb0e25441826eb:.env:anthropic-api-key:1\n\n8:16PM INF 2 commits scanned.\n8:16PM INF scanned ~145 bytes (145 bytes) in 187ms\n8:16PM WRN leaks found: 1'],
      ['p', 'Linha por linha: Finding é o trecho achado, com o segredo trocado por REDACTED graças ao `--redact`, que impede a chave de aparecer na tela. RuleID é a regra que bateu, `anthropic-api-key`. File e Line dizem onde, e Commit, em que foto. As três últimas linhas, com o horário na frente, dizem quantos commits com conteúdo novo ele leu e quantos achados teve. Repare no "2 commits scanned": o Gitleaks só conta commits que acrescentam conteúdo. Aqui os dois contam, porque o segundo acrescentou o `.gitignore`; no mesmo teste, um segundo commit que só tirava o `.env`, sem acrescentar nada, deu "1 commits scanned". O modo `dir`, com `gitleaks dir . --redact --verbose --no-banner`, achou a mesma chave no `.env` que continuava no disco:'],
      ['saida', 'Finding:     ANTHROPIC_API_KEY=REDACTED\nSecret:      REDACTED\nRuleID:      anthropic-api-key\nEntropy:     5.402674\nFile:        .env\nLine:        1\nFingerprint: .env:anthropic-api-key:1\n\n8:16PM INF scanned ~145 bytes (145 bytes) in 7.8ms\n8:16PM WRN leaks found: 1'],
      ['p', 'Agora o limite, que é o que importa. O Gitleaks pega o que bate **exatamente** com o padrão de cada regra. A regra da Anthropic espera um formato exato: `sk-ant-api03-` seguido de 93 caracteres e `AA`, 108 no total. No mesmo dia, uma chave falsa de tamanho errado, num `.env` também commitado, passou pelos dois modos com `no leaks found`: chave cortada ao copiar, ou fora do formato, passa em branco. Gitleaks é uma rede, não uma garantia. Por isso, além dos dois modos, procure o começo da chave no histórico com `git log --all -S "sk-ant-" --oneline`, que lista os commits em que aquele texto entrou ou saiu, de qualquer tamanho; sem o `--all`, ele só olha a branch atual. No teste, ele listou na hora os dois commits onde a chave esteve. A aula 11.9 monta um roteiro completo de auditoria.'],
      ['p', 'Uma armadilha do modo `git`: fora de um repositório, ele reclama e mesmo assim termina dizendo que não achou nada. Esta é a saída real numa pasta sem Git:'],
      ['saida', '3:03PM ERR [git] fatal: not a git repository (or any of the parent directories): .git\n3:03PM ERR error="stderr is not empty"\n3:03PM INF 0 commits scanned.\n3:03PM INF scanned ~0 bytes (0) in 187ms\n3:03PM INF no leaks found'],
      ['p', 'O "0 commits scanned" entrega: ele não olhou foto nenhuma. Antes de comemorar um "no leaks found", confira se o número de commits faz sentido.'],
      ['p', 'Mais uma defesa, específica do Claude Code: ele pode ler o `.env` se ninguém impedir. Para dificultar a leitura direta, peça a ele: "adicione às minhas configurações uma regra deny para `Read(./.env)`". Duas consequências, pela documentação de permissões: a regra de leitura também bloqueia as ferramentas do Claude que editam e criam arquivos nesse caminho, então crie o `.env` antes de pôr a regra, ou crie você mesmo; e não acrescente `Read(./.env.*)`, porque esse padrão pega também o `.env.example`, o modelo sem chave que muitos projetos usam. A regra vale para as ferramentas de leitura do próprio Claude e para comandos que ele reconhece, como `cat`; não vale para um {{script}}. Um programa em Python que abre o `.env` por conta própria continua lendo, e é justamente para isso que o `.env` existe. A aula 7.4 explica essas regras.'],
      ['h3', 'Regra 3: fora do site'],
      ['p', 'Esta é a regra mais difícil, porque site e servidor parecem a mesma coisa. Não são. Tudo o que está em uma página, inclusive o {{javascript|JavaScript}} dela, vai inteiro para o {{navegador}} de quem visita, e qualquer visitante consegue ler o código dela, inclusive um código "escondido" ou embaralhado. Se a chave estiver na página, ela está nas mãos de todo mundo. O lugar da chave é o servidor, onde o visitante não chega. Veja o caminho de uma pergunta em um site com IA, como o tutor deste curso:'],
      ['tabela', {
        colunas: ['Etapa', 'Quem', 'O que acontece'],
        linhas: [
          ['1', 'Navegador', 'Recebe a página inteira. O visitante pode ler todo o código dela'],
          ['2', 'Página', 'Manda só a pergunta para uma {{funcao-servidor|função no servidor}}, sem chave nenhuma'],
          ['3', 'Servidor', 'Guarda a chave em uma variável de ambiente, longe do visitante. Junta a chave à pergunta e envia para a API'],
          ['4', 'API', 'Confere a chave, cobra da sua conta e responde ao servidor'],
          ['5', 'Página', 'Mostra a resposta. O visitante nunca viu a chave']
        ]
      }],
      ['p', 'Um detalhe que confunde: existe chave **pública** por desenho, feita para ir na página, e chave **secreta**, que nunca vai. Alguns serviços de {{banco-de-dados|banco de dados}}, como o Supabase, dão uma chave pública que só identifica o projeto; ela pode ficar no navegador, desde que o banco tenha regras dizendo quem lê e quem escreve o quê. Foi aí que o site Moltbook errou, segundo a empresa de segurança Wiz, em fevereiro de 2026: a chave pública estava na página, como pode estar, mas o banco estava sem essas regras, e quem tinha a chave conseguia ler os dados. Ficaram expostos cerca de 1,5 milhão de {{token-de-acesso|tokens}} de acesso e uns 35 mil e-mails. O fundador disse não ter escrito uma linha de código, o chamado {{vibe-coding|vibe coding}}. A aula 15.3 mostra como escrever a função do servidor, e a 15.4, como fechar o banco com essas regras.'],
      ['h3', 'Regra 4: com limite'],
      ['p', 'No Console, na página de faturamento (Billing), a seção Spend limits deixa você definir um limite de gasto por mês para a organização inteira; a recarga automática também fica em Billing. Os nomes das telas são os da documentação da Anthropic, conferida em 01/11/2026, e podem mudar. Para começar, deixe a recarga **desligada**: sem ela, o prejuízo para quando o crédito acaba, e, para quem tem créditos mensais de API pelo plano, eles viram o teto natural.'],
      ['p', 'Uma chave por projeto ajuda a trocar só aquela, se vazar, mas não separa o gasto: o limite vale para a organização ou para um {{workspace}}, e todas as chaves de um mesmo workspace dividem o mesmo limite. Para isolar o gasto, crie um workspace por projeto, com limite próprio, e a chave do projeto dentro dele; o workspace padrão, que já vem criado, não aceita limite de gasto. Um exemplo completo: você põe limite de US$ 10 no workspace do bot. No dia 20, um erro no programa faz ele repetir pedidos sem parar, e o gasto bate os US$ 10. A partir daí, os pedidos daquele workspace voltam com um erro de limite, até o mês virar ou até você subir o limite; os outros projetos continuam funcionando, e o prejuízo parou em US$ 10.'],
      ['p', 'Num site com IA, ponha também na função do servidor um limite de pedidos por pessoa, para um visitante sozinho não gastar o mês inteiro; a aula 15.3 mostra como. E olhe o uso por chave de vez em quando: gasto em um dia em que você não usou é sinal de vazamento.'],
      ['h3', 'Se vazar: a ordem certa'],
      ['p', '{{revogar|Revogar}} é cancelar a chave no Console, para ela deixar de funcionar. Vem **primeiro**, antes de mexer no código, antes de limpar o Git, porque enquanto a chave vale alguém pode estar gastando. É a orientação da própria Anthropic. Depois: criar uma chave nova, trocar nos programas que a usavam, conferir no painel se houve uso estranho, e só então, se ainda fizer sentido, limpar o histórico do Git, que é o passo que o GitHub recomenda quando um segredo já foi enviado. Apagar a linha do código e fazer outro commit não resolve nada, porque a chave continua nas fotos antigas.'],
      ['h3', 'Quando a regra muda'],
      ['p', 'O Claude Code, no uso normal, não usa chave de API: usa o login da sua assinatura, e o gasto sai do limite do plano. A chave entra quando você escreve um programa seu (aula 10.4), quando usa o {{agent-sdk|Agent SDK}} ou os {{managed-agents|Managed Agents}}, e no bot do projeto final. Uma coisa não muda nunca: a chave não se compartilha, nem com um amigo que quer "só testar". Cada pessoa cria a sua.'],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Como eu crio o arquivo .env?** É um arquivo de texto comum, chamado exatamente `.env`, na pasta do projeto, com a linha `ANTHROPIC_API_KEY=` e a chave colada depois do igual. Peça ao Claude para criar o arquivo vazio e colocá-lo no `.gitignore` antes do primeiro `git add`, e cole a chave você mesmo, no editor.',
        '**Tem como saber se alguém usou a minha chave?** Sim. O Console mostra o uso por dia e por chave. Gasto em dia estranho: revogue na hora.',
        '**E se eu colar a chave no chat do Claude por engano?** Trate como vazamento: revogue e crie outra. Conversa é texto guardado.',
        '**Posso usar a mesma chave em dois projetos?** Pode, mas não deve: se ela vazar por um, revogá-la para os dois. Uma por projeto, cada uma no workspace do seu projeto.',
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
          ['Em uma função no servidor, lida de uma variável de ambiente', 'Isso. O navegador só fala com a sua função, que acrescenta a chave.'],
          ['Em uma tabela do banco de dados, consultada pela página', 'Se a página consegue ler a tabela, o visitante também consegue. O banco não resolve.']
        ],
        c: 1
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'O Claude disse: "Coloquei a chave no .env e adicionei o .env ao .gitignore. Mesmo que o .env já esteja no último commit, agora está tudo seguro." Essa resposta está certa? Se não, o que está errado?',
        o: [
          ['O .gitignore não tira o que já foi commitado; a chave precisa ser revogada', 'Isso. Revogue a chave, crie outra, e tire o arquivo do Git com git rm --cached .env.'],
          ['Está correta: com o .env no .gitignore, o GitHub para de mostrar o arquivo', 'O .gitignore só vale para arquivo novo. O .env que já está num commit continua acompanhado, e a chave continua no histórico, à vista de quem tem acesso.'],
          ['Falta só apagar o .env do disco; sem o arquivo na pasta, o histórico fica limpo', 'Apagar do disco não mexe nas fotos antigas: a chave continua no histórico. O que resolve é revogar a chave, para ela deixar de valer.']
        ],
        c: 0
      }],
      ['h2', 'Coloque na ordem'],
      ['parsons', {
        p: 'Sua chave vazou em um repositório público. Coloque as providências na ordem que a Anthropic e o GitHub recomendam.',
        linhas: ['Revogar a chave antiga', 'Criar uma chave nova', 'Trocar a chave nos seus programas', 'Conferir o gasto no Console', 'Limpar o histórico do Git, se ainda precisar'],
        notas: ['Ela para de valer agora; programa parado é melhor que alguém gastando por você', 'Agora existe uma que vale', 'Eles voltam a funcionar', 'Depois de trocar, para ver se alguém usou a chave enquanto ela estava exposta', 'A chave já não vale nada, e muitas vezes isso nem é necessário']
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"O repositório é privado, então tudo bem."', 'Privado reduz o risco, mas qualquer pessoa ou ferramenta com acesso vê. E um dia ele pode virar público, com o histórico inteiro.'],
        ['"Apaguei a linha e fiz outro commit."', 'A chave continua no histórico. Revogue a chave primeiro.'],
        ['"É só para testar, depois eu tiro."', 'Robôs não esperam. Teste com a chave em variável de ambiente desde o primeiro minuto.'],
        ['"Criei o .env, então o programa já lê a chave."', 'O .env não é lido sozinho. O programa precisa de load_dotenv(), ou a variável precisa estar no sistema. Senão, KeyError.'],
        ['"O Gitleaks não achou nada, então não tem chave."', 'Ele só acha o que bate exatamente com o padrão de cada regra: no teste desta aula, uma chave de tamanho errado passou em branco. E fora de um repositório o modo git não olha nada. Procure também o começo da chave com git log --all -S "sk-ant-" --oneline.']
      ]],
      ['h2', 'Tente lembrar'],
      ['lembrar', {
        p: 'Quais são as quatro regras?',
        r: ['Fora do código: em variável de ambiente ou .env.', 'Fora do GitHub: .env no .gitignore antes do primeiro git add.', 'Fora do site: a chave fica no servidor.', 'Com limite de gasto, num workspace por projeto.']
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
        antes: 'Nos seus projetos, nada é alterado: é só olhar. O laboratório precisa do Gitleaks, e o passo 1 instala o programa pelo {{winget}}; se ele já estiver instalado, o winget avisa e nada muda. Depois você roda o Gitleaks numa pasta de projeto sua, nos dois modos, e lê o resultado. Se ainda não tem nenhum repositório, faça depois da aula 3.3. Os comandos são para colar no PowerShell, que se abre pelo menu Iniciar: tecla Windows, PowerShell, Enter. Este laboratório pratica a regra 2; as regras 1, 3 e 4 se praticam nas aulas 10.3, 15.3 e 10.2.',
        passos: [
          { faz: 'Instale o Gitleaks: cole este comando no PowerShell, aberto pelo menu Iniciar.', cola: 'winget install Gitleaks.Gitleaks', espera: 'É a original? O id Gitleaks.Gitleaks do winget aponta para github.com/gitleaks/gitleaks, o projeto conhecido. O winget pode perguntar se você aceita os termos da fonte; se não perguntar, a instalação já começa.' },
          { faz: 'Se o winget perguntar se você aceita os termos, digite Y e aperte Enter.', espera: 'A instalação segue. No fim, aparece "Successfully installed", ou um aviso de que já estava instalado. Se ele não perguntou, só marque este passo.' },
          { faz: 'Feche essa janela do PowerShell.', espera: 'A janela fecha. O Gitleaks só é reconhecido em terminais abertos depois da instalação.' },
          { faz: 'No {{explorador}}, abra a pasta do projeto.', espera: 'Aparecem os arquivos do projeto. Se ligou a exibição de itens ocultos, também a pasta .git.' },
          { faz: 'Clique com o botão direito num espaço vazio da pasta e escolha "Abrir no Terminal".', espera: 'Abre o PowerShell já dentro da pasta do projeto, com o caminho dela antes do cursor.' },
          { faz: 'Confira se o Gitleaks está instalado:', cola: 'gitleaks version', saida: '8.30.1', espera: 'Aparece um número de versão, como 8.30.1. Se aparecer uma mensagem com "is not recognized", veja o "Se der errado".' },
          { faz: 'Varra os arquivos da pasta, com os segredos mascarados:', cola: 'gitleaks dir . --redact --verbose --no-banner', espera: 'No fim, uma linha com o horário e "no leaks found" ou "leaks found: N". Com achados, cada um mostra a regra (RuleID), o arquivo (File) e a linha (Line), e o segredo aparece como REDACTED, como na saída da Regra 2.' },
          { faz: 'Varra também o histórico do Git:', cola: 'gitleaks git . --redact --verbose --no-banner', espera: 'A mesma saída, agora com Commit, Author e Date em cada achado. A linha "N commits scanned" diz quantos commits com conteúdo novo ele leu, por isso pode ser menor que o total de commits; se for 0, ele não olhou nada.' },
          { faz: 'Procure o começo de uma chave da Anthropic no histórico:', cola: 'git log --all -S "sk-ant-" --oneline', espera: 'Nada, no melhor caso. O `--all` faz ele olhar todas as branches, não só a atual. Se aparecer um commit, a chave esteve ali: siga a ordem da seção "Se vazar".' },
          { faz: 'Leia o RuleID e o File de cada achado, para decidir se é seu.', espera: 'Com `--redact`, o valor não aparece, então quem decide é o arquivo e a regra. Achado dentro de `.venv` ou de `node_modules` é de uma biblioteca instalada, não seu. Achado num arquivo seu, como `.env` ou `app.py`, com uma regra de chave, como `anthropic-api-key`, é para levar a sério. Se nada foi achado, só marque este passo.' },
          { faz: 'Se algum achado num arquivo seu parece uma chave real, revogue-a no Console antes de qualquer outra coisa.', espera: 'A chave antiga para de funcionar, e o achado deixa de ser perigoso. Se não houve achado seu, só marque este passo.' }
        ],
        errado: 'se aparecer uma mensagem com `is not recognized` (em português, "não é reconhecido"; o resto do texto muda de uma versão do PowerShell para outra), o terminal foi aberto antes da instalação, ou a instalação do passo 1 não terminou. Feche o terminal e abra de novo; se continuar, repita o passo 1 e abra o terminal outra vez. Se o modo git mostrar `ERR [git] fatal: not a git repository` e depois `0 commits scanned` e `no leaks found`, a pasta não é um repositório: ele não olhou nada, e esse "no leaks found" não vale. Abra o terminal na pasta certa, a que tem a pasta escondida .git. Se preferir, peça ao Claude Code: "rode gitleaks dir e gitleaks git nesta pasta com --redact, não altere nada, e me diga o tipo, o arquivo e a linha de cada achado, sem nunca mostrar o valor"; se ele pedir permissão, aceite. Não cole a chave no chat.'
      }],
      ['h2', 'Laboratório quebrado'],
      ['quebrado', {
        titulo: 'Laboratório quebrado',
        texto: 'Alguém criou o .env com a chave certa, salvou o programa abaixo como app.py, na pasta do projeto, e rodou com `python app.py`. O Python respondeu com o erro em seguida. Descubra o motivo antes de ver a causa.',
        cola: 'import os\nimport anthropic\n\ncliente = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])',
        saida: 'Traceback (most recent call last):\n  File "C:\\Users\\SeuNome\\projeto\\app.py", line 4, in <module>\n    cliente = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])\n                                          ~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^\n  File "<frozen os>", line 714, in __getitem__\nKeyError: \'ANTHROPIC_API_KEY\'',
        dica: 'Leia o Traceback de baixo para cima: a última linha diz o que faltou, e a linha de `~` e `^` aponta o trecho exato. A chave está certa e o .env existe; compare o programa com o código de "Preveja antes de ver".',
        resposta: 'Falta carregar o .env. O arquivo não é lido sozinho: o programa precisa de `from dotenv import load_dotenv` e `load_dotenv()` antes de pedir a variável. A última linha, KeyError, quer dizer que o sistema não tinha nenhuma variável com aquele nome. A linha de `~` e `^` fica embaixo de `os.environ["ANTHROPIC_API_KEY"]`: foi ali, ao pedir a variável, que o erro aconteceu. As linhas de cima são o caminho até o erro: o arquivo app.py, linha 4, e depois um trecho interno do Python, o `<frozen os>`, que você não precisa abrir.'
      }],
      ['fontes', [
        ['Melhores práticas de chave de API, Anthropic', 'https://support.claude.com/pt/articles/9767949-melhores-praticas-de-chave-de-api-mantenha-suas-chaves-seguras-e-protegidas', 'oficial', '31/10/2026', 'pt'],
        ['O que devo fazer se suspeitar que minha chave de API foi comprometida?, Anthropic', 'https://support.claude.com/pt/articles/8384961-o-que-devo-fazer-se-suspeitar-que-minha-chave-de-api-foi-comprometida', 'oficial', '01/11/2026', 'pt'],
        ['Sobre a verificação de segredos, GitHub', 'https://docs.github.com/pt/code-security/concepts/secret-security/secret-scanning', 'oficial', '31/10/2026', 'pt'],
        ['Gitleaks (regra anthropic-api-key, testada com chave falsa de formato certo)', 'https://github.com/gitleaks/gitleaks', 'comunidade', '01/11/2026'],
        ['Moltbook: banco exposto sem regras de acesso, Wiz (blog técnico de empresa de segurança, fevereiro de 2026)', 'https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys', 'comunidade', '01/11/2026'],
        ['Créditos de API para os planos Max, Ultra e Team (um workspace por projeto para limitar o gasto), Anthropic', 'https://platform.claude.com/docs/pt-BR/about-claude/api-credits-for-subscribers', 'oficial', '01/11/2026', 'pt'],
        ['Limites de taxa e de gastos (Spend limits; limite de workspace e o erro ao atingi-lo), Anthropic', 'https://platform.claude.com/docs/pt-BR/api/rate-limits', 'oficial', '01/11/2026', 'pt'],
        ['Workspaces (chaves e limites próprios; o padrão não aceita limite de gasto), Anthropic', 'https://platform.claude.com/docs/pt-BR/manage-claude/workspaces', 'oficial', '01/11/2026', 'pt'],
        ['Removendo dados confidenciais de um repositório (revogar primeiro), GitHub', 'https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository', 'oficial', '01/11/2026', 'pt'],
        ['python-dotenv no PyPI', 'https://pypi.org/project/python-dotenv/', 'oficial', '01/11/2026'],
        ['dotenv no PyPI (0.9.9, "Deprecated package", de outro dono; só depende do python-dotenv)', 'https://pypi.org/pypi/dotenv/json', 'oficial', '02/11/2026'],
        ['Configurar permissões: o que as regras Read cobrem (e que também bloqueiam Edit e Write), Claude Code', 'https://code.claude.com/docs/pt/permissions', 'oficial', '01/11/2026', 'pt']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['Num repositório privado, a chave pode ficar no código, desde que só você tenha acesso', 'O risco diminui, mas continua: o acesso pode mudar, e o projeto pode virar público com o histórico inteiro.'],
      ['Quando uma chave vaza, o primeiro passo é apagar a linha e limpar o histórico do Git', 'Primeiro, revogue a chave: enquanto ela vale, alguém pode estar gastando. Limpar o histórico vem por último, se ainda precisar.'],
      ['A chave fica fora do código, fora do GitHub e fora do site, e tem limite de gasto', 'Isso. São as quatro regras.']
    ], c: 2 },
    prova: [
      { p: 'Você vai começar um projeto que usa uma chave. O que precisa vir antes do primeiro git add?', o: [
        ['Fazer o primeiro commit e, logo depois, criar o .gitignore', 'Aí o .env já entrou na foto, e o .gitignore só vale para arquivo novo: a chave continua acompanhada.'],
        ['Deixar o repositório privado, que já esconde o .env de todos', 'Privado não esconde de quem tem acesso, e o .env continua no histórico. A lista certa vem antes.'],
        ['Pôr o .env no .gitignore, para ele nunca entrar numa foto', 'Isso. O .gitignore só vale para arquivo novo, então ele vem antes do primeiro git add.']
      ], c: 2 },
      { p: 'Você criou o .env com a chave certa, e o programa deu KeyError. Qual é a causa mais provável?', o: [
        ['O programa não carregou o .env: falta o load_dotenv()', 'Isso. O .env não é lido sozinho: sem load_dotenv(), ou sem a variável definida no sistema, o Python não acha o nome.'],
        ['A chave está errada ou já foi revogada no Console', 'Chave errada ou revogada dá erro na hora de falar com a API, e não KeyError. KeyError quer dizer que o nome nem foi encontrado.'],
        ['O .env está no .gitignore, e o Python não lê arquivos ignorados', 'O .gitignore só vale para o Git; o Python nem sabe que ele existe. O que falta é carregar o .env.']
      ], c: 0 }
    ],
    tutor: [
      ['Como eu crio o arquivo .env?', 'É um arquivo de texto comum, chamado exatamente .env, na pasta do projeto, com uma linha ANTHROPIC_API_KEY= seguida da chave. O mais importante: coloque .env no .gitignore antes do primeiro git add. Cuidado, porque o Bloco de Notas pode salvar como .env.txt, e esse nome a lista não pega. É mais fácil pedir ao Claude para criar o arquivo vazio, e você cola a chave.'],
      ['Tem como saber se alguém usou minha chave?', 'Sim. O Console mostra o uso por dia e por chave. Se aparecer gasto em um dia que você não usou, revogue a chave na hora e crie outra.'],
      ['O que é load_dotenv()?', 'Uma função da biblioteca python-dotenv que lê o arquivo .env da pasta e coloca cada linha como variável de ambiente, para o programa achar com os.environ. Sem ela, o .env fica só no disco e o programa dá KeyError.']
    ]
  }
};
