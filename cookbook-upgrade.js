
/* Maika's Cookbook — editor and login upgrade */
(() => {
  'use strict';

  const PROJECT_URL = 'https://kljecbncitigmvkryaru.supabase.co';
  const PUBLISHABLE_KEY = 'sb_publishable_NrCzJAReSfmBb8ojTtWYWw_PUrZuM3Q';
  const $ = s => document.querySelector(s);
  const PREFIX = '@@MAIKA2:';

  const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])
  );

  function sanitize(html) {
    const doc = new DOMParser().parseFromString('<div>' + html + '</div>', 'text/html');
    const root = doc.body.firstElementChild;
    const safe = n => {
      if (n.nodeType === 3) return document.createTextNode(n.nodeValue);
      if (n.nodeType !== 1) return document.createDocumentFragment();
      if (['SCRIPT','STYLE','IFRAME','OBJECT'].includes(n.tagName)) return document.createDocumentFragment();
      const allowed = ['B','STRONG','I','EM','U','BR'];
      const out = allowed.includes(n.tagName)
        ? document.createElement(n.tagName.toLowerCase())
        : document.createDocumentFragment();
      [...n.childNodes].forEach(c => out.append(safe(c)));
      return out;
    };
    const box = document.createElement('div');
    [...root.childNodes].forEach(n => box.append(safe(n)));
    return box.innerHTML;
  }

  function decode(line) {
    const clean = x => String(x).replace(/\\([.!,;:?_#*()\-])/g,'$1');
    if (!String(line).startsWith(PREFIX))
      return {type:'item', html:escapeHTML(clean(line))};
    try {
      const obj = JSON.parse(decodeURIComponent(line.slice(PREFIX.length)));
      return {
        type:['heading','subheading','item'].includes(obj.t) ? obj.t : 'item',
        html:sanitize(clean(obj.h || ''))
      };
    } catch {
      return {type:'item', html:escapeHTML(clean(line))};
    }
  }

  function encode(row) {
    const type = row.querySelector('select').value;
    const html = sanitize(row.querySelector('[contenteditable]').innerHTML);
    const plain = document.createElement('div');
    plain.innerHTML = html;
    if (!plain.textContent.trim()) return null;
    if (type === 'item' && !/<(b|strong|i|em|u)\b/i.test(html))
      return plain.textContent.trim();
    return PREFIX + encodeURIComponent(JSON.stringify({t:type,h:html}));
  }

  const style = document.createElement('style');
  style.textContent = `
    .maika-upgrade-wrap {
      border:1px solid #ded4d5;border-radius:10px;
      padding:12px;margin:7px 0 17px;background:#fff
    }
    .maika-upgrade-toolbar {
      display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px
    }
    .maika-upgrade-toolbar button,
    .maika-upgrade-row button,
    .maika-upgrade-row select {
      border:1px solid #d8cbcf;border-radius:6px;
      background:#faf7f7;padding:7px 10px;color:#47393e
    }
    .maika-upgrade-row {
      display:flex;align-items:flex-start;gap:6px;margin:7px 0
    }
    .maika-upgrade-row select {
      max-width:125px;flex-shrink:0
    }
    .maika-upgrade-line {
      border:1px solid #e4dbde;border-radius:6px;
      padding:9px;min-height:38px;flex:1;
      overflow-wrap:anywhere;white-space:pre-wrap
    }
    .maika-upgrade-row button {
      padding:7px;min-width:30px
    }
    .maika-upgrade-actions {
      display:flex;gap:7px;flex-wrap:wrap;margin-top:10px
    }
    .maika-upgrade-actions button {
      border:1px solid #d8cbcf;border-radius:6px;
      padding:8px;background:#f8f4f5
    }
    .maika-section-heading {
      font-family:Georgia,serif;font-size:1.2em;
      font-weight:700;margin:19px 0 7px;
      list-style:none!important
    }
    .maika-section-subheading {
      font-weight:700;margin:12px 0 5px;
      list-style:none!important
    }
    .maika-upgrade-step {
      display:flex;gap:13px;align-items:baseline;
      margin:9px 0;list-style:none!important
    }
    .maika-upgrade-step-number {
      font-weight:700;min-width:1.4em
    }
    .maika-upgrade-item {margin:7px 0}
    .maika-bulk-editor {min-height:180px;padding:12px;border:1px solid #ded4d5;white-space:pre-wrap;overflow-wrap:break-word;line-height:1.6}
    .maika-bulk-editor h3,.maika-bulk-editor h4 {margin:12px 0 4px;font-weight:bold}
    .method-list.maika-structured > li::before {content:none!important;display:none!important}
    .method-list.maika-structured > li {counter-increment:none;display:grid;grid-template-columns:60px minmax(0,1fr);gap:15px}
    .method-list.maika-structured > li.maika-section-heading,.method-list.maika-structured > li.maika-section-subheading {display:block}
    .maika-upgrade-step-number {font-family:var(--mc-heading-font,Georgia);font-size:26px;color:#b68f83}
    .maika-upgrade-step > span:last-child {min-width:0;overflow-wrap:break-word}
    @media(max-width:600px){.method-list.maika-structured > li {grid-template-columns:42px minmax(0,1fr);gap:8px}}

  `;
  document.head.append(style);

  function configureLogin() {
    const f = $('#syncForm');
    const u = $('#sbUrl');
    const k = $('#sbKey');
    if (!f || !u || !k) return;

    let old = {};
    try {
      old = JSON.parse(localStorage.getItem('maika_supabase') || '{}');
    } catch {}

    localStorage.setItem('maika_supabase', JSON.stringify({
      ...old, url:PROJECT_URL, key:PUBLISHABLE_KEY
    }));

    u.value = PROJECT_URL;
    k.value = PUBLISHABLE_KEY;
    u.closest('label').style.display = 'none';
    k.closest('label').style.display = 'none';

    const p = $('#syncModal .muted');
    if (p) p.textContent =
      'Sign in with your email and password to sync your cookbook across devices.';

    const h = $('#syncModal .modalhead h2');
    if (h) h.textContent = 'Owner sign in';

    const submit = f.querySelector('button[type=submit]');
    if (submit) submit.textContent = 'Sign in';
  }

  configureLogin();

  function makeEditor(field, label) {
    const wrap = document.createElement('div'); wrap.className='maika-upgrade-wrap';
    const toolbar=document.createElement('div'); toolbar.className='maika-upgrade-toolbar';
    const editor=document.createElement('div'); editor.className='maika-bulk-editor';
    editor.contentEditable='true'; editor.setAttribute('role','textbox'); editor.setAttribute('aria-multiline','true'); editor.setAttribute('aria-label',label);
    wrap.append(toolbar,editor); field.after(wrap); field.style.display='none'; field.required=false;
    for(const [cmd,val,txt] of [['bold',null,'B'],['italic',null,'I'],['underline',null,'U'],['formatBlock','h3','Heading'],['formatBlock','h4','Subheading'],['formatBlock','div','Normal text']]) {
      const b=document.createElement('button'); b.type='button'; b.textContent=txt;
      b.addEventListener('pointerdown',e=>e.preventDefault()); b.onclick=()=>{editor.focus();document.execCommand(cmd,false,val);sync();}; toolbar.append(b);
    }
    function sync(){
      const lines=[]; let buf='';
      function flush(type='item'){const html=sanitize(buf);buf='';const box=document.createElement('div');box.innerHTML=html;if(box.textContent.trim())lines.push(PREFIX+encodeURIComponent(JSON.stringify({t:type,h:html})));}
      function walk(n){if(n.nodeType===3){buf+=escapeHTML(n.nodeValue);return;}if(n.nodeType!==1)return;const tag=n.tagName;if(tag==='BR'){flush();return;}if(['DIV','P','LI','H1','H2','H3','H4','H5','H6'].includes(tag)){flush();if(tag==='DIV'||tag==='P'){[...n.childNodes].forEach(walk);flush();}else{buf=n.innerHTML;flush(/^H[1-3]$/.test(tag)?'heading':/^H[4-6]$/.test(tag)?'subheading':'item');}return;}if(['UL','OL'].includes(tag)){flush();[...n.childNodes].forEach(walk);return;}buf+=n.outerHTML;}
      [...editor.childNodes].forEach(walk);flush();field.value=lines.join('\n');
    }
    function load(){editor.replaceChildren();for(const raw of field.value.split(/\r?\n/).filter(x=>x.trim())){const d=decode(raw);const el=document.createElement(d.type==='heading'?'h3':d.type==='subheading'?'h4':'div');el.innerHTML=d.html;editor.append(el);} }
    editor.addEventListener('input',sync);
    editor.addEventListener('paste',e=>{e.preventDefault();const html=e.clipboardData.getData('text/html');const plain=e.clipboardData.getData('text/plain');const doc=new DOMParser().parseFromString(html||'', 'text/html');const blocks=[...doc.body.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li')].filter(n=>!n.querySelector('p,li,h1,h2,h3,h4,h5,h6'));let content;if(blocks.length){content=blocks.map(n=>{const tag=/^H[1-3]$/.test(n.tagName)?'h3':/^H[4-6]$/.test(n.tagName)?'h4':'div';return '<'+tag+'>'+sanitize(n.innerHTML)+'</'+tag+'>';}).join('');}else{content=plain.split(/\r?\n/).map(line=>{const m=line.match(/^\s*(#{1,6})\s+(.*)$/);const tag=m?(m[1].length<4?'h3':'h4'):'div';return '<'+tag+'>'+escapeHTML(m?m[2]:line).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')+'</'+tag+'>';}).join('');}document.execCommand('insertHTML',false,content);sync();});
    return {load,sync};
  }

  const form = $('#recipeForm');
  if (!form) return;

  const ingredient = makeEditor(form.elements.ingredients,'Ingredients');
  const method = makeEditor(form.elements.method,'Method');

  function reload() {
    ingredient.load();
    method.load();
  }

  document.addEventListener('click', e => {
    if (e.target.closest('#newBtn,[data-edit]'))
      setTimeout(reload,0);
  });

  form.addEventListener('submit', () => {
    ingredient.sync();
    method.sync();
  }, true);

  function renderStructured() {
    const page = $('.recipe-page');
    if (!page || page.dataset.maikaUpgraded === 'yes') return;

    const ingredients = page.querySelector('.ingredients ul');
    const methodList = page.querySelector('.method-list');
    if (!ingredients || !methodList) return;

    function transform(list,isMethod) {
      const old = [...list.children].map(li => li.textContent);
      if (!old.some(x => x.startsWith(PREFIX))) return; list.classList.add('maika-structured');

      list.replaceChildren();
      let number = 0;

      for (const raw of old) {
        const item = decode(raw);
        const li = document.createElement('li');

        if (item.type !== 'item') {
          li.className = item.type === 'heading'
            ? 'maika-section-heading' : 'maika-section-subheading';
          li.innerHTML = item.html;
        } else if (isMethod) {
          number++;
          li.className = 'maika-upgrade-step';

          const num = document.createElement('span');
          num.className = 'maika-upgrade-step-number';
          num.textContent = String(number).padStart(2,'0');

          const content = document.createElement('span');
          content.innerHTML = item.html; const walker=document.createTreeWalker(content,NodeFilter.SHOW_TEXT); const first=walker.nextNode(); if(first) first.nodeValue=first.nodeValue.replace(/^\s*\d+[.)]\s*/, '');
          li.append(num,content);
        } else {
          li.className = 'maika-upgrade-item';
          li.innerHTML = item.html;
        }

        list.append(li);
      }

      if (isMethod) {
        list.style.listStyle = 'none';
        list.style.paddingLeft = '0';
        list.style.counterReset = 'none';
      }
    }

    transform(ingredients,false);
    transform(methodList,true);
    page.dataset.maikaUpgraded = 'yes';
  }

  const observer = new MutationObserver(renderStructured);
  observer.observe($('#app'),{childList:true,subtree:true});
  renderStructured();
})();
