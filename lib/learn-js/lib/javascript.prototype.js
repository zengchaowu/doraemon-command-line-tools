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