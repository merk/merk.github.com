import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-B_zWQXCQ.js";import{n as i,t as a}from"./TextField-DBp4Dlbj.js";import{n as o,t as s}from"./story-helpers-Bl5dQ3Zp.js";var c,l,u,d,f,p,m;e((()=>{c=t(n(),1),o(),i(),l=r(),u={title:`Kit/TextField`,component:a},d={render:()=>(0,l.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`,width:`320px`},children:[(0,l.jsx)(a,{label:`Default`,value:`Drawing 1`,onChange:()=>{}}),(0,l.jsx)(s,{selector:`input`,attr:`data-hovered`,children:(0,l.jsx)(a,{label:`Hover`,value:`Drawing 1`,onChange:()=>{}})}),(0,l.jsx)(s,{selector:`input`,attr:`data-focus-visible`,children:(0,l.jsx)(a,{label:`Focus`,value:`Drawing 1`,onChange:()=>{}})}),(0,l.jsx)(a,{label:`Invalid`,value:`Drawing 1`,onChange:()=>{},isInvalid:!0,errorMessage:`Name is required`}),(0,l.jsx)(a,{label:`Disabled`,value:`Drawing 1`,onChange:()=>{},isDisabled:!0})]})},f={render:()=>(0,l.jsx)(`div`,{style:{width:`320px`},children:(0,l.jsx)(a,{label:`Layer name`,value:`Drawing 1`,onChange:()=>{},description:`Shown in the layer list`})})},p={render:function(){let[e,t]=(0,c.useState)(`Drawing 1`);return(0,l.jsx)(`div`,{style:{width:`320px`},children:(0,l.jsx)(a,{label:`Layer name`,value:e,onChange:t})})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-2)',
    width: '320px'
  }}>
      <TextField label="Default" value="Drawing 1" onChange={() => {}} />
      <Forced selector="input" attr="data-hovered">
        <TextField label="Hover" value="Drawing 1" onChange={() => {}} />
      </Forced>
      <Forced selector="input" attr="data-focus-visible">
        <TextField label="Focus" value="Drawing 1" onChange={() => {}} />
      </Forced>
      <TextField label="Invalid" value="Drawing 1" onChange={() => {}} isInvalid errorMessage="Name is required" />
      <TextField label="Disabled" value="Drawing 1" onChange={() => {}} isDisabled />
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Default, hover, focus, invalid, disabled — the five states, row-labelled.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '320px'
  }}>
      <TextField label="Layer name" value="Drawing 1" onChange={() => {}} description="Shown in the layer list" />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function InteractiveTextField() {
    const [value, setValue] = useState('Drawing 1');
    return <div style={{
      width: '320px'
    }}>
        <TextField label="Layer name" value={value} onChange={setValue} />
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:`A live, interactive field — not just forced states — so a reviewer can type into it.`,...p.parameters?.docs?.description}}},m=[`AllStates`,`WithDescription`,`Interactive`]}))();export{d as AllStates,p as Interactive,f as WithDescription,m as __namedExportsOrder,u as default};