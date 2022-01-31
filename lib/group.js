const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const moment = require("moment-timezone")

const { getBuffer } = require('../lib/myfunc')
const { color, bgcolor } = require('../lib/color')

module.exports = welcome = async (naze, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await naze.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
                try {
                pp_grup = await naze.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.postimg.cc/SN54m6LW/SAVE-20210728-133334.jpg'
            }
            if (anu.action == 'add' && mem.includes(naze.user.jid)) {
            naze.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot Ketik ${prefix}menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(naze.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await naze.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                let v = naze.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                teks = `Halo Member baru\n${anu_user} \nIntro\n• Nama : \n• Umur :\n• Gender : \n• Asal :\n\n• Semoga Betah `
	            buff = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/neonlight?text=${anu_user}&apikey=Alphabot`)
                buttons = [{buttonId: `#y`,buttonText:{displayText: 'WELCOME👋'},type:1}]
                imageMsg = (await naze.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${teks}`, footerText: 'Patuhi Peraturan Grup', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await naze.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                naze.relayWAMessage(prep)
}
            if (anu.action == 'remove' && !mem.includes(naze.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await naze.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = naze.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Byee ${anu_user}`
                buff = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/matrix?text=${anu_user}&apikey=Alphabot`)
                buttons = [{buttonId: `#y`,buttonText:{displayText: 'SELAMAT JALAN'},type:1}]
                imageMsg = (await naze.prepareMessageMedia((buff), 'imageMessage', {thumbnail: buff})).imageMessage
                buttonsMessage = { contentText: `${out}`, footerText: 'Sayonara', imageMessage: imageMsg, buttons: buttons, headerType: 4 }
                prep = await naze.prepareMessageFromContent(mdata.id,{buttonsMessage},{})
                naze.relayWAMessage(prep)
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}