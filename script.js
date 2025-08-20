function filtrar(categoria) {
  const filmes = document.querySelectorAll('.filme-card');
  filmes.forEach(filme => {
    if (categoria === 'todos' || filme.classList.contains(categoria)) {
      filme.style.display = 'block';
    } else {
      filme.style.display = 'none';
    }
  });
}
