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
