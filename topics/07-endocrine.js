addTopic({
  id: 'endocrine',
  title: 'Endocrine & Metabolic Effects, Monitoring',
  source: 'EPS, Endocrine effects and Metabolic Monitoring',
  oneliner: 'Psychiatric drugs can disturb <b>hormones</b>: prolactin rises with D2 blockers, lithium slows the thyroid, and many drugs cause <b>weight gain, diabetes and high lipids (metabolic syndrome)</b>. So we <b>measure at baseline and keep checking</b>.',
  sections: [
    { h: 'Endocrine basics', html: `
      <p><b>Endocrine glands</b> are ductless tissues that make <b>hormones</b> and release them straight into the blood.</p>
      <p>Five areas psychotropics affect: <b>metabolic syndrome</b> (diabetes, hypertension, dyslipidaemia), <b>prolactin</b>, <b>thyroid</b>, <b>cortisol</b>, <b>PMOS</b>.</p>
      <div class="box mn"><div class="bt">Mnemonic: “My Patients Take Cortisol Pills”</div><b>M</b>etabolic syndrome · <b>P</b>rolactin · <b>T</b>hyroid · <b>C</b>ortisol · <b>P</b>MOS</div>` },

    { h: '1. Metabolic syndrome', html: `
      <p><b>WHO (1998) definition:</b> <b>insulin resistance</b> (impaired fasting glucose, impaired glucose tolerance, or type 2 diabetes) <b>plus 2 or more</b> of:</p>
      <ul><li><b>Obesity</b> (waist–hip ratio or BMI)</li><li><b>Hyperlipidaemia</b> (high triglycerides, low HDL)</li><li><b>Hypertension</b></li><li><b>Microalbuminuria</b></li></ul>
      <p><b>Drugs:</b> mainly <b>clozapine, olanzapine</b> and other SGAs; also valproate, mirtazapine, lithium (weight). <b>Why:</b> <b>5-HT2C and H1 blockade</b> → more appetite; sedation and negative symptoms → less activity.</p>
      <div class="box simple"><div class="bt">Say it simply</div>The drug makes you hungrier and sleepier, so you eat more and move less. Over months that becomes weight gain → diabetes → heart disease. People with schizophrenia already die earlier, mostly from heart disease, so this matters.</div>` },

    { h: '2. Prolactin (hyperprolactinaemia)', html: `
      <p>Prolactin is a polypeptide hormone made by the <b>anterior pituitary</b>. Normally <b>dopamine</b> (from the hypothalamus, tuberoinfundibular pathway) acts on <b>D2 receptors of lactotroph cells</b> and <b>inhibits</b> prolactin.</p>
      <p><b>So:</b> block D2 → brake removed → <b>prolactin rises</b>.</p>
      <p><b>Normal functions:</b> milk production, breast development, natural contraception while breastfeeding, stress response; in men, reproductive function and sperm production.</p>
      <div class="tw"><table><thead><tr><th>Who</th><th>Symptoms of high prolactin</th></tr></thead><tbody>
      <tr><td>Women</td><td><b>Galactorrhoea</b> (milk discharge), <b>amenorrhoea/oligomenorrhoea</b>, vaginal dryness, infertility, hirsutism, acne</td></tr>
      <tr><td>Men</td><td>Breast changes (gynaecomastia), uncommon</td></tr>
      <tr><td>Both</td><td><b>Sexual dysfunction, low libido</b>; long term <b>osteoporosis</b> (low sex hormones)</td></tr>
      </tbody></table></div>
      <p><b>High-prolactin drugs:</b> <b>risperidone</b>, paliperidone, amisulpride, typicals (haloperidol). <b>Prolactin-sparing:</b> aripiprazole, quetiapine, clozapine.</p>` },

    { h: '3. Thyroid', html: `
      <p>Largest endocrine gland. Hormones: <b>T3, T4</b> (metabolism, growth, development) and <b>calcitonin</b> (calcium).</p>
      <div class="box tip"><div class="bt">Key fact</div><b>Lithium</b> interferes with several steps of thyroid hormone synthesis → <b>raised TSH and hypothyroidism</b> (up to ~20% of long-term users). That’s why TSH is checked every 6–12 months on lithium.</div>` },

    { h: '4. Cortisol', html: `
      <p>The main <b>stress hormone</b>. Dysregulated in <b>MDD, PTSD, anxiety, bipolar, schizophrenia</b>.</p>
      <div class="grid2">
        <div class="card"><h3>Drugs that RAISE cortisol</h3><p>Stimulants (methylphenidate, amphetamines); sodium valproate</p></div>
        <div class="card"><h3>Drugs that LOWER cortisol</h3><p>Antidepressants (SSRIs, SNRIs); antipsychotics (1st gen &gt; 2nd gen)</p></div>
      </div>` },

    { h: '5. PMOS', html: `
      <p><b>Polyendocrine Metabolic Ovarian Syndrome</b>, formerly <b>PCOS</b> (polycystic ovary syndrome).</p>
      <p><b>Risk drugs:</b> mood stabilisers <b>sodium valproate</b>, lamotrigine; antipsychotics <b>olanzapine, risperidone, clozapine</b>.</p>
      <p>The link between PMOS and psychiatric illness is <b>bidirectional</b> (each raises the risk of the other).</p>` },

    { h: 'Metabolic monitoring', html: `
      <div class="tw"><table><thead><tr><th>When</th><th>What</th></tr></thead><tbody>
      <tr><td><b>Baseline</b> (before starting, with or without other illnesses)</td><td><b>History:</b> personal &amp; family history of diabetes, heart disease, smoking, diet, activity.<br><b>Examination:</b> weight, <b>BMI</b>, <b>waist circumference</b>, <b>blood pressure</b>.<br><b>Labs:</b> fasting glucose / HbA1c, lipid profile; ± prolactin, ECG, LFT, thyroid as needed.</td></tr>
      <tr><td><b>Every visit</b></td><td>History and examination (weight, BMI, waist, BP)</td></tr>
      <tr><td><b>Labs in follow-up</b></td><td>In the <b>acute phase</b> (commonly ~12 weeks after starting) and through the <b>maintenance phase</b> (commonly yearly)</td></tr>
      </tbody></table></div>
      <h3>Asian population cut-offs (lower than Western)</h3>
      <div class="tw"><table><tbody>
      <tr><td>BMI</td><td><b>≥23</b> overweight, <b>≥25</b> obese (WHO Asian)</td></tr>
      <tr><td>Waist (Asian Indian)</td><td>Men <b>≥90 cm</b>, women <b>≥80 cm</b></td></tr>
      </tbody></table></div>
      <p>Asians develop diabetes and heart disease at a lower BMI, so the thresholds are lower.</p>
      <div class="box tip"><div class="bt">Psychologist’s role</div>Encourage diet, exercise and sleep routines from day 1; watch for weight gain, thirst, frequent urination; ask sensitively about sexual side effects and periods, which people often hide but which drive non-adherence.</div>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Discuss endocrine and metabolic side effects of psychotropics and their monitoring.</b>
      <ol><li><b>Intro:</b> endocrine glands; psychotropics affect 5 axes.</li>
      <li><b>Metabolic syndrome:</b> WHO 1998 definition; SGAs (clozapine, olanzapine); 5-HT2C/H1 mechanism.</li>
      <li><b>Hyperprolactinaemia:</b> dopamine inhibits prolactin via D2; symptoms in women, men, both; risperidone/FGAs.</li>
      <li><b>Thyroid:</b> lithium → hypothyroidism, raised TSH.</li>
      <li><b>Cortisol:</b> raised by stimulants, valproate; lowered by SSRIs/SNRIs, antipsychotics.</li>
      <li><b>PMOS:</b> valproate, olanzapine, risperidone, clozapine; bidirectional.</li>
      <li><b>Monitoring:</b> baseline history/exam/labs; every visit weight/BMI/waist/BP; labs in acute and maintenance phase; Asian cut-offs.</li>
      <li><b>Conclusion:</b> prevention via lifestyle + choosing lower-risk drugs.</li></ol></div>` }
  ],
  flash: [
    ['WHO 1998 metabolic syndrome definition?', 'Insulin resistance + ≥2 of: obesity, hyperlipidaemia, hypertension, microalbuminuria.'],
    ['Why do antipsychotics raise prolactin?', 'Dopamine normally inhibits prolactin via D2 on lactotrophs; blocking D2 removes the brake.'],
    ['Symptoms of hyperprolactinaemia in women?', 'Galactorrhoea, amenorrhoea, vaginal dryness, infertility, hirsutism, acne, low libido.'],
    ['Long-term risk of high prolactin?', '<b>Osteoporosis</b>.'],
    ['Antipsychotic with most prolactin rise (atypicals)?', '<b>Risperidone</b> (also paliperidone, amisulpride).'],
    ['Lithium’s thyroid effect?', '<b>Hypothyroidism, raised TSH</b>.'],
    ['Drugs that raise cortisol?', 'Stimulants (MPH, amphetamines), sodium valproate.'],
    ['PMOS was formerly called?', '<b>PCOS</b>. Drugs: valproate, lamotrigine, olanzapine, risperidone, clozapine.'],
    ['Asian BMI cut-offs?', '≥23 overweight, ≥25 obese.'],
    ['Asian Indian waist cut-offs?', 'Men ≥90 cm, women ≥80 cm.'],
    ['Baseline metabolic monitoring includes?', 'History, weight/BMI/waist/BP, fasting glucose/HbA1c, lipids.']
  ],
  quiz: [
    { q: 'Prolactin is inhibited by…', o: ['Serotonin', 'Dopamine via D2', 'GABA', 'Cortisol'], a: 1, w: 'Blocking D2 raises prolactin.' },
    { q: 'Which drug commonly causes hypothyroidism?', o: ['Lithium', 'Sertraline', 'Haloperidol', 'Zolpidem'], a: 0, w: 'Raised TSH; check every 6–12 months.' },
    { q: 'WHO 1998 metabolic syndrome needs insulin resistance plus at least…', o: ['1 risk factor', '2 risk factors', '3 risk factors', '4 risk factors'], a: 1, w: 'Two of obesity, lipids, hypertension, microalbuminuria.' },
    { q: 'PMOS was previously known as…', o: ['PCOS', 'PMDD', 'PMS', 'POTS'], a: 0, w: 'Polycystic ovary syndrome.' },
    { q: 'Which drug RAISES cortisol?', o: ['SSRIs', 'Methylphenidate', 'SNRIs', 'Antipsychotics'], a: 1, w: 'Stimulants and valproate raise it.' },
    { q: 'For Asian Indian men, abdominal obesity starts at a waist of…', o: ['≥80 cm', '≥90 cm', '≥102 cm', '≥110 cm'], a: 1, w: 'Women ≥80 cm.' },
    { q: 'A long-term complication of untreated hyperprolactinaemia:', o: ['Osteoporosis', 'Hyperthyroidism', 'Agranulocytosis', 'Tardive dyskinesia'], a: 0, w: 'Low sex hormones weaken bone.' }
  ],
  cheat: [
    ['5 axes', 'Metabolic, Prolactin, Thyroid, Cortisol, PMOS'],
    ['MetS (WHO 1998)', 'Insulin resistance + ≥2: obesity, high lipids, HTN, microalbuminuria'],
    ['Prolactin', 'D2 block lifts dopamine brake → galactorrhoea, amenorrhoea, sexual dysfunction, osteoporosis. Risperidone, FGAs'],
    ['Thyroid', 'Lithium → hypothyroidism, ↑TSH'],
    ['Cortisol', '↑ stimulants, valproate · ↓ SSRIs/SNRIs, antipsychotics'],
    ['PMOS (ex-PCOS)', 'Valproate, lamotrigine, olanzapine, risperidone, clozapine'],
    ['Asian cut-offs', 'BMI ≥23 overweight, ≥25 obese; waist M ≥90, F ≥80 cm']
  ]
});
