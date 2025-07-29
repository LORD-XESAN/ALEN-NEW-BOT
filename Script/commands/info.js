module.exports.config = {
  'name': "info",
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Ialamick Chat",
  'description': "Admin and Bot info.",
  'commandCategory': "...",
  'cooldowns': 0x1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0x5df86b,
  event: _0x1bbdfe,
  args: _0xfe6473,
  client: _0x40ae6f,
  Users: _0x1a983f,
  Threads: _0xce2348,
  __GLOBAL: _0x3c3e23,
  Currencies: _0x26c195
}) {
  const _0x32c61e = global.nodemodule.request;
  const _0x54f377 = global.nodemodule["fs-extra"];
  const _0x15f9de = process.uptime();
  const _0xc312c9 = Math.floor(_0x15f9de / 3600);
  const _0x5c3d4e = Math.floor(_0x15f9de % 3600 / 60);
  const _0x13352a = Math.floor(_0x15f9de % 60);
  const _0x56621e = require("moment-timezone");
  var _0x51de78 = _0x56621e.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
  // Removed image sending link part
  var _0x318093 = () => _0x5df86b.sendMessage({
    'body': "•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n•┄┅═════❁🌺❁═════┅┄•\n\n 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : AI Assistant \n\n𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : Tamim \n\n𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 : Tamim Khan \n\n•┄┅═════❁🌺❁═════┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═════❁🌺❁═════┅┄•\n\n𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : " + _0x51de78 + " \n\n𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 " + _0xc312c9 + ':' + _0x5c3d4e + ':' + _0x13352a + ".\n\n𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠  ༄🌺\n｢🕋｣" + global.config.BOTNAME + "｢🕋｣",
  }, _0x1bbdfe.threadID); // Removed attachment and callback for unlinkSync
  return _0x318093(); // Directly call the sendMessage function
};
