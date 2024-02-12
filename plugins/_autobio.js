let handler = m => m;
handler.all = async function (m) {
    let setting = global.db.data.settings[this.user.jid];
	
    let _uptime = process.uptime() * 1000;
    let _muptime;
    if (process.send) { 
        process.send('uptime');
        _muptime = await new Promise(resolve => { 
            process.once('message', resolve);
            setTimeout(resolve, 7000); 
        }) * 1000;
    }

    let uptime = clockString(_uptime);
    let bio = `⏤͟͞🪀 SodicaBot v${global.vs} 📌 usá .registrar 📂`;
    await this.updateProfileStatus(bio).catch(_ => _);
    setting.status = new Date() * 1;
}

// Actualiza la bio cada 30 minutos
setInterval(async () => {
    let handlerInstance = { // Simula un objeto 'this' para la función handler
        updateProfileStatus: async function (bio) {
            // Implementa aquí la lógica para actualizar el perfil
        }
    };
    await handler.all.call(handlerInstance); // Ejecuta la función de actualización de la bio
}, 100 * 60 * 1000); // 30 minutos en milisegundos

export default handler;

function clockString(ms) {
    let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [d, ' » ', h, ' ・ ', m, ' ・ ', s].map(v => v.toString().padStart(2, 0)).join('');
}
