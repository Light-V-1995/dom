# jQuery 设计浅述

jQuery 是一套跨浏览器的 JavaScript 库，简化 HTML 与 JavaScript 之间的操作。它是目前前端最长寿的库，由约翰·雷西格 (John Resig) 于 2006 年发布第一版。它也是目前最受欢迎的库之一，在全球排名前一百万的网站中，有将近 75% 在使用 jQuery.

我将 jQuery 的设计思想概括为：选取元素，对其操作。它的本质是一个封装的 DOM 库，由于原生的 DOM 太过冗长与复杂，jQuery 的设计者就将 DOM 封装起来以达到使代码优美简洁的目的。

## jQuery 如何获取元素

使用 jQuery 的第一步，往往就是将一个选择表达式，放进构造函数 jQuery() （简写为$），然后得到选取的元素。
选择表达式可以是 CSS 选择器，也可以是 jQuery 特有的表达式：
````JavaScript
$(document) //选择整个文档对象

$('#myId') //选择ID为myId的网页元素

$('div.myClass') // 选择class为myClass的div元素

$('input[name=first]') // 选择name属性等于first的input元素

$('a:first') //选择网页中第一个a元素

$('tr:odd') //选择表格的奇数行

$('#myForm :input') // 选择表单中的input元素

$('div:visible') //选择可见的div元素

$('div:gt(2)') // 选择所有的div元素，除了前三个

$('div:animated') // 选择当前处于动画状态的div元素
````

## jQuery 如何链式操作

jQuery 可以在选中网页元素以后，可以对它进行一系列操作，并且所有操作可以连接在一起，以链条的形式写出来，比如：
````JavaScript
$('div').find('h3').addClass('.red').end()
````
它的原理是：每一步的 jQuery 操作，返回的都是一个 jQuery 对象，拥有完整的 jQuery 函数，所以不同操作可以连在一起。

## jQuery 如何创建元素

在 jQuery 中创建元素十分简单，只要把新元素直接传入jQuery的构造函数就行了：
````JavaScript
$('<p>Hello</p>')

$('<li class="new">new list item</li>')

$('ul').append('<li>list item</li>')
````

## jQuery 如何移动元素

jQuery 提供了两组方法，来操作元素在网页中的位置移动。一组方法是直接移动该元素，另一组方法是移动其他元素，使得目标元素达到我们想要的位置。如果我们想要将 '#div1' 插入到 '#div2' 之前，可以用下面两种方法实现：
````JavaScript
$('#div1').insertBefore('#div2')
//------
$('#div2').before('#div1')
````
上述两种方法效果一样，但第一种方法的返回值是 '#div1', 第二种方法的返回值是 '#div2', 即“谁调用的方法返回谁”。
同样可以移动元素的方法还有：
````JavaScript
.insertAfter()和.after() //在现存元素的外部，从后面插入元素

.insertBefore()和.before() //在现存元素的外部，从前面插入元素

.appendTo()和.append() //在现存元素的内部，从后面插入元素

.prependTo()和.prepend() //在现存元素的内部，从前面插入元素
````
## jQuery 如何修改元素的属性

jQuery 中有以下方法来修改元素的属性：
````JavaScript
.attr() //获取匹配的元素集合中的第一个元素的属性的值。设置每一个匹配元素的一个或多个属性
..prop() //获取匹配的元素集中第一个元素的属性 (property) 值为匹配的元素设置一个或多个属性 (properties)
.removeAttr() //为匹配的元素集合中的每个元素中移除一个属性 (attribute)
.removeProp() //为集合中匹配的元素删除一个属性 (property)
.val() //获取匹配的元素集合中第一个元素的当前值。设置匹配的元素集合中每个元素的值
````