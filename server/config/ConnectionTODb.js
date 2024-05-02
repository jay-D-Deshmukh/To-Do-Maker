import mongoose from "mongoose";

const connectTODb =async(url)=>{
    try{

        const dataRes = await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        if(dataRes){
            console.log("Database connect ");
            
        }

    }catch(error){
        console.log("Error in connectiong to data base::",error);
    }
}
 
export default connectTODb;