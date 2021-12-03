// function to display Menu Items from Pseudo API

const displayMenu = ({ menuImage, menuName, menuPrice }) => {
  return `<div class="menu-items">
      <img src=${menuImage} class="card-img" alt="Menu Items">
      <div class="card-body">
          <p class="card-name">${menuName}</p>
          <p class="card-text">${menuPrice}</p>
      </div>
      </div>`;
};

let menuItems;

const getDataFromAPI = () => {
  return fetch("./menuAPI.json")
    .then((response) => response.json())
    .then((dataJson) => {
      menuItems = dataJson;
      menuItems.map((items) => {
        document.getElementById("cards").innerHTML += displayMenu(items);
      });
    })
    .catch((error) => alert(error.message));
};

getDataFromAPI();
