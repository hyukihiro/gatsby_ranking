(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{164:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(176),o=a(174);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},169:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(168),u=a.n(s);a.d(e,"Link",function(){return u.a}),a.d(e,"withPrefix",function(){return s.withPrefix}),a.d(e,"navigate",function(){return s.navigate}),a.d(e,"push",function(){return s.push}),a.d(e,"replace",function(){return s.replace}),a.d(e,"navigateTo",function(){return s.navigateTo});var c=a(170),d=a.n(c);a.d(e,"PageRenderer",function(){return d.a});var l=a(34);a.d(e,"parsePath",function(){return l.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},170:function(t,e,a){var n;t.exports=(n=a(172))&&n.default||n},171:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby with Redux"}}}}},172:function(t,e,a){"use strict";a.r(e);a(35);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),s=a(57),u=a(3),c=function(t){var e=t.location,a=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(s.a,Object.assign({location:e,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},173:function(t,e,a){},174:function(t,e,a){"use strict";var n=a(175),r=a(0),i=a.n(r),o=a(1),s=a.n(o),u=a(177),c=a.n(u),d=a(169);function l(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,s=t.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}l.defaultProps={lang:"ja",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l;var p="1025518380"},175:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby with Redux",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},176:function(t,e,a){"use strict";var n=a(171),r=a(0),i=a.n(r),o=a(1),s=a.n(o),u=a(169),c=(a(55),function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))});c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var d=c,l=(a(173),function(t){var e=t.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e))},data:n})});l.propTypes={children:s.a.node.isRequired};e.a=l}}]);
//# sourceMappingURL=component---src-pages-404-js-e5f6ba5ef1daafbceb75.js.map