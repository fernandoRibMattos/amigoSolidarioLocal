
exports.up = function(knex) {
    return knex.schema.createTable('userpass', function (table) {
        table.string('user').primary();
        table.string('pass').notNullable();
        table.string('keyus').notNullable();
        table.string('ativo',1).notNullable();
    });    
};

exports.down = function(knex) {
    return knex.schema.dropTable('userpass');  
};
