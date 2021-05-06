// modules
const { Telegraf }      = require('telegraf');
const { TE }            = require('./util.service'); //  TE: Throw Error Response
const CONFIG            = require('../config/config');
const loggerController  = require('../controllers/logger.controller');

// variables config
const token             = CONFIG.bot_token;

// variables
const bot               = new Telegraf( token );
const botLogger         = loggerController.getLogger( 'userBot' );
const secretPath        = `/telegraf/test`;


if ( token === undefined ) {
    TE('Bot token must be provided...');
}


bot.catch( (err, ctx) => {
	TE(`Ooops, encountered an error for '${ ctx.updateType }' - Message: '${ err.message }'`);
});


// logger for every message
bot.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
    
    if ( ctx.updateType != 'poll' ) {
        botLogger.info( `${ ms }ms [${ ctx.message.chat.username }] '${ ctx.message.chat.first_name }'       [Message] '${ ctx.message.text }'` );
    }
});


// started message
bot.start( (ctx) => {
    ctx.reply( `¡Hola ${ ctx.message.from.first_name }! Me llamo Loko 😁.\n¿Cómo estás? 🙄` ) 
});


// bot commands
bot.command( 'topChajas', (ctx) => {
	ctx.replyWithHTML(
		`
			<b> Top Chaja </b>
			#1 👑 - Federico Galiano
			#2 👑 - Tomas Cerezo
			#3 👑 - Carlos Loretti
		`
	);
});


bot.on('text', (ctx) => {
	ctx.reply( '😁' );
});


bot.launch()
    .then( () => console.log('Bot started successfully...') )
    .catch( (e) => {
        TE( e.toString() );
    }
);


bot.telegram.setWebhook( `https://cowardly-earwig-87.loca.lt${secretPath}` );


module.exports.bot = bot;
module.exports.secretPath = secretPath;