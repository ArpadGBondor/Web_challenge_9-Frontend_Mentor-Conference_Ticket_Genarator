import { SET_NAME, SET_EMAIL, SET_GITHUB, SET_PHOTO, CLEAR_PHOTO, RESET_FORM } from '../types';

export interface FormState {
  name: string;
  email: string;
  github: string;
  photo: string | null; // Data URL
}

export type FormAction =
  | { type: typeof SET_NAME; payload: string }
  | { type: typeof SET_EMAIL; payload: string }
  | { type: typeof SET_GITHUB; payload: string }
  | { type: typeof SET_PHOTO; payload: string }
  | { type: typeof CLEAR_PHOTO }
  | { type: typeof RESET_FORM };

export const initialState: FormState = {
  name: '',
  email: '',
  github: '',
  photo: null,
};

export function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_GITHUB:
      return { ...state, github: action.payload };
    case SET_PHOTO:
      return { ...state, photo: action.payload };
    case CLEAR_PHOTO:
      return { ...state, photo: initialState.photo };
    case RESET_FORM:
      return { ...initialState };
    default:
      return { ...state };
  }
}
