
window.onload = init;
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
function init(){
    cm = new Proveedores();
    cm.load();
    //cm.Registrar();
    cm.mostrarTabla();
}


function iniciar(){
    /*
    cm = new Proveedores();
    cm.registrar();
*/

    let ci = document.getElementById('ci').value;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;

    let ProveedorNuevo = new DatosProveedor(ci, nombre, direccion, telefono);
    cm.agregar(ProveedorNuevo);
    console.log(ci, nombre, direccion, telefono);

    cm.mostrarTabla();
    cm.save();
    return false;

}

function Eliminar(id){
    cm = new Proveedores();
    cm.borrar(id);
}

function Editar(id){
    cm = new Proveedores();
    cm.editar(id);
}

class DatosProveedor{
    constructor(ci, nombre, direccion, telefono){
        this.ci = ci;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}


class Proveedores{
    constructor(){
        this.aNuevoProveedor = [];
    }

    agregar(ProveedorNuevo){

        this.aNuevoProveedor.push(ProveedorNuevo);
        
    }

    
    mostrarTabla(){

        var cotainer = document.querySelector('#divProveedores');
        cotainer.innerHTML = "";

        if(this.aNuevoProveedor.length == 0){
            cotainer.innerHTML = "<p>No hay datos disponibles</p>";
            return;
        }

        let table = document.createElement("table");
        table.className = "table  table-condensed"
        table.id="mytable2";
        this.aNuevoProveedor.forEach(function(Proveedor){
            
            let row = table.insertRow();

            row.innerHTML = "<td>" + Proveedor.ci + "</td>"
            + "<td>" + Proveedor.nombre + "</td>"
            + "<td>" + Proveedor.direccion + "</td>"
            + "<td>" + Proveedor.telefono + "</td>"
            +"<td><input class='btnAcciones btn-danger' type='button' onclick = 'Eliminar(this);' value='Eliminar'><input class='btnAcciones btn-success' type='button' data-toggle='modal' data-target='#exampleModalM' onclick = 'Editar(this);' value='Editar'></td>"
        });
        cotainer.appendChild(table);
    }

    save(){
        
        localStorage.proveedor = JSON.stringify(this.aNuevoProveedor);

    }
    
    load(){
        if(localStorage.proveedor !== undefined){
            this.aNuevoProveedor = JSON.parse(localStorage.proveedor);
        }
    }
    borrar(id){
        var cell = id.parentNode;
        var row = cell.parentNode;
        var table = document.querySelector('#mytable2');
        table.deleteRow(row.rowIndex);


    }
    editar(id){
        for(var i = 0; i < this.aNuevoProveedor.length; i++){
            if(this.aNuevoProveedor == id){
                let ciM = document.querySelector('#ciM').value = cm.aNuevoProveedor.ci[i];
                let nombreM = document.querySelector('#nombreM').value = this.aNuevoProveedor.nombre[i];
                let direccionM = document.querySelector('#direcionM').value = this.aNuevoProveedor.direccion[i];
                let telefonoM = document.querySelector('#telefonoM').value = this.aNuevoProveedor.telefono[i];

                
            }
        }
    }

}

