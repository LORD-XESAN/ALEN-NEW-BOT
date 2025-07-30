module.exports.config = {
  'name': "fork",
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Islamick Chat",
  'description': "public fork link",
  'commandCategory': "public",
  'cooldowns': 0x1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0x7be861,
  event: _0x2fa53d,
  args: _0x17579a,
  client: _0x4da9d9,
  Users: _0xbaa74e,
  Threads: _0xa726fd,
  __GLOBAL: _0x28f4be,
  Currencies: _0x35237d
}) {
  const _0x40c56c = global.nodemodule.request;
  const _0x581211 = global.nodemodule["fs-extra"];
  var _0x3a34b4 = ["https://i.imgur.com/gSW285Z.gif", "https://i.postimg.cc/QdgH08j6/Messenger-creation-C2-A39-DCF-A8-E7-4-FC7-8715-2559476-FEEF4.gif", "https://i.imgur.com/gSW285Z.gif", '', ''];
  var _0x2b6271 = () => _0x7be861.sendMessage({
    'body': "╭•┄┅════❁🌺❁════┅┄•╮\n   আসসালামু আলাইকুম-!!🖤💫\n╰•┄┅════❁🌺❁════┅┄•╯\n\nআপনি আমাদের ইসলামিক মেসেঞ্জার রোবোট টি ব্যবহার করে চাইলে,  নিজের দেওয়া ইউটিউব ভিডিও লিংক থেকে দেখে শিখে নিতে পারবেন কিভাবে রোবটটি চালাবেন\n\n আপনি C3C zip file এবং kiwi browser লিংক আমাদের web site এ পেয়ে জাবেন।\n web site link  and fork লিংক নিচে দেওয়া থাকবে-!!✨💖\nআরও নতুন নতুন ফাইল updated  গুলো আমাদের গ্রুপ এ দেওয়া হবে-!!📂\n\nনতুন নতুন update file পেতে আমাদের গ্রুপ এর সাথেই থাকবেন-!!✨🧡\n\n\n       𝐅𝐎𝐑𝐊 𝐋𝐈𝐍𝐊.  https://github.com/cyber-ullash/CYBER-BOT-COMMUNITY.git\n\n YOUTUBE VIDEO 📷 :- https://youtu.be/qHUMWc7CTS8?si=N5abO6d9SnnwMJJr \n\n   🌐𝐖𝐄𝐁 𝐒𝐈𝐓𝐄 𝐋𝐈𝐍𝐊.  https://bio.link/cyber_ullash\n\n𝐆𝐫𝐨𝐮𝐩 𝐋𝐢𝐧𝐤:- https://m.me/j/AbY9JRzH2X7k9weO/         \n\n SUPPORT 𝐆𝐫𝐨𝐮𝐩 𝐋𝐢𝐧𝐤:- https://m.me/j/AbaYeTodykMcGSTO/",
    'attachment': _0x581211.createReadStream(__dirname + "/cache/juswa.jpg")
  }, _0x2fa53d.threadID, () => _0x581211.unlinkSync(__dirname + "/cache/juswa.jpg"));
  return _0x40c56c(encodeURI(_0x3a34b4[Math.floor(Math.random() * _0x3a34b4.length)])).pipe(_0x581211.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close", () => _0x2b6271());
};
