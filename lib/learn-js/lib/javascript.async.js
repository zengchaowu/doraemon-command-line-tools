// js中的异步编程

// 如何定义一个未来执行的函数

function now() {
    console.log("now")
}

function later() {
    console.log("later")
}
now()
setTimeout(later, 2000);
console.log("bottom")

// 常用的方式是使用setTimeout延迟执行函数

/*

    使用事件循环的方式执行异步函数

var eventloop = []
var event
while (true) {
    if (eventloop.length > 0) {
        event = eventloop.shift()
        try event() {

        } catch (error) {
            reportError(error)
        }
    }
    // 每循环一次就称为一次tick，每个tick只会获得并执行一个事件（常常是你定义的回调函数）。
}
*/
// 上面的代码实际上会阻塞当前的线程，这只是一个简化的介绍。实际上可能执行在单独的子线程中。
// setTimeout本身也是一个事件，也会由事件循环接管，所以其精确度不高的原因是需要等待队列执行到它。


// js是单线程的，没有主动的多线程操作，所以可以避免并行计算导致的需要加锁的问题。









// ES6的异步
// 任务队列，每个tick，都会执行这个任务队列。异步任务产生时也会加入到这个任务队列中，而不是产生一个事件加到事件循环的队列中。
// 任务队列是在事件队列中的，所以在整个事件循环机制中，存在两个队列。

// 任务队列和tick的关系，任务队列在当前tick的末尾执行，也就是说相当于立刻执行。settimeout是在下一个tick。


// promise。js中，promise

// var p = openfile()
// function complete(p) {
    //
// }

console.log("do other things")


// 实例
function func1() {
    let count = 0
    for (let index = 0; index < 80000; index++) {
        count += index
    }
    return count
}

function func2() {
    let count = 0
    for (let index = 0; index < 100000; index++) {
        count += index
    }
    return count
}

// promise 接收一个函数作为参数
var p = new Promise(
    function (resolve, reject) {
        console.log("init promise")
        while (true) {
            
        }
        var n = Math.floor(Math.random * 1000)
        if (n > 500) {
            resolve(n)
        }
    }
)

// p.then(
//     function (value) {
//         console.log(value)
//     }
// )


var p1 = Promise.resolve(1)
p2 = p1.then(
    function func(value) {
        return value + 1
    }
)
p2.then(
    function func(value) {
        console.log(value)
    }
)

p1.then().then().then().then().catch().then()