function accionParaCuandoEllaDigaQueSi() {
    const respuesta = confirm("¿Estás segura de querer ser mi novia?");
    if (respuesta) {
      // Redireccionar a la nueva página si responde "Sí"
      window.location.href = "opcionsi.html";
    } else {
      alert("Neciaaa: NO Acepto un no como respuesta.😊");
    }
  }

  function mueveElBoton() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const newWidth = Math.random() * width;
    const newHeight = Math.random() * height;

    const btnNo = document.getElementById("btnNo");
    btnNo.style.position = "absolute";
    btnNo.style.left = newWidth + "px";
    btnNo.style.top = newHeight + "px";
  }