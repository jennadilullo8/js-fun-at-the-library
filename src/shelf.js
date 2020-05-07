function shelfBook(book, scifiShelf) {
  scifiShelf.splice(0, 0, book);
  if (scifiShelf.length === 4) {
    scifiShelf.shift(book);
  }
}

function unShelfBook() {

}



module.exports = {
  shelfBook: shelfBook,
  unShelfBook: unShelfBook,
  // listTitles: listTitles,
  // searchShelf: searchShelf
};
