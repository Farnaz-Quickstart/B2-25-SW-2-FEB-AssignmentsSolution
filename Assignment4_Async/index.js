const books = [ 
  { 
    title: "The Great Gatsby", 
    author: "F. Scott Fitzgerald", 
    image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" 
  }, 
  { 
    title: "1984", 
    author: "George Orwell", 
    image: "https://covers.openlibrary.org/b/id/8228691-L.jpg" 
  }, 
  { 
    title: "Pride and Prejudice", 
    author: "Jane Austen", 
    image: "https://covers.openlibrary.org/b/id/8091016-L.jpg" 
  }, 
  { 
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    image: "https://covers.openlibrary.org/b/id/8225263-L.jpg" 
  }, 
  { 
    title: "Moby Dick", 
    author: "Herman Melville", 
  
 
    image: "https://covers.openlibrary.org/b/id/7222276-L.jpg" 
  } 
]; 


function fetchBooks () {
  let promiseFetchBooks = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve (books)
    }, 3000);  
  })
  return promiseFetchBooks
}

// fetchBooks()
//   .then((arrBooks)=>{
//     for (let index = 0;index< arrBooks.length; index++) {
//       let newHeading = document.createElement ("h3")
//       newHeading.innerText = arrBooks[index]["title"]

//       let newParagraph = document.createElement ("p")
//       newParagraph.innerText = arrBooks[index]["author"]

//       let newImage = document.createElement ("img")
//       newImage.src = arrBooks[index]["image"]

//       document.getElementById ("BookList").append (newHeading)
//       document.getElementById ("BookList").append (newParagraph)
//       document.getElementById ("BookList").append (newImage)
//     }
//   })
//   .catch ((error)=>console.log (error))

fetchBooks()
  .then((arrBooks)=>{
    arrBooks.forEach(book => {
      let newHeading = document.createElement ("h3")
      newHeading.innerText = book["title"]
      document.getElementById ("BookList").append (newHeading)
    });
  })
  .catch ((error)=>console.log (error))