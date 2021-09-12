getTEIs({
  fields: '*',
  ou: 'DiszpKrYNg8',
  program: 'uy2gU8kT1jF',
  //trackedEntityInstance: 'jQtdJHakJdj',
  skipPaging: true,
}, {}, state => {
  console.log(state.data.trackedEntityInstances.map(x => JSON.stringify(x.attributes, null, 2))); //Log DHIS2 response
  return state;
});

