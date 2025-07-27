const os = require('os');
const startTime = new Date();
module.exports = {
  'config': {
    'name': "upt",
    'version': "1.0.0",
    'hasPermssion': 0x0,
    'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    'description': "test",
    'commandCategory': "box",
    'usages': "test",
    'prefix': "false",
    'dependencies': {},
    'cooldowns': 0x5
  },
  'run': async function ({
    api: _0x1b9028,
    event: _0x2e0c98,
    args: _0x2d58a4
  }) {
    try {
      const _0x2e1f77 = (new Date() - startTime) / 1000;
      const _0x483168 = Math.floor(_0x2e1f77 / 86400);
      const _0x580cd4 = Math.floor(_0x2e1f77 % 86400 / 3600);
      const _0x1be39a = Math.floor(_0x2e1f77 % 3600 / 60);
      const _0x5c4d32 = Math.floor(_0x2e1f77 % 60);
      const _0x109cd3 = _0x483168 + "d " + _0x580cd4 + "h " + _0x1be39a + "m " + _0x5c4d32 + 's';
      const _0x167414 = os.cpus().map(_0x3c86b9 => _0x3c86b9.times.user).reduce((_0x88108c, _0x2b10ec) => _0x88108c + _0x2b10ec) / os.cpus().length;
      const _0x226203 = os.totalmem() / 1073741824;
      const _0x28b18b = os.freemem() / 1073741824;
      const _0x2e383b = _0x226203 - _0x28b18b;
      const _0x3092 = new Date();
      const _0x5616c = {
        'year': "numeric",
        'month': "numeric",
        'day': "numeric"
      };
      const _0x239874 = _0x3092.toLocaleDateString("en-US", _0x5616c);
      const _0x1756a0 = _0x3092.toLocaleTimeString("en-US", {
        'timeZone': "Asia/Kolkata",
        'hour12': true
      });
      const _0x123cda = Date.now();
      await _0x1b9028.sendMessage({
        'body': "🔎| checking........"
      }, _0x2e0c98.threadID);
      const _0x46062f = Date.now() - _0x123cda;
      let _0x682af0 = "⛔| 𝖡𝖺𝖽 𝖲𝗒𝗌𝗍𝖾𝗆";
      if (_0x46062f < 1000) {
        _0x682af0 = "✅| 𝖲𝗆𝗈𝗈𝗍𝗁 𝖲𝗒𝗌𝗍𝖾𝗆";
      }
      const _0x23af44 = "♡   ∩_∩\n （„• ֊ •„)♡\n╭──∪∪───────⟡\n│AI Assistant \n 𝗨𝗣𝗧𝗜𝗠𝗘 𝗜𝗡𝗙𝗢\n├───────────⟡\n│ ⏰ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘\n│  " + _0x109cd3 + "\n├───────────⟡";
      _0x1b9028.sendMessage({
        'body': _0x23af44
      }, _0x2e0c98.threadID, (_0x2bf75d, _0x26e665) => {
        if (_0x2bf75d) {
          console.error("Error sending message with attachment:", _0x2bf75d);
        } else {
          console.log("Message with attachment sent successfully:", _0x26e665);
        }
      });
    } catch (_0x434eda) {
      console.error("Error retrieving system information:", _0x434eda);
      _0x1b9028.sendMessage("Unable to retrieve system information.", _0x2e0c98.threadID, _0x2e0c98.messageID);
    }
  }
};
