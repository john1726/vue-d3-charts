(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eaf95bb"],{"1dde":function(t,e,a){var r=a("d039"),n=a("b622"),o=a("60ae"),c=n("species");t.exports=function(t){return o>=51||!r((function(){var e=[],a=e.constructor={};return a[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"4de4":function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").filter,o=a("1dde");r({target:"Array",proto:!0,forced:!o("filter")},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,a){var r=a("861d"),n=a("e8b5"),o=a("b622"),c=o("species");t.exports=function(t,e){var a;return n(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!n(a.prototype)?r(a)&&(a=a[c],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},8418:function(t,e,a){"use strict";var r=a("c04e"),n=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var c=r(e);c in t?n.f(t,c,o(0,a)):t[c]=a}},"99af":function(t,e,a){"use strict";var r=a("23e7"),n=a("d039"),o=a("e8b5"),c=a("861d"),i=a("7b0b"),s=a("50c4"),u=a("8418"),d=a("65f0"),f=a("1dde"),h=a("b622"),l=a("60ae"),p=h("isConcatSpreadable"),m=9007199254740991,y="Maximum allowed index exceeded",b=l>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),v=f("concat"),C=function(t){if(!c(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},g=!b||!v;r({target:"Array",proto:!0,forced:g},{concat:function(t){var e,a,r,n,o,c=i(this),f=d(c,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?c:arguments[e],C(o)){if(n=s(o.length),h+n>m)throw TypeError(y);for(a=0;a<n;a++,h++)a in o&&u(f,h,o[a])}else{if(h>=m)throw TypeError(y);u(f,h++,o)}return f.length=h,f}})},b0c0:function(t,e,a){var r=a("83ab"),n=a("9bf2").f,o=Function.prototype,c=o.toString,i=/^\s*function ([^ (]*)/,s="name";!r||s in o||n(o,s,{configurable:!0,get:function(){try{return c.call(this).match(i)[1]}catch(t){return""}}})},b727:function(t,e,a){var r=a("f8c2"),n=a("44ad"),o=a("7b0b"),c=a("50c4"),i=a("65f0"),s=[].push,u=function(t){var e=1==t,a=2==t,u=3==t,d=4==t,f=6==t,h=5==t||f;return function(l,p,m,y){for(var b,v,C=o(l),g=n(C),x=r(p,m,3),w=c(g.length),S=0,A=y||i,E=e?A(l,w):a?A(l,0):void 0;w>S;S++)if((h||S in g)&&(b=g[S],v=x(b,S,C),t))if(e)E[S]=v;else if(v)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:s.call(E,b)}else if(d)return!1;return f?-1:u||d?d:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c8e0:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("ChartTitleComponent",{attrs:{name:t.chartname,desc:t.chartdesc}}),a("section",{staticClass:"chart"},[a("D3SlopeChart",{attrs:{config:t.chartconfig,datum:t.chartdata,title:"Lorem ipsum",source:"Dolor sit amet"}})],1),a("ChartImportComponent",{attrs:{code:t.chartname,link:"https://github.com/Saigesp/vue-d3-charts/blob/master/src/slopechart/d3.slopechart.js"}}),a("ChartTemplateComponent",{attrs:{template:t.chartcode}}),a("ChartDataComponent",{attrs:{desc:t.chartdatadesc,code:t.chartdatacode,config:t.chartdataconfig}}),a("ChartConfigComponent",{attrs:{options:t.chartoptions,custom:t.chartcustomoptions}}),a("ChartColorComponent"),a("ChartStylesComponent",{attrs:{classname:"slopechart"}}),a("section",{staticClass:"chart code"},[a("h3",[t._v("Examples")]),a("SlopeChartExampleBasic"),a("SlopeChartExampleHighlight"),a("SlopeChartExampleColors")],1)],1)},n=[],o=(a("99af"),a("4de4"),a("b0c0"),a("2dd5"),{name:"SlopeChart",data:function(){return{chartname:"D3SlopeChart",chartdesc:"A slope chart displays information as a series of lines between two points.",chartcode:'<D3SlopeChart :config="chart_config" :datum="chart_data"></D3SlopeChart>',chartoptions:["margin","key","currentKey","values","color","opacity","transition","axis","points"],chartcustomoptions:{axis:{default:"axis: {\n    titles: false\n  }",desc:"Axis custom properties.",example:'<code>axis: {titles: ["Yesterday", "Today"]}</code>'}},chartconfig:{key:"name",currentKey:"Lorem",color:{current:"#41B882"},axis:{titles:["2000","2015"]},transition:{ease:"easeBounceOut",duration:1e3}},chartdata:[{start:5355,end:5855,name:"Lorem"},{start:6160,end:6510,name:"Ipsum"},{start:3029,end:5138,name:"Dolor"},{start:2116,end:2904,name:"Sit"},{start:3503,end:4408,name:"Amet"}],chartdatadesc:"An <strong>objects array</strong> is expected, with each object as a line",chartdatacode:'chart_data = [{\n  yesterday: 5355,\n  today: 5855,\n  name: "Lorem"\n},{\n  yesterday: 6160,\n  today: 6510,\n  name: "Ipsum"\n}]',chartdataconfig:'<code>key: "name", values: ["yesterday","today"]</code>'}},mounted:function(){var t=this;setTimeout((function(){t.chartdata=t.chartdata.filter((function(t){return"Lorem"!=t.name})),t.chartdata.push({start:5085,end:9321,name:"Lorem"})}),2e3),setTimeout((function(){t.chartdata=t.chartdata.filter((function(t){return"Sit"!=t.name}))}),4e3),setTimeout((function(){t.chartdata=t.chartdata.concat([{start:7500,end:9960,name:"Aperiam"}])}),6e3)}}),c=o,i=a("2877"),s=Object(i["a"])(c,r,n,!1,null,null,null);e["default"]=s.exports},e8b5:function(t,e,a){var r=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=chunk-0eaf95bb.7b492158.js.map