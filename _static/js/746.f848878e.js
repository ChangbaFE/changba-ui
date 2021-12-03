"use strict";(self["webpackChunkchangba_ui_doc"]=self["webpackChunkchangba_ui_doc"]||[]).push([[746],{57746:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("doc-page-section",[a("p",[e._v("\n      用于选择日期或时间。\n    ")]),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("基础用法")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form",[a("cb-form-group",{attrs:{label:"日期："}},[a("cb-datetime-picker",{model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1)],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="日期：">\n    <cb-datetime-picker v-model="date" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("选择日期和时间")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form",[a("cb-form-group",{attrs:{label:"时间："}},[a("cb-datetime-picker",{attrs:{"use-time":""},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1)],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="时间：">\n    <cb-datetime-picker use-time v-model="date" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("选择日期范围")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form",[a("cb-form-group",{attrs:{label:"起止日期："}},[a("cb-datetime-picker",{attrs:{"use-range":"",begin:e.beginDate1,end:e.endDate1},on:{"update:begin":function(t){e.beginDate1=t},"update:end":function(t){e.endDate1=t}}})],1)],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="起止日期：">\n    <cb-datetime-picker use-range :begin.sync="beginDate" :end.sync="endDate" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("选择日期和时间范围")]),e._v(" "),a("cb-tabs",[a("cb-tab-pane",{attrs:{label:"示例"}},[a("cb-form",[a("cb-form-group",{attrs:{label:"起止时间："}},[a("cb-datetime-picker",{attrs:{"use-range":"","use-time":"",begin:e.beginDate2,end:e.endDate2},on:{"update:begin":function(t){e.beginDate2=t},"update:end":function(t){e.endDate2=t}}})],1)],1)],1),e._v(" "),a("cb-tab-pane",{attrs:{label:"代码"}},[a("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="起止时间：">\n    <cb-datetime-picker use-range use-time :begin.sync="beginDate" :end.sync="endDate" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),a("h2",{staticClass:"doc-page-header"},[e._v("属性")]),e._v(" "),a("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[a("doc-table",{attrs:{data:e.prop},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.item;return[a("td",[e._v(e._s(n.name))]),e._v(" "),a("td",[e._v(e._s(n.desc))]),e._v(" "),a("td",[e._v(e._s(n.type))]),e._v(" "),a("td",[e._v(e._s(n.value))]),e._v(" "),a("td",[e._v(e._s(n.default))])]}}])},[a("template",{slot:"header"},[a("th",[e._v("参数")]),e._v(" "),a("th",[e._v("说明")]),e._v(" "),a("th",[e._v("类型")]),e._v(" "),a("th",[e._v("可选值")]),e._v(" "),a("th",[e._v("默认值")])])],2)],1)],1)},c=[],r={name:"DemoFormDatetimePicker",data:function(){return{date1:"",date2:"",beginDate1:"",endDate1:"",beginDate2:"",endDate2:"",prop:[{name:"v-model",desc:"绑定值，获取和设置日期。",type:"string",value:"—",default:"—"},{name:"use-range",desc:"是否使用日期范围选择",type:"boolean",value:"—",default:"false"},{name:"begin",desc:"获取和设置开始时间，请使用 .sync 修饰符。",type:"string",value:"—",default:"—"},{name:"end",desc:"获取和设置结束时间，请使用 .sync 修饰符。",type:"string",value:"—",default:"—"},{name:"use-time",desc:"是否使用时间",type:"boolean",value:"—",default:"false"},{name:"separator",desc:"输入框中时间范围的分隔符。",type:"string",value:"—",default:"至"},{name:"width",desc:"设置输入框宽度，单位 px。",type:"string / number",value:"—",default:"—"}]}}},b=r,s=a(1001),d=(0,s.Z)(b,n,c,!1,null,null,null),l=d.exports}}]);