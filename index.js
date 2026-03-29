const mineflayer = require('mineflayer');
const http = require('http');

// Render'ı açık tutan ana motor
http.createServer((req, res) => {
    res.write('Mirac Bot Ordusu Aktif!');
    res.end();
}).listen(3000);

// BOT 1: Mirac_Bot (17 Saatlik Periyot)
function startMiracBot() {
    const bot1 = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Bot',
        version: false
    });

    bot1.on('spawn', () => {
        console.log(">> [OK] Mirac_Bot içeri sızdı, pistonu kaptı!");
        bot1.clearControlStates(); // Hatalı hareket paketlerini sıfırlar
    });

    bot1.on('end', () => {
        console.log("!! [HATA] Mirac_Bot düştü, 10sn sonra dönüyor...");
        setTimeout(startMiracBot, 10000);
    });

    // 17 Saat sonra tazeleme (61.200.000 ms)
    setInterval(() => {
        if (bot1.quit) bot1.quit();
    }, 61200000);
}

// BOT 2: Mirac_Olumsuz (31 Saatlik Periyot)
function startMiracOlumsuz() {
    const bot2 = mineflayer.createBot({
        host: 'Trmanj.aternos.me',
        port: 59562,
        username: 'Mirac_Olumsuz',
        version: false
    });

    bot2.on('spawn', () => {
        console.log(">> [OK] Mirac_Olumsuz içeri sızdı, nöbeti devraldı!");
        bot2.clearControlStates();
    });

    bot2.on('end', () => {
        console.log("!! [HATA] Mirac_Olumsuz düştü, 10sn sonra dönüyor...");
        setTimeout(startMiracOlumsuz, 10000);
    });

    // 31 Saat sonra tazeleme (111.600.000 ms)
    setInterval(() => {
        if (bot2.quit) bot2.quit();
    }, 111600000);
}

// Botları birbirinden bağımsız başlatıyoruz
startMiracBot();

setTimeout(() => {
    startMiracOlumsuz();
}, 60000); // İkinci botu 1 dakika sonra sokuyoruz ki sunucu "n'oluyor?" demesin.

