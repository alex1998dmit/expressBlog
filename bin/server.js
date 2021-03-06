// For debug start, enter at terminal DEBUG=express:* node server.js
let express = require('express');
const morgan = require('morgan');
const Post = requre('');

const app = new express();
const logger = morgan('combined');

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users/:userId/books/:id', (req, res) => {
    const { userId, id } = req.params;
    res.send(`${userId} --- ${id}`);
});
  
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});