getTEIs({
  fields: '*',
  ou: 'DiszpKrYNg8',
  trackedEntityInstance: 'TKgxCgrSe56',
  skipPaging: true,
}, {}, state => {
  console.log(state.data); //Log DHIS2 response
  return state;
});
