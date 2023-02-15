const messRouter = require('./mess.route');

function route(app) {
    app.use('/api/v1/mess', messRouter)
}

module.exports = route