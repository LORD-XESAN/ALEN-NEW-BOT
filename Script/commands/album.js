const axios = require("axios");
const path = require("path");
const fs = require("fs");

const BASE_API_URL = "https://album-api-1ez5.onrender.com";

module.exports.config = {
 name: "album",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Ullash", //file credits dipto 
 description: "Manage and view video/photo albums",
 usePrefix: true,
 prefix: true,
 category: "Media",
 commandCategory: "Media",
 usages: "Empty to see list, or album [category] to get media.",
 cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
 const { threadID, messageID, senderID } = event;

 const albumOptionsPage1 = [
 "funny", "islamic", "sad", "anime", "cartoon",
 "love", "horny", "couple", "flower", "marvel"
 ];
 const albumOptionsPage2 = [
 "aesthetic", "sigma", "lyrics", "cat", "18plus",
 "freefire", "football", "girl", "friends", "cricket"
 ];

 const toBold = (text) => text.replace(/[a-z]/g, (c) => String.fromCodePoint(0x1d41a + c.charCodeAt(0) - 97));
 const toBoldNumber = (num) => String(num).replace(/[0-9]/g, (c) => String.fromCodePoint(0x1d7ec + parseInt(c)));

 const formatOptions = (options, startIndex = 1) =>
 options.map((opt, i) => `✨ | ${toBoldNumber(i + startIndex)}. ${toBold(opt)}`).join("\n");

 if (args[0] === "2") {
 const message2 =
 "💫 𝐂𝐡𝐨𝐨𝐬𝐞 𝐚𝐧 𝐚𝐥𝐛𝐮𝐦 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐲 𝐁𝐚𝐛𝐲 💫\n" +
 "✺━━━━━━━◈◉◈━━━━━━━✺\n" +
 formatOptions(albumOptionsPage2, 11) +
 "\n✺━━━━━━━◈◉◈━━━━━━━✺\n🎯 | 𝐏𝐚𝐠𝐞 [𝟐/𝟐]\n✺━━━━━━━◈◉◈━━━━━━━✺";

 await api.sendMessage(
 { body: message2 },
 threadID,
 (error, info) => {
 if (!error) {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: senderID,
 link: albumOptionsPage2,
 });
 }
 },
 messageID
 );
 return;
 }

 if (!args[0] || args[0].toLowerCase() === "list") {
 api.setMessageReaction("☢️", messageID, () => {}, true);

 const message =
 "💫 𝐂𝐡𝐨𝐨𝐬𝐞 𝐚𝐧 𝐚𝐥𝐛𝐮𝐦 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐲 𝐁𝐚𝐛𝐲 💫\n" +
 "✺━━━━━━━◈◉◈━━━━━━━✺\n" +
 formatOptions(albumOptionsPage1) +
 `\n✺━━━━━━━◈◉◈━━━━━━━✺\n🎯 | 𝐏𝐚𝐠𝐞 [𝟏/𝟐]\nℹ | 𝐓𝐲𝐩𝐞: ${global.config.PREFIX}album 2 - 𝐧𝐞𝐱𝐭 𝐩𝐚𝐠𝐞\n✺━━━━━━━◈◉◈━━━━━━━✺`;

 await api.sendMessage(
 { body: message },
 threadID,
 (error, info) => {
 if (!error) {
 global.client.handleReply.push({
 name: this.config.name,
 type: "reply",
 messageID: info.messageID,
 author: senderID,
 link: albumOptionsPage1,
 });
 }
 },
 messageID
 );
 return;
 }

 const validCategories = [
 "cartoon", "marvel", "lofi", "sad", "islamic", "funny",
 "horny", "anime", "love", "baby", "lyrics", "sigma",
 "aesthetic", "cat", "flower", "freefire", "sex", "girl",
 "football", "friend", "cricket", "couple", "18plus", "freefire"
 ];

 const command = args[0].toLowerCase();

 if (!validCategories.includes(command)) {
 return api.sendMessage(
 "❌ 𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐲! 𝐓𝐲𝐩𝐞 '/album' 𝐭𝐨 𝐬𝐞𝐞 𝐥𝐢𝐬𝐭.",
 threadID,
 messageID
 );
 }

 return api.sendMessage(
 `📁 𝐋𝐨𝐚𝐝𝐢𝐧𝐠 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐲: 𝐚𝐥𝐛𝐮𝐦 - ${command}...`,
 threadID,
 messageID
 );
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
 api.unsendMessage(handleReply.messageID);

 const adminID = "100001473448671";
 const replyNum = parseInt(event.body);
 if (isNaN(replyNum)) {
 return api.sendMessage("❌ 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐩𝐥𝐲 𝐰𝐢𝐭𝐡 𝐚 𝐯𝐚𝐥𝐢𝐝 𝐧𝐮𝐦𝐛𝐞𝐫.", event.threadID, event.messageID);
 }

 const categories = [
 "funny", "islamic", "sad", "anime", "cartoon",
 "love", "horny", "couple", "flower", "marvel",
 "aesthetic", "sigma", "lyrics", "cat", "18plus",
 "freefire", "football", "girl", "friend", "cricket"
 ];

 if (replyNum < 1 || replyNum > categories.length) {
 return api.sendMessage("❌ 𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐬𝐞𝐥𝐞𝐜𝐭𝐢𝐨𝐧.", event.threadID, event.messageID);
 }

 const selectedCategory = categories[replyNum - 1];

 if (
 (selectedCategory === "horny" || selectedCategory === "18plus") &&
 event.senderID !== adminID
 ) {
 return api.sendMessage("🚫 তুই যে কত বড় লুইচ্চা এটা আমার বুঝা শেষ 😹 এই ফাইলে কিছু নাই তোরে মদন বানাইলাম.", event.threadID, event.messageID);
 }

 const captions = {
 funny: "🤣> 𝗙𝘂𝗻𝗻𝘆 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 islamic: "😇> 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 sad: "🥺> 𝗦𝗮𝗱 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 anime: "😘> 𝗔𝗻𝗶𝗺𝗲 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 cartoon: "😇> 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 love: "😇> 𝗟𝗼𝘃𝗲 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 horny: "🥵> 𝗛𝗼𝗿𝗻𝘆 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 couple: "❤️> 𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 flower: "🌸> 𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 marvel: "🎯> 𝗠𝗮𝗿𝘃𝗲𝗹 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 aesthetic: "🎀> 𝗔𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 sigma: "🐤> 𝗦𝗶𝗴𝗺𝗮 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 lyrics: "🥰> 𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 cat: "🐱> 𝗖𝗮𝘁 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 "18plus": "🔞> 𝟏𝟖+ 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 freefire: "🎮> 𝗙𝗿𝗲𝗲𝗙𝗶𝗿𝗲 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 football: "⚽> 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 girl: "👧> 𝗚𝗶𝗿𝗹 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 friend: "👫> 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧",
 cricket: "🏏> 𝗖𝗿𝗶𝗰𝗸𝗲𝘁 𝗩𝗲𝗱𝗶𝗼 𝐅𝐫𝐨𝐦 ➠𝗔𝗟𝗘𝗡🫧"
 };

 try {
 const res = await axios.get(`${BASE_API_URL}/album?type=${selectedCategory}`);
 const mediaUrl = res.data.data;

 if (!mediaUrl) {
 return api.sendMessage("⚠️ 𝐍𝐨 𝐜𝐨𝐧𝐭𝐞𝐧𝐭 𝐟𝐨𝐮𝐧𝐝 𝐢𝐧 𝐭𝐡𝐢𝐬 𝐜𝐚𝐭𝐞𝐠𝐨𝐫𝐲.", event.threadID, event.messageID);
 }

 const response = await axios({
 method: 'get',
 url: mediaUrl,
 responseType: 'stream'
 });

 const filename = path.basename(mediaUrl).split("?")[0];
 const filePath = path.join(__dirname, "cache", `${Date.now()}_${filename}`);
 const writer = fs.createWriteStream(filePath);

 response.data.pipe(writer);

 writer.on('finish', () => {
 api.sendMessage({
 body: captions[selectedCategory] || `🎬 𝐍𝐨𝐰 𝐁𝐚𝐛𝐲 ${selectedCategory} 𝐜𝐨𝐧𝐭𝐞𝐧𝐭`,
 attachment: fs.createReadStream(filePath)
 }, event.threadID, () => fs.unlinkSync(filePath), event.messageID);
 });

 writer.on('error', (err) => {
 console.error("Write Error:", err);
 api.sendMessage("❌ 𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐬𝐞𝐧𝐝 𝐯𝐢𝐝𝐞𝐨.", event.threadID, event.messageID);
 });

 } catch (err) {
 console.error("Axios Error:", err.message);
 return api.sendMessage("❌ 𝐒𝐨𝐦𝐞𝐭𝐡𝐢𝐧𝐠 𝐰𝐞𝐧𝐭 𝐰𝐫𝐨𝐧𝐠. 𝐓𝐫𝐲 𝐚𝐠𝐚𝐢𝐧!", event.threadID, event.messageID);
 }
};
