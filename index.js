const { Command } = require("commander");
const contactsOperation = require("./contacts");

const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  try {
    switch (action) {
      case "list":
        return await contactsOperation.listContacts();
      case "get":
        return await contactsOperation.getContactById(id);
      case "add":
        return await contactsOperation.addContact(name, email, phone);
      case "remove":
        return await contactsOperation.removeContactById(id);
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    throw error;
  }
};

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       listContacts();
//       break;

//     case "get":
//       getContactById(id);
//       break;

//     case "add":
//       addContact(name, email, phone);
//       break;

//     case "remove":
//       removeContact(id);
//       break;

//   default:
//     console.warn("\x1B[31m Unknown action type!");
// }
// }

invokeAction(argv);
