const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        await mongoose.connect(process.env.DB_CNN, 
        {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true}).catch(e => {console.log(e)});
        console.log('DB online');
    }catch(error){
        console.log(error);
        throw new Error('Error al inciar la conexion con la base de datos ver logs');        
    }
}

module.exports={
    dbConnection
}