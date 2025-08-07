function pesquisar() {
  const termo = document.getElementById("busca").value.trim().toLowerCase();

  // Salvar a pesquisa no localStorage
  if (termo) {
    salvarPesquisa(termo);
  }

  // Procurar correspondência em produtos
  const produtos = document.querySelectorAll(".produto");
  let encontrado = false;

  produtos.forEach((produto) => {
    const nome = produto.querySelector("h3").textContent.toLowerCase();
    if (nome.includes(termo)) {
      produto.scrollIntoView({ behavior: "smooth", block: "center" });
      produto.style.border = "2px solid red"; // destaque temporário
      setTimeout(() => {
        produto.style.border = "none";
      }, 2000);
      encontrado = true;
    }
  });

  if (!encontrado) {
    alert("Produto não encontrado 😕");
  }
}

function salvarPesquisa(palavra) {
  let pesquisas = JSON.parse(localStorage.getItem("pesquisas")) || [];
  pesquisas.push({ termo: palavra, data: new Date().toLocaleString() });
  localStorage.setItem("pesquisas", JSON.stringify(pesquisas));
}

// 👉 Opcional: função para ver as pesquisas salvas (para uso futuro no admin)
function verPesquisas() {
  const pesquisas = JSON.parse(localStorage.getItem("pesquisas")) || [];
  console.table(pesquisas);
}