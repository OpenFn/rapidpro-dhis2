// For each item in this rapidProContact array...
fn(state => {
  if (state.rapidProContacts.length == 0) {
    throw "We couldn't find anyone with a phone number!";
  }
  return state;
})

each(
  '$.rapidProContacts[*]',
  // Add contacts to RapidPro...
  upsertContact(dataValue('contact'), state => {
    state.uuids.push(state.data.uuid);
    return state;
  })
);

// Start communication flows with the contacts...
startFlow({
  flow: '65e20d7c-2490-4d0e-a96e-b58ee7d0858b',
  contacts: state => state.uuids,
  restart_participants: false,
});
