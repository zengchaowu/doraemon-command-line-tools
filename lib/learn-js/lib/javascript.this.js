
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

