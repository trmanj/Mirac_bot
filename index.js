const mineflayer = require('mineflayer');

const botArgs = {
    host: 'trmanj.aternos.me',
    port: 39598, // Buranın Java portu olduğundan emin ol!
    username: 'Mirac_Bot',
    version: '1.21.1',
    auth: 'offline'
};

let bot;

function createBot() {
    if (bot) {
        bot.removeAllListeners(); // Eski dinleyicileri temizle
    }

    bot = mineflayer.createBot(botArgs);

    bot.on('login', () => {
        console.log('Bot başarıyla bağlandı!');
    });

    bot.on('spawn', () => {
        console.log('Bot oyunda ve aktif.');
    });

    // --- KRİTİK KISIM: ATILIRSA 10 SN SONRA GERİ GEL ---
    bot.on('end', () => {
        console.log('Bot sunucudan düştü veya atıldı. 10 saniye sonra tekrar denenecek...');
        setTimeout(createBot, 10000); // 10000ms = 10 saniye
    });

    bot.on('error', (err) => {
        console.log('Bir hata oluştu: ' + err);
        // Hata durumunda da bağlantı kopmuş olabilir, end olayı tetiklenmezse diye:
        if (err.code === 'ECONNREFUSED') {
            setTimeout(createBot, 10000);
        }
    });
}

// Botu ilk kez çalıştır
createBot();

// --- 5 DAKİKADA BİR TAZELEME DÖNGÜSÜ ---
setInterval(() => {
    console.log('5 dakika doldu, bağlantı tazeleniyor...');
    if (bot) {
        bot.quit(); // Çıkış yapınca yukarıdaki 'end' olayı tetiklenir ve 10 sn sonra girer
    } else {
        createBot();
    }
}, 300000); // 300,000ms = 5 dakika

// Render Keep-Alive
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Mirac_Bot 7/24 Koruma Altında!'));
app.listen(3000);
