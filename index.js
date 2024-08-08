// importing  express 
const express = require('express');

const userRouter = require('./routers/userRouter');
const productrouter = require('./routers/productrouter');
//  initializing express
const app = express();
const port = 5000;
// middleware
app.use('/user', userRouter);
// middleware
app.use(express.json());
app.use('/user',UserRouter);




app.use('/product',productrouter);
// route or endpoint
app.get('/', (req, res) => {
    res.send('response from express');
}

);
app.get('/add', (req, res) => {
    res.send('response from add');
}

);
// get all 
app.get('/getall', (req, res) => {
    res.send('response from all');
}

);

// update
app.get('/update', (req, res) => {
    res.send('response from update');
}

);



app.listen(port, () => { console.log('server started') });