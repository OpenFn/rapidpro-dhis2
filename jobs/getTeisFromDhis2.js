getTEIs({
  fields: '*',
  ou: 'DiszpKrYNg8',
  program: 'uy2gU8kT1jF',
  //trackedEntityInstance: 'jQtdJHakJdj',
  skipPaging: true,
}, {}, state => {
  console.log(state.data); //Log DHIS2 response
  return state;
});

