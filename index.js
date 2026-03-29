const mineflayer = require('mineflayer');
const bot = mineflayer.createBot({
    host: 'ADRESIN.aternos.me', // Kendi IP'ni yaz!
    username: 'Mirac_Bot',
    version: "1.20.1"
});

bot.on('spawn', () => {
    console.log("✅ Mirac_Bot raylarda, manzarayı izliyor!");
    setInterval(() => {
        bot.look(Math.random() * 6.28, (Math.random() - 0.5) * 3.14);
    }, 20000); // 20 saniyede bir etrafa bak
});

bot.on('end', () => setTimeout(() => process.exit(), 5000)); // Kapansa da Render otomatik restart atar
