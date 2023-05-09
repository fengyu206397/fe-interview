(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{1153:function(t,e,s){"use strict";s.r(e);var v=s(10),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、forever"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、forever"}},[t._v("#")]),t._v(" 一、forever")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("forever")]),t._v("则可以在"),s("code",[t._v("cmd")]),t._v("或"),s("code",[t._v("ssh")]),t._v("连接断开时,让项目一直运行,而且可以在项目崩溃时自动重启")])]),t._v(" "),s("ul",[s("li",[t._v("安装 "),s("code",[t._v("npm install -g forever")])]),t._v(" "),s("li",[s("code",[t._v("forever")]),t._v("的帮助手册  "),s("code",[t._v("forever --help")])]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("forever")]),t._v("启动项目 "),s("code",[t._v("forever start app.js")])]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("forever")]),t._v("停止项目 "),s("code",[t._v("forever stop app.js")])]),t._v(" "),s("li",[t._v("列出所有通过"),s("code",[t._v("forever")]),t._v("管理的项目 "),s("code",[t._v("forever list")])]),t._v(" "),s("li",[t._v("监视项目中的文件,当文件有变动时重启项目 "),s("code",[t._v("forever -w start app.js")])])]),t._v(" "),s("h2",{attrs:{id:"二、pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、pm2"}},[t._v("#")]),t._v(" 二、pm2")]),t._v(" "),s("blockquote",[s("p",[t._v("部署参考 http://blog.poetries.top/2018/11/18/react-ssr-next-deploy/")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install pm2 -g\n")])])]),s("p",[t._v("新建一份index.js测试，运行以下命令测试")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 start index.js\n")])])]),s("p",[s("strong",[t._v("运行")])]),t._v(" "),s("blockquote",[s("p",[t._v("你可以执行以下命令来重启和暂停服务")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 stop     <app_name|id|'all'|json_conf>\npm2 restart  <app_name|id|'all'|json_conf>\npm2 delete   <app_name|id|'all'|json_conf>\n")])])]),s("blockquote",[s("p",[t._v("比如"),s("code",[t._v("pm2 stop index.js")]),t._v("，暂停上面的"),s("code",[t._v("index.js")]),t._v("服务")])]),t._v(" "),s("p",[s("strong",[t._v("常用命令")])]),t._v(" "),s("ul",[s("li",[t._v("运行"),s("code",[t._v("pm2 start app.js")])]),t._v(" "),s("li",[t._v("查看运行状态 "),s("code",[t._v("pm2 list")])]),t._v(" "),s("li",[t._v("追踪资源运行情况 "),s("code",[t._v("pm2 monit")])]),t._v(" "),s("li",[t._v("查看日志 "),s("code",[t._v("pm2 logs")])]),t._v(" "),s("li",[t._v("重启应用 "),s("code",[t._v("pm2 restart appId")])]),t._v(" "),s("li",[t._v("停止应用  "),s("code",[t._v("pm2 stop app.js")])]),t._v(" "),s("li",[t._v("开启"),s("code",[t._v("api")]),t._v("访问 "),s("code",[t._v("pm2 web")])])]),t._v(" "),s("p",[s("strong",[t._v("自动重启")])]),t._v(" "),s("p",[t._v("当文件改动则自动重启服务")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 start app.js --watch\n")])])]),s("p",[t._v("这里是监控整个项目的文件，如果只想监听指定文件和目录，建议通过下面配置文件的"),s("code",[t._v("watch")]),t._v("、"),s("code",[t._v("ignore_watch")]),t._v("字段来设置")]),t._v(" "),s("p",[s("strong",[t._v("配置文件")])]),t._v(" "),s("p",[t._v("编写一份"),s("code",[t._v("ecosystem.json")]),t._v("文件，完整配置说明请参考官方文档")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "name": "test", // 应用名称\n    "script": "./bin/www", // 实际启动脚本\n    "cwd": "./", // 当前工作路径\n    "watch": [ // 监控变化的目录，一旦变化，自动重启\n        "bin",\n        "routers"\n    ],\n    "ignore_watch": [ // 从监控目录中排除\n        "node_modules",\n        "logs",\n        "public"\n    ],\n    "watch_options": {\n        "followSymlinks": false\n    },\n    "max_memory_restart": "100M", //超过最大内存重启\n    "error_file": "./logs/app-err.log", // 错误日志路径\n    "out_file": "./logs/app-out.log", // 普通日志路径\n    "env": {\n        "NODE_ENV": "production" // 环境参数，当前指定为生产环境\n    }\n}\n')])])]),s("p",[t._v("配置完后你可以执行以下命令")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start all apps")]),t._v("\npm2 start ecosystem.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Stop")]),t._v("\npm2 stop ecosystem.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Restart")]),t._v("\npm2 start ecosystem.json\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Or")]),t._v("\npm2 restart ecosystem.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Reload")]),t._v("\npm2 reload ecosystem.json\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Delete from PM2")]),t._v("\npm2 delete ecosystem.json\n")])])]),s("p",[t._v("这里注意的是配置文件改变了之后要先"),s("code",[t._v("delete")]),t._v("再"),s("code",[t._v("start")]),t._v("配置文件才能生效")]),t._v(" "),s("p",[s("strong",[t._v("负载均衡")])]),t._v(" "),s("p",[t._v("命令如下，表示开启三个进程。如果-i 0，则会根据机器当前核数自动开启尽可能多的进程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 start app.js -i 3      //开启三个进程\npm2 start app.js -i max //根据机器CPU核数，开启对应数目的进程\n")])])]),s("p",[s("strong",[t._v("日志查看")])]),t._v(" "),s("p",[t._v("除了可以打开日志文件查看日志外，还可以通过pm2 logs来查看实时日志。这点对于线上问题排查非常重要")]),t._v(" "),s("p",[t._v("比如某个node服务突然异常重启了，那么可以通过pm2提供的日志工具来查看实时日志，看是不是脚本出错之类导致的异常重启。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 logs\n")])])]),s("p",[s("strong",[t._v("内存使用超过上限自动重启")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果想要你的应用，在超过使用内存上限后自动重启，那么可以加上"),s("code",[t._v("--max-memory-restart")]),t._v("参数。（有对应的配置项）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("pm2 start big-array.js --max-memory-restart 20M\n")])])]),s("p",[s("strong",[t._v("pm2与forever对比")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Feature")]),t._v(" "),s("th",[t._v("Forever")]),t._v(" "),s("th",[t._v("PM2")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Keep Alive")]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[t._v("Coffeescript")]),t._v(" "),s("td",[t._v("✔")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("Log aggregation")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[t._v("API")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[t._v("Terminal monitoring")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[t._v("Clustering")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✔")])]),t._v(" "),s("tr",[s("td",[t._v("JSON configuration")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("✔")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);