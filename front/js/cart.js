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
  
    function cartItemDisplay(localStorageProducts) {
      let str = '';
      localStorageProducts.forEach((localStorageProducts) => {
        str += `<article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
          <img src="${localStorageProducts.image}" alt="${localStorageProducts.alt}">
        </div>
        <div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>${localStorageProducts.name}</h2>
            <p>${localStorageProducts.color}</p>
            <p>${localStorageProducts.price}</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté :</p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${localStorageProducts.quantity}>
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>
`;
      });
      document.querySelector(".cart__items").innerHTML = str;
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
  
  const removeCart = document.getElementsByClassName("cart__item__content__settings__delete");

  for (let i = 0; i < removeCart.length; i++) {
  let removeButton = removeCart[i];
  removeButton.addEventListener("click", function(event, index) {
    event.preventDefault();
    const buttonClicked = event.target;
    const products = localStorageProducts.filter((product, iterator) => index !== iterator);
    localStorage.setItem("localStorageProducts", JSON.stringify(products));
    location.reload(); 
 });
}

  const qttModif = document.querySelectorAll(".itemQuantity");

  for (let i = 0; i < qttModif.length; i++){
      qttModif[i].addEventListener("change" , function(event) {
          event.preventDefault();
          let quantityModif = localStorageProducts[i].quantity;
          let qttModifValue = qttModif[i].valueAsNumber;
          const resultFind = produitLocalStorage.find((el) => el.qttModifValue !== quantityModif);
          resultFind.quantity = qttModifValue;
          localStorageProducts[i].quantity = resultFind.quantity;
          localStorage.setItem("produit", JSON.stringify(localStorageProducts));
          location.reload();
      })
  }

