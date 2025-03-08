// @project
import { useAuth } from 'src/contexts/AuthContext';

/***************************  HOOKS - CONFIG  ***************************/

export default function useCurrentUser() {
  const { currentUser, loading } = useAuth();
  return { userData: currentUser, isProcessing: loading };
}
