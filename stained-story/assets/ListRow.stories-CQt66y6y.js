import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-ubJmwYoO.js";import{n as i,t as a}from"./Badge-3ci9CJgR.js";import{O as o,t as s}from"./exports-Dgq9GX-H.js";import{n as c,t as l}from"./Icon-CAug809Q.js";import{Q as u,t as d}from"./lucide-react-BQ6moK7Q.js";import{n as f,t as p}from"./SeverityDot-BjJSTDop.js";import{n as m,t as h}from"./ListRow-mQJzphoL.js";function g({attr:e,children:t}){let n=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=requestAnimationFrame(()=>{n.current?.querySelector(`[role="row"]`)?.setAttribute(e,`true`)});return()=>cancelAnimationFrame(t)},[e]),(0,v.jsx)(`div`,{ref:n,style:{display:`contents`},children:t})}var _,v,y,b,x,S,C,w,T,E,D;e((()=>{d(),_=t(n(),1),s(),i(),c(),m(),f(),v=r(),y={title:`Kit/ListRow`,component:h},b={color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`,marginBottom:`var(--space-1)`},x={render:()=>(0,v.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,width:`640px`},children:[(0,v.jsxs)(`div`,{style:{flex:1},children:[(0,v.jsx)(`div`,{style:b,children:`resting`}),(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,children:(0,v.jsx)(h,{id:`a`,main:`Border`,trailing:`12`})})]}),(0,v.jsxs)(`div`,{style:{flex:1},children:[(0,v.jsx)(`div`,{style:b,children:`hovered`}),(0,v.jsx)(g,{attr:`data-hovered`,children:(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,children:(0,v.jsx)(h,{id:`a`,main:`Border`,trailing:`12`})})})]}),(0,v.jsxs)(`div`,{style:{flex:1},children:[(0,v.jsx)(`div`,{style:b,children:`selected`}),(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,selectedKeys:[`a`],children:(0,v.jsx)(h,{id:`a`,main:`Border`,trailing:`12`})})]}),(0,v.jsxs)(`div`,{style:{flex:1},children:[(0,v.jsx)(`div`,{style:b,children:`selected + hovered`}),(0,v.jsx)(g,{attr:`data-hovered`,children:(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,selectedKeys:[`a`],children:(0,v.jsx)(h,{id:`a`,main:`Border`,trailing:`12`})})})]}),(0,v.jsxs)(`div`,{style:{flex:1},children:[(0,v.jsx)(`div`,{style:b,children:`focused + selected`}),(0,v.jsx)(g,{attr:`data-focus-visible`,children:(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,selectedKeys:[`a`],children:(0,v.jsx)(h,{id:`a`,main:`Border`,trailing:`12`})})})]})]})},S={render:()=>(0,v.jsx)(`div`,{style:{width:`320px`},children:(0,v.jsxs)(o,{"aria-label":`Diagnostics`,selectionMode:`single`,children:[(0,v.jsx)(h,{id:`a`,lead:(0,v.jsx)(p,{severity:`error`}),main:`Edge does not close a face`}),(0,v.jsx)(h,{id:`b`,lead:(0,v.jsx)(p,{severity:`warn`}),main:`Overlapping cut lines`})]})})},C={render:()=>(0,v.jsx)(`div`,{style:{width:`320px`},children:(0,v.jsxs)(o,{"aria-label":`Layers`,selectionMode:`single`,children:[(0,v.jsx)(h,{id:`a`,lead:(0,v.jsx)(l,{glyph:u,size:`sm`}),main:`Cut lines`,trailing:(0,v.jsx)(a,{tone:`neutral`,children:`12`})}),(0,v.jsx)(h,{id:`b`,lead:(0,v.jsx)(l,{glyph:u,size:`sm`}),main:`Border`,trailing:(0,v.jsx)(a,{tone:`neutral`,children:`3`})})]})})},w={render:()=>(0,v.jsx)(`div`,{style:{width:`220px`},children:(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,children:(0,v.jsx)(h,{id:`a`,main:`Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed`,trailing:`1`})})})},T={render:()=>(0,v.jsx)(`div`,{style:{width:`280px`},children:(0,v.jsxs)(o,{"aria-label":`Layers`,selectionMode:`single`,defaultSelectedKeys:[`b`],children:[(0,v.jsx)(h,{id:`a`,lead:(0,v.jsx)(l,{glyph:u,size:`sm`}),main:`Border`,trailing:`3`}),(0,v.jsx)(h,{id:`b`,lead:(0,v.jsx)(l,{glyph:u,size:`sm`}),main:`Sky`,trailing:`1`}),(0,v.jsx)(h,{id:`c`,lead:(0,v.jsx)(l,{glyph:u,size:`sm`}),main:`Foreground`,trailing:`8`})]})})},E={render:()=>(0,v.jsx)(`div`,{style:{width:`280px`},children:(0,v.jsx)(o,{"aria-label":`Layers`,selectionMode:`single`,disabledKeys:[`a`],children:(0,v.jsx)(h,{id:`a`,main:`Locked layer`,trailing:`4`,isDisabled:!0})})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    width: '640px'
  }}>
      <div style={{
      flex: 1
    }}>
        <div style={cellLabel}>resting</div>
        <GridList aria-label="Layers" selectionMode="single">
          <ListRow id="a" main="Border" trailing="12" />
        </GridList>
      </div>
      <div style={{
      flex: 1
    }}>
        <div style={cellLabel}>hovered</div>
        <ForceRowState attr="data-hovered">
          <GridList aria-label="Layers" selectionMode="single">
            <ListRow id="a" main="Border" trailing="12" />
          </GridList>
        </ForceRowState>
      </div>
      <div style={{
      flex: 1
    }}>
        <div style={cellLabel}>selected</div>
        <GridList aria-label="Layers" selectionMode="single" selectedKeys={['a']}>
          <ListRow id="a" main="Border" trailing="12" />
        </GridList>
      </div>
      <div style={{
      flex: 1
    }}>
        <div style={cellLabel}>selected + hovered</div>
        <ForceRowState attr="data-hovered">
          <GridList aria-label="Layers" selectionMode="single" selectedKeys={['a']}>
            <ListRow id="a" main="Border" trailing="12" />
          </GridList>
        </ForceRowState>
      </div>
      <div style={{
      flex: 1
    }}>
        <div style={cellLabel}>focused + selected</div>
        <ForceRowState attr="data-focus-visible">
          <GridList aria-label="Layers" selectionMode="single" selectedKeys={['a']}>
            <ListRow id="a" main="Border" trailing="12" />
          </GridList>
        </ForceRowState>
      </div>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"Every state: resting, hovered, selected, selected+hovered, and focused+selected — the load-bearing\nrequirement (CLAUDE.md task-3 brief): selection is a FILL, focus is a RING, and a row that is both\nfocused and selected must show both treatments at once, not one or the other.\n\n`selected+hovered` is deliberately adjacent to `selected` alone: `[data-selected]` and\n`[data-hovered]` carry equal CSS specificity, so hovering an already-selected row can silently give\nno feedback at all if the later rule in the stylesheet just wins outright (this shipped once\nalready, in PR 1's `Select` listbox). Look at it here: `selected+hovered` steps to `--bar-bg`\nbecause `--accent-tint` (its `--space-1`-rowed sibling) is a visibly different fill.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <GridList aria-label="Diagnostics" selectionMode="single">
        <ListRow id="a" lead={<SeverityDot severity="error" />} main="Edge does not close a face" />
        <ListRow id="b" lead={<SeverityDot severity="warn" />} main="Overlapping cut lines" />
      </GridList>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"A `SeverityDot` lead — the shape `DiagnosticRow` (Task 5) specialises.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <GridList aria-label="Layers" selectionMode="single">
        <ListRow id="a" lead={<Icon glyph={GripVertical} size="sm" />} main="Cut lines" trailing={<Badge tone="neutral">12</Badge>} />
        <ListRow id="b" lead={<Icon glyph={GripVertical} size="sm" />} main="Border" trailing={<Badge tone="neutral">3</Badge>} />
      </GridList>
    </div>
}`,...C.parameters?.docs?.source},description:{story:"A drag-handle lead and a `Badge` trailing — the shape `LayerRow` (Task 4) specialises.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '220px'
  }}>
      <GridList aria-label="Layers" selectionMode="single">
        <ListRow id="a" main="Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed" trailing="1" />
      </GridList>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"A long identifier ellipsizes rather than wrapping (DESIGN.md §7, HANDOFF §6) and exposes the full\ntext via a native `title` attribute — hover it in a live browser to see the OS tooltip. Not the\n`Tooltip` primitive: `main` is plain, non-interactive text, not an interactive trigger.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <GridList aria-label="Layers" selectionMode="single" defaultSelectedKeys={['b']}>
        <ListRow id="a" lead={<Icon glyph={GripVertical} size="sm" />} main="Border" trailing="3" />
        <ListRow id="b" lead={<Icon glyph={GripVertical} size="sm" />} main="Sky" trailing="1" />
        <ListRow id="c" lead={<Icon glyph={GripVertical} size="sm" />} main="Foreground" trailing="8" />
      </GridList>
    </div>
}`,...T.parameters?.docs?.source},description:{story:`A live, interactive list — not just forced states — so a reviewer can click and arrow-key through
 it and see selection/focus update for real.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <GridList aria-label="Layers" selectionMode="single" disabledKeys={['a']}>
        <ListRow id="a" main="Locked layer" trailing="4" isDisabled />
      </GridList>
    </div>
}`,...E.parameters?.docs?.source},description:{story:`Disabled: no pointer feedback, excluded from selection and typeahead.`,...E.parameters?.docs?.description}}},D=[`AllStates`,`WithSeverityLead`,`WithHandleAndBadge`,`LongIdentifierEllipses`,`Interactive`,`Disabled`]}))();export{x as AllStates,E as Disabled,T as Interactive,w as LongIdentifierEllipses,C as WithHandleAndBadge,S as WithSeverityLead,D as __namedExportsOrder,y as default};