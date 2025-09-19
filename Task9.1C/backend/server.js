require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postmark = require('postmark');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (!process.env.POSTMARK_SERVER_TOKEN || !process.env.FROM_EMAIL) {
  console.warn("⚠️ Missing Postmark credentials in .env");
}
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email) return res.status(400).json({ error: "Valid email required" });

    await client.sendEmail({
      From: process.env.FROM_EMAIL,
      To: email,
      Subject: "Welcome to DEV@Deakin!",
      HtmlBody: `<h2>Welcome to DEV@Deakin 🎉</h2><p>Thanks for joining!</p>`
    });

    res.json({ ok: true, message: "Welcome email sent." });
  } catch (err) {
    console.error("Postmark error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
