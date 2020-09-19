class Router {
    constructor(app) {
        this.app = app
    }
    load(routes) {
        for (let route in routes)
            this.app.use(route, routes[route])
    }
}

module.exports = Router