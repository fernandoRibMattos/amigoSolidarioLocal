const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const grupos = await connection('grupos').select('*').where('ativo', '=', 'S').orderBy('ordenacao', 'id');

        return response.json(grupos);
    },

    async create(request, response) {
        const { id, descricao, ativo, ordenacao, chave } = request.body;

        if (chave === '12345678') {
            await connection('grupos').insert({
                id,
                descricao,
                ativo,
                ordenacao
            });

            return response.json({
                msg: 'Grupo criado com sucesso'
            });
        } else {
            return response.json({ msg: 'Grupo não pode ser criado! errorkey !' });
        }
    }

}