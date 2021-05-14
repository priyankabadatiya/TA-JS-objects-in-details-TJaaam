class Book {
    constructor(title, category, author) {
        this.title = title;
        this.category = category;
        this.author = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead() {
        this.isRead = true;
    }
}

class BookList {
    constructor() {
        this.books = [];
        this.currentIndexBook = 0;
    }
    add(books = []) {
        this.books = this.books.concat(books);
        return this.books;
    }
    getCurrentBook() {
        return this.books[this.currentIndexBook];
    }
    getNextBook() {
        this.currentIndexBook = this.currentIndexBook + 1;
        return this.books[this.currentIndex];
    }
    getPreviousBook() {
        this.currentIndexBook = this.currentIndexBook - 1;
        return this.books[this.currentIndex];
    }
    changeCurrentBook() {
        this.currentIndexBook = index;
        return this.currentIndexBook
    }
}

let book1 = new Book("a", "b", "c");
let book2 = new Book("d", "e", "f");
let book3 = new Book("g", "h", "i");
let book4 = new Book("j", "k", "l");
let book5 = new Book("m", "n", "o");

let library = new BookList();
library.add(book1, book2, book3, book4, book5)