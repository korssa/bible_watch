const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

(async ()=>{
  const htmlPath = path.join(__dirname, '..', 'privacy.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'file://' + htmlPath });
  const win = dom.window;
  const doc = win.document;

  // allow inline scripts to run
  await new Promise(r => setTimeout(r, 100));
  function wait(ms){ return new Promise(r=>setTimeout(r, ms)); }

  let codes = [];
  if(win && win.sections && typeof win.sections === 'object'){
    codes = Object.keys(win.sections).filter(Boolean);
  }
  // also pull article ids from DOM to catch any unmapped ones
  const articleIds = Array.from(doc.querySelectorAll('article[id]')).map(a=>a.id).filter(Boolean);
  articleIds.forEach(id=>{ if(!codes.includes(id)) codes.push(id); });

  // quick uniq
  codes = [...new Set(codes)];

  if(codes.length === 0){
    console.error('No language codes found to test');
    process.exit(3);
  }

  async function checkLang(code){
    if(typeof win.setLang !== 'function'){
      return { code, error: 'setLang not defined' };
    }
    try{ win.setLang(code); }catch(e){ return { code, error: 'setLang threw: '+e.message }; }
    await wait(10);

    const dir = doc.documentElement.getAttribute('dir') || '';
    const lang = doc.documentElement.getAttribute('lang') || '';
    const sec = doc.getElementById(code) || (win.sections && win.sections[code]) || null;
    // mirror page's button lookup: exact, btn-<code>, primary mapped variants, prefix match
    let btn = (win.buttons && win.buttons[code]) || doc.getElementById('btn-'+code) || null;
    const primary = (code||'').split('-')[0];
    if(!btn){
      if(primary === 'zh') btn = (win.buttons && win.buttons['zh-CN']) || doc.getElementById('btn-zh-CN') || null;
      if(!btn && primary === 'pt') btn = (win.buttons && win.buttons['pt-BR']) || doc.getElementById('btn-pt-BR') || null;
    }
    if(!btn){
      const q = doc.querySelector('[id^="btn-'+primary+'"]');
      if(q) btn = q;
    }
    const secOk = !!(sec && !sec.classList.contains('hidden'));
    const btnOk = btn ? (btn.classList.contains('lang-active') && btn.getAttribute('aria-pressed') === 'true') : false;

    return { code, dir, lang, secExists: !!sec, secOk, btnExists: !!btn, btnOk };
  }

  const results = [];
  for(const code of codes){
    const res = await checkLang(code);
    results.push(res);
    if(!res.secOk || !res.btnOk){
      console.log('FAIL:', JSON.stringify(res));
    }
  }

  const fails = results.filter(r=>!(r.secOk && r.btnOk) || r.error);
  console.log('\nSUMMARY: tested', results.length, 'languages, failures:', fails.length);
  if(fails.length>0){
    fails.slice(0,50).forEach(f=>console.error('FAILED:', JSON.stringify(f)));
    process.exit(2);
  } else {
    console.log('ALL LANGUAGES PASSED');
    process.exit(0);
  }

})().catch(err=>{ console.error('ERROR', err); process.exit(3); });
