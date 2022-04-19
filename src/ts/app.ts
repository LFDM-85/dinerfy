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
const usernameInputSignIn = document.querySelector(
  "#username_signin"
) as HTMLInputElement;
const passwordInputSignIn = document.querySelector(
  "#password_signin"
) as HTMLInputElement;
const emailInputSignIn = document.querySelector(
  "#email_signin"
) as HTMLInputElement;
const userlogin = document.querySelector("#userlogin") as HTMLInputElement;
const passlogin = document.querySelector("#passlogin") as HTMLInputElement;

interface User {
  username: string;
  password: string;
  email: string;
  chosenDays: string[];
  chosenMeals: string[];
  pay: number;
}

// users starts with an empty array, then, from the moment there is a record in the localstorage we will use localstorage.getItem
const users: User[] = JSON.parse(localStorage.getItem("Users")!) || [];

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

////////////////////////////
// VALIDATE ENTER AND EXIT
const order_nav = document.querySelector(
  ".nav_link_order"
) as HTMLButtonElement;
const order_section = document.querySelector("#section_4") as HTMLElement;
const login_nav = document.querySelector(".btn_login") as HTMLButtonElement;
const signin_nav = document.querySelector(".btn_signin") as HTMLButtonElement;
const logout_nav = document.querySelector(".btn_logout") as HTMLButtonElement;

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
////////////////////////////
// ADD USER

const addUser = (username: string, password: string, email: string) => {
  const readUser = JSON.parse(localStorage.getItem("Users")!);
  // console.log(readUser);
  const foundUser = readUser?.find((user: { email: string }) => {
    return user.email === email;
  });
  // console.log(foundUser);
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
      chosenDays: [],
      chosenMeals: [],
      pay: 0,
    });

    localStorage.setItem("Users", JSON.stringify(users));

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
  addUser(
    usernameInputSignIn.value,
    passwordInputSignIn.value,
    emailInputSignIn.value
  );
  clearInputs();
};

///////////////////////////
//LOGOUT
const logout = () => {
  if (confirm("Do you sure you want to leave?")) exit();
};

///////////////////////////
// LOGIN

const loginUser = (username: string, password: string) => {
  const readUser = JSON.parse(localStorage.getItem("Users")!);
  const foundUser = readUser?.find(
    (user: { username: string; password: string }) => {
      return user.username === username && user.password === password;
    }
  );

  if (foundUser) {
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

////////////////////////////
// ORDER
const getvalue = () => {
  // Read meals and update totalprice
};

const orderSend = () => {
  // Saveme days, meals and totalprice in the user
};
