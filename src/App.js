import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import CarsList from "./pages/CarsList";
import DriverList from "./pages/DriverList";
import EmployeeList from "./pages/EmployeeList";

const PlaceholderPage = ({ title }) => (
  <div className="container-fluid py-4">
    <h3 className="mb-3">{title}</h3>
    <p className="text-muted">
      This section is coming soon. Dashboard already shows key insights for this
      area.
    </p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="instructors" element={<EmployeeList />} />
          <Route path="students" element={<PlaceholderPage title="Students" />} />
          <Route path="bookings" element={<PlaceholderPage title="Bookings" />} />
          <Route path="vehicles" element={<CarsList />} />
          <Route path="documents" element={<PlaceholderPage title="Documents" />} />
          <Route path="payments" element={<PlaceholderPage title="Payments" />} />
          <Route path="reports" element={<PlaceholderPage title="Reports" />} />
          <Route path="settings" element={<PlaceholderPage title="Settings" />} />

          {/* Legacy routes still available */}
          <Route path="cars" element={<CarsList />} />
          <Route path="drivers" element={<DriverList />} />
          <Route path="employees" element={<EmployeeList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
