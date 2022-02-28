var express = require('express');
var projectlink = require('./routes/router');
var app = express();


app.get('/',function(req, res){
    res.send('글자노출하게 됨');

});
app.use('/user',projectlink);

// app.listen(5000, function(){
//     console.log('서버구동완료')
// });

app.get('/me',function(req, res){
    res.send('나의 소개');

});
app.get('/protfolio',function(req, res){
    res.send('작품들');

});
app.get('/preinterview',function(req, res){
    res.send('사전면접');

});
app.get('/contact',function(req, res){
    res.send('면접제안');

});

app.listen(8080, function(){
    console.log('서버구동완료')
});