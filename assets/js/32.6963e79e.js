(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{313:function(e,v,_){"use strict";_.r(v);var t=_(4),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"spring"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[e._v("#")]),e._v(" Spring")]),e._v(" "),_("p",[e._v("最近回过神来，觉得是时候开始对学习已经的Spring框架，进行源码级别的解读，其一是加强自己对知识点的把握，其二是为了预防自己后面又遗忘/(ㄒoㄒ)/~~。")]),e._v(" "),_("p",[e._v("本文将从最基本的概念出发，辅助常见常考的面试题，来阐述Spring框架的思想以及应用点。")]),e._v(" "),_("blockquote",[_("p",[e._v("文章内容仅是我个人的小总结，资历尚浅，如有误还请指正。")])]),e._v(" "),_("h2",{attrs:{id:"ioc-的认识"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ioc-的认识"}},[e._v("#")]),e._v(" IOC 的认识")]),e._v(" "),_("p",[e._v("IOC：也即控制反转，DI即依赖注入，控制反转IOC和依赖注入DI其实就是同个概念的两个不同角度的解释。  控制反转可以理解为获取依赖对象的控制反转过来。")]),e._v(" "),_("p",[_("strong",[e._v("通过IOC容器实现的，由IOC容器负责创建和获取依赖对象，对象只是被动地接受依赖对象，从而实现更好的解耦。")])]),e._v(" "),_("p",[e._v("IOC 的初始化过程如下：")]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/img/spring-1.jpg",alt:"spring-1.jpg"}})]),e._v(" "),_("p",[e._v("实现IOC主要有三种方法：")]),e._v(" "),_("ul",[_("li",[e._v("XML配置方式")]),e._v(" "),_("li",[e._v("注解方式")]),e._v(" "),_("li",[e._v("自动装配方式\n"),_("ul",[_("li",[e._v("组件扫描（"),_("code",[e._v("component scanning")]),e._v("）:Spring会自动发现应用上下文中所创建的bean")]),e._v(" "),_("li",[e._v("自动装配（"),_("code",[e._v("autowiring")]),e._v("）：Spring自动满足bean之间的依赖")])])])]),e._v(" "),_("p",[e._v("装配注解主要有：@Autowired、@Qualifier、@Resource，它们的特点是：")]),e._v(" "),_("ul",[_("li",[e._v("@"),_("code",[e._v("Resource")]),e._v("默认是按照名称来装配注入的，只有当找不到与名称匹配的bean才会按照类型来装配注入；")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Autowired")]),e._v("默认是按照类型装配注入的，如果想按照名称来转配注入，则需要结合@"),_("code",[e._v("Qualifier")]),e._v("一起使用；")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Resource")]),e._v("注解是又J2EE提供，而@"),_("code",[e._v("Autowired")]),e._v("是由spring提供，故减少系统对spring的依赖建议使用@"),_("code",[e._v("Resource")]),e._v("的方式；如果Maven项目是1.5的JRE则需换成更高版本的。")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Resource")]),e._v("和@"),_("code",[e._v("Autowired")]),e._v("都可以书写注解在字段或者该字段的setter方法之上")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Autowired")]),e._v(" 可以对成员变量、方法以及构造函数进行注释，而 @"),_("code",[e._v("Qualifier")]),e._v(" 的注解对象是成员变量、方法入参、构造函数入参。")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Qualifier")]),e._v("(“XXX”) 中的 XX是 Bean 的名称，所以 @"),_("code",[e._v("Autowired")]),e._v(" 和 @"),_("code",[e._v("Qualifier")]),e._v(" 结合使用时，自动注入的策略就从 "),_("code",[e._v("byType")]),e._v(" 转变成 "),_("code",[e._v("byName")]),e._v(" 了。")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Autowired")]),e._v(" 注释进行自动注入时，Spring 容器中匹配的候选 Bean 数目必须有且仅有一个，通过属性required可以设置非必要。")]),e._v(" "),_("li",[e._v("@"),_("code",[e._v("Resource")]),e._v("装配顺序\n"),_("ul",[_("li",[e._v("如果同时指定了"),_("code",[e._v("name")]),e._v("和"),_("code",[e._v("type")]),e._v("，则从Spring上下文中找到唯一匹配的bean进行装配，找不到则抛出异常")]),e._v(" "),_("li",[e._v("如果指定了"),_("code",[e._v("name")]),e._v("，则从上下文中查找名称（id）匹配的bean进行装配，找不到则抛出异常")]),e._v(" "),_("li",[e._v("如果指定了"),_("code",[e._v("type")]),e._v("，则从上下文中找到类型匹配的唯一bean进行装配，找不到或者找到多个，都会抛出异常")]),e._v(" "),_("li",[e._v("如果既没有指定name，又没有指定type，则自动按照"),_("code",[e._v("byName")]),e._v("方式进行装配；如果没有匹配，则回退为一个原始类型进行匹配，如果匹配则自动装配")])])])]),e._v(" "),_("h2",{attrs:{id:"aop的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#aop的理解"}},[e._v("#")]),e._v(" AOP的理解")]),e._v(" "),_("p",[e._v("含义：")]),e._v(" "),_("ul",[_("li",[e._v("面向切面编程，基本单位为Aspect(切面)： 它既包含了横切逻辑的定义, 也包括了连接点的定义，")]),e._v(" "),_("li",[e._v("即将切面所定义的横切逻辑织入到切面所指定的连接点中")]),e._v(" "),_("li",[e._v("point cut 规定了哪些 join point 可以执行哪些 advice")]),e._v(" "),_("li",[e._v("advice 是在 join point 上执行的")]),e._v(" "),_("li",[e._v("aspect: aspect 是 point cut 与 advice 的组合")]),e._v(" "),_("li",[e._v("一个类被 AOP 织入 advice, 就会产生一个结果类AOP proxy( JDK 动态代理对象或 CGLIB 代理对象)")])]),e._v(" "),_("p",[e._v("Spring AOP中的动态代理主要有两种方式，JDK动态代理和CGLIB动态代理。")]),e._v(" "),_("ul",[_("li",[e._v("JDK动态代理通过反射来接收被代理的类，并且要求被代理的类必须实现一个接口。JDK动态代理的核心是"),_("code",[e._v("InvocationHandler")]),e._v("接口和"),_("code",[e._v("Proxy")]),e._v("类。")]),e._v(" "),_("li",[e._v("如果目标类没有实现接口，那么Spring AOP会选择使用CGLIB来动态代理目标类。CGLIB（Code Generation Library），是一个代码生成的类库，可以在运行时动态的生成某个类的子类。")])]),e._v(" "),_("p",[_("strong",[e._v("注意，CGLIB是通过继承的方式做的动态代理，因此如果某个类被标记为final，那么它是无法使用CGLIB做动态代理的。")])]),e._v(" "),_("h2",{attrs:{id:"bean获取方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bean获取方式"}},[e._v("#")]),e._v(" Bean获取方式")]),e._v(" "),_("p",[e._v("主要与如下两个对象有关：")]),e._v(" "),_("ul",[_("li",[_("p",[_("code",[e._v("BeanFactory")]),e._v(" 管理不同类型的Java对象 IOC容器 在初始化容器时，并未实例化Bean")])]),e._v(" "),_("li",[_("p",[_("code",[e._v("ApplicationContext")]),e._v(" 应用上下文 提供了国际化支持和框架事件体系 在初始化应用上下文时就实例化所有单实例的Bean")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("使用"),_("code",[e._v("BeanFactory")]),e._v("直接获取（不推荐）")])]),e._v(" "),_("li",[_("p",[e._v("在初始化时保存"),_("code",[e._v("ApplicationContext")])])]),e._v(" "),_("li",[_("p",[e._v("对象继承自抽象类"),_("code",[e._v("ApplicationObjectSupport")])])]),e._v(" "),_("li",[_("p",[e._v("继承自抽象类"),_("code",[e._v("WebApplicationObjectSupport")])])]),e._v(" "),_("li",[_("p",[e._v("使用Spring提供的工具类"),_("code",[e._v("WebApplicationContextUtils")])])]),e._v(" "),_("li",[_("p",[e._v("实现"),_("code",[e._v("ApplicationContextAware")]),e._v("接口")])]),e._v(" "),_("li",[_("p",[e._v("使用"),_("code",[e._v("ContextLoader")]),e._v("提供的"),_("code",[e._v("getCurrentWebApplicationContext")]),e._v("方法")])])])])]),e._v(" "),_("h2",{attrs:{id:"bean生命周期"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bean生命周期"}},[e._v("#")]),e._v(" Bean生命周期")]),e._v(" "),_("p",[e._v("Bean的生命周期：")]),e._v(" "),_("p",[e._v("实例化 -> 属性赋值 -> 初始化 -> 销毁")]),e._v(" "),_("p",[e._v("构造方法和setter方法的注入")]),e._v(" "),_("p",[e._v("主要逻辑"),_("code",[e._v("doCreate()")]),e._v("方法")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("createBeanInstance()")]),e._v(" -> 实例化 、"),_("code",[e._v("populateBean()")]),e._v(" -> 属性赋值、"),_("code",[e._v("initializeBean()")]),e._v(" -> 初始化")]),e._v(" "),_("li",[_("code",[e._v("InstantiationAwareBeanPostProcessor")]),e._v(" 作用于实例化阶段的前后\n"),_("ul",[_("li",[_("code",[e._v("postProcessBeforeInstantion")])]),e._v(" "),_("li",[_("code",[e._v("postProcessAfterInstatantion")])])])]),e._v(" "),_("li",[_("code",[e._v("BeanPostProcessor")]),e._v(" 作用于初始化阶段的前后\n"),_("ul",[_("li",[_("code",[e._v("postProcessBeforeInitialization")])]),e._v(" "),_("li",[_("code",[e._v("postProcessAfterIntitalization")])])])]),e._v(" "),_("li",[e._v("Aware类型的接口：获得Spring容器中的一些资源->初始化阶段之前调用\n"),_("ul",[_("li",[_("code",[e._v("BeanNameAware")]),e._v("、"),_("code",[e._v("BeanClassLoaderAware")]),e._v("、"),_("code",[e._v("BeanFactoryAware")])]),e._v(" "),_("li",[_("code",[e._v("EnvironmentAware")]),e._v("、"),_("code",[e._v("EmbeddedValueResolverAware")]),e._v("、"),_("code",[e._v("ApplicationContextAware")]),e._v("("),_("code",[e._v("ResourceLoaderAware")]),e._v("、"),_("code",[e._v("ApplicationEventPublisherAware")]),e._v("、"),_("code",[e._v("MessageSourceAware")]),e._v(")")])])]),e._v(" "),_("li",[e._v("生命周期接口：\n"),_("ul",[_("li",[_("code",[e._v("InitializingBean")]),e._v(" 对应生命周期的初始化阶段")]),e._v(" "),_("li",[_("code",[e._v("DisposableBean")]),e._v(" 类似于"),_("code",[e._v("InitializingBean")]),e._v("，对应生命周期的销毁阶段")])])]),e._v(" "),_("li",[_("code",[e._v("BeanPostProcessor")]),e._v("的注册时机\n"),_("ul",[_("li",[e._v("优先级："),_("code",[e._v("PriorityOrdered")]),e._v("、"),_("code",[e._v("Ordered")])])])])]),e._v(" "),_("h2",{attrs:{id:"bean的循环依赖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bean的循环依赖"}},[e._v("#")]),e._v(" Bean的循环依赖")]),e._v(" "),_("p",[e._v("循环依赖：说白是一个或多个对象实例之间存在直接或间接的依赖关系，这种依赖关系构成了构成一个环形调用。")]),e._v(" "),_("div",{staticClass:"language-java line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-java"}},[_("code",[_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//TestService1.class")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Service")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TestService1")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n    "),_("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Autowired")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TestService2")]),e._v(" testService2"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("test1")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//TestService2.class")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Service")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TestService2")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n    "),_("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[e._v("@Autowired")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TestService1")]),e._v(" testService1"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token function"}},[e._v("test2")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[e._v("1")]),_("br"),_("span",{staticClass:"line-number"},[e._v("2")]),_("br"),_("span",{staticClass:"line-number"},[e._v("3")]),_("br"),_("span",{staticClass:"line-number"},[e._v("4")]),_("br"),_("span",{staticClass:"line-number"},[e._v("5")]),_("br"),_("span",{staticClass:"line-number"},[e._v("6")]),_("br"),_("span",{staticClass:"line-number"},[e._v("7")]),_("br"),_("span",{staticClass:"line-number"},[e._v("8")]),_("br"),_("span",{staticClass:"line-number"},[e._v("9")]),_("br"),_("span",{staticClass:"line-number"},[e._v("10")]),_("br"),_("span",{staticClass:"line-number"},[e._v("11")]),_("br"),_("span",{staticClass:"line-number"},[e._v("12")]),_("br"),_("span",{staticClass:"line-number"},[e._v("13")]),_("br"),_("span",{staticClass:"line-number"},[e._v("14")]),_("br"),_("span",{staticClass:"line-number"},[e._v("15")]),_("br"),_("span",{staticClass:"line-number"},[e._v("16")]),_("br"),_("span",{staticClass:"line-number"},[e._v("17")]),_("br"),_("span",{staticClass:"line-number"},[e._v("18")]),_("br"),_("span",{staticClass:"line-number"},[e._v("19")]),_("br"),_("span",{staticClass:"line-number"},[e._v("20")]),_("br")])]),_("p",[e._v("常见的循环依赖场景如下：")]),e._v(" "),_("p",[_("strong",[e._v("单例的setter注入")])]),e._v(" "),_("p",[e._v("这是一个经典的循环依赖，但是它能正常运行，得益于spring的内部机制，让我们根本无法感知它有问题，因为spring默默帮我们解决了。")]),e._v(" "),_("p",[_("strong",[e._v("Spring为了解决单例的循环依赖问题，使用了三级缓存。")])]),e._v(" "),_("p",[e._v("spring内部有三级缓存：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("singletonObjects")]),e._v(" 一级缓存，用于保存实例化、注入、初始化完成的bean实例")]),e._v(" "),_("li",[_("code",[e._v("earlySingletonObjects")]),e._v(" 二级缓存，用于保存实例化完成的bean实例")]),e._v(" "),_("li",[_("code",[e._v("singletonFactories")]),e._v(" 三级缓存，用于保存bean创建工厂，以便于后面扩展有机会创建代理对象。")])]),e._v(" "),_("p",[e._v("下面用一张图告诉你，spring是如何解决循环依赖的：")]),e._v(" "),_("p",[_("img",{attrs:{src:"/assets/img/spring-2.jpg",alt:"spring-2.jpg"}})]),e._v(" "),_("p",[e._v("步骤如下：")]),e._v(" "),_("ul",[_("li",[e._v("Spring首先从一级缓存"),_("code",[e._v("singletonObjects")]),e._v("中获取。")]),e._v(" "),_("li",[e._v("如果获取不到，并且对象正在创建中，就再从二级缓存"),_("code",[e._v("earlySingletonObjects")]),e._v("中获取。")]),e._v(" "),_("li",[e._v("如果还是获取不到且允许"),_("code",[e._v("singletonFactories")]),e._v("通过getObject()获取，就从三级缓存"),_("code",[e._v("singletonFactory.getObject()")]),e._v("(三级缓存)获取.")]),e._v(" "),_("li",[e._v("如果从三级缓存中获取到就从"),_("code",[e._v("singletonFactories")]),e._v("中移除，并放入"),_("code",[e._v("earlySingletonObjects")]),e._v("中。其实也就是从三级缓存移动到了二级缓存。")])]),e._v(" "),_("p",[e._v("该提前暴露的核心是："),_("strong",[e._v("spring创造了一个 循环依赖的结束点标识")]),e._v("。")]),e._v(" "),_("p",[_("strong",[e._v("注")]),e._v("：从第三级缓存中获取实例，而第三级缓存里保存的并非真正的实例对象，而是"),_("code",[e._v("ObjectFactory")]),e._v("对象。说白了，两次从三级缓存中获取都是"),_("code",[e._v("ObjectFactory")]),e._v("对象，而通过它创建的实例对象每次可能都不一样的。而第三级缓存的目的是保证对实例对象进行增强。")]),e._v(" "),_("p",[e._v("在"),_("code",[e._v("AbstractAutowireCapableBeanFactory")]),e._v("类的"),_("code",[e._v("doCreateBean")]),e._v("中")]),e._v(" "),_("p",[e._v("通过定义了一个匿名内部类，通过"),_("code",[e._v("getEarlyBeanReference")]),e._v("方法获取代理对象，其实底层是通过"),_("code",[e._v("AbstractAutoProxyCreator")]),e._v("类的"),_("code",[e._v("getEarlyBeanReference")]),e._v("生成代理对象。")]),e._v(" "),_("p",[e._v("对于"),_("code",[e._v("SCOPE_PROTOTYPE")]),e._v("类型的类，其不会被提前初始化bean，所以程序能够正常启动。因为它没有用缓存，每次都会生成一个新对象。")]),e._v(" "),_("p",[e._v("构造器注入没能添加到三级缓存，也没有使用缓存，所以也无法解决循环依赖问题。")]),e._v(" "),_("p",[e._v("对于单例的代理对象setter注入时，在bean初始化完成之后，后面还有一步去检查：第二级缓存 和 原始对象 是否相等，因此无法解决。")]),e._v(" "),_("p",[e._v("解决方案：")]),e._v(" "),_("p",[_("strong",[e._v("生成代理对象产生的循环依赖")])]),e._v(" "),_("p",[e._v("这类循环依赖问题解决方法很多，主要有：")]),e._v(" "),_("ol",[_("li",[e._v("使用"),_("code",[e._v("@Lazy")]),e._v("注解，延迟加载")]),e._v(" "),_("li",[e._v("使用"),_("code",[e._v("@DependsOn")]),e._v("注解，指定加载先后关系")]),e._v(" "),_("li",[e._v("修改文件名称，改变循环依赖类的加载顺序")])]),e._v(" "),_("p",[_("strong",[e._v("使用@DependsOn产生的循环依赖")])]),e._v(" "),_("p",[e._v("这类循环依赖问题要找到"),_("code",[e._v("@DependsOn")]),e._v("注解循环依赖的地方，迫使它不循环依赖就可以解决问题。")]),e._v(" "),_("p",[_("strong",[e._v("多例循环依赖")])]),e._v(" "),_("p",[e._v("这类循环依赖问题可以通过把bean改成单例的解决。")]),e._v(" "),_("p",[_("strong",[e._v("构造器循环依赖")])]),e._v(" "),_("p",[e._v("这类循环依赖问题可以通过使用"),_("code",[e._v("@Lazy")]),e._v("注解解决。")]),e._v(" "),_("h2",{attrs:{id:"mvc工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mvc工作原理"}},[e._v("#")]),e._v(" MVC工作原理")]),e._v(" "),_("p",[_("code",[e._v("SpringMVC")]),e._v(" 工作原理：")]),e._v(" "),_("ol",[_("li",[e._v("客户端（浏览器）发送请求，直接请求到 "),_("code",[e._v("DispatcherServlet")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("DispatcherServlet")]),e._v(" 根据请求信息调用 "),_("code",[e._v("HandlerMapping")]),e._v("，解析请求对应的 "),_("code",[e._v("Handler")]),e._v("。")]),e._v(" "),_("li",[e._v("解析到对应的 "),_("code",[e._v("Handler")]),e._v("（也就是我们平常说的 "),_("code",[e._v("Controller")]),e._v(" 控制器）后，开始由 "),_("code",[e._v("HandlerAdapter")]),e._v(" 适配器处理。")]),e._v(" "),_("li",[_("code",[e._v("HandlerAdapter")]),e._v(" 会根据 "),_("code",[e._v("Handler")]),e._v(" 来调用真正的处理器来处理请求，并处理相应的业务逻辑。")]),e._v(" "),_("li",[e._v("处理器处理完业务后，会返回一个 "),_("code",[e._v("ModelAndView")]),e._v(" 对象，Model 是返回的数据对象，"),_("code",[e._v("View")]),e._v(" 是个逻辑上的 "),_("code",[e._v("View")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("ViewResolver")]),e._v(" 会根据逻辑 "),_("code",[e._v("View")]),e._v(" 查找实际的 "),_("code",[e._v("View")]),e._v("。")]),e._v(" "),_("li",[_("code",[e._v("DispaterServlet")]),e._v(" 把返回的 "),_("code",[e._v("Model")]),e._v(" 传给 View（视图渲染）。")]),e._v(" "),_("li",[e._v("把 "),_("code",[e._v("View")]),e._v(" 返回给请求者（浏览器）")])])])}),[],!1,null,null,null);v.default=a.exports}}]);