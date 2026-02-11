import express from "express";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>HPA VPA Demo</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="card">
          <h1>🚀 HPA & VPA Demo</h1>
          <p><strong>Hostname:</strong> ${os.hostname()}</p>
          <p><strong>CPU Cores:</strong> ${os.cpus().length}</p>
          <p><strong>Total Memory:</strong> ${(os.totalmem() / 1024 / 1024).toFixed(0)} MB</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
