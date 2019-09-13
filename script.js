// usar defer no html para segurar a leitura do html
// puxar os elementos html e colocar em variaveis
let menuHamburguer = document.querySelector(".menu-hamburguer");
let nav = document.querySelector("nav");
let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");

// contains retorna verdadeiro ou false
// se tiver a classe, remove, se não tiver, colocar
function mostrarMenu(){
//  *** JEITO 1 ***
// nav.style.display = "flex";   --> faz o site aparecer
// if(!(nav.classList.contains("visivel"))){
//     nav.classList.add("visivel");
// }else{
//     nav.classList.remove("visivel")
// }

// *** JEITO 2 ***
// if(nav.classList.contains("visivel")){
//     nav.classList.remove("visivel")
// }else{
//     nav.classList.add("visivel");
// }

// *** JEITO 3 ***
// toggle = alternancia
    nav.classList.toggle("visivel");
    menuHamburguer.classList.toggle("ativo");
}

function pegarNome(){
    let nome = input.value;
    h2.innerHTML = `Seja bem vindo(a) ${nome}`; // acessa o valor do html do h2 e atribui o que quer
    input.value = "";
}

// evento de click no menu e atribuindo a variavel
menuHamburguer.onclick = mostrarMenu;
botao.onclick = pegarNome;


