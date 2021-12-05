// script to display modal for adding new menu items

let addMenuItem = document.getElementById("modal-btn");
let displayInputMenu = document.querySelector(".modal");
let cancelMenu = document.getElementById("cancel-menu");

// function to display form add menu item
const openModal = () => {
  displayInputMenu.classList.add("modal-active");
};

// function to cancel adding menu and close modal
const closeModal = () => {
  displayInputMenu.classList.remove("modal-active");
};

// Add event
addMenuItem.addEventListener("click", openModal);
cancelMenu.addEventListener("click", closeModal);
