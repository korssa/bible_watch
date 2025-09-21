// language buttons (cache all button elements)
// language buttons (cache all button elements)
const btnIds = [
  'btn-en','btn-ko','btn-ja','btn-es','btn-zh-CN','btn-pt-BR','btn-fr','btn-de','btn-ru','btn-ar',
  'btn-id','btn-tr','btn-it','btn-nl','btn-hi','btn-th','btn-pl','btn-sv','btn-cs','btn-hu',
  'btn-ro','btn-uk','btn-vi','btn-ms','btn-tl','btn-el','btn-bg','btn-da','btn-fi','btn-nb',
  'btn-he','btn-fa','btn-bn','btn-pa','btn-ta','btn-ur','btn-mk','btn-hr','btn-sr','btn-sl','btn-sk','btn-lt','btn-lv','btn-et','btn-is','btn-sq','btn-kk','btn-uz','btn-az','btn-mn','btn-ne','btn-si','btn-km','btn-lo','btn-my','btn-am','btn-af','btn-sw','btn-so','btn-zu','btn-xh','btn-ig','btn-yo','btn-ha','btn-ga','btn-cy','btn-mr','btn-gu','btn-kn','btn-ml','btn-te','btn-or','btn-ps','btn-sd','btn-ht','btn-lb','btn-be','btn-bs','btn-ka','btn-ky','btn-tg','btn-tk','btn-tt','btn-mt','btn-eu','btn-br',
  'btn-hy','btn-co','btn-ceb','btn-gl','btn-oc','btn-la','btn-mg','btn-ln','btn-ss','btn-ku'
];
btnIds.push('btn-jv','btn-su','btn-eo','btn-rw','btn-ny','btn-wo','btn-gn','btn-sm','btn-ty','btn-fj');
// newly added in this batch
btnIds.push('btn-mi','btn-yi','btn-rm','btn-sc','btn-fy','btn-se','btn-nn','btn-gd','btn-sn','btn-tn');
// appended next sequential batch
btnIds.push('btn-zh-TW','btn-en-GB','btn-pt-PT','btn-es-MX','btn-de-AT','btn-fr-CA','btn-ar-EG','btn-zh-HK','btn-it-CH','btn-en-AU');
// newly confirmed batch
btnIds.push('btn-en-CA','btn-es-AR','btn-fr-BE','btn-de-CH','btn-nl-BE','btn-pt-AO','btn-ar-SA','btn-zh-SG','btn-en-IN','btn-es-PE');
const btns = {};
btnIds.forEach(id=>{ const el = document.getElementById(id); if(el) btns[id]=el; });

// language sections map
const sections = {
  'en': document.getElementById('en'),
  'ko': document.getElementById('ko'),
  'ja': document.getElementById('ja'),
  'es': document.getElementById('es'),
  'zh-CN': document.getElementById('zh'),
  'pt-BR': document.getElementById('pt'),
  'fr': document.getElementById('fr'),
  'de': document.getElementById('de'),
  'ru': document.getElementById('ru'),
  'ar': document.getElementById('ar'),
  'id': document.getElementById('id'),
  'tr': document.getElementById('tr'),
  'it': document.getElementById('it'),
  'nl': document.getElementById('nl'),
  'hi': document.getElementById('hi'),
  'th': document.getElementById('th'),
  'pl': document.getElementById('pl'),
  'sv': document.getElementById('sv'),
  'cs': document.getElementById('cs'),
  'hu': document.getElementById('hu'),
  'ro': document.getElementById('ro'),
  'uk': document.getElementById('uk'),
  'vi': document.getElementById('vi'),
  'ms': document.getElementById('ms'),
  'tl': document.getElementById('tl'),
  'el': document.getElementById('el'),
  'bg': document.getElementById('bg'),
  'da': document.getElementById('da'),
  'fi': document.getElementById('fi'),
  'nb': document.getElementById('nb'),
  'he': document.getElementById('he'),
  'fa': document.getElementById('fa'),
  'bn': document.getElementById('bn'),
  'pa': document.getElementById('pa'),
  'ta': document.getElementById('ta'),
  'ur': document.getElementById('ur'),
  'mk': document.getElementById('mk'),
  'hr': document.getElementById('hr'),
  'sr': document.getElementById('sr'),
  'sl': document.getElementById('sl'),
  'sk': document.getElementById('sk'),
  'lt': document.getElementById('lt'),
  'lv': document.getElementById('lv'),
  'et': document.getElementById('et'),
  'is': document.getElementById('is'),
  'sq': document.getElementById('sq'),
  'hy': document.getElementById('hy'),
  'co': document.getElementById('co'),
  'ceb': document.getElementById('ceb'),
  'gl': document.getElementById('gl'),
  'oc': document.getElementById('oc'),
  'la': document.getElementById('la'),
  'mg': document.getElementById('mg'),
  'ln': document.getElementById('ln'),
  'ss': document.getElementById('ss'),
  'ku': document.getElementById('ku'),
  'kk': document.getElementById('kk'),
  'uz': document.getElementById('uz'),
  'az': document.getElementById('az'),
  'mn': document.getElementById('mn'),
  'ne': document.getElementById('ne'),
  'si': document.getElementById('si'),
  'km': document.getElementById('km'),
  'lo': document.getElementById('lo'),
  'my': document.getElementById('my'),
  'am': document.getElementById('am'),
  'af': document.getElementById('af'),
  'sw': document.getElementById('sw'),
  'so': document.getElementById('so'),
  'zu': document.getElementById('zu'),
  'xh': document.getElementById('xh'),
  'ig': document.getElementById('ig'),
  'yo': document.getElementById('yo'),
  'ha': document.getElementById('ha'),
  'ga': document.getElementById('ga'),
  'cy': document.getElementById('cy'),
  'be': document.getElementById('be'),
  'bs': document.getElementById('bs'),
  'ka': document.getElementById('ka'),
  'ky': document.getElementById('ky'),
  'tg': document.getElementById('tg'),
  'tk': document.getElementById('tk'),
  'tt': document.getElementById('tt'),
  'mt': document.getElementById('mt'),
  'eu': document.getElementById('eu'),
  'br': document.getElementById('br')
  , 'jv': document.getElementById('jv')
  , 'su': document.getElementById('su')
  , 'eo': document.getElementById('eo')
  , 'rw': document.getElementById('rw')
  , 'ny': document.getElementById('ny')
  , 'wo': document.getElementById('wo')
  , 'gn': document.getElementById('gn')
  , 'sm': document.getElementById('sm')
  , 'ty': document.getElementById('ty')
  , 'fj': document.getElementById('fj')
  , 'mi': document.getElementById('mi')
  , 'yi': document.getElementById('yi')
  , 'rm': document.getElementById('rm')
  , 'sc': document.getElementById('sc')
  , 'fy': document.getElementById('fy')
  , 'se': document.getElementById('se')
  , 'nn': document.getElementById('nn')
  , 'gd': document.getElementById('gd')
  , 'sn': document.getElementById('sn')
  , 'tn': document.getElementById('tn')
  , 'zh-TW': document.getElementById('zh-TW')
  , 'en-GB': document.getElementById('en-GB')
  , 'pt-PT': document.getElementById('pt-PT')
  , 'es-MX': document.getElementById('es-MX')
  , 'de-AT': document.getElementById('de-AT')
  , 'fr-CA': document.getElementById('fr-CA')
  , 'ar-EG': document.getElementById('ar-EG')
  , 'zh-HK': document.getElementById('zh-HK')
  , 'it-CH': document.getElementById('it-CH')
  , 'en-AU': document.getElementById('en-AU')
  , 'en-CA': document.getElementById('en-CA')
  , 'es-AR': document.getElementById('es-AR')
  , 'fr-BE': document.getElementById('fr-BE')
  , 'de-CH': document.getElementById('de-CH')
  , 'nl-BE': document.getElementById('nl-BE')
  , 'pt-AO': document.getElementById('pt-AO')
  , 'ar-SA': document.getElementById('ar-SA')
  , 'zh-SG': document.getElementById('zh-SG')
  , 'en-IN': document.getElementById('en-IN')
  , 'es-PE': document.getElementById('es-PE')
};

// button map keyed by language code (map to btn elements cached above)
const buttons = {
  'en': btns['btn-en'], 'ko': btns['btn-ko'], 'ja': btns['btn-ja'], 'es': btns['btn-es'],
  'zh-CN': btns['btn-zh-CN'], 'pt-BR': btns['btn-pt-BR'], 'fr': btns['btn-fr'], 'de': btns['btn-de'],
  'ru': btns['btn-ru'], 'ar': btns['btn-ar'], 'id': btns['btn-id'], 'tr': btns['btn-tr'],
  'it': btns['btn-it'], 'nl': btns['btn-nl'], 'hi': btns['btn-hi'], 'th': btns['btn-th'],
  'pl': btns['btn-pl'], 'sv': btns['btn-sv'], 'cs': btns['btn-cs'], 'hu': btns['btn-hu'],
  'ro': btns['btn-ro'], 'uk': btns['btn-uk'], 'vi': btns['btn-vi'], 'ms': btns['btn-ms'],
  'tl': btns['btn-tl'], 'el': btns['btn-el'], 'bg': btns['btn-bg'], 'da': btns['btn-da'],
  'fi': btns['btn-fi'], 'nb': btns['btn-nb'], 'he': btns['btn-he'], 'fa': btns['btn-fa'],
  'bn': btns['btn-bn'], 'pa': btns['btn-pa'], 'ta': btns['btn-ta'], 'ur': btns['btn-ur'],
  'mk': btns['btn-mk'], 'hr': btns['btn-hr'], 'sr': btns['btn-sr'], 'sl': btns['btn-sl'], 'sk': btns['btn-sk'], 'lt': btns['btn-lt'], 'lv': btns['btn-lv'], 'et': btns['btn-et'], 'is': btns['btn-is'], 'sq': btns['btn-sq'],
  'kk': btns['btn-kk'], 'uz': btns['btn-uz'], 'az': btns['btn-az'], 'mn': btns['btn-mn'], 'ne': btns['btn-ne'], 'si': btns['btn-si'], 'km': btns['btn-km'], 'lo': btns['btn-lo'], 'my': btns['btn-my'], 'am': btns['btn-am'],
  'af': btns['btn-af'], 'sw': btns['btn-sw'], 'so': btns['btn-so'], 'zu': btns['btn-zu'], 'xh': btns['btn-xh'], 'ig': btns['btn-ig'], 'yo': btns['btn-yo'], 'ha': btns['btn-ha'], 'ga': btns['btn-ga'], 'cy': btns['btn-cy'],
  'mr': btns['btn-mr'], 'gu': btns['btn-gu'], 'kn': btns['btn-kn'], 'ml': btns['btn-ml'], 'te': btns['btn-te'], 'or': btns['btn-or'], 'ps': btns['btn-ps'], 'sd': btns['btn-sd'], 'ht': btns['btn-ht'], 'lb': btns['btn-lb'],
  'be': btns['btn-be'], 'bs': btns['btn-bs'], 'ka': btns['btn-ka'], 'ky': btns['btn-ky'], 'tg': btns['btn-tg'], 'tk': btns['btn-tk'], 'tt': btns['btn-tt'], 'mt': btns['btn-mt'], 'eu': btns['btn-eu'], 'br': btns['btn-br'],
  'hy': btns['btn-hy'], 'co': btns['btn-co'], 'ceb': btns['btn-ceb'], 'gl': btns['btn-gl'], 'oc': btns['btn-oc'], 'la': btns['btn-la'], 'mg': btns['btn-mg'], 'ln': btns['btn-ln'], 'ss': btns['btn-ss'], 'ku': btns['btn-ku']
  , 'jv': btns['btn-jv'], 'su': btns['btn-su'], 'eo': btns['btn-eo'], 'rw': btns['btn-rw'], 'ny': btns['btn-ny'], 'wo': btns['btn-wo'], 'gn': btns['btn-gn'], 'sm': btns['btn-sm'], 'ty': btns['btn-ty'], 'fj': btns['btn-fj']
  , 'mi': btns['btn-mi'], 'yi': btns['btn-yi'], 'rm': btns['btn-rm'], 'sc': btns['btn-sc'], 'fy': btns['btn-fy'], 'se': btns['btn-se'], 'nn': btns['btn-nn'], 'gd': btns['btn-gd'], 'sn': btns['btn-sn'], 'tn': btns['btn-tn']
  , 'zh-TW': btns['btn-zh-TW'], 'en-GB': btns['btn-en-GB'], 'pt-PT': btns['btn-pt-PT'], 'es-MX': btns['btn-es-MX'], 'de-AT': btns['btn-de-AT'], 'fr-CA': btns['btn-fr-CA'], 'ar-EG': btns['btn-ar-EG'], 'zh-HK': btns['btn-zh-HK'], 'it-CH': btns['btn-it-CH'], 'en-AU': btns['btn-en-AU']
};
// helper functions: hide sections, RTL detection, and language setter
function hideAll(){
  Object.values(sections).forEach(s=>s && s.classList.add('hidden'));
  Object.values(buttons).forEach(b=>b && b.classList.remove('lang-active'));
  Object.values(buttons).forEach(b=>b && b.setAttribute('aria-pressed','false'));
}

function isRtl(lang){
  return ['ar','he','fa','ur'].includes((lang||'').split('-')[0]);
}

function setLang(lang){
  // prefer full match; fall back to primary subtag — try DOM lookups when sections map misses entries
  if(!sections[lang]){
    const el = document.getElementById(lang);
    if(el) sections[lang] = el;
  }
  if(!sections[lang]){
    const primary = (lang||'').split('-')[0];
    const pEl = document.getElementById(primary);
    if(pEl){ sections[primary] = pEl; lang = primary; }
    else {
      if(primary === 'zh'){
        lang = 'zh-CN';
      } else if(primary === 'pt'){
        lang = 'pt-BR';
      } else if(['ko','ja','es','fr','de','ru','ar','id','tr','it','nl','hi','th','pl','sv','cs','hu','ro','uk','vi','ms','tl','el','bg','da','fi','nb','he','fa','bn','pa','ta','ur'].includes(primary)){
        lang = primary;
      } else {
        lang = 'en';
      }
    }
  }
  hideAll();
  const sec = sections[lang] || sections['en'];
  // robust button lookup: exact, mapped regional variants, then querySelector prefix match
  let btn = buttons[lang] || document.getElementById('btn-'+lang) || null;
  const primary = (lang||'').split('-')[0];
  if(!btn){
    if(primary === 'zh') btn = buttons['zh-CN'] || document.getElementById('btn-zh-CN') || null;
    if(!btn && primary === 'pt') btn = buttons['pt-BR'] || document.getElementById('btn-pt-BR') || null;
  }
  if(!btn){
    const q = document.querySelector('[id^="btn-'+primary+'"]');
    if(q) btn = q;
  }
  if(!btn) btn = buttons['en'];
  if(sec){
    sec.classList.remove('hidden');
    try{ sec.setAttribute('tabindex','-1'); }catch(e){}
    try{ sec.scrollIntoView({ behavior: 'auto', block: 'start' }); }catch(e){}
    try{ sec.focus(); }catch(e){}
  }
  if(btn) { btn.classList.add('lang-active'); btn.setAttribute('aria-pressed','true'); }
  document.documentElement.lang = lang;
  document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr';
}
// wire buttons
Object.keys(buttons).forEach(code=>{
  const b = buttons[code];
  if(b) b.addEventListener('click',()=>setLang(code));
});

// detect URL param ?lang=xx
function paramLang(){
  try{ const p = new URLSearchParams(location.search); return p.get('lang'); }
  catch(e){ return null }
}

// find best match from navigator.languages
function browserPreferred(){
  const nl = navigator.languages || [navigator.language || 'en'];
  for(const code of nl){
    const c = code.toLowerCase();
    if(c.startsWith('ko')) return 'ko';
    if(c.startsWith('ja')) return 'ja';
    if(c.startsWith('zh')) return 'zh-CN';
    if(c.startsWith('es')) return 'es';
    if(c.startsWith('pt')) return 'pt-BR';
    if(c.startsWith('fr')) return 'fr';
    if(c.startsWith('de')) return 'de';
    if(c.startsWith('ru')) return 'ru';
    if(c.startsWith('ar')) return 'ar';
    if(c.startsWith('id') || c.startsWith('in')) return 'id';
    if(c.startsWith('tr')) return 'tr';
    if(c.startsWith('it')) return 'it';
    if(c.startsWith('nl')) return 'nl';
    if(c.startsWith('hi')) return 'hi';
    if(c.startsWith('th')) return 'th';
    if(c.startsWith('pl')) return 'pl';
    if(c.startsWith('sv')) return 'sv';
    if(c.startsWith('cs')) return 'cs';
    if(c.startsWith('hu')) return 'hu';
    if(c.startsWith('ro')) return 'ro';
    if(c.startsWith('uk')) return 'uk';
    if(c.startsWith('vi')) return 'vi';
    if(c.startsWith('ms')) return 'ms';
    if(c.startsWith('tl') || c.startsWith('fil')) return 'tl';
    if(c.startsWith('el')) return 'el';
    if(c.startsWith('bg')) return 'bg';
    if(c.startsWith('da')) return 'da';
    if(c.startsWith('fi')) return 'fi';
    if(c.startsWith('nb') || c.startsWith('no')) return 'nb';
    if(c.startsWith('he') || c.startsWith('iw')) return 'he';
    if(c.startsWith('fa')) return 'fa';
    if(c.startsWith('bn')) return 'bn';
    if(c.startsWith('pa')) return 'pa';
    if(c.startsWith('ta')) return 'ta';
    if(c.startsWith('ur')) return 'ur';
    if(c.startsWith('en')) return 'en';
  }
  return 'en';
}

(function init(){
  const p = paramLang();
  if(p){ setLang(p); return; }
  const preferred = browserPreferred();
  setLang(preferred);
  // Optionally update URL without reloading to be crawl-friendly
  try{
    const url = new URL(location.href);
    url.searchParams.set('lang', preferred);
    history.replaceState(null,'',url);
  }catch(e){ /* ignore */ }
})();