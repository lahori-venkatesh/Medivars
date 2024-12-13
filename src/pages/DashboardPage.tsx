import React from 'react';
import { Calendar, Clock, FileText, MessageSquare } from 'lucide-react';
import { doctors } from '../data/doctors';

export function DashboardPage() {
  const upcomingAppointments = [
    {
      id: '1',
      doctor: doctors[0],
      date: '2024-03-20',
      time: '09:00 AM',
      type: 'Regular Checkup'
    }
  ];

  const prescriptions = [
    {
      id: '1',
      doctor: doctors[0],
      date: '2024-03-15',
      medications: ['Medicine A - 2x daily', 'Medicine B - 1x daily'],
      notes: 'Take with meals'
    }
  ];

  const suggestedDoctors = doctors.slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          {upcomingAppointments.map(appointment => (
            <div key={appointment.id} className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-medium">{appointment.doctor.name}</p>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                {appointment.date} at {appointment.time}
              </div>
              <p className="text-sm text-gray-600 mt-1">{appointment.type}</p>
            </div>
          ))}
        </div>

        {/* Recent Prescriptions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Prescriptions</h2>
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          {prescriptions.map(prescription => (
            <div key={prescription.id} className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-medium">{prescription.doctor.name}</p>
              <p className="text-sm text-gray-600">{prescription.date}</p>
              <ul className="mt-2 space-y-1">
                {prescription.medications.map((med, index) => (
                  <li key={index} className="text-sm text-gray-600">• {med}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Doctor Suggestions */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recommended Doctors</h2>
            <MessageSquare className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-4">
            {suggestedDoctors.map(doctor => (
              <div key={doctor.id} className="flex items-center space-x-3">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{doctor.name}</p>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}