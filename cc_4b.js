// Step 2: Defining array of 5 products
let products = [
  { sku: "E1001", name: "Laptop", category: "electronics", price: 1000, inventory: 5 },
  { sku: "C2001", name: "T-Shirt", category: "clothes", price: 25, inventory: 10 },
  { sku: "G3001", name: "Bananas", category: "groceries", price: 1.5, inventory: 20 },
  { sku: "H4001", name: "Detergent", category: "household", price: 12, inventory: 8 },
  { sku: "B5001", name: "Book", category: "other", price: 15, inventory: 6 }
];

// Step 3: Category discounts
for (let product of products) {
  let discount = 0;
  switch (product.category) {
    case "electronics":
      discount = 0.20; break;
    case "clothes":
      discount = 0.15; break;
    case "groceries":
    case "household":
      discount = 0.10; break;
    default:
      discount = 0;
  }
  product.promoPrice =(product.price * (1 - discount));
}
