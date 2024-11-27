"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PendingAppointment from "../components/PendingAppointment";

const AdminPage = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [pendingAppointments, setPendingAppointments] = useState([]);
  const [pendingData, setPendingData] = useState();
  const [isPendingOpen, setIsPendingOpen] = useState(false);

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/'); // Redirect to home page if not admin
    }
  }, [user, router]);

  // Don't render anything while checking auth status or if not admin
  if (!user || user.role !== 'admin') {
    return null;
  }


  const togglePendingPopup = () => {
    setIsPendingOpen(!isPendingOpen);
  };

  const handlePendingClick = (data) => {
    setPendingData(data);
    togglePendingPopup();
  }

  const onStatusUpdate = (updatedAppointment) => {
    console.log(updatedAppointment);
    console.log(pendingAppointments);

    const newAppointmentList = pendingAppointments.filter(
      (appointment) => appointment.id !== updatedAppointment.id
    );

    console.log(newAppointmentList);
    setPendingAppointments(newAppointmentList);
  }

  useEffect(() => {
    const fetchPendingAppointments = async () => {
      try {
        const res = await fetch('/api/appointments/list');
        const data = await res.json();
        setPendingAppointments(data);
        console.log(data);
      } catch (err) {
        console.error('Error fetching pending appointments:', err);
      }
    };

    fetchPendingAppointments();
  }, [])

  const employees = [
    { id: 1, name: "Vārds Uzvārds" },
    { id: 2, name: "Vārds Uzvārds" },
    { id: 3, name: "Vārds Uzvārds" },
    { id: 4, name: "Vārds Uzvārds" },
    { id: 5, name: "Vārds Uzvārds" },
  ];

  return (
    <>
      <Navbar/>

      <div className="admin-container">
        <div className="admin-main-content">
          <div className="admin-left-panel">
            <div className="admin-card">
              <h3>Darbinieku saraksts</h3>
              <div className="admin-scrollable">
                {employees.map((employee) => (
                  <div key={employee.id} className="admin-list-item">
                    <span className="admin-name">{employee.name}</span>
                    <a href="#" className="admin-report-link">
                      pārskats
                    </a>
                  </div>
                ))}
              </div>
              <div className="admin-add-button">Pievienot jauno darbinieku +</div>
            </div>
          </div>

          <div className="admin-right-panel">
            <div className="admin-card">
              <h3>Pieteikumi</h3>
              <div className="admin-scrollable">
                {pendingAppointments.map((item) => (
                  <div key={item.id} className="admin-list-item">
                    <span className="admin-name">{item.name}</span>
                    <span className="admin-details">
                      {item.license_plate}, {item.time}, {item.date}
                    </span>
                    <a href="#" className="admin-report-link" onClick={() => handlePendingClick(item)}>
                      pārskats
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="admin-card">
              <h3>Grafiks</h3>
              <div className="admin-schedule-grid">
                {Array.from({ length: 30 }).map((_, index) => (
                  <div key={index} className="admin-grid-cell"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PendingAppointment
        appointmentData={pendingData}
        isOpen={isPendingOpen} 
        onClose={togglePendingPopup}
        onStatusUpdate={onStatusUpdate}
      />
    </>
  );
};

export default AdminPage;