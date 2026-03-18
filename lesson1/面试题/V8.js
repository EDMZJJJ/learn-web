main()

function main() {
  console.log(user)
  var user = { name: 'xiaoyao' }

  // console.log(age)
  // let age = 33

  sayHi()
  function sayHi() {
    console.log('hi')
  }
}

// 1. 创建一个全局的执行上下文 [global Exe context]
// 进入创建阶段：变量提升、创建全局作用域、绑定this
// 2. [main execution context]
// 3. [sayHi execution context]
// 4. 弹栈

// 内存区域：code区域（源码编译之后的指令）、Heap区域（堆，放对象、函数、promise等大主体）
// 运行区域：call stack 栈
