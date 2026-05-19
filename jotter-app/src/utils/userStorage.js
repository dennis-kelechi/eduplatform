// src/utils/userStorage.js
const STORAGE_KEY = 'registered_users';

export const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEY);
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(u => u.email === email);
};

export const validateCredentials = (email, password) => {
  const user = findUserByEmail(email);
  return user && user.password === password ? user : null;
};