import fetch from 'node-fetch';
import gpt from 'api-dylux';

const OPENAI_API_KEY = 'GataDios';  // Reemplaza con tu clave API de OpenAI

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw `*❗️∫ MAL*\n\n...`;  // Mensaje de error más descriptivo
  }

  try {
    await conn.sendPresenceUpdate('composing', m.chat);

    // ChatGpt
    let syms = `Actuarás como un Bot de WhatsApp...`;
    let res = await gpt.ChatGpt(text, syms);
    await m.reply(res.text);
  } catch (error) {
    console.error('Error en ChatGpt:', error);

    try {
      // Alternativa: Lolhuman API
      let tioress = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=${OPENAI_API_KEY}&text=${text}`);
      let hasill = await tioress.json();
      m.reply(`${hasill.result}`.trim());
    } catch (apiError) {
      console.error('Error en Lolhuman API:', apiError);
      // Manejar otros errores o enviar un mensaje genérico de error
      m.reply('Se produjo un error al procesar la solicitud.');
    }
  }
};

handler.command = ['openai', 'chatgpt', 'ia', 'bot'];
export default handler;
handler.register = true;
handler.premium = true