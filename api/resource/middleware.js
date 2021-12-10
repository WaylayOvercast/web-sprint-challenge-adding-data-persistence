const model = require('./model');



async function handleGet (req, res, next) {

    const items = await model.getResources()
        if(!items){
            next(res.status(404).json({message:`no resources found`}))
        }else{
            req.get = items
            next()
        }    
}

async function handlePost (req, res, next) {

    const item = req.body
    if(!item.resource_name){
        next(res.status(400).json({message:`bad request, ensure that all fields are filled out`}))

    }else if(await model.checkUnique(item)){
        next(res.status(403).json({message:`bad request, that name already exists`}))
        
    }else{
        req.post = req.body
        next()
    }
}

module.exports = {
    handleGet,
    handlePost,
}