import { User } from '../types';

export async function login(email: string, password: string) {
  try {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email,
      mobile: '+1234567890',
      favorites: []
    };

    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('token', 'mock-token');

    return mockUser;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function signUp(name: string, email: string, mobile: string, password: string) {
  try {
    // Simulate API call
    const mockUser: User = {
      id: Date.now().toString(),
      name,
      email,
      mobile,
      favorites: []
    };

    localStorage.setItem('user', JSON.stringify(mockUser));
    localStorage.setItem('token', 'mock-token');

    return { user: mockUser, token: 'mock-token' };
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}

export function verifyOTP(mobile: string, otp: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(otp.length === 6);
    }, 1000);
  });
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function getUser(): User | null {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

export function updateUser(userData: Partial<User>) {
  const currentUser = getUser();
  if (currentUser) {
    const updatedUser = { ...currentUser, ...userData };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return updatedUser;
  }
  return null;
}

export function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
}