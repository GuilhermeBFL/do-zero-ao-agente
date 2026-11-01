// Descrição e mapa de uma tela de cada módulo. Escrito à mão; motor/curriculo-do-plano.mjs junta com o plano
// de aulas e grava dados/curriculo.js. Mapa: peças [nome, definição curta] e ligações [de, para, rótulo].
export const MODULOS = {
  '0': {
    d: 'Arquivo, pasta, internet e os formatos do dia a dia. Sem isso, o resto fica nebuloso.',
    mapa: {
      pecas: [['Pasta', 'Um lugar no disco que guarda arquivos e outras pastas.'], ['Arquivo', 'Um documento guardado no disco, com nome e extensão.'], ['Formato', 'O jeito como o conteúdo está escrito: Word, PDF, HTML, CSV, Markdown.'], ['Navegador', 'O programa que abre páginas HTML, com ou sem internet.'], ['Servidor', 'Um computador ligado o tempo todo que entrega páginas a quem pede.']],
      ligacoes: [['Pasta', 'Arquivo', 'guarda'], ['Arquivo', 'Formato', 'tem um'], ['Navegador', 'Arquivo', 'abre o HTML'], ['Servidor', 'Navegador', 'entrega a página']]
    }
  },
  '1': {
    d: 'As palavras que aparecem em todo lugar, com o sentido que elas têm aqui.',
    mapa: {
      pecas: [['Modelo', 'A IA em si, que lê texto e escreve a continuação.'], ['App', 'O programa onde você conversa com o modelo, como o claude.ai.'], ['API', 'A porta para um programa seu falar com o modelo.'], ['Agente', 'Um programa que usa o modelo em ciclo, com ferramentas, até terminar.'], ['Contexto', 'Tudo o que o modelo enxerga naquele momento, contado em tokens.']],
      ligacoes: [['App', 'Modelo', 'conversa com'], ['API', 'Modelo', 'dá acesso ao'], ['Agente', 'API', 'chama o modelo pela'], ['Modelo', 'Contexto', 'só enxerga o']]
    }
  },
  '2': {
    d: 'Primeiro você aprende a ler código, linha por linha. Só depois escreve.',
    mapa: {
      pecas: [['Programa', 'Uma lista de instruções que o computador segue em ordem.'], ['Variável', 'Um nome que guarda um valor para usar depois.'], ['Condição', 'Um "se" que escolhe um caminho ou outro.'], ['Repetição', 'Um trecho que roda várias vezes.'], ['Função', 'Um bloco com nome: recebe entradas e devolve um resultado.'], ['Erro', 'A mensagem que diz em que linha e por que o programa parou.']],
      ligacoes: [['Programa', 'Variável', 'guarda dados em'], ['Programa', 'Condição', 'decide com'], ['Programa', 'Repetição', 'repete com'], ['Função', 'Programa', 'organiza o'], ['Erro', 'Programa', 'aponta a linha do']]
    }
  },
  '3': {
    d: 'O histórico do seu projeto, a cópia na internet e o editor onde tudo acontece.',
    mapa: {
      pecas: [['Repositório', 'Uma pasta com memória: o Git guarda as versões dela.'], ['Commit', 'Uma foto da pasta, com uma frase dizendo o que mudou.'], ['Branch', 'Um caminho paralelo para testar sem mexer no que funciona.'], ['GitHub', 'O site que guarda uma cópia do seu histórico.'], ['VS Code', 'O editor onde você abre a pasta, vê o que mudou e usa o terminal.']],
      ligacoes: [['Commit', 'Repositório', 'entra no histórico do'], ['Branch', 'Commit', 'junta uma sequência de'], ['Repositório', 'GitHub', 'push manda para o'], ['VS Code', 'Repositório', 'abre e edita o']]
    }
  },
  '4': {
    d: 'Código pronto de outras pessoas: como escolher, instalar e não cair em golpe.',
    mapa: {
      pecas: [['Biblioteca', 'Código pronto que alguém publicou para você usar.'], ['Gerenciador', 'pip, uv ou npm: o programa que baixa e instala bibliotecas.'], ['Versão', 'O número que diz qual edição da biblioteca você usa.'], ['Arquivo de trava', 'A lista exata das versões instaladas, para repetir igual.'], ['Ambiente isolado', 'Uma caixa só deste projeto, para as bibliotecas não brigarem.']],
      ligacoes: [['Gerenciador', 'Biblioteca', 'instala a'], ['Biblioteca', 'Versão', 'tem uma'], ['Arquivo de trava', 'Versão', 'fixa a'], ['Gerenciador', 'Ambiente isolado', 'instala dentro do']]
    }
  },
  '5': {
    d: 'O suficiente para prever quando ela acerta, quando erra e quanto custa.',
    mapa: {
      pecas: [['Treino', 'A fase em que o modelo aprendeu com muito texto, uma vez só.'], ['Modelo', 'O resultado do treino: prevê a próxima palavra.'], ['Contexto', 'O que ele lê agora: a conversa, os arquivos, as instruções.'], ['Token', 'O pedacinho de texto que ele lê e escreve; é por ele que se paga.'], ['Alucinação', 'Uma resposta plausível e falsa.']],
      ligacoes: [['Treino', 'Modelo', 'produz o'], ['Modelo', 'Contexto', 'responde com base no'], ['Contexto', 'Token', 'é medido em'], ['Modelo', 'Alucinação', 'sem fonte, pode gerar']]
    }
  },
  '6': {
    d: 'Como pedir bem, como dar o contexto certo e como exigir prova de que funcionou.',
    mapa: {
      pecas: [['Pedido', 'Objetivo, contexto, restrições e formato da resposta.'], ['Exemplo', 'Uma amostra do resultado que você quer.'], ['Plano', 'Os passos combinados antes de construir.'], ['Verificação', 'A prova de que funcionou: teste, saída, link.'], ['Conversa nova', 'Começar de novo quando o contexto ficou poluído.']],
      ligacoes: [['Exemplo', 'Pedido', 'melhora o'], ['Pedido', 'Plano', 'vira um'], ['Plano', 'Verificação', 'termina com'], ['Conversa nova', 'Pedido', 'recomeça o']]
    }
  },
  '6B': {
    d: 'O Claude fora do terminal: chat, Projetos, Cowork, Artifacts, conectores e o Office.',
    mapa: {
      pecas: [['Chat', 'A conversa no claude.ai, no app ou no celular.'], ['Projeto', 'Uma pasta de conversas com arquivos e instruções fixas.'], ['Cowork', 'A conversa que mexe nos arquivos do seu PC.'], ['Artifact', 'Uma página ou documento que o Claude publica com link.'], ['Conector', 'Um MCP gerido pelo claude.ai, como a Agenda.']],
      ligacoes: [['Projeto', 'Chat', 'agrupa conversas do'], ['Chat', 'Artifact', 'pode gerar um'], ['Conector', 'Chat', 'traz dados para o'], ['Cowork', 'Chat', 'é o mesmo, com acesso a arquivos']]
    }
  },
  '7': {
    d: 'Tudo o que a ferramenta faz, do primeiro comando às tarefas agendadas.',
    mapa: {
      pecas: [['Sessão', 'Uma conversa do Claude Code dentro de uma pasta.'], ['Permissões', 'O que ele pode fazer sem perguntar, no settings.json.'], ['CLAUDE.md', 'As regras fixas do projeto, lidas em toda sessão.'], ['Hook', 'Um programa seu que roda sozinho em certos momentos.'], ['Subagente', 'Um ajudante com contexto próprio, para dividir o trabalho.'], ['Checkpoint', 'A foto automática dos arquivos, desfeita com /rewind.']],
      ligacoes: [['CLAUDE.md', 'Sessão', 'orienta a'], ['Permissões', 'Sessão', 'limitam a'], ['Hook', 'Sessão', 'reage a ações da'], ['Sessão', 'Subagente', 'delega ao'], ['Checkpoint', 'Sessão', 'desfaz passos da']]
    }
  },
  '8': {
    d: 'Ensine o Claude a fazer as coisas do seu jeito, uma vez só.',
    mapa: {
      pecas: [['Skill', 'Uma pasta com instruções e arquivos que o Claude carrega quando precisa.'], ['SKILL.md', 'O arquivo principal da skill, com nome e descrição.'], ['Descrição', 'A frase que faz o Claude decidir usar a skill.'], ['Script', 'Um programa dentro da skill que mede ou faz algo repetido.'], ['MCP', 'Outra peça: liga o Claude a um sistema de fora.']],
      ligacoes: [['SKILL.md', 'Skill', 'é o centro da'], ['Descrição', 'Skill', 'faz disparar a'], ['Script', 'Skill', 'trabalha dentro da'], ['Skill', 'MCP', 'é diferente do']]
    }
  },
  '9': {
    d: 'O cabo que liga a IA à sua agenda, ao seu e-mail e aos seus sistemas.',
    mapa: {
      pecas: [['Cliente', 'O programa que usa o MCP, como o Claude Code.'], ['Servidor MCP', 'O programa que oferece ferramentas, recursos e prompts.'], ['Ferramenta', 'Uma ação que a IA pode pedir, como criar um evento.'], ['Recurso', 'Um dado que entra na conversa com @servidor.'], ['Login', 'A autorização para o servidor agir na sua conta.']],
      ligacoes: [['Cliente', 'Servidor MCP', 'conecta ao'], ['Servidor MCP', 'Ferramenta', 'oferece'], ['Servidor MCP', 'Recurso', 'oferece'], ['Login', 'Servidor MCP', 'libera o']]
    }
  },
  '10': {
    d: 'Assinatura ou pagar por uso? Como chamar uma IA de dentro do seu programa.',
    mapa: {
      pecas: [['Assinatura', 'O plano mensal que você usa no app e no Claude Code.'], ['API', 'O acesso pago por uso, de dentro de um programa.'], ['Chave de API', 'A senha que identifica quem paga cada chamada.'], ['Arquivo .env', 'Onde a chave fica, fora do código e fora do Git.'], ['Cache', 'Reaproveitar o começo igual dos pedidos para pagar menos.']],
      ligacoes: [['Chave de API', 'API', 'dá acesso à'], ['Arquivo .env', 'Chave de API', 'guarda a'], ['Cache', 'API', 'barateia a'], ['Assinatura', 'API', 'é cobrada à parte da']]
    }
  },
  '11': {
    d: 'O que protege sua conta, seu cartão e os dados de quem confia em você.',
    mapa: {
      pecas: [['Chave', 'O segredo que gasta em seu nome.'], ['Vazamento', 'Quando a chave aparece onde não devia.'], ['Revogar', 'Cancelar a chave no site de onde ela veio.'], ['Prompt injection', 'Ordem escondida em texto de fora, que tenta mandar na IA.'], ['Aprovação humana', 'Nada irreversível acontece sem o seu OK.']],
      ligacoes: [['Vazamento', 'Chave', 'expõe a'], ['Revogar', 'Vazamento', 'é o primeiro passo após'], ['Prompt injection', 'Aprovação humana', 'é barrado pela'], ['Aprovação humana', 'Chave', 'limita o estrago da']]
    }
  },
  '12': {
    d: 'O que é um agente de verdade e como ele trabalha sozinho sem sair do trilho.',
    mapa: {
      pecas: [['Objetivo', 'O que você quer pronto no fim.'], ['Ciclo', 'Reunir contexto, agir, verificar, e repetir.'], ['Ferramentas', 'As ações que o agente pode usar: ler, buscar, escrever.'], ['Memória', 'O que fica guardado entre uma conversa e outra.'], ['Teste', 'Casos fixos para saber se o agente continua bom.']],
      ligacoes: [['Objetivo', 'Ciclo', 'inicia o'], ['Ciclo', 'Ferramentas', 'age com'], ['Memória', 'Ciclo', 'alimenta o'], ['Teste', 'Ciclo', 'confere o resultado do']]
    }
  },
  '13': {
    d: 'Claude, Codex e outros dividindo o trabalho, e quando isso só gasta dinheiro.',
    mapa: {
      pecas: [['Planejador', 'Quem divide a tarefa em passos.'], ['Programador', 'Quem escreve o código de cada passo.'], ['Revisor', 'Quem confere, e nunca é quem programou.'], ['Worktree', 'Uma cópia de trabalho para cada agente não pisar no outro.'], ['Custo', 'Cada agente a mais gasta mais limite ou dinheiro.']],
      ligacoes: [['Planejador', 'Programador', 'entrega o plano ao'], ['Programador', 'Revisor', 'passa o código ao'], ['Worktree', 'Programador', 'isola o'], ['Custo', 'Planejador', 'decide se vale o']]
    }
  },
  '14': {
    d: 'Telegram, e-mail, agenda, Obsidian e WhatsApp, com os riscos de cada caminho.',
    mapa: {
      pecas: [['Webhook', 'O aviso que chega sozinho quando algo acontece.'], ['Polling', 'Perguntar de tempos em tempos se há novidade.'], ['Bot', 'O programa que conversa pelo Telegram.'], ['Graph', 'A API da Microsoft para ler e rascunhar e-mails.'], ['Token de acesso', 'A autorização com prazo que o app recebe.']],
      ligacoes: [['Webhook', 'Bot', 'avisa o'], ['Polling', 'Bot', 'é a outra forma de alimentar o'], ['Token de acesso', 'Graph', 'libera o'], ['Bot', 'Graph', 'pode usar o']]
    }
  },
  '15': {
    d: 'Da ideia ao link funcionando, com banco de dados e login.',
    mapa: {
      pecas: [['Wireframe', 'O rascunho das telas, antes de qualquer código.'], ['Frontend', 'O que aparece no navegador.'], ['Backend', 'O que roda no servidor e guarda segredos.'], ['Banco de dados', 'As tabelas com os dados, com regras de acesso.'], ['Deploy', 'Publicar, para o link funcionar para todos.']],
      ligacoes: [['Wireframe', 'Frontend', 'vira o'], ['Frontend', 'Backend', 'pede dados ao'], ['Backend', 'Banco de dados', 'lê e grava no'], ['Deploy', 'Frontend', 'põe no ar o']]
    }
  },
  '16': {
    d: 'Testes, depuração de propósito e como render mais no seu plano.',
    mapa: {
      pecas: [['Teste', 'Um programa que confere se outro faz o que devia.'], ['Erro plantado', 'Um defeito de propósito, para ver o teste ficar vermelho.'], ['Log', 'O registro do que aconteceu, para entender depois.'], ['Segundo leitor', 'Outra revisão, porque quem escreveu não enxerga o próprio erro.'], ['Avaliação', 'Casos fixos que medem se o agente está bom.']],
      ligacoes: [['Erro plantado', 'Teste', 'prova que funciona o'], ['Log', 'Teste', 'explica a falha do'], ['Segundo leitor', 'Teste', 'complementa o'], ['Avaliação', 'Teste', 'é um tipo de']]
    }
  },
  '17': {
    d: 'Seu assistente pessoal, construído peça por peça ao longo do curso.',
    mapa: {
      pecas: [['Assistente', 'O seu agente, com regras próprias.'], ['Telegram', 'Por onde você conversa com ele.'], ['Agenda e e-mail', 'O que ele lê e rascunha para você.'], ['Obsidian', 'A memória de longo prazo, em notas.'], ['Aprovação', 'O seu OK antes de qualquer coisa irreversível.']],
      ligacoes: [['Telegram', 'Assistente', 'leva pedidos ao'], ['Assistente', 'Agenda e e-mail', 'lê e rascunha'], ['Assistente', 'Obsidian', 'registra no'], ['Aprovação', 'Assistente', 'controla o']]
    }
  }
};
