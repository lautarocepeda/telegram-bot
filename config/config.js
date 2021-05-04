// enviroment variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// global to use all application
let CONFIG = {};


// server
CONFIG.app         =  process.env.APP              || 'dev';
CONFIG.port        =  process.env.PORT             || '3000';


// telegram bot
CONFIG.bot_token   = '1752610717:AAFrmIxgb1L4OB8rjBkOIWb4d2wOEFgmjq4';


module.exports = CONFIG;