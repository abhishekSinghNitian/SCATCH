const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/indexRouter');
const expressSession = require('express-session');
const flash = require('connect-flash');

require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser()); 
app.use(expressSession({
    secret: "heyhey", // Replace with your own secret string
    resave: false, // Don't save session if unmodified
    saveUninitialized: true, // Save session even if uninitialized
    cookie: { secure: false } // Set to true if using HTTPS
  }));

app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/',indexRouter);
app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});
