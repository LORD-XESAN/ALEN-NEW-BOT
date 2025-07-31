module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐎𝐤 𝐁𝐎𝐒𝐒, ${global.config.BOTNAME} 𝐀𝐫𝐞 𝐍𝐨𝐰 𝐑𝐞𝐬𝐭𝐚𝐫𝐭𝐢𝐧𝐠...`, threadID, () => process.exit(1));
}
