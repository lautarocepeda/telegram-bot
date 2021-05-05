const log4js    = require('log4js');

log4js.configure({
    appenders: {
        out:     { type: 'console' },
        TE:      { type: 'file', filename: './log_entries/TE.log' },
        userBot: { type: 'file', filename: './log_entries/bot.log' }
    },
    categories: { 
        default: { appenders: ['TE', 'out'], level: 'error' },
        userBot: { appenders: ['userBot'], level: 'info' }
    }
});




module.exports = log4js;

