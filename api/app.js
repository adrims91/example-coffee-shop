const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./router/authRoutes');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());
app.use(authRoutes);


const run = async () => {
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
    try {
        await mongoose.connect(process.env.MONGODB_URI, clientOptions)
        console.log('MongoDB connected.')
    }catch(error) {
        console.error('Error connecting to MongoDB', error.message)
    }
}
(async () => {
    await run();

    app.listen(process.env.PORT, () => {
        console.log(`Servidor iniciado en ${process.env.PORT}`);
    });
})();