import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-BJ_HWdlk.js";import{n as i,t as a}from"./Button-CGSYpU33.js";import{n as o,t as s}from"./Dialog-DAX58M64.js";var c,l,u,d,f;e((()=>{c=t(n(),1),i(),o(),l=r(),u={title:`Kit/Dialog`,component:s},d={render:()=>{let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{onPress:()=>t(!0),children:`Open dialog`}),(0,l.jsx)(s,{title:`Export`,isOpen:e,onOpenChange:t,width:`28rem`,footer:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{variant:`ghost`,onPress:()=>t(!1),children:`Cancel`}),(0,l.jsx)(a,{onPress:()=>t(!1),children:`Confirm`})]}),children:(0,l.jsx)(`p`,{style:{color:`var(--ink)`},children:`Dialog body content goes here.`})})]})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onPress={() => setOpen(true)}>Open dialog</Button>
        <Dialog title="Export" isOpen={open} onOpenChange={setOpen} width="28rem" footer={<>
              <Button variant="ghost" onPress={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onPress={() => setOpen(false)}>Confirm</Button>
            </>}>
          <p style={{
          color: 'var(--ink)'
        }}>Dialog body content goes here.</p>
        </Dialog>
      </>;
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};