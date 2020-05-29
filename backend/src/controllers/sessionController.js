const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { user, pass} = request.body;

        const login = await connection('userpass')
          .where('user', user)
          .andWhere('pass', pass)
          .andWhere('ativo', '=', 'S')
          .select('user', 'keyus')
          .first();

        if(!login) {
            return response.status(404).json({ error: 'No USER found or PASS incorrecty '});
        }

        return response.json(login);
    }
}