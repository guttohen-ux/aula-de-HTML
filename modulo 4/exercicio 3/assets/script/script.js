const div = document.getElementById("saida");
const linkUsado = document.getElementById("linkUsado");

document.addEventListener("click", (e) => {
  if(e.target !== linkUsado) return 
  criaTexto(div, 'Você clicou em mim', 'p')
});

const criaTexto = (x, y, tag) => {
  x.innerHTML += `<${tag}>${y}</${tag}>`;
};
