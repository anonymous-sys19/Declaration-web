function clickHeard() {
    var corazon = document.getElementById('tag')
    corazon.addEventListener('click', clickCora)
    
}
function clickCora() {

    var ventana = document.getElementById('Ventana')

    if (ventana.style.display == 'initial') {
        ventan.style.display = 'none';
    } else{
        ventana.style.display = 'initial';
    }
    
}
clickHeard()


window.onload = () => {
    alert('Toca el Corazoncito. Te comprometes aun mas.');
};

function msgSend() {
    const url_for_api_Whatsapp = `https://api.whatsapp.com/send/?phone=50662228271&text`
    var msg = document.getElementById("message-text").value
    window.location.href = url_for_api_Whatsapp+"="+`*${msg}*`
    
}