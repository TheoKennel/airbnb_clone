import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}));

app.get('/test', (req,res) => {
    res.json('test ok');
});
//fva9xH4X4JwjkwPL
app.post('/register', (req,res) => {
    const {name,email,password} = req.body;
    res.json({name,email,password});
});

app.listen(4000);

