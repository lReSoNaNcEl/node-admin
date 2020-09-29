const path = require('path')

module.exports = {
    outputDir: path.join(__dirname, '../server/public/'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081'
            },
            '/admin': {
                target: 'http://localhost:8081'
            },
        }
    }
}