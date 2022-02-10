(async function() {
    const productId = getProductId()
    const product = getProduct(productId)
    hydrateProduct(product)
})()