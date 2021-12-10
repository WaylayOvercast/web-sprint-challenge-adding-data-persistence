// build your `Task` model here
const DB = require('../../data/dbConfig');


async function handleBool (items){
    if(items){
        const result = items.map(item => {
            if(item.task_completed === 0){
                return {...item, task_completed:false}
            }else{
                return {...item, task_completed:true}
            }
        })
        return result
    }else{
        return
    }
}

async function getTasks(name){
    const data = await DB('tasks')
    const result = await handleBool(data)
    if(!name){
        return result
    }else{
       return false
    }
}

async function getTaskById(ID){
    const data = await DB('tasks')
      .where('task_id', ID).first()

    if(data.task_completed === 0){
        return {...data, task_completed:false}
    }else{
        return {...data, task_completed:true}
    }
}

function createTask (resource){
    return DB('tasks')
      .insert(resource)
      .then(ids => {
          return getTaskById(ids[0])
      })
}
async function checkId (ID){
    const items = await DB('projects')
        .where('project_id', ID).first()
    
    if(items.length === 0 || !items){
        return false
    }else return true
}


module.exports = {
    getTasks,
    getTaskById,
    createTask,
    checkId
}