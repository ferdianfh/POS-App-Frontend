// function to display Menu Items from Pseudo API

// CARA 1
const menuItems = document.getElementById("cards");

const displayMenu = () => {
  foodMenus.map((menu) => {
    menuItems.innerHTML += `
      <div class="menu-items">
        <img src="${menu.image}" class="card-img" alt="${menu.name}">
        <div class="card-body">
            <p class="card-name">${menu.name}</p>
            <p class="card-text">Rp ${menu.price}.000</p>
        </div>
      </div>
    `;
  });
};
displayMenu();

// CARA 2
// const displayMenu = ({ menuImage, menuName, menuPrice }) => {
//   return `<div class="menu-items">
//       <img src=${menuImage} class="card-img" alt="Menu Items">
//       <div class="card-body">
//           <p class="card-name">${menuName}</p>
//           <p class="card-text">${menuPrice}</p>
//       </div>
//       </div>`;
// };

// let menuItems;

// const getDataFromAPI = () => {
//   return fetch("./API/menuAPI.json")
//     .then((response) => response.json())
//     .then((dataJson) => {
//       menuItems = dataJson;
//       menuItems.map((items) => {
//         document.getElementById("cards").innerHTML += displayMenu(items);
//       });
//     })
//     .catch((error) => alert(error.message));
// };

// getDataFromAPI();
