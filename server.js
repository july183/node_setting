var express = require('express');
var projectlink = require('./routes/router');
var app = express();


app.get('/',function(req, res){
    res.send('글자노출하게 됨');

});
app.use('/user',projectlink);

app.listen(5000, function(){
    console.log('서버구동완료')
});
