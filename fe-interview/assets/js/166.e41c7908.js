(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{735:function(t,a,s){"use strict";s.r(a);var n=s(10),p=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"bfc-是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc-是什么？"}},[t._v("#")]),t._v(" BFC 是什么？")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("BFC")]),t._v(" ("),s("code",[t._v("Block Formatting Contexts")]),t._v(") 即块级格式化上下文，从样式上看，它与普通的容器没有什么区别，但是从功能上，"),s("code",[t._v("BFC")]),t._v(" 可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 "),s("code",[t._v("BFC")]),t._v(" 具有普通容器没有的一些特性，例如可以包含浮动元素，使到它可以包含浮动元素，从而防止出现高度塌陷的问题\n")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"如何触发-bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何触发-bfc"}},[t._v("#")]),t._v(" 如何触发 BFC")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("触发 BFC 的条件")]),t._v(" "),s("ul",[s("li",[t._v("浮动元素，"),s("code",[t._v("float")]),t._v(" 除 "),s("code",[t._v("none")]),t._v(" 以外的值")]),t._v(" "),s("li",[t._v("绝对定位元素，"),s("code",[t._v("position")]),t._v("（"),s("code",[t._v("absolute")]),t._v("，"),s("code",[t._v("fixed")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("display")]),t._v(" 为以下其中之一的值 "),s("code",[t._v("inline-blocks")]),t._v("，"),s("code",[t._v("table-cells")]),t._v("，"),s("code",[t._v("table-captions")])]),t._v(" "),s("li",[s("code",[t._v("overflow")]),t._v(" 除了 "),s("code",[t._v("visible")]),t._v(" 以外的值（"),s("code",[t._v("hidden")]),t._v("，"),s("code",[t._v("auto")]),t._v("，"),s("code",[t._v("scroll")]),t._v("）")])])]),t._v(" "),s("li",[s("p",[t._v("在 "),s("code",[t._v("CSS3")]),t._v(" 中，"),s("code",[t._v("BFC")]),t._v(" 叫做"),s("code",[t._v("Flow Root")]),t._v("，并增加了一些触发条件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("display")]),t._v(" 的 "),s("code",[t._v("table-caption")]),t._v(" 值")]),t._v(" "),s("li",[s("code",[t._v("position")]),t._v(" 的 "),s("code",[t._v("fixed")]),t._v(" 值，其实 "),s("code",[t._v("fixed")]),t._v(" 是 "),s("code",[t._v("absolute")]),t._v(" 的一个子类，因此在 "),s("code",[t._v("CSS2.1")]),t._v(" 中使用这个值也会触发 "),s("code",[t._v("BFC")]),t._v(" ，只是在"),s("code",[t._v("CSS3")]),t._v(" 中更加明确了这一点")])])])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"bfc布局规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc布局规则"}},[t._v("#")]),t._v(" BFC布局规则")]),t._v(" "),s("ul",[s("li",[t._v("内部的"),s("code",[t._v("Box")]),t._v("会在垂直方向，一个接一个地放置。")]),t._v(" "),s("li",[s("code",[t._v("Box")]),t._v("垂直方向的距离由"),s("code",[t._v("margin")]),t._v("决定。属于同一个"),s("code",[t._v("BFC")]),t._v("的两个相邻"),s("code",[t._v("Box")]),t._v("的"),s("code",[t._v("margin")]),t._v("会发生重叠")]),t._v(" "),s("li",[t._v("每个元素的"),s("code",[t._v("margin box")]),t._v("的左边， 与包含块"),s("code",[t._v("border box")]),t._v("的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如 此。")]),t._v(" "),s("li",[s("code",[t._v("BFC")]),t._v("的区域不会与"),s("code",[t._v("float box")]),t._v("重叠。")]),t._v(" "),s("li",[s("code",[t._v("BFC")]),t._v("就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),t._v(" "),s("li",[t._v("计算"),s("code",[t._v("BFC")]),t._v("的高度时，浮动元素也参与计算")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"bfc的作用及原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc的作用及原理"}},[t._v("#")]),t._v(" BFC的作用及原理")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("自适应两栏布局")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" relative"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".aside")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f66"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("aside"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://p1.qhimg.com/d/inn/4055c62a/4dca44a927d4c1ffc30e3ae5f53a0b79.png",alt:""}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("根据BFC布局规则第3条：")]),t._v(" "),s("ul",[s("li",[t._v("每个元素的"),s("code",[t._v("margin box")]),t._v("的左边， 与包含块"),s("code",[t._v("border box")]),t._v("的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。")])])]),t._v(" "),s("li",[s("p",[t._v("因此，虽然存在浮动的元素"),s("code",[t._v("aslide")]),t._v("，但"),s("code",[t._v("main")]),t._v("的左边依然会与包含块的左边相接触")])]),t._v(" "),s("li",[s("p",[t._v("根据"),s("code",[t._v("BFC")]),t._v("布局规则第四条：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("BFC")]),t._v("的区域不会与"),s("code",[t._v("float box")]),t._v("重叠")])])]),t._v(" "),s("li",[s("p",[t._v("我们可以通过通过触发"),s("code",[t._v("main")]),t._v("生成"),s("code",[t._v("BFC")]),t._v("， 来实现自适应两栏布局")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("当触发"),s("code",[t._v("main")]),t._v("生成"),s("code",[t._v("BFC")]),t._v("后，这个新的"),s("code",[t._v("BFC")]),t._v("不会与浮动的"),s("code",[t._v("aside")]),t._v("重叠。因此会根据包含块的宽度，和"),s("code",[t._v("aside")]),t._v("的宽度，自动变窄。效果如下：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://p6.qhimg.com/t01077886a9706cb26b.png",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("清除内部浮动")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".par")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #fcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #f66"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("par"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://p1.qhimg.com/t016035b58195e7909a.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("根据"),s("code",[t._v("BFC")]),t._v("布局规则第六条：\n"),s("ul",[s("li",[t._v("计算"),s("code",[t._v("BFC")]),t._v("的高度时，浮动元素也参与计算")])])]),t._v(" "),s("li",[t._v("为达到清除内部浮动，我们可以触发"),s("code",[t._v("par")]),t._v("生成"),s("code",[t._v("BFC")]),t._v("，那么"),s("code",[t._v("par")]),t._v("在计算高度时，"),s("code",[t._v("par")]),t._v("内部的浮动元素"),s("code",[t._v("child")]),t._v("也会参与计算")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".par")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://p2.qhimg.com/t016bbbe5236ef1ffd5.png",alt:""}})]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("防止垂直 margin 重叠")])])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f55"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Haha"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hehe"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://p5.qhimg.com/t01b47b8b7d153c07cc.png",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("两个"),s("code",[t._v("p")]),t._v("之间的距离为"),s("code",[t._v("100px")]),t._v("，发送了"),s("code",[t._v("margin")]),t._v("重叠")]),t._v(" "),s("li",[t._v("根据BFC布局规则第二条：\n"),s("ul",[s("li",[s("code",[t._v("Box")]),t._v("垂直方向的距离由"),s("code",[t._v("margin")]),t._v("决定。属于同一个"),s("code",[t._v("BFC")]),t._v("的两个相邻Box的"),s("code",[t._v("margin")]),t._v("会发生重叠")])])]),t._v(" "),s("li",[t._v("我们可以在"),s("code",[t._v("p")]),t._v("外面包裹一层容器，并触发该容器生成一个"),s("code",[t._v("BFC")]),t._v("。那么两个"),s("code",[t._v("P")]),t._v("便不属于同一个"),s("code",[t._v("BFC")]),t._v("，就不会发生"),s("code",[t._v("margin")]),t._v("重叠了")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f55"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Haha"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hehe"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://p3.qhimg.com/t0118d1d2badbb00521.png",alt:""}})]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("ul",[s("li",[t._v("其实以上的几个例子都体现了"),s("code",[t._v("BFC")]),t._v("布局规则第五条\n"),s("ul",[s("li",[s("code",[t._v("BFC")]),t._v("就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此")])])]),t._v(" "),s("li",[t._v("因为"),s("code",[t._v("BFC")]),t._v("内部的元素和外部的元素绝对不会互相影响，因此， 当"),s("code",[t._v("BFC")]),t._v("外部存在浮动时，它不应该影响"),s("code",[t._v("BFC")]),t._v("内部"),s("code",[t._v("Box")]),t._v("的布局，"),s("code",[t._v("BFC")]),t._v("会通过变窄，而不与浮动有重叠。同样的，当"),s("code",[t._v("BFC")]),t._v("内部有浮动时，为了不影响外部元素的布局，"),s("code",[t._v("BFC")]),t._v("计算高度时会包括浮动的高度。避免"),s("code",[t._v("margin")]),t._v("重叠也是这样的一个道理")])])])}),[],!1,null,null,null);a.default=p.exports}}]);