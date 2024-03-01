function handleSubmit(event){
    event.preventDefault()
    let username=event.target.username.value
    let password=event.target.password.value
 console.log(username+"   "+password)

 let requestOptions={
    method:"POST",
    headers:{//it will work if we dont mention the content type because it will by itself add because of JSOn.Stringify 
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        username,
        password
    }),
  
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


//headers: Specifies the headers to be included in the request. In this case, you're setting the "Content-Type" header 
//to "application/json".This indicates to the server that the content of the request body is JSON data. The Content-Type 
//header is used by the server to parse the incoming request body appropriately.

//body: Contains the data to be sent in the request body. Here, you're using JSON.stringify() to convert an object containing
// username and password into a JSON string. This stringified JSON data will be sent as the body of the POST request.

//Stringifying the body data is necessary when you're using the Fetch API to send data in the body of a request because the 
//Fetch API requires the body data to be in the form of a string or a specific type of object


