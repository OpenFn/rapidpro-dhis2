fn(state => {
  console.log(`Manipulate data from dhis2 for RapidPro contact ${state.urn}`);
  console.log(`TEI ID: ${state.data.response.importSummaries[0].reference}`);
  return { ...state, teiId: state.data.response.importSummaries[0].reference };
});

upsertContact(state => ({
  urns: [state.urn],
  fields: { tei_id: state.teiId },
}));

sendBroadcast({
  text: "You're registered in the MNCH program. Your first visit is tomorrow at 4pm.",
  urns: [state.urn],
});
