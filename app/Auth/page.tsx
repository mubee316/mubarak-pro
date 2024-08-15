'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import Login from '@/app/components/sign-in/page';
import Signup from '@/app/components/sign-up/page';
import { auth } from '../firebase/config';

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
          <Login />
        </TabsContent>
        <TabsContent value="Signup">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Auth = () => {
  return (
    <Suspense fallback={<div>Loading Auth...</div>}>
      <AuthContent />
    </Suspense>
  );
};

export default Auth;
