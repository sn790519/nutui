/*! NutUI v1.2.5 Fri May 18 2018 09:29:07 GMT+0800 (中国标准时间) */
webpackJsonpnutui([31],{1065:function(t,e,n){var v=n(1158);"string"==typeof v&&(v=[[t.i,v,""]]),v.locals&&(t.exports=v.locals);n(3)("cdff25b4",v,!0,{})},1158:function(t,e,n){e=t.exports=n(2)(),e.push([t.i,"",""])},1252:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nut-docheader",{attrs:{name:t.$route.name,chName:t.$route.params.chnName,type:"Component",desc:"通用遮罩层，通常被其他组件依赖，亦可单独使用。",showQrCode:!0}}),t._v(" "),n("h5",[t._v("示例")]),t._v(" "),n("nut-codebox",{attrs:{code:t.demo}}),t._v(" "),n("nut-codebox",{attrs:{code:"export default {\n    data(){\n        return{\n          maskShow:false\n        }\n    },\n    methods:{\n      maskOpen(){\n        console.log('maskOpen方法执行了');\n      },\n      maskClose(){\n        console.log('maskClose方法执行了');\n      }\n    }\n}"}}),t._v(" "),n("h5",[t._v("Props")]),t._v(" "),t._m(0),t._v(" "),n("h5",[t._v("Events")]),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")]),t._v(" "),n("th",[t._v("备注")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("visible.sync")]),t._v(" "),n("td",[t._v("显示/隐藏")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td",[t._v('".sync"不可省略')])]),t._v(" "),n("tr",[n("td",[t._v("color")]),t._v(" "),n("td",[t._v("颜色")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("'rgba(0,0,0,.5)'")]),t._v(" "),n("td",[t._v("支持HEX、RGBA")])]),t._v(" "),n("tr",[n("td",[t._v("fade")]),t._v(" "),n("td",[t._v("是否开启渐显渐隐动效")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")]),t._v(" "),n("td")]),t._v(" "),n("tr",[n("td",[t._v("closeOnClickModal")]),t._v(" "),n("td",[t._v("点击遮罩层是否关闭")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")]),t._v(" "),n("td",[t._v("若为false，点击不关闭，但仍会触发'close-mask'事件")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tbl-wrapper"},[n("table",{staticClass:"u-full-width"},[n("thead",[n("tr",[n("th",[t._v("事件名")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("备注")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("open-mask")]),t._v(" "),n("td",[t._v("遮罩层显示时触发")]),t._v(" "),n("td",[t._v("--")])]),t._v(" "),n("tr",[n("td",[t._v("close-mask")]),t._v(" "),n("td",[t._v("遮罩层隐藏时触发")]),t._v(" "),n("td",[t._v("即便在closeOnClickModal为true，不允许点击关闭的时候依然会触发此事件")])])])])])}]}},850:function(t,e,n){function v(t){n(1065)}var s=n(1)(n(942),n(1252),v,null,null);t.exports=s.exports},942:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{demo:'<nut-mask \n:visible.sync="maskShow" \n@open-mask="maskOpen" \n@close-mask="maskClose"\n></nut-mask>',maskShow:!1}},methods:{maskOpen:function(){console.log("maskOpen方法执行了")},maskClose:function(){console.log("maskClose方法执行了")}}}}});