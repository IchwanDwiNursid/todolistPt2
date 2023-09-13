import express from "express"
import todoController from "../controller/todo-controller.js"


const userRouter = new express.Router()

userRouter.get("/api/todo",todoController.get)


export{
    userRouter
}