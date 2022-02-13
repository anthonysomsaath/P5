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
    document.getElementById("title").innerHTML = product.name;
    document.getElementById("description").innerHTML = product.description;
    document.getElementById("price").innerHTML = product.price;
    document.getElementsByClassName("item__img").innerHTML = 
    `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
   
  }