const Model = require('@models/User')

//@GetAll
module.exports.getAll = async (req, res) => {
    const result = await Model.findAll({attributes: ['id', 'username', 'email', 'password']})
    res.status(200).json(result)
}