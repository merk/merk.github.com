import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D9OoTY_7.js";import{n,t as r}from"./Panel-DYUxgLaP.js";import{n as i,t as a}from"./PanelGroup-Lxk_AO5_.js";function o({diagCount:e}){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{title:`Layers`,badge:4,children:(0,s.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`},children:[`Sky`,`Foliage`,`Border`,`Lead lines`].map(e=>(0,s.jsx)(`li`,{style:{padding:`4px 0`},children:e},e))})}),(0,s.jsx)(r,{title:`Properties`,children:(0,s.jsx)(`p`,{style:{margin:0},children:`Width 480mm · Height 620mm`})}),(0,s.jsx)(r,{title:`Glass`,children:(0,s.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`},children:[`Cobalt streaky`,`Amber wispy`,`Clear seedy`].map(e=>(0,s.jsx)(`li`,{style:{padding:`4px 0`},children:e},e))})}),(0,s.jsx)(r,{title:`Diagnostics`,badge:e,maxHeight:`200px`,children:(0,s.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`},children:l.slice(0,e).map((e,t)=>(0,s.jsxs)(`li`,{style:{padding:`4px 0`,borderBottom:`1px solid var(--line)`},children:[`Row `,t+1,` — edge does not close the face`]},e))})}),(0,s.jsx)(r,{title:`Cut list`,badge:12,children:(0,s.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`},children:[`Piece 1`,`Piece 2`,`Piece 3`].map(e=>(0,s.jsx)(`li`,{style:{padding:`4px 0`},children:e},e))})})]})}var s,c,l,u,d,f;e((()=>{n(),i(),s=t(),c={title:`Kit/PanelGroup`,component:a},l=Array.from({length:50},(e,t)=>`diag-${t+1}`),u={render:()=>(0,s.jsx)(`div`,{style:{width:`280px`,height:`640px`},children:(0,s.jsx)(a,{children:(0,s.jsx)(o,{diagCount:10})})})},d={render:()=>(0,s.jsx)(`div`,{style:{width:`280px`,height:`640px`},children:(0,s.jsx)(a,{children:(0,s.jsx)(o,{diagCount:50})})})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px',
    height: '640px'
  }}>
      <PanelGroup>
        <RightColumnPanels diagCount={10} />
      </PanelGroup>
    </div>
}`,...u.parameters?.docs?.source},description:{story:`The docked right column at rest — Diagnostics already past its 200px bound at 10 rows (so it is
already scrolling internally). Paired with \`DiagnosticsFlooded\` below so the Glass/Cut-list header
positions can be measured in both and compared: that comparison, not either screenshot alone, is
what proves a *further* flooding panel doesn't push its siblings (DESIGN.md §7).`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px',
    height: '640px'
  }}>
      <PanelGroup>
        <RightColumnPanels diagCount={50} />
      </PanelGroup>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"The acceptance picture for `PanelGroup` (DESIGN.md §7): Diagnostics flooded to 50 rows in a\nrealistic column. Today, in the app, this shoves Glass and Cut list below the fold. Here,\nDiagnostics' own `maxHeight` bounds its box and scrolls internally — Glass and Cut list must sit\nexactly where they do in `RightColumn` above, unmoved.",...d.parameters?.docs?.description}}},f=[`RightColumn`,`DiagnosticsFlooded`]}))();export{d as DiagnosticsFlooded,u as RightColumn,f as __namedExportsOrder,c as default};