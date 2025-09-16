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

export interface ErrorMessagesState {
  nameError: string | null;
  emailError: string | null;
  githubError: string | null;
  photoError: string | null; // Data URL
}

export type ErrorMessagesAction =
  | { type: typeof SET_PHOTO_ERROR; payload: string }
  | { type: typeof SET_NAME_ERROR; payload: string }
  | { type: typeof SET_EMAIL_ERROR; payload: string }
  | { type: typeof SET_GITHUB_ERROR; payload: string }
  | { type: typeof CLEAR_PHOTO_ERROR }
  | { type: typeof CLEAR_NAME_ERROR }
  | { type: typeof CLEAR_EMAIL_ERROR }
  | { type: typeof CLEAR_GITHUB_ERROR }
  | { type: typeof RESET_ERROR };

export const initialState: ErrorMessagesState = {
  nameError: null,
  emailError: null,
  githubError: null,
  photoError: null,
};

export function errorMessagesReducer(state: ErrorMessagesState, action: ErrorMessagesAction): ErrorMessagesState {
  switch (action.type) {
    case SET_PHOTO_ERROR:
      return { ...state, photoError: action.payload };
    case SET_NAME_ERROR:
      return { ...state, nameError: action.payload };
    case SET_EMAIL_ERROR:
      return { ...state, emailError: action.payload };
    case SET_GITHUB_ERROR:
      return { ...state, githubError: action.payload };
    case CLEAR_PHOTO_ERROR:
      return { ...state, photoError: initialState.photoError };
    case CLEAR_NAME_ERROR:
      return { ...state, nameError: initialState.nameError };
    case CLEAR_EMAIL_ERROR:
      return { ...state, emailError: initialState.emailError };
    case CLEAR_GITHUB_ERROR:
      return { ...state, githubError: initialState.githubError };
    case RESET_ERROR:
      return { ...initialState };
    default:
      return { ...state };
  }
}
