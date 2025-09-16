// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegistrationProvider } from './context/registration/RegistrationProvider';
import { ErrorMessagesProvider } from './context/errorMessages/ErrorMessagesProvider';
import RegistrationPage from './pages/RegistrationPage';
import TicketPage from './pages/TicketPage';

export default function App() {
  return (
    <ErrorMessagesProvider>
      <RegistrationProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegistrationPage />} />
            <Route path="/ticket" element={<TicketPage />} />
          </Routes>
        </BrowserRouter>
      </RegistrationProvider>
    </ErrorMessagesProvider>
  );
}
