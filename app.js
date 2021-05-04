const CONFIG    = require('./config/config');
const express   = require('express');
const app       = express();
const port      = CONFIG.port;


app.get('/', (req, res) => {
    res.send('Server On');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});