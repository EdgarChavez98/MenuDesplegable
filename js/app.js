const icono = document.querySelector(".icono");
const menu = document.querySelector(".contenedor-menu");

icono.addEventListener("click", cambiarIcono);

function cambiarIcono(){
    if(icono.classList.contains("fi-rr-align-justify")){
        icono.classList.replace("fi-rr-align-justify","fi-br-cross" );
    }else if(icono.classList.contains("fi-br-cross")){
        icono.classList.replace("fi-br-cross","fi-rr-align-justify");
    }
    
    alternarMenu();
}

function alternarMenu(){
    menu.classList.toggle("ocultar");
}
