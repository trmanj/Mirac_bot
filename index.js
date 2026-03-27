const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Bot 7/24 Aktif!");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda uyanık!`);
});

const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'trmanj.aternos.me',
    port: 59562,
    username: 'Mirac_Bot',
    version: '1.21.4'
  });

  bot.on('spawn', () => {
    console.log(">> Bot sunucuya başarıyla giriş yaptı!");
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 5000);
  });

  bot.on('error', (err) => console.log("Hata: ", err.message));
  bot.on('end', () => {
    console.log("Bağlantı kesildi. 10 saniye sonra tekrar deniyorum...");
    setTimeout(() => createBot(), 10000);
  });
}

createBot();
    
