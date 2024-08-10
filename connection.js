const mongoose = require('mongoose');
const url="mongodb+srv://Larebfiroz:lareb0786@cluster0.qnm1t.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0"
// connect with to the database

// asynchronous - return a promise
mongoose.connect(url)
.then((result) => {
    console.log("connected to database");
    
})
.catch((err) => {
    console.log(err);
    
});