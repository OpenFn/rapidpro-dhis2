// Manipulate the data from dhis2...
fn(state => {
  console.log('Build RapidPro contacts from raw dhis2 response...');
  const rapidProContacts = state.data.trackedEntityInstances.map(tei => {
    const firstName = tei.attributes.find(attribute => attribute.displayName.toLowerCase() == 'first name').value
    const lastName = tei.attributes.find(attribute => attribute.displayName.toLowerCase() == 'last name').value
    const contact = {
      name: `${firstName} ${lastName}`,
      fields: { tei_id: 'something' }
    }
    return { contact };
  })
  return { ...state, rapidProContacts, data: { uuids: [] } };
});

// For each item in this rapidProContact array...
each(
  '$.rapidProContacts[*]',
  // Add contacts to RapidPro...
  addContact(
    dataValue('contact'),
    state => {
      state.data.uuids.push(state.data.uuid)
      return state;
    }
  )
)

// Start communication flows with the contacts...
startFlow({
  flow: '65e20d7c-2490-4d0e-a96e-b58ee7d0858b',
  contacts: dataValue('uuids'),
  restart_participants: false,
})
