Que In this problem, you are asked to implement an enhanced debounce() which accepts third parameter, option: {leading: boolean, trailing: boolean}

leading: whether to invoke right away
trailing: whether to invoke after the delay.

Asked In : google


## solution 
```javascript
unction throttle(func, wait, option = {leading: true, trailing: true}) {
  // 1. cooling or not
  // 2. call posponed.
  
  //     1. once called,
  //       - if cooling, stash the call
  //       - if not colling, run it  and set the timer
  //     2. when time is up, reset cooling
  //       - if stashed call, call it, go to 1
  let timer = null
  let stashed = null
  
  const startCooling = () => {
     timer = window.setTimeout(check, wait)
  }
  
  const check = () => {
    timer = null
    if (stashed !== null) {
      func.apply(stashed[0], stashed[1])
      stashed = null
      startCooling()
    }
  }
  
  return function(...args) {
    if (timer !== null) {
      // cooling, stash it
      if (option.trailing) {
        stashed = [this, args]
      }
      return
    } 
    
    if (option.leading) {
      func.apply(this, args)
      startCooling()
      return
    } 

    if (option.trailing) {
      stashed = [this, args]
      startCooling()
    }  
  }
}
```