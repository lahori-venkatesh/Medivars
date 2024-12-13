import React from 'react';
import { Link } from 'react-router-dom';

export function NavigationLinks() {
  return (
    <>
      <Link to="/" className="text-gray-600 hover:text-gray-900">
        Home
      </Link>
      <Link to="/doctors" className="text-gray-600 hover:text-gray-900">
        Find Doctors
      </Link>
      <Link to="/appointments" className="text-gray-600 hover:text-gray-900">
        Appointments
      </Link>
    </>
  );
}