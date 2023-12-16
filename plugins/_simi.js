import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
    let chat = global.db.data.chats[m.chat]
    if (chat.simi) {
        if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let textodem = m.text
        try {
            await conn.sendPresenceUpdate('composing', m.chat)
            let ressimi = await fetch('https://wsapi.simsimi.com/190410/talk', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': '5B~p1lkYL.gU48IXiKJM4HPP~Js9e19-ZOBfdwIv', // Reemplaza con tu API Key
                },
                body: JSON.stringify({
                    "utext": m.text,
                    "lang": "es"
                }),
            })
            let data = await ressimi.json();
            if (data.status === 200) return m.reply(data.atext) // Solo envía la parte 'atext'
        } catch (error) {
            console.error(error)
        }

        // Si hay un error o la respuesta no es la esperada, puedes agregar tu lógica de fallback aquí
        let reis = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + textodem)
        let resu = await reis.json()
        let nama = m.pushName || '1'
        let api = await fetch("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + nama + "&msg=" + resu[0][0][0])
        let res = await api.json()
        let reis2 = await fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + res.cnt)
        let resu2 = await reis2.json()
        await m.reply(resu2[0][0][0])
    }
}

export default handler
handler.command = /^(simi|chat)$/i
handler.register = true
