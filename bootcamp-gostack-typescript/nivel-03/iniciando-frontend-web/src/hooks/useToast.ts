import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext';
import IToastContextData from '../interfaces/IToastContext';

function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useAuth must be used within an ToastContext');
  }
  return context;
}

export default useToast;
