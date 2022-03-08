-[v3Layer](https://cloud.tencent.com/developer/article/1768614)


|props参数|
v-model         是否显示弹框
id              弹窗唯一标识
title           标题
content         内容（支持String、带标签内容、自定义插槽内容）***如果content内容比较复杂，推荐使用标签式写法
type            弹框类型（toast|footer|actionsheet|actionsheetPicker|android|ios|contextmenu|drawer|iframe）
layerStyle      自定义弹窗样式
icon            toast图标（loading | success | fail）
shade           是否显示遮罩层
shadeClose      是否点击遮罩时关闭弹窗
lockScroll      是否弹窗出现时将body滚动锁定
opacity         遮罩层透明度
xclose          是否显示关闭图标
xposition       关闭图标位置（left | right | top | bottom）
xcolor          关闭图标颜色
anim            弹窗动画（scaleIn | fadeIn | footer | fadeInUp | fadeInDown | fadeInLeft | fadeInRight）
position        弹出位置（auto | ['100px','50px'] | t | r | b | l | lt | rt | lb | rb）
drawer          抽屉弹窗（top | right | bottom | left）
follow          跟随元素定位弹窗（支持元素.kk #kk 或 [e.clientX, e.clientY]）
time            弹窗自动关闭秒数（1、2、3）
zIndex          弹窗层叠（默认8080）
teleport        指定挂载节点（默认是挂载组件标签位置，可通过teleport自定义挂载位置） teleport="body | #xxx | .xxx"
topmost         置顶当前窗口（默认false）
area            弹窗宽高（默认auto）设置宽度area: '300px' 设置高度area:['', '200px'] 设置宽高area:['350px', '150px']
maxWidth        弹窗最大宽度（只有当area:'auto'时，maxWidth的设定才有效）
maximize        是否显示最大化按钮（默认false）
fullscreen      全屏弹窗（默认false）
fixed           弹窗是否固定
drag            拖拽元素（可定义选择器drag:'.xxx' | 禁止拖拽drag:false）
dragOut         是否允许拖拽到窗口外（默认false）
lockAxis        限制拖拽方向可选: v 垂直、h 水平，默认不限制
resize          是否允许拉伸尺寸（默认false）
btns            弹窗按钮（参数：text|style|disabled|click）
++++++++++++++++++++++++++++++++++++++++++++++
|emit事件触发|
success         层弹出后回调（@success="xxx"）
end             层销毁后回调（@end="xxx"）
++++++++++++++++++++++++++++++++++++++++++++++
|event事件|
onSuccess       层打开回调事件
onEnd           层关闭回调事件