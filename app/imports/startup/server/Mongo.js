import { Meteor } from 'meteor/meteor';
import { Account } from '../../api/account/Account';

/* eslint-disable no-console */

// Initialize the database with a default contact document.
function addContact(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Account.collection.insert(data);
}

// Initialize the ContactsCollection if empty.
if (Account.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default Account.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }
}
