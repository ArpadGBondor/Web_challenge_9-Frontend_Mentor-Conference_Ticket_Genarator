import { useNavigate } from 'react-router-dom';
import { useRegistrationContext } from '../../context/registration/useRegistrationContext';
import { useErrorMessagesContext } from '../../context/errorMessages/useErrorMessagesContext';
import TextInput from '../inputs/TextInput';
import FileInput from '../inputs/FileInput';
import FormButton from '../buttons/FormButton';

export default function Registration() {
  const { state: formState, setName, setEmail, setGithub, setPhoto, clearPhoto } = useRegistrationContext();
  const {
    state: errorState,
    setPhotoError,
    clearPhotoError,
    setNameError,
    setEmailError,
    setGithubError,
    resetError,
  } = useErrorMessagesContext();
  const navigate = useNavigate();

  const handlePhotoChange = (file: File | null) => {
    if (!file) {
      clearPhoto();
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    resetError();
    let valid: boolean = true;

    // Name validation
    if (!formState.name.trim()) {
      setNameError('Please enter your name.');
      valid = false;
    }

    // email validation
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email.trim()) {
      setEmailError('Please enter your email address.');
      valid = false;
    } else if (!emailRegex.test(formState.email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    // GitHub username validation
    const githubRegex = /^(?!-)(?!.*--)[a-zA-Z0-9-]{1,39}(?<!-)$/;
    if (!formState.github.trim()) {
      setGithubError('Please enter your GitHub username.');
      valid = false;
    } else if (!githubRegex.test(formState.github)) {
      setGithubError(
        'Invalid GitHub username. Use 1–39 letters, numbers, or single hyphens (cannot begin or end with a hyphen).'
      );
      valid = false;
    }

    // Photo validation
    if (!formState.photo) {
      setPhotoError('Please upload your photo (JPG or PNG, max size: 500KB)');
      valid = false;
    }

    if (valid) navigate('/ticket');
  };

  return (
    <div className="w-full max-w-lg p-6 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FileInput
          label="Upload Avatar"
          preview={formState.photo}
          onChange={handlePhotoChange}
          error={errorState.photoError}
          setError={setPhotoError}
          clearError={clearPhotoError}
        />
        <TextInput
          type="text"
          placeholder=""
          label="Full Name"
          value={formState.name}
          onChange={(e) => setName(e.target.value)}
          error={errorState.nameError}
        />
        <TextInput
          type="email"
          placeholder="example@email.com"
          label="Email Address"
          value={formState.email}
          onChange={(e) => setEmail(e.target.value)}
          error={errorState.emailError}
        />
        <TextInput
          type="text"
          placeholder="@yourusername"
          label="GitHub Username"
          value={formState.github}
          onChange={(e) => setGithub(e.target.value)}
          error={errorState.githubError}
        />

        <FormButton type="submit" variant="primary">
          Generate my Ticket
        </FormButton>
      </form>
    </div>
  );
}
