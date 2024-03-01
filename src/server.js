const express=require("express")
const cors=require("cors")
const jwt=require("jsonwebtoken")
 const cookieParser = require('cookie-parser');
const app=express();
app.use(cors());
app.use(express.json())

app.use(cookieParser());
const port=4000
const userSecretKey="hi"

app.get("/",(req,res)=>{
    console.log("running")
    res.status(200).json({message:"server is running successfully"})
})

//token based authentication
//we created a json web token with a secret key and we send this token directly to client side in the response and now it is the 
//responsibility of client to store the token the form of localstorage or sessionStorage

//1.localstorage:-
//It has more memory area and can be accessed even after closing and opening the browser
//If you store data in local storage from one tab or window of your website, that data will be accessible from any
// other tab or window of the same website.
//However, data stored in local storage by a web page from one origin cannot be accessed by a web page from a different origin,
// even if they are in separate tabs or windows of the same browser.

//Session Storage:
//Data stored in session storage is cleared when the browser tab or window is closed.
//It is also scoped to the origin, but it is not shared across different browser sessions. Each session (i.e., each tab or window)
// has its own isolated session storage.

// sessionStorage.setItem("token",token);
//sessionStorage.getItem("token");
//same for localStorage
app.post("/login",(req,res)=>{
    const {body}=req
    console.log(body)
    if(body.username=="pranai" && body.password=="pranai"){
       
        let userToken = jwt.sign({ id: "pranai" }, userSecretKey, { expiresIn: '1d' });
        res.status(200).json({message:"Success",userToken})
    }
   
   else
    res.status(404).json({message:"failed"})
})


app.get("/protected",TokenValidate,(req,res)=>{
    let username=req.user
    res.status(200).json({message:"Success",username})
})

function TokenValidate(req,res,next){
    let token=req.headers.authorization.split("Bearer ")[1]
   console.log(token)
   jwt.verify(token,userSecretKey,(err,data)=>{
    if(data){
        req.user=data.id
        next()
    }
    else{
        res.status(403).json({message:"unauthorized"})
    }
   })
}



app.listen(port,()=>console.log(`server is running in http://localhost:${port}`))