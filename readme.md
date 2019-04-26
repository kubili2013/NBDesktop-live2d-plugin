# NB Desktop Live2d 插件

## 特别说明

* 父项目 [summerscar/live2dDemo](https://github.com/summerscar/live2dDemo)
* 原项目中内置了多种通过网络收集来的 live2d 模型。


## 安装方法

* 下载本插件 `clone or download` --> `Download ZIP`
* 解压到 `NB Desktop/plugins/` 文件夹下
* 修改 `NB Desktop/plugins/setting.json` 文件,你看到的可能是这样的：
```json

{
    "current": [
        {
            "type": "web",
            "url": "https://bilibili.com"
        }
    ]
}

```
修改成这样的：

```json
{
    "current": [
        {
            "type": "web",
            "url": "https://bilibili.com",
            "plugins": [
                {
                    "name": "NBDesktop-live2d-plugin"
                }
            ]
        }
    ]
}

```

如果你曾经添加过其他插件，那么需要复制一条 `{"name": "NBDesktop-live2d-plugi"}` 到`plugins` 下中括号里面，注意`‘,’`逗号间隔。

```json
{
    "current": [
        {
            "type": "web",
            "url": "https://bilibili.com",
            "plugins": [
                {
                    "name": "other-plugin"
                },
                {
                    "name": "NBDesktop-live2d-plugi"
                }

            ]
        }
    ]
}

```

> 修改 `setting.json` 要谨慎，格式错误会导致软件运行失败。可以删了重新启动，`setting.json` 将会被重新建立

## 更换`live2d`模型

* 插件目录查找 `assets` 文件夹每一个文件夹内都是 `live2d` 模型，文件夹名称就是`live2d` 名称。
* 编辑`index.js`脚本文件，首先找到这句

```javascript
let modelUrl= process.resourcesPath.replace(/resources$/, "").replace(/\\/g, "/") + "plugins/test/assets/kesyoban/kesyoban.model.json";
```

然后将 `kesyoban/kesyoban` 换成你要更换的`live2d`的文件名，例如：

```javascript
let modelUrl= process.resourcesPath.replace(/resources$/, "").replace(/\\/g, "/") + "plugins/test/assets/Bronya/Bronya.model.json";
```
