const express = require("express");
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
};

app.use(express.static('dist'));
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index.ejs');
})

app.listen(port);