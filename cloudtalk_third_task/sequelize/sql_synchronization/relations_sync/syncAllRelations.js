const createUpToDateRelations = require("./createUpToDateRelations");
const deleteOutDatedRelations = require("./deleteOutDatedRelations");

const syncAllRelations = async () => {

    await deleteOutDatedRelations();

    await createUpToDateRelations();

};

module.exports = syncAllRelations;


