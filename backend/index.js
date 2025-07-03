require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required.' });
  // Mock AI response
  const mockResponses = [
    "Great question! Renewable energy includes solar, wind, and hydro power.",
    "Sustainability means meeting our needs without compromising future generations.",
    "Climate action involves reducing carbon emissions and protecting our planet.",
    `You said: "${message}". That's a very important topic!`
  ];
  const response = mockResponses[Math.floor(Math.random() * mockResponses.length)];
  res.json({ response });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});