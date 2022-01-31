//Support Yt Naze
//Sc Jangan Di Jual

const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const brainly = require('brainly-scraper')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const speed = require('performance-now')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const { mediafireDl } = require('./lib/mediafire.js')
const { fetchJson, fetchText } = require('./lib/fetcher')
const tik = require('tiktok-scraper-without-watermark')
const { exec, spawn, execSync } = require('child_process')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { ind } = require('./recode')

//DATABASE
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const afk = JSON.parse(fs.readFileSync('./database/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))

//GAMBAR
img1 = fs.readFileSync('./gambar/thumb.jpg')
img2 = fs.readFileSync('./gambar/fake.jpg')

//MODE
publik = true

//Di Bagian Sini Jangan Di Ubah
//Salah satu huruf langsung error
fakeyoi = ['Nazedev']
const botName = ['Naze BOT']
const ownerName = ['Naze']
const owner = ['6285875158363']
const ownerNumber = ['6285875158363@s.whatsapp.net']
const youtube = ['https://youtube.com/c/Nazedev']
const sawer = ['https://saweria.co/Naze']
let fakeimage = fs.readFileSync("./gambar/fake.jpg")

//Kalo Error Sc nya Fix Sendiri 
//Udah Di Bilangin Jangan Di Ganti

//=================( PEMBATASAN )=================//

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`

}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
  
//=================( PEMBATAS )=================//

module.exports = naze = async (naze, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/gi) : '-'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const c = args.join(' ')
const botNumber = naze.user.jid
const botNumberss = naze.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? naze.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const senderNumber = sender.split("@")[0] 
const isOwner = ownerNumber.includes(sender)
const totalchat = await naze.chats.all()
const groupMetadata = isGroup ? await naze.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false       
const isAntivirtex = isGroup ? antivirtex.includes(from) : false 
const isAntilink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const conts = mek.key.fromMe ? naze.user.jid : naze.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? naze.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await naze.chats.all()
const groups = naze.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = naze.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const cekcek = randomNomor(100)  

//=================( MESS ONLY )=================//

mess = {
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/6285875158363`,
wait: 'Wait a minute',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Khusus Grup ngab'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//

const fakeText = (teks) => {
naze.sendMessage(from, teks, text, {quoted: fnaz})
}
const reply = (teks) => {
naze.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
naze.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
}      
const sendMess = (hehe, teks) => {
naze.sendMessage(hehe, teks, text)
}

try {
pporang = await naze.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
const ofrply = await getBuffer(pporang)
const grupinv = (teks) => {
fgrup = naze.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `Nazedev`, "footerText": "©Nazedev", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:fgc})
naze.relayWAMessage(fgrup)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? naze.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : naze.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
//ANTI VIRTEX
if (isGroup && isAntivirtex && !mek.key.fromMe) {
if (budy.length > 2500) {
if (isGroupAdmins) return reply("admin bebas");
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
naze.groupRemove(from, [kic]).catch((e) => { reply(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`) })
}
}

//ANTI LINK
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
naze.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}          
//=================( FAKE )=================//
//FAKE TROLI
const ftrol =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 300, status: 200, thumbnail: fakeimage, surface: 200, message: '©Nazedev', orderTitle: 'naze', sellerJid: '0@s.whatsapp.net'} } }
//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftext = {
key: {fromMe: true ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const fnaz = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title": `@${pushname},"h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": `Hai ${pushname}`, "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE STATUS
const fakestatus = (teks) => {
            naze.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./gambar/fake.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }

//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Natasya\n'
            + 'ORG:Pengembang Naze Bot;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6285875158363:+6285875158363\n'
            + 'END:VCARD';
naze.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
};            
    
//=================( BUTTON )=================//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
naze.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
naze.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await naze.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
naze.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}
async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return naze.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}            

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
naze.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//=================( MEDIA URL )=================//
function _0x1f8a(){var _0x3b0963=['Mau\x20Beli\x20Sc\x20Bot\x20?\x0aWa.me/6285875158363\x0a\x0aHarga:\x2015k-30k\x0aFull\x20Pengajaran\x20✓\x0aBebas\x20Recode\x20✓\x0aNo\x20Enc\x20100%\x20✓\x0aBisa\x20Request\x20Fitur\x20✓','5783876aPdIUc','450194LtiikH','2400255WCaikZ','1040GouifO','1690328vFoDVX','12116hJnXyP','29910SlhvcX','860340rvKgqZ'];_0x1f8a=function(){return _0x3b0963;};return _0x1f8a();}var _0x35a8ef=_0x5f17;function _0x5f17(_0xd5618f,_0x5064d8){var _0x1f8a64=_0x1f8a();return _0x5f17=function(_0x5f17cb,_0x4941ea){_0x5f17cb=_0x5f17cb-0x91;var _0x2fbc52=_0x1f8a64[_0x5f17cb];return _0x2fbc52;},_0x5f17(_0xd5618f,_0x5064d8);}(function(_0x1710c1,_0x5ba38f){var _0x3a070d=_0x5f17,_0x3a537f=_0x1710c1();while(!![]){try{var _0x2a229c=-parseInt(_0x3a070d(0x91))/0x1+-parseInt(_0x3a070d(0x96))/0x2+parseInt(_0x3a070d(0x92))/0x3+parseInt(_0x3a070d(0x95))/0x4*(-parseInt(_0x3a070d(0x93))/0x5)+parseInt(_0x3a070d(0x97))/0x6+parseInt(_0x3a070d(0x99))/0x7+-parseInt(_0x3a070d(0x94))/0x8;if(_0x2a229c===_0x5ba38f)break;else _0x3a537f['push'](_0x3a537f['shift']());}catch(_0x2c922c){_0x3a537f['push'](_0x3a537f['shift']());}}}(_0x1f8a,0x711a7),scb=[_0x35a8ef(0x98)]);
var _0x20e665=_0x314c;function _0x314c(_0x37cd58,_0x3a521e){var _0x4b8e56=_0x4b8e();return _0x314c=function(_0x314c41,_0x4eaac2){_0x314c41=_0x314c41-0xaa;var _0x55af95=_0x4b8e56[_0x314c41];return _0x55af95;},_0x314c(_0x37cd58,_0x3a521e);}function _0x4b8e(){var _0x27123e=['243376EBlSHk','258900wIOfcY','114TWcRlj','10096209DvrdPy','753669vUkCXH','8VkgSua','https://youtube.com/c/LEX4YOUU','2002557RpuVza','8153257ApajrE','98158NObccs'];_0x4b8e=function(){return _0x27123e;};return _0x4b8e();}(function(_0x594d1e,_0x15ed1c){var _0x4e0b23=_0x314c,_0x878f3d=_0x594d1e();while(!![]){try{var _0x149281=-parseInt(_0x4e0b23(0xb1))/0x1+-parseInt(_0x4e0b23(0xac))/0x2+parseInt(_0x4e0b23(0xaa))/0x3+-parseInt(_0x4e0b23(0xad))/0x4+-parseInt(_0x4e0b23(0xae))/0x5*(-parseInt(_0x4e0b23(0xaf))/0x6)+-parseInt(_0x4e0b23(0xab))/0x7+-parseInt(_0x4e0b23(0xb2))/0x8*(-parseInt(_0x4e0b23(0xb0))/0x9);if(_0x149281===_0x15ed1c)break;else _0x878f3d['push'](_0x878f3d['shift']());}catch(_0x594fb9){_0x878f3d['push'](_0x878f3d['shift']());}}}(_0x4b8e,0xb5d5d),linkyt=[_0x20e665(0xb3)]);
function _0x7d02(_0x172c43,_0x2efc01){var _0x475ee4=_0x475e();return _0x7d02=function(_0x7d026d,_0x238c6d){_0x7d026d=_0x7d026d-0xf8;var _0xdba5d2=_0x475ee4[_0x7d026d];return _0xdba5d2;},_0x7d02(_0x172c43,_0x2efc01);}function _0x475e(){var _0x38e6d2=['7KFrBYl','566vbLPoG','2185605jwxDBW','4833jNGgmR','656YKzcRx','24472360alBtlI','10272344ajtBCv','2672eOHLSC','━➤\x20「\x20𝙄𝙉𝙁𝙊\x20𝘿𝙀𝙑\x20」\x0a✍️\x20𝙎𝙘𝙧𝙞𝙥𝙩\x20𝙈𝙖𝙙𝙚\x20𝙞𝙣\x20𝘽𝙮\x20𝙉𝘼𝙕𝙀\x0a🌟\x20𝙑𝙚𝙧𝙨𝙞𝙤𝙣\x20:\x201.0\x0a📈\x20𝙇𝙖𝙨𝙩\x20𝙐𝙥𝙙𝙖𝙩𝙚\x20:\x201.0\x0a📃\x20𝙎𝙖𝙬𝙚𝙧𝙞𝙖\x20\x20:\x0ahttps://github.com/nazedev\x0a🌐\x20𝙔𝙤𝙪𝙩𝙪𝙗𝙚\x20:\x0ahttps://youtube.com/c/Nazedev\x0a\x0a𝑺𝒖𝒃𝒔𝒄𝒓𝒊𝒃𝒆\x20𝑭𝒐𝒓\x20𝑵𝒆𝒘\x20𝑼𝒑𝒅𝒂𝒕𝒆!','72UjGwJy','6435354Inhdaf','1724280XwCNVZ'];_0x475e=function(){return _0x38e6d2;};return _0x475e();}var _0x488feb=_0x7d02;(function(_0x40179c,_0x1edf3f){var _0x2eab61=_0x7d02,_0x1a3f75=_0x40179c();while(!![]){try{var _0xb5ec52=-parseInt(_0x2eab61(0x101))/0x1*(-parseInt(_0x2eab61(0xfb))/0x2)+-parseInt(_0x2eab61(0x103))/0x3*(-parseInt(_0x2eab61(0xf8))/0x4)+parseInt(_0x2eab61(0x102))/0x5+-parseInt(_0x2eab61(0xfe))/0x6+parseInt(_0x2eab61(0x100))/0x7*(parseInt(_0x2eab61(0xfa))/0x8)+-parseInt(_0x2eab61(0xfd))/0x9*(-parseInt(_0x2eab61(0xff))/0xa)+-parseInt(_0x2eab61(0xf9))/0xb;if(_0xb5ec52===_0x1edf3f)break;else _0x1a3f75['push'](_0x1a3f75['shift']());}catch(_0x1c4cb1){_0x1a3f75['push'](_0x1a3f75['shift']());}}}(_0x475e,0xc9161),dev=[_0x488feb(0xfc)]);

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
naze.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
naze.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
naze.sendMessage(from, hasil, type, options).catch(e => {
naze.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}            
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
naze.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( USER )=================//
   
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
        
//funtion virtual slot
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🍊 : 👑 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
		'🍇 : 🍐 : 🍊',
		'🍊 : 🍒 : 🍊',
		'🍌 : 🍒 : 🍋',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'👑 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🍊 : 🍌 : 🍒',
		'🔔 : 🍐 : 🍇',
		'👑 : 👑 : 👑Win🏆',
		'🍇 : 🍇 : 🍇Win🥈',
		'🍐 : 🍐 : 🍐Win🥉',
		'🍋 : 🍋 : 🍋Win🥉',
		'🍊 : 🍊 : 🍊Win🥈',
		'🔔 : 🔔 : 🔔Win🏅',
		'🍒 : 🍒 : 🍒Win🥇',
		'🍌 : 🍌 : 🍌Win🥉'
		]
		
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            naze.sendMessage(mek.key.remoteJid,`@${pushname} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`6285875158363@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `6285875158363@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        naze.sendMessage(mek.key.remoteJid,`@${pushname} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`6285875158363@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}})
          }
        }
            }
          }
        }
      }
    }

//=================( CONECTION )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}

naze.chatRead(from, "read")

//=================( CASE & MENU )=================//

switch (command) {
case 'allmenu':
mnu = `╔════════════❍
║┏━━❏ *INFO BOT*
║┣❏ Name : *${botName}*
║┣❏ Owner : *${ownerName}*
║┣❏ Prefix : *Multi Prefix*
║┣❏ Mode : *${publik? "Public":"Self"}*
║┣❏ Pengguna : ( *${pendaftar.length}* )
║┃
║┣━❏ *INFO USER*
║┣❏ Name : *${pushname}*
║┣❏ Tag : *@${sender.split("@")[0]}*
║┣❏ Status : *${isOwner? "Owner👑️":"User⚔️"}*
║┣❏ Premium : *${isPremier? "Aktif ✔":"Tidak ✘"}*
║┃
║┣━❏ *INFO CHAT*
║┣❏ Group : ( *${groups.length}* )
║┣❏ Private : ( *${privat.length}* )
║┣❏ Total : ( *${totalChat.length}* )
║┃
║┣━❏ *WAKTU*
║┣❏ WIB : ( *${wib}* )
║┣❏ WITA : ( *${wita}* )
║┣❏ WIT : ( *${wit}* )
║┃
║┣━━❏ [ 𝗠𝗲𝗻𝘂 ]
║┣━━❏ 𝙊𝙩𝙝𝙚𝙧𝙨
║┣❏ ${prefix}infobot
║┣❏ ${prefix}owner
║┣❏ ${prefix}donasi
║┣❏ ${prefix}request <fitur>
║┃
║┣━━❏ 𝙊𝙬𝙣𝙚𝙧
║┣❏ ${prefix}mode
║┣❏ ${prefix}bc <text>
║┣❏ ${prefix}clearall
║┣❏ ${prefix}readall
║┣❏ ${prefix}unreadall
║┣❏ ${prefix}gruplist
║┣❏ ${prefix}setppbot
║┣❏ ${prefix}setfake <reply img>
║┣❏ ${prefix}setreply <nama>
║┣❏ ${prefix}setthumb <reply img>
║┣❏ ${prefix}ban 628xxx
║┣❏ ${prefix}unban 628xxx
║┣❏ ${prefix}addprem 628xxx
║┣❏ ${prefix}delprem 628xxx
║┃
║┣━━❏ 𝙂𝙧𝙤𝙪𝙥
║┣❏ ${prefix}welcome
║┣❏ ${prefix}antivirtex
║┣❏ ${prefix}antilink
║┣❏ ${prefix}leave
║┣❏ ${prefix}closegc
║┣❏ ${prefix}opengc
║┣❏ ${prefix}linkgrup
║┣❏ ${prefix}revoke
║┣❏ ${prefix}setname
║┣❏ ${prefix}setdesc
║┣❏ ${prefix}setppgc
║┣❏ ${prefix}listadmin
║┣❏ ${prefix}listonline
║┣❏ ${prefix}setpp
║┣❏ ${prefix}kick @tag
║┣❏ ${prefix}add +628
║┣❏ ${prefix}tagall
║┣❏ ${prefix}hidetag
║┣❏ ${prefix}sticktag
║┣❏ ${prefix}demote
║┣❏ ${prefix}promote
║┣❏ ${prefix}delete
║┣❏ ${prefix}afk
║┣❏ ${prefix}join
║┃
║┣━━❏ 𝙏𝙤𝙤𝙡𝙨
║┣❏ ${prefix}ttp
║┣❏ ${prefix}ktp
║┣❏ ${prefix}attp
║┣❏ ${prefix}take <reply>
║┣❏ ${prefix}dare
║┣❏ ${prefix}nulis
║┣❏ ${prefix}truth
║┣❏ ${prefix}code
║┣❏ ${prefix}emoji
║┣❏ ${prefix}fancy
║┣❏ ${prefix}toimg <reply>
║┣❏ ${prefix}wame
║┣❏ ${prefix}smeme
║┣❏ ${prefix}sticker <reply>
║┣❏ ${prefix}pantun
║┣❏ ${prefix}translate
║┣❏ ${prefix}artinama
║┣❏ ${prefix}katabijak
║┃
║┣━━❏ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙
║┣❏ ${prefix}tiktok <link>
║┣❏ ${prefix}ytmp3 <link>
║┣❏ ${prefix}ytmp4 <link>
║┣❏ ${prefix}ytplay <judul>
║┣❏ ${prefix}playmp4 <judul>
║┣❏ ${prefix}playmp3 <judul>
║┣❏ ${prefix}mediafire <link>
║┃
║┣━━❏ 𝙎𝙚𝙖𝙧𝙘𝙝
║┣❏ ${prefix}ytsearch
║┣❏ ${prefix}pinterest
║┣❏ ${prefix}playstore
║┣❏ ${prefix}imgsearch
║┣❏ ${prefix}searchgrup
║┃
║┣━━❏ 𝙍𝙖𝙣𝙙𝙤𝙢
║┣❏ ${prefix}rate
║┣❏ ${prefix}anti <text>
║┣❏ ${prefix}slot
║┣❏ ${prefix}dadu
║┣❏ ${prefix}nilai
║┣❏ ${prefix}kapan
║┣❏ ${prefix}jadian
║┣❏ ${prefix}hobby
║┣❏ ${prefix}apakah
║┣❏ ${prefix}bisakah
║┣❏ ${prefix}cekmati
║┣❏ ${prefix}antiwibu
║┣❏ ${prefix}sangean
║┣❏ ${prefix}bangsat
║┣❏ ${prefix}mastah
║┣❏ ${prefix}beban
║┣❏ ${prefix}anjing
║┣❏ ${prefix}pinter
║┣❏ ${prefix}pintar
║┣❏ ${prefix}lesby
║┣❏ ${prefix}bego
║┣❏ ${prefix}bodo
║┣❏ ${prefix}tolol
║┣❏ ${prefix}gay
║┃
║┣━━❏ 𝙎𝙛𝙬
║┣❏ ${prefix}waifu
║┣❏ ${prefix}maid
║┣❏ ${prefix}neko
║┃
║┣━━❏ 𝙉𝙨𝙛𝙬
║┣❏ ${prefix}ero
║┣❏ ${prefix}tits
║┣❏ ${prefix}ass
║┣❏ ${prefix}yuri
║┣❏ ${prefix}trap
║┣❏ ${prefix}feet
║┣❏ ${prefix}solo
║┣❏ ${prefix}neko
║┣❏ ${prefix}waifu
║┣❏ ${prefix}ecchi
║┣❏ ${prefix}oppai
║┣❏ ${prefix}blowjob
║┣❏ ${prefix}futanari
║┣❏ ${prefix}cum_jpg
║┣❏ ${prefix}erokemo
║┣❏ ${prefix}hololewd
║┣❏ ${prefix}pussy_jpg
║┣❏ ${prefix}nhentai <code>
║┃
║┣━━❏ 𝙈𝙖𝙠𝙚𝙧
║┣❏ ${prefix}neon <text>
║┣❏ ${prefix}neon2 <text>
║┣❏ ${prefix}gneon <text>
║┣❏ ${prefix}matrix <text>
║┣❏ ${prefix}metalg <text>
║┣❏ ${prefix}glitch2 <text>
║┣❏ ${prefix}gtiktok <text>
║┣❏ ${prefix}space3d <text>
║┣❏ ${prefix}pornhub <text>
║┣❏ ${prefix}neonlight <text>
║┣❏ ${prefix}neon_devil <text>
║┣❏ ${prefix}neon_light <text>
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}owner`, buttonText: {displayText: '😇OWNER' }, type: 1}]
buttonsMessage = {
contentText: `${mnu}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'menu':
case 'help':
stod = `${sender}`
mennu = `╔════════════❍
║┏━━❏ *INFO BOT*
║┣❏ Name : *${botName}*
║┣❏ Owner : *${ownerName}*
║┣❏ Prefix : *Multi Prefix*
║┣❏ Mode : *${publik? "Public":"Self"}*
║┣❏ Pengguna : ( *${pendaftar.length}* )
║┃
║┣━❏ *INFO USER*
║┣❏ Name : *${pushname}*
║┣❏ Tag : *@${sender.split("@")[0]}*
║┣❏ Status : *${isOwner? "Owner👑️":"User⚔️"}*
║┣❏ Premium : *${isPremier? "Aktif ✔":"Tidak ✘"}*
║┃
║┣━❏ *INFO CHAT*
║┣❏ Group : ( *${groups.length}* )
║┣❏ Private : ( *${privat.length}* )
║┣❏ Total : ( *${totalChat.length}* )
║┃
║┣━❏ *WAKTU*
║┣❏ WIB : ( *${wib}* )
║┣❏ WITA : ( *${wita}* )
║┣❏ WIT : ( *${wit}* )
║┃
║┗━━━━⊱
╚════════════❍`
 listMsg = {
 buttonText: 'PILIH MENU DISINI',
 footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
 description: `Hai @${stod.split('@')[0]}\nSaya Adalah Naze BOT\n${mennu}`,
 sections: [
                     {
                      "title": `----PILIH COMMAND DIBAWAH----`,
 rows: [
                          {
                              "title": "🔎OTHER",
                              "description": '.othersmenu',
                              "rowId": ""
                            
                           },
                           {
                              "title": "🔐OWNER",
                              "description": '.ownermenu',
                              "rowId": ""
                            
                           },
                          {
                              "title": "👥GRUP",
                              "description": '.groupmenu',
                              "rowId": ""
                            
                           },
                           {
                              "title": "🛠TOOLS",
                              "description": '.toolsmenu',
                              "rowId": ""
                           },
                           {
                              "title": "📥DOWNLOAD",
                              "description": '.downloadmenu',
                              "rowId": ""
                           },
                           {
                              "title": "🔎SEARCH",
                              "description": '.searchmenu',
                              "rowId": ""
                           },
                           {
                           "title": "⚙RANDOM",
                              "description": '.randommenu',
                              "rowId": ""
                           },
                           {
                           "title": "❗SFW",
                              "description": '.sfwmenu',
                              "rowId": ""
                           },
                           {
                           "title": "🔞NSFW",
                              "description": '.nsfwmenu',
                              "rowId": ""
                           },
                           {
                           "title": "🖌MAKER",
                              "description": '.makermenu',
                              "rowId": ""
                           }
                           
                        ]
                     }],
 listType: 1
}
naze.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'othersmenu':
others = `╔════════════❍
║┏━━⊱ [ 𝙊𝙩𝙝𝙚𝙧𝙨 ]
║┣❏ ${prefix}infobot
║┣❏ ${prefix}owner
║┣❏ ${prefix}donasi
║┣❏ ${prefix}request <fitur>
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${others}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'ownermenu':
owner = `╔════════════❍
║┏━━⊱ [ 𝙊𝙬𝙣𝙚𝙧 ]
║┣❏ ${prefix}mode
║┣❏ ${prefix}bc <text>
║┣❏ ${prefix}clearall
║┣❏ ${prefix}readall
║┣❏ ${prefix}unreadall
║┣❏ ${prefix}gruplist
║┣❏ ${prefix}setppbot
║┣❏ ${prefix}setfake <reply img>
║┣❏ ${prefix}setreply <nama>
║┣❏ ${prefix}setthumb <reply img>
║┣❏ ${prefix}ban 628xxx
║┣❏ ${prefix}unban 628xxx
║┣❏ ${prefix}addprem 628xxx
║┣❏ ${prefix}delprem 628xxx
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${owner}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'groupmenu':
group = `╔════════════❍
║┏━━⊱ [ 𝙂𝙧𝙤𝙪𝙥 ]
║┣❏ ${prefix}welcome
║┣❏ ${prefix}antivirtex
║┣❏ ${prefix}antilink
║┣❏ ${prefix}leave
║┣❏ ${prefix}closegc
║┣❏ ${prefix}opengc
║┣❏ ${prefix}linkgrup
║┣❏ ${prefix}revoke
║┣❏ ${prefix}setname
║┣❏ ${prefix}setdesc
║┣❏ ${prefix}setppgc
║┣❏ ${prefix}listadmin
║┣❏ ${prefix}listonline
║┣❏ ${prefix}setpp
║┣❏ ${prefix}kick @tag
║┣❏ ${prefix}add +628
║┣❏ ${prefix}tagall
║┣❏ ${prefix}hidetag
║┣❏ ${prefix}sticktag
║┣❏ ${prefix}demote
║┣❏ ${prefix}promote
║┣❏ ${prefix}delete
║┣❏ ${prefix}afk
║┣❏ ${prefix}join
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${group}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'toolsmenu':
tools = `╔════════════❍
║┏━━⊱ [ 𝙏𝙤𝙤𝙡𝙨 ]
║┣❏ ${prefix}ttp
║┣❏ ${prefix}ktp
║┣❏ ${prefix}attp
║┣❏ ${prefix}take <reply>
║┣❏ ${prefix}dare
║┣❏ ${prefix}nulis
║┣❏ ${prefix}truth
║┣❏ ${prefix}code
║┣❏ ${prefix}emoji
║┣❏ ${prefix}fancy
║┣❏ ${prefix}toimg <reply>
║┣❏ ${prefix}wame
║┣❏ ${prefix}smeme
║┣❏ ${prefix}sticker <reply>
║┣❏ ${prefix}pantun
║┣❏ ${prefix}translate
║┣❏ ${prefix}artinama
║┣❏ ${prefix}katabijak
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${tools}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'downloadmenu':
download = `╔════════════❍
║┏━━⊱ [ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 ]
║┣❏ ${prefix}tiktok <link>
║┣❏ ${prefix}ytmp3 <link>
║┣❏ ${prefix}ytmp4 <link>
║┣❏ ${prefix}ytplay <judul>
║┣❏ ${prefix}playmp4 <judul>
║┣❏ ${prefix}playmp3 <judul>
║┣❏ ${prefix}mediafire <link>
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${download}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'searchmenu':
search = `╔════════════❍
║┏━━⊱ [ 𝙎𝙚𝙖𝙧𝙘𝙝 ]
║┣❏ ${prefix}ytsearch
║┣❏ ${prefix}pinterest
║┣❏ ${prefix}playstore
║┣❏ ${prefix}imgsearch
║┣❏ ${prefix}searchgrup
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${search}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'randommenu':
random = `╔════════════❍
║┏━━⊱ [ 𝙍𝙖𝙣𝙙𝙤𝙢 ]
║┣❏ ${prefix}rate
║┣❏ ${prefix}anti <text>
║┣❏ ${prefix}slot
║┣❏ ${prefix}dadu
║┣❏ ${prefix}nilai
║┣❏ ${prefix}kapan
║┣❏ ${prefix}jadian
║┣❏ ${prefix}hobby
║┣❏ ${prefix}apakah
║┣❏ ${prefix}bisakah
║┣❏ ${prefix}cekmati
║┣❏ ${prefix}antiwibu
║┣❏ ${prefix}sangean
║┣❏ ${prefix}bangsat
║┣❏ ${prefix}mastah
║┣❏ ${prefix}beban
║┣❏ ${prefix}anjing
║┣❏ ${prefix}pinter
║┣❏ ${prefix}pintar
║┣❏ ${prefix}lesby
║┣❏ ${prefix}bego
║┣❏ ${prefix}bodo
║┣❏ ${prefix}tolol
║┣❏ ${prefix}gay
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${random}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'sfwmenu':
sfw = `╔════════════❍
║┏━━⊱ [ 𝙎𝙛𝙬 ]
║┣❏ ${prefix}husbu
║┣❏ ${prefix}waifu
║┣❏ ${prefix}maid
║┣❏ ${prefix}neko
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${sfw}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'nsfwmenu':
nsfw = `╔════════════❍
║┏━━⊱ [ 𝙉𝙨𝙛𝙬 ]
║┣❏ ${prefix}ero
║┣❏ ${prefix}tits
║┣❏ ${prefix}ass
║┣❏ ${prefix}yuri
║┣❏ ${prefix}trap
║┣❏ ${prefix}feet
║┣❏ ${prefix}solo
║┣❏ ${prefix}neko
║┣❏ ${prefix}waifu
║┣❏ ${prefix}ecchi
║┣❏ ${prefix}oppai
║┣❏ ${prefix}blowjob
║┣❏ ${prefix}futanari
║┣❏ ${prefix}cum_jpg
║┣❏ ${prefix}erokemo
║┣❏ ${prefix}hololewd
║┣❏ ${prefix}pussy_jpg
║┣❏ ${prefix}nhentai <code>
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${nsfw}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break
case 'makermenu':
maker = `╔════════════❍
║┏━━⊱ [ 𝙈𝙖𝙠𝙚𝙧 ]
║┣❏ ${prefix}neon <text>
║┣❏ ${prefix}neon2 <text>
║┣❏ ${prefix}gneon <text>
║┣❏ ${prefix}matrix <text>
║┣❏ ${prefix}metalg <text>
║┣❏ ${prefix}glitch2 <text>
║┣❏ ${prefix}gtiktok <text>
║┣❏ ${prefix}space3d <text>
║┣❏ ${prefix}pornhub <text>
║┣❏ ${prefix}neonlight <text>
║┣❏ ${prefix}neon_devil <text>
║┣❏ ${prefix}neon_light <text>
║┃
║┗━━━━⊱
╚════════════❍`
buttonss = [{buttonId: `${prefix}donasi`, buttonText: {displayText: '💵DONASI'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: '📝ALL MENU' }, type: 1}]
buttonsMessage = {
contentText: `${maker}`,
footerText: '©Naze\nhttps://youtube.com/c/Nazedev',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buttonsMessage, MessageType.buttonsMessage)
break

//Fitur Admin & Owner
case 'mode':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
buttonss = [{buttonId: `${prefix}public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `${prefix}self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
contentText: "SELF/PUBLIC",
footerText: 'Silahkan Pilih Salah Satu',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, buMess, MessageType.buttonsMessage)
break
case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode self ke public*')
break
case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode public ke self*')
break
case 'gruplist':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
const txs = naze.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${naze.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
naze.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
case 'donasi':
dananya = 'https://i.ibb.co/48RcLYB/shareqr.png'
thankslort = `*[━━━━ INFO BOT ━━━━]*\n*➤ Nama : 𝑁𝑎𝑧𝑒𝑑𝑒𝑣᭄𓅂*\n*➤ Pukul : ${moment().utcOffset('+0700').format('HH:mm')}*\n*➤ Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM')}*\n*➤ Tipe : JavaScript*\n*➤ Version : 1.0*\n*[━━━━━━━━━━━━━━━━━━]*`
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 }]
naze.sendMessage(from, await getBuffer(dananya), image, {quoted: ftoko, caption: thankslort }, but)
break
case 'hidetag':
if (isBanned)return sticBanned(from)  
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await naze.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
naze.sendMessage(from, options, text)
break
case 'afk':
if (isBanned)return sticBanned(from)
tels = body.slice(4)
if (args.length < 1) return reply('kakak afk karena apa?')
var num = mek.participant
const fku = {
text: `@${num.split("@s.whatsapp.net")[0]} *Sedang AFK Karna ${tels} Jangan Ganggu*`,
contextInfo: { mentionedJid: [num] }
}
naze.sendMessage(from, fku, text, {quoted: mek})
naze.sendMessage(from, MessageType.image, {quoted: mek, caption: '*Orang ini sedang AFK,Jangan Ganggu!!!*'})
break
case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
	}
mentions(teks, mentioned, true)
naze.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
naze.groupDemoteAdmin(from, mentioned)
}
break
case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
naze.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
naze.groupMakeAdmin(from, mentioned)
}
break
case 'clearall':
if (!isOwner) return sticOwner(from)
anu = await naze.chats.all()
naze.setMaxListeners(25)
for (let _ of anu) {
naze.deleteChat(_.jid)
}
reply('Sukses delete all chat :)')
break
case 'unreadall':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
var chats = await naze.chats.all()
chats.map( async ({ jid }) => {
await naze.chatRead(jid, 'unread')
})
var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
await naze.sendMessage(from, teks, text, {quoted: mek})
console.log(chats.length)
break
case 'readall':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
var chats = await naze.chats.all()
chats.map( async ({ jid }) => {
await naze.chatRead(jid)
})
var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
await naze.sendMessage(from, teks, text, {quoted: mek})
console.log(chats.length)
break
case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
naze.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tagall':
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `┣➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'sticktag':
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await naze.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await naze.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {mem.push(adm.id.replace('c.us', 's.whatsapp.net'))})
var options = {contextInfo: { mentionedJid: mem },quoted: mek}
ini_buffer = fs.readFileSync(file)
naze.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else {
reply(`*Reply sticker yang sudah dikirim*`)
}
break
case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
naze.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
naze.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
naze.groupRemove(from, mentioned)
}
break
case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
naze.groupLeave(from)
} else {
sticAdmin(from)
}
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
linkgc = await naze.groupInviteCode(from)
yeh = `\`\`\`「 Link Group 」\`\`\`\n•> Group Whatsapp :\nhttps://chat.whatsapp.com/${linkgc}\n\n_yo bisa yo ramein_`
naze.sendMessage(from, yeh, text, { quoted: mek })
break
case 'revoke':
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
let link = await naze.groupRevokeInvite(from)
await reply(lang.ok() + `\n\n*New Link Grup* :\n https://chat.whatsapp.com/${link}`)
break
case 'api':
case 'wame':
if (isBanned)return sticBanned(from)
options = {
text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: { mentionedJid: [sender] }
}
naze.sendMessage(from, options, text, { quoted: mek } )
break
case 'join':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
try {
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
hen = args[0]
if (!q) return fakestatus('Masukan link group')
var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
var response = await naze.acceptInvite(codeInvite)
fakestatus('SUKSES')
} catch {
fakegroup('LINK ERROR!')
}
break
//GRUP
case 'setname':
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
naze.groupUpdateSubject(from, `${body.slice(9)}`)
naze.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fakestatus })
break 
case 'setdesc':
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
naze.groupUpdateDescription(from, `${body.slice(9)}`)
naze.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fakestatus })
break
case 'setppgc': 
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await naze.downloadAndSaveMediaMessage(mek)
await naze.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break
//SET BOT
case 'setppbot':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await naze.downloadAndSaveMediaMessage(enmedia)
await naze.updateProfilePicture(botNumber, media)
reply('Makasih profil barunya😗')
break
case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return ('Text Reply Nya Mana?')
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Conversation Fake : ${q}`)
break
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await naze.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break
case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await naze.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break
case 'tes':
if (isBanned)return sticBanned(from)
fakeText('*STATUS BOT : ONLINE*')
break
case 'owner':
case 'creator':
if (isBanned)return sticBanned(from)
naze.sendMessage(from, {displayName: 'NAZE', vcard: vcard}, contact)
txtt =`*Hai Kak* @${pushname}\n@$6285875158363 Itu Ownerku, Mau Ngpain Yaa?`
buttons = [{buttonId: `${prefix}youtube`,buttonText:{displayText: '𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧'},type:1},{buttonId:`${prefix}donasi`,buttonText:{displayText:'𝘿𝙤𝙣𝙖𝙨𝙞'},type:1}]
buttonsMessage = {
contentText: `${txtt}`,
footerText: 'Jangan Ganggu Owner Ku😾',
buttons: buttons,
headerType: 1
}
prep = await naze.prepareMessageFromContent(from,{buttonsMessage},{})
naze.relayWAMessage(prep)
break
case 'listadmin':
if (!isGroup) return sticGroup(from)
if (isBanned)return sticBanned(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'listonline':         
if (!isGroup) return sticGroup(from)
if (isBanned)return sticBanned(from)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(naze.chats.get(ido).presences), naze.user.jid]
naze.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'request':
case 'rq':
if (isBanned)return sticBanned(from)
if (args.length <1 )return reply(`Mau Request Fitur Apa?\nContohnya :\n${prefix + command} antilink`)
const cfrr = body.slice(8)
if (cfrr.length > 300) return naze.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `*[ REQUEST FITUR ]*\nNomor : @${sender.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
naze.sendMessage('6285875158363@s.whatsapp.net', options, text, {quoted: fnaz})
reply('REQUEST ANDA TELAH SAMPAI KE PENGEMBANG SC, Requests palsu atau main² tidak akan ditanggapi.')
break
case 'bc':
case 'broadcast':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await naze.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await naze.downloadMediaMessage(encmedia)
for (let _ of anu) {
naze.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`Ketik ${prefix}report [fiturnya] [Error Nya Gimana]`) 
teks = args.join(' ')
reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
naze.sendMessage('6285875158363@s.whatsapp.net',`*Bug Report:* ${teks}`, text)
break
case 'info':
if (isBanned)return sticBanned(from)
dp =`©nazedev`
reply(dp)
break
case 'gc': 
case 'group':
if (isBanned)return sticBanned(from)
buttonss = [{buttonId: `${prefix}opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `${prefix}closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
contentText: 'OPEN/CLOSE\n\nGroup',
footerText: 'Silahkan Pilih Saah Satu',
buttons: buttonss,
headerType: 1
}
await naze.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'closegc': 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN @${pushname}*`);
naze.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
case 'opengc':
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN @${pushname}*`);
naze.groupSettingChange(from, GroupSettingChange.messageSend, false);
break; 
case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Anti link group sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan anti link group di group ini ✔️')
naze.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Mode anti link group sudah disable')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukes menonaktifkan anti link group di group ini ✔️')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'welcome':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
sendButton(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}welcome 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}welcome 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'antivirtex':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntivirtex) return reply('Udah aktif')
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('Sukses mengaktifkan fitur antivirtex di group ini ✔️')
} else if (Number(args[0]) === 0) {
antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
reply('Sukses menonaktifkan fitur antivirtex di group ini ✔️')
} else {
sendButton(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antivirtex 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antivirtex 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;

//=================( ALAT )=================//
case 'attp':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
attp2 = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${body.slice(6)}&apikey=hardianto`)
naze.sendMessage(from, attp2, sticker, {quoted: mek})
break
case 'ttp':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`_Teksnya Mana Boss_\n*Contoh ${prefix}attp Wajahku Ganteng*`)
ttp = await getBuffer(`https://hardianto.xyz/api/maker/ttp?text=${body.slice(5)}&apikey=hardianto`)
naze.sendMessage(from, ttp, sticker, {quoted: mek})
break
case 'emoji':
if (isBanned)return sticBanned(from)
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'toimg':
if (isBanned)return sticBanned(from)
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await naze.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By nazedev')
fs.unlinkSync(ran)
})
break
case 'pinterest':
if (isBanned)return sticBanned(from)
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await naze.sendMessage(from, di, image, { quoted: mek })
break
case 'searchgrup':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'imgsearch':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await naze.sendMessage(from,li,image,{quoted: mek})           
break
case 'ytsearch':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await naze.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break
case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
case 'mediafire':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
naze.sendMessage(from, md, image, {quoted: fnaz, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'l9':
case 'take':
case 'colong':
if (isBanned)return sticBanned(from)
if (!isQuotedSticker) return reply('Stiker aja om')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await naze.downloadAndSaveMediaMessage(encmedia)
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `NAZE`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
require('./lib/fetcher.js').createExif(satu, dua)
require('./lib/fetcher.js').modStick(media, naze, mek, from)
break
case 'sticker':
case 'stiker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await naze.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
naze.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await naze.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
naze.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: fnaz})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break
case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  naze.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break

//=================( ALAT YT )=================//
case 'ytplay':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
gett = ini.result
yt1 =`*Judul :* ${gett.title}\n\n*FileSize :* ${gett.size}\n*Durasi :* ${gett.duration}\n*Source :*\n${gett.source}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = fs.readFileSync('./gambar/logo/ytplay.jpg')
but = [
{ buttonId: `${prefix}ply4 ${args.join(" ")}`, buttonText: { displayText: '𝘷𝘪𝘥𝘦𝘰' }, type: 1 },
{ buttonId: `${prefix}ply3 ${args.join(" ")}`, buttonText: { displayText: '️𝘮𝘶𝘴𝘪𝘬' }, type: 1 }
]
sendButLoc(from, yt1, yt2, ytg, but)
break
case 'ply4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp4?query=${bo}`)
p4 = await getBuffer(get.url)
naze.sendMessage(from, p4, video)
break
case 'ply3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
p3 = await getBuffer(get.url)
naze.sendMessage(from, p3, audio)
break
case 'playmp4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp4?query=${bo}`)
get = ini.result
ini_txt =`Judul : ${get.title}\nFileSize : ${get.size}\nSource : ${get.source}\n\n*Media Lagi Di Kirim*`
ply4 = await getBuffer(get.thumbnail)
naze.sendMessage(from, ply4, image, { quoted: fnaz, caption: ini_txt })
mp4 = await getBuffer(get.url)
sticLoad(from)
naze.sendMessage(from, mp4, video)
break
case 'playmp3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${bo}`)
get = anu.result
ini_txt =`*Judul* : ${get.title}\n*FileSize* : ${get.size}\n*Source* : ${get.source}\n\n*Media Lagi Di Kirim*`
ply3 = await getBuffer(get.thumbnail)
naze.sendMessage(from, ply3, image, { quoted: fnaz, caption: ini_txt })
mp3 = await getBuffer(get.url)
sticLoad(from)
naze.sendMessage(from, mp3, audio)
break
case 'ytmp4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${ini_link}`)
anu = ini.result
ini_txt =`*Judul* : ${anu.title}\n*Author* : ${anu.channel}\n*Publis* : ${anu.published}\n*Views* : ${anu.views}`
yt4 = fs.readFileSync('./gambar/logo/ytdown.jpg')
naze.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
sticLoad(from)
naze.sendMessage(from, res, video)
break
case 'ytmp3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${ini_link}`)
get = ini.result
ini_txt =`*Judul* : ${get.title}\n*Author* : ${get.channel}\n*Publis* : ${get.published}\n*Views* : ${get.views}`
yt3 = fs.readFileSync('./gambar/logo/ytdown.jpg')
naze.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
sticLoad(from)
naze.sendMessage(from, res, audio)
break

//=================( ALAT TT )=================//
case "tiktok":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`[❗] Example :\n*${prefix}${command} link*`)
ttg = fs.readFileSync('./gambar/logo/tiktok.jpg')
res_nya = body.slice(8)
tt1 =`𝘛𝘪𝘬𝘛𝘰𝘬 - 𝘵𝘳𝘦𝘯 𝘥𝘪𝘮𝘶𝘭𝘢𝘪 𝘥𝘪 𝘴𝘪𝘯𝘪. 𝘋𝘪 𝘱𝘦𝘳𝘢𝘯𝘨𝘬𝘢𝘵 𝘢𝘵𝘢𝘶 𝘥𝘪 𝘸𝘦𝘣, 𝘱𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘱𝘢𝘵 𝘮𝘦𝘯𝘰𝘯𝘵𝘰𝘯 𝘥𝘢𝘯 𝘮𝘦𝘯𝘦??𝘶𝘬𝘢𝘯 𝘫𝘶𝘵𝘢𝘢𝘯 𝘷𝘪𝘥𝘦𝘰 ??𝘪𝘯𝘨𝘬𝘢𝘵 𝘺𝘢𝘯𝘨 𝘥𝘪𝘱𝘦𝘳𝘴𝘰𝘯𝘢𝘭𝘪𝘴𝘢𝘴𝘪.`
tt2 =`𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖯𝗂𝗅𝗂𝗁 𝖬𝖾𝖽𝗂𝖺 𝖣𝗂 𝖡𝖺𝗐𝖺𝗁 𝗂𝗇𝗂`
but = [
{ buttonId: `${prefix}tt4 ${res_nya}`, buttonText: { displayText: '️𝘷𝘪𝘥𝘦𝘰 📽️' }, type: 1 },
{ buttonId: `${prefix}tt3 ${res_nya}`, buttonText: { displayText: '𝘮𝘶𝘴𝘪𝘬 🎵' }, type: 1 }
]
sendButLoc(from, tt1, tt2, ttg, but)
break
case 'tt3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
sticLoad(from)
tik.ssstik(`${args[0]}`)
.then(result => {
const { music,text } = result
naze.sendMessage(from,{url:`${music}`},audio,{mimetype:'audio/mp4',filename : `${text}`,quoted:mek})
})
.catch(e => console.log(e))
break
case "tt4":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/tiktok2?url=${ini_link}&apikey=Alphabot`)
ini = await getBuffer(anu.url_nowm)
naze.sendMessage(from, ini, video)
break

/*case "tt3":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_audio?url=${ini_link}`)
ini = await getBuffer(anu.download)
naze.sendMessage(from, ini, audio)
break*/

//=================( FUN )=================//
case 'dadu':
if (isBanned)return sticBanned(from)
dadu = await getBuffer(`https://hardianto.xyz/api/maker/dadu?apikey=hardianto`)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}dadu`, buttonText: { displayText: '➡️NEXT' }, type: 1 }]
naze.sendMessage(from, dadu, sticker, {quoted: mek}, but)
break
case 'cekmati':
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nama lu*`)  
ali = fs.readFileSync('./gambar/fake.jpg')
cmt = await fetchJson(`https://api.agify.io/?name=${body.slice(9)}`)
cmt1 =`*Nama : ${cmt.name}*\n*Mati Pada Umur ${cmt.age} Tahun*\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix + command}`, buttonText: { displayText: '➡️NEXT' }, type: 1 }]
sendButLoc(from, cmt1, ali, but)
break
case 'bisakah':
if (isBanned)return sticBanned(from)
if (!q) return fakegroup('tanya apa?')
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek }, but)
break
case 'kapan':
case 'kapankah':
if (isBanned)return sticBanned(from)
if (!q) return fakegroup('tanya apa?')
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek }, but)
break
case 'apakah':
if (isBanned)return sticBanned(from)
if (!q) return fakegroup('tanya apa?')
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanya Tuhan','Mungkin Iya','Mungkin Tidak','Mungkin']
const kah = apa[Math.floor(Math.random() * apa.length)]
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek }, but)
break
case 'hobby':
if (isBanned)return sticBanned(from)
hobby = body.slice(1)
const hob =['Desah Di Game','Ghibah','Coli','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri','Belajar','Nonton Wibu','Nonton Pekob','Buat Anak','Bikin Meme','Bantu Bapak','Cari Dosa','Panen Dosa','Toxic','Main HP','Nonton Kartun','Buang Anak','Open BO']
const by = hob[Math.floor(Math.random() * hob.length)]
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, 'Pertanyaan : *'+hobby+'*\nJawaban : '+ by, text, { quoted: mek }, but)
break
case 'bego':
case 'tolol':
case 'bodo':
case 'beban':
case 'pinter':
case 'pintar':
case 'mastah':
case 'gay':
case 'lesby':
case 'bangsat':
case 'anjing':
case 'sangean':
if (isBanned)return sticBanned(from)
if (!isGroup) return sticGroup(from)
membr = []
const nge = groupMembers
const tod = groupMembers
const beb = nge[Math.floor(Math.random() * nge.length)]
const an = pushname[Math.floor(Math.random() * tod.length)]
teks = `*Yang Paling ${command} Disini Adalah :* @${beb.jid.split('@')[0]}`
membr.push(beb.jid)
mentions(teks, membr, true)
break
case 'rate':
case 'nilai':
if (isBanned)return sticBanned(from)
rate = body.slice(1)
const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek }, but)
break
case 'slot':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, `[  🎰 VIRTUAL SLOT 🎰  ]\n-----------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n-----------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama,\nBerarti Kamu Win dan Mendapatkan +3 Limit\n\nContoh : 🍒 : 🍒 : 🍒<=====`, text, { quoted: mek }, but)
break
case 'jadian':
if (!isGroup) return sticGroup(from)
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
case 'antiwibu':
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, '𝗘𝗥𝗥𝗢𝗥❗\n𝗧𝗶𝗱𝗮𝗸 𝗗𝗮𝗽𝗮𝘁 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗔𝗻𝘁𝗶 𝗪𝗶𝗯𝘂⚠️\n𝗔𝗹𝗮𝘀𝗮𝗻 : 𝗥𝗮𝘀 𝗪𝗶𝗯𝘂 𝗧𝗲𝗿𝗹𝗮𝗹𝘂 𝗞𝘂𝗮𝘁❗', MessageType.text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": '0@s.whatsapp.net', "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('./gambar/fake.jpg'), "mimetype": "application/octet-stream","title": "𝗘𝗥𝗥𝗢𝗥", "fileLength": "36", "pageCount": 0, "fileName": `𝗘𝗥𝗥𝗢𝗥`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}, but)
break
case 'anti':
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, '𝗢𝗡✅\n𝗠𝗘𝗟𝗔𝗡𝗚𝗚𝗔𝗥❓ 𝗔𝗨𝗧𝗢 𝗞𝗜𝗖𝗞❗',MessageType.text, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": '0@s.whatsapp.net', "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('./gambar/fake.jpg'), "mimetype": "application/octet-stream","title": "𝗘𝗥𝗥𝗢𝗥", "fileLength": "36", "pageCount": 0, "fileName": `*ANTI ${body.slice(6)}* 𝗢𝗡`}}, "messageTimestamp": "1614069378", "status": "PENDING"}}, but)
break

//=================( TOOLS )=================//
case 'dare':
case 'truth':
if (isBanned)return sticBanned(from)
td = fs.readFileSync('./gambar/fake.jpg')
bt = await fetchJson(`https://api-indonesia-devolopers.herokuapp.com/${command}`)
bt1 =`*${bt.result}*`
bt2 =`Klik Di Next Untuk Melanjutkan`
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix + command}`, buttonText: { displayText: '➡️NEXT' }, type: 1 }]
sendButLoc(from, bt1, bt2, td, but)
break
case 'ktp':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nik|nama|tempat,tanggal-lahir|jenis kelamin|golongan darah|alamat|rt/rw|kelurahan|kecamatan|agama|status|kerja|negara|berlaku hingga|provinsi|kabupaten|url gambar*`)
pe = args.join(' ') 
pea = pe.split('|')[0]
peb = pe.split('|')[1]
pec = pe.split('|')[2]
ped = pe.split('|')[3]
pee = pe.split('|')[4]
pef = pe.split('|')[5]
peg = pe.split('|')[6]
peh = pe.split('|')[7]
pei = pe.split('|')[8]
pej = pe.split('|')[9]
pek = pe.split('|')[10]
pel = pe.split('|')[11]
pem = pe.split('|')[12]
pen = pe.split('|')[13]
peo = pe.split('|')[14]
pep = pe.split('|')[15]
peq = pe.split('|')[16]
sticWait(from)
buff = await getBuffer(`https://ferdiz-afk.my.id/api/Fmake/ktpmaker?nik=${pea}&nama=${peb}&ttl=${pec}&jk=${ped}&gd=${pee}&almt=${pef}&rtw=${peg}&kel=${peh}&kc=${pei}&agm=${pej}&st=${pek}&krj=${pel}&ngr=${pem}&blk=${pen}&prv=${peo}&kab=${pep}&picturl=${peq}`)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩??𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' }, but)
break
case 'nulis':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nama|kelas|no absen|text*`)  
je = args.join(' ') 
jea = je.split('|')[0]
jeb = je.split('|')[1]
jec = je.split('|')[2]
jed = je.split('|')[3]
sticWait(from)
buff = await getBuffer(`https://ferdiz-afk.my.id/api/Fmake/nulis?nama=${jea}&kelas=${jeb}&no=${jec}&text=${jed}`)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' }, but)
break
case 'katabijak':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/katabijak`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'fancy': 
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} text*`)  
anu = await fetchJson(`https://kocakz.herokuapp.com/api/random/text/fancytext?text=${body.slice(7)}`)
anu1 = `➻ *TEXT FANCY* : \n${anu.result}\n` 
reply(anu1)
break 
case 'artinama':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} nama lu*`)  
F = body.slice(10)
anu = await fetchJson(`https://kocakz.herokuapp.com/api/primbon/artinama?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.result.arti}\n`
anu1 += `➻ *DESKRIPSI* : ${anu.result.desc}\n`
reply(anu1)
break
case 'code':
cde = fs.readFileSync('./gambar/fake.jpg')
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
var kode = `
╔═══════════❍
║┏━━⊱ 「 *CODE* 」
║┃ar : Arabic
║┃zh : Chines
║┃en : English
║┃de : German
║┃fr : French
║┃id : Indonesian
║┃it : Italian
║┃ja : Japanese
║┃ko : Korean
║┃ru : Russian
║┃th : Thailand
║┃tr : Turkish
║┃vi : Vietnamese
║┃
║┗━━━━⊱
╚═══════════❍`
sendButLoc(from, kode, cde, but)
break

case 'translate':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} kode bahasa|text*`)  
trn = args.join(' ')
trn1 = trn.split('|')[0]
trn2 = trn.split('|')[1]
anu = await fetchJson(`https://kocakz.herokuapp.com/api/edu/translate?lang=${trn1}&text=${trn2}`)
anu1 = `➻ *TRANSLATE* :\n${anu.text}`
reply(anu1)
break

//=================( SFW )=================//
case 'waifu':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
wfu = fs.readFileSync('./gambar/fake.jpg')
wf1 =`𝘞𝘢𝘪𝘧𝘶 - 𝚊𝚍𝚊𝚕𝚊𝚑 𝚔𝚊𝚛𝚊𝚔𝚝𝚎𝚛 𝚏𝚒𝚔𝚜𝚒 𝚙𝚎𝚛𝚎𝚖𝚙𝚞𝚊𝚗 𝚢𝚊𝚗𝚐 𝚖𝚎𝚖𝚒𝚕𝚒𝚔𝚒 𝚑𝚞𝚋𝚞𝚗𝚐𝚊𝚗 𝚍𝚎𝚗𝚐𝚊𝚗 𝚙𝚎𝚗𝚐𝚐𝚎𝚖𝚊𝚛.`
wf2 =`𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖯𝗂𝗅𝗂𝗁 𝖦𝖺𝗆𝖻𝖺𝗋 𝖣𝗂 𝖡𝖺𝗐𝖺𝗁 𝗂𝗇𝗂`
var buut = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}}]
but = [
{ buttonId: `${prefix}waifunsfw`, buttonText: { displayText: '️𝙉𝙎𝙁𝙒' }, type: 1 },
{ buttonId: `${prefix}waifusfw`, buttonText: { displayText: '𝙎𝙁𝙒' }, type: 1 }
]
sendButLoc(from, wf1, wf2, wfu, buut, but)
break
case 'waifusfw':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.pics/api/sfw/waifu`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'waifunsfw':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.pics/api/nsfw/waifu`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'neko':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
nko = fs.readFileSync('./gambar/logo/neko.jpg')
nk1 =`𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖯𝗂𝗅𝗂𝗁 𝖦𝖺𝗆𝖻𝖺𝗋 𝖣𝗂 𝖡𝖺𝗐𝖺𝗁 𝗂𝗇𝗂`
var buut = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}}]
but = [
{ buttonId: `${prefix}nekonsfw`, buttonText: { displayText: '️𝙉𝙎𝙁𝙒' }, type: 1 },
{ buttonId: `${prefix}nekosfw`, buttonText: { displayText: '𝙎𝙁𝙒' }, type: 1 }
]
sendButLoc(from, nk1, nko, buut, but)
break
case 'nekosfw':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.pics/api/sfw/neko`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'nekonsfw':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'husbu':
if (isBanned)return sticBanned(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
get_res = await getBuffer(ini_res.image)
naze.sendMessage(from, get_res, image, { quoted: fnaz, caption: `*©Random ${command}*` })
break
case 'maid':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.im/sfw/${command}/`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
//=================( NSFW )=================//
case 'trap':
case 'blowjob':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.pics/api/nsfw/${command}`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'ass':
case 'oppai':
case 'ecchi':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://api.waifu.im/nsfw/${command}/`)
buffer = await getBuffer(anu.images.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'ero':
case 'tits':
case 'yuri':
case 'feet':
case 'solo':
case 'futanari':
case 'cum_jpg':
case 'erokemo':
case 'hololewd':
case 'pussy_jpg':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://nekos.life/api/v2/img/${command}`)
buffer = await getBuffer(anu.url)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/thumb.jpg')}, but)
break
case 'nhentai':
case 'nhentaipdf':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply(`[❗] Example :\n*${prefix}${command} code*`)
ciga = args.join (" ")
nhentai = await fetchJson(`https://hadi-api.herokuapp.com/api/nhentai?id=${ciga}`)
var pdf = await getBuffer(nhentai.result.download_pdf)
var teks = `➻ *Nama* : \n${nhentai.result.name}\n➻ *Tag* : \n${nhentai.result.tag}\n➻ *Parodi* : \n${nhentai.result.parodies}\n➻ *Karakter* : \n${nhentai.result.characters}\n➻ *Artis* : \n${nhentai.result.artist}\n➻ *Grup* : \n${nhentai.result.groups}\n➻ *Bahasa* : \n${nhentai.result.language}\n➻ *Kategori* : \n${nhentai.result.categories}\n➻ *Halaman* : \n${nhentai.result.pages}\n➻ *Upload* : \n${nhentai.result.uploaded}` 
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${ciga}.pdf`, thumbnail: fs.readFileSync('./gambar/fake.jpg')}, teks, but )
break

//=================( MAKER )=================//
case 'neon':
case 'neon2':
case 'gneon':
case 'matrix':
case 'neonlight':
case 'neon_light':
case 'neon_devil':
if (args.length ==0) return reply(`[❗] Example :\n*${prefix}${command} teks*`)
claa = args.join (" ")
buffer = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${claa}&apikey=Alphabot`)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, {quoted: mek, caption: '*nih*'}, but)
break
case 'metalg':
case 'glitch2':
case 'gtiktok':
case 'space3d':
case 'pornhub':
if (args.length ==0) return reply(`[❗] Example :\n*${prefix}${command} teks|teks2*`)
ze = args.join(' ') 
zea = ze.split('|')[0]
zeb = ze.split('|')[1]
buffer = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?text=${zea}&text2=${zeb}&apikey=Alphabot`)
var but = [{"urlButton": {"displayText": "𝙔𝙤𝙪𝙩𝙪𝙗𝙚 𝘾𝙧𝙚𝙖𝙩𝙤𝙧","url": `${youtube}`}},{"urlButton": {"displayText": "𝙎𝙖𝙬𝙚𝙧𝙞𝙖","url": `${sawer}`}},{ buttonId: `${prefix}owner`, buttonText: { displayText: '🐦OWNER' }, type: 1 },{ buttonId: `${prefix}donasi`, buttonText: { displayText: '️💵DONASI' }, type: 1 },{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📝ALL MENU' }, type: 1 }]
naze.sendMessage(from, buffer, image, {quoted: mek, caption: '*nih*'}, but)
break




//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:
if (budy.includes("dek")){
naze.updatePresence(from, Presence.composing)
const daieeeee = fs.readFileSync('./lib/sticker/fans.webp');
naze.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('./stik/fake.jpg'), "mimetype": "application/octet-stream","title": "YT : NAZE", "fileLength": "36", "pageCount": 0, "fileName": `𝗞𝗲𝗻𝗮𝗽𝗮 𝗘𝗿𝗿𝗼𝗿 ???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
}
if (budy.includes("awok")){
naze.updatePresence(from, Presence.composing)
const daieeeee = fs.readFileSync('./lib/sticker/fans.webp');
naze.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync('./stik/fake.jpg'), "mimetype": "application/octet-stream","title": "YT : NAZE", "fileLength": "36", "pageCount": 0, "fileName": `𝗞𝗲𝗻𝗮𝗽𝗮 𝗘𝗿𝗿𝗼𝗿 ???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
}
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return naze.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}


	
    
