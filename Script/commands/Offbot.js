module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["100001473448671", "100001473448671"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ E̶R̶R̶O̶R̶ ] 𝗦𝗼𝗿𝗿𝘆 𝗕𝗿𝗼 𝗧𝗵𝗶𝘀 𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗢𝗻𝗹𝘆 𝗙𝗼𝗿 𝐀𝐋𝐄𝐍 :) 3:) ", event.threadID, event.messageID);
  api.sendMessage(`𝗢𝗸 𝗕𝗼𝘀𝘀 , ${global.config.BOTNAME} এখন ঘুমাবে কেউ বিরক্ত করিস না 😞🫶`,event.threadID, () =>process.exit(0))
}
