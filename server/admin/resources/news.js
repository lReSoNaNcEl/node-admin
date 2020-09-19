const News = require('@models/News')

module.exports = {
    resource: News,
    options: {
        properties: {
            text: {
                type: 'richtext',
            }
        }
    }
}