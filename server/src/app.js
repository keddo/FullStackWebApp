const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT =  5000;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.post('/register', (req, res) => {
    res.send({message: `Hello ${req.body.email} Your User was registered! Have Fun!`});
});
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
});

