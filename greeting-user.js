let username = "2362374"

function greet(){
    return new Promise((res, rej) => {
        if(username){
            if(/\d/.test(username)){
                rej(`Please enter a valid username`)
            }else{
                res(`Welcome ${username}`)
            }
        }
        rej("No username found")
    })
}

greet().then(res => console.log(res)).catch(err => console.log(err))