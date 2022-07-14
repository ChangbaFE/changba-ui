"use strict";(self["webpackChunkchangba_ui_docs"]=self["webpackChunkchangba_ui_docs"]||[]).push([[751],{9751:function(t,e,c){c.r(e),c.d(e,{default:function(){return b}});var s=function(){var t=this,e=t._self._c;return e("doc-page-section",[e("p",[t._v("\n      悬浮出现在页面角落，显示全局的通知提醒消息。\n    ")]),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("基础用法")]),t._v(" "),e("cb-tabs",[e("cb-tab-pane",{staticClass:"queue",attrs:{label:"示例"}},[e("cb-button",{on:{click:function(e){return t.$cbNotify.notice("这是提示文案")}}},[t._v("显示通知（自动关闭）")]),t._v(" "),e("cb-button",{on:{click:function(e){return t.$cbNotify.notice({hide:!1,text:"这里是提示文案"})}}},[t._v("显示通知（不会自动关闭）")])],1),t._v(" "),e("cb-tab-pane",{attrs:{label:"代码"}},[e("doc-highlight",[e("textarea",[t._v("<cb-button @click=\"$cbNotify.notice('这是提示文案')\">显示通知（自动关闭）</cb-button>\n<cb-button @click=\"$cbNotify.notice({ hide: false, text: '这里是提示文案' })\">显示通知（不会自动关闭）</cb-button>\n          ")])])],1)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("带有倾向性")]),t._v(" "),e("cb-tabs",[e("cb-tab-pane",{staticClass:"queue",attrs:{label:"示例"}},[e("cb-button",{on:{click:function(e){return t.$cbNotify.success("这是提示文案")}}},[t._v("成功")]),t._v(" "),e("cb-button",{on:{click:function(e){return t.$cbNotify.notice("这是提示文案")}}},[t._v("警告")]),t._v(" "),e("cb-button",{on:{click:function(e){return t.$cbNotify.info("这是提示文案")}}},[t._v("信息")]),t._v(" "),e("cb-button",{on:{click:function(e){return t.$cbNotify.error("这是提示文案")}}},[t._v("错误")])],1),t._v(" "),e("cb-tab-pane",{attrs:{label:"代码"}},[e("doc-highlight",[e("textarea",[t._v("<cb-button @click=\"$cbNotify.success('这是提示文案')\">成功</cb-button>\n<cb-button @click=\"$cbNotify.notice('这是提示文案')\">警告</cb-button>\n<cb-button @click=\"$cbNotify.info('这是提示文案')\">信息</cb-button>\n<cb-button @click=\"$cbNotify.error('这是提示文案')\">错误</cb-button>\n          ")])])],1)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("全局方法")]),t._v(" "),e("p",[t._v("直接在组件中使用 this 调用")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.method},scopedSlots:t._u([{key:"default",fn:function({item:c}){return[e("td",[t._v(t._s(c.name))]),t._v(" "),e("td",[t._v(t._s(c.desc))]),t._v(" "),e("td",[t._v(t._s(c.param))]),t._v(" "),e("td",[t._v(t._s(c.returnValue))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("方法名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("返回值")])])],2)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("Options")]),t._v(" "),e("cb-box",[e("p",[t._v("请参考 "),e("a",{attrs:{href:"https://github.com/sciactive/pnotify/tree/v3#configuration-defaults--options",target:"_blank"}},[t._v("PNotify 官方文档的 Options 部分")])])])],1)},o=[],n={name:"DemoNoticeNotification",data(){return{test1:"",test2:"",method:[{name:"$cbNotify.notice",desc:"展示警告通知，默认 3 秒自动关闭",param:"message / options",returnValue:"—"},{name:"$cbNotify.success",desc:"展示成功通知，默认 3 秒自动关闭",param:"message / options",returnValue:"—"},{name:"$cbNotify.info",desc:"展示信息通知，默认 3 秒自动关闭",param:"message / options",returnValue:"—"},{name:"$cbNotify.error",desc:"展示错误通知，默认 1 分钟自动关闭",param:"message / options",returnValue:"—"}],options:[{name:"width",desc:"弹窗宽度，单位为 px",type:"number / string",default:"396px"},{name:"hideClose",desc:"是否隐藏弹窗关闭按钮",type:"boolean",default:"false"},{name:"placeholder",desc:"用于 prompt 弹窗，设置输入框 placeholder 内容",type:"string",default:"—"},{name:"label",desc:"用于 prompt 弹窗，设置输入框 label 内容",type:"string",default:"—"},{name:"multiline",desc:"用于 prompt 弹窗，是否是多行输入框。",type:"boolean",default:"false"},{name:"rows",desc:"用于 prompt 弹窗，设置多行输入框行数。",type:"number",default:"1"},{name:"rules",desc:"用于 prompt 弹窗，设置输入框的表单验证规则，具体规则参考表单验证章节。",type:"object",default:"—"},{name:"defaultValue",desc:"用于 prompt 弹窗，设置输入框默认值。",type:"string",default:"—"},{name:"beforeClose",desc:"用于 prompt 弹窗，关闭前的回调，可用于暂停弹窗的关闭。isOk 表示是否按了确认按钮；text 表示输入的内容；button 表示按下的按钮名称，可能值是 yes / cancel / close；promise resolve false 时阻止弹窗关闭，否则弹窗关闭。",type:"({ isOk, text, button }) => promise",default:"—"}],prop:[{name:"v-confirm",desc:"使用这个指令会拦截组件的 click 和 submit 事件，用户确认后才会继续执行原事件处理函数。如需要定制确认弹窗的文案，可以给指令传递 string 或 object 类型的参数，string 类型参数只设置标题，object 类型参数可以设置标题和内容 { title, message }",type:"—",value:"—",default:"—"}]}},methods:{showAlert(){this.$alert("这是一段内容","标题名称")},async showConfirm(){const{isOk:t}=await this.$confirm("你确定要继续吗？","提示");t?this.$cbNotify.success("你按了确认~"):this.$cbNotify.success("你取消了~")},async showPrompt(){const{isOk:t,text:e}=await this.$prompt("请输入昵称","提示",{rules:{required:!0}});t?this.$cbNotify.success(`你按了确认~并输入了 ${e}`):this.$cbNotify.success("你取消了~")},async showPromptAsync(){const{isOk:t,text:e}=await this.$prompt("请输入昵称","提示",{rules:{required:!0},beforeClose({isOk:t,text:e,button:c}){if(console.log(e,c),t)return new Promise((t=>{setTimeout((()=>{t()}),2e3)}))}});t?this.$cbNotify.success(`你按了确认~并输入了 ${e}`):this.$cbNotify.success("你取消了~")}}},a=n,i=c(1001),r=(0,i.Z)(a,s,o,!1,null,"18099cf9",null),b=r.exports}}]);