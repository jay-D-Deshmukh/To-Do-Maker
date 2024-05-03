import User from "../model/user.model.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const {username, email, password} = req.body;
  try {
    const hashPassword = await bcrypt.hash(password,10)
    const datares = await User.create({
      username,
      email,
      password: hashPassword
    });
    console.log(datares)
    
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loginUser = async(req, res) => {

  const {email, password} = req.body;
  try {
    const user = await User.findOne({email});
    if(!user){
      return res.status(401).json({message: "Invalid credentials"});
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(401).json({message:'Invalid credentials'})
    }
   res.status(200).json({message:"Login successfull"})
  
    
    
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
