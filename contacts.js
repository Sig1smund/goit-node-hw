const fs = require("fs").promises;
const path = require("node:path");

const contactsPath = path.dirname("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    return data;
  });
}

function getContactById(contactId) {
  let contacts;
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    contacts = data;
    const contact = contacts.filter((contact) => contact.id === contactId);
    return contact.id === contactId ? contact : null;
  });
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  let contacts;
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    contacts = JSON.parse(data);
    const index = contacts.findIndex((item) => item.id === contactId);
    const erasedContact = contactsPath.splice(index, 1);
    fs.writeFile(contactsPath, JSON.stringify(erasedContact), (error) => {
      if (error) {
        console.error(error);
        return;
      }
    });
  });
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  let contacts;
  const newContact = {
    id: contactsPath.length + 1,
    name,
    email,
    phone,
  };
  fs.readFile(contactsPath, (error, data) => {
    if (error) {
      console.error(error);
      return;
    }
    contacts = data;
    contacts.push(newContact);
    return newContact;
  });

  // ...твой код. Возвращает объект добавленного контакта.
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
