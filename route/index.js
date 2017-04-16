const sendHtml = function(path, response) {
    var fs = require('fs')
    var options = {
        encoding: 'utf-8'
    }
    path = 'template/' + path
    fs.readFile(path, options, function(err, data){
        console.log(`读取的html文件 ${path} 内容是`, data)
        response.send(data)
    })
}

const index = {
    path: '/',
    method: 'get',
    func: function(request, response) {
        var path = 'movie.html'
        sendHtml(path, response)
    }
}

const routes = [
    index,
]

module.exports.routes = routes
