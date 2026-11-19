addTopic({
  id: 'clozapine',
  title: 'Clozapine',
  source: 'Clozapine: Uses and Risks (Dr Harkunwar Singh Sidhu)',
  oneliner: 'Clozapine is the <b>gold-standard drug for treatment-resistant schizophrenia</b>: the most effective antipsychotic, with almost <b>no EPS</b>, but it needs <b>regular blood tests</b> because it can rarely wipe out white blood cells.',
  sections: [
    { h: 'Why clozapine is special', html: `
      <ul><li>The <b>prototype atypical</b>; its “renaissance” led to all second-generation antipsychotics.</li>
      <li><b>Proven superior</b> in treatment-resistant schizophrenia (TRS), and has <b>no/very low EPS</b>.</li>
      <li>Drug of choice for TRS in <b>more than 17 treatment guidelines</b>.</li>
      <li><b>But:</b> heavy side-effect profile (some life-threatening), needs regular blood tests → clinician and patient burden. So it is <b>not first-line</b> (partly due to perceptions that aren’t fully accurate).</li></ul>` },

    { h: 'Indications (4)', html: `
      <div class="grid2">
        <div class="card"><h3>1. Treatment-resistant schizophrenia</h3><p>Failed adequate trials of <b>at least 2 other antipsychotics</b> (usually one typical and one atypical).</p></div>
        <div class="card"><h3>2. Suicidality</h3><p>In psychotic-spectrum disorders: clozapine <b>reduces suicide</b>.</p></div>
        <div class="card"><h3>3. Parkinson’s disease psychosis</h3><p>Because it barely blocks D2, it doesn’t worsen movement.</p></div>
        <div class="card"><h3>4. Treatment-resistant mania</h3><p>When standard mood stabilisers fail.</p></div>
      </div>
      <div class="box mn"><div class="bt">Mnemonic: “Really Sad Parkinson’s Man”</div><b>R</b>esistant schizophrenia · <b>S</b>uicidality · <b>P</b>arkinson’s psychosis · <b>M</b>ania (resistant)</div>` },

    { h: 'Mechanism of action', html: `
      <p><b>Weak D2</b> blockade (low occupancy, quickly released) + <b>strong 5-HT2A</b> blockade + action at <b>D4</b> and many other receptors: H1 (sedation, weight), muscarinic (hypersalivation, constipation), α1 (low BP).</p>
      <div class="box simple"><div class="bt">Say it simply</div>It touches dopamine only lightly (so no stiffness) but touches lots of other receptors, which explains both its power and its long list of side effects.</div>` },

    { h: 'Starting clozapine', html: `
      <h3>Before starting (pre-initiation)</h3>
      <ul><li><b>Confirm the diagnosis</b> and that it truly is <b>treatment resistance</b>.</li>
      <li>Tests: <b>complete blood count (WBC/ANC)</b>, <b>ECG</b>, <b>echocardiography</b>, <b>CRP</b>, <b>BMI, waist</b>, <b>lipid profile</b> (and glucose).</li>
      <li><b>Informed consent</b> (high-risk drug). May need <b>hospital admission</b>.</li></ul>
      <h3>Titration</h3>
      <ul><li>Side effects depend on <b>dose and speed of titration</b> → start low, increase <b>slowly</b> on a set schedule, ideally with hospital monitoring.</li>
      <li>Watch during titration: <b>sedation, postural hypotension, fever, chest pain, breathlessness, hypersalivation, seizures</b>.</li>
      <li>Effective dose range: <span class="k">150–900 mg/day</span> (highly individual).</li>
      <li>One of the few antipsychotics with <b>therapeutic blood levels</b>: <span class="k">350–420 ng/mL</span> (at least 350), checked on 2 occasions.</li>
      <li>Adequate trial: <span class="k">at least 3–6 months</span> at therapeutic level.</li>
      <li><b>Smoking</b> and other drugs change levels: smoking <b>induces CYP1A2</b> and lowers clozapine; <b>stopping smoking raises levels</b> (toxicity risk). Fluvoxamine raises levels too.</li></ul>` },

    { h: 'Monitoring', html: `
      <div class="tw"><table><thead><tr><th>Test</th><th>When</th></tr></thead><tbody>
      <tr><td><b>WBC / neutrophil count</b></td><td>Compulsory. As taught: <b>weekly for the first month(s), then twice-monthly for ~6 months, then monthly for as long as on clozapine</b> (lifelong). (Standard UK schedule: weekly × 18 weeks, fortnightly to 1 year, then monthly.)</td></tr>
      <tr><td><b>ECG</b></td><td>Before starting, every 3–6 months, and if <b>myocarditis</b> warning signs</td></tr>
      <tr><td><b>CRP</b> (± troponin)</td><td>Before starting; during early weeks for myocarditis</td></tr>
      <tr><td><b>BMI, waist</b></td><td>Before starting, then every 3 months</td></tr>
      <tr><td><b>Stool frequency</b></td><td>Regularly (constipation → ileus)</td></tr>
      <tr><td>Glucose, lipids</td><td>Baseline and follow-up</td></tr>
      </tbody></table></div>` },

    { h: 'Adverse effects', html: `
      <div class="box flag"><div class="bt">Life-threatening (know the warning signs)</div><ul>
        <li><b>Agranulocytosis / neutropenia</b>: very low WBC → infections. <b>Warning sign: fever, sore throat, flu-like illness.</b> Rare (&lt;1%), mostly in the first 18 weeks.</li>
        <li><b>Myocarditis / cardiomyopathy</b>: mostly first 4–8 weeks. Chest pain, breathlessness, fever, fast heart rate.</li>
        <li><b>Seizures</b>: dose-related, especially <b>&gt;600 mg</b>; an anti-epileptic (e.g. valproate) may be added in at-risk people.</li>
        <li><b>Severe constipation → paralytic ileus</b> (gut stops moving; can be fatal).</li></ul></div>
      <div class="grid2">
        <div class="card"><h3>Common</h3><ul><li><b>Sedation</b></li><li><b>Hypersalivation</b> (drooling, especially at night)</li><li><b>Constipation</b></li><li>Postural hypotension, tachycardia</li><li>Benign fever early on</li><li>Nocturnal enuresis</li></ul></div>
        <div class="card"><h3>Metabolic</h3><ul><li><b>Major weight gain</b>, metabolic syndrome, diabetes, dyslipidaemia (after ~3 months)</li><li>Needs BMI checks, exercise, diet</li></ul></div>
      </div>
      <div class="box mn"><div class="bt">Mnemonic: CLOZAPINE</div>
      <b>C</b>onstipation · <b>L</b>ow WBC (agranulocytosis) · <b>O</b>rthostatic hypotension · <b>Z</b>zz sedation · <b>A</b>ppetite ↑ / weight gain · <b>P</b>tyalism (drooling) · <b>I</b>nflamed heart (myocarditis) · <b>N</b>euro: seizures · <b>E</b>xcess sugar (diabetes)</div>` },

    { h: 'What the patient should know', html: `
      <ul><li>It is the drug of choice when <b>two other antipsychotics have failed</b>.</li>
      <li>Starting is gradual, may need admission and tests (CBC, ECG, echo, BMI, lipids).</li>
      <li><b>Blood tests are compulsory</b>, and lifelong.</li>
      <li>Know warning signs (fever/sore throat, chest pain), but the <b>risk is low</b>: emphasise that.</li>
      <li>Weight gain is likely: plan diet and exercise early.</li>
      <li>Tell the doctor if you <b>start or stop smoking</b>.</li>
      <li><b>Benefits:</b> better quality of life, relief of positive and negative symptoms, <b>less suicidality</b>. It should <b>not be denied</b> to people who meet the criteria.</li></ul>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Write a note on clozapine.</b>
      <ol><li><b>Intro:</b> prototype atypical; gold standard for TRS; minimal EPS; in 17+ guidelines.</li>
      <li><b>Indications:</b> TRS (failed ≥2), suicidality in psychosis, Parkinson’s psychosis, resistant mania.</li>
      <li><b>Mechanism:</b> weak D2, strong 5-HT2A, D4, H1, M, α1.</li>
      <li><b>Initiation:</b> pre-tests, slow titration, 150–900 mg, levels 350–420 ng/mL, 3–6 month trial, smoking effect.</li>
      <li><b>Adverse effects:</b> agranulocytosis, myocarditis, seizures (&gt;600 mg), ileus; sedation, drooling, hypotension, weight gain (CLOZAPINE).</li>
      <li><b>Monitoring:</b> WBC schedule, ECG, CRP, BMI, stools.</li>
      <li><b>Psychoeducation &amp; conclusion:</b> risks are manageable; benefits (QoL, less suicide) mean it shouldn’t be withheld.</li></ol></div>` }
  ],
  flash: [
    ['Clozapine is the drug of choice for…?', '<b>Treatment-resistant schizophrenia</b> (failed ≥2 antipsychotics).'],
    ['4 indications?', 'TRS, suicidality in psychosis, Parkinson’s psychosis, treatment-resistant mania.'],
    ['Most feared side effect requiring blood tests?', '<b>Agranulocytosis</b> (very low neutrophils).'],
    ['Warning sign of agranulocytosis?', 'Fever, sore throat, flu-like symptoms.'],
    ['Cardiac complication & signs?', '<b>Myocarditis</b>: chest pain, breathlessness, fever, tachycardia (first weeks).'],
    ['Seizure risk dose?', '<b>&gt;600 mg/day</b>.'],
    ['Dose range & target blood level?', '150–900 mg; <b>350–420 ng/mL</b>.'],
    ['Minimum adequate trial?', '<b>3–6 months</b>.'],
    ['Effect of stopping smoking?', 'Clozapine levels <b>rise</b> (smoking induces CYP1A2).'],
    ['Pre-initiation tests?', 'CBC, ECG, echocardiogram, CRP, BMI/waist, lipids.'],
    ['CLOZAPINE mnemonic?', 'Constipation, Low WBC, Orthostatic hypotension, Zzz, Appetite, Ptyalism, Inflamed heart, Neuro (seizures), Excess sugar'],
    ['EPS risk with clozapine?', '<b>Lowest</b> of all antipsychotics.']
  ],
  quiz: [
    { q: 'Clozapine should be considered after failure of…', o: ['One antidepressant', 'At least two antipsychotics', 'One mood stabiliser', 'CBT'], a: 1, w: 'Usually one typical and one atypical.' },
    { q: 'A patient on clozapine presents with fever and sore throat. Urgent test?', o: ['Lithium level', 'Full blood count (WBC/ANC)', 'Prolactin', 'TSH'], a: 1, w: 'Rule out agranulocytosis.' },
    { q: 'Clozapine’s seizure risk rises notably above…', o: ['100 mg', '300 mg', '600 mg', '1500 mg'], a: 2, w: '>600 mg/day.' },
    { q: 'Which is NOT an indication for clozapine?', o: ['Treatment-resistant schizophrenia', 'Suicidality in schizophrenia', 'First-line mild depression', 'Parkinson’s disease psychosis'], a: 2, w: 'Not used for depression.' },
    { q: 'A stable clozapine patient quits smoking. Expect…', o: ['Lower clozapine levels', 'Higher clozapine levels', 'No change', 'Agranulocytosis'], a: 1, w: 'Smoking induces CYP1A2; stopping removes that.' },
    { q: 'Potentially fatal gut complication of clozapine:', o: ['Diarrhoea', 'Paralytic ileus from constipation', 'Pancreatitis', 'Gastric ulcer'], a: 1, w: 'Monitor stool frequency.' },
    { q: 'Target clozapine plasma level for an adequate trial:', o: ['0.6–1.2 mEq/L', '350–420 ng/mL', '50–100 ng/mL', '>1000 ng/mL'], a: 1, w: '0.6–1.2 is lithium.' }
  ],
  cheat: [
    ['Indications', 'TRS (≥2 failed), suicidality, Parkinson’s psychosis, resistant mania'],
    ['Dose / level / trial', '150–900 mg · 350–420 ng/mL · 3–6 months'],
    ['Seizures', '>600 mg'],
    ['Serious ADRs', 'Agranulocytosis, myocarditis, seizures, ileus'],
    ['Monitoring', 'WBC weekly → fortnightly → monthly lifelong; ECG 3–6 monthly; CRP; BMI 3-monthly; stools'],
    ['Smoking', 'Induces CYP1A2 → ↓ level; quitting → ↑ level']
  ]
});
