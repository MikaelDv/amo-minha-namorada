const botaoMenu = document.querySelector(".menu");
const modalMenu = document.querySelector(".menu-lateral");
const fecharModal = document.querySelector(".fechar-modal");

botaoMenu.addEventListener("click", () => {
  modalMenu.showModal();
});

fecharModal.addEventListener("click", () => {
  modalMenu.close();
});
