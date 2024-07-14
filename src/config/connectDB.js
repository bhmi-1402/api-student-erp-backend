const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');   // Atlas URL
const { Client } = require('pg')

const connectdb = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, "connection error:"));
    db.once('open', () => {
        console.log("\nDB connected\nEnjoy Surfing");
    });
}

const connectPGDB = ()=>{
    const client = new Client("postgresql://Student%20ERP%20Test_owner:L2bo3jDcEYaq@ep-white-violet-a1x7wbqt.ap-southeast-1.aws.neon.tech/Student%20ERP%20Test?sslmode=require")
    client.connect(function(err) {
        if (err) throw err;
        console.log("POSTGRES Connected!");
    });      

    var query = client.query("select * from students",(err,res)=>{
        if(err){
            console.log(err);
        }else{
            console.log(res?.rows);
        }
    });
}

module.exports = {connectPGDB,connectdb};