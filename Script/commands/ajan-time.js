module.exports.config = {
'name': "ajan",
'version': "2.0",
'hasPermssion': 0x0,
'credits': "Islamick Cyber Chat",
'description': "সেট করা সময় অনুযায়ী স্বয়ংক্রিয়ভাবে বার্তাগুলি পাঠানো হবে!",
'commandCategory': "AutoTime",
'countDown': 0x3
};

// Declare a variable to hold the timeout ID outside of onLoad to make it accessible globally
let azanTimer;

module.exports.onLoad = async ({
api: _0x4cee77
}) => {
const _0x1aa5fa = {
"05:35 AM": {
'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ফজরে আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n"
},
"01:00 PM": {
'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨জোহরের আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n"
},
"04:30 PM": {
'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨আসর আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n"
},
"07:05 PM": {
'message': ". ╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨মাগরিব আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n"
},
"08:15 PM": {
'message': "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ইশা আজান✨«—•\n ╰•┄┅══❁🌺❁══┅┄•╯\n\n"
}
};

const _0x5c48f9 = async () => {
const _0x81b199 = new Date(Date.now() + 21600000).toLocaleTimeString("en-US", {
'hour': "2-digit",
'minute': "2-digit",
'hour12': true
}).split(',').pop().trim();

if (_0x1aa5fa[_0x81b199]) {
console.log(_0x1aa5fa[_0x81b199].message);
try {
let _0x43ee23 = {
'body': _0x1aa5fa[_0x81b199].message
};
global.data.allThreadID.forEach(_0x30683f => _0x4cee77.sendMessage(_0x43ee23, _0x30683f));
} catch (_0x1a816f) {
console.error("Failed to send message for time " + _0x81b199 + ':', _0x1a816f);
}
}
// Clear any existing timer before setting a new one to prevent duplicates
clearTimeout(azanTimer); 
azanTimer = setTimeout(_0x5c48f9, 45000);
};

// Initial call to start the timer
// Only start if it's not already running to prevent multiple instances on module reload
if (!global.azanTimerInitialized) {
    _0x5c48f9();
    global.azanTimerInitialized = true;
}
};

module.exports.run = ({}) => {};
