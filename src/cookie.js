function getCookieDetails(event){
   
     let requestOptions={
         method:"GET",
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
 
