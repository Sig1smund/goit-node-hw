const fs = require("fs").promises;
const path = require("node:path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, "utf8");
  return console.table(JSON.parse(contacts));
}

async function getContactById(contactId) {
  const contacts = await fs.readFile(contactsPath, "utf8");
  const contact = JSON.parse(contacts).find((item) => item.id === contactId);
  return contact || null;
}

async function removeContact(contactId) {
  const contacts = await fs.readFile(contactsPath, "utf8");
  const contactsArray = JSON.parse(contacts);
  const index = contactsArray.findIndex((item) => item.id === contactId);
  if (index === -1) return null;
  const [result] = contactsArray.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contactsArray, null, 2));
  return result || null;
}

async function addContact(name, email, phone) {
  const contacts = await fs.readFile(contactsPath, "utf8");
  const contactsArray = JSON.parse(contacts);
  const newContact = {
    id: contactsPath.length + 1,
    name,
    email,
    phone,
  };
  contactsArray.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contactsArray, null, 2));
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
