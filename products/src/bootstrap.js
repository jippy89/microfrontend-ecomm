import faker from 'faker'

const mount = el => {
  let products = ''
  
  for (let i=0; i < 3; i++) {
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
  }
  
  el.innerHTML = products
}

// Context/Situation: #1
// We are running this file in development mode.
// We are using local index.html file.
// Which DEFINITELY has an element with an id of 'dev-products'.
// We want to immediately render our app into that element.
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('dev-products-products-only') 
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