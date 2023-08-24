const checkbox = document.getElementById('aceitar-termos');
const button = document.createElement('button');
button.textContent = 'Continuar';
button.classList.add('btn', 'btn-primary', 'mt-3');

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});

button.addEventListener('click', function() {
    alert('Você aceitou os termos de uso e pode continuar.');
    // Coloque aqui o redirecionamento ou ação que deseja após aceitar os termos.
});

const buttonContainer = document.querySelector('.destaques');
buttonContainer.appendChild(button);
