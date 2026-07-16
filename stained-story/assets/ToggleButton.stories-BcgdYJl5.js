import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-B_zWQXCQ.js";import{et as i,t as a}from"./lucide-react-K-TMmYWw.js";import{n as o,t as s}from"./ToggleButton-NfZJo_cm.js";import{n as c,t as l}from"./story-helpers-Bl5dQ3Zp.js";var u,d,f,p,m,h,g;e((()=>{a(),u=t(n(),1),c(),o(),d=r(),f={title:`Kit/ToggleButton`,component:s},p={render:()=>(0,d.jsx)(`table`,{style:{borderSpacing:`var(--space-3)`},children:(0,d.jsx)(`tbody`,{children:[!1,!0].map(e=>(0,d.jsxs)(`tr`,{children:[(0,d.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:e?`on`:`off`}),(0,d.jsx)(`td`,{children:(0,d.jsx)(s,{isSelected:e,label:`Diagnostics`,icon:i,children:`Diagnostics`})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(l,{attr:`data-hovered`,children:(0,d.jsx)(s,{isSelected:e,label:`Diagnostics`,icon:i,children:`Diagnostics`})})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(l,{attr:`data-focus-visible`,children:(0,d.jsx)(s,{isSelected:e,label:`Diagnostics`,icon:i,children:`Diagnostics`})})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(l,{attr:`data-focus-visible`,children:(0,d.jsx)(s,{isSelected:!0,label:`Diagnostics`,icon:i,children:`Diagnostics`})})}),(0,d.jsx)(`td`,{children:(0,d.jsx)(s,{isSelected:e,label:`Diagnostics`,icon:i,isDisabled:!0,children:`Diagnostics`})})]},String(e)))})})},m={render:()=>(0,d.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-3)`,alignItems:`center`},children:[(0,d.jsx)(s,{isSelected:!0,label:`Diagnostics`,icon:i,children:`Diagnostics`}),(0,d.jsx)(s,{isSelected:!1,label:`Diagnostics`,icon:i,children:`Diagnostics`}),(0,d.jsx)(s,{isSelected:!0,label:`Diagnostics`,icon:i,pill:!0,children:`Diagnostics`}),(0,d.jsx)(s,{isSelected:!0,label:`Diagnostics`,icon:i}),(0,d.jsx)(s,{isSelected:!1,label:`Diagnostics`,icon:i})]})},h={render:function(){let[e,t]=(0,u.useState)(!1);return(0,d.jsx)(s,{isSelected:e,onChange:t,label:`Diagnostics`,icon:i,children:`Diagnostics`})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-3)'
  }}>
      <tbody>
        {([false, true] as const).map(isSelected => <tr key={String(isSelected)}>
            <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
              {isSelected ? 'on' : 'off'}
            </td>
            <td>
              <ToggleButton isSelected={isSelected} label="Diagnostics" icon={Flame}>
                Diagnostics
              </ToggleButton>
            </td>
            <td>
              <Forced attr="data-hovered">
                <ToggleButton isSelected={isSelected} label="Diagnostics" icon={Flame}>
                  Diagnostics
                </ToggleButton>
              </Forced>
            </td>
            <td>
              <Forced attr="data-focus-visible">
                <ToggleButton isSelected={isSelected} label="Diagnostics" icon={Flame}>
                  Diagnostics
                </ToggleButton>
              </Forced>
            </td>
            {/* Focus is a ring, selection is a fill — they must co-occur and both stay visible. */}
            <td>
              <Forced attr="data-focus-visible">
                <ToggleButton isSelected label="Diagnostics" icon={Flame}>
                  Diagnostics
                </ToggleButton>
              </Forced>
            </td>
            <td>
              <ToggleButton isSelected={isSelected} label="Diagnostics" icon={Flame} isDisabled>
                Diagnostics
              </ToggleButton>
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...p.parameters?.docs?.source},description:{story:`On/off × every state, square.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'center'
  }}>
      <ToggleButton isSelected label="Diagnostics" icon={Flame}>
        Diagnostics
      </ToggleButton>
      <ToggleButton isSelected={false} label="Diagnostics" icon={Flame}>
        Diagnostics
      </ToggleButton>
      <ToggleButton isSelected label="Diagnostics" icon={Flame} pill>
        Diagnostics
      </ToggleButton>
      <ToggleButton isSelected label="Diagnostics" icon={Flame} />
      <ToggleButton isSelected={false} label="Diagnostics" icon={Flame} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Square vs pill, and icon-only vs icon+label.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function InteractiveToggle() {
    const [isSelected, setIsSelected] = useState(false);
    return <ToggleButton isSelected={isSelected} onChange={setIsSelected} label="Diagnostics" icon={Flame}>
        Diagnostics
      </ToggleButton>;
  }
}`,...h.parameters?.docs?.source},description:{story:`A live, interactive toggle — not just forced states — so a reviewer can click it.`,...h.parameters?.docs?.description}}},g=[`AllStates`,`ShapesAndLabels`,`Interactive`]}))();export{p as AllStates,h as Interactive,m as ShapesAndLabels,g as __namedExportsOrder,f as default};