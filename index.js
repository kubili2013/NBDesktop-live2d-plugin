let setting = {
    name:"NBDesktop-live2d-plugin",
    model:"22.2017.cba-normal"
}

function dragFunc(id) {
    var Drag = document.getElementById(id);
    Drag.onmousedown = function(event) {
        var ev = event || window.event;
        event.stopPropagation();
        var disX = ev.clientX - Drag.offsetLeft;
        var disY = ev.clientY - Drag.offsetTop;
        document.onmousemove = function(event) {
            var ev = event || window.event;
            Drag.style.left = ev.clientX - disX + "px";
            Drag.style.top = ev.clientY - disY + "px";
            Drag.style.cursor = "move";
        };
    };
    Drag.onmouseup = function() {
        document.onmousemove = null;
        this.style.cursor = "default";
    };
}

let canvas = document.createElement('canvas');
canvas.id = "live2dcanvas";
canvas.style = "position:absolute;bottom:0px;right:0px;z-index:9;";
canvas.height = 900;
canvas.width = 300;
document.body.append(canvas);

let device_script = document.createElement('script');
device_script.src = process.resourcesPath.replace(/resources$/, "").replace(/\\/g, "/") + "plugins/" + setting.name + "/device.min.js"
document.body.append(device_script)

let bundle_script = document.createElement('script');
bundle_script.src = process.resourcesPath.replace(/resources$/, "").replace(/\\/g, "/") + "plugins/" + setting.name + "/bundle.js"
document.body.append(bundle_script)

let test_timer = setInterval(function(){
    if(loadlive2d != undefined ){
        let modelUrl= process.resourcesPath.replace(/resources$/, "").replace(/\\/g, "/") + "plugins/" + setting.name + "/assets/" + setting.model + "/" + setting.model + ".model.json";
        loadlive2d("live2dcanvas", modelUrl);
        dragFunc("live2dcanvas");
        clearInterval(test_timer)
    }
},1000)




