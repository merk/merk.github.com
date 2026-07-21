import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-BDLP3HaD.js";import{n,t as r}from"./Field-CIRotTYa.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Kit/Field`,component:r},o={render:()=>(0,i.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`,width:`320px`},children:[(0,i.jsx)(r,{label:`X`,children:(0,i.jsx)(`span`,{style:{font:`400 var(--text-ui) var(--font-mono)`,color:`var(--ink)`},children:`128.4 mm`})}),(0,i.jsx)(r,{label:`Opacity`,children:(0,i.jsx)(`span`,{style:{font:`400 var(--text-ui) var(--font-mono)`,color:`var(--ink)`},children:`80%`})}),(0,i.jsx)(r,{label:`Curve tolerance`,children:(0,i.jsx)(`span`,{style:{font:`400 var(--text-ui) var(--font-mono)`,color:`var(--ink)`},children:`0.25 mm`})})]})},s={render:()=>(0,i.jsx)(`div`,{style:{width:`320px`},children:(0,i.jsx)(r,{label:`Layer name`,description:`Shown in the layer list`,children:(0,i.jsx)(`span`,{style:{font:`400 var(--text-ui) var(--font-sans)`,color:`var(--ink)`},children:`Drawing 1`})})})},c={render:()=>(0,i.jsx)(`div`,{style:{width:`320px`},children:(0,i.jsx)(r,{label:`Layer name`,errorMessage:`Name is required`,children:(0,i.jsx)(`span`,{style:{font:`400 var(--text-ui) var(--font-sans)`,color:`var(--ink)`}})})})},l={render:()=>(0,i.jsx)(`div`,{style:{width:`320px`},children:(0,i.jsx)(r,{label:`Bevel width`,orientation:`column`,children:(0,i.jsx)(`div`,{style:{height:`24px`,borderRadius:`var(--radius-1)`,background:`var(--inset)`}})})})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-2)',
    width: '320px'
  }}>
      <Field label="X">
        <span style={{
        font: '400 var(--text-ui) var(--font-mono)',
        color: 'var(--ink)'
      }}>
          128.4 mm
        </span>
      </Field>
      <Field label="Opacity">
        <span style={{
        font: '400 var(--text-ui) var(--font-mono)',
        color: 'var(--ink)'
      }}>
          80%
        </span>
      </Field>
      <Field label="Curve tolerance">
        <span style={{
        font: '400 var(--text-ui) var(--font-mono)',
        color: 'var(--ink)'
      }}>
          0.25 mm
        </span>
      </Field>
    </div>
}`,...o.parameters?.docs?.source},description:{story:`The acceptance test for \`Field\`: labels of very different lengths ("X", "Opacity", "Curve
tolerance") in a stack, row-labelled. The value column must start at the same x-offset in every
row — that alignment IS the contract (HANDOFF §6). No column-labelled panels.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <Field label="Layer name" description="Shown in the layer list">
        <span style={{
        font: '400 var(--text-ui) var(--font-sans)',
        color: 'var(--ink)'
      }}>
          Drawing 1
        </span>
      </Field>
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <Field label="Layer name" errorMessage="Name is required">
        <span style={{
        font: '400 var(--text-ui) var(--font-sans)',
        color: 'var(--ink)'
      }} />
      </Field>
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <Field label="Bevel width" orientation="column">
        <div style={{
        height: '24px',
        borderRadius: 'var(--radius-1)',
        background: 'var(--inset)'
      }} />
      </Field>
    </div>
}`,...l.parameters?.docs?.source},description:{story:"`column` exists only for the rare full-width control — not a per-panel choice (HANDOFF §6).",...l.parameters?.docs?.description}}},u=[`RowAlignment`,`WithDescription`,`WithError`,`ColumnOrientation`]}))();export{l as ColumnOrientation,o as RowAlignment,s as WithDescription,c as WithError,u as __namedExportsOrder,a as default};