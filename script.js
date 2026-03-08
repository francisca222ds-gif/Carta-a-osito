function moveButton(btn) {
    // Hace que el botón "No" huya del mouse
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

function startExperience() {
    document.getElementById('intro-screen').classList.add('hidden');
    const mainStage = document.getElementById('main-stage');
    mainStage.classList.remove('hidden');

    // 1. Abrir telones después de un breve delay
    setTimeout(() => {
        document.querySelector('.left').classList.add('open-curtain');
        document.querySelector('.right').classList.add('open-curtain');
        
        // 2. Aparece Falinks y "explota"
        triggerPokemonSequence();
    }, 500);
}

function triggerPokemonSequence() {
    // Aquí podrías añadir un sonido de Pokémon si quisieras
    const letter = document.getElementById('letter-container');
    
    // Simulación de explosión de Falinks
    setTimeout(() => {
        const explosion = document.getElementById('explosion');
        explosion.style.display = 'block'; // Añadir animación CSS de destello
        
        // 3. Mostrar la carta
        letter.classList.remove('hidden-element');
        document.querySelector('.pokemon-card').classList.add('show-card');
    }, 2000);
}
