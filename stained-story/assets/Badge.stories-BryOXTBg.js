import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BDLP3HaD.js";import{n,t as r}from"./Badge-CvilNa3U.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Kit/Badge`,component:r},o=[`neutral`,`accent`,`error`,`warn`,`info`],s={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-3)`,alignItems:`center`},children:o.map(e=>(0,i.jsx)(r,{tone:e,children:e},e))})},c={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-3)`,alignItems:`center`},children:[(0,i.jsx)(r,{tone:`neutral`,mono:!0,children:`7`}),(0,i.jsx)(r,{tone:`neutral`,mono:!0,children:`2418`}),(0,i.jsx)(r,{tone:`error`,mono:!0,children:`9`}),(0,i.jsx)(r,{tone:`error`,mono:!0,children:`1024`})]})},l={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,alignItems:`center`},children:[(0,i.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-1)`},children:[`Diagnostics`,(0,i.jsx)(r,{tone:`neutral`,mono:!0,children:`12`})]}),(0,i.jsxs)(`span`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-1)`},children:[`Piece`,(0,i.jsx)(r,{tone:`accent`,mono:!0,children:`034`})]}),(0,i.jsx)(r,{tone:`error`,mono:!0,children:`3 errors`})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'center'
  }}>
      {TONES.map(tone => <Badge key={tone} tone={tone}>
          {tone}
        </Badge>)}
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Every tone, sans face. `neutral`/`accent` are filled; `error`/`warn`/`info` are outlined — see\n `Badge.module.css` for why the two families differ.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'center'
  }}>
      <Badge tone="neutral" mono>
        7
      </Badge>
      <Badge tone="neutral" mono>
        2418
      </Badge>
      <Badge tone="error" mono>
        9
      </Badge>
      <Badge tone="error" mono>
        1024
      </Badge>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"The `mono` face, used for a count. A 1-digit and a 4-digit badge sit adjacent: each sizes to its\nown digit count (a badge is not a fixed-width box), but within a single badge every digit takes\nthe same advance width (`--font-mono` + `tabular-nums`) — a live count re-rendering from `2` to\n`2418` cannot itself cause the glyphs already on screen to reflow.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    alignItems: 'center'
  }}>
      <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)'
    }}>
        Diagnostics
        <Badge tone="neutral" mono>
          12
        </Badge>
      </span>
      <span style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-1)'
    }}>
        Piece
        <Badge tone="accent" mono>
          034
        </Badge>
      </span>
      <Badge tone="error" mono>
        3 errors
      </Badge>
    </div>
}`,...l.parameters?.docs?.source},description:{story:`The real usages this primitive targets: a panel count, a piece-number chip, a tile label.`,...l.parameters?.docs?.description}}},u=[`AllTones`,`MonoCounts`,`RealUsages`]}))();export{s as AllTones,c as MonoCounts,l as RealUsages,u as __namedExportsOrder,a as default};