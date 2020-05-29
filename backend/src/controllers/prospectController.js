const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { grupo_nome } = request.params;
        if (!grupo_nome) {
            const prospect = await connection('prospect').select('*').orderBy('ordenacao');
            return response.json(prospect);
        } else {
            const prospect = await connection('prospect').select('*').where('grupo_nome', grupo_nome).orderBy('ordenacao');
            return response.json(prospect);
        };
    },

    async create(request, response) {
        const { loja, descricao, telefone, whatsapp, facebook, instagram, endereco, ordenacao, grupo_nome, chave } = request.body;

        if (chave === '12345678') {
            await connection('prospect').insert({
                loja,
                descricao,
                telefone,
                whatsapp,
                facebook,
                instagram,
                endereco,
                ordenacao,
                grupo_nome
            });

            return response.json({
                msg: 'prospect criado com sucesso'
            });
        } else {
            return response.json({ msg: 'prospect não pode ser criado! errorkey !' });
        }


    },

    async delete(request, response) {
        const { id } = request.params;
        const { chave } = request.body;
        if (chave === '12345678') {
            const prospect = await connection('prospect').where('id', id).select('*').first();

            if (!prospect) {
                return response.status(404).json({ error: 'prospect não encontrado' });
            }

            await connection('prospect').where('id', id).delete();

            return response.status(204).send();
        } else {
            return response.json({ msg: 'prospect não pode ser excluido! errorkey !' });
        }
    }

}