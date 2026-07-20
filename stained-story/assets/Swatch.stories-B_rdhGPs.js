import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{n,t as r}from"./iframe-H34tmE7Y.js";import{n as i,r as a}from"./palette-bDqSCaSl.js";import{r as o,t as s}from"./tokens-BuBeWaXb.js";import{n as c,r as l,t as u}from"./Swatch-Cypnmnoq.js";import{n as d,t as f}from"./story-helpers-C1u7JRKt.js";function p(e){let t=v[e];if(t===void 0)throw Error(`GLASS_PALETTE has no colour at index ${e}`);return t}function m({attrs:e,children:t}){return e.reduceRight((e,t)=>(0,g.jsx)(f,{attr:t,children:e},t),t)}var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{h=t(n(),1),a(),o(),l(),d(),g=r(),_={title:`Kit/Swatch`,component:u},v=i.map(e=>e.color),y={display:`flex`,gap:`var(--space-4)`,alignItems:`center`,flexWrap:`wrap`},b={color:`var(--ink2)`,font:`400 var(--text-micro) var(--font-mono)`},x={render:()=>(0,g.jsx)(`div`,{style:y,children:v.map(e=>(0,g.jsx)(u,{color:e,label:`Glass colour ${e}`},e))})},S={render:()=>(0,g.jsxs)(`div`,{style:y,children:[(0,g.jsx)(`div`,{style:{padding:`var(--space-3)`,background:`var(--panel-bg)`},children:(0,g.jsx)(u,{color:p(0),label:`Glass colour on panel`})}),(0,g.jsx)(`div`,{style:{padding:`var(--space-3)`,background:`var(--canvas)`},children:(0,g.jsx)(u,{color:p(0),label:`Glass colour on canvas`})})]})},C={render:function(){let[e,t]=(0,h.useState)(p(0));return(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,g.jsxs)(`span`,{style:b,children:[`selected: `,e??`(none — erase)`]}),(0,g.jsx)(c,{label:`Glass colour`,colors:v,value:e,onChange:t})]})}},w={render:()=>(0,g.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(5, auto)`,gap:`var(--space-4)`},children:[[`resting`,!1,[]],[`hovered`,!1,[`data-hovered`]],[`selected`,!0,[]],[`selected + hovered`,!0,[`data-hovered`]],[`focused + selected`,!0,[`data-focus-visible`]]].map(([e,t,n])=>(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-1)`,justifyItems:`center`},children:[(0,g.jsx)(`span`,{style:b,children:e}),n.length===0?(0,g.jsx)(u,{color:p(6),label:`Glass colour`,isSelected:t,onChange:()=>{}}):(0,g.jsx)(m,{attrs:n,children:(0,g.jsx)(u,{color:p(6),label:`Glass colour`,isSelected:t,onChange:()=>{}})})]},e))})},T={render:function(){let e=(0,h.useRef)(null),[t,n]=(0,h.useState)(null);return(0,g.jsxs)(`div`,{ref:e,style:{display:`grid`,gap:`var(--space-3)`,justifyItems:`start`},children:[(0,g.jsx)(`span`,{style:b,children:`Tab to the swatch below, then click "dump computed styles".`}),(0,g.jsx)(u,{color:p(2),label:`Glass colour, focused and selected`,isSelected:!0,onChange:()=>{}}),(0,g.jsx)(`button`,{type:`button`,style:{...b,cursor:`pointer`,background:`transparent`,border:`none`,padding:0},onMouseDown:e=>e.preventDefault(),onClick:()=>{let t=e.current?.querySelector(`button[aria-pressed]`);if(t==null)return;let r=getComputedStyle(t);n({outline:r.outline,boxShadow:r.boxShadow})},children:`dump computed styles`}),t===null?null:(0,g.jsx)(`pre`,{style:{...b,whiteSpace:`pre-wrap`},children:`outline:    ${t.outline}\nbox-shadow: ${t.boxShadow}`})]})}},E={render:function(){let e=e=>{let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4},t=t=>{let n=Number.parseInt(t.slice(1),16),r=e(n>>16&255),i=e(n>>8&255),a=e(n&255);return .2126*r+.7152*i+.0722*a},n=(e,n)=>{let r=t(e),i=t(n),[a,o]=r>i?[r,i]:[i,r];return(a+.05)/(o+.05)},r=s.light.accent,i=s.light.panelBg,a=s.dark.panelBg,o=s.light.ink,c=s.dark.ink,l=v.map(e=>({glass:e,ringOnGlassNaive:n(r,e),ringOnPanelBgLight:n(r,i),ringOnPanelBgDark:n(r,a),haloPanelBgOnGlassLight:n(i,e),haloPanelBgOnGlassDark:n(a,e),haloInkOnGlassLight:n(o,e),haloInkOnGlassDark:n(c,e)})),d={padding:`2px 8px`,textAlign:`right`},f={color:`var(--err)`};return(0,g.jsxs)(`div`,{style:{display:`grid`,gap:`var(--space-2)`},children:[(0,g.jsx)(`span`,{style:b,children:'Ring is `--accent`, drawn on the halo (`--panel-bg`/`--ink`), never flush against glass — "ring on glass, naive" is what this primitive would measure WITHOUT the halo fix, shown to justify why the halo exists. WCAG 1.4.11 (non-text UI component) needs >= 3.0.'}),(0,g.jsxs)(`table`,{style:{font:`var(--weight-regular) var(--text-ui)/var(--lh-tight) var(--font-mono)`},children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{style:d,children:`glass`}),(0,g.jsx)(`th`,{style:d,children:`ring on glass (naive)`}),(0,g.jsx)(`th`,{style:d,children:`ring on panelBg (light)`}),(0,g.jsx)(`th`,{style:d,children:`ring on panelBg (dark)`}),(0,g.jsx)(`th`,{style:d,children:`halo panelBg vs glass (light)`}),(0,g.jsx)(`th`,{style:d,children:`halo panelBg vs glass (dark)`}),(0,g.jsx)(`th`,{style:d,children:`halo ink vs glass (light)`}),(0,g.jsx)(`th`,{style:d,children:`halo ink vs glass (dark)`})]})}),(0,g.jsx)(`tbody`,{children:l.map(e=>(0,g.jsxs)(`tr`,{children:[(0,g.jsxs)(`td`,{style:{...d,textAlign:`left`},children:[(0,g.jsx)(u,{color:e.glass,label:e.glass}),` `,e.glass]}),(0,g.jsx)(`td`,{style:{...d,...e.ringOnGlassNaive<3?f:{}},children:e.ringOnGlassNaive.toFixed(2)}),(0,g.jsx)(`td`,{style:{...d,...e.ringOnPanelBgLight<3?f:{}},children:e.ringOnPanelBgLight.toFixed(2)}),(0,g.jsx)(`td`,{style:{...d,...e.ringOnPanelBgDark<3?f:{}},children:e.ringOnPanelBgDark.toFixed(2)}),(0,g.jsx)(`td`,{style:{...d,...e.haloPanelBgOnGlassLight<3?f:{}},children:e.haloPanelBgOnGlassLight.toFixed(2)}),(0,g.jsx)(`td`,{style:{...d,...e.haloPanelBgOnGlassDark<3?f:{}},children:e.haloPanelBgOnGlassDark.toFixed(2)}),(0,g.jsx)(`td`,{style:{...d,...e.haloInkOnGlassLight<3?f:{}},children:e.haloInkOnGlassLight.toFixed(2)}),(0,g.jsx)(`td`,{style:{...d,...e.haloInkOnGlassDark<3?f:{}},children:e.haloInkOnGlassDark.toFixed(2)})]},e.glass))})]}),(0,g.jsxs)(`span`,{style:b,children:[`Red = below 3.0. "ring on glass (naive)" fails for every swatch (the halo is not optional). For every glass colour, in both themes, at least one of `,`{panelBg, ink}`,` `,"clears 3.0 — the two-tone halo's pigeonhole guarantee (`Swatch.module.css`'s doc comment on `.tile[data-selected]`)."]})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid}>
      {PALETTE_COLORS.map(color => <Swatch key={color} color={color} label={\`Glass colour \${color}\`} />)}
    </div>
}`,...x.parameters?.docs?.source},description:{story:'Every built-in glass colour as a static preview chip: `isSelected` omitted, so `role="img"`.',...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={grid}>
      <div style={{
      padding: 'var(--space-3)',
      background: 'var(--panel-bg)'
    }}>
        <Swatch color={paletteColor(0)} label="Glass colour on panel" />
      </div>
      <div style={{
      padding: 'var(--space-3)',
      background: 'var(--canvas)'
    }}>
        <Swatch color={paletteColor(0)} label="Glass colour on canvas" />
      </div>
    </div>
}`,...S.parameters?.docs?.source},description:{story:"Against the two backgrounds a `LayerRow` can render on: panel and canvas surround.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function PickerStory() {
    const [value, setValue] = useState<string | null>(paletteColor(0));
    return <div style={{
      display: 'grid',
      gap: 'var(--space-2)'
    }}>
        <span style={label}>selected: {value ?? '(none — erase)'}</span>
        <SwatchGrid label="Glass colour" colors={PALETTE_COLORS} value={value} onChange={setValue} />
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:"The interactive picker. Clicking a selected tile clears it — `null` is the eraser state.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, auto)',
    gap: 'var(--space-4)'
  }}>
      {([['resting', false, []], ['hovered', false, ['data-hovered']], ['selected', true, []], ['selected + hovered', true, ['data-hovered']], ['focused + selected', true, ['data-focus-visible']]] as const).map(([caption, isSelected, attrs]) => <div key={caption} style={{
      display: 'grid',
      gap: 'var(--space-1)',
      justifyItems: 'center'
    }}>
          <span style={label}>{caption}</span>
          {attrs.length === 0 ? <Swatch color={paletteColor(6)} label="Glass colour" isSelected={isSelected} onChange={() => {}} /> : <StackForced attrs={attrs}>
              <Swatch color={paletteColor(6)} label="Glass colour" isSelected={isSelected} onChange={() => {}} />
            </StackForced>}
        </div>)}
    </div>
}`,...w.parameters?.docs?.source},description:{story:"The five states side by side. `Forced` stamps react-aria's own `data-*` attributes onto the\nrendered `<button>`, so these are the same states a mouse or keyboard would produce.",...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function FocusedAndSelectedStory() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const [dump, setDump] = useState<{
      outline: string;
      boxShadow: string;
    } | null>(null);
    return <div ref={wrapRef} style={{
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'start'
    }}>
        <span style={label}>Tab to the swatch below, then click "dump computed styles".</span>
        <Swatch color={paletteColor(2)} label="Glass colour, focused and selected" isSelected onChange={() => {}} />
        <button type="button" style={{
        ...label,
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0
      }} onMouseDown={event => event.preventDefault()} onClick={() => {
        const el = wrapRef.current?.querySelector('button[aria-pressed]');
        if (el === null || el === undefined) return;
        const computed = getComputedStyle(el);
        setDump({
          outline: computed.outline,
          boxShadow: computed.boxShadow
        });
      }}>
          dump computed styles
        </button>
        {dump === null ? null : <pre style={{
        ...label,
        whiteSpace: 'pre-wrap'
      }}>
            {\`outline:    \${dump.outline}\\nbox-shadow: \${dump.boxShadow}\`}
          </pre>}
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Dumps `getComputedStyle` for a keyboard-focused, selected swatch: selection ring (`box-shadow`)\nand focus ring (`outline`) must both be non-empty and distinct at once.\n\nRequires a real `Tab` keypress — RAC's `useFocusRing` derives `[data-focus-visible]` from the\nbrowser's input-modality heuristic, which a scripted `.focus()` does not satisfy. The dump button\npreventDefaults `mousedown` so clicking it does not steal the focus being measured.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function RingContrastStory() {
    const linearise = (channel: number): number => {
      const c = channel / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    };
    const luminance = (hex: string): number => {
      const n = Number.parseInt(hex.slice(1), 16);
      const r = linearise(n >> 16 & 255);
      const g = linearise(n >> 8 & 255);
      const b = linearise(n & 255);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    const contrast = (a: string, b: string): number => {
      const l1 = luminance(a);
      const l2 = luminance(b);
      const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
      return (hi + 0.05) / (lo + 0.05);
    };
    // Read from \`ROLES\`, never retyped as hex: \`no-hex-literals.test.ts\` allows hex literals only in
    // \`config/tokens.ts\` and \`color/palette.ts\`, and the imported role cannot drift from what renders.
    const ACCENT = ROLES.light.accent; // theme-independent — a SHARED role in tokens.ts
    const PANEL_BG_LIGHT = ROLES.light.panelBg;
    const PANEL_BG_DARK = ROLES.dark.panelBg;
    const INK_LIGHT = ROLES.light.ink;
    const INK_DARK = ROLES.dark.ink;
    const rows = PALETTE_COLORS.map(glass => ({
      glass,
      ringOnGlassNaive: contrast(ACCENT, glass),
      ringOnPanelBgLight: contrast(ACCENT, PANEL_BG_LIGHT),
      ringOnPanelBgDark: contrast(ACCENT, PANEL_BG_DARK),
      haloPanelBgOnGlassLight: contrast(PANEL_BG_LIGHT, glass),
      haloPanelBgOnGlassDark: contrast(PANEL_BG_DARK, glass),
      haloInkOnGlassLight: contrast(INK_LIGHT, glass),
      haloInkOnGlassDark: contrast(INK_DARK, glass)
    }));
    const cell = {
      padding: '2px 8px',
      textAlign: 'right' as const
    };
    const fail = {
      color: 'var(--err)'
    };
    return <div style={{
      display: 'grid',
      gap: 'var(--space-2)'
    }}>
        <span style={label}>
          Ring is \`--accent\`, drawn on the halo (\`--panel-bg\`/\`--ink\`), never flush against glass —
          "ring on glass, naive" is what this primitive would measure WITHOUT the halo fix, shown to
          justify why the halo exists. WCAG 1.4.11 (non-text UI component) needs &gt;= 3.0.
        </span>
        <table style={{
        font: 'var(--weight-regular) var(--text-ui)/var(--lh-tight) var(--font-mono)'
      }}>
          <thead>
            <tr>
              <th style={cell}>glass</th>
              <th style={cell}>ring on glass (naive)</th>
              <th style={cell}>ring on panelBg (light)</th>
              <th style={cell}>ring on panelBg (dark)</th>
              <th style={cell}>halo panelBg vs glass (light)</th>
              <th style={cell}>halo panelBg vs glass (dark)</th>
              <th style={cell}>halo ink vs glass (light)</th>
              <th style={cell}>halo ink vs glass (dark)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => <tr key={row.glass}>
                <td style={{
              ...cell,
              textAlign: 'left'
            }}>
                  <Swatch color={row.glass} label={row.glass} /> {row.glass}
                </td>
                <td style={{
              ...cell,
              ...(row.ringOnGlassNaive < 3 ? fail : {})
            }}>
                  {row.ringOnGlassNaive.toFixed(2)}
                </td>
                <td style={{
              ...cell,
              ...(row.ringOnPanelBgLight < 3 ? fail : {})
            }}>
                  {row.ringOnPanelBgLight.toFixed(2)}
                </td>
                <td style={{
              ...cell,
              ...(row.ringOnPanelBgDark < 3 ? fail : {})
            }}>
                  {row.ringOnPanelBgDark.toFixed(2)}
                </td>
                <td style={{
              ...cell,
              ...(row.haloPanelBgOnGlassLight < 3 ? fail : {})
            }}>
                  {row.haloPanelBgOnGlassLight.toFixed(2)}
                </td>
                <td style={{
              ...cell,
              ...(row.haloPanelBgOnGlassDark < 3 ? fail : {})
            }}>
                  {row.haloPanelBgOnGlassDark.toFixed(2)}
                </td>
                <td style={{
              ...cell,
              ...(row.haloInkOnGlassLight < 3 ? fail : {})
            }}>
                  {row.haloInkOnGlassLight.toFixed(2)}
                </td>
                <td style={{
              ...cell,
              ...(row.haloInkOnGlassDark < 3 ? fail : {})
            }}>
                  {row.haloInkOnGlassDark.toFixed(2)}
                </td>
              </tr>)}
          </tbody>
        </table>
        <span style={label}>
          Red = below 3.0. "ring on glass (naive)" fails for every swatch (the halo is not
          optional). For every glass colour, in both themes, at least one of {'{panelBg, ink}'}{' '}
          clears 3.0 — the two-tone halo's pigeonhole guarantee (\`Swatch.module.css\`'s doc comment
          on \`.tile[data-selected]\`).
        </span>
      </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:"The accent ring's contrast against every built-in glass swatch and against the two halo tones\n(`--ink`, `--panel-bg`) the ring is actually drawn on. Luminance follows WCAG's sRGB\nlinearisation, as in `config/tokens.test.ts`.",...E.parameters?.docs?.description}}},D=[`GlassPalette`,`OnPanelAndCanvas`,`Picker`,`AllStates`,`FocusedAndSelected`,`RingContrast`]}))();export{w as AllStates,T as FocusedAndSelected,x as GlassPalette,S as OnPanelAndCanvas,C as Picker,E as RingContrast,D as __namedExportsOrder,_ as default};