const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
app.get('/', (req, res) => res.send('Bot Sistemi Aktif!'));
app.listen(3000, '0.0.0.0');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'trmanj.aternos.me',
        port: 59562,                    // ← ATERNOS'TAN ŞU ANKİ PORTU KONTROL ET!
        username: 'Mirac_Bot',
        version: "1.21.4",              // ← BURAYI DEĞİŞTİR! (Paper sürümün neyse yaz)
        auth: 'offline',
        checkTimeoutInterval: 30000,
        hideErrors: false
    });

    bot.on('spawn', () => {
        console.log('✅ ZAFER! Mirac_Olumsuz oyuna sızdı!');
        
        // Opsan yaz, botu güçlendir
        // bot.chat('/effect give Mirac_Olumsuz minecraft:health_boost infinite 255');
        // bot.chat('/effect give Mirac_Olumsuz minecraft:regeneration infinite 255');
        // bot.chat('/effect give Mirac_Olumsuz minecraft:resistance infinite 255');
        
        // Basit AFK hareketi (Aternos kapatmasın diye)
        setInterval(() => {
            if (bot.entity) {
                bot.setControlState('jump', Math.random() > 0.6); // arada zıpla
            }
        }, 8000);
    });

    bot.on('error', (err) => {
        console.log('❌ Bağlantı Hatası: ' + err.message);
    });

    bot.on('end', () => {
        console.log('⚠️ Bağlantı koptu, 10sn sonra tekrar deniyorum...');
        setTimeout(createBot, 10000);
    });
}

createBot();
