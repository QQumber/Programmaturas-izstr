"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import LoginPopup from "./LoginPopup";

export default function BookingComponent({ selectedDate }) {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const { user } = useAuth();

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", 
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  useEffect(() => {
    if (selectedDate && !user) {
      setShowLoginPopup(true);
      return;
    }

    if (selectedDate && user) {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      
      fetch(`/api/appointments/times?date=${formattedDate}`)
        .then(res => res.json())
        .then(bookedTimes => {
          const available = timeSlots.filter(time => !bookedTimes.includes(time));
          setAvailableTimes(available);
        })
        .catch(error => {
          console.error('Error fetching booked times:', error);
        });
    }
  }, [selectedDate, user]);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    // Here you can add logic to proceed with booking
  };

  return (
    <>
      {showLoginPopup && (
        <LoginPopup 
          isOpen={showLoginPopup}
          onClose={() => setShowLoginPopup(false)}
          onCreateAccountClick={() => {
            setShowLoginPopup(false);
            // Handle register popup if needed
          }}
        />
      )}

      {!user ? (
        <div className="booking-login-prompt">
          <p>Lūdzu piesakieties, lai veiktu rezervāciju</p>
        </div>
      ) : !selectedDate ? (
        <div className="booking-prompt">
          <p>Izvēlieties datumu kalendārā</p>
        </div>
      ) : (
        <div className="time-slots">
          <h3>Pieejamie laiki {selectedDate.toLocaleDateString('lv-LV')}</h3>
          <div className="time-grid">
            {timeSlots.map((time) => (
              <button
                key={time}
                className={`time-slot ${
                  !availableTimes.includes(time) ? 'time-slot-booked' : ''
                } ${selectedTime === time ? 'time-slot-selected' : ''}`}
                disabled={!availableTimes.includes(time)}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}