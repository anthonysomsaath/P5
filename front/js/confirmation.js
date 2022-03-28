const id = new URL(document.location).searchParams.get("id");
console.log(id);
const orderId = document.getElementById('orderId');
orderId.innerHTML = id;
localStorage.clear();