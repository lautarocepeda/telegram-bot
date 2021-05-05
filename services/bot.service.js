const { Telegraf }      = require('telegraf');
const CONFIG            = require('../config/config');
const utilService       = require('./util.service');

const token             = CONFIG.bot_token;
const bot               = new Telegraf( token );
const secretPath        = `/telegraf/test`;


if ( token === undefined ) {
    utilService.TE('Bot token must be provided...');
}


bot.catch((err, ctx) => {
	console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
});


// logger for every message
bot.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
    console.log(`[Logger][User] ${ ctx.message.from.first_name } - Message: ${ ctx.message.text } | Response time: ${ms}ms`);
});


// started message
bot.start( (ctx) => ctx.reply( `¡Hola ${ctx.message.from.first_name}! Me llamo Loko 😁.\n¿Cómo estás? 🙄` ) );


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


bot.telegram.setWebhook(`https://selfish-octopus-86.loca.lt${secretPath}`);



module.exports.bot = bot;
module.exports.secretPath = secretPath;