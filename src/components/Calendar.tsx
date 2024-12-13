import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  availableDates: string[];
}

export function Calendar({ selectedDate, onDateSelect, availableDates }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(selectedDate);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weeks = [];
  let week = Array(7).fill(null);

  days.forEach((day, index) => {
    const dayIndex = (firstDayOfMonth + index) % 7;
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = date.toISOString().split('T')[0];
    const isAvailable = availableDates.includes(dateString);
    
    week[dayIndex] = {
      day,
      date,
      isAvailable,
      isSelected: selectedDate.toDateString() === date.toDateString()
    };

    if (dayIndex === 6 || index === days.length - 1) {
      weeks.push([...week]);
      week = Array(7).fill(null);
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-medium">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {weeks.map((week, weekIndex) =>
          week.map((day, dayIndex) =>
            day ? (
              <button
                key={`${weekIndex}-${dayIndex}`}
                onClick={() => day.isAvailable && onDateSelect(day.date)}
                disabled={!day.isAvailable}
                className={`
                  p-2 rounded-md text-sm
                  ${day.isSelected ? 'bg-blue-600 text-white' : ''}
                  ${day.isAvailable && !day.isSelected ? 'hover:bg-blue-50' : ''}
                  ${!day.isAvailable ? 'text-gray-300 cursor-not-allowed' : ''}
                `}
              >
                {day.day}
              </button>
            ) : (
              <div key={`${weekIndex}-${dayIndex}`} />
            )
          )
        )}
      </div>
    </div>
  );
}