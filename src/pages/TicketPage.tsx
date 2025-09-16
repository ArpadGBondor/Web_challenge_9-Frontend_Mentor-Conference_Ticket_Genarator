import TicketHeader from '../components/headers/TicketHeader';
import Ticket from '../components/ticket/Ticket';
import { useRegistrationContext } from '../context/registration/useRegistrationContext';
import { useNavigate } from 'react-router-dom';
import ChallengeFooter from '../components/footers/ChallengeFooter';
import { useEffect } from 'react';

export default function TicketPage() {
  const { state: formState } = useRegistrationContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if form is incomplete
    if (!formState.name || !formState.email || !formState.github || !formState.photo) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <TicketHeader name={formState.name} email={formState.email} />
      <Ticket name={formState.name} github={formState.github} ticketId={'123456'} photo={formState.photo} />
      <ChallengeFooter />
    </div>
  );
}
