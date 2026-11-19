/* PsychopharmPrep — tiny static study app. Topics register themselves via addTopic(). */
(function () {
  const TOPICS = {};               // id -> topic data
  const PLAN = window.PLAN || [];  // ordered list from manifest
  const $ = (s, r = document) => r.querySelector(s);
  const main = $('#main');

  // ---------- storage (safe) ----------
  const KEY = 'psychprep-v1';
  let store = { done: {}, best: {} };
  try { store = Object.assign(store, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} };

  // ---------- theme ----------
  try { const t = localStorage.getItem('psychprep-theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
  $('#themeBtn').onclick = () => {
    const cur = document.documentElement.dataset.theme ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const nx = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nx;
    try { localStorage.setItem('psychprep-theme', nx); } catch (e) {}
  };

  // ---------- drawer ----------
  const side = $('#side'), scrim = $('#scrim');
  const closeNav = () => { side.classList.remove('open'); scrim.classList.remove('open'); };
  $('#menuBtn').onclick = () => { side.classList.add('open'); scrim.classList.add('open'); };
  scrim.onclick = closeNav;

  // ---------- topic registration ----------
  window.addTopic = function (t) { TOPICS[t.id] = t; t._text = stripHTML(JSON.stringify([t.title, t.oneliner, t.sections, t.flash])).toLowerCase(); };
  function stripHTML(s) { return s.replace(/<[^>]+>/g, ' ').replace(/\\n|\\"/g, ' '); }

  function loadTopics(done) {
    const files = PLAN.filter(p => p.file).map(p => p.file);
    let left = files.length;
    if (!left) return done();
    files.forEach(f => {
      const s = document.createElement('script');
      s.src = 'topics/' + f + '?v=' + (window.BUILD || 1);
      s.onload = s.onerror = () => { if (--left === 0) done(); };
      document.body.appendChild(s);
    });
  }

  // ---------- sidebar ----------
  function renderNav() {
    const cur = location.hash.slice(1) || 'home';
    $('#topicList').innerHTML = PLAN.map(p => {
      const ready = TOPICS[p.id];
      if (!ready) return `<li><span class="soon"><span class="num">${p.n}</span><span>${p.title}<br><small>coming soon…</small></span><span class="mins">${p.mins}m</span></span></li>`;
      return `<li><a href="#t-${p.id}" class="${store.done[p.id] ? 'done' : ''} ${cur === 't-' + p.id ? 'on' : ''}"><span class="num">${store.done[p.id] ? '✓' : p.n}</span><span>${p.title}</span><span class="mins">${p.mins}m</span></a></li>`;
    }).join('');
    document.querySelectorAll('.side-link').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + cur));
    const ready = PLAN.filter(p => TOPICS[p.id]).length;
    const d = PLAN.filter(p => store.done[p.id]).length;
    $('#progText').textContent = `${d}/${PLAN.length}`;
    $('#progFill').style.width = (PLAN.length ? d / PLAN.length * 100 : 0) + '%';
  }

  // ---------- search ----------
  $('#search').addEventListener('input', e => {
    const q = e.target.value.trim().toLowerCase();
    const box = $('#searchResults');
    if (q.length < 2) { box.innerHTML = ''; return; }
    const hits = Object.values(TOPICS).filter(t => t._text.includes(q));
    box.innerHTML = hits.length ? hits.map(t => {
      const i = t._text.indexOf(q);
      const snip = t._text.slice(Math.max(0, i - 40), i + 60).replace(/\s+/g, ' ');
      return `<a class="sr" href="#t-${t.id}" data-q="${q}"><b>${t.title}</b><small>…${snip}…</small></a>`;
    }).join('') : '<small style="color:var(--muted);padding:0 4px">No match in ready topics yet.</small>';
  });

  // ---------- views ----------
  function home() {
    let clock = 0;
    const rows = PLAN.map((p, i) => {
      const start = clock; clock += p.mins;
      const brk = (i === 4 || i === 9) ? `<div class="brk">☕ 10-minute break. Stand up, drink water.</div>` : '';
      if (i === 4 || i === 9) clock += 10;
      const tm = `${Math.floor(start / 60)}h${String(start % 60).padStart(2, '0')}`;
      const body = TOPICS[p.id]
        ? `<a href="#t-${p.id}" class="${store.done[p.id] ? 'done' : ''}"><span class="time">${tm}</span><span class="t"><b>${p.n}. ${p.title}</b></span><span class="time">${p.mins} min</span></a>`
        : `<div class="soon"><span class="time">${tm}</span><span>${p.n}. ${p.title} <small>(being written, refresh in a few minutes)</small></span><span class="time">${p.mins} min</span></div>`;
      return body + brk;
    }).join('');
    main.innerHTML = `<div class="col">
      <div><div class="eyebrow">Psychopharmacology · Manoshanti lecture series</div>
      <h1 class="title">Read it once. Write it in the exam.</h1></div>
      <div class="oneliner">All 15 lecture decks, rewritten in <b>plain language</b>. Each topic has <b>Learn</b> (simple notes, mnemonics, a ready exam answer), <b>Flashcards</b> and a <b>Quiz</b>. Tick “Mark as done” when you finish one. Your progress stays saved in this browser.</div>
      <div class="box tip"><div class="bt">How to use your 3–4 hours</div>
        <ul><li>Go in order. Early topics (neurotransmitters, PK/PD) make the later drug topics easy.</li>
        <li>For each topic, read <b>Learn</b> (about 10 min), then do the <b>Quiz</b> (2–3 min). Skip flashcards if short on time and use them for revision.</li>
        <li>Last 15 minutes: open the <a href="#cheat">cheat sheet</a> and the <a href="#mixed">mixed quiz</a>.</li></ul></div>
      <section class="sec"><h2>Your study plan (≈ ${Math.round(clock / 60 * 10) / 10} hours)</h2><div class="plan">${rows}</div></section>
      <div class="box mn"><div class="bt">Universal exam answer template (works for any drug question)</div>
      <ol><li><b>Definition</b>: one line on what the drug / group is.</li><li><b>Classification</b> with 2–3 examples each.</li><li><b>Mechanism of action</b>: which receptor / neurotransmitter.</li><li><b>Uses (indications)</b>.</li><li><b>Side effects</b>: common, then serious / life-threatening.</li><li><b>Monitoring &amp; precautions</b>: blood tests, special groups (pregnancy, elderly, children).</li><li><b>Role of the psychologist</b>: psychoeducation, adherence, spotting side effects, referral.</li><li><b>Conclusion</b>: one balancing line (benefit vs risk; medicine + therapy together).</li></ol></div>
    </div>`;
  }

  function topicView(id, tab) {
    const t = TOPICS[id]; const p = PLAN.find(x => x.id === id);
    if (!t) { main.innerHTML = `<div class="col"><h1 class="title">Not ready yet</h1><p>This topic is still being written. Refresh in a few minutes.</p><a href="#home">← Back home</a></div>`; return; }
    tab = tab || 'learn';
    const idx = PLAN.indexOf(p);
    const next = PLAN.slice(idx + 1).find(x => TOPICS[x.id]);
    main.innerHTML = `<div class="col">
      <div><div class="eyebrow">Topic ${p.n} of ${PLAN.length} · ${p.mins} min · from “${t.source}”</div>
      <h1 class="title">${t.title}</h1></div>
      <div class="oneliner"><b>In one line:</b> ${t.oneliner}</div>
      <div class="tabs" role="tablist">
        <button class="tab ${tab === 'learn' ? 'on' : ''}" data-tab="learn">📖 Learn</button>
        <button class="tab ${tab === 'flash' ? 'on' : ''}" data-tab="flash">🃏 Flashcards (${t.flash.length})</button>
        <button class="tab ${tab === 'quiz' ? 'on' : ''}" data-tab="quiz">✅ Quiz (${t.quiz.length})</button>
      </div>
      <div id="pane"></div>
      <div class="foot">
        <label class="chk"><input type="checkbox" id="doneChk" ${store.done[id] ? 'checked' : ''}> Mark as done</label>
        ${next ? `<a class="btn pri" href="#t-${next.id}" style="text-decoration:none">Next: ${next.title} →</a>` : `<a class="btn" href="#cheat" style="text-decoration:none">Go to cheat sheet →</a>`}
      </div></div>`;
    main.querySelectorAll('.tab').forEach(b => b.onclick = () => {
      main.querySelectorAll('.tab').forEach(x => x.classList.toggle('on', x === b));
      renderPane(t, b.dataset.tab);
    });
    $('#doneChk').onchange = e => { store.done[id] = e.target.checked; save(); renderNav(); };
    renderPane(t, tab);
  }

  function renderPane(t, tab) {
    const pane = $('#pane');
    if (tab === 'learn') {
      pane.innerHTML = `<div class="col" style="max-width:none">${t.sections.map(s => `<section class="sec">${s.h ? `<h2>${s.h}</h2>` : ''}${s.html}</section>`).join('')}</div>`;
      pane.querySelectorAll('[data-widget]').forEach(el => WIDGETS[el.dataset.widget] && WIDGETS[el.dataset.widget](el));
    } else if (tab === 'flash') flashcards(pane, t.flash);
    else quiz(pane, t.quiz, 'q-' + t.id);
  }

  function flashcards(pane, cards) {
    let order = cards.map((_, i) => i), i = 0, back = false;
    pane.innerHTML = `<div class="fc-wrap"><div class="fc" id="fc" tabindex="0" role="button"></div>
      <div class="fc-ctrl"><button class="btn" id="fPrev">← Prev</button><button class="btn pri" id="fFlip">Flip</button><button class="btn" id="fNext">Next →</button><button class="btn" id="fShuf">🔀 Shuffle</button></div></div>`;
    const fc = $('#fc', pane);
    const draw = () => {
      const c = cards[order[i]];
      fc.classList.toggle('back', back);
      fc.innerHTML = `<div class="hint">${i + 1} / ${cards.length} · ${back ? 'Answer' : 'Question (tap to flip)'}</div><div>${back ? c[1] : c[0]}</div>`;
    };
    const flip = () => { back = !back; draw(); };
    fc.onclick = flip; fc.onkeydown = e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
    $('#fFlip', pane).onclick = flip;
    $('#fNext', pane).onclick = () => { i = (i + 1) % cards.length; back = false; draw(); };
    $('#fPrev', pane).onclick = () => { i = (i - 1 + cards.length) % cards.length; back = false; draw(); };
    $('#fShuf', pane).onclick = () => { order.sort(() => Math.random() - .5); i = 0; back = false; draw(); };
    draw();
  }

  function quiz(pane, qs, key) {
    let right = 0, answered = 0;
    pane.innerHTML = `<div class="col" style="max-width:none"><div class="score" id="score">Score 0 / ${qs.length}</div>${qs.map((q, qi) => `
      <div class="q" data-qi="${qi}"><div class="qt">${qi + 1}. ${q.q}${q.from ? ` <small style="color:var(--muted);font-weight:400">· ${q.from}</small>` : ''}</div>
      ${q.o.map((o, oi) => `<button class="opt" data-oi="${oi}">${o}</button>`).join('')}
      <div class="why" hidden></div></div>`).join('')}
      <div class="fc-ctrl"><button class="btn" id="qReset">↺ Try again</button></div></div>`;
    pane.querySelectorAll('.q').forEach(box => {
      const q = qs[+box.dataset.qi];
      box.querySelectorAll('.opt').forEach(btn => btn.onclick = () => {
        const oi = +btn.dataset.oi;
        box.querySelectorAll('.opt').forEach((b, j) => { b.disabled = true; if (j === q.a) b.classList.add('right'); });
        if (oi !== q.a) btn.classList.add('wrong'); else right++;
        answered++;
        const w = box.querySelector('.why'); w.hidden = false; w.innerHTML = (oi === q.a ? '✅ Correct. ' : '❌ Not quite. ') + (q.w || '');
        $('#score', pane).textContent = `Score ${right} / ${qs.length}` + (answered === qs.length ? ' · finished!' : '');
        if (answered === qs.length) { store.best[key] = Math.max(store.best[key] || 0, right); save(); }
      });
    });
    $('#qReset', pane).onclick = () => quiz(pane, qs, key);
  }

  function mixed() {
    const all = [];
    Object.values(TOPICS).forEach(t => t.quiz.forEach(q => all.push(Object.assign({ from: t.title }, q))));
    all.sort(() => Math.random() - .5);
    const pick = all.slice(0, 20);
    main.innerHTML = `<div class="col"><div><div class="eyebrow">Revision</div><h1 class="title">Mixed quiz</h1></div>
      <div class="oneliner">20 random questions from every topic that's ready (${Object.keys(TOPICS).length} so far). Reload the page for a new set.</div><div id="pane"></div></div>`;
    quiz($('#pane'), pick, 'mixed');
  }

  function cheat() {
    const blocks = PLAN.filter(p => TOPICS[p.id] && TOPICS[p.id].cheat).map(p => {
      const t = TOPICS[p.id];
      return `<section class="sec"><h2>${p.n}. ${t.title}</h2><div class="tw"><table><tbody>${t.cheat.map(r => `<tr><td style="width:42%"><b>${r[0]}</b></td><td>${r[1]}</td></tr>`).join('')}</tbody></table></div></section>`;
    }).join('');
    main.innerHTML = `<div class="col"><div><div class="eyebrow">Last 15 minutes</div><h1 class="title">Cheat sheet</h1></div>
      <div class="oneliner">The numbers, names and one-liners examiners love, from every ready topic on one page.</div>${blocks || '<p>Topics are still loading.</p>'}</div>`;
  }

  // ---------- widgets ----------
  const WIDGETS = {
    halflife(el) {
      let n = 0;
      el.innerHTML = `<div class="widget"><div class="wt">Try it: watch a drug leave the body (first-order kinetics)</div>
        <div class="hl-bars" id="hlb"></div><div class="readout" id="hlr"></div>
        <div class="fc-ctrl"><button class="btn pri" id="hlN">+1 half-life</button><button class="btn" id="hlR">Reset</button></div></div>`;
      const draw = () => {
        const vals = []; for (let k = 0; k <= n; k++) vals.push(100 / Math.pow(2, k));
        $('#hlb', el).innerHTML = vals.map((v, k) => `<div style="height:${Math.max(v, 1.5)}%"><span>${v < 10 ? v.toFixed(1) : Math.round(v)}%</span></div>`).join('');
        const left = 100 / Math.pow(2, n);
        $('#hlr', el).innerHTML = `After <b>${n}</b> half-li${n === 1 ? 'fe' : 'ves'}: <b>${left.toFixed(1)}%</b> left (${(100 - left).toFixed(1)}% gone)${n >= 4 ? ' → <b>practically gone (4–5 half-lives rule)</b>' : ''}`;
      };
      $('#hlN', el).onclick = () => { if (n < 6) n++; draw(); };
      $('#hlR', el).onclick = () => { n = 0; draw(); };
      draw();
    },
    lithium(el) {
      el.innerHTML = `<div class="widget"><div class="wt">Try it: slide the serum lithium level</div>
        <div class="meter"><i style="width:13.3%;background:var(--line)"></i><i style="width:26.7%;background:var(--good)"></i><i style="width:10%;background:var(--amber)"></i><i style="width:16.7%;background:#E8833A"></i><i style="width:16.7%;background:var(--rose)"></i><i style="width:16.6%;background:#7A1010"></i></div>
        <input type="range" id="li" min="0" max="3" step="0.1" value="0.8" aria-label="Lithium level">
        <div class="readout" id="lir"></div></div>`;
      const r = $('#lir', el), s = $('#li', el);
      const draw = () => {
        const v = +s.value; let m;
        if (v < 0.4) m = 'Too low. Below the minimum for preventing relapse (0.4).';
        else if (v < 0.6) m = 'Low. Above the 0.4 prophylaxis minimum but under the usual 0.6–1.2 range.';
        else if (v <= 1.2) m = '✅ Therapeutic (0.6–1.2). For acute mania aim 0.7–1.2.';
        else if (v <= 1.5) m = '⚠️ Caution zone (1.2–1.5). Check hydration, NSAIDs, diuretics.';
        else if (v <= 2.0) m = '🚨 Mild toxicity: fine tremor, nausea, diarrhoea, drowsiness, weakness.';
        else if (v <= 2.5) m = '🚨 Moderate toxicity: COARSE tremor, confusion, ataxia, slurred speech, vomiting.';
        else m = '☠️ Severe (>2.5): seizures, arrhythmia, coma, kidney failure. Emergency.';
        r.innerHTML = `<b>${v.toFixed(1)} mEq/L</b>: ${m}`;
      };
      s.oninput = draw; draw();
    },
    pathways(el) {
      const P = {
        'Mesolimbic': ['Reward, pleasure, psychosis', 'Too ACTIVE in schizophrenia → hallucinations, delusions (positive symptoms).', 'Blocking it = the treatment effect ✅'],
        'Mesocortical': ['Motivation, thinking (prefrontal cortex)', 'Too LOW in schizophrenia → negative &amp; cognitive symptoms.', 'Blocking more here → worse apathy (secondary negative symptoms) ❌'],
        'Nigrostriatal': ['Movement control (basal ganglia)', 'Normal in schizophrenia; it dies off in Parkinson’s disease.', 'Blocking it → EPS: dystonia, akathisia, parkinsonism, tardive dyskinesia ❌'],
        'Tuberoinfundibular': ['Hormones: dopamine stops prolactin', 'Normal in schizophrenia.', 'Blocking it → high prolactin: breast milk, missed periods, sexual problems ❌']
      };
      el.innerHTML = `<div class="widget"><div class="wt">Tap a dopamine pathway to see what blocking it does</div><div class="pw">${Object.keys(P).map((k, i) => `<button data-k="${k}" class="${i ? '' : 'on'}">${k}</button>`).join('')}</div><div class="readout" id="pwr"></div></div>`;
      const show = k => { const v = P[k]; $('#pwr', el).innerHTML = `<b>${k}</b>, job: ${v[0]}<br>${v[1]}<br><b>${v[2]}</b>`; el.querySelectorAll('.pw button').forEach(b => b.classList.toggle('on', b.dataset.k === k)); };
      el.querySelectorAll('.pw button').forEach(b => b.onclick = () => show(b.dataset.k));
      show('Mesolimbic');
    }
  };

  // ---------- router ----------
  function route() {
    const h = location.hash.slice(1) || 'home';
    closeNav();
    if (h.startsWith('t-')) topicView(h.slice(2));
    else if (h === 'cheat') cheat();
    else if (h === 'mixed') mixed();
    else home();
    renderNav();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);
  loadTopics(route);
})();
