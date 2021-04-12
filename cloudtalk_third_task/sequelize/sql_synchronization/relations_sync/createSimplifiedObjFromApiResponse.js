const createSimpleRelationsObjectFromApiResponse = (allContactsFromApiResponse) => {

    let simpleRelationObject = [];

    allContactsFromApiResponse.forEach(contactObj => {

        contactObj.contactAssociationsTickets.forEach(associationId => {

            simpleRelationObject.push({
                contactId: contactObj.contactId,
                ticketId: associationId
            });

        });
    });

    return simpleRelationObject;
};

module.exports = createSimpleRelationsObjectFromApiResponse;