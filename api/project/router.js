// build your `/api/projects` router here
const express = require('express')
const model = require('./model')
const router = express.Router()
const {
    handleGet,
    handlePost
} = require('./middleware')


router.get('/', handleGet, (req,res) => {
 try{
        res.status(200).json(req.get)
    }catch(err){
        res.status(500).json({message:`server-side error trying to GET ERROR:${err.message}`})
    }
})

router.post('/', handlePost, (req, res) => {
    try{
        
        model.createProject(req.post)
        .then(newItem =>{
            res.status(201).json(newItem)
        })
        
    }catch(err){
        res.status(500).json({message:`server-side error trying to POST ERROR:${err.message}`})
    }    
})



module.exports = router;