let live2d_plugin = Plugin.getPluginByName("Live 2D");
let live2d_config = JSON.parse(fs.readFileSync(live2d_plugin.path + "plugin.json"))

let live2d_template_tab = `
<div class="tab">
<h2>Live2D  插件配置</h2>

<div class="list">
<select id="live2d-module-selector" 
style="margin-top: 2px;margin-bottom: 4px;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);-webkit-border-radius: 8-moz-border-radius: 8;border-radius: 8px;text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;font-size: 16px;padding: 10px 25px 10px 25px;text-decoration: none;">     
</select>&nbsp;&nbsp;<button id="live2d-setting-btn" onclick="settingLive2dModule()">启用选择的模型</button>&nbsp;&nbsp;<button id="live2d-setting-btn" onclick="Plugin.endPlugin('Live 2D')">移除插件</button>
</div>
</div>
<script>Controller.reInit();loadLive2DModules();</script>
`;

function loadLive2DV() {
    $(".menu").append('<li><a href="javascript:void(0)"><img src="' + live2d_plugin.path + '/' + live2d_plugin.image + '"><span>Live 2D 插件</span></a></li>');
    $(".content").append(live2d_template_tab);
}

function loadLive2DModules() {
    let files = fs.readdirSync(live2d_plugin.path + "assets\\");
    // let files_name_list = [];
    files.forEach((item,index) => {
        let stat = fs.statSync(live2d_plugin.path + "assets\\" + item);
        if (stat.isDirectory() === true) { 
            // files_name_list.push(item);
            $("#live2d-module-selector").append("<option value='"+item+"'>"+item+"</option>");
        }
    });

}

function settingLive2dModule(){
    live2d_config.setting.model =  $("#live2d-module-selector").val();
    fs.writeFileSync(live2d_config.path + "plugin.json", JSON.stringify(live2d_config, null, 4));
    // refresh
    ipcRenderer.send("reload-plugins");
    Plugin.startDesktopWidgetPlugin('Live 2D')
}

$(function () {
    loadLive2DV();
});