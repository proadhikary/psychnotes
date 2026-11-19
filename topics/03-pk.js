addTopic({
  id: 'pk',
  title: 'Pharmacokinetics',
  source: 'Pharmacokinetics (Dr Thunga PJ)',
  oneliner: 'Pharmacokinetics is <b>“what the body does to the drug”</b>: how it gets in, spreads, is broken down and leaves. Remember <b>ADME</b>.',
  sections: [
    { h: 'Definition', html: `
      <p><b>Pharmacokinetics</b> = the study of how the body handles a medicine (or substance) for the whole time it is exposed to it, i.e. <b>“what the body does to the drug”</b>.</p>
      <div class="box mn"><div class="bt">Mnemonic: ADME</div><b>A</b>bsorption → <b>D</b>istribution → <b>M</b>etabolism → <b>E</b>xcretion. “<b>A</b> <b>D</b>rug <b>M</b>ust <b>E</b>xit.”</div>
      <p><b>Key terms to define in the exam:</b> mode of administration, bioavailability, volume of distribution (Vd), protein binding, clearance, half-life (t½).</p>` },

    { h: 'A · Absorption', html: `
      <p>The process that moves a drug from where it is given <b>into the bloodstream</b> (systemic circulation).</p>
      <p><b>Routes (modes of administration):</b> oral, intravenous (IV), intramuscular (IM), intrathecal, subcutaneous, buccal, rectal, vaginal, ocular, otic (ear), inhaled, nebulised, transdermal.</p>
      <h3>Bioavailability</h3>
      <p>The <b>fraction</b> of the given dose that reaches the systemic circulation. Depends on the drug and the route.</p>
      <ul><li><b>IV = 100%</b>: all of it is in the blood instantly.</li>
      <li><b>Oral = lower</b>: much is broken down by the <b>liver, gut wall or digestive enzymes</b> before reaching the circulation. This is called the <b>first-pass effect</b>.</li></ul>
      <div class="box simple"><div class="bt">Say it simply</div>Swallowing a tablet is like sending a parcel through customs (the liver). Some of it gets taken out before delivery. An IV injection skips customs.</div>
      <p>Clinical link: <b>depot injections (LAIs)</b> avoid first-pass metabolism, so bioavailability problems are fewer.</p>` },

    { h: 'D · Distribution', html: `
      <p>How the drug <b>spreads through the body</b>. It depends on the drug’s chemistry and the person’s physiology (fat, water, proteins, age).</p>
      <p><b>Volume of distribution (Vd)</b> = a measure of how widely a drug spreads into body tissues compared with staying in the blood.</p>
      <div class="tw"><table><thead><tr><th>High Vd (goes into tissues)</th><th>Low Vd (stays in blood)</th></tr></thead><tbody>
      <tr><td><b>Lipophilic</b> (fat-loving) molecules. Most psychotropics are lipophilic so they can cross the blood–brain barrier.</td><td><b>Protein-bound</b> molecules (stuck to plasma proteins like albumin). Hydrophilic molecules stay mostly in extracellular fluid.</td></tr>
      </tbody></table></div>
      <p><b>Protein binding:</b> only the <b>free (unbound)</b> drug is active. If two drugs compete for the same protein, one can push the other off and raise its free level.</p>
      <p>Clinical link: older adults have <b>more body fat</b>, so fat-soluble drugs stay longer (one reason to “start low, go slow”).</p>` },

    { h: 'M · Metabolism', html: `
      <p>Processing the drug into other compounds. Main site is the <b>liver</b>; also gut, skin, plasma, kidneys, lungs.</p>
      <ul><li>Usually turns the drug into a <b>water-soluble</b> form so the kidney can remove it.</li>
      <li>Sometimes turns an <b>inactive drug (prodrug) into an active metabolite</b>.</li></ul>
      <div class="timeline">
        <div><b>Phase I</b>Oxidation (and reduction, hydrolysis) by <b>cytochrome P450 (CYP450)</b> enzymes</div>
        <div><b>Phase II</b>Conjugation (adds a group, e.g. glucuronide)</div>
        <div><b>Result</b>Water-soluble product</div>
        <div><b>Out</b>Excreted in bile or urine</div>
      </div>
      <div class="box tip"><div class="bt">Exam link</div>Most psychotropics are metabolised by <b>CYP450</b>. Drugs that <b>inhibit</b> CYP450 raise other drugs’ levels; drugs that <b>induce</b> it lower them. (More in Topic 13.) <b>Lithium is not metabolised</b>; it is cleared unchanged by the kidney.</div>` },

    { h: 'E · Excretion', html: `
      <p>Removal of the drug from the body, mainly by the <b>kidneys (urine)</b>, also bile/faeces, lungs, sweat and breast milk.</p>
      <div class="grid2">
        <div class="card"><h3>Clearance</h3><p>The ratio of the drug’s <b>elimination rate</b> to its <b>plasma concentration</b>. It decides the <b>maintenance dose</b>.</p></div>
        <div class="card"><h3>Half-life (t½)</h3><p>The time for the blood level to fall by <b>50%</b>. It decides <b>how often</b> a dose is given and how long until the drug is gone.</p></div>
      </div>
      <div data-widget="halflife"></div>` },

    { h: 'Drug kinetics: zero-order vs first-order', html: `
      <p>The “rules” the body follows to get rid of a drug.</p>
      <div class="tw"><table><thead><tr><th></th><th>First-order (most drugs)</th><th>Zero-order</th></tr></thead><tbody>
      <tr><td>Rule</td><td>A <b>constant fraction (%)</b> removed per unit time</td><td>A <b>constant amount</b> removed per unit time, whatever the level</td></tr>
      <tr><td>Formula</td><td class="mono">rate = k × [drug]</td><td class="mono">rate = k</td></tr>
      <tr><td>Half-life</td><td><b>Constant</b></td><td><b>Varies</b> (non-linear)</td></tr>
      <tr><td>Why</td><td>Enzymes are not saturated</td><td>Elimination enzymes are <b>saturated</b></td></tr>
      <tr><td>Risk</td><td>Predictable</td><td><b>Accumulation and toxicity</b>, even with a small dose rise</td></tr>
      <tr><td>Nickname / example</td><td>“The percentage worker”</td><td>“The steady worker”: aspirin (salicylates) at high dose, alcohol, phenytoin</td></tr>
      </tbody></table></div>
      <div class="box simple"><div class="bt">Say it simply</div><b>First-order</b> = a shop that always serves half the queue each hour. <b>Zero-order</b> = a shop with one cashier who serves 10 people an hour no matter how long the queue gets, so the queue (drug) builds up.</div>
      <h3>Important concepts</h3>
      <ul><li><b>Saturation (“overload point”):</b> a drug can start first-order, but at high doses the enzymes saturate and it switches to <b>zero-order</b>. Example: <b>salicylates (aspirin)</b>.</li>
      <li><b>The “4 to 5” rule:</b> after <span class="k">4–5 half-lives</span> a drug is considered gone (about <b>94–97% eliminated</b>).</li>
      <li><b>Steady state:</b> when the amount taken in equals the amount cleared, so the blood level stays steady. Reached after <span class="k">4–5 half-lives</span> of regular dosing.</li></ul>
      <div class="box tip"><div class="bt">Why a psychologist cares</div>This is why a medicine “takes days to build up”, why missed doses matter, why age, liver or kidney disease change the dose, and why long half-life drugs (e.g. fluoxetine) give milder withdrawal.</div>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Explain pharmacokinetics with clinical relevance.</b>
      <ol><li><b>Definition:</b> what the body does to the drug; ADME.</li>
      <li><b>Absorption:</b> routes; bioavailability (IV 100%, oral reduced by first-pass).</li>
      <li><b>Distribution:</b> Vd; lipophilic = high Vd; protein-bound = low Vd; free drug is active.</li>
      <li><b>Metabolism:</b> liver; Phase I oxidation (CYP450), Phase II conjugation → water-soluble; active metabolites.</li>
      <li><b>Excretion:</b> kidney mainly; clearance (sets maintenance dose); half-life (time to fall 50%).</li>
      <li><b>Kinetics:</b> first-order (constant fraction, constant t½) vs zero-order (constant amount, saturation, toxicity; aspirin). 4–5 half-lives to elimination and steady state.</li>
      <li><b>Clinical relevance:</b> delayed onset, dose adjustment in elderly and liver/kidney disease, CYP450 interactions, LAIs avoid first pass.</li></ol></div>` }
  ],
  flash: [
    ['Pharmacokinetics in 5 words?', '“What the body does to the drug.”'],
    ['ADME stands for?', 'Absorption, Distribution, Metabolism, Excretion'],
    ['Bioavailability of an IV drug?', '<b>100%</b>'],
    ['Why is oral bioavailability lower?', '<b>First-pass metabolism</b> by liver, gut wall and digestive enzymes.'],
    ['Lipophilic drug: high or low Vd?', '<b>High</b> Vd (spreads into tissues).'],
    ['Protein-bound drug: high or low Vd?', '<b>Low</b> Vd (stays in blood).'],
    ['Phase I vs Phase II metabolism?', 'Phase I: <b>oxidation</b> by CYP450. Phase II: <b>conjugation</b>. Result: water-soluble → bile/urine.'],
    ['Define half-life.', 'Time for the blood level to fall by <b>50%</b>.'],
    ['Define clearance.', 'Elimination rate ÷ plasma concentration. Sets the <b>maintenance dose</b>.'],
    ['First-order vs zero-order?', 'First: constant <b>fraction</b>, constant t½ (most drugs). Zero: constant <b>amount</b>, enzymes saturated, toxicity risk.'],
    ['Example of saturation switching to zero-order?', '<b>Aspirin (salicylates)</b> at high doses.'],
    ['How many half-lives to steady state or elimination?', '<b>4–5</b> half-lives (≈94–97%).']
  ],
  quiz: [
    { q: 'Which route has 100% bioavailability?', o: ['Oral', 'Intravenous', 'Transdermal', 'Rectal'], a: 1, w: 'IV puts the full dose straight into the blood.' },
    { q: 'The first-pass effect mainly reduces the bioavailability of…', o: ['IV drugs', 'Oral drugs', 'Inhaled drugs', 'IM depot drugs'], a: 1, w: 'Oral drugs pass through gut wall and liver first.' },
    { q: 'Phase I metabolism mainly involves…', o: ['Conjugation', 'Oxidation by CYP450', 'Renal filtration', 'Protein binding'], a: 1, w: 'Phase I = oxidation (CYP450); Phase II = conjugation.' },
    { q: 'In zero-order kinetics…', o: ['Half-life is constant', 'A constant fraction is removed', 'A constant amount is removed per unit time', 'Most drugs behave this way'], a: 2, w: 'Enzymes are saturated, so a fixed amount is cleared.' },
    { q: 'Steady state is usually reached after…', o: ['1 half-life', '2 half-lives', '4–5 half-lives', '10 half-lives'], a: 2, w: 'The 4–5 rule applies to both steady state and elimination.' },
    { q: 'A highly protein-bound drug will have…', o: ['High Vd', 'Low Vd', 'No metabolism', '100% bioavailability'], a: 1, w: 'It stays in the plasma.' },
    { q: 'Clearance determines the…', o: ['Loading dose', 'Maintenance dose', 'Route of administration', 'Receptor affinity'], a: 1, w: 'Clearance → maintenance dose; half-life → dosing interval.' },
    { q: 'Which drug switches to zero-order kinetics at high doses (as taught)?', o: ['Fluoxetine', 'Aspirin (salicylates)', 'Lithium', 'Diazepam'], a: 1, w: 'Salicylates saturate their enzymes.' }
  ],
  cheat: [
    ['PK', 'What the body does to the drug = ADME'],
    ['Bioavailability', 'Fraction reaching circulation. IV 100%; oral lower (first-pass)'],
    ['Vd', 'Lipophilic → high; protein-bound → low'],
    ['Metabolism', 'Liver; Phase I oxidation (CYP450) → Phase II conjugation → water-soluble'],
    ['Clearance / t½', 'Clearance → maintenance dose; t½ = time to fall 50%'],
    ['First vs zero order', 'Constant fraction, constant t½ vs constant amount, saturated, toxic (aspirin)'],
    ['4–5 rule', '4–5 half-lives → steady state, or ~94–97% eliminated']
  ]
});
