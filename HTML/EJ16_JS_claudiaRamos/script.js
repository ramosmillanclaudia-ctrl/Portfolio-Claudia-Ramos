// Para que la página cargue, esta va a cargar cuando este todo listo(es un poco más lenta)
window.addEventListener("load", function () {
    let boton = document.getElementById("btnDibujar")
    boton.addEventListener("click", () => {
        let numero = Number(document.getElementById("numFiguras").value);
        console.log(numero);
        inicio(numero);
    });
});



function inicio(numFiguras) {
    for (let i = 0; i < 100; i++) {
        if (i < numFiguras) {
            setTimeout(dibujaFiguraAleatoria, i * 150);
        }
    }
}

function dibujaFiguraAleatoria() {
    let figura = document.createElement("div");
    figura.className = "figura";
    asignarPosicion(figura);
    asignarDimensiones(figura);
    asignarColor(figura);
    asignarBorde(figura);

    document.body.appendChild(figura);

}

function asignarPosicion(figura) {

    let x = numeroAleatorio(0, 1350);
    let y = numeroAleatorio(0, 600);

    figura.style.left = x + "px";
    figura.style.top = y + "px";

}

function asignarDimensiones(figura) {

    let ancho = numeroAleatorio(30, 150);
    let alto = numeroAleatorio(30, 150);

    figura.style.width = ancho + "px";
    figura.style.height = alto + "px";

}

function asignarColor(figura) {
    let h = numeroAleatorio(300, 350);
    let s = numeroAleatorio(40, 80);
    let l = numeroAleatorio(60, 90);

    let color = "hsl(" + h + "," + s + "%," + l + "%)";
    figura.style.borderColor = color;
    console.log(color);
}

function asignarBorde(figura) {
    let grosor = numeroAleatorio(1, 10);

    figura.style.borderWidth = grosor + "px";

}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// function asignarColor(figura) {
//     let r = numeroAleatorio(0, 255);
//     let g = numeroAleatorio(0, 255);
//     let b = numeroAleatorio(0, 255);

//     figura.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
// }
