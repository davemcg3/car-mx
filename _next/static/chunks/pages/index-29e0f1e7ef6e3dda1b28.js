(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4013:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(1664),a=t(5893);function o(){return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Car Mx"}),(0,a.jsx)(r.default,{href:"/",as:"/",children:(0,a.jsx)("a",{children:"Home"})}),"\xa0|\xa0",(0,a.jsx)(r.default,{href:"/the-idea",as:"/the-idea",children:(0,a.jsx)("a",{children:"The Idea"})}),"\xa0|\xa0",(0,a.jsx)(r.default,{href:"/about",as:"/about",children:(0,a.jsx)("a",{children:"About"})})]})}},2167:function(e,n,t){"use strict";var r=t(3038);n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},c=t(1063),i=t(4651),u=t(7426);var l={};function s(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=i.useRouter(),f=o.default.useMemo((function(){var n=c.resolveHref(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?c.resolveHref(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,h=f.as,v=e.children,p=e.replace,b=e.shallow,x=e.scroll,j=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=(n=o.default.Children.only(v))&&"object"===typeof n&&n.ref,g=u.useIntersection({rootMargin:"200px"}),_=r(g,2),m=_[0],E=_[1],w=o.default.useCallback((function(e){m(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,m]);o.default.useEffect((function(){var e=E&&t&&c.isLocalURL(d),n="undefined"!==typeof j?j:a&&a.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&s(a,d,h,{locale:n})}),[h,d,E,j,t,a]);var L={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:u,scroll:i}))}(e,a,d,h,p,b,x,j)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(a,d,h,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var M="undefined"!==typeof j?j:a&&a.locale,k=a&&a.isLocaleDomain&&c.getDomainLocale(h,M,a&&a.locales,a&&a.domainLocales);L.href=k||c.addBasePath(c.addLocale(h,M,a&&a.defaultLocale))}return o.default.cloneElement(n,L)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=a.useRef(),l=a.useState(!1),s=r(l,2),f=s[0],d=s[1],h=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!c&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=t(7294),o=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},6124:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var r=t(1664),a=t(4013),o=t(5893);function c(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(a.Z,{}),(0,o.jsx)("h2",{children:"Updates"}),(0,o.jsx)("div",{children:(0,o.jsxs)("p",{children:["Check out\xa0",(0,o.jsx)(r.default,{href:"/the-idea",as:"/the-idea",children:(0,o.jsx)("a",{children:"The Idea"})}),"\xa0to get a sense of what I'm building.",(0,o.jsx)("br",{}),(0,o.jsx)("small",{children:"davemcg3 20210926"})]})})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);