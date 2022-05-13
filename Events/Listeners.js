
var emiter = require('./Emiter');
const {EVENT1,EVENT2,EVENT3,EVENT4} = require('./Events');

module.exports = {initEvents:()=>{

    emiter.on(EVENT1,()=>{
        console.log('Event 1 has happened.')
    })
    emiter.on(EVENT2,()=>{
        console.log('Event 2 has happened.')
    })
    emiter.on(EVENT3,()=>{
        console.log('Event 3 has happened.')
    })
    emiter.on(EVENT4,()=>{
        console.log('Event 4 has happened.')
    })
    
}}
