 const storageKey = "MY_BOOKS";
 let books = [];

 function checkLocalStorage(){
 	return typeof(Storage) !== "undefined";
 }

function loadDataFromStorage() {
  let data = JSON.parse(localStorage.getItem(storageKey));

  if(data !== null){
    books = data;
  }
   document.dispatchEvent(new Event("ondataloaded"));
}

function saveBook(){
  if(checkLocalStorage()){
    const parsed = JSON.stringify(books);
    localStorage.setItem(storageKey, parsed);
  }
   document.dispatchEvent(new Event("ondatasaved"));
}

function composeBookObject(title, author, year, isComplete) {
  return{
      id: +new Date,
      title,
      author,
      year,
      isComplete
  }
}

function findBook(bookId) {
   for(book of books){
       if(book.id === bookId)
           return book;
   }
   return null;
}
 
 
function findbookIndex(bookId) {
   let index = 0
   for (book of books) {
       if(book.id === bookId)
           return index;
 
       index++;
   }
 
   return -1;
}

function refreshDataFromBooks() {
   const incompleteBooksList = document.getElementById("incompleteBookshelfList");
   const completeBooksList= document.getElementById("completeBookshelfList");

   for(book of books){
    const newBook = makeBook(book.title, book.author, book.year, book.isComplete);
    newBook[bookItemId] = book.id;

    if(book.isComplete){
      completeBooksList.append(newBook);
    }else{
      incompleteBooksList.append(newBook);
    }
   }
}
