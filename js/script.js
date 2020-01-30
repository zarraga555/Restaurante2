let cm;
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

function iniciar(){
    cm = new Proveedores();
    cm.obtenerDatos();
    

}
function Eliminar(id){
    cm = new Proveedores();
    cm.borrar(id);
}

function Editar(){
    cm = new Proveedores();
    cm.editar();
}

class Proveedores{

    obtenerDatos(){
        let ci = document.getElementById('ci').value;
        let nombre = document.getElementById('nombre').value;
        let direccion = document.getElementById('direccion').value;
        let telefono = document.getElementById('telefono').value;

        this.anadir(ci, nombre, direccion, telefono);
    }

    anadir(ci, nombre, direccion, telefono){
        var table = document.querySelector('#mytable');
        var row = table.insertRow();

        var button = document.createElement('button');
        


        var ciRow = row.insertCell();
        ciRow.innerHTML = ci;
        var nombreRow = row.insertCell();
        nombreRow.innerHTML = nombre;
        var direccionRow = row.insertCell();
        direccionRow.innerHTML = direccion;
        var telefonoRow = row.insertCell();
        telefonoRow.innerHTML = telefono;
        var butonRow = row.insertCell();
        butonRow.innerHTML = button.html= "<input class='btnAcciones btn-danger' type='button' onclick = 'Eliminar(this);' value='Eliminar'>";

    }
    borrar(id){
        var cell = id.parentNode;
        var row = cell.parentNode;
        var table = document.querySelector('#mytable');
        table.deleteRow(row.rowIndex);

    }
    editar(){

    }
}