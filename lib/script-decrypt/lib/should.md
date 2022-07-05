
const description = `
Should是一个流行的断言库

> node自带的assert断言库功能有限

原生assert库使用方法
require('assert').equal(10, target.add(5,5))
Should使用方法
target.add(5,5).require('should').be.equal(10)

优势
1. 可以对对象类型进行断言
2. 对返回值类型断言
   should(lib.objType(/^a/)).be.a.Object()
3. 可以测试异步方法
4. 集成supertest路由测试/api测试

代码覆盖率
* 函数覆盖率
* 行覆盖率
* 分支覆盖率
* 语句覆盖率
使用istanbul作为检查工具
`