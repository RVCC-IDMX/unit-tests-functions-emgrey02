/*
 * functions-02.js
 * Language: javascript
 * Test: tests/functions-02.test.js
 * Path: src/functions-02.js
 *
 *
 ! This assignment is built on the video
 ! https://youtu.be/R8rmfD9Y5-c by Kyle Simpson
 ! from Web Dev Simplified
*
*/

/*
 ? The inventory array is outside the object. That makes its scope global
 ? to the code in this file.

 ? An object called store is then being created with along its methods.
 ? At the end of the file, the object is being exported.

 ? This makes the object public to whatever code imports it (using the require()
 ? function in CommonJS).

 ? The inventory could be a property of the object. Why isn't it?

 ? Since the store object is being exported, any property of the store can be
 ? changed by any other part of a program that imports the store object.

 ? In an attempt to prevent the inventory from accidentally being corrupted,
 ? the inventory array is outside store, making it private (not exported).

 ? The object has methods that use the inventory array in different ways.
 ? Your job is to write the methods.

 ? The methods are called in the test file.
 ? There are fewer examples in this file because you can look at the tests
 ? to give you examples.

 ? NOTE: To access a property from within an object, you can use the this keyword.
 ? You'll have to use this to solve some of the problems.

 ? [The attempt to prevent corruption is not fail-proof. To do better, we need to
 ? do more sophisticated object handling, like freezing the store object. But that
 ? is beyond the scope of this assignment.]
*/

// eslint-disable-next-line no-unused-vars
const inventory = [
  { name: 'Bike', price: 100, quantity: 5 },
  { name: 'TV', price: 200, quantity: 8 },
  { name: 'Album', price: 10, quantity: 150 },
  { name: 'Book', price: 5, quantity: 72 },
  { name: 'Phone', price: 105, quantity: 58 },
  { name: 'Computer', price: 1000, quantity: 12 },
  { name: 'Keyboard', price: 25, quantity: 67 },
  { name: 'Mouse', price: 35, quantity: 93 },
  { name: 'Speaker', price: 145, quantity: 8 },
  { name: 'Monitor', price: 175, quantity: 13 },
  { name: 'Printer', price: 165, quantity: 4 },
  { name: 'Scanner', price: 149, quantity: 2 },
];

const store = {
  name: 'This Object Store',

  /**
   * Returns the name of the store
   * @method getName
   * @returns {string} - the name of the store
   */
  getName() {
    return this.name;
  },
  /**
   * Returns the inventory of the store
   * @method getInventory
   * @returns {array} - the inventory of the store
   */
  getInventory() {
    return inventory;
  },
  /**
   * Returns an arrays of most expensive items in inventory
   * @method getExpensiveItems
   * @param {number} maxPrice - the maximum price of each item
   * @return {array} items - the array of items that are filtered
   */
  getExpensiveItems(maxPrice) {
    return inventory.filter((item) => item.price >= maxPrice);
  },
  /**
   * Returns an array of item names in store
   * @method getStoreItems
   * @return {array} items - the array of items that are filtered
   */
  getStoreItems() {
    return inventory.map((item) => item.name);
  },
  /**
   * Returns true if the item is in the store
   * @method isItemInStore
   * @param {string} itemName - the name of the item
   * @return {boolean} true if the item is in the store,
   * false otherwise
   */
  isItemInStore(itemName) {
    return inventory.some((item) => item.name === itemName);
  },
  /**
   * Returns the price of the item
   * @method getItemPrice
   * @param {string} itemName - the name of the item
   * @return {number} price - the price of the item,
   * -1 if the item is not in the store
   * must use isItemInStore() method in this object
   */
  getItemPrice(itemName) {
    return this.isItemInStore(itemName)
      ? inventory.find((thing) => thing.name === itemName).price
      : -1;
  },

  /**
   * Returns the quantity of the item
   * @method getItemQuantity
   * @param {string} itemName
   * @return {number} quantity - the quantity of the item,
   * -1 if the item is not in the store
   * must use isItemInStore() method in this object
   */
  getItemQuantity(itemName) {
    return this.isItemInStore(itemName)
      ? inventory.find((thing) => thing.name === itemName).quantity
      : -1;
  },

  /**
   * Adds to the quantity of the item
   * @method addItemQuantity
   * @param {string} itemName - the name of the item
   * @param {number} price - the price of the item
   * @param {number} quantity - the quantity of the item
   * @return {number} quantity - the quantity of the item after processing
   * If the item is already in the store, the quantity is updated
   * If the item is not in the store, the item is added to the store
   * must use isItemInStore() method in this object
   */
  addItemQuantity(itemName, price, quantity) {
    if (this.isItemInStore(itemName)) {
      inventory.find((item) => item.name === itemName).quantity += quantity;
    } else {
      inventory.push({ name: itemName, price, quantity });
    }
    return this.getItemQuantity(itemName);
  },
  /**
   * Removes a certain quantity of an item from the store
   * @method removeItemQuantity
   * @param {string} itemName - name of the item to remove from store
   * @return {number} quantity - the quantity of the items to remove
   * @return {number} newQuantity - the quantity of the item
   * after processing, or -1 if the item is not in the store
   * or -1 if the quantity to remove is greater than the quantity of the item
   * must use isItemInStore() method in this object
   */
  removeItemQuantity(itemName, quantity) {
    if (this.isItemInStore(itemName)) {
      inventory.find((item) => item.name === itemName).quantity -= quantity;
    } else {
      return -1;
    }

    if (this.getItemQuantity(itemName) < 0) {
      return -1;
    }

    return this.getItemQuantity(itemName);
  },
  /**
   * Returns the total of all the items in the store
   * @method getTotalValue
   * @return {number} totalPrice - the total price of the items in the store
   * must use the reduce() array method
   */
  getTotalValue() {
    return inventory.reduce((currentTotal, item) => {
      const itemSum = item.price * item.quantity;
      return currentTotal + itemSum;
    }, 0);
  },
};

module.exports = store;
