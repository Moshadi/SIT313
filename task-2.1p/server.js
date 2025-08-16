require('dotenv').config();
const express = require('express');
const cors = require('cors');
const postmark = require('postmark');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

if (!process.env.POSTMARK_SERVER_TOKEN || !process.env.FROM_EMAIL) {
  console.warn('⚠️  Missing POSTMARK_SERVER_TOKEN or FROM_EMAIL in .env. Emails will fail.');
}
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

const isEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body || {};
    if (!email || !isEmail(email)) return res.status(400).json({ error: 'Valid email is required.' });

    await client.sendEmail({
      From: process.env.FROM_EMAIL,
      To: email,
      Subject: 'Welcome to DEV@Deakin!',
      HtmlBody: `
        <div style="font-family:Arial,Helvetica,sans-serif">
          <h2>Welcome to DEV@Deakin 🎉</h2>
          <p>Thanks for joining! You’ll receive updates, tips, and community news.</p>
          <p>— DEV@Deakin Team</p>
        </div>
      `,
      MessageStream: process.env.POSTMARK_MESSAGE_STREAM || 'outbound'
    });

    res.json({ ok: true, message: 'Welcome email sent.' });
  } catch (err) {
    console.error('Postmark error:', err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
