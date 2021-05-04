const CONFIG    = require('./config/config');
const logger    = require('morgan')
const express   = require('express');
const app       = express();
const port      = CONFIG.port;


// http logger morgan
app.use(logger('dev'));


app.use('/', (req, res) => {
    res.statusCode = 200;
    res.json( { status: 'success', message: 'Pending API', data: {} } );
});



app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});