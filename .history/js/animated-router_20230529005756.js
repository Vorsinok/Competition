const pageContainer = document.getElementById('pageContainer');

function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      pageContainer.innerHTML = html;
      animatePageTransition();
    })
    .catch(error => console.error(error));
}

function animatePageTransition() {
  // Add your animation logic here
}

