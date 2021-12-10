exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        {resource_name: 'trustylocket', resource_description: 'solid snake always keeps his odd, yet faithful locket on him'},
        {resource_name: 'VSM', resource_description: 'although doc isnt the only one to have this resource on hand, he is amoung the most common to see using it.'  },
        {resource_name: 'gfuel', resource_description: 'really gross coolaid-like drink that youtubers keep selling to people for some reason'  },
        {resource_name: 'MKIV suit', resource_description: 'The Mark IV Mjolnir Powered Assault Armor were a series of Mjolnir Powered Assault Armors created, modified, and fielded in the second quarter of the 26th-century.'},
        {resource_name: 'Spartan Neural Interface', resource_description: 'The Spartan Neural Interface is an upgrade of the standard Neural Interface that is used by the UNSC SPARTAN-II supersoldiers.'  },
    ]);
};


