fn(state => {
  console.log('Manipulate data from dhis2...');
  return state;
});

sendBroadcast({
  text: 'Hi there nice sweater! Lets go walk around outside.',
  contacts: ['a052b00c-15b3-48e6-9771-edbaa277a353'],
});
