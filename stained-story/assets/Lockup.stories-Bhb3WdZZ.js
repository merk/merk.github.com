import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D4tPGcaX.js";import{n,t as r}from"./Lockup-BzBUhUz2.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Kit/Lockup`,component:r},o={args:{size:`default`}},s={args:{size:`default`},render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-4)`},children:[`default`,`compact`].map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-3)`},children:[(0,i.jsx)(r,{size:e}),(0,i.jsx)(`span`,{style:{font:`var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)`,color:`var(--ink2)`},children:e})]},e))})},c={args:{size:`default`},render:e=>(0,i.jsx)(`div`,{style:{background:`var(--bar-bg)`,padding:`var(--space-3) var(--space-4)`,borderRadius:`var(--radius-1)`},children:(0,i.jsx)(r,{...e})})},l={args:{size:`compact`},render:e=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,height:`44px`,background:`var(--bar-bg)`,borderBottom:`1px solid var(--line)`,padding:`0 var(--space-4)`},children:(0,i.jsx)(r,{...e})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default'
  },
  // unused by \`render\`, but \`args\` is required by the story type
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-4)'
  }}>
      {(['default', 'compact'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }}>
          <Lockup size={size} />
          <span style={{
        font: 'var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)',
        color: 'var(--ink2)'
      }}>
            {size}
          </span>
        </div>)}
    </div>
}`,...s.parameters?.docs?.source},description:{story:"The two sizes the design pack actually shows, side by side — see `Lockup.tsx`'s doc comment for\n where each number comes from.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default'
  },
  render: args => <div style={{
    background: 'var(--bar-bg)',
    padding: 'var(--space-3) var(--space-4)',
    borderRadius: 'var(--radius-1)'
  }}>
      <Lockup {...args} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"As it sits in the doc-site header / app menu bar (PR 4): on the bar background, at the size that\n row uses (`docs/claude-design/stained - design language.dc.html` lines 30-38).",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'compact'
  },
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    height: '44px',
    background: 'var(--bar-bg)',
    borderBottom: '1px solid var(--line)',
    padding: '0 var(--space-4)'
  }}>
      <Lockup {...args} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"As it sits in the app's own titlebar when no document is open — the smaller instance\n (`docs/claude-design/stained - design language.dc.html` lines 484-489).",...l.parameters?.docs?.description}}},u=[`Default`,`Sizes`,`OnTitlebar`,`OnAppTitlebar`]}))();export{o as Default,l as OnAppTitlebar,c as OnTitlebar,s as Sizes,u as __namedExportsOrder,a as default};