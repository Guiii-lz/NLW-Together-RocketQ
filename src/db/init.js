const Database = require('./config');

const initDb = {
    async init(){ //async depende de await, não existe um sem o outro
        const db = await Database() //await espera retornar resultado para ir para próxima linha de comando garantindo que o db terá as informações necessárias

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            password TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
        )`);
        
        await db.close()
    }
}

initDb.init();



