console.clear();

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

interface Choices {
  chosenDay: string;
  chosenMeal: string;
  price: number;
}

interface User {
  username: string;
  password: string;
  email: string;
  choices: Choices[];
  total: number;
}

// users starts with an empty array, then, from the moment there is a record in the localstorage we will use localstorage.getItem
// Also currUser is created for validation
const users: User[] = JSON.parse(localStorage.getItem("Users")!) || [];
const currUser: User = JSON.parse(localStorage.getItem("CurrUser")!);

////////////////////////////
// Modal logic
const openModal = (mode: string) => {
  const overlay = document.querySelector(".overlay") as HTMLElement;
  const modal = document.querySelector(".modal") as HTMLElement;
  const login = document.querySelector("#login_modal") as HTMLElement;
  const signIn = document.querySelector("#signin_modal") as HTMLElement;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");

  if (mode === "login") login.classList.remove("hidden");
  if (mode === "signin") signIn.classList.remove("hidden");
};

const closeModal = () => {
  const overlay = document.querySelector(".overlay") as HTMLElement;
  const modal = document.querySelector(".modal") as HTMLElement;
  const login = document.querySelector("#login_modal") as HTMLElement;
  const signIn = document.querySelector("#signin_modal") as HTMLElement;
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  login.classList.add("hidden");
  signIn.classList.add("hidden");
};

document.addEventListener("keydown", (e) => {
  const modal = document.querySelector(".modal") as HTMLElement;
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////
//MENU LIST

plates.forEach(({ Day, img, Name, Price }) => {
  const menuItems = document.querySelector(".menu") as HTMLElement;
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
                alt="${Name} plate"
                loading="lazy"
              />
            </div>
            <span>${Name}</span>
            <span>${Price},00€</span>
          </div>
        </div>
        `;
  menuItems.prepend(menuday);
});

const enter = () => {
  const order_nav = document.querySelector(
    ".nav_link_order"
  ) as HTMLButtonElement;
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

const exit = () => {
  const order_nav = document.querySelector(
    ".nav_link_order"
  ) as HTMLButtonElement;
  const order_section = document.querySelector("#section_4") as HTMLElement;
  const login_nav = document.querySelector(".btn_login") as HTMLButtonElement;
  const signin_nav = document.querySelector(".btn_signin") as HTMLButtonElement;
  const logout_nav = document.querySelector(".btn_logout") as HTMLButtonElement;
  order_nav.classList.add("hidden");
  order_section.classList.add("hidden");
  login_nav.classList.remove("hidden");
  signin_nav.classList.remove("hidden");
  logout_nav.classList.add("hidden");
};
////////////////////////////
// ADD USER

// It searchin users array if the New User exists: if so - sends an alert message; if not - create one;

const addUser = (username: string, password: string, email: string) => {
  const foundUser = users?.find((user: { username: string }) => {
    return user.username === username;
  });
  if (foundUser) {
    alert("User already exist!!!");
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

    alert("User added. Please login to proceed");

    return localStorage.setItem("Users", JSON.stringify(users));

    // return { username, password, email };
  }
};

const clearInputs = () => {
  const userlogin = document.querySelector("#userlogin") as HTMLInputElement;
  const passlogin = document.querySelector("#passlogin") as HTMLInputElement;
  const usernameInputSignIn = document.querySelector(
    "#username_signin"
  ) as HTMLInputElement;
  const passwordInputSignIn = document.querySelector(
    "#password_signin"
  ) as HTMLInputElement;
  const emailInputSignIn = document.querySelector(
    "#email_signin"
  ) as HTMLInputElement;
  usernameInputSignIn.value = "";
  passwordInputSignIn.value = "";
  emailInputSignIn.value = "";
  userlogin.value = "";
  passlogin.value = "";
};

const signin = () => {
  const usernameInputSignIn = document.querySelector(
    "#username_signin"
  ) as HTMLInputElement;
  const passwordInputSignIn = document.querySelector(
    "#password_signin"
  ) as HTMLInputElement;
  const emailInputSignIn = document.querySelector(
    "#email_signin"
  ) as HTMLInputElement;
  addUser(
    usernameInputSignIn.value,
    passwordInputSignIn.value,
    emailInputSignIn.value
  );
  clearInputs();
  closeModal();
  exit();
};

//////////////////////////
// SHOW TOTAL
// Shows the total price when the user make a new choice
const showTotal = (choices: Choices[]) => {
  const totalPriceTitle = document.createElement("h2");
  const divTotalPrice = document.querySelector(".totalprice");
  let totalPrice: number = 0;
  choices.forEach((choice: { price: number }) => {
    totalPrice += choice.price;
  });

  totalPriceTitle.classList.add("title_totalprice");
  totalPriceTitle.innerText = `The total is: ${totalPrice.toFixed(2)}€`;
  divTotalPrice?.prepend(totalPriceTitle);
};

///////////////////////////
// select validation and attribution - changes the select attribute to the correct option
const selected = (choices: Choices[]) => {
  choices.forEach((choice) => {
    const weekday = document.querySelector(
      `#${choice.chosenDay.toLowerCase()}`
    ) as HTMLSelectElement;
    weekday.value = choice.chosenMeal;
    console.log(weekday);
  });
};

///////////////////////////
//LOGOUT
const logout = () => {
  if (confirm("Do you sure you want to leave?")) {
    exit();
    localStorage.removeItem("CurrUser");
  }
  return;
};

///////////////////////////
// LOGIN
// Will search in users if the User is present: if so - will update showTotal and selected functions and save current user in localstorage(currUser)
const loginUser = (username: string, password: string) => {
  const foundUser = users?.find(
    (user: { username: string; password: string }) =>
      user.username === username && user.password === password
  );

  if (foundUser) {
    localStorage.setItem("CurrUser", JSON.stringify(foundUser));
    enter();
    showTotal(foundUser.choices);
    selected(foundUser.choices);
    return;
  }

  alert("Username or password are incorrect!!! Try again!");
  exit();
  return;
};

const login = () => {
  const userlogin = document.querySelector("#userlogin") as HTMLInputElement;
  const passlogin = document.querySelector("#passlogin") as HTMLInputElement;
  clearInputs();
  loginUser(userlogin.value, passlogin.value);
  closeModal();
};

////////////////////////////
// CURRENT USER LOGGED IN
// Simple verification is the user is still logged on
(function () {
  if (currUser) {
    enter();
    showTotal(currUser.choices);
    selected(currUser.choices);
  }
})();

////////////////////////////
// ORDER
// Function that receive the choices from the user and then update the choices array. Can add, alter and remove meals/days
const getvalue = (e: { value: string }, day: string) => {
  // Check if specific plates of the day have been selected
  const foundPlate = plates.find(
    (plate) => day === plate.Day && e.value === plate.Type
  );

  // Check that if plate is repeated, if it is, change the plate in the same index
  console.log("CurrUser choices", currUser.choices);
  const index = currUser.choices.findIndex(
    (choice) => day === choice.chosenDay
  );
  if (foundPlate) {
    if (index !== -1) {
      currUser.choices[index] = {
        chosenDay: foundPlate.Day,
        chosenMeal: foundPlate.Type,
        price: foundPlate.Price,
      };
    } else {
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
  // If the user removes the selection of the day, remove the day/plate
  currUser.choices.splice(index, 1);
  showTotal(currUser.choices);

  localStorage.setItem("CurrUser", JSON.stringify(currUser));

  return updateCurrUserToUser();
};

///////////////////////////////
// This function copies the currUser to is respective user
const updateCurrUserToUser = () => {
  const verify = users.map((user) =>
    user.username === currUser.username && user.password === currUser.password
      ? currUser
      : user
  );

  localStorage.setItem("Users", JSON.stringify(verify));
};
