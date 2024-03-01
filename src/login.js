function handleSubmit(event){
    event.preventDefault()
    let username=event.target.username.value
    let password=event.target.password.value
 console.log(username+"   "+password)

 let requestOptions={
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        username,
        password
    })
 }

 fetch("http://localhost:4000/login",requestOptions)
 .then((response)=>{
   
    if(response.status=="200"){
       return response.json()
    }
    else{
        throw new Error("failed")
    }
    
})
 .then((data)=>{
    alert(data.message)
    console.log(data.userToken)
    localStorage.setItem("token",data.userToken)
    window.location.href = "http://127.0.0.1:5500/src/home.html";
 })
 .catch((error)=>alert(error))
}