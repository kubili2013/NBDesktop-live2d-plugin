# NB Desktop Live2d 插件

## 特别说明

* 父项目 [summerscar/live2dDemo](https://github.com/summerscar/live2dDemo)
* 原项目中内置了多种通过网络收集来的 live2d 模型。


## 安装方法

* 下载本插件 `clone or download` --> `Download ZIP`
* 解压到 `NB Desktop/plugins/` 文件夹下
* 重启 `NB Desktop`，个性设置，插件，勾选后便可立即启用

## 更换`live2d`模型

* 插件目录查找 `assets` 文件夹每一个文件夹内都是 `live2d` 模型，文件夹名称就是`live2d` 名称。
* 编辑`index.js`脚本文件，首先找到这句

```javascript
let setting = {
    name:"NBDesktop-live2d-plugin",
    model:"22.2017.cba-normal"
}
```

然后将 `model` 换成你要更换的`live2d`的文件名，例如：

```javascript
let setting = {
    name:"NBDesktop-live2d-plugin",
    model:"Bronya"
}
```
这个时候，程序会自动去`assets`文件夹中，找寻`Bronya` 下的 `Bronya.model.json`，注意两个名字必须保持规则一致 `*****` 和 `*****.model.json`。