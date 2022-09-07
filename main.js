const worker = new Worker('worker.js')

const backgroundButton = document.querySelector('#changer')
const blockerButton = document.querySelector('#blocker')
const workerButton = document.querySelector('#worker')
const result = document.querySelector('#result')

blockerButton.addEventListener('click', event => {
  result.innerHTML = `Blocker Sum Called`
  let sum = 0
  for (let i = 0; i < 10000000000; i++) sum += i
  result.innerHTML = `Blocker Sum : ${sum}`
})

workerButton.addEventListener('click', event => {
  result.innerHTML = `Worker Sum Called`
  worker.postMessage(10000000000) // can send anything i am just sending something useful
  worker.onmessage = event => {
    result.innerHTML = `Worker Sum : ${event.data}`
  }
})

backgroundButton.addEventListener('click', event => {
  if (document.body.style.background !== 'lightgray')
    document.body.style.background = 'lightgray'
  else document.body.style.background = 'lightblue'
})
