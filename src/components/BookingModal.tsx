import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Doctor, TimeSlot } from '../types';
import { Calendar } from './Calendar';
import { PaymentSection } from './PaymentSection';
import { format } from 'date-fns';
import { toast } from 'sonner';

interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
  onBook: (slot: TimeSlot) => void;
}

export function BookingModal({ doctor, onClose, onBook }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<'slot' | 'payment'>('slot');

  const availableDates = Array.from(
    new Set(doctor.availableSlots.map(slot => slot.date))
  );

  const availableSlots = doctor.availableSlots.filter(
    slot => format(new Date(slot.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd') && !slot.isBooked
  );

  const handlePaymentSuccess = (paymentId: string) => {
    if (selectedSlot) {
      try {
        onBook(selectedSlot);
        toast.success('Appointment booked successfully!');
        onClose();
      } catch (error) {
        toast.error('Failed to book appointment. Please try again.');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl font-semibold mb-4">Book Appointment</h2>
        
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-medium text-lg">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              {doctor.location && (
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{doctor.location.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {step === 'slot' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-4 flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2" />
                  Select Date
                </h4>
                <Calendar
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  availableDates={availableDates}
                />
              </div>

              <div>
                <h4 className="font-medium mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Available Slots
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-3 rounded border text-left ${
                        selectedSlot?.id === slot.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="text-sm font-medium">{slot.time}</div>
                    </button>
                  ))}
                  {availableSlots.length === 0 && (
                    <p className="col-span-2 text-gray-500 text-center py-4">
                      No available slots for this date
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => selectedSlot && setStep('payment')}
                disabled={!selectedSlot}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue to Payment
              </button>
            </div>
          </>
        ) : (
          <PaymentSection
            amount={doctor.consultationFee || 500}
            onSuccess={handlePaymentSuccess}
            onError={(error) => {
              toast.error('Payment failed. Please try again.');
              console.error('Payment error:', error);
            }}
          />
        )}
      </div>
    </div>
  );
}