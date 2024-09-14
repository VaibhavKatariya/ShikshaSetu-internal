import { auth } from '@/lib/firebase/config';
import { useAuthState } from "react-firebase-hooks/auth";


export const SignedIn = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) return null;

  return <>{children}</>;
};