import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-sr_6Wtjm.js";import{A as n,E as r,H as i,J as a,K as o,O as s,Q as c,R as l,S as u,W as d,b as f,c as p,f as m,g as h,it as g,o as _,ot as v,t as y}from"./lucide-react-Cld-VQk9.js";import{n as b,t as x}from"./Icon-C7NQ986a.js";var S,C=e((()=>{y(),S={"tool.select":n,"tool.pen":r,"tool.node":m,"tool.paint":s,"tool.autofill":i,"tool.calibrate":f,"doc.new":c,"doc.open":o,"doc.save":g,"reference.import":l,"layer.bakeFill":a,"edit.undo":_,"edit.redo":u,"view.diagnostics":p,"view.offsetPreview":h,"view.ghost":d,"view.theme":v}})),w,T,E,D,O,k;e((()=>{y(),C(),b(),w=t(),T={title:`Kit/Icon`,component:x},E=[`sm`,`md`,`lg`],D={args:{glyph:c}},O={args:{glyph:c},render:()=>(0,w.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(96px, 1fr))`,gap:`var(--space-4)`},children:Object.entries(S).map(([e,t])=>(0,w.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-2)`,padding:`var(--space-2)`},children:[(0,w.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,alignItems:`center`},children:E.map(e=>(0,w.jsx)(x,{glyph:t,size:e},e))}),(0,w.jsx)(`span`,{style:{font:`var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)`,color:`var(--ink2)`,textAlign:`center`,wordBreak:`break-all`},children:e})]},e))})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    glyph: FilePlus
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    glyph: FilePlus
  },
  // unused by \`render\`, but \`args\` is required by the story type
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))',
    gap: 'var(--space-4)'
  }}>
      {Object.entries(COMMAND_ICONS).map(([id, glyph]) => <div key={id} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
      padding: 'var(--space-2)'
    }}>
          <div style={{
        display: 'flex',
        gap: 'var(--space-2)',
        alignItems: 'center'
      }}>
            {SIZES.map(size => <Icon key={size} glyph={glyph} size={size} />)}
          </div>
          <span style={{
        font: 'var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)',
        color: 'var(--ink2)',
        textAlign: 'center',
        wordBreak: 'break-all'
      }}>
            {id}
          </span>
        </div>)}
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`CommandVocabulary`]}))();export{O as CommandVocabulary,D as Default,k as __namedExportsOrder,T as default};