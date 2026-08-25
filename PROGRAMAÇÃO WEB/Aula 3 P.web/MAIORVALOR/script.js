const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const botao = document.getElementById('botao');
const resultado = document.getElementById('resultado');

botao.addEventListener('click', function () {
  if (valor1.value === '' || valor2.value === '') {
    resultado.textContent = 'Preencha os dois campos';
    resultado.classList.remove('maior', 'igual');
    resultado.classList.add('aviso');
    return;
  }

  const numero1 = Number(valor1.value);
  const numero2 = Number(valor2.value);

  resultado.classList.remove('maior', 'igual', 'aviso');

  if (numero1 > numero2) {
    resultado.textContent = 'O maior valor é ' + numero1;
    resultado.classList.add('maior');
  } else if (numero2 > numero1) {
    resultado.textContent = 'O maior valor é ' + numero2;
    resultado.classList.add('maior');
  } else {
    resultado.textContent = 'Os dois valores são iguais';
    resultado.classList.add('igual');
  }
});
