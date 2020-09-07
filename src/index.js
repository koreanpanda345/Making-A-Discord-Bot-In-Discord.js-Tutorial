/* eslint-disable no-undef */
require("dotenv").config();
const DiscordBot = require("./DiscordBot");
const client = new DiscordBot();

const init = () => 
{
	client.status = "dnd";
	["client", "guild"].forEach((x) => client.handlers.event.loadEvents(x));
	["miscellaneous"].forEach((x) => client.handlers.command.loadCommands(x));
	client.login(process.env.TOKEN);
};

init();