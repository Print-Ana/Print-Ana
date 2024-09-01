document.addEventListener("DOMContentLoaded", function() {
    const figura1 = document.querySelector('.figura1');
    const figura2 = document.querySelector('.figura2');
    const quadrados = document.querySelectorAll('.quadrado');

    // Ajuste dinâmico das posições das figuras e quadrados
    function ajustarPosicoes() {
        figura1.style.width = '496px';
        figura1.style.height = '489px';
        figura1.style.left = '200px';
        figura1.style.top = '90px';

        figura2.style.width = '780px';
        figura2.style.height = '400px';
        figura2.style.left = 'auto';
        figura2.style.top = '350.2px';

         // Obtém a posição da figura1 para referência
         const figura1Top = parseInt(figura1.style.top, 10);
         const offsetY = 170; // Valor de deslocamento para mover os quadrados mais para baixo
 
         quadrados.forEach((quadrado, index) => {
             const x = index % 2 === 0 ? 683 : 1015.2;
             const y = figura1Top + offsetY; // Posiciona os quadrados mais para baixo da figura1
 
             quadrado.style.left = `${x}px`;
             quadrado.style.top = `${y}px`;
        });
    }

    ajustarPosicoes();
});
document.addEventListener("DOMContentLoaded", function() {
    const barraTarefas = document.querySelector('.barra-tarefas');
    const iconeUsuario = document.querySelector('.icone-usuario');

    // Ajuste a posição do ícone de usuário
    function ajustarPosicaoIcone() {
        // Exemplo: adicionar uma classe para centralizar verticalmente
        iconeUsuario.classList.add('icone-centro');
        
        // Se você precisar ajustar dinamicamente:
        iconeUsuario.style.position = 'absolute';
        iconeUsuario.width = '51px';
        iconeUsuario.style.height = '51px';
        iconeUsuario.style.top = '0px'; // Ajuste conforme necessário
       
    }

    ajustarPosicaoIcone();
});
