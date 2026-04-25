const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Exercise 3.1</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        .container {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 GitHub Actions работает!</h1>
        <p>Это Node.js приложение</p>
        <p>Автоматически собралось через CI/CD</p>
        <p><strong>Версия:</strong> 1.0.0</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});