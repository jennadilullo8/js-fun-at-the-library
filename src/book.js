function createTitle(title) {
  return `The ${title}`;
}

var ghoulCharacter = {
  name: 'Vassya',
  age: 16,
  pronouns: 'she/her'
};

function buildMainCharacter() {
  return ghoulCharacter;
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

function writeBook(title) {
  return
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  // editBook: editBook
}
