// Configuração inicial
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();


// Forma de ler JSON / middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Rotas API
const personRoutes = require('./routes/personRoutes');

app.use('/person', personRoutes);


// Rota inicial / endpoint
app.get('/', (req, res) => {

    res.json({ message: 'Oi express!' });

});


// Entregar uma porta
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.set("strictQuery", false);

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.tejl9dc.mongodb.net/bancoapi?retryWrites=true&w=majority`
    )
    .then(() => {

        console.log("Conectado ao MongoDB!");
        app.listen(3000);

    })
    .catch((err) => console.log(err))


