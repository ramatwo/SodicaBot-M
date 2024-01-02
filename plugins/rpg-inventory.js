import daily from './rpg-daily.js' 
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'
import { xpRange } from '../lib/levelling.js'

import moment from 'moment-timezone'
import fs from 'fs'

const inventory = {
	
  others: {
    level: true,
    limit: true,
    health: true,
    money: true,
    exp: true
  },
  items: {
    bibitanggur: true,
    bibitmangga: true,
    bibitpisang: true,
    bibitapel: true,
    bibitjeruk: true,
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
    upgrader: true
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: true

  },
  crates: {
    common: true,
    uncoommon: true,
    mythic: true,
    pet: true,
    legendary: true
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
    robo: 10,
    lion: 10,
    rhinoceros: 10,
    dragon: 10,
    centaur: 10,
    kyubi: 10,
    griffin: 10,
    phonix: 10,
    wolf: 10
  },
  cooldowns: {
    lastclaim: {
      name: 'claim',
      time: daily.cooldown
    },
    lastweekly: {
    	name: 'weekly',
        time: weekly.cooldown
        },
    lastmonthly: {
      name: 'monthly',
      time: monthly.cooldown
    },
    lastadventure: {
      name: 'adventure',
      time: adventure.cooldown
    }
  }
}
let handler = async (m, { conn, args, command, jid, text, usedPrefix }) => {
	
let imgr = flaaa.getRandom()
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (typeof global.db.data.users[who] == "Sin Datos") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 20,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Novato',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     
if (!args[0]) {

let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Buenos_Aires').format('HH:mm:ss')}`//America/Los_Angeles
let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
                               }
                              }
                             }
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.reply(m.chat, `ℹ️ *∫ Información de tu inventario*\n\n*➭ Inventario de ítems:*\n${usedPrefix + command} 1\n*➭ Inventario de combate:*\n${usedPrefix + command} 2\n*➭ Inventario de misiones:*\n${usedPrefix + command} 3`, m)
//await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}

if (args[0] == '1') { // Inventario 1
	
let member = global.db.data.users[m.sender]
let healt = member.health
let level = member.level
let rol = member.role
let pasangan = member.pasangan
let warn = member.warn
let money = member.money
let exp = member.exp
let token = member.joincount
let dia = member.limit
let tiketm = member.healtmonster

    let sortedmoney = Object.entries(global.db.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.db.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.db.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.db.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.db.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedmakananpet = Object.entries(global.db.data.users).sort((a, b) => b[1].makananpet - a[1].makananpet)
    let sortedbatu = Object.entries(global.db.data.users).sort((a, b) => b[1].batu - a[1].batu)
    let sortediron = Object.entries(global.db.data.users).sort((a, b) => b[1].iron - a[1].iron)
    let sortedkayu = Object.entries(global.db.data.users).sort((a, b) => b[1].kayu - a[1].kayu)
    let sortedstring = Object.entries(global.db.data.users).sort((a, b) => b[1].string - a[1].string)
    let sortedcommon = Object.entries(global.db.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncoommon = Object.entries(global.db.data.users).sort((a, b) => b[1].uncoommon - a[1].uncoommon)
    let sortedmythic = Object.entries(global.db.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.db.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let sortedpet = Object.entries(global.db.data.users).sort((a, b) => b[1].pet - a[1].pet)
    let usersmoney = sortedmoney.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let usersmakananpet = sortedmakananpet.map(v => v[0])
    let usersbatu = sortedbatu.map(v => v[0])
    let usersiron = sortediron.map(v => v[0])
    let userskayu = sortedkayu.map(v => v[0])
    let usersstring = sortedstring.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncoommon = sorteduncoommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let userspet = sortedpet.map(v => v[0])
    
    let { min, max } = xpRange(level, global.multiplier)
    let pareja = global.db.data.users[m.sender].pasangan
	
let str = `
🏷️ *INVENTARIO* 
👤» *${name}* ( @${who.split("@")[0]} )\n
╭━━━━━━━━━⬣
┃ *𝗜𝗡𝗩𝗘𝗡𝗧𝗔𝗥𝗜𝗢 𝗗𝗘 ÍTEMS* 
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ 𝗣𝗥𝗢𝗗𝗨𝗖𝗧𝗢𝗦 𝗩𝗔𝗟𝗜𝗢𝗦𝗢𝗦
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ ${rpgg.emoticon('exp')} *Exp » ${exp}*
┃ ${rpgg.emoticon('limit')} *Diamante » ${dia}*
┃ ${rpgg.emoticon('money')} *Moneditas: » ${money}*
┃ ${rpgg.emoticon('joincount')} *Token » ${token}*
┃ *${rpgshop.emoticon('emerald')} » ${member.emerald}*
┃ *${rpgshop.emoticon('berlian')} » ${member.berlian}*
┃ *${rpgshop.emoticon('tiketcoin')} » ${member.tiketcoin}*
┃ *${rpgshop.emoticon('kyubi')} » ${member.kyubi}*
┃ *${rpgshop.emoticon('diamond')} » ${member.diamond}*
┃ *${rpgshop.emoticon('gold')} » ${member.gold}*
┃ *${rpgshop.emoticon('stamina')} » ${member.stamina}%*
┃ 🎟️ *Cupón » ${member.cupon}*
┃ 📉 *Gastos » ${member.expg}*
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ 𝗦𝗨𝗣𝗘𝗥𝗩𝗜𝗩𝗘𝗡𝗖𝗜𝗔
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpgshop.emoticon('potion')} » ${member.potion}*
┃ *${rpgshop.emoticon('aqua')} » ${member.aqua}*
┃ *${rpgshop.emoticon('trash')} » ${member.trash}*
┃ *${rpgshop.emoticon('wood')} » ${member.wood}*
┃ *${rpgshop.emoticon('rock')} » ${member.rock}*
┃ *${rpgshop.emoticon('batu')} » ${member.batu}*
┃ *${rpgshop.emoticon('string')} » ${member.string}*
┃ *${rpgshop.emoticon('iron')} » ${member.iron}*
┃ *${rpgshop.emoticon('coal')} » ${member.coal}*
┃ *${rpgshop.emoticon('botol')} » ${member.botol}*
┃ *${rpgshop.emoticon('kaleng')} » ${member.kaleng}*
┃ *${rpgshop.emoticon('kardus')} » ${member.kardus}*
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ 𝗢𝗕𝗝𝗘𝗧𝗢𝗦 𝗠𝗜𝗦𝗧𝗘𝗥𝗜𝗢𝗦𝗢𝗦
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpgshop.emoticon('eleksirb')} » ${member.eleksirb}*
┃ *${rpgshop.emoticon('emasbatang')} » ${member.emasbatang}*
┃ *${rpgshop.emoticon('emasbiasa')} » ${member.emasbiasa}*
┃ *${rpgshop.emoticon('rubah')} » ${member.rubah}*
┃ *${rpgshop.emoticon('emas')} » ${member.emas}*
┃ *${rpgshop.emoticon('sampah')} » ${member.sampah}*
┃ *${rpgshop.emoticon('serigala')} » ${member.serigala}*
┃ *${rpgshop.emoticon('kayu')} » ${member.kayu}*
┃ *${rpgshop.emoticon('sword')} » ${member.sword}*
┃ *${rpgshop.emoticon('umpan')} » ${member.umpan}*
┃ *${rpgshop.emoticon('healtmonster')} » ${member.healtmonster}*
┃ *${rpgshop.emoticon('pancingan')} » ${member.pancingan}*
┃ *${rpg.emoticon('ramuan')} » ${member.ramuan}*
┃ *🧭 Reloj » ${member.arlok}*
╰━━━━━━━━━⬣
*⚠️ Advertido » ${warn}*
*🚫 Baneado » ${member.banned ? '✅' : '❌'}*\n`.trim()

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
conn.reply(m.chat, str, m)
//await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${member.premium ? "✅": "❌"}*\n${wm}`, str, imgr + `Inventario : Inventory`, [[`🤺 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙙𝙚 𝘾𝙤𝙢𝙗𝙖𝙩𝙚`, `${usedPrefix}inventario 2`],[`🏕️ 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚`, `${usedPrefix}adventure`],['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂', '.rpgmenu']], fkontak, m, { mentions: conn.parseMention(str) })
	
} else if (args[0] == '2') { // Inventario 2

let user = global.db.data.users[m.sender]
let healt = user.health

let pickaxe = user.pickaxe
let sword = user.sword
let armor = user.armor
let fishingrod = user.fishingrod

let kuda = user.kuda
let rubah = user.rubah
let kucing = user.kucing
let anjing = user.anjing

let _rubah = user.anakrubah
let _kucing = user.anakkucing
let _kuda = user.anakkuda
let _anjing = user.anakanjing

//armor
let adurability = user.armordurability
//sword
let sdurability = user.sworddurability
//pickaxe
let pdurability = user.pickaxedurability

let pancing = user.pancing
let fdurability = user.fishingroddurability

let bow = user.bow
let bdurability = user.bowdurability

let naga = user.naga
let _naga = user.anaknaga

let phonix = user.phonix
let _phonix = user.anakphonix

let centaur = user.centaur
let _centaur = user.anakcentaur

let griffin = user.griffin
let _griffin = user.anakgriffin

let serigala = user.serigala
let _serigala = user.anakserigala

let level = user.level
let { min, max } = xpRange(level, global.multiplier)


//const pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} » ${user[v] >= inventory.pets[v] ? '*Nivel Máximo : Max Level*' : `Nivel* \n*» ${user[v]}*\n`}`).filter(v => v).join('\n').trim()
const cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '✅' : '❌'}`).filter(v => v).join('\n').trim()
 // ${Object.keys(inventory.others).map(v => user[v] && `⮕ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')}${tools ? `
	
 const caption = `
👤» *${name}* ( @${who.split("@")[0]} )\n

╭━━━━━━━━━⬣
┃ *𝗘𝗦𝗧𝗔𝗗𝗢 𝗗𝗘 𝗖𝗢𝗠𝗕𝗔𝗧𝗘*
┃
┃ *${rpg.emoticon('health')}* 
┃ *» ${healt}*
╰━━━━━━━━━⬣

╭━━━━━━━━━⬣
┃ *𝗖𝗔𝗝𝗔𝗦 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔𝗦*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('common')}*
┃ *» ${user.common}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('uncoommon')}*
┃ *» ${user.uncoommon}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('mythic')}*
┃ *» ${user.mythic}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('pet')}*
┃ *» ${user.pet}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('legendary')}*
┃ *» ${user.legendary}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('petFood')}*
┃ *» ${user.petFood}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('gardenboxs')}*
┃ *» ${user.gardenboxs}*
╰━━━━━━━━━⬣
`.trim()

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
conn.sendFile(m.chat, imgr, 'SodicaBot.exe', caption, fkontak, m, { mentions: conn.parseMention(caption) })
//await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`, caption, imgr + 'Inventario : Inventory', [[`⚜️ 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙈𝙞𝙨𝙞𝙤𝙣𝙚𝙨 | 𝙈𝙞𝙨𝙨𝙞𝙤𝙣𝙨`, `${usedPrefix}inventario 3`],	[`🏕️ 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚`, `${usedPrefix}adventure`],['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂', '.rpgmenu']], fkontak, m, { mentions: conn.parseMention(caption) })
	
} else if (args[0] == '4') { // Inventario 3

let member = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]

let healt = member.health
//let level = member.level
let rol = member.role
let pasangan = member.pasangan
let warn = member.warn
let money = member.money
let exp = member.exp
let token = member.joincount
let dia = member.limit


//armor
akserigala

let level = user.level
let { min, max } = xpRange(level, global.multiplier)


let ayam = user.ayam
let kambing = user.kambing
let sapi = user.sapi
let kerbau = user.kerbau
let babi = user.babi
let harimau = user.harimau
let banteng = user.banteng
let monyet = user.monyet
let babihutan = user.babihutan
let panda = user.panda
let gajah = user.gajah
let buaya = user.buaya


//let makananpet = user.makananpet
let ayamb = user.ayamb
let ayamg = user.ayamg
let sapir = user.sapir
let ssapi = user.ssapi

let makananpet = user.makananpet

//let number = `${PhoneNumber('+' + pasangan.replace('@s.whatsapp.net', '')).getNumber('international')}`
						   
    let pepe = flaaa.getRandom()
    let pp = pepe + 'Inventario'
    let str = `
🎒 *𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 𝙏𝙊𝙏𝘼𝙇*
${readMore}
╭━━━━━━━━━⬣
┃ *𝗜𝗡𝗩𝗘𝗡𝗧𝗔𝗥𝗜𝗢 𝗗𝗘 𝗔𝗥𝗧𝗜𝗖𝗨𝗟𝗢𝗦* *
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpg.emoticon('health')} » ${healt}* 
┃ ${rpgg.emoticon('level')} *Nivel » ${level}*
┃ ${rpgg.emoticon('role')} *Rango : Role* 
┃ *»* ${rol}
┃ *${rpgg.emoticon('premium')} ${member.premium ? "✅ VIP : Premium": "Limitado : Free"}*
┃ 🏦 *Banco : Bank » ${member.bank}*
┃ 💞 *Pareja : Pasangan »* ${pasangan ? `@${pasangan.split("@")[0]}` : `❌`}
┃ ⚠️ *Advertencia : Warn » ${warn}*
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ 𝗣𝗥𝗢𝗗𝗨𝗖𝗧𝗢𝗦
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ ${rpgg.emoticon('exp')} *Exp » ${exp}*
┃ ${rpgg.emoticon('limit')} *Diamante : Diamond » ${dia}*
┃ ${rpgg.emoticon('money')} *Moneditas: » ${money}*
┃ ${rpgg.emoticon('joincount')} *Token » ${token}*
┃ *${rpgshop.emoticon('emerald')} » ${member.emerald}*
┃ *${rpgshop.emoticon('berlian')} » ${member.berlian}*
┃ *${rpgshop.emoticon('tiketcoin')} » ${member.tiketcoin}*
┃ *${rpgshop.emoticon('kyubi')} » ${member.kyubi}*
┃ *${rpgshop.emoticon('diamond')} » ${member.diamond}*
┃ *${rpgshop.emoticon('gold')} » ${member.gold}*
┃ *${rpgshop.emoticon('stamina')} » ${member.stamina}%*
┃ 🎟️ *Cupón : Coupon » ${member.cupon}*
┃ 📉 *Gastos : Expg » ${member.expg}*
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ 𝗦𝗨𝗣𝗘𝗥𝗩𝗜𝗩𝗘𝗡𝗖𝗜𝗔
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpgshop.emoticon('potion')} » ${member.potion}*
┃ *${rpgshop.emoticon('aqua')} » ${member.aqua}*
┃ *${rpgshop.emoticon('trash')} » ${member.trash}*
┃ *${rpgshop.emoticon('wood')} » ${member.wood}*
┃ *${rpgshop.emoticon('rock')} » ${member.rock}*
┃ *${rpgshop.emoticon('batu')} » ${member.batu}*
┃ *${rpgshop.emoticon('string')} » ${member.string}*
┃ *${rpgshop.emoticon('iron')} » ${member.iron}*
┃ *${rpgshop.emoticon('coal')} » ${member.coal}*
┃ *${rpgshop.emoticon('botol')} » ${member.botol}*
┃ *${rpgshop.emoticon('kaleng')} » ${member.kaleng}*
┃ *${rpgshop.emoticon('kardus')} » ${member.kardus}*
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ 𝗢𝗕𝗝𝗘𝗧𝗢𝗦 𝗠𝗜𝗦𝗧𝗘𝗥𝗜𝗢𝗦𝗢𝗦
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpgshop.emoticon('eleksirb')} » ${member.eleksirb}*
┃ *${rpgshop.emoticon('emasbatang')} » ${member.emasbatang}*
┃ *${rpgshop.emoticon('emasbiasa')} » ${member.emasbiasa}*
┃ *${rpgshop.emoticon('rubah')} » ${member.rubah}*
┃ *${rpgshop.emoticon('emas')} » ${member.emas}*
┃ *${rpgshop.emoticon('sampah')} » ${member.sampah}*
┃ *${rpgshop.emoticon('serigala')} » ${member.serigala}*
┃ *${rpgshop.emoticon('kayu')} » ${member.kayu}*
┃ *${rpgshop.emoticon('sword')} » ${member.sword}*
┃ *${rpgshop.emoticon('kayu')} » ${member.kayu}*
┃ *${rpgshop.emoticon('umpan')} » ${member.umpan}*
┃ *${rpgshop.emoticon('healtmonster')} » ${member.healtmonster}*
┃ *${rpgshop.emoticon('pancingan')} » ${member.pancingan}*
┃ *${rpgshop.emoticon('kayu')} » ${member.kayu}*
┃ *${rpg.emoticon('ramuan')} » ${member.ramuan}*
┃ *🧭 Reloj : Reloj » ${member.arlok}*
╰━━━━━━━━━⬣

👤» *${name}* ( @${who.split("@")[0]} )\n
🛣️ 𝗘𝗦𝗧𝗥𝗔𝗧𝗘𝗚𝗜𝗔𝗦

╭━━━━━━━━━⬣
┃ *𝗖𝗔𝗝𝗔𝗦 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔𝗦*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('common')}*
┃ *» ${user.common}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('uncoommon')}*
┃ *» ${user.uncoommon}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('mythic')}*
┃ *» ${user.mythic}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('pet')}*
┃ *» ${user.pet}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('legendary')}*
┃ *» ${user.legendary}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('petFood')}*
┃ *» ${user.petFood}*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃ *${rpgshop.emoticon('gardenboxs')}*
┃ *» ${user.gardenboxs}*
╰━━━━━━━━━⬣


🤺 *${name}* ( @${who.split("@")[0]} )\n
*✅ » MISIÓN DISPONIBLE : MISSION AVAILABLE*

*❌ » MISIÓN NO DISPONIBLE : MISSION NOT AVAILABLE*

*╭──━• MISIONES*
*│ ⛏️⚡ Minar EXP » ${new Date - user.lastmiming < 600000 ? '❌' : '✅'}*
*│ ⛏️🪙 Minar Moneditas » ${new Date - user.lastcoins < 600000 ? '❌' : '✅'}*
*│ ⛏️💎 Minar Diamantes » ${new Date - user.lastdiamantes < 900000 ? '❌' : '✅'}* 
*│ ⚗️ Cofre » ${new Date - user.lastcofre < 86400000 ? '❌' : '✅'}* 
*│ 🏹 Caza » ${new Date - user.lastberburu < 2700000 ? '❌' : '✅'}* 
*│ ⛰️ Aventura » ${new Date - user.lastadventure < 1500000 ? '❌' : '✅'}* 
*│ 🕐 Hourly » ${new Date - user.lasthourly < 3600000 ? '❌' : '✅'}* 
*│ 📦 Daily » ${new Date - user.lastclaim < 7200000 ? '❌' : '✅'}* 
*│ 🎁 Weekly ${new Date - user.lastweekly < 259200000 ? '❌' : '✅'}* 
*│ 📮 Monthly ${new Date - user.lastmonthly < 432000000 ? '❌' : '✅'}* 
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

*╭──━• 𝗔𝗡𝗜𝗠𝗔𝗟𝗘𝗦 𝗘𝗡 𝗥𝗘𝗦𝗘𝗥𝗩𝗔*
*│${rpg.emoticon('bull')} ➡️ ${banteng}*
*│${rpg.emoticon('tiger')} ➡️ ${harimau}*
*│${rpg.emoticon('elephant')} ➡️ ${gajah}*
*│${rpg.emoticon('kambing')} ➡️ ${kambing}*
*│${rpg.emoticon('panda')} ➡️ ${panda}*
*│${rpg.emoticon('buaya')} ➡️ ${buaya}*
*│${rpg.emoticon('kerbau')} ➡️ ${kerbau}*
*│${rpg.emoticon('cow')} ➡️ ${sapi}*
*│${rpg.emoticon('monyet')} ➡️ ${monyet}*
*│${rpg.emoticon('Jabali')} ➡️ ${babihutan}*
*│${rpg.emoticon('babi')} ➡️ ${babi}*
*│${rpg.emoticon('ayam')} ➡️ ${ayam}*
*│*
*│🥢 Animales listos para Cocinar*
*│🥢 Animals ready to Cook*
*│💬 Animales totales » ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } Para Cocinar*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

*╭────━• 𝗖𝗢𝗠𝗜𝗗𝗔*
*│🥓 Food Pet » ${makananpet}*
*│🍖 Grilled Chicken » ${ayamb}*
*│🍗 Fried Chicken » ${ayamg}*
*│🥘 Meat Food » ${sapir}*
*│🥩 Beef Steak » ${ssapi}*
*│*
*│🎒 Total inv » ${makananpet + ayamb + ayamg + sapir + ssapi} Comida*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

╭━━━━━━━━━⬣
┃ *CAJAS*
┃ *╸╸╸╸╸╸╸╸╸╸╸╸╸╸*
┃📥 *Boxs » ${user.boxs}*
┃📦 *Common Box » ${user.common}*
┃🥡 *Uncommon » ${user.uncoommon}*
┃🗳️ *Mythic Box » ${user.mythic}*
┃🎁 *Legendary Box » ${user.legendary}*.
┃🍱 *Pet Box » ${user.pet}*
┃💐 *Garden boxs » ${user.gardenboxs}*
╰━━━━━━━━━⬣
`
 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
// let ftroli = { key: {participant : '0@s.whatsapp.net'}, message: { orderMessage: { itemCount: 2022, status: 1, surface: 1, message: bottime, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }   
conn.sendFile(m.chat, imgr, 'SodicaBot.exe', str, {quoted: fkontak})
//await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`, str, imgr + 'Inventario : Inventory', [[`${healt < 40 ? '❤️ 𝘾𝙐𝙍𝘼𝙍𝙈𝙀 | 𝙃𝙀𝘼𝙇 𝙈𝙀' : '𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚 🏕️'}`, `${healt < 40 ? '.heal' : '.adventure'}`],['🏪 𝙏𝙞𝙚𝙣𝙙𝙖 𝙥𝙖𝙧𝙖 𝘾𝙤𝙢𝙥𝙧𝙖𝙧 | 𝘽𝙪𝙮', '.buy'],['🏪 𝙏𝙞𝙚𝙣𝙙𝙖 𝙥𝙖𝙧𝙖 𝙑𝙚𝙣𝙙𝙚𝙧 | 𝙎𝙚𝙡𝙡', '.sell']], m, {quoted: fkontak})

} else if (args[0] == '3') { // Inventario 4

 // let name = m.fromMe ? conn.user : conn.contacts[m.sender]
//let { lastdiamantes, lastcoins, lastmiming, registered, age, lastrampok, lastdagang, lastcofre, lastcodereg, lastberkebon, lasthourly, lastberburu, lastbansos, lastadventure, lastfishing, lastwar, lastduel, lastmining, lastdungeon, lastclaim, lastweekly, lastmonthly } = global.db.data.users[m.sender]
    let user = global.db.data.users[m.sender]
    let name = m.sender
    let usuario = await conn.getName(name)
    
    
    let str = `
👤» *${usuario}* ( @${who.split("@")[0]} )\n
*✅ » DISPONIBLE*

*❌ » NO DISPONIBLE*

*╭──━• MISIONES*
*│ ⛏️⚡ Minar EXP » ${new Date - user.lastmiming < 600000 ? '❌' : '✅'}*
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⛏️🪙 Minar Moneditas » ${new Date - user.lastcoins < 600000 ? '❌' : '✅'}*
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⛏️💎 Minar Diamantes » ${new Date - user.lastdiamantes < 900000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⚗️ Cofre » ${new Date - user.lastcofre < 86400000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 🏹 Caza » ${new Date - user.lastberburu < 2700000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⛰️ Aventura » ${new Date - user.lastadventure < 1500000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 🕐 Cada hora » ${new Date - user.lasthourly < 3600000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 📦 Diario » ${new Date - user.lastclaim < 7200000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 🎁 Semanal ${new Date - user.lastweekly < 259200000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 📮 Mensual ${new Date - user.lastmonthly < 432000000 ? '❌' : '✅'}* 
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*`.trim()

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 

conn.sendFile(m.chat, imgr, 'SodicaBot.exe', str, fkontak, m, { mentions: conn.parseMention(str) })
//await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`, str, imgr + 'Inventario : Inventory', [     [`🍱 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙙𝙚 𝘼𝙡𝙞𝙢𝙚𝙣𝙩𝙤𝙨 `, `${usedPrefix}alimentos`],[`🎒 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙩𝙤𝙩𝙖𝙡`, `${usedPrefix}inventario 4`],	['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂', '.rpgmenu']], fkontak, m, { mentions: conn.parseMention(str) })
	
    } else if (command == 'alimentos') { // Inventario piscina
	    
let user = global.db.data.users[m.sender]
let ayam = user.ayam
let kambing = user.kambing
let sapi = user.sapi
let kerbau = user.kerbau
let babi = user.babi
let harimau = user.harimau
let banteng = user.banteng
let monyet = user.monyet
let babihutan = user.babihutan
let panda = user.panda
let gajah = user.gajah
let buaya = user.buaya

let paus = user.paus 
let kepiting = user.kepiting
let gurita = user.gurita 
let cumi = user.cumi 
let buntal = user.buntal 
let dory = user.dory 
let lumba = user.lumba 
let lobster = user.lobster 
let hiu = user.hiu 
let udang = user.udang
let ikan = user.ikan 
let orca = user.orca 
let pancingan = user.pancingan
let _pancingan = user.anakpancingan 
	 
//let makananpet = user.makananpet
let ayamb = user.ayamb
let ayamg = user.ayamg
let sapir = user.sapir
let ssapi = user.ssapi

let makananpet = user.makananpet
let makanannaga = user.makanannaga                                         
let makananphonix = user.makananphonix                                     
let makanangriffin = user.makanangriffin
let makanankyubi = user.makanankyubi                                       
let makanancentaur = user.makanancentaur

let mangga = user.mangga
let anggur = user.anggur
let pisang = user.pisang
let jeruk = user.jeruk
let apel = user.apel

let bibitanggur = user.bibitanggur                            
let bibitjeruk = user.bibitjeruk                              
let bibitapel = user.bibitapel
let bibitmangga = user.bibitmangga                            
let bibitpisang = user.bibitpisang

let aineh = `
*╭──━• 𝗔𝗡𝗜𝗠𝗔𝗟𝗘𝗦 𝗘𝗡 𝗥𝗘𝗦𝗘𝗥𝗩𝗔*
*│${rpg.emoticon('bull')} ➡️ ${banteng}*
*│${rpg.emoticon('tiger')} ➡️ ${harimau}*
*│${rpg.emoticon('elephant')} ➡️ ${gajah}*
*│${rpg.emoticon('kambing')} ➡️ ${kambing}*
*│${rpg.emoticon('panda')} ➡️ ${panda}*
*│${rpg.emoticon('buaya')} ➡️ ${buaya}*
*│${rpg.emoticon('kerbau')} ➡️ ${kerbau}*
*│${rpg.emoticon('cow')} ➡️ ${sapi}*
*│${rpg.emoticon('monyet')} ➡️ ${monyet}*
*│${rpg.emoticon('Jabali')} ➡️ ${babihutan}*
*│${rpg.emoticon('babi')} ➡️ ${babi}*
*│${rpg.emoticon('ayam')} ➡️ ${ayam}*
*│*
*│🥢 Animales listos para Cocinar*
*│🥢 Animals ready to Cook*
*│💬 Animales totales » ${ buaya + gajah + panda + babihutan + monyet + harimau + kerbau + kambing + ayam + sapi + babi + banteng } Para Cocinar*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

*╭────━• 𝗖𝗢𝗠𝗜𝗗𝗔*
*│🥓 Comida de Mascota : Food Pet » ${makananpet}*
*│🍖 Pollo a la Parrilla : Grilled Chicken » ${ayamb}*
*│🍗 Pollo frito : Fried Chicken » ${ayamg}*
*│🥘 Alimento de Carne : Meat Food » ${sapir}*
*│🥩 Bistec de Carne : Beef Steak » ${ssapi}*
*│*
*│🎒 Total inv » ${makananpet + ayamb + ayamg + sapir + ssapi} Comida*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

*╭──━• 𝗙𝗥𝗨𝗧𝗔𝗦 𝗬 𝗦𝗘𝗠𝗜𝗟𝗟𝗔𝗦*
*│🥭 Mango » ${mangga}*
*│🍇 Uva : Grape » ${anggur}*
*│🍌 Platano : Banana » ${pisang}*
*│🍊 Naranja : Orange » ${jeruk}*
*│🍎 Manzana : Apple » ${apel}*
*│*
*│🌾 Semillas de Mango : Mango Seeds*
*│» ${bibitmangga}*
*│🌾 Semillas de uva : Grape Seeds*
*│» ${bibitanggur}*                                   
*│🌾 Semillas de plátano : Banana Seeds*
*│» ${bibitpisang}*
*│🌾 Semillas de naranja : Orange Seeds*
*│» ${bibitjeruk}*
*│🌾 Semillas de manzana : Apple seeds*
*│» ${bibitapel}*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

╭━━━━━━━━━⬣ 
┃ 🍱 *Alimentos para mascotas: Pet Food*
┃ » *${makananpet}*
┃ 🕊️ *Comida para Fénix : Phoenix Food*
┃ » *${makananphonix}*
┃ 🐉 *Comida para Dragón : Dragon Food*
┃ » *${makanannaga}*
┃ 🦅 *Comida para Ave : Griffin Food*
┃ » *${makanangriffin}*
┃ 🌀 *Comida Mágica : Magic Food*
┃ » *${makanankyubi}*
┃ 🐐 *Comida para Centauro : Centauro Food*
┃ » *${makanancentaur}*
╰━━━━━━━━━⬣

╭━━━━━━━━━⬣ 
┃ *𝗣𝗜𝗦𝗖𝗜𝗡𝗔 𝗗𝗘 𝗣𝗘𝗖𝗘𝗦*
┃ *╸╸╸╸╸╸╸╸╸╸╸╸╸╸*
┃ 🦈 *Tiburón : Shark » ${hiu}*
┃ 🐟 *Pez : Fish » ${ikan}*
┃ 🐠 *Dory : Surgeonfish » ${dory}*
┃ 🐋 *Orca : Killer whale » ${orca}*
┃ 🐳 *Ballena : Whale » ${paus}*
┃ 🦑 *Calamar : Squid » ${cumi}*
┃ 🐙 *Pulpo : Octopus » ${gurita}*
┃ 🐡 *Pez Globo : Blowfish » ${buntal}*
┃ 🦐 *Camarón : Shrimp » ${udang}*
┃ 🐬 *Delfín : Dolphin » ${lumba}*
┃ 🦞 *Langosta : Lobster » ${lobster}*
┃ 🦀 *Cangrejo : Crab » ${kepiting}*
╰━━━━━━━━━⬣

*DATOS DEL GANCHO : HOOK DATA*
*╭────────────────*
*│🪝 Gancho : Hook » ${pancingan == 0 ? 'No tenés' : '' || pancingan == 1 ? 'Nivel  ✦ 1' : '' || pancingan == 2 ? 'Nivel  ✦ 2' : '' || pancingan == 3 ? 'Nivel  ✦ 3' : '' || pancingan == 4 ? 'Nivel  ✦ 4' : '' || pancingan == 5 ? 'Nivel  ✦ 5 ǁ MAX' : ''}*
*│ Poder del Gancho » ${pancingan == 0 ? 'No tenés' : '' || pancingan > 0 && pancingan < 5 ? `Nivel » ${pancingan} a Nivel ${pancingan + 1}*\n*│ Exp » ${_pancingan} -> ${pancingan *10000}*` : '' || pancingan == 5 ? 'Nivel  ✦ 5 ǁ MAX' : ''}
*╰────────────────*

╭━━━━━━━━━⬣
┃ *CAJAS : BOX*
┃ *╸╸╸╸╸╸╸╸╸╸╸╸╸╸*
┃📥 *Cajas : Boxs » ${user.boxs}*
┃📦 *Caja Común : Common Box » ${user.common}*
┃🥡 *Caja Poco Común : Uncommon » ${user.uncoommon}*
┃🗳️ *Caja Mítica : Mythic Box » ${user.mythic}*
┃🎁 *Caja Legendaria : Legendary Box » ${user.legendary}*.
┃🍱 *Caja para Mascota : Pet Box » ${user.pet}*
┃💐 *Caja de Jardinería : Garden boxs » ${user.gardenboxs}*
╰━━━━━━━━━⬣`.trim()

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
conn.sendFile(m.chat, imgr, 'Inventario', aineh, fkontak, m)}
//await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`, aineh, imgr + 'Inventario : Inventory', [[`🐈 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙙𝙚 𝘼𝙣𝙞𝙢𝙖𝙡𝙚𝙨`, `${usedPrefix}animales`],[`🎒 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙩𝙤𝙩𝙖𝙡`, `${usedPrefix}inventario 4`],['𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂 💗', '.rpgmenu']], fkontak, m)}
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inventory|inv|inventario|animales|alimentos)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4201)

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['*│ Nueva misión en*\n', '*│* ', mo, ' *⛅ Meses*\n', '*│* ', d, ' *☀️ Días*\n', '*│* ', h, ' *⏰ Horas*\n', '*│* ', m, ' *🕐 Minutos*\n', '*│* ', s, ' *⏱️ Segundos*\n*│*'].map(v => v.toString().padStart(2, 0)).join('')
}