let products = [];
products.push("Laptop", "Phone", "Headphones", "Monitor");


function logFirstProduct() {
  console.log(products[0]);
}
logFirstProduct()

function addProduct(name) {
   products.push(name);
}
addProduct("Tablet");


function updateProductName(position, newName) {
  products[position] = newName;

  }
  
updateProductName(1, "Smartphone")

function removeLastProduct() {
  products.pop();
}
removeLastProduct();

console.log(products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
