// build your `/api/tasks` router here
const express = require('express');
const model = require('./model')
const router = express.Router();
const {
    handleGet,
} = require('./middleware')



router.get('/', handleGet, (req,res) => {
 try{
        res.status(200).json(req.get)
        
    }catch(err){
        res.status(500).json({message:`server-side error trying to GET.. ERROR:${err.message}`})
    }
})

router.post('/', async (req, res) => {
    try{
        const item = req.body

        if(!item.task_description || !item.project_id ){
            res.status(400).json({message:`bad request, ensure that all fields are filled out`})

        }else if (await model.checkId(item.project_id)){
            model.createTask(item)
            .then(newItem =>{
                res.status(201).json(newItem)
            })
        }
    }catch(err){
        res.status(500).json({message:`server-side error trying to POST.. ERROR:${err.message}`})
    }    
})



module.exports = router;