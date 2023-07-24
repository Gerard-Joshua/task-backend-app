const mongoose = require('mongoose');

const connectDB = async () => {

    // MongoDB connection String for MongoDB Version 5
    /*try{
        
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }*/

    // MongoDB connection String for MongoDB Version 6
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB Connected !!!`))
    .catch((e) => console.log(`MongoDB error: `, e));
}

module.exports = connectDB;
