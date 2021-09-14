getTEIs(
  {
    fields: '*',
    ou: 'DiszpKrYNg8',
    program: 'uy2gU8kT1jF',
    skipPaging: true,
  },
  {},
  state => {
    console.log(JSON.stringify(state.data, null, 2));
    // console.log(
    //   state.data.trackedEntityInstances.map(tei =>
    //     tei.attributes.map(a => `${a.displayName}: ${a.value}`)
    //   )
    // ); //Log DHIS2 response
    return state;
  }
);
