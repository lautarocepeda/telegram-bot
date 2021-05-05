// enviroment variables
const CONFIG    = require('./config/config');
const logger    = require('morgan')

// server variables
const express   = require('express');
const app       = express();
const port      = CONFIG.port;

// bot requires
const { bot, secretPath } = require('./services/bot.service');




// http logger morgan
app.use( logger('dev') );


app.use( '/', (req, res ) => {
    res.statusCode = 200;
    res.json( { status: 'success', message: 'Pending API', data: {} } );
});


// bot started
app.use( bot.webhookCallback( secretPath ) );


app.listen( port, () => {
    console.log( `App listening at http://localhost:${port}` );
});