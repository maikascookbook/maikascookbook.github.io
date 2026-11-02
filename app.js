(()=>{'use strict';
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const categories=['Desserts & Baking','Pasta & Rice','Main Courses','Sides & Sauces','To Try'];
const images={'Desserts & Baking':'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1100&q=85','Pasta & Rice':'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1100&q=85','Main Courses':'https://images.unsplash.com/photo-1547592180-85f173990554?w=1100&q=85','Sides & Sauces':'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1100&q=85','To Try':'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1100&q=85'};
const stored=()=>{try{return JSON.parse(localStorage.getItem('maika_recipes')||'null')}catch{return null}};
let recipes=stored()||structuredClone(window.SEED_RECIPES),current='home',filter='All',search='',editing=null,token=null,userId=null;
const config=()=>{try{return JSON.parse(localStorage.getItem('maika_supabase')||'null')}catch{return null}};
function save(){localStorage.setItem('maika_recipes',JSON.stringify(recipes))}
function imageFor(r){return r.image||images[r.category]||images['To Try']}
function card(r){return `<article class="recipe-card" data-open="${esc(r.id)}" tabindex="0"><img loading="lazy" src="${esc(imageFor(r))}" alt="Editorial food inspiration for ${esc(r.title)}"><div class="meta">${esc(r.category)} ${r.time?' · '+esc(r.time):''}</div><h3>${esc(r.title)}</h3><p>${esc(r.description||'A recipe from the kitchen journal.')}</p></article>`}
function home(){
const groups=[
['Pasta','pasta','Pasta & Rice','Classic and cozy recipes for any day.','6'],
['Seafood','seafood','Main Courses','Light, fresh and full of flavour.','4'],
['Rice','rice','Pasta & Rice','From simple sides to hearty mains.','5'],
['Soups & Stews','soups','Main Courses','Warm and nourishing recipes.','3'],
['Meat','meat','Main Courses','Comforting dishes for every occasion.','6'],
['Desserts','desserts','Desserts & Baking','Sweet treats for special moments.','5'],
['Chicken','chicken','Main Courses','Easy, flavourful recipes I love.','4'],
['Other','other','Sides & Sauces','Sides, sauces, drinks and more.','2']];
const latest=recipes.filter(r=>r.category!=='To Try').slice(0,4);
return `<section class="hero updated-hero"><div class="hero-copy"><div class="eyebrow">A personal collection of<br> flavors & memories</div><h1>From my kitchen,<br><em>with love.</em></h1><p>A little journey of learning, loving, and creating, one recipe at a time. Every dish has a story, and every story deserves a beautiful page.</p><button class="solid hero-cta" data-go="library">Explore the recipes &nbsp; →</button></div><div class="hero-photo" role="img" aria-label="A cozy kitchen with a tablet displaying recipes"></div></section>
<section class="welcome-area home-wrap"><div class="eyebrow">Welcome to Maika's Cookbook</div><h2>Recipes, stories and a little bit of growth.</h2><p>This is a collection of the dishes I cook, the recipes I'm learning, the meals that make me feel at home and the special treats I love to share. You'll find everyday meals, comforting classics, new recipes I'm trying, kitchen notes and little stories along the way. It's a space to document my journey in the kitchen and to make good food feel simple, joyful and accessible.</p></section>
<section class="home-wrap index-area"><div class="home-section-head"><div><h2>The cookbook sections</h2><p>Find your favourite recipes, kitchen notes and inspirations by section. Each category brings together recipes, ideas and a little bit of my story behind the dishes.</p></div><button class="text-link" data-go="library">View all recipes&nbsp; →</button></div><div class="illustrated-index">${groups.map(([name,icon,cat,desc,count])=>`<button class="index-tile index-${icon}" data-category="${esc(cat)}" aria-label="Browse ${esc(name)} recipes"><img src="illustration-${icon}.png" alt=""><span class="index-words"><strong>${esc(name)}</strong><small>${esc(desc)}</small><span class="index-count">${count} RECIPES &nbsp; →</span></span><span class="index-arrow">→</span></button>`).join('')}</div></section>
<section class="home-wrap explore-strip"><div class="explore-photo" role="img" aria-label="Pasta with tomatoes and herbs"></div><div class="explore-copy"><div class="eyebrow">Not sure what to cook?</div><h2>Explore all the recipes.</h2><p>Browse by category, check out the latest additions, or find something new for your next meal — whether you're in the mood for something quick, comforting or a little more special.</p><button class="solid" data-go="library">Explore all recipes &nbsp; →</button><div class="handwritten">Good food<br>for every mood. ♡</div></div></section>
<section class="home-wrap latest-area"><div class="home-section-head"><div><h2>Latest recipes</h2><p>My newest additions to the cookbook.</p></div><button class="text-link" data-go="library">View all recipes&nbsp; →</button></div><div class="latest-grid">${latest.map(r=>`<article class="latest-card" data-open="${esc(r.id)}" tabindex="0"><img loading="lazy" src="${esc(imageFor(r))}" alt="${esc(r.title)}"><div class="latest-card-body"><h3>${esc(r.title)}</h3><small>${esc(r.category)}</small><div class="latest-time">${esc(r.time||'From the kitchen journal')} <span>♡</span></div></div></article>`).join('')}</div></section>
<section class="home-wrap closing-banner"><div><h2>More than just recipes...</h2><p>This is a collection of flavours, memories and the people and places that inspire what I cook.</p></div><div class="closing-note">Good food.<br>Better memories. ♡</div></section>`}
function library(){let list=recipes.filter(r=>(filter==='All'||r.category===filter)&&(`${r.title} ${r.description} ${r.ingredients.join(' ')}`.toLowerCase().includes(search.toLowerCase())));return `<div class="container"><div class="browse-head"><div class="eyebrow">The complete collection</div><h1>The Recipe Library</h1><p>Find something wonderful to make.</p></div><input class="search" id="searchRecipes" placeholder="Search recipes or ingredients..." value="${esc(search)}" aria-label="Search recipes"><div class="filters">${['All',...categories].map(c=>`<button class="filter ${filter===c?'active':''}" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}</div><div class="recipe-grid">${list.map(card).join('')}</div>${list.length?'':'<div class="empty">No recipes found. Try another search or add your own.</div>'}</div><div style="height:90px"></div>`}
function recipePage(r){return `<article class="recipe-page"><div class="recipe-title"><div class="eyebrow">${esc(r.category)} · The kitchen journal</div><h1>${esc(r.title)}</h1><p>${esc(r.description)}</p><div class="recipe-tools"><button class="outline small" id="backRecipes">← All recipes</button><button class="outline small" data-edit="${esc(r.id)}">Edit recipe</button>${r.seed?'':`<button class="outline small" data-delete="${esc(r.id)}">Delete</button>`}</div></div><div class="recipe-top"><section class="ingredients"><div class="eyebrow">What you'll need</div><h2>Ingredients</h2><p class="muted">${esc(r.time||'Time not recorded')} ${r.servings?' · '+esc(r.servings):''}</p><ul>${r.ingredients.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><img class="recipe-photo" src="${esc(imageFor(r))}" alt="Editorial inspiration for ${esc(r.title)}"></div><div class="recipe-main"><div class="eyebrow">Step by step</div><h2>The Method</h2><ol class="method-list">${r.method.map(s=>`<li><span>${esc(s)}</span></li>`).join('')}</ol><div class="note-panel"><div class="eyebrow">From the kitchen journal</div><h3>Maika's notes</h3><p>${esc(r.notes||'Add your cooking notes, adjustments and discoveries here.')}</p></div><p class="muted" style="font-size:11px;margin-top:24px">Food imagery is editorial inspiration, not a photograph of the actual dish unless you replace it with your own. Some methods were reconstructed from available cooking notes; missing original details are identified.</p></div></article>`}
function notes(){return `<div class="container"><div class="browse-head"><div class="eyebrow">A personal kitchen diary</div><h1>Kitchen Notes</h1><p>The discoveries that make each recipe my own.</p></div><div class="recipe-grid">${recipes.filter(r=>r.notes).slice(0,18).map(r=>`<article class="note-panel" style="margin:0;cursor:pointer" data-open="${esc(r.id)}"><div class="eyebrow">${esc(r.category)}</div><h3>${esc(r.title)}</h3><p>${esc(r.notes)}</p></article>`).join('')}</div></div><div style="height:90px"></div>`}
function render(){let r=recipes.find(x=>x.id===current);$('#app').innerHTML=current==='home'?home():current==='library'?library():current==='notes'?notes():r?recipePage(r):home();document.querySelectorAll('.navlink').forEach(x=>x.classList.toggle('active',x.dataset.page===current));window.scrollTo(0,0)}
function go(page){current=page;render()}
function openForm(r){editing=r?.id||null;$('#modalTitle').textContent=r?'Edit recipe':'Add a recipe';const f=$('#recipeForm');f.reset();if(r){for(const key of ['title','category','time','servings','description','notes','image'])f.elements[key].value=r[key]||'';f.elements.ingredients.value=r.ingredients.join('\n');f.elements.method.value=r.method.join('\n')}$('#modal').classList.remove('hidden')}
function closeForm(){$('#modal').classList.add('hidden')}
async function persist(r){save();if(!token)return;try{const cfg=config();const body={id:r.id.startsWith('seed-')?userId+'-'+r.id:r.id,user_id:userId,title:r.title,category:r.category,time:r.time,servings:r.servings,description:r.description,ingredients:r.ingredients,method:r.method,notes:r.notes,image:r.image,updated_at:new Date().toISOString()};const res=await fetch(cfg.url+'/rest/v1/recipes',{method:'POST',headers:{apikey:cfg.key,Authorization:'Bearer '+token,'Content-Type':'application/json',Prefer:'resolution=merge-duplicates'},body:JSON.stringify(body)});if(!res.ok)throw Error(await res.text())}catch(e){alert('Saved on this device, but cloud sync failed: '+e.message)}}
async function cloudFetch(){const cfg=config();if(!cfg||!token)return;const res=await fetch(cfg.url+'/rest/v1/recipes?select=*',{headers:{apikey:cfg.key,Authorization:'Bearer '+token}});if(!res.ok)throw Error(await res.text());const remote=await res.json();const map=new Map(recipes.map(r=>[r.id,r]));remote.forEach(r=>{if(r.id.includes('-seed-'))map.delete(r.id.split('-seed-')[1]&&'seed-'+r.id.split('-seed-')[1]);map.set(r.id,r)});recipes=[...map.values()];save();for(const r of recipes.filter(r=>!remote.some(x=>x.id===r.id||x.id===userId+'-'+r.id)))await persist(r);render()}
async function auth(signup){const url=$('#sbUrl').value.trim().replace(/\/$/,''),key=$('#sbKey').value.trim(),email=$('#sbEmail').value.trim(),password=$('#sbPassword').value;if(!url||!key||!email||!password){$('#syncMessage').textContent='Complete all fields first.';return}localStorage.setItem('maika_supabase',JSON.stringify({url,key,email}));$('#syncMessage').textContent='Connecting…';try{const res=await fetch(url+'/auth/v1/'+(signup?'signup':'token?grant_type=password'),{method:'POST',headers:{apikey:key,'Content-Type':'application/json'},body:JSON.stringify({email,password})});const body=await res.json();if(!res.ok)throw Error(body.msg||body.error_description||body.message||'Login failed');if(!body.access_token){$('#syncMessage').textContent='Account created. Check your email to confirm your address, then sign in.';return}token=body.access_token;userId=body.user.id;localStorage.setItem('maika_session',JSON.stringify({token,userId}));await cloudFetch();$('#syncMessage').textContent='Connected! Recipes are now synchronized.';$('#syncBtn').innerHTML='✓ <span>Synced</span>'}catch(e){$('#syncMessage').textContent='Connection failed: '+e.message}}
document.addEventListener('click',async e=>{const t=e.target.closest('[data-page],[data-go],[data-category],[data-filter],[data-open],[data-edit],[data-delete]');if(!t)return;if(t.dataset.page)go(t.dataset.page);else if(t.dataset.go)go(t.dataset.go);else if(t.dataset.category){filter=t.dataset.category;search='';go('library')}else if(t.dataset.filter){filter=t.dataset.filter;render()}else if(t.dataset.open)go(t.dataset.open);else if(t.dataset.edit)openForm(recipes.find(r=>r.id===t.dataset.edit));else if(t.dataset.delete){if(confirm('Delete this recipe?')){recipes=recipes.filter(r=>r.id!==t.dataset.delete);save();go('library')}}});
$('#homeBtn').onclick=()=>go('home');$('#newBtn').onclick=()=>openForm(null);$('#closeModal').onclick=closeForm;$('#cancelForm').onclick=closeForm;document.addEventListener('click',e=>{if(e.target.closest('#backRecipes'))go('library')});$('#syncBtn').onclick=()=>{$('#syncModal').classList.remove('hidden');const c=config();if(c){$('#sbUrl').value=c.url;$('#sbKey').value=c.key;$('#sbEmail').value=c.email||''}};$('#closeSync').onclick=()=>$('#syncModal').classList.add('hidden');$('#signupBtn').onclick=()=>auth(true);$('#syncForm').onsubmit=e=>{e.preventDefault();auth(false)};
$('#recipeForm').onsubmit=async e=>{e.preventDefault();const f=e.target,r=editing?recipes.find(x=>x.id===editing):{id:crypto.randomUUID()};for(const k of ['title','category','time','servings','description','notes','image'])r[k]=f.elements[k].value.trim();r.ingredients=f.elements.ingredients.value.split('\n').map(s=>s.trim()).filter(Boolean);r.method=f.elements.method.value.split('\n').map(s=>s.trim()).filter(Boolean);if(!editing)recipes.unshift(r);closeForm();await persist(r);go(r.id)};
document.addEventListener('input',e=>{if(e.target.id==='searchRecipes'){search=e.target.value;const pos=e.target.selectionStart;render();const input=$('#searchRecipes');input.focus();input.setSelectionRange(pos,pos)}});$('#exportBtn').onclick=()=>{const blob=new Blob([JSON.stringify(recipes,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='maikas-cookbook-backup.json';a.click();URL.revokeObjectURL(a.href)};$('#importFile').onchange=async e=>{try{const file=e.target.files[0];if(!file)return;const parsed=JSON.parse(await file.text());if(!Array.isArray(parsed))throw Error('Not a recipe list');recipes=parsed;save();render();alert('Backup imported successfully')}catch(err){alert('Could not import: '+err.message)}};
/* MAIKA'S COOKBOOK — CLOUD SYNC SAFETY FIX
   Paste immediately BEFORE the existing line beginning "const session=" in app.js.
   Keep the rest of app.js unchanged. */
{
  let refreshToken = null, expiresAt = 0, busy = false;
  const dirty = () => { try { return JSON.parse(localStorage.getItem('maika_dirty') || '[]'); } catch { return []; } };
  const removed = () => { try { return JSON.parse(localStorage.getItem('maika_deleted') || '[]'); } catch { return []; } };
  const setDirty = ids => localStorage.setItem('maika_dirty', JSON.stringify([...new Set(ids)]));
  const setRemoved = ids => localStorage.setItem('maika_deleted', JSON.stringify([...new Set(ids)]));
  const remoteId = id => id.startsWith('seed-') ? userId + '-' + id : id;
  const localId = id => userId && id.startsWith(userId + '-seed-') ? id.slice(userId.length + 1) : id;
  function setSession(data) {
    token = data.access_token;
    userId = data.user?.id || userId;
    refreshToken = data.refresh_token || refreshToken;
    expiresAt = Date.now() + (Number(data.expires_in) || 3600) * 1000;
    localStorage.setItem('maika_session', JSON.stringify({token, userId, refreshToken, expiresAt}));
  }
  async function renew() {
    const cfg = config();
    if (!refreshToken || !cfg) throw Error('Session expired. Please sign in again.');
    const response = await fetch(cfg.url + '/auth/v1/token?grant_type=refresh_token', {
      method:'POST', headers:{apikey:cfg.key,'Content-Type':'application/json'},
      body:JSON.stringify({refresh_token:refreshToken})
    });
    const data = await response.json();
    if (!response.ok || !data.access_token) throw Error('Session expired. Please sign in again.');
    setSession(data);
  }
  async function request(path, opts={}) {
    const cfg = config();
    if (!cfg || !token) throw Error('Not connected');
    if (expiresAt && Date.now() > expiresAt - 60000) await renew();
    const call = () => fetch(cfg.url + path, {
      ...opts, headers:{apikey:cfg.key, Authorization:'Bearer '+token, ...opts.headers}
    });
    let response = await call();
    if (response.status === 401 && refreshToken) { await renew(); response = await call(); }
    if (!response.ok) throw Error((await response.text()).slice(0,400));
    return response;
  }
  function asRow(r) {
    return {
      id:remoteId(r.id), user_id:userId, title:r.title || '', category:r.category || '',
      time:r.time || '', servings:r.servings || '', description:r.description || '',
      ingredients:r.ingredients || [], method:r.method || [],
      notes:r.notes || '', image:r.image || '', updated_at:new Date().toISOString()
    };
  }
  async function upload(r) {
    await request('/rest/v1/recipes', {
      method:'POST', headers:{'Content-Type':'application/json',Prefer:'resolution=merge-duplicates'},
      body:JSON.stringify(asRow(r))
    });
    setDirty(dirty().filter(id => id !== r.id));
  }
  async function uploadDeletes() {
    for (const id of removed()) {
      await request('/rest/v1/recipes?id=eq.' + encodeURIComponent(remoteId(id)), {method:'DELETE'});
      setRemoved(removed().filter(x => x !== id));
    }
  }
  persist = async function(r) {
    setDirty([...dirty(),r.id]);
    save();
    if (!token) return;
    try { await upload(r); $('#syncBtn').innerHTML='✓ <span>Synced</span>'; }
    catch (e) {
      $('#syncBtn').innerHTML='☁ <span>Sync pending</span>';
      console.warn('Saved locally, cloud sync pending:', e);
    }
  };
  cloudFetch = async function() {
    if (busy || !token) return;
    busy = true;
    try {
      const savedSession = JSON.parse(localStorage.getItem('maika_session') || 'null');
      if (savedSession) {
        refreshToken = savedSession.refreshToken || refreshToken;
        expiresAt = savedSession.expiresAt || expiresAt;
      }
      const response = await request('/rest/v1/recipes?select=*');
      const rows = await response.json();
      if (rows.length === 0) {
        // First connection: protect the finished iPad recipes by uploading them first.
        await uploadDeletes();
        for (const r of recipes) await upload(r);
      } else {
        // Other devices: cloud is authoritative, except locally edited recipes pending upload.
        const pending = new Set(dirty()), tombstones = new Set(removed());
        const local = new Map(recipes.map(r => [r.id,r]));
        const remote = new Map(rows.map(row => {
          const id = localId(row.id);
          return [id,{
            id,title:row.title,category:row.category,time:row.time,
            servings:row.servings,description:row.description,
            ingredients:row.ingredients || [],method:row.method || [],
            notes:row.notes || '',image:row.image || '',
            seed:id.startsWith('seed-')
          }];
        }));
        const merged = [];
        for (const [id,r] of remote) {
          if (!tombstones.has(id)) merged.push(pending.has(id) && local.has(id) ? local.get(id) : r);
        }
        for (const r of recipes) {
          if (!remote.has(r.id) && !tombstones.has(r.id) &&
              (pending.has(r.id) || !r.id.startsWith('seed-'))) merged.push(r);
        }
        recipes = merged;
        save();
        render();
        await uploadDeletes();
        for (const r of recipes) {
          if (pending.has(r.id) || (!remote.has(r.id) && !r.id.startsWith('seed-'))) await upload(r);
        }
      }
      $('#syncBtn').innerHTML='✓ <span>Synced</span>';
    } catch(e) {
      $('#syncBtn').innerHTML='☁ <span>Sync pending</span>';
      console.warn('Sync will retry:',e);
      throw e;
    } finally { busy = false; }
  };
  auth = async function(signup) {
    const url=$('#sbUrl').value.trim().replace(/\/$/,''),
      key=$('#sbKey').value.trim(), email=$('#sbEmail').value.trim(),
      password=$('#sbPassword').value;
    if (!url || !key || !email || !password) {
      $('#syncMessage').textContent='Complete all fields first.'; return;
    }
    localStorage.setItem('maika_supabase',JSON.stringify({url,key,email}));
    $('#syncMessage').textContent='Connecting…';
    try {
      const response=await fetch(url+'/auth/v1/'+(signup?'signup':'token?grant_type=password'),{
        method:'POST',headers:{apikey:key,'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
      });
      const data=await response.json();
      if(!response.ok) throw Error(data.msg||data.error_description||data.message||'Login failed');
      if(!data.access_token){
        $('#syncMessage').textContent='Account created. Confirm your email, then use Sign in & sync.';
        return;
      }
      setSession(data);
      await cloudFetch();
      $('#syncMessage').textContent='Connected! Your cookbook is synchronized.';
      $('#sbPassword').value='';
    }catch(e){$('#syncMessage').textContent='Connection failed: '+e.message;}
  };
  // A deleted custom recipe must also be removed from the cloud.
  document.addEventListener('click', e => {
    const button=e.target.closest('[data-delete]');
    if (!button) return;
    const id=button.dataset.delete;
    // The existing handler asks for confirmation; record deletion after it completes.
    queueMicrotask(() => {
      if (!recipes.some(r => r.id === id)) {
        setRemoved([...removed(),id]);
        setDirty(dirty().filter(x => x !== id));
        if(token) cloudFetch().catch(()=>{});
      }
    });
  }, true);
  // Imported backups should be treated as local edits and uploaded.
  const oldImport=$('#importFile').onchange;
  $('#importFile').onchange=async e => {
    await oldImport(e);
    setDirty([...dirty(),...recipes.map(r => r.id)]);
    if(token) cloudFetch().catch(()=>{});
  };
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && token) cloudFetch().catch(()=>{});
  });
  window.addEventListener('focus', () => {
    if (token) cloudFetch().catch(()=>{});
  });
  setInterval(() => {
    if (token && !document.hidden) cloudFetch().catch(()=>{});
  },60000);
}
const session=(()=>{try{return JSON.parse(localStorage.getItem('maika_session'))}catch{return null}})();if(session){token=session.token;userId=session.userId;cloudFetch().catch(()=>{$('#syncBtn').innerHTML='☁ <span>Sync</span>'})}save();render();if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
})();
