import daily from './rpg-daily.js' 
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'
//import { xpRange } from '../lib/levelling.js'

//import moment from 'moment-timezone'
//import fs from 'fs'

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
	
let imgr = "./media/menus/velocidad.bat"
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


await conn.reply(m.chat, `ℹ️ *∫ Información de tu inventario*\n\n*➭ Inventario de ítems:*\n${usedPrefix + command} 1\n*➭ Inventario de misiones:*\n${usedPrefix + command} 2`, m)
//await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}

if (args[0] == '1') { // Inventario 1
	
let member = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let healt = user.health
let money = member.money
let exp = member.exp
let token = member.joincount
let dia = member.limit
 //nuevos let
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
//let pancingan = user.pancingan
//let _pancingan = user.anakpancingan 
	 

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
//nuevos let fin

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
	
let str = `
🏷️ *INVENTARIO* 
👤» *${name}* +${who.split("@")[0]}\n${readMore}\n
╭━━━━━━━━━⬣
┃ *𝗜𝗡𝗩𝗘𝗡𝗧𝗔𝗥𝗜𝗢* 
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸
┃
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ *𝗣𝗥𝗢𝗗𝗨𝗖𝗧𝗢𝗦*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpg.emoticon('health')}* *» ${healt}*
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
┃${readMore}
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ *𝗦𝗨𝗣𝗘𝗥𝗩𝗜𝗩𝗘𝗡𝗖𝗜𝗔*
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
┃${readMore}
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ *𝗢𝗕𝗝𝗘𝗧𝗢𝗦 𝗠𝗜𝗦𝗧𝗘𝗥𝗜𝗢𝗦𝗢𝗦*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpgshop.emoticon('eleksirb')} » ${member.eleksirb}*
┃ *${rpgshop.emoticon('emas')} » ${member.emas}*
┃ *${rpgshop.emoticon('sampah')} » ${member.sampah}*
┃ *${rpgshop.emoticon('serigala')} » ${member.serigala}*
┃ *${rpgshop.emoticon('sword')} » ${member.sword}*
┃ *${rpgshop.emoticon('umpan')} » ${member.umpan}*
┃ *${rpgshop.emoticon('healtmonster')} » ${member.healtmonster}*
┃ *${rpgshop.emoticon('pancingan')} » ${member.pancingan}*
┃${readMore}
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╮
┃ *𝗖𝗔𝗝𝗔𝗦 𝗘𝗡𝗖𝗢𝗡𝗧𝗥𝗔𝗗𝗔𝗦*
┃ ╸╸╸╸╸╸╸╸╸╸╸╸╸╸╯
┃ *${rpgshop.emoticon('common')}* *» ${user.common}*
┃ *${rpgshop.emoticon('uncoommon')}* *» ${user.uncoommon}*
┃ *${rpgshop.emoticon('mythic')}* *» ${user.mythic}*
┃ *${rpgshop.emoticon('pet')}* *» ${user.pet}*
┃ *${rpgshop.emoticon('petFood')}* *» ${user.petFood}*
┃ *${rpgshop.emoticon('gardenboxs')}* *» ${user.gardenboxs}*
*FIN DEL INVENTARIO*
${readMore}${readMore}${readMore}${readMore}${readMore}${readMore}${readMore}${readMore}
--------------- *ZONA DE PRUEBAS* --------------------------------------------

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
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*
*╭────━• 𝗖𝗢𝗠𝗜𝗗𝗔*
*│🥓 Comida de Mascota : Food Pet » ${makananpet}*
*│🍖 Pollo a la Parrilla : Grilled Chicken » ${ayamb}*
*│🍗 Pollo frito : Fried Chicken » ${ayamg}*
*│🥘 Alimento de Carne : Meat Food » ${sapir}*
*│🥩 Bistec de Carne : Beef Steak » ${ssapi}*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

*╭──━• 𝗙𝗥𝗨𝗧𝗔𝗦 𝗬 𝗦𝗘𝗠𝗜𝗟𝗟𝗔𝗦*
*│🥭 Mango » ${mangga}*
*│🍇 Uva » ${anggur}*
*│🍌 Platano » ${pisang}*
*│🍊 Naranja » ${jeruk}*
*│🍎 Manzana » ${apel}*
*│*
*│🌾 Semillas de Mango*
*│» ${bibitmangga}*
*│🌾 Semillas de uva*
*│» ${bibitanggur}*                                   
*│🌾 Semillas de plátano *
*│» ${bibitpisang}*
*│🌾 Semillas de naranja*
*│» ${bibitjeruk}*
*│🌾 Semillas de manzana*
*│» ${bibitapel}*
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*

╭━━━━━━━━━⬣ 
┃ 🍱 *Alimentos para mascotas*
┃ » *${makananpet}*
┃ 🕊️ *Comida para Fénix*
┃ » *${makananphonix}*
┃ 🐉 *Comida para Dragón*
┃ » *${makanannaga}*
┃ 🦅 *Comida para Ave
┃ » *${makanangriffin}*
┃ 🌀 *Comida Mágica*
┃ » *${makanankyubi}*
┃ 🐐 *Comida para Centauro*
┃ » *${makanancentaur}*
╰━━━━━━━━━⬣

╭━━━━━━━━━⬣ 
┃ *𝗣𝗜𝗦𝗖𝗜𝗡𝗔 𝗗𝗘 𝗣𝗘𝗖𝗘𝗦*
┃ *╸╸╸╸╸╸╸╸╸╸╸╸╸╸*
┃ 🦈 *Tiburón » ${hiu}*
┃ 🐟 *Pez » ${ikan}*
┃ 🐠 *Dory » ${dory}*
┃ 🐋 *Orca » ${orca}*
┃ 🐳 *Ballena » ${paus}*
┃ 🦑 *Calamar » ${cumi}*
┃ 🐙 *Pulpo » ${gurita}*
┃ 🐡 *Pez Globo » ${buntal}*
┃ 🦐 *Camarón » ${udang}*
┃ 🐬 *Delfín » ${lumba}*
┃ 🦞 *Langosta  » ${lobster}*
┃ 🦀 *Cangrejo » ${kepiting}*
╰━━━━━━━━━⬣
`.trim()

conn.reply(m.chat, str, m)
//await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${member.premium ? "✅": "❌"}*\n${wm}`, str, imgr + `Inventario : Inventory`, [[`🤺 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙙𝙚 𝘾𝙤𝙢𝙗𝙖𝙩𝙚`, `${usedPrefix}inventario 2`],[`🏕️ 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚`, `${usedPrefix}adventure`],['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂', '.rpgmenu']], fkontak, m, { mentions: conn.parseMention(str) })
	
} else if (args[0] == '2') { // Inventario 2

    let user = global.db.data.users[m.sender]
    let name = m.sender
    let usuario = await conn.getName(name)
    
    
    let str = `
👤» *${usuario}* ( @${who.split("@")[0]} )\n
*✅ » DISPONIBLE*

*❌ » NO DISPONIBLE*

*╭──━• MISIONES*
*│ ⛏️⚡ Minar EXP » ${new Date - user.lastmiming < 9000000 ? '❌' : '✅'}*
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⛏️🪙 Minar Moneditas » ${new Date - user.lastcoins < 9000000 ? '❌' : '✅'}*
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⛏️💎 Minar Diamantes » ${new Date - user.lastdiamantes < 9000000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⚗️ Cofre » ${new Date - user.lastcofre < 86400000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 🏹 Caza » ${new Date - user.lastberburu < 86400000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ ⛰️ Aventura » ${new Date - user.lastadventure < 86400000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 🕐 Hourly » ${new Date - user.lasthourly < 3600000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 📦 Daily » ${new Date - user.lastclaim < 86400000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 🎁 Weekly ${new Date - user.lastweekly < 2 * 60 * 60 * 1000 + 7 * 24 * 60 * 60 * 1000 ? '❌' : '✅'}* 
*│┈┈┈┈┈┈┈┈┈┈┈┈*
*│ 📮 Monthly ${new Date - user.lastmonthly < 2 * 60 * 60 * 1000 + 30 * 24 * 60 * 60 * 1000 ? '❌' : '✅'}* 
*╰─⋆─⋆─⋆─⋆─⋆─⋆─⋆─⋆─┄⸙*`.trim()
// 2 * 60 * 60 * 1000 + 7 * 24 * 60 * 60 * 1000 el 7 es 7 dias, si ponemos  2 * 60 * 60 * 1000 + 30 * 24 * 60 * 60 * 1000 con el 30, significa que son 30 dias.
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

conn.sendFile(m.chat, imgr, 'Inventario', str, fkontak, m, { mentions: conn.parseMention(str) })
	
    } else if (command == '4') { // Inventario piscina
	    
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
conn.reply(m.chat, aineh, m)}
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inventory|inv|inventario)$/i
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