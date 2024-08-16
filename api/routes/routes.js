import express from "express"
import {creatUsers, getUsers} from "../controlers/user.js"

const useRouters = express.Router()

useRouters.get("/", getUsers);

useRouters.post("/", creatUsers)



export default useRouters;