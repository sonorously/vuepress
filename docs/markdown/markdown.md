# Markdown基本语法

## 标题

**#和文字之间需要空格隔开**

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 文字

**文字样式设置不需要空格和字符之间隔开**

**这个是字体加粗**
*这个是字体倾斜*
***这个是字体加粗倾斜***
～～这个是加删除线的文字～～

```
**这个是字体加粗**
*这个是字体倾斜*
***这个是字体加粗倾斜***
～～这个是加删除线的文字～～
```

## 引用

**引用字符，引用到几级前边需要添加几个 >**

> 引用内容1
> > 饮用内容2
> >
> > > 饮用内容3
```
> 引用内容1
>> 饮用内容2
>>> 饮用内容3
```

## 分割线

**三个或三个以上的 - 和 * **

```
--- || ---...
*** || ***...
注意：在一行文字下直接使用分割线，会出现类似于标题的效果，如果换行了，就会显示一条分割线
```

## 超链接
[bingo的世界](http://bingo.kim)
```
超链接的编写语法是 []()
[文字描述，会变成蓝色](链接地址)
[bingo的世界](http://bingo.kim)
```
## 图片
![image](http://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0531%2F0a85fb25j00qtxwjo000ic000hs00hsc.jpg&thumbnail=650x2147483647&quality=80&type=jpg)

`图片加载语法 ![title](图片地址) 只是在超链接前添加了一个❗️`

## 列表

**符号跟内容之间都要有一个空格**

* 无序
    * 无序
       * 无序
          * 无序
1. 有序
   1. 有序
   2. 有序
      1. 有序
      2. 有序
         1. 有序
2. 有序
```
无序列表用 - + * 任何一种都可以
* 无序列表
- 无序列表
+ 无序列表

有序列表是数字加点
1. 有序列表
2. 有序列表
3. 有序列表
4. 有序列表

列表嵌套 子列表需要在开始前敲三个空格

* 无序
\n\n\n* 无序
       \n\n\n* 无序
          \n\n\n* 无序
   
1. 有序
   \n\n\n1. 有序
   \n\n\n2. 有序
      \n\n\n1. 有序
      \n\n\n2. 有序
         \n\n\n1. 有序
2. 有序
```

## 表格

** | 必须是在英文状态下的才管用，符号和内容之间加不加空格都可以**

姓名 | 职业 | 排行
|:-|:-:|-:|
关羽yyds | 游走或者是中路或者是上单 | 第一yyds
张飞 | 辅助 | 第二
赵云 | 打野 | 第三
黄忠 | 射手 | 第四
马超 | 上单 | 第五

```
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容
英文下的 : 控制文字的显示位置，单个在左是左对齐，单个在右是右对齐，
两边都有则是居中，默认什么都不加也是居中。
- 写几个都可以

姓名 | 职业 | 排行
|:-|:-:|-:|
关羽 | 游走 | 第一
张飞 | 辅助 | 第二
赵云 | 打野 | 第三
黄忠 | 射手 | 第四
马超 | 上单 | 第五

```

## 代码块
```
代码块分为 单行代码 和 多行代码

单行代码用 单个反引号 `单行内容`
多行代码用 三个反引号表示(```占据一行)
\n ```
多行内容
\n ```
\n ``` 前边加 \n 是为了在页面展示，否则会变成代码块儿

```

## 流程图
主要的语法为 name=>type: describe，其中 type 主要有以下几种：
1.开始和结束：start end
2.输入输出：inputoutput
3.操作：operation
4.条件：condition
5.子程序：subroutine
```flow
st=>start: 开始:>http://bingo.kim
io=>inputoutput: 你好
op=>operation: 我的
cond=>condition: 是/否？
sub=>subroutine: 条件1
e=>end

st->io->op->cond
cond(yes)->e
cond(no)->sub->io

```
[流程语法图](https://www.jianshu.com/p/67118684f636)

## 数学公式
###### 公式显示位置
* 如果页面需要展示数学公式，需要在maekdown编辑器中的偏好设置中打开LaTeX公式展示。
* 行内数学公式定意，使用 `$...$` 来定义。
* 单独一行来展示公式，需要使用 `$$...$$` 来定义。
- 行内展示：`$\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t$` 
- $\sum_{i=0}^N\int_{a}^{b}g(t,i)\text{d}t$
- 单独一行展示：`$$\sum_{i=0}N\int_{a}{b}g(t,i)\text{d}t$$`
- $$\sum_{i=0}N\int_{a}{b}g(t,i)\text{d}t$$


###### 希腊字母
| 显示 |   命令   | 显示 |   命令   | 显示 |  命令  |
| :--: | :------: | :--: | :------: | :--: | :----: |
|  α   |  \alpha  |  β   |  \beta   |  γ   | \gamma |
|  δ   |  \delta  |  ε   | \epsilon |  ζ   | \zeta  |
|  η   |   \eta   |  θ   |  \theta  |  ι   | \iota  |
|  κ   |  \kappa  |  λ   | \lambda  |  μ   |  \mu   |
|  ν   |   \nu    |  ξ   |   \xi    |  π   |  \pi   |
|  ρ   |   \rho   |  σ   |  \sigma  |  τ   |  \tau  |
|  υ   | \upsilon |  φ   |   \phi   |  χ   |  \chi  |
|  ψ   |   \psi   |  ω   |  \omega  |      |        |

###### 特殊符号
|   符号显示    |    命令     |  符号显示  |   命令   | 符号显示  |  命令   | 符号显示  |  命令   |
| :-----------: | :---------: | :--------: | :------: | :-------: | :-----: | :-------: | :-----: |
|   $\infty$    |   \infty    |   $\cup$   |   \cup   |  $\cap$   |  \cap   | $\subset$ | \subset |
|  $\subseteq$  |  \subseteq  | $\supset$  | \supset  |   $\in$   |   \in   | $\notin$  | \notin  |
| $\varnothing$ | \varnothing | $\forall$  | \forall  | $\exists$ | \exists |  $\lnot$  |  \lnot  |
|   $\nabla$    |   \nabla    | $\partial$ | \partial |           |         |           |         |

###### 字母修饰
1. 上下标
   1. 上标：`^`.  eg. $m^n$ `$m^n$`
   2. 下标：`_`.  eg. $m_2$ `$m_2$`
2. 矢量
   1. $\vec{a}$ `$\vec{a}$`
   2. $\overrightarrow{abcdefg}$ `$\overrightarrow{abcdefg}$` 
3. 字体
   1. $\mathtt{welcome}$ `$\mathtt{welcome}$`
   2. $\mathbb{welcome}$ `$\mathbb{welcome}$`
   3. $\mathsf{welcome}$ `$\mathsf{welcome}$`
4. 括号
   1. 尖括号 $\langle$  $\rangle$ `$\langle$  $\rangle$`
   2. 小括号分为 () & $\left(  \right)$ `$\left($ $\right)$`
   3. 系统默认英文下括号：$(\frac{x}{y})$ 使用`$\left($ $\right)$`转译的括号：$\left(\frac{x}{y}\right)$
5. 求和、极限和积分
   1. 求和：$\sum$ `$\sum$` eg. $ \sum ^ n _ {i=1}  a_i $
   2. 极限：$\lim_{x\to 0}$ `$\lim_{x\to 0}$`
   3. 积分：$\int$ `$\int$` eg. $\int_o^\infty{fxdx}$ `$\int_o^\infty{fxdx}$`
6. 分式与根式
   1. 分式(fraction)：$\frac{a}{b}$ `$\frac{分子}{分母}$` 
   2. 根式：$\sqrt[x]{y}$ `$\sqrt[x]{y}$`
7. 特殊函数
   + `$\函数名$` eg. $\sin X$ $\ln X$ $\max(a,b,c)$
8. 空格
   - LaTeX语法本身会忽略空格的存在
   - 小空格：$a \  b$ `$a \空格 b$`
   - 四格空格： $a \quad b$ `$a \quad b$`
9. 改变字体颜色、大小和字体变更
    * <font color=red>红色的字体</font>
    * <font size=14>改变字号大小</font>
    * <font face="仿宋">变更字体</font>
###### 矩阵
1. 基本语法
    1. 起始标记`\begin{matrix}`,结束标记`\end{matrix}` ,每一行末尾标记\\，行间元素之间以&分隔
    $$\begin{matrix}
    1&0&0\\
    0&1&0\\
    0&0&1\\
    \end{matrix}$$
2. 矩阵边框
    * 在起始和结束位置用下列词替换`matrix`
    * `pmatrix` : 小括号边框
    * `bmatrix` : 中括号边框
    * `Bmatrix` : 大括号边框
    * `vmatrix` : 单竖线边框
    * `Vmatrix` : 双竖线边框
3. 省略元素
    * 横省略号：`\cdots`
    * 竖省略号：`\vdots`
    * 斜省略号：`\ddots`
    $$\begin{bmatrix}
    {a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\
    {a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\
    {\vdots}&{\vdots}&{\ddots}&{\vdots}\\
    {a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\
    \end{bmatrix}$$
4. 阵列
    * 在起始和结束位置替换`array`
    * 对齐方式：在{array}后以{}逐行统一声名
        * 左对齐：l；居中：c；右对齐：r；
        * 竖直线：在声明对齐方式时，插入｜ 建立竖直线；
    * 插入水平线：`\hline`
    
    $$
    \begin{array}{c|l|l|l}
    {↓}&{a}&{b}&{c}\\
    \hline
    {R_1}&{aaaaaa}&{bbbbb}&{cccccc}\\
    {R_2}&{a}&{b}&{c}\\
    \end{array}
    $$
5. 方程组
    * 需要cases环境：起始、结束处以{cases}声明
    
    $$
    \begin{cases}
    a_1x+b_1y+c_1z=d_1\\
    a_2x+b_2y+c_2z=d_2\\
    a_3x+b_3y+c_3z=d_3\\
    \end{cases}
    $$