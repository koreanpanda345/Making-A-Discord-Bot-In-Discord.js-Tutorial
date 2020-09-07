/* eslint-disable no-unused-vars */
const chalk = require("chalk");
const moment = require("moment");

module.exports = class Logger
{
	/**
	 * 
	 * @param {any} content 
	 * @param {"error" | "info" | "warn" | "debug" | "event" | "cmd" | "client"} type 
	 */
	log(content, type)
	{
		let timestamp = chalk.black.bgGray(moment().format());

		switch(type)
		{
		case "error":	return console.log(`${timestamp}	${chalk.black.bgRed(type.toUpperCase())} => ${content}`);
		case "info":	return console.log(`${timestamp}	${chalk.black.bgBlue(type.toUpperCase())} => ${content}`);
		case "warn":	return console.log(`${timestamp}	${chalk.black.bgYellow(type.toUpperCase())} => ${content}`);
		case "debug":	return console.log(`${timestamp}	${chalk.black.bgGreen(type.toUpperCase())} => ${content}`);
		case "event":	return console.log(`${timestamp}	${chalk.black.bgMagenta(type.toUpperCase())} => ${content}`);
		case "cmd":		return console.log(`${timestamp}	${chalk.black.bgWhite(type.toUpperCase())} => ${content}`);
		case "client":	return console.log(`${timestamp}	${chalk.black.bgCyan(type.toUpperCase())} => ${content}`);
		default: throw new TypeError(`Type ${typeof type} is not a valid type.`);
		}
	}
	/**
	 * 
	 * @param {any} content 
	 */
	error(content)
	{
		return this.log(content, "error");
	}
	/**
	 * 
	 * @param {any} content 
	 */
	info(content)
	{
		return this.log(content, "info");
	}
	/**
	 * 
	 * @param {any} content 
	 */
	warn(content)
	{
		return this.log(content, "warn");
	}
	/**
	 * 
	 * @param {any} content 
	 */
	debug(content)
	{
		return this.log(content, "debug");
	}
};