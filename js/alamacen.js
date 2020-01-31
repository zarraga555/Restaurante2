
window.onload = init;
let cm;

function init(){
    cm = new Almacen();
    cm.load();
    //cm.Registrar();
    cm.mostrarTabla();
}


function iniciar(){
    
    let tipoPdoducto = document.getElementById('tipoProducto').value;
    let nombre = document.getElementById('nombre').value;
    let cantidad = document.getElementById('cantidad').value;
    let proveedor = document.getElementById('proveedor').value;
    

    let AlmacenNuevo = new DatosAlmacen(tipoProducto, nombre, cantidad, proveedor);
    cm.agregar(AlmacenNuevo);
    console.log(tipoProducto, nombre, cantidad,proveedor);

    cm.mostrarTabla();
    cm.save();
    return false;

}

function Eliminar(id){
    cm = new Almacen();
    cm.borrar(id);
}

function Editar(id){
    cm = new Almacen();
    cm.editar(id);
}

class DatosAlmacen{
    constructor(tipoProducto, nombre, cantidad, proveedor){
        this.tipoProducto = tipoProducto;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.proveedor = proveedor;
    }
}


class Almacen{
    constructor(){
        this.aNuevoProducto = [];
    }

    agregar(ProductoNuevo){

        this.aNuevoProducto.push(ProductoNuevo);
        
    }

    
    mostrarTabla(){

        var cotainer = document.querySelector('#divProductos');
        cotainer.innerHTML = "";

        if(this.aNuevoProducto.length == 0){
            cotainer.innerHTML = "<p class='leyenda'>No hay datos disponibles</p>";
            return;
        }

        let table = document.createElement("table");
        table.className = "table  table-condensed"
        table.id="mytable2";
        this.aNuevoProducto.forEach(function(Producto){
            
            let row = table.insertRow();

            row.innerHTML = "<td>" + Producto.tipoProducto + "</td>"
            + "<td>" + Producto.nombre + "</td>"
            + "<td>" + Producto.cantidad + "</td>"
            + "<td>" + Producto.proveedor + "</td>"
            +"<td><input class='btnAcciones btn-danger' type='button' onclick = 'Eliminar(this);' value='Eliminar'><input class='btnAcciones btn-success' type='button' data-toggle='modal' data-target='#exampleModalM' onclick = 'Editar(this);' value='Editar'></td>"
        });
        cotainer.appendChild(table);
    }

    save(){
        
        localStorage.producto = JSON.stringify(this.aNuevoProducto);

    }
    
    load(){
        if(localStorage.producto !== undefined){
            this.aNuevoProducto = JSON.parse(localStorage.producto);
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

