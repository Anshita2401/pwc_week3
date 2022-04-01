const { alias } = require('yargs');
var weather= require('./weatherapp.js')
var loca=require('./location.js')
var argv=require('yargs')
.option('location',{
   type:'string',
   alias:'l'

}).help('help')
.argv

weather(argv.location,function(callback){
    console.log(callback);
})

loca(function(callback){
    console.log(callback);
})

