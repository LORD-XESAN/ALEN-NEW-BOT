module.exports.config = {
name: "Anime",
version: "1.0.0",
hasPermssion: 0,
credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
description: "RANDOM dorimon video",
commandCategory: "Random video",
usages: "Statusvideo",
cooldowns: 2,
dependencies: {
"request":"",
"fs-extra":"",
"axios":""
}

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link = [
"https://i.imgur.com/OOp9CPF.mp4",// video credits JADID (C B T)
"https://i.imgur.com/lAWD0MN.mp4",
"https://i.imgur.com/pntn2az.mp4",
"https://i.imgur.com/TogW7BE.mp4",
"https://i.imgur.com/vSWaSMM.mp4",
"https://i.imgur.com/W9F0Ejp.mp4",
"https://i.imgur.com/FKjoziV.mp4",
"https://i.imgur.com/JnT7nft.mp4",
"https://i.imgur.com/hncSHRn.mp4",
"https://i.imgur.com/HRQxLDB.mp4",
"https://i.imgur.com/Bl6bp1v.mp4",
"https://i.imgur.com/VcZpVjz.mp4",
"https://i.imgur.com/y8PxXD6.mp4",
"https://i.imgur.com/n2bm4jv.mp4",
"https://i.imgur.com/W9F0Ejp.mp4",
"https://i.imgur.com/hcjmnR1.mp4",
"https://i.imgur.com/iy8YIQy.mp4",
"https://i.imgur.com/kU50YdZ.mp4",
"https://i.imgur.com/Hzej3xc.mp4",
"https://i.imgur.com/ajzgjPY.mp4",
"https://i.imgur.com/sKUqFkM.mp4",
"https://i.imgur.com/Qbpry0f.mp4",
"https://i.imgur.com/G6JfDua.mp4",
"https://i.imgur.com/wdfw4uX.mp4",
"https://i.imgur.com/2AG6Xx5.mp4",
"https://i.imgur.com/NE8sV7G.mp4",
"https://i.imgur.com/4LrJXPx.mp4",
"https://i.imgur.com/8JSMtQ9.mp4",
"https://i.imgur.com/1toITNz.mp4",
"https://i.imgur.com/KlpeoUK.mp4",
"https://i.imgur.com/Qbpry0f.mp4",
"https://i.imgur.com/JYJj77U.mp4",              
"https://i.imgur.com/yBUTdIC.mp4",
"https://i.imgur.com/TAsKjQs.mp4",
"https://i.imgur.com/tmIUDPB.mp4",
];
var callback = () => api.sendMessage({body:`╭──────•◈•───────╮\n\nㅤ DOREMON VIDEO 📷 \n     𝗠𝗔𝗗𝗘 𝗕𝗬: 𝐂𝐘𝐁𝐄𝐑 𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘   \n╰──────•◈•───────╯`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"));
return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
};9
