boton=document.querySelector("#btn");
boton.addEventListener("click",enviar);

function enviar(){
    mensaje=(document.querySelector("#mensaje")).value;
    nombre=(document.querySelector("#nombre")).value;
    correo=(document.querySelector("#email")).value;
    telefono=(document.querySelector("#telefono")).value;
    

    if(mensaje.length==0||nombre.length==0||correo.length==0||telefono.length==0){
        alert("debe rellenar todos los campos");
    }
    else{
        alert("mensaje enviado correctamente"+mensaje.length);
    }
}