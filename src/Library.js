function createLibrary(name) {
  var libraryObj = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    },
  };
  return libraryObj;
}

module.exports = {
  createLibrary: createLibrary,
  // addBook: addBook,
  // checkoutBook: checkoutBook
};
