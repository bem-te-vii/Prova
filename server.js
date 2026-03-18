const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve os arquivos estáticos que estão na pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Classe que simula a leitura de hardware
class HardwareEngine {
    getStatus() {
        return {
            cpu: Math.floor(Math.random() * 100),
            ram: (Math.random() * 16).toFixed(1), // Simula GB com uma casa decimal
            temperature: Math.floor(Math.random() * (90 - 30) + 30)
        };
    }
}

const engine = new HardwareEngine();

// Rota da API para o Frontend consultar
app.get('/api/status', (req, res) => {
    res.json(engine.getStatus());
});

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});