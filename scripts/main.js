const list = document.querySelector('.list')
const todo = document.querySelector('input')
const button = document.querySelector('button')

const tarefas = []

function mostrarTarefas() {
  list.innerHTML = ``

  for (let tarefa of tarefas) {
    const span = document.createElement('span')

    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.classList.add(`check${tarefas.indexOf(tarefa)}`)

    const text = document.createTextNode(tarefa)
    const p = document.createElement('p')
    p.appendChild(text)

    const a = document.createElement('a')
    a.innerHTML = `X`

    a.setAttribute('onclick', `deleteTodo(${tarefas.indexOf(tarefa)})`)

    span.appendChild(check)
    span.appendChild(p)
    span.appendChild(a)
    list.appendChild(span)
  }
}
mostrarTarefas()

function addTodo() {
  const text = todo.value
  tarefas.push(text)
  todo.value = ''

  mostrarTarefas()
}
button.setAttribute('onclick', 'addTodo()')

function deleteTodo(pos) {
  tarefas.splice(pos, 1)
  mostrarTarefas()
}
