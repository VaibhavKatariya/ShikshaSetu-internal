import { useRouter } from 'next/navigation';

const useAuthHook = () => {
  const router = useRouter();

  const handleLearnerSignIn = () => {
    router.push('/join/login');
  };

  const handleLearnerSignUp = () => {
    router.push('/join/signup');
  };

  return { handleLearnerSignIn, handleLearnerSignUp };
};

export default useAuthHook;
