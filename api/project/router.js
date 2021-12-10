// build your `/api/projects` router here
const express = require('express')
const model = require('./model')
const router = express.Router()



router.get('/', async (req,res) => {
 try{
      const result = await model.getProjects()
        if(!result){
            res.status(404).json({
                message: 'no projects found'
            })
        }else{
            res.status(200).json(result)
        }
    }catch(err){
        res.status(500).json({message:`server-side error trying to GET ERROR:${err.message}`})
    }
})

router.post('/', async (req, res) => {
    try{
        const item = req.body
        if(!item.project_name){
            res.status(400).json({message:`bad request, ensure that all fields are filled out`})

        }else{
            model.createProject(item)
            .then(newItem =>{
                res.status(201).json(newItem)
            })
        }
    }catch(err){
        res.status(500).json({message:`server-side error trying to POST ERROR:${err.message}`})
    }    
})



module.exports = router;