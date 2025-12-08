/**
 * script.js
 * Adiciona interatividade básica ao site.
 */

// Função para simular a reprodução de um vídeo
function playVideo() {
    alert("Simulação de reprodução de vídeo: Introdução ao Colégio Estadual Professor Júlio Szymanski.");
    // Aqui você adicionaria a lógica real para abrir um modal de vídeo ou linkar para uma página
}

// Evento que garante que o script seja executado após o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o evento de clique ao botão de play (embora já esteja no HTML, é uma boa prática)
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', playVideo);
    }
});

// Adiciona um listener para o botão "SAIBA MAIS"
document.querySelector('.main-button').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
});