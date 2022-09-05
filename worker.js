onmessage = msg => {
  let value = msg.data
  let sum = 0
  for (let i = 0; i < value; i++) sum += i
  postMessage(sum)
}
