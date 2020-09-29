//@News Model
const Model = require('@models/News')

//@GetAll
module.exports.getAll = async (req, res) => {
    try {
        const result = await Model.findAll()
        res.status(200).json(result)
    }
    catch (e) {console.log(e)}
}

//@Create
module.exports.create = async (req, res) => {
    try {
        res.status(201).json({success: true})
    }
    catch (e) {console.log(e)}
}