import axios from 'axios'; 


function getBooks() {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  outputDiv.innerHTML = '<div class="loader">Loading...</div>';

  axios
    .get(
      'https://openlibrary.org/search.json?q=' +
        document.getElementById('input').value
    )
    .then(response => {
      outputDiv.innerHTML = '';
      for (let i = 0; i < 10 && i < response.data.docs.length; i++) {
        if (response.data.docs[i].title) {
          outputDiv.innerHTML +=
            '<h2>' +
            response.data.docs[i].title +
            '</h2>' +
            (response.data.docs[i].author_name
              ? response.data.docs[i].author_name[0]
              : 'Invisible author') +
            '<br><img src="https://covers.openlibrary.org/b/isbn/' +
            response.data.docs[i].isbn[0] +
            '-M.jpg"><br>';
        } else {
          console.log('Heading not found for element with index ' + i);
        }
      }
    })
    .catch(error => {
      console.error('Error occurred while fetching books:', error);
      outputDiv.innerHTML = '';
    });
}

function handleButtonClick() {
  getBooks();
}

document
  .getElementById('buttonId')
  .addEventListener('click', handleButtonClick);

document.addEventListener('DOMContentLoaded', () => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';
});
