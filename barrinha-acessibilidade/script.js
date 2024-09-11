// Controle de Zoom
let currentZoom = 1;

document.getElementById("aumentarzoom").addEventListener("click", () => {
    currentZoom += 0.1;
    document.body.style.transform = `scale(${currentZoom})`;
});

document.getElementById("diminuirzoom").addEventListener("click", () => {
    if (currentZoom > 0.5) {
        currentZoom -= 0.1;
        document.body.style.transform = `scale(${currentZoom})`;
    }
});

document.getElementById("resetarzoom").addEventListener("click", () => {
    currentZoom = 1;
    document.body.style.transform = "scale(1)";
});

// Alternância de Modo Claro/Escuro
const themeToggleBtn = document.getElementById("alterartema");
let darkMode = false;

themeToggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("modoescuro", darkMode);
    document.body.classList.toggle("modoclaro", !darkMode);
    
    themeToggleBtn.textContent = darkMode ? "☀️" : "🌙";
});
