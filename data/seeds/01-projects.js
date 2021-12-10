
exports.seed = function(knex, Promise) {
    return knex('projects').insert([
        {project_name: 'operation go get em', project_description: 'solid snake invades russian spy land to get the golden Deagle', project_completed: false },
        {project_name: 'the doc', project_description: 'hes the two time, back to back, 1993 1994 video game champ. hes at the tippity top of the mountain and still only half way up', project_completed: true },
        {project_name: 'the chief', project_description: 'the interstellar war between twenty-sixth century humanity, a collection of alien races known as the Covenant, and the alien parasite Flood.', project_completed: false}
    ]);
};


