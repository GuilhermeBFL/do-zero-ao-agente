// Módulo 7. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "7-1": {
    "tempo": 42,
    "video": "a7-1",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você usa o {{claude-code|Claude Code}} há meses, mas talvez nunca tenha visto onde ele mora no seu PC, como ele se atualiza ou o que acontece entre você apertar Enter e ele responder \"pronto\". Esta aula abre a caixa: o que a instalação deixou no disco, como começa uma sessão e os três atalhos que transformam um pedido solto num pedido preciso.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 0.0 ensinou o mínimo para seguir os laboratórios: abrir o Claude Code numa {{pasta}}, colar um pedido, conferir e sair. Este módulo é o Claude Code inteiro, e começa pelo chão: o que a instalação deixou no seu PC, como ele se atualiza sozinho (ou não) e o que acontece, por dentro, entre você digitar `claude` no {{terminal}} e ele dizer que terminou."
      ],
      [
        "p",
        "Isso resolve problemas práticos. Quando o terminal diz que não reconhece `claude`, ou quando um recurso anunciado não aparece no seu, a causa quase sempre está num destes três lugares: o {{path|PATH}}, o jeito como você instalou, ou uma sessão aberta antes da atualização. E quando o mesmo pedido dá respostas diferentes em pastas diferentes, a explicação está no que ele carrega ao abrir em cada pasta."
      ],
      [
        "p",
        "A segunda metade é sobre conversar melhor: três atalhos, `@`, `!` e Esc, que deixam o pedido exato e o controle na sua mão, e um jeito de ver cada passo que ele deu. Tudo isso vale do mesmo jeito para qualquer projeto seu, de um guia de estudo a uma página de vendas."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao estagiário da aula 0.0. A instalação é a contratação: acontece uma vez, e ele ganha uma mesa no prédio, onde guarda as ferramentas dele (os arquivos do programa), e um crachá, que é o login na sua conta. Cada {{sessao|sessão}} é um expediente: ele entra numa sala (a pasta em que você abriu o Claude Code), lê os avisos pregados na parede dessa sala, trabalha nas tarefas que você passa e vai embora quando você manda. No expediente seguinte, a conversa de ontem não está na cabeça dele; o que sobrou do dia anterior é o que ficou escrito: os arquivos na mesa e os avisos na parede."
      ],
      [
        "quebra",
        "Um estagiário de verdade lembra do dia anterior; o Claude Code não lembra sozinho, mas grava cada conversa no disco, e você pode retomá-la, como a aula 7.16 mostra. O crachá também não fica com ele: o login fica guardado no seu usuário do Windows. E a contratação não acontece uma vez só: o programa se atualiza sozinho, várias vezes por semana, então o estagiário de amanhã pode chegar com ferramentas que o de hoje não tinha."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O que a instalação deixou no seu PC"
      ],
      [
        "p",
        "O instalador oficial para Windows, o mesmo `irm https://claude.ai/install.ps1 | iex` da aula 0.0, grava o {{programa}} num lugar só seu, sem pedir administrador: o arquivo `claude.exe` fica em `C:\\Users\\SeuNome\\.local\\bin`. É por isso que essa pasta precisa estar no PATH, a lista de pastas onde o Windows procura um programa pelo nome. O {{comando}} `Get-Command` pergunta ao Windows onde ele acha um programa, sem abrir o programa. No PC em que esta aula foi escrita, em 08/11/2026, a resposta real foi esta:"
      ],
      [
        "saida",
        "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nApplication     claude.exe                                         2.1.314.0  C:\\Users\\SeuNome\\.local\\bin\\claude.exe"
      ],
      [
        "p",
        "A coluna Version mostra a {{versao|versão}} do arquivo, 2.1.314, e Source mostra o {{caminho}} completo. Perto dali, o instalador mantém a pasta `C:\\Users\\SeuNome\\.local\\share\\claude\\versions`, com algumas versões já baixadas; no mesmo PC, havia três: 2.1.308, 2.1.309 e 2.1.314."
      ],
      [
        "p",
        "Duas outras coisas aparecem na primeira vez que você usa o programa: a pasta `C:\\Users\\SeuNome\\.claude`, com configurações, conversas guardadas e {{skill|skills}}, e o arquivo `C:\\Users\\SeuNome\\.claude.json`, que o próprio programa escreve com o estado da sua conta e dos projetos, e que você não edita. A pasta `.claude` volta em quase todas as aulas deste módulo."
      ],
      [
        "p",
        "Quando não mexer: nada dessas pastas se apaga para \"limpar\". A página oficial de instalação avisa que apagar a `.claude` leva junto as configurações, as permissões que você deu e o histórico das conversas."
      ],
      [
        "h3",
        "Três jeitos de instalar, e como cada um se atualiza"
      ],
      [
        "lista",
        [
          "**Instalador nativo**, o recomendado: o comando da aula 0.0. Ele procura atualizações quando o Claude Code abre e de tempos em tempos, baixa em segundo plano, e a versão nova passa a valer na próxima vez que você abrir. Para forçar na hora, `claude update`.",
          "**{{winget|WinGet}}**: `winget install Anthropic.ClaudeCode`. Não se atualiza sozinho: você precisa rodar `winget upgrade Anthropic.ClaudeCode` de tempos em tempos.",
          "**{{app-desktop|App desktop}}**: o app do Claude já traz o Claude Code dentro, na aba Code. Quem não quer terminal pode ficar só com ele."
        ]
      ],
      [
        "p",
        "Um detalhe que engana: a atualização só vale quando o programa abre de novo. Uma sessão que fica aberta por dias continua na versão em que começou. No PC desta aula, o arquivo instalado era o 2.1.314, de 30/10/2026, enquanto o {{changelog}} já estava na 2.1.319, de 06/11/2026: cinco versões em oito dias. Se um recurso novo não aparece no seu, feche, abra de novo e confira a versão."
      ],
      [
        "p",
        "Ter dois jeitos instalados ao mesmo tempo atrapalha: o Windows usa o primeiro `claude` que acha no PATH, e você pode estar atualizando o outro. O comando `where.exe claude` lista todos os que o Windows enxerga. Com uma instalação só, aparece uma linha:"
      ],
      [
        "saida",
        "C:\\Users\\SeuNome\\.local\\bin\\claude.exe"
      ],
      [
        "h3",
        "Instale só a partir do endereço oficial"
      ],
      [
        "p",
        "Em março de 2026, a empresa de segurança Push Security descreveu um golpe que chamou de {{installfix|InstallFix}}: páginas quase idênticas à de instalação do Claude Code, divulgadas como anúncio pago no Google para quem buscava \"Claude Code install\". A única diferença era o comando de instalação, que baixava um programa de outro {{servidor}}. No Windows, esse programa era feito para roubar senhas guardadas no {{navegador}}, cookies e sessões abertas. O comando parecia o oficial, e quem colava não percebia."
      ],
      [
        "p",
        "A regra que protege: o comando de instalação sai da documentação oficial, em `code.claude.com`, que você mesmo digitou na barra de endereço, nunca de um resultado patrocinado nem de um vídeo. O comando oficial baixa de `claude.ai`; um `irm` que aponta para qualquer outro endereço não é o oficial. Vale também para reinstalar num PC novo."
      ],
      [
        "h3",
        "Git for Windows: opcional, mas muda o terminal que ele usa"
      ],
      [
        "p",
        "No Windows, o Claude Code roda comandos por duas {{ferramenta|ferramentas}}. Sem o {{git|Git}} instalado, ele usa a ferramenta {{powershell|PowerShell}}. Com o Git for Windows, que traz o {{git-bash|Git Bash}}, ele ganha também a ferramenta Bash, e a documentação diz que, com as duas ligadas, o PowerShell é tratado como o terminal principal. Por isso a mesma tarefa pode aparecer no seu PC como `Remove-Item` numa vez e `rm` em outra, com regras de segurança diferentes, como a aula 0.0 contou. Para saber se você tem o Git, `Get-Command git` responde com o caminho dele ou com um erro."
      ],
      [
        "h3",
        "O que acontece quando você digita claude"
      ],
      [
        "p",
        "Ao abrir, antes de você escrever qualquer coisa, ele monta o ponto de partida da sessão. Lê os arquivos de configuração, o do seu usuário e o da pasta. Se é a primeira vez naquela pasta, pergunta se você confia nela, porque uma pasta pode trazer configurações próprias. Carrega as instruções escritas para ele, os arquivos {{claude-md|CLAUDE.md}} da pasta e das pastas acima, que a aula 7.5 explica, e a lista de skills e conexões disponíveis. Então mostra o cabeçalho, com a versão, o {{modelo}} e a pasta, e, na linha de baixo, o modo de permissão. É por isso que o mesmo pedido pode sair diferente em duas pastas: o ponto de partida mudou."
      ],
      [
        "p",
        "Depois que você pede, ele trabalha num ciclo que a documentação em português chama de reunir contexto, agir e verificar: lê o que precisa, usa uma ferramenta, confere o resultado e decide o próximo passo, até terminar. Cada uso de ferramenta aparece na tela como uma linha curta, com o nome da ferramenta e o arquivo ou o comando. O atalho Ctrl+O abre o visualizador da conversa, com os detalhes de cada passo e o modelo de cada resposta; Esc fecha."
      ],
      [
        "h3",
        "Três atalhos que mudam o pedido"
      ],
      [
        "lista",
        [
          "**`@` aponta um arquivo.** Digite `@` e as primeiras letras, e aparece uma lista com os arquivos da pasta; Tab aceita. O arquivo entra na conversa, e não há dúvida sobre qual é: \"leia @aula2.txt\" vale mais que \"leia a aula de juros\" quando há três arquivos parecidos.",
          "**`!` roda um comando seu.** `! ls` roda o comando direto, sem passar pelo Claude, mostra a saída e a coloca na conversa; em seguida o Claude responde ao que apareceu, e essa resposta gasta como um pedido normal. No Windows com o Git instalado, o `!` usa o Git Bash; por isso os exemplos usam `ls`, que existe nos dois terminais.",
          "**Esc interrompe.** Ele para no meio do passo e mantém o que já fez, para você corrigir a direção. Esc duas vezes com a caixa vazia abre o menu de voltar atrás, assunto da aula 7.15; Ctrl+C limpa o que você digitou e, apertado de novo com a caixa vazia, fecha o Claude Code."
        ]
      ],
      [
        "p",
        "Mais três ajudam: Shift+Enter quebra a linha sem enviar, no Windows Terminal (em qualquer terminal, uma barra invertida seguida de Enter faz o mesmo); `?` com a caixa vazia mostra a lista de atalhos; e você pode digitar enquanto ele trabalha, porque a mensagem entra numa fila e é entregue no próximo momento livre. A aula 7.19 mostra como personalizar atalhos."
      ],
      [
        "h3",
        "Outras portas para a mesma sessão"
      ],
      [
        "p",
        "Desde a versão 2.1.285, de 29/09/2026, `claude --desktop` abre o app desktop já na pasta em que o terminal está, sem começar uma sessão no terminal. E `/desktop`, dentro de uma sessão, continua a mesma conversa no app; no Windows, exige um PC x64 e uma assinatura. Para conhecer recursos sem ler documentação, `/powerup` traz lições curtas e interativas, com demonstrações animadas, dentro do próprio Claude Code."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso reinstalar para seguir este módulo?** Não. Se `Get-Command claude` mostra uma versão, você já tem. Só confira com `where.exe claude` se não há duas instalações.",
          "**Custa algo instalar ou atualizar?** Não. Baixar é grátis; o uso é que sai do plano, como a aula 0.0 explicou.",
          "**Como vejo a versão sem abrir o Claude Code?** `Get-Command claude` mostra na coluna Version. Com ele aberto, a versão aparece no cabeçalho.",
          "**E se uma atualização quebrar algo?** Dá para trocar para o canal estável, com versões de cerca de uma semana antes; a caixa \"Para ir mais fundo\" mostra como, e a aula 7.18 trata de diagnóstico.",
          "**Posso usar o PowerShell com o Claude Code aberto?** Pode, numa segunda aba do terminal (Ctrl+Shift+T no Windows Terminal), ou pelo `!` dentro da sessão."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: canal de atualização, atualização pelo WinGet e desinstalar",
          "blocos": [
            [
              "p",
              "**Canal estável.** A configuração `autoUpdatesChannel` escolhe entre `latest`, o padrão, com versões assim que saem, e `stable`, com uma versão de cerca de uma semana atrás que pula as que tiveram problemas graves. Muda em `/config`, na opção do canal de atualização automática, ou no {{settings-json|settings.json}}. Ao trocar de `latest` para `stable`, ele pergunta se você quer ficar na versão atual ou voltar a uma mais antiga; ficar grava um piso, `minimumVersion`."
            ],
            [
              "p",
              "**Desligar a atualização automática.** A {{variavel|variável}} `DISABLE_AUTOUPDATER` com valor `1`, no bloco `env` do settings.json, para a busca em segundo plano; `claude update` continua funcionando. Não é recomendado: as atualizações trazem correções de segurança."
            ],
            [
              "p",
              "**WinGet que se atualiza.** Com a variável `CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE` em `1`, o Claude Code roda o `winget upgrade` por você, em segundo plano. No Windows, a atualização pode falhar com o programa aberto, porque o Windows trava o arquivo em uso; nesse caso, ele mostra o comando para você rodar."
            ],
            [
              "p",
              "**App desktop antigo tomando o comando.** Uma versão antiga do app desktop podia registrar um `Claude.exe` que vinha antes no PATH, e digitar `claude` abria o app. A documentação manda atualizar o app."
            ],
            [
              "p",
              "**Desinstalar.** A página oficial de instalação traz os comandos de cada jeito de instalar. Eles apagam pastas: leia antes de rodar, e lembre que apagar a `.claude` leva configurações e conversas."
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
          "pergunta": "O que você acha que este comando mostra no terminal? Ele não abre o Claude Code: só pergunta ao Windows onde está o programa.",
          "codigo": "Get-Command claude",
          "linguagem": "powershell",
          "resposta": "Uma tabela de uma linha: `Application` (é um programa), o nome `claude.exe`, a versão do arquivo e o caminho completo, em `C:\\Users\\SeuNome\\.local\\bin`. A sua versão pode ser outra. Se o nome estiver errado, ou se o programa não estiver no PATH, o PowerShell responde com o erro de termo não reconhecido, o mesmo da aula 0.0. Use os botões para ver as outras respostas reais.",
          "vivo": [
            [
              "Trocar claude por git",
              "Get-Command git",
              "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nApplication     git.exe                                            2.54.0.1   C:\\Program Files\\Git\\cmd\\git.exe"
            ],
            [
              "Errar uma letra",
              "Get-Command claud",
              "Get-Command : The term 'claud' is not recognized as the name of a cmdlet, function, script file, or operable program. \nCheck the spelling of the name, or if a path was included, verify that the path is correct and try again.\nAt line:1 char:1\n+ Get-Command claud\n+ ~~~~~~~~~~~~~~~~~\n    + CategoryInfo          : ObjectNotFound: (claud:String) [Get-Command], CommandNotFoundException\n    + FullyQualifiedErrorId : CommandNotFoundException,Microsoft.PowerShell.Commands.GetCommandCommand"
            ],
            [
              "Voltar ao original",
              "Get-Command claude",
              "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nApplication     claude.exe                                         2.1.314.0  C:\\Users\\SeuNome\\.local\\bin\\claude.exe"
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
          "p": "Você instalou o Claude Code pelo WinGet há três meses e nunca mais mexeu. O que aconteceu com as atualizações?",
          "o": [
            [
              "Ele se atualizou sozinho em segundo plano, como toda instalação",
              "Quem se atualiza sozinho é o instalador nativo. Pelo WinGet, a atualização depende de você rodar o winget upgrade."
            ],
            [
              "Nada, até você rodar winget upgrade Anthropic.ClaudeCode",
              "Isso. Instalação pelo WinGet não se atualiza sozinha; você roda o comando de tempos em tempos, ou liga a variável da caixa \"Para ir mais fundo\"."
            ],
            [
              "Ele atualizou a cada vez que o Windows foi reiniciado",
              "Reiniciar o Windows não atualiza o Claude Code. Pelo WinGet, só o winget upgrade traz a versão nova."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Digitei ! ls dentro do Claude Code. Isso gasta do meu limite?\" O Claude respondeu: \"Não gasta nada. O ! roda o comando direto no terminal, sem passar pelo modelo, e a saída aparece só na tela, para você ler.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o ! roda sem o modelo, então não custa nada",
              "O comando roda sem o modelo, mas a saída entra na conversa e o Claude responde a ela, e essa resposta gasta como um pedido."
            ],
            [
              "A saída entra na conversa, e o Claude responde, o que gasta do limite",
              "Isso. O comando em si não passa pelo modelo, mas a resposta automática do Claude à saída custa como um pedido normal."
            ],
            [
              "O erro é outro: o ! não roda comandos, só abre a lista de atalhos",
              "Quem abre a lista de atalhos é o ? com a caixa vazia. O ! roda o comando e põe a saída na conversa."
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
            "\"Atualizou ontem, então a minha sessão já está na versão nova.\"",
            "A atualização baixa em segundo plano e só vale quando o Claude Code abre de novo. Uma sessão aberta há dias continua na versão antiga."
          ],
          [
            "\"Instalei pelo WinGet, então está sempre em dia.\"",
            "O WinGet não atualiza sozinho. Rode winget upgrade Anthropic.ClaudeCode de tempos em tempos, ou use o instalador nativo."
          ],
          [
            "\"Peguei o comando de instalação no primeiro resultado da busca.\"",
            "O primeiro resultado pode ser um anúncio falso, como no golpe InstallFix. Copie o comando da documentação em code.claude.com, digitando o endereço você mesmo."
          ],
          [
            "\"Escrevi o nome do arquivo por alto e ele vai achar.\"",
            "Com arquivos parecidos, ele pode pegar o errado. O @ com a lista de sugestões deixa o arquivo exato na conversa."
          ],
          [
            "\"Apertei Esc e perdi tudo o que ele tinha feito.\"",
            "O Esc interrompe e mantém o que já foi feito. Para desfazer de verdade, a aula 7.15 mostra o /rewind e os limites dele."
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
          "p": "Como cada jeito de instalar o Claude Code se atualiza?",
          "r": [
            "Instalador nativo: sozinho, em segundo plano; vale na próxima vez que você abre.",
            "WinGet: só quando você roda winget upgrade Anthropic.ClaudeCode.",
            "claude update força a atualização na hora, no instalador nativo."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que fazem o @, o ! e o Esc dentro do Claude Code?",
          "r": [
            "@ aponta um arquivo exato, com a lista de sugestões.",
            "! roda um comando seu, põe a saída na conversa, e o Claude responde.",
            "Esc interrompe o que ele está fazendo, sem desfazer o que já fez."
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
          "titulo": "Um pedido real numa pasta de estudo",
          "lugar": "No PC, com o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai conferir a sua instalação sem abrir o Claude Code, criar uma pasta com três anotações curtas de aula e, numa sessão, usar o `@` para apontar um arquivo, o `!` para rodar um comando, fazer um pedido real e ver os passos que ele deu. Precisa do Claude Code instalado, como a aula 0.0 ensina. Pelo app: no app desktop, crie a pasta e as anotações com os passos 4 e 5 no terminal, abra a pasta pela aba Code, ambiente Local, e faça os pedidos dos passos 10 e 12; o `@` funciona igual. Os comandos dos passos 2 a 6 foram rodados de verdade no PowerShell 5.1, em 08/11/2026. A sessão do Claude Code, do passo 7 em diante, não foi testada antes de publicar, e as frases dele no seu PC vão variar.",
          "naoTestado": "A sessão do Claude Code (passos 7 a 15) não foi rodada para escrever esta aula: exige o Claude Code interativo com login, e rodar o programa no PC do teste usaria a conta e as configurações do dono. Os nomes de tela e o comportamento do @, do ! e do Ctrl+O vêm da documentação oficial (modo interativo, conferida em 08/11/2026). Os passos 2 a 6 foram rodados de verdade no PowerShell 5.1 em 08/11/2026, com o Claude Code 2.1.314 instalado, numa pasta de teste.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal.",
              "espera": "Abre uma janela com uma linha parecida com PS C:\\Users\\SeuNome> e um cursor piscando."
            },
            {
              "faz": "Cole este comando e aperte Enter. Ele lista todos os claude que o Windows enxerga, sem abrir nenhum.",
              "cola": "where.exe claude",
              "saida": "C:\\Users\\SeuNome\\.local\\bin\\claude.exe",
              "espera": "Uma linha só, terminando em .local\\bin\\claude.exe. Duas linhas querem dizer duas instalações: veja \"Se der errado\"."
            },
            {
              "faz": "Cole este comando e aperte Enter.",
              "cola": "Get-Command claude",
              "saida": "CommandType     Name                                               Version    Source\n-----------     ----                                               -------    ------\nApplication     claude.exe                                         2.1.314.0  C:\\Users\\SeuNome\\.local\\bin\\claude.exe",
              "espera": "A tabela com a versão na coluna Version. A sua versão provavelmente é mais nova; o importante é aparecer um número."
            },
            {
              "faz": "Cole este comando, que cria a pasta de estudo e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\primeira-sessao | Out-Null; Set-Location C:\\Projetos\\primeira-sessao",
              "espera": "Nada é impresso, e o começo da linha muda para PS C:\\Projetos\\primeira-sessao>."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria três anotações curtas de aula, uma por arquivo. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "Set-Content -Encoding utf8 aula1.txt 'Juros simples: o juro de cada mês é calculado só sobre o valor inicial.'\nSet-Content -Encoding utf8 aula2.txt 'Juros compostos: o juro de cada mês entra no saldo e passa a render juro também.'\nSet-Content -Encoding utf8 aula3.txt 'Inflação: a alta geral dos preços, que corrói o valor do dinheiro parado.'",
              "espera": "Nada é impresso: os três arquivos foram gravados em silêncio."
            },
            {
              "faz": "Cole este comando para listar o que tem na pasta.",
              "cola": "Get-ChildItem -Name",
              "saida": "aula1.txt\naula2.txt\naula3.txt",
              "espera": "Os três nomes, um por linha."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre dentro do terminal."
            },
            {
              "faz": "Se aparecer a pergunta de confiança da pasta, confirme com Enter.",
              "espera": "A pergunta só aparece na primeira vez nesta pasta, que é sua e só tem as anotações. Depois dela, o Claude Code espera o seu pedido."
            },
            {
              "faz": "Antes de pedir qualquer coisa, leia o cabeçalho, no alto, e a linha de baixo da tela.",
              "espera": "No alto, a versão, o modelo e a pasta C:\\Projetos\\primeira-sessao. Embaixo, o modo de permissão, como auto mode on ou bypass permissions on. Se a pasta for outra, veja \"Se der errado\"."
            },
            {
              "faz": "Cole este pedido e aperte Enter. O @aula2.txt aponta o arquivo exato.",
              "cola": "Leia @aula2.txt e explique juros compostos com um exemplo: R$ 1.000 a 1% ao mês, por 3 meses. Não crie nenhum arquivo.",
              "espera": "Uma explicação que parte da frase da aula2.txt, com o saldo crescendo mês a mês e chegando perto de R$ 1.030,30 no terceiro mês. Nenhum arquivo novo."
            },
            {
              "faz": "Digite ! ls (o ponto de exclamação, um espaço e ls) e aperte Enter.",
              "cola": "! ls",
              "espera": "A lista dos três arquivos aparece na conversa, como saída de um comando, e logo depois o Claude comenta o que viu. No Git Bash, os nomes vêm numa linha só; sem o Git, vêm numa tabela do PowerShell."
            },
            {
              "faz": "Cole este pedido real. Se ele pedir permissão para criar o arquivo, aceite.",
              "cola": "Junte as três anotações num arquivo resumo.md, com um título por aula e uma pergunta de múltipla escolha no fim. No fim, me diga o caminho completo do arquivo.",
              "espera": "Ele lê os arquivos, cria o resumo.md e responde com o caminho C:\\Projetos\\primeira-sessao\\resumo.md. Na tela, cada ferramenta aparece numa linha curta."
            },
            {
              "faz": "Aperte Ctrl+O.",
              "espera": "Abre o visualizador da conversa, com os detalhes de cada passo: que arquivos ele leu, o que escreveu e qual modelo respondeu."
            },
            {
              "faz": "Aperte Esc para voltar à conversa.",
              "espera": "O visualizador fecha, e a caixa de texto volta."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha e a linha PS C:\\Projetos\\primeira-sessao> volta. O resumo.md continua na pasta: confira com Get-ChildItem -Name."
            }
          ],
          "errado": "se o passo 2 mostrar duas linhas, há duas instalações, por exemplo uma pelo WinGet e outra pelo instalador nativo, e o Windows usa a de cima; a página oficial de solução de problemas de instalação, na parte de instalações conflitantes, mostra como ficar com uma só, e vale ler antes de desinstalar qualquer uma. Se o passo 2 disser \"INFO: Could not find files for the given pattern(s).\", o claude não está no PATH: a seção \"Se der errado\" da aula 0.0 tem o conserto. Se o cabeçalho do passo 9 mostrar outra pasta, saia com /exit e repita o passo 4. Se o @aula2.txt não for reconhecido, apague a menção, digite @aula e escolha o arquivo na lista com Tab. Se o ! ls mostrar um erro, o terminal dele é outro: troque por ! dir. Se ele disser que um limite acabou, a mensagem diz a hora em que volta."
        }
      ],
      [
        "fontes",
        [
          [
            "Configuração avançada (instalação no Windows, WinGet, atualizações automáticas, canal de lançamento, claude update, desinstalar), Claude Code",
            "https://code.claude.com/docs/pt/setup",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Solucionar problemas de instalação (where.exe claude, instalações conflitantes, app desktop antigo no PATH), Claude Code",
            "https://code.claude.com/docs/pt/troubleshoot-install",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modo interativo (Esc, Ctrl+C, Ctrl+O, @, !, fila de mensagens, quebra de linha), Claude Code",
            "https://code.claude.com/docs/pt/interactive-mode",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code funciona (o ciclo reunir contexto, agir e verificar; ferramentas), Claude Code",
            "https://code.claude.com/docs/pt/how-claude-code-works",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência de ferramentas (ferramenta PowerShell, Git Bash, defaultShell para o !), Claude Code",
            "https://code.claude.com/docs/pt/tools-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência da CLI (claude --desktop, claude update, --version), Claude Code",
            "https://code.claude.com/docs/pt/cli-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/desktop, /powerup), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.285, de 29/09/2026: claude --desktop; 2.1.314 a 2.1.319, de 30/10 a 06/11/2026; sem versão em português)",
            "https://code.claude.com/docs/en/changelog",
            "oficial",
            "08/11/2026"
          ],
          [
            "InstallFix: páginas falsas de instalação do Claude Code divulgadas por anúncio, Push Security (06/03/2026, atualizado em 16/03/2026)",
            "https://pushsecurity.com/blog/installfix",
            "imprensa",
            "08/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Ele mora em .local\\bin, se atualiza ao reabrir, e cada sessão parte da pasta aberta",
          "Isso. Saber onde ele está, como chega a versão nova e o que ele carrega ao abrir explica a maioria dos problemas."
        ],
        [
          "A instalação acontece uma vez e nunca muda; só a sessão se renova a cada novo dia de trabalho",
          "O programa se atualiza várias vezes por semana. A versão nova vale quando ele abre de novo."
        ],
        [
          "Instale pelo WinGet, que se atualiza sozinho, e use o ! para conversar sem gastar do limite",
          "Os dois pedaços estão errados: o WinGet não se atualiza sozinho, e a resposta do Claude à saída do ! gasta do limite."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O changelog anuncia um recurso novo, mas ele não aparece na sua sessão, aberta desde ontem. O que fazer primeiro?",
        "o": [
          [
            "Fechar e abrir o Claude Code de novo, e conferir a versão",
            "Isso. A atualização baixa em segundo plano e só vale numa sessão nova."
          ],
          [
            "Reinstalar por cima, com o comando de instalação oficial do site",
            "Não é preciso reinstalar: a versão nova já costuma estar baixada e só falta abrir de novo."
          ],
          [
            "Esperar até amanhã, quando a sessão se renova sozinha",
            "A sessão não se renova sozinha. Quem a renova é você, fechando e abrindo o Claude Code."
          ]
        ],
        "c": 0
      },
      {
        "p": "Há três anotações parecidas na pasta, e você quer que o Claude leia exatamente a aula2.txt. Como escreve o pedido?",
        "o": [
          [
            "\"Leia o segundo arquivo de aula que estiver na pasta\"",
            "A ordem dos arquivos pode não ser a que você imagina. O @ deixa o arquivo exato na conversa."
          ],
          [
            "\"Abra ! aula2.txt e me explique o que tem dentro dele\"",
            "O ! roda um comando do terminal, e aula2.txt não é um comando. Para apontar o arquivo, use o @."
          ],
          [
            "\"Leia @aula2.txt\", escolhendo o arquivo na lista de sugestões",
            "Isso. O @ com a lista de sugestões aponta o arquivo exato, sem adivinhação."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como sei a versão do meu Claude Code?",
        "Sem abrir o programa, cole Get-Command claude no PowerShell: a coluna Version mostra a versão do arquivo. Com o Claude Code aberto, ela aparece no cabeçalho. Lembre que uma atualização baixada só vale quando você abre o Claude Code de novo."
      ],
      [
        "Para que serve o @ no pedido?",
        "O @ aponta um arquivo exato da pasta: digite @ e as primeiras letras, escolha na lista com Tab, e o arquivo entra na conversa. Evita que o Claude pegue o arquivo errado quando há nomes parecidos."
      ],
      [
        "Instalei pelo WinGet. Preciso fazer algo?",
        "Sim: o WinGet não atualiza sozinho. Rode winget upgrade Anthropic.ClaudeCode de tempos em tempos. E confira com where.exe claude se não há uma segunda instalação, como a do instalador nativo."
      ]
    ]
  },
  "7-2": {
    "tempo": 40,
    "video": "a7-2",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já digitou uma barra no {{claude-code|Claude Code}}, viu uma lista enorme de {{comando|comandos}} e fechou sem saber qual servia para quê. Ou colou pela décima vez o mesmo pedido longo, quando um comando seu faria isso com uma palavra.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Dentro do Claude Code, tudo o que começa com uma barra, como {{clear|/clear}} ou {{usage|/usage}}, é um {{comando-de-barra|comando de barra}}: uma ordem para o próprio {{programa}}, e não um pedido para a IA. Alguns resolvem em um segundo o que levaria uma conversa inteira: começar do zero, ver quanto do plano você já usou, trocar o {{modelo}}, conferir a {{versao|versão}}. Outros entregam ao Claude um roteiro pronto, como revisar o que mudou ou escrever as instruções de um projeto."
      ],
      [
        "p",
        "Saber quais existem economiza tempo e {{limite-de-uso|limite}}. Saber criar o seu economiza ainda mais: o pedido que você cola toda semana, como \"transforme estas anotações num resumo com perguntas\", vira uma palavra, e sai sempre igual. E, como a lista muda a cada versão, saber onde está a lista oficial evita seguir tutorial de comando que já não existe."
      ],
      [
        "p",
        "Esta aula tem três partes: como os comandos funcionam e por que alguns gastam do seu limite e outros não; uma tabela com os principais, cada um ligado à aula deste módulo que o aprofunda; e o passo a passo para criar o seu, que você faz no laboratório."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Imagine que, na sala do estagiário da aula 0.0, há um painel de botões ao lado da porta. Alguns botões mexem na própria sala, sem falar com ele: apagar o quadro para começar outro assunto, mostrar o relógio de ponto com as horas gastas, apagar a luz e ir embora. Outros tiram da estante um manual, a {{skill}} da aula 1.5, e o entregam a ele com a ordem de seguir, como \"revise o que mudou hoje\". E você pode instalar botões novos no painel, cada um preso a um manual escrito por você. Cada botão é um comando de barra."
      ],
      [
        "quebra",
        "Um botão de parede faz sempre a mesma coisa. Os botões que entregam um manual passam pelo estagiário: ele lê, interpreta e pode fazer um pouco diferente a cada vez, e gasta o tempo dele, que é o seu limite. E o painel não fica parado: a cada versão do Claude Code, botões entram, mudam de nome ou saem."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Como digitar um comando"
      ],
      [
        "p",
        "Digite `/` no começo da caixa de texto e aparece a lista dos comandos disponíveis para você; continue digitando para filtrar, e as setas e o Tab escolhem. O comando só é reconhecido no início da mensagem: \"rode o /clear\" vai para o Claude como texto comum. O que vem depois do nome são os argumentos: em `/rename estudo-juros`, o argumento é o nome novo da conversa. Se você errar uma letra e enviar, aparece `Unknown command`, comando desconhecido."
      ],
      [
        "p",
        "Se você digitar um comando enquanto o Claude trabalha, ele entra numa fila e roda quando a resposta terminar. Alguns, como {{status|/status}} e `/usage`, rodam na hora, sem interromper. Vários têm apelidos: `/new` chama o `/clear`, `/quit` chama o `/exit`, e `/cost` e `/stats` abrem o `/usage`."
      ],
      [
        "h3",
        "Botão do programa ou manual entregue ao Claude"
      ],
      [
        "p",
        "Os comandos integrados têm o comportamento escrito dentro do programa: `/clear`, `/exit`, `/status`, `/config`, {{permissions-comando|/permissions}}. Fazem sempre a mesma coisa e, em geral, não põem o modelo para trabalhar. Outros são skills que já vêm com o Claude Code, como `/code-review`, `/doctor` e `/simplify`: cada uma é um texto de instruções entregue ao Claude, que trabalha a partir dele. Essas gastam do seu limite como qualquer pedido, e o resultado varia um pouco de uma vez para outra. A página oficial de comandos marca cada uma com a palavra Skill."
      ],
      [
        "p",
        "Há um meio-termo: comandos integrados que mandam o Claude fazer um trabalho. O {{init-comando|/init}} lê a {{pasta}} e escreve um arquivo de instruções, e o {{compact|/compact}} resume a conversa; os dois usam o modelo. A regra prática: se o comando pede que algo seja lido, escrito, revisado ou resumido, ele gasta; se só mostra uma informação ou muda uma configuração, quase sempre não."
      ],
      [
        "p",
        "Um exemplo do começo ao fim. Você digita `/clear`: a tela limpa na hora, e a conversa seguinte começa vazia, sem resposta nenhuma do Claude. Depois digita `/init`: o Claude passa um tempo lendo arquivos, mostra o que encontrou e escreve um {{claude-md|CLAUDE.md}}. O primeiro foi um botão do painel; o segundo pôs o estagiário para trabalhar."
      ],
      [
        "h3",
        "Os principais, por momento"
      ],
      [
        "p",
        "A lista oficial tem mais de cem comandos, e muitos só servem para empresas ou para casos raros. Estes são os que você vai usar, com a aula deste módulo que aprofunda cada um:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Comando",
            "O que faz",
            "Onde aprofunda"
          ],
          "linhas": [
            [
              "`/help`",
              "Mostra a ajuda e os comandos disponíveis para você",
              "Esta aula"
            ],
            [
              "`/powerup`",
              "Lições curtas e interativas sobre recursos do Claude Code",
              "Aula 7.1"
            ],
            [
              "`/status`",
              "Versão, modelo, conta e arquivos de configuração carregados",
              "Aula 7.18"
            ],
            [
              "`/usage`",
              "Uso da {{sessao|sessão}} e barras de limite do plano; apelidos `/cost` e `/stats`",
              "Aula 7.14"
            ],
            [
              "{{model|/model}} e {{effort|/effort}}",
              "Trocam o modelo e o nível de esforço",
              "Aula 7.17"
            ],
            [
              "`/clear`",
              "Conversa nova, com o {{contexto}} vazio; apelido `/new`",
              "Aula 7.16"
            ],
            [
              "`/compact`",
              "Resume a conversa para liberar espaço, sem começar do zero",
              "Aula 7.16"
            ],
            [
              "{{resume|/resume}}",
              "Reabre uma conversa anterior",
              "Aula 7.16"
            ],
            [
              "{{rewind|/rewind}}",
              "Volta os arquivos e a conversa a um ponto anterior",
              "Aula 7.15"
            ],
            [
              "`/plan`",
              "Entra no modo de planejamento, já com a tarefa",
              "Aula 7.3"
            ],
            [
              "`/permissions`",
              "Mostra e muda as regras do que ele faz sem perguntar",
              "Aula 7.4"
            ],
            [
              "`/init` e `/memory`",
              "Criam e editam o CLAUDE.md",
              "Aula 7.5"
            ],
            [
              "{{hooks-comando|/hooks}}, {{plugin-comando|/plugin}}, {{comando-skills|/skills}}, {{mcp-comando|/mcp}}",
              "Mostram o que está instalado de cada tipo",
              "Aulas 7.6 e 7.7, módulos 8 e 9"
            ],
            [
              "{{context|/context}}",
              "Quanto do contexto está ocupado, e com quê",
              "Aula 7.18"
            ],
            [
              "{{btw|/btw}}",
              "Uma pergunta lateral sobre a sessão, que não entra na conversa",
              "Esta aula"
            ],
            [
              "`/config`",
              "Tema, modo de editor e outras preferências",
              "Aula 7.19"
            ],
            [
              "`/exit`",
              "Fecha o Claude Code; apelido `/quit`",
              "Aula 0.0"
            ]
          ]
        }
      ],
      [
        "p",
        "Dois deles merecem uma frase a mais. O {{help-comando|/help}} é o lugar para conferir se um comando ainda existe na sua versão. E o `/btw` responde a uma dúvida rápida, como \"qual era mesmo o nome daquele arquivo?\", sem que a pergunta e a resposta fiquem na conversa principal, que continua limpa."
      ],
      [
        "h3",
        "O que mudou de nome ou saiu"
      ],
      [
        "p",
        "Comandos saem e mudam, e tutorial antigo não avisa. Alguns casos reais: o `/agents` deixou de abrir o assistente de criar {{subagente|subagentes}} na versão 2.1.198, de 01/07/2026, e hoje só lembra que você pode pedir ao Claude para criar um; o `/vim` saiu na 2.1.92, de 04/04/2026, e o modo de edição Vim foi para `/config`, na opção Editor mode; o `/pr-comments` saiu na 2.1.91; e o `/ultraplan` foi removido, com a documentação mandando usar o modo de planejamento."
      ],
      [
        "p",
        "Quando um comando de tutorial der `Unknown command`, confira três coisas: se você escreveu certo, se ele aparece no `/help` e se a página oficial de comandos ainda o lista. O `/release-notes` mostra as novidades de cada versão sem sair do Claude Code."
      ],
      [
        "h3",
        "Criando o seu comando"
      ],
      [
        "p",
        "Os comandos que você cria viraram skills. Antes, eram um arquivo dentro de `.claude/commands/`: `.claude/commands/resumo.md` vira `/resumo`, e esse formato ainda funciona. O formato atual é uma pasta com um arquivo `SKILL.md`: `.claude/skills/resumo-aula/SKILL.md` vira `/resumo-aula`. A pasta permite guardar arquivos de apoio junto, e é o formato que a documentação recomenda para coisa nova."
      ],
      [
        "p",
        "Onde a pasta fica decide onde o comando existe. Dentro do projeto, em `.claude/skills/`, ele só aparece quando você abre o Claude Code naquela pasta. Na sua {{pasta-pessoal|pasta pessoal}}, em `C:\\Users\\SeuNome\\.claude\\skills\\`, aparece em todos os projetos do PC."
      ],
      [
        "p",
        "O arquivo tem duas partes. No alto, entre duas linhas de três tracinhos, vem o {{frontmatter}}, com os campos de configuração; embaixo, as instruções em texto comum. Dois campos bastam para um comando simples:"
      ],
      [
        "lista",
        [
          "`description`: uma frase dizendo o que o comando faz. Aparece ao lado do nome no menu.",
          "`disable-model-invocation: true`: só você chama o comando. Sem esse campo, o Claude também pode decidir usá-lo por conta própria quando achar que o assunto combina, o que é bom para um manual de consulta e ruim para um comando que cria ou apaga arquivos."
        ]
      ],
      [
        "p",
        "Nas instruções, `$ARGUMENTS` é trocado pelo que você digitar depois do nome. Com a skill do laboratório desta aula, `/resumo-aula anotacoes.txt` chega ao Claude como \"Leia o arquivo anotacoes.txt e crie nesta pasta um arquivo resumo.md\", seguido do resto das instruções."
      ],
      [
        "p",
        "O Claude Code percebe sozinho uma skill nova ou alterada numa pasta `.claude/skills/` que já existia quando a sessão começou. Se a pasta foi criada com a sessão aberta, digite `/reload-skills`. O laboratório cria tudo antes de abrir o Claude Code, para não depender disso. E grava o arquivo em {{utf8|UTF-8}} sem o {{bom|BOM}}, da aula 0.4b, para o arquivo começar exatamente nos três tracinhos, sem nenhum caractere invisível antes."
      ],
      [
        "p",
        "Quando não criar um comando: para algo que você faz uma vez, o pedido comum basta. Comando compensa a partir da terceira vez que você cola o mesmo texto. O módulo 8 é todo sobre skills: quando o Claude usa uma sozinho, como testar e por que uma skill de outra pessoa merece o mesmo cuidado que um programa instalado."
      ],
      [
        "h3",
        "Comandos que chegam de fora"
      ],
      [
        "p",
        "{{plugin|Plugins}} e servidores {{mcp|MCP}} também acrescentam comandos ao menu. Os de plugin aparecem com o nome do plugin na frente, como `/nome-do-plugin:comando`. É mais um motivo para olhar o menu de vez em quando: um plugin instalado pode ter trazido comandos que você não conhece. A aula 7.7 e o módulo 9 tratam disso."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Comando gasta do limite?** Os integrados que só mostram ou mudam algo, quase nunca. Os que põem o Claude para ler, escrever, revisar ou resumir gastam como um pedido.",
          "**Preciso decorar a tabela?** Não. Digite `/` e leia o menu; os do dia a dia você aprende usando.",
          "**Posso usar um comando no meio de uma frase?** O menu até completa o nome no meio do texto, mas o comando só roda quando abre a mensagem.",
          "**Um comando meu aparece no celular?** Pelo {{remote-control|Remote Control}}, sim, porque a sessão roda no seu PC. Nas {{sessao-na-nuvem|sessões na nuvem}}, os da sua pasta pessoal não aparecem.",
          "**E se eu apagar a pasta da skill?** O comando some do menu na mesma sessão. Nada mais é afetado."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: configurar sem menu, várias skills de uma vez e argumentos por posição",
          "blocos": [
            [
              "p",
              "**Configurar sem menu.** O {{config-comando|/config}} aceita `chave=valor` direto, como `/config verbose=true`, para mudar uma opção sem abrir a tela."
            ],
            [
              "p",
              "**Várias skills de uma vez.** No terminal, uma mensagem pode começar com até seis skills seguidas, como `/skill-a /skill-b texto`, e o texto final vai como argumento para cada uma."
            ],
            [
              "p",
              "**Argumentos por posição.** Além de `$ARGUMENTS`, que recebe tudo, `$0` é o primeiro argumento, `$1` o segundo, e assim por diante. Para mandar várias palavras como um argumento só, use aspas: em `/minha-skill \"juros compostos\" macro`, `$0` vira juros compostos e `$1` vira macro."
            ],
            [
              "p",
              "**Comandos escondidos.** Alguns comandos ficam fora do menu de propósito e só aparecem quando você digita o nome inteiro. Uma letra a menos não os mostra."
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
          "pergunta": "Este é o arquivo `.claude/skills/resumo-aula/SKILL.md` do laboratório. Você digita `/resumo-aula anotacoes.txt`. O que você acha que o Claude recebe, e o que ele faz?",
          "codigo": "---\ndescription: Transforma as anotações de uma aula num resumo de estudo com perguntas.\ndisable-model-invocation: true\n---\n\nLeia o arquivo $ARGUMENTS e crie nesta pasta um arquivo resumo.md, em português, com:\n\n1. Um parágrafo curto com a ideia central.\n2. Os termos novos, cada um explicado numa frase.\n3. Duas perguntas de múltipla escolha, com as respostas no fim.\n\nNão altere o arquivo original. No fim, diga o caminho completo do resumo.md.",
          "linguagem": "markdown",
          "resposta": "O Claude recebe as instruções com `$ARGUMENTS` trocado por `anotacoes.txt`: \"Leia o arquivo anotacoes.txt e crie nesta pasta um arquivo resumo.md\". O frontmatter, entre os tracinhos, não vai como pedido: a `description` aparece no menu ao lado de `/resumo-aula`, e `disable-model-invocation: true` impede o Claude de usar o comando por conta própria. Ele então lê as anotações, escreve o resumo.md com as três partes e diz o caminho. Se você digitar só `/resumo-aula`, sem argumento, o `$ARGUMENTS` fica vazio, e ele provavelmente pergunta qual arquivo ler."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você digitou /clear e a conversa recomeçou na hora, sem resposta do Claude. Com /init, ele passou um minuto lendo arquivos. Por que a diferença?",
          "o": [
            [
              "O /init baixa uma atualização antes de rodar, e o /clear não precisa baixar nada",
              "Nenhum dos dois baixa atualização. A diferença é que o /init põe o Claude para ler a pasta e escrever um arquivo."
            ],
            [
              "Os dois põem o Claude para trabalhar; o /clear só tem bem menos coisa a fazer",
              "O /clear nem chama o modelo: o programa limpa a conversa sozinho. O /init é que põe o Claude para trabalhar."
            ],
            [
              "O /clear é um botão do programa; o /init põe o Claude para trabalhar",
              "Isso. O /clear é executado pelo próprio Claude Code. O /init manda o Claude ler a pasta e escrever o CLAUDE.md, e isso gasta do limite."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Achei num tutorial o comando /vim. Por que ele dá Unknown command?\" O Claude respondeu: \"O /vim foi removido na versão 2.1.92. O modo de edição Vim agora se liga em /config, na opção Editor mode.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: Unknown command quer dizer que falta atualizar o Claude Code",
              "Atualizar não traz o /vim de volta: ele saiu do programa. Unknown command aparece para comando removido e para nome escrito errado."
            ],
            [
              "Está certa: o /vim saiu, e o modo Vim fica em /config, em Editor mode",
              "Isso. A resposta confere com o changelog e com a página de comandos. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Está errada: o /vim continua existindo, mas só dentro do VS Code",
              "O /vim não existe mais em lugar nenhum do Claude Code. O modo Vim é ligado em /config."
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
            "\"Escrevi rode o /clear no meio da frase.\"",
            "O comando só é reconhecido no começo da mensagem. No meio da frase, vai para o Claude como texto."
          ],
          [
            "\"Comando nenhum gasta do meu limite.\"",
            "Os que põem o Claude para trabalhar gastam, como o /init, o /compact e as skills como /code-review. Os que só mostram ou mudam uma configuração, quase nunca."
          ],
          [
            "\"O tutorial manda usar /agents para criar um subagente.\"",
            "Desde a versão 2.1.198, o /agents só imprime um lembrete. Peça ao Claude para criar o subagente; a aula 7.8 mostra como."
          ],
          [
            "\"Criei o comando e ele não aparece no menu.\"",
            "Confira o caminho, .claude/skills/<nome>/SKILL.md, e o nome da pasta. Se a pasta .claude/skills foi criada com a sessão aberta, digite /reload-skills."
          ],
          [
            "\"Meu comando apaga arquivos, e deixei o Claude chamá-lo sozinho.\"",
            "Sem disable-model-invocation: true, ele pode usar o comando quando achar que combina. Para ação com efeito, ponha esse campo no frontmatter."
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
          "p": "Qual a diferença entre um comando integrado e uma skill chamada pela barra?",
          "r": [
            "Integrado: o próprio programa executa, sempre igual, quase sempre sem o modelo.",
            "Skill: um texto de instruções entregue ao Claude, que trabalha e gasta do limite.",
            "A página oficial de comandos marca as skills com a palavra Skill."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Do que precisa um comando seu, feito como skill?",
          "r": [
            "Uma pasta .claude/skills/<nome>/ com um arquivo SKILL.md.",
            "Um frontmatter com description e, para só você chamar, disable-model-invocation: true.",
            "$ARGUMENTS nas instruções, que recebe o que vem depois do nome."
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
          "titulo": "Use os principais e crie o seu",
          "lugar": "No PC, com o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai criar uma pasta de teste com um comando seu, o `/resumo-aula`, e um arquivo de anotações, abrir o Claude Code ali, usar três comandos integrados e rodar o seu. Precisa do Claude Code instalado. O comando fica só nesta pasta, porque mora em `.claude\\skills\\` dentro dela; nada muda nos seus outros projetos. Pelo app: crie os arquivos com os passos 2 a 5 no terminal e abra a pasta pela aba Code do app desktop; o menu da barra funciona lá também. Os comandos dos passos 2 a 5 foram rodados de verdade no PowerShell 5.1, em 08/11/2026. A sessão do Claude Code, do passo 6 em diante, não foi testada antes de publicar.",
          "naoTestado": "A sessão do Claude Code (passos 6 a 16) não foi rodada para escrever esta aula: exige o Claude Code interativo com login, e rodar o programa no PC do teste usaria a conta e as configurações do dono. O comportamento do menu, do /reload-skills e do $ARGUMENTS vem das páginas oficiais de comandos e de skills, conferidas em 08/11/2026. Os passos 2 a 5 foram rodados no PowerShell 5.1 em 08/11/2026, numa pasta de teste, e o SKILL.md saiu em UTF-8 sem BOM, começando nos três tracinhos.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal.",
              "espera": "Abre uma janela com uma linha que começa com PS."
            },
            {
              "faz": "Cole este comando, que cria a pasta de teste e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\comandos-teste | Out-Null; Set-Location C:\\Projetos\\comandos-teste",
              "espera": "Nada é impresso, e o começo da linha muda para PS C:\\Projetos\\comandos-teste>."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele cria a pasta da skill e grava o SKILL.md, com acentos, em UTF-8 sem BOM. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "New-Item -ItemType Directory -Force .claude\\skills\\resumo-aula | Out-Null\n$texto = @'\n---\ndescription: Transforma as anotações de uma aula num resumo de estudo com perguntas.\ndisable-model-invocation: true\n---\n\nLeia o arquivo $ARGUMENTS e crie nesta pasta um arquivo resumo.md, em português, com:\n\n1. Um parágrafo curto com a ideia central.\n2. Os termos novos, cada um explicado numa frase.\n3. Duas perguntas de múltipla escolha, com as respostas no fim.\n\nNão altere o arquivo original. No fim, diga o caminho completo do resumo.md.\n'@\n[IO.File]::WriteAllText(\"$PWD\\.claude\\skills\\resumo-aula\\SKILL.md\", $texto)",
              "espera": "Nada é impresso. O arquivo SKILL.md foi gravado dentro de .claude\\skills\\resumo-aula."
            },
            {
              "faz": "Cole este comando, que cria as anotações que o comando vai resumir.",
              "cola": "Set-Content -Encoding utf8 anotacoes.txt 'Aula de hoje: inflação é a alta geral dos preços. O IPCA é o índice oficial de inflação no Brasil. Juro real é o juro descontada a inflação.'",
              "espera": "Nada é impresso."
            },
            {
              "faz": "Cole este comando para ver tudo o que foi criado, inclusive dentro das subpastas.",
              "cola": "Get-ChildItem -Recurse -Name",
              "saida": ".claude\nanotacoes.txt\n.claude\\skills\n.claude\\skills\\resumo-aula\n.claude\\skills\\resumo-aula\\SKILL.md",
              "espera": "As mesmas cinco linhas: a pasta .claude, as anotações, e o caminho até o SKILL.md."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre na pasta C:\\Projetos\\comandos-teste."
            },
            {
              "faz": "Se aparecer a pergunta de confiança da pasta, confirme com Enter.",
              "espera": "A pergunta só aparece na primeira vez nesta pasta. Depois dela, o Claude Code espera o seu pedido."
            },
            {
              "faz": "Digite /status e aperte Enter. Repare que, enquanto você digita, a lista de comandos aparece e encolhe.",
              "cola": "/status",
              "espera": "Abre a aba Status, com a versão, o modelo, a conta e, na linha Setting sources, os arquivos de configuração carregados. O Claude não respondeu nada: foi um botão do programa."
            },
            {
              "faz": "Aperte Esc.",
              "espera": "A tela do /status fecha, e a caixa de texto volta."
            },
            {
              "faz": "Digite /usage e aperte Enter.",
              "cola": "/usage",
              "espera": "Aparece o uso da sessão e, no plano de assinatura, as barras dos limites. De novo, sem resposta do Claude."
            },
            {
              "faz": "Aperte Esc.",
              "espera": "A tela do /usage fecha."
            },
            {
              "faz": "Digite /res, sem apertar Enter.",
              "espera": "O /resumo-aula aparece no menu, destacado, com a description ao lado: \"Transforma as anotações de uma aula num resumo de estudo com perguntas\"."
            },
            {
              "faz": "Aperte Tab.",
              "espera": "A caixa passa a mostrar /resumo-aula completo, seguido de um espaço, pronto para o argumento."
            },
            {
              "faz": "Cole o nome do arquivo depois do comando e aperte Enter. Se ele pedir permissão para criar o arquivo, aceite.",
              "cola": "anotacoes.txt",
              "espera": "O Claude lê as anotações, cria o resumo.md com a ideia central, os termos novos e duas perguntas, e diz o caminho C:\\Projetos\\comandos-teste\\resumo.md. Este comando, sim, gastou do limite: foi o manual entregue ao estagiário."
            },
            {
              "faz": "Digite ! ls e aperte Enter, para conferir a pasta sem sair.",
              "cola": "! ls",
              "espera": "A lista mostra o resumo.md ao lado do anotacoes.txt, e o Claude comenta. A pasta .claude pode aparecer ou não, conforme o terminal."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha, e a linha PS C:\\Projetos\\comandos-teste> volta."
            }
          ],
          "errado": "se o /resumo-aula não aparecer no menu do passo 12, confira com o passo 5 se o SKILL.md está em .claude\\skills\\resumo-aula; se estiver, digite /reload-skills e tente de novo. Se aparecer Unknown command, o nome foi digitado diferente do da pasta, que é resumo-aula, com hífen. Se o resumo sair com acentos estranhos, o SKILL.md foi criado de outro jeito: apague a pasta .claude pelo Explorador de Arquivos e repita o passo 3. Se o Claude criar o resumo em outra pasta, confira no cabeçalho a pasta em que a sessão abriu. Se o passo 3 mostrar um erro em vermelho com \"@\", o bloco foi colado pela metade: cole de novo, inteiro."
        }
      ],
      [
        "fontes",
        [
          [
            "Comandos (lista completa, apelidos, marcação Skill, /help, /btw, /release-notes, comandos removidos), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Estender Claude com skills (comandos personalizados mesclados em skills, onde ficam, frontmatter, disable-model-invocation, $ARGUMENTS, /reload-skills), Claude Code",
            "https://code.claude.com/docs/pt/skills",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modo interativo (menu da barra, fila de comandos, completar no meio do prompt), Claude Code",
            "https://code.claude.com/docs/pt/interactive-mode",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.92, de 04/04/2026: /vim removido; 2.1.198, de 01/07/2026: assistente do /agents removido; sem versão em português)",
            "https://code.claude.com/docs/en/changelog",
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
          "A barra é só um atalho para pedidos longos ao Claude, e todos os comandos gastam igual do limite",
          "Muitos comandos são do próprio programa e quase não gastam. Só os que põem o Claude para trabalhar gastam como um pedido."
        ],
        [
          "Os comandos vêm fixos na instalação, então tutorial antigo continua valendo",
          "Comandos entram, mudam e saem a cada versão. Confira no /help e na página oficial."
        ],
        [
          "Barra fala com o programa; alguns comandos entregam um manual ao Claude, e você cria os seus",
          "Isso. Botões do programa, skills que põem o Claude para trabalhar, e comandos seus em .claude/skills."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Você quer um comando seu que só apareça no projeto aberto. Onde ele fica?",
        "o": [
          [
            "Em C:\\Users\\SeuNome\\.claude\\skills\\<nome>\\SKILL.md",
            "Essa é a pasta pessoal: o comando apareceria em todos os projetos do PC."
          ],
          [
            "Em .claude\\skills\\<nome>\\SKILL.md, dentro do projeto",
            "Isso. Dentro do projeto, ele só aparece quando você abre o Claude Code naquela pasta."
          ],
          [
            "No settings.json, numa lista de comandos novos",
            "O settings.json guarda configurações e regras, não comandos. Comando seu é uma skill numa pasta .claude\\skills."
          ]
        ],
        "c": 1
      },
      {
        "p": "Para que serve disable-model-invocation: true no frontmatter de um comando seu?",
        "o": [
          [
            "Para o comando rodar sem gastar nada do limite mensal do plano",
            "O campo não muda o gasto: quando você chama o comando, o Claude trabalha e gasta como sempre."
          ],
          [
            "Para esconder o comando do menu que aparece quando você digita a barra",
            "O comando continua no menu para você. O campo só impede o Claude de chamá-lo sozinho."
          ],
          [
            "Para o Claude não chamar o comando sozinho; só você chama",
            "Isso. É o certo para comando que cria, muda ou apaga arquivos: você decide a hora."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como sei se um comando gasta do limite?",
        "Pergunte o que ele faz. Se só mostra uma informação ou muda uma configuração, como /status ou /config, quase nunca gasta. Se põe o Claude para ler, escrever, revisar ou resumir, como /init, /compact ou /code-review, gasta como um pedido. A página oficial de comandos marca as skills."
      ],
      [
        "Como crio um comando meu?",
        "Crie a pasta .claude\\skills\\<nome> e, dentro dela, um SKILL.md com um frontmatter entre linhas de três tracinhos (description e, para só você chamar, disable-model-invocation: true) e as instruções embaixo. O $ARGUMENTS recebe o que você digitar depois do nome. O laboratório faz isso passo a passo."
      ],
      [
        "O comando do tutorial dá Unknown command. E agora?",
        "Confira se você escreveu certo, se ele aparece no /help e se a página oficial de comandos ainda o lista. Muitos comandos saíram ou mudaram de nome, como o /vim, que foi para /config, e o /agents, que hoje só imprime um lembrete."
      ]
    ]
  },
  "7-3": {
    "tempo": 43,
    "video": "a7-3",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você pediu uma mudança grande, o {{claude-code|Claude Code}} saiu editando arquivos, e só no fim você percebeu que ele tinha entendido outra coisa. Ou deixou ele trabalhando sozinho e voltou para achar um aviso de ação bloqueada que você não sabia ler.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 0.0 apresentou os modos de {{permissao|permissão}}, e a aula 6.4 mostrou o hábito de pedir um plano antes de construir. Esta aula abre por dentro os dois modos que mais mudam o seu dia: o {{modo-plano|modo de planejamento}}, que faz o Claude pensar antes de tocar em qualquer {{arquivo}}, e o {{modo-automatico|modo automático}}, que deixa ele trabalhar sem perguntar, com um revisor de olho. São ferramentas opostas, e escolher a certa para cada tarefa evita retrabalho e evita sustos."
      ],
      [
        "p",
        "Há também uma armadilha que só aparece em alguns PCs: se o seu Claude Code começa em {{bypass}}, o modo de planejamento no {{terminal}} não trava as edições. Esta aula mostra como conferir em que modo as suas {{sessao|sessões}} começam, o que muda na prática e quais caminhos existem, se você quiser mudar. Quem decide é você."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Os modos são os combinados com o estagiário da aula 0.0. O de planejamento é o combinado \"primeiro me traga o plano no papel\": ele pode andar pela sala, abrir gavetas e ler tudo, mas não mexe em nenhum papel até você assinar o plano. O automático é o combinado com supervisor: ele trabalha sem bater na sua porta, e um supervisor parado na porta da sala confere cada ação que sai da rotina, barrando o que vai além do que você pediu."
      ],
      [
        "quebra",
        "Num combinado entre pessoas, quem promete não mexer cumpre. Aqui, quem tranca as gavetas durante o plano é o programa, e, no terminal com o bypass disponível, ele não tranca: o plano vira só um pedido. E o supervisor do automático é outro {{modelo}} de IA, que julga caso a caso: ele vê os seus pedidos e as ações do Claude, mas não o conteúdo dos arquivos que o Claude leu, e duas ações parecidas podem ter destinos diferentes."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Como trocar de modo"
      ],
      [
        "p",
        "No terminal, Shift+Tab troca o modo da sessão aberta. Partindo do automático, a ordem é Manual, Accept edits, Plan e, de novo, automático; se a sessão começou com o bypass liberado, ele entra no ciclo antes do automático. A linha de baixo da tela mostra o modo: `⏸ plan mode on` no de planejamento e `⏵⏵ auto mode on` no automático. Para começar já num modo, abra com `claude --permission-mode plan` ou `claude --permission-mode auto`; a opção vale só para aquela abertura."
      ],
      [
        "p",
        "Para um pedido só, `/plan` seguido da tarefa entra no modo de planejamento e já começa: `/plan separe as anotações em dois arquivos`. Ao aprovar o plano, a sessão sai dele sozinha."
      ],
      [
        "h3",
        "O modo de planejamento por dentro"
      ],
      [
        "p",
        "No modo de planejamento, o Claude lê arquivos, roda {{comando|comandos}} para explorar e escreve um plano, mas não edita os seus arquivos. Quando o plano fica pronto, ele mostra e pergunta como seguir. As opções aparecem em inglês:"
      ],
      [
        "lista",
        [
          "**Yes, and use auto mode**: aprova e passa para o automático, que edita sem perguntar. Se o automático não estiver disponível, a opção vira **Yes, auto-accept edits**; se a sessão começou com o bypass ligado, vira a de passar para o bypass.",
          "**Yes, manually approve edits**: aprova e passa para o Manual, em que ele pede a sua permissão antes de cada edição.",
          "**No, keep planning**: continua no plano, e você diz o que mudar."
        ]
      ],
      [
        "p",
        "Ctrl+G abre o plano no seu editor de texto, para você mexer nele direto antes de aprovar. E aprovar o plano dá à conversa um título tirado do próprio plano, o que ajuda a achá-la depois."
      ],
      [
        "p",
        "Um caso do começo ao fim. Você pede, em modo de planejamento: \"quero separar minhas anotações de macro em dois arquivos, um por tema\". Ele lê as anotações e devolve um plano: criar inflacao.md e ipca.md, mover cada trecho e apagar o original. Você não quer perder o original e escolhe No, keep planning, com \"mantenha o notas.md intacto\". O plano volta sem a última etapa. Agora Yes, manually approve edits: ele cria cada arquivo e, antes de cada um, pergunta. O mal-entendido, ler \"separar\" como \"apagar\", foi pego no papel, onde custa uma frase, e não depois, onde custaria desfazer."
      ],
      [
        "p",
        "Durante o plano, os comandos que ele roda para explorar também passam por uma regra. Com o automático disponível, o que acontece por padrão, o revisor do automático julga cada comando: os aprovados rodam, e os outros são bloqueados. Sem o automático, todo comando fora de uma lista de comandos só de leitura pede a sua confirmação."
      ],
      [
        "p",
        "Quando não usar: para uma mudança pequena e óbvia, como corrigir uma palavra, o plano só acrescenta uma volta. Ele compensa quando a tarefa mexe em vários arquivos, quando você não sabe bem como fazer ou quando o projeto é de outra pessoa."
      ],
      [
        "h3",
        "A armadilha do bypass no modo de planejamento"
      ],
      [
        "p",
        "A trava do plano depende de onde você está. Numa sessão interativa de terminal com o bypass disponível, o Claude Code não impõe a trava: o Claude continua instruído a planejar sem editar, mas uma edição ou um comando que ele tente no meio do plano roda sem perguntar. Bypass disponível quer dizer que a sessão começou com ele liberado, pela opção na hora de abrir ou pela linha `\"defaultMode\": \"bypassPermissions\"` no {{settings-json|settings.json}} do seu usuário. Desde a versão 2.1.299, de 14/10/2026, aparece uma vez um aviso sobre isso. Fora do terminal interativo, a trava vale: no painel do Claude Code no {{vs-code|VS Code}} e nas execuções com `claude -p`, da aula 7.10."
      ],
      [
        "p",
        "Para saber se é o seu caso, o comando abaixo mostra a linha do modo inicial no settings.json do seu usuário, sem mudar nada; o Preveja, logo adiante, mostra as respostas possíveis."
      ],
      [
        "codigo",
        {
          "texto": "Select-String -Path \"$env:USERPROFILE\\.claude\\settings.json\" -Pattern defaultMode",
          "linguagem": "powershell",
          "cola": true
        }
      ],
      [
        "p",
        "Se aparecer `bypassPermissions`, a trava do plano não vale nas suas sessões de terminal. Há três saídas, e quem escolhe é você:"
      ],
      [
        "lista",
        [
          "**Planejar no painel do VS Code**, onde a trava vale mesmo com o bypass.",
          "**Abrir uma sessão com outro modo inicial, sem mexer no arquivo**: `claude --settings modo-auto.json`, com um arquivo que diz `\"defaultMode\": \"auto\"`. O que vem pela opção `--settings` vale por cima do arquivo do usuário, só naquela sessão. O laboratório faz isso e confere se o bypass saiu do ciclo.",
          "**Trocar o modo inicial de vez**, mudando a linha `defaultMode` do seu settings.json para `auto`. A aula 7.4 mostra o arquivo inteiro e o passo a passo."
        ]
      ],
      [
        "h3",
        "O modo automático por dentro"
      ],
      [
        "p",
        "No automático, ler e editar arquivos dentro da {{pasta}} de trabalho passa direto. As outras ações, como rodar comandos e acessar a {{internet}}, passam antes por um {{classificador}}: outro modelo, que confere se a ação combina com o que você pediu. Ele bloqueia o que vai além do pedido, o que mira um lugar que ele não reconhece e o que parece guiado por um texto hostil que o Claude leu. As regras que você escreve, assunto da aula 7.4, são resolvidas antes dele."
      ],
      [
        "p",
        "A lista do que ele bloqueia por padrão é longa e inclui: baixar e rodar código da internet de uma vez, como `curl | bash`; mandar dados sensíveis para fora; destruir de forma irreversível arquivos que já existiam antes da sessão; comandos do {{git|Git}} que jogam fora trabalho não guardado, como `git reset --hard`; forçar um envio por cima do histórico de outra pessoa; e imprimir uma senha ou um {{token}} ativo na tela."
      ],
      [
        "p",
        "Quando ele bloqueia, aparece um aviso, o Claude recebe o motivo e tenta outro caminho, e a ação fica listada em {{permissions-comando|/permissions}}, na aba Recently blocked, onde você pode aprová-la para ele tentar de novo. Se o revisor bloquear 3 vezes seguidas ou 20 vezes na sessão, o automático pausa e o Claude Code volta a perguntar; aprovar o que ele pediu retoma o automático. Esses números não se configuram."
      ],
      [
        "p",
        "Você também conversa com o revisor. Um limite dito na conversa, como \"não envie nada para o GitHub até eu revisar\", vale como sinal de bloqueio até você retirar; mas ele é relido da conversa a cada verificação e pode se perder quando a conversa é {{compactacao|compactada}}. Para uma garantia, a aula 7.4 mostra a regra escrita. Já uma autorização dita na conversa só libera se nomear a ação e o detalhe que a torna perigosa, e vale para aquela ação, não para as próximas."
      ],
      [
        "p",
        "Mais um ponto: no automático, a primeira vez que o Claude lê um arquivo fora da pasta de trabalho, o Claude Code pergunta, com quatro opções: liberar sempre, liberar só desta vez, recusar só desta vez, ou recusar e bloquear de vez as leituras fora da pasta. A última grava a configuração `blockReadsOutsideWorkingDirectories` no seu settings.json, e ela passa a valer em todos os modos."
      ],
      [
        "p",
        "Quando não usar o automático: em trabalho sensível, como uma pasta com documentos de clientes, ou quando você quer ver cada passo. A documentação avisa que ele reduz as perguntas, mas não garante segurança. Nesses casos, o Manual, que pergunta antes de editar e de quase todo comando, é o certo."
      ],
      [
        "h3",
        "Qual modo para cada tarefa"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Tarefa",
            "Modo",
            "Por quê"
          ],
          "linhas": [
            [
              "Mudança grande, em vários arquivos, ou num projeto que você não conhece",
              "Plan, depois aprovar",
              "O mal-entendido aparece no papel, antes de qualquer edição"
            ],
            [
              "Tarefa longa em que você confia na direção",
              "Auto",
              "Poucas interrupções, com o revisor nas ações arriscadas"
            ],
            [
              "Pasta com dados sensíveis, ou você quer ver cada passo",
              "Manual",
              "Você aprova cada edição e quase todo comando"
            ],
            [
              "Você vai revisar tudo depois, pelas diferenças",
              "Accept edits",
              "Edita sem perguntar, mas pergunta antes dos comandos fora da rotina de pastas"
            ],
            [
              "Tarefa automática, sem ninguém olhando a tela",
              "Assunto da aula 7.10",
              "O claude -p tem regras próprias"
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
          "**O revisor do automático gasta do meu limite?** A documentação diz que as chamadas dele contam no uso de tokens nos planos Enterprise e nas contas da {{api|API}}; para os planos de assinatura, como o Max, ela não diz. E ele só entra em comandos e acessos à rede, não nas leituras e edições dentro da pasta.",
          "**Posso planejar e já deixar no automático?** Pode: a opção Yes, and use auto mode faz isso de uma vez.",
          "**E se o plano estiver quase bom?** Ctrl+G abre o plano no editor, ou No, keep planning com a correção.",
          "**O automático me pergunta antes de algo arriscado?** Não pergunta: bloqueia e avisa. Ele só volta a perguntar depois de 3 bloqueios seguidos ou 20 na sessão.",
          "**Mudar o modo no meio da sessão estraga algo?** Não. O Shift+Tab vale a partir da próxima ação, e o que já foi feito continua feito."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o que o revisor vê, ensinar o seu ambiente e o plano como padrão",
          "blocos": [
            [
              "p",
              "**O que o revisor vê.** Ele recebe as suas mensagens, as ações do Claude (menos as consultas só de leitura) e o conteúdo do {{claude-md|CLAUDE.md}}. Os resultados das ferramentas, como o texto de uma página ou de um arquivo, são tirados, para um conteúdo hostil não conseguir enganá-lo diretamente. E o Claude Code roda um `git status` antes de um comando que jogaria trabalho fora, para o revisor saber se há algo não guardado."
            ],
            [
              "p",
              "**Ensinar o seu ambiente.** Se o revisor barra sempre algo que é rotina para você, como enviar para o seu próprio {{repositorio|repositório}}, o comando `/auto-mode-setup`, desde a versão 2.1.304, de 19/10/2026, lê o projeto e as sessões recentes e propõe uma descrição do seu ambiente, que você revisa e salva nas configurações do usuário."
            ],
            [
              "p",
              "**Plano como padrão num projeto.** A linha `\"defaultMode\": \"plan\"` no `.claude/settings.json` de um projeto faz as sessões de terminal daquela pasta começarem no plano. O painel do VS Code ignora o modo inicial do projeto e tem a configuração própria, `claudeCode.initialPermissionMode`."
            ],
            [
              "p",
              "**Subagentes.** No automático, o revisor confere a tarefa antes de um {{subagente}} começar, cada ação dele e o relatório final, antes de você ler."
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
          "pergunta": "O comando no fim do quadro procura a palavra defaultMode dentro de um settings.json. O que você acha que aparece com este arquivo, e o que a resposta diz sobre as suas sessões de terminal?",
          "codigo": "# conteúdo do settings.json\n{\n  \"permissions\": {\n    \"defaultMode\": \"bypassPermissions\"\n  },\n  \"skipDangerousModePermissionPrompt\": true\n}\n\n# comando, na pasta do arquivo\nSelect-String -Path .\\settings.json -Pattern defaultMode",
          "linguagem": "texto",
          "resposta": "Aparece a linha que tem a palavra, com o nome do arquivo e o número da linha na frente: `settings.json:3:`, seguido do texto. Com `bypassPermissions`, as sessões de terminal começam em bypass e, nelas, o modo de planejamento não trava as edições. Use os botões: com `auto`, as sessões começam no automático e a trava do plano vale; sem a linha, nada aparece, e vale o padrão de quem instala hoje, o automático. No seu PC, o comando do texto procura no settings.json do seu usuário, e o número da linha pode ser outro.",
          "vivo": [
            [
              "Arquivo com auto",
              "# conteúdo do settings.json\n{\n  \"permissions\": {\n    \"defaultMode\": \"auto\"\n  }\n}\n\n# comando, na pasta do arquivo\nSelect-String -Path .\\settings.json -Pattern defaultMode",
              "\nsettings.json:3:    \"defaultMode\": \"auto\""
            ],
            [
              "Arquivo sem a linha do modo",
              "# conteúdo do settings.json\n{\n  \"theme\": \"dark\"\n}\n\n# comando, na pasta do arquivo\nSelect-String -Path .\\settings.json -Pattern defaultMode",
              ""
            ],
            [
              "Voltar ao original",
              "# conteúdo do settings.json\n{\n  \"permissions\": {\n    \"defaultMode\": \"bypassPermissions\"\n  },\n  \"skipDangerousModePermissionPrompt\": true\n}\n\n# comando, na pasta do arquivo\nSelect-String -Path .\\settings.json -Pattern defaultMode",
              "\nsettings.json:3:    \"defaultMode\": \"bypassPermissions\""
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
          "p": "Você vai reorganizar uma pasta de anotações que nunca abriu com o Claude, mexendo em vários arquivos. Qual modo usar primeiro?",
          "o": [
            [
              "Auto, porque o revisor barra o que der errado",
              "O revisor barra ações arriscadas, não mal-entendidos: ele deixaria passar uma reorganização errada, mas inofensiva."
            ],
            [
              "Plan, para ver e corrigir o plano antes de editar",
              "Isso. Em mudança grande num lugar desconhecido, o mal-entendido aparece no papel, onde custa uma frase."
            ],
            [
              "Accept edits, e você confere tudo com calma no final",
              "Conferir no final funciona, mas obriga a desfazer o que saiu errado. No plano, o erro é pego antes."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Estou em plan mode no terminal, e o meu settings.json tem defaultMode bypassPermissions. Ele pode editar arquivos durante o plano?\" O Claude respondeu: \"Não. No modo de planejamento, as edições ficam travadas até você aprovar o plano, em qualquer lugar e com qualquer configuração. Pode pedir à vontade.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: no plano, a trava vale sempre, até a sua aprovação final",
              "No terminal interativo com o bypass disponível, a trava não é imposta. O plano vira só um pedido."
            ],
            [
              "O erro é outro: no plano, ele nem lê os arquivos da pasta, só conversa",
              "No plano, ele lê arquivos e roda comandos para explorar. O que fica travado, quando a trava vale, é editar."
            ],
            [
              "Com o bypass disponível no terminal, a trava não vale, e ele edita",
              "Isso. A trava vale no painel do VS Code e no claude -p, mas não numa sessão de terminal com o bypass disponível."
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
            "\"Estou em plan mode, então ele não vai mexer em nada.\"",
            "No terminal com o bypass disponível, a trava não vale. Confira o defaultMode com o {{select-string|Select-String}}, ou planeje no painel do VS Code."
          ],
          [
            "\"No automático, ele me pergunta antes do que é arriscado.\"",
            "Ele bloqueia e avisa, sem perguntar. Só volta a perguntar depois de 3 bloqueios seguidos ou 20 na sessão."
          ],
          [
            "\"Eu disse não faça push, então está garantido.\"",
            "O revisor respeita o limite, mas ele pode se perder quando a conversa é compactada. Garantia é uma regra escrita, da aula 7.4."
          ],
          [
            "\"Aprovei o plano e quero planejar de novo, mas ele já está editando.\"",
            "Aprovar tira a sessão do modo de planejamento. Para planejar de novo, volte com Shift+Tab ou comece o pedido com /plan."
          ],
          [
            "\"O revisor leu o arquivo e viu que era seguro.\"",
            "O revisor não vê o conteúdo dos arquivos: os resultados das ferramentas são tirados. Ele julga pelos pedidos e pelas ações."
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
          "p": "Quais são as três opções quando o plano fica pronto?",
          "r": [
            "Yes, and use auto mode: aprova e segue no automático.",
            "Yes, manually approve edits: aprova e pede permissão antes de cada edição.",
            "No, keep planning: continua planejando, com a sua correção."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que acontece quando o modo automático bloqueia uma ação?",
          "r": [
            "Aparece um aviso, e o Claude tenta outro caminho.",
            "A ação fica em /permissions, na aba Recently blocked, onde você pode aprovar.",
            "Depois de 3 bloqueios seguidos ou 20 na sessão, ele volta a perguntar."
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
          "titulo": "O plano que trava e o automático que segue",
          "lugar": "No PC, com o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai conferir em que modo as suas sessões começam, abrir uma sessão de teste com o automático como modo inicial, sem mudar o seu settings.json, fazer um plano, corrigir, aprovar com edição manual e, por fim, passar para o automático. Precisa do Claude Code instalado. O arquivo `modo-auto.json` que você vai criar vale só para a sessão aberta com ele. Pelo app: no app desktop, o seletor de modo fica abaixo da caixa de texto e tem o Plan; abra a pasta pela aba Code e siga do passo 9 em diante. Os comandos dos passos 2 a 5 foram rodados de verdade no PowerShell 5.1, em 08/11/2026. A sessão do Claude Code, do passo 6 em diante, não foi testada antes de publicar.",
          "naoTestado": "A sessão do Claude Code (passos 6 a 18) não foi rodada para escrever esta aula: exige o Claude Code interativo com login, e rodar o programa no PC do teste usaria a conta e as configurações do dono. O comportamento do plano, das opções de aprovação, do --settings e do ciclo do Shift+Tab vem das páginas oficiais de modos de permissão, de configurações e da referência da CLI, conferidas em 08/11/2026; em especial, não foi testado se o --settings tira o bypass do ciclo num PC com bypass no settings.json do usuário, e por isso o passo 8 confere. Os passos 2 a 5 foram rodados no PowerShell 5.1 em 08/11/2026; o passo 2, no settings.json do PC do teste, só com leitura.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal.",
              "espera": "Abre uma janela com uma linha que começa com PS."
            },
            {
              "faz": "Cole este comando. Ele só lê a linha do modo inicial no settings.json do seu usuário.",
              "cola": "Select-String -Path \"$env:USERPROFILE\\.claude\\settings.json\" -Pattern defaultMode",
              "saida": "\nC:\\Users\\SeuNome\\.claude\\settings.json:13:    \"defaultMode\": \"bypassPermissions\"",
              "espera": "Uma linha com o modo inicial, como no exemplo, do PC em que esta aula foi escrita. Se aparecer bypassPermissions, as suas sessões de terminal começam em bypass. Se nada aparecer, o arquivo não define o modo, e vale o automático. Se der erro dizendo que o caminho não existe, você nunca mudou uma configuração; siga igual."
            },
            {
              "faz": "Cole este comando, que cria a pasta de teste e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\modos-teste | Out-Null; Set-Location C:\\Projetos\\modos-teste",
              "espera": "Nada é impresso, e o começo da linha muda para PS C:\\Projetos\\modos-teste>."
            },
            {
              "faz": "Cole este bloco de duas linhas. A primeira cria o arquivo que muda o modo inicial só desta sessão; a segunda, as anotações que o Claude vai reorganizar.",
              "cola": "Set-Content -Encoding ascii modo-auto.json '{ \"permissions\": { \"defaultMode\": \"auto\" } }'\nSet-Content -Encoding utf8 notas.md \"# Notas de macroeconomia`n`nInflação: alta geral dos preços.`nIPCA: o índice oficial de inflação no Brasil.\"",
              "espera": "Nada é impresso."
            },
            {
              "faz": "Cole este comando para conferir os dois arquivos.",
              "cola": "Get-ChildItem -Name",
              "saida": "modo-auto.json\nnotas.md",
              "espera": "Os dois nomes, um por linha."
            },
            {
              "faz": "Abra o Claude Code com o arquivo de modo inicial.",
              "cola": "claude --settings .\\modo-auto.json",
              "espera": "O Claude Code abre na pasta C:\\Projetos\\modos-teste, e a linha de baixo mostra ⏵⏵ auto mode on."
            },
            {
              "faz": "Se aparecer a pergunta de confiança da pasta, confirme com Enter.",
              "espera": "A pergunta só aparece na primeira vez nesta pasta. Depois dela, o Claude Code espera o seu pedido."
            },
            {
              "faz": "Aperte Shift+Tab, uma vez de cada vez, olhando a linha de baixo, até ela voltar a auto mode on.",
              "espera": "A linha passa por manual mode on, accept edits on e plan mode on, e volta a auto mode on. Se aparecer bypass permissions on no caminho, o bypass continua disponível nesta sessão, e a trava do plano não vale: veja \"Se der errado\" antes de seguir."
            },
            {
              "faz": "Aperte Shift+Tab até a linha de baixo mostrar plan mode on.",
              "espera": "A linha mostra ⏸ plan mode on."
            },
            {
              "faz": "Cole este pedido e aperte Enter.",
              "cola": "Quero separar estas notas em dois arquivos, inflacao.md e ipca.md, um por tema. Faça um plano.",
              "espera": "Ele lê o notas.md e apresenta um plano, com as opções Yes, and use auto mode, Yes, manually approve edits e No, keep planning. Nenhum arquivo novo foi criado ainda."
            },
            {
              "faz": "Escolha No, keep planning, com as setas e Enter.",
              "espera": "O plano continua aberto, e o Claude Code espera você dizer o que mudar."
            },
            {
              "faz": "Cole esta correção e aperte Enter.",
              "cola": "Mantenha o notas.md intacto, sem apagar nem mudar nada nele.",
              "espera": "O plano volta revisado, sem nenhuma etapa que mexa no notas.md, e as mesmas três opções aparecem."
            },
            {
              "faz": "Escolha Yes, manually approve edits.",
              "espera": "A linha de baixo passa a manual mode on, e ele começa a criar os arquivos, pedindo permissão antes de cada um."
            },
            {
              "faz": "Aceite cada pedido de permissão para criar inflacao.md e ipca.md.",
              "espera": "Os dois arquivos são criados, um depois do outro, e ele avisa quando termina."
            },
            {
              "faz": "Digite ! ls e aperte Enter para conferir a pasta.",
              "cola": "! ls",
              "espera": "Aparecem inflacao.md, ipca.md, modo-auto.json e notas.md, e o Claude comenta."
            },
            {
              "faz": "Aperte Shift+Tab até a linha de baixo mostrar auto mode on.",
              "espera": "A linha mostra ⏵⏵ auto mode on."
            },
            {
              "faz": "Cole este pedido e aperte Enter.",
              "cola": "Acrescente no fim do ipca.md uma linha dizendo que o IPCA é calculado pelo IBGE.",
              "espera": "Ele edita o ipca.md direto, sem pedir permissão: no automático, editar dentro da pasta passa sem pergunta."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha. Nada mudou no settings.json do seu usuário: a próxima sessão comum começa no mesmo modo de antes."
            }
          ],
          "errado": "se o passo 8 mostrar bypass permissions on no ciclo, o --settings não tirou o bypass nesta sessão, e o plano não vai travar as edições: saia com /exit e faça a parte do plano, do passo 9 ao 14, no painel do Claude Code no VS Code, abrindo a pasta C:\\Projetos\\modos-teste e escolhendo Plan no indicador de modo, abaixo da caixa de texto; ou mude o modo inicial de vez, como a aula 7.4 mostra. Se o Claude Code abrir com uma tela de erro de configurações, o modo-auto.json foi colado pela metade: escolha sair e repita o passo 4. Se a linha do passo 6 mostrar outro modo, como manual mode on, o automático não está disponível na sua conta naquele momento; siga o laboratório, e as opções do plano aparecem com outro nome, como Yes, auto-accept edits. Se, no passo 10, ele criar arquivos antes de você aprovar, a sessão estava com o bypass disponível: apague inflacao.md e ipca.md pelo Explorador de Arquivos e use o caminho do VS Code."
        }
      ],
      [
        "fontes",
        [
          [
            "Escolha um modo de permissão (modo de planejamento, opções de aprovação, modo auto, o que o classificador bloqueia, primeira leitura fora da pasta, bypass e a trava do plano), Claude Code",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Boas práticas (alterar o modo de permissão; limites ditos na conversa e regra deny), Claude Code",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Arquivos de configurações e precedência (a opção --settings vale por cima do arquivo do usuário naquela sessão), Claude Code",
            "https://code.claude.com/docs/pt/settings",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência da CLI (--permission-mode, --settings), Claude Code",
            "https://code.claude.com/docs/pt/cli-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Configurar o modo auto (/auto-mode-setup, rever bloqueios), Claude Code",
            "https://code.claude.com/docs/pt/auto-mode-config",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.299, de 14/10/2026: aviso único do plano com bypass disponível; 2.1.304, de 19/10/2026: /auto-mode-setup; sem versão em português)",
            "https://code.claude.com/docs/en/changelog",
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
          "Plan para pensar antes, Auto para seguir com revisor; e o bypass solta a trava do plano",
          "Isso. Cada modo tem a sua tarefa, e, no terminal com o bypass disponível, o plano vira só um pedido."
        ],
        [
          "Use o Auto em tudo: o revisor barra o que é arriscado, e o plano só atrasa as tarefas grandes",
          "O revisor barra ações arriscadas, não mal-entendidos. Em mudança grande, o plano evita retrabalho."
        ],
        [
          "O plano sempre trava as edições, e o Auto pergunta antes de fazer algo arriscado",
          "No terminal com o bypass disponível, o plano não trava. E o Auto bloqueia sem perguntar."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "No modo automático, o revisor barrou uma ação que você queria. Onde você a aprova para o Claude tentar de novo?",
        "o": [
          [
            "No settings.json, apagando a linha do defaultMode",
            "Apagar a linha do modo inicial só muda as próximas sessões; não aprova uma ação bloqueada agora."
          ],
          [
            "Em /permissions, na aba Recently blocked",
            "Isso. Ali ficam as ações bloqueadas há pouco, e você pode aprovar uma para ele tentar de novo."
          ],
          [
            "Em /plan, aprovando a ação como se fosse um plano",
            "O /plan entra no modo de planejamento. As ações bloqueadas ficam em /permissions."
          ]
        ],
        "c": 1
      },
      {
        "p": "Onde a trava do modo de planejamento vale mesmo com o bypass disponível?",
        "o": [
          [
            "Em qualquer sessão de terminal aberta depois do plano",
            "Numa sessão interativa de terminal com o bypass disponível, a trava não é imposta."
          ],
          [
            "Em sessões abertas com claude --permission-mode plan",
            "Essa opção escolhe o modo inicial, mas, com o bypass no settings.json do usuário, ele continua disponível no terminal, e a trava não vale."
          ],
          [
            "No painel do Claude Code no VS Code e nas execuções com claude -p",
            "Isso. Fora do terminal interativo, a trava do plano é mantida."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como sei se o meu plano trava as edições?",
        "Cole no PowerShell: Select-String -Path \"$env:USERPROFILE\\.claude\\settings.json\" -Pattern defaultMode. Se aparecer bypassPermissions, as suas sessões de terminal começam com o bypass disponível, e o plano não trava. Nesse caso, planeje no painel do VS Code ou abra a sessão com um --settings que diga \"defaultMode\": \"auto\"."
      ],
      [
        "O que faço quando o Auto bloqueia algo?",
        "Leia o aviso: o Claude recebe o motivo e tenta outro caminho. Se a ação era mesmo o que você queria, abra /permissions, aba Recently blocked, e aprove. Se ele bloquear 3 vezes seguidas, o Claude Code volta a perguntar."
      ],
      [
        "Qual modo uso para uma tarefa grande?",
        "Plan primeiro: ele lê, propõe e você corrige no papel. Depois, aprove com Yes, manually approve edits para ver cada edição, ou com Yes, and use auto mode se confiar na direção."
      ]
    ]
  },
  "7-4": {
    "tempo": 48,
    "video": "a7-4",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já apertou \"sim, não pergunte de novo\" sem ler direito, ou deixou o {{claude-code|Claude Code}} num modo em que ele não pergunta nada, e depois ficou sem saber o que ele pode fazer sozinho. Esta aula abre o arquivo onde isso fica escrito, o {{settings-json|settings.json}}, e mostra como escrever regras que valem mesmo quando ninguém está olhando a tela.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O modo de {{permissao|permissão}}, das aulas 0.0 e 7.3, é o combinado geral: quanto o Claude Code faz sem perguntar. As {{regra-de-permissao|regras de permissão}} são os detalhes por cima dele: este {{comando}} pode sempre, aquele sempre pergunta, este {{arquivo}} nunca. As duas coisas moram em arquivos de texto, que você pode ler, entender e mudar."
      ],
      [
        "p",
        "Isso importa por um motivo simples: o que está numa regra é imposto pelo programa, enquanto o que está num pedido ou no {{claude-md|CLAUDE.md}} é só levado em conta pelo {{modelo}}. A documentação chama o primeiro tipo de determinístico, porque o Claude Code aplica sempre, não importa o que o modelo decida, e o segundo de não determinístico. Quando algo não pode acontecer nunca, como ler um arquivo com chaves ou apagar uma pasta inteira, a garantia vem de uma regra, não de uma frase bem escrita."
      ],
      [
        "p",
        "E há o risco de pular as confirmações. Se o seu Claude Code começa em {{bypass}}, quase nada pergunta, e as regras estão entre as poucas coisas que ainda seguram. Esta aula mostra o que elas seguram, o que não seguram e como mudar o modo, se você quiser. A decisão é sua."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao prédio do estagiário da aula 0.0. Na entrada da sala, você prega uma lista com três colunas: o que ele pode fazer sem perguntar, o que precisa da sua assinatura antes e o que é proibido. Quem confere a lista é o porteiro, que fica entre o estagiário e a porta, e não o próprio estagiário: ele pode estar convencido de que precisa daquele arquivo, mas o porteiro não deixa passar. Para tudo o que a lista não cita, vale o combinado do modo de permissão. O porteiro é o Claude Code, o programa; o estagiário é o modelo; a lista são as regras do settings.json. E o supervisor do modo automático, da aula 7.3, fica depois do porteiro: só vê o que a lista deixou passar."
      ],
      [
        "quebra",
        "Um porteiro de verdade vigia a porta inteira; este só confere o que reconhece. Uma regra que proíbe ler um arquivo vale para as ferramentas de arquivo do Claude e para os comandos de leitura que o Claude Code identifica, mas não para um programa que o Claude escreva e que abra o arquivo por conta própria. E no bypass o porteiro para de conferir a coluna do \"pode\", porque tudo já pode: só as colunas do \"pergunte antes\" e do \"proibido\" continuam valendo."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "As camadas, de baixo para cima"
      ],
      [
        "p",
        "Quando o Claude quer fazer algo, o Claude Code decide em camadas. Na base está o modo de permissão. Por cima, as regras que você escreveu, conferidas numa ordem fixa: primeiro as de proibir (deny), depois as de perguntar (ask), por último as de liberar (allow). A primeira que combina decide, e uma regra mais específica não fura essa ordem. Algumas ações têm tratamento próprio: gravar em {{caminho-protegido|caminhos protegidos}}, como as pastas `.git` e `.claude`, e apagar caminhos críticos, como a raiz do disco. A tabela mostra o que o modo Manual pergunta para cada tipo de ação, e por quanto tempo vale o \"sim, não pergunte de novo\":"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Tipo de ação",
            "O Manual pergunta?",
            "\"Sim, não pergunte de novo\" vale"
          ],
          "linhas": [
            [
              "Ler arquivos e buscar dentro da pasta",
              "Não",
              "Não se aplica"
            ],
            [
              "Rodar comandos",
              "Sim, menos uma lista de comandos só de leitura",
              "Para sempre, naquele projeto e naquele comando"
            ],
            [
              "Criar ou editar arquivos",
              "Sim",
              "Até o fim da {{sessao|sessão}}"
            ],
            [
              "Buscar uma página na internet",
              "Sim, menos alguns sites de documentação",
              "Para sempre, naquele projeto e naquele site"
            ]
          ]
        }
      ],
      [
        "p",
        "O \"para sempre\" é literal: o Claude Code grava a regra num arquivo da pasta em que você abriu a sessão, `.claude\\settings.local.json`, e ela vale nas sessões seguintes. É um dos jeitos de aparecerem regras que você nunca escreveu. Quando um pedido de permissão oferece só a opção de aprovar uma vez, é porque a opção mais ampla liberaria algo que a tela não consegue mostrar inteiro."
      ],
      [
        "h3",
        "Onde ficam as configurações, e qual ganha"
      ],
      [
        "p",
        "O Claude Code lê quatro fontes de configuração, cada uma com um alcance, que a documentação chama de {{escopo-de-configuracao|escopo}}:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Arquivo",
            "Vale para",
            "Para quê"
          ],
          "linhas": [
            [
              "`C:\\Users\\SeuNome\\.claude\\settings.json`",
              "Você, em todos os projetos do PC",
              "Preferências e regras gerais, como o modo inicial"
            ],
            [
              "`.claude\\settings.json`, dentro do projeto",
              "Todos que usam aquela pasta; vai para o GitHub junto",
              "Regras do projeto"
            ],
            [
              "`.claude\\settings.local.json`, dentro do projeto",
              "Só você, só naquele projeto",
              "Exceções pessoais; é onde caem os \"não pergunte de novo\""
            ],
            [
              "Configurações gerenciadas",
              "Todos de uma organização",
              "Política de empresa; não é o caso de uma conta pessoal"
            ]
          ]
        }
      ],
      [
        "p",
        "Quando a mesma configuração aparece em dois lugares, ganha o mais forte, nesta ordem: as gerenciadas; depois a opção `--settings` na hora de abrir, usada no laboratório da aula 7.3; depois o arquivo local do projeto; depois o do projeto; por último o do usuário. As listas de regras não se substituem, se somam: um `allow` do projeto e um `deny` do usuário valem os dois. E, como o deny é conferido primeiro, uma proibição em qualquer arquivo ganha de uma liberação em qualquer outro."
      ],
      [
        "p",
        "Duas exceções protegem você. O modo inicial `auto` ou `bypassPermissions` escrito no `.claude\\settings.json` de um projeto não vale nas sessões de terminal: esses dois só valem no arquivo do usuário, para um projeto baixado da internet não conseguir ligar o bypass no seu PC. E as regras de liberar que vêm no arquivo do projeto só valem depois que você aceita a pergunta de {{confianca-da-pasta|confiança da pasta}}, que lista o que ela liberaria; as de proibir e de perguntar valem sempre, porque só restringem."
      ],
      [
        "p",
        "Existe ainda o `C:\\Users\\SeuNome\\.claude.json`, com um ponto antes do nome e fora da pasta `.claude`. É o próprio programa que escreve nele, com dados da conta e as decisões de confiança, e ele não é para editar."
      ],
      [
        "h3",
        "Por dentro de um settings.json"
      ],
      [
        "p",
        "O arquivo é {{json|JSON}}: nomes e valores entre aspas, listas entre colchetes, tudo dentro de chaves. A parte de permissões de um arquivo de usuário pode ser assim:"
      ],
      [
        "codigo",
        {
          "texto": "{\n  \"permissions\": {\n    \"defaultMode\": \"auto\",\n    \"allow\": [\n      \"PowerShell(git commit *)\",\n      \"Bash(git commit *)\"\n    ],\n    \"ask\": [\n      \"PowerShell(git push *)\",\n      \"Bash(git push *)\"\n    ],\n    \"deny\": [\n      \"Read(./.env)\",\n      \"Read(./.env.*)\"\n    ]\n  }\n}",
          "linguagem": "json",
          "rotulo": "settings.json"
        }
      ],
      [
        "p",
        "Leia de dentro para fora. `defaultMode` é o modo inicial. Em `allow`, os commits passam sem perguntar; em `ask`, enviar para o {{github|GitHub}} sempre pergunta, até no bypass; em `deny`, o Claude não lê o arquivo {{env|.env}}, onde ficam chaves, nem as variações dele, como `.env.local`. Cada regra de comando aparece duas vezes, uma para o {{powershell|PowerShell}} e outra para o {{bash|Bash}}, por um motivo que vem logo abaixo."
      ],
      [
        "p",
        "O JSON do Claude Code é rigoroso: um comentário com `//` ou uma vírgula depois do último item de uma lista são erros. Na sessão seguinte, ele mostra uma tela de erro de configurações e oferece consertar o arquivo com a ajuda do Claude, sair, ou seguir sem o arquivo quebrado. Uma regra malformada sozinha só gera um aviso, e as outras continuam valendo. Depois de salvar, as mudanças em permissões valem na sessão aberta, sem reiniciar, e o `/status` mostra, na linha Setting sources, quais arquivos foram carregados."
      ],
      [
        "h3",
        "Como escrever uma regra"
      ],
      [
        "p",
        "Toda regra tem a forma `Ferramenta` ou `Ferramenta(detalhe)`. Só o nome vale para todo uso da {{ferramenta}}: `WebFetch` é qualquer busca de página na internet. Com o detalhe entre parênteses, a regra fica estreita:"
      ],
      [
        "lista",
        [
          "**Comandos**, `PowerShell(comando)` e `Bash(comando)`: o `*` vale por qualquer texto. `PowerShell(git commit *)` pega todo commit; `PowerShell(git *)` pega todo comando do {{git|Git}}, inclusive o push. Ponha o `*` depois da palavra que diz o que o comando faz, nunca antes. No PowerShell, uma regra escrita para o nome completo também pega os {{alias|apelidos}} comuns dele, como `rm` para `Remove-Item`, e maiúsculas não importam.",
          "**Arquivos**, `Read(caminho)` e `Edit(caminho)`: o detalhe é um caminho, no estilo do .gitignore da aula 3.6. `./` começa na pasta de trabalho, `~/` na sua pasta pessoal e `//` na raiz do disco; no Windows, `C:\\Users` vira `/c/Users`, então `Read(//c/**/.env)` pega qualquer `.env` do disco C, e `Read(//**/.env)`, de qualquer disco. Uma regra `Read` de proibir também impede editar e criar o arquivo; para travar só a escrita, a regra é `Edit`, porque `Write(caminho)` não funciona.",
          "**Internet**, `WebFetch(domain:exemplo.com)`: vale para um site."
        ]
      ],
      [
        "p",
        "O motivo das regras em dobro: no Windows com o Git instalado, o Claude tem dois terminais, e uma regra `Bash` não segura o PowerShell. Pior: uma regra de proibir feita para o Bash desliga a ferramenta PowerShell na sessão, sem aviso, a não ser que exista também alguma regra `PowerShell` nos arquivos. Escrevendo as duas, cada terminal tem a sua regra, e nenhum é desligado de surpresa."
      ],
      [
        "p",
        "Uma regra de proibir com só o nome, como `Bash`, tira a ferramenta inteira da vista do Claude. Com detalhe, como `Bash(rm *)`, a ferramenta continua, e só aquele uso é bloqueado. E cuidado com a barra no começo: no arquivo do usuário, `Read(/segredos/**)` aponta para dentro de `C:\\Users\\SeuNome\\.claude`, não para uma pasta do projeto; para o projeto, use `./`."
      ],
      [
        "h3",
        "A tela /permissions"
      ],
      [
        "p",
        "Você não precisa abrir o arquivo para ver as regras: {{permissions-comando|/permissions}}, dentro do Claude Code, lista todas, separadas por escopo, com o arquivo de onde cada uma veio. Ali dá para acrescentar e tirar regras, que passam a valer na próxima ação do Claude, até no meio de uma resposta, além de gerenciar as pastas de trabalho e, no modo automático, ver as ações bloqueadas há pouco. Ao abrir, o Claude Code também avisa quando uma regra tem um erro comum, como o `*` antes da palavra principal do comando."
      ],
      [
        "h3",
        "Até onde ele pode ir: as pastas de trabalho"
      ],
      [
        "p",
        "Por padrão, o Claude acessa a pasta em que você abriu o Claude Code, o {{diretorio-de-trabalho|diretório de trabalho}}. Para dar acesso a outra, há `--add-dir` na hora de abrir, `/add-dir` durante a sessão ou a lista `additionalDirectories` no settings.json. E há dois freios que valem em qualquer modo, inclusive no bypass: `blockReadsOutsideWorkingDirectories`, que impede as ferramentas de arquivo de ler fora das pastas de trabalho, e `blockWritesOutsideWorkingDirectories`, da versão 2.1.314, de 30/10/2026, que as impede de gravar fora delas. O segundo não limita comandos de terminal: um comando ainda grava onde quiser. E, no Windows sem o {{wsl|WSL}}, não existe a caixa de areia que, no Mac e no Linux, confina os comandos; o módulo 11 volta a isso."
      ],
      [
        "h3",
        "O risco de pular as confirmações"
      ],
      [
        "p",
        "A documentação define o bypass como modo para {{ambiente-isolado-seguranca|contêineres e máquinas virtuais isoladas}}, e avisa que ele não protege contra ordens escondidas em páginas e arquivos, a {{prompt-injection|injeção de prompt}}. Um caso real ajuda a ver o tamanho do risco. Em fevereiro de 2026, o criador de uma plataforma de cursos deixou o Claude Code rodar comandos do Terraform, uma ferramenta que cria e apaga {{servidor|servidores}} na nuvem. Por causa de um arquivo de estado antigo, o agente rodou `terraform destroy` e apagou a estrutura de produção, com o banco de dados de dois anos e meio de cursos e os {{backup|backups}} automáticos. Com o suporte pago da AWS, apareceu uma cópia que não aparecia no painel, e tudo voltou em cerca de 24 horas. No relato, o autor escreveu que confiou demais no agente para rodar esses comandos, e que o banco era fácil demais de apagar."
      ],
      [
        "p",
        "Duas lições servem para quem nunca vai usar Terraform. A primeira: o que tem alcance grande, como apagar, enviar ou publicar, merece uma regra `ask` ou `deny`, que vale em qualquer modo. A segunda: o modo automático bloqueia por padrão justamente `terraform destroy` e ações do mesmo tamanho, coisa que o bypass não faz."
      ],
      [
        "h3",
        "Se o seu está em bypass: como mudar, se você quiser"
      ],
      [
        "p",
        "Primeiro confira, com o comando da aula 7.3, que mostra a linha do modo inicial no settings.json do seu usuário. Se aparecer `bypassPermissions`, estas são as saídas, da mais leve à mais firme:"
      ],
      [
        "lista",
        [
          "**Só nesta sessão:** Shift+Tab troca o modo. O bypass continua no ciclo e volta na próxima abertura.",
          "**Só nesta abertura:** `claude --permission-mode auto` abre no automático.",
          "**De vez:** guarde antes uma cópia do arquivo; abra-o com `notepad $env:USERPROFILE\\.claude\\settings.json`, troque `bypassPermissions` por `auto` na linha `defaultMode`, mantendo as aspas, salve e abra o Claude Code de novo. A linha de baixo passa a mostrar `auto mode on`.",
          "**Trancar a porta:** a linha `\"disableBypassPermissionsMode\": \"disable\"`, dentro de `permissions`, impede o bypass mesmo que alguém peça na hora de abrir. É a chave que as empresas usam, e serve para você se proteger de você."
        ]
      ],
      [
        "p",
        "A linha `skipDangerousModePermissionPrompt`, que costuma acompanhar o bypass, só registra que você aceitou o aviso de responsabilidade na primeira vez; tirá-la faz o aviso voltar. O curso não muda nada disso por você."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Se eu errar o JSON, o Claude Code para de funcionar?** Não para: na próxima abertura, ele avisa e oferece consertar, sair ou seguir sem o arquivo. O laboratório confere o arquivo antes, com o PowerShell.",
          "**A regra vale na hora?** Vale: o Claude Code relê o arquivo quando ele muda. O modo inicial é que só pesa na próxima abertura.",
          "**O modo automático respeita as minhas regras?** Respeita, e antes dele: deny e ask são resolvidos antes de o revisor ver a ação.",
          "**Um projeto baixado pode liberar coisas no meu PC?** As liberações do projeto só valem depois da pergunta de confiança, que lista o que ele liberaria; bypass e automático como modo inicial nunca valem vindos do projeto.",
          "**Escrevi no CLAUDE.md \"nunca leia o .env\". Não basta?** É um pedido, que o modelo quase sempre segue. A regra `deny` é imposta pelo programa.",
          "**Custa alguma coisa?** Não. Regras não gastam do limite; um \"não\" do porteiro até economiza, porque a ação nem acontece."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: menos perguntas sem bypass, regras por parâmetro e uma diferença de tradução",
          "blocos": [
            [
              "p",
              "**Menos perguntas sem bypass.** Se o Manual pergunta demais, `/fewer-permission-prompts` lê as suas conversas recentes, acha os comandos só de leitura que você aprova sempre e acrescenta uma lista `allow` no `.claude/settings.json` do projeto. E a {{skill}} `/update-config` muda o settings.json a partir de um pedido em português, como \"permita o git commit neste projeto\"."
            ],
            [
              "p",
              "**Regras por parâmetro.** As regras de proibir e de perguntar aceitam a forma `Ferramenta(parâmetro:valor)`, como `Agent(model:opus)`, para pegar um {{subagente}} que pede o Opus. Não vale para o campo principal: `Bash(command:rm *)` é ignorada, porque um comando composto escaparia dela."
            ],
            [
              "p",
              "**O modo dontAsk.** Nega tudo o que perguntaria e só roda o que as regras liberam. Serve para tarefas automáticas, e só abre com `claude --permission-mode dontAsk`."
            ],
            [
              "p",
              "**Uma diferença de tradução.** Na página em português sobre modos, a frase \"Regras de permissão não têm efeito em bypassPermissions\" traduz \"Allow rules\", do original em inglês: são as regras de liberar que não fazem efeito no bypass. As de proibir e de perguntar continuam valendo, como as duas versões dizem em outros trechos."
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
          "pergunta": "Antes de o Claude Code ler um settings.json, dá para conferir se ele está bem formado com o PowerShell, na pasta do arquivo: `Get-Content settings.json -Raw | ConvertFrom-Json | ConvertTo-Json -Depth 5`. O que você acha que aparece com este arquivo?",
          "codigo": "{\n  \"permissions\": {\n    \"defaultMode\": \"auto\",\n    \"deny\": [\"Read(./segredo.txt)\"]\n  }\n}",
          "linguagem": "json",
          "resposta": "O PowerShell lê o JSON e o escreve de volta, com outro espaçamento: se ele conseguiu, o arquivo está bem formado. Use os botões para ver dois erros clássicos. O PowerShell não é o Claude Code, mas os dois recusam os mesmos erros: a vírgula depois do último item e o comentário com //. As linhas \"At line:1 char:34\" e o \"+ ~~~\" apontam onde, no comando, o erro foi notado; a primeira linha diz o problema.",
          "vivo": [
            [
              "Pôr uma vírgula depois do último item",
              "{\n  \"permissions\": {\n    \"defaultMode\": \"auto\",\n    \"deny\": [\"Read(./segredo.txt)\"],\n  }\n}",
              "ConvertFrom-Json : Invalid JSON primitive: .\nAt line:1 char:34\n+ Get-Content settings.json -Raw | ConvertFrom-Json | ConvertTo-Json -D ...\n+                                  ~~~~~~~~~~~~~~~~\n    + CategoryInfo          : NotSpecified: (:) [ConvertFrom-Json], ArgumentException\n    + FullyQualifiedErrorId : System.ArgumentException,Microsoft.PowerShell.Commands.ConvertFromJsonCommand"
            ],
            [
              "Pôr um comentário com //",
              "{\n  // modo do dia a dia\n  \"permissions\": {\n    \"defaultMode\": \"auto\"\n  }\n}",
              "ConvertFrom-Json : Invalid object passed in, ':' or '}' expected. (5): {\n  // modo do dia a dia\n  \"permissions\": {\n    \"defaultMode\": \"auto\"\n  }\n}\nAt line:1 char:34\n+ Get-Content settings.json -Raw | ConvertFrom-Json | ConvertTo-Json -D ...\n+                                  ~~~~~~~~~~~~~~~~\n    + CategoryInfo          : NotSpecified: (:) [ConvertFrom-Json], ArgumentException\n    + FullyQualifiedErrorId : System.ArgumentException,Microsoft.PowerShell.Commands.ConvertFromJsonCommand"
            ],
            [
              "Voltar ao original",
              "{\n  \"permissions\": {\n    \"defaultMode\": \"auto\",\n    \"deny\": [\"Read(./segredo.txt)\"]\n  }\n}",
              "{\n    \"permissions\":  {\n                        \"defaultMode\":  \"auto\",\n                        \"deny\":  [\n                                     \"Read(./segredo.txt)\"\n                                 ]\n                    }\n}"
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
          "p": "O settings.json do seu usuário tem \"allow\": [\"PowerShell(git *)\"], e o do projeto tem \"deny\": [\"PowerShell(git push *)\"]. O Claude tenta um git push. O que acontece?",
          "o": [
            [
              "Passa: o arquivo do usuário vale para todos os projetos do PC",
              "Valer para todos os projetos não dá prioridade a ele: as listas se somam, e o deny é conferido primeiro."
            ],
            [
              "É bloqueado: o deny é conferido antes, venha de onde vier",
              "Isso. As listas dos dois arquivos se somam, e uma proibição ganha de qualquer liberação."
            ],
            [
              "Passa: a regra mais ampla, git *, cobre o push e decide",
              "A especificidade não importa, e a ordem é deny, ask, allow. O deny do push decide primeiro."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Meu Claude Code está em bypass. Uma regra deny no settings.json ainda funciona?\" O Claude respondeu: \"Funciona. No bypass, as regras de proibir e de perguntar continuam valendo; só as de liberar perdem o efeito, porque tudo já está liberado.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: deny e ask valem no bypass; o allow é que perde o sentido",
              "Isso. A resposta confere com a documentação. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Está errada: no bypass, nenhuma regra do settings.json é conferida",
              "As regras de proibir bloqueiam em todos os modos, inclusive no bypass, e as de perguntar continuam perguntando."
            ],
            [
              "Está errada: no bypass, só valem as regras do arquivo do projeto",
              "O escopo não muda nada aqui: deny e ask valem no bypass, venham do arquivo do usuário ou do projeto."
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
            "\"Escrevi a regra só para o Bash.\"",
            "No Windows com o Git, há dois terminais. Uma regra Bash não segura o PowerShell, e um deny no Bash desliga o PowerShell sem aviso se não houver regra PowerShell. Escreva as duas."
          ],
          [
            "\"Pus defaultMode auto no settings.json do projeto e nada mudou.\"",
            "Auto e bypassPermissions como modo inicial só valem no arquivo do usuário, C:\\Users\\SeuNome\\.claude\\settings.json."
          ],
          [
            "\"`Read(/segredos/**)` no meu arquivo de usuário protege a pasta do projeto.\"",
            "No arquivo do usuário, a barra no começo aponta para dentro da pasta .claude dele. Para o projeto, use `./segredos/**`; para o disco todo, `//c/`."
          ],
          [
            "\"Com a regra deny, o arquivo está protegido de tudo.\"",
            "A regra vale para as ferramentas de arquivo do Claude e para os comandos que o Claude Code reconhece. Um script que ele escreva pode abrir o arquivo. Segredo de verdade não fica na pasta de trabalho."
          ],
          [
            "\"Pus um comentário para lembrar o que a regra faz.\"",
            "O settings.json não aceita comentários com //. Para lembrar, anote em outro arquivo, ou confira no /permissions de onde cada regra veio."
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
          "p": "Em que ordem as regras são conferidas, e o que isso garante?",
          "r": [
            "Deny, depois ask, depois allow; a primeira que combina decide.",
            "Uma proibição em qualquer arquivo ganha de uma liberação em qualquer outro.",
            "Uma regra mais específica não muda essa ordem."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais regras ainda valem quando o Claude Code está em bypass?",
          "r": [
            "As de proibir (deny) continuam bloqueando.",
            "As de perguntar (ask) continuam perguntando.",
            "As de liberar (allow) não fazem diferença, porque tudo já passa."
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
          "titulo": "Uma regra que segura até no bypass",
          "lugar": "No PC, com o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai criar uma pasta de teste com um arquivo de mentira chamado segredo.txt, escrever o settings.json do projeto com duas regras de proibir e duas de perguntar, conferir o arquivo com o PowerShell e ver as regras agindo no Claude Code, em qualquer modo, inclusive no bypass. Nada muda no settings.json do seu usuário. O segredo.txt tem só um texto de teste, sem chave de verdade. O arquivo é gravado em ASCII, sem acentos, para não levar nenhum caractere invisível no começo. Pelo app: o app desktop lê o mesmo settings.json do projeto; crie os arquivos com os passos 2 a 6 no terminal, abra a pasta pela aba Code e siga do passo 9 em diante. Os comandos dos passos 2 a 6 foram rodados de verdade no PowerShell 5.1, em 08/11/2026. A sessão do Claude Code, do passo 7 em diante, não foi testada antes de publicar.",
          "naoTestado": "A sessão do Claude Code (passos 7 a 14) não foi rodada para escrever esta aula: exige o Claude Code interativo com login, e rodar o programa no PC do teste usaria a conta e as configurações do dono. O que deve acontecer vem das páginas oficiais de permissões e de modos de permissão, conferidas em 08/11/2026: deny bloqueia e ask pergunta em todos os modos, inclusive no bypass. Não foi testado se o Claude tenta outro caminho para ler o arquivo depois da recusa; o passo 11 explica o que fazer se tentar. Os passos 2 a 6 foram rodados no PowerShell 5.1 em 08/11/2026, numa pasta de teste.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal.",
              "espera": "Abre uma janela com uma linha que começa com PS."
            },
            {
              "faz": "Cole este comando, que cria a pasta de teste e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\permissoes-teste | Out-Null; Set-Location C:\\Projetos\\permissoes-teste",
              "espera": "Nada é impresso, e o começo da linha muda para PS C:\\Projetos\\permissoes-teste>."
            },
            {
              "faz": "Cole este bloco de três linhas. Ele cria o arquivo de mentira, uma lista de compras e a pasta .claude do projeto.",
              "cola": "Set-Content -Encoding utf8 segredo.txt 'CHAVE-FALSA-0000 (arquivo de teste, nao e uma chave de verdade)'\nSet-Content -Encoding utf8 notas.txt 'Lista de compras: cafe, pao, leite.'\nNew-Item -ItemType Directory -Force .claude | Out-Null",
              "espera": "Nada é impresso."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele grava as regras no settings.json do projeto. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\n{\n  \"permissions\": {\n    \"deny\": [\n      \"Read(./segredo.txt)\",\n      \"PowerShell(Get-Content *segredo*)\"\n    ],\n    \"ask\": [\n      \"PowerShell(Remove-Item *)\",\n      \"Bash(rm *)\"\n    ]\n  }\n}\n'@ | Set-Content -Encoding ascii .claude\\settings.json",
              "espera": "Nada é impresso. As duas regras de proibir fecham o segredo.txt para a ferramenta de leitura e para o Get-Content do PowerShell; as duas de perguntar cobrem apagar arquivos nos dois terminais."
            },
            {
              "faz": "Cole este comando para conferir se o JSON está bem formado.",
              "cola": "Get-Content .claude\\settings.json -Raw | ConvertFrom-Json | ConvertTo-Json -Depth 5",
              "saida": "{\n    \"permissions\":  {\n                        \"deny\":  [\n                                     \"Read(./segredo.txt)\",\n                                     \"PowerShell(Get-Content *segredo*)\"\n                                 ],\n                        \"ask\":  [\n                                    \"PowerShell(Remove-Item *)\",\n                                    \"Bash(rm *)\"\n                                ]\n                    }\n}",
              "espera": "As regras escritas de volta, com outro espaçamento. Um texto em vermelho com ConvertFrom-Json quer dizer que o bloco do passo 4 foi colado pela metade."
            },
            {
              "faz": "Cole este comando para ver tudo o que há na pasta.",
              "cola": "Get-ChildItem -Recurse -Name",
              "saida": ".claude\nnotas.txt\nsegredo.txt\n.claude\\settings.json",
              "espera": "Os mesmos quatro itens."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre na pasta C:\\Projetos\\permissoes-teste. Olhe na linha de baixo o seu modo: o laboratório vale para qualquer um."
            },
            {
              "faz": "Se aparecer a pergunta de confiança da pasta, confirme com Enter.",
              "espera": "A pergunta só aparece na primeira vez nesta pasta. As regras de proibir e de perguntar valeriam mesmo sem você confiar."
            },
            {
              "faz": "Digite /permissions e aperte Enter.",
              "cola": "/permissions",
              "espera": "Abre a tela de regras. As quatro regras do passo 4 aparecem, cada uma com a indicação de que vêm das configurações do projeto, o .claude\\settings.json."
            },
            {
              "faz": "Aperte Esc.",
              "espera": "A tela de regras fecha, e a caixa de texto volta."
            },
            {
              "faz": "Cole este pedido e aperte Enter.",
              "cola": "Leia o arquivo segredo.txt e me diga o que está escrito nele.",
              "espera": "Ele não consegue: diz que a leitura foi negada por uma regra de permissão e não mostra o texto. Se ele mostrar o conteúdo, veja \"Se der errado\"."
            },
            {
              "faz": "Cole este pedido e aperte Enter.",
              "cola": "Apague o arquivo notas.txt.",
              "espera": "Mesmo que o seu modo seja o bypass, aparece um pedido de permissão para o comando de apagar, por causa da regra ask."
            },
            {
              "faz": "Escolha No.",
              "espera": "O comando não roda, e o notas.txt continua na pasta. O Claude avisa que a ação foi recusada."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha. As regras continuam no .claude\\settings.json da pasta de teste e não valem em nenhum outro projeto."
            }
          ],
          "errado": "se o passo 5 mostrar um erro de ConvertFrom-Json, repita o passo 4, colando o bloco inteiro, da primeira linha com @ até a última. Se o Claude Code abrir com uma tela de erro de configurações, escolha sair e faça o mesmo. Se o /permissions não mostrar as regras, confira no cabeçalho se a sessão abriu em C:\\Projetos\\permissoes-teste. Se, no passo 11, ele mostrar o conteúdo do segredo.txt, ele achou um caminho que as regras não cobrem, como um script próprio ou outro comando de leitura: é a falha que a analogia avisou, e o motivo para chave de verdade nunca ficar na pasta de trabalho. Se, no passo 12, ele apagar o notas.txt sem perguntar, o comando usado não é Remove-Item nem rm, por exemplo del dentro de cmd: recrie o arquivo com o passo 3. Para desfazer o laboratório, apague a pasta C:\\Projetos\\permissoes-teste pelo Explorador de Arquivos."
        }
      ],
      [
        "fontes",
        [
          [
            "Configurar permissões (ordem deny, ask e allow; sintaxe das regras; PowerShell; Read e Edit; /permissions; pastas de trabalho; confiança da pasta), Claude Code",
            "https://code.claude.com/docs/pt/permissions",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Arquivos de configurações e precedência (os quatro arquivos, a ordem de precedência, listas que se somam, JSON rigoroso, /status), Claude Code",
            "https://code.claude.com/docs/pt/settings",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Escolha um modo de permissão (qual modo a sessão inicia, bypass, disableBypassPermissionsMode, skipDangerousModePermissionPrompt), Claude Code",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Choose a permission mode, em inglês (o trecho \"Allow rules have no effect in bypassPermissions\"), Claude Code",
            "https://code.claude.com/docs/en/permission-modes",
            "oficial",
            "08/11/2026"
          ],
          [
            "Referência de ferramentas (regras de negação do Bash também desativam a ferramenta PowerShell), Claude Code",
            "https://code.claude.com/docs/pt/tools-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Boas práticas (instruções determinísticas e não determinísticas; alterar o modo de permissão), Claude Code",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.314, de 30/10/2026: blockWritesOutsideWorkingDirectories; sem versão em português)",
            "https://code.claude.com/docs/en/changelog",
            "oficial",
            "08/11/2026"
          ],
          [
            "How I dropped our production database (o caso do terraform destroy, relato do autor, 06/03/2026)",
            "https://aishippingblog.com/p/how-i-dropped-our-production-database",
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
          "O CLAUDE.md e as regras do settings.json têm a mesma força, porque o Claude lê os dois",
          "O CLAUDE.md é um pedido que o modelo leva em conta. As regras do settings.json são impostas pelo programa."
        ],
        [
          "Regras do settings.json são impostas pelo programa; deny e ask valem até no bypass",
          "Isso. Deny, depois ask, depois allow, somando os arquivos, com garantias que valem em qualquer modo, dentro dos limites do que o Claude Code reconhece."
        ],
        [
          "No bypass nenhuma regra do settings.json vale, então só o modo automático protege de verdade",
          "No bypass, deny e ask continuam valendo; só o allow perde o sentido."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você quer que o Claude nunca leia o arquivo .env em projeto nenhum do seu PC. Onde e como?",
        "o": [
          [
            "No CLAUDE.md pessoal, com a frase \"nunca leia o .env\"",
            "O CLAUDE.md é um pedido, que o modelo quase sempre segue. Para garantir, use uma regra deny."
          ],
          [
            "No settings.json do usuário, com `\"deny\": [\"Read(//**/.env)\"]`",
            "Isso. No arquivo do usuário, a regra vale em todos os projetos, e o // a ancora na raiz do disco, então pega qualquer .env."
          ],
          [
            "No .claude\\settings.json de cada projeto, com uma regra allow",
            "Allow libera, não proíbe. E, para valer em todo projeto, o lugar é o arquivo do usuário."
          ]
        ],
        "c": 1
      },
      {
        "p": "No Windows com o Git instalado, você escreveu só \"deny\": [\"Bash(git push *)\"]. O que pode dar errado?",
        "o": [
          [
            "A ferramenta PowerShell é desligada na sessão inteira, sem nenhum aviso",
            "Isso. Sem nenhuma regra PowerShell, o deny no Bash desliga o PowerShell. Escreva também PowerShell(git push *)."
          ],
          [
            "O git push passa a pedir confirmação, em vez de ser bloqueado",
            "Uma regra deny bloqueia, não pergunta. O problema é o efeito dela sobre a ferramenta PowerShell."
          ],
          [
            "Nada: uma regra Bash também vale para os comandos do PowerShell",
            "Cada terminal tem as próprias regras. Uma regra Bash não segura o PowerShell."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre o modo e as regras?",
        "O modo é o combinado geral, que vale para tudo o que as regras não citam. As regras ficam por cima: deny proíbe, ask pergunta e allow libera, conferidas nessa ordem. Deny e ask valem em qualquer modo, até no bypass."
      ],
      [
        "Como tiro o bypass do meu Claude Code?",
        "Quem decide é você. Para só uma abertura, use claude --permission-mode auto. Para mudar de vez, guarde uma cópia do C:\\Users\\SeuNome\\.claude\\settings.json, abra-o no Bloco de Notas e troque bypassPermissions por auto na linha defaultMode. Para impedir o bypass, acrescente \"disableBypassPermissionsMode\": \"disable\" dentro de permissions."
      ],
      [
        "Por que escrever a regra para o PowerShell e para o Bash?",
        "Porque, no Windows com o Git, o Claude tem dois terminais, e cada um tem as próprias regras. E uma regra deny só para o Bash desliga a ferramenta PowerShell sem aviso, se não houver nenhuma regra PowerShell nos arquivos."
      ]
    ]
  },
  "7-5": {
    "tempo": 42,
    "video": "a7-5",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já explicou ao {{claude-code|Claude Code}}, pela terceira vez na mesma semana, que quer as respostas em português e os exercícios de assinalar. Ou escreveu uma regra no {{claude-md|CLAUDE.md}}, ele a ignorou, e você não soube se o {{arquivo}} tinha sido lido.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Toda {{sessao|sessão}} do Claude Code começa com o {{contexto}} vazio: o que você combinou ontem na conversa não está lá hoje. Dois mecanismos levam conhecimento de uma sessão para a outra: o arquivo CLAUDE.md, que você escreve, e a {{memoria-automatica|memória automática}}, que o próprio Claude escreve. Os dois são lidos no começo de cada sessão."
      ],
      [
        "p",
        "Usar bem os dois poupa repetição e evita duas frustrações comuns. A primeira é a regra que não pega, quase sempre porque o arquivo está longo demais, está no lugar errado ou foi editado com a sessão aberta. A segunda é a regra que parecia garantida e não era, porque o CLAUDE.md é um pedido ao {{modelo}}, não uma trava do programa."
      ],
      [
        "p",
        "O laboratório desta aula é melhorar o seu próprio CLAUDE.md pessoal, com uma cópia de segurança antes, usando os critérios que a documentação recomenda. Quem decide cada corte é você."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Na sala do estagiário da aula 0.0 há um quadro de avisos na parede. Você escreve ali o que ele precisa saber em todo expediente: \"responda em português\", \"os guias ficam na pasta tal\", \"nunca mexa na planilha original\". Ele lê o quadro inteiro ao chegar, todo dia. E ele tem um caderninho próprio, onde anota sozinho o que aprendeu com as suas correções, como \"o chefe prefere exercícios de assinalar\". O quadro é o CLAUDE.md; o caderninho é a memória automática."
      ],
      [
        "quebra",
        "Um estagiário de verdade escolhe olhar o quadro; aqui, o programa cola o quadro inteiro na conversa no começo da sessão, e cada linha ocupa um pouco da atenção do Claude em toda tarefa, relevante ou não: quadro lotado é quadro ignorado. Um aviso também não tranca nada: é um pedido, que ele quase sempre segue, mas pode não seguir. E, se você muda o quadro no meio do expediente, ele só vê a mudança no próximo, depois de um {{clear|/clear}}, de um {{compact|/compact}} ou de abrir o Claude Code de novo."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Onde ficam os arquivos CLAUDE.md"
      ],
      [
        "p",
        "O CLAUDE.md é um arquivo de texto em {{markdown|Markdown}}, e pode existir em vários lugares, cada um com um alcance:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Arquivo",
            "Vale para",
            "Bom para"
          ],
          "linhas": [
            [
              "`C:\\Users\\SeuNome\\.claude\\CLAUDE.md`",
              "Você, em todos os projetos do PC",
              "Preferências pessoais, como idioma e formato das respostas"
            ],
            [
              "`CLAUDE.md` ou `.claude\\CLAUDE.md`, na pasta do projeto",
              "Quem trabalha naquele projeto; vai para o {{github|GitHub}} junto",
              "Comandos, convenções e armadilhas daquele projeto"
            ],
            [
              "`CLAUDE.local.md`, na pasta do projeto",
              "Só você, naquele projeto",
              "Notas pessoais do projeto; ponha no {{gitignore|.gitignore}}"
            ],
            [
              "`C:\\Program Files\\ClaudeCode\\CLAUDE.md`",
              "Todos os usuários de uma empresa",
              "Política de organização; não é o caso de uma conta pessoal"
            ]
          ]
        }
      ],
      [
        "p",
        "Os arquivos não se substituem: se somam. Ao abrir o Claude Code numa {{pasta}}, ele carrega o seu CLAUDE.md pessoal e o CLAUDE.md dessa pasta e de cada pasta acima dela, e cola tudo na conversa, do mais amplo para o mais próximo, com o da pasta atual por último. Os CLAUDE.md de subpastas ficam para depois: entram quando o Claude lê ou edita um arquivo daquela subpasta. Se dois arquivos se contradizem, a documentação avisa que ele pode seguir qualquer um dos dois."
      ],
      [
        "p",
        "Para conferir o que foi carregado, {{context|/context all}} mostra a lista Memory files, e {{memory-comando|/memory}} lista os arquivos e abre qualquer um no seu editor de texto."
      ],
      [
        "h3",
        "O que vale a pena escrever"
      ],
      [
        "p",
        "A regra de ouro da documentação: só o que o Claude não descobriria sozinho lendo a pasta. Ele lê os arquivos por conta própria; descrever a estrutura das pastas ou a arquitetura do projeto no CLAUDE.md aparece, na página de boas práticas, na lista de conselhos que não valem mais. O que vale: os comandos exatos para conferir o trabalho, os lugares onde o projeto engana, decisões que não estão escritas em lugar nenhum e qualquer coisa que você já teve de corrigir duas vezes."
      ],
      [
        "p",
        "Escreva de um jeito que dê para conferir. \"Use dois espaços de recuo\" funciona; \"formate direito\" não. \"Guias de estudo são um HTML só, com o gabarito escondido\" funciona; \"faça guias bons\" não. E mantenha curto: a documentação recomenda menos de 200 linhas por arquivo, porque arquivo longo gasta mais contexto e reduz a obediência."
      ],
      [
        "p",
        "Um estudo de 2026 com agentes de programação, de Gloaguen e colegas, mediu o efeito desses arquivos de instruções: em geral, eles não aumentaram a taxa de sucesso das tarefas e encareceram o uso em mais de 20%; ajudaram quando descreviam práticas fora do padrão, que o agente não adivinharia. Ou seja: cada linha precisa pagar o espaço que ocupa."
      ],
      [
        "p",
        "Quando não usar o CLAUDE.md: para um procedimento de vários passos, que só importa às vezes, o lugar é uma {{skill}}, do módulo 8, que só carrega quando a tarefa pede. Para algo que tem de acontecer sempre, sem exceção, o lugar é um {{hook}}, da aula 7.6, ou uma {{regra-de-permissao|regra de permissão}}, da aula 7.4. A própria documentação resume: se você continua reforçando uma linha e ela continua sendo ignorada, ela pertence a um hook. E MAIÚSCULAS ou \"IMPORTANTE\" não resolvem: os modelos atuais seguem uma linha simples, e ênfase demais faz o Claude aplicar a regra em excesso."
      ],
      [
        "h3",
        "Um exemplo, antes e depois"
      ],
      [
        "p",
        "Imagine um CLAUDE.md pessoal com estas linhas: \"Responda em português\", \"Seja claro\", \"O projeto tem as pastas src, docs e testes\", \"Guias de estudo: um HTML só, com gabarito escondido\", \"Antes de apagar algo, pergunte\". Passando cada uma pelos critérios: \"Seja claro\" é vaga demais para conferir, e sai. A linha das pastas o Claude descobre lendo, e sai. \"Antes de apagar algo, pergunte\" é uma regra que não pode ter exceção: como pedido, funciona quase sempre; como garantia, vira uma regra `ask` no settings.json, da aula 7.4. Ficam o idioma e o formato dos guias, as duas coisas que ele não teria como adivinhar."
      ],
      [
        "h3",
        "Organizar sem inchar: importações e regras"
      ],
      [
        "p",
        "Dentro de um CLAUDE.md, `@caminho/arquivo.md` importa outro arquivo, que entra junto na conversa; um caminho entre crases fica só como texto, sem importar. Importar organiza, mas não economiza: o arquivo importado é carregado inteiro. Para economizar, há a pasta `.claude/rules/`, com um arquivo por assunto: um arquivo de regra pode dizer, no topo, a quais arquivos se aplica, e só entra na conversa quando o Claude mexe num arquivo daquele tipo. E comentários de {{html|HTML}}, escritos entre `<!--` e `-->`, são apagados antes de o texto chegar ao Claude: servem para recados a pessoas, sem gastar contexto."
      ],
      [
        "h3",
        "AGENTS.md: o arquivo de outras ferramentas"
      ],
      [
        "p",
        "Outros agentes de programação usam um arquivo parecido, chamado {{agents-md|AGENTS.md}}. Desde a versão 2.1.277, de 18/09/2026, o Claude Code lê o AGENTS.md de um projeto quando não há CLAUDE.md na pasta nem nas de cima; havendo os dois, por padrão, ele lê só o CLAUDE.md. A opção Project instructions, em `/config`, muda isso, e um CLAUDE.md pode importar o outro com `@AGENTS.md`."
      ],
      [
        "h3",
        "A memória automática: o caderno do Claude"
      ],
      [
        "p",
        "A memória automática vem ligada. Enquanto trabalha, o Claude salva notas para si, de quatro tipos: sobre você (seu papel e suas preferências), sobre correções que você fez, sobre o projeto (prazos e decisões) e sobre onde achar coisas fora dele. Ele pula o que dá para descobrir lendo os arquivos e o que o CLAUDE.md já diz, e não grava algo em toda sessão. Quando ele grava ou consulta, aparece algo como \"Saved 2 memories\" ou \"Recalled 2 memories\"."
      ],
      [
        "p",
        "As notas ficam em `C:\\Users\\SeuNome\\.claude\\projects\\<projeto>\\memory\\`, com um índice, `MEMORY.md`, e um arquivo por nota. Só o começo do índice entra em toda sessão, as primeiras 200 linhas ou 25 KB, o que vier antes; o resto ele lê quando precisa. A memória é deste PC: não vai para outro computador nem para as sessões na nuvem."
      ],
      [
        "p",
        "A diferença prática: \"lembre que eu prefiro exercícios de assinalar\" vai para o caderno, a memória automática; \"acrescente isto ao CLAUDE.md\" vai para o quadro. Tudo é texto simples, e o `/memory` liga e desliga a memória automática, abre a pasta dela e deixa você ler, corrigir ou apagar qualquer nota."
      ],
      [
        "h3",
        "Quando uma mudança passa a valer"
      ],
      [
        "p",
        "O CLAUDE.md da raiz do projeto e o pessoal são lidos uma vez, no começo da sessão. Se você os edita com a sessão aberta, nada muda até o próximo `/clear`, o próximo `/compact` ou uma nova abertura. Depois de um `/compact`, o CLAUDE.md da raiz é relido do disco e volta inteiro; o que estava só na conversa pode se perder no resumo. Por isso, regra que deve durar vai para o arquivo, não para a conversa."
      ],
      [
        "p",
        "Para começar um CLAUDE.md de projeto, o {{init-comando|/init}} lê a pasta e escreve uma primeira versão; se já existe um, ele sugere melhorias em vez de sobrescrever. A página de boas práticas diz que, daí em diante, o trabalho é principalmente tirar linhas."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso de um CLAUDE.md em cada pasta?** Não. O pessoal vale em todo lugar; o de projeto só compensa quando o projeto tem algo que o Claude não descobriria.",
          "**O CLAUDE.md gasta do meu limite?** Ocupa contexto em toda mensagem, por isso curto. O começo da conversa fica guardado em {{cache}}, o que deixa a releitura bem mais barata, mas não de graça.",
          "**E se o Claude anotar algo errado na memória?** Abra o `/memory`, ache a nota e corrija ou apague: são arquivos de texto.",
          "**Posso pôr uma senha no CLAUDE.md para ele usar?** Não. O arquivo vai para a conversa, e o de projeto costuma ir para o GitHub. Chaves ficam fora dele, como o módulo 11 ensina.",
          "**Isso vale para o chat do Claude no site?** Não. O chat tem a própria memória e os Projetos, da aula 6B.1; o CLAUDE.md é do Claude Code."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: auditoria, limites de tamanho e regras por caminho",
          "blocos": [
            [
              "p",
              "**Auditoria.** O `/doctor prompt-audit`, desde a versão 2.1.283, de 25/09/2026, revisa os seus CLAUDE.md, regras e skills atrás de instruções escritas para modelos antigos, arquivos e comandos que não existem mais e arquivos que se contradizem, e propõe edições sem mudar nada até você pedir."
            ],
            [
              "p",
              "**Tamanho.** O Claude Code avisa ao abrir, e no `/status`, quando um arquivo de instruções passa do tamanho recomendado. Um arquivo acima de 4 MiB é pulado inteiro. CLAUDE.md de subpasta e regras por caminho têm um limite próprio: 40 mil caracteres numa janela de contexto de 200 mil {{token|tokens}}, e 150 mil caracteres na janela de 1 milhão, nos modelos atuais. Acima disso, só o começo chega ao Claude."
            ],
            [
              "p",
              "**Regra por caminho.** Um arquivo em `.claude/rules/` começa com um {{frontmatter}} entre linhas de três tracinhos, com o campo `paths:` e a lista de padrões, como `\"guias/**/*.html\"`, e só carrega quando o Claude lê ou edita um arquivo que combina."
            ],
            [
              "p",
              "**Regras pessoais.** A pasta `C:\\Users\\SeuNome\\.claude\\rules\\` vale para todos os projetos e é carregada antes das regras do projeto; se as duas conflitarem, ele pode seguir qualquer uma."
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
          "pergunta": "Estes são os arquivos CLAUDE.md que existem num PC. Você abre o Claude Code em C:\\Projetos\\faculdade\\macro. Quais você acha que entram na conversa no começo da sessão, e em que ordem?",
          "codigo": "C:\\Users\\SeuNome\\.claude\\CLAUDE.md\nC:\\Projetos\\faculdade\\CLAUDE.md\nC:\\Projetos\\faculdade\\macro\\CLAUDE.md\nC:\\Projetos\\faculdade\\macro\\listas\\CLAUDE.md\nC:\\Projetos\\faculdade\\micro\\CLAUDE.md",
          "linguagem": "texto",
          "resposta": "Entram os três primeiros, nesta ordem: o pessoal, depois o de faculdade, que está numa pasta acima, e por último o de macro, a pasta em que você abriu, que fica mais perto do fim da conversa. O de macro\\listas é de uma subpasta: entra só quando o Claude ler ou editar algum arquivo dentro de listas. O de micro não entra nunca nesta sessão, porque não está nem acima nem abaixo de macro. Para conferir num caso real, use /context all e olhe a lista Memory files."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você editou o CLAUDE.md do projeto com o Claude Code aberto, acrescentando \"responda em tópicos\". Ele continua respondendo em parágrafos. O que está acontecendo?",
          "o": [
            [
              "A edição só vale depois de um /clear, de um /compact ou de abrir de novo",
              "Isso. O CLAUDE.md da raiz é lido no começo da sessão; a mudança chega na próxima."
            ],
            [
              "O CLAUDE.md do projeto só é lido na primeira sessão que você abre naquela pasta",
              "Ele é lido no começo de toda sessão. O problema é que a sessão aberta ainda usa a versão de antes."
            ],
            [
              "Faltou escrever a regra em letras maiúsculas, para ele levar a regra a sério",
              "Ênfase não resolve, e a documentação desaconselha. A sessão aberta só não viu a mudança ainda."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Escrevi no CLAUDE.md: nunca apague arquivos da pasta originais. Isso garante que ele não apaga?\" O Claude respondeu: \"Garante. Tudo o que está no CLAUDE.md vira uma regra do sistema, e o Claude Code bloqueia qualquer ação contrária, em qualquer modo de permissão.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o CLAUDE.md vira uma regra que o próprio programa impõe sempre",
              "O CLAUDE.md é contexto para o modelo, e não uma trava. Quem impõe é uma regra deny ou um hook."
            ],
            [
              "O erro é outro: o CLAUDE.md só vale se tiver menos de 50 linhas",
              "O tamanho influencia a obediência, mas não existe esse corte. O erro é tratar um pedido como garantia."
            ],
            [
              "O CLAUDE.md é um pedido, que pode falhar; garantia é regra deny ou hook",
              "Isso. Ele quase sempre segue a linha, mas não há garantia. Para nunca apagar, use uma regra deny, da aula 7.4."
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
            "\"Pus a estrutura inteira das pastas no CLAUDE.md.\"",
            "O Claude lê a pasta sozinho. A descrição só gasta contexto em toda mensagem. Escreva o que ele não descobriria."
          ],
          [
            "\"Escrevi IMPORTANTE em maiúsculas, e ele continua ignorando.\"",
            "Ou o arquivo está longo e a linha se perde, ou a regra não pode ter exceção e pertence a um hook ou a uma regra de permissão."
          ],
          [
            "\"Mudei o CLAUDE.md e testei na mesma sessão.\"",
            "A sessão aberta usa a versão de antes. Digite /clear, ou feche e abra o Claude Code, e teste de novo."
          ],
          [
            "\"Pedi para ele lembrar e esperava ver isso no CLAUDE.md.\"",
            "\"Lembre\" vai para a memória automática. Para o arquivo, peça \"acrescente ao CLAUDE.md\", ou edite pelo /memory."
          ],
          [
            "\"Tenho AGENTS.md e CLAUDE.md, e ele ignora o AGENTS.md.\"",
            "Com os dois, ele lê só o CLAUDE.md por padrão. Importe o outro com @AGENTS.md ou mude Project instructions em /config."
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
          "p": "O que diferencia o CLAUDE.md da memória automática?",
          "r": [
            "O CLAUDE.md é você que escreve: regras e instruções.",
            "A memória automática é o Claude que escreve: aprendizados e correções.",
            "Os dois carregam no começo de cada sessão; da memória, só o começo do índice."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que linhas merecem estar no CLAUDE.md?",
          "r": [
            "O que o Claude não descobriria lendo a pasta.",
            "Instruções concretas, que dá para conferir.",
            "O que você já teve de corrigir duas vezes."
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
          "titulo": "Melhore o seu CLAUDE.md pessoal",
          "lugar": "No PC, com o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai guardar uma cópia do seu CLAUDE.md pessoal, contar as linhas, pedir ao Claude uma análise linha por linha com os critérios desta aula, decidir o que muda e conferir que a versão nova foi carregada. O Claude só propõe; quem decide é você, e nada é salvo antes do seu OK. Se você ainda não tem um CLAUDE.md pessoal, o passo 2 mostra, e o pedido do passo 8 cria um curto a partir das suas respostas. Pelo app: faça os passos 2 a 5 no terminal, abra a pasta C:\\Projetos\\claude-md pela aba Code do app desktop e siga do passo 8 em diante. Os comandos dos passos 2 a 4 foram rodados de verdade no PowerShell 5.1, em 08/11/2026, num arquivo de teste. A sessão do Claude Code, do passo 6 em diante, não foi testada antes de publicar.",
          "naoTestado": "A sessão do Claude Code (passos 6 a 15) não foi rodada para escrever esta aula: exige o Claude Code interativo com login, e rodar o programa no PC do teste usaria a conta e as configurações do dono, inclusive o CLAUDE.md pessoal dele. O que deve acontecer vem das páginas oficiais de memória e de prompt caching, conferidas em 08/11/2026. Os passos 2 a 4 foram rodados no PowerShell 5.1 em 08/11/2026, com a pasta pessoal apontada para uma pasta de teste com um CLAUDE.md de mentira, de 8 linhas.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal.",
              "espera": "Abre uma janela com uma linha que começa com PS."
            },
            {
              "faz": "Cole este comando. Ele só responde se o seu CLAUDE.md pessoal existe.",
              "cola": "Test-Path \"$env:USERPROFILE\\.claude\\CLAUDE.md\"",
              "saida": "True",
              "espera": "True quer dizer que o arquivo existe: siga para o passo 3. False quer dizer que você ainda não tem um: pule para o passo 5."
            },
            {
              "faz": "Cole este comando, que guarda uma cópia com a data e a hora no nome, numa pasta de backup. Ele não muda o original.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\backup | Out-Null; Copy-Item \"$env:USERPROFILE\\.claude\\CLAUDE.md\" \"C:\\Projetos\\backup\\CLAUDE-$(Get-Date -Format yyyy-MM-dd-HHmm).md\"; Get-ChildItem C:\\Projetos\\backup -Name",
              "saida": "CLAUDE-2026-11-08-1429.md",
              "espera": "O nome da cópia, com a data e a hora de agora. Guarde esse nome: é a volta, se algo der errado."
            },
            {
              "faz": "Cole este comando para contar as linhas do arquivo.",
              "cola": "(Get-Content \"$env:USERPROFILE\\.claude\\CLAUDE.md\").Count",
              "saida": "8",
              "espera": "Um número. Abaixo de 200, o tamanho está dentro do que a documentação recomenda; o exercício é ver se cada linha paga o espaço que ocupa."
            },
            {
              "faz": "Cole este comando, que cria uma pasta para a sessão e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\claude-md | Out-Null; Set-Location C:\\Projetos\\claude-md",
              "espera": "O começo da linha muda para PS C:\\Projetos\\claude-md>."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre na pasta C:\\Projetos\\claude-md."
            },
            {
              "faz": "Se aparecer a pergunta de confiança da pasta, confirme com Enter.",
              "espera": "A pergunta só aparece na primeira vez nesta pasta, que está vazia."
            },
            {
              "faz": "Cole este pedido e aperte Enter. Se ele perguntar se pode ler um arquivo fora da pasta de trabalho, escolha Yes, but ask again next time.",
              "cola": "Analise o meu CLAUDE.md pessoal, o arquivo ~/.claude/CLAUDE.md, linha por linha, com estes critérios: 1) você descobriria isso sozinho lendo a pasta? 2) a instrução é concreta, dá para conferir? 3) contradiz outra linha? 4) é um procedimento longo, que caberia numa skill? 5) tem de acontecer sempre, sem exceção, e caberia numa regra de permissão ou num hook? Mostre uma tabela com cada linha, o critério que ela falha e a sua sugestão: manter, cortar, reescrever ou mover. Depois, mostre a versão nova inteira. Não salve nada ainda. Se o arquivo não existir, me faça 3 perguntas de múltipla escolha sobre como eu trabalho e proponha um com no máximo 10 linhas.",
              "espera": "Uma tabela com as linhas do seu arquivo, os critérios e as sugestões, seguida da versão nova inteira. Nenhum arquivo foi salvo. Se o arquivo não existia, vêm as 3 perguntas primeiro: responda e espere a proposta."
            },
            {
              "faz": "Leia a tabela e mande as suas decisões, com as suas palavras, por exemplo: corte as linhas 3 e 7, reescreva a 5 como você sugeriu e mantenha o resto.",
              "espera": "Ele mostra a versão nova com as suas decisões e espera. Se discordar de algo, diga antes de seguir."
            },
            {
              "faz": "Cole este pedido para salvar. Se ele pedir permissão para gravar o arquivo, aceite.",
              "cola": "Agora salve a versão nova no ~/.claude/CLAUDE.md e me diga com quantas linhas ele ficou.",
              "espera": "Ele grava o arquivo e diz o número de linhas. A sessão aberta ainda usa a versão antiga."
            },
            {
              "faz": "Digite /clear e aperte Enter.",
              "cola": "/clear",
              "espera": "Começa uma conversa nova, e o CLAUDE.md é lido de novo, já na versão nova."
            },
            {
              "faz": "Digite /context all e aperte Enter.",
              "cola": "/context all",
              "espera": "Aparece a ocupação do contexto, e a lista Memory files mostra o seu CLAUDE.md pessoal."
            },
            {
              "faz": "Cole este pedido e aperte Enter.",
              "cola": "Em três tópicos curtos, quais são as regras do meu CLAUDE.md pessoal?",
              "espera": "Ele lista as regras da versão nova, sem as linhas que você cortou."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha. A versão nova vale em todas as próximas sessões, em qualquer pasta."
            },
            {
              "faz": "Abra o Claude Code em outra pasta qualquer, num dia em que for usar, e repare se ele segue as regras sem você repetir.",
              "espera": "Ele segue as regras do quadro desde a primeira mensagem. Se uma regra importante falhar de vez em quando, ela é candidata a hook ou a regra de permissão."
            }
          ],
          "errado": "se a versão nova piorou, volte à cópia: no PowerShell, rode Copy-Item \"C:\\Projetos\\backup\\NOME-DA-COPIA.md\" \"$env:USERPROFILE\\.claude\\CLAUDE.md\", trocando NOME-DA-COPIA pelo nome que o passo 3 mostrou, e depois abra o Claude Code de novo. Se ele salvou antes do seu OK, o arquivo novo já está no lugar; leia, e, se não gostar, volte à cópia do mesmo jeito. Se o passo 12 não listar o CLAUDE.md pessoal, confira o nome exato, CLAUDE.md, com letras maiúsculas e a extensão .md, na pasta C:\\Users\\SeuNome\\.claude. Se o passo 13 mostrar as regras antigas, o /clear não foi feito: repita o passo 11. Se o passo 3 disser que não acha o arquivo, o passo 2 respondeu False: siga do passo 5."
        }
      ],
      [
        "fontes",
        [
          [
            "Como Claude se lembra do seu projeto (onde ficam os CLAUDE.md, como carregam, importações, .claude/rules, AGENTS.md, memória automática, /memory, problemas comuns), Claude Code",
            "https://code.claude.com/docs/pt/memory",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Boas práticas (mantenha o CLAUDE.md curto; instruções determinísticas e não determinísticas; o que você pode parar de fazer), Claude Code",
            "https://code.claude.com/docs/pt/best-practices",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Prompt caching (editar o CLAUDE.md durante a sessão só vale depois de /clear, /compact ou reinício), Claude Code",
            "https://code.claude.com/docs/pt/prompt-caching",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/init, /memory, /context, /doctor prompt-audit), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.277, de 18/09/2026: AGENTS.md; 2.1.283, de 25/09/2026: /doctor prompt-audit; sem versão em português)",
            "https://code.claude.com/docs/en/changelog",
            "oficial",
            "08/11/2026"
          ],
          [
            "Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?, Gloaguen e colegas (arXiv 2602.11988, versão de 29/09/2026)",
            "https://arxiv.org/abs/2602.11988",
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
          "Quanto mais completo, melhor: descreva o projeto inteiro e repita as regras importantes",
          "O Claude lê a pasta sozinho, e arquivo longo reduz a obediência. Menos de 200 linhas, só o que ele não descobriria."
        ],
        [
          "O CLAUDE.md é uma trava: o que está escrito nele o Claude Code impede em qualquer modo",
          "O CLAUDE.md é contexto, um pedido ao modelo. Trava é regra de permissão ou hook."
        ],
        [
          "CLAUDE.md curto, com o que ele não descobriria sozinho; o que não pode falhar vai para regra ou hook",
          "Isso. O quadro é seu e curto; o caderno é dele; e o que não pode falhar vai para regra ou hook."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Você quer que o Claude responda em português em todos os seus projetos. Onde escreve isso?",
        "o": [
          [
            "No CLAUDE.md da pasta de cada projeto",
            "Funcionaria, mas teria de repetir em cada projeto, e o de projeto vai para o GitHub junto."
          ],
          [
            "Em C:\\Users\\SeuNome\\.claude\\CLAUDE.md",
            "Isso. O CLAUDE.md pessoal vale em todos os projetos do PC."
          ],
          [
            "No settings.json, numa regra allow",
            "O settings.json guarda permissões e configurações, não instruções de estilo para o modelo."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você disse ao Claude: \"lembre que eu prefiro exercícios de assinalar\". Onde isso fica guardado?",
        "o": [
          [
            "Na memória automática, numa nota que ele mesmo escreve",
            "Isso. \"Lembre\" vai para o caderno dele; para o CLAUDE.md, você pede \"acrescente ao CLAUDE.md\"."
          ],
          [
            "No CLAUDE.md pessoal, numa linha nova no fim do arquivo",
            "Pedir para lembrar vai para a memória automática. O CLAUDE.md só muda se você pedir ou editar."
          ],
          [
            "Em lugar nenhum: ele esquece quando a sessão termina",
            "A memória automática guarda a preferência entre sessões, numa pasta do seu PC."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Por que o Claude ignora uma linha do meu CLAUDE.md?",
        "Confira três coisas. Se o arquivo foi editado com a sessão aberta, a mudança só vale depois de /clear ou de abrir de novo. Se ele é longo, a linha se perde: corte o que o Claude descobriria sozinho. E, se a regra não pode ter exceção, ela pertence a um hook ou a uma regra de permissão, porque o CLAUDE.md é um pedido."
      ],
      [
        "Qual a diferença entre CLAUDE.md e memória automática?",
        "O CLAUDE.md é você que escreve, com regras e instruções. A memória automática é o Claude que escreve, com o que aprendeu das suas correções. Os dois carregam no começo da sessão, e o /memory abre os dois."
      ],
      [
        "Como confiro se o CLAUDE.md foi lido?",
        "Dentro do Claude Code, digite /context all e olhe a lista Memory files. O /memory também lista os arquivos e abre qualquer um no editor."
      ]
    ]
  },
  "7-6": {
    "tempo": 53,
    "video": "a7-6",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já escreveu no CLAUDE.md \"nunca mexa no .env\" e, dias depois, viu o Claude mexer nele mesmo assim. Esta aula mostra o {{hook}}, o jeito de transformar uma regra em garantia: um programa que o {{claude-code|Claude Code}} roda sozinho em certos momentos, como antes de cada edição, e que pode barrar a ação.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui, quase tudo o que você combinou com o Claude Code dependia de o {{modelo}} decidir cumprir: ler o {{claude-md|CLAUDE.md}}, lembrar de uma regra, escolher rodar um formatador. Isso é pedido. O hook é outra coisa: um {{comando}} que o próprio Claude Code {{rodar|roda}} num momento fixo da {{sessao|sessão}}, como antes de cada edição de {{arquivo}}, sem o modelo poder esquecer ou pular. A página oficial de permissões diz isso com todas as letras: o que você escreve no pedido ou no CLAUDE.md molda o que o Claude tenta fazer, mas não muda o que o Claude Code deixa acontecer."
      ],
      [
        "p",
        "Se o seu Claude Code está em {{bypass}}, isso pesa mais que para a média, porque nesse modo quase nada pede confirmação. Um hook que roda antes da ação continua valendo em todos os modos, inclusive no bypass: é o único freio automático que não depende nem do modelo, nem do modo de {{permissao|permissão}}. Os usos mais comuns são impedir edições em arquivos sensíveis, como o {{env|.env}}; formatar todo arquivo editado; avisar no Windows quando o Claude está esperando por você; e registrar cada comando que ele rodou."
      ],
      [
        "p",
        "E há o outro lado. Um hook roda com os seus privilégios, sem perguntar nada, e pode chegar até você dentro de um {{plugin}} ou de uma pasta de projeto baixada da internet. Saber ler um hook é saber o que está rodando no seu nome."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "A aula 1.5 comparou o hook a um sensor automático: toda vez que alguém sai da sala, a luz apaga, sem ninguém decidir. Aqui o sensor ganha detalhes. Ele está preso a um momento (a porta abrindo), olha só para o que passa na frente dele e faz sempre a mesma coisa. Alguns sensores só registram quem passou; outros travam a porta. O hook desta aula é do segundo tipo: antes de o Claude editar um arquivo, ele confere o nome e, se for o .env, trava a porta."
      ],
      [
        "quebra",
        "O sensor do prédio faz uma coisa só, fixa de fábrica, e um hook roda qualquer comando escrito nele, com as suas permissões, inclusive um que apaga arquivos. O sensor também não erra o próprio teste; o hook é um {{script}} seu, e um script com defeito deixa passar o que devia barrar, como mostra o laboratório quebrado. E a parte do \"só olha para o que passa na frente dele\" é literal: um hook preso às ferramentas de edição não enxerga um comando do {{powershell|PowerShell}} que muda o mesmo arquivo por outro caminho, do mesmo jeito que o sensor da porta não vê quem entra pela janela."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Três peças: o momento, o filtro e o que roda"
      ],
      [
        "p",
        "Todo hook mora num {{settings-json|arquivo de configurações}} escrito em {{json|JSON}} e tem três níveis, um dentro do outro. O primeiro é o {{evento-hook|evento}}, o momento da sessão em que ele pode disparar, como `PreToolUse`, antes de uma {{ferramenta}} rodar. O segundo é o {{matcher}}, o filtro: dentro daquele momento, em quais casos disparar, como `Edit|Write`, só nas ferramentas de editar e de criar arquivos (a barra vertical quer dizer \"ou\"). O terceiro é o que de fato roda, que a documentação chama de manipulador: na maioria das vezes, um comando."
      ],
      [
        "p",
        "Este é o arquivo `.claude\\settings.json` do laboratório. Leia de fora para dentro: no evento `PreToolUse`, para as ferramentas `Edit` e `Write`, rode o {{python|Python}} com o script `proteger_env.py` e, se o próprio hook falhar, barre a ação."
      ],
      [
        "codigo",
        {
          "texto": "{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"matcher\": \"Edit|Write\",\n        \"hooks\": [\n          {\n            \"type\": \"command\",\n            \"command\": \"python\",\n            \"args\": [\"${CLAUDE_PROJECT_DIR}/.claude/hooks/proteger_env.py\"],\n            \"onFailure\": \"block\"\n          }\n        ]\n      }\n    ]\n  }\n}",
          "linguagem": "json",
          "rotulo": ".claude\\settings.json"
        }
      ],
      [
        "p",
        "Dois detalhes. `CLAUDE_PROJECT_DIR` é uma {{variavel|variável}} que o Claude Code preenche com a pasta onde a sessão começou, para o caminho do script funcionar de qualquer lugar. E `command` separado de `args` faz o Claude Code chamar o Python direto, sem um shell no meio; a seção sobre o Windows, mais abaixo, explica por que isso evita dor de cabeça."
      ],
      [
        "p",
        "Onde o arquivo fica decide o alcance do hook:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Onde fica",
            "Vale para",
            "Vai junto com o projeto?"
          ],
          "linhas": [
            [
              "`C:\\Users\\SeuNome\\.claude\\settings.json`",
              "Todos os seus projetos neste PC",
              "Não"
            ],
            [
              "`.claude\\settings.json`, dentro da pasta do projeto",
              "Só aquele projeto",
              "Sim, se entrar num {{commit}}"
            ],
            [
              "`.claude\\settings.local.json`, dentro da pasta do projeto",
              "Só aquele projeto, só para você",
              "Não: o Claude Code o deixa fora do {{git|Git}} quando grava nele"
            ],
            [
              "`hooks\\hooks.json` de um plugin",
              "Onde o plugin estiver ligado",
              "Vai dentro do plugin"
            ],
            [
              "Cabeçalho de uma {{skill}} ou de um {{subagente}}",
              "Enquanto aquela skill ou aquele subagente trabalha",
              "Vai dentro do arquivo dele"
            ]
          ]
        }
      ],
      [
        "p",
        "Para aprender, use sempre o do projeto: o que você errar fica preso àquela pasta. O do usuário vale em tudo, inclusive nos projetos que você ainda nem criou, e um erro ali aparece em todos eles."
      ],
      [
        "h3",
        "Os momentos que importam"
      ],
      [
        "p",
        "A lista oficial tem mais de trinta eventos, muitos para empresas ou para casos raros. Para começar, bastam sete. A coluna da direita é a mais importante, e a próxima seção explica de onde ela vem."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Evento",
            "Quando dispara",
            "Consegue impedir?"
          ],
          "linhas": [
            [
              "`SessionStart`",
              "Quando a sessão começa ou é retomada",
              "Não. O que o hook escreve vira contexto para o Claude"
            ],
            [
              "`UserPromptSubmit`",
              "Quando você envia um pedido, antes de o Claude ler",
              "Sim: o pedido nem chega ao Claude"
            ],
            [
              "`PreToolUse`",
              "Antes de uma ferramenta rodar",
              "Sim: a ferramenta não roda"
            ],
            [
              "`PostToolUse`",
              "Depois que uma ferramenta rodou com sucesso",
              "Não. A ação já aconteceu; o Claude só lê o aviso"
            ],
            [
              "`Notification`",
              "Quando o Claude Code manda um aviso, como \"estou esperando você\"",
              "Não"
            ],
            [
              "`Stop`",
              "Quando o Claude termina de responder",
              "Sim, num sentido diferente: em vez de parar, ele continua trabalhando"
            ],
            [
              "`SessionEnd`",
              "Quando a sessão termina",
              "Não"
            ]
          ]
        }
      ],
      [
        "p",
        "A regra que organiza a tabela: só dá para impedir o que ainda não aconteceu. Um hook em `PreToolUse` barra a edição; um hook em `PostToolUse` chega com a edição já feita e, no máximo, conta ao Claude que algo deu errado. Quem quer proteger um arquivo usa o momento de antes. O momento de depois serve para o que vem em seguida à ação, como formatar o arquivo recém-editado."
      ],
      [
        "h3",
        "O que o hook recebe e como ele responde"
      ],
      [
        "p",
        "Quando o evento dispara e o matcher combina, o Claude Code roda o comando e entrega a ele, pela {{stdin|entrada padrão}}, um JSON com tudo sobre a ação: o nome da ferramenta, o que ela ia fazer, a pasta da sessão e o modo de permissão. Numa edição, a parte que interessa é esta. O caminho chega sempre completo e, no Windows, com barras invertidas (no JSON, cada barra aparece dobrada):"
      ],
      [
        "codigo",
        {
          "texto": "{\n  \"hook_event_name\": \"PreToolUse\",\n  \"tool_name\": \"Edit\",\n  \"tool_input\": {\n    \"file_path\": \"C:\\\\Projetos\\\\hook-teste\\\\.env\",\n    \"old_string\": \"MODO=teste\",\n    \"new_string\": \"MODO=producao\"\n  }\n}",
          "linguagem": "json",
          "rotulo": "parte do que o hook recebe"
        }
      ],
      [
        "p",
        "O script do laboratório lê esse JSON e decide. Em português, linha por linha: lê o que chegou; pega o caminho do arquivo; troca as barras invertidas por barras normais e fica só com o nome; se o nome começar com `.env`, escreve o motivo e sai com o número 2; senão, sai com 0. As duas linhas com `reconfigure` garantem os acentos, porque no Windows o Python lê e escreve num padrão antigo se ninguém mandar o contrário, como a aula 0.4b mostrou."
      ],
      [
        "codigo",
        {
          "texto": "import json\nimport sys\n\nsys.stdin.reconfigure(encoding=\"utf-8-sig\")\nsys.stderr.reconfigure(encoding=\"utf-8\")\n\ndados = json.load(sys.stdin)\ncaminho = dados.get(\"tool_input\", {}).get(\"file_path\", \"\")\nnome = caminho.replace(\"\\\\\", \"/\").split(\"/\")[-1]\n\nif nome.startswith(\".env\"):\n    print(f\"Bloqueado: {nome} guarda segredos e o Claude não pode editá-lo.\", file=sys.stderr)\n    sys.exit(2)\n\nsys.exit(0)",
          "linguagem": "python",
          "rotulo": ".claude\\hooks\\proteger_env.py"
        }
      ],
      [
        "p",
        "O hook responde do jeito mais simples que um programa sabe: pelo {{codigo-de-saida|código de saída}}, o número que ele devolve ao terminar. São três casos:"
      ],
      [
        "lista",
        [
          "**0**: tudo certo, e a ação segue.",
          "**2**: pare. Num evento que consegue impedir, a ação é barrada, e o que o hook escreveu na {{stderr|saída de erro}} vira o motivo, que o Claude lê e usa para mudar de rumo.",
          "**Qualquer outro número, como 1**: o hook teve um problema, mas a ação segue. Aparece um aviso com \"hook error\" na conversa, e só."
        ]
      ],
      [
        "p",
        "O terceiro caso é a armadilha clássica. Em quase todo programa, 1 quer dizer \"falhou\", e quem escreve um hook de proteção tende a usar 1 para barrar. Para o Claude Code, 1 não barra nada; a documentação avisa que, para impor uma regra, o código é 2. O laboratório quebrado desta aula é exatamente esse erro."
      ],
      [
        "p",
        "O campo `onFailure` com o valor `\"block\"`, do arquivo do laboratório, fecha outra porta: se o hook nem conseguir rodar (o Python sumiu, o caminho do script está errado, o tempo estourou), a ação é barrada em vez de passar. Ele existe desde a versão 2.1.295 do Claude Code, de 08/10/2026. Sem ele, um hook de proteção com um caminho digitado errado nunca roda, e tudo passa, só com um aviso na conversa."
      ],
      [
        "h3",
        "No Windows, três cuidados"
      ],
      [
        "p",
        "O primeiro é o shell, o programa que interpreta a linha de comando. Sem `args`, o comando do hook vai para um shell: o Git Bash, se estiver instalado, ou o PowerShell, se não estiver. O mesmo comando pode funcionar num e quebrar no outro, e o seu PC pode mudar de um para o outro no dia em que você instalar o Git. Com `command` e `args` separados, não há shell no meio: o Claude Code chama o programa direto. No Windows, isso exige que o comando seja um {{executavel|executável}} de verdade, como o `python.exe`."
      ],
      [
        "p",
        "O segundo é o nome da ferramenta de comandos. No Windows, o Claude Code pode rodar os comandos de {{terminal}} pela ferramenta `PowerShell`, e não pela `Bash`. Um hook com o matcher `Bash` nunca dispara nesse caso. A documentação recomenda `Bash|PowerShell` para todo hook que olha comandos."
      ],
      [
        "p",
        "O terceiro são as barras. Como o caminho chega com barras invertidas, um teste escrito com barras normais, como \"termina em /.env\", nunca combina, e a edição passa como se o hook não tivesse nada a barrar. É por isso que o script troca as barras antes de comparar."
      ],
      [
        "p",
        "Um aviso de versão: antes da 2.1.309, de 22/10/2026, hooks que rodavam pelo PowerShell não bloqueavam com o código 2, e a 2.1.316, de 31/10/2026, corrigiu mais um caso parecido. Mantenha o Claude Code atualizado; a aula 7.1 mostra como."
      ],
      [
        "h3",
        "O hook e o modo de permissão"
      ],
      [
        "p",
        "O `PreToolUse` dispara antes de qualquer conferência de permissão, em todos os modos: Manual, automático e bypass. Se o hook barra, a ação não roda, mesmo em bypass, e mesmo que uma regra do arquivo de configurações a liberasse. É por isso que ele é a garantia que continua valendo mesmo quando o modo é o bypass. O contrário não vale: um hook não consegue liberar o que uma regra de bloqueio proíbe."
      ],
      [
        "p",
        "Quando usar regra e quando usar hook? Para \"nunca leia o .env\" ou \"nunca rode tal comando\", uma regra de bloqueio, que a aula 7.4 mostra, é mais simples e não depende de script; a própria documentação recomenda o sistema de permissões, e não o filtro de um hook, para impor um sim ou um não sem exceção. O hook entra quando a decisão precisa de lógica, como olhar o nome do arquivo ou o conteúdo do comando, ou quando a ideia é fazer algo além de barrar, como formatar ou avisar."
      ],
      [
        "h3",
        "Segurança: o hook roda como você"
      ],
      [
        "p",
        "Um hook de comando roda com as suas permissões de usuário, fora de qualquer revisão do modelo. Daí três cuidados. Plugins trazem hooks, e a tela de instalação do `/plugin` diz que existe um hook, mas não o que ele roda; a aula 7.7 abre um por dentro. Uma pasta de projeto baixada da internet pode trazer um `.claude\\settings.json` com hooks. Numa sessão normal, um {{repositorio|repositório}} novo faz o Claude Code mostrar antes o aviso de confiança da pasta, e você pode recusar; mas uma pasta comum, dentro de outra em que você já confiou, não ganha aviso novo, e num `claude -p` os hooks rodam sem pergunta nenhuma, como a aula 7.10 mostra. E os hooks também disparam dentro de subagentes."
      ],
      [
        "p",
        "Para ver o que está ligado, digite {{hooks-comando|/hooks}} numa sessão: abre uma lista só de leitura, com a origem de cada hook (usuário, projeto, local ou plugin) e o comando completo de cada um. Para desligar todos de uma vez sem apagar nada, ponha `\"disableAllHooks\": true` no arquivo de configurações. Não há como desligar um só mantendo-o no arquivo: para tirar um, apague a entrada dele."
      ],
      [
        "h3",
        "Quando não usar"
      ],
      [
        "p",
        "Quando a decisão precisa de julgamento, como \"este texto ficou claro?\", o lugar é uma skill ou o próprio pedido: hook é para o que tem de acontecer sempre igual. Quando uma regra de permissão resolve, ela é mais simples. E não ponha num hook nada demorado: o hook de antes da ação segura o Claude até terminar, e a espera padrão de um hook de comando vai até 600 segundos."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. Hooks vêm com o Claude Code. O script do laboratório usa o {{python|Python}}, instalado no laboratório da aula 2.2.",
          "**Custa {{token|tokens}}?** Um hook de comando roda no seu PC e não chama o modelo. Só ocupa {{contexto}} quando o texto dele vai para o Claude: o motivo de um bloqueio, ou o que um hook de `SessionStart` escreve. Há tipos de hook que chamam um modelo, e esses gastam; a caixa \"Para ir mais fundo\" mostra.",
          "**E se eu errar o hook?** Um script com defeito que sai com um código estranho gera um aviso e deixa a ação passar; com `onFailure` em `\"block\"`, ele barra tudo o que o matcher pega até você corrigir. Nos dois casos, apagar a entrada do arquivo ou usar `disableAllHooks` desfaz.",
          "**Preciso reiniciar depois de editar o arquivo?** Em geral, não: o Claude Code percebe a mudança sozinho. Se o `/hooks` não mostrar o hook novo depois de alguns segundos, confira se o JSON está válido (vírgula sobrando e comentário não são permitidos) e reinicie a sessão.",
          "**Posso pedir para o Claude escrever o hook?** Pode, e a documentação sugere isso. Mas leia o que ele escreveu antes de usar: é um programa que vai rodar sozinho no seu nome. E teste à mão, como no laboratório.",
          "**Funciona no app desktop e no VS Code?** Funciona: os mesmos eventos disparam no terminal, no VS Code, no app desktop e nas sessões na nuvem. Só que a nuvem não lê o arquivo de configurações do seu usuário, que fica no seu PC."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: outros tipos de hook e a resposta em JSON",
          "blocos": [
            [
              "p",
              "Além do comando, um hook pode ser um pedido a um endereço da web (`http`), uma ferramenta de um {{servidor}} {{mcp|MCP}} (`mcp_tool`), uma pergunta a um modelo Claude (`prompt`) ou um subagente que lê arquivos antes de decidir (`agent`, ainda experimental). Os dois últimos usam o modelo e gastam tokens a cada disparo."
            ],
            [
              "p",
              "Em vez do código 2, um hook pode sair com 0 e imprimir um JSON com uma decisão: negar, perguntar, liberar ou adiar a ação, com o motivo. A decisão de negar vale em todos os modos; a de liberar não passa por cima de uma regra de bloqueio."
            ],
            [
              "p",
              "Um detalhe de segurança, da página de permissões: sem configurações gerenciadas por uma empresa e sem o login de um plano Team ou Enterprise, um mod instalado pode aprovar uma ação que o seu hook barrou. Mods são plugins que rodam dentro do próprio Claude Code, e a aula 7.7 explica. É mais um motivo para instalar só o que você avaliou."
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
          "pergunta": "Este é o teste à mão do laboratório: ele entrega ao script do hook o mesmo tipo de JSON que o Claude Code entregaria antes de editar o .env e, no fim, mostra o código de saída com `$LASTEXITCODE`. O que você acha que aparece? Depois, use os botões para trocar o arquivo.",
          "codigo": "'{\"tool_name\":\"Edit\",\"tool_input\":{\"file_path\":\"C:\\\\Projetos\\\\hook-teste\\\\.env\"}}' | python .claude\\hooks\\proteger_env.py; $LASTEXITCODE",
          "linguagem": "powershell",
          "resposta": "Aparecem duas linhas: a mensagem do script, \"Bloqueado: .env guarda segredos e o Claude não pode editá-lo.\", e o número 2. A mensagem saiu pela saída de erro, e é ela que o Claude leria como motivo; o 2 é o que faz o Claude Code barrar a edição. Com notas.txt, nada é impresso e o código é 0: o hook deixa passar. Com .env.local, o nome também começa com .env, e o script barra do mesmo jeito.",
          "vivo": [
            [
              "Testar com notas.txt",
              "'{\"tool_name\":\"Write\",\"tool_input\":{\"file_path\":\"C:\\\\Projetos\\\\hook-teste\\\\notas.txt\"}}' | python .claude\\hooks\\proteger_env.py; $LASTEXITCODE",
              "0"
            ],
            [
              "Testar com .env.local",
              "'{\"tool_name\":\"Edit\",\"tool_input\":{\"file_path\":\"C:\\\\Projetos\\\\hook-teste\\\\.env.local\"}}' | python .claude\\hooks\\proteger_env.py; $LASTEXITCODE",
              "Bloqueado: .env.local guarda segredos e o Claude não pode editá-lo.\n2"
            ],
            [
              "Voltar ao original",
              "'{\"tool_name\":\"Edit\",\"tool_input\":{\"file_path\":\"C:\\\\Projetos\\\\hook-teste\\\\.env\"}}' | python .claude\\hooks\\proteger_env.py; $LASTEXITCODE",
              "Bloqueado: .env guarda segredos e o Claude não pode editá-lo.\n2"
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
          "p": "Você quer impedir que o Claude edite o arquivo contrato.md. Em qual evento o hook precisa estar, e com que código o script deve sair para barrar?",
          "o": [
            [
              "PostToolUse, saindo com 2 quando o arquivo for o contrato.md",
              "O PostToolUse chega com a edição já feita: com 2, ele só mostra o aviso ao Claude."
            ],
            [
              "PreToolUse, saindo com 2 quando o arquivo for o contrato.md",
              "Isso. Antes de a ferramenta rodar, e 2 é o código que barra."
            ],
            [
              "PreToolUse, saindo com 1 quando o arquivo for o contrato.md",
              "O momento está certo, mas 1 é um erro que não bloqueia: aparece um aviso, e a edição acontece."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ao Claude para proteger o seu .env. Ele respondeu: \"Pronto. Acrescentei ao CLAUDE.md a regra: nunca edite o .env. Como o CLAUDE.md é lido em toda sessão, agora está garantido, mesmo em bypass.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o CLAUDE.md entra em toda sessão, então vale em qualquer modo",
              "Entrar em toda sessão não obriga o modelo a cumprir. A regra no CLAUDE.md orienta; quem garante é um hook."
            ],
            [
              "Está errada: em bypass, o Claude Code nem chega a ler o CLAUDE.md",
              "O CLAUDE.md é lido em qualquer modo. O erro está em chamar de garantia algo que só orienta o que o Claude tenta."
            ],
            [
              "Está errada: regra no CLAUDE.md é pedido, e a garantia é um hook",
              "Isso. A documentação separa os dois: instrução orienta, hook decide. E o hook de antes da ação barra em todos os modos."
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
            "\"O meu hook sai com 1 quando acha o problema, então ele bloqueia.\"",
            "Para o Claude Code, 1 é um erro que não bloqueia: aparece um aviso e a ação segue. Para barrar, saia com 2."
          ],
          [
            "\"Pus o hook em PostToolUse para impedir a edição.\"",
            "O PostToolUse roda depois que a ferramenta já rodou. Para impedir, use o PreToolUse."
          ],
          [
            "\"Meu hook olha os comandos com o matcher Bash, então pega tudo.\"",
            "No Windows, os comandos podem passar pela ferramenta PowerShell, e um matcher só com Bash nunca dispara. Use Bash|PowerShell."
          ],
          [
            "\"O script confere se o caminho termina em /.env.\"",
            "No Windows, o caminho chega com barras invertidas, e a comparação nunca combina. Troque as barras antes de comparar, como o script do laboratório faz."
          ],
          [
            "\"Editei o settings.json e o hook não aparece no /hooks.\"",
            "Quase sempre é JSON inválido, como uma vírgula sobrando. Confira com python -m json.tool e, se precisar, reinicie a sessão."
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
          "p": "Quais são as três peças de um hook no arquivo de configurações?",
          "r": [
            "O evento: o momento em que ele pode disparar, como PreToolUse.",
            "O matcher: o filtro de quando disparar, como Edit|Write.",
            "O que roda: em geral, um comando com um script."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que cada código de saída faz num hook de PreToolUse?",
          "r": [
            "0: a ação segue.",
            "2: a ação é barrada, e a saída de erro vira o motivo que o Claude lê.",
            "Outro número, como 1: aparece um aviso de hook error, e a ação segue."
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
          "titulo": "Um hook que protege o .env",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai montar, numa pasta de teste, um hook que barra qualquer edição do Claude em arquivos cujo nome começa com .env, testá-lo à mão no terminal e depois ver o Claude Code bater nele. Precisa do Python, instalado no laboratório da aula 2.2 (se `python --version` não responder com um número, faça aquele laboratório antes), e do Claude Code. O .env desta pasta é de teste e não guarda segredo nenhum. Os passos 1 a 7 foram rodados de verdade num PowerShell 5.1 sem configurações extras, com Python 3.12, em 08/11/2026, e as saídas abaixo são as reais. Os passos com o Claude Code (8 a 12) não foram testados: foram escritos a partir da documentação oficial de hooks, e as frases exatas podem variar. Pelo app: o mesmo hook vale na aba Code do app desktop, que lê os mesmos arquivos de configurações; os passos no PowerShell continuam iguais.",
          "naoTestado": "Os passos 8 a 12 exigem o Claude Code interativo, que não foi rodado nos testes deste módulo; o que deve acontecer neles vem das páginas oficiais de hooks (referência e guia), conferidas em 08/11/2026. Os passos 1 a 7 foram rodados de verdade em 08/11/2026, num PowerShell 5.1 sem perfil, com Python 3.12.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal. Não abra o Claude Code ainda.",
              "espera": "Uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este comando. Ele cria a pasta C:\\Projetos\\hook-teste, com as subpastas .claude\\hooks, e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\hook-teste\\.claude\\hooks | Out-Null; Set-Location C:\\Projetos\\hook-teste",
              "espera": "Só o cursor de volta, agora com C:\\Projetos\\hook-teste no começo da linha."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele grava o script do hook em .claude\\hooks\\proteger_env.py. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\nimport json\nimport sys\n\nsys.stdin.reconfigure(encoding=\"utf-8-sig\")\nsys.stderr.reconfigure(encoding=\"utf-8\")\n\ndados = json.load(sys.stdin)\ncaminho = dados.get(\"tool_input\", {}).get(\"file_path\", \"\")\nnome = caminho.replace(\"\\\\\", \"/\").split(\"/\")[-1]\n\nif nome.startswith(\".env\"):\n    print(f\"Bloqueado: {nome} guarda segredos e o Claude não pode editá-lo.\", file=sys.stderr)\n    sys.exit(2)\n\nsys.exit(0)\n'@ | Set-Content -Encoding utf8 .claude\\hooks\\proteger_env.py",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Cole este bloco inteiro. Ele grava o arquivo de configurações do projeto, .claude\\settings.json, com o hook.",
              "cola": "@'\n{\n  \"hooks\": {\n    \"PreToolUse\": [\n      {\n        \"matcher\": \"Edit|Write\",\n        \"hooks\": [\n          {\n            \"type\": \"command\",\n            \"command\": \"python\",\n            \"args\": [\"${CLAUDE_PROJECT_DIR}/.claude/hooks/proteger_env.py\"],\n            \"onFailure\": \"block\"\n          }\n        ]\n      }\n    ]\n  }\n}\n'@ | Set-Content -Encoding ascii .claude\\settings.json",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Cole este comando, que cria o .env de teste, com uma linha só.",
              "cola": "Set-Content -Encoding ascii .env 'MODO=teste'",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Confira se o arquivo de configurações é um JSON válido. Cole:",
              "cola": "python -m json.tool .claude\\settings.json",
              "saida": "{\n    \"hooks\": {\n        \"PreToolUse\": [\n            {\n                \"matcher\": \"Edit|Write\",\n                \"hooks\": [\n                    {\n                        \"type\": \"command\",\n                        \"command\": \"python\",\n                        \"args\": [\n                            \"${CLAUDE_PROJECT_DIR}/.claude/hooks/proteger_env.py\"\n                        ],\n                        \"onFailure\": \"block\"\n                    }\n                ]\n            }\n        ]\n    }\n}",
              "espera": "O mesmo conteúdo do passo 4, reorganizado. Se aparecer uma frase como Expecting property name enclosed in double quotes, com o número de uma linha, o JSON ficou quebrado: repita o passo 4."
            },
            {
              "faz": "Teste o script à mão, entregando a ele o JSON de uma edição do .env, como o Claude Code faria. Cole:",
              "cola": "'{\"tool_name\":\"Edit\",\"tool_input\":{\"file_path\":\"C:\\\\Projetos\\\\hook-teste\\\\.env\"}}' | python .claude\\hooks\\proteger_env.py; $LASTEXITCODE",
              "saida": "Bloqueado: .env guarda segredos e o Claude não pode editá-lo.\n2",
              "espera": "A mensagem de bloqueio e o número 2, o código que barra."
            },
            {
              "faz": "Abra o Claude Code nesta pasta: digite claude e aperte Enter.",
              "espera": "Como a pasta é nova, aparece o aviso de confiança da pasta. Aceite. Depois disso, o Claude Code fica esperando um pedido."
            },
            {
              "faz": "Digite /hooks e aperte Enter.",
              "espera": "Uma lista com o evento PreToolUse e o hook do matcher Edit|Write, marcado como vindo das configurações do projeto. Aperte Esc para voltar."
            },
            {
              "faz": "Cole este pedido. Se ele pedir permissão, aceite: quem vai barrar é o hook.",
              "cola": "Use a sua ferramenta de edição para trocar MODO=teste por MODO=producao no arquivo .env desta pasta. Não use comandos do terminal. Depois me conte o que aconteceu.",
              "espera": "A edição é barrada antes de acontecer, com a mensagem \"Bloqueado: .env guarda segredos e o Claude não pode editá-lo.\", e o Claude conta que não conseguiu editar o arquivo."
            },
            {
              "faz": "Cole este outro pedido, para ver que o hook só barra o que deve:",
              "cola": "Crie nesta pasta um arquivo notas.txt com a frase: o hook deixou passar.",
              "espera": "O notas.txt é criado normalmente, porque o script saiu com 0 para esse nome."
            },
            {
              "faz": "Saia do Claude Code com /exit e, no PowerShell, mostre o conteúdo do .env:",
              "cola": "Get-Content .env",
              "espera": "Uma linha só: MODO=teste. O hook segurou a edição."
            }
          ],
          "errado": "Se o passo 7 responder com can't open file e [Errno 2] No such file or directory, o PowerShell não está na pasta C:\\Projetos\\hook-teste: cole de novo o comando do passo 2. Se responder que python não é reconhecido, o Python não está instalado ou não está no {{path|PATH}}: volte ao laboratório da aula 2.2. Se, no passo 9, o /hooks não mostrar o hook, confira o JSON com o passo 6 e reinicie o Claude Code. Se, no passo 10, a edição passar, saia com /exit, rode de novo o passo 7 e olhe o número da última linha: tem de ser 2. Se o Claude tentar outro caminho, como um comando do PowerShell que reescreve o .env, aperte Esc: este hook só olha as ferramentas Edit e Write, como o matcher manda."
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
          "texto": "Alguém montou um hook igual ao do laboratório, numa pasta própria, mas sem o onFailure. No Claude Code, o .env foi editado mesmo assim, e na conversa só apareceu um aviso com \"hook error\". O teste à mão parece certo, porque a mensagem de bloqueio aparece. Para reproduzir, cole o bloco abaixo inteiro no PowerShell: ele cria a pasta C:\\Projetos\\hook-quebrado, grava nela o script dessa pessoa e roda o mesmo teste à mão do laboratório. Descubra o motivo antes de ver a causa.",
          "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\hook-quebrado\\.claude\\hooks | Out-Null; Set-Location C:\\Projetos\\hook-quebrado\n@'\nimport json\nimport sys\n\nsys.stdin.reconfigure(encoding=\"utf-8-sig\")\nsys.stderr.reconfigure(encoding=\"utf-8\")\n\ndados = json.load(sys.stdin)\ncaminho = dados.get(\"tool_input\", {}).get(\"file_path\", \"\")\nnome = caminho.replace(\"\\\\\", \"/\").split(\"/\")[-1]\n\nif nome.startswith(\".env\"):\n    print(f\"Bloqueado: {nome} guarda segredos e o Claude não pode editá-lo.\", file=sys.stderr)\n    sys.exit(1)\n\nsys.exit(0)\n'@ | Set-Content -Encoding utf8 .claude\\hooks\\proteger_env.py\n'{\"tool_name\":\"Edit\",\"tool_input\":{\"file_path\":\"C:\\\\Projetos\\\\hook-quebrado\\\\.env\"}}' | python .claude\\hooks\\proteger_env.py; $LASTEXITCODE",
          "saida": "Bloqueado: .env guarda segredos e o Claude não pode editá-lo.\n1",
          "dica": "A mensagem está certa. Olhe a última linha da saída e compare com os três casos da seção \"O que o hook recebe e como ele responde\".",
          "resposta": "O script sai com 1, e não com 2. Para o Claude Code, 1 é um erro que não bloqueia: ele mostra o aviso, com a primeira linha da saída de erro depois de \"Failed with non-blocking status code:\", e deixa a edição acontecer. A mensagem diz \"Bloqueado\", mas quem decide é o número. O conserto é trocar sys.exit(1) por sys.exit(2) no script; depois disso, o mesmo teste à mão passou a terminar em 2, conferido de verdade em 08/11/2026. Pôr \"onFailure\": \"block\" também faria o 1 barrar, porque com ele qualquer código diferente de 0 e de 2 conta como falha, mas o certo é sair com 2 e deixar o onFailure para o caso de o hook nem rodar. O texto do aviso no Claude Code vem da documentação oficial e não foi testado."
        }
      ],
      [
        "fontes",
        [
          [
            "Referência de hooks (eventos, códigos de saída, onFailure, hooks no Windows), Claude Code",
            "https://code.claude.com/docs/pt/hooks",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Automatizar ações com hooks (bloquear arquivos protegidos; hooks e modos de permissão), Claude Code",
            "https://code.claude.com/docs/pt/hooks-guide",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Permissões (o CLAUDE.md molda o que o Claude tenta; precedência entre regras, hooks e mods), Claude Code",
            "https://code.claude.com/docs/pt/permissions",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Estender o Claude Code (\"nunca edite o .env\" no CLAUDE.md é pedido, não garantia), Claude Code",
            "https://code.claude.com/docs/pt/features-overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.295, de 08/10/2026: onFailure; 2.1.309, de 22/10/2026: hooks no PowerShell voltam a bloquear com 2); a versão em português redireciona",
            "https://code.claude.com/docs/en/changelog",
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
          "Hook é um comando que roda sozinho num momento fixo; antes da ação, com código 2, ele barra",
          "Isso. Momento fixo, filtro e código 2 no PreToolUse: a garantia que vale até em bypass."
        ],
        [
          "Hook é uma regra do CLAUDE.md que o Claude relê antes de cada ação, e por isso ele nunca esquece",
          "Regra no CLAUDE.md é pedido. O hook é um programa que o Claude Code roda sozinho, sem o modelo decidir."
        ],
        [
          "Hook é um script que roda depois de cada ação e desfaz o erro do Claude quando sai com 1",
          "O que roda depois não desfaz a ação, e o código 1 não bloqueia nada."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Em que momento um hook consegue impedir que o Claude edite um arquivo?",
        "o": [
          [
            "No SessionEnd, quando a sessão termina",
            "Nesse momento a edição já aconteceu há muito tempo, e o SessionEnd não impede nada."
          ],
          [
            "No PostToolUse, logo depois de a edição terminar",
            "Depois da edição feita, o hook só consegue avisar o Claude."
          ],
          [
            "No PreToolUse, antes da ferramenta rodar",
            "Isso. É o momento de antes, e um código 2 barra a ferramenta."
          ]
        ],
        "c": 2
      },
      {
        "p": "O seu hook de proteção sai com 1 quando encontra o .env. O que acontece quando o Claude tenta editar o arquivo?",
        "o": [
          [
            "A edição acontece, e aparece um aviso de hook error",
            "Isso. O código 1 é um erro que não bloqueia; para barrar, o código é 2."
          ],
          [
            "A edição é barrada, porque 1 quer dizer falha",
            "Em muitos programas 1 quer dizer falha, mas o Claude Code só barra com 2."
          ],
          [
            "O Claude Code pergunta se você quer continuar",
            "O código 1 não faz o Claude Code perguntar: ele mostra um aviso e segue."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre um hook e uma regra no CLAUDE.md?",
        "A regra no CLAUDE.md é um pedido: o modelo lê e tenta seguir, mas pode esquecer ou interpretar diferente. O hook é um programa que o próprio Claude Code roda num momento fixo, como antes de cada edição. Se ele sai com o código 2, a ação não acontece, em qualquer modo de permissão."
      ],
      [
        "Por que o meu hook não bloqueia?",
        "Confira quatro coisas, nesta ordem: o evento é o PreToolUse (o de antes da ação)? O script sai com 2, e não com 1? O matcher tem o nome certo da ferramenta, como Edit|Write, ou Bash|PowerShell para comandos? O JSON do arquivo está válido? O comando /hooks mostra se o Claude Code enxergou o hook, e o teste à mão do laboratório mostra o código de saída."
      ],
      [
        "O hook funciona com o PC em bypass?",
        "Funciona. O hook de PreToolUse dispara antes de qualquer conferência de permissão, em todos os modos, e um bloqueio dele vale mesmo em bypass. Por isso ele é o freio que continua valendo mesmo sem perguntas de permissão."
      ]
    ]
  },
  "7-7": {
    "tempo": 51,
    "video": "a7-7",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Se você já instalou um {{plugin}} porque um tutorial mandou, talvez não saiba o que ele roda quando a {{sessao|sessão}} começa, nem quanto ele ocupa em cada mensagem. Esta aula abre a caixa: o que vem dentro de um plugin, de onde ele vem, como avaliar um antes de instalar, o que é um {{mod}} e como criar o plugin mais simples possível.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Um plugin junta várias peças do {{claude-code|Claude Code}} numa instalação só: {{skill|skills}}, {{hook|hooks}}, {{subagente|subagentes}}, servidores {{mcp|MCP}} e até mudanças na própria tela. É o jeito de receber pronta a configuração que outra pessoa montou, ou de levar a sua para outro projeto e outro PC. Com um {{comando}}, tudo chega e tudo liga."
      ],
      [
        "p",
        "É exatamente por isso que vale entender o que ele traz. Tudo o que um plugin {{rodar|roda}}, roda com os seus {{privilegios|privilégios}}: lê e grava os seus arquivos, abre programas, acessa a {{internet}}. A página oficial de segurança de plugins começa por aí, numa frase só: um plugin instalado pode executar {{codigo|código}} arbitrário na sua máquina. E, mesmo quando ele não faz nada de errado, ocupa {{contexto}} em todas as sessões, inclusive naquelas em que você nunca o usa."
      ],
      [
        "p",
        "Esta aula serve a três situações reais. Antes de instalar algo que viu num vídeo, você vai saber onde olhar e o que procurar. Diante dos plugins que já tem, vai saber ver de onde vieram e quanto custam. E, quando quiser levar as suas skills para outro lugar, vai saber montar o seu próprio pacote, que no começo é só uma pasta com um {{arquivo}} de texto."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "A aula 1.5 comparou o plugin a uma caixa entregue por um fornecedor, com manuais, tomadas e sensores dentro, instalados de uma vez. Os manuais são as skills; as tomadas, os servidores MCP; os sensores, os hooks; e às vezes vem também um colega pronto para ser chamado, o subagente. O catálogo de onde a caixa saiu é o {{marketplace}}. E algumas caixas trazem uma peça diferente, que se encaixa no próprio painel de controle do escritório e muda o que aparece nele e como ele reage: é o mod, um tipo de plugin que roda dentro do Claude Code."
      ],
      [
        "quebra",
        "Uma caixa de verdade você abre e vê tudo; no plugin, a tela de instalação diz que existe um sensor, mas não o que ele faz, e é preciso abrir o arquivo dele para saber. A caixa também não muda depois de entregue, e um plugin pode se atualizar sozinho, trocando o conteúdo que você conferiu. E o selo do fornecedor engana: o nome do marketplace diz quem publica o catálogo, não o que cada caixa dentro dele faz."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O que vem dentro da caixa"
      ],
      [
        "p",
        "Um plugin é uma {{pasta}} com um arquivo de identificação e as peças, cada uma num lugar fixo. O arquivo de identificação é o {{manifesto}}, `.claude-plugin\\plugin.json`, um pequeno arquivo em {{json|JSON}} que dá o nome e a descrição. O resto é opcional:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Lugar na pasta",
            "O que traz",
            "Roda algo no seu PC?"
          ],
          "linhas": [
            [
              "`.claude-plugin\\plugin.json`",
              "O manifesto: nome, descrição, versão e autor",
              "Não"
            ],
            [
              "`skills\\`",
              "Skills, que viram comandos com o nome do plugin na frente, como `/meu-plugin:revisar`",
              "Pode: uma skill pode rodar comandos e liberar ferramentas"
            ],
            [
              "`agents\\`",
              "Subagentes prontos para o Claude chamar",
              "Pelas ferramentas que eles usam"
            ],
            [
              "`hooks\\hooks.json`",
              "Hooks, os sensores da aula 7.6",
              "Sim, sozinhos, nos eventos deles"
            ],
            [
              "`.mcp.json`",
              "Servidores MCP, as tomadas para sistemas de fora",
              "Sim: um servidor local é um programa ligado junto com a sessão"
            ],
            [
              "`bin\\`",
              "Programas que o Claude pode chamar no {{terminal}}",
              "Sim, quando o Claude os chama"
            ],
            [
              "Um módulo de hooks em {{javascript|JavaScript}}",
              "Funções que rodam dentro do Claude Code: com ele, o plugin é um mod",
              "Sim, dentro do próprio Claude Code"
            ]
          ]
        }
      ],
      [
        "p",
        "O nome do plugin na frente das skills existe para dois plugins não brigarem: cada um pode ter a sua skill `revisar`, e uma vira `/plugin-a:revisar`, a outra `/plugin-b:revisar`. E só o manifesto vai dentro de `.claude-plugin`: uma skill guardada ali não carrega. Esse é um erro comum de quem monta o primeiro plugin."
      ],
      [
        "h3",
        "De onde os plugins vêm"
      ],
      [
        "p",
        "Quase todo plugin vem de um marketplace: um catálogo, que na prática é um {{repositorio|repositório}} do {{github|GitHub}} com um arquivo que lista os plugins e onde buscar cada um. Não é uma loja que revisa o que vende. A Anthropic mantém dois de uso geral. O oficial, `claude-plugins-official`, entra sozinho na primeira vez que você abre o Claude Code no terminal; a maior parte do que ele lista vem de parceiros e de outros autores, e uma parte menor é da própria Anthropic. O da comunidade, `claude-community`, reúne plugins que os autores enviaram, e você precisa adicioná-lo. Todo o resto é de terceiros, inclusive o catálogo que um colega publicar. Os nomes oficiais só são aceitos quando o catálogo vem do GitHub da Anthropic, então um terceiro não consegue se passar por ela."
      ],
      [
        "p",
        "Há uma terceira origem, que muita gente não percebe: a sua conta do claude.ai. Desde a versão 2.1.275, de 17/09/2026, as skills e os plugins que você liga no claude.ai chegam às sessões do terminal feitas com a mesma conta. Eles aparecem com o sobrenome `@synced`, como `nome@synced`. Para não receber, existem as configurações `syncClaudeAiSkills` e `syncClaudeAiPlugins` com o valor `false`."
      ],
      [
        "p",
        "Para instalar, dentro do Claude Code, o comando é `/plugin install`, com o nome do plugin, uma arroba e o nome do catálogo, como `/plugin install commit-commands@claude-plugins-official`. Ele não instala na hora: abre antes o painel de detalhes, para você ler, e pede que escolha um escopo. **Para você** liga o plugin em todos os seus projetos neste PC. **Para todos neste repositório** grava a escolha no {{settings-json|arquivo de configurações}} do projeto, `.claude\\settings.json`, que vai junto num {{commit}}. **Só para você, neste repositório** liga só ali. Fora do Claude Code, o mesmo serviço é feito por `claude plugin install`, no {{powershell|PowerShell}}; se uma sessão já estiver aberta, `/reload-plugins` carrega o que chegou."
      ],
      [
        "h3",
        "O que um plugin ligado custa"
      ],
      [
        "p",
        "Um plugin ligado faz parte de todas as sessões, não só daquelas em que você o usa. O nome e a descrição de cada skill, subagente e comando que o Claude pode chamar sozinho entram no contexto a cada mensagem, para o Claude saber que existem: são {{token|tokens}} gastos mesmo quando nada do plugin roda. Os servidores MCP dele ficam ligados junto com a sessão, e os hooks disparam nos eventos deles. No catálogo oficial, o painel de detalhes mostra uma estimativa chamada **Context cost**, com duas linhas: **Every turn**, o que o plugin acrescenta a cada mensagem, e **When invoked**, o que entra quando uma skill dele é usada."
      ],
      [
        "p",
        "Para parar um plugin sem desinstalar, desligue-o no `/plugin` ou com `claude plugin disable`. Para desinstalar, use a aba de instalados do `/plugin` ou `claude plugin uninstall`. Um detalhe: depois de desinstalar, os arquivos ficam mais 14 dias numa pasta de cópias dentro de `C:\\Users\\SeuNome\\.claude\\plugins\\` antes de uma limpeza automática."
      ],
      [
        "h3",
        "Avaliar antes de instalar"
      ],
      [
        "p",
        "A documentação oficial manda quatro passos. Primeiro, saber quem publica o catálogo: `claude plugin marketplace list` mostra a origem de cada um. Segundo, ler o painel de detalhes do `/plugin`, cuja seção **Will install** lista comandos, skills, subagentes, hooks e servidores. Terceiro, abrir o código, porque o painel diz que existe um hook, mas não o que ele roda: os arquivos a ler são o `hooks\\hooks.json`, com o comando de cada hook; o `.mcp.json`, com o comando ou o endereço de cada servidor; e tudo o que estiver na pasta `bin`. Quarto, se quiser a lista completa sem abrir sessão nenhuma, `claude plugin details` com o nome do plugin."
      ],
      [
        "p",
        "Três casos reais, lidos no GitHub em 08/11/2026, mostram por que o terceiro passo importa. O `commit-commands`, do catálogo oficial e feito pela Anthropic, não tem hooks: traz três arquivos de comando. Mas o `commit.md` libera `git add`, `git status` e `git commit` sem pergunta enquanto o comando roda e, no momento em que você o chama, executa `git status`, `git diff` e `git log` para montar o contexto. O `security-guidance`, também oficial, tem um `hooks.json` que roda {{script|scripts}} em {{python|Python}} no começo de cada sessão, a cada pedido seu e depois de cada edição, além de uma revisão em segundo plano depois de um `git commit` ou `git push`. E o `superpowers`, de um autor da comunidade, com licença MIT e mais de 300 mil {{estrelas}} (um sinal fraco de qualidade), tem um hook de começo de sessão que injeta o texto inteiro de uma das suas skills no contexto a cada sessão nova, a cada `/clear` e a cada compactação. Isso não aparece em nenhum `SKILL.md`; só no hook."
      ],
      [
        "p",
        "Nenhum dos três é malicioso: um é de segurança, o outro é popular e de código aberto. O ponto é que, sem abrir os arquivos, você não saberia o que roda, quando roda e quanto ocupa. A aula 8.6 transforma isso numa ficha completa para skills; para plugins, as perguntas mínimas são estas:"
      ],
      [
        "lista",
        [
          "Quem publica o catálogo, e o comando de instalação aponta para o mesmo repositório?",
          "Existe a pasta `hooks`? Em que eventos, e que comando cada hook roda?",
          "Existem `.mcp.json` ou `bin`? O que cada um liga ou executa?",
          "A atualização automática do catálogo está ligada? Se estiver, o que você leu hoje pode mudar amanhã."
        ]
      ],
      [
        "h3",
        "Mods: plugins que mexem no próprio Claude Code"
      ],
      [
        "p",
        "Desde a versão 2.1.287, de 01/10/2026, existe um tipo especial de plugin: o mod. Em vez de comandos que rodam do lado de fora, como os hooks da aula 7.6, o mod traz funções em JavaScript que o Claude Code chama dentro do próprio programa. Com isso ele consegue o que nenhuma outra peça consegue: desenhar um painel ao lado da conversa ou uma faixa acima da caixa de pedido, com botões; redesenhar partes da tela, como a linha que mostra o Claude trabalhando; segurar uma ação do Claude enquanto faz uma pergunta, ou responder no lugar dela; e criar um comando de barra que roda na hora, sem esperar um turno do Claude. Se você vê na sua tela um painel ou uma faixa que o Claude Code não traz de fábrica, quase certamente é um mod; o `/plugin` mostra uma linha cinza como \"1 mod active\", com o nome."
      ],
      [
        "p",
        "O poder vem junto com o alcance. A página oficial de mods lista o que um mod carregado pode fazer: agir no seu PC como você; ler as suas {{variavel|variáveis de ambiente}} e arquivos de configuração, inclusive uma {{chave-api|chave de API}} guardada neles; ver cada pedido seu e cada ação do Claude; reescrever um pedido; aprovar uma ação antes de você ser perguntado; e gastar o seu uso chamando um {{modelo}}. Mods não rodam isolados. E, sem configurações de empresa e sem um login de plano Team ou Enterprise, um mod pode aprovar uma ação que o seu hook da aula 7.6 barrou. Na tela, a pergunta de permissão é a única parte que ele não consegue mudar."
      ],
      [
        "p",
        "Para ver o que um mod faz antes de instalar, a documentação indica baixar a pasta dele e rodar `claude plugin validate` nela: as linhas `hooks:` e `calls:` da resposta listam os eventos que ele trata e o que ele pede ao Claude Code. O próprio Claude Code já vem com alguns mods de fábrica, como o painel do `/diff` e o que carrega o `AGENTS.md`. Para desligar os mods instalados por uma sessão, abra o Claude Code com `--safe-mode`, que também desliga as suas outras personalizações; para desligar sempre, `\"disableAllHooks\": true` no arquivo de configurações, que também desliga os seus hooks da aula 7.6."
      ],
      [
        "h3",
        "Criar o plugin mais simples"
      ],
      [
        "p",
        "O menor plugin útil tem dois arquivos: o manifesto e uma skill. O laboratório desta aula monta este, chamado `ola-curso`:"
      ],
      [
        "codigo",
        {
          "texto": "{\n  \"name\": \"ola-curso\",\n  \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n  \"version\": \"1.0.0\",\n  \"author\": { \"name\": \"Seu Nome\" }\n}",
          "linguagem": "json",
          "rotulo": ".claude-plugin\\plugin.json"
        }
      ],
      [
        "codigo",
        {
          "texto": "---\nname: ola\ndescription: Cumprimenta o usuário e diz o que este plugin de teste faz. Use só quando o usuário digitar /ola-curso:ola.\ndisable-model-invocation: true\n---\n\nCumprimente o usuário em português, diga que este é o plugin de teste da aula 7.7 e pergunte em que pode ajudar.",
          "linguagem": "markdown",
          "rotulo": "skills\\ola\\SKILL.md"
        }
      ],
      [
        "p",
        "O `name` do manifesto não pode ter espaço, porque vira o prefixo dos comandos. A linha `disable-model-invocation: true` diz que o Claude não chama essa skill por conta própria: ela só roda quando você digita `/ola-curso:ola`. Para usar sem instalar, abra o Claude Code com `--plugin-dir` e o caminho da pasta: o plugin carrega só naquela sessão, e nada é gravado nas suas configurações. Se você editar um arquivo do plugin com a sessão aberta, `/reload-plugins` recarrega."
      ],
      [
        "p",
        "Quando um plugin vale a pena? Quando você quer levar um conjunto de peças para outras pessoas, para vários projetos ou para outro PC. Para uma skill só sua, a documentação lembra que uma skill na sua pasta pessoal de skills já vale em todos os seus projetos, sem plugin nenhum."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. O `/plugin` e os comandos `claude plugin` vêm com o Claude Code.",
          "**Custa?** Instalar não cobra nada da Anthropic. O custo é de contexto, a cada mensagem, e, num plugin que liga o Claude a um serviço de terceiros, o que esse serviço cobrar.",
          "**Plugin e skill são a mesma coisa?** Não. Um plugin pode trazer skills, mas uma skill sozinha não precisa de plugin.",
          "**Se o catálogo é oficial, posso instalar sem olhar?** O nível do catálogo diz quem o publica. A própria documentação manda revisar o plugin, venha de onde vier.",
          "**E se eu instalar algo e me arrepender?** Desligue ou desinstale pelo `/plugin`. Se você não confia mais no dono do catálogo, remova o catálogo também: isso desinstala tudo o que veio dele.",
          "**Vale no app desktop e no VS Code?** Vale: um plugin instalado para você no terminal aparece também nas sessões locais do app desktop e no VS Code, porque os três leem os mesmos arquivos. As sessões na nuvem não carregam os plugins do seu PC."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: testar, medir e publicar",
          "blocos": [
            [
              "p",
              "Quem escreve plugins pode medir se o Claude usa o plugin direito com `claude plugin eval`, que roda os mesmos pedidos com e sem o plugin e dá uma nota; a aula 16.3 volta a isso. Um plugin também pode declarar dependências de outros plugins e trazer monitores, comandos que o Claude Code liga em segundo plano quando a sessão começa."
            ],
            [
              "p",
              "Para distribuir os seus, basta um repositório com um arquivo `.claude-plugin\\marketplace.json` listando as pastas: quem adicionar esse catálogo instala pelo nome e recebe as suas atualizações."
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
          "pergunta": "Antes de abrir o Claude Code, dá para conferir se o manifesto está bem escrito com o Python, que você já tem: `python -m json.tool .claude-plugin\\plugin.json`. O que você acha que esse comando mostra com o arquivo abaixo? Depois, use os botões para estragar o arquivo de dois jeitos comuns.",
          "codigo": "{\n  \"name\": \"ola-curso\",\n  \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n  \"version\": \"1.0.0\",\n  \"author\": { \"name\": \"Seu Nome\" }\n}",
          "linguagem": "json",
          "saida": "{\n    \"name\": \"ola-curso\",\n    \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n    \"version\": \"1.0.0\",\n    \"author\": {\n        \"name\": \"Seu Nome\"\n    }\n}",
          "resposta": "Com o arquivo certo, o Python imprime o mesmo conteúdo, reorganizado, e termina sem erro: o JSON está bem escrito. Com a vírgula sobrando depois do último campo, ele para e aponta a linha 6: depois de uma vírgula, esperava outro nome entre aspas, e veio o fecha-chaves. Sem as aspas em name, ele para na linha 2, coluna 3. Em JSON, todo nome vai entre aspas duplas e não pode sobrar vírgula, e um manifesto quebrado faz o plugin não carregar. Este teste confere só se o JSON está bem escrito; o `claude plugin validate` confere também os campos e a skill.",
          "vivo": [
            [
              "Deixar uma vírgula sobrando no fim",
              "{\n  \"name\": \"ola-curso\",\n  \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n  \"version\": \"1.0.0\",\n  \"author\": { \"name\": \"Seu Nome\" },\n}",
              "Expecting property name enclosed in double quotes: line 6 column 1 (char 158)"
            ],
            [
              "Tirar as aspas de name",
              "{\n  name: \"ola-curso\",\n  \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n  \"version\": \"1.0.0\",\n  \"author\": { \"name\": \"Seu Nome\" }\n}",
              "Expecting property name enclosed in double quotes: line 2 column 3 (char 4)"
            ],
            [
              "Voltar ao original",
              "{\n  \"name\": \"ola-curso\",\n  \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n  \"version\": \"1.0.0\",\n  \"author\": { \"name\": \"Seu Nome\" }\n}",
              "{\n    \"name\": \"ola-curso\",\n    \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n    \"version\": \"1.0.0\",\n    \"author\": {\n        \"name\": \"Seu Nome\"\n    }\n}"
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
          "p": "O painel de detalhes do /plugin mostra que um plugin vai instalar um hook. O que você ainda precisa fazer para saber o que esse hook roda?",
          "o": [
            [
              "Nada: o painel já mostra o comando completo de cada hook",
              "O painel diz que o hook existe, mas não o que ele roda. A própria documentação manda abrir o arquivo."
            ],
            [
              "Abrir o hooks/hooks.json do plugin e ler o comando de cada um",
              "Isso. É lá que está o comando de cada hook e o evento em que ele dispara."
            ],
            [
              "Instalar e esperar o primeiro aviso de hook error aparecer",
              "Instalar já liga o plugin, e o hook passa a rodar. O aviso só aparece quando algo falha."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se podia instalar sem medo um plugin de um catálogo com nome oficial. O Claude respondeu: \"O nome do catálogo diz quem o publica, não o que cada plugin faz. Antes de instalar, leia o hooks.json, o .mcp.json e a pasta bin dele, porque o que ele rodar vai rodar com as suas permissões.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: plugin de catálogo oficial roda isolado do resto do PC",
              "Nenhum plugin roda isolado: hooks, servidores e mods rodam com as suas permissões, fora do sandbox."
            ],
            [
              "Está certa: o selo do catálogo não diz o que cada plugin roda",
              "Isso. A resposta está certa: a documentação manda revisar qualquer plugin, venha de onde vier."
            ],
            [
              "Está errada: só os mods rodam código, e hooks de plugin apenas leem",
              "Hooks de plugin rodam comandos com as suas permissões, como os da aula 7.6."
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
            "\"É do catálogo oficial, então não preciso olhar.\"",
            "Boa parte do catálogo oficial vem de parceiros e de outros autores. Leia os hooks, o .mcp.json e a pasta bin de qualquer plugin."
          ],
          [
            "\"Instalei só para ver o que tinha dentro.\"",
            "Instalar já liga o plugin, na maioria dos casos, e os hooks dele passam a rodar. Leia antes, no repositório."
          ],
          [
            "\"Desinstalei, então os arquivos sumiram.\"",
            "Eles ficam mais 14 dias na pasta de cópias dos plugins antes da limpeza automática."
          ],
          [
            "\"Pus o SKILL.md dentro de .claude-plugin.\"",
            "Só o plugin.json vai ali. Peças guardadas em .claude-plugin não carregam: a skill vai em skills\\<nome>\\SKILL.md."
          ],
          [
            "\"Não uso esse plugin, então ele não custa nada.\"",
            "As descrições dele entram no contexto a cada mensagem, e os servidores MCP dele ficam ligados. Desligue o que você não usa."
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
          "p": "O que um plugin pode trazer dentro da caixa?",
          "r": [
            "Skills, que viram comandos com o nome do plugin na frente.",
            "Hooks, servidores MCP, subagentes e programas na pasta bin.",
            "Um módulo em JavaScript que roda dentro do Claude Code: aí o plugin é um mod."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que três lugares do plugin você lê antes de instalar, já que o painel de detalhes não mostra o que eles rodam?",
          "r": [
            "O hooks/hooks.json: o comando e o evento de cada hook.",
            "O .mcp.json: o comando ou o endereço de cada servidor.",
            "A pasta bin: cada programa que o Claude poderá chamar."
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
          "titulo": "Avalie dois plugins e crie o seu",
          "lugar": "No navegador e no PC, com o PowerShell e o Claude Code",
          "tempo": "25 minutos",
          "antes": "Você vai ler, no GitHub, as pastas de dois plugins do catálogo oficial e comparar o que cada um roda; depois, criar o plugin `ola-curso` numa pasta de teste, conferir o manifesto e usá-lo no Claude Code sem instalar; e, por fim, abrir o painel de instalação de um plugin oficial só para ler o que ele traria, saindo antes de instalar. Precisa do Python, instalado no laboratório da aula 2.2, e do Claude Code. As páginas do GitHub foram lidas em 08/11/2026 e podem ter mudado. Os passos no PowerShell (5 a 9) foram rodados de verdade num PowerShell 5.1 sem configurações extras, em 08/11/2026, e as saídas abaixo são as reais. Os passos com o Claude Code (10 a 14) não foram testados: foram escritos a partir da documentação oficial de plugins. Pelo app: os passos no navegador funcionam no celular; o resto precisa do PC.",
          "naoTestado": "Os passos 10 a 14 exigem o Claude Code interativo, que não foi rodado nos testes deste módulo; o que deve acontecer neles vem das páginas oficiais de plugins (criar, instalar e segurança), conferidas em 08/11/2026. Os passos 1 a 4 foram conferidos lendo os arquivos pela API do GitHub, e os passos 5 a 9 foram rodados de verdade em 08/11/2026.",
          "passos": [
            {
              "faz": "No navegador, abra a pasta do plugin oficial commit-commands:",
              "cola": "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands",
              "espera": "Uma lista com .claude-plugin, commands, LICENSE e README.md. Não existe pasta hooks."
            },
            {
              "faz": "Abra a pasta commands e, dentro dela, o arquivo commit.md.",
              "espera": "No topo, entre duas linhas com ---, a linha allowed-tools libera git add, git status e git commit. Mais abaixo, linhas que começam com um ponto de exclamação rodam git status, git diff, git branch e git log quando você chama o comando. Sem hook nenhum, ele ainda executa coisas."
            },
            {
              "faz": "Agora abra o arquivo de hooks do plugin oficial security-guidance:",
              "cola": "https://github.com/anthropics/claude-plugins-official/blob/main/plugins/security-guidance/hooks/hooks.json",
              "espera": "Um JSON com os eventos SessionStart, UserPromptSubmit e PostToolUse. Cada um roda, pelo bash, um script em Python da pasta do plugin."
            },
            {
              "faz": "Responda para si: se você instalasse o security-guidance, em que momentos ele rodaria programas no seu PC?",
              "espera": "No começo de cada sessão, a cada pedido seu, depois de cada edição e depois de um git commit ou git push. Não é nada malicioso, mas o painel de instalação só diria que existem hooks."
            },
            {
              "faz": "Abra o PowerShell e cole este comando, que cria a pasta C:\\Projetos\\ola-curso com as subpastas do plugin e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\ola-curso\\.claude-plugin, C:\\Projetos\\ola-curso\\skills\\ola | Out-Null; Set-Location C:\\Projetos\\ola-curso",
              "espera": "Só o cursor de volta, agora com C:\\Projetos\\ola-curso no começo da linha."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele grava o manifesto em .claude-plugin\\plugin.json. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\n{\n  \"name\": \"ola-curso\",\n  \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n  \"version\": \"1.0.0\",\n  \"author\": { \"name\": \"Seu Nome\" }\n}\n'@ | Set-Content -Encoding ascii .claude-plugin\\plugin.json",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Cole este outro bloco inteiro. Ele grava a skill em skills\\ola\\SKILL.md.",
              "cola": "@'\n---\nname: ola\ndescription: Cumprimenta o usuário e diz o que este plugin de teste faz. Use só quando o usuário digitar /ola-curso:ola.\ndisable-model-invocation: true\n---\n\nCumprimente o usuário em português, diga que este é o plugin de teste da aula 7.7 e pergunte em que pode ajudar.\n'@ | Set-Content -Encoding utf8 skills\\ola\\SKILL.md",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Confira o manifesto com o Python:",
              "cola": "python -m json.tool .claude-plugin\\plugin.json",
              "saida": "{\n    \"name\": \"ola-curso\",\n    \"description\": \"Plugin de teste da aula 7.7: uma skill que cumprimenta\",\n    \"version\": \"1.0.0\",\n    \"author\": {\n        \"name\": \"Seu Nome\"\n    }\n}",
              "espera": "O mesmo conteúdo do passo 6, reorganizado e sem mensagem de erro."
            },
            {
              "faz": "Liste o que ficou na pasta:",
              "cola": "Get-ChildItem -Recurse -Name",
              "saida": ".claude-plugin\nskills\n.claude-plugin\\plugin.json\nskills\\ola\nskills\\ola\\SKILL.md",
              "espera": "O manifesto dentro de .claude-plugin e a skill dentro de skills\\ola. Nada além disso."
            },
            {
              "faz": "Abra o Claude Code com o plugin carregado só para esta sessão:",
              "cola": "claude --plugin-dir C:\\Projetos\\ola-curso",
              "espera": "O Claude Code abre. Se for a primeira vez nesta pasta, aparece o aviso de confiança: aceite."
            },
            {
              "faz": "Digite /ola-curso:ola e aperte Enter.",
              "espera": "O Claude cumprimenta você em português, diz que este é o plugin de teste da aula 7.7 e pergunta em que pode ajudar."
            },
            {
              "faz": "Cole este comando, que abre o painel de detalhes de um plugin oficial. Ele não instala nada sozinho.",
              "cola": "/plugin install commit-commands@claude-plugins-official",
              "espera": "O painel de detalhes do commit-commands, com a descrição, a seção Will install (só comandos) e, por ser do catálogo oficial, as linhas Last updated e Context cost."
            },
            {
              "faz": "Leia as duas linhas do Context cost e aperte Esc, sem escolher escopo nenhum.",
              "espera": "O painel fecha e nada é instalado: a instalação só acontece depois de escolher um escopo."
            },
            {
              "faz": "Saia do Claude Code com /exit.",
              "espera": "De volta ao PowerShell. Como o ola-curso foi carregado com --plugin-dir, nada foi gravado nas suas configurações: numa sessão aberta sem essa opção, ele não aparece."
            }
          ],
          "errado": "Se o passo 8 mostrar uma frase como Expecting property name enclosed in double quotes, o manifesto ficou com uma vírgula a mais ou uma aspa a menos: cole de novo o bloco do passo 6. Se, no passo 11, o Claude Code disser que não conhece o comando, confira o passo 9 (a skill tem de estar em skills\\ola\\SKILL.md, fora de .claude-plugin) e rode, no PowerShell, claude plugin validate C:\\Projetos\\ola-curso, que aponta o campo errado. Se o passo 12 responder Plugin \"commit-commands\" not found in any marketplace, o catálogo oficial não está registrado: dentro do Claude Code, rode /plugin marketplace add anthropics/claude-plugins-official e repita o passo."
        }
      ],
      [
        "fontes",
        [
          [
            "Visão geral de plugins (o que um plugin ligado acrescenta a cada sessão), Claude Code",
            "https://code.claude.com/docs/pt/plugins/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Instalar e gerenciar plugins (escopos, Context cost, plugins sincronizados do claude.ai), Claude Code",
            "https://code.claude.com/docs/pt/plugins/install",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Segurança e confiança de plugins (os quatro passos para revisar um plugin), Claude Code",
            "https://code.claude.com/docs/pt/plugins/security",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Criar um plugin Claude Code (manifesto, skill e --plugin-dir), Claude Code",
            "https://code.claude.com/docs/pt/plugins/create",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Visão geral de mods (o que um mod pode alcançar, mods de fábrica), Claude Code",
            "https://code.claude.com/docs/pt/plugins/mods/overview",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Marketplaces da Anthropic (oficial e comunidade), Claude Code",
            "https://code.claude.com/docs/pt/plugins/anthropic-marketplaces",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Pasta do plugin commit-commands, catálogo oficial da Anthropic",
            "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/commit-commands",
            "oficial",
            "08/11/2026"
          ],
          [
            "hooks.json do plugin security-guidance, catálogo oficial da Anthropic",
            "https://github.com/anthropics/claude-plugins-official/blob/main/plugins/security-guidance/hooks/hooks.json",
            "oficial",
            "08/11/2026"
          ],
          [
            "hooks.json do plugin superpowers (hook de início de sessão que injeta uma skill)",
            "https://github.com/obra/superpowers/blob/main/hooks/hooks.json",
            "comunidade",
            "08/11/2026"
          ],
          [
            "Changelog do Claude Code (2.1.275, de 17/09/2026: sincronia com o claude.ai; 2.1.287, de 01/10/2026: mods); a versão em português redireciona",
            "https://code.claude.com/docs/en/changelog",
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
          "Plugin de catálogo oficial é revisado pela Anthropic e dispensa a leitura dos arquivos",
          "O nível do catálogo diz quem o publica, e a documentação manda revisar qualquer plugin."
        ],
        [
          "Plugin é uma caixa de peças que roda como você: leia hooks, .mcp.json e bin antes de instalar",
          "Isso. E ele custa contexto em toda sessão, mesmo sem uso."
        ],
        [
          "Plugin só custa quando você chama uma skill dele, por isso vale instalar vários e ver o que serve",
          "As descrições entram no contexto a cada mensagem, e os servidores e hooks dele ficam ligados."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Onde você descobre o que um hook de plugin roda?",
        "o": [
          [
            "No arquivo hooks/hooks.json do plugin",
            "Isso. O painel de instalação só diz que o hook existe."
          ],
          [
            "Na seção Will install do painel de detalhes",
            "Ela lista que existe um hook, mas não o comando que ele roda."
          ],
          [
            "No SKILL.md da skill principal",
            "O SKILL.md fala das instruções da skill; os hooks ficam em outro arquivo."
          ]
        ],
        "c": 0
      },
      {
        "p": "O que é um mod?",
        "o": [
          [
            "Um servidor MCP que mostra os dados dele num painel ao lado da conversa",
            "Servidores MCP dão ferramentas ao Claude, mas não desenham na tela do Claude Code."
          ],
          [
            "Uma skill que muda o jeito de o Claude responder em todas as sessões",
            "Quem muda o jeito de responder é um estilo de saída ou uma skill; o mod é código que roda dentro do Claude Code."
          ],
          [
            "Um plugin cujas funções em JavaScript rodam dentro do Claude Code",
            "Isso. Por isso ele consegue desenhar painéis e mexer nas ações do Claude."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como sei quais plugins eu tenho?",
        "Digite /plugin numa sessão e abra a aba de instalados: ela lista cada plugin com o escopo. Os que vieram da sua conta do claude.ai aparecem com @synced no nome. No PowerShell, claude plugin list mostra a mesma lista."
      ],
      [
        "Um plugin pode ver a minha chave de API?",
        "Pode, se ela estiver numa variável de ambiente ou num arquivo que você consegue ler: tudo o que o plugin roda, roda com as suas permissões, e a documentação de mods diz isso com todas as letras. Por isso, leia os hooks, o .mcp.json e a pasta bin antes de instalar."
      ],
      [
        "Preciso de um plugin para usar as minhas skills em vários projetos?",
        "Não. Uma skill na sua pasta pessoal de skills já vale em todos os seus projetos. O plugin vale a pena quando você quer levar um conjunto de peças para outras pessoas ou outro PC."
      ]
    ]
  },
  "7-8": {
    "tempo": 52,
    "video": "a7-8",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já viu aparecer na tela uma linha começando com a palavra Explore e o Claude seguir trabalhando, sem saber quem estava fazendo o quê. Esta aula mostra como o {{claude-code|Claude Code}} delega partes do trabalho a {{subagente|subagentes}}, como criar um seu e como conferir o que ele devolve, e explica por que as equipes de agentes, por enquanto, ficam desligadas.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Muita tarefa tem uma parte barulhenta: ler vinte {{arquivo|arquivos}} para achar onde uma regra é aplicada, {{rodar}} os testes e olhar centenas de linhas de saída, vasculhar uma {{documentacao|documentação}} comprida. Se tudo isso acontece na conversa principal, o {{contexto}} enche de material que você nunca mais vai consultar, e cada mensagem seguinte custa mais e fica menos focada. O subagente resolve isso: ele faz a parte barulhenta na janela dele e devolve só o resumo. A sua conversa recebe a conclusão, não o caminho."
      ],
      [
        "p",
        "Ele serve também para limitar. Um subagente pode ter uma lista fechada de {{ferramenta|ferramentas}}: um revisor que só lê não consegue mudar arquivo nenhum, mesmo que alguém peça. E serve para fazer coisas ao mesmo tempo: três pesquisas independentes, cada uma num subagente, terminam mais rápido do que uma depois da outra."
      ],
      [
        "p",
        "Delegar sem perder o controle quer dizer três coisas, e esta aula cobre as três: saber o que o subagente recebe e o que fica de fora; decidir o que ele pode fazer; e conferir o que ele devolve. Há ainda a questão do custo. Cada subagente faz os próprios pedidos ao {{modelo}}, que contam para o mesmo {{limite-de-uso|limite de uso}} da sua conversa, e uma {{equipe-de-agentes|equipe de agentes}} gasta muito mais. Sem saber disso, uma \"pesquisa com cinco subagentes\" pode comer uma fatia visível da sua cota de cinco horas."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao colega da aula 1.5: alguém que o seu estagiário manda fazer uma pesquisa longe da mesa dele. O colega trabalha sozinho, lê o que precisa e volta só com o resumo, e a mesa do estagiário continua limpa. Você pode também contratar um colega com uma função fixa, escrita num papel: \"você revisa, só lê, nunca mexe em nada\". Esse é o subagente que você cria. E pode juntar vários colegas numa equipe, com um líder que distribui as tarefas numa lista compartilhada, enquanto eles conversam entre si sem passar pelo estagiário: essa é a equipe de agentes."
      ],
      [
        "quebra",
        "Um colega de verdade ouviu o que se falou no escritório; o subagente não ouviu nada da sua conversa e só sabe o que está na mensagem que o Claude escreve ao delegar. A exceção é o fork, um colega que chega já sabendo tudo. O colega também não trabalha de graça: cada um gasta os próprios {{token|tokens}}. O resumo que ele traz pode conter frases de páginas que ele leu e que tentam dar ordens, e por isso o Claude Code marca esse tipo de texto. E, numa equipe, os colegas começam com o mesmo modo de {{permissao|permissão}} do líder, inclusive o {{bypass}}: se o seu escritório funciona sem pedir licença, os colegas também."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Os subagentes que já vêm prontos"
      ],
      [
        "p",
        "O Claude Code traz subagentes de fábrica, e o Claude os chama sozinho quando a tarefa combina. Você provavelmente já viu o primeiro da tabela:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Subagente",
            "O que faz",
            "Pode mudar arquivos?"
          ],
          "linhas": [
            [
              "Explore",
              "Procura e lê arquivos para entender um projeto, rápido e barato",
              "Não: só lê"
            ],
            [
              "Plan",
              "Junta contexto quando você está no modo de planejamento, antes do plano",
              "Não: só lê"
            ],
            [
              "general-purpose",
              "Tarefas de várias etapas, que pedem investigar e agir",
              "Sim"
            ],
            [
              "claude",
              "O coringa, para o que não se encaixa nos outros",
              "Sim"
            ],
            [
              "statusline-setup e claude-code-guide",
              "Auxiliares: configurar a barra de status e responder dúvidas sobre o próprio Claude Code",
              "Quase nunca precisam"
            ]
          ]
        }
      ],
      [
        "p",
        "Todos herdam as permissões da conversa principal. O Explore e o Plan começam sem o seu {{claude-md|CLAUDE.md}} e sem o retrato do {{git|Git}}, para pesquisar mais depressa; os outros recebem os dois."
      ],
      [
        "h3",
        "O que o colega recebe, e o que fica de fora"
      ],
      [
        "p",
        "Esta é a parte que mais engana quem começa. Um subagente comum nasce com uma janela de contexto nova e vazia. Ele recebe:"
      ],
      [
        "lista",
        [
          "as instruções dele, que ocupam o lugar das {{instrucoes-do-sistema|instruções do sistema}} do Claude Code;",
          "a mensagem de tarefa, que o Claude escreve na hora de delegar, resumindo o que precisa ser feito;",
          "em geral, os seus arquivos CLAUDE.md e um retrato do `git status` (menos o Explore e o Plan);",
          "as {{skill|skills}} que a definição dele mandar carregar, se houver."
        ]
      ],
      [
        "p",
        "E não recebe: o histórico da sua conversa, os arquivos que o Claude já leu, as skills que você já usou, o seu {{estilo-de-saida|estilo de saída}} e a memória automática. A consequência prática: se uma regra combinada só na conversa precisa chegar ao subagente, como \"ignore a pasta vendor\", repita-a no pedido de delegação. A conversa principal continua com tudo e lê o resumo à luz do que sabe, mas o subagente trabalhou sem saber."
      ],
      [
        "p",
        "A exceção é o {{fork}}: um subagente que herda a conversa inteira até ali, com as mesmas instruções, ferramentas e modelo. Como o começo dos pedidos dele é idêntico ao da sua conversa, ele reaproveita o {{cache}} e sai mais barato que um subagente novo para tarefas que precisam do mesmo contexto. O modo fork vem ligado: o Claude pode abrir forks por conta própria. Você abre um com `/subtask`, que a aula 7.20 mostra."
      ],
      [
        "h3",
        "Criar o seu"
      ],
      [
        "p",
        "Um subagente seu é um arquivo {{markdown|Markdown}} com um cabeçalho, o {{frontmatter}}, entre duas linhas com três hifens. Este é o revisor do laboratório:"
      ],
      [
        "codigo",
        {
          "texto": "---\nname: revisor-leitura\ndescription: Revisa arquivos de texto e de código e devolve uma lista curta de problemas, sem mudar nada. Use quando o usuário pedir uma revisão.\ntools: Read, Grep, Glob\nmodel: haiku\n---\n\nVocê é um revisor cuidadoso. Leia os arquivos que a tarefa indicar e devolva no máximo cinco problemas, do mais grave para o menos grave. Para cada um, diga o arquivo, a linha e o que está errado, em uma frase. Não escreva código novo. Se não achar nada, diga isso.",
          "linguagem": "markdown",
          "rotulo": ".claude\\agents\\revisor-leitura.md"
        }
      ],
      [
        "p",
        "Linha por linha: `name` é o nome pelo qual você o chama. `description` diz ao Claude quando delegar a ele, e por isso é curta e concreta. `tools` é a lista de ferramentas que ele pode usar: aqui, só ler, procurar texto e listar arquivos; sem essa linha, ele herdaria todas, inclusive editar e rodar comandos. `model` escolhe o modelo: `haiku` é o mais barato e dá conta de uma revisão simples; as outras opções são `sonnet`, `opus`, `fable` ou `inherit`, que usa o da conversa. Abaixo do cabeçalho vêm as instruções, em português comum. Há outros campos opcionais, como `maxTurns`, que limita o número de voltas antes de ele parar, e `isolation: worktree`, que a aula 7.9 explica."
      ],
      [
        "p",
        "Onde o arquivo fica decide quem o enxerga. Em `.claude\\agents\\`, dentro da {{pasta}} do projeto, ele vale só ali e pode entrar num {{commit}}. Em `C:\\Users\\SeuNome\\.claude\\agents\\`, vale em todos os seus projetos. Um {{plugin}} também pode trazer subagentes, mas, por segurança, os de plugin ignoram os campos de {{hook|hooks}}, de servidores {{mcp|MCP}} e de modo de permissão. Se dois tiverem o mesmo nome, vence o do projeto."
      ],
      [
        "p",
        "O jeito mais fácil de criar é pedir ao Claude, descrevendo a função, as ferramentas e o modelo, e depois abrir o arquivo para conferir. O comando `/agents`, que antes abria um assistente, desde a versão 2.1.198 só mostra um lembrete apontando para essas pastas. O Claude Code percebe arquivos novos sozinho; só precisa reiniciar na primeira vez, se a pasta `agents` não existia quando a sessão começou. E mantenha as descrições curtas: todas elas entram no contexto, e acima de 15 mil tokens somados o Claude Code avisa ao abrir."
      ],
      [
        "h3",
        "Como chamar"
      ],
      [
        "p",
        "Há quatro jeitos, do mais solto ao mais firme. O Claude pode delegar sozinho, quando o seu pedido combina com a descrição. Você pode citar o nome no pedido, como \"use o revisor-leitura para revisar o calculo.py\", e o Claude quase sempre delega. Pode mencioná-lo com arroba, escolhendo na lista que aparece ao digitar `@`, o que garante que seja ele. E pode abrir uma sessão inteira como aquele subagente, com `claude --agent revisor-leitura`: a conversa principal passa a ter as ferramentas e o modelo dele."
      ],
      [
        "p",
        "Na tela, a delegação aparece como uma linha com o nome do subagente e uma descrição curta da tarefa, como `revisor-leitura(Revisar calculo.py)`."
      ],
      [
        "h3",
        "Primeiro plano e segundo plano"
      ],
      [
        "p",
        "Um subagente que o Claude abre a partir da conversa principal roda em {{segundo-plano|segundo plano}}: você continua conversando enquanto ele trabalha, e ele aparece num painel abaixo da caixa de pedido. Desde a versão 2.1.302, de 16/10/2026, é assim também no {{app-desktop|app desktop}} e no {{vs-code|VS Code}}. Se ele precisar de uma permissão, a pergunta aparece na sua conversa, com o nome dele; apertar Esc nega aquela ação sem parar o subagente. No bypass, não aparece pergunta nenhuma. Quando ele termina, o resultado chega à conversa como um aviso; se você perguntar antes, o Claude diz que ele ainda está rodando. Para ver o que está rodando e o que terminou há pouco, digite `/tasks`; no painel, Enter abre a conversa de um subagente."
      ],
      [
        "h3",
        "Delegar sem perder o controle"
      ],
      [
        "p",
        "Cinco hábitos fazem a diferença. **Limite as ferramentas**: um revisor só com ferramentas de leitura não consegue estragar nada, e isso vale mais que escrever \"não mude arquivos\" nas instruções, que é só um pedido. **Peça um formato curto**: \"devolva só os testes que falharam, com a mensagem de erro\" volta enxuto. **Use um modelo menor** quando a tarefa é simples. **Ponha um teto**, com `maxTurns`. E **confira o que voltou**."
      ],
      [
        "p",
        "Conferir importa por dois motivos. O primeiro é que o subagente erra como qualquer modelo, com a mesma confiança. O segundo é que ele pode ter lido páginas e arquivos que você nunca viu, e um texto ali pode tentar dar ordens à conversa principal. O Claude Code verifica cada relatório antes de o Claude ler: põe uma barra invertida em textos que imitam as mensagens do próprio sistema e acrescenta uma linha de alerta quando o relatório fala em pular permissões. Mas a documentação avisa que essa verificação não julga se o conteúdo é malicioso. A conferência final é sua: rode o código, abra o arquivo, compare com o que você sabe. O laboratório faz exatamente isso."
      ],
      [
        "p",
        "Um último cuidado, que a aula 7.15 aprofunda: as edições feitas por um subagente em segundo plano, em geral, não voltam com o {{rewind|/rewind}}. Antes de delegar uma mudança grande, faça um commit."
      ],
      [
        "p",
        "E há limites de fábrica: no máximo 20 subagentes rodando ao mesmo tempo numa sessão, e no máximo três camadas, quando um subagente abre outro."
      ],
      [
        "h3",
        "Quando não usar"
      ],
      [
        "p",
        "Não delegue quando a tarefa pede ida e volta com você, quando várias etapas dividem muito contexto (planejar, fazer e testar a mesma mudança), quando é uma mudança pequena e direta, ou quando a pressa importa: um subagente comum começa do zero e gasta tempo juntando contexto. Para um jeito de fazer que se repete, uma skill, que roda na própria conversa, costuma servir melhor. Para uma pergunta rápida sobre algo que já está na conversa, existe o `/btw`, que responde sem ferramentas e sem entrar no histórico."
      ],
      [
        "h3",
        "Equipes de agentes: o que são e por que esperar"
      ],
      [
        "p",
        "Numa equipe de agentes, várias sessões do Claude Code trabalham juntas. Uma é o líder, que divide o trabalho, distribui as tarefas numa lista compartilhada e junta os resultados; as outras são os colegas, cada um com a própria janela de contexto, que trocam mensagens diretamente entre si. Você pode falar com qualquer colega sem passar pelo líder. A diferença para os subagentes, em uma frase: o subagente só devolve um resumo para quem o chamou; os colegas de uma equipe discutem, se desafiam e se coordenam."
      ],
      [
        "p",
        "O recurso é experimental e vem desligado. Liga-se com a {{variavel|variável de ambiente}} `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS` igual a 1, no bloco `env` do {{settings-json|arquivo de configurações}}. Ligar muda também a delegação comum: um subagente que o Claude batizar com um nome passa a nascer como colega de equipe, mesmo que você não tenha pedido uma."
      ],
      [
        "p",
        "Quatro fatos pesam contra ligar agora. O custo: a página de custos diz que uma equipe usa cerca de sete vezes mais tokens que uma sessão comum quando os colegas trabalham no modo de planejamento, porque cada colega é uma instância separada do Claude. As permissões: cada colega começa no modo do líder, inclusive o bypass, e não há como dar a um colega um modo diferente na hora de criá-lo. A tela: os painéis lado a lado exigem o tmux ou o iTerm2 e não funcionam no Windows Terminal nem no {{terminal}} do VS Code; no Windows, os colegas aparecem todos no mesmo terminal, e você alterna entre eles com as setas. E as limitações: não dá para retomar uma sessão com colegas desse tipo, há uma equipe só por sessão, e colegas não abrem equipes próprias."
      ],
      [
        "p",
        "Se um dia fizer sentido, a documentação recomenda começar com três a cinco colegas, cada um dono de arquivos diferentes (dois editando o mesmo arquivo sobrescrevem um ao outro), em tarefas de pesquisa e revisão, que têm partes independentes. Até lá, subagentes resolvem quase tudo."
      ],
      [
        "tabela",
        {
          "colunas": [
            "",
            "Subagentes",
            "Equipe de agentes"
          ],
          "linhas": [
            [
              "Quem coordena",
              "A conversa principal",
              "Um líder, com uma lista de tarefas compartilhada"
            ],
            [
              "Comunicação",
              "Devolve um resumo para quem chamou",
              "Os colegas trocam mensagens entre si"
            ],
            [
              "Custo",
              "Menor: só o resumo volta",
              "Maior: cada colega é uma sessão inteira"
            ],
            [
              "Estado hoje",
              "Ligado, de fábrica",
              "Experimental, desligado"
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
          "**Preciso criar um subagente para usar?** Não. Os de fábrica já trabalham sozinhos. Crie um quando você se pega pedindo sempre o mesmo tipo de ajudante, com as mesmas instruções.",
          "**Custa?** Cada subagente faz os próprios pedidos, que contam para o mesmo limite do seu plano. O `/usage` mostra quanto do uso recente foi para subagentes; a aula 7.17 mostra o resto dos controles de custo.",
          "**Dá para ver o que ele fez?** Dá: no painel abaixo da caixa de pedido, Enter abre a conversa dele, e o `/tasks` lista o que está rodando e o que terminou há pouco.",
          "**E se ele errar ou fizer algo que eu não queria?** Ele tem as mesmas permissões da sessão; em bypass, nada o para. Por isso, limite as ferramentas dele, faça commit antes de uma delegação grande e confira o resultado.",
          "**Ele lembra da vez anterior?** Cada chamada cria um subagente novo. Dá para pedir ao Claude que retome um que já terminou, e existe um campo de memória para quem quer que ele aprenda entre sessões; a caixa abaixo fala dele.",
          "**Funciona no app desktop e no VS Code?** Funciona, com os subagentes sempre em segundo plano."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: memória, hooks próprios e outras formas de paralelismo",
          "blocos": [
            [
              "p",
              "O campo `memory` dá ao subagente uma memória própria, que ele carrega entre sessões, com escopo de usuário, de projeto ou local. O campo `hooks` define hooks que valem só enquanto aquele subagente trabalha."
            ],
            [
              "p",
              "Subagentes são uma de cinco formas de pôr o Claude Code para fazer várias coisas ao mesmo tempo. As outras são a visão de agentes (`claude agents`), que despacha e acompanha sessões inteiras em segundo plano; as equipes de agentes; os workflows dinâmicos, um script que comanda muitos subagentes e confere os resultados, que a aula 7.11 mostra; e os projetos na nuvem, da aula 7.21."
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
          "pergunta": "No laboratório, você vai pedir ao revisor-leitura que revise o arquivo abaixo, uma conta de juros compostos. Antes de delegar, preveja: o que você acha que este programa imprime para 1.000 reais a 1% ao mês, por 12 meses? E o número faz sentido?",
          "codigo": "def juros_compostos(valor, taxa, meses):\n    return valor * (1 + taxa) * meses\n\n\nprint(juros_compostos(1000, 0.01, 12))",
          "linguagem": "python",
          "resposta": "Ele imprime 12120.0, e o número não faz sentido: 1% ao mês por um ano não transforma 1.000 em mais de 12 mil. O erro está na linha 2: o código multiplica pelos meses em vez de elevar à potência dos meses. Com `**` no lugar do segundo `*`, o resultado vira 1126.83, o certo. É esse o tipo de problema que você espera ver no relatório do subagente, e é rodando o código, como aqui, que você confere se ele acertou.",
          "vivo": [
            [
              "Trocar * meses por ** meses",
              "def juros_compostos(valor, taxa, meses):\n    return valor * (1 + taxa) ** meses\n\n\nprint(juros_compostos(1000, 0.01, 12))",
              "1126.8250301319697"
            ],
            [
              "Voltar ao original",
              "def juros_compostos(valor, taxa, meses):\n    return valor * (1 + taxa) * meses\n\n\nprint(juros_compostos(1000, 0.01, 12))",
              "12120.0"
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
          "p": "Você quer saber em quais dos vinte arquivos do projeto aparece uma regra de desconto, e só quer a conclusão, sem a leitura toda na conversa. Qual é o melhor caminho?",
          "o": [
            [
              "Ligar uma equipe de agentes: três colegas leem mais rápido e gastam menos",
              "Equipes são experimentais, vêm desligadas e gastam bem mais tokens que uma sessão comum."
            ],
            [
              "Fazer na conversa principal, porque o subagente não enxerga o projeto",
              "O subagente começa na mesma pasta e lê os arquivos com as ferramentas dele."
            ],
            [
              "Delegar a um subagente, que lê tudo na janela dele e devolve o resumo",
              "Isso. A leitura fica na janela dele, e a sua conversa recebe só a conclusão."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Mais cedo, nesta conversa, você explicou ao Claude que a pasta vendor deve ser ignorada. Depois pediu uma revisão ao revisor-leitura e perguntou se ele sabia da regra. O Claude respondeu: \"Sabe, sim. Todo subagente recebe a conversa inteira até aqui, então a regra já chegou a ele.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: um subagente comum começa sem a conversa; repita a regra ao delegar",
              "Isso. Só o fork herda a conversa. Uma regra combinada só na conversa precisa ir no pedido de delegação."
            ],
            [
              "Está certa: todo subagente herda a conversa inteira, do mesmo jeito que um fork",
              "Quem herda a conversa é só o fork. Um subagente comum recebe a mensagem de tarefa e, em geral, o CLAUDE.md."
            ],
            [
              "Está errada: subagente não lê nada do projeto, nem o CLAUDE.md",
              "A maioria recebe o CLAUDE.md e lê os arquivos do projeto; só o Explore e o Plan começam sem o CLAUDE.md."
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
            "\"Mandei um subagente revisar, então está revisado.\"",
            "Ele erra como qualquer modelo. Confira o relatório: rode o código, abra o arquivo."
          ],
          [
            "\"O subagente sabe o que a gente conversou.\"",
            "Só o fork herda a conversa. Um subagente comum recebe a mensagem de tarefa; repita nela o que importa."
          ],
          [
            "\"Cinco subagentes em paralelo saem de graça.\"",
            "Cada um faz os próprios pedidos, que contam para o mesmo limite do seu plano."
          ],
          [
            "\"Dei ao revisor todas as ferramentas, por via das dúvidas.\"",
            "Sem a linha tools, ele herda todas, inclusive editar e rodar comandos. Liste só as que ele precisa."
          ],
          [
            "\"O /agents vai abrir um assistente para criar o subagente.\"",
            "Desde a versão 2.1.198, ele só mostra um lembrete. Peça ao Claude ou crie o arquivo em .claude\\agents."
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
          "p": "O que um subagente comum recebe ao começar, e o que fica de fora?",
          "r": [
            "Recebe as instruções dele e a mensagem de tarefa que o Claude escreve.",
            "Em geral, recebe também o CLAUDE.md e um retrato do git status (o Explore e o Plan, não).",
            "Não recebe a sua conversa nem os arquivos que o Claude já leu."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Qual a diferença entre subagentes e uma equipe de agentes?",
          "r": [
            "O subagente devolve um resumo para quem o chamou.",
            "Na equipe, um líder distribui tarefas e os colegas trocam mensagens entre si.",
            "A equipe é experimental, vem desligada e gasta bem mais tokens."
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
          "titulo": "Um revisor que só lê, e a sua conferência",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai criar, numa pasta de teste, um programa com um erro de conta e um subagente revisor que só tem ferramentas de leitura; depois, pedir a revisão no Claude Code, testar que o revisor não consegue editar e conferir o resultado rodando o programa. Precisa do {{python|Python}}, instalado no laboratório da aula 2.2, e do Claude Code. O revisor usa o modelo haiku, o mais barato. Os passos no PowerShell (1 a 5 e 11) foram rodados de verdade num PowerShell 5.1 sem configurações extras, em 08/11/2026, e as saídas abaixo são as reais; a do passo 11 é a do programa já corrigido. Os passos com o Claude Code (6 a 10) não foram testados: foram escritos a partir da documentação oficial de subagentes, e as frases exatas, inclusive o texto do relatório, vão variar. Pelo app: na aba Code do app desktop, os mesmos pedidos funcionam com a pasta aberta, e o subagente roda sempre em segundo plano.",
          "naoTestado": "Os passos 6 a 10 exigem o Claude Code interativo, que não foi rodado nos testes deste módulo; o que deve acontecer neles vem da página oficial de subagentes, conferida em 08/11/2026. Os passos 1 a 5 e a saída do passo 11 (o programa com a linha corrigida) foram rodados de verdade em 08/11/2026.",
          "passos": [
            {
              "faz": "Abra o PowerShell e cole este comando, que cria a pasta C:\\Projetos\\revisao-teste, com a subpasta .claude\\agents, e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\revisao-teste\\.claude\\agents | Out-Null; Set-Location C:\\Projetos\\revisao-teste",
              "espera": "Só o cursor de volta, agora com C:\\Projetos\\revisao-teste no começo da linha."
            },
            {
              "faz": "Cole este bloco inteiro de uma vez. Ele grava o calculo.py, o programa do Preveja. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "@'\ndef juros_compostos(valor, taxa, meses):\n    return valor * (1 + taxa) * meses\n\n\nprint(juros_compostos(1000, 0.01, 12))\n'@ | Set-Content -Encoding utf8 calculo.py",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Rode o programa:",
              "cola": "python calculo.py",
              "saida": "12120.0",
              "espera": "O número errado do Preveja: 12120.0."
            },
            {
              "faz": "Cole este outro bloco inteiro. Ele grava o subagente em .claude\\agents\\revisor-leitura.md.",
              "cola": "@'\n---\nname: revisor-leitura\ndescription: Revisa arquivos de texto e de código e devolve uma lista curta de problemas, sem mudar nada. Use quando o usuário pedir uma revisão.\ntools: Read, Grep, Glob\nmodel: haiku\n---\n\nVocê é um revisor cuidadoso. Leia os arquivos que a tarefa indicar e devolva no máximo cinco problemas, do mais grave para o menos grave. Para cada um, diga o arquivo, a linha e o que está errado, em uma frase. Não escreva código novo. Se não achar nada, diga isso.\n'@ | Set-Content -Encoding utf8 .claude\\agents\\revisor-leitura.md",
              "espera": "O cursor volta sem mensagem nenhuma."
            },
            {
              "faz": "Confira o cabeçalho do subagente:",
              "cola": "Get-Content .claude\\agents\\revisor-leitura.md -TotalCount 6",
              "saida": "---\nname: revisor-leitura\ndescription: Revisa arquivos de texto e de código e devolve uma lista curta de problemas, sem mudar nada. Use quando o usuário pedir uma revisão.\ntools: Read, Grep, Glob\nmodel: haiku\n---",
              "espera": "As seis primeiras linhas do arquivo, com os acentos certos e a linha tools só com Read, Grep e Glob."
            },
            {
              "faz": "Abra o Claude Code nesta pasta: digite claude e aperte Enter.",
              "espera": "Como a pasta é nova, aparece o aviso de confiança. Aceite. Depois disso, o Claude Code fica esperando um pedido."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Use o subagente revisor-leitura para revisar o arquivo calculo.py. Traga só o relatório dele, sem corrigir nada.",
              "espera": "Aparece uma linha com revisor-leitura e uma descrição curta da tarefa. Quando ele termina, o relatório chega: algo como um problema na linha 2, que multiplica pelos meses em vez de elevar à potência. As palavras vão variar."
            },
            {
              "faz": "Agora teste o limite do revisor. Cole:",
              "cola": "Peça ao revisor-leitura que corrija ele mesmo a linha 2 do calculo.py. Não corrija você.",
              "espera": "O revisor conta que não tem ferramenta para editar, e o arquivo não muda. Se o Claude se oferecer para corrigir no lugar dele, responda que ainda não."
            },
            {
              "faz": "Digite /tasks e aperte Enter.",
              "espera": "A lista do que roda em segundo plano nesta sessão. Nas versões mais novas, uma linha Earlier in this session mostra também os subagentes que já terminaram, como o revisor-leitura; nas mais antigas, um subagente concluído sai da lista uns 30 segundos depois de terminar. Aperte Esc para voltar."
            },
            {
              "faz": "Peça a correção à conversa principal. Cole:",
              "cola": "Agora corrija você a linha 2 do calculo.py, como o revisor apontou, e não mude mais nada.",
              "espera": "O Claude edita a linha 2, trocando o segundo `*` por `**`. Se ele pedir permissão, aceite."
            },
            {
              "faz": "Saia com /exit e rode o programa de novo, para conferir com os próprios olhos:",
              "cola": "python calculo.py",
              "saida": "1126.8250301319697",
              "espera": "Agora 1126.8250301319697: mil reais a 1% ao mês, por doze meses. A delegação foi conferida."
            }
          ],
          "errado": "Se o passo 3 responder que python não é reconhecido, volte ao laboratório da aula 2.2. Se, no passo 7, o Claude disser que não conhece o revisor-leitura, saia com /exit, confira o passo 5 e abra o Claude Code de novo: na primeira vez que a pasta agents aparece, ele precisa ser reaberto. Se, no passo 8, o arquivo mudar mesmo assim, foi a conversa principal que editou, e não o revisor; confira com o passo 5 se a linha tools ficou só com Read, Grep e Glob. Se o passo 11 continuar em 12120.0, a correção não foi gravada: abra o calculo.py e veja a linha 2."
        }
      ],
      [
        "fontes",
        [
          [
            "Criar subagentes personalizados (integrados, o que carregam, frontmatter, segundo plano, fork, limites), Claude Code",
            "https://code.claude.com/docs/pt/sub-agents",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Orquestre equipes de sessões Claude Code (experimental, permissões, modos de exibição, limitações), Claude Code",
            "https://code.claude.com/docs/pt/agent-teams",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Executar agentes em paralelo (as cinco formas e quando usar cada uma), Claude Code",
            "https://code.claude.com/docs/pt/agents",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Custos (subagentes contam no limite; equipes, cerca de 7 vezes mais tokens no modo de planejamento), Claude Code",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Checkpoints (edições de subagentes, em geral, não voltam com o rewind), Claude Code",
            "https://code.claude.com/docs/pt/checkpointing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.302, de 16/10/2026: fork ligado e subagentes em segundo plano também no app e no VS Code); a versão em português redireciona",
            "https://code.claude.com/docs/en/changelog",
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
          "Subagente é uma cópia do Claude que já sabe a conversa e trabalha de graça",
          "Só o fork sabe a conversa, e todo subagente gasta tokens do mesmo limite."
        ],
        [
          "Subagente e equipe de agentes são o mesmo recurso, com nomes diferentes no terminal e no app",
          "São recursos diferentes: a equipe tem líder, lista de tarefas e colegas que conversam, e é experimental."
        ],
        [
          "Subagente trabalha na janela dele e devolve o resumo; limite as ferramentas e confira",
          "Isso. Delegar sem perder o controle: o que ele recebe, o que ele pode fazer e o que você confere."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Qual tipo de subagente herda a conversa inteira até ali?",
        "o": [
          [
            "O Explore, que pesquisa o projeto inteiro",
            "O Explore começa sem a conversa, e até sem o CLAUDE.md."
          ],
          [
            "O fork, que nasce da conversa atual",
            "Isso. Por isso ele também reaproveita o cache da conversa."
          ],
          [
            "Qualquer subagente criado por você",
            "Um subagente seu começa com as instruções dele e a mensagem de tarefa, sem a conversa."
          ]
        ],
        "c": 1
      },
      {
        "p": "Como você faz um subagente que não consegue mudar nenhum arquivo?",
        "o": [
          [
            "Listando em tools só ferramentas de leitura, como Read e Grep",
            "Isso. Sem ferramenta de edição, ele não edita, peça quem pedir."
          ],
          [
            "Escrevendo nas instruções dele que nunca mude arquivos",
            "Instrução é pedido. Quem garante é a lista de ferramentas."
          ],
          [
            "Escolhendo o modelo haiku, que não sabe editar arquivos",
            "O modelo não decide o que ele pode fazer; a lista de ferramentas decide."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Quando vale criar um subagente meu?",
        "Quando você se pega pedindo sempre o mesmo tipo de ajudante, com as mesmas instruções: um revisor, alguém que roda os testes e resume as falhas. Para uma tarefa de uma vez só, peça direto, e o Claude decide se delega a um dos subagentes de fábrica."
      ],
      [
        "Por que o subagente não sabia o que eu tinha dito?",
        "Porque um subagente comum começa sem a conversa: ele recebe as instruções dele, a mensagem de tarefa que o Claude escreve e, em geral, o CLAUDE.md. Repita no pedido de delegação o que ele precisa saber. Só o fork herda a conversa inteira."
      ],
      [
        "Devo ligar as equipes de agentes?",
        "Por enquanto, não. São experimentais, vêm desligadas, gastam muito mais tokens, os colegas começam no mesmo modo de permissão do líder, inclusive o bypass, e os painéis lado a lado não funcionam no Windows Terminal. Subagentes resolvem quase tudo."
      ]
    ]
  },
  "7-9": {
    "tempo": 48,
    "video": "a7-9",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você pediu ao Claude uma mudança grande no site e, no meio dela, apareceu um erro urgente para corrigir; ou abriu duas sessões na mesma pasta e uma estragou o que a outra estava fazendo. Esta aula mostra a {{worktree}}: uma segunda pasta do mesmo projeto, em outra {{branch}}, para trabalhar em duas coisas ao mesmo tempo sem misturar.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Uma pasta de projeto acompanhada pelo {{git|Git}} mostra uma branch de cada vez. Se você troca de branch com mudanças ainda sem {{commit}}, o Git recusa ou leva as mudanças junto para a outra branch. E duas {{sessao|sessões}} do {{claude-code|Claude Code}} abertas na mesma pasta mexem nos mesmos {{arquivo|arquivos}}: uma sobrescreve a edição da outra, ou roda os testes em cima de um trabalho que a outra deixou pela metade."
      ],
      [
        "p",
        "A worktree resolve isso dando a cada tarefa a própria pasta, cada uma na própria branch, com o mesmo histórico por baixo. A documentação do Claude Code resume o uso: uma sessão cria um recurso enquanto uma segunda corrige um bug, cada uma na sua cópia dos arquivos. Para você, isso serve quando o Claude vai refazer o visual da página numa sessão comprida e, enquanto isso, você precisa corrigir um telefone errado no ar; ou quando quer deixar o Claude experimentar à vontade numa pasta, sabendo que a versão que funciona continua intacta na outra; ou quando subagentes trabalham em paralelo e não podem pisar um no outro."
      ],
      [
        "p",
        "É um recurso do próprio Git, o `git worktree`, e o Claude Code acrescenta um atalho, a opção `--worktree`. Tudo o que a aula usa vem do módulo 3: commit, branch e {{merge}}."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Junte duas imagens que você já conhece. Na aula 0.0, a pasta era a sala em que o estagiário trabalha. Na aula 3.1, o commit era uma foto da pasta, e o histórico, o álbum com todas as fotos. A worktree é uma segunda sala com o mesmo álbum. Cada sala tem a própria mesa, com os papéis de um caminho, a branch. O álbum fica guardado na primeira sala, e a segunda tem só uma anotação dizendo onde ele está. Dois estagiários, um em cada sala, não mexem nos papéis um do outro, e toda foto que qualquer um tira vai para o mesmo álbum."
      ],
      [
        "quebra",
        "Duas salas de verdade não dividem um álbum ao mesmo tempo, e aqui uma foto tirada numa sala aparece na hora no álbum visto da outra. O mesmo caminho também não pode estar aberto em duas salas: o Git recusa. A segunda sala chega sem os papéis que nunca entraram no álbum, como o {{env|.env}} e as {{biblioteca|bibliotecas}} instaladas, então nem tudo o que funciona numa sala funciona na outra. E a segunda sala não é uma cópia de segurança: se você apagar a primeira, com o álbum dentro, a segunda perde o histórico junto."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Criar a segunda sala"
      ],
      [
        "p",
        "Dentro de um {{repositorio|repositório}} que já tem pelo menos um commit, um {{comando}} cria a worktree. Esta é a saída real, no repositório de teste do laboratório:"
      ],
      [
        "codigo",
        {
          "texto": "git worktree add ..\\loja-teste-ideia -b ideia",
          "linguagem": "powershell"
        }
      ],
      [
        "saida",
        "Preparing worktree (new branch 'ideia')\nHEAD is now at 74a0766 Primeiro commit"
      ],
      [
        "p",
        "O comando criou a pasta `loja-teste-ideia` ao lado do projeto (o `..\\` quer dizer \"um nível acima\"), criou a branch `ideia` a partir do commit atual e abriu essa branch lá dentro. A outra pasta não mudou nada. O `git worktree list` mostra as duas salas, cada uma com o commit e a branch abertos:"
      ],
      [
        "saida",
        "C:/Projetos/loja-teste       74a0766 [main]\nC:/Projetos/loja-teste-ideia 74a0766 [ideia]"
      ],
      [
        "p",
        "Por baixo: na pasta nova, o `.git` não é uma pasta, e sim um arquivo de uma linha só, que começa com `gitdir:` e aponta para a pasta `.git` do projeto principal. É a anotação da analogia. O histórico continua num lugar só, e por isso uma worktree ocupa só o espaço dos arquivos de trabalho, não de outra cópia do álbum."
      ],
      [
        "h3",
        "Trabalhar nas duas"
      ],
      [
        "p",
        "Mudar um arquivo na worktree não toca na pasta principal. No laboratório, depois de trocar o título do `index.html` na `loja-teste-ideia`, o `git status --short` de lá mostra o arquivo mudado, com um M na frente:"
      ],
      [
        "saida",
        " M index.html"
      ],
      [
        "p",
        "E, olhando o mesmo arquivo na pasta principal, o título antigo continua lá:"
      ],
      [
        "saida",
        "<h1>Minha loja</h1>"
      ],
      [
        "p",
        "O commit feito na worktree vai para o álbum comum. De volta à pasta principal, o `git log --oneline --all`, que mostra as fotos de todas as branches, já lista a foto nova, tirada na outra sala:"
      ],
      [
        "saida",
        "a665be4 Muda o h1\n74a0766 Primeiro commit"
      ],
      [
        "p",
        "Para trazer o trabalho para a branch principal, é o mesmo merge da aula 3.1, feito na pasta principal: `git merge ideia`. Como a `main` não mudou enquanto isso, o Git só avança o nome dela, no \"Fast-forward\". Terminado o trabalho, `git worktree remove` apaga a pasta da worktree e `git branch -d ideia` apaga a branch, que a esta altura já está dentro da `main`."
      ],
      [
        "h3",
        "As regras do Git"
      ],
      [
        "p",
        "Quatro regras evitam a maior parte dos sustos. **Uma branch só pode estar aberta numa sala por vez**: com a `ideia` aberta na worktree, pedir para abri-la na pasta principal dá erro, como o Preveja mostra. O `git branch` marca com um `+` as branches abertas em outra worktree. **A remoção recusa trabalho não salvo**: se a worktree tem mudança sem commit, o `git worktree remove` para com um aviso, e a opção `--force`, que ele sugere, apaga essas mudanças de vez. **Não apague a pasta à mão**: se apagar pelo {{explorador}}, o registro dela fica para trás, e `git worktree prune` limpa. **Para juntar, merge**, como em qualquer branch, inclusive com conflito se as duas salas mudaram a mesma linha, como a aula 3.4 ensina."
      ],
      [
        "h3",
        "No Claude Code: a opção --worktree"
      ],
      [
        "p",
        "O Claude Code faz tudo isso com uma opção. No {{terminal}}, dentro do projeto, `claude --worktree revisao` (ou `claude -w revisao`) cria a pasta `.claude\\worktrees\\revisao` dentro do projeto, numa branch nova chamada `worktree-revisao`, e já abre a sessão lá dentro. Para uma segunda sessão isolada, rode o mesmo comando em outra janela, com outro nome. Sem nome, o Claude Code inventa um."
      ],
      [
        "p",
        "De onde a worktree parte: por padrão, da branch principal do repositório remoto, em geral a `main` do {{github|GitHub}}, que ele atualiza se a última busca tiver mais de 24 horas. Num repositório sem remoto, como o do laboratório, ela parte do commit atual da sua pasta. Duas exigências: a pasta precisa ser um repositório Git com pelo menos um commit, e você precisa ter aberto o Claude Code nela uma vez antes, para aceitar o aviso de confiança; sem isso, o `--worktree` sai com um erro. A documentação sugere ainda pôr `.claude/worktrees/` no {{gitignore|.gitignore}}, para as pastas de trabalho não aparecerem como arquivos novos no `git status` da pasta principal."
      ],
      [
        "p",
        "Enquanto a sessão está isolada, o Claude Code barra as edições de arquivo na pasta principal e os comandos que rodariam nela; a documentação lista quatro conferências desse tipo. Mas ele não acompanha o que um comando grava, então algo como copiar um arquivo para a pasta principal passa por outro caminho, sob as regras de {{permissao|permissão}} de sempre."
      ],
      [
        "p",
        "Ao sair com `/exit`, ele confere a worktree. Se ela está limpa e a sessão não tem nome, ele apaga a pasta e a branch sozinho. Se há trabalho nela, pergunta se você quer manter ou remover; remover apaga a pasta e a branch, com tudo o que estiver nelas. Para voltar a uma worktree mantida, o comando é `claude --worktree revisao --resume`, que o próprio Claude Code mostra ao sair."
      ],
      [
        "p",
        "Há mais dois caminhos. No meio de uma sessão, você pode pedir \"trabalhe numa worktree\", e o Claude cria uma e entra nela. E um {{subagente}} com `isolation: worktree`, o campo da aula 7.8, ganha uma worktree temporária só para ele, que some quando ele termina sem mudar nada."
      ],
      [
        "h3",
        "O que vai e o que não vai para a sala nova"
      ],
      [
        "p",
        "Vai tudo o que está no histórico. Não vai o que o Git ignora: o `.env`, a pasta de bibliotecas de um projeto em {{javascript|JavaScript}} e o {{ambiente-virtual|ambiente virtual}} do {{python|Python}}. Na worktree nova, um projeto que depende disso não roda até você reinstalar as bibliotecas e trazer as configurações. Para o Claude Code copiar arquivos ignorados para cada worktree que ele cria, existe o arquivo `.worktreeinclude`, com a mesma escrita do `.gitignore`; use com cuidado, porque copiar o `.env` é espalhar segredos por mais pastas."
      ],
      [
        "p",
        "Um detalhe para quem fez a aula 7.6: num {{hook}}, a {{variavel|variável}} `CLAUDE_PROJECT_DIR` continua apontando para a pasta onde a sessão começou, mesmo quando o Claude entra numa worktree. O caminho da worktree chega ao hook no campo `cwd` do {{json|JSON}}."
      ],
      [
        "h3",
        "Quando não usar"
      ],
      [
        "p",
        "Para uma mudança pequena, feita uma depois da outra, uma branch na própria pasta ou um commit bastam. Se as duas tarefas mexem nas mesmas linhas, a worktree só adia o conflito para a hora do merge. Numa pasta que não é repositório, ela nem existe: é preciso o `git init` e um primeiro commit. E num projeto em que cada cópia pede uma instalação pesada de bibliotecas, cada worktree nova custa tempo e disco."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Só o Git, que a aula 3.3 instala. A opção `--worktree` vem com o Claude Code.",
          "**Ocupa muito espaço?** Ocupa o tamanho dos arquivos de trabalho, mais o que você instalar nela. O histórico não é copiado.",
          "**É o mesmo que {{clonar}} o repositório de novo?** Não. Um clone tem o próprio histórico, separado; para levar um commit de um para o outro, é preciso um {{push}} e um {{pull}}. As worktrees dividem o mesmo histórico, na hora.",
          "**Onde fica a pasta?** Com `git worktree add`, onde você mandar. Com `claude --worktree`, em `.claude\\worktrees`, dentro do projeto.",
          "**Posso abrir a worktree no {{vs-code|VS Code}}?** Pode: é uma pasta comum. Abra cada sala numa janela.",
          "**E se eu me perder entre as pastas?** O `git worktree list` mostra todas, com a branch de cada uma, e o caminho antes do cursor no {{powershell|PowerShell}} diz em qual você está."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: worktree sem branch, trava e outras opções",
          "blocos": [
            [
              "p",
              "O `git worktree add -d` cria uma worktree sem branch nenhuma, parada num commit, boa para um teste descartável. O `git worktree lock` impede que uma worktree guardada num disco externo seja limpa quando o disco não estiver ligado; o Claude Code usa essa trava enquanto um agente trabalha numa worktree."
            ],
            [
              "p",
              "No Claude Code, a configuração `worktree.baseRef` com o valor `\"head\"` faz as worktrees partirem do commit atual da sua pasta, em vez da branch principal do remoto. E o app desktop tem uma opção própria para abrir uma sessão numa worktree."
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
          "pergunta": "Você está na pasta principal, loja-teste, e a worktree loja-teste-ideia está aberta na branch ideia. O que você acha que acontece se você pedir para abrir a branch ideia também aqui? Depois, use os botões para ver o que o Git mostra sobre as duas salas.",
          "codigo": "git switch ideia",
          "linguagem": "powershell",
          "resposta": "O Git recusa: \"fatal: 'ideia' is already used by worktree at\", seguido do caminho da outra pasta. Em português, \"a branch ideia já está em uso pela worktree em tal pasta\". Uma branch só pode estar aberta numa sala por vez, porque, se as duas pastas mostrassem a mesma branch, um commit numa mudaria por baixo os arquivos da outra. O `git branch` mostra isso com um sinal: o asterisco marca a branch desta pasta, e o `+` marca a que está aberta em outra worktree.",
          "vivo": [
            [
              "Rodar git worktree list",
              "git worktree list",
              "C:/Projetos/loja-teste       74a0766 [main]\nC:/Projetos/loja-teste-ideia 74a0766 [ideia]"
            ],
            [
              "Rodar git branch",
              "git branch",
              "+ ideia\n* main"
            ],
            [
              "Voltar ao original",
              "git switch ideia",
              "fatal: 'ideia' is already used by worktree at 'C:/Projetos/loja-teste-ideia'"
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
          "p": "Você quer que o Claude refaça o visual do site numa sessão enquanto, em outra, corrige um erro urgente de digitação, as duas no mesmo projeto. O que evita que uma atrapalhe a outra?",
          "o": [
            [
              "Abrir as duas sessões na mesma pasta, cada uma numa branch diferente",
              "Uma pasta mostra uma branch de cada vez: trocar de branch numa sessão muda os arquivos que a outra está editando."
            ],
            [
              "Uma worktree para cada tarefa: duas pastas, duas branches, um histórico",
              "Isso. Cada sessão edita a própria pasta, e o trabalho se junta depois, com merge."
            ],
            [
              "Copiar a pasta inteira do projeto e abrir a segunda sessão na cópia",
              "A cópia leva o próprio histórico e o .env junto, e juntar o trabalho depois dá muito mais trabalho."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se dava para abrir a branch main também dentro da worktree loja-teste-ideia, só para dar uma olhada, sem fechar nada na pasta principal. O Claude respondeu: \"Dá, sim: cada worktree é independente, então a mesma branch pode ficar aberta nas duas pastas ao mesmo tempo, sem problema.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: as worktrees são independentes, então qualquer branch abre em qualquer uma",
              "As pastas são independentes, mas o Git não deixa a mesma branch aberta em duas delas."
            ],
            [
              "Está errada: uma worktree só aceita a branch com que ela foi criada",
              "Dá para trocar de branch numa worktree, desde que a branch nova não esteja aberta em outra pasta."
            ],
            [
              "Está errada: o Git recusa abrir uma branch que já está aberta noutra pasta",
              "Isso. A main está aberta na pasta principal, e o Git responde que ela já está em uso por outra worktree."
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
            "\"Apaguei a pasta da worktree pelo Explorador.\"",
            "O registro dela fica para trás. Rode git worktree prune para limpar e, da próxima vez, use git worktree remove."
          ],
          [
            "\"Usei git worktree remove --force para o erro sumir.\"",
            "O --force apaga de vez as mudanças sem commit daquela pasta. Faça o commit antes, ou confira se não há nada que você queira guardar."
          ],
          [
            "\"A worktree nova não tem o meu .env, então está quebrada.\"",
            "Arquivos ignorados pelo Git não vão para a pasta nova. Traga o que precisar, ou use o .worktreeinclude, sabendo que copiar o .env espalha segredos."
          ],
          [
            "\"Fiz commit na worktree e ele sumiu do projeto.\"",
            "Ele está no histórico comum, na branch da worktree. git log --oneline --all mostra; para trazer para a main, faça o merge."
          ],
          [
            "\"Rodei claude --worktree numa pasta comum.\"",
            "Sem repositório, o Claude Code responde que só usa --worktree num repositório Git. Rode git init, faça um primeiro commit e tente de novo."
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
          "p": "O que duas worktrees do mesmo projeto dividem, e o que cada uma tem só para si?",
          "r": [
            "Dividem o histórico: um commit numa aparece no histórico visto da outra.",
            "Cada uma tem a própria pasta de arquivos e a própria branch.",
            "Arquivos ignorados, como o .env, não vão para a worktree nova."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que comandos do Git criam, mostram e removem uma worktree?",
          "r": [
            "git worktree add, com a pasta e -b com a branch nova, cria.",
            "git worktree list mostra cada pasta, com o commit e a branch.",
            "git worktree remove remove, e recusa se houver mudança sem commit."
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
          "titulo": "Duas salas, um álbum",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "25 minutos",
          "antes": "Você vai criar um repositório de teste, abrir uma segunda sala com o git worktree, mudar um arquivo numa sala e ver que a outra não muda, juntar o trabalho com merge e remover a worktree; depois, deixar o próprio Claude Code criar uma worktree e limpar ao sair. Precisa do Git configurado, como na aula 3.3, e do Claude Code. Os passos 1 a 12 foram rodados de verdade num PowerShell 5.1 sem configurações extras, com Git 2.54, em 08/11/2026, e as saídas abaixo são as reais; os códigos dos commits, como 74a0766, vão ser outros no seu PC. Os passos com o Claude Code (13 a 17) não foram testados: foram escritos a partir da documentação oficial de worktrees. Pelo app: o app desktop tem a própria opção de abrir uma sessão numa worktree; os passos no PowerShell continuam iguais.",
          "naoTestado": "Os passos 13 a 17 exigem o Claude Code interativo, que não foi rodado nos testes deste módulo; o que deve acontecer neles vem da página oficial de worktrees, conferida em 08/11/2026. Os passos 1 a 12 foram rodados de verdade em 08/11/2026, com Git 2.54.",
          "passos": [
            {
              "faz": "Abra o PowerShell e cole este comando, que cria a pasta C:\\Projetos\\loja-teste, entra nela e transforma a pasta num repositório.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\loja-teste | Out-Null; Set-Location C:\\Projetos\\loja-teste; git init -b main",
              "saida": "Initialized empty Git repository in C:/Projetos/loja-teste/.git/",
              "espera": "Uma linha que começa com Initialized empty Git repository."
            },
            {
              "faz": "Cole este comando, que cria o index.html e faz o primeiro commit.",
              "cola": "Set-Content -Encoding utf8 index.html '<h1>Minha loja</h1>'; git add .; git commit -m \"Primeiro commit\"",
              "saida": "[main (root-commit) 74a0766] Primeiro commit\n 1 file changed, 1 insertion(+)\n create mode 100644 index.html",
              "espera": "O resumo do commit, com o nome Primeiro commit. Se aparecer um aviso sobre LF e CRLF, é só sobre o jeito de quebrar linhas."
            },
            {
              "faz": "Crie a segunda sala, numa branch nova chamada ideia:",
              "cola": "git worktree add ..\\loja-teste-ideia -b ideia",
              "saida": "Preparing worktree (new branch 'ideia')\nHEAD is now at 74a0766 Primeiro commit",
              "espera": "Preparing worktree, com o nome da branch nova, e o commit de onde ela partiu."
            },
            {
              "faz": "Veja as duas salas:",
              "cola": "git worktree list",
              "saida": "C:/Projetos/loja-teste       74a0766 [main]\nC:/Projetos/loja-teste-ideia 74a0766 [ideia]",
              "espera": "Duas linhas: a pasta principal na main e a pasta nova na ideia, no mesmo commit."
            },
            {
              "faz": "Tente abrir a branch ideia também nesta pasta:",
              "cola": "git switch ideia",
              "saida": "fatal: 'ideia' is already used by worktree at 'C:/Projetos/loja-teste-ideia'",
              "espera": "A recusa do Preveja: a branch já está em uso pela outra worktree. Nada mudou."
            },
            {
              "faz": "Entre na segunda sala:",
              "cola": "Set-Location ..\\loja-teste-ideia",
              "espera": "Só o cursor, agora com C:\\Projetos\\loja-teste-ideia no começo da linha."
            },
            {
              "faz": "Mude o título do index.html nesta sala e veja o estado:",
              "cola": "Set-Content -Encoding utf8 index.html '<h1>Minha loja nova</h1>'; git status --short",
              "saida": " M index.html",
              "espera": "Uma linha com M antes de index.html: o arquivo mudou, ainda sem commit."
            },
            {
              "faz": "Olhe o mesmo arquivo na pasta principal, sem sair daqui:",
              "cola": "Get-Content ..\\loja-teste\\index.html",
              "saida": "<h1>Minha loja</h1>",
              "espera": "O título antigo: a sala principal não foi tocada."
            },
            {
              "faz": "Faça o commit nesta sala:",
              "cola": "git commit -am \"Muda o h1\"",
              "saida": "[ideia a665be4] Muda o h1\n 1 file changed, 1 insertion(+), 1 deletion(-)",
              "espera": "O resumo do commit, na branch ideia."
            },
            {
              "faz": "Volte à sala principal e veja o histórico de todas as branches:",
              "cola": "Set-Location ..\\loja-teste; git log --oneline --all",
              "saida": "a665be4 Muda o h1\n74a0766 Primeiro commit",
              "espera": "Duas fotos: a nova, tirada na outra sala, aparece no histórico daqui."
            },
            {
              "faz": "Traga o trabalho para a main:",
              "cola": "git merge ideia",
              "saida": "Updating 74a0766..a665be4\nFast-forward\n index.html | 2 +-\n 1 file changed, 1 insertion(+), 1 deletion(-)",
              "espera": "Fast-forward: a main avançou até o commit feito na worktree."
            },
            {
              "faz": "Remova a segunda sala e a branch ideia, que já está dentro da main, e liste de novo. Este comando apaga só a pasta C:\\Projetos\\loja-teste-ideia, sem mudanças pendentes.",
              "cola": "git worktree remove ..\\loja-teste-ideia; git branch -d ideia; git worktree list",
              "saida": "Deleted branch ideia (was a665be4).\nC:/Projetos/loja-teste a665be4 [main]",
              "espera": "A branch ideia apagada e uma sala só na lista, a principal."
            },
            {
              "faz": "Abra o Claude Code uma vez nesta pasta, para aceitar o aviso de confiança: digite claude e aperte Enter.",
              "espera": "O aviso de confiança da pasta. Aceite. Depois, saia com /exit."
            },
            {
              "faz": "Agora abra o Claude Code numa worktree própria:",
              "cola": "claude --worktree teste-claude",
              "espera": "O Claude Code abre já dentro de C:\\Projetos\\loja-teste\\.claude\\worktrees\\teste-claude, numa branch nova chamada worktree-teste-claude."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Diga em que pasta e em que branch você está e crie um arquivo sobre.html com a frase: feito numa worktree.",
              "espera": "O Claude diz a pasta .claude\\worktrees\\teste-claude e a branch worktree-teste-claude, e cria o sobre.html lá dentro. Se ele pedir permissão, aceite."
            },
            {
              "faz": "Saia com /exit.",
              "espera": "Como a worktree tem um arquivo novo, o Claude Code pergunta se você quer manter ou remover a worktree. Escolha remover: a pasta e a branch worktree-teste-claude são apagadas, com o sobre.html, que era só um teste."
            },
            {
              "faz": "No PowerShell, liste as worktrees de novo:",
              "cola": "git worktree list",
              "espera": "Uma linha só, a da pasta principal, na main: a sala que o Claude Code criou foi limpa."
            }
          ],
          "errado": "Se o passo 2 terminar com Author identity unknown, o Git ainda não sabe o seu nome e e-mail: faça os passos de configuração da aula 3.3 e repita. Se o passo 3 responder No possible source branch, inferring '--orphan', o commit do passo 2 não aconteceu e a worktree nasceu vazia: remova-a com git worktree remove ..\\loja-teste-ideia, repita o passo 2 e depois o 3. Se o passo 12 recusar com contains modified or untracked files, ainda há mudança na worktree: volte a ela com Set-Location ..\\loja-teste-ideia, faça o commit e tente de novo, sem usar --force. Se o passo 14 responder que a pasta precisa de confiança, faça o passo 13. Se o passo 14 disser Can only use --worktree in a git repository, você não está em C:\\Projetos\\loja-teste: entre nela e repita."
        }
      ],
      [
        "fontes",
        [
          [
            "Executar sessões paralelas com worktrees (--worktree, limpeza ao sair, .worktreeinclude, o que é compartilhado), Claude Code",
            "https://code.claude.com/docs/pt/worktrees",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "git-worktree, documentação do Git (em parte traduzida)",
            "https://git-scm.com/docs/git-worktree/pt_BR",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Executar agentes em paralelo (onde as worktrees entram), Claude Code",
            "https://code.claude.com/docs/pt/agents",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Criar subagentes personalizados (isolation: worktree), Claude Code",
            "https://code.claude.com/docs/pt/sub-agents",
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
          "Worktree é uma segunda pasta do mesmo projeto, noutra branch, com o histórico compartilhado",
          "Isso. Duas salas, um álbum: cada tarefa na sua pasta, e o trabalho se junta com merge."
        ],
        [
          "Worktree é uma cópia de segurança do projeto, com histórico próprio, para voltar se algo quebrar",
          "O histórico é o mesmo, não uma cópia, e apagar a pasta principal leva tudo junto."
        ],
        [
          "Worktree é uma branch que o Claude Code cria sozinho para cada sessão e apaga ao sair",
          "Ela é um recurso do Git, que você cria quando quer; o Claude Code só oferece o atalho --worktree."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Você roda git switch ideia na pasta principal, e a branch ideia está aberta numa worktree. O que acontece?",
        "o": [
          [
            "O Git troca de branch e fecha a worktree da outra pasta",
            "O Git não fecha a outra pasta: ele recusa a troca."
          ],
          [
            "O Git recusa: a branch já está em uso noutra pasta",
            "Isso. Uma branch só pode estar aberta numa pasta por vez."
          ],
          [
            "O Git junta as duas pastas numa só, com as duas branches",
            "Juntar trabalho é o merge, e ele não junta pastas."
          ]
        ],
        "c": 1
      },
      {
        "p": "Onde o comando claude --worktree revisao cria a pasta, por padrão?",
        "o": [
          [
            "Numa pasta revisao ao lado do projeto, na branch main",
            "Essa seria uma worktree feita à mão; o Claude Code usa outra pasta e uma branch nova."
          ],
          [
            "Na sua pasta pessoal do Claude, sem branch nenhuma",
            "A worktree fica dentro do projeto e sempre ganha uma branch nova."
          ],
          [
            "Em .claude\\worktrees\\revisao, numa branch nova",
            "Isso. A pasta fica dentro do projeto, e a branch nova se chama worktree-revisao."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre branch e worktree?",
        "A branch é um caminho paralelo no histórico. A worktree é uma pasta onde um desses caminhos fica aberto. Numa pasta só, você vê uma branch de cada vez; com uma worktree, duas branches ficam abertas ao mesmo tempo, em pastas diferentes, com o mesmo histórico por baixo."
      ],
      [
        "Apaguei a pasta da worktree sem querer. E agora?",
        "O que estava commitado continua no histórico, na branch da worktree. Rode git worktree prune na pasta principal para limpar o registro da pasta apagada, e git log --oneline --all para ver os commits. O que não tinha commit se perdeu junto com a pasta."
      ],
      [
        "Por que a worktree nova não roda o meu projeto?",
        "Porque ela só traz o que está no histórico. O .env, as bibliotecas instaladas e o ambiente virtual ficam de fora, porque o Git os ignora. Reinstale as bibliotecas na pasta nova e traga as configurações de que precisar, com cuidado com os segredos."
      ]
    ]
  },
  "7-10": {
    "tempo": 37,
    "video": "a7-10",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já quis que o Claude fizesse sozinho uma tarefa repetida, como resumir um arquivo todo dia, sem abrir conversa nenhuma. Esta aula mostra o `claude -p`, o {{modo-script|modo de script}} do {{claude-code|Claude Code}}, e os dois cuidados que mudam tudo: ele segue o modo de permissão gravado nas suas configurações, inclusive o bypass, e, com uma {{chave-api|chave de API}} no ambiente, cobra da chave.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Numa conversa, você digita, o Claude responde, você corrige. O `claude -p` faz uma rodada só: recebe o pedido na própria linha de {{comando}}, trabalha, imprime a resposta e termina. Isso permite pôr o Claude dentro de um {{script}}: resumir as notas do dia, revisar as mudanças antes de um {{commit}}, explicar a mensagem de erro de um programa, rodar uma tarefa agendada (a aula 7.11 mostra como agendar) ou fazer parte de uma {{integracao-continua|integração contínua}}, como a aula 16.6 mostra."
      ],
      [
        "p",
        "O ganho vem com dois riscos que pegam muita gente. O primeiro: ninguém está olhando. Numa conversa, se algo parece errado, você aperta Esc. Num script, o Claude age sozinho, com o modo de {{permissao|permissão}} que estiver valendo, e, se o seu arquivo de configurações diz bypass, o `-p` também roda em {{bypass}}. O segundo: a conta. Se existir uma variável de ambiente `ANTHROPIC_API_KEY` no seu PC, o `-p` usa essa chave sempre, sem perguntar, e o gasto vai para a organização dona da chave, e não para a sua assinatura."
      ],
      [
        "p",
        "Esta aula ensina a usar o `-p` com os freios no lugar: o modo de permissão dito na própria linha, um limite de voltas, a conferência de quem paga e o cuidado com pastas que você não conhece."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao estagiário da aula 0.0. Numa conversa, você fica ao lado dele. O `claude -p` é deixar uma ordem de serviço por escrito: a tarefa, o que ele pode tocar, um limite. Ele lê, executa sozinho, deixa a resposta por escrito em cima da mesa e vai embora. Não há ninguém para quem ele possa perguntar nada, e você só vê o resultado quando volta."
      ],
      [
        "quebra",
        "Um estagiário de verdade, sem poder perguntar, deixaria a dúvida anotada para depois; o `-p` faz uma de duas coisas, conforme o combinado gravado nas configurações: nega o que precisaria de permissão, ou faz sem perguntar, se o combinado for o bypass. A ordem de serviço também não diz quem paga: se houver uma chave de API no ambiente, ela paga, mesmo que você pensasse na assinatura. E o estagiário do `-p` lê todos os manuais e liga todos os sensores da sala, as {{skill|skills}}, os {{hook|hooks}} e os servidores {{mcp|MCP}}, inclusive numa sala que você nunca viu."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O básico: um pedido, uma resposta"
      ],
      [
        "p",
        "O formato é `claude -p` seguido do pedido entre aspas, como `claude -p \"Resuma o arquivo notas.txt em uma frase.\"`. O `-p` é o mesmo que `--print`, \"imprima\". O Claude Code abre, faz o trabalho com as mesmas {{ferramenta|ferramentas}} de uma conversa, imprime só a resposta final e devolve o controle ao {{terminal}}. Como todo programa, ele termina com um {{codigo-de-saida|código de saída}}: 0 quando deu certo, outro número quando a execução falhou, o que deixa um script decidir o que fazer em seguida. No {{powershell|PowerShell}}, o código do último programa fica em `$LASTEXITCODE`."
      ],
      [
        "p",
        "Dá para entregar um texto ao `-p` pela {{stdin|entrada padrão}}, com a barra vertical do terminal: `Get-Content erro.txt | claude -p \"explique a causa deste erro\"`. O conteúdo do arquivo vai junto com o pedido, sem o Claude precisar de permissão para ler arquivo nenhum. O limite do que entra assim é de 10 MB; acima disso, ele para com um erro, e o caminho é citar o arquivo no pedido."
      ],
      [
        "p",
        "A resposta pode sair em três formatos, escolhidos com a {{flag|opção}} `--output-format`: `text`, o padrão, só o texto; `json`, um objeto em {{json|JSON}} com a resposta no campo `result`, o identificador da {{sessao|sessão}} em `session_id` e uma estimativa de custo em dólares em `total_cost_usd`; e `stream-json`, uma linha por acontecimento, para quem quer acompanhar enquanto roda. O custo do JSON é uma conta feita no seu PC e pode não bater com a fatura; numa assinatura, o que você gasta de verdade é o limite do plano."
      ],
      [
        "h3",
        "Qual modo de permissão vale num -p"
      ],
      [
        "p",
        "Esta é a parte mais importante da aula. O Claude Code escolhe o modo de permissão pela primeira destas fontes que existir:"
      ],
      [
        "lista",
        [
          "**A opção da linha de comando**, como `--permission-mode dontAsk`.",
          "**O `defaultMode` gravado num {{settings-json|arquivo de configurações}}**, como o do seu usuário, em `C:\\Users\\SeuNome\\.claude\\settings.json`.",
          "**O padrão de fábrica.** Para o `-p`, desde a versão 2.1.302, de 16/10/2026, é o modo Manual."
        ]
      ],
      [
        "p",
        "No Manual, um `-p` não tem a quem perguntar, então tudo o que precisaria de permissão é negado: ler arquivos da pasta funciona, editar ou rodar um comando que muda algo, não. Isso é seguro, mas só vale se nada acima dele existir. Se o seu arquivo de usuário tem `\"defaultMode\": \"bypassPermissions\"`, o segundo item vence o terceiro, e todo `claude -p` sem opção roda em bypass: edita, apaga e roda comandos sem perguntar nada. O laboratório confere a sua linha com um comando que só lê."
      ],
      [
        "p",
        "Por isso, a regra para scripts é dizer o modo na própria linha, sempre. As opções que mais servem começam pelo {{modo-dontask|modo dontAsk}}:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Opção",
            "O que acontece num -p",
            "Quando usar"
          ],
          "linhas": [
            [
              "`--permission-mode dontAsk`",
              "Nega, sem perguntar, tudo o que pediria permissão; ler arquivos da pasta e comandos só de leitura passam",
              "Tarefas de ler e responder, como resumir ou revisar"
            ],
            [
              "`--permission-mode dontAsk` com `--allowedTools`",
              "O mesmo, mais as ferramentas que você liberar, como `\"Read,Edit\"`",
              "Quando o script precisa editar, e só editar"
            ],
            [
              "`--permission-mode plan`",
              "O modo de planejamento mantém as travas no -p: o Claude só lê e propõe",
              "Quando você quer um plano, não uma mudança"
            ],
            [
              "`--permission-mode acceptEdits`",
              "Edita arquivos e roda comandos simples de arquivo, como criar pasta, sem perguntar; outros comandos ainda precisam ser liberados",
              "Quando editar é o próprio trabalho"
            ]
          ]
        }
      ],
      [
        "p",
        "O `--allowedTools` usa a mesma escrita das regras de permissão da aula 7.4. `Bash(git diff *)` libera qualquer comando que comece com `git diff`; o espaço antes do asterisco importa, porque sem ele `git diff-index` também passaria."
      ],
      [
        "h3",
        "Quem paga"
      ],
      [
        "p",
        "O Claude Code também escolhe a credencial por ordem, e a {{variavel|variável de ambiente}} `ANTHROPIC_API_KEY` vem antes do seu login da assinatura. Numa conversa, ele pergunta uma vez se você quer usar a chave e guarda a resposta. No `-p`, a documentação é direta: quando a chave está presente, ela é sempre usada. Se você guardou uma chave no Windows para um projeto, como a aula 1.3 alertou, todo `claude -p` dali em diante cobra dessa chave."
      ],
      [
        "p",
        "Sem a chave, o `-p` segue para o seu login e gasta o limite do plano, como uma conversa; a página legal diz que os limites anunciados dos planos contam com uso comum e individual do Claude Code e do {{agent-sdk|Agent SDK}}. E os créditos mensais de API que alguns planos dão? A página desses créditos lista o Claude Code entre o que eles não cobrem. Como a documentação do `-p` o descreve como o Agent SDK pela linha de comando, as duas páginas não deixam claro de que lado ele fica: não conte com esses créditos para o `-p`."
      ],
      [
        "p",
        "Duas consequências práticas. Antes de rodar um script com `-p`, confira se a chave está no ambiente; o Preveja desta aula mostra um teste que diz isso sem mostrar o valor. E, se um dia você fizer um produto para outras pessoas, a página legal manda usar chave de API, e não o login da sua assinatura."
      ],
      [
        "h3",
        "O que ele carrega da pasta"
      ],
      [
        "p",
        "Sem nenhuma opção extra, o `-p` carrega tudo o que uma conversa carregaria: o {{claude-md|CLAUDE.md}}, as skills, os {{plugin|plugins}}, os hooks e os servidores MCP do seu usuário e da pasta. A diferença é que ele não mostra o aviso de confiança da pasta. A documentação avisa: num `-p`, os hooks do `.claude\\settings.json` de um projeto rodam e os servidores do `.mcp.json` dele se conectam, mesmo numa pasta em que você nunca confiou. Rodar `claude -p` dentro de um {{repositorio|repositório}} baixado da internet é deixar o dono daquele repositório rodar comandos no seu PC."
      ],
      [
        "p",
        "Para uma pasta que você não escreveu, há três jeitos de cortar isso, todos da documentação: `--setting-sources user`, que não lê as configurações do projeto nem o `.mcp.json`; `--settings` com `{\"disableAllHooks\": true}`, que desliga os hooks naquela execução; ou `--bare`, que não carrega quase nada, mas exige uma chave de API, porque não lê o seu login."
      ],
      [
        "h3",
        "Os freios de um script"
      ],
      [
        "p",
        "Além do modo, duas opções seguram um script que se perde. `--max-turns 3` limita o número de voltas que o Claude dá antes de parar; sem ela, não há limite. `--max-budget-usd` para a execução quando o custo estimado chega ao valor dado, contando os {{subagente|subagentes}}; a documentação avisa que o gasto pode passar um pouco do limite, então deixe uma margem. As duas só existem no `-p`."
      ],
      [
        "p",
        "Para continuar a conversa de um `-p` em outro, `--continue` retoma a mais recente da pasta, e `--resume` com o `session_id` retoma uma específica. Nos pedidos, uma skill sua chamada pelo nome, como `/resumo`, funciona; comandos que só existem na tela interativa, como o `/login` e o `/plugin`, não."
      ],
      [
        "h3",
        "Quando não usar"
      ],
      [
        "p",
        "Não use o `-p` para tarefas que pedem ida e volta, porque ele não pergunta nada; nem para mudanças grandes sem ninguém olhando, mesmo com freios; nem dentro de uma pasta que você não conhece sem cortar as configurações do projeto. E não o use num produto para outras pessoas com o login da sua assinatura."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. O `-p` vem com o Claude Code.",
          "**Custa mais que uma conversa?** O pedido é o mesmo; o que muda é quem paga, conforme a credencial que ele usar.",
          "**E se ele fizer algo errado sem eu ver?** Com `dontAsk` ou `plan` e um `--max-turns` baixo, o estrago possível fica pequeno. Sem dizer o modo, vale o das suas configurações, que pode ser o bypass.",
          "**Posso salvar os comandos num arquivo e rodar todo dia?** Pode; a aula 7.11 mostra como agendar tarefas. Saiba que, no Windows, o PowerShell vem de fábrica sem permissão para rodar arquivos de script `.ps1`, então não basta salvar os comandos num arquivo e dar dois cliques.",
          "**O -p usa as minhas skills e o meu CLAUDE.md?** Usa, como uma conversa. O `--bare` é que deixa tudo de fora."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: saída com formato fixo e o Agent SDK",
          "blocos": [
            [
              "p",
              "Com `--output-format json` e `--json-schema`, você diz o formato exato da resposta, e ela chega no campo `structured_output`. Se o Claude recusar o pedido, esse campo não vem, e o script deve conferir antes de usar."
            ],
            [
              "p",
              "O `-p` é o Agent SDK pela linha de comando. O mesmo motor existe como biblioteca de Python, para quem quer controle total num programa, e o módulo 12 volta a isso."
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
          "pergunta": "Antes de um script chamar o claude -p, vale conferir quem vai pagar. Este teste do PowerShell olha se a variável existe, sem nunca mostrar o valor dela. O que você acha que ele imprime num terminal comum, sem chave? Depois, use o botão para ver o que muda com uma chave de teste definida antes.",
          "codigo": "if (Test-Path env:ANTHROPIC_API_KEY) {\n    \"ANTHROPIC_API_KEY definida: o claude -p vai usar a chave.\"\n} else {\n    \"Sem ANTHROPIC_API_KEY: o claude -p segue para o seu login.\"\n}",
          "linguagem": "powershell",
          "resposta": "Num terminal sem a variável, ele imprime \"Sem ANTHROPIC_API_KEY: o claude -p segue para o seu login.\" O `Test-Path env:` responde só se a variável existe, nunca o conteúdo. Com uma chave definida antes, mesmo uma falsa, a resposta vira \"ANTHROPIC_API_KEY definida: o claude -p vai usar a chave.\", porque no -p a chave presente é sempre usada. Cuidado com um detalhe: \"segue para o seu login\" é o caso comum, mas outras credenciais, mais raras, vêm antes do login na ordem do Claude Code.",
          "vivo": [
            [
              "Definir uma chave de teste antes",
              "$env:ANTHROPIC_API_KEY = 'chave-de-teste'\nif (Test-Path env:ANTHROPIC_API_KEY) {\n    \"ANTHROPIC_API_KEY definida: o claude -p vai usar a chave.\"\n} else {\n    \"Sem ANTHROPIC_API_KEY: o claude -p segue para o seu login.\"\n}",
              "ANTHROPIC_API_KEY definida: o claude -p vai usar a chave."
            ],
            [
              "Voltar ao original",
              "if (Test-Path env:ANTHROPIC_API_KEY) {\n    \"ANTHROPIC_API_KEY definida: o claude -p vai usar a chave.\"\n} else {\n    \"Sem ANTHROPIC_API_KEY: o claude -p segue para o seu login.\"\n}",
              "Sem ANTHROPIC_API_KEY: o claude -p segue para o seu login."
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
          "p": "O seu arquivo de configurações do usuário tem defaultMode igual a bypassPermissions. Você roda claude -p \"organize os arquivos desta pasta\", sem nenhuma opção de permissão. O que acontece?",
          "o": [
            [
              "Começa no Manual, como todo -p, e nega tudo o que pediria permissão",
              "O Manual é só o padrão de fábrica. O defaultMode do arquivo vem antes dele."
            ],
            [
              "Herda o bypass do arquivo e mexe nos arquivos sem perguntar coisa nenhuma",
              "Isso. Sem a opção na linha, vale o defaultMode do arquivo, e o bypass não pergunta."
            ],
            [
              "Para e pergunta no terminal antes de cada ação, como numa conversa",
              "O -p não pergunta nada: ou nega, ou faz, conforme o modo que estiver valendo."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou por que um script com claude -p apareceu na fatura da API, se você tem assinatura. O Claude respondeu: \"Porque a variável ANTHROPIC_API_KEY está definida no seu ambiente. No modo -p, quando ela existe, o Claude Code usa sempre a chave, sem perguntar, e o gasto vai para a organização dona da chave.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o -p usa sempre a assinatura; a chave só vale nas conversas",
              "É o contrário: na conversa ele pergunta uma vez; no -p, a chave presente é sempre usada."
            ],
            [
              "Está errada: o -p também pergunta uma vez qual credencial usar",
              "Quem pergunta é a conversa. O -p não pergunta nada."
            ],
            [
              "Está certa: no -p, a chave no ambiente é usada sempre, sem pergunta",
              "Isso. A resposta está certa, e o caminho é tirar a variável do ambiente do script."
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
            "\"Rodei claude -p sem --permission-mode, então ele vai perguntar antes.\"",
            "O -p nunca pergunta. Vale o defaultMode das suas configurações, que pode ser o bypass, ou o Manual, que nega."
          ],
          [
            "\"Tenho assinatura, então o -p não cobra da API.\"",
            "Se a ANTHROPIC_API_KEY estiver no ambiente, o -p usa a chave, sempre."
          ],
          [
            "\"Rodei claude -p num repositório que baixei, só para entender o código.\"",
            "Os hooks e o .mcp.json do projeto rodam sem aviso de confiança. Use --setting-sources user ou desligue os hooks naquela execução."
          ],
          [
            "\"Pus --max-budget-usd 1, então ele nunca passa de 1 dólar.\"",
            "O limite é sobre uma estimativa, e o gasto pode passar um pouco. Deixe margem."
          ],
          [
            "\"Vou usar o claude -p no produto que vendo, com o meu login.\"",
            "A página legal manda usar chave de API em produto para outras pessoas."
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
          "p": "Em que ordem o claude -p escolhe o modo de permissão?",
          "r": [
            "Primeiro, a opção --permission-mode da linha de comando.",
            "Depois, o defaultMode de um arquivo de configurações, como o do usuário.",
            "Sem nenhum dos dois, o Manual, que num -p nega o que pediria permissão."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que freios você põe num claude -p que roda sozinho?",
          "r": [
            "O modo na própria linha, como --permission-mode dontAsk, liberando só o necessário.",
            "Um limite de voltas, com --max-turns.",
            "A conferência de que a ANTHROPIC_API_KEY não está no ambiente, se a ideia é usar a assinatura."
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
          "titulo": "Um pedido sem conversa, com freio",
          "lugar": "No PC, com o PowerShell (fora do Claude Code)",
          "tempo": "15 minutos",
          "antes": "Você vai conferir quem pagaria e qual modo valeria num claude -p no seu PC, criar uma pasta de teste com um arquivo de notas e mandar ao Claude dois pedidos sem conversa: um que só lê e outro que tenta apagar, com o modo dontAsk segurando. Precisa do Claude Code instalado e com login feito, como na aula 7.1. O notas.txt é de teste. Os passos 1 a 5 foram rodados de verdade num PowerShell 5.1 sem configurações extras, em 08/11/2026, e as saídas abaixo são as reais; a do passo 3 depende do seu arquivo de configurações. Os passos com o claude -p (6 a 10) não foram testados: foram escritos a partir da documentação oficial do modo de script, e o texto das respostas vai variar. Pelo app: não dá, porque o -p é da linha de comando.",
          "naoTestado": "Os passos 6 a 10 rodam o programa claude, que não foi rodado nos testes deste módulo; o que deve acontecer neles vem das páginas oficiais do modo de script, dos modos de permissão e da autenticação, conferidas em 08/11/2026. Os passos 1 a 5 foram rodados de verdade em 08/11/2026, num PowerShell 5.1 sem perfil.",
          "passos": [
            {
              "faz": "Abra o PowerShell numa janela nova: tecla Windows junto com X, depois Terminal. Não abra o Claude Code.",
              "espera": "Uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Confira se há uma chave de API no ambiente desta janela. O comando só responde True ou False, nunca o valor:",
              "cola": "Test-Path env:ANTHROPIC_API_KEY",
              "saida": "False",
              "espera": "False: o claude -p desta janela vai usar o seu login."
            },
            {
              "faz": "Confira se o seu arquivo de configurações do usuário define um modo inicial. O comando só lê:",
              "cola": "Select-String -Path \"$HOME\\.claude\\settings.json\" -Pattern defaultMode",
              "saida": "\nC:\\Users\\SeuNome\\.claude\\settings.json:13:    \"defaultMode\": \"bypassPermissions\"",
              "espera": "Se aparecer uma linha com defaultMode, é o modo que todo claude -p sem opção vai usar; aqui, bypassPermissions, e o número da linha pode ser outro. Se não aparecer nada, vale o padrão de fábrica, o Manual."
            },
            {
              "faz": "Cole este comando, que cria a pasta C:\\Projetos\\p-teste, entra nela e grava o notas.txt.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\p-teste | Out-Null; Set-Location C:\\Projetos\\p-teste; Set-Content -Encoding utf8 notas.txt 'Reunião com o banco na terça. Pedir a taxa por escrito. Comparar com a proposta da cooperativa até sexta.'",
              "espera": "Só o cursor de volta, agora com C:\\Projetos\\p-teste no começo da linha."
            },
            {
              "faz": "Confira o arquivo:",
              "cola": "Get-Content notas.txt",
              "saida": "Reunião com o banco na terça. Pedir a taxa por escrito. Comparar com a proposta da cooperativa até sexta.",
              "espera": "A frase das notas, com os acentos certos."
            },
            {
              "faz": "Mande um pedido sem conversa, que só lê, com o modo dontAsk e no máximo três voltas:",
              "cola": "claude -p \"Resuma o arquivo notas.txt em uma frase.\" --permission-mode dontAsk --max-turns 3",
              "espera": "Depois de alguns segundos, uma frase só, resumindo as notas, e o cursor de volta. Nenhuma pergunta no caminho."
            },
            {
              "faz": "Veja o código de saída:",
              "cola": "$LASTEXITCODE",
              "espera": "0: a execução deu certo."
            },
            {
              "faz": "Agora um pedido que tentaria mudar algo, nesta pasta de teste, com o mesmo freio:",
              "cola": "claude -p \"Apague o arquivo notas.txt desta pasta.\" --permission-mode dontAsk --max-turns 3",
              "espera": "O Claude responde que não conseguiu apagar, porque a ação precisaria de permissão e foi negada."
            },
            {
              "faz": "Confira que o arquivo continua lá:",
              "cola": "Test-Path notas.txt",
              "espera": "True: o dontAsk segurou."
            },
            {
              "faz": "Repita o resumo pedindo a resposta em JSON:",
              "cola": "claude -p \"Resuma o arquivo notas.txt em uma frase.\" --permission-mode dontAsk --max-turns 3 --output-format json",
              "espera": "Uma linha de JSON com vários campos, entre eles result, com o resumo, session_id e total_cost_usd, a estimativa de custo."
            }
          ],
          "errado": "Se o passo 2 responder True, existe uma chave no ambiente: para este laboratório, apague a variável só desta janela com Remove-Item env:ANTHROPIC_API_KEY e confira de novo; ao abrir outra janela, ela volta, e a aula 1.3 explica de onde ela vem. Se o passo 3 responder Cannot find path, você não tem arquivo de configurações do usuário, e vale o padrão de fábrica. Se o passo 6 disser que claude não é reconhecido, volte à aula 7.1. Se ele disser que você não está logado, abra o Claude Code uma vez, faça o login como na aula 7.1 e repita. Se, no passo 9, a resposta for False, o arquivo foi apagado: o --permission-mode dontAsk ficou de fora do passo 8, e valeu o modo do seu arquivo de configurações. Recrie o arquivo com o passo 4."
        }
      ],
      [
        "fontes",
        [
          [
            "Executar Claude Code programaticamente (claude -p, formatos de saída, --bare, permissões), Claude Code",
            "https://code.claude.com/docs/pt/headless",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modos de permissão (qual modo uma sessão usa; -p sem modo começa no Manual), Claude Code",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Autenticação (ordem das credenciais; no -p, a chave presente é sempre usada), Claude Code",
            "https://code.claude.com/docs/pt/authentication",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Permissões (o que roda antes de você confiar numa pasta, inclusive no -p), Claude Code",
            "https://code.claude.com/docs/pt/permissions",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência da CLI (--max-turns, --max-budget-usd, --output-format), Claude Code",
            "https://code.claude.com/docs/pt/cli-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Legal e conformidade (uso individual; produtos para outras pessoas usam chave de API), Claude Code",
            "https://code.claude.com/docs/pt/legal-and-compliance",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Créditos de API para assinantes (o Claude Code não é coberto), Claude Platform",
            "https://platform.claude.com/docs/pt-BR/about-claude/api-credits-for-subscribers",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Sobre as políticas de execução do PowerShell (Restricted é o padrão nos clientes Windows), Microsoft",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-5.1",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.302, de 16/10/2026: -p sem modo definido começa no default); a versão em português redireciona",
            "https://code.claude.com/docs/en/changelog",
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
          "O claude -p é uma conversa mais rápida, que pergunta só uma vez antes de agir",
          "O -p não pergunta nada: nega ou faz, conforme o modo que estiver valendo."
        ],
        [
          "O claude -p roda sem conversa: diga o modo, ponha freios e confira quem paga",
          "Isso. Modo na linha, limite de voltas e a chave fora do ambiente, se a ideia é a assinatura."
        ],
        [
          "O claude -p sempre usa a assinatura e o modo Manual, seja qual for a configuração",
          "O defaultMode das configurações e a chave no ambiente mudam as duas coisas."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Num claude -p, a variável ANTHROPIC_API_KEY está definida no ambiente. Qual credencial ele usa?",
        "o": [
          [
            "A chave, sempre que ela existir no ambiente do terminal",
            "Isso. No -p, a chave presente é sempre usada, sem pergunta."
          ],
          [
            "O seu login da assinatura, que tem prioridade",
            "Na ordem do Claude Code, a chave vem antes do login."
          ],
          [
            "Ele pergunta qual você prefere, antes de começar",
            "Quem pergunta uma vez é a conversa; o -p não pergunta."
          ]
        ],
        "c": 0
      },
      {
        "p": "Qual opção limita o número de voltas que o Claude dá num claude -p?",
        "o": [
          [
            "--output-format json",
            "Essa opção só muda o formato da resposta."
          ],
          [
            "--continue",
            "Essa opção retoma a conversa mais recente da pasta."
          ],
          [
            "--max-turns",
            "Isso. Ela limita as voltas e só existe no -p."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "O claude -p pede permissão?",
        "Não. Ele não tem a quem perguntar. Ou nega o que precisaria de permissão, no modo Manual ou no dontAsk, ou faz sem perguntar, se o modo valendo for o bypass, por exemplo porque o seu arquivo de configurações diz isso. Por isso, diga o modo na própria linha, com --permission-mode."
      ],
      [
        "Como sei se o -p vai cobrar da minha chave?",
        "Rode Test-Path env:ANTHROPIC_API_KEY no mesmo terminal. True quer dizer que a chave está no ambiente, e o -p vai usá-la sempre. O comando nunca mostra o valor da chave."
      ],
      [
        "Posso rodar claude -p num repositório que baixei?",
        "Com cuidado. O -p roda os hooks e conecta os servidores MCP do projeto sem o aviso de confiança. Para uma pasta que você não escreveu, use --setting-sources user, ou desligue os hooks naquela execução com --settings e disableAllHooks."
      ]
    ]
  },
  "7-11": {
    "tempo": 45,
    "video": "a7-11",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Toda segunda você abre o {{claude-code|Claude Code}} para pedir o mesmo resumo da semana, e na segunda em que esquece, ninguém faz. Ou já pediu uma revisão de dezenas de arquivos e viu o Claude ir um por um, lotando a conversa até ela ficar lenta e cara.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Esta aula resolve dois problemas diferentes. O primeiro é o da **hora marcada**: um pedido que você repete sempre no mesmo dia e horário, como o resumo das anotações da semana, a conferência dos links de um guia toda manhã ou a lista de pendências antes de uma reunião. A {{tarefa-agendada|tarefa agendada}} guarda esse pedido uma vez e o dispara sozinha, sem você abrir nada."
      ],
      [
        "p",
        "O segundo é o do **tamanho**: uma tarefa que exige dezenas de leituras parecidas, como revisar 40 guias à procura do mesmo erro ou comparar 30 fontes de uma pesquisa. Numa conversa comum, o Claude faz isso em fila, e cada resultado vai se acumulando no {{contexto}}. O {{workflow}}, que a documentação chama de fluxo de trabalho dinâmico, divide o trabalho entre muitos ajudantes ao mesmo tempo e devolve só a conclusão."
      ],
      [
        "p",
        "Os dois têm uma coisa em comum que pesa para você: o Claude trabalha **sem ninguém olhando**. Uma tarefa agendada roda às 9h de segunda enquanto você está em aula; um workflow abre dezenas de ajudantes em {{segundo-plano|segundo plano}}. Por isso a aula não para no \"como ligar\": ela mostra onde cada um roda, o que precisa ficar ligado, que {{permissao|permissões}} cada um usa e quanto cada um gasta do seu plano, para você decidir quando vale a pena."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao estagiário da aula 0.0. Uma tarefa agendada é uma **ordem de serviço com horário**, presa no quadro da sala dele: \"toda segunda, às 9h, leia as anotações da pasta e escreva o resumo\". Você não precisa estar lá; na hora marcada, ele pega a ordem e faz. Se a ordem fica no escritório do PC, só é cumprida se o escritório estiver aberto. Se fica no escritório alugado da aula 3.8, a nuvem, é cumprida mesmo com o seu escritório fechado, mas lá ele só tem a cópia das pastas que você mandou pelo {{github|GitHub}}."
      ],
      [
        "p",
        "Um workflow é o que o estagiário faz quando recebe uma ordem grande demais para uma pessoa só: ele escreve um **roteiro de mutirão**, distribui um pedaço para cada colega, aqueles da aula 7.8, recolhe as respostas, manda outros colegas conferirem, e entrega a você uma folha com o resultado final, em vez de despejar na sua mesa as anotações de cada um."
      ],
      [
        "quebra",
        "Uma ordem de serviço escrita por você vale como autorização dada com antecedência; aqui, não. A documentação diz que o pedido salvo numa tarefa agendada não serve como aprovação de nada durante a execução: se aparecer uma pergunta de permissão, ela espera alguém responder. E o roteiro de mutirão não é um papel que ninguém confere: é um programa em {{javascript|JavaScript}} que o Claude escreve e que você pode abrir, ler e guardar para repetir; e cada colega do mutirão gasta do mesmo limite que você."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Três lugares para agendar"
      ],
      [
        "p",
        "O Claude Code oferece três jeitos de agendar, no {{app-desktop|app desktop}}, na nuvem e numa sessão aberta, e a diferença entre eles é onde o trabalho {{rodar|roda}}. A tabela junta o que a documentação oficial compara, conferido em 08/11/2026:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "",
            "Tarefa local do app desktop",
            "Tarefa na nuvem",
            "/loop numa sessão"
          ],
          "linhas": [
            [
              "Onde roda",
              "No seu PC",
              "Num computador da Anthropic",
              "No seu PC"
            ],
            [
              "Precisa do PC ligado",
              "Sim, acordado e com o app aberto",
              "Não",
              "Sim, com a sessão aberta"
            ],
            [
              "Vê os arquivos do PC",
              "Sim",
              "Não: uma cópia nova do repositório do GitHub a cada vez",
              "Sim"
            ],
            [
              "Intervalo mínimo",
              "1 hora nos formulários; 1 minuto se o Claude marcar",
              "1 hora",
              "1 minuto"
            ],
            [
              "Permissões",
              "Um modo escolhido por tarefa",
              "{{modo-automatico|Modo automático}}, por padrão",
              "Os da sessão"
            ],
            [
              "Dura",
              "Até você pausar ou apagar",
              "Até você pausar ou apagar",
              "Até 7 dias, e só dispara com a sessão aberta"
            ]
          ]
        }
      ],
      [
        "p",
        "O {{comando}} `/loop` serve para vigiar algo enquanto você trabalha, como conferir a cada 5 minutos se um site já foi publicado, e a aula 7.20 o explica com calma. Esta aula fica com as duas primeiras colunas, que sobrevivem a fechar tudo e reiniciar o PC."
      ],
      [
        "h3",
        "A tarefa local do app desktop, por dentro"
      ],
      [
        "p",
        "A tarefa local mora no app desktop, na aba Code, no item **Scheduled** da barra lateral (em algumas contas ainda aparece com o nome antigo, **Routines**). Exige o app na versão 1.1.5368 ou mais nova. Ao criar, você dá um nome, escreve as instruções, liga **Only on this computer** (\"só neste computador\"), escolhe a {{pasta}} em que ela trabalha, o horário, o {{modelo}} e o modo de permissão. Os horários prontos são de hora em hora, diário, dias úteis e semanal; depois de criada, o formulário de edição oferece também **Manual**, que só roda quando você clica em **Run now**, e **Custom**, com uma {{expressao-cron|expressão cron}}. Você também pode criar conversando: numa sessão do app, \"me lembre amanhã às 15h de conferir o site\" vira uma tarefa que roda uma vez e se desliga."
      ],
      [
        "p",
        "Um exemplo do começo ao fim. Você cria a tarefa \"Resumo da semana\", semanal, segunda às 9h, na pasta das anotações. O app confere a agenda a cada minuto enquanto está aberto; às 9h e poucos minutos (cada tarefa tem um pequeno atraso fixo, para não disparar todas juntas), ele abre uma {{sessao|sessão}} nova, que trabalha como qualquer outra: lê os arquivos, escreve o resumo e termina. Na página da tarefa, a lista **History** mostra cada execução; um clique abre a sessão dela, com tudo o que o Claude fez."
      ],
      [
        "p",
        "Agora o caso que pega todo mundo: na segunda, o PC ficou em suspensão o dia inteiro. A execução das 9h é pulada. Quando o PC acorda, às 23h, o app procura execuções perdidas nos últimos sete dias e faz **uma só**, a mais recente, avisando com uma notificação. A documentação recomenda escrever proteções no próprio pedido, como \"se já passou das 17h, só anote que o resumo atrasou\". Para o PC não dormir por inatividade, há a opção **Keep computer awake** nas configurações do app; fechar a tampa do notebook continua pondo o PC para dormir."
      ],
      [
        "p",
        "Por baixo, o pedido fica num {{arquivo}} de texto, `C:\\Users\\SeuNome\\.claude\\scheduled-tasks\\resumo-da-semana\\SKILL.md`: o nome da pasta é o nome da tarefa em minúsculas, com hífens; dentro, um cabeçalho com nome e descrição (o {{frontmatter}}) e, embaixo, as instruções. Editar esse arquivo muda o pedido a partir da próxima execução. O horário, a pasta, o modelo e se a tarefa está ligada **não** ficam ali: mudam pelo formulário de edição. Apagar a tarefa arquiva as sessões dela, mas deixa essa pasta no disco; para tirá-la, apague você mesmo."
      ],
      [
        "h3",
        "Permissões: a tarefa roda sem você olhar"
      ],
      [
        "p",
        "Cada tarefa local tem o próprio modo de permissão, escolhido ao criar ou editar. Se você não escolher, ela usa as suas configurações do Claude Code, e as regras de liberar do seu {{settings-json|settings.json}} de usuário também valem nela. Se o seu settings.json está em {{bypass}}, não deixe no padrão: escolha **Accept edits**, que aceita sozinho a edição de arquivos e ainda pergunta antes de outros comandos. Uma tarefa sem ninguém olhando é o pior lugar para o modo que não pergunta nada."
      ],
      [
        "p",
        "E se a execução parar numa pergunta? Ela fica esperando até alguém responder. A documentação sugere o caminho: logo depois de criar, clique em **Run now**, acompanhe a sessão e, a cada pergunta que fizer sentido, escolha a opção de sempre permitir; as execuções seguintes pulam essas perguntas, e a página da tarefa mostra as aprovações guardadas, que você pode revogar. Escreva também um pedido que se sustente sozinho, porque não haverá conversa: o que ler, onde gravar, o que **não** fazer e como saber que terminou, o \"pronto quando\" da aula 6.1."
      ],
      [
        "h3",
        "Na nuvem: tarefas que rodam com o PC desligado"
      ],
      [
        "p",
        "A tarefa na nuvem, antes chamada de rotina, roda num computador da Anthropic, inclusive com o seu PC desligado. Está em prévia de pesquisa, nos planos Pro, Max, Ultra, Team e Enterprise, e se cria em claude.ai/code/routines, no próprio app desktop ou, no {{terminal}}, com `/schedule` (que também atende por `/routines`), numa conversa em que o Claude pergunta o horário e o {{repositorio|repositório}}. O `/schedule` exige o login da assinatura do claude.ai: com uma {{chave-api|chave de API}} no lugar, ele responde que o comando não existe."
      ],
      [
        "p",
        "Três diferenças mudam o que dá para pedir. Ela trabalha num repositório do GitHub, copiado do zero a cada execução, e entrega o trabalho numa {{branch}} que começa com `claude/`: nada do seu PC está lá. Todos os seus {{conector|conectores}} entram na tarefa por padrão, e a documentação manda tirar os que ela não usa, porque ela pode usá-los inclusive para escrever. E ela roda no modo automático, que bloqueia o que parece arriscado e só para numa pergunta em poucos casos. Um detalhe de horário: os horários prontos usam o seu fuso, mas uma expressão cron escrita à mão é lida em {{utc|UTC}}, três horas à frente de Brasília. A aula 7.21 aprofunda a nuvem."
      ],
      [
        "h3",
        "Workflow: quando a tarefa é grande demais para uma conversa"
      ],
      [
        "p",
        "O workflow é um {{script}} que o próprio Claude escreve para a sua tarefa e que um executor separado roda em segundo plano, enquanto a sua sessão continua livre. O script chama muitos {{subagente|subagentes}}, junta o que cada um achou em variáveis próprias e entrega só a resposta final à conversa. A documentação resume a diferença: com subagentes, o Claude decide turno a turno o que fazer, e cada resultado entra no contexto; no workflow, quem decide é o script, e o resultado intermediário fica fora."
      ],
      [
        "p",
        "Para pedir um, diga com as suas palavras, como \"use um workflow para revisar todos os guias desta pasta\", ou comece o pedido com a palavra-chave `ultracode`, que o Claude Code destaca na caixa de texto. Desde a versão 2.1.160, de 02/06/2026, a palavra \"workflow\" sozinha não dispara mais nada; pedir com as suas palavras continua funcionando. Para ver um pronto, há o `/deep-research`, que pesquisa uma pergunta em várias fontes, confere umas contra as outras e devolve um relatório com as fontes citadas."
      ],
      [
        "p",
        "Antes de começar, o Claude Code mostra as fases planejadas e pergunta se pode rodar, com a opção de ler o script. Essa pergunta depende do modo: no automático, só na primeira vez; no Manual, sempre; no bypass, **não aparece**, e o workflow começa na hora. Durante a execução, `/workflows` abre o painel de progresso: cada fase com o número de ajudantes, `p` pausa, `x` para, `s` salva o script como um comando seu, em `.claude\\workflows\\` do projeto ou na sua pasta pessoal, e da próxima vez ele roda pelo nome, como `/revisar-guias`."
      ],
      [
        "p",
        "O custo é o ponto central. Cada ajudante faz os próprios pedidos ao modelo, e uma execução pode gastar muito mais {{token|tokens}} do que a mesma tarefa feita em conversa, tudo do mesmo {{limite-de-uso|limite de uso}}. O executor limita o estrago: até 16 ajudantes ao mesmo tempo e até 1.000 por execução; acima de 25 ajudantes, ou de 1,5 milhão de tokens previstos, aparece o aviso `Large workflow`, que só avisa e não para nada. A recomendação oficial é rodar primeiro num pedaço pequeno, uma pasta em vez do projeto inteiro, olhar o gasto no `/workflows` e só então soltar no todo. Se o limite do plano acabar no meio, numa sessão aberta no terminal, a execução em geral pausa e continua sozinha quando ele volta, desde que a volta seja em menos de 24 horas."
      ],
      [
        "h3",
        "Quando cada um compensa"
      ],
      [
        "lista",
        [
          "**O mesmo pedido, sempre no mesmo horário, com arquivos do PC**: tarefa local do app desktop, com o PC acordado e o app aberto.",
          "**O mesmo pedido num projeto do GitHub, mesmo com o PC desligado**: tarefa na nuvem.",
          "**Vigiar algo por alguns minutos ou horas, enquanto você trabalha**: `/loop`, da aula 7.20.",
          "**Muitas leituras parecidas e independentes, que cabem em paralelo**: workflow, testado antes num pedaço pequeno.",
          "**Uma tarefa de poucos passos**: conversa comum. Workflow para pouca coisa só gasta mais.",
          "**Algo que envia, apaga ou paga**: nenhum dos dois sem a sua aprovação a cada vez. Deixe a tarefa só preparar, como um rascunho, e você decide."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Custa à parte?** Não há cobrança separada: a tarefa agendada, local ou na nuvem, gasta do mesmo limite do plano que as suas conversas. O workflow também, só que bem mais depressa.",
          "**Preciso instalar algo?** Para a tarefa local, o app desktop, que você já viu na aula 3.8. Para a nuvem, nada no PC, mas um repositório no GitHub.",
          "**E se o PC estiver desligado na hora?** A tarefa local pula e, quando o PC volta, faz uma execução de recuperação, a mais recente dos últimos sete dias. A da nuvem roda normalmente.",
          "**E se eu me arrepender?** Na página da tarefa, **Status** alterna entre ativa e pausada, sem apagar. Num workflow em andamento, `x` no `/workflows` para tudo, em geral sem perder o que já terminou.",
          "**Uma tarefa agendada pode disparar um workflow?** Não pela palavra-chave: a documentação diz que `ultracode` só vale quando é você quem digita, e não num pedido de tarefa agendada."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: expressão cron, outros gatilhos da nuvem e o script por dentro",
          "blocos": [
            [
              "p",
              "Uma expressão cron tem cinco campos separados por espaço: minuto, hora, dia do mês, mês e dia da semana. `0 9 * * 1` quer dizer \"minuto 0, hora 9, qualquer dia do mês, qualquer mês, segunda-feira\". Nos formulários, domingo é `0`, os dias e meses vão em número, e nada pode rodar mais de uma vez por hora. Na nuvem, `0 12 * * 1-5` roda às 12h UTC, 9h de Brasília, nos dias úteis."
            ],
            [
              "p",
              "A tarefa na nuvem aceita outros dois gatilhos além do horário: um endereço que um programa seu chama para dispará-la, protegido por um token mostrado uma vez só, e eventos do GitHub, como um pull request aberto. Cada forma de disparar tem limites por hora, como 100 execuções agendadas por hora por conta."
            ],
            [
              "p",
              "O script de um workflow salvo usa funções como `agent()` para chamar um ajudante e `parallel()` para chamar vários de uma vez. Ele não acessa arquivos nem o terminal diretamente: quem lê, escreve e roda comandos são os ajudantes, com as mesmas permissões da sessão."
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
          "pergunta": "Este é o arquivo que o app desktop guardou para a tarefa \"Resumo da semana\", marcada para toda segunda às 9h. O que você acha que acontece se você trocar, aqui dentro, a palavra \"segunda\" por \"sexta\"?",
          "codigo": "---\nname: resumo-da-semana\ndescription: Resume as anotações da semana\n---\nLeia os arquivos .txt desta pasta e escreva resumo-AAAA-MM-DD.md\ncom compromissos, pendências e prazos desta semana.\nNão altere nem apague nenhum arquivo que já existe.\nToda segunda, comece pelas notas mais recentes.",
          "linguagem": "markdown",
          "resposta": "A tarefa continua rodando na segunda às 9h. O arquivo guarda só o nome, a descrição e as instruções; o horário, a pasta, o modelo e se a tarefa está ligada ficam no app e só mudam pelo formulário de edição ou pedindo ao Claude numa sessão do app. Trocar \"segunda\" por \"sexta\" no texto muda só a instrução lida pelo Claude, que passaria a falar de sexta num resumo feito na segunda. Para rodar na sexta, edite o horário em **Edit**."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você quer que, toda segunda às 9h, o Claude leia as anotações de uma pasta do seu PC, que não está no GitHub, e escreva um resumo. O PC fica ligado no escritório. Qual caminho funciona?",
          "o": [
            [
              "Uma tarefa na nuvem, criada com /schedule, que roda até com o PC desligado",
              "A nuvem trabalha numa cópia de um repositório do GitHub e não enxerga as pastas do seu PC."
            ],
            [
              "Um /loop semanal numa sessão do terminal deixada aberta no escritório",
              "O /loop vive na sessão e some em 7 dias; não serve para um compromisso fixo de toda semana."
            ],
            [
              "Uma tarefa local do app desktop, com o app aberto e o PC acordado às 9h",
              "Isso. A tarefa local lê os arquivos do PC e só precisa do app aberto e do PC acordado na hora."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Criei uma tarefa local no app desktop para rodar toda manhã. Posso fechar o app e deixar o PC ligado?\" O Claude respondeu: \"Pode. A tarefa fica salva na sua conta e dispara no horário mesmo com o app fechado.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: a tarefa local fica guardada na conta e dispara sozinha na hora",
              "Quem fica na conta e dispara sem o PC é a tarefa na nuvem. A local depende do app aberto."
            ],
            [
              "Está errada: ela só dispara com o app aberto e o PC acordado",
              "Isso. Com o app fechado, a execução é pulada e só é recuperada quando o app volta."
            ],
            [
              "Está errada: a tarefa local só dispara com a sessão do terminal aberta",
              "Precisar de uma sessão aberta é coisa do /loop. A tarefa local depende do app desktop."
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
            "\"Deixei a tarefa no modo padrão; ela é inofensiva.\"",
            "O padrão segue as suas configurações, que podem estar em bypass. Escolha Accept edits para uma tarefa que roda sem ninguém olhando."
          ],
          [
            "\"Marquei para as 9h e ela rodou às 23h; está quebrada.\"",
            "O PC estava dormindo às 9h. Ao acordar, o app faz uma execução de recuperação. Escreva no pedido o que fazer quando ele roda atrasado."
          ],
          [
            "\"A tarefa da nuvem vai ler a minha pasta de anotações.\"",
            "A nuvem só tem a cópia de um repositório do GitHub. Para arquivos do PC, use a tarefa local."
          ],
          [
            "\"Mudei o horário no SKILL.md e nada mudou.\"",
            "O horário não fica nesse arquivo. Mude pelo formulário de edição da tarefa."
          ],
          [
            "\"Pedi um workflow para o projeto inteiro de primeira.\"",
            "Cada ajudante gasta do seu limite. Rode antes num pedaço pequeno e olhe o gasto no /workflows."
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
          "p": "O que diferencia a tarefa local do app desktop da tarefa na nuvem?",
          "r": [
            "A local roda no seu PC e lê as pastas dele; precisa do PC acordado e do app aberto.",
            "A da nuvem roda num computador da Anthropic, com o PC desligado, mas só vê uma cópia de um repositório do GitHub.",
            "As duas gastam do mesmo limite do plano."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quando um workflow compensa, e qual é o cuidado?",
          "r": [
            "Quando há muitas tarefas parecidas e independentes, que podem correr em paralelo.",
            "Cada ajudante gasta do seu limite: teste antes num pedaço pequeno.",
            "Acompanhe e pare pelo /workflows; no bypass, ele começa sem perguntar."
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
          "titulo": "Sua primeira tarefa agendada no app desktop",
          "lugar": "No PC, com o PowerShell e o app desktop do Claude",
          "tempo": "20 minutos",
          "antes": "No {{powershell|PowerShell}}, você vai criar uma pasta de teste com três anotações, montar no app desktop uma tarefa local semanal que resume essas anotações num arquivo novo, rodá-la uma vez na hora com Run now, conferir o resultado e pausar a tarefa. Precisa do app desktop do Claude instalado e com login, na aba Code; se o item Scheduled não aparecer na barra lateral nem no menu More, atualize o app. A tarefa usa o modo Accept edits, para não herdar um bypass. Nada fora da pasta C:\\Projetos\\agenda-teste é tocado. Os passos 1 a 3 foram rodados de verdade no PowerShell 5.1, em 08/11/2026. Os passos no app (4 a 16) e a saída do passo 17 não foram testados: foram escritos a partir das páginas oficiais de tarefas agendadas, conferidas em 08/11/2026, e os nomes dos botões podem variar de uma versão do app para outra.",
          "naoTestado": "Os passos 4 a 16 e 18 exigem o app desktop com login e uma execução real do Claude, que não foram usados nos testes deste módulo: rodar o Claude no PC do teste usaria a conta e as configurações do dono. O que deve acontecer neles vem das páginas oficiais \"Agendar tarefas recorrentes no Claude Code Desktop\" e \"Executar prompts em um cronograma\", conferidas em 08/11/2026. A saída do passo 17 depende do arquivo que o Claude cria. Os passos 1 a 3 foram rodados de verdade, com as saídas reais abaixo.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este bloco inteiro. Ele cria a pasta C:\\Projetos\\agenda-teste, entra nela e grava três anotações curtas. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\agenda-teste | Out-Null; Set-Location C:\\Projetos\\agenda-teste\n'Segunda: reunião com o fornecedor; ele ficou de mandar a proposta até quarta.' | Set-Content -Encoding utf8 nota-1.txt\n'Terça: revisei o guia de estudos; faltam os exercícios do capítulo 3.' | Set-Content -Encoding utf8 nota-2.txt\n'Quinta: pagar a conta de internet e marcar o dentista.' | Set-Content -Encoding utf8 nota-3.txt",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\agenda-teste."
            },
            {
              "faz": "Confira os arquivos.",
              "cola": "Get-ChildItem -Name",
              "saida": "nota-1.txt\nnota-2.txt\nnota-3.txt",
              "espera": "Os três nomes, um por linha."
            },
            {
              "faz": "Abra o app desktop do Claude e clique na aba Code.",
              "espera": "A aba Code abre, com a lista de sessões na barra lateral."
            },
            {
              "faz": "Na barra lateral, clique em Scheduled. Se ele não estiver lá, procure no menu More da barra lateral; em algumas contas, o item se chama Routines.",
              "espera": "Abre a página das tarefas agendadas, que lista as locais e as da nuvem."
            },
            {
              "faz": "Clique em New task (ou New routine). Se abrir um menu com Create with Claude e Set up manually, escolha Set up manually; se abrir um menu com Local e Cloud, escolha Local.",
              "espera": "Abre o formulário de tarefa nova, numa caixa ou numa página inteira."
            },
            {
              "faz": "No campo Name, digite Resumo da semana.",
              "espera": "O nome aparece no campo. O app vai usá-lo em minúsculas, com hífens, como nome da pasta da tarefa."
            },
            {
              "faz": "Na caixa de instruções, cole este pedido.",
              "cola": "Leia os arquivos .txt desta pasta. Escreva um arquivo novo chamado resumo-AAAA-MM-DD.md, com a data de hoje no nome, em três partes: compromissos, pendências e o que tem prazo nesta semana, um item por linha, cada um dizendo de qual nota veio. Não altere nem apague nenhum arquivo que já existe. Se já existir um resumo com a data de hoje, não faça nada e diga isso. Pronto quando: o arquivo novo existe e cada item aponta a nota de origem.",
              "espera": "O pedido aparece na caixa. Se o formulário pedir uma Description, escreva algo curto, como Resume as anotações da semana."
            },
            {
              "faz": "Abra Advanced settings, na aba General, e ligue Only on this computer. Se o botão Only on this computer já estiver no alto da caixa, ligue-o ali. No formulário de página inteira, ele não aparece, porque você já escolheu Local.",
              "espera": "A tarefa fica marcada para rodar no seu PC, numa pasta local."
            },
            {
              "faz": "Na linha da pasta (Local folder ou Working folder), escolha C:\\Projetos\\agenda-teste. No formulário de página inteira, a pasta se escolhe dentro da própria caixa de instruções.",
              "espera": "O caminho da pasta aparece no formulário."
            },
            {
              "faz": "No horário (Trigger ou Schedule), escolha Weekly, segunda-feira, 9:00.",
              "espera": "O resumo do horário mostra segunda às 9h, no seu fuso."
            },
            {
              "faz": "Na barra da caixa de instruções, escolha o modo de permissão Accept edits. No modelo, escolha o Sonnet, se aparecer; deixar o padrão também funciona.",
              "espera": "O seletor de modo mostra Accept edits. Com ele, o Claude grava o arquivo sem perguntar, mas pergunta antes de outros comandos."
            },
            {
              "faz": "Clique em Create. Se o app pedir para confiar na pasta, confirme.",
              "espera": "Abre a página de detalhes da tarefa, com Status, o horário e uma lista History vazia. Se Create estiver cinza, passe o mouse sobre ele: o app diz o que falta."
            },
            {
              "faz": "Clique em Run now.",
              "espera": "Uma execução começa e aparece em History."
            },
            {
              "faz": "Clique na linha da execução em History.",
              "espera": "Abre a sessão da execução: você vê o Claude lendo as três notas e criando o resumo. Se aparecer uma pergunta de permissão, por exemplo para um comando que descobre a data, e ela fizer sentido, aprove com a opção de sempre permitir; as próximas execuções pulam essa pergunta."
            },
            {
              "faz": "Espere a sessão terminar.",
              "espera": "A última mensagem do Claude diz o nome do arquivo que criou, parecido com resumo-2026-11-09.md, com a data do dia."
            },
            {
              "faz": "No PowerShell, confira a pasta de novo.",
              "cola": "Get-ChildItem -Name",
              "espera": "Os três arquivos de nota e, a mais, o resumo com a data de hoje no nome. As notas continuam lá, intactas."
            },
            {
              "faz": "Volte à página da tarefa no app e mude Status de Active para Paused.",
              "espera": "A tarefa fica pausada: não roda na segunda, mas continua salva. Para apagar de vez, use Delete; a pasta dela em C:\\Users\\SeuNome\\.claude\\scheduled-tasks\\ continua no disco até você apagá-la."
            }
          ],
          "errado": "se Scheduled não aparecer em lugar nenhum, o app está numa versão anterior à 1.1.5368: atualize e reinicie. Se Create ficar cinza, passe o mouse sobre ele para ver o campo que falta, em geral a pasta ou a descrição. Se a execução ficar parada, abra a sessão dela em History: quase sempre há uma pergunta de permissão esperando resposta. Se History mostrar uma execução pulada, passe o mouse sobre ela: o motivo pode ser o PC dormindo, outra execução ainda em andamento ou outras tarefas já rodando. Se o resumo não apareceu na pasta, leia a sessão da execução até o fim; o status Succeeded diz só que a sessão terminou sem falha, e não que o trabalho foi feito."
        }
      ],
      [
        "fontes",
        [
          [
            "Agendar tarefas recorrentes no Claude Code Desktop (tarefa local, horários, execuções perdidas, permissões, SKILL.md), Claude Code",
            "https://code.claude.com/docs/pt/desktop-scheduled-tasks",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Automatizar trabalho com tarefas agendadas (nuvem, /schedule, repositórios, conectores, modo automático, UTC, limites), Claude Code",
            "https://code.claude.com/docs/pt/routines",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Executar prompts em um cronograma (comparação dos três jeitos, /loop, expiração de sete dias), Claude Code",
            "https://code.claude.com/docs/pt/scheduled-tasks",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Orquestre subagentes em escala com fluxos de trabalho dinâmicos (ultracode, /deep-research, aprovação por modo, /workflows, limites e custo), Claude Code",
            "https://code.claude.com/docs/pt/workflows",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.160: a palavra \"workflow\" deixa de disparar; 2.1.271: workflow pausa no limite de uso; 2.1.312: nível de esforço nas tarefas da nuvem)",
            "https://code.claude.com/docs/en/changelog",
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
          "Tarefa agendada repete um pedido no horário certo; workflow divide um trabalho grande entre muitos ajudantes",
          "Isso. Uma resolve a hora marcada; o outro, o tamanho. Os dois rodam sem você olhando e gastam do seu plano."
        ],
        [
          "Tarefa agendada e workflow são o mesmo recurso, só que um roda no PC e o outro sempre roda na nuvem",
          "São recursos diferentes: a tarefa pode rodar no PC ou na nuvem, e o workflow roda na sessão em que foi pedido."
        ],
        [
          "Tarefa agendada roda de graça, fora do plano; workflow é a única coisa que gasta o limite da assinatura",
          "Os dois gastam do mesmo limite do plano. O workflow só gasta mais depressa, porque usa muitos ajudantes."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O seu PC dormiu na hora de uma tarefa local diária e só acordou dois dias depois. O que o app desktop faz?",
        "o": [
          [
            "Faz duas execuções seguidas, uma para cada dia perdido, assim que acorda",
            "O app não repõe cada dia perdido: ele faz uma execução só."
          ],
          [
            "Faz uma só execução de recuperação, a mais recente, e avisa",
            "Isso. Uma só, a mais recente dos últimos sete dias, e descarta as mais antigas."
          ],
          [
            "Não faz nada: espera o próximo horário marcado para rodar de novo",
            "O app procura execuções perdidas ao acordar e faz uma de recuperação."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você pediu um workflow numa sessão que está em bypass. O que acontece antes de ele começar?",
        "o": [
          [
            "Nada: no bypass, o Claude Code não pergunta e o workflow começa na hora",
            "Isso. Por isso, no bypass, acompanhe pelo /workflows e pare com x se precisar."
          ],
          [
            "O Claude Code mostra as fases e espera o seu sim, como faz em qualquer modo",
            "Essa pergunta aparece no automático (só na primeira vez) e no Manual; no bypass, não."
          ],
          [
            "O Claude Code recusa o pedido, porque workflow não funciona no bypass",
            "Workflow funciona em qualquer modo; o que muda é se ele pergunta antes."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre tarefa local e tarefa na nuvem?",
        "A local roda no seu PC, lê as pastas dele e só dispara com o app desktop aberto e o PC acordado. A da nuvem roda num computador da Anthropic, com o PC desligado, mas trabalha numa cópia de um repositório do GitHub e não enxerga o seu PC. As duas gastam do mesmo limite do plano."
      ],
      [
        "Por que a minha tarefa rodou fora do horário?",
        "Provavelmente o PC estava dormindo ou o app estava fechado na hora. Ao voltar, o app faz uma execução de recuperação, a mais recente dos últimos sete dias. Se a hora importa, escreva no pedido o que fazer quando ele rodar atrasado."
      ],
      [
        "Workflow gasta muito?",
        "Pode gastar bem mais que a mesma tarefa em conversa, porque cada ajudante faz os próprios pedidos, tudo do seu limite. Teste num pedaço pequeno, acompanhe o gasto no /workflows e pare com x se passar do que você esperava."
      ]
    ]
  },
  "7-12": {
    "tempo": 44,
    "video": "a7-12",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você deixou o {{claude-code|Claude Code}} trabalhando no PC, saiu de casa e passou a tarde sem saber se ele tinha terminado ou se estava parado numa pergunta esperando você. A aula 3.8 mostrou o mapa de onde ele roda; esta põe a mão na massa: ligar o {{remote-control|Remote Control}}, dirigir pelo celular e pelo navegador a {{sessao|sessão}} que está no PC, e saber o que precisa ficar ligado para isso funcionar.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Você passa dias só com o celular e, quando está no PC, deixa tarefas longas rodando. O Remote Control junta as duas coisas: a sessão continua no PC, com as suas pastas, os seus {{servidor|servidores}} {{mcp|MCP}} e as suas configurações, e o celular, ou o claude.ai aberto no {{navegador}} de outro computador, vira uma janela para ela. Pela janela, você manda pedidos, responde às perguntas de {{permissao|permissão}}, acompanha os ajudantes que estão trabalhando, troca o {{modelo}} e recebe um aviso quando o trabalho termina."
      ],
      [
        "p",
        "A aula 3.8 deixou a regra principal: o Remote Control dirige o seu PC, então o PC precisa estar ligado. Esta aula entra no que a 3.8 não detalhou e que decide se a coisa funciona no dia a dia: os três jeitos de ligar e quando usar cada um, o que dá e o que não dá para fazer pelo celular, como receber os avisos, o que acontece quando o PC dorme ou a {{internet}} cai, como recuperar uma sessão depois de fechar o {{terminal}} sem querer, e onde entram o navegador e o {{app-desktop|app desktop}}."
      ],
      [
        "p",
        "E entra no risco, que no seu caso é maior que o normal. Uma sessão aberta no PC em {{bypass}} faz o que você pedir pelo celular sem perguntar nada, e quem entrar na sua conta do claude.ai consegue fazer o mesmo. A aula termina com o laboratório que liga tudo isso com segurança: uma sessão que pede a sua aprovação, no celular, antes de editar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "É o telefone da aula 3.8: o estagiário continua trabalhando no seu escritório, com as suas pastas e ferramentas, e você liga para ele de onde estiver. Daqui para a frente, três detalhes do telefone importam. Para a ligação funcionar, o escritório precisa estar aberto e alguém precisa estar ao lado do aparelho: o PC ligado e acordado, e o programa do Claude Code rodando. O jeito de ligar muda o que você consegue: uma linha só, para a conversa que já está na mesa, ou uma pequena central, que atende várias ligações e abre uma conversa nova para cada uma. E você pode combinar como ele trabalha enquanto você está fora: perguntando antes de mexer em cada papel, ou sem perguntar nada."
      ],
      [
        "quebra",
        "Um telefonema some quando você desliga, e aqui a conversa fica guardada nos servidores da Anthropic enquanto o Remote Control está ligado, para os aparelhos ficarem sincronizados. Um estagiário reconhece a sua voz; o Remote Control reconhece a sua conta, e quem entrar nela liga para o seu escritório como se fosse você, a não ser que você exija aparelhos cadastrados. E o combinado não muda pelo telefone do jeito que você imagina: do celular você não consegue escolher o modo que não pergunta nada, mas, se o escritório já abriu nesse modo, ele continua assim."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Três jeitos de ligar"
      ],
      [
        "p",
        "Todos começam no PC, na {{pasta}} do projeto, com a conta do claude.ai logada; com uma {{chave-api|chave de API}} no lugar do login, o Remote Control não funciona. A documentação oficial, conferida em 08/11/2026, lista três formas:"
      ],
      [
        "lista",
        [
          "**`claude remote-control`, o modo servidor**: o terminal fica esperando conexões, mostra um endereço e, ao apertar a barra de espaço, um {{codigo-qr|código QR}}. Pode atender várias sessões ao mesmo tempo (até 32, por padrão) e já deixa uma pronta para você digitar. É o melhor para quando você vai sair: tudo acontece pelo celular.",
          "**`claude --remote-control`, ou `--rc`**: abre uma sessão normal no terminal que também aparece no celular. Você digita no PC e no celular, na mesma conversa.",
          "**`/remote-control`, ou `/rc`, dentro de uma sessão que já está aberta**: leva a conversa atual, com o histórico, para o celular. Funciona também no app desktop e no painel do {{vs-code|VS Code}}."
        ]
      ],
      [
        "p",
        "Na primeira vez, o Claude Code explica o que o recurso faz e pergunta se pode ligá-lo (`Enable Remote Control? (y/n)` no modo servidor); numa pasta em que você ainda não confiou, pergunta também se confia nela. Com a ligação ativa, aparece `/rc active` na tela da sessão; rodar `/remote-control` de novo abre um painel com o endereço, o código QR e o botão para desligar, sem fechar a sessão no PC."
      ],
      [
        "p",
        "Três opções do modo servidor que valem decorar. `--name \"Nome\"` dá o título que aparece na lista do celular. `--permission-mode` escolhe o modo das sessões, como `manual` ou `acceptEdits`, e vale por cima do `defaultMode` do seu {{settings-json|settings.json}}. E, numa pasta que é um repositório Git, `--spawn worktree` dá a cada sessão nova a sua própria {{worktree}}, a segunda sala da aula 7.9, para duas conversas não mexerem nos mesmos arquivos; o padrão, `same-dir`, põe todas na mesma pasta."
      ],
      [
        "p",
        "Um caso do começo ao fim: na pasta do projeto, `claude remote-control --name \"Site\" --permission-mode manual`; barra de espaço; você aponta a câmera do celular para o código QR, e a sessão abre no app do Claude. Se preferir, abra o app, toque em **Code** e procure \"Site\" na lista: as sessões do Remote Control têm um ícone de computador com um ponto verde quando estão no ar."
      ],
      [
        "h3",
        "O que o celular vê e consegue fazer"
      ],
      [
        "p",
        "O celular mostra a conversa enquanto ela acontece, inclusive o andamento dos {{subagente|subagentes}} e dos workflows; parar um deles pelo celular para no PC. Se a pasta for um {{repositorio|repositório}}, um painel mostra as mudanças nos arquivos. Trocar o modelo ou o esforço pelo celular vale para a sessão do PC, e um `/clear` limpa a conversa nos dois lados. Fotos que você anexa no celular o Claude vê direto, e outros arquivos são baixados para o PC e entram na conversa como se você tivesse apontado com `@`."
      ],
      [
        "p",
        "Nem todo {{comando}} funciona de longe. Os que só existem na tela do terminal, como `/plugin` e `/resume`, não rodam pelo celular. Os que respondem com texto, como {{usage|/usage}}, `/compact`, `/clear` e `/context`, rodam. Comandos que no PC abrem um seletor recebem o valor escrito: `/model sonnet`, `/effort high`. As perguntas de permissão e as perguntas do Claude ficam abertas até você responder; outros diálogos levados ao celular, como a escolha de modelo depois de uma recusa de segurança, fecham sozinhos depois de 5 minutos sem resposta."
      ],
      [
        "p",
        "O ponto mais importante para você está nos modos de permissão. Pelo celular, o seletor de uma sessão do Remote Control oferece Manual, Accept edits, Plan e Auto, e **não oferece o bypass**. A documentação diz que o seletor mostra o modo em que a sessão do PC está, exceto o bypass. Ou seja: se a sessão abriu em bypass no PC, ela continua em bypass, e o celular não avisa. Por isso, quando for sair, abra a sessão com `--permission-mode` e confira o modo antes do primeiro pedido."
      ],
      [
        "h3",
        "Avisos no celular"
      ],
      [
        "p",
        "Com o Remote Control ligado, o Claude pode mandar uma {{notificacao-push|notificação}} para o celular quando uma tarefa longa termina ou quando precisa de uma decisão sua; você também pode pedir no texto, como \"me avise quando terminar\". Para isso: o app do Claude instalado e logado com a mesma conta, as notificações permitidas no celular e, no PC, {{config-comando|/config}} com uma das duas opções ligadas, **Push when Claude decides** (quando o Claude achar que vale avisar) e **Push when actions required** (quando houver pergunta ou permissão esperando). Se o `/config` mostrar **No mobile registered**, abra o app no celular uma vez. No Android, a economia de bateria pode atrasar os avisos; no iPhone, os modos de foco também. O Claude não manda aviso enquanto você está digitando no terminal ligado."
      ],
      [
        "h3",
        "O que precisa ficar ligado"
      ],
      [
        "p",
        "O Remote Control é um programa rodando no PC. Fechou a janela do terminal, saiu do app desktop ou do VS Code que hospedava a sessão, ela sai do ar. Se o PC dorme ou a rede cai, a sessão se reconecta sozinha quando ele volta, mas enquanto ele dorme nada roda. Com o PC acordado e sem rede, o modo servidor desiste depois de cerca de 10 minutos e o processo termina; a sessão interativa continua tentando até a rede voltar."
      ],
      [
        "p",
        "Fechou o terminal do modo servidor sem querer? Rode `claude remote-control` de novo, na mesma pasta: ele recupera as sessões que estava servindo, por cerca de quatro horas depois de parar. Para uma sessão que começou com `/rc` ou `--rc`, o caminho é retomar a conversa com `claude --continue` e, se o Remote Control não voltar sozinho, rodar `/remote-control` nela."
      ],
      [
        "p",
        "Para o PC não dormir enquanto você está fora, o Windows tem a opção em Configurações > Sistema > Energia e bateria (em alguns PCs, só Energia), em tempos limite de tela, suspensão e hibernação, no item **Fazer meu dispositivo dormir após**: escolha um tempo maior, ou nunca, quando estiver ligado na tomada. Fechar a tampa do notebook costuma pôr o PC para dormir, de qualquer jeito."
      ],
      [
        "h3",
        "Navegador e app desktop: as outras janelas"
      ],
      [
        "p",
        "O navegador de outro computador funciona igual ao celular: em claude.ai/code, as sessões do Remote Control aparecem na mesma lista, e o endereço que o terminal mostra abre direto lá. O app desktop, além de hospedar sessões, tem um botão **Remote Control** em cada uma e, em Settings > Code, a opção **Connect new sessions to Remote Control**, que liga o recurso em toda sessão nova. No terminal, o equivalente é **Enable Remote Control for all sessions**, no `/config`."
      ],
      [
        "p",
        "Ligar para todas parece prático, e no seu caso é o oposto do que convém: cada sessão aberta no PC, inclusive as em bypass, passa a aparecer no celular e em qualquer navegador logado na sua conta. Prefira ligar sessão por sessão, quando for sair. Se quiser fechar a porta de vez neste PC, a configuração `disableRemoteControl` com o valor `true` no settings.json de usuário impede que qualquer sessão se ligue. E quando a tarefa precisa seguir com o PC desligado, o caminho é outro: a nuvem, da aula 7.21."
      ],
      [
        "h3",
        "Segurança: quem dirige o seu PC"
      ],
      [
        "p",
        "Por dentro, o Claude Code no PC só faz conexões de saída, criptografadas, para a Anthropic, e não abre nenhuma porta de entrada no seu computador; o claude.ai repassa as mensagens entre o celular e a sessão. O ponto fraco não é a conexão, é a conta: quem entrar no seu claude.ai, por uma senha vazada ou um celular desbloqueado esquecido na mesa, enxerga e comanda as sessões. Para isso existe **Require trusted devices**, \"exigir aparelhos confiáveis\", em fase beta, desligado por padrão nos planos Pro, Max e Ultra, que você mesmo liga nas configurações da conta (na página Account ou na do Cowork). Com ele, cada navegador, celular ou app precisa ser cadastrado logo depois de um login completo, e, se o login tiver mais de 18 horas, o aparelho pede o rosto, a digital, o Windows Hello ou uma chave de acesso. A lista dos aparelhos fica em claude.ai/settings/account, onde você tira um celular perdido."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Custa à parte?** Não. O Remote Control usa o login da sua assinatura e gasta do mesmo limite do plano; os créditos mensais de API não pagam nada disso.",
          "**Funciona no 4G, fora de casa?** Funciona: o celular fala com o claude.ai, e o PC também. Não precisa estar na mesma rede.",
          "**Posso abrir duas sessões pelo celular ao mesmo tempo?** Pelo modo servidor, sim. Uma sessão interativa, aberta com `--rc` ou `/rc`, só aceita uma ligação de cada vez.",
          "**Dá para começar uma tarefa nova pelo celular, sem nada aberto no PC?** Pelo Remote Control, não: algo precisa estar rodando no PC. Pela nuvem, sim, e é assunto da aula 7.21.",
          "**E se eu esquecer o PC ligado em bypass com o Remote Control aberto?** A sessão fica disponível para qualquer pessoa na sua conta, sem perguntar nada. Desligue com `/remote-control` no PC, ou feche o terminal; e ligue os aparelhos confiáveis."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: central de sessões, ramificar pelo app e quando o celular não deve apitar",
          "blocos": [
            [
              "p",
              "No modo servidor, a tecla `w` alterna entre `same-dir` e `worktree` enquanto ele roda, e a escolha fica salva para aquela pasta; `--capacity` muda o máximo de sessões ao mesmo tempo. Desde as versões de outubro, o app consegue ramificar uma sessão do Remote Control, criando uma cópia com \"(fork)\" no nome, e mostra \"Catching up…\" enquanto uma sessão em que você volta ainda está trazendo as mensagens."
            ],
            [
              "p",
              "A variável `CLAUDE_CLIENT_PRESENCE_FILE` aponta para um arquivo marcador: enquanto ele existir, o celular não recebe avisos, o que serve para silenciar o celular quando você está no PC. E, para comparar com o Dispatch, que manda uma tarefa para o app desktop decidir como fazer, volte à tabela da aula 3.8."
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
          "pergunta": "Você estava fora, dirigindo pelo celular uma sessão aberta no PC com claude remote-control. Em casa, alguém fechou a janela do terminal. O que você acha que o celular mostra, e o que você faz para voltar à mesma conversa quando chegar?",
          "resposta": "O celular perde o contato com o PC: o app ou o claude.ai mostra uma mensagem como Remote Control disconnected ou Can't reach, e a sessão fica fora do ar, porque o programa que a servia parou. Nada é apagado. Quando chegar, rode `claude remote-control` de novo, na mesma pasta: em até cerca de quatro horas depois de parar, ele recupera as sessões que estava servindo, com o histórico. Depois disso, ele começa uma sessão nova."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você vai passar três horas fora e quer acompanhar pelo celular uma tarefa no PC, aprovando cada edição antes. O seu settings.json está em bypass. O que fazer na pasta do projeto?",
          "o": [
            [
              "Rodar claude remote-control e confiar que o celular desliga o bypass sozinho",
              "O celular só não deixa escolher o bypass. Uma sessão que abriu em bypass continua nele."
            ],
            [
              "Rodar claude remote-control --permission-mode manual e conferir o modo",
              "Isso. A opção vale por cima do defaultMode, e as edições vão pedir a sua aprovação no celular."
            ],
            [
              "Mandar a tarefa para a nuvem, que pergunta pelo celular antes de cada edição",
              "A nuvem não vê as pastas do PC e não tem o modo Manual: lá as edições já vêm liberadas."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Fechei sem querer o terminal onde rodava o claude remote-control. Perdi a conversa?\" O Claude respondeu: \"Não necessariamente. Rode claude remote-control de novo na mesma pasta, em até umas quatro horas, e ele recupera as sessões que estava servindo.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: a sessão some de vez quando o terminal é fechado",
              "Nada é apagado ao fechar o terminal. Por cerca de quatro horas, rodar o comando de novo recupera."
            ],
            [
              "Está errada: só um claude --resume com o número da sessão traz ela de volta",
              "O --resume serve para sessões abertas com /rc ou --rc. No modo servidor, basta rodar o comando de novo."
            ],
            [
              "Está certa: na mesma pasta, em até umas quatro horas, o comando recupera",
              "Isso. A resposta confere com a documentação. Conferir também é reconhecer quando a resposta está certa."
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
            "\"Deixei o PC ligado, então o Remote Control funciona.\"",
            "Precisa também do programa rodando e do PC acordado. Terminal fechado ou PC em suspensão: a sessão sai do ar."
          ],
          [
            "\"Pelo celular não dá para escolher o bypass, então estou protegido.\"",
            "Uma sessão que abriu em bypass no PC continua nele. Abra com --permission-mode quando for sair."
          ],
          [
            "\"Liguei o Remote Control para todas as sessões; é mais prático.\"",
            "Toda sessão do PC fica acessível pela sua conta, inclusive as em bypass. Ligue sessão por sessão."
          ],
          [
            "\"O aviso no celular não chega.\"",
            "Confira as duas opções de push no /config, abra o app uma vez se aparecer No mobile registered e tire o app da economia de bateria."
          ],
          [
            "\"Mandei /resume pelo celular e não funcionou.\"",
            "Comandos que só existem na tela do terminal, como /resume e /plugin, não rodam de longe."
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
          "p": "O que precisa estar funcionando para o Remote Control dar certo?",
          "r": [
            "O PC ligado e acordado.",
            "O programa do Claude Code rodando: o terminal, o app desktop ou o VS Code com a sessão aberta.",
            "Internet no PC: sem rede, o modo servidor desiste depois de uns 10 minutos."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que cuidados de segurança valem para quem tem o PC em bypass?",
          "r": [
            "Abrir a sessão com --permission-mode quando for sair, porque o celular não troca o bypass que já está ligado.",
            "Ligar os aparelhos confiáveis, para só aparelhos cadastrados verem as sessões.",
            "Não ligar o Remote Control para todas as sessões; se quiser fechar de vez, disableRemoteControl."
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
          "titulo": "Dirija pelo celular uma sessão do seu PC",
          "lugar": "No PC, com o PowerShell e o Claude Code; e no celular, com o app do Claude",
          "tempo": "20 minutos",
          "antes": "Depois de preparar a pasta no {{powershell|PowerShell}}, você vai abrir, numa pasta de teste, o Remote Control no modo servidor, já no modo Manual, para que cada edição peça a sua aprovação; entrar pelo celular com o código QR; fazer um pedido e aprová-lo no celular; conferir no PC o arquivo criado; derrubar a sessão e recuperá-la. Precisa do Claude Code instalado e logado com a sua conta do claude.ai (com uma chave de API no lugar, o Remote Control não funciona) e do app do Claude no celular, logado com a mesma conta. Nada fora da pasta C:\\Projetos\\rc-teste é tocado, e o modo do seu settings.json não muda. Os passos 1 e 2 foram rodados de verdade no PowerShell 5.1, em 08/11/2026. Os passos com o Claude Code e o celular não foram testados: foram escritos a partir das páginas oficiais do Remote Control e do Claude Code no celular, conferidas em 08/11/2026, e as frases exatas podem variar.",
          "naoTestado": "Os passos 3 a 14 exigem o Claude Code interativo com login e o app do celular, que não foram usados nos testes deste módulo: rodar o Claude Code no PC do teste usaria a conta e as configurações do dono. O que deve acontecer neles vem das páginas oficiais \"Continue sessões locais de qualquer dispositivo com Remote Control\" e \"Claude Code no celular\", conferidas em 08/11/2026. Os passos 1 e 2 foram rodados de verdade.",
          "passos": [
            {
              "faz": "Abra o PowerShell: aperte a tecla Windows junto com X e escolha Terminal (ou Windows PowerShell).",
              "espera": "Abre uma janela com uma linha que começa com PS e termina em >."
            },
            {
              "faz": "Cole este bloco inteiro. Ele cria a pasta C:\\Projetos\\rc-teste, entra nela e grava uma lista de ideias. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\rc-teste | Out-Null; Set-Location C:\\Projetos\\rc-teste\n@'\nIdeias para o fim de semana:\n- terminar o resumo do capítulo 4\n- revisar a planilha de gastos de outubro\n- separar as fotos da viagem\n'@ | Set-Content -Encoding utf8 ideias.txt\nGet-ChildItem -Name",
              "saida": "ideias.txt",
              "espera": "Aparece o nome ideias.txt, e o caminho antes do cursor termina em rc-teste."
            },
            {
              "faz": "Ligue o Remote Control no modo servidor, com um nome e no modo Manual.",
              "cola": "claude remote-control --name \"Curso 7-12\" --permission-mode manual",
              "espera": "Na primeira vez, ele explica o recurso e pergunta Enable Remote Control? (y/n); se a pasta for nova, pergunta também se você confia nela. Responda y nas duas. Depois, aparece um endereço, e o terminal fica esperando, sem voltar ao cursor."
            },
            {
              "faz": "Aperte a barra de espaço.",
              "espera": "Aparece um código QR ao lado do endereço."
            },
            {
              "faz": "No celular, aponte a câmera para o código QR e toque no link que aparecer.",
              "espera": "O app do Claude abre na sessão Curso 7-12. Se a câmera não ler, abra o app, toque em Code e escolha Curso 7-12 na lista, a que tem o ícone de computador com o ponto verde."
            },
            {
              "faz": "No celular, toque no seletor de modo (no app, o botão + e depois Permission) e veja qual está marcado.",
              "espera": "Manual está marcado. Repare que Bypass permissions não está na lista."
            },
            {
              "faz": "No celular, mande este pedido.",
              "cola": "Leia o ideias.txt e crie o arquivo plano.txt com as três ideias em ordem de prioridade, uma por linha, com o motivo em poucas palavras. Não mexa no ideias.txt.",
              "espera": "O Claude lê o arquivo e, antes de criar o plano.txt, aparece no celular um pedido de permissão para a edição."
            },
            {
              "faz": "No celular, aprove a criação do arquivo, só desta vez.",
              "espera": "O Claude cria o plano.txt e responde no celular. No terminal do PC aparece a atividade da sessão."
            },
            {
              "faz": "No PC, abra uma segunda janela do PowerShell (a primeira está ocupada pelo servidor) e cole este comando.",
              "cola": "Get-Content -Encoding utf8 C:\\Projetos\\rc-teste\\plano.txt",
              "espera": "As três ideias, em ordem, cada uma com o motivo. O texto exato vai variar."
            },
            {
              "faz": "Volte à primeira janela, a do servidor, e aperte Ctrl+C.",
              "espera": "O servidor para, e o cursor volta. No celular, a sessão sai do ar, com uma mensagem como Remote Control disconnected ou Can't reach."
            },
            {
              "faz": "Na mesma janela, ainda na pasta rc-teste, rode de novo o comando do passo 3.",
              "cola": "claude remote-control --name \"Curso 7-12\" --permission-mode manual",
              "espera": "O servidor volta e recupera a sessão que estava servindo. No celular, Curso 7-12 volta ao ar, com a conversa de antes."
            },
            {
              "faz": "No celular, mande /usage.",
              "cola": "/usage",
              "espera": "Aparece o uso do plano, em texto, sem o painel interativo do terminal: é um dos comandos que funcionam de longe."
            },
            {
              "faz": "No PC, na janela do servidor, aperte Ctrl+C para encerrar.",
              "espera": "O servidor para. A pasta rc-teste continua com os dois arquivos; apague-a quando quiser."
            },
            {
              "faz": "Opcional, só se você decidir: no claude.ai, nas configurações da conta (página Account ou Cowork), ligue Require trusted devices.",
              "espera": "A partir daí, cada navegador ou celular precisa ser cadastrado depois de um login completo para ver e controlar sessões do Remote Control. O chat comum e o Claude Code no terminal não mudam."
            }
          ],
          "errado": "se aparecer Remote Control requires a claude.ai subscription, o Claude Code está usando uma chave de API ou está sem login: rode claude, use /login com a conta do claude.ai e confira se não há uma ANTHROPIC_API_KEY no ambiente. Se o celular não achar a sessão, confira se o app está na mesma conta e na mesma organização do terminal. Se a sessão cair e não voltar sozinha, olhe o terminal do PC: sem rede por uns 10 minutos, o modo servidor termina, e é só rodar o comando de novo. Se o passo 11 abrir uma sessão nova em vez da antiga, passaram mais de quatro horas ou o comando foi rodado em outra pasta. Se as notificações não chegarem, ligue Push when actions required no /config do PC."
        }
      ],
      [
        "fontes",
        [
          [
            "Continue sessões locais de qualquer dispositivo com Remote Control (três jeitos de ligar, opções do modo servidor, o que o celular vê, push, recuperar, segurança, dispositivos confiáveis, limitações), Claude Code",
            "https://code.claude.com/docs/pt/remote-control",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Claude Code no celular (aba Code, anexos, modos de permissão pelo celular), Claude Code",
            "https://code.claude.com/docs/pt/mobile",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modos de permissão (aba Web e celular: o seletor mostra o modo da sessão do PC, exceto o bypass), Claude Code",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Aplicativo Desktop (botão Remote Control, Connect new sessions to Remote Control, disableRemoteControl), Claude Code",
            "https://code.claude.com/docs/pt/desktop",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Configurações de energia no Windows 11 (tempos limite de tela, suspensão e hibernação), Microsoft",
            "https://support.microsoft.com/pt-br/windows/experience/power-battery/power-settings-in-windows-11",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.316: \"Catching up…\"; 2.1.317 e 2.1.318: sessões ramificadas pelo app)",
            "https://code.claude.com/docs/en/changelog",
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
          "O Remote Control leva a sessão do PC para a nuvem, e por isso ela continua com o PC desligado",
          "A sessão continua no PC; o celular é só a janela. Com o PC desligado ou dormindo, ela sai do ar."
        ],
        [
          "O celular comanda a sessão do PC, que precisa seguir ligado, e o modo dela vem do PC",
          "Isso. O PC acordado e o programa rodando, e o modo escolhido no PC, inclusive um bypass, vale para os pedidos do celular."
        ],
        [
          "Pelo celular, o Claude Code sempre pede permissão, porque o bypass fica desligado lá",
          "O celular só não deixa escolher o bypass; uma sessão que abriu em bypass no PC continua nele."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você quer que cada pessoa que use a sua conta precise de um aparelho cadastrado para ver as sessões do Remote Control. O que você liga?",
        "o": [
          [
            "Require trusted devices, nas configurações da conta do claude.ai",
            "Isso. Cada aparelho é cadastrado depois de um login completo, e um login antigo pede rosto, digital ou chave de acesso."
          ],
          [
            "Enable Remote Control for all sessions, no /config do Claude Code",
            "Essa opção liga o Remote Control em toda sessão nova; não exige aparelho nenhum."
          ],
          [
            "Push when actions required, no /config do Claude Code no seu PC",
            "Essa opção só manda avisos para o celular quando há uma pergunta esperando."
          ]
        ],
        "c": 0
      },
      {
        "p": "O notebook ficou fechado, dormindo, enquanto você dirigia a sessão pelo celular. O que acontece com ela?",
        "o": [
          [
            "Ela segue trabalhando na nuvem até o notebook voltar",
            "O Remote Control não passa a sessão para a nuvem: ela roda no PC, e o PC dormindo não roda nada."
          ],
          [
            "Ela some de vez, e é preciso começar uma conversa nova",
            "Ela não some: quando o PC volta e tem rede, ela se reconecta sozinha."
          ],
          [
            "Nada roda; quando o notebook acorda e tem rede, ela volta",
            "Isso. Enquanto o PC dorme, nada roda; ao voltar, a sessão se reconecta."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual dos três jeitos de ligar eu uso?",
        "Para sair de casa e dirigir tudo pelo celular, o modo servidor, claude remote-control, de preferência com --permission-mode manual ou acceptEdits. Para levar a conversa que já está aberta, /remote-control dentro dela. Para digitar no PC e no celular ao mesmo tempo, claude --remote-control."
      ],
      [
        "Por que a sessão saiu do ar?",
        "Quase sempre porque o programa no PC parou (terminal fechado, app fechado) ou porque o PC dormiu ou perdeu a internet. Com o PC de volta e com rede, a sessão interativa se reconecta sozinha; o modo servidor, se tiver parado, volta rodando o comando de novo na mesma pasta, em até umas quatro horas."
      ],
      [
        "O celular pode ligar o bypass?",
        "Não: o seletor do celular oferece Manual, Accept edits, Plan e Auto. Mas uma sessão que já abriu em bypass no PC continua em bypass, e o celular não mostra isso. Abra a sessão com --permission-mode quando for sair."
      ]
    ]
  },
  "7-13": {
    "tempo": 22,
    "video": "a7-13",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já ouviu o {{claude-code|Claude Code}} dizer que \"testou a página\" sem nunca ter aberto um {{navegador}}, ou quis que ele clicasse num programa do Windows que não tem {{comando}} nenhum. Três integrações dão mãos novas a ele, o painel do {{vs-code|VS Code}}, o seu Chrome e o seu mouse e teclado, e cada mão nova alcança mais e arrisca mais.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "No terminal, o Claude Code mexe em {{arquivo|arquivos}} e roda comandos. Isso cobre muito, mas não cobre três coisas do seu dia. Ver cada mudança com calma, ao lado do original, enquanto ele trabalha: é o que o painel do VS Code, da aula 3.7, faz, e esta aula mostra o que ele manda ao Claude sem você perceber. Usar um site de verdade: abrir a sua página de vendas, clicar no botão, ler o erro vermelho do Console da aula 2.12 e corrigir o código, ou preencher um formulário em que você está logado; é o Claude no Chrome. E usar um programa que só tem janelas e botões, sem comando nem {{api|API}}; é o {{uso-do-computador|uso do computador}}."
      ],
      [
        "p",
        "O ponto da aula é que essas três integrações não são só \"mais recursos\". Cada uma entrega ao Claude um pedaço maior do seu computador: no VS Code, o texto que você seleciona; no Chrome, as contas em que você já está logado; no uso do computador, tudo o que aparece na tela. Saber o que cada uma alcança, onde ela roda no Windows e qual é o freio de cada uma é o que deixa você usar sem susto, e escolher a mais estreita que resolve."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense no que você põe nas mãos do estagiário da aula 0.0. O **VS Code** é a mesa com tela grande da aula 3.8, ao lado da sua: ele mexe nos mesmos papéis, e você vê cada mudança desenhada; o que você aponta com o dedo, ele também enxerga. O **Chrome** é emprestar o seu navegador já aberto, com o seu crachá pendurado: ele entra em todos os sistemas em que você está logado, como se fosse você. O **uso do computador** é deixar que ele sente na sua cadeira, com o seu mouse e o seu teclado, e use qualquer programa que você liberar. Existe ainda um meio-termo, o **painel de navegador do {{app-desktop|app desktop}}**: um navegador de visitante, sem crachá nenhum, bom para testar a sua página sem entrar nas suas contas."
      ],
      [
        "quebra",
        "Um estagiário sabe que um bilhete colado numa página da internet não é uma ordem sua. O Claude pode não saber: um texto escondido num site, num e-mail ou numa janela na tela pode tentar mandá-lo fazer outra coisa, a {{prompt-injection|injeção de prompt}} do módulo 11. Por isso essas integrações têm freios que nenhuma pessoa teria: no uso do computador, o Claude só olha navegadores e só clica em terminais, sem digitar; no Chrome e no painel, classificadores conferem as ações antes de elas acontecerem."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "VS Code: o que o painel manda ao Claude"
      ],
      [
        "p",
        "A aula 3.7 instalou a {{extensao-programa|extensão}} e abriu o painel. Três detalhes ficaram para agora. O primeiro: a extensão traz a própria cópia do Claude Code, com versão própria, que pode ficar atrás da do terminal. No PC de teste, em 08/11/2026, a extensão estava na 2.1.261, enquanto o changelog já ia na 2.1.319; ela se atualiza pela aba de extensões do VS Code, não pelo `claude update`."
      ],
      [
        "p",
        "O segundo: **o que você seleciona no editor vai junto**. Com um trecho selecionado, o rodapé da caixa mostra quantas linhas estão marcadas, e o Claude recebe esse texto com o seu pedido; ele também vê qual arquivo está aberto, mesmo sem seleção. É ótimo para \"explique estas linhas\". E é um vazamento fácil: selecionar, sem querer, uma linha do {{env|`.env`}} manda o segredo para a conversa. A documentação dá três freios: as opções **Attach Selection** e **Attach Open File** nas configurações do VS Code desligam isso; arquivos ignorados pelo {{git|Git}} mandam no máximo o caminho, no painel; e uma regra de negar leitura do `.env`, da aula 7.4, bloqueia o texto selecionado e o aviso de arquivo aberto, inclusive quando você roda `claude` no {{terminal}} do VS Code, onde o filtro do painel não vale."
      ],
      [
        "p",
        "O terceiro, bom para você: **o painel não herda o seu bypass sozinho**. Para o modo que não pergunta aparecer no painel, é preciso ligar a opção **Allow dangerously skip permissions** nas configurações da extensão; sem ela, um `defaultMode` em {{bypass}} faz a conversa começar no Manual. E, como a aula 7.3 mostrou, o modo de planejamento trava as edições no painel mesmo com o bypass disponível; lá, o plano abre como um documento em {{markdown|Markdown}} em que você comenta linha a linha antes de aprovar."
      ],
      [
        "p",
        "Quando não usar o painel: para recursos que só o terminal tem, como o atalho `!` e o completar com Tab. Nesse caso, rode `claude` no terminal do próprio VS Code: a sessão se liga à extensão e mostra as mudanças no comparador do editor. De um terminal de fora, `/ide` faz essa ligação."
      ],
      [
        "h3",
        "Claude no Chrome: o seu navegador, com os seus logins"
      ],
      [
        "p",
        "A extensão **Claude in Chrome**, da loja oficial do Chrome, liga o Claude Code ao navegador. Funciona no Chrome, no Edge e em outros navegadores da mesma família, como Brave e Opera; não funciona dentro do {{wsl|WSL}}. Exige a extensão na versão 1.0.36 ou mais nova, um plano pago e o login do claude.ai: com uma {{chave-api|chave de API}}, a integração fica desligada. Para usar, abra o Claude Code com `claude --chrome`; no painel do VS Code, comece o pedido com `@browser`. O comando `/chrome` mostra se está tudo certo (\"Status: Enabled\" e \"Extension: Installed\"), reconecta e gerencia as permissões."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: \"abra a minha página em http://localhost:8000, clique em Comprar e me diga se aparece erro no Console\". O Claude abre uma aba nova, dentro de um grupo de abas da sessão, numa janela que você vê se mexendo, clica, lê o Console e o {{dom|DOM}}, e volta com o erro e a linha. Quando o Claude Code pede permissão antes de uma ação no navegador, a pergunta começa com \"Claude in Chrome wants to\" e oferece liberar tudo naquele site durante a sessão; os sites liberados ficam nas configurações da própria extensão. Numa página de login ou num {{captcha|CAPTCHA}}, ele para e pede que você faça."
      ],
      [
        "p",
        "O risco está na frase que a documentação repete: a extensão **compartilha o estado de login do seu navegador**. O Claude entra no Gmail, no Google Docs, no Notion, em qualquer site em que você está logado, sem {{conector}} e sem senha. A página de segurança oficial avisa que o maior risco é uma página com instruções escondidas, que o Claude pode tomar como pedido seu, e que o risco não é zero mesmo com os classificadores. Ele também tira capturas das abas em que trabalha, e o que estiver visível nelas entra na conversa. Na prática: libere só os sites de que a tarefa precisa, não deixe o Claude navegar por sites desconhecidos com o banco aberto em outra aba, e deixe desligada a opção **Enabled by default**, que conecta o navegador em toda sessão e ainda ocupa {{contexto}} em cada mensagem; ligue com `--chrome` só quando precisar."
      ],
      [
        "h3",
        "O painel de navegador do app desktop: o navegador de visitante"
      ],
      [
        "p",
        "No app desktop, a aba Code tem um {{painel-de-navegador|painel de navegador}} próprio, aberto com Ctrl+Shift+B. Ele usa um perfil limpo, sem os seus logins e sem o seu histórico. O Claude o usa para abrir a página que está construindo, tirar capturas, clicar, preencher formulários e conferir sozinho as próprias mudanças. Em sites de fora, ele pergunta antes da primeira ação em cada site (permitir uma vez, sempre ou negar), classificadores revisam cliques e digitação em qualquer modo, e a documentação diz que ele não compra, não cria contas e não contorna CAPTCHA sem você. Regra de escolha da própria documentação: o painel para testar e para sites que não precisam da sua identidade; o Chrome quando o Claude precisa agir como você."
      ],
      [
        "h3",
        "Uso do computador: o seu mouse e o seu teclado"
      ],
      [
        "p",
        "No Windows, o uso do computador só existe no app desktop; pela linha de comando, só no macOS. Está em prévia de pesquisa, nos planos Pro, Max e Ultra, e vem desligado. Liga-se nas configurações do app: em **Este computador > Sistema** ou, se esse item não existir, em **Recursos**, no item **Enable computer use**. No Windows, vale na hora."
      ],
      [
        "p",
        "O Claude tenta antes a ferramenta mais precisa: se existe um conector para o serviço, usa o conector; se dá para fazer com um comando, usa o comando; se é trabalho de navegador e o Chrome está ligado, usa o Chrome. Só quando nada disso alcança ele assume a tela, que é o caminho mais amplo e mais lento. Na primeira vez que precisa de um programa, pergunta, e a aprovação vale só para aquela sessão. O nível de controle é fixo por tipo de programa: navegadores e plataformas de investimento, **só olhar**; terminais e editores de código, **só clicar**, sem digitar; o resto, **controle total**. Programas de alcance amplo, como o terminal, o Explorador de Arquivos e as Configurações, vêm com um aviso extra. Há uma lista de programas negados, que ele não toca, e, enquanto trabalha, ele esconde as outras janelas."
      ],
      [
        "p",
        "O freio é o seu olho. A documentação avisa que o uso do computador roda na sua área de trabalho de verdade, com acesso a tudo o que você aprovar, e que, embora o Claude confira cada ação e aponte possível injeção vinda da tela, a confiança é outra. A central de ajuda recomenda bloquear programas sensíveis, como o do banco. Para parar, a documentação da linha de comando descreve a tecla Esc; para o app no Windows, ela não detalha o freio, então teste antes com uma tarefa inofensiva, como \"abra a Calculadora e calcule 15% de 240\", e fique olhando."
      ],
      [
        "h3",
        "Qual usar, e o risco de cada um"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Integração",
            "O que o Claude alcança",
            "Onde, no Windows",
            "Principal risco",
            "Freio"
          ],
          "linhas": [
            [
              "Painel do VS Code",
              "Os arquivos da pasta, o texto selecionado e o arquivo aberto",
              "Extensão do VS Code",
              "Seleção de um segredo indo para a conversa",
              "Attach Selection desligado; regra de negar leitura"
            ],
            [
              "Claude no Chrome",
              "Qualquer site em que você está logado",
              "Extensão do Chrome ou do Edge, com o Claude Code",
              "Página com instrução escondida agindo nas suas contas",
              "Liberar só os sites da tarefa; Enabled by default desligado"
            ],
            [
              "Painel de navegador",
              "Sites, sem os seus logins",
              "App desktop, aba Code",
              "Menor: sem identidade",
              "Aprovação por site; classificadores"
            ],
            [
              "Uso do computador",
              "Qualquer programa que você liberar",
              "Só no app desktop",
              "Tudo o que está na tela",
              "Aprovação por programa; programas negados; olhar junto"
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
          "**Custa à parte?** Não: tudo gasta do mesmo limite do plano. O uso do computador e o Chrome mandam capturas de tela, que pesam mais que texto, e o Chrome ligado por padrão ocupa contexto em toda mensagem.",
          "**Preciso instalar algo?** A extensão do VS Code, que a aula 3.7 instalou; a Claude in Chrome, só da loja oficial do Chrome; e o app desktop para o uso do computador.",
          "**Funciona pelo celular?** Não diretamente: as três rodam no PC. Pelo {{remote-control|Remote Control}} da aula 7.12, uma sessão do PC pode usar o Chrome dele, se você abrir o servidor com `--chrome`.",
          "**Com o bypass, o Chrome age sem perguntar?** As perguntas de permissão do Claude Code somem no bypass. Os sites em que ele pode navegar, clicar e digitar ficam nas configurações da própria extensão do Chrome: é lá que você limita."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o servidor ide, os diagnósticos e o Jupyter",
          "blocos": [
            [
              "p",
              "Quando a extensão está aberta, ela roda um pequeno servidor MCP local, chamado `ide`, preso ao próprio PC (127.0.0.1) e protegido por um código novo a cada abertura, guardado num arquivo que só o seu usuário lê. Por ele, o Claude Code do terminal abre as comparações no editor e lê a sua seleção."
            ],
            [
              "p",
              "Só duas ferramentas desse servidor chegam ao modelo: uma que lê os erros e avisos do painel Problems do VS Code e uma que roda código Python num caderno Jupyter aberto. Essa segunda sempre pergunta antes, mesmo nos modos que não perguntam nada."
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
          "pergunta": "Este comando lista as extensões instaladas no VS Code e filtra as que têm \"claude\" no nome, com a versão de cada uma. O que você acha que aparece? Depois, use os botões.",
          "codigo": "code --list-extensions --show-versions | Select-String claude",
          "linguagem": "powershell",
          "resposta": "Aparece uma linha só, com o identificador da extensão oficial e a versão dela. O começo, `anthropic.`, é o publicador: a extensão de verdade é da Anthropic. A versão, 2.1.261 no PC de teste, é a da cópia do Claude Code que mora dentro da extensão, e pode estar atrás da do terminal. Procurar \"chrome\" não mostra nada: a Claude in Chrome é uma extensão do navegador, não do VS Code.",
          "vivo": [
            [
              "Tirar as versões",
              "code --list-extensions | Select-String claude",
              "anthropic.claude-code"
            ],
            [
              "Procurar \"chrome\"",
              "code --list-extensions | Select-String chrome",
              ""
            ],
            [
              "Voltar ao original",
              "code --list-extensions --show-versions | Select-String claude",
              "anthropic.claude-code@2.1.261"
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
          "p": "Você quer que o Claude teste a sua página local e leia os erros do Console, sem entrar em nenhuma das suas contas. Qual integração é a mais estreita que resolve?",
          "o": [
            [
              "O painel de navegador do app desktop, com o perfil limpo e sem logins",
              "Isso. Ele abre a página, clica e lê os erros, sem os seus logins."
            ],
            [
              "O uso do computador, controlando o Chrome aberto na sua tela",
              "Além de ser o caminho mais amplo, no navegador o uso do computador só olha: não clica nem digita."
            ],
            [
              "O Claude in Chrome, com Enabled by default sempre ligado",
              "Funciona, mas leva os seus logins junto e ocupa contexto em toda sessão. É mais do que a tarefa pede."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Posso pedir ao Claude, pelo uso do computador, que digite um comando no {{powershell|PowerShell}} para mim?\" O Claude respondeu: \"Posso, com alguns cuidados. Com o uso do computador ligado, assim que você aprovar o PowerShell nesta sessão, eu passo a ter controle total dele, como de qualquer outro programa aprovado: clico na janela, digito o comando e leio a saída. Antes, feche o que for sensível na tela, porque eu vejo tudo o que aparece nela.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: aprovado o programa, o controle é total em qualquer um",
              "O nível é fixo por tipo de programa. Terminais e editores ficam no \"só clicar\"."
            ],
            [
              "Está errada: no terminal, o uso do computador só clica, sem digitar",
              "Isso. Para comandos, o Claude usa a própria ferramenta de terminal, a mais precisa."
            ],
            [
              "Está errada: o uso do computador não funciona no Windows de jeito nenhum",
              "No Windows ele funciona pelo app desktop; só pela linha de comando é que fica restrito ao macOS."
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
            "\"Selecionei o .env só para olhar; o Claude não vê.\"",
            "O texto selecionado vai com o pedido. Desligue Attach Selection ou crie a regra que nega a leitura do .env."
          ],
          [
            "\"Liguei o Chrome por padrão; é mais prático.\"",
            "Toda sessão passa a ter os seus logins à mão e gasta mais contexto. Ligue com --chrome quando precisar."
          ],
          [
            "\"Instalei a extensão do Claude que achei num site.\"",
            "Extensão é programa. Instale a Claude in Chrome só pela loja oficial do Chrome, e a do VS Code com o publicador Anthropic."
          ],
          [
            "\"O uso do computador vai clicar no meu banco se precisar.\"",
            "Navegadores ficam no \"só olhar\", e você pode pôr o programa do banco na lista de negados."
          ],
          [
            "\"O painel do VS Code segue o meu bypass.\"",
            "Só com a opção Allow dangerously skip permissions ligada na extensão. Sem ela, a conversa começa no Manual."
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
          "p": "O que cada integração entrega ao Claude?",
          "r": [
            "Painel do VS Code: os arquivos, o texto selecionado e o arquivo aberto.",
            "Claude no Chrome: o seu navegador com os seus logins.",
            "Uso do computador: qualquer programa que você aprovar, pela tela."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que níveis de controle o uso do computador dá, e para quais programas?",
          "r": [
            "Só olhar: navegadores e plataformas de investimento.",
            "Só clicar, sem digitar: terminais e editores de código.",
            "Controle total: os outros programas que você aprovar."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Use Claude Code in VS Code (seleção e arquivo aberto como contexto, Attach Selection, bypass no painel, @browser, servidor ide), Claude Code",
            "https://code.claude.com/docs/pt/vs-code",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Use Claude Code with Chrome (requisitos, --chrome, /chrome, Enabled by default, permissões por site, problemas no Windows), Claude Code",
            "https://code.claude.com/docs/pt/chrome",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Use Claude in Chrome com segurança (injeção de prompt, capturas de tela, sites confiáveis), central de ajuda",
            "https://support.claude.com/pt/articles/12902428-use-claude-in-chrome-com-seguranca",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Aplicativo Desktop (painel de navegador, uso do computador no Windows, níveis por programa), Claude Code",
            "https://code.claude.com/docs/pt/desktop",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Deixe Claude usar seu computador a partir da CLI (só macOS; diferenças do app desktop; Esc para parar), Claude Code",
            "https://code.claude.com/docs/pt/computer-use",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modos de permissão (aba VS Code: Allow dangerously skip permissions), Claude Code",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (versão mais recente, 2.1.319, de 06/11/2026; 2.1.296: o Chrome pergunta antes das ações também no VS Code)",
            "https://code.claude.com/docs/en/changelog",
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
          "As três integrações fazem a mesma coisa, e a diferença é só o programa em que você digita o pedido",
          "Elas alcançam coisas diferentes: os arquivos e a seleção, as suas contas no navegador, ou a tela inteira."
        ],
        [
          "Cada integração dá ao Claude mais alcance e mais risco; use a mais estreita que resolve a tarefa",
          "Isso. Seleção no VS Code, logins no Chrome, tela no uso do computador: escolha a menor mão que basta."
        ],
        [
          "O uso do computador é o caminho preferido do Claude, porque enxerga tudo o que está na sua tela",
          "É o último recurso: o Claude tenta antes conector, comando e Chrome, porque a tela é o caminho mais amplo e lento."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Por que o Claude no Chrome consegue agir no seu Gmail sem conector?",
        "o": [
          [
            "Porque usa uma senha que o Claude guarda depois do primeiro acesso",
            "Ele não guarda senha: aproveita o login que já está aberto no seu navegador."
          ],
          [
            "Porque a extensão traz um conector do Gmail embutido, pronto para usar",
            "Não há conector: a extensão age nas páginas, como você agiria."
          ],
          [
            "Porque compartilha o login que já está aberto no seu navegador, como você",
            "Isso. Por isso, libere só os sites de que a tarefa precisa."
          ]
        ],
        "c": 2
      },
      {
        "p": "No Windows, onde você liga o uso do computador do Claude Code?",
        "o": [
          [
            "No app desktop, nas configurações, em Enable computer use",
            "Isso. No Windows, só o app desktop tem o uso do computador."
          ],
          [
            "No terminal, ligando o servidor computer-use pelo comando /mcp",
            "Esse caminho é o da linha de comando, que só existe no macOS."
          ],
          [
            "Na extensão do VS Code, na seção Customize do menu de comandos",
            "A extensão do VS Code não tem o uso do computador."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre o Claude in Chrome e o painel de navegador do app?",
        "O Chrome é o seu navegador, com os seus logins: o Claude age como você nos sites em que você está logado. O painel do app desktop é um navegador limpo, sem logins nem histórico, bom para testar a sua página e para sites que não precisam da sua identidade."
      ],
      [
        "O uso do computador funciona no meu Windows?",
        "Funciona pelo app desktop, em prévia de pesquisa, nos planos Pro, Max e Ultra. Pela linha de comando, só no macOS. Ele vem desligado: ligue em Enable computer use, nas configurações do app, e aprove cada programa quando ele pedir."
      ],
      [
        "Como evito mandar um segredo pelo VS Code?",
        "Não selecione trechos do .env com o painel aberto, desligue Attach Selection se preferir, e crie a regra que nega a leitura do .env no settings.json: ela bloqueia o texto selecionado desse arquivo também quando você roda claude no terminal do VS Code."
      ]
    ]
  },
  "7-14": {
    "tempo": 24,
    "video": "a7-14",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você estava no meio de um guia quando o {{claude-code|Claude Code}} parou com uma mensagem de limite e um horário, e você não entendeu por que ali, nem se trocar de {{modelo}} resolvia. Ou evitou o modelo mais forte porque \"gasta o limite\", sem saber de qual limite se falava nem quanto sobrava.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quem usa o Claude por assinatura não paga por pedido: paga um valor fixo por mês e ganha uma cota de uso, o {{limite-de-uso|limite de uso}}. Essa cota tem duas réguas ao mesmo tempo, uma que zera a cada 5 horas e outra que zera uma vez por semana, e as duas são divididas entre tudo o que você faz no claude.ai, no app do celular, no {{app-desktop|app desktop}} e no Claude Code. Quando uma delas acaba, o trabalho para até ela voltar, a não ser que você pague à parte para continuar."
      ],
      [
        "p",
        "Entender as réguas muda o seu dia de três jeitos. Você planeja: sabe que um {{workflow}} grande às 22h pode comer a cota da semana, e que a janela de 5 horas começa no primeiro pedido, não às 8h. Você reage certo quando o limite chega: sabe se trocar de modelo adianta, se dá para deixar o Claude esperar e continuar sozinho numa {{sessao|sessão}} aberta, e quanto custa a saída paga. E você não cai nas coisas que gastam sem você ver, como uma conversa velha retomada ou uma tarefa repetindo sozinha."
      ],
      [
        "p",
        "Os números e os nomes desta aula mudam com frequência; por isso, cada um vem com a fonte e a data em que foi conferido, 08/11/2026. Na dúvida, a página de preços e a de uso da sua conta mandam."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao relógio de ponto do estagiário, da aula 7.2. Ele tem duas cotas de trabalho. A do **turno**: quando você faz o primeiro pedido, começa um turno de 5 horas com uma quantidade fixa de trabalho; se a quantidade acaba antes, ele cruza os braços até o turno terminar, e o turno seguinte só começa no próximo pedido que você fizer. A da **semana**: uma quantidade maior, que zera sempre no mesmo dia e na mesma hora, combinados com a empresa. As duas contam juntas: cada tarefa sai do turno e da semana ao mesmo tempo. E o estagiário é um só para todos os balcões: o que ele faz para você no chat sai das mesmas cotas que o trabalho no terminal."
      ],
      [
        "quebra",
        "A cota não é medida em horas trabalhadas, nem em número de pedidos. Ela é medida pelo tamanho do trabalho, contado em {{token|tokens}}: uma pergunta curta numa conversa nova gasta pouco; a mesma pergunta numa conversa enorme, com o modelo mais forte e esforço alto, gasta muito mais. E, ao contrário de um estagiário parado, uma sessão aberta pode gastar sozinha, quando há uma tarefa repetindo ou uma {{compactacao|compactação}} rodando em {{segundo-plano|segundo plano}}."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Os nomes mudaram: planos e limites em 08/11/2026"
      ],
      [
        "p",
        "Três trocas de nome confundem quem lê tutorial antigo. O plano **Max 20x** agora se chama **Ultra**, e o **Max 5x** agora se chama só **Max**; a documentação e a central de ajuda confirmam, e os assinantes antigos mudaram de nome sem mudar de preço. E o limite de 5 horas, que as mensagens chamavam de **session limit** (\"limite de sessão\"), passou a se chamar **5-hour limit** (\"limite de 5 horas\") nas mensagens do Claude Code a partir da versão 2.1.312, de 27/10/2026. As fontes ainda discordam nesse ponto: em 08/11/2026, a página de erros da documentação e a central de ajuda em português ainda escreviam \"limite de sessão\". É a mesma coisa."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Plano",
            "Preço (página oficial, 08/11/2026)",
            "A cada 5 horas",
            "Por semana",
            "Fable 5.1"
          ],
          "linhas": [
            [
              "Pro",
              "US$ 20 por mês (US$ 17 no plano anual)",
              "Mais que o Free; é a base, 1x",
              "A base, 1x",
              "Só com {{uso-extra|créditos de uso}}"
            ],
            [
              "Max (antigo Max 5x)",
              "US$ 100 por mês",
              "5 vezes o Pro",
              "5 vezes o Pro",
              "Até metade do limite semanal"
            ],
            [
              "Ultra (antigo Max 20x)",
              "US$ 200 por mês",
              "Sem limite de 5 horas, em conta verificada",
              "10 vezes o Pro",
              "Até metade do limite semanal"
            ]
          ]
        }
      ],
      [
        "p",
        "A tabela não traz números de mensagens porque a Anthropic não publica: a página de preços diz que não há uma contagem fixa, já que o uso depende do tamanho e da complexidade das conversas, do modelo, do esforço e dos recursos usados. Os planos Max e Ultra têm também um limite semanal separado só para o Fable 5.1, o modelo mais forte. E o \"sem limite de 5 horas\" do Ultra vale para conta verificada; numa conta ainda não verificada, vale um limite temporário. Os preços são da assinatura pela web; pelo app do celular, podem variar."
      ],
      [
        "h3",
        "A janela de 5 horas"
      ],
      [
        "p",
        "A central de ajuda explica: a janela começa quando você manda a primeira mensagem e o limite volta inteiro 5 horas depois. Um exemplo do começo ao fim: primeiro pedido às 9h10, a janela vai até 14h10. Os pedidos das 10h, das 11h e das 13h55 saem todos dessa janela; nenhum deles a reinicia. Se a cota acabar às 12h, você espera até 14h10. Depois das 14h10, nada conta até o próximo pedido: se ele for às 16h, a nova janela vai até 21h. A seção \"Preveja antes de ver\" faz essa conta com um pequeno programa."
      ],
      [
        "p",
        "Por que isso importa: a janela não é \"das 8h às 13h\", e não começa sozinha quando você liga o PC. Se você sabe que vai precisar de um bloco grande à tarde, um pedido leve de manhã já abre uma janela que vai acabar no meio da tarde. Em claude.ai, em Settings > Usage (Configurações > Uso), a linha **Sessão atual** mostra quanto você usou e quanto tempo falta."
      ],
      [
        "h3",
        "O limite semanal"
      ],
      [
        "p",
        "O semanal zera num dia e hora fixos, escolhidos para a sua conta, e não depende de quando você começou a usar nem de quando a assinatura começou. A mesma página de uso mostra o próximo horário. A regra que pega: o uso conta nas duas réguas ao mesmo tempo, e a documentação avisa que uma rajada de trabalho pesado, como um workflow grande da aula 7.11, pode esgotar o semanal antes de a janela de 5 horas virar. A partir daí, não adianta esperar 5 horas: o bloqueio vai até o dia de virar a semana."
      ],
      [
        "h3",
        "O que gasta mais, e o que gasta sem você ver"
      ],
      [
        "p",
        "Cada mensagem reenvia a conversa inteira ao modelo, e é por isso que uma pergunta de uma linha numa sessão aberta o dia todo gasta muito mais do que a mesma pergunta numa sessão nova; o {{cache}} barateia a releitura, e a aula 7.17 mostra o que o quebra. Pesam também o modelo (o Fable e o Opus gastam mais que o Sonnet), o nível de esforço e os recursos que multiplicam pedidos, como {{subagente|subagentes}}, workflows e as capturas de tela do Chrome e do {{uso-do-computador|uso do computador}}."
      ],
      [
        "p",
        "E há o que gasta com você longe. A página de custos lista: tarefas que se repetem dentro de uma sessão, como o `/loop`, que mandam o contexto inteiro a cada volta; a compactação e o resumo automáticos em sessões paradas; mensagens de outras sessões suas. Um caso que ganhou aviso próprio: desde a versão 2.1.304, de 19/10/2026, nos planos Pro e Max, quando retomar uma conversa parada há muito tempo vai gastar uma fatia visível da janela de 5 horas, o Claude Code avisa e oferece retomar assim mesmo ou começar uma conversa nova, que pode consultar a anterior se você citar."
      ],
      [
        "h3",
        "Quando o limite chega"
      ],
      [
        "p",
        "Antes de acabar, o Claude Code pode avisar, com uma mensagem como `You've used 85% of your session limit · resets 3:45pm` (\"você usou 85% do limite\"; nas versões novas, com o nome 5-hour limit). Quando acaba, ele bloqueia os pedidos até o horário que a mensagem mostra:"
      ],
      [
        "codigo",
        {
          "texto": "You've hit your 5-hour limit · resets 3:45pm\nYou've hit your weekly limit · resets Mon 12:00am\nYou've hit your Opus limit · resets 3:45pm",
          "linguagem": "texto",
          "rotulo": "mensagens de limite (da documentação, com o nome novo)"
        }
      ],
      [
        "p",
        "Leia o tipo. O de 5 horas e o semanal valem para **todos os modelos**: trocar de modelo com {{model|/model}} não devolve o acesso. Os limites de um modelo específico, como o do Opus, valem só para aquela família: trocar para outra família com `/model` deixa você continuar, com um custo escondido, porque cada modelo tem o próprio cache e a conversa inteira é relida do zero."
      ],
      [
        "p",
        "Numa sessão aberta no {{terminal}}, com o login da assinatura, o Claude Code também pode **esperar e continuar sozinho**: desde a versão 2.1.234, de 17/08/2026, ele mostra `Usage limit reached · limit resets 3:45pm` e `Continuing automatically at 3:45pm · Esc to cancel`, e, no horário, pede ao Claude que retome a tarefa de onde parou, sem reenviar a sua última mensagem. A sessão precisa ficar aberta. Se o PC dormiu mais de uns 30 minutos e o limite voltou nesse meio tempo, ele pede um Enter. Depois de três continuações seguidas, ele para e abre o menu de opções. A espera não começa sozinha quando a volta é em mais de 24 horas, como num limite semanal, nem numa sessão do {{remote-control|Remote Control}}. Para desligar, {{config-comando|/config}}, opção **Continue automatically at usage limit**; para cancelar uma espera, Esc com a caixa vazia. No seu caso, pense nisso: com o {{bypass}}, uma tarefa retomada às 3h da manhã segue sem ninguém olhando."
      ],
      [
        "h3",
        "As saídas: esperar, pagar à parte ou mudar de plano"
      ],
      [
        "p",
        "O {{comando}} `/rate-limit-options` abre o menu com as saídas: esperar aqui e continuar sozinho, ligar os créditos de uso ou mudar de plano. Os créditos de uso deixam você continuar depois do limite pagando à parte, pelo preço da {{api|API}}, segundo a página de preços; ficam em claude.ai, Settings > Usage, onde dá para pôr um limite de gasto por mês. Ligar ou não é decisão sua, e é dinheiro de verdade. Dois cuidados: os créditos mensais de API que vêm com o Max e o Ultra **não** pagam esse uso; e, no Fable, quando o limite dele acaba, o Claude Code pergunta se você quer continuar pagando com créditos de uso, e essa pergunta só aparece onde a sessão roda: pelo celular, no Remote Control, ela não chega, e o pedido não é enviado."
      ],
      [
        "h3",
        "Onde ver quanto sobra"
      ],
      [
        "p",
        "Em três lugares. Em claude.ai, Settings > Usage, com a sessão atual e o próximo horário do semanal; é o mesmo lugar dos créditos de uso. No Claude Code, o {{usage|/usage}} mostra as barras do plano e o que mais gastou, e a aula 7.17 usa esse painel no laboratório. No app desktop, o anel de uso abaixo da caixa de pedido. E, se você quiser ver o tempo todo, a linha de status da aula 7.19 pode mostrar as duas réguas."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**O limite do chat é o mesmo do Claude Code?** É. A central de ajuda diz que o uso de todas as superfícies, claude.ai, Claude Code e Claude Desktop, conta para o mesmo limite.",
          "**Por que o meu limite acabou tão rápido hoje?** Quase sempre: conversa longa, modelo mais forte, esforço alto, subagentes ou workflow. O `/usage` aponta o que mais pesou.",
          "**Usar um modelo mais leve ajuda?** Ajuda a gastar menos dali em diante. Mas, se você já bateu no limite de 5 horas ou no semanal, trocar de modelo não destrava.",
          "**O Ultra é ilimitado?** Não. Ele não tem o limite de 5 horas em conta verificada, mas tem o semanal, e o Fable tem um semanal próprio.",
          "**A Anthropic pode mudar as cotas?** Pode. A página de preços e a central de ajuda dizem que podem limitar o uso de outras formas, como tetos semanais e mensais, e que o serviço sem interrupção não é garantido."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o que não é limite do plano",
          "blocos": [
            [
              "p",
              "`Server is temporarily limiting requests` é um freio do lado do servidor, sem relação com a sua cota: em geral, basta tentar de novo. Uma frase como `rate limited until 3:14am` dentro do `/usage` quer dizer que o Claude Code não consegue buscar os seus números até aquele horário; o seu trabalho não está limitado por isso."
            ],
            [
              "p",
              "O aviso de contexto cheio ou de compactação automática também não é limite de uso: é a conversa chegando perto do tamanho máximo da {{janela-de-contexto|janela de contexto}}, assunto da aula 5.3. E com uma {{chave-api|chave de API}}, em vez da assinatura, não há janela nem semana: cada pedido é cobrado, e não há espera para fazer."
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
          "pergunta": "O primeiro pedido do dia foi às 9h10. Este programa em Python calcula quando a janela de 5 horas acaba. O que você acha que ele imprime? Depois, use os botões para mudar o horário do primeiro pedido.",
          "codigo": "from datetime import datetime, timedelta\n\nprimeiro_pedido = datetime(2026, 11, 9, 9, 10)\nfim_da_janela = primeiro_pedido + timedelta(hours=5)\nprint(\"A janela termina em\", fim_da_janela.strftime(\"%d/%m às %H:%M\"))",
          "linguagem": "python",
          "resposta": "Imprime `A janela termina em 09/11 às 14:10`: 9h10 mais 5 horas. Um pedido às 13h55 não mudaria nada, porque a janela começa no primeiro pedido e não recomeça a cada mensagem. Depois que ela acaba, a próxima só começa no próximo pedido: se ele for às 16h, a janela vai até 21h. Um primeiro pedido às 22h30 cruza a meia-noite e termina às 3h30 do dia seguinte.",
          "vivo": [
            [
              "Primeiro pedido às 22h30",
              "from datetime import datetime, timedelta\n\nprimeiro_pedido = datetime(2026, 11, 9, 22, 30)\nfim_da_janela = primeiro_pedido + timedelta(hours=5)\nprint(\"A janela termina em\", fim_da_janela.strftime(\"%d/%m às %H:%M\"))",
              "A janela termina em 10/11 às 03:30"
            ],
            [
              "Próxima janela, com pedido às 16h",
              "from datetime import datetime, timedelta\n\nprimeiro_pedido = datetime(2026, 11, 9, 16, 0)\nfim_da_janela = primeiro_pedido + timedelta(hours=5)\nprint(\"A janela termina em\", fim_da_janela.strftime(\"%d/%m às %H:%M\"))",
              "A janela termina em 09/11 às 21:00"
            ],
            [
              "Voltar ao original",
              "from datetime import datetime, timedelta\n\nprimeiro_pedido = datetime(2026, 11, 9, 9, 10)\nfim_da_janela = primeiro_pedido + timedelta(hours=5)\nprint(\"A janela termina em\", fim_da_janela.strftime(\"%d/%m às %H:%M\"))",
              "A janela termina em 09/11 às 14:10"
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
          "p": "Às 15h, o Claude Code mostrou \"You've hit your 5-hour limit · resets 4:20pm\". Você troca do Opus para o Sonnet com /model. O que acontece?",
          "o": [
            [
              "Volta a funcionar, porque cada modelo tem o seu próprio limite de 5 horas",
              "O limite de 5 horas é um só para todos os modelos. Só os limites específicos, como o do Opus, se resolvem trocando de família."
            ],
            [
              "Volta a funcionar, mas o Sonnet passa a cobrar créditos de uso até 16h20",
              "Os créditos de uso só entram se você os ligar; trocar de modelo não liga nada e não destrava esse limite."
            ],
            [
              "Continua bloqueado até 16h20: esse limite vale para todos os modelos",
              "Isso. Trocar de modelo não destrava o de 5 horas nem o semanal; resta esperar, pagar créditos de uso ou mudar de plano."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"No Ultra eu não tenho limite nenhum, certo?\" O Claude respondeu: \"Certo. O Ultra não tem limite de 5 horas nem limite semanal; pode usar à vontade.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o Ultra foi feito para uso contínuo, sem nenhuma das duas cotas",
              "A página de preços dá ao Ultra 10 vezes o uso semanal do Pro: o semanal existe."
            ],
            [
              "Está errada: tem o semanal, e o sem 5 horas exige conta verificada",
              "Isso. Sem limite de 5 horas só em conta verificada; o semanal continua, e o Fable tem um semanal próprio."
            ],
            [
              "Está errada: o Ultra tem o limite de 5 horas igual ao do Max, só o semanal é maior",
              "O Ultra, em conta verificada, não tem o limite de 5 horas; o erro da resposta é dizer que não há semanal."
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
            "\"Bati no limite de 5 horas; vou trocar de modelo e seguir.\"",
            "O de 5 horas e o semanal valem para todos os modelos. Só os limites de uma família, como o do Opus, se resolvem trocando de família."
          ],
          [
            "\"A janela recomeça a cada pedido.\"",
            "Ela começa no primeiro pedido e termina 5 horas depois. Os pedidos do meio não a reiniciam."
          ],
          [
            "\"Deixei a sessão aberta sem usar; não gasta nada.\"",
            "Tarefas repetindo, compactação automática e mensagens de outras sessões gastam com a sessão parada. Retomar uma conversa velha também."
          ],
          [
            "\"Os créditos de API do meu plano pagam o que passar do limite.\"",
            "Não pagam. O uso além do limite sai dos créditos de uso, cobrados à parte, e só se você os ligar."
          ],
          [
            "\"Tutorial antigo fala em Max 20x e session limit; está tudo errado.\"",
            "Só os nomes mudaram: Max 20x é o Ultra, Max 5x é o Max, e session limit é o limite de 5 horas."
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
          "p": "Como funcionam as duas réguas do plano?",
          "r": [
            "A de 5 horas começa no primeiro pedido e volta inteira 5 horas depois.",
            "A semanal zera num dia e hora fixos da sua conta.",
            "As duas contam ao mesmo tempo e são divididas entre claude.ai, Claude Code e app desktop."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são as saídas quando o limite acaba?",
          "r": [
            "Esperar o horário da mensagem, com a sessão aberta para ela continuar sozinha.",
            "Ligar os créditos de uso, pagos à parte pelo preço da API: decisão sua.",
            "Mudar para um plano com mais cota."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Preços do Claude (planos, cotas a cada 5 horas e por semana, Fable, Ultra sem limite de 5 horas em conta verificada, créditos de uso pelo preço da API)",
            "https://claude.com/pricing",
            "oficial",
            "08/11/2026"
          ],
          [
            "Como funcionam os limites de uso e comprimento (janela de 5 horas desde a primeira mensagem, semanal em horário fixo, mesmo limite em todas as superfícies), central de ajuda",
            "https://support.claude.com/pt/articles/11647753-como-funcionam-os-limites-de-uso-e-comprimento",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "O que é o plano Max (5 vezes o Pro a cada 5 horas e por semana; semanal separado do Fable), central de ajuda",
            "https://support.claude.com/pt/articles/11049741-o-que-e-o-plano-max",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "O que é o plano Ultra (antigo Max 20x; 10 vezes o Pro por semana; sem limite de 5 horas em conta verificada), central de ajuda",
            "https://support.claude.com/pt/articles/17728952-o-que-e-o-plano-ultra",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Disponibilidade de recursos (Ultra é o novo nome do Max 20x, e Max, do Max 5x), Claude Code",
            "https://code.claude.com/docs/pt/feature-availability",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Erros: limites de uso (mensagens, trocar de modelo, aviso de 85%), Claude Code",
            "https://code.claude.com/docs/pt/errors",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modo interativo: aguarde o reset de um limite de uso (continuação automática, três continuações, /rate-limit-options), Claude Code",
            "https://code.claude.com/docs/pt/interactive-mode",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Gerencie custos de forma eficaz (por que o uso aumenta numa sessão longa, uso em segundo plano), Claude Code",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Gerenciar créditos de uso para planos Claude pagos, central de ajuda",
            "https://support.claude.com/pt/articles/12429409-gerenciar-creditos-de-uso-para-planos-claude-pagos",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.234: continuação automática; 2.1.304: aviso ao retomar conversa parada; 2.1.312: \"5-hour limit\" no lugar de \"session limit\")",
            "https://code.claude.com/docs/en/changelog",
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
          "São duas réguas, uma de 5 horas e uma semanal, que contam juntas e valem em todas as superfícies",
          "Isso. Começa no primeiro pedido, zera no horário da semana, e o chat e o Claude Code dividem a mesma cota."
        ],
        [
          "O plano tem um limite de mensagens por dia, igual para todos, que zera à meia-noite",
          "Não há contagem fixa de mensagens nem virada à meia-noite: são uma janela de 5 horas e um semanal, medidos pelo tamanho do uso."
        ],
        [
          "Cada superfície tem a sua cota: o chat gasta uma, o Claude Code gasta outra, separada",
          "A central de ajuda diz o contrário: todas as superfícies contam para o mesmo limite."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O seu primeiro pedido do dia foi às 10h. Às 14h30 você manda outro. Quando a janela de 5 horas acaba?",
        "o": [
          [
            "Às 15h, cinco horas depois do primeiro pedido",
            "Isso. A janela começa no primeiro pedido; o das 14h30 sai dela e não a reinicia."
          ],
          [
            "Às 19h30, cinco horas depois do pedido das 14h30",
            "Os pedidos do meio não reiniciam a janela."
          ],
          [
            "À meia-noite, quando o dia do pedido termina",
            "A janela é de 5 horas a partir do primeiro pedido, não do dia."
          ]
        ],
        "c": 0
      },
      {
        "p": "Você nunca mexeu no /config e bateu no limite de 5 horas no meio de uma tarefa no terminal. O que o Claude Code faz?",
        "o": [
          [
            "Encerra a sessão e apaga a tarefa para recomeçar depois",
            "A sessão continua aberta e a tarefa não é apagada."
          ],
          [
            "Liga os créditos de uso sozinho e continua sem parar, cobrando à parte",
            "Os créditos de uso só entram se você os ligar."
          ],
          [
            "Espera o horário de volta e continua a tarefa, com a sessão aberta",
            "Isso. A continuação automática vem ligada; Esc cancela a espera, e o /config desliga."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Quando a minha janela de 5 horas volta?",
        "Cinco horas depois do primeiro pedido que abriu a janela. Os pedidos do meio não a reiniciam. A mensagem de limite mostra o horário, e em claude.ai, Settings > Usage, a linha Sessão atual mostra quanto falta."
      ],
      [
        "Trocar de modelo resolve o limite?",
        "Não para o de 5 horas nem para o semanal, que valem para todos os modelos. Só os limites de uma família, como o do Opus, se resolvem trocando para outra família, e aí a conversa é relida do zero, sem cache."
      ],
      [
        "O que são os créditos de uso?",
        "O jeito de continuar depois do limite pagando à parte, pelo preço da API. Você liga em claude.ai, Settings > Usage, e pode pôr um teto por mês. Os créditos mensais de API do plano não pagam esse uso, e ligar ou não é decisão sua."
      ]
    ]
  },
  "7-15": {
    "tempo": 30,
    "video": "a7-15",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você pediu uma mudança, o {{claude-code|Claude Code}} mexeu em cinco {{arquivo|arquivos}} e o resultado ficou pior do que antes; ou ele rodou um {{script}} que estragou uma lista que você tinha. Você sabe que dá para voltar atrás, mas não sabe até onde a volta alcança, e é exatamente aí que se perde trabalho.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O {{checkpoint}} é o desfazer mais rápido que existe para o que o Claude acabou de fazer: dois toques na tecla Esc, um item do menu, e os arquivos que ele editou voltam a ser o que eram antes do seu pedido. Para quem não lê {{codigo|código}}, isso vale muito: você não precisa entender o que ele mudou para desfazer, só reconhecer que o resultado piorou. E a volta não é só nos arquivos: dá para voltar a conversa a um ponto anterior, para tirar do caminho uma discussão que levou o Claude para a direção errada."
      ],
      [
        "p",
        "O problema é que o checkpoint tem buracos, e eles não aparecem na tela: o menu volta o que pode e fica quieto sobre o resto. Um arquivo mudado por um script, uma pasta apagada por um {{comando}}, o trabalho de um {{subagente}}, um {{push}} para o {{github|GitHub}}, um e-mail enviado por um {{conector}}: nada disso volta com o checkpoint. Esta aula mostra o menu inteiro, quando cada opção serve, e a lista do que não volta, que é o que decide quando você precisa do {{git|Git}} da aula 3.9 antes de pedir."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Antes de cada pedido seu, o estagiário da aula 0.0 tira uma **foto rápida, de celular**, dos papéis que vai mexer com as próprias mãos, e guarda na gaveta dele por cerca de 30 dias. Se você não gostar do que ele fez, ele pega a foto e deixa os papéis como estavam. Ele também anota em que ponto da conversa cada foto foi tirada, e por isso consegue \"esquecer\" o que vocês conversaram depois dali. O Git, da aula 3.1, é outra coisa: o **álbum oficial**, que você monta quando quer, com a pasta inteira, e que dura para sempre."
      ],
      [
        "quebra",
        "As fotos só pegam o que o estagiário mexeu com as próprias mãos, que aqui são as ferramentas de edição do Claude. Se ele usou uma máquina, como um script rodado no {{terminal}}, para reescrever um papel, não houve foto; se foi um colega, um subagente, em geral também não; se foi você, também não. E nenhuma foto traz de volta o que já saiu do escritório: um e-mail enviado, um push, uma mensagem publicada."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Duas portas para o mesmo menu"
      ],
      [
        "p",
        "O menu abre de dois jeitos: com o comando {{rewind|/rewind}} (que também atende por `/checkpoint` e `/undo`) ou apertando **Esc duas vezes com a caixa de texto vazia**. Se houver texto na caixa, o duplo Esc apaga o texto em vez de abrir o menu; o texto apagado fica no histórico, e a seta para cima o traz de volta. Não confunda com um Esc só, que a aula 7.1 mostrou: ele interrompe o Claude no meio do trabalho e mantém o que já foi feito."
      ],
      [
        "p",
        "O menu lista os pedidos que você fez na {{sessao|sessão}}. Você escolhe o ponto e, depois, uma ação, segundo a documentação oficial conferida em 08/11/2026:"
      ],
      [
        "lista",
        [
          "**Restore code and conversation**: volta os arquivos e a conversa àquele ponto.",
          "**Restore conversation**: volta só a conversa e **mantém os arquivos como estão agora**.",
          "**Restore code**: volta só os arquivos e mantém a conversa.",
          "**Summarize from here** e **Summarize up to here**: resumem uma parte da conversa para liberar espaço, sem mexer nos arquivos, como mostrou a aula 5.3.",
          "**Never mind**: volta à lista sem fazer nada."
        ]
      ],
      [
        "p",
        "Duas regras do menu evitam sustos. As opções de código só aparecem quando aquele ponto tem mudanças de arquivo rastreadas para desfazer; se não tiver, sobram Restore conversation, os resumos e Never mind. E, quando você volta a conversa, o seu pedido original reaparece na caixa de texto, pronto para ser reenviado ou reescrito. No painel do {{vs-code|VS Code}}, o caminho é passar o mouse sobre uma mensagem: aparece o botão de voltar, com três opções, ramificar a conversa dali, voltar o código até ali, ou as duas coisas juntas."
      ],
      [
        "h3",
        "Quando a foto é tirada, e quanto ela dura"
      ],
      [
        "p",
        "O checkpoint é tirado antes de cada pedido seu que começa um {{turno}}. O Claude Code guarda as fotos dos arquivos dos 100 checkpoints mais recentes de cada sessão, junto com a conversa: por isso o `/rewind` funciona também depois de você retomar a sessão no dia seguinte. As fotos são apagadas na limpeza automática, cerca de 30 dias depois da última vez que a sessão salvou algo; voltar a um ponto cujas fotos já sumiram falha com a mensagem `No files were restored`. Uma mensagem que você digitou enquanto o Claude ainda trabalhava não ganha checkpoint próprio e aparece marcada com **No code restore**: para desfazer aquele trecho, escolha o pedido que começou o turno."
      ],
      [
        "h3",
        "Um caso do começo ao fim"
      ],
      [
        "p",
        "Você pede: \"deixe a página de vendas mais moderna\". O Claude edita o `index.html` e o `estilo.css` com as ferramentas de edição dele, e o resultado fica pesado. Você aperta Esc duas vezes, escolhe esse pedido na lista e tem três caminhos. **Restore code and conversation**: os dois arquivos voltam, a conversa volta, e o seu pedido reaparece na caixa para você reescrever com mais detalhe. **Restore code**: os arquivos voltam, mas a conversa fica, e o Claude ainda sabe o que tentou, o que serve para dizer \"não faça desse jeito de novo\". **Restore conversation**: os arquivos ficam como estão, e só a conversa volta, útil quando o código ficou bom mas a discussão virou uma confusão que você quer apagar."
      ],
      [
        "h3",
        "O que não volta"
      ],
      [
        "p",
        "A documentação oficial lista os limites, e cada um vira um cuidado prático:"
      ],
      [
        "lista",
        [
          "**Arquivo mudado só por comando do terminal.** O checkpoint rastreia as ferramentas de edição do Claude, não os comandos que ele roda. Um script que reescreve um arquivo, um comando que apaga uma pasta, até o `sed -i`, que desde a versão 2.1.309, de 22/10/2026, roda como comando comum: nada disso volta. A exceção: se o Claude já tinha editado aquele arquivo com as ferramentas dele na sessão, o `/rewind` desfaz também as mudanças que comandos fizeram nele depois.",
          "**Edições de subagentes, em geral.** As de um subagente em {{segundo-plano|segundo plano}}, que é o padrão, não entram nas fotos da sua sessão, a não ser nos arquivos que o próprio Claude já tinha editado; a aula 7.8 já avisou.",
          "**Mudanças que você fez à mão**, fora do Claude Code, e as de outras sessões abertas ao mesmo tempo: normalmente não são capturadas.",
          "**Atalhos de arquivo**, os links simbólicos: o Claude Code pula esses caminhos e avisa com `Restored the code, but skipped N files`.",
          "**Tudo o que saiu do seu PC.** O `/rewind` mexe nos arquivos locais e na conversa, e só. Um push para o GitHub, um e-mail ou uma mensagem enviados por um conector, uma página publicada, um arquivo apagado na nuvem, um pacote instalado: continuam feitos."
        ]
      ],
      [
        "h3",
        "Checkpoint e Git: as duas redes"
      ],
      [
        "p",
        "A aula 3.9 pôs os dois lado a lado numa tabela, e a documentação do checkpoint fecha com a mesma frase: ele não substitui o controle de versão. A divisão de trabalho é simples. O checkpoint é para desfazer o último pedido, agora, nesta sessão, quando quem mexeu foi o Claude com as ferramentas dele. O Git é para tudo o resto: qualquer arquivo, quem quer que tenha mudado, de qualquer dia. Daí o hábito das aulas 3.3 e 6.4: um {{commit}} antes de um pedido grande, e principalmente antes de pedir para rodar um script que grava arquivos, que é justamente o que o checkpoint não pega."
      ],
      [
        "h3",
        "Mais três atalhos para desfazer"
      ],
      [
        "p",
        "Três atalhos completam o desfazer. Logo depois de interromper o Claude com Esc, a seta para cima traz de volta o pedido interrompido e volta a conversa ao ponto anterior, num passo só. Se você deu {{clear|/clear}} sem querer, o menu do `/rewind` mostra no topo uma linha `/resume <session-id> (previous session)`, que retoma a conversa de antes do `/clear`, enquanto você não sair do Claude Code. E, para tentar outro caminho sem perder o original, o certo não é voltar e apagar: é ramificar a sessão, assunto da aula 7.16."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Custa?** Abrir o menu e restaurar não chamam o modelo. Os resumos chamam, e reenviar o pedido depois de voltar gasta como qualquer pedido.",
          "**Preciso ligar alguma coisa?** Não: o checkpoint é automático, em toda sessão do terminal e do painel do VS Code.",
          "**E se eu voltar demais?** A documentação não descreve um \"refazer\". Antes de voltar muitos passos de um trabalho que talvez você queira, faça um commit: o estado atual fica guardado no Git.",
          "**Funciona pelo celular?** O `/rewind` é um menu da tela do terminal, e ele não está na lista de comandos que a documentação diz funcionar pelo {{remote-control|Remote Control}}. Desfaça no PC.",
          "**O Restore code apaga o que eu mesmo escrevi depois?** Ele volta os arquivos que o Claude editou ao estado daquele ponto; se você mexeu à mão num desses arquivos depois daquele ponto, a sua mudança também é desfeita. Na dúvida, faça um commit antes de restaurar."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: guardar as fotos por mais tempo e ver o que foi pulado",
          "blocos": [
            [
              "p",
              "A configuração `cleanupPeriodDays` no {{settings-json|settings.json}} muda o prazo da limpeza automática, que é de cerca de 30 dias; manter por mais tempo ocupa mais disco. Para saber quais caminhos uma restauração pulou, ligue o registro de depuração com `/debug` antes de restaurar: cada caminho pulado aparece no arquivo de depuração da sessão."
            ],
            [
              "p",
              "O Claude Code guarda a primeira foto de cada arquivo da sessão mesmo quando descarta checkpoints antigos, porque é ela que o VS Code usa como base para mostrar tudo o que mudou na sessão."
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
          "pergunta": "No mesmo pedido, o Claude editou o index.html com a ferramenta de edição dele e rodou python resumir.py, um script que reescreveu o notas.txt. Os dois arquivos estavam guardados num commit. Você abre o /rewind, escolhe esse pedido e Restore code, e depois roda git status --short. O que você acha que aparece? Depois, use os botões.",
          "codigo": "# depois do Restore code nesse pedido\ngit status --short",
          "linguagem": "powershell",
          "resposta": "Aparece só ` M notas.txt`: o `index.html`, editado pela ferramenta de edição, voltou; o `notas.txt`, reescrito pelo script, continua mudado, porque comando de terminal não entra no checkpoint. O Git, que fotografou a pasta inteira no commit, traz o resto: depois de `git restore notas.txt`, o `git status --short` não mostra nada. As saídas são de execuções reais do git num repositório de teste deixado em cada um desses estados, em 08/11/2026; o efeito do Restore code vem da documentação.",
          "vivo": [
            [
              "Antes do rewind",
              "# antes do rewind: os dois arquivos mudados\ngit status --short",
              " M index.html\n M notas.txt"
            ],
            [
              "Depois de git restore notas.txt",
              "# depois do Restore code e de git restore notas.txt\ngit status --short",
              ""
            ],
            [
              "Voltar ao original",
              "# depois do Restore code nesse pedido\ngit status --short",
              " M notas.txt"
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
          "p": "Num pedido só, o Claude editou o estilo.css com a ferramenta de edição e rodou um comando que apagou a pasta imagens-antigas. Você usa /rewind e escolhe Restore code nesse pedido. O que volta?",
          "o": [
            [
              "Os dois: o checkpoint guarda tudo o que mudou no pedido",
              "O checkpoint rastreia as ferramentas de edição, não os comandos. A pasta apagada pelo comando não volta."
            ],
            [
              "Nenhum: o checkpoint guarda a conversa, nunca os arquivos",
              "O checkpoint guarda os arquivos que o Claude editou com as ferramentas dele; o estilo.css volta."
            ],
            [
              "Só o estilo.css; a pasta apagada pelo comando continua apagada",
              "Isso. Para a pasta, só o Git ajuda, se ela estava num commit."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Já dei push do commit que o Claude fez. Se eu usar o /rewind, o GitHub volta também?\" O Claude respondeu: \"Não. O /rewind só mexe no seu PC e na conversa; o que foi para o GitHub pede git revert e push.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: o /rewind desfaz o push também, se for na mesma sessão",
              "O /rewind não fala com o GitHub. O que saiu do PC continua feito."
            ],
            [
              "Está certa: o /rewind fica no PC, e o que foi enviado pede git revert",
              "Isso. A resposta confere com a documentação e com a aula 3.9. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Está errada: depois do push, o /rewind não volta nem os arquivos do PC",
              "O push não impede o /rewind de voltar os arquivos locais que o Claude editou; ele só não alcança o GitHub."
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
            "\"Escolhi Restore conversation e o código ficou igual.\"",
            "É o que essa opção faz: volta só a conversa. Para os arquivos, Restore code ou Restore code and conversation."
          ],
          [
            "\"Apertei Esc duas vezes e sumiu o que eu tinha digitado.\"",
            "Com texto na caixa, o duplo Esc apaga o texto. A seta para cima o traz de volta; com a caixa vazia, o duplo Esc abre o menu."
          ],
          [
            "\"O menu não oferece Restore code; o checkpoint quebrou.\"",
            "Naquele pedido, nada foi editado pelas ferramentas de edição. Se um comando mudou arquivos, recupere pelo Git."
          ],
          [
            "\"Um subagente estragou os arquivos; o /rewind resolve.\"",
            "Edições de subagente, em geral, não entram nas fotos. Faça um commit antes de delegar uma mudança grande."
          ],
          [
            "\"Voltei demais; vou refazer pelo menu.\"",
            "A documentação não descreve um refazer. Antes de voltar muitos passos, faça um commit."
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
          "p": "Quais são as três opções de restaurar do menu do /rewind, e o que cada uma mantém?",
          "r": [
            "Restore code and conversation: volta os dois.",
            "Restore conversation: volta a conversa e mantém os arquivos como estão.",
            "Restore code: volta os arquivos e mantém a conversa."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que o /rewind não traz de volta?",
          "r": [
            "Arquivos mudados só por comandos do terminal, como um script.",
            "Edições de subagentes, em geral, e mudanças feitas fora do Claude Code.",
            "O que saiu do PC: push, e-mail, mensagem, publicação."
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
          "texto": "Numa pasta com as notas da semana, você pediu ao Claude: \"rode o resumir.py para eu saber quantas reuniões tenho\". Ele rodou e respondeu \"3 reuniões nesta semana\", e você percebeu que o notas.txt agora tem uma linha só. Abriu o /rewind e escolheu esse pedido: a única opção de restaurar que apareceu foi Restore conversation; você escolheu, e o notas.txt continuou com uma linha. Para reproduzir de verdade, cole o bloco abaixo no {{powershell|PowerShell}}: ele cria a pasta C:\\Projetos\\rewind-teste, grava nela o notas.txt e o resumir.py e guarda um commit com os dois (pode aparecer um aviso sobre LF e CRLF, que é inofensivo). Depois, abra o Claude Code nessa pasta, faça o mesmo pedido (se ele pedir permissão para rodar o script, aceite) e tente o /rewind. A saída abaixo é a do script, seguida do git status e do conteúdo do notas.txt depois do /rewind. Por que o checkpoint não trouxe o arquivo de volta, e como recuperar? A parte no Claude Code não foi testada antes de publicar; o bloco, o script e os comandos do git foram rodados de verdade.",
          "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\rewind-teste | Out-Null; Set-Location C:\\Projetos\\rewind-teste\ngit init -q\n@'\nReunião 03/11: aprovar o orçamento da viagem.\nReunião 05/11: revisar o contrato do fornecedor.\nReunião 07/11: decidir a data da apresentação.\n'@ | Set-Content -Encoding utf8 notas.txt\n@'\nfrom pathlib import Path\n\narquivo = Path(\"notas.txt\")\nlinhas = [l for l in arquivo.read_text(encoding=\"utf-8-sig\").splitlines() if l.strip()]\nresumo = f\"{len(linhas)} reuniões nesta semana.\"\nprint(resumo)\narquivo.write_text(resumo + \"\\n\", encoding=\"utf-8\")\nprint(\"Resumo gravado em notas.txt.\")\n'@ | Set-Content -Encoding utf8 resumir.py\ngit add .; git commit -q -m \"Notas originais\"",
          "saida": "3 reuniões nesta semana.\nResumo gravado em notas.txt.\n\nPS> git status --short\n M notas.txt\n\nPS> Get-Content -Encoding utf8 notas.txt\n3 reuniões nesta semana.",
          "dica": "Pense em quem mudou o notas.txt e com qual ferramenta. Releia o primeiro item de \"O que não volta\" e lembre do commit que o bloco guardou.",
          "resposta": "Quem reescreveu o notas.txt foi o resumir.py, um programa que o Claude rodou pelo terminal, e não as ferramentas de edição dele. O checkpoint só fotografa o que passa por essas ferramentas; como nada foi editado por elas naquele pedido, o menu nem ofereceu Restore code, e Restore conversation volta só a conversa, mantendo os arquivos como estão. O defeito de origem está no script: ele grava o resumo no mesmo arquivo que leu. Quem salva é o Git: o bloco guardou um commit com as notas originais, e `git restore notas.txt` traz o arquivo de volta; conferido de verdade em 08/11/2026: o git status fica vazio e as três linhas voltam. Sem aquele commit, as notas estariam perdidas. Para não repetir: commit antes de pedir para rodar um script que grava arquivos, e, para consertar o script, peça que ele grave o resumo num arquivo novo, como resumo.txt.",
          "naoTestado": "A conversa com o Claude Code e o menu do /rewind não foram rodados: exigem o Claude Code interativo, que não foi usado nos testes deste módulo. O comportamento do menu (sem Restore code quando nada foi editado pelas ferramentas de edição) vem da página oficial de checkpoints, conferida em 08/11/2026. O bloco de preparação, o script, o git status, o Get-Content e o git restore foram rodados de verdade em 08/11/2026, no PowerShell 5.1, com Python 3.12 e Git 2.54."
        }
      ],
      [
        "fontes",
        [
          [
            "Checkpointing (quando o checkpoint é tirado, as ações do menu, 100 checkpoints, cerca de 30 dias, limitações), Claude Code",
            "https://code.claude.com/docs/pt/checkpointing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/rewind e os apelidos /checkpoint e /undo), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Use Claude Code in VS Code (retroceder com checkpoints pelo botão da mensagem), Claude Code",
            "https://code.claude.com/docs/pt/vs-code",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Continue sessões locais de qualquer dispositivo com Remote Control (comandos que funcionam pelo celular), Claude Code",
            "https://code.claude.com/docs/pt/remote-control",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.73: seta para cima depois de interromper; 2.1.191: voltar a conversa de antes do /clear; 2.1.309: sed -i deixa de voltar com o /rewind)",
            "https://code.claude.com/docs/en/changelog",
            "oficial",
            "08/11/2026"
          ],
          [
            "Pro Git 2.4, Desfazendo coisas (restore)",
            "https://git-scm.com/book/pt-br/v2/Fundamentos-do-Git-Desfazendo-Coisas",
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
          "O checkpoint é uma cópia da pasta inteira e dispensa o Git para quem usa o Claude",
          "Ele cobre só o que as ferramentas de edição do Claude mexeram, e a própria documentação diz que não substitui o Git."
        ],
        [
          "O checkpoint volta só a conversa; para os arquivos, o único caminho é sempre o Git",
          "Ele volta também os arquivos que o Claude editou com as ferramentas dele, com Restore code."
        ],
        [
          "O checkpoint desfaz rápido o que o Claude editou nesta sessão; o resto pede Git",
          "Isso. Comandos, subagentes, mudanças suas e o que saiu do PC ficam de fora do checkpoint."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Com a caixa de texto vazia, você aperta Esc duas vezes. O que acontece?",
        "o": [
          [
            "O Claude Code fecha a sessão e salva a conversa",
            "Esc não fecha a sessão. Com a caixa vazia, o duplo Esc abre o menu de voltar."
          ],
          [
            "Abre o menu do /rewind, com os seus pedidos",
            "Isso. É a outra porta para o mesmo menu do /rewind."
          ],
          [
            "O último arquivo editado volta sozinho, sem menu",
            "Nada volta sem você escolher o ponto e a ação no menu."
          ]
        ],
        "c": 1
      },
      {
        "p": "Qual destas mudanças o Restore code consegue desfazer?",
        "o": [
          [
            "Um commit que o Claude fez e já mandou ao GitHub com o push",
            "O que foi para o GitHub fica lá: o /rewind não alcança fora do PC."
          ],
          [
            "Uma planilha que um script rodado pelo Claude reescreveu",
            "Mudança feita por comando de terminal não entra no checkpoint."
          ],
          [
            "Um arquivo que o Claude editou com a ferramenta de edição",
            "Isso. É exatamente o que o checkpoint fotografa antes de cada pedido."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre Restore code e Restore conversation?",
        "Restore code volta os arquivos que o Claude editou e mantém a conversa, então ele ainda sabe o que tentou. Restore conversation volta a conversa e mantém os arquivos como estão. Restore code and conversation faz as duas coisas."
      ],
      [
        "Por que o /rewind não desfez o que o script fez?",
        "Porque o checkpoint só fotografa o que passa pelas ferramentas de edição do Claude. Um script rodado no terminal reescreve o arquivo por fora. Para isso, use o Git: se o arquivo estava num commit, git restore traz de volta."
      ],
      [
        "Preciso fazer commit se já tenho o /rewind?",
        "Precisa, principalmente antes de pedir algo grande ou de rodar um script que grava arquivos. O checkpoint cobre só o que o Claude editou com as ferramentas dele, nesta sessão, por uns 30 dias; o Git cobre a pasta inteira, para sempre."
      ]
    ]
  },
  "7-16": {
    "tempo": 41,
    "video": "a7-16",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já fechou o {{terminal}} no meio de um trabalho e, no dia seguinte, teve de explicar tudo de novo ao {{claude-code|Claude Code}}. Ou foi procurar uma conversa de cinco semanas atrás, e ela simplesmente não estava mais lá.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Cada conversa com o Claude Code é uma {{sessao|sessão}}, e ele grava cada sessão no seu PC enquanto você trabalha. Com isso, dá para voltar a uma conversa de ontem exatamente de onde parou, dar a ela um nome para achar depois, tirar uma cópia para testar outro caminho sem estragar o original e salvar uma versão legível para guardar. Quem não sabe disso recomeça do zero, explica de novo o que já tinha explicado e gasta o {{limite-de-uso|limite}} duas vezes com a mesma coisa."
      ],
      [
        "p",
        "Há uma armadilha que quase ninguém percebe: por padrão, as gravações somem depois de 30 dias, sem aviso. A conversa em que você decidiu a estrutura de um projeto, ou em que o Claude explicou um erro difícil, simplesmente deixa de existir no mês seguinte. Esta aula mostra como guardar o que importa antes disso, e como mudar o prazo se você quiser."
      ],
      [
        "p",
        "E há um cuidado de segurança. As gravações ficam em {{texto-puro|texto puro}}, numa {{pasta}} do seu usuário, e guardam tudo o que passou pela conversa, inclusive o conteúdo de um {{arquivo}} que o Claude leu. Se ele leu um {{env|.env}} com uma chave, a chave está lá, legível. Saber onde ficam essas gravações faz parte de cuidar dos seus segredos."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao estagiário da aula 0.0 e ao expediente da aula 7.1: cada sessão é um expediente dele numa sala, a pasta em que você abriu o Claude Code. Agora acrescente uma secretária, que escreve a **ata** de cada expediente: tudo o que você pediu, tudo o que ele leu e respondeu, em ordem. As atas vão para o arquivo do prédio, numa gaveta para cada sala. **Retomar** é entregar a ata ao estagiário: ele relê tudo e continua de onde parou. **Dar nome** é escrever uma etiqueta na capa. **Ramificar** é tirar uma cópia da ata até aquele ponto e seguir por outro caminho na cópia, com a original intacta. **Exportar** é imprimir uma via legível para guardar fora do arquivo. E o zelador tritura, sem avisar, toda ata com mais de 30 dias."
      ],
      [
        "quebra",
        "Uma ata é só papel; aqui, a cópia de uma sessão copia a conversa, e não os arquivos da sala: a ata original e a cópia mexem nos mesmos papéis, e o que o estagiário muda numa aparece na outra. Retomar também não é de graça: ele relê a ata inteira, e isso gasta limite, mais ainda depois de uma pausa longa. E o arquivo do prédio não é um cofre: as atas estão em texto puro, e qualquer pessoa ou programa com acesso à sua pasta de usuário lê tudo o que está nelas."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Onde as sessões ficam"
      ],
      [
        "p",
        "O Claude Code grava cada sessão num arquivo de {{transcricao|transcrição}} dentro de `C:\\Users\\SeuNome\\.claude\\projects`, com uma subpasta para cada pasta de trabalho. O nome da subpasta é o caminho da pasta com todo caractere que não é letra nem número trocado por um hífen: uma sessão aberta em `C:\\Projetos\\site` vai para `C--Projetos-site`. Dentro dela, cada sessão é um arquivo com a extensão `.jsonl`: um objeto {{json|JSON}} por linha, com as mensagens, as ferramentas usadas, os resultados, e até as instruções que o Claude Code mandou ao {{modelo}}. Os {{subagente|subagentes}} ganham transcrições próprias, numa subpasta da sessão, e por isso são a maior parte dos arquivos."
      ],
      [
        "p",
        "A documentação avisa que esse formato é interno e muda entre versões. Você pode abrir um desses arquivos no Bloco de Notas, mas não é feito para você ler, e um {{script}} que dependa dele pode quebrar na próxima atualização. Para ler ou guardar uma conversa, existe o `/export`, mais abaixo. E cada porta do Claude Code tem a sua lista: o terminal, o {{app-desktop|app desktop}}, a extensão do {{vs-code|VS Code}} e o claude.ai/code guardam listas separadas. O app desktop consegue abrir uma sessão do terminal; o VS Code, desde a versão 2.1.265, de 08/09/2026, arquiva (sem apagar) as sessões paradas há 14 dias."
      ],
      [
        "h3",
        "Retomar: quatro portas"
      ],
      [
        "p",
        "Há quatro jeitos de voltar a uma sessão, com quatro {{comando|comandos}}, e eles servem a momentos diferentes:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Comando",
            "O que faz",
            "Quando usar"
          ],
          "linhas": [
            [
              "`claude --continue`",
              "Reabre a sessão mais recente da pasta atual",
              "Você fechou o terminal sem querer e quer voltar já"
            ],
            [
              "`claude --resume`",
              "Abre o seletor, com as sessões da pasta",
              "Você quer escolher entre várias"
            ],
            [
              "`claude --resume nome`",
              "Reabre direto a sessão com esse nome",
              "Você deu nome à sessão, como mostra a próxima seção"
            ],
            [
              "{{resume|/resume}}",
              "Troca de conversa sem sair do Claude Code",
              "Você está numa sessão e quer ir para outra"
            ]
          ]
        }
      ],
      [
        "p",
        "Um caso do começo ao fim: ontem você pediu ao Claude que montasse um guia de juros numa pasta, e fechou o terminal no meio. Hoje, você abre o {{powershell|PowerShell}}, entra na mesma pasta e digita `claude --continue`. A conversa de ontem reaparece na tela, e você escreve \"continue de onde parou\". Por baixo, o Claude Code leu o arquivo da transcrição e mandou a conversa inteira de novo ao modelo, que não lembra de nada entre um pedido e outro, como a aula 1.2 mostrou."
      ],
      [
        "p",
        "O que volta junto: a conversa (se ela foi compactada, o Claude continua a partir do resumo), o modelo que estava em uso e, em geral, o modo de {{permissao|permissão}}. Há exceções. Uma sessão que estava no {{bypass}} não volta ao bypass por conta própria: retoma no modo em que uma sessão nova começaria, e, se o seu {{settings-json|settings.json}} já abre em bypass, é nele que ela começa. Não voltam as {{flag|opções}} que você passou ao abrir, como `--add-dir`, nem uma ferramenta que estava {{rodar|rodando}} quando o programa fechou. No seletor, as setas escolhem, Enter abre, a barra de espaço mostra uma amostra da conversa, Ctrl+R renomeia, Ctrl+A mostra as sessões de todas as pastas do PC e a barra `/` abre a busca. As sessões criadas com `claude -p`, da aula 7.10, ficam fora do seletor e só voltam pelo número da sessão."
      ],
      [
        "p",
        "Desde a versão 2.1.304, de 19/10/2026, nos planos Pro, Max e Ultra, retomar uma conversa longa depois de uma pausa grande, ou noutro modelo, pode abrir a pergunta \"Resume this conversation?\", com uma estimativa da fatia do limite de 5 horas que essa conversa vai gastar. **Resume** continua nela; **Start a new conversation** começa outra, mais barata, e a antiga continua no seletor. O gasto acontece na primeira mensagem depois de retomar, e não ao escolher."
      ],
      [
        "h3",
        "Dar nome"
      ],
      [
        "p",
        "Sessão sem nome vira uma linha parecida com outras dez no seletor. Há três jeitos de dar nome: abrir já com nome, com `claude -n juros-guia`; renomear durante a sessão, com {{rename-comando|/rename juros-guia}}, que também mostra o nome na barra do prompt; ou, no seletor, destacar a sessão e apertar Ctrl+R. Com nome, `claude --resume juros-guia` vai direto a ela. Se dois nomes coincidirem, o seletor abre já filtrado por esse nome, para você escolher."
      ],
      [
        "p",
        "Quem não dá nome ainda recebe um título gerado pelo Claude Code, um resumo curto do primeiro pedido escrito por um modelo pequeno, e esse título também serve para retomar. O que não serve é o apelido curto que aparece em algumas listas, como `site-3f`, feito do nome da pasta com dois caracteres no fim. Prefira nomes curtos, sem espaço, que digam o assunto."
      ],
      [
        "h3",
        "Ramificar: uma cópia da conversa"
      ],
      [
        "p",
        "Você está no meio de um guia e quer testar uma versão mais curta sem perder a conversa como está. O {{branch-comando|/branch}}, que a aula 6.6 apresentou, seguido de um nome opcional, como `/branch guia-curto`, copia a conversa até aquele ponto, passa você para a cópia e deixa a original intacta no disco e no seletor. A confirmação mostra dois números de sessão: o da cópia, em que você está, e o da original, para voltar com `/resume`. Pela linha de comando, o mesmo se faz com `claude --continue --fork-session`."
      ],
      [
        "p",
        "O cuidado que derruba quase todo mundo: a cópia é da conversa, **não dos arquivos**. Se o Claude reescrever o `guia.md` na cópia e você voltar à original, o `guia.md` continua reescrito, porque é o mesmo arquivo na mesma pasta. Para testar mudanças nos arquivos sem misturar, o caminho é o {{git|Git}}: um {{commit}} antes, ou uma {{worktree}}, da aula 7.9. Outros detalhes: as liberações \"permitir para esta sessão\" passam para a cópia, e trabalhos em {{segundo-plano|segundo plano}} que estavam rodando continuam e entregam o resultado na cópia. E duas janelas retomando a mesma sessão sem ramificar misturam as mensagens das duas numa transcrição só."
      ],
      [
        "p",
        "Atenção ao nome antigo. Até a versão 2.1.77, de 17/03/2026, este comando se chamava `/fork`. Hoje o `/fork` faz outra coisa: copia a conversa para uma sessão nova em segundo plano e deixa você continuar na atual. Se um tutorial antigo mandar usar `/fork` para ramificar, use `/branch`."
      ],
      [
        "h3",
        "/clear e /compact, do ponto de vista da sessão"
      ],
      [
        "p",
        "A aula 5.3 mostrou quando limpar e quando compactar a conversa. Do ponto de vista das sessões, a diferença é esta: o {{clear|/clear}} encerra a sessão atual e começa outra, vazia; a anterior fica gravada e volta com `/resume`. Com `/clear nome`, você dá um nome à sessão que está deixando. Já o {{compact|/compact}} continua na mesma sessão: troca o histórico por um resumo. E o `/recap` escreve, sob encomenda, um resumo de uma linha do que já aconteceu; ele também aparece sozinho quando você volta depois de alguns minutos fora, se a sessão já tem pelo menos três rodadas."
      ],
      [
        "h3",
        "Exportar: uma via para guardar"
      ],
      [
        "p",
        "O {{export-comando|/export}} abre um menu para copiar a conversa para a área de transferência ou salvar num arquivo de texto, com as mensagens e as saídas das ferramentas escritas de um jeito legível. Com um nome, como `/export guia-juros.txt`, ele salva direto, sem menu. É a via para guardar fora do prazo de 30 dias, mandar a alguém ou colar no Obsidian. Para o que precisa ser seguido no futuro, um resumo das decisões vale mais que a conversa inteira: peça ao Claude que escreva as decisões num arquivo do projeto, e as regras que devem valer sempre no {{claude-md|CLAUDE.md}}, como na aula 7.5."
      ],
      [
        "h3",
        "Os 30 dias, e como mudar"
      ],
      [
        "p",
        "O prazo vem da configuração `cleanupPeriodDays`, cujo padrão é 30. A limpeza roda em segundo plano logo depois que uma sessão começa, apaga as transcrições mais velhas que o prazo sem mostrar mensagem, e elas deixam de aparecer no `/resume`. Os {{checkpoint|checkpoints}} do {{rewind|/rewind}}, da aula 7.15, somem junto. Para mudar, ponha a chave no settings.json do seu usuário, por exemplo `\"cleanupPeriodDays\": 90`. O mínimo é 1, e 0 é recusado como erro. Mais dias guardados também quer dizer mais tempo com segredos em texto puro no disco: se você mudar, a troca é consciente."
      ],
      [
        "p",
        "As sessões que você começou no app desktop ou no Cowork seguem outra regra: ficam guardadas sem prazo, a menos que você defina `desktopSessionCleanupPeriodDays`. E, para apagar já tudo o que o Claude Code guardou de um projeto, existe o comando `claude purge`, que mostra o plano completo e pede confirmação antes de apagar; com `--dry-run`, ele só mostra."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Perco a conversa se fechar o terminal?** Não. A gravação é contínua; `claude --continue` traz de volta. Só não volta uma ferramenta que estava no meio do trabalho quando o programa fechou.",
          "**Retomar custa?** Custa: o Claude relê a conversa inteira. Com o {{cache}} ainda válido, a releitura sai com desconto; depois de uma pausa longa, sai cheia, e é por isso que aparece a pergunta \"Resume this conversation?\".",
          "**Posso retomar no celular?** A lista do terminal não aparece no app do celular. Para dirigir de longe uma sessão do PC, o caminho é o {{remote-control|Remote Control}}, da aula 7.12.",
          "**E se eu apagar a pasta do projeto?** A transcrição continua em `.claude\\projects`. `claude --resume` seguido do número da sessão procura em todas as pastas do PC, e, se a pasta original não existe mais, retoma na pasta atual.",
          "**Dá para desligar a gravação?** Dá, com a {{variavel|variável}} `CLAUDE_CODE_SKIP_PROMPT_HISTORY`, mas aí nada mais volta pelo `/resume`. Para a maioria dos casos, encurtar o prazo é a troca melhor."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: sessões para scripts",
          "blocos": [
            [
              "p",
              "Um script pode mandar uma pergunta a uma sessão existente com `claude -p --resume <número> --output-format json \"resuma o que mudamos\"` e ler a resposta estruturada, como na aula 7.10. Os {{hook|hooks}} e a linha de status recebem o campo `transcript_path`, com o caminho da transcrição, e um hook do evento SessionEnd pode arquivar a transcrição quando a sessão termina."
            ],
            [
              "p",
              "Duas variáveis mudam o lugar das gravações: `CLAUDE_CONFIG_DIR` move tudo o que fica em `.claude` para outra pasta, e `CLAUDE_CODE_PROJECT_DIR_NAME`, junto com ela, fixa o nome da subpasta do projeto. Servem para quem embute o Claude Code em outro programa; no uso normal, não mexa nelas."
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
          "pergunta": "Estes comandos, colados no PowerShell, só leem a pasta das transcrições, sem mudar nada. O que você acha que aparece? A primeira linha guarda a lista de arquivos; a segunda mostra quantos são; as outras duas, a idade em dias do arquivo mais velho.",
          "codigo": "$arquivos = Get-ChildItem \"$env:USERPROFILE\\.claude\\projects\" -Recurse -Filter *.jsonl -File\n$arquivos.Count\n$velho = $arquivos | Sort-Object LastWriteTime | Select-Object -First 1\n[math]::Floor(((Get-Date) - $velho.LastWriteTime).TotalDays)",
          "linguagem": "powershell",
          "resposta": "Dois números. O primeiro é quantas transcrições existem; no PC em que esta aula foi testada, em 08/11/2026, eram 1.317, e no seu será outro. O segundo é a idade do arquivo mais velho: 30 dias, porque a limpeza apaga o que passa do prazo cada vez que uma sessão começa. Use os botões: sem as transcrições de subagentes, sobram 120, o que mostra que a maior parte dos arquivos é deles; e o arquivo mais novo tem 0 dias, a sessão de hoje.",
          "vivo": [
            [
              "Rodar como está",
              "$arquivos = Get-ChildItem \"$env:USERPROFILE\\.claude\\projects\" -Recurse -Filter *.jsonl -File\n$arquivos.Count\n$velho = $arquivos | Sort-Object LastWriteTime | Select-Object -First 1\n[math]::Floor(((Get-Date) - $velho.LastWriteTime).TotalDays)",
              "1317\n30"
            ],
            [
              "Contar só as sessões, sem subagentes",
              "$arquivos = Get-ChildItem \"$env:USERPROFILE\\.claude\\projects\" -Recurse -Filter *.jsonl -File\n($arquivos | Where-Object { $_.FullName -notmatch '\\\\subagents\\\\' }).Count",
              "120"
            ],
            [
              "Idade do arquivo mais novo",
              "$arquivos = Get-ChildItem \"$env:USERPROFILE\\.claude\\projects\" -Recurse -Filter *.jsonl -File\n$novo = $arquivos | Sort-Object LastWriteTime | Select-Object -Last 1\n[math]::Floor(((Get-Date) - $novo.LastWriteTime).TotalDays)",
              "0"
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
          "p": "Você usou /branch para testar uma versão curta do guia, o Claude reescreveu guia.md na cópia, e você voltou à conversa original com /resume. Como está o guia.md agora?",
          "o": [
            [
              "Na versão longa, porque voltar à original devolve os arquivos daquele ponto",
              "O /resume troca de conversa, não de arquivos. Quem volta arquivos é o /rewind ou o Git."
            ],
            [
              "Na versão curta: a cópia é só da conversa, e o arquivo é o mesmo",
              "Isso. As duas conversas mexem nos mesmos arquivos da pasta. Para testar arquivos sem misturar, faça um commit antes ou use uma worktree."
            ],
            [
              "Nas duas versões, porque o /branch criou uma cópia do guia para a nova conversa",
              "O /branch não copia nenhum arquivo da pasta: existe um guia.md só, e ele está na versão curta."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se podia fechar o terminal e voltar à conversa no mês que vem, e o Claude respondeu: \"Pode fechar com tranquilidade. Conferi como o Claude Code funciona: cada sessão fica gravada no seu PC, numa pasta do seu usuário, e não se perde quando o terminal fecha. Quando quiser, digite claude --resume, escolha a conversa na lista e continue de onde parou, seja amanhã ou daqui a alguns meses.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: as sessões ficam gravadas 30 dias, por padrão, e depois somem sem aviso",
              "Isso. A gravação existe, mas o prazo padrão é de 30 dias. Para daqui a alguns meses, exporte com /export, ou aumente o cleanupPeriodDays."
            ],
            [
              "Errado: fechar o terminal apaga a sessão, que só fica salva com o /export",
              "A gravação é contínua e sobrevive ao terminal fechado: amanhã, o claude --resume funciona. O problema está no prazo."
            ],
            [
              "Está certa: o claude --resume abre qualquer sessão já feita neste PC",
              "Ele abre as sessões que ainda existem. As que passaram de 30 dias foram apagadas pela limpeza e não aparecem."
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
            "\"Fechei o terminal e perdi a conversa.\"",
            "A sessão continua gravada. Na mesma pasta, `claude --continue` reabre a mais recente."
          ],
          [
            "\"Fiz /branch, então posso testar à vontade nos arquivos.\"",
            "O /branch copia a conversa, não os arquivos. Faça um commit antes, ou use uma worktree."
          ],
          [
            "\"Daqui a dois meses eu acho essa conversa.\"",
            "Depois de 30 dias, por padrão, ela some. Exporte com /export ou peça um resumo das decisões num arquivo."
          ],
          [
            "\"Retomar uma conversa longa é de graça.\"",
            "O Claude relê tudo. Depois de uma pausa longa, sem o desconto do cache: por isso aparece a estimativa do limite."
          ],
          [
            "\"Usei o /fork do tutorial para ramificar.\"",
            "Hoje o /fork manda uma cópia para o segundo plano. Para ramificar e seguir na cópia, use /branch."
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
          "p": "O que acontece com uma sessão depois de 30 dias?",
          "r": [
            "A transcrição é apagada sem aviso, numa limpeza que roda quando uma sessão começa.",
            "Ela some do seletor do /resume.",
            "O prazo muda com cleanupPeriodDays; para guardar de vez, use /export."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são os jeitos de voltar a uma sessão?",
          "r": [
            "claude --continue reabre a mais recente da pasta.",
            "claude --resume abre o seletor; com um nome, vai direto à sessão.",
            "/resume troca de conversa sem sair do Claude Code."
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
          "titulo": "Uma sessão com nome, uma cópia e uma via exportada",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "15 minutos",
          "antes": "Você vai abrir uma sessão já com nome numa pasta de teste, sair, voltar a ela pelo nome, ramificar a conversa, ver com os próprios olhos que o arquivo é o mesmo nas duas, e exportar a conversa para um arquivo de texto. Precisa do Claude Code instalado e logado. Nada fora da pasta C:\\Projetos\\sessoes-teste é tocado. Se ele pedir permissão para criar ou editar arquivos, aceite. O passo 1 foi rodado de verdade no PowerShell 5.1, em 08/11/2026. Os passos com o Claude Code não foram testados antes de publicar: foram escritos a partir da documentação oficial, conferida em 08/11/2026, e as frases exatas podem variar.",
          "naoTestado": "Os passos 2 a 13 exigem o Claude Code interativo com login, que não foi aberto nos testes deste módulo: rodar o programa no PC do teste usaria a conta e as configurações do dono. O que deve acontecer vem das páginas oficiais Gerenciar sessões, Comandos e Referência da CLI, conferidas em 08/11/2026.",
          "passos": [
            {
              "faz": "No PowerShell, cole este comando, que cria a pasta de teste e entra nela.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\sessoes-teste | Out-Null; Set-Location C:\\Projetos\\sessoes-teste",
              "espera": "Só o cursor, agora com o caminho C:\\Projetos\\sessoes-teste."
            },
            {
              "faz": "Abra o Claude Code já com nome. Se ele perguntar se você confia na pasta, aceite.",
              "cola": "claude -n juros-teste",
              "espera": "O Claude Code abre na pasta. O nome juros-teste aparece no título da aba do terminal."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Crie notas.md com três linhas sobre juros simples, com o exemplo de R$ 1.000 a 1% ao mês por 12 meses.",
              "espera": "O arquivo notas.md aparece na pasta, com três linhas."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "espera": "Você volta ao PowerShell. Na saída, o Claude Code mostra uma dica com o comando para retomar a sessão."
            },
            {
              "faz": "Volte à sessão pelo nome.",
              "cola": "claude --resume juros-teste",
              "espera": "A conversa anterior reaparece, com o seu pedido e a resposta. Se abrir o seletor, escolha juros-teste na lista."
            },
            {
              "faz": "Ramifique a conversa:",
              "cola": "/branch juros-curto",
              "espera": "Uma confirmação com dois números de sessão: o da cópia, em que você está agora, e o da original."
            },
            {
              "faz": "Na cópia, cole este pedido:",
              "cola": "Reescreva notas.md em uma linha só.",
              "espera": "O Claude reescreve o arquivo, que passa a ter uma linha."
            },
            {
              "faz": "Volte à conversa original:",
              "cola": "/resume juros-teste",
              "espera": "A conversa original aparece, sem o pedido de reescrever em uma linha."
            },
            {
              "faz": "Na original, cole este pedido:",
              "cola": "Mostre o conteúdo atual de notas.md, sem mudar nada.",
              "espera": "O Claude mostra a versão de uma linha só. A conversa voltou; o arquivo, não: é o mesmo nas duas conversas."
            },
            {
              "faz": "Exporte a conversa original:",
              "cola": "/export juros-teste.txt",
              "espera": "Uma confirmação de que a conversa foi salva no arquivo juros-teste.txt."
            },
            {
              "faz": "Digite /exit e aperte Enter.",
              "espera": "Você volta ao PowerShell, na pasta C:Projetossessoes-teste."
            },
            {
              "faz": "Liste os arquivos da pasta.",
              "cola": "Get-ChildItem -Name",
              "espera": "Aparecem notas.md e juros-teste.txt. Se o arquivo exportado não estiver na lista, abra o Claude Code de novo com claude --resume juros-teste e pergunte onde ele foi salvo."
            },
            {
              "faz": "Abra o seletor de sessões, só para olhar.",
              "cola": "claude --resume",
              "espera": "A lista mostra juros-teste e juros-curto, cada uma com o tempo desde a última atividade. Esc fecha a lista sem abrir nenhuma."
            }
          ],
          "errado": "se `claude --resume juros-teste` disser que não achou a conversa, confira se você está na pasta C:\\Projetos\\sessoes-teste: a busca por nome começa pela pasta atual. Se aparecer a pergunta \"Resume this conversation?\", escolha Resume; neste teste, a conversa é curta e gasta pouco. Se o /branch não for reconhecido, rode /help e confira o nome na sua versão. Se aparecerem mais sessões do que as duas do laboratório no passo 13, são de outros testes na mesma pasta."
        }
      ],
      [
        "fontes",
        [
          [
            "Gerenciar sessões (retomar, nomear, ramificar, exportar, onde ficam as transcrições), Claude Code",
            "https://code.claude.com/docs/pt/sessions",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/rename, /resume, /branch, /fork, /export, /clear, /recap), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência da CLI (-n, --continue, --resume, --fork-session), Claude Code",
            "https://code.claude.com/docs/pt/cli-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Explore o diretório .claude (limpeza automática de 30 dias, texto simples, claude purge), Claude Code",
            "https://code.claude.com/docs/pt/claude-directory",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência de configurações (cleanupPeriodDays: padrão 30, mínimo 1), Claude Code",
            "https://code.claude.com/docs/pt/settings-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code usa prompt caching (o custo de retomar uma sessão), Claude Code",
            "https://code.claude.com/docs/pt/prompt-caching",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.77, de 17/03/2026: /fork vira /branch; 2.1.265, de 08/09/2026: o VS Code arquiva sessões paradas há 14 dias; 2.1.304, de 19/10/2026: aviso ao retomar conversa parada); sem versão em português",
            "https://code.claude.com/docs/en/changelog",
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
          "As sessões ficam gravadas para sempre, e o /branch copia a conversa e também os arquivos",
          "Duas coisas erradas: a gravação dura 30 dias, por padrão, e o /branch copia só a conversa."
        ],
        [
          "Só o /export grava a conversa; sem ele, fechar o terminal apaga a sessão",
          "A gravação é automática e contínua. O /export serve para guardar uma via legível além do prazo."
        ],
        [
          "Toda sessão fica gravada por 30 dias: dá para nomear, retomar, ramificar e exportar",
          "Isso. E o que precisa durar mais que o prazo vai para um arquivo exportado ou para as suas notas."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Qual comando reabre direto a sessão mais recente da pasta em que você está?",
        "o": [
          [
            "claude --continue",
            "Isso. Ele reabre a última sessão daquela pasta, sem seletor."
          ],
          [
            "claude --resume",
            "Sozinho, ele abre o seletor para você escolher; com um nome, vai direto à sessão com esse nome."
          ],
          [
            "claude --branch",
            "Não existe essa opção. Para copiar a conversa ao retomar, use --fork-session."
          ]
        ],
        "c": 0
      },
      {
        "p": "Você quer guardar uma conversa importante por mais de 30 dias, sem mudar nenhuma configuração. O que faz?",
        "o": [
          [
            "Renomeia com /rename, porque sessão com nome não é apagada",
            "O nome ajuda a achar, mas a limpeza apaga sessões com ou sem nome."
          ],
          [
            "Faz /branch, porque a cópia ganha um prazo novo de 30 dias",
            "A cópia também é uma sessão gravada, e some no mesmo prazo de 30 dias."
          ],
          [
            "Salva com /export num arquivo, que fica fora da limpeza",
            "Isso. O arquivo exportado é seu e não entra na limpeza automática."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como volto a uma conversa de ontem?",
        "Abra o PowerShell na mesma pasta e digite claude --continue, para a mais recente, ou claude --resume, para escolher na lista. Se você tinha dado um nome, claude --resume seguido do nome vai direto."
      ],
      [
        "O /branch copia os arquivos?",
        "Não. Ele copia só a conversa. Os arquivos da pasta são os mesmos para a original e para a cópia; para testar mudanças nos arquivos sem misturar, faça um commit antes ou use uma worktree."
      ],
      [
        "Por que uma conversa antiga sumiu?",
        "Por padrão, o Claude Code apaga as transcrições com mais de 30 dias, sem avisar. Para guardar uma conversa, use /export; para mudar o prazo, a chave cleanupPeriodDays no settings.json do seu usuário."
      ]
    ]
  },
  "7-17": {
    "tempo": 42,
    "video": "a7-17",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já viu o {{limite-de-uso|limite de 5 horas}} acabar no meio da tarde sem entender o que gastou tanto, ou trocou de {{modelo}} no meio de uma tarefa e a resposta seguinte demorou mais que todas as outras. Esta aula mostra os três controles de custo do {{claude-code|Claude Code}}, o modelo, o esforço e o modo rápido, e as ações que jogam fora o desconto do {{cache}}.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Cada pedido ao Claude Code tem um preço, e no seu plano esse preço sai do limite de 5 horas e do semanal, como a aula 7.14 mostrou. Três controles decidem quanto cada pedido pesa: qual modelo responde, quanto ele pensa antes de responder e se ele responde no modo rápido, mais caro. Um quarto fator trabalha escondido: o cache, um desconto grande para reler a parte da conversa que não mudou. Algumas ações jogam esse desconto fora, e o pedido seguinte sai cheio."
      ],
      [
        "p",
        "A aula 5.4 comparou os modelos e apresentou o esforço; esta aula é a prática no seu PC: os {{comando|comandos}}, as teclas e as armadilhas. A maior delas é silenciosa: digitar `/model sonnet` para uma tarefa rápida muda o seu padrão para todas as {{sessao|sessões}} seguintes. A segunda é cara: o modo rápido não sai do limite do plano, sai dos {{uso-extra|créditos de uso}}, cobrados à parte, mesmo quando ainda sobra limite. É o único dos três controles que pode virar dinheiro na fatura."
      ],
      [
        "p",
        "Saber ler o efeito de cada escolha também importa. O {{usage|/usage}} mostra quanto a sessão gastou e quanto da conversa veio do cache. Com isso, \"o limite acabou sem motivo\" vira uma pergunta com resposta: troquei de modelo três vezes? Deixei a conversa parada uma hora e voltei? Liguei algo que mudou as ferramentas?"
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte à equipe do escritório de consultoria da aula 5.4: o Haiku, analista rápido e barato; o Sonnet, analista experiente; o Opus, consultor sênior, que atende quando ninguém escolhe outro; e o Fable, o sócio, para o que é mais difícil. No Claude Code, o {{model|/model}} escolhe quem da equipe atende você. O {{effort|/effort}} diz quanto tempo esse consultor pensa antes de responder. O {{modo-rapido|modo rápido}} é pagar a taxa de urgência para o mesmo sênior entregar mais depressa. E volte à pasta da aula 1.2: a cada pedido, a pasta inteira da conversa vai junto, e o consultor que acabou de lê-la relê com desconto. Trocar de consultor no meio da conversa obriga o novo a ler a pasta inteira do zero, sem desconto."
      ],
      [
        "quebra",
        "Um consultor lembra do que leu ontem; aqui, o desconto não está na cabeça de ninguém, está guardado no {{servidor}}, e vence: uma hora sem uso no seu plano, ou cinco minutos quando o pedido sai dos créditos de uso. O esforço também não é tempo de relógio: é quanto o modelo raciocina, medido em {{token|tokens}}. E a troca de consultor não é a única coisa que derruba o desconto: ligar o modo rápido ou mudar as ferramentas disponíveis também derrubam, mesmo com o mesmo modelo. Nos modelos 5.5, mudar o esforço não derruba; em modelos mais antigos, derruba."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O modelo: /model"
      ],
      [
        "p",
        "Nos planos Pro, Max e Ultra, o modelo padrão do Claude Code é o Opus 5.5, desde a versão 2.1.280, de 22/09/2026, segundo a documentação conferida em 08/11/2026. Você troca com apelidos, que apontam sempre para a versão mais recente de cada família: `opus`, `sonnet`, `haiku` e `fable`. O Fable nunca é o padrão: você escolhe, e, dependendo do plano, ele pode ser cobrado dos créditos de uso, caso em que o seletor mostra \"Requer créditos de uso\" na linha dele."
      ],
      [
        "p",
        "O detalhe que pega: o `/model` sem nada abre um seletor, e ali **Enter troca e salva como padrão**, gravando a chave `model` no {{settings-json|settings.json}} do seu usuário; a tecla **s** troca só nesta sessão. Digitar `/model sonnet` direto se comporta como o Enter: salva. Para uma sessão só, há também o `claude --model haiku` ao abrir, que vale até você fechar. Um caso do começo ao fim: você quer renomear vinte {{arquivo|arquivos}}, tarefa simples. Digita `/model`, desce até o Sonnet, aperta **s**, faz a tarefa e fecha. Amanhã, o Claude Code abre no Opus de novo, como sempre. Se tivesse digitado `/model sonnet`, abriria no Sonnet amanhã, e talvez você só percebesse dias depois."
      ],
      [
        "p",
        "Duas consequências da troca. Os {{subagente|subagentes}} que herdam o modelo da conversa passam a {{rodar}} no novo modelo, a menos que a definição deles diga outro. E a troca joga fora o desconto do cache, como mostra a seção sobre o cache. Existe ainda o apelido {{opusplan}}: o Opus no {{modo-plano|modo de planejamento}} e o Sonnet na hora de executar. Serve para quem planeja muito e executa coisas simples; cada entrada e saída do modo de planejamento é uma troca de modelo."
      ],
      [
        "h3",
        "O esforço: /effort"
      ],
      [
        "p",
        "O esforço decide quanto o modelo raciocina antes de responder, dentro do mesmo modelo, nos níveis `low`, `medium`, `high`, `xhigh` e `max`. Em 08/11/2026, o padrão era `medium` no Opus 5.5, no Sonnet 5.5 e no Haiku 5.5, e `high` no Fable 5.1. O `/effort` sem nada abre um controle deslizante; de novo, Enter salva como padrão daquele modelo, e **s** aplica só nesta sessão. O `max` nunca é salvo: vale só para a sessão. `/effort status` mostra o nível em vigor, e `/effort auto` apaga o nível salvo."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Nível",
            "Para que serve, segundo a documentação"
          ],
          "linhas": [
            [
              "low",
              "Trocas rápidas em que você confere cada resultado: um rascunho, uma renomeação"
            ],
            [
              "medium",
              "O padrão nos modelos 5.5: o trabalho do dia a dia, com escopo claro"
            ],
            [
              "high",
              "Quando conferir importa e casos estranhos são prováveis, como corrigir um erro"
            ],
            [
              "xhigh",
              "Raciocínio mais fundo, com mais tokens"
            ],
            [
              "max",
              "Problemas difíceis para ele resolver sem você; pode pensar demais, e o ganho diminui"
            ]
          ]
        }
      ],
      [
        "p",
        "Nos testes da Anthropic citados na documentação, um nível mais alto testou mais casos, conferiu mais o próprio trabalho e tomou mais decisões sozinho; um nível mais baixo entregou antes um ponto de partida, o que combina com trabalho em que você revisa cada passo. Para pedir mais raciocínio num pedido só, sem mudar a sessão, escreva a palavra {{ultrathink}} no pedido: desde a versão 2.1.311, de 26/10/2026, digitada no {{terminal}}, ela pode subir aquele turno para `xhigh`, e aparece colorida quando isso acontece. Outras frases, como \"pense bem\", são texto comum."
      ],
      [
        "p",
        "No mesmo controle deslizante, a tecla Tab liga o {{ultracode}}, que não é um nível: com ele ligado, o Claude monta {{workflow|workflows}} com vários agentes para cada tarefa grande, como na aula 7.11. Gasta bem mais, e por isso fica desligado até você ligar. E um aviso para quem procura o botão de \"pensamento\": nos modelos 5.5 e no Fable, o pensamento não desliga; quem dosa é o esforço."
      ],
      [
        "h3",
        "O modo rápido: /fast"
      ],
      [
        "p",
        "O modo rápido deixa o Opus até 2,5 vezes mais rápido, com a mesma qualidade, por um preço por token maior: no Opus 5.5, US$ 8 por milhão de tokens de entrada e US$ 40 de saída, o dobro do preço normal de US$ 4 e US$ 20, na tabela de 08/11/2026. Não é outro modelo, e só existe no Opus. O `/fast` abre a chave: barra de espaço liga ou desliga, Enter confirma; um símbolo `↯` aparece ao lado do prompt enquanto ele está ligado. Alt+O também liga e desliga, então cuidado com a tecla."
      ],
      [
        "p",
        "O que importa para você: nos planos de assinatura, o modo rápido só funciona com créditos de uso e não entra no limite do plano. Ligado, ele gasta dinheiro desde o primeiro pedido. E, se você ligar no meio de uma conversa longa, o primeiro pedido relê a conversa inteira sem cache, no preço do modo rápido. Por padrão, ele continua ligado nas sessões seguintes. Para o seu uso, a recomendação é deixar desligado; se ligou sem querer, `/fast off` desliga. O modo rápido do Opus 4.8 sai do ar em 30/11/2026."
      ],
      [
        "h3",
        "O cache: o desconto que você pode perder"
      ],
      [
        "p",
        "Cada pedido manda a conversa inteira de novo, e quase tudo nela é igual ao pedido anterior. O cache guarda esse começo repetido no servidor, e a releitura sai muito mais barata: na tabela de preços da {{api|API}} de 08/11/2026, ler do cache custa 5% da entrada normal no Opus 5.5 e no Sonnet 5.5, 2,5% no Fable 5.1 e 10% nos outros. No plano, você não paga em dólar, mas a página de custos do Claude Code diz que a releitura também conta para o limite, só que na taxa menor. O desconto tem prazo: no seu plano, enquanto o uso está dentro do limite, a conversa principal fica no cache por uma hora sem uso; quando o pedido sai dos créditos de uso, por cinco minutos."
      ],
      [
        "p",
        "A regra que explica quase tudo: o cache só reaproveita o começo da conversa quando ele é idêntico ao do pedido anterior. Por isso, segundo a documentação, jogam o desconto fora:"
      ],
      [
        "lista",
        [
          "**Trocar de modelo**: cada modelo tem o próprio cache. No terminal, enquanto o cache está válido, o `/model` pede para você confirmar a troca.",
          "**Mudar o esforço** em modelos mais antigos. No Opus 5.5, no Sonnet 5.5, no Haiku 5.5 e no Fable 5.1, com a sua assinatura, o cache continua.",
          "**Ligar ou desligar o modo rápido**, que tem cache separado.",
          "**Mudar as ferramentas**: ligar ou desligar um {{plugin}}, proibir uma ferramenta inteira e, em alguns casos, conectar um servidor {{mcp|MCP}}.",
          "**Compactar** a conversa, de propósito: o histórico vira um resumo novo.",
          "**Atualizar o Claude Code**: a primeira conversa depois da atualização recomeça o cache."
        ]
      ],
      [
        "p",
        "Não jogam fora: editar arquivos do projeto, editar o {{claude-md|CLAUDE.md}} (que só vale depois de `/clear`, `/compact` ou reiniciar), trocar o modo de {{permissao|permissão}}, usar {{skill|skills}} e comandos, o `/recap` e o `/rewind`. A dica da documentação: escolha o modelo e o esforço no começo da sessão, e compacte nas pausas naturais, entre uma tarefa e outra."
      ],
      [
        "h3",
        "Onde ver: o /usage"
      ],
      [
        "p",
        "O `/usage` é o relógio de ponto da aula 7.14. No bloco Session, ele mostra os tokens da sessão e um custo estimado ao preço de tabela, que, para quem é assinante, não é cobrança: serve para comparar. Desde a versão 2.1.251, depois da primeira resposta, aparece a linha **Prompt cache (main)**, com o número de pedidos, a porcentagem da entrada que veio do cache, as falhas, quando houve a última, e se o cache está quente agora. Uma porcentagem alta é o cache funcionando; falhas que se repetem querem dizer que algo está mudando o começo da conversa. Na parte de baixo, as recomendações podem sugerir trocas de esforço, como \"Switch from max to high effort · /effort high\", e a aula 7.14 mostra como aplicar com a tecla `f`."
      ],
      [
        "h3",
        "O advisor: uma segunda opinião sob demanda"
      ],
      [
        "p",
        "Existe um quarto controle, ainda experimental: o {{advisor}}. Com `/advisor opus`, você deixa o modelo principal consultar um segundo modelo, em geral mais forte, nos momentos decisivos, como antes de escolher um caminho ou de declarar a tarefa pronta. Quem decide quando consultar é o Claude. Ao ligar, o Claude Code avisa que o recurso é experimental e pode usar mais tokens. Serve para tarefas longas em que quase tudo é rotina e o plano decide o resultado; em tarefa curta, não compensa. Ligar e desligar o advisor não derruba o cache."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Qual modelo deixo como padrão?** O padrão, Opus 5.5 no esforço medium, serve à maioria das tarefas. Antes de trocar de modelo, experimente baixar ou subir o esforço, que nos modelos 5.5 não joga o cache fora.",
          "**O modo rápido gasta o meu limite?** Não: gasta créditos de uso, cobrados à parte. Se os créditos estiverem desligados na sua conta, ele não funciona.",
          "**Trocar de modelo estraga a conversa?** Não estraga: a conversa continua igual. Só o pedido seguinte sai sem desconto e mais lento.",
          "**Como sei o que está valendo agora?** O rodapé mostra o esforço por alguns instantes quando muda; `/effort status` mostra o nível; o `/status`, o modelo. A aula 7.19 põe tudo isso numa linha fixa na tela.",
          "**E se eu salvar um padrão sem querer?** Abra `/model` e escolha o modelo certo com Enter. Para o esforço, `/effort auto` volta ao padrão do modelo."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: quem ganha quando há mais de uma escolha",
          "blocos": [
            [
              "p",
              "Para o modelo, a ordem é: `/model` durante a sessão, depois `--model` ao abrir, depois a {{variavel|variável}} `ANTHROPIC_MODEL`, depois a chave `model` nos arquivos de configuração. Se o modelo de um projeto vier do settings.json do projeto, o cabeçalho da sessão diz de qual arquivo veio."
            ],
            [
              "p",
              "Para o esforço, a variável `CLAUDE_CODE_EFFORT_LEVEL` ganha de tudo, inclusive do `/effort`. E o prazo do cache pode ser escolhido com a chave `promptCacheTtl`, que aceita `5m` ou `1h`; com a assinatura, dentro do limite, o padrão já é uma hora."
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
          "pergunta": "Este programa em {{python|Python}} compara quanto custa, pela API, reler uma conversa de 200 mil tokens sem cache e do cache, com os preços do Opus 5.5 de 08/11/2026. O que você acha que ele imprime?",
          "codigo": "# Reler a conversa pela API: sem cache e do cache (Opus 5.5, tabela de 08/11/2026)\nconversa = 200_000                  # tokens que ja estao na conversa\nentrada = 4.00 / 1_000_000          # US$ por token de entrada sem cache\nleitura_cache = 0.20 / 1_000_000    # US$ por token lido do cache\n\nsem_cache = conversa * entrada\ncom_cache = conversa * leitura_cache\nprint(f\"Relendo sem cache: US$ {sem_cache:.2f}\")\nprint(f\"Relendo do cache:  US$ {com_cache:.2f}\")\nprint(f\"O cache sai {sem_cache / com_cache:.0f} vezes mais barato\")",
          "linguagem": "python",
          "resposta": "Oitenta centavos de dólar sem cache e quatro centavos do cache: no Opus 5.5, o cache sai 20 vezes mais barato. É o que você perde num pedido depois de trocar de modelo no meio de uma conversa grande. Use os botões: com uma conversa de 500 mil tokens, a perda cresce junto; no Sonnet 5.5, os valores caem pela metade, mas a proporção é a mesma; no Fable 5.1, a proporção dobra, porque lá o cache custa 2,5% da entrada. No plano, a conta não vira dólar, mas a proporção ajuda a entender o peso no limite.",
          "vivo": [
            [
              "Conversa de 500 mil tokens",
              "# Reler a conversa pela API: sem cache e do cache (Opus 5.5, tabela de 08/11/2026)\nconversa = 500_000                  # tokens que ja estao na conversa\nentrada = 4.00 / 1_000_000          # US$ por token de entrada sem cache\nleitura_cache = 0.20 / 1_000_000    # US$ por token lido do cache\n\nsem_cache = conversa * entrada\ncom_cache = conversa * leitura_cache\nprint(f\"Relendo sem cache: US$ {sem_cache:.2f}\")\nprint(f\"Relendo do cache:  US$ {com_cache:.2f}\")\nprint(f\"O cache sai {sem_cache / com_cache:.0f} vezes mais barato\")",
              "Relendo sem cache: US$ 2.00\nRelendo do cache:  US$ 0.10\nO cache sai 20 vezes mais barato"
            ],
            [
              "Trocar para o Sonnet 5.5",
              "# Reler a conversa pela API: sem cache e do cache (Sonnet 5.5, tabela de 08/11/2026)\nconversa = 200_000                  # tokens que ja estao na conversa\nentrada = 2.00 / 1_000_000          # US$ por token de entrada sem cache\nleitura_cache = 0.10 / 1_000_000    # US$ por token lido do cache\n\nsem_cache = conversa * entrada\ncom_cache = conversa * leitura_cache\nprint(f\"Relendo sem cache: US$ {sem_cache:.2f}\")\nprint(f\"Relendo do cache:  US$ {com_cache:.2f}\")\nprint(f\"O cache sai {sem_cache / com_cache:.0f} vezes mais barato\")",
              "Relendo sem cache: US$ 0.40\nRelendo do cache:  US$ 0.02\nO cache sai 20 vezes mais barato"
            ],
            [
              "Trocar para o Fable 5.1",
              "# Reler a conversa pela API: sem cache e do cache (Fable 5.1, tabela de 08/11/2026)\nconversa = 200_000                  # tokens que ja estao na conversa\nentrada = 10.00 / 1_000_000         # US$ por token de entrada sem cache\nleitura_cache = 0.25 / 1_000_000    # US$ por token lido do cache\n\nsem_cache = conversa * entrada\ncom_cache = conversa * leitura_cache\nprint(f\"Relendo sem cache: US$ {sem_cache:.2f}\")\nprint(f\"Relendo do cache:  US$ {com_cache:.2f}\")\nprint(f\"O cache sai {sem_cache / com_cache:.0f} vezes mais barato\")",
              "Relendo sem cache: US$ 2.00\nRelendo do cache:  US$ 0.05\nO cache sai 40 vezes mais barato"
            ],
            [
              "Voltar ao original",
              "# Reler a conversa pela API: sem cache e do cache (Opus 5.5, tabela de 08/11/2026)\nconversa = 200_000                  # tokens que ja estao na conversa\nentrada = 4.00 / 1_000_000          # US$ por token de entrada sem cache\nleitura_cache = 0.20 / 1_000_000    # US$ por token lido do cache\n\nsem_cache = conversa * entrada\ncom_cache = conversa * leitura_cache\nprint(f\"Relendo sem cache: US$ {sem_cache:.2f}\")\nprint(f\"Relendo do cache:  US$ {com_cache:.2f}\")\nprint(f\"O cache sai {sem_cache / com_cache:.0f} vezes mais barato\")",
              "Relendo sem cache: US$ 0.80\nRelendo do cache:  US$ 0.04\nO cache sai 20 vezes mais barato"
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
          "p": "Você está no meio de uma conversa longa com o Opus 5.5 e quer que ele pense menos nas próximas tarefas, que são simples. O que menos joga fora o desconto do cache?",
          "o": [
            [
              "Trocar para o Haiku com /model, porque é o modelo mais barato",
              "O Haiku cobra menos por token, mas a troca faz o pedido seguinte reler a conversa inteira sem cache."
            ],
            [
              "Ligar o modo rápido, porque as respostas ficam mais curtas",
              "O modo rápido não encurta nada: mantém a qualidade, cobra mais caro, sai dos créditos de uso e tem cache separado."
            ],
            [
              "Baixar o esforço com /effort, mantendo o Opus 5.5",
              "Isso. Nos modelos 5.5, com a assinatura, mudar o esforço mantém o cache."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se valia ligar o /fast agora, numa conversa já longa, e o Claude respondeu: \"Ligar não gasta o seu limite de 5 horas: no seu plano, o modo rápido é pago com créditos de uso, à parte. E, como a conversa já está longa, o primeiro pedido relê tudo sem cache, no preço do modo rápido.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está certa: o modo rápido sai dos créditos e, ligado agora, relê tudo sem cache",
              "Isso. A resposta está certa nas duas partes. Se não precisa de pressa, deixe desligado."
            ],
            [
              "Errado: o modo rápido usa o limite do plano, como qualquer outro pedido",
              "Nos planos de assinatura, o modo rápido só funciona com créditos de uso e não entra no limite do plano."
            ],
            [
              "Errado: ligar o modo rápido mantém o cache, porque o modelo continua o mesmo",
              "O modelo é o mesmo, mas o modo rápido tem cache separado: o primeiro pedido relê tudo sem desconto."
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
            "\"Digitei /model sonnet só para esta tarefa.\"",
            "Digitado assim, ele salva como padrão. Para uma sessão só, abra o seletor do /model e aperte s, ou abra com claude --model."
          ],
          [
            "\"Vou alternar entre Opus e Sonnet a cada pedido para economizar.\"",
            "Cada troca faz o pedido seguinte reler a conversa sem cache. Escolha no começo e mantenha."
          ],
          [
            "\"O modo rápido deixa o Opus mais inteligente.\"",
            "Mesma qualidade, mais velocidade, preço maior, e pago com créditos de uso."
          ],
          [
            "\"Esforço max em tudo, para garantir.\"",
            "O max gasta mais tokens, pode pensar demais e nem é salvo como padrão. Suba o nível só quando a tarefa pedir."
          ],
          [
            "\"Escrevi pense bem, e ele pensou mais.\"",
            "Só a palavra ultrathink é reconhecida. O resto é texto comum do pedido."
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
          "p": "O que joga fora o desconto do cache?",
          "r": [
            "Trocar de modelo no meio da conversa.",
            "Ligar ou desligar o modo rápido, mudar as ferramentas e compactar.",
            "Ficar parado mais que o prazo: uma hora no plano, cinco minutos nos créditos de uso."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Como mudar o modelo ou o esforço só nesta sessão?",
          "r": [
            "No seletor do /model ou no controle do /effort, apertar s em vez de Enter.",
            "Ou abrir com claude --model ou claude --effort.",
            "Digitar /model sonnet direto salva como padrão."
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
          "titulo": "Os controles e o que o /usage mostra",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "15 minutos",
          "antes": "No {{powershell|PowerShell}} e no Claude Code, você vai abrir uma pasta de teste com um texto de 300 linhas, olhar o /usage antes e depois de um pedido, baixar o esforço só nesta sessão e trocar de modelo só nesta sessão, observando o pedido de confirmação que aparece quando o cache ainda vale. Nada é salvo como padrão: tudo usa a tecla s. Não ligue o /fast neste laboratório: no plano, ele gasta créditos de uso. Precisa do Claude Code instalado e logado com a sua conta do claude.ai. O passo 1 foi rodado de verdade no PowerShell 5.1, em 08/11/2026. Os passos com o Claude Code não foram testados antes de publicar: foram escritos a partir da documentação oficial, conferida em 08/11/2026, e as telas podem variar.",
          "naoTestado": "Os passos 2 a 14 exigem o Claude Code interativo com login, que não foi aberto nos testes deste módulo: rodar o programa no PC do teste usaria a conta e o limite do dono. O que deve acontecer vem das páginas oficiais Configuração de modelo, Como Claude Code usa prompt caching e Gerencie custos de forma eficaz, conferidas em 08/11/2026.",
          "passos": [
            {
              "faz": "No PowerShell, cole este comando. Ele cria a pasta C:\\Projetos\\custo-teste, grava nela um texto de 300 linhas e mostra o tamanho do arquivo em bytes.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\custo-teste | Out-Null; Set-Location C:\\Projetos\\custo-teste; 1..300 | ForEach-Object { \"Linha $_ de um texto de teste sobre juros compostos e prazos de pagamento.\" } | Set-Content -Encoding ascii texto.md; (Get-Item texto.md).Length",
              "saida": "22992",
              "espera": "Aparece o número 22992: o arquivo tem cerca de 23 mil bytes."
            },
            {
              "faz": "Abra o Claude Code na pasta. Se ele perguntar se você confia nela, aceite.",
              "cola": "claude",
              "espera": "O Claude Code abre, com o modelo no cabeçalho."
            },
            {
              "faz": "Abra o relógio de ponto:",
              "cola": "/usage",
              "espera": "As barras de uso do plano e o bloco Session, ainda quase vazio, porque nenhum pedido foi feito. Esc fecha a tela."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Leia texto.md e me diga, em uma frase, sobre o que ele fala.",
              "espera": "Uma frase dizendo que o texto repete linhas sobre juros compostos e prazos de pagamento."
            },
            {
              "faz": "Abra o /usage de novo.",
              "cola": "/usage",
              "espera": "O bloco Session agora tem tokens e um custo estimado, e aparece a linha Prompt cache (main), com o número de pedidos, a porcentagem que veio do cache e se ele está quente. Esc fecha a tela."
            },
            {
              "faz": "Abra o controle de esforço:",
              "cola": "/effort",
              "espera": "Um controle deslizante com os níveis, marcando o atual."
            },
            {
              "faz": "Leve o controle até low com as setas e aperte s, para aplicar só nesta sessão.",
              "espera": "O controle fecha e o rodapé mostra o novo nível por alguns instantes. No Opus 5.5, não aparece pedido de confirmação: o cache continua."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Agora diga o mesmo em três palavras.",
              "espera": "Uma resposta curta, de três palavras."
            },
            {
              "faz": "Abra o seletor de modelo:",
              "cola": "/model",
              "espera": "A lista de modelos, com o atual marcado."
            },
            {
              "faz": "Desça até o Sonnet e aperte s, para trocar só nesta sessão.",
              "espera": "Como o cache ainda vale, o Claude Code pede para você confirmar a troca, porque o modelo novo não tem a conversa no cache. Se o cache já tinha vencido, ele troca sem perguntar, e você pula o próximo passo."
            },
            {
              "faz": "Confirme a troca.",
              "espera": "O modelo passa a ser o Sonnet, só nesta sessão."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Repita a resposta anterior.",
              "espera": "A resposta vem, talvez um pouco mais devagar: este pedido releu a conversa sem cache, no Sonnet."
            },
            {
              "faz": "Abra o /usage mais uma vez e compare a linha Prompt cache (main) com a do passo 5.",
              "cola": "/usage",
              "espera": "Mais pedidos na linha do cache, e o bloco Session agora separa o uso por modelo. Esc fecha a tela."
            },
            {
              "faz": "Saia do Claude Code:",
              "cola": "/exit",
              "espera": "Você volta ao PowerShell. Nada foi salvo: a próxima sessão abre no seu modelo e no seu esforço de sempre."
            }
          ],
          "errado": "se o /usage não mostrar as barras do plano, o Claude Code pode estar usando uma {{chave-api|chave de API}} no lugar da assinatura: rode /status e confira a linha do login, como na aula 7.10. Se você apertou Enter em vez de s no passo 7 ou no passo 10, a escolha foi salva como padrão: abra /effort e escolha o nível de antes com Enter, ou /effort auto; no /model, escolha o modelo de antes com Enter. Se aparecer o símbolo ↯ ao lado do prompt, o modo rápido está ligado: digite /fast off."
        }
      ],
      [
        "fontes",
        [
          [
            "Configuração de modelo (apelidos, padrão Opus 5.5, /model com Enter e s, esforço, ultrathink, ultracode, opusplan), Claude Code",
            "https://code.claude.com/docs/pt/model-config",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Acelere respostas com modo rápido (até 2,5 vezes, US$ 8 e US$ 40 no Opus 5.5, só com créditos de uso, Opus 4.8 sai em 30/11/2026), Claude Code",
            "https://code.claude.com/docs/pt/fast-mode",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Como Claude Code usa prompt caching (o que invalida e o que mantém o cache, prazo de 1 hora e de 5 minutos), Claude Code",
            "https://code.claude.com/docs/pt/prompt-caching",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Gerencie custos de forma eficaz (/usage, linha Prompt cache (main), recomendações), Claude Code",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Escale decisões difíceis com a ferramenta advisor (experimental), Claude Code",
            "https://code.claude.com/docs/pt/advisor",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Preços (entrada, leitura de cache e saída por modelo; leitura de cache a 0,05 vez a entrada no Opus 5.5 e no Sonnet 5.5), Claude Platform",
            "https://platform.claude.com/docs/pt-BR/about-claude/pricing",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (2.1.280, de 22/09/2026: Opus 5.5 vira padrão; 2.1.311, de 26/10/2026: ultrathink sobe o turno para xhigh); sem versão em português",
            "https://code.claude.com/docs/en/changelog",
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
          "Modelo, esforço e modo rápido decidem o custo, e algumas trocas jogam fora o cache",
          "Isso. Escolha no começo, use s para uma sessão só, e deixe o modo rápido para quando a pressa compensar."
        ],
        [
          "Para economizar, troque de modelo a cada pedido conforme a dificuldade da tarefa",
          "Cada troca relê a conversa sem cache. Trocar o tempo todo costuma sair mais caro."
        ],
        [
          "O modo rápido é o jeito mais barato de terminar antes, porque usa menos tokens",
          "O modo rápido cobra mais por token, com os mesmos tokens, e sai dos créditos de uso."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Você digitou /model sonnet para uma tarefa rápida. O que acontece amanhã, ao abrir o Claude Code?",
        "o": [
          [
            "Abre no Opus, porque toda troca vale só para a sessão em que foi feita",
            "Só a tecla s no seletor e o claude --model valem para uma sessão. O /model digitado com o nome salva."
          ],
          [
            "Abre no Sonnet, porque o comando digitado assim salvou como padrão",
            "Isso. Para uma sessão só, use a tecla s no seletor ou abra com claude --model."
          ],
          [
            "Pergunta qual modelo usar, porque a troca de ontem ficou pendente",
            "Ele não pergunta: abre no modelo salvo, que agora é o Sonnet."
          ]
        ],
        "c": 1
      },
      {
        "p": "No seu plano de assinatura, de onde sai o gasto do modo rápido?",
        "o": [
          [
            "Do limite de 5 horas, como os outros pedidos",
            "O modo rápido não entra no limite do plano."
          ],
          [
            "Dos créditos mensais de API do plano",
            "Os créditos de API servem aos seus programas que chamam a API, não ao Claude Code."
          ],
          [
            "Dos créditos de uso, cobrados à parte",
            "Isso. Mesmo com limite sobrando, ele cobra dos créditos de uso."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como troco de modelo só nesta sessão?",
        "Digite /model, desça até o modelo e aperte s em vez de Enter. Ou abra o Claude Code com claude --model seguido do apelido. Digitar /model seguido do nome salva como padrão."
      ],
      [
        "Por que a resposta demorou depois que troquei de modelo?",
        "Cada modelo tem o próprio cache. O primeiro pedido depois da troca relê a conversa inteira sem desconto, o que é mais lento e pesa mais no limite. Os pedidos seguintes voltam a usar o cache."
      ],
      [
        "Vale ligar o modo rápido?",
        "Só quando a pressa compensa o preço. No seu plano, ele é pago com créditos de uso, à parte, e, ligado no meio de uma conversa longa, o primeiro pedido relê tudo sem cache. Para desligar, /fast off."
      ]
    ]
  },
  "7-18": {
    "tempo": 31,
    "video": "a7-18",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você escreveu uma regra no {{claude-md|CLAUDE.md}} ou no {{settings-json|settings.json}}, abriu o {{claude-code|Claude Code}}, e ele agiu como se a regra não existisse. Esta aula mostra como descobrir por quê, com os {{comando|comandos}} que mostram o que ele carregou de verdade, antes de pedir ao Claude que adivinhe.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quando algo não funciona no Claude Code, o reflexo é perguntar ao próprio Claude: \"por que você ignorou a minha regra?\". Ele responde com segurança, e muitas vezes chuta, porque não sabe o que o programa em volta dele carregou: ele vê o resultado, não o caminho. A documentação oficial diz que, quando uma instrução é ignorada ou uma configuração não aparece, a causa costuma ser uma de três: o {{arquivo}} não foi carregado, foi carregado de um lugar diferente do que você pensava, ou outro arquivo passou por cima dele."
      ],
      [
        "p",
        "O Claude Code tem comandos que mostram exatamente o que entrou: quais arquivos de instruções, quais regras de {{permissao|permissão}} e de onde vieram, quais {{hook|hooks}}, quais {{servidor|servidores}} {{mcp|MCP}}. E tem um jeito de abrir uma {{sessao|sessão}} \"limpa\", com tudo o que é seu desligado, para saber se o problema está na sua configuração ou fora dela. Com isso, você troca a adivinhação por três ou quatro conferências que levam um minuto, e, na maioria das vezes, não gastam nada do {{limite-de-uso|limite}}."
      ],
      [
        "p",
        "Esta aula também ensina a ler os erros que aparecem na tela e o caminho quando o problema não é seu: procurar a {{issues|issue}} no {{github|GitHub}} antes de pedir ao Claude que invente uma explicação, como a aula 3.5 mostrou, e relatar com o comando certo."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte à sala do estagiário da aula 0.0, com o quadro de avisos da aula 7.5 e a lista do porteiro da aula 7.4. Quando o estagiário não segue um aviso, um bom chefe não grita: faz uma **vistoria** em três perguntas. O aviso está pregado na parede certa, com o nome certo? Alguém pregou outro aviso por cima, de quem manda mais? Ele leu, mas entendeu de outro jeito? Se nada disso explica, o chefe leva o estagiário para uma **sala vazia**, sem quadro, sem manuais, sem sensores: se o problema some ali, a causa está em alguma coisa da sala de sempre. A vistoria são os comandos {{context|/context}}, {{status|/status}}, {{permissions-comando|/permissions}} e {{doctor-comando|/doctor}}; a sala vazia é a {{flag|opção}} {{safe-mode|--safe-mode}}."
      ],
      [
        "quebra",
        "Numa vistoria de verdade, você olha a parede com os próprios olhos; aqui, você vê o que o programa diz que carregou, e alguns avisos só são pregados mais tarde: o CLAUDE.md de uma subpasta entra quando o Claude mexe num arquivo dela, e por isso não aparece no começo. A sala vazia também não é tão vazia: o login, o {{modelo}}, as ferramentas de fábrica e as regras de permissão continuam valendo. E o /doctor não é um fiscal de fora: é o próprio Claude, seguindo uma lista de conferência, que propõe consertos e gasta limite."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Primeira pergunta: ele carregou?"
      ],
      [
        "p",
        "O ponto de partida é o `/context`. Ele mostra, como uma grade colorida, tudo o que ocupa o {{contexto}} da sessão, separado por tipo: as instruções de fábrica, as ferramentas, as ferramentas MCP, os {{subagente|subagentes}}, os arquivos de memória (os CLAUDE.md), as {{skill|skills}} e a conversa. Se o seu CLAUDE.md não está na lista dos arquivos de memória, o Claude não leu nada dele, e não adianta reescrever a regra. Na tela cheia, `/context all` abre os detalhes."
      ],
      [
        "p",
        "Para cada tipo, há um comando que mostra mais: o {{memory-comando|/memory}} lista os CLAUDE.md e onde estão; o {{comando-skills|/skills}}, as skills; o {{hooks-comando|/hooks}}, os hooks ativos; o {{mcp-comando|/mcp}}, os servidores e se estão conectados; o `/permissions`, as regras em vigor e o arquivo de origem de cada uma, como a aula 7.4 mostrou. E o `/status` traz a versão, o modelo, a conta e, na linha **Setting sources**, quais arquivos de configuração foram carregados, como User settings ou Project settings. Se o settings.json do seu projeto não aparece ali, ele não foi lido."
      ],
      [
        "p",
        "Um caso do começo ao fim. Você escreveu, no CLAUDE.md de uma subpasta `guias`, \"exercícios sempre de assinalar\", abriu o Claude Code na {{pasta}} de cima e pediu um exercício. Veio uma pergunta aberta. O `/context` mostra só o CLAUDE.md da pasta principal. A resposta está na documentação: os CLAUDE.md de subpastas carregam sob demanda, quando o Claude lê, cria ou edita um arquivo daquela subpasta. Para a regra valer desde o começo, ela vai para o CLAUDE.md da pasta principal, ou para `.claude\\CLAUDE.md`, que também carrega no início."
      ],
      [
        "h3",
        "Segunda pergunta: alguém passou por cima?"
      ],
      [
        "p",
        "As configurações se juntam em camadas, e, quando a mesma chave aparece em mais de um lugar, vale a de cima, a regra de {{precedencia|precedência}}. Da mais forte para a mais fraca: as configurações gerenciadas por uma empresa, as opções digitadas ao abrir, como `--model`, o `settings.local.json` do projeto, o `settings.json` do projeto e, por último, o seu `settings.json` de usuário. Algumas {{variavel|variáveis de ambiente}} também ganham dos arquivos: `ANTHROPIC_MODEL` ganha da chave `model`, e `CLAUDE_CODE_EFFORT_LEVEL` ganha até do `/effort`. As listas de regras de permissão se somam entre os arquivos, e uma regra de proibir sempre vence."
      ],
      [
        "p",
        "Dois enganos aparecem tanto que estão na tabela de causas comuns da documentação. O primeiro é a confusão entre dois arquivos de nome parecido: o `C:\\Users\\SeuNome\\.claude.json`, que guarda o estado do programa, a conta e preferências de tela, e o `C:\\Users\\SeuNome\\.claude\\settings.json`, onde ficam permissões, hooks e variáveis. Regras escritas no primeiro são ignoradas. O segundo é o hook que nunca dispara porque o filtro está escrito errado, como `\"bash\"` em minúsculas, quando o nome da ferramenta é `Bash`, ou uma lista no lugar de um texto só; a aula 7.6 mostrou o formato certo."
      ],
      [
        "h3",
        "Terceira pergunta: ele leu e entendeu outra coisa?"
      ],
      [
        "p",
        "Se o `/context` mostra o arquivo carregado e o Claude mesmo assim não segue a regra, o problema é de escrita, não de carregamento. A documentação lista três causas: a instrução é vaga o bastante para ter mais de uma leitura; dois arquivos dizem coisas que se contradizem, e ele escolhe uma; ou o arquivo cresceu tanto que cada regra recebe pouca atenção. O conserto é o da aula 7.5: regra curta, concreta e num lugar só. E lembre a divisão que a documentação faz: o CLAUDE.md orienta, como um aviso para um colega novo; o que nunca pode acontecer vai para uma regra de permissão ou um hook, que valem independentemente do que o Claude decide. O `/doctor prompt-audit`, desde a versão 2.1.283, de 25/09/2026, revisa os seus CLAUDE.md e skills atrás de instruções desatualizadas ou contraditórias."
      ],
      [
        "h3",
        "A sala vazia: --safe-mode"
      ],
      [
        "p",
        "Quando a vistoria não acha nada, abra uma sessão com `claude --safe-mode`, que existe desde a versão 2.1.169, de 08/06/2026. Ela desliga todas as suas personalizações de uma vez: CLAUDE.md, skills, {{plugin|plugins}}, hooks, servidores MCP, comandos e agentes próprios, estilos de saída, workflows, temas e atalhos próprios, a linha de status e a memória automática. Continuam funcionando o login, a escolha de modelo, as ferramentas de fábrica e as permissões, e também as regras que uma empresa impõe."
      ],
      [
        "p",
        "Repita, nessa sessão, o que deu errado. Se o problema **sumiu**, a causa está em alguma das coisas desligadas: volte à sessão normal e confira uma categoria de cada vez, com os comandos da primeira pergunta. Se o problema **continua**, a causa está fora delas: nas configurações em si, numa variável de ambiente, na instalação ou no próprio Claude Code. Nada do que você tem é apagado; a opção vale só para aquela sessão."
      ],
      [
        "h3",
        "O /doctor e o claude doctor"
      ],
      [
        "p",
        "O `/doctor`, também chamado de `/checkup`, é uma skill que vem com o Claude Code e confere cinco áreas: a instalação (instalações duplicadas, problemas de {{path|PATH}}, arquivos de configuração que não abrem, versão nova disponível), as extensões (skills, servidores MCP e plugins sem uso que ocupam contexto, e hooks lentos), os CLAUDE.md (repetidos ou com o que o Claude descobriria sozinho), as permissões e, nos planos pagos, o uso. Ele relata primeiro e pede confirmação antes de mudar qualquer coisa. Leia cada proposta: uma delas pode ser tornar o modo automático o seu padrão, o que muda o seu settings.json; aceite só o que você quer."
      ],
      [
        "p",
        "Como é uma skill, o `/doctor` faz o Claude trabalhar e gasta limite. Já o `claude doctor`, digitado no {{powershell|PowerShell}}, fora de uma sessão, só lê: mostra a saúde da instalação, os erros de validação dos arquivos de configuração e se o {{remote-control|Remote Control}} está liberado, sem abrir conversa. É o primeiro passo quando o Claude Code nem abre. E o {{debug-comando|/debug}} liga o registro detalhado da sessão a partir daquele momento e pede ao Claude que diagnostique lendo esse registro; para registrar desde o começo, abra com `claude --debug`."
      ],
      [
        "h3",
        "Mensagens de erro e o caminho de fora"
      ],
      [
        "p",
        "Quando aparece uma mensagem de erro, copie o texto exato e procure na página de referência de erros da documentação, que traz cada mensagem com a causa e o conserto. Algumas se resolvem sozinhas: o Claude Code tenta de novo, por conta própria, os erros de servidor sobrecarregado, como o 529. Outras pedem ação sua, como um login vencido ou um limite atingido. O `/release-notes` mostra o que mudou na sua versão, sem entrar na conversa, e o {{changelog}} na {{internet}} traz a data de cada versão."
      ],
      [
        "p",
        "Se nada disso explica, o caminho da aula 3.5: procure o texto do erro nas issues do {{repositorio|repositório}} anthropics/claude-code, no GitHub. Muitas vezes alguém já relatou, e há um conserto ou um contorno. Para relatar, `/bug` (ou `/feedback`) abre uma tela em que você escolhe quanto da conversa mandar e confirma antes de enviar; leia o que vai junto, porque a conversa pode ter caminhos e conteúdo de arquivos seus."
      ],
      [
        "h3",
        "Depois de mexer: precisa reiniciar?"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Você mudou",
            "Quando passa a valer"
          ],
          "linhas": [
            [
              "settings.json (permissões, hooks, variáveis)",
              "Na sessão aberta, alguns segundos depois de salvar"
            ],
            [
              "CLAUDE.md",
              "Depois de /clear, de /compact ou de abrir o Claude Code de novo"
            ],
            [
              "Uma skill nova ou editada",
              "Depois de /reload-skills, ou numa sessão nova"
            ],
            [
              "Um plugin",
              "Depois de /reload-plugins, ou numa sessão nova"
            ],
            [
              "A configuração de servidores MCP",
              "Só ao abrir o Claude Code de novo"
            ]
          ]
        }
      ],
      [
        "p",
        "O `/restart`, que reinicia o programa e retoma a sessão, não serve para você: segundo a documentação, ele exige uma instalação no macOS ou no Linux. No Windows, saia com `/exit` e volte com `claude --continue`, como na aula 7.16."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Esses comandos gastam limite?** O `/context`, o `/status`, o `/permissions`, o `/memory` e o `claude doctor` só mostram o que o programa sabe, sem chamar o modelo. O `/doctor` e o `/debug` são skills: o Claude trabalha, e isso gasta.",
          "**O /doctor muda coisas sozinho?** Ele relata e pede confirmação antes de mudar. Mesmo assim, leia cada proposta, porque algumas mexem nas suas configurações.",
          "**Posso estragar algo com o --safe-mode?** Não. Ele só desliga as personalizações naquela sessão; ao abrir normalmente, tudo volta.",
          "**E se o Claude Code nem abrir?** Rode `claude doctor` no PowerShell. Se o comando `claude` não for reconhecido, o problema é de instalação ou de PATH, como na aula 7.1.",
          "**Vale perguntar ao Claude por que a regra não pegou?** Vale depois da vistoria, mostrando a ele o que o `/context` e o `/status` disseram. Antes, ele adivinha."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: uma configuração totalmente limpa",
          "blocos": [
            [
              "p",
              "Se o problema continua até no --safe-mode e você desconfia das próprias configurações, a documentação ensina a abrir o Claude Code com uma pasta de configuração nova. Numa pasta vazia, no PowerShell, defina `$env:CLAUDE_CONFIG_DIR = \"$HOME/claude-clean/config\"` e rode `claude --setting-sources user`. No primeiro uso, você passa de novo pelas telas iniciais, sinal de que a configuração limpa está valendo. Se o problema sumir, copie os seus arquivos para essa pasta, um de cada vez, até ele voltar."
            ],
            [
              "p",
              "Cuidado: no PowerShell, a variável continua valendo na janela inteira. Antes de usar o Claude Code normalmente de novo, rode `Remove-Item Env:CLAUDE_CONFIG_DIR`, ou feche a janela."
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
          "pergunta": "Numa pasta de projeto, este comando do PowerShell procura todos os arquivos chamados CLAUDE.md, inclusive em subpastas e pastas escondidas, e mostra o caminho de cada um. Abaixo está o que ele mostrou. Se você abrir o Claude Code nessa pasta e {{rodar}} /context logo no começo, quais desses arquivos você acha que aparecem entre os arquivos de memória?",
          "codigo": "Get-ChildItem -Recurse -Force -Filter CLAUDE.md -Name",
          "linguagem": "powershell",
          "saida": "CLAUDE.md\nguias\\CLAUDE.md",
          "resposta": "Só o `CLAUDE.md` da pasta principal. O `guias\\CLAUDE.md` existe, mas carrega sob demanda: entra quando o Claude ler, criar ou editar algum arquivo dentro de `guias`. Por isso uma regra escrita só nele parece ignorada no começo da sessão. Use o botão para ver o conserto: com a regra movida para `.claude\\CLAUDE.md`, os dois arquivos ficam na pasta principal, e os dois carregam no início. A saída é real, de 08/11/2026; o que entra no /context vem da documentação oficial.",
          "vivo": [
            [
              "Mover a regra para .claude\\CLAUDE.md",
              "Get-ChildItem -Recurse -Force -Filter CLAUDE.md -Name",
              "CLAUDE.md\n.claude\\CLAUDE.md"
            ],
            [
              "Voltar ao original",
              "Get-ChildItem -Recurse -Force -Filter CLAUDE.md -Name",
              "CLAUDE.md\nguias\\CLAUDE.md"
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
          "p": "Você suspeita que um plugin está fazendo o Claude Code gastar demais. Abre uma sessão com claude --safe-mode, repete a tarefa, e o gasto fica normal. O que isso diz?",
          "o": [
            [
              "A causa está em algo que o --safe-mode desliga: plugin, hook ou skill",
              "Isso. Agora confira uma categoria de cada vez, com /plugin, /hooks e /skills, na sessão normal."
            ],
            [
              "O plugin está quebrado e deve ser apagado antes de abrir a próxima sessão normal",
              "O teste aponta o grupo de suspeitos, não o culpado. Pode ser um hook ou uma skill; confira antes de apagar."
            ],
            [
              "A causa está nas permissões, porque o --safe-mode desliga as regras do settings.json",
              "As permissões continuam valendo no --safe-mode. O que ele desliga são as personalizações, como plugins e hooks."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou como confirmar se a regra de proibir que você pôs no settings.json do projeto foi carregada, e o Claude respondeu: \"Rode /context. Ele mostra tudo o que foi carregado na sessão, inclusive as suas regras de permissão; se a regra estiver lá, foi lida.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: o /context só mostra o que foi carregado depois do primeiro pedido",
              "O /context mostra o que está no contexto desde o começo. O problema é outro: ele não lista as regras de permissão."
            ],
            [
              "Errado: as regras aparecem no /permissions, e não no /context",
              "Isso. O /context mostra o que ocupa o contexto, como os CLAUDE.md; as regras são do programa, e quem as lista é o /permissions, com o arquivo de origem."
            ],
            [
              "Está certa: o /context lista as regras de permissão junto com os CLAUDE.md",
              "As regras de permissão não entram no contexto do modelo: quem confere é o programa. Elas aparecem no /permissions."
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
            "\"Perguntei ao Claude por que ele ignorou a regra, e ele explicou.\"",
            "Ele não vê o que o programa carregou; muitas vezes chuta. Faça a vistoria com /context, /status e /permissions antes."
          ],
          [
            "\"Pus as permissões no .claude.json.\"",
            "Esse arquivo guarda o estado do programa. Permissões, hooks e variáveis vão no settings.json."
          ],
          [
            "\"Editei o CLAUDE.md e testei na mesma sessão.\"",
            "O CLAUDE.md só vale depois de /clear, /compact ou de abrir o Claude Code de novo."
          ],
          [
            "\"Rodei /restart e nada aconteceu.\"",
            "O /restart é do macOS e do Linux. No Windows, /exit e claude --continue."
          ],
          [
            "\"Aceitei tudo o que o /doctor propôs.\"",
            "Algumas propostas mudam o seu modo padrão ou liberam comandos. Leia uma por uma."
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
          "p": "Quais são as três perguntas da vistoria quando uma regra não pega?",
          "r": [
            "O arquivo foi carregado? /context, /memory, /status e /permissions mostram.",
            "Alguém passou por cima? Outro arquivo ou uma variável de ambiente com precedência.",
            "Ele leu e entendeu outra coisa? Regra vaga, contraditória ou num arquivo grande demais."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que o --safe-mode desliga, e o que continua valendo?",
          "r": [
            "Desliga CLAUDE.md, skills, plugins, hooks, servidores MCP e outras personalizações.",
            "Continuam o login, o modelo, as ferramentas de fábrica e as permissões.",
            "Se o problema some, a causa está numa personalização."
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
          "texto": "Alguém leu num fórum que \"as regras do Claude ficam no .claude.json\", criou esse arquivo na pasta de um projeto, com uma regra que proíbe ler o arquivo segredo.txt, e conferiu: o {{json|JSON}} está bem formado. Mesmo assim, no Claude Code, o Claude leu o segredo.txt sem nenhum bloqueio, e o /permissions não mostrava a regra. Para reproduzir, cole o bloco abaixo inteiro no PowerShell: ele cria a pasta C:\\Projetos\\regra-teste, grava nela um segredo.txt de mentira e o arquivo dessa pessoa, e faz duas conferências. Descubra o motivo antes de ver a causa.",
          "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\regra-teste | Out-Null; Set-Location C:\\Projetos\\regra-teste\nSet-Content -Encoding ascii segredo.txt 'texto de teste, nao e uma senha de verdade'\n@'\n{\n  \"permissions\": {\n    \"deny\": [\n      \"Read(./segredo.txt)\"\n    ]\n  }\n}\n'@ | Set-Content -Encoding ascii .claude.json\nTest-Path .claude\\settings.json\nGet-ChildItem -Force -Name",
          "saida": "False\n.claude.json\nsegredo.txt",
          "dica": "A regra está bem escrita e o JSON está certo. Compare o nome e o lugar do arquivo que a pessoa criou com o arquivo que a primeira conferência procurou, e com a seção \"Segunda pergunta: alguém passou por cima?\".",
          "resposta": "O arquivo está com o nome errado no lugar errado. O Claude Code lê as regras do projeto em `.claude\\settings.json`: uma pasta chamada `.claude` com um arquivo `settings.json` dentro. O `.claude.json`, com ponto e sem pasta, é outro arquivo: na pasta do usuário, guarda o estado do programa, e regras escritas nele são ignoradas; na pasta do projeto, ninguém lê. Por isso o `Test-Path` respondeu `False`, e o `/status` não listaria Project settings em Setting sources. O conserto, testado no PowerShell em 08/11/2026: `New-Item -ItemType Directory .claude | Out-Null; Move-Item .claude.json .claude\\settings.json`. Depois dele, `Test-Path .claude\\settings.json` respondeu `True`, e `(Get-Content .claude\\settings.json -Raw | ConvertFrom-Json).permissions.deny` mostrou `Read(./segredo.txt)`. No Claude Code, o `/permissions` passaria a mostrar a regra; essa parte vem da documentação e não foi testada."
        }
      ],
      [
        "fontes",
        [
          [
            "Depure sua configuração (/context, /status, --safe-mode, causas comuns como .claude.json e matcher errado), Claude Code",
            "https://code.claude.com/docs/pt/debug-your-config",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/doctor e /checkup, /debug, /status, /restart só no macOS e no Linux, /release-notes, /bug), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência da CLI (--safe-mode, --debug, claude doctor), Claude Code",
            "https://code.claude.com/docs/pt/cli-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Configurações (precedência, Setting sources no /status, arquivo de configurações quebrado), Claude Code",
            "https://code.claude.com/docs/pt/settings",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Memória (CLAUDE.md da pasta e de .claude carregam no início; os de subpastas, sob demanda), Claude Code",
            "https://code.claude.com/docs/pt/memory",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Estender Claude com skills (o que o /doctor confere), Claude Code",
            "https://code.claude.com/docs/pt/skills",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência de erros, Claude Code",
            "https://code.claude.com/docs/pt/errors",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Solução de problemas, Claude Code",
            "https://code.claude.com/docs/pt/troubleshooting",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Issues do Claude Code no GitHub",
            "https://github.com/anthropics/claude-code/issues",
            "comunidade",
            "08/11/2026"
          ],
          [
            "Changelog do Claude Code (2.1.169, de 08/06/2026: --safe-mode; 2.1.283, de 25/09/2026: /doctor prompt-audit); sem versão em português",
            "https://code.claude.com/docs/en/changelog",
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
          "Se uma regra não pega, pergunte ao próprio Claude por que ele a ignorou",
          "Ele não vê o que o programa carregou e costuma chutar. Faça a vistoria antes de perguntar."
        ],
        [
          "Confira o que foi carregado, quem passou por cima e como está escrito",
          "Isso. E, se a vistoria não achar nada, o --safe-mode separa o que é seu do que não é."
        ],
        [
          "Toda regra que não pega é bug do Claude Code e deve ser relatada",
          "Na maioria das vezes, a causa é um arquivo no lugar errado ou outro passando por cima. Relatar vem depois da vistoria."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Qual comando mostra se o seu CLAUDE.md entrou no contexto da sessão?",
        "o": [
          [
            "/context",
            "Isso. Os CLAUDE.md carregados aparecem entre os arquivos de memória."
          ],
          [
            "/doctor",
            "O /doctor confere a configuração e propõe consertos, mas quem mostra o que ocupa o contexto é o /context."
          ],
          [
            "/permissions",
            "O /permissions mostra as regras de permissão e o arquivo de origem de cada uma, não os CLAUDE.md."
          ]
        ],
        "c": 0
      },
      {
        "p": "Você abriu claude --safe-mode e o problema continuou igual. O que isso indica?",
        "o": [
          [
            "A causa está numa skill ou num plugin que continua ligado mesmo no --safe-mode",
            "O --safe-mode desliga skills e plugins. Se o problema continuou, a causa está fora deles."
          ],
          [
            "O --safe-mode não funcionou, porque sempre resolve problemas de configuração",
            "Ele não resolve nada: só separa as personalizações do resto. Um problema que continua tem outra causa."
          ],
          [
            "A causa não está nas personalizações: pode ser configuração, ambiente ou o programa",
            "Isso. Confira as configurações, as variáveis de ambiente e as issues do GitHub."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como sei se o meu CLAUDE.md foi lido?",
        "Rode /context e procure os arquivos de memória. Se o seu CLAUDE.md não estiver lá, confira o lugar: na pasta principal ou em .claude, ele carrega no início; numa subpasta, só quando o Claude mexe num arquivo dela."
      ],
      [
        "Pus uma regra no settings.json e ela não vale. O que faço?",
        "Rode /status e veja, em Setting sources, se o arquivo foi carregado. Depois, /permissions, para ver se a regra aparece e de onde veio. Se o arquivo nem aparece, confira o nome e o lugar: .claude\\settings.json na pasta do projeto."
      ],
      [
        "Para que serve o --safe-mode?",
        "Para descobrir se o problema está nas suas personalizações. Ele abre uma sessão com CLAUDE.md, skills, plugins, hooks e servidores MCP desligados. Se o problema some, a causa está em algum deles; se continua, está fora."
      ]
    ]
  },
  "7-19": {
    "tempo": 40,
    "video": "a7-19",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você só descobre que o {{limite-de-uso|limite de 5 horas}} está acabando quando a mensagem de bloqueio aparece, e digita pedidos longos que levaria metade do tempo para falar. Esta aula arruma o seu lado do {{claude-code|Claude Code}}: um medidor de consumo sempre à vista, atalhos do seu jeito, ditado em português e uma tela mais limpa.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui, quase tudo o que você aprendeu no módulo foi sobre o que o Claude faz. Esta aula é sobre o que você vê e como você fala com ele. Quatro ajustes mudam o dia a dia. A {{status-line|linha de status}} põe, embaixo do prompt, os números que importam: o {{modelo}}, quanto do {{contexto}} está ocupado e quanto do limite de 5 horas e do semanal você já usou. Sem ela, esses números moram no {{usage|/usage}}, que você só abre quando lembra."
      ],
      [
        "p",
        "Os atalhos de teclado poupam passos em coisas que você faz cem vezes por dia, como recuperar um pedido apagado ou procurar um pedido antigo. O {{ditado-por-voz|ditado por voz}} transforma fala em texto no prompt, e serve para descrever uma tarefa longa, com contexto, sem cansar de digitar. E os ajustes de tela, como o renderizador de {{tela-cheia|tela cheia}} e a visão de foco, deixam a conversa mais fácil de acompanhar quando o Claude trabalha muito tempo seguido."
      ],
      [
        "p",
        "Nada disso é obrigatório, e nada disso gasta limite, salvo onde a aula avisar. Mas cada ajuste mexe em configurações suas, e o laboratório usa uma {{pasta}} de teste para você experimentar sem trocar o que já funciona."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte à sala do estagiário da aula 0.0, e agora olhe para o lado de fora do vidro: você está numa **cabine de controle**, como a de um estúdio de gravação. Na mesa da cabine há **medidores**, que mostram o tempo todo como as coisas andam: é a linha de status. Há **botões** que você pode trocar de lugar, para que os mais usados fiquem à mão: são os atalhos. Há um **microfone de retorno**, pelo qual você fala com quem está na sala, sem escrever bilhete: é o ditado. E há o **vidro e as telas** da cabine, que você limpa e organiza para enxergar melhor: são a tela cheia, o foco e o tema."
      ],
      [
        "quebra",
        "Os medidores de um estúdio medem ao vivo; a linha de status é atualizada quando algo acontece, como uma resposta nova, e mostra os números da última resposta, então o /context pode marcar um pouco mais. O microfone de retorno vai direto para a sala; aqui, o seu áudio vai para os {{servidor|servidores}} da Anthropic, que o transformam em texto. E os medidores não vêm de fábrica nessa forma: a linha de status é um programa seu, que o Claude Code {{rodar|roda}} no seu PC, com as suas {{permissao|permissões}}, como um {{hook}}."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "A linha de status: o medidor sempre à vista"
      ],
      [
        "p",
        "A linha de status é uma linha de texto embaixo do prompt, desenhada por um {{script}} que você escolhe. O Claude Code roda esse script e entrega a ele, pela {{stdin|entrada padrão}}, um {{json|JSON}} com os dados da {{sessao|sessão}}; o script escreve uma linha, e é essa linha que aparece. Ele roda no seu PC e, segundo a documentação, não gasta {{token|tokens}}. O Claude Code roda o script de novo quando chega uma resposta nova, quando um /compact termina, quando o modo de permissão muda, e em mais alguns momentos; não é um relógio contínuo."
      ],
      [
        "p",
        "Os campos que mais interessam a você, entre dezenas que o JSON traz:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Campo",
            "O que traz"
          ],
          "linhas": [
            [
              "`model.display_name`",
              "O nome do modelo em uso, como Opus"
            ],
            [
              "`context_window.used_percentage`",
              "Quanto da janela de contexto está ocupado, em porcentagem"
            ],
            [
              "`rate_limits.five_hour.used_percentage`",
              "Quanto do limite de 5 horas você já usou"
            ],
            [
              "`rate_limits.seven_day.used_percentage`",
              "Quanto do limite semanal você já usou"
            ],
            [
              "`effort.level` e `fast_mode`",
              "O esforço da sessão e se o modo rápido está ligado, da aula 7.17"
            ],
            [
              "`cost.total_cost_usd`",
              "Um custo estimado ao preço de tabela; para quem é assinante, não é cobrança"
            ]
          ]
        }
      ],
      [
        "p",
        "Dois detalhes evitam susto. Os campos dos limites só existem nos planos Pro, Max e Ultra, e só depois da primeira resposta da sessão: ao abrir, eles ainda não estão lá. E a porcentagem do contexto pode vir vazia no começo. Por isso, um bom script trata a falta de cada campo, em vez de quebrar. O script desta aula é este, em {{python|Python}}, a linguagem que você usa desde o módulo 2:"
      ],
      [
        "codigo",
        {
          "texto": "import json\nimport sys\n\nsys.stdin.reconfigure(encoding=\"utf-8-sig\")\nsys.stdout.reconfigure(encoding=\"utf-8\")\n\ndados = json.load(sys.stdin)\npartes = [dados.get(\"model\", {}).get(\"display_name\", \"?\")]\n\ncontexto = (dados.get(\"context_window\") or {}).get(\"used_percentage\")\nif contexto is not None:\n    partes.append(f\"contexto {contexto:.0f}%\")\n\nlimites = dados.get(\"rate_limits\") or {}\ncinco_horas = (limites.get(\"five_hour\") or {}).get(\"used_percentage\")\nsemana = (limites.get(\"seven_day\") or {}).get(\"used_percentage\")\nif cinco_horas is not None:\n    partes.append(f\"5h {cinco_horas:.0f}%\")\nif semana is not None:\n    partes.append(f\"semana {semana:.0f}%\")\n\nprint(\" | \".join(partes))",
          "linguagem": "python",
          "rotulo": "statusline.py"
        }
      ],
      [
        "p",
        "Linha por linha, no essencial: as duas linhas com `reconfigure` fazem o Python ler e escrever em UTF-8, como a aula 7.6 fez com o hook, para um acento no nome de uma pasta não quebrar nada. O `json.load` lê o que o Claude Code mandou. Cada `if` terminado em `is not None` só acrescenta um pedaço se o campo existir. E o `print` escreve a linha final, com os pedaços separados por uma barra vertical."
      ],
      [
        "h3",
        "Dois jeitos de criar a sua"
      ],
      [
        "p",
        "O jeito mais curto é pedir: `/statusline mostre o modelo, a porcentagem do contexto e o uso do limite de 5 horas e semanal`. O Claude escreve um script na pasta `.claude` do seu usuário e já muda o seu {{settings-json|settings.json}} de usuário para usá-lo. É prático, mas troca a linha de status de todas as suas sessões, e é ele quem escreve o script: leia o que ele fez. `/statusline delete` remove."
      ],
      [
        "p",
        "O jeito manual é o do laboratório: você grava o script e põe no settings.json uma chave `statusLine`, com `\"type\": \"command\"` e, em `\"command\"`, o {{comando}} que roda o script. A chave vale no {{arquivo}} do usuário ou no de um projeto; no do projeto, só funciona depois que você confiou na pasta, a {{confianca-da-pasta|confiança da pasta}} da aula 7.4, e vale só ali. No Windows, a documentação avisa que o comando roda pelo {{git-bash|Git Bash}}, se ele estiver instalado, ou pelo {{powershell|PowerShell}}, se não; nos dois casos, escreva os caminhos com barras normais, como `C:/Projetos/cabine-teste/.claude/statusline.py`, porque o Git Bash come as barras invertidas e o comando falha sem mostrar erro."
      ],
      [
        "p",
        "Com uma linha de status sua, o rodapé deixa de mostrar a maior parte das dicas de teclado, como a de apertar Esc para interromper. E um cuidado de segurança: há linhas de status prontas, feitas pela comunidade, que se instalam com um comando `npx`. Esse comando baixa e roda {{codigo|código}} de outra pessoa com as suas permissões, a cada atualização da tela. Comece pela sua, ou pela que o `/statusline` escreve, que você consegue ler."
      ],
      [
        "h3",
        "Atalhos do seu jeito"
      ],
      [
        "p",
        "A aula 7.1 mostrou o `@`, o `!`, o Esc e a fila de mensagens. Estes outros atalhos, da documentação, poupam tempo no Windows:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Atalho",
            "O que faz"
          ],
          "linhas": [
            [
              "Seta para cima",
              "Traz o pedido anterior; também recupera um rascunho apagado com Esc duas vezes"
            ],
            [
              "Ctrl+R",
              "Procura nos pedidos antigos, digitando um pedaço"
            ],
            [
              "Ctrl+S",
              "Guarda o que você está escrevendo e limpa o prompt; apertado de novo, devolve"
            ],
            [
              "Ctrl+G",
              "Abre o pedido no seu editor de texto, para escrever com calma"
            ],
            [
              "Alt+V",
              "Cola uma imagem da área de transferência, no Windows"
            ],
            [
              "Alt+P",
              "Troca de modelo sem apagar o que você digitou"
            ],
            [
              "Alt+O",
              "Liga ou desliga o modo rápido: cuidado, ele gasta créditos de uso"
            ]
          ]
        }
      ],
      [
        "p",
        "Para trocar um atalho, o `/keybindings` cria ou abre o arquivo `C:\\Users\\SeuNome\\.claude\\keybindings.json`. Nele, cada bloco diz um lugar da tela, como `Chat`, a área do prompt, e quais teclas fazem qual ação; uma tecla com `null` fica sem ação. O Claude Code percebe as mudanças sozinho, sem reiniciar. Se você nunca sentiu falta de um atalho, não mexa: os de fábrica bastam."
      ],
      [
        "h3",
        "Falar em vez de digitar: /voice"
      ],
      [
        "p",
        "O `/voice` liga o ditado. Por padrão, você segura a barra de espaço enquanto fala e solta no fim: o texto aparece no prompt, e você confere e aperta Enter. Com `/voice tap`, um toque na barra começa e outro termina e envia, se houver pelo menos três palavras. Esc cancela uma gravação. O texto é ajustado para palavras de programação, como JSON e localhost, e reconhece o nome da pasta e da {{branch}} atual."
      ],
      [
        "p",
        "Três condições, segundo a documentação. Precisa estar logado com uma conta do claude.ai: com uma {{chave-api|chave de API}}, não funciona. Precisa de um microfone no PC: não funciona numa sessão na nuvem. E o áudio vai para os servidores da Anthropic para virar texto; a transcrição não gasta tokens nem conta no limite. O ponto que mais confunde: o idioma do ditado vem da configuração `language`, a mesma que diz em que língua o Claude responde, e, se ela estiver vazia, o padrão é **inglês**, qualquer que seja o idioma do Windows. Com `\"language\": \"portuguese\"`, o ditado entende português, e o Claude passa a responder em português. O ditado ligado continua ligado nas sessões seguintes; `/voice off` desliga."
      ],
      [
        "h3",
        "A tela: tela cheia, foco, diff e tema"
      ],
      [
        "p",
        "O `/tui fullscreen` troca o jeito de desenhar a conversa: a tela para de piscar, o mouse passa a rolar e clicar, e a memória não cresce em conversas longas. Não tem nada a ver com maximizar a janela. O Claude Code reinicia nesse modo com a conversa intacta, e `/tui default` volta ao clássico. A documentação chama esse renderizador de prévia de pesquisa: ele pode mudar."
      ],
      [
        "p",
        "Só na tela cheia, o {{focus-comando|/focus}} esconde os passos intermediários e mostra o seu último pedido, um resumo de uma linha das ferramentas usadas e a resposta final: bom para acompanhar tarefas longas sem rolar. O `/diff` mostra as mudanças nos arquivos da pasta: na tela cheia, num painel ao lado da conversa, que se atualiza enquanto o Claude trabalha; no clássico, numa caixa acima do prompt. Ele precisa de um {{repositorio|repositório}} do {{git|Git}}. O `/theme` escolhe as cores, inclusive temas para daltonismo, e o `/color` pinta a barra do prompt só nesta sessão, útil para distinguir duas janelas abertas. O {{config-comando|/config}} junta as preferências, e aceita `chave=valor` direto, como `/config theme=dark`. E o `/copy` copia a última resposta; se ela tiver blocos de código, deixa escolher qual."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**A linha de status gasta o limite?** Não: ela roda no seu PC e, segundo a documentação, não usa tokens. O ditado também não conta no limite.",
          "**E se eu já tiver uma linha de status, de um {{plugin}} ou de um mod?** A de um projeto vale por cima da do usuário, só naquela pasta. Por isso o laboratório testa numa pasta própria.",
          "**Por que a minha linha de status mostra só o modelo?** Logo ao abrir, ainda não há resposta, e os campos dos limites não chegaram. Depois do primeiro pedido, eles aparecem.",
          "**O ditado funciona no celular?** O `/voice` é do Claude Code no PC; no app do celular, o teclado do próprio celular já tem ditado.",
          "**Preciso instalar algo?** Para a linha de status desta aula, só o Python, que você já tem desde a aula 2.2. O ditado usa um módulo que vem no próprio Claude Code."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: mais linhas, cores e um relógio",
          "blocos": [
            [
              "p",
              "O script pode escrever mais de uma linha, cada `print` vira uma linha, e usar cores com códigos de escape. A chave `refreshInterval`, em segundos, faz o Claude Code rodar o script também num intervalo fixo, útil para um relógio. Para escrever na largura certa, leia as {{variavel|variáveis}} `COLUMNS` e `LINES`, que o Claude Code preenche antes de rodar o script."
            ],
            [
              "p",
              "Há também uma linha de status para cada {{subagente}}, a chave `subagentStatusLine`, e temas próprios, criados pelo `/theme` e guardados em `C:\\Users\\SeuNome\\.claude\\themes`."
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
          "pergunta": "No laboratório, a linha de status é o script statusline.py, mostrado acima. Este comando do PowerShell entrega a ele um JSON parecido com o que o Claude Code manda, com o contexto em 8%, o limite de 5 horas em 23,5% e o semanal em 41,2%. O que você acha que o script escreve?",
          "codigo": "'{\"model\": {\"display_name\": \"Opus\"}, \"context_window\": {\"used_percentage\": 8}, \"rate_limits\": {\"five_hour\": {\"used_percentage\": 23.5}, \"seven_day\": {\"used_percentage\": 41.2}}}' | python .claude\\statusline.py",
          "linguagem": "powershell",
          "resposta": "Uma linha só: `Opus | contexto 8% | 5h 24% | semana 41%`. O Python arredonda 23,5 para 24 e 41,2 para 41. Use os botões: sem os limites, que só chegam depois da primeira resposta, o script mostra só o modelo e o contexto; no começo da sessão, com o contexto ainda vazio, só o modelo; e, no fim de uma tarde puxada, os números sobem, sem quebrar nada.",
          "vivo": [
            [
              "Sem os limites (antes da primeira resposta)",
              "'{\"model\": {\"display_name\": \"Opus\"}, \"context_window\": {\"used_percentage\": 8}}' | python .claude\\statusline.py",
              "Opus | contexto 8%"
            ],
            [
              "Contexto ainda vazio",
              "'{\"model\": {\"display_name\": \"Opus\"}, \"context_window\": {\"used_percentage\": null}}' | python .claude\\statusline.py",
              "Opus"
            ],
            [
              "Fim de uma tarde puxada",
              "'{\"model\": {\"display_name\": \"Opus\"}, \"context_window\": {\"used_percentage\": 61}, \"rate_limits\": {\"five_hour\": {\"used_percentage\": 92.4}, \"seven_day\": {\"used_percentage\": 70}}}' | python .claude\\statusline.py",
              "Opus | contexto 61% | 5h 92% | semana 70%"
            ],
            [
              "Voltar ao original",
              "'{\"model\": {\"display_name\": \"Opus\"}, \"context_window\": {\"used_percentage\": 8}, \"rate_limits\": {\"five_hour\": {\"used_percentage\": 23.5}, \"seven_day\": {\"used_percentage\": 41.2}}}' | python .claude\\statusline.py",
              "Opus | contexto 8% | 5h 24% | semana 41%"
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
          "p": "Você configurou a linha de status com o uso do limite, abriu o Claude Code e ela mostra só o nome do modelo. O que é mais provável?",
          "o": [
            [
              "O script está quebrado: se estivesse certo, mostraria tudo desde o começo",
              "Um script quebrado costuma deixar a linha em branco. Mostrar só o modelo é o comportamento certo enquanto os campos não chegam."
            ],
            [
              "Ainda não houve resposta; os números do limite chegam depois da primeira",
              "Isso. Os campos do limite aparecem depois da primeira resposta da sessão, e o contexto pode vir vazio no começo."
            ],
            [
              "A linha de status só mostra o limite depois que você abre o /usage uma vez",
              "O /usage não alimenta a linha de status. Os números chegam com as respostas da sessão."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu ajuda para ditar em português, e o Claude respondeu: \"Pronto, ativei o ditado com /voice. Segure a barra de espaço e fale. Como o seu Windows está em português, ele já transcreve em português, e nada disso conta no seu limite.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: a transcrição do ditado gasta o limite de 5 horas, como um pedido normal",
              "A documentação diz que a transcrição não gasta tokens nem conta no limite. O erro está no idioma."
            ],
            [
              "Está certa: o ditado segue o idioma do Windows e não gasta o limite",
              "A parte do limite está certa, mas o idioma do ditado não vem do Windows."
            ],
            [
              "Errado: o idioma do ditado vem da configuração language, que começa em inglês",
              "Isso. Sem \"language\": \"portuguese\" nas configurações, o ditado escuta em inglês, mesmo num Windows em português."
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
            "\"Instalei uma linha de status pronta com npx.\"",
            "O npx baixa e roda código de outra pessoa com as suas permissões. Prefira a sua, ou a do /statusline, que você consegue ler."
          ],
          [
            "\"Pus o caminho do script com barras invertidas.\"",
            "No Windows com o Git Bash, elas somem e o comando falha sem erro. Escreva C:/Projetos/cabine-teste, com barras normais."
          ],
          [
            "\"O ditado transcreveu tudo em inglês.\"",
            "O idioma vem da configuração language, que começa em inglês. Ponha \"language\": \"portuguese\"."
          ],
          [
            "\"O /focus não funciona.\"",
            "Ele só existe na tela cheia. Rode /tui fullscreen antes."
          ],
          [
            "\"A linha de status sumiu depois que mexi no settings.json.\"",
            "Um erro no JSON faz o Claude Code ignorar o arquivo, como a aula 7.4 mostrou. Confira com ConvertFrom-Json."
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
          "p": "Como a linha de status funciona?",
          "r": [
            "É um programa seu, que o Claude Code roda no seu PC.",
            "Ele recebe os dados da sessão em JSON e escreve uma linha.",
            "Não gasta tokens, e os campos do limite chegam depois da primeira resposta."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que o ditado precisa para funcionar em português?",
          "r": [
            "Login com uma conta do claude.ai, e não uma chave de API.",
            "Um microfone no PC; na nuvem, não funciona.",
            "A configuração language em português; sem ela, o padrão é inglês."
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
          "titulo": "Um medidor de consumo numa pasta de teste",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "15 minutos",
          "antes": "Você vai gravar o script da linha de status numa pasta de teste, conferir a saída dele no PowerShell sem o Claude Code, ligar a linha de status só nessa pasta, junto com o idioma português, e ver os números aparecerem depois do primeiro pedido. Depois, vai experimentar o ditado e a tela cheia. Precisa do Python, que entrou no seu PC na aula 2.2, e do Claude Code logado com a sua conta do claude.ai. As configurações ficam no settings.json da pasta C:\\Projetos\\cabine-teste e valem só ali; a sua linha de status e o seu idioma de sempre não mudam. A exceção é o /voice: o ditado ligado continua ligado nas outras sessões, até você rodar /voice off. Os passos 1 a 3 foram rodados de verdade no PowerShell 5.1 com o Python 3.12, em 08/11/2026. Os passos com o Claude Code não foram testados antes de publicar: foram escritos a partir da documentação oficial, conferida em 08/11/2026, e as telas podem variar.",
          "naoTestado": "Os passos 4 a 13 exigem o Claude Code interativo com login e um microfone, que não foram usados nos testes deste módulo: rodar o programa no PC do teste usaria a conta e as configurações do dono. O que deve acontecer vem das páginas oficiais Personalize sua linha de status, Ditado por voz e Renderização em tela cheia, conferidas em 08/11/2026.",
          "passos": [
            {
              "faz": "No PowerShell, cole este bloco inteiro de uma vez. Ele cria a pasta C:\\Projetos\\cabine-teste, grava o script em .claude\\statusline.py e um JSON de exemplo em exemplo.json. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\cabine-teste\\.claude | Out-Null; Set-Location C:\\Projetos\\cabine-teste\n@'\nimport json\nimport sys\n\nsys.stdin.reconfigure(encoding=\"utf-8-sig\")\nsys.stdout.reconfigure(encoding=\"utf-8\")\n\ndados = json.load(sys.stdin)\npartes = [dados.get(\"model\", {}).get(\"display_name\", \"?\")]\n\ncontexto = (dados.get(\"context_window\") or {}).get(\"used_percentage\")\nif contexto is not None:\n    partes.append(f\"contexto {contexto:.0f}%\")\n\nlimites = dados.get(\"rate_limits\") or {}\ncinco_horas = (limites.get(\"five_hour\") or {}).get(\"used_percentage\")\nsemana = (limites.get(\"seven_day\") or {}).get(\"used_percentage\")\nif cinco_horas is not None:\n    partes.append(f\"5h {cinco_horas:.0f}%\")\nif semana is not None:\n    partes.append(f\"semana {semana:.0f}%\")\n\nprint(\" | \".join(partes))\n'@ | Set-Content -Encoding ascii .claude\\statusline.py\n@'\n{\"model\": {\"id\": \"claude-opus-5-5\", \"display_name\": \"Opus\"},\n \"context_window\": {\"used_percentage\": 8},\n \"rate_limits\": {\"five_hour\": {\"used_percentage\": 23.5, \"resets_at\": 1738425600},\n                 \"seven_day\": {\"used_percentage\": 41.2, \"resets_at\": 1738857600}}}\n'@ | Set-Content -Encoding ascii exemplo.json",
              "espera": "Só o cursor, já na pasta C:\\Projetos\\cabine-teste."
            },
            {
              "faz": "Teste o script sem o Claude Code, entregando a ele o JSON de exemplo:",
              "cola": "Get-Content exemplo.json -Raw | python .claude\\statusline.py",
              "saida": "Opus | contexto 8% | 5h 24% | semana 41%",
              "espera": "A mesma linha da saída acima. Se aparecer um erro do Python, confira se o bloco do passo 1 foi colado inteiro."
            },
            {
              "faz": "Cole este bloco, que grava o settings.json da pasta C:\\Projetos\\cabine-teste com a linha de status e o idioma português, e confere o comando gravado:",
              "cola": "@'\n{\n  \"statusLine\": {\n    \"type\": \"command\",\n    \"command\": \"python C:/Projetos/cabine-teste/.claude/statusline.py\"\n  },\n  \"language\": \"portuguese\"\n}\n'@ | Set-Content -Encoding ascii C:\\Projetos\\cabine-teste\\.claude\\settings.json\n(Get-Content C:\\Projetos\\cabine-teste\\.claude\\settings.json -Raw | ConvertFrom-Json).statusLine.command",
              "saida": "python C:/Projetos/cabine-teste/.claude/statusline.py",
              "espera": "A linha com o comando, igual à saída acima: o JSON está bem formado."
            },
            {
              "faz": "Abra o Claude Code na pasta. Se ele perguntar se você confia nela, aceite.",
              "cola": "claude",
              "espera": "Embaixo do prompt aparece a sua linha, por enquanto só com o nome do modelo, como Opus."
            },
            {
              "faz": "Cole este pedido:",
              "cola": "Diga oi em uma palavra.",
              "espera": "Depois da resposta, a linha ganha os números: contexto, 5h e semana, com as suas porcentagens de verdade."
            },
            {
              "faz": "Ligue o ditado:",
              "cola": "/voice",
              "espera": "Uma mensagem dizendo que o modo de voz foi ligado, que é para segurar a barra de espaço para gravar, e qual é o idioma do ditado. Se ele disser que precisa de uma conta do claude.ai, você está logado com uma chave de API."
            },
            {
              "faz": "Segure a barra de espaço, diga \"liste os arquivos desta pasta\" e solte.",
              "espera": "O rodapé mostra que está ouvindo; ao soltar, a frase aparece no prompt, em português, esperando o seu Enter."
            },
            {
              "faz": "Confira o texto e aperte Enter.",
              "espera": "O Claude responde com a lista dos arquivos da pasta: exemplo.json e a pasta .claude."
            },
            {
              "faz": "Mude para a tela cheia:",
              "cola": "/tui fullscreen",
              "espera": "O Claude Code reinicia e volta com a mesma conversa, agora sem piscar, e a roda do mouse rola a conversa."
            },
            {
              "faz": "Ligue a visão de foco:",
              "cola": "/focus",
              "espera": "A conversa passa a mostrar só o seu último pedido, um resumo de uma linha das ferramentas e a resposta. Rode /focus de novo para voltar."
            },
            {
              "faz": "Se preferir o desenho de antes, volte ao clássico:",
              "cola": "/tui default",
              "espera": "O Claude Code reinicia no renderizador clássico, com a conversa intacta."
            },
            {
              "faz": "Desligue o ditado, se não for usar no dia a dia:",
              "cola": "/voice off",
              "espera": "Uma confirmação de que o ditado foi desligado."
            },
            {
              "faz": "Saia do Claude Code:",
              "cola": "/exit",
              "espera": "Você volta ao PowerShell. A pasta de teste pode ficar: a linha de status só aparece quando você abre o Claude Code nela."
            }
          ],
          "errado": "se a linha de status ficar em branco no passo 4, confira se você aceitou confiar na pasta e se o passo 2 funcionou; se o comando `python` não for reconhecido no PowerShell, o Python não está no {{path|PATH}}, como na aula 2.2. Se o settings.json tiver um erro, o Claude Code mostra uma tela de erro de configurações ao abrir, como na aula 7.4. Se o ditado não ouvir nada, confira se o Windows deixa aplicativos usarem o microfone, nas configurações de privacidade do Windows. Se o ditado transcrever em inglês, confira a linha \"language\" do passo 3."
        }
      ],
      [
        "fontes",
        [
          [
            "Personalize sua linha de status (campos do JSON, quando atualiza, configuração no Windows, não gasta tokens), Claude Code",
            "https://code.claude.com/docs/pt/statusline",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Modo interativo (atalhos de teclado, /diff, /btw, histórico), Claude Code",
            "https://code.claude.com/docs/pt/interactive-mode",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Personalizar atalhos de teclado (keybindings.json), Claude Code",
            "https://code.claude.com/docs/pt/keybindings",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Ditado por voz (requisitos, modos, idioma pela configuração language, padrão inglês), Claude Code",
            "https://code.claude.com/docs/pt/voice-dictation",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Renderização em tela cheia (/tui, prévia de pesquisa), Claude Code",
            "https://code.claude.com/docs/pt/fullscreen",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/statusline, /keybindings, /voice, /focus, /theme, /color, /config, /copy), Claude Code",
            "https://code.claude.com/docs/pt/commands",
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
          "A linha de status é um script seu que não gasta tokens, e o ditado segue o language",
          "Isso. Os dois, com os atalhos e a tela cheia, arrumam o seu lado da conversa."
        ],
        [
          "A linha de status lê o /usage a cada segundo, e o ditado segue o Windows",
          "Ela recebe os dados do Claude Code quando algo acontece, e o ditado segue a configuração language."
        ],
        [
          "A linha de status vem pronta de fábrica, e para mudar o ditado é preciso instalar um módulo",
          "A linha de status é um script seu, e o módulo do ditado já vem no Claude Code."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Onde o script da linha de status recebe os dados da sessão?",
        "o": [
          [
            "Num arquivo que o Claude Code grava na pasta .claude",
            "Não há arquivo no meio: os dados chegam pela entrada padrão."
          ],
          [
            "Num JSON entregue pelo Claude Code na entrada padrão",
            "Isso. O script lê esse JSON e escreve uma linha."
          ],
          [
            "Numa consulta que o script faz ao /usage pela internet",
            "O script não consulta nada: os dados chegam prontos do Claude Code."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você quer testar uma linha de status sem trocar a de todas as suas sessões. Onde configura?",
        "o": [
          [
            "No settings.json do usuário, com uma chave nova",
            "O do usuário vale para todas as sessões, que é o que você quer evitar."
          ],
          [
            "Com /statusline, que grava só na pasta atual",
            "O /statusline muda o settings.json do seu usuário, e vale para todas as sessões."
          ],
          [
            "No settings.json de uma pasta de teste, em .claude",
            "Isso. A chave statusLine do projeto vale só ali, depois que você confiar na pasta."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como vejo o meu limite o tempo todo?",
        "Com uma linha de status que leia os campos rate_limits do JSON que o Claude Code entrega. Os campos aparecem nos planos Pro, Max e Ultra, depois da primeira resposta da sessão. O /statusline monta uma para você, ou siga o laboratório desta aula."
      ],
      [
        "Por que o ditado não entende português?",
        "O idioma do ditado vem da configuração language, que começa em inglês. Ponha \"language\": \"portuguese\" no settings.json, ou mude pelo /config. Isso também faz o Claude responder em português."
      ],
      [
        "O /focus não aparece. Por quê?",
        "O /focus só existe no renderizador de tela cheia. Rode /tui fullscreen; o Claude Code reinicia com a conversa intacta, e aí o /focus funciona."
      ]
    ]
  },
  "7-20": {
    "tempo": 47,
    "video": "a7-20",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já pediu uma correção, o Claude parou no meio dizendo \"pronto\", e você teve de mandar \"continue\" cinco vezes até a conferência passar. Esta aula mostra o {{goal-comando|/goal}} e o {{loop-comando|/loop}}, que mantêm o {{claude-code|Claude Code}} trabalhando sem você pedir cada passo, e como pôr uma condição de parada e um teto de voltas antes de sair de perto.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui, cada rodada de trabalho do Claude começou com um pedido seu: você pede, ele trabalha, responde e para. Dois recursos tiram você desse vaivém. O `/goal` define uma condição de chegada, e o Claude continua, {{turno}} após turno, até ela ser atendida. O `/loop` repete um pedido de tempos em tempos, como conferir a cada cinco minutos se um site já foi publicado, enquanto a {{sessao|sessão}} estiver aberta."
      ],
      [
        "p",
        "O ganho é real: tarefas longas, com um fim que dá para medir, andam sozinhas enquanto você faz outra coisa. O risco também é real, e é por isso que esta aula vem depois das de custo. Cada volta relê a conversa inteira e gasta {{limite-de-uso|limite}}; uma volta que nunca termina, ou que termina com o Claude \"dando um jeito\" de passar na conferência, é pior que nenhuma. Na {{internet}}, a ideia de deixar a IA em ciclo até terminar ganhou o apelido de \"Ralph Wiggum\", com promessas de resultados cem vezes maiores; o `/goal` é a versão oficial da ideia, com freios que o vídeo viral não mostra."
      ],
      [
        "p",
        "O que você aprende aqui é escrever o fim antes de começar: a prova que vai aparecer na conversa, o que não pode ser mexido no caminho e o número máximo de voltas. É o mesmo \"{{pronto-quando|pronto quando}}\" da aula 6.1, agora com consequência: é ele que decide quando o Claude para."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte ao estagiário da aula 0.0. Com o `/goal`, você deixa na mesa dele o critério de pronto, por escrito, e põe ao lado um **conferente**: ao fim de cada rodada, o conferente lê o relatório do estagiário e dá um de três veredictos. \"Ainda não\", e o estagiário continua; \"pronto\", e ele para; \"impossível\", e ele para também, dizendo por quê. Com o `/loop`, você deixa um **despertador**: a cada tantos minutos, ele toca, e o estagiário repete a mesma tarefa, enquanto a sala estiver aberta."
      ],
      [
        "quebra",
        "Um conferente de verdade abriria as gavetas para conferir. Este não abre nada: é outro {{modelo}}, pequeno e rápido, que só lê o que o estagiário escreveu na conversa. Se o estagiário disser que testou sem testar, ou mexer na régua para passar, o conferente pode acreditar; por isso a condição precisa exigir uma prova que apareça na conversa, como a saída de um teste. O despertador também é diferente de um despertador de verdade: o de intervalo fixo não desliga com a tecla Esc, e cada toque custa uma releitura da conversa inteira."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "/goal: até a condição ser atendida"
      ],
      [
        "p",
        "O `/goal` existe desde a versão 2.1.139, de 11/05/2026. Você digita `/goal` seguido da condição, e o Claude começa a trabalhar na hora, sem precisar de outro pedido. Enquanto o objetivo está ativo, um indicador `◎ /goal active` mostra há quanto tempo ele {{rodar|roda}}. A cada turno que termina, o Claude Code manda a condição e a conversa para um modelo pequeno e rápido, em geral da linha Haiku, que devolve um veredicto com um motivo curto: não atendida, e o Claude continua usando o motivo como orientação; atendida, e o objetivo se encerra; impossível, e ele também se encerra, registrando o motivo. Ctrl+O mostra os motivos de cada veredicto."
      ],
      [
        "p",
        "O mesmo {{comando}} faz o resto: `/goal` sozinho mostra a condição, há quanto tempo roda, quantos turnos foram avaliados, quantos {{token|tokens}} foram gastos e o último motivo; `/goal clear` encerra antes da hora (e aceitam-se também `stop`, `off`, `reset`, `none` e `cancel`); e um `/clear` também apaga o objetivo. Um caso do começo ao fim, o do laboratório: a {{pasta}} tem um `juros.py` com três funções erradas e um `conferir.py`, que testa as três e termina com o {{codigo-de-saida|código de saída}} 0 só se todas passarem. Você digita a condição, o Claude roda a conferência, vê os três erros, corrige um, roda de novo, e o conferente diz \"ainda não\" até a saída mostrar 3 de 3."
      ],
      [
        "h3",
        "Uma boa condição: prova, restrição e teto"
      ],
      [
        "p",
        "O conferente julga só pelo que aparece na conversa. Ele não roda comandos nem abre {{arquivo|arquivos}}. Por isso, a documentação recomenda que a condição tenha três partes, e você pode acrescentar uma quarta:"
      ],
      [
        "lista",
        [
          "**Um fim que dá para medir**: um teste que passa, um código de saída, uma contagem de arquivos, uma fila vazia. \"O código fica bom\" não é mensurável.",
          "**A prova declarada**: como o Claude deve mostrar que chegou, por exemplo \"`python conferir.py` termina com código 0\". A saída aparece na conversa, e o conferente lê.",
          "**As restrições**: o que não pode mudar no caminho, como \"sem mudar o `conferir.py`\". Sem isso, o jeito mais curto de passar num teste pode ser alterar o teste.",
          "**O teto**: uma cláusula como \"ou pare depois de 5 turnos\". O Claude relata o progresso contra ela, e o conferente julga pela conversa."
        ]
      ],
      [
        "p",
        "A condição pode ter até 4.000 caracteres. Sem o teto, não há um número máximo de voltas: a documentação diz que o ciclo para quando a condição é atendida ou julgada impossível, quando um erro exige você, ou quando o Claude passa vários turnos seguidos sem usar ferramenta nenhuma, sinal de que não está avançando. Em todos os outros casos, ele continua. O {{plugin}} oficial `ralph-loop`, a versão em plugin da mesma ideia, tem uma {{flag|opção}} de máximo de voltas cujo padrão, segundo o próprio README, é ilimitado. O teto é seu."
      ],
      [
        "p",
        "E a restrição precisa de uma conferência sua no fim. Uma conferência que diz 3 de 3 pode ter passado por dois caminhos: um conserto honesto no `juros.py`, ou uma mudança no próprio `conferir.py` que o faz aprovar tudo. Para o conferente, as duas conversas podem parecer iguais. O laboratório guarda uma cópia do `conferir.py` original e compara as duas no fim, com o `fc.exe`, um comando do Windows que compara arquivos linha por linha. O resultado real de cada caminho, testado para esta aula:"
      ],
      [
        "saida",
        "Comparing files conferir.py and CONFERIR-ORIGINAL.PY\nFC: no differences encountered"
      ],
      [
        "p",
        "Essa é a saída do conserto honesto: os dois arquivos são iguais. Se o Claude tivesse trocado a comparação do `conferir.py` por uma que aprova tudo, o `fc.exe` mostraria as linhas diferentes, com o `if True:` no lugar do `if veio == esperado:`. A aula 16.1b volta a esse risco, o teste que não testa."
      ],
      [
        "h3",
        "O que encerra ou pausa um objetivo"
      ],
      [
        "p",
        "Além do \"atendida\" e do \"impossível\", quatro tipos de erro encerram o objetivo, porque só você resolve: falha de login, créditos esgotados, uma conversa que estourou o {{contexto}} e não pôde ser compactada, e um modelo indisponível. Aparece um aviso começando com `Goal cleared after an unrecoverable error`. Outros erros não encerram: os que costumam passar sozinhos, como {{servidor}} sobrecarregado, são tentados de novo até três vezes; os que só repetiriam, como bater no limite de 5 horas, pausam o objetivo, com um aviso começando com `Goal paused`. Se a sessão estiver esperando o limite renovar, o trabalho continua quando ele renova."
      ],
      [
        "p",
        "Dois cuidados para o seu PC. O `/goal` não muda o modo de {{permissao|permissão}}: no modo Manual, o Claude continua pedindo licença a cada ação; no {{modo-automatico|automático}}, o revisor continua conferindo; no {{bypass}}, ele faz tudo sem perguntar, por quantas voltas a condição permitir. Por isso, use uma pasta de teste, ou um projeto com {{commit}} feito antes, como o módulo 3 ensinou. E, quando um {{subagente}} ou um comando em {{segundo-plano|segundo plano}} ainda está rodando, o Claude Code pula a avaliação daquele turno e espera o trabalho terminar."
      ],
      [
        "h3",
        "/loop: repetir no relógio"
      ],
      [
        "p",
        "O `/loop`, que existe desde a versão 2.1.71, de 07/03/2026, repete um pedido enquanto a sessão estiver aberta. O que você passa decide o comportamento:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Você digita",
            "O que acontece"
          ],
          "linhas": [
            [
              "`/loop 5m confira se o site voltou`",
              "Repete a cada 5 minutos, num horário fixo; aceita s, m, h e d"
            ],
            [
              "`/loop confira se o site voltou`",
              "O Claude escolhe a espera a cada volta, entre 1 minuto e 1 hora, e diz por quê"
            ],
            [
              "`/loop` sozinho",
              "Roda um pedido de manutenção pronto: continuar o trabalho inacabado, cuidar do {{pull-request|pull request}} da {{branch}} e fazer limpezas"
            ]
          ]
        }
      ],
      [
        "p",
        "O intervalo fixo vira uma {{expressao-cron|expressão cron}}, como as tarefas agendadas da aula 7.11, com granularidade de um minuto: segundos são arredondados, e intervalos sem passo exato, como `7m`, viram o mais próximo, com aviso. As execuções sofrem um pequeno atraso proposital, para não caírem todas no mesmo instante: até metade do intervalo, no máximo 30 minutos; a cada 5 minutos, o loop roda 15 segundos antes, para aproveitar o {{cache}} de cinco minutos. O pedido só dispara entre um turno e outro, com a sessão parada; se o Claude estiver ocupado, espera. Um loop de intervalo fixo expira sozinho 7 dias depois de criado, e uma sessão aceita até 50 tarefas agendadas."
      ],
      [
        "p",
        "Parar é onde mais gente erra. Um loop **sem intervalo**, em que o Claude escolhe a espera, para com Esc enquanto espera a próxima volta, e aparece `Pending wakeup cancelled`. Um loop **com intervalo fixo** não para com Esc nem com Ctrl+C: é preciso pedir ao Claude, por exemplo \"cancele o loop que confere o site\". E fechar o {{terminal}} para tudo, porque o loop vive na sessão. Uma mudança recente: na versão 2.1.319, de 06/11/2026, o changelog diz que o loop sem intervalo agora termina quando uma volta acaba sem marcar a próxima; a documentação, conferida em 08/11/2026, ainda descreve um despertar de reserva cerca de 20 minutos depois. As fontes discordam, e o changelog é o mais novo. Para um lembrete único, nem precisa de `/loop`: escreva \"daqui a 45 minutos, confira se os testes passaram\"."
      ],
      [
        "h3",
        "Quanto custa deixar rodando"
      ],
      [
        "p",
        "Cada volta de um loop e cada turno de um objetivo mandam a conversa inteira de novo, como a aula 7.17 mostrou. Um loop de 5 minutos durante 8 horas são 96 voltas, cada uma relendo tudo; com o cache quente, cada releitura sai com desconto, mas soma. A documentação de custos lista os dois entre os motivos de o uso subir numa sessão longa, junto com as verificações que o `/goal` faz enquanto espera trabalho em segundo plano. Desde a versão 2.1.243, de 25/08/2026, o {{usage|/usage}} mostra uma linha para cada loop pesado: com que frequência roda, quantas vezes rodou, os tokens no total e por volta."
      ],
      [
        "p",
        "Três hábitos baratos: comece um loop numa sessão nova e pequena, e não no fim de uma conversa enorme; use o maior intervalo que resolve; e, para algo que precisa sobreviver a fechar o PC, use uma tarefa agendada na nuvem, das aulas 7.11 e 7.21, e não um loop esquecido aberto."
      ],
      [
        "h3",
        "/goal, /loop ou outra coisa?"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Quero",
            "Use",
            "O próximo passo começa quando"
          ],
          "linhas": [
            [
              "Que ele continue até um resultado",
              "/goal",
              "O turno anterior termina"
            ],
            [
              "Conferir algo de tempos em tempos",
              "/loop",
              "Passa o intervalo"
            ],
            [
              "Uma regra minha decidindo, em toda sessão",
              "Um {{hook}} do evento Stop, da aula 7.6",
              "O turno anterior termina, e o seu {{script}} decide"
            ],
            [
              "Algo que rode com a sessão fechada",
              "Tarefa agendada, aula 7.11",
              "Chega o horário marcado"
            ]
          ]
        }
      ],
      [
        "p",
        "Por baixo, o `/goal` é justamente um hook do evento Stop, baseado num pedido a um modelo, que vale só para a sessão atual. E ele funciona também no `claude -p`, no app desktop e pelo {{remote-control|Remote Control}}."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Posso sair de perto?** Pode, com três condições: o PC ligado, a sessão aberta e um teto na condição. Num PC em bypass, faça isso só numa pasta de teste ou com commit feito.",
          "**Quanto gasta?** Depende do número de voltas e do tamanho da conversa. O avaliador do /goal usa um modelo pequeno, de custo pequeno perto do trabalho principal; o que pesa são os turnos do Claude.",
          "**E se ele mexer no teste para passar?** Ponha a restrição na condição e confira no fim, como no laboratório, comparando com uma cópia ou com o {{git|Git}}.",
          "**O loop continua se eu fechar o terminal?** Não. Ele vive na sessão. Para continuar com o PC desligado, a nuvem; para continuar sem terminal, mas com o PC ligado, uma sessão em segundo plano, com `/background`.",
          "**Retomar a sessão traz tudo de volta?** O objetivo volta, com a contagem de turnos e de tokens zerada. Os loops de intervalo fixo voltam, sem repetir as voltas perdidas; o loop sem intervalo não volta: rode /loop de novo."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o Ralph, o Stop hook e as variáveis",
          "blocos": [
            [
              "p",
              "O apelido vem de um texto de Geoffrey Huntley que resumiu a técnica como \"um laço em Bash\": um programa que manda o mesmo pedido à IA de novo e de novo, enquanto ela melhora o próprio trabalho lendo os arquivos. O plugin oficial `ralph-loop` faz isso com um Stop hook escrito em Bash, que, no Windows, depende do Git Bash. O `/goal` faz o mesmo papel sem instalar nada."
            ],
            [
              "p",
              "Duas {{variavel|variáveis}} mudam o comportamento: `CLAUDE_CODE_GOAL_CHECKIN_MINUTES` muda o intervalo das verificações que o `/goal` faz enquanto espera trabalho em segundo plano, e com `0` desliga as verificações e as novas tentativas automáticas; `CLAUDE_CODE_DISABLE_CRON=1` desliga o agendador inteiro, e o `/loop` some."
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
          "pergunta": "O /goal terminou dizendo que a condição foi atendida. Você abre o conferir.py e encontra a versão abaixo. O juros.py continua com os três erros do começo. O que você acha que `python conferir.py` mostra agora?",
          "codigo": "import sys\n\nfrom juros import montante_composto, montante_simples, taxa_mensal\n\ncasos = [\n    (\"montante_simples\", round(montante_simples(1000, 0.01, 12), 2), 1120.0),\n    (\"montante_composto\", round(montante_composto(1000, 0.01, 12), 2), 1126.83),\n    (\"taxa_mensal\", round(taxa_mensal(0.12), 6), 0.009489),\n]\n\ncertos = 0\nfor nome, veio, esperado in casos:\n    if True:\n        certos += 1\n        print(f\"OK    {nome}\")\n    else:\n        print(f\"ERRO  {nome}: esperado {esperado}, veio {veio}\")\n\nprint(f\"{certos} de {len(casos)} certos\")\nsys.exit(0 if certos == len(casos) else 1)",
          "linguagem": "python",
          "saida": "OK    montante_simples\nOK    montante_composto\nOK    taxa_mensal\n3 de 3 certos",
          "resposta": "Três OK e \"3 de 3 certos\", com os três erros ainda no juros.py. A linha `if True:` aprova tudo, sem comparar nada: a conferência virou um carimbo. A saída é idêntica à de um conserto honesto, e é por isso que o conferente do /goal, que só lê a conversa, não percebe. Use o botão para ver o conferir.py original com o mesmo juros.py: os três erros aparecem. A defesa é a restrição na condição e a sua comparação no fim.",
          "vivo": [
            [
              "Voltar ao conferir.py original",
              "import sys\n\nfrom juros import montante_composto, montante_simples, taxa_mensal\n\ncasos = [\n    (\"montante_simples\", round(montante_simples(1000, 0.01, 12), 2), 1120.0),\n    (\"montante_composto\", round(montante_composto(1000, 0.01, 12), 2), 1126.83),\n    (\"taxa_mensal\", round(taxa_mensal(0.12), 6), 0.009489),\n]\n\ncertos = 0\nfor nome, veio, esperado in casos:\n    if veio == esperado:\n        certos += 1\n        print(f\"OK    {nome}\")\n    else:\n        print(f\"ERRO  {nome}: esperado {esperado}, veio {veio}\")\n\nprint(f\"{certos} de {len(casos)} certos\")\nsys.exit(0 if certos == len(casos) else 1)",
              "ERRO  montante_simples: esperado 1120.0, veio 120.0\nERRO  montante_composto: esperado 1126.83, veio 1120.0\nERRO  taxa_mensal: esperado 0.009489, veio 0.01\n0 de 3 certos"
            ],
            [
              "A versão com o if True",
              "import sys\n\nfrom juros import montante_composto, montante_simples, taxa_mensal\n\ncasos = [\n    (\"montante_simples\", round(montante_simples(1000, 0.01, 12), 2), 1120.0),\n    (\"montante_composto\", round(montante_composto(1000, 0.01, 12), 2), 1126.83),\n    (\"taxa_mensal\", round(taxa_mensal(0.12), 6), 0.009489),\n]\n\ncertos = 0\nfor nome, veio, esperado in casos:\n    if True:\n        certos += 1\n        print(f\"OK    {nome}\")\n    else:\n        print(f\"ERRO  {nome}: esperado {esperado}, veio {veio}\")\n\nprint(f\"{certos} de {len(casos)} certos\")\nsys.exit(0 if certos == len(casos) else 1)",
              "OK    montante_simples\nOK    montante_composto\nOK    taxa_mensal\n3 de 3 certos"
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
          "p": "Qual condição de /goal o conferente consegue julgar sozinho, só lendo a conversa?",
          "o": [
            [
              "O código fica bom e fácil de manter, como um programador experiente faria",
              "Bom e fácil de manter não é mensurável, e o conferente não lê os arquivos para julgar."
            ],
            [
              "Os arquivos da pasta ficam certos, conferidos pelo próprio conferente",
              "O conferente não abre arquivos nem roda comandos: ele só lê a conversa."
            ],
            [
              "python conferir.py dá 3 de 3, sem mexer no conferir.py, até 5 turnos",
              "Isso. Fim mensurável, prova que aparece na conversa, restrição e teto."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu para o Claude vigiar o site enquanto almoça, e ele respondeu: \"Deixei rodando /loop 10m confira se o site voltou ao ar. Quando quiser parar, é só apertar Esc.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: o loop de intervalo fixo não para com Esc; é preciso pedir para cancelar",
              "Isso. Esc para o loop sem intervalo, enquanto ele espera. O de intervalo fixo, como 10m, só para pedindo ao Claude, fechando a sessão ou depois de 7 dias."
            ],
            [
              "Errado: o /loop só aceita intervalos de 1 hora para cima, como as tarefas na nuvem",
              "O /loop aceita intervalos a partir de 1 minuto. O mínimo de 1 hora é das tarefas agendadas na nuvem."
            ],
            [
              "Está certa: o Esc para qualquer /loop, com ou sem intervalo definido",
              "O Esc só para o loop sem intervalo. Com 10m, ele continua, mesmo depois do Esc."
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
            "\"Deixei um /goal rodando sem teto.\"",
            "Sem cláusula de turnos, não há máximo de voltas. Acrescente \"ou pare depois de N turnos\"."
          ],
          [
            "\"O conferente olhou os arquivos e aprovou.\"",
            "Ele só lê a conversa. Peça uma prova que apareça nela, como a saída do teste."
          ],
          [
            "\"Apertei Esc e o loop de 5 minutos parou.\"",
            "O de intervalo fixo não para com Esc. Peça ao Claude para cancelar e confira."
          ],
          [
            "\"Fechei o terminal, e o loop continua na nuvem.\"",
            "O loop vive na sessão e morre com ela. Para rodar com o PC desligado, use uma tarefa agendada na nuvem."
          ],
          [
            "\"Com o /goal, ele passa a pedir licença.\"",
            "O /goal não muda o modo de permissão. Num PC em bypass, ele age sem perguntar a cada volta."
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
          "p": "O que uma boa condição de /goal precisa ter?",
          "r": [
            "Um fim que dá para medir, como um teste que passa.",
            "A prova que deve aparecer na conversa, porque o conferente só lê a conversa.",
            "As restrições, como não mexer no teste, e um teto de turnos."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Como um /loop para?",
          "r": [
            "Com intervalo fixo: pedindo ao Claude para cancelar.",
            "Sem intervalo: com Esc, enquanto ele espera a próxima volta.",
            "Sozinho: ao fechar a sessão, ou 7 dias depois de criado."
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
          "titulo": "Um objetivo com teto e um loop com fim",
          "lugar": "No PC, com o PowerShell e o Claude Code",
          "tempo": "20 minutos",
          "antes": "Você vai criar uma pasta de teste com um juros.py que tem três erros, um conferir.py que testa as três funções e uma cópia do conferir.py original. Vai deixar o /goal corrigir os erros com um teto de 5 turnos e a proibição de mexer na conferência, conferir você mesmo no fim, e depois criar um /loop de 1 minuto e cancelá-lo. Precisa do {{python|Python}}, da aula 2.2, e do Claude Code logado. Nada fora da pasta C:\\Projetos\\goal-teste é tocado; se o seu Claude Code está em bypass, ele vai editar sem perguntar, e por isso a pasta é de teste. Se ele pedir permissão, aceite. Os passos 1, 2 e 10 foram rodados de verdade no PowerShell 5.1 com o Python 3.12, em 08/11/2026, e as saídas dos passos 7 e 8 são as de um conserto honesto, rodado à mão na mesma data. Os passos com o Claude Code não foram testados antes de publicar: foram escritos a partir da documentação oficial, conferida em 08/11/2026.",
          "naoTestado": "Os passos 3 a 9 e 11 a 13 exigem o Claude Code interativo com login, que não foi aberto nos testes deste módulo: rodar o programa no PC do teste usaria a conta e o limite do dono. O que deve acontecer vem das páginas oficiais Manter Claude trabalhando em direção a um objetivo e Executar prompts em um cronograma, conferidas em 08/11/2026. As saídas dos passos 7 e 8 vêm de um conserto feito à mão no juros.py, e o Claude pode corrigir de outro jeito com o mesmo resultado.",
          "passos": [
            {
              "faz": "No PowerShell, cole este bloco inteiro de uma vez. Ele cria a pasta C:\\Projetos\\goal-teste com o juros.py, o conferir.py e a cópia conferir-original.py. Se o terminal avisar que o texto tem várias linhas, confirme a colagem.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\goal-teste | Out-Null; Set-Location C:\\Projetos\\goal-teste\n@'\ndef montante_simples(capital, taxa, meses):\n    return capital * taxa * meses\n\n\ndef montante_composto(capital, taxa, meses):\n    return capital * (1 + taxa * meses)\n\n\ndef taxa_mensal(taxa_anual):\n    return taxa_anual / 12\n'@ | Set-Content -Encoding ascii juros.py\n@'\nimport sys\n\nfrom juros import montante_composto, montante_simples, taxa_mensal\n\ncasos = [\n    (\"montante_simples\", round(montante_simples(1000, 0.01, 12), 2), 1120.0),\n    (\"montante_composto\", round(montante_composto(1000, 0.01, 12), 2), 1126.83),\n    (\"taxa_mensal\", round(taxa_mensal(0.12), 6), 0.009489),\n]\n\ncertos = 0\nfor nome, veio, esperado in casos:\n    if veio == esperado:\n        certos += 1\n        print(f\"OK    {nome}\")\n    else:\n        print(f\"ERRO  {nome}: esperado {esperado}, veio {veio}\")\n\nprint(f\"{certos} de {len(casos)} certos\")\nsys.exit(0 if certos == len(casos) else 1)\n'@ | Set-Content -Encoding ascii conferir.py\nCopy-Item conferir.py conferir-original.py",
              "espera": "Só o cursor, já na pasta C:\\Projetos\\goal-teste, com três arquivos .py."
            },
            {
              "faz": "Rode a conferência e veja o código de saída:",
              "cola": "python conferir.py; $LASTEXITCODE",
              "saida": "ERRO  montante_simples: esperado 1120.0, veio 120.0\nERRO  montante_composto: esperado 1126.83, veio 1120.0\nERRO  taxa_mensal: esperado 0.009489, veio 0.01\n0 de 3 certos\n1",
              "espera": "Três linhas de ERRO, \"0 de 3 certos\" e o código 1, de falha."
            },
            {
              "faz": "Abra o Claude Code na pasta. Se ele perguntar se você confia nela, aceite.",
              "cola": "claude",
              "espera": "O Claude Code abre, pronto para um pedido."
            },
            {
              "faz": "Defina o objetivo, com a prova, a restrição e o teto:",
              "cola": "/goal python conferir.py imprime 3 de 3 certos e termina com codigo 0, sem mudar conferir.py nem conferir-original.py; ou pare depois de 5 turnos",
              "espera": "Aparece o indicador ◎ /goal active, e o Claude começa sozinho: roda a conferência, lê os erros e corrige o juros.py."
            },
            {
              "faz": "Espere, sem digitar nada, até o objetivo terminar.",
              "espera": "A cada turno, uma linha com o veredicto do conferente. No fim, um registro de objetivo atingido, ou um aviso de que o teto de 5 turnos chegou. Ctrl+O mostra os motivos; Esc fecha."
            },
            {
              "faz": "Veja o resumo do objetivo:",
              "cola": "/goal",
              "espera": "A condição atingida, quanto tempo levou, quantos turnos foram avaliados e quantos tokens gastou."
            },
            {
              "faz": "Rode você mesmo a conferência final, com o ! da aula 7.1:",
              "cola": "! python conferir.py",
              "saida": "OK    montante_simples\nOK    montante_composto\nOK    taxa_mensal\n3 de 3 certos",
              "espera": "Três OK e \"3 de 3 certos\", como na saída acima, de um conserto honesto. Em seguida, o Claude comenta o resultado. Sozinho, isso ainda não prova que a conferência não foi mexida."
            },
            {
              "faz": "Compare o conferir.py com a cópia original:",
              "cola": "! fc.exe conferir.py conferir-original.py",
              "saida": "Comparing files conferir.py and CONFERIR-ORIGINAL.PY\nFC: no differences encountered",
              "espera": "\"no differences encountered\": o conferir.py não foi mexido, e o conserto foi no juros.py. Se aparecerem linhas diferentes, o Claude mudou a conferência, e o 3 de 3 não vale."
            },
            {
              "faz": "Agora, um loop de 1 minuto:",
              "cola": "/loop 1m conte quantos arquivos .txt existem nesta pasta e responda só com o número",
              "espera": "O Claude confirma o intervalo e o número da tarefa, e logo responde 0."
            },
            {
              "faz": "Abra outra janela do PowerShell e crie um arquivo de texto na pasta:",
              "cola": "Set-Content C:\\Projetos\\goal-teste\\teste.txt 'oi'",
              "espera": "Só o cursor. Volte à janela do Claude Code: numa das voltas seguintes, em um ou dois minutos, ele responde 1."
            },
            {
              "faz": "Peça para cancelar o loop:",
              "cola": "cancele o loop que conta os arquivos .txt",
              "espera": "O Claude cancela a tarefa e confirma. Repare que você não usou o Esc: num loop de intervalo fixo, ele não para."
            },
            {
              "faz": "Abra o relógio de ponto:",
              "cola": "/usage",
              "espera": "No detalhamento do plano, pode aparecer uma linha do loop, com o número de voltas e os tokens por volta. Esc fecha a tela."
            },
            {
              "faz": "Saia:",
              "cola": "/exit",
              "espera": "Você volta ao PowerShell. Nenhum loop fica rodando, porque ele vivia na sessão."
            }
          ],
          "errado": "se o /goal disser que não está disponível, a mensagem explica o motivo: em geral, a pasta não foi marcada como confiável, ou os hooks estão desligados nas configurações. Se aparecer `Goal paused`, você bateu num limite, e o objetivo continua quando ele renovar. Se o objetivo chegar ao teto de 5 turnos sem 3 de 3, rode o passo 8 do mesmo jeito: pode ter havido avanço parcial. Se o passo 8 mostrar diferenças, desfaça a mudança na conferência com `Copy-Item conferir-original.py conferir.py`, na pasta de teste. Se o loop não responder em alguns minutos, confira se o Claude não está ocupado: o loop só dispara com a sessão parada."
        }
      ],
      [
        "fontes",
        [
          [
            "Manter Claude trabalhando em direção a um objetivo (/goal, avaliador, condição, teto, erros que encerram e que pausam), Claude Code",
            "https://code.claude.com/docs/pt/goal",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Executar prompts em um cronograma (/loop, intervalos, atraso proposital, como parar, 7 dias, 50 tarefas), Claude Code",
            "https://code.claude.com/docs/pt/scheduled-tasks",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Gerencie custos de forma eficaz (por que o uso sobe numa sessão longa; linhas Loops no /usage), Claude Code",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Comandos (/goal, /loop, /background, /tasks), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Plugin ralph-loop (README: Stop hook, --max-iterations com padrão ilimitado), Anthropic no GitHub",
            "https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop",
            "oficial",
            "08/11/2026"
          ],
          [
            "Changelog do Claude Code (2.1.71, de 07/03/2026: /loop; 2.1.139, de 11/05/2026: /goal; 2.1.243, de 25/08/2026: Loops no /usage; 2.1.319, de 06/11/2026: o loop sem intervalo termina sem despertar de reserva); sem versão em português",
            "https://code.claude.com/docs/en/changelog",
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
          "Com /goal e /loop, o Claude trabalha sozinho e só para quando o trabalho fica perfeito",
          "Ele para quando o conferente aprova, quando um erro exige você ou no teto que você pôs. Perfeito não é condição."
        ],
        [
          "O /goal segue até uma condição com prova, restrição e teto; o /loop repete até ser cancelado",
          "Isso. E cada volta relê a conversa e gasta limite, então o fim vem escrito antes do começo."
        ],
        [
          "O /goal e o /loop rodam na nuvem e continuam mesmo com o PC desligado e o terminal fechado",
          "Os dois vivem na sessão aberta no seu PC. Para rodar com o PC desligado, use uma tarefa na nuvem."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "O que o conferente do /goal usa para julgar a condição?",
        "o": [
          [
            "Os arquivos da pasta, que ele abre ao fim de cada turno",
            "Ele não abre arquivos: julga só pela conversa."
          ],
          [
            "Só o que aparece na conversa, como a saída de um teste",
            "Isso. Por isso a condição precisa de uma prova que apareça na conversa."
          ],
          [
            "Os comandos que ele mesmo roda para conferir o resultado",
            "Ele não roda comandos: quem roda é o Claude, e a saída fica na conversa."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você criou /loop 5m e quer parar. O que faz?",
        "o": [
          [
            "Pede ao Claude que cancele o loop",
            "Isso. Com intervalo fixo, é o jeito, além de fechar a sessão."
          ],
          [
            "Aperta Esc duas vezes, bem depressa",
            "Esc não para um loop de intervalo fixo; duas vezes, abre o menu de voltar atrás."
          ],
          [
            "Roda /goal clear na mesma sessão",
            "O /goal clear encerra um objetivo, não um loop."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Como faço o Claude continuar até os testes passarem?",
        "Use /goal com a condição, a prova e um teto, por exemplo: /goal npm test termina com codigo 0, sem mudar os testes; ou pare depois de 10 turnos. Um modelo pequeno confere a conversa ao fim de cada turno, e o Claude continua até ele aprovar."
      ],
      [
        "Como paro um /loop?",
        "Se você deu um intervalo, como 5m, peça ao Claude: cancele o loop. O Esc não para esse tipo. Se o loop não tem intervalo, Esc enquanto ele espera a próxima volta. Fechar a sessão também para tudo."
      ],
      [
        "O /goal pode trapacear?",
        "Pode passar na conferência por um caminho errado, como mudar o teste. Ponha na condição o que não pode mudar e confira você mesmo no fim, comparando com uma cópia ou pelo Git."
      ]
    ]
  },
  "7-21": {
    "tempo": 47,
    "video": "a7-21",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você está viajando só com o celular, lembra de uma correção num projeto e percebe que o {{claude-code|Claude Code}} mora no PC desligado em casa. Esta aula separa o que {{rodar|roda}} sem o seu computador, a {{sessao-na-nuvem|sessão na nuvem}} e os Projetos, do que só funciona com ele ligado, e mostra o que a nuvem enxerga e o que fica para trás.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "A aula 3.8 desenhou o mapa: o Claude Code pode trabalhar no seu PC ou num computador da Anthropic, e só o segundo continua com o seu PC desligado. Desde então, o módulo 7 acrescentou peças ao mapa: as tarefas agendadas da aula 7.11, o {{remote-control|Remote Control}} da aula 7.12, o `/goal` e o `/loop` da aula 7.20. Cada uma tem a sua resposta para a pergunta que mais importa quando você está longe: isso continua se o PC dormir? Esta aula junta as respostas numa tabela só e aprofunda o lado que roda sem o PC."
      ],
      [
        "p",
        "Esse lado tem duas peças. A sessão na nuvem, que você já conhece de nome, é uma sessão completa do Claude Code numa máquina da Anthropic: você começa pelo celular, pelo {{navegador}} ou pelo {{terminal}}, fecha tudo, e ela segue. Os **Projetos** do Claude Code, mais novos, são uma conversa em que o Claude coordena várias sessões na nuvem para um mesmo trabalho, cada uma numa frente, e avisa quais terminaram e quais esperam você. Para quem passa dias só com o celular, as duas mudam o que dá para fazer longe de casa."
      ],
      [
        "p",
        "Mas a nuvem tem regras que pegam quem não as conhece. Ela começa de uma cópia do seu {{repositorio|repositório}}, não da sua {{pasta}}: o que não foi para o {{github|GitHub}} não está lá. Ela não carrega o seu {{claude-md|CLAUDE.md}} pessoal, as suas {{skill|skills}} nem as suas configurações. Ela gasta do mesmo {{limite-de-uso|limite}} que todo o resto. E, mandada do terminal no Windows, pode levar junto mudanças que você não pretendia mandar. Esta aula mostra cada uma dessas regras com um caso."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Volte às imagens da aula 3.8. No seu PC, o estagiário trabalha numa sala do **seu escritório**; o Remote Control é o **telefone** com que você liga para ele de longe, e só funciona com o escritório aberto. A sessão na nuvem é o estagiário trabalhando num **escritório alugado**, no prédio da Anthropic: ele continua com o seu escritório fechado, mas só leva o que estava no {{arquivo}} central, o GitHub, e nada da sua mesa nem da parede da sua sala. Um Projeto acrescenta um **coordenador** no escritório alugado: você entrega os pedidos a ele, numa conversa só, e ele distribui o trabalho entre vários estagiários, cada um na sua sala alugada, acompanha quem terminou e chama você quando alguém precisa de uma resposta."
      ],
      [
        "quebra",
        "Um escritório alugado de verdade fica lá esperando você voltar. Este é desmontado depois de um tempo parado: ao reabrir, a conversa volta, mas o trabalho que estava rodando no fundo, como um `/loop`, não. O estagiário alugado também não sai mais barato: ele gasta do mesmo limite do seu plano, e cinco salas ao mesmo tempo gastam cinco vezes mais depressa. E o arquivo central não é só o GitHub: do terminal, se a pasta não estiver no GitHub, o Claude Code pode mandar um pacote da sua pasta, e, no Windows, esse pacote leva até mudanças que você não confirmou em arquivos acompanhados pelo Git."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O mapa completo: o que precisa do PC ligado"
      ],
      [
        "p",
        "A tabela junta o que as páginas oficiais dizem de cada recurso, conferidas em 08/11/2026:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Recurso",
            "Onde o trabalho acontece",
            "Continua com o PC desligado?"
          ],
          "linhas": [
            [
              "Sessão no terminal, no VS Code ou no app desktop (ambiente Local)",
              "No seu PC",
              "Não"
            ],
            [
              "Remote Control, aula 7.12",
              "No seu PC; o celular é só a janela",
              "Não: o processo do Claude Code precisa estar rodando"
            ],
            [
              "{{dispatch|Dispatch}}, aula 3.8",
              "No app desktop do seu PC",
              "Não: o app precisa estar aberto"
            ],
            [
              "Tarefa agendada do app desktop, aula 7.11",
              "No seu PC",
              "Não: o app aberto e o PC acordado"
            ],
            [
              "/loop e /goal, aula 7.20",
              "Na sessão aberta no seu PC",
              "Não: morrem com a sessão"
            ],
            [
              "Sessão na nuvem",
              "Num computador da Anthropic",
              "Sim"
            ],
            [
              "Tarefa agendada na nuvem, aula 7.11",
              "Num computador da Anthropic",
              "Sim; intervalo mínimo de 1 hora"
            ],
            [
              "Projeto, frente na nuvem",
              "Num computador da Anthropic",
              "Sim"
            ],
            [
              "Projeto, frente no seu computador",
              "No seu PC, pelo Remote Control",
              "Não: pausa enquanto o PC dorme"
            ]
          ]
        }
      ],
      [
        "p",
        "A regra que resume a tabela: se o trabalho precisa de algo que só o seu PC tem, como um arquivo fora do repositório, um programa instalado ou uma pasta do Obsidian, o PC precisa estar ligado. Se tudo o que o trabalho precisa está num repositório do GitHub, a nuvem resolve."
      ],
      [
        "h3",
        "Por dentro de uma sessão na nuvem"
      ],
      [
        "p",
        "Uma sessão na nuvem roda numa máquina virtual isolada, um {{ambiente-isolado-seguranca|ambiente isolado}} que a Anthropic administra, separada do seu PC e das outras sessões. Ela existe nos planos Pro, Max, Ultra e Team. Você começa por quatro portas: o site claude.ai/code, a aba Code do app do Claude no celular, o app desktop com um ambiente de nuvem escolhido, ou o terminal, com `claude --cloud`. A máquina copia o repositório do GitHub na {{branch}} escolhida, roda o Claude Code ali, e o trabalho volta como uma branch, que vira um {{pull-request|pull request}}. O cartão Changes, ao lado da conversa, mostra as linhas mudadas."
      ],
      [
        "p",
        "Para copiar o repositório, a nuvem precisa de acesso ao GitHub, de um de dois jeitos: o {{github-app|aplicativo do Claude no GitHub}}, autorizado na primeira vez pelo site, que alcança os repositórios em que você o instalar; ou o `/web-setup`, no terminal, que manda à sua conta o login do programa `gh` que você usou no módulo 3. Segundo a documentação, as suas credenciais do GitHub ficam cifradas nos {{servidor|servidores}} da Anthropic e nunca entram na máquina da sessão: um intermediário põe a credencial do lado de fora. O ambiente padrão tem acesso à {{internet}} limitado a uma lista de sites confiáveis, como os repositórios de bibliotecas."
      ],
      [
        "p",
        "O modo de {{permissao|permissão}} é escolhido num menu, ao criar a sessão e durante ela; a aula 3.8 mostrou que, na nuvem, as opções são aceitar edições, planejar e o {{modo-automatico|automático}}, sem o {{bypass}}. Uma sessão parada por muito tempo é desmontada, e a documentação chama isso de ambiente expirado: ao reabrir pelo site, uma máquina nova é montada, a conversa volta, mas {{comando|comandos}} que rodavam no fundo, {{subagente|subagentes}} e `/loop` não voltam, e é preciso pedir de novo. Pelo site, você arquiva uma sessão terminada, que some da lista e fica na aba Archived, ou apaga de vez, com confirmação."
      ],
      [
        "h3",
        "O que não vai para a nuvem"
      ],
      [
        "p",
        "A máquina na nuvem começa da cópia do repositório, e só. Não estão lá: os arquivos do seu PC fora do repositório, o {{env|.env}} (que nunca vai para o GitHub), o seu CLAUDE.md pessoal, a {{memoria-automatica|memória automática}}, as skills e os {{plugin|plugins}} instalados no seu PC, os servidores {{mcp|MCP}} que rodam no seu PC e o seu {{settings-json|settings.json}} de usuário. O que vai: o que está no repositório, inclusive o CLAUDE.md do próprio repositório, que a sessão lê ao começar. Por isso, a instrução que deve valer na nuvem mora no CLAUDE.md do repositório, e não no seu CLAUDE.md pessoal."
      ],
      [
        "p",
        "Um caso do começo ao fim: você tem um repositório com os seus guias de estudo, e o CLAUDE.md pessoal do PC diz \"exercícios sempre de assinalar\". No celular, você abre uma sessão na nuvem e pede um guia novo. O guia vem com perguntas abertas. Não é desobediência: a regra estava num arquivo que a nuvem não tem. O conserto é copiar a regra para o CLAUDE.md do repositório, fazer o {{commit}} e o {{push}}. Na próxima sessão na nuvem, ela vale."
      ],
      [
        "h3",
        "Do terminal para a nuvem, e de volta"
      ],
      [
        "p",
        "No terminal, `claude --cloud \"corrija o link quebrado do guia de juros\"` cria uma sessão nova na nuvem para o repositório da pasta em que você está, e devolve o controle a você. Com o GitHub ligado e o aplicativo do Claude instalado no repositório, a máquina copia o repositório **do GitHub**, na branch em que você está, e não a sua pasta: por isso a regra de fazer o push antes. A transferência, pela linha de comando, é de mão única: o `--cloud` cria uma sessão nova; ele não leva para a nuvem a sessão que já está aberta no terminal."
      ],
      [
        "p",
        "Quando a pasta não tem um endereço no GitHub, ou o aplicativo do Claude não está instalado no repositório, o Claude Code empacota a sua pasta e manda o pacote. Vai o histórico do Git, com todas as branches, mais as mudanças ainda sem commit nos arquivos que o Git acompanha. Os arquivos que o Git não acompanha não vão; o limite é de 100 MB. O detalhe do Windows, que a documentação destaca: no macOS e no Linux, mudanças sem commit em arquivos com nome de credencial, como o `.env`, ficam de fora do pacote; **no Windows nativo, vão como estão, qualquer que seja o nome**. Se um arquivo com segredo estiver sendo acompanhado pelo Git e tiver uma mudança sem commit, ele sobe. Antes de um `--cloud` sem GitHub, confira o `git status`."
      ],
      [
        "p",
        "O caminho de volta é o {{teleport|--teleport}}: `claude --teleport` abre a lista das suas sessões na nuvem, e a escolhida desce para o terminal, com a branch e a conversa. Ele exige quatro coisas: a pasta sem mudanças pendentes (ele oferece guardá-las antes), o mesmo repositório, a branch da sessão já enviada ao GitHub e a mesma conta. O terminal fica com uma cópia própria: o que você fizer ali não aparece na sessão da nuvem. Dentro de uma sessão já aberta, `/teleport` faz o mesmo. E `claude -p \"próximo passo\" --cloud` seguido do número da sessão manda uma mensagem a uma sessão na nuvem que já está rodando, sem abrir nada."
      ],
      [
        "h3",
        "Projetos: um coordenador para várias frentes"
      ],
      [
        "p",
        "Um {{projeto-code|Projeto do Claude Code}} é uma conversa longa em que o Claude age como coordenador. Você manda o trabalho, numa frase ou numa lista, e ele decide o que vira uma {{thread}}, uma frente de trabalho: cada uma é, em geral, uma sessão na nuvem, com o próprio {{contexto}}, a própria branch e, quando for o caso, o próprio pull request. O painel Overview mostra quais frentes terminaram, quais estão prontas para revisão e quais estão esperando você. Há também abas para os arquivos (Library), os pull requests e as tarefas agendadas do projeto."
      ],
      [
        "p",
        "Cada frente na nuvem começa com o que o projeto define: os repositórios e arquivos do projeto, as instruções do projeto (até 16 mil caracteres), a memória do projeto, que o Claude escreve quando você pede para lembrar de uma decisão, o CLAUDE.md de cada repositório e os {{conector|conectores}} da sua conta do claude.ai. Como na sessão avulsa, nada da configuração do seu PC vai junto. Para trabalhar em {{codigo|código}}, o aplicativo do Claude precisa estar instalado em cada repositório; o `/web-setup` não basta para os Projetos. Quando uma tarefa precisa de algo que só o seu PC tem, você pode pedir que aquela frente rode no seu computador, pelo Remote Control: ela usa as suas pastas e configurações, roda no modo automático e pausa enquanto o PC dorme."
      ],
      [
        "p",
        "Três avisos, todos da documentação. Os Projetos estão em teste público nos planos Pro, Max e Ultra, liberados aos poucos: a liberação começou por contas que já usaram sessões na nuvem e que não têm projetos no chat do claude.ai nem no Cowork, então podem não aparecer para você ainda. Eles não são os Projetos do chat, da aula 6B.1, que juntam conversas e arquivos sem coordenador; esses continuam como estão. E um projeto gasta o mesmo limite das outras sessões, mais depressa: cada frente rodando é uma sessão inteira, a conversa do coordenador também gasta, e uma frente parada acorda e gasta de novo quando um pull request que ela vigia recebe um comentário. Há um teto de 500 frentes novas por dia. Os Projetos ficam no site, no app desktop e no app do celular; não no terminal."
      ],
      [
        "h3",
        "O celular como controle remoto"
      ],
      [
        "p",
        "O app do Claude não é onde o código roda: é a janela para tudo isso. Na aba Code, ele abre sessões na nuvem, Projetos, sessões do Remote Control e o Dispatch, sempre com a mesma conta do claude.ai que você usa no PC; com uma {{chave-api|chave de API}}, nada disso funciona. No terminal do PC, `/mobile` mostra um código QR para baixar o app. Duas limitações para lembrar: o ditado do `/voice`, da aula 7.19, não funciona numa sessão na nuvem, porque não há microfone lá; e o celular precisa de internet para você dirigir a sessão, embora a sessão siga trabalhando sem ele."
      ],
      [
        "h3",
        "Segurança e custo, num lugar só"
      ],
      [
        "lista",
        [
          "**O que você manda é o que ela vê.** Nunca ponha segredo no repositório. E, num `--cloud` sem GitHub, no Windows, confira o `git status` antes, porque mudanças sem commit em arquivos acompanhados sobem.",
          "**O acesso ao GitHub é seu.** O aplicativo do Claude pode responder a comentários de revisão em seu nome, marcado como Claude Code. Ao autorizar, escolha só os repositórios necessários.",
          "**Tudo sai do mesmo limite.** Sessões na nuvem, Projetos e tarefas agendadas na nuvem contam no limite do plano, sem cobrança à parte pela máquina; várias ao mesmo tempo gastam proporcionalmente mais.",
          "**A nuvem não pergunta como o seu PC.** O modo escolhido vale para a sessão inteira; para uma tarefa só de leitura, escolha planejar e diga no pedido que não é para mudar nada."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso do GitHub?** Para começar pelo celular ou pelo site, sim: a nuvem copia o repositório de lá. Do terminal, há o pacote da pasta, com os cuidados acima.",
          "**Custa à parte?** Não. Conta no limite do plano, como tudo no Claude Code; os créditos mensais de {{api|API}} não pagam nada disso.",
          "**E o meu CLAUDE.md pessoal?** Fica no PC. Para valer na nuvem, a regra vai para o CLAUDE.md do repositório, ou para as instruções do projeto.",
          "**Posso trazer o trabalho da nuvem para o PC?** Pode: pelo pull request, ou com `claude --teleport`, que traz a branch e a conversa.",
          "**Os Projetos não aparecem para mim. Fiz algo errado?** Provavelmente não: a liberação é aos poucos. Procure em Projects ou em More, na barra lateral do claude.ai/code; se não estiver lá, ainda não chegou."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: ambientes, conserto automático de pull requests e o Claude Tag",
          "blocos": [
            [
              "p",
              "Um ambiente de nuvem é uma configuração salva: o nível de acesso à internet, {{variavel|variáveis}}, segredos de rede e um {{script}} que roda quando a máquina sobe, para instalar o que o projeto precisa. O `/remote-env`, no terminal, escolhe o ambiente padrão das sessões que você cria por lá."
            ],
            [
              "p",
              "O `/autofix-pr`, rodado na branch de um pull request, cria uma sessão na nuvem que vigia esse pull request e manda consertos quando um teste automático falha ou alguém comenta. As respostas aos comentários saem com o seu nome no GitHub, marcadas como do Claude Code; num repositório em que um comentário dispara automações, desligue. E o Claude Tag, o Claude num canal do Slack, roda na mesma infraestrutura de nuvem, mas é para planos Team e Enterprise."
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
          "pergunta": "Num repositório de teste no Windows, sem endereço no GitHub, com um commit feito, você mudou o notas.md, criou um rascunho.txt e um .env que o .gitignore ignora. Estes dois comandos mostram o estado da pasta. Se você rodar claude --cloud aqui, o Claude Code manda um pacote da pasta. O que você acha que vai no pacote?",
          "codigo": "git status --short\ngit remote -v",
          "linguagem": "powershell",
          "saida": " M notas.md\n?? rascunho.txt",
          "resposta": "O ` M` diz que o notas.md, acompanhado pelo Git, mudou e não teve commit; o `??` diz que o rascunho.txt não é acompanhado; o .env nem aparece, porque está no .gitignore; e o `git remote -v` não mostra nada: não há endereço no GitHub. No pacote vão o histórico e a mudança sem commit do notas.md, porque no Windows ela sobe como está; o rascunho.txt e o .env ficam de fora, porque o Git não os acompanha. Use os botões: depois de um `git add rascunho.txt`, o arquivo passa a ser acompanhado e entra no pacote; e, com um endereço no GitHub e o aplicativo do Claude instalado no repositório, a nuvem copia do GitHub, e nada desta pasta que não foi enviado vai junto.",
          "vivo": [
            [
              "Depois de git add rascunho.txt",
              "git add rascunho.txt\ngit status --short",
              " M notas.md\nA  rascunho.txt"
            ],
            [
              "Depois de ligar um endereço no GitHub",
              "git remote add origin https://github.com/SeuUsuario/repo-nuvem.git\ngit remote -v",
              "origin\thttps://github.com/SeuUsuario/repo-nuvem.git (fetch)\norigin\thttps://github.com/SeuUsuario/repo-nuvem.git (push)"
            ],
            [
              "Voltar ao original",
              "git status --short\ngit remote -v",
              " M notas.md\n?? rascunho.txt"
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
          "p": "Você vai passar o dia fora e quer que o Claude revise os guias do seu repositório no GitHub até a tarde, com o PC de casa desligado. Qual escolha funciona?",
          "o": [
            [
              "Ligar o Remote Control na sessão do terminal antes de sair de casa",
              "O Remote Control dirige uma sessão que roda no seu PC. Com o PC desligado, ela fica fora do ar."
            ],
            [
              "Uma sessão na nuvem, aberta pela aba Code do app no celular",
              "Isso. Ela copia o repositório do GitHub e segue com o PC desligado."
            ],
            [
              "Um /loop de 1 hora na sessão do terminal, que segue sozinho",
              "O /loop vive na sessão aberta no seu PC. Desligou o PC, acabou o loop."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você fez um commit no PC, sem push, e abriu pelo celular uma sessão na nuvem no mesmo repositório do GitHub. O Claude avisou: \"Esta sessão copiou o repositório do GitHub, não a sua pasta. O commit que você fez e não enviou não está aqui: faça o push antes.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: a sessão na nuvem lê a pasta do PC pelo Remote Control, então o commit está lá",
              "A sessão na nuvem não alcança o seu PC: ela começa da cópia do GitHub."
            ],
            [
              "Errado: o Git manda o commit ao GitHub sozinho, em segundo plano, logo depois de feito",
              "O Git não envia nada sozinho: commit fica no PC até o push, como na aula 3.1."
            ],
            [
              "Está certa: a nuvem copia do GitHub, e sem push o commit fica só no PC",
              "Isso. Faça o push e abra uma sessão nova."
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
            "\"Abri uma sessão na nuvem, então ela vê os arquivos do meu PC.\"",
            "Ela começa da cópia do repositório. O que não foi enviado ao GitHub não está lá."
          ],
          [
            "\"Pus a regra no meu CLAUDE.md pessoal, e a nuvem ignorou.\"",
            "O CLAUDE.md pessoal fica no PC. Na nuvem, vale o CLAUDE.md do repositório."
          ],
          [
            "\"Mandei a sessão do terminal para a nuvem com --cloud.\"",
            "O --cloud cria uma sessão nova, a partir do repositório. A conversa aberta no terminal fica no terminal."
          ],
          [
            "\"A nuvem é de graça, porque não usa o meu PC.\"",
            "Ela gasta do mesmo limite do plano. Várias sessões ao mesmo tempo gastam mais depressa."
          ],
          [
            "\"Os Projetos do Claude Code são os mesmos do chat.\"",
            "São outra coisa: uma conversa que coordena sessões na nuvem. Os do chat continuam como estão."
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
          "p": "O que continua rodando com o PC desligado?",
          "r": [
            "Sessões na nuvem.",
            "Tarefas agendadas na nuvem.",
            "As frentes de um Projeto que rodam na nuvem."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que a sessão na nuvem enxerga do seu trabalho?",
          "r": [
            "A cópia do repositório do GitHub, na branch escolhida, com o CLAUDE.md do repositório.",
            "Só o que você enviou com push.",
            "Nada que esteja só no PC: arquivos fora do repositório, CLAUDE.md pessoal, skills e configurações."
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
          "titulo": "Uma tarefa que continua com o PC desligado",
          "lugar": "No celular, com o app do Claude (ou no navegador do PC, em claude.ai/code)",
          "tempo": "15 minutos",
          "antes": "Você vai abrir, pelo celular, uma sessão na nuvem num repositório seu do GitHub sem segredos, como o do \"Olá, Mundo\" da aula 3.2, pedir uma tarefa só de leitura, sair do app, voltar e ver que ela seguiu sozinha, e depois arquivá-la. O PC pode estar desligado o tempo todo. Precisa do app do Claude no celular, logado com a sua conta do claude.ai, e da sua conta do GitHub. Na primeira vez, o app pede para ligar o GitHub: autorizar o aplicativo do Claude é com você; leia o que ele pede e, se der a opção, libere só os repositórios necessários. A tarefa não muda nenhum arquivo e gasta pouco do seu limite. Não testado: os passos exigem conta e login e foram escritos a partir das páginas oficiais, conferidas em 08/11/2026; os nomes dos botões podem aparecer em inglês e mudar.",
          "naoTestado": "Todos os passos exigem o app do Claude logado, a conta do GitHub ligada e uma sessão na nuvem, que não foram usados nos testes deste módulo. O que deve acontecer vem das páginas oficiais Use Claude Code na nuvem, Claude Code no celular e Projects, conferidas em 08/11/2026. A saída do Preveja desta aula foi rodada de verdade, com o Git 2.54 no PowerShell 5.1.",
          "passos": [
            {
              "faz": "Abra o app do Claude no celular e toque na aba Code.",
              "espera": "A lista das suas sessões do Claude Code, ou uma tela para começar a primeira. Se a aba Code não aparecer, o seu plano ou a sua organização não inclui esses recursos."
            },
            {
              "faz": "Toque para começar uma sessão nova e escolha um repositório seu sem segredos, como o da aula 3.2.",
              "espera": "Se for a primeira vez, aparece o pedido para ligar o GitHub. Depois, o repositório aparece escolhido, com a branch principal."
            },
            {
              "faz": "No menu de modo, escolha o modo de planejamento, se ele aparecer.",
              "espera": "O modo escolhido aparece na caixa de mensagem. Nele, o Claude lê e planeja, sem mudar arquivos."
            },
            {
              "faz": "Cole este pedido e envie:",
              "cola": "Leia o README deste repositório e me diga três melhorias possíveis, numa lista curta. Não mude nenhum arquivo e não crie branch nem pull request.",
              "espera": "A sessão leva um instante para começar, enquanto a máquina na nuvem sobe e copia o repositório. Em seguida, o Claude lê o README e começa a responder."
            },
            {
              "faz": "Saia do app, ou bloqueie o celular, e espere dois minutos.",
              "espera": "Nada visível. A sessão continua rodando no computador da Anthropic, sem o seu celular e sem o seu PC."
            },
            {
              "faz": "Volte ao app e abra a mesma sessão.",
              "espera": "A resposta completa, com as três melhorias. Não há cartão de mudanças, porque nada foi alterado."
            },
            {
              "faz": "Se tiver um navegador à mão, abra claude.ai/code e procure a mesma sessão na barra lateral.",
              "espera": "A mesma sessão, com a mesma conversa: a sessão na nuvem é vista de qualquer aparelho com a sua conta."
            },
            {
              "faz": "No menu da sessão, escolha arquivar (Archive).",
              "espera": "A sessão some da lista principal. Ela fica na aba de arquivadas, em claude.ai/code/sessions, e pode voltar com Unarchive."
            },
            {
              "faz": "Por curiosidade, procure Projects na barra lateral do claude.ai/code, ou em More. Se aparecer, só abra e leia a tela, sem criar nada.",
              "espera": "Pode não aparecer: a liberação dos Projetos é aos poucos. Se aparecer, a tela oferece New project ou Get started."
            }
          ],
          "errado": "se a sessão não começar e aparecer um erro de criação, confira se o GitHub está ligado e se o aplicativo do Claude tem acesso ao repositório escolhido; o erro \"Session creation failed\" tem uma seção na página oficial de sessões na nuvem. Se, ao voltar depois de muito tempo, a sessão disser que o ambiente expirou, abra de novo pelo site: a conversa volta numa máquina nova. Se o Claude começar a mudar arquivos, aperte o botão de parar e confira o modo escolhido no passo 3; mesmo que ele crie uma branch, nada vai para a branch principal sem um pull request aprovado por você."
        }
      ],
      [
        "fontes",
        [
          [
            "Use Claude Code na nuvem (planos, máquina isolada, GitHub, --cloud, pacote da pasta no Windows, --teleport, ambiente expirado, arquivar), Claude Code",
            "https://code.claude.com/docs/pt/claude-code-on-the-web",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Deixe Claude coordenar trabalho contínuo com Projects (teste público, liberação gradual, frentes, instruções, memória, uso e custo), Claude Code",
            "https://code.claude.com/docs/pt/claude-projects",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Claude Code no celular (o app como cliente: nuvem, projetos, Remote Control, Dispatch), Claude Code",
            "https://code.claude.com/docs/pt/mobile",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Executar prompts em um cronograma (tabela: nuvem, desktop e /loop; o que precisa do PC ligado), Claude Code",
            "https://code.claude.com/docs/pt/scheduled-tasks",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Automatizar trabalho com tarefas agendadas (na nuvem, com o PC desligado; prévia de pesquisa), Claude Code",
            "https://code.claude.com/docs/pt/routines",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Remote Control (o processo local precisa continuar rodando), Claude Code",
            "https://code.claude.com/docs/pt/remote-control",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência da CLI (--cloud, --teleport, claude remote-control), Claude Code",
            "https://code.claude.com/docs/pt/cli-reference",
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
          "A nuvem roda sem o PC a partir do GitHub, e o que é só do PC precisa dele ligado",
          "Isso. E a nuvem não leva o CLAUDE.md pessoal, as skills nem as configurações do PC."
        ],
        [
          "A nuvem é uma cópia do seu PC, com seus arquivos, skills e configurações",
          "A nuvem começa da cópia do repositório do GitHub; o que é só do PC fica para trás."
        ],
        [
          "Com o Remote Control ligado, a sessão segue mesmo com o PC desligado",
          "O Remote Control dirige uma sessão do PC: com ele desligado, a sessão sai do ar."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Qual destes continua funcionando com o PC desligado?",
        "o": [
          [
            "Uma tarefa agendada do app desktop",
            "Ela só roda com o app aberto e o PC acordado."
          ],
          [
            "Uma tarefa agendada, criada na nuvem",
            "Isso. Ela roda num computador da Anthropic."
          ],
          [
            "Uma sessão dirigida pelo Remote Control",
            "O Remote Control precisa do Claude Code rodando no seu PC."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você roda claude --cloud no Windows, numa pasta sem endereço no GitHub. O que vai para a nuvem?",
        "o": [
          [
            "Só os arquivos que já estão no GitHub, na branch principal",
            "Sem endereço no GitHub, não há o que copiar de lá: o Claude Code manda um pacote da pasta."
          ],
          [
            "A pasta inteira, com todos os arquivos, inclusive os ignorados",
            "Arquivos que o Git não acompanha, como os ignorados, ficam de fora do pacote."
          ],
          [
            "O histórico do Git e as mudanças sem commit dos arquivos acompanhados",
            "Isso. No Windows, as mudanças sem commit sobem como estão, qualquer que seja o nome do arquivo."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "O que roda com o PC desligado?",
        "Sessões na nuvem, tarefas agendadas na nuvem e as frentes de um Projeto que rodam na nuvem. Tudo o que roda no PC, inclusive o Remote Control, o Dispatch, o /loop e as tarefas do app desktop, para quando o PC desliga."
      ],
      [
        "Por que a sessão na nuvem não seguiu a minha regra?",
        "Ela só tem o que está no repositório do GitHub. O seu CLAUDE.md pessoal fica no PC. Copie a regra para o CLAUDE.md do repositório, faça commit e push, e abra uma sessão nova."
      ],
      [
        "Como trago para o PC o que a nuvem fez?",
        "Pelo pull request que ela abriu, ou com claude --teleport, na pasta do mesmo repositório: ele traz a branch e a conversa para o terminal. A pasta precisa estar sem mudanças pendentes."
      ]
    ]
  }
};
