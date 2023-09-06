AOS.init();


function activarPanel() {
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel")

    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}


var link = document.getElementById("fileCss");

    function morado() {
        link.href="css/styles.css";
        
    }

    function rosado() {
        link.href="css/styles-copycopy.css";
    }

    function gris() {
        link.href="css/styles-copy.css";
    }

    




