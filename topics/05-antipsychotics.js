addTopic({
  id: 'antipsychotics',
  title: 'Antipsychotics: Typical vs Atypical',
  source: 'Antipsychotics: Typical vs Atypical (Dr Priyanka R) + Psychotropic side effects (Dr Sidhu)',
  oneliner: 'Psychosis = the dopamine <b>“volume knob” turned up too high</b>. Antipsychotics turn it down by <b>blocking D2</b>. Typicals block tightly → <b>movement problems</b>; atypicals also block serotonin → <b>weight/metabolic problems</b>.',
  sections: [
    { h: 'What are antipsychotics?', html: `
      <p>Medicines used mainly to control <b>psychosis</b>: hallucinations, delusions, disorganised thinking. Also used for aggression.</p>
      <p><b>Indications:</b> schizophrenia; bipolar disorder (acute mania, mood stabilisation); severe/treatment-resistant depression (augmentation); aggressive behaviour in IDD, autism, personality disorders.</p>
      <p>Discovered <b>by chance (serendipity)</b>; the mechanism was understood later. Classification into first and second generation is “relatively arbitrary”.</p>` },

    { h: 'Symptoms they treat', html: `
      <div class="grid2">
        <div class="card"><h3>Positive symptoms (something ADDED)</h3><ul><li><b>Hallucinations</b>: hearing/seeing things that aren’t there</li><li><b>Delusions</b>: fixed false beliefs (e.g. paranoia)</li><li><b>Disorganised speech</b></li></ul><p>Both classes treat these <b>well</b>.</p></div>
        <div class="card"><h3>Negative symptoms (something TAKEN AWAY)</h3><ul><li><b>Flat affect</b>: less emotional expression</li><li><b>Avolition</b>: loss of motivation</li><li><b>Social withdrawal</b></li></ul><p>Atypicals help <b>somewhat better</b>.</p></div>
      </div>` },

    { h: 'The dopamine hypothesis & four pathways', html: `
      <p>Too much dopamine activity in <b>certain</b> pathways causes psychosis. But dopamine also does other jobs elsewhere, and blocking those causes the side effects.</p>
      <div data-widget="pathways"></div>
      <div class="box mn"><div class="bt">Mnemonic: pathway → what blocking does</div>
      <b>L</b>imbic = <b>L</b>ess voices (the cure) · <b>C</b>ortical = <b>C</b>old, apathetic (worse negatives) · <b>N</b>igro = <b>N</b>o smooth movement (EPS) · <b>T</b>ubero = <b>T</b>oo much prolactin (milk, periods stop)</div>` },

    { h: 'Typical (first-generation, FGAs)', html: `
      <p><b>Mechanism:</b> <b>strong D2 blockade</b>, mainly reducing positive symptoms via the mesolimbic pathway.</p>
      <p><b>Key limitation:</b> the blockade is <b>not selective</b>; it hits the <b>nigrostriatal</b> (movement) pathway too → <b>EPS is the hallmark side effect</b>.</p>
      <div class="tw"><table><thead><tr><th>Drug</th><th>Note</th></tr></thead><tbody>
      <tr><td><b>Haloperidol</b></td><td>High-potency; strong D2 block; <b>high EPS</b></td></tr>
      <tr><td><b>Chlorpromazine</b></td><td>Low-potency; <b>more sedating</b>, fewer EPS at first. First antipsychotic (1952)</td></tr>
      <tr><td><b>Fluphenazine</b></td><td>Available as a <b>long-acting depot injection</b></td></tr>
      <tr><td><b>Perphenazine</b></td><td>Mid-potency</td></tr>
      </tbody></table></div>
      <p><b>FGA side effects:</b> EPS (acute dystonia → akathisia → parkinsonism → tardive dyskinesia), <b>raised prolactin</b> (menstrual changes, breast enlargement), sedation, and rarely <b>neuroleptic malignant syndrome (NMS)</b> (fever, rigidity, autonomic instability; emergency).</p>
      <div class="box simple"><div class="bt">Potency rule</div><b>High potency</b> (haloperidol) = more EPS, less sedation. <b>Low potency</b> (chlorpromazine) = more sedation, anticholinergic effects and low BP, fewer EPS.</div>` },

    { h: 'Atypical (second-generation, SGAs)', html: `
      <p><b>Mechanism:</b> block D2 <b>more loosely</b> AND block <b>serotonin 5-HT2A</b>. Serotonin blockade indirectly <b>restores some dopamine</b> in motor and cognitive pathways.</p>
      <p><b>Advantage:</b> far fewer EPS, often better for negative symptoms. <b>Cost:</b> <b>metabolic</b> side effects.</p>
      <div class="tw"><table><thead><tr><th>Drug</th><th>Remember it for</th></tr></thead><tbody>
      <tr><td><b>Clozapine</b></td><td>Most effective for <b>treatment-resistant</b> cases; needs <b>blood monitoring</b> (agranulocytosis)</td></tr>
      <tr><td><b>Olanzapine</b></td><td>Effective, but <b>highest weight gain</b> (with clozapine)</td></tr>
      <tr><td><b>Risperidone</b></td><td>EPS at higher doses; <b>raises prolactin</b> most among atypicals</td></tr>
      <tr><td><b>Quetiapine</b></td><td><b>Sedating</b>; low EPS and prolactin</td></tr>
      <tr><td><b>Aripiprazole</b></td><td><b>Partial D2 agonist</b>: distinct mechanism; low metabolic risk; can cause akathisia</td></tr>
      </tbody></table></div>
      <p><b>SGA side effects:</b> weight gain, insulin resistance → type 2 diabetes, dyslipidaemia (high cholesterol, triglycerides), sedation, <b>QT prolongation</b> (so ECGs are sometimes done). Weight gain is driven by <b>5-HT2C and H1 (histamine) blockade</b>, plus sedation and less activity.</p>` },

    { h: 'Side by side', html: `
      <div class="tw"><table><thead><tr><th>Feature</th><th>Typical (FGA)</th><th>Atypical (SGA)</th></tr></thead><tbody>
      <tr><td>Main target</td><td>D2 (strong)</td><td>D2 (looser) + 5-HT2A</td></tr>
      <tr><td>Positive symptoms</td><td>Effective</td><td>Effective</td></tr>
      <tr><td>Negative symptoms</td><td>Limited</td><td>Generally better</td></tr>
      <tr><td>EPS</td><td><b>High</b></td><td>Lower</td></tr>
      <tr><td>Metabolic effects</td><td>Lower</td><td><b>Higher</b></td></tr>
      <tr><td>Prolactin rise</td><td>Common</td><td>Variable (notable with risperidone)</td></tr>
      <tr><td>Cost</td><td>Cheaper</td><td>More expensive</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic from the lecture (write this!)</div><b>T</b>ypical = <b>T</b>ight D2 block, <b>T</b>remors.<br><b>A</b>typical = <b>A</b>lso serotonin, <b>A</b>dded weight.</div>` },

    { h: 'Risk factors for side effects', html: `
      <ul><li>Past history of side effects</li><li>Extremes of age (very young / old)</li><li>Gender</li>
      <li>Type of drug: <b>high-potency → EPS</b>; low-potency/SGA → metabolic</li>
      <li>Fast titration and high dose</li>
      <li>Physical illness: anaemia, dementia, Parkinson’s, stroke, diabetes, hypertension</li></ul>` },

    { h: 'Clinical points & psychologist’s role', html: `
      <ul><li><b>No universal best drug</b>: choose by symptoms, side-effect tolerance, history, preference.</li>
      <li><b>Adherence is central</b>: EPS and weight gain are the top reasons people stop.</li>
      <li><b>Monitoring:</b> movement exams for typicals; weight, glucose, lipids for atypicals; blood counts for clozapine.</li>
      <li><b>Psychological support:</b> psychoeducation, CBT for psychosis, family work improve outcomes.</li></ul>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Compare typical and atypical antipsychotics.</b>
      <ol><li><b>Intro:</b> drugs for psychosis; dopamine hypothesis; positive vs negative symptoms.</li>
      <li><b>Four dopamine pathways</b> and the effect of blocking each.</li>
      <li><b>Typicals:</b> strong D2 block; haloperidol, chlorpromazine, fluphenazine; EPS, prolactin, NMS.</li>
      <li><b>Atypicals:</b> D2 + 5-HT2A; clozapine, olanzapine, risperidone, quetiapine, aripiprazole; fewer EPS, better negatives, metabolic risk, QT.</li>
      <li><b>Comparison table</b> (7 rows above).</li>
      <li><b>Monitoring</b> and adherence; psychological support.</li>
      <li><b>Conclusion:</b> “Typical = Tight D2, Tremors; Atypical = Also serotonin, Added weight.” Choice balances efficacy, side effects and the person’s life.</li></ol></div>` }
  ],
  flash: [
    ['Main mechanism of all antipsychotics?', '<b>D2 dopamine receptor blockade</b> in the mesolimbic pathway.'],
    ['What do atypicals block in addition?', '<b>5-HT2A</b> serotonin receptors.'],
    ['Blocking the nigrostriatal pathway causes…?', '<b>EPS</b>: dystonia, akathisia, parkinsonism, tardive dyskinesia.'],
    ['Blocking the tuberoinfundibular pathway causes…?', '<b>Raised prolactin</b>: galactorrhoea, amenorrhoea, sexual dysfunction.'],
    ['Mesocortical pathway in schizophrenia is…?', '<b>Underactive</b> → negative/cognitive symptoms; blocking worsens them.'],
    ['High vs low potency typicals?', 'High (haloperidol): more EPS. Low (chlorpromazine): more sedation, fewer EPS.'],
    ['Which typical comes as a depot?', '<b>Fluphenazine</b> (decanoate).'],
    ['Which atypical is a partial D2 agonist?', '<b>Aripiprazole</b>.'],
    ['Atypicals with most weight gain?', '<b>Olanzapine and clozapine</b>.'],
    ['Atypical that raises prolactin most?', '<b>Risperidone</b>.'],
    ['The exam mnemonic?', 'Typical = Tight D2 block, Tremors. Atypical = Also serotonin, Added weight.'],
    ['Receptors causing antipsychotic weight gain?', '<b>5-HT2C and H1</b> blockade.']
  ],
  quiz: [
    { q: 'Hallucinations are linked to excess dopamine in the…', o: ['Nigrostriatal', 'Mesolimbic', 'Tuberoinfundibular', 'Mesocortical'], a: 1, w: 'Blocking mesolimbic D2 = therapeutic effect.' },
    { q: 'A patient on haloperidol develops tremor and rigidity. Pathway involved?', o: ['Mesolimbic', 'Mesocortical', 'Nigrostriatal', 'Tuberoinfundibular'], a: 2, w: 'Nigrostriatal = movement → EPS.' },
    { q: 'Atypical antipsychotics differ mainly by also blocking…', o: ['H1', '5-HT2A', 'GABA-A', 'NMDA'], a: 1, w: 'D2 + 5-HT2A.' },
    { q: 'Main long-term concern with atypicals?', o: ['Tardive dyskinesia', 'Metabolic syndrome', 'Hypertensive crisis', 'Agranulocytosis in all'], a: 1, w: 'Weight, diabetes, lipids.' },
    { q: 'Galactorrhoea and amenorrhoea are due to blocking the…', o: ['Tuberoinfundibular pathway', 'Mesolimbic pathway', 'Raphe nuclei', 'Locus coeruleus'], a: 0, w: 'Dopamine normally inhibits prolactin.' },
    { q: 'Which is a partial dopamine agonist?', o: ['Haloperidol', 'Olanzapine', 'Aripiprazole', 'Quetiapine'], a: 2, w: 'Distinct mechanism; low metabolic risk.' },
    { q: 'Which statement is TRUE?', o: ['Typicals are better for negative symptoms', 'Atypicals have higher EPS risk', 'Both treat positive symptoms effectively', 'Atypicals are cheaper'], a: 2, w: 'Both work on positives; atypicals a little better on negatives.' },
    { q: 'Low-potency typical, more sedating, fewer EPS initially:', o: ['Haloperidol', 'Chlorpromazine', 'Fluphenazine', 'Risperidone'], a: 1, w: 'Chlorpromazine.' }
  ],
  cheat: [
    ['Mechanism', 'D2 block (mesolimbic). Atypicals: + 5-HT2A'],
    ['Pathways', 'Mesolimbic=psychosis (cure) · Mesocortical=negatives · Nigrostriatal=EPS · Tubero=prolactin'],
    ['Typicals', 'Haloperidol (high potency, EPS), chlorpromazine (low, sedating), fluphenazine (depot), perphenazine'],
    ['Atypicals', 'Clozapine (resistant, blood tests), olanzapine (weight), risperidone (prolactin), quetiapine (sedation), aripiprazole (partial agonist)'],
    ['Mnemonic', 'Typical = Tight D2, Tremors · Atypical = Also serotonin, Added weight'],
    ['Weight gain receptors', '5-HT2C + H1']
  ]
});
