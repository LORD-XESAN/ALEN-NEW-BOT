module.exports.config = {
	name: "unsend",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
	description: "Gỡ tin nhắn của bot",
	commandCategory: "system",
	usages: "unsend",
	cooldowns: 0
};

module.exports.languages = {
	"vi": {
		"returnCant": "Không thể gỡ tin nhắn của người khác.",
		"missingReply": "Hãy reply tin nhắn cần gỡ.",
		"emojiTrigger": "Để gỡ tin nhắn, vui lòng gửi 😡."
	},
	"en": {
		"returnCant": "আরে বলদ অন্য কারো মেসেজ আমি আনসেন্ড করবো কিভাবে পাগল ছাগল",
		"missingReply": "আপনি আমার কোন মেসেজটি আনসেন্ড করবেন, তা রিপ্লাই করুন 🌺",
		"emojiTrigger": "To unsend a message, please send 😡."
	}
}

module.exports.run = function({ api, event, getText }) {
	if (event.messageReply) {
		if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage(getText("returnCant"), event.threadID, event.messageID);
		return api.unsendMessage(event.messageReply.messageID);
	} else if (event.body === "😡") {
		return api.sendMessage(getText("emojiTrigger"), event.threadID, event.messageID);
	} else {
		return api.sendMessage(getText("missingReply"), event.threadID, event.messageID);
	}
}
