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

export type Recipe = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  isLiked: boolean;
};

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Margherita Pizza',
    description: 'Pizza with mozzarella cheese, tomato sauce, and fresh basil.',
    imageUrl:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80',
    isLiked: true,
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Crispy toast with mashed avocado, cherry tomatoes and seeds.',
    imageUrl:
      'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
  {
    id: '3',
    title: 'Fresh Pancakes',
    description: 'Fluffy pancakes topped with fresh berries and maple syrup.',
    imageUrl:
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
  {
    id: '4',
    title: 'Salad Sara',
    description: 'Healthy green salad with fresh vegetables and olive oil.',
    imageUrl:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
  {
    id: '5',
    title: 'Berry Smoothie',
    description: 'Refreshing mix of wild berries, banana, and almond milk.',
    imageUrl:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
  {
    id: '6',
    title: 'Cheesy Pasta',
    description: 'Creamy pasta with three types of cheese and herbs.',
    imageUrl:
      'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
  {
    id: '7',
    title: 'Classic Burger',
    description:
      'Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce.',
    imageUrl:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
  {
    id: '8',
    title: 'Chocolate Cake',
    description: 'Rich and moist chocolate cake layered with chocolate ganache.',
    imageUrl:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80',
    isLiked: false,
  },
];
