function darkMode() {

    var element = document.body;
    element.classList.toggle("dark-mode");

    // Seleciona o botão
    var button = document.querySelector(".butnmode");

    // Alterna o emoji com base no modo atual
    if (element.classList.contains("dark-mode")) {
        button.textContent = "☀️"; // Emoji de Sol para modo escuro
    } else {
        button.textContent = "🌙"; // Emoji de Lua para modo claro
    }


    
   
}


