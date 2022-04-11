console.clear();
console.log("testing...");

////////////////////////////
//DOM ELEMENTS
const modal = document.querySelector(".modal") as HTMLElement;
const overlay = document.querySelector(".overlay") as HTMLElement;
const btnLogin = document.querySelector(".btn_login") as HTMLButtonElement;
const btnCloseModal = document.querySelector(
  ".btn_close_modal"
) as HTMLButtonElement;
////////////////////////////
//LOGIN MODAL

const openModal = (e: { preventDefault: () => void }) => {
  e.preventDefault();

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnLogin.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////
//REGISTER MODAL

////////////////////////////
//LOGOUT MODAL

////////////////////////////
//LOGIN LOGIC

////////////////////////////
//REGISTER LOGIC

////////////////////////////
//LOGOUT LOGIC

////////////////////////////
//LOCALSTORAGE LOGIC

////////////////////////////
//MENU LIST / MENU SLIDESHOW

////////////////////////////
//REVIEWS SLIDESHOW

////////////////////////////
//FOOTER MAP LOGIC
