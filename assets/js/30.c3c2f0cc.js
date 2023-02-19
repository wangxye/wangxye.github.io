(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mit6-824-2020-lab1-mapreduce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mit6-824-2020-lab1-mapreduce"}},[s._v("#")]),s._v(" MIT6.824-2020 Lab1 MapReduce")]),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("本文是本人学习"),a("code",[s._v("MIT 6.824 Lab 1")]),s._v("的笔记，包含自己一些实现和理解。")]),s._v(" "),a("p",[a("code",[s._v("Lab 1")]),s._v("的说明在 "),a("a",{attrs:{href:"http://nil.csail.mit.edu/6.824/2020/labs/lab-mr.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Lab1 Notes"),a("OutboundLink")],1),s._v("，需要阅读论文"),a("a",{attrs:{href:"https://pdos.csail.mit.edu/6.824/papers/mapreduce.pdf",target:"_blank",rel:"noopener noreferrer"}},[s._v("MapReduce"),a("OutboundLink")],1),s._v("。请以这篇说明和论文为主，以本文为辅。在阅读本文之前，务必先通读这篇说明和论文。若实在无法阅读英文，再姑且直接阅读本文。")]),s._v(" "),a("p",[a("code",[s._v("6.824")]),s._v("所有"),a("code",[s._v("Lab")]),s._v("都使用"),a("code",[s._v("Golang")]),s._v("为主要编程语言，若你不熟悉，可以快速看看"),a("a",{attrs:{href:"http://tour.golang.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Golang官方入门"),a("OutboundLink")],1),s._v("。我只花了半小时左右学习"),a("code",[s._v("Go")]),s._v("语言，就写出了这个"),a("code",[s._v("Lab")]),s._v("，证明要让代码"),a("code",[s._v("work")]),s._v("，不是特别困难。当然，要让代码优雅高效，充分学习"),a("code",[s._v("Go")]),s._v("语言还是非常有必要的。")]),s._v(" "),a("p",[s._v("本文代码中各种定义和调用非常复杂，很难三言两语说清楚。如果都要一行一行解释，这篇文章篇幅就太太太长了。在本文中呈现代码时，代码中肯定有未解释过的部分，甚至可能占到代码的主要篇幅。请你不要担心，也不要太早地刨根问底，文章中呈现的代码块都只是起到解释说明作用，更多算伪代码，而不是真正运行的代码。")]),s._v(" "),a("p",[s._v("要获得整理好、可直接运行的代码，请看"),a("a",{attrs:{href:"https://github.com/wangxye/MIT6.824",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的GitHub仓库"),a("OutboundLink")],1),s._v("(最好不要)。")]),s._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("h3",{attrs:{id:"任务总览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务总览"}},[s._v("#")]),s._v(" 任务总览")]),s._v(" "),a("p",[a("code",[s._v("Lab 1")]),s._v("主要工作是实现一个分布式"),a("code",[s._v("MapReduce")]),s._v("，将一个"),a("code",[s._v("master")]),s._v("节点和"),a("code",[s._v("worker")]),s._v("节点相互协作，并行执行任务的过程，此处任务为文本索引器。对于基础不够好的读者，也不必担心，我们可以参考单线程内容来了解其工作原理。")]),s._v(" "),a("p",[a("strong",[s._v("输入")]),s._v("数据以文件形式进入系统。一些进程运行"),a("code",[s._v("map")]),s._v("任务，拆分了原任务，产生了一些"),a("strong",[s._v("中间体")]),s._v("，这些中间体可能以"),a("strong",[s._v("键值对")]),s._v("形式存在。一些进程运行了"),a("code",[s._v("reduce")]),s._v("任务，利用中间体产生"),a("strong",[s._v("最终输出")]),s._v("。"),a("code",[s._v("master")]),s._v("进程用于分配任务，调整各个"),a("code",[s._v("worker")]),s._v("进程。")]),s._v(" "),a("p",[s._v("输入数据能够产生中间体，这说明原任务是"),a("strong",[s._v("可拆")]),s._v("的，也就才有了写成分布式的可能性。若原问题不是可拆的，"),a("code",[s._v("MapReduce")]),s._v("也就无从谈起。")]),s._v(" "),a("p",[s._v("中间体应均匀地分配给各个"),a("code",[s._v("reduce")]),s._v("任务，每个"),a("code",[s._v("reduce")]),s._v("任务整合这些中间体，令中间体个数减少，直至无法再减少，从中整合出最终结果。")]),s._v(" "),a("h3",{attrs:{id:"实现流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现流程"}},[s._v("#")]),s._v(" 实现流程")]),s._v(" "),a("p",[a("strong",[s._v("网络通信")])]),s._v(" "),a("p",[s._v("为了实现"),a("code",[s._v("master")]),s._v("进程和"),a("code",[s._v("worker")]),s._v("进程间数据交互，必须通过进程间通信机制来实现，而我们使用的进程间通信方式是"),a("code",[s._v("RPC")]),s._v("。因此需要定义双方的"),a("strong",[s._v("通信格式")]),s._v("，来兼容不同的任务请求("),a("code",[s._v("map")]),s._v("或者"),a("code",[s._v("reduce")]),s._v(")。"),a("code",[s._v("lab")]),s._v(" 帮我们决定了使用 "),a("code",[s._v("rpc")]),s._v(" 通信，同时 "),a("code",[s._v("master")]),s._v(" 和 "),a("code",[s._v("worker")]),s._v(" 通过 "),a("code",[s._v("unix domain socket")]),s._v(" 作为通信方式，用 "),a("code",[s._v("http")]),s._v(" 服务器提供 "),a("code",[s._v("rpc")]),s._v(" 服务。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// start a thread that listens for RPCs from worker.go")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("Master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\trpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\trpc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("HandleHTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tsockname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("masterSock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sockname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"unix"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sockname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Fatal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"listen error:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Serve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("strong",[s._v("任务切分")])]),s._v(" "),a("p",[s._v("我们程序的输入是"),a("code",[s._v("n")]),s._v("个文件，那么根据 "),a("code",[s._v("paper")]),s._v("，这里就有 "),a("code",[s._v("n")]),s._v("个 "),a("code",[s._v("map")]),s._v(" 任务，每个 "),a("code",[s._v("map")]),s._v(" 任务读取一个文件中的内容并处理后输出。这里输出需要注意，需要将"),a("code",[s._v("nReduce")]),s._v("大小，才能让后续的"),a("code",[s._v("reduce")]),s._v("任务正常执行。")]),s._v(" "),a("p",[s._v("而在分布式设计中，我们使用hash 桶 的设计，将相应的 "),a("code",[s._v("key")]),s._v(" 保证分在同一组文件中，保证了 "),a("code",[s._v("reduce")]),s._v(" 编码的简单。具体为我们首先对 key 做 hash 编码。将 "),a("code",[s._v("string")]),s._v(" 编码为 数字, 并对数字结果 "),a("code",[s._v("取模 N 运算")]),s._v(", "),a("code",[s._v("N")]),s._v(" 为传入的 "),a("code",[s._v("nReduce")]),s._v(" 值。运算的结果代表了相应 "),a("code",[s._v("kv")]),s._v(" 对应该放于第几个桶中，在这里就是归入哪一个输出文件。")]),s._v(" "),a("p",[a("strong",[s._v("消息设计")])]),s._v(" "),a("p",[s._v("我们完成了上述设计之后，开始实际逻辑的构建,我进行了以下设计，"),a("code",[s._v("master")]),s._v(" 和 "),a("code",[s._v("worker")]),s._v(" 通过 "),a("code",[s._v("rpc")]),s._v(" 消息交互来分配任务，任务完成之后 "),a("code",[s._v("worker")]),s._v(" 通知 "),a("code",[s._v("master")]),s._v("，并进行下一次任务分配。直到没有任务的时候，worker 退出。(如果没有任务的同时，所有任务都已完成 "),a("code",[s._v("Master")]),s._v(" 也会退出)")]),s._v(" "),a("p",[s._v("在整个交互过程中，需要注意的是："),a("code",[s._v("master")]),s._v("扮演的任务的发布者，而"),a("code",[s._v("worker")]),s._v("扮演的是任务的执行者，一些内容由"),a("code",[s._v("master")]),s._v("来协调，因此，我们可以采用"),a("code",[s._v("worker")]),s._v("退出设计，由"),a("code",[s._v("worker")]),s._v("来提交并请求任务，而"),a("code",[s._v("master")]),s._v("在来根据当前状态调整任务内容，该设计也让 "),a("code",[s._v("master")]),s._v(" 状态管理代码逻辑更简洁。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" WorkArgs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   Workerid "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" WorkReply "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   Isfinished "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n   Taskid "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   Filename "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n   MapReduce "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n   BucketNum "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" CommitArgs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   Workerid "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n   Taskid "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   MapReduce "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" CommitReply "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   IsOK "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("strong",[s._v("状态管理")])]),s._v(" "),a("p",[s._v("众所周知，分布式一大问题就是时序。虽然状态是万恶之源，但现实世界就是现实世界，熵增不可改变，复杂度只能转移，我们尽量简化即可。")]),s._v(" "),a("p",[s._v("关于这个系统，我们需要管理")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("map")]),s._v(" 任务状态: 有多少个 "),a("code",[s._v("map")]),s._v(" 任务，完成了多少")]),s._v(" "),a("li",[a("code",[s._v("reduce")]),s._v(" 任务状态:有多少个 "),a("code",[s._v("reduce")]),s._v(" 任务，完成了多少。同时 "),a("code",[s._v("reduce")]),s._v(" 还有在 "),a("code",[s._v("map")]),s._v(" 任务都完成后进行")]),s._v(" "),a("li",[a("code",[s._v("worker")]),s._v(" 状态: 谁在干话，干了多久?")])]),s._v(" "),a("p",[s._v("任务则设计三个状态：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("TaskIdle")]),s._v(": 任务闲置，没人管ing o(╥﹏╥)o")]),s._v(" "),a("li",[a("code",[s._v("TaskWorking")]),s._v(": 任务工作中(你咋知道我在摸鱼？因为你超时了！)")]),s._v(" "),a("li",[a("code",[s._v("TaskCommit")]),s._v(": 任务完成！")])]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   TaskIdle "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("iota")]),s._v("\n   TaskWorking\n   TaskCommit\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" Coordinator "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Your definitions here.")]),s._v("\n   files   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n   nReduce "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n\n   mapTasks    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   reduceTasks "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n\n   mapCount "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n\n   workerCommit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n   allCommited  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n\n   timeout time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Duration\n\n   mu sync"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("RWMutex\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[a("strong",[s._v("超时机制")])]),s._v(" "),a("p",[s._v("由于"),a("code",[s._v("master")]),s._v(" 无法可靠地区分崩溃的"),a("code",[s._v("work")]),s._v("或存活但由于某种原因停止的"),a("code",[s._v("work")]),s._v("，以及正在执行但太慢而无法使用的"),a("code",[s._v("work")]),s._v("，因此需要设计一种重置机制，来对超过最大定时的任务进行重置或重新分配任务。")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("WithTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("go")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<-")]),s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Done")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Lock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("workerCommit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Workerid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" TaskCommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reduceTasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" TaskCommit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("reduceTasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" TaskIdle\n                log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"[Error]:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"worker:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Workerid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reduce task:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Unlock")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),a("ul",[a("li",[s._v("可能要对一些数据结构加锁"),a("code",[s._v("Mutex")])]),s._v(" "),a("li",[s._v("成功的实现应至少通过脚本"),a("code",[s._v("test-mr.sh")]),s._v("测试")])])])}),[],!1,null,null,null);t.default=e.exports}}]);