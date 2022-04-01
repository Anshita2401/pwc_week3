const axios= require('axios')
module.exports=function(callback){

axios.get('https://ipinfo.io')
.then((res)=>{
    console.log(res.data.city);
    console.log(res.data.loc);
})
}