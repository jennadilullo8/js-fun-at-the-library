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

function addBook(libraryObj, bookTitle) {
  if (bookTitle.title === "Dracula") {
    libraryObj.shelves.fantasy.push(bookTitle);
  } else {
    libraryObj.shelves.nonFiction.push(bookTitle);
  };
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  // checkoutBook: checkoutBook
};
