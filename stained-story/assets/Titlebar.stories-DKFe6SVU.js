import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-BRbLK8OP.js";import{d as i,n as a,r as o,t as s}from"./services-CXonCXw-.js";import{t as c}from"./kit-9kavmLaH.js";import{t as l}from"./IconButton-CxtPxcvL.js";import{t as u}from"./ToggleButton-C96bTqlq.js";import{t as d}from"./Lockup-B38pmaK5.js";import{t as f}from"./SegmentedControl-BR_S66Ly.js";import{t as p}from"./Toolbar-D2JhJqKw.js";import{n as m,t as h}from"./command-icons-BTOR9Ppv.js";var g,_,v,y,b,x,S,C,w,T=e((()=>{g=`_titlebar_1kt3i_4`,_=`_divider_1kt3i_15`,v=`_docName_1kt3i_24`,y=`_sheet_1kt3i_33`,b=`_construction_1kt3i_39`,x=`_constructionLabel_1kt3i_46`,S=`_actions_1kt3i_55`,C=`_toggles_1kt3i_62`,w={titlebar:g,divider:_,docName:v,sheet:y,construction:b,constructionLabel:x,actions:S,toggles:C}}));function E({services:e,configStore:t}){let{registry:n,session:r,view:a,getContext:o}=e,s=(0,D.useSyncExternalStore)(r.subscribe,r.getSnapshot);(0,D.useSyncExternalStore)(a.subscribe,a.getVersion),(0,D.useSyncExternalStore)(t.subscribe,t.getSnapshot);let c=o();return(0,O.jsxs)(`header`,{className:w.titlebar,children:[(0,O.jsx)(d,{size:`compact`}),(0,O.jsx)(`span`,{className:w.divider}),(0,O.jsx)(`span`,{className:w.docName,title:s.name,children:s.name}),(0,O.jsxs)(`span`,{className:w.sheet,children:[s.sheet.width,` × `,s.sheet.height,` mm`]}),(0,O.jsxs)(`div`,{className:w.construction,children:[(0,O.jsx)(`span`,{className:w.constructionLabel,children:`Join`}),(0,O.jsx)(f,{label:`Construction`,items:k,value:s.construction,size:`sm`,onChange:e=>{let t=e===`came`?`came`:`foil`;r.setConstructionMethod(t)}})]}),(0,O.jsx)(`div`,{className:w.actions,children:(0,O.jsx)(p,{"aria-label":`Actions`,children:n.byKind(`action`).map(e=>(0,O.jsx)(l,{label:e.title,icon:h[e.id],weight:`quiet`,isDisabled:!n.isEnabled(e.id,c),onPress:()=>i(n,e.id,o())},e.id))})}),(0,O.jsx)(`span`,{className:w.divider}),(0,O.jsx)(`div`,{className:w.toggles,children:n.byKind(`toggle`).map(e=>(0,O.jsx)(u,{pill:!0,label:e.title,icon:h[e.id],isSelected:n.isPressed(e.id,c),isDisabled:!n.isEnabled(e.id,c),onChange:()=>i(n,e.id,o()),children:e.title},e.id))})]})}var D,O,k,A=e((()=>{D=t(n(),1),o(),m(),c(),T(),O=r(),k=[{value:`foil`,label:`Foil`},{value:`came`,label:`Came`}],E.__docgenInfo={description:``,methods:[],displayName:`Titlebar`,props:{services:{required:!0,tsType:{name:`EditorServices`},description:``},configStore:{required:!0,tsType:{name:`ConfigStore`},description:``}}}})),j,M,N,P,F;e((()=>{s(),A(),j=r(),M={title:`Shell/Titlebar`,component:E},N={render:()=>{let e=a();return(0,j.jsx)(`div`,{style:{width:`1200px`},children:(0,j.jsx)(E,{services:e,configStore:e.configStore})})}},P={render:()=>{let e=a();return e.view.setDiagnosticsVisible(!0),e.view.setGhostVisible(!0),(0,j.jsx)(`div`,{style:{width:`1200px`},children:(0,j.jsx)(E,{services:e,configStore:e.configStore})})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const services = servicesFixture();
    return <div style={{
      width: '1200px'
    }}>
        <Titlebar services={services} configStore={services.configStore} />
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:`The bar as it ships: lockup · document · sheet size · construction · one-shot actions · view
toggles. The two command classes are deliberately different controls — square quiet icon buttons
in a \`Toolbar\` for actions, rounded pills for toggles — so a mode never looks like an action
(DESIGN.md §8.2). Undo/redo and bake render disabled here, which is the honest state of an empty
document.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const services = servicesFixture();
    services.view.setDiagnosticsVisible(true);
    services.view.setGhostVisible(true);
    return <div style={{
      width: '1200px'
    }}>
        <Titlebar services={services} configStore={services.configStore} />
      </div>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Toggles engaged: the pill's on state is an `--accent` border over an `--accent-tint` fill, and\n must not be mistakable for a pressed action button.",...P.parameters?.docs?.description}}},F=[`Default`,`TogglesEngaged`]}))();export{N as Default,P as TogglesEngaged,F as __namedExportsOrder,M as default};