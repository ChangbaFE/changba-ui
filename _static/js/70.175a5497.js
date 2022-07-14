"use strict";(self["webpackChunkchangba_ui_docs"]=self["webpackChunkchangba_ui_docs"]||[]).push([[70],{1070:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var l=function(){var t=this,e=t._self._c;return e("doc-page-section",[e("p",[t._v("\n      下拉选择框\n    ")]),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("基础用法")]),t._v(" "),e("cb-tabs",[e("cb-tab-pane",{attrs:{label:"示例"}},[e("cb-form-group",{attrs:{label:"演示："}},[e("cb-select",{model:{value:t.test1,callback:function(e){t.test1=e},expression:"test1"}},[e("option",{attrs:{value:"1"}},[t._v("选项1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("选项2")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("选项3")])])],1)],1),t._v(" "),e("cb-tab-pane",{attrs:{label:"代码"}},[e("doc-highlight",[e("textarea",[t._v('<cb-form-group label="演示：">\n  <cb-select v-model="test1">\n    <option value="1">选项1</option>\n    <option value="2">选项2</option>\n    <option value="3">选项3</option>\n  </cb-select>\n</cb-form-group>\n          ')])])],1)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("禁用状态")]),t._v(" "),e("cb-tabs",[e("cb-tab-pane",{attrs:{label:"示例"}},[e("cb-form-group",{attrs:{label:"演示："}},[e("cb-select",{attrs:{disabled:""},model:{value:t.test2,callback:function(e){t.test2=e},expression:"test2"}},[e("option",{attrs:{value:"1"}},[t._v("选项1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("选项2")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("选项3")])])],1)],1),t._v(" "),e("cb-tab-pane",{attrs:{label:"代码"}},[e("doc-highlight",[e("textarea",[t._v('<cb-form-group label="演示：">\n  <cb-select v-model="test2" disabled>\n    <option value="1">选项1</option>\n    <option value="2">选项2</option>\n    <option value="3">选项3</option>\n  </cb-select>\n</cb-form-group>\n          ')])])],1)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("基础多选")]),t._v(" "),e("cb-tabs",[e("cb-tab-pane",{attrs:{label:"示例"}},[e("cb-form-group",{attrs:{label:"演示："}},[e("cb-select-plus",{attrs:{multiple:""},model:{value:t.test3,callback:function(e){t.test3=e},expression:"test3"}},[e("option",{attrs:{value:"1"}},[t._v("选项1")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("选项2")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("选项3")])])],1)],1),t._v(" "),e("cb-tab-pane",{attrs:{label:"代码"}},[e("doc-highlight",[e("textarea",[t._v('<cb-form-group label="演示：">\n  <cb-select-plus v-model="test3" multiple>\n    <option value="1">选项1</option>\n    <option value="2">选项2</option>\n    <option value="3">选项3</option>\n  </cb-select-plus>\n</cb-form-group>\n          ')])])],1)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("属性")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.prop},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.type))]),t._v(" "),e("td",[t._v(t._s(a.value))]),t._v(" "),e("td",[t._v(t._s(a.default))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])],2)],1),t._v(" "),e("h2",{staticClass:"doc-page-header"},[t._v("cb-select-plus 属性")]),t._v(" "),e("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[e("doc-table",{attrs:{data:t.selectPlusProp},scopedSlots:t._u([{key:"default",fn:function({item:a}){return[e("td",[t._v(t._s(a.name))]),t._v(" "),e("td",[t._v(t._s(a.desc))]),t._v(" "),e("td",[t._v(t._s(a.type))]),t._v(" "),e("td",[t._v(t._s(a.value))]),t._v(" "),e("td",[t._v(t._s(a.default))])]}}])},[e("template",{slot:"header"},[e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("可选值")]),t._v(" "),e("th",[t._v("默认值")])])],2)],1)],1)},o=[],s={name:"DemoFormSelect",data(){return{test1:"1",test2:"1",test3:[],prop:[{name:"v-model",desc:"绑定值",type:"string / number",value:"—",default:"—"},{name:"disabled",desc:"是否禁用",type:"boolean",value:"—",default:"false"}],selectPlusProp:[{name:"multiple",desc:"是否多选",type:"boolean",value:"—",default:"false"},{name:"width",desc:"组件宽度，单位像素",type:"number / string",value:"—",default:"—"},{name:"options",desc:"下拉框的内容，也可以直接使用 <option> 来定义下拉框的选项。",type:"array",value:"—",default:"—"},{name:"config",desc:"select-plus 的其他选项，具体内容请参考 select2 类库的文档: https://select2.org/configuration/options-api",type:"object",value:"—",default:"—"}]}}},n=s,v=a(1001),c=(0,v.Z)(n,l,o,!1,null,null,null),p=c.exports}}]);