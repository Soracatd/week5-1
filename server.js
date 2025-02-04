const express = require('express')
const app = express();
const port = 3000
app.use(express.json())
let std =[
    {id: 1 ,name: "Pisit"},
    {id: 2 ,name: "Phanupong"},
    {id: 3 ,name: "Panuwat"},
]
app.get('/' , (req, res) => res.send('Hello'));
app.get('/std' , (req, res) => res.json(std));
app.get('/std/:id' , (req, res) => {
    let data = std.find(i => i.id == req.params.id)
    if (data !=undefined) res.json(data)
    else res.json({ message: "can't find" })   
});
app.post('/std', (req, res) => {
    let stdID = std[std.length - 1].id + 1
    let stdName = req.body.name
    std = [...std, { id: stdID, name: stdName }]
    res.json(std)
})
app.put('std/:id', (req, res) => {
    let data = std.find(i => i.id == req.params.id)
    if (data ==undefined) res.json("don'have")
    else data.name = req.body.name
    std.map((i) => {
        if (i.id == data.id) i.name = data.name;
    })
    res.json(std)
})
app.delete('std/:id',(req, res) => {
    std = std.filter(i => i.id !=req.params.id)
    res.json(std)
})
app.listen(port,() => {
    console.log("Sever is Runing port",port)
})