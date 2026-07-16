import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Dkp9c1-D.js";import{n,t as r}from"./Callout-BXrB8zEm.js";import{n as i,t as a}from"./story-helpers-BP49RzYm.js";var o,s,c,l,u,d,f,p;e((()=>{n(),i(),o=t(),s={title:`Kit/Callout`,component:r},c=[`error`,`warn`,`info`],l={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-3)`},children:c.map(e=>(0,o.jsx)(r,{severity:e,message:`A ${e} advisory message.`},e))})},u={render:()=>(0,o.jsx)(`div`,{style:{position:`relative`,width:`420px`,height:`260px`,background:`var(--canvas)`,border:`1px solid var(--line)`,borderRadius:`var(--radius-2)`},children:(0,o.jsx)(`div`,{style:{position:`absolute`,right:`var(--space-3)`,top:`var(--space-3)`},children:(0,o.jsx)(r,{severity:`warn`,message:`Reference not calibrated.`,action:{label:`Calibrate`,onPress:()=>{}}})})})},d={render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-3)`},children:[(0,o.jsx)(r,{severity:`warn`,message:`Cut angle is tight for this glass.`}),(0,o.jsx)(r,{severity:`warn`,message:`Cut angle is tight for this glass.`,action:{label:`Show diagnostic`,onPress:()=>{}}})]})},f={render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-3)`},children:[[`resting`,void 0],[`hovered`,`data-hovered`],[`pressed`,`data-pressed`],[`focused`,`data-focus-visible`]].map(([e,t])=>{let n=(0,o.jsx)(r,{severity:`warn`,message:`Reference not calibrated.`,action:{label:`Calibrate`,onPress:()=>{}}});return(0,o.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-1)`},children:[(0,o.jsx)(`span`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:e}),t===void 0?n:(0,o.jsx)(a,{attr:t,children:n})]},e)})})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  }}>
      {SEVERITIES.map(severity => <Callout key={severity} severity={severity} message={\`A \${severity} advisory message.\`} />)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"All three severities, side by side — hue on the icon and border is the ONLY thing that varies\n (the same rule `SeverityDot`/`DiagnosticRow` already hold to).",...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    position: 'relative',
    width: '420px',
    height: '260px',
    background: 'var(--canvas)',
    border: '1px solid var(--line)',
    borderRadius: 'var(--radius-2)'
  }}>
      <div style={{
      position: 'absolute',
      right: 'var(--space-3)',
      top: 'var(--space-3)'
    }}>
        <Callout severity="warn" message="Reference not calibrated." action={{
        label: 'Calibrate',
        onPress: () => {}
      }} />
      </div>
    </div>
}`,...u.parameters?.docs?.source},description:{story:`The real consumer: the uncalibrated-reference warning, reproducing the mockup's own copy
(\`docs/claude-design/stained - design language.dc.html\` lines 703-707) — floated over the canvas,
an inline, non-blocking advisory the user can act on or ignore. There is no modal, no disabled
canvas, nothing this blocks.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)'
  }}>
      <Callout severity="warn" message="Cut angle is tight for this glass." />
      <Callout severity="warn" message="Cut angle is tight for this glass." action={{
      label: 'Show diagnostic',
      onPress: () => {}
    }} />
    </div>
}`,...d.parameters?.docs?.source},description:{story:`With and without the optional action — DESIGN.md §7 allows at most one affordance, never a
 confirmation or anything that can refuse it.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)'
  }}>
      {([['resting', undefined], ['hovered', 'data-hovered'], ['pressed', 'data-pressed'], ['focused', 'data-focus-visible']] as const).map(([label, attr]) => {
      const callout = <Callout severity="warn" message="Reference not calibrated." action={{
        label: 'Calibrate',
        onPress: () => {}
      }} />;
      return <div key={label} style={{
        display: 'grid',
        gap: 'var(--space-1)'
      }}>
            <span style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
              {label}
            </span>
            {attr === undefined ? callout : <Forced attr={attr}>{callout}</Forced>}
          </div>;
    })}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"The action button's own states, forced — the \"collapsed state\" bug class (a control whose hover\nequals its own rest) this project's history keeps producing. Built on the kit's `Button` (`ghost`,\n`sm`), so this also re-proves that reuse gives real feedback here, not just in `Button`'s own\nstories.",...f.parameters?.docs?.description}}},p=[`AllSeverities`,`UncalibratedReference`,`WithAndWithoutAction`,`ActionStates`]}))();export{f as ActionStates,l as AllSeverities,u as UncalibratedReference,d as WithAndWithoutAction,p as __namedExportsOrder,s as default};