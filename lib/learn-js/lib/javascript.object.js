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

