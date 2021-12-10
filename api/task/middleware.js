const model = require('./model');



async function handleGet (req, res, next) {

    const result = await model.getTasks()
    if(!result){
        next(res.status(404).json({message: 'no tasks found'}))

    }else{
        req.get = result
        next()
    }
}
    

module.exports = {
    handleGet,
}