
window.onload = init;
let cm;

function init(){
    cm = new Usuarios();
    cm.load();
    //cm.Registrar();
    cm.mostrarTabla();
}


function iniciar(){
    
    let ci = document.getElementById('ci').value;
    let nombre = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let tipoUsuario = document.getElementById('tipousuario').value;
    let id = document.getElementById('iduser').value;
    let password = document.getElementById('password').value;

    let UsuarioNuevo = new DatosUsuarios(ci, nombre, direccion, telefono, email, tipoUsuario, id, password);
    cm.agregar(UsuarioNuevo);
    console.log(ci, nombre, direccion, telefono, email, tipoUsuario, id, password);

    cm.mostrarTabla();
    cm.save();
    return false;

}

function Eliminar(id){
    cm = new Usuarios();
    cm.borrar(id);
}

function Editar(id){
    cm = new Usuarios();
    cm.editar(id);
}

class DatosUsuarios{
    constructor(ci, nombre, direccion, telefono, email, tipoUsuario, id, password){
        this.ci = ci;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
        this.tipoUsuario = tipoUsuario;
        this.id  = id;
        this.password = password;
    }
}


class Usuarios{
    constructor(){
        this.aNuevoUsuario = [];
    }

    agregar(UsuarioNuevo){

        this.aNuevoUsuario.push(UsuarioNuevo);
        
    }

    
    mostrarTabla(){

        var cotainer = document.querySelector('#divUsuarios');
        cotainer.innerHTML = "";

        if(this.aNuevoUsuario.length == 0){
            cotainer.innerHTML = "<p class='leyenda'>No hay datos disponibles</p>";
            return;
        }

        let table = document.createElement("table");
        table.className = "table  table-condensed"
        table.id="mytable2";
        this.aNuevoUsuario.forEach(function(Usuario){
            
            let row = table.insertRow();

            row.innerHTML = "<td>" + Usuario.ci + "</td>"
            + "<td>" + Usuario.nombre + "</td>"
            + "<td>" + Usuario.direccion + "</td>"
            + "<td>" + Usuario.telefono + "</td>"
            + "<td>" + Usuario.email + "</td>"
            + "<td>" + Usuario.tipoUsuario + "</td>"
            + "<td>" + Usuario.id + "</td>"
            + "<td>" + Usuario.password + "</td>"
            +"<td><input class='btnAcciones btn-danger' type='button' onclick = 'Eliminar(this);' value='Eliminar'><input class='btnAcciones btn-success' type='button' data-toggle='modal' data-target='#exampleModalM' onclick = 'Editar(this);' value='Editar'></td>"
        });
        cotainer.appendChild(table);
    }

    save(){
        
        localStorage.usuario = JSON.stringify(this.aNuevoUsuario);

    }
    
    load(){
        if(localStorage.usuario !== undefined){
            this.aNuevoUsuario = JSON.parse(localStorage.usuario);
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

