getTEIs({
  fields: '*',
  ou: 'DiszpKrYNg8',
  program: 'uy2gU8kT1jF',
  //trackedEntityInstance: 'jQtdJHakJdj',
  skipPaging: true,
}, {}, state => {
  const {data} = state;
  console.log(data.trackedEntityInstances.map(tei => tei.attributes.map(a => `${a.displayName}: ${a.value}`))) //Log DHIS2 response
  return state;
});

