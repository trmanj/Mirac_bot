const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Bot',
        version: '1.20.1' // Sunucu sürümün farklıysa burayı mutlaka düzelt!
    });

    bot.on('spawn', () => {
        console.log('>> Mirac_Bot sunucuya sızdı! Nöbet başladı.');
    });

    // --- KRİTİK: DÜŞERSE 5 SANİYEDE GERİ DÖN ---
    bot.on('end', () => {
        console.log('!! Bot koptu, 5 saniye içinde geri fırlıyor...');
        setTimeout(createBot, 5000); 
    });

    bot.on('error', (err) => {
        console.log('>> Hata oluştu: ' + err.message);
        setTimeout(createBot, 10000); // Hata varsa 10 saniye bekle
    });

    // --- PLANLI TAZELEME: 17 SAATTE BİR ---
    setInterval(() => {
        console.log('>> 17 saat doldu, bot tazelenmek için çıkış yapıyor...');
        bot.quit();
    }, 61200000); // 17 Saat = 61.200.000 ms
}

// Botu başlat
createBot();

// Render'ı ve Cron-job'u uyanık tutan sunucu (Port 3000)
const http = require('http');
http.createServer((req, res) => {
    res.write('Mirac_Bot 7/24 Aktif!');
    res.end();
}).listen(3000);
