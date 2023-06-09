
var pantalla = document.querySelector(".pantalla");
var botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        var boton_apretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Math Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Math Error";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Math Error") {
            pantalla.textContent = boton_apretado;
        } else {
            pantalla.textContent += boton_apretado;
        }
    })
})