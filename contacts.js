const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const getAllContacts = require("./getAllContacts");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
  try {
    const contacts = await getAllContacts(contactsPath);
    console.table(contacts);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await getAllContacts(contactsPath);
    const contact = contacts.find(
      (contact) => String(contact.id) === String(contactId)
    );
    if (!contact) {
      return null;
    }

    console.table(contact);
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await getAllContacts(contactsPath);
    const idx = contacts.findIndex(
      (contact) => String(contact.id) === String(contactId)
    );
    if (idx === -1) {
      return null;
    }

    contacts.splice(idx, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.log("Success remove");
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (name, email, phone) => {
  const contacts = await getAllContacts(contactsPath);
  const id = nanoid(5);
  const newContact = { name, email, phone, id };
  contacts.push(newContact);

  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts));
    console.table(newContact);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
