const express = require("express");
const app = express();
PORT = process.env.PORT || 3000;

app.use(express.urlencoded({exteded:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("welcome to Home Page");
});
app.get("/api/:Visitors",(req,res)=>{
    return res.json(visitors);
});
app.get("/api/visitors/:visitor",(req,res)=>{
var chosen = res.params.visitor.table;
console.log(chosen);
for (var i = 0; i < visitors.lenght;i++)
{
    if(chosen === visitors[i].table)
    return res.json(visitor[i]);
}
    return res.send("All tables are reversed");
});
app.post("/api/visitors", (req,res)=>{
    var newVisitor = req.body;
    console.log(newVisitor);
    visitors.push(newVisitor);
    res.json(newVisitor);
});
app.listen(PORT, function(){
    console.log(`Server is running on this ${PORT}`);
});
