(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{744:function(t,a,s){"use strict";s.r(a);var n=s(10),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"标准盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标准盒子模型"}},[t._v("#")]),t._v(" 标准盒子模型")]),t._v(" "),s("ul",[s("li",[t._v("盒子模型是css中一个重要的概念，理解了盒子模型才能更好的排版。其实盒子模型有两种，分别是 ie 盒子模型和标准 w3c 盒子模型。他们对盒子模型的解释各不相同，先来看看我们熟知的标准盒子模型")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://images.cnblogs.com/cnblogs_com/cchyao/%E6%A0%87%E5%87%86W3C%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E5%92%8CIE%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8BCSS%E5%B8%83%E5%B1%80%E7%BB%8F%E5%85%B8%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B/1.JPG",alt:""}})]),t._v(" "),s("ul",[s("li",[t._v("从上图可以看到标准 "),s("code",[t._v("w3c")]),t._v(" 盒子模型的范围包括 "),s("code",[t._v("margin")]),t._v("、"),s("code",[t._v("border")]),t._v("、"),s("code",[t._v("padding")]),t._v("、"),s("code",[t._v("content")]),t._v("，并且 "),s("code",[t._v("content")]),t._v("部分不包含其他部分")])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"ie盒子模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ie盒子模型"}},[t._v("#")]),t._v(" IE盒子模型")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://images.cnblogs.com/cnblogs_com/cchyao/%E6%A0%87%E5%87%86W3C%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B%E5%92%8CIE%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8BCSS%E5%B8%83%E5%B1%80%E7%BB%8F%E5%85%B8%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B/2.JPG",alt:""}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("从上图可以看到 "),s("code",[t._v("ie")]),t._v("盒子模型的范围也包括 "),s("code",[t._v("margin")]),t._v("、"),s("code",[t._v("border")]),t._v("、"),s("code",[t._v("padding")]),t._v("、"),s("code",[t._v("content")])])]),t._v(" "),s("li",[s("p",[t._v("和标准 "),s("code",[t._v("w3c")]),t._v(" 盒子模型不同的是："),s("code",[t._v("ie")]),t._v(" 盒子模型的 "),s("code",[t._v("content")]),t._v(" 部分包含了 "),s("code",[t._v("border")]),t._v("和 "),s("code",[t._v("padding")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("IE")]),t._v("盒子模型"),s("code",[t._v("width")]),t._v(" = "),s("code",[t._v("padding")]),t._v("+"),s("code",[t._v("border")]),t._v("+"),s("code",[t._v("内容")])])]),t._v(" "),s("li",[s("p",[t._v("标准盒子模型 = 内容的宽度（不包含"),s("code",[t._v("border")]),t._v("+"),s("code",[t._v("padding")]),t._v("）")])]),t._v(" "),s("li",[s("p",[t._v("例：")])]),t._v(" "),s("li",[s("p",[t._v("一个盒子的   "),s("code",[t._v("margin")]),t._v("为 20px，"),s("code",[t._v("border")]),t._v(" 为 1px，"),s("code",[t._v("padding")]),t._v("为 10px，"),s("code",[t._v("content")]),t._v(" 的宽为 200px、高为 50px，假如用标准 "),s("code",[t._v("w3c")]),t._v(" 盒子模型解释，那么这个盒子需要占据的位置为：宽 "),s("code",[t._v("20*2+1*2+10*2+200=262px")]),t._v("、高 "),s("code",[t._v("20*2+1*2*10*2+50=112px")]),t._v("，盒子的实际大小为：宽 "),s("code",[t._v("1*2+10*2+200=222px")]),t._v("、高 "),s("code",[t._v("1*2+10*2+50=72px")]),t._v("；假如用ie 盒子模型，那么这个盒子需要占据的位置为：宽 "),s("code",[t._v("20*2+200=240px")]),t._v("、高 "),s("code",[t._v("20*2+50=70px")]),t._v("，盒子的实际大小为：宽 "),s("code",[t._v("200px")]),t._v("、高 "),s("code",[t._v("50px")])])]),t._v(" "),s("li",[s("p",[t._v("那应该选择哪中盒子模型呢？当然是“标准 "),s("code",[t._v("w3c")]),t._v(" 盒子模型”了。怎么样才算是选择了“标准 "),s("code",[t._v("w3c")]),t._v("盒子模型”呢？很简单，就是在网页的顶部加上 "),s("code",[t._v("doctype")]),t._v(" 声明。")])]),t._v(" "),s("li",[s("p",[t._v("假如不加"),s("code",[t._v("doctype")]),t._v(" 声明，那么各个浏览器会根据自己的行为去理解网页，即 "),s("code",[t._v("ie")]),t._v("浏览器会采用 "),s("code",[t._v("ie")]),t._v(" 盒子模型去解释你的盒子，而 "),s("code",[t._v("ff")]),t._v("会采用标准 w3c 盒子模型解释你的盒子，所以网页在不同的浏览器中就显示的不一样了。")])]),t._v(" "),s("li",[s("p",[t._v("反之，假如加上了 doctype 声明，那么所有浏览器都会采用标准 "),s("code",[t._v("w3c")]),t._v("盒子模型去解释你的盒子，网页就能在各个浏览器中显示一致了。")])])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("再用 jquery 做的例子来证实一下")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("你用的盒子模型是？"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sbox "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boxmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标准w3c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"您的页面目前支持："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("sbox"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"盒子模型"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("上面的代码没有加上 "),s("code",[t._v("doctype")]),t._v(" 声明，在 "),s("code",[t._v("ie")]),t._v(" 浏览器中显示  "),s("code",[t._v("ie")]),t._v("盒子模型，在 ff 浏览器中显示“标准"),s("code",[t._v("w3c")]),t._v(" 盒子模型”。")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[t._v('<!doctype html public "-//w3c//dtd xhtml 1.0 transitional//en" "http://www.w3.org/tr/xhtml1/dtd/xhtml1-transitional.dtd">')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("你用的盒子模型是标准w3c盒子模型"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jquery.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sbox "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boxmodel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"标准w3c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ie"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"您的页面目前支持："')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("sbox"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"盒子模型"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("代码2 与代码1 唯一的不同的就是顶部加了 "),s("code",[t._v("doctype")]),t._v("声明。在所有浏览器中都显示“标准 "),s("code",[t._v("w3c")]),t._v("盒子模型”")]),t._v(" "),s("li",[t._v("所以为了让网页能兼容各个浏览器，让我们用标准 "),s("code",[t._v("w3c")]),t._v(" 盒子模型")])])])}),[],!1,null,null,null);a.default=e.exports}}]);