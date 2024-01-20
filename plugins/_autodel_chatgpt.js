const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000;

async function deleteInactiveUserData(sender) {
  const user = global.chatgpt.data.users[sender];

  if (user && (Date.now() - user.lastUpdate > INACTIVITY_TIMEOUT_MS)) {
    delete global.chatgpt.data.users[sender];
    // console.log(`Datos del usuario ${sender} eliminados después de ${INACTIVITY_TIMEOUT_MS / 1000 / 60} minutos de inactividad.`);
  }
}

export async function all(m) {
  const sender = m.sender;
  let user = global.chatgpt.data.users[sender];

  if (user) {
    user.lastUpdate = Date.now();
    global.chatgpt.data.users[sender] = user;
  } else {
    return; // Si no existe el usuario, no hace nada
  }

  setTimeout(() => deleteInactiveUserData(sender), INACTIVITY_TIMEOUT_MS);
}
