
/* Maika's Cookbook — Website Customizer v1 */
(() => {
  'use strict';

  const $ = s => document.querySelector(s);
  const KEY = 'maika_design_v1';

  const defaults = {
    background: '#f9f6f1',
    paper: '#fffdf9',
    ink: '#332c2a',
    accent: '#d6b3aa',
    hero: '#efe7df',
    ingredients: '#f1eae2',
    banner: '#e9e8dc',
    headingFont: 'Playfair Display',
    bodyFont: 'DM Sans',
    fontSize: 14,
    headingScale: 100,
    pageWidth: 1300,
    spacing: 100,
    corners: 2,
    columns: 3,
    heroTitle: '',
    heroText: '',
    welcomeTitle: '',
    welcomeText: '',
    heroImage: '',
    showWelcome: true,
    showCategories: true,
    showExplore: true,
    showLatest: true,
    showClosing: true
  };

  const read = () => {
    try {
      return {...defaults, ...JSON.parse(localStorage.getItem(KEY) || '{}')};
    } catch {
      return {...defaults};
    }
  };

  let saved = read();
  let draft = {...saved};
  let open = false;

  const style = document.createElement('style');
  style.textContent = `
    :root {
      --mc-heading-font:'Playfair Display',Georgia,serif;
      --mc-body-font:'DM Sans',sans-serif;
      --mc-scale:1;
      --mc-spacing:1;
      --mc-radius:2px;
      --mc-columns:3;
      --mc-width:1300px;
    }
    body {
      font-family:var(--mc-body-font)!important;
    }
    h1,h2,h3,h4 {
      font-family:var(--mc-heading-font)!important;
    }
    .container {
      max-width:var(--mc-width)!important;
    }
    .recipe-grid {
      grid-template-columns:repeat(var(--mc-columns),minmax(0,1fr));
    }
    .recipe-card img,.latest-card img,
    .recipe-photo,.chapter,.index-tile {
      border-radius:var(--mc-radius);
    }
    .solid,.outline,.filter,.search {
      border-radius:var(--mc-radius);
    }
    .section {
      padding-top:calc(85px * var(--mc-spacing));
      padding-bottom:calc(85px * var(--mc-spacing));
    }
    .home-wrap {
      max-width:var(--mc-width);
    }
    .mc-backdrop {
      position:fixed;inset:0;background:#0008;
      z-index:1000;display:none;
      align-items:stretch;justify-content:flex-end;
    }
    .mc-backdrop.mc-open {display:flex}
    .mc-panel {
      width:min(440px,100%);height:100%;
      overflow-y:auto;background:#fffdf9;
      color:#332c2a;padding:23px;
      box-shadow:-8px 0 35px #0002;
      font:14px 'DM Sans',sans-serif;
    }
    .mc-header {
      display:flex;align-items:center;
      justify-content:space-between;gap:12px;
      border-bottom:1px solid #e5ded8;
      padding-bottom:15px;margin-bottom:18px;
    }
    .mc-header h2 {
      font-size:25px;margin:0;
      font-family:Georgia,serif!important;
    }
    .mc-panel details {
      border-bottom:1px solid #e5ded8;
      padding:13px 0;
    }
    .mc-panel summary {
      cursor:pointer;font-weight:700;
      font-size:15px;padding:5px 0;
    }
    .mc-field {
      display:block;margin:15px 0;
      font-size:12px;font-weight:600;
    }
    .mc-field input:not([type=checkbox]),
    .mc-field select,.mc-field textarea {
      display:block;width:100%;
      box-sizing:border-box;margin-top:7px;
      padding:10px;border:1px solid #d7ccc5;
      background:white;color:#332c2a;
      border-radius:5px;font:inherit;
    }
    .mc-field input[type=color] {
      height:43px;padding:4px;
    }
    .mc-field input[type=range] {
      padding:0;
    }
    .mc-check {
      display:flex;align-items:center;
      gap:10px;margin:15px 0;
    }
    .mc-buttons {
      display:flex;flex-wrap:wrap;
      gap:8px;margin-top:22px;
    }
    .mc-buttons button,.mc-close {
      padding:11px 13px;border:1px solid #9e8d85;
      border-radius:5px;background:white;
      color:#332c2a;cursor:pointer;
    }
    .mc-buttons .mc-save {
      background:#332c2a;color:white;
    }
    .mc-note {
      color:#786d67;font-size:12px;
      line-height:1.6;margin:14px 0;
    }
    @media(max-width:750px) {
      .recipe-grid {
        grid-template-columns:repeat(
          min(var(--mc-columns),2),minmax(0,1fr)
        );
      }
      .mc-panel {width:100%}
    }
  `;
  document.head.append(style);

  function apply(d) {
    const root = document.documentElement;
    const vars = {
      '--cream': d.background,
      '--paper': d.paper,
      '--ink': d.ink,
      '--rose': d.accent,
      '--rosebg': d.accent,
      '--mc-heading-font': "'" + d.headingFont + "',Georgia,serif",
      '--mc-body-font': "'" + d.bodyFont + "',sans-serif",
      '--mc-spacing': d.spacing / 100,
      '--mc-radius': d.corners + 'px',
      '--mc-columns': d.columns,
      '--mc-width': d.pageWidth + 'px'
    };

    Object.entries(vars).forEach(([key,value]) =>
      root.style.setProperty(key,value)
    );

    root.style.fontSize = d.fontSize + 'px';
    document.body.style.fontSize = d.fontSize + 'px';

    let dynamic = $('#mc-dynamic-style');
    if (!dynamic) {
      dynamic = document.createElement('style');
      dynamic.id = 'mc-dynamic-style';
      document.head.append(dynamic);
    }

    dynamic.textContent = `
      .hero,.updated-hero {background:${d.hero}!important}
      .ingredients {background:${d.ingredients}!important}
      .banner,.closing-banner,.explore-strip {
        background-color:${d.banner}!important
      }
      h1,h2,h3,h4 {
        font-size-adjust:from-font;
      }
      .hero-copy h1,.recipe-title h1 {
        font-size:clamp(36px,${6*d.headingScale/100}vw,
          ${88*d.headingScale/100}px)!important;
      }
      .hero-copy h2,.welcome-area h2 {
        font-size:clamp(25px,${3*d.headingScale/100}vw,
          ${46*d.headingScale/100}px)!important;
      }
      ${d.showWelcome ? '' : '.welcome-area{display:none!important}'}
      ${d.showCategories ? '' : '.index-area{display:none!important}'}
      ${d.showExplore ? '' : '.explore-strip{display:none!important}'}
      ${d.showLatest ? '' : '.latest-area{display:none!important}'}
      ${d.showClosing ? '' : '.closing-banner{display:none!important}'}
      ${d.heroImage ? `.updated-hero .hero-photo{
        background-image:url("${d.heroImage.replace(/["\\\n\r]/g,'')}")!important
      }` : ''}
    `;

    updateText(d);
  }

  function updateText(d) {
    const replacements = [
      ['.updated-hero .hero-copy h1',d.heroTitle],
      ['.updated-hero .hero-copy p',d.heroText],
      ['.welcome-area h2',d.welcomeTitle],
      ['.welcome-area > p',d.welcomeText]
    ];

    replacements.forEach(([selector,value]) => {
      const element = $(selector);
      if (!element) return;

      if (!element.dataset.mcOriginal) {
        element.dataset.mcOriginal = element.innerHTML;
      }

      if (value && value.trim()) {
        element.textContent = value;
      } else {
        element.innerHTML = element.dataset.mcOriginal;
      }
    });
  }

  const fields = [
    ['background','Page background','color','Colors'],
    ['paper','Cards and navigation','color','Colors'],
    ['ink','Main text and buttons','color','Colors'],
    ['accent','Accent color','color','Colors'],
    ['hero','Homepage hero background','color','Colors'],
    ['ingredients','Ingredients panel','color','Colors'],
    ['banner','Banner background','color','Colors'],
    ['headingFont','Heading font','font','Typography'],
    ['bodyFont','Body font','font','Typography'],
    ['fontSize','Body text size','range:12:20','Typography'],
    ['headingScale','Heading size (%)','range:75:135','Typography'],
    ['pageWidth','Page width (px)','range:900:1600','Layout'],
    ['spacing','Section spacing (%)','range:65:150','Layout'],
    ['corners','Corner roundness','range:0:30','Layout'],
    ['columns','Recipe grid columns','range:1:4','Layout'],
    ['heroTitle','Homepage headline','text','Homepage'],
    ['heroText','Homepage introduction','textarea','Homepage'],
    ['welcomeTitle','Welcome heading','text','Homepage'],
    ['welcomeText','Welcome paragraph','textarea','Homepage'],
    ['heroImage','Hero image URL','url','Homepage'],
    ['showWelcome','Show welcome section','checkbox','Sections'],
    ['showCategories','Show categories','checkbox','Sections'],
    ['showExplore','Show explore banner','checkbox','Sections'],
    ['showLatest','Show latest recipes','checkbox','Sections'],
    ['showClosing','Show closing banner','checkbox','Sections']
  ];

  const backdrop = document.createElement('div');
  backdrop.className = 'mc-backdrop';
  backdrop.innerHTML = `
    <aside class="mc-panel" role="dialog"
      aria-modal="true" aria-label="Customize cookbook">
      <div class="mc-header">
        <h2>Customize your cookbook</h2>
        <button type="button" class="mc-close"
          id="mc-close">✕</button>
      </div>
      <p class="mc-note">
        Changes appear immediately in the preview.
        Tap Save to keep them on this device.
      </p>
      <div id="mc-fields"></div>
      <div class="mc-buttons">
        <button type="button" class="mc-save"
          id="mc-save">Save design</button>
        <button type="button" id="mc-cancel">
          Cancel changes
        </button>
        <button type="button" id="mc-reset">
          Restore original
        </button>
      </div>
      <p class="mc-note">
        Design settings are saved in this browser.
        Cloud publishing across devices is not enabled yet.
      </p>
    </aside>
  `;
  document.body.append(backdrop);

  const groups = {};
  fields.forEach(([key,label,type,group]) => {
    if (!groups[group]) groups[group] = [];
    groups[group].push([key,label,type]);
  });

  const holder = $('#mc-fields');

  Object.entries(groups).forEach(([group,items],index) => {
    const details = document.createElement('details');
    details.open = index === 0;
    const summary = document.createElement('summary');
    summary.textContent = group;
    details.append(summary);

    items.forEach(([key,label,type]) => {
      const wrapper = document.createElement('label');
      wrapper.className =
        type === 'checkbox' ? 'mc-check' : 'mc-field';

      const title = document.createElement('span');
      title.textContent = label;

      let control;
      if (type === 'font') {
        control = document.createElement('select');
        const fonts = key === 'headingFont'
          ? ['Playfair Display','Lora','Georgia','DM Sans']
          : ['DM Sans','Georgia','Arial','Lora'];
        fonts.forEach(font => {
          const option = document.createElement('option');
          option.value = font;
          option.textContent = font;
          control.append(option);
        });
      } else if (type === 'textarea') {
        control = document.createElement('textarea');
        control.rows = 3;
      } else {
        control = document.createElement('input');
        const parts = type.split(':');
        control.type = parts[0];
        if (parts[0] === 'range') {
          control.min = parts[1];
          control.max = parts[2];
          control.step = '1';
        }
      }

      control.dataset.mcKey = key;

      if (type === 'checkbox') {
        wrapper.append(control,title);
      } else {
        wrapper.append(title,control);
      }

      details.append(wrapper);
    });

    holder.append(details);
  });

  function populate() {
    holder.querySelectorAll('[data-mc-key]').forEach(el => {
      const value = draft[el.dataset.mcKey];
      if (el.type === 'checkbox') el.checked = !!value;
      else el.value = value;
    });
  }

  holder.addEventListener('input', e => {
    const el = e.target.closest('[data-mc-key]');
    if (!el) return;

    const key = el.dataset.mcKey;
    draft[key] = el.type === 'checkbox'
      ? el.checked
      : el.type === 'range'
        ? Number(el.value)
        : el.value;

    apply(draft);
  });

  holder.addEventListener('change', e => {
    if (e.target.matches('[data-mc-key]')) apply(draft);
  });

  function close(saveChanges) {
    if (!saveChanges) {
      draft = {...saved};
      apply(saved);
    }
    open = false;
    backdrop.classList.remove('mc-open');
  }

  $('#mc-close').onclick = () => close(false);
  $('#mc-cancel').onclick = () => close(false);

  $('#mc-save').onclick = () => {
    saved = {...draft};
    localStorage.setItem(KEY,JSON.stringify(saved));
    close(true);
    alert('Design saved on this device.');
  };

  $('#mc-reset').onclick = () => {
    if (!confirm('Restore the original cookbook design?')) return;
    draft = {...defaults};
    populate();
    apply(draft);
  };

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) close(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && open) close(false);
  });

  function isSignedIn() {
    try {
      const session = JSON.parse(
        localStorage.getItem('maika_session') || 'null'
      );
      if (!session || !session.token) return false;
      const payload = JSON.parse(
        atob(session.token.split('.')[1]
          .replace(/-/g,'+').replace(/_/g,'/'))
      );
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  const button = document.createElement('button');
  button.className = 'outline small';
  button.id = 'customizeBtn';
  button.textContent = '✦ Customize';
  button.style.display = 'none';

  const actions = $('.topbar .actions');
  if (actions) actions.prepend(button);

  button.onclick = () => {
    if (!isSignedIn()) {
      alert('Sign in as the cookbook owner first.');
      return;
    }
    draft = {...saved};
    populate();
    open = true;
    backdrop.classList.add('mc-open');
  };

  function refreshButton() {
    button.style.display = isSignedIn() ? '' : 'none';
  }

  const app = $('#app');
  if (app) {
    const observer = new MutationObserver(() => updateText(draft));
    observer.observe(app,{childList:true,subtree:false});
  }

  $('#syncForm')?.addEventListener('submit',() => {
    setTimeout(refreshButton,1500);
    setTimeout(refreshButton,4000);
  });

  window.addEventListener('focus',refreshButton);

  apply(saved);
  refreshButton();
})();
