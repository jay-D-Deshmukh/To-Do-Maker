import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:[true , "Email alrady taken"]
    },
    password:{
        type:String,
        require:true,

    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const User = mongoose.model("User",userSchema);
export default User;
