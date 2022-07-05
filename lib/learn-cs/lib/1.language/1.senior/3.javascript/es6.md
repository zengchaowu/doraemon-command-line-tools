# ES6模块

1. 顶级变量存在于模块顶级作用域
2. 执行在严格模式下
3. 模块顶部this为undefined
4. 使用export导出后，使用import导入使用
5. import以后，不能给导入的绑定重新赋值
6. 多次import，单个js文件也只会执行一次，js文件会缓存在内存中
7. 使用default export可以导出匿名类或者匿名函数

# 实例

1. 多导出

```javascript
export const id1;
export const id2;
import { id1, id2 } from './example.js';
// 必须加.js才能正确查找
// 前缀./用于区分是包还是本地文件。
```

2. 全导出（命名空间导出）

```javascript
import * as example from './example.js';
console.log(example.id1);
```

3. 默认导出（可以包含一个默认导出和多个多导出）

```javascript
// 默认导出只能导出一个。因为commonjs等其他模块系统，常常使用导出默认值，所以在es6模块中，对这种方式进行了支持。
export default function(num1, num2){
  return num1 + num2;
}
// 可以匿名也可以命名
function sum(num1, num2) {
  return num1 + num2;
}
export default sum;

import sum from './example.js'
sum(1,2) // sum是一个形参，代表默认导出的那个值。
```

