import { prismaClient } from "../application/database.js";
import express from "express";
import { ResponseError } from "../error/response-error.js";

const get = async(request) => {
    const name = await prismaClient.data_Todo.findUnique({
        where : {
            name : name
        },
        select :{
            id : true,
            name : true,
            status : true
        }
    })

    if(!name){
        throw new ResponseError("404","User Not Found")
    }

    return name;
}

export default {
    get
}