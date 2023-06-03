const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const routes = [
  { path: '/', name: 'Home', page: 'index.html' },
  { path: '/abstrproducts', name: 'AbstractProducts', page: 'about.html' },
]


// Define custom routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Serve static files
app.use(express.static('public'));

// Handle 404 - Not Found
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});