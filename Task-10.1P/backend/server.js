import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5000;

// ✅ Proper CORS setup
app.use(cors({
  origin: "http://localhost:3000", // allow React dev server
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password"
  },
});

app.post("/api/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await transporter.sendMail({
      from: '"DEV@Deakin" <your-email@gmail.com>',
      to: email,
      subject: "Welcome to DEV@Deakin!",
      text: "Thanks for subscribing to our newsletter 🎉",
      html: "<h3>Welcome to DEV@Deakin!</h3><p>We’re excited to have you 🎉</p>",
    });

    res.status(200).json({ message: "Welcome email sent!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
