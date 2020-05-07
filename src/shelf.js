function shelfBook(book, scifiShelf) {
  scifiShelf.splice(0, 0, book);
  if (scifiShelf.length === 4) {
    scifiShelf.shift(book);
  }
}

function unShelfBook(bookString, scifiShelf) {
for (var i = 0; i < scifiShelf.length; i++) {
  if (scifiShelf[i].title === 'Dune')
    scifiShelf.splice(i, 1);
  }
}

function listTitles(fantasyShelf) {
  var firstTitle = fantasyShelf[0].title;
  var secondTitle = fantasyShelf[1].title;
  var thirdTitle = fantasyShelf[2].title;
  var stringOfTitles = `${firstTitle}, ${secondTitle}, ${thirdTitle}`;
    return stringOfTitles.toString();
}



module.exports = {
  shelfBook: shelfBook,
  unShelfBook: unShelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
