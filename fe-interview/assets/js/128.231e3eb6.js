(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1367:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("上一节，我们讲了复杂度的大 O 表示法和几个分析技巧，还举了一些常见复杂度分析的例子，比如 "),a("code",[t._v("O(1)")]),t._v("、"),a("code",[t._v("O(logn)")]),t._v("、"),a("code",[t._v("O(n)")]),t._v("、"),a("code",[t._v("O(nlogn)")]),t._v(" 复杂度分析。掌握了这些内容，对于复杂度分析这个知识点，你已经可以到及格线了。但是，我想你肯定不会满足于此。")])]),t._v(" "),a("blockquote",[a("p",[t._v("今天我会继续给你讲四个复杂度分析方面的知识点，最好情况时间复杂度（best case time complexity）、最坏情况时间复杂度（worst case time complexity）、平均情况时间复杂度（average case time complexity）、均摊时间复杂度（amortized time complexity）。如果这几个概念你都能掌握，那对你来说，复杂度分析这部分内容就没什么大问题了。")])]),t._v(" "),a("h2",{attrs:{id:"最好、最坏情况时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最好、最坏情况时间复杂度"}},[t._v("#")]),t._v(" 最好、最坏情况时间复杂度")]),t._v(" "),a("p",[t._v("上一节我举的分析复杂度的例子都很简单，今天我们来看一个稍微复杂的。你可以用我上节教你的分析技巧，自己先试着分析一下这段代码的时间复杂度。")]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n 表示数组 array 的长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("你应该可以看出来，这段代码要实现的功能是，在一个无序的数组（array）中，查找变量 "),a("code",[t._v("x")]),t._v(" 出现的位置。如果没有找到，就返回 "),a("code",[t._v("-1")]),t._v("。按照上节课讲的分析方法，这段代码的复杂度是 "),a("code",[t._v("O(n)")]),t._v("，其中，"),a("code",[t._v("n")]),t._v(" 代表数组的长度。")]),t._v(" "),a("li",[t._v("我们在数组中查找一个数据，并不需要每次都把整个数组都遍历一遍，因为有可能中途找到就可以提前结束循环了。但是，这段代码写得不够高效。我们可以这样优化一下这段查找代码。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// n 表示数组 array 的长度")]),t._v("\nint "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" int x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  int i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  int pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       pos "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("这个时候，问题就来了。我们优化完之后，这段代码的时间复杂度还是 "),a("code",[t._v("O(n)")]),t._v(" 吗？很显然，咱们上一节讲的分析方法，解决不了这个问题。")]),t._v(" "),a("li",[t._v("因为，要查找的变量 "),a("code",[t._v("x")]),t._v(" 可能出现在数组的任意位置。如果数组中第一个元素正好是要查找的变量 "),a("code",[t._v("x")]),t._v("，那就不需要继续遍历剩下的 "),a("code",[t._v("n-1")]),t._v(" 个数据了，那时间复杂度就是 "),a("code",[t._v("O(1)")]),t._v("。但如果数组中不存在变量 "),a("code",[t._v("x")]),t._v("，那我们就需要把整个数组都遍历一遍，时间复杂度就成了 "),a("code",[t._v("O(n)")]),t._v("。所以，不同的情况下，这段代码的时间复杂度是不一样的。")]),t._v(" "),a("li",[t._v("为了表示代码在不同情况下的不同时间复杂度，我们需要引入三个概念：最好情况时间复杂度、最坏情况时间复杂度和平均情况时间复杂度。")]),t._v(" "),a("li",[t._v("顾名思义，最好情况时间复杂度就是，在最理想的情况下，执行这段代码的时间复杂度。就像我们刚刚讲到的，在最理想的情况下，要查找的变量 "),a("code",[t._v("x")]),t._v(" 正好是数组的第一个元素，这个时候对应的时间复杂度就是最好情况时间复杂度。")]),t._v(" "),a("li",[t._v("同理，最坏情况时间复杂度就是，在最糟糕的情况下，执行这段代码的时间复杂度。就像刚举的那个例子，如果数组中没有要查找的变量 "),a("code",[t._v("x")]),t._v("，我们需要把整个数组都遍历一遍才行，所以这种最糟糕情况下对应的时间复杂度就是最坏情况时间复杂度。")])]),t._v(" "),a("h2",{attrs:{id:"平均情况时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平均情况时间复杂度"}},[t._v("#")]),t._v(" 平均情况时间复杂度")]),t._v(" "),a("blockquote",[a("p",[t._v("我们都知道，最好情况时间复杂度和最坏情况时间复杂度对应的都是极端情况下的代码复杂度，发生的概率其实并不大。为了更好地表示平均情况下的复杂度，我们需要引入另一个概念：平均情况时间复杂度，后面我简称为平均时间复杂度。")])]),t._v(" "),a("ul",[a("li",[t._v("平均时间复杂度又该怎么分析呢？我还是借助刚才查找变量 "),a("code",[t._v("x")]),t._v(" 的例子来给你解释。")]),t._v(" "),a("li",[t._v("要查找的变量 "),a("code",[t._v("x")]),t._v(" 在数组中的位置，有 "),a("code",[t._v("n+1")]),t._v(" 种情况：在数组的 "),a("code",[t._v("0～n-1")]),t._v(" 位置中和不在数组中。我们把每种情况下，查找需要遍历的元素个数累加起来，然后再除以 "),a("code",[t._v("n+1")]),t._v("，就可以得到需要遍历的元素个数的平均值，即：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/134.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("我们知道，时间复杂度的大 "),a("code",[t._v("O")]),t._v(" 标记法中，可以省略掉系数、低阶、常量，所以，咱们把刚刚这个公式简化之后，得到的平均时间复杂度就是 "),a("code",[t._v("O(n)")]),t._v("。")]),t._v(" "),a("li",[t._v("这个结论虽然是正确的，但是计算过程稍微有点儿问题。究竟是什么问题呢？我们刚讲的这 "),a("code",[t._v("n+1")]),t._v(" 种情况，出现的概率并不是一样的。我带你具体分析一下。（这里要稍微用到一点儿概率论的知识，不过非常简单，你不用担心。）")]),t._v(" "),a("li",[t._v("我们知道，要查找的变量 "),a("code",[t._v("x")]),t._v("，要么在数组里，要么就不在数组里。这两种情况对应的概率统计起来很麻烦，为了方便你理解，我们假设在数组中与不在数组中的概率都为 "),a("code",[t._v("1/2")]),t._v("。另外，要查找的数据出现在 "),a("code",[t._v("0～n-1")]),t._v(" 这 "),a("code",[t._v("n")]),t._v(" 个位置的概率也是一样的，为 "),a("code",[t._v("1/n")]),t._v("。所以，根据概率乘法法则，要查找的数据出现在 "),a("code",[t._v("0～n-1")]),t._v(" 中任意位置的概率就是 "),a("code",[t._v("1/(2n)")]),t._v("。")])]),t._v(" "),a("blockquote",[a("p",[t._v("因此，前面的推导过程中存在的最大问题就是，没有将各种情况发生的概率考虑进去。如果我们把每种情况发生的概率也考虑进去，那平均时间复杂度的计算过程就变成了这样：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/135.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("这个值就是概率论中的加权平均值，也叫作期望值，所以平均时间复杂度的全称应该叫加权平均时间复杂度或者期望时间复杂度。")])]),t._v(" "),a("blockquote",[a("p",[t._v("引入概率之后，前面那段代码的加权平均值为 "),a("code",[t._v("(3n+1)/4")]),t._v("。用大 "),a("code",[t._v("O")]),t._v(" 表示法来表示，去掉系数和常量，这段代码的加权平均时间复杂度仍然是 "),a("code",[t._v("O(n)")]),t._v("。")])]),t._v(" "),a("ul",[a("li",[t._v("你可能会说，平均时间复杂度分析好复杂啊，还要涉及概率论的知识。实际上，在大多数情况下，我们并不需要区分最好、最坏、平均情况时间复杂度三种情况。像我们上一节课举的那些例子那样，很多时候，我们使用一个复杂度就可以满足需求了。只有同一块代码在不同的情况下，时间复杂度有量级的差距，我们才会使用这三种复杂度表示法来区分。")])]),t._v(" "),a("h2",{attrs:{id:"均摊时间复杂度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#均摊时间复杂度"}},[t._v("#")]),t._v(" 均摊时间复杂度")]),t._v(" "),a("blockquote",[a("p",[t._v("到此为止，你应该已经掌握了算法复杂度分析的大部分内容了。下面我要给你讲一个更加高级的概念，均摊时间复杂度，以及它对应的分析方法，摊还分析（或者叫平摊分析）。")])]),t._v(" "),a("ul",[a("li",[t._v("均摊时间复杂度，听起来跟平均时间复杂度有点儿像。对于初学者来说，这两个概念确实非常容易弄混。我前面说了，大部分情况下，我们并不需要区分最好、最坏、平均三种复杂度。平均复杂度只在某些特殊情况下才会用到，而均摊时间复杂度应用的场景比它更加特殊、更加有限。")]),t._v(" "),a("li",[t._v("老规矩，我还是借助一个具体的例子来帮助你理解。（当然，这个例子只是我为了方便讲解想出来的，实际上没人会这么写。）")])]),t._v(" "),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// array 表示一个长度为 n 的数组")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码中的 array.length 就等于 n")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" array "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" new "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n       array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n \n    array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("我先来解释一下这段代码。这段代码实现了一个往数组中插入数据的功能。当数组满了之后，也就是代码中的 "),a("code",[t._v("count == array.length")]),t._v(" 时，我们用 for 循环遍历数组求和，并清空数组，将求和之后的 sum 值放到数组的第一个位置，然后再将新的数据插入。但如果数组一开始就有空闲空间，则直接将数据插入数组。")])]),t._v(" "),a("ul",[a("li",[t._v("那这段代码的时间复杂度是多少呢？你可以先用我们刚讲到的三种时间复杂度的分析方法来分析一下。")]),t._v(" "),a("li",[t._v("最理想的情况下，数组中有空闲空间，我们只需要将数据插入到数组下标为 "),a("code",[t._v("count")]),t._v(" 的位置就可以了，所以最好情况时间复杂度为 "),a("code",[t._v("O(1)")]),t._v("。最坏的情况下，数组中没有空闲空间了，我们需要先做一次数组的遍历求和，然后再将数据插入，所以最坏情况时间复杂度为 "),a("code",[t._v("O(n)")]),t._v("。")]),t._v(" "),a("li",[t._v("那平均时间复杂度是多少呢？答案是 "),a("code",[t._v("O(1)")]),t._v("。我们还是可以通过前面讲的概率论的方法来分析。")])]),t._v(" "),a("blockquote",[a("p",[t._v("假设数组的长度是 "),a("code",[t._v("n")]),t._v("，根据数据插入的位置的不同，我们可以分为 "),a("code",[t._v("n")]),t._v(" 种情况，每种情况的时间复杂度是 "),a("code",[t._v("O(1)")]),t._v("。除此之外，还有一种“额外”的情况，就是在数组没有空闲空间时插入一个数据，这个时候的时间复杂度是 "),a("code",[t._v("O(n)")]),t._v("。而且，这 "),a("code",[t._v("n+1")]),t._v(" 种情况发生的概率一样，都是 "),a("code",[t._v("1/(n+1)")]),t._v("。所以，根据加权平均的计算方法，我们求得的平均时间复杂度就是：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/136.png",alt:""}})]),t._v(" "),a("ul",[a("li",[t._v("至此为止，前面的最好、最坏、平均时间复杂度的计算，理解起来应该都没有问题。但是这个例子里的平均复杂度分析其实并不需要这么复杂，不需要引入概率论的知识。这是为什么呢？我们先来对比一下这个 "),a("code",[t._v("insert()")]),t._v(" 的例子和前面那个 "),a("code",[t._v("find()")]),t._v(" 的例子，你就会发现这两者有很大差别。")]),t._v(" "),a("li",[t._v("首先，"),a("code",[t._v("find()")]),t._v(" 函数在极端情况下，复杂度才为 "),a("code",[t._v("O(1)")]),t._v("。但 "),a("code",[t._v("insert()")]),t._v(" 在大部分情况下，时间复杂度都为 "),a("code",[t._v("O(1)")]),t._v("。只有个别情况下，复杂度才比较高，为 "),a("code",[t._v("O(n)")]),t._v("。这是 "),a("code",[t._v("insert()")]),t._v(" 第一个区别于 "),a("code",[t._v("find()")]),t._v(" 的地方。")]),t._v(" "),a("li",[t._v("我们再来看第二个不同的地方。对于 "),a("code",[t._v("insert()")]),t._v(" 函数来说，"),a("code",[t._v("O(1)")]),t._v(" 时间复杂度的插入和 "),a("code",[t._v("O(n)")]),t._v(" 时间复杂度的插入，出现的频率是非常有规律的，而且有一定的前后时序关系，一般都是一个 "),a("code",[t._v("O(n)")]),t._v(" 插入之后，紧跟着 "),a("code",[t._v("n-1")]),t._v(" 个 "),a("code",[t._v("O(1)")]),t._v(" 的插入操作，循环往复。")])]),t._v(" "),a("blockquote",[a("p",[t._v("所以，针对这样一种特殊场景的复杂度分析，我们并不需要像之前讲平均复杂度分析方法那样，找出所有的输入情况及相应的发生概率，然后再计算加权平均值。")])]),t._v(" "),a("ul",[a("li",[t._v("针对这种特殊的场景，我们引入了一种更加简单的分析方法：摊还分析法，通过摊还分析得到的时间复杂度我们起了一个名字，叫均摊时间复杂度。")]),t._v(" "),a("li",[t._v("那究竟如何使用摊还分析法来分析算法的均摊时间复杂度呢？")])]),t._v(" "),a("blockquote",[a("p",[t._v("我们还是继续看在数组中插入数据的这个例子。每一次 "),a("code",[t._v("O(n)")]),t._v(" 的插入操作，都会跟着 "),a("code",[t._v("n-1")]),t._v(" 次 "),a("code",[t._v("O(1)")]),t._v(" 的插入操作，所以把耗时多的那次操作均摊到接下来的 "),a("code",[t._v("n-1")]),t._v(" 次耗时少的操作上，均摊下来，这一组连续的操作的均摊时间复杂度就是 "),a("code",[t._v("O(1)")]),t._v("。这就是均摊分析的大致思路。你都理解了吗？")])]),t._v(" "),a("ul",[a("li",[t._v("均摊时间复杂度和摊还分析应用场景比较特殊，所以我们并不会经常用到。为了方便你理解、记忆，我这里简单总结一下它们的应用场景。如果你遇到了，知道是怎么回事儿就行了。")]),t._v(" "),a("li",[t._v("对一个数据结构进行一组连续操作中，大部分情况下时间复杂度都很低，只有个别情况下时间复杂度比较高，而且这些操作之间存在前后连贯的时序关系，这个时候，我们就可以将这一组操作放在一块儿分析，看是否能将较高时间复杂度那次操作的耗时，平摊到其他那些时间复杂度比较低的操作上。而且，在能够应用均摊时间复杂度分析的场合，一般均摊时间复杂度就等于最好情况时间复杂度。")]),t._v(" "),a("li",[t._v("尽管很多数据结构和算法书籍都花了很大力气来区分平均时间复杂度和均摊时间复杂度，但其实我个人认为，均摊时间复杂度就是一种特殊的平均时间复杂度，我们没必要花太多精力去区分它们。你最应该掌握的是它的分析方法，摊还分析。至于分析出来的结果是叫平均还是叫均摊，这只是个说法，并不重要。")])]),t._v(" "),a("h2",{attrs:{id:"内容小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内容小结"}},[t._v("#")]),t._v(" 内容小结")]),t._v(" "),a("ul",[a("li",[t._v("今天我们学习了几个复杂度分析相关的概念，分别有：最好情况时间复杂度、最坏情况时间复杂度、平均情况时间复杂度、均摊时间复杂度。之所以引入这几个复杂度概念，是因为，同一段代码，在不同输入的情况下，复杂度量级有可能是不一样的。")]),t._v(" "),a("li",[t._v("在引入这几个概念之后，我们可以更加全面地表示一段代码的执行效率。而且，这几个概念理解起来都不难。最好、最坏情况下的时间复杂度分析起来比较简单，但平均、均摊两个复杂度分析相对比较复杂。如果你觉得理解得还不是很深入，不用担心，在后续具体的数据结构和算法学习中，我们可以继续慢慢实践！")])])])}),[],!1,null,null,null);s.default=e.exports}}]);