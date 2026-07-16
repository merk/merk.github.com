import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-D4tPGcaX.js";import{O as i,t as a}from"./exports-CVQyLseM.js";import{n as o,t as s}from"./DiagnosticRow-DujV-KuY.js";function c({attr:e,children:t}){let n=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=requestAnimationFrame(()=>{n.current?.querySelector(`[role="row"]`)?.setAttribute(e,`true`)});return()=>cancelAnimationFrame(t)},[e]),(0,u.jsx)(`div`,{ref:n,style:{display:`contents`},children:t})}var l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{l=t(n(),1),a(),o(),u=r(),d={title:`Kit/DiagnosticRow`,component:s},f={color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`,marginBottom:`var(--space-1)`},p=()=>{},m={render:()=>(0,u.jsx)(`div`,{style:{width:`360px`},children:(0,u.jsxs)(i,{"aria-label":`Diagnostics`,selectionMode:`single`,children:[(0,u.jsx)(s,{id:`a`,severity:`error`,message:`Gap below minimum lead width`,measurement:`0.8 mm / limit 3.0 mm`}),(0,u.jsx)(s,{id:`b`,severity:`warn`,message:`Cut angle is tight for this glass`,measurement:`12° / limit 20°`}),(0,u.jsx)(s,{id:`c`,severity:`info`,message:`Small sliver face near the border seam`})]})})},h={render:()=>(0,u.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,overflowX:`auto`},children:[[`resting`,void 0],[`hovered`,`data-hovered`],[`selected`,void 0],[`selected + hovered`,`data-hovered`],[`focused + selected`,`data-focus-visible`]].map(([e,t])=>{let n=(0,u.jsx)(i,{"aria-label":`Diagnostics`,selectionMode:`single`,selectedKeys:e!==`resting`&&e!==`hovered`?[`a`]:[],children:(0,u.jsx)(s,{id:`a`,severity:`error`,message:`Gap below minimum lead width`,measurement:`0.8 mm / limit 3.0 mm`,onAction:p})});return(0,u.jsxs)(`div`,{style:{width:`260px`,flex:`none`},children:[(0,u.jsx)(`div`,{style:f,children:e}),t===void 0?n:(0,u.jsx)(c,{attr:t,children:n})]},e)})})},g={render:()=>(0,u.jsx)(`div`,{style:{width:`260px`},children:(0,u.jsx)(i,{"aria-label":`Diagnostics`,selectionMode:`single`,children:(0,u.jsx)(s,{id:`a`,severity:`warn`,message:`This edge crosses another edge from a different fill boundary, which will leave a gap too narrow to lead when the piece is cut, and the overlap continues for a considerable distance along the seam`,measurement:`0.4 mm / limit 3.0 mm`})})})},_={render:()=>(0,u.jsx)(`div`,{style:{width:`260px`},children:(0,u.jsx)(i,{"aria-label":`Diagnostics`,selectionMode:`single`,children:(0,u.jsx)(s,{id:`a`,severity:`info`,message:`Sliver face`,measurement:`128.375 mm² / limit 25.000 mm²`})})})},v={render:()=>(0,u.jsx)(`div`,{style:{width:`320px`},children:(0,u.jsx)(i,{"aria-label":`Diagnostics`,selectionMode:`single`,children:(0,u.jsx)(s,{id:`a`,severity:`info`,message:`Layer has no visible faces`})})})},y={render:()=>(0,u.jsx)(`div`,{style:{width:`340px`},children:(0,u.jsxs)(i,{"aria-label":`Diagnostics`,selectionMode:`single`,defaultSelectedKeys:[`b`],children:[(0,u.jsx)(s,{id:`a`,severity:`error`,message:`Gap below minimum lead width`,measurement:`0.8 mm / limit 3.0 mm`,onAction:p}),(0,u.jsx)(s,{id:`b`,severity:`warn`,message:`Cut angle is tight for this glass`,measurement:`12° / limit 20°`,onAction:p}),(0,u.jsx)(s,{id:`c`,severity:`info`,message:`Small sliver face near the border seam`,onAction:p})]})})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '360px'
  }}>
      <GridList aria-label="Diagnostics" selectionMode="single">
        <DiagnosticRow id="a" severity="error" message="Gap below minimum lead width" measurement="0.8 mm / limit 3.0 mm" />
        <DiagnosticRow id="b" severity="warn" message="Cut angle is tight for this glass" measurement="12° / limit 20°" />
        <DiagnosticRow id="c" severity="info" message="Small sliver face near the border seam" />
      </GridList>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All three severities, side by side — hue is the ONLY thing that varies (`SeverityDot`'s own\n rule): same dot size, same row shape, same measurement typography.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () =>
  // Explicit per-column width, not \`flex: 1\` in a fixed-width row: this row's content (a message
  // + a measurement side by side) is wider than \`ListRow\`/\`LayerRow\`'s all-states columns, and
  // \`flex: 1 1 0%\` cannot shrink a column below its content's min-content width — it silently
  // overflowed the container instead of distributing evenly, pushing "focused + selected" out
  // past the viewport. \`overflow-x: auto\` is the belt-and-braces fallback for a narrower canvas.
  <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    overflowX: 'auto'
  }}>
      {([['resting', undefined], ['hovered', 'data-hovered'], ['selected', undefined], ['selected + hovered', 'data-hovered'], ['focused + selected', 'data-focus-visible']] as const).map(([label, attr]) => {
      const selected = label !== 'resting' && label !== 'hovered';
      const row = <GridList aria-label="Diagnostics" selectionMode="single" selectedKeys={selected ? ['a'] : []}>
            <DiagnosticRow id="a" severity="error" message="Gap below minimum lead width" measurement="0.8 mm / limit 3.0 mm" onAction={noop} />
          </GridList>;
      return <div key={label} style={{
        width: '260px',
        flex: 'none'
      }}>
            <div style={cellLabel}>{label}</div>
            {attr === undefined ? row : <ForceRowState attr={attr}>{row}</ForceRowState>}
          </div>;
    })}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"Every state: resting, hovered, selected, selected+hovered, and focused+selected — the same\nload-bearing requirement `ListRow`/`LayerRow`'s own `AllStates` stories pin (CLAUDE.md task-5\nbrief, \"bugs this project has actually shipped\" 1): `[data-hovered]`/`[data-selected]` carry equal\nCSS specificity, so a selected row's hover must still visibly change (`--bar-bg`, not a silent\nno-op), and the message/measurement/dot must all stay legible once selection puts `--accent-tint`\nbehind them (bug 3: text on that fill must not be `--accent-hi` — checked here at the dot and the\nmono measurement too, not just the message).",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '260px'
  }}>
      <GridList aria-label="Diagnostics" selectionMode="single">
        <DiagnosticRow id="a" severity="warn" message="This edge crosses another edge from a different fill boundary, which will leave a gap too narrow to lead when the piece is cut, and the overlap continues for a considerable distance along the seam" measurement="0.4 mm / limit 3.0 mm" />
      </GridList>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`The rule unique to this row (DESIGN.md §7): a diagnostic message is PROSE, so it wraps up to two
lines and then ellipsises — the opposite of \`ListRow.main\`'s single-line-identifier truncation.
This message is long enough to force the clamp in a 260px column; verified for real (rendered
height / line count, not eyeballed) in the task's own verification pass.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '260px'
  }}>
      <GridList aria-label="Diagnostics" selectionMode="single">
        <DiagnosticRow id="a" severity="info" message="Sliver face" measurement="128.375 mm² / limit 25.000 mm²" />
      </GridList>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`The measurement is a NUMBER, not prose — it must never wrap, regardless of how long its formatted
string gets. Paired with a short message so the column stays narrow and the measurement is the
thing under pressure to wrap, if it were going to.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <GridList aria-label="Diagnostics" selectionMode="single">
        <DiagnosticRow id="a" severity="info" message="Layer has no visible faces" />
      </GridList>
    </div>
}`,...v.parameters?.docs?.source},description:{story:"No measurement: the trailing slot is omitted entirely, same as `ListRow.trailing` when unset —\n not rendered as an empty gap.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '340px'
  }}>
      <GridList aria-label="Diagnostics" selectionMode="single" defaultSelectedKeys={['b']}>
        <DiagnosticRow id="a" severity="error" message="Gap below minimum lead width" measurement="0.8 mm / limit 3.0 mm" onAction={noop} />
        <DiagnosticRow id="b" severity="warn" message="Cut angle is tight for this glass" measurement="12° / limit 20°" onAction={noop} />
        <DiagnosticRow id="c" severity="info" message="Small sliver face near the border seam" onAction={noop} />
      </GridList>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`A live, interactive list — click a row (or Tab to it and press Enter) to select/activate it.`,...y.parameters?.docs?.description}}},b=[`AllSeverities`,`AllStates`,`LongMessageWraps`,`LongMeasurementDoesNotWrap`,`WithoutMeasurement`,`Interactive`]}))();export{m as AllSeverities,h as AllStates,y as Interactive,_ as LongMeasurementDoesNotWrap,g as LongMessageWraps,v as WithoutMeasurement,b as __namedExportsOrder,d as default};