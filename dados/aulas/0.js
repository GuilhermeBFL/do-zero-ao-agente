// Módulo 0 — Do zero absoluto. Formato dos blocos: ESPEC-site.md, seção 4.
// Marcação no texto: {{termo}} ou {{termo|texto}} abre nota do glossário; `x` é código; **x** é destaque.
const H0 = '<h1>Meu site</h1>\n<p>Olá!</p>\n<button>Comprar</button>';

export const AULAS = {
  '0-3': {
    tempo: 30,
    video: 's1-html-word-pdf',
    videoTipo: 'curto',
    abertura: 'Você já recebeu um arquivo que não conseguiu alterar, ou abriu um Word no computador de um colega e a página desandou. Não é defeito: cada formato foi feito para um trabalho, e esta aula mostra qual pedir em cada situação.',
    blocos: [
      ['h2', 'Para que serve'],
      ['p', 'Daqui para a frente, quase tudo o que você pedir ao Claude vai virar um arquivo: uma proposta, uma folha de estudos, um relatório, uma página para mandar por link. E toda vez você vai precisar dizer em que {{formato}} quer o resultado. Se não disser, o Claude escolhe por você, e nem sempre escolhe o que você precisava.'],
      ['p', 'Escolher errado custa caro de três jeitos. Uma proposta com valores mandada em Word pode ser alterada pelo cliente sem ninguém perceber. Um guia de estudos em PDF é ruim de ler no celular, porque a página não cabe na tela. E uma página que você queria publicar com um link só funciona de verdade se for {{html|HTML}}, porque é o único dos três que o {{navegador}} desenha sozinho.'],
      ['p', 'Saber a diferença também serve para conferir o trabalho do Claude. Quando ele disser "salvei como PDF" e o arquivo abrir desandado no celular, você vai saber que não é erro dele, é a natureza do formato. E quando ele disser que um Word "vai abrir igual em qualquer lugar", você vai saber que isso não é verdade, e pedir outra coisa.'],
      ['p', 'Boa notícia: nada disso exige instalar programa nem pagar nada. Os três formatos abrem com o que já existe no seu PC e no seu celular.'],
      ['h2', 'A explicação com analogia'],
      ['p', 'Pense em três versões do mesmo texto. O **Word** é um caderno a lápis: você apaga, reescreve, muda a ordem, e quem pega o caderno depois pode fazer o mesmo. O **PDF** é uma foto da página pronta: todo mundo vê exatamente a mesma coisa, no mesmo lugar, mas ninguém escreve por cima sem que fique estranho. O **HTML** é um cartaz digital que se rearruma sozinho conforme o tamanho da parede: na parede grande do PC, o texto se espalha; na parede estreita do celular, ele se empilha.'],
      ['quebra', 'O PDF não é uma foto de verdade. O texto dentro dele pode ser selecionado e copiado, pode ter links que funcionam e até formulários para preencher. A comparação com a foto vale para a aparência, que fica congelada. E o Word não é um caderno que só você escreve: qualquer pessoa com o arquivo escreve também, e é justamente isso que torna o Word uma má escolha para entregar um valor fechado.'],
      ['h2', 'Como funciona'],
      ['h3', 'Word: o programa monta a página na hora de abrir'],
      ['p', 'Um arquivo `.docx` não guarda a página pronta. Ele guarda o texto e um conjunto de instruções de aparência: este trecho é título, este parágrafo tem 1,5 de espaçamento, esta tabela tem três colunas, a {{fonte-tipografica|fonte}} é Calibri tamanho 11. Quem transforma essas instruções em uma página é o programa que abre o arquivo, no momento em que abre.'],
      ['p', 'Por isso o mesmo arquivo pode ficar diferente em dois computadores. Se o outro computador não tem a fonte Calibri, o programa troca por outra parecida, e as letras ficam um pouco mais largas. Um parágrafo que terminava no fim da página passa para a página seguinte, a tabela quebra no meio, a figura que estava ao lado do texto cai lá embaixo. O arquivo não mudou; o resultado da montagem mudou.'],
      ['p', 'Um exemplo inteiro, do começo ao fim: você pede ao Claude "crie proposta.docx com uma tabela de preços". Ele cria o arquivo, você abre no seu Word, está perfeito, e manda por e-mail. O cliente abre no Google Docs, no celular. A tabela aparece cortada e um valor passou para outra linha. Nada foi alterado, mas a proposta parece mal feita. Pior: o cliente pode editar um valor, salvar e devolver, e você não tem como saber o que mudou olhando o arquivo.'],
      ['p', 'Quando usar: enquanto o texto está sendo escrito, revisado e comentado, principalmente em grupo. Quando não usar: na entrega final de algo que não pode mudar, ou quando a aparência exata importa.'],
      ['h3', 'PDF: a página congelada'],
      ['p', 'O `.pdf` faz o contrário. Ele guarda a posição exata de cada letra, de cada linha e de cada figura na página, e costuma carregar as fontes junto. Por isso abre igual no seu PC, no celular do cliente e na impressora: não há montagem na hora de abrir, a página já vem montada.'],
      ['p', 'Essa é a força e a fraqueza do PDF. A página tem tamanho fixo, em geral A4. Em uma tela de celular, que é bem mais estreita que uma folha A4, o leitor encolhe a página inteira para caber, e as letras ficam minúsculas. Você dá zoom, arrasta para a direita, arrasta de volta, e lê assim o documento inteiro. Dá para ler, mas cansa.'],
      ['p', 'Editar PDF é mais difícil, mas não é impossível: existem programas que fazem isso. O que protege uma proposta de verdade é a {{assinatura-digital}}: um registro preso ao arquivo que diz quem assinou e acusa qualquer mudança feita depois. Ela não impede a edição; ela denuncia. Para a sua realidade, isso basta: um contrato ou uma proposta em PDF assinado é o padrão do mercado.'],
      ['p', 'Quando usar: contrato, proposta fechada, entrega final, qualquer coisa que vai ser impressa. Quando não usar: leitura longa no celular, e texto que ainda vai mudar.'],
      ['h3', 'HTML: o navegador desenha a página'],
      ['p', 'O `.html` é texto comum com marcações. Uma marcação diz "isto é o título principal", outra diz "isto é um parágrafo", outra diz "isto é um botão". Quem lê essas marcações e desenha a tela é o {{navegador}}, como o Chrome, o Edge ou o Safari. Esse texto com marcações é o {{codigo}} da página, e você vai ver um pedaço dele daqui a pouco.'],
      ['p', 'Como quem desenha é o navegador, e o navegador sabe o tamanho da tela, uma página bem feita se reorganiza: três colunas no PC viram uma coluna no celular, a letra continua do mesmo tamanho, e você rola para baixo em vez de dar zoom. É por isso que este curso é um site, e não um PDF. Além disso, HTML pode ter botão, caixa de busca, pergunta que responde na hora, animação, simulador. Os exercícios desta aula são HTML.'],
      ['p', 'Duas coisas que confundem todo mundo. Primeira: um arquivo HTML **não precisa de internet** para abrir. Dois cliques nele, e o navegador abre a página do seu próprio disco. O que ele busca de fora, como uma fonte ou um vídeo, deixa de carregar, mas o texto aparece. Segunda: para **outras pessoas** abrirem a página por um link, aí sim é preciso publicar em um {{servidor}}, e a aula 0.8 mostra a diferença entre a página no seu PC e a página publicada.'],
      ['p', 'Quando usar: guia interativo, simulador, site, qualquer coisa que vai ser lida em telas de tamanhos diferentes. Quando não usar: documento formal por e-mail, porque alguns serviços de e-mail bloqueiam anexos `.html` por segurança, e porque quem recebe não fica com uma versão fixa.'],
      ['h3', 'E o Excel e o Markdown?'],
      ['p', 'Dois outros formatos aparecem o tempo todo no seu dia, e a próxima aula aprofunda os dois. O Excel (`.xlsx`) é para contas e tabelas: cada célula guarda um valor ou uma fórmula, e o programa recalcula tudo quando algo muda. O {{markdown|Markdown}} (`.md`) é texto simples com marcações leves, como `#` para título e `**` para negrito. É o formato que o Obsidian usa e o que a IA lê melhor, porque não tem nada escondido: o que você vê no arquivo é tudo o que existe nele.'],
      ['tabela', {
        colunas: ['Formato', 'Feito para', 'Evite para'],
        linhas: [
          ['Word (.docx)', 'Escrever, revisar, comentar em grupo', 'Entrega final que não pode mudar'],
          ['PDF (.pdf)', 'Contrato, proposta fechada, impressão', 'Leitura longa em tela pequena'],
          ['HTML (.html)', 'Site, guia interativo, simulador', 'Documento formal por e-mail'],
          ['Excel (.xlsx)', 'Contas e tabelas', 'Texto corrido'],
          ['Markdown (.md)', 'Notas e arquivos que a IA lê bem', 'Layout caprichado']
        ]
      }],
      ['h3', 'As perguntas que você deve estar se fazendo'],
      ['lista', [
        '**Preciso instalar alguma coisa?** Não. Word abre no Word, no LibreOffice, no Google Docs e no app do celular. PDF abre dentro do próprio navegador. HTML abre em qualquer navegador.',
        '**Custa?** Nada. Os três formatos são abertos. O Word é um programa pago, mas o formato `.docx` abre em programas gratuitos.',
        '**E se eu pedir o formato errado?** Peça para o Claude converter: "converta estudo.docx para PDF". Só saiba que conversão perde coisas. De PDF para Word, o layout costuma desandar. De HTML para PDF, botões e buscas deixam de funcionar, porque viram uma foto.',
        '**Como sei em que formato um arquivo está?** Pelo final do nome, a {{extensao|extensão}}, que a aula 0.2 explica. O Windows esconde as extensões por padrão, e a aula 0.1 mostra como ligar.',
        '**O Claude consegue criar os três?** Consegue, e também converte entre eles. Se ele disser que falta alguma coisa, peça para explicar o que falta e como resolver.'
      ]],
      ['fundo', { titulo: 'Para ir mais fundo: o que tem dentro de um .docx', blocos: [
        ['p', 'Um arquivo `.docx` é, na verdade, um {{zip|ZIP}} disfarçado. Se você renomear `proposta.docx` para `proposta.zip` e abrir, vai ver pastas dentro, e um arquivo chamado `word/document.xml` com o texto todo cercado de marcações. O Excel `.xlsx` é igual. É por isso que o Claude consegue ler e escrever esses arquivos: por baixo, é texto.'],
        ['p', 'O PDF tem um primo chamado PDF/A, feito para arquivar documentos por décadas: ele obriga as fontes a irem dentro do arquivo e proíbe conteúdo que dependa de programa externo. Órgãos públicos costumam exigir.'],
        ['p', 'Uma página de verdade usa três linguagens juntas: o HTML diz o que cada coisa é, o {{css|CSS}} diz como ela aparece, e o {{javascript|JavaScript}} diz como ela se comporta quando você toca. Neste curso você só vai ler as duas últimas, até o módulo 15.']
      ] }],
      ['h2', 'Preveja antes de ver'],
      ['prever', {
        pergunta: 'O que você acha que aparece na tela com este código?',
        codigo: H0,
        linguagem: 'html',
        resposta: 'Um título grande, uma frase e um botão. As marcações não aparecem: `<h1>` só avisa que aquilo é o título principal, `<p>` é um parágrafo e `<button>` é um botão. O navegador lê as marcações e desenha; você só vê o resultado.',
        vivo: [
          ['Trocar Comprar por Pagar', '<h1>Meu site</h1>\n<p>Olá!</p>\n<button>Pagar</button>'],
          ['Trocar o título', '<h1>Minha loja</h1>\n<p>Olá!</p>\n<button>Comprar</button>'],
          ['Tirar o botão', '<h1>Meu site</h1>\n<p>Olá!</p>'],
          ['Voltar ao original', H0]
        ]
      }],
      ['h2', 'Pare e responda'],
      ['pergunta', {
        p: 'Você vai mandar uma proposta com valores para um cliente. Quer que ela abra igual para ele e que seja difícil de alterar sem deixar rastro. Qual formato escolhe?',
        o: [
          ['Word, porque o cliente consegue ajustar o que quiser', 'É justamente o problema: qualquer um muda um valor e ninguém percebe.'],
          ['PDF, de preferência com assinatura digital', 'Isso. Abre igual em qualquer aparelho, e a assinatura acusa qualquer mudança feita depois.'],
          ['HTML, porque abre em qualquer navegador', 'Abre, mas o cliente não fica com uma versão fixa, o arquivo é fácil de mudar e alguns e-mails bloqueiam o anexo.']
        ],
        c: 1
      }],
      ['pergunta', {
        titulo: 'Agora duvide',
        p: 'O Claude respondeu: "Salvei o guia como guia.pdf. Como é PDF, ele vai se adaptar à tela do celular, e ninguém consegue alterar." O que está errado nessa resposta?',
        o: [
          ['Nada: PDF é o formato mais seguro que existe e o mais fácil de ler no celular','Duas coisas estão erradas na frase do Claude: a adaptação à tela e a impossibilidade de alterar.'],
          ['PDF não se adapta à tela, e dificulta a alteração sem impedir', 'Isso. A página do PDF tem tamanho fixo, e editar PDF é mais difícil, mas existe programa para isso. O que acusa mudança é a assinatura digital.'],
          ['PDF não abre no celular sem instalar um programa à parte', 'Abre: o navegador do celular lê PDF sozinho. O problema é outro.']
        ],
        c: 1
      }],
      ['h2', 'Erros comuns'],
      ['erros', [
        ['"Está em PDF, então está protegido."', 'PDF dificulta, mas não impede a alteração. Para saber se mudou, use assinatura digital: ela não impede a edição, mas acusa o que foi alterado depois de assinar.'],
        ['"HTML precisa de internet."', 'Não. Um arquivo `.html` abre no navegador sem internet, com dois cliques. Você só precisa publicar se quiser que outras pessoas acessem por um link. O que a página busca de fora, como uma fonte ou um vídeo, deixa de carregar.'],
        ['"Renomeei o arquivo para .pdf e virou PDF."', 'A extensão é só o final do nome. O conteúdo continua sendo um Word, e o leitor de PDF vai reclamar. Para converter de verdade, use "Salvar como" ou peça para o Claude converter.'],
        ['"Mandei o Word, então o cliente vê o mesmo que eu."', 'Ele vê o que o programa dele montou, com as fontes dele. Se a aparência importa, mande PDF.']
      ]],
      ['h2', 'Tente lembrar'],
      ['lembrar', {
        p: 'Por que um PDF fica ruim no celular, e um HTML bem feito não?',
        r: [
          'O PDF tem página de tamanho fixo: no celular ela encolhe inteira, e você dá zoom.',
          'O HTML é desenhado pelo navegador na hora de abrir.',
          'O navegador reorganiza o conteúdo conforme a largura da tela.'
        ]
      }],
      ['lembrar', {
        p: 'O que acontece quando o mesmo arquivo .docx abre em dois computadores diferentes?',
        r: [
          'Cada computador monta a página na hora de abrir, a partir do texto e das instruções de aparência.',
          'Se faltar uma fonte ou a versão do programa for outra, o texto anda de lugar.'
        ]
      }],
      ['h2', 'Laboratório'],
      ['lab', {
        titulo: 'Compare os três no seu celular',
        lugar: 'No PC, com o Claude Code; depois no celular',
        tempo: '15 minutos',
        antes: 'Você vai pedir ao {{claude-code|Claude Code}} para criar três arquivos com o mesmo conteúdo, um em cada formato, e abrir os três no celular para sentir a diferença. Precisa do Claude Code aberto em uma pasta, como a aula 0.0 ensina, e de uma {{nuvem}} que você já use no celular, como OneDrive ou Google Drive. Se o Claude pedir permissão para criar arquivos, aceite.',
        passos: [
          { faz: 'Abra o Claude Code na pasta onde quer guardar o estudo e cole este pedido:', cola: 'Crie uma folha de estudos curta sobre juros compostos, com um exemplo numérico, em três arquivos nesta pasta: estudo.docx, estudo.pdf e estudo.html. O HTML precisa se adaptar à largura da tela. No fim, me diga o caminho completo de cada arquivo.', espera: 'O Claude escreve o texto, cria os três arquivos e responde com três caminhos, parecidos com C:\\Users\\SeuNome\\Documentos\\estudo\\estudo.pdf.' },
          { faz: 'Abra a pasta no {{explorador}} e confira os três.', espera: 'Três arquivos com o mesmo nome e extensões diferentes: .docx, .pdf e .html. Se as extensões não aparecerem, a aula 0.1 mostra como ligar.' },
          { faz: 'Dê dois cliques no estudo.html.', espera: 'O navegador abre a página, mesmo sem internet. Estreite a janela puxando a borda e veja o texto se reorganizar sozinho.' },
          { faz: 'Mande os três para a sua nuvem e abra cada um no celular.', espera: 'O PDF pede zoom. O HTML cabe na tela. O Word abre em um app de edição, e a aparência pode mudar um pouco.' }
        ],
        errado: 'se o Claude disser que não consegue criar o `.docx` ou o `.pdf`, peça: "me diga o que falta e como resolver". Se o HTML no celular aparecer como texto cheio de marcações, baixe o arquivo e abra no navegador do celular.'
      }],
      ['fontes', [
        ['Aprendendo desenvolvimento web, MDN', 'https://developer.mozilla.org/pt-BR/docs/Learn_web_development', 'oficial', '31/10/2026', 'pt'],
        ['Salvar ou converter para PDF, Microsoft', 'https://support.microsoft.com/pt-br/office/salvar-ou-converter-para-pdf-ou-xps-no-office-para-windows-d85416c5-7d77-4fd6-a216-6f4bf7c7c110', 'oficial', '31/10/2026', 'pt'],
        ['Getting Started, Markdown Guide', 'https://www.markdownguide.org/getting-started/', 'comunidade', '31/10/2026']
      ]]
    ],
    fixar: { p: 'Qual frase resume melhor esta aula?', o: [
      ['O PDF é sempre a melhor escolha, porque abre igual em qualquer aparelho e em qualquer programa','Abre igual, mas é ruim para editar e para ler em tela pequena.'],
      ['O HTML precisa de internet, e por isso serve só para sites publicados', 'Um arquivo HTML abre no navegador sem internet. Só precisa publicar para outras pessoas acessarem por um link.'],
      ['Word para escrever, PDF para entregar e HTML para abrir no navegador, com interação', 'Isso. Cada formato tem o seu trabalho.']
    ], c: 2 },
    prova: [
      { p: 'Qual formato mantém a mesma aparência em qualquer aparelho?', o: [
        ['Word', 'O Word monta a página na hora de abrir, com as fontes e a versão daquele computador.'],
        ['PDF', 'Isso. O PDF guarda a posição de cada letra na página.'],
        ['HTML', 'O HTML se adapta à tela: a aparência muda de propósito.']
      ], c: 1 },
      { p: 'Qual formato se adapta ao tamanho da tela, se for bem feito?', o: [
        ['Word', 'O Word tem página de tamanho fixo, como o PDF.'],
        ['PDF', 'A página do PDF encolhe inteira para caber; não se reorganiza.'],
        ['HTML', 'Isso. Quem desenha o HTML é o navegador, que reorganiza tudo conforme a largura da tela.']
      ], c: 2 }
    ],
    tutor: [
      ['Por que o Word muda de um PC para outro?', 'Porque o Word monta a página na hora de abrir, usando as fontes e a versão daquele computador. Se a fonte não existir ali, ele troca por outra, e o texto muda de lugar. Quando a aparência precisa ficar igual, salve em PDF.'],
      ['Posso mandar HTML por e-mail?', 'Pode, como anexo, e quem recebe abre no navegador. Mas alguns serviços de e-mail bloqueiam esse tipo de anexo por segurança. Se a pessoa só precisa ler, um PDF costuma dar menos trabalho; se ela precisa interagir, publique a página e mande o link.'],
      ['O que é assinatura digital?', 'Um registro eletrônico preso ao arquivo, que diz quem assinou e quando. Se alguém mudar o arquivo depois, a assinatura acusa. Ela não impede a edição; denuncia. Serve para contratos e propostas em PDF.']
    ]
  }
};
