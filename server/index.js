// import { error } from 'util';

const server = require('./app');
const port = 8484;
// write your code here
//const port = 8484;
server.listen(port, (success,error)=>{
console.log("Now listening on localhost:"+port);
})
