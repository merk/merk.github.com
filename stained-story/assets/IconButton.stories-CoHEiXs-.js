import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-CFN0p_hk.js";import{o as n,ot as r,t as i,w as a}from"./lucide-react-BAfSfUc9.js";import{n as o,t as s}from"./IconButton-CAKJ2O4u.js";import{n as c,t as l}from"./ToggleButton-BMqrP8XR.js";import{n as u,t as d}from"./story-helpers-Cisxr9RS.js";var f,p,m,h,g,_,v;e((()=>{i(),o(),u(),c(),f=t(),p={title:`Kit/IconButton`,component:s},m=[`active`,`enabled`,`quiet`],h={render:()=>(0,f.jsx)(`table`,{style:{borderSpacing:`var(--space-3)`},children:(0,f.jsx)(`tbody`,{children:m.map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:e}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{label:`Undo`,icon:n,weight:e})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(d,{attr:`data-hovered`,children:(0,f.jsx)(s,{label:`Undo`,icon:n,weight:e})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(d,{attr:`data-pressed`,children:(0,f.jsx)(s,{label:`Undo`,icon:n,weight:e})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(d,{attr:`data-focus-visible`,children:(0,f.jsx)(s,{label:`Undo`,icon:n,weight:e})})}),(0,f.jsx)(`td`,{children:(0,f.jsx)(s,{label:`Undo`,icon:n,weight:e,isDisabled:!0})})]},e))})})},g={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-3)`,alignItems:`center`},children:[(0,f.jsx)(s,{label:`Save`,icon:a,size:`sm`}),(0,f.jsx)(s,{label:`Save`,icon:a,size:`md`})]})},_={render:()=>(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-3)`},children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`IconButton — actions (save, undo)`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,f.jsx)(s,{label:`Save`,icon:a,weight:`enabled`}),(0,f.jsx)(s,{label:`Undo`,icon:n,weight:`enabled`}),(0,f.jsx)(s,{label:`Undo`,icon:n,weight:`quiet`})]})]}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`div`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:`ToggleButton — state (diagnostics on/off)`}),(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,f.jsx)(l,{isSelected:!1,label:`Diagnostics`,icon:r}),(0,f.jsx)(l,{isSelected:!0,label:`Diagnostics`,icon:r})]})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <table style={{
    borderSpacing: 'var(--space-3)'
  }}>
      <tbody>
        {WEIGHTS.map(weight => <tr key={weight}>
            <td style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
              {weight}
            </td>
            <td>
              <IconButton label="Undo" icon={Undo2} weight={weight} />
            </td>
            <td>
              <Forced attr="data-hovered">
                <IconButton label="Undo" icon={Undo2} weight={weight} />
              </Forced>
            </td>
            <td>
              <Forced attr="data-pressed">
                <IconButton label="Undo" icon={Undo2} weight={weight} />
              </Forced>
            </td>
            <td>
              <Forced attr="data-focus-visible">
                <IconButton label="Undo" icon={Undo2} weight={weight} />
              </Forced>
            </td>
            <td>
              <IconButton label="Undo" icon={Undo2} weight={weight} isDisabled />
            </td>
          </tr>)}
      </tbody>
    </table>
}`,...h.parameters?.docs?.source},description:{story:`Every weight × every state. Hover/pressed/focused are forced, so the treatments can be compared
 at a glance — this is exactly how the flattened-toolbar bug (PR 0) gets caught on sight.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)',
    alignItems: 'center'
  }}>
      <IconButton label="Save" icon={Save} size="sm" />
      <IconButton label="Save" icon={Save} size="md" />
    </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-3)'
  }}>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          IconButton — actions (save, undo)
        </div>
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          <IconButton label="Save" icon={Save} weight="enabled" />
          <IconButton label="Undo" icon={Undo2} weight="enabled" />
          <IconButton label="Undo" icon={Undo2} weight="quiet" />
        </div>
      </div>
      <div>
        <div style={{
        color: 'var(--ink2)',
        font: '400 var(--text-micro) var(--font-mono)'
      }}>
          ToggleButton — state (diagnostics on/off)
        </div>
        <div style={{
        display: 'flex',
        gap: 'var(--space-2)'
      }}>
          <ToggleButton isSelected={false} label="Diagnostics" icon={Flame} />
          <ToggleButton isSelected label="Diagnostics" icon={Flame} />
        </div>
      </div>
    </div>
}`,..._.parameters?.docs?.source},description:{story:`The point of building these as two components, shown side by side: an IconButton (a one-shot
ACTION) and a ToggleButton (a STATE) must never read as the same class of control. DESIGN.md §8.2
strikes the app's old "one flat row of 16" identical buttons for exactly this confusion.`,..._.parameters?.docs?.description}}},v=[`AllStates`,`Sizes`,`ActionVsState`]}))();export{_ as ActionVsState,h as AllStates,g as Sizes,v as __namedExportsOrder,p as default};