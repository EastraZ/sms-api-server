const express = require('express');
const app = express();

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
    res.json({ status: "error", message: error.message });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send('SMS API Server działa!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
