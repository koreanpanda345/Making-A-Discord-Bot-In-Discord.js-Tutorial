/* eslint-disable no-unused-vars */
const { Client, Collection } = require("discord.js");
const Logger = require("./module/Logger");
const CommandHandler = require("./handlers/CommandHandler");
const EventHandler = require("./handlers/EventHandler");


module.exports = class DiscordBot extends Client
{
	constructor(options) 
	{
		super(options);
		this.command = new Collection();
		this.logger = new Logger();
		this.handlers = { command: new CommandHandler(this), event: new EventHandler(this) };
		/**
		 * @type {"online" | "dnd" | "idle" | "invisible"}
		 */
		this.status = "online";
	}
};