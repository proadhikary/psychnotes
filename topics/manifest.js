// Study order. `file` is set once a topic is written and pushed.
window.BUILD = 3;
window.PLAN = [
  { n: 1,  id: 'basics',        mins: 18, title: 'Basics of Psychopharmacology & Prescribing', file: '01-basics.js' },
  { n: 2,  id: 'neuro',         mins: 12, title: 'Neurotransmitters',                         file: '02-neuro.js' },
  { n: 3,  id: 'pk',            mins: 12, title: 'Pharmacokinetics',                          file: '03-pk.js' },
  { n: 4,  id: 'pd',            mins: 12, title: 'Pharmacodynamics',                          file: null },
  { n: 5,  id: 'antipsychotics',mins: 15, title: 'Antipsychotics: Typical vs Atypical',       file: null },
  { n: 6,  id: 'eps',           mins: 15, title: 'Extrapyramidal Symptoms (EPS) & NMS',       file: null },
  { n: 7,  id: 'endocrine',     mins: 12, title: 'Endocrine & Metabolic Effects, Monitoring', file: null },
  { n: 8,  id: 'clozapine',     mins: 12, title: 'Clozapine',                                 file: null },
  { n: 9,  id: 'lai',           mins: 10, title: 'Long-Acting Injectables (LAIs)',            file: null },
  { n: 10, id: 'antidep',       mins: 18, title: 'Antidepressants: Side Effects & Switching', file: null },
  { n: 11, id: 'lithium',       mins: 18, title: 'Lithium & Mood Stabilizers',                file: null },
  { n: 12, id: 'sedatives',     mins: 12, title: 'Sedative-Hypnotics',                        file: null },
  { n: 13, id: 'interactions',  mins: 12, title: 'Side Effects & Drug Interactions',          file: null },
  { n: 14, id: 'sud',           mins: 15, title: 'Pharmacology of Substance Use Disorders',   file: null },
  { n: 15, id: 'adherence',     mins: 10, title: 'Treatment Adherence & Patient Selection',   file: null }
];
