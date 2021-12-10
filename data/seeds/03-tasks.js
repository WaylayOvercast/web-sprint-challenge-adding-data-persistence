exports.seed = function(knex, Promise) {
    return knex('tasks').insert([
        {task_description: 'snake', task_notes: 'hes solid snake', task_completed: true, project_id:1},
        {task_description: 'im always confused', task_notes: 'https://www.youtube.com/watch?v=p8iBBJE_MZ0', task_completed: false, project_id:1},
        {task_description: 'wake up', task_notes: 'even though this task says doc has just awoke, i assure you he was already awake', task_completed: true, project_id: 2 },
        {task_description: 'yayaya', task_notes: 'yayayayayayayaya- you already know', task_completed: true, project_id: 2 },
        {task_description: 'become a 2 time', task_notes: 'win the 1993 1994 back to back', task_completed: true, project_id: 2 },
        {task_description: 'find cortana and stop her', task_notes: 'last known to be encypted into 4 runner code', task_completed: false, project_id: 3 }
    ]);
};


