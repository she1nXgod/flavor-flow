import type { User } from '../types';

export const mockUsers: User[] = [
  {
    username: 'admin',
    password: 'admin',
  },
];

// Хелпер, который достает актуальный список пользователей (из фикстур + зарегистрированных)
export const getUsersFromStorage = (): User[] => {
  const localData = localStorage.getItem('users_db');
  if (!localData) {
    // Если в localStorage еще ничего нет, записываем туда начального пользователя
    localStorage.setItem('users_db', JSON.stringify(mockUsers));
    return mockUsers;
  }
  return JSON.parse(localData);
};
