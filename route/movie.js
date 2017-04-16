const movie = require('../model/movie')


const all = {
    path: '/api/movie/all',
    method: 'get',
    func: function(request, response) {
        var ms = movie.all()
        var r = JSON.stringify(ms)
        response.send(r)
    }
}

const routes = [
    all,
]

module.exports.routes = routes
