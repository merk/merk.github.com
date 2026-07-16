import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-B_zWQXCQ.js";import{K as n,t as r}from"./exports-BqaKxnZ-.js";import{S as i,t as a}from"./lucide-react-K-TMmYWw.js";import{n as o,t as s}from"./IconButton-oMBByMW9.js";import{n as c,t as l}from"./Tooltip-BNdcKx52.js";var u,d,f,p,m,h,g;e((()=>{a(),r(),o(),c(),u=t(),d={title:`Kit/Tooltip`,component:l},f={render:()=>(0,u.jsx)(`div`,{style:{width:`160px`},children:(0,u.jsx)(l,{content:`Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed`,defaultOpen:!0,children:(0,u.jsx)(n,{style:{display:`block`,width:`100%`,overflow:`hidden`,whiteSpace:`nowrap`,textOverflow:`ellipsis`,textAlign:`left`,font:`var(--weight-regular) var(--text-ui)/var(--lh-tight) var(--font-sans)`,color:`var(--ink)`,background:`none`,border:`none`,padding:0,cursor:`default`},children:`Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed`})})})},p={render:()=>(0,u.jsx)(l,{content:`Save`,defaultOpen:!0,children:(0,u.jsx)(s,{label:`Save`,icon:i})})},m={render:()=>(0,u.jsx)(l,{content:`This tool traces a lead line along the pointer path. Snap targets are edges, vertices, and the sheet's own boundary — hold Shift to disable snapping.`,defaultOpen:!0,children:(0,u.jsx)(n,{children:`Pen tool`})})},h={render:()=>(0,u.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,u.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`tab into the button below — no hover involved`}),(0,u.jsx)(l,{content:`Undo the last cut`,children:(0,u.jsx)(n,{children:`Undo`})})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '160px'
  }}>
      <Tooltip content="Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed" defaultOpen>
        <Button style={{
        display: 'block',
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'left',
        font: 'var(--weight-regular) var(--text-ui)/var(--lh-tight) var(--font-sans)',
        color: 'var(--ink)',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'default'
      }}>
          Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed
        </Button>
      </Tooltip>
    </div>
}`,...f.parameters?.docs?.source},description:{story:"`defaultOpen` (story-only, see `TooltipProps`) keeps the tooltip visible without a mouse or a\nfocus event, so a reviewer — or axe — can inspect it at rest. The real trigger still opens it\nnormally on hover/focus; this only skips having to drive that interaction for a static shot.\n\nNOT the general-purpose truncation affordance for a row identifier: DESIGN.md §7 / HANDOFF §6 ask\nfor \"ellipsis + title tooltip\" — a native `title` attribute on a plain, non-interactive element,\nwhich is what `ListRow`'s `main` slot uses (see `ListRow.tsx`'s doc comment for why: a `Tooltip`\ntrigger is a `<button>`, a nested tabbable element that `GridList`'s row-level press handling\nexcludes, which would make the row's label dead to click). This story exists for the case where\nthe truncated text is genuinely already an interactive trigger in its own right — e.g. a\nclick-to-rename control — where a real `Button` is correct regardless of the tooltip, and the\ntooltip rides along for free. `className` strips the button chrome so it reads as a plain label.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="Save" defaultOpen>
      <IconButton label="Save" icon={Save} />
    </Tooltip>
}`,...p.parameters?.docs?.source},description:{story:"`IconButton`'s label doubles as its tooltip — the same string is both the accessible name and\n the text a sighted user gets on hover/focus.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip content="This tool traces a lead line along the pointer path. Snap targets are edges, vertices, and the sheet's own boundary — hold Shift to disable snapping." defaultOpen>
      <Button>Pen tool</Button>
    </Tooltip>
}`,...m.parameters?.docs?.source},description:{story:"Long content wraps within `max-width` rather than growing unbounded across the screen.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-3)'
  }}>
      <div style={{
      color: 'var(--ink2)',
      font: '400 var(--text-micro) var(--font-mono)'
    }}>
        tab into the button below — no hover involved
      </div>
      <Tooltip content="Undo the last cut">
        <Button>Undo</Button>
      </Tooltip>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`The accessibility contract this primitive exists to guarantee: Tab reaches the trigger with no
 mouse involved, and the tooltip opens on that focus event alone.`,...h.parameters?.docs?.description}}},g=[`OnATruncatedLabel`,`OnAnIconButton`,`LongContent`,`OpensOnFocusAlone`]}))();export{m as LongContent,f as OnATruncatedLabel,p as OnAnIconButton,h as OpensOnFocusAlone,g as __namedExportsOrder,d as default};