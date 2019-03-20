js中对象的分类   https://time.geekbang.org/column/article/80011

#1. 对象的分类

1. 宿主对象（host Objects）：由 JavaScript 宿主环境提供的对象，它们的行为完全由宿主环境决定。
<li>
<p>内置对象（Built-in Objects）：由 JavaScript 语言提供的对象。</p>
<ul>
<li>固有对象（Intrinsic Objects ）：由标准规定，随着 JavaScript 运行时创建而自动创建的对象实例。</li>
<li>原生对象（Native Objects）：可以由用户通过 Array、RegExp 等内置构造器或者特殊语法创建的对象。</li>
<li>普通对象（Ordinary Objects）：由{}语法、Object 构造器或者 class 关键字定义类创建的对象，它能够被原型继承。</li>
</ul>
</li>