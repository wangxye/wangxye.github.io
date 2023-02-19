(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{312:function(v,_,t){"use strict";t.r(_);var e=t(4),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"计算机网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络"}},[v._v("#")]),v._v(" 计算机网络")]),v._v(" "),t("h2",{attrs:{id:"tcp-三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-三次握手"}},[v._v("#")]),v._v(" TCP 三次握手")]),v._v(" "),t("p",[v._v("一开始，客户端和服务端都处于CLOSED状态。先是服务端主动监听某个端口，处于LISTEN 状态。")]),v._v(" "),t("p",[t("strong",[v._v("第一次握手")]),v._v("：客户端会随机初始化序号（client_isn )，将此序号置于TCP首部的「序号」字段中，同时把SYN 标志位置为1，表示SYN 报文。接着把第一个SYN 报文发送给服务端，表示向服务端发起连接，该报文不包含应用层数据，之后客户端处于SYN-SENT状态。")]),v._v(" "),t("p",[t("strong",[v._v("第二次握手")]),v._v("：服务端收到客户端的SYN 报文后，首先服务端也随机初始化自己的序号（server_isn ) ，将此序号填入TCP首部的「序号」字段中，其次把TCP首部的「确认应答号」字段填入client_isn +1 ,接着把SYN和ACK标志位置为1。最后把该报文发给客户端，该报文也不包含应用层数据，之后服务端处于SYN-RCVD 状态。")]),v._v(" "),t("p",[t("strong",[v._v("第三次握手")]),v._v("：客户端收到服务端报文后，还要向服务端回应最后一个应答报文，首先该应答报文TCP首部 ACK标志位置为1 ，其次「确认应答号」字段填入server_isn +1 ，最后把报文发送给服务端，这次报文可以携带客户到服务器的数据，之后客户端处于ESTABLISHED状态。\n服务器收到客户端的应答报文后，也进入ESTABLISHED状态。")]),v._v(" "),t("p",[v._v("半连接队列、全连接队列")]),v._v(" "),t("ul",[t("li",[v._v("半连接队列，也称 SYN 队列；")]),v._v(" "),t("li",[v._v("全连接队列，也称 accepet 队列；")])]),v._v(" "),t("p",[t("strong",[v._v("三次握手的原因：")])]),v._v(" "),t("ul",[t("li",[v._v("三次握手才可以阻止重复历史连接的初始化(主要原因)")]),v._v(" "),t("li",[v._v("三次握手才可以同步双方的初始序列号")]),v._v(" "),t("li",[v._v("三次握手才可以避免资源浪费")])]),v._v(" "),t("p",[v._v("「两次握手」︰无法防止历史连接的建立，会造成双方资源的浪费，也无法可靠的同步双方序列号;")]),v._v(" "),t("p",[v._v("「四次握手」︰三次握手就已经理论上最少可靠连接建立，所以不需要使用更多的通信次数。")]),v._v(" "),t("h2",{attrs:{id:"tcp-四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-四次挥手"}},[v._v("#")]),v._v(" TCP 四次挥手")]),v._v(" "),t("p",[t("strong",[v._v("第一次挥手")]),v._v("：客户端打算关闭连接，此时会发送一个TCP首部FIN 标志位被置为1的报文，也即FIN报文，之后客户端进入FIN_WAIT_1状态。")]),v._v(" "),t("p",[t("strong",[v._v("第二次挥手")]),v._v("：服务端收到该报文后，就向客户端发送ACK应答报文，接着服务端进入CLOSED_WAIT状态。客户端收到服务端的ACK应答报文后，之后进入FIN_WAIT_2状态。")]),v._v(" "),t("p",[t("strong",[v._v("第三次挥手")]),v._v("：等待服务端处理完数据后，也向客户端发送FIN 报文，之后服务端进入LAST_ACK状态。")]),v._v(" "),t("p",[t("strong",[v._v("第四次挥手")]),v._v("：客户端收到服务端的FIN报文后，回一个ACK应答报文，之后进入TIME_WAIT状态。服务器收到了ACK应答报文后，就进入了CLOSED状态，至此服务端已经完成连接的关闭。客户端在经过2MSL一段时间后，自动进入CLOSED状态，至此客户端也完成连接的关闭。")]),v._v(" "),t("p",[t("strong",[v._v("四次挥手的原因：")])]),v._v(" "),t("ul",[t("li",[v._v("关闭连接时，客户端向服务端发送FIN 时，仅仅表示客户端不再发送数据了但是还能接收数据。")]),v._v(" "),t("li",[v._v("服务器收到客户端的FIN 报文时，先回一个ACK应答报文，而服务端可能还有数据需要处理和发送，等服务端不再发送数据时，才发送FIN报文给客户端来表示同意现在关闭连接。")])]),v._v(" "),t("p",[t("strong",[v._v("TIME_WAIT等待时间为2MSL的原因：")])]),v._v(" "),t("p",[v._v("MSL是Maximum Segment Lifetime，报文最大生存时间，它是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。因为TCP报文基于是IP协议的，而IP头中有一个TTL字段，是IP数据报可以经过的最大路由数，每经过一个处理他的路由器此值就减1，当此值为0则数据报将被丢弃，同时发送ICMP报文通知源主机。")]),v._v(" "),t("p",[v._v("MSL与TTL的区别:：MSL的单位是时间，而TTL是经过路由跳数。所以 MSL应该要大于等于TTL消耗为О的时间，以确保报文已被自然消亡。TIME_WAT等待2倍的MSL，比较合理的解释是：网络中可能存在来自发送方的数据包，当这些发送方的数据包被接收方处理后又会向对方发送响应，所以一来一回需要等待2倍的时间。")]),v._v(" "),t("p",[v._v("2MSL 的时间是从客户端接收到FIN后发送ACK开始计时的。如果在 TIME-WAIT时间内，因为客户端的ACK没有传输到服务端，客户端又接收到了服务端重发的FIN报文，那么2MSL时间将重新计时。")]),v._v(" "),t("p",[t("strong",[v._v("TIME_WAIT状态的原因：")])]),v._v(" "),t("p",[v._v("主动发起关闭连接的一方，才会有TIME-WAIT状态。")]),v._v(" "),t("p",[v._v("需要TIME-WAIT状态，主要是两个原因︰")]),v._v(" "),t("ul",[t("li",[v._v("防止具有相同「四元组」的「旧」数据包被收到；")])]),v._v(" "),t("p",[v._v("经过2MSL这个时间，足以让两个方向上的数据包都被丢弃，使得原来连接的数据包在网络中都自然消失，再出现的数据包一定都是新建立连接所产生的。")]),v._v(" "),t("ul",[t("li",[v._v("保证「被动关闭连接」的一方能被正确的关闭，即保证最后的ACK能让被动关闭方接收，从而帮助其正常关闭；")])]),v._v(" "),t("p",[v._v("TIME-WAIT作用是等待足够的时间以确保最后的ACK能让被动关闭方接收，从而帮助其正常关闭。")]),v._v(" "),t("p",[t("strong",[v._v("过多的TIME-WAIT状态主要的危害有两种:")])]),v._v(" "),t("ul",[t("li",[v._v("第一是内存资源占用；")]),v._v(" "),t("li",[v._v("第二是对端口资源的占用，一个TCP连接至少消耗一个本地端口；")])]),v._v(" "),t("h2",{attrs:{id:"tcp与udp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp的区别"}},[v._v("#")]),v._v(" TCP与UDP的区别")]),v._v(" "),t("p",[v._v("TCP作为面向流的协议，提供可靠的、面向连接的运输服务，并且提供点对点通信 UDP作为面向报文的协议，不提供可靠交付，并且不需要连接，不仅仅对点对点，也支持多播和广播")]),v._v(" "),t("h2",{attrs:{id:"tcp-可靠性原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-可靠性原因"}},[v._v("#")]),v._v(" TCP 可靠性原因")]),v._v(" "),t("p",[v._v("校验和、序列号、确认应答、超时重传、连接管理、"),t("strong",[v._v("流量控制")]),v._v("、"),t("strong",[v._v("拥塞控制")])]),v._v(" "),t("h2",{attrs:{id:"tcp-流量控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-流量控制"}},[v._v("#")]),v._v(" TCP 流量控制")]),v._v(" "),t("p",[v._v("TCP 利用滑动窗口实现流量控制。流量控制是为了控制发送方发送速率，保证接收方来得及接收。")]),v._v(" "),t("p",[v._v("当接收端通告的窗口大小变成0，发送端会发一个1字节的段(就是下一字节的数据，没新的数据段发送的时候发一个ack)，TCP零窗口探测，强制接收端重新宣告下一个期望的字节和窗口大小。如果接收方回复窗口大小仍然为零，则发送方的探测定时器加倍。没有收到ACK时，发送探测包的最大次数之后连接超时。")]),v._v(" "),t("h2",{attrs:{id:"tcp-拥塞控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-拥塞控制"}},[v._v("#")]),v._v(" TCP 拥塞控制")]),v._v(" "),t("p",[v._v("判断拥塞：")]),v._v(" "),t("ul",[t("li",[v._v("1、重传定时器超时；(慢开始门限ssthresh减半,把拥塞窗口cwnd又设置为1)")]),v._v(" "),t("li",[v._v("2、收到三次重复的ACK。(慢开始门限ssthresh减半，接着把cwnd值设置为慢开始门限ssthresh减半后的数值)")])]),v._v(" "),t("p",[v._v("算法")]),v._v(" "),t("ul",[t("li",[v._v("慢开始：指数增长")]),v._v(" "),t("li",[v._v("拥塞避免：线性增长")]),v._v(" "),t("li",[v._v("快重传")]),v._v(" "),t("li",[v._v("快恢复")])]),v._v(" "),t("h2",{attrs:{id:"tcp-沾包问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-沾包问题"}},[v._v("#")]),v._v(" TCP 沾包问题")]),v._v(" "),t("p",[v._v("原因：")]),v._v(" "),t("ul",[t("li",[v._v("协议上：\n"),t("ul",[t("li",[v._v("TCP是基于字节流的，虽然应用层和传输层之间的数据交互是大小不等的数据块，但是TCP把这些数据块仅仅看成一连串无结构的字节流，没有边界；")]),v._v(" "),t("li",[v._v("在TCP的首部没有表示数据长度的字段")])])]),v._v(" "),t("li",[v._v("发送方默认使用Nagle算法，\n"),t("ul",[t("li",[v._v("1）只有上一个分组得到确认，才会发送下一个分组；")]),v._v(" "),t("li",[v._v("2）收集多个小分组，在一个确认到来时一起发送。")])])]),v._v(" "),t("li",[v._v("接收方TCP接收分组的速度大于应用程序读分组的速度，导致多个包就会被存至缓存")])]),v._v(" "),t("p",[v._v("解决方式")]),v._v(" "),t("ul",[t("li",[v._v("发送方通过关闭Nagle算法来解决")]),v._v(" "),t("li",[v._v("接收方需要在应用层处理，参照netty\n"),t("ul",[t("li",[v._v("消息定长，报文大小固定长度，发送和接收方遵循相同的约定，通过接收方编程实现获取定长报文区分。")]),v._v(" "),t("li",[v._v("包尾添加特殊分隔符，指定特殊字符作为报文分隔符，接收方通过特殊分隔符切分报文区分。")]),v._v(" "),t("li",[v._v("将消息分为消息头和消息体，消息头中包含表示信息的总长度（或者消息体长度）的字段")])])])]),v._v(" "),t("h2",{attrs:{id:"osi-七层协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#osi-七层协议"}},[v._v("#")]),v._v(" OSI 七层协议")]),v._v(" "),t("ul",[t("li",[v._v("应用层：与其它计算机进行通讯的一个应用，它是对应应用程序的通信服务的。TELNET，HTTP，FTP，NFS，SMTP等。")]),v._v(" "),t("li",[v._v("表示层，这一层的主要功能是定义数据格式及加密。加密，ASCII等。")]),v._v(" "),t("li",[v._v("会话层，它定义了如何开始、控制和结束一个会话，包括对多个双向消息的控制和管理，以便在只完成连续消息的一部分时可以通知应用，从而使表示层看到的数据是连续的。RPC，SQL等。")]),v._v(" "),t("li",[v._v("传输层，这层的功能包括是选择差错恢复协议还是无差错恢复协议，及在同一主机上对不同应用的数据流的输入进行复用，还包括对收到的顺序不对的数据包的重新排序功能。TCP，UDP，SPX。")]),v._v(" "),t("li",[v._v("网络层，这层对端到端的包传输进行定义，定义能够标识所有结点的逻辑地址，还定义路由实现的方式和学习的方式。IP，IPX等。")]),v._v(" "),t("li",[v._v("数据链路层，它定义了在单个链路上如何传输数据。这些协议与被讨论的各种介质有关。ATM，FDDI等。")]),v._v(" "),t("li",[v._v("物理层，OSI的物理层规范是有关传输介质的特性，这些规范通常也参考了其他组织制定的标准。Rj45，802.3等。")])]),v._v(" "),t("h2",{attrs:{id:"http-报文格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-报文格式"}},[v._v("#")]),v._v(" HTTP 报文格式")]),v._v(" "),t("p",[v._v("请求报文格式")]),v._v(" "),t("ul",[t("li",[v._v("请求行、请求头、空行、请求体")]),v._v(" "),t("li",[v._v("cookie、host、connection、accept-language、accept-encoding、user-agent")])]),v._v(" "),t("p",[v._v("响应报文格式")]),v._v(" "),t("ul",[t("li",[v._v("状态行、响应体、空行、响应体")]),v._v(" "),t("li",[v._v("connection、content-type、content-encoding、content-length、set-cookie、Last-Modified、Cache-Control、Expires")])]),v._v(" "),t("p",[t("strong",[v._v("HTTP 状态码")])]),v._v(" "),t("ul",[t("li",[v._v("1XX系列：信息，服务器收到请求，需要请求者继续执行操作；\n"),t("ul",[t("li",[v._v('100("Continue")，继续。客户端应继续其请求')]),v._v(" "),t("li",[v._v('101("Switching Protocols")，切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议')])])]),v._v(" "),t("li",[v._v("2XX系列： 成功，操作被成功接收并处理；\n"),t("ul",[t("li",[v._v('200("OK")，请求成功。一般用于GET与POST请求')]),v._v(" "),t("li",[v._v('201("Created")，已创建。成功请求并创建了新的资源')]),v._v(" "),t("li",[v._v('202("Accepted")， 已接受。已经接受请求，但未处理完成')])])]),v._v(" "),t("li",[v._v("3XX系列： 重定向，需要进一步的操作以完成请求；\n"),t("ul",[t("li",[v._v('301("Moved Permanently")，永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。')]),v._v(" "),t("li",[v._v('302("Found")，临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI')]),v._v(" "),t("li",[v._v('303("See Other")，查看其它地址。与301类似。使用GET和POST请求查看')])])]),v._v(" "),t("li",[v._v("4XX系列： 客户端错误，请求包含语法错误或无法完成请求；\n"),t("ul",[t("li",[v._v('400("Bad Request")，客户端请求的语法错误，服务器无法理解')]),v._v(" "),t("li",[v._v('401("Unauthorized")，请求要求用户的身份认证')]),v._v(" "),t("li",[v._v('403("Forbidden")，服务器理解请求客户端的请求，但是拒绝执行此请求')]),v._v(" "),t("li",[v._v('404("Not Found")，服务器无法根据客户端的请求找到资源（网页）')])])]),v._v(" "),t("li",[v._v("5XX系列： 服务器错误，服务器在处理请求的过程中发生了错误\n"),t("ul",[t("li",[v._v('500("Internal Server Error")，服务器内部错误，无法完成请求')]),v._v(" "),t("li",[v._v('503("Service Unavailable")， 由于超载或系统维护，服务器暂时的无法处理客户端的请求。')])])])]),v._v(" "),t("h2",{attrs:{id:"http-get、post-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-get、post-区别"}},[v._v("#")]),v._v(" HTTP Get、Post 区别")]),v._v(" "),t("ul",[t("li",[v._v("GET请求参数通过URL传递，POST的参数放在请求体中。")]),v._v(" "),t("li",[v._v("GET产生一个TCP数据包；POST产生两个TCP数据包。对于GET方式的请求，浏览器会把请求头和请求体一并发送出去；而对于POST，浏览器先发送请求头，服务器响应100 continue，浏览器再发送请求体。")]),v._v(" "),t("li",[v._v("GET请求会被浏览器主动缓存，而POST不会，除非手动设置。")]),v._v(" "),t("li",[v._v("GET请求只能进行url编码，而POST支持多种编码方式。")]),v._v(" "),t("li",[v._v("GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。")])]),v._v(" "),t("h2",{attrs:{id:"session-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-cookie"}},[v._v("#")]),v._v(" Session Cookie")]),v._v(" "),t("p",[v._v("会话是通过http协议进行通信的，但http协议是一种无状态协议（即当浏览器向服务器发送一次请求，服务器响应请求之后通信便结束），若同一个浏览器在一个网站上面请求多次本网站的其它资源，则每次都需建立浏览器与服务器的连接。这样就意味着服务器无法从连接上跟踪服务器。")]),v._v(" "),t("p",[v._v("总而言之，由于HTTP协议是无状态的协议，需要用某种机制来识具体的用户身份，用来跟踪用户的整个会话。")]),v._v(" "),t("p",[t("strong",[v._v("Cookie")]),v._v("是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式。")]),v._v(" "),t("p",[t("strong",[v._v("Session")]),v._v("是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中；")]),v._v(" "),t("p",[v._v("由Cookie的隐私安全机制决定，"),t("strong",[v._v("Cookie是不可跨域名的")]),v._v("。")]),v._v(" "),t("p",[v._v("当Cookie被禁用，采用"),t("strong",[v._v("URL重写")]),v._v("的技术来进行会话跟踪，即每次HTTP交互，URL后面都会被附加上一个诸如 sid=xxxxx 这样的参数，服务端据此来识别用户。")]),v._v(" "),t("p",[v._v("Cookie 丢的原因：")]),v._v(" "),t("ul",[t("li",[v._v("Cookie的Domain设置不正确")]),v._v(" "),t("li",[v._v("Cookie超时")]),v._v(" "),t("li",[v._v("Cookie中含有一些非法字符，致使浏览器丢弃Cookie")]),v._v(" "),t("li",[v._v("程序源码可能有多处重复设置或取消Cookie")])]),v._v(" "),t("p",[v._v("区别：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("作用范围不同")]),v._v("，Cookie 保存在客户端，Session 保存在服务器端。")]),v._v(" "),t("li",[t("strong",[v._v("有效期不同")]),v._v("，Cookie 可设置为长时间保持，比如我们经常使用的默认登录功能，Session 一般失效时间较短，客户端关闭或者 Session 超时都会失效。")]),v._v(" "),t("li",[t("strong",[v._v("隐私策略不同")]),v._v("，Cookie 存储在客户端，容易被窃取；Session 存储在服务端，安全性相对 Cookie 要好一些。")]),v._v(" "),t("li",[t("strong",[v._v("存储大小不同")]),v._v("， 单个 Cookie 保存的数据不能超过 4K；对于 Session 来说存储没有上限，但出于对服务器的性能考虑，Session 内不要存放过多的数据，并且需要设置 Session 删除机制。")])]),v._v(" "),t("h2",{attrs:{id:"http1-0和http1-1的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-0和http1-1的区别"}},[v._v("#")]),v._v(" HTTP1.0和HTTP1.1的区别")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("长连接")]),v._v("：HTTP 1.1支持长连接（Persistent Connection）和请求的流水线（Pipelining）处理，在一个TCP连接上可以传送多个HTTP请求和响应，减少了建立和关闭连接的消耗和延迟，在HTTP1.1中默认开启"),t("code",[v._v("Connection： keep-alive")]),v._v("，一定程度上弥补了HTTP1.0每次请求都要创建连接的缺点。")]),v._v(" "),t("li",[t("strong",[v._v("缓存处理")]),v._v("：在HTTP1.0中主要使用header里的If-Modified-Since,Expires来做为缓存判断的标准，HTTP1.1则引入了更多的缓存控制策略，可供选择的缓存头来控制缓存策略。")]),v._v(" "),t("li",[t("strong",[v._v("带宽优化及网络连接的使用")]),v._v("：HTTP1.0中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1则在请求头引入了range头域，它允许只请求资源的某个部分，即返回码是206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。")]),v._v(" "),t("li",[t("strong",[v._v("错误通知的管理")]),v._v("：在HTTP1.1中新增了24个错误状态响应码，如409（Conflict）表示请求的资源与资源的当前状态发生冲突；410（Gone）表示服务器上的某个资源被永久性的删除。")]),v._v(" "),t("li",[t("strong",[v._v("Host头处理")]),v._v("：在HTTP1.0中认为每台服务器都绑定一个唯一的IP地址，因此，请求消息中的URL并没有传递主机名（hostname）。但随着虚拟主机技术的发展，在一台物理服务器上可以存在多个虚拟主机（Multi-homed Web Servers），并且它们共享一个IP地址。HTTP1.1的请求消息和响应消息都应支持Host头域，且请求消息中如果没有Host头域会报告一个错误（400 Bad Request）。")])]),v._v(" "),t("h2",{attrs:{id:"http1-1和-http2-0的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http1-1和-http2-0的区别"}},[v._v("#")]),v._v(" HTTP1.1和 HTTP2.0的区别")]),v._v(" "),t("p",[v._v("HTTP2.0相比HTTP1.1支持的特性：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("头部压缩")]),v._v("，HTTP1.1的头部（header）带有大量信息，而且每次都要重复发送；HTTP2.0使用encoder来减少需要传输的header大小，通讯双方各自cache一份header fields表，既避免了重复header的传输，又减小了需要传输的大小。")]),v._v(" "),t("li",[t("strong",[v._v("新的二进制格式")]),v._v("：HTTP1.1的解析是基于文本。基于文本协议的格式解析存在天然缺陷，文本的表现形式有多样性，要做到健壮性考虑的场景必然很多，二进制则不同，只认0和1的组合。基于这种考虑HTTP2.0的协议解析决定采用二进制格式，实现方便且健壮。")]),v._v(" "),t("li",[t("strong",[v._v("多路复用")]),v._v("，即连接共享，即每一个request都是用作连接共享机制的。一个request对应一个id，这样一个连接上可以有多个request，每个连接的request可以随机的混杂在一起，接收方可以根据request的 id将request再归属到各自不同的服务端请求里面。")]),v._v(" "),t("li",[t("strong",[v._v("服务端推送")]),v._v("：服务器除了对最初请求的响应外，服务器还可以额外的向客户端推送资源，而无需客户端明确的请求")])]),v._v(" "),t("h2",{attrs:{id:"dns-解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析"}},[v._v("#")]),v._v(" DNS 解析")]),v._v(" "),t("ul",[t("li",[v._v("浏览器搜索"),t("strong",[v._v("浏览器的DNS缓存")])]),v._v(" "),t("li",[v._v("若没有，则搜索"),t("strong",[v._v("操作系统中的DNS缓存和hosts文件")])]),v._v(" "),t("li",[v._v("若没有，则操作系统将域名发送至"),t("strong",[v._v("本地域名服务器")]),v._v("，本地域名服务器查询自己的DNS缓存，查找成功则返回结果，否则依次向"),t("strong",[v._v("根域名服务器、顶级域名服务器、权限域名服务器")]),v._v("发起查询请求，最终返回IP地址给本地域名服务器")]),v._v(" "),t("li",[v._v("本地域名服务器将得到的IP地址返回给"),t("strong",[v._v("操作系统")]),v._v("，同时自己也"),t("strong",[v._v("将IP地址缓存起来")])]),v._v(" "),t("li",[v._v("操作系统将 IP 地址返回给浏览器，同时自己也将IP地址缓存起来")]),v._v(" "),t("li",[v._v("浏览器得到域名对应的IP地址")])]),v._v(" "),t("h2",{attrs:{id:"浏览器中输入url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器中输入url"}},[v._v("#")]),v._v(" 浏览器中输入URL")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("解析域名")]),v._v("，找到主机 IP。")]),v._v(" "),t("li",[v._v("浏览器利用 IP 直接与网站主机通信，"),t("strong",[v._v("三次握手")]),v._v("，建立 TCP 连接。\n"),t("ul",[t("li",[v._v("浏览器会以一个随机端口向服务端的 web 程序 80 端口发起 TCP 的连接。")])])]),v._v(" "),t("li",[v._v("建立 TCP 连接后，浏览器向主机发起一个HTTP请求。")]),v._v(" "),t("li",[v._v("服务器"),t("strong",[v._v("响应请求")]),v._v("，返回响应数据。")]),v._v(" "),t("li",[v._v("浏览器"),t("strong",[v._v("解析响应内容，进行渲染")]),v._v("，呈现给用户。")])]),v._v(" "),t("h2",{attrs:{id:"https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https"}},[v._v("#")]),v._v(" HTTPS")]),v._v(" "),t("p",[v._v("HTTP由于是明文传输，所谓的明文，就是说客户端与服务端通信的信息都是肉眼可见的，随意使用一个抓包工具都可以截获通信的内容。")]),v._v(" "),t("p",[v._v("所以安全上存在以下三个风险：")]),v._v(" "),t("ul",[t("li",[v._v("窃听风险，比如通信链路上可以获取通信内容，用户号容易没。")]),v._v(" "),t("li",[v._v("篡改风险，比如强制植入垃圾广告，视觉污染，用户眼容易瞎。")]),v._v(" "),t("li",[v._v("冒充风险，比如冒充淘宝网站，用户钱容易没。")])]),v._v(" "),t("p",[v._v("HTTPS在HTTP与TCP层之间加入了TLS协议，来解决上述的风险。")]),v._v(" "),t("ul",[t("li",[v._v("信息加密：HTTP交互信息是被加密的，第三方就无法被窃取;")]),v._v(" "),t("li",[v._v("校验机制︰校验信息传输过程中是否有被第三方篡改过，如果被篡改过，则会有警告提示")]),v._v(" "),t("li",[v._v("身份证书：证明淘宝是真的淘宝网;")])]),v._v(" "),t("h3",{attrs:{id:"rsa握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rsa握手过程"}},[v._v("#")]),v._v(" RSA握手过程")]),v._v(" "),t("p",[t("strong",[v._v("TLS第一次握手")]),v._v("：客户端首先会发一个「Client Hello」消息，字面意思我们也能理解到，这是跟服务器「打招呼」。")]),v._v(" "),t("p",[v._v("消息里面有"),t("strong",[v._v("客户端使用的TLS版本号、支持的密码套件列表，以及生成的随机数(Client Random)")]),v._v("，这个随机数会被服务端保留，它是生成对称加密密钥的材料之一。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第二次握手")]),v._v("：当服务端收到客户端的「Client Hello」消息后，会确认TLS版本号是否支持，和从密码套件列表中选择一个密码套件，以及生成随机数(Server Random)。\n接着，返回「Server Hello」消息，消息里面有"),t("strong",[v._v("服务器确认的TLS版本号，也给出了随机数(Server Random) ,然后从客户端的密码套件列表选择了一个合适的密码套件")]),v._v("。")]),v._v(" "),t("p",[v._v("然后，服务端为了证明自己的身份，会发送「Server Certificate」给客户端，这个消息里含有数字证书。")]),v._v(" "),t("p",[v._v("随后，服务端发了「Server Hello Done」消息，目的是告诉客户端，我已经把该给你的东西都给你了，本次打招呼完毕。")]),v._v(" "),t("p",[v._v("**PS：**为了让服务端的公钥被大家信任，服务端的证书都是由CA (Certificate Authority，证书认证机构）签名的，CA就是网络世界里的公安局、公证中心，具有极高的可信度，所以由它来给各个公钥签名，信任的一方签发的证书,那必然证书也是被信任的。")]),v._v(" "),t("p",[v._v("证书链：这是为了确保根证书的绝对安全性，将根证书隔离地越严格越好，不然根证书如果失守了，那么整个信任链都会有问题。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第三次握手")]),v._v("：客户端验证完证书后，认为可信则继续往下走。接着，客户端就会生成一个新的随机数(pre-master)，用服务器的 RSA公钥加密该随机数，通过「Change Cipher Key Exchange」消息传给服务端。")]),v._v(" "),t("p",[v._v("服务端收到后，用 RSA私钥解密，得到客户端发来的随机数(pre-master)。")]),v._v(" "),t("p",[v._v("至此，客户端和服务端双方都共享了三个随机数，分别是Client Random、Server Random、pre-master。")]),v._v(" "),t("p",[v._v("于是，双方根据已经得到的三个随机数，生成会话密钥(Master Secret) ，它是对称密钥，用于对后续的HTTP请求/响应的数据加解密。生成完会话密钥后，然后客户端发一个「Change Cipher Spec」 ，告诉服务端开始使用加密方式发送消息。")]),v._v(" "),t("p",[v._v("然后，客户端再发一个「Enerypted Handshake Message (Finishd)」消息，把之前所有发送的数据做个摘要，再用会话密钥(master secret)加密一下，让服务器做个验证，验证加密通信是否可用和之前握手信息是否有被中途篡改过。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第四次握手")]),v._v("：服务器也是同样的操作，发「Change Cipher Spec」和「Encrypted Handshake Message」消息，如果双方都验证加密和解密没问题，那么握手正式完成。\n最后，就用「会话密钥」加解密HTTP请求和响应了。")]),v._v(" "),t("p",[t("strong",[v._v("缺点")]),v._v("：使用RSA密钥协商算法的最大问题是"),t("strong",[v._v("不支持前向保密")]),v._v("。因为客户端传递随机数（用于生成对称加密密钥的条件之一）给服务端时使用的是公钥加密的，服务端收到到后，会用私钥解密得到随机数。所以一旦服务端的私钥泄漏了，过去被第三方截获的所有TLS通讯密文都会被破解。")]),v._v(" "),t("h3",{attrs:{id:"ecdhe-握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecdhe-握手过程"}},[v._v("#")]),v._v(" ECDHE 握手过程")]),v._v(" "),t("p",[v._v("使用了ECDHE，在TLS第四次握手前，客户端就已经发送了加密的HTTP数据，ECDHE相比 RSA握手过程省去了一个消息往返的时间。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第一次握手")]),v._v("：客户端首先会发一个「Client Hello」消息，消息里面有客户端使用的TLS版本号、支持的密码套件列表，以及生成的随机数(Client Random) 。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第二次握手")]),v._v("：服务端收到客户端的「打招呼」，同样也要回礼，会返回「Server Hello」消息，消息面有服务器确认的TLS版本号，也给出了一个随机数(Server Random)，然后从客户端的密码套件列表选择了一个合适的密码套件。")]),v._v(" "),t("p",[v._v("接着，服务端为了证明自己的身份，发送「Certificate」消息，会把证书也发给客户端。")]),v._v(" "),t("p",[v._v("这一步就和RSA握手过程有很大到区别了，因为服务端选择了ECDHE密钥协商算法，所以会在发送完证书后，发送「Server Key Exchange」消息。")]),v._v(" "),t("p",[v._v("这个过程服务器做了三件事：")]),v._v(" "),t("ul",[t("li",[v._v("选择了名为named_curve的椭圆曲线，选好了椭圆曲线相当于椭圆曲线基点G也定好了，这些都会公开给客户端；")]),v._v(" "),t("li",[v._v("生成随机数作为服务端椭圆曲线的私钥，保留到本地；")]),v._v(" "),t("li",[v._v("根据基点G和私钥计算出服务端的椭圆曲线公钥，这个会公开给客户端。")])]),v._v(" "),t("p",[v._v("为了保证这个椭圆曲线的公钥不被第三方篡改，服务端会用RSA签名算法给服务端的椭圆曲线公钥做个签名。")]),v._v(" "),t("p",[v._v("随后，就是「Server Hello Done」消息，服务端跟客户端表明:“这些就是我提供的信息，打招呼完毕”。")]),v._v(" "),t("p",[v._v("至此，TLS两次握手就已经完成了，目前客户端和服务端通过明文共享了这几个信息∶Client Random、Server Random、使用的椭圆曲线、椭圆曲线基点G、服务端椭圆曲线的公钥，这几个信息很重要，是后续生成会话密钥的材料。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第三次握手")]),v._v("：客户端收到了服务端的证书后，自然要校验证书是否合法，如果证书合法，那么服务端到身份就是没问题的。校验证书到过程，会走证书链逐级验证，确认证书的真实性，再用证书的公钥验证签名，这样就能确认服务端的身份了，确认无误后，就可以继续往下走。\n客户端会生成一个随机数作为客户端椭圆曲线的私钥，然后再根据服务端前面给的信息，生成客户端的椭圆曲线公钥，然后用「Client Key Exchange」消息发给服务端。至此，双方都有对方的椭圆曲线公钥、自己的椭圆曲线私钥、椭圆曲线基点G.")]),v._v(" "),t("p",[v._v("最终的会话密钥，就是用「客户端随机数＋服务端随机数＋x(ECDHE算法算出的共享密钥)」三个材料生成的。")]),v._v(" "),t("p",[v._v("算好会话密钥后，客户端会发一个「Change Cipher Spec」消息，告诉服务端后续改用对称算法加密通信。")]),v._v(" "),t("p",[v._v("接着，客户端会发「Encrypted Handshake Message」消息，把之前发送的数据做一个摘要，再用对称密钥加密一下，让服务端做个验证，验证下本次生成的对称密钥是否可以正常使用。")]),v._v(" "),t("p",[t("strong",[v._v("TLS第四次握手")]),v._v("：最后，服务端也会有一个同样的操作，发「Change Cipher Spec」和「Enerypted Handshake Message」消息，如果双方都验证加密和解密没问题，那么握手正式完成。于是，就可以正常收发加密的HTTP请求和响应了。")]),v._v(" "),t("h3",{attrs:{id:"rsa和ecdhe握手过程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rsa和ecdhe握手过程的区别"}},[v._v("#")]),v._v(" RSA和ECDHE握手过程的区别")]),v._v(" "),t("ul",[t("li",[v._v("RSA密钥协商算法「不支持」前向保密，ECDHE密钥协商算法「支持」前向保密;")]),v._v(" "),t("li",[v._v("使用了RSA密钥协商算法，TLS完成四次握手后，才能进行应用数据传输，而对于ECDHE算法，客户端可以不用等服务端的最后一次TLS握手，就可以提前发出加密的HTTP数据，节省了一个消息的往返时间；")]),v._v(" "),t("li",[v._v("使用ECDHE，在TLS第⒉次握手中，会出现服务器端发出的「Server Key Exchange」消息，而RSA握手过程没有该消息;")])]),v._v(" "),t("h3",{attrs:{id:"非对称加密之公钥加密与私钥加密的应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非对称加密之公钥加密与私钥加密的应用场景"}},[v._v("#")]),v._v(" 非对称加密之公钥加密与私钥加密的应用场景")]),v._v(" "),t("p",[t("strong",[v._v("公钥和私钥都可用于加密和解密")])]),v._v(" "),t("p",[v._v("公钥和私钥都可以用于加解密操作，用公钥加密的数据只能由对应的私钥解密，反之亦然。虽说两者都可用于加密，但是不同场景使用不同的密钥来加密，规则如下：")]),v._v(" "),t("p",[v._v("1、私钥用于签名、公钥用于验签")]),v._v(" "),t("p",[v._v("签名和加密作用不同，签名并不是为了保密，而是为了保证这个签名是由特定的某个人签名的，而不是被其它人伪造的签名，所以私钥的私有性就适合用在签名用途上。私钥签名后，只能由对应的公钥解密，公钥又是公开的（很多人可持有），所以这些人拿着公钥来解密，解密成功后就能判断出是持有私钥的人做的签名，验证了身份合法性。如区块链上每个节点都需要处理其中一个节点发起的交易，发起交易的这个节点通过自己的私钥给交易数据加密，其他节点可以通过它的公钥进行解密，然后处理交易。")]),v._v(" "),t("p",[v._v("2、公钥用于加密、私钥用于解密，这才能起到加密作用")]),v._v(" "),t("p",[v._v("因为公钥是公开的，很多人可以持有公钥。若用私钥加密，那所有持有公钥的人都可以进行解密，这是不安全的！若用公钥加密，那只能由私钥解密，而私钥是私有不公开的，只能由特定的私钥持有人解密，保证的数据的安全性。")])])}),[],!1,null,null,null);_.default=s.exports}}]);