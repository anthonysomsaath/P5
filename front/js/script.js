/* Afficher produits */
function getProducts() {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((products) => {
    createProducts(products);
       
      })
      .catch((error) => {
        console.log('Error.');
      });
  }
  getProducts();

  function createProducts(products) {
    let dom = '';
    for (let product of products) {
      dom += `
              <a href="./product.html?id=${product._id}">
              <article>
                  <img src="${product.imageUrl}" alt="${product.altTxt}">
                 <h3 class="productName">${product.name}</h3>
                 <p class="productDescription">${product.description}</p>
              </article>
              </a>
            `;
    }
    document.getElementById('items').innerHTML = dom;
  }

