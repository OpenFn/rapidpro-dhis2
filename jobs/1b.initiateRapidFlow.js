// For each item in this rapidProContact array...
each(
  '$.rapidProContacts[*]',
  fn(state =>
    // Add contacts to RapidPro...
    upsertContact(dataValue('contact'), x => {
      x.uuids.push(x.data.uuid);
      return x;
    })(state)
  )
);

// Start communication flows with the contacts...
startFlow({
  flow: '65e20d7c-2490-4d0e-a96e-b58ee7d0858b',
  contacts: state => state.uuids,
  restart_participants: false,
});
