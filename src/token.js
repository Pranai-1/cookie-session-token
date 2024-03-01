function getDetails(event){

   let token= localStorage.getItem("token")
    console.log(token)
    document.getElementById("token").innerHTML=token
}