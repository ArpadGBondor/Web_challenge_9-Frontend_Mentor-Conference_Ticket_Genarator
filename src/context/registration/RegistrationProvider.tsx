// src/context/form/FormProvider.tsx
import { useReducer, type ReactNode } from 'react';
import { formReducer, initialState } from './RegistrationReducer';
import { RegistrationContext } from './RegistrationContext';
import { RESET_FORM, SET_EMAIL, SET_GITHUB, SET_NAME, SET_PHOTO, CLEAR_PHOTO } from '../types';
import { useErrorMessagesContext } from '../errorMessages/useErrorMessagesContext';

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { clearPhotoError, clearNameError, clearEmailError, clearGithubError, resetError } = useErrorMessagesContext();

  const setName = (name: string) => {
    clearNameError();
    dispatch({ type: SET_NAME, payload: name });
  };
  const setEmail = (email: string) => {
    clearEmailError();
    dispatch({ type: SET_EMAIL, payload: email });
  };
  const setGithub = (github: string) => {
    clearGithubError();
    dispatch({ type: SET_GITHUB, payload: github });
  };
  const setPhoto = (photo: string) => {
    clearPhotoError();
    dispatch({ type: SET_PHOTO, payload: photo });
  };
  const clearPhoto = () => {
    clearPhotoError();
    dispatch({ type: CLEAR_PHOTO });
  };
  const reset = () => {
    resetError();
    dispatch({ type: RESET_FORM });
  };

  return (
    <RegistrationContext.Provider value={{ state, setName, setEmail, setGithub, setPhoto, clearPhoto, reset }}>
      {children}
    </RegistrationContext.Provider>
  );
}
