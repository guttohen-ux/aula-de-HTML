    // Seleciona todos os objetos
    const objetos = document.querySelectorAll('.objeto');

    objetos.forEach(obj => {
        obj.addEventListener('click', () => {
            // Remove a classe "ativo" de todos
            objetos.forEach(o => o.classList.remove('ativo'));
            // Adiciona a classe "ativo" ao clicado
            obj.classList.add('ativo');
        });
    });
    
    // Remove a classe "ativo" ao clicar fora das caixas
    document.addEventListener('click', (event) => {
        console.log(event.target);
        // Verifica se o clique foi FORA das caixas
        if (!event.target.closest('.objeto')) {
            objetos.forEach(o => o.classList.remove('ativo'));
        }
    });
