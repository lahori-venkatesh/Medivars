import { Doctor } from '../types';

export const specialties = [
  'Cardiologist',
  'Dermatologist',
  'Pediatrician',
  'Neurologist',
  'Orthopedist',
  'Psychiatrist',
  'Dentist',
  'Ophthalmologist',
  'ENT Specialist',
  'Gynecologist'
];

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Wilson',
    specialty: 'Cardiologist',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 12,
    rating: 4.8,
    patientsServed: 5000,
    education: [
      'MD in Cardiology - Johns Hopkins University',
      'Fellowship in Interventional Cardiology - Mayo Clinic',
      'Board Certified in Cardiovascular Disease'
    ],
    description: 'MD in Cardiology from Johns Hopkins University. Specialized in preventive cardiology and heart disease management.',
    availableSlots: [
      { id: '1', date: '2024-03-20', time: '09:00 AM', isBooked: false },
      { id: '2', date: '2024-03-20', time: '10:00 AM', isBooked: false }
    ],
    languages: ['English', 'Hindi', 'Telugu'],
    awards: ['Best Cardiologist 2023', 'Research Excellence Award']
  },
  {
    id: '2',
    name: 'Dr. Rajesh Kumar',
    specialty: 'Neurologist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 15,
    rating: 4.9,
    patientsServed: 6000,
    education: [
      'MBBS - AIIMS Delhi',
      'MD Neurology - NIMHANS',
      'Fellowship in Movement Disorders - Harvard Medical School'
    ],
    description: 'Expert in treating neurological disorders with extensive research experience.',
    availableSlots: [
      { id: '3', date: '2024-03-20', time: '02:00 PM', isBooked: false },
      { id: '4', date: '2024-03-20', time: '03:00 PM', isBooked: false }
    ],
    languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
    awards: ['Excellence in Neurology Research']
  },
  {
    id: '3',
    name: 'Dr. Priya Venkatesh',
    specialty: 'Pediatrician',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 10,
    rating: 4.7,
    patientsServed: 8000,
    education: [
      'MBBS - Madras Medical College',
      'MD Pediatrics - CMC Vellore',
      'Fellowship in Pediatric Emergency Medicine'
    ],
    description: 'Specialized in pediatric care with focus on developmental disorders.',
    availableSlots: [
      { id: '5', date: '2024-03-21', time: '09:00 AM', isBooked: false },
      { id: '6', date: '2024-03-21', time: '10:00 AM', isBooked: false }
    ],
    languages: ['English', 'Tamil', 'Telugu', 'Malayalam'],
    awards: ['Best Pediatrician 2023']
  },
  {
    id: '4',
    name: 'Dr. Arun Krishnan',
    specialty: 'Orthopedist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 18,
    rating: 4.9,
    patientsServed: 7000,
    education: [
      'MBBS - Bangalore Medical College',
      'MS Orthopedics - JIPMER',
      'Fellowship in Joint Replacement - UK'
    ],
    description: 'Specialized in joint replacement and sports medicine.',
    availableSlots: [
      { id: '7', date: '2024-03-21', time: '11:00 AM', isBooked: false },
      { id: '8', date: '2024-03-21', time: '12:00 PM', isBooked: false }
    ],
    languages: ['English', 'Kannada', 'Malayalam', 'Hindi'],
    awards: ['Excellence in Orthopedic Surgery']
  },
  {
    id: '5',
    name: 'Dr. Lakshmi Rao',
    specialty: 'Gynecologist',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 14,
    rating: 4.8,
    patientsServed: 5500,
    education: [
      'MBBS - Osmania Medical College',
      'MD Obstetrics & Gynecology - KIMS',
      'Fellowship in Infertility Medicine'
    ],
    description: 'Expert in women\'s health and infertility treatment.',
    availableSlots: [
      { id: '9', date: '2024-03-22', time: '09:00 AM', isBooked: false },
      { id: '10', date: '2024-03-22', time: '10:00 AM', isBooked: false }
    ],
    languages: ['English', 'Telugu', 'Hindi', 'Tamil'],
    awards: ['Best Gynecologist Award']
  },
  {
    id: '6',
    name: 'Dr. Suresh Menon',
    specialty: 'ENT Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 16,
    rating: 4.7,
    patientsServed: 6500,
    education: [
      'MBBS - Government Medical College, Trivandrum',
      'MS ENT - AIIMS',
      'Fellowship in Head and Neck Surgery'
    ],
    description: 'Specialized in ENT disorders and head-neck surgeries.',
    availableSlots: [
      { id: '11', date: '2024-03-22', time: '02:00 PM', isBooked: false },
      { id: '12', date: '2024-03-22', time: '03:00 PM', isBooked: false }
    ],
    languages: ['English', 'Malayalam', 'Tamil', 'Hindi'],
    awards: ['ENT Surgeon of the Year']
  },
  {
    id: '7',
    name: 'Dr. Ananya Reddy',
    specialty: 'Dermatologist',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 12,
    rating: 4.9,
    patientsServed: 4500,
    education: [
      'MBBS - Gandhi Medical College',
      'MD Dermatology - NIMS',
      'Fellowship in Cosmetic Dermatology'
    ],
    description: 'Expert in skin care and cosmetic procedures.',
    availableSlots: [
      { id: '13', date: '2024-03-23', time: '09:00 AM', isBooked: false },
      { id: '14', date: '2024-03-23', time: '10:00 AM', isBooked: false }
    ],
    languages: ['English', 'Telugu', 'Hindi', 'Kannada'],
    awards: ['Best Dermatologist Award']
  },
  {
    id: '8',
    name: 'Dr. Vijay Kumar',
    specialty: 'Psychiatrist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300',
    experience: 20,
    rating: 4.8,
    patientsServed: 3000,
    education: [
      'MBBS - Kasturba Medical College',
      'MD Psychiatry - NIMHANS',
      'Fellowship in Child Psychiatry - UK'
    ],
    description: 'Specialized in mood disorders and anxiety treatment.',
    availableSlots: [
      { id: '15', date: '2024-03-23', time: '02:00 PM', isBooked: false },
      { id: '16', date: '2024-03-23', time: '03:00 PM', isBooked: false }
    ],
    languages: ['English', 'Kannada', 'Hindi', 'Telugu'],
    awards: ['Mental Health Excellence Award']
  }
];