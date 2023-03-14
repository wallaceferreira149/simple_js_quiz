/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/

const questions = [
  {
    title: 'Which of the following is an advantage of using JavaScript?',
    options: [
      'Less server interaction',
      'Immediate feedback to the visitors',
      'Increased interactivity',
      'All of the above.'
    ],
    correct: 3
  },
  {
    title: 'Which of the following type of variable takes precedence over other if names are same?',
    options: [
      'global variable.',
      'local variable.',
      'Both of the above.',
      'None of the above.'
    ],
    correct: 1
  },
  {
    title: 'Which built-in method reverses the order of the elements of an array?',
    options: [
      'changeOrder(order)',
      'reverse()',
      'sort(order)',
      'None of the above.'
    ],
    correct: 1
  },
  {
    title: 'Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?',
    options: [
      'pop()',
      'push()',
      'reduce()',
      'reduceRight()'
    ],
    correct: 3
  },
]

let username = ``
const playForm = document.querySelector('.start')
const quizForm = document.querySelector('.quiz')

playForm.addEventListener('submit', event => {
  event.preventDefault()
  const usernamePattern = /^.{3,}$/
  if (!usernamePattern.test(playForm.username.value)) {
    const helper = document.querySelector('.helper')
    helper.textContent = `Seu nome deve conterno mínimo 3 caracteres. 📒`
    username.focus();
    return;
  }
  const modal = document.querySelector('.modal')
  modal.style.display = 'none'
  quizForm.style.display = 'flex'
  username = playForm.username.value;
})

questions.forEach(question => {
  
})