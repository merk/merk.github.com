import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-D9OoTY_7.js";import{n as i,t as a}from"./Button-DK2hOtsY.js";import{n as o,r as s,t as c}from"./Toast-B6HjIgU6.js";import{n as l,t as u}from"./story-helpers-Cj7U4GsR.js";var d,f,p,m,h,g,_,v;e((()=>{d=t(n(),1),i(),l(),s(),f=r(),p={title:`Kit/Toast`,component:c},m={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-2)`,width:`320px`},children:[(0,f.jsx)(c,{item:{id:1,level:`info`,message:`Autosaved`},onDismiss:()=>{}}),(0,f.jsx)(c,{item:{id:2,level:`warning`,message:`Reference not calibrated`},onDismiss:()=>{}}),(0,f.jsx)(c,{item:{id:3,level:`error`,message:`Save failed`,detail:`disk full`},onDismiss:()=>{}})]})},h={render:()=>(0,f.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--space-2)`,width:`320px`},children:[(0,f.jsx)(c,{item:{id:1,level:`error`,message:`Save failed`},onDismiss:()=>{}}),(0,f.jsx)(c,{item:{id:2,level:`error`,message:`Save failed`,detail:`disk full`},onDismiss:()=>{}})]})},g={render:()=>(0,f.jsx)(`div`,{style:{display:`flex`,gap:`var(--space-3)`},children:[[`resting`,void 0],[`hovered`,`data-hovered`],[`pressed`,`data-pressed`],[`focused`,`data-focus-visible`]].map(([e,t])=>{let n=(0,f.jsx)(c,{item:{id:1,level:`info`,message:`Autosaved`},onDismiss:()=>{}});return(0,f.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-1)`,width:`220px`},children:[(0,f.jsx)(`span`,{style:{color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},children:e}),t===void 0?n:(0,f.jsx)(u,{attr:t,selector:`button`,children:n})]},e)})})},_={render:function(){let[e,t]=(0,d.useState)([{id:1,level:`info`,message:`Autosaved`}]),n=2,r=e=>{let r=n++,i=e===`error`?`Save failed`:e===`warning`?`Reference not calibrated`:`Autosaved`;t(t=>[...t,{id:r,level:e,message:i}])};return(0,f.jsxs)(`div`,{style:{display:`flex`,gap:`var(--space-2)`},children:[(0,f.jsx)(a,{size:`sm`,onPress:()=>r(`info`),children:`Push info`}),(0,f.jsx)(a,{size:`sm`,onPress:()=>r(`warning`),children:`Push warning`}),(0,f.jsx)(a,{size:`sm`,onPress:()=>r(`error`),children:`Push error`}),(0,f.jsx)(o,{items:e,onDismiss:e=>t(t=>t.filter(t=>t.id!==e))})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    width: '320px'
  }}>
      <Toast item={{
      id: 1,
      level: 'info',
      message: 'Autosaved'
    }} onDismiss={() => {}} />
      <Toast item={{
      id: 2,
      level: 'warning',
      message: 'Reference not calibrated'
    }} onDismiss={() => {}} />
      <Toast item={{
      id: 3,
      level: 'error',
      message: 'Save failed',
      detail: 'disk full'
    }} onDismiss={() => {}} />
    </div>
}`,...m.parameters?.docs?.source},description:{story:"All three levels, side by side — in-flow here (not portalled) so Storybook's own layout can show\n them stacked; `Portaled` below shows the real `ToastRegion` placement.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    width: '320px'
  }}>
      <Toast item={{
      id: 1,
      level: 'error',
      message: 'Save failed'
    }} onDismiss={() => {}} />
      <Toast item={{
      id: 2,
      level: 'error',
      message: 'Save failed',
      detail: 'disk full'
    }} onDismiss={() => {}} />
    </div>
}`,...h.parameters?.docs?.source},description:{story:`With and without the optional detail line.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 'var(--space-3)'
  }}>
      {([['resting', undefined], ['hovered', 'data-hovered'], ['pressed', 'data-pressed'], ['focused', 'data-focus-visible']] as const).map(([label, attr]) => {
      const toast = <Toast item={{
        id: 1,
        level: 'info',
        message: 'Autosaved'
      }} onDismiss={() => {}} />;
      return <div key={label} style={{
        display: 'grid',
        gap: 'var(--space-1)',
        width: '220px'
      }}>
            <span style={{
          color: 'var(--ink2)',
          font: '400 var(--text-micro) var(--font-mono)'
        }}>
              {label}
            </span>
            {attr === undefined ? toast : <Forced attr={attr} selector="button">
                {toast}
              </Forced>}
          </div>;
    })}
    </div>
}`,...g.parameters?.docs?.source},description:{story:'The dismiss button\'s own states, forced — the "collapsed state" bug class this project\'s history\nkeeps producing. Built on the kit\'s `IconButton` (`weight="quiet"`, `size="sm"`), so this re-proves\nthat reuse gives real feedback here too, not just in `IconButton`\'s own stories.',...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [items, setItems] = useState<readonly ToastItem[]>([{
      id: 1,
      level: 'info',
      message: 'Autosaved'
    }]);
    let nextId = 2;
    const push = (level: ToastItem['level']) => {
      const id = nextId++;
      const message = level === 'error' ? 'Save failed' : level === 'warning' ? 'Reference not calibrated' : 'Autosaved';
      setItems(prev => [...prev, {
        id,
        level,
        message
      }]);
    };
    const dismiss = (id: number) => setItems(prev => prev.filter(item => item.id !== id));
    return <div style={{
      display: 'flex',
      gap: 'var(--space-2)'
    }}>
        <Button size="sm" onPress={() => push('info')}>
          Push info
        </Button>
        <Button size="sm" onPress={() => push('warning')}>
          Push warning
        </Button>
        <Button size="sm" onPress={() => push('error')}>
          Push error
        </Button>
        <ToastRegion items={items} onDismiss={dismiss} />
      </div>;
  }
}`,..._.parameters?.docs?.source},description:{story:"A live queue, actually portalled through `ToastRegion` to `document.body` — the real shape PR 4\nwires `Notifications` onto. \"Push a toast\" adds one with a fresh id; each dismisses itself (click,\nor auto-dismiss for anything but the error). This is also where the false-pass trap\n(`Toast.tsx`'s own doc comment) gets checked by hand: dump the portalled node's computed\n`background-color` in each theme before trusting an axe pass against it.",..._.parameters?.docs?.description}}},v=[`AllLevels`,`WithDetail`,`DismissStates`,`Portaled`]}))();export{m as AllLevels,g as DismissStates,_ as Portaled,h as WithDetail,v as __namedExportsOrder,p as default};