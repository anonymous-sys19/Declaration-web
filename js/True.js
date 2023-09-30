function accionParaCuandoEllaDigaQueSi() {
    alert("¡Ahora ya somos novios! ❤️");
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



document.getElementById('img-click').addEventListener('click', () => {
    window.location.href = "msg.html"
})



document.getElementById("body").addEventListener("click", () => {
    alert("Toca la imagen y tendras otra sorpresa: Mi Reyna")
})

