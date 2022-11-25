fn(state => {
  console.log(state);
  return state;
})
// get('trackedEntityInstances', {
//   fields: '*',
//   ou: 'DiszpKrYNg8',
//   program: 'uy2gU8kT1jF',
//   skipPaging: true,
// });

// // Manipulate the data from dhis2...
// fn(state => {
//   console.log('Build RapidPro contacts from raw dhis2 response...');
//   const rapidProContacts = state.data.trackedEntityInstances
//     .filter(tei => findAttributeValue(tei, 'phone number'))
//     .map(tei => {
//       const firstName = findAttributeValue(tei, 'first name');
//       const lastName = findAttributeValue(tei, 'last name');
//       const phoneNumber = findAttributeValue(tei, 'phone number');
//       const contact = {
//         name: `${firstName} ${lastName}`,
//         urns: [`tel:${phoneNumber}`],
//         fields: { tei_id: tei.trackedEntityInstance },
//       };
//       return { contact };
//     });
//   return { ...state, rapidProContacts, uuids: [] };
// });
