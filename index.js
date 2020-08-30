// this will be used to keep the bot alive 

const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);
app.get("/", (req, res) => {
  res.json("You're bot should be online!")
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});

const Port = 3000;

app.listen(Port);

// below is the bots code

const { Client, Collection } = require('discord.js');
const { config } = require('dotenv');
const configG = require('./config.json');
const client = new Client();
const fs = require('fs');

client.commands = new Collection();
client.aliases = new Collection();
client.mongoose = require('./utils/Connection');

client.categories = fs.readdirSync('./src/commands/');

config({
	path: `${__dirname}/.env`
});

// loads all commands in the "src/commands" folder

['commands'].forEach(handler => {
	require(`./Structures/${handler}`)(client);
});


// loads all the events in the "events" folder
fs.readdir('./src/events/', (err, files) => {
	if (err) return console.error;
	files.forEach(file => {
		if (!file.endsWith('.js')) return;
		const evt = require(`./src/events/${file}`);
		let evtName = file.split('.')[0];
		console.log(`${evtName}.js loaded`);
		client.on(evtName, evt.bind(null, client));
	});
});

client.mongoose.init();
client.login(configG.TOKEN);