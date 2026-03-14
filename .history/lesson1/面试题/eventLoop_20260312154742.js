// async function async1() {
//   console.log('async1 start')
//   await async2() //立刻执行
//   console.log('async1 end') //异步任务：微任务
// }

// async function async2() {
//   console.log('async2')
// }

// console.log('script start')

// setTimeout(function () {
//   console.log('setTimeout') //异步任务：宏任务
// }, 0)

// async1()

// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve()
// }).then(function () {
//   console.log('promise2') //异步任务：微任务
// })

// console.log('script end')

// script start
// async1 start
// script end
// setTimeout
// async2
// async1 end
// promise1
// promise2

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

async function async1() {
  console.log('async1 start')
  await async2()
  await async3() //微任务1
  console.log('async1 end') //微任务3
}

async function async2() {
  console.log('async2')
}

async function async3() {
  console.log('async3')
}

console.log('script start')

setTimeout(function () {
  console.log('setTimeout')
}, 0)

async1()

new Promise(function (resolve) {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2') //微任务2
})

console.log('script end')

// script start
// async1 start
// async2
// promise1
// script end
// async3
// promise2
// async1 end
// setTimeout
