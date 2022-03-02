
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,client,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2143, 3]
    conn.browserDescription = [ 'Darlyn-Bot RENTA', '', '3.0' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Escanea QR para convertirte en un bot\nEl QR se cambiará cada 30 segundos\nBy ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	reply(`Éxito convirtiéndose en Bot\n\n*Dispositivo*:\n\n ${JSON.stringify(conn.user,null,2)}\n\nBy ८≛ 𝓓𝓪𝓻𝓵𝔂𝓷 𔐬☆᤻᤻[𝓼𝓮𝔁]`)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    listjadibot.push(conn.user)
    conn.on('chat-update', async (message) => {
        require('../index.js')(conn, message)
    })
}

const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close()
	reply('Éxito deteniendo el bot de alquiler')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}
