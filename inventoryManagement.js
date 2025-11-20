// Write your code here
const products = [ "Laptop", "Smartphone", "Tablet", "Monitor", "Keyboard" ];

function addProduct(productName) {
  products.push(productName);
}
console.log(products[0]);
function logFirstProduct() {
  console.log(products[0]);
}
function updateProductName(index, newName) {
  products[index] = newName;
}
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
