// Manipulate the data from dhis2...
fn(state => {

  // TODO: move this to the dhis2 adaptor ======================================
  function valByName(attributes, name) {
    const elem = attributes.find(a => a.displayName.toLowerCase() == name.toLowerCase())
    return elem ? elem.value : null
  }
  // ==========================================================================

  console.log('Build RapidPro contacts from raw dhis2 response...');
  const rapidProContacts = state.data.trackedEntityInstances
    .filter(tei => valByName(tei.attributes, 'phone number'))
    .map(tei => {
      const firstName = valByName(tei.attributes, 'first name')
      const lastName = valByName(tei.attributes, 'last name')
      const phoneNumber = valByName(tei.attributes, 'phone number');
      const contact = {
        name: `${firstName} ${lastName}`,
        urns: [`tel:${phoneNumber}`],
        fields: { tei_id: tei.trackedEntityInstance }
      }
      return { contact };
    })
  return { ...state, rapidProContacts, uuids: [] };
});

// For each item in this rapidProContact array...
each(
  '$.rapidProContacts[*]',
  // Add contacts to RapidPro...
  addContact(
    dataValue('contact'),
    state => {
      console.log(state.uuids)
      state.uuids.push(state.data.uuid)
      return state;
    }
  )
);

// Start communication flows with the contacts...
startFlow({
  flow: '65e20d7c-2490-4d0e-a96e-b58ee7d0858b',
  contacts: state => state.uuids,
  restart_participants: false,
})
