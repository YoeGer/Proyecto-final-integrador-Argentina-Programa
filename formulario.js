function validarFormulario() {
    let formulario = document.formulario; //nombre que le puse al form en htlm

    if (formulario.nombre.value == 0) {
        alert("Debe completar todos los campos");   
        formulario.nombre.value = ""; 
        formulario.nombre.focus(); //para que el puntero se coloque en el campo nombre
        return false; 
    }
    if (formulario.email.value == 0) {
        formulario.email.value = ""; 
        formulario.email.focus(); 
        return false; 
    }
    if (formulario.mensaje.value == 0) {
        formulario.mensaje.value = ""; 
        formulario.mensaje.focus(); 
        return false; 
    }
        
    formulario.submit(); 
}

  const validarForm = document.getElementById("validarFormulario");
  validarForm.addEventListener("click", validarFormulario);