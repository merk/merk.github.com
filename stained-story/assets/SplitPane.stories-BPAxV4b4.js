import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-BDLP3HaD.js";import{i,n as a,r as o,t as s}from"./SplitPane-DKH_8PwE.js";import{n as c,t as l}from"./story-helpers-CCe7UO1J.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u=t(n(),1),i(),a(),c(),d=r(),f={title:`Kit/SplitPane`,component:s},p=(0,d.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,height:`100%`,background:`var(--canvas)`,color:`var(--ink2)`,font:`400 var(--text-body) var(--font-sans)`},children:`canvas`}),m=(0,d.jsx)(`div`,{style:{height:`100%`,padding:`var(--space-3)`,background:`var(--panel-bg)`,color:`var(--ink)`,font:`400 var(--text-body) var(--font-sans)`},children:`right column`}),h={render:function(){let[e,t]=(0,u.useState)(300);return(0,d.jsx)(`div`,{style:{height:`360px`,border:`1px solid var(--line)`},children:(0,d.jsxs)(s,{side:`right`,width:e,onWidthChange:t,min:200,max:500,children:[p,m]})})}},g={render:()=>(0,d.jsx)(`div`,{style:{height:`240px`,border:`1px solid var(--line)`},children:(0,d.jsxs)(s,{side:`right`,width:200,onWidthChange:()=>{},min:200,max:500,children:[p,m]})})},_={render:()=>(0,d.jsx)(`div`,{style:{height:`240px`,border:`1px solid var(--line)`},children:(0,d.jsxs)(s,{side:`right`,width:500,onWidthChange:()=>{},min:200,max:500,children:[p,m]})})},v={render:function(){let[e,t]=(0,u.useState)(!0);return(0,d.jsx)(`div`,{style:{height:`240px`,border:`1px solid var(--line)`},children:(0,d.jsxs)(s,{side:`right`,width:300,onWidthChange:()=>{},min:200,max:500,isCollapsed:e,onCollapsedChange:t,children:[p,m]})})}},y={render:()=>(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsx)(l,{selector:`.${o.collapseToggle}`,attr:`data-focus-visible`,children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,isCollapsed:!1,onCollapsedChange:()=>{},children:[p,m]})})})},b={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`resting`}),(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,isCollapsed:!1,onCollapsedChange:()=>{},children:[p,m]})})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`hovered`}),(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsx)(l,{selector:`.${o.collapseToggle}`,attr:`data-force-hover`,children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,isCollapsed:!1,onCollapsedChange:()=>{},children:[p,m]})})})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`pressed`}),(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsx)(l,{selector:`.${o.collapseToggle}`,attr:`data-force-active`,children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,isCollapsed:!1,onCollapsedChange:()=>{},children:[p,m]})})})]})]})},x={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`},children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`resting`}),(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,children:[p,m]})})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`hovered`}),(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsx)(l,{selector:`.${o.handle}`,attr:`data-force-hover`,children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,children:[p,m]})})})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`focus-visible`}),(0,d.jsx)(`div`,{style:{height:`160px`,width:`160px`,border:`1px solid var(--line)`},children:(0,d.jsx)(l,{selector:`.${o.handle}`,attr:`data-focus-visible`,children:(0,d.jsxs)(s,{side:`right`,width:80,onWidthChange:()=>{},min:40,max:120,children:[p,m]})})})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function InteractiveSplitPane() {
    const [width, setWidth] = useState(300);
    return <div style={{
      height: '360px',
      border: '1px solid var(--line)'
    }}>
        <SplitPane side="right" width={width} onWidthChange={setWidth} min={200} max={500}>
          {canvas}
          {panels}
        </SplitPane>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:`A live, draggable split — not just forced states — so a reviewer can actually resize it. The
handle is ALSO keyboard-operable (Tab to it, then Left/Right, or Shift+Left/Right for a bigger
step); a static story cannot demonstrate that by itself, so it's called out here explicitly.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '240px',
    border: '1px solid var(--line)'
  }}>
      <SplitPane side="right" width={200} onWidthChange={() => {}} min={200} max={500}>
        {canvas}
        {panels}
      </SplitPane>
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Clamped at the minimum width — the handle cannot drag or arrow-key past it.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '240px',
    border: '1px solid var(--line)'
  }}>
      <SplitPane side="right" width={500} onWidthChange={() => {}} min={200} max={500}>
        {canvas}
        {panels}
      </SplitPane>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Clamped at the maximum width.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function CollapsedSplitPane() {
    const [isCollapsed, setIsCollapsed] = useState(true);
    return <div style={{
      height: '240px',
      border: '1px solid var(--line)'
    }}>
        <SplitPane side="right" width={300} onWidthChange={() => {}} min={200} max={500} isCollapsed={isCollapsed} onCollapsedChange={setIsCollapsed}>
          {canvas}
          {panels}
        </SplitPane>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:"`isCollapsed` hides the aside pane and its handle entirely; the toggle button re-expands it.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: '160px',
    width: '160px',
    border: '1px solid var(--line)'
  }}>
      <Forced selector={\`.\${styles.collapseToggle}\`} attr="data-focus-visible">
        <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120} isCollapsed={false} onCollapsedChange={() => {}}>
          {canvas}
          {panels}
        </SplitPane>
      </Forced>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"The collapse toggle's focus-visible state, pinned statically (the mirror-image bug to\n`HandleStates` below: here the risk isn't a ring on a non-focusable node, but a focusable node\nwith NO ring — the toggle is a real `<button>` and must show the same accent ring as the handle).\nForced via `data-focus-visible`, the same mechanism `focus.module.css`'s `.ring` reads.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)'
  }}>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          resting
        </div>
        <div style={{
        height: '160px',
        width: '160px',
        border: '1px solid var(--line)'
      }}>
          <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120} isCollapsed={false} onCollapsedChange={() => {}}>
            {canvas}
            {panels}
          </SplitPane>
        </div>
      </div>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          hovered
        </div>
        <div style={{
        height: '160px',
        width: '160px',
        border: '1px solid var(--line)'
      }}>
          <Forced selector={\`.\${styles.collapseToggle}\`} attr="data-force-hover">
            <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120} isCollapsed={false} onCollapsedChange={() => {}}>
              {canvas}
              {panels}
            </SplitPane>
          </Forced>
        </div>
      </div>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          pressed
        </div>
        <div style={{
        height: '160px',
        width: '160px',
        border: '1px solid var(--line)'
      }}>
          <Forced selector={\`.\${styles.collapseToggle}\`} attr="data-force-active">
            <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120} isCollapsed={false} onCollapsedChange={() => {}}>
              {canvas}
              {panels}
            </SplitPane>
          </Forced>
        </div>
      </div>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"Resting, hovered, and pressed collapse toggle, side by side — the mirror-image bug to the handle\nbelow: the toggle rests transparent and previously hovered to `--inset`, which in the light theme\nis the SAME ramp step as `--app-bg` it sits on (issue #68), so its hover was a no-op there and\nnobody could see it in a story because it never had a hovered cell at all. Hover now targets\n`--bar-bg` (genuinely distinct from `--app-bg` in both themes), and there is a real pressed step.\nForced via `data-force-hover`/`data-force-active` (`SplitPane.module.css`), the same mechanism the\nhandle states below use.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)'
  }}>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          resting
        </div>
        <div style={{
        height: '160px',
        width: '160px',
        border: '1px solid var(--line)'
      }}>
          <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120}>
            {canvas}
            {panels}
          </SplitPane>
        </div>
      </div>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          hovered
        </div>
        <div style={{
        height: '160px',
        width: '160px',
        border: '1px solid var(--line)'
      }}>
          <Forced selector={\`.\${styles.handle}\`} attr="data-force-hover">
            <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120}>
              {canvas}
              {panels}
            </SplitPane>
          </Forced>
        </div>
      </div>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          focus-visible
        </div>
        <div style={{
        height: '160px',
        width: '160px',
        border: '1px solid var(--line)'
      }}>
          <Forced selector={\`.\${styles.handle}\`} attr="data-focus-visible">
            <SplitPane side="right" width={80} onWidthChange={() => {}} min={40} max={120}>
              {canvas}
              {panels}
            </SplitPane>
          </Forced>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Resting vs. hovered vs. focus-visible handle, side by side (DESIGN.md's \"collapsed state\" trap:\na hover treatment identical to rest gives no feedback at all — PR 0 and PR 1 both shipped that\nbug). Focus-visible is forced via `data-focus-visible` (the same mechanism `focus.module.css`'s\n`.ring` reads); hover is forced via this file's own `data-force-hover` hook, since a native\n`:hover` can't be faked without a real pointer. The focused cell also proves the PR-1 regression\n(a ring on a non-focusable node) can't recur here: `<div role=\"separator\" tabIndex={0}>` is a\ngenuinely focusable element, tabbing to it in a running Storybook renders the ring for real — see\nthe task report.",...x.parameters?.docs?.description}}},S=[`Interactive`,`AtMin`,`AtMax`,`Collapsed`,`CollapseToggleFocusVisible`,`CollapseToggleStates`,`HandleStates`]}))();export{_ as AtMax,g as AtMin,y as CollapseToggleFocusVisible,b as CollapseToggleStates,v as Collapsed,x as HandleStates,h as Interactive,S as __namedExportsOrder,f as default};