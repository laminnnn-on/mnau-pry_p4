# Практична робота №4

**Тема:** Налаштування проєкту Node.js: створення package.json, встановлення Express.js, використання EventEmitter.

## Мета роботи

Навчитися створювати та налаштовувати проєкти Node.js з використанням ES Modules, працювати з файлом package.json, встановлювати сторонні бібліотеки за допомогою npm, створювати вебсервер на Express.js, використовувати EventEmitter для обробки подій та бібліотеку Chalk для кольорового форматування повідомлень у консолі.

## Структура проєкту

```
mnau-pry_p4/
├── package.json
├── index.js          # Основний сервер Express + EventEmitter + Logger
├── events-demo.js    # Демонстрація EventEmitter
├── logger.js         # Власний модуль логування
└── README.md
```

## Встановлення та запуск

```bash
npm install
npm start
```

Сервер буде доступний за адресою: http://localhost:3000

### Додаткові команди

```bash
node events-demo.js   # Демонстрація EventEmitter
```

## Маршрути

| Маршрут   | Результат                              | Статус |
|-----------|----------------------------------------|--------|
| `/`       | EventEmitter integrated with Express!  | 200    |
| `/info`   | Information page logged in green color!| 200    |
| `/error`  | 500 - Internal server error            | 500    |
| будь-який інший | 404 - Page not found              | 404    |

## Приклад логування в консолі

```
🚀 Server running at http://localhost:3000
[24.11.2026, 21:40:15] INFO: Server started successfully
[Event] New request received: /
[24.11.2026, 21:40:22] INFO: GET / accessed
[Event] New request received: /info
[24.11.2026, 21:40:28] INFO: GET /info accessed
Info endpoint accessed!
[Event] New request received: /unknown
[24.11.2026, 21:40:35] WARNING: Unknown route requested
[Event] New request received: /error
[24.11.2026, 21:40:41] ERROR: Test internal server error
```

## Контрольні запитання

1. **Яку роль відіграє поле `"type": "module"` у package.json?**  
   Воно вказує Node.js використовувати систему ES Modules. Це дозволяє застосовувати сучасний синтаксис `import` та `export`.

2. **У чому різниця між CommonJS (require) та ES Modules (import)?**  
   - CommonJS використовує `require()` / `module.exports` (синхронне завантаження, класичний Node.js).  
   - ES Modules використовує `import` / `export` (стандарт ECMAScript, статичний аналіз, асинхронне завантаження).

3. **Як створити подію та підписатися на неї через EventEmitter?**  
   ```js
   import { EventEmitter } from 'events';
   const emitter = new EventEmitter();
   emitter.on('eventName', (data) => { /* обробник */ });
   emitter.emit('eventName', data);
   ```

4. **Для чого використовується бібліотека Chalk?**  
   Для кольорового форматування тексту в консолі Node.js (зелений — info, жовтий — warning, червоний — error тощо).

5. **Як додати власний скрипт у package.json?**  
   Додати в об'єкт `"scripts"`:
   ```json
   "scripts": {
     "start": "node index.js"
   }
   ```
   Запуск: `npm start`.

## Автор

Виконано в рамках практичної роботи з прикладного програмування.
