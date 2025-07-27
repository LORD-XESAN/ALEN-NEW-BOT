const request = require("request");
const fs = require("fs-extra");
module.exports.config = {
'name': "help",
'version': "1.0.3",
'hasPermssion': 0x0,
'credits': "Joy",
'description': "Get list of bot commands",
'commandCategory': "system",
'usages': "[name | all | page]",
'cooldowns': 0x5,
'envConfig': {
'autoUnsend': true,
'delayUnsend': 0x14
}
};
module.exports.languages = {
'en': {
'moduleInfo': "╭──────•◈•──────╮\n | 𝗝𝗼𝘆 𝗰𝗵𝗮𝘁 𝗯𝗼𝘁\n |●𝗡𝗮𝗺𝗲: •—» %1 «—•\n |●𝗨𝘀𝗮𝗴𝗲: %3\n |●𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: %2\n |●𝗖𝗮𝘁𝗲𝗴𝗼𝗿𝘆: %4\n |●𝗪𝗮𝗶𝗧𝗶𝗻𝗴 𝘁𝗶𝗺𝗲: %5 seconds(s)\n |●𝗣𝗲𝗿𝗺𝗶𝘀𝘀𝗶𝗼𝗻: %6\n |𝗠𝗼𝗱𝘂𝗹𝗲 𝗰𝗼𝗱𝗲 𝗯𝘆\n |•—» Joy «—•\n╰──────•◈•──────╯",
'helpList': "[ There are %1 commands on this bot, Use: \"%2help nameCommand\" to know how to use! ]",
'user': "User",
'adminGroup': "Admin group",
'adminBot': "Admin bot"
}
};
module.exports.handleEvent = function ({
api: _0x1abf12,
event: _0x2170cf
}) {
const {
body: _0x3bfe49,
threadID: _0x22df71
} = _0x2170cf;
if (!_0x3bfe49 || _0x3bfe49.toLowerCase().trim() !== "help") {
return;
}
return _0x1abf12.sendMessage("📌 Type /help [command name] to get details.\nExample: /help play", _0x22df71);
};
module.exports.run = async function ({
api: _0x4483ff,
event: _0x190c49,
args: _0x473167,
getText: _0xf728bd
}) {
const {
commands: _0x22cdfb
} = global.client;
const {
threadID: _0x44646a,
messageID: _0xb69bd7
} = _0x190c49;
const _0x73d156 = global.data.threadData.get(parseInt(_0x44646a)) || {};
const {
autoUnsend: _0x1074bb,
delayUnsend: _0x8cba43
} = global.configModule[this.config.name];
const _0x515e92 = _0x73d156.PREFIX || global.config.PREFIX;
const _0x5d71ef = _0x5f4468 => {
return _0x4483ff.sendMessage({'body': _0x5f4468}, _0x44646a, (_0x46bf6a, _0x5d293a) => {
if (_0x1074bb) {
setTimeout(() => _0x4483ff.unsendMessage(_0x5d293a.messageID), _0x8cba43 * 0x3e8);
}
}, _0xb69bd7);
};
if (_0x473167[0x0] === "all") {
let _0x592ef0 = [];
let _0x1c664d = '';
for (const _0x5e4d85 of _0x22cdfb.values()) {
const _0x1214ad = _0x5e4d85.config.commandCategory || "Uncategorized";
const _0x51088d = _0x592ef0.find(_0x172386 => _0x172386.group === _0x1214ad);
if (_0x51088d) {
_0x51088d.cmds.push(_0x5e4d85.config.name);
} else {
_0x592ef0.push({
'group': _0x1214ad,
'cmds': [_0x5e4d85.config.name]
});
}
}
for (const _0x3bdb5c of _0x592ef0) {
_0x1c664d += "🔹 " + _0x3bdb5c.group.toUpperCase() + "\n" + _0x3bdb5c.cmds.join(" • ") + "\n\n";
}
return _0x5d71ef("📚 All Commands by Category 📚\n\n" + _0x1c664d + "━━━━━━━━━━━━\n🔍 Use: " + _0x515e92 + "help [name]\n👤 Owner: TâMïM \n📦 Total: " + _0x22cdfb.size);
}
if (_0x473167[0x0] && !isNaN(_0x473167[0x0])) {
const _0x5dc301 = parseInt(_0x473167[0x0]);
const _0x3ba873 = Array.from(_0x22cdfb.keys()).sort();
const _0x21e643 = Math.ceil(_0x3ba873.length / 0xf);
if (_0x5dc301 > _0x21e643 || _0x5dc301 < 0x1) {
return _0x4483ff.sendMessage("❌ Page " + _0x5dc301 + " not found (1 - " + _0x21e643 + ')', _0x44646a, _0xb69bd7);
}
const _0x237c06 = _0x3ba873.slice((_0x5dc301 - 0x1) * 0xf, _0x5dc301 * 0xf);
const _0x4e8107 = _0x237c06.map(_0x11033d => "• " + _0x11033d).join("\n");
return _0x5d71ef("📖 Page " + _0x5dc301 + '/' + _0x21e643 + "\n\n" + _0x4e8107 + "\n\n🔍 Use: " + _0x515e92 + "help [command name]");
}
const _0x4eca17 = (_0x473167[0x0] || '').toLowerCase();
if (!_0x4eca17) {
return _0x4483ff.sendMessage("ℹ️ Use: " + _0x515e92 + "help [name | all | page]", _0x44646a, _0xb69bd7);
}
const _0x550e38 = _0x22cdfb.get(_0x4eca17);
if (!_0x550e38) {
return _0x4483ff.sendMessage("❌ Command not found: " + _0x4eca17, _0x44646a, _0xb69bd7);
}
const _0x49dab3 = _0xf728bd('moduleInfo', _0x550e38.config.name, _0x550e38.config.description, '' + _0x515e92 + _0x550e38.config.name + " " + (_0x550e38.config.usages || ''), _0x550e38.config.commandCategory, _0x550e38.config.cooldowns, _0x550e38.config.hasPermssion == 0x0 ? _0xf728bd("user") : _0x550e38.config.hasPermssion == 0x1 ? _0xf728bd('adminGroup') : _0xf728bd("adminBot"), _0x550e38.config.credits);
return _0x5d71ef(_0x49dab3);
};
