"use strict";
console.clear();
console.log("testing...");
const btnsNavscrollto = document.querySelectorAll(".btn_scroll");
const sections = document.querySelectorAll(".section");
const section_1 = document.querySelector("#section_1");
const btnscrollto = document.querySelector("#btn_scroll");
const navScrollTo = btnsNavscrollto.forEach((btn) => {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function (e) {
        e.preventDefault();
        sections.forEach((section) => section.scrollIntoView({ behavior: "smooth" }));
    });
});
btnscrollto === null || btnscrollto === void 0 ? void 0 : btnscrollto.addEventListener("click", function (e) {
    e.preventDefault();
    section_1 === null || section_1 === void 0 ? void 0 : section_1.scrollIntoView({
        behavior: "smooth",
    });
});
