"use strict";(self["webpackChunkchangba_ui_docs"]=self["webpackChunkchangba_ui_docs"]||[]).push([[668],{9668:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var n=function(){var e=this,t=e._self._c;return t("doc-page-section",[t("p",[e._v("\n      用于选择日期或时间。\n    ")]),e._v(" "),t("h2",{staticClass:"doc-page-header"},[e._v("基础用法")]),e._v(" "),t("cb-tabs",[t("cb-tab-pane",{attrs:{label:"示例"}},[t("cb-form",[t("cb-form-group",{attrs:{label:"日期："}},[t("cb-datetime-picker",{model:{value:e.date1,callback:function(t){e.date1=t},expression:"date1"}})],1)],1)],1),e._v(" "),t("cb-tab-pane",{attrs:{label:"代码"}},[t("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="日期：">\n    <cb-datetime-picker v-model="date" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),t("h2",{staticClass:"doc-page-header"},[e._v("选择日期和时间")]),e._v(" "),t("cb-tabs",[t("cb-tab-pane",{attrs:{label:"示例"}},[t("cb-form",[t("cb-form-group",{attrs:{label:"时间："}},[t("cb-datetime-picker",{attrs:{"use-time":""},model:{value:e.date2,callback:function(t){e.date2=t},expression:"date2"}})],1)],1)],1),e._v(" "),t("cb-tab-pane",{attrs:{label:"代码"}},[t("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="时间：">\n    <cb-datetime-picker use-time v-model="date" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),t("h2",{staticClass:"doc-page-header"},[e._v("选择日期范围")]),e._v(" "),t("cb-tabs",[t("cb-tab-pane",{attrs:{label:"示例"}},[t("cb-form",[t("cb-form-group",{attrs:{label:"起止日期："}},[t("cb-datetime-picker",{attrs:{"use-range":"",begin:e.beginDate1,end:e.endDate1},on:{"update:begin":function(t){e.beginDate1=t},"update:end":function(t){e.endDate1=t}}})],1)],1)],1),e._v(" "),t("cb-tab-pane",{attrs:{label:"代码"}},[t("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="起止日期：">\n    <cb-datetime-picker use-range :begin.sync="beginDate" :end.sync="endDate" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),t("h2",{staticClass:"doc-page-header"},[e._v("选择日期和时间范围")]),e._v(" "),t("cb-tabs",[t("cb-tab-pane",{attrs:{label:"示例"}},[t("cb-form",[t("cb-form-group",{attrs:{label:"起止时间："}},[t("cb-datetime-picker",{attrs:{"use-range":"","use-time":"",begin:e.beginDate2,end:e.endDate2},on:{"update:begin":function(t){e.beginDate2=t},"update:end":function(t){e.endDate2=t}}})],1)],1)],1),e._v(" "),t("cb-tab-pane",{attrs:{label:"代码"}},[t("doc-highlight",[e._v('\n<cb-form>\n  <cb-form-group label="起止时间：">\n    <cb-datetime-picker use-range use-time :begin.sync="beginDate" :end.sync="endDate" />\n  </cb-form-group>\n</cb-form>\n          ')])],1)],1),e._v(" "),t("h2",{staticClass:"doc-page-header"},[e._v("属性")]),e._v(" "),t("cb-box",{attrs:{"body-class":"table-responsive no-padding"}},[t("doc-table",{attrs:{data:e.prop},scopedSlots:e._u([{key:"default",fn:function({item:a}){return[t("td",[e._v(e._s(a.name))]),e._v(" "),t("td",[e._v(e._s(a.desc))]),e._v(" "),t("td",[e._v(e._s(a.type))]),e._v(" "),t("td",[e._v(e._s(a.value))]),e._v(" "),t("td",[e._v(e._s(a.default))])]}}])},[t("template",{slot:"header"},[t("th",[e._v("参数")]),e._v(" "),t("th",[e._v("说明")]),e._v(" "),t("th",[e._v("类型")]),e._v(" "),t("th",[e._v("可选值")]),e._v(" "),t("th",[e._v("默认值")])])],2)],1)],1)},c=[],b={name:"DemoFormDatetimePicker",data(){return{date1:"",date2:"",beginDate1:"",endDate1:"",beginDate2:"",endDate2:"",prop:[{name:"v-model",desc:"绑定值，获取和设置日期。",type:"string",value:"—",default:"—"},{name:"use-range",desc:"是否使用日期范围选择",type:"boolean",value:"—",default:"false"},{name:"begin",desc:"获取和设置开始时间，请使用 .sync 修饰符。",type:"string",value:"—",default:"—"},{name:"end",desc:"获取和设置结束时间，请使用 .sync 修饰符。",type:"string",value:"—",default:"—"},{name:"use-time",desc:"是否使用时间",type:"boolean",value:"—",default:"false"},{name:"separator",desc:"输入框中时间范围的分隔符。",type:"string",value:"—",default:"至"},{name:"width",desc:"设置输入框宽度，单位 px。",type:"string / number",value:"—",default:"—"}]}}},r=b,s=a(1001),d=(0,s.Z)(r,n,c,!1,null,null,null),l=d.exports}}]);