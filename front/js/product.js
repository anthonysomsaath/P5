(async function getProducts() {
    const productId = getProductId()
    console.log(productId)
    const product = await getProduct(productId)
    console.log(product)
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
    document.getElementById("title").textContent = product.name;
    document.getElementById("description").textContent = product.description;
    document.getElementById("price").textContent = product.price;
    document.getElementsByClassName("item__img")[0].innerHTML = 
    `<img src="${product.imageUrl}" alt="${product.altTxt}">`;

    let select = document.getElementById("colors")
    product.colors.forEach((colors) => {
      let options = document.createElement("option");

      options.innerHTML = `${colors}`;
      options.value = `${colors}`;

      select.appendChild(options);
    });
    
   
  }