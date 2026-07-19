import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CFN0p_hk.js";import{n,t as r}from"./Button-Ck0-7HzM.js";import{P as i,t as a}from"./lucide-react-BAfSfUc9.js";import{n as o,t as s}from"./story-helpers-Cisxr9RS.js";var c,l,u,d,f,p;e((()=>{a(),n(),o(),c=t(),l={title:`Kit/Button`,component:r},u=[`primary`,`default`,`ghost`,`danger`],d={render:()=>(0,c.jsx)(`table`,{style:{borderSpacing:`var(--space-3)`},children:(0,c.jsx)(`tbody`,{children:u.map(e=>(0,c.jsxs)(`tr`,{children:[(0,c.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:e}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r,{variant:e,children:`Default`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(s,{attr:`data-hovered`,children:(0,c.jsx)(r,{variant:e,children:`Hover`})})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(s,{attr:`data-pressed`,children:(0,c.jsx)(r,{variant:e,children:`Pressed`})})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(s,{attr:`data-focus-visible`,children:(0,c.jsx)(r,{variant:e,children:`Focused`})})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(s,{attr:`data-pressed`,children:(0,c.jsx)(s,{attr:`data-focus-visible`,children:(0,c.jsx)(r,{variant:e,children:`Focused + pressed`})})})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r,{variant:e,isDisabled:!0,children:`Disabled`})}),(0,c.jsx)(`td`,{children:(0,c.jsx)(r,{variant:e,iconStart:i,children:`With icon`})})]},e))})})},f={render:()=>(0,c.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-3)`,alignItems:`center`},children:[(0,c.jsx)(r,{size:`sm`,children:`Small`}),(0,c.jsx)(r,{size:`md`,children:`Medium`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-3)'
  }}>
      <tbody>
        {VARIANTS.map(variant => <tr key={variant}>
            <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
              {variant}
            </td>
            <td>
              <Button variant={variant}>Default</Button>
            </td>
            <td>
              <Forced attr="data-hovered">
                <Button variant={variant}>Hover</Button>
              </Forced>
            </td>
            <td>
              <Forced attr="data-pressed">
                <Button variant={variant}>Pressed</Button>
              </Forced>
            </td>
            <td>
              <Forced attr="data-focus-visible">
                <Button variant={variant}>Focused</Button>
              </Forced>
            </td>
            <td>
              <Forced attr="data-pressed">
                <Forced attr="data-focus-visible">
                  <Button variant={variant}>Focused + pressed</Button>
                </Forced>
              </Forced>
            </td>
            <td>
              <Button variant={variant} isDisabled>
                Disabled
              </Button>
            </td>
            <td>
              <Button variant={variant} iconStart={Plus}>
                With icon
              </Button>
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...d.parameters?.docs?.source},description:{story:"Every variant × every state. Hover/pressed/focused are forced with `Forced` (see above), so the\n treatments can be compared at a glance rather than chased with a mouse.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'center'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`AllStates`,`Sizes`]}))();export{d as AllStates,f as Sizes,p as __namedExportsOrder,l as default};