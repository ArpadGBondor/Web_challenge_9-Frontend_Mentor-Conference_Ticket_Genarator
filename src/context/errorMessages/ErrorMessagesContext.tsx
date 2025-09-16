import { createContext } from 'react';
import { type ErrorMessagesState, initialState } from './ErrorMessagesReducer';

interface ErrorMessagesContextProps {
  state: ErrorMessagesState;
  setPhotoError: (photo: string) => void;
  setNameError: (name: string) => void;
  setEmailError: (email: string) => void;
  setGithubError: (github: string) => void;
  clearPhotoError: () => void;
  clearNameError: () => void;
  clearEmailError: () => void;
  clearGithubError: () => void;
  resetError: () => void;
}

export const ErrorMessagesContext = createContext<ErrorMessagesContextProps>({
  state: initialState,
  setPhotoError: () => {},
  setNameError: () => {},
  setEmailError: () => {},
  setGithubError: () => {},
  clearPhotoError: () => {},
  clearNameError: () => {},
  clearEmailError: () => {},
  clearGithubError: () => {},
  resetError: () => {},
});
