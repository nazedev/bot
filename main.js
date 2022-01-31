const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color } = require('./lib/color')
require('./index.js')
nocache('./index.js', module => console.log(`${module} Telah Di Update✓`))
const starts = async (naze = new WAConnection()) => {
naze.logger.level = 'warn'
naze.version = [2, 2143, 8]
naze.browserDescription = ["nazedev", "safari", "windows 10"];
console.log(banner.string)
naze.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))})
fs.existsSync('./session.json') && naze.loadAuthInfo('./session.json')
naze.on('connecting', () => {
start('2', 'Connecting...')})
naze.on('open', () => {
success('2', 'Connected')})
await naze.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(naze.base64EncodedAuthInfo(), null, '\t'))
naze.on('chat-update', async (message) => {
require('./index.js')(naze, message)})}
function nocache(module, cb = () => { }) {
console.log('[ ! ]', `'${module}'`, 'DI Pantau Oleh nazedev')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)}})}

starts()