const userService = require("../services/auth.service.js")
const register = async(req,res)=>{
    try{
        console.log(req.body);
        const {username,email,password,role}=req.body;
        const user = await userService.createUser({username,email,password,role});
        res.status(201).json({ success: true, data: user });
    }
    catch(error){
        if (error.message === "Email is already taken") {
            res.status(400).json({ success: false, message: error.message });
        } else {
            console.log(error.message)
            res.status(500).json({ success: false, message: error.message });
        }
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const {token,user}=await userService.login({email,password});

        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        if(error.message==='Invalid credentials'){
            return res.status(401).json({ message: 'Invalid credentials'});
        }
        res.status(500).json({ message: 'Login failed', error });
    }
};

module.exports = {register,login}