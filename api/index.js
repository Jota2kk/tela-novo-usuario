import express from "express";
import cors from "cors";
import useRouters from "./routes/routes.js";

const app = express()

app.use(express.json())
app.use(cors())
app.use("/", useRouters)

app.listen(5000)