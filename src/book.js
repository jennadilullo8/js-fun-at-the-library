function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return {name, age, pronouns};
}

function saveReview(string, reviews) {
  if (!reviews.includes(string)) {
       reviews.push(string);
  }
}

function calculatePageCount(title) {
  var titleLength = title.length * 20;
  return titleLength;
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
