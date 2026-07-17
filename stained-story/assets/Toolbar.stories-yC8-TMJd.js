import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-2QqO-kRy.js";import{A as i,At as a,H as o,W as s,ct as c,ft as l,i as u,it as d,nt as f,o as p,t as m,u as h,w as g}from"./lucide-react-BNlUrYUU.js";import{n as _,t as v}from"./IconButton-TGp3ktRF.js";import{n as y,t as b}from"./ToggleButton-hu_b3bkr.js";import{n as x,r as S,t as C}from"./Toolbar-BLH2XFQN.js";var w,T,E,D,O,k;e((()=>{m(),w=t(n(),1),_(),y(),S(),T=r(),E={title:`Kit/Toolbar`,component:C},D={render:function(){let[e,t]=(0,w.useState)(!0),[n,r]=(0,w.useState)(!1),[m,_]=(0,w.useState)(!1),[y,S]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`var(--space-4)`,padding:`var(--space-2) var(--space-3)`,background:`var(--bar-bg)`,border:`1px solid var(--line)`,borderRadius:`var(--radius-1)`},children:[(0,T.jsxs)(C,{"aria-label":`Document actions`,children:[(0,T.jsx)(v,{label:`New`,icon:c}),(0,T.jsx)(v,{label:`Open`,icon:d}),(0,T.jsx)(v,{label:`Save`,icon:g}),(0,T.jsx)(x,{}),(0,T.jsx)(v,{label:`Import reference`,icon:u}),(0,T.jsx)(v,{label:`New layer`,icon:s}),(0,T.jsx)(x,{}),(0,T.jsx)(v,{label:`Undo`,icon:p}),(0,T.jsx)(v,{label:`Redo`,icon:i}),(0,T.jsx)(x,{}),(0,T.jsx)(v,{label:`Delete selection`,icon:h})]}),(0,T.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,T.jsx)(b,{isSelected:e,onChange:t,label:`Diagnostics`,icon:a,pill:!0}),(0,T.jsx)(b,{isSelected:n,onChange:r,label:`Offset preview`,icon:l,pill:!0}),(0,T.jsx)(b,{isSelected:m,onChange:_,label:`Ghost`,icon:f,pill:!0}),(0,T.jsx)(b,{isSelected:y,onChange:S,label:`Theme`,icon:o,pill:!0})]})]})}},O={render:()=>(0,T.jsxs)(C,{"aria-label":`Document actions`,children:[(0,T.jsx)(v,{label:`New`,icon:c}),(0,T.jsx)(v,{label:`Open`,icon:d}),(0,T.jsx)(v,{label:`Save`,icon:g}),(0,T.jsx)(x,{}),(0,T.jsx)(v,{label:`Undo`,icon:p}),(0,T.jsx)(v,{label:`Redo`,icon:i})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function TitlebarActions() {
    const [diagnostics, setDiagnostics] = useState(true);
    const [offsetPreview, setOffsetPreview] = useState(false);
    const [ghost, setGhost] = useState(false);
    const [dark, setDark] = useState(false);
    return <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-2) var(--space-3)',
      background: 'var(--bar-bg)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-1)'
    }}>
        <Toolbar aria-label="Document actions">
          <IconButton label="New" icon={FilePlus2} />
          <IconButton label="Open" icon={FolderOpen} />
          <IconButton label="Save" icon={Save} />
          <ToolbarSeparator />
          <IconButton label="Import reference" icon={Upload} />
          <IconButton label="New layer" icon={Layers} />
          <ToolbarSeparator />
          <IconButton label="Undo" icon={Undo2} />
          <IconButton label="Redo" icon={Redo2} />
          <ToolbarSeparator />
          {/* \`enabled\`, like every other action — NOT \`quiet\`. A quiet action is unboxed, which makes
              it read as an unselected toggle pill sitting in the toggle row. The one thing this
              toolbar exists to prevent (DESIGN.md §8.2) is an action and a mode looking alike, so the
              action group is uniformly one weight. De-emphasising a destructive action by making it
              look like a different *class* of control is the wrong lever. */}
          <IconButton label="Delete selection" icon={Trash2} />
        </Toolbar>

        {/* The STATE row: pills, not squares — a different class of control, on purpose. */}
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          <ToggleButton isSelected={diagnostics} onChange={setDiagnostics} label="Diagnostics" icon={Bug} pill />
          <ToggleButton isSelected={offsetPreview} onChange={setOffsetPreview} label="Offset preview" icon={Eye} pill />
          <ToggleButton isSelected={ghost} onChange={setGhost} label="Ghost" icon={Ghost} pill />
          <ToggleButton isSelected={dark} onChange={setDark} label="Theme" icon={Moon} pill />
        </div>
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:"The titlebar, as the app actually composes it (DESIGN.md §8.2): a `Toolbar` of one-shot\n`IconButton` ACTIONS — grouped by `ToolbarSeparator`s into new/open/save, import/bake, layer,\nundo/redo, delete — sitting directly beside a row of `ToggleButton` pills for the view STATES\n(diagnostics, offset preview, ghost, theme). This is the comparison the design exists to make:\na reviewer should be able to tell at a glance which controls fire once and which hold a mode,\nwithout reading a label — the whole point DESIGN.md §8.2 makes against the old flat row of\nsixteen identical buttons.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Toolbar aria-label="Document actions">
      <IconButton label="New" icon={FilePlus2} />
      <IconButton label="Open" icon={FolderOpen} />
      <IconButton label="Save" icon={Save} />
      <ToolbarSeparator />
      <IconButton label="Undo" icon={Undo2} />
      <IconButton label="Redo" icon={Redo2} />
    </Toolbar>
}`,...O.parameters?.docs?.source},description:{story:`The toolbar alone, so its own arrow-key roving focus can be exercised without the surrounding
 chrome — tab in, then use ArrowLeft/ArrowRight to move between the action buttons.`,...O.parameters?.docs?.description}}},k=[`Titlebar`,`RovingFocus`]}))();export{O as RovingFocus,D as Titlebar,k as __namedExportsOrder,E as default};