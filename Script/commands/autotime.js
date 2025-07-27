module.exports.config = {
  'name': "autotime",
  'version': "10.02",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
  'commandCategory': "group messenger",
  'usages': '[]',
  'cooldowns': 0x3
};
const nam = [{
  'timer': "12:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 11.00 AM "]
}, {
  'timer': "1:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 12.00 AM"]
}, {
  'timer': "2:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 01.00 AM"]
}, {
  'timer': "3:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 02.00 AM"]
}, {
  'timer': "4:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 03.00 AM"]
}, {
  'timer': "5:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 04.00 AM "]
}, {
  'timer': "6:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 05.00 AM"]
}, {
  'timer': "7:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 06.00 AM "]
}, {
  'timer': "8:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 07.00 AM "]
}, {
  'timer': "9:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 08.00 AM "]
}, {
  'timer': "10:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 09.00 AM"]
}, {
  'timer': "11:00:00 AM",
  'message': ["⌚🅃🄸🄼🄴 : 10.00 AM"]
}, {
  'timer': "12:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 11.00 AM"]
}, {
  'timer': "1:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 12.00 PM "]
}, {
  'timer': "2:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 01.00 PM"]
}, {
  'timer': "3:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 02.00 PM"]
}, {
  'timer': "4:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 03.00 PM"]
}, {
  'timer': "5:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 04.00 PM "]
}, {
  'timer': "6:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 05.00 PM"]
}, {
  'timer': "7:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 06.00 PM"]
}, {
  'timer': "8:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 07.00 PM"]
}, {
  'timer': "9:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 08.00 PM "]
}, {
  'timer': "10:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 09.00 PM"]
}, {
  'timer': "11:00:00 PM",
  'message': ["⌚🅃🄸🄼🄴 : 10.00 PM "]
}];
module.exports.onLoad = _0x51a72a => setInterval(() => {
  if (á = nam.find(_0x32e72f => _0x32e72f.timer == new Date(Date.now() + 25200000).toLocaleString().split(/,/).pop().trim())) {
    global.data.allThreadID.forEach(_0x438dac => _0x51a72a.api.sendMessage(á.message[Math.floor(Math.random() * á.message.length)], _0x438dac));
  }
}, 1000);
module.exports.run = _0x49e04b => {};
