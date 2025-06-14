function abrirDetalhe(pagina) {
    window.location.href = pagina;
  }

  const logo = document.getElementById('logo');

    logo.addEventListener('mouseenter', () => {
      logo.style.transition = 'transform 0.5s ease-in-out';
      logo.style.transform = 'scale(1.15)';
    });

    logo.addEventListener('mouseleave', () => {
      logo.style.transition = 'transform 0.5s ease-in-out';
      logo.style.transform = 'scale(1)';
    });