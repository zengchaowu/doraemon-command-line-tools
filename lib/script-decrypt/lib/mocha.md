
const description = `
Mocha是一个流行的单元测试框架

使用流程（target.js）
1. 在同级目录下创建target.test.js
2. const target = require(./target)
3. describe('Target', function() {
     // 函数测试，可以嵌套
     describe('#function()', function() {
       // 用例测试
       it('should return 10', function() {
         require('assert').equal(10, target.add(5,5))
       })
       // 覆盖所有情况的其他测试用例
       ...
     })
   })
4. mocha test

常用命令
* mocha -v
* mocha --colors 测试时使用颜色标记 / mocha --no-colors 测试时不使用颜色标记
`