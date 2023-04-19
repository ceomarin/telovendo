var nombre,correo,mensaje;

function validar(){

nombre=document.getElementById("nombre").value;
correo=document.getElementById("email").value;
mensaje=document.getElementById("mensaje").value;


if(nombre==""){

alert("Debe agregar un Nombre valido");

}else if(correo==""){

alert("Debe agregar un Correo valido");

}else if(mensaje==""){

alert("Debe agregar un Mensaje");

}else{

    alert("Datos enviados");
}


}

$(document).ready(function () {
    $('#example').DataTable({ language: {
        url: "//cdn.datatables.net/plug-ins/1.11.2/i18n/es_es.json",
      },
    });
});
    