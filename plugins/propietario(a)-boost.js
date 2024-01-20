import { performance } from 'perf_hooks';
import v8 from 'v8';

let handler = async (m, { conn }) => {
  let start = `*🔄➭⛃ ∫ Acelerando, esperá...*`;
  const { key } = await conn.sendMessage(m.chat, { text: start }, { quoted: m });

  // Liberar memoria RAM en Node.js
  if (global.gc) {
    global.gc(); // Forzar la recolección de basura
  } else {
    console.warn('Recolección de basura no habilitada. Ejecuta el script con la bandera --expose-gc');
  }

  // Liberar memoria RAM usando v8
  v8.setFlagsFromString('--max_old_space_size=256'); // Ajusta el límite de la memoria heap según tus necesidades

  let old = performance.now();
  let neww = performance.now();
  let speed = `${neww - old}`;
  let finish = `*🚀➭✅ ∫ Bot acelerado correctamente.*`;
  await conn.sendMessage(m.chat, { text: finish, edit: key });
}

handler.help = ['boost', 'refresh'];
handler.tags = ['info'];
handler.command = /^boost|refresh/i;
handler.owner = true;
handler.fail = null;
export default handler;
