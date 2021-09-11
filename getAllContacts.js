const fs = require("fs/promises");

const getAllContacts = async (filePath) => {
    const data = await fs.readFile(filePath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
}

module.exports = getAllContacts;