import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-ubJmwYoO.js";import{c as i,d as a,i as o,n as s,p as c,s as ee,t as te,u as l}from"./kit-DFjsOwk9.js";import{t as ne}from"./Badge-3ci9CJgR.js";function u(e,t){let n=p[e.weight??`normal`][e.state??`idle`];return{dots:[C(e.world,n,t)]}}function re(e,t){return{paths:[{world:[e.anchor,e.world],stroke:t.handle,width:y}],dots:[C(e.world,m[e.state??`idle`],t)]}}function ie(e,t){return{dots:[C(e.world,h[e.snap],t)]}}function ae(e,t){return{paths:[{world:e.world,stroke:e.tone===`accent`?t.accent:t.preview,width:b,dash:[...t.previewDash],...e.closed===!0?{closed:!0}:{}}]}}function oe(e,t){return{paths:[{world:e.world,stroke:t.accent,width:x[e.state??`idle`],...e.closed===!0?{closed:!0}:{}}]}}function d(e,t){let n=e.pending===!0,r=[],i=[C(e.from,_,t)];return e.to!==void 0&&(r.push({world:[e.from,e.to],stroke:t.calibrate,width:v,...n?{dash:[...t.calibrateDash]}:{}}),n||i.push(C(e.to,_,t))),{paths:r,dots:i}}function f(e,t){let n=g[e.state===`selected`?`selected`:`idle`];return{dots:[C(e.world,n,t,S(e.severity))]}}function se(e,t){switch(e.kind){case`handle`:return u(e,t);case`knob`:return re(e,t);case`snap`:return ie(e,t);case`preview`:return ae(e,t);case`outline`:return oe(e,t);case`ruler`:return d(e,t);case`marker`:return f(e,t);case`label`:return{}}}function ce(e,t){let n=[],r=[];for(let i of e){let e=se(i,t);e.paths!==void 0&&n.push(...e.paths),e.dots!==void 0&&r.push(...e.dots)}return{paths:n,dots:r}}var p,m,h,g,_,v,y,b,x,S,C,le=e((()=>{p={quiet:{idle:{radius:3,fill:`handle`},hover:{radius:4,fill:`knob`,stroke:{role:`accent`,width:2}},selected:{radius:5,fill:`accent`,stroke:{role:`knob`,width:2}},active:{radius:6,fill:`accent`,stroke:{role:`knob`,width:2}}},normal:{idle:{radius:4,fill:`knob`,stroke:{role:`accent`,width:2}},hover:{radius:5,fill:`knob`,stroke:{role:`accent`,width:2}},selected:{radius:5,fill:`accent`,stroke:{role:`knob`,width:2}},active:{radius:6,fill:`accent`,stroke:{role:`knob`,width:2}}}},m={idle:{radius:3,fill:`handle`},hover:{radius:4,fill:`handle`},selected:{radius:4,fill:`accent`},active:{radius:5,fill:`accent`}},h={vertex:{radius:6,stroke:{role:`accent`,width:2}},edge:{radius:4,fill:`accent`,stroke:{role:`accent`,width:1}},grid:{radius:3,fill:`accent`}},g={idle:{radius:5},selected:{radius:8,stroke:{role:`knob`,width:2}}},_={radius:4,fill:`calibrate`,stroke:{role:`knob`,width:1}},v=2,y=1,b=1,x={idle:2,hover:2,selected:3,active:3},S=e=>e,C=(e,t,n,r)=>{let i=r??t.fill;return{world:e,radius:t.radius,...i===void 0?{}:{fill:n[i]},...t.stroke===void 0?{}:{stroke:n[t.stroke.role],strokeWidth:t.stroke.width}}}}));function ue(e,t,n){if(t.world.length!==0){e.setLineDash(t.dash===void 0?[]:[...t.dash]),e.strokeStyle=t.stroke,e.lineWidth=t.width??1,e.beginPath();for(let[r,i]of t.world.entries()){let t=c(n,i);r===0?e.moveTo(t.x,t.y):e.lineTo(t.x,t.y)}t.closed===!0&&e.closePath(),e.stroke()}}function de(e,t,n){let r=c(n,t.world);e.beginPath(),e.arc(r.x,r.y,t.radius,0,w),t.fill!==void 0&&(e.fillStyle=t.fill,e.fill()),t.stroke!==void 0&&(e.setLineDash([]),e.strokeStyle=t.stroke,e.lineWidth=t.strokeWidth??1,e.stroke())}function fe(e,t,n,r,i){e.setTransform(i,0,0,i,0,0),e.clearRect(0,0,r.width,r.height);for(let r of t.paths??[])ue(e,r,n);for(let r of t.dots??[])de(e,r,n)}var w,pe=e((()=>{a(),w=Math.PI*2})),T,E,D,me=e((()=>{T=`_layer_1afdr_4`,E=`_anchor_1afdr_12`,D={layer:T,anchor:E}}));function O({store:e,positionRef:t,cameraRef:n}){let r=(0,k.useSyncExternalStore)(e.subscribe,e.getSnapshot),i=(0,k.useRef)([]);return(0,k.useLayoutEffect)(()=>{let e=e=>{for(let[t,n]of r.entries()){let r=i.current[t];if(r==null)continue;let a=c(e,n.world);r.style.transform=`translate(${a.x}px, ${a.y}px)`}};t.current=e;let a=n.current;return a!==null&&e(a),()=>{t.current=null}},[r,t,n]),(0,A.jsx)(`div`,{className:D.layer,"aria-hidden":`true`,"data-testid":`annotation-layer`,children:r.map((e,t)=>(0,A.jsx)(`div`,{className:D.anchor,ref:e=>{i.current[t]=e},children:(0,A.jsx)(ne,{tone:e.tone===`calibrate`?`accent`:`neutral`,mono:!0,children:e.text})},t))})}var k,A,j=e((()=>{k=t(n(),1),a(),me(),te(),A=r(),O.__docgenInfo={description:``,methods:[],displayName:`AnnotationLayer`,props:{store:{required:!0,tsType:{name:`AnnotationStore`},description:`The owning canvas's label store. Injected, not imported: one store per canvas.`},positionRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`((camera: Camera) => void) | null`,elements:[{name:`unknown`},{name:`null`}]}],raw:`RefObject<((camera: Camera) => void) | null>`},description:`Populated with a positioning callback the frame loop calls; never a React render.`},cameraRef:{required:!0,tsType:{name:`RefObject`,elements:[{name:`union`,raw:`Camera | null`,elements:[{name:`Camera`},{name:`null`}]}],raw:`RefObject<Camera | null>`},description:`The live camera, read through a ref (never a value prop) — a pan/zoom must not re-render this
component. Used to position a freshly-mounted label immediately, without waiting for the next
\`redraw\`.`}}}}));function M(){let e=[],t=new Set;return{set(n){if(!o(e,n)){e=n;for(let e of t)e()}},subscribe(e){return t.add(e),()=>t.delete(e)},getSnapshot(){return e}}}var N=e((()=>{s()}));function P({marks:e,mode:t,size:n}){let r=(0,L.useRef)(null);return(0,L.useEffect)(()=>{let a=r.current?.getContext(`2d`);a!=null&&fe(a,ce(e,i(t).overlay),l,n,1)},[e,t,n]),(0,R.jsx)(`canvas`,{ref:r,width:n.width,height:n.height,"data-theme":t,style:{display:`block`,background:`var(--canvas)`,borderRadius:`var(--radius-1)`}})}function F({marks:e,size:t,columns:n}){return(0,R.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:B.map(r=>(0,R.jsxs)(`div`,{"data-theme":r,style:{display:`grid`,gap:`var(--space-2)`},children:[(0,R.jsx)(`span`,{style:H,children:r}),(0,R.jsx)(P,{marks:e,mode:r,size:t}),(0,R.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(${n.length}, ${t.width/n.length}px)`},children:n.map(e=>(0,R.jsx)(`span`,{style:H,children:e},e))})]},r))})}function I({mode:e}){let t=(0,L.useRef)(null),n=(0,L.useRef)(l),[r]=(0,L.useState)(M);return(0,L.useEffect)(()=>{r.set([{kind:`label`,world:{x:24,y:30},text:`42.0 mm`,tone:`calibrate`},{kind:`label`,world:{x:160,y:30},text:`Piece 12`}])},[r]),(0,L.useEffect)(()=>{t.current?.(l)}),(0,R.jsx)(`div`,{"data-theme":e,style:{position:`relative`,width:260,height:64,background:`var(--canvas)`,borderRadius:`var(--radius-1)`},children:(0,R.jsx)(O,{store:r,positionRef:t,cameraRef:n})})}var L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{L=t(n(),1),ee(),a(),le(),pe(),j(),N(),R=r(),z={title:`Kit/Marks`},B=[`light`,`dark`],V=[`idle`,`hover`,`selected`,`active`],H={color:`var(--ink2)`,font:`var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)`},U=88,W=88,G={render:()=>{let e=[`quiet`,`normal`];return(0,R.jsx)(F,{marks:e.flatMap((e,t)=>V.map((n,r)=>({kind:`handle`,weight:e,state:n,world:{x:(t*V.length+r)*U+U/2,y:W/2}}))),size:{width:U*e.length*V.length,height:W},columns:e.flatMap(e=>V.map(t=>`${e} ${t}`))})}},K={render:()=>(0,R.jsx)(F,{marks:V.map((e,t)=>({kind:`knob`,state:e,anchor:{x:t*U+U/2,y:W-14},world:{x:t*U+U/2,y:14}})),size:{width:U*V.length,height:W},columns:[...V]})},q={render:()=>{let e=[`vertex`,`edge`,`grid`];return(0,R.jsx)(F,{marks:e.map((e,t)=>({kind:`snap`,snap:e,world:{x:t*U+U/2,y:W/2}})),size:{width:U*e.length,height:W},columns:e})}},J={render:()=>{let e=[`muted`,`accent`],t=e=>[{x:e,y:60},{x:e+40,y:20},{x:e+80,y:60},{x:e+120,y:20}];return(0,R.jsx)(F,{marks:e.map((e,n)=>({kind:`preview`,tone:e,world:t(n*160+20)})),size:{width:160*e.length,height:80},columns:e})}},Y={render:()=>(0,R.jsx)(F,{marks:V.map((e,t)=>{let n=t*U+U/2;return{kind:`outline`,state:e,world:[{x:n,y:W/2-24},{x:n+24,y:68},{x:n-24,y:68}],closed:!0}}),size:{width:U*V.length,height:W},columns:[...V]})},X={render:()=>(0,R.jsx)(F,{marks:[{kind:`ruler`,from:{x:20,y:W/2},to:{x:U-20,y:W/2},pending:!0},{kind:`ruler`,from:{x:108,y:W/2},to:{x:U*2-20,y:W/2}}],size:{width:U*2,height:W},columns:[`pending`,`measured`]})},Z={render:()=>{let e=[`error`,`warn`,`info`],t=[`idle`,`selected`];return(0,R.jsx)(F,{marks:e.flatMap((e,n)=>t.map((r,i)=>({kind:`marker`,severity:e,state:r,world:{x:(n*t.length+i)*U+U/2,y:W/2}}))),size:{width:U*e.length*t.length,height:W},columns:e.flatMap(e=>t.map(t=>`${e} ${t}`))})}},Q={render:()=>(0,R.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-4)`},children:B.map(e=>(0,R.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,R.jsx)(`span`,{style:H,children:e}),(0,R.jsx)(I,{mode:e})]},e))})},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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