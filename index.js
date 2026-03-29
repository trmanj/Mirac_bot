const mineflayer = require('mineflayer');
const http = require('http');

// Render'ı uyanık tutan servis
http.createServer((req, res) => {
    res.write('Mirac Sistemi Aktif!');
    res.end();
}).listen(3000);

// BOT 1: Mirac_Bot
const bot1 = mineflayer.createBot({
    host: 'Trmanj.aternos.me',
    port: 59562,
    username: 'Mirac_Bot',
    version: '1.20.1' // Buraya sunucunun tam sürümünü yazarsan daha sağlam olur
});

bot1.on('spawn', () => console.log(">> [OK] Mirac_Bot girdi!"));
bot1.on('end', () => setTimeout(() => process.exit(), 5000)); // Hata verirse servisi restart atar

// BOT 2: Mirac_Olumsuz (30 saniye sonra)
setTimeout(() => {
    const bot2 = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Olumsuz',
        version: '1.20.1'
    });
    bot2.on('spawn', () => console.log(">> [OK] Mirac_Olumsuz girdi!"));
    bot2.on('end', () => setTimeout(() => process.exit(), 5000));
}, 30000);
