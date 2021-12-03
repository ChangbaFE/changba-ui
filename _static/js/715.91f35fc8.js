"use strict";(self["webpackChunkchangba_ui_doc"]=self["webpackChunkchangba_ui_doc"]||[]).push([[715],{27715:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("doc-page-section",[s("p",[t._v("\n      引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。\n    ")]),t._v(" "),s("h2",{staticClass:"doc-page-header"},[t._v("基础用法")]),t._v(" "),s("cb-tabs",[s("cb-tab-pane",{staticClass:"queue",attrs:{label:"示例"}},[s("cb-steps",{model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[s("cb-step",[t._v("第一步")]),t._v(" "),s("cb-step",[t._v("第二步")]),t._v(" "),s("cb-step",[t._v("第三步")]),t._v(" "),s("cb-step",[t._v("完成")])],1),t._v(" "),s("cb-button",{on:{click:t.next}},[t._v("下一步")])],1),t._v(" "),s("cb-tab-pane",{attrs:{label:"代码"}},[s("doc-highlight",[t._v('\n<cb-steps v-model="step">\n  <cb-step>第一步</cb-step>\n  <cb-step>第二步</cb-step>\n  <cb-step>第三步</cb-step>\n  <cb-step>完成</cb-step>\n</cb-steps>\n          ')])],1)],1),t._v(" "),s("h2",{staticClass:"doc-page-header"},[t._v("属性")]),t._v(" "),s("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[s("doc-table",{attrs:{data:t.prop},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[s("td",[t._v(t._s(a.name))]),t._v(" "),s("td",[t._v(t._s(a.desc))]),t._v(" "),s("td",[t._v(t._s(a.type))]),t._v(" "),s("td",[t._v(t._s(a.value))]),t._v(" "),s("td",[t._v(t._s(a.default))])]}}])},[s("template",{slot:"header"},[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])],2)],1)],1)},c=[],n={name:"DemoNavStep",data:function(){return{step:0,prop:[{name:"value",desc:"绑定 v-model，设置当前激活步骤",type:"number",value:"—",default:"0"}]}},methods:{next:function(){this.step++,this.step>4&&(this.step=0)}}},_=n,v=s(1001),p=(0,v.Z)(_,a,c,!1,null,null,null),l=p.exports}}]);