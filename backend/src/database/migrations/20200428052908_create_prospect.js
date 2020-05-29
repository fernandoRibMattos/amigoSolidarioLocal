
exports.up = function(knex) {
    return knex.schema.createTable('prospect', function (table) {
        table.increments();

        table.string('loja').notNullable();
        table.string('descricao').notNullable();
        table.string('telefone');
        table.string('whatsapp');
        table.string('facebook');
        table.string('instagram');
        table.string('endereco');
        table.integer('ordenacao').notNullable();

        table.string('grupo_nome').notNullable();
    });   
};

exports.down = function(knex) {
    return knex.schema.dropTable('prospect');  
};
