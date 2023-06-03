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
// add routes array and test
function animatePageTransition() {
  // Add your animation logic here
}

function navigateTo(route) {
  const url = `${route}.html`;
  history.pushState(null, null, url);
  loadPage(url);
}

// Initial page load
window.addEventListener('load', () => {
  const path = window.location.pathname;
  const route = path.substring(1, path.length - 5);
  loadPage(route);
});

// Listen for back/forward navigation
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  const route = path.substring(1, path.length - 5);
  loadPage(route);
});