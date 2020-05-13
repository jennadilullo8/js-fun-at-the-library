function shelfBook(book, shelf) {
  shelf.splice(0, 0, book);
  if (shelf.length === 4) {
    shelf.shift(book);
  }
}

function unShelfBook(bookString, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === bookString) {
        shelf.splice(i, 1);
    }
  }
}

function listTitles(fantasyShelf) {
  var firstTitle = fantasyShelf[0].title;
  var secondTitle = fantasyShelf[1].title;
  var thirdTitle = fantasyShelf[2].title;
  var stringOfTitles = `${firstTitle}, ${secondTitle}, ${thirdTitle}`;

  return stringOfTitles.toString();
}

function searchShelf(scifiShelf, title) {
  for (var i = 0; i < scifiShelf.length; i++) {
    if (scifiShelf[i].title === title) {
      return true;
    }
  }
    return false;
}


module.exports = {
  shelfBook: shelfBook,
  unShelfBook: unShelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
