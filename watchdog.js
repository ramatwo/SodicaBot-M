import fs from 'fs';


// Ruta al archivo database.json
const databasePath = 'database.json';

// Función para corregir los valores negativos en el archivo
function corregirValoresNegativos() {
    // Leer el contenido del archivo database.json
    fs.readFile(databasePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        try {
            // Parsear el contenido como objeto JSON
            const database = JSON.parse(data);

            // Verificar si "limit" es negativo y corregirlo
            if (database.limit < 0) {
                database.limit = Math.abs(database.limit);
            }

            // Verificar si "money" es negativo y corregirlo
            if (database.money < 0) {
                database.money = Math.abs(database.money);
            }

            // Escribir los cambios de vuelta al archivo
            fs.writeFile(databasePath, JSON.stringify(database, null, 2), 'utf8', (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo:', err);
                    return;
                }
                console.log('Valores negativos corregidos correctamente.');
            });
        } catch (error) {
            console.error('Error al parsear el contenido del archivo:', error);
        }
    });
}

// Llamar a la función para corregir los valores negativos
corregirValoresNegativos();
