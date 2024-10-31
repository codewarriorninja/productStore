import express from 'express'
import { connectDB } from './config/dbConnection.js';
import router from './routes/Product.route.js';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors());
app.use('/products', router);
const port = process.env.PORT || 8080
const MONGODB_URL = process.env.MONGODB_URL;


connectDB(MONGODB_URL);
app.listen(port, () => {
    console.log(`server running at port ${port}`)
});

