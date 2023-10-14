import fetch from 'node-fetch'

const cooldown = 1500000 //25 minutos
let handler = async (m, { usedPrefix, conn }) => {
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

let pp = 'https://google.com'



let imgr = flaaa.getRandom()
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
if (user.health < 80) return await conn.reply(m.chat, `𝙏𝙐 𝙎𝘼𝙇𝙐𝘿 💔 𝙀𝙎𝙏𝘼 𝙋𝙊𝙍 𝘿𝙀𝘽𝘼𝙅𝙊 𝘿𝙀 *80*\n𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘾𝙐𝙍𝘼𝙏𝙀 𝙋𝙍𝙄𝙈𝙀𝙍𝙊 𝙋𝘼𝙍𝘼 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙍 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊`, fkontak, imgr, m)
/*conn.sendButton(m.chat,`${htki} 𝘽𝘼𝙅𝘼 𝙎𝘼𝙇𝙐𝘿 ${htka}`,
`𝙏𝙐 𝙎𝘼𝙇𝙐𝘿 💔 𝙀𝙎𝙏𝘼 𝙋𝙊𝙍 𝘿𝙀𝘽𝘼𝙅𝙊 𝘿𝙀 *80 *
𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘾𝙐𝙍𝘼𝙏𝙀 𝙋𝙍𝙄𝙈𝙀𝙍𝙊 𝙋𝘼𝙍𝘼 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙍 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n\n𝙔𝙊𝙐𝙍 𝙃𝙀𝘼𝙇𝙏𝙃 💔 𝙄𝙎 𝘽𝙀𝙇𝙊𝙒 *80 *\n𝙋𝙇𝙀𝘼𝙎𝙀 𝙃𝙀𝘼𝙇 𝙁𝙄𝙍𝙎𝙏 𝙏𝙊 𝘼𝘿𝙑𝙀𝙉𝙏𝙐𝙍𝙀 𝘼𝙂𝘼𝙄𝙉`.trim(), imgr + 'MALA SALUD : BAD HEALTH', [
[`❤️ 𝘾𝙐𝙍𝘼𝙍𝙈𝙀 | 𝙃𝙀𝘼𝙇 𝙈𝙀`, `${usedPrefix}heal`],
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`]], fkontak, m)*/
    
if (new Date - user.lastadventure <= cooldown) return await conn.reply(m.chat, `${htki} 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝘼𝙉𝘿𝙊 ${htka}\n\n𝙔𝘼 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙎𝙏𝙀  𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙀𝙎𝙋𝙀𝙍𝘼 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀 𝙀𝙇 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊 𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘼𝘿𝙑𝙀𝙉𝙏𝙐𝙍𝙀𝘿  𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏 𝙐𝙉𝙏𝙄𝙇 𝙏𝙃𝙀 𝘽𝙍𝙀𝘼𝙆 𝙏𝙄𝙈𝙀 𝙄𝙎 𝙊𝙑𝙀𝙍 ⏱️ ${timers.toTimeString()}\n\nDESCANSANDO : RESTING\n${wm}`, fkontak, imgr, m)
//conn.sendButton(m.chat, `${htki} 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝘼𝙉𝘿𝙊 ${htka}`,`𝙔𝘼 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙎𝙏𝙀  𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝙀𝙎𝙋𝙀𝙍𝘼 𝙃𝘼𝙎𝙏𝘼 𝙌𝙐𝙀 𝙏𝙀𝙍𝙈𝙄𝙉𝙀 𝙀𝙇 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙉𝙎𝙊 𝙔𝙊𝙐 𝘼𝙇𝙍𝙀𝘼𝘿𝙔 𝘼𝘿𝙑𝙀𝙉𝙏𝙐𝙍𝙀𝘿  𝙋𝙇𝙀𝘼𝙎𝙀 𝙒𝘼𝙄𝙏 𝙐𝙉𝙏𝙄𝙇 𝙏𝙃𝙀 𝘽𝙍𝙀𝘼𝙆 𝙏𝙄𝙈𝙀 𝙄𝙎 𝙊𝙑𝙀𝙍  ⏱️ ${timers.toTimeString()}`.trim(), imgr + 'DESCANSANDO : RESTING', [[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`], [`🔔 𝙍𝙀𝘾𝙇𝘼𝙈𝙊 𝘿𝙄𝘼𝙍𝙄𝙊 | 𝘿𝘼𝙄𝙇𝙔`, `${usedPrefix}daily`]], fkontak, m) 
    
    const rewards = reward(user)
    let text = `🛫 𝙀𝙎𝙏𝘼𝙎 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼𝙉𝘿𝙊

🏞️ 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼 𝙁𝙄𝙉𝘼𝙇𝙄𝙕𝘼𝘿𝘼
${cmenua}`
    
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n${global.rpg.emoticon(lost)} ${total}`
    }
    text += '\n\n✨ 𝙍𝙀𝘾𝙊𝙈𝙋𝙀𝙉𝙎𝘼𝙎 𝘿𝙀 𝙇𝘼 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼 ✨'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n» ${global.rpg.emoticon(rewardItem)} ${total}`
    }
    conn.sendFile(m.chat, pp, 'SodicaBot.exe', text.trim(), fkontak)
   // await conn.reply(m.chat, `${htki} 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼 ${htka}`, fkontak, imgr, m)
    /*conn.sendButton(m.chat, 
     `${htki} 𝘼𝙑𝙀𝙉𝙏𝙐𝙍𝘼 ${htka}`, 
     text.trim(), `https://static-maps.yandex.ru/1.x/?lang=id-ID&ll=${kt[1][0].longitude},${kt[1][0].latitude}&z=12&l=map&size=600,300`, [
[`🎒 𝙄𝙉𝙑𝙀𝙉𝙏𝘼𝙍𝙄𝙊 | 𝙄𝙉𝙑𝙀𝙉𝙏𝙊𝙍𝙔`, `${usedPrefix}inventory`],
[`🔔 𝙍𝙀𝘾𝙇𝘼𝙈𝙊 𝘿𝙄𝘼𝙍𝙄𝙊 | 𝘿𝘼𝙄𝙇𝙔`, `${usedPrefix}daily`]
], fkontak, m)*/
    user.lastadventure = new Date * 1
}
handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^(adventure|adv|aventura|aventurar)$/i
handler.register = true
handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 400,
            exp: 300,
            trash: 150,
            potion: 3,
            rock: 2,
	    joincount: 2,
            wood: 3,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncoommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            cat: [0, 1, 0, 0, 0],
            centaur: [0, 1, 0, 0, 0],
            dog: [0, 1, 0, 0, 0],
            dragon: [0, 1, 0, 0, 0],
            emerald: [0, 1, 0, 0, 0],
            fox: [0, 1, 0, 0, 0],
            griffin: [0, 1, 0, 0, 0],
            horse: [0, 1, 0, 0, 0],
            kyubi: [0, 1, 0, 0, 0],
            lion: [0, 1, 0, 0, 0],
            pet: [0, 1, 0, 0, 0],
            phonix: [0, 1, 0, 0, 0],
            rhinoceros: [0, 1, 0, 0, 0],
            robo: [0, 1, 0, 0, 0],
            wolf: [0, 1, 0, 0, 0],
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4,
            armordurability: (15 - user.armor) * 7
        }
    }
    return rewards
}
