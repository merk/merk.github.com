import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./iframe-b5CnmBNv.js";import{n,t as r}from"./Table-ByBHH5VW.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={title:`Kit/Table`,component:r},o=[{id:`number`,header:`#`,mono:!0,width:`4ch`,cell:e=>e.number},{id:`glass`,header:`Glass`,cell:e=>e.glass},{id:`area`,header:`Area (mm²)`,align:`end`,mono:!0,cell:e=>e.areaMm2.toLocaleString()}],s=[{number:1,glass:`Amber`,areaMm2:12450},{number:2,glass:`Cobalt`,areaMm2:8300},{number:3,glass:`Clear`,areaMm2:24010},{number:4,glass:`Amber`,areaMm2:990}],c={render:()=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(r,{label:`Pieces`,columns:o,rows:s,rowKey:e=>e.number})})},l={render:()=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(r,{label:`Pieces`,columns:o,rows:[],rowKey:e=>e.number,emptyState:(0,i.jsx)(`span`,{style:{color:`var(--ink2)`},children:`No pieces to cut yet.`})})})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Table label="Pieces" columns={COLUMNS} rows={PIECES} rowKey={p => p.number} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Table label="Pieces" columns={COLUMNS} rows={[]} rowKey={p => p.number} emptyState={<span style={{
      color: 'var(--ink2)'
    }}>No pieces to cut yet.</span>} />
    </div>
}`,...l.parameters?.docs?.source}}},u=[`ByPiece`,`Empty`]}))();export{c as ByPiece,l as Empty,u as __namedExportsOrder,a as default};