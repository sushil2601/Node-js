//const varName = require('packageName')
const http = require('http')
// console.log(http)
const port = 3033
const server = http.createServer(function(request,response){
    // console.log('req',request)
    if(request.url === '/'){
        response.end('welcome to the website')
    }else if(request.url === '/about'){
        response.end('about us page')//response.end is method to giving response from server to client.
    }else if(request.url === '/users'){
        const users = [
            {id: 1, name : 'sushil'},
            {id: 2, name : 'suman'},
            {id: 3, name : 'surya'}
        ]
        response.end(JSON.stringify(users))
    }else if(request.url === '/sys_time'){
        const time = new Date()
        response.end(JSON.stringify({value : time}))
    }else{
        response.end('Page you are looking for not found')
    }
})

server.listen(port,function(){
    console.log('server is running on port',port)
})
