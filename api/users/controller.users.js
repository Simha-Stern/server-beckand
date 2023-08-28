import userService from './service.users.js';

const getAllUsers = async (req, res) => {
    try {
        const {email, password} = req.query;
        const users = await userService.getAllUsers(email, password);
        if (users){
            res.status(200).json(users)
        }
    } catch (error) {
        console.error(error)
    }
};

const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, password} = req.query;
        const user = await userService.getUserById(id, email, password);
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ "message": "user not found" })

        }
    } catch (error) {
        console.error(error)
    }
};

const addUser = async(req, res) => {
    try{
        const newUser = req.body;
        const addUserRes = await userService.addUser(newUser)
        res.status(200).json({"message : user added successfuly!" : addUserRes})
    } catch (error){
        res.status(400).json({"error controller" : error})
    }
}

const loginUser = async (req, res) => {
    try{
        const {email} = req.body
        const {password} = req.body
        const userLogin = await userService.loginUser(email, password)
        res.status(200).json({"massage" : userLogin})
    }catch (error) {
        res.status(400).json({"massage" : error})
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, password} = req.query;
        const user = await userService.deleteUser(id, email, password);
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ "message": "user not found" })

        }
    } catch (error) {
        console.error(error)
    }
};

const userControler = {
    getAllUsers,
    getUserById,
    addUser,
    loginUser,
    deleteUser
};


export default userControler;




