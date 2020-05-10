function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacterObj = {name, age, pronouns};
  return newCharacterObj;
}

function saveReview(string, reviews) {
  if (!reviews.include(string)) {
      reviews.push(string);
  }
}

function calculatePageCount(title) {
   return title.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  var book = {title, mainCharacter, genre};
  book.pageCount = calculatePageCount(title);
  return book;
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
