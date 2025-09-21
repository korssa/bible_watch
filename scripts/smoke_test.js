const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

(async ()=>{
  const htmlPath = path.join(__dirname, '..', 'privacy.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  // Load DOM and execute inline scripts
  const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'file://' + htmlPath });
  const win = dom.window;
  const doc = win.document;

  // allow inline scripts to run
  await new Promise(r => setTimeout(r, 100));

  function wait(ms){ return new Promise(r=>setTimeout(r, ms)); }

  async function checkLang(code, expectRtl=false){
    if(typeof win.setLang !== 'function'){
      return { code, error: 'setLang not defined' };
    }
    try{
      win.setLang(code);
    }catch(e){
      return { code, error: 'setLang threw: '+e.message };
    }
    await wait(20);
    const dir = doc.documentElement.getAttribute('dir') || '';
    const lang = doc.documentElement.getAttribute('lang') || '';
    const sec = doc.getElementById(code);
    const btn = (win.buttons && win.buttons[code]) || doc.getElementById('btn-'+code) || null;

    const secOk = !!(sec && !sec.classList.contains('hidden'));
    const dirOk = expectRtl ? dir === 'rtl' : (dir === 'ltr' || dir === '');
    const select = doc.getElementById('languageSelect');
    const selectOk = select ? select.value === lang : false;

    return { code, dir, lang, secExists: !!sec, secOk, dirOk, selectExists: !!select, selectOk, selectValue: select ? select.value : null };
  }

  const tests = [
    { code: 'ar-SA', rtl: true },
    { code: 'en-IN', rtl: false },
    { code: 'es-AR', rtl: false }
  ];

  let allPass = true;
  for(const t of tests){
    const res = await checkLang(t.code, t.rtl);
    console.log('TEST RESULT:', JSON.stringify(res));
    if(res.error) allPass = false;
    if(!(res.secOk && res.dirOk && res.selectOk)) allPass = false;
  }

  if(allPass){
    console.log('SMOKE TEST PASSED');
    process.exit(0);
  } else {
    console.error('SMOKE TEST FAILED');
    process.exit(2);
  }

})().catch(err=>{ console.error('ERROR', err); process.exit(3); });
