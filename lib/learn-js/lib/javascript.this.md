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