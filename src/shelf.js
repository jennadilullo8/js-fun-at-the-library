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

}



module.exports = {
  shelfBook: shelfBook,
  unShelfBook: unShelfBook,
  listTitles: listTitles,
  // searchShelf: searchShelf
};
