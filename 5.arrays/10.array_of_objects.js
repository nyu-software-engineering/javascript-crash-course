// data in apps is often stored as an array of objects
const products = [
  {
    id: 1,
    title: "Boa, emerald green tree",
    price: "$31.82",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    id: 2,
    title: "Bleu, blue-breasted cordon",
    price: "$35.66",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  }, // imagine there were more product objects...
]

// loop through each product
products.forEach(product => {
  // print the title and price of each product
  console.log(`${product.title} - ${product.price}`)
})
