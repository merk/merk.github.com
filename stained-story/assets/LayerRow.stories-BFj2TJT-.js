import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-BJ_HWdlk.js";import{O as i,t as a}from"./exports-BGogWSBf.js";import{n as o,r as s}from"./palette-bDqSCaSl.js";import{n as c,t as l}from"./LayerRow-B1yIBBZ_.js";function u({attr:e,children:t}){let n=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let t=requestAnimationFrame(()=>{n.current?.querySelector(`[role="row"]`)?.setAttribute(e,`true`)});return()=>cancelAnimationFrame(t)},[e]),(0,m.jsx)(`div`,{ref:n,style:{display:`contents`},children:t})}function d(e){let t=o[e];if(t===void 0)throw Error(`GLASS_PALETTE has no colour at index ${e}`);return t.color}function f(){let[e,t]=(0,p.useState)(`b`),[n,r]=(0,p.useState)({a:`Border`,b:`Sky`,c:`Foreground`}),[a,o]=(0,p.useState)({a:!0,b:!0,c:!1});return(0,m.jsx)(`div`,{style:{width:`280px`},children:(0,m.jsx)(i,{"aria-label":`Layers`,selectionMode:`single`,selectedKeys:[e],onSelectionChange:e=>{if(e===`all`)return;let[n]=e;(n===`a`||n===`b`||n===`c`)&&t(n)},children:[`a`,`b`,`c`].map(t=>(0,m.jsx)(l,{id:t,name:n[t],isVisible:a[t],onVisibilityChange:e=>o(n=>({...n,[t]:e})),glass:t===`c`?void 0:d(t===`a`?0:4),isSelected:e===t,onRename:e=>r(n=>({...n,[t]:e})),dragHandleProps:{}},t))})})}var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{p=t(n(),1),a(),s(),c(),m=r(),h={title:`Kit/LayerRow`,component:l},g={color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`,marginBottom:`var(--space-1)`},_=()=>{},v={render:()=>(0,m.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-4)`,width:`760px`},children:[[`resting`,void 0],[`hovered`,`data-hovered`],[`selected`,void 0],[`selected + hovered`,`data-hovered`],[`focused + selected`,`data-focus-visible`]].map(([e,t])=>{let n=e!==`resting`&&e!==`hovered`,r=(0,m.jsx)(i,{"aria-label":`Layers`,selectionMode:`single`,selectedKeys:n?[`a`]:[],children:(0,m.jsx)(l,{id:`a`,name:`Border`,isVisible:!0,onVisibilityChange:_,glass:d(0),isSelected:n,onRename:_})});return(0,m.jsxs)(`div`,{style:{flex:1},children:[(0,m.jsx)(`div`,{style:g,children:e}),t===void 0?r:(0,m.jsx)(u,{attr:t,children:r})]},e)})})},y={render:()=>(0,m.jsx)(`div`,{style:{width:`280px`},children:(0,m.jsx)(i,{"aria-label":`Layers`,selectionMode:`single`,children:(0,m.jsx)(l,{id:`a`,name:`Reference sketch`,isVisible:!1,onVisibilityChange:_,glass:d(3),isSelected:!1,onRename:_})})})},b={render:()=>(0,m.jsx)(`div`,{style:{width:`280px`},children:(0,m.jsx)(i,{"aria-label":`Layers`,selectionMode:`single`,selectedKeys:[`a`],children:(0,m.jsx)(l,{id:`a`,name:`Reference sketch`,isVisible:!1,onVisibilityChange:_,glass:d(3),isSelected:!0,onRename:_})})})},x={render:()=>(0,m.jsx)(`div`,{style:{width:`220px`},children:(0,m.jsx)(i,{"aria-label":`Layers`,selectionMode:`single`,children:(0,m.jsx)(l,{id:`a`,name:`Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed`,isVisible:!0,onVisibilityChange:_,isSelected:!1,onRename:_})})})},S={render:()=>(0,m.jsx)(`div`,{style:{width:`280px`},children:(0,m.jsxs)(i,{"aria-label":`Layers`,selectionMode:`single`,children:[(0,m.jsx)(l,{id:`a`,name:`Cut lines`,isVisible:!0,onVisibilityChange:_,glass:d(5),isSelected:!1,onRename:_}),(0,m.jsx)(l,{id:`b`,name:`Reference group`,isVisible:!0,onVisibilityChange:_,isSelected:!1,onRename:_})]})})},C={render:()=>(0,m.jsx)(f,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-4)',
    width: '760px'
  }}>
      {([['resting', undefined], ['hovered', 'data-hovered'], ['selected', undefined], ['selected + hovered', 'data-hovered'], ['focused + selected', 'data-focus-visible']] as const).map(([label, attr]) => {
      const selected = label !== 'resting' && label !== 'hovered';
      const row = <GridList aria-label="Layers" selectionMode="single" selectedKeys={selected ? ['a'] : []}>
            <LayerRow id="a" name="Border" isVisible onVisibilityChange={noop} glass={paletteColor(0)} isSelected={selected} onRename={noop} />
          </GridList>;
      return <div key={label} style={{
        flex: 1
      }}>
            <div style={cellLabel}>{label}</div>
            {attr === undefined ? row : <ForceRowState attr={attr}>{row}</ForceRowState>}
          </div>;
    })}
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Every state: resting, hovered, selected, selected+hovered, and focused+selected — the load-bearing\nrequirement (CLAUDE.md task-4 brief): selection is a FILL, focus is a RING, and `selected+hovered`\nmust read as visibly different from `selected` alone (`[data-selected]`/`[data-hovered]` carry equal\nCSS specificity — the PR-1 `Select` listbox bug this project keeps re-finding). `LayerRow` inherits\nthis treatment entirely from `ListRow` (it renders `ListRow` unmodified while not editing), so this\nstory exists to prove the inheritance holds through the toggle/swatch composition, not to re-litigate\nthe fill/ring rule itself.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <GridList aria-label="Layers" selectionMode="single">
        <LayerRow id="a" name="Reference sketch" isVisible={false} onVisibilityChange={noop} glass={paletteColor(3)} isSelected={false} onRename={noop} />
      </GridList>
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Visibility off: the row dims (matching the app's existing \`.layer-row--hidden\`) and the toggle's
 icon/label flip to "Show".`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <GridList aria-label="Layers" selectionMode="single" selectedKeys={['a']}>
        <LayerRow id="a" name="Reference sketch" isVisible={false} onVisibilityChange={noop} glass={paletteColor(3)} isSelected onRename={noop} />
      </GridList>
    </div>
}`,...b.parameters?.docs?.source},description:{story:"The compounded worst case for the hidden-row opacity's text contrast: hidden AND selected/focused\n at once (`--accent-tint` fill + `--ink` text, all further dimmed by `.hidden`'s opacity). Kept as\n its own story so the axe color-contrast sweep covers this combination explicitly, not just the\n resting-hidden case `Hidden` above shows.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '220px'
  }}>
      <GridList aria-label="Layers" selectionMode="single">
        <LayerRow id="a" name="Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed" isVisible onVisibilityChange={noop} isSelected={false} onRename={noop} />
      </GridList>
    </div>
}`,...x.parameters?.docs?.source},description:{story:"A long name ellipsizes rather than wrapping and carries the full text via a native `title` — the\n same `ListRow.main` treatment, inherited unmodified.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '280px'
  }}>
      <GridList aria-label="Layers" selectionMode="single">
        <LayerRow id="a" name="Cut lines" isVisible onVisibilityChange={noop} glass={paletteColor(5)} isSelected={false} onRename={noop} />
        <LayerRow id="b" name="Reference group" isVisible onVisibilityChange={noop} isSelected={false} onRename={noop} />
      </GridList>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`With and without a glass swatch — a group or reference layer has no single colour of its own, so
 the swatch slot is omitted entirely rather than shown empty.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveDemo />
}`,...C.parameters?.docs?.source}}},w=[`AllStates`,`Hidden`,`HiddenAndSelected`,`LongName`,`WithAndWithoutGlass`,`Interactive`]}))();export{v as AllStates,y as Hidden,b as HiddenAndSelected,C as Interactive,x as LongName,S as WithAndWithoutGlass,w as __namedExportsOrder,h as default};