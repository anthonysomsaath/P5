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
  
    cart__items.innerHTML = localStorageProducts.map(
      (localStorageProducts) => `
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
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
    `)
  }
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

  var removeCart = document.getElementsByClassName("cart__item__content__settings__delete")
  console.log(removeCart);
  for (var i = 0; i < removeCart.length; i++) {
    var removeButton = removeCart[i]
    button.addEventListener("click", function(event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.parentElement.remove()
    })
  }

