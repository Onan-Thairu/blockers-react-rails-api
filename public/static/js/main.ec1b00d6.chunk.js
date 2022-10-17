(this["webpackJsonpreact-rails-api-project-template-client"]=this["webpackJsonpreact-rails-api-project-template-client"]||[]).push([[0],{33:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var r,a,c=t(0),i=t.n(c),l=t(24),o=t.n(l),d=(t(33),t(4)),s=t(6),b=t(7),f=t(8),h=t(3),m=t(1);var j,u,p=b.a.div(r||(r=Object(s.a)(["\n  text-align: center;\n  h4 {\n    margin: 3rem .2rem;\n    font-weight: 900;\n  }\n  a {\n    display: flex;\n    width: 5rem;\n    margin: 1rem 0;\n    text-decoration: none;\n    font-weight: 600;\n  }\n  #login {\n    display: inline-block;\n    text-decoration: underline;\n    color: #005b96;\n    font-size: .8rem;\n  }\n"]))),g=b.a.form(a||(a=Object(s.a)(["\n  background-color: #FFFFFF;\n  line-height: 2;\n  width: 30em;\n  margin: 0 auto;\n  padding: 1rem;\n  border-radius: .3rem;\n  div {\n    margin-top: .2rem;\n  }\n  label {\n    color: #4A4A4A;\n    font-weight: 900;\n    margin: .5rem;\n  }\n  input {\n    padding: 0.5rem;\n    width: 90%;\n    border: none;\n    border-radius: .3rem;\n    background-color: #e0e0e0fd;\n  }\n  button {\n    background-color: #4a4a4a;\n    border: none;\n    border-radius: .5rem;\n    color: #FFFFFF;\n    margin-top: 2rem;\n    padding: 0.5rem 1rem;\n    font-weight: 900;\n    &:hover {\n      background-color: #e0e0e0fd;\n      color: #778472;\n    }\n  }\n  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n"]))),x=function(){var e=Object(c.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),i=Object(d.a)(a,2),l=i[0],o=i[1],s=Object(c.useState)(""),b=Object(d.a)(s,2),j=b[0],u=b[1],x=Object(h.m)();return Object(m.jsxs)(p,{children:[Object(m.jsx)(f.b,{to:"/list-all",children:"Home"}),Object(m.jsx)("h4",{children:"SIGN UP"}),Object(m.jsx)("div",{children:Object(m.jsxs)(g,{onSubmit:function(e){e.preventDefault(),fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:l,password_confirmation:j})}).then((function(e){e.ok&&x("/login")}))},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username"}),Object(m.jsx)("input",{type:"text",id:"username",required:!0,value:t,onChange:function(e){return r(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",id:"password",autoComplete:"on",required:!0,value:l,onChange:function(e){return o(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password_confirmation",children:"Confirm Password"}),Object(m.jsx)("input",{type:"password",id:"password_confirmation",autoComplete:"on",required:!0,value:j,onChange:function(e){return u(e.target.value)}})]}),Object(m.jsx)("button",{children:"SUBMIT"}),Object(m.jsxs)("p",{children:["Already have an account? ",Object(m.jsx)(f.b,{to:"/login",id:"login",children:"Login"})]})]})})]})};var O=b.a.div(j||(j=Object(s.a)(["\n  text-align: center;\n  h4 {\n    margin: 3rem .2rem;\n    font-weight: 900;\n  }\n  a {\n    display: flex;\n    width: 5rem;\n    margin: 1rem 0;\n    text-decoration: none;\n    font-weight: 600;\n  }\n  #signup {\n    display: inline-block;\n    text-decoration: underline;\n    color: #4A4A4A;\n    font-size: .8rem;\n  }\n"]))),v=b.a.form(u||(u=Object(s.a)(["\n  background-color: #FFFFFF;\n  line-height: 2;\n  width: 30em;\n  margin: 0 auto;\n  padding: 1rem;\n  border-radius: .3rem;\n  div {\n    margin-top: .2rem;\n  }\n  label {\n    color: #4A4A4A;\n    font-weight: 900;\n    margin: .5rem;\n  }\n  input {\n    padding: 0.5rem;\n    width: 90%;\n    border: none;\n    border-radius: .3rem;\n    background-color: #e0e0e0fd;\n  }\n  button {\n    background-color: #e0e0e0fd;\n    border: none;\n    border-radius: .5rem;\n    color: #4A4A4A;\n    margin-top: 2rem;\n    padding: 0.5rem 1rem;\n    font-weight: 900;\n    &:hover {\n      background-color: #4A4A4A;\n      color: #FFFFFF;\n    }\n  }\n  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n"]))),w=function(e){var n=e.setCurrentUser,t=Object(c.useState)(""),r=Object(d.a)(t,2),a=r[0],i=r[1],l=Object(c.useState)(""),o=Object(d.a)(l,2),s=o[0],b=o[1],j=Object(h.m)();return Object(m.jsxs)(O,{children:[Object(m.jsx)(f.b,{to:"/list-all",children:"Home"}),Object(m.jsx)("h4",{children:"LOGIN"}),Object(m.jsx)("div",{children:Object(m.jsxs)(v,{onSubmit:function(e){e.preventDefault(),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:s})}).then((function(e){return e.json()})).then((function(e){n(e),j("/list-all")}))},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username"}),Object(m.jsx)("input",{type:"text",name:"username",required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",name:"password",autoComplete:"on",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(m.jsx)("button",{children:"SUBMIT"}),Object(m.jsxs)("p",{children:["Don't have an account? ",Object(m.jsx)(f.b,{to:"/signup",id:"signup",children:"Signup"})]})]})})]})};var y,F,E,A,k,S,R,C,U,z,D,L,M,T,B,I,P,q,N,Z,G,J,_,H,K,X,W,Y,Q,V,$,ee,ne,te,re,ae,ce,ie=function(e){var n=e.setCurrentUser,t=Object(h.m)();return Object(c.useEffect)((function(){fetch("/logout",{method:"DELETE"}).then((function(e){n(null),t("/")}))}),[]),Object(m.jsx)("div",{children:"You are being logged out..."})},le=["title","titleId"];function oe(){return(oe=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function de(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function se(e,n){var t=e.title,r=e.titleId,a=de(e,le);return c.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",width:884.54918,height:560,viewBox:"0 0 884.54918 560",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:n,"aria-labelledby":r},a),t?c.createElement("title",{id:r},t):null,y||(y=c.createElement("rect",{id:"e95f2213-9bcc-4eb0-8355-05af38a3eafb","data-name":"Rectangle 246",x:.24277,y:.32251,width:397.42609,height:208.67749,fill:"#f2f2f2"})),F||(F=c.createElement("rect",{id:"b36aff44-79c8-4945-b2be-fafe94103ec8","data-name":"Rectangle 264",width:397.42609,height:24.19149,fill:"#e6e6e6"})),E||(E=c.createElement("rect",{id:"e8d246b5-3278-4a22-b53c-870d78135d7d","data-name":"Rectangle 247",x:9.23028,y:34,width:381,height:164,fill:"#fff"})),A||(A=c.createElement("circle",{id:"af47f094-7758-4c77-9c4d-96df8007094d","data-name":"Ellipse 194",cx:37.66058,cy:12.03393,r:4.00175,fill:"#fff"})),k||(k=c.createElement("circle",{id:"a9e4940e-a814-4d65-8cf9-dbeaebbe294d","data-name":"Ellipse 195",cx:52.85057,cy:12.03393,r:4.00175,fill:"#fff"})),S||(S=c.createElement("circle",{id:"a19a9b15-8247-4a07-9472-be354b993276","data-name":"Ellipse 246",cx:22.43115,cy:12.03393,r:4.00175,fill:"#fff"})),R||(R=c.createElement("g",{id:"e40d22fe-578f-4c94-aa61-62d9a8853a42","data-name":"Group 31"},c.createElement("rect",{id:"fc650e0a-90d3-4f46-9c22-349406f6a431","data-name":"Rectangle 250",x:94.66582,y:82.05956,width:219.08741,height:9.76443,fill:"#f2f2f2"}),c.createElement("rect",{id:"a9c22b9d-d16d-4876-9a73-2e204591d63b","data-name":"Rectangle 251",x:94.66582,y:106.47031,width:78.11479,height:9.76443,fill:"#f2f2f2"}),c.createElement("rect",{id:"a9cac377-a398-4b66-a887-af8e1ff2458e","data-name":"Rectangle 252",x:94.66582,y:130.88106,width:155.61961,height:9.76443,fill:"#f2f2f2"}))),C||(C=c.createElement("rect",{id:"ae236caa-6983-426a-9b06-907acb2b0100","data-name":"Rectangle 246",x:90.22846,y:273.62195,width:374.00182,height:196.37805,fill:"#f2f2f2"})),U||(U=c.createElement("rect",{id:"a3b9e66a-d826-4708-839f-4ee527686343","data-name":"Rectangle 264",x:90,y:273.31845,width:374.00182,height:22.76564,fill:"#e6e6e6"})),z||(z=c.createElement("rect",{id:"aab7f417-816b-4c9c-990d-381bde365131","data-name":"Rectangle 247",x:98.11455,y:304,width:359.11573,height:156,fill:"#fff"})),D||(D=c.createElement("circle",{id:"f8f639d0-e29b-4d5a-b588-284205311750","data-name":"Ellipse 194",cx:125.44086,cy:284.6431,r:3.76589,fill:"#fff"})),L||(L=c.createElement("circle",{id:"b51d82ba-e700-447e-8693-718cbf9a6186","data-name":"Ellipse 195",cx:139.73556,cy:284.6431,r:3.76589,fill:"#fff"})),M||(M=c.createElement("circle",{id:"adf412b1-46d6-41c6-a8e7-cb0dafcb21cb","data-name":"Ellipse 246",cx:111.10906,cy:284.6431,r:3.76589,fill:"#fff"})),T||(T=c.createElement("rect",{id:"bb724a05-1311-47ea-a197-dba61202444a","data-name":"Rectangle 246",x:270.271,y:86.06159,width:443.63098,height:232.93841,fill:"#e6e6e6"})),B||(B=c.createElement("rect",{id:"b7251c64-c1f0-4c9d-92b0-874b7a83a8e9","data-name":"Rectangle 264",x:270,y:85.70159,width:443.63098,height:27.004,fill:"#6c63ff"})),I||(I=c.createElement("rect",{id:"ab817a57-2f27-4757-8aa6-60cd0ec7b964","data-name":"Rectangle 247",x:280.23028,y:121,width:423,height:185,fill:"#fff"})),P||(P=c.createElement("circle",{id:"a7798ced-ee1a-4794-8024-1e89386a0136","data-name":"Ellipse 194",cx:312.03901,cy:99.13459,r:4.467,fill:"#fff"})),q||(q=c.createElement("circle",{id:"a86efddc-376d-49bc-bb2f-084d39c183b3","data-name":"Ellipse 195",cx:328.995,cy:99.13459,r:4.467,fill:"#fff"})),N||(N=c.createElement("circle",{id:"be9ec433-53e3-4401-a112-00f5748904d3","data-name":"Ellipse 246",cx:295.03901,cy:99.13459,r:4.467,fill:"#fff"})),Z||(Z=c.createElement("g",{id:"e9ebe1f0-a35b-432b-8b90-74480dfb3bf9","data-name":"Group 31"},c.createElement("rect",{id:"f96caaa1-6c15-4961-b53f-9d0c3661d201","data-name":"Rectangle 250",x:329.78549,y:168.6355,width:324.33099,height:14.455,fill:"#e6e6e6"}),c.createElement("rect",{id:"b84ba293-ba99-4f02-8939-e0d4d3784a38","data-name":"Rectangle 251",x:329.78549,y:204.7725,width:115.639,height:14.455,fill:"#e6e6e6"}),c.createElement("rect",{id:"b3127a43-0306-472e-b694-e809c29e74cb","data-name":"Rectangle 252",x:329.78549,y:240.9095,width:230.375,height:14.455,fill:"#e6e6e6"}))),G||(G=c.createElement("g",{id:"b98a0618-17e9-4407-b210-398d3f3d6a2f","data-name":"Group 31"},c.createElement("rect",{id:"f815513a-42d1-48f0-8051-0e3f5098eb8b","data-name":"Rectangle 250",x:163.6717,y:350.30143,width:244.55858,height:10.89965,fill:"#f2f2f2"}),c.createElement("rect",{id:"fd32ddd7-816d-43c9-8317-e96306581af5","data-name":"Rectangle 251",x:163.6717,y:377.55017,width:87.19645,height:10.89965,fill:"#f2f2f2"}),c.createElement("rect",{id:"eae90b12-7883-428a-9e47-6f1258f1f191","data-name":"Rectangle 252",x:163.6717,y:404.79892,width:173.71199,height:10.89965,fill:"#f2f2f2"}))),J||(J=c.createElement("polygon",{points:"502.342 89.215 481.491 100.766 503.728 92.924 502.342 89.215",fill:"#fff"})),_||(_=c.createElement("ellipse",{cx:665.84471,cy:259.43493,rx:5.81718,ry:11.71979,transform:"translate(-205.30234 48.38338) rotate(-17.99425)",fill:"#3f3d56"})),H||(H=c.createElement("polygon",{points:"509.46 82.667 523.29 77.675 526.23 85.817 512.845 94.858 509.46 82.667",fill:"#3f3d56"})),K||(K=c.createElement("path",{d:"M677.57211,256.66414a13.47016,13.47016,0,0,0,18.88348,8.36887l34.02,33.67523L735.352,274.316l-33.05362-28.239a13.54316,13.54316,0,0,0-24.72631,10.58715Z",transform:"translate(-157.72541 -170)",fill:"#a0616a"})),X||(X=c.createElement("path",{d:"M936.8278,469.12849a13.47014,13.47014,0,0,0-3.16469-20.411l9.9463-46.82367-23.15832,9.08046-5.89475,43.07241a13.54316,13.54316,0,0,0,22.27146,15.08179Z",transform:"translate(-157.72541 -170)",fill:"#a0616a"})),W||(W=c.createElement("polygon",{points:"667.031 543.156 650.608 543.156 642.795 479.811 667.033 479.812 667.031 543.156",fill:"#a0616a"})),Y||(Y=c.createElement("path",{d:"M828.944,729.07558l-52.95288-.002v-.66977A20.61031,20.61031,0,0,1,796.602,707.79331h.0013l32.34169.00131Z",transform:"translate(-157.72541 -170)",fill:"#2f2e41"})),Q||(Q=c.createElement("polygon",{points:"747.403 543.156 730.981 543.156 723.168 479.811 747.406 479.812 747.403 543.156",fill:"#a0616a"})),V||(V=c.createElement("path",{d:"M909.31663,729.07558l-52.95288-.002v-.66977a20.61029,20.61029,0,0,1,20.61086-20.61054h.00131l32.34169.00131Z",transform:"translate(-157.72541 -170)",fill:"#2f2e41"})),$||($=c.createElement("path",{d:"M826.467,680.08l-23.24744-.9301a6.04689,6.04689,0,0,1-5.784-6.20716l6.54958-214.83465.42776-.15436c40.74393-14.73891,74.44969-13.62437,103.04582,3.40249l.31984.191,3.92347,209.2397a6.02739,6.02739,0,0,1-6.027,6.14176H886.0721a6.04128,6.04128,0,0,1-5.91512-4.865L853.45309,536.22158a2.009,2.009,0,0,0-3.966.14652L832.69179,674.78331a6.06215,6.06215,0,0,1-5.98675,5.30062C826.62623,680.08393,826.54643,680.08262,826.467,680.08Z",transform:"translate(-157.72541 -170)",fill:"#2f2e41"})),ee||(ee=c.createElement("circle",{cx:849.08311,cy:236.804,r:32.90059,transform:"translate(-167.25852 266.29448) rotate(-28.66347)",fill:"#a0616a"})),ne||(ne=c.createElement("path",{d:"M702.90807,269.53086A6.0355,6.0355,0,0,1,705.351,266.89l9.92209-5.69734a6.04761,6.04761,0,0,1,6.89787.62862l32.96658,27.92846,75.77217,21.24389a19.41873,19.41873,0,1,1-16.51422,35.15149l-48.40177-10.89628a62.11929,62.11929,0,0,1-36.5541-23.9993l-25.957-35.579a6.0346,6.0346,0,0,1-1.02618-4.80669A5.96744,5.96744,0,0,1,702.90807,269.53086Z",transform:"translate(-157.72541 -170)",fill:"#3f3d56"})),te||(te=c.createElement("path",{d:"M935.423,438.81388a6.03548,6.03548,0,0,1-3.59411.15526l-11.05723-2.94027a6.04762,6.04762,0,0,1-4.45566-5.30309l-3.7459-43.04373-38.84923-68.43583a19.41873,19.41873,0,1,1,36.4767-13.33406l26.69878,41.81668a62.11941,62.11941,0,0,1,9.05992,42.77951l-6.61835,43.54116a6.03461,6.03461,0,0,1-2.65563,4.13581A5.96772,5.96772,0,0,1,935.423,438.81388Z",transform:"translate(-157.72541 -170)",fill:"#3f3d56"})),re||(re=c.createElement("path",{d:"M813.0967,295.23124a56.02309,56.02309,0,0,1,44.92444-18.16365q.82512.051,1.64369.11512h.00066a55.905,55.905,0,0,1,40.40021,22.2987,56.74581,56.74581,0,0,1,10.07994,45.73812,177.30338,177.30338,0,0,0,4.68382,90.92287l8.82608,27.40572a6.026,6.026,0,0,1-5.41442,7.8659l-45.12263,2.426-11.547-19.94543v20.56623l-54.84217,2.94848c-.10923.00654-.21781.00916-.32573.00916a6.028,6.028,0,0,1-6.00637-6.512l6.19866-76.86551-7.775-52.2056A56.38041,56.38041,0,0,1,813.0967,295.23124Z",transform:"translate(-157.72541 -170)",fill:"#3f3d56"})),ae||(ae=c.createElement("path",{d:"M871.94892,268.21228c-3.04612,1.75271-15.08657,2.91479-15.9443-.4933l-.01838-.07488c-.59711-2.49707-.10127-5.10458.0701-7.66632s-.07938-5.37595-1.82412-7.25949c-3.25241-3.51113-9.03865-1.64985-13.74164-2.53763A11.6062,11.6062,0,0,1,831.462,237.786c.067-.53247.172-1.06554.28978-1.59828a8.93862,8.93862,0,0,0-9.27869-10.82526c-4.75284.27178-9.8831,1.7118-13.81548-1.80854-3.04091-2.72226-3.78282-9.80862-2.44673-13.66513,2.24539-6.48113,16.6287-9.87411,22.90869-11.73933a54.41263,54.41263,0,0,1,46.121,7.56782c3.96664,2.79595,7.67106,6.309,9.36172,10.858s.875,10.28809-2.93732,13.291a24.55655,24.55655,0,0,1,5.688,23.85251C885.4699,259.78622,876.48322,265.60329,871.94892,268.21228Z",transform:"translate(-157.72541 -170)",fill:"#2f2e41"})),ce||(ce=c.createElement("path",{d:"M1041.27459,730h-381a1,1,0,0,1,0-2h381a1,1,0,0,1,0,2Z",transform:"translate(-157.72541 -170)",fill:"#3f3d56"})))}var be,fe,he,me,je,ue,pe=c.forwardRef(se);t.p;var ge,xe=b.a.div(be||(be=Object(s.a)(["\n  h4 {\n    font-family: 'Dancing Script', cursive;\n    font-weight: 900;\n    font-size: 2.5em;\n    letter-spacing: 0.3em;\n    margin-top: 1rem;\n  }\n"]))),Oe=Object(b.a)(pe)(fe||(fe=Object(s.a)(["\n  height: 240px;\n  margin-top: 10%;\n"]))),ve=b.a.div(he||(he=Object(s.a)(["\n  display: flex;\n  gap: 10px;\n"]))),we=b.a.div(me||(me=Object(s.a)(["\n  margin-top: 10%;\n  font-size: 1.1em;\n  \n  font-weight: 600;\n  background-color: #FFFFFF;\n  padding: 1rem;\n  border-radius: .5rem;\n  color: #4A4A4A;\n  \n  p {\n    background-color: #e0e0e0fd;\n    font-size: 1rem;\n    font-weight: 400;\n    margin-top: .6rem;\n    color: #4A4A4A;\n    padding: 1rem;\n    border-radius: .8rem;\n  }\n"]))),ye=Object(b.a)(f.b)(je||(je=Object(s.a)(["\n  text-decoration: none;\n  background-color: #FFFFFF;\n  color: #4A4A4A;\n  font-size: .9rem;\n  font-weight: 600;\n  padding: .8rem .6rem;\n  letter-spacing: .1rem;\n  border-radius: .3rem;\n  &:hover {\n    background-color: #4A4A4A;\n    color: #FFFFFF;\n  }\n"]))),Fe=b.a.div(ue||(ue=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 600px;\n  margin: 5rem auto;\n  gap: 4rem;\n"]))),Ee=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(xe,{children:Object(m.jsx)("h4",{children:"Blockers"})}),Object(m.jsxs)(ve,{children:[Object(m.jsxs)(we,{children:["Do you have blockers that you'd like to save for a quick reference in the future? Or some other important code snippets you use often but can't seem to remember the exact commands?",Object(m.jsx)("p",{children:"We've got you! No need to keep going through search results again looking for a specific result. Signup with us and we'll help you save them conveniently."})]}),Object(m.jsx)(Oe,{})]}),Object(m.jsxs)(Fe,{children:[Object(m.jsx)(ye,{to:"/list-all",children:"EXPLORE"}),Object(m.jsx)(ye,{to:"/login",children:"LOG IN"}),Object(m.jsx)(ye,{to:"/signup",children:"SIGN UP"})]})]})};var Ae,ke=b.a.div(ge||(ge=Object(s.a)(["\n  color: #4A4A4A;\n  background-color: #e0e0e0fd;\n  margin: .5rem 1rem;\n  padding: .3rem .4rem;\n  border-radius: .3rem;\n  font-size: .9rem;\n  font-weight: 500;\n"]))),Se=function(e){var n=e.solution;return Object(m.jsx)(ke,{children:Object(m.jsx)("p",{children:n})})},Re=t(28);var Ce,Ue=b.a.div(Ae||(Ae=Object(s.a)(["\n  background-color: #FFFFFF;\n  padding: .5rem;\n  border-radius: .3rem;\n  color: #363636;\n  margin-bottom: 1.2rem;\n  line-height: 1.6rem;\n  font-size: .9rem;\n  h6 {\n    margin: 0;\n    padding: 0;\n    color: #4A4A4A;\n  }\n  span h6 {\n    display: inline;\n  }\n  #tag {\n    margin-left: 1rem;\n    background-color: #e0e0e0fd;\n    padding: .1rem .2rem;\n    border-radius: .3rem;\n  }\n  #date {\n    margin-left: 1rem;\n  }\n  h2 {\n    display: flex;\n    float: right;\n  }\n  h4 {\n    color: #363636;\n  }\n  box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);\n  -webkit-box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);\n  -moz-box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);\n"]))),ze=function(e){var n=e.blocker,t=e.handleDelete,r=e.currentUser,a=new Date(n.updated_at);return Object(m.jsx)(m.Fragment,{children:r?Object(m.jsxs)(Ue,{children:[r.id===n.user_id?Object(m.jsxs)("h2",{onClick:function(){return t(n.id)},children:[" ",Object(m.jsx)(Re.a,{})," "]}):null,Object(m.jsx)("h4",{children:n.description}),Object(m.jsx)(Se,{solution:n.solution}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("h6",{children:["By ",n.user.username]}),Object(m.jsx)("h6",{id:"tag",children:n.tag}),Object(m.jsxs)("h6",{id:"date",children:["Updated: ",a.toDateString()]})]})]}):Object(m.jsxs)(Ue,{children:[Object(m.jsx)("h4",{children:n.description}),Object(m.jsx)(Se,{solution:n.solution}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("h6",{children:["By ",n.user.username]}),Object(m.jsx)("h6",{id:"tag",children:n.tag}),Object(m.jsxs)("h6",{id:"date",children:["Updated: ",a.toDateString()]})]})]})})};var De=b.a.div(Ce||(Ce=Object(s.a)(["\n  display: flex;\n  width: 300px;\n  margin: 0rem auto;\n  margin-bottom: 1rem;\n  p {\n    padding-right: 1rem;\n    font-weight: 600;\n    color: #4A4A4A;\n  }\n  select {\n    border:none;\n    border-radius: .3rem;\n  }\n"]))),Le=function(e){var n=e.handleFilter;return Object(m.jsxs)(De,{children:[Object(m.jsx)("p",{children:"Filter by"}),Object(m.jsxs)("select",{id:"tags",name:"tags",onChange:function(e){n(e.target.value)},children:[Object(m.jsx)("option",{value:"all",children:"All"}),Object(m.jsx)("option",{value:"react",children:"React"}),Object(m.jsx)("option",{value:"ruby",children:"Ruby"}),Object(m.jsx)("option",{value:"javascript",children:"Javascript"})]})]})};var Me,Te,Be,Ie=function(e){var n=e.currentUser,t=Object(c.useState)([]),r=Object(d.a)(t,2),a=r[0],i=r[1];Object(c.useEffect)((function(){l()}),[]);var l=function(){fetch("/blockers").then((function(e){return e.json()})).then((function(e){i(e)}))},o=function(e){fetch("/blockers/".concat(e),{method:"DELETE"}).then((function(){l()}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(Le,{handleFilter:function(e){"all"===e?l():fetch("/blockers/".concat(e)).then((function(e){return e.json()})).then((function(e){i(e)}))}}),a.map((function(e){return Object(m.jsx)(ze,{blocker:e,handleDelete:o,currentUser:n},e.id)}))]})};var Pe,qe,Ne=b.a.div(Me||(Me=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  font-weight: 400;\n  margin-top: .8rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  h4 {\n    font-family: 'Dancing Script', cursive;\n    font-weight: 900;\n    font-size: 1.5em;\n    letter-spacing: 0.3em;\n  }\n"]))),Ze=Object(b.a)(f.b)(Te||(Te=Object(s.a)(["\n  text-decoration: none;\n  background-color: #FFFFFF;\n  color: #4A4A4A;\n  font-size: 0.7rem;\n  font-weight: 900;\n  padding: .7rem .8rem;\n  letter-spacing: .1rem;\n  border-radius: .5rem;\n  &:hover {\n    background-color: #4A4A4A;\n    color: #FFFFFF;\n  }\n"]))),Ge=Object(b.a)(f.b)(Be||(Be=Object(s.a)(["\n  color: #4A4A4A;\n  font-size: .8rem;\n  font-weight: 900;\n"]))),Je=function(e){var n=e.currentUser;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsxs)(Ne,{children:[Object(m.jsx)("h4",{children:"Blockers"}),n?Object(m.jsx)(Ze,{to:"/create-blocker",children:"ADD BLOCKER"}):null,n?Object(m.jsxs)(Ge,{to:"/logout",children:["Logout ",n.username]}):Object(m.jsx)(Ge,{to:"/login",children:"Login"})]}),Object(m.jsx)(Ie,{currentUser:n})]})})};var _e=b.a.div(Pe||(Pe=Object(s.a)(["\n  text-align: center;\n  h4 {\n    margin: 1rem .2rem;\n    font-weight: 900;\n  }\n  a {\n    display: flex;\n    width: 5rem;\n    margin: 1rem 0;\n    text-decoration: none;\n    font-weight: 600;\n  }\n"]))),He=b.a.form(qe||(qe=Object(s.a)(["\n  background-color: #FFFFFF;\n  line-height: 2;\n  width: 30em;\n  margin: 0 auto;\n  padding: 1rem;\n  border-radius: .3rem;\n  div {\n    margin-top: .2rem;\n  }\n  label {\n    color: #4A4A4A;\n    font-weight: 900;\n    margin: .5rem;\n  }\n  input, textarea {\n    padding: 0.4rem;\n    width: 90%;\n    background-color: #e0e0e0fd;\n    border-radius: .3rem;\n    border: none;\n  }\n  select {\n    background-color: #e0e0e0fd;\n    padding: .4rem;\n    border-radius: .3rem;\n    border: none;\n    width: 90%;\n  }\n  button {\n    background-color: #e0e0e0fd;\n    border: none;\n    border-radius: .5rem;\n    color: #4A4A4A;\n    margin-top: 2rem;\n    padding: 0.5rem 1rem;\n    font-weight: 900;\n    &:hover {\n      background-color: #4A4A4A;\n      color: #FFFFFF;\n    }\n  }\n  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);\n"]))),Ke=function(){var e=Object(h.m)();return Object(m.jsxs)(_e,{children:[Object(m.jsx)(f.b,{to:"/list-all",children:"Home"}),Object(m.jsx)("h4",{children:"Create Blocker"}),Object(m.jsx)("div",{children:Object(m.jsxs)(He,{onSubmit:function(n){n.preventDefault();var t=n.target.elements,r={description:t.description.value,tag:t.tags.value,solution:t.solution.value};fetch("/blockers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((function(n){201===n.status&&e("/list-all")}))},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"description",children:"BLOCKER"}),Object(m.jsx)("textarea",{name:"description",id:"description",cols:"30",rows:"5",required:!0})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"tags",children:"TAG"}),Object(m.jsxs)("select",{id:"tags",name:"tags",required:!0,children:[Object(m.jsx)("option",{value:""}),Object(m.jsx)("option",{value:"react",children:"React"}),Object(m.jsx)("option",{value:"ruby",children:"Ruby"}),Object(m.jsx)("option",{value:"javascript",children:"Javascript"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"solution",children:"SOLUTION"}),Object(m.jsx)("textarea",{name:"solution",id:"solution",cols:"30",rows:"5",required:!0})]}),Object(m.jsx)("button",{children:"SUBMIT"})]})})]})};var Xe=function(){var e=Object(c.useState)(null),n=Object(d.a)(e,2),t=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("/me").then((function(e){e.ok&&e.json().then((function(e){return r(e)}))}))}),[]),Object(m.jsx)(f.a,{children:Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{path:"/",element:Object(m.jsx)(Ee,{})}),Object(m.jsx)(h.a,{path:"/list-all",element:Object(m.jsx)(Je,{currentUser:t})}),Object(m.jsx)(h.a,{path:"/create-blocker",element:Object(m.jsx)(Ke,{})}),Object(m.jsx)(h.a,{path:"/signup",element:Object(m.jsx)(x,{})}),Object(m.jsx)(h.a,{path:"/login",element:Object(m.jsx)(w,{setCurrentUser:r})}),Object(m.jsx)(h.a,{path:"/logout",element:Object(m.jsx)(ie,{setCurrentUser:r})})]})})};var We=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(Xe,{})})};o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(We,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ec1b00d6.chunk.js.map