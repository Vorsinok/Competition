const pageContainer = document.getElementById('pageContainer');

// create jsobject for path in pattern /{category}/{product:productid} with productid as number and category as string where i have cattegoryes: "bottles", "clothes", "shoes" 

const routes = {
  "index.html": ['/'],

  "product/productList.html": ['/bottles', '/clothes', '/shoes']
};
const animations = {
  "index.html": {},
  "product/productList.html": {},
}
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