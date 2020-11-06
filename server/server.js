const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json()); 
app.use(express.static('build'));

// app.use('/gallery', gallery);

app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});