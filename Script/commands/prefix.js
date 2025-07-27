module.exports.config = {
'name': "prefix",
'version': "1.0.0",
'hasPermssion': 0x0,
'credits': "Ullash",
'description': "send bot prefix",
'commandCategory': "prefix",
'usages': '',
'cooldowns': 0x5
};

module.exports.handleEvent = async function ({
api: _0x3d9d88,
event: _0x1363b4
}) {
const _0x578fec = require('fs');
const _0x5d772f = require("request");
const _0x48cd3e = require("moment-timezone");
const {
threadID: _0x4121d2,
messageID: _0x533627,
body: _0x49cb47
} = _0x1363b4;

if (!_0x49cb47 || _0x49cb47.trim().toLowerCase() !== "prefix") {
return;
}
console.log("Prefix triggered");
const _0x3a3a94 = Date.now();
let _0x5e981b = _0x48cd3e.tz("Asia/Ho_Chi_Minh").format("dddd");
const _0x322f39 = _0x48cd3e.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");

const _0x2405cf = {
'Sunday': "𝚂𝚞𝚗𝚍𝚊𝚢",
'Monday': "𝙼𝚘𝚗𝚍𝚊𝚢",
'Tuesday': "𝚃𝚞𝚎𝚜𝚍𝚊𝚢",
'Wednesday': "𝚆𝚎𝚍𝚗𝚎𝚜𝚍𝚊𝚢",
'Thursday': "𝚃𝚑𝚞𝚛𝚜𝚍𝚊𝚢",
'Friday': "𝙵𝚛𝚒𝚍𝚊𝚢",
'Saturday': "𝚂𝚊𝚝𝚞𝚛𝚝𝚊𝚢"
};

_0x5e981b = _0x2405cf[_0x5e981b] || _0x5e981b;

const {
PREFIX: _0x30e5c0,
BOTNAME: _0x2d264e
} = global.config;

const _0x17d915 = (global.data.threadData.get(_0x4121d2) || {}).PREFIX || _0x30e5c0;

_0x3d9d88.sendMessage({
'body': "╔══════𝗣𝗥𝗘𝗙𝗜𝗫 𝗜𝗡𝗙𝗢══════╗\n\n┃ AI ASSISTANT \n┃━━━━━━━━━━━━━━━━━━━━\n┃ ✿ 𝗚𝗿𝗼𝘂𝗽 𝗣𝗿𝗲𝗳𝗶𝘅: " + _0x17d915 + "\n┃ ۞ 𝗦𝘆𝘀𝘁𝗲𝗺 𝗣𝗿𝗲𝗳𝗶𝘅: " + _0x30e5c0 + "\n┃ ✪ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: " + _0x2d264e + "\n┃ ❁ 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀: " + (global.client?.["commands"]?.["size"] || "N/A") + "\n┃ ✴ 𝗣𝗶𝗻𝗴: " + (Date.now() - _0x3a3a94) + "ms\n┃━━━━━━━━━━━━━━━━━━━━\n┃ 🗓️ " + _0x5e981b + " | ⏰ " + _0x322f39 + "\n╚════════════════════╝"
}, _0x4121d2, _0x533627);
};

module.exports.run = async () => {};
