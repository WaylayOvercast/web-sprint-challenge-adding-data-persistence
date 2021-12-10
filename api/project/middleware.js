const model = require('./model');



async function handleGet (req, res, next) {

    const result = await model.getProjects()
    if(!result){
        next(res.status(404).json({message: 'no projects found'}))
    }else{
        req.get = result
        next()
    }
}

async function handlePost (req, res, next) {

    const item = req.body
    if(!item.project_name){
        next(res.status(400).json({message:`bad request, ensure that all fields are filled out`}))

    }else{
        req.post = item
        next()
    }
}

module.exports = {
    handleGet,
    handlePost,
}