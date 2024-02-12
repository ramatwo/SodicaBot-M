const fetch = require('node-fetch');

const api_key = "u1009115-235c1d5dacd7c2e456d37c95";
const monitor_id = "796308909"; // Reemplaza esto con el ID del monitor que deseas verificar

const url = "https://api.uptimerobot.com/v2/getMonitors";

const payload = {
    api_key: api_key,
    monitors: monitor_id,
    response_times: 1
};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' }
})
.then(response => response.json())
.then(data => {
    const speed = data.monitors[0].response_times[0].value;
    console.log(`La velocidad de la IP que estás monitorizando es de ${speed} ms.`);
})
.catch(error => console.error('Error:', error));
