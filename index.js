const express = require('express');
const mineflayer = require('mineflayer');

const app = express();
const PORT = process.env.PORT || 10000;

// Render'ın botu açık tutması için gereken Web Sunucusu
app.get('/', (req, res) => {
  res.send('Mirac_Bot 7/24 Aktif ve Zıplıyor!');
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda başarıyla başlatıldı.`);
});

// --- MINEFLAYER BOT AYARLARI ---

const botArgs = {
  host: 'trmanj.aternos.me',
  port: 59562,
  username: 'Mirac_Bot',
  version: '1.21.4'
};

let bot;

function createBot() {
  bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('>> Mirac_Bot sunucuya giriş yaptı!');
    // Botun Aternos'tan atılmaması için sürekli zıplama (Anti-AFK)
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);
    }, 5000);
  });

  bot.on('end', () => {
    console.log('>> Bot sunucudan çıktı, 10 saniye sonra tekrar bağlanacak...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', (err) => {
    console.log(`>> Hata oluştu: ${err}`);
  });
}

createBot();

