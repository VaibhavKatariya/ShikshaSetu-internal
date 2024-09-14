"use client"
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { auth } from "@/lib/firebase/config";
import { IconFidgetSpinner } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignUpPage() {

  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <IconFidgetSpinner className='animate-spin w-12 h-12' />
      </div>
    )
  } else if (user) {
    // redirect user if already signed in
    // router.push('');
  }

  return (
    <>
      <Header />
      SignUP Page
      <Footer />
    </>
  )
}