const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client'));
app.use('/css', express.static(__dirname + 'client/css'));
app.use('/js', express.static(__dirname + 'client/js'));

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`)
})