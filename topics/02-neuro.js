addTopic({
  id: 'neuro',
  title: 'Neurotransmitters',
  source: 'Understanding Neurotransmitters (Dr Priyanka R)',
  oneliner: 'Neurotransmitters are <b>chemical messengers</b> one nerve cell releases to switch the next one on or off. Most psychiatric drugs work by <b>changing how much of a messenger is around</b> or <b>blocking its receptor</b>.',
  sections: [
    { h: 'Definition', html: `
      <p>A <b>neurotransmitter</b> is a chemical made <b>inside the body</b> (endogenous), released by the <b>presynaptic</b> neuron, which crosses the <b>synaptic cleft</b> and binds <b>specific receptors</b> on the <b>postsynaptic</b> cell, changing its electrical or chemical activity.</p>
      <p>First shown by <b>Otto Loewi (1921)</b> with the frog-heart <b>“Vagusstoff”</b> experiment (the substance later identified as acetylcholine).</p>
      <div class="box simple"><div class="bt">Say it simply</div>Neuron A “texts” neuron B. The text = the neurotransmitter. B’s phone = the receptor. Drugs can send fake texts (agonists), block B’s phone (antagonists), or stop the text being deleted (reuptake inhibitors).</div>
      <p><b>4 criteria</b> for a neurotransmitter: it is <b>synthesised</b> in the neuron, <b>stored</b> in vesicles, <b>released</b> by Ca²⁺-dependent exocytosis, and <b>acts on receptors</b> (then is terminated).</p>` },

    { h: '6 stages of synaptic transmission', html: `
      <div class="timeline">
        <div><b>1 · Synthesis</b>Precursor → transmitter by enzymes</div>
        <div><b>2 · Storage</b>Packed into synaptic vesicles</div>
        <div><b>3 · Release</b>Action potential opens Ca²⁺ channels → vesicles fuse, release</div>
        <div><b>4 · Binding</b>Crosses the cleft, binds receptors</div>
        <div><b>5 · Effect</b>Ionotropic = fast; metabotropic = slow</div>
        <div><b>6 · Termination</b>Reuptake, enzyme breakdown, or diffusion</div>
      </div>
      <div class="box mn"><div class="bt">Mnemonic</div><b>“S</b>ome <b>S</b>tudents <b>R</b>ead <b>B</b>ooks <b>E</b>very <b>T</b>ime”: Synthesis, Storage, Release, Binding, Effect, Termination.</div>
      <p><b>Ionotropic</b> receptor = an ion channel that opens directly (fast, milliseconds; e.g. NMDA, AMPA, GABA-A, nicotinic).<br><b>Metabotropic</b> receptor = G-protein linked, works via second messengers (slow, longer; e.g. mGluR, GABA-B, muscarinic, most dopamine/serotonin receptors).</p>` },

    { h: 'Two families of neurotransmitters', html: `
      <div class="grid2">
        <div class="card"><h3>Small-molecule transmitters</h3><ul>
          <li><b>Amino acids:</b> glutamate, GABA, glycine</li>
          <li><b>Monoamines:</b> dopamine, serotonin, noradrenaline</li>
          <li><b>Acetylcholine</b></li>
          <li>Made locally in the nerve terminal</li><li><b>Fast</b>, point-to-point signalling</li></ul></div>
        <div class="card"><h3>Neuropeptides</h3><ul>
          <li>Endorphins, enkephalins, substance P, oxytocin</li>
          <li>Larger; made in the <b>cell body (soma)</b> from mRNA, shipped to terminals</li>
          <li><b>Slower, longer-lasting, modulatory</b></li>
          <li>Often <b>co-released</b> with small molecules</li></ul></div>
      </div>` },

    { h: 'The key systems, one by one', html: `
      <div class="tw"><table><thead><tr><th>Transmitter</th><th>Made from</th><th>Receptors · cleared by</th><th>Where / job</th><th>Linked disorder</th></tr></thead><tbody>
      <tr><td><b>Glutamate</b><br><small>main EXCITATORY</small></td><td>Glutamine (glutaminase)</td><td>NMDA, AMPA, kainate (ionotropic); mGluR · glial EAAT transporters</td><td>Most excitatory synapses; <b>LTP</b>, learning &amp; memory (hippocampus)</td><td>Excitotoxicity (stroke, TBI); <b>NMDA hypofunction → schizophrenia</b></td></tr>
      <tr><td><b>GABA</b><br><small>main INHIBITORY</small></td><td>Glutamate (enzyme <b>GAD</b>)</td><td>GABA-A (Cl⁻ channel → hyperpolarises), GABA-B · GAT transporters</td><td>Brakes excitation; cortical inhibition</td><td>Anxiety, epilepsy. Target of <b>benzodiazepines &amp; barbiturates</b></td></tr>
      <tr><td><b>Dopamine</b></td><td>Tyrosine → L-DOPA → dopamine</td><td>D1-like (excite), D2-like (inhibit) · DAT, MAO/COMT</td><td>Reward, motivation, movement. 4 pathways</td><td>Schizophrenia (mesolimbic excess), Parkinson’s (nigrostriatal loss), addiction</td></tr>
      <tr><td><b>Serotonin (5-HT)</b></td><td>Tryptophan → 5-HTP → 5-HT</td><td>≥14 subtypes (5-HT1–7) · SERT</td><td><b>Raphe nuclei</b>; mood, sleep, appetite, impulses</td><td>Depression, anxiety, OCD. Target of <b>SSRIs</b></td></tr>
      <tr><td><b>Noradrenaline</b></td><td>Dopamine (dopamine-β-hydroxylase)</td><td>α, β adrenergic</td><td><b>Locus coeruleus</b>; fight-or-flight, arousal, attention</td><td>Anxiety, PTSD hyperarousal, ADHD</td></tr>
      <tr><td><b>Acetylcholine</b></td><td>Choline + acetyl-CoA (choline acetyltransferase)</td><td>Nicotinic (ionotropic), muscarinic (metabotropic) · acetylcholinesterase</td><td>Only transmitter at the <b>neuromuscular junction</b>; attention, memory (basal forebrain)</td><td><b>Alzheimer’s</b> (loss of cholinergic neurons)</td></tr>
      </tbody></table></div>
      <div class="box mn"><div class="bt">Mnemonics</div><ul>
        <li><b>Glutamate = Gas pedal, GABA = brake.</b> They balance each other.</li>
        <li>Synthesis chain: <b>T</b>yrosine → <b>D</b>OPA → <b>D</b>opamine → <b>N</b>oradrenaline (“<b>T</b>he <b>D</b>og <b>D</b>id <b>N</b>othing”).</li>
        <li><b>Tryp</b>tophan → serotonin: “a <b>trip</b> to happiness”.</li>
        <li>Where they live: <b>R</b>aphe = sero<b>tonin</b> (“Raphe Rests”), <b>L</b>ocus coeruleus = noradrena<b>line</b> (“Locus = Lion, fight-or-flight”).</li></ul></div>` },

    { h: 'Four dopamine pathways (preview of antipsychotics)', html: `
      <ul><li><b>Mesolimbic:</b> reward, reinforcement, addiction; <b>excess → positive symptoms</b> of psychosis.</li>
      <li><b>Mesocortical:</b> cognition; <b>underactive → negative symptoms</b>.</li>
      <li><b>Nigrostriatal:</b> voluntary movement; degenerates in <b>Parkinson’s</b>.</li>
      <li><b>Tuberoinfundibular:</b> controls prolactin release.</li></ul>
      <div data-widget="pathways"></div>` },

    { h: 'Clinical relevance summary', html: `
      <div class="tw"><table><thead><tr><th>System</th><th>Condition</th><th>Proposed mechanism</th></tr></thead><tbody>
      <tr><td>Dopamine</td><td>Schizophrenia; Parkinson’s</td><td>Mesolimbic hyperactivity; nigrostriatal degeneration</td></tr>
      <tr><td>Serotonin</td><td>Depression; anxiety; OCD</td><td>Low synaptic availability / receptor dysregulation</td></tr>
      <tr><td>GABA</td><td>Anxiety; epilepsy</td><td>Reduced inhibitory tone; impaired Cl⁻ conductance</td></tr>
      <tr><td>Glutamate</td><td>Schizophrenia; excitotoxic injury</td><td>NMDA hypofunction; excess excitation</td></tr>
      <tr><td>Noradrenaline</td><td>PTSD; anxiety; ADHD</td><td>Dysregulated locus coeruleus arousal</td></tr>
      <tr><td>Acetylcholine</td><td>Alzheimer’s</td><td>Loss of basal forebrain cholinergic neurons</td></tr>
      </tbody></table></div>` },

    { h: 'How drugs change synaptic transmission', html: `
      <div class="grid2">
        <div class="card"><h3>Agonist</h3><p>Binds and <b>activates</b> a receptor, mimicking the natural transmitter. <i>E.g. nicotine at nicotinic ACh receptors.</i></p></div>
        <div class="card"><h3>Antagonist</h3><p>Binds <b>without activating</b>, blocking the transmitter. <i>E.g. antipsychotics at D2.</i></p></div>
        <div class="card"><h3>Reuptake inhibitor</h3><p>Blocks the transporter so the transmitter stays longer in the synapse. <i>E.g. SSRIs at SERT.</i></p></div>
        <div class="card"><h3>Enzyme inhibitor</h3><p>Stops breakdown, raising transmitter levels. <i>E.g. MAO inhibitors, acetylcholinesterase inhibitors.</i></p></div>
      </div>
      <p><b>From molecule to mind:</b> molecular level (synthesis, release, binding) → circuit level (pathways) → behaviour (mood, cognition, movement, arousal) → clinical (dysregulation = illness; drugs restore balance). Systems never act alone: excitatory, inhibitory and modulatory signals interact all the time.</p>` },

    { h: 'Ready-made exam answer', html: `
      <div class="examans"><b>Q. What are neurotransmitters? Describe synaptic transmission and the clinical relevance of major neurotransmitters.</b>
      <ol><li><b>Definition</b> (endogenous chemical, presynaptic release, crosses cleft, binds receptor). Otto Loewi 1921, Vagusstoff.</li>
      <li><b>Six stages:</b> synthesis, storage, Ca²⁺-dependent release, receptor binding, ionotropic/metabotropic effect, termination (reuptake, enzymes, diffusion).</li>
      <li><b>Classification:</b> small molecules (amino acids, monoamines, ACh) vs neuropeptides.</li>
      <li><b>Each system</b> in 1–2 lines: glutamate (excitatory, LTP, NMDA in schizophrenia), GABA (inhibitory, benzodiazepines), dopamine (4 pathways), serotonin (raphe, SSRIs), noradrenaline (locus coeruleus), ACh (NMJ, Alzheimer’s).</li>
      <li><b>Drug actions:</b> agonist, antagonist, reuptake inhibitor, enzyme inhibitor, with examples.</li>
      <li><b>Conclusion:</b> imbalance in these systems underlies psychiatric illness and is the main target of psychopharmacology.</li></ol></div>` }
  ],
  flash: [
    ['Who first proved chemical neurotransmission?', '<b>Otto Loewi, 1921</b>: the frog-heart “Vagusstoff” experiment.'],
    ['6 stages of synaptic transmission?', 'Synthesis → Storage → Release (Ca²⁺) → Receptor binding → Signal effect → Termination'],
    ['Main excitatory and main inhibitory transmitters?', 'Excitatory: <b>glutamate</b>. Inhibitory: <b>GABA</b>.'],
    ['GABA is made from…?', '<b>Glutamate</b>, by the enzyme <b>GAD</b>.'],
    ['GABA-A receptor is what kind of channel?', 'A <b>chloride (Cl⁻) channel</b>: hyperpolarises the neuron.'],
    ['Dopamine synthesis chain?', 'Tyrosine → L-DOPA → Dopamine (→ Noradrenaline via dopamine-β-hydroxylase)'],
    ['Serotonin is made from…, and its cell bodies are in…?', '<b>Tryptophan</b> (via 5-HTP); <b>raphe nuclei</b> of the brainstem.'],
    ['Noradrenaline cell bodies are in…?', '<b>Locus coeruleus</b>.'],
    ['Which transmitter is lost in Alzheimer’s?', '<b>Acetylcholine</b> (basal forebrain).'],
    ['NMDA receptor hypofunction is linked to…?', '<b>Schizophrenia</b>.'],
    ['Small molecules vs neuropeptides?', 'Small: fast, made in terminal. Peptides: slow, modulatory, made in soma via mRNA, often co-released.'],
    ['Ionotropic vs metabotropic?', 'Ionotropic = ion channel, fast. Metabotropic = G-protein, slow.']
  ],
  quiz: [
    { q: 'The brain’s main inhibitory neurotransmitter is…', o: ['Glutamate', 'Dopamine', 'GABA', 'Serotonin'], a: 2, w: 'GABA is the brake; benzodiazepines boost it.' },
    { q: 'Serotonin is synthesised from…', o: ['Tyrosine', 'Tryptophan', 'Choline', 'Glutamine'], a: 1, w: 'Tryptophan → 5-HTP → 5-HT.' },
    { q: 'Release of neurotransmitter from vesicles depends on…', o: ['Sodium entry', 'Calcium (Ca²⁺) entry', 'Chloride entry', 'Potassium exit'], a: 1, w: 'Action potential opens Ca²⁺ channels → exocytosis.' },
    { q: 'SSRIs act by…', o: ['Blocking D2 receptors', 'Inhibiting MAO', 'Blocking the serotonin transporter (SERT)', 'Activating GABA-A'], a: 2, w: 'Reuptake inhibitor: serotonin stays longer in the synapse.' },
    { q: 'The only neurotransmitter at the neuromuscular junction is…', o: ['Noradrenaline', 'Acetylcholine', 'Glutamate', 'Dopamine'], a: 1, w: 'ACh, via nicotinic receptors.' },
    { q: 'Degeneration of which pathway causes Parkinson’s disease?', o: ['Mesolimbic', 'Mesocortical', 'Nigrostriatal', 'Tuberoinfundibular'], a: 2, w: 'Nigrostriatal = movement.' },
    { q: 'Which is a neuropeptide?', o: ['GABA', 'Substance P', 'Dopamine', 'Glycine'], a: 1, w: 'Endorphins, enkephalins, substance P, oxytocin are neuropeptides.' },
    { q: 'Antipsychotics at D2 receptors are an example of…', o: ['Agonists', 'Antagonists', 'Reuptake inhibitors', 'Enzyme inhibitors'], a: 1, w: 'They block without activating.' }
  ],
  cheat: [
    ['Definition credit', 'Otto Loewi, 1921, Vagusstoff (frog heart)'],
    ['6 stages', 'Synthesis, Storage, Release (Ca²⁺), Binding, Effect, Termination'],
    ['Glutamate / GABA', 'Excitatory (NMDA, AMPA, kainate) / Inhibitory (GABA-A Cl⁻ channel), GABA made from glutamate by GAD'],
    ['Dopamine / NA / 5-HT', 'Tyrosine→L-DOPA→DA→NA (locus coeruleus) · Tryptophan→5-HTP→5-HT (raphe)'],
    ['ACh', 'Neuromuscular junction; lost in Alzheimer’s'],
    ['Drug actions', 'Agonist, antagonist, reuptake inhibitor (SSRI), enzyme inhibitor (MAOI, AChE-I)']
  ]
});
