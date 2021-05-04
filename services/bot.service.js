const { Telegraf }      = require('telegraf');
const CONFIG            = require('../config/config');


const bot               = new Telegraf( CONFIG.bot_token );
const secretPath        = `/telegraf/test`

bot.start( (ctx) => ctx.reply('¡Welcome Human!') );
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('Que '));
bot.hears('me llamo tomy', (ctx) => ctx.reply('Sos puto entonces'));
bot.launch()


bot.telegram.setWebhook(`https://shy-monkey-45.loca.lt${secretPath}`);



module.exports.bot = bot;
module.exports.secretPath = secretPath;