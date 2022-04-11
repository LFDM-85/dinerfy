"use strict";
console.clear();
console.log("testing...");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnLogin = document.querySelector(".btn_login");
const btnCloseModal = document.querySelector(".btn_close_modal");
const openModal = (e) => {
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
