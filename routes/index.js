var express = require('express');
var router = express.Router();
const dbConnection = require('../app/sequelize/sequelize')
const {users} = require('./../models')
/* GET home page. */
router.get('/sync', async function (req, res, next) {
    console.log(users.create())
    // const result = await User.all()
    // console.log(result)

    res.end()
});

router.get('/async', function (req, res, next) {
    dbConnection
        .query('SELECT * from users')
        .then(results => console.log(results))


    res.end()
});

router.get('/raw-query-async', (request, response) => {
    dbConnection
        .query('SELECT * from users')
        .then((results) => {
            return results
        })
        .then(resultado => console.log(resultado))

    response.end()
})

router.get('/raw-query-sync', async (request, response) => {
    const resultado = await dbConnection
        .query('SELECT * from users')
    console.log(resultado)

    response.end()
})

router.get('/', async (request, response) => {
    const usuarios = await users.findAll({
        limit: 1,
        offset: 1,
    })
    console.log(usuarios)

    response.end()
})

router.get('/get-one-user', async (request, response) => {
    const usuario = await users.findOne({
        where: {
            name: 'Anadeus'
        }
    })

    console.log(usuario)

    response.end()
})

router.get('/get-user-by-pk', async (request, response) => {
    const usuario = await users.findByPk(12)
    console.log(usuario)

    response.end()
})

router.get('/count', async (request, response) => {
    console.log('Quantidade de usuários no sistema: ' + await users.count({
        where: {
            name: 'Anadeus'
        }
    }))
})

module.exports = router;
