"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function HomeButtonRedirection() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <>
    <button onClick={handleClick}>
      Go to Home
    </button>
    {/* <Link href="/">
      Go to Home
    </Link> */}
    </>
  )
}
