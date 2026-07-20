import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-Bh-P_Ych.js";import{B as i,E as a,I as o,R as s,et as c,g as l,t as u}from"./lucide-react-CUWVXPbq.js";import{n as d,r as f,t as p}from"./ToolRail-DuFLUPqH.js";import{n as m,t as h}from"./story-helpers-DTMT3kWr.js";var g,_,v,y,b,x,S,C,w;e((()=>{u(),g=t(n(),1),m(),f(),_=r(),v={title:`Kit/ToolRail`,component:d},y={render:function(){let[e,t]=(0,g.useState)(`pen`);return(0,_.jsxs)(d,{"aria-label":`Tools`,value:e,onChange:t,children:[(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`}),(0,_.jsx)(p,{id:`pen`,icon:o,label:`Pen`,keybind:`p`}),(0,_.jsx)(p,{id:`node`,icon:l,label:`Node`,keybind:`n`}),(0,_.jsx)(p,{id:`calibrate`,icon:a,label:`Calibrate`,keybind:`c`}),(0,_.jsx)(p,{id:`paint`,icon:s,label:`Paint`,keybind:`b`}),(0,_.jsx)(p,{id:`autofill`,icon:c,label:`Fill`,keybind:`f`})]})}},b={render:function(){let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(d,{"aria-label":`Tools`,value:e,onChange:t,children:[(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`}),(0,_.jsx)(p,{id:`pen`,icon:o,label:`Pen`,keybind:`p`}),(0,_.jsx)(p,{id:`node`,icon:l,label:`Node`,keybind:`n`})]})}},x={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-6)`},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{font:`var(--text-ui) var(--font-sans)`,color:`var(--ink2)`},children:`Resting`}),(0,_.jsx)(d,{"aria-label":`Tools (resting)`,value:null,onChange:()=>{},children:(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`})})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{font:`var(--text-ui) var(--font-sans)`,color:`var(--ink2)`},children:`Hovered, inactive`}),(0,_.jsx)(h,{attr:`data-hovered`,children:(0,_.jsx)(d,{"aria-label":`Tools (hovered, inactive)`,value:null,onChange:()=>{},children:(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`})})})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{font:`var(--text-ui) var(--font-sans)`,color:`var(--ink2)`},children:`Active (spine)`}),(0,_.jsx)(d,{"aria-label":`Tools (active)`,value:`select`,onChange:()=>{},children:(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`})})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{style:{font:`var(--text-ui) var(--font-sans)`,color:`var(--ink2)`},children:`Active, hovered`}),(0,_.jsx)(h,{attr:`data-hovered`,children:(0,_.jsx)(d,{"aria-label":`Tools (active, hovered)`,value:`select`,onChange:()=>{},children:(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`})})})]})]})},S={render:function(){let[e,t]=(0,g.useState)(`pen`);return(0,_.jsxs)(d,{"aria-label":`Tools`,value:e,onChange:t,isDisabled:!0,children:[(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`}),(0,_.jsx)(p,{id:`pen`,icon:o,label:`Pen`,keybind:`p`}),(0,_.jsx)(p,{id:`node`,icon:l,label:`Node`,keybind:`n`})]})}},C={render:function(){let[e,t]=(0,g.useState)(`select`);return(0,_.jsxs)(d,{"aria-label":`Tools`,value:e,onChange:t,children:[(0,_.jsx)(p,{id:`select`,icon:i,label:`Select`,keybind:`v`}),(0,_.jsx)(p,{id:`pen`,icon:o,label:`Pen`,keybind:`p`}),(0,_.jsx)(p,{id:`node`,icon:l,label:`Node`,keybind:`n`})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function SixToolsRail() {
    const [tool, setTool] = useState<string | null>('pen');
    return <ToolRail aria-label="Tools" value={tool} onChange={setTool}>
        <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
        <ToolButton id="pen" icon={PenTool} label="Pen" keybind="p" />
        <ToolButton id="node" icon={Spline} label="Node" keybind="n" />
        <ToolButton id="calibrate" icon={Ruler} label="Calibrate" keybind="c" />
        <ToolButton id="paint" icon={PaintBucket} label="Paint" keybind="b" />
        <ToolButton id="autofill" icon={Grid3x3} label="Fill" keybind="f" />
      </ToolRail>;
  }
}`,...y.parameters?.docs?.source},description:{story:"The six modal tools (`v p n c b f`) as the app actually composes the rail. This is the third of\nthe three visually distinct control classes DESIGN.md §8.2 demands: `Toolbar` for one-shot\nactions, `ToggleButton` pills for view states, and `ToolRail` here for the mutually-exclusive\nTOOL a click on the canvas obeys. The active tool shows both an `--accent-tint` fill AND an\n`--accent` spine bar on the rail's leading edge — the spine is the design's specific answer to\n\"which tool am I in\", meant to read from the corner of the eye without looking straight at the\nrail.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function NoneActiveRail() {
    const [tool, setTool] = useState<string | null>(null);
    return <ToolRail aria-label="Tools" value={tool} onChange={setTool}>
        <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
        <ToolButton id="pen" icon={PenTool} label="Pen" keybind="p" />
        <ToolButton id="node" icon={Spline} label="Node" keybind="n" />
      </ToolRail>;
  }
}`,...b.parameters?.docs?.source},description:{story:'The real "no tool active" state (`tool.none`) — unlike `SegmentedControl`, this rail can be\nfully empty. Clicking any tool activates it; clicking the active one again returns here.',...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-6)'
  }}>
      <div>
        <p style={{
        font: 'var(--text-ui) var(--font-sans)',
        color: 'var(--ink2)'
      }}>Resting</p>
        <ToolRail aria-label="Tools (resting)" value={null} onChange={() => {}}>
          <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
        </ToolRail>
      </div>
      <div>
        <p style={{
        font: 'var(--text-ui) var(--font-sans)',
        color: 'var(--ink2)'
      }}>
          Hovered, inactive
        </p>
        <Forced attr="data-hovered">
          <ToolRail aria-label="Tools (hovered, inactive)" value={null} onChange={() => {}}>
            <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
          </ToolRail>
        </Forced>
      </div>
      <div>
        <p style={{
        font: 'var(--text-ui) var(--font-sans)',
        color: 'var(--ink2)'
      }}>
          Active (spine)
        </p>
        <ToolRail aria-label="Tools (active)" value="select" onChange={() => {}}>
          <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
        </ToolRail>
      </div>
      <div>
        <p style={{
        font: 'var(--text-ui) var(--font-sans)',
        color: 'var(--ink2)'
      }}>
          Active, hovered
        </p>
        <Forced attr="data-hovered">
          <ToolRail aria-label="Tools (active, hovered)" value="select" onChange={() => {}}>
            <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
          </ToolRail>
        </Forced>
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Every state, forced statically side by side, so the collapse trap (a hovered-but-inactive tool
reading identically to resting) and the spine are both checkable without a mouse. Columns:
resting, hovered-inactive, active (with spine), hovered-active.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function DisabledRail() {
    const [tool, setTool] = useState<string | null>('pen');
    return <ToolRail aria-label="Tools" value={tool} onChange={setTool} isDisabled>
        <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
        <ToolButton id="pen" icon={PenTool} label="Pen" keybind="p" />
        <ToolButton id="node" icon={Spline} label="Node" keybind="n" />
      </ToolRail>;
  }
}`,...S.parameters?.docs?.source},description:{story:"`isDisabled` — `.rail[data-disabled]` (ToolRail.module.css) is a live selector (RAC stamps\n`data-disabled` on the group), but had no story exercising it, so a regression there (e.g. the\nrule getting dropped, or the opacity/`pointer-events` treatment breaking) had nothing to catch it\nvisually.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function RovingFocusRail() {
    const [tool, setTool] = useState<string | null>('select');
    return <ToolRail aria-label="Tools" value={tool} onChange={setTool}>
        <ToolButton id="select" icon={MousePointer2} label="Select" keybind="v" />
        <ToolButton id="pen" icon={PenTool} label="Pen" keybind="p" />
        <ToolButton id="node" icon={Spline} label="Node" keybind="n" />
      </ToolRail>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Tab to a tool, then use ArrowUp/ArrowDown to move focus within the vertical rail.`,...C.parameters?.docs?.description}}},w=[`SixTools`,`NoToolActive`,`States`,`Disabled`,`RovingFocus`]}))();export{S as Disabled,b as NoToolActive,C as RovingFocus,y as SixTools,x as States,w as __namedExportsOrder,v as default};