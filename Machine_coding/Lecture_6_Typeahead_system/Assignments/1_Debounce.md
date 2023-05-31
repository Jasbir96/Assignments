Que : Implement a custom debounce function

## solution
function debounce(func, wait) {
  let timer = null
  return function(...args) {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => {
      func.call(this, ...args)
    }, wait)
  }
}