let inventarios = {} // Objeto para almacenar los inventarios de los usuarios

let handler = async (m, { conn, args }) => {
    if (!args[0]) {
        await conn.reply(m.chat, `Debes especificar el modo de juego: C (creativo), S (supervivencia) o R (reset).`, m)
        return
    }

    let mode = args[0].toLowerCase()
    let user = global.db.data.users[m.sender]

    // Guardar el inventario actual del usuario
    if (!(m.sender in inventarios)) {
        inventarios[m.sender] = {
            money: user.money,
            limit: user.limit,
            gold: user.gold,
            exp: user.exp,
            level: user.level
        }
    }

    if (mode == 'c') { // Modo creativo
        user.money = 1000000000
        user.limit = 1000000000
        user.gold = 1000000000
        user.exp = 1000000000
        user.level = 1000

        conn.reply(m.chat, '*Modo de juego cambiado a creativo.*', m)
    } else if (mode == 's') { // Modo supervivencia
        if (m.sender in inventarios) {
            user.money = inventarios[m.sender].money
            user.limit = inventarios[m.sender].limit
            user.gold = inventarios[m.sender].gold
            user.exp = inventarios[m.sender].exp
            user.level = inventarios[m.sender].level

            delete inventarios[m.sender] // Eliminar el inventario guardado
            conn.reply(m.chat, '*Modo de juego cambiado a supervivencia.*', m)
        } else {
            conn.reply(m.chat, 'No se ha guardado ningún inventario previamente. Cambia a modo creativo primero.', m)
        }
    } else if (mode == 'r') { // Resetear inventario
        user.money = 1
        user.limit = 1
        user.gold = 1
        user.exp = 1
        user.level = 1

        if (m.sender in inventarios) {
            delete inventarios[m.sender] // Eliminar el inventario guardado
        }

        conn.reply(m.chat, '*Inventario reseteado.*', m)
    } else {
        conn.reply(m.chat, `Modo de juego "${mode}" no válido. Debes especificar C (creativo), S (supervivencia) o R (reset).`, m)
    }
}

handler.help = ['gamemode <C/S/R>']
handler.tags = ['owner']
handler.command = /^(gamemode)$/i
handler.rowner = true

export default handler