const express = require("express")
const data = require("./data/index.json")
const app = express()
app.use(express.json())
app.get("/", (req, res)=>{
    res.send(data)
})
app.get("/type/:type", async(req, res)=>{
    const {type} = req.params
    const dataNude = await data.data.filter((item)=> item.frameType == type)
    res.send(dataNude.slice(0, 10))
})
app.get("/card/:id", (req, res)=>{
    const {id} = req.params
    const dataFilter = data.data.filter((item)=> item.id == id)
    console.log(dataFilter)
    res.send(dataFilter.slice(0,10))
})
app.listen(5000, ()=> console.log("active from the hell"))
