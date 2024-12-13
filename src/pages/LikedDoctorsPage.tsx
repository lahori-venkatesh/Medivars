import React from 'react';
import { DoctorCard } from '../components/DoctorCard';
import { doctors } from '../data/doctors';
import { getUser } from '../utils/auth';
import { Heart } from 'lucide-react';

export function LikedDoctorsPage() {
  const user = getUser();
  const likedDoctors = doctors.filter(doctor => 
    user?.favorites?.includes(doctor.id)
  );

  if (likedDoctors.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Liked Doctors</h1>
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-600 mb-2">No liked doctors yet</h2>
          <p className="text-gray-500">
            Like doctors to save them here for quick access
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Liked Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {likedDoctors.map((doctor) => (
          <DoctorCard
            key={doctor.id}
            doctor={doctor}
            onBookAppointment={(doctorId) => {
              // Handle booking appointment
              console.log('Booking appointment with doctor:', doctorId);
            }}
          />
        ))}
      </div>
    </div>
  );
}