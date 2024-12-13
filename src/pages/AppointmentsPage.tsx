import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

export function AppointmentsPage() {
  const appointments = [
    {
      id: '1',
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiologist',
      date: '2024-03-20',
      time: '09:00 AM',
      status: 'confirmed'
    },
    {
      id: '2',
      doctor: 'Dr. James Chen',
      specialty: 'Dermatologist',
      date: '2024-03-22',
      time: '02:00 PM',
      status: 'pending'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Appointments</h1>
      
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border-b last:border-b-0 p-6 flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {appointment.doctor}
              </h3>
              <p className="text-gray-600">{appointment.specialty}</p>
              
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {appointment.date}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {appointment.time}
                </div>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  appointment.status === 'confirmed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
              </span>
              
              <button className="text-blue-600 hover:text-blue-800">
                Reschedule
              </button>
              <button className="text-red-600 hover:text-red-800">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}