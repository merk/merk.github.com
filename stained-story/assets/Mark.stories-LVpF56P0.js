import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-DuJsiTVZ.js";import{n,t as r}from"./Mark-B3MTnX22.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),i=t(),a={title:`Kit/Mark`,component:r},o={font:`var(--weight-regular) var(--text-micro)/var(--lh-tight) var(--font-mono)`,color:`var(--ink2)`},s={args:{size:`md`}},c={args:{size:`md`},render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:`var(--space-6)`},children:[`sm`,`md`,`lg`].map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,i.jsx)(r,{size:e}),(0,i.jsx)(`span`,{style:o,children:e})]},e))})},l={args:{size:96},render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,alignItems:`flex-end`,gap:`var(--space-6)`,flexWrap:`wrap`},children:[24,46,56,96,192,360].map(e=>(0,i.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,i.jsx)(r,{size:e}),(0,i.jsxs)(`span`,{style:o,children:[e,`px`]})]},e))})},u={args:{size:46},render:()=>(0,i.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,i.jsx)(`div`,{style:{marginBottom:`var(--space-3)`,display:`flex`,justifyContent:`center`},children:(0,i.jsx)(r,{size:46})}),(0,i.jsx)(`div`,{style:{font:`var(--weight-semi) 22px/1.25 var(--font-sans)`,letterSpacing:`-0.01em`,color:`var(--ink)`},children:`Cut light into pattern.`})]})},d={args:{size:360,tone:`quiet`},render:()=>(0,i.jsxs)(`div`,{style:{position:`relative`,display:`grid`,placeItems:`center`,width:`420px`,height:`420px`,overflow:`hidden`,background:`var(--canvas)`,border:`1px solid var(--line)`,borderRadius:`var(--radius-2)`},children:[(0,i.jsx)(`div`,{style:{position:`absolute`,inset:0,display:`grid`,placeItems:`center`,pointerEvents:`none`},children:(0,i.jsx)(r,{size:360,tone:`quiet`})}),(0,i.jsxs)(`div`,{style:{position:`relative`,textAlign:`center`},children:[(0,i.jsx)(`div`,{style:{font:`var(--weight-semi) var(--text-title)/var(--lh-tight) var(--font-sans)`,color:`var(--ink)`,marginBottom:`var(--space-1)`},children:`No pattern yet`}),(0,i.jsx)(`div`,{style:{font:`var(--weight-regular) var(--text-body)/var(--lh-body) var(--font-sans)`,color:`var(--ink2)`},children:`Draw a lead line, or generate a tiling to begin.`})]})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  // unused by \`render\`, but \`args\` is required by the story type
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: 'var(--space-6)'
  }}>
      {(['sm', 'md', 'lg'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }}>
          <Mark size={size} />
          <span style={caption}>{size}</span>
        </div>)}
    </div>
}`,...c.parameters?.docs?.source},description:{story:`The inline steps, at 1:1. The design pack claims the mark "reads at 16px in a titlebar"
(\`docs/claude-design/stained - design language.dc.html\` line 94) — with a frame, three arms AND a
vertex dot inside a 16px box that is a real ask, and this is where it gets checked rather than
taken on trust. The silhouette held from the start; the *dot* did not resolve below ~20px until
its radius became size-aware ({@link radiusForPx} in \`Mark.tsx\`) — verify it still does here.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: 96
  },
  // unused by \`render\`, but \`args\` is required by the story type
  render: () => <div style={{
    display: 'flex',
    alignItems: 'flex-end',
    gap: 'var(--space-6)',
    flexWrap: 'wrap'
  }}>
      {[24, 46, 56, 96, 192, 360].map(px => <div key={px} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }}>
          <Mark size={px} />
          <span style={caption}>{px}px</span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"The display range — a splash mark (issue #26) sizes itself from here. The stroke thins as the mark\ngrows (`strokeForPx`), reproducing the design pack's own 1.6@24px -> 1.4@56px trend; a flat stroke\nrenders ~27px-thick arms at 400px and swallows the vertex dot.\n\n24px is `Lockup`'s own `default` mark size; 46px and 56px are the mockup's own two display\ninstances — 46 is the welcome screen's empty-state mark\n(`docs/claude-design/stained - design language.dc.html` line 496), 56 is the identity section's\ndemo instance (line 86). Both are included so this can be compared against the mockup directly.",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 46
  },
  // unused by \`render\`, but \`args\` is required by the story type
  render: () => <div style={{
    textAlign: 'center'
  }}>
      <div style={{
      marginBottom: 'var(--space-3)',
      display: 'flex',
      justifyContent: 'center'
    }}>
        <Mark size={46} />
      </div>
      <div style={{
      font: 'var(--weight-semi) 22px/1.25 var(--font-sans)',
      letterSpacing: '-0.01em',
      color: 'var(--ink)'
    }}>
        Cut light into pattern.
      </div>
    </div>
}`,...u.parameters?.docs?.source},description:{story:`The mark as it actually appears above the welcome screen's empty-state heading — full brand
colour, not the \`quiet\` watermark tone (both exist, for different purposes; see the \`Watermark\`
story below).

The size is **46px**, taken directly from the mockup
(\`docs/claude-design/stained - design language.dc.html\` line 496: \`width="46" height="46"\`), not
the ~72px a screenshot might suggest at a glance — screenshots get rescaled in transit and are not
a reliable source for a pixel value when the markup itself states one.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 360,
    tone: 'quiet'
  },
  // unused by \`render\`, but \`args\` is required by the story type
  render: () => <div style={{
    position: 'relative',
    display: 'grid',
    placeItems: 'center',
    width: '420px',
    height: '420px',
    overflow: 'hidden',
    background: 'var(--canvas)',
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius-2)'
  }}>
      <div style={{
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      pointerEvents: 'none'
    }}>
        <Mark size={360} tone="quiet" />
      </div>
      <div style={{
      position: 'relative',
      textAlign: 'center'
    }}>
        <div style={{
        font: 'var(--weight-semi) var(--text-title)/var(--lh-tight) var(--font-sans)',
        color: 'var(--ink)',
        marginBottom: 'var(--space-1)'
      }}>
          No pattern yet
        </div>
        <div style={{
        font: 'var(--weight-regular) var(--text-body)/var(--lh-body) var(--font-sans)',
        color: 'var(--ink2)'
      }}>
          Draw a lead line, or generate a tiling to begin.
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source},description:{story:'`tone="quiet"` behind a representative empty state — the real test of "present, never louder than\nthe work" (DESIGN.md §1). The watermark must recede behind the content, not fight it.\n\nThis story is also the usage pattern: the mark is absolutely positioned and `pointer-events: none`\n**by its host**, not by itself — which is exactly why there is no separate `Watermark` component.\nThe empty state owns the layout; the kit owns the mark.',...d.parameters?.docs?.description}}},f=[`Default`,`Scale`,`Display`,`EmptyStateHeading`,`Watermark`]}))();export{s as Default,l as Display,u as EmptyStateHeading,c as Scale,d as Watermark,f as __namedExportsOrder,a as default};