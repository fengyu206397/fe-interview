(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{1160:function(e,n,t){"use strict";t.r(n);var a=t(10),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"构建实战篇-2：使用-pages-构建多页应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建实战篇-2：使用-pages-构建多页应用"}},[e._v("#")]),e._v(" 构建实战篇 2：使用 pages 构建多页应用")]),e._v(" "),t("p",[e._v("经过对单页应用配置的了解，相信大家应该对如何构建一个 Vue 单页应用项目已经有所收获和体会，在大部分实际场景中，我们都可以构建单页应用来进行项目的开发和迭代，然而对于项目复杂度过高或者页面模块之间差异化较大的项目，我们可以选择构建多页应用来实现。那么什么是多页应用，如何构建一个多页应用便是本文所要阐述的内容。")]),e._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),t("blockquote",[t("p",[e._v("首先我们可以把多页应用理解为由多个单页构成的应用，而何谓多个单页呢？其实你可以把一个单页看成是一个 html 文件，那么多个单页便是多个 html 文件，多页应用便是由多个 html 组成的应用，如下图所示：")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/08/vue/20.png",alt:""}})]),e._v(" "),t("p",[e._v("既然多页应用拥有多个 html，那么同样其应该拥有多个独立的入口文件、组件、路由、vuex 等。没错，说简单一点就是"),t("strong",[e._v("多页应用的每个单页都可以拥有单页应用 src 目录下的文件及功能")]),e._v("，我们来看一下一个基础多页应用的目录结构：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("├── node_modules               # 项目依赖包目录\n├── build                      # 项目 webpack 功能目录\n├── config                     # 项目配置项文件夹\n├── src                        # 前端资源目录\n│   ├── images                 # 图片目录\n│   ├── components             # 公共组件目录\n│   ├── pages                  # 页面目录\n│   │   ├── page1              # page1 目录\n│   │   │   ├── components     # page1 组件目录\n│   │   │   ├── router         # page1 路由目录\n│   │   │   ├── views          # page1 页面目录\n│   │   │   ├── page1.html     # page1 html 模板\n│   │   │   ├── page1.vue      # page1 vue 配置文件\n│   │   │   └── page1.js       # page1 入口文件\n│   │   ├── page2              # page2 目录\n│   │   └── index              # index 目录\n│   ├── common                 # 公共方法目录\n│   └── store                  # 状态管理 store 目录\n├── .gitignore                 # git 忽略文件\n├── .env                       # 全局环境配置文件\n├── .env.dev                   # 开发环境配置文件\n├── .postcssrc.js              # postcss 配置文件\n├── babel.config.js            # babel 配置文件\n├── package.json               # 包管理文件\n├── vue.config.js              # CLI 配置文件\n└── yarn.lock                  # yarn 依赖信息文件\n\n")])])]),t("p",[e._v("根据上方目录结构我们可以看出其实 pages 下的一个目录就是一个单页包含的功能，这里我们包含了 3 个目录就构成了多页应用。")]),e._v(" "),t("p",[e._v("除了目录结构的不同外，其实区别单页应用，多页应用在很多配置上都需要进行修改，比如单入口变为多入口、单模板变为多模板等，那么下面我们就来了解一下多页应用的具体实现。")]),e._v(" "),t("h2",{attrs:{id:"多入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多入口"}},[e._v("#")]),e._v(" 多入口")]),e._v(" "),t("p",[e._v("在单页应用中，我们的入口文件只有一个，CLI 默认配置的是 main.js，但是到了多页应用，我们的入口文件便包含了 page1.js、page2.js、index.js等，数量取决于 pages 文件夹下目录的个数，这时候为了项目的可拓展性，我们需要自动计算入口文件的数量并解析路径配置到 webpack 中的 entry 属性上，如：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module.exports = {\n    ...\n    \n    entry: {\n        page1: '/xxx/pages/page1/page1.js',\n        page2: '/xxx/pages/page2/page2.js',\n        index: '/xxx/pages/index/index.js',\n    },\n    \n    ...\n}\n\n")])])]),t("p",[e._v("那么我们如何读取并解析这样的路径呢，这里就需要使用工具和函数来解决了。我们可以在根目录新建 build 文件夹存放 utils.js 这样共用的 webpack 功能性文件，并加入多入口读取解析方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* utils.js */\nconst path = require('path');\n\n// glob 是 webpack 安装时依赖的一个第三方模块，该模块允许你使用 * 等符号,\n// 例如 lib/*.js 就是获取 lib 文件夹下的所有 js 后缀名的文件\nconst glob = require('glob');\n\n// 取得相应的页面路径，因为之前的配置，所以是 src 文件夹下的 pages 文件夹\nconst PAGE_PATH = path.resolve(__dirname, '../src/pages');\n\n/* \n* 多入口配置\n* 通过 glob 模块读取 pages 文件夹下的所有对应文件夹下的 js * 后缀文件，如果该文件存在\n* 那么就作为入口处理\n*/\nexports.getEntries = () => {\n    let entryFiles = glob.sync(PAGE_PATH + '/*/*.js') // 同步读取所有入口文件\n    let map = {}\n    \n    // 遍历所有入口文件\n    entryFiles.forEach(filePath => {\n        // 获取文件名\n        let filename = filePath.substring(filePath.lastIndexOf('\\/') + 1, filePath.lastIndexOf('.'))\n        \n        // 以键值对的形式存储\n        map[filename] = filePath \n    })\n    \n    return map\n}\n\n")])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/08/vue/21.png",alt:""}})]),e._v(" "),t("p",[e._v("上方我们使用了 "),t("a",{attrs:{href:"https://github.com/isaacs/node-glob",target:"_blank",rel:"noopener noreferrer"}},[e._v("glob"),t("OutboundLink")],1),e._v(" 这一第三方模块读取所有 pages 文件夹下的入口文件，其需要进行安装："),t("code",[e._v("yarn add glob --dev")])]),e._v(" "),t("p",[e._v("读取并存储完毕后，我们得到了一个入口文件的对象集合，这个对象我们便可以将其设置到 webpack 的 entry 属性上，这里我们需要修改 vue.config.js 的配置来间接修改 webpack 的值：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* vue.config.js */\n\nconst utils = require('./build/utils')\n\nmodule.exports = {\n    ...\n    \n    configureWebpack: config => {\n        config.entry = utils.getEntries()\n    },\n    \n    ...\n}\n\n")])])]),t("p",[e._v("这样我们多入口的设置便完成了，当然这并不是 CLI 所希望的操作，后面我们会进行改进。")]),e._v(" "),t("h2",{attrs:{id:"多模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多模板"}},[e._v("#")]),e._v(" 多模板")]),e._v(" "),t("p",[e._v("相对于多入口来说，多模板的配置也是大同小异，这里所说的模板便是每个 page 下的 html 模板文件，而模板文件的作用主要用于 webpack 中 "),t("code",[e._v("html-webpack-plugin")]),e._v(" 插件的配置，其会根据模板文件生产一个编译后的 html 文件并自动加入携带 hash 的脚本和样式，基本配置如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* webpack 配置文件 */\nconst HtmlWebpackPlugin = require('html-webpack-plugin') // 安装并引用插件\n\nmodule.exports = {\n    ...\n    \n    plugins: [\n        new HtmlWebpackPlugin({\n            title: 'My Page', // 生成 html 中的 title\n            filename: 'demo.html', // 生成 html 的文件名\n            template: 'xxx/xxx/demo.html', // 模板路径\n            chunks: ['manifest', 'vendor', 'demo'], // 所要包含的模块\n            inject: true, // 是否注入资源\n        })\n    ]\n    \n    ...\n}\n\n")])])]),t("p",[e._v("以上是单模板的配置，那么如果是多模板只要继续往 plugins 数组中添加 HtmlWebpackPlugin 即可，但是为了和多入口一样能够灵活的获取 pages 目录下所有模板文件并进行配置，我们可以在 utils.js 中添加多模板的读取解析方法：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* utils.js */\n\n// 多页面输出配置\n// 与上面的多页面入口配置相同，读取 page 文件夹下的对应的 html 后缀文件，然后放入数组中\nexports.htmlPlugin = configs => {\n    let entryHtml = glob.sync(PAGE_PATH + '/*/*.html')\n    let arr = []\n    \n    entryHtml.forEach(filePath => {\n        let filename = filePath.substring(filePath.lastIndexOf('\\/') + 1, filePath.lastIndexOf('.'))\n        let conf = {\n            template: filePath, // 模板路径\n            filename: filename + '.html', // 生成 html 的文件名\n            chunks: ['manifest', 'vendor',  filename],\n            inject: true,\n        }\n        \n        // 如果有自定义配置可以进行 merge\n        if (configs) {\n            conf = merge(conf, configs)\n        }\n        \n        // 针对生产环境配置\n        if (process.env.NODE_ENV === 'production') {\n            conf = merge(conf, {\n                minify: {\n                    removeComments: true, // 删除 html 中的注释代码\n                    collapseWhitespace: true, // 删除 html 中的空白符\n                    // removeAttributeQuotes: true // 删除 html 元素中属性的引号\n                },\n                chunksSortMode: 'manual' // 按 manual 的顺序引入\n            })\n        }\n        \n        arr.push(new HtmlWebpackPlugin(conf))\n    })\n    \n    return arr\n}\n\n")])])]),t("p",[t("img",{attrs:{src:"https://poetries1.gitee.io/img-repo/2020/08/vue/22.png",alt:""}})]),e._v(" "),t("p",[e._v("以上我们仍然是使用 glob 读取所有模板文件，然后将其遍历并设置每个模板的 config，同时针对一些自定义配置和生产环境的配置进行了 merge 处理，其中自定义配置的功能我会在下节进行介绍，这里介绍一下生产环境下 "),t("code",[e._v("minify")]),e._v(" 配置的作用："),t("strong",[e._v("将 html-minifier 的选项作为对象来缩小输出")]),e._v("。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/kangax/html-minifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("html-minifier"),t("OutboundLink")],1),e._v(" 是一款用于缩小 html 文件大小的工具，其有很多配置项功能，包括上述所列举的常用的删除注释、空白、引号等。")]),e._v(" "),t("p",[e._v("当我们编写完了多模板的方法后，我们同样可以在 vue.config.js 中进行配置，与多入口不同的是我们在 configureWebpack 中不能直接替换 plugins 的值，因为它还包含了其他插件，这时候大家还记得第 3 节中讲到的使用 return 返回一个对象来进行 merge 操作吗？")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* vue.config.js */\n\nconst utils = require('./build/utils')\n\nmodule.exports = {\n    ...\n    \n    configureWebpack: config => {\n        config.entry = utils.getEntries() // 直接覆盖 entry 配置\n        \n        // 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空\n        return {\n            plugins: [...utils.htmlPlugin()]\n        }\n    },\n    \n    ...\n}\n\n")])])]),t("p",[e._v("如此我们多页应用的多入口和多模板的配置就完成了，这时候我们运行命令 "),t("code",[e._v("yarn build")]),e._v(" 后你会发现 dist 目录下生成了 3 个 html 文件，分别是 index.html、page1.html 和 page2.html。")]),e._v(" "),t("h2",{attrs:{id:"使用-pages-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-pages-配置"}},[e._v("#")]),e._v(" 使用 pages 配置")]),e._v(" "),t("p",[e._v("其实，在 vue.config.js 中，我们还有一个配置没有使用，便是 pages。pages 对象允许我们为应用配置多个入口及模板，这就为我们的多页应用提供了开放的配置入口。官方示例代码如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* vue.config.js */\nmodule.exports = {\n    pages: {\n        index: {\n            // page 的入口\n            entry: 'src/index/main.js',\n            // 模板来源\n            template: 'public/index.html',\n            // 在 dist/index.html 的输出\n            filename: 'index.html',\n            // 当使用 title 选项时，\n            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>\n            title: 'Index Page',\n            // 在这个页面中包含的块，默认情况下会包含\n            // 提取出来的通用 chunk 和 vendor chunk。\n            chunks: ['chunk-vendors', 'chunk-common', 'index']\n        },\n        // 当使用只有入口的字符串格式时，\n        // 模板会被推导为 `public/subpage.html`\n        // 并且如果找不到的话，就回退到 `public/index.html`。\n        // 输出文件名会被推导为 `subpage.html`。\n        subpage: 'src/subpage/main.js'\n    }\n}\n\n")])])]),t("p",[e._v("我们不难发现，pages 对象中的 key 就是入口的别名，而其 value 对象其实是入口 entry 和模板属性的合并，这样我们上述介绍的获取多入口和多模板的方法就可以合并成一个函数来进行多页的处理，合并后的 setPages 方法如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("// pages 多入口配置\nexports.setPages = configs => {\n    let entryFiles = glob.sync(PAGE_PATH + '/*/*.js')\n    let map = {}\n\n    entryFiles.forEach(filePath => {\n        let filename = filePath.substring(filePath.lastIndexOf('\\/') + 1, filePath.lastIndexOf('.'))\n        let tmp = filePath.substring(0, filePath.lastIndexOf('\\/'))\n\n        let conf = {\n            // page 的入口\n            entry: filePath, \n            // 模板来源\n            template: tmp + '.html', \n            // 在 dist/index.html 的输出\n            filename: filename + '.html', \n            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本\n            chunks: ['manifest', 'vendor', filename], \n            inject: true,\n        };\n\n        if (configs) {\n            conf = merge(conf, configs)\n        }\n\n        if (process.env.NODE_ENV === 'production') {\n            conf = merge(conf, {\n                minify: {\n                    removeComments: true, // 删除 html 中的注释代码\n                    collapseWhitespace: true, // 删除 html 中的空白符\n                    // removeAttributeQuotes: true // 删除 html 元素中属性的引号\n                },\n                chunksSortMode: 'manual'// 按 manual 的顺序引入\n            })\n        }\n\n        map[filename] = conf\n    })\n\n    return map\n}\n\n")])])]),t("p",[e._v("上述代码我们 return 出的 map 对象就是 pages 所需要的配置项结构，我们只需在 vue.config.js 中引用即可：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/* vue.config.js */\n\nconst utils = require('./build/utils')\n\nmodule.exports = {\n    ...\n    \n    pages: utils.setPages(),\n    \n    ...\n}\n\n")])])]),t("p",[e._v("这样我们多页应用基于 pages 配置的改进就大功告成了，当你运行打包命令来查看输出结果的时候，你会发现和之前的方式相比并没有什么变化，这就说明这两种方式都适用于多页的构建，但是这里还是推荐大家使用更便捷的 pages 配置。")]),e._v(" "),t("h2",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),t("p",[e._v("本文主要讲解了多页应用开发中多入口和多模板的实现方式，通过针对 webpack 配置的修改我们基本了解了多页模式与单页模式的差异性，下篇文章我们将以本文内容为基础进一步完善我们的多页应用配置，使其能够正常适应实际的开发与生产。")]),e._v(" "),t("p",[e._v("本案例代码地址："),t("a",{attrs:{href:"https://github.com/luozhihao/vue-project-code/tree/master/multi-page-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("multi-page-project"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"思考-作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#思考-作业"}},[e._v("#")]),e._v(" 思考 & 作业")]),e._v(" "),t("ul",[t("li",[e._v("多页应用相比单页应用有哪些优点和缺点？")]),e._v(" "),t("li",[t("code",[e._v("chunksSortMode")]),e._v(" 除了文中介绍的 "),t("code",[e._v("manual")]),e._v(" 手动排序外，还有哪些排序方式？")]),e._v(" "),t("li",[e._v("glob 中 "),t("code",[e._v("*")]),e._v(" 和 "),t("code",[e._v("**")]),e._v(" 的区别是什么？")])])])}),[],!1,null,null,null);n.default=s.exports}}]);