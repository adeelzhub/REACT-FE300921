export const fetchRequest = async (username,email,password) =>{
    try{
        console.log("fetch invoked")
        const response  = await fetch("http://localhost:5000/user",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
                
            }),
            
        })
        console.log(response);

    }catch(error){
        console.log(error);

    }

};
