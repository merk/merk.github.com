import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Bll09erd.js";import{T as n,_ as r,a as i,f as a,g as o,h as s,l as c,m as l,p as u,r as d,s as f,t as p,u as m}from"./hooks-ChaxBIWb.js";import{t as h}from"./kit-DQEZdBI7.js";import{t as g}from"./IconButton-C2lTVoOG.js";import{t as _}from"./ToggleButton-CRbyGjnO.js";import{t as v}from"./Lockup-B-RgqgcR.js";import{t as y}from"./SegmentedControl-BYnTX2T6.js";import{t as b}from"./Toolbar-DTLF8Xyl.js";import{n as x,t as S}from"./command-icons-5HQuH37z.js";var C,w,T,E,D,O,k,A,j,M=e((()=>{C=`_titlebar_1kt3i_4`,w=`_divider_1kt3i_15`,T=`_docName_1kt3i_24`,E=`_sheet_1kt3i_33`,D=`_construction_1kt3i_39`,O=`_constructionLabel_1kt3i_46`,k=`_actions_1kt3i_55`,A=`_toggles_1kt3i_62`,j={titlebar:C,divider:w,docName:T,sheet:E,construction:D,constructionLabel:O,actions:k,toggles:A}}));function N(){let e=c(),t=m(),r=d(),o=f();a(e=>e.getVersion()),i();let s=r();return(0,P.jsxs)(`header`,{className:j.titlebar,children:[(0,P.jsx)(v,{size:`compact`}),(0,P.jsx)(`span`,{className:j.divider}),(0,P.jsx)(`span`,{className:j.docName,title:o.name,children:o.name}),(0,P.jsxs)(`span`,{className:j.sheet,children:[o.sheet.width,` × `,o.sheet.height,` mm`]}),(0,P.jsxs)(`div`,{className:j.construction,children:[(0,P.jsx)(`span`,{className:j.constructionLabel,children:`Join`}),(0,P.jsx)(y,{label:`Construction`,items:F,value:o.construction,size:`sm`,onChange:e=>{let n=e===`came`?`came`:`foil`;t.setConstructionMethod(n)}})]}),(0,P.jsx)(`div`,{className:j.actions,children:(0,P.jsx)(b,{"aria-label":`Actions`,children:e.byKind(`action`).map(t=>(0,P.jsx)(g,{label:t.title,icon:S[t.id],weight:`quiet`,isDisabled:!e.isEnabled(t.id,s),onPress:()=>n(e,t.id,r())},t.id))})}),(0,P.jsx)(`span`,{className:j.divider}),(0,P.jsx)(`div`,{className:j.toggles,children:e.byKind(`toggle`).map(t=>(0,P.jsx)(_,{pill:!0,label:t.title,icon:S[t.id],isSelected:e.isPressed(t.id,s),isDisabled:!e.isEnabled(t.id,s),onChange:()=>n(e,t.id,r()),children:t.title},t.id))})]})}var P,F,I=e((()=>{r(),x(),h(),p(),M(),P=t(),F=[{value:`foil`,label:`Foil`},{value:`came`,label:`Came`}],N.__docgenInfo={description:``,methods:[],displayName:`Titlebar`}})),L,R,z,B,V;e((()=>{s(),l(),I(),L=t(),R={title:`Shell/Titlebar`,component:N},z={render:()=>(0,L.jsx)(u,{services:o(),children:(0,L.jsx)(`div`,{style:{width:`1200px`},children:(0,L.jsx)(N,{})})})},B={render:()=>{let e=o();return e.view.setDiagnosticsVisible(!0),e.view.setGhostVisible(!0),(0,L.jsx)(u,{services:e,children:(0,L.jsx)(`div`,{style:{width:`1200px`},children:(0,L.jsx)(N,{})})})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const services = servicesFixture();
    return <EditorProvider services={services}>
        <div style={{
        width: '1200px'
      }}>
          <Titlebar />
        </div>
      </EditorProvider>;
  }
}`,...z.parameters?.docs?.source},description:{story:`The bar as it ships: lockup · document · sheet size · construction · one-shot actions · view
toggles. The two command classes are deliberately different controls — square quiet icon buttons
in a \`Toolbar\` for actions, rounded pills for toggles — so a mode never looks like an action
(DESIGN.md §8.2). Undo/redo and bake render disabled here, which is the honest state of an empty
document.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const services = servicesFixture();
    services.view.setDiagnosticsVisible(true);
    services.view.setGhostVisible(true);
    return <EditorProvider services={services}>
        <div style={{
        width: '1200px'
      }}>
          <Titlebar />
        </div>
      </EditorProvider>;
  }
}`,...B.parameters?.docs?.source},description:{story:"Toggles engaged: the pill's on state is an `--accent` border over an `--accent-tint` fill, and\n must not be mistakable for a pressed action button.",...B.parameters?.docs?.description}}},V=[`Default`,`TogglesEngaged`]}))();export{z as Default,B as TogglesEngaged,V as __namedExportsOrder,R as default};