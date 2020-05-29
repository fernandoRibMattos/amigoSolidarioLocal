
exports.up = function(knex) {
    return knex.schema.createTable('grupos', function (table) {
        table.string('id').primary();
        table.string('descricao').notNullable();
        table.string('ativo',1).notNullable();
        table.integer('ordenacao').notNullable();
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('grupos');
};
