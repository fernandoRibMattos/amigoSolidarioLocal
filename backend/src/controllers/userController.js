const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const user = await connection('userpass').select('user', 'keyus', 'ativo').where('ativo', '=', 'S');
    
        return response.json(user);
    },

    async create(request, response) {
        const { user, pass, keyus, ativo} = request.body;
    
        await connection('userpass').insert({
            user,
            pass,
            keyus,
            ativo
        })

        return response.json({
            msg: 'Usuario criado com sucesso'
        });
    }
}