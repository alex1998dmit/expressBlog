var express = require('express');

const app = new express();

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