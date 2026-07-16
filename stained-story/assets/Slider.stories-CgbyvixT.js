import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-Dkp9c1-D.js";import{i,n as a,r as o,t as s}from"./Slider-t4XApYT-.js";import{n as c,t as l}from"./story-helpers-BP49RzYm.js";var u,d,f,p,m,h;e((()=>{u=t(n(),1),i(),a(),c(),d=r(),f={title:`Kit/Slider`,component:s},p={render:()=>(0,d.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-4)`,width:`320px`},children:[(0,d.jsx)(s,{label:`Default`,value:.4,onChange:()=>{},minValue:0,maxValue:1,step:.01}),(0,d.jsx)(l,{selector:`.${o.track}`,attr:`data-hovered`,children:(0,d.jsx)(s,{label:`Hover`,value:.4,onChange:()=>{},minValue:0,maxValue:1,step:.01})}),(0,d.jsx)(l,{selector:`.${o.thumb}`,attr:`data-focus-visible`,children:(0,d.jsx)(s,{label:`Focus`,value:.4,onChange:()=>{},minValue:0,maxValue:1,step:.01})}),(0,d.jsx)(l,{selector:`.${o.thumb}`,attr:`data-dragging`,children:(0,d.jsx)(s,{label:`Active`,value:.4,onChange:()=>{},minValue:0,maxValue:1,step:.01})}),(0,d.jsx)(s,{label:`Disabled`,value:.4,onChange:()=>{},minValue:0,maxValue:1,step:.01,isDisabled:!0})]})},m={render:function(){let[e,t]=(0,u.useState)(.35);return(0,d.jsx)(`div`,{style:{width:`320px`},children:(0,d.jsx)(s,{label:`Jitter`,value:e,onChange:t,minValue:0,maxValue:1,step:.01})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 'var(--space-4)',
    width: '320px'
  }}>
      <Slider label="Default" value={0.4} onChange={() => {}} minValue={0} maxValue={1} step={0.01} />
      <Forced selector={\`.\${styles.track}\`} attr="data-hovered">
        <Slider label="Hover" value={0.4} onChange={() => {}} minValue={0} maxValue={1} step={0.01} />
      </Forced>
      <Forced selector={\`.\${styles.thumb}\`} attr="data-focus-visible">
        <Slider label="Focus" value={0.4} onChange={() => {}} minValue={0} maxValue={1} step={0.01} />
      </Forced>
      <Forced selector={\`.\${styles.thumb}\`} attr="data-dragging">
        <Slider label="Active" value={0.4} onChange={() => {}} minValue={0} maxValue={1} step={0.01} />
      </Forced>
      <Slider label="Disabled" value={0.4} onChange={() => {}} minValue={0} maxValue={1} step={0.01} isDisabled />
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Default, hover (on the track), focus (on the thumb), active/dragging (on the thumb), disabled.\n Unlike `Button`/`TextField`, a slider's states don't all land on one node: hover lands on the\n track, focus/drag land on the thumb (see `Slider.module.css`'s\n `[data-hovered]`/`[data-focus-visible]`/`[data-dragging]` selectors) — so each `Forced` below\n passes the CSS Module's own hashed class as `selector`, reaching exactly the element the\n stylesheet targets rather than guessing at DOM structure.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function InteractiveSlider() {
    const [jitter, setJitter] = useState(0.35);
    return <div style={{
      width: '320px'
    }}>
        <Slider label="Jitter" value={jitter} onChange={setJitter} minValue={0} maxValue={1} step={0.01} />
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`A live, interactive slider — not just forced states — so a reviewer can drag it.`,...m.parameters?.docs?.description}}},h=[`AllStates`,`Interactive`]}))();export{p as AllStates,m as Interactive,h as __namedExportsOrder,f as default};