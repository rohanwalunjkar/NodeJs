var arr=[{username:"rohan",password:"pass"},{username:"user1",password:"pass1"}];

exports.validateData=(uname,pass)=>{

    for(let a of arr)
    {
        if(a.username===uname && a.password===pass)
        {
            return a; 
        }
    }
    return null;

}