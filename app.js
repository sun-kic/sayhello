const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/greet', (req, res) => {
    res.send('Greet!');
});

app.get('/hello', (req, res) => {
    res.send('Konnichiha');
});

app.get('/nihao', (req, res) => {
    res.send('nihao');
});


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});