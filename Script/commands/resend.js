module.exports.handleEvent = async function({
	event: e,
	api: a,
	client: t,
	Users: s
}) {
	const n = global.nodemodule.request,
		o = global.nodemodule.axios,
		{
			writeFileSync: d,
			createReadStream: r
		} = global.nodemodule["fs-extra"];
	let {
		messageID: g,
		senderID: l,
		threadID: u,
		body: c
	} = e;

	global.logMessage || (global.logMessage = new Map), 
	global.data.botID || (global.data.botID = a.getCurrentUserID());
	const i = global.data.threadData.get(u) || {};

	// Check if resend is off and sender is not the bot
	if ((void 0 === i.resend || 0 != i.resend) && l != global.data.botID && ("message_unsend" != e.type)) {
		global.logMessage.set(g, {
			msgBody: c,
			attachment: e.attachments
		});
	}

	if ("message_unsend" == e.type) {
		var m = global.logMessage.get(g);
		if (!m) return;
		let e = await s.getNameUser(l);
		if (null == m.attachment[0]) return a.sendMessage(`${e} removed 1 message\ncontent: ${m.msgBody}`, u);
		{
			let t = 0,
				s = {
					body: `${e} just removed ${m.attachment.length} attachment.${"" != m.msgBody ? `\n\nContent: ${m.msgBody}` : ""}`,
					attachment: [],
					mentions: {
						tag: e,
						id: l
					}
				};
			for (var f of m.attachment) {
				t += 1;
				var h = (await n.get(f.url)).uri.pathname,
					b = h.substring(h.lastIndexOf(".") + 1),
					p = __dirname + `/cache/${t}.${b}`,
					y = (await o.get(f.url, {
						responseType: "arraybuffer"
					})).data;
				d(p, Buffer.from(y, "utf-8")), s.attachment.push(r(p))
			}
			a.sendMessage(s, u)
		}
	}
},

module.exports.languages = {
	vi: {
		on: "Bật",
		off: "Tắt",
		successText: "resend thành công"
	},
	en: {
		on: "on",
		off: "off",
		successText: "resend success!"
	}
},

module.exports.run = async function({
	api: e,
	event: a,
	Threads: t,
	getText: s
}) {
	const {
		threadID: n,
		messageID: o,
		senderID: adminID // Get senderID
	} = a;

	// Replace YOUR_ADMIN_ID with the actual admin IDs
	const adminIds = ["61570292561520", "YOUR_ADMIN_ID_2"]; // Add the admin IDs here

	let d = (await t.getData(n)).data;

	// Check if the sender is an admin before toggling resend
	if (adminIds.includes(adminID)) {
		d.resend = !(d.resend && 0 != d.resend); // Toggle resend only for admins
	} else {
		d.resend = false; // Ensure resend is off for non-admins
	}

	await t.setData(n, {
		data: d
	});
	global.data.threadData.set(n, d);
	e.sendMessage(`${1 == d.resend ? s("on") : s("off")} ${s("successText")}`, n, o);
};
