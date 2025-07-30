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
      `╔══⚜️ *𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓* ⚜️══╗\n` + msg +
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

    const siu = `╔══⚜️ *𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓* ⚜️══╗\n`; // Changed this line
    const text = `╚══════════════════════╝\n` +
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
