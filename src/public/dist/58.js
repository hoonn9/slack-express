(self.webpackChunklecture=self.webpackChunklecture||[]).push([[58],{8678:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const l=e=>{const[t,a]=(0,n.useState)(e);return[t,(0,n.useCallback)((e=>{a(e.target.value)}),[]),a]}},8058:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ze});var n=a(5558);const l=n.Z.div`
  display: flex;
  flex: 1;
`,o=n.Z.div`
  width: 65px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #3f0e40;
  border-top: 1px solid rgb(82, 38, 83);
  border-right: 1px solid rgb(82, 38, 83);
  vertical-align: top;
  text-align: center;
  padding: 15px 0 0;
`,r=n.Z.nav`
  width: 260px;
  display: inline-flex;
  flex-direction: column;
  background: #3f0e40;
  color: rgb(188, 171, 188);
  vertical-align: top;
  & a {
    padding-left: 36px;
    color: inherit;
    text-decoration: none;
    height: 28px;
    line-height: 28px;
    display: flex;
    align-items: center;
    &.selected {
      color: white;
    }
  }
  & .bold {
    color: white;
    font-weight: bold;
  }
  & .count {
    margin-left: auto;
    background: #cd2553;
    border-radius: 16px;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: white;
    margin-right: 16px;
  }
  & h2 {
    height: 36px;
    line-height: 36px;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 15px;
  }
`,i=n.Z.button`
  height: 64px;
  line-height: 64px;
  border: none;
  width: 100%;
  text-align: left;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  font-weight: 900;
  font-size: 23px;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0;
  padding-left: 16px;
  margin: 0;
  color: white;
  cursor: pointer;
`,s=n.Z.div`
  height: calc(100vh - 102px);
  overflow-y: auto;
`,c=n.Z.div`
  padding: 10px 0 0;
  & h2 {
    padding-left: 20px;
  }
  & > button {
    width: 100%;
    height: 28px;
    padding: 4px;
    border: none;
    background: transparent;
    border-top: 1px solid rgb(28, 29, 28);
    cursor: pointer;
    &:last-of-type {
      border-bottom: 1px solid rgb(28, 29, 28);
    }
  }
`,d=n.Z.div`
  flex: 1;
`,p=n.Z.button`
  color: white;
  font-size: 24px;
  display: inline-block;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`,u=n.Z.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: white;
  border: 3px solid #3f0e40;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  color: black;
  cursor: pointer;
`;var m=a(3564),h=a(9669),g=a.n(h),x=a(7294),f=a(5977),b=a(5723);const v=n.Z.div`
  position: fixed;
  text-align: center;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
  & > div {
    margin-top: 200px;
    display: inline-block;
    width: 440px;
    background: white;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
    border-radius: 6px;
    user-select: none;
    max-width: 440px;
    padding: 30px 40px 0;
    z-index: 1012;
    position: relative;
  }
`,k=n.Z.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`,w=({show:e,children:t,onCloseModal:a})=>{const n=(0,x.useCallback)((e=>{e.stopPropagation()}),[]);return e?x.createElement(v,{onClick:a},x.createElement("div",{onClick:n},x.createElement(k,{onClick:a},"×"),t)):null};var E=a(1670),C=a(8678);const _=({show:e,onCloseModal:t,onCreateWorkspace:a})=>{const[n,l,o]=(0,C.Z)(""),[r,i,s]=(0,C.Z)(""),c=(0,x.useCallback)((async e=>{e.preventDefault(),n&&n.trim()&&r&&r.trim()&&(await a(n,r),o(""),s(""))}),[n,r]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:c},x.createElement(E.__,{id:"workspace-label"},x.createElement("span",null,"워크스페이스 이름"),x.createElement(E.II,{id:"workspace",value:n,onChange:l})),x.createElement(E.__,{id:"workspace-url-label"},x.createElement("span",null,"워크스페이스 url"),x.createElement(E.II,{id:"workspace",value:r,onChange:i})),x.createElement(E.zx,{type:"submit"},"생성하기")))};var y=a(6508),Z=a(3727),S=a(9249);const $=({list:e,revalidate:t})=>{const a=(0,f.k6)(),{setWorkspace:n}=(0,y.c)(),[l,r]=(0,x.useState)(!1),i=(0,x.useCallback)((()=>{r(!0)}),[]),s=(0,x.useCallback)((()=>{r(!1)}),[]),c=(0,x.useCallback)((async(e,a)=>{try{await g().post("/api/workspaces",{workspace:e,url:a},{withCredentials:!0}),t(),r(!1)}catch(e){var n;console.dir(e),S.Am.error(null===(n=e.response)||void 0===n?void 0:n.data,{position:"bottom-center"})}}),[]);return(0,x.useEffect)((()=>{if(a.location.pathname.split("/").length>2){const t=e.find((e=>e.url===a.location.pathname.split("/")[2]));t&&n(t)}}),[e,a.location]),x.createElement(x.Fragment,null,x.createElement(o,null,e&&e.map((e=>x.createElement(Z.rU,{key:e.id,to:`/workspace/${e.url}/channel/일반`,onClick:()=>n(e)},x.createElement(u,null,e.name.slice(0,1).toUpperCase())))),x.createElement(p,{onClick:i},"+")),x.createElement(_,{show:l,onCloseModal:s,onCreateWorkspace:c}))};var z=a(1753);const T=n.Z.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`,I=n.Z.form`
  color: rgb(29, 28, 29);
  font-size: 15px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(29, 28, 29);
`,D=(0,n.Z)(z.r)`
  font-family: Slack-Lato, appleLogo, sans-serif;
  font-size: 15px;
  padding: 8px 9px;
  width: 100%;
  & strong {
    background: skyblue;
  }
  & textarea {
    height: 44px;
    padding: 9px 10px !important;
    outline: none !important;
    border-radius: 4px !important;
    resize: none !important;
    line-height: 22px;
    border: none;
  }
  & ul {
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 150px;
  }
`,P=n.Z.div`
  position: relative;
  background: rgb(248, 248, 248);
  height: 41px;
  display: flex;
  border-top: 1px solid rgb(221, 221, 221);
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`,M=n.Z.button`
  position: absolute;
  right: 5px;
  top: 5px;
`,A=n.Z.button`
  padding: 4px 20px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  & img {
    margin-right: 5px;
  }
  ${({focus:e})=>e&&"\n    background: #1264a3;\n    color: white;\n  "};
`;var U=a(3682),N=a(6182),O=a.n(N);const F=({chat:e,onSubmitForm:t,onChangeChat:a,placeholder:n})=>{const{workspace:l}=(0,f.UO)(),{data:o,error:r,revalidate:i,mutate:s}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:c}=(0,b.ZP)(o&&"slack"!==l?`/api/workspaces/${l}/members`:null,m.Z),d=(0,x.useRef)(null);(0,x.useEffect)((()=>{d.current&&(0,U.Z)(d.current)}),[]);const p=(0,x.useCallback)((e=>{"Enter"===e.key&&(e.shiftKey||(e.preventDefault(),t(e)))}),[t]),u=(0,x.useCallback)(((e,t,a,n,l)=>{if(c)return x.createElement(A,{focus:l},x.createElement("img",{src:O().url(c[n].email,{s:"20px",d:"retro"}),alt:c[n].nickname}),x.createElement("span",null,a))}),[c]);return x.createElement(T,null,x.createElement(I,{onSubmit:t},x.createElement(D,{id:"editor-chat",value:e,onChange:a,onKeyPress:p,placeholder:n,inputRef:d,allowSuggestionsAboveCursor:!0},x.createElement(z.p,{appendSpaceOnAdd:!0,trigger:"@",data:(null==c?void 0:c.map((e=>({id:e.id,display:e.nickname}))))||[],renderSuggestion:u})),x.createElement(P,null,x.createElement(M,{className:"c-button-unstyled c-icon_button c-icon_button--light c-icon_button--size_medium c-texty_input__button c-texty_input__button--send"+(null!=e&&e.trim()?"":" c-texty_input__button--disabled"),"data-qa":"texty_send_button","aria-label":"Send message","data-sk":"tooltip_parent",type:"submit",disabled:!(null!=e&&e.trim())},x.createElement("i",{className:"c-icon c-icon--paperplane-filled","aria-hidden":"true"})))))};var L=a(1298);const B=n.Z.div`
  display: flex;
  padding: 8px 20px;
  &:hover {
    background: #eee;
  }
  & .chat-img {
    display: flex;
    width: 36px;
    margin-right: 8px;
    & img {
      width: 36px;
      height: 36px;
    }
  }
`;var H=a(7484),R=a.n(H),W=a(8817);const j=({data:e})=>{const{workspace:t}=(0,f.UO)(),a="Sender"in e?e.Sender:e.User,n=(0,x.useMemo)((()=>e.content.startsWith("uploads/")?x.createElement("img",{src:`https://hxxns-slack.herokuapp.com/${e.content}`,style:{maxHeight:200}}):(0,W.Z)({input:e.content,pattern:/@\[(.+?)]\((\d+?)\)|\n/g,decorator(e,a){const n=e.match(/@\[(.+?)]\((\d+?)\)/);return n?x.createElement(Z.rU,{key:e+a,to:`/workspace/${t}/dm/${n[2]}`},"@",n[1]):x.createElement("br",{key:a})}})),[t,e.content]);return x.createElement(B,null,x.createElement("div",{className:"chat-img"},x.createElement("img",{src:O().url(a.email,{s:"36px",d:"retro"}),alt:a.nickname})),x.createElement("div",{className:"chat-text"},x.createElement("div",{className:"chat-user"},x.createElement("b",null,a.nickname),x.createElement("span",{style:{padding:"0px 4px"}},R()(e.createdAt).format("h:mm A"))),x.createElement("p",null,n)))},q=(0,x.memo)(j),Y=n.Z.div`
  width: 100%;
  display: flex;
  flex: 1;
`,K=n.Z.section`
  margin-top: 20px;
  border-top: 1px solid #eee;
`,V=n.Z.div`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  position: sticky;
  top: 14px;
  & button {
    font-weight: bold;
    font-size: 13px;
    height: 28px;
    line-height: 27px;
    padding: 0 16px;
    z-index: 2;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 1px 3px 0 rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    position: relative;
    top: -13px;
    background: white;
    border: none;
    outline: none;
  }
`,J=(0,x.forwardRef)((({chatSections:e,setSize:t,isReachingEnd:a},n)=>{const l=(0,x.useCallback)((e=>{0!==e.scrollTop||a||(console.log("가장 위"),t((e=>e+1)).then((()=>{const t=null==n?void 0:n.current;t&&t.scrollTop(t.getScrollHeight()-e.scrollHeight)})))}),[n,a,t]);return x.createElement(Y,null,x.createElement(L.$B,{autoHide:!0,ref:n,onScrollFrame:l},Object.entries(e).map((([e,t])=>x.createElement(K,{className:`section-${e}`,key:e},x.createElement(V,null,x.createElement("button",null,e)),t.map((e=>x.createElement(q,{key:e.id,data:e}))))))))})),G=({show:e,onCloseModal:t,setShowInviteChannelModal:a})=>{const{workspace:n,channel:l}=(0,f.UO)(),[o,r,i]=(0,C.Z)(""),{data:s}=(0,b.ZP)("/api/users",m.Z),{revalidate:c}=(0,b.ZP)(s&&"slack"!==n&&l?`/api/workspaces/${n}/channels/${l}/members`:null,m.Z),d=(0,x.useCallback)((async e=>{if(e.preventDefault(),o&&o.trim())try{await g().post(`/api/workspaces/${n}/channels/${l}/members`,{email:o}),c(),a(!1),i("")}catch(e){var t;console.dir(e),S.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}}),[o]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:d},x.createElement(E.__,{id:"member-label"},x.createElement("span",null,"채널 멤버 초대"),x.createElement(E.II,{id:"member",value:o,onChange:r})),x.createElement(E.zx,{type:"submit"},"초대하기")))};var Q=a(5615);const X={},ee=e=>{const t=(0,x.useCallback)((()=>{e&&(X[e].disconnect(),delete X[e])}),[]);return e?(X[e]||(X[e]=(0,Q.io)(`http://localhost:3095/ws-${e}`,{transports:["websocket"]})),[X[e],t]):[void 0,t]},te=n.Z.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`,ae=n.Z.header`
  height: 64px;
  display: flex;
  width: 100%;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 var(--saf-0);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;

  & .header-right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`,ne=n.Z.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`,le=e=>{const t={};return e.forEach((e=>{const a=R()(e.createdAt).format("YYYY-MM-DD");Array.isArray(t[a])?t[a].push(e):t[a]=[e]})),t},oe=()=>{var e,t;const{workspace:a,channel:n}=(0,f.UO)(),{data:l}=(0,b.ZP)("/api/users",m.Z),[o,r,i]=(0,C.Z)(""),{data:s}=(0,b.ZP)((()=>"slack"!==a?`/api/workspaces/${a}/channels/${n}`:null),m.Z),{data:c,mutate:d,revalidate:p,setSize:u}=(0,b.g_)((e=>"slack"!==a?`/api/workspaces/${a}/channels/${n}/chats?perPage=20&page=${e+1}`:null),m.Z),{data:h}=(0,b.ZP)((()=>l&&"slack"!==a?`/api/workspaces/${a}/channels/${n}/members`:null),m.Z),[v]=ee(a),k=0===(null==c||null===(e=c[0])||void 0===e?void 0:e.length)||c&&(null===(t=c[c.length-1])||void 0===t?void 0:t.length)<20||!1,w=(0,x.useRef)(null),[E,_]=(0,x.useState)(!1),[y,Z]=(0,x.useState)(!1),S=(0,x.useCallback)((async e=>{if(e.preventDefault(),null!=o&&o.trim()&&c&&s)try{var t;await d((e=>{var t;return null==e||e[0].unshift({id:((null===(t=c[0][0])||void 0===t?void 0:t.id)||0)+1,content:o,UserId:l.id,User:l,ChannelId:s.id,Channel:s,createdAt:new Date}),e}),!1),null===(t=w.current)||void 0===t||t.scrollToBottom(),i(""),await g().post(`/api/workspaces/${a}/channels/${n}/chats`,{content:o}),p()}catch(e){console.error(e)}}),[o,c,l,s,a,n]),$=(0,x.useCallback)((async e=>{var t;console.log(e),e.Channel.name!==n||!e.content.startsWith("uploads")&&e.UserId===(null==l?void 0:l.id)||(await d((t=>(console.log(t),null==t||t[0].unshift(e),t)),!1),w.current&&w.current.getScrollHeight()<w.current.getClientHeight()+w.current.getScrollTop()+150&&(console.log("scrollToBottom!",null===(t=w.current)||void 0===t?void 0:t.getValues()),setTimeout((()=>{var e;null===(e=w.current)||void 0===e||e.scrollToBottom()}),50)))}),[n,l]);(0,x.useEffect)((()=>(null==v||v.on("message",$),()=>{null==v||v.off("message",$)})),[v,$]),(0,x.useEffect)((()=>{console.log(null==c?void 0:c.length),1===(null==c?void 0:c.length)&&setTimeout((()=>{var e;null===(e=w.current)||void 0===e||e.scrollToBottom()}),500)}),[c]);const z=(0,x.useCallback)((()=>{_(!0)}),[]),T=(0,x.useCallback)((()=>{_(!1)}),[]),I=((0,x.useCallback)((e=>{const t=new FormData;if(e.target.files)for(let a=0;a<e.target.files.length;a++){const n=e.target.files[a].getAsFile();console.log("... file["+a+"].name = "+n.name),t.append("image",n)}g().post(`/api/workspaces/${a}/channels/${n}/images`,t).then((()=>{}))}),[]),(0,x.useCallback)((e=>{e.preventDefault(),console.log(e);const t=new FormData;if(e.dataTransfer.items){for(let a=0;a<e.dataTransfer.items.length;a++)if("file"===e.dataTransfer.items[a].kind){const n=e.dataTransfer.items[a].getAsFile();console.log("... file["+a+"].name = "+n.name),t.append("image",n)}}else for(let a=0;a<e.dataTransfer.files.length;a++)console.log("... file["+a+"].name = "+e.dataTransfer.files[a].name),t.append("image",e.dataTransfer.files[a]);g().post(`/api/workspaces/${a}/channels/${n}/images`,t).then((()=>{Z(!1)}))}),[a,n])),D=(0,x.useCallback)((e=>{e.preventDefault(),console.log(e),Z(!0)}),[]);if(!l)return null;const P=le(c?c.flat().reverse():[]);return x.createElement(te,{onDrop:I,onDragOver:D},x.createElement(ae,null,x.createElement("span",null,"#",n),x.createElement("div",{className:"header-right"},x.createElement("span",null,null==h?void 0:h.length),x.createElement("button",{onClick:z,className:"c-button-unstyled p-ia__view_header__button","aria-label":"Add people to #react-native","data-sk":"tooltip_parent",type:"button"},x.createElement("i",{className:"c-icon p-ia__view_header__button_icon c-icon--add-user","aria-hidden":"true"})))),x.createElement(J,{chatSections:P,ref:w,setSize:u,isReachingEnd:k}),x.createElement(F,{chat:o,onChangeChat:r,onSubmitForm:S}),x.createElement(G,{show:E,onCloseModal:T,setShowInviteChannelModal:_}),y&&x.createElement(ne,null,"업로드!"))},re=n.Z.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  & > div {
    position: absolute;
    display: inline-block;
    --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
    box-shadow: 0 0 0 1px var(--saf-0), 0 4px 12px 0 rgba(0, 0, 0, 0.12);
    background-color: rgba(var(--sk_foreground_min_solid, 248, 248, 248), 1);
    border-radius: 6px;
    user-select: none;
    min-width: 360px;
    z-index: 512;
    max-height: calc(100vh - 20px);
    color: rgb(29, 28, 29);
  }
`,ie=n.Z.button`
  position: absolute;
  right: 10px;
  top: 6px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
`,se=({children:e,style:t,show:a,onCloseModal:n,closeButton:l})=>{const o=(0,x.useCallback)((e=>{e.stopPropagation()}),[]);return a?x.createElement(re,{onClick:n},x.createElement("div",{style:t,onClick:o},l&&x.createElement(ie,{onClick:n},"×"),e)):null};se.defaultProps={closeButton:!0};const ce=se,de=n.Z.header`
  height: 38px;
  background: #350d36;
  color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  padding: 5px;
  text-align: center;
`,pe=n.Z.div`
  float: right;
`,ue=n.Z.img`
  width: 28px;
  height: 28px;
  position: absolute;
  top: 5px;
  right: 16px;
`,me=n.Z.div`
  display: flex;
  padding: 20px;
  & img {
    display: flex;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }
  & #profile-name {
    font-weight: bold;
    display: inline-flex;
  }
  & #profile-active {
    font-size: 13px;
    display: inline-flex;
  }
`,he=n.Z.button`
  border: none;
  width: 100%;
  border-top: 1px solid rgb(29, 28, 29);
  background: transparent;
  display: block;
  height: 33px;
  padding: 5px 20px 5px;
  outline: none;
  cursor: pointer;
`,ge=({onLogout:e})=>{const{data:t}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),[a,n]=(0,x.useState)(!1),l=(0,x.useCallback)((e=>{e.stopPropagation(),n(!1)}),[]),o=(0,x.useCallback)((()=>{n((e=>!e))}),[]);return t?x.createElement(de,null,x.createElement(pe,null,x.createElement("span",{onClick:o},x.createElement(ue,{src:O().url(t.email,{s:"28px",d:"retro"}),alt:t.nickname}),a&&x.createElement(ce,{style:{right:0,top:38},show:a,onCloseModal:l},x.createElement(me,null,x.createElement("img",{src:O().url(t.nickname,{s:"36px",d:"retro"}),alt:t.nickname}),x.createElement("div",null,x.createElement("span",{id:"profile-name"},t.nickname),x.createElement("span",{id:"profile-active"},"Active"))),x.createElement(he,{onClick:e},"로그아웃"))))):null},xe=n.Z.button`
  background: transparent;
  border: none;
  width: 26px;
  height: 26px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 10px;
  cursor: pointer;
  ${({collapse:e})=>e&&"\n    & i {\n      transform: none;\n    }\n  "};
`,fe=()=>{const{workspace:e}=(0,f.UO)(),[t]=ee(e),{data:a}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:n}=(0,b.ZP)((()=>a&&"slack"!==e?`/api/workspaces/${e}/channels`:null),m.Z),[l,o]=(0,x.useState)(!1),r=(0,x.useCallback)((()=>{o((e=>!e))}),[]);return(0,x.useEffect)((()=>{n&&a&&t&&t.emit("login",{id:a.id,channels:n.map((e=>e.id))})}),[t,n,a]),x.createElement(x.Fragment,null,x.createElement("h2",null,x.createElement(xe,{collapse:l,onClick:r},x.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),x.createElement("span",null,"Channels")),x.createElement("div",null,!l&&(null==n?void 0:n.map((t=>x.createElement(Z.OL,{key:t.name,activeClassName:"selected",to:`/workspace/${e}/channel/${t.name}`},x.createElement("span",null,"# ",t.name)))))))},be=({show:e,onCloseModal:t,setShowCreateChannelModal:a})=>{const[n,l,o]=(0,C.Z)(""),{workspace:r,channel:i}=(0,f.UO)(),{data:s,error:c,revalidate:d}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{revalidate:p}=(0,b.ZP)(s&&"slack"!==r?`/api/workspaces/${r}/channels`:null,m.Z),u=(0,x.useCallback)((async e=>{e.preventDefault();try{await g().post(`/api/workspaces/${r}/channels`,{name:n},{withCredentials:!0}),a(!1),p(),o("")}catch(e){var t;console.dir(e),S.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}}),[n]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:u},x.createElement(E.__,{id:"channel-label"},x.createElement("span",null,"채널"),x.createElement(E.II,{id:"channel",value:n,onChange:l})),x.createElement(E.zx,{type:"submit"},"생성하기")))},ve=()=>{const{workspace:e}=(0,f.UO)(),{data:t}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:a}=(0,b.ZP)(t&&"slack"!==e?`/api/workspaces/${e}/members`:null,m.Z),[n]=ee(e),[l,o]=(0,x.useState)(!1),[r,i]=(0,x.useState)([]),s=(0,x.useCallback)((()=>{o((e=>!e))}),[]);return(0,x.useEffect)((()=>{i([])}),[e]),(0,x.useEffect)((()=>(null==n||n.on("onlineList",(e=>{console.log(e),i(e)})),()=>{null==n||n.off("onlineList")})),[n]),x.createElement(x.Fragment,null,x.createElement("h2",null,x.createElement(xe,{collapse:l,onClick:s},x.createElement("i",{className:"c-icon p-channel_sidebar__section_heading_expand p-channel_sidebar__section_heading_expand--show_more_feature c-icon--caret-right c-icon--inherit c-icon--inline","data-qa":"channel-section-collapse","aria-hidden":"true"})),x.createElement("span",null,"Direct Messages")),x.createElement("div",null,!l&&a&&a.length>0&&a.map((a=>{const n=r.includes(a.id);return x.createElement(Z.OL,{key:a.id,activeClassName:"selected",to:`/workspace/${e}/dm/${a.id}`},x.createElement("i",{className:"c-icon p-channel_sidebar__presence_icon p-channel_sidebar__presence_icon--dim_enabled c-presence "+(n?"c-presence--active c-icon--presence-online":"c-icon--presence-offline"),"aria-hidden":"true","data-qa":"presence_indicator","data-qa-presence-self":"false","data-qa-presence-active":"false","data-qa-presence-dnd":"false"}),x.createElement("span",null,a.nickname),a.id===(null==t?void 0:t.id)&&x.createElement("span",null," (나)"))}))))},ke=({show:e,onCloseModal:t,setShowInviteWorkspaceModal:a})=>{const{workspace:n}=(0,f.UO)(),[l,o,r]=(0,C.Z)(""),{data:i}=(0,b.ZP)("/api/users",m.Z),{revalidate:s}=(0,b.ZP)(i&&"slack"!==n?`/api/workspaces/${n}/members`:null,m.Z),c=(0,x.useCallback)((async e=>{if(e.preventDefault(),l&&l.trim())try{await g().post(`/api/workspaces/${n}/members`,{email:l}),s(),a(!1),r("")}catch(e){var t;console.dir(e),S.Am.error(null===(t=e.response)||void 0===t?void 0:t.data,{position:"bottom-center"})}}),[n,l]);return x.createElement(w,{show:e,onCloseModal:t},x.createElement("form",{onSubmit:c},x.createElement(E.__,{id:"member-label"},x.createElement("span",null,"이메일"),x.createElement(E.II,{id:"member",type:"email",value:l,onChange:o})),x.createElement(E.zx,{type:"submit"},"초대하기")))},we=({onLogout:e})=>{const{workspace:t}=(0,y.c)(),[a,n]=(0,x.useState)(!1),[l,o]=(0,x.useState)(!1),[d,p]=(0,x.useState)(!1),u=(0,x.useCallback)((()=>{n((e=>!e))}),[]),m=(0,x.useCallback)((()=>{p(!0)}),[]),h=(0,x.useCallback)((()=>{o((e=>!e))}),[]),g=(0,x.useCallback)((()=>{o(!1),p(!1)}),[]);return x.createElement(x.Fragment,null,x.createElement(r,null,x.createElement(i,{onClick:u},(null==t?void 0:t.name)||""),x.createElement("i",null),x.createElement(s,null,t&&x.createElement(x.Fragment,null,x.createElement(ce,{show:a,onCloseModal:u,style:{top:95,left:80}},x.createElement(c,null,x.createElement("h2",null,null==t?void 0:t.name),x.createElement("button",{onClick:m},"워크스페이스에 사용자 초대"),x.createElement("button",{onClick:h},"채널 만들기"),x.createElement("button",{onClick:e},"로그아웃"))),x.createElement(fe,null),x.createElement(ve,null)))),x.createElement(be,{show:l,onCloseModal:g,setShowCreateChannelModal:o}),x.createElement(ke,{show:d,onCloseModal:g,setShowInviteWorkspaceModal:p}))},Ee=n.Z.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 38px);
  flex-flow: column;
  position: relative;
`,Ce=n.Z.header`
  height: 64px;
  display: flex;
  width: 100%;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  box-shadow: 0 1px 0 var(--saf-0);
  padding: 20px 16px 20px 20px;
  font-weight: bold;
  align-items: center;
  & img {
    margin-right: 5px;
  }
`,_e=n.Z.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  background: white;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
`,ye=()=>{var e,t;const{workspace:a,id:n}=(0,f.UO)(),{data:l}=(0,b.ZP)(`/api/workspaces/${a}/users/${n}`,m.Z),{data:o}=(0,b.ZP)("/api/users",m.Z),[r,i,s]=(0,C.Z)(""),{data:c,mutate:d,revalidate:p,setSize:u}=(0,b.g_)((e=>"slack"!==a?`/api/workspaces/${a}/dms/${n}/chats?perPage=20&page=${e+1}`:null),m.Z),[h]=ee(a),v=0===(null==c||null===(e=c[0])||void 0===e?void 0:e.length)||c&&(null===(t=c[c.length-1])||void 0===t?void 0:t.length)<20||!1,k=(0,x.useRef)(null),[w,E]=(0,x.useState)(!1),_=(0,x.useCallback)((async e=>{if(e.preventDefault(),null!=r&&r.trim()&&c)try{var t;await d((e=>{var t;return null==e||e[0].unshift({id:((null===(t=c[0][0])||void 0===t?void 0:t.id)||0)+1,content:r,SenderId:o.id,Sender:o,ReceiverId:l.id,Receiver:l,createdAt:new Date}),e}),!1),s(""),null===(t=k.current)||void 0===t||t.scrollToBottom(),await g().post(`/api/workspaces/${a}/dms/${n}/chats`,{content:r}),p()}catch(e){console.error(e)}}),[r,c,o,l,a,n]),y=(0,x.useCallback)((async e=>{var t;e.SenderId===Number(n)&&o.id!==Number(n)&&(await d((t=>(null==t||t[0].unshift(e),t)),!1),k.current&&k.current.getScrollHeight()<k.current.getClientHeight()+k.current.getScrollTop()+150&&(console.log("scrollToBottom!",null===(t=k.current)||void 0===t?void 0:t.getValues()),setTimeout((()=>{var e;null===(e=k.current)||void 0===e||e.scrollToBottom()}),50)))}),[]);(0,x.useEffect)((()=>(null==h||h.on("dm",y),()=>{null==h||h.off("dm",y)})),[h,y]),(0,x.useEffect)((()=>{1===(null==c?void 0:c.length)&&setTimeout((()=>{var e;null===(e=k.current)||void 0===e||e.scrollToBottom()}),100)}),[c]);const Z=(0,x.useCallback)((async e=>{e.preventDefault(),console.log(e);const t=new FormData;if(e.dataTransfer.items){for(let a=0;a<e.dataTransfer.items.length;a++)if("file"===e.dataTransfer.items[a].kind){const n=e.dataTransfer.items[a].getAsFile();console.log("... file["+a+"].name = "+n.name),t.append("image",n)}}else for(let a=0;a<e.dataTransfer.files.length;a++)console.log("... file["+a+"].name = "+e.dataTransfer.files[a].name),t.append("image",e.dataTransfer.files[a]);try{await g().post(`/api/workspaces/${a}/dms/${n}/images`,t),E(!1),p()}catch(e){console.log(e)}}),[p,a,n]),S=(0,x.useCallback)((e=>{e.preventDefault(),console.log("onDragOver"),E(!0)}),[]),$=(0,x.useCallback)((e=>{e.preventDefault(),console.log("onDragLeave"),E(!1)}),[]);if(!l||!o)return null;const z=le(c?c.flat().reverse():[]);return x.createElement(Ee,{onDrop:Z,onDragOver:S,onDragLeave:$},x.createElement(Ce,null,x.createElement("img",{src:O().url(l.email,{s:"24px",d:"retro"}),alt:l.nickname}),x.createElement("span",null,l.nickname)),x.createElement(J,{chatSections:z,ref:k,setSize:u,isReachingEnd:v}),x.createElement(F,{chat:r,onChangeChat:i,onSubmitForm:_}),w&&x.createElement(_e,null,"업로드"))},Ze=()=>{const{workspace:e}=(0,f.UO)(),{data:t,mutate:a}=(0,b.ZP)("/api/users",m.Z,{dedupingInterval:2e3}),{data:n,revalidate:o}=(0,b.ZP)("/api/workspaces",m.Z,{dedupingInterval:2e3}),r=(0,x.useCallback)((async()=>{try{await g().post("/api/users/logout",null,{withCredentials:!0}),a(!1,!1)}catch(t){var e;console.dir(t),S.Am.error(null===(e=t.response)||void 0===e?void 0:e.data,{position:"bottom-center"})}}),[]);return t?x.createElement("div",null,x.createElement(ge,{onLogout:r}),x.createElement(l,null,x.createElement($,{list:n||[],revalidate:o}),x.createElement(we,{onLogout:r}),e&&"slack"!==e&&x.createElement(d,null,x.createElement(f.rs,null,x.createElement(f.AW,{path:"/workspace/:workspace/channel/:channel",component:oe}),x.createElement(f.AW,{path:"/workspace/:workspace/dm/:id",component:ye}))))):x.createElement(f.l_,{to:"/login"})}},1670:(e,t,a)=>{"use strict";a.d(t,{h4:()=>l,l0:()=>o,__:()=>r,II:()=>i,zx:()=>s,jj:()=>c,fB:()=>d,Ji:()=>p});var n=a(5558);const l=n.Z.header`
  text-align: center;
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: -0.75px;
  margin-top: 50px;
  margin-bottom: 50px;
`,o=n.Z.form`
  margin: 0 auto;
  width: 400px;
  max-width: 400px;
`,r=n.Z.label`
  margin-bottom: 16px;
  & > span {
    display: block;
    text-align: left;
    padding-bottom: 8px;
    font-size: 15px;
    cursor: pointer;
    line-height: 1.46666667;
    font-weight: 700;
  }
`,i=n.Z.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  margin: 0 0 20px;
  width: 100%;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 12px;
  height: 44px;
  padding-top: 11px;
  padding-bottom: 13px;
  font-size: 18px;
  line-height: 1.33333333;
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`,s=n.Z.button`
  margin-bottom: 12px;
  width: 100%;
  max-width: 100%;
  color: #fff;
  background-color: #4a154b;
  border: none;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  transition: all 80ms linear;
  user-select: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: rgba(74, 21, 75, 0.9);
    border: none;
  }
  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`,c=n.Z.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`,d=n.Z.div`
  color: #2eb67d;
  font-weight: bold;
`,p=n.Z.p`
  font-size: 13px;
  color: #616061;
  margin: 0 auto 8px;
  width: 400px;
  max-width: 400px;
  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  }
`},3564:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(9669),l=a.n(n);const o=async e=>{const{data:t}=await l().get(e,{withCredentials:!0});return t}}}]);