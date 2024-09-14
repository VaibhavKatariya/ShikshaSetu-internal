'use client'
import { IconFidgetSpinner } from "@tabler/icons-react";
import { auth } from "@/lib/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, loading] = useAuthState(auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLearnerSignIn = () => {
    router.push('/learner/signin');
  };

  const handleLearnerSignUp = () => {
    router.push('/learner/signup');
  };

  if (loading) {
    return (
      <>
        <IconFidgetSpinner className='animate-spin w-12 min-h-screen mx-auto' />
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen">
        <div className={`bg-stone-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-300`}>
          {/* Pass toggleTheme to Header and Footer for theme switching */}
          <Header
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            handleLearnerSignUp={handleLearnerSignUp}
            handleLearnerSignIn={handleLearnerSignIn}
          />
          <HeroSection
            handleLearnerSignUp={handleLearnerSignUp}
            handleLearnerSignIn={handleLearnerSignIn}
          />
          <Footer/>
        </div>
      </div>
    </>
  );
}
