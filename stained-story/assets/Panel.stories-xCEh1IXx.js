import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-D4tPGcaX.js";import{b as n,t as r}from"./lucide-react-B79fHOcM.js";import{n as i,t as a}from"./IconButton-LlbcItkO.js";import{n as o,t as s}from"./Panel-BjTK_HtF.js";import{n as c,t as l}from"./story-helpers-Bdd3Ujz4.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{r(),i(),o(),c(),u=t(),d={title:`Kit/Panel`,component:s},f={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-3)`},children:[(0,u.jsxs)(`div`,{style:{width:`200px`},children:[(0,u.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`default`}),(0,u.jsx)(s,{title:`Diagnostics`,badge:3,children:(0,u.jsx)(`p`,{children:`content`})})]}),(0,u.jsxs)(`div`,{style:{width:`200px`},children:[(0,u.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`hovered`}),(0,u.jsx)(l,{attr:`data-hovered`,children:(0,u.jsx)(s,{title:`Diagnostics`,badge:3,children:(0,u.jsx)(`p`,{children:`content`})})})]}),(0,u.jsxs)(`div`,{style:{width:`200px`},children:[(0,u.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`pressed`}),(0,u.jsx)(l,{attr:`data-pressed`,children:(0,u.jsx)(s,{title:`Diagnostics`,badge:3,children:(0,u.jsx)(`p`,{children:`content`})})})]}),(0,u.jsxs)(`div`,{style:{width:`200px`},children:[(0,u.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`focus-visible`}),(0,u.jsx)(l,{attr:`data-focus-visible`,children:(0,u.jsx)(s,{title:`Diagnostics`,badge:3,children:(0,u.jsx)(`p`,{children:`content`})})})]})]})},p={render:()=>(0,u.jsx)(`div`,{style:{width:`280px`},children:(0,u.jsx)(s,{title:`Diagnostics`,children:(0,u.jsx)(`p`,{children:`content`})})})},m={render:()=>(0,u.jsx)(`div`,{style:{width:`280px`},children:(0,u.jsx)(s,{title:`Diagnostics`,defaultCollapsed:!0,children:(0,u.jsx)(`p`,{children:`content`})})})},h={render:()=>(0,u.jsx)(`div`,{style:{width:`280px`},children:(0,u.jsx)(s,{title:`Diagnostics`,badge:12,children:(0,u.jsx)(`p`,{children:`content`})})})},g={render:()=>(0,u.jsx)(`div`,{style:{width:`280px`},children:(0,u.jsx)(s,{title:`Diagnostics`,badge:3,actions:(0,u.jsx)(a,{icon:n,label:`Panel settings`,size:`sm`}),children:(0,u.jsx)(`p`,{children:`content`})})})},_={render:()=>(0,u.jsx)(`div`,{style:{width:`220px`},children:(0,u.jsx)(s,{title:`Diagnostics for the currently selected layer's boundary edges`,children:(0,u.jsx)(`p`,{children:`content`})})})},v={render:()=>(0,u.jsx)(`div`,{style:{width:`280px`},children:(0,u.jsx)(s,{title:`Diagnostics`,badge:50,maxHeight:`200px`,children:(0,u.jsx)(`ul`,{style:{margin:0,padding:0,listStyle:`none`},children:Array.from({length:50},(e,t)=>`diag-${t+1}`).map((e,t)=>(0,u.jsxs)(`li`,{style:{padding:`4px 0`,borderBottom:`1px solid var(--line)`},children:[`Row `,t+1,` — edge does not close the face`]},e))})})})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)'
  }}>
      <div style={{
      width: '200px'
    }}>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          default
        </div>
        <Panel title="Diagnostics" badge={3}>
          <p>content</p>
        </Panel>
      </div>
      <div style={{
      width: '200px'
    }}>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          hovered
        </div>
        <Forced attr="data-hovered">
          <Panel title="Diagnostics" badge={3}>
            <p>content</p>
          </Panel>
        </Forced>
      </div>
      <div style={{
      width: '200px'
    }}>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          pressed
        </div>
        <Forced attr="data-pressed">
          <Panel title="Diagnostics" badge={3}>
            <p>content</p>
          </Panel>
        </Forced>
      </div>
      <div style={{
      width: '200px'
    }}>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          focus-visible
        </div>
        <Forced attr="data-focus-visible">
          <Panel title="Diagnostics" badge={3}>
            <p>content</p>
          </Panel>
        </Forced>
      </div>
    </div>
}`,...f.parameters?.docs?.source},description:{story:`The header's trigger at default, hovered, pressed, and focus-visible (DESIGN.md §7's two named
regressions: a hover treatment identical to rest gives no feedback, and a focus ring on a
non-focusable node never renders). Panel has no \`isDisabled\` concept — there is nothing to
disable on a disclosure header — so that cell is omitted rather than faked.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <Panel title="Diagnostics">
        <p>content</p>
      </Panel>
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Expanded by default.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <Panel title="Diagnostics" defaultCollapsed>
        <p>content</p>
      </Panel>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"`defaultCollapsed` starts the disclosure closed.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <Panel title="Diagnostics" badge={12}>
        <p>content</p>
      </Panel>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`The mono count badge, e.g. an issue count.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <Panel title="Diagnostics" badge={3} actions={<IconButton icon={Settings} label="Panel settings" size="sm" />}>
        <p>content</p>
      </Panel>
    </div>
}`,...g.parameters?.docs?.source},description:{story:"An `actions` slot alongside the title, for a header-level control (e.g. an overflow menu).",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '220px'
  }}>
      <Panel title="Diagnostics for the currently selected layer's boundary edges">
        <p>content</p>
      </Panel>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`A single-line identifier truncates rather than wrapping (HANDOFF §6) — only prose wraps.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <Panel title="Diagnostics" badge={50} maxHeight="200px">
        <ul style={{
        margin: 0,
        padding: 0,
        listStyle: 'none'
      }}>
          {Array.from({
          length: 50
        }, (_, i) => \`diag-\${i + 1}\`).map((rowId, i) => <li key={rowId} style={{
          padding: '4px 0',
          borderBottom: '1px solid var(--line)'
        }}>
              Row {i + 1} — edge does not close the face
            </li>)}
        </ul>
      </Panel>
    </div>
}`,...v.parameters?.docs?.source},description:{story:"The acceptance test for the whole primitive (DESIGN.md §7): 50 rows, `maxHeight`. The panel's\nOWN body must scroll — the page around it must not. A panel that just grows here has failed its\nentire purpose, even though it would look identical to `Expanded` above with only three rows.",...v.parameters?.docs?.description}}},y=[`AllStates`,`Expanded`,`Collapsed`,`WithBadge`,`WithActions`,`LongTitleEllipses`,`FiftyRowsScrollsItself`]}))();export{f as AllStates,m as Collapsed,p as Expanded,v as FiftyRowsScrollsItself,_ as LongTitleEllipses,g as WithActions,h as WithBadge,y as __namedExportsOrder,d as default};