const express = require('express');
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit');

require('dotenv').config();
const PORT  = process.env.PORT || 5000;

// Static files
app.use(express.static('public'));

// Enable CORS
app.use(cors());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter);
app.set('trust proxy', 1);

// Routes

app.use('/api', require('./routes/index')); // You can also use require('../routes') due to the same folder structure

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})