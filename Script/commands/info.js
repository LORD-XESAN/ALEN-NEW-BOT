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
    'body': "<----------------------------------------->\n     𝗥𝗢𝗕𝗢𝗧 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡🫧\n<----------------------------------------->\n\n𝗥𝗼𝗯𝗼𝘁 𝗡𝗮𝗺𝗲 : AI Assistant \n𝗥𝗼𝗯𝗼𝘁 𝗔𝗱𝗺𝗶𝗻 : 𝐀𝐋𝐄𝐍 :) 3:) \n𝗥𝗼𝗯𝗼𝘁 𝗢𝘄𝗻𝗲𝗿 : 𝐉𝐄𝐒𝐀𝐍 𝐀𝐇𝐌𝐄𝐃 \n\n<----------------------------------------->\n    𝗢𝗧𝗛𝗘𝗥𝗦 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡\n<----------------------------------------->\n\n𝗧𝗼𝗱𝗮𝘆𝘀'𝘀 𝗧𝗶𝗺𝗲 : " + _0x51de78 + " \n𝗥𝗼𝗯𝗼𝘁 𝗜𝘀 𝗥𝘂𝗻𝗻𝗶𝗻𝗴 " + _0xc312c9 + ':' + _0x5c3d4e + ':' + _0x13352a + ".\n𝗧𝗵𝗮𝗻𝗸𝘀 𝗙𝗼𝗿 𝗨𝘀𝗶𝗻𝗴 ➠𝗔𝗟𝗘𝗡🫧 ",
  }, _0x1bbdfe.threadID); // Removed attachment and callback for unlinkSync
  return _0x318093(); // Directly call the sendMessage function
};
