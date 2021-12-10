
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('project_id');

            tbl.text('project_name', 50)
                .unique().notNullable();

            tbl.text('project_description', 200);

            tbl.boolean('project_completed')
                .defaultTo(false);
        })
    .createTable('resources', tbl => {
        tbl.increments('resource_id');

        tbl.text('resource_name', 50)
        .unique().notNullable();

        tbl.text('resource_description', 200);
        
    })
    .createTable('tasks', tbl =>{
        tbl.increments('task_id');
        
        tbl.text('task_description', 250)
            .notNullable();
        
        tbl.text('task_notes', 150);
        
        tbl.boolean('task_completed')
            .defaultTo(false);
        
        tbl.integer('project_id')
            .unsigned().notNullable()
            .references('project_id').inTable('projects');  //read me contradicts npm test script (or i just dont get it lol mb)
            
    })
    .createTable('project_resources', tbl => {

        tbl.integer('resource_id')
            .unsigned().notNullable()
            .references('resource_id').inTable('resources');

        tbl.text('resource_name')
            .notNullable().references('resource_name')
            .inTable('resources');
        
        tbl.integer('project_id')
            .unsigned().notNullable()
            .references('project_id').inTable('projects')
    })
};

exports.down = async function(knex) {

    await knex.schema.dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
