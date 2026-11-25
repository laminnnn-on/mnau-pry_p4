import express from 'express';
import { EventEmitter } from 'events';
import chalk from 'chalk';
import logger from './logger.js';

const app = express();
const emitter = new EventEmitter();
const PORT = 3000;

// Слухач подій newRequest
emitter.on('newRequest', (url) => {
  console.log(chalk.blue(`[Event] New request received: ${url}`));
});

// Головна сторінка
app.get('/', (req, res) => {
  emitter.emit('newRequest', req.url);
  logger.emit('log', { level: 'info', message: 'GET / accessed' });
  res.send('EventEmitter integrated with Express!');
});

// Інформаційна сторінка
app.get('/info', (req, res) => {
  emitter.emit('newRequest', req.url);
  logger.emit('log', { level: 'info', message: 'GET /info accessed' });
  console.log(chalk.green('Info endpoint accessed!'));
  res.send('Information page logged in green color!');
});

// Тестова помилка сервера
app.get('/error', (req, res) => {
  emitter.emit('newRequest', req.url);
  logger.emit('log', { level: 'error', message: 'Test internal server error' });
  res.status(500).send('500 - Internal server error');
});

// Обробка невідомих маршрутів (404)
app.use((req, res) => {
  emitter.emit('newRequest', req.url);
  logger.emit('log', { level: 'warning', message: 'Unknown route requested' });
  res.status(404).send('404 - Page not found');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(chalk.yellowBright(`🚀 Server running at http://localhost:${PORT}`));
  logger.emit('log', { level: 'info', message: 'Server started successfully' });
});
