import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BJ_HWdlk.js";import{n,t as r}from"./EmptyState-C_qiTm_h.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Kit/EmptyState`,component:r},o={args:{message:`No layer selected.`}},s={args:{message:`Add a draw layer, or import a reference image to begin.`,action:{label:`Add draw layer`,onPress:()=>{}}}},c={render:()=>(0,i.jsx)(`div`,{style:{width:`280px`,background:`var(--panel-bg)`,borderRadius:`var(--radius-1)`},children:(0,i.jsx)(r,{message:`No problems found.`})})},l={render:()=>(0,i.jsx)(`div`,{style:{width:`480px`,height:`320px`,display:`grid`,placeItems:`center`,background:`var(--canvas)`,border:`1px solid var(--line)`,borderRadius:`var(--radius-2)`},children:(0,i.jsx)(r,{message:`Turn a reference into a valid, cuttable glass pattern.`,action:{label:`Start from a blank sheet`,onPress:()=>{}}})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'No layer selected.'
  }
}`,...o.parameters?.docs?.source},description:{story:`The real replacement for \`PropertiesPanel\`'s "No layer selected" (PR 4 wires this in) — message
 only, no affordance: there is nothing to *do* here, only something to select elsewhere.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Add a draw layer, or import a reference image to begin.',
    action: {
      label: 'Add draw layer',
      onPress: () => {}
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"With the one affordance DESIGN.md §7 allows — the real replacement for `LayerPanel`'s empty-tree\n copy, now with something to actually press instead of only instructional prose.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px',
    background: 'var(--panel-bg)',
    borderRadius: 'var(--radius-1)'
  }}>
      <EmptyState message="No problems found." />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"On a panel body (`--panel-bg`) — one of the two surfaces `tokens.test.ts` guards `--ink2`'s\n contrast against.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '480px',
    height: '320px',
    display: 'grid',
    placeItems: 'center',
    background: 'var(--canvas)',
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius-2)'
  }}>
      <EmptyState message="Turn a reference into a valid, cuttable glass pattern." action={{
      label: 'Start from a blank sheet',
      onPress: () => {}
    }} />
    </div>
}`,...l.parameters?.docs?.source},description:{story:"On the canvas (`--canvas`) — the welcome screen's \"no document open\" state\n(`docs/claude-design/stained - design language.dc.html` line 491 onward), the other surface\n`tokens.test.ts` guards `--ink2`'s contrast against. The mark at 46px is the mockup's own size for\nthis exact placement.",...l.parameters?.docs?.description}}},u=[`MessageOnly`,`WithAction`,`OnPanel`,`OnCanvas`]}))();export{o as MessageOnly,l as OnCanvas,c as OnPanel,s as WithAction,u as __namedExportsOrder,a as default};