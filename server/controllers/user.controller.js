import User from '../model/user.model.js'


export const registerUser= async(req, res)=>{
  const userdata = req.body;
  try {

    const datares = await User.create(userdata);
    res.status(201).json({message: "User created successfully",})

    
  } catch (error) {
    res.status(400).json({message: error.message})
    
  }
 
  
  
     
}

export const loginUser =(req, res)=>{


}