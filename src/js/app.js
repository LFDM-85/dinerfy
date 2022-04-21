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
const usernameInputSignIn = document.querySelector("#username_signin");
const passwordInputSignIn = document.querySelector("#password_signin");
const emailInputSignIn = document.querySelector("#email_signin");
const userlogin = document.querySelector("#userlogin");
const passlogin = document.querySelector("#passlogin");
const users = JSON.parse(localStorage.getItem("Users")) || [];
const currUser = JSON.parse(localStorage.getItem("CurrUser"));
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
plates.forEach(({ Day, img, Name, Price }) => {
    const menuday = document.createElement("div");
    menuday.classList.add("flex-container");
    menuday.innerHTML = `
        <div class='flex-items' >
          <h4>${Day}</h4>
          <div class="box_container">
            <div class="container">
              <img
                class="menu_img"
                src="${img}"
                alt=""
              />
            </div>
            <span>${Name}</span>
            <span>${Price},00€</span>
          </div>
        </div>
        `;
    menuItems.prepend(menuday);
});
const order_nav = document.querySelector(".nav_link_order");
const order_section = document.querySelector("#section_4");
const login_nav = document.querySelector(".btn_login");
const signin_nav = document.querySelector(".btn_signin");
const logout_nav = document.querySelector(".btn_logout");
const enter = () => {
    order_nav.classList.remove("hidden");
    order_section.classList.remove("hidden");
    login_nav.classList.add("hidden");
    signin_nav.classList.add("hidden");
    logout_nav.classList.remove("hidden");
};
const exit = () => {
    order_nav.classList.add("hidden");
    order_section.classList.add("hidden");
    login_nav.classList.remove("hidden");
    signin_nav.classList.remove("hidden");
    logout_nav.classList.add("hidden");
};
const addUser = (username, password, email) => {
    const foundUser = users === null || users === void 0 ? void 0 : users.find((user) => {
        return user.username === username;
    });
    if (foundUser) {
        alert("User already exist!!!");
        exit();
        closeModal();
        return;
    }
    if (!foundUser) {
        users.push({
            username,
            password,
            email,
            choices: [],
            total: 0,
        });
        localStorage.setItem("Users", JSON.stringify(users));
        alert("User added. Please login to proceed");
        clearInputs();
        enter();
        closeModal();
        return { username, password, email };
    }
    return;
};
const clearInputs = () => {
    usernameInputSignIn.value = "";
    passwordInputSignIn.value = "";
    emailInputSignIn.value = "";
};
const signin = () => {
    addUser(usernameInputSignIn.value, passwordInputSignIn.value, emailInputSignIn.value);
    clearInputs();
    exit();
};
const logout = () => {
    if (confirm("Do you sure you want to leave?"))
        exit();
    localStorage.removeItem("CurrUser");
};
const loginUser = (username, password) => {
    const foundUser = users === null || users === void 0 ? void 0 : users.find((user) => {
        return user.username === username && user.password === password;
    });
    if (foundUser) {
        localStorage.setItem("CurrUser", JSON.stringify(foundUser));
        clearInputs();
        enter();
        closeModal();
        return;
    }
    alert("Username or password are incorrect!!! Try again!");
    exit();
    clearInputs();
    closeModal();
    return;
};
const login = () => {
    clearInputs();
    loginUser(userlogin.value, passlogin.value);
};
(function () {
    if (JSON.parse(localStorage.getItem("CurrUser"))) {
        enter();
    }
})();
const totalPriceTitle = document.createElement("h2");
const divTotalPrice = document.querySelector(".totalprice");
const showTotal = (arr) => {
    let totalPrice = 0;
    arr.forEach((choice) => {
        totalPrice += choice.price;
    });
    console.log(totalPrice);
    totalPriceTitle.classList.add("title_totalprice");
    totalPriceTitle.innerText = `The total is: ${totalPrice.toFixed(2)}€`;
    divTotalPrice === null || divTotalPrice === void 0 ? void 0 : divTotalPrice.prepend(totalPriceTitle);
};
const getvalue = (e, day) => {
    const foundPlate = plates.find((plate) => {
        return day === plate.Day && e.value === plate.Type;
    });
    const index = currUser.choices.findIndex((choice) => day === choice.chosenDay);
    if (foundPlate) {
        if (index !== -1) {
            currUser.choices[index] = {
                chosenDay: foundPlate.Day,
                chosenMeal: foundPlate.Type,
                price: foundPlate.Price,
            };
        }
        else {
            currUser.choices.push({
                chosenDay: foundPlate.Day,
                chosenMeal: foundPlate.Type,
                price: foundPlate.Price,
            });
        }
        showTotal(currUser.choices);
        localStorage.setItem("CurrUser", JSON.stringify(currUser));
        return updateCurrUserToUser();
    }
    currUser.choices.splice(index, 1);
    showTotal(currUser.choices);
    localStorage.setItem("CurrUser", JSON.stringify(currUser));
    updateCurrUserToUser();
};
const updateCurrUserToUser = () => {
    const verify = users.map((x) => x.username === currUser.username && x.password === currUser.password
        ? currUser
        : x);
    localStorage.setItem("Users", JSON.stringify(verify));
};
