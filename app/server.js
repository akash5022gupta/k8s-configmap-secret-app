const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'user';
const DB_PASS = process.env.DB_PASS || 'pass';

app.get('/', (req, res) => {
    res.send(`
        <h1>Kubernetes ConfigMap + Secret Demo</h1>
        <p>DB_HOST: ${DB_HOST}</p>
        <p>DB_USER: ${DB_USER}</p>
        <p>DB_PASS: ${DB_PASS}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
