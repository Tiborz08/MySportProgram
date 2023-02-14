class Account{
    constructor(username, password){
        this.user = username;
        this.psw = password;
    }
}
function user(){
    us = document.getElementById("username")
    ps = document.getElementById("password")

    const p1 = new Account(us,ps)
}
