import express from 'express';
import { loginUser, registerUser } from '../controllers/user.controller.js';

const routes = express.Router();

routes.post("/registerUser",registerUser);
routes.post("/loginUser",loginUser);

export default routes;
