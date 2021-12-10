// build your `Resource` model here
const DB = require('../../data/dbConfig');

async function getResources(name){
    const result = await DB('resources')
    if(!name){
        return result
    }else{
       return await result.filter(item =>name.resource_name === item.resource_name)
    }
}

async function getResourceById(ID){
    const result = await DB('resources')
      .where('resource_id', ID).first()
      if(result){
          return result
      }else{
          return false
      }
}

async function updateResource (ID, update){
    return await DB('resources')
      .where('resource_id', ID)
      .update(update)
      .then(rows =>{
          return getResourceById(ID)
    });
}

function createResource (resource){
    return DB('resources')
      .insert(resource)
      .then(ids => {
          return getResourceById(ids[0])
      })
}

async function checkUnique (req){
    const items = await getResources(req)
    
    if(items.length === 0 || !items){
        return false
    }else return true
}


module.exports = {
    getResources,
    getResourceById,
    updateResource,
    createResource,
    checkUnique
  };