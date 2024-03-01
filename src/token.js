function getDetails(event){
   let token= localStorage.getItem("token")
    console.log(token)
    let requestOptions={
        method:"GET",
        headers:{
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
    .then((res)=> document.getElementById("token").innerHTML=`hi ${res.username}`)
    .catch((error)=>console.log(error))
   
}

function removeToken(){
    localStorage.removeItem("token")
}