var express = require("express");

var app = express();


app.set("port", (process.env.PORT || 5000));
app.use('/static', express.static(__dirname + "/static"));

app.get("/", function(request, response){
    response.sendfile("./static/index.html");
});

app.listen(app.get("port"), function(){
    console.log("NodeJS Hello World is running at localhost:"+ app.get("port"));
});
