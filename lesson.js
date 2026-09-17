// Lesson mode for the Useful sentences app. Data: lessons.js (LESSONS_DATA) + frases.js (SENTENCES).
(function () {
  if (document.body.classList.contains('embed') || typeof LESSONS_DATA === 'undefined') return;
  const root = document.getElementById('viewLesson'), sentView = document.getElementById('viewSentences');
  const tabL = document.getElementById('tabLesson'), tabS = document.getElementById('tabSent');
  const US = window.US;
  const store = { get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }, del(k) { try { sessionStorage.removeItem(k); } catch (e) {} } };
  // Teacher mode: open the app once with ?teacher=1 (off again with ?teacher=0)
  const qp = new URLSearchParams(location.search).get('teacher');
  try { if (qp === '1') localStorage.setItem('us_teacher', '1'); if (qp === '0') localStorage.removeItem('us_teacher'); } catch (e) {}
  let TEACHER = qp === '1'; try { TEACHER = TEACHER || localStorage.getItem('us_teacher') === '1'; } catch (e) {}

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = s => esc(s).replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>').replace(/(^|[\s(])_([^_]+)_(?=$|[\s).,])/g, '$1<i>$2</i>');
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

  // ---------- timers
  let ticking = null;
  function makeTimer(label, minutes) {
    const total = Math.round(minutes * 60); let left = total, t0 = 0, run = false;
    const b = el('button', 'timer'); b.type = 'button';
    const fmt = s => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    const paint = () => { b.innerHTML = '<i></i>' + (label ? esc(label) + ' · ' : '') + (left === total && !run ? minutes + ' min' : fmt(Math.max(0, left))); b.classList.toggle('on', run); b.classList.toggle('done', left <= 0); };
    function stop() { run = false; if (ticking && ticking.b === b) { clearInterval(ticking.id); ticking = null; } paint(); }
    function beep() { try { const C = new (window.AudioContext || window.webkitAudioContext)(); [0, .35, .7].forEach(d => { const o = C.createOscillator(), g = C.createGain(); o.frequency.value = 880; o.connect(g); g.connect(C.destination); g.gain.setValueAtTime(.25, C.currentTime + d); g.gain.exponentialRampToValueAtTime(.001, C.currentTime + d + .25); o.start(C.currentTime + d); o.stop(C.currentTime + d + .26); }); } catch (e) {} if (navigator.vibrate) navigator.vibrate([300, 150, 300]); }
    b.addEventListener('click', () => {
      if (left <= 0) { left = total; stop(); return; }
      if (run) { stop(); return; }
      if (ticking) { clearInterval(ticking.id); ticking.b.classList.remove('on'); ticking = null; }
      run = true; const end = Date.now() + left * 1000;
      ticking = { b, id: setInterval(() => { left = Math.round((end - Date.now()) / 1000); if (left <= 0) { left = 0; stop(); beep(); } paint(); }, 250) }; paint();
    });
    b.addEventListener('dblclick', () => { left = total; stop(); });
    paint(); return b;
  }

  // ---------- blocks
  const sentOf = blocks => SENTENCES.filter(s => blocks.includes(s.block));
  function useful(bk) {
    const box = el('div', 'ul'); box.appendChild(el('div', 'cap', 'Useful language · tap, listen, say it'));
    const groups = new Map(); sentOf(bk.blocks).forEach(s => { if (!groups.has(s.fn)) groups.set(s.fn, []); groups.get(s.fn).push(s); });
    groups.forEach((arr, name) => { box.appendChild(el('div', 'group', esc(name))); const ul = el('ul'); arr.forEach(s => { const li = el('li'); li.appendChild(US.sayButton(s, false)); ul.appendChild(li); }); box.appendChild(ul); });
    return box;
  }
  function stars(card) { for (let i = 0; i < 26; i++) { const s = el('span', 'star'); const z = (Math.random() * 2 + 1).toFixed(1); s.style.cssText = `width:${z}px;height:${z}px;left:${Math.random() * 100}%;top:${Math.random() * 100}%;opacity:${(Math.random() * .5 + .15).toFixed(2)}`; card.appendChild(s); } }
  function signCard(s, mode) {
    const c = el('div', 'cosmic');
    c.innerHTML = `<div class="glyph">${s.g}︎</div><div class="name">${esc(s.n)}</div><div class="dates">${esc(s.d)}</div>` +
      (mode === 'pred' ? `<p class="pred">${md(s.p)}</p><div class="foot">Your professional year 2026-27 · September to June</div>` : `<div class="trait">${esc(s.t)}</div><div class="elem">${esc(s.e)} sign</div>`);
    stars(c); return c;
  }
  function faceCard(f, i) {
    const c = el('div', 'cosmic face'); let open = false;
    const paint = () => { c.innerHTML = `<div class="dates">${i + 1} / 12 · ${esc(f.sub)}</div><div class="name">${esc(f.title)}</div><ul>${f.body.map(x => '<li>' + md(x) + '</li>').join('')}</ul><div class="ans">${open ? esc(f.answer) : 'Guess the sign. Tap to check.'}</div>`; stars(c); };
    c.addEventListener('click', () => { open = !open; paint(); }); paint(); return c;
  }
  function carousel(L, bk) {
    const deck = L.decks[bk.deck], box = el('div', 'car'), stage = el('div'); let i = 0;
    const row = el('div', 'row2'), prev = el('button', 'nav', '&#8249;'), next = el('button', 'nav', '&#8250;'), dots = el('div', 'dots');
    prev.type = next.type = 'button'; prev.setAttribute('aria-label', 'Previous'); next.setAttribute('aria-label', 'Next');
    deck.forEach((_, k) => { const d = el('i'); d.addEventListener('click', () => go(k)); dots.appendChild(d); });
    function go(k) { i = (k + deck.length) % deck.length; stage.innerHTML = ''; stage.appendChild(bk.mode === 'faces' ? faceCard(deck[i], i) : signCard(deck[i], 'trait')); [...dots.children].forEach((d, n) => d.classList.toggle('on', n === i)); }
    prev.addEventListener('click', () => go(i - 1)); next.addEventListener('click', () => go(i + 1));
    let x0 = null; stage.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', e => { if (x0 == null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 45) go(i + (dx < 0 ? 1 : -1)); x0 = null; });
    row.append(prev, dots, next); box.append(stage, row); go(0); return box;
  }
  function pick(L, bk, key) {
    const deck = L.decks[bk.deck], box = el('div'), grid = el('div', 'signgrid'), stage = el('div');
    box.appendChild(el('div', 'ul', `<div class="cap">${esc(bk.label)}</div>`));
    deck.forEach((s, k) => { const b = el('button', '', `<span>${s.g}︎</span>${esc(s.n)}`); b.type = 'button'; b.setAttribute('aria-pressed', 'false'); b.addEventListener('click', () => show(k)); grid.appendChild(b); });
    function show(k) { store.set(key, String(k)); [...grid.children].forEach((b, n) => b.setAttribute('aria-pressed', String(n === k))); stage.innerHTML = ''; stage.appendChild(signCard(deck[k], 'pred')); }
    box.append(grid, stage); const saved = store.get(key); if (saved != null && deck[+saved]) show(+saved); return box;
  }
  function cardHTML(L, role, c) {
    if (role.kind === 'employer') return `<h4>You are hiring for: ${esc(c.role)}.</h4><p>Secretly, you want to hire <span class="secret">${esc(c.wants)}</span> because the role requires ${esc(c.because)}</p><p><b>Company policy: you can NEVER ask the sign or the birthday.</b> Find out with indirect questions:</p><ul>${c.qs.map(q => '<li>' + esc(q) + '</li>').join('')}</ul><p><b>Clues that you have found your ${esc(c.sign)}:</b> ${esc(c.clues)}</p><p><b>At the end, say:</b> "I suspect you might be a... because..." Then decide: hire or not?</p>`;
    if (role.kind === 'candidate') return `<h4>${esc(c.name)}</h4><p><b>Training:</b> ${esc(c.training)}</p><p><b>Your strengths:</b> ${esc(c.strengths)}</p><p><b>A habit you can mention:</b> ${esc(c.habit)}</p><p><b>Your sign (secret):</b> <span class="secret">${esc(c.sign)}</span></p><p><i>Sell your real skills. Do not say your sign. If the manager asks, remind them of company policy.</i></p>`;
    if (role.kind === 'static') { const d = L.decks[role.deck]; return `<h4>The consultant</h4>${d.script.map(x => '<p>' + md(x) + '</p>').join('')}<table>${d.table.slice(1).map(r => `<tr><td>${esc(r[0])}</td><td>${esc(r[1])}. ${esc(r[2])}</td></tr>`).join('')}</table>`; }
    return `<h4>${esc(c.title)}</h4>${c.sub ? '<p><i>' + esc(c.sub) + '</i></p>' : ''}${c.body.map(x => '<p>' + md(x) + '</p>').join('')}`;
  }
  function deal(L, bk, key) {
    const box = el('div', 'deal');
    function menu() { box.innerHTML = ''; const r = el('div', 'roles'); bk.roles.forEach((role, k) => { const b = el('button', 'bigbtn' + (k % 2 ? ' alt' : ''), esc(role.label)); b.type = 'button'; b.addEventListener('click', () => give(k, null)); r.appendChild(b); }); box.appendChild(r); }
    function give(k, idx) {
      const role = bk.roles[k], deck = L.decks[role.deck], n = Array.isArray(deck) ? deck.length : 1;
      if (idx == null) { const prev = +(store.get(key + ':last' + k) || -1); do { idx = Math.floor(Math.random() * n); } while (n > 1 && idx === prev); }
      store.set(key, k + ',' + idx); store.set(key + ':last' + k, String(idx));
      box.innerHTML = ''; const c = el('div', 'dealt');
      c.innerHTML = `<header><span>${esc(role.label.replace(/^I'm (an?|the) /i, ''))}</span><em>Only for your eyes</em></header><div class="in">${cardHTML(L, role, Array.isArray(deck) ? deck[idx] : null)}</div>`;
      const a = el('div', 'dactions');
      if (n > 1) { const again = el('button', 'treset', 'Deal me another card'); again.type = 'button'; again.addEventListener('click', () => give(k, null)); a.appendChild(again); }
      if (bk.roles.length > 1) { const ch = el('button', 'treset', 'Change role'); ch.type = 'button'; ch.addEventListener('click', () => { store.del(key); menu(); }); a.appendChild(ch); }
      box.append(c, a);
    }
    const saved = store.get(key); if (saved) { const [k, i] = saved.split(',').map(Number); if (bk.roles[k]) give(k, i); else menu(); } else menu();
    return box;
  }
  function choose(L, bk, key) {
    const deck = L.decks[bk.deck], box = el('div', 'deal'), chips = el('div', 'chips2'), stage = el('div');
    box.appendChild(el('div', 'ul', `<div class="cap">${esc(bk.label)}</div>`));
    deck.forEach((c, k) => { const b = el('button', 'chip', esc(c.title.split(' · ')[0])); b.type = 'button'; b.setAttribute('aria-pressed', 'false'); b.addEventListener('click', () => show(k)); chips.appendChild(b); });
    function show(k) { store.set(key, String(k)); [...chips.children].forEach((b, n) => b.setAttribute('aria-pressed', String(n === k))); stage.innerHTML = `<div class="dealt"><div class="in">${cardHTML(L, { kind: 'simple' }, deck[k])}</div></div>`; }
    box.append(chips, stage); const s = store.get(key); if (s != null && deck[+s]) show(+s); return box;
  }
  function gaps(bk) { const ol = el('ol', 'gaps'); bk.items.forEach(t => { const li = el('li', '', '"' + esc(t).replace(/\[([^\]]+)\]/g, '<span class="gap">$1</span>') + '"'); li.addEventListener('click', () => li.classList.toggle('open')); ol.appendChild(li); }); return ol; }
  function match(bk) {
    const box = el('div', 'match'); const left = bk.pairs.map((p, i) => ({ t: p[0], i })), right = bk.pairs.map((p, i) => ({ t: p[1], i })).sort((a, b) => a.t.length * 7 % 5 - b.t.length * 7 % 5 || a.t.localeCompare(b.t));
    let sel = null; const L = [], R = [];
    const mk = (o, side) => { const b = el('button', '', esc(o.t)); b.type = 'button'; b.addEventListener('click', () => { if (b.classList.contains('ok')) return;
      if (side === 'L') { L.forEach(x => x.classList.remove('sel')); b.classList.add('sel'); sel = { b, i: o.i }; return; }
      if (!sel) return; if (sel.i === o.i) { b.classList.add('ok'); sel.b.classList.remove('sel'); sel.b.classList.add('ok'); sel = null; } else { b.classList.add('bad'); setTimeout(() => b.classList.remove('bad'), 350); } }); return b; };
    left.forEach((o, n) => { const a = mk(o, 'L'), c = mk(right[n], 'R'); L.push(a); R.push(c); box.append(a, c); });
    return box;
  }
  function flip(bk) { const g = el('div', 'flipgrid'); bk.cards.forEach(c => { const b = el('button'); b.type = 'button'; let open = false; const paint = () => { b.className = open ? 'open' : ''; b.innerHTML = `<b>${esc(c[0])}</b><small>${open ? 'On a CV, this is...' : 'The stereotype'}</small>${esc(open ? c[2] : c[1])}`; }; b.addEventListener('click', () => { open = !open; paint(); }); paint(); g.appendChild(b); }); return g; }
  function block(L, A, bk, n) {
    const key = 'us:' + L.id + ':' + A.id + ':' + n;
    switch (bk.type) {
      case 'text': return el('p', '', md(bk.md));
      case 'note': return el('div', 'note', md(bk.md));
      case 'teacher': return TEACHER ? el('div', 'tnote', md(bk.md)) : null;
      case 'h': return el('h3', '', esc(bk.text));
      case 'questions': { const ol = el('ol', 'qs'); if (bk.start) ol.style.counterReset = 'q ' + (bk.start - 1); bk.items.forEach(q => ol.appendChild(el('li', '', md(q)))); return ol; }
      case 'useful': return useful(bk);
      case 'carousel': return carousel(L, bk);
      case 'pick': return pick(L, bk, key);
      case 'deal': return deal(L, bk, key);
      case 'choose': return choose(L, bk, key);
      case 'gaps': return gaps(bk);
      case 'match': return match(bk);
      case 'flip': return flip(bk);
      case 'elements': { const g = el('div', 'elems'); bk.items.forEach(e => g.appendChild(el('div', '', `<h4>${esc(e.name)}</h4><small>${esc(e.signs)}</small>${e.lines.map(x => '<p>' + md(x) + '</p>').join('')}<em>The stars say: ${esc(e.stars)}</em>`))); return g; }
      case 'dialogue': { const d = el('details', 'dlg'); d.innerHTML = `<summary>${esc(bk.title)}</summary><div class="lines">${bk.lines.map(l => `<p><b>${esc(l[0])}</b>${esc(l[1])}</p>`).join('')}${bk.after ? '<p><i>' + esc(bk.after) + '</i></p>' : ''}</div>`; return d; }
      case 'video': { const w = el('div'); w.innerHTML = `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${esc(bk.youtube)}" title="Video" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div><a class="vlink" href="https://www.youtube.com/watch?v=${esc(bk.youtube)}" target="_blank" rel="noopener">Open the video in YouTube</a>`; return w; }
    }
    return null;
  }

  // ---------- views
  function home() {
    root.innerHTML = ''; root.appendChild(el('div', 'lhead', `<h1><span>Lessons</span></h1><small>follow the class on your phone${TEACHER ? ' · teacher mode on' : ''}</small>`));
    LESSONS_DATA.slice().reverse().forEach(L => {
      const c = el('section', 'lcard'); c.appendChild(el('header', '', `<b>${esc(L.title)}</b><span>${esc(L.sub || '')}</span>`));
      const ul = el('ul', 'alist'); L.activities.forEach(a => ul.appendChild(el('li', '', `<a href="#/l/${L.id}/${a.id}"><span class="n">${esc(a.id)}</span><span class="tt">${esc(a.title)}</span><span class="mm">${a.min} min</span></a>`))); c.appendChild(ul);
      if (L.extras && L.extras.length) { c.appendChild(el('div', 'sect', 'Extra material')); const ux = el('ul', 'alist'); ux.style.marginTop = '6px'; L.extras.forEach(a => ux.appendChild(el('li', '', `<a href="#/l/${L.id}/${a.id}"><span class="n x">+</span><span class="tt">${esc(a.title)}</span><span class="mm">${a.min} min</span></a>`))); c.appendChild(ux); }
      root.appendChild(c);
    });
  }
  function activity(L, A) {
    const main = L.activities, isExtra = !main.includes(A), seq = isExtra ? L.extras : main, i = seq.indexOf(A);
    root.innerHTML = ''; const bar = el('div', 'abar');
    bar.appendChild(el('a', 'back', '&#8249;')).href = '#/'; bar.firstChild.setAttribute('aria-label', 'Back to the lesson');
    bar.appendChild(el('div', 'ttl', `<small>${isExtra ? 'Extra' : 'Activity ' + esc(A.id)}</small><b>${esc(A.title)}</b>`));
    bar.appendChild(makeTimer('', A.min)); root.appendChild(bar);
    const body = el('div', 'abody');
    if (A.timers && A.timers.length) { const tw = el('div', 'timers'); A.timers.forEach(t => tw.appendChild(makeTimer(t[0], t[1]))); body.appendChild(tw); }
    A.blocks.forEach((bk, n) => { const node = block(L, A, bk, n); if (node) body.appendChild(node); });
    const pn = el('div', 'pn'), p = seq[i - 1], nx = seq[i + 1];
    pn.innerHTML = (p ? `<a href="#/l/${L.id}/${p.id}"><small>Previous</small>${esc(p.title)}</a>` : '<span style="flex:1"></span>') + (nx ? `<a class="next" href="#/l/${L.id}/${nx.id}"><small>Next</small>${esc(nx.title)}</a>` : `<a class="next" href="#/"><small>Done</small>Back to the lesson</a>`);
    body.appendChild(pn); root.appendChild(body);
  }
  function route() {
    if (ticking) { clearInterval(ticking.id); ticking = null; } if (US.stopAll) US.stopAll();
    const h = location.hash.replace(/^#\/?/, ''), parts = h.split('/');
    const sentences = parts[0] === 'sentences';
    sentView.hidden = !sentences; root.hidden = sentences; tabS.classList.toggle('on', sentences); tabL.classList.toggle('on', !sentences);
    if (sentences) { window.scrollTo(0, 0); return; }
    if (parts[0] === 'l') { const L = LESSONS_DATA.find(x => x.id === parts[1]); const A = L && [...L.activities, ...(L.extras || [])].find(a => a.id === parts[2]); if (A) { activity(L, A); window.scrollTo(0, 0); return; } }
    home(); window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route); route();
})();
