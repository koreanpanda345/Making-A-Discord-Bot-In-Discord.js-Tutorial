/* eslint-disable no-unused-vars */
const DiscordBot = require("../../DiscordBot");
const { Message } = require("discord.js");


module.exports = class
{
	/**
	 * 
	 * @param {DiscordBot} client 
	 */
	constructor(client)
	{
		this.client = client;
	}
	/**
	 * 
	 * @param {Message} message 
	 */
	async invoke(message)
	{
		if(message.author.bot) return;

		if(message.guild && !message.channel.permissionsFor(message.guild.me).missing("SEND_MESSAGES")) return;
		if(message.channel.type === "dm") return;

		// eslint-disable-next-line no-undef
		const prefix = process.env.PREFIX;
		
		if(message.content.toLowerCase().startsWith(prefix))
		{
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const commandName = args.shift().toLowerCase();

			const command = this.client.command.get(commandName) || this.client.command.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
			if(!command) return;

			try 
			{
				await command.invoke(message, args);
			}
			catch(error)
			{
				console.error(error);
			}
		}
	}
};