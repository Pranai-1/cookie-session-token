const express=require("express")
const cors=require("cors")
const app=express();
app.use(cors())
app.use(express.json())
const port=4000


app.get("/",(req,res)=>{
    console.log("running")
    res.status(200).json({message:"server is running successfully"})
})

app.post("/login",(req,res)=>{
    const {body}=req
    console.log(body)
    if(body.username=="pranai" && body.password=="pranai"){
        let userSecretKey="hi"
        let userToken = jwt.sign({ id: "pranai" }, userSecretKey, { expiresIn: '1d' });
        res.status(200).json({message:"Success"})
    }
   
   else
    res.status(404).json({message:"failed"})
})








app.listen(port,()=>console.log(`server is running in http://localhost:${port}`))