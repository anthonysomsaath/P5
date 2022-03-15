let localStorageProducts = JSON.parse(
    localStorage.getItem('localStorageProducts')
  );
  const cartStatus = document.querySelector("#cart__items");

  const cartDisplay = async () => {
    if (localStorageProducts === null){
    const emptyCart = `<p>Votre panier est vide</p>`;
    cartStatus.innerHTML = emptyCart;
} else {
    await localStorageProducts; 
    console.log(localStorageProducts);
  
    function cartItemDisplay() {
      let str = '';
      localStorageProducts.forEach((product) => {
        str += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
          <img src="${product.image}" alt="${product.alt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${product.name}</h2>
            <p>${product.color}</p>
            <p>${product.price}</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté :</p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${product.quantity}>
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>
`;
      });
      cartStatus.innerHTML = str;
    }
    cartItemDisplay()}
  };
  cartDisplay();


function getTotalQuantity(){

    let totalQuantity = 0;
          for (let i = 0; i < localStorageProducts.length; i++) {
            let quantity = parseInt(localStorageProducts[i].quantity, 10);
            totalQuantity += quantity;
          }
          return totalQuantity;
  }
  const quantity = document.getElementById("totalQuantity");
  quantity.textContent = getTotalQuantity();
  
function getTotalPrice(){
  
    let totalPrice = 0;
          for (let i = 0; i < localStorageProducts.length; i++) {
            let price = parseInt(localStorageProducts[i].price, 10);
            let quantity = parseInt(localStorageProducts[i].quantity, 10);
            totalPrice += price * quantity;
          }
          return totalPrice;
  }
  console.log(getTotalPrice());
  
  const price = document.getElementById("totalPrice");
  price.textContent = getTotalPrice();
  
  const removeButton = document.querySelectorAll(".deleteItem");

  for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener("click", (event) => {
    console.log("clicked");
    event.preventDefault();
    let idRemove = localStorageProducts[i].id;
    let colorRemove = localStorageProducts[i].color;
    localStorageProducts = localStorageProducts.filter( el => el.id !== idRemove || el.color !== colorRemove );
    localStorage.setItem("localStorageProducts", JSON.stringify(localStorageProducts));
    location.reload(); 
 });
}

  const qttModif = document.querySelectorAll(".itemQuantity");

  for (let i = 0; i < qttModif.length; i++){
      qttModif[i].addEventListener("change" , function(event) {
          event.preventDefault();
          let quantityModif = localStorageProducts[i].quantity;
          let qttModifValue = qttModif[i].valueAsNumber;
          const resultFind = localStorageProducts.find((el) => el.qttModifValue !== quantityModif);
          resultFind.quantity = qttModifValue;
          localStorageProducts[i].quantity = resultFind.quantity;
          localStorage.setItem("localStorageProducts", JSON.stringify(localStorageProducts));
          location.reload();
      })
  }

