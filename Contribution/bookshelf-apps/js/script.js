const incompleteBooks = "incompleteBookshelfList";
const completeBooks = "completeBookshelfList";
const inputBookIsComplete = document.getElementById('inputBookIsComplete');
const inputBookTitle = document.getElementById("inputBookTitle");
const inputBookAuthor = document.getElementById("inputBookAuthor");
const inputBookYear = document.getElementById("inputBookYear");
const searchSubmit = document.getElementById("searchSubmit");
const bookItemId = "itemID";

function makeBook(title, author, year, isCompleted) {
      const judul = document.createElement('h3');
      judul.innerText = title;
      const penulis = document.createElement('p');
      penulis.innerHTML = "<b>penulis:</b> " + author;
      const tahun = document.createElement('p');
      tahun.innerHTML = "<b>Tahun:</b> " + year;

      const div = document.createElement('div');
      div.classList.add("action");

      const article = document.createElement('article');
      article.classList.add("book_item");
      article.append(judul, penulis, tahun, div);

     if(isCompleted || inputBookIsComplete.checked){
        div.append(
          createIncompleteButton(),
          createEditButton(),
          createRemoveButton()
          );
      }else{
        div.append(
          createCompleteButton(),
          createEditButton(),
          createRemoveButton()
          );
      }
  return article;
}

function addBook() {
   const incompleteBooksList = document.getElementById(incompleteBooks);
   const completeBooksList = document.getElementById(completeBooks);

   const inputBookTitle = document.getElementById("inputBookTitle").value;
   const inputBookAuthor = document.getElementById("inputBookAuthor").value;
   const inputBookYear = document.getElementById("inputBookYear").value;

   const book = makeBook(inputBookTitle, inputBookAuthor, inputBookYear);
   const bookObject = composeBookObject(inputBookTitle, inputBookAuthor, inputBookYear);

    if(inputBookIsComplete.checked){
        bookObject.isComplete = true;
        completeBooksList.append(book);

      }else{
        bookObject.isComplete = false;
        incompleteBooksList.append(book);
      }

   book[bookItemId] = bookObject.id;
   books.push(bookObject);
  
      saveBook();
}

function createButton(buttonTypeClass, value, eventListener) {
    const button = document.createElement("button");
    button.innerText = value;
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);        
    });
    return button;
}

function createRemoveButton() {
   return createButton("red", "Hapus Buku", function(event){
    const wrapper = event.target.parentElement.parentElement;
    const textTitle = wrapper.querySelector("h3").innerText;
    let popupBox = confirm(`anda yakin ingin menghapus buku ${textTitle} !`);
    
    while(popupBox == true){
      popupBox = false;
      removeTask(wrapper);
    }
   });
}

function createIncompleteButton() {
   return createButton("green", "Belum Selesai Dibaca", function(event){
      event.preventDefault();
      addTaskToIncompleted(event.target.parentElement.parentElement);
    });
}

function createCompleteButton() {
    return createButton("green", "Selesai Dibaca", function(event){
      event.preventDefault();
      addTaskToCompleted(event.target.parentElement.parentElement);
    });
}

function createEditButton() {
    return createButton("green", "Edit Buku", function(event){
      event.preventDefault();
      window.scrollTo(0,200);
      editBook(event.target.parentElement.parentElement);
    });
}

function addTaskToCompleted(taskElement) {
  const completeBooksList = document.getElementById(completeBooks);
  const Book = findBook(taskElement[bookItemId]);
  const newBook = makeBook(Book.title, Book.author, Book.year, true);

    Book.isComplete = true;
    newBook[bookItemId] = book.id;

   completeBooksList.append(newBook);
   taskElement.remove();

   saveBook();
} 

function addTaskToIncompleted(taskElement) {
  const incompleteBooksList = document.getElementById(incompleteBooks);
  const Book = findBook(taskElement[bookItemId]);
  const newBook = makeBook(Book.title, Book.author, Book.year, false);

    Book.isComplete = false;
    newBook[bookItemId] = book.id;

   incompleteBooksList.append(newBook);
   taskElement.remove();

   saveBook();
}

function removeTask(taskElement){
  const bookPosition = findbookIndex(taskElement[bookItemId]);
  books.splice(bookPosition, 1);

  taskElement.remove();
  saveBook();
}

function inputValue(BookTitle = null, BookYear = null, BookAuthor = null){
  inputBookTitle.value = BookTitle;
  inputBookYear.value = BookYear;
  inputBookAuthor.value = BookAuthor;
}

function editBook(taskElement) {
  const Book = findBook(taskElement[bookItemId]);
  const bookPosition = findbookIndex(taskElement[bookItemId]);
  books.splice(bookPosition, 1);

  inputValue(Book.title, Book.year, Book.author)
  taskElement.remove();
  saveBook();
}

function searchBook(BookTitle) {
  const incompleteBooksList = document.getElementById(incompleteBooks);
  const completeBooksList = document.getElementById(completeBooks);

        completeBooksList.innerHTML = "";
        incompleteBooksList.innerHTML = "";

  const result = books.filter( function(book) {

    if(book.title == BookTitle){
   const newBook = makeBook(book.title, book.author, book.year);
   newBook[bookItemId] = book.id;

    if(book.isComplete == true){
      completeBooksList.append(newBook);
      }else{
      incompleteBooksList.append(newBook);
    }
  }
 });

  saveBook();

return result;
}

searchSubmit.addEventListener("click", function() {
  const title = document.getElementById("searchBookTitle").value;
  window.scrollBy(0,1000);
  searchBook(title);
})

document.addEventListener("ondataloaded", function() {
     refreshDataFromBooks();
});

document.addEventListener("DOMContentLoaded", function() { 
    const submitForm = document.getElementById("bookSubmit");
    const textBookSubmit = document.querySelector("span");

 submitForm.onclick = function (event) {
        addBook();
        inputValue();
    }

inputBookIsComplete.onclick = function(){
     textBookSubmit.innerText = "Selesai Dibaca";
    }
      
      if(checkLocalStorage()){
     loadDataFromStorage();
    }
});