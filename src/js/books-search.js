function getBooks() {
  document.getElementById('output').innerHTML = '';
  fetch(
    'https://openlibrary.org/search.json?q=' +
      document.getElementById('input').value
  )
    .then(a => a.json())
    .then(response => {
      for (let i = 0; i < 10; i++)
        document.getElementById('output').innerHTML +=
          '<h2>' +
          response.docs[i].title +
          '<h2>' +
          response.docs[i].author_name[0] +
          '<br><img src=https://covers.openlibrary.org/b/isbn/>' +
          response.docs[i].isbn[0] +
          "/M.jpg'><br>";
    });
}
// getBooks();
