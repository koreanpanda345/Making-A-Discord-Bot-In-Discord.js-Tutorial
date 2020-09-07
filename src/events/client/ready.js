/* eslint-disable no-unused-vars */
const DiscordBot = require("../../DiscordBot");


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

	async invoke()
	{
		this.client.logger.log(`${this.client.user.username} is ready`, "event");
		this.client.user.setActivity({name: "Ready To Help", type: "WATCHING"});
		this.client.user.setStatus(this.client.status);
	}
};