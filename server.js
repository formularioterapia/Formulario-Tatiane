const express = require('express');
const { Resend } = require('resend');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const resend = new Resend('re_jazi4mtR_AJXeg9HVkNAShHj3nXBrqZt3');

app.post('/enviar', async (req, res) => {
    const { q1, q2, q3, q4 } = req.body;

await resend.emails.send({
        from: 'Formulario Terapêutico <onboarding@resend.dev>',
        to: ['formularioterapia@gmail.com'],
        subject: 'Novo formulário terapêutico preenchido 💗',
        html: `
            <div style="font-family: sans-serif; color: #333;">
                <h2>🧠 Novo formulário recebido</h2>
                
                <p><strong>1️⃣ Quando você pensa em alguém corajoso, quais características vêm à sua mente?</strong><br>
                ${q1}</p>

                <p><strong>2️⃣ Quais elementos do ambiente de trabalho despertam maior apego em você? Poderia listá-los?</strong><br>
                ${q2}</p>

                <p><strong>3️⃣ Você se considera uma pessoa amada? Se sim: quais pessoas demonstram isso para você? De que forma? Se não: quais motivos fazem você não se perceber como uma pessoa amada?</strong><br>
                ${q3}</p>

                <p><strong>4️⃣ Ao longo da sua história, quais experiências fortaleceram ou fragilizaram a sua percepção sobre a vida?</strong><br>
                ${q4}</p>
            </div>
        `
    });

    res.send(`
        <div style="font-family:Montserrat;text-align:center;padding:50px">
            <h2 style="color:#D08C9F">Respostas enviadas com sucesso 💗</h2>
        </div>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});