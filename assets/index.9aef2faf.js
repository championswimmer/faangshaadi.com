import{V as e,O as t,c as o,o as s,a,b as r,m as n,P as i,t as l,F as c,r as d,d as u,e as g}from"./vendor.c5b5f65b.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const s=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,r)=>{const n=new URL(e,s);if(self[t].moduleMap[n])return o(self[t].moduleMap[n]);const i=new Blob([`import * as m from '${n}';`,`${t}.moduleMap['${n}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){r(new Error(`Failed to import: ${e}`)),a(l)},onload(){o(self[t].moduleMap[n]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");var p=Object.defineProperty,h=Object.getOwnPropertyDescriptor;let m=class extends e{};m=((e,t,o,s)=>{for(var a,r=s>1?void 0:s?h(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&p(t,o,r),r})([t({})],m);var v=m;const b={class:"navbar navbar-expand-lg navbar-dark bg-dark"},f=a('<div class="container-fluid"><a class="navbar-brand font-display" href="#">FAANGShaadi.com</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#">Features</a></li><li class="nav-item"><a class="nav-link" href="#">Pricing</a></li><li class="nav-item"><a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a></li></ul></div></div>',1);v.render=function(e,t,a,r,n,i){return s(),o("nav",b,[f])};var y=Object.defineProperty,w=Object.getOwnPropertyDescriptor;let x=class extends e{constructor(){super(...arguments),this.logoPointX=250,this.logoPointY=100,this.logoMult=3}mounted(){this.updateLogos({clientX:0,clientY:0})}get logoStyle(){const e=this.logoPointX,t=this.logoPointY;return(o,s)=>{const a=20*Math.random()+20*o*this.logoMult,r=20*Math.random()+20*s*this.logoMult;return{transform:`translate(${a+e}px, ${r+t}px)`}}}updateLogos(e){const t=this.$refs["hero-img"],o=t.width/2.5,s=t.height/5.8;t.width<450?this.logoMult=2:this.logoMult=3,this.logoPointX=o+(e.clientX+1)/30,this.logoPointY=s+(e.clientX+1)/30}};x=((e,t,o,s)=>{for(var a,r=s>1?void 0:s?w(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&y(t,o,r),r})([t({})],x);var P=x;const O={class:"row flex-lg-row-reverse align-items-center g-5 py-5"},k={class:"col-10 col-sm-8 col-lg-6"},j={ref:"hero-img",src:"/assets/fs-hero-marriage.e08d38c2.svg",class:"d-block mx-lg-auto img-fluid",alt:"Bootstrap Themes",loading:"lazy",width:"700",height:"500"},M=a('<div class="col-lg-6"><h1 class="display-5 fw-bold lh-1 mb-3">FAANG Shaadi</h1><p class="lead"> Finding your soulmate among the top tech companies, because you deserve no less. </p><div class="d-grid gap-2 d-md-flex justify-content-md-start"><button type="button" class="btn btn-primary text-white btn-lg px-4 me-md-2"> &gt; sign up </button><button type="button" class="btn btn-outline-secondary btn-lg px-4"> &gt; learn more </button></div></div>',1);P.render=function(e,t){return s(),o("div",{onMousemove:t[1]||(t[1]=(...t)=>e.updateLogos&&e.updateLogos(...t)),onMousedown:t[2]||(t[2]=(...t)=>e.updateLogos&&e.updateLogos(...t)),onMouseup:t[3]||(t[3]=(...t)=>e.updateLogos&&e.updateLogos(...t)),class:"container-fluid col-xxl-8 px-4 py-5"},[r("div",O,[r("div",k,[r("img",{style:e.logoStyle(0,0),class:"position-absolute faang-logo",src:"/assets/facebook.b6572e89.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(0,1),class:"position-absolute faang-logo",src:"/assets/apple.3516a07b.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(0,2),class:"position-absolute faang-logo",src:"/assets/amazon.c9afd22a.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(1,1),class:"position-absolute faang-logo",src:"/assets/netflix.32fe67b9.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(1,2),class:"position-absolute faang-logo",src:"/assets/google.00024b65.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(1,3),class:"position-absolute faang-logo",src:"/assets/facebook.b6572e89.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(2,2),class:"position-absolute faang-logo",src:"/assets/apple.3516a07b.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(2,3),class:"position-absolute faang-logo",src:"/assets/amazon.c9afd22a.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(3,2),class:"position-absolute faang-logo",src:"/assets/netflix.32fe67b9.svg",width:"24",height:"24"},null,4),r("img",{style:e.logoStyle(3,3),class:"position-absolute faang-logo",src:"/assets/google.00024b65.svg",width:"24",height:"24"},null,4),r("img",j,null,512)]),M])],32)};var L=Object.defineProperty,F=Object.getOwnPropertyDescriptor,S=(e,t,o,s)=>{for(var a,r=s>1?void 0:s?F(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&L(t,o,r),r};let A=class extends e{constructor(){super(...arguments),this.title=this.process.title,this.imgUrl=`/illustrations/${this.process.illustration}.svg`,this.body=n(this.process.body)}};S([i(Object)],A.prototype,"process",2),A=S([t({})],A);var N=A;const _={class:"col-md-4 my-2"},D={class:"mt-3 p-2 p-md-5 h-50"},U={class:"my-4 fw-normal"};N.render=function(e,t){return s(),o("div",_,[r("div",D,[r("img",{class:"img-fluid",src:e.imgUrl},null,8,["src"])]),r("h3",U,l(e.title),1),r("p",{innerHTML:e.body},null,8,["innerHTML"])])};const $=[{illustration:"fs-how-eligibility",title:"Step 1: Eligibility",body:"\nEither add your **CodeForces**, **Leetcode**, \n**HackerRank** or [InterviewBit](https://www.interviewbit.com/) \nhandles, or go through our quick coding challenge.   \n\nUsers also need to sign up with your work email \nto verify you are from a top tech company.\nOur deep network of FAANG engineers and recruiters\nverify your salary band and seniority level.\n    "},{illustration:"fs-how-reg-2",title:"Step 2: Registration",body:"\nOur profile-builder form has been designed after \nconsultation with ex-Plantir data science engineers.    \nWe collect data points around your current job and past career \ntrajectory as well as collecting intent and \npotential for future.   \n\nAccurately filling the form is very important. You'll be surprised\nhow data-points like _typing speed_ and _variable naming_ patterns\ncorrelate with matrimonial success!\n    "},{illustration:"fs-how-matchmaking",title:"Step 3: Matchmaking",body:"\nWith dataset of over 200k successful matches from matrimonial sites and mapping \ncareer trajectories of over 50k engineers we sat down with \nOpenAI to develop a custom matchmaking algorithm.   \n\nFormer Spotify and Netflix recommendation team PMs have validated our approach.  \nWhile you get new recommendations everyday, you can also manually search for _**the one**_\n    "}];var B=Object.defineProperty,C=Object.getOwnPropertyDescriptor;let H=class extends e{constructor(){super(...arguments),this.processes=$}};H=((e,t,o,s)=>{for(var a,r=s>1?void 0:s?C(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&B(t,o,r),r})([t({components:{ProcessBox:N}})],H);var R=H;const T={class:"container mx-auto row"};R.render=function(e,t){const a=u("ProcessBox");return s(),o("div",T,[(s(!0),o(c,null,d(e.processes,((e,t)=>(s(),o(a,{key:t,process:e},null,8,["process"])))),128))])};var z=Object.defineProperty,X=Object.getOwnPropertyDescriptor,Y=(e,t,o,s)=>{for(var a,r=s>1?void 0:s?X(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&z(t,o,r),r};let E=class extends e{constructor(){super(...arguments),this.title=this.feature.title,this.icon=`bi-${this.feature.icon}`,this.description=n(this.feature.description)}};Y([i(Object)],E.prototype,"feature",2),E=Y([t({filters:{marked:n}})],E);var G=E;const I={class:"feature col-md-4 pt-3"},W={class:"card bg-light pt-3 h-100 text-dark"},V={class:"feature-icon bg-primary border border-2 border-light"},q={class:"card-body"},Q={class:"h4 py-3"};G.render=function(e,t){return s(),o("div",I,[r("div",W,[r("div",V,[r("i",{class:["bi",e.icon]},null,2)]),r("div",q,[r("h3",Q,l(e.title),1),r("p",{innerHTML:e.description},null,8,["innerHTML"])])])])};const J=[{title:"Validated Profiles",icon:"shield-fill-check",description:"All profiles have gone \n    through a mandatory\n    `FizzBuzz` test and\n    Linkedin-verified  for \n    current or past\n    experience in a top tech\n    company."},{title:"AI-Powered Matchmaking",icon:"cpu-fill",description:"More than 30 data points\n    collected, and with a \n    hand-tuned GPT-4 \n    powered model trained\n    on over 5M+ users,\n    we recommend matches \n    better than Netflix"},{title:"Fine-grained Filtering",icon:"search",description:"Search, sort and filter\n    based on **YoE** (years of experience),\n    **CTC** (compensation), stocks vested,\n    LeetCode rank.   \n    Filter for L5 and above only? Possible.  \n    Custom **GraphQL** console\n    for power users"}];var K=Object.defineProperty,Z=Object.getOwnPropertyDescriptor;let ee=class extends e{constructor(){super(...arguments),this.features=J}};ee=((e,t,o,s)=>{for(var a,r=s>1?void 0:s?Z(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&K(t,o,r),r})([t({components:{FeatureCard:G}})],ee);var te=ee;const oe={class:"py-3 bg-primary text-white"},se={class:"container mx-auto row pb-4"},ae=r("h2",{class:"py-3 border-bottom fw-bold"},"Premium Features",-1),re={class:"row g-4"};te.render=function(e,t){const a=u("FeatureCard");return s(),o("div",oe,[r("div",se,[ae,r("div",re,[(s(!0),o(c,null,d(e.features,((e,t)=>(s(),o(a,{key:t,feature:e},null,8,["feature"])))),128))])])])};var ne=Object.defineProperty,ie=Object.getOwnPropertyDescriptor;let le=class extends e{};le=((e,t,o,s)=>{for(var a,r=s>1?void 0:s?ie(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&ne(t,o,r),r})([t({})],le);var ce=le;ce.render=function(e,t,a,r,n,i){return s(),o("div",null," Footer ")};var de=Object.defineProperty,ue=Object.getOwnPropertyDescriptor;let ge=class extends e{};ge=((e,t,o,s)=>{for(var a,r=s>1?void 0:s?ue(t,o):t,n=e.length-1;n>=0;n--)(a=e[n])&&(r=(s?a(t,o,r):a(r))||r);return s&&r&&de(t,o,r),r})([t({components:{NavBar:v,Hero:P,About:R,Features:te,Footer:ce}})],ge);var pe=ge;pe.render=function(e,t,a,n,i,l){const d=u("NavBar"),g=u("Hero"),p=u("Features"),h=u("About"),m=u("Footer");return s(),o(c,null,[r(d),r(g),r(p),r(h),r(m)],64)};g(pe).mount("#app");
