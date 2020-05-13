class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }

  findBook(bookTitle) {
    if (this.library.shelves.fantasy[0].title === bookTitle) {
        this.library.shelves.fantasy.pop(bookTitle)
        return `Yes, we have ${bookTitle}`;
    } else {
        return `Sorry, we do not have ${bookTitle}`;
    }
  }

  calculateLateFee(number) {
    var fee = number * 0.25;
    var roundedNumber = Math.ceil(fee);

    return roundedNumber;
  }
}

module.exports = Librarian;
