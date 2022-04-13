"use strict";
console.clear();
console.log("testing...");
let plates = [
    {
        Name: "Salmon",
        Day: "Monday",
        Type: "Fish",
        Price: 8,
        img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    },
    {
        Name: "Lasagna",
        Day: "Monday",
        Type: "Meat",
        Price: 7,
        img: "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg",
    },
    {
        Name: "Sardines",
        Day: "Tuesday",
        Type: "Fish",
        Price: 6,
        img: "https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg",
    },
    {
        Name: "Chicken",
        Day: "Tuesday",
        Type: "Meat",
        Price: 5,
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
    },
    {
        Name: "Fish And Chips",
        Day: "Wednesday",
        Type: "Fish",
        Price: 5,
        img: "https://cdn.pixabay.com/photo/2019/11/05/00/07/fish-and-chips-4602434_960_720.jpg",
    },
    {
        Name: "Hamburguer",
        Day: "Wednesday",
        Type: "Meat",
        Price: 4,
        img: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg",
    },
    {
        Name: "Sushi",
        Day: "Thursday",
        Type: "Fish",
        Price: 10,
        img: "https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg",
    },
    {
        Name: "Spaghetti bolognese",
        Day: "Thursday",
        Type: "Meat",
        Price: 7,
        img: "https://image.freepik.com/free-photo/plate-basil-cherry-gourmet-menu_1220-1184.jpg",
    },
    {
        Name: "Chicken",
        Day: "Friday",
        Type: "Meat",
        Price: 6,
        img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg",
    },
    {
        Name: "Fish Soup",
        Day: "Friday",
        Type: "Fish",
        Price: 7,
        img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg",
    },
];
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const menuItems = document.querySelector(".menu");
let user = {
    username: "",
    password: "",
    email: "",
    chosenDays: [],
    chosenMeals: [],
};
const openModal = (mode) => {
    const login = document.querySelector("#login_modal");
    const signIn = document.querySelector("#signin_modal");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    if (mode === "login")
        login.classList.remove("hidden");
    if (mode === "signin")
        signIn.classList.remove("hidden");
};
const closeModal = () => {
    const login = document.querySelector("#login_modal");
    const signIn = document.querySelector("#signin_modal");
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    login.classList.add("hidden");
    signIn.classList.add("hidden");
};
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
plates.forEach((plate) => {
    const menuday = document.createElement("div");
    menuday.classList.add("flex-container");
    menuday.innerHTML = `
        <div class='flex-items' >
                 <h4>${plate.Day}-${plate.Type}</h4>
  
          <div class="box_container">
          <div class="container">
            <img
              class="menu_img"
              src="${plate.img}"
              alt=""
            />
          </div>
            <span>${plate.Name}</span>
            <span>${plate.Price},00€</span>
          </div>
  
        </div>
  
        `;
    menuItems.prepend(menuday);
});
const enter = () => {
    const order_nav = document.querySelector(".nav_order");
    const order_section = document.querySelector("#section_4");
    const login_nav = document.querySelector(".btn_login");
    const signin_nav = document.querySelector(".btn_signin");
    const logout_nav = document.querySelector(".btn_logout");
    order_nav.classList.remove("hidden");
    order_section.classList.remove("hidden");
    login_nav.classList.add("hidden");
    signin_nav.classList.add("hidden");
    logout_nav.classList.remove("hidden");
};
const usernameInputSignIn = document.querySelector("#username_signin");
const passwordInputSignIn = document.querySelector("#password_signin");
const emailInputSignIn = document.querySelector("#email_signin");
const btnSignIn = document.querySelector(".btn_signin_send");
const signin = () => {
    const username = usernameInputSignIn.value;
    const password = passwordInputSignIn.value;
    const email = emailInputSignIn.value;
    if (!username || !password || !email)
        return;
    const users = [];
    if (!user.username.includes(username) && !user.email.includes(email)) {
        user.username = username;
        user.password = password;
        user.email = email;
        const userid = `user.${Math.random().toFixed(4)}`;
        users.push(userid);
        localStorage.setItem(users.toString(), JSON.stringify(user));
        console.log(localStorage);
        enter();
        closeModal();
    }
    else {
        alert("This user already exists");
    }
};
const orderSend = () => {
    console.log(localStorage);
};
