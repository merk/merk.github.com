import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-Bh-P_Ych.js";import{n as i,t as a}from"./Checkbox-D_Aaw41Q.js";import{n as o,t as s}from"./story-helpers-DTMT3kWr.js";var c,l,u,d,f,p;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`Kit/Checkbox`,component:a},d={render:()=>(0,l.jsx)(`table`,{style:{borderSpacing:`var(--space-3)`},children:(0,l.jsx)(`tbody`,{children:[!1,!0].map(e=>(0,l.jsxs)(`tr`,{children:[(0,l.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:e?`checked`:`unchecked`}),(0,l.jsx)(`td`,{children:(0,l.jsx)(a,{isSelected:e,onChange:()=>{},children:`Include cut list`})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(s,{selector:`label`,attr:`data-hovered`,children:(0,l.jsx)(a,{isSelected:e,onChange:()=>{},children:`Include cut list`})})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(s,{selector:`label`,attr:`data-focus-visible`,children:(0,l.jsx)(a,{isSelected:e,onChange:()=>{},children:`Include cut list`})})}),(0,l.jsx)(`td`,{children:(0,l.jsx)(a,{isSelected:e,onChange:()=>{},isDisabled:!0,children:`Include cut list`})})]},String(e)))})})},f={render:function(){let[e,t]=(0,c.useState)(!1);return(0,l.jsx)(a,{isSelected:e,onChange:t,children:`Include cut list`})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-3)'
  }}>
      <tbody>
        {([false, true] as const).map(isSelected => <tr key={String(isSelected)}>
            <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
              {isSelected ? 'checked' : 'unchecked'}
            </td>
            <td>
              <Checkbox isSelected={isSelected} onChange={() => {}}>
                Include cut list
              </Checkbox>
            </td>
            <td>
              <Forced selector="label" attr="data-hovered">
                <Checkbox isSelected={isSelected} onChange={() => {}}>
                  Include cut list
                </Checkbox>
              </Forced>
            </td>
            <td>
              <Forced selector="label" attr="data-focus-visible">
                <Checkbox isSelected={isSelected} onChange={() => {}}>
                  Include cut list
                </Checkbox>
              </Forced>
            </td>
            <td>
              <Checkbox isSelected={isSelected} onChange={() => {}} isDisabled>
                Include cut list
              </Checkbox>
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...d.parameters?.docs?.source},description:{story:`Unchecked/checked × every state, square.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function InteractiveCheckbox() {
    const [isSelected, setIsSelected] = useState(false);
    return <Checkbox isSelected={isSelected} onChange={setIsSelected}>
        Include cut list
      </Checkbox>;
  }
}`,...f.parameters?.docs?.source},description:{story:`A live, interactive checkbox — not just forced states — so a reviewer can click it.`,...f.parameters?.docs?.description}}},p=[`AllStates`,`Interactive`]}))();export{d as AllStates,f as Interactive,p as __namedExportsOrder,u as default};