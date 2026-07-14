import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-sr_6Wtjm.js";import{n as i,t as a}from"./story-helpers-CnQDC2k8.js";import{n as o,t as s}from"./NumberField-LgZMW491.js";import{n as c,t as l}from"./TextField-tunf2Ez4.js";var u,d,f,p,m,h,g;e((()=>{u=t(n(),1),o(),i(),c(),d=r(),f={title:`Kit/NumberField`,component:s},p={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`,width:`320px`},children:[(0,d.jsx)(s,{label:`Default`,value:30,onChange:()=>{},unit:`mm`}),(0,d.jsx)(a,{selector:`input`,attr:`data-hovered`,children:(0,d.jsx)(s,{label:`Hover`,value:30,onChange:()=>{},unit:`mm`})}),(0,d.jsx)(a,{selector:`input`,attr:`data-focus-visible`,children:(0,d.jsx)(s,{label:`Focus`,value:30,onChange:()=>{},unit:`mm`})}),(0,d.jsx)(s,{label:`Invalid`,value:-5,onChange:()=>{},unit:`mm`,isInvalid:!0}),(0,d.jsx)(s,{label:`Disabled`,value:30,onChange:()=>{},unit:`mm`,isDisabled:!0})]})},m={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`,width:`320px`},children:[(0,d.jsx)(s,{label:`Scale`,value:300,onChange:()=>{},unit:`mm`}),(0,d.jsx)(s,{label:`Angle`,value:45,onChange:()=>{},unit:`°`}),(0,d.jsx)(s,{label:`Jitter`,value:20,onChange:()=>{},unit:`%`}),(0,d.jsx)(s,{label:`Stroke`,value:2,onChange:()=>{},unit:`px`}),(0,d.jsx)(s,{label:`Count`,value:12,onChange:()=>{}})]})},h={render:function(){let[e,t]=(0,u.useState)(`Panel A`),[n,r]=(0,u.useState)(7),[i,a]=(0,u.useState)(30),[o,c]=(0,u.useState)(300),[f,p]=(0,u.useState)(1e3);return(0,d.jsxs)(`div`,{"data-testid":`alignment-column`,style:{display:`grid`,gap:`var(--space-2)`,width:`320px`},children:[(0,d.jsx)(l,{label:`Name`,value:e,onChange:t}),(0,d.jsx)(s,{label:`Width`,value:n,onChange:r,unit:`mm`}),(0,d.jsx)(s,{label:`Height`,value:i,onChange:a,unit:`mm`}),(0,d.jsx)(s,{label:`Perimeter`,value:o,onChange:c,unit:`mm`}),(0,d.jsx)(s,{label:`Area`,value:f,onChange:p,unit:`mm`})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-2)',
    width: '320px'
  }}>
      <NumberField label="Default" value={30} onChange={() => {}} unit="mm" />
      <Forced selector="input" attr="data-hovered">
        <NumberField label="Hover" value={30} onChange={() => {}} unit="mm" />
      </Forced>
      <Forced selector="input" attr="data-focus-visible">
        <NumberField label="Focus" value={30} onChange={() => {}} unit="mm" />
      </Forced>
      <NumberField label="Invalid" value={-5} onChange={() => {}} unit="mm" isInvalid />
      <NumberField label="Disabled" value={30} onChange={() => {}} unit="mm" isDisabled />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`Default, hover, focus, invalid, disabled — the five states, row-labelled.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-2)',
    width: '320px'
  }}>
      <NumberField label="Scale" value={300} onChange={() => {}} unit="mm" />
      <NumberField label="Angle" value={45} onChange={() => {}} unit="°" />
      <NumberField label="Jitter" value={20} onChange={() => {}} unit="%" />
      <NumberField label="Stroke" value={2} onChange={() => {}} unit="px" />
      <NumberField label="Count" value={12} onChange={() => {}} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Every unit the primitive supports.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function AlignmentColumnStory() {
    const [name, setName] = useState('Panel A');
    const [narrow, setNarrow] = useState(7);
    const [two, setTwo] = useState(30);
    const [three, setThree] = useState(300);
    const [four, setFour] = useState(1000);
    return <div data-testid="alignment-column" style={{
      display: 'grid',
      gap: 'var(--space-2)',
      width: '320px'
    }}>
        <TextField label="Name" value={name} onChange={setName} />
        <NumberField label="Width" value={narrow} onChange={setNarrow} unit="mm" />
        <NumberField label="Height" value={two} onChange={setTwo} unit="mm" />
        <NumberField label="Perimeter" value={three} onChange={setThree} unit="mm" />
        <NumberField label="Area" value={four} onChange={setFour} unit="mm" />
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"The acceptance test: a column of very different digit-widths (7, 30, 300, 1000), plus a\n`TextField` in the same column. Mono + right-aligned values must keep their right edge fixed as\nthe digit count changes, and the label column must line up with `TextField`'s — that is the whole\npoint of both modules referencing the same `--field-label-width` role rather than each declaring\ntheir own.",...h.parameters?.docs?.description}}},g=[`AllStates`,`Units`,`AlignmentColumn`]}))();export{h as AlignmentColumn,p as AllStates,m as Units,g as __namedExportsOrder,f as default};