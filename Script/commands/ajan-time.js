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
            'message': "𝗣𝗿𝗮𝘆𝗲𝗿 𝗔𝗹𝗹𝗮𝗿𝘁 𝐅𝐫𝐨𝐦  ➠𝗔𝗟𝗘𝗡🫧\nসম্মানিত মুসলিম ভাই ও বোনেরা । আর কিছুক্ষণ এর মধ্যে ফজরের আজান হবে , অনুগ্রহ করে সবাই ঘুম থেকে উঠে নামাজের জন্য তৈরি হন😍🌻"
        },
        "01:00 PM": {
            'message': "𝗣𝗿𝗮𝘆𝗲𝗿 𝗔𝗹𝗹𝗮𝗿𝘁 𝐅𝐫𝐨𝐦  ➠𝗔𝗟𝗘𝗡🫧\nসম্মানিত মুসলিম ভাই ও বোনেরা । আর কিছুক্ষণ এর মধ্যে যোহরের আজান হবে , অনুগ্রহ করে সবাই অজু-গোসল করে নামাজের জন্য তৈরি হন😇"
        },
        "05:00 PM": {
            'message': "𝗣𝗿𝗮𝘆𝗲𝗿 𝗔𝗹𝗹𝗮𝗿𝘁 𝐅𝐫𝐨𝐦  ➠𝗔𝗟𝗘𝗡🫧\nসম্মানিত মুসলিম ভাই ও বোনেরা । আর কিছুক্ষণ এর মধ্যে আসরের আজান হবে , অনুগ্রহ করে সবাই কাজ থেকে বিরত হয়ে নামাজের জন্য তৈরি হন🥰"
        },
        "07:00 PM": {
            'message': "𝗣𝗿𝗮𝘆𝗲𝗿 𝗔𝗹𝗹𝗮𝗿𝘁 𝐅𝐫𝐨𝐦  ➠𝗔𝗟𝗘𝗡🫧\nসম্মানিত মুসলিম ভাই ও বোনেরা । আর কিছুক্ষণ এর মধ্যে মাগরিবের আজান হবে , অনুগ্রহ করে সবাই নামাজের জন্য তৈরি হন😊✨"
        },
        "08:15 PM": {
            'message': "𝗣𝗿𝗮𝘆𝗲𝗿 𝗔𝗹𝗹𝗮𝗿𝘁 𝐅𝐫𝐨𝐦  ➠𝗔𝗟𝗘𝗡🫧\nসম্মানিত মুসলিম ভাই ও বোনেরা । আর কিছুক্ষণ এর মধ্যে এশার আজান হবে , অনুগ্রহ করে সবাই অলসতা বাদ দিয়ে নামাজের জন্য তৈরি হন😌🫧"
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
