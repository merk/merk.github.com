import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BJ_HWdlk.js";import{t as n,ut as r}from"./lucide-react-BTShUnhm.js";import{n as i,t as a}from"./Icon-C6TfTCV2.js";import{n as o,t as s}from"./command-icons-B4L3auZb.js";var c,l,u,d,f,p;e((()=>{n(),o(),i(),c=t(),l={title:`Kit/Icon`,component:a},u=[`sm`,`md`,`lg`],d={args:{glyph:r}},f={args:{glyph:r},render:()=>(0,c.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(96px, 1fr))`,gap:`var(--space-4)`},children:Object.entries(s).map(([e,t])=>(0,c.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-2)`,padding:`var(--space-2)`},children:[(0,c.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-2)`,alignItems:`center`},children:u.map(e=>(0,c.jsx)(a,{glyph:t,size:e},e))}),(0,c.jsx)(`span`,{style:{font:`var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)`,color:`var(--ink2)`,textAlign:`center`,wordBreak:`break-all`},children:e})]},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    glyph: FilePlus
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`CommandVocabulary`]}))();export{f as CommandVocabulary,d as Default,p as __namedExportsOrder,l as default};