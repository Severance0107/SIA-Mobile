import React, { useEffect } from 'react'
import { AuthProvider } from '../context/authProvider';
import { Slot, router } from 'expo-router';


export default function Root() {

  useEffect(() => {
    router.push('/auth')
  },[])

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}
