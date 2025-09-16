import FormHeader from '../components/headers/FormHeader';
import Registration from '../components/forms/Registration';
import ChallengeFooter from '../components/footers/ChallengeFooter';

export default function RegistrationPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start">
      <FormHeader />
      <Registration />
      <ChallengeFooter />
    </div>
  );
}
