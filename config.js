import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 
import { en, es, id, ar, pt, fr } from './lib/idiomas/total-idiomas.js' 


//⊱ ━━━━━.⋅ Añada los numeros a ser Propietario/a | Add the numbers to be Owner ⋅.━━━━ ⊰  

global.owner = [
  ['5491162480909', '⭐Owner', true],  
  ['5491156664731', '💻Desarrollador', true],

]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.mods = ['5491162480909'] 
global.prems = ['5491162480909'] 
   
  
//⊱ ━━━━━.⋅ IDIOMA : LENGUAJE ⋅.━━━━ ⊰ 
//Agrega el Idioma que quieres que tenga SodicaBot-M
//Add the language you want SodicaBot-M to have
//  es = Español         id = Bahasa Indonesia
//  en = English         pt = Português 
//  ar = عرب  

global.lenguajeGB = es  //Idioma de SodicaBot, Ejemplo: es | en | pt...

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ

global.openai_key = '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'
/* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */

global.openai_org_id = 'org-1IYoc7bxFbDKL8hPQLPwSCD2'
/* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */


global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.itsrose = ['4b146102c4d500809da9d1ff']

global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
}

global.mods = [] 


/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment	

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.official = [ // Agregate si eres Owner
['5491162480909', '⭐Owner', 1], 
['5491156664731', '💻Desarrollador', 1],] 

global.mail = '' //agrega tú correo
global.desc = '' //agrega una descripción corta
global.desc2 = '⏤͟͞🪀 Envíe: ,menu     ⏤͟͞⚠️ Seguinos en ig: @sodica.crew' //agrega una descripción larga (Solo se aplicará si su whasapp no tiene descripción)
global.country = '🇦🇷' //agrega tú país ejemplo: 🇪🇨

global.packname = 'SodicaBot'
global.author = '@sodica.crew'

//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

<<<<<<< HEAD
global.vs = '1.6.0'
=======
global.vs = '1.5.1'
>>>>>>> 81fdecd3656345dfe08993ded0c5ad44599e9ec5
global.vsJB = '2.0'

global.gt = 'SodicaBot'
global.yt = 'https://youtube.com/@SodicaCrew'
global.yt2 = 'https://youtube.com/@SodicaCrew'
global.ig = 'https://www.instagram.com/sodica.crew'
global.md = 'https://instagram.com/sodica.crew'
global.fb = 'https://instagram.com/sodica.crew'

global.nna = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //UPDATE SodicaBot
global.nna2 = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Help
global.nn = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 1
global.nnn = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 3
global.nnntt = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 4
global.nnnttt = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 5 COL
global.nnnttt2 = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 6 COL
global.nnnttt3 = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 7 COL
global.nnnttt4 = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4' //Grupo 8 COL
global.paypal = 'https://chat.whatsapp.com/Jpid2yChlSA4x9zPEww6p4'
global.asistencia = 'Wa.me/5491162480909' //Dudas? escríbeme...

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Datos ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '╰⊱✅⊱ *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊* ⊱✅⊱╮\n\n'
global.resultado = rg

global.ag = '╰⊱⚠️⊱ *𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼* ⊱⚠️⊱╮\n\n'
global.advertencia = ag

global.iig = '╰⊱❕⊱ *𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉* ⊱⊱╮\n\n'
global.informacion = iig

global.fg = '╰⊱❌⊱ *𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n'
global.fallo = fg

global.mg = '╰⊱❗️⊱ *𝙈𝘼𝙇* ⊱❗️⊱╮\n\n'
global.mal = mg

global.eeg = '╰⊱📩⊱ *𝙍𝙀𝙋𝙊𝙍𝙏𝙀* ⊱📩⊱╮\n\n'
global.envio = eeg

global.eg = '╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊* ⊱💚⊱╮\n\n'
global.exito = eg

//𝙀𝙅𝙀𝙈𝙋𝙇𝙊 | 𝙀𝙓𝘼𝙈𝙋𝙇𝙀
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ Información | Information ⋅.━━━━ ⊰

global.wm = 'SodicaBot'
global.igfg = 'SodicaBot'
global.wait = '*⌛ Cargando ▬▭▭▭▭▭▭*'
global.waitt = '*⌛ Cargando ▬▬▭▭▭*'
global.waittt = '*⌛ Cargando ▬▬▬▬▭▭*'
global.waitttt = '*⌛ Cargando ▬▬▬▬▬▬▭*'
global.nomorown = '5491162480909'
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf']

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ IMG ⋅.━━━━ ⊰

global.imagen1 = fs.readFileSync('./media/menus/Menu3.jpg')
global.imagen2 = fs.readFileSync('./media/menus/img1.jpg')
global.imagen3 = fs.readFileSync('./media/menus/img2.jpg')
global.imagen4 = fs.readFileSync('./media/menus/img3.jpg')
global.imagen5 = fs.readFileSync('./media/menus/img4.jpg')
global.imagen6 = fs.readFileSync('./media/menus/img5.jpg')
global.imagen7 = fs.readFileSync('./media/menus/img6.jpg')
global.imagen8 = fs.readFileSync('./media/menus/img7.jpg')
global.imagen9 = fs.readFileSync('./media/menus/img8.jpg')
global.imagen10 = fs.readFileSync('./media/menus/img9.jpg')
global.imagen11 = fs.readFileSync('./media/menus/img10.jpg')
global.imagen12 = fs.readFileSync('./media/menus/img11.jpg')
global.imagen13 = fs.readFileSync('./media/menus/img12.jpg')

//━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//━━━━━━━━━━━━━━ img ━━━━━━━━━

global.img = 'https://i.imgur.com/IXlUwTW.jpg'
global.img2 = 'https://i.imgur.com/EXTbyyn.jpg'

global.img3 = 'https://i.imgur.com/N40ekYN.jpg' //prem
global.img4 = 'https://i.imgur.com/N40ekYN.jpg' //prem

global.img5 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img6 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img7 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img8 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img9 = 'https://i.imgur.com/ZjvbaOA.jpg'

global.img10 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img11 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img12 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img13 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img14 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img15 = 'https://i.imgur.com/ZjvbaOA.jpg'

global.img16 = 'https://i.imgur.com/0qAOczG.jpg' //+18

global.img17 = 'https://i.imgur.com/ZjvbaOA.jpg'
global.img18 = 'https://i.imgur.com/ZjvbaOA.jpg'

global.logogit = 'https://tinyurl.com/2qvl9vgs'

global.welgata = [ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb]
global.redesMenu = [nna, nn, nnn, nnnt, nnntt, nnnttt, nnnttt2, nnnttt3, nnnttt4, md, ig, paypal, yt, asistencia, fb]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
 
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'

global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'

global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
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

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


<<<<<<< HEAD
global.multiplier = 500 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 
=======
global.multiplier = 100 // Cuanto más alto, más difícil subir de nivel | The higher, The harder levelup 
>>>>>>> 81fdecd3656345dfe08993ded0c5ad44599e9ec5

//Emojis RPG - Referencias
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '🧬 Nivel',
      limit: lenguajeGB.eDiamante(),
      exp: lenguajeGB.eExp(),
      bank: '🏦 Banco',
      diamond: lenguajeGB.eDiamantePlus(),
      health: '❤️ Salud',
      kyubi: lenguajeGB.eMagia(),
      joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(),
      stamina: lenguajeGB.eEnergia(),
      role: '💪 Rango',
      premium: '🎟️ Premium',
      pointxp: '📧 XP',
      gold: lenguajeGB.eOro(),
      
      trash: lenguajeGB.eBasura(),
      crystal: '🔮 Cristal',
      intelligence: '🧠 Inteligencia',
      string: lenguajeGB.eCuerda(),
      keygold: '🔑 Llave de Oro',
      keyiron: '🗝️ Llave de Hierro',
      emas: lenguajeGB.ePinata(),
      fishingrod: '🎣 Caña de Pescar',
      gems: '🍀 Gemas',
      magicwand: '⚕️ Varita Mágica',
      mana: '🪄 Hechizo',
      agility: '🤸‍♂️ Agilidad',
      darkcrystal: '♠️ Cristal Oscuro',
      iron: lenguajeGB.eHierro(),
      rock: lenguajeGB.eRoca(),
      potion: lenguajeGB.ePocion(),
      superior: '💼 Superior',
      robo: '🚔 Robo',
      upgrader: '🧰 Aumentar Mejora',
      wood: lenguajeGB.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza',
      arc: '🏹 Arco',
      armor: '🥼 Armadura',
      bow: '🏹 Super Arco',
      pickaxe: '⛏️ Pico',
      sword: lenguajeGB.eEspada(),
      
      common: lenguajeGB.eCComun(),
      uncoommon: lenguajeGB.ePComun(),
      mythic: lenguajeGB.eCMistica(),
      legendary: lenguajeGB.eClegendaria(),
      petFood: lenguajeGB.eAMascots(), //?
      pet: lenguajeGB.eCMascota(),//?
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      ayam: '🐓 Pollo',
      babi: '🐖 Puerco',
      Jabali: '🐗 Jabalí',
      bull: '🐃 Toro',    
      buaya: '🐊 Cocodrilo',    
      cat: lenguajeGB.eGato(),    
      centaur: lenguajeGB.eCentauro(),
      chicken: '🐓 Pollo',
      cow: '🐄 Vaca', 
      dog: lenguajeGB.ePerro(),
      dragon: lenguajeGB.eDragon(),
      elephant: '🐘 Elefante',
      fox: lenguajeGB.eZorro(),
      giraffe: '🦒 Jirafa',
      griffin: lenguajeGB.eAve(), //Mascota : Griffin',
      horse: lenguajeGB.eCaballo(),
      kambing: '🐐 Cabra',
      kerbau: '🐃 Búfalo',
      lion: '🦁 León',
      money: lenguajeGB.eGataCoins(),
      monyet: '🐒 Mono',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente',
      phonix: '🕊️ Fénix',
      rhinoceros: '🦏 Rinoceronte',
      wolf: lenguajeGB.eLobo(),
      tiger: '🐅 Tigre',
      cumi: '🦑 Calamar',
      udang: '🦐 Camarón',
      ikan: '🐟 Pez',
      
      fideos: '🍝 Fideos',
      ramuan: '🧪 Ingrediente NOVA',
      knife: '🔪 Cuchillo'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

global.rpgg = { //Solo emojis 
  emoticon(string) {
    string = string.toLowerCase()
    let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '💳',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
    }
    let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emott[results[0][0]]
  }
}


global.rpgshop = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emottt = {
      exp: lenguajeGB.eExp(), limit: lenguajeGB.eDiamante(), diamond: lenguajeGB.eDiamantePlus(), joincount: lenguajeGB.eToken(),
      emerald: lenguajeGB.eEsmeralda(), berlian: lenguajeGB.eJoya(), kyubi: lenguajeGB.eMagia(), gold: lenguajeGB.eOro(),
      money: lenguajeGB.eGataCoins(), tiketcoin: lenguajeGB.eGataTickers(), stamina: lenguajeGB.eEnergia(),
            
      potion: lenguajeGB.ePocion(), aqua: lenguajeGB.eAgua(), trash: lenguajeGB.eBasura(), wood: lenguajeGB.eMadera(),
      rock: lenguajeGB.eRoca(), batu: lenguajeGB.ePiedra(), string: lenguajeGB.eCuerda(), iron: lenguajeGB.eHierro(),
      coal: lenguajeGB.eCarbon(), botol: lenguajeGB.eBotella(), kaleng: lenguajeGB.eLata(), kardus: lenguajeGB.eCarton(),
      
      eleksirb: lenguajeGB.eEletric(), emasbatang: lenguajeGB.eBarraOro(), emasbiasa: lenguajeGB.eOroComun(), rubah: lenguajeGB.eZorroG(),
      sampah: lenguajeGB.eBasuraG(), serigala: lenguajeGB.eLoboG(), kayu: lenguajeGB.eMaderaG(), sword: lenguajeGB.eEspada(),
      umpan: lenguajeGB.eCarnada(), healtmonster: lenguajeGB.eBillete(), emas: lenguajeGB.ePinata(), pancingan: lenguajeGB.eGancho(),
      pancing: lenguajeGB.eCanaPescar(),
       
      common: lenguajeGB.eCComun(), uncoommon: lenguajeGB.ePComun(), mythic: lenguajeGB.eCMistica(),
      pet: lenguajeGB.eCMascota(),//?
      gardenboxs: lenguajeGB.eCJardineria(),//?
      legendary: lenguajeGB.eClegendaria(),
      
      anggur: lenguajeGB.eUva(), apel: lenguajeGB.eManzana(), jeruk: lenguajeGB.eNaranja(), mangga: lenguajeGB.eMango(), pisang: lenguajeGB.ePlatano(),
      
      bibitanggur: lenguajeGB.eSUva(), bibitapel: lenguajeGB.eSManzana(), bibitjeruk: lenguajeGB.eSNaranja(), bibitmangga: lenguajeGB.eSMango(), bibitpisang: lenguajeGB.eSPlatano(),
      
      centaur: lenguajeGB.eCentauro(), griffin: lenguajeGB.eAve(), kucing: lenguajeGB.eGato(), naga: lenguajeGB.eDragon(),
      fox: lenguajeGB.eZorro(), kuda: lenguajeGB.eCaballo(), phonix: lenguajeGB.eFenix(), wolf: lenguajeGB.eLobo(),
      anjing: lenguajeGB.ePerro(),
 
      petFood: lenguajeGB.eAMascots(), //?
      makanancentaur: lenguajeGB.eCCentauro(), makanangriffin: lenguajeGB.eCAve(),
      makanankyubi: lenguajeGB.eCMagica(), makanannaga: lenguajeGB.eCDragon(), makananpet: lenguajeGB.eACaballo(), makananphonix: lenguajeGB.eCFenix()
    }
    let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emottt[results[0][0]]
  }
}

global.rpgshopp = { //Tienda
  emoticon(string) {
    string = string.toLowerCase()
    let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
    }
    let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emotttt[results[0][0]]
  }
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
