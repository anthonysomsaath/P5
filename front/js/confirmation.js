/*Récupérer id de la commande*/
const id = new URL(document.location).searchParams.get("id");
console.log(id);
/*Afficher l'id de la commande*/
const orderId = document.getElementById('orderId');
orderId.innerHTML = id;
/*Vider le panier*/
localStorage.clear();