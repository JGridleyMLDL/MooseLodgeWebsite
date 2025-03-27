const path = require('path');
const express = require('express');
const app = express();


//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});