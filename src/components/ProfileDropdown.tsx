import React, { useRef, useEffect } from 'react';
import { LogOut, Settings, Layout, Heart, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { logout, getUser } from '../utils/auth';

interface ProfileDropdownProps {
  onClose: () => void;
}

export function ProfileDropdown({ onClose }: ProfileDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const user = getUser();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleLogout = () => {
    logout();
    navigate('/');
    onClose();
  };

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl py-2 z-50" ref={dropdownRef}>
      <div className="px-4 py-3 border-b">
        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
        <p className="text-sm text-gray-500">{user?.email}</p>
      </div>

      <div className="py-2">
        <button
          onClick={() => {
            navigate('/dashboard');
            onClose();
          }}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
        >
          <Layout className="w-4 h-4 mr-3" />
          Dashboard
        </button>
        
        <button
          onClick={() => {
            navigate('/profile/favorites');
            onClose();
          }}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
        >
          <Heart className="w-4 h-4 mr-3" />
          Liked Doctors
        </button>

        <button
          onClick={() => {
            navigate('/messages');
            onClose();
          }}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
        >
          <MessageSquare className="w-4 h-4 mr-3" />
          Messages
        </button>

        <button
          onClick={() => {
            navigate('/profile/settings');
            onClose();
          }}
          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
        >
          <Settings className="w-4 h-4 mr-3" />
          Profile Settings
        </button>
      </div>

      <div className="border-t py-2">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
        >
          <LogOut className="w-4 h-4 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}