import{_ as e,C as c,o as t,c as r,k as n,a as s,H as l,w as p,Q as o}from"./chunks/framework.bed04040.js";const i="/liyading/assets/giteeInit.337aa142.png",E="/liyading/assets/gitCommon.aa5faf38.png",y="/liyading/assets/project01.bb696586.png",u="/liyading/assets/config.00a35d6b.png",b="/liyading/assets/project04.cd540dc1.png",d="/liyading/assets/project02.454f4aab.png",F="/liyading/assets/project03.e749016c.png",m="/liyading/assets/show.3d1686f5.png",h="/liyading/assets/gitRelease.b21cff79.png",g="/liyading/assets/giteeRele.3e556601.png",bs=JSON.parse('{"title":"vitepress + gitee pages搭建自己的博客","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/study/buildBlog.md","filePath":"blogs/study/buildBlog.md"}'),_={name:"blogs/study/buildBlog.md"},q=o("",5),C={id:"_1-创建gitee工程",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_1-创建gitee工程","aria-label":'Permalink to "1. 创建<font color="#dd0000">gitee</font>工程"'},"​",-1),f=n("p",null,[n("img",{src:i,alt:"创建仓库"})],-1),D=n("h3",{id:"_2-创建完后公开仓库",tabindex:"-1"},[s("2. 创建完后公开仓库 "),n("a",{class:"header-anchor",href:"#_2-创建完后公开仓库","aria-label":'Permalink to "2. 创建完后公开仓库"'},"​")],-1),A=n("p",null,"gitee先在改了规则，新创建工程的时候只能创建为私有化仓库，创建完之后再通过管理修改仓库基本信息将仓库公开后才能使用",-1),B=o("",7),x=o("",1),k={id:"_3-3-创建docs-index-md-文件",tabindex:"-1"},S=n("a",{class:"header-anchor",href:"#_3-3-创建docs-index-md-文件","aria-label":'Permalink to "3.3 创建<font color="red">docs/index.md</font> 文件"'},"​",-1),T=o("",9),P=o("",2),j=n("img",{src:y,alt:"博客目录"},null,-1),w=n("h3",{id:"_3-添加配置文件",tabindex:"-1"},[s("3. 添加配置文件 "),n("a",{class:"header-anchor",href:"#_3-添加配置文件","aria-label":'Permalink to "3. 添加配置文件"'},"​")],-1),I=n("img",{src:u,alt:"博客目录"},null,-1),V={class:"tip custom-block"},N=n("p",{class:"custom-block-title"},"TIP",-1),L=n("br",null,null,-1),G=n("br",null,null,-1),R=n("br",null,null,-1),z=n("p",null,[n("img",{src:b,alt:"工程目录"})],-1),O={class:"warning custom-block"},W=n("p",{class:"custom-block-title"},"注意",-1),X=n("code",null,"vitepress",-1),$=n("code",null,"config.js",-1),M=o("",4),U={id:"_4-添加-vue-组件",tabindex:"-1"},Y=n("a",{class:"header-anchor",href:"#_4-添加-vue-组件","aria-label":`Permalink to "4. 添加 <font color='red'>vue</font> 组件"`},"​",-1),H=n("code",null,"docs",-1),J=n("code",null,"vue",-1),Q=n("img",{src:d,alt:"博客目录"},null,-1),K=n("h3",{id:"_5-添加静态资源",tabindex:"-1"},[s("5. 添加静态资源 "),n("a",{class:"header-anchor",href:"#_5-添加静态资源","aria-label":'Permalink to "5. 添加静态资源"'},"​")],-1),Z=n("code",null,"docs",-1),ss=n("img",{src:F,alt:"博客目录"},null,-1),ns=o("",4),as=n("code",null,"gitee",-1),ls=n("h3",{id:"_2-发布博客",tabindex:"-1"},[s("2. 发布博客 "),n("a",{class:"header-anchor",href:"#_2-发布博客","aria-label":'Permalink to "2. 发布博客"'},"​")],-1),ps=n("p",null,[s("点击服务 → Gitee Pages "),n("img",{src:h,alt:"发布效果"})],-1),os=n("img",{src:g,alt:"发布效果"},null,-1);function es(cs,ts,rs,is,Es,ys){const a=c("font");return t(),r("div",null,[q,n("h3",C,[s("1. 创建"),l(a,{color:"#dd0000"},{default:p(()=>[s("gitee")]),_:1}),s("工程 "),v]),f,D,A,l(a,{color:"#dd0000"},{default:p(()=>[s("gitee pages")]),_:1}),s("。不过"),l(a,{color:"#dd0000"},{default:p(()=>[s("gitee pages")]),_:1}),B,n("p",null,[s("修改"),l(a,{color:"#dd0000"},{default:p(()=>[s("package.json")]),_:1}),s("并添加运行脚本")]),x,n("h4",k,[s("3.3 创建"),l(a,{color:"red"},{default:p(()=>[s("docs/index.md")]),_:1}),s(" 文件 "),S]),n("p",null,[s("在工程目录下创建 "),l(a,{color:"red"},{default:p(()=>[s("docs")]),_:1}),s(" 目录，并添加 "),l(a,{color:"red"},{default:p(()=>[s("index.md")]),_:1}),s(" 文件。此时已完成vitepress工程的初始化")]),T,n("p",null,[s("博客首页为 "),l(a,{color:"red"},{default:p(()=>[s("docs/index.md")]),_:1}),s("，修改其文件内容为：")]),P,n("p",null,[s("在docs目录下创建 "),l(a,{color:"red"},{default:p(()=>[s("blogs")]),_:1}),s(" 目录，并添加如下文件 "),j]),w,n("p",null,[s("在docs目录下创建 "),l(a,{color:"red"},{default:p(()=>[s(".vitepress")]),_:1}),s(" 目录下创建 "),l(a,{color:"red"},{default:p(()=>[s("config.js")]),_:1}),s("文件 "),I]),n("div",V,[N,n("p",null,[s("我们这里在搭建工程的时候, 考虑到侧边栏和导航栏的模块化, 故将 "),l(a,{color:"red"},{default:p(()=>[s("sidebar 和 nav")]),_:1}),s(" 拆分出去了")])]),n("details",null,[n("summary",null,[l(a,{color:"blue"},{default:p(()=>[s("拆分步骤:")]),_:1})]),s(" 拆分步骤1: 在"),l(a,{color:"red"},{default:p(()=>[s(".vitepress")]),_:1}),s("文件夹下创建模块文件夹"),l(a,{color:"red"},{default:p(()=>[s("realConfig")]),_:1}),L,s(" 拆分步骤2: "),l(a,{color:"red"},{default:p(()=>[s("realConfig")]),_:1}),s("文件夹下创建对应的"),l(a,{color:"red"},{default:p(()=>[s("index.js、sidebar.js 和 nav.js文件")]),_:1}),G,s(" 拆分步骤3: "),l(a,{color:"red"},{default:p(()=>[s("config.js")]),_:1}),s("文件引入"),l(a,{color:"red"},{default:p(()=>[s("sidebar.js 和 nav.js文件")]),_:1}),R]),z,n("div",O,[W,n("p",null,[s("当拆分侧边栏和导航栏时, 在 "),l(a,{color:"blue"},{default:p(()=>[s(".vitepress")]),_:1}),s(" 文件夹下不能创建以 "),l(a,{color:"blue"},{default:p(()=>[s("config")]),_:1}),s(" 同名的文件夹, 因为 "),X,s(" 会默认把它当成 "),$,s(", 我们在这里以 "),l(a,{color:"blue"},{default:p(()=>[s("realConfig")]),_:1}),s(" 命名")])]),l(a,{color:"blue"},{default:p(()=>[s("文件内容如下👇👇👇")]),_:1}),M,n("h3",U,[s("4. 添加 "),l(a,{color:"red"},{default:p(()=>[s("vue")]),_:1}),s(" 组件 "),Y]),n("p",null,[s("在 "),H,s(" 目录下创建 "),l(a,{color:"red"},{default:p(()=>[s("components")]),_:1}),s(" 目录，"),J,s(" 组件可放在此目录 "),Q]),K,n("p",null,[s("在 "),Z,s(" 目录下创建 "),l(a,{color:"red"},{default:p(()=>[s("public")]),_:1}),s(" 目录，所有的静态资源都放在该目录下面。此时一个比较完整的vitepress博客工程搭建完成，完整的目录文件结构如下图： "),ss]),ns,n("p",null,[s("运行命令 "),l(a,{color:"red"},{default:p(()=>[s("npm run build")]),_:1}),s(" 打包，打包后的文件位于在 "),l(a,{color:"red"},{default:p(()=>[s("docs/.vitepress/dist")]),_:1}),s("。上传代码和打包资源到 "),as]),ls,ps,n("p",null,[s("选择要发布的分支，并输入部署目录"),l(a,{color:"red"},{default:p(()=>[s("docs/.vitepress/dist")]),_:1}),s('，点击”启动” 或 "更新" 按钮开启。 '),os])])}const ds=e(_,[["render",es]]);export{bs as __pageData,ds as default};
