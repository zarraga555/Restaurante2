
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
/*
function Eliminar(id){
    cm = new Proveedores();
    cm.borrar(id);
}

function Editar(){
    cm = new Proveedores();
    cm.editar();
}
*/
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
        this.aNuevoProveedor.forEach(function(Proveedor){
            
            let row = table.insertRow();

            row.innerHTML = "<td>" + Proveedor.ci + "</td>"
            + "<td>" + Proveedor.nombre + "</td>"
            + "<td>" + Proveedor.direccion + "</td>"
            + "<td>" + Proveedor.telefono + "</td>"
            +"<td> .</td>"
        });
        cotainer.appendChild(table);


        /*
        var personas = this.obtenerProveedor();
        var tbody = document.querySelector('#mytable tbody');
        for(var i = 0; i<personas.length; i++){
            var fila = document.createElement('tr');
            var celdaci = document.createElement('td');
            var celdanombre = document.createElement('td');
            var celdadireccion = document.createElement('td');
            var celdatelefono = document.createElement('td');

            celdaci.innerHTML = this.aNuevoProveedor[i][0];
            celdanombre.innerHTML = this.aNuevoProveedor[i][1];
            celdadireccion.innerHTML = this.aNuevoProveedor[i][2];
            celdatelefono.innerHTML = this.aNuevoProveedor[i][3];

            fila.appendChild(celdaci);
            fila.appendChild(celdanombre);
            fila.appendChild(celdadireccion);
            fila.appendChild(celdatelefono);

            tbody.appendChild(fila);

        }
        */
    }

    save(){
        
        localStorage.proveedor = JSON.stringify(this.aNuevoProveedor);

    }
    
    load(){
        if(localStorage.proveedor !== undefined){
            this.aNuevoProveedor = JSON.parse(localStorage.proveedor);
        }
    }

}

