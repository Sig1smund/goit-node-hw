const fs = require("fs").promises;
const path = require("node:path");

const contactsPath = path.dirname("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  return contactsPath;
}

function getContactById(contactId) {
  const contact = contactsPath.filter((contact) => contact.id === contactId);
  return contact.id === contactId ? contact : null;
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  const index = contactsPath.findIndex((item) => item.id === contactId);
  const erasedContact = contactsPath.splice(index, 1);
  return erasedContact;
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  const newContact = {
    id: contactsPath.length + 1,
    name,
    email,
    phone,
  };
  contactsPath.push(newContact);
  return newContact;
  // ...твой код. Возвращает объект добавленного контакта.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
