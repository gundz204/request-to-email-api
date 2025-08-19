const express = require('express');
const dotenv = require('dotenv');

// Load env dulu
dotenv.config();

const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Baru connect ke DB
connectDB();

const app = express();
app.use(bodyParser.json());

const dataRequestRoutes = require('./routes/dataRequestRoutes');
app.use('/api/data-request', dataRequestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
