import { useContext } from 'react';
import { ErrorMessagesContext } from './ErrorMessagesContext';

export function useErrorMessagesContext() {
  const context = useContext(ErrorMessagesContext);
  if (!context) {
    throw new Error('useErrorMessagesContext must be used within a ErrorMessagesProvider');
  }
  return context;
}
