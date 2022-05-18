import { mount as mountProduct } from 'products/ProductIndex'
import { mount as mountCart } from 'cart/CartShow'

console.log("Hello container")
const productEl = document.getElementById('dev-products')
mountProduct(productEl)

const cartEl = document.getElementById('dev-cart')
mountCart(cartEl)