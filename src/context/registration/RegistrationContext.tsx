import { createContext } from 'react';
import { type FormState, initialState } from './RegistrationReducer';

interface RegistrationContextProps {
  state: FormState;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setGithub: (github: string) => void;
  setPhoto: (photo: string) => void;
  clearPhoto: () => void;
  reset: () => void;
}

export const RegistrationContext = createContext<RegistrationContextProps>({
  state: initialState,
  setName: () => {},
  setEmail: () => {},
  setGithub: () => {},
  setPhoto: () => {},
  clearPhoto: () => {},
  reset: () => {},
});
