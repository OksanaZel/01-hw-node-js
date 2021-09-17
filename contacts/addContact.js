const { nanoid } = require("nanoid");
const getAllContacts = require("./getAllContacts");
const updateContacts = require("./updateContacts");

const addContact = async (name, email, phone) => {
  const contacts = await getAllContacts();
  const id = nanoid(5);
  const newContact = { name, email, phone, id };
  contacts.push(newContact);

  try {
    await updateContacts(contacts);
    console.table(newContact);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = addContact;
