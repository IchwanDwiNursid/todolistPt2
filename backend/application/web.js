import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import { userRouter } from "../route/api.js"
import { errorMiddleware } from "../middleware/error-Middleware.js"

export const web = express()
web.use(express.json)
web.use(cors)
web.use(bodyParser)
web.use(userRouter)
web.use(errorMiddleware)