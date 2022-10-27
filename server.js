const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const app = express();

app.use('/admin', admin);
app.use(shop);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(5000, () => {
  console.log('Server running');
});