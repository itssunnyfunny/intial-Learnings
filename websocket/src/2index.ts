import WebSocket, { WebSocketServer} from 'ws'
import http from 'http';

const server =  http.createServer(function (req:any, res:any) {
    console.log((new Date()) + 'Request form' + req.url);
      res.end(' hi sever')
})

const WebSever  = new WebSocketServer({server});

WebSever.on('connection', function connection(ws) {
    ws.on('error', console.error );

    ws.on('message', function message(data, isBinary) {
        WebSever.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, {binary: isBinary})
            }
        })
    })
    ws.send("first hii from sever")
});

server.listen(8088, function () {
    console.log((new Date()) + 'server is running on server 8088');
    
})

