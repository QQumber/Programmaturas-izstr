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
  const [approvedAppointments, setApprovedAppointments] = useState([]);
  const [pendingData, setPendingData] = useState();
  const [isPendingOpen, setIsPendingOpen] = useState(false);

  // First useEffect for fetching appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Fetch pending appointments
        const pendingRes = await fetch('/api/appointments/list');
        if (!pendingRes.ok) {
          throw new Error('Failed to fetch pending appointments');
        }
        const pendingData = await pendingRes.json();
        setPendingAppointments(pendingData);

        // Fetch approved appointments
        const approvedRes = await fetch('/api/appointments/approved');
        if (!approvedRes.ok) {
          throw new Error('Failed to fetch approved appointments');
        }
        const approvedData = await approvedRes.json();
        setApprovedAppointments(approvedData);
      } catch (err) {
        console.error('Error fetching appointments:', err.message);
        // Optionally set some error state here if you want to show error messages to users
      }
    };

    fetchAppointments();
  }, []);

  // Handle appointment status update
  const handleAppointmentAction = async (appointmentId, status) => {
    try {
      const response = await fetch('/api/appointments/update_status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointment_id: appointmentId,
          status: status
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update appointment status');
      }

      // Update the appointments list after successful status update
      setApprovedAppointments(prev => 
        prev.filter(appointment => appointment.id !== appointmentId)
      );

    } catch (error) {
      console.error('Error updating appointment:', error);
      alert('Failed to update appointment status');
    }
  };

  // Second useEffect for auth check (moved after other hooks)
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
                      <span className="detail-label">Auto:</span> {item.license_plate}, 
                      <span className="detail-label">Laiks:</span> {item.time}, 
                      <span className="detail-label">Datums:</span> {item.date}
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
              <div className="admin-scrollable">
                {approvedAppointments.map((appointment) => (
                  <div key={appointment.id} className="admin-list-item">
                    <div className="appointment-info">
                      <div className="name-phone-container">
                        <span className="admin-name">{appointment.name}</span>
                        <span className="admin-phone">• {appointment.phone}</span>
                      </div>
                      <span className="admin-details">
                        {appointment.service_name} - {appointment.license_plate}
                      </span>
                      <span className="appointment-time">
                        {appointment.date}, {appointment.time}
                      </span>
                    </div>
                    <div className="appointment-actions">
                      <button 
                        className="btn-finish"
                        onClick={() => handleAppointmentAction(appointment.id, 'completed')}
                      >
                        Pabeigt
                      </button>
                      <button 
                        className="btn-cancel"
                        onClick={() => handleAppointmentAction(appointment.id, 'cancelled')}
                      >
                        Atcelt
                      </button>
                    </div>
                  </div>
                ))}
                {approvedAppointments.length === 0 && (
                  <div className="no-appointments">
                    Nav apstiprinātu rezervāciju
                  </div>
                )}
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