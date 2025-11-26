const express = require('express');
const cors = require('cors');
const app = express();

// WŁĄCZ CORS - pozwala na połączenia z VoiceFlow
app.use(cors());
app.use(express.json());

// Endpoint do wysyłki SMS
app.post('/send-sms', async (req, res) => {
  try {
    const { firma, telefony, wiadomosc } = req.body;
    
    console.log('=== NOWE ZAMÓWIENIE SMS ===');
    console.log('Firma:', firma);
    console.log('Numery:', telefony);
    console.log('Wiadomość:', wiadomosc);
    console.log('========================');
    
    // NA RAZIE TYLKO LOGUJEMY - potem dodamy Twilio
    res.json({ 
      status: "success", 
      message: `PRZYJĘTO: ${firma}, SMSy: ${telefony.length}`,
      wyslane: telefony.length
    });
    
  } catch (error) {
    console.error('BŁĄD:', error);
    res.json({ status: "error", message: error.message });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('SMS API Server działa z CORS!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});