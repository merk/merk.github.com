import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-BRbLK8OP.js";import{n as i,t as a}from"./SegmentedControl-BR_S66Ly.js";import{n as o,t as s}from"./story-helpers-nk8UGa83.js";var c,l,u,d,f,p,m,h,g,_,v;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`Kit/SegmentedControl`,component:a},d=[{value:`foil`,label:`Foil`},{value:`came`,label:`Came`}],f=[{value:`a4`,label:`A4`},{value:`letter`,label:`Letter`},{value:`legal`,label:`Legal`}],p={color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},m={render:()=>(0,l.jsx)(`table`,{style:{borderSpacing:`var(--space-3)`},children:(0,l.jsxs)(`tbody`,{children:[(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:p,children:`resting`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(a,{label:`Construction`,items:d,value:`foil`,onChange:()=>{}})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:p,children:`hover, unselected`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(s,{attr:`data-hovered`,index:1,children:(0,l.jsx)(a,{label:`Construction`,items:d,value:`foil`,onChange:()=>{}})})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:p,children:`focus`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(s,{attr:`data-focus-visible`,index:0,children:(0,l.jsx)(a,{label:`Construction`,items:d,value:`foil`,onChange:()=>{}})})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:p,children:`selected`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(a,{label:`Construction`,items:d,value:`came`,onChange:()=>{}})})]}),(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:p,children:`disabled`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(a,{label:`Construction`,items:d,value:`foil`,onChange:()=>{},isDisabled:!0})})]})]})})},h={render:function(){let[e,t]=(0,c.useState)(`foil`);return(0,l.jsx)(a,{label:`Construction`,items:d,value:e,onChange:t})}},g={render:function(){let[e,t]=(0,c.useState)(`a4`);return(0,l.jsx)(a,{label:`Paper size`,items:f,value:e,onChange:t})}},_={render:()=>(0,l.jsx)(a,{label:`Construction`,items:d,value:`foil`,onChange:()=>{},isDisabled:!0})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-3)'
  }}>
      <tbody>
        <tr>
          <td style={labelCell}>resting</td>
          <td>
            <SegmentedControl label="Construction" items={CONSTRUCTION} value="foil" onChange={() => {}} />
          </td>
        </tr>
        <tr>
          <td style={labelCell}>hover, unselected</td>
          <td>
            <Forced attr="data-hovered" index={1}>
              <SegmentedControl label="Construction" items={CONSTRUCTION} value="foil" onChange={() => {}} />
            </Forced>
          </td>
        </tr>
        <tr>
          <td style={labelCell}>focus</td>
          <td>
            <Forced attr="data-focus-visible" index={0}>
              <SegmentedControl label="Construction" items={CONSTRUCTION} value="foil" onChange={() => {}} />
            </Forced>
          </td>
        </tr>
        <tr>
          <td style={labelCell}>selected</td>
          <td>
            <SegmentedControl label="Construction" items={CONSTRUCTION} value="came" onChange={() => {}} />
          </td>
        </tr>
        <tr>
          <td style={labelCell}>disabled</td>
          <td>
            <SegmentedControl label="Construction" items={CONSTRUCTION} value="foil" onChange={() => {}} isDisabled />
          </td>
        </tr>
      </tbody>
    </table>
}`,...m.parameters?.docs?.source},description:{story:"Resting / hover (unselected) / focus / selected / disabled — the five states every kit primitive\n ships. Selection here is a FILL over the `--inset` track, not the ring (which is focus's alone).",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function TwoOptionsControl() {
    const [value, setValue] = useState<string>('foil');
    return <SegmentedControl label="Construction" items={CONSTRUCTION} value={value} onChange={setValue} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`The 2-option case — construction (foil/came), cut-list grouping (by-glass/by-piece).`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function ThreeOptionsControl() {
    const [value, setValue] = useState<string>('a4');
    return <SegmentedControl label="Paper size" items={PAPER_SIZE} value={value} onChange={setValue} />;
  }
}`,...g.parameters?.docs?.source},description:{story:"The 3-option case — export paper size. Past ~4 options, use `Select` instead.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <SegmentedControl label="Construction" items={CONSTRUCTION} value="foil" onChange={() => {}} isDisabled />
}`,..._.parameters?.docs?.source},description:{story:`What the construction stub renders before a document exists to give it a value.`,..._.parameters?.docs?.description}}},v=[`AllStates`,`TwoOptions`,`ThreeOptions`,`Disabled`]}))();export{m as AllStates,_ as Disabled,g as ThreeOptions,h as TwoOptions,v as __namedExportsOrder,u as default};