import React, { useState } from 'react';
import { Star, Clock, GraduationCap, Award, Heart, MessageCircle, Users } from 'lucide-react';
import { Doctor } from '../types';
import { toggleFavoriteDoctor, isDocktorLiked } from '../utils/favorites';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

export function DoctorCard({ doctor, onBookAppointment }: DoctorCardProps) {
  const [isFavorite, setIsFavorite] = useState(isDocktorLiked(doctor.id));

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = toggleFavoriteDoctor(doctor.id);
    setIsFavorite(newState);
  };

  const startChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Implement chat functionality
    console.log('Starting chat with', doctor.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'
            }`}
          />
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {doctor.specialty}
            </span>
          </div>
          <button
            onClick={startChat}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="ml-1 text-gray-600">{doctor.rating}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-gray-500" />
            <span className="ml-1 text-gray-600">{doctor.experience} years</span>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 text-gray-500" />
            <span className="ml-1 text-gray-600">{doctor.patientsServed}+ patients</span>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <GraduationCap className="w-4 h-4 mt-1 flex-shrink-0" />
            <div>
              {doctor.education.map((edu, index) => (
                <div key={index} className="mb-1">{edu}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {doctor.languages.map((language, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-600" />
          <span className="text-sm text-gray-600">{doctor.awards[0]}</span>
        </div>

        <button
          onClick={() => onBookAppointment(doctor.id)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}