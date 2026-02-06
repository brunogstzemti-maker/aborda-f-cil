export interface Phrase {
  id: string;
  text: string;
  category: string;
}

export interface CategoryData {
  name: string;
  icon: string;
  phrases: Phrase[];
}

export const blocoData: CategoryData[] = [
  {
    name: "Chegada leve",
    icon: "😊",
    phrases: [
      { id: "b1", text: "Oi, promessa rápida: só vim te conhecer.", category: "bloco" },
      { id: "b2", text: "Tô perdido no bloco, mas te achei.", category: "bloco" },
      { id: "b3", text: "Posso curtir o próximo trio contigo?", category: "bloco" },
      { id: "b4", text: "Seu sorriso tá competindo com o sol.", category: "bloco" },
    ],
  },
  {
    name: "Chegada divertida",
    icon: "😄",
    phrases: [
      { id: "b5", text: "Eu ia puxar assunto, mas fiquei sem roteiro. Pode improvisar comigo?", category: "bloco" },
      { id: "b6", text: "Tenho uma teoria: a gente já se viu em outro carnaval. Prova que não?", category: "bloco" },
      { id: "b7", text: "Se eu te perder nesse bloco, vou ficar o carnaval inteiro procurando.", category: "bloco" },
      { id: "b8", text: "Você dança assim sempre ou tá tentando me impressionar?", category: "bloco" },
    ],
  },
  {
    name: "Chegada direta",
    icon: "🎯",
    phrases: [
      { id: "b9", text: "Achei você incrível e não ia me perdoar se não viesse falar.", category: "bloco" },
      { id: "b10", text: "Oi, sou direto: quero te conhecer. Qual seu nome?", category: "bloco" },
      { id: "b11", text: "Não vim aqui com textão, só vim dizer que você chamou minha atenção.", category: "bloco" },
    ],
  },
];

export const festaData: CategoryData[] = [
  {
    name: "Abordagem casual",
    icon: "🍸",
    phrases: [
      { id: "f1", text: "Oi, tudo bem? Essa música é boa demais, né?", category: "festa" },
      { id: "f2", text: "Posso te fazer companhia por uns 2 minutos?", category: "festa" },
      { id: "f3", text: "Tô sem ninguém pra brindar. Aceita?", category: "festa" },
      { id: "f4", text: "Você veio com amigos ou tá curtindo solo também?", category: "festa" },
    ],
  },
  {
    name: "Abordagem confiante",
    icon: "💪",
    phrases: [
      { id: "f5", text: "Eu tinha que vir falar com você. Não ia conseguir curtir a noite sem tentar.", category: "festa" },
      { id: "f6", text: "Você tem uma energia incrível. Queria conhecer a pessoa por trás.", category: "festa" },
      { id: "f7", text: "Olha, vou ser sincero: te vi e vim. Simples assim.", category: "festa" },
    ],
  },
  {
    name: "Abordagem curiosa",
    icon: "🤔",
    phrases: [
      { id: "f8", text: "O que você tá bebendo? Parece bom.", category: "festa" },
      { id: "f9", text: "Você parece alguém que tem boas histórias. Conta uma?", category: "festa" },
      { id: "f10", text: "Essa festa tá boa ou só melhorou agora? Brincadeira… ou não.", category: "festa" },
      { id: "f11", text: "Deixa eu adivinhar: você não é daqui, né?", category: "festa" },
    ],
  },
];

export const ruaData: CategoryData[] = [
  {
    name: "Abordagem educada",
    icon: "🤝",
    phrases: [
      { id: "r1", text: "Oi, desculpa te parar. Te vi passando e achei que ia me arrepender se não falasse.", category: "rua" },
      { id: "r2", text: "Com licença, posso te fazer um elogio rápido? Seu estilo é muito bom.", category: "rua" },
      { id: "r3", text: "Oi, sei que é aleatório, mas queria me apresentar. Meu nome é…", category: "rua" },
    ],
  },
  {
    name: "Abordagem rápida",
    icon: "⚡",
    phrases: [
      { id: "r4", text: "Oi, posso roubar 30 segundos? Só queria te conhecer.", category: "rua" },
      { id: "r5", text: "Rápido: te achei incrível. Queria saber teu nome.", category: "rua" },
      { id: "r6", text: "Eu sei que a gente tá andando, mas bora trocar uma ideia?", category: "rua" },
    ],
  },
  {
    name: "Abordagem situacional",
    icon: "📍",
    phrases: [
      { id: "r7", text: "Você sabe um lugar bom pra comer aqui perto? Tô perdido.", category: "rua" },
      { id: "r8", text: "A gente tá indo pro mesmo lado, né? Posso ir junto?", category: "rua" },
      { id: "r9", text: "Que cachorro lindo! É seu? (funciona com qualquer coisa que ela tenha)", category: "rua" },
      { id: "r10", text: "Essa loja aí é boa? Tô procurando um presente.", category: "rua" },
    ],
  },
];

export const conversandoData = {
  continuar: [
    { id: "c1", text: "E aí, o que você mais gosta de fazer quando não tá aqui?", category: "conversando" },
    { id: "c2", text: "Me conta mais sobre isso, achei interessante.", category: "conversando" },
    { id: "c3", text: "Você já fez algo louco que ninguém sabe?", category: "conversando" },
  ],
  perguntas: [
    { id: "c4", text: "Qual a melhor viagem que você já fez?", category: "conversando" },
    { id: "c5", text: "Se você pudesse fazer qualquer coisa amanhã, o que faria?", category: "conversando" },
    { id: "c6", text: "Qual música te define agora?", category: "conversando" },
    { id: "c7", text: "Você é mais de rolê ou de Netflix?", category: "conversando" },
  ],
  contexto: [
    { id: "c8", text: "Essa música me lembra uma viagem que fiz… e você, gosta de viajar?", category: "conversando" },
    { id: "c9", text: "Esse lugar aqui é muito bom, como você conheceu?", category: "conversando" },
    { id: "c10", text: "Seus amigos parecem legais. Vocês se conhecem de onde?", category: "conversando" },
  ],
};

export interface SignalItem {
  id: string;
  text: string;
  positive: boolean;
}

export const sinaisData: SignalItem[] = [
  { id: "s1", text: "Está sorrindo", positive: true },
  { id: "s2", text: "Mantém contato visual", positive: true },
  { id: "s3", text: "Faz perguntas sobre você", positive: true },
  { id: "s4", text: "Toca em você levemente", positive: true },
  { id: "s5", text: "Corpo virado pra você", positive: true },
  { id: "s6", text: "Respostas curtas e secas", positive: false },
  { id: "s7", text: "Corpo virado pro outro lado", positive: false },
  { id: "s8", text: "Olha pro celular o tempo todo", positive: false },
  { id: "s9", text: "Não faz perguntas", positive: false },
  { id: "s10", text: "Dá passos pra trás", positive: false },
];
