import faker from 'faker'

const mount = el => {
  const cartText = `
    <div>You have ${faker.random.number()} items in your cart</div>
  `
  
  el.innerHTML = cartText
}

// Context/Situation: #1
// We are running this file in development mode.
// We are using local index.html file.
// Which DEFINITELY has an element with an id of 'dev-products'.
// We want to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-cart-cart-only') 
  if (el) {
    mount(el)
  }
}
// Context/Situation: #2
// We are running the file in development or production mode.
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists.
// WE DO NOT WANT to immediately render our app.
export { mount }