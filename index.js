const express = require('express');
const mineflayer = require('mineflayer');
const app = express();

app.get('/', (req, res) => res.send('Sistem Yeniden Dogdu!'));
app.listen(3000, '0.0.0.0');

const bot = mineflayer.createBot({
  host: 'trmanj.aternos.me',
  port: 59562,
  username: 'Mirac_Bot',
  version: false,
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('✅ Bot basariyla girdi!');
});

bot.on('error', (err) => console.log('Hata: ' + err.message));
bot.on('end', () => process.exit());
bot.on('end', () => {
    console.log('Bağlantı koptu, 15 saniye sonra diriliyorum...');
    setTimeout(() => { process.exit(); }, 15000); 
});
