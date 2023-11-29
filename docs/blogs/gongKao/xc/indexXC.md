## 第一章、 图形推理
::: tip 平面推理综述
1. 当看到 <font color='red'><strong>数字时</strong></font>，要告诉自己 <font color='red'><strong>这是图形</strong></font>。（<strong><u>抛弃奇偶、等差等特性，看图形解构</u></strong>）
2. <strong>图形特征决定推理的方向，具体情况如下：</strong>
    + 图形元素组成相同，一般考查 <font color='red'><strong>位置规律</strong></font>
    + 图形元素组成相似，一般考查 <font color='red'><strong>样式规律</strong></font>
    + 图形元素组成不同，一般考查 <font color='red'><strong>属性规律、数量规律</strong></font>及<font color='red'><b>其他特殊规律</b></font>
:::

### 一、位置规律
<br />

#### 1. 平移 
<br />

##### 1.1 平移的方向
+ <font color='red'><b>直线方向：</b></font> 上下平移、左右平移
+ <font color='red'><b>时针方向：</b></font> 顺时针平移、逆时针平移
+ <font color='red'><b>元素位置互换</b></font>
##### 1.2 平移的步长
+ <font color='red'><b>恒定</b></font>
+ <font color='red'><b>递增 或 递减</b></font>

##### 思维小结：

:::tip <font color=blue>九宫格或十六宫格图形中</font>元素平移方向的判定方式如下：
1. 如果平移元素只在<b><u>九宫格或十六宫格图形的</u><font color=red>最外圈出现</font></b>，优先考虑元素在最外圈<font color=red><b>按时针方向平移</b></font>
2. 如果平移元素出现在<font color=red><b>非最外圈位置</b></font>，优先考虑<font color=red><b>直线方向平移</b></font>
3. 每幅图形<font color=red><b>按行</b></font><b>看黑块数量一致</b>，优先考虑<font color=red><b>左右平移</b></font>；<font color=green><b>按列</b></font><b>看黑块数量一致</b>，优先考虑<font color=red><b>上下平移</b></font>
4. 在<b>平移题目</b>中，<b>“从头跑”</b>比较普遍，应优先考虑
5. 九宫格优先<font color=red><b>横着看</b></font>
6. 九宫格考平移的时候，可以<b><u>从最简单的图入手</u></b>，然后可以<b><font color=red>首先看中间部分，采用“回字法”看规律</font>；如无规律，可再看直线平移</b>
7. <b>16格分<font color=red>内外圈走法</font>。先圈中间，看黑块个数是否相同：</b>
    + <font color=blue><b>内圈个数相同</b></font> —— <font color=red>内外分开“回”字看（绕圈走）</font>
    + <font color=blue><b>内圈个数不同</b></font> —— <font color=red>横竖分开看（直线走）</font>
        + <font color=red>横着数量不变，看左右平移</font>
        + <font color=red>竖着数量不变，看上下平移</font>
8. <b><font color=red>空白</font></b>也可以作为平移的小元素
<img src="/image//blogs/study/gongKao/xc01/pykb.jpg" style="width: 300px;" />
:::

#### 2. 旋转和翻转
<br />

##### 2.1 旋转
+ <b>旋转的方向：<font color=red>顺时针旋转</font>和<font color=red>逆时针旋转</font></b>
+ <b>旋转的角度</b>

##### 2.2 翻转
+ <b>以<font color=red>x轴</font>进行<font color=red>上下翻转</font>，以<font color=red>y轴</font>进行<font color=red>左右翻转</font></b>
+ <b>翻转之后再旋转，可利用“时针法”进行判断</b>
+ <b>九宫格<font color=red>中间为空白面</font>，考虑<font color=red>米字线路</font>，对称翻转</b>
+ <b>当<font color=red>小元素较多时</font>，可以<font color=red>连成一个圆时</font>，可以考虑<font color=red>时针法</font></b>

::: details <Badge type="danger" text="案例分析" /> &nbsp; 中间为空白面，米字线路
<img src="/image//blogs/study/gongKao/xc01/mizi.png" style="width: 350px;" />
:::

::: details <Badge type="danger" text="案例分析" /> &nbsp; 小元素较多，连成一个圆时
<img src="/image//blogs/study/gongKao/xc01/smallCircle.png" style="width: 450px;" />
:::

::: details <Badge type="danger" text="案例分析" /> &nbsp; 两组图或九宫格，考旋转或翻转: <font color='red'>看对称</font>
<font color='red'>如下：</font>第三个图 和 第二个图对称
<img src="/image//blogs/study/gongKao/xc01/jggDc01.png" style="width: 550px;" />
:::

### 二、样式规律
<br />

#### 1. 加减同异
+ <b><font color=red>相加：</font></b>将两图形中所有的元素（或线条）<b>拼合成一幅新图形</b>，重要的位置保留1次
+ <b><font color=red>相减：</font></b>当一幅图中的元素（或线条）完全包含第二幅图的元素（或线条）时，<b>两幅图相减的结果</b>，就是第一幅图减去第二幅图所有元素（或线条）之后的图形
+ <b><font color=red>求同：</font></b>将两图形中所有不同的元素（或线条）去掉，<b>只留下相同的部分</b>，形成一幅新图形
+ <b><font color=red>求异：</font></b>将两图形中所有不同的元素（或线条）去掉，<b>只留下不同的部分</b>，形成一幅新图形

::: details <Badge type="danger" text="案例分析" /> &nbsp; <b>当图形特征中: <font color='red'>线条重复出现</font>—— 加减同异</b>
<img src="/image//blogs/study/gongKao/xc01/jjty.png" style="width: 600px;" />
:::

#### 2. 遍历
+ <b>元素数量遍历</b>
+ <b>元素位置遍历</b>

#### 3. 黑白运算
<b>黑白运算的题目，一般需要根据已知图形列出4个计算公式：</b>
+ 黑 + 黑 = ？
+ 黑 + 白 = ？
+ 白 + 白 = ？
+ 白 + 黑 = ？

##### 思维小结
:::tip 图形间<font color=red>轮廓相同</font>但<font color=red>内在颜色</font>或<font color=red>图案</font>不同：
1. <b>各图<font color=blue>黑块数量相同</font>，优先考虑<font color=red>位置规律</font></b>
2. <b>各图<font color=blue>黑块数量不同</font>，优先考虑<font color=red>黑白运算</font></b>
:::

:::tip 黑白块<font color=red>形状、大小一样</font>
+ <b><font color=blue>黑块数量较少</font></b>
    1. <b>黑块数量基本相同 —— 位置（<font color=red>平移考查较多</font>）（<font color=red>小于等于6</font>）</b>
    2. <b>黑块数量不同 —— <font color=red>黑白运算</font></b>
+ <b><font color=blue>黑块数量不同且不能黑白运算 或 黑块较多</font></b>
    1. <b><font color=red>对称性（黑白分开）</font></b>
    <img src="/image//blogs/study/gongKao/xc01/hbdc.png" style="width: 350px;" />
    2. <b>黑/白块<font color=blue>边边相连</font>——<font color=red>一笔画</font></b>
    <img src="/image//blogs/study/gongKao/xc01/hbbh.png" style="width: 350px;">
    3. <b>黑/白块<font color=blue>分堆</font>——<font color=red>部分数</font></b>
    <img src="/image//blogs/study/gongKao/xc01/hbfd.png" style="width: 600px;" />
:::

:::tip 黑白块<font color=red>形状、大小不一样</font>
<img src="/image//blogs/study/gongKao/xc01/hbys01.png" style="width: 350px;" />
:::

:::tip 有些复杂的图形，需要利用<font color=red>求同存异和位置转化结合</font>起来联考
+ <b><font color=blue>有时候会考虑<font color=purple>先旋转再求同存异，还是先求同存异再旋转</font>。总结规律如下：</font></b>
    1. <b>前两幅图有<font color=blue>明显一样的线条，</font><font color=red>可优先运算</font></b>
    2. <b>前两幅图<font color=blue>没有明显一样的线条，</font><font color=red>可优先位置，谁搞特殊先转谁</font></b>
:::

::: details <Badge type="danger" text="案例分析" /> &nbsp; <b>复杂图形: <font color='red'>求同存异和位置转化结合</font></b>
<img src="/image//blogs/study/gongKao/xc01/fztx01.png" style="width: 400px;" />
<font color=blue>解题思路：</font><br />
1. 前两幅图中明显有平行四边形，求异，然后进行顺/逆时针旋转90度得到图三<br />
2. 前两幅图没有明显一样的线条。因图2和图3都有明显的斜线，所以要动图1，将图1旋转90度，然后求异
:::

### 三、属性规律
<br />

#### 1. 对称性
<br />

##### 1.1 对称的类型
+ <b><font color=red>轴对称图形</font>：A、B、Y、▲ 等</b>
+ <b><font color=red>中心对称图形</font>：S、Z、N、▰ 等</b>
+ <b><font color=red>既轴对称又中心对称图形</font>：H、O 等</b>

<b>一个图中<font color=blue>存在互相垂直的两条对称轴</font>，这个图形<font color=red>既是轴对称又是中心对称</font></b>

##### 1.2 对称轴的方向和数量

+ <b>考查<u style="color: blue">对称轴数量</u>的题目特征：<font color=red>等边三角形、三足鼎立</font></b><br />
+ <b style="color:red">一组对称，一组不对称，不算规律</b>
+ <b>最“火”对称考法 —— <font color=red>对称轴经过点、线、面</font></b>
+ <b>2-3个面挨在一起，<font color=red>分开看对称轴关系</font></b>

::: details <Badge type="danger" text="案例分析" /> &nbsp; <b>对称轴数量：<font color='red'>等边三角形、三足鼎立</font></b>
<img src="/image//blogs/study/gongKao/xc01/shux01.png" style="width: 550px;" />
:::

::: details <Badge type="danger" text="案例分析" /> &nbsp; <b>最“火”对称考法：<font color='red'>对称轴经过点、线、面</font></b>
<img src="/image//blogs/study/gongKao/xc01/shux02.png" style="width: 550px;" />
:::

::: details <Badge type="danger" text="案例分析" /> &nbsp; <b>2-3个面挨在一起，<font color='red'>分开看对称轴关系</font></b>
<img src="/image//blogs/study/gongKao/xc01/shux03.png" style="width: 380px;" />
<img src="/image//blogs/study/gongKao/xc01/shux04.png" style="width: 450px;" />
:::

#### 2. 曲直性
+ <b><font color=red>曲</font>：图形只由曲线构成</b>
+ <b><font color=red>直</font>：图形只由直线构成</b>
+ <b><font color=red>曲+直</font>：图形由曲线和直线共同构成</b>

:::tip <font color=blue>所有图形都有曲线出现，可以考查什么？</font>
1. 先想属性比较快 —— <font color=red>曲直性</font>
2. 单一曲线出现 —— <font color=red>曲线数量</font>
3. 曲线与直线相交 —— <font color=red>曲直交点</font>
4. 特殊曲线 —— <font color=red>圆当外框（内部、框上交点）</font>
5. 单独无规律，可以运算，写出来的不要丢
:::

#### 3. 开闭性
+ <b><font color=red>开放图形</font>：图形<font color=blue>不包括任何封闭空间</font>，即没有“窟窿”，如字母 C</b>
+ <b><font color=red>封闭图形</font>：图形<font color=blue>包含封闭空间</font>，即有“窟窿”，如字母 D</b>
+ <b><font color=red>半开半闭图形</font>：图形<font color=blue>既包含封闭空间又包含开放区域</font>，如字母 A</b>

#### 思维小结

::: tip 属性规律总结
+ 属性类识别特征：<b style="color:red">元素组成不相同、不相似</b><br />
+ 对称性：<br />
    1. <b><font color=red>"等腰元素"：</font><font color=blue>优先轴对称</font></b>
    2. <b><font color=red>平行四边形、S、N、Z变形图，相同图形反着放：</font><font color=blue>优中心对称</font></b>
    3. <b><font color=red>有互相垂直的两条对称轴：</font><font color=blue>轴 + 中心对称</font></b><br />
    <b><font color=purple>识别题型 → 画出对称轴 → 考虑数量、方向 → 与点、线、面的关系</font></b>
+ 曲直性：<b><font color=red>全曲、全直、曲+直</font></b>
+ 开闭性：<b><font color=red>全开、全闭、半开半闭</font></b>
:::

### 四、数量规律：<font color=blue>点、线（笔画）、面、素、角</font>
<br />
<Badge type="danger" text="题型识别" /> &nbsp; <b>图形元素组成不同，且无明显属性规律</b>

<br />
<br />

#### 1. 点
+ 什么是点？<br />
    <b>线与线的交点</b>
+ 点数量特征图：<br />
    <b>线条交叉明显（一般有笔画特征）</b>
+ 点数量细化考法：<br />
    <b>切点、曲直交点（当出现圆和直线相交的时候）</b>
<br />

:::warning
<b>只考虑线条相交得到的点（<font color=red>即交点</font>），不考虑端点，交点中有一类特殊的点（<font color=red>切点</font>）</b>
:::

#### 2. 线
<b>数直线、曲线、笔画数</b>

##### 2.1 直线/曲线

+ 当图形中出现<b><font color=red>多边形或单独的一条直线时，优先考虑数直线</font></b>
+ 当图形中出现<b><font color=red>较多曲线时，优先考虑数曲线</font></b>
+ 当直线或曲线数量不成规律的时候，不妨试试把<b><font color=red>直线数和曲线数做运算</font></b>

::: details <Badge type="danger" text="案例分析" />
<img src="/image//blogs/study/gongKao/xc01/shuliang01.png" style="width: 380px;" />
:::

##### 2.2 数笔画

+ <b><font color=red>连通图：</font></b>如果图形中<b>任意两点都是连通的</b>，那么该图形被称为连通图<br />
+ <b><font color=red>奇点：</font></b>若以<b>一个点为起点，延伸出的线条数为奇数</b>，则该点为奇点（<b><font color=red>奇点包括端点</font></b>）<br />
+ <b><font color=red>奇点为0的</font></b>连通图<b><font color=red>可一笔画画成</font></b><br />
+ <b><font color=red>偶点：</font></b>若以<b>一个点为起点，延伸出的线条数为偶数</b>，则该点为偶点<br />
+ <b><font color=red>连通图的笔画数</font> = </b><b><font color=red>奇点数 ÷ 2</font></b><br />

##### 知识小结

::: tip 什么时候考平行线？什么时候数笔画？
+ 图形比较规整的时候，<font color=blue>考虑平行线</font>
+ 图形不规整的时候，<font color=blue>考虑数笔画</font>
<img src="/image//blogs/study/gongKao/xc01/xianbihua.png" style="width: 380px;" />
:::

::: tip 笔画规律
<font color=blue>常考笔画规律的特征图形：(<b>可优先考虑笔画数</b>)</font>
+ <b><font color=red>五角星、月亮、“日”、“田”的变形图形</font></b>
+ <b><font color=red>与圆有关的相交和相切图形、多端点图形</font></b>
    <img src="/image//blogs/study/gongKao/xc01/bihua01.png" style="width: 380px;" />
:::

#### 3. 面

<b>面：</b>也称封闭空间、封闭区域，或者更形象地说就是“窟窿”<br />

##### <font color=gray>什么时候数面？</font>

+ <font color=blue><b>“窟窿”居多，优先数“面”</b></font><br />
+ <font color=blue><b>图形被分割、封闭面明显</b></font><br />
+ <font color=blue><b>生活化图形、粗线条图形</b></font><br />
+ <font color=blue><b>圆分割线条 —— 内外分开数</b></font><br />


::: details  <Badge type="danger" text="案例分析" />
<img src="/image//blogs/study/gongKao/xc01/mian01.png" style="width: 380px;" />
<hr />
<img src="/image//blogs/study/gongKao/xc01/mian02.png" style="width: 380px;" />
:::

::: tip 考查面的细化
1. 简单数数
2. 所有面的形状
3. 特殊面（三角形等）个数
4. 相同面的数量、形状
5. 最大面最小面的特征：<br />
    + 最大面或最小面与图形外轮廓形状是否相同等
    + 最大面、最小面的属性
    + 最大面的面积
:::

#### 4. 素
<b>素：即元素，可细分为<font color=red>个数</font>、<font color=red>种类数</font>和<font color=red>部分数</font></b><br />
<b>如果<font color=red>小元素都连在一起</font>，部分数<font color=red>是 1</font></b>

#### 5. 角
角：一般考查图形内部包含的角，即0-180°之间的角<br />
角可以细分为<b>锐角、直角、钝角</b>

#### 思维小结

::: tip 生活化、粗线条图形常见考法
<img src="/image//blogs/study/gongKao/xc01/shenghuo01.png" style="width: 380px;" />
:::

### 五、特殊规律
<br />

#### 1. 功能元素
<b>功能元素</b>一般用来标记位置，常见的功能元素包括：<b>黑点、白点、箭头等</b>

+ 当出现<b><font color=blue>两个黑点时</font></b>，可以考<b><font color=red>虑两个黑点的连线与图形的关系</font></b>
+ <b><font color=blue>箭头</font></b>不仅可以通过指向作用来<b><font color=red>标记图形</font></b>，<b><font color=blue>出现两个箭头时</font></b>还可以<b><font color=red>考查二者的关系，如垂直和平行</font></b>

::: details 特殊规律——<font color=blue>两个黑点</font>
<img src="/image//blogs/study/gongKao/xc01/teshu01.png" style="width: 500px;" />
:::

#### 2. 图形间关系

<br />

##### 2.1 相离
图形间没有公共部分

##### 2.2 相压
两个图形上下覆盖，被压图形有部分线条被覆盖，注意上下图的区别：<b>直线图形压着曲线图形、曲线图形压着直线图形</b>

##### 2.3 相交
图形间有公共部分，可细分为以下3个考点，分别<b><font color=red>相较于面、相交于点、相交于边</font></b>
+ <b><font color=blue>相交于面：</font></b>可考查相交面的形状、面积等。如：<b>相交面的形状为矩形、三角形等</b>；<b>相交面的面积小于（大于）不相交部分的面积</b>
<img src="/image//blogs/study/gongKao/xc01/xiangjiao01.png" style="width: 500px;" />

+ <b><font color=blue>相交于点：</font></b>可考查相交点的位置（上下、左右、内外）
<img src="/image//blogs/study/gongKao/xc01/xiangjiao02.png" style="width: 250px;" />

+ <b><font color=blue>相交于边</font></b>
    1. <font color=red>可考查<b>相交边的数量</b>（如2条相交边）</font>
    2. <font color=red>可考查<b>相交边的样式</b>：</font><font color=blue>长/短、整体/部分、曲/直等</font>，<b>如相交边为较长边（较短边）</b>

::: details 案例分析
<img src="/image//blogs/study/gongKao/xc01/xiangjiao03.png" style="width: 400px;" />
<img src="/image//blogs/study/gongKao/xc01/xiangjiao04.png" style="width: 400px;" />
:::

### 六、空间重构

在空间重构题型中，<u>“排除思维”</u>非常重要。主要<b>通过相对面和相邻面的位置关系</b>进行排除

#### 1. 六面体——相对面（<font color=red>相对面不能同时出现</font>）

如果a面和b面是相对面，<b>那么在立体图只能看到3个面的情况下，<font color=red>a和b面只能出现一个，且必须出现一个</font></b>

::: tip 平面展开图中，相对面有以下两个基本判定法则：
1. <b>相对面判定法则1：</b>在平面展开图中，<font color=red><b>如果两个面在同一行或同一列，且中间隔了一个面，</b></font>那么这两个面是相对面
2. <b>相对面判定法则2：</b>在平面展开图中，如果<b><font color=red>两个面在“Z”字形两端，且紧靠着“Z”字形中间那条线</font></b>，那么这两个面是相对面
<img src="/image//blogs/study/gongKao/xc01/xdm01.png" style="width: 300px;" />
:::

不是所有六面体的题都能用相对面做出来，大部分的题用相对面只能排除一两个选项，甚至一个都排除不了，<b>剩下的选项我们可以用相邻面（公共边、公共点）来排除</b>

#### 2. 六面体——公共边

::: tip 公共边判定法则
1. <b>公共边判定法则1：</b><font color=red>两个相邻面的相交线为公共边</font>
2. <b>公共边判定法则2：</b>在展开图上，<font color=red>呈直角的两条边为同一条边</font>
3. <b>公共边判定法则3：</b><font color=blue>一行/列连着<b>4个面</b></font>，<font color=red>两头的两条边是同一条边</font>
<img src="/image//blogs/study/gongKao/xc01/ggb01.png" style="width: 400px;" />
<img src="/image//blogs/study/gongKao/xc01/ggb02.png" style="width: 400px;" />

<b>注意：<font color=red>如果a面和b面是相邻面，那么在立体图和展开图中，a面和b面的公共边不变</font></b>
:::

##### "画边法"

从“公共边”延伸出的万能打法——<b>画边法</b>

::: tip 画边法操作步骤
<img src="/image//blogs/study/gongKao/xc01/huabian01.png" style="width: 400px;" />
<img src="/image//blogs/study/gongKao/xc01/huabian02.png" style="width: 400px;" />
:::

#### 3. 六面体——公共点

<b>三面相邻，公共点不变</b>

::: details 案例分析
<img src="/image//blogs/study/gongKao/xc01/ggd01.png" style="width: 550px;" />
:::

#### 4. 到底优选公共边还是公共点

+ <b><font color=blue>三个面挨在一起</font>——<font color=red>优选公共点</font></b>
+ <b><font color=blue>三个面没有挨在一起</font>——<font color=red>优选公共边</font></b>

<img src="/image//blogs/study/gongKao/xc01/ggbd01.png" style="width: 500px;" />

### 七、立体拼合、截面图与三视图
<br />

#### 1. 立体拼合
<b>“凹凸一致”</b>原则
:::tip 俄罗斯方块类拼合（优先不转），先数后描
1. <font color=red>先看选项，决定是否数数</font>
2. <font color=red>按层拼合：</font>挑大的、规整的拼
:::

:::details 案例分析-<font color=red>数数</font>，按层数
<img src="/image//blogs/study/gongKao/xc01/els01.png" style="width: 450px;" />
:::

:::details 案例分析-<font color=red>整体数量——部分数量</font>
<img src="/image//blogs/study/gongKao/xc01/els02.png" style="width: 500px;" />
:::

:::details 案例分析-<font color=red>描黑</font>
<img src="/image//blogs/study/gongKao/xc01/els03.png" style="width: 500px;" />
<b>注解：将1在立体中描黑，接着2在立体中描黑，最后剩留白，看符合那个选项</b>
:::

#### 2. 截面图
指的是被切部分的形状<br />
截面图的原则为“一刀切”，即将一个图形一刀切开，观察切面的形状

##### 常见立体截面图能截什么
1. 长方体、正方体
    + <font color=blue>矩形</font>（拦腰切、上下切、斜切）<br />
    + <font color=blue>梯形</font>（斜切）<br />
    + <font color=blue>锐角三角形</font>（从棱上的某一点开始斜着切到面）<br />
2. 圆柱
    + <font color=blue>圆</font>（横切）<br />
    + <font color=blue>椭圆</font>（斜切）<br />
    + <font color=blue>矩形</font>（竖切）<br />
3. 圆锥
    + <font color=blue>圆</font>（横切）<br />
    + <font color=blue>椭圆</font>（斜切）<br />
    + <font color=blue>三角形</font>（竖切）<br />
4. 圆台
    + <font color=blue>圆</font>（横切）<br />
    + <font color=blue>椭圆</font>（斜切）<br />
    + <font color=blue>梯形</font>（竖切）<br />

::: tip 思维小结
+ 要想<b>切出有弧线的截面</b>，立体图形本身一定得存在曲面
+ 在外框为六面体的立体图形中，<b>如果想切出三角形，必须从棱下刀斜着切</b>，此时不可能切出直角，因此<b>切出来的三角形和直角不能同时存在</b>
:::

::: details 辅助解析-截面图
<img src="/image/blogs/study/gongKao/xc01/jmt01.png" style="width: 400px;" />
:::

#### 3. 三视图
给出一个立体图形，让我们给出主视图、左视图、俯视图

## 第二章、定义判断
看清问题，抓准信息，比较选项

### 高频考点一：关键词：<font color=blue>主客体</font>
主体：一个动作或事件的发起者或执行者<br />
客体：一个动作或行为指向的对象<br />
<b>可圈出来“属于”、“不属于”，对应找主客体</b>

:::tip 常考主客体
1. <b>行政机关：</b>各级政府（国务院……街道办/乡镇政府、公安等）
2. <b>权力机关：</b>全国人大、地方人大
3. <b>司法机关：</b>法院、检察院
4. <b>事业单位：</b>学校、医院、科研所、广播新闻出版等
5. <b>社会组织：</b>商会（浙商会）、协会（消费者协会）
:::

#### 注意👀👀👀
1. <b><font color=blue>主客体不符合的选项一定不符合定义</font></b>
2. <b>不是每道题一定都有主体和客体，但是<font color=red>出现了要重点看</font></b>
3. <b>出现<font color=red>范围越小越明确</font>的主客体，尤其重要</b><br />
    【<font color=hotpink>闭月羞花</font>的<font color=hotpink>女生</font>】【<font color=hotpink>英俊潇洒</font>的<font color=hotpink>男生</font>】

### 高频考点二：关键词：<font color=blue>原因/条件+结果</font>
当以下引导词出现时，很有可能设置考点，需要圈画并与选项做对应
1. <b>表示原因的引导词：</b><font color=red>因为、由于</font>等
2. <b>表示条件的引导词：</b><font color=red>如果、只有、在……情况下、在……作用下、在……时，</font>以及时间（<font color=red>如事前/事后</font>）、<font color=red>地点或其他表示条件的词汇</font>
3. <b>表示结果的引导词：</b><font color=red>所以、因而、带来】引发】导致、使得</font>等表结论的词汇

### 高频考点三：关键词：<font color=blue>方式 + 目的</font>
当以下引导词出现时，很有可能设置考点，需要圈画并与选项做对应<br />
1. <b>方式引导词：</b><font color=red>以（按照/通过/采用/利用）……的方式（方法/办法/依据/手段）</font>等
2. <b>目的引导词：</b><font color=red>以……为目的（目标）</font>、<font color=red>达到（实现）……的目的（目标/结果/效果）</font>、<font color=red>为了……等</font>

### 高频考点四：<font color=blue>包含定义的句子优先看</font>
<br />

#### 长定义
1. <font color=blue><b>优先看定义所在的句子</b></font>
2. <font color=blue><b>有解释说明，重点关注解释说明</b></font>
<b>常见的解释说明引导词：<font color=red>即、也就是说、包括、以下情形……</font></b>

::: details 辅助解析
<img src="/image/blogs/study/gongKao/xc01/changdingyi.png" style="width: 600px;" />
:::

### 高频考点五：<font color=blue>补充说明</font>
补充说明的提示词有三种形式：
1. 即、也就是说、意思是、包括等
2. 标点符号：括号、破折号、冒号
3. 分类说明

### 高频考点六：<font color=blue>多定义</font>
多定义是指题干中给出多个概念的定义，<b>要求对其中一个或多个定义进行判断</b>

:::tip 思维小结
<b>多定义问谁<font color=red>优先看谁</font></b>
:::

### 高频考点七：<font color=blue>同构选项排除法</font>
<b>同构选项</b>，指的是选项之间结构相似或者表达的意思相似。由于是单选题，如果碰到两个或三个选项结构一样或者意思相近，则<b>不可能同时选为正确答案</b>，所以看到同构选项可以同时排除
<br /><br />
<b><font color=blue>个人理解：</font>同构选项排除，意思是出现了<font color=red>两种不同的态度</font>等</b>

## 第三章、类比推理
### 1. 语义关系
语义关系是指词语含义之间的关系<br />
<b>常考的语义关系主要分为以下三种：</b>

#### 1.1 近义关系 
词语含义相近，例如：<b>水滴石穿、绳锯木断</b>

::: details 案例解析
<img src="/image//blogs/study/gongKao/xc01/yuyi01.png" style="width: 300px;" />
:::

::: tip 二级辨析
如果<b>一级关系（近反义关系）</b>选不出唯一答案，需要<b><font color=red>进行二级辨析</font></b>
<img src="/image//blogs/study/gongKao/xc01/yuyi02.png" style="width: 400px;" />
:::

#### 1.2 反义关系
词语含义相反，例如：<b>见异思迁、忠贞不渝</b>

#### 1.3 比喻义、象征义
通过某些具体事物比喻或象征某些抽象意义，例如：<b>荆棘比喻苦难、玫瑰象征爱情</b>

::: info 比喻类拓展
+ <b><font color=blue>孺子牛</font></b>比喻心甘情愿为人民大众服务，无私奉献的人
+ <b><font color=blue>纸老虎</font></b>比喻貌似强大、实际虚弱的人或集团
+ <b><font color=blue>冷板凳</font></b>比喻因不受重视而担任清闲的职务
+ <b><font color=blue>捞稻草</font></b>比喻在绝望中做徒劳无益的挣扎
+ <b><font color=blue>跑龙套</font></b>比喻在人手下做无关紧要的事
+ <b><font color=blue>定心丸</font></b>比喻能使人情绪安定的东西
+ <b><font color=blue>耍花枪</font></b>比喻卖弄小聪明的欺骗行为
+ <b><font color=blue>拉清单</font></b>比喻结算彼此的恩怨利害
+ <b><font color=blue>破天荒</font></b>比喻从来没有出现过的事
+ <b><font color=blue>上台阶</font></b>比喻取得新的更大的成就
+ <b><font color=blue>老古董</font></b>比喻思想陈腐或生活习惯陈旧的人
+ <b><font color=blue>应声虫</font></b>比喻象征胸无主张、随声附和的人
+ <b><font color=blue>传声筒</font></b>比喻没有主见只会鹦鹉学舌的人
+ <b><font color=blue>三脚猫</font></b>比喻对各种技艺略知皮毛的人
+ <b><font color=blue>侃大山</font></b>比喻没有目的的聊天
+ <b><font color=blue>印把子</font></b>比喻政权
:::

::: info 象征类拓展
<b><font color=blue>南冠：</font>囚犯</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>桑梓：</font>家乡</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>青衿：</font>读书人</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>浮屠：</font>佛塔</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>丝竹：</font>音乐</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>汗青：</font>史册</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>红颜/娥眉：</font>女性</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>白衣/布衣：</font>百姓</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>鸿雁/笺礼：</font>书信</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>总角/垂髫：</font>小孩</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>干戈/烽烟：</font>战争</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>花甲/耄耋/伛偻(yu lv)/黄发：</font>老人</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>合肥：</font>庐州</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>杜鹃花：</font>映山红</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>荷花：</font>芙蕖</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>乞巧节：</font>七夕节</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>苦瓜：</font>凉瓜</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>矮瓜：</font>茄子</b>   &nbsp;&nbsp;&nbsp;  
<b><font color=blue>芝麻：</font>脂麻</b>   &nbsp;&nbsp;&nbsp;  <b><font color=blue>五味：</font>酸甘苦辛咸</b>   &nbsp;&nbsp;&nbsp;  
:::

### 2. 逻辑关系
<br />

#### 2.1 全同关系
全同关系指<b>两个表达含义完全相同的词语</b>，如土豆与马铃薯、麦克风与话筒等
#### 2.2 包含关系
包含关系是指两个词语概念之间<b>一个范围大，一个范围小，小概念完全被包含在大概念之中</b>，如：男人和人、桌面和桌子<br />
<b>包含关系可分为以下几类：</b>

##### 2.2.1 种属关系
即A是B的一种，如：柳树和树（<b>柳树是树的一种</b>）

::: tip 思维小结
能<b>单独</b>用<b><font color=blue>“是”</font></b>造句子的是<b><font color=red>种属关系</font></b>
:::
##### 2.2.2 组成关系
即A是B的一个组成部分，如：轮胎和汽车（<b>轮胎是汽车的一个组成部分</b>）<br />
##### 2.2.3 并列关系
两个词语概念处于同一个级别上，但又彼此不包含，如：植物与动物、火星与地球<br />
<b>并列关系可以分为以下两种：</b>
+ <font color=blue><b>矛盾关系</b></font>
非A即B，没有第三种情况存在，如：生与死、错与对
::: tip 常考矛盾关系
男：女、生：死、开：关、动：静、曲：直、白天：黑夜、A：非A、阴：阳、阴离子：阳离子、<br />
阴刻：阳刻、静态博弈：动态博弈、软实力：硬实力、软件：硬件、主要矛盾：次要矛盾、<br />
实体经济：虚拟经济、精神文明：物质文明、急性中毒：慢性中毒
:::
+ <font color=blue><b>反对关系</b></font>
指除了A和B，还有其他情况存在，如：黑色与白色，颜色除黑和白以外，还有红、黄、蓝等颜色
::: tip 注意事项：同级并列
并列关系一般要求<b>同级并列</b>，如：广东和南京不是并列关系，广东是省级，而南京是市级
:::
::: tip 动物并列关系
+ <b><font color=red>脊椎动物：</font></b><br />
<b>鸟：</b>喜鹊、鸡、鸭、鹅等<br />
<b>鱼：</b>鲫鱼、带鱼等<br />
<b>爬行动物：</b>蛇、壁虎、蜥蜴、龟等<br />
<b>两栖动物：</b>青蛙、娃娃鱼、蝾螈等<br />
<b>哺乳动物：</b>蝙蝠、海豚、鲸鱼等<br />
+ <b><font color=red>无脊椎动物：</font></b><br />
原生动物<br />
腔肠动物<br />
扁形动物<br />
线形动物<br />
环节动物<br />
<b>软体动物：</b>蜗牛<br />
<b>节肢动物：</b>蜘蛛、蜈蚣、虾、蟹<br />
棘皮动物
:::

##### 2.2.4 交叉关系
指词语概念间<b>有重叠的部分，但不完全重合</b>，即有的A是B，有的B是A
::: tip 判断技巧 —— 造句子
<b><font color=red>交叉关系利用“有的”造句即可</font></b><br />
有的A是B，有的A不是B；<br />有的B是A，有的B不是A
:::     
::: details 案例解析
<b>例：男人和老师</b><br />
有的男人是老师，有的男人不是老师；有的老师是男人，有的老师不是男人
:::

##### 2.2.5 对应关系
<b>常考的对应关系有以下五种：</b>
+ <b>物品与原材料、制作工艺，</b>如：家具与木材、手镯与打磨
+ <b>物品与功能（<font color=red>一般为名词+动词</font>）</b>，如：手机与沟通、汽车与运输、灯：照明：装饰
+ <b>属性关系（<font color=red>一般为名词+形容词</font>）</b>，如：盐与咸、叶与绿、花与红
+ <b>时间先后顺序（<font color=red>一般为动词+动词</font>）</b>，如：起飞与着陆、生病与治疗
+ <b>因果关系</b>，如：下雨与地湿、淋雨与感冒
:::tip 对应关系：物品与原材料【二级辨析】
<b>二级辨析：<font color=red>必然组成、或然组成</font></b>
:::
:::details 案例辅助：物品与原材料【二级辨析-或然组成】
<img src="/image//blogs/study/gongKao/xc01/duiying.png" style="width: 350px;" />
:::
::: tip 对应关系：制作工艺
对应关系中<b><font color=red>工艺制作过程涉及物理、化学</font></b>的区分，<b><font color=blue>物理变化改变物体形态但不改变物体组成成分，化学变化则改变物体的组成成分</font></b><br />
:::
::: tip 对应关系：制作工艺【<font color=red>工艺二级辨析</font>】
<b><font color=blue>涉及物理变化的工艺：</font></b>印刷、捆扎、打磨、雕琢、剪裁、织造灯<br />
<b><font color=blue>涉及化学变化的工艺：</font></b>燃烧、氧化、发酵、酿造、冶炼等
:::
:::tip 对应关系：物品与功能
<b><font color=red>先看主要功能，再看次要功能</font></b>
:::
:::details 案例辅助：物品与功能【次要功能】
<img src="/image//blogs/study/gongKao/xc01/wpgn.png" style="width: 260px;" />
:::
::: tip 对应关系：属性关系【二级辨析：必然、或然】
如：盐：咸（<font color=red>盐必然是咸的</font>）；花：红（<font color=red>花不必然是红的</font>）
:::
:::details 案例分析：对应关系-属性关系【二级辨析：必然、或然】
<img src="/image//blogs/study/gongKao/xc01/shuxing01.png" style="width: 300px;" />
:::
::: tip 对应关系：时间先后顺序
+ <b>先后顺序 + <font color=blue>主体不一致</font></b>
+ <b>先后顺序 + <font color=blue>主体一致</font></b>
:::
::: details 案例解析-对应关系：时间先后顺序【<font color=red>主体不一致</font>】
<img src="/image//blogs/study/gongKao/xc01/time01.png" style="width: 360px;" />
:::
::: details 案例解析-对应关系：时间先后顺序【<font color=red>主体一致</font>】
拍摄：剪辑
:::
::: tip 对应关系：因果关系【二级辨析】
常考二级辨析：<b>原因（<font color=red>自然/人工</font>）、结果（<font color=red>积极/消极</font>）</b>
:::
:::details 案例分析：因果关系【二级辨析】
<img src="/image//blogs/study/gongKao/xc01/yinguo.png" style="width: 300px;" />
:::
:::tip 常见因果关系总结
人逢喜事：精神爽、&nbsp;&nbsp;&nbsp;城门失火：殃及池鱼、&nbsp;&nbsp;众人拾柴：火焰高、<br/>
多行不义：必自毙、&nbsp;&nbsp;&nbsp;水落石出、&nbsp;&nbsp;&nbsp;水涨船高、&nbsp;&nbsp;&nbsp;春暖花开、<br />
风吹草动、&nbsp;&nbsp;&nbsp;天寒地冻、&nbsp;&nbsp;&nbsp;物腐虫生、&nbsp;&nbsp;&nbsp;鸟尽弓藏、<br />
唇亡齿寒、&nbsp;&nbsp;&nbsp;理屈词穷、&nbsp;&nbsp;&nbsp;水滴石穿
:::

#### 2.3 语法关系
语法关系是以造句的形式将题干词语联系起来而形成的关系，根据句子成分不同，主要分为<b>主谓关系、动宾关系、主宾关系</b>。<br />
语法关系主要考虑以下两个方面： 
##### 2.3.1 <font color=blue>词性：</font>名词、动词、形容词
1. 一般地，名词充当主语或宾语，动词充当谓语。当题干出现名词和动词，且没有明显的逻辑关系时，可以优先考虑<b>主谓或动宾</b>搭配形式
2. 词语在不同的语境下可具有不同的词性，正确区分词语的词性是造句的前提。例如，“我理解你”中“理解”为动词，“我需要你的理解”中“理解”为名词
3. 词性一般不单独考查，当通过造句子不能确定答案时，可利用词性进行二级辨析
##### 2.3.2 <font color=blue>顺序：</font>题干和选项用同样的顺序造句
<b><font color=red>技巧：造句子</font></b><br />
1. <font color=blue>主谓关系：</font>我：喜欢
2. <font color=blue>动宾关系：</font>喜欢：你
    + <font color=red>区分动词和动宾：</font>歌唱/唱歌
3. <font color=blue>主宾关系：</font>我：你
4. <font color=blue>偏正：</font>皎洁：月亮
    + <font color=red>偏正可以用“<b>的/地</b>”造句：</font>
        + 皎洁：月亮（<font color=blue>皎洁的月亮</font>）
        + 慢：跑（<font color=blue>慢慢的跑</font>）

#### 思维小结
::: tip 拆分思维
1. <b><font color=red>成语被拆分：</font></b>（南征：北战）（唇亡：齿寒）
2. <b><font color=red>词语间无明显逻辑关系：</font></b>成败：呼吸
3. <b><font color=red>相同单字反复出现：</font></b>寒：寒冷：寒舍
4. <b><font color=red>方式目的拆分</font></b>
    + 怎么想到的？<b><font color=blue>前后两词一般是动词/动宾结构</font></b><br />
    【刻舟：求剑】【按图：索骥】【削足：适履】【杀鸡：取卵】<br />
    【掩耳：盗铃】【守株：待兔】【凿壁：偷光】【缘木：求鱼】<br />
    【望梅：止渴】【杀鸡：儆猴】【画饼：充饥】

<img src="/image//blogs/study/gongKao/xc01/yuyi00.png" style="width: 240px;" />
:::
:::tip 拓展——拆分常见考法
1. <b>语义关系：</b>【生死存亡】【南征北战】
2. <b>并列关系：</b>【飞禽走兽】【笔墨纸砚】
3. <b>因果关系：</b>【春暖花开】【唇亡齿寒】
4. <b>方式目的：</b>【刻舟求剑】【顺藤摸瓜】
5. <b>偏正关系：</b>【青山绿水】【唇红齿白】
6. <b>语法关系：</b>【愚公移山】【忧国忧民】
:::

## 第四章、逻辑判断
逻辑判断主要包括7类题型：<b>翻译推理、组合排列、削弱、加强、日常结论、原因解释和真假推理</b>
### 1. 翻译推理
<span style="background:#000;color:#fff;">&nbsp;题型特征：</span>
题干或选项中出现多组“逻辑关联词”，如：<b>“如果……那么……”、“只要……就……”、“只有……才……”、“所有”、“有些”、“……且……”、“……或……”等</b><br />
:::info 解题思路
<b>先翻译，后推理</b><br />
1. 将逻辑关联词按照翻译规则翻译为 ① → ② 的形式（①、②分别代表一句话）<br />
2. 按照推理规则进行推导
:::

#### 考点一、翻译规则
<span style="background:#000;color:#fff;">【前推后】必备关联词 &nbsp;</span>
+ 如果……那么（就）……