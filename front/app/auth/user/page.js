"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';

export default function User() {
  const router = useRouter();

  const [email, setEmail] = useState('');

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userEmail = urlSearchParams.get('email');

    if (!userEmail) {
      // Rediriger si l'e-mail n'est pas disponible
      router.push('/auth/login');
    } else {
      setEmail(userEmail);
    }
  }, [router]);

  return (
    <>
    <div className='d-flex w-100 vh-100 bg-success justify-content-center align-items-center'>
    <div className="bg-white p-3 rounded  w-80">
          <h2>Welcome! {email}</h2>
          <p>This is the user page.</p>
          <Button onClick={() => router.push('/') } variant="outline-danger">LogOut</Button>{' '}

        </div>
    </div>
    
    
    </>
  );
}