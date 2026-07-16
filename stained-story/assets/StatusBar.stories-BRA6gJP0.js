import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-Dkp9c1-D.js";import{n,r,t as i}from"./StatusBar-CVqfT5vN.js";var a,o,s,c,l;e((()=>{r(),a=t(),o={title:`Kit/StatusBar`,component:i},s={render:()=>(0,a.jsx)(`div`,{style:{width:`max-content`},children:(0,a.jsxs)(i,{children:[(0,a.jsx)(n,{label:`Zoom`,value:`140%`}),(0,a.jsx)(n,{label:`Cursor`,value:`128.4, 46.0 mm`}),(0,a.jsx)(n,{label:`Pieces`,value:`24`}),(0,a.jsx)(n,{label:`Selection`,value:`3 pieces`}),(0,a.jsx)(n,{label:`Errors`,value:`2`,tone:`error`}),(0,a.jsx)(n,{label:`Warnings`,value:`5`,tone:`warn`}),(0,a.jsx)(n,{label:`Notes`,value:`1`,tone:`info`}),(0,a.jsx)(n,{label:`Sheet`,value:`480 × 620 mm`}),(0,a.jsx)(n,{label:`Construction`,value:`Foil`})]})})},c={render:()=>(0,a.jsx)(`div`,{style:{width:`max-content`},children:(0,a.jsxs)(i,{children:[(0,a.jsx)(n,{label:`Zoom`,value:`140%`}),(0,a.jsx)(n,{label:`Selection`,value:`7 pieces, 3 layers, mixed glass (Cobalt streaky, Amber wispy, Clear seedy)`}),(0,a.jsx)(n,{label:`Errors`,value:`2`,tone:`error`})]})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 'max-content'
  }}>
      <StatusBar>
        <StatusItem label="Zoom" value="140%" />
        <StatusItem label="Cursor" value="128.4, 46.0 mm" />
        <StatusItem label="Pieces" value="24" />
        <StatusItem label="Selection" value="3 pieces" />
        <StatusItem label="Errors" value="2" tone="error" />
        <StatusItem label="Warnings" value="5" tone="warn" />
        <StatusItem label="Notes" value="1" tone="info" />
        <StatusItem label="Sheet" value="480 × 620 mm" />
        <StatusItem label="Construction" value="Foil" />
      </StatusBar>
    </div>
}`,...s.parameters?.docs?.source},description:{story:`The real bar (DESIGN.md §8.3): zoom · cursor mm · piece count · selection · diagnostic counts ·
sheet size · construction. Every value is mono; the three diagnostic counts each carry the
severity dot in their own tone, so all three read distinctly against the bar in both themes.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 'max-content'
  }}>
      <StatusBar>
        <StatusItem label="Zoom" value="140%" />
        <StatusItem label="Selection" value="7 pieces, 3 layers, mixed glass (Cobalt streaky, Amber wispy, Clear seedy)" />
        <StatusItem label="Errors" value="2" tone="error" />
      </StatusBar>
    </div>
}`,...c.parameters?.docs?.source},description:{story:"The overflow case HANDOFF §6 requires: a long selection description ellipsizes rather than\nwrapping onto a second line — on its OWN terms (a fixed character bound on `.value`, see\n`StatusBar.module.css`), not by starving its neighbours of width. `Errors` after it still renders\nat full size, unaffected by how long `Selection`'s text is.",...c.parameters?.docs?.description}}},l=[`Default`,`LongSelectionEllipsizes`]}))();export{s as Default,c as LongSelectionEllipsizes,l as __namedExportsOrder,o as default};