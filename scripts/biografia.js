function viajar(seccion){
    // CREAR UN ELEMENTO TIPO <a>:
    let a = document.createElement("A");

    // ASIGNARLE UN NOMBRE AL ELEMENTO PARA DESPUES BORRARLO
    a.id = "enlace";

    // HACERLO INVISIBLE
    a.style.display="none";

    // AGG LA REFERENCIA DE LA SECCION
    a.href=`#${seccion}`;

    // GENERAR UN EVENTO CLICK
    a.click();

    // ELIMINAR NODO DEL DOM
    a.removeChild()

    // DEL ELEMENTO PADRE '<body>' ELIMINAR EL ELEMENTO HIJO '<a>'
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.removeChild("enlace");
}

