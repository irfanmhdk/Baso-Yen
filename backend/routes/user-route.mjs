import express from "express";
import { 
    getUser,
    getUserById,
    createUser,
    updUser,
    delUser,
    loginUser
} from "../controllers/user-controller.mjs";

const UserRouter = express.Router();

UserRouter.get('/users', getUser);
UserRouter.get('/users/:id', getUserById);
UserRouter.post('/users', createUser);
UserRouter.patch('/users/:id', updUser);
UserRouter.delete('/users/:id', delUser);
UserRouter.post('/login', loginUser);

export default UserRouter;