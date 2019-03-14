const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    const data = [
        {message: 'welcome'},
      ];
    
    res.json(data);
});

var user = 0;

io.on('connection', (socket) => {
  user++;
  console.log(user);
  socket.on('disconnect', () =>{
    user--;  
    console.log(user);
  });
  
});

http.listen(5000, () => {
  console.log('listening on *:5000');
});