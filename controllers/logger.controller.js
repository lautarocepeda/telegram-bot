const logger    = require('log4js');

logger.configure({
    appenders: {
        out:     { type: 'console' },
        TE:      { type: 'file', filename: './log_entries/TE.log' },
        userBot: { type: 'file', filename: './log_entries/bot.log' }
    },
    categories: { 
        default: { appenders: ['TE', 'out'], level: 'error' },
        userBot: { appenders: ['userBot', 'out'], level: 'info' }
    }
});




module.exports = logger;

