const axios = require("axios");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    // Send the message without an image
    return api.sendMessage({
        body: `╭──────────────────╮
           𝗔𝗗𝗠𝗜𝗡 𝗜𝗗𝗘𝗡𝗧𝗜𝗧𝗬🫧
╰──────────────────╯
আসসালামু আলাইকুম😊🌺
𝐓𝐡𝐞 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫 𝐈𝐧𝐟𝐨🌻
1. 𝗡𝗮𝗺𝗲 : 𝗠𝗿.𝗝𝗘𝗦𝗔𝗡🫧
2. 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝐀𝐋𝐄𝐍🙂😈
3. 𝗚𝗲𝗻𝗱𝗲𝗿 : 𝖬𝖠𝖫𝖤
4. 𝗔𝗴𝗲 : 20+🫧
5. 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : সিংগেল🙂
6. 𝗪𝗼𝗿𝗸 : 𝖲𝖳𝖴𝖣𝖤𝖭𝖳🫧
7. 𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝖦𝖮𝖯𝖠𝖫𝖦𝖠𝖭𝖩,𝖡𝖠𝖭𝖦𝖫𝖠𝖣𝖤𝖲𝖧.🫧
8. 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣:- 01950141552 সিঙ্গেল মেয়েরা তাড়াতাড়ি নক দাও/কল দাও🥺🌻
9. 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗟𝗜𝗡𝗞 : https://www.facebook.com/ALEN.OKH`,
    }, event.threadID);
};
