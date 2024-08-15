'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import dynamic from 'next/dynamic';
// import SignUp from '../components/sign-up/page';
// import SignIn from '../components/sign-in/page';

const SignIn = dynamic(() => import('../components/sign-in/page'));
const SignUp = dynamic(() => import('../components/sign-up/page'));

// Import Firebase config only if it's used in this component
// import { auth } from '../firebase/config';

const AuthContent = () => {
  const searchParams = useSearchParams();
  const createNew = searchParams.get("createNew");

  return (
    <div className='mt-36 flex flex-col items-center gap-10'>
      <h1 className='text-4xl font-extrabold'>
        {createNew ? "Hold up! Let's Login First" : "Login / Signup"}
      </h1>
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <SignIn />
        </TabsContent>
        <TabsContent value="Signup">
          <SignUp />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default function Auth() {
  return (
    <Suspense fallback={<div className='flex justify-center items-center min-h-screen'>Loading Auth...</div>}>
      <AuthContent />
    </Suspense>
  );
}