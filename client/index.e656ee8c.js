import{S as t,i as e,s,e as l,a as n,t as r,f as o,g as a,h,d as f,j as c,k as i,l as u,b as g,q as p,c as d,n as m,p as v}from"./client.0bc3aae5.js";function E(t,e,s){const l=t.slice();return l[1]=e[s],l}function b(t){let e,s,g,p,d=t[1].title+"";return{c(){e=l("li"),s=l("a"),g=r(d),this.h()},l(t){e=o(t,"LI",{});var l=a(e);s=o(l,"A",{rel:!0,href:!0});var n=a(s);g=h(n,d),n.forEach(f),l.forEach(f),this.h()},h(){c(s,"rel","prefetch"),c(s,"href",p="blog/"+t[1].slug)},m(t,l){i(t,e,l),n(e,s),n(s,g)},p(t,e){1&e&&d!==(d=t[1].title+"")&&u(g,d),1&e&&p!==(p="blog/"+t[1].slug)&&c(s,"href",p)},d(t){t&&f(e)}}}function j(t){let e,s,u,j,x,y=t[0],B=[];for(let e=0;e<y.length;e+=1)B[e]=b(E(t,y,e));return{c(){e=g(),s=l("h1"),u=r("Recent posts"),j=g(),x=l("ul");for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){p('[data-svelte="svelte-hfp9t8"]',document.head).forEach(f),e=d(t),s=o(t,"H1",{});var l=a(s);u=h(l,"Recent posts"),l.forEach(f),j=d(t),x=o(t,"UL",{class:!0});var n=a(x);for(let t=0;t<B.length;t+=1)B[t].l(n);n.forEach(f),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){i(t,e,l),i(t,s,l),n(s,u),i(t,j,l),i(t,x,l);for(let t=0;t<B.length;t+=1)B[t].m(x,null)},p(t,[e]){if(1&e){let s;for(y=t[0],s=0;s<y.length;s+=1){const l=E(t,y,s);B[s]?B[s].p(l,e):(B[s]=b(l),B[s].c(),B[s].m(x,null))}for(;s<B.length;s+=1)B[s].d(1);B.length=y.length}},i:m,o:m,d(t){t&&f(e),t&&f(s),t&&f(j),t&&f(x),v(B,t)}}}function x(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function y(t,e,s){let{posts:l}=e;return t.$$set=t=>{"posts"in t&&s(0,l=t.posts)},[l]}export default class extends t{constructor(t){var r;super(),document.getElementById("svelte-1frg2tf-style")||((r=l("style")).id="svelte-1frg2tf-style",r.textContent="ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",n(document.head,r)),e(this,t,y,j,s,{posts:0})}}export{x as preload};
