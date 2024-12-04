let titulo = document.createElement("h1");


titulo.id = "titulo";
titulo.innerText = "Rações e refeições";

let body = document.querySelector("body");

body.appendChild(titulo);


let produto = document.createElement("div");


produto.innerHTML = `
  <div>
    <h2>Ração Auau</h2>
    <img src="imagens/raçãoAuAu.jpg" alt="ração auau">
    <p>Arroz para fazer comida para cachorro.</p>
    <p id="preco-arroz">R$ 9,99</p>
  </div>
`;

body.appendChild(produto)