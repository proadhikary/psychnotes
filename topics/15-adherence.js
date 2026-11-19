addTopic({
  id: 'adherence',
  title: 'Treatment Adherence & Patient Selection',
  source: 'Improving Treatment Adherence and Patient Selection (Dr Akash Lanka)',
  oneliner: 'A medicine only works if it is taken. Up to <b>70%</b> of people with serious mental illness don’t take medicines consistently. Fix it by <b>choosing the right drug for the person</b>, <b>education</b>, <b>simple regimens</b>, <b>LAIs</b> and a <b>strong alliance</b>.',
  sections: [
    { h: 'The reality of adherence', html: `
      <p><b>Adherence</b> = how far a person’s behaviour matches the <b>agreed</b> recommendations from a healthcare provider. (Older word: compliance.)</p>
      <div class="grid2">
        <div class="card"><h3 class="mono" style="font-size:28px">70%</h3><p>Up to 70% of people with schizophrenia and bipolar disorder don’t follow their regimen consistently.</p></div>
        <div class="card"><h3 class="mono" style="font-size:28px">3–6 wks</h3><p>Time for many antidepressants/antipsychotics to work: the danger period for stopping.</p></div>
        <div class="card"><h3 class="mono" style="font-size:28px">50%</h3><p>About half stop psychiatric medicine within the <b>first month</b>.</p></div>
      </div>
      <p><b>Consequences:</b> relapse, hospitalisation, functional decline, even death.</p>
      <div class="box mn"><div class="bt">Why people stop: “SIDE FX”</div><b>S</b>tigma · <b>I</b>nsight lacking · <b>D</b>elay in benefit (3–6 weeks) · <b>E</b>xpense (financial barriers) · <b>F</b>eeling better (false sense of relief) · <b>X</b> side effects (weight gain, sedation, sexual dysfunction, metabolic changes)</div>` },

    { h: 'Efficacy vs effectiveness', html: `
      <div class="tw"><table><thead><tr><th>Efficacy (RCTs, ideal conditions)</th><th>Effectiveness (real world)</th></tr></thead><tbody>
      <tr><td>Highly selected patients</td><td>Many psychiatric and medical conditions</td></tr>
      <tr><td>No comorbidity, no polypharmacy</td><td>Polypharmacy and interactions</td></tr>
      <tr><td>Intensive monitoring</td><td>Limited support, social stress</td></tr>
      <tr><td>Built-in adherence support</td><td>Inconsistent follow-up</td></tr>
      <tr><td>Short trials, single diagnosis</td><td>Years of management; psychosocial factors</td></tr>
      </tbody></table></div>
      <p>A drug can look strong in a trial yet do less in everyday practice. This <b>“effectiveness gap”</b> is largely due to adherence.</p>` },

    { h: 'Foundations of patient selection', html: `
      <p>Choosing a drug is more than matching diagnosis to class. Use a <b>biopsychosocial assessment</b>.</p>
      <div class="grid2">
        <div class="card"><h3>1. Prior treatment response</h3><p>Past response (or non-response) is one of the <b>best predictors</b>. Family history of response helps too, especially in mood disorders.</p></div>
        <div class="card"><h3>2. Side-effect profile matching</h3><p>Match sedation, weight gain, sexual effects to the person’s needs and risks (e.g. avoid olanzapine in diabetes; sedating drug for insomnia).</p></div>
        <div class="card"><h3>3. Medical comorbidities</h3><p>Heart disease, diabetes, kidney/liver impairment, seizures limit choices.</p></div>
        <div class="card"><h3>4. Preference &amp; accessibility</h3><p>Cost, insurance, dosing schedule, preference. Involving patients improves follow-through.</p></div>
      </div>
      <div class="box mn"><div class="bt">Mnemonic: “PSMP”</div><b>P</b>ast response · <b>S</b>ide-effect match · <b>M</b>edical illness · <b>P</b>reference &amp; price</div>` },

    { h: 'Personalised medicine: pharmacogenomics', html: `
      <p>Moving from population-based prescribing to <b>precision psychiatry</b>. <b>Pharmacogenomics</b> = how a person’s genes affect drug response. Key enzymes: <b>CYP2D6, CYP2C19, CYP1A2</b>.</p>
      <div class="tw"><table><thead><tr><th>Phenotype</th><th>What happens</th></tr></thead><tbody>
      <tr><td><b>Ultra-rapid metabolisers</b></td><td>Break drugs down too fast → may not work</td></tr>
      <tr><td><b>Extensive (normal) metabolisers</b></td><td>Respond to standard doses</td></tr>
      <tr><td><b>Intermediate metabolisers</b></td><td>May need dose adjustment</td></tr>
      <tr><td><b>Poor metabolisers</b></td><td>Drug builds up → side effects, toxicity</td></tr>
      </tbody></table></div>
      <p><b>Benefits:</b> less trial-and-error, less toxicity, better efficacy, better adherence (early success). Increasingly used in treatment-resistant cases.</p>` },

    { h: 'Strategies to boost adherence', html: `
      <h3>Education &amp; motivation</h3>
      <ul><li><b>Collaborative patient &amp; family education:</b> one of the most effective strategies; families who understand the illness and relapse signs support recovery.</li>
      <li><b>Motivational interviewing:</b> reflective listening and guided questions to resolve <b>ambivalence</b>; good for low insight or feeling coerced.</li>
      <li><b>Digital tools:</b> reminder, tracking, monitoring apps; boost self-efficacy.</li>
      <li><b>Structured psychoeducation:</b> improves medication literacy, reduces fear of side effects.</li></ul>
      <h3>Clinical / structural</h3>
      <ul><li><b>Simplify regimens:</b> once-daily dosing, combination pills, deprescribe non-essentials.</li>
      <li><b>Long-acting injectables:</b> for persistent oral non-adherence (schizophrenia, bipolar). Steady levels, fewer daily decisions, non-adherence visible.</li>
      <li><b>Medication reconciliation:</b> regularly review all medicines to cut unnecessary drugs and interactions, especially at care transitions.</li></ul>
      <div class="box tip"><div class="bt">Clinical pearl: the “brown bag review”</div>Ask the patient to bring <b>every</b> medicine they take, including supplements, in a bag. It reveals adherence problems and dangerous interactions.</div>` },

    { h: 'Medication + psychotherapy', html: `
      <p>Medicine vs therapy is a <b>false choice</b>. For depression, anxiety, PTSD, OCD, <b>combined treatment beats either alone</b>.</p>
      <div class="grid2">
        <div class="card"><h3>Medication provides</h3><ul><li>Stabilises mood, anxiety, psychosis</li><li>Reduces symptoms that block therapy</li><li>Rapid relief in crises</li><li>A biological base for psychological work</li></ul></div>
        <div class="card"><h3>Psychotherapy provides</h3><ul><li>Restructures thoughts and behaviours</li><li>Coping skills, emotion regulation</li><li>Processes trauma, grief, relationships</li><li>Insight and relapse prevention</li></ul></div>
      </div>
      <div class="grid2">
        <div class="card"><h3 class="mono" style="font-size:26px">~75%</h3><p>Response with medication + CBT in major depression</p></div>
        <div class="card"><h3 class="mono" style="font-size:26px">~60%</h3><p>Lower relapse when therapy is added to maintenance medication</p></div>
        <div class="card"><h3 class="mono" style="font-size:26px">~40%</h3><p>Faster time to remission with integrated treatment</p></div>
      </div>` },

    { h: 'The therapeutic alliance', html: `
      <p>The collaborative, trusting relationship between clinician and patient is <b>one of the strongest predictors of outcome</b>, even in pharmacotherapy. It makes the patient an <b>active partner</b>.</p>
      <ul><li><b>Manage expectations:</b> tell patients medicines take <b>3–6 weeks</b> and side effects may come first.</li>
      <li><b>Shared decision-making:</b> present options, risks and benefits, include the patient’s values. Goal: <b>concordance, not mere compliance</b>.</li>
      <li><b>Maintain the alliance:</b> regular check-ins, flexibility, empathy; patients who feel safe raising doubts stay engaged.</li></ul>
      <div class="box simple"><div class="bt">Compliance vs concordance</div><b>Compliance</b> = patient obeys the doctor. <b>Adherence</b> = patient follows an agreed plan. <b>Concordance</b> = doctor and patient reach the plan <b>together</b> as equals.</div>
      <p><b>The future:</b> whole-person care (housing, work, relationships, trauma), personalised treatment (pharmacogenomics, biomarkers, digital phenotyping), patient-centred partnership, and integrated innovation (digital therapeutics, AI, telepsychiatry).</p>
      <p><i>“The measure of success is not whether the patient takes their medication, but whether they are living a life worth living.”</i></p>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. Discuss strategies to improve treatment adherence in psychiatry.</b>
      <ol><li><b>Definition</b> of adherence; size of problem (70%, 50% in first month, 3–6 week delay); consequences.</li>
      <li><b>Reasons</b> for non-adherence (SIDE FX).</li>
      <li><b>Efficacy vs effectiveness</b> gap.</li>
      <li><b>Patient selection:</b> past response, side-effect matching, comorbidity, preference; pharmacogenomics (4 phenotypes).</li>
      <li><b>Strategies:</b> patient/family psychoeducation, MI, digital tools; simplify regimen, LAIs, medication reconciliation, brown bag review.</li>
      <li><b>Combined treatment</b> and <b>therapeutic alliance</b>: expectations, shared decision-making, concordance.</li>
      <li><b>Conclusion:</b> person-centred care aiming at a life worth living.</li></ol></div>` }
  ],
  flash: [
    ['Define adherence.', 'The extent to which a person’s behaviour matches <b>agreed</b> recommendations from a healthcare provider.'],
    ['Non-adherence rate in schizophrenia/bipolar?', 'Up to <b>70%</b>.'],
    ['What % stop within the first month?', 'About <b>50%</b>.'],
    ['Efficacy vs effectiveness?', 'Efficacy: ideal RCT conditions. Effectiveness: real-world practice.'],
    ['4 foundations of patient selection?', 'Prior response, side-effect matching, medical comorbidity, preference/accessibility.'],
    ['Key CYP enzymes in pharmacogenomics?', 'CYP2D6, CYP2C19, CYP1A2.'],
    ['4 metaboliser phenotypes?', 'Ultra-rapid, extensive, intermediate, poor.'],
    ['Poor metaboliser risk?', 'Drug accumulation → side effects/toxicity.'],
    ['What is the brown bag review?', 'Patient brings all medicines and supplements to find adherence gaps and interactions.'],
    ['Concordance means?', 'Treatment plan agreed jointly, as partners (vs compliance = obeying).'],
    ['Combined treatment stats?', '~75% response (meds + CBT), ~60% less relapse, ~40% faster remission.'],
    ['Therapy approach for ambivalence about medication?', '<b>Motivational interviewing</b>.']
  ],
  quiz: [
    { q: 'Up to what % of people with schizophrenia/bipolar are non-adherent?', o: ['10%', '30%', '70%', '95%'], a: 2, w: '70%.' },
    { q: 'A treatment works in an RCT but less in clinic. This gap is between…', o: ['Potency and efficacy', 'Efficacy and effectiveness', 'Affinity and efficacy', 'PK and PD'], a: 1, w: 'Real-world complexity, especially adherence.' },
    { q: 'A poor CYP2D6 metaboliser on a standard dose is at risk of…', o: ['No effect', 'Toxicity from drug build-up', 'Faster response', 'Allergy'], a: 1, w: 'Ultra-rapid metabolisers risk no effect.' },
    { q: 'Best technique for a patient ambivalent about taking medicine:', o: ['Confrontation', 'Motivational interviewing', 'Hypnosis', 'Exposure therapy'], a: 1, w: 'Works with ambivalence.' },
    { q: 'The “brown bag review” helps to…', o: ['Measure drug levels', 'Uncover adherence problems and interactions', 'Assess EPS', 'Diagnose depression'], a: 1, w: 'Bring all medicines including supplements.' },
    { q: 'The goal of shared decision-making is…', o: ['Compliance', 'Concordance', 'Coercion', 'Polypharmacy'], a: 1, w: 'Partnership, not obedience.' },
    { q: 'One of the best predictors of future drug response is…', o: ['Age', 'Prior treatment response', 'Height', 'Blood group'], a: 1, w: 'Family response history also helps.' }
  ],
  cheat: [
    ['Numbers', '70% non-adherence (SMI) · 3–6 weeks to work · 50% stop in month 1'],
    ['Combined Rx', '~75% response · ~60% less relapse · ~40% faster remission'],
    ['Selection', 'Prior response, side-effect match, comorbidity, preference/cost'],
    ['Pharmacogenomics', 'CYP2D6, 2C19, 1A2; ultra-rapid, extensive, intermediate, poor'],
    ['Strategies', 'Family psychoeducation, MI, apps, simplify, LAIs, med reconciliation, brown bag review'],
    ['Alliance', 'Expectations, shared decision-making → concordance not compliance']
  ]
});
