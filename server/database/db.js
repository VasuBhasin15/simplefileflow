import mongoose from 'mongoose';
const DBConnection=async ()=>{
    const MONODB_URI='';
    try{
       await mongoose.connect(MONODB_URI,{useNewUrlParser:true});
        console.log('Database Connected Successfully');
    }catch(error)
    {
        console.error('Error while connecting to database',error.message);
    }
}
export default DBConnection;