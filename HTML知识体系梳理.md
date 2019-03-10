# 1. 语义化
**开始之前先梳理一下自己的思考和疑问**
* 语义化是必要的吗？
* 什么情况下用语义化？
* 语义化有哪些？   ***
* 语义化的好处和坏处？

1. 语义化是必要的吗？
    
        非必须的，但是了解一下，并没有坏处

2. 什么情况下用语义化？

        一般都是在需要SEO，对机器友好的页面中使用
        还有需要友好排版格式的文章中
3. 语义化有哪些？

        1. 自然语言的延伸
            ruby rt rp
            em
        2. 作为标题摘要的语义类标签
            section
        3. 作为整体结构的语义类标签
            article
            section 
            
            img
4. 语义化的好处和坏处？

        好处：
        1. 使得页面结构化，去掉css标签也有清晰的结构
        2. 增强可读性，易于后期维护
        3. 易于seo,易于机器阅读，有助于爬虫抓取更多的有效信息
        
5. 有哪些常用的语义化的标签   ***

        section： 表示文档的一个区域，或者一个专题组
        aside: 和页面其余内容无关的，独立的部分，可以单独拆出来,可能包含导航，广告等
        nav: 含有多个超链接的区域
        p: 普通的段落
        figure,figcaption: 
```
<figure>
 <img src="https://.....440px-NeXTcube_first_webserver.JPG"/>
 <figcaption>The NeXT Computer used by Tim Berners-Lee at CERN.</figcaption>
</figure>
```