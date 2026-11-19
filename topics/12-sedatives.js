addTopic({
  id: 'sedatives',
  title: 'Sedative-Hypnotics',
  source: 'Sedative-Hypnotics (Dr Thunga PJ) + anxiolytics/sedatives (Dr Akash Lanka)',
  oneliner: 'Sedatives <b>calm</b>, hypnotics <b>bring sleep</b>. Most work by <b>boosting GABA</b>, the brain’s brake. Benzodiazepines are much <b>safer than barbiturates</b>, but still cause <b>tolerance and dependence</b>.',
  sections: [
    { h: 'Definitions', html: `
      <div class="grid2">
        <div class="card"><h3>Sedative</h3><p>Calms and subdues excitement <b>without inducing sleep</b> (some drowsiness possible). Sedation = reduced responsiveness, less movement and thought. Used for agitation.</p></div>
        <div class="card"><h3>Hypnotic</h3><p><b>Induces and/or maintains sleep.</b> Not the same as “hypnosis” (a trance-like, suggestible state).</p></div>
      </div>
      <p>Both are <b>global CNS depressants</b>. Same drug can be a sedative at low dose and a hypnotic at higher dose; very high doses → anaesthesia, coma, death (with barbiturates).</p>
      <div class="box simple"><div class="bt">Say it simply</div>Low dose: calm. Medium: sleep. High: unconscious. Benzodiazepines have a built-in ceiling (safer); barbiturates don’t.</div>` },

    { h: 'Classification', html: `
      <div class="tw"><table><thead><tr><th>Group</th><th>Examples</th></tr></thead><tbody>
      <tr><td><b>Barbiturates</b></td><td>Long: phenobarbitone · Short: pentobarbitone · Ultra-short: thiopentone (anaesthesia)</td></tr>
      <tr><td><b>Benzodiazepines (BZDs)</b></td><td>Diazepam, clonazepam, nitrazepam, flurazepam, alprazolam, lorazepam, temazepam, oxazepam, triazolam, midazolam</td></tr>
      <tr><td><b>Non-BZD hypnotics (“Z-drugs”)</b></td><td>Zolpidem, zaleplon, zopiclone / eszopiclone</td></tr>
      <tr><td><b>Melatonin receptor agonists</b></td><td>Melatonin, ramelteon</td></tr>
      <tr><td><b>Others with sedative action</b> (reliability for insomnia varies)</td><td>Antihistamines: promethazine, diphenhydramine · Antipsychotic/antidepressant: chlorpromazine, amitriptyline (also mirtazapine, trazodone) · Anticholinergic: hyoscine · Opioids: morphine, pethidine</td></tr>
      </tbody></table></div>` },

    { h: 'The GABA-A receptor (how they work)', html: `
      <p>GABA-A is a <b>chloride (Cl⁻) channel</b>. When GABA binds, Cl⁻ flows in → neuron <b>hyperpolarised</b> → less likely to fire = calming.</p>
      <div class="tw"><table><thead><tr><th></th><th>Benzodiazepines</th><th>Barbiturates</th></tr></thead><tbody>
      <tr><td>Action on Cl⁻ channel</td><td>↑ <b>FREQUENCY</b> of opening</td><td>↑ <b>DURATION</b> of opening</td></tr>
      <tr><td>Need GABA present?</td><td><b>Yes</b> (positive allosteric modulator): built-in ceiling</td><td>No: at high dose open the channel <b>directly</b> → no ceiling</td></tr>
      <tr><td>Binding site</td><td>BZD site (between α and γ subunits)</td><td>Separate barbiturate site</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic</div><b>“Frenzodiazepines”</b> increase <b>Fre</b>quency. <b>“Barbi-DURATES”</b> increase <b>Dura</b>tion.</div>` },

    { h: 'Barbiturates vs Benzodiazepines', html: `
      <div class="tw"><table><thead><tr><th>Feature</th><th>Barbiturates</th><th>Benzodiazepines</th></tr></thead><tbody>
      <tr><td>Safety (therapeutic index)</td><td><b>Low</b>: dangerous in overdose</td><td><b>High</b>: safer alone</td></tr>
      <tr><td>Respiratory depression</td><td>Marked, can be fatal</td><td>Mild alone; dangerous with alcohol/opioids</td></tr>
      <tr><td>Antidote</td><td><b>None</b></td><td><b>Flumazenil</b></td></tr>
      <tr><td>Liver enzymes</td><td><b>Induce</b> CYP450 → interactions</td><td>No induction</td></tr>
      <tr><td>REM sleep</td><td>Strongly suppressed</td><td>Less affected</td></tr>
      <tr><td>Dependence / withdrawal</td><td>High; severe withdrawal</td><td>Present, milder</td></tr>
      <tr><td>Current use</td><td>Epilepsy (phenobarbitone), anaesthesia (thiopentone)</td><td>Anxiety, insomnia, seizures, alcohol withdrawal</td></tr>
      </tbody></table></div>` },

    { h: 'Benzodiazepines in detail', html: `
      <div class="tw"><table><thead><tr><th>Group</th><th>Drug</th><th>Half-life</th><th>Use / feature</th></tr></thead><tbody>
      <tr><td rowspan="4"><b>Long-acting</b></td><td>Flurazepam</td><td class="mono">50–100 h</td><td>Chronic insomnia; long-lived active metabolites</td></tr>
      <tr><td>Diazepam</td><td class="mono">30–60 h</td><td>Anxiety, <b>status epilepticus</b>, muscle relaxation; marked redistribution</td></tr>
      <tr><td>Nitrazepam</td><td class="mono">~30 h</td><td>Frequent night awakenings</td></tr>
      <tr><td>Clonazepam</td><td>Long</td><td>Strong <b>anticonvulsant</b> and muscle relaxant</td></tr>
      <tr><td rowspan="3"><b>Short-acting</b></td><td>Alprazolam</td><td class="mono">~12 h</td><td>Anxiety, night sedation; few hangover effects (but high dependence)</td></tr>
      <tr><td>Temazepam</td><td class="mono">8–12 h</td><td>Sleep-onset problems; no active metabolites</td></tr>
      <tr><td>Oxazepam</td><td>Intermediate</td><td>Active metabolite of diazepam; conjugated (safer in liver disease)</td></tr>
      <tr><td rowspan="2"><b>Ultra-short</b></td><td>Triazolam</td><td class="mono">2–3 h</td><td>Sleep induction, peak &lt;1 h; <b>rebound insomnia</b></td></tr>
      <tr><td>Midazolam</td><td>Ultra-rapid</td><td>Peak 20 min; IM premedication, IV anaesthesia</td></tr>
      </tbody></table></div>
      <h3>Uses</h3>
      <p>Anxiety (short-term), insomnia, <b>alcohol withdrawal</b> (cross-tolerant), seizures/status epilepticus, muscle spasm, pre-procedure sedation, acute agitation (“chemical restraint/tranquilisation”), catatonia (lorazepam), akathisia.</p>
      <h3>Adverse effects</h3>
      <ul><li>Drowsiness, psychomotor impairment (driving), <b>anterograde amnesia</b>, confusion</li>
      <li><b>Falls and fractures in the elderly</b></li>
      <li><b>Tolerance, dependence, withdrawal</b> (anxiety, insomnia, tremor, <b>seizures</b>); rebound insomnia with short-acting ones</li>
      <li><b>Respiratory depression with alcohol or opioids</b></li>
      <li>Paradoxical agitation (children, elderly)</li></ul>
      <div class="box tip"><div class="bt">Rule</div>Use the <b>lowest dose for the shortest time</b> (usually ≤2–4 weeks). <b>Never stop abruptly</b>: switch to a long-acting one (diazepam) and taper slowly (Topic 14).</div>` },

    { h: 'Z-drugs and melatonin agonists', html: `
      <div class="grid2">
        <div class="card"><h3>Z-drugs (zolpidem, zaleplon, zopiclone)</h3><p>Non-BZD structure but act at the <b>BZD site</b>, selective for <b>α1 (BZ1)</b> subunit → mainly <b>hypnotic</b>, little anxiolytic/anticonvulsant/muscle-relaxant action. Short-acting, less hangover; still some dependence. Reversed by flumazenil. Can cause complex sleep behaviours (sleepwalking).</p></div>
        <div class="card"><h3>Melatonin</h3><p>Main <b>pineal gland</b> hormone. Entrains the circadian rhythm; <b>no CNS depression</b>. Dose <b>2–10 mg</b>. Uses: <b>jet lag, shift work, delayed sleep phase syndrome</b>. Not dependable in severe insomnia.</p></div>
        <div class="card"><h3>Ramelteon</h3><p>Approved <b>MT1/MT2 agonist</b>. <b>No rebound insomnia or dependence</b>. Dose <b>8 mg</b>, t½ 2–3 h. Approved for <b>sleep-onset insomnia</b>.</p></div>
      </div>` },

    { h: 'Why this matters for psychologists', html: `
      <ul><li>Explains how GABA, the main inhibitory transmitter, slows the nervous system.</li>
      <li>Connects to clinical treatment (anxiety, insomnia, alcohol withdrawal).</li>
      <li>Helps identify <b>addiction and misuse</b> risks (prescription misuse, combining with alcohol).</li>
      <li>Improves collaboration with doctors; useful in <b>crisis intervention</b> (overdose risk, agitation).</li>
      <li>CBT-I (CBT for insomnia) is first-line for chronic insomnia; “as-needed” pills can become a <b>safety behaviour</b> in anxiety.</li></ul>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Classify sedative-hypnotics. Compare barbiturates and benzodiazepines.</b>
      <ol><li><b>Definitions</b> of sedative and hypnotic; CNS depressants; dose continuum.</li>
      <li><b>Classification</b> (5 groups with examples).</li>
      <li><b>Mechanism:</b> GABA-A Cl⁻ channel; BZD ↑ frequency vs barbiturate ↑ duration.</li>
      <li><b>Comparison table</b> (safety, antidote flumazenil, enzyme induction, dependence).</li>
      <li><b>BZD</b> half-life groups, uses, adverse effects, tapering.</li>
      <li><b>Z-drugs, melatonin, ramelteon.</b></li>
      <li><b>Conclusion:</b> BZDs replaced barbiturates for safety; short-term use with psychological treatment.</li></ol></div>` }
  ],
  flash: [
    ['Sedative vs hypnotic?', 'Sedative calms without sleep; hypnotic induces/maintains sleep.'],
    ['BZD vs barbiturate on Cl⁻ channel?', 'BZD ↑ <b>frequency</b>; barbiturate ↑ <b>duration</b>.'],
    ['Antidote for BZD overdose?', '<b>Flumazenil</b>. (None for barbiturates.)'],
    ['Why are barbiturates more dangerous?', 'Open the channel directly at high dose (no ceiling), low TI, severe respiratory depression, enzyme induction.'],
    ['Long-acting BZDs?', 'Flurazepam (50–100 h), diazepam (30–60 h), nitrazepam, clonazepam.'],
    ['Ultra-short BZDs?', 'Triazolam (2–3 h; rebound insomnia), midazolam (peak 20 min).'],
    ['BZD used for status epilepticus?', '<b>Diazepam</b> (or lorazepam).'],
    ['BZD for alcohol withdrawal: why?', '<b>Cross-tolerant</b> with alcohol; prevent seizures and DTs.'],
    ['Z-drugs act on which subunit?', '<b>α1 (BZ1)</b>: mainly hypnotic.'],
    ['Melatonin dose and uses?', '2–10 mg; jet lag, shift work, delayed sleep phase.'],
    ['Ramelteon?', 'MT1/MT2 agonist, 8 mg, sleep-onset insomnia, no dependence/rebound.'],
    ['BZD adverse effects in elderly?', 'Falls, confusion, amnesia.']
  ],
  quiz: [
    { q: 'Benzodiazepines act by…', o: ['Increasing duration of Cl⁻ channel opening', 'Increasing frequency of Cl⁻ channel opening', 'Blocking NMDA', 'Blocking SERT'], a: 1, w: 'Frequency = BZD; duration = barbiturates.' },
    { q: 'Antidote for benzodiazepine overdose:', o: ['Naloxone', 'Flumazenil', 'Dantrolene', 'Physostigmine'], a: 1, w: 'Naloxone is for opioids.' },
    { q: 'Which BZD has the shortest half-life and risks rebound insomnia?', o: ['Diazepam', 'Flurazepam', 'Triazolam', 'Clonazepam'], a: 2, w: '2–3 hours.' },
    { q: 'Melatonin is most useful for…', o: ['Severe chronic insomnia', 'Jet lag and shift work', 'Status epilepticus', 'Alcohol withdrawal'], a: 1, w: 'Also delayed sleep phase syndrome.' },
    { q: 'Which is an enzyme inducer?', o: ['Phenobarbitone', 'Lorazepam', 'Zolpidem', 'Ramelteon'], a: 0, w: 'Barbiturates induce CYP450.' },
    { q: 'Zolpidem is selective for the…', o: ['α1 (BZ1) subunit', '5-HT2A receptor', 'MT1 receptor', 'D2 receptor'], a: 0, w: 'Mainly hypnotic.' },
    { q: 'Biggest danger when BZDs are combined with alcohol or opioids:', o: ['Weight gain', 'Respiratory depression', 'EPS', 'Hypertension'], a: 1, w: 'Additive CNS depression.' }
  ],
  cheat: [
    ['Sedative / hypnotic', 'Calms without sleep / induces sleep; both CNS depressants'],
    ['Mechanism', 'GABA-A Cl⁻ channel; BZD ↑ frequency (needs GABA); barbiturate ↑ duration (direct at high dose)'],
    ['Antidote', 'BZD: flumazenil · Barbiturate: none'],
    ['BZD t½', 'Flurazepam 50–100 h, diazepam 30–60 h, alprazolam ~12 h, temazepam 8–12 h, triazolam 2–3 h, midazolam peak 20 min'],
    ['Z-drugs', 'Zolpidem, zaleplon, zopiclone: α1 selective, hypnotic'],
    ['Melatonin / ramelteon', '2–10 mg jet lag, shift, DSPS / MT1–MT2, 8 mg, sleep onset, no dependence']
  ]
});
