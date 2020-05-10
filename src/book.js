function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacterObj = {name, age, pronouns};
  return newCharacterObj;
}

function saveReview(string, reviews) {
  if (!reviews.includes(string)) {
      reviews.push(string);
  }
}

function calculatePageCount(bookTitle) {
  var pageCount = bookTitle.length * 20;
  return pageCount;
}

function writeBook(title, mainCharacter, genre) {

}

function editBook(book) {
  book.pageCount = book.pageCount * 0.75;
  return book.pageCount;
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
