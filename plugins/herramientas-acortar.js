import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙋𝘼𝙍𝘼 𝘼𝘾𝙊𝙍𝙏𝘼𝙍\n\n𝙀𝙉𝙏𝙀𝙍 𝘼 𝙇𝙄𝙉𝙆 𝙏𝙊 𝙎𝙃𝙊𝙍𝙏𝙀𝙉`;

    // Acortar usando Bitly
    let bitlyResponse = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': '109ebd91de889f935447c6bfd097ab5cd010e2a5',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "long_url": text, "domain": "bit.ly" })
    });
    let bitlyJson = await bitlyResponse.json();

    let hasil = `✅ 𝙎𝙀 𝙍𝙀𝘼𝙇𝙄𝙕𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊\n𝙄𝙏 𝙒𝘼𝙎 𝙎𝙐𝘾𝘾𝙀𝙎𝙎𝙁𝙐𝙇\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘼𝙉𝙏𝙀𝙎 | 𝘽𝙀𝙁𝙊𝙍𝙀 𝙇𝙄𝙉𝙆\n*${text}*\n\n𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝘽𝙄𝙏𝙇𝙔 | 𝙇𝙄𝙉𝙆 𝙉𝙊𝙒\n*${bitlyJson.id}*`.trim();
    m.reply(hasil);
};

handler.help = ['bitly', 'acortar'].map(v => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(bitly|acortar)$/i;
handler.fail = null;

export default handler;
handler.register = true