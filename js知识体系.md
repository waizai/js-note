       运行时
       文法
       执行过程

# 1. 类型（运行时）
* 都有哪些类型？
* 为什么有的编程规范要求用 void 0 代替 undefined ***
* 字符串有最大长度吗 ***
* 0.1 + 0.2 不等于0.3 为啥 ***
* Symbol是啥 ***
* 为什么给对象添加的方法能用在基本类型上？ ***
* 3和new Number(3)是不是同一个值？***



        1. 都有哪些类型？
            undefined null
            object
            number
            string
            boolean
            symbol
        2. 列个表格展示各个类型
| 类型 | undefined | null | 
| ------ | ------ | ------ |
| 表示？ | 未定义 | 定义了，值为空 | 
|  | 缺点： 可以被覆盖，建议用void 0代替 | 短文本 | 
| 是否关键字？ | 否 | 是 | 

---
---

| 类型 | string | number | boolean | 
| ------ | ------ | ------ |------ |
| 表示？ | 字符串 | 数字 | 布尔 | 
|  | 字符串一旦创建出来，无法改变，所以具有值类型的特征*** |js中0分为+0和-0，区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是 -Infinity。***|  |
|  |  |浮点数运算的精度问题导致0.1 + 0.2不等于0.3；     正确的比较方式是console.log( Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); ***|  |
| 是否关键字？ | 否 | 否 |  是 true false | 
|  |  | 非整数的number类型无法用== 或者===比较 ***|  | 

---
---

| 类型 | object | symbol | 
| ------ | ------ | ------ |
| 表示？ | 对象 | 非字符串的对象key的集合 *** | 
| 有什么用？  |js中的核心类型，标识一切有形和无形物体的总称 | 不会跟其他属性名冲突 *** | 
||属性的集合： 分为数据属性和访问器属性  二者都是key - value ***||
| 是否关键字？ | 否 | 否 | 
| 如何创建？ | var obj = new Object() | var a = Symbol() *** | 
| 是否可以隐士转换？ | 否 但是可以显示转换 boolean *** | 否 但是可以显示转换string boolean *** | 

---
---
symbol: 

**对象的Symbol.iterator属性，指向该对象的默认遍历器方法。*****

**对象进行for...of循环时，会调用Symbol.iterator方法，返回该对象的默认遍历器。*****

```
<!--***-->
    var o = new Object

    o[Symbol.iterator] = function() {
        var v = 0
        return {
            next: function() {
                return { value: v++, done: v > 10 }
            }
        }        
    };

    for(var v of o) 
        console.log(v); // 0 1 2 3 ... 9

```
---
---
Object

| object | 跟基本类型中重叠的对象 | 两用的构造器*** | 
| ------ | ------ | ------ |
| ------ | Number, String, Boolean, Symbol *** | Number, String, Boolean |
| ------ |Symbol用new 会报错 *** | 1. new xx(产生对象) 2. 直接调用（强制类型转换）*** |

---
---

# 2. 类型转换 (横转换成数列)
| ------ | null | undefined | boolean(true) | boolean(false)| number| string | symbol | object |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| boolean |false| false | -- | -- | 0/NaN(false) 非0(true) | 空串(false) 非空串(true) *** | -- | -- |
| number | 0 | NaN *** | 1 *** | 0 | -- | 小范围内是符合直觉的十进制表示 | 正常装 | 不支持 |
| string | 'null' | 'undefined' | 'true' | 'false' | 正常转 | tostring() | ------ | 不支持 |
| object | TypeEroor *** | TypeEroor *** | 装箱转换*** | 装箱转换*** | 装箱 | 装箱 | -- | -- |