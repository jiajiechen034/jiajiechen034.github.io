const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const { fetchCharacters } = require('./mysql.js');

app.get('/api/characters', async (req, res) => {
    try {
        const characters = await fetchCharacters();
        res.json(characters);
    } catch (error) {
        console.error('Error fetching characters:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


