(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1387:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、依赖工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、依赖工具"}},[t._v("#")]),t._v(" 一、依赖工具")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 node 版本")]),t._v("\nnode -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看 npm 版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" -v\n")])])]),a("h2",{attrs:{id:"二、脚手架vue-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、脚手架vue-cli"}},[t._v("#")]),t._v(" 二、脚手架vue-cli")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 Vue CLI 3.x")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i -g @vue/cli\n")])])]),a("blockquote",[a("p",[t._v("安装完 "),a("code",[t._v("vue-cli")]),t._v(" 后，我们在你想要创建的项目目录地址下执行构建命令")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my-project 是你的项目名称")]),t._v("\nvue create my-project\n")])])]),a("p",[a("strong",[t._v("目录结构")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("├── node_modules     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目依赖包目录")]),t._v("\n├── public\n│   ├── favicon.ico  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ico图标")]),t._v("\n│   └── index.html   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首页模板")]),t._v("\n├── src \n│   ├── assets       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 样式图片目录")]),t._v("\n│   ├── components   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 组件目录")]),t._v("\n│   ├── views        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面目录")]),t._v("\n│   ├── App.vue      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 父组件")]),t._v("\n│   ├── main.js      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 入口文件")]),t._v("\n│   ├── router.js    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 路由配置文件")]),t._v("\n│   └── store.js     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vuex状态管理文件")]),t._v("\n├── .gitignore       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git忽略文件")]),t._v("\n├── .postcssrc.js    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# postcss配置文件")]),t._v("\n├── babel.config.js  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# babel配置文件")]),t._v("\n├── package.json     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 包管理文件")]),t._v("\n└── yarn.lock        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# yarn依赖信息文件")]),t._v("\n")])])]),a("p",[a("strong",[t._v("可视化界面")])]),t._v(" "),a("blockquote",[a("p",[t._v("除了使用上述命令行构建外，"),a("code",[t._v("vue-cli 3.x")]),t._v(" 还提供了可视化的操作界面，在项目目录下我们运行如下命令开启图形化界面：")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vue ui\n")])])]),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/26/1643ca037f818a81",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/6/26/1643ca8799bb4491",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、webpack-在-cli-3-中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、webpack-在-cli-3-中的应用"}},[t._v("#")]),t._v(" 三、webpack 在 CLI 3 中的应用")]),t._v(" "),a("h3",{attrs:{id:"_3-1-与-vue-cli-2-x-的差异"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-与-vue-cli-2-x-的差异"}},[t._v("#")]),t._v(" 3.1 与 vue-cli 2.x 的差异")]),t._v(" "),a("blockquote",[a("p",[t._v("如果你使用过 "),a("code",[t._v("vue-cli 2.x")]),t._v("，那么你应该了解其构建出的目录会包含相应的 "),a("code",[t._v("webpack")]),t._v("配置文件，但是在 "),a("code",[t._v("vue-cli 3.x")]),t._v(" 中你却见不到一份关于 webpack 的配置文件，难道 "),a("code",[t._v("3.x")]),t._v(" 抛弃了 webpack？其实不然，"),a("code",[t._v("3.x")]),t._v(" 提供了一种开箱即用的模式，即你无需配置 "),a("code",[t._v("webpack")]),t._v(" 就可以运行项目，并且它提供了一个 "),a("code",[t._v("vue.config.js")]),t._v(" 文件来满足开发者对其封装的 "),a("code",[t._v("webpack")]),t._v(" 默认配置的修改")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/22/164c05d8ad965059",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_3-2-vue-config-js-的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-vue-config-js-的配置"}},[t._v("#")]),t._v(" 3.2 vue.config.js 的配置")]),t._v(" "),a("p",[a("strong",[t._v("a. baseurl")])]),t._v(" "),a("blockquote",[a("p",[t._v("你想要将项目地址加一个二级目录，比如："),a("code",[t._v("http://localhost:8080/vue/")]),t._v("，那么我们需要在 "),a("code",[t._v("vue.config.js")]),t._v(" 里配置 "),a("code",[t._v("baseurl")]),t._v(" 这一项")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    baseUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("其改变的其实是 "),a("code",[t._v("webpack")]),t._v(" 配置文件中 "),a("code",[t._v("output")]),t._v(" 的 "),a("code",[t._v("publicPath")]),t._v(" 项，这时候你重启终端再次打开页面的时候我们首页的"),a("code",[t._v("url")]),t._v(" 就会变成带二级目录的形式。")])]),t._v(" "),a("p",[a("strong",[t._v("b. outputDir")])]),t._v(" "),a("blockquote",[a("p",[t._v("如果你想将构建好的文件打包输出到 "),a("code",[t._v("output")]),t._v(" 文件夹下（默认是 "),a("code",[t._v("dist")]),t._v(" 文件夹），你可以配置")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    outputDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'output'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("然后运行命令 "),a("code",[t._v("yarn build")]),t._v(" 进行打包输出，你会发现项目跟目录会创建 "),a("code",[t._v("output")]),t._v(" 文件夹， 这其实改变了 "),a("code",[t._v("webpack")]),t._v(" 配置中 "),a("code",[t._v("output")]),t._v(" 下的 "),a("code",[t._v("path")]),t._v("项，修改了文件的输出路径")])]),t._v(" "),a("p",[a("strong",[t._v("c. productionSourceMap")])]),t._v(" "),a("blockquote",[a("p",[t._v("该配置项用于设置是否为生产环境构建生成 "),a("code",[t._v("source map")]),t._v("，一般在生产环境下为了快速定位错误信息，我们都会开启 "),a("code",[t._v("source map")]),t._v("：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    productionSourceMap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("该配置会修改 "),a("code",[t._v("webpack")]),t._v(" 中 "),a("code",[t._v("devtool")]),t._v(" 项的值为 "),a("code",[t._v("source-map")])])]),t._v(" "),a("p",[a("strong",[t._v("d. chainWebpack")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("chainWebpack")]),t._v(" 配置项允许我们更细粒度的控制 "),a("code",[t._v("webpack")]),t._v("的内部配置，其集成的是 "),a("code",[t._v("webpack-chain")]),t._v(" 这一插件，该插件可以让我们能够使用链式操作来修改配置，比如")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于做相应的合并处理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-merge'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config 参数为已经解析好的 webpack 配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("chainWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'images'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("tap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("merge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                  limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("以上操作我们可以成功修改 webpack 中 module 项里配置 rules 规则为图片下的 url-loader 值，将其 limit 限制改为 5M，修改后的 webpack 配置代码如下：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.module.rule('images') */")]),t._v("\n                test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(png|jpe?g|gif|webp)(\\?.*)?$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.module.rule('images').use('url-loader') */")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'url-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5120")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'img/[name].[hash:8].[ext]'")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("e. configureWebpack")])]),t._v(" "),a("blockquote",[a("p",[t._v("除了上述使用 "),a("code",[t._v("chainWebpack")]),t._v(" 来改变 "),a("code",[t._v("webpack")]),t._v(" 内部配置外，我们还可以使用 "),a("code",[t._v("configureWebpack")]),t._v(" 来进行修改，两者的不同点在于 "),a("code",[t._v("chainWebpack")]),t._v(" 是链式修改，而 "),a("code",[t._v("configureWebpack")]),t._v(" 更倾向于整体替换和修改。示例代码如下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config 参数为已经解析好的 webpack 配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// config.plugins = []; // 这样会直接将 plugins 置空")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[a("code",[t._v("configureWebpack")]),t._v(" 可以直接是一个对象，也可以是一个函数，如果是对象它会直接使用 "),a("code",[t._v("webpack-merge")]),t._v(" 对其进行合并处理，如果是函数，你可以直接使用其 "),a("code",[t._v("config")]),t._v("参数来修改 "),a("code",[t._v("webpack")]),t._v(" 中的配置，或者返回一个对象来进行 merge 处理")])]),t._v(" "),a("p",[t._v("你可以在项目目录下运行 "),a("code",[t._v("vue inspect")]),t._v(" 来查看你修改后的 "),a("code",[t._v("webpack")]),t._v(" 完整配置，当然你也可以缩小审查范围，比如")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只查看 plugins 的内容")]),t._v("\nvue inspect plugins\n")])])]),a("p",[a("strong",[t._v("f. devServer")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("vue.config.js")]),t._v(" 还提供了 "),a("code",[t._v("devServer")]),t._v(" 项用于配置 "),a("code",[t._v("webpack-dev-server")]),t._v(" 的行为，使得我们可以对本地服务器进行相应配置，我们在命令行中运行的 "),a("code",[t._v("yarn serve")]),t._v(" 对应的命令 "),a("code",[t._v("vue-cli-service serve")]),t._v(" 其实便是基于 "),a("code",[t._v("webpack-dev-server")]),t._v(" 开启的一个本地服务器，其常用配置参数如下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    \n    devServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        open"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否自动打开浏览器页面")]),t._v("\n        host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定使用一个 host。默认是 localhost")]),t._v("\n        port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 端口地址")]),t._v("\n        https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用https提供服务")]),t._v("\n        proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string | Object 代理设置")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 提供在服务器内部的其他中间件之前执行自定义中间件的能力")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `app` 是一个 express 实例")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("当然除了以上参数，其支持所有的 "),a("code",[t._v("webpack-dev-server")]),t._v("中的选项，比如 "),a("code",[t._v("historyApiFallback")]),t._v(" 用于重写路由（会在后续的多页应用配置中讲解）、progress 将运行进度输出到控制台等")])]),t._v(" "),a("h3",{attrs:{id:"_3-3-默认插件简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-默认插件简介"}},[t._v("#")]),t._v(" 3.3 默认插件简介")]),t._v(" "),a("blockquote",[a("p",[t._v("通过对 "),a("code",[t._v("vue.config.js")]),t._v(" 的了解，我们知道了 "),a("code",[t._v("vue-cli 3.x")]),t._v("为我们默认封装了项目运行的常用 "),a("code",[t._v("webpack")]),t._v(" 配置，那么它给我们提供了哪些默认插件，每一个 "),a("code",[t._v("plugin")]),t._v(" 又有着怎样的用途呢？除了使用 "),a("code",[t._v("vue inspect plugins")]),t._v(" 我们还可以通过运行 "),a("code",[t._v("vue ui")]),t._v(" 进入可视化页面查看，步骤如下")])]),t._v(" "),a("ul",[a("li",[t._v("打开可视化页面，点击对应项目进入管理页面（如果没有对应项目，需要导入或新建）")]),t._v(" "),a("li",[t._v("点击侧边栏 "),a("code",[t._v("Tasks")]),t._v(" 选项，再点击二级栏 "),a("code",[t._v("inspect")]),t._v(" 选项")]),t._v(" "),a("li",[t._v("点击 "),a("code",[t._v("Run task")]),t._v(" 按钮执行审查命令")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/7/22/164c15d1f97432b5",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("最后我们从输出的内容中找到 "),a("code",[t._v("plugins")]),t._v(" 数组，其包含了如下插件（配置项已经省略，增加了定义插件的代码）：")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue-loader是 webpack 的加载器，允许你以单文件组件的格式编写 Vue 组件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" VueLoaderPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-loader/lib/plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack 内置插件，用于创建在编译时可以配置的全局常量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" DefinePlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于强制所有模块的完整路径必需与磁盘上实际路径的确切大小写相匹配")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CaseSensitivePathsPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'case-sensitive-paths-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 识别某些类型的 webpack 错误并整理，以提供开发人员更好的体验。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" FriendlyErrorsPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'friendly-errors-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MiniCssExtractPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mini-css-extract-plugin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于在 webpack 构建期间优化、最小化 CSS文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" OptimizeCssnanoPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'optimize-css-assets-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack 内置插件，用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HashedModuleIdsPlugin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于根据模板或使用加载器生成 HTML 文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于在使用 html-webpack-plugin 生成的 html 中添加 <link rel ='preload'> 或 <link rel ='prefetch'>，有助于异步加载")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PreloadPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'preload-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于将单个文件或整个目录复制到构建目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" CopyWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'copy-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('vue-loader') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueLoaderPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('define') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DefinePlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('case-sensitive-paths') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CaseSensitivePathsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('friendly-errors') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FriendlyErrorsWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('extract-css') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('optimize-css') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OptimizeCssnanoPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('hash-module-ids') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashedModuleIdsPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('html') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('preload') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PreloadPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* config.plugin('copy') */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CopyWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);