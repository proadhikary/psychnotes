addTopic({
  id: 'lithium',
  title: 'Lithium & Mood Stabilizers',
  source: 'Lithium & Mood Stabilizers + Mood stabilisers section (Dr Sidhu)',
  oneliner: 'Mood stabilizers keep mood <b>in the middle</b> (euthymia), preventing highs and lows. <b>Lithium is the gold standard</b> and the only one that clearly <b>reduces suicide</b>, but the gap between a helpful and a toxic level is <b>tiny</b>.',
  sections: [
    { h: 'What is a mood stabilizer?', html: `
      <p>A medicine that <b>reduces the frequency, severity or recurrence of mood episodes</b> (manic, hypomanic, mixed or depressive) <b>without pushing mood the other way</b>. The ideal one treats and prevents both mania and depression.</p>
      <p>It is <b>not one chemical class</b>: lithium salt, anticonvulsants (valproate, carbamazepine, lamotrigine) and some atypical antipsychotics (quetiapine, olanzapine…), grouped by <b>clinical function</b>.</p>
      <ul><li>Most are <b>stronger against mania</b> than depression; bipolar with mainly depressive episodes is harder to treat.</li>
      <li>Antipsychotics are effective <b>anti-manic</b> agents.</li>
      <li><b>Antidepressants</b> are used with caution in bipolar depression: they can cause a <b>switch into mania</b>.</li></ul>` },

    { h: 'Lithium: history', html: `
      <div class="timeline">
        <div><b>1949</b>John Cade (Australia): lithium calms guinea pigs, then manic patients</div>
        <div><b>1954</b>Mogens Schou (Denmark): first controlled trials</div>
        <div><b>1970</b>US FDA approves for acute mania</div>
        <div><b>1974</b>FDA approves for maintenance</div>
      </div>
      <p>Lithium is element <b>3</b>, the lightest metal, yet has one of the <b>narrowest safety margins</b> in psychiatry.</p>` },

    { h: 'Lithium: mechanism (not fully known)', html: `
      <div class="grid2">
        <div class="card"><h3>Inositol depletion</h3><p>Inhibits <b>inositol monophosphatase</b> → less phosphoinositide signalling.</p></div>
        <div class="card"><h3>GSK-3β inhibition</h3><p>Blocks glycogen synthase kinase-3β, a key node in neuroprotective and circadian pathways.</p></div>
        <div class="card"><h3>Neurotransmitters</h3><p>Dampens excitatory <b>glutamate/dopamine</b>; supports <b>GABA</b>.</p></div>
        <div class="card"><h3>Neuroprotective</h3><p>↑ <b>BDNF</b> and Bcl-2 → neuronal resilience, maybe grey-matter volume.</p></div>
      </div>
      <div class="box mn"><div class="bt">Mnemonic: “I Get Nice Neurons”</div><b>I</b>nositol · <b>G</b>SK-3β · <b>N</b>eurotransmitters · <b>N</b>europrotection (BDNF)</div>` },

    { h: 'Lithium: uses', html: `
      <ul><li><b>Acute mania</b> (first-line, moderate–severe)</li>
      <li><b>Maintenance</b> in bipolar I &amp; II: <b>gold standard</b> for relapse prevention</li>
      <li><b>Bipolar depression</b> (alone or combined)</li>
      <li><b>Augmentation</b> in treatment-resistant unipolar depression</li>
      <li><b>Anti-suicidal</b>: the only mood stabiliser with robust evidence</li>
      <li><b>Schizoaffective disorder</b> (mood component, with antipsychotic)</li></ul>` },

    { h: 'Lithium levels: the numbers to memorise', html: `
      <div data-widget="lithium"></div>
      <div class="tw"><table><tbody>
      <tr><td>Therapeutic range</td><td class="mono"><b>0.6–1.2 mEq/L</b></td></tr>
      <tr><td>Minimum for prophylaxis</td><td class="mono">0.4 mEq/L</td></tr>
      <tr><td>Acute mania</td><td class="mono">0.7–1.2 mEq/L</td></tr>
      <tr><td>Caution</td><td class="mono">1.2–1.5 mEq/L</td></tr>
      <tr><td>Toxic</td><td class="mono"><b>&gt;1.5 mEq/L</b></td></tr>
      <tr><td>When to measure</td><td><b>12 hours after the last dose</b> (trough); first level <b>5–7 days</b> after starting or a dose change</td></tr>
      </tbody></table></div>
      <h3>Routine monitoring</h3>
      <ul><li>Serum lithium: weekly at start, then <b>every 3 months</b> once stable</li>
      <li>Kidney function (eGFR/creatinine): <b>every 6 months</b></li>
      <li>Thyroid (TSH): <b>every 6–12 months</b></li>
      <li>Calcium: <b>yearly</b> · Weight/BMI: every review</li></ul>
      <p><b>Why so careful?</b> Narrow window + lithium is <b>cleared only by the kidneys</b>. Dehydration, kidney decline, and drugs like <b>NSAIDs, diuretics (thiazides), ACE inhibitors</b> push levels up fast.</p>` },

    { h: 'Lithium toxicity', html: `
      <div class="tw"><table><thead><tr><th>Level</th><th>Signs</th></tr></thead><tbody>
      <tr><td><b>Mild</b> (1.5–2.0)</td><td>Fine tremor, nausea, diarrhoea, mild drowsiness, muscle weakness</td></tr>
      <tr><td><b>Moderate</b> (2.0–2.5)</td><td><b>Coarse tremor</b>, confusion, <b>ataxia</b>, <b>slurred speech</b>, vomiting, blurred vision</td></tr>
      <tr><td><b>Severe</b> (&gt;2.5)</td><td>Seizures, arrhythmia, coma, kidney failure: <b>emergency</b></td></tr>
      </tbody></table></div>
      <div class="box flag"><div class="bt">Triggers</div>Dehydration, sodium loss, fever, vomiting/diarrhoea, NSAIDs, diuretics, ACE inhibitors. Always ask about these before assuming new symptoms are psychiatric.</div>
      <div class="box simple"><div class="bt">Fine vs coarse tremor</div><b>Fine</b> hand tremor = common side effect at normal levels. <b>Coarse</b> tremor = toxicity.</div>` },

    { h: 'Lithium: long-term side effects', html: `
      <ul><li><b>Kidney:</b> poor urine concentration (polyuria, thirst; nephrogenic diabetes insipidus); rarely chronic kidney disease</li>
      <li><b>Thyroid:</b> <b>hypothyroidism</b> in up to <b>20%</b></li>
      <li><b>Weight gain</b> (affects adherence)</li>
      <li><b>Neuro:</b> fine tremor; sometimes cognitive dulling</li>
      <li><b>Skin:</b> acne, psoriasis flare</li>
      <li><b>Pregnancy:</b> teratogenic, <b>cardiac defects (Ebstein’s anomaly)</b></li>
      <li>Also: raised calcium (parathyroid), raised WBC, ECG changes</li></ul>
      <div class="box mn"><div class="bt">Mnemonic: LITHIUM</div><b>L</b>eukocytosis · <b>I</b>nsipidus (diabetes insipidus, polyuria) · <b>T</b>remor · <b>H</b>ypothyroidism · <b>I</b>ncreased weight · <b>U</b>pset stomach (nausea, diarrhoea) · <b>M</b>alformation (Ebstein’s anomaly)</div>
      <p><b>Stopping:</b> abrupt discontinuation → rapid relapse and possibly ↑ suicide risk → <b>taper gradually</b>.</p>` },

    { h: 'Other mood stabilizers', html: `
      <div class="grid2">
        <div class="card"><h3>Valproate</h3><p><b>Mech:</b> ↑ GABA; blocks Na⁺ channels.<br><b>Use:</b> acute mania, esp. <b>rapid cycling and mixed states</b>; maintenance.<br><b>Risks:</b> <b>highly teratogenic</b> (neural tube defects, lower IQ): avoid in those who may get pregnant; <b>liver toxicity</b>; low platelets, pancreatitis (rare); weight gain, hair thinning, tremor, sedation; PMOS.<br><b>Tests:</b> LFT + full blood count.</p></div>
        <div class="card"><h3>Carbamazepine / oxcarbazepine</h3><p><b>Mech:</b> blocks Na⁺ channels.<br><b>Use:</b> second-line mania and maintenance, mixed/rapid cycling.<br><b>Risks:</b> <b>Stevens-Johnson syndrome</b>, agranulocytosis; <b>strong CYP450 inducer</b> → lowers many drugs incl. <b>oral contraceptives</b>; <b>low sodium</b> (esp. oxcarbazepine); dizziness, double vision, ataxia.<br><b>Tests:</b> FBC, sodium.</p></div>
        <div class="card"><h3>Lamotrigine</h3><p><b>Mech:</b> blocks Na⁺ channels; ↓ glutamate.<br><b>Use:</b> maintenance, <b>prevents depressive relapse</b>; weak against mania (not for acute mania).<br><b>Risks:</b> <b>serious rash / SJS / TEN</b>, minimised by <b>very slow titration</b> over weeks. Otherwise well tolerated; little weight gain or sedation. Relatively preferred in pregnancy.</p></div>
        <div class="card"><h3>Atypical antipsychotics</h3><p><b>Quetiapine:</b> mania, bipolar depression, maintenance (broadest).<br><b>Olanzapine:</b> acute mania; metabolic burden.<br><b>Risperidone:</b> mania; EPS, prolactin.<br><b>Aripiprazole:</b> mania, maintenance; low metabolic; akathisia.<br><b>Lurasidone:</b> bipolar depression; good metabolic profile.</p></div>
      </div>
      <h3>When to choose valproate (Dr Sidhu’s list)</h3>
      <ul><li>Mania with prominent <b>irritability</b></li><li><b>Rapid cycling</b> bipolar disorder</li><li>Long history of untreated episodes</li><li>Comorbid <b>substance use</b></li><li>Comorbid anxiety, IDD, behavioural disturbance</li></ul>` },

    { h: 'Comparison table', html: `
      <div class="tw"><table><thead><tr><th></th><th>Lithium</th><th>Valproate</th><th>Carbamazepine</th><th>Lamotrigine</th></tr></thead><tbody>
      <tr><td>Best for</td><td>Mania + maintenance + anti-suicide</td><td>Acute mania, mixed states</td><td>Second-line mania</td><td>Preventing depression</td></tr>
      <tr><td>Blood monitoring</td><td><b>Essential</b> (narrow index)</td><td>Yes (liver, platelets)</td><td>Yes (FBC, sodium)</td><td>Not for levels</td></tr>
      <tr><td>Headline risk</td><td>Toxicity, kidney/thyroid</td><td><b>Teratogenic</b>, liver</td><td>Rash, <b>interactions</b></td><td><b>Rash</b> if titrated fast</td></tr>
      <tr><td>Pregnancy</td><td>Caution (cardiac)</td><td><b>Avoid</b></td><td>Caution</td><td>Relatively preferred</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Signature risk, one word each</div><b>Li</b>thium = <b>Levels</b> · <b>V</b>alproate = <b>V</b>ery bad in pregnancy · <b>C</b>arbamazepine = <b>C</b>YP inducer · <b>L</b>amotrigine = <b>L</b>ook at the skin (rash)</div>` },

    { h: 'Special populations & psychologist’s role', html: `
      <ul><li><b>Pregnancy:</b> specialist planning; abrupt stopping → high relapse risk.</li>
      <li><b>Elderly/renal:</b> lower lithium doses; toxicity rises with age-related kidney decline.</li>
      <li><b>Adherence:</b> side effects, stigma, missing the “highs”, and feeling well make people stop.</li></ul>
      <div class="grid2">
        <div class="card"><h3>Psychologist does</h3><ul><li>Psychoeducation (why monitoring, why slow titration)</li><li>Mood charting, side-effect tracking</li><li>Tell drug cognitive effects apart from mood symptoms</li><li>Adherence: MI and CBT for beliefs and stigma</li><li>Watch for toxicity and relapse signs; liaise with prescriber</li><li>Collaborative care</li></ul></div>
      </div>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Lithium: mechanism, indications, monitoring and toxicity. Compare with other mood stabilizers.</b>
      <ol><li><b>Definition</b> of mood stabiliser; groups.</li>
      <li><b>History:</b> Cade 1949, Schou 1954, FDA 1970/1974.</li>
      <li><b>Mechanism:</b> inositol depletion, GSK-3β, NT modulation, BDNF.</li>
      <li><b>Indications</b> (6), incl. anti-suicidal.</li>
      <li><b>Levels:</b> 0.6–1.2; 0.4 prophylaxis; &gt;1.5 toxic; 12-h trough; 5–7 days; monitoring schedule.</li>
      <li><b>Toxicity</b> grades and triggers; <b>long-term</b> effects (LITHIUM).</li>
      <li><b>Valproate, carbamazepine, lamotrigine, atypicals</b>, then comparison table.</li>
      <li><b>Psychologist’s role</b> and conclusion.</li></ol></div>` }
  ],
  flash: [
    ['Define mood stabiliser.', 'Reduces frequency/severity/recurrence of mood episodes without pushing mood the other way.'],
    ['Who discovered lithium’s effect and when?', '<b>John Cade, 1949</b>. Trials by Mogens Schou, 1954.'],
    ['Lithium therapeutic range?', '<b>0.6–1.2 mEq/L</b> (acute mania 0.7–1.2; prophylaxis min 0.4).'],
    ['Lithium toxic level?', '<b>&gt;1.5 mEq/L</b>.'],
    ['When is the lithium level drawn?', '<b>12 h after last dose</b>; first level 5–7 days after starting.'],
    ['Signs of moderate lithium toxicity?', 'Coarse tremor, confusion, ataxia, slurred speech, vomiting.'],
    ['Drugs that raise lithium levels?', '<b>NSAIDs, thiazide diuretics, ACE inhibitors</b> (and dehydration).'],
    ['Lithium’s 4 mechanisms?', 'Inositol depletion, GSK-3β inhibition, NT modulation, neuroprotection (BDNF).'],
    ['Lithium teratogenic defect?', '<b>Ebstein’s anomaly</b> (heart).'],
    ['Unique benefit of lithium?', 'Only mood stabiliser with robust <b>anti-suicidal</b> evidence.'],
    ['Valproate’s headline risk?', '<b>Teratogenicity</b> (neural tube defects, low IQ) + liver toxicity.'],
    ['Carbamazepine’s headline risk?', '<b>CYP450 induction</b> (↓ contraceptives), SJS, agranulocytosis, low sodium.'],
    ['Lamotrigine: use and risk?', 'Prevents <b>bipolar depression</b>; <b>rash/SJS</b> if titrated fast.'],
    ['Lithium monitoring schedule?', 'Level 3-monthly; renal 6-monthly; TSH 6–12-monthly; calcium yearly.']
  ],
  quiz: [
    { q: 'Lithium therapeutic range is…', o: ['0.1–0.3 mEq/L', '0.6–1.2 mEq/L', '1.5–2.5 mEq/L', '350–420 ng/mL'], a: 1, w: '>1.5 is toxic.' },
    { q: 'A lithium patient with coarse tremor, slurred speech and unsteadiness after starting ibuprofen most likely has…', o: ['Relapse of mania', 'Lithium toxicity', 'Tardive dyskinesia', 'Hypothyroidism'], a: 1, w: 'NSAIDs raise lithium levels.' },
    { q: 'Lithium levels should be drawn…', o: ['Right after the dose', '12 hours after the last dose', 'Any time', '48 hours after stopping'], a: 1, w: 'Trough level.' },
    { q: 'Which mood stabiliser should be avoided in women who may become pregnant?', o: ['Lamotrigine', 'Lithium', 'Valproate', 'Quetiapine'], a: 2, w: 'Neural tube defects, lower IQ.' },
    { q: 'Lamotrigine is mainly used for…', o: ['Acute mania', 'Preventing bipolar depression', 'Schizophrenia', 'Alcohol withdrawal'], a: 1, w: 'Weak anti-manic action.' },
    { q: 'A woman on carbamazepine gets pregnant despite the pill. Why?', o: ['Carbamazepine inhibits CYP450', 'Carbamazepine induces CYP450, lowering the contraceptive', 'Lithium interaction', 'Hyponatraemia'], a: 1, w: 'Strong enzyme inducer.' },
    { q: 'The only mood stabiliser with strong anti-suicidal evidence:', o: ['Valproate', 'Lithium', 'Carbamazepine', 'Lamotrigine'], a: 1, w: 'Lithium.' },
    { q: 'Long-term lithium commonly causes…', o: ['Hyperthyroidism', 'Hypothyroidism', 'Agranulocytosis', 'Weight loss'], a: 1, w: 'Up to 20%; check TSH.' },
    { q: 'Valproate is especially preferred in…', o: ['Rapid cycling and irritable mania', 'Pregnancy', 'Bipolar depression only', 'Elderly with dementia'], a: 0, w: 'Also with comorbid substance use.' }
  ],
  cheat: [
    ['Lithium levels', '0.6–1.2 therapeutic · 0.4 min prophylaxis · 0.7–1.2 mania · >1.5 toxic · 12-h trough · first at 5–7 days'],
    ['Monitoring', 'Level 3-monthly · renal 6-monthly · TSH 6–12-monthly · Ca yearly'],
    ['Toxicity', 'Mild 1.5–2 fine tremor/GI · Moderate 2–2.5 coarse tremor, ataxia, slurred · Severe >2.5 seizures, coma'],
    ['↑ Lithium', 'Dehydration, NSAIDs, thiazides, ACE-I'],
    ['History', 'Cade 1949, Schou 1954, FDA 1970 mania / 1974 maintenance'],
    ['LITHIUM SE', 'Leukocytosis, Insipidus, Tremor, Hypothyroid, Increased weight, Upset GI, Malformation (Ebstein)'],
    ['Signature risks', 'Valproate teratogen/liver · Carbamazepine CYP inducer/SJS/↓Na · Lamotrigine rash (slow titration)']
  ]
});
