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
  if (bookTitle.genre === 'fantasy') {
    libraryObj.shelves.fantasy.push(bookTitle);
  } else if (bookTitle.genre === 'nonFiction') {
    libraryObj.shelves.nonFiction.push(bookTitle);
  } else {
    libraryObj.shelves.fiction.push(bookTitle);
  }
}


function checkoutBook(libraryObj, bookTitleString) {
  if (libraryObj.shelves.fiction[0] === undefined) {
    return `Sorry, there are currently no copies of ${bookTitleString} available at the Denver Public Library`;
  } else if (libraryObj.shelves.fiction[0].title === bookTitleString){
    libraryObj.shelves.fiction.pop(bookTitleString);
    return `You have now checked out ${bookTitleString} from the Denver Public Library`;
  }
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
