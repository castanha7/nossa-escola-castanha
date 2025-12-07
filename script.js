document.addEventListener('DOMContentLoaded', function() {
    
    // Dados de exemplo para Anúncios/Provas
    const announcementsData = [
        {
            title: "Provas Finais do 3º Bimestre",
            date: "15/12/2025",
            description: "As avaliações finais para todas as disciplinas do 3º Bimestre ocorrerão entre os dias 15 e 20 de Dezembro. Verifique o cronograma completo na secretaria virtual."
        },
        {
            title: "Reunião de Pais e Mestres",
            date: "05/12/2025",
            description: "Reunião obrigatória para entrega de boletins e discussão sobre o planejamento pedagógico de 2026. Participação essencial."
        },
        {
            title: "Simulado ENEM 2026",
            date: "28/11/2025",
            description: "Simulado preparatório para o ENEM destinado aos alunos do 3º ano. O resultado será utilizado como nota bônus."
        },
        {
            title: "Início do Recesso Escolar",
            date: "22/12/2025",
            description: "Início das férias escolares. Retorno previsto para o dia 05/02/2026. Boas festas a todos!"
        }
    ];

    const container = document.getElementById('announcements-container');

    // Função para renderizar os anúncios
    function renderAnnouncements() {
        if (!container) return;

        announcementsData.forEach(announcement => {
            const card = document.createElement('div');
            card.classList.add('announcement-card');
            
            card.innerHTML = `
                <span class="announcement-date">${announcement.date}</span>
                <h4>${announcement.title}</h4>
                <p>${announcement.description}</p>
            `;
            
            container.appendChild(card);
        });
    }

    renderAnnouncements();

    // Adicionar um pequeno script para o botão "SAIBA MAIS" (smooth scroll)
    const saibaMaisButton = document.querySelector('.btn-primary');
    if (saibaMaisButton) {
        saibaMaisButton.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Ajuste para o padding
                    behavior: 'smooth'
                });
            }
        });
    }

});
