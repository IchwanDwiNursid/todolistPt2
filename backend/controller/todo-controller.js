import todo from "../service/todo.js";


const get = async(req,res,next) => {
    try{
        const result = await todo.get(req.body)
        res.status(200).json({
            data : result
        })
    }catch(e){
        next(e)
    }
}

export default {
    get
}