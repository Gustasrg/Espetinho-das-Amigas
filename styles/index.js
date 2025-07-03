const espetinhoMap = {
  carne: {
    angulo: 0,
    cor: '--carne'
  },
  carneComQueijo: {
    angulo: -90,
    cor: '--carne-com-queijo'
  },
  frango: {
    angulo: -180,
    cor: '--frango'
  },
  coracao: {
    angulo: -270,
    cor: '--coracao'
  }
};

function trocarEspetinho(tipo) {
  const espetinhos = document.getElementById('espetinhos');
  const img = espetinhos.querySelector('img');
  const body = document.querySelector('body');
  const circle = document.getElementById('circle');

  const info = espetinhoMap[tipo];
  if (!info) {
    console.warn('Espetinho desconhecido:', tipo);
    return;
  }

  espetinhos.className = '';
  espetinhos.classList.add(tipo);

  body.style.backgroundColor = `var(${info.cor})`;
  circle.style.backgroundColor = `var(${info.cor})`;
}

const btnCardapio = document.getElementById('btn-cardapio');
const btnVoltar = document.getElementById('btn-voltar');
const paginaPrincipal = document.getElementById('pagina-principal');
const paginaCardapio = document.getElementById('pagina-cardapio');

btnCardapio.addEventListener('click', () => {
  paginaPrincipal.style.display = 'none';
  paginaCardapio.style.display = 'flex';
});

btnVoltar.addEventListener('click', () => {
  paginaCardapio.style.display = 'none';
  paginaPrincipal.style.display = 'flex';
});

btnCardapio.addEventListener('click', () => {
  paginaPrincipal.style.display = 'none';
  paginaCardapio.style.display = 'flex';
  document.body.style.overflow = 'auto';
});
