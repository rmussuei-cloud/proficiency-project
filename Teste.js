// ======================================
// PROficiency Project
// teste.js
// ======================================

// Dados do candidato
let candidato = {
    nome: "",
    whatsapp: "",
    email: "",
    cidade: ""
};

// Perguntas do teste
const perguntas = [

{
pergunta:"She ____ to school every day.",
opcoes:["go","goes","going","gone"],
resposta:1
},

{
pergunta:"I ____ from Mozambique.",
opcoes:["am","is","are","be"],
resposta:0
},

{
pergunta:"They ____ football every Saturday.",
opcoes:["plays","play","playing","played"],
resposta:1
},

{
pergunta:"He ____ a new car yesterday.",
opcoes:["buy","buys","bought","buying"],
resposta:2
},

{
pergunta:"We ____ lunch at 1 o'clock.",
opcoes:["has","have","having","had"],
resposta:1
},

{
pergunta:"Choose the correct sentence.",
opcoes:[
"I have lived here for five years.",
"I live here since five years.",
"I living here.",
"I has lived here."
],
resposta:0
},

{
pergunta:"If I ____ rich, I would travel.",
opcoes:["am","was","were","be"],
resposta:2
},

{
pergunta:"She has ____ her homework.",
opcoes:["finish","finished","finishing","finishes"],
resposta:1
},

{
pergunta:"The meeting ____ before I arrived.",
opcoes:["started","has started","starting","start"],
resposta:0
},

{
pergunta:"They ____ to Maputo last week.",
opcoes:["go","went","gone","going"],
resposta:1
},

{
pergunta:"Choose the passive sentence.",
opcoes:[
"The letter was written yesterday.",
"He wrote a letter.",
"They write letters.",
"I write letters."
],
resposta:0
},

{
pergunta:"By next year I ____ my degree.",
opcoes:[
"will finish",
"will have finished",
"finish",
"finished"
],
resposta:1
},

{
pergunta:"She speaks English ____ than me.",
opcoes:[
"good",
"better",
"best",
"well"
],
resposta:1
},

{
pergunta:"I wish I ____ taller.",
opcoes:[
"am",
"were",
"was",
"be"
],
resposta:1
},

{
pergunta:"Choose the correct sentence.",
opcoes:[
"Neither of them is here.",
"Neither of them are here.",
"They neither is here.",
"They neither are here."
],
resposta:0
},

{
pergunta:"He denied ____ the money.",
opcoes:[
"to steal",
"stealing",
"stole",
"steal"
],
resposta:1
},

{
pergunta:"Scarcely ____ when the phone rang.",
opcoes:[
"I had slept",
"had I slept",
"I slept",
"did I sleep"
],
resposta:1
},

{
pergunta:"Not only ____ late, but he forgot the report.",
opcoes:[
"he was",
"was he",
"did he",
"he did"
],
resposta:1
},

{
pergunta:"Hardly ____ home when it started raining.",
opcoes:[
"I reached",
"had I reached",
"I had reached",
"did I reached"
],
resposta:1
},

{
pergunta:"The project must ____ by tomorrow.",
opcoes:[
"finish",
"be finished",
"finished",
"finishing"
],
resposta:1
},

{
pergunta:"Choose the correct option.",
opcoes:[
"No sooner had he arrived than the meeting started.",
"No sooner he arrived than the meeting started.",
"He arrived no sooner.",
"No sooner arrived."
],
resposta:0
},

{
pergunta:"The proposal was rejected ____ its cost.",
opcoes:[
"because",
"because of",
"although",
"despite"
],
resposta:1
},

{
pergunta:"If she had studied, she ____ the exam.",
opcoes:[
"would pass",
"would have passed",
"passed",
"will pass"
],
resposta:1
},

{
pergunta:"Little ____ about the surprise.",
opcoes:[
"did they know",
"they knew",
"they know",
"do they know"
],
resposta:0
},

{
pergunta:"He is accustomed ____ early.",
opcoes:[
"to wake",
"to waking",
"wake",
"waking"
],
resposta:1
},

{
pergunta:"Choose the formal expression.",
opcoes:[
"I would appreciate your assistance.",
"Help me now.",
"I need help.",
"Give me help."
],
resposta:0
},

{
pergunta:"The report ____ before the deadline.",
opcoes:[
"had been submitted",
"submitted",
"has submit",
"submit"
],
resposta:0
},

{
pergunta:"Were I in your position, I ____ differently.",
opcoes:[
"would act",
"acted",
"act",
"will act"
],
resposta:0
},

{
pergunta:"Not until yesterday ____ the truth.",
opcoes:[
"did we discover",
"we discovered",
"we discover",
"discover we"
],
resposta:0
},

{
pergunta:"Had it not been for your help, I ____ succeeded.",
opcoes:[
"would never have",
"would never",
"never",
"had never"
],
resposta:0
}

];

// Variáveis

let atual = 0;

let pontos = 0;

let respostas = [];

let tempo = 600;

// Elementos

const inicio = document.getElementById("inicio");

const prova = document.getElementById("prova");

const resultado = document.getElementById("resultado");

const btnComecar = document.getElementById("btnComecar");

const btnProxima = document.getElementById("btnProxima");

const btnAnterior = document.getElementById("btnAnterior");

// Iniciar teste

btnComecar.onclick = function(){

candidato.nome = document.getElementById("nome").value.trim();

candidato.whatsapp = document.getElementById("whatsapp").value.trim();

candidato.email = document.getElementById("email").value.trim();

candidato.cidade = document.getElementById("cidade").value.trim();

if(candidato.nome===""){

alert("Digite o seu nome.");

return;

}

inicio.style.display="none";

prova.style.display="block";

mostrarPergunta();

iniciarTempo();

};

// Mostrar pergunta

function mostrarPergunta(){

document.getElementById("numeroPergunta").innerHTML=atual+1;

document.getElementById("pergunta").innerHTML=perguntas[atual].pergunta;

const caixa=document.getElementById("alternativas");

caixa.innerHTML="";

perguntas[atual].opcoes.forEach(function(opcao,indice){

const div=document.createElement("div");

div.className="alternativa";

div.innerHTML=opcao;

div.onclick=function(){

document.querySelectorAll(".alternativa").forEach(el=>el.classList.remove("selecionada"));

div.classList.add("selecionada");

respostas[atual]=indice;

};

caixa.appendChild(div);

});

document.getElementById("barraProgresso").style.width=((atual+1)/perguntas.length*100)+"%";

}
// ======================================
// Cronómetro
// ======================================

let intervalo;

function iniciarTempo(){

intervalo=setInterval(function(){

tempo--;

let minutos=Math.floor(tempo/60);

let segundos=tempo%60;

if(minutos<10){

minutos="0"+minutos;

}

if(segundos<10){

segundos="0"+segundos;

}

document.getElementById("tempo").innerHTML=minutos+":"+segundos;

if(tempo<=0){

clearInterval(intervalo);

finalizarTeste();

}

},1000);

}

// ======================================
// Próxima pergunta
// ======================================

btnProxima.onclick=function(){

if(respostas[atual]==undefined){

alert("Escolha uma resposta antes de continuar.");

return;

}

if(atual<perguntas.length-1){

atual++;

mostrarPergunta();

}else{

finalizarTeste();

}

};

// ======================================
// Pergunta anterior
// ======================================

btnAnterior.onclick=function(){

if(atual>0){

atual--;

mostrarPergunta();

}

};

// ======================================
// Finalizar teste
// ======================================

function finalizarTeste(){

clearInterval(intervalo);

pontos=0;

for(let i=0;i<perguntas.length;i++){

if(respostas[i]==perguntas[i].resposta){

pontos++;

}

}

let nivel="A1";
let descricao="Você está a iniciar a aprendizagem da língua inglesa.";

if(pontos>=6){

nivel="A2";
descricao="Você já compreende estruturas básicas do inglês.";

}

if(pontos>=12){

nivel="B1";
descricao="Você consegue comunicar em situações do dia a dia.";

}

if(pontos>=18){

nivel="B2";
descricao="Você comunica com confiança em ambientes académicos e profissionais.";

}

if(pontos>=24){

nivel="C1";
descricao="Excelente domínio da língua inglesa.";

}

if(pontos>=29){

nivel="C2";
descricao="Domínio quase nativo da língua inglesa.";

}

prova.style.display="none";

resultado.style.display="block";

document.getElementById("pontos").innerHTML=pontos+"/"+perguntas.length;

document.getElementById("nivel").innerHTML=nivel;

document.getElementById("descricao").innerHTML=descricao;

// WhatsApp

const mensagem=

"Olá!%20Concluí%20o%20Teste%20de%20Proficiência.%0A%0A"+

"Nome:%20"+encodeURIComponent(candidato.nome)+"%0A"+

"Nível:%20"+nivel+"%0A"+

"Pontuação:%20"+pontos+"/"+perguntas.length+"%0A%0A"+

"Gostaria%20de%20inscrever-me%20no%20curso.";

document.getElementById("btnWhatsapp").href=

"https://wa.me/258871831693?text="+mensagem;

}
