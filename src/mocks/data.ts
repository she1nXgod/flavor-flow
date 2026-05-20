import type { User } from '../types';

export const mockUser: User[] = [
  {
    username: 'admin',
    password: 'admin',
  },
];

if (typeof window !== 'undefined' && !localStorage.getItem('users_db')) {
  localStorage.setItem('users_db', JSON.stringify(mockUser));
}

export const getUsersFromStorage = (): User[] => {
  const localData = localStorage.getItem('users_db');
  return localData ? JSON.parse(localData) : mockUser;
};
