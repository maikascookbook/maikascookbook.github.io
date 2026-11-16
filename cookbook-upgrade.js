
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
    if (!String(line).startsWith(PREFIX))
      return {type:'item', html:escapeHTML(line)};
    try {
      const obj = JSON.parse(decodeURIComponent(line.slice(PREFIX.length)));
      return {
        type:['heading','subheading','item'].includes(obj.t) ? obj.t : 'item',
        html:sanitize(obj.h || '')
      };
    } catch {
      return {type:'item', html:escapeHTML(line)};
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
    const wrap = document.createElement('div');
    wrap.className = 'maika-upgrade-wrap';

    const toolbar = document.createElement('div');
    toolbar.className = 'maika-upgrade-toolbar';
    toolbar.innerHTML = '<strong>' + label + ' formatting</strong>';

    let active = null;

    for (const [cmd, txt] of [
      ['bold','B'],['italic','I'],['underline','U']
    ]) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = txt;
      b.title = cmd;
      b.addEventListener('pointerdown', e => e.preventDefault());
      b.onclick = () => {
        if (active) {
          active.focus();
          document.execCommand(cmd, false, null);
          sync();
        }
      };
      toolbar.append(b);
    }

    const rows = document.createElement('div');
    const actions = document.createElement('div');
    actions.className = 'maika-upgrade-actions';
    wrap.append(toolbar, rows, actions);
    field.insertAdjacentElement('afterend', wrap);
    field.style.display = 'none';
    field.required = false;

    function sync() {
      field.value = [...rows.children].map(encode).filter(Boolean).join('\n');
    }

    function add(type = 'item', html = '', at = null) {
      const row = document.createElement('div');
      row.className = 'maika-upgrade-row';

      const select = document.createElement('select');
      [
        ['item', label === 'Method' ? 'Step' : 'Ingredient'],
        ['heading','Heading'],
        ['subheading','Subheading']
      ].forEach(([v,t]) => {
        const o = document.createElement('option');
        o.value = v;
        o.textContent = t;
        select.append(o);
      });
      select.value = type;

      const line = document.createElement('div');
      line.className = 'maika-upgrade-line';
      line.contentEditable = 'true';
      line.setAttribute('role','textbox');
      line.setAttribute('aria-label', label + ' ' + type);
      line.innerHTML = sanitize(html);
      line.addEventListener('focus', () => active = line);
      line.addEventListener('input', sync);

      line.addEventListener('paste', e => {
        e.preventDefault();
        document.execCommand(
          'insertText', false, e.clipboardData.getData('text/plain')
        );
      });

      line.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const next = add('item','',row.nextSibling);
          next.focus();
        }
      });

      select.onchange = sync;
      row.append(select,line);

      for (const [txt,fn] of [
        ['↑', () => {
          if (row.previousSibling) rows.insertBefore(row,row.previousSibling);
        }],
        ['↓', () => {
          if (row.nextSibling) rows.insertBefore(row.nextSibling,row);
        }],
        ['×', () => row.remove()]
      ]) {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = txt;
        b.title = txt === '×' ? 'Remove line'
          : txt === '↑' ? 'Move up' : 'Move down';
        b.onclick = () => {fn();sync();};
        row.append(b);
      }

      if (at) rows.insertBefore(row,at);
      else rows.append(row);
      sync();
      return line;
    }

    for (const [type,text] of [
      ['item',label === 'Method' ? '+ Step' : '+ Ingredient'],
      ['heading','+ Heading'],
      ['subheading','+ Subheading']
    ]) {
      const b = document.createElement('button');
      b.type = 'button';
      b.textContent = text;
      b.onclick = () => add(type).focus();
      actions.append(b);
    }

    function load() {
      rows.replaceChildren();
      const raw = field.value.split(/\r?\n/).filter(x => x.trim());
      raw.forEach(x => {
        const d = decode(x);
        add(d.type,d.html);
      });
      if (!raw.length) add();
      sync();
    }

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
      if (!old.some(x => x.startsWith(PREFIX))) return;

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
          num.textContent = number + '.';

          const content = document.createElement('span');
          content.innerHTML = item.html;
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
