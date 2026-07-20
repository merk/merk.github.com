import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-D9OoTY_7.js";import{n as i,t as a}from"./NumberField-CV9zm-KZ.js";import{n as o,t as s}from"./Select-DI6O3WVy.js";import{n as c,t as l}from"./TextField-Ca2zZynz.js";import{n as u,t as d}from"./story-helpers-Cj7U4GsR.js";function f(){return(0,p.useEffect)(()=>{let e=requestAnimationFrame(()=>{document.querySelector(`[role="option"][aria-selected="true"]`)?.setAttribute(`data-focus-visible`,`true`)});return()=>cancelAnimationFrame(e)},[]),(0,m.jsx)(s,{label:`Pattern`,items:g,value:`voronoi`,onChange:()=>{},defaultOpen:!0})}var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{p=t(n(),1),i(),o(),u(),c(),m=r(),h={title:`Kit/Select`,component:s},g=[{value:`hexagon`,label:`Hexagon`},{value:`voronoi`,label:`Voronoi`},{value:`triangle`,label:`Triangle grid`},{value:`square`,label:`Square grid`},{value:`brick`,label:`Brick bond`},{value:`herringbone`,label:`Herringbone`},{value:`penrose`,label:`Penrose tiling`},{value:`truchet`,label:`Truchet tiles`},{value:`poisson`,label:`Poisson scatter`},{value:`contour`,label:`Contour bands`},{value:`radial`,label:`Radial spokes`}],_=[{value:`svg`,label:`SVG (vector)`},{value:`pdf`,label:`PDF (print-ready)`},{value:`png`,label:`PNG (raster)`}],v=[{value:`a`,label:`Hexagon tiling, 6-fold symmetry, jittered`},{value:`b`,label:`Voronoi relaxation (Lloyd, 8 iterations) over Poisson seed`},{value:`c`,label:`A very long generator name that must ellipsis, never wrap the row`}],y={render:()=>(0,m.jsx)(`table`,{style:{borderSpacing:`var(--space-3)`},children:(0,m.jsxs)(`tbody`,{children:[(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`resting`}),(0,m.jsx)(`td`,{style:{width:`260px`},children:(0,m.jsx)(s,{label:`Pattern`,items:g,value:`hexagon`,onChange:()=>{}})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`hover`}),(0,m.jsx)(`td`,{style:{width:`260px`},children:(0,m.jsx)(d,{attr:`data-hovered`,children:(0,m.jsx)(s,{label:`Pattern`,items:g,value:`hexagon`,onChange:()=>{}})})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`focus`}),(0,m.jsx)(`td`,{style:{width:`260px`},children:(0,m.jsx)(d,{attr:`data-focus-visible`,children:(0,m.jsx)(s,{label:`Pattern`,items:g,value:`hexagon`,onChange:()=>{}})})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`open, selected + focused option`}),(0,m.jsx)(`td`,{style:{width:`260px`},children:(0,m.jsx)(f,{})})]}),(0,m.jsxs)(`tr`,{children:[(0,m.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`disabled`}),(0,m.jsx)(`td`,{style:{width:`260px`},children:(0,m.jsx)(s,{label:`Pattern`,items:g,value:`hexagon`,onChange:()=>{},isDisabled:!0})})]})]})})},b={render:function(){let[e,t]=(0,p.useState)(`hexagon`);return(0,m.jsx)(`div`,{style:{width:`260px`},children:(0,m.jsx)(s,{label:`Pattern`,items:g,value:e,onChange:t})})}},x={render:function(){let[e,t]=(0,p.useState)(`svg`);return(0,m.jsx)(`div`,{style:{width:`260px`},children:(0,m.jsx)(s,{label:`Format`,items:_,value:e,onChange:t})})}},S={render:function(){let[e,t]=(0,p.useState)(`a`);return(0,m.jsx)(`div`,{style:{width:`260px`},children:(0,m.jsx)(s,{label:`Pattern`,items:v,value:e,onChange:t})})}},C={render:function(){let[e,t]=(0,p.useState)(`hexagon`),[n,r]=(0,p.useState)(`Panel A`),[i,o]=(0,p.useState)(300);return(0,m.jsxs)(`div`,{"data-testid":`select-alignment-column`,style:{display:`grid`,gap:`var(--space-2)`,width:`320px`},children:[(0,m.jsx)(s,{label:`Pattern`,items:g,value:e,onChange:t}),(0,m.jsx)(l,{label:`Name`,value:n,onChange:r}),(0,m.jsx)(a,{label:`Width`,value:i,onChange:o,unit:`mm`})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-3)'
  }}>
      <tbody>
        <tr>
          <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
            resting
          </td>
          <td style={{
          width: '260px'
        }}>
            <Select label="Pattern" items={PATTERNS} value="hexagon" onChange={() => {}} />
          </td>
        </tr>
        <tr>
          <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
            hover
          </td>
          <td style={{
          width: '260px'
        }}>
            <Forced attr="data-hovered">
              <Select label="Pattern" items={PATTERNS} value="hexagon" onChange={() => {}} />
            </Forced>
          </td>
        </tr>
        <tr>
          <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
            focus
          </td>
          <td style={{
          width: '260px'
        }}>
            <Forced attr="data-focus-visible">
              <Select label="Pattern" items={PATTERNS} value="hexagon" onChange={() => {}} />
            </Forced>
          </td>
        </tr>
        <tr>
          <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
            open, selected + focused option
          </td>
          <td style={{
          width: '260px'
        }}>
            <OpenWithFocusedSelection />
          </td>
        </tr>
        <tr>
          <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
            disabled
          </td>
          <td style={{
          width: '260px'
        }}>
            <Select label="Pattern" items={PATTERNS} value="hexagon" onChange={() => {}} isDisabled />
          </td>
        </tr>
      </tbody>
    </table>
}`,...y.parameters?.docs?.source},description:{story:"Resting / hover / focus / open-with-selection / disabled — the five states every kit primitive\n ships. Selection in the open popover is a FILL over `--accent-tint` with an `--accent` spine;\n focus is the separate ring from `focus.module.css`.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function PatternPickerStory() {
    const [value, setValue] = useState('hexagon');
    return <div style={{
      width: '260px'
    }}>
        <Select label="Pattern" items={PATTERNS} value={value} onChange={setValue} />
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"The real consumer: the generator/pattern picker — 11 generators, too many for `SegmentedControl`.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function ExportFormatStory() {
    const [value, setValue] = useState('svg');
    return <div style={{
      width: '260px'
    }}>
        <Select label="Format" items={EXPORT_FORMATS} value={value} onChange={setValue} />
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`The other real consumer: export format menus.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function LongOptionsStory() {
    const [value, setValue] = useState('a');
    return <div style={{
      width: '260px'
    }}>
        <Select label="Pattern" items={LONG_ITEMS} value={value} onChange={setValue} />
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`The truncation rule (HANDOFF §6): a single-line identifier ellipsizes, it never wraps the row.
Proven with labels deliberately longer than any real generator name.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function AlignmentColumnStory() {
    const [pattern, setPattern] = useState('hexagon');
    const [name, setName] = useState('Panel A');
    const [width, setWidth] = useState(300);
    return <div data-testid="select-alignment-column" style={{
      display: 'grid',
      gap: 'var(--space-2)',
      width: '320px'
    }}>
        <Select label="Pattern" items={PATTERNS} value={pattern} onChange={setPattern} />
        <TextField label="Name" value={name} onChange={setName} />
        <NumberField label="Width" value={width} onChange={setWidth} unit="mm" />
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"The alignment contract: `Select`'s label column must start at the same x as `NumberField`'s and\n`TextField`'s in the same panel — all three reference `--field-label-width`, none redeclare it.\nSee `NumberField.stories.tsx`'s `AlignmentColumn` for the sibling case this must match.",...C.parameters?.docs?.description}}},w=[`AllStates`,`PatternPicker`,`ExportFormat`,`LongOptions`,`AlignmentColumn`]}))();export{C as AlignmentColumn,y as AllStates,x as ExportFormat,S as LongOptions,b as PatternPicker,w as __namedExportsOrder,h as default};