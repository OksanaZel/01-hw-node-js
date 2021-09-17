const fs = require("fs/promises");
const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const removeContactById = async (contactId) => {
  try {
    const contacts = await getAllContacts();
    const idx = contacts.findIndex(
      (contact) => String(contact.id) === String(contactId)
    );
    if (idx === -1) {
      return null;
    }

    contacts.splice(idx, 1);
    await updateContacts(contacts);
    console.log("Success remove");
  } catch (error) {
    console.log(error);
  }
};

module.exports = removeContactById;
