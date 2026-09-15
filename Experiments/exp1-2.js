const EventEmitter = require('events');
const app = new EventEmitter();

app.on('login', (user)=> {
    console.log(`User ${user} has logged in`);
});

app.on('message', (msg) => {
    console.log(`New message: ${msg}`);
});
app.emit('login', 'Shubham');
app.emit('message', 'Welcome to node.js');