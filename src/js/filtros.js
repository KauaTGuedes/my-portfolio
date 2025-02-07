document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button'); // Seleciona todos os botões de filtro
    const projectCards = document.querySelectorAll('.project-card'); // Seleciona todos os cards de projetos

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add('active');

            const filterValue = button.textContent.trim(); // Obtém o texto do botão (categoria)
            const filterValueLower = filterValue.toLowerCase(); // Converte para minúsculas

            // Filtra os projetos
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category').toLowerCase(); // Obtém a categoria do projeto

                // Mostra ou oculta os projetos com base no filtro selecionado
                if (filterValueLower === 'todos' || category === filterValueLower) {
                    card.style.display = 'block'; // Mostra o projeto
                } else {
                    card.style.display = 'none'; // Oculta o projeto
                }
            });
        });
    });
});