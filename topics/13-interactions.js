addTopic({
  id: 'interactions',
  title: 'Side Effects & Drug Interactions',
  source: 'Psychotropic medications: side effects and interactions (Dr Harkunwar Singh Sidhu)',
  oneliner: 'Side effects happen because each drug touches <b>more receptors than intended</b>. Interactions happen when a second drug changes the first one’s <b>level</b> (pharmacokinetic, mostly via <b>CYP450</b>) or its <b>effect</b> (pharmacodynamic, e.g. <b>serotonin syndrome</b>).',
  sections: [
    { h: 'Psychotropics and why they are given', html: `
      <ul><li>Act in the brain at cellular, molecular and receptor levels; change cognition, perception, emotion and behaviour.</li>
      <li>Treat <b>symptoms</b> (symptomatic approach); grouped by mechanism and indication; each has its own action, dose and side-effect profile.</li>
      <li><b>Basis:</b> psychiatric disorders are <b>biopsychosocial</b>. Biological factors = genes, neurotransmitter and receptor abnormalities, faulty brain circuits. Drugs modulate neurotransmitters, change circuit activity (hypo/hyper), and act at genetic/epigenetic levels.</li></ul>` },

    { h: 'Why side effects happen: the receptor map', html: `
      <p>Each receptor a drug hits controls its own brain circuit, causing a <b>cascade beyond the intended target</b>. The side-effect profile depends on <b>which receptors, dose, speed of titration and individual genetics</b>.</p>
      <div class="tw"><table><thead><tr><th>Receptor blocked</th><th>Side effects</th><th>Typical culprits</th></tr></thead><tbody>
      <tr><td><b>D2</b> (nigrostriatal / tubero)</td><td>EPS; raised prolactin</td><td>Haloperidol, risperidone</td></tr>
      <tr><td><b>H1</b> (histamine)</td><td>Sedation, appetite ↑, weight gain</td><td>Olanzapine, clozapine, mirtazapine, TCAs, quetiapine</td></tr>
      <tr><td><b>M1</b> (muscarinic)</td><td>Dry mouth, constipation, urinary retention, blurred vision, confusion</td><td>TCAs, clozapine, chlorpromazine, paroxetine</td></tr>
      <tr><td><b>α1</b> (adrenergic)</td><td>Postural hypotension, dizziness, falls</td><td>TCAs, clozapine, quetiapine, chlorpromazine</td></tr>
      <tr><td><b>5-HT2C</b></td><td>Weight gain</td><td>Olanzapine, clozapine</td></tr>
      <tr><td>↑ Serotonin (SERT block)</td><td>Nausea, sexual dysfunction, insomnia, bleeding</td><td>SSRIs, SNRIs</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic</div><b>H</b>1 = <b>H</b>ungry &amp; sleepy · <b>M</b>1 = <b>M</b>outh dry, can’t pee/poo · <b>α</b>1 = <b>A</b>rise and fall (postural hypotension) · <b>D</b>2 = <b>D</b>yskinesia &amp; milk</div>` },

    { h: 'Quick recap of class side effects', html: `
      <div class="grid2">
        <div class="card"><h3>Antipsychotics</h3><p>EPS (dystonia, parkinsonism, akathisia, TD), NMS, metabolic (weight, diabetes; clozapine &amp; SGAs, via 5-HT2C and H1), prolactin, QT, sedation. Risk factors: past SEs, extremes of age, gender, high potency, fast titration, physical illness.</p></div>
        <div class="card"><h3>Antidepressants</h3><p>TCA &gt; SNRI &gt; SSRI. Discontinuation symptoms → taper. Serotonin syndrome. MAOI cheese reaction.</p></div>
        <div class="card"><h3>Mood stabilizers</h3><p>Lithium: narrow index, levels 0.6–1.2, toxic &gt;1.5, check 5–7 days after starting. Valproate: teratogenic, liver.</p></div>
      </div>` },

    { h: 'Drug–drug interactions (DDIs)', html: `
      <p><b>Definition:</b> events where the <b>pharmacokinetic or pharmacodynamic</b> properties of a drug are changed by adding a second drug. Result: <b>increased or decreased</b> effect, or toxicity.</p>
      <div class="grid2">
        <div class="card"><h3>Pharmacokinetic DDI</h3><p>The second drug changes <b>absorption, distribution, metabolism or elimination</b> of the first → its <b>blood level</b> changes. Most important: <b>CYP450</b> in the liver.</p></div>
        <div class="card"><h3>Pharmacodynamic DDI</h3><p>Two drugs act on the <b>same site or system</b> → <b>additive</b> (e.g. two sedatives, two serotonergic drugs) or <b>antagonistic</b> effects. Levels don’t change.</p></div>
      </div>
      <div class="box simple"><div class="bt">Say it simply</div>PK interaction = one drug changes <b>how much</b> of the other is in the blood. PD interaction = both drugs push the <b>same button</b> (too hard) or opposite buttons.</div>` },

    { h: 'CYP450: inhibitors and inducers', html: `
      <p>Psychotropics are metabolised by <b>CYP450</b> liver enzymes. Some drugs <b>inhibit</b> these enzymes (other drugs build up → toxicity); some <b>induce</b> them (other drugs are cleared faster → stop working).</p>
      <div class="tw"><table><thead><tr><th>Interaction</th><th>What happens</th></tr></thead><tbody>
      <tr><td><b>Fluoxetine, paroxetine</b> (CYP2D6 inhibitors)</td><td>↑ levels of TCAs, some antipsychotics (risperidone, aripiprazole), β-blockers</td></tr>
      <tr><td><b>Fluvoxamine</b> (CYP1A2 inhibitor)</td><td>↑ <b>clozapine</b>, olanzapine levels</td></tr>
      <tr><td><b>Carbamazepine</b> (strong CYP3A4 inducer)</td><td>↓ levels of <b>oral contraceptives</b>, antipsychotics, other antiepileptics, itself (auto-induction)</td></tr>
      <tr><td><b>Smoking</b> (CYP1A2 inducer)</td><td>↓ <b>clozapine</b> and olanzapine; stopping smoking → levels ↑</td></tr>
      <tr><td><b>Valproate</b> (inhibits glucuronidation)</td><td>↑ <b>lamotrigine</b> → rash risk (halve lamotrigine dose)</td></tr>
      <tr><td><b>Lithium</b> + NSAIDs, thiazides, ACE inhibitors (renal, not CYP)</td><td>↑ lithium → toxicity</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic</div><b>Inhibitors → Increase</b> the other drug. <b>Inducers → reduce</b> it. Inducers: “<b>C</b>arbamazepine, <b>S</b>moking, <b>R</b>ifampicin, <b>P</b>henytoin, <b>B</b>arbiturates” = “<b>CS RPB</b>: Cigarettes Speed Removal of Psychiatric Brews”.</div>` },

    { h: 'Serotonin syndrome', html: `
      <div class="box flag"><div class="bt">Medical emergency</div>Serotonin toxicity when serotonergic antidepressants (SSRIs) are combined with other drugs that boost serotonin: <b>TCAs, SNRIs, MAOIs, tramadol, linezolid, macrolide antibiotics</b> (also triptans, St John’s wort, lithium).</div>
      <p><b>Triad:</b></p>
      <ol><li><b>Mental status change:</b> agitation, confusion, anxiety</li>
      <li><b>Autonomic instability:</b> fever, sweating, tachycardia, high BP, diarrhoea, dilated pupils</li>
      <li><b>Neuromuscular:</b> <b>clonus</b>, <b>hyperreflexia</b>, tremor, myoclonus</li></ol>
      <p><b>Onset:</b> rapid, within 24 h. <b>Management:</b> stop serotonergic drugs, supportive care, benzodiazepines, <b>cyproheptadine</b> (5-HT2A antagonist).</p>
      <p>Requires a <b>washout</b> when switching certain antidepressants (e.g. <b>MAOI → SSRI</b>).</p>` },

    { h: 'Serotonin syndrome vs NMS (classic exam table)', html: `
      <div class="tw"><table><thead><tr><th></th><th>Serotonin syndrome</th><th>NMS</th></tr></thead><tbody>
      <tr><td>Cause</td><td>Serotonergic drugs (SSRI + MAOI/tramadol…)</td><td>Dopamine blockers (antipsychotics)</td></tr>
      <tr><td>Onset</td><td><b>Fast</b> (hours)</td><td><b>Slow</b> (days)</td></tr>
      <tr><td>Muscles</td><td><b>Clonus, hyperreflexia</b>, tremor</td><td><b>Lead-pipe rigidity</b>, slow reflexes</td></tr>
      <tr><td>Pupils / gut</td><td>Dilated; diarrhoea</td><td>Normal; normal</td></tr>
      <tr><td>Common to both</td><td colspan="2">Fever, confusion, autonomic instability; raised CK possible</td></tr>
      <tr><td>Treatment</td><td>Stop drugs, BZD, <b>cyproheptadine</b></td><td>Stop drug, cooling, <b>dantrolene, bromocriptine</b></td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Memory hook</div><b>S</b>erotonin = <b>S</b>hivering, <b>S</b>hakes, <b>S</b>peedy onset. <b>N</b>MS = <b>N</b>ot moving (rigid), slow.</div>` },

    { h: 'Other important PD interactions', html: `
      <ul><li><b>CNS depression:</b> BZDs + alcohol + opioids + antihistamines → respiratory depression, death.</li>
      <li><b>QT prolongation:</b> adding drugs that each prolong QT (citalopram, TCAs, haloperidol, quetiapine, some antibiotics) → arrhythmia.</li>
      <li><b>Anticholinergic load:</b> TCA + low-potency antipsychotic + anticholinergic → confusion, delirium in elderly.</li>
      <li><b>Seizure threshold:</b> bupropion, clozapine, TCAs together.</li>
      <li><b>Hypertensive crisis:</b> MAOI + sympathomimetics (pseudoephedrine) or tyramine.</li></ul>
      <div class="box tip"><div class="bt">Psychologist’s tip</div>Ask about <b>all</b> medicines, over-the-counter drugs, herbal remedies (St John’s wort), alcohol and smoking changes. “Brown bag review”: ask the patient to bring every medicine they take.</div>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Discuss drug interactions in psychiatry with examples.</b>
      <ol><li><b>Definition</b> of DDI; increase/decrease/toxicity.</li>
      <li><b>PK interactions:</b> ADME, especially CYP450; inhibitors vs inducers; examples (fluoxetine, fluvoxamine–clozapine, carbamazepine–OCP, smoking–clozapine, valproate–lamotrigine, lithium–NSAIDs).</li>
      <li><b>PD interactions:</b> additive/antagonistic; serotonin syndrome (drugs, triad, management); CNS depression; QT; anticholinergic load.</li>
      <li><b>Serotonin syndrome vs NMS</b> table.</li>
      <li><b>Prevention:</b> monotherapy, medication reconciliation, washouts, patient education.</li>
      <li><b>Conclusion.</b></li></ol></div>` }
  ],
  flash: [
    ['Define a drug–drug interaction.', 'When a second drug modifies the PK or PD of the first, changing its efficacy or toxicity.'],
    ['PK vs PD interaction?', 'PK: changes the drug’s <b>level</b> (ADME/CYP450). PD: both act on the <b>same site</b> → additive or antagonistic.'],
    ['CYP inhibitor effect on other drugs?', 'Levels <b>rise</b> → toxicity.'],
    ['CYP inducer effect on other drugs?', 'Levels <b>fall</b> → loss of effect.'],
    ['Fluvoxamine + clozapine?', 'Fluvoxamine inhibits CYP1A2 → <b>clozapine levels rise</b>.'],
    ['Carbamazepine + oral contraceptive?', 'Induction → contraceptive fails.'],
    ['Valproate + lamotrigine?', 'Valproate ↑ lamotrigine → <b>rash</b>; halve lamotrigine dose.'],
    ['Drugs causing serotonin syndrome with SSRIs?', 'TCAs, SNRIs, MAOIs, tramadol, linezolid, macrolides.'],
    ['Serotonin syndrome triad?', 'Mental status change, autonomic instability, neuromuscular (clonus, hyperreflexia).'],
    ['Serotonin syndrome treatment?', 'Stop drugs, supportive, BZD, <b>cyproheptadine</b>.'],
    ['SS vs NMS muscles?', 'SS: clonus, hyperreflexia. NMS: lead-pipe rigidity.'],
    ['H1 / M1 / α1 blockade side effects?', 'H1: sedation, weight · M1: dry mouth, constipation, retention · α1: postural hypotension']
  ],
  quiz: [
    { q: 'A patient on an SSRI is given tramadol and develops agitation, fever, clonus. Diagnosis?', o: ['NMS', 'Serotonin syndrome', 'Lithium toxicity', 'Akathisia'], a: 1, w: 'Tramadol is serotonergic. Clonus = SS.' },
    { q: 'Which feature favours NMS over serotonin syndrome?', o: ['Clonus', 'Rapid onset', 'Lead-pipe rigidity', 'Diarrhoea'], a: 2, w: 'NMS = rigidity, slow onset.' },
    { q: 'Carbamazepine reduces the effect of oral contraceptives because it…', o: ['Inhibits CYP450', 'Induces CYP450', 'Blocks D2', 'Raises prolactin'], a: 1, w: 'Inducer → faster breakdown.' },
    { q: 'Postural hypotension is mainly due to blockade of…', o: ['H1', 'M1', 'α1', 'D2'], a: 2, w: 'α1 adrenergic.' },
    { q: 'Adding valproate to lamotrigine increases the risk of…', o: ['Agranulocytosis', 'Serious rash', 'Hypothyroidism', 'EPS'], a: 1, w: 'Valproate raises lamotrigine levels.' },
    { q: 'A pharmacodynamic interaction means…', o: ['One drug changes the other’s metabolism', 'Both act on the same system → additive or opposing effects', 'Altered absorption', 'Altered excretion'], a: 1, w: 'Levels unchanged; effects combine.' },
    { q: 'Antidote used in serotonin syndrome:', o: ['Dantrolene', 'Cyproheptadine', 'Flumazenil', 'Naloxone'], a: 1, w: '5-HT2A antagonist.' },
    { q: 'Weight gain and sedation are linked mostly to blocking…', o: ['H1 (and 5-HT2C)', 'D2', 'α2', 'SERT'], a: 0, w: 'Hungry and sleepy.' }
  ],
  cheat: [
    ['DDI', 'PK (level changes; CYP450) vs PD (same site; additive/antagonistic)'],
    ['Inhibitors ↑ others', 'Fluoxetine/paroxetine (2D6), fluvoxamine (1A2 → clozapine ↑), valproate (→ lamotrigine ↑)'],
    ['Inducers ↓ others', 'Carbamazepine (OCP fails), smoking (clozapine ↓), barbiturates, phenytoin, rifampicin'],
    ['Lithium ↑', 'NSAIDs, thiazides, ACE-I'],
    ['Serotonin syndrome', 'SSRI + TCA/SNRI/MAOI/tramadol/linezolid/macrolide; triad; clonus; cyproheptadine'],
    ['Receptor map', 'H1 sedation/weight · M1 anticholinergic · α1 postural hypotension · D2 EPS/prolactin · 5-HT2C weight']
  ]
});
