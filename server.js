import express from 'express';
import cors from 'cors';
import { handleSearch } from './controllers/search.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send('success') })
app.put('/search', (req, res) => {handleSearch(req, res)});

app.listen(process.env.PORT, () => {
    console.log(`app is running on port ${process.env.PORT}`);
})