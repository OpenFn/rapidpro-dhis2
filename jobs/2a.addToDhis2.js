fn(state => {
  console.log(state.data);
  return state;
});

createTEI({
   orgUnit: 'DiszpKrYNg8',
   trackedEntityType: 'nEenWmSyUEp',
   attributes: [
      {
         attribute: 'zDhUuAYrxNC', // last name
         value: 'Test Only',
      },
      {
         attribute: 'w75KJ2mc4zz', // first name
         value: 'Gigiwe',
      },
      { attribute: 'P2cwLGskgxn', // phone Number
        value: dataValue('contact.urn').slice(-10)
      }
   ],
   enrollments: [
      {
         orgUnit: 'DiszpKrYNg8',
         program: 'uy2gU8kT1jF',
         programState: 'oRySG82BKE6', // active
        // enrollmentDate: '2021-01-04',
        // incidentDate: '2021-01-04',
      },
   ],
});