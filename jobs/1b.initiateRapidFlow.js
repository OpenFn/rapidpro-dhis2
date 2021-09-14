fn(state => {
  console.log('Manipulate data from dhis2...');
  return state;
});

addContact({
  name: 'Taylor',
  language: 'ENG',
  urns: ['tel:+447904413406'],
});

startFlow({
  flow: '65e20d7c-2490-4d0e-a96e-b58ee7d0858b',
  contacts: [dataValue('uuid')],
  // contacts: ['4924c72f-720c-46ec-8259-3fbef9efda20'],
  restart_participants: false,
});
