const getAllContacts = require("./getAllContacts");

const listContacts = async () => {
  try {
    const contacts = await getAllContacts();
    console.table(contacts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = listContacts;
