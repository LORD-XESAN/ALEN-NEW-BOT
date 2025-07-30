module.exports.config = {
    name: "help",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
    description: "FREE SET-UP MESSENGER",
    commandCategory: "system",
    usages: "[Name module]",
    cooldowns: 5,
    envConfig: {
        autoUnsend: true,
        delayUnsend: 20
    }
};

module.exports.languages = {
 "en": {
    "moduleInfo": "╔════⚜️ *𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐃𝐄𝐓𝐀𝐈𝐋𝐒* ⚜️════╗\n" +
                  "║  🌟 *Name:* %1\n" +
                  "║  📝 *Description:* %2\n" +
                  "║  💡 *Usage:* %3\n" +
                  "║  📁 *Category:* %4\n" +
                  "║  ⏳ *Cooldown:* %5 seconds\n" +
                  "║  🔑 *Permission:* %6\n" +
                  "╚═════════════════════╝\n" +
                  "✨ *Module by:* TâMïM ッ",
    "helpList": 'There are %1 commands on this bot. Use: "%2help [command_name]" to know how to use!',
    "user": "User",
    "adminGroup": "Admin Group",
    "adminBot": "Bot Admin"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
 const { commands } = global.client;
 const { threadID, messageID, body } = event;

 if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
 const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
 if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const command = commands.get(splitBody[1].toLowerCase());
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
 return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
 const { commands } = global.client;
 const { threadID, messageID } = event;
 const command = commands.get((args[0] || "").toLowerCase());
 const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
 const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
 const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

 if (args[0] == "all") {
    const commandList = commands.values();
    let group = [], msg = "";

    for (const commandConfig of commandList) {
      if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) {
        group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
      } else {
        group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
      }
    }

    group.forEach(commandGroup => {
      msg += `👑 *${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} Commands* 👑\n• ${commandGroup.cmds.join(' • ')}\n\n`;
    });

    return api.sendMessage(
      `╔═════⚜️*𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓*⚜️═════╗\n` + msg +
      `╚════════════════════════╝\n` +
      `╭───────⚜️ *INFO* ⚜️───────╮\n` +
      `│  💡 *Usage:* ${prefix}help [Name?] or ${prefix}help [Page?]\n` +
      `│  👤 *Owner:* TâMïM ッ\n` +
      `│  📊 *Total Commands:* ${commands.size}\n` +
      `╰───────────────────────╯`,
      event.threadID,
      messageID
    );
 }

 if (!command) {
    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 15;
    let i = 0;
    let msg = "";

    for (const [name, value] of commands) {
      arrayInfo.push(name);
    }

    arrayInfo.sort();
    const first = numberOfOnePage * page - numberOfOnePage;
    i = first;
    const helpView = arrayInfo.slice(first, first + numberOfOnePage);

    for (const cmds of helpView) msg += `💎 *${cmds}*\n`;

    const siu = `╔═════⚜️ *𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓* ⚜️═════╗\n`;
    const text = `╚════════════════════════╝\n` +
                 `╭───────⚜️ *INFO* ⚜️───────╮\n` +
                 `│  💡 *Usage:* ${prefix}help [Name?] or ${prefix}help [Page?]\n` +
                 `│  👤 *Owner:* TâMïM ッ\n` +
                 `│  📊 *Total Commands:* ${arrayInfo.length}\n` +
                 `│  📄 *Page:* ${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)}\n` +
                 `╰───────────────────────╯`;

    return api.sendMessage(siu + "\n" + msg + text, event.threadID, messageID);
 }

 const leiamname = getText("moduleInfo", command.config.name, command.config.description, `${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits);

 return api.sendMessage(leiamname, event.threadID, messageID);
};
