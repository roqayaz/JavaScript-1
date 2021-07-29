let shoppingCart = ['bananas', 'milk'];
const addToShoppingCart = (groceryItem) => {
    shoppingCart.push(groceryItem);
    if (shoppingCart.length > 3) {
        shoppingCart.shift()
    };
  console.log(`You bought ${shoppingCart.join(", ")}!`)   
};
addToShoppingCart('chocolate');
addToShoppingCart('waffles');
addToShoppingCart('tea');