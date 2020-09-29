//@User Model
const Model = require('@models/User')

//@GetAll
module.exports.getAll = async (req, res) => {
    const result = await Model.findAll({attributes: ['id', 'username', 'email', 'password']})
    res.status(200).json({
        success: true,
        payload: result
    })
}

//@Create
module.exports.create = async (req, res) => {
    try {
        res.status(201).json({success: true})
    }
    catch (e) {console.log(e)}
}