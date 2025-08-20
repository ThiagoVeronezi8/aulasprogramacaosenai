const prompt = require("prompt-sync")()


let listaDeCompras = [];


function adicionarItem(item) {
  listaDeCompras.push(item);
  console.log(`"${item}" adicionado à lista.`);
}

function removerItem(item) {
  const index = listaDeCompras.indexOf(item);
  if (index !== -1) {
    listaDeCompras.splice(index, 1);
    console.log(`"${item}" removido da lista.`);
  } else {
    console.log(`"${item}" não encontrado na lista.`);
  }
}

function visualizarLista() {
  console.log("\n📋 Lista de Compras:");
  if (listaDeCompras.length === 0) {
    console.log("A lista está vazia.");
  } else {
    listaDeCompras.forEach((item, i) => {
      console.log(`${i + 1}. ${item}`);
    });
  }
  console.log(""); 
}


adicionarItem("Arroz");
adicionarItem("Feijão");
adicionarItem("Leite");

visualizarLista();

removerItem("Feijão");

visualizarLista();
