(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ea34a1"],{1977:function(t,s,e){"use strict";var n=e("fa99"),a=e.n(n);a.a},"6f6b":function(t,s,e){},9629:function(t,s,e){"use strict";var n=e("6f6b"),a=e.n(n);a.a},9768:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("h2",[t._v("News Page")]),e("div",{staticClass:"news__wrapper"},t._l(t.news,(function(t,s){return e("CardNews",{key:s,attrs:{card:t}})})),1)])},a=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"news"},[e("img",{staticClass:"news__img",attrs:{src:t.card.imgUrl}}),e("div",{staticClass:"news__wrapper"},[e("div",{staticClass:"news__title"},[t._v(t._s(t.card.title))]),e("div",{staticClass:"news__text"},[t._v(t._s(t.card.preview))])])])},c=[],i={props:{card:Object}},l=i,u=(e("1977"),e("2877")),o=Object(u["a"])(l,r,c,!1,null,null,null),w=o.exports,d={computed:{news:function(){return this.$store.getters["news/getNews"]}},created:function(){var t=this;this.$store.dispatch("news/saveNews").then((function(){return console.log(t.news)}))},components:{CardNews:w}},_=d,f=(e("9629"),Object(u["a"])(_,n,a,!1,null,"4c6db3fb",null));s["default"]=f.exports},fa99:function(t,s,e){}}]);
//# sourceMappingURL=chunk-34ea34a1.e8be332b.js.map