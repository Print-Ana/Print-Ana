// Ajuste da posição da figura e do bloco de login

document.addEventListener('DOMContentLoaded', (event) => {
    const figura = document.querySelector('.figure');
    const loginBlock = document.querySelector('.login-block');

    // Ajustar a posição da figura
    figura.style.position = 'absolute';
    figura.style.top = '50px';
    figura.style.height = '550px';

    // Ajustar a posição do bloco de login
    loginBlock.style.position = 'absolute';
    loginBlock.style.top = '250.1px';
    loginBlock.style.left = '840px';
    loginBlock.style.width = '400.1px';
    
});
