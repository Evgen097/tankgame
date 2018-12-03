

var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/public'));

app.get('*', function (req, res) {
    return res.redirect('/');
});

app.listen(PORT, function () {
    console.log(`Listening on ${ PORT }`);
});