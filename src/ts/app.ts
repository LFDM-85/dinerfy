console.clear();
console.log("testing...");

////////////////////////////
//DOM ELEMENTS
const btnsNavscrollto = document.querySelectorAll(".btn_scroll");
const sections = document.querySelectorAll(".section");
const section_1 = document.querySelector("#section_1");
const btnscrollto = document.querySelector("#btn_scroll");
////////////////////////////
//LOGIN MODAL

////////////////////////////
//REGISTER MODAL

////////////////////////////
//LOGOUT MODAL

////////////////////////////
//LOGIN LOGIC

////////////////////////////
//NAVBAR SCROLL / ABOUT SCROLL
// console.log(sections);
// console.log(btnsNavscrollto);

const navScrollTo = btnsNavscrollto.forEach((btn) => {
  btn?.addEventListener("click", function (e) {
    e.preventDefault();
    sections.forEach((section) => {
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

btnscrollto?.addEventListener("click", function (e) {
  e.preventDefault();
  section_1?.scrollIntoView({
    behavior: "smooth",
  });
});
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
