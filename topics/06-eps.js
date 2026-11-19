addTopic({
  id: 'eps',
  title: 'Extrapyramidal Symptoms (EPS) & NMS',
  source: 'EPS, Endocrine effects & Metabolic Monitoring + Psychotropic side effects (Dr Sidhu)',
  oneliner: 'EPS are <b>movement side effects</b> caused when antipsychotics block too much dopamine (D2) in the <b>movement pathway</b>. Learn the four in order of timing: <b>dystonia → akathisia → parkinsonism → tardive dyskinesia</b>.',
  sections: [
    { h: 'What is EPS?', html: `
      <p><b>Extrapyramidal symptoms</b> = adverse drug reactions caused by <b>dopamine D2-blocking drugs</b>; also called <b>medication-induced movement disorders</b>. Mostly from antipsychotics (also anti-emetics like metoclopramide).</p>
      <p>First described in <b>1952</b>, when <b>chlorpromazine</b> was seen to produce Parkinson-like effects.</p>
      <p><b>Mechanism:</b> high <b>D2 occupancy (&gt;80%)</b> in the <b>nigrostriatal</b> pathway (part of the extrapyramidal motor system). Too little dopamine → parkinsonism (tremor, rigidity, slowness). Too much dopamine (or supersensitive receptors) → hyperkinetic movements (tics, dyskinesia).</p>
      <div class="box simple"><div class="bt">Say it simply</div>The nigrostriatal pathway is the brain’s <b>movement oil</b>. Antipsychotics drain some of it. The machinery gets stiff, shaky, jerky or restless.</div>` },

    { h: 'Classification', html: `
      <div class="grid2">
        <div class="card"><h3>Acute</h3><ul><li>Acute dystonia</li><li>Acute akathisia</li><li>Tremor / parkinsonism</li></ul></div>
        <div class="card"><h3>Chronic (tardive = “late”)</h3><ul><li>Tardive dyskinesia</li><li>Tardive dystonia</li><li>Tardive akathisia</li></ul></div>
      </div>
      <p>EPS can be <b>hyperkinetic</b> (too much movement: dystonia, akathisia, TD) or <b>hypokinetic</b> (too little: parkinsonism).</p>` },

    { h: 'When they appear (timeline)', html: `
      <div class="timeline">
        <div><b>Hours–days</b>Acute dystonia<br><small>50% within 48 h, 90% within 5 days</small></div>
        <div><b>Days–weeks</b>Akathisia<br><small>within 4 weeks of start/dose rise</small></div>
        <div><b>Weeks</b>Parkinsonism</div>
        <div><b>Months–years</b>Tardive dyskinesia<br><small>may be irreversible</small></div>
      </div>
      <div class="box mn"><div class="bt">Mnemonic: the rule of 4s</div>Acute dystonia in <b>4 hours</b> · Akathisia in <b>4 days</b> · Parkinsonism in <b>4 weeks</b> · Tardive dyskinesia after <b>4 months</b>.<br>Order: <b>“D</b>on’t <b>A</b>ct <b>P</b>anicky, <b>T</b>hink” → Dystonia, Akathisia, Parkinsonism, TD.</div>` },

    { h: 'The four EPS in detail', html: `
      <h3>1. Acute dystonia</h3>
      <p>Sudden <b>involuntary, sustained or intermittent muscle contraction</b> causing twisting movements or abnormal postures. Painful and frightening.</p>
      <div class="tw"><table><thead><tr><th>Body part</th><th>Name</th></tr></thead><tbody>
      <tr><td>Eyes roll up</td><td><b>Oculogyric crisis</b></td></tr><tr><td>Neck</td><td><b>Torticollis</b></td></tr>
      <tr><td>Jaw</td><td><b>Trismus</b></td></tr><tr><td>Back arches / limbs</td><td><b>Opisthotonus</b></td></tr>
      <tr><td>Abdomen / pelvis</td><td><b>Tortipelvic crisis</b></td></tr><tr><td>Face &amp; tongue</td><td><b>Buccolingual crisis</b></td></tr>
      </tbody></table></div>
      <div class="box flag"><div class="bt">Danger</div><b>Laryngeal dystonia</b> can block the airway (trouble breathing, swallowing, speaking): life-threatening.</div>
      <h3>2. Akathisia</h3>
      <p><b>Subjective</b> inner restlessness with a compelling urge to move + <b>objective</b> signs: pacing, leg crossing/swinging, shifting from foot to foot, can’t sit still. Distressing; can worsen agitation and <b>increase suicide and self-harm risk</b>. Often mistaken for anxiety or worsening psychosis.</p>
      <h3>3. Drug-induced parkinsonism</h3>
      <p>Four motor features: <b>resting tremor, bradykinesia (slowness), rigidity, postural instability</b>. Signs: <b>masked face</b>, stooped posture, <b>shuffling (festinating) gait</b>. Cause: excess D2 block in the nigrostriatal pathway.</p>
      <div class="box mn"><div class="bt">Mnemonic: TRAP</div><b>T</b>remor · <b>R</b>igidity · <b>A</b>kinesia/bradykinesia · <b>P</b>ostural instability</div>
      <h3>4. Tardive dyskinesia (TD)</h3>
      <p>A <b>chronic</b>, late effect; can be <b>persistent and irreversible</b>. Involuntary, repetitive <b>choreoathetoid</b> movements, mainly <b>orofacial</b>: lip smacking/pursing, tongue protrusion, grimacing, blinking, chewing; also jerky hand/leg movements, waving arms. Usually <b>not painful</b>, but affects social life, chewing, swallowing, speech.</p>
      <p>More likely in <b>elderly women</b>, mood (affective) illness, and with high-potency dopamine blockers.</p>` },

    { h: 'Who is at risk?', html: `
      <ul><li><b>FGAs &gt; SGAs.</b> Among SGAs, <b>clozapine lowest</b>, <b>risperidone highest</b>.</li>
      <li><b>Young men → acute dystonia.</b> <b>Older women → parkinsonism and TD.</b></li>
      <li>Previous EPS, high doses, long-term use, fast titration</li>
      <li>Older age; women (hormonal factors); family history of movement disorders</li>
      <li>Neurological illness (e.g. Parkinson’s); sudden withdrawal of some drugs; certain toxins</li></ul>
      <p><b>Assessment:</b> onset in relation to the drug, current and past medicines, family history, examination. (Common scales: AIMS for TD, Barnes scale for akathisia, Simpson-Angus for parkinsonism.)</p>` },

    { h: 'Management (high-yield table)', html: `
      <div class="tw"><table><thead><tr><th>EPS</th><th>Treatment</th></tr></thead><tbody>
      <tr><td><b>Acute dystonia</b></td><td>Stop/substitute the drug. <b>Anticholinergic: benztropine 1–2 mg IM</b> (or promethazine/procyclidine). Short prophylaxis (1 week) then slow taper when starting new antipsychotics.</td></tr>
      <tr><td><b>Laryngeal / pharyngeal dystonia</b></td><td><b>Emergency airway</b>; <b>IV anticholinergic</b> (risk of respiratory arrest).</td></tr>
      <tr><td><b>Akathisia</b></td><td>Reduce, stop or switch. <b>Propranolol</b> (β-blocker) or 5-HT2A antagonists: <b>mirtazapine 7.5–15 mg</b>, cyproheptadine, trazodone, mianserin, ritanserin. (Benzodiazepines can help.)</td></tr>
      <tr><td><b>Parkinsonism</b></td><td>Reduce, stop or switch. <b>Anticholinergics</b> (trihexyphenidyl), <b>amantadine</b>, L-dopa, selegiline.</td></tr>
      <tr><td><b>Tardive dyskinesia</b></td><td>Gradually taper/stop the cause. <b>STOP anticholinergics</b> (they worsen TD). <b>VMAT2 inhibitors</b>: valbenazine, deutetrabenazine, tetrabenazine. <b>Switch to clozapine or quetiapine.</b></td></tr>
      <tr><td><b>Tardive dystonia</b></td><td>Benzodiazepines, botulinum toxin (face), baclofen, tetrabenazine; refractory: <b>deep brain stimulation</b> or pallidotomy.</td></tr>
      </tbody></table></div>
      <div class="box tip"><div class="bt">Exam trap</div>Anticholinergics <b>help</b> dystonia and parkinsonism but <b>worsen tardive dyskinesia</b>, and don’t help akathisia much (use propranolol).</div>
      <p><b>Prognosis:</b> acute forms usually <b>resolve</b> after stopping the drug or with treatment; <b>tardive forms usually persist</b>.</p>` },

    { h: 'Neuroleptic Malignant Syndrome (NMS)', html: `
      <div class="box flag"><div class="bt">Medical emergency</div>
      Rare, but potentially fatal reaction to dopamine blockers. More with high-potency and older antipsychotics, rapid dose increases, dehydration; can occur with newer drugs too.</div>
      <div class="box mn"><div class="bt">Mnemonic: FEVER</div><b>F</b>ever (high) · <b>E</b>ncephalopathy (confusion) · <b>V</b>itals unstable (BP, pulse, sweating) · <b>E</b>levated CK (creatine kinase) and WBC · <b>R</b>igidity (“lead-pipe”)</div>
      <p><b>Management:</b> stop the antipsychotic, hospital/ICU, cool and hydrate, <b>dantrolene</b> (muscle relaxant) and <b>bromocriptine</b> (dopamine agonist); benzodiazepines.</p>
      <p>Contrast with <b>serotonin syndrome</b> (Topic 13): that one has <b>clonus, hyperreflexia, rapid onset</b>; NMS has <b>lead-pipe rigidity, slow onset, slow reflexes</b>.</p>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Write a note on extrapyramidal side effects of antipsychotics and their management.</b>
      <ol><li><b>Definition</b>, history (chlorpromazine 1952), mechanism (&gt;80% D2 occupancy, nigrostriatal).</li>
      <li><b>Classification:</b> acute (dystonia, akathisia, parkinsonism) vs tardive (TD, tardive dystonia/akathisia).</li>
      <li><b>Each EPS:</b> onset (rule of 4s), features (oculogyric crisis, torticollis; inner restlessness; TRAP; orofacial choreoathetoid movements).</li>
      <li><b>Risk factors:</b> FGA, high potency, high dose, young men (dystonia), elderly women (TD).</li>
      <li><b>Management table</b>; trap: anticholinergics worsen TD; VMAT2 inhibitors; switch to clozapine.</li>
      <li><b>NMS</b> as emergency (FEVER).</li>
      <li><b>Prognosis</b> and psychologist’s role: spot restlessness/new movements early, link to adherence, refer.</li></ol></div>` }
  ],
  flash: [
    ['Mechanism of EPS?', '<b>&gt;80% D2 occupancy</b> in the <b>nigrostriatal</b> pathway.'],
    ['First described when and with which drug?', '<b>1952, chlorpromazine</b>.'],
    ['Rule of 4s?', 'Dystonia 4 hours · Akathisia 4 days · Parkinsonism 4 weeks · TD 4 months'],
    ['Acute dystonia onset figures?', '<b>50% within 48 h, 90% within 5 days</b>.'],
    ['Oculogyric crisis / torticollis / opisthotonus?', 'Eyes roll up / neck twist / back arches'],
    ['Life-threatening form of dystonia?', '<b>Laryngeal dystonia</b> (airway obstruction).'],
    ['Treatment of acute dystonia?', '<b>Benztropine 1–2 mg IM</b> (anticholinergic); IV if laryngeal.'],
    ['Akathisia: features and treatment?', 'Inner restlessness + pacing/leg crossing. <b>Propranolol</b>, mirtazapine 7.5–15 mg; reduce/switch.'],
    ['Parkinsonism features (TRAP)?', 'Tremor, Rigidity, Akinesia, Postural instability; masked face, shuffling gait.'],
    ['Tardive dyskinesia: what & who?', 'Late, often irreversible orofacial choreoathetoid movements. Elderly women, mood illness, high-potency drugs.'],
    ['Treatment of TD?', 'Taper cause, <b>stop anticholinergics</b>, <b>VMAT2 inhibitors</b> (valbenazine, deutetrabenazine, tetrabenazine), switch to clozapine/quetiapine.'],
    ['Lowest / highest EPS among SGAs?', 'Lowest: <b>clozapine</b>. Highest: <b>risperidone</b>.'],
    ['NMS mnemonic?', 'FEVER: Fever, Encephalopathy, Vitals unstable, Elevated CK, Rigidity'],
    ['NMS treatment?', 'Stop drug, ICU, cooling, fluids, <b>dantrolene, bromocriptine</b>.']
  ],
  quiz: [
    { q: 'Within 48 hours of IM haloperidol, a young man’s eyes roll upward. This is…', o: ['Tardive dyskinesia', 'Oculogyric crisis (acute dystonia)', 'Akathisia', 'NMS'], a: 1, w: 'Young men + early onset = acute dystonia.' },
    { q: 'Best immediate treatment for acute dystonia:', o: ['Propranolol', 'IM benztropine (anticholinergic)', 'Valbenazine', 'Increase the antipsychotic'], a: 1, w: 'Benztropine 1–2 mg IM.' },
    { q: 'A patient paces and says “I can’t sit still inside”. First-choice drug?', o: ['Propranolol', 'Haloperidol', 'Amantadine for TD', 'Lithium'], a: 0, w: 'Akathisia → β-blocker (or mirtazapine).' },
    { q: 'Which worsens tardive dyskinesia?', o: ['VMAT2 inhibitors', 'Switching to clozapine', 'Anticholinergics', 'Tapering the antipsychotic'], a: 2, w: 'Stop anticholinergics in TD.' },
    { q: 'Tardive dyskinesia is most likely in…', o: ['Young men', 'Elderly women', 'Children', 'Patients on clozapine only'], a: 1, w: 'Older women, mood disorders, high-potency drugs.' },
    { q: 'Fever, lead-pipe rigidity, confusion, high CK on an antipsychotic suggests…', o: ['Serotonin syndrome', 'NMS', 'Akathisia', 'Lithium toxicity'], a: 1, w: 'FEVER = NMS. Emergency.' },
    { q: 'Among atypicals, the LOWEST EPS risk is with…', o: ['Risperidone', 'Clozapine', 'Haloperidol', 'Aripiprazole'], a: 1, w: 'Clozapine; risperidone highest.' },
    { q: 'Which EPS usually persists even after stopping the drug?', o: ['Acute dystonia', 'Parkinsonism', 'Tardive dyskinesia', 'Akathisia'], a: 2, w: 'Tardive conditions often persist.' }
  ],
  cheat: [
    ['EPS mechanism', '>80% D2 occupancy, nigrostriatal; first seen 1952 with chlorpromazine'],
    ['Order & timing', 'Dystonia (4 h; 50% in 48 h, 90% in 5 d) → Akathisia (4 d, <4 wk) → Parkinsonism (4 wk) → TD (4 mo+)'],
    ['Who', 'Young men = dystonia; elderly women = parkinsonism, TD; clozapine lowest, risperidone highest (SGA)'],
    ['Rx', 'Dystonia: benztropine 1–2 mg IM · Akathisia: propranolol, mirtazapine · Parkinsonism: anticholinergic, amantadine · TD: stop anticholinergic, VMAT2 inhibitor, clozapine'],
    ['NMS', 'FEVER; stop drug, cool, dantrolene, bromocriptine']
  ]
});
