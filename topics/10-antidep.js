addTopic({
  id: 'antidep',
  title: 'Antidepressants: Side Effects & Switching',
  source: 'Anti-depressants: Managing Side Effects and Switching (Dr Sidhu) + Psychotropic side effects',
  oneliner: 'Antidepressants <b>raise serotonin and/or noradrenaline</b> in the synapse. No class works clearly better than another; they differ in <b>side effects</b> (TCAs &gt; SNRIs &gt; SSRIs). <b>SSRIs are first-line.</b>',
  sections: [
    { h: 'Basics', html: `
      <p>Used mainly for <b>major depressive disorder (MDD)</b>; also anxiety disorders, OCD, PTSD, organic mood disorders.</p>
      <p>Born from the <b>monoamine hypothesis</b>: depression = low serotonin, noradrenaline, dopamine in circuits for fear, stress, reward and motivation. Newer ideas add receptor down-regulation and second messengers.</p>
      <ul><li><b>None is clearly more effective</b> than the others.</li>
      <li>Side-effect burden: <b>TCAs &gt; SNRIs &gt; SSRIs</b> (broader action = more side effects).</li>
      <li><b>SSRIs</b> are most prescribed: similar efficacy, cheap, best tolerated.</li>
      <li>All can cause <b>discontinuation symptoms</b> → taper.</li></ul>` },

    { h: 'Classes at a glance', html: `
      <div class="tw"><table><thead><tr><th>Class</th><th>Examples</th><th>Mechanism</th><th>Signature side effects</th></tr></thead><tbody>
      <tr><td><b>SSRI</b></td><td>Fluoxetine, sertraline, escitalopram, paroxetine</td><td>Blocks <b>SERT</b> → ↑ serotonin</td><td>Nausea/GI, sexual dysfunction, insomnia or sedation, early anxiety ↑</td></tr>
      <tr><td><b>SNRI</b></td><td>Venlafaxine, duloxetine, desvenlafaxine, milnacipran</td><td>↑ serotonin + noradrenaline</td><td>Like SSRI + ↑ BP, sweating, tachycardia at high dose</td></tr>
      <tr><td><b>TCA</b></td><td>Amitriptyline, imipramine, nortriptyline</td><td>Blocks NA (+ 5-HT) reuptake; also blocks M, H1, α1</td><td>Anticholinergic, sedation, weight, low BP, <b>cardiac toxicity, deadly in overdose</b></td></tr>
      <tr><td><b>MAOI</b></td><td>Phenelzine, tranylcypromine, selegiline</td><td>Inhibits monoamine oxidase</td><td><b>Cheese reaction</b>, low BP, many interactions</td></tr>
      <tr><td><b>Atypical</b></td><td>Bupropion, mirtazapine, trazodone, vortioxetine, agomelatine</td><td>Each different</td><td>See below</td></tr>
      </tbody></table></div>` },

    { h: 'MAOIs (oldest, 1950s)', html: `
      <p>Still effective for depression, panic disorder, social anxiety, phobias, but rarely used due to side effects and <b>drug–drug and drug–food interactions</b>. <b>MAO-A</b> breaks down serotonin (and NA); <b>MAO-B</b> breaks down dopamine.</p>
      <ul><li><b>Low BP / dizziness</b> → falls in elderly.</li>
      <li><b>Hypertensive crisis (“cheese reaction”):</b> from <b>tyramine</b> foods: aged cheese, aged/smoked/pickled/cured fish, meat, poultry, fermented foods. (Not with MAO-B inhibitors.)</li>
      <li><b>Serotonin syndrome</b> if combined with other antidepressants.</li>
      <li>Discontinuation: anxiety, agitation, chills, sweating. Sexual dysfunction, weight gain, sleep problems.</li>
      <li>Avoid with <b>sympathomimetics</b>: ephedrine, pseudoephedrine, levodopa.</li></ul>` },

    { h: 'TCAs (late 1950s; now second-line)', html: `
      <p>Act on <b>many receptors</b>, hence many side effects.</p>
      <ul><li><b>Anticholinergic:</b> dry mouth, urinary retention, constipation, blurred vision, tachycardia.</li>
      <li><b>α1 block:</b> orthostatic hypotension.</li>
      <li><b>H1 block:</b> sedation, appetite ↑, weight gain.</li>
      <li><b>Cardiac:</b> QTc prolongation, ventricular fibrillation, sudden death. <b>Avoid</b> in heart failure or strong family cardiac history.</li>
      <li><b>Seizure</b> risk ↑; serotonin syndrome with other serotonergic drugs.</li>
      <li><b>Narrow therapeutic index → very dangerous in overdose</b> (a concern in suicidal patients).</li></ul>
      <div class="box mn"><div class="bt">Mnemonic: anticholinergic effects</div>“<b>Can’t see</b> (blurred vision), <b>can’t pee</b> (retention), <b>can’t spit</b> (dry mouth), <b>can’t poo</b> (constipation)”, plus a racing heart.</div>
      <div class="box mn"><div class="bt">Mnemonic: TCA toxicity, the 3 Cs</div><b>C</b>ardiotoxicity · <b>C</b>onvulsions · <b>C</b>oma</div>` },

    { h: 'SSRIs (first-line)', html: `
      <p>Block <b>SERT</b> on the presynaptic terminal → more serotonin. Little effect on dopamine, adrenergic and histamine receptors → <b>safer, better tolerated</b>.</p>
      <ul><li>Sedation <i>or</i> activation; <b>paradoxical early worsening of anxiety</b></li>
      <li><b>GI upset</b> (nausea, diarrhoea)</li><li>Dry mouth (more with <b>paroxetine</b>)</li>
      <li><b>QT prolongation</b> (citalopram/escitalopram at high dose)</li><li><b>Bleeding tendency</b> (coagulopathy)</li>
      <li>Weight gain more common, but <b>fluoxetine</b> may cause weight loss</li><li><b>Sexual dysfunction</b> (common, long-term)</li>
      <li>Low sodium in elderly; early suicidal thoughts in young people</li></ul>` },

    { h: 'SNRIs', html: `
      <p>Dual serotonin + noradrenaline reuptake inhibitors. No anticholinergic/antihistamine/α effects → tolerability close to SSRIs. <b>Duloxetine</b> also treats chronic pain, diabetic neuropathy, fibromyalgia.</p>
      <ul><li>More potent at serotonin than NA (venlafaxine <b>30:1</b>, duloxetine <b>10:1</b>). Serotonin block comes first.</li>
      <li><b>Low dose</b> → SSRI-like side effects. <b>High dose</b> → noradrenergic: activation, dry mouth, night sweats, <b>tachycardia, raised BP</b>, dilated pupils (highest with <b>venlafaxine</b>).</li>
      <li>At high doses some dopamine reuptake inhibition too. <b>Milnacipran</b> has equal 5-HT/NA action and no dopamine effect → less cardiac risk.</li>
      <li>Dysuria (dose-dependent). Never combine with MAOIs.</li></ul>` },

    { h: 'Atypical antidepressants', html: `
      <div class="grid2">
        <div class="card"><h3>Bupropion (NDRI)</h3><p>NA + dopamine reuptake inhibitor. <b>Not sedating</b>, <b>weight loss</b>, <b>no sexual dysfunction</b>. Side effects: insomnia, anxiety, headache, nausea; <b>lowers seizure threshold</b>. Used for <b>smoking cessation</b>; off-label ADHD.</p></div>
        <div class="card"><h3>Mirtazapine (NaSSA)</h3><p>Blocks central <b>α2</b>; antagonist at H1, 5-HT2A, 5-HT2C, 5-HT3. <b>Sedating</b> (used off-label for insomnia), <b>appetite and weight gain</b>, raised cholesterol. Rare: pancreatitis, bone marrow suppression. Little nausea or sexual dysfunction.</p></div>
        <div class="card"><h3>Vortioxetine (2013)</h3><p>Multimodal: 5-HT1A agonist, 5-HT1B partial agonist, 5-HT3/5-HT7/5-HT1D antagonist, + SERT. Nausea, headache, dizziness, dry mouth. <b>Few sexual side effects</b>.</p></div>
        <div class="card"><h3>Trazodone, agomelatine</h3><p>Trazodone (SARI): sedating, used for sleep. Agomelatine: melatonin agonist.</p></div>
      </div>` },

    { h: 'Managing common side effects', html: `
      <div class="tw"><table><thead><tr><th>Problem</th><th>What to do</th></tr></thead><tbody>
      <tr><td><b>Fatigue / sleepiness</b></td><td>Check sleep &amp; residual depression; start low go slow; sleep hygiene (no daytime naps); move dose to night, split it, or slow-release; last resort: stimulants/modafinil</td></tr>
      <tr><td><b>Sexual dysfunction</b> (SSRI, SNRI, TCA)</td><td>Lower dose; time sex around dosing; add sildenafil/tadalafil; or <b>switch to bupropion, vortioxetine</b> (or nefazodone)</td></tr>
      <tr><td><b>GI upset</b> (SSRIs, venlafaxine)</td><td>Split dose; take with food; H2 blockers/PPIs; anti-nausea (ondansetron, promethazine); loperamide/probiotics for diarrhoea; switch to mirtazapine</td></tr>
      <tr><td><b>Constipation</b> (TCAs, paroxetine)</td><td>Fluids, fibre; laxatives (bulk, stool softener, osmotic)</td></tr>
      <tr><td><b>Weight gain</b> (mirtazapine &gt; SSRIs, venlafaxine)</td><td>Anticipate it; diet and exercise; switch as last option</td></tr>
      <tr><td><b>Insomnia</b> (SSRIs)</td><td>Rule out sleep disorder/substances; sleep hygiene, less caffeine; morning dosing; add melatonin, low-dose mirtazapine or trazodone (or short BZD)</td></tr>
      <tr><td><b>Apathy</b> (emotional blunting)</td><td>Rule out residual depression; switch to less serotonergic drug (bupropion) or add stimulant (methylphenidate, amantadine)</td></tr>
      </tbody></table></div>` },

    { h: 'Discontinuation syndrome', html: `
      <p>Symptoms within <b>hours to days</b> of suddenly stopping. Worse with <b>short half-life</b> drugs: <b>paroxetine, venlafaxine</b>. Least with <b>fluoxetine</b> (long half-life).</p>
      <div class="box mn"><div class="bt">Mnemonic: FINISH</div><b>F</b>lu-like (malaise, aches) · <b>I</b>nsomnia · <b>N</b>ausea · <b>I</b>mbalance (dizziness, vertigo, unsteady gait) · <b>S</b>ensory (“electric shocks”, paraesthesia) · <b>H</b>yperarousal (anxiety, irritability)</div>
      <p>Can be mistaken for side effects or relapse, but it is <b>self-limiting</b>. Prevent with <b>gradual taper</b>; warn patients at the start; BZD can be added for anxiety/irritability.</p>` },

    { h: 'Switching antidepressants', html: `
      <p><b>Why switch:</b> mostly <b>inadequate response</b>; also intolerable side effects, or after successful treatment.</p>
      <ul><li>First confirm the trial was <b>adequate</b> (dose and duration, adherence).</li>
      <li>Discontinuation symptoms can mimic relapse (but are self-limiting).</li>
      <li>Consider <b>half-lives</b> of both drugs; watch for <b>serotonin syndrome</b> and interactions; extra care if relapse risk is high.</li></ul>
      <div class="tw"><table><thead><tr><th>Strategy</th><th>How</th><th>Use when</th></tr></thead><tbody>
      <tr><td><b>Conservative</b></td><td>Taper old → <b>washout</b> (gap of ~5 half-lives) → start new</td><td>Highest safety: e.g. to/from <b>MAOIs</b></td></tr>
      <tr><td><b>Moderate</b></td><td>Taper old → start new straight after stopping</td><td>Most routine switches</td></tr>
      <tr><td><b>Direct</b></td><td>Stop old, start new next day</td><td>Same class, similar drugs (e.g. one SSRI to another)</td></tr>
      <tr><td><b>Cross-taper</b></td><td>Lower old while raising new over 1–2 weeks</td><td>Different classes, when gap would be risky; watch interactions</td></tr>
      </tbody></table></div>
      <div class="box flag"><div class="bt">Washout to remember</div>MAOI → another antidepressant: wait <b>2 weeks</b>. <b>Fluoxetine → MAOI: wait 5 weeks</b> (very long half-life).</div>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Discuss side effects of antidepressants and the principles of switching.</b>
      <ol><li><b>Intro:</b> indications; monoamine hypothesis; no class superior; TCA &gt; SNRI &gt; SSRI side effects.</li>
      <li><b>Class-wise</b> side effects: MAOI (cheese reaction), TCA (anticholinergic, cardiac, overdose), SSRI, SNRI (BP), atypicals.</li>
      <li><b>Management</b> table for sexual, GI, weight, sleep, fatigue, apathy.</li>
      <li><b>Discontinuation syndrome</b> (FINISH), short half-life drugs, taper.</li>
      <li><b>Switching:</b> reasons, adequacy, half-life, serotonin syndrome; 4 strategies; washouts.</li>
      <li><b>Conclusion:</b> psychoeducation on side effects and discontinuation improves adherence.</li></ol></div>` }
  ],
  flash: [
    ['Side-effect burden order?', '<b>TCAs &gt; SNRIs &gt; SSRIs</b>.'],
    ['First-line class for MDD and why?', '<b>SSRIs</b>: similar efficacy, affordable, best tolerated.'],
    ['Cheese reaction: drug and cause?', '<b>MAOIs</b> + <b>tyramine</b> foods → hypertensive crisis.'],
    ['TCA anticholinergic effects?', 'Dry mouth, urinary retention, constipation, blurred vision, tachycardia.'],
    ['Why are TCAs dangerous in suicidal patients?', '<b>Narrow therapeutic index</b>: overdose causes arrhythmia, seizures, coma.'],
    ['SSRI with most dry mouth / which causes weight loss?', 'Paroxetine / fluoxetine.'],
    ['Venlafaxine at high dose causes?', 'Raised BP, tachycardia, sweating (noradrenergic).'],
    ['Antidepressant for smoking cessation, no sexual SE, weight loss?', '<b>Bupropion</b> (NDRI); lowers seizure threshold.'],
    ['Sedating antidepressant that increases appetite?', '<b>Mirtazapine</b> (NaSSA, α2 blocker).'],
    ['Antidepressants with few sexual side effects?', 'Bupropion, vortioxetine, mirtazapine.'],
    ['FINISH stands for?', 'Flu-like, Insomnia, Nausea, Imbalance, Sensory, Hyperarousal'],
    ['Which drugs give worst discontinuation symptoms?', 'Short half-life: <b>paroxetine, venlafaxine</b>.'],
    ['4 switching strategies?', 'Conservative, moderate, direct, cross-taper.'],
    ['Washout from fluoxetine to an MAOI?', '<b>5 weeks</b>.']
  ],
  quiz: [
    { q: 'A patient on phenelzine eats aged cheese and develops a severe headache and very high BP. This is…', o: ['Serotonin syndrome', 'Tyramine (cheese) reaction', 'NMS', 'Discontinuation syndrome'], a: 1, w: 'MAOI + tyramine → hypertensive crisis.' },
    { q: 'Which class is most dangerous in overdose?', o: ['SSRIs', 'TCAs', 'Atypicals', 'SNRIs'], a: 1, w: 'Narrow therapeutic index; cardiac toxicity.' },
    { q: 'A man stops his SSRI because of erectile problems. Best switch?', o: ['Paroxetine', 'Bupropion', 'Venlafaxine', 'Clomipramine'], a: 1, w: 'Bupropion (or vortioxetine) has little sexual dysfunction.' },
    { q: 'Discontinuation symptoms are worst with…', o: ['Fluoxetine', 'Paroxetine', 'Vortioxetine', 'Agomelatine'], a: 1, w: 'Short half-life. Fluoxetine is least.' },
    { q: 'Raised blood pressure at high doses is most typical of…', o: ['Venlafaxine', 'Sertraline', 'Mirtazapine', 'Trazodone'], a: 0, w: 'Noradrenergic effect at higher dose.' },
    { q: 'Thin, depressed patient with insomnia and poor appetite. Which antidepressant suits?', o: ['Bupropion', 'Mirtazapine', 'Fluoxetine', 'Venlafaxine'], a: 1, w: 'Mirtazapine is sedating and boosts appetite.' },
    { q: 'Switching to/from an MAOI needs which strategy?', o: ['Direct', 'Cross-taper', 'Conservative (washout)', 'Any'], a: 2, w: 'Washout prevents serotonin syndrome.' },
    { q: 'Before switching for non-response, first…', o: ['Add lithium', 'Confirm the trial was adequate (dose, duration, adherence)', 'Stop all medicines', 'Start an MAOI'], a: 1, w: 'Adequacy first.' }
  ],
  cheat: [
    ['SE order', 'TCA > SNRI > SSRI; SSRIs first-line; no class superior'],
    ['MAOI', 'Cheese/tyramine hypertensive crisis; avoid sympathomimetics; washout 2 wk'],
    ['TCA', 'Anticholinergic, α1 (low BP), H1 (sedation/weight), QTc, seizures, lethal overdose'],
    ['SNRI ratios', 'Venlafaxine 30:1, duloxetine 10:1 (5-HT:NA); high dose ↑BP'],
    ['Bupropion / Mirtazapine / Vortioxetine', 'NDRI, weight loss, no sexual SE, smoking / NaSSA α2, sedation, weight gain / multimodal, few sexual SE'],
    ['Discontinuation', 'FINISH; worst paroxetine, venlafaxine; least fluoxetine'],
    ['Switching', 'Conservative, moderate, direct, cross-taper; fluoxetine→MAOI 5 wk']
  ]
});
