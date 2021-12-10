exports.seed = function(knex, Promise) {
    return knex('project_resources').insert([
        {resource_id: 1, resource_name: 'trustylocket', project_id: 1},
        {resource_id: 2, resource_name: 'VSM', project_id: 2},
        {resource_id: 3, resource_name: 'gfuel', project_id: 2},
        {resource_id: 4, resource_name: 'MKIV suit', project_id: 3},
        {resource_id: 5, resource_name: 'Spartan Neural Interface', project_id: 3}
    ]);
};


