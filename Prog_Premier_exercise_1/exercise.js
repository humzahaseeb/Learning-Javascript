function addFavoriteBook(bookName) {
    if(!bookName.includes('Great')) {
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks(){
    console.log(
        `Favorite Books: ${favoriteBooks.length}`  
    );
    for (let bookname of (favoriteBooks)){
        console.log(bookname); 
    }
}

var favoriteBooks = [];

addFavoriteBook('A song of Ice and Fire');
addFavoriteBook('The Great Gatsby');
addFavoriteBook('Crime and Punishment');
addFavoriteBook('Great Expectations');
addFavoriteBook("You don't know JS");


printFavoriteBooks();


