//Read Book con Ts

class Book {
    public title: string;
    public isRead: boolean;
};

class BookChecker {
    public static isBookRead(books: Book[], titleToSearch: string) : boolean {
        return books.some(book => book.title === titleToSearch && book.isRead);
    }; 
};


const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];



console.log(BookChecker.isBookRead(books, "Devastación")); 
console.log(BookChecker.isBookRead(books, "Canción de hielo y fuego")); 
console.log(BookChecker.isBookRead(books, "Los Pilares de la Tierra")); 