// Módulo 0. Gerado por motor/juntar-aulas.mjs a partir de dados/aulas/_rascunho/ (formato: ESPEC-site.md, seção 4).
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
export const AULAS = {
  "0-0": {
    "tempo": 48,
    "video": "a0-0",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já pediu algo ao {{claude-code}}, ele respondeu \"pronto\", e você ficou sem saber onde foi parar o {{arquivo}} ou o que exatamente ele fez. Esta aula mostra o que ele é, como abrir, o que ele pode fazer sem pedir {{permissao|permissão}}, quanto gasta do seu plano e como seguir os laboratórios deste curso.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "O Claude Code é o {{programa}} que vai fazer quase todos os laboratórios deste curso com você. Do módulo 0 ao 6, cada laboratório começa do mesmo jeito: abrir o Claude Code numa {{pasta}}, colar um pedido, conferir o resultado e fechar. Esta aula ensina esse mínimo uma vez, com calma, para os outros laboratórios poderem dizer só \"abra o Claude Code na pasta tal\" e você saber exatamente o que fazer."
      ],
      [
        "p",
        "Ele é diferente do chat do Claude no {{site}} ou no {{aplicativo|app}}. No chat, o Claude escreve texto e você copia o que quiser. No Claude Code, ele age no seu computador: cria e muda arquivos, {{rodar|roda}} {{comando|comandos}}, {{instalar|instala}} programas. É isso que o torna útil, e é isso que pede cuidado. Por isso, boa parte desta aula é sobre o que ele pode fazer sem perguntar: a resposta depende de uma configuração que você escolhe, e que pode estar desligando quase todas as perguntas no seu PC."
      ],
      [
        "p",
        "O resto é prática: quanto ele gasta do seu plano, como ler um laboratório deste curso e como o site funciona. Você vai usar isso em todas as aulas."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense num estagiário muito rápido, que trabalha numa sala do seu escritório. Você escolhe a sala em que ele vai trabalhar (a pasta), dá a tarefa em português (o pedido) e combina antes quando ele precisa bater na sua porta para perguntar (o modo de permissão). Num combinado, ele pergunta antes de mexer em qualquer papel. Em outro, ele mexe à vontade nos papéis da sala, e um supervisor confere o resto do que ele vai fazer: barra o que parece arriscado e deixa um aviso para você decidir se libera. No combinado mais solto, ele não pergunta nada: faz e depois conta."
      ],
      [
        "quebra",
        "Um estagiário de verdade conhece a empresa e estranha quando algo parece errado; o Claude Code só sabe o que está na conversa e nos arquivos que leu, e pode errar com toda a confiança. A sala também não tem paredes de verdade: a pasta é onde ele começa, mas, conforme o modo, ele consegue ler e mexer em arquivos fora dela. E o supervisor do modo automático é outro programa de IA: diminui o risco, mas a própria documentação avisa que não garante segurança."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O que é o Claude Code"
      ],
      [
        "p",
        "O Claude Code é um {{agente}}: um programa em que a IA recebe um objetivo e decide os passos até terminar. Você escreve \"crie um arquivo ola.txt com uma frase\", e ele não só responde: escolhe uma {{ferramenta}} (a de criar arquivo), usa, confere e conta o que fez. Uma tarefa maior vira vários passos assim: ler arquivos, criar outros, rodar um comando, ler o resultado, corrigir."
      ],
      [
        "p",
        "Por baixo, há duas partes. O programa que você abre roda no seu PC e é ele quem mexe nos arquivos. O {{modelo}}, a IA que decide o que fazer, roda nos {{servidor|servidores}} da Anthropic. Por isso o Claude Code precisa de {{internet}}, e por isso o texto da conversa e o conteúdo dos arquivos que ele lê viajam até a Anthropic. Vale lembrar disso antes de pedir que ele abra um arquivo com dados de outras pessoas."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: você abre o Claude Code na pasta `C:\\Projetos\\estudo` e pede um resumo sobre juros. Ele escreve o texto, cria o arquivo `resumo.md` nessa pasta e responde algo como \"Criei C:\\Projetos\\estudo\\resumo.md\". O arquivo existe de verdade no seu {{disco}}: você o acha no {{explorador}}, abre no Bloco de Notas, manda para alguém. Se você fechar o Claude Code, o arquivo fica; a conversa é que termina."
      ],
      [
        "p",
        "Quando não usar: para uma pergunta que não envolve arquivo nenhum, como \"o que é amortização?\", o chat do Claude resolve igual e é mais simples. E, para pastas com documentos sensíveis de terceiros, pense antes: o que ele lê sai do seu PC."
      ],
      [
        "h3",
        "Como abrir: terminal, app desktop e celular"
      ],
      [
        "p",
        "No PC há dois jeitos principais. O primeiro é o {{terminal}}, a janela em que você conversa com o computador por texto. No Windows 11, aperte as teclas Windows e X juntas e escolha Terminal. Abre uma janela do {{powershell|PowerShell}} com uma linha como `PS C:\\Users\\SeuNome>`: o PS diz que é o PowerShell, e o resto é a pasta em que o terminal está. Você entra na pasta do projeto com o comando `cd` e digita `claude`. Na primeira vez no PC, ele abre o {{navegador}} para você fazer login com a sua conta. Depois, mostra acima da caixa de texto a {{versao|versão}}, o modelo e a pasta em que está trabalhando, e espera o seu pedido."
      ],
      [
        "p",
        "A pasta importa muito. O Claude Code trabalha a partir da pasta em que foi aberto: é ali que ele cria arquivos quando você não diz outro lugar. Se você esquecer o `cd` e abrir direto, ele começa na sua {{pasta-pessoal|pasta pessoal}}, `C:\\Users\\SeuNome`, misturado com tudo o que você tem. Além disso, na primeira vez em cada pasta, ele mostra uma pergunta de confiança, para você confirmar que conhece os arquivos dela; na pasta pessoal, essa confirmação não fica gravada e volta toda vez. Para sair, digite `/exit`. Para interromper o que ele está fazendo, aperte Esc."
      ],
      [
        "p",
        "O segundo jeito é o {{app-desktop|app desktop}} do Claude, o mesmo app do chat, na aba Code. Ali você escolhe o ambiente Local, clica para abrir uma pasta (Open folder), escolhe a pasta do projeto e escreve o pedido, sem terminal nenhum. O app já traz o Claude Code dentro. Os laboratórios deste curso são escritos para o terminal, e quase todos dizem também o caminho \"Pelo app\" quando ele existe."
      ],
      [
        "p",
        "No celular, o app do Claude também tem a aba Code, mas ela faz duas coisas diferentes, e confundir as duas é o erro mais comum. A primeira são as {{sessao|sessões}} na {{nuvem}}: o trabalho roda num computador da Anthropic, num projeto guardado no {{github|GitHub}}, e não enxerga as pastas do seu PC. A segunda é o {{remote-control|Remote Control}}: você continua, pelo celular, uma sessão que está aberta no seu PC, e aí sim os arquivos são os do PC. Para isso, o PC precisa estar ligado com o Claude Code aberto, e a sessão começa com `/remote-control` digitado lá dentro."
      ],
      [
        "p",
        "Quando não usar cada um: o terminal pede que você saiba em que pasta está, e o app evita isso; o celular serve para acompanhar e dar ordens curtas, não para os laboratórios com Explorador e Excel."
      ],
      [
        "h3",
        "Quando ele pede permissão"
      ],
      [
        "p",
        "Antes de certas ações, o Claude Code pode parar e perguntar. No terminal, aparece uma caixa dizendo o que ele quer fazer (criar tal arquivo, rodar tal comando) e opções numeradas: sim; sim e não perguntar de novo para esse tipo de ação; ou não. Você escolhe com as setas e Enter. Se escolher não, pode dizer o que prefere, e ele muda o plano."
      ],
      [
        "p",
        "O que fazer, na prática: leia o nome do arquivo ou o comando. Se bate com o que você pediu, aceite. Se aparece algo que você não pediu (apagar uma pasta, instalar um programa de nome estranho, mexer fora da pasta do projeto), recuse e pergunte por quê. Nos laboratórios deste curso, os passos dizem \"se ele pedir permissão, aceite\", porque o pedido foi pensado para isso e roda numa pasta de teste. Fora do curso, a leitura vem antes do Enter."
      ],
      [
        "p",
        "Quanto ele pergunta depende do modo de permissão. A tabela mostra os principais, com o nome que aparece na tela. A linha de baixo da tela do terminal mostra o modo atual, como `⏸ manual mode on`, `⏵⏵ auto mode on` ou `⏵⏵ bypass permissions on`."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Nome na tela",
            "O que ele faz sem perguntar"
          ],
          "linhas": [
            [
              "Manual",
              "Só lê arquivos; para editar ou rodar comandos, pergunta"
            ],
            [
              "Accept edits (editar automaticamente)",
              "Lê, edita arquivos e roda comandos simples de pasta, como criar, mover e apagar dentro da pasta"
            ],
            [
              "Plan",
              "Lê e monta um plano, sem editar nada"
            ],
            [
              "Auto",
              "Quase tudo: lê e edita na pasta direto; no resto, outro modelo confere e bloqueia o arriscado"
            ],
            [
              "Bypass permissions",
              "Tudo, sem perguntar, salvo uma lista curta, vista abaixo"
            ]
          ]
        }
      ],
      [
        "p",
        "Quem instala o Claude Code hoje começa no {{modo-automatico|Auto}}, o modo inicial no terminal. Nele, ler e editar arquivos dentro da pasta de trabalho passa direto. As outras ações vão para um revisor, que é outro modelo de IA: o que parece seguro segue, e o que parece arriscado é bloqueado, com um aviso na tela. Dá para liberar depois uma ação bloqueada; a caixa \"Para ir mais fundo\", no fim desta parte, mostra onde. A documentação deixa claro que esse modo reduz as perguntas, mas não garante segurança. Resumindo os dois casos mais comuns: no padrão Auto, quase nada pergunta, e o revisor barra o arriscado; se o seu Claude Code estiver no modo {{bypass}}, quase nada pergunta, e não há revisor."
      ],
      [
        "h3",
        "Se o seu Claude Code está em bypass"
      ],
      [
        "p",
        "Muita gente, para não ser interrompida, configura o Claude Code para começar sempre em Bypass permissions. Se é o seu caso, a linha de baixo do terminal mostra `bypass permissions on` em toda sessão, e ele quase nunca pergunta nada. Ele cria, muda e apaga arquivos comuns, instala {{biblioteca|bibliotecas}}, roda {{script|scripts}}, sem parar. A documentação oficial recomenda esse modo só em {{ambiente-isolado-seguranca|ambientes isolados}}: um computador à parte, em que um erro não alcança os seus arquivos, como uma máquina virtual (um computador simulado, que roda como um programa dentro do seu) ou um contêiner (uma caixa fechada em que um programa roda separado do resto do sistema), de preferência sem acesso à internet. A pasta do projeto não é um ambiente isolado. A documentação também avisa que ele não protege contra {{prompt-injection|ordens escondidas}} em páginas ou arquivos que o Claude lê. Se o seu está no Auto, esta seção vale como aviso: é o que muda se um dia você ligar o bypass."
      ],
      [
        "p",
        "Mesmo em bypass, as principais coisas que continuam parando são três:"
      ],
      [
        "lista",
        [
          "**Regras que você mesmo escreveu.** No arquivo de configurações, dá para escrever regras como \"nunca faça isto\" (uma regra de negação) ou \"sempre me pergunte antes disto\" (uma regra de perguntar). A de negação bloqueia a ação em todos os modos, e a de perguntar continua perguntando. A aula 11.9 volta a essas regras.",
          "**As perguntas do próprio Claude.** Quando ele precisa que você escolha entre opções, ele para e espera.",
          "**Apagar um caminho crítico, com uma diferença no Windows.** Os caminhos críticos são a raiz do disco (`C:\\`), a sua pasta pessoal (`C:\\Users\\SeuNome`) e a pasta em que ele está trabalhando. O que acontece depende do comando de apagar que ele usa. No Windows, o normal é ele rodar comandos pelo PowerShell, em que o comando de apagar é o `Remove-Item`: na raiz e na pasta pessoal, ele é negado na hora, em qualquer modo; mas apagar a pasta de trabalho inteira passa sem pergunta em bypass. Já o `rm` (de *remove*, remover), o comando de apagar do {{bash|Bash}}, outro terminal que ele também usa em alguns PCs, para nos três caminhos: no terminal, aparece uma pergunta com dois minutos para responder, e, se ninguém responder, ele nega; no app desktop, ele nega na hora."
        ]
      ],
      [
        "p",
        "Repare no que essa lista não cobre: um arquivo comum dentro da pasta, uma subpasta inteira do projeto, um programa instalado da internet e, pelo PowerShell, a própria pasta de trabalho. Tudo isso acontece sem pergunta em bypass. Por isso, em bypass, o cuidado vem antes: pedido claro e pasta certa. A aula 7.3 aprofunda os modos, e a 11.9 trata de permissões com segurança."
      ],
      [
        "h3",
        "Como você mesmo muda o modo"
      ],
      [
        "p",
        "Quem decide o modo é você. O curso mostra os caminhos, mas não troca a configuração por você, e nenhum laboratório depende de um modo específico. São dois jeitos, um passageiro e um duradouro."
      ],
      [
        "lista",
        [
          "**Só nesta sessão:** no terminal, aperte Shift e Tab juntos. A cada toque, o modo gira: Manual, Accept edits, Plan e assim por diante, até voltar ao começo. Vale até você fechar o Claude Code. No app desktop, o seletor de modo fica logo abaixo da caixa de texto.",
          "**Para todas as próximas sessões:** o modo inicial fica guardado num arquivo de configurações do seu usuário, o {{settings-json|settings.json}}, numa linha chamada `defaultMode`. Mudar essa linha muda o começo das próximas sessões, não da que está aberta. A caixa \"Para ir mais fundo\", no fim desta parte, mostra onde fica o arquivo e os valores."
        ]
      ],
      [
        "p",
        "Dois detalhes. O Bypass só aparece no Shift e Tab se a sessão começou com ele liberado. E, do app do celular, não dá para escolher o Bypass."
      ],
      [
        "h3",
        "Quanto custa no plano Max"
      ],
      [
        "p",
        "No plano Max, que custa US$ 100 por mês na página de preços da Anthropic conferida em 02/11/2026, o Claude Code está incluído: não há cobrança por pedido. O que existe são {{limite-de-uso|limites de uso}}. São dois, e os dois valem juntos para o chat do Claude, para o Claude Code e para o app desktop: o que você gasta num sai do mesmo saldo do outro."
      ],
      [
        "lista",
        [
          "**A janela de 5 horas.** Começa quando você manda a primeira mensagem e se renova por inteiro cinco horas depois. No Max, a página de preços promete 5 vezes o uso do plano Pro a cada janela.",
          "**O limite semanal.** Vale para todos os modelos e se renova num horário fixo da semana, ligado à sua conta."
        ]
      ],
      [
        "p",
        "O que pesa no uso é o tamanho e a complexidade da conversa, o modelo escolhido, o nível de esforço e as ferramentas usadas. Em ordem de grandeza: um laboratório deste curso é uma conversa curta, com poucos arquivos pequenos, e gasta uma fatia pequena da janela de 5 horas; o que esgota a janela é uma sessão de horas com muitos arquivos grandes, ou vários agentes trabalhando ao mesmo tempo. Para ver quanto já usou, digite {{usage|/usage}} dentro do Claude Code, que mostra as barras do plano, ou abra Configurações e depois Uso no site do Claude."
      ],
      [
        "p",
        "Quando um limite acaba, aparece uma mensagem com a hora em que ele volta; nas versões recentes, ela chama a janela de \"5-hour limit\", e algumas páginas ainda usam o nome antigo, \"session limit\". As saídas são esperar, mudar de plano ou ligar os {{uso-extra|créditos de uso}}, que são cobrados à parte. Ligar ou não é decisão sua; o curso nunca liga. E atenção: os US$ 100 mensais em créditos de {{api|API}} que vêm com o Max não pagam o Claude Code; servem para programas que você mesmo constrói, como no módulo 10."
      ],
      [
        "h3",
        "Como seguir um laboratório deste curso"
      ],
      [
        "p",
        "Todo laboratório tem o mesmo formato. No alto, o título, onde fazer (no PC com o Claude Code, no navegador ou no celular) e quanto tempo leva. Depois, um parágrafo de abertura diz o que vai acontecer, o que você precisa ter e se há um caminho pelo app. Então vêm os passos, numerados, cada um com uma ação só e uma caixinha para marcar; o site guarda as marcas no aparelho."
      ],
      [
        "p",
        "Dentro de um passo, três coisas podem aparecer. O texto com o botão Copiar é o que você cola: um comando no terminal ou um pedido no Claude Code. O bloco \"O que aparece\" é uma saída real, copiada de um teste feito para a aula, e não tem botão de copiar, porque é para comparar, não para colar. E \"O que deve acontecer\" diz o resultado esperado. No fim, \"Se der errado\" traz as falhas mais comuns e o que fazer em cada uma."
      ],
      [
        "p",
        "Duas regras ajudam muito. A primeira: compare o sentido, não as palavras. O Claude conversa, e a resposta dele no seu PC vai ter outras frases; o que importa é o arquivo certo, no lugar certo. As saídas de comandos, como as do PowerShell, essas sim saem quase iguais. A segunda: trabalhe numa pasta só para o laboratório, fora do OneDrive, como `C:\\Projetos\\estudo`. Pasta {{sincronizar|sincronizada}} com a nuvem e pasta com arquivos importantes não são lugar de teste."
      ],
      [
        "p",
        "Quando algo não pôde ser testado antes de publicar, porque exigia login, uma conta ou a conversa ao vivo com o Claude Code, o laboratório diz \"não testado\" e explica o motivo. E há os {{quebrado|laboratórios quebrados}}, que já vêm com um erro: a ideia é você achar a causa, com a dica, antes de tocar em \"Ver a causa\"."
      ],
      [
        "h3",
        "Um minuto sobre aprender, e não só fazer"
      ],
      [
        "p",
        "O Claude Code faz o laboratório inteiro se você deixar, e aí o arquivo fica pronto e você não aprendeu nada. A aula 6.7 trata disso a fundo; o hábito começa aqui. Depois de cada laboratório, peça para entender: \"explique em três frases o que você fez e por quê, e depois me faça uma pergunta de múltipla escolha para ver se entendi\". E peça também que ele não aceite um simples \"entendi\" seu como resposta: dizer \"entendi\" é fácil; acertar a pergunta é que mostra se ficou."
      ],
      [
        "p",
        "Existe até um jeito de deixar isso ligado. O Claude Code tem {{estilo-de-saida|estilos de saída}}, que mudam o jeito de ele responder durante a sessão inteira, e um deles se chama Learning (aprendizado). Nele, o Claude explica as escolhas em blocos curtos marcados como Insight e, quando chega a uma parte com uma decisão de verdade, deixa um pedaço pequeno para você fazer e espera. Para ligar, digite `/output-style learning` dentro do Claude Code; para voltar ao normal, `/output-style default`. A escolha fica guardada para aquela pasta. Esse estilo foi pensado para quem escreve {{codigo|código}}; nos primeiros módulos, o pedido de explicar e perguntar já basta."
      ],
      [
        "h3",
        "Como o site funciona"
      ],
      [
        "p",
        "Cada aula tem vídeo e texto. O vídeo ajuda a pegar a ideia; o texto tem a matéria inteira, e quem só lê aprende tudo. Nas aulas com vídeo curto ou conversa, o vídeo fica no topo; nas aulas de texto, um vídeo de um minuto, \"Relembre em 1 minuto\", aparece no fim. Os termos técnicos têm uma nota: na margem, no PC, e ao toque, no celular. Todos estão também no Glossário: no PC, ele fica na barra de cima; no celular, ache o termo pelo botão Buscar, na barra de baixo."
      ],
      [
        "p",
        "Os exercícios são só de tocar: assinalar, ordenar ou revelar a resposta. As perguntas de \"Pare e responda\" e de \"Tente lembrar\" voltam depois, na Revisão de hoje, em intervalos que crescem conforme você acerta: 1, 3, 7, 14 e 30 dias. Lembrar sem olhar fixa mais do que reler. Se você já sabe o assunto de uma aula, o botão \"Já sei, pular\" faz duas perguntas, com uma tentativa só em cada; acertando as duas, a aula conta como concluída."
      ],
      [
        "p",
        "O mapa não tranca nada: qualquer fase e qualquer aula abrem quando você quiser, e as opcionais ficam em ilhas à parte. O Tutor, no painel lateral, responde com base na aula aberta; sem código de convite, ele usa respostas prontas. O progresso fica salvo em cada aparelho, separadamente: o que você marca no celular não aparece no PC."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar?** Sim, uma vez, e o laboratório desta aula faz isso passo a passo, só se o seu PC ainda não tiver o Claude Code. O comando oficial, `irm https://claude.ai/install.ps1 | iex`, tem duas partes: o `irm` baixa o instalador do endereço oficial da Anthropic, o `claude.ai`, e o `iex` roda o que foi baixado. Rodar um comando assim só é seguro porque o endereço é o oficial; a aula 0.2 mostra por que desconfiar de programa que chega por um site qualquer. Quem prefere não usar terminal instala o app desktop do Claude e usa a aba Code.",
          "**Qual plano eu preciso?** Um plano pago: o Claude Code vem no Pro, no Max e no Ultra, e também nas contas de empresa e do Console, que cobra por uso. O plano gratuito do Claude não inclui o Claude Code.",
          "**Custa a mais?** Não, dentro do plano. Só há cobrança extra se você ligar os créditos de uso.",
          "**E se eu errar o pedido?** Aperte Esc para interromper e explique de novo. O Claude Code guarda {{checkpoint|checkpoints}} dos arquivos que ele mesmo edita, e o {{rewind|/rewind}} volta a um deles; isso não substitui uma cópia de verdade, e a aula 3.1 mostra o {{git|Git}}.",
          "**Funciona sem internet?** Não. O modelo roda nos servidores da Anthropic.",
          "**Ele pode apagar meus arquivos?** Pode, se o pedido levar a isso, principalmente em bypass. Por isso os laboratórios usam uma pasta de teste.",
          "**Posso usar só o celular?** Para acompanhar e conversar, sim; para os laboratórios com arquivos do PC, só com o Remote Control e o PC ligado."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: os detalhes dos modos, das versões e dos limites",
          "blocos": [
            [
              "p",
              "**O arquivo de configurações.** O modo inicial fica em `C:\\Users\\SeuNome\\.claude\\settings.json`, numa linha como `\"defaultMode\": \"bypassPermissions\"`, dentro de `\"permissions\"`. Os valores de cada modo são: `default` (Manual), `acceptEdits` (Accept edits), `plan`, `auto` e `bypassPermissions`. O Auto e o Bypass só valem nesse arquivo do usuário: colocados no arquivo de configurações de um projeto, não entram em vigor no terminal. Para mudar só a próxima abertura, sem mexer no arquivo, digite `claude --permission-mode auto` (ou `default`) em vez de `claude`."
            ],
            [
              "p",
              "**As versões.** O Auto é o modo inicial no terminal e no {{vs-code|VS Code}} desde a versão 2.1.283, segundo a página de modos de permissão. As duas fontes oficiais não batem aqui: no changelog, a 2.1.283 só muda o começo para quem usa outro provedor ou desligou a telemetria, e a mudança para todos os planos e provedores aparece na 2.1.284. A recusa imediata do `rm` em caminho crítico vale no app desktop e no painel do VS Code desde a 2.1.309, de 22/10/2026; a lista de caminhos críticos inclui também as pastas acima da pasta de trabalho. E a mensagem \"5-hour limit\" substituiu \"session limit\" na 2.1.312, de 27/10/2026."
            ],
            [
              "p",
              "**O `Remove-Item` em detalhe, e uma exceção.** No PowerShell, o `rm` digitado é só outro nome do `Remove-Item`, que tem regras próprias, separadas das do `rm` do Bash. Além da raiz de um disco e da sua pasta pessoal, ele é negado em qualquer modo, sem nem perguntar, com um curinga que esvazia uma pasta inteira (um `*` sozinho, ou um caminho terminado em `\\*`). Um curinga que só pega parte dos arquivos, como `*.tmp`, não entra nessa regra. Apagar a pasta de trabalho inteira, com a opção `-Recurse` (que apaga também tudo o que está dentro), pergunta nos modos que perguntam, passa pelo revisor no Auto e é negado no Don't ask, visto abaixo; o bypass pula essa verificação. Já o modo Plan, no terminal e com o bypass disponível, não trava edições: vira só uma instrução para planejar, e uma edição tentada no meio do plano acontece sem perguntar."
            ],
            [
              "p",
              "**O que o Auto faz quando bloqueia.** O Claude recebe o motivo do bloqueio e tenta outro caminho, e a ação bloqueada fica listada em `/permissions`, na aba Recently blocked (bloqueadas há pouco), onde você pode aprová-la para ele tentar de novo. Se o revisor bloquear 3 vezes seguidas, ou 20 na sessão, o Auto pausa e o Claude Code volta a perguntar; aprovar o que ele pediu retoma o Auto. E não é só o revisor: no Auto, a primeira leitura de um arquivo fora da pasta de trabalho também pede a sua confirmação."
            ],
            [
              "p",
              "**Caminhos protegidos** são pastas e arquivos que controlam o próprio ambiente, como `.git`, `.vscode`, `.claude`, `.gitconfig` e `.mcp.json`. Nos modos Manual e Accept edits, gravar neles sempre pergunta; no Auto, passa pelo revisor; no Bypass, é permitido. É uma das razões de a documentação reservar o Bypass para ambientes isolados."
            ],
            [
              "p",
              "**O sexto modo**, Don't ask (`dontAsk`), só faz o que você já liberou com regras e nega todo o resto, sem perguntar. Não aparece no Shift e Tab; só abre com `claude --permission-mode dontAsk`. Serve para tarefas automáticas, em que ninguém está olhando a tela. E há uma {{variavel|variável de ambiente}} que tira até a pergunta do `rm` em caminho crítico no bypass; o próprio nome dela diz \"ainda mais perigosamente\", e este curso não a usa."
            ],
            [
              "p",
              "**Os limites.** No Max, o Fable, o modelo mais caro, pode usar no máximo metade do limite semanal. E um artigo da central de ajuda cita o comando `/status` para ver o uso, enquanto a documentação do Claude Code cita o `/usage`, que é o que este curso usa."
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
          "pergunta": "O que você acha que acontece quando você cola estes três comandos no terminal, um de cada vez?",
          "codigo": "New-Item -ItemType Directory -Force C:\\Projetos\\estudo\ncd C:\\Projetos\\estudo\nclaude",
          "linguagem": "powershell",
          "resposta": "O primeiro cria a pasta `estudo` dentro de `C:\\Projetos`; o `-Force` faz o comando não reclamar se ela já existir, sem apagar nada. O segundo entra na pasta: o começo da linha muda para `PS C:\\Projetos\\estudo>`. O terceiro abre o Claude Code ali dentro, e tudo o que você pedir sem dizer outro lugar vai para essa pasta. Se você pular o `cd`, o Claude Code abre na sua pasta pessoal, `C:\\Users\\SeuNome`, e os arquivos vão parar lá."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você terminou um laboratório e o arquivo ficou pronto. Qual destes pedidos te faz aprender?",
          "o": [
            [
              "\"Faça também o próximo laboratório, do mesmo jeito.\"",
              "Esse pedido ganha tempo, mas você só recebe mais um arquivo pronto. Aprender vem de explicar e ser testado."
            ],
            [
              "\"Explique o que fez e me faça uma pergunta para conferir.\"",
              "Isso. A explicação mostra o porquê, e a pergunta confere se ficou, em vez de um \"entendi\" que não prova nada."
            ],
            [
              "\"Confirme se deu certo; eu digo entendi e sigo.\"",
              "Dizer \"entendi\" não mostra se você entendeu. Peça uma pergunta de múltipla escolha e responda sem olhar."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou: \"Apertei Shift e Tab até aparecer manual mode on. Isso vale para sempre?\" O Claude respondeu: \"Boa pergunta. O Shift e Tab grava o modo escolhido no seu arquivo de configurações, o settings.json, na linha do modo inicial. Então, a partir de agora, todas as próximas sessões vão começar no Manual, até você apertar Shift e Tab de novo.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: o Shift e Tab grava o modo escolhido para as próximas sessões",
              "O Shift e Tab muda só a sessão aberta. Ao fechar e abrir de novo, volta o modo inicial guardado no settings.json."
            ],
            [
              "O erro é outro: o Shift e Tab não existe no terminal, só no app desktop",
              "É o contrário: o Shift e Tab é do terminal. No app desktop, o modo se escolhe no seletor abaixo da caixa de texto."
            ],
            [
              "Só vale nesta sessão; as próximas seguem o defaultMode do settings.json",
              "Isso. O Shift e Tab troca o modo da sessão aberta; o começo das próximas sessões vem do settings.json do usuário."
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
            "\"O plano é fixo, então posso usar à vontade.\"",
            "Não há cobrança por pedido, mas há a janela de 5 horas e o limite semanal, divididos entre o chat, o Claude Code e o app desktop. Veja o uso com /usage."
          ],
          [
            "\"No Auto, ele nunca faz nada arriscado.\"",
            "O revisor do Auto é outro modelo de IA: reduz o risco, mas a documentação avisa que não garante segurança. Pedido claro e pasta de teste continuam valendo."
          ],
          [
            "\"Em bypass, ele ainda pergunta antes de apagar meus arquivos.\"",
            "Só a raiz do disco e a pasta pessoal ficam sempre protegidas. Pelo PowerShell, o normal no Windows, até a pasta de trabalho inteira é apagada sem pergunta; um arquivo comum ou uma subpasta do projeto, sempre."
          ],
          [
            "\"Abri o terminal, digitei claude e ele vai salvar onde eu quiser.\"",
            "Ele salva na pasta em que foi aberto, a não ser que você diga outro lugar. Entre na pasta com cd antes de digitar claude."
          ],
          [
            "\"Pela aba Code do celular, ele mexe nas pastas do meu PC.\"",
            "As sessões na nuvem rodam num computador da Anthropic e não enxergam o seu PC. Só o Remote Control, com o PC ligado e o Claude Code aberto, trabalha nos arquivos do PC."
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
          "p": "O que ainda para, ou é negado, quando o Claude Code está em bypass?",
          "r": [
            "As regras que você mesmo escreveu.",
            "As perguntas que o próprio Claude faz a você.",
            "Apagar a raiz do disco ou a pasta pessoal; a pasta de trabalho só para com o rm do Bash, não com o Remove-Item do PowerShell."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Quais são os dois limites do plano, e onde você vê quanto já usou?",
          "r": [
            "A janela de 5 horas, que começa na primeira mensagem.",
            "O limite semanal, que se renova num horário fixo da sua conta.",
            "No Claude Code, com /usage; no site do Claude, em Configurações e depois Uso."
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
          "titulo": "Seu primeiro arquivo com o Claude Code",
          "lugar": "No PC, com o Claude Code",
          "tempo": "15 minutos, mais 5 se precisar instalar o Claude Code",
          "antes": "Você vai conferir se o Claude Code está instalado (e instalar, se não estiver), criar uma pasta de estudo, abrir o Claude Code dentro dela, pedir um arquivo de texto e achar esse arquivo no Explorador de Arquivos. Precisa de um plano pago do Claude (Pro, Max ou Ultra): o gratuito não inclui o Claude Code. Os passos que começam com \"Só\" são para quem ainda não instalou ou nunca abriu o Claude Code neste PC; quem já usa pula esses passos. Pelo app: no app desktop do Claude, crie antes a pasta `C:\\Projetos\\estudo` pelo Explorador; depois, na aba Code, escolha o ambiente Local, clique em Open folder, escolha essa pasta e faça o pedido do passo 12; do passo 13 ao 16, é igual. Pelo celular, este laboratório não dá: a sessão na nuvem não enxerga as pastas do seu PC. Os comandos dos passos 2, 6 e 7 foram rodados no PowerShell 5.1 para escrever esta aula; a instalação, a conversa com o Claude Code e os cliques no Explorador não foram testados de ponta a ponta, e as frases do Claude no seu PC vão variar.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal. Em alguns PCs, a opção se chama Windows PowerShell.",
              "espera": "Abre uma janela com uma linha parecida com PS C:\\Users\\SeuNome> e um cursor piscando. O PS no começo diz que é o PowerShell."
            },
            {
              "faz": "Confira se o Claude Code já está instalado: cole este comando e aperte Enter.",
              "cola": "claude --version",
              "saida": "2.1.314 (Claude Code)",
              "espera": "Se aparecer um número de versão seguido de (Claude Code), ele está instalado: o seu número pode ser outro, e você pula para o passo 6. Se aparecer uma mensagem em vermelho dizendo que o termo 'claude' não é reconhecido, ele não está instalado: siga os passos 3 a 5."
            },
            {
              "faz": "Só se o passo 2 não mostrou a versão: cole o comando oficial de instalação e aperte Enter. Ele baixa o instalador do endereço da Anthropic, claude.ai, e o roda; não precisa abrir o terminal como administrador.",
              "cola": "irm https://claude.ai/install.ps1 | iex",
              "espera": "Durante o download, nada aparece por um tempo: espere. Quando a instalação termina, a linha que começa com PS volta. Se, antes dela, aparecer `Setup notes:` com uma frase terminada em `is not in your PATH`, a pasta do Claude Code ainda não está no {{path|PATH}}, a lista de pastas onde o Windows procura programas, e o instalador não a acrescenta sozinho: o conserto está em \"Se der errado\", no fim. Este passo não foi testado para esta aula, porque o PC do teste já tinha o Claude Code."
            },
            {
              "faz": "Só se instalou no passo 3: feche o terminal e abra outro, como no passo 1.",
              "espera": "Uma janela nova, com PS C:\\Users\\SeuNome>. Cada terminal lê o PATH ao abrir; por isso, só uma janela aberta depois da instalação enxerga o que mudou."
            },
            {
              "faz": "Só se instalou: confira de novo, colando o mesmo comando do passo 2.",
              "cola": "claude --version",
              "espera": "Agora aparece o número da versão, seguido de (Claude Code). Se ainda disser que não reconhece o termo, veja \"Se der errado\", no fim."
            },
            {
              "faz": "Cole este comando e aperte Enter. Ele cria a pasta C:\\Projetos\\estudo; se ela já existir, não apaga nada.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\estudo",
              "saida": "    Directory: C:\\Projetos\n\n\nMode                 LastWriteTime         Length Name\n----                 -------------         ------ ----\nd-----         02-Nov-26   4:44 AM                estudo",
              "espera": "Uma tabelinha com a letra d (de diretório, outro nome para pasta) e o nome estudo. A data e a hora serão as suas, no formato do seu Windows."
            },
            {
              "faz": "Cole este comando e aperte Enter:",
              "cola": "cd C:\\Projetos\\estudo",
              "espera": "Nada é impresso, mas o começo da linha muda para PS C:\\Projetos\\estudo>: agora o terminal está dentro da pasta."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre dentro do terminal. Se é a primeira vez dele neste PC, aparece uma tela para escolher o tema de cores: siga os passos 9 e 10. Se ele já foi usado neste PC, vá direto ao passo 11."
            },
            {
              "faz": "Só na primeira vez no PC: escolha um tema de cores com as setas e aperte Enter.",
              "espera": "Qualquer tema serve. Em seguida, aparece a tela que pergunta a forma de entrar."
            },
            {
              "faz": "Só na primeira vez no PC: escolha a conta do Claude com assinatura (Pro, Max ou Ultra), e não a conta do Console, que cobra por uso, e aperte Enter.",
              "espera": "O navegador abre na página de login. Depois que você entra com a sua conta, o terminal volta sozinho para o Claude Code."
            },
            {
              "faz": "Se aparecer a pergunta de confiança da pasta, confirme com Enter.",
              "espera": "A pergunta só aparece na primeira vez em cada pasta, e esta pasta é sua e está vazia, então pode confiar. Depois, acima da caixa de texto, aparecem a versão, o modelo e a pasta C:\\Projetos\\estudo, e o Claude Code espera o seu pedido."
            },
            {
              "faz": "Cole este pedido e aperte Enter. Se ele pedir permissão para criar o arquivo, aceite.",
              "cola": "Crie nesta pasta um arquivo chamado ola.txt com a frase: Meu primeiro arquivo feito pelo Claude Code. No fim, me diga o caminho completo do arquivo.",
              "espera": "Ele cria o arquivo e responde com o caminho C:\\Projetos\\estudo\\ola.txt. Olhe a linha de baixo da tela: ela diz em que modo ele está, como auto mode on ou bypass permissions on."
            },
            {
              "faz": "Sem fechar o terminal, abra o Explorador de Arquivos com as teclas Windows e E.",
              "espera": "Abre a janela de pastas do Windows."
            },
            {
              "faz": "Clique num espaço vazio da barra de endereço, no alto da janela, cole o caminho abaixo e aperte Enter.",
              "cola": "C:\\Projetos\\estudo",
              "espera": "Aparece a pasta estudo com um arquivo só, chamado ola. Se aparecer ola.txt, as {{extensao|extensões}} já estão ligadas no seu Windows; se não, a aula 0.1 mostra como ligar."
            },
            {
              "faz": "Dê dois cliques no arquivo ola.",
              "espera": "O Bloco de Notas abre com a frase que você pediu."
            },
            {
              "faz": "Feche o Bloco de Notas.",
              "espera": "A janela do Bloco de Notas some, e o terminal com o Claude Code continua aberto."
            },
            {
              "faz": "No terminal, cole o comando abaixo e aperte Enter.",
              "cola": "/exit",
              "espera": "O Claude Code fecha e a linha PS C:\\Projetos\\estudo> volta. Para continuar outro dia: abra o terminal, entre na pasta com cd e digite claude de novo."
            }
          ],
          "errado": "se aparecer `The term 'claude' is not recognized as the name of a cmdlet` mesmo depois dos passos 3 a 5, a pasta em que o Claude Code ficou, `C:\\Users\\SeuNome\\.local\\bin`, não está no PATH, e reiniciar o PC não resolve. O conserto da documentação oficial é colar no PowerShell estas duas linhas, uma de cada vez, apertando Enter depois de cada uma: `$currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')` e `[Environment]::SetEnvironmentVariable('PATH', \"$currentPath;$env:USERPROFILE\\.local\\bin\", 'User')`. A primeira lê a lista de pastas do seu usuário; a segunda grava a mesma lista com essa pasta no fim, sem tirar nada. Depois, feche o terminal, abra outro e repita o passo 2. Enquanto isso, o caminho pelo app desktop, descrito no começo, funciona sem terminal. Se o passo 3 mostrar um erro em vermelho, confira se você está no PowerShell (a linha começa com PS) e se o PC está na internet. Se o pedido do passo 12 criar o arquivo em outro lugar, confira a pasta mostrada no alto da tela do Claude Code; se não for C:\\Projetos\\estudo, saia com /exit e repita os passos 7 e 8. Se o Claude disser que um limite acabou, a mensagem diz a hora em que ele volta. Se você apertou Esc sem querer, ele só parou o que fazia: peça de novo.",
          "naoTestado": "A instalação (passos 3 a 5) não foi rodada: o PC do teste já tinha o Claude Code, e instalar de novo mexeria na instalação dele. O conserto do PATH de \"Se der errado\" não foi aplicado, porque mudaria o PATH do PC do teste: só foi conferido a seco, gravando o resultado numa variável que some ao fechar o terminal, que terminou em C:\\Users\\SeuNome\\.local\\bin. Ele é o da página oficial de solução de problemas de instalação, citada nas Fontes. A conversa com o Claude Code (passos 8 a 12 e 17) e os cliques no Explorador e no Bloco de Notas (passos 13 a 16) também não foram rodados antes de publicar: exigem o Claude Code interativo, com login, e a tela do Windows. Os comandos dos passos 2, 6 e 7 foram rodados de verdade no PowerShell 5.1 (o passo 2 em 08/11/2026, com a versão 2.1.314), e a mensagem de \"Se der errado\" foi reproduzida com o Claude Code fora do caminho do Windows."
        }
      ],
      [
        "fontes",
        [
          [
            "Modos de permissão (o que o Auto bloqueia, o que nenhum modo aprova sozinho, o rm em caminho crítico, o Remove-Item e o Shift+Tab), Claude Code",
            "https://code.claude.com/docs/pt/permission-modes",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Referência de ferramentas (a ferramenta PowerShell vem ligada no Windows e é tratada como o shell principal), Claude Code",
            "https://code.claude.com/docs/pt/tools-reference",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Solucionar problemas de instalação (Verifique seu PATH: o instalador avisa em Setup notes e não altera o PATH), Claude Code",
            "https://code.claude.com/docs/pt/troubleshoot-install",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Guia de terminal para novos usuários, Claude Code",
            "https://code.claude.com/docs/pt/terminal-guide",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Início rápido (comandos essenciais e Shift+Tab), Claude Code",
            "https://code.claude.com/docs/pt/quickstart",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Comece com o aplicativo de desktop, Claude Code",
            "https://code.claude.com/docs/pt/desktop-quickstart",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Claude Code no celular (nuvem, Remote Control e modos no app), Claude Code",
            "https://code.claude.com/docs/pt/mobile",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Segurança (verificação de confiança da pasta), Claude Code",
            "https://code.claude.com/docs/pt/security",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Gerencie custos (o comando /usage), Claude Code",
            "https://code.claude.com/docs/pt/costs",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Como funcionam os limites de uso e comprimento?, central de ajuda do Claude",
            "https://support.claude.com/pt/articles/11647753-como-funcionam-os-limites-de-uso-e-comprimento",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Use Claude Code com seus planos Pro, Max ou Ultra, central de ajuda do Claude",
            "https://support.claude.com/pt/articles/11145838-use-claude-code-com-seus-planos-pro-max-ou-ultra",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Planos e preços do Claude (Max: US$ 100 por mês, 5 vezes o uso do Pro)",
            "https://claude.com/pricing",
            "oficial",
            "02/11/2026"
          ],
          [
            "Estilos de saída (o estilo Learning e o comando /output-style), Claude Code",
            "https://code.claude.com/docs/pt/output-styles",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Configuração avançada (instalação no Windows, claude --version e planos que incluem o Claude Code), Claude Code",
            "https://code.claude.com/docs/pt/setup",
            "oficial",
            "08/11/2026",
            "pt"
          ],
          [
            "Changelog do Claude Code (versões 2.1.283, 2.1.284, 2.1.309 e 2.1.312; sem versão em português: o endereço /docs/pt/changelog leva ao GitHub, em inglês)",
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
          "O Claude Code é o chat do Claude dentro do terminal: ele escreve e você copia",
          "O Claude Code age no seu PC: cria e muda arquivos e roda comandos na pasta em que foi aberto. Quem só escreve texto é o chat."
        ],
        [
          "Ele age na pasta em que abre, e o modo diz o que ele faz sem perguntar",
          "Isso. Pasta certa, modo conhecido e laboratório lido do começo ao fim: é o mínimo para todas as aulas."
        ],
        [
          "No plano Max não há limite, e o bypass sempre pergunta antes de apagar algo",
          "Há a janela de 5 horas e o limite semanal. E o bypass só barra apagar alguns caminhos críticos, como a raiz do disco e a pasta pessoal."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você abriu o terminal, não usou cd e digitou claude. Onde ele cria um arquivo, se você não disser o lugar?",
        "o": [
          [
            "Na sua pasta pessoal, C:\\Users\\SeuNome",
            "Isso. O terminal abre na pasta pessoal, e o Claude Code trabalha a partir da pasta em que foi aberto."
          ],
          [
            "Na pasta Downloads, onde fica tudo novo",
            "Downloads é para o que vem do navegador. O Claude Code usa a pasta em que foi aberto, e sem cd é a pasta pessoal."
          ],
          [
            "Na pasta onde o Claude Code foi instalado",
            "A pasta de instalação guarda o programa, não o seu trabalho. Ele cria na pasta em que foi aberto."
          ]
        ],
        "c": 0
      },
      {
        "p": "A linha de baixo do terminal mostra auto mode on. O que isso quer dizer?",
        "o": [
          [
            "Ele pergunta antes de criar ou mudar cada arquivo",
            "Quem pergunta antes de cada edição é o Manual. No Auto, as edições na pasta entram direto, e um revisor barra o que parece arriscado."
          ],
          [
            "Ele faz tudo sem perguntar, igual ao bypass",
            "No bypass, não há revisor nenhum. No Auto, outro modelo confere as ações e bloqueia as arriscadas, com um aviso para você."
          ],
          [
            "Um revisor confere as ações e barra o arriscado",
            "Isso. É o modo inicial de quem instala hoje: menos perguntas, mas a documentação avisa que não garante segurança."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como sei em que modo estou?",
        "Olhe a linha de baixo do terminal: ela mostra o modo, como auto mode on ou bypass permissions on. No app desktop, o modo aparece no seletor abaixo da caixa de texto. Para mudar só nesta sessão, use Shift e Tab no terminal."
      ],
      [
        "O bypass é perigoso?",
        "É o modo com menos freios: ele faz quase tudo sem perguntar, inclusive apagar arquivos comuns e instalar programas. A documentação recomenda usá-lo só em ambientes isolados. Ainda param as regras que você escreveu, as perguntas do próprio Claude e apagar a raiz do disco ou a pasta pessoal. A pasta de trabalho só é protegida contra o rm do Bash: pelo PowerShell, o normal no Windows, ela pode ser apagada sem pergunta. Quem decide se continua nele é você."
      ],
      [
        "Bati o limite. E agora?",
        "A mensagem diz a hora em que o limite volta. Você pode esperar, mudar de plano ou ligar os créditos de uso, que são cobrados à parte; essa decisão é sua."
      ]
    ]
  },
  "0-1": {
    "tempo": 38,
    "video": "a0-1",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já perguntou \"onde foi parar o {{arquivo}}?\" depois de baixar algo ou de pedir ao {{claude-code}}, e acabou abrindo {{pasta}} por pasta até achar. Esta aula ensina a ler um {{caminho}}, o endereço completo de um arquivo, como `C:\\Users\\SeuNome\\Downloads`, para nunca mais procurar no escuro.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quase toda resposta do Claude Code que mexe em arquivo termina com um caminho: \"criei C:\\Projetos\\estudo\\resumo.md\". Os laboratórios deste curso também falam em caminhos: \"abra o Claude Code em C:\\Projetos\\estudo\". E as {{mensagem-de-erro|mensagens de erro}}, quando um {{programa}} não acha um arquivo, mostram o caminho em que ele procurou. Quem lê caminhos acha qualquer arquivo em segundos e percebe na hora quando o Claude salvou no lugar errado."
      ],
      [
        "p",
        "Saber onde um arquivo está também diz coisas sobre ele. Um caminho com OneDrive no meio é de uma pasta {{sincronizar|sincronizada}} com a {{nuvem}}; um caminho em `C:\\Windows` é do sistema, e não se mexe; um caminho dentro de Downloads é de algo que veio da {{internet}}. E o nome do arquivo, a última parte do caminho, decide se ele vai funcionar num {{site}}: espaço e acento, que no PC não atrapalham, numa página publicada viram problema."
      ],
      [
        "p",
        "Esta aula também liga uma opção do Windows que vem desligada de fábrica: mostrar a {{extensao}} dos arquivos. Você vai precisar dela na próxima aula, e ela é, de quebra, uma proteção contra arquivos disfarçados."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Um caminho é um endereço de correspondência escrito do maior para o menor: país, cidade, bairro, rua, número. `C:\\Users\\SeuNome\\Downloads\\fatura.pdf` se lê assim: no {{disco}} C, na pasta Users, na pasta SeuNome, na pasta Downloads, o arquivo fatura.pdf. A barra invertida, `\\`, faz o papel da vírgula que separa uma parte do endereço da outra."
      ],
      [
        "quebra",
        "Uma casa costuma ter um endereço só e ficar no mesmo lugar. No computador, o mesmo nome de arquivo pode existir em mil pastas, e só o caminho inteiro diz qual é qual. E uma pasta pode mudar de lugar com tudo dentro num segundo: basta arrastá-la. O endereço muda, e quem guardou o antigo (um atalho, um link, um programa, uma conversa com o Claude) deixa de achar o arquivo."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Arquivo: um conteúdo com nome"
      ],
      [
        "p",
        "Um arquivo é um conteúdo guardado no disco com um nome. O conteúdo pode ser um texto, uma foto, uma planilha, um programa; para o computador, é sempre uma sequência de {{byte|bytes}}, os números com que ele guarda tudo. O nome tem duas partes separadas pelo último ponto: `lista.txt` é o nome `lista` com a extensão `txt`, que diz que tipo de conteúdo esperar. A aula 0.2 é inteira sobre a extensão."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: um arquivo `lista.txt` com a frase \"Comprar pão\", numa pasta de teste. O {{powershell|PowerShell}} lista o que há na pasta com o comando `Get-ChildItem | Format-Table Mode, Name, Extension, Length`, que pede só essas quatro colunas. Saída real:"
      ],
      [
        "saida",
        "Mode   Name      Extension Length\n----   ----      --------- ------\n-a---- lista.txt .txt          17"
      ],
      [
        "p",
        "Name é o nome inteiro, Extension é a extensão e Length é o tamanho em bytes: 17. É mais do que os 11 caracteres de \"Comprar pão\". Dez desses caracteres (as letras sem acento e o espaço) ocupam um byte cada, e o \"ã\" ocupa dois; a quebra de linha no fim ocupa mais dois; e o arquivo começa com três bytes invisíveis, uma marca chamada {{bom|BOM}}. A conta fecha: 10 + 2 + 2 + 3 = 17. A aula 0.4b explica por que o \"ã\" ocupa dois bytes e para que serve essa marca. O que importa aqui é ver que o arquivo é feito de bytes, e que o tamanho conta todos eles."
      ],
      [
        "p",
        "O que acontece por baixo: o disco guarda os bytes, e o Windows guarda, à parte, uma ficha com o nome do arquivo, a pasta em que ele está e onde os bytes ficam. Por isso renomear ou mover um arquivo dentro do mesmo disco é instantâneo: muda a ficha, não os bytes. E por isso, enquanto você não salva, o que está na tela de um programa ainda não está no arquivo: está só na memória, e some se o programa fechar."
      ],
      [
        "h3",
        "Pasta: uma caixa que guarda arquivos e outras pastas"
      ],
      [
        "p",
        "Uma pasta guarda arquivos e outras pastas, que guardam outras, e assim por diante. Olhando de cima, parece uma árvore de cabeça para baixo: no alto, a raiz do disco, `C:\\`; embaixo dela, as pastas principais do Windows; e, lá dentro, as suas. O {{comando}} `tree` do Windows desenha essa árvore. Sozinho, ele só mostra as pastas; com `/F`, mostra também os arquivos, e com `/A` desenha os galhos com sinais simples. Esta é a saída real de `tree C:\\Projetos /F /A` numa pasta de teste com a subpasta `estudo` e, dentro dela, o arquivo `lista.txt`:"
      ],
      [
        "saida",
        "Folder PATH listing for volume OS\nVolume serial number is D690-526F\nC:\\PROJETOS\n\\---estudo\n        lista.txt"
      ],
      [
        "p",
        "As duas primeiras linhas falam do disco e mudam de PC para PC. Depois vem a pasta de cima, `C:\\PROJETOS` (o `tree` escreve a pasta de partida em maiúsculas; as de dentro saem com o nome como é), o galho `\\---estudo`, que é a subpasta, e, mais para a direita, o arquivo que está dentro dela. Sem o `/F`, a linha do `lista.txt` não apareceria."
      ],
      [
        "p",
        "No disco C de quase todo Windows há algumas pastas que vale conhecer:"
      ],
      [
        "lista",
        [
          "`C:\\Users`: uma pasta para cada pessoa que usa o computador. A sua é `C:\\Users\\SeuNome`, a {{pasta-pessoal|pasta pessoal}}.",
          "`C:\\Users\\SeuNome\\Downloads`, `Documents` e `Desktop`: os downloads, os documentos e a Área de Trabalho.",
          "`C:\\Program Files`: os programas instalados. Não mexa.",
          "`C:\\Windows`: o próprio sistema. Não mexa de jeito nenhum."
        ]
      ],
      [
        "p",
        "Um detalhe que engana: no {{explorador}} em português, a pasta `Users` aparece como Usuários, e `Documents` como Documentos. É só o nome mostrado na tela; o nome de verdade, o que vai no caminho, continua em inglês. Se o Claude disser `C:\\Users\\SeuNome\\Documents`, é a mesma pasta que você vê como Documentos. A exceção é o OneDrive: com o backup dele ligado, a pasta passa a morar dentro de `C:\\Users\\SeuNome\\OneDrive`, e ali o nome pode estar em português, como `OneDrive\\Documentos`. Na dúvida, clique na barra de endereço do Explorador: ela mostra o caminho de verdade."
      ],
      [
        "p",
        "Outro detalhe: em muitos PCs com Windows 11, o OneDrive faz cópia da Área de Trabalho e dos Documentos. Aí o caminho real fica `C:\\Users\\SeuNome\\OneDrive\\Desktop`, e tudo o que você põe ali sobe para a nuvem. Para o curso isso importa porque os laboratórios pedem uma pasta fora do OneDrive: dois programas mexendo nos mesmos arquivos ao mesmo tempo, como a sincronização e o Claude Code, podem se atrapalhar."
      ],
      [
        "h3",
        "Caminho: o endereço completo"
      ],
      [
        "p",
        "Um caminho completo começa pela letra do disco seguida de dois-pontos (`C:`) e vai descendo, pasta por pasta, separadas por barra invertida, até o arquivo. Leia da direita para a esquerda quando quiser saber o essencial: `C:\\Projetos\\estudo\\relatorio.html` é o arquivo `relatorio.html`, na pasta `estudo`, dentro de `Projetos`, no disco C. Pendrives e discos externos ganham outra letra, como `D:` ou `E:`."
      ],
      [
        "p",
        "Há também o caminho relativo, que parte da pasta em que você está. Se o {{terminal}} está em `C:\\Projetos\\estudo`, escrever só `lista.txt` quer dizer `C:\\Projetos\\estudo\\lista.txt`. Dois pontos seguidos, `..`, querem dizer \"a pasta de cima\": de `C:\\Projetos\\estudo`, o caminho `..\\outro` leva a `C:\\Projetos\\outro`. É por isso que o Claude Code cria os arquivos na pasta em que foi aberto: sem caminho completo no pedido, ele usa essa pasta como ponto de partida."
      ],
      [
        "p",
        "Três coisas acontecem por baixo e evitam sustos. Primeira: o Windows não diferencia maiúsculas de minúsculas em nomes. Num teste real, perguntar ao PowerShell se existia `Estudo\\LISTA.TXT`, quando o arquivo era `estudo\\lista.txt`, deu `True`. Segunda: a barra normal, `/`, é a dos endereços da internet, do Mac e do Linux; o PowerShell aceita as duas (o mesmo teste com barras normais também deu `True`), mas nem todo programa do Windows aceita, então use a invertida. Terceira: a sua pasta pessoal tem atalho: no PowerShell, `~` quer dizer `C:\\Users\\SeuNome`."
      ],
      [
        "p",
        "E o espaço no nome? No PC funciona, mas no terminal o espaço separa uma informação da outra. Se você digitar `cd C:\\Meus Projetos` sem aspas, o PowerShell entende `C:\\Meus` como a pasta e `Projetos` como uma informação a mais, que ele não sabe usar. A saída real:"
      ],
      [
        "saida",
        "Set-Location : A positional parameter cannot be found that accepts argument 'Projetos'.\nAt line:1 char:1\n+ cd C:\\Meus Projetos\n+ ~~~~~~~~~~~~~~~~~~~\n    + CategoryInfo          : InvalidArgument: (:) [Set-Location], ParameterBindingException\n    + FullyQualifiedErrorId : PositionalParameterNotFound,Microsoft.PowerShell.Commands.SetLocationCommand"
      ],
      [
        "p",
        "Em português, a primeira linha diz: \"não achei onde encaixar a informação Projetos\". Com aspas, `cd \"C:\\Meus Projetos\"`, funciona. A aula 2.2 volta a esse tropeço, que é dos mais comuns."
      ],
      [
        "h3",
        "O Explorador de Arquivos"
      ],
      [
        "p",
        "O Explorador é o programa do Windows que mostra pastas e arquivos; abre com as teclas Windows e E. No alto fica a barra de endereço. Ela mostra o caminho em pedaços clicáveis (Este Computador, o disco, cada pasta), mas, se você clicar num espaço vazio dela, vira texto: o caminho completo, pronto para copiar. O contrário também vale: cole um caminho de pasta ali, aperte Enter, e o Explorador vai direto para ela. É o jeito mais rápido de abrir a pasta que o Claude citou."
      ],
      [
        "p",
        "Para levar o caminho de um arquivo até o Claude, clique com o botão direito no arquivo e escolha Copiar como caminho (em inglês, Copy as path). O caminho completo vai para a área de transferência, entre aspas, e você cola no pedido. Assim o Claude recebe o endereço exato, em vez de uma descrição como \"aquele PDF que baixei ontem\"."
      ],
      [
        "p",
        "De fábrica, o Windows esconde a extensão dos arquivos: `lista.txt` aparece só como `lista`. Para ligar, no alto do Explorador, clique em Exibir, depois em Mostrar, e marque Extensões de nome de arquivo. Num Windows em inglês, os nomes são View, Show e File name extensions. A opção vale para todas as pastas e fica ligada até você desligar. No mesmo menu, Itens ocultos (Hidden items) mostra pastas e arquivos que o Windows esconde, como a pasta `AppData`."
      ],
      [
        "p",
        "Quando não usar o Explorador: para centenas de arquivos de uma vez, como renomear todos os PDFs de uma pasta, o Claude Code faz em segundos o que levaria uma tarde de cliques."
      ],
      [
        "h3",
        "Nomes de arquivo que dão problema"
      ],
      [
        "p",
        "O Windows não aceita alguns caracteres em nomes, porque eles têm outro papel nos caminhos: `\\ / : * ? \" < > |`. Se você tentar, ele recusa e explica. Espaço e acento ele aceita, e no seu PC funcionam. O problema aparece quando o arquivo sai do PC."
      ],
      [
        "p",
        "Num site, cada arquivo vira parte de um {{url|endereço}} na internet, e endereços não aceitam espaço nem acento direto: eles viram códigos. Pedindo ao PowerShell para converter os nomes como um endereço faz, a saída real foi esta: `Relatório Final.pdf` virou `Relat%C3%B3rio%20Final.pdf`, enquanto `relatorio-final.pdf` ficou igual. O `%20` é o espaço; o `%C3%B3` é o \"ó\". Um link escrito à mão com o nome original pode não achar o arquivo, e uma imagem com o endereço montado errado some da página."
      ],
      [
        "p",
        "Há ainda as maiúsculas: muitos {{servidor|servidores}} de sites diferenciam `Foto.JPG` de `foto.jpg`. No seu PC a página abre, porque o Windows não diferencia; publicada, a imagem some. A regra prática para tudo o que pode ir para a internet: letras minúsculas, sem acento, com hífen no lugar do espaço. `foto-reuniao.jpg` funciona em qualquer lugar."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso decorar caminhos?** Não. Precisa saber ler. Para copiar, use a barra de endereço ou Copiar como caminho.",
          "**Por que Users, e não Usuários?** O nome real das pastas do sistema é em inglês; o Explorador em português só mostra a tradução.",
          "**E se eu mover uma pasta?** Os arquivos vão junto, mas o caminho muda. Atalhos e programas que guardavam o caminho antigo param de achar.",
          "**O que é o C:?** A letra do disco principal. Outros discos e pendrives ganham D:, E: e assim por diante.",
          "**Ligar as extensões muda algum arquivo?** Não. Só muda o que o Explorador mostra.",
          "**Custa ou preciso instalar algo?** Nada. O Explorador e o PowerShell já vêm no Windows."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: caminhos longos e outros formatos",
          "blocos": [
            [
              "p",
              "Programas antigos do Windows não aceitam caminhos com mais de 260 caracteres. Pastas dentro de pastas com nomes longos chegam lá mais rápido do que parece, e o erro costuma dizer que o arquivo não existe, quando ele existe. Nomes curtos e poucas pastas evitam isso."
            ],
            [
              "p",
              "Há outros jeitos de escrever um caminho que você vai encontrar: `\\\\servidor\\pasta` é uma pasta compartilhada numa rede; `file:///C:/Projetos/estudo/` é o mesmo caminho escrito como endereço de {{navegador}}, com barras normais e espaços trocados por `%20`. É o que aparece na barra do navegador quando você abre uma página que está no seu PC."
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
          "pergunta": "O que você acha que este caminho diz? Qual é o arquivo, em que pasta ele está, e há alguma armadilha nele?",
          "codigo": "C:\\Users\\SeuNome\\Downloads\\Faculdade\\Prova 1\\resumo.pdf",
          "linguagem": "texto",
          "resposta": "O arquivo é `resumo.pdf`. Ele está na pasta `Prova 1`, que está dentro de `Faculdade`, dentro de `Downloads`, dentro da pasta pessoal `SeuNome`, dentro de `Users`, no disco C. A armadilha é o espaço em `Prova 1`: no terminal, esse caminho precisa ir entre aspas, e num site o espaço viraria `%20`."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você vai publicar uma página e precisa dar nome à foto que aparece nela. Qual nome dá menos problema num site?",
          "o": [
            [
              "Foto Reunião.JPG",
              "Tem espaço, acento e maiúsculas: no endereço vira `Foto%20Reuni%C3%A3o.JPG`, e um servidor que diferencia maiúsculas pode não achar `foto reunião.jpg`."
            ],
            [
              "foto_reunião 2.jpg",
              "O acento vira código no endereço, e o espaço também. O sublinhado não quebra, mas o hífen é o separador recomendado."
            ],
            [
              "foto-da-reuniao.jpg",
              "Isso. Minúsculas, sem acento e com hífen no lugar do espaço: funciona no PC e em qualquer servidor."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Salvei em `C:\\Users\\SeuNome\\OneDrive\\Documents\\relatorio.html`, então ele também vai para a nuvem.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: Documents fica em C:\\Users, nunca dentro do OneDrive",
              "Em muitos PCs com Windows 11, o OneDrive faz cópia dos Documentos, e o caminho real passa a ter OneDrive no meio. O Claude não errou aí."
            ],
            [
              "Está correta: com OneDrive no caminho, a pasta é sincronizada",
              "Isso. O caminho entrega onde o arquivo está, e OneDrive no meio quer dizer pasta sincronizada. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Está errada: só sobe o que você arrasta para o OneDrive",
              "Não precisa arrastar nada: tudo o que é salvo numa pasta com OneDrive no caminho sobe para a nuvem sozinho."
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
            "\"Users e Usuários são pastas diferentes.\"",
            "São a mesma. O nome real é Users; o Explorador em português só mostra Usuários."
          ],
          [
            "\"Vou colar o caminho com espaço no terminal, sem aspas.\"",
            "O espaço separa as informações do comando, e o PowerShell reclama. Ponha o caminho entre aspas."
          ],
          [
            "\"Renomeei a pasta, mas o atalho continua funcionando.\"",
            "O atalho guarda o caminho antigo. Mudou o nome ou o lugar, ele para de achar."
          ],
          [
            "\"Barra normal ou invertida, tanto faz.\"",
            "No Windows, use a invertida nos caminhos; a normal é das páginas da internet. O PowerShell aceita as duas, mas nem todo programa aceita."
          ],
          [
            "\"No meu PC a foto aparece, então no site também vai aparecer.\"",
            "O Windows não diferencia maiúsculas; muitos servidores diferenciam. Use nomes em minúsculas, sem acento e sem espaço."
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
          "p": "Como se lê o caminho `C:\\Users\\SeuNome\\Downloads\\fatura.pdf`?",
          "r": [
            "Do maior para o menor: disco C, pasta Users, pasta SeuNome, pasta Downloads.",
            "A última parte é o arquivo: fatura.pdf.",
            "A barra invertida separa uma parte da outra."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que nome de arquivo evita problema num site, e por quê?",
          "r": [
            "Minúsculas, sem acento e com hífen no lugar do espaço.",
            "No endereço da página, o espaço vira %20 e o acento vira um código como %C3%B3.",
            "Muitos servidores diferenciam maiúsculas de minúsculas."
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
          "titulo": "Ache um arquivo pelo caminho e ligue as extensões",
          "lugar": "No PC, com o Claude Code e o Explorador de Arquivos",
          "tempo": "15 minutos",
          "antes": "Você vai pedir ao Claude Code uma pasta com dois arquivos, receber o caminho de cada um, achar os dois no Explorador de Arquivos colando o caminho, ligar as extensões, que o Windows esconde de fábrica, e devolver ao Claude o caminho exato do arquivo que tem espaço no nome. Precisa do Claude Code e da pasta `C:\\Projetos\\estudo`, como a aula 0.0 ensina. Pelo app: no {{app-desktop|app desktop}} do Claude, aba Code, ambiente Local, Open folder em `C:\\Projetos\\estudo`, faça os mesmos pedidos; o resto é no Explorador, igual. O menu Exibir, Mostrar, Extensões de nome de arquivo foi conferido num Windows 11 em inglês, onde se chama View, Show, File name extensions; os nomes em português vêm da página da Microsoft. A conversa com o Claude Code não foi {{rodar|rodada}} de ponta a ponta (não testado), e as frases dele vão variar.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal (em alguns PCs, Windows PowerShell).",
              "espera": "Abre uma janela com uma linha parecida com PS C:\\Users\\SeuNome>."
            },
            {
              "faz": "Cole este comando e aperte Enter.",
              "cola": "cd C:\\Projetos\\estudo",
              "espera": "O começo da linha muda para PS C:\\Projetos\\estudo>."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre nessa pasta e mostra C:\\Projetos\\estudo no alto."
            },
            {
              "faz": "Cole este pedido e aperte Enter. Se ele pedir {{permissao|permissão}}, aceite.",
              "cola": "Crie uma subpasta chamada caminhos e, dentro dela, dois arquivos: compras.txt com a palavra pão e Notas da Prova.txt com a palavra resumo. Depois me diga o caminho completo de cada arquivo, um por linha.",
              "espera": "Ele responde com dois caminhos: `C:\\Projetos\\estudo\\caminhos\\compras.txt` e `C:\\Projetos\\estudo\\caminhos\\Notas da Prova.txt`. Se ele escrever com barras normais (/), é o mesmo caminho."
            },
            {
              "faz": "Leia o primeiro caminho da direita para a esquerda, em voz baixa mesmo.",
              "espera": "Arquivo compras.txt, na pasta caminhos, dentro de estudo, dentro de Projetos, no disco C. Se você conseguiu dizer isso, já sabe ler um caminho."
            },
            {
              "faz": "Sem fechar o terminal, abra o Explorador com as teclas Windows e E.",
              "espera": "Abre a janela de pastas do Windows."
            },
            {
              "faz": "Clique num espaço vazio da barra de endereço, no alto do Explorador, cole o caminho abaixo e aperte Enter.",
              "cola": "C:\\Projetos\\estudo\\caminhos",
              "espera": "Aparecem os dois arquivos. Com as extensões escondidas, que é o padrão, os nomes aparecem como compras e Notas da Prova, sem o .txt."
            },
            {
              "faz": "No alto do Explorador, clique em Exibir (em inglês, View) e aponte para Mostrar (Show).",
              "espera": "Abre uma lista de opções, entre elas Extensões de nome de arquivo (File name extensions)."
            },
            {
              "faz": "Clique em Extensões de nome de arquivo para marcar a opção.",
              "espera": "Os nomes passam a aparecer inteiros: compras.txt e Notas da Prova.txt. A opção vale para todas as pastas daqui em diante."
            },
            {
              "faz": "Volte ao Claude Code, cole este pedido e não aperte Enter ainda.",
              "cola": "Leia este arquivo e me diga o que está escrito nele:",
              "espera": "O pedido fica na caixa de texto, esperando."
            },
            {
              "faz": "No Explorador, clique com o botão direito em Notas da Prova.txt e escolha Copiar como caminho (em inglês, Copy as path).",
              "espera": "Nada aparece na tela, mas o caminho completo do arquivo, entre aspas, foi copiado."
            },
            {
              "faz": "Volte ao Claude Code, aperte espaço no fim do pedido e cole com Ctrl e V, sem apertar Enter.",
              "espera": "O caminho aparece depois do pedido, entre aspas: `\"C:\\Projetos\\estudo\\caminhos\\Notas da Prova.txt\"`. As aspas vieram junto de propósito: o nome tem espaços, e elas mantêm o caminho inteiro numa peça só, como você viu na seção sobre o espaço no nome."
            },
            {
              "faz": "Aperte Enter.",
              "espera": "Ele responde que o arquivo tem a palavra resumo. Você deu ao Claude um endereço exato, em vez de descrever onde o arquivo está."
            }
          ],
          "errado": "se o Explorador disser que não acha o endereço, confira se colou o caminho da pasta (C:\\Projetos\\estudo\\caminhos), e não o de um arquivo, e se o Claude criou a subpasta onde você pediu: pergunte a ele \"qual é o caminho completo da pasta caminhos?\". Se Exibir não aparecer no alto do Explorador, a janela está estreita: alargue-a, ou procure o botão de mais opções no fim da barra. Se Copiar como caminho não aparecer no menu do botão direito, clique em Mostrar mais opções (Show more options) e procure ali. Se o terminal responder com o erro do cd, confira se o caminho foi colado inteiro.",
          "naoTestado": "A conversa com o Claude Code (passos 3, 4, 10, 12 e 13) e o clique em Copiar como caminho não foram rodados antes de publicar: exigem o Claude Code interativo e a tela do Windows. O menu View, Show, File name extensions e o item Copy as path foram conferidos por automação num Windows 11 em inglês, sem alterar nada; os nomes em português vêm da página da Microsoft."
        }
      ],
      [
        "fontes",
        [
          [
            "Extensões de nome de arquivo comuns no Windows (como mostrar as extensões no Windows 11), Microsoft",
            "https://support.microsoft.com/pt-br/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Nomear arquivos, caminhos e namespaces (caracteres proibidos e limite de caminho), Microsoft Learn",
            "https://learn.microsoft.com/pt-br/windows/win32/fileio/naming-a-file",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Lidando com arquivos (nomes sem espaço, em minúsculas e com hífen), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Guia de terminal para novos usuários (abrir o PowerShell no Windows), Claude Code",
            "https://code.claude.com/docs/pt/terminal-guide",
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
          "O caminho é o endereço do arquivo, do disco até o nome, separado por barras",
          "Isso. Quem lê o caminho acha o arquivo e percebe quando ele foi salvo no lugar errado."
        ],
        [
          "Basta saber o nome do arquivo; o Windows sempre acha a pasta em que ele está",
          "O mesmo nome pode existir em mil pastas. Só o caminho completo diz qual é o arquivo."
        ],
        [
          "Espaço e acento no nome dão erro no Windows, por isso o PC recusa esses nomes",
          "O Windows aceita espaço e acento. O problema aparece no terminal, sem aspas, e nos sites."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O terminal está em C:\\Projetos\\estudo e você abre o arquivo lista.txt sem dizer o caminho. Qual arquivo ele procura?",
        "o": [
          [
            "C:\\lista.txt, na raiz do disco",
            "Sem caminho completo, o ponto de partida é a pasta em que o terminal está, não a raiz."
          ],
          [
            "C:\\Projetos\\estudo\\lista.txt",
            "Isso. O caminho relativo parte da pasta em que você está."
          ],
          [
            "C:\\Users\\SeuNome\\estudo\\lista.txt",
            "A pasta pessoal é onde o terminal abre, mas aqui ele já entrou em C:\\Projetos\\estudo, e ela não entra no caminho."
          ]
        ],
        "c": 1
      },
      {
        "p": "Por que `cd C:\\Meus Projetos`, sem aspas, dá erro no PowerShell?",
        "o": [
          [
            "Porque a pasta Meus Projetos ainda não foi criada",
            "Mesmo com a pasta criada, o erro aparece: ele vem antes de procurar a pasta."
          ],
          [
            "Porque o PowerShell não aceita letra maiúscula",
            "O Windows não diferencia maiúsculas nos caminhos."
          ],
          [
            "Porque o espaço separa o caminho em duas informações",
            "Isso. Ele entende Projetos como uma informação a mais; com aspas, funciona."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Como acho a pasta que o Claude citou?",
        "Copie o caminho da pasta, abra o Explorador com Windows e E, clique num espaço vazio da barra de endereço, cole e aperte Enter. Se ele citou o caminho de um arquivo, cole só a parte até a última barra."
      ],
      [
        "Por que o Windows esconde as extensões?",
        "É uma escolha de fábrica, para a lista parecer mais limpa. Mas ela esconde informação útil e até perigosa, como um arquivo fatura.pdf.exe. Ligue em Exibir, Mostrar, Extensões de nome de arquivo."
      ],
      [
        "O que é caminho relativo?",
        "É o caminho que parte da pasta em que você está. No terminal em C:\\Projetos\\estudo, lista.txt quer dizer C:\\Projetos\\estudo\\lista.txt, e ..\\outro quer dizer C:\\Projetos\\outro."
      ]
    ]
  },
  "0-2": {
    "tempo": 26,
    "video": "a0-2",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já trocou o final do nome de um {{arquivo}} para .pdf achando que ia convertê-lo, ou recebeu um anexo chamado fatura.pdf que, na verdade, era um {{programa}}. As duas coisas vêm do mesmo detalhe: a {{extensao}}, o sobrenome do arquivo, só diz ao Windows qual programa chamar.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Todo arquivo que o {{claude-code}} cria tem uma extensão: `resumo.md`, `clientes.csv`, `guia.html`. Quando você pede \"salve como PDF\" ou \"me dê um {{csv|CSV}}\", está escolhendo a extensão, e com ela o programa que vai abrir o arquivo no seu PC. Saber ler esse final de nome evita três tipos de susto: o arquivo que abre no programa errado, o arquivo \"convertido\" que não abre em lugar nenhum e o anexo disfarçado de documento que, na verdade, é um programa."
      ],
      [
        "p",
        "O terceiro susto é o mais sério. Golpes por e-mail e por mensagem usam nomes como `boleto.pdf.exe`, contando com o Windows esconder o final. Por isso a aula anterior mandou ligar as extensões no {{explorador}}: com elas à mostra, o disfarce cai na hora. Esta aula explica o que a extensão faz, o que ela não faz e como ler um nome de arquivo inteiro."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense na extensão como o sobrenome do arquivo. Numa recepção, a atendente lê o sobrenome no crachá e chama a família certa: os Silva vão para uma sala, os Souza para outra. O Windows faz o mesmo: lê o final do nome e chama o programa daquela família. `.pdf` chama o leitor de PDF, `.xlsx` chama o Excel, `.jpg` chama o visualizador de fotos."
      ],
      [
        "quebra",
        "Sobrenome de gente vem de família de verdade; o do arquivo é só uma etiqueta, que qualquer um troca em um segundo, sem mudar nada do que está dentro. E a recepção não confere documento: o Windows confia na etiqueta e chama o programa da família escrita, mesmo que o conteúdo seja de outra. É daí que vêm tanto o arquivo que não abre quanto o golpe da extensão dupla."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Onde fica e como se lê"
      ],
      [
        "p",
        "A extensão é o que vem depois do último ponto do nome. Em `FOTO.JPG`, é `JPG`; em `fatura.pdf.exe`, é `exe`, porque só o último ponto conta, e o `.pdf` do meio é parte do nome; em `notas`, não há extensão nenhuma. No Windows, maiúscula e minúscula não fazem diferença: `.JPG` e `.jpg` são a mesma família. O {{powershell|PowerShell}} mostra isso sem rodeio, com o comando `Get-ChildItem | Format-Table Name, Extension, Length`, que pede só essas três colunas. Este é um trecho da saída real numa {{pasta}} de teste com esses arquivos:"
      ],
      [
        "saida",
        "Name               Extension Length\n----               --------- ------\ndados.csv          .csv          23\nfatura.pdf.exe     .exe           0\nFOTO.JPG           .JPG         653\nnotas                            21"
      ],
      [
        "p",
        "A coluna Extension diz a família de cada um. Repare em `fatura.pdf.exe`: para o Windows, ele é `.exe`, um programa, por mais que o nome tenha \"pdf\". E `notas` tem a coluna vazia: o arquivo existe, tem 21 {{byte|bytes}} de texto, mas não tem sobrenome."
      ],
      [
        "h3",
        "O Windows olha a extensão para escolher o programa"
      ],
      [
        "p",
        "Quando você dá dois cliques num arquivo, o Windows não abre o arquivo para ver o que tem dentro. Ele lê a extensão, procura numa tabela interna qual programa cuida dela e manda esse programa abrir. O {{comando}} `assoc` mostra uma linha dessa tabela. Ele é do Prompt de Comando, o terminal antigo do Windows, e não do PowerShell: digitado sozinho no PowerShell, ele dá um erro dizendo que o termo 'assoc' não é reconhecido. No PowerShell, ponha `cmd /c` na frente, que manda o Prompt de Comando rodar o resto da linha: `cmd /c assoc .jpg`. Num PC com Excel, a saída real para três extensões, com `cmd /c assoc .jpg`, `cmd /c assoc .csv` e `cmd /c assoc .exe`, foi esta:"
      ],
      [
        "saida",
        ".jpg=jpegfile\n.csv=Excel.CSV\n.exe=exefile"
      ],
      [
        "p",
        "Lê-se assim: `.jpg` é do tipo \"arquivo JPEG\", `.csv` é do tipo \"CSV do Excel\", e `.exe` é do tipo \"arquivo {{executavel|executável}}\", que o Windows {{rodar|roda}} direto. Um exemplo do começo ao fim: o Claude cria `dados.csv` e você dá dois cliques; o Windows lê `.csv`, acha `Excel.CSV` na tabela e abre o Excel. Num PC sem Excel, o mesmo arquivo abriria em outro programa, ou o Windows perguntaria com qual abrir. O arquivo é igual nos dois casos; o que muda é a tabela de cada PC."
      ],
      [
        "p",
        "Para abrir com outro programa só uma vez, clique com o botão direito e escolha Abrir com (Open with). É assim que você abre um `.csv` no Bloco de Notas para ver o {{texto-puro|texto puro}}, como na aula 0.4. Quando não usar: não mude o programa padrão de uma extensão sem motivo; trocar o leitor de PDF de todos os arquivos para resolver um caso só costuma criar outros problemas."
      ],
      [
        "h3",
        "Renomear não converte"
      ],
      [
        "p",
        "O conteúdo de um arquivo são bytes, e os primeiros bytes costumam dizer o tipo real, como uma {{assinatura-arquivo|assinatura}}. Toda foto JPEG começa com os bytes `FF D8 FF`; todo PDF começa com as letras `%PDF`. O comando `Format-Hex` mostra esses bytes. Saída real, primeira linha de uma foto e de um PDF de teste:"
      ],
      [
        "saida",
        "FOTO.JPG\n00000000   FF D8 FF E0 00 10 4A 46 49 46 00 01 01 01 00 60  .Ø.à..JFIF.....`\n\nfatura.pdf\n00000000   25 50 44 46 2D 31 2E 37 0D 0A 25 B5 B5 B5 B5 0D  %PDF-1.7..%µµµµ."
      ],
      [
        "p",
        "O primeiro número, `00000000`, é só a posição no arquivo (o começo). Depois dele, cada par de letras e números é um byte, escrito em hexadecimal, um jeito compacto de escrever números. A coluna da direita mostra os mesmos bytes como letras, e um ponto onde o byte não é letra. Na linha do PDF, ela começa com `%PDF-1.7`. Na da foto, ela é quase toda de pontos e símbolos soltos, mas no meio aparece `JFIF`, o nome do formato em que as fotos JPEG costumam ser gravadas: também faz parte da assinatura."
      ],
      [
        "p",
        "Agora o experimento que explica tudo: uma cópia da foto foi renomeada para `foto-renomeada.pdf`. A primeira linha dela ficou exatamente igual à da `FOTO.JPG`, byte por byte: `FF D8 FF E0`. Renomear trocou a etiqueta e não tocou no conteúdo. Ao abrir, o Windows chama o leitor de PDF (por causa da etiqueta), o leitor procura o `%PDF` do começo, não acha, e diz que o arquivo está danificado ou não abre. A foto continua inteira lá dentro: voltar o nome para `.jpg` faz tudo funcionar de novo. A própria Microsoft avisa que mudar a extensão não muda o tipo do arquivo."
      ],
      [
        "p",
        "Para converter de verdade, outro programa precisa ler o conteúdo num formato e escrever em outro: \"Salvar como\" no programa que abre o arquivo (o Excel salva um CSV como `.xlsx`, o Word salva um `.docx` como PDF), ou um pedido ao Claude, como \"converta FOTO.JPG para PDF\", e ele usa uma {{biblioteca}} que faz isso. Quando o Windows pergunta, ao renomear, se você tem certeza de que quer mudar a extensão porque o arquivo pode ficar inutilizável, é esse o motivo."
      ],
      [
        "p",
        "Um detalhe que pega muita gente: com as extensões escondidas, renomear `FOTO` para `FOTO.pdf` no Explorador não troca a extensão. O Windows mantém o `.JPG` escondido e cria `FOTO.pdf.JPG`, uma extensão dupla sem querer. Com as extensões à mostra, você vê o nome inteiro e sabe o que está mudando."
      ],
      [
        "h3",
        "Extensões que executam: o perigo"
      ],
      [
        "p",
        "A maioria das extensões chama um programa para mostrar o conteúdo: um texto, uma foto, uma planilha. Algumas, não: o arquivo é o próprio programa, e abrir é rodar o que ele faz. São os executáveis e os {{script|scripts}}: `.exe`, `.msi` (instaladores), `.bat` e `.cmd`, `.scr`, `.vbs` e `.js`. No mesmo PC do teste, `cmd /c assoc .js` respondeu `.js=JSFile`. E o `ftype`, primo do `assoc` que mostra o programa de cada tipo, revela que a tabela do Windows manda `.js` direto para o programa que roda scripts. Saída real de `cmd /c ftype JSFile`:"
      ],
      [
        "saida",
        "JSFile=C:\\Windows\\System32\\WScript.exe \"%1\" %*"
      ],
      [
        "p",
        "Em português: \"dois cliques num .js? Rode-o com o WScript\". Documentos com {{macro|macro}}, como `.xlsm` e `.docm`, também podem rodar {{codigo|código}}, se você ativar as macros. Uma macro é uma sequência de comandos gravada dentro da planilha ou do documento, que o Excel ou o Word executam quando você permite: serve para automatizar tarefas, e serve também para esconder um programa malicioso."
      ],
      [
        "p",
        "Agora junte as peças. Com as extensões escondidas, `fatura.pdf.exe` aparece no Explorador como `fatura.pdf`. E um executável pode carregar qualquer ícone, inclusive o de um PDF. O nome parece de documento, o ícone parece de documento, e dois cliques rodam um programa com as suas permissões, que pode copiar senhas, criptografar arquivos ou instalar outros programas. Esse é o golpe da extensão dupla."
      ],
      [
        "p",
        "As defesas são simples. Deixe as extensões à mostra, como na aula 0.1. Leia o nome até o fim: vale o que vem depois do último ponto. No modo de exibição Detalhes, olhe a coluna Tipo: um executável aparece como Aplicativo (em inglês, Application), seja qual for o ícone. E não abra executável que chegou por e-mail ou mensagem; se for de alguém conhecido, pergunte por outro canal antes. O mesmo vale para um `.exe` que um {{site}} oferece para \"abrir\" um documento."
      ],
      [
        "h3",
        "Arquivo sem extensão e arquivo que começa com ponto"
      ],
      [
        "p",
        "Um arquivo como `notas` não tem sobrenome, e o Windows não sabe quem chamar: dois cliques fazem ele perguntar com qual aplicativo abrir. Não é defeito. Em programação, vários arquivos de texto importantes não têm extensão, como o {{readme|README}} e o `LICENSE`, e abrem bem no Bloco de Notas ou no {{vs-code|VS Code}}."
      ],
      [
        "p",
        "O contrário também existe: arquivos cujo nome começa com ponto, como `.gitignore` e `.env`, que você vai ver nos módulos 3 e 11. Para o Windows, o nome inteiro conta como extensão (o PowerShell responde que a extensão de `.gitignore` é `.gitignore`). Na prática, o que importa é o nome exato: um `.env` salvo pelo Bloco de Notas pode acabar como `.env.txt`, e, com as extensões escondidas, você nem percebe."
      ],
      [
        "h3",
        "As extensões que você vai ver neste curso"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Extensão",
            "O que é",
            "Quem abre",
            "Executa?"
          ],
          "linhas": [
            [
              ".txt, .md",
              "Texto puro; Markdown",
              "Bloco de Notas, Obsidian, VS Code",
              "Não"
            ],
            [
              ".csv",
              "Tabela em texto",
              "Excel, Bloco de Notas",
              "Não"
            ],
            [
              ".xlsx, .docx",
              "Planilha e documento do Office",
              "Excel, Word",
              "Não; .xlsm e .docm podem ter macro"
            ],
            [
              ".pdf",
              "Página pronta",
              "{{navegador|Navegador}}, leitor de PDF",
              "Não"
            ],
            [
              ".html",
              "Página da internet",
              "Navegador",
              "Só dentro do navegador"
            ],
            [
              ".py, .js, .json",
              "Código Python, JavaScript e dados",
              "VS Code; .js roda com dois cliques no Windows",
              ".py e .js sim, se você rodar"
            ],
            [
              ".zip",
              "Pacote de arquivos comprimidos",
              "Explorador",
              "Não, mas pode trazer executáveis dentro"
            ],
            [
              ".exe, .msi, .bat",
              "Programa, instalador, lista de comandos",
              "O próprio Windows",
              "Sim: abrir é rodar"
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
          "**Maiúscula importa?** No Windows, não: `.JPG` e `.jpg` são iguais. Num site publicado, pode importar no nome inteiro, como a aula 0.1 mostrou.",
          "**Posso ter vários pontos no nome?** Pode. Só o último ponto separa a extensão; o resto é nome.",
          "**Por que o Windows esconde as extensões?** É uma escolha de fábrica, para a lista parecer mais limpa. O preço é esconder justamente a parte que diz o que o arquivo é.",
          "**O Claude escolhe a extensão certa?** Quase sempre, se você disser o formato. Confira o nome na resposta dele antes de abrir.",
          "**E no celular?** O celular também escolhe o app pelo tipo do arquivo e esconde ainda mais coisa. A regra é a mesma: desconfie de arquivo que diz ser documento e pede para instalar algo."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: na internet, quem decide é o tipo MIME",
          "blocos": [
            [
              "p",
              "Quando um site manda um arquivo para o navegador, ele envia junto uma etiqueta chamada tipo MIME, como `text/html` ou `application/pdf`. O navegador decide o que fazer por essa etiqueta, e não pela extensão do endereço. É por isso que um link terminado em `.pdf` às vezes abre como página, e um link sem extensão nenhuma pode baixar uma planilha."
            ],
            [
              "p",
              "Os `.xlsx` e `.docx` começam com os bytes `50 4B`, as letras PK: a assinatura do formato {{zip|ZIP}}. Por dentro, eles são pacotes de arquivos de texto, como a aula 0.3 vai mostrar. É por isso que alguns antivírus e programas de e-mail abrem esses arquivos para olhar dentro antes de deixar passar."
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
          "pergunta": "Estes quatro arquivos chegaram numa pasta. O que você acha: que programa o Windows chama para cada um, e qual deles é perigoso?",
          "codigo": "FOTO.JPG\ndados.csv\nfatura.pdf.exe\nnotas",
          "linguagem": "texto",
          "resposta": "`FOTO.JPG` abre no visualizador de fotos: a extensão é `.JPG`, e maiúscula não importa. `dados.csv` abre no Excel, se ele estiver instalado; é texto puro, então o Bloco de Notas também abre. `fatura.pdf.exe` é o perigoso: a extensão é `.exe`, e dois cliques rodam um programa; com as extensões escondidas, ele aparece como `fatura.pdf`. `notas` não tem extensão, e o Windows pergunta com qual aplicativo abrir."
        }
      ],
      [
        "prever",
        {
          "pergunta": "Este comando do PowerShell renomeia a foto. O que você acha que ele faz com o conteúdo, e o que acontece se você abrir FOTO.pdf depois?",
          "codigo": "Rename-Item .\\FOTO.JPG .\\FOTO.pdf",
          "linguagem": "powershell",
          "resposta": "Ele só troca o nome. O conteúdo continua sendo uma foto: os primeiros bytes seguem `FF D8 FF`, a assinatura do JPEG, e não `%PDF`. Ao abrir, o Windows chama o leitor de PDF por causa da etiqueta, e o leitor não reconhece o conteúdo. Para ter um PDF de verdade, é preciso converter, com \"Salvar como\" ou pedindo ao Claude."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Com as extensões escondidas, um anexo aparecia como Boleto.pdf, com ícone de PDF. Depois de ligar as extensões, o nome virou Boleto.pdf.exe. O que esse arquivo é?",
          "o": [
            [
              "Um PDF com uma proteção extra do Windows",
              "Não existe PDF com proteção em .exe. A extensão que vale é a última, e .exe é programa."
            ],
            [
              "Um programa, e abri-lo é rodar o que ele faz",
              "Isso. Só o último ponto conta, e o ícone de PDF é disfarce: um executável pode carregar qualquer ícone."
            ],
            [
              "Um PDF compactado, que precisa ser extraído",
              "Arquivo compactado termina em .zip ou parecido. Este termina em .exe: é um programa."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Pronto: renomeei planilha.xlsx para planilha.csv. Agora ela está em CSV, e você já pode abrir no Bloco de Notas para ver os dados em texto.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Renomear não converte: por dentro, ela continua sendo um .xlsx",
              "Isso. O conteúdo continua sendo o pacote do Excel, e o Bloco de Notas vai mostrar símbolos sem sentido. Para virar CSV, é preciso salvar como CSV."
            ],
            [
              "Está correta: com a extensão .csv, o conteúdo passa a ser texto puro",
              "A extensão é só a etiqueta. Os bytes de dentro não mudam com o nome."
            ],
            [
              "O erro é outro: o Bloco de Notas não abre arquivo .csv, só .txt",
              "O Bloco de Notas abre qualquer arquivo de texto, inclusive CSV. O erro está em achar que renomear converteu."
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
            "\"Mudei para .pdf, virou PDF.\"",
            "Mudou só a etiqueta. Os bytes continuam os mesmos, e o leitor de PDF não reconhece. Para converter, use Salvar como ou peça ao Claude."
          ],
          [
            "\"O ícone é de PDF, então é PDF.\"",
            "Um executável pode ter qualquer ícone. Leia o nome até o último ponto e olhe a coluna Tipo."
          ],
          [
            "\"Arquivo sem extensão está estragado.\"",
            "Só não tem sobrenome. Muitos arquivos de texto, como README, são assim; abra com o Bloco de Notas."
          ],
          [
            "\"Renomeei FOTO para FOTO.pdf e virou PDF.\"",
            "Com as extensões escondidas, o Windows guarda o .JPG e cria FOTO.pdf.JPG. Ligue as extensões antes de renomear."
          ],
          [
            "\"CSV é arquivo do Excel.\"",
            "CSV é texto puro. O Excel é só um dos programas que abrem, porque a tabela do Windows mandou."
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
          "p": "O que a extensão faz, e o que ela não faz?",
          "r": [
            "Diz ao Windows que programa chamar quando você abre o arquivo.",
            "Não muda o conteúdo: renomear não converte.",
            "Para converter, use Salvar como no programa ou peça ao Claude."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que mostrar as extensões é uma questão de segurança?",
          "r": [
            "Com elas escondidas, fatura.pdf.exe aparece como fatura.pdf.",
            "Só a última extensão vale: o arquivo é um programa e roda ao ser aberto.",
            "O ícone pode imitar um PDF; o nome inteiro e a coluna Tipo mostram a verdade."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Extensões de nome de arquivo comuns no Windows (renomear não muda o tipo), Microsoft",
            "https://support.microsoft.com/pt-br/windows/experience/storage-filemanagement/common-file-name-extensions-in-windows",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Nomear arquivos, caminhos e namespaces, Microsoft Learn",
            "https://learn.microsoft.com/pt-br/windows/win32/fileio/naming-a-file",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Tipos MIME, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/MIME_types",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "CS50P, File Extensions (a ideia do exercício de prever pela extensão), Harvard",
            "https://cs50.harvard.edu/python/psets/1/extensions/",
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
          "A extensão define o conteúdo: trocá-la converte o arquivo para o novo formato",
          "É o contrário: a extensão é só a etiqueta. Trocar o nome não toca nos bytes."
        ],
        [
          "A extensão define a pasta em que o arquivo pode ficar guardado no Windows",
          "Qualquer arquivo pode ficar em qualquer pasta. A extensão diz quem abre, não onde mora."
        ],
        [
          "A extensão só diz quem abre; renomear não converte, e algumas rodam código",
          "Isso. Ela é uma etiqueta: trocar o nome não converte nada, e as que rodam código, como .exe, .js ou .xlsm com macro, pedem cuidado."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Qual é a extensão de relatorio.final.pdf.exe?",
        "o": [
          [
            ".pdf, porque é o tipo do documento final",
            "O .pdf é parte do nome. Só o último ponto separa a extensão."
          ],
          [
            ".exe, porque só o último ponto conta",
            "Isso. Para o Windows, é um executável."
          ],
          [
            ".final, porque vem depois do nome",
            "Só o último ponto conta. Tudo antes dele é nome."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você renomeou foto.jpg para foto.png. O que aconteceu com a imagem?",
        "o": [
          [
            "Continua sendo JPEG por dentro, com outra etiqueta",
            "Isso. Os bytes não mudam. Alguns visualizadores abrem mesmo assim, olhando o conteúdo; outros recusam."
          ],
          [
            "Virou PNG, porque o Windows converte ao renomear",
            "O Windows só troca o nome. Converter exige um programa que leia e grave no outro formato."
          ],
          [
            "Perdeu a imagem, porque o Windows apagou o conteúdo",
            "Nada foi apagado. Voltar o nome para .jpg deixa tudo como antes."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Como converto um arquivo de verdade?",
        "Abra no programa que entende o formato e use Salvar como, escolhendo o novo tipo, ou peça ao Claude: \"converta foto.jpg para PDF\". Renomear só troca a etiqueta."
      ],
      [
        "Como sei se um anexo é perigoso?",
        "Ligue as extensões e leia o nome até o último ponto. Se terminar em .exe, .msi, .bat, .cmd, .scr, .vbs ou .js, é programa ou script: não abra. Na dúvida, pergunte a quem mandou por outro canal."
      ],
      [
        "Por que o arquivo sem extensão não abre?",
        "Abre, mas o Windows não sabe com quê. Clique com o botão direito, escolha Abrir com e use o Bloco de Notas, se for texto."
      ]
    ]
  },
  "0-3": {
    "tempo": 30,
    "video": "s1-html-word-pdf",
    "videoTipo": "curto",
    "abertura": "Você já recebeu um arquivo que não conseguiu alterar, ou abriu um Word no computador de um colega e a página desandou. Não é defeito: cada {{formato}} foi feito para um trabalho, e esta aula mostra qual pedir em cada situação.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Daqui para a frente, quase tudo o que você pedir ao Claude vai virar um arquivo: uma proposta, uma folha de estudos, um relatório, uma página para mandar por link. E toda vez você vai precisar dizer em que formato quer o resultado. Se não disser, o Claude escolhe por você, e nem sempre escolhe o que você precisava."
      ],
      [
        "p",
        "Escolher errado custa caro de três jeitos. Uma proposta com valores mandada em Word pode ser alterada pelo cliente sem ninguém perceber. Um guia de estudos em PDF é ruim de ler no celular, porque a página não cabe na tela. E uma página que você queria publicar com um link só funciona de verdade se for {{html|HTML}}, porque é o único dos três que o {{navegador}} reorganiza para a tela."
      ],
      [
        "p",
        "Saber a diferença também serve para conferir o trabalho do Claude. Quando ele disser \"salvei como PDF\" e o arquivo abrir desandado no celular, você vai saber que não é erro dele, é a natureza do formato. E quando ele disser que um Word \"vai abrir igual em qualquer lugar\", você vai saber que isso não é verdade, e pedir outra coisa."
      ],
      [
        "p",
        "Boa notícia: nada disso exige pagar. O PDF e o HTML abrem no navegador, no PC e no celular. O Word abre no Word online ou no Google Docs, sem instalar nada; no celular, o jeito mais confortável é o app do Word, que precisa ser instalado."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense em três versões do mesmo texto. O **Word** é um caderno a lápis: você apaga, reescreve, muda a ordem, e quem pega o caderno depois pode fazer o mesmo. O **PDF** é uma foto da página pronta: todo mundo vê exatamente a mesma coisa, no mesmo lugar, mas ninguém escreve por cima sem que fique estranho. O **HTML** é um cartaz digital que se rearruma sozinho conforme o tamanho da parede: na parede grande do PC, o texto se espalha; na parede estreita do celular, ele se empilha."
      ],
      [
        "quebra",
        "O PDF não é uma foto de verdade. O texto dentro dele pode ser selecionado e copiado, pode ter links que funcionam e até formulários para preencher. A comparação com a foto vale para a aparência, que fica congelada. E o Word não é um caderno que só você escreve: qualquer pessoa com o arquivo escreve também, e é justamente isso que torna o Word uma má escolha para entregar um valor fechado."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Word: o programa monta a página na hora de abrir"
      ],
      [
        "p",
        "Um arquivo `.docx` não guarda a página pronta. Ele guarda o texto e um conjunto de instruções de aparência: este trecho é título, este parágrafo tem 1,5 de espaçamento, esta tabela tem três colunas, a {{fonte-tipografica|fonte}} é a padrão, tamanho 11. Quem transforma essas instruções em uma página é o programa que abre o arquivo, no momento em que abre."
      ],
      [
        "p",
        "Por isso o mesmo arquivo pode ficar diferente em dois computadores. Se o outro computador não tem a fonte que o arquivo pede, o programa troca por outra parecida, e as letras ficam um pouco mais largas. Um parágrafo que terminava no fim da página passa para a página seguinte, a tabela quebra no meio, a figura que estava ao lado do texto cai lá embaixo. O arquivo não mudou; o resultado da montagem mudou."
      ],
      [
        "p",
        "Um exemplo inteiro, do começo ao fim: você pede ao Claude \"crie proposta.docx com uma tabela de preços\". Ele cria o arquivo, você abre no seu Word, está perfeito, e manda por e-mail. O cliente abre no Google Docs, no celular. A tabela aparece cortada e um valor passou para outra linha. Nada foi alterado, mas a proposta parece mal feita. Pior: o cliente pode editar um valor, salvar e devolver, e você não tem como saber o que mudou olhando o arquivo."
      ],
      [
        "p",
        "Quando usar: enquanto o texto está sendo escrito, revisado e comentado, principalmente em grupo. Quando não usar: na entrega final de algo que não pode mudar, ou quando a aparência exata importa."
      ],
      [
        "h3",
        "PDF: a página congelada"
      ],
      [
        "p",
        "O `.pdf` faz o contrário. Ele guarda a posição exata de cada letra, de cada linha e de cada figura na página, e costuma carregar as fontes junto. Por isso abre igual no seu PC, no celular do cliente e na impressora: não há montagem na hora de abrir, a página já vem montada."
      ],
      [
        "p",
        "Essa é a força e a fraqueza do PDF. A página tem tamanho fixo, em geral A4. Em uma tela de celular, que é bem mais estreita que uma folha A4, o leitor encolhe a página inteira para caber, e as letras ficam minúsculas. Você dá zoom, arrasta para a direita, arrasta de volta, e lê assim o documento inteiro. Dá para ler, mas cansa."
      ],
      [
        "p",
        "Editar PDF é mais difícil, mas não é impossível: existem programas que fazem isso. O que protege uma proposta de verdade é a {{assinatura-digital}}: um registro preso ao arquivo que diz quem assinou e acusa qualquer mudança feita depois. Ela não impede a edição; ela denuncia. No mercado, proposta e contrato vão em PDF assinado."
      ],
      [
        "p",
        "Um exemplo inteiro, do começo ao fim: você pede ao Claude \"crie proposta.pdf com a mesma tabela de preços\". Ele gera o arquivo, você abre e confere. Manda por e-mail; o cliente abre no celular e vê exatamente a página que você viu, com a tabela inteira e os valores no lugar, só que pequena: ele dá zoom para ler cada linha. Se ele quiser mudar um valor, precisa de um programa de edição de PDF, e, se a proposta estiver assinada digitalmente, a mudança aparece como alteração feita depois da assinatura. A proposta chegou intacta; a leitura é que deu mais trabalho."
      ],
      [
        "p",
        "Quando usar: contrato, proposta fechada, entrega final, qualquer coisa que vai ser impressa. Quando não usar: leitura longa no celular, e texto que ainda vai mudar."
      ],
      [
        "h3",
        "HTML: o navegador desenha a página"
      ],
      [
        "p",
        "O `.html` é texto comum com marcações. Uma marcação diz \"isto é o título principal\", outra diz \"isto é um parágrafo\", outra diz \"isto é um botão\". Quem lê essas marcações e desenha a tela é o {{navegador}}, como o Chrome, o Edge ou o Safari. Esse texto com marcações é o {{codigo}} da página, e você vai ver um pedaço dele daqui a pouco."
      ],
      [
        "p",
        "Como quem desenha é o navegador, e o navegador sabe o tamanho da tela, uma página bem feita se reorganiza: três colunas no PC viram uma coluna no celular, a letra continua do mesmo tamanho, e você rola para baixo em vez de dar zoom. É por isso que este curso é um site, e não um PDF. Além disso, HTML pode ter botão, caixa de busca, pergunta que responde na hora, animação, simulador. Os exercícios desta aula são HTML."
      ],
      [
        "p",
        "Um exemplo inteiro, do começo ao fim: você pede \"crie guia.html com o resumo da matéria e uma pergunta de assinalar no fim\". O Claude cria o arquivo; você dá dois cliques e o navegador abre a página, com a pergunta funcionando: você toca numa alternativa e a explicação aparece. No PC, o texto ocupa uma coluna larga; quando você estreita a janela, ele se empilha. Para ler no celular, você copia o arquivo para a nuvem e abre pelo navegador do celular, e a página cabe na tela sem zoom."
      ],
      [
        "p",
        "Duas coisas que confundem todo mundo. Primeira: um arquivo HTML **não precisa de internet** para abrir. Dois cliques nele, e o navegador abre a página do seu próprio disco. O texto escrito direto no arquivo aparece; o que a página busca de fora, como uma fonte, um vídeo ou o {{javascript|JavaScript}} que monta o conteúdo, deixa de carregar, e uma página montada desse jeito pode abrir vazia. Por isso, para abrir sem internet, peça um HTML **autocontido**, com tudo dentro do próprio arquivo. Segunda: para **outras pessoas** abrirem a página por um link, aí sim é preciso publicar em um {{servidor}}, e a aula 0.8 mostra a diferença entre a página no seu PC e a página publicada."
      ],
      [
        "p",
        "Quando usar: guia interativo, simulador, site, qualquer coisa que vai ser lida em telas de tamanhos diferentes. Quando não usar: documento formal por e-mail, porque alguns serviços de e-mail bloqueiam anexos `.html` por segurança, e porque quem recebe não fica com uma versão fixa."
      ],
      [
        "h3",
        "E o Excel e o Markdown?"
      ],
      [
        "p",
        "Dois outros formatos aparecem o tempo todo no seu dia, e a próxima aula aprofunda os dois. O Excel (`.xlsx`) é para contas e tabelas: cada célula guarda um valor ou uma fórmula, e o programa recalcula tudo quando algo muda. O {{markdown|Markdown}} (`.md`) é texto simples com marcações leves, como `#` para título e `**` para negrito. É o formato que o Obsidian usa e um formato que a IA lê com facilidade, porque não tem nada escondido: o que você vê no arquivo é tudo o que existe nele."
      ],
      [
        "p",
        "Um exemplo de cada: uma tabela de parcelas de um empréstimo, em que mudar a taxa recalcula todas as linhas sozinha, é trabalho de Excel; a lista de regras que você quer que o Claude siga em todo projeto é trabalho de Markdown. E o contrário dá errado: não use Markdown para um layout caprichado, porque ele não guarda cor, coluna nem posição; e não use Excel para texto corrido, porque célula não é página."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Formato",
            "Feito para",
            "Evite para"
          ],
          "linhas": [
            [
              "Word (.docx)",
              "Escrever, revisar, comentar em grupo",
              "Entrega final que não pode mudar"
            ],
            [
              "PDF (.pdf)",
              "Contrato, proposta fechada, impressão",
              "Leitura longa em tela pequena"
            ],
            [
              "HTML (.html)",
              "Site, guia interativo, simulador",
              "Documento formal por e-mail"
            ],
            [
              "Excel (.xlsx)",
              "Contas e tabelas",
              "Texto corrido"
            ],
            [
              "Markdown (.md)",
              "Notas e arquivos que a IA lê bem",
              "Layout caprichado"
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
          "**Preciso instalar alguma coisa?** Quase nada. No celular, o app do Word precisa ser instalado; o Word online e o Google Docs, não. No PC, o Word também abre no LibreOffice. PDF abre dentro do próprio navegador. HTML abre em qualquer navegador.",
          "**Custa?** Nada. Os três formatos são abertos. O Word é um programa pago, mas o formato `.docx` abre em programas gratuitos.",
          "**E se eu pedir o formato errado?** Peça para o Claude converter: \"converta estudo.docx para PDF\". Só saiba que conversão perde coisas. De PDF para Word, o layout costuma desandar. De HTML para PDF, botões e buscas deixam de funcionar, porque viram uma foto.",
          "**Como sei em que formato um arquivo está?** Pelo final do nome, a {{extensao|extensão}}, que a aula 0.2 explica. O Windows esconde as extensões por padrão, e a aula 0.1 mostra como ligar.",
          "**O Claude consegue criar os três?** Consegue, e também converte entre eles. Se ele disser que falta alguma coisa, peça para explicar o que falta e como resolver."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o que tem dentro de um .docx",
          "blocos": [
            [
              "p",
              "Um arquivo `.docx` é, na verdade, um {{zip|ZIP}} disfarçado. Se você renomear `proposta.docx` para `proposta.zip` e abrir, vai ver pastas dentro, e um arquivo chamado `word/document.xml` com o texto todo cercado de marcações. O Excel `.xlsx` é igual. É por isso que o Claude consegue ler e escrever esses arquivos: por baixo, é texto."
            ],
            [
              "p",
              "O PDF tem um primo chamado PDF/A, feito para arquivar documentos por décadas: ele obriga as fontes a irem dentro do arquivo e proíbe conteúdo que dependa de programa externo. Órgãos públicos costumam exigir."
            ],
            [
              "p",
              "Uma página de verdade usa três linguagens juntas: o HTML diz o que cada coisa é, o {{css|CSS}} diz como ela aparece, e o {{javascript|JavaScript}} diz como ela se comporta quando você toca. Neste curso você só vai ler as duas últimas, até o módulo 15."
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
          "pergunta": "O que você acha que aparece na tela com este código?",
          "codigo": "<h1>Meu site</h1>\n<p>Olá!</p>\n<button>Comprar</button>",
          "linguagem": "html",
          "resposta": "Um título grande, uma frase e um botão. As marcações não aparecem: `<h1>` só avisa que aquilo é o título principal, `<p>` é um parágrafo e `<button>` é um botão. O navegador lê as marcações e desenha; você só vê o resultado.",
          "vivo": [
            [
              "Trocar Comprar por Pagar",
              "<h1>Meu site</h1>\n<p>Olá!</p>\n<button>Pagar</button>"
            ],
            [
              "Trocar o título",
              "<h1>Minha loja</h1>\n<p>Olá!</p>\n<button>Comprar</button>"
            ],
            [
              "Tirar o botão",
              "<h1>Meu site</h1>\n<p>Olá!</p>"
            ],
            [
              "Voltar ao original",
              "<h1>Meu site</h1>\n<p>Olá!</p>\n<button>Comprar</button>"
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
          "p": "Você vai mandar uma proposta com valores para um cliente. Quer que ela abra igual para ele e que seja difícil de alterar sem deixar rastro. Qual formato escolhe?",
          "o": [
            [
              "Word com senha de edição, que impede mudanças",
              "A senha de edição dificulta, mas não acusa mudança: quem copia o texto ou abre em outro programa edita sem deixar rastro, e a página ainda é montada de um jeito em cada computador."
            ],
            [
              "PDF, de preferência com assinatura digital",
              "Isso. Abre igual em qualquer aparelho, e a assinatura acusa qualquer mudança feita depois."
            ],
            [
              "HTML, porque abre em qualquer navegador",
              "Abre, mas o cliente não fica com uma versão fixa, o arquivo é fácil de mudar e alguns e-mails bloqueiam o anexo."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Salvei o guia como guia.pdf. Ele vai abrir igual no PC e no celular, mas no celular a página fica pequena e você vai precisar de zoom. Se quiser ler com conforto no celular, posso gerar também um HTML.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: PDF não abre no celular sem um programa à parte",
              "O navegador do celular costuma abrir PDF sozinho. O Claude não errou aí."
            ],
            [
              "Está errada: no celular, o PDF se ajusta à largura da tela",
              "Quem se reorganiza conforme a tela é o HTML. A página do PDF tem tamanho fixo e encolhe inteira, como o Claude disse."
            ],
            [
              "Está correta: o PDF tem página fixa, e o HTML se adapta",
              "Isso. Abre igual em todo aparelho, mas pequeno no celular; para ler com conforto, HTML. Conferir também é reconhecer quando a resposta está certa."
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
            "\"Está em PDF, então está protegido.\"",
            "PDF dificulta, mas não impede a alteração. Para saber se mudou, use assinatura digital: ela não impede a edição, mas acusa o que foi alterado depois de assinar."
          ],
          [
            "\"HTML precisa de internet.\"",
            "Não. Um arquivo `.html` abre no navegador sem internet, com dois cliques. Você só precisa publicar se quiser que outras pessoas acessem por um link. Numa página autocontida, tudo funciona; numa que busca coisas de fora, o que vem de fora deixa de carregar, e ela pode até abrir vazia."
          ],
          [
            "\"Renomeei o arquivo para .pdf e virou PDF.\"",
            "A extensão é só o final do nome. O conteúdo continua sendo um Word, e o leitor de PDF vai reclamar. Para converter de verdade, use \"Salvar como\" ou peça para o Claude converter."
          ],
          [
            "\"Mandei o Word, então o cliente vê o mesmo que eu.\"",
            "Ele vê o que o programa dele montou, com as fontes dele. Se a aparência importa, mande PDF."
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
          "p": "Por que um PDF fica ruim no celular, e um HTML bem feito não?",
          "r": [
            "O PDF tem página de tamanho fixo: no celular ela encolhe inteira, e você dá zoom.",
            "O HTML é desenhado pelo navegador na hora de abrir.",
            "O navegador reorganiza o conteúdo conforme a largura da tela."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que acontece quando o mesmo arquivo .docx abre em dois computadores diferentes?",
          "r": [
            "Cada computador monta a página na hora de abrir, a partir do texto e das instruções de aparência.",
            "Se faltar uma fonte ou a versão do programa for outra, o texto anda de lugar."
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
          "titulo": "Compare os três no seu celular",
          "lugar": "No PC, com o Claude Code; depois no celular",
          "tempo": "15 minutos",
          "antes": "Você vai pedir ao {{claude-code|Claude Code}} três arquivos com o mesmo conteúdo, um em cada formato, e abrir os três no celular para sentir a diferença. Precisa do Claude Code instalado, como a aula 0.0 ensina, e de uma {{nuvem}} que você já use no celular, como OneDrive ou Google Drive. Para gerar o `.docx` e o `.pdf`, o Claude pode precisar instalar uma {{biblioteca}}; o pedido abaixo já manda ele dizer o que instalou. Pelo app: no app do Claude, no celular ou na web, você pode fazer o mesmo pedido e baixar o Word e o PDF na própria conversa; o que não dá é salvar direto numa pasta do PC, então os passos com o Explorador ficam de fora. Este laboratório foi escrito a partir do que o Claude Code costuma fazer; como ele conversa, as frases exatas podem variar. Não foi {{rodar|rodado}} de ponta a ponta antes de publicar.",
          "passos": [
            {
              "faz": "Crie uma pasta fora do OneDrive, como C:\\Projetos\\estudo. Se o caminho da pasta tiver \"OneDrive\" no nome, ela está sincronizada: escolha outro lugar.",
              "espera": "A pasta existe e está vazia."
            },
            {
              "faz": "Abra o Claude Code dentro dessa pasta.",
              "espera": "O Claude Code fica esperando um pedido, já dentro dessa pasta."
            },
            {
              "faz": "Cole este pedido. Se ele pedir permissão para criar arquivos, aceite. Se disser que precisa instalar uma biblioteca, peça o nome e a página dela no {{pypi|PyPI}}, e aceite só se o nome bater: a aula 4.1 ensina a conferir.",
              "cola": "Crie uma folha de estudos curta sobre juros compostos, com um exemplo numérico, em três arquivos nesta pasta: estudo.docx, estudo.pdf e estudo.html. O HTML precisa ser autocontido, sem nada buscado de fora, e se adaptar à largura da tela. No fim, me diga o caminho completo de cada arquivo e, se instalou alguma biblioteca para gerar o .docx ou o .pdf, o nome de cada uma.",
              "espera": "O Claude escreve o texto, cria os três arquivos e responde com três {{caminho|caminhos}}, parecidos com C:\\Projetos\\estudo\\estudo.pdf, e com o nome de qualquer biblioteca que tenha instalado."
            },
            {
              "faz": "Abra a pasta no {{explorador}}.",
              "espera": "Três arquivos com o mesmo nome e extensões diferentes: .docx, .pdf e .html. Se as extensões não aparecerem, a aula 0.1 mostra como ligar."
            },
            {
              "faz": "Dê dois cliques no estudo.html.",
              "espera": "O navegador abre a página, mesmo sem internet."
            },
            {
              "faz": "Puxe a borda da janela do navegador para estreitá-la.",
              "espera": "O texto se reorganiza sozinho numa coluna mais estreita, sem cortar nada e sem pedir zoom."
            },
            {
              "faz": "No Explorador, copie os três arquivos para a pasta do OneDrive ou do Google Drive.",
              "espera": "Os três aparecem na pasta da nuvem e, depois de alguns segundos, a nuvem termina de sincronizar."
            },
            {
              "faz": "No celular, abra o app do OneDrive ou do Google Drive, na pasta para onde copiou os arquivos.",
              "espera": "Os três arquivos aparecem na lista."
            },
            {
              "faz": "Toque no estudo.pdf.",
              "espera": "A página aparece inteira e encolhida: para ler, você dá zoom e arrasta."
            },
            {
              "faz": "Volte à lista e toque no estudo.docx.",
              "espera": "O Word abre num app de edição ou numa pré-visualização, e a aparência pode mudar um pouco em relação ao PC."
            },
            {
              "faz": "Volte à lista e toque no estudo.html.",
              "espera": "No Android, a página pode abrir direto, ou aparecer como um texto cheio de marcações. No iPhone, a pré-visualização, a mesma do app Arquivos, mostra a página sem o que depende de JavaScript, como botões e exercícios. Este passo não foi testado em aparelho."
            },
            {
              "faz": "No Android, se apareceu o texto cheio de marcações, toque em \"Abrir com\" e escolha o Chrome.",
              "espera": "A página abre no Chrome e cabe na tela, sem zoom. Se ela já tinha aberto direto, ou se o seu celular é um iPhone, só marque este passo. Este passo não foi testado em aparelho."
            }
          ],
          "errado": "se o Claude disser que não consegue criar o `.docx` ou o `.pdf`, peça: \"me diga o que falta e como resolver\". Se ele instalou alguma biblioteca, anote o nome que ele disse: a aula 4.1 ensina a conferir uma. Se o HTML continuar aparecendo como código no celular: no Android, use \"Abrir com\" e escolha o Chrome; no iPhone, a pré-visualização do app Arquivos mostra a página sem os exercícios, então teste a parte interativa no PC. Os dois caminhos do celular não foram testados em aparelho."
        }
      ],
      [
        "fontes",
        [
          [
            "Aprendendo desenvolvimento web, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development",
            "comunidade",
            "31/10/2026",
            "pt"
          ],
          [
            "Criar e editar arquivos com o Claude, Anthropic",
            "https://support.claude.com/pt/articles/12111783-criar-e-editar-arquivos-com-claude",
            "oficial",
            "01/11/2026",
            "pt"
          ],
          [
            "Salvar ou converter para PDF, Microsoft",
            "https://support.microsoft.com/pt-br/office/salvar-ou-converter-para-pdf-ou-xps-no-office-para-windows-d85416c5-7d77-4fd6-a216-6f4bf7c7c110",
            "oficial",
            "31/10/2026",
            "pt"
          ],
          [
            "Getting Started, Markdown Guide",
            "https://www.markdownguide.org/getting-started/",
            "comunidade",
            "31/10/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Word para escrever, PDF para entregar e HTML para abrir no navegador, com interação",
          "Isso. Cada formato tem o seu trabalho."
        ],
        [
          "Na dúvida, prefira o PDF: ele abre igual em qualquer aparelho e é o mais fácil de ler",
          "Abre igual, mas é o pior dos três para ler em tela pequena, e o mais difícil de editar."
        ],
        [
          "O HTML é para sites publicados na internet; para arquivos no seu PC, use Word ou PDF",
          "Um arquivo HTML abre no navegador direto do seu PC, sem internet nem publicação. Publicar só é preciso para outras pessoas abrirem por um link."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Qual formato mantém a mesma aparência em qualquer aparelho?",
        "o": [
          [
            "Word",
            "O Word monta a página na hora de abrir, com as fontes e a versão daquele computador."
          ],
          [
            "PDF",
            "Isso. O PDF guarda a posição de cada letra na página."
          ],
          [
            "HTML",
            "O HTML se adapta à tela: a aparência muda de propósito."
          ]
        ],
        "c": 1
      },
      {
        "p": "Qual formato se adapta ao tamanho da tela, se for bem feito?",
        "o": [
          [
            "Word",
            "O Word monta páginas de tamanho definido, e o resultado varia de um aparelho para outro; o app do celular pode reorganizar o texto, mudando a aparência."
          ],
          [
            "PDF",
            "A página do PDF encolhe inteira para caber; não se reorganiza."
          ],
          [
            "HTML",
            "Isso. Quem desenha o HTML é o navegador, que reorganiza tudo conforme a largura da tela."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Por que o Word muda de um PC para outro?",
        "Porque o Word monta a página na hora de abrir, usando as fontes e a versão daquele computador. Se a fonte não existir ali, ele troca por outra, e o texto muda de lugar. Quando a aparência precisa ficar igual, salve em PDF."
      ],
      [
        "Posso mandar HTML por e-mail?",
        "Pode, como anexo, e quem recebe abre no navegador. Mas alguns serviços de e-mail bloqueiam esse tipo de anexo por segurança. Se a pessoa só precisa ler, um PDF costuma dar menos trabalho; se ela precisa interagir, publique a página e mande o link."
      ],
      [
        "O que é assinatura digital?",
        "Um registro eletrônico preso ao arquivo, que diz quem assinou e quando. Se alguém mudar o arquivo depois, a assinatura acusa. Ela não impede a edição; denuncia. Serve para contratos e propostas em PDF."
      ]
    ]
  },
  "0-4": {
    "tempo": 40,
    "video": "a0-4",
    "videoTipo": "relembrar",
    "opcional": false,
    "abertura": "Você já abriu um {{csv|CSV}} e viu tudo espremido numa coluna só, ou pediu uma tabela ao Claude e recebeu linhas cheias de barras verticais. São três {{formato|formatos}} para guardar dados (Excel, CSV e {{markdown|Markdown}}), cada um bom num trabalho, e esta aula mostra quando pedir cada um.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Boa parte do que você vai pedir ao {{claude-code}} envolve dados em tabela: uma lista de clientes, as parcelas de um empréstimo, as notas de uma matéria, o resultado de uma pesquisa. E a mesma tabela pode ser guardada em formatos muito diferentes. Se você pedir o formato errado, o {{arquivo}} até abre, mas dá trabalho: as contas não recalculam, os acentos quebram, as colunas se misturam, ou a IA gasta muito mais para ler o que precisava."
      ],
      [
        "p",
        "Os três formatos desta aula cobrem quase tudo. O Excel (`.xlsx`) é para quem vai fazer contas e olhar a planilha. O CSV (`.csv`) é para levar dados de um {{programa}} a outro, inclusive até a IA. O Markdown (`.md`) é para texto com estrutura, como notas, regras e tabelas curtas, e é o formato que o Claude lê e escreve com mais naturalidade. Saber a diferença deixa você pedir o certo e conferir o que recebeu."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa receita de bolo guardada de três jeitos. O Excel é a cozinha montada: tem balança, timer e forno, e faz as contas sozinho quando você muda a quantidade de ovos. O CSV é a lista de ingredientes num papel, um por linha, com as medidas separadas por um sinal combinado: qualquer pessoa lê, qualquer cozinha usa. O Markdown é a receita escrita num caderno, com título, subtítulos e marcadores: organizada para ler, sem nenhuma máquina."
      ],
      [
        "quebra",
        "Um papel com a lista não muda sozinho; um CSV, quando o Excel abre e salva de volta, pode mudar: zeros à esquerda somem, números longos viram notação científica, acentos quebram. E o caderno só fica bonito num programa que entende as marcações do Markdown; no Bloco de Notas, você vê os símbolos crus, como os riscos que o cozinheiro fez para organizar a página."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Excel (.xlsx): a planilha que faz contas"
      ],
      [
        "p",
        "Uma planilha do Excel é feita de células, organizadas em linhas (1, 2, 3) e colunas (A, B, C). Cada célula guarda um valor, como um nome ou um número, ou uma fórmula, como `=B2*1,1`, que o Excel recalcula toda vez que algo muda. Um arquivo pode ter várias abas, com cores, formatos de número, gráficos e filtros. É o lugar certo para uma tabela de parcelas em que mudar a taxa refaz todas as linhas sozinha."
      ],
      [
        "p",
        "O que acontece por baixo surpreende: o `.xlsx` não é uma tabela, é um pacote {{zip|ZIP}} com vários arquivos de texto dentro. Num teste, uma planilha com só três linhas (o cabeçalho e dois clientes) foi salva pelo Excel e aberta como ZIP: dentro havia dez arquivos, entre eles `xl/worksheets/sheet1.xml` (as células), `xl/sharedStrings.xml` (os textos) e `xl/styles.xml` (a formatação). O arquivo inteiro ficou com 10.149 {{byte|bytes}}. As mesmas três linhas em CSV ocupam 107 bytes, quase cem vezes menos."
      ],
      [
        "p",
        "Por isso o `.xlsx` não é texto que se leia. Aberto no Bloco de Notas, o arquivo do teste apareceu como uma sopa de símbolos e letras de outros alfabetos, começando por `䭐Ѓ !條Ş`, e a barra de baixo do Bloco de Notas disse UTF-16 LE: ele tentou adivinhar o tipo de texto e errou, porque não era texto. A IA também não lê o `.xlsx` direto: o Claude precisa de uma {{biblioteca}} que abra o pacote e monte a tabela, e nesse caminho fórmulas e formatação podem se perder."
      ],
      [
        "p",
        "Quando usar: contas que recalculam, várias abas, gráficos, e quando a pessoa que vai receber trabalha no Excel. Quando não usar: para mandar dados a outro programa ou à IA, para guardar dados num projeto com {{git|Git}} (ele só diz que o arquivo mudou, sem mostrar o quê), e para tabelas que só precisam ser lidas."
      ],
      [
        "h3",
        "CSV (.csv): a tabela em texto puro"
      ],
      [
        "p",
        "O CSV é uma tabela escrita como {{texto-puro|texto puro}}. Cada linha do arquivo é uma linha da tabela, e um {{separador}} divide as colunas. A primeira linha costuma trazer os nomes das colunas. Não há fórmula, cor, aba nem largura de coluna: só os valores. Este é o arquivo de teste da aula, mostrado pelo {{comando}} `Get-Content` do {{powershell|PowerShell}}, numa saída real:"
      ],
      [
        "saida",
        "Cliente;Cidade;Ação;Valor\nJoão Araújo;São Paulo;Compra;1500\nInês Conceição;Maceió;Venda;980"
      ],
      [
        "p",
        "Aberto no Excel, o mesmo arquivo virou esta tabela, conferida célula por célula no teste:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "A",
            "B",
            "C",
            "D"
          ],
          "linhas": [
            [
              "Cliente",
              "Cidade",
              "Ação",
              "Valor"
            ],
            [
              "João Araújo",
              "São Paulo",
              "Compra",
              "1500"
            ],
            [
              "Inês Conceição",
              "Maceió",
              "Venda",
              "980"
            ]
          ]
        }
      ],
      [
        "p",
        "O nome vem do inglês \"valores separados por vírgula\", mas no Brasil o separador mais comum é o ponto e vírgula, porque a vírgula já é o separador decimal (1500,50). O Excel não lê o separador do arquivo: ele usa o que está nas configurações de região do Windows, ou no próprio Excel, quando a opção de usar os separadores do sistema está desligada. Em português do Brasil, costuma ser ponto e vírgula; num Windows com a região dos Estados Unidos, vírgula. Se o arquivo usa um e o Excel espera o outro, tudo cai na coluna A. Aconteceu no teste: o mesmo arquivo, gravado com vírgulas, abriu no Excel com cada linha inteira numa célula só, porque aquele Excel esperava ponto e vírgula."
      ],
      [
        "p",
        "Há outra armadilha, a dos acentos. O arquivo de teste foi gravado em {{utf8|UTF-8}} com {{bom|BOM}}, uma marca invisível de três bytes no começo que avisa \"este texto está em UTF-8\". Com a marca, o Excel e o PowerShell 5.1 mostram os acentos certos, como acima. Sem ela, os dois mostram \"AÃ§Ã£o\" no lugar de \"Ação\". A causa, e o pedido certo ao Claude, ficam para a aula 0.4b; por ora, guarde a frase: CSV para o Excel, em UTF-8 com BOM."
      ],
      [
        "p",
        "E o Excel \"ajuda\" demais. Ao abrir um CSV, ele tenta adivinhar o tipo de cada coluna: tira zeros à esquerda (um CEP 01310 vira 1310), transforma números longos em notação científica (um código de 16 dígitos vira algo como 1,23E+15) e pode trocar textos por datas. Se depois você salvar o CSV por cima, essas mudanças ficam gravadas. A Microsoft documenta esse comportamento. A regra é: abrir para olhar à vontade, salvar por cima só sabendo o que mudou."
      ],
      [
        "p",
        "Quando usar: exportar e importar dados entre sistemas, mandar uma tabela para a IA analisar, guardar dados num projeto com Git. Quando não usar: quando precisa de fórmula, várias abas ou formatação, e quando o destino é uma pessoa que vai trabalhar na planilha."
      ],
      [
        "h3",
        "Markdown (.md): texto com marcações leves"
      ],
      [
        "p",
        "O Markdown é texto puro com algumas marcações combinadas: `#` no começo da linha faz um título, `**palavra**` faz negrito, um hífen no começo faz um item de lista, e barras verticais com uma linha de hífens fazem uma tabela. Num programa que entende essas marcações, como o Obsidian, o {{github|GitHub}}, o {{vs-code|VS Code}} ou o próprio chat do Claude, elas viram formatação. No Bloco de Notas, aparecem cruas, e o texto continua legível."
      ],
      [
        "p",
        "A IA prefere Markdown por motivos concretos. Primeiro, é texto puro: o que está no arquivo é tudo o que existe nele, sem pacote, sem formatação escondida. Segundo, a estrutura fica visível com poucos símbolos: títulos e listas organizam o conteúdo sem gastar muitos {{token|tokens}}, a unidade em que a IA lê e cobra. No teste, os mesmos dados em tabela Markdown ocuparam 149 bytes, perto dos 107 do CSV e longe dos 10.149 do `.xlsx`. Terceiro, é o formato da casa: o {{claude-md|CLAUDE.md}}, as {{skill|skills}} e as notas do Obsidian são Markdown, e o Claude responde em Markdown no chat."
      ],
      [
        "p",
        "Quando usar: notas, resumos, regras para o Claude, documentação e tabelas curtas dentro de um texto. Quando não usar: para contas (Markdown não calcula), para tabelas com milhares de linhas (o CSV é mais enxuto e mais fácil de importar) e para um layout caprichado, com cores e colunas lado a lado."
      ],
      [
        "h3",
        "Qual pedir em cada caso"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Situação",
            "Peça",
            "Por quê"
          ],
          "linhas": [
            [
              "Parcelas que recalculam quando a taxa muda",
              "Excel (.xlsx)",
              "Fórmulas e recálculo automático"
            ],
            [
              "Lista de clientes para importar em outro sistema",
              "CSV",
              "Texto puro que qualquer sistema lê"
            ],
            [
              "Dados para o Claude analisar",
              "CSV, ou Markdown se for pequeno",
              "A IA lê texto puro direto, sem biblioteca"
            ],
            [
              "Regras que o Claude deve seguir num projeto",
              "Markdown (.md)",
              "Estrutura visível e pouca marcação"
            ],
            [
              "Tabela para alguém abrir no Excel, com acentos",
              "CSV em UTF-8 com BOM, ou .xlsx",
              "Sem a marca BOM, os acentos quebram"
            ],
            [
              "Resumo de estudo com uma tabela curta",
              "Markdown",
              "Lê bem no Obsidian, no GitHub e no Bloco de Notas"
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
          "**O Excel abre CSV?** Abre, com dois cliques, se o separador e a marca BOM combinarem com ele. Para escolher o separador na hora, use a guia Dados e a opção de obter dados de Texto/CSV.",
          "**Se eu salvar o CSV no Excel, ele vira .xlsx?** Não. Ele continua CSV, sem fórmulas nem cores. Para virar planilha, use Salvar como e escolha Pasta de Trabalho do Excel.",
          "**Preciso instalar algo para Markdown?** Não. O Bloco de Notas abre; o Obsidian e o VS Code, que são gratuitos, mostram formatado.",
          "**E o Google Planilhas?** Abre CSV e .xlsx pelo {{navegador}}. Na hora de importar um CSV, ele pergunta o separador.",
          "**E o {{json|JSON}}?** É outro formato de texto, mais usado entre programas. Ele aparece no módulo 2."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: por dentro do .xlsx e o CSV com aspas",
          "blocos": [
            [
              "p",
              "No teste, o `xl/sharedStrings.xml` de dentro do `.xlsx` guardava os dez textos da planilha numa lista, e o `sheet1.xml` guardava, em cada célula, só o número do texto nessa lista: a célula A2 dizia \"texto número 4\", e o 4 era João Araújo. É por isso que um programa precisa montar a tabela antes de alguém ler."
            ],
            [
              "p",
              "Quando um valor do CSV contém o próprio separador, ele vai entre aspas: `\"Silva; Filho\";São Paulo`. Sem as aspas, o ponto e vírgula do nome abriria uma coluna a mais. Existe ainda o TSV, que usa a tecla Tab como separador e evita essa confusão."
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
          "pergunta": "O que você acha que aparece quando um programa que entende Markdown, como o Obsidian, mostra este texto? E no Bloco de Notas?",
          "codigo": "# Clientes\n\n| Cliente | Cidade | Valor |\n|---|---|---|\n| João Araújo | São Paulo | 1500 |\n| Inês Conceição | Maceió | 980 |",
          "linguagem": "markdown",
          "resposta": "No Obsidian, um título grande, \"Clientes\", e embaixo uma tabela com três colunas e duas linhas de dados, com bordas: as barras verticais viram as divisões, e a linha de hífens diz que a primeira linha é o cabeçalho. No Bloco de Notas, aparece exatamente o texto acima, com o `#` e as barras, e ainda assim dá para ler. É essa a vantagem: o mesmo arquivo serve para gente e para a IA."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você quer mandar a lista de clientes para o Claude analisar e, depois, importar a mesma lista num sistema de cobrança. Qual formato pedir?",
          "o": [
            [
              "Excel, porque guarda fórmulas, cores e várias abas",
              "Nada disso ajuda aqui. Para a IA e para o sistema, o .xlsx precisa ser desempacotado antes, e a formatação se perde."
            ],
            [
              "Markdown, porque é o formato que a IA lê melhor",
              "A IA lê bem, mas o sistema de cobrança espera um arquivo de importação, em geral CSV. O Markdown resolve só metade."
            ],
            [
              "CSV, porque é texto puro que os dois leem bem",
              "Isso. Texto puro, enxuto, que a IA lê direto e o sistema importa."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"Criei clientes.csv usando vírgula entre as colunas, que é o separador do formato, como o próprio nome diz: valores separados por vírgula. Conferi as três linhas, uma a uma. Num Excel em português do Brasil, ele deve abrir com cada informação na sua coluna.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: a vírgula é o separador padrão do CSV em qualquer Excel",
              "O Excel usa o separador das configurações de região. No Brasil, costuma ser ponto e vírgula."
            ],
            [
              "No Brasil, o Excel costuma esperar ponto e vírgula, e tudo cai na coluna A",
              "Isso. Peça ponto e vírgula, ou use a importação de Texto/CSV da guia Dados para escolher o separador."
            ],
            [
              "O erro é outro: um CSV não tem colunas, só linhas de texto corrido",
              "Tem colunas, sim: o separador divide cada linha em colunas. O erro está no separador escolhido."
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
            "\"Abri o CSV no Excel e salvei; está igual.\"",
            "O Excel pode ter tirado zeros à esquerda, encurtado números longos e trocado textos por datas. Salve por cima só sabendo o que mudou."
          ],
          [
            "\"Tudo numa coluna só: o arquivo está estragado.\"",
            "Quase sempre é o separador: o arquivo usa vírgula e o Excel espera ponto e vírgula, ou o contrário. Importe pela guia Dados e escolha o separador."
          ],
          [
            "\"Vou guardar os 5 mil clientes numa tabela em Markdown.\"",
            "O Markdown não calcula e fica pesado em tabelas grandes. Para milhares de linhas, peça CSV; deixe o Markdown para tabelas curtas dentro de um texto."
          ],
          [
            "\"O Markdown no Bloco de Notas está quebrado.\"",
            "Os símbolos crus são normais. Num programa que entende Markdown, eles viram título, negrito e tabela."
          ],
          [
            "\"Mando o .xlsx para a IA e dá na mesma.\"",
            "A IA precisa desempacotar o .xlsx com uma biblioteca, e fórmulas e formatação podem se perder. Para análise, mande CSV."
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
          "p": "Quando usar Excel, CSV e Markdown?",
          "r": [
            "Excel: contas que recalculam, várias abas e formatação.",
            "CSV: levar dados de um programa a outro, inclusive à IA.",
            "Markdown: notas, regras e textos com estrutura, que a IA lê bem."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que a IA prefere CSV e Markdown ao .xlsx?",
          "r": [
            "São texto puro: o que está no arquivo é tudo o que existe nele.",
            "O .xlsx é um pacote ZIP com vários arquivos dentro, que precisa ser desempacotado.",
            "Menos bytes e menos tokens para dizer a mesma coisa."
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
          "titulo": "O mesmo dado no Bloco de Notas, no Excel e em Markdown",
          "lugar": "No PC, com o Claude Code, o Excel e o Bloco de Notas",
          "tempo": "20 minutos",
          "antes": "Você vai pedir ao Claude Code um CSV pequeno, com acentos, gravado em UTF-8 com BOM; abrir o mesmo arquivo no Bloco de Notas e no Excel; salvar uma cópia em .xlsx e ver o que o Bloco de Notas mostra dela; e pedir a mesma tabela em Markdown. Precisa do Claude Code e da pasta `C:\\Projetos\\estudo` (aula 0.0), das extensões à mostra (aula 0.1) e do Excel. Sem Excel, abra o CSV no Google Planilhas pelo navegador, que pergunta o separador ao importar, e pule os passos do .xlsx; esse caminho não foi testado. Pelo app: os pedidos funcionam no {{app-desktop|app desktop}}, aba Code, na mesma pasta. O arquivo, a leitura no PowerShell, o Excel e o Bloco de Notas foram testados de verdade com um arquivo igual ao deste laboratório; a conversa com o Claude Code não foi {{rodar|rodada}} de ponta a ponta (não testado), e as frases dele vão variar.",
          "passos": [
            {
              "faz": "Abra o {{terminal}}: aperte as teclas Windows e X juntas e escolha Terminal (em alguns PCs, Windows PowerShell).",
              "espera": "Abre uma janela com uma linha parecida com PS C:\\Users\\SeuNome>."
            },
            {
              "faz": "Cole este comando e aperte Enter.",
              "cola": "cd C:\\Projetos\\estudo",
              "espera": "O começo da linha muda para PS C:\\Projetos\\estudo>."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre nessa pasta."
            },
            {
              "faz": "Cole este pedido e aperte Enter. Se ele pedir {{permissao|permissão}}, aceite.",
              "cola": "Crie nesta pasta o arquivo clientes.csv, gravado em UTF-8 com BOM, com estas três linhas exatas, sem mudar nada:\nCliente;Cidade;Ação;Valor\nJoão Araújo;São Paulo;Compra;1500\nInês Conceição;Maceió;Venda;980\nDepois confira os três primeiros bytes do arquivo e me diga quais são.",
              "espera": "Ele cria o arquivo e diz que os três primeiros bytes são EF BB BF: é a marca BOM. Se ele disser outra coisa, peça: \"regrave clientes.csv em UTF-8 com BOM\"."
            },
            {
              "faz": "Cole este pedido e aperte Enter.",
              "cola": "Rode no Windows PowerShell o comando Get-Content .\\clientes.csv e me mostre a saída exata, sem resumir.",
              "saida": "Cliente;Cidade;Ação;Valor\nJoão Araújo;São Paulo;Compra;1500\nInês Conceição;Maceió;Venda;980",
              "espera": "As três linhas, com os acentos certos e ponto e vírgula entre as colunas."
            },
            {
              "faz": "Abra o {{explorador|Explorador}} com as teclas Windows e E.",
              "espera": "Abre a janela de pastas do Windows."
            },
            {
              "faz": "Clique num espaço vazio da barra de endereço, no alto do Explorador, cole o caminho abaixo e aperte Enter.",
              "cola": "C:\\Projetos\\estudo",
              "espera": "Aparece o arquivo clientes.csv, com o ícone do Excel se ele estiver instalado."
            },
            {
              "faz": "Clique com o botão direito em clientes.csv e, no menu, escolha Abrir com (Open with), Bloco de Notas (Notepad).",
              "espera": "As mesmas três linhas, em texto puro, com ponto e vírgula. No canto de baixo, à direita, a barra diz UTF-8 with BOM (num Windows em português, UTF-8 com BOM)."
            },
            {
              "faz": "Feche o Bloco de Notas.",
              "espera": "A janela do Bloco de Notas some, e o Explorador continua aberto na pasta estudo."
            },
            {
              "faz": "Dê dois cliques em clientes.csv.",
              "espera": "O Excel abre com cada informação na sua coluna, de A a D, e os acentos certos: Cliente, Cidade, Ação e Valor na primeira linha."
            },
            {
              "faz": "No Excel, abra o menu Arquivo e escolha Salvar como.",
              "espera": "Aparece a tela de salvar, com a pasta e o tipo do arquivo."
            },
            {
              "faz": "No campo do tipo de arquivo, escolha Pasta de Trabalho do Excel (.xlsx); em inglês, Excel Workbook.",
              "espera": "O nome do arquivo passa a terminar em .xlsx, e a pasta continua sendo C:\\Projetos\\estudo."
            },
            {
              "faz": "Clique em Salvar.",
              "espera": "O Excel salva sem reclamar, e o título da janela passa a mostrar clientes.xlsx."
            },
            {
              "faz": "Feche o Excel.",
              "espera": "No Explorador, aparece um arquivo novo, clientes.xlsx, ao lado do clientes.csv."
            },
            {
              "faz": "No Explorador, clique com o botão direito em clientes.xlsx e escolha Abrir com, Bloco de Notas.",
              "espera": "Uma sopa de símbolos e letras de outros alfabetos, e a barra de baixo diz outra {{codificacao|codificação}} (no teste, UTF-16 LE). É o pacote do .xlsx lido como se fosse texto."
            },
            {
              "faz": "Feche o Bloco de Notas sem salvar: se ele perguntar, responda Não salvar.",
              "espera": "A janela some, e o clientes.xlsx continua intacto."
            },
            {
              "faz": "Volte ao Claude Code, cole este pedido e aperte Enter.",
              "cola": "Crie clientes.md com os mesmos dados de clientes.csv, numa tabela em Markdown, e me mostre o conteúdo do arquivo.",
              "espera": "Ele mostra uma tabela com barras verticais e uma linha de hífens embaixo do cabeçalho, como no \"Preveja antes de ver\" desta aula."
            },
            {
              "faz": "No Explorador, clique em Exibir (View) e escolha Detalhes (Details).",
              "espera": "Os arquivos aparecem em lista, com as colunas Nome, Data de modificação, Tipo e Tamanho."
            },
            {
              "faz": "Olhe a coluna Tamanho dos três arquivos.",
              "espera": "clientes.csv e clientes.md aparecem com 1 KB; clientes.xlsx, com cerca de 10 KB. É a mesma informação: no teste, foram 107, 149 e 10.149 bytes."
            }
          ],
          "errado": "se o Excel puser tudo na coluna A, ele espera vírgula como separador, o que é comum num Windows com a região dos Estados Unidos: no Excel, use a guia Dados, Obter Dados, Do Arquivo, Do Texto/CSV, e escolha Ponto e vírgula como delimitador, ou peça ao Claude a versão com vírgula. Se os acentos aparecerem como AÃ§Ã£o, o arquivo ficou sem a marca BOM: peça \"regrave clientes.csv em UTF-8 com BOM\" e abra de novo; a aula 0.4b explica. Se o Bloco de Notas perguntar se quer salvar o .xlsx, responda que não: salvar ali estraga a planilha. Se o Excel avisar, ao salvar o CSV, que alguns recursos podem se perder, é o aviso normal de que CSV não guarda fórmulas nem cores.",
          "naoTestado": "As respostas do Claude Code (passos 3, 4, 5 e 17) e os cliques no Explorador e no menu do Excel não foram rodados antes de publicar: exigem o Claude Code interativo e a tela do Windows. Foram testados de verdade, com um arquivo igual: a leitura com Get-Content (saída do passo 5), o Bloco de Notas (UTF-8 with BOM e, no .xlsx, UTF-16 LE), o Excel abrindo o CSV em quatro colunas com acentos certos, o .xlsx salvo pelo Excel e os tamanhos. O caminho pelo Google Planilhas não foi testado."
        }
      ],
      [
        "fontes",
        [
          [
            "Abrir arquivos CSV UTF-8 corretamente no Excel (com BOM, ou pela guia Dados), Microsoft",
            "https://support.microsoft.com/pt-br/excel/opening-csv-utf-8-files-correctly-in-excel",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Importar ou exportar arquivos de texto (.txt ou .csv): separador de lista e configurações de região, Microsoft",
            "https://support.microsoft.com/pt-br/excel/get-started/import-or-export-text-txt-or-csv-files",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Manter os zeros à esquerda e números grandes, Microsoft",
            "https://support.microsoft.com/pt-br/excel/keeping-leading-zeros-and-large-numbers",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Memória do Claude Code (o CLAUDE.md é um arquivo Markdown), Claude Code",
            "https://code.claude.com/docs/pt/memory",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Markdown Guide, sintaxe básica",
            "https://www.markdownguide.org/basic-syntax/",
            "comunidade",
            "02/11/2026"
          ],
          [
            "Markdown Guide, sintaxe estendida (tabelas)",
            "https://www.markdownguide.org/extended-syntax/",
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
          "Excel para contas, CSV para trocar dados e Markdown para texto com estrutura",
          "Isso. Cada formato tem o seu trabalho, e a IA lê melhor os dois de texto puro."
        ],
        [
          "O CSV é a versão leve do Excel e guarda as fórmulas e as abas de um jeito compacto",
          "O CSV não guarda fórmula, aba nem formatação: só os valores, em texto puro."
        ],
        [
          "O Markdown serve para tabelas de qualquer tamanho e substitui o Excel e o CSV",
          "Markdown não calcula e fica pesado em tabelas grandes. Serve para texto com estrutura e tabelas curtas."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Um CSV abriu no Excel com cada linha inteira na coluna A. Qual é a causa mais provável?",
        "o": [
          [
            "O separador do arquivo não é o que aquele Excel espera",
            "Isso. O Excel usa o separador da região; no Brasil, costuma ser ponto e vírgula."
          ],
          [
            "O arquivo está corrompido e precisa ser refeito",
            "O arquivo está inteiro: o Bloco de Notas mostra tudo certo. O problema é o separador."
          ],
          [
            "O Excel não sabe abrir arquivos no formato CSV",
            "O Excel abre CSV. Ele só dividiu as colunas pelo sinal errado."
          ]
        ],
        "c": 0
      },
      {
        "p": "Por que o .xlsx aparece como símbolos sem sentido no Bloco de Notas?",
        "o": [
          [
            "Porque o Excel protege o arquivo com uma senha",
            "Não há senha. O .xlsx simplesmente não é texto."
          ],
          [
            "Porque o arquivo foi gravado com os acentos quebrados",
            "Acento quebrado mostra letras trocadas, não uma sopa de símbolos. O .xlsx nem é texto."
          ],
          [
            "Porque ele é um pacote ZIP, e não um texto puro",
            "Isso. Por dentro há vários arquivos comprimidos, que só um programa sabe montar."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual separador eu uso no CSV?",
        "Para abrir num Excel em português do Brasil, ponto e vírgula. Para outro sistema, siga o que ele pede; muitos usam vírgula. Se o Excel puser tudo numa coluna, importe pela guia Dados, De Texto/CSV, e escolha o separador."
      ],
      [
        "Por que a IA prefere Markdown?",
        "Porque é texto puro, com a estrutura visível em poucos símbolos: títulos, listas e tabelas sem formatação escondida. Gasta menos tokens e não precisa de biblioteca para abrir."
      ],
      [
        "O Excel estragou meu CSV. E agora?",
        "Se você não salvou por cima, o original está intacto: feche sem salvar. Se salvou, os zeros à esquerda e os números longos já mudaram no arquivo; recupere uma cópia anterior ou peça o arquivo de novo."
      ]
    ]
  },
  "0-4b": {
    "tempo": 30,
    "video": "a0-4b",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já abriu um {{arquivo}} e, no lugar de \"Ação\", leu \"AÃ§Ã£o\", ou viu um losango com interrogação onde devia haver um \"ç\". Nada foi apagado: o texto foi gravado com uma {{codificacao|codificação}} e lido com outra, e esta aula mostra como reconhecer qual foi o erro e o que pedir ao {{claude-code}}.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Português tem acento, e o Windows ainda convive com {{programa|programas}} que leem texto do jeito antigo. Juntando as duas coisas, o acento quebra nos lugares em que você mais trabalha: um {{csv|CSV}} aberto no Excel, um arquivo lido no {{powershell|PowerShell}}, uma lista exportada de um sistema antigo. E o Claude Code entra nessa história: no teste feito para esta aula, a {{ferramenta}} com que ele cria arquivos gravou um CSV em {{utf8|UTF-8}} sem a marca {{bom|BOM}}, que é o padrão moderno, e o PowerShell 5.1 mostrou \"AÃ§Ã£o\" ao ler o arquivo."
      ],
      [
        "p",
        "Quem entende a causa resolve em uma frase, em vez de pedir \"conserta os acentos\" e torcer. Você vai aprender a ler o sintoma (as letras com Ã no meio querem dizer uma coisa; o losango com interrogação, outra), a saber se o arquivo está estragado ou só foi lido do jeito errado, e a fazer o pedido certo ao Claude para cada destino: Excel, PowerShell ou {{site}}."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa mensagem cifrada. Quem escreve troca cada letra por um número usando uma tabela; quem lê usa a tabela para voltar dos números às letras. Se os dois usam a mesma tabela, a mensagem chega perfeita. Se o leitor usa outra, os números são os mesmos, mas as letras saem trocadas. A codificação é essa tabela, e o BOM é um bilhete no começo da carta dizendo qual tabela foi usada."
      ],
      [
        "quebra",
        "Numa cifra de verdade, quem não tem a tabela não entende nada. Aqui, as letras sem acento têm o mesmo número em quase todas as tabelas, então o texto sai quase certo e só os acentos estragam, o que engana: parece defeito do arquivo, e não é. E o bilhete às vezes atrapalha: alguns programas não o reconhecem e mostram três símbolos estranhos no começo, ou tratam o bilhete como parte do primeiro valor."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "No disco, texto é número"
      ],
      [
        "p",
        "Um arquivo de texto é uma sequência de {{byte|bytes}}, números de 0 a 255. Para as letras sem acento, quase todas as tabelas concordam: \"A\" é 41, \"C\" é 43, \"o\" é 6F (os números aparecem em hexadecimal, o jeito compacto que o Windows usa para mostrar bytes). O {{comando}} `Format-Hex` do PowerShell mostra os bytes de um arquivo e, na coluna da direita, tenta ler cada byte como uma letra. Esta é a saída real das duas primeiras linhas de um CSV gravado em UTF-8 sem BOM:"
      ],
      [
        "saida",
        "00000000   43 6C 69 65 6E 74 65 3B 43 69 64 61 64 65 3B 41  Cliente;Cidade;A\n00000010   C3 A7 C3 A3 6F 3B 56 61 6C 6F 72 0D 0A 4A 6F C3  Ã§Ã£o;Valor..JoÃ"
      ],
      [
        "p",
        "Olhe a segunda linha. \"Ação\" no arquivo são os bytes `41 C3 A7 C3 A3 6F`: o A ocupa um byte, o ç ocupa dois (`C3 A7`), o ã ocupa dois (`C3 A3`) e o o ocupa um. E a coluna da direita, que lê um byte por letra, já mostra o defeito que você conhece: `AÃ§Ã£o`. O arquivo está certo; quem leu um byte por vez é que errou."
      ],
      [
        "h3",
        "UTF-8, a tabela de hoje, e ANSI, a tabela antiga do Windows"
      ],
      [
        "p",
        "O UTF-8 é a codificação que o mundo usa hoje: a web, o {{vs-code|VS Code}} e o PowerShell 7 gravam em UTF-8. O {{python|Python}} 3.12, a versão deste curso, ainda não: no Windows, se o programa não disser `encoding='utf-8'`, ele grava e lê com a tabela antiga do Windows, vista logo abaixo. Letras sem acento ocupam um byte; letras acentuadas do português, dois; outros alfabetos, de dois a três (o grego e o árabe, dois; o chinês e o japonês, três); e os emojis, quatro. É por isso que ele cabe qualquer idioma num arquivo só."
      ],
      [
        "p",
        "A outra é a {{ansi|ANSI}}, o nome que o Windows dá à tabela antiga do sistema, no Brasil e nos Estados Unidos a Windows-1252: um byte por letra, com os acentos do português no fim da tabela. Nela, ç é `E7` e ã é `E3`. Saída real de um arquivo gravado em ANSI com a palavra Ação:"
      ],
      [
        "saida",
        "00000000   41 E7 E3 6F 0D 0A                                Ação.."
      ],
      [
        "p",
        "Quatro bytes para quatro letras (e dois para a quebra de linha). Programas antigos e o Windows PowerShell 5.1, o PowerShell que já vem com o Windows (no Windows 11, é o que o Terminal abre, numa janela de fundo preto, se ninguém mudou a configuração), usam essa tabela sempre que não têm outra pista."
      ],
      [
        "h3",
        "Por que Ação vira AÃ§Ã£o, e o losango"
      ],
      [
        "p",
        "Agora as peças se encaixam. Um arquivo gravado em UTF-8 e lido como ANSI troca cada letra acentuada por duas: o primeiro byte, `C3`, vira Ã; o segundo vira outra letra (`A7` é §, `A3` é £, `BA` é º). Então \"São\" vira \"SÃ£o\", \"Araújo\" vira \"AraÃºjo\" e \"Ação\" vira \"AÃ§Ã£o\". Regra prática: **Ã seguido de um símbolo quer dizer UTF-8 lido como ANSI.**"
      ],
      [
        "p",
        "O caminho contrário dá outro sintoma. Um arquivo gravado em ANSI e lido como UTF-8 tem bytes, como `E7` e `E3`, que não formam nada válido em UTF-8, e o programa põe no lugar o caractere de substituição, o losango com interrogação. Saída real, lendo o arquivo ANSI acima como UTF-8:"
      ],
      [
        "saida",
        "A��o"
      ],
      [
        "p",
        "Regra prática: **losango com interrogação quer dizer ANSI lido como UTF-8.** Nos dois casos, o arquivo está inteiro; a leitura é que usou a tabela errada."
      ],
      [
        "h3",
        "O BOM: o bilhete no começo do arquivo"
      ],
      [
        "p",
        "O BOM são três bytes, `EF BB BF`, gravados antes do texto para avisar \"este arquivo está em UTF-8\". Programas que entendem não mostram nada; quem lê como ANSI mostra `ï»¿`. Saída real do começo de um CSV com BOM:"
      ],
      [
        "saida",
        "00000000   EF BB BF 43 6C 69 65 6E 74 65 3B 43 69 64 61 64  ï»¿Cliente;Cidad"
      ],
      [
        "p",
        "Quem precisa do bilhete, no Windows: o Excel, ao abrir um CSV com dois cliques, e o PowerShell 5.1, ao ler um arquivo sem que você diga a codificação. Quem não gosta dele: programas e {{servidor|servidores}} do mundo Linux, e alguns programas que tratam os três bytes como parte do nome da primeira coluna. A própria Microsoft recomenda UTF-8 sem BOM para compatibilidade em geral, e com BOM nos {{script|scripts}} com acento que o Windows PowerShell vai {{rodar}}. A regra que resolve quase tudo: **com BOM para o Excel e para o PowerShell 5.1; sem BOM para site, {{codigo|código}} e {{git|Git}}.**"
      ],
      [
        "h3",
        "Onde isso aparece no seu PC, e o conserto de cada um"
      ],
      [
        "p",
        "**No PowerShell 5.1.** O comando `Get-Content` (e os apelidos dele, `cat` e `type`) lê como ANSI quando o arquivo não tem BOM. Para saber qual PowerShell você usa, o comando `$PSVersionTable.PSVersion` mostra o número; esta é a saída real, e 5.1 é o Windows PowerShell:"
      ],
      [
        "saida",
        "Major  Minor  Build  Revision\n-----  -----  -----  --------\n5      1      26100  9711"
      ],
      [
        "p",
        "O conserto é dizer a codificação: `Get-Content .\\clientes.csv -Encoding UTF8`. No teste, o mesmo arquivo que saiu com \"AÃ§Ã£o\" saiu certo assim. O PowerShell 7, que não vem instalado no Windows, já lê UTF-8 sem precisar dessa opção."
      ],
      [
        "p",
        "**No Excel.** Dois cliques num CSV em UTF-8 sem BOM, no teste, produziram células como \"JoÃ£o AraÃºjo\", \"SÃ£o Paulo\" e \"InÃªs ConceiÃ§Ã£o\". O mesmo conteúdo com BOM abriu certo. Há dois consertos: pedir o arquivo com BOM, ou abrir pelo Excel com a guia Dados e a opção de obter dados de Texto/CSV, que mostra como os dados vão ficar e deixa escolher a origem do arquivo, como UTF-8, antes de carregar."
      ],
      [
        "p",
        "**No Bloco de Notas.** O Bloco de Notas do Windows 11 reconhece UTF-8 mesmo sem BOM. No teste, o arquivo sem BOM apareceu com os acentos certos, e a barra de baixo, no canto direito, disse UTF-8; o arquivo com BOM disse UTF-8 with BOM. Isso faz dele o seu detector: se o Bloco de Notas mostra certo, o arquivo está bom, e o problema é de quem leu. E o Salvar como dele tem uma caixa de codificação, onde dá para escolher UTF-8 com BOM e regravar."
      ],
      [
        "h3",
        "O pedido certo ao Claude"
      ],
      [
        "p",
        "Com o diagnóstico feito, o pedido sai em uma frase. Para um arquivo que vai para o Excel: \"grave clientes.csv em UTF-8 com BOM, porque vou abrir no Excel\". Para ler um arquivo no PowerShell 5.1: \"use Get-Content com -Encoding UTF8\". Para um arquivo que veio de um sistema antigo e aparece com losangos: \"este arquivo parece estar em Windows-1252; converta para UTF-8\". Para páginas, código e arquivos que vão para o Git: \"UTF-8 sem BOM\". Se você usa o mesmo destino toda semana, vale pôr a regra no {{claude-md|CLAUDE.md}} do projeto, para não repetir."
      ],
      [
        "p",
        "Quando não pedir BOM: para arquivos que vão para um site ou para um servidor Linux. Nesses casos, o bilhete pode virar lixo no começo do primeiro valor. No Python, diga sempre a codificação ao abrir: `encoding='utf-8'` para arquivo sem BOM, ou `encoding='utf-8-sig'`, que lê os dois e descarta a marca. E nunca \"conserte\" os acentos trocando à mão `Ã§` por `ç`: se você salvar a versão quebrada, o erro deixa de ser de leitura e passa a estar gravado no arquivo."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Perdi meus dados?** Não, enquanto você não salvar por cima a versão quebrada. Feche sem salvar e abra do jeito certo.",
          "**Por que o Windows não usa UTF-8 em tudo?** Por compatibilidade com programas antigos. O PowerShell 7, os programas novos e a web já usam UTF-8 por padrão.",
          "**Preciso instalar algo?** Não. O conserto está no pedido ao Claude ou numa opção do programa.",
          "**A extensão muda a codificação?** Não. Renomear .csv para .txt não muda nenhum byte, como a aula 0.2 mostrou.",
          "**E no celular ou no Mac?** Quase tudo já é UTF-8. O problema é típico do Windows com o Excel e o PowerShell 5.1."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: outros sintomas e o redirecionamento do PowerShell",
          "blocos": [
            [
              "p",
              "O mesmo defeito aparece com outros sinais. O apóstrofo curvo (’), comum em textos copiados da {{internet}}, ocupa três bytes em UTF-8; lido como ANSI, vira `â€™`. Num teste, a palavra inglesa it’s virou `itâ€™s`. Esse defeito tem até nome, mojibake, uma palavra japonesa para \"caracteres transformados\"."
            ],
            [
              "p",
              "No PowerShell 5.1, o sinal `>`, que manda a saída de um comando para um arquivo, grava em UTF-16, outra codificação, com dois bytes por letra. Um arquivo feito assim abre certo no Bloco de Notas, mas pode confundir outros programas. A documentação da Microsoft lista o comportamento de cada comando; ele não é o mesmo em todos (o `Import-Csv`, por exemplo, supõe UTF-8 quando não há BOM, ao contrário do `Get-Content`)."
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
          "pergunta": "Um sistema antigo exportou antigo.txt em ANSI (Windows-1252), com a palavra Ação. Você leu o arquivo no PowerShell 5.1 com o comando abaixo, que manda ler como UTF-8. O que você acha que aparece?",
          "codigo": "Get-Content .\\antigo.txt -Encoding UTF8",
          "linguagem": "powershell",
          "resposta": "Aparece `A��o`, saída real do teste. Os bytes `E7` e `E3` não formam nada válido em UTF-8, e o PowerShell põe o losango com interrogação no lugar. Aqui o conserto é o contrário do de costume: ler sem `-Encoding UTF8`, porque o padrão do 5.1 já é ANSI, ou pedir ao Claude para converter o arquivo para UTF-8. Toque nos botões para ver as duas leituras do mesmo arquivo.",
          "vivo": [
            [
              "Ler sem -Encoding",
              "Get-Content .\\antigo.txt",
              "Ação"
            ],
            [
              "Voltar ao original",
              "Get-Content .\\antigo.txt -Encoding UTF8",
              "A��o"
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
          "p": "Você abriu um relatório e leu \"SÃ£o Paulo\" no lugar de \"São Paulo\". O que aconteceu?",
          "o": [
            [
              "O texto foi gravado em UTF-8 e lido como ANSI",
              "Isso. O ã ocupa dois bytes em UTF-8, e quem leu um byte por letra mostrou Ã e £."
            ],
            [
              "O texto foi gravado em ANSI e depois lido como UTF-8",
              "Esse caminho dá o losango com interrogação, não as letras com Ã."
            ],
            [
              "O arquivo foi danificado e perdeu os acentos de vez",
              "Nada se perdeu: os bytes estão lá. Lido com a codificação certa, o texto volta ao normal."
            ]
          ],
          "c": 0
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "O Claude respondeu: \"O arquivo está certo: gravei em UTF-8. O que quebrou foi a leitura: o Get-Content do PowerShell 5.1 lê como ANSI quando não há BOM. Use -Encoding UTF8; ou, se for abrir no Excel, eu regravo com BOM.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está errada: se aparece AÃ§Ã£o, o arquivo foi gravado errado",
              "O sintoma vem da leitura. O mesmo arquivo aparece certo no Bloco de Notas e com -Encoding UTF8."
            ],
            [
              "Está errada: o BOM serve para o PowerShell 7, não para o Excel",
              "É o contrário: o Excel e o PowerShell 5.1 precisam do BOM; o PowerShell 7 já lê UTF-8 sem ele."
            ],
            [
              "Está correta: o arquivo está bom, e a leitura é que usou ANSI",
              "Isso. O diagnóstico e os dois consertos estão certos. Conferir também é reconhecer quando a resposta está certa."
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
            "\"O Claude estragou os acentos do arquivo.\"",
            "Quase sempre o arquivo está certo e a leitura é que está errada. Abra no Bloco de Notas: se lá aparece certo, o problema é de quem leu."
          ],
          [
            "\"Vou corrigir à mão, trocando Ã§ por ç, e salvar.\"",
            "Salvar a versão quebrada grava o erro no arquivo. Corrija a leitura ou peça a codificação certa."
          ],
          [
            "\"UTF-8 com BOM é sempre melhor.\"",
            "Para o Excel e o PowerShell 5.1, sim. Para site, código, Git e Linux, o BOM pode virar lixo no começo do arquivo."
          ],
          [
            "\"No Bloco de Notas está certo, então no Excel também vai estar.\"",
            "O Bloco de Notas reconhece UTF-8 sem BOM; o Excel, ao abrir com dois cliques, não. Para o Excel, peça o BOM."
          ],
          [
            "\"Renomear o CSV para .txt resolve o acento.\"",
            "A extensão não muda os bytes. O que muda o resultado é a codificação usada para gravar ou para ler."
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
          "p": "Por que Ação vira AÃ§Ã£o?",
          "r": [
            "Em UTF-8, ç e ã ocupam dois bytes cada.",
            "Quem lê como ANSI transforma cada byte numa letra, e o primeiro vira Ã.",
            "Sem BOM, o PowerShell 5.1 e o Excel leem como ANSI."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Qual pedido fazer ao Claude em cada caso?",
          "r": [
            "Arquivo para o Excel: UTF-8 com BOM.",
            "Leitura no PowerShell 5.1: Get-Content com -Encoding UTF8.",
            "Site, código e Git: UTF-8 sem BOM.",
            "Arquivo antigo com losangos: converter de Windows-1252 para UTF-8."
          ]
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "p",
        "Este laboratório pode ser só lido. Se quiser reproduzir o caso no seu PC, use uma {{pasta}} só para ele, como `C:\\Projetos\\quebrado-csv`, e não a `C:\\Projetos\\estudo`: lá, o pedido trocaria sem aviso o `clientes.csv` da aula 0.4. Crie a pasta com `New-Item -ItemType Directory -Force C:\\Projetos\\quebrado-csv`, entre nela com `cd C:\\Projetos\\quebrado-csv`, abra o Claude Code com `claude`, como no laboratório da aula 0.0, e cole este pedido. Depois, feche o Claude Code com `/exit`: o {{terminal}} volta ao PowerShell, na mesma pasta, e aí você cola o comando do quadro abaixo."
      ],
      [
        "codigo",
        {
          "texto": "Crie clientes.csv com estas três linhas, usando a sua ferramenta de criar arquivos, sem rodar comando:\nCliente;Cidade;Ação;Valor\nJoão Araújo;São Paulo;Compra;1500\nInês Conceição;Maceió;Venda;980",
          "linguagem": "texto",
          "rotulo": "pedido ao Claude Code",
          "cola": true
        }
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado: o CSV que só quebra no PowerShell",
          "texto": "Alguém pediu ao Claude Code uma lista de clientes em CSV. Ele criou o arquivo com a própria ferramenta de criar arquivos e disse \"pronto\". Para conferir, a pessoa abriu o terminal do Windows PowerShell 5.1 na mesma pasta e rodou o comando abaixo. Os acentos saíram como na saída. No Bloco de Notas, o mesmo arquivo aparece certo. Descubra o motivo antes de ver a causa.",
          "cola": "Get-Content .\\clientes.csv",
          "saida": "Cliente;Cidade;AÃ§Ã£o;Valor\nJoÃ£o AraÃºjo;SÃ£o Paulo;Compra;1500\nInÃªs ConceiÃ§Ã£o;MaceiÃ³;Venda;980",
          "dica": "O arquivo é o mesmo nos dois programas. Olhe o canto de baixo, à direita, do Bloco de Notas: ele diz com que codificação leu. Depois pense no que o Get-Content do PowerShell 5.1 usa quando o arquivo não tem BOM, e repare que cada letra acentuada virou duas, começando por Ã.",
          "resposta": "O arquivo está certo: está em UTF-8 sem BOM, que é o que a ferramenta de criar arquivos do Claude Code gravou no teste, e o Bloco de Notas mostra \"UTF-8\" na barra de baixo. O erro está na leitura: sem BOM, o `Get-Content` do PowerShell 5.1 lê o arquivo como ANSI, um byte por letra, e cada letra acentuada vira duas (Ã e mais um símbolo). Há dois consertos, conforme o destino. Para ler no PowerShell, diga a codificação: `Get-Content .\\clientes.csv -Encoding UTF8`, que no teste mostrou \"Ação\", \"João Araújo\" e \"São Paulo\" certos. Para abrir no Excel, que tem o mesmo problema com dois cliques, peça ao Claude: \"regrave clientes.csv em UTF-8 com BOM\". Não corrija à mão: o arquivo não está estragado."
        }
      ],
      [
        "fontes",
        [
          [
            "Funções embutidas: open() (a codificação padrão depende da plataforma), documentação do Python 3.12",
            "https://docs.python.org/3.12/library/functions.html#open",
            "oficial",
            "08/11/2026"
          ],
          [
            "about_Character_Encoding, PowerShell 5.1 (Get-Content lê ANSI sem BOM; UTF8 grava com BOM), Microsoft Learn",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.core/about/about_character_encoding?view=powershell-5.1",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Get-Content, PowerShell 5.1 (o parâmetro -Encoding), Microsoft Learn",
            "https://learn.microsoft.com/pt-br/powershell/module/microsoft.powershell.management/get-content?view=powershell-5.1",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Abrir arquivos CSV UTF-8 corretamente no Excel, Microsoft",
            "https://support.microsoft.com/pt-br/excel/opening-csv-utf-8-files-correctly-in-excel",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Padrão Unicode e marca de ordem de byte (BOM), Microsoft Learn",
            "https://learn.microsoft.com/pt-br/globalization/encoding/unicode-standard",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "UTF-8, glossário da MDN",
            "https://developer.mozilla.org/pt-BR/docs/Glossary/UTF-8",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "CS50x 2026, semana 0 (como o computador representa texto), Harvard",
            "https://cs50.harvard.edu/x/weeks/0/",
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
          "Acento quebrado é arquivo estragado: peça ao Claude para refazer o texto",
          "Quase sempre o arquivo está inteiro. Lido com a codificação certa, ele volta ao normal."
        ],
        [
          "Gravar numa tabela e ler com outra troca os acentos; o BOM e o -Encoding resolvem",
          "Isso. UTF-8 lido como ANSI dá AÃ§Ã£o; o BOM avisa o Excel, e o -Encoding UTF8 avisa o PowerShell 5.1."
        ],
        [
          "Os acentos quebram porque o Windows não aceita acento dentro de um CSV",
          "O Windows aceita acentos em qualquer arquivo de texto. O problema é a tabela usada para ler."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Um CSV vai ser aberto no Excel com dois cliques. Como pedir ao Claude para gravá-lo?",
        "o": [
          [
            "Em UTF-8 sem BOM, o padrão da web hoje",
            "Sem BOM, o Excel lê como ANSI e mostra AÃ§Ã£o."
          ],
          [
            "Em UTF-8 com BOM, a marca no começo dele",
            "Isso. A marca avisa o Excel de que o texto está em UTF-8."
          ],
          [
            "Com a extensão .txt no lugar da .csv",
            "A extensão não muda a codificação, e o Excel deixa de abrir com dois cliques."
          ]
        ],
        "c": 1
      },
      {
        "p": "Você leu \"Informa��es\" num arquivo antigo. O que isso indica?",
        "o": [
          [
            "Um arquivo gravado em ANSI e lido como UTF-8",
            "Isso. Os bytes de ç e õ em ANSI não valem em UTF-8, e viram o losango com interrogação."
          ],
          [
            "Um arquivo gravado em UTF-8 e lido como ANSI",
            "Esse caminho mostra Ã seguido de um símbolo, não o losango."
          ],
          [
            "Um arquivo com BOM aberto num programa antigo",
            "O BOM mal lido aparece como ï»¿ no começo, não no meio das palavras."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Como sei se o arquivo está estragado?",
        "Abra no Bloco de Notas. Se lá os acentos aparecem certos, o arquivo está bom e o problema é de quem leu. A barra de baixo, à direita, diz a codificação: UTF-8, UTF-8 with BOM ou ANSI."
      ],
      [
        "O que é BOM?",
        "São três bytes no começo do arquivo, EF BB BF, que avisam que o texto está em UTF-8. O Excel e o PowerShell 5.1 precisam deles; sites e programas do Linux preferem sem."
      ],
      [
        "Que frase uso com o Claude?",
        "Para o Excel: grave em UTF-8 com BOM. Para ler no PowerShell 5.1: use Get-Content com -Encoding UTF8. Para site e código: UTF-8 sem BOM."
      ]
    ]
  },
  "0-5": {
    "tempo": 25,
    "video": "a0-5",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já tocou num link no Instagram e a página abriu dentro do próprio Instagram, ou instalou um {{aplicativo|app}} e percebeu que era o mesmo {{site}} com outro ícone. Esta aula separa três coisas que vivem misturadas: o {{navegador}}, que é o {{programa}} que abre; o site, que é a página aberta; e o aplicativo, que fica instalado no aparelho.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Daqui a alguns módulos você vai pedir ao Claude coisas como \"faça uma página para os meus clientes\" ou \"transforme este guia num app\". Cada uma dessas palavras leva a um caminho diferente, com custo e tempo diferentes. Um site pode ficar pronto numa tarde, e qualquer pessoa abre por um link. Um app de loja exige conta de desenvolvedor paga, revisão da loja e uma atualização a cada mudança. E existe um meio-termo, o {{pwa|PWA}}, que é um site que se instala como app. Se você não disser qual dos três quer, o Claude escolhe por você, e às vezes escolhe o caminho mais longo."
      ],
      [
        "p",
        "Separar as três coisas também ajuda quando algo não abre. \"Não funciona\" pode ser problema do navegador (uma extensão, uma versão velha, um dado guardado errado), do site (o computador onde ele mora saiu do ar) ou do app (versão antiga no celular). Cada caso tem um conserto diferente, e saber onde olhar economiza meia hora de tentativa e erro."
      ],
      [
        "p",
        "E tem um motivo bem perto de você: este curso é um PWA. Quando ele oferecer \"Instalar\", você vai saber o que está aceitando, o que muda e o que continua exatamente igual."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense numa televisão. O navegador é o **aparelho de TV**: sozinho, ele não tem conteúdo nenhum; serve para mostrar o que você sintonizar. O site é o **canal**: a programação vem de fora, da emissora, muda sem você fazer nada, e qualquer TV pega o mesmo canal pelo mesmo número, que aqui é o endereço. O app instalado é um **videogame com o jogo dentro**: um aparelho feito para uma coisa só, com as peças guardadas nele, que precisa ser instalado e atualizado. E o PWA é o **canal com botão próprio no controle remoto**: continua sendo o mesmo canal, mas abre direto, em tela cheia, e guarda alguns episódios gravados para ver sem sinal."
      ],
      [
        "quebra",
        "Um canal de TV transmite a mesma coisa para todo mundo ao mesmo tempo, e você só assiste. Um site é diferente nas duas pontas: ele só manda a página para quem pede, na hora em que pede (a próxima aula mostra esse pedido), e você conversa com ele: preenche, compra, envia. E o videogame da analogia joga sozinho, enquanto quase todo app de verdade busca dados num {{servidor}}: o app do Instagram tem o programa no celular, mas as fotos vêm da {{internet}}."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "O navegador: o programa que abre páginas"
      ],
      [
        "p",
        "O navegador é um programa como outro qualquer, instalado no PC ou no celular. Os mais comuns são o Chrome, o Edge (que já vem no Windows), o Safari (que já vem no iPhone) e o Firefox. O trabalho dele é sempre o mesmo: receber um endereço, buscar a página correspondente, ler o {{html|HTML}} que chegou e desenhar a tela. Na aula 0.3 você viu que quem desenha o HTML é o navegador; aqui você vê de onde vem o que ele desenha."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: você abre o Chrome, digita `wikipedia.org` na barra de cima e aperta Enter. O Chrome busca a página nos computadores da Wikipédia, recebe o texto com as marcações, monta o layout e mostra. Se você abrir o Edge e digitar o mesmo endereço, chega a mesma página, porque o conteúdo não mora no navegador: mora no site. O que muda de um navegador para o outro é o que fica guardado em cada um: histórico, favoritos, senhas salvas e as contas em que você está logado. Por isso você pode aparecer deslogado no Edge num site em que está logado no Chrome."
      ],
      [
        "p",
        "Por baixo, o navegador também guarda cópias de partes das páginas que você já abriu, o {{cache}}, para abrir mais rápido na próxima vez. É por isso que, às vezes, uma página mudou e você continua vendo a versão velha: recarregar (F5 no PC, ou puxar a tela para baixo no celular) costuma resolver."
      ],
      [
        "p",
        "Uma confusão comum: o navegador não é a internet. O ícone do Chrome não é \"a internet\"; é um programa que usa a internet. Se o Chrome der problema, os sites continuam lá, e outro navegador abre todos eles. Esse é o primeiro teste quando uma página não funciona: abrir no outro navegador. Se lá funcionar, o problema está no primeiro (uma extensão, o cache, uma configuração); se não funcionar em nenhum, o problema está no site ou na sua conexão."
      ],
      [
        "p",
        "Ainda tem um caso que engana: quando você toca num link dentro de outro app, como Instagram ou WhatsApp, muitas vezes a página abre num {{navegador-embutido}}, uma janela de navegador dentro do próprio app. É o mesmo site, mas essa janela nem sempre tem os seus logins nem o seu histórico. Se a página pedir login de novo ou travar ali, procure no menu a opção de abrir no navegador (o nome exato varia de app para app)."
      ],
      [
        "h3",
        "O site: páginas que moram num servidor"
      ],
      [
        "p",
        "Um site é um conjunto de páginas sob o mesmo endereço. Cada página é um {{arquivo}} HTML, ou é montada na hora a partir de um, acompanhada de imagens, estilo e, às vezes, {{javascript|JavaScript}}. Esses arquivos ficam num servidor: um computador de outra pessoa ou empresa, ligado o tempo todo, que entrega as páginas para quem pede. O endereço completo de uma página é a {{url|URL}}, como `https://pt.wikipedia.org/wiki/Economia`."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, do lado de quem faz: a dona de uma confeitaria tem um site com o cardápio. Ela muda o preço do bolo de cenoura e publica. Na mesma hora, todo mundo que abre o site vê o preço novo, no PC, no Android e no iPhone, sem instalar nem atualizar nada. Ninguém precisa baixar \"a versão nova do cardápio\". Essa é a maior vantagem do site: um endereço só, em qualquer aparelho com navegador, sempre na última versão."
      ],
      [
        "p",
        "O que acontece por baixo: o site não \"está\" no seu celular. A cada visita, o navegador pede as páginas ao servidor e recebe uma cópia, que pode ficar no cache por um tempo. Se o servidor sair do ar, o site sai do ar para todo mundo ao mesmo tempo. A aula 0.6 conta esse caminho passo a passo, do endereço digitado até a tela."
      ],
      [
        "p",
        "Por que importa para você: publicar um site é colocar esses arquivos num servidor com endereço, e mandar o link resolve a distribuição. Quando o Claude disser que fez \"uma página\", pergunte onde ela está: se está só no seu PC, ainda não é um site que os outros abrem, e a aula 0.8 é inteira sobre isso. Quando um site só não basta: quando você precisa de algo que o navegador não deixa uma página fazer, como ficar trabalhando o tempo todo em segundo plano ou usar partes do aparelho que ficam fechadas para páginas."
      ],
      [
        "h3",
        "O app instalado: um programa guardado no aparelho"
      ],
      [
        "p",
        "Um app é um programa que você baixa e instala. No celular, ele vem de uma loja: a Play Store no Android, a App Store no iPhone. No PC, vem da Microsoft Store ou de um instalador. Depois de instalado, o programa mora no aparelho, e não no servidor: abrir o app não baixa o programa de novo."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: o YouTube. Você pode abrir `youtube.com` no navegador ou tocar no ícone do app. Os vídeos são os mesmos, porque os dois buscam nos mesmos servidores do YouTube. O que muda é o programa que mostra: no navegador, é a página do site; no app, é um programa feito só para isso, que já está no celular, guarda a sua conta e manda notificações. Quando o YouTube muda o app, você recebe uma atualização pela loja; quando muda o site, você vê a mudança na próxima vez que abrir, sem fazer nada."
      ],
      [
        "p",
        "Por baixo, o app instalado tem mais acesso ao aparelho do que uma página: tarefas em segundo plano, acesso mais amplo a arquivos e ao aparelho (notificação e câmera também existem no navegador e no PWA, com permissão), sempre dentro das permissões que você der. Em troca, ele passa pela loja. Para publicar, a Apple cobra US$ 99 por ano no programa de desenvolvedor, e o Google cobra uma taxa única de US$ 25 para abrir a conta no Play Console (valores das páginas oficiais, conferidos em 02/11/2026). E cada atualização passa por uma revisão da loja antes de chegar às pessoas."
      ],
      [
        "p",
        "Por que importa para você: \"faça um app para os meus clientes\", no sentido de loja, é um projeto longo, com conta paga, revisão e, em geral, duas versões, uma para Android e outra para iPhone. Quando não usar: quando um link resolve. Para mostrar um cardápio, um simulador ou um guia, o site chega a todo mundo no mesmo dia, sem loja."
      ],
      [
        "h3",
        "PWA: o site que se instala"
      ],
      [
        "p",
        "O PWA (sigla em inglês para \"aplicativo web progressivo\") é um site com dois acréscimos. O primeiro é um arquivo chamado manifesto, que diz ao navegador o nome do app, o ícone e como abrir. O segundo, quase sempre, é um {{service-worker}}, um pequeno programa que o site deixa no navegador para guardar cópias das páginas. Com isso, o navegador oferece \"Instalar\", o site ganha um ícone na tela inicial, abre numa janela própria, sem a barra de endereço, e consegue mostrar parte do conteúdo sem internet."
      ],
      [
        "p",
        "Este curso é um PWA, e dá para ver as duas peças. O manifesto dele tem a linha `\"display\": \"standalone\"`, que significa \"abrir sozinho, sem as barras do navegador\". E o service worker segue a regra \"rede primeiro, cache como reserva\": com internet, você recebe sempre a versão mais nova; sem internet, as aulas que você já abriu continuam abrindo, a partir da cópia guardada. Os vídeos ficam fora dessa cópia, porque são grandes demais."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: no Android, você abre o curso no Chrome, toca no menu de três pontos, depois em \"Instalar e criar atalho\" e em \"Instalar\". Aparece um ícone na tela inicial. Tocando nele, o curso abre em tela cheia, como um app. No iPhone, o caminho é pelo Safari, no botão Compartilhar, com a opção de adicionar à Tela de Início. No PC, o Chrome mostra a opção de instalar no menu, e alguns sites mostram um ícone de instalar na própria barra de endereço. Por baixo, nada foi baixado de loja nenhuma: é o mesmo endereço, com o mesmo conteúdo, num atalho mais confortável."
      ],
      [
        "p",
        "Duas coisas que pouca gente sabe. Primeira: o seu progresso no curso fica guardado no navegador do aparelho, ligado ao endereço do site; se você apagar os dados de navegação desse site, o progresso guardado ali vai junto. Segunda: no iPhone, o Safari apaga o que um site guardou depois de 7 dias de uso do Safari sem você visitar aquele site; o app adicionado à Tela de Início não faz parte do Safari e tem a própria contagem de dias. Por isso, para estudar no iPhone, vale abrir sempre pelo ícone instalado."
      ],
      [
        "p",
        "Por que importa para você: quando quiser um guia de estudos que abra no celular sem internet, o nome do que você quer é PWA (a aula 15.10, opcional, mostra como pedir). Quando não usar: quando você precisa estar na loja, para ser achado lá, ou quando precisa de recursos do aparelho que só um app instalado alcança."
      ],
      [
        "tabela",
        {
          "colunas": [
            "O quê",
            "Onde mora",
            "Como chega até você",
            "Como atualiza"
          ],
          "linhas": [
            [
              "Navegador",
              "No seu aparelho",
              "Já vem instalado, ou você instala",
              "Sozinho ou pela loja"
            ],
            [
              "Site",
              "Num servidor",
              "Por um endereço, no navegador",
              "O dono muda e todos veem na hora"
            ],
            [
              "App instalado",
              "No seu aparelho",
              "Pela loja, depois da revisão",
              "Atualização pela loja"
            ],
            [
              "PWA",
              "Num servidor, com cópia no aparelho",
              "Pelo endereço, e depois pelo ícone",
              "Como um site, sem loja"
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
          "**Preciso instalar alguma coisa?** Não. Você já tem um navegador no PC e no celular. Instalar o curso como PWA é opcional: ele funciona igual no navegador.",
          "**Custa?** Navegar e instalar um PWA não custam nada. Publicar app em loja custa: US$ 99 por ano na Apple e US$ 25 uma vez no Google, fora o trabalho de manter as duas versões.",
          "**Qual navegador é melhor?** Para este curso, qualquer navegador atualizado serve. O que importa é saber que o problema pode estar no navegador, e testar no outro.",
          "**Se eu desinstalar o curso instalado, perco o progresso?** O ícone some, mas o site continua no mesmo endereço, e o progresso fica nos dados do navegador. Alguns navegadores perguntam, na hora de desinstalar, se você quer apagar também os dados do site: se marcar, o progresso guardado vai junto.",
          "**O app do Instagram é um site?** Não: é um programa instalado. Mas ele busca fotos e mensagens nos servidores do Instagram, como um site faria. Quase todo app de hoje é um programa no aparelho conversando com um servidor."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: o motor por baixo dos navegadores",
          "blocos": [
            [
              "p",
              "Cada navegador tem um motor que transforma HTML em tela. O Chrome e o Edge usam o mesmo motor, chamado Blink, e por isso uma página costuma ficar igual nos dois. O Safari usa o WebKit, e o Firefox, o Gecko. Quando um site fica certo no Chrome e torto no Safari, quase sempre é diferença de motor."
            ],
            [
              "p",
              "Muitos programas são, por dentro, um site embrulhado: uma janela de navegador sem barras, que carrega as próprias páginas. O {{vs-code|VS Code}}, que aparece no módulo 3, é feito assim. Por fora, você não percebe; por isso a linha entre site e app é mais fina do que parece."
            ],
            [
              "p",
              "O service worker só funciona em sites com {{https}}, ou no endereço local do seu próprio PC, que a aula 0.8 explica. E ele não guarda o seu progresso: guarda cópias das páginas. O progresso fica em outro canto do navegador."
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
          "pergunta": "Este é um pedaço do manifesto de um PWA. Você abre o endereço desse site no Chrome do celular e, depois, toca no ícone que ele criou ao ser instalado. O que você acha que muda entre os dois jeitos de abrir?",
          "codigo": "{\n  \"name\": \"Do zero ao agente\",\n  \"start_url\": \"./\",\n  \"display\": \"standalone\",\n  \"icons\": [{ \"src\": \"img/icone-192.png\", \"sizes\": \"192x192\" }]\n}",
          "linguagem": "json",
          "resposta": "O conteúdo é o mesmo, porque o endereço e o servidor são os mesmos. Muda a moldura. Pelo Chrome, a página aparece numa aba, com a barra de endereço em cima. Pelo ícone, o `\"display\": \"standalone\"` manda abrir numa janela própria, sem barra de endereço, com o nome e o ícone definidos em `name` e `icons`; e o `start_url` diz qual página abre primeiro. No Android e no PC, os dois jeitos usam os mesmos dados do navegador, então o progresso aparece nos dois. No iPhone, o ícone não faz parte do Safari, e o que você fez no Safari pode não aparecer nele. Nada veio de loja: o app instalado é um atalho para o mesmo site."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você abriu um site no Chrome e ele está todo desconfigurado. Qual é o primeiro teste que separa um problema do navegador de um problema do site?",
          "o": [
            [
              "Desinstalar e instalar o Chrome de novo, para limpar tudo",
              "Às vezes resolve, mas demora e não separa as causas: se o site estiver com problema, nada muda."
            ],
            [
              "Abrir o mesmo endereço em outro navegador, como o Edge do Windows",
              "Isso. Se lá funciona, o problema está no primeiro navegador; se não funciona em nenhum, está no site ou na conexão."
            ],
            [
              "Instalar o app do site, que costuma funcionar melhor que ele",
              "Nem todo site tem app, e trocar de programa não diz onde estava o problema."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você pediu \"transforme meu guia de estudos num app para o celular\", e o Claude respondeu: \"Pronto, transformei o guia num PWA. Agora ele precisa ser publicado na Play Store e na App Store para você conseguir instalar no celular.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: um PWA não precisa de loja; instala pelo navegador",
              "Isso. O PWA é um site que o navegador instala a partir do endereço. Loja é o caminho do app instalado comum."
            ],
            [
              "Errado: um PWA só funciona no computador, e não no celular",
              "O PWA funciona no celular: no Android, pelo Chrome; no iPhone, pelo Safari, adicionando à Tela de Início."
            ],
            [
              "Está correta: todo app de celular precisa passar por loja",
              "O PWA é justamente o caminho sem loja: o navegador instala a partir do endereço do site."
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
            "\"O Chrome é a internet.\"",
            "O Chrome é um programa que usa a internet. Se ele der problema, os sites continuam lá e abrem em outro navegador."
          ],
          [
            "\"Fiz o site, então ele está no celular de todo mundo.\"",
            "O site mora num servidor, e cada pessoa recebe uma cópia quando abre o endereço. Se ele está só no seu PC, ninguém mais abre: a aula 0.8 explica."
          ],
          [
            "\"Instalei o curso, então ele não precisa mais de internet.\"",
            "Ele guarda cópias das aulas que você já abriu. Aula nova e vídeo continuam precisando de internet."
          ],
          [
            "\"Para ter app, preciso estar na Play Store.\"",
            "Para um app instalado comum, sim. Um PWA instala pelo navegador, sem loja nem taxa."
          ],
          [
            "\"O link abriu dentro do Instagram, então é o app do site.\"",
            "É um navegador embutido no Instagram mostrando o site. Se travar ou pedir login, use a opção de abrir no navegador."
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
          "p": "Qual é a diferença entre navegador, site e app instalado?",
          "r": [
            "O navegador é o programa que abre páginas.",
            "O site são as páginas, que moram num servidor e chegam por um endereço.",
            "O app instalado é um programa guardado no aparelho, em geral vindo de uma loja."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que um PWA tem a mais que um site comum?",
          "r": [
            "Um manifesto, que dá nome, ícone e janela própria quando instalado.",
            "Um service worker, que guarda cópias para abrir parte do conteúdo sem internet.",
            "Instalação pelo navegador, sem loja."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Progressive Web Apps, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Web/Progressive_web_apps",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Navegador (glossário), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Glossary/Browser",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Use apps da Web no Android, Ajuda do Google Chrome",
            "https://support.google.com/chrome/answer/9658361?hl=pt-BR&co=GENIE.Platform%3DAndroid",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Use apps da Web no computador, Ajuda do Google Chrome",
            "https://support.google.com/chrome/answer/9658361?hl=pt-BR",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Transforme um site em um app no Safari do iPhone, Apple",
            "https://support.apple.com/pt-br/guide/iphone/iphea86e5236/ios",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Inscrição nos programas (taxa anual de US$ 99), Apple Developer",
            "https://developer.apple.com/br/help/account/membership/program-enrollment/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Como começar a usar o Play Console (taxa única de US$ 25), Google",
            "https://support.google.com/googleplay/android-developer/answer/6112435?hl=pt-BR",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Full Third-Party Cookie Blocking and More (os 7 dias do Safari e a contagem própria do app da Tela de Início), WebKit",
            "https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/",
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
          "O navegador guarda os sites, e o app é o jeito de ver o site sem internet",
          "Quem guarda o site é o servidor; o navegador busca e desenha. E um app comum não é um site guardado."
        ],
        [
          "Site e app são a mesma coisa; o que muda é só o ícone na tela do celular",
          "O app comum é um programa instalado, que vem de loja; o site mora num servidor. Só o PWA é um site com ícone."
        ],
        [
          "O navegador abre o site; o app mora no aparelho; o PWA fica no meio",
          "Isso. O programa que abre, a página que chega por endereço, o programa instalado e o meio-termo."
        ]
      ],
      "c": 2
    },
    "prova": [
      {
        "p": "Onde moram as páginas de um site?",
        "o": [
          [
            "No navegador de cada pessoa que abre",
            "O navegador guarda só cópias temporárias; as páginas moram no servidor."
          ],
          [
            "Num servidor, ligado o tempo todo",
            "Isso. O navegador pede ao servidor e recebe uma cópia."
          ],
          [
            "Na loja de apps do celular de quem abre",
            "Loja é para app instalado. O site chega por endereço, sem loja."
          ]
        ],
        "c": 1
      },
      {
        "p": "O que um PWA tem que um app de loja não tem?",
        "o": [
          [
            "Acesso total ao aparelho, sem pedir permissão",
            "É o contrário: o app instalado costuma ter mais acesso que uma página."
          ],
          [
            "Revisão da loja antes de cada atualização",
            "Revisão é coisa de app de loja. O PWA atualiza como um site."
          ],
          [
            "Instalação pelo navegador, sem loja nem taxa",
            "Isso. Ele instala a partir do endereço do site."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre PWA e app?",
        "O app comum é um programa que vem de uma loja e mora no aparelho. O PWA é um site que o navegador instala: ganha ícone e janela própria, guarda cópias para abrir sem internet e atualiza como site, sem loja."
      ],
      [
        "Por que o link abriu dentro do Instagram?",
        "Muitos apps abrem links num navegador embutido, para você não sair do app. É o mesmo site, mas essa janela nem sempre tem os seus logins. Se algo não funcionar, use a opção de abrir no navegador."
      ],
      [
        "Preciso instalar o curso?",
        "Não. Ele funciona igual no navegador. Instalar só cria um ícone, abre em tela cheia e deixa as aulas já abertas disponíveis sem internet."
      ]
    ]
  },
  "0-6": {
    "tempo": 32,
    "video": "a0-6",
    "videoTipo": "conversa",
    "opcional": false,
    "abertura": "Você já digitou um endereço e, no lugar da página, viu \"Não é possível acessar esse site\", sem saber se o problema era seu, da {{internet}} ou do {{site}}. Esta aula conta o caminho do endereço até a página, com os nomes que vão aparecer quando você publicar um site ({{servidor}}, {{dominio|domínio}}, {{dns|DNS}}, {{hospedagem}} e {{https}}) e as pistas que cada falha deixa na tela.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Até aqui, abrir um site foi uma caixa-preta: entra um endereço, sai uma página. A partir do módulo 15 você vai publicar sites seus, e cada peça dessa caixa vira uma decisão: alugar um domínio, escolher onde hospedar, ligar um no outro, conferir o cadeado. Quem não conhece o caminho fica refém das telas de configuração, clicando no que parece certo e torcendo."
      ],
      [
        "p",
        "Saber o caminho também serve para diagnosticar. \"O site não abre\" tem pelo menos quatro causas bem diferentes: o endereço não acha o computador do site (problema de DNS), esse computador está fora do ar, a página não existe mais (o famoso erro 404) ou a sua própria internet caiu. Cada causa deixa uma pista diferente na tela, e esta aula mostra as pistas reais, do jeito que o Chrome mostra."
      ],
      [
        "p",
        "E serve para conversar com o Claude e com quem vende serviço. Quando alguém disser \"o domínio já está apontado, só falta propagar o DNS\", ou o Claude disser \"crie um registro na zona de DNS do seu domínio\", você vai saber de que peça ele está falando, mesmo que ainda não saiba configurar."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense em pedir comida por telefone. Você sabe o **nome** do restaurante (o domínio), mas o telefone só liga para **números** (o {{ip|endereço IP}}). Então você consulta uma **agenda**, que troca o nome pelo número: é o DNS. Você liga, e quem atende é a **cozinha**, aberta o tempo todo (o servidor). Você faz o **pedido** (\"um bolo de cenoura\"), a cozinha **entrega** o que você pediu, e você **monta o prato** na mesa: é o {{navegador}} desenhando a página. O **prédio** onde a cozinha funciona, alugado de alguém, é a hospedagem. E o https é a ligação numa **linha que ninguém escuta**, em que o restaurante mostra o **alvará** para provar que é ele mesmo."
      ],
      [
        "quebra",
        "Numa ligação, a comida vem inteira, de uma vez. Na internet, a página vem picada em dezenas de pedacinhos, por caminhos diferentes, e o navegador remonta tudo na ordem. A agenda também não é uma só: o DNS é uma corrente de agendas que se consultam e guardam as respostas por um tempo. E o \"alvará\" do https prova que você ligou para o número certo daquele nome, não que a comida é boa: site de golpe também tem cadeado."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "A internet: uma rede de redes"
      ],
      [
        "p",
        "A Internet é uma rede que liga outras redes. O Wi-Fi da sua casa é uma rede pequena; ela se liga à rede da sua operadora, que se liga às de outras operadoras, por cabos que atravessam cidades, países e até oceanos, no fundo do mar. Cada aparelho ligado recebe um endereço IP, um número que identifica para onde mandar as coisas, como `185.15.58.224`."
      ],
      [
        "p",
        "Tudo o que viaja pela internet vai picado em pedaços pequenos, os {{pacote-de-rede|pacotes}}. Um exemplo do começo ao fim: você manda uma foto pelo WhatsApp. O celular divide a foto em milhares de pacotes, cada um com o endereço de destino escrito. Eles saem pelo Wi-Fi, passam pela operadora e por vários equipamentos no caminho, às vezes por rotas diferentes, e chegam ao destino, onde são remontados na ordem. Se um pacote se perde, ele é pedido de novo. Você só vê a foto chegando inteira."
      ],
      [
        "p",
        "Uma confusão que vale desfazer agora: internet e web não são a mesma coisa. A web, as páginas que o navegador abre, é um dos usos da internet. O e-mail, o WhatsApp, os jogos online e o próprio {{claude-code|Claude Code}} conversando com os servidores da Anthropic também usam a internet, sem página nenhuma."
      ],
      [
        "h3",
        "O endereço: a URL e o domínio"
      ],
      [
        "p",
        "Um endereço completo, a {{url|URL}}, como `https://pt.wikipedia.org/wiki/Economia`, tem três partes. O `https://` diz como conversar (o protocolo). O `pt.wikipedia.org` diz com quem conversar: é o domínio. E o `/wiki/Economia` diz qual página pedir: é o {{caminho}}, parecido com o caminho de um {{arquivo}} numa {{pasta}}, que você viu na aula 0.1."
      ],
      [
        "p",
        "O domínio se lê da direita para a esquerda. O `.org` é o final, chamado de domínio de topo. O do Brasil é o `.br`, e o endereço brasileiro mais comum termina em `.com.br`: o `.com` ali é uma divisão dentro do `.br`. O `wikipedia` é o nome que alguém registrou. E o `pt` da frente é um subdomínio, que o dono do nome cria à vontade, sem pagar nada a mais. Por isso `pt.wikipedia.org` e `en.wikipedia.org` são do mesmo dono."
      ],
      [
        "p",
        "Um detalhe que surpreende: você não compra um domínio; você aluga. Paga pelo direito de usar o nome por um ano ou mais e precisa renovar; se não renovar, depois de um prazo o nome volta a ficar livre para qualquer pessoa registrar. Os domínios `.br` são administrados pelo Registro.br, que cobra R$ 40,00 por ano por um `.com.br` (valor da página do Registro.br em 02/11/2026). Empresas revendedoras cobram o preço delas, às vezes com o primeiro ano mais barato e a renovação mais cara."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: a dona da confeitaria procura `docepontoconfeitaria.com.br` no Registro.br, vê que está livre, paga os R$ 40 (o preço de 02/11/2026) e passa a controlar esse nome por um ano. Só que, se alguém digitar o endereço no dia seguinte, aparece um erro: ela tem o nome, mas ainda não tem site nenhum ligado a ele. Ter domínio não é ter site, e as próximas seções mostram o que falta."
      ],
      [
        "p",
        "Quando não usar um domínio próprio: para testar, ou para um projeto só seu. As hospedagens dão um endereço grátis, como `seu-projeto.vercel.app` ou `seunome.github.io`, que funciona igual. O domínio próprio é para quando o nome importa: marca, clientes, cartão de visita."
      ],
      [
        "h3",
        "DNS: a agenda que troca o nome pelo número"
      ],
      [
        "p",
        "Os computadores se acham pelo número, o IP, e não pelo nome. Quem faz a tradução é o DNS, sigla em inglês para \"sistema de nomes de domínio\". Quando você aperta Enter, o navegador pergunta ao sistema do PC: \"qual é o IP de `pt.wikipedia.org`?\". O PC repassa a pergunta a um resolvedor, um servidor de DNS que em geral é o da sua operadora (ou um público, como o `1.1.1.1` da Cloudflare). Se o resolvedor não souber a resposta de cabeça, ele pergunta em corrente: primeiro aos servidores raiz, que dizem quem cuida do `.org`; depois aos servidores do `.org`, que dizem quem cuida de `wikipedia.org`; e, por fim, aos servidores da própria Wikipédia, que dão o número."
      ],
      [
        "p",
        "Tudo isso leva milissegundos, e o resolvedor guarda a resposta por um tempo definido pelo dono do domínio. Na próxima vez, de qualquer pessoa da mesma operadora, a resposta sai da memória, sem percorrer a corrente. É essa memória que explica a expressão \"esperar o DNS propagar\": quando você muda o número ligado a um nome, as respostas antigas continuam guardadas pelo mundo até o prazo vencer, o que pode levar de minutos a algumas horas."
      ],
      [
        "p",
        "Quando o DNS não acha o nome, o Chrome mostra esta tela, aqui no teste feito para esta aula com um endereço inventado:"
      ],
      [
        "saida",
        "Não é possível acessar esse site\n\nVerifique se há um erro de digitação em site-que-nao-existe-zz9.com.br.\n\nSe o endereço estiver correto, tente executar o Diagnóstico de Rede do Windows.\nDNS_PROBE_FINISHED_NXDOMAIN"
      ],
      [
        "p",
        "O código da última linha é a pista: `NXDOMAIN` quer dizer \"domínio que não existe\". Ou o nome foi digitado errado, ou ninguém registrou, ou o registro existe mas ainda não aponta para nenhum computador. Por que isso importa para você: um site novo que \"não abre\" no primeiro dia quase sempre é DNS ainda não configurado ou ainda propagando, e não site quebrado. E uma falha de DNS pode derrubar até gigante: a aula 0.7 conta o caso da Amazon, em outubro de 2025."
      ],
      [
        "h3",
        "Pedido e resposta: o navegador conversa com o servidor"
      ],
      [
        "p",
        "Com o IP na mão, o navegador abre uma conexão com aquele computador, numa {{porta}} combinada: a 443 para https, a 80 para {{http}} (a aula 0.8 explica as portas). E manda um pedido no idioma da web, o HTTP: \"me dê `/wiki/Economia`\", com alguns detalhes juntos, como o idioma que você prefere. O Servidor responde com um {{codigo-de-status|código de status}}, que diz como foi, e com o conteúdo. Veja as cinco primeiras linhas de uma resposta real, pedida em 08/11/2026 com o {{comando}} `curl.exe -I https://example.com/`, que mostra só o cabeçalho da resposta (as outras linhas trazem detalhes técnicos que não importam aqui):"
      ],
      [
        "saida",
        "HTTP/1.1 200 OK\nDate: Sun, 08 Nov 2026 06:26:24 GMT\nContent-Type: text/html; charset=utf-8\nConnection: keep-alive\nServer: cloudflare"
      ],
      [
        "p",
        "Linha por linha: `200 OK` quer dizer \"deu certo, aqui está\". `Date` é a data e a hora da resposta, no horário de Greenwich. `Content-Type: text/html` avisa que o que vem é uma página {{html|HTML}}, com acentos no padrão {{utf8|UTF-8}} (a aula 0.4b falou dele). `Connection: keep-alive` pede para manter a ligação aberta, porque logo vêm os outros pedidos da mesma página. E `Server: cloudflare` mostra quem respondeu de fato: o site `example.com` é entregue pelos computadores de outra empresa, a Cloudflare. Pedindo uma página que não existe no mesmo site, a primeira linha muda:"
      ],
      [
        "saida",
        "HTTP/1.1 404 Not Found"
      ],
      [
        "p",
        "Repare: 404 não é site fora do ar. É o servidor funcionando e respondendo \"essa página não existe aqui\". Os códigos que você mais vai ver são poucos:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "Código",
            "Quer dizer",
            "Exemplo"
          ],
          "linhas": [
            [
              "200",
              "Deu certo",
              "A página chegou"
            ],
            [
              "301",
              "Mudou de endereço, para sempre",
              "http://wikipedia.org manda para https://wikipedia.org"
            ],
            [
              "404",
              "Essa página não existe",
              "Link antigo ou digitado errado"
            ],
            [
              "500",
              "Erro dentro do servidor",
              "O programa do site quebrou"
            ],
            [
              "503",
              "Servidor indisponível no momento",
              "Manutenção ou sobrecarga"
            ]
          ]
        }
      ],
      [
        "p",
        "A página não chega sozinha. O navegador lê o HTML e descobre que precisa também do arquivo de estilo, das imagens, das fontes e do {{javascript|JavaScript}}: cada um é um pedido novo, com a sua própria resposta. Uma página comum faz dezenas de pedidos, às vezes centenas, e só então o navegador desenha a tela inteira. A aula 2.9 aprofunda os pedidos, e a 2.12 mostra como ver cada um deles no próprio navegador, com a tecla {{devtools|F12}}."
      ],
      [
        "h3",
        "Servidor e hospedagem: o computador que responde"
      ],
      [
        "p",
        "O servidor é um {{programa}} que fica esperando pedidos e respondendo, e, por extensão, o computador onde ele {{rodar|roda}}, ligado o tempo todo e conectado à internet com um endereço fixo. A Hospedagem é o serviço de alugar esse computador, ou um pedaço dele, de uma empresa que cuida da energia, da conexão e da manutenção. Existem dois tipos principais. A hospedagem de site estático só entrega arquivos prontos, como os HTML que o Claude faz para você: o {{github|GitHub}} Pages e o plano grátis da Vercel servem para isso. A hospedagem com programa no servidor também roda código e guarda dados, para um site com login, formulário que grava ou pagamento."
      ],
      [
        "p",
        "Domínio e hospedagem são dois contratos separados, muitas vezes com empresas diferentes: o nome fica numa registradora, como o Registro.br, e os arquivos ficam na hospedagem. Quem liga um ao outro é o DNS. Um exemplo do começo ao fim: o site da confeitaria é publicado na Vercel e ganha o endereço `confeitaria.vercel.app`, que já funciona. Ela entra no painel de DNS do domínio que alugou e cria o registro que a Vercel indica, que diz \"`docepontoconfeitaria.com.br` fica naquele computador\". Depois da propagação, os dois endereços abrem o mesmo site, e o erro do primeiro dia some."
      ],
      [
        "p",
        "Por que isso importa para você: quando uma empresa oferecer \"domínio grátis no primeiro ano\", confira o preço da renovação; e, quando o site mudar de hospedagem, o domínio vai junto, bastando trocar o registro no DNS. Quando não usar o seu próprio PC como servidor: ele teria de ficar ligado o tempo todo, com o endereço exposto na internet, o que dá trabalho e abre uma porta de ataque no seu computador. A aula 0.8 mostra o servidor que roda no seu PC e por que ele só serve para você."
      ],
      [
        "h3",
        "https: o cadeado"
      ],
      [
        "p",
        "No `http` simples, o pedido e a resposta viajam abertos: qualquer equipamento no caminho, como o roteador de um Wi-Fi público, consegue ler e até alterar o conteúdo. O HTTPS cifra a conversa inteira, e só as duas pontas conseguem ler. Além disso, o servidor apresenta um {{certificado}}, um documento digital emitido por uma autoridade certificadora, que prova que aquele computador controla aquele domínio. O navegador confere o certificado antes de mostrar o cadeado. Quando a conferência falha, o Chrome para tudo e mostra um aviso como este, do teste feito para esta aula:"
      ],
      [
        "saida",
        "Sua conexão não é particular\n\nInvasores podem estar tentando roubar suas informações de expired.badssl.com (por exemplo, senhas, mensagens ou cartões de crédito)."
      ],
      [
        "p",
        "O certificado não custa nada há anos: a Let’s Encrypt é uma autoridade certificadora gratuita e automatizada, e as hospedagens como o GitHub Pages e a Vercel emitem e renovam o certificado sozinhas. Hoje, o Chrome marca as páginas sem https como \"Não seguro\". E o Google anunciou que, a partir da versão 154 (outubro de 2026), o Chrome passa a avisar antes do primeiro acesso a um site público sem https; dá para continuar mesmo assim."
      ],
      [
        "p",
        "O ponto mais importante desta seção: o cadeado garante que a conversa é privada e que o outro lado controla aquele domínio. Ele não garante que o dono do domínio é honesto. Um golpista registra `bancoo-seguro.com.br`, pega um certificado grátis e ganha o mesmo cadeado. Por isso, antes de digitar uma senha, confira o domínio na barra de endereço, letra por letra, e não o cadeado. Quando não usar http sem o s: em qualquer página com login, formulário ou dado pessoal."
      ],
      [
        "h3",
        "O caminho inteiro, do Enter à tela"
      ],
      [
        "p",
        "Juntando tudo, em resumo declarado, é este o caminho de `https://pt.wikipedia.org/wiki/Economia`:"
      ],
      [
        "lista",
        [
          "**1. Você digita e aperta Enter.** O navegador separa o protocolo, o domínio e o caminho.",
          "**2. DNS.** O navegador pergunta o IP de `pt.wikipedia.org`, e o resolvedor responde com um número, da memória ou depois de percorrer a corrente.",
          "**3. Conexão segura.** O navegador liga para esse IP na porta 443, confere o certificado e combina a cifra.",
          "**4. Pedido.** O navegador pede `/wiki/Economia`.",
          "**5. Resposta.** O servidor devolve o código 200 e o HTML.",
          "**6. O resto.** O navegador lê o HTML, pede estilo, imagens e {{script|scripts}}, e desenha a página."
        ]
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso comprar um domínio para ter um site?** Não. A hospedagem dá um endereço grátis, como `seu-projeto.vercel.app`. O domínio próprio é para quando o nome importa; um `.com.br` custava R$ 40 por ano no Registro.br em 02/11/2026.",
          "**Hospedagem custa?** Para site estático pequeno, há planos grátis, com limites de uso (o módulo 15 mostra quais). Site com programa no servidor e muito acesso costuma ser pago.",
          "**O que é \"propagar o DNS\"?** É esperar as respostas antigas, guardadas pelos resolvedores, vencerem. Pode levar de minutos a algumas horas: não mexa de novo na configuração antes disso.",
          "**Cadeado quer dizer que o site é seguro?** Quer dizer que a conversa é cifrada e que o servidor controla aquele domínio. Para saber se é o site certo, confira o domínio.",
          "**O meu IP de casa é sempre o mesmo?** Em geral não: a operadora costuma trocar de tempos em tempos. Por isso o PC de casa é um servidor ruim, além dos riscos."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: IPv4, IPv6 e os servidores raiz",
          "blocos": [
            [
              "p",
              "O IP mais conhecido, o IPv4, tem quatro números de 0 a 255, como `185.15.58.224`, o que dá pouco mais de 4 bilhões de combinações: acabaram. O IPv6, mais novo, é bem mais longo e mistura números e letras, como `2a02:ec80:600:ed1a::1`. Os dois convivem hoje, e um mesmo site costuma ter um endereço de cada tipo."
            ],
            [
              "p",
              "Os servidores raiz, o começo da corrente do DNS, têm 13 nomes, de A a M, mantidos por um punhado de organizações. Juntos, eles têm cerca de 2 mil cópias espalhadas pelo mundo (2.048 em 08/11/2026, segundo o site oficial dos servidores raiz), umas letras com centenas e outras com poucas, e a mais próxima responde."
            ],
            [
              "p",
              "Você pode trocar o resolvedor do seu PC por um público, como o `1.1.1.1` ou o `8.8.8.8`, nas configurações de rede. Não é necessário para este curso."
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
          "pergunta": "O `nslookup` é um comando que faz uma pergunta ao DNS. O que você acha que ele responde com esta linha, que pergunta pela Wikipédia ao resolvedor `1.1.1.1`?",
          "codigo": "nslookup wikipedia.org 1.1.1.1",
          "linguagem": "powershell",
          "resposta": "Ele responde em duas partes. Primeiro, quem respondeu: `Server: one.one.one.one` e `Address: 1.1.1.1`, o resolvedor que você escolheu. Depois, a resposta, avisada como \"Non-authoritative answer\" (resposta não oficial: quem respondeu foi o resolvedor, e não o servidor oficial daquele domínio): `Name: wikipedia.org` e os endereços, um IPv6 longo, `2a02:ec80:600:ed1a::1`, e um IPv4, `185.15.58.224`. Essa foi a saída real em 02/11/2026; no seu PC o número pode sair outro, porque sites grandes têm computadores em vários lugares e respondem com o mais próximo. Com um nome que não existe, a resposta muda para \"Non-existent domain\", o mesmo NXDOMAIN da tela do Chrome."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "A dona da confeitaria alugou o domínio no Registro.br ontem. Hoje, quem digita o endereço vê um erro. O que provavelmente falta?",
          "o": [
            [
              "Esperar o Registro.br terminar de montar o site com o nome dela",
              "O Registro.br aluga o nome; ele não monta site. Os arquivos precisam estar numa hospedagem."
            ],
            [
              "Ter uma hospedagem e apontar o domínio para ela, pelo DNS",
              "Isso. O domínio é só o nome; o site mora na hospedagem, e o registro no DNS liga um ao outro."
            ],
            [
              "Comprar o certificado do https, sem o qual nenhum site abre",
              "Um site sem https abre, com o aviso de \"Não seguro\". E o certificado costuma ser grátis e automático na hospedagem."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se pode digitar a senha do banco num site que recebeu por mensagem, e o Claude respondeu: \"Olhei com cuidado antes de responder. O endereço começa com https, e o navegador mostra o cadeado, o que quer dizer que o certificado foi conferido por uma autoridade certificadora. Sem ser o banco, ninguém conseguiria esse certificado, então pode digitar a senha.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: o cadeado protege a conversa, mas não prova quem é o dono",
              "Isso. Certificado grátis sai para qualquer domínio que a pessoa controle. Confira se o domínio é mesmo o do banco."
            ],
            [
              "Está correta: sem ser o banco, ninguém teria o certificado",
              "O certificado prova que a pessoa controla aquele domínio, que pode ser um nome parecido com o do banco, registrado por um golpista."
            ],
            [
              "Errado: o https deixa o site mais rápido, e não mais seguro",
              "O https cifra a conversa; não é sobre velocidade. O erro da resposta é tratar o cadeado como prova de honestidade."
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
          "p": "Coloque o caminho de uma página na ordem, do Enter até a tela. São duas etapas, com quatro linhas cada; ordene as linhas dentro de cada etapa.",
          "linhas": [
            "Você digita o endereço e aperta Enter",
            "O navegador pergunta ao DNS o IP do domínio",
            "O DNS responde com o IP do servidor",
            "O navegador abre uma conexão segura com esse IP",
            "O navegador manda o pedido da página",
            "O servidor responde com o código 200 e o HTML",
            "O navegador lê o HTML e pede imagens e estilo",
            "O navegador desenha a página na tela"
          ],
          "notas": [
            "Começa com o endereço: protocolo, domínio e caminho",
            "O computador do site só se acha pelo número, o IP",
            "A resposta pode vir da memória do resolvedor ou da corrente inteira",
            "Na porta 443, com o certificado conferido antes do cadeado",
            "O pedido diz qual página, pelo caminho do endereço",
            "200 quer dizer que deu certo; 404 seria página inexistente",
            "Cada arquivo extra é um pedido novo, com resposta própria",
            "Só com tudo na mão a tela fica completa"
          ],
          "etapas": [
            "Achar o servidor e ligar para ele",
            "Pedir, receber e mostrar"
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
            "\"Aluguei o domínio, então já tenho um site.\"",
            "O domínio é só o nome. O site precisa de uma hospedagem, e o DNS liga os dois."
          ],
          [
            "\"O cadeado quer dizer que o site é confiável.\"",
            "Quer dizer que a conversa é cifrada com aquele domínio. Confira o domínio na barra: golpe também tem cadeado."
          ],
          [
            "\"Mudei o DNS e nada aconteceu, então errei.\"",
            "As respostas antigas ficam guardadas por um tempo. Espere de minutos a algumas horas antes de mexer de novo."
          ],
          [
            "\"Erro 404 quer dizer que o site caiu.\"",
            "O 404 é o servidor funcionando e dizendo que aquela página não existe. Site fora do ar costuma dar erro 500, 503 ou nem responder."
          ],
          [
            "\"Internet e web são a mesma coisa.\"",
            "A web, as páginas, é um dos usos da internet. E-mail, WhatsApp e jogos também usam a internet, sem navegador."
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
          "p": "Qual é a diferença entre domínio e hospedagem?",
          "r": [
            "O domínio é o nome, alugado por ano numa registradora.",
            "A hospedagem é o computador onde os arquivos do site ficam, ligado o tempo todo.",
            "O DNS liga o nome ao computador."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que o cadeado do https garante, e o que ele não garante?",
          "r": [
            "Garante que a conversa vai cifrada, sem ninguém no caminho ler.",
            "Garante que o servidor controla aquele domínio.",
            "Não garante que o dono do domínio é honesto."
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "HTTPS by default (o Chrome 154, de outubro de 2026, avisa antes do primeiro acesso a um site público sem HTTPS), blog de segurança do Google, 28/10/2025",
            "https://blog.google/security/https-by-defau/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Root Servers (2.048 cópias dos servidores raiz, operadas por 12 organizações), root-servers.org",
            "https://root-servers.org/",
            "oficial",
            "08/11/2026"
          ],
          [
            "Como a Web funciona, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "O que é um nome de domínio? (alugado, não comprado), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "O que é um servidor web?, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Endereço IP (glossário), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Glossary/IP_Address",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "HTTPS (glossário), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Glossary/HTTPS",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "Registro.br (R$ 40,00 por ano para .com.br)",
            "https://registro.br/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Como a Let’s Encrypt funciona",
            "https://letsencrypt.org/pt-br/how-it-works/",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "O que é o GitHub Pages?, GitHub",
            "https://docs.github.com/pt/pages/getting-started-with-github-pages/what-is-github-pages",
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
          "O DNS acha o servidor pelo nome, o navegador pede, e o servidor responde",
          "Isso. Nome vira número, pedido vira resposta, e o navegador desenha."
        ],
        [
          "O domínio guarda os arquivos do site, e o https deixa a página mais rápida",
          "Quem guarda os arquivos é a hospedagem; o domínio é só o nome. E o https cifra, não acelera."
        ],
        [
          "A página fica no navegador, que só usa a internet para conferir o cadeado",
          "A página mora no servidor e chega a cada visita, pedido por pedido."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "O que o DNS faz?",
        "o": [
          [
            "Guarda os arquivos do site num servidor",
            "Esse é o trabalho da hospedagem. O DNS só traduz o nome."
          ],
          [
            "Cifra a conversa entre você e o site",
            "Esse é o papel do https. O DNS acha o número do computador."
          ],
          [
            "Troca o nome do site pelo número dele, o IP",
            "Isso. Os computadores se acham pelo número, e o DNS faz a tradução."
          ]
        ],
        "c": 2
      },
      {
        "p": "Um link antigo dá \"404 Not Found\". O que isso quer dizer?",
        "o": [
          [
            "O servidor respondeu: essa página não existe",
            "Isso. O site está no ar; aquela página é que não existe mais."
          ],
          [
            "O site inteiro saiu do ar e não responde mais",
            "Site fora do ar não responde, ou responde 500 ou 503. O 404 é uma resposta do servidor."
          ],
          [
            "O domínio do site não foi renovado a tempo",
            "Domínio vencido costuma dar erro de DNS ou cair numa página da registradora, e não o 404 do site."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre domínio e hospedagem?",
        "O domínio é o nome, alugado por ano numa registradora, como o Registro.br. A hospedagem é o computador que guarda os arquivos e responde aos pedidos. O DNS liga os dois: diz em que computador aquele nome fica."
      ],
      [
        "Por que o meu site novo ainda não abre?",
        "Quase sempre é DNS: o domínio ainda não aponta para a hospedagem, ou as respostas antigas ainda não venceram. Confira se o registro que a hospedagem pediu foi criado e espere de minutos a algumas horas."
      ],
      [
        "O cadeado garante que o site é seguro?",
        "Garante que a conversa é cifrada e que o servidor controla aquele domínio. Não garante que o dono é honesto. Antes de digitar senha, confira o domínio na barra, letra por letra."
      ]
    ]
  },
  "0-7": {
    "tempo": 23,
    "video": "a0-7",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você já tentou abrir um {{arquivo}} do OneDrive sem {{internet}} e ele não abriu, ou apagou algo no PC e descobriu que sumiu do celular também. As duas coisas vêm do mesmo lugar, a {{nuvem}}, e esta aula mostra que ela não é mágica: é o computador de outra empresa, com as vantagens e os riscos que isso traz.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Você já usa a nuvem o dia inteiro: o OneDrive ou o Google Drive guardam seus arquivos, o {{github|GitHub}} vai guardar a cópia dos seus projetos (módulo 3), a Vercel vai publicar os seus {{site|sites}} (módulo 15), e o próprio Claude pensa nos computadores da Anthropic. Cada vez que você coloca alguma coisa num desses lugares, toma quatro decisões, quase sempre sem perceber: quem pode ver, quanto vai custar quando passar do limite grátis, o que acontece se o serviço parar e se você vai conseguir trabalhar sem internet."
      ],
      [
        "p",
        "Essas decisões têm consequência prática. Um arquivo que \"está no OneDrive\" pode não estar no seu PC, e aí, no avião, ele não abre. Um site na Vercel continua no ar com o seu PC desligado, e é exatamente por isso que ele fica lá, e não no seu computador. Uma {{pasta}} compartilhada com \"qualquer pessoa com o link\" é, na prática, pública para quem receber o link encaminhado. E um plano grátis pode proibir o uso comercial, o que importa no dia em que o projeto vira negócio."
      ],
      [
        "p",
        "Esta aula dá nome ao que acontece por baixo, para que você tome essas decisões de propósito."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Guardar algo na nuvem é como alugar um box num **guarda-móveis**. A empresa cuida do prédio, da segurança, da energia e da limpeza, e o prédio fica aberto 24 horas. Você paga pelo espaço, e um box pequeno sai de graça. Para entrar, você usa a sua **chave**, que aqui é o login: quem tem a sua chave entra no seu box. E você aceita as regras da casa: o que pode guardar, o que acontece se atrasar o pagamento e o aviso de que, se a empresa fechar, você precisa tirar as suas coisas antes."
      ],
      [
        "quebra",
        "Num guarda-móveis, a coisa sai da sua casa; na nuvem, quase sempre ela fica nos dois lugares, e o que você muda num aparece no outro. A nuvem também guarda cópias em vários {{disco|discos}}, às vezes em vários prédios, coisa que nenhum guarda-móveis faz. E a nuvem não só guarda: ela também trabalha. A Vercel {{rodar|roda}} o seu site e o Claude pensa nos computadores da Anthropic; seria um guarda-móveis que, além de guardar, cozinha."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Na nuvem quer dizer: num servidor de outra empresa"
      ],
      [
        "p",
        "Quando um arquivo está na nuvem, ele está gravado em {{servidor|servidores}} de uma empresa, dentro de {{data-center|data centers}}: prédios cheios de computadores, com energia de reserva, refrigeração e gente de plantão. Você chega até eles pela internet, pelo caminho da aula 0.6: endereço, {{dns|DNS}}, pedido e resposta. \"Nuvem\" é só um apelido; o computador é bem real, ligado o tempo todo, e não é seu."
      ],
      [
        "p",
        "Por baixo, os serviços grandes costumam guardar cada arquivo em mais de um disco, e muitas vezes em mais de um prédio, para que um disco queimado não apague nada. Essa é a maior vantagem da nuvem sobre o seu PC: o notebook pode cair no chão, ser roubado ou queimar, e o arquivo continua lá."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, com o OneDrive: você salva `proposta.docx` na pasta do OneDrive no PC. O {{programa}} do OneDrive percebe e {{sincronizar|sincroniza}}: manda uma cópia para os servidores da Microsoft. Minutos depois, o {{aplicativo|app}} do OneDrive no celular mostra o arquivo. Você corrige uma frase pelo celular, e a mudança volta para o PC. São três cópias do mesmo arquivo, no PC, nos servidores e no celular, que o programa mantém iguais."
      ],
      [
        "p",
        "Um detalhe que pega muita gente: o Windows pode deixar arquivos só na nuvem, para economizar espaço. No {{explorador|Explorador}}, um ícone de nuvem azul ao lado do arquivo quer dizer \"só disponível online\": ele aparece na lista, mas não ocupa o disco, e sem internet não abre. Para viajar, clique com o botão direito na pasta e escolha \"Sempre manter neste dispositivo\": o OneDrive baixa tudo, e os arquivos passam a abrir sem internet. Quando não usar a pasta sincronizada: para uma pasta de projeto com {{git|Git}}, porque dois programas mexendo nos mesmos arquivos ao mesmo tempo se atrapalham, como a aula 3.1 avisa."
      ],
      [
        "h3",
        "Quatro nuvens do seu dia, quatro trabalhos"
      ],
      [
        "p",
        "Nem toda nuvem faz a mesma coisa. O OneDrive e o Google Drive guardam e sincronizam arquivos. O GitHub guarda uma cópia do histórico do Git, que chega lá quando você faz o {{push}}. A Vercel guarda o seu site e entrega as páginas para quem visita, e ainda roda pequenos programas no servidor quando a página pede, a {{funcao-servidor|função no servidor}}, tudo com o seu PC desligado. E o Claude: o {{claude-code|Claude Code}} roda no seu PC, mas o {{modelo}} que pensa roda nos servidores da Anthropic, e cada pedido seu viaja pela internet até lá e volta. É por isso que, sem internet, o Claude Code não responde."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Serviço",
            "O que faz por você",
            "Grátis até (em 02/11/2026)",
            "Se ele cair"
          ],
          "linhas": [
            [
              "OneDrive",
              "Guarda e sincroniza arquivos",
              "5 GB, divididos com os anexos do e-mail Outlook",
              "O que está só online não abre; o guardado no PC, sim"
            ],
            [
              "Google Drive",
              "Guarda e sincroniza arquivos",
              "15 GB, divididos com o Gmail e o Google Fotos",
              "Mesma coisa: o que está só na nuvem fica fora"
            ],
            [
              "GitHub",
              "Guarda a cópia do seu histórico do Git",
              "{{repositorio|Repositórios}} privados sem limite de quantidade, com recursos limitados",
              "O histórico continua no seu PC; só o push espera"
            ],
            [
              "Vercel, plano Hobby",
              "Publica o site e roda funções",
              "Uso pessoal e não comercial, com cotas por mês",
              "O site sai do ar para todo mundo"
            ],
            [
              "Claude",
              "O modelo pensa nos servidores da Anthropic",
              "Depende do seu plano",
              "O Claude Code para de responder"
            ]
          ]
        }
      ],
      [
        "p",
        "Os números da tabela são das páginas oficiais, conferidas em 02/11/2026, e mudam com o tempo."
      ],
      [
        "h3",
        "Custo: grátis até um limite, e depois?"
      ],
      [
        "p",
        "Quase toda nuvem tem uma faixa grátis. Em ordem de grandeza, com as faixas de 02/11/2026: os 5 GB do OneDrive guardam cerca de 1.500 fotos de celular de 3 MB cada; os 15 GB do Google, umas três vezes isso, divididos com os seus e-mails. Para documentos de texto, cabe muita coisa; para fotos e vídeos, acaba rápido."
      ],
      [
        "p",
        "O que acontece quando passa do limite é o que pouca gente lê. No OneDrive, segundo a própria Microsoft: você não consegue mais enviar, editar nem sincronizar arquivos novos; os que já estão lá ficam só para leitura; o e-mail do Outlook para de enviar e receber; e, depois de seis meses acima da cota, a Microsoft pode apagar o OneDrive com tudo dentro. Na Vercel, o plano Hobby é grátis, mas só para uso pessoal e não comercial, e quem estoura as cotas em geral espera 30 dias para usar de novo. Um site de cliente, portanto, pede o plano pago, que começa em US$ 20 por usuário por mês (página do plano Hobby, atualizada em 14/09/2026)."
      ],
      [
        "p",
        "Por que importa para você: \"grátis\" tem regra. Antes de pôr um projeto de negócio numa nuvem grátis, leia duas coisas no plano: se o uso comercial é permitido e o que acontece quando o limite estoura."
      ],
      [
        "h3",
        "Quem vê o que está lá"
      ],
      [
        "p",
        "Três grupos conseguem ver um arquivo na nuvem. Primeiro, você, e quem tiver o seu login: por isso a senha forte e a verificação em duas etapas importam tanto, e o módulo 11 trata disso. Segundo, as pessoas com quem você compartilhou. Aqui mora a armadilha mais comum: o compartilhamento \"qualquer pessoa com o link\" não pede login. Se você manda o link num grupo e alguém encaminha, um desconhecido abre. E um repositório privado no GitHub quer dizer \"só quem tem acesso\", e o acesso pode mudar."
      ],
      [
        "p",
        "Terceiro, a própria empresa, dentro das regras dela. Nos serviços comuns, os arquivos ficam cifrados nos discos, mas quem guarda as chaves da cifra é a empresa, que segue os próprios termos de uso e a lei, inclusive ordens judiciais. Para arquivo pessoal, isso costuma bastar. Para documento de cliente, com dados de outras pessoas, vale parar e pensar em quem acessa: o módulo 11 trata de dados de terceiros. E senhas e chaves nunca vão num arquivo de texto na nuvem, nem num repositório."
      ],
      [
        "h3",
        "Se a empresa cair, bloquear a conta ou fechar o serviço"
      ],
      [
        "p",
        "Ser de uma empresa grande não impede a queda. Em 20 de outubro de 2025, uma falha no sistema que cuida do DNS de um {{banco-de-dados|banco de dados}} da Amazon, na região da Virgínia, nos Estados Unidos, deixou o endereço desse serviço sem nenhum {{ip|IP}}. Milhares de sites e apps que dependiam dele pararam, nos Estados Unidos e na Europa, e a recuperação completa levou mais de 14 horas, segundo o relato da própria Amazon resumido pela imprensa. É o DNS da aula 0.6 derrubando um gigante. Nada se perdeu, mas, durante horas, ninguém conseguiu usar."
      ],
      [
        "p",
        "Há outros dois jeitos de perder o acesso. A conta pode ser bloqueada ou ficar inacessível, por exemplo se você esquece a senha e perde o celular da verificação em duas etapas sem ter guardado os códigos de recuperação. E o serviço pode fechar: o site separado do Claude Design, em `claude.ai/design`, fecha em 14 de dezembro de 2026, e quem tinha projetos lá precisa movê-los antes, segundo a central de ajuda da Anthropic."
      ],
      [
        "p",
        "A defesa é simples de dizer: o que importa fica em pelo menos dois lugares que não dependem da mesma empresa. Um projeto com Git fica no seu PC e no GitHub; um contrato fica no OneDrive e num HD externo. Se um cair, o outro segura."
      ],
      [
        "h3",
        "Sincronizar não é backup"
      ],
      [
        "p",
        "Sincronizar é copiar as mudanças, todas elas, inclusive os erros. Se você apaga um arquivo no PC, a sincronização apaga na nuvem e no celular. Se um programa estraga um arquivo, a versão estragada é a que vai para todo lado. Um {{backup}} é outra coisa: uma cópia que não muda quando o original muda."
      ],
      [
        "p",
        "Um exemplo do começo ao fim, que tem tudo a ver com quem usa o Claude Code em modo que não pede confirmação: você pede \"limpe os arquivos temporários desta pasta\", a pasta está dentro do OneDrive, e o Claude apaga alguns arquivos que não eram temporários. O OneDrive sincroniza a exclusão, e os arquivos somem do PC, da nuvem e do celular. O conserto existe, mas tem prazo: na conta pessoal, a lixeira do OneDrive guarda os itens apagados por 30 dias, e depois eles são eliminados de vez. O OneDrive também guarda versões anteriores de um arquivo alterado, o que ajuda quando ele foi estragado em vez de apagado."
      ],
      [
        "p",
        "Por que importa para você: a pasta sincronizada protege do notebook roubado, mas não do erro. Para o que não pode se perder, uma cópia separada, que não sincroniza sozinha, e, num projeto com {{codigo|código}}, o histórico do Git."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso de internet para abrir um arquivo da nuvem?** Depende de onde ele está. Se está guardado também no aparelho, abre sem internet; se aparece com a nuvem azul, só online, precisa de internet.",
          "**Custa?** Até o limite grátis, não. Acima dele, os planos pagos são mensais, e as regras do que acontece quando estoura variam de empresa para empresa.",
          "**A nuvem é mais segura que o meu PC?** Contra perda, roubo e defeito do aparelho, sim. Contra alguém entrar na sua conta, depende da senha e da verificação em duas etapas. Contra a empresa parar, só uma segunda cópia ajuda.",
          "**Posso pôr documentos de clientes?** Antes, pense em quem acessa e em quem você compartilha. O módulo 11 trata de dados de outras pessoas.",
          "**O que é \"subir\" e \"baixar\"?** Subir é mandar do seu aparelho para a nuvem; baixar é trazer da nuvem para o aparelho."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: as nuvens por trás das nuvens",
          "blocos": [
            [
              "p",
              "Três empresas alugam computadores em escala gigante para outras empresas: a Amazon (AWS), a Microsoft (Azure) e o Google (Google Cloud). Muitos serviços que você usa rodam em cima delas, e por isso uma queda numa dessas três derruba de uma vez apps que parecem não ter nada a ver um com o outro, como aconteceu em outubro de 2025."
            ],
            [
              "p",
              "Quem trabalha com isso divide a nuvem em três camadas. Na mais baixa, você aluga o computador cru e instala tudo (em inglês, IaaS). Na do meio, a empresa cuida do computador e você só manda o seu código, como na Vercel (PaaS). Na de cima, você usa um programa pronto, como o OneDrive, o Gmail ou o Claude (SaaS)."
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
          "pergunta": "A pasta abaixo fica dentro do OneDrive, sincronizada com a nuvem e com o celular. Às 10h, um pedido de limpeza apaga a proposta no PC. O que você acha que acontece com a cópia da nuvem e com a do celular, e por onde a proposta volta?",
          "codigo": "C:\\Users\\SeuNome\\OneDrive\\relatorios\\proposta.docx\n(apagado no PC às 10:00)",
          "linguagem": "texto",
          "resposta": "Logo depois, o OneDrive copia a exclusão: a proposta some também da nuvem e do celular. Não sobra uma cópia boa em nenhuma das pastas sincronizadas, porque sincronizar copia todas as mudanças, inclusive os erros. Só a lixeira do OneDrive, no site do OneDrive, a guarda, e é por ela que a proposta volta. Na conta pessoal, ela guarda o que foi apagado por 30 dias, e depois elimina de vez. Por isso, para o que não pode se perder, vale uma cópia separada, que não sincroniza sozinha. Esta resposta segue a documentação da Microsoft citada nas Fontes; a exclusão não foi feita de verdade para esta aula."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "Você vai viajar e quer ler, no avião, sem internet, uma pasta de PDFs que está no OneDrive. No Explorador, os arquivos aparecem com uma nuvem azul ao lado. O que fazer antes de embarcar?",
          "o": [
            [
              "Nada: se o arquivo aparece na pasta, ele já está no PC",
              "A nuvem azul quer dizer \"só online\": o arquivo aparece na lista, mas não está no disco."
            ],
            [
              "Marcar a pasta como \"Sempre manter neste dispositivo\"",
              "Isso. O OneDrive baixa os arquivos, e eles passam a abrir sem internet."
            ],
            [
              "Criar na Área de Trabalho um atalho para essa pasta",
              "Um atalho só aponta para a pasta. Os arquivos continuam só na nuvem, e sem internet não abrem."
            ]
          ],
          "c": 1
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se pode apagar a cópia num HD externo, já que tudo está no OneDrive, e o Claude respondeu: \"Não apague. Sincronizar copia até o erro: apagou no PC, some da nuvem, e a lixeira só segura 30 dias.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: a nuvem guarda cópias em vários prédios e nunca perde nada",
              "As cópias em vários prédios protegem de disco queimado na empresa, não de um arquivo apagado por você: a exclusão também é copiada."
            ],
            [
              "Errado: o OneDrive nunca apaga na nuvem o que você apaga no seu PC",
              "Apaga: sincronizar é copiar as mudanças, inclusive a exclusão. Por isso existe a lixeira de 30 dias."
            ],
            [
              "Está correta: sincronizar copia os erros, e a lixeira tem prazo",
              "Isso. Sincronizar não é backup. Conferir também é reconhecer quando a resposta está certa."
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
            "\"Está no OneDrive, então está no meu PC.\"",
            "Pode estar só na nuvem (ícone de nuvem azul). Sem internet, esse arquivo não abre."
          ],
          [
            "\"Está sincronizado, então tenho backup.\"",
            "A sincronização copia também o que você apaga ou estraga. Backup é uma cópia que não muda junto."
          ],
          [
            "\"É grátis, então posso usar no meu negócio.\"",
            "Alguns planos grátis proíbem o uso comercial, como o Hobby da Vercel. Leia a regra do plano antes."
          ],
          [
            "\"Compartilhei por link, então é privado.\"",
            "\"Qualquer pessoa com o link\" abre para quem receber o link encaminhado, sem login."
          ],
          [
            "\"A empresa é grande, nunca vai cair.\"",
            "Em outubro de 2025, uma falha de DNS na Amazon parou milhares de serviços por horas. Tenha o importante em dois lugares."
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
          "p": "O que quer dizer um arquivo estar \"na nuvem\"?",
          "r": [
            "Está gravado em servidores de outra empresa, ligados o tempo todo.",
            "Você chega até ele pela internet, com o seu login.",
            "Ele pode estar também no seu aparelho, ou só lá."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Que perguntas fazer antes de pôr algo importante na nuvem?",
          "r": [
            "Quanto custa, e o que acontece, quando passar do limite grátis?",
            "Quem consegue ver?",
            "O que acontece se o serviço cair, bloquear a conta ou fechar?"
          ]
        }
      ],
      [
        "fontes",
        [
          [
            "Perguntas frequentes sobre o armazenamento da Microsoft (5 GB e o que acontece acima da cota)",
            "https://support.microsoft.com/pt-br/onedrive/microsoft-storage-faqs",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Economizar espaço em disco com Arquivos do OneDrive Sob Demanda, Microsoft",
            "https://support.microsoft.com/pt-br/onedrive/save-disk-space-with-onedrive-files-on-demand-for-windows",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Restaurar arquivos ou pastas excluídos no OneDrive (lixeira de 30 dias), Microsoft",
            "https://support.microsoft.com/pt-br/onedrive/restore-deleted-files-or-folders-in-onedrive",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Como funciona o armazenamento do Google (15 GB), Google One",
            "https://support.google.com/googleone/answer/9312312?hl=pt-BR",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Planos do GitHub, GitHub",
            "https://docs.github.com/pt/get-started/learning-about-github/githubs-plans",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Vercel Hobby Plan (uso pessoal e não comercial), Vercel",
            "https://vercel.com/docs/plans/hobby",
            "oficial",
            "02/11/2026"
          ],
          [
            "Amazon: This week’s AWS outage caused by major DNS failure, BleepingComputer",
            "https://www.bleepingcomputer.com/news/technology/amazon-this-weeks-aws-outage-caused-by-major-dns-failure/",
            "imprensa",
            "02/11/2026"
          ],
          [
            "Migrar do Claude Design independente para Claude (fecha em 14/12/2026), Anthropic",
            "https://support.claude.com/pt/articles/17440474-migrar-do-claude-design-independente-para-claude",
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
          "A nuvem é um lugar seguro por natureza: o que está lá não se perde",
          "Ela protege do aparelho perdido, mas não do erro sincronizado, da conta bloqueada nem do serviço que fecha."
        ],
        [
          "Nuvem é o computador de outra empresa, com as regras dela",
          "Isso. Por isso vale saber o custo, quem vê e o que acontece se o serviço parar."
        ],
        [
          "Nuvem e backup são a mesma coisa, só que a nuvem é automática",
          "Sincronizar copia até os erros. Backup é uma cópia que não muda junto."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você apagou sem querer um arquivo na pasta do OneDrive do PC. O que acontece com a cópia da nuvem?",
        "o": [
          [
            "Fica intacta na nuvem, porque a nuvem é o backup",
            "A sincronização copia a exclusão. Ela vai para a lixeira do OneDrive, e não fica intacta."
          ],
          [
            "Vai para a lixeira do OneDrive, por 30 dias",
            "Isso. Na conta pessoal, dá para recuperar por 30 dias; depois, some de vez."
          ],
          [
            "Some na hora, sem nenhum jeito de recuperar",
            "Há a lixeira, que guarda por 30 dias na conta pessoal."
          ]
        ],
        "c": 1
      },
      {
        "p": "Por que um site publicado na Vercel continua no ar com o seu PC desligado?",
        "o": [
          [
            "Porque o navegador de quem visita guarda o site",
            "O navegador guarda cópias temporárias; quem entrega o site é o servidor."
          ],
          [
            "Porque a Vercel copia o site do PC a cada visita",
            "A Vercel não busca nada no seu PC: os arquivos já estão nos servidores dela."
          ],
          [
            "Porque está nos servidores da Vercel, sempre ligados",
            "Isso. É o computador de outra empresa, ligado o tempo todo."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "A nuvem é mais segura que o meu PC?",
        "Contra perda, roubo e defeito do aparelho, sim, porque a empresa guarda cópias em vários discos. Contra alguém entrar na sua conta, depende da senha e da verificação em duas etapas. Contra a empresa parar ou fechar, só uma segunda cópia em outro lugar ajuda."
      ],
      [
        "O que é a nuvem azul no Explorador?",
        "É o OneDrive dizendo que o arquivo está só online: aparece na lista, mas não está no disco, e sem internet não abre. Para ter sem internet, clique com o botão direito e escolha \"Sempre manter neste dispositivo\"."
      ],
      [
        "Sincronizar não é backup? Por quê?",
        "Porque a sincronização copia todas as mudanças, inclusive apagar e estragar. Backup é uma cópia separada, que não muda quando o original muda. Na conta pessoal do OneDrive, a lixeira guarda o que foi apagado por 30 dias."
      ]
    ]
  },
  "0-8": {
    "tempo": 44,
    "video": "a0-8",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "O Claude terminou um {{site}} e disse \"abra http://{{localhost}}:8000\": no PC abriu, mas o mesmo endereço no celular deu erro, e no computador de outra pessoa também. Nada quebrou: esse endereço só existe dentro do seu próprio computador, e esta aula mostra por quê e o que muda quando um site é publicado.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Quando o Claude faz um site para você, quase sempre ele liga um {{servidor-local}} e entrega um endereço que começa com `http://localhost`. Isso é a oficina: você vê o site funcionando, do jeito que vai ficar, sem publicar nada. Mas a oficina tem duas regras que pegam todo iniciante. O endereço só funciona no seu PC, e só enquanto o {{programa}} que entrega as páginas estiver {{rodar|rodando}}."
      ],
      [
        "p",
        "Entender isso evita três tropeços comuns: mandar um link de localhost para um cliente, que não abre nada do lado dele; achar que o site \"sumiu\" depois de fechar uma janela, quando os {{arquivo|arquivos}} continuam todos na {{pasta}}; e se assustar com a tela \"Não é possível acessar esse site\", que aqui quase sempre quer dizer só \"o {{servidor}} está desligado\"."
      ],
      [
        "p",
        "E é o degrau antes de publicar. No módulo 15, os mesmos arquivos que você testa no localhost vão para um servidor de verdade, com {{dominio|domínio}} e {{https}}, como a aula 0.6 mostrou, e aí sim qualquer pessoa abre."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense no seu PC como um **prédio** com milhares de **salas numeradas**, que são as {{porta|portas}}. Ligar um servidor local é abrir uma sala, a 8000 por exemplo, e pôr alguém lá dentro para atender. A palavra **localhost** quer dizer \"este prédio, o prédio onde eu estou\". Quem está dentro do prédio, que é você no PC, bate na sala 8000 e é atendido. Quem está em outro prédio, como o seu celular ou o computador de um cliente, e diz \"localhost, sala 8000\", está falando do prédio onde ele mesmo está, e lá não tem ninguém naquela sala. Publicar o site é alugar uma **loja na avenida**: um endereço que qualquer pessoa da cidade acha, aberto o dia inteiro."
      ],
      [
        "quebra",
        "Num prédio de verdade, a sala existe mesmo vazia. Uma porta de rede só existe enquanto um programa está ouvindo nela: fechou o programa, a sala some, e quem bate recebe \"conexão recusada\". Um prédio de verdade também não deixa duas pessoas atenderem a mesma sala; o Windows, às vezes, deixa, e o laboratório quebrado desta aula é sobre isso. E, com outra configuração, gente da mesma rede Wi-Fi consegue bater na sua sala: a caixa \"Para ir mais fundo\" explica. Por fim, um aviso de vocabulário: na aula 0.0, a sala era a pasta em que o Claude Code trabalha; aqui, a sala é a porta de rede. São duas imagens diferentes, e nesta aula sala quer dizer sempre porta."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "localhost: o computador falando com ele mesmo"
      ],
      [
        "p",
        "Localhost é o nome que todo aparelho usa para falar consigo mesmo. Ele corresponde ao {{ip|endereço IP}} `127.0.0.1` (e ao `::1`, na versão nova dos endereços), e o próprio sistema resolve esse nome, sem perguntar ao {{dns|DNS}} da {{internet}}. Por isso, no PC, `localhost` é o PC; no celular, é o celular; no computador do cliente, é o computador do cliente. O link não está quebrado: ele quer dizer \"eu\" para cada aparelho que o abre."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: no PC, o {{navegador}} pede `http://localhost:8000`. O pedido nem sai do computador: vai do navegador direto para o programa que está ouvindo na porta 8000, que responde com a página. Agora o celular: o navegador do celular pede o mesmo endereço, olha para o próprio celular, não acha nenhum programa ouvindo na porta 8000 e mostra a tela de conexão recusada. Nenhum dos dois chegou a usar a internet."
      ],
      [
        "p",
        "Por que importa para você: um endereço com `localhost` nunca serve para mandar a outra pessoa. Quando o Claude disser \"está rodando em localhost\", leia como \"está rodando aqui, no seu PC, para você conferir\"."
      ],
      [
        "h3",
        "Porta: o número da sala"
      ],
      [
        "p",
        "Um computador roda muitos programas que usam a rede ao mesmo tempo, e a porta é o número que diz qual deles recebe cada conversa. Os sites publicados usam a 443 (https) e a 80 (http), e o navegador esconde esses números do endereço. Os servidores locais usam outros números, e cada ferramenta tem o seu costume: o servidor simples do {{python|Python}} usa a 8000; outras ferramentas que o Claude usa para sites costumam usar a 3000 ou a 5173. No endereço `http://localhost:8000`, o `:8000` é a porta."
      ],
      [
        "p",
        "Um exemplo: dá para ter dois sites locais abertos ao mesmo tempo, um em `localhost:8000` e outro em `localhost:8001`, cada um com o seu servidor. Por que importa para você: o número diz qual programa atende. Se o Claude ligar o projeto A na 3000 e, mais tarde, o projeto B também quiser a 3000, um dos dois precisa mudar de número, ou um desliga o outro."
      ],
      [
        "h3",
        "O servidor local: um programa que só vive enquanto roda"
      ],
      [
        "p",
        "O jeito mais simples de ter um servidor local no Windows é o Python, que traz um servidor pronto. O Python não vem com o Windows: o laboratório desta aula confere se ele está no seu PC e, se faltar, instala. O {{comando}} deste laboratório é `python -m http.server 8000 --bind 127.0.0.1`. Parte por parte: `python` roda o Python; `-m http.server` usa o servidor que já vem com ele, que entrega os arquivos da pasta onde você está; `8000` é a porta; e `--bind 127.0.0.1` manda ouvir só pedidos do próprio PC. Ao ligar, ele responde com esta linha, que é a saída real:"
      ],
      [
        "saida",
        "Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ..."
      ],
      [
        "p",
        "Em português: \"servindo HTTP no 127.0.0.1, porta 8000\". A janela fica ocupada: não aparece um cursor novo, porque o programa está esperando pedidos. Enquanto ela estiver aberta, o site existe. A cada página aberta, aparece uma linha nova, como estas, também reais:"
      ],
      [
        "saida",
        "127.0.0.1 - - [02/Nov/2026 04:35:40] \"GET / HTTP/1.1\" 200 -\n127.0.0.1 - - [02/Nov/2026 04:35:40] code 404, message File not found\n127.0.0.1 - - [02/Nov/2026 04:35:40] \"GET /favicon.ico HTTP/1.1\" 404 -"
      ],
      [
        "p",
        "A primeira linha é o navegador pedindo a página `/` e recebendo 200, o \"deu certo\" da aula 0.6. As outras duas são o navegador pedindo sozinho o iconezinho da aba, o `favicon.ico`; a pasta não tem esse arquivo, e o servidor responde 404. Não é erro seu. Quando o endereço não tem nome de arquivo, o servidor procura um `index.html` na pasta; se não achar, mostra a lista de todos os arquivos da pasta. Por isso, nunca ligue um servidor numa pasta como Documentos \"só para testar\": ele entregaria a lista de tudo o que está lá."
      ],
      [
        "p",
        "Para desligar, clique na janela do servidor e aperte Ctrl+C. A resposta real é esta, e o cursor volta:"
      ],
      [
        "saida",
        "Keyboard interrupt received, exiting."
      ],
      [
        "p",
        "Em português: \"recebi a interrupção do teclado, saindo\". A partir daí, recarregar a página no navegador do PC mostra esta tela, lida no Chrome em português no teste feito para esta aula:"
      ],
      [
        "saida",
        "Não é possível acessar esse site\n\nA conexão com localhost foi recusada.\n\nTente:\n\nVerificar a conexão\nVerificar o proxy e o firewall\nERR_CONNECTION_REFUSED"
      ],
      [
        "p",
        "`ERR_CONNECTION_REFUSED` quer dizer \"conexão recusada\": o pedido chegou ao prédio certo, mas ninguém atende na sala 8000. A internet não tem nada a ver com isso. E os arquivos continuam na pasta, intactos: ligando o servidor de novo, o site volta. A própria documentação do Python avisa que esse servidor não é recomendado para uso em produção, porque só faz verificações básicas de segurança. O trabalho dele é a oficina, não o público."
      ],
      [
        "h3",
        "Dois cliques no arquivo e servidor local não são a mesma coisa"
      ],
      [
        "p",
        "Na aula 0.3, você abriu um {{html|HTML}} com dois cliques, sem servidor nenhum. Nesse caso, o endereço na barra começa com `file:///C:/`, e o navegador lê o arquivo direto do {{disco}}. Funciona para página simples. Mas algumas coisas só funcionam quando a página chega por `http://`: uma página que busca outros arquivos com {{javascript|JavaScript}}, por exemplo, é bloqueada pelo Chrome quando aberta como arquivo, por segurança. Este curso é um caso desses: ele carrega as aulas sob demanda, e não abre com dois cliques no `index.html`. É por isso que, para sites de verdade, o Claude prefere ligar um servidor local, e não mandar você dar dois cliques."
      ],
      [
        "h3",
        "Site publicado: os mesmos arquivos, em outro computador"
      ],
      [
        "p",
        "Publicar é copiar os mesmos arquivos para um servidor que fica ligado o tempo todo, alcançável pela internet, com um endereço público, como os da aula 0.6, e com https. Nada muda nos arquivos; muda quem consegue chegar até eles e por quanto tempo. Veja lado a lado:"
      ],
      [
        "tabela",
        {
          "colunas": [
            "",
            "Servidor local",
            "Site publicado"
          ],
          "linhas": [
            [
              "Endereço",
              "`http://localhost:8000`",
              "`https://seusite.com.br` ou `seu-projeto.vercel.app`"
            ],
            [
              "Quem abre",
              "Só o seu PC",
              "Qualquer pessoa com o link"
            ],
            [
              "Quando funciona",
              "Enquanto o programa roda e o PC está ligado",
              "O tempo todo"
            ],
            [
              "https",
              "Não precisa",
              "Sim, em geral automático"
            ],
            [
              "Custo",
              "Zero",
              "Grátis até um limite, para site pequeno"
            ]
          ]
        }
      ],
      [
        "p",
        "Por que não publicar a partir do seu próprio PC: ele teria de ficar ligado o dia inteiro, com um endereço que muda de tempos em tempos, e você teria de abrir uma porta do seu computador para a internet inteira, o que expõe o PC a ataques. A {{hospedagem}} faz isso melhor, e de graça para site pequeno. Quando não usar o localhost: para mostrar o trabalho a alguém. Nesse caso, publique, mesmo que num endereço provisório, ou mande uma página publicada pelo próprio Claude, que a aula 6B.3 mostra."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Só o Python, que muitos PCs já têm. Se o comando responder \"Python was not found\", os passos 3 a 5 do laboratório instalam o Python; se ainda assim não funcionar, deixe o laboratório para depois da aula 2.2, que explica a instalação passo a passo.",
          "**Custa?** Nada. O servidor local roda no seu PC, sem conta e sem internet.",
          "**O servidor local deixa o meu PC exposto?** Com o `--bind 127.0.0.1`, só o próprio PC conversa com ele. Sem essa parte, o Python ouve a rede inteira, e aí outros aparelhos do mesmo Wi-Fi podem chegar: a caixa abaixo explica.",
          "**E se a porta 8000 estiver ocupada?** Use outra, como 8001, no comando e no endereço. E confira se não ficou um servidor antigo ligado: é o laboratório quebrado.",
          "**Por que o Claude usa 3000 ou 5173, e não 8000?** Cada ferramenta tem a sua porta de costume. O número muda; a ideia é a mesma."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: abrir o site local no celular, na mesma rede",
          "blocos": [
            [
              "p",
              "Sem o `--bind 127.0.0.1`, o servidor do Python ouve todas as interfaces de rede do PC, segundo a documentação dele. Aí o celular, no mesmo Wi-Fi, consegue abrir o site pelo IP do PC na rede de casa, um número como `192.168.0.15`, seguido de `:8000`. Na primeira vez, o Firewall do Windows costuma perguntar se o Python pode receber conexões; numa rede pública, como a de um café, a resposta segura é não."
            ],
            [
              "p",
              "Mesmo assim, isso não é publicar: só funciona dentro da mesma rede, enquanto o PC está ligado e o servidor está rodando. Para quem está fora da sua casa, o endereço continua não existindo."
            ],
            [
              "p",
              "`localhost` e `127.0.0.1` levam ao mesmo lugar. A diferença é só que um é nome e o outro é número."
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
          "pergunta": "O que você acha que este comando faz, se rodar dentro de uma pasta que tem um `index.html`?",
          "codigo": "python -m http.server 8000 --bind 127.0.0.1",
          "linguagem": "powershell",
          "resposta": "Liga um servidor local: um programa que entrega os arquivos da pasta onde você está para quem pedir, na porta 8000, e só para este computador, que é o que o `--bind 127.0.0.1` diz. Enquanto a janela estiver aberta, `http://localhost:8000` mostra o `index.html` no navegador do PC. A janela fica ocupada, mostrando uma linha a cada pedido; Ctrl+C desliga, e o endereço para de responder."
        }
      ],
      [
        "h2",
        "Pare e responda"
      ],
      [
        "pergunta",
        {
          "p": "O Claude terminou um site e disse \"está rodando em http://localhost:5173\". Você manda esse link para um cliente. O que acontece quando ele abre?",
          "o": [
            [
              "Abre o site, porque o link é o mesmo que funciona no seu PC",
              "O link é o mesmo, mas localhost quer dizer \"este aparelho\": no do cliente, aponta para o computador dele."
            ],
            [
              "Abre só se o seu PC estiver ligado com o servidor rodando",
              "Mesmo com o seu PC ligado, o localhost do cliente é o computador dele. Para ele abrir, o site precisa ser publicado."
            ],
            [
              "Dá erro: o localhost dele é o próprio computador dele",
              "Isso. Para outra pessoa abrir, o site precisa estar publicado num servidor com endereço público."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você fechou a janela do {{powershell|PowerShell}} e o site do localhost sumiu. O Claude explicou: \"Fechar a janela apagou os arquivos do site. Vou precisar criar tudo de novo antes de ligar o servidor outra vez.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Está correta: o servidor guarda os arquivos enquanto está ligado",
              "O servidor só lê os arquivos da pasta e entrega. Eles nunca saíram do disco."
            ],
            [
              "Errado: os arquivos estão na pasta; é só ligar o servidor",
              "Isso. Fechar a janela desligou o programa que entregava as páginas. Ligue o servidor de novo, e o site volta."
            ],
            [
              "Errado: o site continua no ar; é só recarregar a página",
              "Sem o programa rodando, ninguém atende na porta: recarregar mostra \"A conexão com localhost foi recusada\"."
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
            "\"Mandei o link do localhost, então o cliente consegue ver.\"",
            "Localhost é o aparelho de quem abre. Para outra pessoa ver, publique o site."
          ],
          [
            "\"Fechei o {{terminal}} e perdi o site.\"",
            "Os arquivos continuam na pasta. Fechar a janela só desligou o servidor: ligue de novo."
          ],
          [
            "\"Liguei o servidor de novo e aparece o site velho.\"",
            "Pode haver um servidor antigo ligado na mesma porta, em outra janela. Desligue-o com Ctrl+C, ou use outra porta."
          ],
          [
            "\"ERR_CONNECTION_REFUSED quer dizer que a internet caiu.\"",
            "Quer dizer que nenhum programa está atendendo naquela porta. O localhost nem usa a internet."
          ],
          [
            "\"Vou ligar o servidor na pasta Documentos para testar.\"",
            "Sem um index.html, ele mostra a lista de tudo o que está na pasta. Use uma pasta só com o site."
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
          "p": "Por que http://localhost:8000 abre no seu PC e não no celular?",
          "r": [
            "Localhost quer dizer \"este aparelho\", em cada aparelho.",
            "No PC, um programa está ouvindo na porta 8000; no celular, não.",
            "Para outras pessoas abrirem, o site precisa ser publicado."
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "O que acontece quando você aperta Ctrl+C na janela do servidor local?",
          "r": [
            "O programa servidor para.",
            "O endereço deixa de responder, com conexão recusada.",
            "Os arquivos continuam na pasta, e o site volta quando você liga de novo."
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
          "titulo": "Ligue um site no localhost e veja ele sumir",
          "lugar": "No PC, no PowerShell e no navegador; depois no celular",
          "tempo": "15 minutos, mais 5 se precisar instalar o Python",
          "antes": "Você vai ligar um servidor local de verdade, abrir o site no navegador do PC, ver que o celular não abre o mesmo endereço e ver o site sumir quando o servidor desliga. Precisa do Python no PC: os passos 2 a 5 conferem se ele está lá e, se faltar, instalam, do mesmo jeito que a aula 2.2. Os comandos foram rodados de verdade para escrever esta aula, no Windows 11 com o Python 3.12, numa pasta de teste (o Ctrl+C, com o sinal equivalente), e a tela do passo 13 foi lida no Chrome em português; as saídas abaixo são as reais, com a data e a hora daquele dia. Os passos 10 e 11, no celular, não foram testados em aparelho, nem a instalação dos passos 3 e 4. Pelo {{claude-code|Claude Code}}: você também pode colar no Claude Code \"crie C:\\Projetos\\site-local com um index.html simples e ligue nela, em segundo plano, um servidor com python -m http.server 8000 --bind 127.0.0.1\"; ele liga, e você desliga pedindo \"desligue o servidor que você ligou\". Esse caminho não foi testado, e nele você não vê a janela do servidor, que é a parte mais instrutiva. Pelo {{app|app}} do Claude não dá: o servidor precisa rodar no seu PC.",
          "passos": [
            {
              "faz": "Abra o terminal: aperte as teclas Windows e X juntas e escolha Terminal (em alguns PCs, Windows PowerShell).",
              "espera": "Abre uma janela com um texto como PS C:\\Users\\SeuNome> e o cursor piscando."
            },
            {
              "faz": "Confira se o Python está instalado: cole este comando e aperte Enter.",
              "cola": "python --version",
              "saida": "Python 3.12.10",
              "espera": "Aparece Python seguido de um número de versão; o seu pode ser outro. Se apareceu, pule para o passo 6. Se aparecer que o termo 'python' não é reconhecido, ou uma linha que começa com \"Python was not found\", o Python não está instalado: faça os passos 3 a 5."
            },
            {
              "faz": "Só se o passo 2 não mostrou a versão: instale o Python 3.12 com o {{winget}}, o instalador de programas que já vem no Windows. É a mesma instalação da aula 2.2, que explica cada detalhe com calma.",
              "cola": "winget install Python.Python.3.12",
              "espera": "O winget baixa o instalador oficial do python.org e instala. Na primeira vez, ele pode pedir para aceitar os termos das fontes: digite Y e aperte Enter. Se o Windows perguntar se o programa pode fazer alterações, clique em Sim. O winget costuma terminar com \"Successfully installed\". Não testado: o PC do teste já tinha o Python."
            },
            {
              "faz": "Só se instalou no passo 3: feche o terminal e abra outro, como no passo 1.",
              "espera": "Abre um terminal novo. Só um terminal aberto depois da instalação enxerga o Python; o que já estava aberto não vê o programa novo."
            },
            {
              "faz": "Só se instalou: confira de novo no terminal novo.",
              "cola": "python --version",
              "saida": "Python 3.12.10",
              "espera": "Aparece Python 3.12 seguido de um número. Se ainda disser que não reconhece o termo, veja \"Se der errado\"."
            },
            {
              "faz": "Cole este comando e aperte Enter. Ele cria a pasta C:\\Projetos\\site-local, entra nela e grava um index.html com uma frase.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\site-local | Out-Null; Set-Location C:\\Projetos\\site-local; Set-Content -Path index.html -Encoding utf8 -Value '<meta charset=\"utf-8\"><h1>Meu site local</h1><p>Se você está lendo isto, o servidor está ligado.</p>'",
              "espera": "Nada aparece além de uma linha nova, que agora começa com PS C:\\Projetos\\site-local>: a pasta e o arquivo foram criados."
            },
            {
              "faz": "Cole este comando e aperte Enter:",
              "cola": "python -m http.server 8000 --bind 127.0.0.1",
              "saida": "Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ...",
              "espera": "Aparece essa linha e a janela fica presa, sem um PS novo: o servidor está rodando. Deixe essa janela aberta."
            },
            {
              "faz": "Abra o navegador do PC, como o Chrome ou o Edge.",
              "espera": "O navegador abre numa página qualquer, com a barra de endereço no alto."
            },
            {
              "faz": "Clique na barra de endereço, cole o endereço abaixo e aperte Enter.",
              "cola": "http://localhost:8000",
              "saida": "127.0.0.1 - - [02/Nov/2026 04:35:40] \"GET / HTTP/1.1\" 200 -\n127.0.0.1 - - [02/Nov/2026 04:35:40] code 404, message File not found\n127.0.0.1 - - [02/Nov/2026 04:35:40] \"GET /favicon.ico HTTP/1.1\" 404 -",
              "espera": "Aparece \"Meu site local\" em letras grandes, com a frase embaixo. Na janela do PowerShell surgem linhas como as do quadro, com a sua data e hora: o 200 é a página entregue; o 404 é o navegador pedindo o ícone da aba, que a pasta não tem, e não é erro seu."
            },
            {
              "faz": "No celular, abra o navegador.",
              "espera": "O navegador do celular abre, com a barra de endereço no alto. Não testado em aparelho."
            },
            {
              "faz": "Na barra de endereço do celular, digite o mesmo endereço, http://localhost:8000, e toque em Ir.",
              "espera": "Erro. No Chrome do celular, uma tela como \"Não é possível acessar esse site\", com ERR_CONNECTION_REFUSED: o localhost do celular é o próprio celular, e lá nada atende na porta 8000. Este passo não foi testado em aparelho."
            },
            {
              "faz": "Na janela do PowerShell, aperte as teclas Ctrl e C juntas.",
              "saida": "Keyboard interrupt received, exiting.",
              "espera": "O servidor para, e a linha PS C:\\Projetos\\site-local> volta."
            },
            {
              "faz": "No navegador do PC, recarregue a página com F5.",
              "saida": "Não é possível acessar esse site\n\nA conexão com localhost foi recusada.\n\nTente:\n\nVerificar a conexão\nVerificar o proxy e o firewall\nERR_CONNECTION_REFUSED",
              "espera": "O site sumiu do navegador, mas os arquivos continuam na pasta: ninguém atende mais na porta 8000."
            },
            {
              "faz": "Para ligar o servidor de novo: no PowerShell, aperte a seta para cima, que traz o último comando de volta, e aperte Enter.",
              "saida": "Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ...",
              "espera": "A mesma linha do passo 7 aparece, e a janela fica presa de novo: o servidor voltou."
            },
            {
              "faz": "No navegador do PC, aperte F5.",
              "espera": "O site volta, porque os arquivos nunca saíram da pasta."
            },
            {
              "faz": "Para terminar, na janela do PowerShell, aperte Ctrl e C juntas.",
              "saida": "Keyboard interrupt received, exiting.",
              "espera": "O servidor para de vez, e a linha PS C:\\Projetos\\site-local> volta."
            }
          ],
          "errado": "se o passo 2 ou o 7 responder \"Python was not found; run without arguments to install from the Microsoft Store, or disable this shortcut from Settings > Apps > Advanced app settings > App execution aliases.\", o Windows só tem um atalho para a loja, e não o Python de verdade; se responder que o termo \"python\" não é reconhecido, o Python não está instalado. Nos dois casos, faça os passos 3 a 5; se o passo 5 ainda não mostrar a versão, a aula 2.2 explica o que fazer, e este laboratório pode esperar até lá. Se o navegador mostrar outro site, ou um site velho, pode haver um servidor antigo ligado na mesma porta: é o laboratório quebrado abaixo. Se o passo 9 mostrar uma lista de arquivos em vez da página, o servidor foi ligado numa pasta sem index.html: aperte Ctrl+C, confira se a linha começa com PS C:\\Projetos\\site-local> e ligue de novo.",
          "naoTestado": "Os passos 10 e 11, no celular, não foram rodados em aparelho: o teste foi feito só no PC. A instalação do Python (passos 3 e 4) também não foi rodada, porque o PC do teste já tinha o Python 3.12.10; o comando é o mesmo da aula 2.2. O caminho alternativo pelo Claude Code, descrito no começo, também não foi rodado, porque exige o Claude Code interativo. Os comandos, as saídas do servidor e a tela do Chrome no PC foram testados de verdade."
        }
      ],
      [
        "h2",
        "Laboratório quebrado"
      ],
      [
        "quebrado",
        {
          "titulo": "Laboratório quebrado: o site velho que não sai da tela",
          "texto": "Alguém ligou o servidor da pasta site-local numa janela do PowerShell e minimizou a janela. Mais tarde, pediu ao Claude um site novo em outra pasta, abriu outra janela do PowerShell nessa pasta e rodou o comando abaixo. A janela nova respondeu normalmente. Mas o navegador, em http://localhost:8000, continua mostrando o site velho, mesmo com F5. E, enquanto a página recarrega, a janela nova não mostra nenhuma linha de pedido. Descubra o motivo antes de ver a causa.",
          "cola": "python -m http.server 8000 --bind 127.0.0.1",
          "saida": "Serving HTTP on 127.0.0.1 port 8000 (http://127.0.0.1:8000/) ...",
          "dica": "O problema não está no comando nem nos arquivos novos. Pense em quem está respondendo: se a janela nova não registra pedido nenhum, outro programa está atendendo na porta 8000.",
          "resposta": "O servidor antigo continua ligado, na janela minimizada, na mesma porta 8000. No Windows, o Python deixa o segundo servidor ligar numa porta já ocupada sem dar erro, e quem responde é o antigo: no teste feito para esta aula, ele atendeu 6 pedidos de 6, embora o Windows não garanta qual dos dois atende. O conserto: ache a janela antiga e aperte Ctrl+C, ou feche a janela; depois recarregue a página. Outro caminho é usar outra porta no servidor novo, como 8001, e abrir http://localhost:8001. Para ver quem está ouvindo numa porta, o comando `netstat -ano | findstr :8000` mostra uma linha LISTENING por servidor; no teste, apareceram duas, `TCP 127.0.0.1:8000 0.0.0.0:0 LISTENING 42640` e outra igual terminando em 10832, que é o número de cada programa no Windows."
        }
      ],
      [
        "fontes",
        [
          [
            "Como configurar um servidor de testes local, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "http.server (aviso de produção, --bind e porta 8000), documentação do Python",
            "https://docs.python.org/pt-br/3/library/http.server.html",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Port (glossário), MDN",
            "https://developer.mozilla.org/pt-BR/docs/Glossary/Port",
            "comunidade",
            "02/11/2026",
            "pt"
          ],
          [
            "netstat, Microsoft",
            "https://learn.microsoft.com/pt-br/windows-server/administration/windows-commands/netstat",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "O que é um servidor web?, MDN",
            "https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server",
            "comunidade",
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
          "O localhost é o endereço do seu site na internet enquanto o PC está ligado",
          "O localhost nem usa a internet: cada aparelho entende como ele mesmo. Para os outros, só publicando."
        ],
        [
          "O localhost é o seu PC falando com ele mesmo; para os outros abrirem, publique",
          "Isso. O servidor local é a oficina; o site publicado fica num servidor ligado sempre."
        ],
        [
          "Fechar o servidor local apaga o site, e publicar é a única cópia segura",
          "Fechar o servidor só desliga quem entrega as páginas. Os arquivos continuam na pasta."
        ]
      ],
      "c": 1
    },
    "prova": [
      {
        "p": "Você abre http://localhost:8000 no celular, com o servidor rodando no PC. O que acontece?",
        "o": [
          [
            "Abre o site do PC, porque é a mesma internet",
            "O localhost do celular é o próprio celular. O pedido nem sai dele."
          ],
          [
            "Dá erro: o localhost do celular é o próprio celular",
            "Isso. Lá não há programa nenhum atendendo na porta 8000."
          ],
          [
            "Abre só se o celular estiver no mesmo Wi-Fi do PC",
            "Mesmo na mesma rede, \"localhost\" no celular aponta para o celular. Na mesma rede, seria preciso usar o IP do PC."
          ]
        ],
        "c": 1
      },
      {
        "p": "O que quer dizer o :8000 em http://localhost:8000?",
        "o": [
          [
            "É a porta: o número do programa que atende",
            "Isso. Cada servidor ouve numa porta, e o número diz qual programa recebe o pedido."
          ],
          [
            "É a velocidade da conexão com o servidor local",
            "Não tem a ver com velocidade. É o número da porta."
          ],
          [
            "É a versão do site que está sendo aberta agora",
            "Não tem a ver com versão. É o número da porta em que o servidor ouve."
          ]
        ],
        "c": 0
      }
    ],
    "tutor": [
      [
        "Por que o localhost não abre no celular?",
        "Porque localhost quer dizer \"este aparelho\". No celular, ele aponta para o próprio celular, onde nenhum programa atende na porta 8000. Para outras pessoas abrirem, o site precisa ser publicado num servidor com endereço público."
      ],
      [
        "Fechei o terminal. Perdi o site?",
        "Não. Os arquivos continuam na pasta. Fechar a janela só desligou o programa que entregava as páginas. Ligue o servidor de novo na mesma pasta, e o site volta."
      ],
      [
        "O que é ERR_CONNECTION_REFUSED?",
        "É o navegador dizendo que chegou ao computador certo, mas nenhum programa atendeu naquela porta. No localhost, quase sempre quer dizer que o servidor está desligado, ou ligado em outra porta."
      ]
    ]
  },
  "0-9": {
    "tempo": 39,
    "video": "a0-9",
    "videoTipo": "curto",
    "opcional": false,
    "abertura": "Você pediu ao Claude \"faça o {{site}} da minha empresa\" e recebeu uma página pronta, colorida, cheia de textos inventados, quando o que você queria era primeiro decidir o que vai em cada tela. Isso acontece quando não se pede o rascunho certo: esta aula ensina a pedir {{wireframe}}, {{mock}} e {{prototipo|protótipo}} pelo nome, cada um na hora dele.",
    "blocos": [
      [
        "h2",
        "Para que serve"
      ],
      [
        "p",
        "Ir direto ao site pronto custa caro em mudança. Numa página acabada, trocar um bloco de lugar mexe em cores, espaços, textos e {{codigo|código}}, e uma mudança puxa outra. Por isso quem desenha telas trabalha em etapas, cada uma com mais {{fidelidade}}, ou seja, mais parecida com o resultado final: primeiro a estrutura, depois a aparência, depois o comportamento. Com o Claude, cada etapa leva minutos, mas a lógica continua valendo: decidir a ordem antes da cor, e a cor antes do código."
      ],
      [
        "p",
        "Os nomes importam na hora de pedir. \"Faça um wireframe\" traz caixas cinza com rótulos. \"Faça um mock\" traz uma tela com cara de pronta, mas parada. \"Faça um protótipo\" traz algo em que dá para clicar. E \"faça o site\" traz tudo de uma vez, com o Claude decidindo sozinho o que vai em cada tela, a cor, o texto e a ordem. Pedir pelo nome é o jeito de manter as decisões com você."
      ],
      [
        "p",
        "E cada etapa é um ponto de aprovação. No módulo 15, você vai aprovar um wireframe antes de o Claude escrever o site; e o mock aprovado vira a referência para conferir se o site construído ficou como combinado, uma conferência que você consegue fazer sem ler código."
      ],
      [
        "h2",
        "A explicação com analogia"
      ],
      [
        "p",
        "Pense na construção de um apartamento. O **wireframe** é a **planta baixa**: mostra onde fica cada cômodo, o tamanho e a porta, sem cor de parede nem móvel. O **mock** é a **imagem decorada** do folheto de vendas: tudo com cor, luz e móveis, com a cara exata do apartamento pronto, mas é uma imagem, e ninguém entra nela. O **protótipo** é o **apartamento decorado** do estande: você entra, abre portas, senta no sofá e percebe se o corredor é apertado, mas o encanamento não está ligado e ninguém mora ali."
      ],
      [
        "quebra",
        "Numa obra, mudar a planta depois de levantar as paredes é caríssimo, e ninguém pula a planta. Com o Claude, refazer um wireframe custa uma frase, e numa página simples dá para pular etapas sem drama. E, em software, o protótipo às vezes vira o primeiro pedaço do produto de verdade, coisa que apartamento decorado nunca vira. Além disso, a imagem do folheto tem um tamanho só, enquanto um mock de tela precisa ser pensado no celular e no PC."
      ],
      [
        "h2",
        "Como funciona"
      ],
      [
        "h3",
        "Wireframe: a planta da tela"
      ],
      [
        "p",
        "O Wireframe mostra o que vai em cada tela e em que ordem, sem decidir a aparência. São caixas, linhas e rótulos, quase sempre em cinza, com texto de exemplo entre colchetes, como `[Foto do bolo]` ou `[Botão: Encomendar]`. A falta de cor é de propósito: sem cor, você julga a estrutura e o conteúdo, e não se distrai discutindo o tom de rosa."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: a página inicial de uma confeitaria que recebe encomendas pelo site, pensada para o celular. O wireframe tem, de cima para baixo: `[Logo]`, `[Título: Bolos por encomenda]`, `[Foto do bolo]`, `[Botão: Encomendar]`, `[Os três sabores mais pedidos]` e `[Rodapé: endereço e WhatsApp]`. Olhando no celular, você percebe que a foto é grande e empurra o botão para baixo: a pessoa precisa rolar para achar o que mais importa. Você pede \"suba o botão para logo abaixo do título\", e pronto: uma frase, uma decisão importante tomada antes de existir qualquer cor ou código."
      ],
      [
        "p",
        "Por baixo, o Claude pode fazer o wireframe como uma página {{html|HTML}} de caixas cinza, que abre no {{navegador}} como qualquer {{arquivo}} da aula 0.3, ou como um desenho numa tela de design, que a seção sobre pedidos mostra adiante. Por que importa para você: é no wireframe que se decide o que o site faz, e essa decisão é sua, não do Claude. Quando não usar: numa mudança pequena numa página que já existe, ou numa página de um bloco só; aí, peça direto."
      ],
      [
        "h3",
        "Mock: a cara final, parada"
      ],
      [
        "p",
        "O mock (de \"mockup\", maquete em inglês) é a tela com a aparência final: cores, fontes, imagens e textos de verdade. Ele responde à pergunta \"como vai parecer?\". Mas é parado: os botões não fazem nada, porque ninguém programou o comportamento ainda."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: com o wireframe aprovado, você pede \"agora faça o mock: rosa e marrom, fonte com cara de confeitaria, o texto real do cardápio e o nome Doce Ponto\". O Claude devolve a mesma estrutura, já vestida. Você mostra para a sócia e para dois clientes, ouve que o rosa está forte demais e pede um tom mais claro. Ninguém escreveu o sistema de encomendas ainda, e a aparência já está aprovada."
      ],
      [
        "p",
        "Por baixo, o mock pode ser uma imagem, como um PNG, ou uma página HTML sem comportamento. Por que importa para você: aprovar a aparência com outras pessoas antes do código evita refazer o site depois; e o mock aprovado é a régua para conferir o resultado final. Quando não usar: quando a aparência ainda não importa, como numa ferramenta só sua; aí, pule do wireframe para o protótipo. Um aviso de vocabulário: em programação, \"mock\" também quer dizer outra coisa, uma peça falsa usada em testes. O contexto diz qual é."
      ],
      [
        "h3",
        "Protótipo: dá para clicar"
      ],
      [
        "p",
        "O protótipo se comporta como o produto: botões respondem, telas mudam, um formulário mostra um resultado. Mas não tem nada por trás: nenhum pedido é guardado, nenhum pagamento acontece, nenhuma mensagem sai. Ele responde à pergunta \"funciona do jeito que a pessoa espera?\"."
      ],
      [
        "p",
        "Um exemplo do começo ao fim: o protótipo do fluxo de encomenda. Você toca em \"Encomendar\", escolhe o sabor, escolhe a data e vê a tela \"Encomenda recebida!\". Você entrega o celular a uma amiga, pede \"encomende um bolo de chocolate para sexta\" e só observa. Ela trava na escolha da data, porque o calendário começa no mês errado. Você descobriu um problema de fluxo antes de existir o sistema de verdade, e nenhum bolo foi encomendado de fato."
      ],
      [
        "p",
        "Por baixo, o protótipo costuma ser uma página HTML com {{javascript|JavaScript}} que finge as respostas, ou um protótipo interativo feito numa ferramenta de design. A parte que guardaria a encomenda e avisaria a confeitaria, o {{backend}}, não existe. Por que importa para você: o protótipo pega erro de caminho com gente de verdade, barato. Quando não usar: como se fosse o produto. Ele parece pronto, e é justamente por isso que é perigoso pôr um protótipo na frente de clientes como se recebesse pedidos."
      ],
      [
        "tabela",
        {
          "colunas": [
            "Etapa",
            "Responde a",
            "Tem cor?",
            "Dá para clicar?",
            "Como pedir"
          ],
          "linhas": [
            [
              "Wireframe",
              "O que vai em cada tela, e em que ordem?",
              "Não, só cinza",
              "Não",
              "\"Faça um wireframe em tons de cinza, só caixas e rótulos\""
            ],
            [
              "Mock",
              "Como vai parecer?",
              "Sim, a final",
              "Não",
              "\"Faça o mock com estas cores e estes textos\""
            ],
            [
              "Protótipo",
              "Funciona do jeito que a pessoa espera?",
              "Pode ter ou não",
              "Sim, sem guardar nada",
              "\"Faça um protótipo clicável do fluxo de encomenda\""
            ]
          ]
        }
      ],
      [
        "h3",
        "Como pedir ao Claude, hoje"
      ],
      [
        "p",
        "Em novembro de 2026, há três caminhos, conferidos na documentação oficial em português em 02/11/2026."
      ],
      [
        "p",
        "O primeiro é pedir ao {{claude-code|Claude Code}} um arquivo HTML: \"crie wireframe.html com o wireframe da página inicial da confeitaria\". Funciona em qualquer plano que tenha o Claude Code, o arquivo fica na sua {{pasta}} e abre no navegador sem conta nem {{internet}}. É o caminho do laboratório."
      ],
      [
        "p",
        "O segundo é o `/design`, uma {{skill}} que vem com o Claude Code. Você digita `/design` seguido de um resumo do que quer, e o Claude rascunha o desenho como pranchetas numa tela de design e publica tudo como um {{artifact}} do Claude Design: uma página privada no claude.ai, que abre no navegador do PC. Lá você seleciona um elemento e altera à mão, as mudanças se salvam sozinhas, e cada prancheta pode ser exportada como PNG ou PDF. A documentação pede o Claude Code numa {{versao|versão}} recente (o número está na fonte desta aula), uma {{sessao|sessão}} em que os artifacts estejam disponíveis, o que exige login com a conta do claude.ai num plano pago, e o modelo Design ativado na conta. A documentação fala em mockups, fluxos de tela, páginas de destino e pôsteres; para sair um wireframe, diga no pedido \"em tons de cinza, só caixas e rótulos\"."
      ],
      [
        "p",
        "O terceiro é o {{app|app}} do Claude, no navegador ou no celular: numa conversa, peça um design, ou escolha a opção de saída Design na caixa de mensagem. A central de ajuda diz que o Claude Design está nos planos Free, Pro, Max, Ultra, Team e Enterprise, e que nos apps de celular basta pedir um design em qualquer conversa; o resultado começa privado e fica na aba de artifacts. Um aviso: o site separado do Claude Design, em `claude.ai/design`, fecha em 14 de dezembro de 2026. Não comece projeto lá."
      ],
      [
        "p",
        "Em qualquer caminho, o pedido bom diz quem vai usar, em que aparelho (celular primeiro, quase sempre), quais telas, o que cada uma precisa fazer e o que ainda não é para decidir, como cor e logo. Por que importa para você: o arquivo HTML é seu e não depende de conta; o `/design` é mais fácil de ajustar à mão e de exportar; e o app funciona do celular, quando você está longe do PC."
      ],
      [
        "h3",
        "As perguntas que você deve estar se fazendo"
      ],
      [
        "lista",
        [
          "**Preciso instalar alguma coisa?** Não. O caminho do arquivo HTML usa o Claude Code da aula 0.0; o `/design` vem com o Claude Code atualizado; o app você já tem.",
          "**Custa?** Gasta do limite do seu plano, como qualquer pedido. Uma página caprichada gasta mais que texto simples, e um wireframe cinza é dos pedidos mais leves.",
          "**Preciso seguir as três etapas sempre?** Não. Para uma página simples, dá para pular. Quanto mais telas e mais gente envolvida, mais cada etapa vale.",
          "**Um rabisco no papel vale como wireframe?** Vale. Fotografe e mande ao Claude, que lê imagens, pedindo para transformar em wireframe.",
          "**E o Figma?** É a ferramenta profissional mais conhecida para essas etapas. Este curso não precisa dela."
        ]
      ],
      [
        "fundo",
        {
          "titulo": "Para ir mais fundo: fidelidade baixa e alta",
          "blocos": [
            [
              "p",
              "Os designers falam em fidelidade baixa e alta, e as fontes nem sempre concordam nos nomes. Para o Nielsen Norman Group, referência em usabilidade, um protótipo pode ser até de papel: uma pessoa faz o papel do computador e troca as folhas conforme o usuário \"toca\". Nesse sentido, o que separa protótipo de mock não é o clique funcionar, e sim testar o fluxo com alguém. Já em textos de divulgação, como o do Tecnoblog, o protótipo é o que dá para clicar. Esta aula usa o sentido mais comum no dia a dia, o clicável."
            ],
            [
              "p",
              "Quem faz muitos sites junta cores, fontes e peças repetidas, como botões e cartões, num sistema de design, para que todo mock saia com a mesma cara. O `/design-sync` leva o sistema de design de um projeto para o Claude Design; ele ainda depende do site separado que fecha em 14/12/2026, segundo a documentação."
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
          "pergunta": "O que você acha que aparece na tela com este código: um wireframe, um mock ou um protótipo?",
          "codigo": "<div style=\"border:2px dashed #999;padding:6px;width:90px\">[Logo]</div>\n<h2 style=\"color:#555\">[Título: Bolos por encomenda]</h2>\n<div style=\"background:#ddd;height:70px;padding-top:24px;text-align:center\">[Foto do bolo]</div>\n<p><button>[Botão: Encomendar]</button></p>",
          "linguagem": "html",
          "resposta": "Um wireframe: caixas cinza, rótulos entre colchetes e nenhuma cor de marca. Ele diz o que vai em cada lugar (logo, título, foto, botão) e em que ordem, sem decidir a aparência. Toque nos botões abaixo para ver o mesmo pedaço virar mock, com cor e texto de verdade, e depois protótipo, com um botão que responde ao toque.",
          "vivo": [
            [
              "Virar mock",
              "<div style=\"font:bold 20px Georgia;color:#7a3e1d\">Doce Ponto</div>\n<h2 style=\"color:#c2185b;font-family:Georgia\">Bolos por encomenda</h2>\n<div style=\"background:#f8d7e3;height:70px;font-size:48px;text-align:center\">🎂</div>\n<p><button style=\"background:#c2185b;color:#fff;border:0;padding:10px 18px;border-radius:20px\">Encomendar</button></p>"
            ],
            [
              "Virar protótipo (toque em Encomendar)",
              "<div style=\"font:bold 20px Georgia;color:#7a3e1d\">Doce Ponto</div>\n<h2 style=\"color:#c2185b;font-family:Georgia\">Bolos por encomenda</h2>\n<div style=\"background:#f8d7e3;height:70px;font-size:48px;text-align:center\">🎂</div>\n<details><summary style=\"background:#c2185b;color:#fff;padding:10px 18px;border-radius:20px;cursor:pointer\">Encomendar</summary><p>Escolha o sabor: cenoura, chocolate ou limão.</p></details>"
            ],
            [
              "Voltar ao wireframe",
              "<div style=\"border:2px dashed #999;padding:6px;width:90px\">[Logo]</div>\n<h2 style=\"color:#555\">[Título: Bolos por encomenda]</h2>\n<div style=\"background:#ddd;height:70px;padding-top:24px;text-align:center\">[Foto do bolo]</div>\n<p><button>[Botão: Encomendar]</button></p>"
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
          "p": "Você quer mostrar a uma sócia como vai ficar a página do site, com as cores e os textos, antes de alguém escrever o código. O que pedir ao Claude?",
          "o": [
            [
              "Um wireframe, com as seções na ordem certa",
              "O wireframe mostra a estrutura, sem cor nem texto final. Para aprovar a aparência, o pedido é o mock."
            ],
            [
              "Um protótipo, com os botões funcionando",
              "O protótipo testa o comportamento. Para aprovar só a aparência, o mock basta e sai mais rápido."
            ],
            [
              "Um mock, com cores, fontes e textos reais",
              "Isso. O mock mostra a cara final, parada, para aprovar a aparência."
            ]
          ],
          "c": 2
        }
      ],
      [
        "pergunta",
        {
          "titulo": "Agora duvide",
          "p": "Você perguntou se o protótipo clicável já pode ir para os clientes fazerem encomendas, e o Claude respondeu: \"Ainda não: o protótipo só simula. Nada é guardado nem enviado; para receber pedidos, falta o backend.\" Essa resposta está certa? Se não, o que está errado?",
          "o": [
            [
              "Errado: se dá para clicar até o fim, o pedido já ficou registrado",
              "Clicar até o fim só mostra a tela de confirmação; num protótipo, o pedido não vai para lugar nenhum."
            ],
            [
              "Está correta: o protótipo simula, mas não guarda nem envia nada",
              "Isso. O protótipo testa o fluxo com pessoas; receber pedido exige backend. Conferir também é reconhecer quando a resposta está certa."
            ],
            [
              "Errado: protótipo é só uma imagem, e não dá para clicar em nada nele",
              "Quem não responde ao clique é o mock. O protótipo responde, só não guarda nada."
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
            "\"Pedi o site direto, e o Claude decidiu tudo sozinho.\"",
            "Sem wireframe, quem decide o que vai em cada tela é o Claude. Peça a estrutura primeiro."
          ],
          [
            "\"O protótipo funciona, então o sistema está pronto.\"",
            "O protótipo simula: nada é guardado nem enviado. Falta o backend."
          ],
          [
            "\"Wireframe feio é wireframe mal feito.\"",
            "A falta de cor é de propósito: faz você julgar a ordem e o conteúdo, e não a aparência."
          ],
          [
            "\"Mock e protótipo são a mesma coisa.\"",
            "O mock é a aparência, parada; o protótipo é o comportamento, clicável. Dá para ter um sem o outro."
          ],
          [
            "\"Vou fazer no claude.ai/design.\"",
            "O site separado do Claude Design fecha em 14/12/2026. Use o /design no Claude Code ou peça um design numa conversa do app."
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
          "p": "Que pergunta cada etapa responde?",
          "r": [
            "Wireframe: o que vai em cada tela, e em que ordem?",
            "Mock: como vai parecer?",
            "Protótipo: funciona do jeito que a pessoa espera?"
          ]
        }
      ],
      [
        "lembrar",
        {
          "p": "Por que pedir o wireframe antes do site pronto?",
          "r": [
            "Mudar a ordem num wireframe custa uma frase.",
            "Sem cor, você julga a estrutura, e não a aparência.",
            "Quem decide o que vai em cada tela é você, e não o Claude."
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
          "titulo": "Peça um wireframe e mude a ordem",
          "lugar": "No PC, com o Claude Code; ou no app do Claude",
          "tempo": "15 minutos",
          "antes": "Você vai pedir ao Claude Code o wireframe da página inicial de uma confeitaria, abrir no navegador, pedir uma mudança de ordem e ver que mudar um wireframe custa uma frase. Precisa do Claude Code, como a aula 0.0 ensina. O pedido do passo 5 e o do passo 10 foram seguidos de verdade pelo Claude que escreveu esta aula, numa pasta de teste, em 02/11/2026: saiu um wireframe.html de caixas cinza, que abriu no navegador e se empilhou numa coluna na largura de um celular. Como o Claude conversa e cada resposta é nova, o seu arquivo vai sair com outro desenho e as mesmas seções. Os passos 12 e 13, com o /design e com o app, não foram testados, porque exigem a sua conta e o Claude Code aberto numa conversa de verdade.",
          "passos": [
            {
              "faz": "Abra o {{terminal}}: aperte as teclas Windows e X juntas e escolha Terminal (em alguns PCs, Windows {{powershell|PowerShell}}).",
              "espera": "Abre uma janela com uma linha parecida com PS C:\\Users\\SeuNome>."
            },
            {
              "faz": "Cole este {{comando}} e aperte Enter. Ele cria a pasta C:\\Projetos\\wireframe, fora do OneDrive; se ela já existir, não apaga nada.",
              "cola": "New-Item -ItemType Directory -Force C:\\Projetos\\wireframe",
              "espera": "Uma tabelinha com a letra d (de diretório, outro nome para pasta) e o nome wireframe, com a data e a hora do seu PC."
            },
            {
              "faz": "Cole este comando e aperte Enter.",
              "cola": "cd C:\\Projetos\\wireframe",
              "espera": "Nada é impresso, mas o começo da linha muda para PS C:\\Projetos\\wireframe>."
            },
            {
              "faz": "Digite claude e aperte Enter.",
              "cola": "claude",
              "espera": "O Claude Code abre e mostra, no alto da tela, a pasta C:\\Projetos\\wireframe. Se ele perguntar se você confia nos arquivos dessa pasta, confirme: ela é sua e está vazia."
            },
            {
              "faz": "Cole este pedido e aperte Enter. Se ele pedir {{permissao|permissão}} para criar arquivos, aceite.",
              "cola": "Crie nesta pasta um arquivo wireframe.html com o wireframe da página inicial de uma confeitaria que recebe encomendas pelo site, pensada para celular. Use só tons de cinza, caixas com borda tracejada e rótulos entre colchetes, como [Logo], [Foto do bolo] e [Botão: Encomendar]. Nada de cor, fonte especial, imagem ou código buscado da internet. Inclua: logo, título, foto, botão de encomendar, os três sabores mais pedidos e um rodapé com endereço e WhatsApp. No fim, me diga o caminho completo do arquivo e liste as seções na ordem em que aparecem.",
              "espera": "O Claude cria o arquivo e responde com um caminho parecido com C:\\Projetos\\wireframe\\wireframe.html e a lista das seções, de cima para baixo."
            },
            {
              "faz": "Sem fechar o terminal, abra o {{explorador|Explorador}} com as teclas Windows e E.",
              "espera": "Abre a janela de pastas do Windows."
            },
            {
              "faz": "Clique num espaço vazio da barra de endereço, no alto do Explorador, cole o caminho abaixo e aperte Enter.",
              "cola": "C:\\Projetos\\wireframe",
              "espera": "Aparece a pasta wireframe com o arquivo wireframe.html."
            },
            {
              "faz": "Dê dois cliques em wireframe.html.",
              "espera": "O navegador abre uma página de caixas cinza com rótulos entre colchetes, sem cor nenhuma: é um wireframe, e não um site pronto."
            },
            {
              "faz": "Puxe a borda da janela do navegador até ela ficar estreita como um celular.",
              "espera": "As caixas se empilham numa coluna. Repare onde o botão de encomendar ficou: se a foto vem antes dele, o botão desce, e no celular a pessoa precisa rolar para achar."
            },
            {
              "faz": "Volte ao Claude Code, cole este pedido e aperte Enter.",
              "cola": "No wireframe.html, suba o botão de encomendar para logo abaixo do título, antes da foto. Não mude mais nada e me diga a nova ordem das seções.",
              "espera": "O Claude muda o arquivo e lista a nova ordem, com o botão logo depois do título."
            },
            {
              "faz": "No navegador, recarregue a página com F5.",
              "espera": "O botão aparece antes da foto. A mudança custou uma frase; num site pronto, com cores e código, a mesma troca mexe em muito mais coisa."
            },
            {
              "faz": "Opcional, com o /design: no Claude Code, cole o pedido abaixo. Se o comando não aparecer, ou responder que não está disponível, pule este passo.",
              "cola": "/design wireframe em tons de cinza, só caixas e rótulos, da página inicial de uma confeitaria que recebe encomendas, versão celular",
              "espera": "O Claude rascunha o desenho em pranchetas e publica um artifact do Claude Design, privado, com um link que abre no navegador do PC. Lá dá para mexer nos elementos e exportar cada prancheta como PNG ou PDF. Este passo não foi testado."
            },
            {
              "faz": "Opcional, pelo app do Claude, no celular ou no navegador: numa conversa nova, cole este pedido.",
              "cola": "Faça um wireframe em tons de cinza, só caixas tracejadas e rótulos entre colchetes, da página inicial de uma confeitaria que recebe encomendas, versão celular: logo, título, botão de encomendar, foto, os três sabores mais pedidos e um rodapé com endereço e WhatsApp.",
              "espera": "O Claude cria um artifact ao lado da conversa, privado, que também aparece na aba de artifacts. Este passo não foi testado."
            }
          ],
          "naoTestado": "Os passos 12 e 13 (o /design e o app do Claude) não foram rodados: exigem a sua conta, o login do claude.ai e o Claude Code aberto numa conversa de verdade. Os pedidos dos passos 5 e 10 foram seguidos pelo Claude que escreveu a aula, numa pasta de teste; os comandos dos passos 2 e 3 e os cliques no Explorador não foram rodados nesta pasta, mas são os mesmos da aula 0.0.",
          "errado": "se o arquivo vier colorido ou com fotos, ele virou mock: peça \"refaça como wireframe, só cinza, caixas e rótulos\". Se o Claude disser que criou o arquivo, mas ele não aparece na pasta, peça o caminho completo e confira se o Claude Code está na pasta certa (a aula 0.1 ensina a ler um caminho). Se o /design responder que os artifacts não estão disponíveis, a sessão precisa estar com login da conta do claude.ai (o comando `/login`) e o Claude Code numa versão recente; sem isso, os passos 1 a 11 já ensinam tudo desta aula. Se o cd do passo 3 responder Cannot find path, a pasta não foi criada: repita o passo 2 e depois o 3."
        }
      ],
      [
        "fontes",
        [
          [
            "Compartilhar saída de sessão como artifacts (seção \"Rascunhe uma tela de design\"; o /design pede a versão 2.1.265 ou mais nova), Claude Code",
            "https://code.claude.com/docs/pt/artifacts",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Comandos (/design e /design-sync), Claude Code",
            "https://code.claude.com/docs/pt/commands",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Comece com Claude Design, Anthropic",
            "https://support.claude.com/pt/articles/14604416-comece-com-claude-design",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "O que são artefatos e como usá-los, Anthropic",
            "https://support.claude.com/pt/articles/17153992-o-que-sao-artefatos-e-como-usa-los",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Migrar do Claude Design independente para Claude (fecha em 14/12/2026), Anthropic",
            "https://support.claude.com/pt/articles/17440474-migrar-do-claude-design-independente-para-claude",
            "oficial",
            "02/11/2026",
            "pt"
          ],
          [
            "Qual é a diferença entre wireframe, mockup e protótipo?, Tecnoblog (atualizado em 04/08/2023)",
            "https://tecnoblog.net/responde/qual-e-a-diferenca-entre-wireframe-mockup-e-prototipo/",
            "imprensa",
            "02/11/2026",
            "pt"
          ],
          [
            "UX Prototypes: Low Fidelity vs. High Fidelity, Nielsen Norman Group (18/12/2016)",
            "https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/",
            "opinião",
            "02/11/2026"
          ]
        ]
      ]
    ],
    "fixar": {
      "p": "Qual frase resume melhor esta aula?",
      "o": [
        [
          "Wireframe para a ordem, mock para a aparência e protótipo para o comportamento",
          "Isso. Cada etapa responde a uma pergunta, e pedir pelo nome mantém as decisões com você."
        ],
        [
          "Wireframe, mock e protótipo são nomes para o mesmo rascunho de tela",
          "Cada um responde a uma pergunta diferente: ordem, aparência e comportamento."
        ],
        [
          "Melhor pular o rascunho e pedir o site pronto, que o Claude faz rápido",
          "Rápido, sim, mas aí o Claude decide sozinho o que vai em cada tela, e mudar depois custa mais."
        ]
      ],
      "c": 0
    },
    "prova": [
      {
        "p": "Você quer decidir o que vai em cada tela e em que ordem, sem discutir cor. O que pedir?",
        "o": [
          [
            "Um mock da página inicial",
            "O mock já decide a aparência. Para a ordem, sem cor, o pedido é o wireframe."
          ],
          [
            "Um wireframe da página inicial",
            "Isso. Caixas cinza e rótulos, para decidir a estrutura."
          ],
          [
            "Um protótipo da página inicial",
            "O protótipo testa o comportamento. A estrutura vem antes, no wireframe."
          ]
        ],
        "c": 1
      },
      {
        "p": "O que um protótipo tem que um mock não tem?",
        "o": [
          [
            "As cores e os textos finais da tela",
            "O mock já tem cores e textos finais. A diferença do protótipo é responder ao toque."
          ],
          [
            "O sistema que guarda cada pedido",
            "Nem o protótipo tem isso: o que guarda e envia é o backend."
          ],
          [
            "Botões e telas que respondem ao toque",
            "Isso. O protótipo se comporta como o produto, mas sem guardar nada."
          ]
        ],
        "c": 2
      }
    ],
    "tutor": [
      [
        "Qual a diferença entre mock e protótipo?",
        "O mock mostra a aparência final, parada: cores, fontes e textos, sem nada funcionar. O protótipo se comporta como o produto, com botões e telas que respondem, mas não guarda nem envia nada."
      ],
      [
        "Como peço um wireframe ao Claude?",
        "Diga o que é, para quem e em que aparelho, e peça \"em tons de cinza, só caixas e rótulos entre colchetes\". No Claude Code, peça um arquivo wireframe.html; com o /design, escreva o mesmo pedido depois do comando; no app, peça numa conversa."
      ],
      [
        "Posso usar o claude.ai/design?",
        "O site separado do Claude Design fecha em 14 de dezembro de 2026. O Design continua dentro do Claude: pelo /design no Claude Code ou pedindo um design numa conversa do app."
      ]
    ]
  }
};
