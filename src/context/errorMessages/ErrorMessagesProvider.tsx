// src/context/form/FormProvider.tsx
import { useReducer, type ReactNode } from 'react';
import { errorMessagesReducer, initialState } from './ErrorMessagesReducer';
import { ErrorMessagesContext } from './ErrorMessagesContext';
import {
  SET_PHOTO_ERROR,
  CLEAR_PHOTO_ERROR,
  SET_NAME_ERROR,
  CLEAR_NAME_ERROR,
  SET_EMAIL_ERROR,
  CLEAR_EMAIL_ERROR,
  SET_GITHUB_ERROR,
  CLEAR_GITHUB_ERROR,
  RESET_ERROR,
} from '../types';

export function ErrorMessagesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(errorMessagesReducer, initialState);

  const setPhotoError = (photo: string) => dispatch({ type: SET_PHOTO_ERROR, payload: photo });
  const setNameError = (name: string) => dispatch({ type: SET_NAME_ERROR, payload: name });
  const setEmailError = (email: string) => dispatch({ type: SET_EMAIL_ERROR, payload: email });
  const setGithubError = (github: string) => dispatch({ type: SET_GITHUB_ERROR, payload: github });
  const clearPhotoError = () => dispatch({ type: CLEAR_PHOTO_ERROR });
  const clearNameError = () => dispatch({ type: CLEAR_NAME_ERROR });
  const clearEmailError = () => dispatch({ type: CLEAR_EMAIL_ERROR });
  const clearGithubError = () => dispatch({ type: CLEAR_GITHUB_ERROR });
  const resetError = () => dispatch({ type: RESET_ERROR });

  return (
    <ErrorMessagesContext.Provider
      value={{
        state,
        setPhotoError,
        setNameError,
        setEmailError,
        setGithubError,
        clearPhotoError,
        clearNameError,
        clearEmailError,
        clearGithubError,
        resetError,
      }}
    >
      {children}
    </ErrorMessagesContext.Provider>
  );
}
