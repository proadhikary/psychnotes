addTopic({
  id: 'sud',
  title: 'Pharmacology of Substance Use Disorders',
  source: 'Pharmacology of Substance Use Disorders',
  oneliner: 'Medicines in addiction do <b>three jobs</b>: make <b>withdrawal safe</b>, <b>prevent relapse</b>, and <b>treat what sits alongside</b> (depression, anxiety, ADHD). They work best <b>with psychological and social care</b>.',
  sections: [
    { h: 'What addiction does to the brain', html: `
      <p>All addictive drugs act on the <b>mesolimbic dopamine (reward) pathway</b>, flooding it far more than natural rewards.</p>
      <div class="grid2">
        <div class="card"><h3>Reward &amp; salience</h3><p>Dopamine surges mark the drug as hugely important; <b>“wanting” outlasts “liking”</b>.</p></div>
        <div class="card"><h3>Adaptation</h3><p>Receptors <b>down-regulate</b>; tolerance grows; normal pleasures feel flat.</p></div>
        <div class="card"><h3>Control weakens</h3><p><b>Prefrontal</b> control falls as habit circuits strengthen → compulsive use.</p></div>
      </div>` },

    { h: 'Get the words right', html: `
      <div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
      <tr><td><b>Tolerance</b></td><td>More drug needed for the same effect (just a pharmacological adaptation)</td></tr>
      <tr><td><b>Physical dependence</b></td><td>Body has adapted; stopping → withdrawal. Can happen with <b>non-addictive</b> drugs too (e.g. antidepressants)</td></tr>
      <tr><td><b>Addiction (dependence syndrome)</b></td><td><b>Compulsive use, craving, loss of control despite harm</b>: the clinical disorder</td></tr>
      <tr><td><b>Withdrawal</b></td><td>Symptoms on stopping. <b>Alcohol: can kill</b>; opioids: awful but rarely fatal</td></tr>
      </tbody></table></div>
      <div class="box tip"><div class="bt">Key distinction</div>Dependence is <b>physiological</b>; addiction adds <b>craving, compulsion and loss of control</b>.</div>` },

    { h: 'Three jobs for medication', html: `
      <div class="grid2">
        <div class="card"><h3>1. Manage withdrawal</h3><p>Detoxification: make stopping safe over days–weeks.</p></div>
        <div class="card"><h3>2. Sustain recovery</h3><p>Maintenance and relapse prevention over months–years.</p></div>
        <div class="card"><h3>3. Treat comorbidity</h3><p>Depression, anxiety, ADHD, pain: untreated, they drive relapse.</p></div>
      </div>
      <div class="box flag"><div class="bt">Remember</div><b>Detox alone is not treatment.</b> Without step 2, relapse after withdrawal is very common.</div>` },

    { h: 'Alcohol', html: `
      <h3>Withdrawal (the one that can kill)</h3>
      <ul><li><b>Benzodiazepines</b> are the mainstay: <b>cross-tolerant</b> with alcohol; prevent <b>seizures and delirium tremens</b>; taper over days (e.g. chlordiazepoxide, diazepam; lorazepam/oxazepam in liver disease).</li>
      <li><b>Thiamine always</b>, <b>before glucose</b>, by injection if high risk: prevents <b>Wernicke’s encephalopathy</b> (confusion, ataxia, eye movement problems), which can become permanent <b>Korsakoff amnesia</b>.</li>
      <li>Decide inpatient vs community on severity, past seizures/DTs, comorbidity.</li></ul>
      <h3>Relapse prevention</h3>
      <div class="tw"><table><thead><tr><th>Drug</th><th>How</th><th>Best for</th><th>Cautions</th></tr></thead><tbody>
      <tr><td><b>Naltrexone</b></td><td>Opioid antagonist; blunts the “reward” of drinking</td><td><b>Drinking less</b> (reducing heavy drinking)</td><td>Not with opioids; check liver</td></tr>
      <tr><td><b>Acamprosate</b></td><td>Steadies glutamate/GABA balance after stopping</td><td><b>Staying stopped</b> (abstinence)</td><td>Cleared by kidneys</td></tr>
      <tr><td><b>Disulfiram</b></td><td><b>Deterrent</b>: unpleasant reaction (flushing, vomiting, palpitations) if alcohol taken</td><td>Highly motivated, ideally supervised</td><td>Reaction can be dangerous</td></tr>
      <tr><td>Baclofen, topiramate</td><td>Off-label, specialist</td><td>When first-line fails</td><td></td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonic: N-A-D</div><b>N</b>altrexone = <b>N</b>ot as much (drink less) · <b>A</b>camprosate = <b>A</b>bstinence · <b>D</b>isulfiram = <b>D</b>isgust (deterrent)</div>` },

    { h: 'Opioids', html: `
      <p><b>Agonist maintenance:</b> a stable, long-acting, prescribed opioid replaces a chaotic short-acting one, removing withdrawal and craving so life can be rebuilt. <b>Treatment, not “swapping one addiction for another”.</b></p>
      <div class="tw"><table><thead><tr><th>Drug</th><th>Type</th><th>Key points</th></tr></thead><tbody>
      <tr><td><b>Methadone</b></td><td><b>Full agonist</b>, long-acting</td><td>Excellent retention; supervised dosing; overdose risk during induction</td></tr>
      <tr><td><b>Buprenorphine</b></td><td><b>Partial agonist</b>, ceiling effect</td><td>Safer in overdose. Must wait until withdrawal has <b>started</b>, or it <b>precipitates withdrawal</b></td></tr>
      <tr><td><b>Naltrexone</b></td><td><b>Antagonist</b></td><td>Blocks effects completely; needs full detox first and strong motivation; overdose risk if stopped</td></tr>
      <tr><td><b>Naloxone</b></td><td>Antagonist (rescue)</td><td><b>Reverses overdose within minutes</b>; take-home kits for patients and families</td></tr>
      </tbody></table></div>
      <div class="box flag"><div class="bt">Most dangerous time</div><b>Loss of tolerance</b> after detox, prison release or hospital: the old dose can now kill. Warn every patient.</div>
      <p><b>Harm reduction:</b> clean needles, needle exchange, blood-borne virus testing and treatment. It keeps people alive so recovery stays possible. Evidence: agonist maintenance cuts illicit use, infection and death <b>more than detox alone</b>.</p>` },

    { h: 'Nicotine', html: `
      <ul><li><b>Nicotine replacement (NRT):</b> patch (steady background) + fast form (gum, lozenge, spray) for cravings. <b>Combination NRT works best.</b></li>
      <li><b>Varenicline:</b> <b>partial agonist</b> at nicotinic receptors; eases withdrawal and blunts reward. <b>Most effective single drug.</b></li>
      <li><b>Bupropion:</b> reduces craving and withdrawal; <b>lowers seizure threshold</b>.</li></ul>
      <p>Tobacco kills the most people of any substance. Quitting <b>improves</b> mental health. Medicine roughly <b>doubles quit rates</b>; adding behavioural support is better still.</p>` },

    { h: 'Stimulants, cannabis, benzodiazepines', html: `
      <div class="grid2">
        <div class="card"><h3>Stimulants &amp; cannabis</h3><p><b>No approved medication</b> for cocaine, methamphetamine or cannabis. <b>Psychosocial care leads:</b> <b>contingency management</b> has the strongest evidence for stimulants; CBT, MI. Treat withdrawal symptomatically and treat comorbid depression, anxiety, psychosis, ADHD. Cannabis withdrawal is real: irritability, poor sleep, appetite change.</p></div>
        <div class="card"><h3>Benzodiazepine dependence</h3><ul><li><b>Never stop abruptly</b>: risk of seizures</li><li><b>Switch to a long-acting BZD (diazepam)</b> for smooth, small reductions</li><li><b>Taper slowly</b> over weeks–months, slowest at the end</li><li>Withdrawal can be <b>protracted</b> (anxiety, insomnia, sensory symptoms): warn so it isn’t mistaken for relapse</li><li>Psychological support improves completion</li></ul></div>
      </div>` },

    { h: 'Summary table', html: `
      <div class="tw"><table><thead><tr><th>Substance</th><th>Withdrawal</th><th>Maintenance / relapse prevention</th></tr></thead><tbody>
      <tr><td><b>Alcohol</b></td><td>Benzodiazepines + thiamine</td><td>Naltrexone, acamprosate, disulfiram</td></tr>
      <tr><td><b>Opioids</b></td><td>Buprenorphine or methadone</td><td>Agonist maintenance, naltrexone, naloxone kit</td></tr>
      <tr><td><b>Nicotine</b></td><td>NRT</td><td>Varenicline, combination NRT, bupropion</td></tr>
      <tr><td><b>Benzodiazepines</b></td><td>Slow taper, switch to long-acting</td><td>Psychological support; no specific drug</td></tr>
      <tr><td><b>Stimulants / cannabis</b></td><td>Supportive only</td><td>No approved drug; psychosocial treatment leads</td></tr>
      </tbody></table></div>` },

    { h: 'The other half: psychological & social treatment', html: `
      <ul><li><b>Motivational interviewing:</b> works with ambivalence; useful at every stage</li>
      <li><b>CBT &amp; relapse prevention:</b> triggers, high-risk situations, coping</li>
      <li><b>Contingency management:</b> rewards for verified abstinence (best for stimulants)</li>
      <li><b>Mutual aid / 12-step:</b> AA/NA, peer support</li>
      <li><b>Family &amp; social work:</b> housing, jobs, relationships = “recovery capital”</li>
      <li><b>Treat comorbidity</b> in its own right</li></ul>
      <h3>Principles of good practice</h3>
      <ul><li><b>Relapsing condition:</b> relapse is part of the illness, not moral failure; it’s information.</li>
      <li><b>Meet people where they are:</b> less use and safer use are real gains.</li>
      <li><b>Combine, always:</b> medicine + psychosocial beats either alone.</li>
      <li><b>Think long-term:</b> stopping maintenance too early causes relapse.</li>
      <li><b>Stigma is a clinical obstacle:</b> blaming language makes people not come back.</li></ul>` },

    { h: 'Cases', html: `
      <details class="case"><summary>Vikram, 47: daily heavy drinking, morning shakes, past withdrawal seizure</summary><p>Seizure history = complicated withdrawal risk → <b>supervised detox with benzodiazepines + thiamine</b>, then <b>acamprosate</b> (goal: abstinence) + psychosocial support.</p></details>
      <details class="case"><summary>Meena, 31: heroin 6 years, repeated detox→relapse, recent overdose after leaving rehab</summary><p>Detox alone keeps failing; tolerance loss caused the overdose. → <b>Opioid agonist maintenance</b> (methadone/buprenorphine), <b>take-home naloxone</b>, BBV testing, psychosocial support.</p></details>
      <details class="case"><summary>Arun, 25: methamphetamine binges, paranoia after, wants a pill</summary><p>Honest answer: <b>no licensed medicine</b>. → <b>Contingency management</b>, CBT, MI; reassess mood and psychosis once abstinent.</p></details>
      <details class="case"><summary>Farah, 39: heavy evening drinking + low mood and anxiety</summary><p>Dual diagnosis: alcohol worsens mood, sleep and anxiety, and mood can’t be judged while drinking. → <b>Address alcohol first, then reassess mood</b>; treat depression if it persists.</p></details>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Discuss the pharmacological management of substance use disorders.</b>
      <ol><li><b>Neurobiology:</b> mesolimbic dopamine, adaptation, weakened prefrontal control.</li>
      <li><b>Terms:</b> tolerance, dependence, addiction, withdrawal.</li>
      <li><b>Three jobs</b> of medication.</li>
      <li><b>Alcohol:</b> BZD + thiamine (Wernicke–Korsakoff); naltrexone, acamprosate, disulfiram.</li>
      <li><b>Opioids:</b> methadone, buprenorphine, naltrexone; naloxone; tolerance loss; harm reduction.</li>
      <li><b>Nicotine:</b> NRT, varenicline, bupropion. <b>Stimulants/cannabis:</b> no drug, contingency management. <b>BZD:</b> switch to diazepam, slow taper.</li>
      <li><b>Psychosocial</b> treatment and principles.</li>
      <li><b>Conclusion:</b> combine, think long-term, reduce stigma.</li></ol></div>` }
  ],
  flash: [
    ['Common brain pathway of all addictive drugs?', '<b>Mesolimbic dopamine</b> (reward) pathway.'],
    ['Dependence vs addiction?', 'Dependence = physiological (withdrawal). Addiction = + craving, compulsion, loss of control.'],
    ['3 jobs of medication in SUD?', 'Manage withdrawal, sustain recovery, treat comorbidity.'],
    ['Alcohol withdrawal treatment?', '<b>Benzodiazepines + thiamine</b> (before glucose).'],
    ['Why thiamine?', 'Prevent <b>Wernicke’s encephalopathy</b> → Korsakoff amnesia.'],
    ['Naltrexone vs acamprosate vs disulfiram?', 'Drink less / stay abstinent / deterrent reaction.'],
    ['Methadone vs buprenorphine?', 'Full agonist vs partial agonist with ceiling (safer); bup can precipitate withdrawal if started too early.'],
    ['Drug that reverses opioid overdose?', '<b>Naloxone</b>.'],
    ['Most dangerous time for opioid overdose?', 'Right after a period of abstinence (tolerance loss): detox, prison release.'],
    ['Most effective single drug for smoking?', '<b>Varenicline</b> (nicotinic partial agonist).'],
    ['Best-evidence treatment for stimulant use disorder?', '<b>Contingency management</b> (no approved drug).'],
    ['How to stop long-term benzodiazepines?', 'Switch to long-acting <b>diazepam</b>, taper slowly over weeks–months.']
  ],
  quiz: [
    { q: 'Which withdrawal can be fatal?', o: ['Opioid', 'Alcohol', 'Cannabis', 'Nicotine'], a: 1, w: 'Seizures and delirium tremens.' },
    { q: 'Thiamine is given in alcohol dependence to prevent…', o: ['Seizures', 'Wernicke’s encephalopathy', 'Liver failure', 'Delirium tremens'], a: 1, w: 'Give before glucose.' },
    { q: 'A patient wants to cut down rather than stop drinking. Best drug?', o: ['Disulfiram', 'Acamprosate', 'Naltrexone', 'Methadone'], a: 2, w: 'Naltrexone = drink less.' },
    { q: 'Buprenorphine given while the person is still intoxicated with heroin may cause…', o: ['Overdose', 'Precipitated withdrawal', 'Serotonin syndrome', 'Nothing'], a: 1, w: 'Partial agonist displaces the full agonist.' },
    { q: 'Repeated relapse after opioid detox is the clearest indication for…', o: ['Another detox', 'Agonist maintenance (methadone/buprenorphine)', 'Disulfiram', 'Benzodiazepines'], a: 1, w: 'Maintenance saves lives.' },
    { q: 'Approved medication for methamphetamine use disorder:', o: ['Naltrexone', 'Varenicline', 'None; contingency management leads', 'Acamprosate'], a: 2, w: 'Psychosocial treatment is the treatment.' },
    { q: 'Most effective single agent for smoking cessation:', o: ['Bupropion', 'Varenicline', 'Nicotine gum alone', 'Naltrexone'], a: 1, w: 'Partial agonist at nicotinic receptors.' },
    { q: 'In dual diagnosis (alcohol + depression), the usual first step is…', o: ['Start an antidepressant only', 'Address alcohol, then reassess mood after abstinence', 'Ignore mood', 'Start lithium'], a: 1, w: 'Sequence matters.' }
  ],
  cheat: [
    ['Core', '3 jobs: withdrawal, relapse prevention, comorbidity. Detox alone ≠ treatment'],
    ['Alcohol', 'BZD + thiamine (Wernicke → Korsakoff). Naltrexone (less), acamprosate (abstinence), disulfiram (deterrent)'],
    ['Opioids', 'Methadone (full), buprenorphine (partial, ceiling), naltrexone (antagonist), naloxone (overdose). Tolerance loss = danger'],
    ['Nicotine', 'Combo NRT, varenicline (best), bupropion'],
    ['Stimulants/cannabis', 'No drug; contingency management'],
    ['BZD dependence', 'Switch to diazepam, slow taper']
  ]
});
