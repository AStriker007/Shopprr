const User=require('../models/userModel')
const asyncHandler=require('express-async-handler')
const authUser=asyncHandler(async(req,res)=>{
    const {email,password} =req.body
    const user=await User.findOne({email:email})
    if(user && (await user.matchPassword(password))){
            return res.json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token:null
            })   
    }
    else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

exports.authUser=authUser