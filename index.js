import { join, dirname } from 'path'
import { createRequire } from "module";
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
//import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts';
//import chalk from "chalk"
import { createInterface } from 'readline'
import yargs from 'yargs'
const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname) 
const { name, author } = require(join(__dirname, './package.json')) 
const { say } = cfonts
const rl = createInterface(process.stdin, process.stdout)


//iniciar pagina para hacer ping *--------------------------*
const http = require('http');

// Crear un servidor HTTP que escuche en el puerto 5657
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('sodicabot en linea.\n');
});

server.listen(5657, '127.0.0.1', () => {
  console.log('El servidor está corriendo en http://127.0.0.1:5657/');
});

// Mantener el proceso principal en ejecución para mantener el servidor activo
process.stdin.resume();







//*--------------------------**--------------------------*





const { exec } = require('child_process');

// Ruta completa al ejecutable de ngrok
const ngrokPath = 'C:/xampp/ngrok.exe';

// Comandos a ejecutar en CMD
const commands = [
  'cd C:\\xampp',
  `${ngrokPath} config add-authtoken 2bvHiBG6YpjgXkzyU8qacryaSfi_8a5EeDupCCKryrYGz97Xg`,
  `${ngrokPath} http --domain=pigeon-steady-quail.ngrok-free.app 5657`
];

// Ejecutar los comandos uno por uno
commands.forEach(command => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el comando: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error en la salida estándar: ${stderr}`);
      return;
    }
    console.log(`Resultado del comando: ${stdout}`);
  });
});





//*--------------------------**--------------------------**--------------------------*









say('Sodica\nBot', {
font: 'chrome',
align: 'center',
gradient: ['red', 'magenta']})
say(`By SodicaCrew`, {
font: 'console',
align: 'center',
gradient: ['red', 'magenta']})

var isRunning = false
/**
* Start a js file
* @param {String} file `path/to/file`
*/
function start(file) {
if (isRunning) return
isRunning = true
let args = [join(__dirname, file), ...process.argv.slice(2)]
  
setupMaster({
exec: args[0],
args: args.slice(1), })
let p = fork()
p.on('message', data => {
switch (data) {
case 'reset':
p.process.kill()
isRunning = false
start.apply(this, arguments)
break
case 'uptime':
p.send(process.uptime())
break }})
p.on('exit', (_, code) => {
isRunning = false
console.error('⚠️ | Error Inesperado.', code)
  
p.process.kill()
isRunning = false
start.apply(this, arguments)
  
if (process.env.pm_id) {
process.exit(1)
} else {
process.exit()
}
})
let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
if (!opts['test'])
if (!rl.listenerCount()) rl.on('line', line => {
p.emit('message', line.trim())})}
start('main.js')
const { spawn } = require('child_process');
const path = require('path');

