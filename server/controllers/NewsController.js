const Model = require('@models/News')

//@GetAll
module.exports.getAll = async (req, res) => {
    const result = await Model.findAll()
    res.status(200).json(result)
}