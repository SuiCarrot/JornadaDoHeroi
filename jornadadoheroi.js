var prompt = require("prompt-sync")();
let vitorias = 0;
let derrotas = 0;
let i = false;

//Introdução de cenário

console.log(`
  Após longas semanas viajando você avista os portões da grande cidade de Delendill. 
O cheiro de água salgada que já lhe acompanhava nos últimos dias se mistura ao dos peixes e de suor. 
O som das ondas quebrando no porto é superado apenas pelos gritos dos vendedores, que se aglomeram logo na entrada da cidade, 
anunciando a plenos pulmões suas ofertas na tentativa de conseguirem vender suas mercadorias.\n
  Ao se aproximar dos portões da cidade, lhe param no portão.  
Afinal, um viajante portando armas, ou é um aventureiro ou um bandido. Ambos geralmente causam problemas.\n
  Um homem de pele já curtida pelo sol, um guarda, dado suas vestimentas, lhe pergunta com voz grave: 
\n- Qual o seu nome, viajante? `);
const nome = prompt(``);

console.log(
`\n- Bom, ${nome}, aqui em Delendill ficamos de olho em pessoas como você. Apenas queria lhe deixar avisado, para que não cause nenhuma confusão. 
Antes que me pergunte... se seguir por esta rua até o centro da cidade, chegará na taverna. Como eu sei disso?! - O guarda pergunta dando risada - 
Tipos como o seu sempre perguntam isso.\n
  Você segue pelas ruas da cidade, em meio a marinheiros, moradores e comerciantes. 
Ao chegar no centro da cidade você vê uma placa em formato de cervo pendurada em frente a uma construção de dois andares, nela escrito: "Cervo Flamejante".\n 
  Cansado da viagem, você entra, procura pelo seu contratante para entregar de uma vez a missão e poder descansar por alguns dias. Sem demora, 
você o encontra com seu capanga sentado ao lado como de costume. Assim que você senta, o homem exibe um sorriso com dentes de ouro`
);

console.log(`\n- ${nome}, meu amigo! Estava te esperando ontem já, mas imagino que a viagem tenha sido difícil mesmo. 
Beba, beba... voce parece estar com sede. Agora, já falando de negócios... afinal, tempo é dinheiro.`);

//Primeira pergunta
console.log(`\n- Você conseguiu entregar a mensagem para o líder da mina? `);
let resposta = prompt(``);

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log(`\n- Ótimo, ótimo! Logo conseguiremos ter um suprimento constante de minérios para a guilda dos artesões. 
  Acredito que eles ficarão felizes com isso! Farei com que eles saibam quem os ajudou. Talvez até lhe deem um desconto, hehe.`);
    vitorias++;
    i = true;
  } else if (
    resposta.toUpperCase() == "NAO" ||
    resposta.toUpperCase() == "NÃO"
  ) {
    console.log(`\n- Uma pena, realmente. Ter esse suprimento de minérios ajudaria na economia, lhe aconselho a comprar seus equipamentos o quanto antes, 
  prevejo uma falta de suprimentos para os artesões logo, logo.`);
    derrotas++;
    i = true;
  } else {
    console.log(
  `\n- Meu amigo, apenas um copo e já não consegue me responder direito? Vamos facilitar, responda apenas sim ou nao. E então, conseguiu? `
    );
    resposta = prompt(``);
  }
} while (i == false);

//Segunda pergunta

console.log(
  `\n- Sua segunda tarefa era conseguir marcar uma reunião com o conselho de Erast, para discutirmos uma rota de comércio. Você conseguiu marcar a reunião? `
);
resposta = prompt(``);

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log(
      `\n- Me alegro muito ao saber disso, organizarei uma comitiva para a reunião, assim como alguns presentes para a ocasião.`
    );
    vitorias++;
    i = false;
  } else if (
    resposta.toUpperCase() == "NAO" ||
    resposta.toUpperCase() == "NÃO"
  ) {
    console.log(
      `\n- Ah, me entristece isso. Até já havia encomendado alguns presentes exóticos para amaciar os conselheiros.`
    );
    derrotas++;
    i = false;
  } else {
    console.log(
      `\n- Viagem longa, eu sei. A cabeça já não funciona direito, mas preciso que se concentre aqui, responda apenas com sim ou nao. E então, conseguiu?`
    );
    resposta = prompt(``);
  }
} while (i == true);

// Terceira pergunta

console.log(
  `\n- Falando em presentes, você havia ficado encarregado de entregar um para minha filha, já que você iria passar pela vila onde ela mora. Conseguiu encontrá-la e entregar o presente?`
);
resposta = prompt(``);

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log(
      `\n- Me alivia muito saber que ela está feliz com o presente. Há muitos meses ela me pedia um desses, foi muito difícil conseguir.`
    );
    vitorias++;
    i = true;
  } else if (
    resposta.toUpperCase() == "NAO" ||
    resposta.toUpperCase() == "NÃO"
  ) {
    console.log(
      `\n- Oh, eu esperava entregar o quanto antes este presente, tive que subornar um capitão para conseguir isto. Me devolva que tratarei de entregar para ela o quanto antes.`
    );
    derrotas++;
    i = true;
  } else {
    console.log(
      `\n- Já não é a primeira vez que lhe faço uma pergunta, mesmo a vigem sendo longa imagino que há um limite para a minha paciência. Sim ou nao?`
    );
    resposta = prompt(``);
    i = false;
  }
} while (i == false);

// Quarta Pergunta

console.log(
  `\n- Aproveitando o assunto família, fiquei sabendo de suas aventuras com um membro da família real. Não que seja de meu interesse com quem você passa o seu tempo livre, mas preciso saber e me responda sinceramente. Essa pequena aventura teve alguma importância para sua última missão?`
);
resposta = prompt(``);

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log(
      `\n- Pois vejo que contratei a pessoa certa para o trabalho, sua sagacidade me surpreende a cada vez que te contrato.`
    );
    vitorias++;
    i = false;
  } else if (
    resposta.toUpperCase() == "NAO" ||
    resposta.toUpperCase() == "NÃO"
  ) {
    console.log(
      `\n- Como disse, longe de mim me envolver com sua vida pessoal, mas se envolver com alguém da realeza sem motivos pode trazer olhares indesejáveis para nós. 
      Suas ações me obrigam a mover peças que eu não gostaria de mover.`
    );
    derrotas++;
    i = false;
  } else {
    console.log(
      `\n- Eu entendo ser um assunto delicado, e não estou pedindo explicações profundas. Apenas me responda sim ou nao, por favor.`
    );
    resposta = prompt(``);
    i = true;
  }
} while (i == true);

// Quinta pergunta
console.log(
  `\n- Bom, todas essas coisas eram apenas coisas pequenas comparadas com seu objetivo principal. Me diga, conseguiu roubar o Rubi da Virtude?`
);
resposta = prompt(``);

do {
  if (resposta.toUpperCase() == "SIM") {
    console.log(
      `\n- Ótimo, é por isso que eu sempre prefiro lhe contratar. Vamos, vamos, me entregue o rubi, meu associado já estava ficando impaciente.`
    );
    vitorias++;
    i = true;
  } else if (
    resposta.toUpperCase() == "NAO" ||
    resposta.toUpperCase() == "NÃO"
  ) {
    console.log(
      `\n- Esse era o seu objetivo principal. Infelizmente isso vai manchar parte do seu renome com a guilda, independentemente do quão grande ele é.`
    );
    derrotas++;
    i = true;
  } else {
    console.log(
      `\n- Não brinque com assuntos sérios, esta era a sua missão principal. Não enrole, apenas me responda: sim ou nao?`
    );
    resposta = prompt(``);
    i = false;
  }
} while (i == false);

// Desfecho

if (vitorias == 0) {
  console.log(`\n- ${nome}, não queria ser eu a fazer isso, mas suas falhas não serão mais toleradas. 
  Sua ligação com a guilda está sendo cortada neste exato momento. 
  Infelizmente você sabe demais, e meu amigo aqui irá resolver essa pendência. Adeus.`);
} else if (vitorias == 1 || vitorias == 2) {
  console.log(`\n- ${nome}, eu realmente queria que você fosse bem sucedido nessa missão. 
    Felizmente, para você, não foi um total fracasso e você ainda vai ter mais uma chance. 
    Não falhe na próxima ou você irá perder mais do que sua recompensa.`);
} else if (vitorias == 3) {
  console.log(`\n- ${nome}, saiba que a média não é algo que a gente tolere na guilda. Devido ao seu histórico, 
  desta vez irei fazer vista grossa, mas não espere receber toda a recompensa com esses fracassos.`);
} else if (vitorias == 4) {
  console.log(
    `\n- ${nome}, muito bem. Deixarei uma recomendação na guilda. Espere mais trabalhos como esse.`
  );
} else if (vitorias == 5) {
  console.log(`\n- Maravilhoso, ${nome} eu sabia que ter te contratado era a melhor opção. Além de te recomendar na guilda para outros trabalhos, 
  te darei um extra pelo que você já fez.`);
}
