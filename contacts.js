const fs = require('fs').promises;
const path = require('path');

// const contactsPath = path.resolve('./db/contacts.json');
const contactsPath = path.join(__dirname, '/db/contacts.json');

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
};

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    return result || null;
};

async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');

    } catch (err) {
        console.error(err);
    }
};

async function addContact(name, email, phone) {
    try {
        const data = await fs.readFile(contactsPath, 'utf8');

    } catch (err) {
        console.error(err);
    }
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};