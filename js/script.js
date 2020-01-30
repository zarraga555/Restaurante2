function logeo(){
    
    var usuario = document.getElementById('txtusuario').value;
    var password = document.getElementById('txtpassword').value;
    console.log(usuario);
    console.log(password);
    if(usuario == "admin" && password == "admin"){
        window.location = "../html/admin.html";
    }else if(usuario == "cajero" && password == "cajero"){
        window.location = "../html/cajero.html";
    }else if(usuario == "contador" && password == "contador"){
        window.location = "../html/contador.html";
    }
}
