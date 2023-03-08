import axios from 'axios';

const contactsIntstance = axios.create({
  baseURL: 'https://640714fd862956433e63643a.mockapi.io/api/contacts',
});

export const fetchContacts = () => {
  return contactsIntstance.get();
};

export const addContact = data => {
  return contactsIntstance.post('', data);
};

export const deleteContact = id => {
  return contactsIntstance.delete(`/${id}`);
};
