addTopic({
  id: 'basics',
  title: 'Basics of Psychopharmacology & Prescribing',
  source: 'Psychopharmacology Basic Principles + Principles of Psychotropic Prescribing (Dr Akash Lanka)',
  oneliner: 'Psychiatric medicines gently <b>nudge brain chemicals back toward balance</b>. They work slowly, side effects often come first, and the psychologist’s job is to <b>educate, monitor and refer</b>.',
  sections: [
    { h: 'What are psychotropic drugs?', html: `
      <p><b>Psychoactive drugs</b> = any substance that changes how the mind works by acting on the brain (CNS).<br>
      <b>Psychotropics</b> = psychoactive drugs used <b>as psychiatric medicine</b>. They change a person’s mood, thinking, perception or behaviour.</p>
      <div class="tw"><table><thead><tr><th>Group</th><th>Used for</th><th>Examples</th></tr></thead><tbody>
      <tr><td><b>Antipsychotics</b></td><td>Psychosis (schizophrenia), mania</td><td>Typical: haloperidol, chlorpromazine, fluphenazine. Atypical: risperidone, olanzapine, quetiapine, clozapine, aripiprazole</td></tr>
      <tr><td><b>Antidepressants</b></td><td>Depression, anxiety, OCD, PTSD</td><td>SSRIs: fluoxetine, sertraline, escitalopram. SNRIs: venlafaxine, duloxetine. TCAs: amitriptyline, imipramine. MAOIs: phenelzine, selegiline. Others: trazodone, vortioxetine</td></tr>
      <tr><td><b>Mood stabilizers</b></td><td>Bipolar disorder</td><td>Lithium, sodium valproate, carbamazepine, lamotrigine</td></tr>
      <tr><td><b>Anxiolytics</b></td><td>Anxiety (↑GABA, ↓glutamate)</td><td>Benzodiazepines: diazepam, clonazepam, alprazolam, lorazepam; beta-blocker propranolol</td></tr>
      <tr><td><b>Sedatives / hypnotics</b></td><td>Sleep, calming, agitation, alcohol withdrawal</td><td>Benzodiazepines, antihistamines</td></tr>
      <tr><td><b>Stimulants</b></td><td>ADHD, narcolepsy (sleep disorders), obesity</td><td>Methylphenidate, amphetamine, caffeine; non-stimulant atomoxetine</td></tr>
      </tbody></table></div>
      <div class="box simple"><div class="bt">Say it simply</div>Class names are history, not one disease. One drug can treat many things: an SSRI treats depression <i>and</i> anxiety; an antipsychotic can be added in mood disorders.</div>` },

    { h: 'The two big questions behind every drug', html: `
      <div class="grid2">
        <div class="card"><h3>Pharmacokinetics (PK)</h3><p><b>What the body does to the drug.</b></p><ul><li><b>A</b>bsorption: gets into blood</li><li><b>D</b>istribution: reaches the brain</li><li><b>M</b>etabolism: liver breaks it down</li><li><b>E</b>xcretion: leaves the body</li></ul></div>
        <div class="card"><h3>Pharmacodynamics (PD)</h3><p><b>What the drug does to the body.</b></p><ul><li>Binds <b>receptors</b></li><li><b>Agonist</b> (switches on) / <b>antagonist</b> (blocks)</li><li>Blocks <b>reuptake</b> or <b>enzymes</b></li><li>Effect on mood, arousal, thinking</li></ul></div>
      </div>
      <p><b>Why it matters:</b> PK explains why a drug takes days to build up and why age or other medicines change the dose. PD explains why <b>side effects often appear before the benefit</b>.</p>` },

    { h: 'Main brain chemicals targeted', html: `
      <div class="tw"><table><thead><tr><th>Chemical</th><th>Controls</th><th>Drugs acting on it</th></tr></thead><tbody>
      <tr><td>Serotonin (5-HT)</td><td>Mood, anxiety, sleep, appetite</td><td>SSRIs, SNRIs</td></tr>
      <tr><td>Noradrenaline</td><td>Arousal, attention, energy</td><td>SNRIs</td></tr>
      <tr><td>Dopamine</td><td>Reward, motivation, psychosis</td><td>Antipsychotics, stimulants</td></tr>
      <tr><td>GABA</td><td>Calming, sedation (the brake)</td><td>Benzodiazepines</td></tr>
      <tr><td>Glutamate</td><td>Excitation, learning (the accelerator)</td><td>Newer agents</td></tr>
      <tr><td>Acetylcholine / histamine</td><td>Often the <b>cause of side effects</b></td><td>Dry mouth, sedation</td></tr>
      </tbody></table></div>
      <p>The brain adapts over <b>days to weeks</b>, which is why effects are gradual.</p>` },

    { h: '8 general principles of prescribing', html: `
      <ol>
        <li><b>Diagnosis first.</b> Use ICD-11 / DSM-5. Take a full history, physical, neurological and mental status exam. Treat the illness, not just a symptom.</li>
        <li><b>Start low, go slow.</b> Begin with a low dose to check tolerability, raise slowly over days–weeks–months. Extra care in children, elderly, pregnancy, medically ill.</li>
        <li><b>Simplest effective regimen.</b> <b>Monotherapy</b> (one drug) is preferred over <b>polypharmacy</b>: fewer side effects, and one drug can’t mask another’s side effects.</li>
        <li><b>Personalised treatment.</b> Same dose, different people, different effects. Consider age, gender, comorbidities, family history, drug interactions, past response.</li>
        <li><b>Side effects &amp; safety.</b> Look for weight gain, EPS (tremor, rigidity, dystonia, restlessness, tardive dyskinesia). Life-threatening: <b>NMS, serotonin syndrome, QT prolongation (arrhythmia), Stevens-Johnson syndrome, agranulocytosis, anaphylaxis</b>.</li>
        <li><b>Duration &amp; adherence.</b> Define the plan. E.g. antidepressants continue <span class="k">6–12 months after remission</span>. Adherence = how far a person’s behaviour matches the agreed advice.</li>
        <li><b>Monitoring &amp; review.</b> Rating scales: <b>YMRS</b> (mania), <b>HAM-D</b> &amp; <b>BDI</b> (depression), <b>Y-BOCS</b> (OCD). Blood tests: sugar, lipids, thyroid, lithium levels.</li>
        <li><b>Consent &amp; psychoeducation.</b> Consent is mandatory, especially for high-risk drugs (e.g. <b>clozapine</b>). Explain black-box warnings (suicidality, arrhythmia, SJS) to patient and carers.</li>
      </ol>
      <div class="box mn"><div class="bt">Mnemonic: the 8 principles</div><b>“D</b>ear <b>S</b>tudents, <b>S</b>imple <b>P</b>lans <b>S</b>ave <b>A</b>nxious <b>M</b>inds, <b>C</b>learly.”<br>Diagnosis · Start low · Simple regimen · Personalised · Safety/side effects · Adherence/duration · Monitoring · Consent</div>
      <p><b>Ethics &amp; law:</b> document everything (history, exam, tests, diagnosis, prescription), take consent, avoid unjustified off-label use, and stay alert to malingering to obtain drugs or medicolegal benefit.</p>` },

    { h: 'When is medication needed? (stepped care)', html: `
      <div class="grid2">
        <div class="card"><h3>Mild</h3><p>Watchful waiting, self-help, therapy first. Medicine rarely the start.</p></div>
        <div class="card"><h3>Moderate</h3><p>Therapy <i>or</i> medicine. Guided by preference and access.</p></div>
        <div class="card"><h3>Severe / high-risk</h3><p>Medicine usually needed, plus therapy. Urgent review if risk or psychosis.</p></div>
      </div>
      <div class="box flag"><div class="bt">Safety overrides the ladder</div>Skip straight to medication when there is active suicidality, psychosis, severe collapse in functioning, or the person cannot engage in therapy until symptoms ease.</div>
      <h3>Medicine + therapy are partners, not rivals</h3>
      <ul><li><b>Medicine</b> reduces symptom intensity quickly (low mood, panic, insomnia), creating room to engage.</li>
      <li><b>Therapy</b> builds lasting skills and insight that prevent relapse after medicine stops.</li>
      <li>In moderate–severe depression, <b>the combination beats either alone</b>. “The drug lifts the floor; therapy builds the skills.”</li></ul>` },

    { h: 'Special populations', html: `
      <div class="grid2">
        <div class="card"><h3>Children &amp; adolescents</h3><ul><li>Few licensed drugs, narrow evidence</li><li>Early rise in suicidal thoughts on antidepressants → monitor closely</li><li>Medicine is a <b>last resort</b> after non-drug treatment; lowest dose</li></ul></div>
        <div class="card"><h3>Elderly</h3><ul><li>Start low, go slow “with extra force”; lower maximum doses</li><li>Slower metabolism, more body fat → effects last longer</li><li>Falls, sedation, confusion, low sodium; polypharmacy interactions</li></ul></div>
        <div class="card"><h3>Pregnancy &amp; lactation</h3><ul><li>Weigh drug risk vs risk of <b>untreated illness</b></li><li>Avoid teratogens like <b>sodium valproate</b></li><li>Most drugs pass into breast milk</li><li>Never a blanket stop: shared, individual decision</li></ul></div>
        <div class="card"><h3>Substance use &amp; medical illness</h3><ul><li>Sedatives/stimulants are habit-forming: watch misuse and diversion</li><li>Dual diagnosis masks symptoms</li><li>Note liver, kidney, heart, brain disease and all current medicines</li></ul></div>
      </div>
      <p>Also: biological sex and hormones change drug levels; the menstrual cycle, perimenopause, contraception and gender-affirming hormones can interact; <b>ask directly about sexual side effects</b> because they drive non-adherence.</p>` },

    { h: 'Where the psychologist fits', html: `
      <p>Psychologists do not prescribe, but they <b>see the patient most often</b>. That puts them at the centre of psychoeducation, monitoring and support.</p>
      <div class="grid2">
        <div class="card"><h3>1. Recognise &amp; refer</h3><p>Spot when a medication review is needed and pass it clearly to the prescriber.</p></div>
        <div class="card"><h3>2. Monitor &amp; feed back</h3><p>Notice early response, side effects and adherence between visits.</p></div>
        <div class="card"><h3>3. Educate &amp; support</h3><p>Correct myths, set realistic expectations, keep the patient engaged.</p></div>
      </div>
      <h3>6 things every patient should be told</h3>
      <ol><li><b>It takes time:</b> benefit lags <span class="k">2–6 weeks</span>.</li><li><b>Side effects come first:</b> many settle in weeks.</li><li><b>Keep taking it:</b> relapse risk is highest when you feel better and stop.</li><li><b>Don’t stop suddenly:</b> taper with the prescriber.</li><li><b>Watch interactions:</b> alcohol, other medicines, supplements.</li><li><b>Ask, don’t guess.</b></li></ol>
      <div class="box tip"><div class="bt">How to spot side effects: “Note it, time it, tell the prescriber”</div>
      New symptoms in the first days–weeks or after a dose change are <b>the drug until proven otherwise</b>. Look for nausea, headache, drowsiness, dry mouth, tremor, restlessness, appetite/weight/sleep/sexual changes. In session: looks sedated or flat, fidgety, says they feel “not themselves”.</div>` },

    { h: 'Myths vs facts', html: `
      <div class="tw"><table><thead><tr><th>Myth</th><th>Fact</th></tr></thead><tbody>
      <tr><td>“They’re addictive happy pills.”</td><td>Antidepressants aren’t addictive like sedatives. They correct a disorder; they don’t give a high.</td></tr>
      <tr><td>“They change who you are.”</td><td>The aim is to return you to yourself. Emotional blunting, if it happens, can be managed.</td></tr>
      <tr><td>“Taking them is weakness.”</td><td>No more than taking medicine for diabetes or asthma.</td></tr>
      <tr><td>“Once you start, you never stop.”</td><td>Many take them for a set period and taper off with guidance.</td></tr>
      <tr><td>“Natural is always safer.”</td><td>Natural ≠ safe. Some supplements interact with prescribed drugs.</td></tr>
      <tr><td>“If therapy works, meds are pointless.”</td><td>Not either/or. For many conditions the combination is strongest.</td></tr>
      </tbody></table></div>` },

    { h: 'Red flags: loop back to the prescriber', html: `
      <div class="box flag"><div class="bt">General red flags</div><ul>
        <li>New or worse <b>suicidal thoughts</b>, especially early or after a dose change</li>
        <li>Severe restlessness, can’t sit still → possible <b>akathisia</b></li>
        <li><b>Serotonin toxicity</b>: agitation, fever, tremor, fast heartbeat, confusion</li>
        <li>Rash or allergic reaction</li><li>Pregnancy, or planning one</li><li>Patient has stopped (or plans to stop) abruptly</li></ul></div>
      <div class="tw"><table><thead><tr><th>Drug class</th><th>Emergency / red flag</th></tr></thead><tbody>
      <tr><td>Antipsychotics</td><td><b>NMS</b>: high fever, muscle rigidity, confusion, unstable pulse/BP. Emergency.</td></tr>
      <tr><td>Antipsychotics (metabolic)</td><td>Rapid weight gain, great thirst, frequent urination → check diabetes, lipids</td></tr>
      <tr><td>Antipsychotics (movement)</td><td>Muscle spasms, stiffness, restlessness, new involuntary movements</td></tr>
      <tr><td>Lithium</td><td><b>Toxicity</b>: coarse tremor, vomiting, diarrhoea, slurred speech, unsteadiness (often dehydration or NSAIDs)</td></tr>
      <tr><td>Antidepressants</td><td><b>Manic switch</b>: sudden less need for sleep, high overactive mood → may be bipolar</td></tr>
      <tr><td>Stimulants (ADHD)</td><td>Chest pain, palpitations, raised BP, misuse/diversion</td></tr>
      </tbody></table></div>
      <p>“When in doubt, escalate.” Fever with rigidity, or toxicity on lithium, needs <b>same-day</b> attention.</p>` },

    { h: 'Case vignettes (common exam “apply it” questions)', html: `
      <details class="case"><summary>Meera, 34: moderate–severe depression with passive death wishes</summary><p>Offer an <b>SSRI + therapy</b> (combination beats either alone). Psychologist: explain the 2–6 week delay, monitor mood/sleep/suicidal thoughts, stress not stopping when better. <i>Drug lifts the floor, therapy builds skills.</i></p></details>
      <details class="case"><summary>Arjun, 27: panic disorder, wants “something for when it hits”</summary><p><b>SSRI is first-line</b> (works over weeks). Benzodiazepines act fast but risk dependence, keep short-term. <b>CBT with exposure</b> is highly effective; “as-needed” pills can become a safety behaviour. <i>The fastest-feeling option isn’t always best.</i></p></details>
      <details class="case"><summary>Ravi, 24: mania a month after starting an antidepressant</summary><p>Antidepressant alone can <b>trigger mania</b>. Stop it, start a mood stabiliser/antipsychotic; diagnosis likely shifts to <b>bipolar I</b>. Lithium/valproate need blood tests. <i>Mania after an antidepressant is a red flag, not success.</i></p></details>
      <details class="case"><summary>Sana, 21: first-episode psychosis (voices, thought broadcast)</summary><p><b>Antipsychotic first</b>; early treatment = better outcome. Monitor weight/glucose/lipids, movement effects, sedation. Build trust without colluding or bluntly challenging. <i>Medicine opens the door to psychological work.</i></p></details>
      <details class="case"><summary>Fatima, 30: 18 weeks pregnant, stopped her SSRI, now relapsing</summary><p>Untreated depression in pregnancy is itself risky; the safest choice may be to <b>treat</b>. Individualised decision; therapy alongside. Psychologist counters guilt and supports an informed, not fearful, decision. <i>“No medication” isn’t automatically safe.</i></p></details>
      <details class="case"><summary>Kabir, 9: ADHD</summary><p>Behavioural and school support is the foundation; add a <b>stimulant or atomoxetine</b> if impairment is significant. Monitor appetite, sleep, growth, BP, tics; in teens watch misuse. <i>A tool, not a cure.</i></p></details>
      <details class="case"><summary>Mr Rao, 74: grief-related depression, many medicines</summary><p>Start low, go slow. Some antidepressants cause <b>low sodium</b> (nausea, headache, confusion) and <b>falls</b>. Check interactions. <i>Ask “what else might it disturb?”, not only “will it work?”</i></p></details>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Discuss the general principles of psychotropic prescribing and the role of the psychologist.</b>
      <ol><li><b>Intro:</b> Psychotropics are drugs that alter mood, thought, perception and behaviour by acting on neurotransmitters (5-HT, NA, DA, GABA, glutamate). Groups: antipsychotics, antidepressants, mood stabilizers, anxiolytics, sedatives, stimulants.</li>
      <li><b>Principles:</b> correct diagnosis (ICD-11/DSM-5); start low, go slow; monotherapy; personalise; watch side effects incl. NMS, serotonin syndrome, QT prolongation, SJS, agranulocytosis; define duration (antidepressants 6–12 months after remission); monitor with scales (HAM-D, BDI, YMRS, Y-BOCS) and labs; informed consent and psychoeducation.</li>
      <li><b>Indication:</b> stepped care by severity, risk, impairment; safety overrides.</li>
      <li><b>Special groups:</b> children, elderly, pregnancy (avoid valproate), SUD, medical comorbidity.</li>
      <li><b>Psychologist:</b> recognise &amp; refer, monitor &amp; feed back, educate &amp; support; tell patients onset takes 2–6 weeks, side effects first, don’t stop suddenly.</li>
      <li><b>Conclusion:</b> medication and therapy are complementary; combined treatment is strongest for moderate–severe illness.</li></ol></div>` }
  ],
  flash: [
    ['Pharmacokinetics vs pharmacodynamics?', 'PK = what the <b>body does to the drug</b> (ADME).<br>PD = what the <b>drug does to the body</b> (receptors, effects).'],
    ['How long do antidepressants take to work?', '<b>2–6 weeks</b>. Side effects usually come first.'],
    ['How long to continue antidepressants after remission?', '<b>6–12 months</b>.'],
    ['Monotherapy vs polypharmacy: which is preferred and why?', '<b>Monotherapy</b>: fewer side effects, no masking of side effects, fewer interactions.'],
    ['Name 4 rating scales and what they measure.', 'YMRS: mania · HAM-D: depression · BDI: depression · Y-BOCS: OCD'],
    ['6 life-threatening side effects to watch for?', 'NMS, serotonin syndrome, QT prolongation/arrhythmia, Stevens-Johnson syndrome, agranulocytosis, anaphylaxis'],
    ['3 roles of the psychologist in medication care?', '1. Recognise &amp; refer  2. Monitor &amp; feed back  3. Educate &amp; support'],
    ['Stepped care: mild, moderate, severe?', 'Mild → therapy/self-help. Moderate → therapy or meds. Severe/high-risk → meds + therapy. Safety overrides.'],
    ['Mania soon after starting an antidepressant means?', 'A red flag: possible <b>bipolar disorder</b>. Stop the antidepressant, start a mood stabiliser.'],
    ['Which mood stabiliser is avoided in pregnancy?', '<b>Sodium valproate</b> (teratogenic: neural tube defects, lower IQ).'],
    ['“Note it, time it, tell…”?', '“…tell the prescriber.” The rule for spotting side effects.']
  ],
  quiz: [
    { q: 'Pharmacokinetics is best described as…', o: ['What the drug does to the body', 'What the body does to the drug', 'How a drug binds receptors', 'The study of side effects'], a: 1, w: 'PK = ADME, the body handling the drug.' },
    { q: 'A patient feels better after 3 weeks on an SSRI and wants to stop. Best advice?', o: ['Stop today', 'Halve the dose yourself', 'Continue; relapse risk is highest now, and any stop must be a planned taper', 'Switch to a benzodiazepine'], a: 2, w: 'Keep taking it, never stop suddenly; continue 6–12 months after remission.' },
    { q: 'Which scale is used for mania?', o: ['HAM-D', 'Y-BOCS', 'YMRS', 'BDI'], a: 2, w: 'Young Mania Rating Scale.' },
    { q: 'Mania appearing a month after starting an antidepressant suggests…', o: ['Good treatment response', 'Possible bipolar disorder: a red flag', 'Serotonin syndrome', 'Needs a higher dose'], a: 1, w: 'Antidepressant alone can precipitate mania; the diagnosis often shifts to bipolar.' },
    { q: 'First-line long-term drug treatment for panic disorder?', o: ['Alprazolam as needed', 'An SSRI', 'Haloperidol', 'Lithium'], a: 1, w: 'SSRI treats the disorder; benzodiazepines are short-term only (dependence).' },
    { q: 'Which is NOT one of the principles of prescribing?', o: ['Start low, go slow', 'Prefer polypharmacy for faster results', 'Diagnosis first', 'Informed consent'], a: 1, w: 'Monotherapy is preferred.' },
    { q: 'In an older adult on several medicines, a new antidepressant causes nausea, headache and confusion. Think of…', o: ['Low sodium (hyponatraemia)', 'Normal ageing', 'Placebo effect', 'Tardive dyskinesia'], a: 0, w: 'Some antidepressants lower sodium, especially in the elderly.' },
    { q: 'The psychologist’s main leverage in pharmacotherapy is…', o: ['Changing the dose', 'Psychoeducation, spotting side effects, timely escalation', 'Ordering blood tests', 'Choosing the drug'], a: 1, w: 'Psychologists don’t prescribe; they educate, monitor and refer.' }
  ],
  cheat: [
    ['Psychotropic groups (6)', 'Antipsychotics, antidepressants, mood stabilizers, anxiolytics, sedatives, stimulants'],
    ['Antidepressant onset', '2–6 weeks (side effects first)'],
    ['Continue antidepressant after remission', '6–12 months'],
    ['8 principles', 'Diagnosis, Start low go slow, Simple (monotherapy), Personalise, Safety, Adherence/duration, Monitor, Consent'],
    ['Rating scales', 'YMRS mania · HAM-D/BDI depression · Y-BOCS OCD'],
    ['Life-threatening ADRs', 'NMS, serotonin syndrome, QT prolongation, SJS, agranulocytosis, anaphylaxis'],
    ['Psychologist’s role', 'Recognise & refer · Monitor & feed back · Educate & support'],
    ['Side-effect rule', 'Note it, time it, tell the prescriber']
  ]
});
