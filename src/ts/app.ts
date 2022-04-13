console.clear();
console.log("testing...");

////////////////////////////
// MENU LIST

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

////////////////////////////
//DOM ELEMENTS
const overlay = document.querySelector(".overlay") as HTMLElement;
const modal = document.querySelector(".modal") as HTMLElement;
const menuItems = document.querySelector(".menu") as HTMLElement;

/// SignIn

////////////////////////////

interface User {
  username: string;
  password: string;
  email: string;
  chosenDays: string[];
  chosenMeals: string[];
}

let user: User = {
  username: "",
  password: "",
  email: "",
  chosenDays: [],
  chosenMeals: [],
};

////////////////////////////
// Modal logic

const openModal = (mode: string) => {
  const login = document.querySelector("#login_modal") as HTMLElement;
  const signIn = document.querySelector("#signin_modal") as HTMLElement;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  if (mode === "login") login.classList.remove("hidden");
  if (mode === "signin") signIn.classList.remove("hidden");
};

const closeModal = () => {
  const login = document.querySelector("#login_modal") as HTMLElement;
  const signIn = document.querySelector("#signin_modal") as HTMLElement;
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

////////////////////////////
//MENU LIST

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

////////////////////////////
// VALIDATE
const enter = () => {
  const order_nav = document.querySelector(".nav_order") as HTMLButtonElement;
  const order_section = document.querySelector("#section_4") as HTMLElement;
  const login_nav = document.querySelector(".btn_login") as HTMLButtonElement;
  const signin_nav = document.querySelector(".btn_signin") as HTMLButtonElement;
  const logout_nav = document.querySelector(".btn_logout") as HTMLButtonElement;

  order_nav.classList.remove("hidden");
  order_section.classList.remove("hidden");
  login_nav.classList.add("hidden");
  signin_nav.classList.add("hidden");
  logout_nav.classList.remove("hidden");
};

////////////////////////////
// REGISTER
const usernameInputSignIn = document.querySelector(
  "#username_signin"
) as HTMLInputElement;
const passwordInputSignIn = document.querySelector(
  "#password_signin"
) as HTMLInputElement;
const emailInputSignIn = document.querySelector(
  "#email_signin"
) as HTMLInputElement;
const btnSignIn = document.querySelector(
  ".btn_signin_send"
) as HTMLButtonElement;

const signin = () => {
  const username = usernameInputSignIn.value;
  const password = passwordInputSignIn.value;
  const email = emailInputSignIn.value;

  if (!username || !password || !email) return;

  const users: string[] = [];

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
  } else {
    alert("This user already exists");
  }
};

////////////////////////////
//

////////////////////////////
// ORDER

const orderSend = () => {
  console.log(localStorage);
};

////////////////////////////
//REVIEWS
////////////////////////////
//FOOTER
