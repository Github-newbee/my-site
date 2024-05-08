---
outline: deep
---

# Markdown基本语法汇总

## 1. 标题

- 类 Setext 形式

```md
This is an H1 （最高阶标题）
=======

This is an H2 （第二阶标题）
----------
```

- 类 Atx 形式

```md
类 Atx 形式则是在行首插入 1 到 6 个 # ，对应到标题 1 到 6 阶，例如：
# this is H1
## this is H2
###### this is H6
```

## 2. 字体

```md
**这是加粗**
__这也是加粗__
*这是倾斜*
_这也是倾斜_
***这是加粗倾斜***
~~这是加删除线~~
```

## 3. 分割线

```md
以下都能实现分割线效果
* * *
***
**********
- - -
_________________
```

## 4. 引用

```md
在需要引用的文字前面加上 >
引用的区块内也可以使用其他的 Markdown 语法，包括标题、列表、代码区块等。
```

**效果**  
> 这是一段引用文字

## 5. 列表

- **无序列表**

```md
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格
```

无序列表使用星号、加号或是减号作为列表标记。

**效果**  

- 这是列表1

- 这是列表2

- 这是列表3

- **有序列表**

```md
1. 列表内容
2. 列表内容
3. 列表内容

注意：序号跟内容之间要有空格
```

**效果**  

1. 列表内容
2. 列表内容
3. 列表内容

- **列表嵌套**

```md
列表可以嵌套，上一级和下一级之间敲三个空格即可。
* 一级无序列表内容

   * 二级无序列表内容
   * 二级无序列表内容
   * 二级无序列表内容
```

* 一级无序列表内容

  - 二级无序列表内容

    - 三级嵌套
  - 二级无序列表内容
  - 二级无序列表内容

## 6. 表格

```md
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

第二行分割表头和内容。
- 有一个就行，为了对齐，多加了几个
文字默认居左
-两边加：表示文字居中
-右边加：表示文字居右
注：原生的语法两边都要用 | 包起来。此处省略
```

**效果**  
表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

## 7. 代码

- 行内代码

```md
使用 `代码` 表示行内代码块。
```

**效果**  
使用 `代码` 表示行内代码块。

- 代码块

使用 ``` 包裹表示代码块

```js
这里是代码块
```

## 8. 段落和换行

**我们在两个不同的文字块之间，一定要空行以示区分，不然就会被归入同一文字块中**  
段落处插入两个以上的空格后回车

## 9. 图像

```md
使用![描述](图片链接地址)插入图像
```

![这是图片的描述](https://cn.vitejs.dev/logo-with-shadow.png)

<test/>

<script setup>
import test from './test.vue'
</script>