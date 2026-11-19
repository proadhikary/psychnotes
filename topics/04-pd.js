addTopic({
  id: 'pd',
  title: 'Pharmacodynamics',
  source: 'Pharmacodynamics (Dr Thunga PJ)',
  oneliner: 'Pharmacodynamics is <b>“what the drug does to the body”</b>: which receptor it binds, whether it switches it on or blocks it, and how strong and how safe the effect is.',
  sections: [
    { h: 'Definition', html: `
      <p><b>Pharmacodynamics</b> studies the <b>biochemical and physiological effects</b> of drugs, their <b>molecular mechanism of action</b>, and the <b>relationship between drug concentration and effect</b>.</p>
      <div class="tw"><table><thead><tr><th>Pharmacokinetics</th><th>Pharmacodynamics</th></tr></thead><tbody>
      <tr><td>What the body does to the drug</td><td>What the drug does to the body</td></tr>
      <tr><td>ADME</td><td>Drug action</td></tr>
      <tr><td>Decides drug <b>concentration</b></td><td>Decides drug <b>response</b></td></tr>
      <tr><td>Determines <b>dosage</b></td><td>Determines <b>clinical effect</b></td></tr>
      </tbody></table></div>` },

    { h: 'Receptors', html: `
      <p>A <b>receptor</b> is a protein that binds a drug and starts a biological response. Think of it as a <b>lock</b>; the drug is a <b>key</b>.</p>
      <div class="grid2">
        <div class="card"><h3>1. G-protein coupled (GPCR)</h3><p>Slow, via second messengers. E.g. dopamine D2, most 5-HT receptors.</p></div>
        <div class="card"><h3>2. Ligand-gated ion channels</h3><p>Fast; open an ion pore. E.g. GABA-A, nicotinic, NMDA.</p></div>
        <div class="card"><h3>3. Enzyme-linked</h3><p>Receptor itself acts as an enzyme (e.g. insulin, growth factors).</p></div>
        <div class="card"><h3>4. Intracellular</h3><p>Inside the cell; change gene expression (e.g. steroid, thyroid hormones).</p></div>
      </div>
      <h3>Drug–receptor interaction: three words</h3>
      <ul><li><b>Affinity:</b> how well a drug <b>binds</b> the receptor (does the key fit?).</li>
      <li><b>Intrinsic activity:</b> its capacity to <b>activate</b> the receptor once bound (does the key turn?).</li>
      <li><b>Efficacy:</b> its ability to <b>produce a response</b> (does the door open, how wide?).</li></ul>` },

    { h: 'Agonists and antagonists', html: `
      <div class="grid2">
        <div class="card"><h3>Agonist: binds AND activates</h3><ul>
          <li><b>Full agonist:</b> maximum response (e.g. morphine, methadone at opioid receptor)</li>
          <li><b>Partial agonist:</b> activates only partly; acts as a ceiling (e.g. <b>aripiprazole</b> at D2, <b>buprenorphine</b>, <b>varenicline</b>)</li>
          <li><b>Inverse agonist:</b> binds and produces the <b>opposite</b> effect to the agonist</li></ul></div>
        <div class="card"><h3>Antagonist: binds, does NOT activate</h3><ul>
          <li><b>Competitive:</b> competes for the same site; can be overcome by more agonist. E.g. <b>naloxone</b> (reverses opioid overdose)</li>
          <li><b>Non-competitive:</b> binds elsewhere; can’t be overcome by more agonist</li>
          <li><b>Irreversible:</b> binds permanently</li></ul></div>
      </div>
      <div class="box simple"><div class="bt">Say it simply</div>Full agonist = the right key that opens the door fully. Partial agonist = a key that only opens it halfway. Antagonist = a key that fits but won’t turn, and stops the real key getting in. Inverse agonist = a key that locks it tighter.</div>` },

    { h: 'Dose–response, potency and efficacy', html: `
      <p>As dose increases, response increases until a maximum effect (<b>Emax</b>) is reached.</p>
      <ul><li><b>Graded dose–response:</b> response in one person grows smoothly with dose.</li>
      <li><b>Quantal dose–response:</b> all-or-none; the <b>% of a population</b> that responds at each dose (used for ED50, TD50).</li></ul>
      <p>Clinical value: it sets the <b>effective dose</b> and predicts <b>toxicity</b>.</p>
      <div class="tw"><table><thead><tr><th></th><th>Potency (“power”)</th><th>Efficacy</th></tr></thead><tbody>
      <tr><td>Means</td><td><b>Amount</b> of drug needed to produce an effect</td><td><b>Maximum effect</b> a drug can produce, however high the dose</td></tr>
      <tr><td>Measured by</td><td class="mono">EC50</td><td class="mono">Emax</td></tr>
      <tr><td>On the curve</td><td>Higher potency → curve shifts <b>LEFT</b>; lower dose needed</td><td>Higher efficacy → curve goes <b>HIGHER</b></td></tr>
      <tr><td>Changed by dose?</td><td>–</td><td><b>No</b>, efficacy can’t be raised by giving more</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic</div><b>P</b>otency = how <b>P</b>etite a dose you need (Left shift). <b>E</b>fficacy = how much it can <b>E</b>ver do (Emax, the ceiling).</div>
      <p>Example: haloperidol is a <b>high-potency</b> antipsychotic (tiny mg doses) while chlorpromazine is <b>low-potency</b> (hundreds of mg), but both have similar efficacy against positive symptoms.</p>` },

    { h: 'Safety: therapeutic index and window', html: `
      <div class="grid2">
        <div class="card"><h3>Therapeutic Index (TI)</h3><p class="mono" style="font-size:18px">TI = TD50 / ED50</p><p>TD50 = dose toxic in 50%; ED50 = dose effective in 50%.<br><b>Higher TI = safer drug.</b></p></div>
        <div class="card"><h3>Therapeutic window</h3><p>The concentration range between the <b>minimum effective concentration</b> and the <b>minimum toxic concentration</b>. Keep levels inside it: works, but not toxic.</p></div>
      </div>
      <div class="box tip"><div class="bt">Exam examples</div><b>Narrow TI / window:</b> <b>lithium</b> (0.6–1.2 mEq/L therapeutic, &gt;1.5 toxic), TCAs (dangerous in overdose), clozapine. These need <b>blood level monitoring</b>. <b>Wide TI:</b> SSRIs, benzodiazepines (alone), so safer in overdose than barbiturates.</div>` },

    { h: 'Factors affecting drug response', html: `
      <div class="grid2">
        <div class="card"><h3>Patient factors</h3><p>Age, weight, gender, pregnancy, genetics, liver disease, kidney disease</p></div>
        <div class="card"><h3>Drug factors</h3><p>Dose, route, drug interactions</p></div>
      </div>` },

    { h: 'Tolerance and receptor regulation', html: `
      <div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
      <tr><td><b>Tolerance</b></td><td><b>Gradual</b> fall in response; higher doses needed</td><td>Opioids, benzodiazepines</td></tr>
      <tr><td><b>Tachyphylaxis</b></td><td><b>Rapid</b> fall in response after repeated doses</td><td>Nasal decongestants</td></tr>
      <tr><td><b>Up-regulation</b></td><td><b>More</b> receptors; after prolonged <b>antagonist</b> use</td><td>β-blocker withdrawal (rebound); tardive dyskinesia theory with D2 blockers</td></tr>
      <tr><td><b>Down-regulation</b></td><td><b>Fewer</b> receptors; after prolonged <b>agonist</b> exposure</td><td>Chronic salbutamol use; also why antidepressant benefit takes weeks</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic</div>The brain does the <b>opposite</b>: block it (antagonist) → it grows more receptors (<b>UP</b>). Flood it (agonist) → it removes receptors (<b>DOWN</b>).</div>
      <p><b>Clinical applications of PD:</b> choosing the right drug, adjusting dose, preventing adverse reactions, avoiding interactions, individualising therapy, improving safety.</p>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Describe pharmacodynamics. Differentiate potency and efficacy.</b>
      <ol><li><b>Definition</b> + PK vs PD table.</li>
      <li><b>Receptors:</b> GPCR, ligand-gated ion channel, enzyme-linked, intracellular. Affinity, intrinsic activity, efficacy.</li>
      <li><b>Agonists</b> (full, partial, inverse) and <b>antagonists</b> (competitive e.g. naloxone, non-competitive, irreversible).</li>
      <li><b>Dose–response:</b> graded vs quantal; Emax.</li>
      <li><b>Potency vs efficacy</b> table (EC50, left shift vs Emax, not changed by dose).</li>
      <li><b>Safety:</b> TI = TD50/ED50 (higher = safer); therapeutic window; lithium as example.</li>
      <li><b>Tolerance, tachyphylaxis, up/down-regulation</b> with examples.</li>
      <li><b>Conclusion:</b> PD guides drug choice, dose and safety.</li></ol></div>` }
  ],
  flash: [
    ['Pharmacodynamics in 5 words?', '“What the drug does to the body.”'],
    ['4 types of receptors?', 'GPCR, ligand-gated ion channel, enzyme-linked, intracellular'],
    ['Affinity vs efficacy?', 'Affinity = ability to <b>bind</b>. Efficacy = ability to <b>produce a response</b>.'],
    ['Partial agonist examples?', 'Aripiprazole (D2), buprenorphine (opioid), varenicline (nicotinic)'],
    ['Example of a competitive antagonist?', '<b>Naloxone</b> (opioid receptor).'],
    ['Potency is measured by…, efficacy by…?', 'Potency: <b>EC50</b>. Efficacy: <b>Emax</b>.'],
    ['Higher potency shifts the curve which way?', '<b>Left</b>.'],
    ['Can efficacy be increased by raising the dose?', '<b>No.</b>'],
    ['Therapeutic index formula?', '<b>TI = TD50 / ED50</b>. Higher = safer.'],
    ['Therapeutic window?', 'Range between minimum effective and minimum toxic concentration.'],
    ['Tolerance vs tachyphylaxis?', 'Tolerance: gradual (opioids, BZD). Tachyphylaxis: rapid (nasal decongestants).'],
    ['Up-regulation happens after…?', 'Prolonged <b>antagonist</b> use (e.g. β-blocker withdrawal).']
  ],
  quiz: [
    { q: 'Efficacy is measured by…', o: ['EC50', 'Emax', 'TD50', 'Vd'], a: 1, w: 'Emax = the maximum effect.' },
    { q: 'A more potent drug…', o: ['Has a higher Emax', 'Needs a lower dose; curve shifts left', 'Is always safer', 'Has longer half-life'], a: 1, w: 'Potency is about the amount needed.' },
    { q: 'Naloxone is a…', o: ['Full agonist', 'Partial agonist', 'Competitive antagonist', 'Inverse agonist'], a: 2, w: 'It competes with opioids at the receptor.' },
    { q: 'Therapeutic index equals…', o: ['ED50 / TD50', 'TD50 / ED50', 'EC50 × Emax', 'Dose / clearance'], a: 1, w: 'Higher TI = safer.' },
    { q: 'Rapid loss of response after repeated doses is…', o: ['Tolerance', 'Tachyphylaxis', 'Up-regulation', 'Dependence'], a: 1, w: 'Example: nasal decongestants.' },
    { q: 'Prolonged agonist exposure leads to…', o: ['Up-regulation', 'Down-regulation', 'Higher affinity', 'Zero-order kinetics'], a: 1, w: 'Fewer receptors (e.g. chronic salbutamol).' },
    { q: 'Aripiprazole at the D2 receptor is a…', o: ['Full agonist', 'Partial agonist', 'Irreversible antagonist', 'Enzyme inhibitor'], a: 1, w: 'That’s why it’s called a distinct mechanism among atypicals.' },
    { q: 'Which drug has a narrow therapeutic index?', o: ['Sertraline', 'Lithium', 'Melatonin', 'Escitalopram'], a: 1, w: 'Lithium needs blood level monitoring.' }
  ],
  cheat: [
    ['PD', 'What the drug does to the body'],
    ['Receptor types', 'GPCR, ligand-gated ion channel, enzyme-linked, intracellular'],
    ['Agonists', 'Full, partial (aripiprazole, buprenorphine), inverse'],
    ['Antagonists', 'Competitive (naloxone), non-competitive, irreversible'],
    ['Potency vs efficacy', 'EC50, left shift vs Emax, not raised by dose'],
    ['TI', 'TD50/ED50; higher = safer. Narrow: lithium'],
    ['Tolerance / tachyphylaxis', 'Gradual (opioids, BZD) / rapid (decongestants)'],
    ['Up / down-regulation', 'After antagonist (β-blocker withdrawal) / after agonist (salbutamol)']
  ]
});
