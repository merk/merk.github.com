import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-sr_6Wtjm.js";import{n as i,t as a}from"./Badge-ApF2ANew.js";import{n as ee}from"./Button-CZ17wyqP.js";import{n as te}from"./Icon-C7NQ986a.js";import{n as ne}from"./Callout-CRvFvNpg.js";import{n as re}from"./Checkbox-DCI_UEVZ.js";import{n as ie}from"./DiagnosticRow-C5tATvI-.js";import{n as ae}from"./SeverityDot-Dgt-v9tE.js";import{n as oe}from"./EmptyState--tofjMqb.js";import{n as se}from"./Mark-C_JzK_cn.js";import{n as ce}from"./Field-CMWDvmkJ.js";import{n as le}from"./IconButton-BMcV8g2e.js";import{n as ue}from"./ToggleButton-vXlgJz99.js";import{n as o}from"./KbdHint-BHw5u9ME.js";import{n as de}from"./LayerRow-fe2yywSw.js";import{n as fe}from"./ListRow-9TrZqIC_.js";import{r as pe}from"./Swatch-DGO2ILSp.js";import{n as me}from"./Lockup-CNUaorSR.js";import{n as he}from"./Wordmark-CC6PNHFa.js";import{n as s,r as ge,t as _e}from"./tokens-BuBeWaXb.js";import{n as ve}from"./NumberField-LgZMW491.js";import{n as ye}from"./Panel-S8lusMa-.js";import{n as be}from"./PanelGroup-DYXaEGI4.js";import{n as xe}from"./SegmentedControl-BL3pMvbt.js";import{n as Se}from"./Select-D1TyZoom.js";import{n as Ce}from"./Slider-Dz0jpkTp.js";import{n as we}from"./SplitPane-CX5QOsEG.js";import{r as c}from"./StatusBar-CNDmZVNr.js";import{n as Te}from"./TextField-tunf2Ez4.js";import{r as Ee}from"./Toast-Dmj1QWPZ.js";import{r as De}from"./Toolbar-DZvX8eik.js";import{r as Oe}from"./ToolRail-BCJrDSJ9.js";import{n as ke}from"./Tooltip-CPn7T1VX.js";var l,u,d,f,p,Ae=e((()=>{ge(),l={lineWidthMm:1,fitPadding:40,scaleBarTargetPx:90},u=e=>{let t=_e[e];return{overlay:{accent:t.accent,handle:e===`dark`?t.accentHi:t.accent,preview:t.ink2,calibrate:t.warn,knob:t.knob,previewDash:[4,4],calibrateDash:[5,4],error:t.err,warn:t.warn,info:t.info},content:{background:t.canvas,sheetFill:s(t.sheet),sheetStroke:s(t.line),originStroke:s(t.ink3),edgeStroke:s(t.cutLine),ghostStroke:s(t.err),faceFill:t.accentTint,sheetStrokeWidth:2,originStrokeWidth:1,originArmFraction:.05,ghostWidthFraction:.5},...l}},d=u(`dark`),f=u(`light`),p=e=>e===`light`?f:d}));function m(e,t){return{x:t.x*e.scale+e.x,y:t.y*e.scale+e.y}}var h,g=e((()=>{h={x:0,y:0,scale:1}}));function je(e,t){let n=[],r=[];for(let i of e)switch(i.kind){case`handle`:{let e=_[i.weight??`normal`][i.state??`idle`];r.push(D(i.world,e,t));break}case`knob`:n.push({world:[i.anchor,i.world],stroke:t.handle,width:C}),r.push(D(i.world,v[i.state??`idle`],t));break;case`snap`:r.push(D(i.world,y[i.snap],t));break;case`preview`:n.push({world:i.world,stroke:i.tone===`accent`?t.accent:t.preview,width:w,dash:[...t.previewDash],...i.closed===!0?{closed:!0}:{}});break;case`outline`:n.push({world:i.world,stroke:t.accent,width:T[i.state??`idle`],...i.closed===!0?{closed:!0}:{}});break;case`ruler`:{let e=i.pending===!0;i.to!==void 0&&n.push({world:[i.from,i.to],stroke:t.calibrate,width:S,...e?{dash:[...t.calibrateDash]}:{}}),r.push(D(i.from,x,t)),i.to!==void 0&&!e&&r.push(D(i.to,x,t));break}case`marker`:{let e=b[i.state===`selected`?`selected`:`idle`];r.push(D(i.world,e,t,E(i.severity)));break}case`label`:break}return{paths:n,dots:r}}var _,v,y,b,x,S,C,w,T,E,D,Me=e((()=>{_={quiet:{idle:{radius:3,fill:`handle`},hover:{radius:4,fill:`knob`,stroke:{role:`accent`,width:2}},selected:{radius:5,fill:`accent`,stroke:{role:`knob`,width:2}},active:{radius:6,fill:`accent`,stroke:{role:`knob`,width:2}}},normal:{idle:{radius:4,fill:`knob`,stroke:{role:`accent`,width:2}},hover:{radius:5,fill:`knob`,stroke:{role:`accent`,width:2}},selected:{radius:5,fill:`accent`,stroke:{role:`knob`,width:2}},active:{radius:6,fill:`accent`,stroke:{role:`knob`,width:2}}}},v={idle:{radius:3,fill:`handle`},hover:{radius:4,fill:`handle`},selected:{radius:4,fill:`accent`},active:{radius:5,fill:`accent`}},y={vertex:{radius:6,stroke:{role:`accent`,width:2}},edge:{radius:4,fill:`accent`,stroke:{role:`accent`,width:1}},grid:{radius:3,fill:`accent`}},b={idle:{radius:5},selected:{radius:8,stroke:{role:`knob`,width:2}}},x={radius:4,fill:`calibrate`,stroke:{role:`knob`,width:1}},S=2,C=1,w=1,T={idle:2,hover:2,selected:3,active:3},E=e=>e,D=(e,t,n,r)=>{let i=r??t.fill;return{world:e,radius:t.radius,...i===void 0?{}:{fill:n[i]},...t.stroke===void 0?{}:{stroke:n[t.stroke.role],strokeWidth:t.stroke.width}}}}));function Ne(e,t,n,r,i){e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,r.width,r.height);for(let r of t.paths??[])if(r.world.length!==0){e.setLineDash(r.dash===void 0?[]:[...r.dash]),e.strokeStyle=r.stroke,e.lineWidth=r.width??1,e.beginPath();for(let[t,i]of r.world.entries()){let r=m(n,i);t===0?e.moveTo(r.x,r.y):e.lineTo(r.x,r.y)}r.closed===!0&&e.closePath(),e.stroke()}for(let r of t.dots??[]){let t=m(n,r.world);e.beginPath(),e.arc(t.x,t.y,r.radius,0,O),r.fill!==void 0&&(e.fillStyle=r.fill,e.fill()),r.stroke!==void 0&&(e.setLineDash([]),e.strokeStyle=r.stroke,e.lineWidth=r.strokeWidth??1,e.stroke())}}var O,Pe=e((()=>{g(),O=Math.PI*2})),k,A,j,Fe=e((()=>{k=`_layer_1afdr_4`,A=`_anchor_1afdr_12`,j={layer:k,anchor:A}})),Ie=e((()=>{i(),ee(),ne(),re(),ie(),oe(),ce(),te(),le(),o(),de(),fe(),me(),se(),ve(),ye(),be(),xe(),Se(),ae(),Ce(),we(),c(),pe(),Te(),Ee(),ue(),De(),Oe(),ke(),he()}));function M({store:e,positionRef:t,cameraRef:n}){let r=(0,N.useSyncExternalStore)(e.subscribe,e.getSnapshot),i=(0,N.useRef)([]);return(0,N.useLayoutEffect)(()=>{let e=e=>{for(let[t,n]of r.entries()){let r=i.current[t];if(r==null)continue;let a=m(e,n.world);r.style.transform=`translate(${a.x}px, ${a.y}px)`}};t.current=e;let a=n.current;return a!==null&&e(a),()=>{t.current=null}},[r,t,n]),(0,P.jsx)(`div`,{className:j.layer,"aria-hidden":`true`,"data-testid":`annotation-layer`,children:r.map((e,t)=>(0,P.jsx)(`div`,{className:j.anchor,ref:e=>{i.current[t]=e},children:(0,P.jsx)(a,{tone:e.tone===`calibrate`?`accent`:`neutral`,mono:!0,children:e.text})},t))})}var N,P,Le=e((()=>{N=t(n(),1),g(),Fe(),Ie(),P=r(),M.__docgenInfo={description:``,methods:[],displayName:`AnnotationLayer`,props:{store:{required:!0,tsType:{name:`AnnotationStore`},description:`The owning canvas's label store. Injected, not imported: one store per canvas.`},positionRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`((camera: Camera) => void) | null`,elements:[{name:`unknown`},{name:`null`}]}],raw:`RefObject<((camera: Camera) => void) | null>`},description:`Populated with a positioning callback the frame loop calls; never a React render.`},cameraRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`Camera | null`,elements:[{name:`Camera`},{name:`null`}]}],raw:`RefObject<Camera | null>`},description:`The live camera, read through a ref (never a value prop) — a pan/zoom must not re-render this
component. Used to position a freshly-mounted label immediately, without waiting for the next
\`redraw\`.`}}}}));function Re(e,t,n){let r=n=>e(n,...t);return n===void 0?r:Object.assign(r,{lazy:n,lazyArgs:t})}var ze=e((()=>{}));function Be(e,t,n){let r=e.length-t.length;if(r===0)return e(...t);if(r===1)return Re(e,t,n);throw Error(`Wrong number of arguments`)}var Ve=e((()=>{ze()}));function He(...e){return Be(F,e)}function F(e,t){if(e===t||Object.is(e,t))return!0;if(typeof e!=`object`||typeof t!=`object`||e===null||t===null||!Ue(e,t))return!1;if(Array.isArray(e))return We(e,t);if(e instanceof Map)return Ge(e,t);if(e instanceof Set)return Ke(e,t);if(e instanceof Date)return e.getTime()===t.getTime();if(e instanceof RegExp)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let[n,r]of Object.entries(e))if(!(n in t)||!F(r,t[n]))return!1;return!0}function Ue(e,t){let n=Object.getPrototypeOf(e),r=Object.getPrototypeOf(t);return n===r?!0:n===null?r===Object.prototype:n===Object.prototype&&r===null}function We(e,t){if(e.length!==t.length)return!1;for(let[n,r]of e.entries())if(!F(r,t[n]))return!1;return!0}function Ge(e,t){if(e.size!==t.size)return!1;for(let[n,r]of e.entries())if(!t.has(n)||!F(r,t.get(n)))return!1;return!0}function Ke(e,t){if(e.size!==t.size)return!1;let n=[...t];for(let t of e){let e=!1;for(let[r,i]of n.entries())if(F(t,i)){e=!0,n.splice(r,1);break}if(!e)return!1}return!0}var qe=e((()=>{Ve()})),Je=e((()=>{qe()}));function Ye(){let e=[],t=new Set;return{set(n){if(!He(e,n)){e=n;for(let e of t)e()}},subscribe(e){return t.add(e),()=>t.delete(e)},getSnapshot(){return e}}}var Xe=e((()=>{Je()}));function Ze({marks:e,mode:t,size:n}){let r=(0,L.useRef)(null);return(0,L.useEffect)(()=>{let i=r.current?.getContext(`2d`);i!=null&&Ne(i,je(e,p(t).overlay),h,n,1)},[e,t,n]),(0,R.jsx)(`canvas`,{ref:r,width:n.width,height:n.height,"data-theme":t,style:{display:`block`,background:`var(--canvas)`,borderRadius:`var(--radius-1)`}})}function I({marks:e,size:t,columns:n}){return(0,R.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:B.map(r=>(0,R.jsxs)(`div`,{"data-theme":r,style:{display:`grid`,gap:`var(--space-2)`},children:[(0,R.jsx)(`span`,{style:H,children:r}),(0,R.jsx)(Ze,{marks:e,mode:r,size:t}),(0,R.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, ${t.width/n.length}px)`},children:n.map(e=>(0,R.jsx)(`span`,{style:H,children:e},e))})]},r))})}function Qe({mode:e}){let t=(0,L.useRef)(null),n=(0,L.useRef)(h),[r]=(0,L.useState)(Ye);return(0,L.useEffect)(()=>{r.set([{kind:`label`,world:{x:24,y:30},text:`42.0 mm`,tone:`calibrate`},{kind:`label`,world:{x:160,y:30},text:`Piece 12`}])},[r]),(0,L.useEffect)(()=>{t.current?.(h)}),(0,R.jsx)(`div`,{"data-theme":e,style:{position:`relative`,width:260,height:64,background:`var(--canvas)`,borderRadius:`var(--radius-1)`},children:(0,R.jsx)(M,{store:r,positionRef:t,cameraRef:n})})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{L=t(n(),1),Ae(),g(),Me(),Pe(),Le(),Xe(),R=r(),z={title:`Kit/Marks`},B=[`light`,`dark`],V=[`idle`,`hover`,`selected`,`active`],H={color:`var(--ink2)`,font:`var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)`},U=88,W=88,G={render:()=>{let e=[`quiet`,`normal`];return(0,R.jsx)(I,{marks:e.flatMap((e,t)=>V.map((n,r)=>({kind:`handle`,weight:e,state:n,world:{x:(t*V.length+r)*U+U/2,y:W/2}}))),size:{width:U*e.length*V.length,height:W},columns:e.flatMap(e=>V.map(t=>`${e} ${t}`))})}},K={render:()=>(0,R.jsx)(I,{marks:V.map((e,t)=>({kind:`knob`,state:e,anchor:{x:t*U+U/2,y:W-14},world:{x:t*U+U/2,y:14}})),size:{width:U*V.length,height:W},columns:[...V]})},q={render:()=>{let e=[`vertex`,`edge`,`grid`];return(0,R.jsx)(I,{marks:e.map((e,t)=>({kind:`snap`,snap:e,world:{x:t*U+U/2,y:W/2}})),size:{width:U*e.length,height:W},columns:e})}},J={render:()=>{let e=[`muted`,`accent`],t=e=>[{x:e,y:60},{x:e+40,y:20},{x:e+80,y:60},{x:e+120,y:20}];return(0,R.jsx)(I,{marks:e.map((e,n)=>({kind:`preview`,tone:e,world:t(n*160+20)})),size:{width:160*e.length,height:80},columns:e})}},Y={render:()=>(0,R.jsx)(I,{marks:V.map((e,t)=>{let n=t*U+U/2;return{kind:`outline`,state:e,world:[{x:n,y:W/2-24},{x:n+24,y:68},{x:n-24,y:68}],closed:!0}}),size:{width:U*V.length,height:W},columns:[...V]})},X={render:()=>(0,R.jsx)(I,{marks:[{kind:`ruler`,from:{x:20,y:W/2},to:{x:U-20,y:W/2},pending:!0},{kind:`ruler`,from:{x:108,y:W/2},to:{x:U*2-20,y:W/2}}],size:{width:U*2,height:W},columns:[`pending`,`measured`]})},Z={render:()=>{let e=[`error`,`warn`,`info`],t=[`idle`,`selected`];return(0,R.jsx)(I,{marks:e.flatMap((e,n)=>t.map((r,i)=>({kind:`marker`,severity:e,state:r,world:{x:(n*t.length+i)*U+U/2,y:W/2}}))),size:{width:U*e.length*t.length,height:W},columns:e.flatMap(e=>t.map(t=>`${e} ${t}`))})}},Q={render:()=>(0,R.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:B.map(e=>(0,R.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,R.jsx)(`span`,{style:H,children:e}),(0,R.jsx)(Qe,{mode:e})]},e))})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const weights: readonly MarkWeight[] = ['quiet', 'normal'];
    const marks: HandleMark[] = weights.flatMap((weight, wi) => STATES.map((state, si) => ({
      kind: 'handle',
      weight,
      state,
      world: {
        x: (wi * STATES.length + si) * COL + COL / 2,
        y: ROW / 2
      }
    })));
    return <BothThemes marks={marks} size={{
      width: COL * weights.length * STATES.length,
      height: ROW
    }} columns={weights.flatMap(weight => STATES.map(state => \`\${weight} \${state}\`))} />;
  }
}`,...G.parameters?.docs?.source},description:{story:"Every weight × state combination: 2 × 4 = 8 columns, the `HANDLE` table's full shape.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const marks: KnobMark[] = STATES.map((state, i) => ({
      kind: 'knob',
      state,
      anchor: {
        x: i * COL + COL / 2,
        y: ROW - 14
      },
      world: {
        x: i * COL + COL / 2,
        y: 14
      }
    }));
    return <BothThemes marks={marks} size={{
      width: COL * STATES.length,
      height: ROW
    }} columns={[...STATES]} />;
  }
}`,...K.parameters?.docs?.source},description:{story:`Every state's leader + grip. The leader runs straight up from the anchor to the grip, the same
 shape a bézier control point draws off its own vertex.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const kinds: readonly SnapMark['snap'][] = ['vertex', 'edge', 'grid'];
    const marks: SnapMark[] = kinds.map((snap, i) => ({
      kind: 'snap',
      snap,
      world: {
        x: i * COL + COL / 2,
        y: ROW / 2
      }
    }));
    return <BothThemes marks={marks} size={{
      width: COL * kinds.length,
      height: ROW
    }} columns={kinds} />;
  }
}`,...q.parameters?.docs?.source},description:{story:"All three snap kinds: vertex (hollow accent ring), edge (filled + thin ring), grid (filled, no\n ring) — `SNAP`'s full shape.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => {
    const tones: readonly NonNullable<PreviewMark['tone']>[] = ['muted', 'accent'];
    const pcol = 160;
    const zigzag = (x0: number): readonly Vec2[] => [{
      x: x0,
      y: 60
    }, {
      x: x0 + 40,
      y: 20
    }, {
      x: x0 + 80,
      y: 60
    }, {
      x: x0 + 120,
      y: 20
    }];
    const marks: PreviewMark[] = tones.map((tone, i) => ({
      kind: 'preview',
      tone,
      world: zigzag(i * pcol + 20)
    }));
    return <BothThemes marks={marks} size={{
      width: pcol * tones.length,
      height: 80
    }} columns={tones} />;
  }
}`,...J.parameters?.docs?.source},description:{story:"Both tones: `muted` (the pen rubber-band) and `accent` (the select marquee), each a dashed\n zigzag so the dash pattern itself is visible, not just the stroke colour.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const r = 24;
    const marks: OutlineMark[] = STATES.map((state, i) => {
      const cx = i * COL + COL / 2;
      const cy = ROW / 2;
      const world: Vec2[] = [{
        x: cx,
        y: cy - r
      }, {
        x: cx + r,
        y: cy + r
      }, {
        x: cx - r,
        y: cy + r
      }];
      return {
        kind: 'outline',
        state,
        world,
        closed: true
      };
    });
    return <BothThemes marks={marks} size={{
      width: COL * STATES.length,
      height: ROW
    }} columns={[...STATES]} />;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Every state's emphasis stroke, over a closed triangle so the stroke reads against real geometry\n rather than a bare line. `selected` and `active` share a width by design (§ table comment).",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const marks: RulerMark[] = [{
      kind: 'ruler',
      from: {
        x: 20,
        y: ROW / 2
      },
      to: {
        x: COL - 20,
        y: ROW / 2
      },
      pending: true
    }, {
      kind: 'ruler',
      from: {
        x: COL + 20,
        y: ROW / 2
      },
      to: {
        x: COL * 2 - 20,
        y: ROW / 2
      }
    }];
    return <BothThemes marks={marks} size={{
      width: COL * 2,
      height: ROW
    }} columns={['pending', 'measured']} />;
  }
}`,...X.parameters?.docs?.source},description:{story:"`pending` (still rubber-banding to the cursor: dashed, only the `from` endpoint dotted) next to\n `measured` (committed: solid, both endpoints dotted).",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const severities: readonly Severity[] = ['error', 'warn', 'info'];
    const markerStates: readonly MarkState[] = ['idle', 'selected'];
    const marks: MarkerMark[] = severities.flatMap((severity, sevI) => markerStates.map((state, stI) => ({
      kind: 'marker',
      severity,
      state,
      world: {
        x: (sevI * markerStates.length + stI) * COL + COL / 2,
        y: ROW / 2
      }
    })));
    return <BothThemes marks={marks} size={{
      width: COL * severities.length * markerStates.length,
      height: ROW
    }} columns={severities.flatMap(severity => markerStates.map(state => \`\${severity} \${state}\`))} />;
  }
}`,...Z.parameters?.docs?.source},description:{story:"Every severity × the two states the `MARKER` table actually distinguishes: any state other than\n `selected` compiles to `idle`, so those two are the whole surface.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-4)'
  }}>
      {MODES.map(mode => <div key={mode} style={{
      display: 'grid',
      gap: 'var(--space-2)'
    }}>
          <span style={caption}>{mode}</span>
          <LabelDemo mode={mode} />
        </div>)}
    </div>
}`,...Q.parameters?.docs?.source}}},$=[`Handle`,`Knob`,`Snap`,`Preview`,`Outline`,`Ruler`,`Marker`,`Label`]}))();export{G as Handle,K as Knob,Q as Label,Z as Marker,Y as Outline,J as Preview,X as Ruler,q as Snap,$ as __namedExportsOrder,z as default};