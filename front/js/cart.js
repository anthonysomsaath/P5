let localStorageProducts = JSON.parse(
    localStorage.getItem('localStorageProducts')
  );
  const cartStatus = document.querySelector("#cart__items");

  function cartDisplay() {
    if (localStorageProducts === null){
    const emptyCart = `<p>Votre panier est vide</p>`;
    cartStatus.innerHTML = emptyCart;
} else {
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
  removeButton[i].addEventListener("click", function(event) {
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

  function getForm (){
    let form = document.querySelector(".cart__order__form");
    let emailForm = new RegExp("[a-z|1-9]{2,}[@][a-z]{2,}[\.][a-z]{2,3}");
    let charForm = new RegExp("[A-Z][a-z]{2,}");
    let addressForm = new RegExp(".{7,60}");

    form.firstName.addEventListener('change', () => {
      let firstNameError = document.getElementById("firstNameErrorMsg");
      let inputFirstName = document.getElementById("firstName");
      if (charForm.test(inputFirstName.value)) {
          firstNameError.innerHTML = '';
      } else {
          firstNameError.innerHTML = 'Veuillez renseigner un prénom valide.';
      }
  });
    form.lastName.addEventListener('change', ()=>{
      let lastNameError = document.getElementById("lastNameErrorMsg");
      let inputLastName = document.getElementById("lastName");
      if (charForm.test(inputLastName.value)) {
          lastNameError.innerHTML = '';
      } else {
          lastNameError.innerHTML = 'Veuillez renseigner un nom valide.';
      }
  });
    form.address.addEventListener('change', ()=> {
      let addressError = document.getElementById("addressNameErrorMsg");
      let inputAddress = document.getElementById("address");
      if (addressForm.test(inputAddress.value)) {
          addressError.innerHTML = '';
      } else {
          addressError.innerHTML = 'Veuillez renseigner une adresse valide.';
      }
    });
    form.city.addEventListener('change', ()=> {
      let cityError = document.getElementById("cityErrorMsg");
      let inputCity = document.getElementById("city");
      if (charForm.test(inputCity.value)) {
          cityError.innerHTML = '';
      } else {
          cityError.innerHTML = 'Veuillez renseigner une adresse e-mail valide.';
      }
  });
    form.email.addEventListener('change', ()=> {
      let emailError = document.getElementById("emailErrorMsg");
      let inputEmail = document.getElementById("email");
      if (emailForm.test(inputEmail.value)) {
          emailError.innerHTML = '';
      } else {
          emailError.innerHTML = 'Veuillez renseigner votre email.';
      }
  });
  }
