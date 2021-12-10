// build your `Project` model here
const DB = require('../../data/dbConfig');


async function handleBool (items){
    if(items){
        const result = items.map(item => {
            if(item.project_completed === 0){
                return {...item, project_completed:false}
            }else{
                return {...item, project_completed:true}
            }
        })
        return result
    }else{
        return
    }
}

async function getProjects(name){
    const data = await DB('projects')
    const result = await handleBool(data)
    if(!name){
        return result
    }else{
       return await result.filter(item =>name.project_name === item.project_name)
    }
}

async function getProjectById(ID){
    const data = await DB('projects')
      .where('project_id', ID).first()

    if(data.project_completed === 0){
        return {...data, project_completed:false}
    }else{
        return {...data, project_completed:true}
    }
}

function createProject (resource){
    return DB('projects')
      .insert(resource)
      .then(ids => {
          return getProjectById(ids[0])
      })
}



module.exports = {
    getProjects,
    createProject,
    getProjectById,
}