/*Afficher le produit sur lequel l'utilisateur clique*/
(async function getProducts() {

  /*Récupérer l'id du produit*/
  const productId = getProductId()
  console.log(productId)
  /*Récupérer info du produit dont l'id correspond*/
  const product = await getProduct(productId)
  console.log(product)
  /*Intégrer les élements du produits dans la page*/
  addProduct(product)
})()

function getProductId() {
return new URL(location.href).searchParams.get("id")
}

function getProduct(productId) {
  return fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => response.json())
  .catch((error) => {
    console.log('Error.');
  });
}


function addProduct(product) {
  document.title = product.name;
  document.getElementById("title").innerHTML = product.name;
  document.getElementById("description").innerHTML = product.description;
  document.getElementById("price").innerHTML = product.price;
  document.getElementsByClassName("item__img")[0].innerHTML = 
  `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

  let select = document.getElementById("colors")
  product.colors.forEach((colors) => {
    let options = document.createElement("option");

    options.innerHTML = `${colors}`;
    options.value = `${colors}`;

    select.appendChild(options);
  });
  addToCart(product);
}

const colorOption = document.querySelector("#colors");
const quantityOption = document.querySelector("#quantity");

/*Ajout au panier lors du clique*/
function addToCart(product) {
  const buttonCart = document.querySelector("#addToCart");
  buttonCart.addEventListener("click", (event) => {
      const colorProd = colorOption.value;
      const quantityProd = quantityOption.value;
      /*Stockage des infos du produits dans un objet*/
      const prodOptions = {
        id : product._id,
        name : product.name,
        color : colorProd,
        quantity : Number(quantityProd),
        price : product.price,
        description : product.description,
        image : product.imageUrl,
        alt : product.altTxt
      };

      /*Instauration du local storage pour stocker les infos du produits que l'on souhaite ajouter au panier*/
      let localStorageProducts = JSON.parse(localStorage.getItem('localStorageProducts'));

      /*Local storage sous frome d'un tableau*/
      if (localStorageProducts === null) {
        localStorageProducts = [];
      }
      /*Ajout d'une quantité d'un produit déjà existant dans le panier*/
      let filled = false;
      localStorageProducts.forEach((element) => {
        if (element.id === product.id && element.color === colorOption.value) {
          Number(element.quantity) + Number(quantityOption.value);
          filled = true;
        }
      });
      /*Ajout des infos du produit dans le local storage*/
      if (!filled) {
        localStorageProducts.push(prodOptions);
        
      }
      console.log(localStorageProducts);
      localStorage.setItem('localStorageProducts',JSON.stringify(localStorageProducts));
  })
}
