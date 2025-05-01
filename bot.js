const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_BOT_TOKEN' на токен, полученный от @BotFather
const token = '8020815906:AAG71XKuQBcJVtW-wwpliwI42ayJe1Ua4D4';
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Привет! Я простой Telegram бот. Отправь мне /help, чтобы узнать команды.');
});

// Обработчик команды /help
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Доступные команды:\n/start - начать общение\n/help - помощь\n/echo [текст] - повторю твой текст');
});

// Обработчик команды /echo
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; // текст после /echo
  bot.sendMessage(chatId, `Ты написал: ${resp}`);
});

// Обработчик обычных сообщений (не команд)
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (!msg.text.startsWith('/')) { // если это не команда
    bot.sendMessage(chatId, 'Я не понимаю. Попробуй /help');
  }
});

console.log('Бот запущен...');
