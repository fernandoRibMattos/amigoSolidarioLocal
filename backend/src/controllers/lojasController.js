const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { grupo_nome } = request.params;
        if (!grupo_nome) {
            const lojas = await connection('lojas').select('*').where('status', '=', 'OK').orderBy('ordenacao');
            return response.json(lojas);
        } else {
            const lojas = await connection('lojas').select('*').where('grupo_nome', grupo_nome).andWhere('status', '=', 'OK').orderBy('ordenacao');
            return response.json(lojas);
        };
    },

    async indexprospect(request, response) {
        const { grupo_nome } = request.params;
        if (!grupo_nome) {
            const lojas = await connection('lojas').select('*').where('status', '=', 'NOVO').orderBy('ordenacao');
            return response.json(lojas);
        } else {
            const lojas = await connection('lojas').select('*').where('grupo_nome', grupo_nome).andWhere('status', '=', 'NOVO').orderBy('ordenacao');
            return response.json(lojas);
        };
    },

    async create(request, response) {
        const { loja, descricao, telefone, whatsapp, facebook, instagram, endereco, ordenacao, grupo_nome } = request.body;
        const status = 'NOVO';

        await connection('lojas').insert({
            loja,
            descricao,
            telefone,
            whatsapp,
            facebook,
            instagram,
            endereco,
            ordenacao,
            grupo_nome,
            status
        });

        return response.json({
            msg: 'Loja criada com sucesso'
        });
    },

    async update(request, response) {
        const { id } = request.params;
        const { loja, descricao, telefone, whatsapp, facebook, instagram, endereco, ordenacao, grupo_nome, chave } = request.body;
        const status = 'OK';

        if (chave === '12345678') {

            await connection('lojas').update({
                loja,
                descricao,
                telefone,
                whatsapp,
                facebook,
                instagram,
                endereco,
                ordenacao,
                grupo_nome,
                status
            }).where('id', id);

            return response.json({
                msg: 'Loja atualizada com sucesso'
            });
        } else {
            return response.json({ msg: 'Loja não pode ser atualizada! errorkey !' });

        }
    },

    async delete(request, response) {
        const { id } = request.params;
        const { chave } = request.body;
        if (chave === '12345678') {
            const loja = await connection('lojas').where('id', id).select('*').first();

            if (!loja) {
                return response.status(404).json({ error: 'Loja não encontrada' });
            }

            await connection('lojas').where('id', id).delete();

            return response.status(204).send();
        } else {
            return response.json({ msg: 'Loja não pode ser excluida! errorkey !' });
        }
    }

}