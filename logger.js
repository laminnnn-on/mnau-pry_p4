import { EventEmitter } from 'events';
import chalk from 'chalk';

const logger = new EventEmitter();

logger.on('log', ({ level, message }) => {
  const time = new Date().toLocaleString('uk-UA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const levelUpper = level.toUpperCase();
  let coloredMessage;

  switch (level.toLowerCase()) {
    case 'info':
      coloredMessage = chalk.green(`[${time}] INFO: ${message}`);
      break;
    case 'warning':
      coloredMessage = chalk.yellow(`[${time}] WARNING: ${message}`);
      break;
    case 'error':
      coloredMessage = chalk.red(`[${time}] ERROR: ${message}`);
      break;
    default:
      coloredMessage = chalk.white(`[${time}] ${levelUpper}: ${message}`);
  }

  console.log(coloredMessage);
});

export default logger;
