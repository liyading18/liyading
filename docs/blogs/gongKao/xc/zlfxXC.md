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

#### 增长量识别
`识别：` <b>增长 + 单位（绝对量）</b>
<img src="/image/blogs/study/gongKao/zlfx/zlfx12.png" style="width: 400px;" />

#### 增长量比较
当资料给出<b>现期量和增长率</b>时，如果<b><font color=red>两者都大则增长量必然大</font></b>，否则将进行百分数化分数进行计算。<br />
<img src="/image/blogs/study/gongKao/zlfx/zlfx13.png" />






:::details 案例分析【基期量与现期量】
<img src="/image/blogs/study/gongKao/zlfx/zlfx06.png" style="width: 300px;" />
:::
