const widget = new window.VLibras.Widget('https://vlibras.gov.br/app');

const toggleButton = document.getElementById('toggleVlibras');
const vlibrasIcon = document.getElementById('vlibrasIcon'); 

let vlibrasActive = false;

toggleButton.addEventListener('click', () => {
    const vlibrasElement = document.querySelector('[vw]');
    
    if (vlibrasActive) {
        vlibrasElement.style.display = 'none';
        // Alterar para imagem de ativar VLibras
        vlibrasIcon.src = 'img/libras_pretebranco.png';
        vlibrasIcon.alt = 'Desativar VLibras';
    } else {
        vlibrasElement.style.display = 'block';
        // Alterar para imagem de desativar VLibras
        vlibrasIcon.src = 'img/libras.png'; 
        vlibrasIcon.alt = 'Ativar VLibras';
    }   
    vlibrasActive = !vlibrasActive;
});

const toggleMode = document.getElementById('toggleMode');

// Evento para alternar entre modo noite e dia
toggleMode.addEventListener('change', () => {
    if (toggleMode.checked) {
        // Modo noite
        console.log("Modo Noite");
        document.body.style.backgroundColor = "#2c2c2c"; // Fundo escuro
        document.body.style.color = "#ffffff"; // Texto branco
    } else {
        // Modo dia
        console.log("Modo Dia");
        document.body.style.backgroundColor = "#ffffff"; // Fundo branco
        document.body.style.color = "#000000"; // Texto preto
    }
});
