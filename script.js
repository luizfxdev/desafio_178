// Selecionar elementos do DOM
const sortBtn = document.getElementById('sort-btn')
const resetBtn = document.getElementById('reset-btn')
const numbersInput = document.getElementById('numbers-input')
const resultOutput = document.getElementById('result-output')
const calculationProcess = document.getElementById('calculation-process')

// Função para verificar se um número é primo
function isPrime(num) {
  // Números menores ou iguais a 1 não são primos
  if (num <= 1) return false

  // Verificar divisibilidade de 2 até a raiz quadrada do número
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false
  }

  return true
}

// Função para processar a entrada e encontrar números primos
function findPrimes() {
  // Limpar resultados anteriores
  resultOutput.textContent = ''
  calculationProcess.textContent = ''

  // Obter valores de entrada e converter para array de números
  const inputText = numbersInput.value.trim()

  if (!inputText) {
    resultOutput.textContent = 'Por favor, insira números para análise.'
    return
  }

  // Converter entrada para array de números
  const numbers = inputText
    .split(',')
    .map(item => parseInt(item.trim()))
    .filter(item => !isNaN(item))

  if (numbers.length === 0) {
    resultOutput.textContent = 'Nenhum número válido encontrado.'
    return
  }

  // Mostrar processo de cálculo
  calculationProcess.innerHTML = '<strong>Processo de Análise:</strong><br>'
  calculationProcess.innerHTML += `Números inseridos: [${numbers.join(', ')}]<br><br>`

  // Encontrar e mostrar números primos
  const primes = []
  calculationProcess.innerHTML += '<strong>Verificando números primos:</strong><br>'

  numbers.forEach(num => {
    const primeCheck = isPrime(num)
    calculationProcess.innerHTML += `${num} → ${primeCheck ? 'PRIMO' : 'não primo'}<br>`
    if (primeCheck) primes.push(num)
  })

  // Mostrar resultado
  if (primes.length > 0) {
    resultOutput.innerHTML = `<strong>Números primos encontrados:</strong> [${primes.join(', ')}]`
  } else {
    resultOutput.textContent = 'Nenhum número primo encontrado na lista.'
  }
}

// Função para resetar o formulário
function resetForm() {
  numbersInput.value = ''
  resultOutput.textContent = ''
  calculationProcess.textContent = ''
}

// Adicionar event listeners
sortBtn.addEventListener('click', findPrimes)
resetBtn.addEventListener('click', resetForm)

// Permitir também o uso da tecla Enter no input
numbersInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    findPrimes()
  }
})
