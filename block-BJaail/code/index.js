let ul = document.querySelector(".books");
let form = document.querySelector("form");

class BookList {
    constructor(root, list = []) {
        this.booksArr = list;
        this.root = root;
    }

    add(title, author, isbn) {
        let book = new Book(title, author, isbn);
        this.booksArr.push(book);
        this.createUI();
        return this.booksArr.length;
    }

    handleDelete(event) {
        console.log(event.target);
        console.log(this);
        console.log(event.target.dataset.id);
        this.booksArr.splice(+event.target.dataset.id, 1);
        this.createUI();
    }

    createUI() {
        console.log(ul);
        ul.innerHTML = "";
        ul.addEventListener("click", this.handleDelete.bind(this));
        this.booksArr.forEach((book, index) => {
            this.root.append(book.createUI(index));
        });
    }
}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    createUI(index) {
        console.log(index);
        let li = document.createElement("li");
        let title = document.createElement("p");
        let author = document.createElement("p");
        let isbn = document.createElement("p");
        title.innerText = this.title;
        author.innerText = this.author;
        isbn.innerText = this.isbn;
        let cross = document.createElement("span");
        cross.innerText = "X";
        cross.setAttribute("data-id", index);
        li.append(title, author, isbn, cross);
        ul.append(li);
        return li;
    }
}

let myBookList = new BookList(ul);

let book1 = new Book("Priyanka", "secret", "Who cry if you will die", );

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = event.target.title.value;
    let author = event.target.author.value;
    let isbn = event.target.isbn.value;
    if (!(title && author && isbn)) return;
    myBookList.add(title, author, isbn);

    form.querySelectorAll("input").forEach((val) => (val.value = ""));
});