module.exports.config = {
name: "help",
version: "1.0.6",
hasPermission: 1,
credits: "TOHI-BOT",
description: "Get all command list or module info in a stylish way",
commandCategory: "user",
usages: "[command name/page/all]",
cooldowns: 5,
envConfig: {
autoUnsend: true,
delayUnsend: 20
}
};

module.exports.languages = {
"en": {
"moduleInfo": `
╔═────── ★ ★ ─────═╗
💫 Meral Bot 💫
╚═────── ★ ★ ─────═╝
🔹 𝗡𝗮𝗺𝗲 : %1
🔸 𝗨𝘀𝗮𝗴𝗲 : %3
📝 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 : %2
🌈 𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆 : %4
⏳ 𝗖𝗼𝗼𝗹𝗱𝗼𝘄𝗻 : %5s
🔑 𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻 : %6

⚡️ Made by Meral | Assistant ⚡️`,
"helpList": `✨ Meral Bot-এ মোট %1টি কমান্ড আছে!
🔍 𝙏𝙄𝙋: %2help [কমান্ডনাম] লিখে বিস্তারিত জানুন!`,
"user": "User",
"adminGroup": "Admin group",
"adminBot": "Admin Bot"
}
};

module.exports.handleEvent = function ({ api, event, getText }) {
const { commands } = global.client;
const { threadID, messageID, body } = event;

if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const command = commands.get(splitBody[1].toLowerCase());
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
const permissionText = (command.config.hasPermission === 0) ? "User" : (command.config.hasPermission === 1) ? "Admin Group" : "Admin Bot";
return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, permissionText), threadID, messageID);
}

module.exports.run = function ({ api, event, args, getText }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

// --------- all command group view ----------
if (args[0] === "all") {
const cmds = commands.values();
var group = [], msg = "";
for (const commandConfig of cmds) {
if (!group.some(item => item.group.toLowerCase() === commandConfig.config.commandCategory.toLowerCase()))
group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
else
group.find(item => item.group.toLowerCase() === commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
}
group.forEach(commandGroup =>
msg += `\n✦ 𝑪𝑨𝑻𝑬𝑮𝑶𝑹𝒀: 『 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 』\n${commandGroup.cmds.map(cmd => ` ⫸ Meral ➤ 『 ${cmd.toUpperCase()} 』`).join('\n')}\n`
);

const fancy = `╔═━━━━━━ ◈ ━━━━━═╗
🌟 Meral HELP MENU 🌟
╚═━━━━━━ ◈ ━━━━━═╝\n`;
const info = `━━━━━━━━━━━━━━━━━━
📝 মোট কমান্ড : ${commands.size}
👑 𝙊𝙒𝙉𝙀𝙍: TâMïM 
ℹ️ ${prefix}help [নাম] লিখে কমান্ড ডিটেইল দেখুন!
━━━━━━━━━━━━━━━━━━`;

api.sendMessage(fancy + msg + info, threadID, (err, info) => {
if (autoUnsend === false) {
setTimeout(() => {
return api.unsendMessage(info.messageID);
}, delayUnsend * 1000);
}
}, messageID);
return;
}

// ---------- list or module/page help view ----------
if (!command) {
const arrayInfo = [];
const page = parseInt(args[0]) || 1;
const numberOfOnePage = 15;
let msg = "";

for (var [name] of (commands)) {
arrayInfo.push(name);
}

arrayInfo.sort();
const first = numberOfOnePage * page - numberOfOnePage;
const helpView = arrayInfo.slice(first, first + numberOfOnePage);

for (let cmds of helpView) msg += `⫸ Meral ➤ 『 ${cmds.toUpperCase()} 』\n`;
const fancy = `╔╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╗
✨ 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙎𝙏 ✨
╚╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╝\n`;
const info = `━━━━━━━━━━━━━━━━━━━
📃 পেইজ : [${page}/${Math.ceil(arrayInfo.length / numberOfOnePage)}]
📝 মোট কমান্ড : ${arrayInfo.length}
ℹ️ ${prefix}help [নাম] লিখে কমান্ড ডিটেইল দেখুন!
━━━━━━━━━━━━━━━━━━━`;

api.sendMessage(fancy + msg + info, threadID, (err, info) => {
if (autoUnsend === false) {
setTimeout(() => {
return api.unsendMessage(info.messageID);
}, delayUnsend * 1000);
}
}, messageID);
return;
}

// ---------- single module info ----------
const permissionText = (command.config.hasPermission === 0) ? "User" : (command.config.hasPermission === 1) ? "Admin Group" : "Admin Bot";
const responseMessage = getText("moduleInfo",
command.config.name,
command.config.description || "Meral Bot আপনার জন্য কমান্ড তৈরি করেছে, সবসময় আপনার পাশে। 💎",
`${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`,
command.config.commandCategory,
command.config.cooldowns,
permissionText
);

api.sendMessage(responseMessage, threadID, (err, info) => {
if (autoUnsend === false) {
setTimeout(() => {
return api.unsendMessage(info.messageID);
}, delayUnsend * 1000);
}
}, messageID);
};
