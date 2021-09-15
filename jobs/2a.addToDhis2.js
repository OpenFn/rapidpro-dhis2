fn(state => {
  const { name, urn } = state.data.contact;

  const firstName = name ? name.split(' ')[0] : 'Anonymous';
  const lastName = name ? name.split(' ')[1] : 'Test';
  const today = new Date();

  const attributes = [
    { attribute: 'zDhUuAYrxNC', value: lastName },
    { attribute: 'w75KJ2mc4zz', value: firstName },
    { attribute: 'P2cwLGskgxn', value: urn.slice(-12) },
  ];

  return { ...state, data: { ...state.data, attributes, today } };
});

createTEI({
  orgUnit: 'DiszpKrYNg8',
  trackedEntityType: 'nEenWmSyUEp',
  attributes: dataValue('attributes'),
  enrollments: [
    {
      orgUnit: 'DiszpKrYNg8',
      program: 'uy2gU8kT1jF',
      programState: 'oRySG82BKE6', // active
      enrollmentDate: dataValue('today'),
      incidentDate: dataValue('today'),
    },
  ],
});
