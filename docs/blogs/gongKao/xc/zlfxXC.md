# 第二部分 资料分析

## 第一节 统计术语

### 术语一、`基期量`与`现期量`
资料分析题中，<b>作为对比参照的具体数值</b>称为基期量，<b>相对于基期量的数值</b>称为现期量
> 常用的表达方式为：与A相比，B……；B比A……<br />
> 这里A是对比参照的具体量，<font color=red>故A为基期量，B为现期量</font>

:::tip 术语总结
+ <b><font color=blue>时间型：</font>时间靠后的为现期，时间靠前的为基期</b><br />
    【例】2023年我比2022年胖了 →（2023年为现期，2022年为基期）
+ <b><font color=blue>对象型：</font>“比”字后面的为基期</b><br />
    【例】我比你更英俊潇洒 →（我为现期，你为基期）
:::
:::tip 必背公式
1. <font color=red>基期量 = 现期量 - 增长量</font>
2. <font color=red>基期量 = 现期量 / 1+r</font>（r为增长率）
3. <font color=red>基期量 = 现期量 / 1+r</font>（r为间隔增长率）
:::
:::info 常用方法
1. 当增长率`r`较大时，采用<font color=red>截位直除法</font>
2. 当增长率`r`特别小时（<font color=red>|r|≤ 5%</font>），<b><font color=red>化除为乘</font></b><br />
<b><font color=red>基期量 = 现期量/(1+r) ≈ 现期量 x (1-r)</font></b><br />
<b><font color=red>基期量 = 现期量/(1-r) ≈ 现期量 x (1+r)</font></b>
:::

#### 速算技巧 —— 化除为乘
<b><span style="background:#000;color:#fff;">&nbsp;应用环境：</span> |r| < 5%，<font color=blue>基期 = 现期 ± 现期 × r</font></b><br />
:::tip 化除为乘，两步走
1. <b>看加减</b>
2. <b>算差距（现期 × r）</b>
:::
<img src="/image/blogs/study/gongKao/zlfx/zlfx01.png" style="width: 500px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx02.png" style="width: 500px;" /><br />

:::info 化除为乘 —— 分析选项法
<img src="/image/blogs/study/gongKao/zlfx/zlfx09.png" style="width: 550px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx10.png" style="width: 550px;" />

`注解：` 这里利用<b>差值 = 现期 x 增长率</b>估算增长量 
<img src="/image/blogs/study/gongKao/zlfx/zlfx11.png" />
:::

#### 速算技巧 —— 基期差值
`方法：` 优先“分析”（以坑治坑）→ <b>上去干掉“现期差”，分析“正负”或“变化”</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx03.png" style="width: 600px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx04.png" style="width: 600px;" />
`方法：` <b>分析不出，“算一半”再分析</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx05.png" style="width: 350px;" />
:::tip 必背公式
1. <b><u>增长量不变</u></b><br />
<b><font color=red>现期量 = 基期量 + 增长量 × n</font>（n为年份差，即 n=末期-初期）</b>
2. <b><u>增长率不变</u></b><br />
<b><font color=red>现期量 = 基期量 × （1+r）ⁿ</font>（n为年份差，即 n=末期-初期）</b>
3. <b><u>初期和末期的选择</u></b><br />
xxxx年 —— xxxx年这n年，<b><font color=red>初期往前推一年</font>，末期不变</b>；<br />
五年计划<b><font color=red>初期往前推一年</font>。</b>
:::

#### 速算技巧 —— 特殊数字（部分）
1. <font color=blue>一个数 × 1.5 = <b>本身 + 本身的一半</b></font><br />
    86.4 × 1.5 = 86.4 + 43.2 = 129.6
2. <font color=blue>一个数 × 1.1 = <b>错位相加</b></font><br />
<img src="/image/blogs/study/gongKao/zlfx/zlfx07.png" style="width: 200px;" />

3. <font color=blue>一个数 × 0.9 = <b>错位相减</b></font><br />
<img src="/image/blogs/study/gongKao/zlfx/zlfx08.png" style="width: 200px;" />

### 术语二、`增长量`与`增长率`
`增长量`是用来描述<u>基期量与现期量的<b>绝对变化量</b></u>，计算公式为：
1. <font color=blue>增长量 = 现期量 - 基期量</font>
2. <font color=blue>增长量 = 基期量 × 增长率</font>
3. <font color=blue>增长量 =（现期量 × 增长率）÷ （1+增长率）= </font>（现期量 × 1/n）÷（1 + 1/n）<br />
    = <font color=blue><b>现期量 ÷ （N+1）</b></font>
4. <font color=blue>增长倍数<font color=red>即增长率</font>，增长1倍<font color=red>即增长100%</font></font>
5. <font color=blue>总体相同时，比较两个部分量，直接比较比重即可</font>
6. <font color=blue>比较A/(A+B)大小关系，可直接比较 A/B </font>

:::details 案例分析【 增长量 = 现期量 ÷ （N+1）】
<img src="/image/blogs/study/gongKao/zlfx/zlfx20.png" style="width: 550px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx21.png" style="width: 550px;" />
:::

#### 增长量识别
`识别：` <b>增长 + 单位（绝对量）</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx12.png" style="width: 400px;" />

#### 增长量比较
当资料给出<b>现期量和增长率</b>时，如果<b><font color=red>两者都大则增长量必然大</font></b>，否则将进行百分数化分数进行计算。<br />
<img src="/image/blogs/study/gongKao/zlfx/zlfx13.png" style="width:400px;" />
A比B增长了50%，则A是B的1.5倍<br />
A是B的1.7倍，则A比B增长70%
:::details 案例分析【增长量比较】
<img src="/image/blogs/study/gongKao/zlfx/zlfx18.png" style="width:550px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx19.png" style="width:550px;" />
:::

#### 增长量的高频考法之百化分
+ <font color=blue>增长量 = 现期 ÷ （N+1）</font>
+ <font color=blue>减少量 = 现期 ÷ （N-1）</font>
<img src="/image/blogs/study/gongKao/zlfx/zlfx14.png" style="width:550px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx15.png" style="width:400px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx16.png" style="width:550px;" />

:::details 案例分析【百化分】
<img src="/image/blogs/study/gongKao/zlfx/zlfx17.png" />
:::

#### 增长率
`增长率`是用来描述<u>现期量相对于基期量的<b>相对变化量</b></u>，计算公式为：
1. <font color=blue>增长率 = （现期量-基期量）/ 基期量 = （现期量÷基期量）-1</font>
2. <font color=blue>增长率 = 增长量 ÷ 基期量 = 增长量 /（现期量-增长量）</font>
3. <font color=blue>现期增长率 = 基期增长率 ± 百分点</font>

:::details 案例分析【基期量与现期量】
<img src="/image/blogs/study/gongKao/zlfx/zlfx06.png" style="width: 300px;" />
:::

#### 增长率的比较（已知现期量和基期量）
比较增长率时候，<font color=red>若（现期量/基期量）≥ 2，<b>可直接比较</b></font>；<font color=blue>若（现期量/基期量）＜ 2，<b>则比较 增长量/基期量</b></font>
<br />
<b>速算：</b><font color=blue>截位直除</font>
::: tip 做题技巧
1. <font color=blue>先瞪正负</font>
2. <font color=blue>直接直除</font>
3. <font color=blue>再套公式</font>
<b>增长率＞10% → 基期×1.1 ＜ 现期</b><br />
<b>增长率＞50% → 基期×1.5 ＜ 现期</b>
:::
::: info <font color=blue>优化：现期、增长量，比较：增长率</font>
`结论：`可通过“<font color=red>增长量/现期</font>”大小，来比较<font color=red>r</font>大小<br />
<b>`注意：` 仅限于比较，不能用于计算</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx22.png" />
:::

#### 一般增长率的比较
<img src="/image/blogs/study/gongKao/zlfx/zlfx27.png" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx28.png" />
<font color=blue>基期量在增大，增量下降，则增速肯定变小</font>
<img src="/image/blogs/study/gongKao/zlfx/zlfx29.png" />

#### 增长量倍数的速算技巧
1. <font color=blue>增速差在10%以上</font>，<font color=red>各自百化分，求增量，再求倍数</font>
2. <font color=blue>增速差在10%以内</font>，<font color=red>倍数≈现期倍数×增速倍数</font>
<img src="/image/blogs/study/gongKao/zlfx/zlfx23.png" style="width:600px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx24.png" style="width:600px;" />

#### 口算加减法之截位修正
<img src="/image/blogs/study/gongKao/zlfx/zlfx25.png" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx26.png" />

### 术语三、年均增长率
`识别：` 年均增长率最快、年均增速排序（年均+增长+%）
:::tip 公式
1. <font color=blue>现期量=基期量×（1+年均增长率）ⁿ，其中n为相差周期数</font>
2. <font color=blue>（1+年均增长率）ⁿ=现期量/基期量，n为现期和基期的年份差</font>
:::

#### 年均增长率（<font color=blue>比较</font>）
`公式：`（1+r）ⁿ=现期/基期<br />
`方法：`年份差<font color=red>n相同时</font>，只需比较<font color=blue>（现期量/基期量）</font>即可<br />
`记住：`<u>年均增长率的比较就是比较“整体增长率”，本质就是分数比较</u>
<img src="/image/blogs/study/gongKao/zlfx/zlfx30.png" />
:::details 案例分析【年均增长率-比较】
<img src="/image/blogs/study/gongKao/zlfx/zlfx31.png" />
:::

#### 年均增长率（<font color=blue>计算</font>）
`识别：`年均增速为……<br />
`方法：`增长率较大（10%以上）且差距大时，<font color=blue>居中代入（整十的数）</font>
<img src="/image/blogs/study/gongKao/zlfx/zlfx32.png" />

#### 年均增长率（<font color=blue>平方数</font>）
:::info 年均增长率（常见平方数）
<font color=blue>11²=121、12²=144、13²=169、14²=196、15²=225、16²=256、17²=289、18²=324、19²=361</font>
:::
<img src="/image/blogs/study/gongKao/zlfx/zlfx33.png" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx34.jpg" />

#### 年均增长量的识别与公式
`识别：`时间段+平均+增长+单位（绝对量）<br />
`公式：`<font color=blue>年均增长量=（现期-基期）÷ 年份差</font><br />
<b><font color=red>五年规划的年份差必须为5</font></b><br />
:::tip 考官规定：
<font color=blue>(N年/这N年)：2016—2020这五年：年份差为5（基期往前推一年）</font><br />
<font color=red>基期：2015年；现期限：2020年</font>
:::
<img src="/image/blogs/study/gongKao/zlfx/zlfx35.png" style="width:600px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx36.png" style="width:600px;" />

:::tip 速算小积累
<font color=blue>结论：一个数除以5，有效数字相当于乘以2</font>
:::
![速算小积累](/image/blogs/study/gongKao/zlfx/zlfx37.png)
![速算小积累](/image/blogs/study/gongKao/zlfx/zlfx38.png)

#### 增长率百化分之放缩法
![增长率百化分之放缩法](/image/blogs/study/gongKao/zlfx/zlfx39.png)

#### 增长率百化分之取中法
![增长率百化分之取中法](/image/blogs/study/gongKao/zlfx/zlfx40.png)
![增长率百化分之取中法](/image/blogs/study/gongKao/zlfx/zlfx41.png)

#### 增长率百分分之倒数法
<img src="/image/blogs/study/gongKao/zlfx/zlfx42.png" style="width:600px;" />

#### 增长率百化分之公式法
<img src="/image/blogs/study/gongKao/zlfx/zlfx43.png" style="width:600px;" />

### 术语四、拉动增长率
如果B是A的一部分，<u>B拉动A增长了 x%</u>，那么 <font color=blue>x% = (B的增长量 ÷ A的初期量) × 100%</font><br />
<img src="/image/blogs/study/gongKao/zlfx/zlfx44.png" style="width:600px;" />

### 特定增长率
`识别：`给出现期、基期，判断多个年份的增长率大于/小于特定数值
<img src="/image/blogs/study/gongKao/zlfx/zlfx45.png" style="width:550px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx46.png" style="width:550px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx47.png" style="width:550px;" />

### 术语五、同比与环比
<br />

#### 同比
<font color=blue>同比是与历史同期相比较。</font>如今年6月与去年6月相比较
:::details 案例分析【同比】
`例1：`2010年上半年，全国原油产量为9848万吨，同比增长为5.3%，上年同期为下降1%<br />
`应理解为：`<span style="background:yellow;"><b>与2009年上半年全国原油产量相比，<font color=red>2010年</font>上半年增长5.3%</b></span>；
<span style="background:pink;"><b>与2008年上半年全国原油产量相比，<font color=red>2009年</font>上半年下降1%</b></span>
:::

#### 环比
<font color=blue>环比是与紧紧相邻的上个统计周期相比较</font>，包括<u>日环比、周环比、月环比、年环比等</u>
:::details 案例分析【环比】
+ `例1：`<u>2010年8月1日</u>，全国原油产量为68万吨，环比增长5.3%<br />
`应理解为：`与<font colo=blue>2009年7月31日</font>全国原油产量相比，<font color=red>2010年8月1日增长5.3%</font><br />
+ `例2：`<u>2010年1月</u>，全国原油产量为1848万吨，环比增长5.3%<br />
`应理解为：`与<font colo=blue>2009年12月</font>全国原油产量相比，<font color=red>2010年1月增长5.3%</font><br />
+ `例3：`<u>2010年上半年</u>，全国原油产量为1848万吨，环比增长5.3%<br />
`应理解为：`与<font colo=blue>2009年下半年</font>全国原油产量相比，<font color=red>2010年上半年增长5.3%</font><br />
:::

### 术语六、百分数与百分点
+ <b>百分数也叫百分率或百分比</b>，是指用100做分母的分数，在数学中用`%`来表示，在文中一般都写作“百分之多少”。<br />
+ <b><font color=blue>百分点</font>是指不同时期以百分数形式表示的相对指标的<font color=blue>变动幅度</font></b>。1个百分点就是1%。<br />
+ <b><font color=blue>百分点表示百分数的变化，用加减法计算</font></b><br />
+ <b><u>增长率（或比例）之间的比较一般用百分点来表示</u></b>
:::details 案例分析【百分点】
`例1：`某国今年粮食增产20%，去年增产12%，则粮食的<font color=red>增长率同比增幅提高了8个百分点（20%-12%=8%）</font>，但不能说同比增幅提高了8%，否则今年粮食应增产12%×（1+8%），而非20%
<img src="/image/blogs/study/gongKao/zlfx/zlfx48.png" style="width:400px;" />
:::
:::tip 具体用法
+ <font color=blue>不同时期</font>以百分数形式表示的相对指标<font color=red>一定要用百分点表示</font>
+ <font color=blue>相同时期</font>以百分数表示的相对指标<font color=red>用百分数或百分点表示都可以</font>
+ 为了避免混淆这两个概念，只要记住百分点和百分数<font color=blue>如果同时出现</font>，<font color=red>选择百分点表示</font>的选项即可
:::
<img src="/image/blogs/study/gongKao/zlfx/zlfx49.png" style="width:600px;" />

#### 给百分点型，高减低加
`通俗理解：`看百分点前的表述，<font color=blue>“高的表述”就做减法，“低的表述”就做加法</font><br />
+ <b>“提高”</b>：上升、增加、扩大、提升等<br />
+ <b>“降低”</b>：下降、减少、缩小、收窄等
<img src="/image/blogs/study/gongKao/zlfx/zlfx50.png" style="width:450px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx51.png" style="width:450px;" />

### 术语七、比重
比重是指部分在总体中占的比例，有时也用贡献率等方式表述

### 术语八、增长贡献率
增长贡献率是指部分增长量占总体增长量的比重

### 术语九、成数与翻番
+ `成数`：表示<b>一个数</b>是另一个数的<b>十分之几的数</b>，<font color=blue>几成相当于十分之几</font>
+ `翻番`：翻一番为原来的2倍，翻两番为原来的4倍，以此类推，翻n番即为原来的<font color=red>2ⁿ</font>倍
<img src="/image/blogs/study/gongKao/zlfx/zlfx52.png" style="width:450px;" />

#### <span style="background:#000;color:#fff;">&nbsp;概念区分：增幅、降幅、变化幅度&nbsp;</span>
+ <b><font color=blue>增幅</font><font color=red>（不要望文生义）</font>：就是增长率，计算、比较时，有负号带负号。（<font color=blue>正＞负；负的越多越小</font>）</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx54.png" style="width:500px;" />

+ <b><font color=blue>降幅</font><font color=red>（要望文生义）</font>：计算、比较时看绝对值</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx55.png" style="width:500px;" />

+ <b><font color=blue>变化幅度</font><font color=red>（要望文生义）</font>：计算、比较时看绝对值</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx56.png" style="width:500px;" />

#### <span style="background:#000;color:#fff;">&nbsp;已知：现期、增长率，比较增长量&nbsp;</span>
:::tip 口诀：
<font color=blue>大大则大，一大一小百化分</font>
:::
<img src="/image/blogs/study/gongKao/zlfx/zlfx57.png" style="width:600px;" />
<img src="/image/blogs/study/gongKao/zlfx/zlfx58.png" style="width:600px;" />

### 术语十、顺差与逆差
在一个时期内，一个国家（或地区）的<b>出口商品额大于进口商品额</b>，叫做<font color=blue>对外贸易顺差（又称净出口额，出超）</font><br />
在一个时期内，一个国家（或地区）的<b>出口商品额小于进口商品额</b>，叫做<font color=blue>对外贸易逆差（又称净出口额，入超）</font>

### 术语十一、指数
<b>指数</b>是用来衡量某种要素相对变化的指标量。<br />
一般假定基期为100，<font color=blue>其他量和基期相比得出来得数值</font>即为指数，即<font color=blue>相应两期实际值的比=相应两期指数的比</font><br />
常见指数包括<b>纳斯达克指数、物价指数、上证指数和区域价格指数</b>
:::tip 🔈🔈🔈注意事项
1. 指数的增长率 = 实际值的增长率
2. 指数一般表示的不是绝对值的大小，而是相对变化的指标量。
:::

### 术语十二、GDP
<b>GDP即国内生产总值</b>，是指一个国家（或地区）所有常住单位在一定时期内生产的最终产品和服务价值的总和，常被<b>公认为衡量国家经济状况的最佳指标</b>。<br />
国内生产总值由第一产业、第二产业和第三产业的增加值构成，<font color=blue>一个国家的国内生产总值就是这三大产业的增加值之和。</font>

### 术语十三、恩格尔系数
恩格尔系数是<b>指食品支出总额（生活必需品、非奢侈品）占家庭或个人消费支出总额的百分比</b>。用以衡量一个国家（或地区）人民生活水平的常用指标。<font color=blue>一般这个系数越低，反映出该地区人民生活水平越高。</font>

### 术语十四、基尼系数
基尼系数是<b>用以衡量一个国家（或地区）人民收入差距的常用指标，数值介于`0~1`之间</b><br />
<font color=blue>基尼系数越大，表示不平等程度越高</font>

### 术语十五、特定历史时期表述
+ “中华人民共和国成立初”<font color=blue>指1949年之后的几年</font>
+ “改革开发以来”<font color=blue>指1978年以后至今</font>
+ “九五计划时期”<font color=blue>指1996-2000年</font>
+ “十五计划时期”<font color=blue>指2001-2005年</font>
+ “十一五规划时期”<font color=blue>指2006-2010年</font>
+ “十二五规划时期”<font color=blue>指2011-2015年</font>
+ “十三五规划时期”<font color=blue>指2016-2020年</font>

### 术语十六、三大产业
+ `第一产业`：<font color=blue>农、林、牧、渔业</font>（不包含农、林、牧、渔服务业）。
+ `第二产业`：<font color=blue>采矿业</font>（不包含开采辅助活动），<font color=blue>制造业</font>（不包含金属制品、机械和设备修理业），<font color=blue>电力、热力、燃气及水生产和供应业，建筑业</font>。
+ `第三产业`：<font color=blue>服务业</font>，是指除第一产业、第二产业以外的其他行业。

## 第二节、结构阅读法 

### 类型一、文字型资料
`方法`：圈画提取每段关键词

### 类型二、表格型资料
`方法一：`<b>一个统计表</b>需要关注的：
<img src="/image/blogs/study/gongKao/zlfx01/zlfx201.png" style="width:500px;" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx202.png" style="width:500px;" /><br />
`方法二：`<b>两个统计表</b>需要关注的：
<img src="/image/blogs/study/gongKao/zlfx01/zlfx203.png" style="width:500px;" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx204.png" style="width:500px;" />

### 类型三、图形型资料
柱状图、折线图、饼图

## 第三节、基础速算技巧
一般来说，对于<b>计算类的题目</b>，常运用<font color=blue><b>截位法和公式法</b></font>，而对于<b>比较类的项目</b>，则常用<font color=blue>直接观察法和速度比较法</font>

### 题型一、计算类
<br />

#### 一、截位法
+ 什么是截位法？<br />
截位法就是<b>从左到右保留几位有效数字，<font color=blue>看下一位</font>，进行<font color=red>四舍五入</font></b>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx205.png" style="width:500px;" /><br />

:::tip 截谁（记住规则，切莫纠结）
+ <font color=blue>一步除法</font>（除了一次），<font color=red>只截分母</font>
+ <font color=blue>多步除法</font>（除了多次），<font color=red>分子、分母都截</font>
:::
<img src="/image/blogs/study/gongKao/zlfx01/zlfx206.png" style="width:500px;" /><br />
:::tip 截几位
<font color=blue>看最接近的两个选项差距：</font>
+ 差距大（差距＞10%）→ <b><font color=red>截两位（快且准）</font></b> 
+ 差距小（差距＜10%）→ <b><font color=red>截三位（慢但准）</font></b>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx207.png" style="width:400px;" />

<b><span style="background:#000;color:#fff;">&nbsp;差距大（截两位）：</span></b><br />
+ <font color=blue>首位都不同</font> 
+ <font color=blue>首位有相同，次位差 ＞ 首位</font> 
<b><span style="background:#000;color:#fff;">&nbsp;差距小（截三位）：</span></b><br />
+ <font color=blue>首位有相同，次位差 ＜ 首位</font> 
+ <font color=blue>首位有相同，次位差 = 首位</font> 
:::
<img src="/image/blogs/study/gongKao/zlfx01/zlfx208.png" style="width:600px;" /><br />
:::tip <font color=red>截位直除，三步走</font>
<b><font color=blue>第一步：</font>看选项，判差距（大截两、小截三）</b><br />
<b><font color=blue>第二步：</font>看式子，去截谁（一截母、多都截）</b><br />
<b><font color=blue>第三步：</font>看上几，别算完（点到为止）</b>
:::
<img src="/image/blogs/study/gongKao/zlfx01/zlfx209.png" style="width:250px;" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx210.png" />

+ <b><font color=blue>选项仅数字不同，没位数差别，用不着看</font></b> 
+ <b><font color=blue>选项有数字相同，有位数差别，必须要看</font></b> 
<img src="/image/blogs/study/gongKao/zlfx01/zlfx211.png" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx212.png" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx213.png" />

#### 二、公式法
<img src="/image/blogs/study/gongKao/zlfx01/zlfx214.png" style="width:300px;" />

### 题型二、比较类
<br />

#### 一、直接观察法
`适用范围：`当分数的<u>分子和分母一大一小时</u>，<b>直接看分子，<font color=red>分子大的分数就大</font></b>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx215.png" style="width:350px;" />

#### 二、速度比较法
<br />

##### <span style="background:#000;color:#fff;">&nbsp;1. 横向比较看速度 &nbsp;</span>
找出<u>两个分数的分子和分子、分母和分母之间的倍数关系</u>，即变化速度，谁变化速度快看谁。<br />
<b>分子变化速度快看分子，<font color=red>分子大的分数大</font>；分母变化速度快看分母，<font color=red>分母小的分数大</font></b>。
<img src="/image/blogs/study/gongKao/zlfx01/zlfx216.png" />

##### <span style="background:#000;color:#fff;">&nbsp;2. 纵向比较看速度 &nbsp;</span>
当<u>分子大于分母</u>时，可以近似看作直除，<b><font color=red>商首位</font>进行比较</b>。<br />
当<u>分子小于分母</u>时，比较<b>分子到分母的倍数关系</b>，<b><font color=red>倍数越大，变化速度越快，分数越小</font></b>。<br />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx217.png" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx218.png" />

#### 分数比较的学习重点
+ `问题1：`<font color=blue>一大一小（钱多人少分的多）</font><br />
`通俗理解：`总钱数多，分的人少，平均每人分的钱数多
<img src="/image/blogs/study/gongKao/zlfx01/zlfx219.png" /><br />

+ `问题2：`<font color=blue>同大同小</font><br />
<font color=red>竖着直接除：</font><font color=blue>一般保留两位即可</font>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx220.png" style="width:450px;" /><br />
:::tip <font color=red>横着看倍数：</font>
1. <font color=blue>分子间倍数大，只看分子，分子大的分数大</font>
2. <font color=blue>分母间倍数大，只看分母，分母大的分数小</font>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx221.png" style="width:200px;" /><br />
:::

+ <span style="background:#000;color:#fff;">&nbsp; 四个分数比较 &nbsp;</span>
1. <b>若找最大，分子大（分母小）的可能性大，确定目标，再验证</b>
1. <b>若找最小，分子小（分母大）的可能性大，确定目标，再验证</b>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx222.png" style="width:500px;" /><br />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx223.jpg" style="width:600px;" /><br />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx224.png" style="width:500px;" /><br />

## 高频考点

### 一、混合增长率
`题干特征：`题干所求为总体增长率，资料<b>给出组成总体的各部分增长率与现期量</b>。<br />
`识别：`部分+部分=总体，求增长率<br />
`方法：`<b>先口诀，后线段</b><br />

<b>`口诀：`混合之后居中，<font color=red>偏向基期更大的一边</font>。</b>即总体增长率一定居于部分增长率之间，且更偏向于基期量较大者的增长率。<br />
<font color=blue>混合增长率居中 → 部分增速（小）＜ 混合r ＜ 部分增速（大）</font><br />
<font color=blue>偏向基期量（一般拿现期量估算）大的</font><br />

`辅助理解：`增长率、溶液混合、拔河
:::details 辅助解析【混合增长率】
`例1：`男生增速为10%，女生增速为30%，则全班的增速范围：10%~30%（<font color=blue><b>混合之后居中</b></font>）<br />
`例2：`男生增速为10%，女生增速为30%，小明增速为5%，则全班的增速范围：5%~30%（<font color=blue><b>混合之后居中在最小和最大之间</b></font>）<br />
`例3：`男生100人，增速10%，女生10人，增速30%，则全班增速范围相对与<b>10%~20%</b>更近（<font color=blue><b>混合之后居中，偏向基期更大的一边（<font color=red>一般拿现期量估算</font>）</b></font>）<br />
`例4：`男生10人，增速10%，女生100人，增速30%，则全班增速范围相对与<b>20%~30%</b>更近（<font color=blue><b>混合之后居中，偏向基期更大的一边（<font color=red>一般拿现期量估算</font>）</b></font>）<br />
:::
:::details 案例分析【混合增长率】
<img src="/image/blogs/study/gongKao/zlfx01/zlfx225.png" style="width:550px;" /><br />
:::

#### 补充：混合增长率（口诀之拔河）
<img src="/image/blogs/study/gongKao/zlfx01/zlfx226.png" style="width:550px;" /><br />
:::details 案例分析【混合增长率-口诀之拔河】
<font color=blue>题目中只给了现期，且有混合之前的增长率，可利用拔河思维</font>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx227.png" /><br />
:::

#### 补充：混合增长率之线段法
`起手式：`部分写两边，混合写中间，数字标上去，<font color=blue><b>距离与量成反比</b></font><br />
`解释：`距离与量成反比中，<font color=blue><b>距离 → 部分r与整体r的差值，量 → 部分的基期量（<font color=red>一般拿现期量估算</font>）</b></font><br />
:::details 案例分析【混合增长率之线段法】
<img src="/image/blogs/study/gongKao/zlfx01/zlfx228.png" style="width:450px;" />
<img src="/image/blogs/study/gongKao/zlfx01/zlfx229.png" />
:::

#### 补充：计算混合增长率之“无脑三角杀”
<img src="/image/blogs/study/gongKao/zlfx01/zlfx230.png" /><br />
:::tip 操作步骤
1. <font color=blue>无脑做差</font>：已知的两个增速，大 - 小<br />
2. <font color=blue>无脑倍数</font>：部分的具体量的倍数，大 ÷ 小<br />
3. <font color=red>算差距</font>：大 → ÷、小 → ×、混合 → ÷（倍 + 1）<br />
<b>`注：`求部分增速，基期量与<font color=blue>混合</font>的差距；求混合增速，差距是与<font color=blue>部分（大）</font>的差距</b>
:::
:::details 案例分析【无脑三角杀】
+ <font color=blue>算差距：大 → ÷</font>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx231.png" />

+ <font color=blue>算差距：小 → ×</font>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx232.png" />

+ <font color=blue>算差距：混合 → ÷（倍数+1）</font>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx233.png" />
:::

### 二、间隔增长率
`题型特征：`求间隔一年的增长率，如“……2013年相比2011年增长了……”<br />
`识别：`<b>隔一期 + 求增长率</b><br />
:::info
`形式1:` <b>直接给：</b>2021年志哥私房钱的同比增速为10%，2020年同比增速为5%。<br />
`形式2:` <b>给百分点关系：</b>2021年志哥私房钱的同比增速为10%，增速比上年上升5个百分点。<br />
求2021年比2019年的增速<br />
`细节说明`：间隔增长中有三个年份，<font color=blue>r1与r2为年份最大两年的增长率</font>
:::
:::details 练习
+ 2017年比2015年增长了百分之几？<b>r1 ➝ 17年、r2 ➞ 16年</b>
+ 2011年比2009年增长了百分之几？<b>r1 → 11年、r2 → 10年</b>
:::
:::tip 公式: <b><font color=blue>和 + 积</font></b>
若<b>第二年相对于第一年的增长率为r1，第三年相对于第二年的增长率为r2</b>，则第三年相对于第一年的增长率成为间隔增长率，计算公式为：
<font color=red>r间隔 = r1 + r2 + r1 × r2</font><br />
<b>实战攻略 ：<font color=red>r1+r2=2 x r1± 百分点</font></b>
:::
:::info 速算
+ <b>第一步，先算加和（<font color=red>分析选项是否是唯一值</font>）</b>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx234.png" />

+ <b>第二步，再算乘积 → <font color=red>若r1、r2绝对值均小于10%时，r1 x r2可忽略</font>；不能忽略时，<font color=red>一个不变，另一个百化分</font></b>
<img src="/image/blogs/study/gongKao/zlfx01/zlfx235.png" />
:::
