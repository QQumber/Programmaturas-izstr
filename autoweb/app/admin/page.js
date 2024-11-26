"use client";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      router.push('/'); // Redirect to home page if not admin
    }
  }, [user, router]);

  // Don't render anything while checking auth status or if not admin
  if (!user || user.role !== 'admin') {
    return null;
  }

  const employees = [
    { id: 1, name: "Vārds Uzvārds" },
    { id: 2, name: "Vārds Uzvārds" },
    { id: 3, name: "Vārds Uzvārds" },
    { id: 4, name: "Vārds Uzvārds" },
    { id: 5, name: "Vārds Uzvārds" },
  ];

  const applications = [
    { id: 1, name: "Vārds1 Uzvārds", details: "Auto Nr.1, 01.10.2024 10:00" },
    { id: 2, name: "Vārds2 Uzvārds", details: "Auto Nr.2, Datums un laiks" },
    { id: 3, name: "Vārds3 Uzvārds", details: "Auto Nr.3, Datums un laiks" },
    { id: 4, name: "Vārds4 Uzvārds", details: "Auto Nr.4, Datums un laiks" },
    { id: 5, name: "Vārds1 Uzvārds", details: "Auto Nr.1, 01.10.2024 10:00" },
    { id: 6, name: "Vārds2 Uzvārds", details: "Auto Nr.2, Datums un laiks" },
    { id: 7, name: "Vārds3 Uzvārds", details: "Auto Nr.3, Datums un laiks" },
    { id: 8, name: "Vārds4 Uzvārds", details: "Auto Nr.4, Datums un laiks" },
    { id: 11, name: "Vārds1 Uzvārds", details: "Auto Nr.1, 01.10.2024 10:00" },
    { id: 12, name: "Vārds2 Uzvārds", details: "Auto Nr.2, Datums un laiks" },
    { id: 13, name: "Vārds3 Uzvārds", details: "Auto Nr.3, Datums un laiks" },
    { id: 14, name: "Vārds4 Uzvārds", details: "Auto Nr.4, Datums un laiks" },
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
                {applications.map((app) => (
                  <div key={app.id} className="admin-list-item">
                    <span className="admin-name">{app.name}</span>
                    <span className="admin-details">{app.details}</span>
                    <a href="#" className="admin-report-link">
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
    </>
  );
};

export default AdminPage;