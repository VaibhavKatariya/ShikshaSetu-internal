'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase/config';

export default function LearnerDashboard() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/learner/signin');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div>
      <Header page="dashboard" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Learner Dashboard</h1>
        <p>Welcome, {user.email}!</p>
        {/* dashboard content */}
      </div>
    </div>
  );
}