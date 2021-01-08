# A list of notes for CSS

### 1. CSS Pseudo-elements 伪元素  
1.1 Syntax  
```css
selector::pseudo-element {
    property: value;
}
```
1.2 usage
- The ::first-line Pseudo-element  
- The ::first-letter Pseudo-element  

Several pseudo-elements can also be combined.

```css
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}

p::first-line {
  color: #0000ff;
  font-variant: small-caps;
}
```

- CSS - The ::before Pseudo-element
- CSS - The ::after Pseudo-element

```css
#imgTag {
	position: relative;
	width: 80px;
	}
#imgTag::before {
	position: absolute;
	width: 80px;
	content: url("before.svg");
	}
#imgTag::after {
	position: absolute;
	width: 80px;
	content: url("after.svg");
	}
```

<i>add content before/after the element</i>

According to [wonyun](https://www.cnblogs.com/wonyun/p/5807191.html) :
- 伪元素不属于文档，所以js无法操作它

- 伪元素属于主元素的一部分，因此点击伪元素触发的是主元素的click事件

- 原文说块级元素才能有:before, :after，其实是不妥的，大部分行级元素也可以设置伪元素，但是像img可替换元素，因为其外观和尺寸有外部资源决定，那么如果外部资源正确加载，就会替换掉其内部内容，这时伪元素也会被替换掉，但是当外部资源加载失败时，设置的伪元素是可以起作用的。（替换破损图片）
- `before`, `main`, `after`, 只有`main`能被选中

- 优点

    - 减少dom节点数
    - 让css帮助解决部分js问题，让问题变得简单  

- 缺点
    - 不利于SEO  
    - 无法审查元素，不利于调试  

1.3 exercise  
- Triangle & Triangle with border
```css
.trangle{
    width:0;height:0;border:40px solid; border-color:transparent transparent transparent #F00;
    }
```
To draw a triangle with border, we need to use `::before` & `::after` to draw two different triangle with different color 

<div class="main">
</div>
<style>
    .main{
        position:relative;
        width:0;
        height:0;
    }
    .main:before{
        content:"";
        position:absolute;
        top:3px;
        right:-6px;
        display:block;
        border:20px solid;
        border-color:transparent transparent transparent #fc0;
        index:1;
    }
    .main:after{
        content:"";
        position:absolute;
        display:block;
        top:7px;
        right:0;
        border:16px solid;
        border-color:transparent transparent transparent #900;
        index:2;
    }
</style>
