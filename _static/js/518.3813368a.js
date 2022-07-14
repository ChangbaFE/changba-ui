"use strict";(self["webpackChunkchangba_ui_docs"]=self["webpackChunkchangba_ui_docs"]||[]).push([[518],{2518:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=function(){var t=this,e=t._self._c;return e("doc-page-section",[e("p",[t._v("\n      在保留当前页面状态的情况下，告知用户并承载相关操作。\n    ")]),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("基础用法")]),t._v(" "),e("cb-tabs",[e("cb-tab-pane",{attrs:{label:"示例"}},[e("cb-button",{on:{click:t.showDialog}},[t._v("显示 test-window.vue 对话框")])],1),t._v(" "),e("cb-tab-pane",{attrs:{label:"代码"}},[e("doc-highlight",[e("textarea",[t._v("<template>\n  <cb-button @click=\"showDialog\">显示 test-window.vue 对话框</cb-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    async showDialog() {\n      const { button } = await this.$cbDialog(() => import('./test-window'), {\n        title: '测试对话框标题'\n      });\n\n      if (button == 'ok') {\n        console.log('调用者: 确认按钮');\n      }\n    }\n  }\n}\n<\/script>\n          ")])])],1)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("对话框 test-window.vue 代码")]),t._v(" "),e("cb-box",[e("doc-highlight",[e("textarea",[t._v("<template>\n  <p>测试对话框内容</p>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      dialogOptions: {\n        title: '测试对话框标题'\n      }\n    }\n  },\n\n  methods: {\n    async dialogClickButton(button) {\n      if (button === 'ok') {\n        console.log('对话框内: 确认按钮');\n\n        return true;\n      }\n    }\n  }\n}\n<\/script>\n        ")])])],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("全局方法")]),t._v(" "),e("p",[t._v("直接在组件中使用 this 调用")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.method},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.param))]),t._v(" "),e("td",[t._v(t._s(a.returnValue))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("方法名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("返回值")])])],2)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("Options")]),t._v(" "),e("p",[t._v("调用 $cbDialog 方法时，支持传入以下选项：")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.options},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.type))]),t._v(" "),e("td",[t._v(t._s(a.default))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",{attrs:{width:"200"}},[t._v("默认值")])])],2)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("对话框组件内方法")]),t._v(" "),e("p",[t._v("在对话框 .vue 组件中的方法，用 this 调用")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.dialogMethod},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.param))]),t._v(" "),e("td",[t._v(t._s(a.returnValue))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("方法名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("返回值")])])],2)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("对话框组件内 Options")]),t._v(" "),e("p",[t._v("在对话框 .vue 组件中的选项，放置于组件 data 中")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.dialogOptions},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.type))]),t._v(" "),e("td",[t._v(t._s(a.default))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",{attrs:{width:"200"}},[t._v("默认值")])])],2)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("对话框组件内回调")]),t._v(" "),e("p",[t._v("在对话框 .vue 组件中的回调，由对话框管理器主动调用")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.dialogCallback},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.param))]),t._v(" "),e("td",[t._v(t._s(a.returnValue))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("方法名")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("返回值")])])],2)],1)],1)},s=[],o={name:"DemoOtherDialog",data(){return{method:[{name:"$cbDialog",desc:"展示弹窗，其中 name 参数是 .vue 文件的绝对路径，不要以 / 开头，views 目录是根目录。promise 返回值返回一个对象 { button, data } 其中 button 表示按钮名称，data 表示对话框组件返回值（如果有的话）",param:"name, options",returnValue:"promise"}],options:[{name:"title",desc:"对话框标题",type:"string",default:"—"},{name:"width",desc:"对话框宽度，单位像素",type:"number",default:"600"},{name:"hideClose",desc:"是否隐藏对话框关闭按钮",type:"boolean",default:"false"},{name:"buttons",desc:"对话框按钮的配置。如果是对象则 key 表示按钮名称，value 表示按钮文本；如果是数组，则每个数组元素为一个对象，对象 key 表示按钮名称，value 表示按钮文案。如果需要控制按钮显示顺序，则可以使用数组类型。注意：按钮名称为 ok 或 yes 的时候，按钮显示为蓝色。",type:"object / array",default:"{ ok: '确认', cancel: '取消' }"},{name:"props",desc:"对话框传参，会把对象中相应 key 的 value 传递到对话框组件的 props 属性中。",type:"object",default:"—"}],dialogMethod:[{name:"$autoAdjustPosition",desc:"自动调整对话框大小和位置，当你异步改变了对话框内容高度的时候，请手动调用此方法。",param:"—",returnValue:"—"},{name:"$setTitle",desc:"设置对话框标题栏。",param:"text",returnValue:"—"},{name:"$setButton",desc:"设置对话框按钮文案。button 表示按钮名称，例如 ok",param:"button, text",returnValue:"—"},{name:"$setButtons",desc:"批量设置对话框按钮。buttons 意义与上表中的 buttons 一致。",param:"buttons",returnValue:"—"}],dialogOptions:[{name:"dialogOptions",desc:"对话框选项，其中 key value 意义与上表 Options 意义一致（无 props）。",type:"object",default:"—"}],dialogCallback:[{name:"dialogClickButton",desc:"用户点击对话框按钮的时候自动调用，参数 button 表示用户按的按钮名称。无返回值：对话框关闭；返回 boolean 值：true 对话框关闭，false 对话框不关闭；返回 object 值：object.close 为 true 或 undefined 关闭对话框，否则不关闭；异步情况下请使用 promise 返回值，意义同上。另外，回调的返回值会放入对话框返回值的 data 属性中。注意：未定义此回调函数，对话框一律关闭。",param:"button",returnValue:"boolean / object / promise"}]}},methods:{async showDialog(){const{button:t}=await this.$cbDialog((()=>a.e(754).then(a.bind(a,9754))));"ok"==t&&console.log("调用者: 确认按钮")}}},d=o,_=a(1001),l=(0,_.Z)(d,n,s,!1,null,null,null),v=l.exports}}]);