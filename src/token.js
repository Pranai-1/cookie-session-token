function getDetails(event){
   let token= localStorage.getItem("token")
    console.log(token)
    let requestOptions={
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    }
    fetch(" http://localhost:4000/protected",requestOptions)
    .then((response)=>{
        if(response.status==200){
        return response.json()
        }else{
            throw new Error("error occured")
        }
    })
    .then((res)=> document.getElementById("token").innerHTML=res.token)
    .catch((error)=>console.log(error))
   
}