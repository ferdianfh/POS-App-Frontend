// Add Menu item to cart
const selectedMenuEl = document.querySelector(".selected-menu-section");
const orderConfirm = document.querySelector(".order-confirm");
const totalOrderInCart = document.querySelector(".cart-badge-count");
const cancelOrderFood = document.querySelector(".cart-content");

let cart = [];
// Function to add menu to cart
const selectMenu = (id) => {
  if (cart.some((menu) => menu.id === id)) {
    changeOrderFrequency("plus", id);
  } else {
    const selectedMenu = foodMenus.find((menu) => menu.id === id);

    cart.push({
      ...selectedMenu,
      orderFrequency: 1,
    });
  }
  updateCart();
};

// Function to update cart layout
const updateCart = () => {
  displaySelectedMenu();
  calculateSubtotal();
};

// Function to display selected Menu on cart
const displaySelectedMenu = () => {
  selectedMenuEl.innerHTML = "";
  cart.forEach((menu) => {
    selectedMenuEl.innerHTML += `
         <div class="cart-selected-menu">
           <div class="sltd-mn-info">
             <img
               class="sltd-mn-img"
               src="${menu.image}"
               alt="${menu.name}"
               onclick="removeSelectedMenu(${menu.id})"
             />
             <div class="info-wrapper">
               <p class="sltd-mn-name">${menu.name}</p>
               <div class="units">
                 <div class="btn minus" onclick="changeOrderFrequency('minus', ${
                   menu.id
                 })">-</div>
                 <div class="number">${menu.orderFrequency}</div>
                 <div class="btn plus" onclick="changeOrderFrequency('plus', ${
                   menu.id
                 })">+</div>
               </div>
             </div>
           </div>
           <div class="total-price">
             <p class="total-price">Rp. ${
               menu.price * menu.orderFrequency
             }.000</p  
           </div>
         </div>
     `;
  });
};

// Function to calculate subtotal of the price
const calculateSubtotal = () => {
  let totalPrice = 0;
  let totalOrder = 0;

  cart.forEach((menu) => {
    totalPrice += menu.price * menu.orderFrequency;
    totalOrder += menu.orderFrequency;
  });

  orderConfirm.innerHTML = `
   <div class="subtotal">
       <p class="subtotal-text">Total:</p>
       <p class="subtotal-number">Rp. ${totalPrice}.000*</p>
     </div>
     <p class="ppn-text">*Belum termasuk ppn</p>
     <div class="order-confirm-buttons">
       <button class="checkout-btn">Checkout</button>
       <button class="cancel-order-btn" onclick="cancelButton()" >Cancel</button>
     </div>
   `;
  totalOrderInCart.innerHTML = totalOrder;
};

// Function to change Order Frequency of menu item
const changeOrderFrequency = (action, id) => {
  cart = cart.map((menu) => {
    let previousOrderFrequency = menu.orderFrequency;

    if (menu.id === id) {
      if (action === "minus" && previousOrderFrequency > 1) {
        previousOrderFrequency--;
      } else if (action === "plus") {
        previousOrderFrequency++;
      }
    }

    return {
      ...menu,
      orderFrequency: previousOrderFrequency,
    };
  });

  updateCart();
};

// Function to remove selected menu from cart
const removeSelectedMenu = (id) => {
  cart = cart.filter((menu) => menu.id !== id);

  updateCart();
};

// Cancel order button
const cancelButton = () => {
  cancelOrderFood.innerHTML = `
       <div class="empty-message">
           <div class="cute-img">
             <img src="./src/icons/cutie.svg" alt="Cutie" />
           </div>
           <h2 class="head-text">Your cart is empty</h2>
           <p class="desc-text">Please add some items from the menu</p>
       </div>
   `;
};
