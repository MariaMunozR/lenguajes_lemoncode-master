//Read Books

function isBookRead(books, titleToSearch) {
    return books.some(book => book.title === titleToSearch && book.isRead);
} 

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); 
console.log(isBookRead(books, "Canción de hielo y fuego")); 
console.log(isBookRead(books, "Los Pilares de la Tierra")); 

