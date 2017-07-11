/**
 * Created by Bektas on 11.07.2017.
 */
var express = require('express');
var server1 = express();

server1.get('/',function (req,res,next) {
console.log("3000 Dinlemede");
    var Client = require('node-rest-client').Client;
    var client = new Client();
    var txt="Deneme";
    var tip = {
        "text":txt,
        "Content-Type":"application/json"
    }

    var args={
        data:txt,
        headers:tip
    }
    var req = client.post("http://localhost:3001/", args, function (data, response) {
        if (data == "Successful") console.log("Veri gönderildi");
    });

    return next();
});



server1.listen(3000);