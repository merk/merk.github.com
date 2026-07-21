import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-BJ_HWdlk.js";import{n as i,t as a}from"./PatternPicker-DxjQHAn9.js";var o,s,c,l,u;e((()=>{o=t(n(),1),i(),s=r(),c={title:`ui/PatternPicker`,component:a},l={render:()=>{let[e,t]=(0,o.useState)(`voronoi`);return(0,s.jsx)(`div`,{style:{width:240},children:(0,s.jsx)(a,{value:e,onChange:t})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<TessellationKind>('voronoi');
    return <div style={{
      width: 240
    }}>
        <PatternPicker value={value} onChange={setValue} />
      </div>;
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,c as default};