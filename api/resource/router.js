// build your `/api/resources` router here
const express = require('express');
const router = express.Router();
const model = require('./model')

router.post('/', async (req, res) => {
    try{
        const item = req.body
        if(!item.resource_name){
            res.status(400).json({message:`bad request, ensure that all fields are filled out`})

        }else if(await model.checkUnique(item)){
            res.status(403).json({message:`bad request, that name already exists`})
            
        }else{
            model.createResource(item)
            .then(newItem =>{
                res.status(201).json(newItem)
            })
        }
    }catch(err){
        res.status(500).json({message:`server-side error trying to POST ERROR:${err.message}`})
    }    
})

router.get('/', async (req, res) => {
    try{
        const items = await model.getResources()
        if(!items){
            res.status(404).json({message:`no resources found`})
        }else{
            res.status(200).json(items)
        }
    }catch(err){
        res.status(500).json({message:`server-side error trying to GET ERROR:${err.message}`})
    }  
})

module.exports = router;