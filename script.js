// ===============================
// PROficiency Project
// script.js
// ===============================

// Cabeçalho com efeito ao rolar
window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if (window.scrollY > 80) {

header.style.background = "#061d42";
header.style.padding = "12px 0";
header.style.transition = ".3s";

} else {

header.style.background = "#082b63";
header.style.padding = "18px 0";

}

});

// Animação ao aparecer na tela

const elementos = document.querySelectorAll(
".card,.curso,.item,.sobre .texto,.sobre img"
);

const aparecer = () => {

const topo = window.innerHeight;

elementos.forEach((el) => {

const pos = el.getBoundingClientRect().top;

if (pos < topo - 100) {

el.style.opacity = "1";
el.style.transform = "translateY(0px)";

}

});

};

elementos.forEach((el) => {

el.style.opacity = "0";
el.style.transform = "translateY(50px)";
el.style.transition = ".8s";

});

window.addEventListener("scroll", aparecer);

aparecer();


// Botão voltar ao topo

const botao = document.createElement("button");

botao.innerHTML = "⬆";

botao.id = "topo";

document.body.appendChild(botao);

botao.style.position = "fixed";
botao.style.bottom = "100px";
botao.style.right = "25px";
botao.style.width = "55px";
botao.style.height = "55px";
botao.style.border = "none";
botao.style.borderRadius = "50%";
botao.style.background = "#082b63";
botao.style.color = "white";
botao.style.fontSize = "22px";
botao.style.cursor = "pointer";
botao.style.display = "none";
botao.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
botao.style.zIndex = "999";

window.addEventListener("scroll", function () {

if (window.scrollY > 300) {

botao.style.display = "block";

} else {

botao.style.display = "none";

}

});

botao.onclick = function () {

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Mensagem de boas-vindas

setTimeout(function(){

console.log("Bem-vindo ao Proficiency Project!");

},1000);
