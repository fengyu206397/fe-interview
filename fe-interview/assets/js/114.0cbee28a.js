(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{1350:function(t,e,n){"use strict";n.r(e);var i=n(10),v=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("上一节我们讲了图的表示方法，讲到如何用有向图、无向图来表示一个社交网络。在社交网络中，有一个六度分割理论，具体是说，你与世界上的另一个人间隔的关系不会超过六度，也就是说平均只需要六步就可以联系到任何两个互不相识的人。")]),t._v(" "),n("p",[t._v("一个用户的一度连接用户很好理解，就是他的好友，二度连接用户就是他好友的好友，三度连接用户就是他好友的好友的好友。在社交网络中，我们往往通过用户之间的连接关系，来实现推荐“可能认识的人”这么一个功能。今天的开篇问题就是，给你一个用户，如何找出这个用户的所有三度（其中包含一度、二度和三度）好友关系？")]),t._v(" "),n("p",[t._v("这就要用到今天要讲的深度优先和广度优先搜索算法。")]),t._v(" "),n("h2",{attrs:{id:"什么是“搜索”算法？"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是“搜索”算法？"}},[t._v("#")]),t._v(" 什么是“搜索”算法？")]),t._v(" "),n("p",[t._v("我们知道，算法是作用于具体数据结构之上的，深度优先搜索算法和广度优先搜索算法都是基于“图”这种数据结构的。这是因为，图这种数据结构的表达能力很强，大部分涉及搜索的场景都可以抽象成“图”。")]),t._v(" "),n("p",[t._v("图上的搜索算法，最直接的理解就是，在图中找出从一个顶点出发，到另一个顶点的路径。具体方法有很多，比如今天要讲的两种最简单、最“暴力”的深度优先、广度优先搜索，还有 A*、IDA* 等启发式搜索算法。")]),t._v(" "),n("p",[t._v("我们上一节讲过，图有两种主要存储方法，邻接表和邻接矩阵。今天我会用邻接表来存储图。")]),t._v(" "),n("p",[t._v("我这里先给出图的代码实现。需要说明一下，深度优先搜索算法和广度优先搜索算法，既可以用在无向图，也可以用在有向图上。在今天的讲解中，我都针对无向图来讲解。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("public class Graph { // 无向图\n  private int v; // 顶点的个数\n  private LinkedList<Integer> adj[]; // 邻接表\n \n  public Graph(int v) {\n    this.v = v;\n    adj = new LinkedList[v];\n    for (int i=0; i<v; ++i) {\n      adj[i] = new LinkedList<>();\n    }\n  }\n \n  public void addEdge(int s, int t) { // 无向图一条边存两次\n    adj[s].add(t);\n    adj[t].add(s);\n  }\n}\n")])])]),n("h2",{attrs:{id:"广度优先搜索（bfs）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索（bfs）"}},[t._v("#")]),t._v(" 广度优先搜索（BFS）")]),t._v(" "),n("p",[t._v("广度优先搜索（Breadth-First-Search），我们平常都把简称为 BFS。直观地讲，它其实就是一种“地毯式”层层推进的搜索策略，即先查找离起始顶点最近的，然后是次近的，依次往外搜索。理解起来并不难，所以我画了一张示意图，你可以看下")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/315.png",alt:""}})]),t._v(" "),n("p",[t._v("尽管广度优先搜索的原理挺简单，但代码实现还是稍微有点复杂度。所以，我们重点讲一下它的代码实现。")]),t._v(" "),n("p",[t._v("这里面，bfs() 函数就是基于之前定义的，图的广度优先搜索的代码实现。其中 s 表示起始顶点，t 表示终止顶点。我们搜索一条从 s 到 t 的路径。实际上，这样求得的路径就是从 s 到 t 的最短路径。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('public void bfs(int s, int t) {\n  if (s == t) return;\n  boolean[] visited = new boolean[v];\n  visited[s]=true;\n  Queue<Integer> queue = new LinkedList<>();\n  queue.add(s);\n  int[] prev = new int[v];\n  for (int i = 0; i < v; ++i) {\n    prev[i] = -1;\n  }\n  while (queue.size() != 0) {\n    int w = queue.poll();\n   for (int i = 0; i < adj[w].size(); ++i) {\n      int q = adj[w].get(i);\n      if (!visited[q]) {\n        prev[q] = w;\n        if (q == t) {\n          print(prev, s, t);\n          return;\n        }\n        visited[q] = true;\n        queue.add(q);\n      }\n    }\n  }\n}\n \nprivate void print(int[] prev, int s, int t) { // 递归打印 s->t 的路径\n  if (prev[t] != -1 && t != s) {\n    print(prev, s, prev[t]);\n  }\n  System.out.print(t + " ");\n}\n')])])]),n("p",[t._v("这段代码不是很好理解，里面有三个重要的辅助变量 visited、queue、prev。只要理解这三个变量，读懂这段代码估计就没什么问题了。")]),t._v(" "),n("p",[t._v("visited是用来记录已经被访问的顶点，用来避免顶点被重复访问。如果顶点 q 被访问，那相应的 visited[q] 会被设置为 true。")]),t._v(" "),n("p",[t._v("queue是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点。因为广度优先搜索是逐层访问的，也就是说，我们只有把第 k 层的顶点都访问完成之后，才能访问第 k+1 层的顶点。当我们访问到第 k 层的顶点的时候，我们需要把第 k 层的顶点记录下来，稍后才能通过第 k 层的顶点来找第 k+1 层的顶点。所以，我们用这个队列来实现记录的功能。")]),t._v(" "),n("p",[t._v("prev用来记录搜索路径。当我们从顶点 s 开始，广度优先搜索到顶点 t 后，prev 数组中存储的就是搜索的路径。不过，这个路径是反向存储的。prev[w] 存储的是，顶点 w 是从哪个前驱顶点遍历过来的。比如，我们通过顶点 2 的邻接表访问到顶点 3，那 prev[3] 就等于 2。为了正向打印出路径，我们需要递归地来打印，你可以看下 print() 函数的实现方式。")]),t._v(" "),n("p",[t._v("为了方便你理解，我画了一个广度优先搜索的分解图，你可以结合着代码以及我的讲解一块儿看。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/316.jpeg",alt:""}})]),t._v(" "),n("p",[t._v("掌握了广优先搜索算法的原理，我们来看下，广度优先搜索的时间、空间复杂度是多少呢？")]),t._v(" "),n("p",[t._v("最坏情况下，终止顶点 t 离起始顶点 s 很远，需要遍历完整个图才能找到。这个时候，每个顶点都要进出一遍队列，每个边也都会被访问一次，所以，广度优先搜索的时间复杂度是 O(V+E)，其中，V 表示顶点的个数，E 表示边的个数。当然，对于一个连通图来说，也就是说一个图中的所有顶点都是连通的，E 肯定要大于等于 V-1，所以，广度优先搜索的时间复杂度也可以简写为 O(E)。")]),t._v(" "),n("p",[t._v("广度优先搜索的空间消耗主要在几个辅助变量 visited 数组、queue 队列、prev 数组上。这三个存储空间的大小都不会超过顶点的个数，所以空间复杂度是 O(V)。")]),t._v(" "),n("h2",{attrs:{id:"深度优先搜索（dfs）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深度优先搜索（dfs）"}},[t._v("#")]),t._v(" 深度优先搜索（DFS）")]),t._v(" "),n("p",[t._v("深度优先搜索（Depth-First-Search），简称 DFS。最直观的例子就是“走迷宫”。")]),t._v(" "),n("p",[t._v("假设你站在迷宫的某个岔路口，然后想找到出口。你随意选择一个岔路口来走，走着走着发现走不通的时候，你就回退到上一个岔路口，重新选择一条路继续走，直到最终找到出口。这种走法就是一种深度优先搜索策略。")]),t._v(" "),n("p",[t._v("走迷宫的例子很容易能看懂，我们现在再来看下，如何在图中应用深度优先搜索，来找某个顶点到另一个顶点的路径。")]),t._v(" "),n("p",[t._v("你可以看我画的这幅图。搜索的起始顶点是 s，终止顶点是 t，我们希望在图中寻找一条从顶点 s 到顶点 t 的路径。如果映射到迷宫那个例子，s 就是你起始所在的位置，t 就是出口。")]),t._v(" "),n("p",[t._v("我用深度递归算法，把整个搜索的路径标记出来了。这里面实线箭头表示遍历，虚线箭头表示回退。从图中我们可以看出，深度优先搜索找出来的路径，并不是顶点 s 到顶点 t 的最短路径。")]),t._v(" "),n("p",[n("img",{attrs:{src:"http://poetries1.gitee.io/img-repo/2020/07/317.png",alt:""}})]),t._v(" "),n("p",[t._v("实际上，深度优先搜索用的是一种比较著名的算法思想，回溯思想。这种思想解决问题的过程，非常适合用递归来实现。回溯思想我们后面会有专门的一节来讲，我们现在还回到深度优先搜索算法上。")]),t._v(" "),n("blockquote",[n("p",[t._v("我把上面的过程用递归来翻译出来，就是下面这个样子。我们发现，深度优先搜索代码实现也用到了 prev、visited 变量以及 print() 函数，它们跟广度优先搜索代码实现里的作用是一样的。不过，深度优先搜索代码实现里，有个比较特殊的变量 found，它的作用是，当我们已经找到终止顶点 t 之后，我们就不再递归地继续查找了。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("boolean found = false; // 全局变量或者类成员变量\n \npublic void dfs(int s, int t) {\n  found = false;\n  boolean[] visited = new boolean[v];\n  int[] prev = new int[v];\n  for (int i = 0; i < v; ++i) {\n    prev[i] = -1;\n  }\n  recurDfs(s, t, visited, prev);\n  print(prev, s, t);\n}\n \nprivate void recurDfs(int w, int t, boolean[] visited, int[] prev) {\n  if (found == true) return;\n  visited[w] = true;\n  if (w == t) {\n    found = true;\n    return;\n  }\n  for (int i = 0; i < adj[w].size(); ++i) {\n    int q = adj[w].get(i);\n    if (!visited[q]) {\n      prev[q] = w;\n      recurDfs(q, t, visited, prev);\n    }\n  }\n}\n")])])]),n("p",[t._v("理解了深度优先搜索算法之后，我们来看，深度度优先搜索的时、空间间复杂度是多少呢？")]),t._v(" "),n("p",[t._v("从我前面画的图可以看出，每条边最多会被访问两次，一次是遍历，一次是回退。所以，图上的深度优先搜索算法的时间复杂度是 O(E)，E 表示边的个数。")]),t._v(" "),n("p",[t._v("深度优先搜索算法的消耗内存主要是 visited、prev 数组和递归调用栈。visited、prev 数组的大小跟顶点的个数 V 成正比，递归调用栈的最大深度不会超过顶点的个数，所以总的空间复杂度就是 O(V)。")]),t._v(" "),n("h2",{attrs:{id:"解答开篇"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解答开篇"}},[t._v("#")]),t._v(" 解答开篇")]),t._v(" "),n("p",[t._v("了解了深度优先搜索和广度优先搜索的原理之后，开篇的问题是不是变得很简单了呢？我们现在来一起看下，如何找出社交网络中某个用户的三度好友关系？")]),t._v(" "),n("p",[t._v("上一节我们讲过，社交网络可以用图来表示。这个问题就非常适合用图的广度优先搜索算法来解决，因为广度优先搜索是层层往外推进的。首先，遍历与起始顶点最近的一层顶点，也就是用户的一度好友，然后再遍历与用户距离的边数为 2 的顶点，也就是二度好友关系，以及与用户距离的边数为 3 的顶点，也就是三度好友关系。")]),t._v(" "),n("p",[t._v("我们只需要稍加改造一下广度优先搜索代码，用一个数组来记录每个顶点与起始顶点的距离，非常容易就可以找出三度好友关系。")]),t._v(" "),n("h2",{attrs:{id:"内容小结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#内容小结"}},[t._v("#")]),t._v(" 内容小结")]),t._v(" "),n("p",[t._v("广度优先搜索和深度优先搜索是图上的两种最常用、最基本的搜索算法，比起其他高级的搜索算法，比如 A*、IDA* 等，要简单粗暴，没有什么优化，所以，也被叫作暴力搜索算法。所以，这两种搜索算法仅适用于状态空间不大，也就是说图不大的搜索。")]),t._v(" "),n("p",[t._v("广度优先搜索，通俗的理解就是，地毯式层层推进，从起始顶点开始，依次往外遍历。广度优先搜索需要借助队列来实现，遍历得到的路径就是，起始顶点到终止顶点的最短路径。深度优先搜索用的是回溯思想，非常适合用递归实现。换种说法，深度优先搜索是借助栈来实现的。在执行效率方面，深度优先和广度优先搜索的时间复杂度都是 O(E)，空间复杂度是 O(V)")])])}),[],!1,null,null,null);e.default=v.exports}}]);