"use strict";(self["webpackChunkchangba_ui_doc"]=self["webpackChunkchangba_ui_doc"]||[]).push([[575],{15575:function(e,t,a){a.r(t),a.d(t,{default:function(){return n}});var c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("doc-page-section",[a("p",[e._v("\n      在一组备选项中进行多选\n    ")]),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("基础用法")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form-group",{attrs:{label:"演示："}},[a("cb-checkbox",{model:{value:e.test1,callback:function(t){e.test1=t},expression:"test1"}},[e._v("选项1")]),e._v(" "),a("cb-checkbox",{model:{value:e.test6,callback:function(t){e.test6=t},expression:"test6"}},[e._v("选项2")])],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[a("textarea",[e._v('<cb-form-group label="演示：">\n  <cb-checkbox v-model="test1">选项1</cb-checkbox>\n  <cb-checkbox v-model="test6">选项2</cb-checkbox>\n</cb-form-group>\n          ')])])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("禁用状态")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form-group",{attrs:{label:"演示："}},[a("cb-checkbox",{attrs:{disabled:""},model:{value:e.test2,callback:function(t){e.test2=t},expression:"test2"}},[e._v("选项1")]),e._v(" "),a("cb-checkbox",{attrs:{disabled:""},model:{value:e.test3,callback:function(t){e.test3=t},expression:"test3"}},[e._v("选项2")])],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[a("textarea",[e._v('<cb-form-group label="演示：">\n  <cb-checkbox v-model="test2" disabled>选项1</cb-checkbox>\n  <cb-checkbox v-model="test3" disabled>选项2</cb-checkbox>\n</cb-form-group>\n          ')])])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("复选框组")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form-group",{attrs:{label:"垂直："}},[a("cb-checkbox-group",{model:{value:e.test4,callback:function(t){e.test4=t},expression:"test4"}},[a("cb-checkbox",{attrs:{value:"1"}},[e._v("选项1")]),e._v(" "),a("cb-checkbox",{attrs:{value:"2"}},[e._v("选项2")]),e._v(" "),a("cb-checkbox",{attrs:{value:"3"}},[e._v("选项3")])],1)],1),e._v(" "),a("cb-form-group",{attrs:{label:"水平："}},[a("cb-checkbox-group",{attrs:{inline:""},model:{value:e.test5,callback:function(t){e.test5=t},expression:"test5"}},[a("cb-checkbox",{attrs:{value:"1"}},[e._v("选项1")]),e._v(" "),a("cb-checkbox",{attrs:{value:"2"}},[e._v("选项2")]),e._v(" "),a("cb-checkbox",{attrs:{value:"3"}},[e._v("选项3")])],1)],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[a("textarea",[e._v('<cb-form-group label="垂直：">\n  <cb-checkbox-group v-model="test4">\n    <cb-checkbox value="1">选项1</cb-checkbox>\n    <cb-checkbox value="2">选项2</cb-checkbox>\n    <cb-checkbox value="3">选项3</cb-checkbox>\n  </cb-checkbox-group>\n</cb-form-group>\n<cb-form-group label="水平：">\n  <cb-checkbox-group v-model="test5" inline>\n    <cb-checkbox value="1">选项1</cb-checkbox>\n    <cb-checkbox value="2">选项2</cb-checkbox>\n    <cb-checkbox value="3">选项3</cb-checkbox>\n  </cb-checkbox-group>\n</cb-form-group>\n          ')])])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("cb-checkbox 属性")]),e._v(" "),a("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[a("doc-table",{attrs:{data:e.prop},scopedSlots:e._u([{key:"default",fn:function(t){var c=t.item;return[a("td",[e._v(e._s(c.name))]),e._v(" "),a("td",[e._v(e._s(c.desc))]),e._v(" "),a("td",[e._v(e._s(c.type))]),e._v(" "),a("td",[e._v(e._s(c.value))]),e._v(" "),a("td",[e._v(e._s(c.default))])]}}])},[a("template",{slot:"header"},[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("可选值")]),e._v(" "),a("th",[e._v("默认值")])])],2)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("cb-checkbox 事件")]),e._v(" "),a("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[a("doc-table",{attrs:{data:e.event},scopedSlots:e._u([{key:"default",fn:function(t){var c=t.item;return[a("td",[e._v(e._s(c.name))]),e._v(" "),a("td",[e._v(e._s(c.desc))])]}}])},[a("template",{slot:"header"},[a("th",[e._v("名称")]),e._v(" "),a("th",[e._v("说明")])])],2)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("cb-checkbox-group 属性")]),e._v(" "),a("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[a("doc-table",{attrs:{data:e.groupProp},scopedSlots:e._u([{key:"default",fn:function(t){var c=t.item;return[a("td",[e._v(e._s(c.name))]),e._v(" "),a("td",[e._v(e._s(c.desc))]),e._v(" "),a("td",[e._v(e._s(c.type))]),e._v(" "),a("td",[e._v(e._s(c.value))]),e._v(" "),a("td",[e._v(e._s(c.default))])]}}])},[a("template",{slot:"header"},[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("可选值")]),e._v(" "),a("th",[e._v("默认值")])])],2)],1)],1)},b=[],o={name:"DemoFormCheckbox",data:function(){return{test1:!1,test2:!0,test3:!1,test4:[],test5:[],test6:!1,prop:[{name:"v-model",desc:"绑定值，获取和设置内容。",type:"string / number / boolean",value:"—",default:"—"},{name:"value",desc:"复选框的 value",type:"string / number / boolean",value:"—",default:"—"},{name:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"},{name:"name",desc:"原生 name 属性",type:"string",value:"—",default:"—"}],event:[{name:"change",desc:"绑定值变化时触发的事件",param:"选中的复选框的 value 值"}],groupProp:[{name:"v-model",desc:"绑定值，获取和设置内容。",type:"string / number / boolean",value:"—",default:"—"},{name:"inline",desc:"是否水平排列",type:"boolean",value:"—",default:"false"},{name:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"},{name:"name",desc:"原生 name 属性",type:"string",value:"—",default:"—"}]}}},s=o,l=a(1001),v=(0,l.Z)(s,c,b,!1,null,null,null),n=v.exports}}]);