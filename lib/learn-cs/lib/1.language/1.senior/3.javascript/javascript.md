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



/*
    js中的class，js中是没有类的，只有一些类似类的工具方法。例如new 和 instanceof.
    但是我们可以通过一些方法模拟面向对象的一些特性。
*/


// 混入 Mixin
// 混入提供了类似继承的功能，但是其实是相当于将两个对象合并为一个对象。更像是一种组合方式。


/*
    js对象到底是什么？
*/

// 定义对象
var obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}
console.log(obj1)

var obj2 = Object()
obj2.key1 = "value1"
obj2.key2 = "value2"
obj2.key3 = "value3"
console.log(obj2)

var obj3 = obj1

console.log(obj1 == obj2) // false
console.log(obj3 == obj1) // true

// javascript中的主要类型

// 其中，string,number,boolean,null,undefined为简单基本数据类型。
var string1 = ""
console.log(typeof (string1))
var number1 = 1
var boolean1 = true
var null1 = null
console.log(typeof (null))
var undefined1 = undefined
console.log(typeof (undefined))
var object1 = Object()

// 函数为特殊的对象类型，是对象的一个子类型。
// 数组也是对象的一种。


// 内置对象
// String Number Boolean Object Function Array Date RegExp Error
// js中的内置对象，类似于其他语言中的类，但其本质只是一些构造函数而已。用来生成对应类型的子对象。

// 字面量与对象，字面量是语法糖，是用来减少创建对象再赋值的代码。
var string2 = "string2" // string2就是字面量
console.log(typeof (string2))
var string3 = String("string3")
console.log(typeof (String)) // 字面量就是语法躺


// js中的对象与类的区别
// js对象更像一个map，内部不能包含方法。方法也必须以keyvalue的方式挂载在上面。
var object5 = {
    key: "",
    vaulue: ""
}

// prototype 原型链

// js中使用原型链模拟继承行为，在访问对象的属性的时候，会递归遍历原型链。
// 最终会找到内置的Object.prototype，这个对象包含很多基础功能，例如toString() valueof()
// js中所有的对象都存在一个prototype的属性。
function Obj1() {
    this.a = 1
}
console.log(typeof(Obj1))

// 我们通过new调用一个普通函数，会劫持调用方式，类似于装饰器的模式。
var obj1 = new Obj1()
console.log(typeof(obj1))
// 这里首先会通过原型链检查是否存在b，如果不存在就加到obj上。
obj1.b = 2
// 使用defineProperty则强制向obj添加属性。
// Object.defineProperty(obj1, {c: 3})
console.log(obj1.c)
console.log(Obj1.prototype)
console.log(Object.getPrototypeOf(obj1))
console.log(obj1.constructor)
console.log(Object.constructor)


// 对象关联
var foo = {
    something: function(){
        console.log("foo.something")
    }
}
var bar = Object.create(foo) // 这里会将两个对象创建原型链关联，并且不会生成prototype和constructor引用。
bar.something() // 此处可以通过原型链调用。
console.log(bar.prototype)
console.log(bar.constructor)

// Js中的字典。
var dic = Object.create(null) // 这个对象没有原型链，所以适合存储数据。因为存在原型链的对象，在赋值时会需要遍历原型链条，导致干扰。



/*
    this 是在调用时被绑定的，取决于函数的调用栈。
    所有，我们如果要找到this的具体绑定对象，需要找到函数的调用位置，然后判断绑定类型。
*/


// 默认绑定
var obj1 = {

}
function func1() {
    console.log(this) // 在node下，this默认绑定的是global对象。[严格模式下，this会默认绑定到undefined。]
    console.log(this.a) // node下为undefined。
}
var a = 2
func1()

// 隐式绑定
var obj2 = {
    a: 2,
    func: function func2() {
        console.log(this)
    }
}
obj2.func() // 因为存在obj2上下文，this会绑定到obj2。

// 隐式丢失 某些情况下，隐式绑定会丢失绑定对象，this会执行默认绑定。
function func3() {
    console.log(this)
}
var obj3 = {
    func: func3
}
var bar3 = obj3.func // 此时bar3代表的就是fun3函数，此处是值传递
bar3() // 这里直接调用func3，并没有传入上下文对象。

// 显式绑定 我们可以在某个对象上强制调用函数。
function func4() {
    console.log(this)
}
var obj4 = {
    func: func4
}
var number4 = 2
func4.apply(number4) // 如果传入基本类型，会提升为对象形式。
func4.call(obj4) // 也可以使用func4.apply(obj4)。

// 硬绑定
function func5() {
    console.log(this)
}
var obj5 = {
    func: func5
}
var bar = function() { // 本质是使用bar装饰了func方法。但是，如果我们直接使用func5.call也会修改绑定对象。
    func5.call(obj5)
}
var bar2 = func5.bind(obj5) // 这是es提供的硬绑定方法，原理就是上面的代码。
bar()
bar.call(globalThis) // 使用显式绑定无法修改硬绑定的绑定对象。
func5.call(2)
bar()

// new绑定
// 在传统的面向对象语言中，使用new会调用类的构造函数。
// js中构造函数不属于任何一个类，并且只不过是预先定义的一些工具函数，能够被new关键字调用。
// 使用new来调用与直接调用这些函数，存在差别。
// 使用new会创建一个全新的对象，然后执行prototype连接，然后将其绑定到函数调用的this。
console.log('------------ new 绑定 ---------------')
function func6() {
    console.log(typeof(this))
    console.log(this)
}
console.log(typeof(func6))
var bar = new func6() // 使用new来调用函数时，会创建一个新的对象，bar获取的是返回的对象。js中没有类的概念，只要结构相同就是同一个对象。
var bar2 = func6
bar2() // 这里是执行默认绑定
console.log(bar2)

# js中的this

## 显式绑定
强制在某个对象上面调用函数，这个对象本来不包含此方法。
这种情况下，this指的就是obj。
```javascript
var obj = {}
function func() {}
func.call(obj);
```
## 硬绑定
显式绑定仍然可能会丢失绑定，所以我们引入硬绑定。
```javascript
function func() {}
var obj = {}
var func1 = function(){
    func.call(obj)
}
bar()
```

