const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const botaoSomar = document.getElementById('somar');
const botaoSubtrair = document.getElementById('subtrair');
const botaoMultiplicar = document.getElementById('multiplicar');
const botaoDividir = document.getElementById('dividir');
const limpar = document.getElementById('limpar');

function somar() {
  const numero1 = Number(valor1.value);
  const numero2 = Number(valor2.value);

  const resultado = numero1 + numero2;
  alert('Resultado da soma: ' + resultado);
}

function subtrair() {
  const numero1 = Number(valor1.value);
  const numero2 = Number(valor2.value);

  const resultado = numero1 - numero2;
  alert('Resultado da subtração: ' + resultado);
}

function multiplicar() {
  const numero1 = Number(valor1.value);
  const numero2 = Number(valor2.value);

  const resultado = numero1 * numero2;
  alert('Resultado da multiplicação: ' + resultado);
}

function dividir() {
  const numero1 = Number(valor1.value);
  const numero2 = Number(valor2.value);

  const resultado = numero1 / numero2;
  alert('Resultado da divisão: ' + resultado);
}

botaoSomar.addEventListener('click', somar);
botaoSubtrair.addEventListener('click', subtrair);
botaoMultiplicar.addEventListener('click', multiplicar);
botaoDividir.addEventListener('click', dividir);

limpar.addEventListener('click', function () {
  valor1.value = '';
  valor2.value = '';
  resultado.textContent = 'Resultado';
});
