const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const sequelize = require('@sequelize')

AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
    databases: [sequelize],
    resources: [
        require('@admin/resources/user'),
        require('@admin/resources/news'),
    ],
})

const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'example@mail.ru',
    password: process.env.ADMIN_PASS || '1234567890'
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'default_cookie_name',
    cookiePassword: process.env.ADMIN_COOKIE_PASS || 'hash-2342klyg25b24ljgfl25y425fhl54uu42hchl4h2252',
    authenticate: async (email, password) => {
        if (email === ADMIN.email && password === ADMIN.password)
            return ADMIN
        return null
    }
})

module.exports = router
