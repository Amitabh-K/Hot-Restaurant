const express = require("express");

const app = express();
PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/apiRoutes");
 require("./htmlRout");


app.listen(PORT, function(){
    console.log(`Server is running on this ${PORT}`);
});
