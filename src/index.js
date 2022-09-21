const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars')


app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine','hbs')
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());

app.get('/', (req, res) => {
    return res.render('home');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})