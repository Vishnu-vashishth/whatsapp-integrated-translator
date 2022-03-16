const qrcode = require('qrcode-terminal');
// const translate = require('google-translate-api');
const translate = require('@vitalets/google-translate-api');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client1 = new Client({
    authStrategy: new LocalAuth()
});

client1.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client1.on('ready', () => {
    console.log('Client is ready!');
});

client1.initialize();
client1.on('message', message => {
	console.log(message.body);
});
client1.on('message', message => {
	    var name= message. _data.notifyName;
		if(message. _data.type=='sticker'){
			message.reply(`${name} yaar sticker  😂`);
		}
		else if(message.body=='😂' ){
			message.reply(`${name} itna kahe muskura rhe ho`);

		}
		else if(message.body=='😁' ){
			message.reply(`${name} itna kahe muskura rhe ho`);

		}
		else if(message.body=='🤣' ){
			message.reply(`${name} itna kahe muskura rhe ho`);

		}
		else if(message.body=='🥲' ){
			message.reply(` ${name} ro kyu rhe ho`);

		}
		else if(message.body=='😭' ){
			message.reply(` ${name} ro kyu rhe ho`);

		}
		else if(message.body=='Good Morning' ){
			message.reply(` ${name} Good Morning`);

		}
		else if(message.body=='good morning' ){
			message.reply(` ${name} good morning`);

		}
		else if(message.body=='Good morning' ){
			message.reply(`  good morning`);

		}
		else if(message.body=='Gn' ){
			message.reply(`  good night`);

		}
		else if(message.body=='GN' ){
			message.reply(`  good night`);

		}
		else if(message.body=='gn' ){
			message.reply(`  good night`);

		}
		else if(message.body=='good night' ){
			message.reply(`  good night`);

		}
		else if(message.body=='Good Night' ){
			message.reply(`  good night`);

		}
		else if(message.body=='Good night' ){
			message.reply(`  good night`);

		}
		else{


			translate(message.body,  {to: 'hi'}).then(res => {
				message.reply(`Hindi Translation is:${res.text}`);
				
			}).catch(err => {
				console.error(err);
			});




			
		}
	
})