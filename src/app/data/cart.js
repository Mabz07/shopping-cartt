export const products = [
    { id: 1, name: 'Product 1', price: 10.00, stock: 5 },
    { id: 2, name: 'Product 2', price: 20.00, stock: 6 },
    { id: 3, name: 'Product 3', price: 20.00, stock: 0 },
    { id: 4, name: 'Product 4', price: 20.00, stock: 1 },
]

export const cart = []

export function findProduct({id}) {
	return products.find(product => product.id === Number(id))
}

export function addToCart({id}) {
    const prod = findProduct({id: id})
    if (prod && prod.stock <1) {
    cart.push(prod)
    console.log(cart)
    } else {
    console.log("Product not found")
  }
}
