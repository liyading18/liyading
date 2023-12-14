import{_ as n,o as l,c as e,a,Q as s}from"./chunks/framework.bed04040.js";const p="/liyading/assets/tag01.a2d55c92.png",o="/liyading/assets/tag02.bbc1856d.png",t="/liyading/assets/tag03.cc95b1f7.png",c="/liyading/assets/tag04.5e33bac9.png",i="/liyading/assets/tag05.d86a09ca.png",r="/liyading/assets/tag06.56e01ab3.png",d="/liyading/assets/tag07.ee8bcb84.png",g="/liyading/assets/tag08.b598308f.png",u="/liyading/assets/tag09.d1214923.png",w=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/study/git/gitTag.md","filePath":"blogs/study/git/gitTag.md"}'),b={name:"blogs/study/git/gitTag.md"},y=s(`<h2 id="git-tag-操作" tabindex="-1">git tag 操作 <a class="header-anchor" href="#git-tag-操作" aria-label="Permalink to &quot;git tag 操作&quot;">​</a></h2><h3 id="git-tag的基本用法" tabindex="-1"><code>git tag</code>的基本用法 <a class="header-anchor" href="#git-tag的基本用法" aria-label="Permalink to &quot;\`git tag\`的基本用法&quot;">​</a></h3><ul><li>查看本地分支标签</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git tag </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">l</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git tag </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">list</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git tag </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">l</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git tag </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>查看远程所有标签</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git ls</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">remote </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tags</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git ls</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">remote </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tag</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git ls</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">remote </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tags</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git ls</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">remote </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tag</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>给当前分支打标签</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag {标签名}</span></span>
<span class="line"><span style="color:#E1E4E8;">例如： git tag v1.</span><span style="color:#79B8FF;">1.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag {标签名}</span></span>
<span class="line"><span style="color:#24292E;">例如： git tag v1.</span><span style="color:#005CC5;">1.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>给特定的某个<code>commit</code>版本打标签，比如现在某次提交的<code>id</code>为039bf8b</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag v1.</span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;"> 039bf8b</span></span>
<span class="line"><span style="color:#E1E4E8;">或者可以添加注释</span></span>
<span class="line"><span style="color:#E1E4E8;">git tag v1.</span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;add tags information&quot;</span><span style="color:#E1E4E8;"> 039bf8b</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git tag v1.</span><span style="color:#79B8FF;">0.0</span><span style="color:#E1E4E8;"> 039bf8b </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;add tags information&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag v1.</span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;"> 039bf8b</span></span>
<span class="line"><span style="color:#24292E;">或者可以添加注释</span></span>
<span class="line"><span style="color:#24292E;">git tag v1.</span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;add tags information&quot;</span><span style="color:#24292E;"> 039bf8b</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git tag v1.</span><span style="color:#005CC5;">0.0</span><span style="color:#24292E;"> 039bf8b </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;add tags information&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>删除本地某个标签</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag </span><span style="color:#F97583;">--delete</span><span style="color:#E1E4E8;"> v1.</span><span style="color:#79B8FF;">0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git tag </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d v1.</span><span style="color:#79B8FF;">0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git tag </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">d v1.</span><span style="color:#79B8FF;">0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag </span><span style="color:#D73A49;">--delete</span><span style="color:#24292E;"> v1.</span><span style="color:#005CC5;">0.0</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git tag </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d v1.</span><span style="color:#005CC5;">0.0</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git tag </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">d v1.</span><span style="color:#005CC5;">0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>删除远程的某个标签</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git push </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d origin v1.</span><span style="color:#79B8FF;">0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push </span><span style="color:#F97583;">--delete</span><span style="color:#E1E4E8;"> origin v1.</span><span style="color:#79B8FF;">0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push origin </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">d v1.</span><span style="color:#79B8FF;">0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push origin </span><span style="color:#F97583;">--delete</span><span style="color:#E1E4E8;"> v1.</span><span style="color:#79B8FF;">0.0</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push </span><span style="color:#B392F0;">origin</span><span style="color:#E1E4E8;"> :v1.</span><span style="color:#79B8FF;">0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git push </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d origin v1.</span><span style="color:#005CC5;">0.0</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push </span><span style="color:#D73A49;">--delete</span><span style="color:#24292E;"> origin v1.</span><span style="color:#005CC5;">0.0</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push origin </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">d v1.</span><span style="color:#005CC5;">0.0</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push origin </span><span style="color:#D73A49;">--delete</span><span style="color:#24292E;"> v1.</span><span style="color:#005CC5;">0.0</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push </span><span style="color:#6F42C1;">origin</span><span style="color:#24292E;"> :v1.</span><span style="color:#005CC5;">0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>将本地标签一次性推送到远程</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git push origin </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tags</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push origin </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tag</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tags</span></span>
<span class="line"><span style="color:#E1E4E8;">或者</span></span>
<span class="line"><span style="color:#E1E4E8;">git push </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tag</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git push origin </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tags</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push origin </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tag</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tags</span></span>
<span class="line"><span style="color:#24292E;">或者</span></span>
<span class="line"><span style="color:#24292E;">git push </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tag</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>将本地某个特定标签推送到远程</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git push origin v1.</span><span style="color:#79B8FF;">0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git push origin v1.</span><span style="color:#005CC5;">0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看某一个标签的提交信息</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git show v1.</span><span style="color:#79B8FF;">0.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git show v1.</span><span style="color:#005CC5;">0.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>只要把以上几个命令熟练了，平时发布版本后想<b>打标签</b>基本可以说是手到擒来了<br></p><ul><li>根据某个<code>commit</code>创建本地分支 例如：当前分支的某个<code>commit id = 12345678</code>，我们可以基于这个<code>id</code>创建本地分支</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git checkout </span><span style="color:#79B8FF;">12345678</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b {新分支名称}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git checkout </span><span style="color:#005CC5;">12345678</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b {新分支名称}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="通过tag标签回退版本修复bug" tabindex="-1">通过<code>Tag</code>标签回退版本修复bug <a class="header-anchor" href="#通过tag标签回退版本修复bug" aria-label="Permalink to &quot;通过\`Tag\`标签回退版本修复bug&quot;">​</a></h3><h4 id="打标签" tabindex="-1">打标签 <a class="header-anchor" href="#打标签" aria-label="Permalink to &quot;打标签&quot;">​</a></h4><ol><li>新建一个文件<code>a.txt</code>，然后写</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发布版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发布版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>用一下命令来提交：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git add a.txt</span></span>
<span class="line"><span style="color:#E1E4E8;">git commit </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;第一次发布版本&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git add a.txt</span></span>
<span class="line"><span style="color:#24292E;">git commit </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;第一次发布版本&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>提交完毕，可以使用下面的命令来查看提交的日志记录：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git log</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git log</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><img src="`+p+'" style="width:450px;"><ol start="2"><li>发布版本之后就要打标签了，命令如下：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">a v1.</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;v1.0版本发布&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">a v1.</span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;v1.0版本发布&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后查看所有标签用下面命令：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><img src="'+o+'" style="width:450px;">',37),E=s('<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git show v1.</span><span style="color:#79B8FF;">0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git show v1.</span><span style="color:#005CC5;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><img src="'+t+'" style="width:550px;">',2),h=s(`<ol start="3"><li>在<code>a.txt</code>中增加一行“第二次发布版本”，然后用</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git add a.txt</span></span>
<span class="line"><span style="color:#E1E4E8;">git commit </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;第二次发布版本&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git add a.txt</span></span>
<span class="line"><span style="color:#24292E;">git commit </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;第二次发布版本&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>命令提交，但是不需要打标签</p><ol start="4"><li>在<code>a.txt</code>中再增加一行“第三次发布版本”，然后用</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git add a.txt</span></span>
<span class="line"><span style="color:#E1E4E8;">git commit </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">m </span><span style="color:#9ECBFF;">&quot;第三次发布版本&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git add a.txt</span></span>
<span class="line"><span style="color:#24292E;">git commit </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">m </span><span style="color:#032F62;">&quot;第三次发布版本&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>命令提交，也不需要打标签，这样我们就模拟了在第一次发布版本，打完标签后，我们向前继续开发，<code>a.txt</code>内容如下：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发布版本</span></span>
<span class="line"><span style="color:#e1e4e8;">第二次发布版本</span></span>
<span class="line"><span style="color:#e1e4e8;">第三次发布版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发布版本</span></span>
<span class="line"><span style="color:#24292e;">第二次发布版本</span></span>
<span class="line"><span style="color:#24292e;">第三次发布版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>用<code>git log</code>命令查看，如下图： <img src="`+c+`" style="width:600px;"></p><p><b> 到此我们就模拟完成了，这个时候发现第一次的版本有个<code>bug</code>，需要修复，下面我们来完成这个需求</b></p><h4 id="通过标签恢复代码" tabindex="-1">通过标签恢复代码 <a class="header-anchor" href="#通过标签恢复代码" aria-label="Permalink to &quot;通过标签恢复代码&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">试验总结</p><p>经本人实操，总结出方式1、方式2，两种方式效果相同，均可实现版本回退<br><b>方式1：</b>从主干分支切出一个新分支，查看标签详情，实现版本回退，然后将新分支合并到主干分支上<br><b>方式2：</b>在主干分支上查看标签详情，版本回退，马上切出新分支；紧接着切回主干分支，撤销版本回退；在新分支上修复bug，将新分支合并到主干分支上<br> 因两种方式只是部分顺序不同，效果一样，下文将以<b>方式2</b>进行展开讲述</p></div><ol start="5"><li>查看标签的详情，找出打标签的那次提交的<code>commit id</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git tag</span></span>
<span class="line"><span style="color:#E1E4E8;">git show v1.</span><span style="color:#79B8FF;">0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git tag</span></span>
<span class="line"><span style="color:#24292E;">git show v1.</span><span style="color:#005CC5;">0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><img src="`+i+'" style="width:600px;"><p><code>commit id</code> 这么长记不住怎么办呢？别担心，我们只需要记住前面几位就可以了，这里我们只取前6位：7441b8。Git会根据前面几位自动识别的，当然，你的commit id跟我的肯定是不一样的。</p><ol start="6"><li>版本回退 下面我们就通过<code>commit id</code>回到发版本时候的代码去喽:</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git reset </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">hard 7441b8</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git reset </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">hard 7441b8</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>注意把7441b8换成你的<code>commid id</code>。回退完毕，再看a.txt:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果有乱码的话，改成以UTF-8无BOM格式编码。看到没，我们又回到了第一次发版本时候的代码，是不是有点小激动啊<br> 如果这个时候你立马投入与<code>bug</code>的战斗，修改后发版本，那么你就犯了严重的错误，因为你修改后的代码是无法与正在开发的版本合并哒，也就是说你的修改并不能加入现有的代码。所以:</p><div class="tip custom-block"><p class="custom-block-title">特别注意</p><p>通过标签回退版本后，要马上拉一个分支，然后当前主干分支要立即回到原来的位置，否则正在开发的代码可能白干了，接着在刚拉的分支上修改bug，修改完毕合并到主干上</p></div><ol start="7"><li>切新分支 回退版本后，立即切出新分支，这里取名<code>bugfix</code>分支：</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git checkout </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">b bugfix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git checkout </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">b bugfix</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如图所示，我们已经在<code>bugfix</code>分支上了： <img src="'+r+'" style="width:450px;"></p><ol start="8"><li>主干分支立即回到原来的位置 首先，请先回到主干分支上：</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git checkout master</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git checkout master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>回退版本需要<code>commit id</code>，向前进呢，同样也是的。还记得我在第三次提交完毕后，用<code>git log</code>命令查看提交记录吗，现在我们需要第三次提交的<code>commit id</code>，再用<code>git log</code>命令： <img src="'+d+'" style="width:450px;"></p><p>可以看到只有第一次的提交记录了，因为这个时候版本回退了<code>git log</code>是查不到第三次提交记录的，怎么办呢，怎么才能回去呢？<br></p><p>别急，这个时候，我们用下面这个命令：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git reflog</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git reflog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><img src="'+g+`" style="width:450px;"><p>看到了吗，你所有的操作记录都在这儿，这就是git，记录操作。可以看到第三次的<code>commit id</code>是 7358a51。回去喽：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git reset </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">hard 7358a51</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git reset </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">hard 7358a51</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再看a.txt:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">第二次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">第三次发版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发版本</span></span>
<span class="line"><span style="color:#24292e;">第二次发版本</span></span>
<span class="line"><span style="color:#24292e;">第三次发版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>回到最新的版本啦</p><ol start="9"><li>切换到bugfix分支，修改bug</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git checkout bugfix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git checkout bugfix</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这时<code>a.txt</code>只有一行文字，因为我们的<code>bugfix</code>分支是回退版本到第一次提交时拉取的分支，接着我们加一行”修复第一次发版本的紧急<code>bug</code>”:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">修复第一次发版本的紧急bug</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发版本</span></span>
<span class="line"><span style="color:#24292e;">修复第一次发版本的紧急bug</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>接着用命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">git add a.txt</span></span>
<span class="line"><span style="color:#e1e4e8;">git commit -m &quot;修复第一次发版本的紧急bug&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">git tag v2.0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">git add a.txt</span></span>
<span class="line"><span style="color:#24292e;">git commit -m &quot;修复第一次发版本的紧急bug&quot;</span></span>
<span class="line"><span style="color:#24292e;">git tag v2.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>提交这次修改，修改完毕，再打个标签，一般标签的版本要升一级,这样下次再出<code>bug</code>了，就直接从这儿改起，也就可以在合并后直接删除<code>bugfix</code>分支了</p><ol start="10"><li>合并到主干上 在<code>bugfix分支</code>上修复了紧急bug之后，就可以发一个新的版本，之后就要把修复后的代码合并到我们的主干上，不然下次发版本这个bug还是存在的。合并用下面的命令:</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git checkout master </span><span style="color:#6A737D;">//先切换到主干上</span></span>
<span class="line"><span style="color:#E1E4E8;">git merge bugfix    </span><span style="color:#6A737D;">//再合并修改bug的分支</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git checkout master </span><span style="color:#6A737D;">//先切换到主干上</span></span>
<span class="line"><span style="color:#24292E;">git merge bugfix    </span><span style="color:#6A737D;">//再合并修改bug的分支</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>这个时候，你可以在心里默念，神兽保佑，没有冲突。然而这并没有什么卵用，你念或不念，冲突就在那里，不多不少。 这个时候可以用<code> git status</code> 命令查看谁发生了冲突： <img src="`+u+`" style="width:550px;"></p><p>从上图可以看到两个分支都修改了<code>a.txt</code>,这个时候再来看<code>a.txt</code>:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span style="color:#e1e4e8;">第二次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">第三次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">=======</span></span>
<span class="line"><span style="color:#e1e4e8;">修复第一次发版本的紧急bug</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; bugfix</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发版本</span></span>
<span class="line"><span style="color:#24292e;">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</span></span>
<span class="line"><span style="color:#24292e;">第二次发版本</span></span>
<span class="line"><span style="color:#24292e;">第三次发版本</span></span>
<span class="line"><span style="color:#24292e;">=======</span></span>
<span class="line"><span style="color:#24292e;">修复第一次发版本的紧急bug</span></span>
<span class="line"><span style="color:#24292e;">&gt;&gt;&gt;&gt;&gt;&gt;&gt; bugfix</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其中&lt;&lt;&lt;&lt;&lt;&lt;Head到======这个是当前分支，也就是master分支的内容，从======到&gt;&gt;&gt;&gt;&gt;&gt;&gt;bugfix，是bugfix分支的内容 修改冲突很简单啦，把多余的内容去掉就可以了</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">第一次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">修复第一次发版本的紧急bug</span></span>
<span class="line"><span style="color:#e1e4e8;">第二次发版本</span></span>
<span class="line"><span style="color:#e1e4e8;">第三次发版本</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">第一次发版本</span></span>
<span class="line"><span style="color:#24292e;">修复第一次发版本的紧急bug</span></span>
<span class="line"><span style="color:#24292e;">第二次发版本</span></span>
<span class="line"><span style="color:#24292e;">第三次发版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>提交代码就解决冲突了</p><ol start="11"><li>推送标签到远程 在实际开发中我们都是关联了远程仓库的，在提交完代码后我们一般用<code>git push</code>将代码推送到远程仓库中，但是<code>git push</code>命令是不会推送标签的，这点一定要注意</li></ol><blockquote><p>标签必须手动推送到远程仓库</p></blockquote><p>可以用下面的命令一次推送所有标签到远程：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">git push origin </span><span style="color:#F97583;">--</span><span style="color:#E1E4E8;">tags</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">git push origin </span><span style="color:#D73A49;">--</span><span style="color:#24292E;">tags</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>好了，到这里我们就完成了通过标签修复线上版本的紧急<code>bug</code>，这个时候你就可以删掉本地分支<code>bugfix</code>了，但是不建议你这么做，搞不好线上又出个<code>bug</code>，你就可以直接接着改啦，反正是在本地的分支</p><h4 id="tag版本回退步骤总结" tabindex="-1"><code>tag</code>版本回退步骤总结 <a class="header-anchor" href="#tag版本回退步骤总结" aria-label="Permalink to &quot;\`tag\`版本回退步骤总结&quot;">​</a></h4><ol><li>主分支回退到打标签的那次提交</li><li>拉取分支bugfix</li><li>主分支立即回到最新状态</li><li>切换到bugfix分支，修改bug，发版本，打新标签</li><li>合并bugfix分支到主干上</li><li>手动推送标签到远程</li></ol>`,58);function m(v,k,C,F,_,x){return l(),e("div",null,[y,a(" 也可以查看某个标签的详情： "),E,a(" 上面是打标签的时候写的备注，下面是标签记录的那次提交的备注，其实标签只是对某一次提交记录起了一个别名而已，不要以为通过标签一下子就能拉区代码 "),h])}const j=n(b,[["render",m]]);export{w as __pageData,j as default};
