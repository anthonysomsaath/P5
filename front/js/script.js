/* Afficher produits */
function getProducts() {
    fetch('http://localhost:3000/api/products')
      .then((response) => response.json())
      .then((products) => {
    addProduitAcceuil(products);
       
      })
      .catch((error) => {
        console.log('Error.');
      });
  }
  getProducts();

function addProduitAcceuil(products) {
    for (product of products) {
      const productAccueil = `
            <a href="./product.html?id=${product._id}">
            <article>
                <img src="${product.imageUrl}" alt="${product.altTxt}">
               <h3 class="productName">${product.name}</h3>
               <p class="productDescription">${product.description}</p>
            </article>
            </a>
          `;
      document
        .getElementById('items')
        .insertAdjacentHTML('beforeend', productAccueil);
    }
  }

