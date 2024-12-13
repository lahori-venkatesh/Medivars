import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';
import { NavigationLinks } from './NavigationLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  user: User | null;
  onSignupClick: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  isLoggedIn,
  user,
  onSignupClick,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <div className="flex flex-col space-y-4">
          {isLoggedIn && user && (
            <div className="flex items-center space-x-3 px-3 py-2">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-blue-600 font-semibold">
                    {user.name.charAt(0)}
                  </span>
                )}
              </div>
              <span className="font-medium text-gray-900">{user.name}</span>
            </div>
          )}

          <Link
            to="/"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/doctors"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2"
            onClick={onClose}
          >
            Find Doctors
          </Link>
          <Link
            to="/appointments"
            className="text-gray-600 hover:text-gray-900 block px-3 py-2"
            onClick={onClose}
          >
            Appointments
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2"
                onClick={onClose}
              >
                Dashboard
              </Link>
              <Link
                to="/profile/settings"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2"
                onClick={onClose}
              >
                Profile Settings
              </Link>
              <button
                onClick={() => {
                  // Handle logout
                  onClose();
                }}
                className="text-red-600 hover:text-red-700 block w-full text-left px-3 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                onSignupClick();
                onClose();
              }}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors mt-4"
            >
              Sign Up
            </button>
          )}
        </div>
      </div>
    </div>
  );
}