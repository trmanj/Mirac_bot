const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
    res.write('Mirac Sistemi - Cift Bot Savasci!');
    res.end();
}).listen(3000);

// BOT 1: Klasik Mirac_Bot
function startBot1() {
    const bot1 = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Bot',
        version: false
    });
    bot1.on('spawn', () => console.log(">> Mirac_Bot ICERIDE!"));
    bot1.on('end', () => setTimeout(startBot1, 15000));
}

// BOT 2: Mirac_Olumsuz (İsmini karışıklık olmasın diye koda sabitledik)
function startBot2() {
    const bot2 = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Olumsuz', 
        version: false
    });
    bot2.on('spawn', () => console.log(">> Mirac_Olumsuz ICERIDE!"));
    bot2.on('end', () => setTimeout(startBot2, 15000));
}

// Operasyonu Başlat
startBot1();
setTimeout(startBot2, 45000); // 45 saniye sonra ikinciyi sok ki "another location" hatası vermesin
