import express from 'express';
import cors from 'cors';
const app = express();

app.get('/test', (req,res) => {
    res.json('test ok');
});

app.listen(4000);

