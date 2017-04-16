const fs = require('fs')

const movieFilePath = 'data/movie.json'

const loadMovies = () => {
    const content = fs.readFileSync(movieFilePath, 'utf8')
    const ms = JSON.parse(content)
    return ms
}

const m = {
    data: loadMovies()
}

m.all = function() {
    var ms = this.data
    return ms
}

module.exports = m
