import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D4tPGcaX.js";import{n,t as r}from"./SeverityDot-D4T4p6Fx.js";import{n as i,t as a}from"./Panel-BjTK_HtF.js";import{n as o,r as s,t as c}from"./StatusBar-CPg_2vth.js";var l,u,d,f,p,m;e((()=>{i(),n(),s(),l=t(),u={title:`Kit/SeverityDot`,component:r},d={render:()=>(0,l.jsx)(`table`,{style:{borderSpacing:`var(--space-4)`},children:(0,l.jsxs)(`tbody`,{children:[(0,l.jsx)(`tr`,{children:[`error`,`warn`,`info`].map(e=>(0,l.jsxs)(`td`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,l.jsx)(r,{severity:e}),(0,l.jsx)(`span`,{style:{color:`var(--ink2)`,font:`var(--weight-regular) var(--text-ui) var(--font-sans)`},children:e})]},e))}),(0,l.jsx)(`tr`,{children:[`error`,`warn`,`info`].map(e=>(0,l.jsxs)(`td`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,l.jsx)(r,{severity:e,ring:!0}),(0,l.jsxs)(`span`,{style:{color:`var(--ink2)`,font:`var(--weight-regular) var(--text-ui) var(--font-sans)`},children:[e,`, ringed`]})]},e))})]})})},f={render:()=>(0,l.jsx)(a,{title:`Diagnostics`,defaultCollapsed:!1,children:(0,l.jsx)(`div`,{style:{display:`grid`,gap:`var(--space-2)`,padding:`var(--space-3)`},children:[`error`,`warn`,`info`].map(e=>(0,l.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--space-2)`},children:[(0,l.jsx)(r,{severity:e}),(0,l.jsxs)(`span`,{style:{color:`var(--ink)`,font:`var(--weight-regular) var(--text-ui) var(--font-sans)`},children:[e,` on panel-bg`]})]},e))})})},p={render:()=>(0,l.jsx)(`div`,{style:{width:`max-content`},children:(0,l.jsxs)(c,{children:[(0,l.jsx)(o,{label:`Errors`,value:`2`,tone:`error`}),(0,l.jsx)(o,{label:`Warnings`,value:`5`,tone:`warn`}),(0,l.jsx)(o,{label:`Notes`,value:`1`,tone:`info`})]})})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-4)'
  }}>
      <tbody>
        <tr>
          {(['error', 'warn', 'info'] as const).map(severity => <td key={severity} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
              <SeverityDot severity={severity} />
              <span style={{
            color: 'var(--ink2)',
            font: 'var(--weight-regular) var(--text-ui) var(--font-sans)'
          }}>
                {severity}
              </span>
            </td>)}
        </tr>
        <tr>
          {(['error', 'warn', 'info'] as const).map(severity => <td key={severity} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
              <SeverityDot severity={severity} ring />
              <span style={{
            color: 'var(--ink2)',
            font: 'var(--weight-regular) var(--text-ui) var(--font-sans)'
          }}>
                {severity}, ringed
              </span>
            </td>)}
        </tr>
      </tbody>
    </table>
}`,...d.parameters?.docs?.source},description:{story:"Every severity, plain and ringed. All six are the exact same shape and size — only `background`\n/ `outline-color` change. Do not add an icon or a shape variant per severity (see the module's\ndoc comment for why: hue alone is what keeps a *selected* node and an *errored* node from ever\nreading the same).",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Panel title="Diagnostics" defaultCollapsed={false}>
      <div style={{
      display: 'grid',
      gap: 'var(--space-2)',
      padding: 'var(--space-3)'
    }}>
        {(['error', 'warn', 'info'] as const).map(severity => <div key={severity} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-2)'
      }}>
            <SeverityDot severity={severity} />
            <span style={{
          color: 'var(--ink)',
          font: 'var(--weight-regular) var(--text-ui) var(--font-sans)'
        }}>
              {severity} on panel-bg
            </span>
          </div>)}
      </div>
    </Panel>
}`,...f.parameters?.docs?.source},description:{story:"Every severity against `--panel-bg` (a diagnostics row, inside a `Panel`) — the pairing\n`tokens.test.ts` guards at 4.5:1 (text) / clears well past the 3:1 a non-text mark like this one\nactually needs.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 'max-content'
  }}>
      <StatusBar>
        <StatusItem label="Errors" value="2" tone="error" />
        <StatusItem label="Warnings" value="5" tone="warn" />
        <StatusItem label="Notes" value="1" tone="info" />
      </StatusBar>
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Every severity against `--bar-bg` (the status bar) — `StatusItem`'s real usage, now folded onto\nthis primitive. `tokens.test.ts` guards this exact pairing at 3:1, the bar a non-text mark needs\n(WCAG 1.4.11), separately from the 4.5:1 text bar the other two severity-contrast tests hold.",...p.parameters?.docs?.description}}},m=[`AllSeverities`,`OnPanel`,`OnBar`]}))();export{d as AllSeverities,p as OnBar,f as OnPanel,m as __namedExportsOrder,u as default};