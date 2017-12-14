# 两分钟搞定二维码生成
### 一丶如何使用
```
let qrCode = qr.QRCode.create("http://www.baidu.com",600,600);
this.addChild(qrCode); //两句？没错只有两句~嘿嘿
```

重点说下create中有四个参数分别是(url,生成后宽度，高度，二维码颜色)
嗯，没错已经结束了，其实也没啥重点
### 二丶如何导入
下载我的项目~ https://github.com/shuhaoSCode/EgretQRCodeHelper （跪求star），把src中的qr文件夹拷贝到自己的qr文件夹中。
### 三丶项目由来
项目有需求用到动态生成二维码，于是在github上找到了 https://github.com/cxh612/qrCode 这个。首先感谢原作者的代码贡献，不过发现在使用中有问题，如生成速度慢，最主要设置大一些后还会很多色块挤在一起，黑乎乎一片，查看源代码后发现问题所在并加以修改和优化。
