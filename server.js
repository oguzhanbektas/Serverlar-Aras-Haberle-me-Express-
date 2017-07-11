/**
 * Created by Bektas on 11.07.2017.
 */
var express = require('express');
var server1 = express();

server1.post('/', (req, res, next) => {
    console.log(req);
    res.send("Successful");
    return next();
});

server1.listen(3001);