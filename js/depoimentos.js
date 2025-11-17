// Seleciona todos os cards de depoimento
const cards = document.querySelectorAll('.card-depoimento');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const texto = card.querySelector('.texto-completo');

    // Fecha todos os outros cards
    cards.forEach(c => {
      if (c !== card) {
        const t = c.querySelector('.texto-completo');
        t.style.maxHeight = '0';
      }
    });

    // Alterna o card clicado
    if (texto.style.maxHeight && texto.style.maxHeight !== '0px') {
      texto.style.maxHeight = '0';
    } else {
      texto.style.maxHeight = texto.scrollHeight + 'px';
    }
  });
});
